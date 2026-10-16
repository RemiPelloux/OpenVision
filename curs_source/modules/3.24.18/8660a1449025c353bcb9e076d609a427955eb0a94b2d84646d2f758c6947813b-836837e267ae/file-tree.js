import { ar, ri } from "./LYd.js";
import { Rkt, Yg } from "./Progress_2.js";
import { qu } from "./attach.js";
import { mf } from "./cn.js";
import { Yka, iBr } from "./file-tree-controller.js";
import { ufi } from "./file-tree-dom.js";
import { awa, l$t } from "./file-tree-entry-view.js";
import { o$t, okn, sBr } from "./file-tree-entry-view.types.js";
import { hBr } from "./file-tree-row-dnd.js";
import { Jwa, Qwa, Ynp, _qS, bqS, eip, fqS, gqS, hqS, iwa, mqS, pip, pqS, sqS, tip, vqS, yqS } from "./ipa.js";
import { WRe } from "./platform_3.js";
import { f2, xg } from "./scroll-area.js";
import { E } from "./tslib.es6.js";
import { oqS } from "./use-file-tree-drag-and-drop.js";
import { sip } from "./use-file-tree-toggle-animation.js";
import { useState as $Br } from "./react-runtime/react/esm-index-production.js";
import { useCallback as K_e } from "./react-runtime/react/esm-index-production.js";
import { jsx as V_e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useRef as _$t } from "./react-runtime/react/esm-index-production.js";
import { jsxs as aqS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useId as cqS } from "./react-runtime/react/esm-index-production.js";
import { useMemo as dqS } from "./react-runtime/react/esm-index-production.js";
import { useEffect as ewt } from "./react-runtime/react/esm-index-production.js";
import { memo as lqS } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as uqS } from "./react-runtime/react/esm-index-production.js";
import { useSyncExternalStore as vsp } from "./react-runtime/react/esm-index-production.js";
var _sp, e0a, HBr, b$t, WBr, t0a, GBr;
export { GBr, HBr, WBr, _sp, b$t, e0a, t0a };
var __wakaru_SqS_initialized = false;
export function SqS() {
if (__wakaru_SqS_initialized) return;
__wakaru_SqS_initialized = true;
"use strict";
E(), mf(), WRe(), Yka(), oqS(), sip(), sBr(), qu(), Rkt(), hBr(), awa(), f2(), ufi(), _sp = {
    kJcbqH: "ui-16fucec",
    kn1fP1: "ui-3b2oae",
    $$css: !0
}, e0a = {
    base: {
        kZKoxP: "ui-5yr21d",
        kAzted: "ui-2lwn1j",
        $$css: !0
    },
    virtualized: {
        kZKoxP: "ui-5yr21d",
        kVAEAm: "ui-1n2onr6",
        kOIVth: "ui-xhr3t",
        $$css: !0
    }
}, HBr = "var(--ui-file-tree-sticky-fade, 12px)", b$t = {
    spacerContainer: {
        kAzted: "ui-1us19tq",
        $$css: !0
    },
    spacer: {
        kVAEAm: "ui-1n2onr6",
        kAzted: "ui-1us19tq",
        $$css: !0
    },
    window: {
        kVAEAm: "ui-10l6tqk",
        kbCHJM: "ui-u96u03",
        kCIrl2: "ui-3m8u43",
        k87sOh: "ui-13vifvy",
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kOIVth: "ui-gt1mqo",
        kaRX1h: "ui-hlp2gg",
        k7shQP: "ui-i5y0ii",
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
            _sp,
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
}, WBr = {
    loadingOverlay: {
        kVAEAm: "ui-10l6tqk",
        k87sOh: "ui-13vifvy",
        kCIrl2: "ui-3m8u43",
        krVfgx: "ui-1ey2m1c",
        kbCHJM: "ui-u96u03",
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kB7OPa: "ui-9f619",
        kLKAdn: "ui-1t8xvyj",
        kGO01o: "ui-20eq2h",
        kfzvcC: "ui-67bb7w",
        kWkggS: "ui-1ua6jya",
        kMwMTN: "ui-19aaqeu",
        $$css: !0
    },
    loadingPlaceholder: {
        kB7OPa: "ui-9f619",
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kzqmXN: "ui-h8yej3",
        kZKoxP: "ui-5yr21d",
        kAzted: "ui-65sdv",
        kLKAdn: "ui-1t8xvyj",
        kGO01o: "ui-20eq2h",
        kMwMTN: "ui-19aaqeu",
        $$css: !0
    },
    empty: {
        kLKAdn: "ui-13ly8rp",
        kpe85a: "ui-1jkygx",
        kGO01o: "ui-1xlntvz",
        kE3dHu: "ui-1o7kk3e",
        kMwMTN: "ui-19aaqeu",
        kGuDYH: "ui-1wm8ruf",
        $$css: !0
    }
}, t0a = 12, GBr = lqS(function({ controller: e, resolver: n, tone: i = "default", stylexStyles: r, indentVariant: s = "default", indentStep: o, rowHeightPx: a = okn, sortMode: l = "alphabetical", compactFolders: c = !1, stickyHeaders: u = !0, animateFolderToggles: d = !1, showIcons: h = !0, folderIconVariant: p, renderTrailingAction: g, fileIconVariant: f, pathSeparator: _, altClickTogglesDirectorySiblings: b = !1, onPrimaryAction: y, onFileClick: S, onFileDoubleClick: k, onSelectionChange: C, onItemContextMenu: T, onFocusedItemChange: I, selectable: A, draggable: P, canDragItem: M, onMoveItem: O, acceptExternalDrops: N = !1, onExternalDrop: U, canDropToRoot: j = !0, className: $, expandedPath: H, activeFilePath: G, isFileActive: q, contextMenuTargetPath: K, focusActiveFileOnReveal: V = !0, activeFileRevealOffsetRows: Y, revealRequestId: J }) {
    const Q = _$t(null), te = _$t(null);
    e ? te.current = e : (Q.current || (Q.current = new iBr({
        resolver: n,
        sortMode: l,
        compactFolders: c
    })), te.current = Q.current);
    const ee = te.current, re = a + o$t;
    ewt(()=>{
        e || ee.setResolver(n);
    }, [
        ee,
        n,
        e
    ]), ewt(()=>{
        e || ee.setSortMode(l);
    }, [
        ee,
        l,
        e
    ]), ewt(()=>{
        e || ee.setCompactFolders(c);
    }, [
        ee,
        c,
        e
    ]), ewt(()=>{
        e || ee.loadRoots();
    }, [
        ee,
        e
    ]);
    const ie = K_e((Qn)=>ee.subscribe(Qn), [
        ee
    ]);
    vsp(ie, ()=>ee.version);
    const oe = ee.selection, se = K_e((Qn)=>oe.subscribe(Qn), [
        oe
    ]), le = vsp(se, ()=>oe.version), ce = _$t(C);
    ce.current = C;
    const ae = _$t(le);
    ewt(()=>{
        ae.current !== le && (ae.current = le, ce.current?.([
            ...oe.selectedPaths
        ]));
    }, [
        le,
        oe
    ]);
    const de = ee.roots, he = ee.isRootsLoading, ge = ee.isPathPreloading, pe = ee.getVisibleRows(), ve = pe.length, [fe, Te] = $Br(!1);
    ewt(()=>{
        ee.setActiveFilePath(G);
    }, [
        ee,
        G
    ]);
    const _e = cqS(), Ce = _$t(null), [Se, Pe] = $Br(0), [we, Ie] = $Br(0);
    uqS(()=>{
        if (!de) return;
        const Qn = Ce.current?.viewportElement;
        if (!Qn) return;
        const ni = ()=>{
            Pe(Qn.scrollTop), Ie(Qn.clientHeight);
        }, pn = ()=>{
            const Ln = Qn.scrollTop;
            ee.rememberScrollTop(Ln), Pe(Ln);
        };
        ni(), Qn.addEventListener("scroll", pn, {
            passive: !0
        });
        const yn = new ResizeObserver(ni);
        return yn.observe(Qn), ()=>{
            Qn.removeEventListener("scroll", pn), yn?.disconnect();
        };
    }, [
        ee,
        de
    ]), ewt(()=>{
        const Qn = Ce.current?.viewportElement;
        if (!Qn || ve === 0 || we <= 0) return;
        const ni = ee.getRememberedScrollTop();
        if (ni === void 0) return;
        const pn = Math.max(0, Qn.scrollHeight - Qn.clientHeight), yn = Math.min(pn, Math.max(0, ni));
        Qn.scrollTop !== yn && (Qn.scrollTop = yn, Pe(yn));
    }, [
        ee,
        we,
        ve
    ]);
    const Me = ee.getVirtualWindow({
        rowCount: pe.length,
        scrollTop: Se,
        viewportHeight: we > 0 ? we : re * 24,
        rowHeight: re,
        overscan: t0a
    }), { startIndex: De, endIndex: Ne, totalHeight: be } = Me, { animation: je, attachRun: $e, attachSpacer: Je, onWillToggle: Ge } = tip({
        enabled: d,
        rowPitch: re,
        visibleRows: pe
    }), xe = je !== null && je.runStartIndex >= De ? je : null, Oe = xe?.kind === "expand" ? Math.min(pe.length, Ne + xe.runLength) : Ne, ct = pe.slice(De, Oe), Ye = dqS(()=>u ? Ynp({
            visibleRows: pe,
            scrollTop: Se,
            viewportHeight: we,
            rowHeight: re,
            isExpanded: (Qn)=>ee.isExpanded(Qn)
        }) : [], [
        ee,
        re,
        Se,
        u,
        we,
        pe
    ]), Ve = Ye.length > 0 ? Math.max(...Ye.map((Qn)=>Qn.top)) + re : 0, [Xe, lt] = $Br({
        isAtTop: !0,
        isAtBottom: !0
    }), He = K_e((Qn)=>{
        lt((ni)=>ni.isAtTop === Qn.isAtTop && ni.isAtBottom === Qn.isAtBottom ? ni : {
                isAtTop: Qn.isAtTop,
                isAtBottom: Qn.isAtBottom
            });
    }, []), gt = K_e((Qn)=>{
        const ni = Ce.current?.viewportElement;
        if (!Qn || !ni) return;
        const pn = ({ deltaY: ci, deltaX: Pi })=>{
            const vi = ni.scrollHeight - ni.clientHeight;
            if (vi <= 0 || ci === 0) return !1;
            const Yi = ni.scrollTop, Bn = Yi <= 0 && ci < 0, Tn = Yi >= vi - .5 && ci > 0;
            return Bn || Tn ? !1 : (ni.scrollBy({
                top: ci,
                left: Pi
            }), !0);
        }, yn = (ci)=>{
            switch(ci.deltaMode){
                case WheelEvent.DOM_DELTA_LINE:
                    return re;
                case WheelEvent.DOM_DELTA_PAGE:
                    return ni.clientHeight;
                default:
                    return 1;
            }
        }, Ln = (ci)=>{
            const Pi = yn(ci);
            pn({
                deltaY: ci.deltaY * Pi,
                deltaX: ci.deltaX * Pi
            }) && ci.preventDefault();
        }, xi = 8;
        let Ci = null, En = null, Dn = !1;
        const Si = (ci)=>{
            Ci = ci.touches[0]?.clientY ?? null, En = Ci, Dn = !1;
        }, Ui = (ci)=>{
            const Pi = ci.touches[0]?.clientY;
            if (Ci === null || En === null || Pi === void 0 || !Dn && Math.abs(Pi - Ci) < xi) return;
            Dn = !0;
            const vi = En - Pi;
            En = Pi, pn({
                deltaY: vi,
                deltaX: 0
            }) && ci.preventDefault();
        }, Nn = ()=>{
            Ci = null, En = null, Dn = !1;
        };
        return Qn.addEventListener("wheel", Ln, {
            passive: !1
        }), Qn.addEventListener("touchstart", Si, {
            passive: !0
        }), Qn.addEventListener("touchmove", Ui, {
            passive: !1
        }), Qn.addEventListener("touchend", Nn, {
            passive: !0
        }), ()=>{
            Qn.removeEventListener("wheel", Ln), Qn.removeEventListener("touchstart", Si), Qn.removeEventListener("touchmove", Ui), Qn.removeEventListener("touchend", Nn);
        };
    }, [
        re
    ]), ht = !de && (he || ge) || fe;
    ewt(()=>{
        if (!H) return;
        let Qn = !1;
        const ni = !!G && V;
        return (async ()=>{
            ni && Te(!0);
            try {
                if (await ee.preloadPath(H), Qn || !G) return;
                const yn = Ce.current?.viewportElement;
                if (!yn || yn.clientHeight <= 0 || yn.scrollHeight <= 0) return;
                const Ln = ee.getPreferredScrollTop({
                    activeFilePath: G,
                    preferActiveFile: !0,
                    currentScrollTop: yn.scrollTop,
                    rowPitch: re,
                    viewportHeight: yn.clientHeight,
                    scrollHeight: yn.scrollHeight,
                    revealOffsetRows: Y
                });
                if (Ln !== void 0 && yn.scrollTop !== Ln && (yn.scrollTop = Ln, ee.rememberScrollTop(Ln), Pe(Ln)), V) {
                    if (ee.focusPath(G, {
                        preventScroll: !0
                    }) || (await new Promise((Ci)=>requestAnimationFrame(()=>Ci())), Qn)) return;
                    ee.focusPath(G, {
                        preventScroll: !0
                    });
                }
            } catch  {} finally{
                !Qn && ni && Te(!1);
            }
        })(), ()=>{
            Qn = !0, Te(!1);
        };
    }, [
        G,
        H,
        ee,
        V,
        Y,
        J,
        re
    ]);
    const Ae = K_e((Qn, ni)=>{
        ni ? ee.register(Qn, ni) : ee.unregister(Qn);
    }, [
        ee
    ]), ot = _$t([]);
    ot.current = pe.map((Qn)=>Qn.node.path);
    const Be = _$t([]);
    Be.current = pe;
    const Ue = K_e((Qn, ni, pn)=>{
        const yn = ot.current, Ln = yn.indexOf(Qn);
        if (Ln < 0) return;
        const xi = Ln + ni;
        if (xi < 0 || xi >= yn.length) return;
        const Ci = yn[xi];
        if (ee.focusPath(Ci), !!A) {
            if (pn?.extendSelection) {
                oe.rangeTo(Ci, yn);
                return;
            }
            if (pn?.preserveSelection) {
                oe.setAnchor(Ci);
                return;
            }
            oe.select(Ci);
        }
    }, [
        ee,
        A,
        oe
    ]), it = K_e((Qn, ni)=>Ue(Qn, 1, ni), [
        Ue
    ]), qe = K_e((Qn, ni)=>Ue(Qn, -1, ni), [
        Ue
    ]), pt = K_e((Qn)=>{
        const ni = Be.current, pn = ni.findIndex((Ln)=>Ln.node.path === Qn);
        if (pn < 0) return;
        const yn = ni[pn].depth;
        for(let Ln = pn - 1; Ln >= 0; Ln--)if (ni[Ln].depth < yn) {
            const xi = ni[Ln].node.path;
            ee.focusPath(xi), A && oe.select(xi);
            return;
        }
    }, [
        ee,
        A,
        oe
    ]), dt = K_e((Qn)=>{
        const ni = Be.current, pn = ni.findIndex((Ln)=>Ln.node.path === Qn);
        if (pn < 0) return;
        const yn = ni[pn + 1];
        !yn || yn.depth !== ni[pn].depth + 1 || (ee.focusPath(yn.node.path), A && oe.select(yn.node.path));
    }, [
        ee,
        A,
        oe
    ]), ft = K_e((Qn, ni, pn)=>{
        if (A) {
            if (pn && yqS(pn)) {
                oe.toggle(Qn);
                return;
            }
            if (pn?.shiftKey) {
                oe.rangeTo(Qn, ot.current);
                return;
            }
            oe.select(Qn);
        }
        if (ni && b && pn?.altKey) {
            ee.toggleDirectorySiblings(Qn);
            return;
        }
        ni && (Ge(Qn), ee.toggle(Qn));
        const yn = !pn || !pn.metaKey && !pn.ctrlKey && !pn.shiftKey && !pn.altKey;
        !ni && S && S(Qn, pn), yn && y?.(Qn, ni);
    }, [
        A,
        oe,
        b,
        ee,
        S,
        y,
        Ge
    ]), bt = K_e((Qn)=>{
        Ge(Qn), ee.toggle(Qn);
    }, [
        ee,
        Ge
    ]), St = K_e((Qn)=>{
        A && (oe.toggle(Qn), ee.focusPath(Qn, {
            preventScroll: !0
        }));
    }, [
        ee,
        A,
        oe
    ]), Et = K_e((Qn)=>{
        if (Qn.key !== "Escape" || Qn.defaultPrevented || !A || oe.selectedPaths.size === 0) return;
        const ni = Qn.target, pn = Qn.currentTarget.ownerDocument.defaultView;
        pn !== null && (ni instanceof pn.HTMLInputElement || ni instanceof pn.HTMLTextAreaElement || ni instanceof pn.HTMLSelectElement || ni instanceof pn.HTMLElement && ni.isContentEditable) || (oe.clear(), Qn.preventDefault(), Qn.stopPropagation());
    }, [
        A,
        oe
    ]), { dropTargetDir: kt, surfaceDropRef: xt, isValidSurfaceDropTarget: Pt, onRowDragStart: Dt, onRowDragEnd: Vt, onRowDragOverChange: tn, onRowDropTargetChange: un, onRowExternalDrop: kn } = sqS({
        controller: ee,
        selectionModel: oe,
        selectable: A,
        acceptExternalDrops: N,
        canDropToRoot: j,
        onMoveItem: O,
        onExternalDrop: U
    });
    if (!de && (he || ge)) {
        const Qn = ar({
            rootClass: "ui-file-tree",
            stylexStyles: [
                Jwa({
                    virtualized: !1
                }),
                r?.root
            ],
            className: $
        }), ni = ar({
            rootClass: "ui-file-tree__loading",
            stylexStyles: [
                _qS(),
                r?.loading
            ]
        });
        return V_e("div", {
            ref: xt,
            className: Qn.className,
            "data-drop-target": Pt || void 0,
            "data-tone": i === "default" ? void 0 : i,
            style: Qn.style,
            children: V_e("div", {
                className: ni.className,
                style: ni.style,
                "aria-hidden": !0,
                children: V_e(Yg, {
                    indeterminate: !0,
                    variant: "ring"
                })
            })
        });
    }
    if (de && de.length === 0) {
        const Qn = ar({
            rootClass: "ui-file-tree",
            stylexStyles: [
                Jwa({
                    virtualized: !1
                }),
                r?.root
            ],
            className: $
        }), ni = ar({
            rootClass: "ui-file-tree__empty",
            stylexStyles: [
                bqS(),
                r?.empty
            ]
        });
        return V_e("div", {
            ref: xt,
            className: Qn.className,
            "data-drop-target": Pt || void 0,
            "data-tone": i === "default" ? void 0 : i,
            style: Qn.style,
            children: V_e("div", {
                className: ni.className,
                style: ni.style,
                children: "No files"
            })
        });
    }
    const oi = ri("ui-file-tree", "ui-file-tree--virtualized", $), Fn = ar({
        rootClass: "ui-file-tree__virtual-spacer-container",
        stylexStyles: [
            hqS(),
            r?.spacerContainer
        ]
    }), Qt = ar({
        rootClass: "ui-file-tree__virtual-spacer",
        stylexStyles: pqS(),
        style: {
            height: be
        }
    }), Sn = ar({
        rootClass: "ui-file-tree__virtual-window",
        stylexStyles: mqS(),
        style: {
            transform: `translateY(${De * re}px)`
        }
    }), $n = ar({
        rootClass: "ui-file-tree__loading-overlay",
        stylexStyles: [
            vqS(),
            r?.loading
        ]
    }), Mn = ar({
        rootClass: "ui-file-tree__sticky-container",
        stylexStyles: [
            gqS(),
            r?.stickyContainer
        ]
    }), Un = ar({
        rootClass: "ui-file-tree__sticky-row",
        stylexStyles: fqS()
    }), Xn = (Qn, ni)=>{
        const { node: pn, depth: yn } = Qn, Ln = !!pn.children, xi = Ln ? ee.isExpanded(pn.path) : !1, Ci = Ln ? ee.isLoading(pn.path) : !1, En = G === pn.path || q?.(pn.path) === !0, Dn = K === pn.path, Si = ni?.register !== !1 && !!P && (M?.(pn.path, Ln) ?? !0), Ui = kt != null && (pn.path === kt || (Ln ? iwa(pn.path, pn.segments) : void 0)?.includes(kt)) ? kt : null;
        return V_e(l$t, {
            node: pn,
            tone: i,
            status: pn.status,
            ignored: pn.ignored,
            depth: yn,
            isActive: En,
            isContextMenuTarget: Dn,
            indentVariant: s,
            indentStep: o,
            rowHeightPx: a,
            showIcons: h,
            folderIconVariant: p,
            renderTrailingAction: g,
            fileIconVariant: f,
            pathSeparator: _,
            isOpen: xi,
            isLoading: Ci,
            isSelected: oe.selectedPaths.has(pn.path),
            selectable: A,
            selectionCount: oe.selectedPaths.size,
            onRowClick: ft,
            onToggle: Ln ? bt : void 0,
            onFileDoubleClick: k,
            onContextMenu: T,
            draggable: Si,
            onMoveItem: O,
            acceptExternalDrops: N,
            onExternalDrop: kn,
            dropTargetDir: Ui,
            onRowDropTargetChange: un,
            onRowDragOverChange: tn,
            onRowDragStart: Dt,
            onRowDragEnd: Vt,
            treeId: _e,
            onFocusNext: it,
            onFocusPrev: qe,
            onFocusParent: pt,
            onFocusFirstChild: dt,
            onToggleSelection: St,
            onRegister: ni?.register === !1 ? void 0 : Ae,
            onFocusedItemChange: I
        }, `${ni?.keyPrefix ?? "row"}-${pn.path}`);
    }, Ti = ar({
        rootClass: "ui-file-tree__toggle-run",
        stylexStyles: eip()
    }), bi = ()=>{
        if (!xe) return null;
        const Qn = xe.runStartIndex, ni = Math.min(Qn, Oe), pn = xe.kind === "collapse", yn = Math.ceil((Se + (we > 0 ? we : re * 24)) / re) + t0a, Ln = pn ? xe.exitRows.slice(0, Math.max(0, yn - Qn)) : pe.slice(ni, Math.min(Qn + xe.runLength, Oe)), xi = pn ? pe.slice(ni, Oe) : pe.slice(Math.min(Qn + xe.runLength, Oe), Oe);
        return [
            ...pe.slice(De, ni).map((Ci)=>Xn(Ci)),
            V_e("div", {
                ref: $e,
                "aria-hidden": pn || void 0,
                className: Ti.className,
                style: Ti.style,
                children: Ln.map((Ci)=>Xn(Ci, pn ? {
                        keyPrefix: "exit-row",
                        register: !1
                    } : void 0))
            }, "__toggle-run__"),
            ...xi.map((Ci)=>Xn(Ci))
        ];
    };
    return aqS(xg, {
        className: oi,
        contentStyle: r?.scrollContent,
        "data-tone": i === "default" ? void 0 : i,
        height: "100%",
        overlay: Ye.length > 0 ? V_e("div", {
            ref: gt,
            className: Mn.className,
            style: Mn.style,
            children: Ye.map((Qn, ni)=>{
                const pn = Math.max(0, ni * re - Qn.top), yn = pn > 0 ? `linear-gradient(to bottom, transparent ${pn}px, black ${pn + 8}px)` : void 0;
                return V_e("div", {
                    className: Un.className,
                    style: {
                        ...Un.style,
                        top: Qn.top,
                        height: re,
                        clipPath: pn > 0 ? `inset(${pn}px 0 0 0)` : void 0,
                        maskImage: yn,
                        WebkitMaskImage: yn
                    },
                    children: Xn(Qn.row, {
                        keyPrefix: "sticky-row",
                        register: !1
                    })
                }, `sticky-${Qn.row.node.path}`);
            })
        }) : void 0,
        ref: Ce,
        onScrollStateChange: He,
        rootStyle: [
            Jwa({
                virtualized: !0
            }),
            r?.root
        ],
        viewportStyle: [
            Ve > 0 || !Xe.isAtTop && Se > 5 || !Xe.isAtBottom ? b$t.stickyOcclusionMask(Qwa({
                stackBottom: Ve,
                topFade: !Xe.isAtTop && Se > 5,
                bottomFade: !Xe.isAtBottom
            })) : null,
            r?.scrollViewport
        ],
        children: [
            V_e("div", {
                ref: xt,
                className: Fn.className,
                "data-drop-target": Pt || void 0,
                style: Fn.style,
                children: V_e("div", {
                    ref: Je,
                    className: Qt.className,
                    style: Qt.style,
                    children: V_e("div", {
                        className: Sn.className,
                        role: "tree",
                        "aria-multiselectable": A || void 0,
                        onKeyDown: Et,
                        onMouseLeave: (Qn)=>{
                            const ni = Qn.currentTarget.ownerDocument.activeElement;
                            pip(ni) && ni.blur();
                        },
                        style: Sn.style,
                        children: xe ? bi() : ct.map((Qn)=>Xn(Qn))
                    })
                })
            }),
            ht && V_e("div", {
                className: $n.className,
                style: $n.style,
                "aria-hidden": !0,
                children: V_e(Yg, {
                    indeterminate: !0,
                    variant: "ring"
                })
            })
        ]
    });
});

}
