// Resource identity, rather than client identity, owns each close attempt. A
// client can acquire a transport after an earlier close request found none.
export function closeMcpAttempt(reason) {
  this.openvisionFailedClosures ??= new Map();
  const resources = new Set(this.openvisionFailedClosures.keys());
  if (this.client?.transport) resources.add(this.client.transport);
  return Promise.all([...resources].map(resource => {
    const pending = this.closePromises.get(resource);
    if (pending) return pending;
    const closing = Promise.resolve().then(() => resource.close()).then(() => {
      this.openvisionFailedClosures.delete(resource);
      if (!this.openvisionFailedClosures.size) this.constructor.openvisionFailedAttempts?.delete(this);
    }, error => {
      this.closePromises.delete(resource);
      this.openvisionFailedClosures.set(resource, error);
      // Keep the owner and failed resource reachable even after lifecycle disposal.
      (this.constructor.openvisionFailedAttempts ??= new Set()).add(this);
      console.error('OpenVision MCP transport cleanup failed', { identifier: this.identifier, reason, error });
    });
    this.closePromises.set(resource, closing);
    return closing;
  })).then(() => undefined);
}
