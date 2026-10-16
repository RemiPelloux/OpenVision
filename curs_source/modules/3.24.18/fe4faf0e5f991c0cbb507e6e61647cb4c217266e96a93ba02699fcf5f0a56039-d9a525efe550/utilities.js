import { i } from "./plugin-brand-icon.js";
var __wakaru_wxi_cache;
export function wxi() {
if (__wakaru_wxi_cache) return __wakaru_wxi_cache;
var r = {};
__wakaru_wxi_cache = r;
"use strict";
Object.defineProperty(r, "__esModule", {
    value: !0
}), r.camelCase = void 0;
var e = /^--[a-zA-Z0-9_-]+$/, a = /-([a-z])/g, s = /^[^-]+$/, l = /^-(webkit|moz|ms|o|khtml)-/, u = /^-(ms)-/, p = i(function(_) {
    return !_ || s.test(_) || e.test(_);
}, "skipCamelCase"), m = i(function(_, v) {
    return v.toUpperCase();
}, "capitalize"), b = i(function(_, v) {
    return "".concat(v, "-");
}, "trimHyphen"), g = i(function(_, v) {
    return v === void 0 && (v = {}), p(_) ? _ : (_ = _.toLowerCase(), v.reactCompat ? _ = _.replace(u, b) : _ = _.replace(l, b), _.replace(a, m));
}, "camelCase");
r.camelCase = g;

return r;
}
