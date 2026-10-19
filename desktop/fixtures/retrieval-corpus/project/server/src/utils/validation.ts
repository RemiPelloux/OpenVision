import { ValidationError } from "../errors";

export type FieldRule =
  | { kind: "string"; required?: boolean; minLength?: number; maxLength?: number; pattern?: RegExp }
  | { kind: "number"; required?: boolean; min?: number; max?: number; integer?: boolean }
  | { kind: "enum"; required?: boolean; values: readonly string[] };

export type Schema = Record<string, FieldRule>;

const POSTAL_CODE_PATTERNS: Record<string, RegExp> = {
  US: /^\d{5}(-\d{4})?$/,
  GB: /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i,
  FR: /^\d{5}$/,
  DE: /^\d{5}$/,
  NL: /^\d{4} ?[A-Z]{2}$/i,
};

export function isValidPostalCode(country: string, postalCode: string): boolean {
  const pattern = POSTAL_CODE_PATTERNS[country.toUpperCase()];
  return pattern ? pattern.test(postalCode.trim()) : postalCode.trim().length > 0;
}

export function isValidTrackingNumber(value: string): boolean {
  // HBR + 10 digits + check digit (mod 10 over the digits)
  const match = /^HBR(\d{10})(\d)$/.exec(value);
  if (!match) return false;
  const sum = match[1].split("").reduce((acc, d, i) => acc + Number(d) * (i % 2 === 0 ? 3 : 1), 0);
  return (10 - (sum % 10)) % 10 === Number(match[2]);
}

export function validateBody<T>(body: unknown, schema: Schema): T {
  if (!body || typeof body !== "object") {
    throw new ValidationError("request body must be an object");
  }
  const input = body as Record<string, unknown>;
  const problems: Record<string, string> = {};

  for (const [field, rule] of Object.entries(schema)) {
    const value = input[field];
    if (value === undefined || value === null || value === "") {
      if (rule.required) problems[field] = "is required";
      continue;
    }
    switch (rule.kind) {
      case "string":
        if (typeof value !== "string") problems[field] = "must be a string";
        else if (rule.minLength && value.length < rule.minLength) problems[field] = `must be at least ${rule.minLength} chars`;
        else if (rule.maxLength && value.length > rule.maxLength) problems[field] = `must be at most ${rule.maxLength} chars`;
        else if (rule.pattern && !rule.pattern.test(value)) problems[field] = "has an invalid format";
        break;
      case "number":
        if (typeof value !== "number" || Number.isNaN(value)) problems[field] = "must be a number";
        else if (rule.integer && !Number.isInteger(value)) problems[field] = "must be an integer";
        else if (rule.min !== undefined && value < rule.min) problems[field] = `must be >= ${rule.min}`;
        else if (rule.max !== undefined && value > rule.max) problems[field] = `must be <= ${rule.max}`;
        break;
      case "enum":
        if (typeof value !== "string" || !rule.values.includes(value)) {
          problems[field] = `must be one of ${rule.values.join(", ")}`;
        }
        break;
    }
  }

  if (Object.keys(problems).length > 0) {
    throw new ValidationError("request body is invalid", problems);
  }
  return input as T;
}
