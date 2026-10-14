// Resource identity, rather than client identity, owns each close attempt. A
// client can acquire a transport after an earlier close request found none.
export function closeMcpAttempt(reason) {
  const acknowledgementDeadlineMs = 5000;
  this.openvisionCloseAcknowledgements ??= new WeakMap();
  const bounded = (closing, resource) => {
    const existing = this.openvisionCloseAcknowledgements.get(resource);
    if (existing) return existing;
    const acknowledgement = new Promise(resolve => {
      const timer = setTimeout(() => resolve({ ok: false, resource, pending: true,
        error: new Error('MCP transport cleanup is still pending; reconnect after it completes') }), acknowledgementDeadlineMs);
      closing.then(result => { clearTimeout(timer); this.openvisionCloseAcknowledgements.delete(resource); resolve(result); });
    });
    this.openvisionCloseAcknowledgements.set(resource, acknowledgement);
    return acknowledgement;
  };
  this.openvisionFailedClosures ??= new Map();
  this.openvisionPendingClosures ??= new Set();
  const resources = new Set([...this.openvisionFailedClosures.keys(), ...this.openvisionPendingClosures]);
  if (this.client?.transport) resources.add(this.client.transport);
  return Promise.all([...resources].map(resource => {
    const pending = this.closePromises.get(resource);
    if (pending) return bounded(pending, resource);
    this.openvisionPendingClosures.add(resource);
    (this.constructor.openvisionCleanupOwners ??= new Set()).add(this);
    const closing = Promise.resolve().then(() => resource.close()).then(() => {
      this.openvisionFailedClosures.delete(resource);
      return { ok: true };
    }, error => {
      this.closePromises.delete(resource);
      this.openvisionFailedClosures.set(resource, error);
      let loggingError;
      try { console.error('OpenVision MCP transport cleanup failed', error, { identifier: this.identifier, reason }); }
      catch (failure) { loggingError = failure; }
      return { ok: false, resource, error, ...(loggingError ? { loggingError } : {}) };
    }).then(result => {
      this.openvisionPendingClosures.delete(resource);
      if (!this.openvisionPendingClosures.size && !this.openvisionFailedClosures.size)
        this.constructor.openvisionCleanupOwners.delete(this);
      return result;
    });
    this.closePromises.set(resource, closing);
    return bounded(closing, resource);
  })).then(results => ({ ok: results.every(result => result.ok), failures: results.filter(result => !result.ok) }));
}

export async function retryMcpCleanup(identifier) {
  const owners = [...(this.openvisionCleanupOwners ?? [])].filter(owner => owner.identifier === identifier);
  const results = await Promise.all(owners.map(owner => owner.closeCurrent('explicit-reconnect-retry')));
  return { ok: results.every(result => result.ok), failures: results.flatMap(result => result.failures) };
}
