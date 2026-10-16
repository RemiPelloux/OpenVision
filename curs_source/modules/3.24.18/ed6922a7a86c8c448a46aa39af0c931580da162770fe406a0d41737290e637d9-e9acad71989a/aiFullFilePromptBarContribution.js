import { $i, Me, Pl, U4e, Wse, fs, oa, sPe } from "./A3u.js";
import { CFh, EFh, JAo, SFh, TFh, eRo, kFh, tRo, wFh } from "./BreadcrumbReviewControls.js";
import { Th } from "./De_3.js";
import { Rg } from "./ECo.js";
import { Ai, Se, bt, cn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { QTv } from "./aiFullFilePromptBar.css";
import { El_ } from "./aiFullFilePromptBar.js";
import { gFh, gnr, mFh, pFh } from "./button_3.js";
import { Pe } from "./codicons.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { dn, xn } from "./contextkey.js";
import { D$, p_e } from "./diffChangeSource.js";
import { M7, en, xi } from "./dom_2.js";
import { yc } from "./editorExtensions.js";
import { F2, Rq, hnr } from "./inlineDiffController.js";
import { CN, Fee } from "./inlineDiffService.js";
import { Fqt, Lqt, Nqt, Oqt, n5n, onr, snr } from "./inlineDiffTypes.js";
import { Ze, _t } from "./instantiation.js";
import { Yf, qC } from "./lazy.js";
import { ibe } from "./loadingSpinner.js";
import { gt, li } from "./network.js";
import { K3 } from "./pathUtils.js";
import { NO, lU } from "./peekView.js";
import { AFh, DFh, IFh, MFh, PFh, RFh, _nr, fnr, g0t, iRo, nRo, o5n, vnr } from "./pureAIPromptBar.js";
import { An, Jt, Kc, LO, Oe, Rn, Ut, Ve, fk, lr, pe, pp, qS, wt } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { Jy } from "./renderCursorBlamePane.js";
import { dnt, ha, wv } from "./renderInlineDiffPartialWidget.js";
import { pl } from "./resources.js";
import { Vn, yn } from "./storage_2.js";
import { Ft } from "./themables.js";
import { Ex, zT } from "./touch.js";
import { x } from "./tslib.es6.js";
import { pte } from "./useComposerHoverTooltip.js";
import { ir, mL } from "./useKeyboardShortcut.js";
import { Ku } from "./utilities_3.js";
import { Lr } from "./web.js";
import { Jn, ci } from "./workspace.js";
function Pd(e) {
    const { showHover: t, hideHover: n } = pte({
        delay: e.nonReactiveHintTextDelay ?? 300,
        additionalClasses: [
            "chat-hover-tooltip"
        ]
    }), i = Oe(()=>e.disabled && e.disabledHintText ? e.disabledHintText : e.hintText), [r, s] = Ut(void 0), o = dnt(r), [a, c] = Ut(!1), [l, u] = Ut(!1);
    Kc(()=>{
        u(!0);
    }), Jt(()=>{
        if (!l()) {
            c(!1);
            return;
        }
        const p = e.disabled !== !0 && e.isLoading !== !0 && (e.onClick !== void 0 || e.onMouseDown !== void 0);
        c(p);
    });
    const h = Oe(()=>e.showDropdownButton && (o().width > 160 || e.relativeDropdownButton));
    return (()=>{
        var p = mFh(), g = p.firstChild, f = g.firstChild;
        return p.addEventListener("keydown", (v)=>{
            e.disabled || e.tabFocusable && !e.isLoading && (v.key === "Enter" || v.key === " ") && !v.shiftKey && (v.preventDefault(), (e.onClick ?? e.onMouseDown)?.(v));
        }), p.addEventListener("contextmenu", (v)=>e.onContextMenu?.(v)), p.addEventListener("mouseleave", ()=>{
            e.onMouseLeave?.(), i() && n();
        }), p.addEventListener("mouseenter", (v)=>{
            e.onMouseEnter?.(v), i() && t(v, i());
        }), p.addEventListener("mousedown", (v)=>!e.isLoading && !e.disabled && e.onMouseDown?.(v)), p.addEventListener("click", (v)=>!e.isLoading && !e.disabled && e.onClick?.(v)), Pl((v)=>{
            s(v), e.setRef?.(v);
        }, p), Me(p, pe(wt, {
            get when () {
                return e.leftContent || e.codicon || e.isLoading || e.showLoadingSpinner;
            },
            get children () {
                var v = pFh();
                return Me(v, ()=>e.leftContent ?? pe(wt, {
                        get when () {
                            return e.isLoading || e.showLoadingSpinner;
                        },
                        get fallback () {
                            return (()=>{
                                var b = gnr();
                                return Rn((y)=>{
                                    var T = `${Ft.asClassName(e.codicon)} !text-[10px] opacity-70 !overflow-visible ${e.iconClass}`, E = {
                                        ...e.textStyle,
                                        ...e.iconStyle
                                    };
                                    return T !== y.e && $i(b, y.e = T), y.t = oa(b, E, y.t), y;
                                }, {
                                    e: void 0,
                                    t: void 0
                                }), b;
                            })();
                        },
                        get children () {
                            return pe(ibe, {
                                get onPrimaryButton () {
                                    return (e.variant ?? "primary") === "primary";
                                }
                            });
                        }
                    })), Rn((b)=>oa(v, {
                        width: "14px",
                        ...e.iconWrapperStyle
                    }, b)), v;
            }
        }), g), Me(f, ()=>e.children), Me(g, pe(wt, {
            get when () {
                return e.keybinding;
            },
            children: (v)=>(()=>{
                    var b = gFh();
                    return Me(b, v), b;
                })()
        }), null), Me(p, pe(wt, {
            get when () {
                return e.rightCodicon;
            },
            children: (v)=>(()=>{
                    var b = gnr();
                    return Rn((y)=>{
                        var T = `${Ft.asClassName(v())} !text-[12px] opacity-70 !overflow-visible ${e.rightIconClass ?? ""}`, E = {
                            ...e.textStyle,
                            ...e.iconStyle
                        };
                        return T !== y.e && $i(b, y.e = T), y.t = oa(b, E, y.t), y;
                    }, {
                        e: void 0,
                        t: void 0
                    }), b;
                })()
        }), null), Me(p, pe(wt, {
            get when () {
                return h();
            },
            get children () {
                var v = gnr();
                return v.addEventListener("click", (b)=>{
                    b.stopPropagation(), e.onDropdownClick?.(b);
                }), Rn(()=>$i(v, `codicon codicon-drop-down-button !text-[16px] h-[100%] box-border opacity-80 hover:opacity-100 transition-opacity duration-100 !flex items-center justify-end pr-1 ${e.relativeDropdownButton ? "ml-[-2px]" : "absolute right-1 top-1/2 -translate-y-1/2 w-[24px]"}`)), v;
            }
        }), null), Rn((v)=>{
            var b = e["aria-label"], y = e.title, T = e.id, E = {
                "font-size": "12px",
                "line-height": "16px",
                "box-sizing": "border-box",
                "min-height": "20px",
                opacity: e.disabled ? .5 : void 0,
                position: h() ? "relative" : void 0,
                "padding-right": h() ? "0px" : void 0,
                ...e.style
            }, A = e.tabFocusable ? 0 : void 0, R = e.isLoading, D = e.disabled, P = a() ? "true" : "false", N = [
                "flex flex-nowrap items-center justify-center gap-[4px] px-[6px] rounded cursor-pointer whitespace-nowrap shrink-0",
                e.variant === "outline" ? "anysphere-outline-button" : e.variant === "secondary" ? "anysphere-secondary-button" : e.variant === "text" ? "anysphere-text-button" : e.variant === "danger" ? "anysphere-danger-button" : e.variant === "focus-outline" ? "anysphere-focus-outline-button" : "anysphere-button",
                e.tabFocusable ? "tab-focusable" : "",
                e.isPulsing ? "anysphere-button-pulse" : "",
                e.class
            ].join(" "), O = {
                ...e.textStyle
            };
            return b !== v.e && fs(p, "aria-label", v.e = b), y !== v.t && fs(p, "title", v.t = y), T !== v.a && fs(p, "id", v.a = T), v.o = oa(p, E, v.o), A !== v.i && fs(p, "tabindex", v.i = A), R !== v.n && fs(p, "data-loading", v.n = R), D !== v.s && fs(p, "data-disabled", v.s = D), P !== v.h && fs(p, "data-click-ready", v.h = P), N !== v.r && $i(p, v.r = N), v.d = oa(f, O, v.d), v;
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0,
            h: void 0,
            r: void 0,
            d: void 0
        }), p;
    })();
}
function s5n() {
    const t = ir().diffDecorationVisibilityService, [n, i] = Ut(t.shouldHideInlineDiffs()), r = t.onDidChangeGlobal(()=>{
        i(t.shouldHideInlineDiffs());
    });
    return An(()=>r.dispose()), n;
}
function vFh(e) {
    const t = ir(), [n, i] = Ut({
        activeGroupId: t.editorGroupService.activeGroup?.id,
        editorGroupId: void 0,
        groupCount: t.editorGroupService.count
    }), r = ()=>{
        const s = t.editorService.visibleEditorPanes.find((o)=>LO(o.getControl()) === e)?.group.id;
        i({
            activeGroupId: t.editorGroupService.activeGroup?.id,
            editorGroupId: s,
            groupCount: t.editorGroupService.count
        });
    };
    return Kc(()=>{
        r();
        const s = [
            t.editorService.onDidActiveEditorChange(r),
            t.editorService.onDidVisibleEditorsChange(r),
            t.editorGroupService.onDidChangeActiveGroup(r),
            t.editorGroupService.onDidActivateGroup(r),
            t.editorGroupService.onDidAddGroup(r),
            t.editorGroupService.onDidRemoveGroup(r)
        ];
        An(()=>{
            for (const o of s)o.dispose();
        });
    }), Oe(()=>{
        const s = n();
        return s.groupCount <= 1 ? !0 : s.editorGroupId !== void 0 && s.editorGroupId === s.activeGroupId;
    });
}
function bFh(e) {
    return (()=>{
        var t = SFh(), n = t.firstChild, i = n.nextSibling, r = i.nextSibling;
        return t.addEventListener("mousedown", (s)=>e.onClick(s)), Me(t, ()=>e.current, n), Me(t, ()=>e.delimiter || "of", i), Me(t, ()=>e.total, null), Me(t, pe(wt, {
            get when () {
                return e.subText;
            },
            get children () {
                return [
                    " ",
                    Lr(()=>e.subText)
                ];
            }
        }), null), t;
    })();
}
function yFh(e) {
    return e.shiftKey || (Ai ? e.metaKey : e.ctrlKey);
}
function vl_(e) {
    const t = ir(), n = s5n(), i = vFh(lr(()=>e.editor)), r = mL(snr), s = mL(onr), o = mL(Fqt), a = mL(Oqt), c = Rg(), l = ha(c, eRo), u = (q)=>c.set(eRo, q);
    Kc(()=>{
        u([
            ...t.diffChangeSourceRegistry.getDescriptors()
        ]);
        const q = t.diffChangeSourceRegistry.onDidChange(()=>{
            u([
                ...t.diffChangeSourceRegistry.getDescriptors()
            ]);
        });
        An(()=>q.dispose());
    });
    const h = Oe(()=>{
        const q = l().filter((X)=>X.metadata?.source === Fee).filter((X)=>!t.composerDataService.isWorktreeComposer(X.metadata?.composerId)).filter((X)=>!sPe(X.uri)).filter((X)=>!X.metadata?.hideDecorations);
        if (!e.uri) return q;
        const z = q.find((Y)=>Rq(Y, e.uri) && Y.metadata?.composerId)?.metadata?.composerId;
        return z ? q.filter((X)=>X.metadata?.composerId === z) : q;
    }), p = Oe(()=>e.uri ? h().some((q)=>Rq(q, e.uri)) : !1), g = Oe(()=>hnr(h().map((q)=>({
                uri: q.uri,
                currentRange: q.currentRange,
                createdAt: q.metadata?.createdAt
            }))).map((q)=>q.toString())), f = Oe(()=>{
        if (!e.uri) return;
        const q = g().findIndex((z)=>z === e.uri?.toString());
        return q === -1 ? void 0 : q;
    }), v = ha(c, tRo), b = (q)=>c.set(tRo, q), y = Oe(()=>e.uri ? h().filter((z)=>Rq(z, e.uri)).reduce((z, X)=>z + X.changes.length, 0) : 0), T = ()=>{
        if (!p()) {
            b(0);
            return;
        }
        if (!F2.get(e.editor)) {
            b(0);
            return;
        }
        const z = h().filter((ne)=>e.uri && Rq(ne, e.uri)), X = e.editor.getModel()?.getLineCount() ?? 0, Y = z.flatMap((ne)=>ne.changes.map((ee)=>{
                const se = ne.currentRange.startLineNumber + ee.addedRange.startLineNumber - 1, re = ne.currentRange.startLineNumber + ee.addedRange.endLineNumberExclusive - 1, ue = ee.addedRange.startLineNumber === ee.addedRange.endLineNumberExclusive, ce = Math.min(ue ? se + 1 : re, X);
                return {
                    start: se,
                    end: re,
                    widgetLine: ce
                };
            }));
        if (Y.length === 0) {
            b(0);
            return;
        }
        const Z = e.editor.getPosition(), K = e.editor.getVisibleRanges();
        let J = -1;
        if (Z && K.some((ne)=>ne.containsPosition(Z)) && (J = Y.findIndex((ne)=>Z.lineNumber >= ne.start && Z.lineNumber <= ne.end || Z.lineNumber === ne.widgetLine)), J === -1 && K.length > 0) {
            const ne = Math.floor((K[0].startLineNumber + K[K.length - 1].endLineNumber) / 2);
            J = Y.reduce((ee, se, re)=>Math.abs(se.start - ne) < Math.abs(Y[ee].start - ne) ? re : ee, 0);
        }
        b(J + 1);
    };
    Jt(()=>{
        if (p()) {
            lr(T);
            const q = e.editor.onDidScrollChange(T), z = e.editor.onDidChangeCursorPosition(T), X = e.editor.onDidChangeModelContent(T);
            An(()=>{
                q.dispose(), z.dispose(), X.dispose();
            });
        } else b(0);
    }), Jt(()=>{
        h(), p() && lr(T);
    });
    const E = ()=>{
        if (!e.uri) return;
        const q = h().find((z)=>Rq(z, e.uri));
        q && t.diffChangeSourceRegistry.accept(q.id);
    }, A = ()=>{
        if (!e.uri) return;
        const q = h().find((z)=>Rq(z, e.uri));
        q && t.diffChangeSourceRegistry.reject(q.id);
    }, R = async ()=>{
        const q = h().map((z)=>z.id);
        for (const z of q)await t.diffChangeSourceRegistry.accept(z, {
            sourceContext: "editor"
        });
        await U4e(t);
    }, D = mL(Lqt), P = ()=>{
        e.editor.focus(), t.commandService.executeCommand(Oqt);
    }, N = ()=>{
        e.editor.focus(), t.commandService.executeCommand(Fqt);
    }, O = Oe(()=>f() === void 0 || g().length > 1), F = Oe(()=>e.uri?.scheme === gt.vscodeNotebookCell || !i() || n() && h().filter((q)=>!q.metadata?.hideDecorations).length === 0 ? !1 : n() ? p() : h().length > 0), H = Oe(()=>!n() && !p() && h().length > 0), $ = ()=>{
        e.editor.focus(), F2.get(e.editor)?.navigateToChange("previous", v()), T();
    }, W = ()=>{
        e.editor.focus(), F2.get(e.editor)?.navigateToChange("next", v()), T();
    }, G = Oe(()=>{
        if (!e.uri) return !1;
        const z = h().find((X)=>Rq(X, e.uri))?.metadata?.composerId;
        return t.composerDataService.isWorktreeComposer(z);
    });
    return pe(wt, {
        get when () {
            return F();
        },
        get children () {
            var q = EFh();
            return Me(q, pe(wt, {
                get when () {
                    return !H();
                },
                get children () {
                    var z = JAo();
                    return Me(z, pe(wt, {
                        get when () {
                            return p();
                        },
                        get children () {
                            return [
                                (()=>{
                                    var X = kFh();
                                    return Me(X, pe(wv, {
                                        get codicon () {
                                            return Pe.chevronUp;
                                        },
                                        onMouseDown: $,
                                        get hintText () {
                                            return s();
                                        }
                                    }), null), Me(X, pe(bFh, {
                                        get current () {
                                            return v();
                                        },
                                        get total () {
                                            return y();
                                        },
                                        onClick: (Y)=>{
                                            yFh(Y) ? $() : W();
                                        }
                                    }), null), Me(X, pe(wv, {
                                        get codicon () {
                                            return Pe.chevronDown;
                                        },
                                        onMouseDown: W,
                                        get hintText () {
                                            return r();
                                        }
                                    }), null), X;
                                })(),
                                (()=>{
                                    var X = wFh();
                                    return X.style.setProperty("height", "12px"), X.style.setProperty("width", "1px"), X.style.setProperty("opacity", "0.4"), X.style.setProperty("background", "var(--cursor-text-tertiary)"), X;
                                })()
                            ];
                        }
                    }), null), Me(z, pe(wt, {
                        get when () {
                            return O();
                        },
                        get children () {
                            var X = TFh(), Y = X.firstChild;
                            return Me(Y, pe(wv, {
                                get codicon () {
                                    return Pe.chevronRight;
                                },
                                onMouseDown: P,
                                get hintText () {
                                    return a();
                                }
                            })), Me(X, pe(wt, {
                                get when () {
                                    return h().length > 0;
                                },
                                get children () {
                                    return [
                                        pe(bFh, {
                                            get current () {
                                                return (f() ?? 0) + 1;
                                            },
                                            get total () {
                                                return g().length;
                                            },
                                            onClick: (Z)=>{
                                                yFh(Z) ? P() : N();
                                            }
                                        }),
                                        CFh()
                                    ];
                                }
                            }), null), Me(X, pe(wv, {
                                get codicon () {
                                    return Pe.chevronRight;
                                },
                                onMouseDown: N,
                                get hintText () {
                                    return o();
                                }
                            }), null), X;
                        }
                    }), null), Me(z, pe(wt, {
                        get when () {
                            return Lr(()=>!!p())() && !G();
                        },
                        get children () {
                            return [
                                pe(Pd, {
                                    variant: "outline",
                                    onMouseDown: A,
                                    class: "breadcrumbs-action-btn",
                                    children: "Undo File"
                                }),
                                pe(Pd, {
                                    variant: "primary",
                                    onMouseDown: E,
                                    get keybinding () {
                                        return D();
                                    },
                                    class: "breadcrumbs-action-btn",
                                    children: "Keep File"
                                })
                            ];
                        }
                    }), null), z;
                }
            }), null), Me(q, pe(wt, {
                get when () {
                    return H();
                },
                get children () {
                    var z = JAo();
                    return Me(z, pe(Pd, {
                        variant: "primary",
                        onMouseDown: ()=>void R(),
                        class: "breadcrumbs-action-btn",
                        children: "Keep all changes"
                    }), null), Me(z, pe(Pd, {
                        variant: "secondary",
                        onMouseDown: N,
                        get hintText () {
                            return o();
                        },
                        class: "breadcrumbs-action-btn",
                        children: "Review Next File"
                    }), null), z;
                }
            }), null), q;
        }
    });
}
function yl_({ shouldShowInEditorContext: e, isNotebookCell: t, shouldHideDiffs: n, hasInlineDiffsInCurrentFile: i, hasAnyInlineDiffs: r }) {
    return Oe(()=>!e() || t() ? !1 : n() ? i() : r());
}
function xFh(e) {
    const { showHover: t, hideHover: n } = pte({
        delay: 600
    });
    return (()=>{
        var i = IFh(), r = i.firstChild;
        return i.addEventListener("click", (s)=>e.onClick(s)), i.style.setProperty("font-size", "12px"), i.style.setProperty("color", "var(--vscode-foreground)"), i.style.setProperty("cursor", "pointer"), i.style.setProperty("font-feature-settings", '"tnum"'), i.style.setProperty("font-variant-numeric", "tabular-nums"), i.style.setProperty("text-align", "center"), i.style.setProperty("white-space", "nowrap"), Wse(i, fk(()=>e.hintText ? {
                onMouseEnter: (s)=>{
                    t(s, e.hintText ?? "");
                },
                onMouseLeave: ()=>{
                    n();
                }
            } : {}), !1, !0), Me(i, ()=>e.current, r), Me(i, ()=>e.total, null), Me(i, pe(wt, {
            get when () {
                return e.subText;
            },
            get children () {
                return [
                    " ",
                    Lr(()=>e.subText)
                ];
            }
        }), null), i;
    })();
}
function kl_(e) {
    const t = Rg();
    t.set(fnr, void 0), t.set(o5n, !1), t.set(g0t, void 0), t.set(vnr, !1), t.set(_nr, void 0);
    const n = s5n(), i = Oe(()=>e.uri === void 0 ? !1 : e.inlineDiffs.some(($)=>Rq($, e.uri) || $.uri.fsPath === e.uri.fsPath ? n() ? !$.metadata?.hideDecorations : !0 : !1)), r = Oe(()=>e.inlineDiffs.length > 0), s = yl_({
        shouldShowInEditorContext: ()=>e.shouldShowInEditorContext,
        isNotebookCell: ()=>e.uri?.scheme === gt.vscodeNotebookCell,
        shouldHideDiffs: n,
        hasInlineDiffsInCurrentFile: i,
        hasAnyInlineDiffs: r
    }), o = {
        "font-size": "12px",
        padding: "2px 4px",
        height: "20px",
        "box-sizing": "border-box",
        display: "flex",
        "align-items": "center",
        "justify-content": "center"
    }, a = Oe(()=>e.uniqueFileUris.indexOf(e.uri?.toString() ?? "") === -1 || e.uniqueFileUris.length > 1), c = {
        display: "flex",
        "flex-direction": "row",
        padding: "6px",
        border: "1px solid var(--cursor-stroke-secondary)",
        "box-shadow": "var(--cursor-box-shadow-lg)",
        "background-color": "var(--vscode-editorWidget-background)",
        "border-radius": "6px",
        "align-items": "center",
        "justify-content": "center",
        "min-width": "fit-content",
        "pointer-events": "auto"
    }, l = ha(t, fnr), u = ($)=>t.set(fnr, $), h = dnt(l), p = Oe(()=>h().width <= MFh), g = Oe(()=>p() ? "104px" : "116px"), f = Oe(()=>p() ? "108px" : "144px"), v = Oe(()=>"220px"), b = Oe(()=>a()), y = Oe(()=>b() && (!i() || e.totalChanges === 0)), T = Oe(()=>b() && i() && e.totalChanges > 0), E = ha(t, o5n), A = ($)=>t.set($ ? PFh : iRo);
    Jt(()=>{
        e.uri?.toString(), e.fileIndexInInlineDiffs, e.currentVisibleChange, e.totalChanges, A(!1);
    }), Jt(()=>{
        (!i() || e.isGenerating) && A(!1);
    }), An(()=>{
        const $ = t.get(g0t);
        $ !== void 0 && window.clearTimeout($);
    });
    const R = ha(t, vnr), D = ($)=>t.set(vnr, $), P = ha(t, _nr), N = ($)=>t.set(_nr, $), O = ()=>{
        D(!0), P()?.focus(), window.addEventListener("keydown", F);
    }, F = ($)=>{
        const W = P();
        if (!R() || document.activeElement !== W) {
            window.removeEventListener("keydown", F), D(!1);
            return;
        }
        switch($.key){
            case "ArrowUp":
                e.onNavigateToPreviousChange(), $.preventDefault();
                break;
            case "ArrowDown":
                e.onNavigateToNextChange(), $.preventDefault();
                break;
            case "Escape":
                D(!1), W?.blur(), window.removeEventListener("keydown", F), $.preventDefault();
                break;
        }
    }, H = ()=>{
        D(!1), window.removeEventListener("keydown", F);
    };
    return An(()=>{
        window.removeEventListener("keydown", F);
    }), Jt(()=>{
        R() || window.removeEventListener("keydown", F);
    }), pe(wt, {
        get when () {
            return s();
        },
        get children () {
            var $ = DFh();
            return Pl(u, $), $.style.setProperty("display", "flex"), $.style.setProperty("justify-content", "center"), $.style.setProperty("width", "100%"), $.style.setProperty("align-items", "center"), $.style.setProperty("gap", "6px"), $.style.setProperty("margin-bottom", "6px"), $.style.setProperty("pointer-events", "none"), Me($, pe(wt, {
                get when () {
                    return !e.isGenerating;
                },
                get fallback () {
                    return (()=>{
                        var W = nRo();
                        return oa(W, c), Me(W, pe(Pd, {
                            variant: "text",
                            get codicon () {
                                return Pe.stop;
                            },
                            get onClick () {
                                return e.onCancelGeneration;
                            },
                            style: o,
                            children: "Cancel"
                        })), W;
                    })();
                },
                get children () {
                    return [
                        pe(wt, {
                            get when () {
                                return i();
                            },
                            get children () {
                                var W = AFh(), G = W.firstChild, q = G.nextSibling, z = q.firstChild;
                                return G.addEventListener("blur", H), G.addEventListener("click", O), Pl(N, G), G.style.setProperty("outline", "none"), Me(G, pe(wv, {
                                    get codicon () {
                                        return Pe.chevronUp;
                                    },
                                    get onClick () {
                                        return e.onNavigateToPreviousChange;
                                    },
                                    get hintText () {
                                        return e.previousChangeKeybinding;
                                    },
                                    class: "opacity-40"
                                }), null), Me(G, pe(wt, {
                                    get when () {
                                        return e.totalChanges > 0;
                                    },
                                    get children () {
                                        return pe(xFh, {
                                            get current () {
                                                return e.currentVisibleChange;
                                            },
                                            get total () {
                                                return e.totalChanges;
                                            },
                                            onClick: (X)=>{
                                                X.shiftKey || X.metaKey || X.ctrlKey ? e.onNavigateToPreviousChange() : e.onNavigateToNextChange();
                                            },
                                            get hintText () {
                                                return `${e.currentVisibleChange} of ${e.totalChanges} total changes`;
                                            }
                                        });
                                    }
                                }), null), Me(G, pe(wv, {
                                    get codicon () {
                                        return Pe.chevronDown;
                                    },
                                    get onClick () {
                                        return e.onNavigateToNextChange;
                                    },
                                    class: "opacity-40",
                                    get hintText () {
                                        return e.nextChangeKeybinding;
                                    }
                                }), null), Me(z, pe(Pd, {
                                    variant: "outline",
                                    onClick: ()=>{
                                        if (!E()) {
                                            A(!0);
                                            return;
                                        }
                                        A(!1), e.onRejectChanges();
                                    },
                                    style: o,
                                    get keybinding () {
                                        return E() || p() ? void 0 : e.rejectKeybinding;
                                    },
                                    get hintText () {
                                        return Lr(()=>!!E())() ? "Click again to confirm undo" : p() ? e.rejectKeybinding : void 0;
                                    },
                                    get children () {
                                        return Lr(()=>!!E())() ? "Confirm" : p() ? "Undo" : "Undo All";
                                    }
                                }), null), Me(z, pe(Pd, {
                                    variant: "primary",
                                    get onClick () {
                                        return e.onAcceptChanges;
                                    },
                                    style: o,
                                    get keybinding () {
                                        return p() ? void 0 : e.acceptKeybinding;
                                    },
                                    get hintText () {
                                        return p() ? e.acceptKeybinding : void 0;
                                    },
                                    get children () {
                                        return p() ? "Keep" : "Keep All";
                                    }
                                }), null), Rn((X)=>{
                                    var Y = {
                                        ...c,
                                        gap: "20px"
                                    }, Z = g();
                                    return X.e = oa(W, Y, X.e), Z !== X.t && ((X.t = Z) != null ? G.style.setProperty("min-width", Z) : G.style.removeProperty("min-width")), X;
                                }, {
                                    e: void 0,
                                    t: void 0
                                }), W;
                            }
                        }),
                        pe(wt, {
                            get when () {
                                return y();
                            },
                            get children () {
                                var W = RFh(), G = W.firstChild;
                                return Me(G, pe(Pd, {
                                    variant: "text",
                                    get onClick () {
                                        return e.onAcceptAllOutstandingChanges;
                                    },
                                    get style () {
                                        return {
                                            ...o,
                                            color: "var(--vscode-button-secondaryForeground)"
                                        };
                                    },
                                    children: "Keep all changes"
                                }), null), Me(G, pe(Pd, {
                                    variant: "primary",
                                    get rightCodicon () {
                                        return Pe.chevronRight;
                                    },
                                    get onClick () {
                                        return e.onNavigateToNextFile;
                                    },
                                    get hintText () {
                                        return e.nextFileKeybinding;
                                    },
                                    style: o,
                                    children: "Review next file"
                                }), null), Rn((q)=>oa(W, {
                                        ...c,
                                        "min-width": v(),
                                        "justify-content": "center"
                                    }, q)), W;
                            }
                        }),
                        pe(wt, {
                            get when () {
                                return T();
                            },
                            get children () {
                                var W = nRo();
                                return Me(W, pe(wv, {
                                    get codicon () {
                                        return Pe.chevronLeft;
                                    },
                                    get onClick () {
                                        return e.onNavigateToPreviousFile;
                                    },
                                    get hintText () {
                                        return e.previousFileKeybinding;
                                    },
                                    class: "opacity-40"
                                }), null), Me(W, pe(xFh, {
                                    get current () {
                                        return e.fileIndexInInlineDiffs !== void 0 ? e.fileIndexInInlineDiffs + 1 : 1;
                                    },
                                    get total () {
                                        return e.uniqueFileUris.length;
                                    },
                                    onClick: (G)=>{
                                        G.shiftKey || G.metaKey || G.ctrlKey ? e.onNavigateToPreviousFile() : e.onNavigateToNextFile();
                                    },
                                    get subText () {
                                        return p() ? void 0 : "files";
                                    },
                                    get hintText () {
                                        return p() ? `${e.fileIndexInInlineDiffs !== void 0 ? e.fileIndexInInlineDiffs + 1 : 1} of ${e.inlineDiffs.length} files` : void 0;
                                    }
                                }), null), Me(W, pe(wv, {
                                    get codicon () {
                                        return Pe.chevronRight;
                                    },
                                    get onClick () {
                                        return e.onNavigateToNextFile;
                                    },
                                    class: "opacity-40",
                                    get hintText () {
                                        return e.nextFileKeybinding;
                                    }
                                }), null), Rn((G)=>oa(W, {
                                        ...c,
                                        gap: "4px",
                                        "min-width": f()
                                    }, G)), W;
                            }
                        })
                    ];
                }
            })), $;
        }
    });
}
function Cl_(e) {
    const t = ir(), n = mL(Lqt), i = Oe(()=>t.keybindingService.lookupKeybinding(Nqt)?.getLabel() ?? ""), r = mL(snr), s = mL(onr), o = mL(Fqt), a = mL(Oqt), c = vFh(e.editor), [l, u] = Ut([]);
    Kc(()=>{
        u([
            ...t.diffChangeSourceRegistry.getDescriptors()
        ]);
        const Y = t.diffChangeSourceRegistry.onDidChange(()=>{
            u([
                ...t.diffChangeSourceRegistry.getDescriptors()
            ]);
        });
        An(()=>Y.dispose());
    });
    const h = Oe(()=>{
        const Y = new Map, Z = (ne)=>{
            const ee = ne.metadata?.composerId;
            if (!ee) return !1;
            let se = Y.get(ee);
            return se === void 0 && (se = t.composerDataService.isWorktreeComposer(ee), Y.set(ee, se)), se;
        }, K = l().filter((ne)=>ne.metadata?.source === Fee).filter((ne)=>!Z(ne)).filter((ne)=>!sPe(ne.uri)).filter((ne)=>!ne.metadata?.hideDecorations);
        if (!e.uri) return K;
        const J = K.find((ee)=>Rq(ee, e.uri) && ee.metadata?.composerId)?.metadata?.composerId;
        return J ? K.filter((ne)=>ne.metadata?.composerId === J) : K;
    }), p = Oe(()=>{
        const Y = h();
        return Y.length === 0 ? [] : Y.sort((Z, K)=>{
            const J = Z.metadata?.createdAt, ne = K.metadata?.createdAt;
            return J !== void 0 && ne !== void 0 ? J < ne ? -1 : 1 : pl.isEqual(Z.uri, K.uri) ? Z.currentRange.startLineNumber - K.currentRange.startLineNumber : Z.uri.toString() < K.uri.toString() ? -1 : 1;
        }).flatMap((Z)=>Z.changes.slice().sort((K, J)=>K.addedRange.startLineNumber - J.addedRange.startLineNumber).map((K)=>({
                    uri: Z.uri,
                    startLineNumber: Z.currentRange.startLineNumber + K.addedRange.startLineNumber - 1
                })));
    }), g = qS(t.aiService.inprogressAIGenerations), f = Oe(()=>{
        const Y = h();
        if (Y.length === 0 || !e.uri) return !1;
        const Z = g();
        return Y.some((K)=>Z.some((J)=>J.generationUUID === K.metadata?.generationId && e.uri !== void 0 && Rq(K, e.uri) && J.metadata?.type !== "composer"));
    }), v = Oe(()=>e.uri ? p().filter((Y)=>e.uri !== void 0 && Rq({
                uri: Y.uri
            }, e.uri)) : []), b = Oe(()=>{
        const Y = h();
        return hnr(Y.map((K)=>({
                uri: K.uri,
                currentRange: K.currentRange,
                createdAt: K.metadata?.createdAt
            }))).map((K)=>K.toString());
    }), y = ()=>{
        t.commandService.executeCommand(n5n, e.editor);
    }, T = ()=>{
        e.editor.focus(), t.commandService.executeCommand(Oqt);
    }, E = ()=>{
        if (e.uri) return h().find((Y)=>e.uri !== void 0 && Rq(Y, e.uri));
    }, A = async ()=>{
        const Y = E();
        Y && (await t.diffChangeSourceRegistry.accept(Y.id), await U4e(t));
    }, R = async ()=>{
        const Y = h().map((Z)=>Z.id);
        for (const Z of Y)await t.diffChangeSourceRegistry.accept(Z, {
            sourceContext: "editor"
        });
        await U4e(t);
    }, D = ()=>{
        const Y = E();
        Y && t.diffChangeSourceRegistry.reject(Y.id);
    }, [P, N] = Ut(0), [O, F] = Ut(0), H = ()=>{
        if (!q()) {
            N(0), F(0);
            return;
        }
        if (F2.get(e.editor)) {
            const Z = e.uri, K = h().filter((re)=>Z !== void 0 && Rq(re, Z)).flatMap((re)=>re.changes.map((ue)=>({
                        startLineNumber: re.currentRange.startLineNumber + ue.addedRange.startLineNumber - 1,
                        endLineNumber: re.currentRange.startLineNumber + ue.addedRange.endLineNumberExclusive - 1,
                        startColumn: 1,
                        endColumn: 1
                    }))), J = K.length;
            F(J);
            const ne = e.editor.getPosition(), ee = e.editor.getVisibleRanges();
            let se = -1;
            if (ne && ee.some((re)=>re.containsPosition(ne)) && (se = K.findIndex((re)=>ne.lineNumber >= re.startLineNumber && ne.lineNumber <= re.endLineNumber)), se === -1 && ee.length > 0) {
                const re = Math.floor((ee[0].startLineNumber + ee[ee.length - 1].endLineNumber) / 2);
                se = K.reduce((ue, ce, de)=>Math.abs(ce.startLineNumber - re) < Math.abs(K[ue].startLineNumber - re) ? de : ue, 0);
            }
            se === -1 && ee.length > 0 && (se = K.findIndex((re)=>re.startLineNumber >= ee[0].startLineNumber && re.endLineNumber <= ee[ee.length - 1].endLineNumber)), N(se + 1);
        }
    };
    Jt(()=>{
        if (q()) {
            H();
            const Y = e.editor.onDidScrollChange(H), Z = e.editor.onDidChangeCursorPosition(H), K = e.editor.onDidChangeModelContent(H);
            An(()=>{
                Y.dispose(), Z.dispose(), K.dispose();
            });
        } else N(0), F(0);
    });
    const $ = (Y = !1)=>{
        const Z = F2.get(e.editor);
        if (Z) {
            const K = Y ? P() : void 0;
            Z.navigateToChange("previous", K), H();
        }
    }, W = (Y = !1)=>{
        const Z = F2.get(e.editor);
        if (Z) {
            const K = Y ? P() : void 0;
            Z.navigateToChange("next", K), H();
        }
    }, G = ()=>{
        e.editor.focus(), t.commandService.executeCommand(Fqt);
    }, q = Oe(()=>e.uri ? h().some((Y)=>e.uri !== void 0 && Rq(Y, e.uri)) : !1), z = ()=>{
        const Y = F2.get(e.editor);
        if (Y) {
            const Z = P();
            Z > 0 && Z <= O() && Y.focusOnCurrentChange(Z);
        }
    }, X = Oe(()=>{
        if (!e.uri) return;
        const Z = b().findIndex((K)=>K === e.uri?.toString());
        return Z === -1 ? void 0 : Z;
    });
    return pe(kl_, {
        get shouldShowInEditorContext () {
            return c();
        },
        get isGenerating () {
            return f();
        },
        get inlineDiffs () {
            return h();
        },
        get changesInCurrentFile () {
            return v();
        },
        get uniqueFileUris () {
            return b();
        },
        get uri () {
            return e.uri;
        },
        get fileIndexInInlineDiffs () {
            return X();
        },
        onCancelGeneration: y,
        onNavigateToPreviousFile: T,
        onAcceptChanges: A,
        onAcceptAllOutstandingChanges: R,
        onRejectChanges: D,
        onNavigateToPreviousChange: ()=>$(!0),
        onNavigateToNextChange: ()=>W(!0),
        onNavigateToCurrentChange: z,
        onNavigateToNextFile: G,
        get acceptKeybinding () {
            return n();
        },
        get rejectKeybinding () {
            return i();
        },
        get nextChangeKeybinding () {
            return r();
        },
        get previousChangeKeybinding () {
            return s();
        },
        get nextFileKeybinding () {
            return o();
        },
        get previousFileKeybinding () {
            return a();
        },
        get currentVisibleChange () {
            return P();
        },
        get totalChanges () {
            return O();
        },
        get composerHandle () {
            return t.composerDataService.selectedComposerHandle;
        }
    });
}
function LFh(e, t, n, i) {
    return Jy(()=>{
        const r = t.getURI();
        return pe(Cl_, {
            uri: r,
            editor: i
        });
    }, e, n);
}
function Tl_(e, t, n) {
    return Jy(()=>{
        const [i, r] = Ut(n.getModel()?.uri), s = n.onDidChangeModel(()=>r(n.getModel()?.uri));
        return An(()=>s.dispose()), pe(wt, {
            get when () {
                return i();
            },
            children: (o)=>pe(vl_, {
                    editor: n,
                    get uri () {
                        return o();
                    }
                })
        });
    }, e, t);
}
var pnt, bnr;
export { Cl_, LFh, Pd, Tl_, bFh, bnr, kl_, pnt, s5n, vFh, vl_, xFh, yFh, yl_ };
var __wakaru_NFh_initialized = false;
export function NFh() {
if (__wakaru_NFh_initialized) return;
__wakaru_NFh_initialized = true;
"use strict";
x(), yc(), qC(), Se(), Ze(), Ha(), en(), Ex(), bt(), li(), dn(), Ku(), Vn(), ci(), nl(), K3(), p_e(), CN(), lU(), QTv(), El_(), pnt = class extends we {
    constructor(e, t, n, i, r, s, o){
        super(), this._instantiationService = t, this._reactiveStorageService = n, this._contextKeyService = i, this._diffChangeSourceRegistry = r, this._composerDataService = s, this._storageService = o, this._editor = e, this._breadcrumbsControlsDispose = this._register(new cn), this.reactiveStorageRoot = this._register(this._reactiveStorageService.createScoped(this)), this._widget = new Yf(()=>{
            const g = this._register(this._instantiationService.createInstance(bnr, this._editor));
            return this._register(g.onClick((f)=>{})), g;
        });
        const a = NO.inPeekEditor.getValue(this._contextKeyService), c = this._editor.getDomNode(), l = Array.from(c?.classList.values() ?? []).find((g)=>g.includes("monaco-diff-editor")), h = c?.getAttribute("data-uri")?.startsWith("output:");
        if (!a && !l && !h) {
            const g = Th(this._storageService, "reviewControlLocation");
            this._register(g);
            const f = ()=>{
                const E = this._editor.getContainerDomNode()?.closest(".editor-group-container"), A = E?.querySelector(".title"), R = E?.querySelector(".label-container"), D = !!(A && A.classList.contains("breadcrumbs")), P = E?.querySelector(".breadcrumbs-below-tabs"), N = E?.querySelector(".breadcrumbs-below-tabs .breadcrumbs-control"), O = !!(N && !N.classList.contains("hidden")), F = D || O, H = this._diffChangeSourceRegistry.getDescriptors().filter((X)=>X.metadata?.source === Fee).filter((X)=>!this._composerDataService.isWorktreeComposer(X.metadata?.composerId)).filter((X)=>!sPe(X.uri)).length > 0, $ = g.get() === "breadcrumb", W = this._editor.getModel()?.uri?.scheme === gt.git;
                H && !W && (!$ || !F) ? this._widget.value.show() : this._widget.value.hide();
                const q = D ? R || void 0 : P || void 0;
                if ($ && H && F && !!q && q) {
                    const X = this._editor.hasTextFocus() || this._editor.hasWidgetFocus(), Y = E?.querySelector("[data-breadcrumb-review-controls]");
                    if (!(X || !Y)) return;
                    A && A.classList.contains("breadcrumbs") && !A.classList.contains("has-review-controls") && A.classList.add("has-review-controls");
                    const K = q.querySelector(".breadcrumbs-control");
                    let J = q.querySelector(".breadcrumbs-row");
                    J ? K && K.parentElement !== J && J.appendChild(K) : (J = document.createElement("div"), J.className = "breadcrumbs-row", K && K.parentElement ? (K.parentElement.insertBefore(J, K), J.appendChild(K)) : q.appendChild(J)), X && Y && Y !== this._breadcrumbsControlsContainer && Y.remove();
                    let ne = !this._breadcrumbsControlsDispose.value;
                    (!this._breadcrumbsControlsContainer || !this._breadcrumbsControlsContainer.isConnected) && (this._breadcrumbsControlsDispose.clear(), ne = !0, this._breadcrumbsControlsContainer = document.createElement("div"), this._breadcrumbsControlsContainer.setAttribute("data-breadcrumb-review-controls", "true")), this._breadcrumbsControlsContainer.parentElement !== J && J.appendChild(this._breadcrumbsControlsContainer), ne && (this._breadcrumbsControlsDispose.value = Tl_(this._breadcrumbsControlsContainer, this._instantiationService, this._editor));
                    try {
                        const ee = q.querySelector(".breadcrumbs-control.relative-path .monaco-breadcrumbs");
                        if (ee) {
                            const se = xi(ee);
                            se.requestAnimationFrame(()=>{
                                se.requestAnimationFrame(()=>{
                                    ee.scrollLeft = ee.scrollWidth;
                                });
                            });
                        }
                    } catch (ee) {
                        console.error("Error ensuring breadcrumbs scroll to the end for review controls", ee);
                    }
                } else this._clearBreadcrumbReviewControls();
            };
            this._register(this._diffChangeSourceRegistry.onDidChange(f)), g.recomputeInitiallyAndOnChange(this._store, f);
            const v = Th(this._storageService, "unifiedAppLayout");
            this._register(v), v.recomputeInitiallyAndOnChange(this._store, f), this.reactiveStorageRoot.onChangeEffect({
                deps: [
                    ()=>this._reactiveStorageService.applicationUserPersistentStorage.hideChatEditTooltip
                ],
                onChange: f
            }), this._register(this._editor.onDidChangeModel(()=>{
                this._widget.value.rerender();
            }));
            const b = this._editor.getContainerDomNode()?.closest(".editor-group-container"), y = b?.querySelector(".title");
            y && this._register(M7.observe(y, this._store, {
                attributes: !0,
                attributeFilter: [
                    "class"
                ]
            })(f));
            const T = b?.querySelector(".breadcrumbs-below-tabs");
            T && this._register(M7.observe(T, this._store, {
                subtree: !0,
                attributes: !0,
                attributeFilter: [
                    "class"
                ]
            })(f)), this._widget.value.rerender(), f();
        }
    }
    static get(e) {
        return e.getContribution(pnt.ID);
    }
    _clearBreadcrumbReviewControls() {
        this._breadcrumbsControlsDispose.clear(), this._breadcrumbsControlsContainer?.parentElement && this._breadcrumbsControlsContainer.remove(), this._breadcrumbsControlsContainer = void 0;
        const e = this._editor.getContainerDomNode()?.closest(".editor-group-container")?.querySelector(".title");
        e?.classList.contains("has-review-controls") && e.classList.remove("has-review-controls");
    }
    dispose() {
        this._clearBreadcrumbReviewControls(), super.dispose();
    }
}, pnt.ID = "aiFullFilePromptBar", pnt = ie([
    C(1, _t),
    C(2, Do),
    C(3, xn),
    C(4, D$),
    C(5, Zs),
    C(6, yn)
], pnt), bnr = class extends we {
    constructor(e, t, n, i){
        super(), this._editor = e, this.reactiveStorageService = t, this.workspaceContextService = n, this.instantiationService = i, this.allowEditorOverflow = !0, this._onClick = this._register(new ve), this.onClick = this._onClick.event, this.isWordWrap = !1, this._renderSlot = this._register(new cn), this._domNode = Ve("div.aiFullFilePromptBarWidget"), this._domNode.style.width = "100%", this._domNode.style.boxSizing = "border-box", this._domNode.style.pointerEvents = "none", this._domNode.style.display = "flex", this._domNode.style.justifyContent = "center", this._domNode.style.zIndex = "1000", this._offsetDomNode = Ve("div"), this._offsetDomNode.style.width = "100%", this._offsetDomNode.style.display = "flex", this._offsetDomNode.style.justifyContent = "center", this._offsetDomNode.style.alignItems = "center", this._offsetDomNode.style.boxSizing = "border-box", this._offsetDomNode.style.position = "relative", this._offsetDomNode.style.zIndex = "2530", this._domNode.appendChild(this._offsetDomNode), this._register(this._editor.onMouseMove((r)=>{
            this._isMouseInEditor(r) && this._applyHoverEffect();
        })), this._register(this._editor.onMouseLeave(()=>{
            this._editor.hasTextFocus() || this._removeHoverEffect();
        })), this._register(this._editor.onDidFocusEditorText(()=>{
            this._applyHoverEffect();
        })), this._register(this._editor.onDidBlurEditorText(()=>{
            this._removeHoverEffect();
        })), this._register(zT.ignoreTarget(this._domNode)), this._editor.addOverlayWidget(this), this._renderSlot.value = LFh(this._offsetDomNode, this, this.instantiationService, this._editor), this._register(this._editor.onDidChangeModelContent(()=>{
            this._editor.layoutOverlayWidget(this);
        }));
    }
    _isMouseInEditor(e) {
        return !e.target || e.target.type === 0 ? !1 : e.target.type !== 13;
    }
    rerender() {
        this._renderSlot.clear(), this._renderSlot.value = LFh(this._offsetDomNode, this, this.instantiationService, this._editor);
    }
    getId() {
        return "aiFullFilePromptBarWidget";
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return {
            preference: 3
        };
    }
    getURI() {
        const e = this._editor.getModel()?.uri;
        if (e?.path) return e;
    }
    show() {
        this._editor.getModel()?.uri?.scheme !== gt.git && (this._domNode.style.display = "block");
    }
    hide() {
        this._domNode.style.display = "none";
    }
    update() {
        this.rerender();
    }
    _applyHoverEffect() {
        this._domNode.classList.contains("editor-hover") || this._domNode.classList.add("editor-hover");
    }
    _removeHoverEffect() {
        this._domNode.classList.contains("editor-hover") && this._domNode.classList.remove("editor-hover");
    }
    dispose() {
        this._renderSlot.clear(), super.dispose();
    }
}, bnr = ie([
    C(1, Do),
    C(2, Jn),
    C(3, _t)
], bnr), pp(pnt.ID, pnt, 3);

}
