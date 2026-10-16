import { zKs } from "./invalid-span-constants.js";
import { x } from "./tslib.es6.js";
var __wakaru_KKs_cache;
export function KKs() {
if (__wakaru_KKs_cache) return __wakaru_KKs_cache;
var e = {};
__wakaru_KKs_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.NonRecordingSpan = void 0;
var t = zKs(), n = class {
    constructor(i = t.INVALID_SPAN_CONTEXT){
        this._spanContext = i;
    }
    spanContext() {
        return this._spanContext;
    }
    setAttribute(i, r) {
        return this;
    }
    setAttributes(i) {
        return this;
    }
    addEvent(i, r) {
        return this;
    }
    addLink(i) {
        return this;
    }
    addLinks(i) {
        return this;
    }
    setStatus(i) {
        return this;
    }
    updateName(i) {
        return this;
    }
    end(i) {}
    isRecording() {
        return !1;
    }
    recordException(i, r) {}
};
e.NonRecordingSpan = n;

return e;
}
