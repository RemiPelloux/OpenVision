"use strict";
let n;
function o(e) {
    n = e;
}
function s() {
    if (!n) throw new Error("McpLifecycleOAuthClientProviderFactory has not been registered. The host (cursor-mcp or mcpProcess) must call setMcpLifecycleOAuthClientProviderFactory() at activation.");
    return n;
}
require.d(exports, {
    KX: ()=>o,
    rl: ()=>s
});
