from datetime import timezone

from harbor_etl.extract import RawScan
from harbor_etl.timezones import local_scan_to_utc
from harbor_etl.transform import build_delivery_facts, dedupe_scans
from harbor_etl.validators import ValidationReport


def scan(event, ts, tn="HBR00000000017", depot="AMS1"):
    return RawScan(tn, event, depot, 52.37, 4.90, ts, "dev-1")


def test_duplicates_are_dropped():
    scans = [scan("picked_up", "2024-05-03T08:00:00")] * 3
    assert len(dedupe_scans(scans)) == 1


def test_transit_hours_for_delivered_parcel():
    report = ValidationReport()
    facts = build_delivery_facts(
        [scan("picked_up", "2024-05-03T08:00:00"), scan("delivered", "2024-05-04T14:30:00")],
        report,
    )
    assert report.accepted == 2
    assert facts[0].transit_hours == 30.5
    assert facts[0].attempts == 1


def test_invalid_rows_are_counted_by_reason():
    report = ValidationReport()
    build_delivery_facts([scan("teleported", "2024-05-03T08:00:00")], report)
    assert report.reasons == {"unknown_event": 1}


def test_amsterdam_summer_time_offset():
    utc = local_scan_to_utc("2024-07-01T10:00:00", "AMS1")
    assert utc.tzinfo == timezone.utc
    assert utc.hour == 8
