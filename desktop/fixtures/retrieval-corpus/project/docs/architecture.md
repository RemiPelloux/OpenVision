# Architecture

## Request flow

1. The browser calls the API under `/v1`. Public tracking lookups need no
   login; everything else requires a bearer token issued by the API.
2. Every route passes through the request budget middleware first, then
   authentication, then the handler.
3. Status changes are written to Postgres and pushed to subscribed browsers
   over a websocket connection.
4. Slow side effects (emails, partner webhooks) are queued for the Go worker.

## Data

Schema changes are plain SQL files in `server/migrations/`, applied in order
at deploy time. Each applied file is checksummed so that edits to an already
applied migration are caught.

Shipments are listed newest first with keyset pagination: the client receives
an opaque page token instead of an offset, which keeps deep pages fast.

## Background work

The worker leases jobs with a visibility timeout. A job that fails is tried
again later with growing delays; after its last attempt it is parked in a
dead-letter list that on-call can inspect and redrive.

## Analytics

Handheld scans are exported nightly as compressed JSON lines. The pipeline
deduplicates them, converts depot-local timestamps to UTC and loads one fact
row per shipment. Finance receives CSV extracts from both the pipeline and the
Java reporting module.

## Route planning

Dispatch asks the `geo` crate for a visiting order. It starts from a greedy
nearest-stop tour and improves it with segment reversals until no reversal
helps.
