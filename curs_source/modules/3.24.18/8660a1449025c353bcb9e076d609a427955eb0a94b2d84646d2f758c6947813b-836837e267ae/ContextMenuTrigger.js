import { HUt } from "./ContextMenuRootContext.js";
import { B5, Ez, Lm, Nf, a6, ak, r0, zd } from "./LYd.js";
import { F_e } from "./MenuRootContext.js";
import { b_e } from "./addEventListener.js";
import { VS } from "./createBaseUIEventDetails.js";
import { Sne } from "./event_3.js";
import { k6h } from "./findRootOwnerId.js";
import { O_e, mSn, sma } from "./ipa.js";
import { hB } from "./owner.js";
import { I4, a7t } from "./popupStateMapping.js";
import { PRe, Zb, gRr } from "./reason-parts.js";
import { $D } from "./shadowDom.js";
import { E } from "./tslib.es6.js";
import { Om } from "./useRenderElement.js";
import { M7 } from "./useTimeout.js";
import * as npi from "./react-runtime/react/esm-index-production.js";
var cma, NOr;
export { NOr, cma };
var __wakaru_bSS_initialized = false;
export function bSS() {
if (__wakaru_bSS_initialized) return;
__wakaru_bSS_initialized = true;
E(), b_e(), hB(), M7(), HUt(), F_e(), Om(), VS(), I4(), k6h(), Zb(), Sne(), $D(), cma = 500, NOr = npi.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, { setAnchor: a, actionsRef: l, internalBackdropRef: c, backdropRef: u, positionerRef: d, allowMouseUpTriggerRef: h, initialCursorPointRef: p, rootId: g } = mSn(!1), { store: f } = O_e(!1), _ = f.useState("open"), b = f.useState("disabled"), y = npi.useRef(null), S = npi.useRef(null), k = a6(), C = a6(), T = npi.useRef(!1);
    function I(j, $, H) {
        const G = H.type.startsWith("touch");
        p.current = {
            x: j,
            y: $
        }, a({
            getBoundingClientRect () {
                return DOMRect.fromRect({
                    width: G ? 10 : 0,
                    height: G ? 10 : 0,
                    x: j,
                    y: $
                });
            }
        }), T.current = !1, l.current?.setOpen(!0, zd(PRe, H)), C.start(cma, ()=>{
            T.current = !0;
        });
    }
    function A(j) {
        if (b) return;
        h.current = !0, Ez(j), I(j.clientX, j.clientY, j.nativeEvent);
        const $ = ak(y.current);
        r0($, "mouseup", (H)=>{
            if (h.current = !1, !T.current) return;
            C.clear(), T.current = !1;
            const G = B5(H);
            Nf(d.current, G) || g && G && sma(G) === g || l.current?.setOpen(!1, zd(gRr, H));
        }, {
            once: !0
        });
    }
    function P(j) {
        if (!b && (h.current = !1, j.touches.length === 1)) {
            j.stopPropagation();
            const $ = j.touches[0];
            S.current = {
                x: $.clientX,
                y: $.clientY
            }, k.start(cma, ()=>{
                S.current && I(S.current.x, S.current.y, j.nativeEvent);
            });
        }
    }
    function M(j) {
        if (k.isStarted() && S.current && j.touches.length === 1) {
            const $ = j.touches[0], H = 10, G = Math.abs($.clientX - S.current.x), q = Math.abs($.clientY - S.current.y);
            (G > H || q > H) && k.clear();
        }
    }
    function O() {
        k.clear(), S.current = null;
    }
    return npi.useEffect(()=>{
        function j(H) {
            if (b) return;
            const q = B5(H);
            (Nf(y.current, q) || Nf(c.current, q) || Nf(u.current, q)) && H.preventDefault();
        }
        const $ = ak(y.current);
        return r0($, "contextmenu", j);
    }, [
        u,
        b,
        c
    ]), Lm("div", e, {
        state: {
            open: _
        },
        ref: [
            y,
            n
        ],
        props: [
            {
                onContextMenu: A,
                onTouchStart: P,
                onTouchMove: M,
                onTouchEnd: O,
                onTouchCancel: O,
                style: {
                    WebkitTouchCallout: "none"
                }
            },
            o
        ],
        stateAttributesMapping: a7t
    });
}), process.env.NODE_ENV !== "production" && (NOr.displayName = "ContextMenuTrigger");

}
