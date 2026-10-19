"""Load delivery facts into the warehouse in batches."""

from __future__ import annotations

from typing import Iterable, Iterator, Protocol, Sequence

from .transform import DeliveryFact

UPSERT_SQL = """
INSERT INTO analytics.delivery_facts
  (tracking_number, business_date, depot_code, attempts, first_scan_utc, delivered_utc)
VALUES (%s, %s, %s, %s, %s, %s)
ON CONFLICT (tracking_number) DO UPDATE SET
  attempts = EXCLUDED.attempts,
  delivered_utc = EXCLUDED.delivered_utc
"""


class Connection(Protocol):
    def executemany(self, sql: str, rows: Sequence[tuple]) -> None: ...
    def commit(self) -> None: ...
    def rollback(self) -> None: ...


def chunked(items: Iterable[DeliveryFact], size: int) -> Iterator[list[DeliveryFact]]:
    batch: list[DeliveryFact] = []
    for item in items:
        batch.append(item)
        if len(batch) == size:
            yield batch
            batch = []
    if batch:
        yield batch


def upsert_facts(conn: Connection, facts: Iterable[DeliveryFact], batch_size: int = 500) -> int:
    total = 0
    for batch in chunked(facts, batch_size):
        rows = [
            (f.tracking_number, f.business_date, f.depot_code, f.attempts, f.first_scan_utc, f.delivered_utc)
            for f in batch
        ]
        try:
            conn.executemany(UPSERT_SQL, rows)
            conn.commit()
        except Exception:
            conn.rollback()
            raise
        total += len(rows)
    return total
