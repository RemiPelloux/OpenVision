import { ju } from "./agent_pb.js";
import { N5m } from "./fsdOutputKinds.js";
import { Mk } from "./pullRequestIdentity.js";
import { E } from "./tslib.es6.js";
var Dqa, H5m, W5m;
export { Dqa, H5m, W5m };
var __wakaru_Nqa_initialized = false;
export function Nqa() {
if (__wakaru_Nqa_initialized) return;
__wakaru_Nqa_initialized = true;
"use strict";
E(), ju(), Mk(), N5m(), Dqa = " \xB7 ", H5m = /^This pull request is in Full Self Driving mode\./, W5m = [
    {
        source: "FSD_INTERRUPT_WEBHOOK",
        pattern: /^New event on this Full Self Driving PR:\s*(.+?)(?:\.\s*(?:FSD mode reminder:|\n|$)|$)/s
    },
    {
        source: "FSD_INTERRUPT_MODE_CHANGE",
        pattern: /^Full Self Driving mode on this PR changed:\s*(.+?)(?:\.\s*(?:FSD mode reminder:|\n|$)|$)/s
    },
    {
        source: "FSD_INTERRUPT_SCHEDULED",
        pattern: /^Scheduled reminder for this Full Self Driving PR:\s*(.+?)(?:\.\s*(?:FSD mode reminder:|\n|$)|$)/s
    }
];

}
