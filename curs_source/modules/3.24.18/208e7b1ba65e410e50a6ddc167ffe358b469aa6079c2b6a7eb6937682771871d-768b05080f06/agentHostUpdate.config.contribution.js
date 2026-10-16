import { E, Jr, ua } from "./configurationRegistry.js";
import { Ne } from "./nls.js";
import { pr, ri } from "./platform_2.js";
import { h } from "./tslib.es6.js";
var Jm, r3;
export { Jm, r3 };
var __wakaru_s3_initialized = false;
export function s3() {
if (__wakaru_s3_initialized) return;
__wakaru_s3_initialized = true;
"use strict";
h(), Ne(), ua(), ri(), Jm = "cursor.agentHost.updateMode", r3 = [
    "default",
    "on",
    "none"
], pr.as(Jr.Configuration).registerConfiguration({
    id: "agentHost",
    title: E(1797, null),
    type: "object",
    properties: {
        [Jm]: {
            type: "string",
            enum: [
                "default",
                "on",
                "none"
            ],
            default: "default",
            scope: 1,
            tags: [
                "usesOnlineServices"
            ],
            description: E(1798, null),
            enumDescriptions: [
                E(1799, null),
                E(1800, null),
                E(1801, null)
            ],
            policy: {
                name: "AgentHostUpdateMode",
                minimumVersion: "1.99"
            }
        }
    }
});

}
