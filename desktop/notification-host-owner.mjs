import { EventEmitter } from 'node:events';

const defaults = Object.freeze({ startupMs: 10000, idleMs: 30000, shutdownMs: 2000, capacity: 64 });

// Own Windows shell integration separately from the editor. Keep the
// ChildProcess handle until confirmed exit/close, including after a failed kill.
export class NotificationHostOwner {
  constructor(start, warn, limits = defaults) {
    this.start = start; this.warn = warn; this.limits = limits;
    this.notifications = new Map(); this.requests = new Map(); this.serial = 0; this.closed = false;
  }
  async ready() {
    if (this.closed || this.failed) return false;
    if (this.host) return this.host.stopping ? false : this.host.ready;
    const host = { stopping: false };
    host.ready = new Promise(resolve => { host.resolve = resolve; });
    host.exited = new Promise(resolve => { host.resolveExit = resolve; });
    this.host = host;
    try {
      host.child = this.start();
      host.child.on('message', message => this.message(host, message));
      host.child.once('error', () => this.fail(host, 'Windows shell host failed to start.'));
      // With ignored stdio, exit fully releases our resources. Node on Windows
      // can omit close after the IPC channel was explicitly disconnected.
      host.child.once('exit', () => this.ended(host));
      host.child.once('close', () => this.ended(host));
      host.timer = setTimeout(() => this.fail(host, 'Windows shell host startup timed out.'), this.limits.startupMs);
    } catch { this.fail(host, 'Windows shell host failed to start.'); this.ended(host); }
    return host.ready;
  }
  async supported() {
    if (!(await this.ready())) return false;
    const host = this.host;
    if (!host || host.stopping) return false;
    host.support ??= this.call('notificationSupport', []);
    return (await host.support) === true;
  }
  async call(method, args) {
    if (this.requests.size >= this.limits.capacity || this.closed || this.failed) return undefined;
    const id = ++this.serial;
    let finish;
    const result = new Promise(resolve => { finish = resolve; });
    const request = { finish }; this.requests.set(id, request);
    if (!(await this.ready())) { this.finish(id); return result; }
    request.host = this.host;
    if (!request.host || request.host.stopping || !this.requests.has(id)) { this.finish(id); return result; }
    clearTimeout(request.host.idle);
    request.timer = setTimeout(() => this.fail(request.host, 'Windows shell operation timed out.'), this.limits.startupMs);
    if (!this.send(request.host, { kind: 'request', id, method, args })) this.finish(id);
    return result;
  }
  finish(id, value) {
    const request = this.requests.get(id);
    if (!request) return;
    clearTimeout(request.timer); this.requests.delete(id); request.finish(value);
    if (request.host) this.idle(request.host);
  }
  message(host, message) {
    if (this.host !== host || host.stopping || !message || typeof message !== 'object') return;
    if (message.kind === 'ready' && typeof message.supported === 'boolean') {
      if (host.supported !== undefined) return;
      clearTimeout(host.timer); host.supported = message.supported;
      host.resolve(message.supported); this.idle(host); return;
    }
    if (message.kind === 'result' && this.requests.get(message.id)?.host === host) {
      this.finish(message.id, message.ok ? message.value : undefined);
      if (!message.ok) this.warn('Windows shell operation failed.');
      return;
    }
    const item = this.notifications.get(message.id);
    if (!item || item.host !== host || message.kind !== 'event') return;
    if (message.event === 'shown') { clearTimeout(item.timer); return; }
    if (message.event === 'close' || message.event === 'failed') {
      clearTimeout(item.timer);
      this.notifications.delete(message.id); item.notification.closed = true;
      item.notification.emit('close'); this.idle(host);
      if (message.event === 'failed') this.warn('Native notification could not be displayed.');
    } else if (['click', 'reply'].includes(message.event)) item.notification.emit(message.event, {});
    else if (message.event === 'action' && Number.isInteger(message.index))
      item.notification.emit('action', {}, message.index);
  }
  send(host, message) {
    if (!host || host.stopping || !host.child?.connected) return false;
    try {
      host.child.send(message, error => { if (error) this.fail(host, 'Windows shell IPC failed.'); });
      return true;
    } catch { this.fail(host, 'Windows shell IPC failed.'); return false; }
  }
  async show(notification) {
    if (notification.closed || notification.requested) return;
    notification.requested = true;
    const supported = await this.supported(), host = this.host;
    if (notification.closed) return;
    if (!supported || !host || host.stopping || this.notifications.size >= this.limits.capacity) {
      notification.close(); return;
    }
    clearTimeout(host.idle);
    const timer = setTimeout(() => this.fail(host, 'Native notification display timed out.'), this.limits.startupMs);
    this.notifications.set(notification.id, { host, notification, timer });
    if (!this.send(host, { kind: 'show', id: notification.id, options: notification.options })) notification.close();
  }
  close(notification) {
    const item = this.notifications.get(notification.id);
    if (item) {
      clearTimeout(item.timer);
      this.notifications.delete(notification.id);
      this.send(item.host, { kind: 'close', id: notification.id }); this.idle(item.host);
    }
  }
  idle(host) {
    clearTimeout(host.idle);
    if (!this.notifications.size && !this.requests.size && !host.stopping)
      host.idle = setTimeout(() => this.stop(host), this.limits.idleMs);
  }
  fail(host, message) {
    if (this.host !== host) return;
    this.failed = true; host.resolve(false); this.warn(message); this.stop(host);
  }
  stop(host) {
    if (host.stopping) return;
    host.stopping = true; host.resolve(false);
    clearTimeout(host.timer); clearTimeout(host.idle);
    for (const [id, request] of this.requests) if (!request.host || request.host === host) this.finish(id);
    this.releaseNotifications(host);
    if (host.child?.connected) {
      try { host.child.disconnect(); } catch { this.warn('Native shell disconnect failed; ownership retained.'); }
    }
    if (host.child) host.killTimer = setTimeout(() => {
      try { if (!host.child.kill()) this.warn('Windows shell host has not exited; ownership retained.'); }
      catch { this.warn('Windows shell host cleanup failed; ownership retained.'); }
    }, this.limits.shutdownMs);
  }
  ended(host) {
    if (host.ended) return;
    host.ended = true;
    const unexpected = !host.stopping; host.stopping = true;
    clearTimeout(host.timer); clearTimeout(host.idle); clearTimeout(host.killTimer);
    host.resolve(false);
    for (const [id, request] of this.requests) if (!request.host || request.host === host) this.finish(id);
    if (unexpected) { this.failed = true; this.warn('Windows shell integration unavailable: host exited unexpectedly.'); }
    this.releaseNotifications(host);
    if (this.host === host) this.host = undefined;
    host.resolveExit();
  }
  releaseNotifications(host) {
    for (const [id, item] of this.notifications) {
      if (item.host !== host) continue;
      clearTimeout(item.timer);
      this.notifications.delete(id); item.notification.closed = true; item.notification.emit('close');
    }
  }
  dispose() {
    this.closed = true;
    const host = this.host;
    if (!host) return Promise.resolve();
    this.stop(host);
    return host.exited;
  }
}

export function notificationProxy(owner) {
  return class extends EventEmitter {
    static isSupported() { return owner.supported(); }
    constructor(options) { super(); this.options = options; this.id = ++owner.serial; }
    show() { void owner.show(this); }
    close() {
      if (this.closed) return;
      this.closed = true; owner.close(this); this.emit('close');
    }
  };
}
