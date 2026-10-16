import { D4w, ECs, M4w } from "./BA.js";
import { a3, lee } from "./Ycg.js";
import { E } from "./tslib.es6.js";
import { aDn, fct } from "./utilities.esm.js";
import $Vf from "./react-runtime/react/esm-index-production.js";
var NLi, HVf, djl, LLi, WVf, hjl, pjl, GVf, qVf, zVf, mjl, VVf, KVf, F4w;
export { F4w, GVf, HVf, KVf, LLi, NLi, VVf, WVf, djl, hjl, mjl, pjl, qVf, zVf };
var __wakaru_AZt_initialized = false;
export function AZt() {
if (__wakaru_AZt_initialized) return;
__wakaru_AZt_initialized = true;
E(), lee(), aDn(), NLi = {
    scaleX: 1,
    scaleY: 1
}, HVf = (t)=>{
    var e;
    let { rects: n, activeNodeRect: i, activeIndex: r, overIndex: s, index: o } = t;
    const a = (e = n[r]) != null ? e : i;
    if (!a) return null;
    const l = M4w(n, o, r);
    if (o === r) {
        const c = n[s];
        return c ? {
            x: r < s ? c.left + c.width - (a.left + a.width) : c.left - a.left,
            y: 0,
            ...NLi
        } : null;
    }
    return o > r && o <= s ? {
        x: -a.width - l,
        y: 0,
        ...NLi
    } : o < r && o >= s ? {
        x: a.width + l,
        y: 0,
        ...NLi
    } : {
        x: 0,
        y: 0,
        ...NLi
    };
}, djl = (t)=>{
    let { rects: e, activeIndex: n, overIndex: i, index: r } = t;
    const s = ECs(e, i, n), o = e[r], a = s[r];
    return !a || !o ? null : {
        x: a.left - o.left,
        y: a.top - o.top,
        scaleX: a.width / o.width,
        scaleY: a.height / o.height
    };
}, LLi = {
    scaleX: 1,
    scaleY: 1
}, WVf = (t)=>{
    var e;
    let { activeIndex: n, activeNodeRect: i, index: r, rects: s, overIndex: o } = t;
    const a = (e = s[n]) != null ? e : i;
    if (!a) return null;
    if (r === n) {
        const c = s[o];
        return c ? {
            x: 0,
            y: n < o ? c.top + c.height - (a.top + a.height) : c.top - a.top,
            ...LLi
        } : null;
    }
    const l = D4w(s, r, n);
    return r > n && r <= o ? {
        x: 0,
        y: -a.height - l,
        ...LLi
    } : r < n && r >= o ? {
        x: 0,
        y: a.height + l,
        ...LLi
    } : {
        x: 0,
        y: 0,
        ...LLi
    };
}, hjl = "Sortable", pjl = $Vf.createContext({
    activeIndex: -1,
    containerId: hjl,
    disableTransforms: !1,
    items: [],
    overIndex: -1,
    useDragOverlay: !1,
    sortedRects: [],
    strategy: djl,
    disabled: {
        draggable: !1,
        droppable: !1
    }
}), GVf = (t)=>{
    let { id: e, items: n, activeIndex: i, overIndex: r } = t;
    return ECs(n, i, r).indexOf(e);
}, qVf = (t)=>{
    let { containerId: e, isSorting: n, wasDragging: i, index: r, items: s, newIndex: o, previousItems: a, previousContainerId: l, transition: c } = t;
    return !c || !i || a !== s && r === o ? !1 : n ? !0 : o !== r && e === l;
}, zVf = {
    duration: 200,
    easing: "ease"
}, mjl = "transform", VVf = fct.Transition.toString({
    property: mjl,
    duration: 0,
    easing: "linear"
}), KVf = {
    roleDescription: "sortable"
}, F4w = [
    a3.Down,
    a3.Right,
    a3.Up,
    a3.Left
];

}
