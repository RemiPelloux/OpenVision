import { i } from "./plugin-brand-icon.js";
import { useLayoutEffect as Cui } from "./react-runtime/react/esm-index-production.js";
import { useState as Sui } from "./react-runtime/react/esm-index-production.js";
import { c as kui } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as vui } from "./react-runtime/react/esm-index-production.js";
import { useContext as xui } from "./react-runtime/react/esm-index-production.js";
function Ner() {
    const r = n$t;
    return n$t += Ler, {
        zIndex: r,
        release: i(()=>{}, "release")
    };
}
function Mer() {
    return xui(Der);
}
function r3(r, e) {
    const a = kui(10), s = Mer(), [l, u] = Sui(null);
    let p, m;
    a[0] !== e || a[1] !== s ? (p = i(()=>{
        if (!e) {
            u(null);
            return;
        }
        const v = s?.claimZIndex() ?? Ner();
        return u(v.zIndex), ()=>{
            v.release();
        };
    }, "t0"), m = [
        e,
        s
    ], a[0] = e, a[1] = s, a[2] = p, a[3] = m) : (p = a[2], m = a[3]), Cui(p, m);
    let b;
    e: {
        if (l === null) {
            b = Per;
            break e;
        }
        const v = Rer[r], x = String(l);
        let C;
        a[4] !== v || a[5] !== x ? (C = {
            [v]: x
        }, a[4] = v, a[5] = x, a[6] = C) : C = a[6], b = C;
    }
    const g = b;
    let _;
    return a[7] !== l || a[8] !== g ? (_ = {
        zIndex: l,
        portalLayerStyles: g
    }, a[7] = l, a[8] = g, a[9] = _) : _ = a[9], _;
}
var Rer, Per, jer, Ler, n$t, Der;
export { Der, Ler, Mer, Ner, Per, Rer, jer, n$t, r3 };
var __wakaru_hki_initialized = false;
export function hki() {
if (__wakaru_hki_initialized) return;
__wakaru_hki_initialized = true;
"use strict";
Rer = {
    dropdown: "--ui-portal-layer-z-index-dropdown",
    tooltip: "--ui-portal-layer-z-index-tooltip",
    modal: "--ui-portal-layer-z-index-modal",
    popover: "--ui-portal-layer-z-index-popover"
}, Per = {}, jer = 3e3, Ler = 10, n$t = jer, i(Ner, "claimFallbackPortalZIndex"), Der = vui(null), i(Mer, "usePortalLayeringContext"), i(r3, "usePortalLayerClaim");

}
