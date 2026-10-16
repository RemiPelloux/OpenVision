import { Am, cs, jp } from "./Sol.js";
import { Ca, Gr, eb, sVe, wEt } from "./Ycg.js";
import { oVe } from "./aiConfigHelper.js";
import { gs, yt } from "./codicons.js";
import { ZOe, hJn, pa } from "./constants_8.js";
import { F6 } from "./iconButton_2.js";
import { fXr } from "./inlineDiffDecorationUtils.js";
import { Hcs, Wcs, kEt } from "./inlineDiffTypes.js";
import { zcs } from "./inlineDiffWidget.css";
import { e_ } from "./jotaiSolidBridge.js";
import { Ki, Ot } from "./network.js";
import { er, jc } from "./position.js";
import { $T } from "./solid_2.js";
import { LI, ov } from "./theme.js";
import { E } from "./tslib.es6.js";
import { UVt } from "./useMeasureWidthHeight.js";
import { at, zr } from "./web.js";
import { Ea, Le, YTn, hCt, lo, wt, zu } from "./yBp.js";
import { Cn, Ee, On, Ut, V_, Xc, ks, pi, vt, xn } from "./ze.js";
var j0g, cml, $0g, H0g, W0g, Ycs, uml, dml, hml, pml, mml, gml, fml, vml, G0g;
export { $0g, G0g, H0g, W0g, Ycs, cml, dml, fml, gml, hml, j0g, mml, pml, uml, vml };
var __wakaru_WIk_initialized = false;
export function WIk() {
if (__wakaru_WIk_initialized) return;
__wakaru_WIk_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), Am(), pi(), gs(), pa(), Ki(), fXr(), jc(), LI(), oVe(), $T(), F6(), UVt(), e_(), kEt(), zcs(), j0g = wt("<div class=inline-diff-nav><span class=inline-diff-nav-counter> of "), cml = wt("<span class=keyboard-shortcut>"), $0g = wt('<button class="hoverButton partialHoverButton secondary-button"><span>'), H0g = wt('<button class="hoverButton partialHoverButton"><span>'), W0g = wt("<div class=inline-diff-outer-container><div class=inline-diff-hover-container>"), Ycs = cs(!1), uml = cs(!1), dml = cs(!1), hml = cs(0), pml = cs(18), mml = cs(void 0), gml = cs(!1), fml = cs(0), vml = cs(0), G0g = (t)=>{
    const e = vt(()=>t.thisX), n = Gr(), i = jp(), r = vt(()=>e().getEditor()?.getIsMultiDiffEditor?.());
    i.set(Ycs, n.diffDecorationVisibilityService.shouldHideInlineDiffs());
    const s = Ca(i, Ycs), o = (Y)=>i.set(Ycs, Y), a = n.diffDecorationVisibilityService.onDidChangeGlobal(()=>{
        o(n.diffDecorationVisibilityService.shouldHideInlineDiffs());
    });
    On(()=>{
        a.dispose();
    });
    const l = vt(()=>e().getEditor()?.getModel()?.uri.scheme === Ot.vscodeNotebookCell), [c] = sVe(ZOe, n.configurationService, hJn), u = Ca(i, uml), d = (Y)=>i.set(uml, Y), h = Ca(i, dml), p = (Y)=>i.set(dml, Y), g = ()=>{
        const Y = n.themeService.getColorTheme().type, J = Y === ov.HIGH_CONTRAST_DARK || Y === ov.HIGH_CONTRAST_LIGHT, Q = Y === ov.DARK || Y === ov.HIGH_CONTRAST_DARK;
        d(J), p(Q);
    };
    g();
    const f = n.themeService.onDidColorThemeChange(()=>{
        g();
    });
    On(()=>{
        f.dispose();
    });
    const _ = Ca(i, hml), b = (Y)=>i.set(hml, Y);
    Cn(()=>{
        const Y = e().getEditor();
        if (!Y) return;
        const J = Y.getOption(68);
        b(J);
        const Q = Y.onDidChangeModelOptions(()=>{
            const te = Y.getOption(68);
            b(te);
        });
        On(()=>{
            Q.dispose();
        });
    });
    const y = Ca(i, pml), S = (Y)=>i.set(pml, Y);
    Cn(()=>{
        const Y = e().getEditor();
        if (!Y) return;
        const J = ()=>{
            const ee = Y.getOption(108)?.verticalScrollbarSize ?? 0;
            S(ee + 4);
        };
        J();
        const Q = Y.onDidChangeConfiguration((te)=>{
            te.hasChanged(108) && J();
        });
        On(()=>{
            Q.dispose();
        });
    });
    const k = Ca(i, mml), C = (Y)=>i.set(mml, Y), T = Ca(i, gml), I = (Y)=>i.set(gml, Y), A = wEt(k), P = ()=>{
        const Y = ks(()=>e().line()), J = e().getEditor().getModel();
        if (!J || Y < 1 || Y > J.getLineCount()) return;
        const Q = e().getEditor().getLayoutInfo();
        if (!Q) return;
        const te = J.getLineContent(Y), ee = Q.glyphMarginWidth + Q.lineNumbersWidth + e().getEditor().getOffsetForColumn(Y, te.length + 1), re = Q.width, ie = y(), le = ee + 32 > re - ie - 200;
        T() !== le && I(le);
    };
    Cn(V_(A, ()=>{
        P();
    })), Xc(()=>{
        P();
    });
    const M = Ca(i, fml), O = (Y)=>i.set(fml, Y), N = Ca(i, vml), U = (Y)=>i.set(vml, Y), j = vt(()=>e().keybindingService?.lookupKeybinding(Wcs)?.getLabel() ?? ""), $ = vt(()=>e().keybindingService?.lookupKeybinding(Hcs)?.getLabel() ?? ""), H = (Y, J)=>T() && !r() && J.length > 0 ? "" : Y, G = ()=>{
        const Y = e().getEditor();
        if (!Y) return;
        const Q = n.diffChangeSourceRegistry.getDescriptorById(e().diffId)?.descriptor, te = Q?.changes ?? [];
        if (U(te.length), !Q || te.length === 0) {
            O(0);
            return;
        }
        const ee = ks(()=>e().line()), re = Y.getModel()?.getLineCount();
        let ie = te.find((se)=>{
            const le = hCt(Q, se);
            return Math.min(le.endLineNumber + 1, re ?? le.endLineNumber + 1) === ee;
        });
        ie || (ie = YTn(Q, new er(ee, 1)));
        const oe = ie ? te.indexOf(ie) : -1;
        O(oe === -1 ? 0 : oe + 1);
    }, q = (Y)=>{
        const J = e().getEditor();
        if (!J) return;
        const te = n.diffChangeSourceRegistry.getDescriptorById(e().diffId)?.descriptor, ee = te?.changes ?? [];
        if (!te || ee.length === 0) return;
        const re = e().line(), ie = J.getModel()?.getLineCount();
        let oe = ee.find((ge)=>{
            const pe = hCt(te, ge);
            return Math.min(pe.endLineNumber + 1, ie ?? pe.endLineNumber + 1) === re;
        });
        oe || (oe = YTn(te, new er(re, 1)));
        const se = oe ? ee.indexOf(oe) : -1, ce = se === -1 ? Y === "next" ? 0 : ee.length - 1 : (se + (Y === "next" ? 1 : -1) + ee.length) % ee.length, ae = ee[ce], de = hCt(te, ae), he = Math.min(de.endLineNumber + 1, ie ?? de.endLineNumber + 1);
        J.setPosition({
            lineNumber: he,
            column: 1
        }), J.revealLineInCenter(he);
    }, K = Gr(), V = vt(()=>{
        const J = n.diffChangeSourceRegistry.getDescriptorById(e().diffId)?.descriptor?.metadata?.composerId;
        return K.composerDataService.isWorktreeComposer(J);
    });
    return Xc(()=>{
        G();
        const J = e().getEditor()?.onDidChangeModelContent(()=>ks(G)), Q = n.diffChangeSourceRegistry.onDidChange(()=>ks(G));
        Cn(()=>{
            e().line(), G();
        }), On(()=>{
            J?.dispose(), Q?.dispose();
        });
    }), (()=>{
        var Y = W0g(), J = Y.firstChild;
        return zu(C, Y), Y.style.setProperty("width", "100%"), Y.style.setProperty("visibility", "visible"), Y.style.setProperty("position", "relative"), Y.style.setProperty("pointer-events", "none"), Le(J, Ee(Ut, {
            get when () {
                return zr(()=>N() > 1)() && !l();
            },
            get children () {
                var Q = j0g(), te = Q.firstChild, ee = te.firstChild;
                return Le(Q, Ee(eb, {
                    get codicon () {
                        return yt.chevronUp;
                    },
                    onClick: (re)=>{
                        q("previous"), re.stopPropagation();
                    },
                    class: "!text-[var(--vscode-input-foreground)]"
                }), te), Le(te, M, ee), Le(te, N, null), Le(Q, Ee(eb, {
                    get codicon () {
                        return yt.chevronDown;
                    },
                    onClick: (re)=>{
                        q("next"), re.stopPropagation();
                    },
                    class: "!text-[var(--vscode-input-foreground)]"
                }), null), Q;
            }
        }), null), Le(J, Ee(Ut, {
            get when () {
                return !V();
            },
            get children () {
                return [
                    (()=>{
                        var Q = $0g(), te = Q.firstChild;
                        return Q.addEventListener("click", (ee)=>{
                            l() ? n.diffChangeSourceRegistry.reject(e().diffId) : e().commandService.executeCommand(Wcs, e()), ee.stopPropagation();
                        }), te.style.setProperty("display", "flex"), te.style.setProperty("align-items", "center"), te.style.setProperty("gap", "4px"), te.style.setProperty("font-size", "12px"), Le(te, ()=>H(l() ? "Undo Cell" : "Undo", j()), null), Le(te, Ee(Ut, {
                            get when () {
                                return j();
                            },
                            get children () {
                                var ee = cml();
                                return Le(ee, j), ee;
                            }
                        }), null), Q;
                    })(),
                    Ee(Ut, {
                        get when () {
                            return !r() || !s();
                        },
                        get children () {
                            var Q = H0g(), te = Q.firstChild;
                            return Q.addEventListener("click", (ee)=>{
                                l() ? n.diffChangeSourceRegistry.accept(e().diffId) : e().commandService.executeCommand(Hcs, e()), ee.stopPropagation();
                            }), te.style.setProperty("display", "flex"), te.style.setProperty("align-items", "center"), te.style.setProperty("font-size", "12px"), te.style.setProperty("gap", "4px"), Le(te, ()=>H(l() ? "Keep Cell" : "Keep", $()), null), Le(te, Ee(Ut, {
                                get when () {
                                    return $();
                                },
                                get children () {
                                    var ee = cml();
                                    return Le(ee, $), ee;
                                }
                            }), null), Q;
                        }
                    })
                ];
            }
        }), null), xn((Q)=>{
            var te = c() ? "true" : "false", ee = u() ? "true" : "false", re = h() ? "true" : "false", ie = t.isOnEditorEnd() ? `${_()}px` : "0px", oe = {
                float: "right",
                display: "flex",
                "flex-direction": "row",
                gap: "2px",
                overflow: "hidden",
                opacity: "1",
                "z-index": "999",
                "margin-right": `${y()}px`,
                "pointer-events": "all",
                ...t.isOnEditorEnd() ? {
                    "border-top-left-radius": "4px",
                    "border-top-right-radius": "4px",
                    transform: "translateY(-100%)"
                } : {
                    "border-bottom-left-radius": "4px",
                    "border-bottom-right-radius": "4px"
                }
            };
            return te !== Q.e && lo(Y, "data-themed-diff", Q.e = te), ee !== Q.t && lo(Y, "data-high-contrast", Q.t = ee), re !== Q.a && lo(Y, "data-dark-theme", Q.a = re), ie !== Q.o && ((Q.o = ie) != null ? Y.style.setProperty("margin-top", ie) : Y.style.removeProperty("margin-top")), Q.i = Ea(J, oe, Q.i), Q;
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0
        }), Y;
    })();
};

}
