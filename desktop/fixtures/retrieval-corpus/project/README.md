# Harbor

Harbor tracks parcels from pickup to doorstep. Customers look up a tracking
number and get live status changes; couriers and dispatchers update shipments
from their handhelds.

## Components

| Directory   | Language   | Purpose                                              |
|-------------|------------|------------------------------------------------------|
| `server/`   | TypeScript | Public HTTP API, auth, notifications                 |
| `client/`   | JavaScript | Tracking page served to customers                    |
| `worker/`   | Go         | Background jobs (emails, partner webhooks)           |
| `geo/`      | Rust       | Distance and courier round planning                  |
| `pipeline/` | Python     | Nightly ETL from scan logs into the warehouse        |
| `reporting/`| Java       | Monthly depot reports for finance                    |
| `scripts/`  | Shell      | Deploy and rollback                                  |

## Getting started

```sh
cd server && npm install && npm run build
HARBOR_AUTH__SIGNING_SECRET=local-dev-secret-value npm start
```

Configuration lives in `config/default.json`. Any key can be overridden with
an environment variable: nested keys are joined with a double underscore, so
`HARBOR_RATE_LIMIT__CAPACITY=10` lowers the request budget.

See `docs/architecture.md` for how the pieces fit together and
`docs/runbook.md` for on-call procedures.
