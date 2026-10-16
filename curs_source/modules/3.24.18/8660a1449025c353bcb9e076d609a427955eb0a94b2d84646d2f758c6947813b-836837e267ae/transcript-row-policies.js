import { Hmi } from "./AgentTranscriptActivityGroup.js";
import { uka } from "./AgentTranscriptTimeBoundary.js";
import { pka } from "./AgentTranscriptUnreadDivider.js";
import { f2e } from "./transcript-row-utils.js";
import { E } from "./tslib.es6.js";
import { Ygi } from "./turn-footer-reservation.js";
var $ka;
export { $ka };
var __wakaru_HUS_initialized = false;
export function HUS() {
if (__wakaru_HUS_initialized) return;
__wakaru_HUS_initialized = true;
"use strict";
E(), Hmi(), uka(), pka(), f2e(), Ygi(), $ka = new Set([
    "workGroup",
    "subscriptionEvents",
    "turnActions",
    "endOfTurnSummary",
    "timeBoundary",
    "unreadDivider"
]);

}
