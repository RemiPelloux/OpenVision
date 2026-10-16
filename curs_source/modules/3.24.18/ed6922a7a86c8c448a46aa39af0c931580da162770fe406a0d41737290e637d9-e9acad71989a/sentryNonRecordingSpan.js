import { iqe } from "./propagationContext.js";
import { gI, jce } from "./scope.js";
import { eGr, zH } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
function qce() {
    return gI().substring(16);
}
var ige;
export { ige, qce };
var __wakaru_Shi_initialized = false;
export function Shi() {
if (__wakaru_Shi_initialized) return;
__wakaru_Shi_initialized = true;
"use strict";
x(), iqe(), zH(), ige = class {
    constructor(e = {}){
        this._traceId = e.traceId || jce(), this._spanId = e.spanId || qce();
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: eGr
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
