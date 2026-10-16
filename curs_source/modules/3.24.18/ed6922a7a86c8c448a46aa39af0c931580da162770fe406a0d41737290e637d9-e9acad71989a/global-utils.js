import { wgv } from "./index_194.js";
import { Cgv } from "./semver.js";
import { x } from "./tslib.es6.js";
import { dNu } from "./version_2.js";
var __wakaru_D$t_cache;
export function D$t() {
if (__wakaru_D$t_cache) return __wakaru_D$t_cache;
var e = {};
__wakaru_D$t_cache = e;
"use strict";
x(), Object.defineProperty(e, "__esModule", {
    value: !0
}), e.unregisterGlobal = e.getGlobal = e.registerGlobal = void 0;
var t = wgv(), n = dNu(), i = Cgv(), r = n.VERSION.split(".")[0], s = Symbol.for(`opentelemetry.js.api.${r}`), o = t._globalThis;
function a(u, h, p, g = !1) {
    var f;
    const v = o[s] = (f = o[s]) !== null && f !== void 0 ? f : {
        version: n.VERSION
    };
    if (!g && v[u]) {
        const b = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${u}`);
        return p.error(b.stack || b.message), !1;
    }
    if (v.version !== n.VERSION) {
        const b = new Error(`@opentelemetry/api: Registration of version v${v.version} for ${u} does not match previously registered API v${n.VERSION}`);
        return p.error(b.stack || b.message), !1;
    }
    return v[u] = h, p.debug(`@opentelemetry/api: Registered a global for ${u} v${n.VERSION}.`), !0;
}
e.registerGlobal = a;
function c(u) {
    var h, p;
    const g = (h = o[s]) === null || h === void 0 ? void 0 : h.version;
    if (!(!g || !(0, i.isCompatible)(g))) return (p = o[s]) === null || p === void 0 ? void 0 : p[u];
}
e.getGlobal = c;
function l(u, h) {
    h.debug(`@opentelemetry/api: Unregistering a global for ${u} v${n.VERSION}.`);
    const p = o[s];
    p && delete p[u];
}
e.unregisterGlobal = l;

return e;
}
