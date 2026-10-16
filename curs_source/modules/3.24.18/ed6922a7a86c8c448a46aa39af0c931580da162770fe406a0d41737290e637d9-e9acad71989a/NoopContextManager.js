import { x8i } from "./context.js";
import { x } from "./tslib.es6.js";
var __wakaru_Dgv_cache;
export function Dgv() {
if (__wakaru_Dgv_cache) return __wakaru_Dgv_cache;
var e = {};
__wakaru_Dgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.NoopContextManager = void 0;
var t = x8i(), n = class {
    active() {
        return t.ROOT_CONTEXT;
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
e.NoopContextManager = n;

return e;
}
