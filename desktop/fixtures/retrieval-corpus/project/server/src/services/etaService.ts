import { haversineKm, type LatLon } from "../utils/geo";

export interface EtaInput {
  courierPosition: LatLon;
  destination: LatLon;
  remainingStops: number;
  averageSpeedKmh: number;
  now: Date;
}

const MINUTES_PER_STOP = 4;
const ROAD_FACTOR = 1.3; // straight-line distance underestimates road distance

/**
 * Customers see arrival times on a 5-minute grid; rounding up keeps us from
 * promising earlier than we can deliver.
 */
export function roundUpToMinutes(date: Date, step = 5): Date {
  const stepMs = step * 60_000;
  return new Date(Math.ceil(date.getTime() / stepMs) * stepMs);
}

export function estimateArrival(input: EtaInput): { arrival: Date; windowStart: Date; windowEnd: Date } {
  const roadKm = haversineKm(input.courierPosition, input.destination) * ROAD_FACTOR;
  const drivingMinutes = (roadKm / Math.max(5, input.averageSpeedKmh)) * 60;
  const stopMinutes = input.remainingStops * MINUTES_PER_STOP;
  const raw = new Date(input.now.getTime() + (drivingMinutes + stopMinutes) * 60_000);
  const arrival = roundUpToMinutes(raw);
  const spread = Math.max(10, Math.round(input.remainingStops * 2.5));
  return {
    arrival,
    windowStart: new Date(arrival.getTime() - spread * 60_000),
    windowEnd: new Date(arrival.getTime() + spread * 60_000),
  };
}

export function describeEta(minutesAway: number): string {
  if (minutesAway <= 2) return "arriving now";
  if (minutesAway < 60) return `about ${minutesAway} min`;
  const hours = Math.floor(minutesAway / 60);
  const minutes = minutesAway % 60;
  return minutes === 0 ? `about ${hours} h` : `about ${hours} h ${minutes} min`;
}
