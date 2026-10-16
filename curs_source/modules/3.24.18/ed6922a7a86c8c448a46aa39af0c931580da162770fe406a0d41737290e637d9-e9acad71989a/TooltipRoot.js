import { LTi, Lkn } from "./TooltipRootContext.js";
import { Iul, nOg } from "./TooltipStore.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { QK } from "./mergeProps.js";
import { s$ } from "./popupStoreUtils.js";
import { CSn, QCi, Qu, Tgt, s1i, sOg, wSn } from "./qIc.js";
import { aCe, bds, g_, lN } from "./reason-parts.js";
import { x } from "./tslib.es6.js";
import { vMg } from "./useClientPoint.js";
import { Hgt } from "./useDismiss.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { jsxs as iOg } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as rOg } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as v5t from "./react-runtime/react/esm-index-production.js";
var mgs;
export { mgs };
var __wakaru_oOg_initialized = false;
export function oOg() {
if (__wakaru_oOg_initialized) return;
__wakaru_oOg_initialized = true;
x(), Tgt(), af(), Lkn(), Ty(), nOg(), s$(), g_(), Hgt(), vMg(), QK(), mgs = QCi(function(t) {
    const { disabled: n = !1, defaultOpen: i = !1, open: r, disableHoverablePopup: s = !1, trackCursorAxis: o = "none", actionsRef: a, onOpenChange: c, onOpenChangeComplete: l, handle: u, triggerId: h, defaultTriggerId: p = null, children: g } = t, f = Iul.useStore(u?.store, {
        open: i,
        openProp: r,
        activeTriggerId: p,
        triggerIdProp: h
    });
    s1i(f, r, i, p), f.useControlledProp("openProp", r), f.useControlledProp("triggerIdProp", h), f.useContextCallback("onOpenChange", c), f.useContextCallback("onOpenChangeComplete", l);
    const v = f.useState("open"), b = !n && v, y = f.useState("activeTriggerId"), T = f.useState("mounted"), E = f.useState("payload");
    f.useSyncedValues({
        trackCursorAxis: o,
        disableHoverablePopup: s
    }), f.useSyncedValue("disabled", n), wSn(f, {
        closeOnActiveTriggerUnmount: !0
    });
    const { forceUnmount: A, transitionStatus: R } = CSn(b, f), D = f.useState("isInstantPhase"), P = f.useState("instantType"), N = f.useState("lastOpenChangeReason"), O = v5t.useRef(null);
    gl(()=>{
        v && n && f.setOpen(!1, Qu(bds));
    }, [
        v,
        n,
        f
    ]), gl(()=>{
        R === "ending" && N === lN || R !== "ending" && D ? (P !== "delay" && (O.current = P), f.set("instantType", "delay")) : O.current !== null && (f.set("instantType", O.current), O.current = null);
    }, [
        R,
        D,
        N,
        P,
        f
    ]), gl(()=>{
        b && y == null && f.set("payload", void 0);
    }, [
        f,
        y,
        b
    ]);
    const F = v5t.useCallback(()=>{
        f.setOpen(!1, Qu(aCe));
    }, [
        f
    ]);
    v5t.useImperativeHandle(a, ()=>({
            unmount: A,
            close: F
        }), [
        A,
        F
    ]);
    const H = b || T || !n && o !== "none";
    return iOg(LTi.Provider, {
        value: f,
        children: [
            H && rOg(sOg, {
                store: f,
                disabled: n,
                trackCursorAxis: o
            }),
            typeof g == "function" ? g({
                payload: E
            }) : g
        ]
    });
}), process.env.NODE_ENV !== "production" && (mgs.displayName = "TooltipRoot");

}
