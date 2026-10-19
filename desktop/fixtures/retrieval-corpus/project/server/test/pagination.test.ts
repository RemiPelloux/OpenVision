import { describe, it, expect } from "vitest";
import { buildPage, parsePageRequest, encodePageToken } from "../src/utils/pagination";

const rows = Array.from({ length: 6 }, (_, i) => ({ id: `s${i}`, createdAt: `2024-05-0${i + 1}T00:00:00Z` }));

describe("pagination", () => {
  it("emits a next page token when more rows exist", () => {
    const page = buildPage(rows, 5);
    expect(page.items).toHaveLength(5);
    expect(page.nextPageToken).toBe(encodePageToken(rows[4].createdAt, rows[4].id));
  });

  it("caps the page size", () => {
    expect(parsePageRequest({ limit: "1000" }).limit).toBe(100);
  });

  it("rejects garbage tokens", () => {
    expect(() => parsePageRequest({ pageToken: "not-a-token" })).toThrow("invalid page token");
  });
});
