var UUID_PATTERN, AGENT_LINK_PARSE_BASE, CURSOR_WEB_HOSTNAMES, CURSOR_WEB_AGENT_LINK_ORIGIN;
export { AGENT_LINK_PARSE_BASE, CURSOR_WEB_AGENT_LINK_ORIGIN, CURSOR_WEB_HOSTNAMES, UUID_PATTERN };
var __wakaru_init_agent_links_initialized = false;
export function init_agent_links() {
if (__wakaru_init_agent_links_initialized) return;
__wakaru_init_agent_links_initialized = true;
"use strict";
UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
AGENT_LINK_PARSE_BASE = "https://agent-link.invalid/";
CURSOR_WEB_HOSTNAMES = new Set([
    "cursor.com",
    "www.cursor.com"
]);
CURSOR_WEB_AGENT_LINK_ORIGIN = "https://cursor.com";

}
