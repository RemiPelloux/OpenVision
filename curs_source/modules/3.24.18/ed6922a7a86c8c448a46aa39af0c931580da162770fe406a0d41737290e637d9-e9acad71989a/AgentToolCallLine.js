import { ove } from "./Collapsible.js";
import { sp } from "./icon.js";
import { wCn } from "./markdownIconSizing.js";
import { x } from "./tslib.es6.js";
import { ZCe } from "./use-disclosure-state.js";
var H6l;
export { H6l };
var __wakaru_Mgf_initialized = false;
export function Mgf() {
if (__wakaru_Mgf_initialized) return;
__wakaru_Mgf_initialized = true;
"use strict";
x(), wCn(), ZCe(), sp(), ove(), H6l = {
    createAgentToolCall: {
        loading: "Creating",
        done: "Created",
        error: "Failed to create"
    },
    sendToAgentToolCall: {
        loading: "Messaging",
        done: "Messaged",
        error: "Failed to message"
    },
    stopAgentToolCall: {
        loading: "Stopping",
        done: "Stopped",
        error: "Failed to stop"
    },
    agentUpdateNotification: {
        loading: "Update from",
        done: "Update from",
        error: "Update from"
    }
};

}
