import { c0e } from "./Collapsible.js";
import { fd } from "./icon.js";
import { Ldi } from "./markdownIconSizing.js";
import { E } from "./tslib.es6.js";
import { HFe } from "./use-disclosure-state.js";
var K$h;
export { K$h };
var __wakaru_CxS_initialized = false;
export function CxS() {
if (__wakaru_CxS_initialized) return;
__wakaru_CxS_initialized = true;
"use strict";
E(), Ldi(), HFe(), fd(), c0e(), K$h = {
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
