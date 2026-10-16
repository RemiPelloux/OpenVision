import { $li, Hli, JAr, O8t, n2r, rGy, zd } from "./LYd.js";
import { Kci, UPr } from "./TooltipRootContext.js";
import { Ina, jhh } from "./TooltipStore.js";
import { VS } from "./createBaseUIEventDetails.js";
import { mne } from "./mergeProps.js";
import { FY } from "./popupStoreUtils.js";
import { Uwe, Zb, bQo, kO } from "./reason-parts.js";
import { E } from "./tslib.es6.js";
import { SUy } from "./useClientPoint.js";
import { J8t } from "./useDismiss.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import * as Nbn from "./react-runtime/react/esm-index-production.js";
import { jsx as iGy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as nGy } from "./react-runtime/react/esm-jsx-runtime-production.js";
var jPr;
export { jPr };
var __wakaru_$hh_initialized = false;
export function $hh() {
if (__wakaru_$hh_initialized) return;
__wakaru_$hh_initialized = true;
E(), O8t(), jv(), Kci(), VS(), jhh(), FY(), Zb(), J8t(), SUy(), mne(), jPr = JAr(function(e) {
    const { disabled: n = !1, defaultOpen: i = !1, open: r, disableHoverablePopup: s = !1, trackCursorAxis: o = "none", actionsRef: a, onOpenChange: l, onOpenChangeComplete: c, handle: u, triggerId: d, defaultTriggerId: h = null, children: p } = e, g = Ina.useStore(u?.store, {
        open: i,
        openProp: r,
        activeTriggerId: h,
        triggerIdProp: d
    });
    n2r(g, r, i, h), g.useControlledProp("openProp", r), g.useControlledProp("triggerIdProp", d), g.useContextCallback("onOpenChange", l), g.useContextCallback("onOpenChangeComplete", c);
    const f = g.useState("open"), _ = !n && f, b = g.useState("activeTriggerId"), y = g.useState("mounted"), S = g.useState("payload");
    g.useSyncedValues({
        trackCursorAxis: o,
        disableHoverablePopup: s
    }), g.useSyncedValue("disabled", n), $li(g, {
        closeOnActiveTriggerUnmount: !0
    });
    const { forceUnmount: k, transitionStatus: C } = Hli(_, g), T = g.useState("isInstantPhase"), I = g.useState("instantType"), A = g.useState("lastOpenChangeReason"), P = Nbn.useRef(null);
    su(()=>{
        f && n && g.setOpen(!1, zd(bQo));
    }, [
        f,
        n,
        g
    ]), su(()=>{
        C === "ending" && A === kO || C !== "ending" && T ? (I !== "delay" && (P.current = I), g.set("instantType", "delay")) : P.current !== null && (g.set("instantType", P.current), P.current = null);
    }, [
        C,
        T,
        A,
        I,
        g
    ]), su(()=>{
        _ && b == null && g.set("payload", void 0);
    }, [
        g,
        b,
        _
    ]);
    const M = Nbn.useCallback(()=>{
        g.setOpen(!1, zd(Uwe));
    }, [
        g
    ]);
    Nbn.useImperativeHandle(a, ()=>({
            unmount: k,
            close: M
        }), [
        k,
        M
    ]);
    const O = _ || y || !n && o !== "none";
    return nGy(UPr.Provider, {
        value: g,
        children: [
            O && iGy(rGy, {
                store: g,
                disabled: n,
                trackCursorAxis: o
            }),
            typeof p == "function" ? p({
                payload: S
            }) : p
        ]
    });
}), process.env.NODE_ENV !== "production" && (jPr.displayName = "TooltipRoot");

}
