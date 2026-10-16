import { E } from "./tslib.es6.js";
var Htf;
export { Htf };
var __wakaru_Wtf_initialized = false;
export function Wtf() {
if (__wakaru_Wtf_initialized) return;
__wakaru_Wtf_initialized = true;
"use strict";
E(), Htf = class sMb {
    static EVENT_ID_PREFIX = "response_cancel.";
    static frame(e) {
        return {
            type: "response.cancel",
            event_id: `${sMb.EVENT_ID_PREFIX}${e}`
        };
    }
};

}
