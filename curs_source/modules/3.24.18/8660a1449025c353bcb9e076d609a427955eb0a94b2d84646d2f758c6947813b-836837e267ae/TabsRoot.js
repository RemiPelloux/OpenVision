import { dbn } from "./CompositeList.js";
import { Lm, pu, ubn, yne, zd } from "./LYd.js";
import { Cfi, zBr } from "./TabsRootContext.js";
import { VS } from "./createBaseUIEventDetails.js";
import { ksp } from "./ipa.js";
import { SQo, Zb, bQo, yQo } from "./reason-parts.js";
import { Tfi, gkn } from "./stateAttributesMapping_7.js";
import { E } from "./tslib.es6.js";
import { __e } from "./useControlled.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { jsx as Ssp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as gae from "./react-runtime/react/esm-index-production.js";
var VBr;
export { VBr };
var __wakaru_wsp_initialized = false;
export function wsp() {
if (__wakaru_wsp_initialized) return;
__wakaru_wsp_initialized = true;
E(), __e(), jv(), Jy(), Om(), dbn(), Cfi(), Tfi(), VS(), Zb(), VBr = gae.forwardRef(function(e, n) {
    const { className: i, defaultValue: r = 0, onValueChange: s, orientation: o = "horizontal", render: a, value: l, style: c, ...u } = e, d = e.defaultValue !== void 0, h = gae.useRef([]), [p, g] = gae.useState(()=>new Map), [f, _] = yne({
        controlled: l,
        default: r,
        name: "Tabs",
        state: "value"
    }), b = l !== void 0, [y, S] = gae.useState(()=>new Map), k = gae.useRef(void 0), C = gae.useCallback((se)=>{
        if (se === void 0) return null;
        for (const [le, ce] of y.entries())if (ce != null && se === (ce.value ?? ce.index)) return le;
        return null;
    }, [
        y
    ]), [T, I] = gae.useState(()=>({
            previousValue: f,
            tabActivationDirection: "none"
        })), { previousValue: A, tabActivationDirection: P } = T;
    let M = P, O = !1;
    A !== f && (M = ksp(A, f, o, y), O = A != null && f != null && C(f) == null);
    const N = O ? A : f, U = A !== N || P !== M;
    su(()=>{
        U && I({
            previousValue: N,
            tabActivationDirection: M
        });
    }, [
        N,
        U,
        M
    ]);
    const j = pu((se, le)=>{
        const ce = ksp(f, se, o, y);
        le.activationDirection = ce, s?.(se, le), !le.isCanceled && _(se);
    }), $ = pu((se, le)=>{
        s?.(se, zd(le, void 0, void 0, {
            activationDirection: "none"
        }));
    }), H = pu((se, le)=>{
        g((ce)=>{
            if (ce.get(se) === le) return ce;
            const ae = new Map(ce);
            return ae.set(se, le), ae;
        });
    }), G = pu((se, le)=>{
        g((ce)=>{
            if (!ce.has(se) || ce.get(se) !== le) return ce;
            const ae = new Map(ce);
            return ae.delete(se), ae;
        });
    }), q = gae.useCallback((se)=>p.get(se), [
        p
    ]), K = gae.useCallback((se)=>{
        for (const le of y.values())if (se === le?.value) return le?.id;
    }, [
        y
    ]), V = gae.useMemo(()=>({
            getTabElementBySelectedValue: C,
            getTabIdByPanelValue: K,
            getTabPanelIdByValue: q,
            onValueChange: j,
            orientation: o,
            registerMountedTabPanel: H,
            setTabMap: S,
            unregisterMountedTabPanel: G,
            tabActivationDirection: M,
            value: f
        }), [
        C,
        K,
        q,
        j,
        o,
        H,
        S,
        G,
        M,
        f
    ]), Y = gae.useMemo(()=>{
        for (const se of y.values())if (se != null && se.value === f) return se;
    }, [
        y,
        f
    ]), J = gae.useMemo(()=>{
        for (const se of y.values())if (se != null && !se.disabled) return se.value;
    }, [
        y
    ]), Q = gae.useRef(!d), te = gae.useRef(r), ee = gae.useRef(d), re = gae.useRef(!1);
    su(()=>{
        if (b) return;
        function se(de, he) {
            _(de), I((ge)=>ge.previousValue === de && ge.tabActivationDirection === "none" ? ge : {
                    previousValue: de,
                    tabActivationDirection: "none"
                }), $(de, he), Q.current = !1;
        }
        if (y.size === 0) {
            re.current && f !== null && !k.current?.isConnected && se(null, yQo);
            return;
        }
        re.current = !0, k.current = y.keys().next().value;
        const le = Y?.disabled, ce = Y == null && f !== null;
        if (!le && f === te.current && (ee.current = !1), ee.current && le && f === te.current) return;
        const ae = Q.current;
        if (le || ce) {
            const de = J ?? null;
            if (f === de) {
                Q.current = !1;
                return;
            }
            let he = yQo;
            ae ? he = SQo : le && (he = bQo), se(de, he);
            return;
        }
        ae && Y != null && ($(f, SQo), Q.current = !1);
    }, [
        J,
        b,
        $,
        Y,
        _,
        y,
        f
    ]);
    const oe = Lm("div", e, {
        state: {
            orientation: o,
            tabActivationDirection: M
        },
        ref: n,
        props: u,
        stateAttributesMapping: gkn
    });
    return Ssp(zBr.Provider, {
        value: V,
        children: Ssp(ubn, {
            elementsRef: h,
            children: oe
        })
    });
}), process.env.NODE_ENV !== "production" && (VBr.displayName = "TabsRoot");

}
