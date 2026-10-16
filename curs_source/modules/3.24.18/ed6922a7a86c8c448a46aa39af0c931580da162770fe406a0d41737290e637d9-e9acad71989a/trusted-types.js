import { x } from "./tslib.es6.js";
var Lyn, Nyn, aCi;
export { Lyn, Nyn, aCi };
var __wakaru_Oyn_initialized = false;
export function Oyn() {
if (__wakaru_Oyn_initialized) return;
__wakaru_Oyn_initialized = true;
"use strict";
x(), Lyn = (function() {
    if (typeof window > "u" || !window.trustedTypes) return null;
    if (window.__anysphereUiTrustedTypesPolicy) return window.__anysphereUiTrustedTypesPolicy;
    var e = window.trustedTypes.createPolicy("anysphereUiPolicy", {
        createHTML: function(t) {
            return t;
        }
    });
    return window.__anysphereUiTrustedTypesPolicy = e, e;
})(), Nyn = function(e, t) {
    Lyn ? e.innerHTML = Lyn.createHTML(t) : e.innerHTML = t;
}, aCi = function(e, t, n) {
    return Lyn ? e.parseFromString(Lyn.createHTML(t), n) : e.parseFromString(t, n);
};

}
