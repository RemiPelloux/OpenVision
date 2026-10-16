import { Viw, h1f } from "./composerBubblePrefetchPlanner.js";
import { f1f, lMl } from "./composerBubbleRetention.js";
import { gTt } from "./composerMessagesTypes.js";
import { Hn } from "./dom_2.js";
import { E } from "./tslib.es6.js";
var uMl, _1f;
export { _1f, uMl };
var __wakaru_rrw_initialized = false;
export function rrw() {
if (__wakaru_rrw_initialized) return;
__wakaru_rrw_initialized = true;
"use strict";
E(), Hn(), gTt(), Viw(), f1f(), uMl = {
    loadChunkSize: h1f,
    evictionDelayMs: lMl,
    retryDelayMs: 250,
    maxAutomaticAttempts: 3
}, _1f = 2;

}
