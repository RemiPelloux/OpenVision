"use strict";
require.d(exports, {
    EL: ()=>o,
    QD: ()=>c,
    Qt: ()=>u,
    nT: ()=>i,
    q2: ()=>a,
    zd: ()=>s
});
var n = require("./module-9052.js");
function o(e) {
    const t = (0, n.KR)(e.identifier);
    if ("error" === e.level) {
        const r = e.error instanceof Error ? e.error : void 0 !== e.error ? new Error(String(e.error)) : void 0;
        return void t.error(e.message, r, e.metadata);
    }
    "warn" !== e.level ? "debug" !== e.level ? t.info(e.message, e.metadata) : t.debug?.(e.message, e.metadata) : t.warn(e.message, e.metadata);
}
function s(e) {
    return Object.fromEntries(Object.entries(e).filter(([, e])=>void 0 !== e));
}
function i(e, t) {
    const r = function(e) {
        try {
            const t = new URL(e);
            return {
                host: t.host,
                origin: t.origin,
                pathname: t.pathname
            };
        } catch  {
            return {
                host: null,
                origin: null,
                pathname: null
            };
        }
    }(e), n = !1 !== t?.includePath;
    return {
        host: r.host,
        origin: r.origin,
        path: n ? r.pathname : null
    };
}
function a(e, t) {
    return i(e, t);
}
function c(e, t) {
    return i(e, t);
}
function u(e) {
    return {
        mcpAuthMeta: e
    };
}
