import { a7i } from "./A3u.js";
import { Tr } from "./chat_pb.js";
import { Err } from "./client.ts";
import { W8h } from "./realtimeVoiceCallSync.js";
import { q8h } from "./realtimeVoiceTurnEstimate.js";
import { VPo } from "./realtimeVoiceUnheardMessages.js";
import { x } from "./tslib.es6.js";
import { _C } from "./utils_23.js";
import { Wwt, qPe } from "./xmo.js";
function K8h(e) {
    return e.type === Tr.HUMAN && e.grouping?.isSimulatedMsg !== !0 && !Wwt(qPe(e));
}
var jPo, qPo;
export { K8h, jPo, qPo };
var __wakaru_zPo_initialized = false;
export function zPo() {
if (__wakaru_zPo_initialized) return;
__wakaru_zPo_initialized = true;
"use strict";
x(), _C(), Err(), W8h(), q8h(), VPo(), jPo = new WeakMap, qPo = {
    isTypedByThem: K8h,
    lineId: (e)=>e.bubbleId,
    serverLineId: (e)=>e.serverBubbleId,
    stampedAtMs: a7i
};

}
