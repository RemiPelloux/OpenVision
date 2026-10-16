import { mol } from "./CSPContext.js";
import { yU } from "./DirectionContext.js";
import { Vhs } from "./SelectPositionerContext.js";
import { VRe } from "./SelectRootContext.js";
import { Jhs } from "./ToolbarRootContext.js";
import { Jle } from "./addEventListener.js";
import { Mhs } from "./clamp.js";
import { r5t, tkn } from "./composite_2.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { G5e, Rgt } from "./engine.js";
import { Ggt } from "./floating-ui.dom.js";
import { D0 } from "./floating-ui.utils.dom.js";
import { z5e } from "./floating-ui.utils.js";
import { tft } from "./getDisabledMountTransitionStyles.js";
import { C5 } from "./owner.js";
import { Ure, g2 } from "./popupStateMapping.js";
import { Gsl, I1i, KS, LBt, Q5e, Qu, YS, ZPg, Zgt, Zhs, _Sn, bSn, eft, fA, fol, gol, hj, hol, jc, kp, nkn, su, usl, w1i, x1i, xM } from "./qIc.js";
import { fil, g_ } from "./reason-parts.js";
import { jRe, ksl } from "./scrollEdges.js";
import { $O, T5 } from "./stateAttributesMapping.js";
import { J5e, f_ } from "./store_4.js";
import { Jsl, XSn } from "./styles.js";
import { x } from "./tslib.es6.js";
import { aYe } from "./useAnimationFrame.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { pj } from "./useOpenChangeComplete.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import { kU } from "./useStore.js";
import { jhs, qhs } from "./utils_17.js";
import { jsx as XPg } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as YPg } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as rft from "./react-runtime/react/esm-index-production.js";
var vol, rps, sps;
export { rps, sps, vol };
var __wakaru_QPg_initialized = false;
export function QPg() {
if (__wakaru_QPg_initialized) return;
__wakaru_QPg_initialized = true;
x(), z5e(), Jle(), Cy(), C5(), af(), aYe(), VRe(), g2(), Vhs(), Jsl(), $O(), pj(), wp(), J5e(), qhs(), Ty(), Jhs(), tkn(), tft(), Mhs(), ksl(), mol(), yU(), kU(), D0(), Rgt(), g_(), bSn(), Ggt(), vol = {
    ...Ure,
    ...T5
}, rps = rft.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, finalFocus: o, ...a } = t, { store: c, popupRef: l, onOpenChangeComplete: u, setOpen: h, valueRef: p, firstItemTextRef: g, selectedItemTextRef: f, multiple: v, handleScrollArrowVisibility: b, scrollHandlerRef: y, listRef: T, highlightItemOnHover: E } = Q5e(), { side: A, align: R, alignItemWithTriggerActive: D, isPositioned: P, setControlledAlignItemWithTrigger: N } = Gsl(), O = Zhs(!0) != null, F = usl(), H = xM(), { nonce: $, disableStyleElements: W } = hol(), G = jc(c, f_.id), q = jc(c, f_.open), z = jc(c, f_.openMethod), X = jc(c, f_.mounted), Y = jc(c, f_.popupProps), Z = jc(c, f_.transitionStatus), K = jc(c, f_.triggerElement), J = jc(c, f_.positionerElement), ne = jc(c, f_.listElement), ee = rft.useRef(!1), se = rft.useRef(!1), re = rft.useRef({}), ue = LBt(), ce = su((_e)=>{
        if (!J || !l.current || !se.current) return;
        if (ee.current || !D) {
            b();
            return;
        }
        const me = J.style.top === "0px", Ce = J.style.bottom === "0px";
        if (!me && !Ce) {
            b();
            return;
        }
        const xe = fol(J), Le = nkn(J.getBoundingClientRect().height, "y", xe), Be = KS(J), je = fA(J), Ge = je.getComputedStyle(J), Xe = parseFloat(Ge.marginTop), Ke = parseFloat(Ge.marginBottom), et = gol(je.getComputedStyle(l.current)), We = Math.min(Be.documentElement.clientHeight - Xe - Ke, et), it = _e.scrollTop, Ne = x1i(_e);
        let Fe = 0, Qe = null, tt = !1, st = !1;
        const vt = (lt)=>{
            J.style.height = `${lt}px`;
        }, ht = (lt, Tt)=>{
            const ct = Zgt(lt, 0, We - Le);
            ct > 0 && vt(Le + ct), _e.scrollTop = Tt, We - (Le + ct) <= jRe && (ee.current = !0), b();
        }, ut = me ? Ne - it : it, Dt = Math.min(Le + ut, We);
        if (Fe = Dt, ut <= jRe) {
            ht(ut, me ? Ne : 0);
            return;
        }
        if (We - Dt > jRe) me ? st = !0 : Qe = 0;
        else if (tt = !0, Ce && it < Ne) {
            const lt = Le + ut - We;
            Qe = it - (ut - lt);
        }
        if (Fe = Math.ceil(Fe), Fe !== 0 && vt(Fe), st || Qe != null) {
            const lt = x1i(_e), Tt = st ? lt : Zgt(Qe, 0, lt);
            Math.abs(_e.scrollTop - Tt) > jRe && (_e.scrollTop = Tt);
        }
        (tt || Fe >= We - jRe) && (ee.current = !0), b();
    });
    rft.useImperativeHandle(y, ()=>ce, [
        ce
    ]), hj({
        open: q,
        ref: l,
        onComplete () {
            q && u?.(!0);
        }
    });
    const de = {
        open: q,
        transitionStatus: Z,
        side: A,
        align: R
    };
    gl(()=>{
        !J || !l.current || Object.keys(re.current).length || (re.current = {
            top: J.style.top || "0",
            left: J.style.left || "0",
            right: J.style.right,
            height: J.style.height,
            bottom: J.style.bottom,
            minHeight: J.style.minHeight,
            maxHeight: J.style.maxHeight,
            marginTop: J.style.marginTop,
            marginBottom: J.style.marginBottom
        });
    }, [
        l,
        J
    ]), gl(()=>{
        q || D || (se.current = !1, ee.current = !1, w1i(J, re.current));
    }, [
        q,
        D,
        J,
        l
    ]), gl(()=>{
        const _e = l.current;
        if (!q || !K || !J || !_e || D && !P || c.state.transitionStatus === "ending") return;
        if (!D) {
            se.current = !0, ue.request(b), _e.style.removeProperty("--transform-origin");
            return;
        }
        const me = ZPg(_e);
        _e.style.removeProperty("--transform-origin");
        try {
            let Ce = f.current;
            Ce?.isConnected || (Ce = !f_.hasSelectedValue(c.state) && g.current?.isConnected ? g.current : null);
            const xe = p.current, Le = fA(J), Be = Le.getComputedStyle(J), je = Le.getComputedStyle(_e), Ge = KS(K), Xe = fol(K), Ke = I1i(K.getBoundingClientRect(), Xe), et = I1i(J.getBoundingClientRect(), Xe), We = Ke.height, it = ne || _e, Ne = it.scrollHeight, Fe = parseFloat(je.borderBottomWidth), Qe = parseFloat(Be.marginTop) || 10, tt = parseFloat(Be.marginBottom) || 10, st = parseFloat(Be.minHeight) || 100, vt = gol(je), ht = 5, ut = 5, Dt = 20, lt = Ge.documentElement.clientHeight - Qe - tt, Tt = Ge.documentElement.clientWidth, ct = lt - Ke.bottom + We;
            let Kt, Rt = H === "rtl" ? Ke.right - et.width : Ke.left, Gt = 0;
            if (Ce && xe) {
                const Ot = I1i(xe.getBoundingClientRect(), Xe);
                Kt = I1i(Ce.getBoundingClientRect(), Xe), Rt = et.left + (H === "rtl" ? Ot.right - Kt.right : Ot.left - Kt.left);
                const Wt = Ot.top - Ke.top + Ot.height / 2;
                Gt = Kt.top - et.top + Kt.height / 2 - Wt;
            }
            const Nt = ct + Gt + tt + Fe;
            let sn = Math.min(lt, Nt);
            const un = lt - Qe - tt, kt = Nt - sn, ot = Tt - ut;
            J.style.left = `${Zgt(Rt, ht, ot - et.width)}px`, J.style.height = `${sn}px`, J.style.maxHeight = "none", J.style.marginTop = `${Qe}px`, J.style.marginBottom = `${tt}px`, _e.style.height = "100%";
            const ze = x1i(it), St = kt >= ze - jRe;
            St && (sn = Math.min(lt, et.height) - (kt - ze));
            const ft = Ke.top < Dt || Ke.bottom > lt - Dt || Math.ceil(sn) + jRe < Math.min(Ne, st), Mt = (Le.visualViewport?.scale ?? 1) !== 1 && G5e;
            if (ft || Mt) {
                se.current = !0, w1i(J, re.current), N(!1);
                return;
            }
            const Bt = Math.max(st, sn);
            if (St) {
                const Ot = Math.max(0, lt - Nt);
                J.style.top = et.height >= un ? "0" : `${Ot}px`, J.style.height = `${sn}px`, it.scrollTop = x1i(it);
            } else J.style.bottom = "0", it.scrollTop = kt;
            if (Kt) {
                const Ot = et.top, Wt = et.height, nn = Kt.top + Kt.height / 2, pn = Wt > 0 ? (nn - Ot) / Wt * 100 : 50, Yt = Zgt(pn, 0, 100);
                _e.style.setProperty("--transform-origin", `50% ${Yt}%`);
            }
            (Bt === lt || sn >= vt) && (ee.current = !0), b(), E && c.state.selectedIndex === null && c.state.activeIndex === null && T.current[0] != null && c.set("activeIndex", 0), se.current = !0;
        } finally{
            me();
        }
    }, [
        c,
        q,
        J,
        K,
        p,
        g,
        f,
        l,
        b,
        D,
        N,
        ue,
        ne,
        T,
        E,
        H,
        P
    ]), rft.useEffect(()=>{
        if (!D || !J || !q) return;
        const _e = fA(J);
        function me(Ce) {
            h(!1, Qu(fil, Ce));
        }
        return YS(_e, "resize", me);
    }, [
        h,
        D,
        J,
        q
    ]);
    const le = {
        ...ne ? {
            role: "presentation",
            "aria-orientation": void 0
        } : {
            role: "listbox",
            "aria-multiselectable": v || void 0,
            id: `${G}-list`
        },
        onKeyDown (_e) {
            O && r5t.has(_e.key) && _e.stopPropagation();
        },
        onScroll (_e) {
            ne || ce(_e.currentTarget);
        },
        ...D && {
            style: ne ? {
                height: "100%"
            } : jhs
        }
    }, ye = kp("div", t, {
        ref: [
            n,
            l
        ],
        state: de,
        stateAttributesMapping: vol,
        props: [
            Y,
            le,
            eft(Z),
            {
                className: !ne && D ? XSn.className : void 0
            },
            a
        ]
    });
    return YPg(rft.Fragment, {
        children: [
            !W && XSn.getElement($),
            XPg(_Sn, {
                context: F,
                modal: !1,
                disabled: !X,
                openInteractionType: z,
                returnFocus: o,
                restoreFocus: !0,
                children: ye
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (rps.displayName = "SelectPopup"), sps = [
    [
        "transform",
        "none"
    ],
    [
        "scale",
        "1"
    ],
    [
        "translate",
        "0 0"
    ]
];

}
