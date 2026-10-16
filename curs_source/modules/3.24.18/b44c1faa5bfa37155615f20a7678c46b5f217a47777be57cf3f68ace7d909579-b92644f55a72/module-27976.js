"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.unregisterGlobal = exports.getGlobal = exports.registerGlobal = void 0;
const n = require("./module-57705.js"), s = require("./module-14913.js"), o = require("./module-99899.js"), i = s.VERSION.split(".")[0], a = Symbol.for(`opentelemetry.js.api.${i}`), c = n._globalThis;
exports.registerGlobal = function(e, t, r, n = !1) {
    var o;
    const i = c[a] = null !== (o = c[a]) && void 0 !== o ? o : {
        version: s.VERSION
    };
    if (!n && i[e]) {
        const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
        return r.error(t.stack || t.message), !1;
    }
    if (i.version !== s.VERSION) {
        const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${s.VERSION}`);
        return r.error(t.stack || t.message), !1;
    }
    return i[e] = t, r.debug(`@opentelemetry/api: Registered a global for ${e} v${s.VERSION}.`), !0;
}, exports.getGlobal = function(e) {
    var t, r;
    const n = null === (t = c[a]) || void 0 === t ? void 0 : t.version;
    if (n && (0, o.isCompatible)(n)) return null === (r = c[a]) || void 0 === r ? void 0 : r[e];
}, exports.unregisterGlobal = function(e, t) {
    t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${s.VERSION}.`);
    const r = c[a];
    r && delete r[e];
};
