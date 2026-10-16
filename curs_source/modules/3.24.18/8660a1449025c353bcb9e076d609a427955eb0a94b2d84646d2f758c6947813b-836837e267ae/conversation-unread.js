import { ju } from "./agent_pb.js";
import { rp } from "./bcIdFromAuthority.js";
import { sd } from "./chat_pb.js";
import { v1 } from "./store.js";
import { E } from "./tslib.es6.js";
import { pi } from "./ze.js";
var dg_;
export { dg_ };
var __wakaru_hg__initialized = false;
export function hg_() {
if (__wakaru_hg__initialized) return;
__wakaru_hg__initialized = true;
"use strict";
E(), pi(), v1(), ju(), sd(), rp(), dg_ = {
    "send-message": (t)=>t?.hasSentMessage === !0,
    "assistant-message": (t)=>t?.hasText === !0 || (t?.textPreview?.length ?? 0) > 0
};

}
