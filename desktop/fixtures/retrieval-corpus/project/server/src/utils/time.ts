export function isValidTimeZone(zone: string): boolean {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: zone });
    return true;
  } catch {
    return false;
  }
}

/**
 * Returns the offset in minutes between UTC and the given IANA zone at an instant.
 * Positive values are east of UTC.
 */
export function zoneOffsetMinutes(instant: Date, zone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(instant);
  const get = (type: string) => Number(parts.find((p) => p.type === type)?.value);
  const asUtc = Date.UTC(get("year"), get("month") - 1, get("day"), get("hour"), get("minute"), get("second"));
  return Math.round((asUtc - instant.getTime()) / 60000);
}

export function formatInZone(instant: Date, zone: string, locale = "en-GB"): string {
  return new Intl.DateTimeFormat(locale, {
    timeZone: zone,
    dateStyle: "medium",
    timeStyle: "short",
  }).format(instant);
}

export function startOfLocalDay(instant: Date, zone: string): Date {
  const offset = zoneOffsetMinutes(instant, zone);
  const local = new Date(instant.getTime() + offset * 60000);
  local.setUTCHours(0, 0, 0, 0);
  return new Date(local.getTime() - offset * 60000);
}

export function addBusinessDays(start: Date, days: number): Date {
  const result = new Date(start.getTime());
  let remaining = days;
  while (remaining > 0) {
    result.setUTCDate(result.getUTCDate() + 1);
    const weekday = result.getUTCDay();
    if (weekday !== 0 && weekday !== 6) remaining--;
  }
  return result;
}
