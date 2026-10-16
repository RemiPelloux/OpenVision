import { ar } from "./LYd.js";
import { qu } from "./attach.js";
import { dip, hip } from "./compact-file-tree-controller.js";
import { Yka } from "./file-tree-controller.js";
import { awa, l$t } from "./file-tree-entry-view.js";
import { o$t, okn, sBr } from "./file-tree-entry-view.types.js";
import { Ynp, b$S, eip, tip, y$S } from "./ipa.js";
import { f2, xg } from "./scroll-area.js";
import { E } from "./tslib.es6.js";
import { sip } from "./use-file-tree-toggle-animation.js";
import { useMemo as Iip } from "./react-runtime/react/esm-index-production.js";
import { jsx as Xkt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useId as _$S } from "./react-runtime/react/esm-index-production.js";
import { memo as f$S } from "./react-runtime/react/esm-index-production.js";
import { Fragment as g$S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useLayoutEffect as gBr } from "./react-runtime/react/esm-index-production.js";
import { useRef as lwa } from "./react-runtime/react/esm-index-production.js";
import { jsxs as m$S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as mBr } from "./react-runtime/react/esm-index-production.js";
import { useCallback as mGe } from "./react-runtime/react/esm-index-production.js";
import { useSyncExternalStore as v$S } from "./react-runtime/react/esm-index-production.js";
import { useEffect as xip } from "./react-runtime/react/esm-index-production.js";
var Aip, cwa, fBr, uwa, akn, vBr;
export { Aip, akn, cwa, fBr, uwa, vBr };
var __wakaru_S$S_initialized = false;
export function S$S() {
if (__wakaru_S$S_initialized) return;
__wakaru_S$S_initialized = true;
"use strict";
E(), Yka(), sip(), hip(), sBr(), awa(), qu(), f2(), Aip = {
    kJcbqH: "ui-16fucec",
    kn1fP1: "ui-3b2oae",
    $$css: !0
}, cwa = 12, fBr = "var(--ui-file-tree-sticky-fade, 12px)", uwa = {
    base: {
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kOIVth: "ui-gt1mqo",
        kaRX1h: "ui-hlp2gg",
        k7shQP: "ui-i5y0ii",
        $$css: !0
    },
    virtualized: {
        kZKoxP: "ui-5yr21d",
        kAzted: "ui-2lwn1j",
        kVAEAm: "ui-1n2onr6",
        kOIVth: "ui-xhr3t",
        $$css: !0
    }
}, akn = {
    spacerContainer: {
        kAzted: "ui-1us19tq",
        $$css: !0
    },
    spacer: {
        kVAEAm: "ui-1n2onr6",
        kAzted: "ui-1us19tq",
        $$css: !0
    },
    stickyContainer: {
        kVAEAm: "ui-10l6tqk",
        k87sOh: "ui-13vifvy",
        kbCHJM: "ui-7emjjn",
        kCIrl2: "ui-1se5ioe",
        kY2c9j: "ui-htitgo",
        kZKoxP: "ui-qtp20y",
        kfzvcC: "ui-47corl",
        $$css: !0
    },
    stickyRow: {
        kVAEAm: "ui-10l6tqk",
        kbCHJM: "ui-u96u03",
        kCIrl2: "ui-3m8u43",
        kfzvcC: "ui-67bb7w",
        $$css: !0
    },
    stickyOcclusionMask: (t)=>[
            Aip,
            {
                kX1K2I: t != null ? "ui-wjwp01" : t,
                kAExgp: t != null ? "ui-11jd449" : t,
                $$css: !0
            },
            {
                "--x-maskImage": t ?? void 0,
                "--x-WebkitMaskImage": t ?? void 0
            }
        ]
}, vBr = f$S(function({ files: e, tone: n = "default", stylexStyles: i, activeFilePath: r, maxHeight: s, onFileClick: o, getFileHref: a, onVisibleRowCountChange: l, onItemContextMenu: c, draggable: u, getDragData: d, onItemRefChange: h, indentStep: p, rowHeightPx: g = okn, fileIconVariant: f, collapseSingleChildDirectories: _ = !0, renderLeadingAccessory: b, renderTrailingAccessory: y, renderTrailingAction: S, isRowDisabled: k, pathLabelTooltip: C = "tooltip", stickyHeaders: T = !0, animateFolderToggles: I = !1 }) {
    const A = g + o$t, P = Iip(()=>new dip, []);
    mBr(()=>P.setFiles(e, {
            collapseSingleChildDirectories: _
        })), gBr(()=>{
        P.setFiles(e, {
            collapseSingleChildDirectories: _
        });
    }, [
        P,
        e,
        _
    ]);
    const M = mGe((Je)=>P.subscribe(Je), [
        P
    ]), O = v$S(M, ()=>P.getVisibleRows());
    gBr(()=>{
        l?.(P.getVisibleRows().length);
    }, [
        P,
        l,
        O.length,
        e,
        _
    ]);
    const N = _$S(), U = lwa(null), j = lwa(null), [$, H] = mBr(0), [G, q] = mBr(0), K = lwa({
        scrollTop: 0,
        viewportHeight: 0
    });
    gBr(()=>{
        K.current = {
            scrollTop: $,
            viewportHeight: G
        };
    }, [
        $,
        G
    ]);
    const [V, Y] = mBr({
        isAtTop: !0,
        isAtBottom: !0
    });
    gBr(()=>{
        const Je = U.current?.viewportElement;
        if (!Je) return;
        const Ge = ()=>{
            H(Je.scrollTop), q(Je.clientHeight);
        }, xe = ()=>{
            H(Je.scrollTop);
        };
        Ge(), Je.addEventListener("scroll", xe, {
            passive: !0
        });
        const Oe = new ResizeObserver(Ge);
        return Oe.observe(Je), ()=>{
            Je.removeEventListener("scroll", xe), Oe.disconnect();
        };
    }, []), xip(()=>{
        const Je = O.length * A, Ge = K.current;
        if (Ge.scrollTop <= Math.max(0, Je - Ge.viewportHeight)) return;
        const xe = U.current?.viewportElement;
        if (!xe) return;
        const Oe = Math.max(0, Math.max(Je, xe.scrollHeight) - xe.clientHeight);
        xe.scrollTop > Oe && (xe.scrollTop = Oe, H(Oe));
    }, [
        A,
        O.length
    ]);
    const { startIndex: J, endIndex: Q, totalHeight: te } = y$S({
        rowCount: O.length,
        scrollTop: $,
        viewportHeight: G > 0 ? G : A * 24,
        rowHeight: A,
        overscan: cwa
    }), { animation: ee, attachRun: re, attachSpacer: ie, onWillToggle: oe } = tip({
        enabled: I,
        rowPitch: A,
        visibleRows: O
    }), se = ee !== null && ee.runStartIndex >= J ? ee : null, le = se?.kind === "expand" ? Math.min(O.length, Q + se.runLength) : Q, ce = O.slice(J, le), ae = Iip(()=>T ? Ynp({
            visibleRows: O,
            scrollTop: $,
            viewportHeight: G,
            rowHeight: A,
            isExpanded: (Je)=>P.isOpen(Je)
        }) : [], [
        P,
        A,
        $,
        T,
        G,
        O
    ]), de = ae.length > 0 ? Math.max(...ae.map((Je)=>Je.top)) + A : 0, he = mGe((Je)=>{
        Y((Ge)=>Ge.isAtTop === Je.isAtTop && Ge.isAtBottom === Je.isAtBottom ? Ge : {
                isAtTop: Je.isAtTop,
                isAtBottom: Je.isAtBottom
            });
    }, []), ge = mGe((Je)=>{
        const Ge = U.current?.viewportElement;
        if (!Je || !Ge) return;
        const xe = ({ deltaY: Ae, deltaX: ot })=>{
            const Be = Ge.scrollHeight - Ge.clientHeight;
            if (Be <= 0 || Ae === 0) return !1;
            const Ue = Ge.scrollTop, it = Ue <= 0 && Ae < 0, qe = Ue >= Be - .5 && Ae > 0;
            return it || qe ? !1 : (Ge.scrollBy({
                top: Ae,
                left: ot
            }), !0);
        }, Oe = (Ae)=>{
            switch(Ae.deltaMode){
                case WheelEvent.DOM_DELTA_LINE:
                    return A;
                case WheelEvent.DOM_DELTA_PAGE:
                    return Ge.clientHeight;
                default:
                    return 1;
            }
        }, ct = (Ae)=>{
            const ot = Oe(Ae);
            xe({
                deltaY: Ae.deltaY * ot,
                deltaX: Ae.deltaX * ot
            }) && Ae.preventDefault();
        }, Ye = 8;
        let Ve = null, Xe = null, lt = !1;
        const He = (Ae)=>{
            Ve = Ae.touches[0]?.clientY ?? null, Xe = Ve, lt = !1;
        }, gt = (Ae)=>{
            const ot = Ae.touches[0]?.clientY;
            if (Ve === null || Xe === null || ot === void 0 || !lt && Math.abs(ot - Ve) < Ye) return;
            lt = !0;
            const Be = Xe - ot;
            Xe = ot, xe({
                deltaY: Be,
                deltaX: 0
            }) && Ae.preventDefault();
        }, ht = ()=>{
            Ve = null, Xe = null, lt = !1;
        };
        return Je.addEventListener("wheel", ct, {
            passive: !1
        }), Je.addEventListener("touchstart", He, {
            passive: !0
        }), Je.addEventListener("touchmove", gt, {
            passive: !1
        }), Je.addEventListener("touchend", ht, {
            passive: !0
        }), ()=>{
            Je.removeEventListener("wheel", ct), Je.removeEventListener("touchstart", He), Je.removeEventListener("touchmove", gt), Je.removeEventListener("touchend", ht);
        };
    }, [
        A
    ]), pe = mGe((Je)=>{
        const Ge = U.current?.viewportElement;
        if (!Ge) return;
        const xe = Je * A, Oe = xe + A;
        xe < Ge.scrollTop ? Ge.scrollTop = xe : Oe > Ge.scrollTop + Ge.clientHeight && (Ge.scrollTop = Oe - Ge.clientHeight), H(Ge.scrollTop);
    }, [
        A
    ]), ve = mGe((Je)=>{
        if (P.focusPath(Je)) {
            j.current = null;
            return;
        }
        j.current = Je, requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                const Ge = j.current;
                Ge === Je && (P.focusPath(Ge), j.current = null);
            });
        });
    }, [
        P
    ]);
    xip(()=>{
        const Je = j.current;
        Je && (O.some((Ge)=>Ge.node.path === Je) || (j.current = null));
    }, [
        O
    ]);
    const fe = mGe((Je, Ge)=>{
        h?.(Je, Ge), Ge ? (P.register(Je, Ge), j.current === Je && P.focusPath(Je) && (j.current = null)) : P.unregister(Je);
    }, [
        P,
        h
    ]), Te = mGe((Je)=>{
        const Ge = P.getAdjacentVisiblePath(Je, 1);
        Ge && (pe(Ge.index), ve(Ge.path));
    }, [
        P,
        ve,
        pe
    ]), _e = mGe((Je)=>{
        const Ge = P.getAdjacentVisiblePath(Je, -1);
        Ge && (pe(Ge.index), ve(Ge.path));
    }, [
        P,
        ve,
        pe
    ]), Ce = mGe((Je)=>{
        oe(Je), P.toggleOpen(Je);
    }, [
        P,
        oe
    ]), Se = mGe((Je, Ge, xe)=>{
        Ge ? (oe(Je), P.toggleOpen(Je)) : o?.(Je, xe);
    }, [
        P,
        o,
        oe
    ]), Pe = (Je, Ge)=>{
        const { node: xe, depth: Oe } = Je, ct = !!xe.children, Ye = ct ? P.isOpen(xe.path) : !1, Ve = k?.(xe.path, ct) ?? !1, Xe = d?.(xe.path, ct), lt = {
            node: xe,
            depth: Oe,
            isDirectory: ct,
            isOpen: Ye
        };
        return Xkt(l$t, {
            node: xe,
            tone: n,
            status: xe.status,
            ignored: xe.ignored,
            depth: Oe,
            indentStep: p,
            rowHeightPx: g,
            fileIconVariant: f,
            fileHref: ct ? void 0 : a?.(xe.path),
            leadingAccessory: b?.(lt),
            trailingAccessory: y?.(lt),
            trailingAction: S?.(lt),
            disabled: Ve,
            isActive: r === xe.path,
            isOpen: Ye,
            onRowClick: Se,
            onToggle: ct ? Ce : void 0,
            onContextMenu: c,
            draggable: !Ve && Ge?.register !== !1 && !!u && (d === void 0 || Xe !== void 0),
            dragData: Xe,
            treeId: N,
            onFocusNext: Te,
            onFocusPrev: _e,
            onRegister: Ge?.register === !1 ? void 0 : fe,
            pathLabelTooltip: C
        }, Ge?.keyPrefix ? `${Ge.keyPrefix}-${xe.path}` : xe.path);
    }, we = ar({
        rootClass: "ui-compact-file-tree",
        stylexStyles: [
            uwa.base,
            uwa.virtualized,
            i?.root
        ]
    }), Ie = ar({
        rootClass: "ui-compact-file-tree__virtual-spacer-container",
        stylexStyles: [
            akn.spacerContainer,
            i?.spacerContainer
        ]
    }), Me = ar({
        rootClass: "ui-compact-file-tree__virtual-spacer",
        stylexStyles: akn.spacer,
        style: {
            height: te
        }
    }), De = {
        className: "ui-10l6tqk ui-u96u03 ui-3m8u43 ui-13vifvy ui-78zum5 ui-dt5ytf ui-gt1mqo ui-hlp2gg ui-i5y0ii"
    }, Ne = ar({
        rootClass: "ui-compact-file-tree__sticky-container",
        stylexStyles: [
            akn.stickyContainer,
            i?.stickyContainer
        ]
    }), be = ar({
        rootClass: "ui-compact-file-tree__sticky-row",
        stylexStyles: akn.stickyRow
    }), je = ar({
        rootClass: "ui-compact-file-tree__toggle-run",
        stylexStyles: eip()
    }), $e = ()=>{
        if (!se) return null;
        const Je = se.runStartIndex, Ge = Math.min(Je, le), xe = se.kind === "collapse", Oe = Math.ceil(($ + (G > 0 ? G : A * 24)) / A) + cwa, ct = xe ? se.exitRows.slice(0, Math.max(0, Oe - Je)) : O.slice(Ge, Math.min(Je + se.runLength, le)), Ye = xe ? O.slice(Ge, le) : O.slice(Math.min(Je + se.runLength, le), le);
        return m$S(g$S, {
            children: [
                O.slice(J, Ge).map((Ve)=>Pe(Ve)),
                Xkt("div", {
                    ref: re,
                    "aria-hidden": xe || void 0,
                    className: je.className,
                    style: je.style,
                    children: ct.map((Ve)=>Pe(Ve, xe ? {
                            keyPrefix: "exit-row",
                            register: !1
                        } : void 0))
                }),
                Ye.map((Ve)=>Pe(Ve))
            ]
        });
    };
    return Xkt(xg, {
        className: we.className,
        contentStyle: i?.scrollContent,
        "data-tone": n === "default" ? void 0 : n,
        height: s !== void 0 ? "auto" : "100%",
        maxHeight: s,
        allowScrollChaining: s === "none",
        overlay: ae.length > 0 ? Xkt("div", {
            ref: ge,
            className: Ne.className,
            style: Ne.style,
            children: ae.map((Je, Ge)=>{
                const xe = Math.max(0, Ge * A - Je.top), Oe = xe > 0 ? `linear-gradient(to bottom, transparent ${xe}px, black ${xe + 8}px)` : void 0;
                return Xkt("div", {
                    className: be.className,
                    style: {
                        ...be.style,
                        top: Je.top,
                        height: A,
                        clipPath: xe > 0 ? `inset(${xe}px 0 0 0)` : void 0,
                        maskImage: Oe,
                        WebkitMaskImage: Oe
                    },
                    children: Pe(Je.row, {
                        keyPrefix: "sticky-row",
                        register: !1
                    })
                }, `sticky-${Je.row.node.path}`);
            })
        }) : void 0,
        ref: U,
        style: we.style,
        onScrollStateChange: he,
        viewportStyle: [
            de > 0 || !V.isAtTop && $ > 5 || !V.isAtBottom ? akn.stickyOcclusionMask(b$S({
                stackBottom: de,
                topFade: !V.isAtTop && $ > 5,
                bottomFade: !V.isAtBottom
            })) : null,
            i?.scrollViewport
        ],
        children: Xkt("div", {
            className: Ie.className,
            style: Ie.style,
            children: Xkt("div", {
                ref: ie,
                className: Me.className,
                style: Me.style,
                children: Xkt("div", {
                    className: De.className,
                    role: "tree",
                    onMouseLeave: ()=>{
                        const Je = document.activeElement;
                        Je instanceof HTMLElement && Je.classList.contains("ui-file-tree-entry") && Je.blur();
                    },
                    style: {
                        ...De.style,
                        transform: `translateY(${J * A}px)`
                    },
                    children: se ? $e() : ce.map((Je)=>Pe(Je))
                })
            })
        })
    });
});

}
