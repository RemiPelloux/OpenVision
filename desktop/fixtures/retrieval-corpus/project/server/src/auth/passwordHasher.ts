import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback) as (
  password: string,
  salt: Buffer,
  keylen: number,
  options: { N: number; r: number; p: number },
) => Promise<Buffer>;

const KEY_LENGTH = 32;
const DEFAULT_COST = { N: 16384, r: 8, p: 1 };

/**
 * Stored format: scrypt$N$r$p$saltHex$hashHex
 */
export async function hashPassword(plain: string, cost = DEFAULT_COST): Promise<string> {
  if (plain.length < 10) {
    throw new Error("password must be at least 10 characters");
  }
  const salt = randomBytes(16);
  const derived = await scrypt(plain.normalize("NFKC"), salt, KEY_LENGTH, cost);
  return ["scrypt", cost.N, cost.r, cost.p, salt.toString("hex"), derived.toString("hex")].join("$");
}

export async function verifyPassword(plain: string, stored: string): Promise<boolean> {
  const parts = stored.split("$");
  if (parts.length !== 6 || parts[0] !== "scrypt") {
    return false;
  }
  const [, n, r, p, saltHex, hashHex] = parts;
  const expected = Buffer.from(hashHex, "hex");
  const derived = await scrypt(plain.normalize("NFKC"), Buffer.from(saltHex, "hex"), expected.length, {
    N: Number(n),
    r: Number(r),
    p: Number(p),
  });
  return derived.length === expected.length && timingSafeEqual(derived, expected);
}

export function needsRehash(stored: string, cost = DEFAULT_COST): boolean {
  const parts = stored.split("$");
  if (parts.length !== 6) return true;
  return Number(parts[1]) < cost.N || Number(parts[2]) !== cost.r || Number(parts[3]) !== cost.p;
}
