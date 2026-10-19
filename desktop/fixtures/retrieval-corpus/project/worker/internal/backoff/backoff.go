// Package backoff implements capped exponential backoff with jitter for
// retrying flaky calls (SMTP relay, carrier partner APIs).
package backoff

import (
	"context"
	"errors"
	"math/rand"
	"time"
)

// Policy controls how retries are spaced.
type Policy struct {
	Initial     time.Duration
	Max         time.Duration
	Multiplier  float64
	MaxAttempts int
}

// DefaultPolicy is used by job handlers unless they override it.
var DefaultPolicy = Policy{Initial: 200 * time.Millisecond, Max: 30 * time.Second, Multiplier: 2, MaxAttempts: 6}

// ErrPermanent wraps errors that must not be retried.
type ErrPermanent struct{ Err error }

func (e ErrPermanent) Error() string { return "permanent: " + e.Err.Error() }
func (e ErrPermanent) Unwrap() error { return e.Err }

// Delay returns the wait before the given attempt (1-based), with equal jitter.
func (p Policy) Delay(attempt int) time.Duration {
	d := float64(p.Initial)
	for i := 1; i < attempt; i++ {
		d *= p.Multiplier
		if d > float64(p.Max) {
			d = float64(p.Max)
			break
		}
	}
	half := d / 2
	return time.Duration(half + rand.Float64()*half)
}

// Retry runs fn until it succeeds, returns a permanent error, the context is
// cancelled, or MaxAttempts is reached.
func Retry(ctx context.Context, p Policy, fn func(ctx context.Context, attempt int) error) error {
	var lastErr error
	for attempt := 1; attempt <= p.MaxAttempts; attempt++ {
		err := fn(ctx, attempt)
		if err == nil {
			return nil
		}
		var perm ErrPermanent
		if errors.As(err, &perm) {
			return perm.Err
		}
		lastErr = err
		if attempt == p.MaxAttempts {
			break
		}
		timer := time.NewTimer(p.Delay(attempt))
		select {
		case <-ctx.Done():
			timer.Stop()
			return ctx.Err()
		case <-timer.C:
		}
	}
	return lastErr
}
