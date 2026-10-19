"""Reading raw scan exports produced by courier handhelds."""

from __future__ import annotations

import gzip
import json
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Callable, Iterator, TypeVar

T = TypeVar("T")


@dataclass(frozen=True)
class RawScan:
    tracking_number: str
    event: str
    depot_code: str | None
    latitude: float | None
    longitude: float | None
    scanned_at: str
    device_id: str


class TransientSourceError(Exception):
    """Raised when the object store hiccups and the read may succeed later."""


def retry_call(fn: Callable[[], T], attempts: int = 5, base_delay: float = 0.5, max_delay: float = 20.0) -> T:
    """Call fn, retrying TransientSourceError with doubling sleeps between tries."""
    delay = base_delay
    for attempt in range(1, attempts + 1):
        try:
            return fn()
        except TransientSourceError:
            if attempt == attempts:
                raise
            time.sleep(delay)
            delay = min(max_delay, delay * 2)
    raise AssertionError("unreachable")


def iter_scan_files(root: Path, day: str) -> Iterator[Path]:
    """Yield the gzip'd JSON-lines files for one day, e.g. root/2024-05-03/*.jsonl.gz."""
    folder = root / day
    if not folder.is_dir():
        return
    yield from sorted(folder.glob("*.jsonl.gz"))


def read_scans(path: Path) -> Iterator[RawScan]:
    def _open():
        try:
            return gzip.open(path, "rt", encoding="utf-8")
        except OSError as exc:
            raise TransientSourceError(str(exc)) from exc

    with retry_call(_open) as handle:
        for line_number, line in enumerate(handle, start=1):
            line = line.strip()
            if not line:
                continue
            try:
                record = json.loads(line)
            except json.JSONDecodeError:
                print(f"skipping malformed line {line_number} in {path.name}")
                continue
            yield RawScan(
                tracking_number=record["tn"],
                event=record["ev"],
                depot_code=record.get("depot"),
                latitude=record.get("lat"),
                longitude=record.get("lon"),
                scanned_at=record["ts"],
                device_id=record.get("dev", "unknown"),
            )
