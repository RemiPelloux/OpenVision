// Package health exposes /healthz and /readyz for the worker process.
package health

import (
	"encoding/json"
	"net/http"
	"sync/atomic"
	"time"
)

// DepthFunc reports queue depths.
type DepthFunc func() (ready, inFlight, dead int)

// Server tracks readiness and the time of the last processed job.
type Server struct {
	ready       atomic.Bool
	lastJobUnix atomic.Int64
	depth       DepthFunc
	staleAfter  time.Duration
}

// NewServer returns a health server; the worker is "stale" if no job has
// completed within staleAfter while jobs are waiting.
func NewServer(depth DepthFunc, staleAfter time.Duration) *Server {
	return &Server{depth: depth, staleAfter: staleAfter}
}

func (s *Server) SetReady(v bool) { s.ready.Store(v) }

func (s *Server) MarkJobDone() { s.lastJobUnix.Store(time.Now().Unix()) }

// Handler wires the endpoints.
func (s *Server) Handler() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("/healthz", func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("ok"))
	})
	mux.HandleFunc("/readyz", func(w http.ResponseWriter, _ *http.Request) {
		ready, inFlight, dead := s.depth()
		last := time.Unix(s.lastJobUnix.Load(), 0)
		stale := ready > 0 && time.Since(last) > s.staleAfter
		status := http.StatusOK
		if !s.ready.Load() || stale {
			status = http.StatusServiceUnavailable
		}
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(status)
		_ = json.NewEncoder(w).Encode(map[string]any{
			"ready":       s.ready.Load(),
			"stale":       stale,
			"queued":      ready,
			"inFlight":    inFlight,
			"deadLetters": dead,
		})
	})
	return mux
}
