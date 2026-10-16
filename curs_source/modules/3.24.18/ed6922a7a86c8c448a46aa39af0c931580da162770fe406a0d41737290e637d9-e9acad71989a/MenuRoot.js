import { yvt } from "./ContextMenuRootContext.js";
import { yU } from "./DirectionContext.js";
import { BJ, WRe } from "./FloatingTree.js";
import { A0n, Xre } from "./MenuRootContext.js";
import { $Fl, u1s } from "./MenuStore.js";
import { d1s } from "./MenuSubmenuRootContext.js";
import { NFl } from "./MenubarContext.js";
import { $il, Nre } from "./constants_10.js";
import { Ty } from "./createBaseUIEventDetails.js";
import { Are, LE, R0 } from "./empty.js";
import { LFl, WFl, Yre, t6t } from "./f0s.js";
import { QK } from "./mergeProps.js";
import { Z5e, s$ } from "./popupStoreUtils.js";
import { $gt, CSn, Dhs, I3, N0i, Ngt, QCi, Qu, TSn, Tgt, _hs, aN, fhs, ohs, pYe, qrl, r1i, s1i, su, wSn, xM, zds } from "./qIc.js";
import { BRe, Dfe, Mgt, Pgt, UBt, V5e, aCe, dSn, g_, m2 } from "./reason-parts.js";
import { x } from "./tslib.es6.js";
import { Hgt } from "./useDismiss.js";
import { af, gl } from "./useIsoLayoutEffect.js";
import { vhs } from "./useListNavigation.js";
import { FSn } from "./useOpenInteractionType.js";
import { Cy } from "./useStableCallback.js";
import { zrl } from "./useSyncedFloatingRootContext.js";
import { A3 } from "./useTimeout.js";
import { bhs } from "./useTypeahead.js";
import { jsx as GFl } from "./react-runtime/react/esm-jsx-runtime-production.js";
import * as LY from "./react-runtime/react/esm-index-production.js";
var D0n;
export { D0n };
var __wakaru_h1s_initialized = false;
export function h1s() {
if (__wakaru_h1s_initialized) return;
__wakaru_h1s_initialized = true;
x(), A3(), Cy(), Ngt(), af(), LE(), Tgt(), Xre(), NFl(), Nre(), yU(), FSn(), Ty(), yvt(), $Fl(), d1s(), s$(), BJ(), g_(), zrl(), Hgt(), vhs(), bhs(), QK(), D0n = QCi(function(t) {
    const { children: n, open: i, onOpenChange: r, onOpenChangeComplete: s, defaultOpen: o = !1, disabled: a = !1, modal: c, loopFocus: l = !0, orientation: u = "vertical", actionsRef: h, closeParentOnEsc: p = !1, handle: g, triggerId: f, defaultTriggerId: v = null, highlightItemOnHover: b = !0 } = t, y = t6t(!0), T = Yre(!0), E = LFl(!0), A = WFl(), R = LY.useMemo(()=>A && T ? {
            type: "menu",
            store: T.store
        } : E ? {
            type: "menubar",
            context: E
        } : y && !T ? {
            type: "context-menu",
            context: y
        } : {
            type: void 0
        }, [
        y,
        T,
        E,
        A
    ]), D = u1s.useStore(g?.store, {
        open: o,
        openProp: i,
        activeTriggerId: v,
        triggerIdProp: f,
        parent: R
    });
    s1i(D, i, o, v), D.useControlledProp("openProp", i), D.useControlledProp("triggerIdProp", f), D.useContextCallback("onOpenChangeComplete", s);
    const P = pYe(), N = pYe(), O = D.useState("floatingTreeRoot"), F = N0i(O), H = WRe(), $ = D.useState("open"), W = D.useState("activeTriggerElement"), G = D.useState("positionerElement"), q = D.useState("hoverEnabled"), z = D.useState("disabled"), X = D.useState("lastOpenChangeReason"), Y = D.useState("parent"), Z = D.useState("activeIndex"), K = D.useState("payload"), J = D.useState("floatingParentNodeId"), ne = LY.useRef(null), ee = LY.useRef(Y.type !== "context-menu"), se = aN(), re = LY.useRef(!0), ue = aN(), ce = J != null;
    process.env.NODE_ENV !== "production" && Y.type !== void 0 && c !== void 0 && console.warn("Base UI: The `modal` prop is not supported on nested menus. It will be ignored.");
    const { openMethod: de, triggerProps: le } = Dhs($);
    D.useSyncedValues({
        disabled: a,
        highlightItemOnHover: b,
        modal: Y.type === void 0 ? c : void 0,
        openMethod: de,
        rootId: P
    }), wSn(D);
    const { forceUnmount: ye } = CSn($, D, ()=>{
        D.update({
            allowMouseEnter: !1,
            stickIfOpen: !0
        });
    });
    gl(()=>{
        y && !T ? D.update({
            parent: {
                type: "context-menu",
                context: y
            },
            floatingNodeId: F,
            floatingParentNodeId: H
        }) : T && D.update({
            floatingNodeId: F,
            floatingParentNodeId: H
        });
    }, [
        y,
        T,
        F,
        H,
        D
    ]), LY.useEffect(()=>{
        if ($ || (ne.current = null), Y.type === "context-menu") {
            if (!$) {
                se.clear(), ee.current = !1;
                return;
            }
            se.start(500, ()=>{
                ee.current = !0;
            });
        }
    }, [
        se,
        $,
        Y.type
    ]), gl(()=>{
        !$ && !q && D.set("hoverEnabled", !0);
    }, [
        $,
        q,
        D
    ]);
    const _e = su((st, vt)=>{
        const ht = vt.reason;
        if ($ === st && vt.trigger === W && X === ht) return;
        const ut = ohs(vt);
        if (!st && vt.trigger == null && (vt.trigger = W ?? void 0), r?.(st, vt), vt.isCanceled) return;
        D.state.floatingRootContext.dispatchOpenChange(st, vt);
        const Dt = vt.event;
        if (st === !1 && Dt?.type === "click" && Dt.pointerType === "touch" && !re.current) return;
        st && ht === Mgt ? (re.current = !1, ue.start(300, ()=>{
            re.current = !0;
        })) : (re.current = !0, ue.clear());
        const lt = (ht === Dfe || ht === V5e) && Dt.detail === 0 && Dt?.isTrusted, Tt = !st && (ht === Pgt || ht == null), ct = {
            open: st,
            openChangeReason: ht
        };
        ne.current = vt.event ?? null, r1i(ct, st, vt.trigger, ut()), D.update(ct), Y.type === "menubar" && (ht === Mgt || ht === BRe || ht === m2 || ht === dSn || ht === UBt) ? D.set("instantType", "group") : lt || Tt ? D.set("instantType", lt ? "click" : "dismiss") : D.set("instantType", void 0);
    }), me = qrl({
        popupStore: D,
        floatingId: N,
        nested: H != null,
        onOpenChange: _e
    }), Ce = me.context.events;
    LY.useEffect(()=>{
        const st = ({ open: vt, eventDetails: ht })=>_e(vt, ht);
        return Ce.on("setOpen", st), ()=>{
            Ce?.off("setOpen", st);
        };
    }, [
        Ce,
        _e
    ]);
    const xe = LY.useCallback(()=>{
        D.setOpen(!1, Qu(aCe));
    }, [
        D
    ]);
    LY.useImperativeHandle(h, ()=>({
            unmount: ye,
            close: xe
        }), [
        ye,
        xe
    ]);
    let Le;
    Y.type === "context-menu" && (Le = Y.context), LY.useImperativeHandle(Le?.positionerRef, ()=>G, [
        G
    ]), LY.useImperativeHandle(Le?.actionsRef, ()=>({
            setOpen: _e
        }), [
        _e
    ]);
    const Be = $gt(me, {
        enabled: !z,
        bubbles: {
            escapeKey: p && Y.type === "menu"
        },
        outsidePress () {
            return Y.type !== "context-menu" || ne.current?.type === "contextmenu" ? !0 : ee.current;
        },
        externalTree: ce ? O : void 0
    }), je = xM(), Ge = LY.useCallback((st)=>{
        D.select("activeIndex") !== st && D.set("activeIndex", st);
    }, [
        D
    ]), Xe = fhs(me, {
        enabled: !z,
        listRef: D.context.itemDomElements,
        activeIndex: Z,
        nested: Y.type !== void 0,
        loopFocus: l,
        orientation: u,
        parentOrientation: Y.type === "menubar" ? Y.context.orientation : void 0,
        rtl: je === "rtl",
        disabledIndices: Are,
        onNavigate: Ge,
        openOnArrowKeyDown: Y.type !== "context-menu",
        externalTree: ce ? O : void 0,
        focusItemOnHover: b
    }), Ke = LY.useCallback((st)=>{
        D.context.typingRef.current = st;
    }, [
        D
    ]), et = _hs(me, {
        enabled: !z,
        listRef: D.context.itemLabels,
        elementsRef: D.context.itemDomElements,
        activeIndex: Z,
        resetMs: $il,
        onMatch: (st)=>{
            $ && st !== Z && D.set("activeIndex", st);
        },
        onTyping: Ke
    }), We = LY.useMemo(()=>{
        const st = I3(et.reference, Xe.reference, Be.reference, {
            onMouseMove () {
                D.set("allowMouseEnter", !0);
            }
        }, le);
        return st["aria-haspopup"] = "menu", st["aria-expanded"] = $, st;
    }, [
        D,
        et.reference,
        Xe.reference,
        Be.reference,
        le,
        $
    ]), it = LY.useMemo(()=>{
        const st = I3(Xe.trigger, Be.trigger, le);
        return st["aria-haspopup"] = "menu", st["aria-expanded"] = !1, st;
    }, [
        Xe.trigger,
        Be.trigger,
        le
    ]), Ne = LY.useMemo(()=>I3(Z5e, {
            id: N,
            role: "menu",
            "aria-labelledby": W?.id,
            onMouseMove () {
                D.set("allowMouseEnter", !0), Y.type === "menu" && D.set("hoverEnabled", !1);
            },
            onClick () {
                D.select("hoverEnabled") && D.set("hoverEnabled", !1);
            },
            onKeyDown (st) {
                const vt = D.select("keyboardEventRelay");
                vt && !st.isPropagationStopped() && vt(st);
            }
        }, et.floating, Xe.floating, Be.floating), [
        W,
        N,
        Y.type,
        D,
        et.floating,
        Xe.floating,
        Be.floating
    ]), Fe = Xe.item ?? R0;
    TSn(D, {
        floatingRootContext: me,
        activeTriggerProps: We,
        inactiveTriggerProps: it,
        popupProps: Ne,
        itemProps: Fe
    });
    const Qe = LY.useMemo(()=>({
            store: D,
            parent: R
        }), [
        D,
        R
    ]), tt = GFl(A0n.Provider, {
        value: Qe,
        children: typeof n == "function" ? n({
            payload: K
        }) : n
    });
    return Y.type === void 0 || Y.type === "context-menu" ? GFl(zds, {
        externalTree: O,
        children: tt
    }) : tt;
}), process.env.NODE_ENV !== "production" && (D0n.displayName = "MenuRoot");

}
