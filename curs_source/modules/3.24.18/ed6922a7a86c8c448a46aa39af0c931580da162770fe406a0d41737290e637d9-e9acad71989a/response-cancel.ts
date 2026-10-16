import { x } from "./tslib.es6.js";
var I6h;
export { I6h };
var __wakaru_A6h_initialized = false;
export function A6h() {
if (__wakaru_A6h_initialized) return;
__wakaru_A6h_initialized = true;
"use strict";
x(), I6h = class WCm {
    static EVENT_ID_PREFIX = "response_cancel.";
    static frame(t) {
        return {
            type: "response.cancel",
            event_id: `${WCm.EVENT_ID_PREFIX}${t}`
        };
    }
};

}
