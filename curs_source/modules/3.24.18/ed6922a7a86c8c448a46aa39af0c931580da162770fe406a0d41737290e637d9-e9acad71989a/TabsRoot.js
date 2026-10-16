import { VSn } from "./CompositeList.js";
import { KNi, zNi } from "./TabsRootContext.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { HYl } from "./f0s.js";
import { GSn, Mre, Qu, kp, su } from "./qIc.js";
import { Sds, bds, g_, yds } from "./reason-parts.js";
import { YNi, pEn } from "./stateAttributesMapping_7.js";
import { x } from "./tslib.es6.js";
import { sCe } from "./useControlled.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import { jsx as $Yl } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as GY from "./react-runtime/react/esm-index-production.js";
var hMs;
export { hMs };
var __wakaru_eBf_initialized = false;
export function eBf() {
if (__wakaru_eBf_initialized) return;
__wakaru_eBf_initialized = true;
x(), sCe(), af(), Cy(), wp(), VSn(), KNi(), YNi(), Ty(), g_(), hMs = GY.forwardRef(function(t, n) {
    const { className: i, defaultValue: r = 0, onValueChange: s, orientation: o = "horizontal", render: a, value: c, style: l, ...u } = t, h = t.defaultValue !== void 0, p = GY.useRef([]), [g, f] = GY.useState(()=>new Map), [v, b] = Mre({
        controlled: c,
        default: r,
        name: "Tabs",
        state: "value"
    }), y = c !== void 0, [T, E] = GY.useState(()=>new Map), A = GY.useRef(void 0), R = GY.useCallback((le)=>{
        if (le === void 0) return null;
        for (const [ye, _e] of T.entries())if (_e != null && le === (_e.value ?? _e.index)) return ye;
        return null;
    }, [
        T
    ]), [D, P] = GY.useState(()=>({
            previousValue: v,
            tabActivationDirection: "none"
        })), { previousValue: N, tabActivationDirection: O } = D;
    let F = O, H = !1;
    N !== v && (F = HYl(N, v, o, T), H = N != null && v != null && R(v) == null);
    const $ = H ? N : v, W = N !== $ || O !== F;
    gl(()=>{
        W && P({
            previousValue: $,
            tabActivationDirection: F
        });
    }, [
        $,
        W,
        F
    ]);
    const G = su((le, ye)=>{
        const _e = HYl(v, le, o, T);
        ye.activationDirection = _e, s?.(le, ye), !ye.isCanceled && b(le);
    }), q = su((le, ye)=>{
        s?.(le, Qu(ye, void 0, void 0, {
            activationDirection: "none"
        }));
    }), z = su((le, ye)=>{
        f((_e)=>{
            if (_e.get(le) === ye) return _e;
            const me = new Map(_e);
            return me.set(le, ye), me;
        });
    }), X = su((le, ye)=>{
        f((_e)=>{
            if (!_e.has(le) || _e.get(le) !== ye) return _e;
            const me = new Map(_e);
            return me.delete(le), me;
        });
    }), Y = GY.useCallback((le)=>g.get(le), [
        g
    ]), Z = GY.useCallback((le)=>{
        for (const ye of T.values())if (le === ye?.value) return ye?.id;
    }, [
        T
    ]), K = GY.useMemo(()=>({
            getTabElementBySelectedValue: R,
            getTabIdByPanelValue: Z,
            getTabPanelIdByValue: Y,
            onValueChange: G,
            orientation: o,
            registerMountedTabPanel: z,
            setTabMap: E,
            unregisterMountedTabPanel: X,
            tabActivationDirection: F,
            value: v
        }), [
        R,
        Z,
        Y,
        G,
        o,
        z,
        E,
        X,
        F,
        v
    ]), J = GY.useMemo(()=>{
        for (const le of T.values())if (le != null && le.value === v) return le;
    }, [
        T,
        v
    ]), ne = GY.useMemo(()=>{
        for (const le of T.values())if (le != null && !le.disabled) return le.value;
    }, [
        T
    ]), ee = GY.useRef(!h), se = GY.useRef(r), re = GY.useRef(h), ue = GY.useRef(!1);
    gl(()=>{
        if (y) return;
        function le(Ce, xe) {
            b(Ce), P((Le)=>Le.previousValue === Ce && Le.tabActivationDirection === "none" ? Le : {
                    previousValue: Ce,
                    tabActivationDirection: "none"
                }), q(Ce, xe), ee.current = !1;
        }
        if (T.size === 0) {
            ue.current && v !== null && !A.current?.isConnected && le(null, yds);
            return;
        }
        ue.current = !0, A.current = T.keys().next().value;
        const ye = J?.disabled, _e = J == null && v !== null;
        if (!ye && v === se.current && (re.current = !1), re.current && ye && v === se.current) return;
        const me = ee.current;
        if (ye || _e) {
            const Ce = ne ?? null;
            if (v === Ce) {
                ee.current = !1;
                return;
            }
            let xe = yds;
            me ? xe = Sds : ye && (xe = bds), le(Ce, xe);
            return;
        }
        me && J != null && (q(v, Sds), ee.current = !1);
    }, [
        ne,
        y,
        q,
        J,
        b,
        T,
        v
    ]);
    const de = kp("div", t, {
        state: {
            orientation: o,
            tabActivationDirection: F
        },
        ref: n,
        props: u,
        stateAttributesMapping: pEn
    });
    return $Yl(zNi.Provider, {
        value: K,
        children: $Yl(GSn, {
            elementsRef: p,
            children: de
        })
    });
}), process.env.NODE_ENV !== "production" && (hMs.displayName = "TabsRoot");

}
