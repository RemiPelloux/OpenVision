import { ZPw } from "./InlineAgentTabs.css";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var I7f, x7f, A7f, R7f, Rws, X3n, hBl, $6, Z3n, INi, P7f, Q3n, pBl, mBl, M7f, Xct, Pws, xNi, Mws, gBl, D7f, fBl, vBl, N7f, _Bl, L7f, Dws;
export { $6, A7f, D7f, Dws, I7f, INi, L7f, M7f, Mws, N7f, P7f, Pws, Q3n, R7f, Rws, X3n, Xct, Z3n, _Bl, fBl, gBl, hBl, mBl, pBl, vBl, x7f, xNi };
var __wakaru_QPw_initialized = false;
export function QPw() {
if (__wakaru_QPw_initialized) return;
__wakaru_QPw_initialized = true;
"use strict";
E(), at(), at(), at(), at(), pi(), ZPw(), I7f = wt("<div class=inline-agent-tabs__project-title>"), x7f = wt('<div class="inline-agent-tabs inline-agent-tabs--header-host part auxiliarybar auxiliary-bar-show-agent-tabs"><div class="title inline-agent-tabs__title auxiliary-bar-title--agent-mode"><div class=inline-agent-tabs__slot>'), A7f = ".monaco-workbench .part.auxiliarybar > .title .composite-bar-container", R7f = "inlineAgentTabsHostChanged", Rws = "inline-agent-tabs-scrolled", X3n = "inline-agent-tabs-toggle-right", hBl = "inline-agent-tabs-gradient-enabled", P7f = typeof ResizeObserver < "u", Q3n = (t)=>{
    if (!t) return !1;
    const e = t.ownerDocument;
    return !!(t.isConnected && e && e.contains(t));
}, pBl = (t)=>{
    const e = t ?? $6?.composite;
    if (!e) return;
    const n = e.querySelector(".composite-bar") ?? e;
    Q3n(n) && n.dispatchEvent(new CustomEvent(R7f, {
        bubbles: !0
    }));
}, mBl = ()=>{
    if (!$6) return;
    $6.composite.querySelectorAll(".composite-bar-action-tab .remove-button").forEach((n)=>{
        n.style.opacity = "0", n.style.pointerEvents = "none";
    });
}, M7f = (t)=>{
    const e = t.getBoundingClientRect().width;
    if (Number.isFinite(e) && e > 0) return e;
    const n = t.parentElement;
    if (n) {
        const i = n.getBoundingClientRect().width;
        if (Number.isFinite(i) && i > 0) return i;
    }
    if ($6) {
        const i = $6.parent.getBoundingClientRect().width;
        if (Number.isFinite(i) && i > 0) return i;
    }
    return e;
}, Xct = (t)=>!!($6 && t && $6.host === t), Pws = (t)=>{
    if (!$6 || t && $6.host !== t) return;
    const e = $6.composite;
    e.style.removeProperty("width"), e.style.removeProperty("maxWidth"), e.style.removeProperty("minWidth");
}, xNi = (t)=>{
    Z3n && (t && INi && t !== INi || (Z3n.disconnect(), Z3n = void 0, INi = void 0));
}, Mws = (t)=>{
    if (!Xct(t)) return;
    const e = $6.composite, n = M7f(t);
    if (!Number.isFinite(n) || n <= 0) {
        e.style.removeProperty("width"), e.style.removeProperty("maxWidth"), e.style.removeProperty("minWidth"), pBl();
        return;
    }
    e.style.width = `${n}px`, e.style.maxWidth = "100%", e.style.minWidth = "0px", pBl();
}, gBl = (t)=>{
    if (Xct(t)) {
        if (Pws(t), !P7f) {
            Mws(t);
            return;
        }
        (!Z3n || INi !== t) && (xNi(), Z3n = new ResizeObserver(()=>{
            if (!Xct(t)) {
                xNi(t);
                return;
            }
            Mws(t);
        }), INi = t, Z3n.observe(t)), Mws(t);
    }
}, D7f = ()=>{
    const t = document.querySelectorAll(A7f);
    for(let e = t.length - 1; e >= 0; e--){
        const n = t[e];
        if (n.querySelector(".monaco-action-bar .action-item")) return n;
    }
    return t.length > 0 ? t[t.length - 1] : null;
}, fBl = (t)=>{
    if (!Q3n(t)) return !1;
    if ($6) if (!Q3n($6.composite)) Dws(void 0);
    else return $6.host === t || (t.appendChild($6.composite), $6.host = t), !0;
    const e = D7f();
    if (!e) return !1;
    const n = e.parentElement;
    if (!n) return !1;
    const i = document.createElement("div");
    return i.className = "inline-agent-tabs__placeholder", n.insertBefore(i, e), t.appendChild(e), $6 = {
        host: t,
        placeholder: i,
        parent: n,
        composite: e
    }, _Bl(!0), !0;
}, vBl = ()=>document.querySelector(".monaco-workbench .part.auxiliarybar > .title"), N7f = "inline-agent-tabs-detached", _Bl = (t)=>{
    const e = vBl();
    e && e.classList.toggle(N7f, t);
}, L7f = ()=>{
    if (!$6) return !1;
    const t = document.querySelector(".monaco-workbench .part.auxiliarybar > .title");
    if (!t) return !1;
    const e = t.querySelectorAll(".composite-bar-container");
    for (const n of e)if (n !== $6.composite) return !0;
    return !1;
}, Dws = (t, e)=>{
    if (!$6 || t && $6.host !== t) return;
    const { placeholder: n, parent: i, composite: r } = $6, s = e?.restore !== !1, o = L7f(), a = r.querySelector(".composite-bar"), l = a && a.children.length > 0;
    if (s && !o && l) {
        const c = n.parentElement, u = c ?? i ?? vBl();
        u ? c ? u.replaceChild(r, n) : (u.appendChild(r), n.remove()) : (i.appendChild(r), n.remove());
    } else n.remove(), Q3n(r) && r.remove(), _Bl(!1);
    $6 = void 0;
};

}
