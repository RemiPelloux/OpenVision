import { wde, y0o, yj } from "./Iwo.js";
import { FHu, Jdr } from "./browser.js";
import { fh } from "./index_10.js";
import { Jun } from "./instrument.js";
import { wun } from "./scope.js";
import { KE, SFt, bx, kFt, kvt } from "./semanticAttributes.js";
import { JN, Kb, Yb } from "./spanUtils.js";
import { bOe, yvt } from "./trace.js";
import { E } from "./tslib.es6.js";
import { Rse } from "./types.js";
import { zFt } from "./utils_9.js";
import { o_ } from "./worldwide.js";
function Ase(t, e = {}) {
    if (!t) return "<unknown>";
    try {
        let n = t;
        const i = 5, r = [];
        let s = 0, o = 0;
        const a = " > ", l = a.length;
        let c;
        const u = Array.isArray(e) ? e : e.keyAttrs, d = !Array.isArray(e) && e.maxStringLength || FHu;
        for(; n && s++ < i && (c = Buy(n, u), !(c === "html" || s > 1 && o + r.length * l + c.length >= d));)r.push(c), o += c.length, n = n.parentNode;
        return r.reverse().join(a);
    } catch  {
        return "<unknown>";
    }
}
function Buy(t, e) {
    const n = t, i = [];
    if (!n?.tagName) return "";
    if (Jdr.HTMLElement && n instanceof HTMLElement && n.dataset) {
        if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
        if (n.dataset.sentryElement) return n.dataset.sentryElement;
    }
    i.push(n.tagName.toLowerCase());
    const r = e?.length ? e.filter((o)=>n.getAttribute(o)).map((o)=>[
            o,
            n.getAttribute(o)
        ]) : null;
    if (r?.length) r.forEach((o)=>{
        i.push(`[${o[0]}="${o[1]}"]`);
    });
    else {
        n.id && i.push(`#${n.id}`);
        const o = n.className;
        if (o && wde(o)) {
            const a = o.split(/\s+/);
            for (const l of a)i.push(`.${l}`);
        }
    }
    const s = [
        "aria-label",
        "type",
        "name",
        "title",
        "alt"
    ];
    for (const o of s){
        const a = n.getAttribute(o);
        a && i.push(`[${o}="${a}"]`);
    }
    return i.join("");
}
function Kuy() {
    const { performance: t } = o_;
    if (!t?.now) return [
        void 0,
        "none"
    ];
    const e = 3600 * 1e3, n = t.now(), i = Date.now(), r = t.timeOrigin ? Math.abs(t.timeOrigin + n - i) : e, s = r < e, o = t.timing?.navigationStart, l = typeof o == "number" ? Math.abs(o + n - i) : e, c = l < e;
    return s || c ? r <= l ? [
        t.timeOrigin,
        "timeOrigin"
    ] : [
        o,
        "navigationStart"
    ] : [
        i,
        "dateNow"
    ];
}
function zq() {
    return S1o || (S1o = Kuy()), S1o[0];
}
var S1o;
function eL() {
    const t = bOe(), e = yvt(t);
    return e.getActiveSpan ? e.getActiveSpan() : wun(Kb());
}
var Tpr, FXn, VFt, LKu, Epr, OKu;
export { Ase, Buy, Epr, FXn, Kuy, LKu, OKu, S1o, Tpr, VFt, eL, zq };
var __wakaru_Uvy_initialized = false;
export function Uvy() {
if (__wakaru_Uvy_initialized) return;
__wakaru_Uvy_initialized = true;
"use strict";
E(), fh(), Rse(), Jun(), zFt(), Tpr = [], FXn = new Map, VFt = new Map, LKu = 60, Epr = {
    click: "click",
    pointerdown: "click",
    pointerup: "click",
    mousedown: "click",
    mouseup: "click",
    touchstart: "click",
    touchend: "click",
    mouseover: "hover",
    mouseout: "hover",
    mouseenter: "hover",
    mouseleave: "hover",
    pointerover: "hover",
    pointerout: "hover",
    pointerenter: "hover",
    pointerleave: "hover",
    dragstart: "drag",
    dragend: "drag",
    drag: "drag",
    dragenter: "drag",
    dragleave: "drag",
    dragover: "drag",
    drop: "drag",
    keydown: "press",
    keyup: "press",
    keypress: "press",
    input: "press"
}, OKu = ({ metric: t })=>{
    if (t.value == null) return;
    const e = yj(t.value);
    if (e > LKu) return;
    const n = t.entries.find((g)=>g.duration === t.value && Epr[g.name]);
    if (!n) return;
    const { interactionId: i } = n, r = Epr[n.name], s = yj(zq() + n.startTime), o = eL(), a = o ? JN(o) : void 0, l = i != null ? FXn.get(i) : void 0, c = l?.span || a, u = c ? Yb(c).description : Kb().getScopeData().transactionName, d = l?.elementName || Ase(n.target), h = {
        [KE]: "auto.http.browser.inp",
        [bx]: `ui.interaction.${r}`,
        [kvt]: n.duration
    }, p = y0o({
        name: d,
        transaction: u,
        attributes: h,
        startTime: s
    });
    p && (p.addEvent("inp", {
        [SFt]: "millisecond",
        [kFt]: t.value
    }), p.end(s + e));
};

}
