import { bvt } from "./propagationContext.js";
import { mke, vM } from "./scope.js";
import { j1o, uQ } from "./spanUtils.js";
import { E } from "./tslib.es6.js";
function gke() {
    return vM().substring(16);
}
var Wxe;
export { Wxe, gke };
var __wakaru_vhr_initialized = false;
export function vhr() {
if (__wakaru_vhr_initialized) return;
__wakaru_vhr_initialized = true;
"use strict";
E(), bvt(), uQ(), Wxe = class {
    constructor(t = {}){
        this._traceId = t.traceId || mke(), this._spanId = t.spanId || gke();
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: j1o
        };
    }
    end(t) {}
    setAttribute(t, e) {
        return this;
    }
    setAttributes(t) {
        return this;
    }
    setStatus(t) {
        return this;
    }
    updateName(t) {
        return this;
    }
    isRecording() {
        return !1;
    }
    addEvent(t, e, n) {
        return this;
    }
    addLink(t) {
        return this;
    }
    addLinks(t) {
        return this;
    }
    recordException(t, e) {}
};

}
