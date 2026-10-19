const STATUS_LABELS = {
  created: "Label created",
  picked_up: "Picked up",
  in_transit: "In transit",
  out_for_delivery: "Out for delivery",
  delivered: "Delivered",
  failed: "Delivery attempt failed",
};

export function statusLabel(status) {
  return STATUS_LABELS[status] || status;
}

export function formatRelativeTime(isoString, now = new Date()) {
  const diffSeconds = Math.round((new Date(isoString).getTime() - now.getTime()) / 1000);
  const rtf = new Intl.RelativeTimeFormat(navigator.language, { numeric: "auto" });
  const abs = Math.abs(diffSeconds);
  if (abs < 60) return rtf.format(diffSeconds, "second");
  if (abs < 3600) return rtf.format(Math.round(diffSeconds / 60), "minute");
  if (abs < 86400) return rtf.format(Math.round(diffSeconds / 3600), "hour");
  return rtf.format(Math.round(diffSeconds / 86400), "day");
}

export function formatLocalDateTime(isoString, timeZone) {
  return new Intl.DateTimeFormat(navigator.language, {
    timeZone: timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(isoString));
}

export function formatMoney(minor, currency) {
  const digits = currency === "JPY" ? 0 : 2;
  return new Intl.NumberFormat(navigator.language, { style: "currency", currency }).format(minor / 10 ** digits);
}

export function debounce(fn, waitMs) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), waitMs);
  };
}
