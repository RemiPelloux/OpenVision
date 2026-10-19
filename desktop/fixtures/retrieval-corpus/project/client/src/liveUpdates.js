/**
 * Keeps a websocket open to the notification hub and re-subscribes after
 * reconnecting. Reconnect delays grow exponentially up to 30 seconds.
 */
export class LiveUpdates {
  constructor(url, onUpdate) {
    this.url = url;
    this.onUpdate = onUpdate;
    this.subscriptions = new Set();
    this.reconnectAttempt = 0;
    this.socket = null;
    this.closedByUser = false;
  }

  connect() {
    this.closedByUser = false;
    this.socket = new WebSocket(this.url);
    this.socket.addEventListener("open", () => {
      this.reconnectAttempt = 0;
      for (const trackingNumber of this.subscriptions) {
        this.socket.send(JSON.stringify({ subscribe: trackingNumber }));
      }
    });
    this.socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "shipment.updated") this.onUpdate(message.data);
    });
    this.socket.addEventListener("close", () => {
      if (!this.closedByUser) this.scheduleReconnect();
    });
  }

  scheduleReconnect() {
    this.reconnectAttempt += 1;
    const ceiling = Math.min(30000, 500 * 2 ** this.reconnectAttempt);
    const delay = ceiling / 2 + Math.random() * (ceiling / 2);
    setTimeout(() => this.connect(), delay);
  }

  follow(trackingNumber) {
    this.subscriptions.add(trackingNumber);
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({ subscribe: trackingNumber }));
    }
  }

  unfollow(trackingNumber) {
    this.subscriptions.delete(trackingNumber);
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({ unsubscribe: trackingNumber }));
    }
  }

  close() {
    this.closedByUser = true;
    if (this.socket) this.socket.close();
  }
}
