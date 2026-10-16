import { ESl } from "./CompositeItem.js";
import { Jki } from "./CompositeRootContext.js";
import { yvt } from "./ContextMenuRootContext.js";
import { BJ, K5e, WRe } from "./FloatingTree.js";
import { L0i, jds } from "./FloatingTreeStore.js";
import { URe, f0i } from "./FocusGuard.js";
import { Xre } from "./MenuRootContext.js";
import { NFl } from "./MenubarContext.js";
import { Nre } from "./constants_10.js";
import { LE, R0 } from "./empty.js";
import { Aaf, Iaf, Taf, Yre, p1s, zFl } from "./f0s.js";
import { jFl } from "./findRootOwnerId.js";
import { Eb, p_ } from "./formatErrorMessage.js";
import { Fhs } from "./getPseudoElementBounds.js";
import { QK } from "./mergeProps.js";
import { C5 } from "./owner.js";
import { Qgt, g2 } from "./popupStateMapping.js";
import { s$ } from "./popupStoreUtils.js";
import { Bgt, I3, KS, N0i, Ohs, PSn, RSn, SR, TSl, Tgt, aN, cg, e$, has, kSn, kp, sds, su, uhs } from "./qIc.js";
import { g_, m0i, m2 } from "./reason-parts.js";
import { LSn } from "./safePolygon.js";
import { cN } from "./shadowDom.js";
import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { t$ } from "./useButton.js";
import { Ugt } from "./useClick.js";
import { dhs } from "./useFocus.js";
import { DSn } from "./useHoverReferenceInteraction.js";
import { af } from "./useIsoLayoutEffect.js";
import { Eaf } from "./useMixedToggleClickHandler.js";
import { wp } from "./useRenderElement.js";
import { Cy } from "./useStableCallback.js";
import { A3 } from "./useTimeout.js";
import { KFl } from "./useTriggerFocusGuards.js";
import * as KCe from "./react-runtime/react/esm-index-production.js";
import { jsx as M0n } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as xaf } from "./react-runtime/react/esm-jsx-runtime-production.js";
var P0n, m1s;
export { P0n, m1s };
var __wakaru_Raf_initialized = false;
export function Raf() {
if (__wakaru_Raf_initialized) return;
__wakaru_Raf_initialized = true;
x(), Eb(), A3(), C5(), Tgt(), Cy(), af(), LE(), jds(), Xre(), g2(), wp(), t$(), Fhs(), ESl(), Jki(), jFl(), KFl(), TD(), Eaf(), yvt(), NFl(), Nre(), f0i(), BJ(), s$(), cN(), g_(), DSn(), LSn(), Ugt(), dhs(), QK(), P0n = 2, m1s = sds(function(t, n) {
    const { render: i, className: r, style: s, disabled: o = !1, nativeButton: a = !0, id: c, openOnHover: l, delay: u = 100, closeDelay: h = 0, handle: p, payload: g, ...f } = t, v = Yre(!0), b = p?.store ?? v?.store;
    if (!b) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Menu.Trigger> must be either used within a <Menu.Root> component or provided with a handle." : p_(85));
    const y = SR(c), T = b.useState("isTriggerActive", y), E = b.useState("floatingRootContext"), A = b.useState("isOpenedByTrigger", y), R = b.useState("triggerPopupId", y), D = KCe.useRef(null), P = Aaf(), N = has(!0), O = K5e(), F = KCe.useMemo(()=>O ?? new L0i, [
        O
    ]), H = N0i(F), $ = WRe(), { registerTrigger: W, isMountedByThisTrigger: G } = kSn(y, D, b, {
        payload: g,
        closeDelay: h,
        parent: P,
        floatingTreeRoot: F,
        floatingNodeId: H,
        floatingParentNodeId: $,
        keyboardEventRelay: N?.relayKeyboardEvent
    }), q = P.type === "menubar", z = b.useState("disabled"), X = o || z || q && P.context.disabled, { getButtonProps: Y, buttonRef: Z } = e$({
        disabled: X,
        native: a
    });
    KCe.useEffect(()=>{
        !A && P.type === void 0 && (b.context.allowMouseUpTriggerRef.current = !1);
    }, [
        b,
        A,
        P.type
    ]);
    const K = KCe.useRef(null), J = aN(), ne = su((Xe)=>{
        if (!K.current) return;
        J.clear(), b.context.allowMouseUpTriggerRef.current = !1;
        const Ke = Xe.target;
        if (cg(K.current, Ke) || cg(b.select("positionerElement"), Ke) || Ke === K.current || Ke != null && p1s(Ke) === b.select("rootId")) return;
        const et = Ohs(K.current);
        Xe.clientX >= et.left - P0n && Xe.clientX <= et.right + P0n && Xe.clientY >= et.top - P0n && Xe.clientY <= et.bottom + P0n || F.events.emit("close", {
            domEvent: Xe,
            reason: m0i
        });
    });
    KCe.useEffect(()=>{
        A && b.select("lastOpenChangeReason") === m2 && KS(K.current).addEventListener("mouseup", ne, {
            once: !0
        });
    }, [
        A,
        ne,
        b
    ]);
    const ee = q && P.context.hasSubmenuOpen, re = RSn(E, {
        enabled: (l ?? ee) && !X && P.type !== "context-menu" && (!q || ee && !G),
        handleClose: PSn({
            blockPointerEvents: !q
        }),
        mouseOnly: !0,
        move: !1,
        restMs: P.type === void 0 ? u : void 0,
        delay: {
            close: h
        },
        triggerElementRef: D,
        externalTree: F,
        isActiveTrigger: T,
        isClosing: ()=>b.select("transitionStatus") === "ending"
    }), ue = Iaf(A, b.select("lastOpenChangeReason")), ce = Bgt(E, {
        enabled: !X && P.type !== "context-menu",
        event: A && q ? "click" : "mousedown",
        toggle: !0,
        ignoreMouse: !1,
        stickIfOpen: P.type === void 0 ? ue : !1
    }), de = uhs(E, {
        enabled: !X && ee
    }), le = Taf({
        open: A,
        enabled: q,
        mouseDownAction: "open"
    }), ye = KCe.useMemo(()=>I3(de.reference, ce.reference), [
        de.reference,
        ce.reference
    ]), _e = b.useState("triggerProps", G), { preFocusGuardRef: me, handlePreFocusGuardFocus: Ce, handleFocusTargetFocus: xe } = zFl(b, D), Le = {
        disabled: X,
        open: A
    }, Be = [
        K,
        n,
        Z,
        W,
        D
    ], je = [
        ye,
        re ?? R0,
        _e,
        {
            "aria-haspopup": "menu",
            "aria-controls": R,
            id: y,
            onMouseDown: (Xe)=>{
                if (b.select("open")) return;
                J.start(200, ()=>{
                    b.context.allowMouseUpTriggerRef.current = !0;
                }), KS(Xe.currentTarget).addEventListener("mouseup", ne, {
                    once: !0
                });
            }
        },
        q ? {
            role: "menuitem"
        } : {},
        le,
        f,
        Y
    ], Ge = kp("button", t, {
        enabled: !q,
        stateAttributesMapping: Qgt,
        state: Le,
        ref: Be,
        props: je
    });
    return q ? M0n(TSl, {
        tag: "button",
        render: i,
        className: r,
        style: s,
        state: Le,
        refs: Be,
        props: je,
        stateAttributesMapping: Qgt
    }) : A ? xaf(KCe.Fragment, {
        children: [
            M0n(URe, {
                ref: me,
                onFocus: Ce
            }, `${y}-pre-focus-guard`),
            M0n(KCe.Fragment, {
                children: Ge
            }, y),
            M0n(URe, {
                ref: b.context.triggerFocusTargetRef,
                onFocus: xe
            }, `${y}-post-focus-guard`)
        ]
    }) : M0n(KCe.Fragment, {
        children: Ge
    }, y);
}), process.env.NODE_ENV !== "production" && (m1s.displayName = "MenuTrigger");

}
