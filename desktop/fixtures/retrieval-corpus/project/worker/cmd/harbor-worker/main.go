// Command harbor-worker processes background jobs: notification emails,
// partner webhooks and proof-of-delivery thumbnailing.
package main

import (
	"context"
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"sync"
	"syscall"
	"time"

	"example.com/harbor/worker/internal/backoff"
	"example.com/harbor/worker/internal/config"
	"example.com/harbor/worker/internal/health"
	"example.com/harbor/worker/internal/queue"
)

type handlerFunc func(ctx context.Context, job *queue.Job) error

func handlers() map[string]handlerFunc {
	return map[string]handlerFunc{
		"send_email": func(ctx context.Context, job *queue.Job) error {
			return backoff.Retry(ctx, backoff.DefaultPolicy, func(ctx context.Context, attempt int) error {
				log.Printf("sending email job=%s attempt=%d", job.ID, attempt)
				return nil
			})
		},
		"partner_webhook": func(ctx context.Context, job *queue.Job) error {
			if len(job.Payload) == 0 {
				return backoff.ErrPermanent{Err: errors.New("empty webhook payload")}
			}
			return nil
		},
	}
}

func runLoop(ctx context.Context, id int, q *queue.Queue, hs *health.Server, table map[string]handlerFunc) {
	for {
		select {
		case <-ctx.Done():
			return
		default:
		}
		job, err := q.Lease()
		if errors.Is(err, queue.ErrEmpty) {
			time.Sleep(250 * time.Millisecond)
			continue
		}
		handle, ok := table[job.Kind]
		if !ok {
			q.Nack(job.ID, fmt.Errorf("no handler for %q", job.Kind), 0)
			continue
		}
		jobCtx, cancel := context.WithTimeout(ctx, time.Minute)
		err = handle(jobCtx, job)
		cancel()
		if err != nil {
			log.Printf("worker=%d job=%s kind=%s failed: %v", id, job.ID, job.Kind, err)
			q.Nack(job.ID, err, backoff.DefaultPolicy.Delay(job.Attempts))
			continue
		}
		q.Ack(job.ID)
		hs.MarkJobDone()
	}
}

func main() {
	cfg, err := config.FromEnv()
	if err != nil {
		log.Fatalf("config: %v", err)
	}
	q := queue.New(cfg.VisibilityTimeout)
	hs := health.NewServer(q.Depth, 5*time.Minute)
	srv := &http.Server{Addr: cfg.HealthAddr, Handler: hs.Handler(), ReadHeaderTimeout: 5 * time.Second}
	go func() {
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("health server: %v", err)
		}
	}()

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	var wg sync.WaitGroup
	table := handlers()
	for i := 0; i < cfg.Concurrency; i++ {
		wg.Add(1)
		go func(id int) {
			defer wg.Done()
			runLoop(ctx, id, q, hs, table)
		}(i)
	}
	hs.SetReady(true)
	<-ctx.Done()
	hs.SetReady(false)

	done := make(chan struct{})
	go func() { wg.Wait(); close(done) }()
	select {
	case <-done:
	case <-time.After(cfg.ShutdownGrace):
		log.Printf("shutdown grace period elapsed with jobs still running")
	}
	shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	_ = srv.Shutdown(shutdownCtx)
}
