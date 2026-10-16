import { E } from "./tslib.es6.js";
var Ngs, ktf, BCl, wtf, Ctf, UCl, MIt;
export { BCl, Ctf, MIt, Ngs, UCl, ktf, wtf };
var __wakaru_VPn_initialized = false;
export function VPn() {
if (__wakaru_VPn_initialized) return;
__wakaru_VPn_initialized = true;
"use strict";
E(), Ngs = "missing request", ktf = "the tool failed on the caller's device", BCl = "That did not come back. Say you could not get to it, and offer to try again.", wtf = "under way", Ctf = "done and about to be said", UCl = "queued behind the current work", MIt = class {
    static unknownTool(t) {
        return `unknown tool ${t}`;
    }
    static underWay() {
        return {
            receipt: wtf
        };
    }
    static aboutToBeSaid() {
        return {
            receipt: Ctf
        };
    }
    static queuedBehindCurrentWork(t) {
        const e = t?.trim() ?? "";
        return e === "" ? {
            receipt: UCl
        } : {
            receipt: UCl,
            behind: e
        };
    }
};

}
