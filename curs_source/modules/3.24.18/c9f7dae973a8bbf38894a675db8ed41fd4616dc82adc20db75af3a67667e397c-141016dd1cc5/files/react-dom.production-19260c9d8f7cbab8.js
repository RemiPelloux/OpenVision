import { require_react } from "../../../../react@19.2.6/node_modules/react/index.js";
var __wakaru_require_react_dom_production_cache;
export function require_react_dom_production() {
if (__wakaru_require_react_dom_production_cache) return __wakaru_require_react_dom_production_cache;
var e = {};
__wakaru_require_react_dom_production_cache = e;
"use strict";
var n = require_react();
function t(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
        n += "?args[]=" + encodeURIComponent(arguments[1]);
        for(var t = 2; t < arguments.length; t++)n += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
function a() {}
var s = {
    d: {
        f: a,
        r: function() {
            throw Error(t(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a
    },
    p: 0,
    findDOMNode: null
}, i = Symbol.for("react.portal");
var r = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function o(e, n) {
    return "font" === e ? "" : "string" == typeof n ? "use-credentials" === n ? n : "" : void 0;
}
e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, e.createPortal = function(e, n) {
    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!n || 1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType) throw Error(t(299));
    return function(e, n, t) {
        var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
            $$typeof: i,
            key: null == a ? null : "" + a,
            children: e,
            containerInfo: n,
            implementation: t
        };
    }(e, n, null, a);
}, e.flushSync = function(e) {
    var n = r.T, t = s.p;
    try {
        if (r.T = null, s.p = 2, e) return e();
    } finally{
        r.T = n, s.p = t, s.d.f();
    }
}, e.preconnect = function(e, n) {
    "string" == typeof e && (n ? n = "string" == typeof (n = n.crossOrigin) ? "use-credentials" === n ? n : "" : void 0 : n = null, s.d.C(e, n));
}, e.prefetchDNS = function(e) {
    "string" == typeof e && s.d.D(e);
}, e.preinit = function(e, n) {
    if ("string" == typeof e && n && "string" == typeof n.as) {
        var t = n.as, a = o(t, n.crossOrigin), i = "string" == typeof n.integrity ? n.integrity : void 0, r = "string" == typeof n.fetchPriority ? n.fetchPriority : void 0;
        "style" === t ? s.d.S(e, "string" == typeof n.precedence ? n.precedence : void 0, {
            crossOrigin: a,
            integrity: i,
            fetchPriority: r
        }) : "script" === t && s.d.X(e, {
            crossOrigin: a,
            integrity: i,
            fetchPriority: r,
            nonce: "string" == typeof n.nonce ? n.nonce : void 0
        });
    }
}, e.preinitModule = function(e, n) {
    if ("string" == typeof e) if ("object" == typeof n && null !== n) {
        if (null == n.as || "script" === n.as) {
            var t = o(n.as, n.crossOrigin);
            s.d.M(e, {
                crossOrigin: t,
                integrity: "string" == typeof n.integrity ? n.integrity : void 0,
                nonce: "string" == typeof n.nonce ? n.nonce : void 0
            });
        }
    } else null == n && s.d.M(e);
}, e.preload = function(e, n) {
    if ("string" == typeof e && "object" == typeof n && null !== n && "string" == typeof n.as) {
        var t = n.as, a = o(t, n.crossOrigin);
        s.d.L(e, t, {
            crossOrigin: a,
            integrity: "string" == typeof n.integrity ? n.integrity : void 0,
            nonce: "string" == typeof n.nonce ? n.nonce : void 0,
            type: "string" == typeof n.type ? n.type : void 0,
            fetchPriority: "string" == typeof n.fetchPriority ? n.fetchPriority : void 0,
            referrerPolicy: "string" == typeof n.referrerPolicy ? n.referrerPolicy : void 0,
            imageSrcSet: "string" == typeof n.imageSrcSet ? n.imageSrcSet : void 0,
            imageSizes: "string" == typeof n.imageSizes ? n.imageSizes : void 0,
            media: "string" == typeof n.media ? n.media : void 0
        });
    }
}, e.preloadModule = function(e, n) {
    if ("string" == typeof e) if (n) {
        var t = o(n.as, n.crossOrigin);
        s.d.m(e, {
            as: "string" == typeof n.as && "script" !== n.as ? n.as : void 0,
            crossOrigin: t,
            integrity: "string" == typeof n.integrity ? n.integrity : void 0
        });
    } else s.d.m(e);
}, e.requestFormReset = function(e) {
    s.d.r(e);
}, e.unstable_batchedUpdates = function(e, n) {
    return e(n);
}, e.useFormState = function(e, n, t) {
    return r.H.useFormState(e, n, t);
}, e.useFormStatus = function() {
    return r.H.useHostTransitionStatus();
}, e.version = "19.2.6";

return e;
}
