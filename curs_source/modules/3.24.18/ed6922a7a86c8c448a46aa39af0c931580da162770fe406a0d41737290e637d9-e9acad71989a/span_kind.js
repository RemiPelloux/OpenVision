import { x } from "./tslib.es6.js";
var __wakaru_Lgv_cache;
export function Lgv() {
if (__wakaru_Lgv_cache) return __wakaru_Lgv_cache;
var e = {};
__wakaru_Lgv_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.SpanKind = void 0;
var t;
(function(n) {
    n[n.INTERNAL = 0] = "INTERNAL", n[n.SERVER = 1] = "SERVER", n[n.CLIENT = 2] = "CLIENT", n[n.PRODUCER = 3] = "PRODUCER", n[n.CONSUMER = 4] = "CONSUMER";
})(t = e.SpanKind || (e.SpanKind = {}));

return e;
}
