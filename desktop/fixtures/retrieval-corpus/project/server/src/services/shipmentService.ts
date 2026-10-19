import { randomUUID } from "node:crypto";
import { SelectQuery, insertInto } from "../db/queryBuilder";
import type { SqlClient } from "../db/migrate";
import { NotFoundError, ValidationError } from "../errors";
import { LruCache } from "../utils/lruCache";
import { buildPage, type Page, type PageRequest } from "../utils/pagination";
import { quoteShippingPrice, type CurrencyCode } from "../utils/money";
import { haversineKm, type LatLon } from "../utils/geo";
import type { NotificationHub } from "./notificationHub";

export interface Shipment {
  id: string;
  trackingNumber: string;
  customerId: string;
  status: ShipmentStatus;
  weightGrams: number;
  priceMinor: number;
  currency: CurrencyCode;
  destination: LatLon;
  createdAt: string;
}

export type ShipmentStatus = "created" | "picked_up" | "in_transit" | "out_for_delivery" | "delivered" | "failed";

const ALLOWED_TRANSITIONS: Record<ShipmentStatus, ShipmentStatus[]> = {
  created: ["picked_up", "failed"],
  picked_up: ["in_transit", "failed"],
  in_transit: ["out_for_delivery", "failed"],
  out_for_delivery: ["delivered", "failed"],
  delivered: [],
  failed: [],
};

const ORIGIN_DEPOT: LatLon = { lat: 52.3676, lon: 4.9041 };

function rowToShipment(row: Record<string, unknown>): Shipment {
  return {
    id: String(row.id),
    trackingNumber: String(row.tracking_number),
    customerId: String(row.customer_id),
    status: row.status as ShipmentStatus,
    weightGrams: Number(row.weight_grams),
    priceMinor: Number(row.price_minor),
    currency: row.currency as CurrencyCode,
    destination: { lat: Number(row.destination_lat), lon: Number(row.destination_lon) },
    createdAt: new Date(String(row.created_at)).toISOString(),
  };
}

export function generateTrackingNumber(sequence: number): string {
  const digits = String(sequence).padStart(10, "0").slice(-10);
  const sum = digits.split("").reduce((acc, d, i) => acc + Number(d) * (i % 2 === 0 ? 3 : 1), 0);
  return `HBR${digits}${(10 - (sum % 10)) % 10}`;
}

export class ShipmentService {
  private readonly cache = new LruCache<string, Shipment>(500, 30_000);

  constructor(
    private readonly db: SqlClient,
    private readonly hub: NotificationHub,
  ) {}

  async createShipment(input: {
    customerId: string;
    weightGrams: number;
    currency: CurrencyCode;
    destination: LatLon;
    express: boolean;
    sequence: number;
  }): Promise<Shipment> {
    const distanceKm = haversineKm(ORIGIN_DEPOT, input.destination);
    const priceMinor = quoteShippingPrice({
      weightKg: input.weightGrams / 1000,
      distanceKm,
      express: input.express,
      currency: input.currency,
    });
    const query = insertInto("shipments", {
      id: randomUUID(),
      tracking_number: generateTrackingNumber(input.sequence),
      customer_id: input.customerId,
      status: "created",
      weight_grams: input.weightGrams,
      price_minor: priceMinor,
      currency: input.currency,
      destination_lat: input.destination.lat,
      destination_lon: input.destination.lon,
    });
    const result = await this.db.query(query.text, query.values);
    return rowToShipment(result.rows[0]);
  }

  async getByTrackingNumber(trackingNumber: string): Promise<Shipment> {
    return this.cache.getOrLoad(trackingNumber, async () => {
      const q = new SelectQuery("shipments").where("tracking_number", "=", trackingNumber).limit(1).toSQL();
      const result = await this.db.query(q.text, q.values);
      if (result.rows.length === 0) throw new NotFoundError("shipment", trackingNumber);
      return rowToShipment(result.rows[0]);
    });
  }

  async listForCustomer(customerId: string, page: PageRequest): Promise<Page<Shipment>> {
    const query = new SelectQuery("shipments").where("customer_id", "=", customerId);
    if (page.after) {
      query.whereAfter(["created_at", "id"], [page.after.createdAt, page.after.id]);
    }
    const sql = query.orderBy("created_at", "DESC").orderBy("id", "DESC").limit(page.limit + 1).toSQL();
    const result = await this.db.query(sql.text, sql.values);
    return buildPage(result.rows.map(rowToShipment), page.limit);
  }

  async updateStatus(trackingNumber: string, next: ShipmentStatus): Promise<Shipment> {
    const shipment = await this.getByTrackingNumber(trackingNumber);
    if (!ALLOWED_TRANSITIONS[shipment.status].includes(next)) {
      throw new ValidationError(`cannot move shipment from ${shipment.status} to ${next}`);
    }
    await this.db.query("UPDATE shipments SET status = $1 WHERE id = $2", [next, shipment.id]);
    const updated = { ...shipment, status: next };
    this.cache.set(trackingNumber, updated);
    this.hub.broadcastShipmentUpdate({
      trackingNumber,
      status: next,
      occurredAt: new Date().toISOString(),
    });
    return updated;
  }
}
