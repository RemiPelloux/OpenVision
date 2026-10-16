import { $i, Me, Pl, WHt, Wse, fs, nGi, oa, wao, xA } from "./A3u.js";
import { VHh } from "./AgentContextTabDirtyIndicator.js";
import { aVh, cVh, cy_, dVh, hVh, lVh, oVh, sVh } from "./CursorBlamePane.js";
import { ANo, DNo, KGh, QGh, RNo, XGh, YGh, ZGh, lsr, qGh, zGh } from "./CursorDiffPane.js";
import { Fmv, T1, UMe } from "./De_3.js";
import { Rg } from "./ECo.js";
import { Cl, He, cn, l1, rn, ve } from "./HVr.js";
import { bGh } from "./ReviewChangesEllipsisMenu.js";
import { JHh, aWh, cNo, cWh, eWh, iWh, lWh, nWh, oWh, rWh, sWh, tWh, uWh } from "./ReviewChangesFileItem.js";
import { dWh, fWh, gWh, hWh, lNo, mWh, pWh, uNo } from "./ReviewChangesFileList.js";
import { EWh, IWh } from "./ReviewChangesFindWidget.js";
import { EGh, IGh, TGh, xGh } from "./ReviewChangesMarkdownDescription.js";
import { _te, sP } from "./ReviewChangesResource.js";
import { y9n } from "./ReviewChangesResourceManager.js";
import { $Gh, AGh, BGh, DGh, ENo, FGh, GGh, HGh, INo, LGh, MGh, NGh, OGh, PGh, RGh, UGh, VGh, WGh, jGh, xNo } from "./ReviewChangesSummaryHeader.js";
import { Vc, er } from "./actions.js";
import { aLe } from "./agentAnalyticsOperationsService.js";
import { pnt } from "./aiFullFilePromptBarContribution.js";
import { db } from "./backendClient.js";
import { BIh } from "./cloudAgentPrStatePoller.js";
import { Iw } from "./codeEditorWidget.js";
import { Pe } from "./codicons.js";
import { $n } from "./commands.js";
import { CK } from "./constants_8.js";
import { Fx } from "./contentHoverController.js";
import { Lv } from "./contextView.js";
import { xn } from "./contextkey.js";
import { dMo } from "./conversations_connectweb.js";
import { cWi, hro, lWi } from "./conversations_pb.js";
import { iVh } from "./cursorBlameUtils.js";
import { eNo } from "./diffCommentViewZoneManager.js";
import { rN } from "./diffEditorWidget.js";
import { aNo, oNo } from "./diffMentionUtils.js";
import { nNo } from "./discussionUtils.js";
import { Bgi, Gb, xi } from "./dom_2.js";
import { zC } from "./editorExtensions.js";
import { ib } from "./editorService.js";
import { Kr } from "./experimentService.js";
import { Ig } from "./files.js";
import { v9n } from "./focusedPromptTarget.js";
import { Yjt } from "./githubPRService.js";
import { GLo, VLo } from "./glassAddToChat.js";
import { Aoe } from "./glyphHoverController.js";
import { va } from "./hover.js";
import { V8e } from "./hoverContributions.js";
import { wl } from "./hoverWidget.js";
import { Ec } from "./htmlContent.js";
import { csr } from "./htmlFindWidget.js";
import { qr } from "./keybinding.js";
import { gu } from "./keyboardEvent.js";
import { vee } from "./linesDiffComputers.js";
import { TNo, kGh, wGh } from "./markdownUtils.js";
import { qFh } from "./modelNameDisplayLookup.js";
import { nU } from "./model_2.js";
import { Gd } from "./network.js";
import { GFh, VFh, WFh, oRo } from "./pureIcon.js";
import { $ht, An, Bd, Bwn, DJ, Fwn, GDc, Jt, Kc, L3c, Lh, Oe, Omn, Oze, Rn, Sv, Swe, Uht, Ut, Xt, fk, lr, mKc, p5, pe, qS, qT, sa, t2, tm, wt } from "./qIc.js";
import { dt } from "./range.js";
import { ha, wv } from "./renderInlineDiffPartialWidget.js";
import { Q1, mwe } from "./scrollable.js";
import { C2h } from "./scrollableContext.js";
import { E2h, Iqt, T2h, Vtr, dAo, fAo, gAo, hAo, jtr, mAo, pAo } from "./scrollableDiv.js";
import { a9c } from "./scrollableElement.js";
import { KBn, dTe, i2h, qIo, r2h, zIo } from "./solidContext.js";
import { KOh, Ww, YOh, jOh, zOh } from "./solid_2.js";
import { BHh, FHh } from "./spinningLoader_2.js";
import { Ft } from "./themables.js";
import { x } from "./tslib.es6.js";
import { Ee } from "./uri.js";
import { iB } from "./useComposerHoverTooltip.js";
import { rsr } from "./useFileDirtiness.js";
import { KHh, Vzt, jHh, qHh, zHh } from "./useFileMarkers.js";
import { dRo } from "./useIsUsingFileIconTheme.js";
import { ir } from "./useKeyboardShortcut.js";
import { rNo, sNo } from "./useResourceLineCounts.js";
import { WOh } from "./utils_26.js";
import { zn } from "./uuid.js";
import { hRo } from "./vsMarkdown.js";
import { $e, Lr } from "./web.js";
import { EX } from "./webConstants.js";
import { on } from "./window.js";
function zr_(e) {
    try {
        let t = e;
        return e.includes("@") && !e.startsWith("http") && (e.startsWith("ssh://") || (t = e.replace(/^([^@]+)@([^:]+):(.*)/, "ssh://$1@$2/$3"))), new URL(t);
    } catch  {
        return null;
    }
}
function Fer(e) {
    if (!e) return;
    const t = e.replace("https///", "https://").replace("http///", "http://");
    if (t.startsWith("gitlab-remote://")) try {
        const l = new URL(t).searchParams.get("project");
        if (l) return l.includes("/") ? l : void 0;
    } catch  {}
    const n = zr_(t);
    if (!n) return;
    const i = n.hostname.toLowerCase(), r = n.pathname.split("/").filter((c)=>c.length > 0);
    if (r.length > 0 && r[r.length - 1].endsWith(".git") && (r[r.length - 1] = r[r.length - 1].slice(0, -4)), i === "dev.azure.com" || i === "ssh.dev.azure.com" || i.endsWith(".visualstudio.com")) {
        const c = [
            ...r
        ];
        i === "ssh.dev.azure.com" && c.length > 0 && c[0].toLowerCase() === "v3" && c.shift();
        const l = c.filter((u)=>u.toLowerCase() !== "_git");
        return l.length >= 1 ? l.join("/") : void 0;
    }
    if (i.includes("github") || i.endsWith(".ghe.com")) return r.length >= 2 ? r.slice(0, 2).join("/") : void 0;
    if (i.includes("gitlab")) return r.length >= 1 ? r.join("/") : void 0;
    if (i.includes("bitbucket") || i.includes("stash")) return r.length >= 3 && r[0].toLowerCase() === "scm" ? r.slice(1, 3).join("/") : r.length >= 2 ? r.slice(0, 2).join("/") : void 0;
    const o = i.includes("gerrit"), a = r.length > 0 && r[0].toLowerCase() === "gerrit";
    if (o || a) {
        const c = [
            ...r
        ];
        return a && c.shift(), c.length > 0 && c[0].toLowerCase() === "a" && c.shift(), c.length >= 1 ? c.join("/") : void 0;
    }
    if (r.length >= 2) return r.slice(0, 2).join("/");
}
function a0t() {
    return ir();
}
function O2(e, t, n = globalThis) {
    const i = n.requestAnimationFrame((s)=>{
        e(s), r.dispose();
    }), r = rn(()=>{
        n.cancelAnimationFrame(i), t?.delete(r);
    });
    return t?.add(r), r;
}
function yc_(e) {
    const t = {
        get suppressAutoScroll () {
            return e.suppressAutoScroll;
        },
        get scrollElementIntoView () {
            return e.scrollElementIntoView;
        }
    };
    return pe(C2h.Provider, {
        value: t,
        get children () {
            return e.children;
        }
    });
}
function Y6(e) {
    const t = lr(()=>e.scrollable), n = lr(()=>e.stableScrollable), i = t === void 0, r = t ?? xqt(n), s = new He;
    Jt(()=>{
        e.setScrollableRef?.(r), An(()=>{
            e.setScrollableRef?.(void 0);
        });
    }), An(()=>{
        i && r.dispose(), s.dispose();
    });
    const o = e.smoothScrollDuration;
    o && r.setSmoothScrollDuration(o);
    let a, c, l = {
        value: void 0
    };
    const u = sa()?.ResizeObserver;
    let h = 0;
    const p = Rg(), g = ha(p, gAo), f = (se)=>{
        p.set(gAo, se);
    }, v = ha(p, dAo), b = (se)=>{
        p.set(dAo, se);
    };
    let y, T;
    const E = ()=>{
        e.onlyShowScrollbarOnScroll && (b(!0), y && clearTimeout(y), y = window.setTimeout(()=>{
            b(!1);
        }, 1e3)), e.onScroll?.();
    }, A = Oe(()=>v() ? "is-scrolling" : "");
    An(()=>{
        y && clearTimeout(y), T && clearTimeout(T);
    });
    const R = ()=>{
        p.set(Vtr, !0), T && clearTimeout(T), T = window.setTimeout(()=>{
            p.set(Vtr, !1), T = void 0;
        }, 300);
    }, D = (se, re)=>{
        if (!l.value) return;
        const ue = re?.block ?? "nearest", ce = l.value.getBoundingClientRect(), de = se.getBoundingClientRect(), le = r.getCurrentScrollPosition().scrollTop, ye = de.top - ce.top + le, _e = ye + de.height, me = ce.height;
        let Ce;
        if (ue === "start") Ce = ye;
        else if (ue === "end") Ce = _e - me;
        else if (ue === "center") Ce = ye - me / 2 + de.height / 2;
        else {
            const Le = de.top < ce.top, Be = de.bottom > ce.bottom;
            if (!Le && !Be) return;
            Le ? Ce = ye : Ce = _e - me;
        }
        const xe = Math.max(0, r.getScrollHeight() - me);
        Ce = Math.max(0, Math.min(Ce, xe)), r.setScrollPositionNow({
            scrollTop: Ce
        });
    };
    Jt(()=>{
        e.scrollingDirection === "vertical" ? f({
            display: "block",
            width: "100%",
            "min-height": "100%"
        }) : e.scrollingDirection === "horizontal" ? f({
            height: "100%",
            "min-width": "100%"
        }) : f(void 0);
    });
    const P = e.triggerOnHeightChange, N = ha(p, Iqt), O = Oe(()=>{
        const se = e.onScroll;
        return ()=>{
            if (!a) return;
            const re = N().scrollHeight;
            let ue = !0;
            re !== h ? (h = re, ue = P ?? !1) : H(), ue && se && se();
        };
    }), F = ()=>{
        if (!l.value) return !1;
        const { height: se } = N(), { scrollHeight: re } = r.getScrollDimensions(), { scrollTop: ue } = r.getCurrentScrollPosition();
        return ue + se >= re - 4;
    }, H = ()=>{
        p.set(hAo, F());
    }, $ = ()=>{
        o ? r.setScrollPositionSmooth({
            scrollTop: r.getScrollHeight()
        }) : r.setScrollPositionNow({
            scrollTop: r.getScrollHeight()
        });
    };
    Jt(Sv(()=>e.scrollToBottomTrigger, (se)=>{
        se !== void 0 && e.autoScrollToBottom !== !1 && setTimeout(()=>{
            $();
        }, 0);
    }));
    let W = 0;
    const G = new cn, q = 200, z = ()=>{
        if (G.clear(), !a) return;
        const se = a.getBoundingClientRect(), re = N();
        (Math.abs(se.height - re.scrollHeight) > 1 || Math.abs(se.width - re.scrollWidth) > 1) && p.set(jtr, {
            scrollWidth: se.width,
            scrollHeight: se.height
        });
    };
    An(()=>{
        G.dispose();
    }), r.onScroll((se)=>{
        if (O()(), E(), !!l.value && (se.scrollTopChanged && (l.value.scrollTop = se.scrollTop), se.scrollLeftChanged && (l.value.scrollLeft = se.scrollLeft), a && se.scrollTopChanged)) {
            const re = Date.now();
            !G.value && re - W > q && (W = re, G.value = O2(z, void 0, xi(a)));
        }
    }, void 0, s), Jt(Sv(()=>e.resetScrollable, ()=>{
        r.setScrollPositionNow({
            scrollLeft: 0,
            scrollTop: 0
        });
    })), Jt(Sv(()=>e.resetScrollableSize, ()=>{
        if (!a) return;
        const se = a.parentElement;
        if (!se) return;
        const re = a.getBoundingClientRect(), ue = se.getBoundingClientRect();
        r.setScrollDimensions({
            width: ue.width,
            height: ue.height,
            scrollWidth: re.width,
            scrollHeight: re.height
        }, !0);
    })), Jt(()=>{
        e.onlyShowScrollbarOnScroll && b(!1);
    }), Kc(()=>{
        const se = new u((re)=>{
            const ue = re[0];
            if (!ue) return;
            const { width: ce, height: de } = ue.contentRect;
            p.set(jtr, {
                scrollWidth: ce,
                scrollHeight: de
            });
        });
        if (a) {
            const re = a, ue = $ht(re), ce = Omn(re);
            p.set(jtr, {
                scrollWidth: ue,
                scrollHeight: ce
            }), se.observe(a);
        }
        An(()=>{
            se.disconnect();
        });
    });
    const X = ha(p, pAo), Y = (se)=>{
        p.set(pAo, se);
    };
    Kc(()=>{
        const se = new IntersectionObserver((re)=>{
            const ue = re.at(-1)?.isIntersecting ?? !1;
            Y(ue);
        }, {
            threshold: 0
        });
        c && se.observe(c), An(()=>{
            se.disconnect();
        });
    }), Kc(()=>{
        const se = new u((re)=>{
            for (const ue of re){
                const { width: ce, height: de } = ue.contentRect, le = Math.round(ce), ye = Math.round(de);
                l.value && (e.scrollingDirection === "horizontal" ? l.value.style.width = `${le}px` : e.scrollingDirection === "vertical" ? l.value.style.height = `${ye}px` : (l.value.style.width = `${le}px`, l.value.style.height = `${ye}px`)), p.set(fAo, {
                    width: ce,
                    height: de
                });
            }
        });
        if (c) {
            const re = $ht(c), ue = Omn(c);
            p.set(fAo, {
                width: re,
                height: ue
            }), se.observe(c);
        }
        An(()=>{
            se.disconnect();
        });
    });
    const Z = ha(p, mAo), K = (se)=>{
        p.set(mAo, se);
    };
    Jt(()=>{
        if (X()) {
            r.setScrollDimensions(N(), !0), !Z() && e.initialScrollPosition === "bottom" && (r.setScrollPositionNow({
                scrollTop: Number.MAX_SAFE_INTEGER
            }), K(!0));
            const se = e.scrollToBottomOnContainerHeightChange ? F() : !1;
            e.scrollToBottomOnContainerHeightChange && se && $();
        }
    }), Kc(()=>{
        let se = !1;
        const re = new cn, ue = new u(()=>{
            if (!e.autoScrollToBottom) return;
            const ce = p.get(hAo), de = p.get(Vtr);
            re.value = O2(()=>{
                if (se) return;
                H(), ce && !de && $();
            });
        });
        a && ue.observe(a), An(()=>{
            se = !0, ue.disconnect(), re.dispose();
        });
    });
    const J = Oe(()=>e.scrollingDirection === "both" ? {
            overflow: "hidden"
        } : e.scrollingDirection === "horizontal" ? {
            overflowX: "hidden",
            height: "100%"
        } : {
            overflowY: "hidden",
            width: "100%"
        }), ne = Oze(()=>pe(yc_, {
            suppressAutoScroll: R,
            scrollElementIntoView: D,
            get children () {
                var se = T2h(), re = se.firstChild;
                return Pl((ue)=>{
                    l.value = ue, e.setScrollContainerRef?.(ue), ue && ue.addEventListener("scroll", ()=>{
                        const ce = r.getCurrentScrollPosition().scrollTop;
                        ue.scrollTop !== ce && r.setScrollPositionNow({
                            scrollTop: ue.scrollTop
                        });
                    });
                }, se), Wse(se, fk({
                    get style () {
                        return {
                            ...J(),
                            ...e.contentStyle
                        };
                    }
                }, ()=>e.innerContainerDivProps), !1, !0), Pl((ue)=>{
                    a = ue, e.setInnerContainerRef?.(ue);
                }, re), Me(re, ()=>e.children), Rn((ue)=>{
                    var ce = {
                        display: "inline-block",
                        ...g() ?? {},
                        ...e.innerContainerStyle ?? {}
                    }, de = e.innerContainerClass;
                    return ue.e = oa(re, ce, ue.e), de !== ue.t && $i(re, ue.t = de), ue;
                }, {
                    e: void 0,
                    t: void 0
                }), se;
            }
        }))(), ee = new a9c(ne, {
        mouseWheelSmoothScroll: !1,
        ...e.nonReactiveElementOptions ?? {}
    }, r);
    if (s.add(ee), e.childStyle) for (const [se, re] of Object.entries(e.childStyle)){
        const ue = se;
        ee.getDomNode().style[ue] = re;
    }
    return Jt(()=>{
        e.disableScroll ? ee.updateOptions({
            horizontal: Q1.Hidden,
            vertical: Q1.Hidden,
            handleMouseWheel: !1
        }) : ee.updateOptions({
            horizontal: e.scrollingDirection === "horizontal" || e.scrollingDirection === "both" ? Q1.Auto : void 0,
            vertical: e.scrollingDirection === "vertical" || e.scrollingDirection === "both" ? Q1.Auto : void 0,
            handleMouseWheel: !0
        });
    }), Jt(()=>{
        e.disableAutoSizing || (e.scrollingDirection === "horizontal" ? (ee.getDomNode().style.height = "100%", ee.getDomNode().style.width = "unset") : e.scrollingDirection === "vertical" ? (ee.getDomNode().style.width = "100%", ee.getDomNode().style.height = "unset") : (ee.getDomNode().style.width = "unset", ee.getDomNode().style.height = "unset"));
    }), Jt(()=>{
        e.reactiveElementOptions && ee.updateOptions(e.reactiveElementOptions);
    }), Kc(()=>{
        if (!c) return;
        const se = Bgi(c), re = xi(c), ue = new He;
        let ce, de = rn(()=>{}), le, ye;
        const _e = (Le)=>{
            if (!ce && c) {
                const Be = Uht(c).top;
                ce = GDc(re, ()=>{
                    me(Be);
                });
            }
            de.dispose(), de = Cl(()=>{
                ce && (ce.dispose(), ce = void 0);
            }, 1e3), le = Le.pageY;
        }, me = (Le)=>{
            if (le === void 0 || !l.value) return;
            const Be = le - Le, Ge = l.value.getBoundingClientRect().height - 35, Xe = 35;
            if (Be < Xe) {
                const Ke = Math.max(-14, Math.floor(.3 * (Be - Xe))), et = r.getCurrentScrollPosition();
                r.setScrollPositionNow({
                    scrollTop: et.scrollTop + Ke
                });
            } else if (Be > Ge) {
                const Ke = Math.min(14, Math.floor(.3 * (Be - Ge))), et = r.getCurrentScrollPosition();
                r.setScrollPositionNow({
                    scrollTop: et.scrollTop + Ke
                });
            }
        }, Ce = ()=>{
            ce && (ce.dispose(), ce = void 0), de.dispose(), le = void 0;
        }, xe = (Le)=>{
            const Be = Le.target;
            Be && Be instanceof Element && Be.closest(".full-input-box") || (ye && ye.dispose(), ye = new He, ye.add(Xt(se, "mousemove", (je)=>{
                const Ge = se.getSelection();
                Ge && !Ge.isCollapsed && _e(je);
            })), ye.add(Xt(se, "mouseup", ()=>{
                ye && (ye.dispose(), ye = void 0), Ce();
            })));
        };
        ue.add(Xt(c, "selectstart", xe)), An(()=>{
            ue.dispose(), ye && ye.dispose(), ce && ce.dispose(), de.dispose();
        });
    }), (()=>{
        var se = E2h();
        return Pl((re)=>{
            c = re, e.setContainerRef?.(re);
        }, se), Me(se, ()=>ee.getDomNode()), Rn((re)=>{
            var ue = `scrollable-div-container ${e.class} ${e.onlyShowScrollbarOnHover ? "show-only-on-hover" : ""} ${e.onlyShowScrollbarOnScroll ? "show-only-on-scroll" : ""} ${e.roundedScrollbar ? "rounded-scrollbar" : ""} ${A()}`, ce = {
                ...e.style
            };
            return ue !== re.e && $i(se, re.e = ue), re.t = oa(se, ce, re.t), re;
        }, {
            e: void 0,
            t: void 0
        }), se;
    })();
}
function wc_(e) {
    const t = a0t();
    return {
        forceIntegerValues: !1,
        smoothScrollDuration: 0,
        scheduleAtNextAnimationFrame: (n)=>Gb(t.window, n),
        stickyScrollVertical: e ? "down" : void 0
    };
}
function xqt(e) {
    return new mwe(wc_(e));
}
function Qc_(e) {
    return !i2h.includes(e);
}
function Jy(e, t, n, i) {
    const r = on.document.createElement("div");
    return r.style.height = "100%", r.style.width = "100%", i?.additionalStyles && Object.assign(r.style, i.additionalStyles), n.invokeFunction((s)=>{
        const o = s.get(Kr), a = zOh(), c = i?.restrictToServices ?? Object.keys(a), l = new He, u = new Set(c), h = new Map, p = (y, T)=>{
            jOh(T) && l.add(y);
        }, g = (y)=>{
            if (Qc_(y)) return n.invokeFunction((E)=>E.get(a[y]));
            const T = a[y](n);
            return p(T, y), T;
        }, f = nGi(()=>L3c(()=>pe(r2h.Provider, {
                    get value () {
                        return {
                            close: i?.onClose
                        };
                    },
                    get children () {
                        return pe(dTe.Provider, {
                            value: {
                                get window () {
                                    return xi(t);
                                },
                                get portalElement () {
                                    if (WOh()) {
                                        const E = sa();
                                        return EX.has(E) || EX.set(E, wao()), EX.get(E) ?? E.document.body;
                                    }
                                    const T = xi(t);
                                    return EX.get(T) ?? T.document.body;
                                },
                                instantiationService: n,
                                [qIo]: u,
                                [KBn]: h,
                                [zIo]: g
                            },
                            get children () {
                                return e();
                            }
                        });
                    }
                }), (y)=>{
                if (!(y instanceof DOMException && y.name === "DataCloneError")) if (y?.message === "Maximum call stack size exceeded") {
                    console.error("RENDERING CALLSTACK SIZE EXCEEDED", y);
                    const T = o.getDynamicConfigParam(KOh, YOh, {
                        disableExposureLog: !0
                    });
                    t2(y, T > 0 ? {
                        attachments: [
                            {
                                filename: "solid-render-max-callstack-stack.txt",
                                data: new TextEncoder().encode(y instanceof Error ? y.stack ?? String(y) : String(y)),
                                contentType: "text/plain"
                            }
                        ]
                    } : void 0);
                } else console.error("ERROR WHEN RENDERING SOLID COMPONENT", y), t2(y);
            }), r);
        return t.appendChild(r), {
            dispose: ()=>{
                f(), r.remove(), l.dispose();
            },
            focus: ()=>{
                r.focus();
            }
        };
    });
}
function Pl_({ path: e, isFolder: t, isGlass: n }) {
    if (t) return {
        kind: "seti"
    };
    const i = Fwn({
        filenameOrExt: e,
        preferred: n ? "cursor-mixed" : "seti"
    });
    return i.variant === "seti" ? {
        kind: "seti"
    } : {
        kind: "cursor",
        iconName: i.iconName,
        unicode: DJ(i.iconName, i.style),
        color: Bwn(i.color)
    };
}
function Ll_(e) {
    return e ? "var(--vscode-activityWarningBadge-background)" : "var(--vscode-errorForeground)";
}
function lhe(e) {
    const t = ir(), n = Oe(()=>e.uri ? e.uri : typeof e.fileName == "string" ? e.workspaceContextService.resolveRelativePath(e.fileName) : e.fileName), i = Oe(()=>e.languageId ? [
            "file-icon",
            `${e.languageId}-lang-file-icon`
        ] : T1(e.modelService, e.languageService, n(), e.fileKind, e.fileKind === Ig.FOLDER ? {
            id: "folder"
        } : void 0)), r = Oe(()=>typeof e.height == "number" ? `${e.height}px` : e.height ? e.height : "18px"), s = Oe(()=>Pl_({
            path: n().path,
            isFolder: e.isFolder === !0 || e.fileKind === Ig.FOLDER,
            isGlass: t.workbenchEnvironmentService.isGlass === !0
        })), o = Oe(()=>{
        const c = s();
        return c.kind === "cursor" ? c : void 0;
    }), a = Oe(()=>{
        if (e.isFolder) return [
            Ft.asClassName(Pe.folderTwo),
            "folder-icon-override !text-[12px] !flex !items-center !justify-center"
        ].join(" ");
        const c = [
            "monaco-icon-label",
            ...i(),
            "height-override-important"
        ];
        return e.innerClass && c.push(e.innerClass), e.class && c.push(e.class), c.join(" ");
    });
    return (()=>{
        var c = WFh(), l = c.firstChild;
        return l.style.setProperty("position", "relative"), l.style.setProperty("height", "100%"), l.style.setProperty("width", "100%"), l.style.setProperty("display", "flex"), l.style.setProperty("align-items", "center"), l.style.setProperty("justify-content", "center"), Me(l, pe(wt, {
            get when () {
                return o();
            },
            get fallback () {
                return (()=>{
                    var u = GFh();
                    return u.style.setProperty("height", "100%"), Rn(()=>$i(u, a())), u;
                })();
            },
            children: (u)=>(()=>{
                    var h = VFh();
                    return h.style.setProperty("--icon-size", "12px"), Rn((p)=>{
                        var g = [
                            "cursor-icon",
                            "ui-icon",
                            e.innerClass,
                            e.class
                        ].filter(Boolean).join(" "), f = u().iconName, v = `"${u().unicode}"`, b = u().color;
                        return g !== p.e && $i(h, p.e = g), f !== p.t && fs(h, "data-icon-name", p.t = f), v !== p.a && ((p.a = v) != null ? h.style.setProperty("--cursor-icon-content", v) : h.style.removeProperty("--cursor-icon-content")), b !== p.o && ((p.o = b) != null ? h.style.setProperty("color", b) : h.style.removeProperty("color")), p;
                    }, {
                        e: void 0,
                        t: void 0,
                        a: void 0,
                        o: void 0
                    }), h;
                })()
        }), null), Me(l, pe(wt, {
            get when () {
                return e.showWarningBadge || e.showErrorBadge;
            },
            get children () {
                return pe(oRo, {
                    get color () {
                        return Ll_(e.showWarningBadge);
                    }
                });
            }
        }), null), Rn((u)=>oa(c, {
                height: r(),
                ...e.style
            }, u)), c;
    })();
}
function aRo(e) {
    return e.toLowerCase().replace(/-/g, ".");
}
function Nl_(e) {
    const t = new Set([
        e
    ]), n = [
        e
    ];
    for(; n.length > 0;){
        const r = n.shift();
        for (const s of qFh){
            if (!r.endsWith(s) || r.length <= s.length) continue;
            const o = r.slice(0, -s.length);
            t.has(o) || (t.add(o), n.push(o));
        }
    }
    const i = [
        ...t
    ];
    return i.sort((r, s)=>s.length - r.length), i;
}
function Ol_(e, t) {
    const n = Nl_(e);
    for (const i of n){
        const r = t.find((s)=>s.name === i || s.serverModelName === i);
        if (r) return r;
    }
    for (const i of n){
        const r = aRo(i), s = t.filter((o)=>{
            const a = aRo(o.name), c = o.serverModelName ? aRo(o.serverModelName) : void 0;
            return a === r || c === r;
        });
        if (s.length === 1) return s[0];
    }
}
function Wqt(e, t, n) {
    if (e.includes(",")) {
        const r = e.split(",").map((a)=>a.trim()), s = [
            ...new Set(r)
        ];
        let o = "";
        for (const a of s){
            const c = r.filter((u)=>u === a).length, l = Wqt(a, t);
            o += c > 1 ? `${c}\xD7${l}` : l, a !== s[s.length - 1] && (o += ", ");
        }
        return o;
    }
    if (e === "default") return "Auto";
    const i = n ?? e;
    if (t) {
        const r = Ol_(i, t);
        if (r?.clientDisplayName) return r.clientDisplayName;
    }
    return e === "gpt-3.5-turbo" ? "gpt-3.5" : i.replace("(MAX)", "").trim();
}
function v0t() {
    const e = ir(), t = Rg(), n = (o)=>{
        t.set(dRo, o);
    }, i = ()=>{
        const o = e.themeService.getFileIconTheme();
        n(o.hasFileIcons);
    };
    i();
    const r = ha(t, dRo), s = e.themeService.onDidFileIconThemeChange(()=>{
        i();
    });
    return An(()=>s.dispose()), r;
}
function c5n(e, t, n, i) {
    if (!t || !e || i !== void 0 && i <= 0) return [];
    let r;
    n.isRegex ? r = t : r = l1(t), n.isWholeWord && (r = `\\b${r}\\b`);
    const s = n.isCaseSensitive ? "g" : "gi";
    let o;
    try {
        o = new RegExp(r, s);
    } catch  {
        return [];
    }
    const a = [];
    let c, l = 0;
    for(; (c = o.exec(e)) !== null;){
        const u = c[0];
        if (a.push({
            matchIndex: l,
            matchText: u,
            matchLength: u.length,
            start: c.index,
            end: c.index + u.length
        }), l++, i !== void 0 && a.length >= i) break;
        u.length === 0 && o.lastIndex++;
    }
    return a;
}
function Ul_(e) {
    const t = e.parentElement;
    if (!t) return !1;
    try {
        const s = xi(t).getComputedStyle(t);
        if (s.display === "none" || s.visibility === "hidden") return !1;
    } catch  {}
    if (t.getRootNode() instanceof ShadowRoot ? null : t.closest("input, textarea, .monaco-editor, .simple-find-part, .html-find-widget-container")) return !1;
    const r = t.tagName.toLowerCase();
    return !(r === "script" || r === "style");
}
function ZFh(e, t, n, i, r) {
    const s = document.createTreeWalker(e, NodeFilter.SHOW_ALL, {
        acceptNode (a) {
            if (a.nodeType === Node.ELEMENT_NODE) return r !== void 0 && a.matches(r) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
            if (a.nodeType === Node.TEXT_NODE) {
                const c = a;
                return n.has(c) || !Ul_(c) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
            }
            return NodeFilter.FILTER_SKIP;
        }
    });
    let o;
    for(; o = s.nextNode();)if (o.nodeType === Node.TEXT_NODE) {
        const a = o, c = a.textContent ?? "";
        c.length > 0 && !n.has(a) && (n.add(a), t.push({
            node: a,
            start: i.value.length,
            end: i.value.length + c.length
        }), i.value += c);
    } else if (o.nodeType === Node.ELEMENT_NODE) {
        const a = o;
        a.shadowRoot && ZFh(a.shadowRoot, t, n, i, r);
    }
}
function pRo(e, t, n) {
    const i = [], r = {
        value: ""
    }, s = new Set, o = [];
    if (t) {
        const a = e.querySelectorAll(t);
        a.length > 0 ? o.push(...Array.from(a)) : o.push(e);
    } else o.push(e);
    for (const a of o)ZFh(a, i, s, r, n);
    return {
        text: r.value,
        textNodes: i
    };
}
function wnr(e, t) {
    const { start: n, end: i } = e;
    let r = null, s = 0, o = null, a = 0;
    for (const { node: c, start: l, end: u } of t)if (n >= l && n < u && (r = c, s = n - l), i > l && i <= u) {
        o = c, a = i - l;
        break;
    }
    if (!r || !o) return null;
    try {
        const c = document.createRange();
        return c.setStart(r, s), c.setEnd(o, a), c;
    } catch  {
        return null;
    }
}
function pbe(e) {
    if (!Swe()) throw new Error("createSignalFromObservable called outside of reactive scope. This will cause memory leaks. Call within a SolidJS component or runWithOwner.");
    const [t, n] = Ut(e.get());
    return Jt(()=>{
        const i = {
            beginUpdate () {},
            endUpdate () {
                const r = e.get();
                t() !== r && n(r);
            },
            handlePossibleChange () {},
            handleChange () {}
        };
        e.addObserver(i), An(()=>e.removeObserver(i));
    }), [
        t
    ];
}
function c__(e) {
    return v9n.getFocusedPromptTarget(e);
}
function l__(e) {
    return v9n.getDefaultPromptTarget(e);
}
function A__(e) {
    const t = e?.prUrl?.trim(), n = e?.branchName?.trim(), i = e?.commitSha?.trim(), r = [];
    return t ? r.push(`pr=${t}`) : n && r.push(`branch=${n}`), i && r.push(`commit=${i}`), r.filter((s)=>!/[\s`]/.test(s)).map((s)=>` ${s}`).join("");
}
function R__(e, t) {
    const n = e.split(/\r?\n/);
    let i = n;
    n.length > GLo && (i = n.slice(0, GLo), i.push("... diff truncated ..."));
    let r = i.join(`
`);
    return r.length > VLo && (r = r.slice(0, VLo) + `
... diff truncated ...`), `
\`\`\`diff${A__(t)}
${r}
\`\`\`
`;
}
function P__(e) {
    const t = e.labelName ?? e.filePath.split(/[\\/]/).at(-1) ?? e.filePath, n = Math.min(e.startLine, e.endLine), i = Math.max(e.startLine, e.endLine), r = zn();
    return {
        id: r,
        uuid: r,
        label: t,
        rawText: R__(e.diffText, e.source),
        mentionType: "code",
        secondaryText: n === i ? `L${n}` : `L${n}-${i}`,
        payload: e.payload
    };
}
function BLo(e, t, n) {
    if (t.length === 0) return;
    const { composerEventService: i, composerHandle: r } = e, s = c__(r.composerId) ?? l__(r.composerId);
    if (s?.insertMentions) {
        n?.focusOptions && s.focus(n.focusOptions), s.insertMentions(t);
        return;
    }
    const o = r.data.text ?? "", a = Fmv(r.data.richText, o, t);
    r.setData({
        text: UMe(a) ?? o,
        richText: a
    }), i.fireShouldForceText({
        composerId: r.composerId
    }), s && n?.focusOptions && s.focus(n.focusOptions);
}
function Bnt(e) {
    const t = Oe(()=>{
        const n = e.size ?? 16, i = n * .875, r = i / 2, s = i * .25, o = i * .417, a = n * .075, c = e.startRadius ?? s, l = e.endRadius ?? o, u = [], h = e.spinSpeed === "none";
        for(let g = 0; g < 8; g++){
            const f = g * 45 - 90, v = f * Math.PI / 180, b = Math.cos(v), y = Math.sin(v);
            let T;
            switch(e.spinSpeed){
                case "slow":
                    T = g * .3;
                    break;
                case "fast":
                    T = g * .125;
                    break;
                case "very-fast":
                    T = g * .06;
                    break;
                case "none":
                    T = 0;
                    break;
                case "regular":
                default:
                    T = g * .2;
                    break;
            }
            u.push({
                index: g,
                angle: f,
                x1: r + b * c,
                y1: r + y * c,
                x2: r + b * l,
                y2: r + y * l,
                animationDelay: `${T}s`,
                opacity: h ? 1 : void 0
            });
        }
        let p;
        switch(e.spinSpeed){
            case "slow":
                p = "spin-slow";
                break;
            case "fast":
                p = "spin-fast";
                break;
            case "very-fast":
                p = "spin-very-fast";
                break;
            case "none":
                p = "spin-none";
                break;
            case "regular":
            default:
                p = "";
                break;
        }
        return {
            size: n,
            svgSize: i,
            strokeWidth: a,
            lines: u,
            speedClass: p
        };
    });
    return (()=>{
        var n = FHh(), i = n.firstChild;
        return Me(i, pe(tm, {
            get each () {
                return t().lines;
            },
            children: (r)=>(()=>{
                    var s = BHh();
                    return Rn((o)=>{
                        var a = r.x1, c = r.y1, l = r.x2, u = r.y2, h = t().strokeWidth, p = `spinner-line ${t().speedClass}`, g = r.animationDelay, f = r.opacity;
                        return a !== o.e && fs(s, "x1", o.e = a), c !== o.t && fs(s, "y1", o.t = c), l !== o.a && fs(s, "x2", o.a = l), u !== o.o && fs(s, "y2", o.o = u), h !== o.i && fs(s, "stroke-width", o.i = h), p !== o.n && fs(s, "class", o.n = p), g !== o.s && ((o.s = g) != null ? s.style.setProperty("animation-delay", g) : s.style.removeProperty("animation-delay")), f !== o.h && ((o.h = f) != null ? s.style.setProperty("opacity", f) : s.style.removeProperty("opacity")), o;
                    }, {
                        e: void 0,
                        t: void 0,
                        a: void 0,
                        o: void 0,
                        i: void 0,
                        n: void 0,
                        s: void 0,
                        h: void 0
                    }), s;
                })()
        })), Rn((r)=>{
            var s = `spinning-loader ${e.class ?? ""}`, o = {
                ...e.style,
                width: `${t().size}px`,
                height: `${t().size}px`,
                color: e.color
            }, a = t().svgSize, c = t().svgSize, l = `0 0 ${t().svgSize} ${t().svgSize}`;
            return s !== r.e && $i(n, r.e = s), r.t = oa(n, o, r.t), a !== r.a && fs(i, "width", r.a = a), c !== r.o && fs(i, "height", r.o = c), l !== r.i && fs(i, "viewBox", r.i = l), r;
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0
        }), n;
    })();
}
function UHh(e, t, n) {
    return e === t && !n && !eNo(t);
}
function K__(e) {
    const t = [];
    for (const n of e)for (const i of n.locations)t.includes(i.startLine) || t.push(i.startLine);
    return t;
}
function isr(e, t) {
    if (e.length === 0 || t === 0) return [];
    const n = [];
    for (const o of e){
        const a = Math.max(1, o - nNo), c = Math.min(t, o + nNo);
        n.push({
            start: a,
            end: c
        });
    }
    n.sort((o, a)=>o.start - a.start);
    const i = [];
    for (const o of n)if (i.length === 0) i.push(o);
    else {
        const a = i[i.length - 1];
        o.start <= a.end + 1 ? a.end = Math.max(a.end, o.end) : i.push(o);
    }
    const r = [];
    let s = 1;
    for (const o of i)s < o.start && r.push({
        startLineNumber: s,
        startColumn: 1,
        endLineNumber: o.start - 1,
        endColumn: 1
    }), s = o.end + 1;
    return s <= t && r.push({
        startLineNumber: s,
        startColumn: 1,
        endLineNumber: t,
        endColumn: 1
    }), r;
}
function Z__(e) {
    return (()=>{
        var t = VHh();
        return Rn((n)=>oa(t, {
                width: "7px",
                height: "7px",
                "border-radius": "50%",
                background: "var(--vscode-tab-activeForeground)",
                ...e.style
            }, n)), t;
    })();
}
function J__(e) {
    const n = ir().textFileService, i = Rg();
    i.set(rsr, !1);
    const r = ha(i, rsr), s = (o)=>{
        i.set(rsr, o);
    };
    return Jt(()=>{
        const o = e();
        if (!o) {
            s(!1);
            return;
        }
        const a = ()=>{
            const l = n.isDirty(o);
            s(l);
        };
        a();
        const c = n.files.onDidChangeDirty((l)=>{
            l.resource.toString() === o.toString() && a();
        });
        An(()=>{
            c.dispose();
        });
    }), {
        isDirty: r,
        uri: lr(()=>e())
    };
}
function tb_(e) {
    const n = ir().markerService, i = Rg();
    i.set(Vzt, []);
    const r = ha(i, Vzt), s = ha(i, jHh), o = ha(i, qHh), a = ha(i, zHh), c = ha(i, KHh);
    return Jt(()=>{
        const l = e();
        if (!l) {
            i.set(Vzt, []);
            return;
        }
        const u = ()=>{
            const p = n.read({
                resource: l
            });
            i.set(Vzt, p);
        };
        u();
        const h = n.onMarkerChanged((p)=>{
            p.some((g)=>g.toString() === l.toString()) && u();
        });
        An(()=>{
            h.dispose();
        });
    }), {
        markers: r,
        errors: s,
        warnings: o,
        infos: a,
        hints: c,
        uri: e()
    };
}
function nb_(e) {
    const { errors: t, warnings: n, infos: i, hints: r, markers: s } = tb_(e), [o, a] = Ut({
        errorCount: 0,
        warningCount: 0,
        infoCount: 0,
        hintCount: 0,
        totalCount: 0
    });
    return Jt(()=>{
        a({
            errorCount: t().length,
            warningCount: n().length,
            infoCount: i().length,
            hintCount: r().length,
            totalCount: s().length
        });
    }), o;
}
function YHh(e) {
    const t = Rg(), n = ha(t, rNo), i = ha(t, sNo), r = (o)=>t.set(rNo, o), s = (o)=>t.set(sNo, o);
    return Jt(()=>{
        const o = e(), a = [], c = ()=>{
            let l = 0, u = 0;
            for (const h of o)l += h.linesAdded.get(), u += h.linesRemoved.get();
            Lh(()=>{
                r(l), s(u);
            });
        };
        c();
        for (const l of o){
            const u = {
                beginUpdate () {},
                endUpdate () {
                    c();
                },
                handlePossibleChange () {},
                handleChange () {}
            }, h = {
                beginUpdate () {},
                endUpdate () {
                    c();
                },
                handlePossibleChange () {},
                handleChange () {}
            };
            l.linesAdded.addObserver(u), l.linesRemoved.addObserver(h), a.push({
                dispose: ()=>{
                    l.linesAdded.removeObserver(u), l.linesRemoved.removeObserver(h);
                }
            });
        }
        An(()=>{
            a.forEach((l)=>l.dispose());
        });
    }), {
        linesAdded: n,
        linesRemoved: i
    };
}
async function ZHh(e, t, n, i) {
    if (e) try {
        return (await e).object.textEditorModel.getLinesContent();
    } catch (r) {
        console.error("[ReviewChanges] Failed to read diff model contents", r);
    }
    if (typeof n == "string") return n.split(/\r?\n/);
    if (i) try {
        return (await t.readFile(i)).value.toString().split(/\r?\n/);
    } catch  {}
    return [];
}
function QHh(e, t, n) {
    const i = Math.max(0, t - 1), r = Math.max(i, n - 1);
    return e.slice(i, r);
}
async function rb_(e, t) {
    const n = e.modifiedUri || e.goToFileUri || e.originalUri;
    if (!n) return;
    const [i, r] = await Promise.all([
        ZHh(e.originalModel, t, e.originalContents, e.originalUri ?? n),
        ZHh(e.modifiedModel, t, e.modifiedContents, n)
    ]);
    if (i.length === 0 && r.length === 0) return;
    const o = vee.getDefault().computeDiff(i, r, {
        ignoreTrimWhitespace: !1,
        maxComputationTimeMs: 1e3,
        computeMoves: !1
    });
    if (o.changes.length === 0) return;
    const a = [];
    let c = 1 / 0, l = 0;
    for (const v of o.changes){
        const b = Math.max(1, v.original.startLineNumber), y = Math.max(1, v.modified.startLineNumber), T = v.original.length, E = v.modified.length;
        c = Math.min(c, y);
        const A = y + Math.max(0, E - 1);
        l = Math.max(l, A), a.push(`@@ -${b},${T} +${y},${E} @@`);
        const R = T > 0 ? QHh(i, b, v.original.endLineNumberExclusive) : [], D = E > 0 ? QHh(r, y, v.modified.endLineNumberExclusive) : [];
        for (const P of R)a.push(`-${P}`);
        for (const P of D)a.push(`+${P}`);
    }
    const u = c === 1 / 0 ? 1 : c, h = l === 0 ? u : l;
    let p = a;
    a.length > oNo && (p = a.slice(0, oNo), p.push("... diff truncated ..."));
    let g = p.join(`
`);
    g.length > aNo && (g = g.slice(0, aNo) + `
... diff truncated ...`);
    const f = g.split(/\r?\n/).length;
    return {
        diffText: g,
        lineCount: f,
        uri: n,
        startLine: u,
        endLine: h
    };
}
function ob_(e) {
    const t = ir();
    let n, i, r = null, s = null, o = !1;
    const a = new He, c = new cn, l = new cn, u = ()=>{
        const We = e.resource.goToFileUri || e.resource.modifiedUri || e.resource.originalUri;
        return We ? (WHt(t.workspaceContextService, We) ?? We.path).replace(/^\//, "").replace(/\/$/, "") : "Unknown";
    }, h = ()=>{
        if (e.defaultCollapsed !== void 0) return e.defaultCollapsed;
        const We = u();
        return BIh(We);
    }, [p, g] = Ut(500), [f, v] = Ut(!1), [b, y] = Ut(h()), [T, E] = Ut(!1), [A, R] = Ut(!1), [D, P] = Ut(!1), [N, O] = Ut(!1), [F, H] = Ut(!1), { showHover: $, hideHover: W } = iB(300), G = v0t();
    Jt(()=>{
        e.resource.status === "deleted" && y(!0);
    });
    const { linesAdded: q, linesRemoved: z } = YHh(()=>[
            e.resource
        ]), X = Oe(()=>K__(e.resource.comments.get())), Y = Oe(()=>{
        const We = q(), it = z();
        if (We === 0 && it === 0) return !1;
        const Ne = e.resource.status;
        return Ne === "modified" || Ne === "renamed" ? !1 : Ne === "added" || Ne === "deleted" ? !0 : We > 0 && it === 0 || We === 0 && it > 0;
    }), Z = Oe(()=>Y() ? CK.Unified : e.diffViewMode), K = Oe(()=>{
        if (e.resource.status !== "renamed") return !1;
        const We = e.resource.originalContents, it = e.resource.modifiedContents;
        return We !== void 0 && it !== void 0 ? We === it : !1;
    }), J = Oe(()=>K()), ne = Oe(()=>{
        if (e.resource.status !== "renamed" || !e.resource.originalUri) return;
        const We = e.resource.originalUri;
        return (WHt(t.workspaceContextService, We) ?? We.path).replace(/^\//, "").replace(/\/$/, "");
    }), ee = {
        expand: ()=>y(!1),
        collapse: ()=>y(!0),
        isCollapsed: ()=>b(),
        getTopForLineNumber: (We)=>r ? r.getModifiedEditor().getTopForLineNumber(We) : s ? s.getTopForLineNumber(We) : 0,
        getScrollTop: ()=>r ? r.getModifiedEditor().getScrollTop() : s ? s.getScrollTop() : 0
    };
    Jt(()=>{
        e.ref && e.ref(ee);
    });
    const { isDirty: se } = J__(()=>e.resource.modifiedUri || e.resource.originalUri), re = nb_(()=>e.resource.modifiedUri || e.resource.originalUri), ue = qS(t.inlineDiffService.inlineDiffs), ce = Oe(()=>e.skipComposerContext ? !1 : mKc(t, t.composerDataService.selectedComposerHandle)), de = Oe(()=>e.resource.status ? e.resource.status : !e.resource.originalUri && e.resource.modifiedUri ? "added" : e.resource.originalUri && !e.resource.modifiedUri ? "deleted" : "modified");
    let le = [], ye;
    const _e = ()=>u(), me = ()=>{
        const We = e.resource.goToFileUri || e.resource.modifiedUri || e.resource.originalUri;
        if (!We) return "";
        let it = We;
        if (We.scheme === "git" && We.query) try {
            const Ne = JSON.parse(We.query);
            typeof Ne.path == "string" && (it = Ee.file(Ne.path));
        } catch  {}
        try {
            return t.labelService.getUriLabel(it, {
                relative: !1
            });
        } catch  {
            return (it.path || "").replace(/\/$/, "");
        }
    }, Ce = async (We)=>{
        We.stopPropagation(), t.analyticsService.trackEvent("agent_layout.undo_clicked");
        try {
            const it = e.resource.goToFileUri || e.resource.modifiedUri || e.resource.originalUri;
            if (!it) return;
            const Ne = t.diffChangeSourceRegistry.getDescriptorsForUri(it);
            for (const Fe of Ne)await t.diffChangeSourceRegistry.reject(Fe.id, {
                close: !0
            });
            await t.textFileService.save(it, {
                skipSaveParticipants: !0
            });
        } catch  {}
    }, xe = async (We)=>{
        We.stopPropagation(), t.analyticsService.trackEvent("agent_layout.keep_clicked");
        const it = t.composerDataService.selectedComposerId, Ne = t.composerDataService.selectedComposerHandle;
        if (Ne && t.composerDataService.getComposerData(Ne)?.gitWorktree?.worktreePath) {
            await t.composerService.applyWorktreeToCurrentBranch(it);
            return;
        }
        try {
            const Fe = e.resource.goToFileUri || e.resource.modifiedUri || e.resource.originalUri;
            if (!Fe) return;
            const Qe = t.diffChangeSourceRegistry.getDescriptorsForUri(Fe);
            for (const tt of Qe)await t.diffChangeSourceRegistry.accept(tt.id);
            await t.textFileService.save(Fe, {
                skipSaveParticipants: !0
            });
        } catch  {}
    }, Le = ()=>{
        if (!o) {
            o = !0, (r || s) && e.onDiffEditorUnmount?.(e.resource), ye && (clearTimeout(ye), ye = void 0), a.clear(), c.clear(), l.clear();
            for (const We of le)try {
                We.dispose();
            } catch  {}
            if (le = [], r) {
                const We = e.diffWidgets.indexOf(r);
                We > -1 && e.diffWidgets.splice(We, 1);
                const it = r;
                r = null;
                try {
                    it.setModel(null);
                } catch  {}
                try {
                    it.dispose();
                } catch  {}
                o = !1;
            } else if (s) {
                const We = s;
                s = null;
                try {
                    We.setModel(null);
                } catch  {}
                try {
                    We.dispose();
                } catch  {}
                o = !1;
            } else o = !1;
        }
    }, Be = async ()=>{
        if ((r || s) && Le(), J()) {
            R(!0), v(!0);
            return;
        }
        if (!n) return;
        R(!0);
        const We = document.createElement("div");
        for(We.style.height = "100%", We.style.width = "100%"; n.firstChild;)n.removeChild(n.firstChild);
        n.appendChild(We);
        const it = e.readonly ? [] : zC.getEditorContributions().filter((ht)=>ht.id !== pnt.ID && ht.id !== "editor.contrib.findController"), Ne = t.configurationService.getValue("editor.fontFamily") || "monospace", Fe = t.configurationService.getValue("editor.fontSize"), Qe = t.configurationService.getValue("editor.lineNumbers") || "on", tt = e.onReadonlyClick, st = e.resource, vt = (ht, ut)=>{
            try {
                if (ce()) return;
                const Dt = ht.getPosition();
                if (!Dt) return;
                const lt = ht.getScrolledVisiblePosition(Dt);
                if (!lt) return;
                const Tt = ht.getDomNode();
                if (!Tt) return;
                const ct = Tt.getBoundingClientRect(), Kt = ct.left + lt.left, Rt = ct.top + lt.top, Gt = Dt.column, Nt = new er("readonlyClick", "Edit in File", void 0, !0, async ()=>{
                    tt?.(st, ut, Gt);
                });
                t.contextMenuService.showContextMenu({
                    getAnchor: ()=>({
                            x: Kt,
                            y: Rt
                        }),
                    getActions: ()=>[
                            Nt
                        ],
                    autoSelectFirstItem: !0
                });
            } catch  {}
        };
        if (de() === "added") {
            const ht = t.instantiationService.createInstance(Iw, We, {
                lineNumbers: Qe === "off" ? "off" : "on",
                stickyScroll: {
                    enabled: !1
                },
                glyphMargin: e.showGlyphMargin ?? !1,
                minimap: {
                    enabled: !1
                },
                scrollBeyondLastLine: !1,
                hover: {
                    enabled: !0
                },
                automaticLayout: !0,
                fontFamily: Ne,
                fontSize: Fe,
                readOnly: e.readonly || !1,
                scrollbar: {
                    vertical: "hidden",
                    horizontal: "auto",
                    ignoreHorizontalScrollbarInContentHeight: !0,
                    alwaysConsumeMouseWheel: !1
                },
                commentOnLineNumbers: !1
            }, {
                isSimpleWidget: !1,
                contributions: it,
                isAddedMultiDiffEditor: !0
            });
            s = ht;
            try {
                if (e.resource.modifiedUri) {
                    const ut = await e.resource.modifiedModel;
                    if (!UHh(s, ht, o)) return;
                    const Dt = ut.object.textEditorModel;
                    if (ht.setModel(Dt), g(ht.getContentHeight()), v(!0), e.onDiffEditorMount?.(e.resource, ht, void 0), e.showOnlyCommentAreas && X() && X().length > 0) {
                        const ct = Dt.getLineCount(), Kt = isr(X(), ct);
                        Kt.length > 0 && ht.setHiddenAreas(Kt, "discussions-view");
                    }
                    e.registerSingleEditor?.(e.resource.modifiedUri?.toString(), ht);
                    const lt = ht.onDidContentSizeChange(()=>{
                        g(ht.getContentHeight());
                    });
                    if (le.push(lt), e.readonly && e.onReadonlyClick) {
                        const ct = e.onReadonlyClick, Kt = e.resource, Rt = (sn, un, kt)=>{
                            if (ce()) return;
                            const ot = new er("readonlyClick", "Edit in File", void 0, !0, async ()=>{
                                ct?.(Kt, un, kt);
                            });
                            t.contextMenuService.showContextMenu({
                                getAnchor: ()=>({
                                        x: sn.posx,
                                        y: sn.posy
                                    }),
                                getActions: ()=>[
                                        ot
                                    ],
                                autoSelectFirstItem: !0
                            });
                        }, Gt = ht.onContextMenu((sn)=>{
                            sn.event.preventDefault(), sn.event.stopPropagation();
                            const un = sn.target.position;
                            if (!un) return;
                            const kt = un.lineNumber, ot = un.column;
                            Rt(sn.event, kt, ot);
                        });
                        le.push(Gt);
                        const Nt = ht.onKeyDown((sn)=>{
                            if (sn.browserEvent.key === "Enter" && (sn.browserEvent.metaKey || sn.browserEvent.ctrlKey)) {
                                sn.browserEvent.preventDefault(), sn.browserEvent.stopPropagation();
                                return;
                            }
                            const un = sn.browserEvent.key && sn.browserEvent.key.length === 1 && !sn.browserEvent.ctrlKey && !sn.browserEvent.metaKey && !sn.browserEvent.altKey, kt = sn.browserEvent.key === "Backspace" || sn.browserEvent.key === "Delete";
                            if (un || kt) {
                                const ot = ht.getPosition();
                                ot && (sn.browserEvent.preventDefault(), sn.browserEvent.stopPropagation(), vt(ht, ot.lineNumber));
                            }
                        });
                        le.push(Nt);
                    }
                    if (e.onReadonlyClick) {
                        const ct = ht.onMouseDown((Kt)=>{
                            if (!Kt.event.metaKey && !Kt.event.ctrlKey) return;
                            const Rt = Kt.target.position;
                            Rt && (Kt.event.preventDefault(), Kt.event.stopPropagation(), tt?.(st, Rt.lineNumber, Rt.column));
                        });
                        le.push(ct);
                    }
                    const Tt = e.resource.lineCommentHandler;
                    if (Tt) {
                        const ct = e.resource, Kt = (()=>{
                            const sn = ct.goToFileUri || ct.modifiedUri || ct.originalUri;
                            return sn ? (WHt(t.workspaceContextService, sn) ?? sn.path).replace(/^\//, "") : "";
                        })();
                        let Rt = null;
                        const Gt = ht.onMouseDown((sn)=>{
                            if (Rt = null, sn.target.type === 3) {
                                const un = sn.target.range;
                                un && sn.event.leftButton && (Rt = {
                                    lineNumber: un.startLineNumber
                                }, sn.event.preventDefault(), sn.event.stopPropagation());
                            }
                        });
                        le.push(Gt);
                        const Nt = ht.onMouseUp((sn)=>{
                            if (!Rt) return;
                            const un = Rt.lineNumber;
                            Rt = null;
                            const kt = sn.target.range;
                            if (!kt) return;
                            const ot = kt.startLineNumber, ze = Math.min(un, ot), St = Math.max(un, ot);
                            Tt(ht, Kt, ze, St);
                        });
                        le.push(Nt);
                    }
                }
            } catch  {}
            return;
        }
        if (de() === "deleted") {
            const ht = t.instantiationService.createInstance(Iw, We, {
                lineNumbers: Qe === "off" ? "off" : "on",
                stickyScroll: {
                    enabled: !1
                },
                glyphMargin: e.showGlyphMargin ?? !1,
                readOnly: !0,
                minimap: {
                    enabled: !1
                },
                scrollBeyondLastLine: !1,
                hover: {
                    enabled: !0
                },
                automaticLayout: !0,
                fontFamily: Ne,
                fontSize: Fe,
                scrollbar: {
                    vertical: "hidden",
                    horizontal: "auto",
                    ignoreHorizontalScrollbarInContentHeight: !0,
                    alwaysConsumeMouseWheel: !1
                },
                commentOnLineNumbers: !1
            }, {
                isSimpleWidget: !1,
                contributions: it,
                isDeletedMultiDiffEditor: !0
            });
            s = ht;
            try {
                if (e.resource.originalUri) {
                    const ut = await e.resource.originalModel;
                    if (!UHh(s, ht, o)) return;
                    const Dt = ut.object.textEditorModel;
                    ht.setModel(Dt), g(ht.getContentHeight()), v(!0), e.onDiffEditorMount?.(e.resource, ht, void 0), e.registerSingleEditor?.(e.resource.originalUri?.toString(), ht);
                    const lt = ht.onDidContentSizeChange(()=>{
                        g(ht.getContentHeight());
                    });
                    le.push(lt);
                }
            } catch  {}
            return;
        }
        r = t.instantiationService.createInstance(rN, We, {
            lineNumbers: Qe === "off" ? "off" : "on",
            compactMode: !1,
            stickyScroll: {
                enabled: !1
            },
            diffAlgorithm: "legacy",
            isInEmbeddedEditor: !0,
            hideUnchangedRegions: {
                enabled: !0,
                contextLineCount: 5
            },
            glyphMargin: e.showGlyphMargin ?? !1,
            renderSideBySide: Z() === CK.Split,
            useInlineViewWhenSpaceIsLimited: !1,
            minimap: {
                enabled: !1
            },
            scrollBeyondLastLine: !1,
            hover: {
                enabled: !0
            },
            readOnly: e.readonly || !1,
            overflowWidgetsDomNode: e.overflowAnchorEl,
            scrollbar: {
                vertical: "hidden",
                horizontal: "auto",
                ignoreHorizontalScrollbarInContentHeight: !0,
                alwaysConsumeMouseWheel: !1
            },
            selectOnLineNumbers: !0,
            commentOnLineNumbers: !0,
            guides: {
                indentation: !1,
                bracketPairs: !1,
                bracketPairsHorizontal: !1,
                highlightActiveBracketPair: !1,
                highlightActiveIndentation: !1
            },
            automaticLayout: !0,
            renderOverviewRuler: !1,
            renderIndicators: !1,
            renderMarginRevertIcon: !1,
            renderGutterMenu: !1,
            fontFamily: Ne,
            fontSize: Fe
        }, {
            originalEditor: {
                isSimpleWidget: !0,
                contributions: it,
                hideLineNumbers: Z() !== CK.Split || Qe === "off"
            },
            modifiedEditor: {
                isSimpleWidget: !1,
                contributions: it,
                isMultiDiffEditor: !0
            }
        }), e.addDiffWidget(r);
        try {
            if (!r || o) return;
            const ht = await e.resource.originalModel, ut = await e.resource.modifiedModel;
            if (!ht && !ut) r.setModel(null);
            else {
                let ot = null;
                (!ht || !ut) && (ot = t.modelService.createModel("", null, void 0, !1, !0, !0), le.push({
                    dispose: ()=>{
                        try {
                            ot?.dispose();
                        } catch  {}
                    }
                })), r.setModel({
                    original: ht?.object.textEditorModel || ot,
                    modified: ut?.object.textEditorModel || ot
                });
            }
            if (ht && ht.object.textEditorModel?.getValueLength() === 0 && v(!0), r && ht && e.resource.modifiedUri && !e.resource.skipInlineDiffSync) {
                const ot = ht?.object.textEditorModel, ze = e.resource.modifiedUri.toString(), St = (_n, an)=>(_n.length > 0 && _n[_n.length - 1] === "" ? Array.from(_n).slice(0, -1) : Array.from(_n)).join(an), ft = async (_n, an, ln)=>{
                    if (!r || o || !ht) return;
                    const Mn = ot.getEOL(), Dn = St(ln, Mn), Ln = {
                        startLineNumber: _n,
                        startColumn: 1,
                        endLineNumber: an,
                        endColumn: an <= ot.getLineCount() ? ot.getLineMaxColumn(an) : 1
                    };
                    ot.pushEditOperations([], [
                        {
                            range: Ln,
                            text: Dn
                        }
                    ], ()=>null);
                }, Mt = (_n, an)=>{
                    const ln = Math.min(_n.length, an.length);
                    let Mn = -1, Dn = -1;
                    for(let Ln = 0; Ln < ln; Ln++)if (_n[Ln] !== an[Ln]) {
                        Mn = Ln;
                        break;
                    }
                    for(let Ln = 0; Ln < ln; Ln++){
                        const ti = _n.length - 1 - Ln, fi = an.length - 1 - Ln;
                        if (ti >= 0 && fi >= 0 && _n[ti] !== an[fi]) {
                            Dn = Math.max(ti, fi);
                            break;
                        }
                    }
                    return _n.length !== an.length && (Mn === -1 && (Mn = ln), Dn = Math.max(_n.length - 1, an.length - 1)), Mn !== -1 ? {
                        firstDiff: Mn,
                        lastDiff: Dn
                    } : null;
                }, Bt = ()=>{
                    if (!ht) return [];
                    const _n = [], an = ot.getLineCount();
                    for(let ln = 1; ln <= an; ln++)_n.push(ot.getLineContent(ln));
                    return _n;
                }, Ot = (_n)=>{
                    if (!ht || _n.length === 0) return null;
                    const an = ot.getLineCount();
                    for(let ln = 1; ln <= an - _n.length + 1; ln++)if (_n.every((Dn, Ln)=>ot.getLineContent(ln + Ln) === Dn)) return ln;
                    return null;
                }, Wt = async (_n, an)=>{
                    if (!(!r || o || !ht)) try {
                        if (an) {
                            await ft(an.startLineNumber, an.endLineNumber, an.newLines);
                            return;
                        }
                        const ln = Bt(), Mn = Mt(ln, _n);
                        if (Mn) {
                            const { firstDiff: Dn, lastDiff: Ln } = Mn, ti = Array.from(_n).slice(Dn, Ln + 1);
                            await ft(Dn + 1, Math.min(Ln + 1, ot.getLineCount()), ti);
                        }
                    } catch  {}
                };
                try {
                    const an = t.inlineDiffService.inlineDiffs.nonReactive().find((ln)=>ln.uri.toString() === ze);
                    an && await Wt(an.originalTextLines);
                } catch  {}
                const nn = t.inlineDiffService.onDidAcceptPartialDiff(async (_n)=>{
                    if (_n.inlineDiff.uri.toString() !== ze || !r || o) return;
                    const { accepted: an, rejected: ln } = _n.change;
                    if (ln.length > 0 && ht) {
                        const Mn = Ot(ln);
                        if (Mn !== null) {
                            await Wt(_n.inlineDiff.originalTextLines, {
                                startLineNumber: Mn,
                                endLineNumber: Mn + ln.length - 1,
                                newLines: an
                            });
                            return;
                        }
                    }
                    await Wt(_n.inlineDiff.originalTextLines);
                });
                le.push(nn);
                const pn = t.inlineDiffService.onDidRejectPartialDiff((_n)=>{
                    _n.inlineDiff.uri.toString();
                });
                le.push(pn);
                const Yt = t.inlineDiffService.inlineDiffs.event(async ()=>{
                    if (!(!r || o || !ht)) try {
                        const an = t.inlineDiffService.inlineDiffs.nonReactive().find((ln)=>ln.uri.toString() === ze);
                        an && await Wt(an.originalTextLines);
                    } catch  {}
                });
                le.push(Yt);
            }
            if (r && r.waitForDiff && await r.waitForDiff(), !r || o) return;
            if (D() ? r.showAllUnchangedRegions() : r.collapseAllUnchangedRegions(), r.revealFirstDiff(), e.showOnlyCommentAreas && X() && X().length > 0) {
                r.showAllUnchangedRegions();
                const ot = r.getModifiedEditor(), ze = ot.getModel();
                if (ze) {
                    const St = ze.getLineCount(), ft = isr(X(), St);
                    ft.length > 0 && ot.setHiddenAreas(ft, "discussions-view");
                }
                ot.revealLineInCenter(X()[0]);
            }
            if (!r || o) return;
            const Dt = r.getModifiedEditor(), lt = ()=>{
                if (!r || o) return;
                const ot = Dt.getContentHeight();
                typeof ot == "number" && ot > 0 && g(ot);
            };
            lt();
            const Tt = Dt.onDidContentSizeChange(()=>lt());
            le.push(Tt);
            const ct = Dt.onDidChangeModelContent(async ()=>{
                !r || o || (ye && clearTimeout(ye), ye = setTimeout(async ()=>{
                    if (!(!r || o)) try {
                        if (await r.waitForDiff(), !r || o) return;
                        !(Dt.hasTextFocus() || r.getOriginalEditor().hasTextFocus()) && !D() && r.collapseAllUnchangedRegions(), lt();
                    } catch  {}
                }, 500));
            });
            if (le.push(ct), !r || o) return;
            const Kt = r.getOriginalEditor(), Rt = ()=>{
                try {
                    if (!r || o) {
                        E(!1);
                        return;
                    }
                    const ot = Dt.hasTextFocus() || Kt.hasTextFocus();
                    E(!!ot);
                } catch  {
                    E(!1);
                }
            };
            Rt();
            const Gt = Dt.onDidFocusEditorText(()=>E(!0)), Nt = Dt.onDidBlurEditorText(()=>Rt()), sn = Kt.onDidFocusEditorText(()=>E(!0)), un = Kt.onDidBlurEditorText(()=>Rt());
            if (le.push(Gt, Nt, sn, un), e.readonly && e.onReadonlyClick && r && !o) {
                const ot = r.getModifiedEditor(), ze = r.getOriginalEditor(), St = e.onReadonlyClick, ft = e.resource, Mt = (pn, Yt, _n)=>{
                    if (ce()) return;
                    const an = new er("readonlyClick", "Edit in File", void 0, !0, async ()=>{
                        St?.(ft, Yt, _n);
                    });
                    t.contextMenuService.showContextMenu({
                        getAnchor: ()=>({
                                x: pn.posx,
                                y: pn.posy
                            }),
                        getActions: ()=>[
                                an
                            ],
                        autoSelectFirstItem: !0
                    });
                }, Bt = ot.onContextMenu((pn)=>{
                    pn.event.preventDefault(), pn.event.stopPropagation();
                    const Yt = pn.target.position;
                    if (!Yt) return;
                    const _n = Yt.lineNumber, an = Yt.column;
                    Mt(pn.event, _n, an);
                });
                le.push(Bt);
                const Ot = ze.onContextMenu((pn)=>{
                    pn.event.preventDefault(), pn.event.stopPropagation();
                    const Yt = pn.target.position;
                    if (!Yt) return;
                    const _n = Yt.lineNumber, an = Yt.column;
                    Mt(pn.event, _n, an);
                });
                le.push(Ot);
                const Wt = ot.onKeyDown((pn)=>{
                    if (pn.browserEvent.key === "Enter" && (pn.browserEvent.metaKey || pn.browserEvent.ctrlKey)) {
                        pn.browserEvent.preventDefault(), pn.browserEvent.stopPropagation();
                        return;
                    }
                    const Yt = pn.browserEvent.key && pn.browserEvent.key.length === 1 && !pn.browserEvent.ctrlKey && !pn.browserEvent.metaKey && !pn.browserEvent.altKey, _n = pn.browserEvent.key === "Backspace" || pn.browserEvent.key === "Delete";
                    if (Yt || _n) {
                        const an = ot.getPosition();
                        an && (pn.browserEvent.preventDefault(), pn.browserEvent.stopPropagation(), vt(ot, an.lineNumber));
                    }
                });
                le.push(Wt);
                const nn = ze.onKeyDown((pn)=>{
                    if (pn.browserEvent.key === "Enter" && (pn.browserEvent.metaKey || pn.browserEvent.ctrlKey)) {
                        pn.browserEvent.preventDefault(), pn.browserEvent.stopPropagation();
                        return;
                    }
                    const Yt = pn.browserEvent.key && pn.browserEvent.key.length === 1 && !pn.browserEvent.ctrlKey && !pn.browserEvent.metaKey && !pn.browserEvent.altKey, _n = pn.browserEvent.key === "Backspace" || pn.browserEvent.key === "Delete";
                    if (Yt || _n) {
                        const an = ze.getPosition();
                        an && (pn.browserEvent.preventDefault(), pn.browserEvent.stopPropagation(), vt(ze, an.lineNumber));
                    }
                });
                le.push(nn);
            }
            if (e.onReadonlyClick && r && !o) {
                const ot = r.getModifiedEditor(), ze = r.getOriginalEditor(), St = ot.onMouseDown((Mt)=>{
                    if (!Mt.event.metaKey && !Mt.event.ctrlKey) return;
                    const Bt = Mt.target.position;
                    Bt && (Mt.event.preventDefault(), Mt.event.stopPropagation(), tt?.(st, Bt.lineNumber, Bt.column));
                });
                le.push(St);
                const ft = ze.onMouseDown((Mt)=>{
                    if (!Mt.event.metaKey && !Mt.event.ctrlKey) return;
                    const Bt = Mt.target.position;
                    Bt && (Mt.event.preventDefault(), Mt.event.stopPropagation(), tt?.(st, Bt.lineNumber, Bt.column));
                });
                le.push(ft);
            }
            const kt = e.resource.lineCommentHandler;
            if (kt && r && !o) {
                const ot = r.getModifiedEditor(), ze = e.resource, St = (()=>{
                    const Ot = ze.goToFileUri || ze.modifiedUri || ze.originalUri;
                    return Ot ? (WHt(t.workspaceContextService, Ot) ?? Ot.path).replace(/^\//, "") : "";
                })();
                let ft = null;
                const Mt = ot.onMouseDown((Ot)=>{
                    if (ft = null, Ot.target.type === 3) {
                        const Wt = Ot.target.range;
                        Wt && Ot.event.leftButton && (ft = {
                            lineNumber: Wt.startLineNumber
                        }, Ot.event.preventDefault(), Ot.event.stopPropagation());
                    }
                });
                le.push(Mt);
                const Bt = ot.onMouseUp((Ot)=>{
                    if (!ft) return;
                    const Wt = ft.lineNumber;
                    ft = null;
                    const nn = Ot.target.range;
                    if (!nn) return;
                    const pn = nn.startLineNumber, Yt = Math.min(Wt, pn), _n = Math.max(Wt, pn);
                    kt(ot, St, Yt, _n);
                });
                le.push(Bt);
            }
            r && !o ? (r.layout(), v(!0), a.add(O2(()=>{
                if (r && !o) {
                    r.layout();
                    const ot = r.getModifiedEditor();
                    e.onDiffEditorMount?.(e.resource, ot, r);
                }
            }))) : v(!0);
        } catch  {}
    };
    An(()=>{
        Le(), c.dispose(), l.dispose(), a.dispose();
    });
    let je;
    const Ge = ()=>`${e.resource.originalUri?.toString() || "null"}_${e.resource.modifiedUri?.toString() || "null"}`;
    Jt(()=>{
        const We = Ge();
        if (je === We) return;
        je = We;
        const it = e.getIsVisible ? e.getIsVisible() : !0;
        !b() && it && (!A() && e.getIsVisible !== void 0 ? (c.clear(), l.clear(), c.value = O2(()=>{
            o || (l.value = O2(()=>{
                if (o) return;
                (e.getIsVisible ? e.getIsVisible() : !0) && Be();
            }));
        })) : Be());
    }), Jt(()=>{
        const We = b(), it = e.getIsVisible ? e.getIsVisible() : !0;
        !We && it && !r && !s && je !== void 0 ? Be() : !it && (r || s) && !A() ? Le() : We && it && v(!0);
    }), Kc(()=>{
        if (e.onIntersectionObserve && i && (i.setAttribute("data-resource-key", t.reviewChangesService.getResourceKey(e.resource, e.diffViewMode)), e.onIntersectionObserve(i)), !i) return;
        const We = async (it)=>{
            if (!r && !s) return;
            let Ne = !1;
            if (s ? Ne = s.hasTextFocus() : r && (Ne = r.getModifiedEditor().hasTextFocus() || r.getOriginalEditor().hasTextFocus()), !Ne) return;
            const Fe = new gu(it), Qe = t.keybindingService.softDispatch(Fe, Fe.target, !0);
            if (!(Qe.kind !== 2 || Qe.commandId !== "workbench.action.files.save")) {
                it.preventDefault();
                try {
                    const tt = e.resource.modifiedUri || e.resource.goToFileUri;
                    if (!tt) return;
                    await t.textFileService.save(tt, {
                        skipSaveParticipants: !0
                    });
                } catch  {}
            }
        };
        window.addEventListener("keydown", We, !0), An(()=>{
            window.removeEventListener("keydown", We, !0);
        });
    });
    const Xe = async (We)=>{
        We.stopPropagation(), b() && y(!1), P((it)=>!it);
        try {
            if (s) {
                if (e.showOnlyCommentAreas && X() && X().length > 0) {
                    const it = s.getModel();
                    if (it) if (D()) s.setHiddenAreas([], "discussions-view");
                    else {
                        const Ne = it.getLineCount(), Fe = isr(X(), Ne);
                        s.setHiddenAreas(Fe, "discussions-view");
                    }
                }
                return;
            }
            if (r && !o) {
                const it = r.getModifiedEditor(), Ne = e.showOnlyCommentAreas && X() && X().length > 0;
                if (D()) r.showAllUnchangedRegions(), it.setHiddenAreas([], "discussions-view");
                else if (Ne) {
                    r.showAllUnchangedRegions();
                    const Fe = it.getModel();
                    if (Fe && X()) {
                        const Qe = Fe.getLineCount(), tt = isr(X(), Qe);
                        it.setHiddenAreas(tt, "discussions-view");
                    }
                } else r.collapseAllUnchangedRegions();
            }
        } catch  {}
    }, Ke = async (We)=>{
        if (ce()) return;
        const it = e.resource.goToFileUri || e.resource.modifiedUri || e.resource.originalUri;
        if (it) {
            let Ne = 1;
            if (s) Ne = 1;
            else if (r && !b() && !o) try {
                if (await r.waitForDiff(), !r || o) Ne = 1;
                else {
                    const Qe = r.getLineChanges();
                    if (Qe && Qe.length > 0) {
                        const tt = Qe[0];
                        tt.modifiedStartLineNumber > 0 && (Ne = tt.modifiedStartLineNumber);
                    }
                }
            } catch  {
                Ne = 1;
            }
            const Fe = We.altKey === !0;
            t.editorService.openEditor({
                resource: it,
                options: {
                    pinned: !0,
                    selection: {
                        startLineNumber: Ne,
                        startColumn: 1
                    }
                }
            }, Fe ? ib : void 0);
        }
    }, et = async (We)=>{
        We?.preventDefault(), We?.stopPropagation();
        try {
            const it = await rb_(e.resource, t.fileService);
            if (!it || it.diffText.trim().length === 0) {
                t.notificationService.warn("No diff content available to mention.");
                return;
            }
            const Ne = We?.metaKey || We?.ctrlKey;
            let Fe = Ne ? void 0 : t.composerDataService.selectedComposerId, Qe = Ne ? void 0 : t.composerDataService.selectedComposerHandle;
            if (!Fe) {
                const ht = await t.composerService.createComposer({
                    partialState: {
                        unifiedMode: "agent"
                    },
                    openInNewTab: !1
                });
                if (Fe = ht?.composerId, Qe = ht?.weakHandle, !Fe) {
                    t.notificationService.error("Failed to create a new chat.");
                    return;
                }
                await t.composerService.openComposer(Fe, {
                    view: "pane"
                });
            }
            const tt = t.workspaceContextService.asRelativePath(it.uri) ?? it.uri.path ?? it.uri.toString(), st = {
                prUrl: "",
                filePath: tt,
                startLine: it.startLine,
                endLine: it.endLine,
                diffContent: it.diffText
            }, vt = P__({
                filePath: tt,
                labelName: tt.split("/").at(-1) ?? tt,
                startLine: it.startLine,
                endLine: it.endLine,
                diffText: it.diffText,
                payload: {
                    case: "gitPRDiffSelection",
                    prUrl: "",
                    filePath: tt,
                    startLine: it.startLine,
                    endLine: it.endLine,
                    diffContent: it.diffText
                }
            });
            Qe && BLo({
                composerEventService: t.composerEventService,
                cursorIgnoreService: t.cursorIgnoreService,
                composerHandle: Qe
            }, [
                vt
            ]), t.composerContextService.addContext({
                composerHandle: Qe,
                contextType: "gitPRDiffSelections",
                value: st,
                shouldShowPreview: !0
            }), t.composerService.handleOpenComposer(Fe, {
                focusMainInputBox: !0
            });
        } catch  {
            t.notificationService.error("Failed to attach diff mention. Check logs for details.");
        }
    };
    return (()=>{
        var We = aWh(), it = We.firstChild, Ne = it.firstChild, Fe = Ne.firstChild, Qe = Fe.firstChild, tt = Qe.firstChild, st = tt.firstChild, vt = tt.nextSibling, ht = Fe.nextSibling;
        return We.addEventListener("mouseleave", ()=>H(!1)), We.addEventListener("mouseenter", ()=>H(!0)), Pl((ut)=>i = ut, We), Ne.addEventListener("mouseleave", ()=>O(!1)), Ne.addEventListener("mouseenter", ()=>O(!0)), Fe.addEventListener("click", Ke), Me(Fe, pe(wt, {
            get when () {
                return N();
            },
            get fallback () {
                return [
                    pe(wt, {
                        get when () {
                            return G();
                        },
                        get children () {
                            var ut = cWh();
                            return Me(ut, pe(lhe, {
                                get fileName () {
                                    return _e();
                                },
                                get workspaceContextService () {
                                    return t.workspaceContextService;
                                },
                                get modelService () {
                                    return t.modelService;
                                },
                                get languageService () {
                                    return t.languageService;
                                },
                                innerClass: "app-layout-multi-diff-icon-override"
                            })), ut;
                        }
                    }),
                    pe(wt, {
                        get when () {
                            return !G();
                        },
                        get children () {
                            var ut = cNo(), Dt = ut.firstChild, lt = Dt.firstChild;
                            return ut.addEventListener("mouseleave", ()=>W()), ut.addEventListener("mouseenter", (Tt)=>{
                                $({
                                    target: Tt.currentTarget,
                                    content: b() ? "Expand" : "Collapse",
                                    appearance: {
                                        compact: !0,
                                        showPointer: !0,
                                        skipFadeInAnimation: !0
                                    },
                                    position: {
                                        hoverPosition: wl.BELOW
                                    }
                                });
                            }), ut.addEventListener("click", (Tt)=>{
                                Tt.stopPropagation(), Tt.preventDefault(), (Tt.altKey || Tt.metaKey) && e.parentRef ? b() ? e.parentRef.expandAll() : e.parentRef.collapseAll() : y(!b());
                            }), ut.style.setProperty("cursor", "pointer"), lt.style.setProperty("font-size", "18px"), lt.style.setProperty("color", "var(--cursor-icon-secondary)"), Rn((Tt)=>{
                                var ct = Ft.asClassName(Pe.chevronRight), Kt = b() ? void 0 : "rotate(90deg)";
                                return ct !== Tt.e && $i(lt, Tt.e = ct), Kt !== Tt.t && ((Tt.t = Kt) != null ? lt.style.setProperty("transform", Kt) : lt.style.removeProperty("transform")), Tt;
                            }, {
                                e: void 0,
                                t: void 0
                            }), ut;
                        }
                    })
                ];
            },
            get children () {
                var ut = cNo(), Dt = ut.firstChild, lt = Dt.firstChild;
                return ut.addEventListener("mouseleave", ()=>W()), ut.addEventListener("mouseenter", (Tt)=>{
                    $({
                        target: Tt.currentTarget,
                        content: b() ? "Expand" : "Collapse",
                        appearance: {
                            compact: !0,
                            showPointer: !0,
                            skipFadeInAnimation: !0
                        },
                        position: {
                            hoverPosition: wl.BELOW
                        }
                    });
                }), ut.addEventListener("click", (Tt)=>{
                    Tt.stopPropagation(), Tt.preventDefault(), (Tt.altKey || Tt.metaKey) && e.parentRef ? b() ? e.parentRef.expandAll() : e.parentRef.collapseAll() : y(!b());
                }), ut.style.setProperty("cursor", "pointer"), lt.style.setProperty("font-size", "18px"), lt.style.setProperty("color", "var(--cursor-icon-secondary)"), Rn((Tt)=>{
                    var ct = Ft.asClassName(Pe.chevronRight), Kt = b() ? void 0 : "rotate(90deg)";
                    return ct !== Tt.e && $i(lt, Tt.e = ct), Kt !== Tt.t && ((Tt.t = Kt) != null ? lt.style.setProperty("transform", Kt) : lt.style.removeProperty("transform")), Tt;
                }, {
                    e: void 0,
                    t: void 0
                }), ut;
            }
        }), Qe), tt.addEventListener("click", Ke), st.addEventListener("mouseleave", ()=>W()), st.addEventListener("mouseenter", (ut)=>{
            ce() || $({
                target: ut.currentTarget,
                content: me(),
                appearance: {
                    compact: !0,
                    showPointer: !0,
                    skipFadeInAnimation: !0
                },
                position: {
                    hoverPosition: wl.BELOW
                }
            });
        }), st.style.setProperty("display", "flex"), st.style.setProperty("max-width", "100%"), st.style.setProperty("overflow", "hidden"), Me(st, ()=>{
            const ut = _e(), Dt = Math.max(ut.lastIndexOf("/"), ut.lastIndexOf("\\")), lt = Dt >= 0 ? ut.slice(0, Dt) : "", Tt = Dt >= 0 ? ut.slice(Dt + 1) : ut;
            return [
                (()=>{
                    var ct = lWh();
                    return Me(ct, Tt), ct;
                })(),
                pe(wt, {
                    when: lt,
                    get children () {
                        var ct = uWh(), Kt = ct.firstChild, Rt = Kt.firstChild;
                        return ct.style.setProperty("margin-left", "4px"), ct.style.setProperty("direction", "rtl"), ct.style.setProperty("text-align", "left"), Kt.style.setProperty("direction", "ltr"), Kt.style.setProperty("unicode-bidi", "embed"), Me(Kt, lt, Rt), ct;
                    }
                })
            ];
        }), Me(vt, pe(wt, {
            get when () {
                return e.resource.status === "added";
            },
            get children () {
                return JHh();
            }
        }), null), Me(vt, pe(wt, {
            get when () {
                return e.resource.status === "deleted";
            },
            get children () {
                return eWh();
            }
        }), null), Me(vt, pe(wt, {
            get when () {
                return q() > 0;
            },
            get children () {
                var ut = tWh(), Dt = ut.firstChild;
                return Me(ut, q, null), ut;
            }
        }), null), Me(vt, pe(wt, {
            get when () {
                return z() > 0 && e.resource.status !== "added";
            },
            get children () {
                var ut = nWh(), Dt = ut.firstChild;
                return Me(ut, z, null), ut;
            }
        }), null), Me(Qe, pe(wt, {
            get when () {
                return se();
            },
            get children () {
                var ut = iWh();
                return ut.style.setProperty("width", "16px"), ut.style.setProperty("height", "16px"), ut.style.setProperty("display", "flex"), ut.style.setProperty("justify-content", "center"), ut.style.setProperty("align-items", "center"), ut.style.setProperty("flex-shrink", "0"), ut.style.setProperty("margin-right", "8px"), Me(ut, pe(Z__, {})), ut;
            }
        }), null), Me(ht, pe(wv, {
            get codicon () {
                return Pe.chatRounded;
            },
            hintText: "Add to Chat",
            onClick: (ut)=>{
                et(ut);
            },
            iconClass: "!text-[13px]",
            style: {
                transform: "translate(-2px, 0px)"
            }
        }), null), Me(ht, pe(wv, {
            get codicon () {
                return Pe.expander;
            },
            get hintText () {
                return D() ? "Show diff only" : "Show entire file";
            },
            onClick: Xe,
            iconClass: "!text-[14px]"
        }), null), Me(ht, pe(wt, {
            get when () {
                return e.showUndo;
            },
            get children () {
                return pe(wv, {
                    style: {
                        height: "16px"
                    },
                    get codicon () {
                        return Pe.xTwo;
                    },
                    onClick: Ce,
                    hintText: "Undo changes in this file",
                    iconClass: "!text-[16px]"
                });
            }
        }), null), Me(ht, pe(wt, {
            get when () {
                return e.showKeep;
            },
            get children () {
                return pe(wv, {
                    style: {
                        height: "16px"
                    },
                    get codicon () {
                        return Pe.checkTwo;
                    },
                    onClick: xe,
                    hintText: "Keep changes in this file",
                    iconClass: "!text-[9px]"
                });
            }
        }), null), Me(We, pe(wt, {
            get when () {
                return !J();
            },
            get children () {
                var ut = rWh(), Dt = ut.firstChild;
                return ut.style.setProperty("border-bottom-left-radius", "6px"), ut.style.setProperty("border-bottom-right-radius", "6px"), ut.style.setProperty("border", "1px solid var(--vscode-panel-border)"), ut.style.setProperty("border-top", "none"), ut.style.setProperty("overflow", "hidden"), Pl((lt)=>n = lt, Dt), Dt.style.setProperty("width", "100%"), Dt.style.setProperty("box-sizing", "border-box"), Rn((lt)=>{
                    var Tt = b() || !f() ? "none" : "block", ct = f() ? "block" : "none", Kt = `${p()}px`;
                    return Tt !== lt.e && ((lt.e = Tt) != null ? ut.style.setProperty("display", Tt) : ut.style.removeProperty("display")), ct !== lt.t && ((lt.t = ct) != null ? Dt.style.setProperty("display", ct) : Dt.style.removeProperty("display")), Kt !== lt.a && ((lt.a = Kt) != null ? Dt.style.setProperty("height", Kt) : Dt.style.removeProperty("height")), lt;
                }, {
                    e: void 0,
                    t: void 0,
                    a: void 0
                }), ut;
            }
        }), null), Me(We, pe(wt, {
            get when () {
                return Lr(()=>!!K())() && !b();
            },
            get children () {
                var ut = oWh(), Dt = ut.firstChild;
                return ut.style.setProperty("border-bottom-left-radius", "6px"), ut.style.setProperty("border-bottom-right-radius", "6px"), ut.style.setProperty("border", "1px solid var(--vscode-panel-border)"), ut.style.setProperty("border-top", "none"), ut.style.setProperty("padding", "12px 16px"), ut.style.setProperty("font-size", "12px"), ut.style.setProperty("color", "var(--vscode-descriptionForeground)"), ut.style.setProperty("background-color", "var(--vscode-editor-background)"), Me(ut, pe(wt, {
                    get when () {
                        return ne();
                    },
                    get children () {
                        return [
                            " ",
                            "from",
                            " ",
                            (()=>{
                                var lt = sWh();
                                return lt.style.setProperty("font-family", "var(--monaco-monospace-font)"), lt.style.setProperty("opacity", "0.8"), Me(lt, ne), lt;
                            })()
                        ];
                    }
                }), null), ut;
            }
        }), null), Rn((ut)=>{
            var Dt = `app-layout-multi-diff-item ${T() ? "isFocused" : ""} ${de() === "added" ? "is-added-file" : ""} ${de() === "deleted" ? "is-deleted-file" : ""}`, lt = e.resource.modifiedUri?.toString() || e.resource.originalUri?.toString(), Tt = {
                "min-height": f() ? void 0 : "20px",
                height: "auto",
                overflow: f() ? "visible" : "hidden",
                ...e.style
            }, ct = !!b(), Kt = !!b(), Rt = !!F(), Gt = !!(e.showKeep || e.showUndo), Nt = !e.showKeep && !e.showUndo;
            return Dt !== ut.e && $i(We, ut.e = Dt), lt !== ut.t && fs(We, "review-changes-resource-uri", ut.t = lt), ut.a = oa(We, Tt, ut.a), ct !== ut.o && it.classList.toggle("is-collapsed", ut.o = ct), Kt !== ut.i && Ne.classList.toggle("is-collapsed", ut.i = Kt), Rt !== ut.n && ht.classList.toggle("is-visible", ut.n = Rt), Gt !== ut.s && ht.classList.toggle("has-review-actions", ut.s = Gt), Nt !== ut.h && ht.classList.toggle("no-review-actions", ut.h = Nt), ut;
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0,
            h: void 0
        }), We;
    })();
}
function ssr(e) {
    const t = ir();
    let n;
    const i = [], r = new Map, s = new Map, o = new Map;
    let a;
    const c = new Map, l = new Set, u = new Map, h = new Set, p = new He;
    let g = !1;
    const f = Oe(()=>{
        let re;
        return e.listType === "flat" ? re = e.resources : re = e.groups.flatMap((ue)=>ue.resources), re;
    }), v = Oe(()=>e.listType === "flat" ? [] : e.groups), [b, y] = Ut(new Set), T = (re)=>{
        y((ue)=>{
            const ce = new Set(ue);
            return ce.has(re) ? ce.delete(re) : ce.add(re), ce;
        });
    }, E = Oe(()=>{
        const re = [], ue = b();
        return v().forEach((ce, de)=>{
            if (re.push({
                type: "group-header",
                groupIdx: de,
                title: ce.title || "Untitled group"
            }), !ue.has(de)) {
                ce.description && re.push({
                    type: "group-description",
                    groupIdx: de,
                    description: ce.description
                });
                for (const le of ce.resources)re.push(le);
            }
        }), re;
    }), A = e.scrollable;
    An(()=>{
        g = !0, h.forEach((re)=>clearTimeout(re)), h.clear(), p.dispose(), a && clearTimeout(a);
        for (const re of u.values())re.dispose();
        u.clear();
    });
    const R = new Set, D = new Map, P = (re)=>{
        const ue = window.setTimeout(()=>{
            if (R.delete(ue), g) return;
            const ce = document.querySelector(`[review-changes-resource-uri="${re}"]`);
            if (ce) {
                const de = D.get(ce);
                de && (ce.removeEventListener("animationend", de), D.delete(ce)), ce.classList.remove("review-changes-scroll-highlight"), ce.offsetWidth, ce.classList.add("review-changes-scroll-highlight");
                const le = ()=>{
                    ce.classList.remove("review-changes-scroll-highlight"), ce.removeEventListener("animationend", le), D.delete(ce);
                };
                ce.addEventListener("animationend", le), D.set(ce, le);
            }
        }, 150);
        R.add(ue);
    };
    An(()=>{
        R.forEach((re)=>window.clearTimeout(re)), R.clear();
        for (const [re, ue] of D)re.removeEventListener("animationend", ue), re.classList.remove("review-changes-scroll-highlight");
        D.clear();
    });
    const N = (re)=>{
        const ue = e.containerRef();
        return ue !== void 0 ? ue.querySelector(`[review-changes-resource-uri="${re}"]`) : null;
    }, O = (re)=>{
        const ue = e.containerRef();
        if (ue === void 0) return;
        const ce = re.getBoundingClientRect(), de = ue.getBoundingClientRect(), le = de.height;
        return {
            relativeTop: ce.top - de.top + A.getCurrentScrollPosition().scrollTop,
            containerHeight: le
        };
    }, F = Oe(()=>{
        const re = e.listType;
        return (ue, ce, de, le)=>{
            const ye = s.get(ce), _e = ye?.getTopForLineNumber(de) ?? 0, me = ye?.getScrollTop() ?? 0, Ce = _e - me, xe = ue + Ce, Le = le * .25;
            return Math.max(re === "flat" ? 8 : lNo + 8, xe - Le);
        };
    }), H = (re)=>{
        A.setScrollPositionNow({
            scrollTop: re
        });
    }, $ = Oe(()=>{
        const re = F();
        return (ue, ce, de)=>{
            const le = window.setTimeout(()=>{
                if (h.delete(le), g) return;
                const ye = N(ue);
                if (!ye) return;
                const _e = O(ye);
                if (!_e) return;
                const me = re(_e.relativeTop, ue, ce, _e.containerHeight);
                H(me), de || P(ue);
            }, 50);
            h.add(le);
        };
    }), W = Oe(()=>{
        const re = $();
        return (ue, ce, de, le)=>{
            g || O2(()=>{
                g || ce.waitForDiff().then(()=>{
                    g || re(ue, de, le);
                });
            }, p);
        };
    }), G = Oe(()=>{
        const re = $();
        return (ue, ce, de, le)=>{
            g || O2(()=>{
                g || (ce.revealLineInCenter(de), re(ue, de, le));
            }, p);
        };
    }), q = Oe(()=>{
        const re = W(), ue = G();
        return (ce, de, le, ye)=>{
            let _e = 0;
            const me = 3, Ce = ()=>{
                const xe = le(ce);
                if (xe) {
                    re(ce, xe, de, ye);
                    return;
                }
                if (_e += 1, _e < me) {
                    const Be = window.setTimeout(()=>{
                        h.delete(Be), !g && O2(()=>{
                            g || Ce();
                        }, p, window);
                    }, 100);
                    h.add(Be);
                    return;
                }
                const Le = o.get(ce);
                if (Le) {
                    ue(ce, Le, de, ye);
                    return;
                }
                c.set(ce, {
                    lineNumber: de
                });
            };
            Ce();
        };
    }), z = Oe(()=>e.enableVirtualization !== void 0 ? e.enableVirtualization : f().length > 10), [X, Y] = Ut(new Set);
    let Z;
    const K = ()=>(Z || (Z = new IntersectionObserver((re)=>{
            Y((ue)=>{
                const ce = new Set(ue);
                return re.forEach((de)=>{
                    const le = de.target.getAttribute("data-resource-key");
                    if (le) if (de.isIntersecting) ce.add(le);
                    else {
                        const ye = de.boundingClientRect, _e = window.innerHeight, me = _e * .5;
                        (ye.bottom < -me || ye.top > _e + me) && ce.delete(le);
                    }
                }), ce;
            });
        }, {
            rootMargin: "100px",
            threshold: 0
        })), Z);
    Jt(()=>{
        z() || (Z && (Z.disconnect(), Z = void 0), Y(new Set(f().map((re)=>t.reviewChangesService.getResourceKey(re, e.diffViewMode)))));
    }), Kc(()=>{
        const re = document.getElementsByClassName("monaco-workbench")[0];
        if (re && !n) {
            const ue = document.createElement("div");
            ue.classList.add("app-layout-multi-diff-anchor", "monaco-editor"), re.appendChild(ue), n = ue;
        }
    }), An(()=>{
        i.length = 0, r.clear(), s.clear(), c.clear(), l.clear(), Z && Z.disconnect();
        try {
            n && n.parentElement && n.remove();
        } catch  {}
    });
    const J = Oe(()=>{
        const re = W(), ue = q(), ce = e.listType;
        return {
            expandAll: ()=>{
                r.forEach((de)=>de.expand());
            },
            collapseAll: ()=>{
                r.forEach((de)=>de.collapse());
            },
            expandAllGroups: ()=>{
                y(new Set);
            },
            collapseAllGroups: ()=>{
                const de = new Set(v().map((le, ye)=>ye));
                y(de);
            },
            expandResourceByUri: (de)=>{
                const le = s.get(de);
                le && le.expand();
            },
            scrollToResource: (de)=>{
                const { modifiedUri: le, lineNumber: ye, omitHighlight: _e } = de, me = f().length, Ce = l.size >= me && me > 0, xe = l.has(le), Le = (We)=>i.find((Ne)=>{
                        const Fe = Ne.getModifiedEditor().getModel();
                        return (Fe ? Fe.uri.toString() : void 0) === We;
                    }), Be = (We, it)=>{
                    const Ne = s.get(le);
                    Ne !== void 0 && Ne.expand(), re(le, We, it, _e);
                };
                if (ye !== void 0 && ye > 0 && xe) {
                    const We = Le(le);
                    if (We) {
                        Be(We, ye);
                        return;
                    }
                    ue(le, ye, Le, _e);
                    return;
                }
                !Ce && !xe && ye !== void 0 && c.set(le, {
                    lineNumber: ye
                });
                const je = N(le);
                if (je === null || e.containerRef() === void 0) return;
                const Ge = O(je);
                if (Ge === void 0) return;
                const { relativeTop: Xe } = Ge;
                if (ye !== void 0 && ye > 0 && Ce) {
                    const We = Le(le);
                    if (We !== void 0) {
                        const it = s.get(le);
                        it !== void 0 && it.expand(), re(le, We, ye, _e);
                        return;
                    }
                    ue(le, ye, Le, _e);
                }
                const Ke = ce === "flat" ? 8 : lNo + 8, et = Math.max(Ke, Xe - Ke + 4);
                H(et), _e || P(le);
            },
            dismissHovers: ()=>{
                i.forEach((de)=>{
                    try {
                        const le = de.getOriginalEditor(), ye = de.getModifiedEditor();
                        Fx.get(le)?.hideContentHover(), Fx.get(ye)?.hideContentHover(), Aoe.get(le)?.hideGlyphHover(), Aoe.get(ye)?.hideGlyphHover(), V8e.get(le)?.hideHoverWidget(), V8e.get(ye)?.hideHoverWidget();
                    } catch  {}
                });
            }
        };
    });
    Jt(()=>{
        const re = J();
        e.ref && e.ref(re);
    });
    const ne = (re)=>z() ? X().has(re) : !0, ee = Oe(()=>{
        const re = J(), ue = W(), ce = z(), de = e.diffViewMode, le = e.readonly, ye = e.onReadonlyClick, _e = e.itemStyle, me = e.onDiffEditorMount, Ce = e.onDiffEditorUnmount, xe = e.defaultCollapsed, Le = e.getShowKeep?.(), Be = e.getShowUndo?.();
        return (je)=>{
            const Ge = t.reviewChangesService.getResourceKey(je, de), Xe = je.modifiedUri?.toString();
            return pe(ob_, {
                resource: je,
                style: _e,
                diffWidgets: i,
                addDiffWidget: (Ke)=>{
                    i.push(Ke);
                },
                registerSingleEditor: (Ke, et)=>{
                    Ke && o.set(Ke, et);
                },
                overflowAnchorEl: n,
                setOverflowAnchorEl: (Ke)=>{
                    n = Ke;
                },
                showKeep: Le,
                showUndo: Be,
                diffViewMode: de,
                parentRef: re,
                ref: (Ke)=>{
                    r.set(Ge, Ke), Xe && s.set(Xe, Ke);
                },
                getIsVisible: ()=>ne(Ge),
                onIntersectionObserve: ce ? (Ke)=>K().observe(Ke) : void 0,
                readonly: le,
                onReadonlyClick: ye,
                get grouped () {
                    return e.listType === "grouped";
                },
                get showGlyphMargin () {
                    return e.showGlyphMargin;
                },
                defaultCollapsed: xe,
                get showOnlyCommentAreas () {
                    return e.showOnlyCommentAreas;
                },
                get skipComposerContext () {
                    return e.skipComposerContext;
                },
                onDiffEditorMount: (Ke, et, We)=>{
                    const it = Ke.modifiedUri?.toString() || Ke.originalUri?.toString();
                    if (it && l.add(it), it) {
                        u.get(it)?.dispose();
                        const Fe = !!Ke.lineCommentHandler, Qe = Ke.createCommentRenderer(et, We, Fe ? t.githubPRService : void 0, Fe ? ()=>{
                            const st = Ke.comments.get()[0]?.metadata?.prUrl;
                            st && t.githubPRService.getOrFetchPRDetails(st, !0);
                        } : void 0);
                        u.set(it, Qe);
                    }
                    if (me?.(Ke, et, We), l.size === f().length && c.size > 0) {
                        const [Fe, Qe] = c.entries().next().value || [];
                        Fe && Qe && (c.delete(Fe), setTimeout(()=>{
                            re.scrollToResource({
                                modifiedUri: Fe,
                                lineNumber: Qe.lineNumber
                            });
                        }, 100));
                    } else if (it && c.has(it)) {
                        const Fe = c.get(it);
                        if (c.delete(it), Fe?.lineNumber !== void 0 && Fe.lineNumber > 0) {
                            const Qe = it ? s.get(it) : void 0;
                            Qe && Qe.expand(), requestAnimationFrame(()=>{
                                const tt = i.find((st)=>{
                                    const vt = st.getModifiedEditor().getModel();
                                    return (vt ? vt.uri.toString() : void 0) === it;
                                });
                                tt && ue(it, tt, Fe.lineNumber);
                            });
                        }
                    }
                },
                onDiffEditorUnmount: (Ke)=>{
                    const et = Ke.modifiedUri?.toString() || Ke.originalUri?.toString();
                    et !== void 0 && l.delete(et), et !== void 0 && o.delete(et), et !== void 0 && (u.get(et)?.dispose(), u.delete(et)), Ce?.(Ke);
                }
            });
        };
    });
    return [
        pe(wt, {
            get when () {
                return e.isLoading;
            },
            get children () {
                var re = dWh();
                return Me(re, pe(Bnt, {
                    size: 20
                })), re;
            }
        }),
        pe(wt, {
            get when () {
                return !e.isLoading;
            },
            get children () {
                return [
                    pe(wt, {
                        get when () {
                            return f().length === 0;
                        },
                        get children () {
                            var re = hWh();
                            return re.addEventListener("mousedown", (ue)=>{
                                ue.preventDefault(), ue.currentTarget.focus();
                            }), re.style.setProperty("width", "100%"), re.style.setProperty("padding", "0 16px"), re.style.setProperty("text-align", "center"), re.style.setProperty("box-sizing", "border-box"), Me(re, ()=>e.emptyMessage), re;
                        }
                    }),
                    pe(wt, {
                        get when () {
                            return f().length > 0;
                        },
                        get children () {
                            return pe(qT, {
                                get children () {
                                    return [
                                        pe(Bd, {
                                            get when () {
                                                return e.listType === "flat";
                                            },
                                            get children () {
                                                return pe(tm, {
                                                    get each () {
                                                        return f();
                                                    },
                                                    children: (re)=>ee()(re)
                                                });
                                            }
                                        }),
                                        pe(Bd, {
                                            get when () {
                                                return e.listType === "grouped";
                                            },
                                            get children () {
                                                return pe(tm, {
                                                    get each () {
                                                        return E();
                                                    },
                                                    children: (re, ue)=>pe(qT, {
                                                            get children () {
                                                                return [
                                                                    pe(Bd, {
                                                                        get when () {
                                                                            return gWh(re) && re;
                                                                        },
                                                                        children: (ce)=>{
                                                                            const de = ()=>!b().has(ce().groupIdx), ye = E()[ue() + 1], _e = ()=>ye !== void 0 && !uNo(ye);
                                                                            return (()=>{
                                                                                var me = pWh(), Ce = me.firstChild, xe = Ce.firstChild, Le = Ce.nextSibling;
                                                                                return me.addEventListener("click", (Be)=>{
                                                                                    const je = window.getSelection();
                                                                                    je && je.toString().length > 0 || T(ce().groupIdx);
                                                                                }), me.style.setProperty("top", "0px"), me.style.setProperty("box-sizing", "border-box"), me.style.setProperty("height", "26px"), Me(Le, ()=>ce().title), Rn((Be)=>{
                                                                                    var je = de() ? "true" : "false", Ge = _e() ? "4px" : void 0, Xe = de() ? Ft.asClassName(Pe.chevronDown) : Ft.asClassName(Pe.chevronRight);
                                                                                    return je !== Be.e && fs(me, "aria-expanded", Be.e = je), Ge !== Be.t && ((Be.t = Ge) != null ? me.style.setProperty("margin-bottom", Ge) : me.style.removeProperty("margin-bottom")), Xe !== Be.a && $i(xe, Be.a = Xe), Be;
                                                                                }, {
                                                                                    e: void 0,
                                                                                    t: void 0,
                                                                                    a: void 0
                                                                                }), me;
                                                                            })();
                                                                        }
                                                                    }),
                                                                    pe(Bd, {
                                                                        get when () {
                                                                            return uNo(re) && re;
                                                                        },
                                                                        children: (ce)=>(()=>{
                                                                                var de = mWh();
                                                                                return Me(de, ()=>ce().description), de;
                                                                            })()
                                                                    }),
                                                                    pe(Bd, {
                                                                        get when () {
                                                                            return fWh(re) && re;
                                                                        },
                                                                        children: (ce)=>ee()(ce())
                                                                    })
                                                                ];
                                                            }
                                                        })
                                                });
                                            }
                                        })
                                    ];
                                }
                            });
                        }
                    })
                ];
            }
        })
    ];
}
function TWh(e) {
    const t = ir();
    let n, i;
    return Kc(()=>{
        if (!(!n || i)) {
            try {
                const r = t.instantiationService.invokeFunction((u)=>u.get(Lv)), s = t.instantiationService.invokeFunction((u)=>u.get(xn)), o = t.instantiationService.invokeFunction((u)=>u.get(va)), a = t.instantiationService.invokeFunction((u)=>u.get(qr));
                i = new IWh(r, s, o, a, e.mountedEditors, e.multiDiffRef), n.appendChild(i.getDomNode()), e.onWidgetCreated(i);
                const l = t.instantiationService.invokeFunction((u)=>u.get($n)).onDidExecuteCommand((u)=>{
                    if (u.commandId === "actions.find" && i) {
                        const h = e.containerRef(), p = document.activeElement;
                        if (!(!!(p instanceof Node && h?.contains(p)) || [
                            ...e.mountedEditors
                        ].some(([, { editor: v }])=>v.hasTextFocus()))) return;
                        let f;
                        for (const [v, { editor: b }] of e.mountedEditors)if (b.hasTextFocus()) {
                            const y = b.getSelection();
                            if (y && !y.isEmpty()) {
                                const T = b.getModel();
                                T && y.startLineNumber === y.endLineNumber && (f = T.getValueInRange(y));
                            }
                            break;
                        }
                        i.isVisible() ? f ? (i.updateSearchString(f), setTimeout(()=>{
                            i?.selectAllText();
                        }, 0)) : setTimeout(()=>{
                            i?.focusInput(), i?.selectAllText();
                        }, 0) : (i.show(f), setTimeout(()=>{
                            i?.focusInput(), f && i?.selectAllText();
                        }, 0));
                    } else if (u.commandId === "editor.action.nextMatchFindAction" && i) {
                        const h = document.activeElement, p = e.containerRef();
                        if (!p || !p.contains(h)) return;
                        i.isVisible() || (i.show(), setTimeout(()=>{
                            i?.focusInput();
                        }, 0)), i.find(!1);
                    } else if (u.commandId === "editor.action.previousMatchFindAction" && i) {
                        const h = document.activeElement, p = e.containerRef();
                        if (!p || !p.contains(h)) return;
                        i.isVisible() || (i.show(), setTimeout(()=>{
                            i?.focusInput();
                        }, 0)), i.find(!0);
                    }
                });
                An(()=>{
                    l.dispose();
                });
            } catch (r) {
                console.error("[ReviewChangesPane] Failed to initialize find widget:", r);
            }
            An(()=>{
                i && (i.dispose(), i = void 0);
            });
        }
    }), (()=>{
        var r = EWh();
        return Pl((s)=>{
            n = s, e.ref?.(s);
        }, r), r;
    })();
}
function xb_(e) {
    const t = ir();
    let n, i;
    const r = new He, [s, o] = Ut([]), [a, c] = Ut(-1), [l, u] = Ut(""), [h, p] = Ut({
        isRegex: !1,
        isCaseSensitive: !1,
        isWholeWord: !1
    }), g = new ve, f = new ve;
    let v = null;
    const b = ()=>({
            hasFindResult: g.event,
            onDidStopFind: f.event,
            checkImeCompletionState: !0,
            find (G, q) {
                const z = s();
                if (z.length === 0) return;
                let X = a();
                q ? X = X <= 0 ? z.length - 1 : X - 1 : X = X >= z.length - 1 ? 0 : X + 1, c(X), F(X), N();
            },
            updateFind (G, q) {
                u(G), p(q), T(G, q);
            },
            stopFind (G) {
                O(), o([]), c(-1), u(""), v = null, f.fire();
            },
            focus () {
                e.containerRef()?.focus();
            },
            async getResultCount () {
                const G = s(), q = a();
                if (G.length !== 0) return {
                    resultIndex: q >= 0 ? q : 0,
                    resultCount: G.length
                };
            }
        });
    function y() {
        const G = e.containerRef();
        return G ? pRo(G, e.contentSelectors) : {
            text: "",
            textNodes: []
        };
    }
    function T(G, q) {
        if (!G) {
            O(), o([]), c(-1), v = null, g.fire(!1);
            return;
        }
        v = y();
        const z = c5n(v.text, G, q);
        o(z), z.length > 0 ? (c(0), F(0), g.fire(!0)) : (c(-1), g.fire(!1)), N();
    }
    const E = new Set, A = `
::highlight(html-find-all) {
	background-color: var(--cursor-bg-search-match) !important;
	color: inherit !important;
}
::highlight(html-find-current) {
	background-color: var(--cursor-bg-search-match-current) !important;
	color: inherit !important;
}
`;
    function R(G) {
        const q = [], z = document.createTreeWalker(G, NodeFilter.SHOW_ELEMENT);
        let X;
        for(; X = z.nextNode();){
            const Y = X;
            Y.shadowRoot && (q.push(Y.shadowRoot), q.push(...R(Y.shadowRoot)));
        }
        return q;
    }
    function D() {
        const G = e.containerRef();
        if (!G) return;
        const q = R(G);
        for (const z of q){
            if (z.querySelector("style[data-html-find-highlight]")) continue;
            const Y = document.createElement("style");
            Y.setAttribute("data-html-find-highlight", "true"), Y.textContent = A, z.appendChild(Y), E.add(Y);
        }
    }
    function P() {
        for (const G of E)G.remove();
        E.clear();
    }
    function N() {
        O();
        const G = v?.textNodes ?? [], q = s(), z = a();
        if (!(q.length === 0 || G.length === 0) && (D(), "Highlight" in window && "highlights" in CSS)) try {
            const X = [], Y = [];
            for(let Z = 0; Z < q.length; Z++){
                const K = q[Z], J = wnr(K, G);
                J && (Z === z ? Y.push(J) : X.push(J));
            }
            if (X.length > 0) {
                const Z = new Highlight(...X);
                CSS.highlights.set("html-find-all", Z);
            }
            if (Y.length > 0) {
                const Z = new Highlight(...Y);
                CSS.highlights.set("html-find-current", Z);
            }
        } catch (X) {
            console.warn("[HTMLFindWidgetHost] CSS Highlight API failed:", X);
        }
    }
    function O() {
        "highlights" in CSS && (CSS.highlights.delete("html-find-all"), CSS.highlights.delete("html-find-current")), P();
    }
    function F(G) {
        const q = s();
        if (G < 0 || G >= q.length) return;
        const z = e.scrollableRef?.(), X = v?.textNodes ?? [], Y = q[G];
        if (X.length !== 0) {
            for (const { node: Z, start: K, end: J } of X)if (Y.start >= K && Y.start < J) {
                const ne = Z.parentElement;
                if (!ne) break;
                if (z) {
                    const ee = e.containerRef();
                    if (!ee) break;
                    const se = ee.querySelector(".monaco-scrollable-element > div");
                    if (se) {
                        const re = se.getBoundingClientRect(), ue = ne.getBoundingClientRect(), { scrollTop: ce } = z.getCurrentScrollPosition(), de = ue.top - re.top + ce, { height: le, scrollHeight: ye } = z.getScrollDimensions(), _e = de - le / 2 + ue.height / 2, me = Math.max(0, ye - le), Ce = Math.max(0, Math.min(_e, me));
                        z.setScrollPositionSmooth({
                            scrollTop: Ce
                        });
                    }
                } else ne.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
                break;
            }
        }
    }
    function H() {
        const G = e.containerRef();
        if (!G || n) return;
        i = document.createElement("div"), i.className = "html-find-widget-container";
        const q = b(), z = t.instantiationService.invokeFunction((J)=>J.get(Lv)), X = t.instantiationService.invokeFunction((J)=>J.get(xn)), Y = t.instantiationService.invokeFunction((J)=>J.get(va)), Z = t.instantiationService.invokeFunction((J)=>J.get(qr));
        n = new csr(q, z, X, Y, Z);
        const K = G.firstChild;
        K ? G.insertBefore(i, K) : G.appendChild(i), i.appendChild(n.getDomNode());
    }
    function $() {
        O(), v = null, n && (n.dispose(), n = void 0), i && (i.remove(), i = void 0);
    }
    function W() {
        if (!n) return;
        const G = e.containerRef();
        if (!G) return;
        const q = window.getSelection();
        let z;
        if (q && q.rangeCount > 0) {
            const X = q.getRangeAt(0);
            !X.collapsed && G.contains(X.commonAncestorContainer) && (z = q.toString().trim(), z.includes(`
`) && (z = void 0));
        }
        if (n.isVisible()) z && (u(z), T(z, h())), n.reveal(z);
        else {
            n.reveal(z);
            const X = G.clientWidth ?? 0;
            n.layout(X);
        }
    }
    return Jt(()=>{
        const G = e.containerRef();
        if (G) {
            H();
            const q = (z)=>{
                (navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? z.metaKey && z.key === "f" : z.ctrlKey && z.key === "f") && !z.shiftKey && !z.altKey && (z.preventDefault(), z.stopPropagation(), W()), z.key === "Escape" && n?.isVisible() && n.hide(), z.key === "Enter" && n?.isVisible() && (z.preventDefault(), z.stopPropagation(), n.find(z.shiftKey));
            };
            G.addEventListener("keydown", q, !0), An(()=>{
                G.removeEventListener("keydown", q, !0);
            });
        }
    }), Kc(()=>{
        const q = t.instantiationService.invokeFunction((z)=>z.get($n)).onDidExecuteCommand((z)=>{
            if (z.commandId === "actions.find" && n) {
                const X = e.containerRef();
                if (!X) return;
                const Y = X.closest(".editor-group-container.active"), Z = X.closest(".editor-instance"), K = Z && window.getComputedStyle(Z).display !== "none";
                if (!Y && !K) return;
                W();
            } else if (z.commandId === "editor.action.nextMatchFindAction" && n) {
                if (!e.containerRef()?.closest(".editor-group-container.active")) return;
                n.isVisible() && n.find(!1);
            } else if (z.commandId === "editor.action.previousMatchFindAction" && n) {
                if (!e.containerRef()?.closest(".editor-group-container.active")) return;
                n.isVisible() && n.find(!0);
            }
        });
        r.add(q);
    }), An(()=>{
        $(), r.dispose(), g.dispose(), f.dispose();
    }), null;
}
function Rb_(e) {
    const t = ir(), { showHover: n, hideHover: i } = iB(800);
    let r = 0;
    const s = (o)=>{
        o.preventDefault(), o.stopPropagation(), i();
        const a = e.diffViewMode(), c = e.onExpandStateChange, l = new er("unified-diff-mode", "Unified View", void 0, !0, ()=>{
            t.reviewChangesService.setDiffViewMode(CK.Unified);
        });
        l.checked = a === CK.Unified;
        const u = new er("split-diff-mode", "Split View", void 0, !0, ()=>{
            t.reviewChangesService.setDiffViewMode(CK.Split);
        });
        u.checked = a === CK.Split;
        const h = new er("expand-all", "Expand All", void 0, !0, ()=>{
            r++, c({
                state: "expanded",
                trigger: r
            });
        }), p = new er("collapse-all", "Collapse All", void 0, !0, ()=>{
            r++, c({
                state: "collapsed",
                trigger: r
            });
        }), g = [];
        e.additionalActions && e.additionalActions.length > 0 && (g.push(...e.additionalActions), g.push(new Vc)), g.push(l, u, new Vc, h, p), t.contextMenuService.showContextMenu({
            getAnchor: ()=>({
                    x: o.clientX,
                    y: o.clientY
                }),
            getActions: ()=>g
        });
    };
    return (()=>{
        var o = bGh(), a = o.firstChild, c = a.firstChild;
        return a.addEventListener("mouseleave", ()=>i()), a.addEventListener("mouseenter", (l)=>{
            n({
                target: l.currentTarget,
                content: "More options",
                appearance: {
                    compact: !0,
                    skipFadeInAnimation: !0
                },
                position: {
                    hoverPosition: wl.BELOW
                }
            });
        }), a.addEventListener("click", s), Rn(()=>$i(c, Ft.asClassName(Pe.ellipsisTwo))), o;
    })();
}
function yGh(e) {
    return e.replace(/\r\n/g, `
`).replace(/\r/g, `
`);
}
function Mb_(e) {
    const t = e.trimStart();
    if (!t.startsWith(">")) return e;
    const n = t.slice(1);
    return n.startsWith(" ") ? n.slice(1) : n;
}
function Pb_(e) {
    const t = e.trim();
    return /^-\s+\*\*[^*]+?\*\*:\s*$/.test(t);
}
function Lb_(e) {
    return e.trimStart().startsWith("- ");
}
function Nb_(e) {
    return /^[ \t]{2,}-\s+/.test(e);
}
function Ob_(e) {
    return e.replace(/\s+$/, "");
}
function Fb_(e) {
    const n = yGh(e).split(`
`), i = [];
    for (const l of n){
        const u = l.replace(/\s+$/, "");
        if (u.trim() === "") {
            i.push(u);
            continue;
        }
        const h = u.trimStart();
        if (h.startsWith(">")) {
            i.push(u);
            continue;
        }
        const p = h;
        let g = i.length - 1;
        for(; g >= 0 && i[g].trim() === "";)g--;
        if (g < 0) {
            i.push(`> ${p}`);
            continue;
        }
        i[g] = `${i[g].replace(/\s+$/, "")} ${p}`;
    }
    const r = i.map((l)=>{
        const u = Mb_(l);
        return l.trimStart().startsWith(">") && u.trim() === "" ? "" : u;
    }), s = r.findIndex((l)=>l.trim() !== "");
    if (s !== -1) {
        const u = r[s].trim().match(/^\[\!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:\s+(.*))?$/i);
        if (u) {
            const h = u[1].toUpperCase(), p = u[2]?.trim();
            r[s] = `**${TNo[h] ?? h}**`;
            const g = [
                ""
            ];
            p && g.push(p), r.splice(s + 1, 0, ...g);
        }
    }
    const o = [];
    let a = !1;
    for (const l of r){
        const u = l.trim();
        if (u === "") {
            o.push("");
            continue;
        }
        if (Pb_(l)) {
            a = !0, o.push(u);
            continue;
        }
        if (Lb_(l)) {
            const h = Ob_(l);
            a && !Nb_(h) ? o.push(`  ${h.trimStart()}`) : o.push(h);
            continue;
        }
        o.push(l.trimEnd());
    }
    return o.map((l)=>l.trim() === "" ? ">" : `> ${l}`).join(`
`).trim();
}
function Bb_(e) {
    const t = e.split(`
`), n = [];
    let i = 0;
    for(; i < t.length;){
        const r = t[i], s = r.trimStart();
        if (s.startsWith(">")) {
            const a = s.slice(1).trim().match(/^\[\!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:\s+(.*))?$/i);
            if (a) {
                const c = a[1].toUpperCase(), l = a[2]?.trim();
                n.push(`> **${TNo[c] ?? c}**`), n.push(">"), l && n.push(`> ${l}`), i++;
                continue;
            }
        }
        n.push(r), i++;
    }
    return n.join(`
`);
}
function SGh(e) {
    let t = yGh(e), n = !1;
    for(;;){
        const i = kGh.exec(t);
        if (!i || i.index === void 0) break;
        const r = i.index, s = r + i[0].length, o = t.slice(s), a = wGh.exec(o);
        if (!a || a.index === void 0) {
            t = `${t.slice(0, r)}${t.slice(s)}`, n = !0;
            break;
        }
        const c = s + a.index, l = c + a[0].length, u = t.slice(s, c), h = Fb_(u);
        t = `${t.slice(0, r)}
${h}
${t.slice(l)}`;
    }
    return n || (t = Bb_(t)), t;
}
function Ub_(e) {
    const [t, n] = Ut(!1), [i, r] = Ut(!1);
    let s;
    const o = (u)=>u && (u = u.replace(/(&nbsp;|\s)*<a[^>]*cursor\.com[^>]*>[\s\S]*?<\/a>(&nbsp;|\s)*/gi, ""), u = SGh(u), u = u.replace(/(---\s*\n*\s*)+/g, `---
`), u.trim()), a = ()=>e.content ? o(e.content) : "", c = ()=>e.maxHeight ?? IGh, l = ()=>{
        s && r(s.scrollHeight > c());
    };
    return Kc(()=>{
        setTimeout(l, 0);
        const u = new ResizeObserver(()=>{
            l();
        });
        s && u.observe(s), An(()=>{
            u.disconnect();
        });
    }), pe(wt, {
        get when () {
            return e.content;
        },
        get children () {
            var u = xGh(), h = u.firstChild, p = s;
            return typeof p == "function" ? Pl(p, h) : s = h, h.style.setProperty("overflow", "hidden"), h.style.setProperty("position", "relative"), Me(h, pe(hRo, {
                get content () {
                    return a();
                },
                get isTrusted () {
                    return e.isTrusted ?? !1;
                },
                supportThemeIcons: !0,
                supportHtml: !0
            }), null), Me(h, pe(wt, {
                get when () {
                    return Lr(()=>!t())() && i();
                },
                get children () {
                    var g = TGh();
                    return g.style.setProperty("position", "absolute"), g.style.setProperty("bottom", "0"), g.style.setProperty("left", "0"), g.style.setProperty("right", "0"), g.style.setProperty("height", "40px"), g.style.setProperty("background", "linear-gradient(to top, var(--vscode-editor-background) 0%, transparent 100%)"), g.style.setProperty("pointer-events", "none"), g;
                }
            }), null), Me(u, pe(wt, {
                get when () {
                    return i();
                },
                get children () {
                    var g = EGh();
                    return g.addEventListener("click", ()=>n(!t())), Me(g, ()=>t() ? "Less" : "More"), g;
                }
            }), null), Rn((g)=>(g = t() ? "none" : `${c()}px`) != null ? h.style.setProperty("max-height", g) : h.style.removeProperty("max-height")), u;
        }
    });
}
function Hb_(e) {
    const t = e.trim().split(/\s+/);
    return t.length >= 2 ? (t[0][0] + t[t.length - 1][0]).toUpperCase() : e.substring(0, 2).toUpperCase();
}
function Wb_(e) {
    const t = ir(), n = Rg(), i = ha(n, ENo), r = (v)=>n.set(ENo, v), s = ha(n, xNo), o = (v)=>n.set(xNo, v), a = ha(n, INo), c = (v)=>n.set(INo, v), { linesAdded: l, linesRemoved: u } = YHh(()=>[
            ...e.resources
        ]);
    Jt(()=>{
        const v = e.resources.length;
        v > 0 && r(v);
    }), Jt(()=>{
        const v = l();
        v > 0 && o(v);
    }), Jt(()=>{
        const v = u();
        v > 0 && c(v);
    });
    const h = Oe(()=>{
        const v = e.resources.length, b = i();
        return (e.isLoading ?? !1) && v === 0 && b !== void 0 && b > 0 ? b : v;
    }), p = Oe(()=>{
        const v = l(), b = s();
        return (e.isLoading ?? !1) && v === 0 && b !== void 0 && b > 0 && e.resources.length === 0 ? b : v;
    }), g = Oe(()=>{
        const v = u(), b = a();
        return (e.isLoading ?? !1) && v === 0 && b !== void 0 && b > 0 && e.resources.length === 0 ? b : v;
    }), f = ()=>e.tabs !== void 0 && e.tabs.length > 0;
    return [
        (()=>{
            var v = OGh(), b = v.firstChild, y = b.firstChild, T = y.firstChild, E = b.nextSibling, A = E.firstChild, R = A.firstChild, D = R.nextSibling, P = D.firstChild, N = P.nextSibling;
            return Me(v, pe(wt, {
                get when () {
                    return e.prStatus;
                },
                get children () {
                    return pe(Gb_, {
                        get status () {
                            return e.prStatus;
                        }
                    });
                }
            }), b), Me(T, ()=>e.title || "\xA0"), Me(y, pe(wt, {
                get when () {
                    return e.prUrl;
                },
                get children () {
                    return pe(wv, {
                        class: "smart-review-panel__external-link-icon",
                        get codicon () {
                            return Pe.linkExternal;
                        },
                        hintText: "Open in GitHub",
                        onClick: ()=>{
                            t.analyticsService.trackEvent("pr_review.open_in_github_clicked"), e.onOpenUrl?.(e.prUrl);
                        },
                        size: 18
                    });
                }
            }), null), Me(y, pe(wt, {
                get when () {
                    return e.rightTitleElement;
                },
                get children () {
                    var O = AGh();
                    return Me(O, ()=>e.rightTitleElement), O;
                }
            }), null), Me(b, pe(wt, {
                get when () {
                    return e.summary;
                },
                get children () {
                    return pe(Ub_, {
                        get content () {
                            return e.summary;
                        },
                        get maxHeight () {
                            return e.summaryMaxHeight;
                        },
                        get isTrusted () {
                            return e.summaryIsTrusted;
                        }
                    });
                }
            }), null), Me(P, (()=>{
                var O = Lr(()=>h() === 1);
                return ()=>O() ? "1 file" : `${h()} files`;
            })()), Me(D, pe(wt, {
                get when () {
                    return p() > 0 || g() > 0;
                },
                get children () {
                    return RGh();
                }
            }), N), Me(N, (()=>{
                var O = Lr(()=>p() > 0);
                return ()=>O() && (()=>{
                        var F = UGh(), H = F.firstChild;
                        return Me(F, p, null), F;
                    })();
            })(), null), Me(N, (()=>{
                var O = Lr(()=>g() > 0);
                return ()=>O() && (()=>{
                        var F = $Gh(), H = F.firstChild;
                        return Me(F, g, null), F;
                    })();
            })(), null), Me(E, pe(wt, {
                get when () {
                    return e.issuesCount !== void 0 && e.issuesCount > 0;
                },
                get children () {
                    var O = DGh(), F = O.firstChild, H = F.nextSibling, $ = H.firstChild;
                    return Me($, ()=>`${e.issuesCount} found`), O;
                }
            }), null), Me(E, pe(wt, {
                get when () {
                    return e.previewLinks && e.previewLinks.length > 0;
                },
                get children () {
                    var O = MGh(), F = O.firstChild, H = F.nextSibling;
                    return Me(H, pe(tm, {
                        get each () {
                            return e.previewLinks;
                        },
                        children: ($, W)=>[
                                pe(wt, {
                                    get when () {
                                        return W() > 0;
                                    },
                                    get children () {
                                        return HGh();
                                    }
                                }),
                                (()=>{
                                    var G = WGh(), q = G.firstChild, z = q.nextSibling;
                                    return G.addEventListener("click", ()=>{
                                        $.url.includes("github.com") ? t.openerService.open(Ee.parse($.url), {
                                            openExternal: !0
                                        }) : (e.onOpenPreviewLink ?? e.onOpenUrl)?.($.url);
                                    }), Me(q, ()=>$.name), Rn(()=>$i(z, Ft.asClassName(Pe.linkExternal))), G;
                                })()
                            ]
                    })), O;
                }
            }), null), Me(E, pe(wt, {
                get when () {
                    return e.authorInfo;
                },
                get children () {
                    var O = NGh(), F = O.firstChild, H = F.nextSibling, $ = H.firstChild, W = $.firstChild, G = $.nextSibling;
                    return Me(W, pe(wt, {
                        get when () {
                            return e.authorInfo.avatarUrl;
                        },
                        get fallback () {
                            return (()=>{
                                var q = GGh();
                                return Me(q, ()=>Hb_(e.authorInfo.username)), q;
                            })();
                        },
                        get children () {
                            var q = PGh();
                            return Rn((z)=>{
                                var X = e.authorInfo.avatarUrl, Y = e.authorInfo.username;
                                return X !== z.e && fs(q, "src", z.e = X), Y !== z.t && fs(q, "alt", z.t = Y), z;
                            }, {
                                e: void 0,
                                t: void 0
                            }), q;
                        }
                    })), Me($, pe(wt, {
                        get when () {
                            return e.authorInfo.hasAgentContribution;
                        },
                        get children () {
                            var q = LGh(), z = q.firstChild;
                            return Rn(()=>fs(z, "src", Gd.asBrowserUri("vs/workbench/services/ai/browser/media/cursor_blame_logo.svg").toString(!0))), q;
                        }
                    }), null), Me(G, ()=>e.authorInfo.username, null), Me(G, pe(wt, {
                        get when () {
                            return e.authorInfo.hasAgentContribution;
                        },
                        children: " & Agent"
                    }), null), O;
                }
            }), null), Me(E, pe(wt, {
                get when () {
                    return e.additionalMetaSections;
                },
                get children () {
                    return e.additionalMetaSections;
                }
            }), null), Rn(()=>v.classList.toggle("smart-review-panel__header--no-tabs", !f())), v;
        })(),
        pe(wt, {
            get when () {
                return e.tabs && e.tabs.length > 0 || e.rightTabsElement;
            },
            get children () {
                var v = BGh(), b = v.firstChild, y = b.nextSibling;
                return Me(b, pe(tm, {
                    get each () {
                        return e.tabs;
                    },
                    children: (T)=>pe(wt, {
                            get when () {
                                return T.show === void 0 || T.show();
                            },
                            fallback: null,
                            get children () {
                                var E = VGh();
                                return xA(E, "click", T.onClick), Me(E, ()=>T.label), Rn((A)=>{
                                    var R = !!T.active, D = !T.active;
                                    return R !== A.e && E.classList.toggle("active", A.e = R), D !== A.t && E.classList.toggle("inactive", A.t = D), A;
                                }, {
                                    e: void 0,
                                    t: void 0
                                }), E;
                            }
                        })
                })), Me(y, pe(wt, {
                    get when () {
                        return e.isLoading;
                    },
                    get children () {
                        var T = FGh();
                        return Me(T, pe(Bnt, {
                            size: 16
                        })), T;
                    }
                }), null), Me(y, pe(wt, {
                    get when () {
                        return e.rightTabsElement;
                    },
                    get children () {
                        return e.rightTabsElement;
                    }
                }), null), v;
            }
        })
    ];
}
function Gb_(e) {
    const t = Oe(()=>{
        switch(e.status){
            case "open":
                return "Open";
            case "closed":
                return "Closed";
            case "draft":
                return "Draft";
            case "merged":
                return "Merged";
            default:
                return e.status, "";
        }
    });
    return (()=>{
        var n = jGh();
        return Me(n, t), Rn(()=>$i(n, `pr-status-header-indicator ${e.status}`)), n;
    })();
}
function jb_(e) {
    const t = ir(), n = Rg();
    let i;
    const r = ha(n, ANo), s = ($)=>n.set(ANo, $), o = ha(n, RNo), a = ($)=>n.set(RNo, $), c = ha(n, DNo), l = ($)=>n.set(DNo, $);
    let u;
    const h = ($)=>{
        a($), e.onFileListRef?.($), u && u.setMultiDiffRef($);
    }, p = ($)=>{
        l($);
    }, g = new cn;
    An(()=>{
        g.dispose();
    });
    const f = ($)=>{
        $ ? (o()?.expandAllGroups(), g.value = O2(()=>{
            o()?.expandAll(), c()?.expandAll();
        }, void 0, on)) : (o()?.collapseAll(), o()?.collapseAllGroups(), c()?.collapseAll()), e.onExpandCollapseAll?.($);
    };
    n.set(lsr, lr(()=>e.defaultGroupingMode ?? "files"));
    const v = ha(n, lsr), b = ($)=>n.set(lsr, $), y = ($)=>{
        b($), e.onGroupingModeChange?.($);
    }, T = Oe(()=>e.showGroupBySelector && e.resourceGroups ? v() === "conversation" ? "grouped" : "flat" : e.listType ?? "flat"), E = Oe(()=>T() === "grouped" && !!e.resourceGroups && e.resourceGroups.length > 0), A = Oe(()=>E() && !!e.secondarySectionResources && e.secondarySectionResources.length > 0), R = new mwe({
        forceIntegerValues: !0,
        smoothScrollDuration: 0,
        scheduleAtNextAnimationFrame: ($)=>Gb(xi(i), $)
    }), [D] = pbe(t.reviewChangesService.effectiveDiffViewMode), P = Oe(()=>`cursor-diff-${D()}`);
    An(()=>{
        R.dispose();
    });
    const N = ()=>{
        e.onScroll?.();
    }, O = Oe(()=>e.showGroupBySelector && !!e.resourceGroups?.length || E()), F = Oe(()=>e.showGroupBySelector && v() === "files" ? "Files" : e.groupedSectionTitle), H = ()=>{
        const $ = ()=>!!e.showGroupBySelector && !!e.resourceGroups?.length;
        return (()=>{
            var W = zGh(), G = W.firstChild;
            return Me(W, pe(wt, {
                get when () {
                    return $();
                },
                get fallback () {
                    return pe(wt, {
                        get when () {
                            return Lr(()=>!!O())() && F();
                        },
                        get children () {
                            var q = KGh();
                            return Me(q, F), q;
                        }
                    });
                },
                get children () {
                    var q = qGh(), z = q.firstChild, X = z.nextSibling, Y = X.firstChild;
                    return z.addEventListener("click", ()=>y("files")), X.addEventListener("click", ()=>y("conversation")), Me(X, ()=>e.conversationCount ?? e.resourceGroups?.length ?? 0, Y), Rn((Z)=>{
                        var K = `cursor-blame-tab ${v() === "files" ? "active" : ""}`, J = `cursor-blame-tab ${v() === "conversation" ? "active" : ""}`;
                        return K !== Z.e && $i(z, Z.e = K), J !== Z.t && $i(X, Z.t = J), Z;
                    }, {
                        e: void 0,
                        t: void 0
                    }), q;
                }
            }), G), G.style.setProperty("margin-left", "auto"), G.style.setProperty("display", "flex"), G.style.setProperty("align-items", "center"), G.style.setProperty("gap", "8px"), Me(G, pe(Rb_, {
                diffViewMode: D,
                onExpandStateChange: (q)=>{
                    f(q.state === "expanded");
                },
                get additionalActions () {
                    return e.ellipsisAdditionalActions;
                }
            })), W;
        })();
    };
    return (()=>{
        var $ = ZGh(), W = $.firstChild, G = W.firstChild, q = G.nextSibling, z = W.nextSibling;
        return Pl((X)=>{
            i = X, e.containerRef?.(X);
        }, $), Me($, pe(wt, {
            get when () {
                return e.mountedEditors;
            },
            get fallback () {
                return pe(xb_, {
                    containerRef: ()=>i,
                    scrollableRef: ()=>R,
                    contentSelectors: ".app-layout-multi-diff-root"
                });
            },
            get children () {
                return pe(TWh, {
                    containerRef: ()=>i,
                    get mountedEditors () {
                        return e.mountedEditors;
                    },
                    get multiDiffRef () {
                        return o();
                    },
                    onWidgetCreated: (X)=>{
                        u = X;
                        const Y = o();
                        Y && X.setMultiDiffRef(Y), e.onFindWidgetCreated?.(X);
                    }
                });
            }
        }), W), Me(G, ()=>e.actionBarLeft()), Me(q, ()=>e.actionBarRight?.()), Me(z, pe(wt, {
            get when () {
                return e.error;
            },
            get children () {
                var X = YGh(), Y = X.firstChild;
                return Me(Y, ()=>e.error), X;
            }
        }), null), Me(z, pe(wt, {
            get when () {
                return !e.error && e.isLoading;
            },
            get children () {
                var X = XGh();
                return Me(X, pe(Bnt, {
                    size: 20
                })), X;
            }
        }), null), Me(z, pe(wt, {
            get when () {
                return !e.error && !e.isLoading;
            },
            get children () {
                return pe(wt, {
                    get when () {
                        return P();
                    },
                    keyed: !0,
                    get children () {
                        return pe(Y6, {
                            disableAutoSizing: !0,
                            scrollingDirection: "vertical",
                            scrollable: R,
                            style: {
                                height: "100%",
                                "overflow-x": "clip"
                            },
                            nonReactiveElementOptions: {
                                useShadows: !1,
                                mouseWheelSmoothScroll: !1
                            },
                            childStyle: {
                                padding: "0px 32px",
                                overflowX: "clip"
                            },
                            innerContainerClass: "app-layout-multi-diff-root external-scroll",
                            setInnerContainerRef: s,
                            onScroll: N,
                            get children () {
                                return [
                                    pe(Wb_, {
                                        get title () {
                                            return e.title;
                                        },
                                        get summary () {
                                            return e.summary;
                                        },
                                        get summaryMaxHeight () {
                                            return e.summaryMaxHeight;
                                        },
                                        get summaryIsTrusted () {
                                            return e.summaryIsTrusted;
                                        },
                                        get resources () {
                                            return e.resources;
                                        },
                                        get prStatus () {
                                            return e.status;
                                        },
                                        get authorInfo () {
                                            return e.authorInfo;
                                        },
                                        get tabs () {
                                            return e.tabs;
                                        },
                                        get isLoading () {
                                            return e.isLoading;
                                        },
                                        get prUrl () {
                                            return e.prUrl;
                                        },
                                        get rightTitleElement () {
                                            return e.rightTitleElement;
                                        },
                                        get rightTabsElement () {
                                            return e.rightTabsElement;
                                        },
                                        get additionalMetaSections () {
                                            return e.additionalMetaSections;
                                        },
                                        get onOpenUrl () {
                                            return e.onOpenUrl;
                                        },
                                        get onOpenPreviewLink () {
                                            return e.onOpenPreviewLink;
                                        }
                                    }),
                                    pe(wt, {
                                        get when () {
                                            return e.showAlternateView && e.alternateView;
                                        },
                                        get fallback () {
                                            return pe(wt, {
                                                get when () {
                                                    return !e.hideFileList;
                                                },
                                                get fallback () {
                                                    return pe(wt, {
                                                        get when () {
                                                            return e.beforeFilesContent;
                                                        },
                                                        get children () {
                                                            return e.beforeFilesContent();
                                                        }
                                                    });
                                                },
                                                get children () {
                                                    return [
                                                        pe(wt, {
                                                            get when () {
                                                                return e.beforeFilesContent;
                                                            },
                                                            get children () {
                                                                return e.beforeFilesContent();
                                                            }
                                                        }),
                                                        Lr(()=>H()),
                                                        pe(wt, {
                                                            get when () {
                                                                return E();
                                                            },
                                                            get fallback () {
                                                                return pe(ssr, {
                                                                    listType: "flat",
                                                                    get resources () {
                                                                        return e.resources;
                                                                    },
                                                                    emptyMessage: "No changes",
                                                                    getShowKeep: ()=>!1,
                                                                    getShowUndo: ()=>!1,
                                                                    get diffViewMode () {
                                                                        return D();
                                                                    },
                                                                    scrollable: R,
                                                                    containerRef: r,
                                                                    get defaultCollapsed () {
                                                                        return e.defaultCollapsed;
                                                                    },
                                                                    get onDiffEditorMount () {
                                                                        return e.onDiffEditorMount;
                                                                    },
                                                                    get onDiffEditorUnmount () {
                                                                        return e.onDiffEditorUnmount;
                                                                    },
                                                                    readonly: !0,
                                                                    showGlyphMargin: !0,
                                                                    ref: h,
                                                                    get skipComposerContext () {
                                                                        return e.skipComposerContext;
                                                                    }
                                                                });
                                                            },
                                                            get children () {
                                                                return pe(ssr, {
                                                                    listType: "grouped",
                                                                    get groups () {
                                                                        return e.resourceGroups.map((X)=>({
                                                                                title: X.title,
                                                                                description: X.description,
                                                                                resources: [
                                                                                    ...X.resources
                                                                                ]
                                                                            }));
                                                                    },
                                                                    emptyMessage: "No changes",
                                                                    getShowKeep: ()=>!1,
                                                                    getShowUndo: ()=>!1,
                                                                    get diffViewMode () {
                                                                        return D();
                                                                    },
                                                                    scrollable: R,
                                                                    containerRef: r,
                                                                    get defaultCollapsed () {
                                                                        return e.defaultCollapsed;
                                                                    },
                                                                    get onDiffEditorMount () {
                                                                        return e.onDiffEditorMount;
                                                                    },
                                                                    get onDiffEditorUnmount () {
                                                                        return e.onDiffEditorUnmount;
                                                                    },
                                                                    readonly: !0,
                                                                    showGlyphMargin: !0,
                                                                    ref: h,
                                                                    get skipComposerContext () {
                                                                        return e.skipComposerContext;
                                                                    }
                                                                });
                                                            }
                                                        }),
                                                        pe(wt, {
                                                            get when () {
                                                                return A();
                                                            },
                                                            get children () {
                                                                return [
                                                                    pe(wt, {
                                                                        get when () {
                                                                            return e.secondarySectionTitle;
                                                                        },
                                                                        get children () {
                                                                            var X = QGh(), Y = X.firstChild;
                                                                            return Me(Y, ()=>e.secondarySectionTitle), X;
                                                                        }
                                                                    }),
                                                                    pe(ssr, {
                                                                        listType: "flat",
                                                                        get resources () {
                                                                            return e.secondarySectionResources;
                                                                        },
                                                                        emptyMessage: "No changes",
                                                                        getShowKeep: ()=>!1,
                                                                        getShowUndo: ()=>!1,
                                                                        get diffViewMode () {
                                                                            return D();
                                                                        },
                                                                        scrollable: R,
                                                                        containerRef: r,
                                                                        defaultCollapsed: !0,
                                                                        get onDiffEditorMount () {
                                                                            return e.onDiffEditorMount;
                                                                        },
                                                                        get onDiffEditorUnmount () {
                                                                            return e.onDiffEditorUnmount;
                                                                        },
                                                                        readonly: !0,
                                                                        showGlyphMargin: !0,
                                                                        ref: p,
                                                                        get skipComposerContext () {
                                                                            return e.skipComposerContext;
                                                                        }
                                                                    })
                                                                ];
                                                            }
                                                        })
                                                    ];
                                                }
                                            });
                                        },
                                        get children () {
                                            return e.alternateView();
                                        }
                                    }),
                                    pe(wt, {
                                        get when () {
                                            return e.afterFilesContent;
                                        },
                                        get children () {
                                            return e.afterFilesContent();
                                        }
                                    })
                                ];
                            }
                        });
                    }
                });
            }
        }), null), $;
    })();
}
function MNo(e) {
    return !e || e === iVh;
}
function JGh(e) {
    const t = e.inspect("cursor.blame.hoverDelay"), n = t.workspaceFolderValue ?? t.workspaceValue ?? t.userRemoteValue ?? t.userLocalValue ?? t.userValue;
    if (n !== void 0) return n;
    const i = e.getValue("editor.hover.delay") ?? 300;
    return Math.max(i, 500);
}
function zb_(e) {
    if (!e) return e;
    let t = e.replace(/!\[([^\[\]]*(?:\[[^\]]*\][^\[\]]*)*)\]\(([^\)]+)\)/g, (n, i, r)=>`[${i && i.trim() ? i.trim() : "View image"}](${r})`);
    return t = t.replace(/<picture[^>]*>[\s\S]*?<source[^>]*srcset=["']([^"']+)["'][^>]*>[\s\S]*?<\/picture>/gi, (n, i)=>`[View image](${i.split(/[\s,]/)[0]})`), t = t.replace(/<picture[^>]*>[\s\S]*?<img[^>]*src=["']([^"']+)["'][^>]*>[\s\S]*?<\/picture>/gi, (n, i)=>`[View image](${i})`), t = t.replace(/<img[^>]*src=["']([^"']+)["'][^>]*alt=["']([^"']*)["'][^>]*\/?>/gi, (n, i, r)=>`[${r && r.trim() ? r.trim() : "View image"}](${i})`), t = t.replace(/<img[^>]*alt=["']([^"']*)["'][^>]*src=["']([^"']+)["'][^>]*\/?>/gi, (n, i, r)=>`[${i && i.trim() ? i.trim() : "View image"}](${r})`), t = t.replace(/<img[^>]*src=["']([^"']+)["'][^>]*\/?>/gi, (n, i)=>`[View image](${i})`), t;
}
function eVh(e) {
    if (e.includes("github")) try {
        let t = e;
        t.match(/^[^@]+@[^:]+:/) ? t = t.replace(/^[^@]+@([^:]+):/, "https://$1/") : t.startsWith("ssh://") && (t = t.replace(/^ssh:\/\/[^@]+@([^/:]+)(:\d+)?\//, "https://$1/"));
        const n = new URL(t);
        return n.hostname.includes("github") ? n.hostname : void 0;
    } catch  {
        const t = e.match(/(?:https?:\/\/|ssh:\/\/)?(?:[^@]+@)?([^/:]+)/), n = t ? t[1] : void 0;
        return n && n.includes("github") ? n : void 0;
    }
}
function Kb_(e, t) {
    const n = eVh(e);
    if (!n) return;
    const i = Fer(e);
    if (i) return `https://${n}/${i}/commit/${t}`;
}
function Jb_(e) {
    const t = [], n = [];
    let i = 1, r = 1;
    for (const a of e){
        let c = a.newStart, l = a.oldStart;
        for (const u of a.changes)(u.type === "add" || u.type === "normal") && (t.push({
            editorLine: i,
            absoluteFileLine: c
        }), i++, c++), (u.type === "del" || u.type === "normal") && (n.push({
            editorLine: r,
            absoluteFileLine: l
        }), r++, l++);
    }
    const s = new Map;
    for (const a of t)s.set(a.absoluteFileLine, a.editorLine);
    const o = new Map;
    for (const a of n)o.set(a.absoluteFileLine, a.editorLine);
    return {
        absoluteToEditor: s,
        absoluteToOriginalEditor: o
    };
}
function rVh(e, t) {
    const n = t.absoluteToEditor.get(e.start), i = t.absoluteToEditor.get(e.end);
    if (n !== void 0 && i !== void 0) return {
        start: n,
        end: i
    };
    let r, s;
    for(let o = e.start; o <= e.end; o++){
        const a = t.absoluteToEditor.get(o);
        a !== void 0 && (r === void 0 && (r = a), s = a);
    }
    if (r !== void 0 && s !== void 0) return {
        start: r,
        end: s
    };
}
function ey_(e, t, n) {
    const i = document.createElement("div");
    i.className = "contribution-tooltip";
    const r = document.createElement("div");
    r.className = "contribution-tooltip__dot-container";
    const s = document.createElement("div");
    s.className = `contribution-tooltip__dot ${n}`, r.appendChild(s);
    const o = document.createElement("div");
    o.className = "contribution-tooltip__body";
    const a = document.createElement("span");
    a.className = "contribution-tooltip__label", a.textContent = e;
    const c = document.createElement("span");
    return c.className = "contribution-tooltip__percent", c.textContent = `${t.toFixed(0)}%`, o.appendChild(a), o.appendChild(c), i.appendChild(r), i.appendChild(o), i;
}
function ty_(e) {
    const [t, n] = Ut(null), { showHover: i, hideHover: r } = iB(0), s = Oe(()=>{
        if (!e.stats) return [];
        const p = e.stats, g = [];
        Math.floor(p.humanPercent) >= 1 && g.push({
            type: "human",
            percent: p.humanPercent,
            label: "human",
            displayLabel: e.author || "Human"
        }), Math.floor(p.tabPercent) >= 1 && g.push({
            type: "tab",
            percent: p.tabPercent,
            label: "tab",
            displayLabel: "Tab"
        });
        const f = [
            ...p.agentByModel
        ].sort((y, T)=>T.percent - y.percent);
        f.slice(0, 3).filter((y)=>y.percent >= 1).forEach((y, T)=>{
            const E = Wqt(y.model === "unknown" ? "Agent" : y.model, e.availableModels);
            g.push({
                type: "model",
                percent: y.percent,
                label: `model-${T}`,
                displayLabel: E,
                modelIndex: T,
                model: y.model
            });
        });
        const b = f.slice(3).reduce((y, T)=>y + T.percent, 0);
        return b >= 1 && g.push({
            type: "other",
            percent: b,
            label: "other",
            displayLabel: "Other"
        }), g.sort((y, T)=>T.percent - y.percent).slice(0, 5);
    }), o = Oe(()=>{
        const g = s().reduce((f, v)=>f + v.percent, 0);
        return g > 0 ? 100 / g : 1;
    }), a = (p)=>p.type === "human" ? "human" : p.type === "other" ? "other" : p.type === "tab" ? "tab" : {
            model: p.model,
            index: p.modelIndex
        }, c = (p)=>{
        const g = t();
        return g === null ? !1 : p === "tab" || p === "human" || p === "other" ? g === p : typeof g == "object" && typeof p == "object" ? g.model === p.model && g.index === p.index : !1;
    }, l = (p)=>p.type === "human" ? "human" : p.type === "tab" ? "tab" : p.type === "other" ? "other" : `model-${p.modelIndex}`, u = (p, g, f)=>{
        n(f);
        const v = l(g), b = ey_(g.displayLabel, g.percent, v), y = p.currentTarget;
        i({
            content: b,
            target: y,
            appearance: {
                compact: !0,
                showPointer: !1
            },
            additionalClasses: [
                "contribution-tooltip-container"
            ],
            position: {
                hoverPosition: 2
            }
        });
    }, h = ()=>{
        n(null), r();
    };
    return pe(wt, {
        get when () {
            return !e.isLoading && e.stats;
        },
        keyed: !0,
        children: (p)=>(()=>{
                var g = sVh(), f = g.firstChild, v = f.nextSibling, b = v.firstChild;
                return b.addEventListener("mouseleave", h), Me(b, pe(tm, {
                    get each () {
                        return s();
                    },
                    children: (y)=>{
                        const T = a(y);
                        return (()=>{
                            var E = oVh();
                            return E.addEventListener("mouseenter", (A)=>u(A, y, T)), Rn((A)=>{
                                var R = `smart-review-panel__agent-segment ${y.label} ${t() !== null && !c(T) ? "dimmed" : ""}`, D = `${y.percent * o()}%`;
                                return R !== A.e && $i(E, A.e = R), D !== A.t && ((A.t = D) != null ? E.style.setProperty("width", D) : E.style.removeProperty("width")), A;
                            }, {
                                e: void 0,
                                t: void 0
                            }), E;
                        })();
                    }
                })), g;
            })()
    });
}
function ny_(e, t, n, i) {
    const r = t.filter((c)=>c.operationType !== "deletion"), s = t.filter((c)=>c.operationType === "deletion"), o = [], a = [];
    for (const c of e){
        let l = c.newStart, u = c.oldStart;
        for (const h of c.changes){
            const p = h.content.substring(1);
            h.type === "normal" ? (o.push(p), a.push(p), l++, u++) : h.type === "add" ? (r.some((f)=>l >= f.start && l <= f.end) ? a.push(p) : n || (o.push(p), a.push(p)), l++) : h.type === "del" && (s.some((f)=>u >= f.start && u <= f.end) ? o.push(p) : i || (o.push(p), a.push(p)), u++);
        }
    }
    return {
        filteredOriginal: n || o.length === 0 ? "" : o.join(`
`) + `
`,
        filteredModified: i || a.length === 0 ? "" : a.join(`
`) + `
`
    };
}
function iy_(e, t, n) {
    if (!e || !e.rangeAnnotations) return [];
    const i = new Map;
    for (const r of e.rangeAnnotations)for (const s of r.groups)if (s.conversationId === t && s.ranges.length > 0) {
        const o = r.filePath, a = o.replace(/^\//, "").replace(/\\/g, "/"), c = n.get(a) || Array.from(n.entries()).find(([u])=>a.endsWith(u) || u.endsWith(a))?.[1];
        let l = i.get(o);
        l || (l = {
            filePath: o,
            ranges: []
        }, i.set(o, l));
        for (const u of s.ranges){
            let h, p;
            if (c) {
                const g = s.operationType === "deletion" ? c.absoluteToOriginalEditor : c.absoluteToEditor;
                if (h = g.get(u.start), p = g.get(u.end), h === void 0) for(let f = u.start; f >= 1; f--){
                    const v = g.get(f);
                    if (v !== void 0) {
                        h = v;
                        break;
                    }
                }
                if (p === void 0) for(let f = u.end; f >= u.start; f--){
                    const v = g.get(f);
                    if (v !== void 0) {
                        p = v;
                        break;
                    }
                }
            }
            l.ranges.push({
                start: u.start,
                end: u.end,
                operationType: s.operationType,
                editorStart: h,
                editorEnd: p
            });
        }
    }
    return Array.from(i.values());
}
function ry_(e) {
    return !!(e.title || e.tldr || e.overview || e.summaryBullets.length > 0);
}
function sy_(e) {
    return e.title ? e.title.toLowerCase().includes("tab request") : !1;
}
function oy_(e, t) {
    if (!e || !e.rangeAnnotations) return 0;
    let n = 0;
    for (const i of e.rangeAnnotations)for (const r of i.groups)if (r.conversationId === t) for (const s of r.ranges)n += s.end - s.start + 1;
    return n;
}
function ay_(e) {
    const t = ir(), n = ()=>e.options.repoRoot, [i, r] = Ut(!0), [s, o] = Ut(void 0), [a, c] = Ut([]), [l, u] = Ut(void 0), [h, p] = Ut(!1), [g, f] = Ut(void 0), [v, b] = Ut([]), [y, T] = Ut(!0), [E, A] = Ut(void 0), [R, D] = Ut(void 0), [P, N] = Ut(void 0), [O, F] = Ut("files");
    let H, $;
    const W = (ze)=>{
        H = ze;
    }, G = (ze)=>{
        $ = ze;
    }, q = t.instantiationService.createInstance(db, {
        service: dMo
    }), z = t.instantiationService.invokeFunction((ze)=>ze.get(aLe)), X = new Map, Y = new Map, Z = Oe(()=>{
        const ze = v(), St = g(), ft = a();
        return ze.length === 0 || ft.length === 0 ? [] : ze.filter(ry_).filter((Wt)=>!sy_(Wt)).map((Wt)=>({
                conversation: Wt,
                contribution: oy_(St, Wt.id)
            })).sort((Wt, nn)=>nn.contribution - Wt.contribution).map((Wt)=>Wt.conversation).map((Wt)=>{
            let nn = Wt.tldr || "";
            if (Wt.summaryBullets && Wt.summaryBullets.length > 0) {
                const _n = Wt.summaryBullets.map((an)=>`\u2022 ${an}`).join(`
`);
                nn = nn ? `${nn}

${_n}` : _n;
            }
            const pn = iy_(St, Wt.id, X), Yt = [];
            for (const _n of pn){
                const an = _n.filePath.replace(/^\//, "").replace(/\\/g, "/"), ln = ft.find((Mn)=>{
                    const Ln = (Mn.goToFileUri?.path || Mn.modifiedUri?.path || Mn.originalUri?.path || "").replace(/^\//, "").replace(/\\/g, "/");
                    return Ln === an || Ln.endsWith(an) || an.endsWith(Ln);
                });
                if (ln && !Yt.some((Mn)=>Mn === ln)) if (ln.status === "added") {
                    const Dn = ln.modifiedContents ?? "", Ln = Dn.split(`
`), ti = new Set;
                    for (const pr of _n.ranges){
                        const Ls = pr.editorStart ?? pr.start, Br = pr.editorEnd ?? pr.end;
                        for(let ho = Ls; ho <= Br; ho++)ti.add(ho);
                    }
                    const fi = [];
                    for(let pr = 0; pr < Ln.length; pr++){
                        const Ls = pr + 1;
                        ti.has(Ls) || fi.push(Ln[pr]);
                    }
                    const Oi = fi.join(`
`), xr = sP.generateScheme(`${Wt.id}-newfile-${an}`), us = Ee.from({
                        scheme: xr,
                        path: ln.modifiedUri?.path ?? an
                    }), Fr = sP.generateScheme(`${Wt.id}-newfile-mod-${an}`), Zn = Ee.from({
                        scheme: Fr,
                        path: ln.modifiedUri?.path ?? an
                    }), _r = new _te({
                        originalUri: us,
                        modifiedUri: Zn,
                        goToFileUri: ln.goToFileUri,
                        status: "modified",
                        originalContents: Oi,
                        modifiedContents: Dn,
                        linesAdded: ti.size,
                        linesRemoved: 0,
                        skipInlineDiffSync: !0,
                        skipLineCounts: !0,
                        instantiationService: t.instantiationService,
                        composerTextModelService: t.composerTextModelService
                    }), is = sP.hydrateSkeleton(_r);
                    Yt.push(is);
                } else {
                    const Dn = Y.get(an) || Array.from(Y.entries()).find(([Ln])=>an.endsWith(Ln) || Ln.endsWith(an))?.[1];
                    if (Dn && _n.ranges.length > 0) {
                        const { filteredOriginal: Ln, filteredModified: ti } = ny_(Dn.chunks, _n.ranges, Dn.isNew, Dn.isDeleted), fi = Ln.length > 0 ? sP.generateScheme(`${Wt.id}-orig-${Ln}`) : void 0, Oi = ti.length > 0 ? sP.generateScheme(`${Wt.id}-mod-${ti}`) : void 0, xr = fi && ln.originalUri ? Ee.from({
                            scheme: fi,
                            path: ln.originalUri.path
                        }) : void 0, us = Oi && ln.modifiedUri ? Ee.from({
                            scheme: Oi,
                            path: ln.modifiedUri.path
                        }) : void 0, Fr = new _te({
                            originalUri: xr,
                            modifiedUri: us,
                            goToFileUri: ln.goToFileUri,
                            status: ln.status,
                            originalContents: Ln || void 0,
                            modifiedContents: ti || void 0,
                            skipInlineDiffSync: !0,
                            skipLineCounts: !1,
                            instantiationService: t.instantiationService,
                            composerTextModelService: t.composerTextModelService
                        }), Zn = sP.hydrateSkeleton(Fr);
                        Yt.push(Zn);
                    } else Yt.push(ln);
                }
            }
            return {
                title: Wt.title || "Untitled conversation",
                description: nn || void 0,
                resources: Yt
            };
        });
    }), K = Oe(()=>{
        const ze = a(), St = Z();
        if (ze.length === 0) return null;
        const ft = new Set;
        for (const Bt of St)for (const Ot of Bt.resources){
            const Wt = Ot.goToFileUri?.path || Ot.modifiedUri?.path || Ot.originalUri?.path || "";
            if (Wt) {
                const nn = Wt.replace(/^\//, "").replace(/\\/g, "/");
                ft.add(nn);
            }
        }
        const Mt = [];
        for (const Bt of ze){
            const Ot = Bt.goToFileUri?.path || Bt.modifiedUri?.path || Bt.originalUri?.path || "";
            if (Ot) {
                const Wt = Ot.replace(/^\//, "").replace(/\\/g, "/");
                Array.from(ft).some((pn)=>Wt === pn || Wt.endsWith(pn) || pn.endsWith(Wt)) || Mt.push(Bt);
            }
        }
        return Mt.length === 0 ? null : {
            title: "Files changed outside of conversations",
            description: void 0,
            resources: Mt
        };
    }), J = Oe(()=>Z()), ne = Oe(()=>{
        const ze = K();
        return ze ? [
            ...ze.resources
        ] : [];
    }), ee = Oe(()=>a().reduce((ze, St)=>ze + (St.linesAdded.get() ?? 0) + (St.linesRemoved.get() ?? 0), 0)), se = Oe(()=>ee() >= 1e3), re = ()=>{};
    let ue, ce = new y9n(t.instantiationService, t.composerTextModelService);
    const de = ()=>{
        ue && ue.dispose(), ce.dispose(), X.clear(), Y.clear(), ce = new y9n(t.instantiationService, t.composerTextModelService), ue = new He, ce.resourcesObservable.recomputeInitiallyAndOnChange(ue, (ze)=>{
            c(ze || []);
        });
    }, le = async (ze, St)=>{
        try {
            const ft = e.options.authorEmail;
            if (!ft || ft === null || ft === void 0) {
                console.warn("[CursorBlamePane] No author email found for commit:", ze.sha);
                return;
            }
            const Mt = await z.getGitUser(St).catch(()=>{});
            if (!Mt || ft.toLowerCase().trim() !== Mt.toLowerCase().trim()) return;
            (await t.aiCodeTrackingService.checkAndScoreCommitIfNeeded(ze.sha, ft, St)).scored && xe();
        } catch (ft) {
            console.error("[CursorBlamePane] Error checking/scoring commit:", ft);
        }
    }, ye = async ()=>{
        r(!0), o(void 0), p(!1), Gt.clear();
        try {
            if (MNo(e.options.commitId)) {
                o("Cannot show details for uncommitted changes. This line has not been committed yet."), r(!1);
                return;
            }
            await t.gitContextService.waitForGitContextProvider(), xe();
            let ze, St = !1;
            const ft = n();
            try {
                ze = await t.gitContextService.getFullCommit(e.options.commitId, ft);
            } catch (Yt) {
                const _n = Yt instanceof Error ? Yt.message : String(Yt);
                if (_n.includes("maxBuffer") || _n.includes("stdout")) console.warn("[CursorBlamePane] Commit too large for full diff, falling back to metadata-only mode"), ze = await t.gitContextService.getCommitMetadataOnly(e.options.commitId, ft), St = !0;
                else throw Yt;
            }
            if (!ze) {
                o(`Could not find commit ${e.options.commitId}`), r(!1);
                return;
            }
            console.log("[CursorBlamePane] Loaded commit:", ze.sha, "diff files:", ze.diff?.length ?? 0, "isLargeCommit:", St), u(ze), p(St);
            const Mt = ft, Bt = t.workspaceContextService.getWorkspace().folders[0]?.uri, Ot = Mt ? Ee.file(Mt) : Bt;
            if (!Ot) {
                o("No workspace folder found"), r(!1);
                return;
            }
            de();
            const Wt = `${Ot.fsPath}:${ze.sha}`;
            if (!St) {
                const Yt = dVh(Wt);
                if (Yt) {
                    X.clear();
                    for (const [an, ln] of Yt.lineMappings)X.set(an, ln);
                    Y.clear();
                    for (const [an, ln] of Yt.fileChunks)Y.set(an, ln);
                    const _n = Yt.skeletonArgs.map((an)=>new _te({
                            ...an,
                            instantiationService: t.instantiationService,
                            composerTextModelService: t.composerTextModelService
                        }));
                    ce.updateResources(_n), le(ze, Ot.fsPath), r(!1);
                    return;
                }
            }
            const nn = [], pn = [];
            for (const Yt of ze.diff){
                const _n = Yt.to || Yt.from || "";
                if (!_n) continue;
                const an = Yt.deleted === !0, ln = Yt.new === !0;
                let Mn = "", Dn = "";
                if (!St) {
                    const Ls = [], Br = [];
                    for (const ec of Yt.chunks)for (const ia of ec.changes)(ia.type === "del" || ia.type === "normal") && Ls.push(ia.content.substring(1)), (ia.type === "add" || ia.type === "normal") && Br.push(ia.content.substring(1));
                    Mn = Ls.length > 0 ? Ls.join(`
`) + `
` : "", Dn = Br.length > 0 ? Br.join(`
`) + `
` : "";
                    const ho = Jb_(Yt.chunks), js = _n.replace(/\\/g, "/").replace(/^\//, "");
                    X.set(js, ho), Y.set(js, {
                        chunks: Yt.chunks,
                        isNew: ln,
                        isDeleted: an
                    });
                }
                const Ln = _n.replace(/\\/g, "/"), ti = Ln.replace(/^\.\/+/, "").replace(/^\/+/, ""), Oi = `/${ti.length > 0 ? ti : Ln.replace(/^\/+/, "")}`, xr = ln ? void 0 : sP.generateScheme(Mn), us = an ? void 0 : sP.generateScheme(Dn), Fr = xr !== void 0 ? Ee.from({
                    scheme: xr,
                    path: Oi
                }) : void 0, Zn = us !== void 0 ? Ee.from({
                    scheme: us,
                    path: Oi
                }) : void 0;
                if (Fr === void 0 && Zn === void 0) continue;
                const _r = Ee.joinPath(Ot, _n), is = {
                    originalUri: Fr,
                    modifiedUri: Zn,
                    goToFileUri: _r,
                    status: ln ? "added" : an ? "deleted" : "modified",
                    originalContents: ln ? void 0 : Mn,
                    modifiedContents: an ? void 0 : Dn,
                    skipInlineDiffSync: !0,
                    linesAdded: Yt.additions,
                    linesRemoved: Yt.deletions,
                    skipLineCounts: !0
                }, pr = new _te({
                    ...is,
                    instantiationService: t.instantiationService,
                    composerTextModelService: t.composerTextModelService
                });
                nn.push(pr), pn.push(is);
            }
            St || hVh(Wt, {
                skeletonArgs: pn,
                lineMappings: new Map(X),
                fileChunks: new Map(Y)
            }), ce.updateResources(nn), le(ze, Ot.fsPath), r(!1);
        } catch (ze) {
            console.error("[CursorBlamePane] Failed to load commit:", ze), o(`Failed to load commit: ${ze instanceof Error ? ze.message : String(ze)}`), r(!1);
        }
    }, _e = async (ze)=>{
        const St = Date.now();
        try {
            const ft = `cursorBlame:${ze}`, Mt = await t.storageService.cursorDiskKVGet(ft);
            if (!Mt) return;
            const Bt = JSON.parse(Mt), Ot = Date.now();
            let Wt, nn;
            if (Bt.metrics && (Wt = cWi.fromJson(Bt.metrics)), Bt.conversations && Array.isArray(Bt.conversations) && (nn = Bt.conversations.map((pn)=>lWi.fromJson(pn))), Wt || nn && nn.length > 0) return console.debug(`[CursorBlamePane] Loaded commit metrics and conversations from cursorKV for commit ${ze}`), {
                source: "cursorKV",
                metrics: Wt,
                conversations: nn,
                timings: {
                    cursorKV: Ot - St,
                    total: Ot - St
                },
                errors: []
            };
        } catch (ft) {
            console.warn("[CursorBlamePane] Failed to load from cursorKV:", ft);
        }
    }, me = async (ze)=>{
        const St = Date.now(), ft = {
            source: "none",
            timings: {
                total: 0
            },
            errors: [],
            repoRoot: ze
        };
        try {
            const Bt = await (await q.get()).getCommitMetrics(new hro({
                commitHashes: [
                    e.options.commitId
                ]
            })), Ot = Date.now();
            if (ft.timings.backendApi = Ot - St, Bt.commits.length > 0 && (ft.metrics = Bt.commits[0], ft.source = "backend_api"), Bt.conversations.length > 0) {
                ft.conversations = Bt.conversations;
                try {
                    const Wt = Bt.conversations.map((nn)=>({
                            conversationId: nn.id,
                            title: nn.title ?? null,
                            tldr: nn.tldr ?? null,
                            overview: nn.overview ?? null,
                            summaryBullets: nn.summaryBullets ?? [],
                            model: null,
                            mode: null,
                            updatedAt: Date.now()
                        }));
                    await z.storeConversationSummaries(Wt), console.debug(`[CursorBlamePane] Stored ${Wt.length} conversation references in SQLite`);
                } catch (Wt) {
                    console.warn("[CursorBlamePane] Failed to store conversation references:", Wt);
                }
            }
        } catch (Mt) {
            ft.errors.push(`Backend API error: ${Mt instanceof Error ? Mt.message : String(Mt)}`), console.warn("[CursorBlamePane] Failed to fetch commit metrics from backend:", Mt);
        }
        return ft;
    }, Ce = async ()=>{
        const ze = Date.now(), St = {
            source: "none",
            timings: {
                total: 0
            },
            errors: []
        }, ft = await _e(e.options.commitId);
        if (ft) return St.source = ft.source, St.metrics = ft.metrics, St.conversations = ft.conversations, St.timings = {
            ...St.timings,
            ...ft.timings
        }, St.timings.total = Date.now() - ze, St;
        let Mt;
        try {
            if (Mt = n(), !Mt) {
                const Ot = t.workspaceContextService.getWorkspace().folders;
                Ot.length > 0 && (Mt = await t.gitContextService.getGitRoot(Ot[0].uri.fsPath));
            }
            St.repoRoot = Mt;
        } catch (Ot) {
            St.errors.push(`Failed to get repo root: ${Ot instanceof Error ? Ot.message : String(Ot)}`);
        }
        const Bt = await me(Mt);
        return St.source = Bt.source, St.metrics = Bt.metrics, St.conversations = Bt.conversations, St.timings = {
            ...St.timings,
            ...Bt.timings
        }, St.errors.push(...Bt.errors), St.timings.total = Date.now() - ze, St;
    }, xe = async ()=>{
        T(!0), A(void 0);
        try {
            const ze = await Ce();
            if (ze.metrics && f(ze.metrics), ze.conversations && b(ze.conversations), ze.errors.length > 0 && A(ze.errors.join("; ")), ze.metrics || ze.conversations) try {
                const St = `cursorBlame:${e.options.commitId}`, ft = JSON.stringify({
                    metrics: ze.metrics ? ze.metrics.toJson() : void 0,
                    conversations: ze.conversations ? ze.conversations.map((Mt)=>Mt.toJson()) : void 0,
                    fetchedAt: Date.now()
                });
                await t.storageService.cursorDiskKVSet(St, ft), console.debug(`[CursorBlamePane] Stored commit metrics and conversations in cursorKV for commit ${e.options.commitId}`);
            } catch (St) {
                console.warn("[CursorBlamePane] Failed to store results in cursorKV:", St);
            }
        } catch (ze) {
            console.warn("[CursorBlamePane] Failed to fetch commit metrics:", ze), A(ze instanceof Error ? ze.message : "Failed to load AI metrics");
        } finally{
            T(!1);
        }
    }, Le = (ze)=>{
        const St = ze.match(/\(?#(\d+)\)?/);
        if (St) {
            const ft = parseInt(St[1], 10);
            if (!isNaN(ft)) return ft;
        }
    }, Be = async (ze)=>{
        if (!R()) try {
            const St = Le(ze);
            if (!St) return;
            const ft = t.instantiationService.invokeFunction((Yt)=>Yt.get(Yjt));
            if (!await ft.hasGitHubConnection()) return;
            const Bt = await t.gitContextService.getGitUpstreamURL(n()).catch(()=>{});
            if (!Bt || !Bt.includes("github")) return;
            const Ot = eVh(Bt);
            if (!Ot) return;
            const Wt = Fer(Bt);
            if (!Wt) return;
            const nn = `https://${Ot}/${Wt}/pull/${St}`, pn = await ft.getOrFetchPRDetails(nn);
            if (pn?.pullRequest) {
                const Yt = pn.pullRequest.state?.toLowerCase();
                Yt === "merged" ? D("merged") : Yt === "open" ? D("open") : Yt === "closed" && D("closed");
            }
        } catch  {}
    }, je = async (ze)=>{
        if (!P()) try {
            const St = t.instantiationService.invokeFunction((Bt)=>Bt.get(Yjt));
            if (!await St.hasGitHubConnection()) return;
            const Mt = await St.getCommitAuthorAvatar(ze);
            Mt && N(Mt);
        } catch  {}
    };
    Kc(()=>{
        ye();
    }), Jt(()=>{
        const ze = l();
        ze && Be(ze.message || ze.description || "");
    }), Jt(()=>{
        const ze = l();
        ze?.sha && je(ze.sha);
    }), An(()=>{
        ue?.dispose(), ce.dispose(), q.dispose();
    });
    const Ge = Oe(()=>{
        const ze = l();
        let St;
        return ze ? St = ze.description || e.options.message || "" : St = e.options.message || "", zb_(St.trim());
    }), Xe = Oe(()=>{
        const ze = l();
        return ze?.date ? new Date(ze.date).getTime() : e.options.timestamp;
    }), Ke = new Map, et = new Map;
    An(()=>{
        for (const [, ze] of Ke)ze.hoverCleanup?.();
        Ke.clear(), et.clear();
    });
    const We = p5(), it = (ze, St)=>{
        const ft = !!ze.conversationId, Mt = new Ec("", {
            isTrusted: !1,
            supportThemeIcons: !0
        });
        if (ft && ze.conversationId) {
            const Bt = St.find((Ot)=>Ot.id === ze.conversationId);
            if (Bt) {
                if (Bt.title && Mt.appendMarkdown(`### ${Ne(Bt.title)}

`), Bt.tldr && Mt.appendMarkdown(`${Ne(Bt.tldr)}

`), Bt.summaryBullets.length > 0) {
                    for (const Ot of Bt.summaryBullets)Mt.appendMarkdown(`- ${Ne(Ot)}
`);
                    Mt.appendMarkdown(`
`);
                }
            } else Mt.appendMarkdown(`### Agent Conversation

`);
        } else Mt.appendMarkdown(`### Tab Completion

`);
        return Mt;
    }, Ne = (ze)=>ze.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "\\\\").replace(/\*/g, "\\*").replace(/_/g, "\\_").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/#/g, "\\#").replace(/`/g, "\\`"), Fe = 6, Qe = (ze)=>{
        let St = 0;
        for(let ft = 0; ft < ze.length; ft++){
            const Mt = ze.charCodeAt(ft);
            St = (St << 5) - St + Mt, St = St & St;
        }
        return Math.abs(St) % Fe;
    }, tt = (ze, St)=>{
        if (!ze) return St ? "cursor-blame-glyph-agent-deleted" : "cursor-blame-glyph-agent";
        const ft = Qe(ze);
        return St ? `cursor-blame-glyph-agent-deleted-conv-${ft}` : `cursor-blame-glyph-agent-conv-${ft}`;
    }, st = (ze, St, ft, Mt, Bt, Ot)=>{
        if (Ot === "conversation") {
            const ti = ze.goToFileUri?.path || ze.modifiedUri?.path || ze.originalUri?.path || "", fi = ze.modifiedUri?.toString() || ze.originalUri?.toString() || ti, Oi = et.get(fi);
            if (Oi && Oi.length > 0) {
                const us = (ft ? ft.getModifiedEditor() : St).getModel();
                us && us.deltaDecorations(Oi, []), et.delete(fi);
            }
            if (ft) {
                const xr = `${fi}-original`, us = et.get(xr);
                if (us && us.length > 0) {
                    const Fr = ft.getOriginalEditor().getModel();
                    Fr && Fr.deltaDecorations(us, []), et.delete(xr);
                }
            }
            return;
        }
        if (!Mt || !Mt.rangeAnnotations) return;
        const Wt = ze.goToFileUri?.path || ze.modifiedUri?.path || ze.originalUri?.path || "", nn = Wt.replace(/^\//, ""), pn = Mt.rangeAnnotations.find((ti)=>{
            const fi = ti.filePath.replace(/^\//, "");
            return fi === nn || nn.endsWith(fi);
        });
        if (!pn) return;
        const _n = (ft ? ft.getModifiedEditor() : St).getModel();
        if (!_n) return;
        const an = X.get(nn) || Array.from(X.entries()).find(([ti])=>nn.endsWith(ti) || ti.endsWith(nn))?.[1], ln = [], Mn = [];
        for (const ti of pn.groups){
            const fi = !!ti.conversationId;
            if (ti.operationType === "addition") {
                const Oi = it(ti, Bt || []);
                for (const xr of ti.ranges){
                    let us;
                    if (an && (us = rVh({
                        start: xr.start,
                        end: xr.end
                    }, an)), !us) continue;
                    const Fr = fi ? tt(ti.conversationId, !1) : "cursor-blame-glyph-tab";
                    ln.push({
                        range: new dt(us.start, 1, us.end, 1),
                        options: {
                            description: fi ? "cursor-blame-agent-line" : "cursor-blame-tab-line",
                            isWholeLine: !0,
                            className: fi ? "cursor-blame-line-agent" : "cursor-blame-line-tab",
                            glyphMarginClassName: Fr,
                            glyphMargin: {
                                position: nU.Center
                            },
                            glyphMarginHoverMessage: Oi
                        }
                    });
                }
            } else if (ti.operationType === "deletion") {
                const Oi = it(ti, Bt || []), xr = ze.status === "deleted";
                for (const us of ti.ranges){
                    let Fr;
                    if (xr ? Fr = {
                        start: us.start,
                        end: us.end
                    } : an && (Fr = rVh({
                        start: us.start,
                        end: us.end
                    }, {
                        absoluteToEditor: an.absoluteToOriginalEditor
                    })), !Fr) continue;
                    const Zn = fi ? tt(ti.conversationId, !0) : "cursor-blame-glyph-tab-deleted", _r = {
                        range: new dt(Fr.start, 1, Fr.end, 1),
                        options: {
                            description: fi ? "cursor-blame-agent-line-deleted" : "cursor-blame-tab-line-deleted",
                            isWholeLine: !0,
                            className: fi ? "cursor-blame-line-agent-deleted" : "cursor-blame-line-tab-deleted",
                            glyphMarginClassName: Zn,
                            glyphMargin: {
                                position: nU.Center
                            },
                            glyphMarginHoverMessage: Oi
                        }
                    };
                    xr ? ln.push(_r) : ft && Mn.push(_r);
                }
            }
        }
        const Dn = ze.modifiedUri?.toString() || ze.originalUri?.toString() || Wt, Ln = et.get(Dn);
        if (Ln && _n.deltaDecorations(Ln, []), ln.length > 0) {
            const ti = _n.deltaDecorations([], ln);
            et.set(Dn, ti);
        } else Ln && et.delete(Dn);
        if (ft && Mn.length > 0) {
            const fi = ft.getOriginalEditor().getModel();
            if (fi) {
                const Oi = `${Dn}-original`, xr = et.get(Oi);
                if (xr) {
                    const us = fi.deltaDecorations(xr, Mn);
                    et.set(Oi, us);
                } else {
                    const us = fi.deltaDecorations([], Mn);
                    et.set(Oi, us);
                }
            }
        }
    };
    Jt(()=>{
        const ze = g(), St = v(), ft = O();
        if (ze) for (const [, Mt] of Ke)st(Mt.resource, Mt.editor, Mt.widget, ze, St, ft);
    }), Jt(()=>{
        if (!$) return;
        const ze = (St)=>{
            const ft = (St.metaKey || St.ctrlKey) && St.key.toLowerCase() === "f", Mt = (St.metaKey || St.ctrlKey) && St.key.toLowerCase() === "g" && !St.shiftKey, Bt = (St.metaKey || St.ctrlKey) && St.key.toLowerCase() === "g" && St.shiftKey;
            if (ft && H) {
                St.preventDefault(), St.stopPropagation();
                let Ot;
                for (const [, { editor: Wt }] of Ke)if (Wt.hasTextFocus()) {
                    const nn = Wt.getSelection();
                    if (nn && !nn.isEmpty()) {
                        const pn = Wt.getModel();
                        pn && nn.startLineNumber === nn.endLineNumber && (Ot = pn.getValueInRange(nn)?.trim());
                    }
                    break;
                }
                H.isVisible() ? Ot ? (H.updateSearchString(Ot), setTimeout(()=>H?.selectAllText(), 0)) : setTimeout(()=>{
                    H?.focusInput(), H?.selectAllText();
                }, 0) : (H.show(Ot), setTimeout(()=>{
                    H?.focusInput(), Ot && H?.selectAllText();
                }, 0));
            } else Mt && H ? (St.preventDefault(), St.stopPropagation(), H.isVisible() || (H.show(), setTimeout(()=>H?.focusInput(), 0)), H.find(!1)) : Bt && H && (St.preventDefault(), St.stopPropagation(), H.isVisible() || (H.show(), setTimeout(()=>H?.focusInput(), 0)), H.find(!0));
        };
        $.addEventListener("keydown", ze, !0), An(()=>{
            $?.removeEventListener("keydown", ze, !0);
        });
    });
    const vt = Oe(()=>{
        const ze = g();
        if (!ze) return;
        const St = ze.tabLinesAdded ?? 0, ft = ze.tabLinesDeleted ?? 0, Mt = ze.agentLinesAdded ?? 0, Bt = ze.agentLinesDeleted ?? 0, Ot = ze.nonAiLinesAdded ?? 0, Wt = ze.nonAiLinesDeleted ?? 0, nn = St + Mt + Ot, pn = ft + Bt + Wt;
        if (nn + pn === 0) return;
        const _n = new Set, an = new Map, ln = new Map;
        let Mn = 0, Dn = 0;
        for (const ia of ze.rangeAnnotations)for (const fr of ia.groups){
            let cr = 0;
            for (const wr of fr.ranges)cr += wr.end - wr.start + 1;
            if (fr.conversationId || (fr.operationType === "addition" ? Mn += cr : fr.operationType === "deletion" && (Dn += cr)), fr.model && fr.conversationId) {
                if (_n.add(fr.model), fr.operationType === "addition") {
                    const wr = an.get(fr.model) || 0;
                    an.set(fr.model, wr + cr);
                } else if (fr.operationType === "deletion") {
                    const wr = ln.get(fr.model) || 0;
                    ln.set(fr.model, wr + cr);
                }
            } else fr.conversationId;
        }
        const Ln = [];
        let ti = 0, fi = 0;
        for (const ia of _n){
            const fr = an.get(ia) || 0, cr = ln.get(ia) || 0, wr = fr + cr;
            ti += fr, fi += cr, Ln.push({
                model: ia,
                linesAdded: fr,
                linesDeleted: cr,
                linesTotal: wr
            });
        }
        Ln.sort((ia, fr)=>fr.linesTotal - ia.linesTotal);
        const Oi = Mt + Bt, xr = ti + fi, us = Oi - xr;
        us > 0 && Ln.push({
            model: "unknown",
            linesAdded: Mt - ti,
            linesDeleted: Bt - fi,
            linesTotal: us
        });
        const Fr = ze.rangeAnnotations && ze.rangeAnnotations.length > 0, Zn = Mt === 0 && Bt === 0 && St >= Mn && ft >= Dn, _r = !Fr || Zn && (St > Mn || ft > Dn), is = _r ? St : Mn, pr = _r ? ft : Dn, Ls = is + pr, Br = is + Mt + Ot, ho = pr + Bt + Wt, js = Br + ho;
        if (js === 0) return;
        const ec = Ln.map((ia)=>({
                ...ia,
                percent: ia.linesTotal / js * 100
            }));
        return {
            tabLinesAdded: is,
            tabLinesDeleted: pr,
            agentLinesAdded: Mt,
            agentLinesDeleted: Bt,
            humanLinesAdded: Ot,
            humanLinesDeleted: Wt,
            totalAdded: Br,
            totalDeleted: ho,
            total: js,
            tabPercent: Ls / js * 100,
            agentPercent: Oi / js * 100,
            humanPercent: (Ot + Wt) / js * 100,
            models: Array.from(_n),
            agentByModel: ec
        };
    }), [ht, ut] = Ut(!1), Dt = ()=>{
        t.clipboardService.writeText(e.options.commitId), ut(!0), setTimeout(()=>ut(!1), 2e3);
    }, lt = ()=>e.options.displayId || e.options.commitId.substring(0, 6), [Tt, ct] = Ut(void 0);
    Jt(()=>{
        const ze = l();
        if (ct(void 0), ze?.sha) {
            const St = ze.sha;
            let ft = !1;
            (async ()=>{
                try {
                    const Mt = await t.gitContextService.getGitUpstreamURL(n()).catch(()=>{});
                    if (ft || l()?.sha !== St) return;
                    if (Mt) {
                        const Bt = Kb_(Mt, St);
                        !ft && l()?.sha === St && ct(Bt);
                    }
                } catch (Mt) {
                    console.warn("[CursorBlamePane] Failed to build GitHub commit URL:", Mt);
                }
            })(), An(()=>{
                ft = !0;
            });
        }
    });
    const Kt = (ze, St)=>{
        const ft = St.getLineDecorations(ze);
        return !ft || ft.length === 0 ? !1 : ft.some((Mt)=>Mt.options.glyphMarginHoverMessage && (Mt.options.glyphMargin?.position === nU.Center || !Mt.options.glyphMargin?.position));
    }, Rt = (ze, St)=>{
        let ft, Mt, Bt, Ot, Wt;
        const nn = ()=>{
            ft && (ft.dispose(), ft = void 0), We.hideHover(), Mt?.parentNode && Mt.parentNode.removeChild(Mt), Mt = void 0, Ot = void 0, Wt = void 0;
        }, pn = (Ln, ti)=>{
            if (ft && !ft.isDisposed && Ot === Ln && Wt === ti) return;
            const fi = ti.getLineDecorations(Ln);
            if (!fi || fi.length === 0) return;
            const Oi = fi.find((cr)=>cr.options.glyphMarginHoverMessage && (cr.options.glyphMargin?.position === nU.Center || !cr.options.glyphMargin?.position));
            if (!Oi?.options.glyphMarginHoverMessage) return;
            const xr = Oi.options.glyphMarginHoverMessage, Fr = (Array.isArray(xr) ? xr : [
                xr
            ])[0];
            if (!Fr || !Fr.value) return;
            nn();
            const Zn = ti.getDomNode();
            if (!Zn) return;
            const _r = document.createElement("div");
            _r.style.position = "absolute", _r.style.opacity = "0", _r.style.zIndex = "-1";
            const is = Zn.getBoundingClientRect(), pr = ti.getLayoutInfo(), Ls = ti.getTopForLineNumber(Ln), Br = ti.getScrollTop(), ho = ti.getOption(68), js = is.top + Ls - Br, ec = is.left + pr.glyphMarginLeft, ia = pr.glyphMarginWidth, fr = ho;
            _r.style.top = `${js}px`, _r.style.left = `${ec}px`, _r.style.width = `${ia}px`, _r.style.height = `${fr}px`, document.body.appendChild(_r), ft = We.showInstantHover({
                content: Fr,
                target: _r,
                appearance: {
                    showPointer: !1
                },
                position: {
                    hoverPosition: wl.RIGHT
                },
                persistence: {
                    hideOnHover: !1,
                    sticky: !1
                },
                additionalClasses: [
                    "cursor-blame-gutter-hover"
                ]
            }), Mt = _r, Ot = Ln, Wt = ti;
        }, Yt = (Ln)=>{
            Ln.key === "Escape" && ft && !ft.isDisposed && nn();
        };
        document.addEventListener("keydown", Yt, !0);
        const _n = (Ln)=>{
            Bt !== void 0 && (clearTimeout(Bt), Bt = void 0), !Ln.relatedTarget?.closest(".monaco-hover.cursor-blame-gutter-hover") && nn();
        }, an = ze.getDomNode();
        an?.addEventListener("mouseleave", _n);
        const ln = ze.onMouseMove((Ln)=>{
            if (O() === "files") if (Ln.target.type === 2) {
                const ti = Ln.target.position?.lineNumber, fi = ze.getDomNode();
                if (fi && ti) if (Kt(ti, ze)) {
                    if (fi.style.cursor = "pointer", Ot !== ti || Wt !== ze || ft?.isDisposed) {
                        Bt !== void 0 && clearTimeout(Bt);
                        const Oi = JGh(t.configurationService);
                        Bt = setTimeout(()=>{
                            pn(ti, ze), Bt = void 0;
                        }, Oi);
                    }
                } else fi.style.cursor = "", Bt !== void 0 && (clearTimeout(Bt), Bt = void 0);
            } else {
                const ti = ze.getDomNode();
                ti && (ti.style.cursor = ""), Bt !== void 0 && (clearTimeout(Bt), Bt = void 0);
            }
        });
        let Mn, Dn = null;
        if (St) {
            const Ln = St.getOriginalEditor();
            Dn = Ln.getDomNode(), Dn?.addEventListener("mouseleave", _n), Mn = Ln.onMouseMove((ti)=>{
                if (O() === "files") if (ti.target.type === 2) {
                    const fi = ti.target.position?.lineNumber, Oi = Ln.getDomNode();
                    if (Oi && fi) if (Kt(fi, Ln)) {
                        if (Oi.style.cursor = "pointer", Ot !== fi || Wt !== Ln || ft?.isDisposed) {
                            Bt !== void 0 && clearTimeout(Bt);
                            const xr = JGh(t.configurationService);
                            Bt = setTimeout(()=>{
                                pn(fi, Ln), Bt = void 0;
                            }, xr);
                        }
                    } else Oi.style.cursor = "", Bt !== void 0 && (clearTimeout(Bt), Bt = void 0);
                } else {
                    const fi = Ln.getDomNode();
                    fi && (fi.style.cursor = ""), Bt !== void 0 && (clearTimeout(Bt), Bt = void 0);
                }
            });
        }
        return ()=>{
            nn(), Bt !== void 0 && clearTimeout(Bt), document.removeEventListener("keydown", Yt, !0), an?.removeEventListener("mouseleave", _n), Dn?.removeEventListener("mouseleave", _n), ln.dispose(), Mn?.dispose();
        };
    }, Gt = new Set, Nt = async (ze, St)=>{
        const ft = ze.goToFileUri;
        if (!ft) return;
        const Mt = t.workspaceContextService.asRelativePath(ft);
        if (!Mt) return;
        const Bt = Mt.replace(/^\//, "");
        if (!Gt.has(Bt)) {
            Gt.add(Bt);
            try {
                console.log("[CursorBlamePane] Lazy loading diff for:", Bt);
                const Ot = await t.gitContextService.getSingleFileDiff(e.options.commitId, Bt);
                if (!Ot || Ot.length === 0) {
                    console.warn("[CursorBlamePane] No diff returned for:", Bt), Gt.delete(Bt);
                    return;
                }
                const Wt = Ot[0];
                if (!Wt) {
                    console.warn("[CursorBlamePane] Empty diff for:", Bt), Gt.delete(Bt);
                    return;
                }
                const nn = [], pn = [];
                for (const Mn of Wt.chunks || [])for (const Dn of Mn.changes)(Dn.type === "del" || Dn.type === "normal") && nn.push(Dn.content.substring(1)), (Dn.type === "add" || Dn.type === "normal") && pn.push(Dn.content.substring(1));
                const Yt = nn.length > 0 ? nn.join(`
`) + `
` : "", _n = pn.length > 0 ? pn.join(`
`) + `
` : "";
                let an, ln;
                if (ze.originalModel) {
                    const Mn = await ze.originalModel;
                    Mn?.object?.textEditorModel && (an = Mn.object.textEditorModel, an.setValue(Yt));
                }
                if (ze.modifiedModel) {
                    const Mn = await ze.modifiedModel;
                    Mn?.object?.textEditorModel && (ln = Mn.object.textEditorModel, ln.setValue(_n));
                }
                St && an && ln && St.setModel({
                    original: an,
                    modified: ln
                }), console.log("[CursorBlamePane] Successfully loaded diff for:", Bt);
            } catch (Ot) {
                console.error("[CursorBlamePane] Failed to lazy load diff for:", Bt, Ot), Gt.delete(Bt);
            }
        }
    }, sn = (ze, St, ft)=>{
        const Mt = ze.modifiedUri?.toString() || ze.originalUri?.toString() || ze.goToFileUri?.toString() || "";
        if (!Mt) return;
        const Bt = Rt(St, ft);
        Ke.set(Mt, {
            resource: ze,
            editor: St,
            widget: ft,
            hoverCleanup: Bt
        }), h() && Nt(ze, ft);
        const Ot = g(), Wt = v();
        Ot && st(ze, St, ft, Ot, Wt, O());
    }, un = (ze)=>{
        const St = ze.modifiedUri?.toString() || ze.originalUri?.toString() || ze.goToFileUri?.toString() || "";
        if (!St) return;
        const ft = Ke.get(St);
        ft?.hoverCleanup && ft.hoverCleanup(), Ke.delete(St), et.delete(St), et.delete(`${St}-original`);
    }, kt = Oe(()=>{
        const ze = l()?.author || e.options.author;
        if (!ze) return;
        const St = vt(), ft = St !== void 0 && (St.tabPercent > 0 || St.agentPercent > 0);
        return {
            username: ze,
            avatarUrl: P(),
            createdAt: Xe() ? new Date(Xe()).toISOString() : void 0,
            hasAgentContribution: ft
        };
    });
    return pe(jb_, {
        get resources () {
            return a();
        },
        get isLoading () {
            return i();
        },
        get error () {
            return s();
        },
        get title () {
            return l()?.message || e.options.subject;
        },
        get summary () {
            return Ge();
        },
        summaryMaxHeight: 300,
        summaryIsTrusted: !1,
        get status () {
            return R() ?? e.options.status;
        },
        get authorInfo () {
            return kt();
        },
        get additionalMetaSections () {
            return pe(ty_, {
                get stats () {
                    return vt();
                },
                get isLoading () {
                    return y();
                },
                get author () {
                    return l()?.author || e.options.author;
                },
                get availableModels () {
                    return t.aiSettingsService.getAvailableModelsWithStatus();
                }
            });
        },
        beforeFilesContent: ()=>{
            if (!h()) return null;
            const ze = l()?.diff?.length ?? 0;
            return (()=>{
                var St = aVh(), ft = St.firstChild, Mt = ft.nextSibling, Bt = Mt.firstChild, Ot = Bt.nextSibling, Wt = Ot.nextSibling;
                return Me(Mt, ze, Ot), Rn(()=>$i(ft, Ft.asClassName(Pe.info))), St;
            })();
        },
        actionBarLeft: ()=>(()=>{
                var ze = cVh(), St = ze.firstChild, ft = St.firstChild, Mt = ft.nextSibling;
                return St.addEventListener("click", Dt), Me(Mt, lt), Me(ze, pe(wv, {
                    get class () {
                        return `review-pr-copy-branch-button ${ht() ? "review-pr-copy-success" : ""}`;
                    },
                    get codicon () {
                        return ht() ? Pe.check : Pe.copyTwo;
                    },
                    iconClass: "!text-[12px]",
                    get hintText () {
                        return ht() ? "Copied" : "Copy commit SHA";
                    },
                    size: 12,
                    onClick: Dt
                }), null), Rn((Bt)=>{
                    var Ot = `Click to copy: ${e.options.commitId}`, Wt = Ft.asClassName(Pe.gitCommit);
                    return Ot !== Bt.e && fs(St, "title", Bt.e = Ot), Wt !== Bt.t && $i(ft, Bt.t = Wt), Bt;
                }, {
                    e: void 0,
                    t: void 0
                }), ze;
            })(),
        actionBarRight: ()=>(()=>{
                var ze = lVh(), St = ze.firstChild, ft = St.nextSibling;
                return ze.addEventListener("click", ()=>{
                    const Mt = Tt();
                    Mt && (t.analyticsService.trackEvent("cursor_blame.open_commit_in_github_clicked"), t.openerService.open(Ee.parse(Mt), {
                        openExternal: !0
                    }));
                }), Rn((Mt)=>{
                    var Bt = !Tt(), Ot = Ft.asClassName(Pe.linkExternal);
                    return Bt !== Mt.e && (ze.disabled = Mt.e = Bt), Ot !== Mt.t && $i(ft, Mt.t = Ot), Mt;
                }, {
                    e: void 0,
                    t: void 0
                }), ze;
            })(),
        get showGroupBySelector () {
            return J().length > 0;
        },
        get conversationCount () {
            return J().length;
        },
        defaultGroupingMode: "files",
        onGroupingModeChange: F,
        get resourceGroups () {
            return J();
        },
        get groupedSectionTitle () {
            return J().length > 0 ? "Agent conversations" : void 0;
        },
        get secondarySectionTitle () {
            return ne().length > 0 ? "Non-agent files" : void 0;
        },
        get secondarySectionResources () {
            return ne();
        },
        get defaultCollapsed () {
            return se();
        },
        onScroll: re,
        onDiffEditorMount: sn,
        onDiffEditorUnmount: un,
        mountedEditors: Ke,
        onFindWidgetCreated: W,
        containerRef: G,
        skipComposerContext: !0
    });
}
var pVh;
export { A__, BLo, Bb_, Bnt, Fb_, Fer, Gb_, Hb_, JGh, J__, Jb_, Jy, K__, Kb_, Lb_, Ll_, MNo, Mb_, Nb_, Nl_, O2, Ob_, Ol_, P__, Pb_, Pl_, QHh, Qc_, R__, Rb_, SGh, TWh, UHh, Ub_, Ul_, Wb_, Wqt, Y6, YHh, ZFh, ZHh, Z__, a0t, aRo, ay_, c5n, c__, eVh, ey_, isr, iy_, jb_, l__, lhe, nb_, ny_, ob_, oy_, pRo, pVh, pbe, rVh, rb_, ry_, ssr, sy_, tb_, ty_, v0t, wc_, wnr, xb_, xqt, yGh, yc_, zb_, zr_ };
var __wakaru_ly__initialized = false;
export function ly_() {
if (__wakaru_ly__initialized) return;
__wakaru_ly__initialized = true;
"use strict";
x(), $e(), Ww(), cy_(), pVh = (e, t, n)=>Jy(()=>pe(ay_, {
            options: n
        }), e, t);

}
