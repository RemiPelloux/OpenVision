import { b5a } from "./invalid-span-constants.js";
import { E } from "./tslib.es6.js";
var __wakaru_y5a_cache;
export function y5a() {
if (__wakaru_y5a_cache) return __wakaru_y5a_cache;
var t = {};
__wakaru_y5a_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.NonRecordingSpan = void 0;
var e = b5a(), n = class {
    constructor(i = e.INVALID_SPAN_CONTEXT){
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
t.NonRecordingSpan = n;

return t;
}
