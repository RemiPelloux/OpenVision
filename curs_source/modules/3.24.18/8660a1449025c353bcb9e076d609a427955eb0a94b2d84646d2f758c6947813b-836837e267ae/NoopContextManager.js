import { Zqr } from "./context.js";
import { E } from "./tslib.es6.js";
var __wakaru_Z31_cache;
export function Z31() {
if (__wakaru_Z31_cache) return __wakaru_Z31_cache;
var t = {};
__wakaru_Z31_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.NoopContextManager = void 0;
var e = Zqr(), n = class {
    active() {
        return e.ROOT_CONTEXT;
    }
    with(i, r, s, ...o) {
        return r.call(s, ...o);
    }
    bind(i, r) {
        return r;
    }
    enable() {
        return this;
    }
    disable() {
        return this;
    }
};
t.NoopContextManager = n;

return t;
}
