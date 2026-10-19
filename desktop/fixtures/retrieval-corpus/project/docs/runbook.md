# On-call runbook

## API returns 429 for many customers

The per-client request budget is configured under `rateLimit` in
`config/default.json`. A sudden spike usually means a partner integration is
looping; identify the client from the logs before raising the limit. Do not
simply retry the partner's requests on their behalf.

## Emails are not arriving

1. Check the worker readiness endpoint on port 8081: `deadLetters` should be 0.
2. If the SMTP relay was down, jobs will have been retried a few times and then
   dead-lettered. Once the relay is healthy, redrive the `send_email` kind.
3. Customer addresses are masked in logs; use the tracking number to correlate.

## Deploy went wrong

Run `scripts/rollback.sh production`. Database migrations are not reverted, so
check whether the release added columns that the old code does not expect.

## Pipeline reports a high rejection rate

`harbor-etl stats --day YYYY-MM-DD` prints rejection reasons without loading
anything. `unknown_event` typically means a handheld firmware update shipped a
new event name.
