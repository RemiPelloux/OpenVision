import { ValidationError } from "../errors";

export interface PageRequest {
  limit: number;
  after?: { createdAt: string; id: string };
}

export interface Page<T> {
  items: T[];
  nextPageToken: string | null;
}

const MAX_PAGE_SIZE = 100;
const DEFAULT_PAGE_SIZE = 25;

export function encodePageToken(createdAt: string, id: string): string {
  return Buffer.from(JSON.stringify([createdAt, id]), "utf8").toString("base64url");
}

export function decodePageToken(token: string): { createdAt: string; id: string } {
  try {
    const [createdAt, id] = JSON.parse(Buffer.from(token, "base64url").toString("utf8"));
    if (typeof createdAt !== "string" || typeof id !== "string") throw new Error("shape");
    return { createdAt, id };
  } catch {
    throw new ValidationError("invalid page token");
  }
}

export function parsePageRequest(query: Record<string, string | undefined>): PageRequest {
  const rawLimit = query.limit === undefined ? DEFAULT_PAGE_SIZE : Number(query.limit);
  if (!Number.isInteger(rawLimit) || rawLimit < 1) {
    throw new ValidationError("limit must be a positive integer");
  }
  const limit = Math.min(rawLimit, MAX_PAGE_SIZE);
  return query.pageToken ? { limit, after: decodePageToken(query.pageToken) } : { limit };
}

/**
 * Keyset pagination: we fetch limit + 1 rows to know whether another page exists.
 */
export function buildPage<T extends { createdAt: string; id: string }>(rows: T[], limit: number): Page<T> {
  const hasMore = rows.length > limit;
  const items = hasMore ? rows.slice(0, limit) : rows;
  const last = items[items.length - 1];
  return {
    items,
    nextPageToken: hasMore && last ? encodePageToken(last.createdAt, last.id) : null,
  };
}
