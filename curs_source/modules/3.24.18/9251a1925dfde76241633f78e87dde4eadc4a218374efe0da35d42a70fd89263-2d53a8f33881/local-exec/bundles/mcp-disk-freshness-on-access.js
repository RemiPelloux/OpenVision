import { createLogger } from "../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../context/dist/index.js";
import { createCounter, createHistogram } from "../../dist_exports.js";
import { init_mcp_disk_catalog_read } from "./mcp-disk-catalog-read.js";
import { init_mcp5 } from "./mcp.js";
import { init_dist4 } from "../../metrics/dist/index.js";
var logger23, MCP_PATH_SEGMENT, DISK_MCPS_FRESHNESS_DEBOUNCE_MS, mcpDiscoveryFreshnessCheck, mcpDiscoveryFreshnessMissingTools, mcpDiscoveryFreshnessExtraTools, mcpDiscoveryFreshnessSymmetricDifference, diskFreshnessDebounceTimers;
export { DISK_MCPS_FRESHNESS_DEBOUNCE_MS, MCP_PATH_SEGMENT, diskFreshnessDebounceTimers, logger23, mcpDiscoveryFreshnessCheck, mcpDiscoveryFreshnessExtraTools, mcpDiscoveryFreshnessMissingTools, mcpDiscoveryFreshnessSymmetricDifference };
var __wakaru_init_mcp_disk_freshness_on_access_initialized = false;
export function init_mcp_disk_freshness_on_access() {
if (__wakaru_init_mcp_disk_freshness_on_access_initialized) return;
__wakaru_init_mcp_disk_freshness_on_access_initialized = true;
"use strict";
init_dist();
init_dist4();
init_mcp5();
init_mcp_disk_catalog_read();
logger23 = createLogger("local-exec:mcp-disk-freshness-on-access");
MCP_PATH_SEGMENT = "/mcps/";
DISK_MCPS_FRESHNESS_DEBOUNCE_MS = 2e3;
mcpDiscoveryFreshnessCheck = createCounter("mcp.discovery_freshness.check", {
    description: "MCP discovery surface freshness comparison outcome against canonical live tools",
    labelNames: [
        "surface",
        "outcome"
    ]
});
mcpDiscoveryFreshnessMissingTools = createHistogram("mcp.discovery_freshness.missing_tools", {
    description: "Number of tools present in canonical live state but missing from the observed discovery surface",
    labelNames: [
        "surface"
    ]
});
mcpDiscoveryFreshnessExtraTools = createHistogram("mcp.discovery_freshness.extra_tools", {
    description: "Number of tools present on the observed discovery surface but absent from canonical live state",
    labelNames: [
        "surface"
    ]
});
mcpDiscoveryFreshnessSymmetricDifference = createHistogram("mcp.discovery_freshness.symmetric_difference", {
    description: "Total symmetric difference between canonical live tools and the observed discovery surface",
    labelNames: [
        "surface"
    ]
});
diskFreshnessDebounceTimers = new Map();

}
