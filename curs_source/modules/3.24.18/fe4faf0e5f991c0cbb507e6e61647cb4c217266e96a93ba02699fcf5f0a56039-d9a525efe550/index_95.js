import { gxi } from "./index_94.js";
import { i } from "./plugin-brand-icon.js";
var __wakaru_bxi_cache;
export function bxi() {
if (__wakaru_bxi_cache) return __wakaru_bxi_cache;
var r = {};
__wakaru_bxi_cache = r;
"use strict";
var e = r && r.__importDefault || function(l) {
    return l && l.__esModule ? l : {
        default: l
    };
};
Object.defineProperty(r, "__esModule", {
    value: !0
}), r.default = s;
var a = e(gxi());
function s(l, u) {
    var p = null;
    if (!l || typeof l != "string") return p;
    var m = (0, a.default)(l), b = typeof u == "function";
    return m.forEach(function(g) {
        if (g.type === "declaration") {
            var _ = g.property, v = g.value;
            b ? u(_, v, g) : v && (p = p || {}, p[_] = v);
        }
    }), p;
}
i(s, "StyleToObject");

return r;
}
