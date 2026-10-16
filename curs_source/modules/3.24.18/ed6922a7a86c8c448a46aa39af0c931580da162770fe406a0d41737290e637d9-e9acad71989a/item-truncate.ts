import { x } from "./tslib.es6.js";
var a4h;
export { a4h };
var __wakaru_c4h_initialized = false;
export function c4h() {
if (__wakaru_c4h_initialized) return;
__wakaru_c4h_initialized = true;
"use strict";
x(), a4h = class {
    static frame({ itemId: e, contentIndex: t, audioEndMs: n }) {
        return {
            type: "conversation.item.truncate",
            item_id: e,
            content_index: t,
            audio_end_ms: Math.max(0, Math.round(n))
        };
    }
};

}
