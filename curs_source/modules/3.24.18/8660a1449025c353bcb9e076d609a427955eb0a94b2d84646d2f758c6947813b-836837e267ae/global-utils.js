import { W31 } from "./index_200.js";
import { G31 } from "./semver.js";
import { E } from "./tslib.es6.js";
import { L6p } from "./version_2.js";
var __wakaru_FCn_cache;
export function FCn() {
if (__wakaru_FCn_cache) return __wakaru_FCn_cache;
var t = {};
__wakaru_FCn_cache = t;
"use strict";
E(), Object.defineProperty(t, "__esModule", {
    value: !0
}), t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
var e = W31(), n = L6p(), i = G31(), r = n.VERSION.split(".")[0], s = Symbol.for(`opentelemetry.js.api.${r}`), o = e._globalThis;
function a(u, d, h, p = !1) {
    var g;
    const f = o[s] = (g = o[s]) !== null && g !== void 0 ? g : {
        version: n.VERSION
    };
    if (!p && f[u]) {
        const _ = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${u}`);
        return h.error(_.stack || _.message), !1;
    }
    if (f.version !== n.VERSION) {
        const _ = new Error(`@opentelemetry/api: Registration of version v${f.version} for ${u} does not match previously registered API v${n.VERSION}`);
        return h.error(_.stack || _.message), !1;
    }
    return f[u] = d, h.debug(`@opentelemetry/api: Registered a global for ${u} v${n.VERSION}.`), !0;
}
t.registerGlobal = a;
function l(u) {
    var d, h;
    const p = (d = o[s]) === null || d === void 0 ? void 0 : d.version;
    if (!(!p || !(0, i.isCompatible)(p))) return (h = o[s]) === null || h === void 0 ? void 0 : h[u];
}
t.getGlobal = l;
function c(u, d) {
    d.debug(`@opentelemetry/api: Unregistering a global for ${u} v${n.VERSION}.`);
    const h = o[s];
    h && delete h[u];
}
t.unregisterGlobal = c;

return t;
}
