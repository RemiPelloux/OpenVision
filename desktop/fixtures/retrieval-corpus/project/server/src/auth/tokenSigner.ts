import { createHmac, timingSafeEqual } from "node:crypto";
import { AuthError } from "../errors";

export interface TokenClaims {
  sub: string;
  role: "customer" | "courier" | "dispatcher" | "admin";
  iat: number;
  exp: number;
  scope?: string[];
}

export interface SignerOptions {
  secret: string;
  issuer: string;
  ttlSeconds: number;
  clockSkewSeconds?: number;
}

function base64UrlEncode(input: Buffer | string): string {
  const buf = typeof input === "string" ? Buffer.from(input, "utf8") : input;
  return buf.toString("base64").replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function base64UrlDecode(input: string): Buffer {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/");
  const padLength = (4 - (padded.length % 4)) % 4;
  return Buffer.from(padded + "=".repeat(padLength), "base64");
}

export class TokenSigner {
  private readonly secret: string;
  private readonly issuer: string;
  private readonly ttlSeconds: number;
  private readonly clockSkewSeconds: number;

  constructor(options: SignerOptions) {
    if (options.secret.length < 16) {
      throw new Error("signing secret must be at least 16 characters");
    }
    this.secret = options.secret;
    this.issuer = options.issuer;
    this.ttlSeconds = options.ttlSeconds;
    this.clockSkewSeconds = options.clockSkewSeconds ?? 30;
  }

  private computeSignature(headerAndPayload: string): string {
    const mac = createHmac("sha256", this.secret).update(headerAndPayload).digest();
    return base64UrlEncode(mac);
  }

  issueAccessToken(subject: string, role: TokenClaims["role"], scope: string[] = []): string {
    const now = Math.floor(Date.now() / 1000);
    const header = base64UrlEncode(JSON.stringify({ alg: "HS256", typ: "HBR" }));
    const claims: TokenClaims & { iss: string } = {
      sub: subject,
      role,
      scope,
      iat: now,
      exp: now + this.ttlSeconds,
      iss: this.issuer,
    };
    const payload = base64UrlEncode(JSON.stringify(claims));
    const signature = this.computeSignature(`${header}.${payload}`);
    return `${header}.${payload}.${signature}`;
  }

  verifyAccessToken(token: string): TokenClaims {
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new AuthError("malformed token", "token_malformed");
    }
    const [header, payload, signature] = parts;
    const expected = Buffer.from(this.computeSignature(`${header}.${payload}`));
    const actual = Buffer.from(signature);
    if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) {
      throw new AuthError("signature mismatch", "token_bad_signature");
    }

    let claims: TokenClaims & { iss?: string };
    try {
      claims = JSON.parse(base64UrlDecode(payload).toString("utf8"));
    } catch {
      throw new AuthError("unreadable claims", "token_malformed");
    }

    const now = Math.floor(Date.now() / 1000);
    if (claims.iss !== this.issuer) {
      throw new AuthError("unexpected issuer", "token_bad_issuer");
    }
    if (claims.exp + this.clockSkewSeconds < now) {
      throw new AuthError("token expired", "token_expired");
    }
    if (claims.iat - this.clockSkewSeconds > now) {
      throw new AuthError("token issued in the future", "token_not_yet_valid");
    }
    return claims;
  }
}

export function extractBearerToken(authorizationHeader: string | undefined): string | null {
  if (!authorizationHeader) return null;
  const match = /^Bearer\s+(.+)$/i.exec(authorizationHeader.trim());
  return match ? match[1] : null;
}
