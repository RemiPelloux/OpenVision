import { EventEmitter } from "node:events";
import { rootLogger } from "../logging/logger";

/** Anything with the subset of the WebSocket API we use. */
export interface SocketLike {
  readyState: number;
  send(data: string): void;
  close(code?: number, reason?: string): void;
  on(event: "message" | "close" | "pong", listener: (...args: unknown[]) => void): void;
  ping(): void;
}

const OPEN = 1;
const HEARTBEAT_INTERVAL_MS = 25_000;

export interface ShipmentUpdate {
  trackingNumber: string;
  status: string;
  etaIso?: string;
  occurredAt: string;
}

interface Subscriber {
  socket: SocketLike;
  trackingNumbers: Set<string>;
  alive: boolean;
}

/**
 * Pushes live shipment status changes to browsers over websockets. Clients
 * send {"subscribe": "HBR..."} messages to follow a parcel.
 */
export class NotificationHub extends EventEmitter {
  private readonly subscribers = new Set<Subscriber>();
  private heartbeat: NodeJS.Timeout | null = null;
  private readonly log = rootLogger.child({ component: "notification-hub" });

  start(): void {
    this.heartbeat = setInterval(() => this.checkHeartbeats(), HEARTBEAT_INTERVAL_MS);
  }

  stop(): void {
    if (this.heartbeat) clearInterval(this.heartbeat);
    for (const sub of this.subscribers) sub.socket.close(1001, "server shutting down");
    this.subscribers.clear();
  }

  attach(socket: SocketLike): void {
    const subscriber: Subscriber = { socket, trackingNumbers: new Set(), alive: true };
    this.subscribers.add(subscriber);
    socket.on("pong", () => {
      subscriber.alive = true;
    });
    socket.on("message", (raw) => this.handleMessage(subscriber, String(raw)));
    socket.on("close", () => this.subscribers.delete(subscriber));
  }

  private handleMessage(subscriber: Subscriber, raw: string): void {
    try {
      const message = JSON.parse(raw) as { subscribe?: string; unsubscribe?: string };
      if (message.subscribe) subscriber.trackingNumbers.add(message.subscribe);
      if (message.unsubscribe) subscriber.trackingNumbers.delete(message.unsubscribe);
    } catch {
      subscriber.socket.send(JSON.stringify({ error: "invalid message" }));
    }
  }

  broadcastShipmentUpdate(update: ShipmentUpdate): number {
    const payload = JSON.stringify({ type: "shipment.updated", data: update });
    let delivered = 0;
    for (const sub of this.subscribers) {
      if (sub.socket.readyState === OPEN && sub.trackingNumbers.has(update.trackingNumber)) {
        sub.socket.send(payload);
        delivered++;
      }
    }
    this.emit("broadcast", update, delivered);
    return delivered;
  }

  private checkHeartbeats(): void {
    for (const sub of this.subscribers) {
      if (!sub.alive) {
        this.log.info("dropping unresponsive socket");
        sub.socket.close(4000, "heartbeat timeout");
        this.subscribers.delete(sub);
        continue;
      }
      sub.alive = false;
      sub.socket.ping();
    }
  }
}
