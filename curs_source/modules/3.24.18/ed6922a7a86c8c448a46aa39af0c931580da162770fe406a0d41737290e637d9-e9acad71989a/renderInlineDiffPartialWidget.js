import { $i, Me, Pl, ZJe, aWt, fs, oa, yt } from "./A3u.js";
import { Df, Rg, so } from "./ECo.js";
import { lnr, mTe } from "./aiConfigHelper.js";
import { Pe, _i } from "./codicons.js";
import { RAe, So, mmn } from "./constants_8.js";
import { wl } from "./hoverWidget.js";
import { HAo, eFh, gL, tFh } from "./iconButton_2.js";
import { FGi } from "./inlineDiffDecorationUtils.js";
import { G8e, inr, rnr } from "./inlineDiffTypes.js";
import { anr } from "./inlineDiffWidget.css";
import { c_ } from "./jotaiSolidBridge.js";
import { gt, li } from "./network.js";
import { Yn, ya } from "./position.js";
import { An, Jt, Kc, Oe, Rn, Sv, Ut, lr, pe, qn, sa, wt } from "./qIc.js";
import { Jy } from "./renderCursorBlamePane.js";
import { Ww } from "./solid_2.js";
import { Ft } from "./themables.js";
import { Ef, x0 } from "./theme.js";
import { x } from "./tslib.es6.js";
import { iB, pte } from "./useComposerHoverTooltip.js";
import { ir } from "./useKeyboardShortcut.js";
import { $Ao } from "./useLargeHoverTooltip.js";
import { h0t } from "./useMeasureWidthHeight.js";
import { $e, Lr } from "./web.js";
function ha(e, t) {
    const [n, i] = Ut(e.get(t));
    return An(e.sub(t, ()=>i(()=>e.get(t)))), n;
}
function il_(e, t) {
    return e.userRemoteValue ?? e.userLocalValue ?? e.applicationValue ?? e.defaultValue ?? t;
}
function Bqt(e, t, n) {
    const i = e.inspect(t);
    return il_(i, n);
}
async function cnr(e, t, n) {
    await e.updateValue(t, n, 2);
}
function pTe(e, t, n, i = "default") {
    const r = ()=>i === "user" ? Bqt(t, e, n) : t.getValue(e), s = Rg();
    s.set(lnr, ()=>r() ?? n);
    const o = ha(s, lnr), a = (l)=>{
        s.set(lnr, l);
    };
    return Jt(()=>{
        a(()=>r());
        const l = t.onDidChangeConfiguration((u)=>{
            u.affectsConfiguration(e) && a(()=>r());
        });
        An(()=>{
            l.dispose();
        });
    }), [
        o,
        (l)=>{
            i === "user" ? cnr(t, e, l) : t.updateValue(e, l);
        }
    ];
}
function unt(e, t) {
    const { showHover: n, hideHover: i, hoverWidget: r } = iB({
        delay: e?.delay ?? 0,
        shouldSkipCleanup: e?.shouldSkipCleanup
    }), s = ir(), o = Rg(), a = ha(o, $Ao), c = (v)=>{
        o.set($Ao, v);
    };
    let l = [];
    const u = ()=>{
        for (const v of l)v.dispose();
        l.length = 0;
    }, h = (v, b, y = wl.LEFT, T, E)=>{
        c(T);
        const A = document.createElement("div");
        A.style.width = "fit-content", l.push(Jy(b, A, s.instantiationService));
        const R = v instanceof HTMLElement ? v : v.currentTarget;
        if (!R) return;
        const D = R.closest(".mentions-menu") ?? void 0, { additionalClasses: P, ...N } = e ?? {};
        n({
            target: R,
            appearance: {
                compact: !0,
                showPointer: !0,
                skipFadeInAnimation: !0,
                ...t
            },
            content: A,
            position: {
                hoverPosition: y
            },
            container: D ?? N.container,
            persistence: {
                hideOnHover: !1,
                ...N.persistence
            },
            additionalClasses: [
                "composer-thinking-hover-tooltip",
                ...P || []
            ],
            ...N
        }, E);
    }, p = (v, b, y = wl.LEFT, T, E)=>{
        c(T);
        const A = document.createElement("div");
        A.style.width = "fit-content", l.push(Jy(b, A, s.instantiationService));
        const { additionalClasses: R, ...D } = e ?? {};
        n({
            target: v,
            appearance: {
                compact: !0,
                showPointer: !0,
                skipFadeInAnimation: !0,
                ...t
            },
            content: A,
            position: {
                hoverPosition: y
            },
            container: D.container,
            persistence: {
                hideOnHover: !1,
                ...D.persistence
            },
            additionalClasses: [
                "composer-thinking-hover-tooltip",
                ...R || []
            ],
            ...D
        }, E);
    }, g = (v, b, y = wl.LEFT, T, E)=>{
        c(T);
        const A = v instanceof HTMLElement ? v : v.currentTarget;
        if (!A) return;
        const R = A.closest(".mentions-menu") ?? void 0, { additionalClasses: D, ...P } = e ?? {};
        n({
            target: A,
            appearance: {
                compact: !1,
                showPointer: !0,
                skipFadeInAnimation: !0,
                ...t
            },
            content: b,
            position: {
                hoverPosition: y
            },
            container: R ?? P.container,
            persistence: {
                hideOnHover: !1,
                ...P.persistence
            },
            additionalClasses: [
                "composer-thinking-hover-tooltip",
                ...D || []
            ],
            ...P
        }, E);
    }, f = (v)=>{
        (!v || v === a()) && (i(), c(void 0), u());
    };
    return An(()=>{
        e?.shouldSkipCleanup?.() || u();
    }), {
        showLargeHover: g,
        hideHover: f,
        currentHoverModel: a,
        showLargeJSXHover: h,
        showLargeJSXHoverAtTarget: p,
        hoverWidget: r
    };
}
function wv(e) {
    const { showHover: t, hideHover: n } = pte({
        delay: e.nonReactiveHintTextDelay ?? 300,
        additionalClasses: [
            "chat-hover-tooltip"
        ]
    }), { showLargeJSXHover: i, hideHover: r } = unt({
        delay: e.nonReactiveHintTextDelay ?? 300,
        additionalClasses: [
            "custom-large-hover-tooltip"
        ],
        appearance: {
            showPointer: !1,
            compact: !0
        }
    }), s = Oe(()=>e.hintText);
    let o = 0;
    return (()=>{
        var a = eFh();
        return a.addEventListener("mouseleave", (c)=>{
            e.onMouseLeave?.(c) || s() && (n(), r());
        }), a.addEventListener("mouseenter", (c)=>{
            if (e.onMouseEnter?.(c) || Date.now() < o) return;
            const u = s();
            u && (typeof u == "string" ? t(c, u) : i(c, ()=>u));
        }), a.addEventListener("click", (c)=>{
            e.disabled || e.isLoading || e.onClick?.(c);
        }), a.addEventListener("mousedown", (c)=>{
            e.disabled || e.isLoading || (n(), r(), o = Date.now() + 500, e.onMouseDown?.(c));
        }), Me(a, (()=>{
            var c = Lr(()=>!!e.cursorIcon);
            return ()=>c() ? pe(HAo, {
                    "aria-hidden": !0,
                    get name () {
                        return e.cursorIcon;
                    },
                    get size () {
                        return e.cursorIconSize ?? "lg";
                    },
                    get variant () {
                        return e.cursorIconVariant ?? "outline";
                    }
                }) : [
                    (()=>{
                        var l = tFh();
                        return Rn(()=>$i(l, [
                                `${Ft.asClassName(e.codicon)} ${e.iconClass?.includes("!text-[") ? "" : "!text-[16px]"} ${e.iconClass}`,
                                e.vsCodeStyled ? "!text-[16px] !w-4 !h-4 flex items-center justify-center !text-[var(--vscode-quickInput-foreground)] !opacity-100" : ""
                            ].join(" "))), l;
                    })(),
                    Lr(()=>e.children)
                ];
        })()), Rn((c)=>{
            var l = [
                "anysphere-icon-button bg-[transparent] border-none text-[var(--cursor-text-primary)] flex w-4 items-center justify-center",
                e.class,
                e.vsCodeStyled ? "!opacity-100 shrink-0 hover:bg-[var(--vscode-toolbar-hoverBackground)] rounded-[5px] !transition-none" : ""
            ].join(" "), u = !e.isLoading && e.outlined ? "true" : void 0, h = e.variant, p = e.isLoading ? "true" : void 0, g = e.dataMode, f = e.dataStopButton ? "true" : void 0, v = {
                ...e.style,
                width: `${e.size ?? 20}px`,
                height: `${e.size ?? 20}px`
            }, b = e.disabled ? "true" : void 0;
            return l !== c.e && $i(a, c.e = l), u !== c.t && fs(a, "data-outlined", c.t = u), h !== c.a && fs(a, "data-variant", c.a = h), p !== c.o && fs(a, "data-loading", c.o = p), g !== c.i && fs(a, "data-mode", c.i = g), f !== c.n && fs(a, "data-stop-button", c.n = f), c.s = oa(a, v, c.s), b !== c.h && fs(a, "data-disabled", c.h = b), c;
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0,
            h: void 0
        }), a;
    })();
}
function dnt(e, t) {
    const [n, i] = Ut(t ?? {
        width: 0,
        height: 0
    });
    return Jt(()=>{
        const r = e();
        if (!r) return;
        const s = sa(), o = new s.ResizeObserver((a)=>{
            for (const c of a){
                const { width: l, height: u } = c.contentRect;
                i({
                    width: l,
                    height: u
                });
            }
        });
        o.observe(r), An(()=>o.disconnect());
    }), n;
}
var nFh, WAo, iFh, rFh, sFh, unr, GAo, VAo, jAo, qAo, zAo, KAo, YAo, XAo, oFh;
export { Bqt, GAo, KAo, VAo, WAo, XAo, YAo, cnr, dnt, ha, iFh, il_, jAo, nFh, oFh, pTe, qAo, rFh, sFh, unr, unt, wv, zAo };
var __wakaru_ol__initialized = false;
export function ol_() {
if (__wakaru_ol__initialized) return;
__wakaru_ol__initialized = true;
"use strict";
x(), $e(), $e(), $e(), $e(), $e(), $e(), $e(), $e(), Df(), qn(), _i(), So(), li(), FGi(), ya(), x0(), mTe(), Ww(), gL(), h0t(), c_(), G8e(), anr(), nFh = yt("<div class=inline-diff-nav><span class=inline-diff-nav-counter> of "), WAo = yt("<span class=keyboard-shortcut>"), iFh = yt('<button class="hoverButton partialHoverButton secondary-button"><span>'), rFh = yt('<button class="hoverButton partialHoverButton"><span>'), sFh = yt("<div class=inline-diff-outer-container><div class=inline-diff-hover-container>"), unr = so(!1), GAo = so(!1), VAo = so(!1), jAo = so(0), qAo = so(18), zAo = so(void 0), KAo = so(!1), YAo = so(0), XAo = so(0), oFh = (e)=>{
    const t = Oe(()=>e.thisX), n = ir(), i = Rg(), r = Oe(()=>t().getEditor()?.getIsMultiDiffEditor?.());
    i.set(unr, n.diffDecorationVisibilityService.shouldHideInlineDiffs());
    const s = ha(i, unr), o = (J)=>i.set(unr, J), a = n.diffDecorationVisibilityService.onDidChangeGlobal(()=>{
        o(n.diffDecorationVisibilityService.shouldHideInlineDiffs());
    });
    An(()=>{
        a.dispose();
    });
    const c = Oe(()=>t().getEditor()?.getModel()?.uri.scheme === gt.vscodeNotebookCell), [l] = pTe(RAe, n.configurationService, mmn), u = ha(i, GAo), h = (J)=>i.set(GAo, J), p = ha(i, VAo), g = (J)=>i.set(VAo, J), f = ()=>{
        const J = n.themeService.getColorTheme().type, ne = J === Ef.HIGH_CONTRAST_DARK || J === Ef.HIGH_CONTRAST_LIGHT, ee = J === Ef.DARK || J === Ef.HIGH_CONTRAST_DARK;
        h(ne), g(ee);
    };
    f();
    const v = n.themeService.onDidColorThemeChange(()=>{
        f();
    });
    An(()=>{
        v.dispose();
    });
    const b = ha(i, jAo), y = (J)=>i.set(jAo, J);
    Jt(()=>{
        const J = t().getEditor();
        if (!J) return;
        const ne = J.getOption(68);
        y(ne);
        const ee = J.onDidChangeModelOptions(()=>{
            const se = J.getOption(68);
            y(se);
        });
        An(()=>{
            ee.dispose();
        });
    });
    const T = ha(i, qAo), E = (J)=>i.set(qAo, J);
    Jt(()=>{
        const J = t().getEditor();
        if (!J) return;
        const ne = ()=>{
            const re = J.getOption(108)?.verticalScrollbarSize ?? 0;
            E(re + 4);
        };
        ne();
        const ee = J.onDidChangeConfiguration((se)=>{
            se.hasChanged(108) && ne();
        });
        An(()=>{
            ee.dispose();
        });
    });
    const A = ha(i, zAo), R = (J)=>i.set(zAo, J), D = ha(i, KAo), P = (J)=>i.set(KAo, J), N = dnt(A), O = ()=>{
        const J = lr(()=>t().line()), ne = t().getEditor().getModel();
        if (!ne || J < 1 || J > ne.getLineCount()) return;
        const ee = t().getEditor().getLayoutInfo();
        if (!ee) return;
        const se = ne.getLineContent(J), re = ee.glyphMarginWidth + ee.lineNumbersWidth + t().getEditor().getOffsetForColumn(J, se.length + 1), ue = ee.width, ce = T(), ye = re + 32 > ue - ce - 200;
        D() !== ye && P(ye);
    };
    Jt(Sv(N, ()=>{
        O();
    })), Kc(()=>{
        O();
    });
    const F = ha(i, YAo), H = (J)=>i.set(YAo, J), $ = ha(i, XAo), W = (J)=>i.set(XAo, J), G = Oe(()=>t().keybindingService?.lookupKeybinding(rnr)?.getLabel() ?? ""), q = Oe(()=>t().keybindingService?.lookupKeybinding(inr)?.getLabel() ?? ""), z = (J, ne)=>D() && !r() && ne.length > 0 ? "" : J, X = ()=>{
        const J = t().getEditor();
        if (!J) return;
        const ee = n.diffChangeSourceRegistry.getDescriptorById(t().diffId)?.descriptor, se = ee?.changes ?? [];
        if (W(se.length), !ee || se.length === 0) {
            H(0);
            return;
        }
        const re = lr(()=>t().line()), ue = J.getModel()?.getLineCount();
        let ce = se.find((le)=>{
            const ye = ZJe(ee, le);
            return Math.min(ye.endLineNumber + 1, ue ?? ye.endLineNumber + 1) === re;
        });
        ce || (ce = aWt(ee, new Yn(re, 1)));
        const de = ce ? se.indexOf(ce) : -1;
        H(de === -1 ? 0 : de + 1);
    }, Y = (J)=>{
        const ne = t().getEditor();
        if (!ne) return;
        const se = n.diffChangeSourceRegistry.getDescriptorById(t().diffId)?.descriptor, re = se?.changes ?? [];
        if (!se || re.length === 0) return;
        const ue = t().line(), ce = ne.getModel()?.getLineCount();
        let de = re.find((Le)=>{
            const Be = ZJe(se, Le);
            return Math.min(Be.endLineNumber + 1, ce ?? Be.endLineNumber + 1) === ue;
        });
        de || (de = aWt(se, new Yn(ue, 1)));
        const le = de ? re.indexOf(de) : -1, _e = le === -1 ? J === "next" ? 0 : re.length - 1 : (le + (J === "next" ? 1 : -1) + re.length) % re.length, me = re[_e], Ce = ZJe(se, me), xe = Math.min(Ce.endLineNumber + 1, ce ?? Ce.endLineNumber + 1);
        ne.setPosition({
            lineNumber: xe,
            column: 1
        }), ne.revealLineInCenter(xe);
    }, Z = ir(), K = Oe(()=>{
        const ne = n.diffChangeSourceRegistry.getDescriptorById(t().diffId)?.descriptor?.metadata?.composerId;
        return Z.composerDataService.isWorktreeComposer(ne);
    });
    return Kc(()=>{
        X();
        const ne = t().getEditor()?.onDidChangeModelContent(()=>lr(X)), ee = n.diffChangeSourceRegistry.onDidChange(()=>lr(X));
        Jt(()=>{
            t().line(), X();
        }), An(()=>{
            ne?.dispose(), ee?.dispose();
        });
    }), (()=>{
        var J = sFh(), ne = J.firstChild;
        return Pl(R, J), J.style.setProperty("width", "100%"), J.style.setProperty("visibility", "visible"), J.style.setProperty("position", "relative"), J.style.setProperty("pointer-events", "none"), Me(ne, pe(wt, {
            get when () {
                return Lr(()=>$() > 1)() && !c();
            },
            get children () {
                var ee = nFh(), se = ee.firstChild, re = se.firstChild;
                return Me(ee, pe(wv, {
                    get codicon () {
                        return Pe.chevronUp;
                    },
                    onClick: (ue)=>{
                        Y("previous"), ue.stopPropagation();
                    },
                    class: "!text-[var(--vscode-input-foreground)]"
                }), se), Me(se, F, re), Me(se, $, null), Me(ee, pe(wv, {
                    get codicon () {
                        return Pe.chevronDown;
                    },
                    onClick: (ue)=>{
                        Y("next"), ue.stopPropagation();
                    },
                    class: "!text-[var(--vscode-input-foreground)]"
                }), null), ee;
            }
        }), null), Me(ne, pe(wt, {
            get when () {
                return !K();
            },
            get children () {
                return [
                    (()=>{
                        var ee = iFh(), se = ee.firstChild;
                        return ee.addEventListener("click", (re)=>{
                            c() ? n.diffChangeSourceRegistry.reject(t().diffId) : t().commandService.executeCommand(rnr, t()), re.stopPropagation();
                        }), se.style.setProperty("display", "flex"), se.style.setProperty("align-items", "center"), se.style.setProperty("gap", "4px"), se.style.setProperty("font-size", "12px"), Me(se, ()=>z(c() ? "Undo Cell" : "Undo", G()), null), Me(se, pe(wt, {
                            get when () {
                                return G();
                            },
                            get children () {
                                var re = WAo();
                                return Me(re, G), re;
                            }
                        }), null), ee;
                    })(),
                    pe(wt, {
                        get when () {
                            return !r() || !s();
                        },
                        get children () {
                            var ee = rFh(), se = ee.firstChild;
                            return ee.addEventListener("click", (re)=>{
                                c() ? n.diffChangeSourceRegistry.accept(t().diffId) : t().commandService.executeCommand(inr, t()), re.stopPropagation();
                            }), se.style.setProperty("display", "flex"), se.style.setProperty("align-items", "center"), se.style.setProperty("font-size", "12px"), se.style.setProperty("gap", "4px"), Me(se, ()=>z(c() ? "Keep Cell" : "Keep", q()), null), Me(se, pe(wt, {
                                get when () {
                                    return q();
                                },
                                get children () {
                                    var re = WAo();
                                    return Me(re, q), re;
                                }
                            }), null), ee;
                        }
                    })
                ];
            }
        }), null), Rn((ee)=>{
            var se = l() ? "true" : "false", re = u() ? "true" : "false", ue = p() ? "true" : "false", ce = e.isOnEditorEnd() ? `${b()}px` : "0px", de = {
                float: "right",
                display: "flex",
                "flex-direction": "row",
                gap: "2px",
                overflow: "hidden",
                opacity: "1",
                "z-index": "999",
                "margin-right": `${T()}px`,
                "pointer-events": "all",
                ...e.isOnEditorEnd() ? {
                    "border-top-left-radius": "4px",
                    "border-top-right-radius": "4px",
                    transform: "translateY(-100%)"
                } : {
                    "border-bottom-left-radius": "4px",
                    "border-bottom-right-radius": "4px"
                }
            };
            return se !== ee.e && fs(J, "data-themed-diff", ee.e = se), re !== ee.t && fs(J, "data-high-contrast", ee.t = re), ue !== ee.a && fs(J, "data-dark-theme", ee.a = ue), ce !== ee.o && ((ee.o = ce) != null ? J.style.setProperty("margin-top", ce) : J.style.removeProperty("margin-top")), ee.i = oa(ne, de, ee.i), ee;
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0
        }), J;
    })();
};

}
