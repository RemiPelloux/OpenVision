import { yvt } from "./ContextMenuRootContext.js";
import { Xre } from "./MenuRootContext.js";
import { Jle } from "./addEventListener.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { lj } from "./event_3.js";
import { Yre, p1s, t6t } from "./f0s.js";
import { jFl } from "./findRootOwnerId.js";
import { C5 } from "./owner.js";
import { Qgt, g2 } from "./popupStateMapping.js";
import { KS, Qu, UO, YS, aN, cg, kp, wU } from "./qIc.js";
import { Dfe, g_, m0i } from "./reason-parts.js";
import { cN } from "./shadowDom.js";
import { x } from "./tslib.es6.js";
import { wp } from "./useRenderElement.js";
import { A3 } from "./useTimeout.js";
import * as N0n from "./react-runtime/react/esm-index-production.js";
var v1s, hDi;
export { hDi, v1s };
var __wakaru_Oaf_initialized = false;
export function Oaf() {
if (__wakaru_Oaf_initialized) return;
__wakaru_Oaf_initialized = true;
x(), Jle(), C5(), A3(), yvt(), Xre(), wp(), Ty(), g2(), jFl(), g_(), lj(), cN(), v1s = 500, hDi = N0n.forwardRef(function(t, n) {
    const { render: i, className: r, style: s, ...o } = t, { setAnchor: a, actionsRef: c, internalBackdropRef: l, backdropRef: u, positionerRef: h, allowMouseUpTriggerRef: p, initialCursorPointRef: g, rootId: f } = t6t(!1), { store: v } = Yre(!1), b = v.useState("open"), y = v.useState("disabled"), T = N0n.useRef(null), E = N0n.useRef(null), A = aN(), R = aN(), D = N0n.useRef(!1);
    function P(G, q, z) {
        const X = z.type.startsWith("touch");
        g.current = {
            x: G,
            y: q
        }, a({
            getBoundingClientRect () {
                return DOMRect.fromRect({
                    width: X ? 10 : 0,
                    height: X ? 10 : 0,
                    x: G,
                    y: q
                });
            }
        }), D.current = !1, c.current?.setOpen(!0, Qu(Dfe, z)), R.start(v1s, ()=>{
            D.current = !0;
        });
    }
    function N(G) {
        if (y) return;
        p.current = !0, wU(G), P(G.clientX, G.clientY, G.nativeEvent);
        const q = KS(T.current);
        YS(q, "mouseup", (z)=>{
            if (p.current = !1, !D.current) return;
            R.clear(), D.current = !1;
            const X = UO(z);
            cg(h.current, X) || f && X && p1s(X) === f || c.current?.setOpen(!1, Qu(m0i, z));
        }, {
            once: !0
        });
    }
    function O(G) {
        if (!y && (p.current = !1, G.touches.length === 1)) {
            G.stopPropagation();
            const q = G.touches[0];
            E.current = {
                x: q.clientX,
                y: q.clientY
            }, A.start(v1s, ()=>{
                E.current && P(E.current.x, E.current.y, G.nativeEvent);
            });
        }
    }
    function F(G) {
        if (A.isStarted() && E.current && G.touches.length === 1) {
            const q = G.touches[0], z = 10, X = Math.abs(q.clientX - E.current.x), Y = Math.abs(q.clientY - E.current.y);
            (X > z || Y > z) && A.clear();
        }
    }
    function H() {
        A.clear(), E.current = null;
    }
    return N0n.useEffect(()=>{
        function G(z) {
            if (y) return;
            const Y = UO(z);
            (cg(T.current, Y) || cg(l.current, Y) || cg(u.current, Y)) && z.preventDefault();
        }
        const q = KS(T.current);
        return YS(q, "contextmenu", G);
    }, [
        u,
        y,
        l
    ]), kp("div", t, {
        state: {
            open: b
        },
        ref: [
            T,
            n
        ],
        props: [
            {
                onContextMenu: N,
                onTouchStart: O,
                onTouchMove: F,
                onTouchEnd: H,
                onTouchCancel: H,
                style: {
                    WebkitTouchCallout: "none"
                }
            },
            o
        ],
        stateAttributesMapping: Qgt
    });
}), process.env.NODE_ENV !== "production" && (hDi.displayName = "ContextMenuTrigger");

}
