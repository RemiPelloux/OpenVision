import { DT, Ou, Vc } from "./floating-ui.utils.dom.mjs";
import { $S, AS } from "./floating-ui.utils.mjs";
import { Rtr, Wme } from "./index.esm.js";
import { i } from "./plugin-brand-icon.js";
import { useLayoutEffect as Oui } from "./react-runtime/react/esm-index-production.js";
import * as XAe from "./react-runtime/react/esm-index-production.js";
function M$t() {
    const r = navigator.userAgentData;
    return r != null && r.platform ? r.platform : navigator.platform;
}
function R$t() {
    const r = navigator.userAgentData;
    return r && Array.isArray(r.brands) ? r.brands.map((e)=>{
        let { brand: a, version: s } = e;
        return a + "/" + s;
    }).join(" ") : navigator.userAgent;
}
function Ptr() {
    return /apple/i.test(navigator.vendor);
}
function MIe() {
    const r = /android/i;
    return r.test(M$t()) || r.test(R$t());
}
function jtr() {
    return R$t().includes("jsdom/");
}
function UT(r) {
    let e = r.activeElement;
    for(; ((a = e) == null || (a = a.shadowRoot) == null ? void 0 : a.activeElement) != null;){
        var a;
        e = e.shadowRoot.activeElement;
    }
    return e;
}
function Gy(r, e) {
    if (!r || !e) return !1;
    const a = e.getRootNode == null ? void 0 : e.getRootNode();
    if (r.contains(e)) return !0;
    if (a && DT(a)) {
        let s = e;
        for(; s;){
            if (r === s) return !0;
            s = s.parentNode || s.host;
        }
    }
    return !1;
}
function GT(r) {
    return "composedPath" in r ? r.composedPath()[0] : r.target;
}
function RIe(r, e) {
    if (e == null) return !1;
    if ("composedPath" in r) return r.composedPath().includes(e);
    const a = r;
    return a.target != null && e.contains(a.target);
}
function Ltr(r) {
    return r.matches("html,body");
}
function E0(r) {
    return r?.ownerDocument || document;
}
function P$t(r) {
    return Vc(r) && r.matches(Gtr);
}
function PIe(r) {
    return r ? r.getAttribute("role") === "combobox" && P$t(r) : !1;
}
function Hme(r) {
    return r ? r.hasAttribute(B$t) ? r : r.querySelector("[" + B$t + "]") || r : null;
}
function pP(r, e, a) {
    return a === void 0 && (a = !0), r.filter((l)=>{
        var u;
        return l.parentId === e && (!a || ((u = l.context) == null ? void 0 : u.open));
    }).flatMap((l)=>[
            l,
            ...pP(r, l.id, a)
        ]);
}
function Dtr(r, e) {
    let a, s = -1;
    function l(u, p) {
        p > s && (a = u, s = p), pP(r, u).forEach((b)=>{
            l(b.id, p + 1);
        });
    }
    return i(l, "findDeepest"), l(e, 0), r.find((u)=>u.id === a);
}
function j$t(r, e) {
    var a;
    let s = [], l = (a = r.find((u)=>u.id === e)) == null ? void 0 : a.parentId;
    for(; l;){
        const u = r.find((p)=>p.id === l);
        l = u?.parentId, u && (s = s.concat(u));
    }
    return s;
}
function x1(r) {
    r.preventDefault(), r.stopPropagation();
}
function Ftr(r) {
    return "nativeEvent" in r;
}
function L$t(r) {
    return r.mozInputSource === 0 && r.isTrusted ? !0 : MIe() && r.pointerType ? r.type === "click" && r.buttons === 1 : r.detail === 0 && !r.pointerType;
}
function D$t(r) {
    return jtr() ? !1 : !MIe() && r.width === 0 && r.height === 0 || MIe() && r.width === 1 && r.height === 1 && r.pressure === 0 && r.detail === 0 && r.pointerType === "mouse" || r.width < 1 && r.height < 1 && r.pressure === 0 && r.detail === 0 && r.pointerType === "touch";
}
function GY(r, e) {
    const a = [
        "mouse",
        "pen"
    ];
    return e || a.push("", void 0), a.includes(r);
}
function Lb(r) {
    const e = XAe.useRef(r);
    return xd(()=>{
        e.current = r;
    }), e;
}
function yh(r) {
    const e = XAe.useRef(()=>{
        throw new Error("Cannot call an event handler while rendering.");
    });
    return Ytr(()=>{
        e.current = r;
    }), XAe.useCallback(function() {
        for(var a = arguments.length, s = new Array(a), l = 0; l < a; l++)s[l] = arguments[l];
        return e.current == null ? void 0 : e.current(...s);
    }, []);
}
function Zme(r, e, a) {
    return Math.floor(r / e) !== a;
}
function WY(r, e) {
    return e < 0 || e >= r.current.length;
}
function jIe(r, e) {
    return A0(r, {
        disabledIndices: e
    });
}
function F$t(r, e) {
    return A0(r, {
        decrement: !0,
        startingIndex: r.current.length,
        disabledIndices: e
    });
}
function A0(r, e) {
    let { startingIndex: a = -1, decrement: s = !1, disabledIndices: l, amount: u = 1 } = e === void 0 ? {} : e, p = a;
    do p += s ? -u : u;
    while (p >= 0 && p <= r.current.length - 1 && Vme(r, p, l))
    return p;
}
function Otr(r, e) {
    let { event: a, orientation: s, loop: l, rtl: u, cols: p, disabledIndices: m, minIndex: b, maxIndex: g, prevIndex: _, stopEvent: v = !1 } = e, x = _;
    if (a.key === Wtr) {
        if (v && x1(a), _ === -1) x = g;
        else if (x = A0(r, {
            startingIndex: x,
            amount: p,
            decrement: !0,
            disabledIndices: m
        }), l && (_ - p < b || x < 0)) {
            const C = _ % p, E = g % p, A = g - (E - C);
            E === C ? x = g : x = E > C ? A : A - p;
        }
        WY(r, x) && (x = _);
    }
    if (a.key === Htr && (v && x1(a), _ === -1 ? x = b : (x = A0(r, {
        startingIndex: _,
        amount: p,
        disabledIndices: m
    }), l && _ + p > g && (x = A0(r, {
        startingIndex: _ % p - p,
        amount: p,
        disabledIndices: m
    }))), WY(r, x) && (x = _)), s === "both") {
        const C = AS(_ / p);
        a.key === (u ? FIe : OIe) && (v && x1(a), _ % p !== p - 1 ? (x = A0(r, {
            startingIndex: _,
            disabledIndices: m
        }), l && Zme(x, p, C) && (x = A0(r, {
            startingIndex: _ - _ % p - 1,
            disabledIndices: m
        }))) : l && (x = A0(r, {
            startingIndex: _ - _ % p - 1,
            disabledIndices: m
        })), Zme(x, p, C) && (x = _)), a.key === (u ? OIe : FIe) && (v && x1(a), _ % p !== 0 ? (x = A0(r, {
            startingIndex: _,
            decrement: !0,
            disabledIndices: m
        }), l && Zme(x, p, C) && (x = A0(r, {
            startingIndex: _ + (p - _ % p),
            decrement: !0,
            disabledIndices: m
        }))) : l && (x = A0(r, {
            startingIndex: _ + (p - _ % p),
            decrement: !0,
            disabledIndices: m
        })), Zme(x, p, C) && (x = _));
        const E = AS(g / p) === C;
        WY(r, x) && (l && E ? x = a.key === (u ? OIe : FIe) ? g : A0(r, {
            startingIndex: _ - _ % p - 1,
            disabledIndices: m
        }) : x = _);
    }
    return x;
}
function ztr(r, e, a) {
    const s = [];
    let l = 0;
    return r.forEach((u, p)=>{
        let { width: m, height: b } = u;
        if (m > e) throw new Error("[Floating UI]: Invalid grid - item width at index " + p + " is greater than grid columns");
        let g = !1;
        for(a && (l = 0); !g;){
            const _ = [];
            for(let v = 0; v < m; v++)for(let x = 0; x < b; x++)_.push(l + v + x * e);
            l % e + m <= e && _.every((v)=>s[v] == null) ? (_.forEach((v)=>{
                s[v] = p;
            }), g = !0) : l++;
        }
    }), [
        ...s
    ];
}
function Btr(r, e, a, s, l) {
    if (r === -1) return -1;
    const u = a.indexOf(r), p = e[r];
    switch(l){
        case "tl":
            return u;
        case "tr":
            return p ? u + p.width - 1 : u;
        case "bl":
            return p ? u + (p.height - 1) * s : u;
        case "br":
            return a.lastIndexOf(r);
    }
}
function qtr(r, e) {
    return e.flatMap((a, s)=>r.includes(a) ? [
            s
        ] : []);
}
function Vme(r, e, a) {
    if (typeof a == "function") return a(e);
    if (a) return a.includes(e);
    const s = r.current[e];
    return s == null || s.hasAttribute("disabled") || s.getAttribute("aria-disabled") === "true";
}
function O$t(r, e) {
    const a = Wme(r, ZY()), s = a.length;
    if (s === 0) return;
    const l = UT(E0(r)), u = a.indexOf(l), p = u === -1 ? e === 1 ? 0 : s - 1 : u + e;
    return a[p];
}
function LIe(r) {
    return O$t(E0(r).body, 1) || r;
}
function DIe(r) {
    return O$t(E0(r).body, -1) || r;
}
function HY(r, e) {
    const a = e || r.currentTarget, s = r.relatedTarget;
    return !s || !Gy(a, s);
}
function Utr(r) {
    Wme(r, ZY()).forEach((a)=>{
        a.dataset.tabindex = a.getAttribute("tabindex") || "", a.setAttribute("tabindex", "-1");
    });
}
function z$t(r) {
    r.querySelectorAll("[data-tabindex]").forEach((a)=>{
        const s = a.dataset.tabindex;
        delete a.dataset.tabindex, s ? a.setAttribute("tabindex", s) : a.removeAttribute("tabindex");
    });
}
var B$t, Gtr, FIe, OIe, Wtr, Htr, Ztr, Vtr, xd, Ktr, Xtr, Ytr, ZY;
export { A0, B$t, Btr, D$t, DIe, Dtr, E0, F$t, FIe, Ftr, GT, GY, Gtr, Gy, HY, Hme, Htr, Ktr, L$t, LIe, Lb, Ltr, M$t, MIe, O$t, OIe, Otr, P$t, PIe, Ptr, R$t, RIe, UT, Utr, Vme, Vtr, WY, Wtr, Xtr, Ytr, ZY, Zme, Ztr, j$t, jIe, jtr, pP, qtr, x1, xd, yh, z$t, ztr };
var __wakaru_Jtr_initialized = false;
export function Jtr() {
if (__wakaru_Jtr_initialized) return;
__wakaru_Jtr_initialized = true;
Ou(), $S(), Rtr(), i(M$t, "getPlatform"), i(R$t, "getUserAgent"), i(Ptr, "isSafari"), i(MIe, "isAndroid"), i(jtr, "isJSDOM"), B$t = "data-floating-ui-focusable", Gtr = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])", FIe = "ArrowLeft", OIe = "ArrowRight", Wtr = "ArrowUp", Htr = "ArrowDown", i(UT, "activeElement"), i(Gy, "contains"), i(GT, "getTarget"), i(RIe, "isEventTargetWithin"), i(Ltr, "isRootElement"), i(E0, "getDocument"), i(P$t, "isTypeableElement"), i(PIe, "isTypeableCombobox"), i(Hme, "getFloatingFocusElement"), i(pP, "getNodeChildren"), i(Dtr, "getDeepestNode"), i(j$t, "getNodeAncestors"), i(x1, "stopEvent"), i(Ftr, "isReactEvent"), i(L$t, "isVirtualClick"), i(D$t, "isVirtualPointerEvent"), i(GY, "isMouseLikePointerType"), Ztr = typeof document < "u", Vtr = i(function() {}, "noop"), xd = Ztr ? Oui : Vtr, Ktr = {
    ...XAe
}, i(Lb, "useLatestRef"), Xtr = Ktr.useInsertionEffect, Ytr = Xtr || ((r)=>r()), i(yh, "useEffectEvent"), i(Zme, "isDifferentGridRow"), i(WY, "isIndexOutOfListBounds"), i(jIe, "getMinListIndex"), i(F$t, "getMaxListIndex"), i(A0, "findNonDisabledListIndex"), i(Otr, "getGridNavigatedIndex"), i(ztr, "createGridCellMap"), i(Btr, "getGridCellIndexOfCorner"), i(qtr, "getGridCellIndices"), i(Vme, "isListIndexDisabled"), ZY = i(()=>({
        getShadowRoot: !0,
        displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
    }), "getTabbableOptions"), i(O$t, "getTabbableIn"), i(LIe, "getNextTabbable"), i(DIe, "getPreviousTabbable"), i(HY, "isOutsideEvent"), i(Utr, "disableFocusInside"), i(z$t, "enableFocusInside");

}
