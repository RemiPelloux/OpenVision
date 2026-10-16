import { Cer, Ser, _er, ker, ver, wer, xer, yer } from "./floating-ui.dom.mjs";
import { i } from "./plugin-brand-icon.js";
import * as Ny from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as fui } from "./react-runtime/react/esm-index-production.js";
import * as hui from "./react-runtime/react-dom/esm-index-production.js";
function Ime(r, e) {
    if (r === e) return !0;
    if (typeof r != typeof e) return !1;
    if (typeof r == "function" && r.toString() === e.toString()) return !0;
    let a, s, l;
    if (r && e && typeof r == "object") {
        if (Array.isArray(r)) {
            if (a = r.length, a !== e.length) return !1;
            for(s = a; s-- !== 0;)if (!Ime(r[s], e[s])) return !1;
            return !0;
        }
        if (l = Object.keys(r), a = l.length, a !== Object.keys(e).length) return !1;
        for(s = a; s-- !== 0;)if (!{}.hasOwnProperty.call(e, l[s])) return !1;
        for(s = a; s-- !== 0;){
            const u = l[s];
            if (!(u === "_owner" && r.$$typeof) && !Ime(r[u], e[u])) return !1;
        }
        return !0;
    }
    return r !== r && e !== e;
}
function QTt(r) {
    return typeof window > "u" ? 1 : (r.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function e$t(r, e) {
    const a = QTt(r);
    return Math.round(e * a) / a;
}
function dIe(r) {
    const e = Ny.useRef(r);
    return Nme(()=>{
        e.current = r;
    }), e;
}
function t$t(r) {
    r === void 0 && (r = {});
    const { placement: e = "bottom", strategy: a = "absolute", middleware: s = [], platform: l, elements: { reference: u, floating: p } = {}, transform: m = !0, whileElementsMounted: b, open: g } = r, [_, v] = Ny.useState({
        x: 0,
        y: 0,
        strategy: a,
        placement: e,
        middlewareData: {},
        isPositioned: !1
    }), [x, C] = Ny.useState(s);
    Ime(x, s) || C(s);
    const [E, A] = Ny.useState(null), [$, I] = Ny.useState(null), N = Ny.useCallback((ne)=>{
        ne !== j.current && (j.current = ne, A(ne));
    }, []), R = Ny.useCallback((ne)=>{
        ne !== z.current && (z.current = ne, I(ne));
    }, []), P = u || E, L = p || $, j = Ny.useRef(null), z = Ny.useRef(null), q = Ny.useRef(_), O = b != null, B = dIe(b), V = dIe(l), H = dIe(g), Z = Ny.useCallback(()=>{
        if (!j.current || !z.current) return;
        const ne = {
            placement: e,
            strategy: a,
            middleware: x
        };
        V.current && (ne.platform = V.current), Cer(j.current, z.current, ne).then((ae)=>{
            const W = {
                ...ae,
                isPositioned: H.current !== !1
            };
            K.current && !Ime(q.current, W) && (q.current = W, hui.flushSync(()=>{
                v(W);
            }));
        });
    }, [
        x,
        e,
        a,
        V,
        H
    ]);
    Nme(()=>{
        g === !1 && q.current.isPositioned && (q.current.isPositioned = !1, v((ne)=>({
                ...ne,
                isPositioned: !1
            })));
    }, [
        g
    ]);
    const K = Ny.useRef(!1);
    Nme(()=>(K.current = !0, ()=>{
            K.current = !1;
        }), []), Nme(()=>{
        if (P && (j.current = P), L && (z.current = L), P && L) {
            if (B.current) return B.current(P, L, Z);
            Z();
        }
    }, [
        P,
        L,
        Z,
        B,
        O
    ]);
    const Y = Ny.useMemo(()=>({
            reference: j,
            floating: z,
            setReference: N,
            setFloating: R
        }), [
        N,
        R
    ]), J = Ny.useMemo(()=>({
            reference: P,
            floating: L
        }), [
        P,
        L
    ]), re = Ny.useMemo(()=>{
        const ne = {
            position: a,
            left: 0,
            top: 0
        };
        if (!J.floating) return ne;
        const ae = e$t(J.floating, _.x), W = e$t(J.floating, _.y);
        return m ? {
            ...ne,
            transform: "translate(" + ae + "px, " + W + "px)",
            ...QTt(J.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: a,
            left: ae,
            top: W
        };
    }, [
        a,
        m,
        J.floating,
        _.x,
        _.y
    ]);
    return Ny.useMemo(()=>({
            ..._,
            update: Z,
            refs: Y,
            elements: J,
            floatingStyles: re
        }), [
        _,
        Z,
        Y,
        J,
        re
    ]);
}
var Eer, Aer, Nme, pIe, mIe, Ter, fIe, hIe, $er;
export { $er, Aer, Eer, Ime, Nme, QTt, Ter, dIe, e$t, fIe, hIe, mIe, pIe, t$t };
var __wakaru_Mme_initialized = false;
export function Mme() {
if (__wakaru_Mme_initialized) return;
__wakaru_Mme_initialized = true;
Ser(), Ser(), Eer = typeof document < "u", Aer = i(function() {}, "noop"), Nme = Eer ? fui : Aer, i(Ime, "deepEqual"), i(QTt, "getDPR"), i(e$t, "roundByDPR"), i(dIe, "useLatestRef"), i(t$t, "useFloating"), pIe = i((r, e)=>{
    const a = yer(r);
    return {
        name: a.name,
        fn: a.fn,
        options: [
            r,
            e
        ]
    };
}, "offset"), mIe = i((r, e)=>{
    const a = wer(r);
    return {
        name: a.name,
        fn: a.fn,
        options: [
            r,
            e
        ]
    };
}, "shift"), Ter = i((r, e)=>({
        fn: xer(r).fn,
        options: [
            r,
            e
        ]
    }), "limitShift"), fIe = i((r, e)=>{
    const a = _er(r);
    return {
        name: a.name,
        fn: a.fn,
        options: [
            r,
            e
        ]
    };
}, "flip"), hIe = i((r, e)=>{
    const a = ker(r);
    return {
        name: a.name,
        fn: a.fn,
        options: [
            r,
            e
        ]
    };
}, "size"), $er = i((r, e)=>{
    const a = ver(r);
    return {
        name: a.name,
        fn: a.fn,
        options: [
            r,
            e
        ]
    };
}, "hide");

}
