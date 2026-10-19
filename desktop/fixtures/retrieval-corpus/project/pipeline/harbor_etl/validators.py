"""Row-level checks applied before loading. Rejected rows go to a quarantine file."""

from __future__ import annotations

import re
from dataclasses import dataclass, field

from .extract import RawScan

TRACKING_RE = re.compile(r"^HBR\d{11}$")
KNOWN_EVENTS = {"picked_up", "arrived_depot", "departed_depot", "out_for_delivery", "delivered", "failed_attempt"}


@dataclass
class ValidationReport:
    accepted: int = 0
    rejected: int = 0
    reasons: dict[str, int] = field(default_factory=dict)

    def reject(self, reason: str) -> None:
        self.rejected += 1
        self.reasons[reason] = self.reasons.get(reason, 0) + 1


def scan_problems(scan: RawScan) -> list[str]:
    problems: list[str] = []
    if not TRACKING_RE.match(scan.tracking_number):
        problems.append("bad_tracking_number")
    if scan.event not in KNOWN_EVENTS:
        problems.append("unknown_event")
    if (scan.latitude is None) != (scan.longitude is None):
        problems.append("half_coordinate")
    if scan.latitude is not None and not -90 <= scan.latitude <= 90:
        problems.append("latitude_out_of_range")
    if scan.longitude is not None and not -180 <= scan.longitude <= 180:
        problems.append("longitude_out_of_range")
    return problems
