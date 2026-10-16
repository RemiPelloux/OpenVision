import { AO } from "./AgentConversationContext.js";
import { ukp } from "./VoiceCallTranscript.js";
import { E } from "./tslib.es6.js";
import { MSp } from "./voice-calls-source.js";
import { createContext as Ug1 } from "./react-runtime/react/esm-index-production.js";
var mkp, iRa, rRa;
export { iRa, mkp, rRa };
var __wakaru_Vg1_initialized = false;
export function Vg1() {
if (__wakaru_Vg1_initialized) return;
__wakaru_Vg1_initialized = true;
"use strict";
E(), AO(), ukp(), MSp(), mkp = new Intl.DateTimeFormat(void 0, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: !0
}), iRa = Ug1(void 0), rRa = new WeakMap;

}
