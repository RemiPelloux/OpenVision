import { randomUUID } from 'node:crypto';

// A preview belongs to one renderer document, including while it is being built.
export class ImportPreview {
  #entry;

  begin(sender) {
    this.clear();
    const token = randomUUID();
    const destroyed = () => this.release(sender, token);
    const navigating = (_event, _url, inPlace, mainFrame) => {
      if (mainFrame && !inPlace) destroyed();
    };
    if (sender.isDestroyed()) throw new Error('Import window closed.');
    sender.once('destroyed', destroyed);
    sender.on('did-start-navigation', navigating);
    this.#entry = { sender, token, destroyed, navigating };
    return token;
  }

  complete(sender, token, plan) {
    if (!this.#matches(sender, token)) return false;
    this.#entry.plan = plan;
    return true;
  }

  release(sender, token) {
    if (this.#matches(sender, token)) this.clear();
  }

  take(sender, token) {
    if (!this.#matches(sender, token) || !this.#entry.plan)
      throw new Error('Preview the import again before applying it.');
    const plan = this.#entry.plan;
    this.clear();
    return plan;
  }

  #matches(sender, token) {
    return this.#entry?.sender === sender && this.#entry?.token === token;
  }

  clear() {
    if (!this.#entry) return;
    const { sender, destroyed, navigating } = this.#entry;
    this.#entry = undefined;
    sender.removeListener('destroyed', destroyed);
    sender.removeListener('did-start-navigation', navigating);
  }
}
