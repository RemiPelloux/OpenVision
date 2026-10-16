var OperationType;
export { OperationType };
var __wakaru_init_pending_decision_provider_initialized = false;
export function init_pending_decision_provider() {
if (__wakaru_init_pending_decision_provider_initialized) return;
__wakaru_init_pending_decision_provider_initialized = true;
"use strict";
(function(OperationType2) {
    OperationType2["Write"] = "write";
    OperationType2["Read"] = "read";
    OperationType2["Shell"] = "shell";
    OperationType2["Delete"] = "delete";
    OperationType2["Mcp"] = "mcp";
})(OperationType || (OperationType = {}));

}
