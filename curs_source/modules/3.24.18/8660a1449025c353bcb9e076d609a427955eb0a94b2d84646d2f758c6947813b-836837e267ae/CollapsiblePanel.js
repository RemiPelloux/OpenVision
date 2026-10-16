import { hxS, yva } from "./CollapsiblePanelCssVars.js";
import { fva } from "./CollapsibleRootContext.js";
import { Lm, MXd, zvn } from "./LYd.js";
import { R$h, lxS } from "./ipa.js";
import { DXd } from "./resolveStyle.js";
import { B$h, vva } from "./stateAttributesMapping_6.js";
import { E } from "./tslib.es6.js";
import { dxS } from "./useCollapsiblePanel.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { Om } from "./useRenderElement.js";
import { Vvn } from "./warn.js";
import * as pxS from "./react-runtime/react/esm-index-production.js";
var Sva;
export { Sva };
var __wakaru_mxS_initialized = false;
export function mxS() {
if (__wakaru_mxS_initialized) return;
__wakaru_mxS_initialized = true;
E(), jv(), Vvn(), DXd(), Om(), fva(), B$h(), dxS(), hxS(), Sva = pxS.forwardRef(function(e, n) {
    const { className: i, hiddenUntilFound: r, keepMounted: s, render: o, id: a, style: l, ...c } = e;
    process.env.NODE_ENV !== "production" && su(()=>{
        r && s === !1 && zvn("The `keepMounted={false}` prop on `Collapsible.Panel` is ignored when `hiddenUntilFound` is enabled, since the panel must remain mounted while closed.");
    }, [
        r,
        s
    ]);
    const { mounted: u, onOpenChange: d, open: h, panelId: p, setMounted: g, setPanelIdState: f, setOpen: _, state: b, transitionStatus: y } = R$h(), S = r ?? !1, k = s ?? !1;
    su(()=>{
        if (a) return f(a), ()=>{
            f(void 0);
        };
    }, [
        a,
        f
    ]);
    const { height: C, props: T, ref: I, shouldPreventOpenAnimation: A, shouldRender: P, transitionStatus: M, width: O } = lxS({
        externalRef: n,
        hiddenUntilFound: S,
        id: p,
        keepMounted: k,
        mounted: u,
        onOpenChange: d,
        open: h,
        setMounted: g,
        setOpen: _,
        transitionStatus: y
    }), N = {
        ...b,
        transitionStatus: M
    }, U = MXd(l, N), j = Lm("div", {
        ...e,
        style: void 0
    }, {
        state: N,
        ref: I,
        props: [
            T,
            {
                style: {
                    [yva.collapsiblePanelHeight]: C === void 0 ? "auto" : `${C}px`,
                    [yva.collapsiblePanelWidth]: O === void 0 ? "auto" : `${O}px`
                }
            },
            c,
            U ? {
                style: U
            } : void 0,
            A ? {
                style: {
                    animationName: "none"
                }
            } : void 0
        ],
        stateAttributesMapping: vva
    });
    return P ? j : null;
}), process.env.NODE_ENV !== "production" && (Sva.displayName = "CollapsiblePanel");

}
