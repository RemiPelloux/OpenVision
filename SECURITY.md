# Security reports

This development preview has no stable security-support window or guaranteed
response time. Keep secrets and production-sensitive projects out of untrusted
extensions, MCP servers and AI providers.

Use the repository's **Security → Report a vulnerability** action for private
disclosure when available. Do not put credentials, private source code, raw user
profiles or exploit details in a public issue. If private reporting is unavailable,
open only a request for a private reporting channel, without sensitive details.

Include the commit/version, operating system, minimal reproduction, expected
and actual behavior, and whether the issue was observed in a native runtime or
a fixture. Share only the smallest redacted diagnostic excerpt needed.

Review [telemetry coverage](docs/recovery/rea-telemetry-audit.md),
[provider error handling](docs/engineering/provider-failure-handling.md) and
[release limitations](docs/verification/release-claims.md) before relying on a privacy or
capability claim. Disabling built-in telemetry does not disable networking by
configured providers or independently installed extensions.
