import { bC, crr, srr } from "./Dialog.stylex.ts";
import { $rr, Irr, Pki } from "./Dialog.types.ts";
import { Mrr, jki } from "./DialogClose.tsx";
import { Rrr, o3 } from "./DialogContent.tsx";
import { Nrr, YY, oNe } from "./DialogContext.tsx";
import { Lki, Prr } from "./DialogDescription.tsx";
import { M4, jrr } from "./DialogFooter.tsx";
import { Lrr, s3 } from "./DialogHeader.tsx";
import { Dki, Drr } from "./DialogHeaderLead.tsx";
import { Brr, Fki } from "./DialogList.tsx";
import { Oki, qrr } from "./DialogListHeader.tsx";
import { Urr, zki } from "./DialogListRow.tsx";
import { Bki, Grr } from "./DialogTitle.tsx";
import { n3 } from "./PortalContext.tsx";
import { r3 } from "./PortalLayeringContext.tsx";
import { $e } from "./attach.ts";
import { Zr, rd } from "./cn.ts";
import { Cnr, Db, JIe, VIe, VY, XIe, Xme, Yme, ZIe, tIt, tk } from "./floating-ui.react.mjs";
import { ji } from "./index_2.ts";
import { i3 } from "./index_6.ts";
import { i } from "./plugin-brand-icon.js";
import { useMemo as JAe } from "./react-runtime/react/esm-index-production.js";
import { jsx as QAe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as _z } from "./react-runtime/react/esm-index-production.js";
import { jsxs as bdi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { isValidElement as gdi } from "./react-runtime/react/esm-index-production.js";
import { Children as hdi } from "./react-runtime/react/esm-index-production.js";
import { useCallback as l8t } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as u8t } from "./react-runtime/react/esm-index-production.js";
import { useRef as wz } from "./react-runtime/react/esm-index-production.js";
import { useEffect as yz } from "./react-runtime/react/esm-index-production.js";
function Wrr() {
    if (typeof document > "u" || document.body === null) return !0;
    const r = getComputedStyle(document.documentElement), e = r.overflowX === "visible" && r.overflowY === "visible" ? getComputedStyle(document.body) : r;
    return !qIt(e.overflowX) || !qIt(e.overflowY);
}
function Hrr(r) {
    const e = hdi.toArray(r).filter(gdi);
    let a = !1, s = !1;
    for(let l = 0; l < e.length; l += 1)e[l].type === o3 && (l === 0 && (s = !0), l > 0 && e[l - 1]?.type === s3 && (a = !0, s = !0));
    return {
        headerBeforeContent: a,
        contentHasCompactTopPadding: s
    };
}
function Zrr(r) {
    return r === void 0 ? {
        top: 40,
        right: 40,
        bottom: 40,
        left: 40
    } : typeof r == "number" ? {
        top: r,
        right: r,
        bottom: r,
        left: r
    } : {
        top: r.top ?? 0,
        right: r.right ?? 0,
        bottom: r.bottom ?? 0,
        left: r.left ?? 0
    };
}
function OIt(r, e, a = 1024, s = window) {
    const l = s.innerWidth - e.left - e.right, u = a !== null ? Math.min(l, a) : l, p = s.innerHeight - e.top - e.bottom;
    let m = u, b = u / r;
    b > p && (b = p, m = p * r);
    const g = e.left + (l - m) / 2, _ = e.top + (p - b) / 2;
    return {
        width: m,
        height: b,
        top: _,
        left: g
    };
}
function zIt(r, e, a) {
    return e <= 0 ? "none" : r.map((s)=>`${s} ${e}ms ${a}`).join(", ");
}
function Vrr(r) {
    return r.button === 0 && !r.ctrlKey;
}
function BIt(r) {
    return r.querySelector(Xrr) !== null;
}
function sNe(r, e) {
    return r?.ownerDocument ?? e?.ownerDocument ?? (typeof document > "u" ? null : document);
}
function Krr({ children: r, size: e = "md", width: a, open: s, defaultOpen: l = !1, onOpenChange: u, role: p = "dialog", "aria-label": m, "aria-labelledby": b, "aria-describedby": g, "data-presentation": _, "data-block-global-shortcuts": v, className: x, backdropClassName: C, rootStylexStyles: E, backdropStylexStyles: A, fullscreenTransition: $, fullscreenBackdropTransition: I, style: N, closeOnBackdropClick: R = !0, closeOnOutsidePress: P = !0, closeOnEscape: L = !0, modal: j = !0, lockScroll: z = !0, ref: q, animationSource: O, aspectRatio: B, fullscreenViewportPadding: V, fullscreenMaxWidth: H, onAnimationComplete: Z, onTransitionStatusChange: K, transitionDuration: Y, initialFocus: J, returnFocus: re, onKeyDown: ne, dialogRootTabIndex: ae = -1 }) {
    const [W, oe] = _z(l), ce = s !== void 0, Q = ce ? s : W, le = n3(), [he, me] = _z(null), [be, ue] = _z(!0), [ge, _e] = _z(!1);
    if (Q !== ge && (_e(Q), Q)) {
        ue(Wrr());
        const En = le?.ownerDocument ?? (typeof document > "u" ? null : document), Hn = En?.activeElement ?? null, Xr = Hn?.ownerDocument.defaultView ?? null;
        me(Hn !== null && Xr !== null && Hn instanceof Xr.HTMLElement && Hn !== En?.body && Hn.closest('[role="menu"],[role="listbox"]') === null ? Hn : null);
    }
    const ve = wz(null);
    u8t(()=>{
        ve.current = he;
    }, [
        he
    ]);
    const Se = e === "fullscreen", Ne = $?.durationMs ?? $rr, je = $?.easing ?? Irr, tt = I?.durationMs ?? Ne, Ke = I?.easing ?? je, [nt, ut] = _z("idle"), [it, Ze] = _z(!1), Ie = wz(null), Me = wz(null), et = wz(Z);
    yz(()=>{
        et.current = Z;
    }, [
        Z
    ]);
    const Ue = wz(K);
    yz(()=>{
        Ue.current = K;
    }, [
        K
    ]);
    const Be = l8t((En)=>{
        ce || oe(En), u?.(En);
    }, [
        ce,
        u
    ]), Fe = wz(null), Je = l8t(()=>{
        const En = sNe(le, Fe.current);
        if (En === null) return !0;
        const Xr = (le ?? En.body).querySelectorAll("[data-ui-dialog-root]");
        return Xr.item(Xr.length - 1) === Fe.current;
    }, [
        le
    ]);
    yz(()=>{
        if (!Se || !Q || !O) return;
        Me.current && (clearTimeout(Me.current), Me.current = null), ut("expanding");
        let En = null, Hn = null;
        return En = requestAnimationFrame(()=>{
            Hn = requestAnimationFrame(()=>{
                Ze(!0);
            });
        }), Ie.current = setTimeout(()=>{
            ut("expanded"), et.current?.();
        }, Ne), ()=>{
            En !== null && cancelAnimationFrame(En), Hn !== null && cancelAnimationFrame(Hn), Ie.current && clearTimeout(Ie.current);
        };
    }, [
        Se,
        Q,
        O,
        Ne
    ]);
    const ee = l8t(()=>{
        !Se || nt === "collapsing" || (Ie.current && (clearTimeout(Ie.current), Ie.current = null), ut("collapsing"), Ze(!1), Me.current = setTimeout(()=>{
            Be(!1), ut("idle"), Me.current = null, et.current?.();
        }, Ne));
    }, [
        Se,
        nt,
        Be,
        Ne
    ]);
    yz(()=>()=>{
            Ie.current && clearTimeout(Ie.current), Me.current && clearTimeout(Me.current);
        }, []);
    const { refs: Xe, context: We } = Yme({
        open: Q,
        onOpenChange: Se ? (En)=>{
            En ? Be(!0) : ee();
        } : Be
    }), He = tk([
        Xe.setFloating,
        Fe,
        q
    ]), Ge = ZIe(We), at = VIe(We, {
        outsidePressEvent: "mousedown",
        outsidePress: R && P ? (En)=>Vrr(En) && Je() : !1,
        escapeKey: !1
    }), Le = JIe(We, {
        role: p
    }), { getFloatingProps: kt } = XIe([
        Ge,
        at,
        Le
    ]), Ft = kt(), ft = Y ?? 300, { isMounted: Ct, status: Et } = tIt(We, {
        duration: Se ? Ne : ft
    }), Zt = wz(Et);
    u8t(()=>{
        Ue.current?.(Et);
    }, [
        Et
    ]);
    const { titleId: bn, descriptionId: Ht } = Nrr(), [mn, Vt] = _z(!1);
    u8t(()=>{
        const En = Fe.current;
        Vt(En !== null && En.querySelector(`[id="${Ht}"]`) !== null);
    });
    const On = JAe(()=>Hrr(r), [
        r
    ]), zn = JAe(()=>({
            titleId: bn,
            descriptionId: Ht,
            onOpenChange: Se ? (En)=>{
                En || ee();
            } : Be,
            headerBeforeContent: On.headerBeforeContent,
            contentHasCompactTopPadding: On.contentHasCompactTopPadding
        }), [
        bn,
        Ht,
        Be,
        Se,
        ee,
        On.headerBeforeContent,
        On.contentHasCompactTopPadding
    ]), vn = Zrr(V), Dn = JAe(()=>({
            top: vn.top,
            right: vn.right,
            bottom: vn.bottom,
            left: vn.left
        }), [
        vn.top,
        vn.right,
        vn.bottom,
        vn.left
    ]), ir = JAe(()=>{
        if (!Se || !O) return;
        const En = B ?? O.width / O.height, Hn = OIt(En, Dn, H, sNe(le, Fe.current)?.defaultView ?? window), Xr = O.width / Hn.width, $r = O.height / Hn.height, Fr = O.left + O.width / 2, Vr = O.top + O.height / 2, _a = Hn.left + Hn.width / 2, Jo = Hn.top + Hn.height / 2, So = Fr - _a, ks = Vr - Jo, Qa = !it, bl = 8, Yi = O.borderRadius ?? bl, $a = Math.max(Xr, $r, .001), Ua = Yi / $a, lr = Qa ? Ua : bl;
        return {
            position: "fixed",
            top: Hn.top,
            left: Hn.left,
            width: Hn.width,
            height: Hn.height,
            transform: Qa ? `translate(${So}px, ${ks}px) scale(${Xr}, ${$r})` : "translate(0, 0) scale(1, 1)",
            transformOrigin: "center center",
            borderRadius: `${lr}px`,
            overflow: "hidden",
            transition: zIt([
                "transform",
                "border-radius",
                "opacity"
            ], Ne, je),
            willChange: Qa ? "transform, border-radius" : "auto",
            contain: "layout"
        };
    }, [
        Se,
        O,
        B,
        Dn,
        H,
        it,
        Ne,
        je,
        le
    ]);
    yz(()=>{
        if (!Se || nt !== "expanded" || !O) return;
        const En = Fe.current;
        if (!En) return;
        const Hn = B ?? O.width / O.height;
        let Xr = null;
        const $r = En.ownerDocument.defaultView ?? window, Fr = i(()=>{
            Xr = null;
            const _a = OIt(Hn, Dn, H, $r);
            En.style.top = `${_a.top}px`, En.style.left = `${_a.left}px`, En.style.width = `${_a.width}px`, En.style.height = `${_a.height}px`;
        }, "applySize"), Vr = i(()=>{
            Xr === null && (Xr = $r.requestAnimationFrame(Fr));
        }, "onResize");
        return $r.addEventListener("resize", Vr), ()=>{
            $r.removeEventListener("resize", Vr), Xr !== null && $r.cancelAnimationFrame(Xr);
        };
    }, [
        Se,
        nt,
        O,
        B,
        Dn,
        H
    ]);
    const Wn = Se ? Ct || nt === "collapsing" : Ct, { portalLayerStyles: Mr } = r3("modal", Wn);
    if (yz(()=>{
        if (Se) {
            Zt.current = Et;
            return;
        }
        const En = Zt.current;
        (Et === "open" && En !== "open" || Et === "unmounted" && En === "close") && et.current?.(), Zt.current = Et;
    }, [
        Se,
        Et
    ]), yz(()=>{
        if (!Wn || !L) return;
        const En = sNe(le, Fe.current);
        if (En === null) return;
        const Hn = new WeakSet, Xr = i((Fr)=>{
            Fr.key === "Escape" && BIt(En) && Hn.add(Fr);
        }, "onKeyDownCapture"), $r = i((Fr)=>{
            Fr.key === "Escape" && (Fr.defaultPrevented || Fr.isComposing || !Je() || Hn.has(Fr) || BIt(En) || (Fr.preventDefault(), Fr.stopPropagation(), Fr.stopImmediatePropagation(), Se ? ee() : Be(!1)));
        }, "onKeyDown_0");
        return En.addEventListener("keydown", Xr, !0), En.addEventListener("keydown", $r), ()=>{
            En.removeEventListener("keydown", Xr, !0), En.removeEventListener("keydown", $r);
        };
    }, [
        Wn,
        L,
        Je,
        Se,
        ee,
        le,
        Be
    ]), !Wn) return null;
    const Ut = b ?? (m ? void 0 : bn), fn = Et, Gt = $e({
        rootClass: "ui-dialog-backdrop",
        stylexStyles: [
            srr({
                fullscreen: Se,
                status: fn
            }),
            A
        ],
        className: Zr(Se && "ui-dialog-backdrop--fullscreen", C),
        style: Se ? {
            opacity: it ? 1 : 0,
            transition: zIt([
                "opacity"
            ], tt, Ke),
            willChange: it ? "auto" : "opacity",
            ...Mr
        } : Mr
    }), qe = $e({
        rootClass: "ui-dialog",
        stylexStyles: [
            crr({
                fullscreen: Se,
                size: e,
                status: fn,
                width: a
            }),
            E
        ],
        className: Zr(`ui-dialog--${e}`, x),
        style: Se ? {
            ...ir,
            ...Mr,
            ...N
        } : {
            ...Mr,
            ...N
        }
    });
    return QAe(oNe.Provider, {
        value: zn,
        children: bdi(VY, {
            ...le ? {
                root: le
            } : {},
            children: [
                j && QAe(Cnr, {
                    className: Gt.className,
                    lockScroll: z && be,
                    "data-status": Et,
                    "data-expanded": Se ? it : void 0,
                    style: Gt.style,
                    onClick: R ? (En)=>{
                        En.ctrlKey || Je() && En.target === En.currentTarget && (Se ? ee() : Be(!1));
                    } : void 0
                }),
                QAe(Xme, {
                    context: We,
                    modal: j,
                    ...J !== void 0 ? {
                        initialFocus: J
                    } : {},
                    ...re !== void 0 ? {
                        returnFocus: re
                    } : he !== null ? {
                        returnFocus: ve
                    } : {},
                    children: QAe("div", {
                        ref: He,
                        role: "dialog",
                        tabIndex: ae,
                        "data-ui-dialog-root": "",
                        className: qe.className,
                        style: qe.style,
                        "aria-label": m,
                        "aria-labelledby": Ut,
                        "aria-describedby": g ?? (mn ? Ht : void 0),
                        "aria-modal": j ? "true" : void 0,
                        "data-presentation": _,
                        "data-block-global-shortcuts": v,
                        "data-status": Et,
                        "data-animation-phase": Se ? nt : void 0,
                        "data-expanded": Se ? it : void 0,
                        ...Ft,
                        onKeyDown: (En)=>{
                            const Hn = Ft.onKeyDown;
                            typeof Hn == "function" && Hn(En), En.defaultPrevented || ne?.(En);
                        },
                        children: r
                    })
                })
            ]
        })
    });
}
var qIt, Xrr, ad;
export { BIt, Hrr, Krr, OIt, Vrr, Wrr, Xrr, Zrr, ad, qIt, sNe, zIt };
var __wakaru_Yrr_initialized = false;
export function Yrr() {
if (__wakaru_Yrr_initialized) return;
__wakaru_Yrr_initialized = true;
"use strict";
Db(), ji(), rd(), i3(), bC(), Pki(), jki(), Rrr(), YY(), Lki(), jrr(), Lrr(), Dki(), Fki(), Oki(), zki(), Bki(), qIt = i((r)=>r === "hidden" || r === "clip", "isClippedOverflow"), i(Wrr, "globalViewportCanScroll"), i(Hrr, "getDialogLayoutHints"), i(Zrr, "resolveInset"), i(OIt, "calculateFullscreenTarget"), i(zIt, "getTransitionStyle"), i(Vrr, "isPlainPrimaryMouseEvent"), Xrr = [
    "[data-popup-open]",
    '[data-component="select-positioner"][data-open]',
    '[data-component="select-popup"][data-open]',
    '[data-component="menu-popup"][data-open]',
    '[role="listbox"][data-open]',
    '[role="menu"][data-open]'
].join(", "), i(BIt, "hasOpenLayeredPopup"), i(sNe, "dialogOwnerDocument"), i(Krr, "DialogRoot"), ad = Object.assign(Krr, {
    Header: s3,
    HeaderLead: Drr,
    Title: Grr,
    Description: Prr,
    List: Brr,
    ListHeader: qrr,
    ListRow: Urr,
    Content: o3,
    Footer: M4,
    Close: Mrr
});

}
