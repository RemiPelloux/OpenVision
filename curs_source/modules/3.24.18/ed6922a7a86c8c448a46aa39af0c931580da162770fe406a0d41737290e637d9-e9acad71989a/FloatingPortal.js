import { URe, f0i } from "./FocusGuard.js";
import { Jle } from "./addEventListener.js";
import { Nre, Vil } from "./constants_10.js";
import { E0i } from "./createAttribute.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { LE } from "./empty.js";
import { D0 } from "./floating-ui.utils.dom.js";
import { PBt } from "./mergeCleanups.js";
import { Dil, Ngt, ORe, Pds, Pil, Qu, WBt, YS, mSn, sMg, zil } from "./qIc.js";
import { BRe, g_ } from "./reason-parts.js";
import { Lds } from "./tabbable.js";
import { x } from "./tslib.es6.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import * as FJ from "./react-runtime/react/esm-index-production.js";
import { jsx as Wds } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as jil from "./react-runtime/react-dom/esm-index-production.js";
import { jsxs as qil } from "./react-runtime/react/esm-jsx-runtime-production.js";
var P0i, Gds, Kil, Ogt;
export { Gds, Kil, Ogt, P0i };
var __wakaru_Fgt_initialized = false;
export function Fgt() {
if (__wakaru_Fgt_initialized) return;
__wakaru_Fgt_initialized = true;
x(), D0(), Jle(), PBt(), Ngt(), af(), Cy(), LE(), f0i(), Lds(), Ty(), E0i(), wp(), Nre(), g_(), P0i = FJ.createContext(null), process.env.NODE_ENV !== "production" && (P0i.displayName = "PortalContext"), Gds = ()=>FJ.useContext(P0i), Kil = mSn("portal"), Ogt = FJ.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, children: o, container: a, renderGuards: c, ...l } = t, { portalNode: u, portalSubtree: h } = zil({
        container: a,
        ref: n,
        componentProps: t,
        elementProps: l
    }), p = FJ.useRef(null), g = FJ.useRef(null), f = FJ.useRef(null), v = FJ.useRef(null), [b, y] = FJ.useState(null), T = FJ.useRef(!1), E = b?.modal, A = b?.open, R = typeof c == "boolean" ? c : !!b && !b.modal && b.open && !!u;
    FJ.useEffect(()=>{
        if (!u || E) return;
        function P(N) {
            u && N.relatedTarget && WBt(N) && (N.type === "focusin" ? T.current && (Pil(u), T.current = !1) : (sMg(u), T.current = !0));
        }
        return ORe(YS(u, "focusin", P, !0), YS(u, "focusout", P, !0));
    }, [
        u,
        E
    ]), gl(()=>{
        !u || A !== !0 || !T.current || (Pil(u), T.current = !1);
    }, [
        A,
        u
    ]);
    const D = FJ.useMemo(()=>({
            beforeOutsideRef: p,
            afterOutsideRef: g,
            beforeInsideRef: f,
            afterInsideRef: v,
            portalNode: u,
            setFocusManagerState: y
        }), [
        u
    ]);
    return qil(FJ.Fragment, {
        children: [
            h,
            qil(P0i.Provider, {
                value: D,
                children: [
                    R && u && Wds(URe, {
                        "data-type": "outside",
                        ref: p,
                        onFocus: (P)=>{
                            if (WBt(P, u)) f.current?.focus();
                            else {
                                const N = b ? b.domReference : null;
                                Dil(N)?.focus();
                            }
                        }
                    }),
                    R && u && Wds("span", {
                        "aria-owns": u.id,
                        style: Vil
                    }),
                    u && jil.createPortal(o, u),
                    R && u && Wds(URe, {
                        "data-type": "outside",
                        ref: g,
                        onFocus: (P)=>{
                            if (WBt(P, u)) v.current?.focus();
                            else {
                                const N = b ? b.domReference : null;
                                Pds(N)?.focus(), b?.closeOnFocusOut && b?.onOpenChange(!1, Qu(BRe, P.nativeEvent));
                            }
                        }
                    })
                ]
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (Ogt.displayName = "FloatingPortal");

}
