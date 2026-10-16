import { HUt } from "./ContextMenuRootContext.js";
import { Wj } from "./DirectionContext.js";
import { QHe, vhe } from "./FloatingTree.js";
import { $li, FSt, Hli, JAr, K3, O8t, ORr, Pah, Q8t, RJo, V8t, VQo, Wli, _Jo, a6, fJo, n2r, oJo, pu, t2r, uB, zd } from "./LYd.js";
import { F_e, Xhi } from "./MenuRootContext.js";
import { nma, v6h } from "./MenuStore.js";
import { ima } from "./MenuSubmenuRootContext.js";
import { h6h } from "./MenubarContext.js";
import { Toh, k_e } from "./constants_10.js";
import { VS } from "./createBaseUIEventDetails.js";
import { pE, vA, xoe } from "./empty.js";
import { O_e, b6h, d6h, mSn } from "./ipa.js";
import { mne } from "./mergeProps.js";
import { FY, Znt } from "./popupStoreUtils.js";
import { E4, Eli, G8t, J_n, KHe, PRe, Uwe, Zb, q8t, qnt } from "./reason-parts.js";
import { E } from "./tslib.es6.js";
import { J8t } from "./useDismiss.js";
import { jv, su } from "./useIsoLayoutEffect.js";
import { vJo } from "./useListNavigation.js";
import { nci } from "./useOpenInteractionType.js";
import { Jy } from "./useStableCallback.js";
import { Mah } from "./useSyncedFloatingRootContext.js";
import { M7 } from "./useTimeout.js";
import { bJo } from "./useTypeahead.js";
import * as iae from "./react-runtime/react/esm-index-production.js";
import { jsx as y6h } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Qhi;
export { Qhi };
var __wakaru_rma_initialized = false;
export function rma() {
if (__wakaru_rma_initialized) return;
__wakaru_rma_initialized = true;
E(), M7(), Jy(), V8t(), jv(), vA(), O8t(), F_e(), h6h(), k_e(), Wj(), nci(), VS(), HUt(), v6h(), ima(), FY(), vhe(), Zb(), Mah(), J8t(), vJo(), bJo(), mne(), Qhi = JAr(function(e) {
    const { children: n, open: i, onOpenChange: r, onOpenChangeComplete: s, defaultOpen: o = !1, disabled: a = !1, modal: l, loopFocus: c = !0, orientation: u = "vertical", actionsRef: d, closeParentOnEsc: h = !1, handle: p, triggerId: g, defaultTriggerId: f = null, highlightItemOnHover: _ = !0 } = e, b = mSn(!0), y = O_e(!0), S = d6h(!0), k = b6h(), C = iae.useMemo(()=>k && y ? {
            type: "menu",
            store: y.store
        } : S ? {
            type: "menubar",
            context: S
        } : b && !y ? {
            type: "context-menu",
            context: b
        } : {
            type: void 0
        }, [
        b,
        y,
        S,
        k
    ]), T = nma.useStore(p?.store, {
        open: o,
        openProp: i,
        activeTriggerId: f,
        triggerIdProp: g,
        parent: C
    });
    n2r(T, i, o, f), T.useControlledProp("openProp", i), T.useControlledProp("triggerIdProp", g), T.useContextCallback("onOpenChangeComplete", s);
    const I = FSt(), A = FSt(), P = T.useState("floatingTreeRoot"), M = ORr(P), O = QHe(), N = T.useState("open"), U = T.useState("activeTriggerElement"), j = T.useState("positionerElement"), $ = T.useState("hoverEnabled"), H = T.useState("disabled"), G = T.useState("lastOpenChangeReason"), q = T.useState("parent"), K = T.useState("activeIndex"), V = T.useState("payload"), Y = T.useState("floatingParentNodeId"), J = iae.useRef(null), Q = iae.useRef(q.type !== "context-menu"), te = a6(), ee = iae.useRef(!0), re = a6(), ie = Y != null;
    process.env.NODE_ENV !== "production" && q.type !== void 0 && l !== void 0 && console.warn("Base UI: The `modal` prop is not supported on nested menus. It will be ignored.");
    const { openMethod: oe, triggerProps: se } = RJo(N);
    T.useSyncedValues({
        disabled: a,
        highlightItemOnHover: _,
        modal: q.type === void 0 ? l : void 0,
        openMethod: oe,
        rootId: I
    }), $li(T);
    const { forceUnmount: le } = Hli(N, T, ()=>{
        T.update({
            allowMouseEnter: !1,
            stickIfOpen: !0
        });
    });
    su(()=>{
        b && !y ? T.update({
            parent: {
                type: "context-menu",
                context: b
            },
            floatingNodeId: M,
            floatingParentNodeId: O
        }) : y && T.update({
            floatingNodeId: M,
            floatingParentNodeId: O
        });
    }, [
        b,
        y,
        M,
        O,
        T
    ]), iae.useEffect(()=>{
        if (N || (J.current = null), q.type === "context-menu") {
            if (!N) {
                te.clear(), Q.current = !1;
                return;
            }
            te.start(500, ()=>{
                Q.current = !0;
            });
        }
    }, [
        te,
        N,
        q.type
    ]), su(()=>{
        !N && !$ && T.set("hoverEnabled", !0);
    }, [
        N,
        $,
        T
    ]);
    const ce = pu((Ne, be)=>{
        const je = be.reason;
        if (N === Ne && be.trigger === U && G === je) return;
        const $e = oJo(be);
        if (!Ne && be.trigger == null && (be.trigger = U ?? void 0), r?.(Ne, be), be.isCanceled) return;
        T.state.floatingRootContext.dispatchOpenChange(Ne, be);
        const Je = be.event;
        if (Ne === !1 && Je?.type === "click" && Je.pointerType === "touch" && !ee.current) return;
        Ne && je === G8t ? (ee.current = !1, re.start(300, ()=>{
            ee.current = !0;
        })) : (ee.current = !0, re.clear());
        const Ge = (je === PRe || je === qnt) && Je.detail === 0 && Je?.isTrusted, xe = !Ne && (je === q8t || je == null), Oe = {
            open: Ne,
            openChangeReason: je
        };
        J.current = be.event ?? null, t2r(Oe, Ne, be.trigger, $e()), T.update(Oe), q.type === "menubar" && (je === G8t || je === KHe || je === E4 || je === Eli || je === J_n) ? T.set("instantType", "group") : Ge || xe ? T.set("instantType", Ge ? "click" : "dismiss") : T.set("instantType", void 0);
    }), ae = Pah({
        popupStore: T,
        floatingId: A,
        nested: O != null,
        onOpenChange: ce
    }), de = ae.context.events;
    iae.useEffect(()=>{
        const Ne = ({ open: be, eventDetails: je })=>ce(be, je);
        return de.on("setOpen", Ne), ()=>{
            de?.off("setOpen", Ne);
        };
    }, [
        de,
        ce
    ]);
    const he = iae.useCallback(()=>{
        T.setOpen(!1, zd(Uwe));
    }, [
        T
    ]);
    iae.useImperativeHandle(d, ()=>({
            unmount: le,
            close: he
        }), [
        le,
        he
    ]);
    let ge;
    q.type === "context-menu" && (ge = q.context), iae.useImperativeHandle(ge?.positionerRef, ()=>j, [
        j
    ]), iae.useImperativeHandle(ge?.actionsRef, ()=>({
            setOpen: ce
        }), [
        ce
    ]);
    const pe = Q8t(ae, {
        enabled: !H,
        bubbles: {
            escapeKey: h && q.type === "menu"
        },
        outsidePress () {
            return q.type !== "context-menu" || J.current?.type === "contextmenu" ? !0 : Q.current;
        },
        externalTree: ie ? P : void 0
    }), ve = K3(), fe = iae.useCallback((Ne)=>{
        T.select("activeIndex") !== Ne && T.set("activeIndex", Ne);
    }, [
        T
    ]), Te = fJo(ae, {
        enabled: !H,
        listRef: T.context.itemDomElements,
        activeIndex: K,
        nested: q.type !== void 0,
        loopFocus: c,
        orientation: u,
        parentOrientation: q.type === "menubar" ? q.context.orientation : void 0,
        rtl: ve === "rtl",
        disabledIndices: xoe,
        onNavigate: fe,
        openOnArrowKeyDown: q.type !== "context-menu",
        externalTree: ie ? P : void 0,
        focusItemOnHover: _
    }), _e = iae.useCallback((Ne)=>{
        T.context.typingRef.current = Ne;
    }, [
        T
    ]), Ce = _Jo(ae, {
        enabled: !H,
        listRef: T.context.itemLabels,
        elementsRef: T.context.itemDomElements,
        activeIndex: K,
        resetMs: Toh,
        onMatch: (Ne)=>{
            N && Ne !== K && T.set("activeIndex", Ne);
        },
        onTyping: _e
    }), Se = iae.useMemo(()=>{
        const Ne = uB(Ce.reference, Te.reference, pe.reference, {
            onMouseMove () {
                T.set("allowMouseEnter", !0);
            }
        }, se);
        return Ne["aria-haspopup"] = "menu", Ne["aria-expanded"] = N, Ne;
    }, [
        T,
        Ce.reference,
        Te.reference,
        pe.reference,
        se,
        N
    ]), Pe = iae.useMemo(()=>{
        const Ne = uB(Te.trigger, pe.trigger, se);
        return Ne["aria-haspopup"] = "menu", Ne["aria-expanded"] = !1, Ne;
    }, [
        Te.trigger,
        pe.trigger,
        se
    ]), we = iae.useMemo(()=>uB(Znt, {
            id: A,
            role: "menu",
            "aria-labelledby": U?.id,
            onMouseMove () {
                T.set("allowMouseEnter", !0), q.type === "menu" && T.set("hoverEnabled", !1);
            },
            onClick () {
                T.select("hoverEnabled") && T.set("hoverEnabled", !1);
            },
            onKeyDown (Ne) {
                const be = T.select("keyboardEventRelay");
                be && !Ne.isPropagationStopped() && be(Ne);
            }
        }, Ce.floating, Te.floating, pe.floating), [
        U,
        A,
        q.type,
        T,
        Ce.floating,
        Te.floating,
        pe.floating
    ]), Ie = Te.item ?? pE;
    Wli(T, {
        floatingRootContext: ae,
        activeTriggerProps: Se,
        inactiveTriggerProps: Pe,
        popupProps: we,
        itemProps: Ie
    });
    const Me = iae.useMemo(()=>({
            store: T,
            parent: C
        }), [
        T,
        C
    ]), De = y6h(Xhi.Provider, {
        value: Me,
        children: typeof n == "function" ? n({
            payload: V
        }) : n
    });
    return q.type === void 0 || q.type === "context-menu" ? y6h(VQo, {
        externalTree: P,
        children: De
    }) : De;
}), process.env.NODE_ENV !== "production" && (Qhi.displayName = "MenuRoot");

}
