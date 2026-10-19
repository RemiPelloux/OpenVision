"""CSV export of delivery facts for the finance and operations teams."""

from __future__ import annotations

import csv
import io
from pathlib import Path
from typing import Iterable

from .transform import DeliveryFact

COLUMNS = ["tracking_number", "business_date", "depot_code", "attempts", "first_scan_utc", "delivered_utc", "transit_hours"]

FORMULA_PREFIXES = ("=", "+", "-", "@", "\t", "\r")


def neutralize_formula(value: str) -> str:
    """Spreadsheet apps execute cells starting with '=' etc.; prefix them with a quote."""
    if value and value.startswith(FORMULA_PREFIXES):
        return "'" + value
    return value


def fact_to_row(fact: DeliveryFact) -> list[str]:
    return [
        neutralize_formula(fact.tracking_number),
        fact.business_date,
        neutralize_formula(fact.depot_code or ""),
        str(fact.attempts),
        fact.first_scan_utc.isoformat(),
        fact.delivered_utc.isoformat() if fact.delivered_utc else "",
        "" if fact.transit_hours is None else f"{fact.transit_hours:.2f}",
    ]


def write_facts_csv(facts: Iterable[DeliveryFact], destination: Path) -> int:
    count = 0
    with destination.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.writer(handle, lineterminator="\n")
        writer.writerow(COLUMNS)
        for fact in facts:
            writer.writerow(fact_to_row(fact))
            count += 1
    return count


def facts_to_csv_string(facts: Iterable[DeliveryFact]) -> str:
    buffer = io.StringIO()
    writer = csv.writer(buffer, lineterminator="\n")
    writer.writerow(COLUMNS)
    for fact in facts:
        writer.writerow(fact_to_row(fact))
    return buffer.getvalue()
