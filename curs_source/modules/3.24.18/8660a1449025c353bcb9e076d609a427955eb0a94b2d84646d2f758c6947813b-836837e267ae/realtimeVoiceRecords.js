import { hsf } from "./Ycg.js";
import { lfs } from "./client.ts";
import { osf } from "./realtimeVoiceCallSync.js";
import { usf } from "./realtimeVoiceTurnEstimate.js";
import { iEl } from "./realtimeVoiceUnheardMessages.js";
import { E } from "./tslib.es6.js";
import { rC } from "./utils_23.js";
import { Izr } from "./yBp.js";
var rEl, sEl;
export { rEl, sEl };
var __wakaru_oEl_initialized = false;
export function oEl() {
if (__wakaru_oEl_initialized) return;
__wakaru_oEl_initialized = true;
"use strict";
E(), rC(), lfs(), osf(), usf(), iEl(), rEl = new WeakMap, sEl = {
    isTypedByThem: hsf,
    lineId: (t)=>t.bubbleId,
    serverLineId: (t)=>t.serverBubbleId,
    stampedAtMs: Izr
};

}
