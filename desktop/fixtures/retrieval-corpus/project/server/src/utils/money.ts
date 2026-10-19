export type CurrencyCode = "USD" | "EUR" | "GBP" | "JPY" | "CHF";

const MINOR_UNITS: Record<CurrencyCode, number> = { USD: 2, EUR: 2, GBP: 2, JPY: 0, CHF: 2 };

/**
 * Banker's rounding (round half to even) on a value expressed in major units,
 * returning an integer amount in minor units (cents, pence, yen).
 */
export function toMinorUnits(amount: number, currency: CurrencyCode): number {
  const factor = 10 ** MINOR_UNITS[currency];
  const scaled = amount * factor;
  const floor = Math.floor(scaled);
  const diff = scaled - floor;
  const epsilon = 1e-9;
  if (Math.abs(diff - 0.5) < epsilon) {
    return floor % 2 === 0 ? floor : floor + 1;
  }
  return Math.round(scaled);
}

export function formatPrice(minor: number, currency: CurrencyCode, locale = "en-US"): string {
  const digits = MINOR_UNITS[currency];
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(minor / 10 ** digits);
}

export interface QuoteInput {
  weightKg: number;
  distanceKm: number;
  express: boolean;
  currency: CurrencyCode;
}

export function quoteShippingPrice(input: QuoteInput): number {
  const base = 4.5;
  const perKg = 0.85 * Math.max(0.5, input.weightKg);
  const perKm = 0.012 * input.distanceKm;
  const subtotal = (base + perKg + perKm) * (input.express ? 1.6 : 1);
  return toMinorUnits(subtotal, input.currency);
}

export function allocateEvenly(totalMinor: number, parts: number): number[] {
  const share = Math.floor(totalMinor / parts);
  const remainder = totalMinor - share * parts;
  return Array.from({ length: parts }, (_, i) => share + (i < remainder ? 1 : 0));
}
