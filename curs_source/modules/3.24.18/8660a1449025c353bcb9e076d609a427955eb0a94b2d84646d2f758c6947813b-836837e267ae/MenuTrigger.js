import { caa } from "./CompositeItem.js";
import { qIr } from "./CompositeRootContext.js";
import { HUt } from "./ContextMenuRootContext.js";
import { Knt, QHe, vhe } from "./FloatingTree.js";
import { LRr, qQo } from "./FloatingTreeStore.js";
import { YHe, vRr } from "./FocusGuard.js";
import { $I, Kli, Lm, MJo, Nf, O8t, ORr, X8t, Zli, a6, ak, iQo, jli, laa, pu, uB, uJo, uKo, wz } from "./LYd.js";
import { F_e } from "./MenuRootContext.js";
import { h6h } from "./MenubarContext.js";
import { k_e } from "./constants_10.js";
import { pE, vA } from "./empty.js";
import { k6h } from "./findRootOwnerId.js";
import { Oy, zS } from "./formatErrorMessage.js";
import { DJo } from "./getPseudoElementBounds.js";
import { C6h, O_e, dSS, hSS, lSS, sma } from "./ipa.js";
import { mne } from "./mergeProps.js";
import { hB } from "./owner.js";
import { I4, a7t } from "./popupStateMapping.js";
import { FY } from "./popupStoreUtils.js";
import { E4, Zb, gRr } from "./reason-parts.js";
import { Qli } from "./safePolygon.js";
import { $D } from "./shadowDom.js";
import { E } from "./tslib.es6.js";
import { _A } from "./useBaseUiId.js";
import { Cz } from "./useButton.js";
import { Z8t } from "./useClick.js";
import { dJo } from "./useFocus.js";
import { Yli } from "./useHoverReferenceInteraction.js";
import { jv } from "./useIsoLayoutEffect.js";
import { cSS } from "./useMixedToggleClickHandler.js";
import { Om } from "./useRenderElement.js";
import { Jy } from "./useStableCallback.js";
import { M7 } from "./useTimeout.js";
import { T6h } from "./useTriggerFocusGuards.js";
import { jsx as Jhi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as OFe from "./react-runtime/react/esm-index-production.js";
import { jsxs as uSS } from "./react-runtime/react/esm-jsx-runtime-production.js";
var epi, oma;
export { epi, oma };
var __wakaru_pSS_initialized = false;
export function pSS() {
if (__wakaru_pSS_initialized) return;
__wakaru_pSS_initialized = true;
E(), zS(), M7(), hB(), O8t(), Jy(), jv(), vA(), qQo(), F_e(), I4(), Om(), Cz(), DJo(), caa(), qIr(), k6h(), T6h(), _A(), cSS(), HUt(), h6h(), k_e(), vRr(), vhe(), FY(), $D(), Zb(), Yli(), Qli(), Z8t(), dJo(), mne(), epi = 2, oma = iQo(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = !1, nativeButton: a = !0, id: l, openOnHover: c, delay: u = 100, closeDelay: d = 0, handle: h, payload: p, ...g } = e, f = O_e(!0), _ = h?.store ?? f?.store;
    if (!_) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Menu.Trigger> must be either used within a <Menu.Root> component or provided with a handle." : Oy(85));
    const b = $I(l), y = _.useState("isTriggerActive", b), S = _.useState("floatingRootContext"), k = _.useState("isOpenedByTrigger", b), C = _.useState("triggerPopupId", b), T = OFe.useRef(null), I = hSS(), A = uKo(!0), P = Knt(), M = OFe.useMemo(()=>P ?? new LRr, [
        P
    ]), O = ORr(M), N = QHe(), { registerTrigger: U, isMountedByThisTrigger: j } = jli(b, T, _, {
        payload: p,
        closeDelay: d,
        parent: I,
        floatingTreeRoot: M,
        floatingNodeId: O,
        floatingParentNodeId: N,
        keyboardEventRelay: A?.relayKeyboardEvent
    }), $ = I.type === "menubar", H = _.useState("disabled"), G = o || H || $ && I.context.disabled, { getButtonProps: q, buttonRef: K } = wz({
        disabled: G,
        native: a
    });
    OFe.useEffect(()=>{
        !k && I.type === void 0 && (_.context.allowMouseUpTriggerRef.current = !1);
    }, [
        _,
        k,
        I.type
    ]);
    const V = OFe.useRef(null), Y = a6(), J = pu((Te)=>{
        if (!V.current) return;
        Y.clear(), _.context.allowMouseUpTriggerRef.current = !1;
        const _e = Te.target;
        if (Nf(V.current, _e) || Nf(_.select("positionerElement"), _e) || _e === V.current || _e != null && sma(_e) === _.select("rootId")) return;
        const Ce = MJo(V.current);
        Te.clientX >= Ce.left - epi && Te.clientX <= Ce.right + epi && Te.clientY >= Ce.top - epi && Te.clientY <= Ce.bottom + epi || M.events.emit("close", {
            domEvent: Te,
            reason: gRr
        });
    });
    OFe.useEffect(()=>{
        k && _.select("lastOpenChangeReason") === E4 && ak(V.current).addEventListener("mouseup", J, {
            once: !0
        });
    }, [
        k,
        J,
        _
    ]);
    const Q = $ && I.context.hasSubmenuOpen, ee = Kli(S, {
        enabled: (c ?? Q) && !G && I.type !== "context-menu" && (!$ || Q && !j),
        handleClose: Zli({
            blockPointerEvents: !$
        }),
        mouseOnly: !0,
        move: !1,
        restMs: I.type === void 0 ? u : void 0,
        delay: {
            close: d
        },
        triggerElementRef: T,
        externalTree: M,
        isActiveTrigger: y,
        isClosing: ()=>_.select("transitionStatus") === "ending"
    }), re = dSS(k, _.select("lastOpenChangeReason")), ie = X8t(S, {
        enabled: !G && I.type !== "context-menu",
        event: k && $ ? "click" : "mousedown",
        toggle: !0,
        ignoreMouse: !1,
        stickIfOpen: I.type === void 0 ? re : !1
    }), oe = uJo(S, {
        enabled: !G && Q
    }), se = lSS({
        open: k,
        enabled: $,
        mouseDownAction: "open"
    }), le = OFe.useMemo(()=>uB(oe.reference, ie.reference), [
        oe.reference,
        ie.reference
    ]), ce = _.useState("triggerProps", j), { preFocusGuardRef: ae, handlePreFocusGuardFocus: de, handleFocusTargetFocus: he } = C6h(_, T), ge = {
        disabled: G,
        open: k
    }, pe = [
        V,
        n,
        K,
        U,
        T
    ], ve = [
        le,
        ee ?? pE,
        ce,
        {
            "aria-haspopup": "menu",
            "aria-controls": C,
            id: b,
            onMouseDown: (Te)=>{
                if (_.select("open")) return;
                Y.start(200, ()=>{
                    _.context.allowMouseUpTriggerRef.current = !0;
                }), ak(Te.currentTarget).addEventListener("mouseup", J, {
                    once: !0
                });
            }
        },
        $ ? {
            role: "menuitem"
        } : {},
        se,
        g,
        q
    ], fe = Lm("button", e, {
        enabled: !$,
        stateAttributesMapping: a7t,
        state: ge,
        ref: pe,
        props: ve
    });
    return $ ? Jhi(laa, {
        tag: "button",
        render: i,
        className: r,
        style: s,
        state: ge,
        refs: pe,
        props: ve,
        stateAttributesMapping: a7t
    }) : k ? uSS(OFe.Fragment, {
        children: [
            Jhi(YHe, {
                ref: ae,
                onFocus: de
            }, `${b}-pre-focus-guard`),
            Jhi(OFe.Fragment, {
                children: fe
            }, b),
            Jhi(YHe, {
                ref: _.context.triggerFocusTargetRef,
                onFocus: he
            }, `${b}-post-focus-guard`)
        ]
    }) : Jhi(OFe.Fragment, {
        children: fe
    }, b);
}), process.env.NODE_ENV !== "production" && (oma.displayName = "MenuTrigger");

}
