# Custom provider authentication headers

OpenVision supports additional HTTP headers for compatible API connections.
Open **Models & integrations → API connections**, add or edit a provider, and
enter a JSON object in **Additional Headers (JSON)**. The field is masked.

```json
{
  "X-API-Key": "your-provider-token",
  "X-Tenant": "your-tenant"
}
```

Save an explicit `Authorization` header when the server requires a scheme other
than the default `Bearer <API key>`. That explicit value takes precedence,
including the Agent's separate capability-catalog request. Header names are
normalized once; case-insensitive duplicate names are rejected. Empty edits
preserve saved headers. **Clear saved headers** removes them.

## Ownership and request paths

The maintained [header owner](../../desktop/provider-headers.js) validates values
before persistence or dispatch. Values use the existing secret-storage bridge;
provider configuration retains only names and a revision. The
[credential owner](../../desktop/provider-credentials.js) persists cleanup
references before creating/removing secrets. Failed deletions remain queued
across restart and can be retried in settings. If both a configuration save and
its rollback fail, further provider mutations stop until restart.

Requests resolve the selected provider's headers without activating another
connection. The turn snapshot reads credentials once per provider; child Agents
replace their parent's headers, including clearing them for a headerless child.
Discovery, Agent inference, local inference, Tab completion and Quick Edit have
their own dispatch owners. Completion and Quick Edit reject stale results when
the header revision changes during a request.

The Agent's [error policy](../../desktop/provider-error-policy.js) associates
explicit header values with the exact SDK fetch function using weak ownership.
It redacts those values from handled provider diagnostic graphs, including
parsed stream errors. This does not establish process-wide log redaction or
control what a configured server records. See [provider failures](provider-failure-handling.md).

## Validation boundaries

- At most 16 headers, 4,096 characters per value and 16 KiB aggregate input.
- Header names must be valid HTTP tokens; values reject line breaks and invalid
  HTTP characters.
- Transport framing, cookie, proxy and browser security headers are rejected.
- Missing or mismatched saved secrets fail explicitly rather than borrowing
  another provider's credentials.

Cleanup ownership is not a claim of atomic API-key replacement, physical-disk
durability or transactions across multiple windows. Existing API-key replacement
uses its established stable secret key. Configuration races, physical faults,
native platform coverage and process-wide diagnostic handling remain separate
acceptance gates.

## Verification

The focused Node 24 suite covers validation, omission/clear semantics, failed
secret/config writes, rollback uncertainty, restart cleanup, request ownership,
stale completion revisions and the actual recovered fetch/error boundary.
An actual recovered catalog regression reproduces its original Bearer override
and verifies custom-header precedence after the correction, using real local
HTTP sockets. [Portable preview.7 verification](../verification/portable-preview7.md)
records the final packaged native scope separately from these producer tests.
