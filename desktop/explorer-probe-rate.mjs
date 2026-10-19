// Root configuration probes are fs.watchFile polls of absent per-root paths.
// Upstream BaseWatcher.suspendedWatchRequestPollingInterval (recovered main,
// shared process and watcher bundles) is 5007 ms; the trace shows one cluster per
// root and period (about 2.8 s wide, 40 calls for three roots on Linux x64).
export const probePollSeconds = 5.007;

// A periodic poll lands in a window of `seconds` at most floor(seconds/P) + 1
// times, so the rate is taken over that many whole periods. Dividing by the
// window alone reads one full cluster in a 3 s window as a burst (40/3/3.08 =
// 4.33 per root·s for a steady 2.66). Extra probes caused by an edit still raise
// the count; only the denominator is fixed to the poll's own period.
export function probesPerRootPerSecond(count, roots, seconds, period = probePollSeconds) {
  if (!(roots > 0 && seconds > 0 && period > 0)) throw new RangeError('roots, seconds and period must be positive');
  return +(count / roots / ((Math.floor(seconds / period) + 1) * period)).toFixed(2);
}
