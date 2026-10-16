import { Mme, t$t } from "./floating-ui.react-dom.mjs";
import { A0, Btr, D$t, DIe, Dtr, E0, F$t, Ftr, GT, GY, Gy, HY, Hme, Jtr, L$t, LIe, Lb, Ltr, M$t, Otr, P$t, PIe, Ptr, RIe, UT, Utr, Vme, WY, ZY, j$t, jIe, pP, qtr, x1, xd, yh, z$t, ztr } from "./floating-ui.react.utils.mjs";
import { DT, FT, Lo, Ou, Qv, Uy, Vc, kme, pC, xme, zg } from "./floating-ui.utils.dom.mjs";
import { Mtr, N$t, Rtr, Wme } from "./index.esm.js";
import { i } from "./plugin-brand-icon.js";
import { jsxs as eHn } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as g4 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as tHn from "./react-runtime/react-dom/esm-index-production.js";
import * as yr from "./react-runtime/react/esm-index-production.js";
import { Fragment as zui } from "./react-runtime/react/esm-jsx-runtime-production.js";
function tk(r) {
    const e = yr.useRef(void 0), a = yr.useCallback((s)=>{
        const l = r.map((u)=>{
            if (u != null) {
                if (typeof u == "function") {
                    const p = u, m = p(s);
                    return typeof m == "function" ? m : ()=>{
                        p(null);
                    };
                }
                return u.current = s, ()=>{
                    u.current = null;
                };
            }
        });
        return ()=>{
            l.forEach((u)=>u?.());
        };
    }, r);
    return yr.useMemo(()=>r.every((s)=>s == null) ? null : (s)=>{
            e.current && (e.current(), e.current = void 0), s != null && (e.current = a(s));
        }, r);
}
function Qtr(r, e) {
    const a = r.compareDocumentPosition(e);
    return a & Node.DOCUMENT_POSITION_FOLLOWING || a & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING || a & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function q$t(r) {
    const { children: e, elementsRef: a, labelsRef: s } = r, [l, u] = yr.useState(()=>new Set), p = yr.useCallback((g)=>{
        u((_)=>new Set(_).add(g));
    }, []), m = yr.useCallback((g)=>{
        u((_)=>{
            const v = new Set(_);
            return v.delete(g), v;
        });
    }, []), b = yr.useMemo(()=>{
        const g = new Map;
        return Array.from(l.keys()).sort(Qtr).forEach((v, x)=>{
            g.set(v, x);
        }), g;
    }, [
        l
    ]);
    return g4(sIt.Provider, {
        value: yr.useMemo(()=>({
                register: p,
                unregister: m,
                map: b,
                elementsRef: a,
                labelsRef: s
            }), [
            p,
            m,
            b,
            a,
            s
        ]),
        children: e
    });
}
function Kme(r) {
    r === void 0 && (r = {});
    const { label: e } = r, { register: a, unregister: s, map: l, elementsRef: u, labelsRef: p } = yr.useContext(sIt), [m, b] = yr.useState(null), g = yr.useRef(null), _ = yr.useCallback((v)=>{
        if (g.current = v, m !== null && (u.current[m] = v, p)) {
            var x;
            const C = e !== void 0;
            p.current[m] = C ? e : (x = v?.textContent) != null ? x : null;
        }
    }, [
        m,
        u,
        p,
        e
    ]);
    return xd(()=>{
        const v = g.current;
        if (v) return a(v), ()=>{
            s(v);
        };
    }, [
        a,
        s
    ]), xd(()=>{
        const v = g.current ? l.get(g.current) : null;
        v != null && b(v);
    }, [
        l
    ]), yr.useMemo(()=>({
            ref: _,
            index: m ?? -1
        }), [
        m,
        _
    ]);
}
function enr() {
    const [r, e] = yr.useState(()=>uIt ? dIt() : void 0);
    return xd(()=>{
        r == null && e(dIt());
    }, []), yr.useEffect(()=>{
        uIt = !0;
    }, []), r;
}
function zIe() {
    for(var r, e = arguments.length, a = new Array(e), s = 0; s < e; s++)a[s] = arguments[s];
    const l = "Floating UI: " + a.join(" ");
    if (!((r = tfe) != null && r.has(l))) {
        var u;
        (u = tfe) == null || u.add(l), console.warn(l);
    }
}
function tnr() {
    for(var r, e = arguments.length, a = new Array(e), s = 0; s < e; s++)a[s] = arguments[s];
    const l = "Floating UI: " + a.join(" ");
    if (!((r = tfe) != null && r.has(l))) {
        var u;
        (u = tfe) == null || u.add(l), console.error(l);
    }
}
function U$t() {
    const r = new Map;
    return {
        emit (e, a) {
            var s;
            (s = r.get(e)) == null || s.forEach((l)=>l(a));
        },
        on (e, a) {
            r.has(e) || r.set(e, new Set), r.get(e).add(a);
        },
        off (e, a) {
            var s;
            (s = r.get(e)) == null || s.delete(a);
        }
    };
}
function BIe(r) {
    const e = efe(), a = HT(), s = WT(), l = r || s;
    return xd(()=>{
        if (!e) return;
        const u = {
            id: e,
            parentId: l
        };
        return a?.addNode(u), ()=>{
            a?.removeNode(u);
        };
    }, [
        a,
        e,
        l
    ]), e;
}
function qIe(r) {
    const { children: e, id: a } = r, s = WT();
    return g4(pIt.Provider, {
        value: yr.useMemo(()=>({
                id: a,
                parentId: s
            }), [
            a,
            s
        ]),
        children: e
    });
}
function nnr(r) {
    const { children: e } = r, a = yr.useRef([]), s = yr.useCallback((p)=>{
        a.current = [
            ...a.current,
            p
        ];
    }, []), l = yr.useCallback((p)=>{
        a.current = a.current.filter((m)=>m !== p);
    }, []), [u] = yr.useState(()=>U$t());
    return g4(mIt.Provider, {
        value: yr.useMemo(()=>({
                nodesRef: a,
                addNode: s,
                removeNode: l,
                events: u
            }), [
            s,
            l,
            u
        ]),
        children: e
    });
}
function hB(r) {
    return "data-floating-ui-" + r;
}
function T0(r) {
    r.current !== -1 && (clearTimeout(r.current), r.current = -1);
}
function UIe(r, e, a) {
    if (a && !GY(a)) return 0;
    if (typeof r == "number") return r;
    if (typeof r == "function") {
        const s = r();
        return typeof s == "number" ? s : s?.[e];
    }
    return r?.[e];
}
function GIe(r) {
    return typeof r == "function" ? r() : r;
}
function G$t(r, e) {
    e === void 0 && (e = {});
    const { open: a, onOpenChange: s, dataRef: l, events: u, elements: p } = r, { enabled: m = !0, delay: b = 0, handleClose: g = null, mouseOnly: _ = !1, restMs: v = 0, move: x = !0 } = e, C = HT(), E = WT(), A = Lb(g), $ = Lb(b), I = Lb(a), N = Lb(v), R = yr.useRef(), P = yr.useRef(-1), L = yr.useRef(), j = yr.useRef(-1), z = yr.useRef(!0), q = yr.useRef(!1), O = yr.useRef(()=>{}), B = yr.useRef(!1), V = yh(()=>{
        var re;
        const ne = (re = l.current.openEvent) == null ? void 0 : re.type;
        return ne?.includes("mouse") && ne !== "mousedown";
    });
    yr.useEffect(()=>{
        if (!m) return;
        function re(ne) {
            let { open: ae } = ne;
            ae || (T0(P), T0(j), z.current = !0, B.current = !1);
        }
        return i(re, "onOpenChange"), u.on("openchange", re), ()=>{
            u.off("openchange", re);
        };
    }, [
        m,
        u
    ]), yr.useEffect(()=>{
        if (!m || !A.current || !a) return;
        function re(ae) {
            V() && s(!1, ae, "hover");
        }
        i(re, "onLeave");
        const ne = E0(p.floating).documentElement;
        return ne.addEventListener("mouseleave", re), ()=>{
            ne.removeEventListener("mouseleave", re);
        };
    }, [
        p.floating,
        a,
        s,
        m,
        A,
        V
    ]);
    const H = yr.useCallback(function(re, ne, ae) {
        ne === void 0 && (ne = !0), ae === void 0 && (ae = "hover");
        const W = UIe($.current, "close", R.current);
        W && !L.current ? (T0(P), P.current = window.setTimeout(()=>s(!1, re, ae), W)) : ne && (T0(P), s(!1, re, ae));
    }, [
        $,
        s
    ]), Z = yh(()=>{
        O.current(), L.current = void 0;
    }), K = yh(()=>{
        if (q.current) {
            const re = E0(p.floating).body;
            re.style.pointerEvents = "", re.removeAttribute(fIt), q.current = !1;
        }
    }), Y = yh(()=>l.current.openEvent ? [
            "click",
            "mousedown"
        ].includes(l.current.openEvent.type) : !1);
    yr.useEffect(()=>{
        if (!m) return;
        function re(ce) {
            if (T0(P), z.current = !1, _ && !GY(R.current) || GIe(N.current) > 0 && !UIe($.current, "open")) return;
            const Q = UIe($.current, "open", R.current);
            Q ? P.current = window.setTimeout(()=>{
                I.current || s(!0, ce, "hover");
            }, Q) : a || s(!0, ce, "hover");
        }
        i(re, "onReferenceMouseEnter");
        function ne(ce) {
            if (Y()) {
                K();
                return;
            }
            O.current();
            const Q = E0(p.floating);
            if (T0(j), B.current = !1, A.current && l.current.floatingContext) {
                a || T0(P), L.current = A.current({
                    ...l.current.floatingContext,
                    tree: C,
                    x: ce.clientX,
                    y: ce.clientY,
                    onClose () {
                        K(), Z(), Y() || H(ce, !0, "safe-polygon");
                    }
                });
                const he = L.current;
                Q.addEventListener("mousemove", he), O.current = ()=>{
                    Q.removeEventListener("mousemove", he);
                };
                return;
            }
            (R.current === "touch" ? !Gy(p.floating, ce.relatedTarget) : !0) && H(ce);
        }
        i(ne, "onReferenceMouseLeave");
        function ae(ce) {
            Y() || l.current.floatingContext && (A.current == null || A.current({
                ...l.current.floatingContext,
                tree: C,
                x: ce.clientX,
                y: ce.clientY,
                onClose () {
                    K(), Z(), Y() || H(ce);
                }
            })(ce));
        }
        i(ae, "onScrollMouseLeave");
        function W() {
            T0(P);
        }
        i(W, "onFloatingMouseEnter");
        function oe(ce) {
            Y() || H(ce, !1);
        }
        if (i(oe, "onFloatingMouseLeave"), Lo(p.domReference)) {
            const ce = p.domReference, Q = p.floating;
            return a && ce.addEventListener("mouseleave", ae), x && ce.addEventListener("mousemove", re, {
                once: !0
            }), ce.addEventListener("mouseenter", re), ce.addEventListener("mouseleave", ne), Q && (Q.addEventListener("mouseleave", ae), Q.addEventListener("mouseenter", W), Q.addEventListener("mouseleave", oe)), ()=>{
                a && ce.removeEventListener("mouseleave", ae), x && ce.removeEventListener("mousemove", re), ce.removeEventListener("mouseenter", re), ce.removeEventListener("mouseleave", ne), Q && (Q.removeEventListener("mouseleave", ae), Q.removeEventListener("mouseenter", W), Q.removeEventListener("mouseleave", oe));
            };
        }
    }, [
        p,
        m,
        r,
        _,
        x,
        H,
        Z,
        K,
        s,
        a,
        I,
        C,
        $,
        A,
        l,
        Y,
        N
    ]), xd(()=>{
        var re;
        if (m && a && (re = A.current) != null && (re = re.__options) != null && re.blockPointerEvents && V()) {
            q.current = !0;
            const ae = p.floating;
            if (Lo(p.domReference) && ae) {
                var ne;
                const W = E0(p.floating).body;
                W.setAttribute(fIt, "");
                const oe = p.domReference, ce = C == null || (ne = C.nodesRef.current.find((Q)=>Q.id === E)) == null || (ne = ne.context) == null ? void 0 : ne.elements.floating;
                return ce && (ce.style.pointerEvents = ""), W.style.pointerEvents = "none", oe.style.pointerEvents = "auto", ae.style.pointerEvents = "auto", ()=>{
                    W.style.pointerEvents = "", oe.style.pointerEvents = "", ae.style.pointerEvents = "";
                };
            }
        }
    }, [
        m,
        a,
        E,
        p,
        C,
        A,
        V
    ]), xd(()=>{
        a || (R.current = void 0, B.current = !1, Z(), K());
    }, [
        a,
        Z,
        K
    ]), yr.useEffect(()=>()=>{
            Z(), T0(P), T0(j), K();
        }, [
        m,
        p.domReference,
        Z,
        K
    ]);
    const J = yr.useMemo(()=>{
        function re(ne) {
            R.current = ne.pointerType;
        }
        return i(re, "setPointerRef"), {
            onPointerDown: re,
            onPointerEnter: re,
            onMouseMove (ne) {
                const { nativeEvent: ae } = ne;
                function W() {
                    !z.current && !I.current && s(!0, ae, "hover");
                }
                i(W, "handleMouseMove"), !(_ && !GY(R.current)) && (a || GIe(N.current) === 0 || B.current && ne.movementX ** 2 + ne.movementY ** 2 < 2 || (T0(j), R.current === "touch" ? W() : (B.current = !0, j.current = window.setTimeout(W, GIe(N.current)))));
            }
        };
    }, [
        _,
        s,
        a,
        I,
        N
    ]);
    return yr.useMemo(()=>m ? {
            reference: J
        } : {}, [
        m,
        J
    ]);
}
function mP(r, e) {
    e === void 0 && (e = {});
    const { preventScroll: a = !1, cancelPrevious: s = !0, sync: l = !1 } = e;
    s && cancelAnimationFrame(hIt);
    const u = i(()=>r?.focus({
            preventScroll: a
        }), "exec");
    l ? u() : hIt = requestAnimationFrame(u);
}
function WIe(r, e) {
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
function rnr(r) {
    return "composedPath" in r ? r.composedPath()[0] : r.target;
}
function inr(r) {
    return r?.ownerDocument || document;
}
function W$t(r) {
    return r === "inert" ? wB.inert : r === "aria-hidden" ? wB["aria-hidden"] : wB.none;
}
function anr(r, e, a, s) {
    const l = "data-floating-ui-inert", u = s ? "inert" : a ? "aria-hidden" : null, p = knr(e, r), m = new Set, b = new Set(p), g = [];
    rfe[l] || (rfe[l] = new WeakMap);
    const _ = rfe[l];
    p.forEach(v), x(e), m.clear();
    function v(C) {
        !C || m.has(C) || (m.add(C), C.parentNode && v(C.parentNode));
    }
    i(v, "keep");
    function x(C) {
        !C || b.has(C) || [].forEach.call(C.children, (E)=>{
            if (zg(E) !== "script") if (m.has(E)) x(E);
            else {
                const A = u ? E.getAttribute(u) : null, $ = A !== null && A !== "false", I = W$t(u), N = (I.get(E) || 0) + 1, R = (_.get(E) || 0) + 1;
                I.set(E, N), _.set(E, R), g.push(E), N === 1 && $ && nfe.add(E), R === 1 && E.setAttribute(l, ""), !$ && u && E.setAttribute(u, u === "inert" ? "" : "true");
            }
        });
    }
    return i(x, "deep"), eNe++, ()=>{
        g.forEach((C)=>{
            const E = W$t(u), $ = (E.get(C) || 0) - 1, I = (_.get(C) || 0) - 1;
            E.set(C, $), _.set(C, I), $ || (!nfe.has(C) && u && C.removeAttribute(u), nfe.delete(C)), I || C.removeAttribute(l);
        }), eNe--, eNe || (wB.inert = new WeakMap, wB["aria-hidden"] = new WeakMap, wB.none = new WeakMap, nfe = new WeakSet, rfe = {});
    };
}
function H$t(r, e, a) {
    e === void 0 && (e = !1), a === void 0 && (a = !1);
    const s = inr(r[0]).body;
    return anr(r.concat(Array.from(s.querySelectorAll('[aria-live],[role="status"],output'))), s, e, a);
}
function onr(r) {
    r === void 0 && (r = {});
    const { id: e, root: a } = r, s = efe(), l = wIt(), [u, p] = yr.useState(null), m = yr.useRef(null);
    return xd(()=>()=>{
            u?.remove(), queueMicrotask(()=>{
                m.current = null;
            });
        }, [
        u
    ]), xd(()=>{
        if (!s || m.current) return;
        const b = e ? document.getElementById(e) : null;
        if (!b) return;
        const g = document.createElement("div");
        g.id = s, g.setAttribute(yIt, ""), b.appendChild(g), m.current = g, p(g);
    }, [
        e,
        s
    ]), xd(()=>{
        if (a === null || !s || m.current) return;
        let b = a || l?.portalNode;
        b && !kme(b) && (b = b.current), b = b || document.body;
        let g = null;
        e && (g = document.createElement("div"), g.id = e, b.appendChild(g));
        const _ = document.createElement("div");
        _.id = s, _.setAttribute(yIt, ""), b = g || b, b.appendChild(_), m.current = _, p(_);
    }, [
        e,
        a,
        s,
        l
    ]), u;
}
function VY(r) {
    const { children: e, id: a, root: s, preserveTabOrder: l = !0 } = r, u = onr({
        id: a,
        root: s
    }), [p, m] = yr.useState(null), b = yr.useRef(null), g = yr.useRef(null), _ = yr.useRef(null), v = yr.useRef(null), x = p?.modal, C = p?.open, E = !!p && !p.modal && p.open && l && !!(s || u);
    return yr.useEffect(()=>{
        if (!u || !l || x) return;
        function A($) {
            u && HY($) && ($.type === "focusin" ? z$t : Utr)(u);
        }
        return i(A, "onFocus"), u.addEventListener("focusin", A, !0), u.addEventListener("focusout", A, !0), ()=>{
            u.removeEventListener("focusin", A, !0), u.removeEventListener("focusout", A, !0);
        };
    }, [
        u,
        l,
        x
    ]), yr.useEffect(()=>{
        u && (C || z$t(u));
    }, [
        C,
        u
    ]), eHn(bIt.Provider, {
        value: yr.useMemo(()=>({
                preserveTabOrder: l,
                beforeOutsideRef: b,
                afterOutsideRef: g,
                beforeInsideRef: _,
                afterInsideRef: v,
                portalNode: u,
                setFocusManagerState: m
            }), [
            l,
            u
        ]),
        children: [
            E && u && g4(afe, {
                "data-type": "outside",
                ref: b,
                onFocus: i((A)=>{
                    if (HY(A, u)) {
                        var $;
                        ($ = _.current) == null || $.focus();
                    } else {
                        const I = p ? p.domReference : null, N = DIe(I);
                        N?.focus();
                    }
                }, "onFocus")
            }),
            E && u && g4("span", {
                "aria-owns": u.id,
                style: ife
            }),
            u && tHn.createPortal(e, u),
            E && u && g4(afe, {
                "data-type": "outside",
                ref: g,
                onFocus: i((A)=>{
                    if (HY(A, u)) {
                        var $;
                        ($ = v.current) == null || $.focus();
                    } else {
                        const I = p ? p.domReference : null, N = LIe(I);
                        N?.focus(), p?.closeOnFocusOut && p?.onOpenChange(!1, A.nativeEvent, "focus-out");
                    }
                }, "onFocus")
            })
        ]
    });
}
function Z$t(r) {
    return yr.useMemo(()=>(e)=>{
            r.forEach((a)=>{
                a && (a.current = e);
            });
        }, r);
}
function HIe() {
    ZT = ZT.filter((r)=>r.isConnected);
}
function snr(r) {
    HIe(), r && zg(r) !== "body" && (ZT.push(r), ZT.length > vnr && (ZT = ZT.slice(-20)));
}
function V$t() {
    return HIe(), ZT[ZT.length - 1];
}
function cnr(r) {
    const e = ZY();
    return N$t(r, e) ? r : Wme(r, e)[0] || r;
}
function K$t(r, e) {
    var a;
    if (!e.current.includes("floating") && !((a = r.getAttribute("role")) != null && a.includes("dialog"))) return;
    const s = ZY(), u = Mtr(r, s).filter((m)=>{
        const b = m.getAttribute("data-tabindex") || "";
        return N$t(m, s) || m.hasAttribute("data-tabindex") && !b.startsWith("-");
    }), p = r.getAttribute("tabindex");
    e.current.includes("floating") || u.length === 0 ? p !== "0" && r.setAttribute("tabindex", "0") : (p !== "-1" || r.hasAttribute("data-tabindex") && r.getAttribute("data-tabindex") !== "-1") && (r.setAttribute("tabindex", "-1"), r.setAttribute("data-tabindex", "-1"));
}
function Xme(r) {
    const { context: e, children: a, disabled: s = !1, order: l = [
        "content"
    ], guards: u = !0, initialFocus: p = 0, returnFocus: m = !0, restoreFocus: b = !1, modal: g = !0, visuallyHiddenDismiss: _ = !1, closeOnFocusOut: v = !0, outsideElementsInert: x = !1, getInsideElements: C = i(()=>[], "_getInsideElements") } = r, { open: E, onOpenChange: A, events: $, dataRef: I, elements: { domReference: N, floating: R } } = e, P = yh(()=>{
        var Se;
        return (Se = I.current.floatingContext) == null ? void 0 : Se.nodeId;
    }), L = yh(C), j = typeof p == "number" && p < 0, z = PIe(N) && j, q = _nr(), O = q ? u : !0, B = !O || q && x, V = Lb(l), H = Lb(p), Z = Lb(m), K = HT(), Y = wIt(), J = yr.useRef(null), re = yr.useRef(null), ne = yr.useRef(!1), ae = yr.useRef(!1), W = yr.useRef(-1), oe = yr.useRef(-1), ce = Y != null, Q = Hme(R), le = yh(function(Se) {
        return Se === void 0 && (Se = Q), Se ? Wme(Se, ZY()) : [];
    }), he = yh((Se)=>{
        const Ne = le(Se);
        return V.current.map((je)=>N && je === "reference" ? N : Q && je === "floating" ? Q : Ne).filter(Boolean).flat();
    });
    yr.useEffect(()=>{
        if (s || !g) return;
        function Se(je) {
            if (je.key === "Tab") {
                Gy(Q, UT(E0(Q))) && le().length === 0 && !z && x1(je);
                const tt = he(), Ke = GT(je);
                V.current[0] === "reference" && Ke === N && (x1(je), je.shiftKey ? mP(tt[tt.length - 1]) : mP(tt[1])), V.current[1] === "floating" && Ke === Q && je.shiftKey && (x1(je), mP(tt[0]));
            }
        }
        i(Se, "onKeyDown");
        const Ne = E0(Q);
        return Ne.addEventListener("keydown", Se), ()=>{
            Ne.removeEventListener("keydown", Se);
        };
    }, [
        s,
        N,
        Q,
        g,
        V,
        z,
        le,
        he
    ]), yr.useEffect(()=>{
        if (s || !R) return;
        function Se(Ne) {
            const je = GT(Ne), Ke = le().indexOf(je);
            Ke !== -1 && (W.current = Ke);
        }
        return i(Se, "handleFocusIn"), R.addEventListener("focusin", Se), ()=>{
            R.removeEventListener("focusin", Se);
        };
    }, [
        s,
        R,
        le
    ]), yr.useEffect(()=>{
        if (s || !v) return;
        function Se() {
            ae.current = !0, setTimeout(()=>{
                ae.current = !1;
            });
        }
        i(Se, "handlePointerDown");
        function Ne(Ke) {
            const nt = Ke.relatedTarget, ut = Ke.currentTarget, it = GT(Ke);
            queueMicrotask(()=>{
                const Ze = P(), Ie = !(Gy(N, nt) || Gy(R, nt) || Gy(nt, R) || Gy(Y?.portalNode, nt) || nt != null && nt.hasAttribute(hB("focus-guard")) || K && (pP(K.nodesRef.current, Ze).find((Me)=>{
                    var et, Ue;
                    return Gy((et = Me.context) == null ? void 0 : et.elements.floating, nt) || Gy((Ue = Me.context) == null ? void 0 : Ue.elements.domReference, nt);
                }) || j$t(K.nodesRef.current, Ze).find((Me)=>{
                    var et, Ue, Be;
                    return [
                        (et = Me.context) == null ? void 0 : et.elements.floating,
                        Hme((Ue = Me.context) == null ? void 0 : Ue.elements.floating)
                    ].includes(nt) || ((Be = Me.context) == null ? void 0 : Be.elements.domReference) === nt;
                })));
                if (ut === N && Q && K$t(Q, V), b && ut !== N && !(it != null && it.isConnected) && UT(E0(Q)) === E0(Q).body) {
                    Vc(Q) && Q.focus();
                    const Me = W.current, et = le(), Ue = et[Me] || et[et.length - 1] || Q;
                    Vc(Ue) && Ue.focus();
                }
                if (I.current.insideReactTree) {
                    I.current.insideReactTree = !1;
                    return;
                }
                (z || !g) && nt && Ie && !ae.current && nt !== V$t() && (ne.current = !0, A(!1, Ke, "focus-out"));
            });
        }
        i(Ne, "handleFocusOutside");
        const je = !!(!K && Y);
        function tt() {
            T0(oe), I.current.insideReactTree = !0, oe.current = window.setTimeout(()=>{
                I.current.insideReactTree = !1;
            });
        }
        if (i(tt, "markInsideReactTree"), R && Vc(N)) return N.addEventListener("focusout", Ne), N.addEventListener("pointerdown", Se), R.addEventListener("focusout", Ne), je && R.addEventListener("focusout", tt, !0), ()=>{
            N.removeEventListener("focusout", Ne), N.removeEventListener("pointerdown", Se), R.removeEventListener("focusout", Ne), je && R.removeEventListener("focusout", tt, !0);
        };
    }, [
        s,
        N,
        R,
        Q,
        g,
        K,
        Y,
        A,
        v,
        b,
        le,
        z,
        P,
        V,
        I
    ]);
    const me = yr.useRef(null), be = yr.useRef(null), ue = Z$t([
        me,
        Y?.beforeInsideRef
    ]), ge = Z$t([
        be,
        Y?.afterInsideRef
    ]);
    yr.useEffect(()=>{
        var Se, Ne;
        if (s || !R) return;
        const je = Array.from((Y == null || (Se = Y.portalNode) == null ? void 0 : Se.querySelectorAll("[" + hB("portal") + "]")) || []), Ke = (Ne = (K ? j$t(K.nodesRef.current, P()) : []).find((it)=>{
            var Ze;
            return PIe(((Ze = it.context) == null ? void 0 : Ze.elements.domReference) || null);
        })) == null || (Ne = Ne.context) == null ? void 0 : Ne.elements.domReference, nt = [
            R,
            Ke,
            ...je,
            ...L(),
            J.current,
            re.current,
            me.current,
            be.current,
            Y?.beforeOutsideRef.current,
            Y?.afterOutsideRef.current,
            V.current.includes("reference") || z ? N : null
        ].filter((it)=>it != null), ut = g || z ? H$t(nt, !B, B) : H$t(nt);
        return ()=>{
            ut();
        };
    }, [
        s,
        N,
        R,
        g,
        V,
        Y,
        z,
        O,
        B,
        K,
        P,
        L
    ]), xd(()=>{
        if (s || !Vc(Q)) return;
        const Se = E0(Q), Ne = UT(Se);
        queueMicrotask(()=>{
            const je = he(Q), tt = H.current, Ke = (typeof tt == "number" ? je[tt] : tt.current) || Q, nt = Gy(Q, Ne);
            !j && !nt && E && mP(Ke, {
                preventScroll: Ke === Q
            });
        });
    }, [
        s,
        E,
        Q,
        j,
        he,
        H
    ]), xd(()=>{
        if (s || !Q) return;
        const Se = E0(Q), Ne = UT(Se);
        snr(Ne);
        function je(nt) {
            let { reason: ut, event: it, nested: Ze } = nt;
            if ([
                "hover",
                "safe-polygon"
            ].includes(ut) && it.type === "mouseleave" && (ne.current = !0), ut === "outside-press") if (Ze) ne.current = !1;
            else if (L$t(it) || D$t(it)) ne.current = !1;
            else {
                let Ie = !1;
                document.createElement("div").focus({
                    get preventScroll () {
                        return Ie = !0, !1;
                    }
                }), Ie ? ne.current = !1 : ne.current = !0;
            }
        }
        i(je, "onOpenChange"), $.on("openchange", je);
        const tt = Se.createElement("span");
        tt.setAttribute("tabindex", "-1"), tt.setAttribute("aria-hidden", "true"), Object.assign(tt.style, ife), ce && N && N.insertAdjacentElement("afterend", tt);
        function Ke() {
            if (typeof Z.current == "boolean") {
                const nt = N || V$t();
                return nt && nt.isConnected ? nt : tt;
            }
            return Z.current.current || tt;
        }
        return i(Ke, "getReturnElement"), ()=>{
            $.off("openchange", je);
            const nt = UT(Se), ut = Gy(R, nt) || K && pP(K.nodesRef.current, P(), !1).some((Ze)=>{
                var Ie;
                return Gy((Ie = Ze.context) == null ? void 0 : Ie.elements.floating, nt);
            }), it = Ke();
            queueMicrotask(()=>{
                const Ze = cnr(it);
                Z.current && !ne.current && Vc(Ze) && (!(Ze !== nt && nt !== Se.body) || ut) && Ze.focus({
                    preventScroll: !0
                }), tt.remove();
            });
        };
    }, [
        s,
        R,
        Q,
        Z,
        I,
        $,
        K,
        ce,
        N,
        P
    ]), yr.useEffect(()=>(queueMicrotask(()=>{
            ne.current = !1;
        }), ()=>{
            queueMicrotask(HIe);
        }), [
        s
    ]), xd(()=>{
        if (!s && Y) return Y.setFocusManagerState({
            modal: g,
            closeOnFocusOut: v,
            open: E,
            onOpenChange: A,
            domReference: N
        }), ()=>{
            Y.setFocusManagerState(null);
        };
    }, [
        s,
        Y,
        g,
        E,
        A,
        v,
        N
    ]), xd(()=>{
        s || Q && K$t(Q, V);
    }, [
        s,
        Q,
        V
    ]);
    function _e(Se) {
        return s || !_ || !g ? null : g4(xnr, {
            ref: Se === "start" ? J : re,
            onClick: i((Ne)=>A(!1, Ne.nativeEvent), "onClick"),
            children: typeof _ == "string" ? _ : "Dismiss"
        });
    }
    i(_e, "renderDismissButton");
    const ve = !s && O && (g ? !z : !0) && (ce || g);
    return eHn(zui, {
        children: [
            ve && g4(afe, {
                "data-type": "inside",
                ref: ue,
                onFocus: i((Se)=>{
                    if (g) {
                        const je = he();
                        mP(l[0] === "reference" ? je[0] : je[je.length - 1]);
                    } else if (Y != null && Y.preserveTabOrder && Y.portalNode) if (ne.current = !1, HY(Se, Y.portalNode)) {
                        const je = LIe(N);
                        je?.focus();
                    } else {
                        var Ne;
                        (Ne = Y.beforeOutsideRef.current) == null || Ne.focus();
                    }
                }, "onFocus")
            }),
            !z && _e("start"),
            a,
            _e("end"),
            ve && g4(afe, {
                "data-type": "inside",
                ref: ge,
                onFocus: i((Se)=>{
                    if (g) mP(he()[0]);
                    else if (Y != null && Y.preserveTabOrder && Y.portalNode) if (v && (ne.current = !0), HY(Se, Y.portalNode)) {
                        const je = DIe(N);
                        je?.focus();
                    } else {
                        var Ne;
                        (Ne = Y.afterOutsideRef.current) == null || Ne.focus();
                    }
                }, "onFocus")
            })
        ]
    });
}
function lnr() {
    const r = M$t(), e = /iP(hone|ad|od)|iOS/.test(r) || r === "MacIntel" && navigator.maxTouchPoints > 1, a = document.body.style, l = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight", u = window.innerWidth - document.documentElement.clientWidth, p = a.left ? parseFloat(a.left) : window.scrollX, m = a.top ? parseFloat(a.top) : window.scrollY;
    if (a.overflow = "hidden", a.setProperty(_It, u + "px"), u && (a[l] = u + "px"), e) {
        var b, g;
        const _ = ((b = window.visualViewport) == null ? void 0 : b.offsetLeft) || 0, v = ((g = window.visualViewport) == null ? void 0 : g.offsetTop) || 0;
        Object.assign(a, {
            position: "fixed",
            top: -(m - Math.floor(v)) + "px",
            left: -(p - Math.floor(_)) + "px",
            right: "0"
        });
    }
    return ()=>{
        Object.assign(a, {
            overflow: "",
            [l]: ""
        }), a.removeProperty(_It), e && (Object.assign(a, {
            position: "",
            top: "",
            left: "",
            right: ""
        }), window.scrollTo(p, m));
    };
}
function X$t(r) {
    return Vc(r.target) && r.target.tagName === "BUTTON";
}
function unr(r) {
    return Vc(r.target) && r.target.tagName === "A";
}
function Y$t(r) {
    return P$t(r);
}
function ZIe(r, e) {
    e === void 0 && (e = {});
    const { open: a, onOpenChange: s, dataRef: l, elements: { domReference: u } } = r, { enabled: p = !0, event: m = "click", toggle: b = !0, ignoreMouse: g = !1, keyboardHandlers: _ = !0, stickIfOpen: v = !0 } = e, x = yr.useRef(), C = yr.useRef(!1), E = yr.useMemo(()=>({
            onPointerDown (A) {
                x.current = A.pointerType;
            },
            onMouseDown (A) {
                const $ = x.current;
                A.button === 0 && m !== "click" && (GY($, !0) && g || (a && b && (!(l.current.openEvent && v) || l.current.openEvent.type === "mousedown") ? s(!1, A.nativeEvent, "click") : (A.preventDefault(), s(!0, A.nativeEvent, "click"))));
            },
            onClick (A) {
                const $ = x.current;
                if (m === "mousedown" && x.current) {
                    x.current = void 0;
                    return;
                }
                GY($, !0) && g || (a && b && (!(l.current.openEvent && v) || l.current.openEvent.type === "click") ? s(!1, A.nativeEvent, "click") : s(!0, A.nativeEvent, "click"));
            },
            onKeyDown (A) {
                x.current = void 0, !(A.defaultPrevented || !_ || X$t(A)) && (A.key === " " && !Y$t(u) && (A.preventDefault(), C.current = !0), !unr(A) && A.key === "Enter" && s(!(a && b), A.nativeEvent, "click"));
            },
            onKeyUp (A) {
                A.defaultPrevented || !_ || X$t(A) || Y$t(u) || A.key === " " && C.current && (C.current = !1, s(!(a && b), A.nativeEvent, "click"));
            }
        }), [
        l,
        u,
        m,
        g,
        _,
        s,
        a,
        v,
        b
    ]);
    return yr.useMemo(()=>p ? {
            reference: E
        } : {}, [
        p,
        E
    ]);
}
function VIe(r, e) {
    e === void 0 && (e = {});
    const { open: a, onOpenChange: s, elements: l, dataRef: u } = r, { enabled: p = !0, escapeKey: m = !0, outsidePress: b = !0, outsidePressEvent: g = "pointerdown", referencePress: _ = !1, referencePressEvent: v = "pointerdown", ancestorScroll: x = !1, bubbles: C, capture: E } = e, A = HT(), $ = yh(typeof b == "function" ? b : ()=>!1), I = typeof b == "function" ? $ : b, N = yr.useRef(!1), { escapeKey: R, outsidePress: P } = vIt(C), { escapeKey: L, outsidePress: j } = vIt(E), z = yr.useRef(!1), q = yh((K)=>{
        var Y;
        if (!a || !p || !m || K.key !== "Escape" || z.current) return;
        const J = (Y = u.current.floatingContext) == null ? void 0 : Y.nodeId, re = A ? pP(A.nodesRef.current, J) : [];
        if (!R && (K.stopPropagation(), re.length > 0)) {
            let ne = !0;
            if (re.forEach((ae)=>{
                var W;
                if ((W = ae.context) != null && W.open && !ae.context.dataRef.current.__escapeKeyBubbles) {
                    ne = !1;
                    return;
                }
            }), !ne) return;
        }
        s(!1, Ftr(K) ? K.nativeEvent : K, "escape-key");
    }), O = yh((K)=>{
        var Y;
        const J = i(()=>{
            var re;
            q(K), (re = GT(K)) == null || re.removeEventListener("keydown", J);
        }, "callback");
        (Y = GT(K)) == null || Y.addEventListener("keydown", J);
    }), B = yh((K)=>{
        var Y;
        const J = u.current.insideReactTree;
        u.current.insideReactTree = !1;
        const re = N.current;
        if (N.current = !1, g === "click" && re || J || typeof I == "function" && !I(K)) return;
        const ne = GT(K), ae = "[" + hB("inert") + "]", W = E0(l.floating).querySelectorAll(ae);
        let oe = Lo(ne) ? ne : null;
        for(; oe && !Qv(oe);){
            const he = pC(oe);
            if (Qv(he) || !Lo(he)) break;
            oe = he;
        }
        if (W.length && Lo(ne) && !Ltr(ne) && !Gy(ne, l.floating) && Array.from(W).every((he)=>!Gy(oe, he))) return;
        if (Vc(ne) && Z) {
            const he = Qv(ne), me = Uy(ne), be = /auto|scroll/, ue = he || be.test(me.overflowX), ge = he || be.test(me.overflowY), _e = ue && ne.clientWidth > 0 && ne.scrollWidth > ne.clientWidth, ve = ge && ne.clientHeight > 0 && ne.scrollHeight > ne.clientHeight, Se = me.direction === "rtl", Ne = ve && (Se ? K.offsetX <= ne.offsetWidth - ne.clientWidth : K.offsetX > ne.clientWidth), je = _e && K.offsetY > ne.clientHeight;
            if (Ne || je) return;
        }
        const ce = (Y = u.current.floatingContext) == null ? void 0 : Y.nodeId, Q = A && pP(A.nodesRef.current, ce).some((he)=>{
            var me;
            return RIe(K, (me = he.context) == null ? void 0 : me.elements.floating);
        });
        if (RIe(K, l.floating) || RIe(K, l.domReference) || Q) return;
        const le = A ? pP(A.nodesRef.current, ce) : [];
        if (le.length > 0) {
            let he = !0;
            if (le.forEach((me)=>{
                var be;
                if ((be = me.context) != null && be.open && !me.context.dataRef.current.__outsidePressBubbles) {
                    he = !1;
                    return;
                }
            }), !he) return;
        }
        s(!1, K, "outside-press");
    }), V = yh((K)=>{
        var Y;
        const J = i(()=>{
            var re;
            B(K), (re = GT(K)) == null || re.removeEventListener(g, J);
        }, "callback");
        (Y = GT(K)) == null || Y.addEventListener(g, J);
    });
    yr.useEffect(()=>{
        if (!a || !p) return;
        u.current.__escapeKeyBubbles = R, u.current.__outsidePressBubbles = P;
        let K = -1;
        function Y(W) {
            s(!1, W, "ancestor-scroll");
        }
        i(Y, "onScroll");
        function J() {
            window.clearTimeout(K), z.current = !0;
        }
        i(J, "handleCompositionStart");
        function re() {
            K = window.setTimeout(()=>{
                z.current = !1;
            }, xme() ? 5 : 0);
        }
        i(re, "handleCompositionEnd");
        const ne = E0(l.floating);
        m && (ne.addEventListener("keydown", L ? O : q, L), ne.addEventListener("compositionstart", J), ne.addEventListener("compositionend", re)), I && ne.addEventListener(g, j ? V : B, j);
        let ae = [];
        return x && (Lo(l.domReference) && (ae = FT(l.domReference)), Lo(l.floating) && (ae = ae.concat(FT(l.floating))), !Lo(l.reference) && l.reference && l.reference.contextElement && (ae = ae.concat(FT(l.reference.contextElement)))), ae = ae.filter((W)=>{
            var oe;
            return W !== ((oe = ne.defaultView) == null ? void 0 : oe.visualViewport);
        }), ae.forEach((W)=>{
            W.addEventListener("scroll", Y, {
                passive: !0
            });
        }), ()=>{
            m && (ne.removeEventListener("keydown", L ? O : q, L), ne.removeEventListener("compositionstart", J), ne.removeEventListener("compositionend", re)), I && ne.removeEventListener(g, j ? V : B, j), ae.forEach((W)=>{
                W.removeEventListener("scroll", Y);
            }), window.clearTimeout(K);
        };
    }, [
        u,
        l,
        m,
        I,
        g,
        a,
        s,
        x,
        p,
        R,
        P,
        q,
        L,
        O,
        B,
        j,
        V
    ]), yr.useEffect(()=>{
        u.current.insideReactTree = !1;
    }, [
        u,
        I,
        g
    ]);
    const H = yr.useMemo(()=>({
            onKeyDown: q,
            ..._ && {
                [Snr[v]]: (K)=>{
                    s(!1, K.nativeEvent, "reference-press");
                },
                ...v !== "click" && {
                    onClick (K) {
                        s(!1, K.nativeEvent, "reference-press");
                    }
                }
            }
        }), [
        q,
        s,
        _,
        v
    ]), Z = yr.useMemo(()=>({
            onKeyDown: q,
            onMouseDown () {
                N.current = !0;
            },
            onMouseUp () {
                N.current = !0;
            },
            [Enr[g]]: ()=>{
                u.current.insideReactTree = !0;
            }
        }), [
        q,
        g,
        u
    ]);
    return yr.useMemo(()=>p ? {
            reference: H,
            floating: Z
        } : {}, [
        p,
        H,
        Z
    ]);
}
function dnr(r) {
    const { open: e = !1, onOpenChange: a, elements: s } = r, l = efe(), u = yr.useRef({}), [p] = yr.useState(()=>U$t()), m = WT() != null;
    {
        const C = s.reference;
        C && !Lo(C) && tnr("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
    }
    const [b, g] = yr.useState(s.reference), _ = yh((C, E, A)=>{
        u.current.openEvent = C ? E : void 0, p.emit("openchange", {
            open: C,
            event: E,
            reason: A,
            nested: m
        }), a?.(C, E, A);
    }), v = yr.useMemo(()=>({
            setPositionReference: g
        }), []), x = yr.useMemo(()=>({
            reference: b || s.reference || null,
            floating: s.floating || null,
            domReference: s.reference
        }), [
        b,
        s.reference,
        s.floating
    ]);
    return yr.useMemo(()=>({
            dataRef: u,
            open: e,
            onOpenChange: _,
            elements: x,
            events: p,
            floatingId: l,
            refs: v
        }), [
        e,
        _,
        x,
        p,
        l,
        v
    ]);
}
function Yme(r) {
    r === void 0 && (r = {});
    const { nodeId: e } = r, a = dnr({
        ...r,
        elements: {
            reference: null,
            floating: null,
            ...r.elements
        }
    }), s = r.rootContext || a, l = s.elements, [u, p] = yr.useState(null), [m, b] = yr.useState(null), _ = l?.domReference || u, v = yr.useRef(null), x = HT();
    xd(()=>{
        _ && (v.current = _);
    }, [
        _
    ]);
    const C = t$t({
        ...r,
        elements: {
            ...l,
            ...m && {
                reference: m
            }
        }
    }), E = yr.useCallback((R)=>{
        const P = Lo(R) ? {
            getBoundingClientRect: i(()=>R.getBoundingClientRect(), "getBoundingClientRect"),
            getClientRects: i(()=>R.getClientRects(), "getClientRects"),
            contextElement: R
        } : R;
        b(P), C.refs.setReference(P);
    }, [
        C.refs
    ]), A = yr.useCallback((R)=>{
        (Lo(R) || R === null) && (v.current = R, p(R)), (Lo(C.refs.reference.current) || C.refs.reference.current === null || R !== null && !Lo(R)) && C.refs.setReference(R);
    }, [
        C.refs
    ]), $ = yr.useMemo(()=>({
            ...C.refs,
            setReference: A,
            setPositionReference: E,
            domReference: v
        }), [
        C.refs,
        A,
        E
    ]), I = yr.useMemo(()=>({
            ...C.elements,
            domReference: _
        }), [
        C.elements,
        _
    ]), N = yr.useMemo(()=>({
            ...C,
            ...s,
            refs: $,
            elements: I,
            nodeId: e
        }), [
        C,
        $,
        I,
        e,
        s
    ]);
    return xd(()=>{
        s.dataRef.current.floatingContext = N;
        const R = x?.nodesRef.current.find((P)=>P.id === e);
        R && (R.context = N);
    }), yr.useMemo(()=>({
            ...C,
            context: N,
            refs: $,
            elements: I
        }), [
        C,
        $,
        I,
        N
    ]);
}
function KIe(r, e, a) {
    const s = new Map, l = a === "item";
    let u = r;
    if (l && r) {
        const { [cIt]: p, [lIt]: m, ...b } = r;
        u = b;
    }
    return {
        ...a === "floating" && {
            tabIndex: -1,
            [fnr]: ""
        },
        ...u,
        ...e.map((p)=>{
            const m = p ? p[a] : null;
            return typeof m == "function" ? r ? m(r) : null : m;
        }).concat(r).reduce((p, m)=>(m && Object.entries(m).forEach((b)=>{
                let [g, _] = b;
                if (!(l && [
                    cIt,
                    lIt
                ].includes(g))) if (g.indexOf("on") === 0) {
                    if (s.has(g) || s.set(g, []), typeof _ == "function") {
                        var v;
                        (v = s.get(g)) == null || v.push(_), p[g] = function() {
                            for(var x, C = arguments.length, E = new Array(C), A = 0; A < C; A++)E[A] = arguments[A];
                            return (x = s.get(g)) == null ? void 0 : x.map(($)=>$(...E)).find(($)=>$ !== void 0);
                        };
                    }
                } else p[g] = _;
            }), p), {})
    };
}
function XIe(r) {
    r === void 0 && (r = []);
    const e = r.map((m)=>m?.reference), a = r.map((m)=>m?.floating), s = r.map((m)=>m?.item), l = yr.useCallback((m)=>KIe(m, r, "reference"), e), u = yr.useCallback((m)=>KIe(m, r, "floating"), a), p = yr.useCallback((m)=>KIe(m, r, "item"), s);
    return yr.useMemo(()=>({
            getReferenceProps: l,
            getFloatingProps: u,
            getItemProps: p
        }), [
        l,
        u,
        p
    ]);
}
function Jme(r, e, a) {
    switch(r){
        case "vertical":
            return e;
        case "horizontal":
            return a;
        default:
            return e || a;
    }
}
function Qme(r, e) {
    return Jme(e, r === QIe || r === KY, r === bB || r === yB);
}
function YIe(r, e, a) {
    return Jme(e, r === KY, a ? r === bB : r === yB) || r === "Enter" || r === " " || r === "";
}
function J$t(r, e, a) {
    return Jme(e, a ? r === bB : r === yB, r === KY);
}
function Q$t(r, e, a, s) {
    const l = a ? r === yB : r === bB, u = r === QIe;
    return e === "both" || e === "horizontal" && s && s > 1 ? r === Anr : Jme(e, l, u);
}
function eIt(r, e) {
    const { open: a, onOpenChange: s, elements: l, floatingId: u } = r, { listRef: p, activeIndex: m, onNavigate: b = i(()=>{}, "unstable_onNavigate"), enabled: g = !0, selectedIndex: _ = null, allowEscape: v = !1, loop: x = !1, nested: C = !1, rtl: E = !1, virtual: A = !1, focusItemOnOpen: $ = "auto", focusItemOnHover: I = !0, openOnArrowKeyDown: N = !0, disabledIndices: R = void 0, orientation: P = "vertical", parentOrientation: L, cols: j = 1, scrollItemIntoView: z = !0, virtualItemRef: q, itemSizes: O, dense: B = !1 } = e;
    v && (x || zIe("`useListNavigation` looping must be enabled to allow escaping."), A || zIe("`useListNavigation` must be virtual to allow escaping.")), P === "vertical" && j > 1 && zIe("In grid list navigation mode (`cols` > 1), the `orientation` should", 'be either "horizontal" or "both".');
    const V = Hme(l.floating), H = Lb(V), Z = WT(), K = HT();
    xd(()=>{
        r.dataRef.current.orientation = P;
    }, [
        r,
        P
    ]);
    const Y = yh(()=>{
        b(ne.current === -1 ? null : ne.current);
    }), J = PIe(l.domReference), re = yr.useRef($), ne = yr.useRef(_ ?? -1), ae = yr.useRef(null), W = yr.useRef(!0), oe = yr.useRef(Y), ce = yr.useRef(!!l.floating), Q = yr.useRef(a), le = yr.useRef(!1), he = yr.useRef(!1), me = Lb(R), be = Lb(a), ue = Lb(z), ge = Lb(_), [_e, ve] = yr.useState(), [Se, Ne] = yr.useState(), je = yh(()=>{
        function Me(Fe) {
            if (A) {
                var Je;
                (Je = Fe.id) != null && Je.endsWith("-fui-option") && (Fe.id = u + "-" + Math.random().toString(16).slice(2, 10)), ve(Fe.id), K?.events.emit("virtualfocus", Fe), q && (q.current = Fe);
            } else mP(Fe, {
                sync: le.current,
                preventScroll: !0
            });
        }
        i(Me, "runFocus");
        const et = p.current[ne.current], Ue = he.current;
        et && Me(et), (le.current ? (Fe)=>Fe() : requestAnimationFrame)(()=>{
            const Fe = p.current[ne.current] || et;
            if (!Fe) return;
            et || Me(Fe);
            const Je = ue.current;
            Je && Ke && (Ue || !W.current) && (Fe.scrollIntoView == null || Fe.scrollIntoView(typeof Je == "boolean" ? {
                block: "nearest",
                inline: "nearest"
            } : Je));
        });
    });
    xd(()=>{
        g && (a && l.floating ? re.current && _ != null && (he.current = !0, ne.current = _, Y()) : ce.current && (ne.current = -1, oe.current()));
    }, [
        g,
        a,
        l.floating,
        _,
        Y
    ]), xd(()=>{
        if (g && a && l.floating) if (m == null) {
            if (le.current = !1, ge.current != null) return;
            if (ce.current && (ne.current = -1, je()), (!Q.current || !ce.current) && re.current && (ae.current != null || re.current === !0 && ae.current == null)) {
                let Me = 0;
                const et = i(()=>{
                    p.current[0] == null ? (Me < 2 && (Me ? requestAnimationFrame : queueMicrotask)(et), Me++) : (ne.current = ae.current == null || YIe(ae.current, P, E) || C ? jIe(p, me.current) : F$t(p, me.current), ae.current = null, Y());
                }, "waitForListPopulated");
                et();
            }
        } else WY(p, m) || (ne.current = m, je(), he.current = !1);
    }, [
        g,
        a,
        l.floating,
        m,
        ge,
        C,
        p,
        P,
        E,
        Y,
        je,
        me
    ]), xd(()=>{
        var Me;
        if (!g || l.floating || !K || A || !ce.current) return;
        const et = K.nodesRef.current, Ue = (Me = et.find((Je)=>Je.id === Z)) == null || (Me = Me.context) == null ? void 0 : Me.elements.floating, Be = UT(E0(l.floating)), Fe = et.some((Je)=>Je.context && Gy(Je.context.elements.floating, Be));
        Ue && !Fe && W.current && Ue.focus({
            preventScroll: !0
        });
    }, [
        g,
        l.floating,
        K,
        Z,
        A
    ]), xd(()=>{
        if (!g || !K || !A || Z) return;
        function Me(et) {
            Ne(et.id), q && (q.current = et);
        }
        return i(Me, "handleVirtualFocus"), K.events.on("virtualfocus", Me), ()=>{
            K.events.off("virtualfocus", Me);
        };
    }, [
        g,
        K,
        A,
        Z,
        q
    ]), xd(()=>{
        oe.current = Y, Q.current = a, ce.current = !!l.floating;
    }), xd(()=>{
        a || (ae.current = null, re.current = $);
    }, [
        a,
        $
    ]);
    const tt = m != null, Ke = yr.useMemo(()=>{
        function Me(Ue) {
            if (!be.current) return;
            const Be = p.current.indexOf(Ue);
            Be !== -1 && ne.current !== Be && (ne.current = Be, Y());
        }
        return i(Me, "syncCurrentTarget"), {
            onFocus (Ue) {
                let { currentTarget: Be } = Ue;
                le.current = !0, Me(Be);
            },
            onClick: i((Ue)=>{
                let { currentTarget: Be } = Ue;
                return Be.focus({
                    preventScroll: !0
                });
            }, "onClick"),
            onMouseMove (Ue) {
                let { currentTarget: Be } = Ue;
                le.current = !0, he.current = !1, I && Me(Be);
            },
            onPointerLeave (Ue) {
                let { pointerType: Be } = Ue;
                if (!(!W.current || Be === "touch") && (le.current = !0, !!I && (ne.current = -1, Y(), !A))) {
                    var Fe;
                    (Fe = H.current) == null || Fe.focus({
                        preventScroll: !0
                    });
                }
            }
        };
    }, [
        be,
        H,
        I,
        p,
        Y,
        A
    ]), nt = yr.useCallback(()=>{
        var Me;
        return L ?? (K == null || (Me = K.nodesRef.current.find((et)=>et.id === Z)) == null || (Me = Me.context) == null || (Me = Me.dataRef) == null ? void 0 : Me.current.orientation);
    }, [
        Z,
        K,
        L
    ]), ut = yh((Me)=>{
        if (W.current = !1, le.current = !0, Me.which === 229 || !be.current && Me.currentTarget === H.current) return;
        if (C && Q$t(Me.key, P, E, j)) {
            Qme(Me.key, nt()) || x1(Me), s(!1, Me.nativeEvent, "list-navigation"), Vc(l.domReference) && (A ? K?.events.emit("virtualfocus", l.domReference) : l.domReference.focus());
            return;
        }
        const et = ne.current, Ue = jIe(p, R), Be = F$t(p, R);
        if (J || (Me.key === "Home" && (x1(Me), ne.current = Ue, Y()), Me.key === "End" && (x1(Me), ne.current = Be, Y())), j > 1) {
            const Fe = O || Array.from({
                length: p.current.length
            }, ()=>({
                    width: 1,
                    height: 1
                })), Je = ztr(Fe, j, B), ee = Je.findIndex((He)=>He != null && !Vme(p, He, R)), Xe = Je.reduce((He, Ge, at)=>Ge != null && !Vme(p, Ge, R) ? at : He, -1), We = Je[Otr({
                current: Je.map((He)=>He != null ? p.current[He] : null)
            }, {
                event: Me,
                orientation: P,
                loop: x,
                rtl: E,
                cols: j,
                disabledIndices: qtr([
                    ...(typeof R != "function" ? R : null) || p.current.map((He, Ge)=>Vme(p, Ge, R) ? Ge : void 0),
                    void 0
                ], Je),
                minIndex: ee,
                maxIndex: Xe,
                prevIndex: Btr(ne.current > Be ? Ue : ne.current, Fe, Je, j, Me.key === KY ? "bl" : Me.key === (E ? bB : yB) ? "tr" : "tl"),
                stopEvent: !0
            })];
            if (We != null && (ne.current = We, Y()), P === "both") return;
        }
        if (Qme(Me.key, P)) {
            if (x1(Me), a && !A && UT(Me.currentTarget.ownerDocument) === Me.currentTarget) {
                ne.current = YIe(Me.key, P, E) ? Ue : Be, Y();
                return;
            }
            YIe(Me.key, P, E) ? x ? ne.current = et >= Be ? v && et !== p.current.length ? -1 : Ue : A0(p, {
                startingIndex: et,
                disabledIndices: R
            }) : ne.current = Math.min(Be, A0(p, {
                startingIndex: et,
                disabledIndices: R
            })) : x ? ne.current = et <= Ue ? v && et !== -1 ? p.current.length : Be : A0(p, {
                startingIndex: et,
                decrement: !0,
                disabledIndices: R
            }) : ne.current = Math.max(Ue, A0(p, {
                startingIndex: et,
                decrement: !0,
                disabledIndices: R
            })), WY(p, ne.current) && (ne.current = -1), Y();
        }
    }), it = yr.useMemo(()=>A && a && tt && {
            "aria-activedescendant": Se || _e
        }, [
        A,
        a,
        tt,
        Se,
        _e
    ]), Ze = yr.useMemo(()=>({
            "aria-orientation": P === "both" ? void 0 : P,
            ...J ? {} : it,
            onKeyDown: ut,
            onPointerMove () {
                W.current = !0;
            }
        }), [
        it,
        ut,
        P,
        J
    ]), Ie = yr.useMemo(()=>{
        function Me(Ue) {
            $ === "auto" && L$t(Ue.nativeEvent) && (re.current = !0);
        }
        i(Me, "checkVirtualMouse");
        function et(Ue) {
            re.current = $, $ === "auto" && D$t(Ue.nativeEvent) && (re.current = !0);
        }
        return i(et, "checkVirtualPointer"), {
            ...it,
            onKeyDown (Ue) {
                W.current = !1;
                const Be = Ue.key.startsWith("Arrow"), Fe = [
                    "Home",
                    "End"
                ].includes(Ue.key), Je = Be || Fe, ee = J$t(Ue.key, P, E), Xe = Q$t(Ue.key, P, E, j), We = J$t(Ue.key, nt(), E), He = Qme(Ue.key, P), Ge = (C ? We : He) || Ue.key === "Enter" || Ue.key.trim() === "";
                if (A && a) {
                    const Ft = K?.nodesRef.current.find((Ct)=>Ct.parentId == null), ft = K && Ft ? Dtr(K.nodesRef.current, Ft.id) : null;
                    if (Je && ft && q) {
                        const Ct = new KeyboardEvent("keydown", {
                            key: Ue.key,
                            bubbles: !0
                        });
                        if (ee || Xe) {
                            var at, Le;
                            const Et = ((at = ft.context) == null ? void 0 : at.elements.domReference) === Ue.currentTarget, Zt = Xe && !Et ? (Le = ft.context) == null ? void 0 : Le.elements.domReference : ee ? p.current.find((bn)=>bn?.id === _e) : null;
                            Zt && (x1(Ue), Zt.dispatchEvent(Ct), Ne(void 0));
                        }
                        if ((He || Fe) && ft.context && ft.context.open && ft.parentId && Ue.currentTarget !== ft.context.elements.domReference) {
                            var kt;
                            x1(Ue), (kt = ft.context.elements.domReference) == null || kt.dispatchEvent(Ct);
                            return;
                        }
                    }
                    return ut(Ue);
                }
                if (!(!a && !N && Be)) {
                    if (Ge) {
                        const Ft = Qme(Ue.key, nt());
                        ae.current = C && Ft ? null : Ue.key;
                    }
                    if (C) {
                        We && (x1(Ue), a ? (ne.current = jIe(p, me.current), Y()) : s(!0, Ue.nativeEvent, "list-navigation"));
                        return;
                    }
                    He && (_ != null && (ne.current = _), x1(Ue), !a && N ? s(!0, Ue.nativeEvent, "list-navigation") : ut(Ue), a && Y());
                }
            },
            onFocus () {
                a && !A && (ne.current = -1, Y());
            },
            onPointerDown: et,
            onPointerEnter: et,
            onMouseDown: Me,
            onClick: Me
        };
    }, [
        _e,
        it,
        j,
        ut,
        me,
        $,
        p,
        C,
        Y,
        s,
        a,
        N,
        P,
        nt,
        E,
        _,
        K,
        A,
        q
    ]);
    return yr.useMemo(()=>g ? {
            reference: Ie,
            floating: Ze,
            item: Ke
        } : {}, [
        g,
        Ie,
        Ze,
        Ke
    ]);
}
function JIe(r, e) {
    var a, s;
    e === void 0 && (e = {});
    const { open: l, elements: u, floatingId: p } = r, { enabled: m = !0, role: b = "dialog" } = e, g = efe(), _ = ((a = u.domReference) == null ? void 0 : a.id) || g, v = yr.useMemo(()=>{
        var N;
        return ((N = Hme(u.floating)) == null ? void 0 : N.id) || p;
    }, [
        u.floating,
        p
    ]), x = (s = Tnr.get(b)) != null ? s : b, E = WT() != null, A = yr.useMemo(()=>x === "tooltip" || b === "label" ? {
            ["aria-" + (b === "label" ? "labelledby" : "describedby")]: l ? v : void 0
        } : {
            "aria-expanded": l ? "true" : "false",
            "aria-haspopup": x === "alertdialog" ? "dialog" : x,
            "aria-controls": l ? v : void 0,
            ...x === "listbox" && {
                role: "combobox"
            },
            ...x === "menu" && {
                id: _
            },
            ...x === "menu" && E && {
                role: "menuitem"
            },
            ...b === "select" && {
                "aria-autocomplete": "none"
            },
            ...b === "combobox" && {
                "aria-autocomplete": "list"
            }
        }, [
        x,
        v,
        E,
        l,
        _,
        b
    ]), $ = yr.useMemo(()=>{
        const N = {
            id: v,
            ...x && {
                role: x
            }
        };
        return x === "tooltip" || b === "label" ? N : {
            ...N,
            ...x === "menu" && {
                "aria-labelledby": _
            }
        };
    }, [
        x,
        v,
        _,
        b
    ]), I = yr.useCallback((N)=>{
        let { active: R, selected: P } = N;
        const L = {
            role: "option",
            ...R && {
                id: v + "-fui-option"
            }
        };
        switch(b){
            case "select":
            case "combobox":
                return {
                    ...L,
                    "aria-selected": P
                };
        }
        return {};
    }, [
        v,
        b
    ]);
    return yr.useMemo(()=>m ? {
            reference: A,
            floating: $,
            item: I
        } : {}, [
        m,
        A,
        $,
        I
    ]);
}
function gB(r, e) {
    return typeof r == "function" ? r(e) : r;
}
function pnr(r, e) {
    const [a, s] = yr.useState(r);
    return r && !a && s(!0), yr.useEffect(()=>{
        if (!r && a) {
            const l = setTimeout(()=>s(!1), e);
            return ()=>clearTimeout(l);
        }
    }, [
        r,
        a,
        e
    ]), a;
}
function tIt(r, e) {
    e === void 0 && (e = {});
    const { open: a, elements: { floating: s } } = r, { duration: l = 250 } = e, p = (typeof l == "number" ? l : l.close) || 0, [m, b] = yr.useState("unmounted"), g = pnr(a, p);
    return !g && m === "close" && b("unmounted"), xd(()=>{
        if (s) {
            if (a) {
                b("initial");
                const _ = requestAnimationFrame(()=>{
                    tHn.flushSync(()=>{
                        b("open");
                    });
                });
                return ()=>{
                    cancelAnimationFrame(_);
                };
            }
            b("close");
        }
    }, [
        a,
        s
    ]), {
        isMounted: g,
        status: m
    };
}
function nIt(r, e) {
    e === void 0 && (e = {});
    const { initial: a = {
        opacity: 0
    }, open: s, close: l, common: u, duration: p = 250 } = e, m = r.placement, b = m.split("-")[0], g = yr.useMemo(()=>({
            side: b,
            placement: m
        }), [
        b,
        m
    ]), _ = typeof p == "number", v = (_ ? p : p.open) || 0, x = (_ ? p : p.close) || 0, [C, E] = yr.useState(()=>({
            ...gB(u, g),
            ...gB(a, g)
        })), { isMounted: A, status: $ } = tIt(r, {
        duration: p
    }), I = Lb(a), N = Lb(s), R = Lb(l), P = Lb(u);
    return xd(()=>{
        const L = gB(I.current, g), j = gB(R.current, g), z = gB(P.current, g), q = gB(N.current, g) || Object.keys(L).reduce((O, B)=>(O[B] = "", O), {});
        if ($ === "initial" && E((O)=>({
                transitionProperty: O.transitionProperty,
                ...z,
                ...L
            })), $ === "open" && E({
            transitionProperty: Object.keys(q).map(xIt).join(","),
            transitionDuration: v + "ms",
            ...z,
            ...q
        }), $ === "close") {
            const O = j || L;
            E({
                transitionProperty: Object.keys(O).map(xIt).join(","),
                transitionDuration: x + "ms",
                ...z,
                ...O
            });
        }
    }, [
        x,
        R,
        I,
        N,
        P,
        v,
        $,
        g
    ]), {
        isMounted: A,
        styles: C
    };
}
function rIt(r, e) {
    var a;
    const { open: s, dataRef: l } = r, { listRef: u, activeIndex: p, onMatch: m, onTypingChange: b, enabled: g = !0, findMatch: _ = null, resetMs: v = 750, ignoreKeys: x = [], selectedIndex: C = null } = e, E = yr.useRef(-1), A = yr.useRef(""), $ = yr.useRef((a = C ?? p) != null ? a : -1), I = yr.useRef(null), N = yh(m), R = yh(b), P = Lb(_), L = Lb(x);
    xd(()=>{
        s && (T0(E), I.current = null, A.current = "");
    }, [
        s
    ]), xd(()=>{
        if (s && A.current === "") {
            var B;
            $.current = (B = C ?? p) != null ? B : -1;
        }
    }, [
        s,
        C,
        p
    ]);
    const j = yh((B)=>{
        B ? l.current.typing || (l.current.typing = B, R(B)) : l.current.typing && (l.current.typing = B, R(B));
    }), z = yh((B)=>{
        function V(J, re, ne) {
            const ae = P.current ? P.current(re, ne) : re.find((W)=>W?.toLocaleLowerCase().indexOf(ne.toLocaleLowerCase()) === 0);
            return ae ? J.indexOf(ae) : -1;
        }
        i(V, "getMatchingIndex");
        const H = u.current;
        if (A.current.length > 0 && A.current[0] !== " " && (V(H, H, A.current) === -1 ? j(!1) : B.key === " " && x1(B)), H == null || L.current.includes(B.key) || B.key.length !== 1 || B.ctrlKey || B.metaKey || B.altKey) return;
        s && B.key !== " " && (x1(B), j(!0)), H.every((J)=>{
            var re, ne;
            return J ? ((re = J[0]) == null ? void 0 : re.toLocaleLowerCase()) !== ((ne = J[1]) == null ? void 0 : ne.toLocaleLowerCase()) : !0;
        }) && A.current === B.key && (A.current = "", $.current = I.current), A.current += B.key, T0(E), E.current = window.setTimeout(()=>{
            A.current = "", $.current = I.current, j(!1);
        }, v);
        const K = $.current, Y = V(H, [
            ...H.slice((K || 0) + 1),
            ...H.slice(0, (K || 0) + 1)
        ], A.current);
        Y !== -1 ? (N(Y), I.current = Y) : B.key !== " " && (A.current = "", j(!1));
    }), q = yr.useMemo(()=>({
            onKeyDown: z
        }), [
        z
    ]), O = yr.useMemo(()=>({
            onKeyDown: z,
            onKeyUp (B) {
                B.key === " " && j(!1);
            }
        }), [
        z,
        j
    ]);
    return yr.useMemo(()=>g ? {
            reference: q,
            floating: O
        } : {}, [
        g,
        q,
        O
    ]);
}
function iIt(r, e, a) {
    return a === void 0 && (a = !0), r.filter((l)=>{
        var u;
        return l.parentId === e && (!a || ((u = l.context) == null ? void 0 : u.open));
    }).flatMap((l)=>[
            l,
            ...iIt(r, l.id, a)
        ]);
}
function aIt(r, e) {
    const [a, s] = r;
    let l = !1;
    const u = e.length;
    for(let p = 0, m = u - 1; p < u; m = p++){
        const [b, g] = e[p] || [
            0,
            0
        ], [_, v] = e[m] || [
            0,
            0
        ];
        g >= s != v >= s && a <= (_ - b) * (s - g) / (v - g) + b && (l = !l);
    }
    return l;
}
function mnr(r, e) {
    return r[0] >= e.x && r[0] <= e.x + e.width && r[1] >= e.y && r[1] <= e.y + e.height;
}
function oIt(r) {
    r === void 0 && (r = {});
    const { buffer: e = .5, blockPointerEvents: a = !1, requireIntent: s = !0 } = r, l = {
        current: -1
    };
    let u = !1, p = null, m = null, b = typeof performance < "u" ? performance.now() : 0;
    function g(v, x) {
        const C = performance.now(), E = C - b;
        if (p === null || m === null || E === 0) return p = v, m = x, b = C, null;
        const A = v - p, $ = x - m, N = Math.sqrt(A * A + $ * $) / E;
        return p = v, m = x, b = C, N;
    }
    i(g, "getCursorSpeed");
    const _ = i((v)=>{
        let { x, y: C, placement: E, elements: A, onClose: $, nodeId: I, tree: N } = v;
        return i(function(P) {
            function L() {
                T0(l), $();
            }
            if (i(L, "close"), T0(l), !A.domReference || !A.floating || E == null || x == null || C == null) return;
            const { clientX: j, clientY: z } = P, q = [
                j,
                z
            ], O = rnr(P), B = P.type === "mouseleave", V = WIe(A.floating, O), H = WIe(A.domReference, O), Z = A.domReference.getBoundingClientRect(), K = A.floating.getBoundingClientRect(), Y = E.split("-")[0], J = x > K.right - K.width / 2, re = C > K.bottom - K.height / 2, ne = mnr(q, Z), ae = K.width > Z.width, W = K.height > Z.height, oe = (ae ? Z : K).left, ce = (ae ? Z : K).right, Q = (W ? Z : K).top, le = (W ? Z : K).bottom;
            if (V && (u = !0, !B)) return;
            if (H && (u = !1), H && !B) {
                u = !0;
                return;
            }
            if (B && Lo(P.relatedTarget) && WIe(A.floating, P.relatedTarget) || N && iIt(N.nodesRef.current, I).length) return;
            if (Y === "top" && C >= Z.bottom - 1 || Y === "bottom" && C <= Z.top + 1 || Y === "left" && x >= Z.right - 1 || Y === "right" && x <= Z.left + 1) return L();
            let he = [];
            switch(Y){
                case "top":
                    he = [
                        [
                            oe,
                            Z.top + 1
                        ],
                        [
                            oe,
                            K.bottom - 1
                        ],
                        [
                            ce,
                            K.bottom - 1
                        ],
                        [
                            ce,
                            Z.top + 1
                        ]
                    ];
                    break;
                case "bottom":
                    he = [
                        [
                            oe,
                            K.top + 1
                        ],
                        [
                            oe,
                            Z.bottom - 1
                        ],
                        [
                            ce,
                            Z.bottom - 1
                        ],
                        [
                            ce,
                            K.top + 1
                        ]
                    ];
                    break;
                case "left":
                    he = [
                        [
                            K.right - 1,
                            le
                        ],
                        [
                            K.right - 1,
                            Q
                        ],
                        [
                            Z.left + 1,
                            Q
                        ],
                        [
                            Z.left + 1,
                            le
                        ]
                    ];
                    break;
                case "right":
                    he = [
                        [
                            Z.right - 1,
                            le
                        ],
                        [
                            Z.right - 1,
                            Q
                        ],
                        [
                            K.left + 1,
                            Q
                        ],
                        [
                            K.left + 1,
                            le
                        ]
                    ];
                    break;
            }
            function me(be) {
                let [ue, ge] = be;
                switch(Y){
                    case "top":
                        {
                            const _e = [
                                ae ? ue + e / 2 : J ? ue + e * 4 : ue - e * 4,
                                ge + e + 1
                            ], ve = [
                                ae ? ue - e / 2 : J ? ue + e * 4 : ue - e * 4,
                                ge + e + 1
                            ], Se = [
                                [
                                    K.left,
                                    J || ae ? K.bottom - e : K.top
                                ],
                                [
                                    K.right,
                                    J ? ae ? K.bottom - e : K.top : K.bottom - e
                                ]
                            ];
                            return [
                                _e,
                                ve,
                                ...Se
                            ];
                        }
                    case "bottom":
                        {
                            const _e = [
                                ae ? ue + e / 2 : J ? ue + e * 4 : ue - e * 4,
                                ge - e
                            ], ve = [
                                ae ? ue - e / 2 : J ? ue + e * 4 : ue - e * 4,
                                ge - e
                            ], Se = [
                                [
                                    K.left,
                                    J || ae ? K.top + e : K.bottom
                                ],
                                [
                                    K.right,
                                    J ? ae ? K.top + e : K.bottom : K.top + e
                                ]
                            ];
                            return [
                                _e,
                                ve,
                                ...Se
                            ];
                        }
                    case "left":
                        {
                            const _e = [
                                ue + e + 1,
                                W ? ge + e / 2 : re ? ge + e * 4 : ge - e * 4
                            ], ve = [
                                ue + e + 1,
                                W ? ge - e / 2 : re ? ge + e * 4 : ge - e * 4
                            ];
                            return [
                                ...[
                                    [
                                        re || W ? K.right - e : K.left,
                                        K.top
                                    ],
                                    [
                                        re ? W ? K.right - e : K.left : K.right - e,
                                        K.bottom
                                    ]
                                ],
                                _e,
                                ve
                            ];
                        }
                    case "right":
                        {
                            const _e = [
                                ue - e,
                                W ? ge + e / 2 : re ? ge + e * 4 : ge - e * 4
                            ], ve = [
                                ue - e,
                                W ? ge - e / 2 : re ? ge + e * 4 : ge - e * 4
                            ], Se = [
                                [
                                    re || W ? K.left + e : K.right,
                                    K.top
                                ],
                                [
                                    re ? W ? K.left + e : K.right : K.left + e,
                                    K.bottom
                                ]
                            ];
                            return [
                                _e,
                                ve,
                                ...Se
                            ];
                        }
                }
            }
            if (i(me, "getPolygon"), !aIt([
                j,
                z
            ], he)) {
                if (u && !ne) return L();
                if (!B && s) {
                    const be = g(P.clientX, P.clientY);
                    if (be !== null && be < .1) return L();
                }
                aIt([
                    j,
                    z
                ], me([
                    x,
                    C
                ])) ? !u && s && (l.current = window.setTimeout(L, 40)) : L();
            }
        }, "onMouseMove");
    }, "fn");
    return _.__options = {
        blockPointerEvents: a
    }, _;
}
var sIt, fnr, cIt, lIt, bB, yB, QIe, KY, hnr, gnr, Aki, bnr, uIt, ynr, dIt, wnr, efe, tfe, pIt, mIt, WT, HT, fIt, hIt, wB, nfe, rfe, eNe, _nr, gIt, knr, ife, afe, bIt, yIt, wIt, vnr, ZT, xnr, ofe, _It, kIt, Cnr, Snr, Enr, vIt, Anr, Tnr, xIt;
export { Aki, Anr, BIe, Cnr, Enr, G$t, GIe, H$t, HIe, HT, J$t, JIe, Jme, K$t, KIe, KY, Kme, Q$t, QIe, Qme, Qtr, Snr, T0, Tnr, U$t, UIe, V$t, VIe, VY, W$t, WIe, WT, X$t, XIe, Xme, Y$t, YIe, Yme, Z$t, ZIe, ZT, _It, _nr, aIt, afe, anr, bB, bIt, bnr, cIt, cnr, dIt, dnr, eIt, eNe, efe, enr, fIt, fnr, gB, gIt, gnr, hB, hIt, hnr, iIt, ife, inr, kIt, knr, lIt, lnr, mIt, mP, mnr, nIt, nfe, nnr, oIt, ofe, onr, pIt, pnr, q$t, qIe, rIt, rfe, rnr, sIt, snr, tIt, tfe, tk, tnr, uIt, unr, vIt, vnr, wB, wIt, wnr, xIt, xnr, yB, yIt, ynr, zIe };
var __wakaru_Db_initialized = false;
export function Db() {
if (__wakaru_Db_initialized) return;
__wakaru_Db_initialized = true;
Jtr(), Ou(), Rtr(), Mme(), Mme(), i(tk, "useMergeRefs"), i(Qtr, "sortByDocumentPosition"), sIt = yr.createContext({
    register: i(()=>{}, "register"),
    unregister: i(()=>{}, "unregister"),
    map: new Map,
    elementsRef: {
        current: []
    }
}), i(q$t, "FloatingList"), i(Kme, "useListItem"), fnr = "data-floating-ui-focusable", cIt = "active", lIt = "selected", bB = "ArrowLeft", yB = "ArrowRight", QIe = "ArrowUp", KY = "ArrowDown", hnr = [
    bB,
    yB
], gnr = [
    QIe,
    KY
], Aki = [
    ...hnr,
    ...gnr
], bnr = {
    ...yr
}, uIt = !1, ynr = 0, dIt = i(()=>"floating-ui-" + Math.random().toString(36).slice(2, 6) + ynr++, "genId"), i(enr, "useFloatingId"), wnr = bnr.useId, efe = wnr || enr, tfe = new Set, i(zIe, "warn"), i(tnr, "error"), i(U$t, "createEventEmitter"), pIt = yr.createContext(null), mIt = yr.createContext(null), WT = i(()=>{
    var r;
    return ((r = yr.useContext(pIt)) == null ? void 0 : r.id) || null;
}, "useFloatingParentNodeId"), HT = i(()=>yr.useContext(mIt), "useFloatingTree"), i(BIe, "useFloatingNodeId"), i(qIe, "FloatingNode"), i(nnr, "FloatingTree"), i(hB, "createAttribute"), i(T0, "clearTimeoutIfSet"), fIt = hB("safe-polygon"), i(UIe, "getDelay"), i(GIe, "getRestMs"), i(G$t, "useHover"), hIt = 0, i(mP, "enqueueFocus"), i(WIe, "contains"), i(rnr, "getTarget"), i(inr, "getDocument"), wB = {
    inert: new WeakMap,
    "aria-hidden": new WeakMap,
    none: new WeakMap
}, i(W$t, "getCounterMap"), nfe = new WeakSet, rfe = {}, eNe = 0, _nr = i(()=>typeof HTMLElement < "u" && "inert" in HTMLElement.prototype, "supportsInert"), gIt = i((r)=>r && (r.host || gIt(r.parentNode)), "unwrapHost"), knr = i((r, e)=>e.map((a)=>{
        if (r.contains(a)) return a;
        const s = gIt(a);
        return r.contains(s) ? s : null;
    }).filter((a)=>a != null), "correctElements"), i(anr, "applyAttributeToOthers"), i(H$t, "markOthers"), ife = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "fixed",
    whiteSpace: "nowrap",
    width: "1px",
    top: 0,
    left: 0
}, afe = yr.forwardRef(i(function(e, a) {
    const [s, l] = yr.useState();
    xd(()=>{
        Ptr() && l("button");
    }, []);
    const u = {
        ref: a,
        tabIndex: 0,
        role: s,
        "aria-hidden": s ? void 0 : !0,
        [hB("focus-guard")]: "",
        style: ife
    };
    return g4("span", {
        ...e,
        ...u
    });
}, "FocusGuard")), bIt = yr.createContext(null), yIt = hB("portal"), i(onr, "useFloatingPortalNode"), i(VY, "FloatingPortal"), wIt = i(()=>yr.useContext(bIt), "usePortalContext"), i(Z$t, "useLiteMergeRefs"), vnr = 20, ZT = [], i(HIe, "clearDisconnectedPreviouslyFocusedElements"), i(snr, "addPreviouslyFocusedElement"), i(V$t, "getPreviouslyFocusedElement"), i(cnr, "getFirstTabbableElement"), i(K$t, "handleTabIndex"), xnr = yr.forwardRef(i(function(e, a) {
    return g4("button", {
        ...e,
        type: "button",
        ref: a,
        tabIndex: -1,
        style: ife
    });
}, "VisuallyHiddenDismiss")), i(Xme, "FloatingFocusManager"), ofe = 0, _It = "--floating-ui-scrollbar-width", i(lnr, "enableScrollLock"), kIt = i(()=>{}, "cleanup"), Cnr = yr.forwardRef(i(function(e, a) {
    const { lockScroll: s = !1, ...l } = e;
    return xd(()=>{
        if (s) return ofe++, ofe === 1 && (kIt = lnr()), ()=>{
            ofe--, ofe === 0 && kIt();
        };
    }, [
        s
    ]), g4("div", {
        ref: a,
        ...l,
        style: {
            position: "fixed",
            overflow: "auto",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...l.style
        }
    });
}, "FloatingOverlay")), i(X$t, "isButtonTarget"), i(unr, "isAnchorTarget"), i(Y$t, "isSpaceIgnored"), i(ZIe, "useClick"), Snr = {
    pointerdown: "onPointerDown",
    mousedown: "onMouseDown",
    click: "onClick"
}, Enr = {
    pointerdown: "onPointerDownCapture",
    mousedown: "onMouseDownCapture",
    click: "onClickCapture"
}, vIt = i((r)=>{
    var e, a;
    return {
        escapeKey: typeof r == "boolean" ? r : (e = r?.escapeKey) != null ? e : !1,
        outsidePress: typeof r == "boolean" ? r : (a = r?.outsidePress) != null ? a : !0
    };
}, "normalizeProp"), i(VIe, "useDismiss"), i(dnr, "useFloatingRootContext"), i(Yme, "useFloating"), i(KIe, "mergeProps"), i(XIe, "useInteractions"), Anr = "Escape", i(Jme, "doSwitch"), i(Qme, "isMainOrientationKey"), i(YIe, "isMainOrientationToEndKey"), i(J$t, "isCrossOrientationOpenKey"), i(Q$t, "isCrossOrientationCloseKey"), i(eIt, "useListNavigation"), Tnr = new Map([
    [
        "select",
        "listbox"
    ],
    [
        "combobox",
        "listbox"
    ],
    [
        "label",
        !1
    ]
]), i(JIe, "useRole"), xIt = i((r)=>r.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, a)=>(a ? "-" : "") + e.toLowerCase()), "camelCaseToKebabCase"), i(gB, "execWithArgsOrReturn"), i(pnr, "useDelayUnmount"), i(tIt, "useTransitionStatus"), i(nIt, "useTransitionStyles"), i(rIt, "useTypeahead"), i(iIt, "getNodeChildren"), i(aIt, "isPointInPolygon"), i(mnr, "isInside"), i(oIt, "safePolygon");

}
