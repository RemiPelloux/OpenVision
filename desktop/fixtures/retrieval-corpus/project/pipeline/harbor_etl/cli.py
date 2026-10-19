"""Command-line entry point: `python -m harbor_etl.cli run --day 2024-05-03`."""

from __future__ import annotations

import argparse
import json
import os
import sys
from datetime import date, timedelta
from pathlib import Path

from .csv_export import write_facts_csv
from .extract import iter_scan_files, read_scans
from .transform import build_delivery_facts, on_time_rate
from .validators import ValidationReport


def default_day() -> str:
    return (date.today() - timedelta(days=1)).isoformat()


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog="harbor-etl", description="Harbor scan log pipeline")
    sub = parser.add_subparsers(dest="command", required=True)

    run = sub.add_parser("run", help="process one day of scans")
    run.add_argument("--day", default=default_day(), help="YYYY-MM-DD, defaults to yesterday")
    run.add_argument("--source", type=Path, default=Path(os.environ.get("HARBOR_SCAN_ROOT", "/data/scans")))
    run.add_argument("--csv", type=Path, help="also write the facts to this CSV file")
    run.add_argument("--dry-run", action="store_true", help="do not load into the warehouse")

    stats = sub.add_parser("stats", help="print validation stats for a day without loading")
    stats.add_argument("--day", default=default_day())
    stats.add_argument("--source", type=Path, default=Path("/data/scans"))
    return parser


def run_day(source: Path, day: str) -> tuple[list, ValidationReport]:
    report = ValidationReport()
    scans = (scan for path in iter_scan_files(source, day) for scan in read_scans(path))
    return build_delivery_facts(scans, report), report


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    facts, report = run_day(args.source, args.day)
    summary = {
        "day": args.day,
        "accepted": report.accepted,
        "rejected": report.rejected,
        "reasons": report.reasons,
        "shipments": len(facts),
        "on_time_rate": on_time_rate(facts),
    }
    if args.command == "run" and args.csv:
        summary["csv_rows"] = write_facts_csv(facts, args.csv)
    print(json.dumps(summary, indent=2, sort_keys=True))
    return 0 if report.rejected < max(1, report.accepted) else 2


if __name__ == "__main__":
    sys.exit(main())
