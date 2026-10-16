import { JQn, QQn, XQn, YQn, eer, mki, ner, ter } from "./floating-ui.core.mjs";
import { $Jn, Cme, FT, J$e, Lo, Ou, Q$e, Qv, TJn, Uy, Vc, cP, id, pC, vme, xS, xme, zg } from "./floating-ui.utils.dom.mjs";
import { $S, AS, ES, OY, TS, dB, pB } from "./floating-ui.utils.mjs";
import { i } from "./plugin-brand-icon.js";
function WTt(r) {
    const e = Uy(r);
    let a = parseFloat(e.width) || 0, s = parseFloat(e.height) || 0;
    const l = Vc(r), u = l ? r.offsetWidth : a, p = l ? r.offsetHeight : s, m = pB(a) !== u || pB(s) !== p;
    return m && (a = u, s = p), {
        width: a,
        height: s,
        $: m
    };
}
function lIe(r) {
    return Lo(r) ? r : r.contextElement;
}
function mB(r) {
    const e = lIe(r);
    if (!Vc(e)) return TS(1);
    const a = e.getBoundingClientRect(), { width: s, height: l, $: u } = WTt(e);
    let p = (u ? pB(a.width) : a.width) / s, m = (u ? pB(a.height) : a.height) / l;
    return (!p || !Number.isFinite(p)) && (p = 1), (!m || !Number.isFinite(m)) && (m = 1), {
        x: p,
        y: m
    };
}
function HTt(r) {
    const e = id(r);
    return !xme() || !e.visualViewport ? her : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    };
}
function rer(r, e, a) {
    return e === void 0 && (e = !1), !!a && e && a === id(r);
}
function dP(r, e, a, s) {
    e === void 0 && (e = !1), a === void 0 && (a = !1);
    const l = r.getBoundingClientRect(), u = lIe(r);
    let p = TS(1);
    e && (s ? Lo(s) && (p = mB(s)) : p = mB(r));
    const m = rer(u, a, s) ? HTt(u) : TS(0);
    let b = (l.left + m.x) / p.x, g = (l.top + m.y) / p.y, _ = l.width / p.x, v = l.height / p.y;
    if (u && s) {
        const x = id(u), C = Lo(s) ? id(s) : s;
        let E = x, A = Q$e(E);
        for(; A && C !== E;){
            const $ = mB(A), I = A.getBoundingClientRect(), N = Uy(A), R = I.left + (A.clientLeft + parseFloat(N.paddingLeft)) * $.x, P = I.top + (A.clientTop + parseFloat(N.paddingTop)) * $.y;
            b *= $.x, g *= $.y, _ *= $.x, v *= $.y, b += R, g += P, E = id(A), A = Q$e(E);
        }
    }
    return OY({
        width: _,
        height: v,
        x: b,
        y: g
    });
}
function Tme(r, e) {
    const a = Cme(r).scrollLeft;
    return e ? e.left + a : dP(xS(r)).left + a;
}
function ZTt(r, e) {
    const a = r.getBoundingClientRect(), s = a.left + e.scrollLeft - Tme(r, a), l = a.top + e.scrollTop;
    return {
        x: s,
        y: l
    };
}
function ier(r) {
    let { elements: e, rect: a, offsetParent: s, strategy: l } = r;
    const u = l === "fixed", p = xS(s), m = e ? vme(e.floating) : !1;
    if (s === p || m && u) return a;
    let b = {
        scrollLeft: 0,
        scrollTop: 0
    }, g = TS(1);
    const _ = TS(0), v = Vc(s);
    if ((v || !u) && ((zg(s) !== "body" || cP(p)) && (b = Cme(s)), v)) {
        const C = dP(s);
        g = mB(s), _.x = C.x + s.clientLeft, _.y = C.y + s.clientTop;
    }
    const x = p && !v && !u ? ZTt(p, b) : TS(0);
    return {
        width: a.width * g.x,
        height: a.height * g.y,
        x: a.x * g.x - b.scrollLeft * g.x + _.x + x.x,
        y: a.y * g.y - b.scrollTop * g.y + _.y + x.y
    };
}
function aer(r) {
    return r.getClientRects ? Array.from(r.getClientRects()) : [];
}
function oer(r) {
    const e = Cme(r), a = r.ownerDocument.body, s = ES(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), l = ES(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
    let u = -e.scrollLeft + Tme(r);
    const p = -e.scrollTop;
    return Uy(a).direction === "rtl" && (u += ES(r.clientWidth, a.clientWidth) - s), {
        width: s,
        height: l,
        x: u,
        y: p
    };
}
function ser(r, e, a) {
    a === void 0 && (a = "viewport");
    const s = a === "layoutViewport", l = id(r), u = xS(r), p = l.visualViewport;
    let m = u.clientWidth, b = u.clientHeight, g = 0, _ = 0;
    if (p) {
        const x = !xme() || e === "fixed";
        s ? x || (g = -p.offsetLeft, _ = -p.offsetTop) : (m = p.width, b = p.height, x && (g = p.offsetLeft, _ = p.offsetTop));
    }
    if (Tme(u) <= 0) {
        const x = u.ownerDocument, C = x.body, E = getComputedStyle(C), A = x.compatMode === "CSS1Compat" && parseFloat(E.marginLeft) + parseFloat(E.marginRight) || 0, $ = Math.abs(u.clientWidth - C.clientWidth - A), I = getComputedStyle(u).scrollbarGutter === "stable both-edges" ? $ / 2 : $;
        I <= ger && (m -= I);
    }
    return {
        width: m,
        height: b,
        x: g,
        y: _
    };
}
function cer(r, e) {
    const a = dP(r, !0, e === "fixed"), s = a.top + r.clientTop, l = a.left + r.clientLeft, u = mB(r), p = r.clientWidth * u.x, m = r.clientHeight * u.y, b = l * u.x, g = s * u.y;
    return {
        width: p,
        height: m,
        x: b,
        y: g
    };
}
function VTt(r, e, a) {
    let s;
    if (e === "viewport" || e === "layoutViewport") s = ser(r, a, e);
    else if (e === "document") s = oer(xS(r));
    else if (Lo(e)) s = cer(e, a);
    else {
        const l = HTt(r);
        s = {
            x: e.x - l.x,
            y: e.y - l.y,
            width: e.width,
            height: e.height
        };
    }
    return OY(s);
}
function ler(r, e) {
    const a = e.get(r);
    if (a) return a;
    let s = FT(r, [], !1).filter((m)=>Lo(m) && zg(m) !== "body"), l = null;
    const u = Uy(r).position === "fixed";
    let p = u ? pC(r) : r;
    for(; Lo(p) && !Qv(p);){
        const m = Uy(p), b = J$e(p), g = l ? l.position : u ? "fixed" : "";
        !b && (g === "fixed" || g === "absolute" && m.position === "static") ? s = s.filter((v)=>v !== p) : l = m, p = pC(p);
    }
    return e.set(r, s), s;
}
function uer(r) {
    let { element: e, boundary: a, rootBoundary: s, strategy: l } = r;
    const p = [
        ...a === "clippingAncestors" ? vme(e) ? [] : ler(e, this._c) : [].concat(a),
        s
    ], m = VTt(e, p[0], l);
    let b = m.top, g = m.right, _ = m.bottom, v = m.left;
    for(let x = 1; x < p.length; x++){
        const C = VTt(e, p[x], l);
        b = ES(C.top, b), g = dB(C.right, g), _ = dB(C.bottom, _), v = ES(C.left, v);
    }
    return {
        width: g - v,
        height: _ - b,
        x: v,
        y: b
    };
}
function der(r) {
    const { width: e, height: a } = WTt(r);
    return {
        width: e,
        height: a
    };
}
function per(r, e, a) {
    const s = Vc(e), l = xS(e), u = a === "fixed", p = dP(r, !0, u, e);
    let m = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const b = TS(0);
    if ((s || !u) && ((zg(e) !== "body" || cP(l)) && (m = Cme(e)), s)) {
        const x = dP(e, !0, u, e);
        b.x = x.x + e.clientLeft, b.y = x.y + e.clientTop;
    }
    !s && l && (b.x = Tme(l));
    const g = l && !s && !u ? ZTt(l, m) : TS(0), _ = p.left + m.scrollLeft - b.x - g.x, v = p.top + m.scrollTop - b.y - g.y;
    return {
        x: _,
        y: v,
        width: p.width,
        height: p.height
    };
}
function uIe(r) {
    return Uy(r).position === "static";
}
function KTt(r, e) {
    if (!Vc(r) || Uy(r).position === "fixed") return null;
    if (e) return e(r);
    let a = r.offsetParent;
    return xS(r) === a && (a = a.ownerDocument.body), a;
}
function XTt(r, e) {
    const a = id(r);
    if (vme(r)) return a;
    if (!Vc(r)) {
        let l = pC(r);
        for(; l && !Qv(l);){
            if (Lo(l) && !uIe(l)) return l;
            l = pC(l);
        }
        return a;
    }
    let s = KTt(r, e);
    for(; s && TJn(s) && uIe(s);)s = KTt(s, e);
    return s && Qv(s) && uIe(s) && !J$e(s) ? a : s || $Jn(r) || a;
}
function mer(r) {
    return Uy(r).direction === "rtl";
}
function YTt(r, e) {
    return r.x === e.x && r.y === e.y && r.width === e.width && r.height === e.height;
}
function fer(r, e, a) {
    let s = null, l;
    const u = xS(r);
    function p() {
        var _;
        clearTimeout(l), (_ = s) == null || _.disconnect(), s = null;
    }
    i(p, "cleanup");
    function m(_, v) {
        _ === void 0 && (_ = !1), v === void 0 && (v = 1), p();
        const x = r.getBoundingClientRect(), { left: C, top: E, width: A, height: $ } = x;
        if (_ || e(), !A || !$) return;
        const I = AS(E), N = AS(u.clientWidth - (C + A)), R = AS(u.clientHeight - (E + $)), P = AS(C), j = {
            rootMargin: -I + "px " + -N + "px " + -R + "px " + -P + "px",
            threshold: ES(0, dB(1, v)) || 1
        };
        let z = !0;
        function q(O) {
            const B = O[0].intersectionRatio;
            if (!YTt(x, r.getBoundingClientRect())) return m();
            if (B !== v) {
                if (!z) return m();
                B ? m(!1, B) : l = setTimeout(()=>{
                    m(!1, 1e-7);
                }, 1e3);
            }
            z = !1;
        }
        i(q, "handleObserve");
        try {
            s = new IntersectionObserver(q, {
                ...j,
                root: u.ownerDocument
            });
        } catch  {
            s = new IntersectionObserver(q, j);
        }
        s.observe(r);
    }
    i(m, "refresh");
    const b = id(r), g = i(()=>m(a), "handleResize");
    return b.addEventListener("resize", g), m(!0), ()=>{
        b.removeEventListener("resize", g), p();
    };
}
function $me(r, e, a, s) {
    s === void 0 && (s = {});
    const { ancestorScroll: l = !0, ancestorResize: u = !0, elementResize: p = typeof ResizeObserver == "function", layoutShift: m = typeof IntersectionObserver == "function", animationFrame: b = !1 } = s, g = lIe(r), _ = l || u ? [
        ...g ? FT(g) : [],
        ...e ? FT(e) : []
    ] : [];
    _.forEach((I)=>{
        l && I.addEventListener("scroll", a), u && I.addEventListener("resize", a);
    });
    const v = g && m ? fer(g, a, u) : null;
    let x = -1, C = null;
    p && (C = new ResizeObserver((I)=>{
        let [N] = I;
        N && N.target === g && C && e && (C.unobserve(e), cancelAnimationFrame(x), x = requestAnimationFrame(()=>{
            var R;
            (R = C) == null || R.observe(e);
        })), a();
    }), g && !b && C.observe(g), e && C.observe(e));
    let E, A = b ? dP(r) : null;
    b && $();
    function $() {
        const I = dP(r);
        A && !YTt(A, I) && a(), A = I, E = requestAnimationFrame($);
    }
    return i($, "frameLoop"), a(), ()=>{
        var I;
        _.forEach((N)=>{
            l && N.removeEventListener("scroll", a), u && N.removeEventListener("resize", a);
        }), v?.(), (I = C) == null || I.disconnect(), C = null, b && cancelAnimationFrame(E);
    };
}
var her, ger, ber, JTt, yer, wer, _er, ker, ver, xer, Cer;
export { $me, Cer, HTt, JTt, KTt, Tme, VTt, WTt, XTt, YTt, ZTt, _er, aer, ber, cer, dP, der, fer, ger, her, ier, ker, lIe, ler, mB, mer, oer, per, rer, ser, uIe, uer, ver, wer, xer, yer };
var __wakaru_Ser_initialized = false;
export function Ser() {
if (__wakaru_Ser_initialized) return;
__wakaru_Ser_initialized = true;
mki(), $S(), Ou(), Ou(), i(WTt, "getCssDimensions"), i(lIe, "unwrapElement"), i(mB, "getScale"), her = TS(0), i(HTt, "getVisualOffsets"), i(rer, "shouldAddVisualOffsets"), i(dP, "getBoundingClientRect"), i(Tme, "getWindowScrollBarX"), i(ZTt, "getHTMLOffset"), i(ier, "convertOffsetParentRelativeRectToViewportRelativeRect"), i(aer, "getClientRects"), i(oer, "getDocumentRect"), ger = 25, i(ser, "getViewportRect"), i(cer, "getInnerBoundingClientRect"), i(VTt, "getClientRectFromClippingAncestor"), i(ler, "getClippingElementAncestors"), i(uer, "getClippingRect"), i(der, "getDimensions"), i(per, "getRectRelativeToOffsetParent"), i(uIe, "isStaticPositioned"), i(KTt, "getTrueOffsetParent"), i(XTt, "getOffsetParent"), ber = i(async function(r) {
    const e = this.getOffsetParent || XTt, a = this.getDimensions, s = await a(r.floating);
    return {
        reference: per(r.reference, await e(r.floating), r.strategy),
        floating: {
            x: 0,
            y: 0,
            width: s.width,
            height: s.height
        }
    };
}, "getElementRects"), i(mer, "isRTL"), JTt = {
    convertOffsetParentRelativeRectToViewportRelativeRect: ier,
    getDocumentElement: xS,
    getClippingRect: uer,
    getOffsetParent: XTt,
    getElementRects: ber,
    getClientRects: aer,
    getDimensions: der,
    getScale: mB,
    isElement: Lo,
    isRTL: mer
}, i(YTt, "rectsAreEqual"), i(fer, "observeMove"), i($me, "autoUpdate"), yer = QQn, wer = eer, _er = YQn, ker = ner, ver = JQn, xer = ter, Cer = i((r, e, a)=>{
    const s = new Map, l = a ?? {}, u = {
        ...JTt,
        ...l.platform,
        _c: s
    };
    return XQn(r, e, {
        ...l,
        platform: u
    });
}, "computePosition");

}
