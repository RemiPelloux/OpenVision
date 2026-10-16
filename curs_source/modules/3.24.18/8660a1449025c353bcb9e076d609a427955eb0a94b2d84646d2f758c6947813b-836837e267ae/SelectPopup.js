import { rea } from "./CSPContext.js";
import { Wj } from "./DirectionContext.js";
import { A2r, C2r, Dli, GQ, Ic, Ilh, K3, Lm, Mli, Qnt, U8t, UY, VJo, Xlh, Yah, Zlh, ak, c7t, g2, hci, nea, pu, r0, t$y, x2r, zd } from "./LYd.js";
import { jJo } from "./SelectPositionerContext.js";
import { tWe } from "./SelectRootContext.js";
import { YJo } from "./ToolbarRootContext.js";
import { b_e } from "./addEventListener.js";
import { sit } from "./clamp.js";
import { $St, g7t } from "./composite_2.js";
import { VS } from "./createBaseUIEventDetails.js";
import { Gnt, H8t } from "./engine.js";
import { BSt } from "./floating-ui.dom.js";
import { aT } from "./floating-ui.utils.dom.js";
import { Vnt } from "./floating-ui.utils.js";
import { u7t } from "./getDisabledMountTransitionStyles.js";
import { hB } from "./owner.js";
import { I4, T_e } from "./popupStateMapping.js";
import { Zb, toh } from "./reason-parts.js";
import { nWe, olh } from "./scrollEdges.js";
import { D7, l6 } from "./stateAttributesMapping.js";
import { _S, iit } from "./store_4.js";
import { Flh, dci } from "./styles.js";
import { E } from "./tslib.es6.js";
import { Hnt } from "./useAnimationFrame.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { qQ } from "./useOpenChangeComplete.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { TW } from "./useStore.js";
import { $Jo, HJo } from "./utils_17.js";
import { jsxs as Jjy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as e$y } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as f7t from "./react-runtime/react/esm-index-production.js";
var Qlh, sea, oea;
export { Qlh, oea, sea };
var __wakaru_n$y_initialized = false;
export function n$y() {
if (__wakaru_n$y_initialized) return;
__wakaru_n$y_initialized = true;
E(), Vnt(), b_e(), Jy(), hB(), jv(), Hnt(), tWe(), I4(), jJo(), Flh(), l6(), qQ(), Om(), iit(), HJo(), VS(), YJo(), g7t(), u7t(), sit(), olh(), rea(), Wj(), TW(), aT(), H8t(), Zb(), Dli(), BSt(), Qlh = {
    ...T_e,
    ...D7
}, sea = f7t.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, finalFocus: o, ...a } = e, { store: l, popupRef: c, onOpenChangeComplete: u, setOpen: d, valueRef: h, firstItemTextRef: p, selectedItemTextRef: g, multiple: f, handleScrollArrowVisibility: _, scrollHandlerRef: b, listRef: y, highlightItemOnHover: S } = Qnt(), { side: k, align: C, alignItemWithTriggerActive: T, isPositioned: I, setControlledAlignItemWithTrigger: A } = Ilh(), P = VJo(!0) != null, M = Yah(), O = K3(), { nonce: N, disableStyleElements: U } = nea(), j = Ic(l, _S.id), $ = Ic(l, _S.open), H = Ic(l, _S.openMethod), G = Ic(l, _S.mounted), q = Ic(l, _S.popupProps), K = Ic(l, _S.transitionStatus), V = Ic(l, _S.triggerElement), Y = Ic(l, _S.positionerElement), J = Ic(l, _S.listElement), Q = f7t.useRef(!1), te = f7t.useRef(!1), ee = f7t.useRef({}), re = U8t(), ie = pu((ce)=>{
        if (!Y || !c.current || !te.current) return;
        if (Q.current || !T) {
            _();
            return;
        }
        const ae = Y.style.top === "0px", de = Y.style.bottom === "0px";
        if (!ae && !de) {
            _();
            return;
        }
        const he = Zlh(Y), ge = hci(Y.getBoundingClientRect().height, "y", he), pe = ak(Y), ve = g2(Y), fe = ve.getComputedStyle(Y), Te = parseFloat(fe.marginTop), _e = parseFloat(fe.marginBottom), Ce = Xlh(ve.getComputedStyle(c.current)), Se = Math.min(pe.documentElement.clientHeight - Te - _e, Ce), Pe = ce.scrollTop, we = x2r(ce);
        let Ie = 0, Me = null, De = !1, Ne = !1;
        const be = (Ge)=>{
            Y.style.height = `${Ge}px`;
        }, je = (Ge, xe)=>{
            const Oe = UY(Ge, 0, Se - ge);
            Oe > 0 && be(ge + Oe), ce.scrollTop = xe, Se - (ge + Oe) <= nWe && (Q.current = !0), _();
        }, $e = ae ? we - Pe : Pe, Je = Math.min(ge + $e, Se);
        if (Ie = Je, $e <= nWe) {
            je($e, ae ? we : 0);
            return;
        }
        if (Se - Je > nWe) ae ? Ne = !0 : Me = 0;
        else if (De = !0, de && Pe < we) {
            const Ge = ge + $e - Se;
            Me = Pe - ($e - Ge);
        }
        if (Ie = Math.ceil(Ie), Ie !== 0 && be(Ie), Ne || Me != null) {
            const Ge = x2r(ce), xe = Ne ? Ge : UY(Me, 0, Ge);
            Math.abs(ce.scrollTop - xe) > nWe && (ce.scrollTop = xe);
        }
        (De || Ie >= Se - nWe) && (Q.current = !0), _();
    });
    f7t.useImperativeHandle(b, ()=>ie, [
        ie
    ]), GQ({
        open: $,
        ref: c,
        onComplete () {
            $ && u?.(!0);
        }
    });
    const oe = {
        open: $,
        transitionStatus: K,
        side: k,
        align: C
    };
    su(()=>{
        !Y || !c.current || Object.keys(ee.current).length || (ee.current = {
            top: Y.style.top || "0",
            left: Y.style.left || "0",
            right: Y.style.right,
            height: Y.style.height,
            bottom: Y.style.bottom,
            minHeight: Y.style.minHeight,
            maxHeight: Y.style.maxHeight,
            marginTop: Y.style.marginTop,
            marginBottom: Y.style.marginBottom
        });
    }, [
        c,
        Y
    ]), su(()=>{
        $ || T || (te.current = !1, Q.current = !1, C2r(Y, ee.current));
    }, [
        $,
        T,
        Y,
        c
    ]), su(()=>{
        const ce = c.current;
        if (!$ || !V || !Y || !ce || T && !I || l.state.transitionStatus === "ending") return;
        if (!T) {
            te.current = !0, re.request(_), ce.style.removeProperty("--transform-origin");
            return;
        }
        const ae = t$y(ce);
        ce.style.removeProperty("--transform-origin");
        try {
            let de = g.current;
            de?.isConnected || (de = !_S.hasSelectedValue(l.state) && p.current?.isConnected ? p.current : null);
            const he = h.current, ge = g2(Y), pe = ge.getComputedStyle(Y), ve = ge.getComputedStyle(ce), fe = ak(V), Te = Zlh(V), _e = A2r(V.getBoundingClientRect(), Te), Ce = A2r(Y.getBoundingClientRect(), Te), Se = _e.height, Pe = J || ce, we = Pe.scrollHeight, Ie = parseFloat(ve.borderBottomWidth), Me = parseFloat(pe.marginTop) || 10, De = parseFloat(pe.marginBottom) || 10, Ne = parseFloat(pe.minHeight) || 100, be = Xlh(ve), je = 5, $e = 5, Je = 20, Ge = fe.documentElement.clientHeight - Me - De, xe = fe.documentElement.clientWidth, Oe = Ge - _e.bottom + Se;
            let ct, Ye = O === "rtl" ? _e.right - Ce.width : _e.left, Ve = 0;
            if (de && he) {
                const qe = A2r(he.getBoundingClientRect(), Te);
                ct = A2r(de.getBoundingClientRect(), Te), Ye = Ce.left + (O === "rtl" ? qe.right - ct.right : qe.left - ct.left);
                const pt = qe.top - _e.top + qe.height / 2;
                Ve = ct.top - Ce.top + ct.height / 2 - pt;
            }
            const Xe = Oe + Ve + De + Ie;
            let lt = Math.min(Ge, Xe);
            const He = Ge - Me - De, gt = Xe - lt, ht = xe - $e;
            Y.style.left = `${UY(Ye, je, ht - Ce.width)}px`, Y.style.height = `${lt}px`, Y.style.maxHeight = "none", Y.style.marginTop = `${Me}px`, Y.style.marginBottom = `${De}px`, ce.style.height = "100%";
            const Ae = x2r(Pe), ot = gt >= Ae - nWe;
            ot && (lt = Math.min(Ge, Ce.height) - (gt - Ae));
            const Be = _e.top < Je || _e.bottom > Ge - Je || Math.ceil(lt) + nWe < Math.min(we, Ne), Ue = (ge.visualViewport?.scale ?? 1) !== 1 && Gnt;
            if (Be || Ue) {
                te.current = !0, C2r(Y, ee.current), A(!1);
                return;
            }
            const it = Math.max(Ne, lt);
            if (ot) {
                const qe = Math.max(0, Ge - Xe);
                Y.style.top = Ce.height >= He ? "0" : `${qe}px`, Y.style.height = `${lt}px`, Pe.scrollTop = x2r(Pe);
            } else Y.style.bottom = "0", Pe.scrollTop = gt;
            if (ct) {
                const qe = Ce.top, pt = Ce.height, dt = ct.top + ct.height / 2, ft = pt > 0 ? (dt - qe) / pt * 100 : 50, bt = UY(ft, 0, 100);
                ce.style.setProperty("--transform-origin", `50% ${bt}%`);
            }
            (it === Ge || lt >= be) && (Q.current = !0), _(), S && l.state.selectedIndex === null && l.state.activeIndex === null && y.current[0] != null && l.set("activeIndex", 0), te.current = !0;
        } finally{
            ae();
        }
    }, [
        l,
        $,
        Y,
        V,
        h,
        p,
        g,
        c,
        _,
        T,
        A,
        re,
        J,
        y,
        S,
        O,
        I
    ]), f7t.useEffect(()=>{
        if (!T || !Y || !$) return;
        const ce = g2(Y);
        function ae(de) {
            d(!1, zd(toh, de));
        }
        return r0(ce, "resize", ae);
    }, [
        d,
        T,
        Y,
        $
    ]);
    const se = {
        ...J ? {
            role: "presentation",
            "aria-orientation": void 0
        } : {
            role: "listbox",
            "aria-multiselectable": f || void 0,
            id: `${j}-list`
        },
        onKeyDown (ce) {
            P && $St.has(ce.key) && ce.stopPropagation();
        },
        onScroll (ce) {
            J || ie(ce.currentTarget);
        },
        ...T && {
            style: J ? {
                height: "100%"
            } : $Jo
        }
    }, le = Lm("div", e, {
        ref: [
            n,
            c
        ],
        state: oe,
        stateAttributesMapping: Qlh,
        props: [
            q,
            se,
            c7t(K),
            {
                className: !J && T ? dci.className : void 0
            },
            a
        ]
    });
    return Jjy(f7t.Fragment, {
        children: [
            !U && dci.getElement(N),
            e$y(Mli, {
                context: M,
                modal: !1,
                disabled: !G,
                openInteractionType: H,
                returnFocus: o,
                restoreFocus: !0,
                children: le
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (sea.displayName = "SelectPopup"), oea = [
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
