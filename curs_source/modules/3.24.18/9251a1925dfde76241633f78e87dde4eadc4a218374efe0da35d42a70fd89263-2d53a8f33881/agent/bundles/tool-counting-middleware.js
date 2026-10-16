import { ToolErrorClassification, init_core5 } from "./tools/core.js";
var ToolCountingStateTracker;
export { ToolCountingStateTracker };
var __wakaru_init_tool_counting_middleware_initialized = false;
export function init_tool_counting_middleware() {
if (__wakaru_init_tool_counting_middleware_initialized) return;
__wakaru_init_tool_counting_middleware_initialized = true;
"use strict";
init_core5();
ToolCountingStateTracker = class {
    constructor(){
        this.toolCallCount = 0;
        this.resultClassificationCounts = new Map();
    }
    getFailedToolCallCount() {
        return Array.from(this.resultClassificationCounts.values()).reduce((sum, count2)=>sum + count2, 0);
    }
    getUnexpectedToolCallErrorCount() {
        return (this.resultClassificationCounts.get(ToolErrorClassification.TIMEOUT) ?? 0) + (this.resultClassificationCounts.get(ToolErrorClassification.PROVIDER_ERROR) ?? 0) + (this.resultClassificationCounts.get(ToolErrorClassification.BAD_USER_DEVICE_STATE) ?? 0) + (this.resultClassificationCounts.get(ToolErrorClassification.OTHER_ERROR) ?? 0);
    }
    hasFailedToolCalls() {
        return this.getFailedToolCallCount() > 0 ? "true" : "false";
    }
    hasUnexpectedToolCallErrors() {
        return this.getUnexpectedToolCallErrorCount() > 0 ? "true" : "false";
    }
};

}
