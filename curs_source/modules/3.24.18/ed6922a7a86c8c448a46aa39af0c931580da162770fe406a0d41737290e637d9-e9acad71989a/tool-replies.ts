import { x } from "./tslib.es6.js";
var err, c6h, wMo, l6h, u6h, CMo, Pnt;
export { CMo, Pnt, c6h, err, l6h, u6h, wMo };
var __wakaru_Czt_initialized = false;
export function Czt() {
if (__wakaru_Czt_initialized) return;
__wakaru_Czt_initialized = true;
"use strict";
x(), err = "missing request", c6h = "the tool failed on the caller's device", wMo = "That did not come back. Say you could not get to it, and offer to try again.", l6h = "under way", u6h = "done and about to be said", CMo = "queued behind the current work", Pnt = class {
    static unknownTool(e) {
        return `unknown tool ${e}`;
    }
    static underWay() {
        return {
            receipt: l6h
        };
    }
    static aboutToBeSaid() {
        return {
            receipt: u6h
        };
    }
    static queuedBehindCurrentWork(e) {
        const t = e?.trim() ?? "";
        return t === "" ? {
            receipt: CMo
        } : {
            receipt: CMo,
            behind: t
        };
    }
};

}
