import { E } from "./tslib.es6.js";
var __wakaru_eN1_cache;
export function eN1() {
if (__wakaru_eN1_cache) return __wakaru_eN1_cache;
var t = {};
__wakaru_eN1_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.SpanKind = void 0;
var e;
(function(n) {
    n[n.INTERNAL = 0] = "INTERNAL", n[n.SERVER = 1] = "SERVER", n[n.CLIENT = 2] = "CLIENT", n[n.PRODUCER = 3] = "PRODUCER", n[n.CONSUMER = 4] = "CONSUMER";
})(e = t.SpanKind || (t.SpanKind = {}));

return t;
}
