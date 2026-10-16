import { VSn } from "./CompositeList.js";
import { yvt } from "./ContextMenuRootContext.js";
import { BJ } from "./FloatingTree.js";
import { Jgt, KSn } from "./InternalBackdrop.js";
import { TFl } from "./MenuPortalContext.js";
import { Svt, tDi } from "./MenuPositionerContext.js";
import { Xre } from "./MenuRootContext.js";
import { qSn, zSn } from "./adaptiveOriginMiddleware.js";
import { M0i, Nre, fSn } from "./constants_10.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { Yre, daf, t6t } from "./f0s.js";
import { HSn } from "./inertValue.js";
import { $Sn, C1i, GSn, QBt, Qu, aN, e1i, e5t, qds } from "./qIc.js";
import { UBt, g_, m2 } from "./reason-parts.js";
import { x } from "./tslib.es6.js";
import { JBt } from "./useAnchorPositioning.js";
import { T1i } from "./useAnchoredPopupScrollLock.js";
import { t1i } from "./useAnimationsFinished.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { t5t } from "./usePositioner.js";
import { A3 } from "./useTimeout.js";
import * as kvt from "./react-runtime/react/esm-index-production.js";
import { jsxs as paf } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as s1s } from "./react-runtime/react/esm-jsx-runtime-production.js";
var aDi;
export { aDi };
var __wakaru_IFl_initialized = false;
export function IFl() {
if (__wakaru_IFl_initialized) return;
__wakaru_IFl_initialized = true;
x(), HSn(), af(), A3(), Svt(), Xre(), JBt(), VSn(), KSn(), TFl(), Nre(), yvt(), Ty(), zSn(), t1i(), t5t(), T1i(), g_(), BJ(), aDi = kvt.forwardRef(function(t, n) {
    const { anchor: i, positionMethod: r = "absolute", className: s, render: o, side: a, align: c, sideOffset: l = 0, alignOffset: u = 0, collisionBoundary: h = "clipping-ancestors", collisionPadding: p = 5, arrowPadding: g = 5, sticky: f = !1, disableAnchorTracking: v = !1, collisionAvoidance: b = M0i, style: y, ...T } = t, { store: E } = Yre(), A = daf(), R = t6t(!0), D = E.useState("parent"), P = E.useState("floatingRootContext"), N = E.useState("floatingTreeRoot"), O = E.useState("mounted"), F = E.useState("open"), H = E.useState("modal"), $ = E.useState("openMethod"), W = E.useState("activeTriggerElement"), G = E.useState("transitionStatus"), q = E.useState("positionerElement"), z = E.useState("instantType"), X = E.useState("hasViewport"), Y = E.useState("lastOpenChangeReason"), Z = E.useState("floatingNodeId"), K = E.useState("floatingParentNodeId"), J = P.useState("domReferenceElement"), ne = kvt.useRef(null), ee = e1i(q, !1, !1);
    let se = i, re = l, ue = u, ce = c, de = b;
    D.type === "context-menu" && (se = i ?? D.context?.anchor, ce = ce ?? "start", !a && ce !== "center" && (ue = t.alignOffset ?? 2, re = t.sideOffset ?? -5));
    let le = a, ye = ce;
    D.type === "menu" ? (le = le ?? "inline-end", ye = ye ?? "start", de = t.collisionAvoidance ?? fSn) : D.type === "menubar" && (le = le ?? (D.context.orientation === "vertical" ? "inline-end" : "bottom"), ye = ye ?? "start");
    const _e = D.type === "context-menu", me = QBt({
        anchor: se,
        floatingRootContext: P,
        positionMethod: R ? "fixed" : r,
        mounted: O,
        side: le,
        sideOffset: re,
        align: ye,
        alignOffset: ue,
        arrowPadding: _e ? 0 : g,
        collisionBoundary: h,
        collisionPadding: p,
        sticky: f,
        nodeId: Z,
        keepMounted: A,
        disableAnchorTracking: v,
        collisionAvoidance: de,
        shiftCrossAxis: _e && !("side" in de && de.side === "flip"),
        externalTree: N,
        adaptiveOrigin: X ? qSn : void 0
    });
    kvt.useEffect(()=>{
        function Ke(et) {
            et.open && (et.parentNodeId === Z && E.set("hoverEnabled", !1), et.nodeId !== Z && et.parentNodeId === E.select("floatingParentNodeId") && E.setOpen(!1, Qu(UBt)));
        }
        return N.events.on("menuopenchange", Ke), ()=>{
            N.events.off("menuopenchange", Ke);
        };
    }, [
        E,
        N.events,
        Z
    ]), kvt.useEffect(()=>{
        if (E.select("floatingParentNodeId") == null) return;
        function Ke(et) {
            if (et.open || et.nodeId !== E.select("floatingParentNodeId")) return;
            const We = et.reason ?? UBt;
            E.setOpen(!1, Qu(We));
        }
        return N.events.on("menuopenchange", Ke), ()=>{
            N.events.off("menuopenchange", Ke);
        };
    }, [
        N.events,
        E
    ]);
    const Ce = aN();
    kvt.useEffect(()=>{
        F || Ce.clear();
    }, [
        F,
        Ce
    ]), kvt.useEffect(()=>{
        function Ke(et) {
            if (!(!F || et.nodeId !== E.select("floatingParentNodeId"))) if (et.target && W && W !== et.target) {
                const We = E.select("closeDelay");
                We > 0 ? Ce.isStarted() || Ce.start(We, ()=>{
                    E.setOpen(!1, Qu(UBt));
                }) : E.setOpen(!1, Qu(UBt));
            } else Ce.clear();
        }
        return N.events.on("itemhover", Ke), ()=>{
            N.events.off("itemhover", Ke);
        };
    }, [
        N.events,
        F,
        W,
        E,
        Ce
    ]), kvt.useEffect(()=>{
        const Ke = {
            open: F,
            nodeId: Z,
            parentNodeId: K,
            reason: E.select("lastOpenChangeReason")
        };
        N.events.emit("menuopenchange", Ke);
    }, [
        N.events,
        F,
        E,
        Z,
        K
    ]), gl(()=>{
        const Ke = J, et = ne.current;
        if (Ke && (ne.current = Ke), et && Ke && Ke !== et) {
            E.set("instantType", void 0);
            const We = new AbortController;
            return ee(()=>{
                E.set("instantType", "trigger-change");
            }, We.signal), ()=>{
                We.abort();
            };
        }
    }, [
        J,
        ee,
        E
    ]);
    const xe = {
        open: F,
        side: me.side,
        align: me.align,
        anchorHidden: me.anchorHidden,
        nested: D.type === "menu",
        instant: z
    }, Le = D.type === "menubar" && D.context.modal;
    C1i(F && (Le || H && Y !== m2), $ === "touch", q, W);
    const je = e5t(t, xe, {
        styles: me.positionerStyles,
        transitionStatus: G,
        props: T,
        refs: [
            n,
            E.useStateSetter("positionerElement")
        ],
        hidden: !O,
        inert: !F
    }), Ge = O && D.type !== "menu" && (D.type !== "menubar" && H && Y !== m2 || D.type === "menubar" && D.context.modal);
    let Xe = null;
    return D.type === "menubar" ? Xe = D.context.contentElement : D.type === void 0 && (Xe = W), paf(tDi.Provider, {
        value: me,
        children: [
            Ge && s1s(Jgt, {
                ref: D.type === "context-menu" || D.type === "nested-context-menu" ? D.context.internalBackdropRef : null,
                inert: $Sn(!F),
                cutout: Xe
            }),
            s1s(qds, {
                id: Z,
                children: s1s(GSn, {
                    elementsRef: E.context.itemDomElements,
                    labelsRef: E.context.itemLabels,
                    children: je
                })
            })
        ]
    });
}), process.env.NODE_ENV !== "production" && (aDi.displayName = "MenuPositioner");

}
