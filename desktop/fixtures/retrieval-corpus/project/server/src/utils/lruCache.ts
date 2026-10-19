interface Entry<V> {
  value: V;
  expiresAt: number;
}

export interface CacheStats {
  hits: number;
  misses: number;
  evictions: number;
  size: number;
}

/**
 * Small in-process cache with a fixed capacity and per-entry time-to-live.
 * Relies on Map insertion order: the first key is always the least recently used.
 */
export class LruCache<K, V> {
  private readonly entries = new Map<K, Entry<V>>();
  private hits = 0;
  private misses = 0;
  private evictions = 0;

  constructor(
    private readonly capacity: number,
    private readonly defaultTtlMs: number,
    private readonly now: () => number = Date.now,
  ) {
    if (capacity <= 0) throw new Error("capacity must be positive");
  }

  get(key: K): V | undefined {
    const entry = this.entries.get(key);
    if (!entry) {
      this.misses++;
      return undefined;
    }
    if (entry.expiresAt <= this.now()) {
      this.entries.delete(key);
      this.misses++;
      return undefined;
    }
    // refresh recency
    this.entries.delete(key);
    this.entries.set(key, entry);
    this.hits++;
    return entry.value;
  }

  set(key: K, value: V, ttlMs = this.defaultTtlMs): void {
    if (this.entries.has(key)) {
      this.entries.delete(key);
    }
    this.entries.set(key, { value, expiresAt: this.now() + ttlMs });
    this.evictOverflow();
  }

  private evictOverflow(): void {
    while (this.entries.size > this.capacity) {
      const oldestKey = this.entries.keys().next().value as K;
      this.entries.delete(oldestKey);
      this.evictions++;
    }
  }

  async getOrLoad(key: K, loader: () => Promise<V>, ttlMs?: number): Promise<V> {
    const cached = this.get(key);
    if (cached !== undefined) return cached;
    const value = await loader();
    this.set(key, value, ttlMs);
    return value;
  }

  delete(key: K): boolean {
    return this.entries.delete(key);
  }

  stats(): CacheStats {
    return { hits: this.hits, misses: this.misses, evictions: this.evictions, size: this.entries.size };
  }
}
