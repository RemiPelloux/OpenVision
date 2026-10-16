import { E } from "./tslib.es6.js";
var Snf;
export { Snf };
var __wakaru_knf_initialized = false;
export function knf() {
if (__wakaru_knf_initialized) return;
__wakaru_knf_initialized = true;
"use strict";
E(), Snf = class {
    static frame({ itemId: t, contentIndex: e, audioEndMs: n }) {
        return {
            type: "conversation.item.truncate",
            item_id: t,
            content_index: e,
            audio_end_ms: Math.max(0, Math.round(n))
        };
    }
};

}
