import { BA, Hhw, LLl, M2, Mct, NG, VAf, YAf, g3i, hhw, p3n, xSs } from "./BA.js";
import { CLl, qxt } from "./FocusGuard.mjs";
import { BXt } from "./addEventListener.mjs";
import { bRf, g3n } from "./constants_2.mjs";
import { FLl } from "./createAttribute.mjs";
import { xBe } from "./createBaseUIEventDetails.mjs";
import { uDe } from "./empty.mjs";
import { t8 } from "./floating-ui.utils.dom.mjs";
import { o3i } from "./mergeCleanups.mjs";
import { rce } from "./reasons.mjs";
import { OLl } from "./tabbable.mjs";
import { E } from "./tslib.es6.js";
import { DG, pC } from "./useIsoLayoutEffect.mjs";
import { bKe } from "./useRenderElement.mjs";
import { sce } from "./useStableCallback.mjs";
import * as Fme from "./react-runtime/react/esm-index-production.js";
import { jsx as QLl } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as SRf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as yRf from "./react-runtime/react-dom/esm-index-production.js";
var FSs, JLl, kRf, eOl;
export { FSs, JLl, eOl, kRf };
var __wakaru_wRf_initialized = false;
export function wRf() {
if (__wakaru_wRf_initialized) return;
__wakaru_wRf_initialized = true;
"use client";
E(), t8(), BXt(), o3i(), g3i(), DG(), sce(), uDe(), CLl(), OLl(), xBe(), rce(), FLl(), bKe(), g3n(), FSs = Fme.createContext(null), process.env.NODE_ENV !== "production" && (FSs.displayName = "PortalContext"), JLl = ()=>Fme.useContext(FSs), kRf = xSs("portal"), eOl = Fme.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, children: o, container: a, renderGuards: l, ...c } = e, { portalNode: u, portalSubtree: d } = Hhw({
        container: a,
        ref: n,
        componentProps: e,
        elementProps: c
    }), h = Fme.useRef(null), p = Fme.useRef(null), g = Fme.useRef(null), f = Fme.useRef(null), [_, b] = Fme.useState(null), y = Fme.useRef(!1), S = _?.modal, k = _?.open, C = typeof l == "boolean" ? l : !!_ && !_.modal && _.open && !!u;
    Fme.useEffect(()=>{
        if (!u || S) return;
        function I(A) {
            u && A.relatedTarget && p3n(A) && (A.type === "focusin" ? y.current && (YAf(u), y.current = !1) : (hhw(u), y.current = !0));
        }
        return Mct(M2(u, "focusin", I, !0), M2(u, "focusout", I, !0));
    }, [
        u,
        S
    ]), pC(()=>{
        !u || k !== !0 || !y.current || (YAf(u), y.current = !1);
    }, [
        k,
        u
    ]);
    const T = Fme.useMemo(()=>({
            beforeOutsideRef: h,
            afterOutsideRef: p,
            beforeInsideRef: g,
            afterInsideRef: f,
            portalNode: u,
            setFocusManagerState: b
        }), [
        u
    ]);
    return SRf(Fme.Fragment, {
        children: [
            d,
            SRf(FSs.Provider, {
                value: T,
                children: [
                    C && u && QLl(qxt, {
                        "data-type": "outside",
                        ref: h,
                        onFocus: (I)=>{
                            if (p3n(I, u)) g.current?.focus();
                            else {
                                const A = _ ? _.domReference : null;
                                VAf(A)?.focus();
                            }
                        }
                    }),
                    C && u && QLl("span", {
                        "aria-owns": u.id,
                        style: bRf
                    }),
                    u && yRf.createPortal(o, u),
                    C && u && QLl(qxt, {
                        "data-type": "outside",
                        ref: p,
                        onFocus: (I)=>{
                            if (p3n(I, u)) f.current?.focus();
                            else {
                                const A = _ ? _.domReference : null;
                                LLl(A)?.focus(), _?.closeOnFocusOut && _?.onOpenChange(!1, NG(BA.focusOut, I.nativeEvent));
                            }
                        }
                    })
                ]
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (eOl.displayName = "FloatingPortal");

}
