// Resource identity, rather than client identity, owns each close attempt. A
// client can acquire a transport after an earlier close request found none.
export function closeMcpAttempt(reason) {
  this.openvisionFailedClosures ??= new Map();
  this.openvisionPendingClosures ??= new Set();
  const resources = new Set([...this.openvisionFailedClosures.keys(), ...this.openvisionPendingClosures]);
  if (this.client?.transport) resources.add(this.client.transport);
  return Promise.all([...resources].map(resource => {
    const pending = this.closePromises.get(resource);
    if (pending) return pending;
    this.openvisionPendingClosures.add(resource);
    (this.constructor.openvisionCleanupOwners ??= new Set()).add(this);
    const closing = Promise.resolve().then(() => resource.close()).then(() => {
      this.openvisionFailedClosures.delete(resource);
      return { ok: true };
    }, error => {
      this.closePromises.delete(resource);
      this.openvisionFailedClosures.set(resource, error);
      console.error('OpenVision MCP transport cleanup failed', { identifier: this.identifier, reason, error });
      return { ok: false, resource, error };
    }).then(result => {
      this.openvisionPendingClosures.delete(resource);
      if (!this.openvisionPendingClosures.size && !this.openvisionFailedClosures.size)
        this.constructor.openvisionCleanupOwners.delete(this);
      return result;
    });
    this.closePromises.set(resource, closing);
    return closing;
  })).then(results => ({ ok: results.every(result => result.ok), failures: results.filter(result => !result.ok) }));
}

export async function retryMcpCleanup(identifier) {
  const owners = [...(this.openvisionCleanupOwners ?? [])].filter(owner => owner.identifier === identifier);
  const results = await Promise.all(owners.map(owner => owner.closeCurrent('explicit-reconnect-retry')));
  return { ok: results.every(result => result.ok), failures: results.flatMap(result => result.failures) };
}
