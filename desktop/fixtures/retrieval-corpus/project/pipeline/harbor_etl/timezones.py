"""Depot-local time conversion. Scans arrive in device-local time without offsets."""

from __future__ import annotations

from datetime import datetime, timezone
from zoneinfo import ZoneInfo

DEPOT_ZONES = {
    "AMS1": "Europe/Amsterdam",
    "RTM2": "Europe/Amsterdam",
    "LON1": "Europe/London",
    "BER1": "Europe/Berlin",
    "NYC1": "America/New_York",
    "CHI1": "America/Chicago",
}


def depot_zone(depot_code: str | None) -> ZoneInfo:
    return ZoneInfo(DEPOT_ZONES.get(depot_code or "", "UTC"))


def local_scan_to_utc(naive_local: str, depot_code: str | None) -> datetime:
    """Attach the depot's zone to a naive ISO timestamp and convert to UTC.

    During the autumn DST overlap the earlier of the two wall-clock readings
    is used (fold=0), which matches how the handhelds record time.
    """
    parsed = datetime.fromisoformat(naive_local)
    if parsed.tzinfo is not None:
        return parsed.astimezone(timezone.utc)
    localized = parsed.replace(tzinfo=depot_zone(depot_code), fold=0)
    return localized.astimezone(timezone.utc)


def business_date(instant_utc: datetime, depot_code: str | None) -> str:
    """The calendar day an event counts towards in daily depot reports."""
    return instant_utc.astimezone(depot_zone(depot_code)).date().isoformat()
