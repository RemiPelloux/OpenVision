import { zd } from "./agent_pb.js";
import { uIv } from "./fsdOutputKinds.js";
import { eG } from "./pullRequestIdentity.js";
import { x } from "./tslib.es6.js";
var Ydo, Jjd, eqd;
export { Jjd, Ydo, eqd };
var __wakaru_tqd_initialized = false;
export function tqd() {
if (__wakaru_tqd_initialized) return;
__wakaru_tqd_initialized = true;
"use strict";
x(), zd(), eG(), uIv(), Ydo = " \xB7 ", Jjd = /^This pull request is in Full Self Driving mode\./, eqd = [
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
