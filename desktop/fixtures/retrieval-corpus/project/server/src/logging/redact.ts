const SENSITIVE_KEYS = new Set([
  "password",
  "passwordhash",
  "authorization",
  "token",
  "accesstoken",
  "phone",
  "email",
  "recipientname",
  "addressline1",
  "addressline2",
]);

const EMAIL_PATTERN = /([A-Za-z0-9._%+-])[A-Za-z0-9._%+-]*@([A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;
const PHONE_PATTERN = /\+?\d[\d\s().-]{7,}\d/g;

export function maskEmail(value: string): string {
  return value.replace(EMAIL_PATTERN, (_match, first: string, domain: string) => `${first}***@${domain}`);
}

export function maskPhone(value: string): string {
  return value.replace(PHONE_PATTERN, (match) => {
    const digits = match.replace(/\D/g, "");
    return `***${digits.slice(-2)}`;
  });
}

/**
 * Deep-copies a log payload, replacing personal data with placeholders so
 * customer details never reach the log pipeline.
 */
export function redactPersonalData(value: unknown, depth = 0): unknown {
  if (depth > 8) return "[depth-limit]";
  if (typeof value === "string") {
    return maskPhone(maskEmail(value));
  }
  if (Array.isArray(value)) {
    return value.map((item) => redactPersonalData(item, depth + 1));
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, inner] of Object.entries(value as Record<string, unknown>)) {
      if (SENSITIVE_KEYS.has(key.toLowerCase())) {
        out[key] = "[redacted]";
      } else {
        out[key] = redactPersonalData(inner, depth + 1);
      }
    }
    return out;
  }
  return value;
}
