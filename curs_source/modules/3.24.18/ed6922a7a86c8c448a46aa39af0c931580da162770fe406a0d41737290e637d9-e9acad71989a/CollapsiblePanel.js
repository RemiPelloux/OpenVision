import { FEs, ygf } from "./CollapsiblePanelCssVars.js";
import { PEs } from "./CollapsibleRootContext.js";
import { fgf, w6l } from "./f0s.js";
import { kKc, kp, qbn } from "./qIc.js";
import { wKc } from "./resolveStyle.js";
import { D6l, LEs } from "./stateAttributesMapping_6.js";
import { x } from "./tslib.es6.js";
import { bgf } from "./useCollapsiblePanel.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { wp } from "./useRenderElement.js";
import { zbn } from "./warn.js";
import * as Sgf from "./react-runtime/react/esm-index-production.js";
var BEs;
export { BEs };
var __wakaru_kgf_initialized = false;
export function kgf() {
if (__wakaru_kgf_initialized) return;
__wakaru_kgf_initialized = true;
x(), af(), zbn(), wKc(), wp(), PEs(), D6l(), bgf(), ygf(), BEs = Sgf.forwardRef(function(t, n) {
    const { className: i, hiddenUntilFound: r, keepMounted: s, render: o, id: a, style: c, ...l } = t;
    process.env.NODE_ENV !== "production" && gl(()=>{
        r && s === !1 && qbn("The `keepMounted={false}` prop on `Collapsible.Panel` is ignored when `hiddenUntilFound` is enabled, since the panel must remain mounted while closed.");
    }, [
        r,
        s
    ]);
    const { mounted: u, onOpenChange: h, open: p, panelId: g, setMounted: f, setPanelIdState: v, setOpen: b, state: y, transitionStatus: T } = w6l(), E = r ?? !1, A = s ?? !1;
    gl(()=>{
        if (a) return v(a), ()=>{
            v(void 0);
        };
    }, [
        a,
        v
    ]);
    const { height: R, props: D, ref: P, shouldPreventOpenAnimation: N, shouldRender: O, transitionStatus: F, width: H } = fgf({
        externalRef: n,
        hiddenUntilFound: E,
        id: g,
        keepMounted: A,
        mounted: u,
        onOpenChange: h,
        open: p,
        setMounted: f,
        setOpen: b,
        transitionStatus: T
    }), $ = {
        ...y,
        transitionStatus: F
    }, W = kKc(c, $), G = kp("div", {
        ...t,
        style: void 0
    }, {
        state: $,
        ref: P,
        props: [
            D,
            {
                style: {
                    [FEs.collapsiblePanelHeight]: R === void 0 ? "auto" : `${R}px`,
                    [FEs.collapsiblePanelWidth]: H === void 0 ? "auto" : `${H}px`
                }
            },
            l,
            W ? {
                style: W
            } : void 0,
            N ? {
                style: {
                    animationName: "none"
                }
            } : void 0
        ],
        stateAttributesMapping: LEs
    });
    return O ? G : null;
}), process.env.NODE_ENV !== "production" && (BEs.displayName = "CollapsiblePanel");

}
