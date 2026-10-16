import { dPt, pxi } from "./bundle-mjs.mjs";
import { gme, sTt } from "./clsx.mjs";
import { D4i } from "./highlighted-body-KPVGNVTW.js";
import { efr } from "./index_101.js";
import { Cxi } from "./index_102.js";
import { gMe } from "./index_103.js";
import { Exi } from "./index_104.js";
import { Jfr } from "./index_108.js";
import { Oxi } from "./index_109.js";
import { jhr } from "./index_114.js";
import { g4i } from "./index_115.js";
import { rgr } from "./index_123.js";
import { $4i } from "./index_124.js";
import { BNe } from "./index_34.js";
import { Mvi } from "./index_35.js";
import { Nfe } from "./index_38.js";
import { acr } from "./index_39.js";
import { KT, QY } from "./index_4.js";
import { mfe } from "./index_5.js";
import { R4 } from "./index_6.js";
import { ffe } from "./index_7.js";
import { Zki, iir } from "./index_8.js";
import { zRt } from "./index_87.js";
import { Ydr } from "./index_88.js";
import { fmr, rPt } from "./index_89.js";
import { Bgr, ak } from "./marked.esm.js";
import { F4i } from "./mermaid-HWGCJPDP.js";
import { i } from "./plugin-brand-icon.js";
import { j4 } from "./schema_2.js";
import { useMemo as Ef } from "./react-runtime/react/esm-index-production.js";
import { jsx as Tn } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useContext as Vh } from "./react-runtime/react/esm-index-production.js";
import { useRef as Vm } from "./react-runtime/react/esm-index-production.js";
import { useEffect as _0 } from "./react-runtime/react/esm-index-production.js";
import { createElement as aHn } from "./react-runtime/react/esm-index-production.js";
import { Suspense as d8t } from "./react-runtime/react/esm-index-production.js";
import { useState as hh } from "./react-runtime/react/esm-index-production.js";
import { jsxs as hl } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useLayoutEffect as iHn } from "./react-runtime/react/esm-index-production.js";
import { createContext as kz } from "./react-runtime/react/esm-index-production.js";
import { useCallback as lw } from "./react-runtime/react/esm-index-production.js";
import { memo as np } from "./react-runtime/react/esm-index-production.js";
import { Fragment as oS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { createPortal as p8t } from "./react-runtime/react-dom/esm-index-production.js";
import { lazy as rHn } from "./react-runtime/react/esm-index-production.js";
import { useId as vdi } from "./react-runtime/react/esm-index-production.js";
import { isValidElement as vz } from "./react-runtime/react/esm-index-production.js";
import { cloneElement as xdi } from "./react-runtime/react/esm-index-production.js";
var $$e = (function() {
    if (typeof window > "u" || !window.trustedTypes) return null;
    if (window.__anysphereUiTrustedTypesPolicy) return window.__anysphereUiTrustedTypesPolicy;
    var r = window.trustedTypes.createPolicy("anysphereUiPolicy", {
        createHTML: function(e) {
            return e;
        }
    });
    return window.__anysphereUiTrustedTypesPolicy = r, r;
})(), iYn = function(r, e, a) {
    return $$e ? r.parseFromString($$e.createHTML(e), a) : r.parseFromString(e, a);
};
var qgr = {};
var Ggr = {};
function Wgr(r = {}) {
    let { immediate: e = !1, debounceDelay: a = Vgr, rootMargin: s = Kgr, idleTimeout: l = Xgr } = r, [u, p] = hh(!1), m = Vm(null), b = Vm(null), g = Vm(null), _ = Ef(()=>(C)=>{
            let E = Date.now();
            return window.setTimeout(()=>{
                C({
                    didTimeout: !1,
                    timeRemaining: i(()=>Math.max(0, 50 - (Date.now() - E)), "timeRemaining")
                });
            }, 1);
        }, []), v = Ef(()=>typeof window < "u" && window.requestIdleCallback ? (C, E)=>window.requestIdleCallback(C, E) : _, [
        _
    ]), x = Ef(()=>typeof window < "u" && window.cancelIdleCallback ? (C)=>window.cancelIdleCallback(C) : (C)=>{
            clearTimeout(C);
        }, []);
    return _0(()=>{
        if (e) {
            p(!0);
            return;
        }
        let C = m.current;
        if (!C) return;
        b.current && (clearTimeout(b.current), b.current = null), g.current && (x(g.current), g.current = null);
        let E = i(()=>{
            b.current && (clearTimeout(b.current), b.current = null), g.current && (x(g.current), g.current = null);
        }, "f"), A = i((R)=>{
            g.current = v((P)=>{
                P.timeRemaining() > 0 || P.didTimeout ? (p(!0), R.disconnect()) : g.current = v(()=>{
                    p(!0), R.disconnect();
                }, {
                    timeout: l / 2
                });
            }, {
                timeout: l
            });
        }, "b"), $ = i((R)=>{
            E(), b.current = window.setTimeout(()=>{
                var P, L;
                let j = R.takeRecords();
                (j.length === 0 || (L = (P = j.at(-1)) == null ? void 0 : P.isIntersecting) != null && L) && A(R);
            }, a);
        }, "w"), I = i((R, P)=>{
            R.isIntersecting ? $(P) : E();
        }, "y"), N = new IntersectionObserver((R)=>{
            for (let P of R)I(P, N);
        }, {
            rootMargin: s,
            threshold: 0
        });
        return N.observe(C), ()=>{
            b.current && clearTimeout(b.current), g.current && x(g.current), N.disconnect();
        };
    }, [
        e,
        a,
        s,
        l,
        x,
        v
    ]), {
        shouldRender: u,
        containerRef: m
    };
}
function ljt(r) {
    var e, a;
    let s = (e = r?.now) != null ? e : mjt, l = (a = r?.maxBacklogMs) != null ? a : Ygr, u = 0, p = 0;
    return {
        now: s,
        beginPass (m) {
            p = Math.min(Math.max(u, m), m + l);
        },
        mark () {
            return p;
        },
        rewind (m) {
            p = m;
        },
        take (m, b, g) {
            if (m <= 0) return {
                baseDelay: 0,
                step: Math.max(0, b)
            };
            let _ = Math.max(0, b), v = _ === 0 ? 0 : Math.min(_, Jgr), x = Math.max(p, g), C = g + l, E = x + Math.max(0, m - 1) * _, A = _;
            if (E > C && m > 1) if (x < C) {
                let I = C - x;
                A = Math.max(v, I / (m - 1));
            } else A = v;
            let $ = Math.max(0, Math.round(x - g));
            return p = x + m * A, {
                baseDelay: $,
                step: A
            };
        },
        commitPass () {
            u = p;
        }
    };
}
function ujt(r) {
    var e, a, s, l, u;
    let p = {
        animation: (e = r?.animation) != null ? e : "fadeIn",
        duration: (a = r?.duration) != null ? a : 150,
        easing: (s = r?.easing) != null ? s : "ease",
        sep: (l = r?.sep) != null ? l : "word",
        stagger: (u = r?.stagger) != null ? u : 40,
        timeline: r?.timeline
    }, m = {
        committedCharCount: 0,
        prevContentLength: 0,
        lastRenderCharCount: 0,
        pendingMark: null
    }, b = ubr++, g = i(()=>(_)=>{
            var v;
            let x = {
                count: 0,
                newIndex: 0
            };
            m.prevContentLength = m.committedCharCount;
            let C = p.timeline, E = (v = C?.now()) != null ? v : mjt();
            C && (m.pendingMark === null ? m.pendingMark = C.mark() : C.rewind(m.pendingMark));
            let A = C ? C.take(cbr(_, p, m.prevContentLength), p.stagger, E) : {
                baseDelay: 0,
                step: p.stagger
            };
            QY(_, ($)=>$.type === "text" || zMe($), ($, I)=>{
                if ($.type === "text") return lbr($, I, p, m, x, A);
                abr($, I, p, m, x, A);
            }), m.lastRenderCharCount = x.count, m.prevContentLength = 0;
        }, "r");
    return Object.defineProperty(g, "name", {
        value: `rehypeAnimate$${b}`
    }), {
        name: "animate",
        type: "animate",
        rehypePlugin: g,
        setPrevContentLength (_) {
            m.committedCharCount = _, m.prevContentLength = _;
        },
        getLastRenderCharCount () {
            return m.lastRenderCharCount;
        },
        commit () {
            m.committedCharCount = m.lastRenderCharCount, m.pendingMark = null;
        }
    };
}
function DMe(r) {
    var e;
    if (r.nodeType === Node.TEXT_NODE) return (e = r.textContent) != null ? e : "";
    if (r.nodeType !== Node.ELEMENT_NODE) return "";
    let a = r;
    return a.tagName === "BR" ? `
` : Array.from(a.childNodes).map(DMe).join("");
}
function Xp(r, e) {
    let a = Object.keys(r);
    if (a.length !== Object.keys(e).length) return !1;
    let s = r, l = e;
    for (let u of a)if (u !== Xbr && !Object.is(s[u], l[u])) return !1;
    return !0;
}
function Hgr(r, e) {
    var a, s;
    return ((a = r?.properties) == null ? void 0 : a.metastring) === ((s = e?.properties) == null ? void 0 : s.metastring);
}
function djt(r) {
    let e = r.replace(/(```|~~~)[\s\S]*?\1/g, "").replace(/^#{1,6}\s+/gm, "").replace(/(\*{1,3}|_{1,3})/g, "").replace(/`[^`]*`/g, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/^[\s>*\-+\d.]+/gm, ""), a, s = 0, l = 0;
    for (let u of e){
        if (n1r.test(u)) {
            a != null || (a = "rtl"), l += 1;
            continue;
        }
        r1r.test(u) && (a != null || (a = "ltr"), s += 1);
    }
    return l > s ? "rtl" : s > l ? "ltr" : a ?? "ltr";
}
function pjt(r) {
    return r.children.map((e)=>e.type === "text" ? e.value : e.type === "element" && !wLt.has(e.tagName) ? pjt(e) : "").join("");
}
function Zgr() {
    return (r)=>{
        R4(r, "element", (e)=>{
            if (wLt.has(e.tagName)) {
                e.properties != null || (e.properties = {}), e.properties.dir = "ltr";
                return;
            }
            R1r.has(e.tagName) && (e.properties != null || (e.properties = {}), typeof e.properties.dir != "string" && (e.properties.dir = djt(pjt(e))));
        });
    };
}
var Vgr, Kgr, Xgr, Ygr, Jgr, mjt, fjt, FMe, Qgr, ebr, LJ, OMe, tbr, nbr, rbr, hjt, gjt, ibr, abr, obr, bjt, yjt, sbr, wjt, zMe, cbr, lbr, ubr, _jt, dbr, ehe, pbr, mbr, LB, BMe, rl, fbr, kjt, vjt, hbr, gbr, bbr, xjt, ybr, Cjt, Sjt, wbr, _br, kbr, vbr, xbr, Cbr, Sbr, Ebr, Abr, Tbr, $br, Ibr, Nbr, Mbr, DJ, Ejt, Rbr, Ajt, F4, Tjt, qMe, xC, UMe, GMe, $jt, Pbr, Ijt, jbr, Lbr, FJ, WMe, HMe, Dbr, ZMe, VMe, Fbr, KMe, Obr, zbr, Bbr, Njt, qbr, Mjt, Rjt, Pjt, Ubr, XMe, jjt, Ljt, Djt, Gbr, Wbr, Hbr, Zbr, Vbr, Kbr, Xbr, the, YMe, Fjt, nhe, Ybr, JMe, Ojt, zjt, Bjt, qjt, Jbr, Ujt, Gjt, Wjt, Hjt, Zjt, Vjt, Kjt, Xjt, Yjt, Jjt, Qjt, eLt, tLt, nLt, rLt, iLt, aLt, Qbr, oLt, e1r, sLt, cLt, t1r, n1r, r1r, i1r, a1r, lLt, o1r, s1r, uLt, dLt, rhe, pLt, c1r, mLt, fLt, l1r, u1r, d1r, p1r, m1r, f1r, h1r, g1r, b1r, y1r, w1r, _1r, hLt, gLt, k1r, v1r, bLt, yLt, x1r, C1r, S1r, E1r, QMe, A1r, T1r, $1r, I1r, N1r, M1r, R1r, wLt, _Lt, P1r, j1r, L1r, D1r, F1r, O1r, z1r, B1r, q1r, ihe, OJ, U1r, kLt, G1r, W1r, vLt, xLt, H1r, Fb, ahe, CLt, Z1r, SLt;
export { $$e, $1r, $br, $jt, A1r, Abr, Ajt, B1r, BMe, Bbr, Bjt, C1r, CLt, Cbr, Cjt, D1r, DJ, DMe, Dbr, Djt, E1r, Ebr, Ejt, F1r, F4, FJ, FMe, Fb, Fbr, Fjt, G1r, GMe, Gbr, Ggr, Gjt, H1r, HMe, Hbr, Hgr, Hjt, I1r, Ibr, Ijt, JMe, Jbr, Jgr, Jjt, KMe, Kbr, Kgr, Kjt, L1r, LB, LJ, Lbr, Ljt, M1r, Mbr, Mjt, N1r, Nbr, Njt, O1r, OJ, OMe, Obr, Ojt, P1r, Pbr, Pjt, QMe, Qbr, Qgr, Qjt, R1r, Rbr, Rjt, S1r, SLt, Sbr, Sjt, T1r, Tbr, Tjt, U1r, UMe, Ubr, Ujt, VMe, Vbr, Vgr, Vjt, W1r, WMe, Wbr, Wgr, Wjt, XMe, Xbr, Xgr, Xjt, Xp, YMe, Ybr, Ygr, Yjt, Z1r, ZMe, Zbr, Zgr, Zjt, _1r, _Lt, _br, _jt, a1r, aLt, abr, ahe, b1r, bLt, bbr, bjt, c1r, cLt, cbr, d1r, dLt, dbr, djt, e1r, eLt, ebr, ehe, f1r, fLt, fbr, fjt, g1r, gLt, gbr, gjt, h1r, hLt, hbr, hjt, i1r, iLt, iYn, ibr, ihe, j1r, jbr, jjt, k1r, kLt, kbr, kjt, l1r, lLt, lbr, ljt, m1r, mLt, mbr, mjt, n1r, nLt, nbr, nhe, o1r, oLt, obr, p1r, pLt, pbr, pjt, q1r, qMe, qbr, qgr, qjt, r1r, rLt, rbr, rhe, rl, s1r, sLt, sbr, t1r, tLt, tbr, the, u1r, uLt, ubr, ujt, v1r, vLt, vbr, vjt, w1r, wLt, wbr, wjt, x1r, xC, xLt, xbr, xjt, y1r, yLt, ybr, yjt, z1r, zMe, zbr, zjt };
var __wakaru_ELt_initialized = false;
export function ELt() {
if (__wakaru_ELt_initialized) return;
__wakaru_ELt_initialized = true;
"use client";
Zki(), Mvi(), acr(), Ydr(), fmr(), mfe(), sTt(), pxi(), Cxi(), Exi(), Oxi(), g4i(), $4i(), ffe(), Bgr(), Vgr = 300, Kgr = "300px", Xgr = 500, i(Wgr, "Ut"), Ygr = 320, Jgr = 4, mjt = i(()=>typeof performance > "u" ? Date.now() : performance.now(), "eo"), i(ljt, "pt"), fjt = /\s/, FMe = /^\s+$/, Qgr = new Set([
    "pre",
    "svg",
    "math",
    "annotation"
]), ebr = new Set([
    "img",
    "hr"
]), LJ = i((r)=>typeof r == "object" && r !== null && "type" in r && r.type === "element", "Te"), OMe = i((r)=>r.some((e)=>LJ(e) && Qgr.has(e.tagName)), "gt"), tbr = i((r)=>{
    for(let e = r.length - 1; e >= 0; e--){
        let a = r[e];
        if (LJ(a) && a.tagName === "li") return a;
    }
}, "br"), nbr = i((r, e, a, s)=>{
    r.properties != null || (r.properties = {}), r.properties["data-sd-animate-marker"] = !0;
    let l = typeof r.properties.style == "string" ? `${r.properties.style};` : "";
    r.properties.style = `${l}--sd-marker-duration:${e}ms;--sd-marker-delay:${Math.round(a)}ms;--sd-marker-easing:${s}`;
}, "hr"), rbr = new Set([
    "ul",
    "ol",
    "li"
]), hjt = i((r)=>{
    for (let e of r.children)if (LJ(e)) {
        if (e.tagName === "input") return e;
        if (rbr.has(e.tagName)) continue;
        let a = hjt(e);
        if (a) return a;
    }
}, "oo"), gjt = i((r, e, a, s)=>{
    r.properties != null || (r.properties = {}), r.properties["data-sd-animate"] = !0;
    let l = typeof r.properties.style == "string" ? `${r.properties.style};` : "";
    r.properties.style = `${l}--sd-animation:sd-${e.animation};--sd-duration:${a}ms;--sd-easing:${e.easing};--sd-delay:${Math.round(s)}ms`;
}, "no"), ibr = i((r, e, a, s)=>{
    let l = hjt(r);
    l && gjt(l, e, a, s);
}, "wr"), abr = i((r, e, a, s, l, u)=>{
    if (OMe(e)) return;
    let p = s.prevContentLength, m = l.count;
    l.count += 1;
    let b = p > 0 && m < p, g = b ? 0 : u.baseDelay + l.newIndex++ * u.step;
    gjt(r, a, b ? 0 : a.duration, g);
}, "Cr"), obr = i((r)=>{
    var e;
    for(let a = r.length - 1; a >= 0; a -= 1){
        let s = r[a];
        if (LJ(s)) {
            if ((e = s.properties) != null && e["data-sd-animated"]) break;
            s.properties = {
                ...s.properties,
                "data-sd-animated": !0
            };
        }
    }
}, "xr"), bjt = i((r)=>{
    let e = [], a = "", s = !1;
    for (let l of r){
        let u = fjt.test(l);
        if (u !== s && a) {
            if (u) {
                a += l, s = !0;
                continue;
            }
            e.push(a), a = "";
        }
        a += l, s = u;
    }
    return a && e.push(a), e;
}, "ro"), yjt = i((r)=>{
    let e = [], a = "";
    for (let s of r)fjt.test(s) ? e.length > 0 && !FMe.test(e.at(-1)) ? e[e.length - 1] += s : a += s : (a && (e.push(a), a = ""), e.push(s));
    return a && (e.length > 0 ? e[e.length - 1] += a : e.push(a)), e;
}, "so"), sbr = i((r, e, a, s, l, u)=>{
    let p = `--sd-animation:sd-${e};--sd-duration:${l ? 0 : a}ms;--sd-easing:${s}`;
    return u && (p += `;--sd-delay:${Math.round(u)}ms`), {
        type: "element",
        tagName: "span",
        properties: {
            "data-sd-animate": !0,
            style: p
        },
        children: [
            {
                type: "text",
                value: r
            }
        ]
    };
}, "kr"), wjt = i((r, e)=>!(r > 0 && e < r), "Gt"), zMe = i((r)=>LJ(r) && ebr.has(r.tagName), "ut"), cbr = i((r, e, a)=>{
    let s = 0, l = 0;
    return QY(r, (u)=>u.type === "text" || zMe(u), (u, p)=>{
        if (OMe(p)) return KT;
        if (zMe(u)) {
            wjt(a, l) && (s += 1), l += 1;
            return;
        }
        let m = u.value;
        if (!m.trim()) {
            l += m.length;
            return;
        }
        let b = e.sep === "char" ? yjt(m) : bjt(m);
        for (let g of b){
            let _ = l;
            l += g.length, !FMe.test(g) && wjt(a, _) && (s += 1);
        }
    }), s;
}, "vr"), lbr = i((r, e, a, s, l, u)=>{
    var p;
    let m = e.at(-1);
    if (!(m && "children" in m)) return;
    if (OMe(e)) return KT;
    let b = m, g = b.children.indexOf(r);
    if (g === -1) return;
    let _ = r.value;
    if (!_.trim()) {
        l.count += _.length;
        return;
    }
    let v = a.sep === "char" ? yjt(_) : bjt(_), x = s.prevContentLength, C = !1, E = tbr(e), A = !!(E && !((p = E.properties) != null && p["data-sd-animate-marker"])), $ = !1, I = v.map((N)=>{
        let R = l.count;
        if (l.count += N.length, FMe.test(N)) return {
            type: "text",
            value: N
        };
        let P = x > 0 && R < x, L = P ? 0 : u.baseDelay + l.newIndex++ * u.step;
        if (C = !0, E && A && !$) {
            let j = P ? 0 : a.duration;
            nbr(E, j, L, a.easing), ibr(E, a, j, L), $ = !0;
        }
        return sbr(N, a.animation, a.duration, a.easing, P, L);
    });
    return C && obr(e), b.children.splice(g, 1, ...I), g + I.length;
}, "Tr"), ubr = 0, i(ujt, "je"), ujt(), _jt = kz(!1), dbr = i(()=>Vh(_jt), "ht"), ehe = i((...r)=>dPt(gme(r)), "fe"), pbr = i((r, e)=>{
    if (!r || !e) return e;
    let a = `${r}:`;
    return e.split(/\s+/).filter(Boolean).map((s)=>s.startsWith(a) ? s : `${r}:${s}`).join(" ");
}, "Nr"), mbr = i((r)=>r ? (...e)=>pbr(r, dPt(gme(e))) : ehe, "lo"), LB = i((r, e, a)=>{
    let s = typeof e == "string" && a.startsWith("text/csv") ? "\uFEFF" : "", l = typeof e == "string" ? new Blob([
        s + e
    ], {
        type: a
    }) : e, u = URL.createObjectURL(l), p = document.createElement("a");
    p.href = u, p.download = r, document.body.appendChild(p), p.click(), document.body.removeChild(p), URL.revokeObjectURL(u);
}, "J"), BMe = kz(ehe), rl = i(()=>Vh(BMe), "C"), fbr = 8, kjt = i((r)=>{
    if (!(r === void 0 || r === 0 || r === Number.POSITIVE_INFINITY)) {
        if (typeof r == "number") return Number.isFinite(r) && r > 0 ? `${r}px` : void 0;
        if (!(r === "0" || r === "none" || r === "Infinity")) return r;
    }
}, "ze"), vjt = i((r, e, a)=>{
    let s = Vm(null), l = Vm(!0), u = Vm(!1);
    return _0(()=>{
        let p = s.current;
        if (!(p && e)) return;
        let m = i(()=>{
            let b = p.scrollHeight - p.scrollTop - p.clientHeight < fbr;
            l.current = b;
        }, "l");
        return p.addEventListener("scroll", m, {
            passive: !0
        }), ()=>p.removeEventListener("scroll", m);
    }, [
        e
    ]), _0(()=>{
        r && !u.current && (l.current = !0), r || (l.current = !0), u.current = r;
    }, [
        r
    ]), _0(()=>{
        let p = s.current;
        p && e && r && l.current && p.scrollTo({
            top: p.scrollHeight,
            behavior: "instant"
        });
    }, [
        r,
        e,
        a
    ]), s;
}, "$e"), hbr = ehe("block"), gbr = ehe("block", "before:content-[counter(line)]", "before:inline-block", "before:[counter-increment:line]", "before:w-6", "before:mr-4", "before:text-[13px]", "before:text-right", "before:text-muted-foreground/50", "before:font-mono", "before:select-none"), bbr = i((r)=>{
    let e = {};
    for (let a of r.split(";")){
        let s = a.indexOf(":");
        if (s > 0) {
            let l = a.slice(0, s).trim(), u = a.slice(s + 1).trim();
            l && u && (e[l] = u);
        }
    }
    return e;
}, "Br"), xjt = np(({ children: r, result: e, language: a, className: s, maxHeight: l, startLine: u, lineNumbers: p = !0, ...m })=>{
    let b = rl(), { isAnimating: g } = Vh(Fb), _ = kjt(l), v = vjt(g, !!_, e), x = Ef(()=>b(gbr), [
        b
    ]), C = Ef(()=>b(hbr), [
        b
    ]), E = Ef(()=>{
        let A = {};
        return e.bg && (A["--sdm-bg"] = e.bg), e.fg && (A["--sdm-fg"] = e.fg), e.rootStyle && Object.assign(A, bbr(e.rootStyle)), A;
    }, [
        e.bg,
        e.fg,
        e.rootStyle
    ]);
    return Tn("div", {
        className: b(s, _ ? "overflow-y-auto" : null, "overflow-x-auto rounded-md border border-border bg-background p-4 text-sm"),
        "data-language": a,
        "data-streamdown": "code-block-body",
        ref: v,
        style: _ ? {
            maxHeight: _
        } : void 0,
        ...m,
        children: Tn("pre", {
            className: b(s, "bg-[var(--sdm-bg,inherit)]", "dark:bg-[var(--shiki-dark-bg,var(--sdm-bg,inherit))]"),
            style: E,
            children: Tn("code", {
                className: p ? b("[counter-increment:line_0] [counter-reset:line]") : void 0,
                style: p && u && u > 1 ? {
                    counterReset: `line ${u - 1}`
                } : void 0,
                children: e.tokens.map((A, $)=>Tn("span", {
                        className: p ? x : C,
                        children: A.length === 0 || A.length === 1 && A[0].content === "" ? `
` : A.map((I, N)=>{
                            let R = {}, P = !!I.bgColor;
                            if (I.color && (R["--sdm-c"] = I.color), I.bgColor && (R["--sdm-tbg"] = I.bgColor), I.htmlStyle) for (let [L, j] of Object.entries(I.htmlStyle))L === "color" ? R["--sdm-c"] = j : L === "background-color" ? (R["--sdm-tbg"] = j, P = !0) : R[L] = j;
                            return Tn("span", {
                                className: b("text-[var(--sdm-c,inherit)]", "dark:text-[var(--shiki-dark,var(--sdm-c,inherit))]", P && "bg-[var(--sdm-tbg)]", P && "dark:bg-[var(--shiki-dark-bg,var(--sdm-tbg))]"),
                                style: R,
                                ...I.htmlAttrs,
                                children: I.content
                            }, N);
                        })
                    }, $))
            })
        })
    });
}), ybr = i(({ className: r, language: e, style: a, isIncomplete: s, ...l })=>{
    let u = rl();
    return Tn("div", {
        className: u("my-4 flex w-full flex-col gap-2 rounded-xl border border-border bg-sidebar p-2", r),
        "data-incomplete": s || void 0,
        "data-language": e,
        "data-streamdown": "code-block",
        style: {
            contentVisibility: "auto",
            containIntrinsicSize: "auto 200px",
            ...a
        },
        ...l
    });
}, "xt"), Cjt = kz({
    code: ""
}), Sjt = i(()=>Vh(Cjt), "qe"), wbr = i(({ language: r })=>{
    let e = rl();
    return Tn("div", {
        className: e("flex h-8 items-center text-muted-foreground text-xs"),
        "data-language": r,
        "data-streamdown": "code-block-header",
        children: Tn("span", {
            className: e("ml-1 font-mono lowercase"),
            children: r
        })
    });
}, "vt"), _br = i((r)=>{
    let e = r.length;
    for(; e > 0 && r[e - 1] === `
`;)e--;
    return r.slice(0, e);
}, "$r"), kbr = rHn(()=>Promise.resolve().then(()=>(D4i(), qgr)).then((r)=>({
            default: r.HighlightedCodeBlockBody
        }))), vbr = i(({ code: r, language: e, className: a, children: s, isIncomplete: l = !1, startLine: u, lineNumbers: p, ...m })=>{
    let b = rl(), { codeBlockMaxHeight: g } = Vh(Fb), _ = Ef(()=>_br(r), [
        r
    ]), v = Ef(()=>({
            bg: "transparent",
            fg: "inherit",
            tokens: _.split(`
`).map((x)=>[
                    {
                        content: x,
                        color: "inherit",
                        bgColor: "transparent",
                        htmlStyle: {},
                        offset: 0
                    }
                ])
        }), [
        _
    ]);
    return Tn(Cjt.Provider, {
        value: {
            code: r
        },
        children: hl(ybr, {
            dir: "ltr",
            isIncomplete: l,
            language: e,
            children: [
                Tn(wbr, {
                    language: e
                }),
                s ? Tn("div", {
                    className: b("pointer-events-none sticky top-2 z-10 -mt-10 flex h-8 items-center justify-end"),
                    children: Tn("div", {
                        className: b("pointer-events-auto flex shrink-0 items-center gap-2 rounded-md border border-sidebar bg-sidebar/80 px-1.5 py-1 supports-[backdrop-filter]:bg-sidebar/70 supports-[backdrop-filter]:backdrop-blur"),
                        "data-streamdown": "code-block-actions",
                        children: s
                    })
                }) : null,
                Tn(d8t, {
                    fallback: Tn(xjt, {
                        className: a,
                        language: e,
                        lineNumbers: p,
                        maxHeight: g,
                        result: v,
                        startLine: u,
                        ...m
                    }),
                    children: Tn(kbr, {
                        className: a,
                        code: _,
                        language: e,
                        lineNumbers: p,
                        maxHeight: g,
                        raw: v,
                        startLine: u,
                        ...m
                    })
                })
            ]
        })
    });
}, "Tt"), xbr = i((r)=>Tn("svg", {
        "aria-hidden": "true",
        color: "currentColor",
        height: 16,
        strokeLinejoin: "round",
        viewBox: "0 0 16 16",
        width: 16,
        ...r,
        children: Tn("path", {
            clipRule: "evenodd",
            d: "M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z",
            fill: "currentColor",
            fillRule: "evenodd"
        })
    }), "po"), Cbr = i((r)=>Tn("svg", {
        "aria-hidden": "true",
        color: "currentColor",
        height: 16,
        strokeLinejoin: "round",
        viewBox: "0 0 16 16",
        width: 16,
        ...r,
        children: Tn("path", {
            clipRule: "evenodd",
            d: "M2.75 0.5C1.7835 0.5 1 1.2835 1 2.25V9.75C1 10.7165 1.7835 11.5 2.75 11.5H3.75H4.5V10H3.75H2.75C2.61193 10 2.5 9.88807 2.5 9.75V2.25C2.5 2.11193 2.61193 2 2.75 2H8.25C8.38807 2 8.5 2.11193 8.5 2.25V3H10V2.25C10 1.2835 9.2165 0.5 8.25 0.5H2.75ZM7.75 4.5C6.7835 4.5 6 5.2835 6 6.25V13.75C6 14.7165 6.7835 15.5 7.75 15.5H13.25C14.2165 15.5 15 14.7165 15 13.75V6.25C15 5.2835 14.2165 4.5 13.25 4.5H7.75ZM7.5 6.25C7.5 6.11193 7.61193 6 7.75 6H13.25C13.3881 6 13.5 6.11193 13.5 6.25V13.75C13.5 13.8881 13.3881 14 13.25 14H7.75C7.61193 14 7.5 13.8881 7.5 13.75V6.25Z",
            fill: "currentColor",
            fillRule: "evenodd"
        })
    }), "fo"), Sbr = i((r)=>Tn("svg", {
        "aria-hidden": "true",
        color: "currentColor",
        height: 16,
        strokeLinejoin: "round",
        viewBox: "0 0 16 16",
        width: 16,
        ...r,
        children: Tn("path", {
            clipRule: "evenodd",
            d: "M8.75 1V1.75V8.68934L10.7197 6.71967L11.25 6.18934L12.3107 7.25L11.7803 7.78033L8.70711 10.8536C8.31658 11.2441 7.68342 11.2441 7.29289 10.8536L4.21967 7.78033L3.68934 7.25L4.75 6.18934L5.28033 6.71967L7.25 8.68934V1.75V1H8.75ZM13.5 9.25V13.5H2.5V9.25V8.5H1V9.25V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V9.25V8.5H13.5V9.25Z",
            fill: "currentColor",
            fillRule: "evenodd"
        })
    }), "go"), Ebr = i((r)=>hl("svg", {
        "aria-hidden": "true",
        color: "currentColor",
        height: 16,
        strokeLinejoin: "round",
        viewBox: "0 0 16 16",
        width: 16,
        ...r,
        children: [
            Tn("path", {
                d: "M8 0V4",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }),
            Tn("path", {
                d: "M8 16V12",
                opacity: "0.5",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }),
            Tn("path", {
                d: "M3.29773 1.52783L5.64887 4.7639",
                opacity: "0.9",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }),
            Tn("path", {
                d: "M12.7023 1.52783L10.3511 4.7639",
                opacity: "0.1",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }),
            Tn("path", {
                d: "M12.7023 14.472L10.3511 11.236",
                opacity: "0.4",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }),
            Tn("path", {
                d: "M3.29773 14.472L5.64887 11.236",
                opacity: "0.6",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }),
            Tn("path", {
                d: "M15.6085 5.52783L11.8043 6.7639",
                opacity: "0.2",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }),
            Tn("path", {
                d: "M0.391602 10.472L4.19583 9.23598",
                opacity: "0.7",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }),
            Tn("path", {
                d: "M15.6085 10.4722L11.8043 9.2361",
                opacity: "0.3",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }),
            Tn("path", {
                d: "M0.391602 5.52783L4.19583 6.7639",
                opacity: "0.8",
                stroke: "currentColor",
                strokeWidth: "1.5"
            })
        ]
    }), "bo"), Abr = i((r)=>Tn("svg", {
        "aria-hidden": "true",
        color: "currentColor",
        height: 16,
        strokeLinejoin: "round",
        viewBox: "0 0 16 16",
        width: 16,
        ...r,
        children: Tn("path", {
            clipRule: "evenodd",
            d: "M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z",
            fill: "currentColor",
            fillRule: "evenodd"
        })
    }), "ho"), Tbr = i((r)=>Tn("svg", {
        "aria-hidden": "true",
        color: "currentColor",
        height: 16,
        strokeLinejoin: "round",
        viewBox: "0 0 16 16",
        width: 16,
        ...r,
        children: Tn("path", {
            clipRule: "evenodd",
            d: "M13.5 8C13.5 4.96643 11.0257 2.5 7.96452 2.5C5.42843 2.5 3.29365 4.19393 2.63724 6.5H5.25H6V8H5.25H0.75C0.335787 8 0 7.66421 0 7.25V2.75V2H1.5V2.75V5.23347C2.57851 2.74164 5.06835 1 7.96452 1C11.8461 1 15 4.13001 15 8C15 11.87 11.8461 15 7.96452 15C5.62368 15 3.54872 13.8617 2.27046 12.1122L1.828 11.5066L3.03915 10.6217L3.48161 11.2273C4.48831 12.6051 6.12055 13.5 7.96452 13.5C11.0257 13.5 13.5 11.0336 13.5 8Z",
            fill: "currentColor",
            fillRule: "evenodd"
        })
    }), "yo"), $br = i((r)=>Tn("svg", {
        "aria-hidden": "true",
        color: "currentColor",
        height: 16,
        strokeLinejoin: "round",
        viewBox: "0 0 16 16",
        width: 16,
        ...r,
        children: Tn("path", {
            clipRule: "evenodd",
            d: "M12.4697 13.5303L13 14.0607L14.0607 13L13.5303 12.4697L9.06065 7.99999L13.5303 3.53032L14.0607 2.99999L13 1.93933L12.4697 2.46966L7.99999 6.93933L3.53032 2.46966L2.99999 1.93933L1.93933 2.99999L2.46966 3.53032L6.93933 7.99999L2.46966 12.4697L1.93933 13L2.99999 14.0607L3.53032 13.5303L7.99999 9.06065L12.4697 13.5303Z",
            fill: "currentColor",
            fillRule: "evenodd"
        })
    }), "wo"), Ibr = i((r)=>Tn("svg", {
        "aria-hidden": "true",
        color: "currentColor",
        height: 16,
        strokeLinejoin: "round",
        viewBox: "0 0 16 16",
        width: 16,
        ...r,
        children: Tn("path", {
            clipRule: "evenodd",
            d: "M13.5 10.25V13.25C13.5 13.3881 13.3881 13.5 13.25 13.5H2.75C2.61193 13.5 2.5 13.3881 2.5 13.25L2.5 2.75C2.5 2.61193 2.61193 2.5 2.75 2.5H5.75H6.5V1H5.75H2.75C1.7835 1 1 1.7835 1 2.75V13.25C1 14.2165 1.7835 15 2.75 15H13.25C14.2165 15 15 14.2165 15 13.25V10.25V9.5H13.5V10.25ZM9 1H9.75H14.2495C14.6637 1 14.9995 1.33579 14.9995 1.75V6.25V7H13.4995V6.25V3.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L12.4388 2.5H9.75H9V1Z",
            fill: "currentColor",
            fillRule: "evenodd"
        })
    }), "Co"), Nbr = i((r)=>Tn("svg", {
        "aria-hidden": "true",
        color: "currentColor",
        height: 16,
        strokeLinejoin: "round",
        viewBox: "0 0 16 16",
        width: 16,
        ...r,
        children: Tn("path", {
            clipRule: "evenodd",
            d: "M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0ZM4.125 5.875H4.75H5.875V4.75V4.125H7.125V4.75V5.875H8.25H8.875V7.125H8.25H7.125V8.25V8.875H5.875V8.25V7.125H4.75H4.125V5.875Z",
            fill: "currentColor",
            fillRule: "evenodd"
        })
    }), "xo"), Mbr = i((r)=>Tn("svg", {
        "aria-hidden": "true",
        color: "currentColor",
        height: 16,
        strokeLinejoin: "round",
        viewBox: "0 0 16 16",
        width: 16,
        ...r,
        children: Tn("path", {
            clipRule: "evenodd",
            d: "M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0ZM4.125 5.875H4.75H8.25H8.875V7.125H8.25H4.75H4.125V5.875Z",
            fill: "currentColor",
            fillRule: "evenodd"
        })
    }), "ko"), DJ = {
    CheckIcon: xbr,
    CopyIcon: Cbr,
    DownloadIcon: Sbr,
    ExternalLinkIcon: Ibr,
    Loader2Icon: Ebr,
    Maximize2Icon: Abr,
    RotateCcwIcon: Tbr,
    XIcon: $br,
    ZoomInIcon: Nbr,
    ZoomOutIcon: Mbr
}, Ejt = kz(DJ), Rbr = i((r, e)=>{
    if (r === e) return !0;
    if (!(r && e)) return r === e;
    let a = Object.keys(r), s = Object.keys(e);
    return a.length !== s.length ? !1 : a.every((l)=>r[l] === e[l]);
}, "Jr"), Ajt = i(({ icons: r, children: e })=>{
    let a = Vm(r), s = Vm(r ? {
        ...DJ,
        ...r
    } : DJ);
    Rbr(a.current, r) || (a.current = r, s.current = r ? {
        ...DJ,
        ...r
    } : DJ);
    let l = s.current;
    return Tn(Ejt.Provider, {
        value: l,
        children: e
    });
}, "Pt"), F4 = i(()=>Vh(Ejt), "H"), Tjt = {
    copyCode: "Copy Code",
    downloadFile: "Download file",
    downloadDiagram: "Download diagram",
    downloadDiagramAsSvg: "Download diagram as SVG",
    downloadDiagramAsPng: "Download diagram as PNG",
    downloadDiagramAsMmd: "Download diagram as MMD",
    viewFullscreen: "View fullscreen",
    exitFullscreen: "Exit fullscreen",
    mermaidFormatSvg: "SVG",
    mermaidFormatPng: "PNG",
    mermaidFormatMmd: "MMD",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    resetView: "Reset zoom and pan",
    copyTable: "Copy table",
    copyTableAsMarkdown: "Copy table as Markdown",
    copyTableAsCsv: "Copy table as CSV",
    copyTableAsTsv: "Copy table as TSV",
    downloadTable: "Download table",
    downloadTableAsCsv: "Download table as CSV",
    downloadTableAsMarkdown: "Download table as Markdown",
    tableFormatMarkdown: "Markdown",
    tableFormatCsv: "CSV",
    tableFormatTsv: "TSV",
    imageNotAvailable: "Image not available",
    downloadImage: "Download image",
    openExternalLink: "Open external link?",
    externalLinkWarning: "You're about to visit an external website.",
    close: "Close",
    copyLink: "Copy link",
    copied: "Copied",
    openLink: "Open link"
}, qMe = kz(Tjt), xC = i(()=>Vh(qMe), "B"), UMe = i(({ onCopy: r, onError: e, timeout: a = 2e3, children: s, className: l, code: u, ...p })=>{
    let m = rl(), [b, g] = hh(!1), _ = Vm(0), { code: v } = Sjt(), { isAnimating: x } = Vh(Fb), C = xC(), E = u ?? v, A = i(async ()=>{
        var N;
        if (typeof window > "u" || !((N = navigator?.clipboard) != null && N.writeText)) {
            e?.(new Error("Clipboard API not available"));
            return;
        }
        try {
            b || (await navigator.clipboard.writeText(E), g(!0), r?.(), _.current = window.setTimeout(()=>g(!1), a));
        } catch (R) {
            e?.(R);
        }
    }, "b");
    _0(()=>()=>{
            window.clearTimeout(_.current);
        }, []);
    let $ = F4(), I = b ? $.CheckIcon : $.CopyIcon;
    return hl(oS, {
        children: [
            Tn("button", {
                "aria-label": C.copyCode,
                className: m("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", l),
                "data-streamdown": "code-block-copy-button",
                disabled: x,
                onClick: A,
                title: C.copyCode,
                type: "button",
                ...p,
                children: s ?? Tn(I, {
                    "aria-hidden": "true",
                    size: 14
                })
            }),
            b && Tn("output", {
                "aria-live": "polite",
                className: "sr-only",
                children: C.copied
            })
        ]
    });
}, "ge"), GMe = i((r, e, a)=>{
    if (typeof r == "boolean") return a;
    let s = r[e];
    if (typeof s != "object") return a;
    let l = s.download;
    return typeof l != "object" ? a : l.filename || a;
}, "ie"), $jt = {
    "1c": "1c",
    "1c-query": "1cq",
    abap: "abap",
    "actionscript-3": "as",
    ada: "ada",
    adoc: "adoc",
    "angular-html": "html",
    "angular-ts": "ts",
    apache: "conf",
    apex: "cls",
    apl: "apl",
    applescript: "applescript",
    ara: "ara",
    asciidoc: "adoc",
    asm: "asm",
    astro: "astro",
    awk: "awk",
    ballerina: "bal",
    bash: "sh",
    bat: "bat",
    batch: "bat",
    be: "be",
    beancount: "beancount",
    berry: "berry",
    bibtex: "bib",
    bicep: "bicep",
    blade: "blade.php",
    bsl: "bsl",
    c: "c",
    "c#": "cs",
    "c++": "cpp",
    cadence: "cdc",
    cairo: "cairo",
    cdc: "cdc",
    clarity: "clar",
    clj: "clj",
    clojure: "clj",
    "closure-templates": "soy",
    cmake: "cmake",
    cmd: "cmd",
    cobol: "cob",
    codeowners: "CODEOWNERS",
    codeql: "ql",
    coffee: "coffee",
    coffeescript: "coffee",
    "common-lisp": "lisp",
    console: "sh",
    coq: "v",
    cpp: "cpp",
    cql: "cql",
    crystal: "cr",
    cs: "cs",
    csharp: "cs",
    css: "css",
    csv: "csv",
    cue: "cue",
    cypher: "cql",
    d: "d",
    dart: "dart",
    dax: "dax",
    desktop: "desktop",
    diff: "diff",
    docker: "dockerfile",
    dockerfile: "dockerfile",
    dotenv: "env",
    "dream-maker": "dm",
    edge: "edge",
    elisp: "el",
    elixir: "ex",
    elm: "elm",
    "emacs-lisp": "el",
    erb: "erb",
    erl: "erl",
    erlang: "erl",
    f: "f",
    "f#": "fs",
    f03: "f03",
    f08: "f08",
    f18: "f18",
    f77: "f77",
    f90: "f90",
    f95: "f95",
    fennel: "fnl",
    fish: "fish",
    fluent: "ftl",
    for: "for",
    "fortran-fixed-form": "f",
    "fortran-free-form": "f90",
    fs: "fs",
    fsharp: "fs",
    fsl: "fsl",
    ftl: "ftl",
    gdresource: "tres",
    gdscript: "gd",
    gdshader: "gdshader",
    genie: "gs",
    gherkin: "feature",
    "git-commit": "gitcommit",
    "git-rebase": "gitrebase",
    gjs: "js",
    gleam: "gleam",
    "glimmer-js": "js",
    "glimmer-ts": "ts",
    glsl: "glsl",
    gnuplot: "plt",
    go: "go",
    gql: "gql",
    graphql: "graphql",
    groovy: "groovy",
    gts: "gts",
    hack: "hack",
    haml: "haml",
    handlebars: "hbs",
    haskell: "hs",
    haxe: "hx",
    hbs: "hbs",
    hcl: "hcl",
    hjson: "hjson",
    hlsl: "hlsl",
    hs: "hs",
    html: "html",
    "html-derivative": "html",
    http: "http",
    hxml: "hxml",
    hy: "hy",
    imba: "imba",
    ini: "ini",
    jade: "jade",
    java: "java",
    javascript: "js",
    jinja: "jinja",
    jison: "jison",
    jl: "jl",
    js: "js",
    json: "json",
    json5: "json5",
    jsonc: "jsonc",
    jsonl: "jsonl",
    jsonnet: "jsonnet",
    jssm: "jssm",
    jsx: "jsx",
    julia: "jl",
    kotlin: "kt",
    kql: "kql",
    kt: "kt",
    kts: "kts",
    kusto: "kql",
    latex: "tex",
    lean: "lean",
    lean4: "lean",
    less: "less",
    liquid: "liquid",
    lisp: "lisp",
    lit: "lit",
    llvm: "ll",
    log: "log",
    logo: "logo",
    lua: "lua",
    luau: "luau",
    make: "mak",
    makefile: "mak",
    markdown: "md",
    marko: "marko",
    matlab: "m",
    md: "md",
    mdc: "mdc",
    mdx: "mdx",
    mediawiki: "wiki",
    mermaid: "mmd",
    mips: "s",
    mipsasm: "s",
    mmd: "mmd",
    mojo: "mojo",
    move: "move",
    nar: "nar",
    narrat: "narrat",
    nextflow: "nf",
    nf: "nf",
    nginx: "conf",
    nim: "nim",
    nix: "nix",
    nu: "nu",
    nushell: "nu",
    objc: "m",
    "objective-c": "m",
    "objective-cpp": "mm",
    ocaml: "ml",
    pascal: "pas",
    perl: "pl",
    perl6: "p6",
    php: "php",
    plsql: "pls",
    po: "po",
    polar: "polar",
    postcss: "pcss",
    pot: "pot",
    potx: "potx",
    powerquery: "pq",
    powershell: "ps1",
    prisma: "prisma",
    prolog: "pl",
    properties: "properties",
    proto: "proto",
    protobuf: "proto",
    ps: "ps",
    ps1: "ps1",
    pug: "pug",
    puppet: "pp",
    purescript: "purs",
    py: "py",
    python: "py",
    ql: "ql",
    qml: "qml",
    qmldir: "qmldir",
    qss: "qss",
    r: "r",
    racket: "rkt",
    raku: "raku",
    razor: "cshtml",
    rb: "rb",
    reg: "reg",
    regex: "regex",
    regexp: "regexp",
    rel: "rel",
    riscv: "s",
    rs: "rs",
    rst: "rst",
    ruby: "rb",
    rust: "rs",
    sas: "sas",
    sass: "sass",
    scala: "scala",
    scheme: "scm",
    scss: "scss",
    sdbl: "sdbl",
    sh: "sh",
    shader: "shader",
    shaderlab: "shader",
    shell: "sh",
    shellscript: "sh",
    shellsession: "sh",
    smalltalk: "st",
    solidity: "sol",
    soy: "soy",
    sparql: "rq",
    spl: "spl",
    splunk: "spl",
    sql: "sql",
    "ssh-config": "config",
    stata: "do",
    styl: "styl",
    stylus: "styl",
    svelte: "svelte",
    swift: "swift",
    "system-verilog": "sv",
    systemd: "service",
    talon: "talon",
    talonscript: "talon",
    tasl: "tasl",
    tcl: "tcl",
    templ: "templ",
    terraform: "tf",
    tex: "tex",
    tf: "tf",
    tfvars: "tfvars",
    toml: "toml",
    ts: "ts",
    "ts-tags": "ts",
    tsp: "tsp",
    tsv: "tsv",
    tsx: "tsx",
    turtle: "ttl",
    twig: "twig",
    typ: "typ",
    typescript: "ts",
    typespec: "tsp",
    typst: "typ",
    v: "v",
    vala: "vala",
    vb: "vb",
    verilog: "v",
    vhdl: "vhdl",
    vim: "vim",
    viml: "vim",
    vimscript: "vim",
    vue: "vue",
    "vue-html": "html",
    "vue-vine": "vine",
    vy: "vy",
    vyper: "vy",
    wasm: "wasm",
    wenyan: "wy",
    wgsl: "wgsl",
    wiki: "wiki",
    wikitext: "wiki",
    wit: "wit",
    wl: "wl",
    wolfram: "wl",
    xml: "xml",
    xsl: "xsl",
    yaml: "yaml",
    yml: "yml",
    zenscript: "zs",
    zig: "zig",
    zsh: "zsh",
    文言: "wy"
}, Pbr = i(({ onDownload: r, onError: e, language: a, children: s, className: l, code: u, ...p })=>{
    let m = rl(), { code: b } = Sjt(), { isAnimating: g, controls: _ } = Vh(Fb), v = xC(), x = F4(), C = u ?? b, E = a && a in $jt ? $jt[a] : "txt", A = `${GMe(_, "code", "file")}.${E}`, $ = "text/plain", I = i(()=>{
        try {
            LB(A, C, $), r?.();
        } catch (N) {
            e?.(N);
        }
    }, "y");
    return Tn("button", {
        "aria-label": v.downloadFile,
        className: m("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", l),
        "data-streamdown": "code-block-download-button",
        disabled: g,
        onClick: I,
        title: v.downloadFile,
        type: "button",
        ...p,
        children: s ?? Tn(x.DownloadIcon, {
            size: 14
        })
    });
}, "It"), Ijt = i(()=>{
    let { Loader2Icon: r } = F4(), e = rl();
    return hl("div", {
        className: e("w-full divide-y divide-border overflow-hidden rounded-xl border border-border"),
        children: [
            Tn("div", {
                className: e("h-[46px] w-full bg-muted/80")
            }),
            Tn("div", {
                className: e("flex w-full items-center justify-center p-4"),
                children: Tn(r, {
                    className: e("size-4 animate-spin")
                })
            })
        ]
    });
}, "Xe"), jbr = /\.[^/.]+$/, Lbr = i(({ node: r, className: e, src: a, alt: s, onLoad: l, onError: u, showControls: p = !0, showDownloadControl: m = !0, ...b })=>{
    let { DownloadIcon: g } = F4(), _ = rl(), v = Vm(null), [x, C] = hh(!1), [E, A] = hh(!1), $ = xC(), I = b.width != null || b.height != null, N = (x || I) && !E && p && m, R = E && !I;
    _0(()=>{
        let z = v.current;
        if (z != null && z.complete) {
            let q = z.naturalWidth > 0;
            C(q), A(!q);
        }
    }, []);
    let P = lw((z)=>{
        C(!0), A(!1), l?.(z);
    }, [
        l
    ]), L = lw((z)=>{
        C(!1), A(!0), u?.(z);
    }, [
        u
    ]), j = i(async ()=>{
        if (a) try {
            let z = await (await fetch(a)).blob(), q = new URL(a, window.location.origin).pathname.split("/").pop() || "", O = q.split(".").pop(), B = q.includes(".") && O !== void 0 && O.length <= 4, V = "";
            if (B) V = q;
            else {
                let H = z.type, Z = "png";
                H.includes("jpeg") || H.includes("jpg") ? Z = "jpg" : H.includes("png") ? Z = "png" : H.includes("svg") ? Z = "svg" : H.includes("gif") ? Z = "gif" : H.includes("webp") && (Z = "webp"), V = `${(s || q || "image").replace(jbr, "")}.${Z}`;
            }
            LB(V, z, z.type);
        } catch  {
            window.open(a, "_blank");
        }
    }, "T");
    return a ? hl("div", {
        className: _("group relative my-4 inline-block"),
        "data-streamdown": "image-wrapper",
        children: [
            Tn("img", {
                alt: s,
                className: _("max-w-full rounded-lg", R && "hidden", e),
                "data-streamdown": "image",
                onError: L,
                onLoad: P,
                ref: v,
                src: a,
                ...b
            }),
            R && Tn("span", {
                className: _("text-muted-foreground text-xs italic"),
                "data-streamdown": "image-fallback",
                children: $.imageNotAvailable
            }),
            p && Tn("div", {
                className: _("pointer-events-none absolute inset-0 hidden rounded-lg bg-black/10 group-hover:block"),
                "data-streamdown": "image-overlay"
            }),
            N && Tn("button", {
                className: _("absolute right-2 bottom-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border bg-background/90 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-background", "opacity-0 group-hover:opacity-100"),
                onClick: j,
                title: $.downloadImage,
                type: "button",
                children: Tn(g, {
                    size: 14
                })
            })
        ]
    }) : null;
}, "So"), FJ = 0, WMe = i(()=>{
    FJ += 1, FJ === 1 && (document.body.style.overflow = "hidden");
}, "be"), HMe = i(()=>{
    FJ = Math.max(0, FJ - 1), FJ === 0 && (document.body.style.overflow = "");
}, "he"), Dbr = i(({ url: r, isOpen: e, onClose: a, onConfirm: s })=>{
    let { CheckIcon: l, CopyIcon: u, ExternalLinkIcon: p, XIcon: m } = F4(), b = rl(), [g, _] = hh(!1), v = xC(), x = lw(async ()=>{
        try {
            await navigator.clipboard.writeText(r), _(!0), setTimeout(()=>_(!1), 2e3);
        } catch  {}
    }, [
        r
    ]), C = lw(()=>{
        s(), a();
    }, [
        s,
        a
    ]);
    if (_0(()=>{
        if (e) {
            WMe();
            let A = i(($)=>{
                $.key === "Escape" && a();
            }, "b");
            return document.addEventListener("keydown", A), ()=>{
                document.removeEventListener("keydown", A), HMe();
            };
        }
    }, [
        e,
        a
    ]), !e || typeof document > "u") return null;
    let E = Tn("div", {
        className: b("fixed inset-0 z-50 flex items-center justify-center bg-background/50 backdrop-blur-sm"),
        "data-streamdown": "link-safety-modal",
        onClick: a,
        onKeyDown: i((A)=>{
            A.key === "Escape" && a();
        }, "onKeyDown"),
        role: "button",
        tabIndex: 0,
        children: hl("div", {
            className: b("relative mx-4 flex w-full max-w-md flex-col gap-4 rounded-xl border bg-background p-6 shadow-lg"),
            onClick: i((A)=>A.stopPropagation(), "onClick"),
            onKeyDown: i((A)=>A.stopPropagation(), "onKeyDown"),
            role: "presentation",
            children: [
                Tn("button", {
                    className: b("absolute top-4 right-4 rounded-md p-1 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"),
                    onClick: a,
                    title: v.close,
                    type: "button",
                    children: Tn(m, {
                        size: 16
                    })
                }),
                hl("div", {
                    className: b("flex flex-col gap-2"),
                    children: [
                        hl("div", {
                            className: b("flex items-center gap-2 font-semibold text-lg"),
                            children: [
                                Tn(p, {
                                    size: 20
                                }),
                                Tn("span", {
                                    children: v.openExternalLink
                                })
                            ]
                        }),
                        Tn("p", {
                            className: b("text-muted-foreground text-sm"),
                            children: v.externalLinkWarning
                        })
                    ]
                }),
                Tn("div", {
                    className: b("break-all rounded-md bg-muted p-3 font-mono text-sm", r.length > 100 && "max-h-32 overflow-y-auto"),
                    children: r
                }),
                hl("div", {
                    className: b("flex gap-2"),
                    children: [
                        Tn("button", {
                            className: b("flex flex-1 items-center justify-center gap-2 rounded-md border bg-background px-4 py-2 font-medium text-sm transition-all hover:bg-muted"),
                            onClick: x,
                            type: "button",
                            children: g ? hl(oS, {
                                children: [
                                    Tn(l, {
                                        size: 14
                                    }),
                                    Tn("span", {
                                        children: v.copied
                                    })
                                ]
                            }) : hl(oS, {
                                children: [
                                    Tn(u, {
                                        size: 14
                                    }),
                                    Tn("span", {
                                        children: v.copyLink
                                    })
                                ]
                            })
                        }),
                        hl("button", {
                            className: b("flex flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-all hover:bg-primary/90"),
                            onClick: C,
                            type: "button",
                            children: [
                                Tn(p, {
                                    size: 14
                                }),
                                Tn("span", {
                                    children: v.openLink
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
    return p8t(E, document.body);
}, "Lo"), ZMe = kz(null), VMe = i(()=>Vh(ZMe), "St"), Fbr = i(()=>{
    var r;
    let e = VMe();
    return (r = e?.code) != null ? r : null;
}, "El"), KMe = i(()=>{
    var r;
    let e = VMe();
    return (r = e?.mermaid) != null ? r : null;
}, "ye"), Obr = i((r)=>{
    var e;
    let a = VMe();
    return a != null && a.renderers && r && (e = a.renderers.find((s)=>Array.isArray(s.language) ? s.language.includes(r) : s.language === r)) != null ? e : null;
}, "Do"), zbr = i((r)=>{
    if (typeof DOMParser > "u" || typeof XMLSerializer > "u") return r;
    let e = iYn(new DOMParser, r, "text/html").querySelector("svg");
    return e ? new XMLSerializer().serializeToString(e) : r;
}, "Ao"), Bbr = i((r, e)=>{
    var a;
    let s = (a = void 0) != null ? a : 5;
    return new Promise((l, u)=>{
        let p = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(r))), m = new Image;
        m.crossOrigin = "anonymous", m.onload = ()=>{
            let b = document.createElement("canvas"), g = m.width * s, _ = m.height * s;
            b.width = g, b.height = _;
            let v = b.getContext("2d");
            if (!v) {
                u(new Error("Failed to create 2D canvas context for PNG export"));
                return;
            }
            v.drawImage(m, 0, 0, g, _), b.toBlob((x)=>{
                if (!x) {
                    u(new Error("Failed to create PNG blob"));
                    return;
                }
                l(x);
            }, "image/png");
        }, m.onerror = ()=>u(new Error("Failed to load SVG image")), m.src = p;
    });
}, "Ho"), Njt = i(({ chart: r, children: e, className: a, onDownload: s, config: l, onError: u })=>{
    let p = rl(), [m, b] = hh(!1), g = Vm(null), { isAnimating: _, controls: v } = Vh(Fb), x = F4(), C = KMe(), E = xC(), A = GMe(v, "mermaid", "diagram"), $ = i(async (I)=>{
        try {
            if (I === "mmd") {
                let z = `${A}.mmd`;
                LB(z, r, "text/plain"), b(!1), s?.(I);
                return;
            }
            if (!C) {
                u?.(new Error("Mermaid plugin not available"));
                return;
            }
            let N = C.getMermaid(l), R = r.split("").reduce((z, q)=>(z << 5) - z + q.charCodeAt(0) | 0, 0), P = `mermaid-${Math.abs(R)}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`, { svg: L } = await N.render(P, r);
            if (!L) {
                u?.(new Error("SVG not found. Please wait for the diagram to render."));
                return;
            }
            let j = zbr(L);
            if (I === "svg") {
                let z = `${A}.svg`;
                LB(z, j, "image/svg+xml"), b(!1), s?.(I);
                return;
            }
            if (I === "png") {
                let z = await Bbr(j);
                LB(`${A}.png`, z, "image/png"), s?.(I), b(!1);
                return;
            }
        } catch (N) {
            u?.(N);
        }
    }, "w");
    return _0(()=>{
        let I = i((N)=>{
            let R = N.composedPath();
            g.current && !R.includes(g.current) && b(!1);
        }, "y");
        return document.addEventListener("mousedown", I), ()=>{
            document.removeEventListener("mousedown", I);
        };
    }, []), hl("div", {
        className: p("relative"),
        ref: g,
        children: [
            Tn("button", {
                "aria-label": E.downloadDiagram,
                className: p("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", a),
                disabled: _,
                onClick: i(()=>b(!m), "onClick"),
                title: E.downloadDiagram,
                type: "button",
                children: e ?? Tn(x.DownloadIcon, {
                    "aria-hidden": "true",
                    size: 14
                })
            }),
            m ? hl("div", {
                className: p("absolute top-full right-0 z-10 mt-1 min-w-[120px] overflow-hidden rounded-md border border-border bg-background shadow-lg"),
                children: [
                    Tn("button", {
                        "aria-label": E.downloadDiagramAsSvg,
                        className: p("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
                        onClick: i(()=>$("svg"), "onClick"),
                        title: E.downloadDiagramAsSvg,
                        type: "button",
                        children: E.mermaidFormatSvg
                    }),
                    Tn("button", {
                        "aria-label": E.downloadDiagramAsPng,
                        className: p("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
                        onClick: i(()=>$("png"), "onClick"),
                        title: E.downloadDiagramAsPng,
                        type: "button",
                        children: E.mermaidFormatPng
                    }),
                    Tn("button", {
                        "aria-label": E.downloadDiagramAsMmd,
                        className: p("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
                        onClick: i(()=>$("mmd"), "onClick"),
                        title: E.downloadDiagramAsMmd,
                        type: "button",
                        children: E.mermaidFormatMmd
                    })
                ]
            }) : null
        ]
    });
}, "Je"), qbr = i(({ chart: r, config: e, onFullscreen: a, onExit: s, className: l, ...u })=>{
    let { Maximize2Icon: p, XIcon: m } = F4(), b = rl(), [g, _] = hh(!1), { isAnimating: v, controls: x } = Vh(Fb), C = xC(), E = (()=>{
        if (typeof x == "boolean") return x;
        let N = x.mermaid;
        return N === !1 ? !1 : N === !0 || N === void 0 ? !0 : N.panZoom !== !1;
    })(), A = (()=>{
        if (typeof x == "boolean") return x;
        let N = x.mermaid;
        return N === !1 ? !1 : N === !0 || N === void 0 ? !0 : N.download !== !1;
    })(), $ = (()=>{
        if (typeof x == "boolean") return x;
        let N = x.mermaid;
        return N === !1 ? !1 : N === !0 || N === void 0 ? !0 : N.copy !== !1;
    })(), I = i(()=>{
        _(!g);
    }, "y");
    return _0(()=>{
        if (g) {
            WMe();
            let N = i((R)=>{
                R.key === "Escape" && _(!1);
            }, "h");
            return document.addEventListener("keydown", N), ()=>{
                document.removeEventListener("keydown", N), HMe();
            };
        }
    }, [
        g
    ]), _0(()=>{
        g ? a?.() : s && s();
    }, [
        g,
        a,
        s
    ]), hl(oS, {
        children: [
            Tn("button", {
                className: b("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", l),
                disabled: v,
                onClick: I,
                title: C.viewFullscreen,
                type: "button",
                ...u,
                "aria-label": C.viewFullscreen,
                children: Tn(p, {
                    "aria-hidden": "true",
                    size: 14
                })
            }),
            g ? p8t(hl("div", {
                "aria-label": C.viewFullscreen,
                "aria-modal": "true",
                className: b("fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"),
                "data-streamdown": "mermaid-fullscreen",
                onClick: I,
                onKeyDown: i((N)=>{
                    N.key === "Escape" && I();
                }, "onKeyDown"),
                role: "dialog",
                children: [
                    hl("div", {
                        className: b("absolute top-4 right-4 z-10 flex items-center gap-1"),
                        onClick: i((N)=>N.stopPropagation(), "onClick"),
                        onKeyDown: i((N)=>N.stopPropagation(), "onKeyDown"),
                        role: "presentation",
                        children: [
                            A ? Tn(Njt, {
                                chart: r,
                                config: e
                            }) : null,
                            $ ? Tn(UMe, {
                                code: r
                            }) : null,
                            Tn("button", {
                                "aria-label": C.exitFullscreen,
                                className: b("rounded-md p-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"),
                                onClick: I,
                                title: C.exitFullscreen,
                                type: "button",
                                children: Tn(m, {
                                    "aria-hidden": "true",
                                    size: 20
                                })
                            })
                        ]
                    }),
                    Tn("div", {
                        className: b("flex size-full items-center justify-center p-4"),
                        onClick: i((N)=>N.stopPropagation(), "onClick"),
                        onKeyDown: i((N)=>N.stopPropagation(), "onKeyDown"),
                        role: "presentation",
                        children: Tn(SLt, {
                            chart: r,
                            className: b("size-full [&_svg]:h-auto [&_svg]:w-auto"),
                            config: e,
                            fullscreen: !0,
                            showControls: E
                        })
                    })
                ]
            }), document.body) : null
        ]
    });
}, "Fo"), i(DMe, "Et"), Mjt = i((r)=>{
    let e = [], a = [], s = r.querySelectorAll("thead th");
    for (let u of s)e.push(DMe(u).trim());
    let l = r.querySelectorAll("tbody tr");
    for (let u of l){
        let p = [], m = u.querySelectorAll("td");
        for (let b of m)p.push(DMe(b).trim());
        a.push(p);
    }
    return {
        headers: e,
        rows: a
    };
}, "we"), Rjt = i((r)=>{
    var e;
    if (typeof r != "object") return ",";
    let a = r.table;
    return typeof a != "object" ? "," : (e = a.csvSeparator) != null ? e : ",";
}, "Re"), Pjt = i((r, e = ",")=>{
    let a;
    e === "auto" ? Intl.NumberFormat().format(1.1).includes(",") ? a = ";" : a = "," : a = e;
    let { headers: s, rows: l } = r, u = i((g)=>{
        let _ = !1;
        for (let v of g)if (v === a || v === '"' || v === `
` || v === "\r") {
            _ = !0;
            break;
        }
        return _ ? `"${g.replace(/"/g, '""')}"` : g;
    }, "s"), p = s.length > 0 ? l.length + 1 : l.length, m = new Array(p), b = 0;
    s.length > 0 && (m[b] = s.map(u).join(a), b += 1);
    for (let g of l)m[b] = g.map(u).join(a), b += 1;
    return m.join(`
`);
}, "ce"), Ubr = i((r)=>{
    let { headers: e, rows: a } = r, s = i((m)=>{
        let b = !1;
        for (let _ of m)if (_ === "	" || _ === `
` || _ === "\r") {
            b = !0;
            break;
        }
        if (!b) return m;
        let g = [];
        for (let _ of m)_ === "	" ? g.push("\\t") : _ === `
` ? g.push("\\n") : _ === "\r" ? g.push("\\r") : g.push(_);
        return g.join("");
    }, "n"), l = e.length > 0 ? a.length + 1 : a.length, u = new Array(l), p = 0;
    e.length > 0 && (u[p] = e.map(s).join("	"), p += 1);
    for (let m of a)u[p] = m.map(s).join("	"), p += 1;
    return u.join(`
`);
}, "Lt"), XMe = i((r)=>{
    let e = !1;
    for (let s of r)if (s === "\\" || s === "|" || s === `
`) {
        e = !0;
        break;
    }
    if (!e) return r;
    let a = [];
    for (let s of r)s === "\\" ? a.push("\\\\") : s === "|" ? a.push("\\|") : s === `
` ? a.push("<br>") : a.push(s);
    return a.join("");
}, "Ue"), jjt = i((r)=>{
    let { headers: e, rows: a } = r;
    if (e.length === 0) return "";
    let s = new Array(a.length + 2), l = 0, u = e.map((m)=>XMe(m));
    s[l] = `| ${u.join(" | ")} |`, l += 1;
    let p = new Array(e.length);
    for(let m = 0; m < e.length; m += 1)p[m] = "---";
    s[l] = `| ${p.join(" | ")} |`, l += 1;
    for (let m of a)if (m.length < e.length) {
        let b = new Array(e.length);
        for(let g = 0; g < e.length; g += 1)b[g] = g < m.length ? XMe(m[g]) : "";
        s[l] = `| ${b.join(" | ")} |`, l += 1;
    } else {
        let b = m.map((g)=>XMe(g));
        s[l] = `| ${b.join(" | ")} |`, l += 1;
    }
    return s.join(`
`);
}, "Ce"), Ljt = i(({ children: r, className: e, onCopy: a, onError: s, timeout: l = 2e3 })=>{
    let u = rl(), [p, m] = hh(!1), [b, g] = hh(!1), _ = Vm(null), v = Vm(0), { isAnimating: x, controls: C } = Vh(Fb), E = xC(), A = Rjt(C), $ = i(async (R)=>{
        var P, L;
        if (typeof window > "u" || !((P = navigator?.clipboard) != null && P.write)) {
            s?.(new Error("Clipboard API not available"));
            return;
        }
        try {
            let j = (L = _.current) == null ? void 0 : L.closest('[data-streamdown="table-wrapper"]'), z = j?.querySelector("table");
            if (!z) {
                s?.(new Error("Table not found"));
                return;
            }
            let q = Mjt(z), O = "";
            R === "csv" ? O = Pjt(q, A) : R === "tsv" ? O = Ubr(q) : O = jjt(q);
            let B = new ClipboardItem({
                "text/plain": new Blob([
                    O
                ], {
                    type: "text/plain"
                }),
                "text/html": new Blob([
                    z.outerHTML
                ], {
                    type: "text/html"
                })
            });
            await navigator.clipboard.write([
                B
            ]), g(!0), m(!1), a?.(R), v.current = window.setTimeout(()=>g(!1), l);
        } catch (j) {
            s?.(j);
        }
    }, "w");
    _0(()=>{
        let R = i((P)=>{
            let L = P.composedPath();
            _.current && !L.includes(_.current) && m(!1);
        }, "g");
        return document.addEventListener("mousedown", R), ()=>{
            document.removeEventListener("mousedown", R), window.clearTimeout(v.current);
        };
    }, []);
    let I = F4(), N = b ? I.CheckIcon : I.CopyIcon;
    return hl("div", {
        className: u("relative"),
        ref: _,
        children: [
            Tn("button", {
                className: u("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", e),
                disabled: x,
                onClick: i(()=>m(!p), "onClick"),
                title: E.copyTable,
                type: "button",
                children: r ?? Tn(N, {
                    height: 14,
                    width: 14
                })
            }),
            p ? hl("div", {
                className: u("absolute top-full right-0 z-20 mt-1 min-w-[120px] overflow-hidden rounded-md border border-border bg-background shadow-lg"),
                children: [
                    Tn("button", {
                        className: u("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
                        onClick: i(()=>$("md"), "onClick"),
                        title: E.copyTableAsMarkdown,
                        type: "button",
                        children: E.tableFormatMarkdown
                    }),
                    Tn("button", {
                        className: u("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
                        onClick: i(()=>$("csv"), "onClick"),
                        title: E.copyTableAsCsv,
                        type: "button",
                        children: E.tableFormatCsv
                    }),
                    Tn("button", {
                        className: u("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
                        onClick: i(()=>$("tsv"), "onClick"),
                        title: E.copyTableAsTsv,
                        type: "button",
                        children: E.tableFormatTsv
                    })
                ]
            }) : null
        ]
    });
}, "Le"), Djt = i(({ children: r, className: e, onDownload: a, onError: s })=>{
    let l = rl(), [u, p] = hh(!1), m = Vm(null), { isAnimating: b, controls: g } = Vh(Fb), _ = xC(), v = F4(), x = Rjt(g), C = i((E)=>{
        var A;
        try {
            let $ = (A = m.current) == null ? void 0 : A.closest('[data-streamdown="table-wrapper"]'), I = $?.querySelector("table");
            if (!I) {
                s?.(new Error("Table not found"));
                return;
            }
            let N = Mjt(I), R = E === "csv" ? Pjt(N, x) : jjt(N), P = E === "csv" ? "csv" : "md", L = `${GMe(g, "table", "table")}.${P}`;
            LB(L, R, E === "csv" ? "text/csv" : "text/markdown"), p(!1), a?.(E);
        } catch ($) {
            s?.($);
        }
    }, "u");
    return _0(()=>{
        let E = i((A)=>{
            let $ = A.composedPath();
            m.current && !$.includes(m.current) && p(!1);
        }, "f");
        return document.addEventListener("mousedown", E), ()=>{
            document.removeEventListener("mousedown", E);
        };
    }, []), hl("div", {
        className: l("relative"),
        ref: m,
        children: [
            Tn("button", {
                className: l("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", e),
                disabled: b,
                onClick: i(()=>p(!u), "onClick"),
                title: _.downloadTable,
                type: "button",
                children: r ?? Tn(v.DownloadIcon, {
                    size: 14
                })
            }),
            u ? hl("div", {
                className: l("absolute top-full right-0 z-20 mt-1 min-w-[120px] overflow-hidden rounded-md border border-border bg-background shadow-lg"),
                children: [
                    Tn("button", {
                        className: l("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
                        onClick: i(()=>C("csv"), "onClick"),
                        title: _.downloadTableAsCsv,
                        type: "button",
                        children: _.tableFormatCsv
                    }),
                    Tn("button", {
                        className: l("w-full px-3 py-2 text-left text-sm transition-colors hover:bg-muted/40"),
                        onClick: i(()=>C("markdown"), "onClick"),
                        title: _.downloadTableAsMarkdown,
                        type: "button",
                        children: _.tableFormatMarkdown
                    })
                ]
            }) : null
        ]
    });
}, "De"), Gbr = i(({ children: r, className: e, showCopy: a = !0, showDownload: s = !0 })=>{
    let { Maximize2Icon: l, XIcon: u } = F4(), p = rl(), [m, b] = hh(!1), { isAnimating: g } = Vh(Fb), _ = xC(), v = i(()=>{
        b(!0);
    }, "p"), x = i(()=>{
        b(!1);
    }, "m");
    return _0(()=>{
        if (m) {
            WMe();
            let C = i((E)=>{
                E.key === "Escape" && b(!1);
            }, "u");
            return document.addEventListener("keydown", C), ()=>{
                document.removeEventListener("keydown", C), HMe();
            };
        }
    }, [
        m
    ]), hl(oS, {
        children: [
            Tn("button", {
                className: p("cursor-pointer p-1 text-muted-foreground transition-all hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50", e),
                disabled: g,
                onClick: v,
                title: _.viewFullscreen,
                type: "button",
                children: Tn(l, {
                    size: 14
                })
            }),
            m ? p8t(Tn("div", {
                "aria-label": _.viewFullscreen,
                "aria-modal": "true",
                className: p("fixed inset-0 z-50 flex flex-col bg-background"),
                "data-streamdown": "table-fullscreen",
                onClick: x,
                onKeyDown: i((C)=>{
                    C.key === "Escape" && x();
                }, "onKeyDown"),
                role: "dialog",
                children: hl("div", {
                    className: p("flex h-full flex-col"),
                    "data-streamdown": "table-wrapper",
                    onClick: i((C)=>C.stopPropagation(), "onClick"),
                    onKeyDown: i((C)=>C.stopPropagation(), "onKeyDown"),
                    role: "presentation",
                    children: [
                        hl("div", {
                            className: p("flex items-center justify-end gap-1 p-4"),
                            children: [
                                a ? Tn(Ljt, {}) : null,
                                s ? Tn(Djt, {}) : null,
                                Tn("button", {
                                    className: p("rounded-md p-1 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"),
                                    onClick: x,
                                    title: _.exitFullscreen,
                                    type: "button",
                                    children: Tn(u, {
                                        size: 20
                                    })
                                })
                            ]
                        }),
                        Tn("div", {
                            className: p("flex-1 overflow-auto p-4 pt-0 [&_thead]:sticky [&_thead]:top-0 [&_thead]:z-10"),
                            children: Tn("table", {
                                className: p("w-full border-collapse border border-border"),
                                "data-streamdown": "table",
                                children: r
                            })
                        })
                    ]
                })
            }), document.body) : null
        ]
    });
}, "Wo"), Wbr = i(({ children: r, className: e, maxHeight: a, showControls: s, showCopy: l = !0, showDownload: u = !0, showFullscreen: p = !0, ...m })=>{
    let b = rl(), { isAnimating: g } = Vh(Fb), _ = kjt(a), v = vjt(g, !!_, r), x = s && l, C = s && u, E = s && p, A = x || C || E;
    return hl("div", {
        className: b("my-4 flex flex-col gap-2 rounded-lg border border-border bg-sidebar p-2"),
        "data-streamdown": "table-wrapper",
        children: [
            A ? hl("div", {
                className: b("flex items-center justify-end gap-1"),
                children: [
                    x ? Tn(Ljt, {}) : null,
                    C ? Tn(Djt, {}) : null,
                    E ? Tn(Gbr, {
                        showCopy: x,
                        showDownload: C,
                        children: r
                    }) : null
                ]
            }) : null,
            Tn("div", {
                className: b("border-collapse overflow-x-auto overflow-y-auto rounded-md border border-border bg-background"),
                ref: v,
                style: _ ? {
                    maxHeight: _
                } : void 0,
                children: Tn("table", {
                    className: b("w-full divide-y divide-border", e),
                    "data-streamdown": "table",
                    ...m,
                    children: r
                })
            })
        ]
    });
}, "Xo"), Hbr = /startLine=(\d+)/, Zbr = /\bnoLineNumbers\b/, Vbr = rHn(()=>Promise.resolve().then(()=>(F4i(), Ggr)).then((r)=>({
            default: r.Mermaid
        }))), Kbr = /language-([^\s]+)/, Xbr = "node", i(Xp, "D"), i(Hgr, "qs"), the = i((r, e)=>typeof r == "boolean" ? r : r[e] !== !1, "Qe"), YMe = i((r, e)=>{
    if (typeof r == "boolean") return r;
    let a = r.table;
    return a === !1 ? !1 : a === !0 || a === void 0 ? !0 : a[e] !== !1;
}, "Ht"), Fjt = i((r, e)=>{
    if (typeof r == "boolean") return r;
    let a = r.code;
    return a === !1 ? !1 : a === !0 || a === void 0 ? !0 : a[e] !== !1;
}, "Jo"), nhe = i((r, e)=>{
    if (typeof r == "boolean") return r;
    let a = r.mermaid;
    return a === !1 ? !1 : a === !0 || a === void 0 ? !0 : a[e] !== !1;
}, "Ge"), Ybr = i((r, e)=>{
    if (typeof r == "boolean") return r;
    let a = r.image;
    return a === !1 ? !1 : a === !0 || a === void 0 ? !0 : a[e] !== !1;
}, "Ws"), JMe = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("ol", {
        className: l("list-inside list-decimal whitespace-normal [li_&]:pl-6", e),
        "data-streamdown": "ordered-list",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), JMe.displayName = "MarkdownOl", Ojt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("li", {
        className: l("py-1 [&>p]:inline", e),
        "data-streamdown": "list-item",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), Ojt.displayName = "MarkdownLi", zjt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("ul", {
        className: l("list-inside list-disc whitespace-normal [li_&]:pl-6", e),
        "data-streamdown": "unordered-list",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), zjt.displayName = "MarkdownUl", Bjt = np(({ className: r, node: e, ...a })=>{
    let s = rl();
    return Tn("hr", {
        className: s("my-6 border-border", r),
        "data-streamdown": "horizontal-rule",
        ...a
    });
}, (r, e)=>Xp(r, e)), Bjt.displayName = "MarkdownHr", qjt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("span", {
        className: l("font-semibold", e),
        "data-streamdown": "strong",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), qjt.displayName = "MarkdownStrong", Jbr = i(({ children: r, className: e, href: a, node: s, ...l })=>{
    let u = rl(), { linkSafety: p } = Vh(Fb), [m, b] = hh(!1), g = a === "streamdown:incomplete-link", _ = lw(async (E)=>{
        if (!(!(p != null && p.enabled && a) || g)) {
            if (E.preventDefault(), p.onLinkCheck && await p.onLinkCheck(a)) {
                window.open(a, "_blank", "noreferrer");
                return;
            }
            b(!0);
        }
    }, [
        p,
        a,
        g
    ]), v = lw(()=>{
        a && window.open(a, "_blank", "noreferrer");
    }, [
        a
    ]), x = lw(()=>{
        b(!1);
    }, []), C = {
        url: a ?? "",
        isOpen: m,
        onClose: x,
        onConfirm: v
    };
    return p != null && p.enabled && a ? hl(oS, {
        children: [
            Tn("button", {
                className: u("wrap-anywhere appearance-none text-left font-medium text-primary underline", e),
                "data-incomplete": g,
                "data-streamdown": "link",
                onClick: _,
                type: "button",
                children: r
            }),
            p.renderModal ? p.renderModal(C) : Tn(Dbr, {
                ...C
            })
        ]
    }) : Tn("a", {
        className: u("wrap-anywhere font-medium text-primary underline", e),
        "data-incomplete": g,
        "data-streamdown": "link",
        href: a,
        rel: "noreferrer",
        target: "_blank",
        ...l,
        children: r
    });
}, "Zs"), Ujt = np(Jbr, (r, e)=>Xp(r, e)), Ujt.displayName = "MarkdownA", Gjt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("h1", {
        className: l("mt-6 mb-2 font-semibold text-3xl", e),
        "data-streamdown": "heading-1",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), Gjt.displayName = "MarkdownH1", Wjt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("h2", {
        className: l("mt-6 mb-2 font-semibold text-2xl", e),
        "data-streamdown": "heading-2",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), Wjt.displayName = "MarkdownH2", Hjt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("h3", {
        className: l("mt-6 mb-2 font-semibold text-xl", e),
        "data-streamdown": "heading-3",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), Hjt.displayName = "MarkdownH3", Zjt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("h4", {
        className: l("mt-6 mb-2 font-semibold text-lg", e),
        "data-streamdown": "heading-4",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), Zjt.displayName = "MarkdownH4", Vjt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("h5", {
        className: l("mt-6 mb-2 font-semibold text-base", e),
        "data-streamdown": "heading-5",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), Vjt.displayName = "MarkdownH5", Kjt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("h6", {
        className: l("mt-6 mb-2 font-semibold text-sm", e),
        "data-streamdown": "heading-6",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), Kjt.displayName = "MarkdownH6", Xjt = np(({ children: r, className: e, node: a, ...s })=>{
    let { controls: l, tableMaxHeight: u } = Vh(Fb), p = the(l, "table"), m = YMe(l, "copy"), b = YMe(l, "download"), g = YMe(l, "fullscreen");
    return Tn(Wbr, {
        className: e,
        maxHeight: u,
        showControls: p,
        showCopy: m,
        showDownload: b,
        showFullscreen: g,
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), Xjt.displayName = "MarkdownTable", Yjt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("thead", {
        className: l("bg-muted/80", e),
        "data-streamdown": "table-header",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), Yjt.displayName = "MarkdownThead", Jjt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("tbody", {
        className: l("divide-y divide-border", e),
        "data-streamdown": "table-body",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), Jjt.displayName = "MarkdownTbody", Qjt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("tr", {
        className: l("border-border", e),
        "data-streamdown": "table-row",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), Qjt.displayName = "MarkdownTr", eLt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("th", {
        className: l("whitespace-nowrap px-4 py-2 text-left font-semibold text-sm", e),
        "data-streamdown": "table-header-cell",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), eLt.displayName = "MarkdownTh", tLt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("td", {
        className: l("px-4 py-2 text-sm", e),
        "data-streamdown": "table-cell",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), tLt.displayName = "MarkdownTd", nLt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("blockquote", {
        className: l("my-4 border-muted-foreground/30 border-l-4 pl-4 text-muted-foreground italic", e),
        "data-streamdown": "blockquote",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), nLt.displayName = "MarkdownBlockquote", rLt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("sup", {
        className: l("text-sm", e),
        "data-streamdown": "superscript",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), rLt.displayName = "MarkdownSup", iLt = np(({ children: r, className: e, node: a, ...s })=>{
    let l = rl();
    return Tn("sub", {
        className: l("text-sm", e),
        "data-streamdown": "subscript",
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), iLt.displayName = "MarkdownSub", aLt = np(({ children: r, className: e, node: a, ...s })=>{
    if ("data-footnotes" in s) {
        let l = i((p)=>{
            var m, b;
            if (!vz(p)) return !1;
            let g = Array.isArray(p.props.children) ? p.props.children : [
                p.props.children
            ], _ = !1, v = !1;
            for (let x of g)if (x) {
                if (typeof x == "string") x.trim() !== "" && (_ = !0);
                else if (vz(x)) if (((m = x.props) == null ? void 0 : m["data-footnote-backref"]) !== void 0) v = !0;
                else {
                    let C = Array.isArray(x.props.children) ? x.props.children : [
                        x.props.children
                    ];
                    for (let E of C){
                        if (typeof E == "string" && E.trim() !== "") {
                            _ = !0;
                            break;
                        }
                        if (vz(E) && ((b = E.props) == null ? void 0 : b["data-footnote-backref"]) === void 0) {
                            _ = !0;
                            break;
                        }
                    }
                }
            }
            return v && !_;
        }, "s"), u = Array.isArray(r) ? r.map((p)=>{
            if (!vz(p)) return p;
            if (p.type === JMe) {
                let m = (Array.isArray(p.props.children) ? p.props.children : [
                    p.props.children
                ]).filter((b)=>!l(b));
                return m.length === 0 ? null : {
                    ...p,
                    props: {
                        ...p.props,
                        children: m
                    }
                };
            }
            return p;
        }) : r;
        return (Array.isArray(u) ? u.some((p)=>p !== null) : u !== null) ? Tn("section", {
            className: e,
            ...s,
            children: u
        }) : null;
    }
    return Tn("section", {
        className: e,
        ...s,
        children: r
    });
}, (r, e)=>Xp(r, e)), aLt.displayName = "MarkdownSection", Qbr = i(({ node: r, className: e, children: a, ...s })=>{
    var l, u;
    let p = rl(), m = !("data-block" in s), { mermaid: b, controls: g, lineNumbers: _ } = Vh(Fb), v = KMe(), x = dbr(), C = e?.match(Kbr), E = (l = C?.at(1)) != null ? l : "", A = Obr(E);
    if (m) return Tn("code", {
        className: p("rounded bg-muted px-1.5 py-0.5 font-mono text-sm", e),
        "data-streamdown": "inline-code",
        ...s,
        children: a
    });
    let $ = (u = r?.properties) == null ? void 0 : u.metastring, I = $?.match(Hbr), N = I ? Number.parseInt(I[1], 10) : void 0, R = N !== void 0 && N >= 1 ? N : void 0, P = !($ && Zbr.test($)) && _ !== !1, L = "";
    if (vz(a) && a.props && typeof a.props == "object" && "children" in a.props && typeof a.props.children == "string" ? L = a.props.children : typeof a == "string" && (L = a), A) {
        let V = A.component;
        return Tn(d8t, {
            fallback: Tn(Ijt, {}),
            children: Tn(V, {
                code: L,
                isIncomplete: x,
                language: E,
                meta: $
            })
        });
    }
    if (E === "mermaid" && v) {
        let V = the(g, "mermaid"), H = nhe(g, "download"), Z = nhe(g, "copy"), K = nhe(g, "fullscreen"), Y = nhe(g, "panZoom"), J = V && (H || Z || K);
        return Tn(d8t, {
            fallback: Tn(Ijt, {}),
            children: hl("div", {
                className: p("group relative my-4 flex w-full flex-col gap-2 rounded-xl border border-border bg-sidebar p-2", e),
                "data-streamdown": "mermaid-block",
                children: [
                    Tn("div", {
                        className: p("flex h-8 items-center text-muted-foreground text-xs"),
                        children: Tn("span", {
                            className: p("ml-1 font-mono lowercase"),
                            children: "mermaid"
                        })
                    }),
                    J ? Tn("div", {
                        className: p("pointer-events-none sticky top-2 z-10 -mt-10 flex h-8 items-center justify-end"),
                        children: hl("div", {
                            className: p("pointer-events-auto flex shrink-0 items-center gap-2 rounded-md border border-sidebar bg-sidebar/80 px-1.5 py-1 supports-[backdrop-filter]:bg-sidebar/70 supports-[backdrop-filter]:backdrop-blur"),
                            "data-streamdown": "mermaid-block-actions",
                            children: [
                                H ? Tn(Njt, {
                                    chart: L,
                                    config: b?.config
                                }) : null,
                                Z ? Tn(UMe, {
                                    code: L
                                }) : null,
                                K ? Tn(qbr, {
                                    chart: L,
                                    config: b?.config
                                }) : null
                            ]
                        })
                    }) : null,
                    Tn("div", {
                        className: p("rounded-md border border-border bg-background"),
                        children: Tn(Vbr, {
                            chart: L,
                            config: b?.config,
                            showControls: Y
                        })
                    })
                ]
            })
        });
    }
    let j = the(g, "code"), z = Fjt(g, "download"), q = Fjt(g, "copy"), { "data-block": O, ...B } = s;
    return Tn(vbr, {
        className: e,
        code: L,
        isIncomplete: x,
        language: E,
        lineNumbers: P,
        startLine: R,
        ...B,
        children: j ? hl(oS, {
            children: [
                z ? Tn(Pbr, {
                    code: L,
                    language: E
                }) : null,
                q ? Tn(UMe, {}) : null
            ]
        }) : null
    });
}, "Xs"), oLt = np(Qbr, (r, e)=>Xp(r, e) && Hgr(r.node, e.node)), oLt.displayName = "MarkdownCode", e1r = i(({ node: r, className: e, ...a })=>{
    let { controls: s } = Vh(Fb), l = the(s, "image"), u = l && Ybr(s, "download");
    return Tn(Lbr, {
        className: e,
        node: r,
        showControls: l,
        showDownloadControl: u,
        ...a
    });
}, "Ks"), sLt = np(e1r, (r, e)=>Xp(r, e)), sLt.displayName = "MarkdownImg", cLt = np(({ children: r, node: e, ...a })=>{
    let s = (Array.isArray(r) ? r : [
        r
    ]).filter((l)=>l != null && l !== "");
    if (s.length === 1 && vz(s[0])) {
        let l = s[0].props.node, u = l?.tagName;
        if (u === "img") return Tn(oS, {
            children: r
        });
        if (u === "code" && "data-block" in s[0].props) return Tn(oS, {
            children: r
        });
    }
    return Tn("p", {
        ...a,
        children: r
    });
}, (r, e)=>Xp(r, e)), cLt.displayName = "MarkdownParagraph", t1r = {
    ol: JMe,
    li: Ojt,
    ul: zjt,
    hr: Bjt,
    strong: qjt,
    a: Ujt,
    h1: Gjt,
    h2: Wjt,
    h3: Hjt,
    h4: Zjt,
    h5: Vjt,
    h6: Kjt,
    table: Xjt,
    thead: Yjt,
    tbody: Jjt,
    tr: Qjt,
    th: eLt,
    td: tLt,
    blockquote: nLt,
    code: oLt,
    img: sLt,
    pre: i(({ children: r })=>vz(r) ? xdi(r, {
            "data-block": "true"
        }) : r, "pre"),
    sup: rLt,
    sub: iLt,
    p: cLt,
    section: aLt
}, n1r = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/, r1r = /\p{L}/u, i(djt, "He"), i1r = /^[ \t]{0,3}(`{3,}|~{3,})/, a1r = /^\|?[ \t]*:?-{1,}:?[ \t]*(\|[ \t]*:?-{1,}:?[ \t]*)*\|?$/, lLt = i((r)=>{
    let e = r.split(`
`), a = null, s = 0;
    for (let l of e){
        let u = i1r.exec(l);
        if (a === null) {
            if (u) {
                let p = u[1];
                a = p[0], s = p.length;
            }
        } else if (u) {
            let p = u[1], m = p[0], b = p.length;
            m === a && b >= s && (a = null, s = 0);
        }
    }
    return a !== null;
}, "Ot"), o1r = i((r)=>{
    let e = r.split(`
`);
    for (let a of e){
        let s = a.trim();
        if (s.length > 0 && s.includes("|") && a1r.test(s)) return !0;
    }
    return !1;
}, "kn"), s1r = i(()=>(r)=>{
        R4(r, "html", (e, a, s)=>{
            !s || typeof a != "number" || (s.children[a] = {
                type: "text",
                value: e.value
            });
        });
    }, "vn"), uLt = [], dLt = {
    allowDangerousHtml: !0
}, rhe = new WeakMap, c1r = (pLt = class {
    constructor(){
        this.cache = new Map, this.keyCache = new WeakMap, this.maxSize = 100;
    }
    generateCacheKey(r) {
        let e = this.keyCache.get(r);
        if (e) return e;
        let a = r.rehypePlugins, s = r.remarkPlugins, l = r.remarkRehypeOptions;
        if (!(a || s || l)) {
            let _ = "default";
            return this.keyCache.set(r, _), _;
        }
        let u = i((_)=>{
            if (!_ || _.length === 0) return "";
            let v = "";
            for(let x = 0; x < _.length; x += 1){
                let C = _[x];
                if (x > 0 && (v += ","), Array.isArray(C)) {
                    let [E, A] = C;
                    if (typeof E == "function") {
                        let $ = rhe.get(E);
                        $ || ($ = E.name, rhe.set(E, $)), v += $;
                    } else v += String(E);
                    v += ":", v += JSON.stringify(A);
                } else if (typeof C == "function") {
                    let E = rhe.get(C);
                    E || (E = C.name, rhe.set(C, E)), v += E;
                } else v += String(C);
            }
            return v;
        }, "a"), p = u(a), m = u(s), b = l ? JSON.stringify(l) : "", g = `${m}::${p}::${b}`;
        return this.keyCache.set(r, g), g;
    }
    get(r) {
        let e = this.generateCacheKey(r), a = this.cache.get(e);
        return a && (this.cache.delete(e), this.cache.set(e, a)), a;
    }
    set(r, e) {
        let a = this.generateCacheKey(r);
        if (this.cache.size >= this.maxSize) {
            let s = this.cache.keys().next().value;
            s && this.cache.delete(s);
        }
        this.cache.set(a, e);
    }
    clear() {
        this.cache.clear();
    }
}, i(pLt, "Ft"), pLt), mLt = new c1r, fLt = i((r)=>{
    let e = l1r(r), a = r.children || "", s = e.runSync(e.parse(a), a);
    return g1r(s, r);
}, "jt"), l1r = i((r)=>{
    let e = mLt.get(r);
    if (e) return e;
    let a = d1r(r);
    return mLt.set(r, a), a;
}, "la"), u1r = i((r)=>r.some((e)=>Array.isArray(e) ? e[0] === BNe : e === BNe), "ca"), d1r = i((r)=>{
    let e = r.rehypePlugins || uLt, a = r.remarkPlugins || uLt, s = u1r(e) ? a : [
        ...a,
        s1r
    ], l = r.remarkRehypeOptions ? {
        ...dLt,
        ...r.remarkRehypeOptions
    } : dLt;
    return rgr().use(Jfr).use(s).use(jhr, l).use(e);
}, "da"), p1r = i((r)=>r, "Nn"), m1r = i((r, e, a, s)=>{
    a ? r.children.splice(e, 1) : r.children[e] = {
        type: "text",
        value: s
    };
}, "ma"), f1r = i((r, e)=>{
    var a;
    for(let s in gMe)if (Object.hasOwn(gMe, s) && Object.hasOwn(r.properties, s)) {
        let l = r.properties[s], u = gMe[s];
        (u === null || u.includes(r.tagName)) && (r.properties[s] = (a = e(String(l || ""), s, r)) != null ? a : void 0);
    }
}, "ua"), h1r = i((r, e, a, s, l, u)=>{
    let p = !1;
    return s ? p = !s.includes(r.tagName) : l && (p = l.includes(r.tagName)), !p && u && typeof e == "number" && (p = !u(r, e, a)), p;
}, "pa"), g1r = i((r, e)=>{
    let { allowElement: a, allowedElements: s, disallowedElements: l, skipHtml: u, unwrapDisallowed: p, urlTransform: m } = e;
    if (a || s || l || u || m) {
        let b = m || p1r;
        R4(r, (g, _, v)=>{
            if (g.type === "raw" && v && typeof _ == "number") return m1r(v, _, u, g.value), _;
            if (g.type === "element" && (f1r(g, b), h1r(g, _, v, s, l, a) && v && typeof _ == "number")) return p && g.children ? v.children.splice(_, 1, ...g.children) : v.children.splice(_, 1), _;
        });
    }
    return efr(r, {
        Fragment: oS,
        components: e.components,
        ignoreInvalidStyle: !0,
        jsx: Tn,
        jsxs: hl,
        passKeys: !0,
        passNode: !0
    });
}, "fa"), b1r = /\[\^[\w-]{1,200}\](?!:)/, y1r = /\[\^[\w-]{1,200}\]:/, w1r = /<([A-Za-z][\w:-]*)[\s>/]/, _1r = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]), hLt = new Map, gLt = new Map, k1r = i((r)=>{
    let e = r.toLowerCase(), a = hLt.get(e);
    if (a) return a;
    let s = new RegExp(`<${e}(?=[\\s>/])[^>]*>`, "gi");
    return hLt.set(e, s), s;
}, "Ca"), v1r = i((r)=>{
    let e = r.toLowerCase(), a = gLt.get(e);
    if (a) return a;
    let s = new RegExp(`</${e}(?=[\\s>])[^>]*>`, "gi");
    return gLt.set(e, s), s;
}, "xa"), bLt = i((r, e)=>{
    if (_1r.has(e.toLowerCase())) return 0;
    let a = r.match(k1r(e));
    if (!a) return 0;
    let s = 0;
    for (let l of a)l.trimEnd().endsWith("/>") || (s += 1);
    return s;
}, "En"), yLt = i((r, e)=>{
    let a = r.match(v1r(e));
    return a ? a.length : 0;
}, "Ln"), x1r = i((r)=>{
    let e = 0;
    for(let a = 0; a < r.length - 1; a += 1)r[a] === "$" && r[a + 1] === "$" && (e += 1, a += 1);
    return e;
}, "ka"), C1r = i((r)=>{
    let e = b1r.test(r), a = y1r.test(r);
    if (e || a) return [
        r
    ];
    let s = ak.lex(r, {
        gfm: !0
    }), l = [], u = [], p = !1;
    for (let m of s){
        let b = m.raw, g = l.length;
        if (u.length > 0) {
            l[g - 1] += b;
            let _ = u.at(-1), v = bLt(b, _), x = yLt(b, _);
            for(let C = 0; C < v; C += 1)u.push(_);
            for(let C = 0; C < x; C += 1)u.length > 0 && u.at(-1) === _ && u.pop();
            continue;
        }
        if (m.type === "html" && m.block) {
            let _ = b.match(w1r);
            if (_) {
                let v = _[1], x = bLt(b, v), C = yLt(b, v);
                x > C && u.push(v);
            }
        }
        if (g > 0 && !p) {
            let _ = l[g - 1];
            if (x1r(_) % 2 === 1) {
                l[g - 1] = _ + b;
                continue;
            }
        }
        l.push(b), m.type !== "space" && (p = m.type === "code");
    }
    return l;
}, "_t"), S1r = /^\n*/, E1r = /\n*$/, QMe = /\n\n/g, A1r = i((r, e, a)=>{
    if (!e.includes(`
`)) return r + e + a;
    let s = e.replace(QMe, `
<!---->
`).replace(S1r, `

`).replace(E1r, `

`);
    return `${r}${s}${a}

`;
}, "Pa"), T1r = i((r, e)=>{
    let a = new RegExp(`<(${e})(?=[\\s>/])([^>]*)>`, "gi"), s = "", l = 0, u = a.exec(r);
    for(; u;){
        let p = u[0], m = u[1], b = u.index + p.length, g = r.slice(b);
        if (new RegExp(`</${m}\\s*>`, "i").test(g)) {
            u = a.exec(r);
            continue;
        }
        if (s += r.slice(l, u.index), g.length === 0) {
            s += p, l = b, u = a.exec(r);
            continue;
        }
        if (g.startsWith(`

`)) {
            let x = g.slice(2).replace(QMe, `
<!---->
`);
            s += `${p}

${x}`, l = r.length;
            break;
        }
        if (!g.startsWith(`
`)) {
            s += p, l = b, u = a.exec(r);
            continue;
        }
        let _ = g.slice(1);
        if (_.trim().length === 0) {
            s += p, l = b, u = a.exec(r);
            continue;
        }
        let v = _.replace(QMe, `
<!---->
`);
        s += `${p}

${v}`, l = r.length;
        break;
    }
    return l === 0 ? r : s + r.slice(l);
}, "Ma"), $1r = i((r, e)=>{
    if (!e.length) return r;
    let a = r;
    for (let s of e){
        let l = new RegExp(`(<${s}(?=[\\s>/])[^>]*>)([\\s\\S]*?)(</${s}\\s*>)`, "gi");
        a = a.replace(l, (u, p, m, b)=>A1r(p, m, b)), a = T1r(a, s);
    }
    return a;
}, "Dn"), I1r = /([\\`*_~[\]|])/g, N1r = i((r)=>r.replace(I1r, "\\$1"), "Na"), M1r = i((r, e)=>{
    if (!e.length) return r;
    let a = r;
    for (let s of e){
        let l = new RegExp(`(<${s}(?=[\\s>/])[^>]*>)([\\s\\S]*?)(</${s}\\s*>)`, "gi");
        a = a.replace(l, (u, p, m, b)=>{
            let g = N1r(m).replace(/\n\n/g, "&#10;&#10;");
            return p + g + b;
        });
    }
    return a;
}, "An"), R1r = new Set([
    "blockquote",
    "dd",
    "dt",
    "figcaption",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "li",
    "p",
    "td",
    "th"
]), wLt = new Set([
    "code",
    "kbd",
    "pre",
    "samp",
    "var"
]), i(pjt, "Bn"), i(Zgr, "On"), _Lt = i((r)=>r.type === "text" ? r.value : "children" in r && Array.isArray(r.children) ? r.children.map(_Lt).join("") : "", "Vn"), P1r = i((r)=>(e)=>{
        if (!r || r.length === 0) return;
        let a = new Set(r.map((s)=>s.toLowerCase()));
        R4(e, "element", (s)=>{
            if (a.has(s.tagName.toLowerCase())) {
                let l = _Lt(s);
                s.children = l ? [
                    {
                        type: "text",
                        value: l
                    }
                ] : [];
            }
        });
    }, "Fn"), j1r = i(()=>(r)=>{
        R4(r, "code", (e)=>{
            var a, s;
            e.meta && (e.data = (a = e.data) != null ? a : {}, e.data.hProperties = {
                ...(s = e.data.hProperties) != null ? s : {},
                metastring: e.meta
            });
        });
    }, "jn"), L1r = /^[ \t]*<[\w!/?-]/, D1r = /(^|\n)[ \t]{4,}(?=<[\w!/?-])/g, F1r = i((r)=>typeof r != "string" || r.length === 0 || !L1r.test(r) ? r : r.replace(D1r, "$1"), "za"), ihe = {
    ...j4,
    clobberPrefix: "",
    protocols: {
        ...j4.protocols,
        href: [
            ...(z1r = (O1r = j4.protocols) == null ? void 0 : O1r.href) != null ? z1r : [],
            "tel",
            "streamdown"
        ]
    },
    attributes: {
        ...j4.attributes,
        code: [
            ...(q1r = (B1r = j4.attributes) == null ? void 0 : B1r.code) != null ? q1r : [],
            "metastring"
        ]
    }
}, OJ = {
    raw: BNe,
    sanitize: [
        Nfe,
        ihe
    ],
    harden: [
        iir,
        {
            allowedImagePrefixes: [
                "*"
            ],
            allowedLinkPrefixes: [
                "*"
            ],
            allowedProtocols: [
                "*"
            ],
            defaultOrigin: void 0,
            allowDataImages: !0
        }
    ]
}, U1r = {
    gfm: [
        zRt,
        {}
    ],
    codeMeta: j1r
}, kLt = Object.values(OJ), G1r = Object.values(U1r), W1r = {
    block: " \u258B",
    circle: " \u25CF"
}, vLt = [
    "github-light",
    "github-dark"
], xLt = {
    enabled: !0
}, H1r = {
    codeBlockMaxHeight: 400,
    shikiTheme: vLt,
    controls: !0,
    isAnimating: !1,
    lineNumbers: !0,
    mode: "streaming",
    mermaid: void 0,
    linkSafety: xLt,
    tableMaxHeight: 300
}, Fb = kz(H1r), ahe = np(({ content: r, shouldParseIncompleteMarkdown: e, shouldNormalizeHtmlIndentation: a, index: s, isIncomplete: l, dir: u, animatePlugin: p, ...m })=>{
    iHn(()=>{
        p?.commit();
    });
    let b = typeof r == "string" && a ? F1r(r) : r, g = Tn(fLt, {
        ...m,
        children: b
    });
    return Tn(_jt.Provider, {
        value: l,
        children: u ? Tn("div", {
            dir: u,
            style: {
                display: "contents"
            },
            children: g
        }) : g
    });
}, (r, e)=>{
    if (r.content !== e.content || r.shouldNormalizeHtmlIndentation !== e.shouldNormalizeHtmlIndentation || r.index !== e.index || r.isIncomplete !== e.isIncomplete || r.dir !== e.dir) return !1;
    if (r.components !== e.components) {
        let a = Object.keys(r.components || {}), s = Object.keys(e.components || {});
        if (a.length !== s.length || a.some((l)=>{
            var u, p;
            return ((u = r.components) == null ? void 0 : u[l]) !== ((p = e.components) == null ? void 0 : p[l]);
        })) return !1;
    }
    return !(r.rehypePlugins !== e.rehypePlugins || r.remarkPlugins !== e.remarkPlugins || !!r.animatePlugin != !!e.animatePlugin);
}), ahe.displayName = "Block", CLt = np(({ children: r, mode: e = "streaming", dir: a, parseIncompleteMarkdown: s = !0, normalizeHtmlIndentation: l = !1, components: u, rehypePlugins: p = kLt, remarkPlugins: m = G1r, className: b, shikiTheme: g, mermaid: _, codeBlockMaxHeight: v = 400, controls: x = !0, isAnimating: C = !1, tableMaxHeight: E = 300, animated: A, BlockComponent: $ = ahe, parseMarkdownIntoBlocksFn: I = C1r, caret: N, plugins: R, remend: P, linkSafety: L = xLt, lineNumbers: j = !0, allowedTags: z, literalTagContent: q, translations: O, icons: B, prefix: V, onAnimationStart: H, onAnimationEnd: Z, ...K })=>{
    let Y = vdi(), J = Ef(()=>mbr(V), [
        V
    ]), re = Vm(null), ne = Vm(H), ae = Vm(Z);
    ne.current = H, ae.current = Z, _0(()=>{
        var Ze, Ie, Me;
        if (e === "static") return;
        let et = re.current;
        if (re.current = C, et === null) {
            C && ((Ze = ne.current) == null || Ze.call(ne));
            return;
        }
        C && !et ? (Ie = ne.current) == null || Ie.call(ne) : !C && et && ((Me = ae.current) == null || Me.call(ae));
    }, [
        C,
        e
    ]);
    let W = Ef(()=>z ? Object.keys(z) : [], [
        z
    ]), oe = Ef(()=>{
        if (typeof r != "string") return "";
        let Ze = e === "streaming" && s ? rPt(r, P) : r;
        return q && q.length > 0 && (Ze = M1r(Ze, q)), W.length > 0 && (Ze = $1r(Ze, W)), Ze;
    }, [
        r,
        e,
        s,
        P,
        W,
        q
    ]), ce = Ef(()=>I(oe), [
        oe,
        I
    ]), Q = Ef(()=>a === "auto" ? ce.map(djt) : void 0, [
        ce,
        a
    ]), le = Ef(()=>ce.map((Ze, Ie)=>`${Y}-${Ie}`), [
        ce.length,
        Y
    ]), he = Ef(()=>A === !0 ? "true" : A ? JSON.stringify(A) : "", [
        A
    ]), me = Vm(null), be = Vm([]), ue = Vm([]), ge = Vm(null), _e = Vm("");
    if (he) {
        if (_e.current !== he) {
            _e.current = he;
            let Ze = he !== "true" ? A.maxBacklogMs : void 0;
            me.current = ljt({
                maxBacklogMs: Ze
            }), be.current = [], ue.current = [];
        } else me.current || (me.current = ljt());
        C && me.current && me.current.beginPass(me.current.now());
    } else me.current = null, be.current = [], ue.current = [], _e.current = "";
    iHn(()=>{
        var Ze;
        C && ((Ze = me.current) == null || Ze.commitPass());
    });
    let ve = Ef(()=>{
        var Ze, Ie;
        return {
            codeBlockMaxHeight: v,
            shikiTheme: (Ie = g ?? ((Ze = R?.code) == null ? void 0 : Ze.getThemes())) != null ? Ie : vLt,
            controls: x,
            isAnimating: C,
            lineNumbers: j,
            mode: e,
            mermaid: _,
            linkSafety: L,
            tableMaxHeight: E
        };
    }, [
        v,
        g,
        x,
        C,
        j,
        e,
        _,
        L,
        R?.code,
        E
    ]), Se = Ef(()=>O ? JSON.stringify(O) : "", [
        O
    ]), Ne = Ef(()=>({
            ...Tjt,
            ...O
        }), [
        Se
    ]), je = Ef(()=>{
        let { inlineCode: Ze, ...Ie } = u ?? {}, Me = {
            ...t1r,
            ...Ie
        };
        if (Ze) {
            let et = Me.code;
            Me.code = (Ue)=>"data-block" in Ue ? et ? aHn(et, Ue) : null : aHn(Ze, Ue);
        }
        return Me;
    }, [
        u
    ]), tt = Ef(()=>{
        let Ze = [];
        return R != null && R.cjk && (Ze = [
            ...Ze,
            ...R.cjk.remarkPluginsBefore
        ]), Ze = [
            ...Ze,
            ...m
        ], R != null && R.cjk && (Ze = [
            ...Ze,
            ...R.cjk.remarkPluginsAfter
        ]), R != null && R.math && (Ze = [
            ...Ze,
            R.math.remarkPlugin
        ]), Ze;
    }, [
        m,
        R?.math,
        R?.cjk
    ]), Ke = Ef(()=>{
        var Ze;
        let Ie = p;
        if (z && Object.keys(z).length > 0 && p === kLt) {
            let Me = {
                ...ihe,
                tagNames: [
                    ...(Ze = ihe.tagNames) != null ? Ze : [],
                    ...Object.keys(z)
                ],
                attributes: {
                    ...ihe.attributes,
                    ...z
                }
            };
            Ie = [
                OJ.raw,
                [
                    Nfe,
                    Me
                ],
                OJ.harden
            ];
        }
        return q && q.length > 0 && (Ie = [
            ...Ie,
            [
                P1r,
                q
            ]
        ]), R != null && R.math && (Ie = [
            ...Ie,
            R.math.rehypePlugin
        ]), a === "auto" && e === "static" && (Ie = [
            ...Ie,
            Zgr
        ]), Ie;
    }, [
        p,
        R?.math,
        z,
        q,
        a,
        e
    ]), nt = Ef(()=>{
        if (!C || ce.length === 0) return !1;
        let Ze = ce.at(-1);
        return lLt(Ze) || o1r(Ze);
    }, [
        C,
        ce
    ]), ut = Ef(()=>N && C && !nt ? {
            "--streamdown-caret": `"${W1r[N]}"`
        } : void 0, [
        N,
        C,
        nt
    ]), it = i((Ze)=>{
        let Ie = null;
        if (me.current && C) {
            if (!be.current[Ze]) {
                let et = he && he !== "true" ? A : {}, { maxBacklogMs: Ue, ...Be } = et;
                be.current[Ze] = ujt({
                    ...Be,
                    timeline: me.current
                });
            }
            Ie = be.current[Ze];
        }
        ge.current !== Ke && (ue.current = [], ge.current = Ke), Ie && !ue.current[Ze] && (ue.current[Ze] = [
            ...Ke,
            Ie.rehypePlugin
        ]);
        let Me = Ie && ue.current[Ze] ? ue.current[Ze] : Ke;
        return {
            blockAnimatePlugin: Ie,
            blockRehypePlugins: Me
        };
    }, "ar");
    return e === "static" ? Tn(qMe.Provider, {
        value: Ne,
        children: Tn(ZMe.Provider, {
            value: R ?? null,
            children: Tn(Fb.Provider, {
                value: ve,
                children: Tn(Ajt, {
                    icons: B,
                    children: Tn(BMe.Provider, {
                        value: J,
                        children: Tn("div", {
                            className: J("space-y-4 whitespace-normal [&>*:first-child]:mt-0 [&>*:last-child]:mb-0", b),
                            dir: a === "auto" ? void 0 : a,
                            children: Tn(fLt, {
                                components: je,
                                rehypePlugins: Ke,
                                remarkPlugins: tt,
                                ...K,
                                children: oe
                            })
                        })
                    })
                })
            })
        })
    }) : Tn(qMe.Provider, {
        value: Ne,
        children: Tn(ZMe.Provider, {
            value: R ?? null,
            children: Tn(Fb.Provider, {
                value: ve,
                children: Tn(Ajt, {
                    icons: B,
                    children: Tn(BMe.Provider, {
                        value: J,
                        children: hl("div", {
                            className: J("space-y-4 whitespace-normal [&>*:first-child]:mt-0 [&>*:last-child]:mb-0", N && !nt ? "[&>*:last-child]:after:inline [&>*:last-child]:after:align-baseline [&>*:last-child]:after:content-[var(--streamdown-caret)]" : null, b),
                            style: ut,
                            children: [
                                ce.length === 0 && N && C && Tn("span", {}),
                                ce.map((Ze, Ie)=>{
                                    var Me;
                                    let et = Ie === ce.length - 1, Ue = C && et && lLt(Ze), { blockAnimatePlugin: Be, blockRehypePlugins: Fe } = it(Ie);
                                    return Tn($, {
                                        animatePlugin: Be,
                                        components: je,
                                        content: Ze,
                                        dir: (Me = Q?.[Ie]) != null ? Me : a !== "auto" ? a : void 0,
                                        index: Ie,
                                        isIncomplete: Ue,
                                        rehypePlugins: Fe,
                                        remarkPlugins: tt,
                                        shouldNormalizeHtmlIndentation: l,
                                        shouldParseIncompleteMarkdown: s,
                                        ...K
                                    }, le[Ie]);
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}, (r, e)=>r.children === e.children && r.shikiTheme === e.shikiTheme && r.isAnimating === e.isAnimating && r.animated === e.animated && r.mode === e.mode && r.plugins === e.plugins && r.className === e.className && r.linkSafety === e.linkSafety && r.lineNumbers === e.lineNumbers && r.codeBlockMaxHeight === e.codeBlockMaxHeight && r.tableMaxHeight === e.tableMaxHeight && r.normalizeHtmlIndentation === e.normalizeHtmlIndentation && r.literalTagContent === e.literalTagContent && JSON.stringify(r.translations) === JSON.stringify(e.translations) && r.prefix === e.prefix && r.dir === e.dir), CLt.displayName = "Streamdown", Z1r = i(({ children: r, className: e, minZoom: a = .5, maxZoom: s = 3, zoomStep: l = .1, showControls: u = !0, initialZoom: p = 1, fullscreen: m = !1 })=>{
    let { RotateCcwIcon: b, ZoomInIcon: g, ZoomOutIcon: _ } = F4(), v = rl(), x = xC(), C = Vm(null), E = Vm(null), [A, $] = hh(p), [I, N] = hh({
        x: 0,
        y: 0
    }), [R, P] = hh(!1), [L, j] = hh({
        x: 0,
        y: 0
    }), [z, q] = hh({
        x: 0,
        y: 0
    }), O = lw((re)=>{
        $((ne)=>Math.max(a, Math.min(s, ne + re)));
    }, [
        a,
        s
    ]), B = lw(()=>{
        O(l);
    }, [
        O,
        l
    ]), V = lw(()=>{
        O(-l);
    }, [
        O,
        l
    ]), H = lw(()=>{
        $(p), N({
            x: 0,
            y: 0
        });
    }, [
        p
    ]), Z = lw((re)=>{
        re.preventDefault();
        let ne = re.deltaY > 0 ? -l : l;
        O(ne);
    }, [
        O,
        l
    ]), K = lw((re)=>{
        if (re.button !== 0 || re.isPrimary === !1) return;
        P(!0), j({
            x: re.clientX,
            y: re.clientY
        }), q(I);
        let ne = re.currentTarget;
        ne instanceof HTMLElement && ne.setPointerCapture(re.pointerId);
    }, [
        I
    ]), Y = lw((re)=>{
        if (!R) return;
        re.preventDefault();
        let ne = re.clientX - L.x, ae = re.clientY - L.y;
        N({
            x: z.x + ne,
            y: z.y + ae
        });
    }, [
        R,
        L,
        z
    ]), J = lw((re)=>{
        P(!1);
        let ne = re.currentTarget;
        ne instanceof HTMLElement && ne.releasePointerCapture(re.pointerId);
    }, []);
    return _0(()=>{
        let re = C.current;
        if (re) return re.addEventListener("wheel", Z, {
            passive: !1
        }), ()=>{
            re.removeEventListener("wheel", Z);
        };
    }, [
        Z
    ]), _0(()=>{
        let re = E.current;
        if (re && R) return document.body.style.userSelect = "none", re.addEventListener("pointermove", Y, {
            passive: !1
        }), re.addEventListener("pointerup", J), re.addEventListener("pointercancel", J), ()=>{
            document.body.style.userSelect = "", re.removeEventListener("pointermove", Y), re.removeEventListener("pointerup", J), re.removeEventListener("pointercancel", J);
        };
    }, [
        R,
        Y,
        J
    ]), hl("div", {
        className: v("relative flex flex-col", m ? "h-full w-full" : "min-h-28 w-full", e),
        ref: C,
        style: {
            cursor: R ? "grabbing" : "grab"
        },
        children: [
            u ? hl("div", {
                className: v("absolute z-10 flex flex-col gap-1 rounded-md border border-border bg-background/80 p-1 supports-[backdrop-filter]:bg-background/70 supports-[backdrop-filter]:backdrop-blur-sm", m ? "bottom-4 left-4" : "bottom-2 left-2"),
                children: [
                    Tn("button", {
                        "aria-label": x.zoomIn,
                        className: v("flex items-center justify-center rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"),
                        disabled: A >= s,
                        onClick: B,
                        title: x.zoomIn,
                        type: "button",
                        children: Tn(g, {
                            "aria-hidden": "true",
                            size: 16
                        })
                    }),
                    Tn("button", {
                        "aria-label": x.zoomOut,
                        className: v("flex items-center justify-center rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"),
                        disabled: A <= a,
                        onClick: V,
                        title: x.zoomOut,
                        type: "button",
                        children: Tn(_, {
                            "aria-hidden": "true",
                            size: 16
                        })
                    }),
                    Tn("button", {
                        "aria-label": x.resetView,
                        className: v("flex items-center justify-center rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"),
                        onClick: H,
                        title: x.resetView,
                        type: "button",
                        children: Tn(b, {
                            "aria-hidden": "true",
                            size: 16
                        })
                    })
                ]
            }) : null,
            Tn("div", {
                className: v("flex-1 origin-center transition-transform duration-150 ease-out", m ? "flex h-full w-full items-center justify-center" : "flex w-full items-center justify-center"),
                onPointerDown: K,
                ref: E,
                role: "application",
                style: {
                    transform: `translate(${I.x}px, ${I.y}px) scale(${A})`,
                    transformOrigin: "center center",
                    touchAction: "none",
                    willChange: "transform"
                },
                children: r
            })
        ]
    });
}, "or"), SLt = i(({ chart: r, className: e, config: a, fullscreen: s = !1, showControls: l = !0 })=>{
    let u = rl(), [p, m] = hh(null), [b, g] = hh(!1), [_, v] = hh(""), [x, C] = hh(""), [E, A] = hh(0), { mermaid: $ } = Vh(Fb), I = KMe(), N = $?.errorComponent, { shouldRender: R, containerRef: P } = Wgr({
        immediate: s
    });
    if (_0(()=>{
        if (R) {
            if (!I) {
                m("Mermaid plugin not available. Please add the mermaid plugin to enable diagram rendering.");
                return;
            }
            (async ()=>{
                try {
                    m(null), g(!0);
                    let j = I.getMermaid(a), z = r.split("").reduce((B, V)=>(B << 5) - B + V.charCodeAt(0) | 0, 0), q = `mermaid-${Math.abs(z)}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`, { svg: O } = await j.render(q, r);
                    v(O), C(O);
                } catch (j) {
                    if (!(x || _)) {
                        let z = j instanceof Error ? j.message : "Failed to render Mermaid chart";
                        m(z);
                    }
                } finally{
                    g(!1);
                }
            })();
        }
    }, [
        r,
        a,
        E,
        R,
        I
    ]), !(R || _ || x)) return Tn("div", {
        className: u("my-4 min-h-[200px]", e),
        ref: P
    });
    if (b && !_ && !x) return Tn("div", {
        className: u("my-4 flex justify-center p-4", e),
        ref: P,
        children: hl("div", {
            className: u("flex items-center space-x-2 text-muted-foreground"),
            children: [
                Tn("div", {
                    className: u("h-4 w-4 animate-spin rounded-full border-current border-b-2")
                }),
                Tn("span", {
                    className: u("text-sm"),
                    children: "Loading diagram..."
                })
            ]
        })
    });
    if (p && !_ && !x) return N ? Tn("div", {
        ref: P,
        children: Tn(N, {
            chart: r,
            error: p,
            retry: i(()=>A((z)=>z + 1), "N")
        })
    }) : hl("div", {
        className: u("rounded-md bg-red-50 p-4", e),
        ref: P,
        children: [
            hl("p", {
                className: u("font-mono text-red-700 text-sm"),
                children: [
                    "Mermaid Error: ",
                    p
                ]
            }),
            hl("details", {
                className: u("mt-2"),
                children: [
                    Tn("summary", {
                        className: u("cursor-pointer text-red-600 text-xs"),
                        children: "Show Code"
                    }),
                    Tn("pre", {
                        className: u("mt-2 overflow-x-auto rounded bg-red-100 p-2 text-red-800 text-xs"),
                        children: r
                    })
                ]
            })
        ]
    });
    let L = _ || x;
    return Tn("div", {
        className: u("size-full", e),
        "data-streamdown": "mermaid",
        ref: P,
        children: Tn(Z1r, {
            className: u(s ? "size-full overflow-hidden" : "overflow-hidden", e),
            fullscreen: s,
            maxZoom: 3,
            minZoom: .5,
            showControls: l,
            zoomStep: .1,
            children: Tn("div", {
                "aria-label": "Mermaid chart",
                className: u("flex justify-center", s ? "size-full items-center" : null),
                dangerouslySetInnerHTML: {
                    __html: L
                },
                role: "img"
            })
        })
    });
}, "Vo");

}
