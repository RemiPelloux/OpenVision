package queue

import (
	"errors"
	"testing"
	"time"
)

func TestJobMovesToDeadLettersAfterMaxAttempts(t *testing.T) {
	q := New(time.Minute)
	q.Enqueue(Job{ID: "j1", Kind: "send_email", MaxAttempts: 2})

	for i := 0; i < 2; i++ {
		job, err := q.Lease()
		if err != nil {
			t.Fatalf("lease %d: %v", i, err)
		}
		q.Nack(job.ID, errors.New("smtp unavailable"), 0)
	}

	if got := len(q.DeadLetters()); got != 1 {
		t.Fatalf("dead letters = %d, want 1", got)
	}
	if moved := q.Redrive("send_email"); moved != 1 {
		t.Fatalf("redrive moved %d, want 1", moved)
	}
}
