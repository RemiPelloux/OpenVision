"""Turn validated scans into per-shipment delivery facts."""

from __future__ import annotations

from collections import defaultdict
from dataclasses import dataclass
from datetime import datetime
from typing import Iterable

from .extract import RawScan
from .timezones import business_date, local_scan_to_utc
from .validators import ValidationReport, scan_problems


@dataclass
class DeliveryFact:
    tracking_number: str
    first_scan_utc: datetime
    delivered_utc: datetime | None
    attempts: int
    depot_code: str | None
    business_date: str

    @property
    def transit_hours(self) -> float | None:
        if self.delivered_utc is None:
            return None
        return round((self.delivered_utc - self.first_scan_utc).total_seconds() / 3600, 2)


def dedupe_scans(scans: Iterable[RawScan]) -> list[RawScan]:
    """Handhelds sometimes upload the same scan twice; keep the first copy."""
    seen: set[tuple[str, str, str]] = set()
    unique: list[RawScan] = []
    for scan in scans:
        key = (scan.tracking_number, scan.event, scan.scanned_at)
        if key in seen:
            continue
        seen.add(key)
        unique.append(scan)
    return unique


def build_delivery_facts(scans: Iterable[RawScan], report: ValidationReport) -> list[DeliveryFact]:
    grouped: dict[str, list[tuple[datetime, RawScan]]] = defaultdict(list)
    for scan in dedupe_scans(scans):
        problems = scan_problems(scan)
        if problems:
            for problem in problems:
                report.reject(problem)
            continue
        report.accepted += 1
        grouped[scan.tracking_number].append((local_scan_to_utc(scan.scanned_at, scan.depot_code), scan))

    facts: list[DeliveryFact] = []
    for tracking_number, events in grouped.items():
        events.sort(key=lambda pair: pair[0])
        first_time, first_scan = events[0]
        delivered = next((t for t, s in events if s.event == "delivered"), None)
        attempts = sum(1 for _, s in events if s.event in ("delivered", "failed_attempt"))
        facts.append(
            DeliveryFact(
                tracking_number=tracking_number,
                first_scan_utc=first_time,
                delivered_utc=delivered,
                attempts=attempts,
                depot_code=first_scan.depot_code,
                business_date=business_date(first_time, first_scan.depot_code),
            )
        )
    return facts


def on_time_rate(facts: list[DeliveryFact], promise_hours: float = 48.0) -> float:
    delivered = [f for f in facts if f.transit_hours is not None]
    if not delivered:
        return 0.0
    on_time = sum(1 for f in delivered if f.transit_hours <= promise_hours)
    return round(on_time / len(delivered), 4)
