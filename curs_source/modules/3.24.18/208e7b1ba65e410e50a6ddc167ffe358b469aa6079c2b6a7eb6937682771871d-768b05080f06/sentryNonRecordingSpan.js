import { oo } from "./propagationContext.js";
import { md, mk } from "./scope.js";
import { WC, sr } from "./spanUtils.js";
import { h } from "./tslib.es6.js";
function pk() {
    return md().substring(16);
}
var wk;
export { pk, wk };
var __wakaru_Ek_initialized = false;
export function Ek() {
if (__wakaru_Ek_initialized) return;
__wakaru_Ek_initialized = true;
"use strict";
h(), oo(), sr(), wk = class {
    constructor(e = {}){
        this._traceId = e.traceId || mk(), this._spanId = e.spanId || pk();
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: WC
        };
    }
    end(e) {}
    setAttribute(e, t) {
        return this;
    }
    setAttributes(e) {
        return this;
    }
    setStatus(e) {
        return this;
    }
    updateName(e) {
        return this;
    }
    isRecording() {
        return !1;
    }
    addEvent(e, t, n) {
        return this;
    }
    addLink(e) {
        return this;
    }
    addLinks(e) {
        return this;
    }
    recordException(e, t) {}
};

}
