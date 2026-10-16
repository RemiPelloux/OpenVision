var BIGINT_ZERO2, BIGINT_EIGHT2, BIGINT_SIXTEEN2, IPV4_LOW_HEXTET_MASK2, parsedDomainPatternMemo, hostIpAddressMemo, CLIENT_METRIC_PROVIDER_HOSTS, MCP_NETWORK_CONTROLS_BLOCK_MESSAGE, DNS_LABEL_PATTERN, HOSTNAME_ALLOWLIST_PATTERN_REGEX, WILDCARD_HOST_ALLOWLIST_PATTERN_REGEX, IPV4_SEGMENT_PATTERN, IPV4_LITERAL_REGEX, IPV6_LITERAL_REGEX, CIDR_ALLOWLIST_PATTERN_REGEX, VALUE_MEMO_LIMIT, normalizedAllowlistPatternMemo, adminServerUrlParseMemo;
export { BIGINT_EIGHT2, BIGINT_SIXTEEN2, BIGINT_ZERO2, CIDR_ALLOWLIST_PATTERN_REGEX, CLIENT_METRIC_PROVIDER_HOSTS, DNS_LABEL_PATTERN, HOSTNAME_ALLOWLIST_PATTERN_REGEX, IPV4_LITERAL_REGEX, IPV4_LOW_HEXTET_MASK2, IPV4_SEGMENT_PATTERN, IPV6_LITERAL_REGEX, MCP_NETWORK_CONTROLS_BLOCK_MESSAGE, VALUE_MEMO_LIMIT, WILDCARD_HOST_ALLOWLIST_PATTERN_REGEX, adminServerUrlParseMemo, hostIpAddressMemo, normalizedAllowlistPatternMemo, parsedDomainPatternMemo };
var __wakaru_init_mcp_url_utils_initialized = false;
export function init_mcp_url_utils() {
if (__wakaru_init_mcp_url_utils_initialized) return;
__wakaru_init_mcp_url_utils_initialized = true;
"use strict";
BIGINT_ZERO2 = BigInt(0);
BIGINT_EIGHT2 = BigInt(8);
BIGINT_SIXTEEN2 = BigInt(16);
IPV4_LOW_HEXTET_MASK2 = BigInt(65535);
parsedDomainPatternMemo = new Map();
hostIpAddressMemo = new Map();
CLIENT_METRIC_PROVIDER_HOSTS = new Set([
    "airtable.com",
    "anysphere.co",
    "api.aws",
    "apify.com",
    "asana.com",
    "ashbyhq.com",
    "atlassian.com",
    "atlassian.net",
    "azuredatabricks.net",
    "box.com",
    "buildkite.com",
    "calendly.com",
    "canva.com",
    "clickhouse.cloud",
    "clickup.com",
    "cloudflare.com",
    "composio.dev",
    "context7.com",
    "cursor.com",
    "cursor.sh",
    "cursorapi.com",
    "databricks.com",
    "datadoghq.com",
    "datadoghq.eu",
    "ddog-gov.com",
    "dropbox.com",
    "elevenlabs.io",
    "exa.ai",
    "figma.com",
    "firecrawl.dev",
    "github.com",
    "githubcopilot.com",
    "gitlab.com",
    "google.com",
    "googleapis.com",
    "granola.ai",
    "hex.tech",
    "hubspot.com",
    "huggingface.co",
    "intercom.com",
    "linear.app",
    "monday.com",
    "neon.tech",
    "notion.com",
    "plain.com",
    "posthog.com",
    "prisma.io",
    "railway.com",
    "ramp.com",
    "render.com",
    "salesforce.com",
    "sentry.dev",
    "sentry.io",
    "slack.com",
    "snowflakecomputing.com",
    "spacelift.io",
    "statsig.com",
    "stripe.com",
    "supabase.com",
    "todoist.net",
    "vercel.com",
    "workos.com",
    "x.ai",
    "x.com",
    "zapier.com"
]);
MCP_NETWORK_CONTROLS_BLOCK_MESSAGE = "Blocked by MCP Network Admin Server Controls";
DNS_LABEL_PATTERN = "[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?";
HOSTNAME_ALLOWLIST_PATTERN_REGEX = new RegExp(`^(?:${DNS_LABEL_PATTERN}\\.)*${DNS_LABEL_PATTERN}$`);
WILDCARD_HOST_ALLOWLIST_PATTERN_REGEX = new RegExp(`^\\*\\.(?:${DNS_LABEL_PATTERN}\\.)*${DNS_LABEL_PATTERN}$`);
IPV4_SEGMENT_PATTERN = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)";
IPV4_LITERAL_REGEX = new RegExp(`^${IPV4_SEGMENT_PATTERN}(?:\\.${IPV4_SEGMENT_PATTERN}){3}$`);
IPV6_LITERAL_REGEX = /^[0-9a-f:]+$/;
CIDR_ALLOWLIST_PATTERN_REGEX = new RegExp(`^(?:${IPV4_SEGMENT_PATTERN}(?:\\.${IPV4_SEGMENT_PATTERN}){3}|[0-9a-f:]+)\\/\\d{1,3}$`);
VALUE_MEMO_LIMIT = 2048;
normalizedAllowlistPatternMemo = new Map();
adminServerUrlParseMemo = new Map();

}
