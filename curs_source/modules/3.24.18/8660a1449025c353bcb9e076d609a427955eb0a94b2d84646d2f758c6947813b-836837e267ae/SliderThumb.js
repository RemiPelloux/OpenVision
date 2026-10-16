import { rea } from "./CSPContext.js";
import { Wj } from "./DirectionContext.js";
import { N7 } from "./FieldRootContext.js";
import { $I, Ioe, K3, Ksh, Lm, Vj, g2, iWe, nea, pu, tit, uB } from "./LYd.js";
import { Xjr } from "./SliderRootContext.js";
import { Ib1, h0p } from "./SliderThumbDataAttributes.js";
import { sit } from "./clamp.js";
import { $St, XJo, ZJo, _bn, bbn, fbn, g7t, m7t, p7t, vbn } from "./composite_2.js";
import { zHe } from "./element.js";
import { aT } from "./floating-ui.utils.dom.js";
import { ySn } from "./formatNumber.js";
import { a0p } from "./getMidpoint.js";
import { t0p } from "./getSliderValue.js";
import { HWe, Isp, Rb1, e0p, l0p, o0p, t0n, v9h, zRa } from "./ipa.js";
import { mne } from "./mergeProps.js";
import { p0p, xb1 } from "./prehydrationScript.min_2.js";
import { c0p } from "./roundValueToStep.js";
import { Kjr, T_i } from "./stateAttributesMapping_10.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { rWe } from "./useCompositeListItem.js";
import { xsp } from "./useIsHydrating.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { nit } from "./useLabelableId.js";
import { m_e } from "./useMergedRefs.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { _9h } from "./valueToPercent.js";
import { WHe, Z5e } from "./visuallyHidden.js";
import { jsxs as Ab1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as _Ht from "./react-runtime/react/esm-index-production.js";
import { jsx as m0p } from "./react-runtime/react/esm-jsx-runtime-production.js";
var g0p, ZRa;
export { ZRa, g0p };
var __wakaru_Pb1_initialized = false;
export function Pb1() {
if (__wakaru_Pb1_initialized) return;
__wakaru_Pb1_initialized = true;
E(), Jy(), jv(), m_e(), WHe(), sit(), ySn(), _A(), xsp(), Om(), _9h(), g7t(), rWe(), Wj(), rea(), N7(), zHe(), nit(), a0p(), t0p(), c0p(), Xjr(), Kjr(), Ib1(), xb1(), aT(), mne(), g0p = new Set([
    ...$St,
    XJo,
    ZJo
]), ZRa = _Ht.forwardRef(function(e, n) {
    const { render: i, children: r, className: s, "aria-describedby": o, "aria-label": a, "aria-labelledby": l, "aria-valuetext": c, disabled: u = !1, getAriaLabel: d, getAriaValueText: h, id: p, index: g, inputRef: f, onBlur: _, onFocus: b, onKeyDown: y, tabIndex: S, style: k, ...C } = e, { nonce: T } = nea(), I = $I(p), { active: A, lastUsedThumbIndex: P, controlRef: M, disabled: O, validation: N, formatOptionsRef: U, handleInputChange: j, inset: $, labelId: H, largeStep: G, locale: q, max: K, min: V, minStepsBetweenValues: Y, form: J, name: Q, orientation: te, pressedInputRef: ee, pressedThumbCenterOffsetRef: re, pressedThumbIndexRef: ie, renderBeforeHydration: oe, setActive: se, setIndicatorPosition: le, state: ce, step: ae, values: de } = zRa(), he = K3(), ge = u || O, pe = de.length > 1, ve = te === "vertical", fe = he === "rtl", { setTouched: Te, setFocused: _e, validationMode: Ce } = Vj(), Se = _Ht.useRef(null), Pe = _Ht.useRef(null), we = _Ht.useRef(!1), Ie = $I(), Me = tit(), De = pe ? Ie : Me, Ne = _Ht.useMemo(()=>({
            inputId: De
        }), [
        De
    ]), { ref: be, index: je } = iWe({
        metadata: Ne
    }), $e = pe ? g ?? je : 0, Je = $e === de.length - 1, Ge = de[$e], xe = v9h(Ge, V, K), [Oe, ct] = _Ht.useState(), Ye = Isp(), Ve = P >= 0 && P < de.length ? P : -1, Xe = pu(()=>{
        const qe = M.current, pt = Se.current;
        if (!qe || !pt) return;
        const dt = pt.getBoundingClientRect(), ft = qe.getBoundingClientRect(), bt = ve ? "height" : "width", St = ft[bt] - dt[bt], kt = (dt[bt] / 2 + St * xe / 100) / ft[bt] * 100, xt = Number.isFinite(kt) ? kt : void 0;
        ct(xt), $e === 0 ? le((Pt)=>[
                xt,
                Pt[1]
            ]) : Je && le((Pt)=>[
                Pt[0],
                xt
            ]);
    });
    su(()=>{
        $ && queueMicrotask(Xe);
    }, [
        Xe,
        $
    ]), su(()=>{
        $ && Xe();
    }, [
        Xe,
        $,
        xe
    ]), su(()=>{
        if (!$) return;
        const qe = M.current, pt = Se.current;
        if (!qe || !pt) return;
        const dt = g2(qe).ResizeObserver;
        if (typeof dt != "function") return;
        const ft = new dt(Xe);
        return ft.observe(qe), ft.observe(pt), ()=>{
            ft.disconnect();
        };
    }, [
        M,
        Xe,
        $
    ]);
    const lt = ve ? "bottom" : "insetInlineStart", He = ve ? "left" : "top";
    let gt;
    pe ? A === $e ? gt = 2 : Ve === $e && (gt = 1) : A === $e && (gt = 1);
    let ht;
    $ ? ht = {
        "--position": `${Oe ?? 0}%`,
        visibility: oe && Ye || Oe === void 0 ? "hidden" : void 0,
        position: "absolute",
        [lt]: "var(--position)",
        [He]: "50%",
        translate: `${(ve || !fe ? -1 : 1) * 50}% ${(ve ? 1 : -1) * 50}%`,
        zIndex: gt
    } : ht = Number.isFinite(xe) ? {
        position: "absolute",
        [lt]: `${xe}%`,
        [He]: "50%",
        translate: `${(ve || !fe ? -1 : 1) * 50}% ${(ve ? 1 : -1) * 50}%`,
        zIndex: gt
    } : Z5e;
    let Ae;
    te === "vertical" && (Ae = fe ? "vertical-rl" : "vertical-lr");
    const ot = typeof d == "function" ? d($e) : a, Be = uB({
        "aria-label": ot,
        "aria-labelledby": l ?? (ot == null ? H : void 0),
        "aria-describedby": o,
        "aria-orientation": te,
        "aria-valuenow": Ge,
        "aria-valuetext": typeof h == "function" ? h(HWe(Ge, q, U.current ?? void 0), Ge, $e) : c ?? Rb1(de, $e, U.current ?? void 0, q),
        disabled: ge,
        form: J,
        id: De,
        max: K,
        min: V,
        name: Q,
        onChange (qe) {
            j(qe.currentTarget.valueAsNumber, $e, qe);
        },
        onFocus (qe) {
            const pt = we.current;
            we.current = !1, se($e), _e(!0), pt && qe.stopPropagation();
        },
        onBlur (qe) {
            if (we.current) {
                qe.stopPropagation();
                return;
            }
            Se.current && (se(-1), Te(!0), _e(!1), Ce === "onBlur" && N.commit(e0p(Ge, $e, V, K, pe, de)));
        },
        onKeyDown (qe) {
            if (qe.defaultPrevented || !g0p.has(qe.key)) return;
            $St.has(qe.key) && qe.stopPropagation();
            let pt = null;
            const dt = l0p(Ge, ae, V);
            switch(qe.key){
                case p7t:
                    pt = t0n(dt, qe.shiftKey ? G : ae, 1, V, K);
                    break;
                case vbn:
                    pt = t0n(dt, qe.shiftKey ? G : ae, fe ? -1 : 1, V, K);
                    break;
                case m7t:
                    pt = t0n(dt, qe.shiftKey ? G : ae, -1, V, K);
                    break;
                case fbn:
                    pt = t0n(dt, qe.shiftKey ? G : ae, fe ? 1 : -1, V, K);
                    break;
                case XJo:
                    pt = t0n(dt, G, 1, V, K);
                    break;
                case ZJo:
                    pt = t0n(dt, G, -1, V, K);
                    break;
                case bbn:
                    pt = K, pe && (pt = Number.isFinite(de[$e + 1]) ? de[$e + 1] - ae * Y : K);
                    break;
                case _bn:
                    pt = V, pe && (pt = Number.isFinite(de[$e - 1]) ? de[$e - 1] + ae * Y : V);
                    break;
                default:
                    break;
            }
            if (pt !== null) {
                const ft = qe.currentTarget;
                Ksh(ft) || (we.current = !0, ft.blur(), ft.focus({
                    preventScroll: !0,
                    focusVisible: !0
                })), j(pt, $e, qe), qe.preventDefault();
            }
        },
        step: ae,
        style: {
            ...Z5e,
            width: "100%",
            height: "100%",
            writingMode: Ae
        },
        tabIndex: S ?? void 0,
        type: "range",
        value: Ge ?? ""
    }, (qe)=>N.getValidationProps(ge, qe), {
        onKeyDown: y
    }), Ue = Ioe(Pe, N.inputRef, f);
    return Lm("div", e, {
        state: ce,
        ref: [
            n,
            be,
            Se
        ],
        props: [
            {
                [h0p.index]: $e,
                children: Ab1(_Ht.Fragment, {
                    children: [
                        r,
                        m0p("input", {
                            ref: Ue,
                            ...Be,
                            suppressHydrationWarning: !0
                        }),
                        $ && Ye && oe && Je && m0p("script", {
                            nonce: T,
                            dangerouslySetInnerHTML: {
                                __html: p0p
                            },
                            suppressHydrationWarning: !0
                        })
                    ]
                }),
                id: I,
                onBlur: _,
                onFocus: b,
                onPointerDown (qe) {
                    if (!ge) {
                        if (ie.current = $e, Se.current != null) {
                            const pt = te === "horizontal" ? "x" : "y", dt = o0p(Se.current), ft = (te === "horizontal" ? qe.clientX : qe.clientY) - dt[pt];
                            re.current = ft;
                        }
                        Pe.current != null && ee.current !== Pe.current && (ee.current = Pe.current);
                    }
                },
                style: ht,
                suppressHydrationWarning: oe || void 0
            },
            C
        ],
        stateAttributesMapping: T_i
    });
}), process.env.NODE_ENV !== "production" && (ZRa.displayName = "SliderThumb");

}
