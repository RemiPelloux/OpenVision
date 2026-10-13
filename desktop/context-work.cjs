'use strict';

// Git context is interactive work: at most three folders may collect at once.
const WORKSPACE_CONCURRENCY = 3;
const warming = new WeakMap();

async function mapWorkspaces(owner, visit) {
  const paths = owner.workspacePaths;
  const results = new Array(paths.length);
  let cursor = 0, failure, failed = false;
  async function worker() {
    while (!failed && cursor < paths.length) {
      try {
        if (owner.openvisionDisposed) throw new Error('Request context executor is disposed');
        const index = cursor++;
        results[index] = await visit(paths[index]);
      } catch (error) { if (!failed) { failure = error; failed = true; } }
    }
  }
  await Promise.all(Array.from({ length: Math.min(WORKSPACE_CONCURRENCY, paths.length) }, worker));
  if (failed) throw failure;
  if (owner.openvisionDisposed) throw new Error('Request context executor is disposed');
  return results;
}

function warmWorkspaces(owner, trace) {
  if (owner.openvisionDisposed || warming.has(owner)) return;
  // No per-folder queue or eager promise list. Existing per-path ownership still
  // joins foreground callers, and the batch releases its owner when it settles.
  const pending = mapWorkspaces(owner, path => owner.ensureWorkspaceCacheWarm(trace, path));
  warming.set(owner, pending);
  void pending.catch(() => { /* Background warming is best effort; demand retries. */ })
    .finally(() => warming.delete(owner));
}

function repositoryRead(reads, path, read) {
  if (!reads.has(path)) reads.set(path, Promise.resolve().then(read));
  return reads.get(path);
}

module.exports = { mapWorkspaces, warmWorkspaces, repositoryRead };
