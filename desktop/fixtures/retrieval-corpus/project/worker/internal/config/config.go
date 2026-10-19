// Package config reads worker settings from the environment.
package config

import (
	"fmt"
	"os"
	"strconv"
	"time"
)

// Config holds the worker's runtime settings.
type Config struct {
	Concurrency       int
	VisibilityTimeout time.Duration
	HealthAddr        string
	SMTPRelay         string
	ShutdownGrace     time.Duration
}

func envInt(name string, fallback int) (int, error) {
	raw, ok := os.LookupEnv(name)
	if !ok || raw == "" {
		return fallback, nil
	}
	v, err := strconv.Atoi(raw)
	if err != nil {
		return 0, fmt.Errorf("%s: %w", name, err)
	}
	return v, nil
}

func envDuration(name string, fallback time.Duration) (time.Duration, error) {
	raw, ok := os.LookupEnv(name)
	if !ok || raw == "" {
		return fallback, nil
	}
	return time.ParseDuration(raw)
}

// FromEnv builds a Config using HARBOR_WORKER_* variables with defaults.
func FromEnv() (Config, error) {
	concurrency, err := envInt("HARBOR_WORKER_CONCURRENCY", 4)
	if err != nil {
		return Config{}, err
	}
	visibility, err := envDuration("HARBOR_WORKER_VISIBILITY", 2*time.Minute)
	if err != nil {
		return Config{}, err
	}
	grace, err := envDuration("HARBOR_WORKER_SHUTDOWN_GRACE", 20*time.Second)
	if err != nil {
		return Config{}, err
	}
	addr := os.Getenv("HARBOR_WORKER_HEALTH_ADDR")
	if addr == "" {
		addr = ":8081"
	}
	return Config{
		Concurrency:       concurrency,
		VisibilityTimeout: visibility,
		HealthAddr:        addr,
		SMTPRelay:         os.Getenv("HARBOR_SMTP_RELAY"),
		ShutdownGrace:     grace,
	}, nil
}
