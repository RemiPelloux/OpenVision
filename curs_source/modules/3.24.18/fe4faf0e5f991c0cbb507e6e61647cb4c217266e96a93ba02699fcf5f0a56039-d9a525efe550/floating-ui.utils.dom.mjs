import { i } from "./plugin-brand-icon.js";
function _me() {
    return typeof window < "u";
}
function zg(r) {
    return kme(r) ? (r.nodeName || "").toLowerCase() : "#document";
}
function id(r) {
    var e;
    return (r == null || (e = r.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function xS(r) {
    var e;
    return (e = (kme(r) ? r.ownerDocument : r.document) || window.document) == null ? void 0 : e.documentElement;
}
function kme(r) {
    return _me() ? r instanceof Node || r instanceof id(r).Node : !1;
}
function Lo(r) {
    return _me() ? r instanceof Element || r instanceof id(r).Element : !1;
}
function Vc(r) {
    return _me() ? r instanceof HTMLElement || r instanceof id(r).HTMLElement : !1;
}
function DT(r) {
    return !_me() || typeof ShadowRoot > "u" ? !1 : r instanceof ShadowRoot || r instanceof id(r).ShadowRoot;
}
function cP(r) {
    const { overflow: e, overflowX: a, overflowY: s, display: l } = Uy(r);
    return /auto|scroll|overlay|hidden|clip/.test(e + s + a) && l !== "inline" && l !== "contents";
}
function TJn(r) {
    return /^(table|td|th)$/.test(zg(r));
}
function vme(r) {
    try {
        if (r.matches(":popover-open")) return !0;
    } catch  {}
    try {
        return r.matches(":modal");
    } catch  {
        return !1;
    }
}
function J$e(r) {
    const e = Lo(r) ? Uy(r) : r;
    return lP(e.transform) || lP(e.translate) || lP(e.scale) || lP(e.rotate) || lP(e.perspective) || !xme() && (lP(e.backdropFilter) || lP(e.filter)) || IJn.test(e.willChange || "") || NJn.test(e.contain || "");
}
function $Jn(r) {
    let e = pC(r);
    for(; Vc(e) && !Qv(e);){
        if (J$e(e)) return e;
        if (vme(e)) return null;
        e = pC(e);
    }
    return null;
}
function xme() {
    return xTt == null && (xTt = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), xTt;
}
function Qv(r) {
    return /^(html|body|#document)$/.test(zg(r));
}
function Uy(r) {
    return id(r).getComputedStyle(r);
}
function Cme(r) {
    return Lo(r) ? {
        scrollLeft: r.scrollLeft,
        scrollTop: r.scrollTop
    } : {
        scrollLeft: r.scrollX,
        scrollTop: r.scrollY
    };
}
function pC(r) {
    if (zg(r) === "html") return r;
    const e = r.assignedSlot || r.parentNode || DT(r) && r.host || xS(r);
    return DT(e) ? e.host : e;
}
function vTt(r) {
    const e = pC(r);
    return Qv(e) ? (r.ownerDocument || r).body : Vc(e) && cP(e) ? e : vTt(e);
}
function FT(r, e, a) {
    var s;
    e === void 0 && (e = []), a === void 0 && (a = !0);
    const l = vTt(r), u = l === ((s = r.ownerDocument) == null ? void 0 : s.body), p = id(l);
    if (u) {
        const m = Q$e(p);
        return e.concat(p, p.visualViewport || [], cP(l) ? l : [], m && a ? FT(m) : []);
    } else return e.concat(l, FT(l, [], a));
}
function Q$e(r) {
    return r.parent && Object.getPrototypeOf(r.parent) ? r.frameElement : null;
}
var IJn, NJn, lP, xTt;
export { $Jn, Cme, DT, FT, IJn, J$e, Lo, NJn, Q$e, Qv, TJn, Uy, Vc, _me, cP, id, kme, lP, pC, vTt, vme, xS, xTt, xme, zg };
var __wakaru_Ou_initialized = false;
export function Ou() {
if (__wakaru_Ou_initialized) return;
__wakaru_Ou_initialized = true;
i(_me, "hasWindow"), i(zg, "getNodeName"), i(id, "getWindow"), i(xS, "getDocumentElement"), i(kme, "isNode"), i(Lo, "isElement"), i(Vc, "isHTMLElement"), i(DT, "isShadowRoot"), i(cP, "isOverflowElement"), i(TJn, "isTableElement"), i(vme, "isTopLayer"), IJn = /transform|translate|scale|rotate|perspective|filter/, NJn = /paint|layout|strict|content/, lP = i((r)=>!!r && r !== "none", "isNotNone"), i(J$e, "isContainingBlock"), i($Jn, "getContainingBlock"), i(xme, "isWebKit"), i(Qv, "isLastTraversableNode"), i(Uy, "getComputedStyle"), i(Cme, "getNodeScroll"), i(pC, "getParentNode"), i(vTt, "getNearestOverflowAncestor"), i(FT, "getOverflowAncestors"), i(Q$e, "getFrameElement");

}
