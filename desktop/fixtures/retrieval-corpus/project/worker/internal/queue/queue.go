// Package queue is an in-memory job queue with visibility timeouts and a
// dead-letter list for jobs that keep failing.
package queue

import (
	"errors"
	"sync"
	"time"
)

// Job is a unit of background work, e.g. "send_delivered_email".
type Job struct {
	ID          string
	Kind        string
	Payload     []byte
	Attempts    int
	MaxAttempts int
	LastError   string
	visibleAt   time.Time
}

// DeadLetter records a job that exhausted its attempts.
type DeadLetter struct {
	Job      Job
	FailedAt time.Time
	Reason   string
}

var ErrEmpty = errors.New("queue: no visible jobs")

// Queue is safe for concurrent use.
type Queue struct {
	mu          sync.Mutex
	ready       []*Job
	inFlight    map[string]*Job
	deadLetters []DeadLetter
	visibility  time.Duration
	now         func() time.Time
}

// New creates a queue whose leased jobs reappear after the visibility timeout.
func New(visibility time.Duration) *Queue {
	return &Queue{inFlight: make(map[string]*Job), visibility: visibility, now: time.Now}
}

// Enqueue adds a job to the back of the queue.
func (q *Queue) Enqueue(job Job) {
	q.mu.Lock()
	defer q.mu.Unlock()
	if job.MaxAttempts == 0 {
		job.MaxAttempts = 5
	}
	j := job
	j.visibleAt = q.now()
	q.ready = append(q.ready, &j)
}

// Lease hands out the next visible job and hides it for the visibility timeout.
func (q *Queue) Lease() (*Job, error) {
	q.mu.Lock()
	defer q.mu.Unlock()
	q.requeueExpiredLocked()
	now := q.now()
	for i, j := range q.ready {
		if !j.visibleAt.After(now) {
			q.ready = append(q.ready[:i], q.ready[i+1:]...)
			j.Attempts++
			j.visibleAt = now.Add(q.visibility)
			q.inFlight[j.ID] = j
			return j, nil
		}
	}
	return nil, ErrEmpty
}

// Ack removes a finished job.
func (q *Queue) Ack(id string) {
	q.mu.Lock()
	defer q.mu.Unlock()
	delete(q.inFlight, id)
}

// Nack reports a failure. The job is retried after delay, or moved to the
// dead-letter list once it has used all of its attempts.
func (q *Queue) Nack(id string, cause error, delay time.Duration) {
	q.mu.Lock()
	defer q.mu.Unlock()
	j, ok := q.inFlight[id]
	if !ok {
		return
	}
	delete(q.inFlight, id)
	j.LastError = cause.Error()
	if j.Attempts >= j.MaxAttempts {
		q.deadLetters = append(q.deadLetters, DeadLetter{Job: *j, FailedAt: q.now(), Reason: j.LastError})
		return
	}
	j.visibleAt = q.now().Add(delay)
	q.ready = append(q.ready, j)
}

func (q *Queue) requeueExpiredLocked() {
	now := q.now()
	for id, j := range q.inFlight {
		if !j.visibleAt.After(now) {
			delete(q.inFlight, id)
			q.ready = append(q.ready, j)
		}
	}
}

// DeadLetters returns a copy of the dead-letter list.
func (q *Queue) DeadLetters() []DeadLetter {
	q.mu.Lock()
	defer q.mu.Unlock()
	out := make([]DeadLetter, len(q.deadLetters))
	copy(out, q.deadLetters)
	return out
}

// Redrive moves dead-lettered jobs of the given kind back onto the queue
// with a fresh attempt budget. It returns how many were moved.
func (q *Queue) Redrive(kind string) int {
	q.mu.Lock()
	defer q.mu.Unlock()
	kept := q.deadLetters[:0]
	moved := 0
	for _, dl := range q.deadLetters {
		if dl.Job.Kind != kind {
			kept = append(kept, dl)
			continue
		}
		j := dl.Job
		j.Attempts = 0
		j.visibleAt = q.now()
		q.ready = append(q.ready, &j)
		moved++
	}
	q.deadLetters = kept
	return moved
}

// Depth reports ready and in-flight counts for metrics.
func (q *Queue) Depth() (ready, inFlight, dead int) {
	q.mu.Lock()
	defer q.mu.Unlock()
	return len(q.ready), len(q.inFlight), len(q.deadLetters)
}
