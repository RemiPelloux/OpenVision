import { E } from "./tslib.es6.js";
var Xai, E_n, aAr;
export { E_n, Xai, aAr };
var __wakaru_I_n_initialized = false;
export function I_n() {
if (__wakaru_I_n_initialized) return;
__wakaru_I_n_initialized = true;
"use strict";
E(), Xai = (function() {
    if (typeof window > "u" || !window.trustedTypes) return null;
    if (window.__anysphereUiTrustedTypesPolicy) return window.__anysphereUiTrustedTypesPolicy;
    var t = window.trustedTypes.createPolicy("anysphereUiPolicy", {
        createHTML: function(e) {
            return e;
        }
    });
    return window.__anysphereUiTrustedTypesPolicy = t, t;
})(), E_n = function(t, e) {
    Xai ? t.innerHTML = Xai.createHTML(e) : t.innerHTML = e;
}, aAr = function(t, e, n) {
    return Xai ? t.parseFromString(Xai.createHTML(e), n) : t.parseFromString(e, n);
};

}
