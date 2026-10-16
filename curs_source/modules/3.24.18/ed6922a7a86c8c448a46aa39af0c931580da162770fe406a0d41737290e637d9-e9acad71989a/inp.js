import { JQ, Ljr, QB } from "./HVr.js";
import { fkc, ihi } from "./browser.js";
import { $u } from "./index_10.js";
import { KLt } from "./instrument.js";
import { _Lt } from "./scope.js";
import { Edt, Tdt, a1, jC, oqe } from "./semanticAttributes.js";
import { iv, nv, pD } from "./spanUtils.js";
import { jke, rqe } from "./trace.js";
import { x } from "./tslib.es6.js";
import { fK } from "./types.js";
import { Xdt } from "./utils_9.js";
import { Og } from "./worldwide.js";
function gK(e, t = {}) {
    if (!e) return "<unknown>";
    try {
        let n = e;
        const i = 5, r = [];
        let s = 0, o = 0;
        const a = " > ", c = a.length;
        let l;
        const u = Array.isArray(t) ? t : t.keyAttrs, h = !Array.isArray(t) && t.maxStringLength || fkc;
        for(; n && s++ < i && (l = Qtg(n, u), !(l === "html" || s > 1 && o + r.length * c + l.length >= h));)r.push(l), o += l.length, n = n.parentNode;
        return r.reverse().join(a);
    } catch  {
        return "<unknown>";
    }
}
function Qtg(e, t) {
    const n = e, i = [];
    if (!n?.tagName) return "";
    if (ihi.HTMLElement && n instanceof HTMLElement && n.dataset) {
        if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
        if (n.dataset.sentryElement) return n.dataset.sentryElement;
    }
    i.push(n.tagName.toLowerCase());
    const r = t?.length ? t.filter((o)=>n.getAttribute(o)).map((o)=>[
            o,
            n.getAttribute(o)
        ]) : null;
    if (r?.length) r.forEach((o)=>{
        i.push(`[${o[0]}="${o[1]}"]`);
    });
    else {
        n.id && i.push(`#${n.id}`);
        const o = n.className;
        if (o && JQ(o)) {
            const a = o.split(/\s+/);
            for (const c of a)i.push(`.${c}`);
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
function cng() {
    const { performance: e } = Og;
    if (!e?.now) return [
        void 0,
        "none"
    ];
    const t = 3600 * 1e3, n = e.now(), i = Date.now(), r = e.timeOrigin ? Math.abs(e.timeOrigin + n - i) : t, s = r < t, o = e.timing?.navigationStart, c = typeof o == "number" ? Math.abs(o + n - i) : t, l = c < t;
    return s || l ? r <= c ? [
        e.timeOrigin,
        "timeOrigin"
    ] : [
        o,
        "navigationStart"
    ] : [
        i,
        "dateNow"
    ];
}
function Y4() {
    return NWr || (NWr = cng()), NWr[0];
}
var NWr;
function mD() {
    const e = jke(), t = rqe(e);
    return t.getActiveSpan ? t.getActiveSpan() : _Lt(nv());
}
var Api, vpn, Zdt, mEc, Rpi, gEc;
export { Api, NWr, Qtg, Rpi, Y4, Zdt, cng, gEc, gK, mD, mEc, vpn };
var __wakaru_Jcg_initialized = false;
export function Jcg() {
if (__wakaru_Jcg_initialized) return;
__wakaru_Jcg_initialized = true;
"use strict";
x(), $u(), fK(), KLt(), Xdt(), Api = [], vpn = new Map, Zdt = new Map, mEc = 60, Rpi = {
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
}, gEc = ({ metric: e })=>{
    if (e.value == null) return;
    const t = QB(e.value);
    if (t > mEc) return;
    const n = e.entries.find((f)=>f.duration === e.value && Rpi[f.name]);
    if (!n) return;
    const { interactionId: i } = n, r = Rpi[n.name], s = QB(Y4() + n.startTime), o = mD(), a = o ? pD(o) : void 0, c = i != null ? vpn.get(i) : void 0, l = c?.span || a, u = l ? iv(l).description : nv().getScopeData().transactionName, h = c?.elementName || gK(n.target), p = {
        [jC]: "auto.http.browser.inp",
        [a1]: `ui.interaction.${r}`,
        [oqe]: n.duration
    }, g = Ljr({
        name: h,
        transaction: u,
        attributes: p,
        startTime: s
    });
    g && (g.addEvent("inp", {
        [Tdt]: "millisecond",
        [Edt]: e.value
    }), g.end(s + t));
};

}
