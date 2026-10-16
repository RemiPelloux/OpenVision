import { gKt, vhs } from "./GhostTextNode.js";
import { _3k } from "./ImagePlugins.js";
import { rO } from "./Iwo.js";
import { bXd } from "./LYd.js";
import { wus } from "./LexicalComposer.js";
import { t1 } from "./LexicalComposerContext.js";
import { Xat, bEt } from "./MentionNode.js";
import { OPg } from "./MentionsPlugin.js";
import { Gml, Gr, Jml, Jvl, PEg, QTg, S3k, YB, YTg, Yml, _Et, b3k, dTe, e_l, egl, f3k, fRk, k3k, o3k, qTg, qml, tEg, v3k, y3k, zCg, zvl } from "./Ycg.js";
import { Kh, vu, za } from "./actions.js";
import { a3k } from "./aiInput2.css";
import { vRk } from "./api_17.js";
import { NA } from "./api_7.js";
import { YE } from "./assert.js";
import { Hn } from "./dom_2.js";
import { EB } from "./getIconClasses.js";
import { Ak, Au, Bst, Cc, K0e, Lst, M6e, Ost, QGe, V7, Wc, Xg, Xh, _2, cLa, h0t, ku, m0t, mR, nS, oWt, p0t, pR, q2e, sWt, u0t, vLp } from "./ipa.js";
import { nT, rv } from "./keyboardEvent.js";
import { kRk } from "./mentionBoundaryCaret.js";
import { Ki, Ot, em } from "./network.js";
import { VCg } from "./range-selection.js";
import { Lae, Ox } from "./reactiveStorageTypes.js";
import { Um, mpe } from "./reactiveStorageTypes_2.js";
import { Aa, Lr } from "./resources.js";
import { XAi } from "./selectionPastePolicy.js";
import { Ole } from "./solidApplicationSetting.js";
import { vo } from "./solidContext.js";
import { O9e, mKt } from "./terminalService.js";
import { E } from "./tslib.es6.js";
import { Sz, to } from "./types_4.js";
import { fn, rt } from "./uri.js";
import { REg } from "./useHistory.js";
import { SLp, wu } from "./utilities_3.js";
import { oT } from "./utils_16.js";
import { MRn } from "./utils_26.js";
import { Ai, Xo } from "./uuid_2.js";
import { at, zr } from "./web.js";
import { Ea, Le, wt, zu } from "./yBp.js";
import { Cn, Ee, On, Ut, Wt, Xc, Zy, ks, pi, vt, xn } from "./ze.js";
var KPg, YPg, tIt, t_l, XPg, ZPg, QPg, JPg, eMg, tMg, nMg, iMg, rMg;
export { JPg, KPg, QPg, XPg, YPg, ZPg, eMg, iMg, nMg, rMg, tIt, tMg, t_l };
var __wakaru_nIt_initialized = false;
export function nIt() {
if (__wakaru_nIt_initialized) return;
__wakaru_nIt_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), Hn(), nT(), vu(), YE(), pi(), wus(), vRk(), NA(), vo(), kRk(), Xat(), OPg(), QTg(), VCg(), REg(), Ak(), Ki(), Lr(), fn(), Xo(), EB(), Lae(), Ole(), wu(), Um(), XAi(), oT(), vhs(), mKt(), MRn(), a3k(), _3k(), Sz(), KPg = wt("<div><div class=aislash-editor-placeholder>"), YPg = wt("<div><div class=aislash-editor-grid>"), tIt = ()=>({
        onError (e) {
            throw e;
        },
        nodes: [
            bEt,
            gKt
        ]
    }), t_l = (t)=>{
    const e = "var(--ai-input-editor-padding, 0 0.5rem)";
    function n() {
        return (()=>{
            var g = KPg(), f = g.firstChild;
            return g.style.setProperty("grid-area", "1 / 2 / 1 / 2"), Le(f, ()=>t.placeholder), xn((_)=>Ea(f, {
                    position: "relative",
                    top: 0,
                    left: "-100%",
                    padding: e,
                    "pointer-events": "none",
                    "user-select": "none",
                    "line-height": "var(--conversation-line-height, var(--cursor-line-height-lg, 22px))",
                    "font-size": "var(--conversation-text-font-size)",
                    color: "var(--vscode-input-placeholderForeground)",
                    opacity: .5,
                    ...t.placeholderStyle
                }, _)), g;
        })();
    }
    const i = Gr(), [r] = YB(i.storageService, "chatSubmitOnCmdEnter"), s = vt(()=>t.source === "chat" && r() === !0);
    function o() {}
    const a = vt(()=>{
        const f = i.editorService.editors.map((_)=>_.resource).map((_)=>_?.fsPath ?? "");
        return new Set(f);
    }), l = ()=>Ee(qml, {
            class: "aislash-editor-input",
            get style () {
                return {
                    resize: "none",
                    "grid-area": "1 / 1 / 1 / 1",
                    overflow: "hidden",
                    "line-height": "var(--conversation-line-height, var(--cursor-line-height-lg, 22px))",
                    "font-family": "inherit",
                    "font-size": "var(--conversation-text-font-size)",
                    color: "var(--vscode-input-foreground)",
                    "background-color": "transparent",
                    display: "block",
                    outline: "none",
                    "scrollbar-width": "none",
                    "box-sizing": "border-box",
                    border: "none",
                    "word-wrap": "break-word",
                    "word-break": "break-word",
                    padding: e,
                    ...t.style
                };
            },
            get readonlyButSelectable () {
                return t.readonlyButSelectable;
            },
            get turnOffCmdZ () {
                return t.externalHistoryBundle !== void 0;
            },
            spellCheck: !1,
            autoCapitalize: "off"
        }), [c, u] = Wt(!1), [d, h] = Wt(null), p = vt(()=>[
            {
                command: m0t,
                callback: (g)=>{
                    const f = new rv(g), _ = i.keybindingService.softDispatch(f, f.target, !0);
                    if (_.kind === 2 && _.commandId === "editor.action.selectAll") {
                        g.preventDefault(), g.stopPropagation();
                        const b = d();
                        return b && b.update(()=>{
                            const y = ku();
                            if (Cc(y)) {
                                zCg(y);
                                const S = y.anchor.getNode();
                                if (Au(S) && S.isToken()) {
                                    const k = Xg();
                                    y.anchor.set(k.getKey(), 0, "element");
                                }
                            }
                        }), !0;
                    }
                    return !1;
                },
                priority: mR
            }
        ]);
    return (()=>{
        var g = YPg(), f = g.firstChild;
        return zu((_)=>{
            t.setContainerRef?.(_);
        }, g), g.addEventListener("click", (_)=>{
            t.inputBoxDelegate && _.target === _.currentTarget && t.inputBoxDelegate.focus();
        }), f.style.setProperty("display", "grid"), f.style.setProperty("position", "relative"), f.style.setProperty("grid-template-rows", "1"), f.style.setProperty("grid-template-columns", "1fr 1fr"), f.style.setProperty("width", "200%"), Le(f, Ee(Gml, {
            get initialConfig () {
                return t.editorConfig();
            },
            get children () {
                return [
                    zr(()=>t.extraPlugins),
                    Ee(y3k, {}),
                    Ee(tEg, {
                        get contentEditable () {
                            return l();
                        },
                        get placeholder () {
                            return Ee(n, {});
                        },
                        errorBoundary: Yml
                    }),
                    Ee(Ut, {
                        get when () {
                            return t.externalHistoryBundle !== void 0;
                        },
                        get fallback () {
                            return Ee(PEg, {});
                        },
                        get children () {
                            return Ee(ZPg, Zy(()=>t.externalHistoryBundle));
                        }
                    }),
                    Ee(Ut, {
                        get when () {
                            return t.atMentionsDisabled !== !0;
                        },
                        get children () {
                            return Ee(o3k, Zy(t, {
                                get mentionIdToDelete () {
                                    return t.mentionIdToDelete;
                                },
                                get setMentionIdToDelete () {
                                    return t.setMentionIdToDelete;
                                },
                                get mentionToAdd () {
                                    return t.mentionToAdd;
                                },
                                get setMentionToAdd () {
                                    return t.setMentionToAdd;
                                },
                                get insertSelection () {
                                    return t.insertSelection;
                                },
                                get selections () {
                                    return t.selections;
                                },
                                get removeSelection () {
                                    return t.removeSelection;
                                },
                                insertImage: (_)=>{
                                    if (t.insertImage !== void 0) return t.insertImage(_);
                                    if (t.addImage === void 0) return;
                                    const b = new Image;
                                    b.src = em.uriToBrowserUri(rt.from(_.uri)).toString(), t.addImage({
                                        uuid: _.uuid ?? Ai(),
                                        path: rt.from(_.uri).fsPath,
                                        dimension: {
                                            width: b.naturalWidth,
                                            height: b.naturalHeight
                                        },
                                        loadedAt: Date.now()
                                    });
                                },
                                get removeImage () {
                                    return t.removeImage;
                                },
                                get imageSelections () {
                                    return t.imageSelections;
                                },
                                get insertLink () {
                                    return t.insertLink;
                                },
                                get removeLink () {
                                    return t.removeLink;
                                },
                                get insertFileSelection () {
                                    return t.insertFileSelection;
                                },
                                get fileSelections () {
                                    return t.fileSelections;
                                },
                                get removeFileSelection () {
                                    return t.removeFileSelection;
                                },
                                supportsFiles: !0,
                                get insertCommit () {
                                    return t.insertCommit;
                                },
                                get commits () {
                                    return t.commits;
                                },
                                get removeCommit () {
                                    return t.removeCommit;
                                },
                                get insertDocs () {
                                    return t.insertDocs;
                                },
                                get removeDocs () {
                                    return t.removeDocs;
                                },
                                get removeCurrentFile () {
                                    return t.removeCurrentFile ?? (()=>{});
                                },
                                get addCurrentFile () {
                                    return t.addCurrentFile ?? (()=>{});
                                },
                                get recentFiles () {
                                    return a();
                                },
                                get contextSessionUuid () {
                                    return t.contextSessionUuid;
                                },
                                showErrorMessage: o,
                                get source () {
                                    return t.source;
                                },
                                onMentionsMenuOpen: ()=>{
                                    t.onMentionsMenuOpen?.(), u(!0);
                                },
                                onMentionsMenuClose: ()=>{
                                    t.onMentionsMenuClose?.(), u(!1);
                                },
                                get onReset () {
                                    return t.onReset;
                                },
                                get onManualSummarize () {
                                    return t.onManualSummarize;
                                },
                                get onBugbot () {
                                    return t.onBugbot;
                                },
                                get onOpenBrowser () {
                                    return t.onOpenBrowser;
                                },
                                get onPluginAdd () {
                                    return t.onPluginAdd;
                                },
                                get onPluginRemove () {
                                    return t.onPluginRemove;
                                }
                            }));
                        }
                    }),
                    Ee(k3k, {
                        setIsFocused: (_)=>{
                            _ ? t.onFocus?.() : t.onBlur?.(), t.setIsFocused?.(_);
                        },
                        get delegate () {
                            return t.delegate;
                        }
                    }),
                    Ee(f3k, {
                        get addImage () {
                            return t.addImage ?? (()=>{});
                        },
                        get addVideo () {
                            return t.addVideo;
                        }
                    }),
                    Ee(v3k, {
                        get addImage () {
                            return t.addImage ?? (()=>{});
                        },
                        get addDocument () {
                            return t.addDocument;
                        },
                        get addVideo () {
                            return t.addVideo;
                        }
                    }),
                    Ee(JPg, {
                        handleSubmit: (_)=>t.onSubmit(_),
                        isMentionsMenuOpen: c,
                        get submitOnCmdEnter () {
                            return s();
                        }
                    }),
                    Ee(eMg, {}),
                    Ee(tMg, {
                        get supportsLink () {
                            return (t.shouldAutoParseLink === void 0 ? !0 : t.shouldAutoParseLink) && t.supportsLink;
                        },
                        get supportsFolder () {
                            return t.supportsFilesAndFolders ?? !1;
                        },
                        get addFile () {
                            return t.insertFileSelection;
                        },
                        get addFolder () {
                            return t.insertFolderSelection;
                        },
                        get addCode () {
                            return t.insertSelection;
                        },
                        get insertSelection () {
                            return t.insertSelection;
                        },
                        get insertLink () {
                            return t.insertLink;
                        },
                        get removeLink () {
                            return t.removeLink;
                        },
                        get insertTerminalSelection () {
                            return t.insertTerminalSelection;
                        },
                        get insertGitDiff () {
                            return t.insertGitDiff;
                        },
                        get insertDiffToMain () {
                            return t.insertDiffToMain;
                        },
                        isMentionsMenuOpen: c,
                        get source () {
                            return t.source;
                        },
                        get disableSelectionCopyPaste () {
                            return t.disableSelectionCopyPaste;
                        },
                        get composerDataHandle () {
                            return t.composerDataHandle;
                        }
                    }),
                    Ee(nMg, {
                        setIsTyping: ()=>t.setIsTyping,
                        get setText () {
                            return t.setText;
                        },
                        get setRichText () {
                            return t.setRichText;
                        },
                        get initText () {
                            return t.initText;
                        },
                        onEscape: (_)=>{
                            t.onEscape?.(_);
                        },
                        get setContentHeight () {
                            return t.setContentHeight;
                        },
                        get shouldFilterGhostText () {
                            return t.shouldFilterGhostText;
                        }
                    }),
                    Ee(iMg, {
                        get delegate () {
                            return t.delegate;
                        },
                        get onSubmit () {
                            return t.onSubmit;
                        },
                        get initText () {
                            return t.initText;
                        },
                        get inputBoxDelegate () {
                            return t.inputBoxDelegate;
                        }
                    }),
                    Ee(S3k, {
                        removeSelection: ()=>t.removeSelection,
                        get selections () {
                            return t.selections;
                        },
                        onTryDeleteContext: ()=>t.onTryDeleteContext,
                        get ignoreTextForLastSelectionRemoval () {
                            return t.ignoreTextForLastSelectionRemoval;
                        },
                        get text () {
                            return t.text;
                        }
                    }),
                    Ee(b3k, {
                        get commandListeners () {
                            return [
                                ...p(),
                                ...t.extraCommandListeners ?? []
                            ];
                        }
                    }),
                    zr(()=>zr(()=>!!t.useArrowsForHistory)() && Ee(QPg, {
                            get setText () {
                                return t.setText;
                            }
                        })),
                    Ee(XPg, {
                        setEditor: (_)=>{
                            h(_), t.setEditor?.(_);
                        },
                        get readonly () {
                            return t.readonly ?? !1;
                        }
                    }),
                    Ee(rMg, {})
                ];
            }
        })), xn((_)=>Ea(g, {
                width: "100%",
                overflow: "hidden",
                ...t.containerStyle
            }, _)), g;
    })();
}, XPg = (t)=>{
    const [e] = t1();
    return Cn(()=>{
        t.setEditor && (t.setEditor(e), e.setEditable(!(t.readonly ?? !1)));
    }), Cn(()=>{
        t.readonly && e.setEditable(!1);
    }), null;
}, ZPg = (t)=>{
    const [e] = t1();
    return fRk(e, ()=>t.externalHistoryState, 100, t.runExternalUndo, t.runExternalRedo, t.addToExternalUndoStack), null;
}, QPg = (t)=>{
    const [e] = t1(), n = Gr(), [i, r] = Wt(-1), [s, o] = Wt([]), [a, l] = Wt("");
    Cn(()=>{
        a().trim() === "" ? o([
            a(),
            ...n.aiService.getPreviousPrompts()
        ]) : o(n.aiService.getPreviousPrompts());
    });
    const c = e.registerCommand(Lst, ()=>{
        const d = e.getRootElement();
        return d !== null && Jvl(d) && (i() === s().length - 1 || (i() === -1 && l(d.innerText), r((h)=>h + 1))), !1;
    }, mR), u = e.registerCommand(Ost, ()=>{
        const d = e.getRootElement();
        return d !== null && e_l(d) && i() !== -1 && r(i() - 1), !1;
    }, mR);
    return Cn(()=>{
        const d = s().length - 1 - i();
        s().length > 0 && d >= 0 && d < s().length && (t.setText && t.setText(s()[d]), e.update(()=>{
            const h = Xg(), p = _2(), g = nS(s()[d]);
            p.append(g);
            for (const f of h.getChildren())f.remove();
            h.append(p), h.selectEnd();
        }));
    }), On(()=>{
        c(), u();
    }), null;
}, JPg = (t)=>{
    const [e] = t1(), n = e.registerCommand(QGe, (i)=>i.repeat ? !0 : t.isMentionsMenuOpen() || t.submitOnCmdEnter || i.shiftKey && !i.altKey || t.handleSubmit(i) === "do-not-stop-propagation" ? !1 : (i.preventDefault(), !0), q2e);
    return On(()=>{
        n();
    }), null;
}, eMg = ()=>{
    const [t] = t1(), e = t.registerCommand(QGe, (n)=>!n.shiftKey || n.altKey ? !1 : (n.preventDefault(), t.update(()=>{
            const i = ku();
            if (!Cc(i)) return;
            const r = i.anchor, s = r.getNode();
            if (i.isCollapsed() && Au(s) && s.isToken() && r.offset === s.getTextContentSize()) {
                const o = s.getParent();
                if (Wc(o) && !o.isInline()) {
                    const a = _2(), l = nS("");
                    a.append(l), o.insertAfter(a), l.select(0, 0);
                    return;
                }
            }
            i.insertParagraph();
        }), !0), K0e);
    return On(()=>{
        e();
    }), null;
}, tMg = (t)=>{
    const [e] = t1(), n = Gr();
    let i = !1;
    const r = Xh(n.storageService, "copyPasteMentions");
    function s(f) {
        const _ = f.selectionStartLineNumber, b = f.positionLineNumber;
        return _ === b ? `${_}` : `${_}-${b}`;
    }
    function o(f) {
        const _ = rt.from(f.uri), b = Aa(_);
        return `${b && b.trim().length > 0 ? b : "code block"} (${s(f.range)})`;
    }
    function a(f, _) {
        return `${_ ?? "Terminal"} (${s(f.range)})`;
    }
    function l(f, _, b, y) {
        const S = Ai();
        return f.uuid = S, e.update(()=>{
            const k = ku();
            if (Cc(k)) {
                const C = {
                    type: Ox.Code,
                    selectionWithoutUuid: {
                        ...f,
                        uuid: void 0
                    }
                }, T = dTe(_, void 0, void 0, b, C, S, void 0, void 0, y), I = nS(" ");
                k.insertNodes([
                    T,
                    I
                ]), I.select();
            }
        }), S;
    }
    const c = (f)=>{
        t.source === "chat" && n.tooltipService.registerEvent("chat.paste");
        let _ = f.clipboardData?.getData("Text");
        const b = (N)=>N.trim().includes(" ") ? !1 : URL.parse(N)?.hostname.includes(".") === !0, y = (N)=>{
            const j = /https:\/\/[^\s<>"{}|\\^`]+/gi.exec(N);
            if (j) {
                const $ = j[0];
                if (b($)) return $;
            }
        }, S = ()=>{
            if (_ && _.length < 1e4) {
                const N = y(_);
                N && n.mcpWellKnownDetectionService.checkUrlAndSuggestInstallation(N, t.composerDataHandle?.data.composerId);
            }
        }, k = Array.from(f.clipboardData?.types ?? []), C = f.clipboardData?.getData("text/html") ?? "", T = k.includes("application/x-lexical-editor"), I = C.includes("data-lexical-mention"), A = n.uiOverlayService.lastCopyData, P = zvl({
            lastCopyData: A,
            pastedText: _,
            disableSelectionCopyPaste: t.disableSelectionCopyPaste
        }), M = _ && _.includes(`
`);
        if (!i && M && !T && !I && !P) {
            f.preventDefault();
            const N = _.split(/\r?\n/);
            return e.update(()=>{
                const U = ku();
                if (Cc(U)) {
                    U.insertText(N[0]);
                    for(let j = 1; j < N.length; j++)U.insertParagraph(), N[j] && U.insertText(N[j]);
                }
            }), S(), !0;
        }
        if (!i && (T || I)) {
            if (T) {
                const N = f.clipboardData?.getData("application/x-lexical-editor");
                if (N) {
                    f.preventDefault();
                    try {
                        const U = JSON.parse(N);
                        return Array.isArray(U.nodes) && e.update(()=>{
                            const j = ku();
                            if (!j) return;
                            const $ = YTg(U.nodes);
                            Cc(j) && $.length > 0 && egl(e, $, j);
                        }), !0;
                    } catch  {}
                }
            }
            return !1;
        }
        if (!i && P && A) {
            f.preventDefault();
            const N = t.insertTerminalSelection, U = t.insertSelection, j = ()=>{
                e.update(()=>{
                    const $ = ku();
                    Cc($) && _ && $.insertText(_);
                });
            };
            return bXd(A).then(async ($)=>{
                if ($) {
                    const H = $.text.trim(), G = $.uri ? rt.revive($.uri) : void 0;
                    if (H.startsWith("```bash") && N !== void 0 && G?.scheme === Ot.vscodeTerminal && G) {
                        const K = await n.terminalService.getTerminalFilePathFromResource(G);
                        let V;
                        if ($.range) {
                            const Y = $.range.selectionStartLineNumber + O9e, J = $.range.positionLineNumber + O9e;
                            Y === J ? V = `${K}:${Y}` : V = `${K}:${Y}-${J}`;
                        } else V = K;
                        l($, a($, n.terminalService.activeInstance?.title), to.terminal_selection, V), N($);
                    } else l($, o($), to.file), U($);
                } else j();
            }).catch(()=>{
                j();
            }), !0;
        }
        if (i && _) return f.preventDefault(), e.update(()=>{
            const N = ku();
            Cc(N) && N.insertText(_);
        }), S(), !0;
        if (_ !== void 0 && _.includes("@")) {
            for(let N = 0; N < _.length; N++){
                const U = _.charAt(N);
                if (U === "@") {
                    const j = _.slice(N), $ = ku();
                    if ($ === null) return !1;
                    const G = r.get().slice().reverse().find((q)=>j.startsWith(q.displayName));
                    if (G) {
                        const q = G.displayName.replace(/^@/, "");
                        if (G.selection.type === Ox.Code) {
                            const K = dTe(q, void 0, void 0, to.code, G.selection);
                            $.insertNodes([
                                K
                            ]), t.addCode({
                                ...G.selection.selectionWithoutUuid,
                                uuid: K.storedKey
                            }), N += G.displayName.length - 1;
                        } else if (G.selection.type === Ox.File) {
                            const K = dTe(q, void 0, void 0, to.file, G.selection), V = G.selection.selectionWithoutUuid;
                            if (V.uri) {
                                const Y = rt.from(V.uri), J = pR(n.modelService, n.languageService, Y);
                                K.metadata && (K.metadata.iconClasses = J);
                            }
                            $.insertNodes([
                                K
                            ]), t.addFile({
                                ...G.selection.selectionWithoutUuid,
                                uuid: K.storedKey
                            }), N += G.displayName.length - 1;
                        } else if (G.selection.type === Ox.Folder) if (t.supportsFolder) {
                            const K = dTe(q, void 0, void 0, to.folder, G.selection), V = G.selection.selectionWithoutUuid;
                            if (V.relativePath) {
                                const Y = V.relativePath, J = n.workspaceContextService.getWorkspaceFolder(rt.file(Y))?.uri ?? rt.file(Y), Q = pR(n.modelService, n.languageService, J);
                                K.metadata && (K.metadata.iconClasses = Q);
                            }
                            $.insertNodes([
                                K
                            ]), t.addFolder({
                                ...G.selection.selectionWithoutUuid,
                                uuid: K.storedKey
                            }), N += G.displayName.length - 1;
                        } else N += G.displayName.length;
                        else if (G.selection.type === Ox.GitDiff) {
                            const K = dTe(q, void 0, void 0, to.git_diff, G.selection);
                            switch($.insertNodes([
                                K
                            ]), G.selection.diff){
                                case mpe.TO_HEAD:
                                    t.insertGitDiff();
                                    break;
                                case mpe.TO_MAIN_FROM_BRANCH:
                                    t.insertDiffToMain();
                                    break;
                            }
                            N += G.displayName.length - 1;
                        } else rO(G.selection);
                    } else $.insertText("@");
                } else {
                    const j = ku();
                    if (j === null) return !1;
                    j.insertText(U);
                }
            }
            return f.preventDefault(), f.stopPropagation(), !0;
        }
        const O = Array.from(f.clipboardData?.items || []).find((N)=>N.kind === "file");
        if (O) {
            f.preventDefault();
            const N = O.getAsFile();
            if (N) {
                const U = N.name;
                return e.update(()=>{
                    const j = ku();
                    j !== null && j.insertText(U);
                }), !0;
            }
        } else if (t.supportsLink && !t.isMentionsMenuOpen() && _ !== void 0 && _.length < 2e3 && b(_)) return f.preventDefault(), e.update(()=>{
            if (!_) return;
            const N = dTe(_, void 0, void 0, to.link), U = nS(" "), j = ku();
            j !== null && (j.insertNodes([
                N,
                U
            ]), U.select(), t.insertLink({
                url: _,
                uuid: N.storedKey
            }));
        }), n.mcpWellKnownDetectionService.checkUrlAndSuggestInstallation(_, t.composerDataHandle?.data.composerId), !0;
        return S(), !1;
    }, u = e.registerCommand(u0t, (f)=>c(f), q2e), d = e.registerCommand(cLa, (f)=>(f.metaKey || f.ctrlKey) && f.shiftKey ? (f.preventDefault(), e.getRootElement() && (i = !0, n.window.document.execCommand("paste"), setTimeout(()=>{
            i = !1;
        }, 100)), !0) : !1, q2e), h = (f)=>(_, b)=>{
            if (!(_ instanceof ClipboardEvent)) return f;
            const y = _.clipboardData;
            if (!y) return !1;
            let S = "", k = null, C = null, T = !1, I = !1;
            const A = new Map;
            if (e.getEditorState().read(()=>{
                const P = (O)=>{
                    if (_Et(O)) {
                        const N = O.metadata?.selection;
                        if (vLp(N)) {
                            const U = "@" + O.getTextContent().replace(/^@/, "");
                            A.set(U, N);
                        }
                    } else Wc(O) && O.getChildren().forEach(P);
                }, M = ku();
                M && (T = !0, I = Cc(M), M.getNodes().forEach((O)=>{
                    P(O);
                }), k = Jml(e), C = qTg(e), S = M.getTextContent());
            }), !T) return !1;
            if (_.preventDefault(), k !== null && y.setData("text/html", k), C !== null && y.setData("application/x-lexical-editor", C), y.setData("text/plain", S), A.size > 0) {
                const P = Date.now();
                r.set([
                    ...r.get().filter((M)=>!A.has(M.displayName) && M.lastUsedAtUnixMs > P - SLp),
                    ...Array.from(A, ([M, O])=>({
                            displayName: M,
                            selection: O,
                            lastUsedAtUnixMs: P
                        }))
                ], void 0);
            }
            return f && I && e.update(()=>{
                const P = ku();
                Cc(P) && P.removeText();
            }), !0;
        }, p = e.registerCommand(sWt, h(!1), q2e), g = e.registerCommand(oWt, h(!0), q2e);
    return On(()=>{
        u(), d(), p(), g(), r.dispose();
    }), null;
}, nMg = (t)=>{
    const [e] = t1(), [n, i] = Wt(!1);
    let r;
    const s = ()=>{
        if (t.setRichText === void 0) return;
        let l;
        if (t.shouldFilterGhostText) {
            const c = e.getEditorState().toJSON(), u = (d)=>{
                if (d === null || typeof d != "object") return d;
                if (Array.isArray(d)) return d.map(u).filter((g)=>g !== null);
                if (d.type === "composer-ghost-text") return null;
                const p = {};
                for (const [g, f] of Object.entries(d)){
                    const _ = u(f);
                    _ !== null && (p[g] = _);
                }
                return p;
            };
            l = JSON.stringify(u(c));
        } else l = JSON.stringify(e.getEditorState());
        l !== r && (r = l, t.setRichText(l));
    }, o = e.registerTextContentListener((l)=>{
        const c = ks(()=>t.setIsTyping());
        if (c && c(l !== ""), t.setText !== void 0) {
            let d = l;
            t.shouldFilterGhostText && (d = e.getEditorState().read(()=>{
                const h = Xg(), p = (_)=>{
                    if (Au(_)) return _.getType() === "composer-ghost-text" ? "" : _.getTextContent();
                    if (V7(_)) return `
`;
                    if (Wc(_)) {
                        let b = "";
                        const y = _.getChildren();
                        for (const S of y)b += p(S);
                        return b;
                    }
                    return "";
                }, g = h.getChildren(), f = [];
                for (const _ of g)f.push(p(_));
                return f.join(`
`);
            })), t.setText?.(d), n() || i(!0);
        }
        s();
        const u = e.getRootElement();
        t.setContentHeight && u && t.setContentHeight(u.getBoundingClientRect().height);
    }), a = e.registerUpdateListener(({ dirtyElements: l, dirtyLeaves: c })=>{
        (l.size > 0 || c.size > 0) && s();
    });
    return Cn(()=>{
        const l = t.setContentHeight;
        n() && setTimeout(()=>{
            const c = e.getRootElement();
            l && c && l(c.getBoundingClientRect().height);
        });
    }), On(()=>{
        o(), a();
    }), Cn(()=>{
        const l = e.registerCommand(M6e, (c)=>t.onEscape ? (t.onEscape(c), !0) : !1, K0e);
        On(()=>{
            l();
        });
    }), null;
}, iMg = (t)=>{
    const [e] = t1(), n = t.delegate?.getRichText() || t.initText || "", [i, r] = Wt(n), [s, o] = Wt(null);
    let a;
    const l = e.registerTextContentListener((p)=>{
        const g = e.getEditorState(), f = JSON.stringify(g);
        r(f), t.delegate?.setText(p, f);
    }), c = (p)=>{
        if (p !== "") {
            if (p.startsWith("{")) try {
                e.setEditorState(e.parseEditorState(p));
                return;
            } catch (g) {
                console.error(g);
            }
            u(p);
        }
    }, u = (p)=>{
        e.update(()=>{
            const g = Xg();
            if (!g.getChildren().every((S)=>S instanceof Bst ? S.getTextContent() === "" : !1)) return;
            if (p.startsWith("{")) try {
                e.setEditorState(e.parseEditorState(p));
                return;
            } catch (S) {
                console.error(S);
            }
            const b = _2(), y = nS(p);
            b.append(y);
            for (const S of g.getChildren())S.remove();
            g.append(b), g.selectEnd();
        });
    };
    n.trim() !== "" && c(n);
    let d;
    if (Cn(()=>{
        d?.(), t.delegate && (d = t.delegate.onSubmit(()=>{
            const p = new KeyboardEvent("submit");
            t.onSubmit(p);
        }), On(d));
    }), t.delegate) {
        const p = t.delegate.onTextChange((f, _)=>{
            (_ ?? f) !== i() && u(_ ?? f);
        });
        On(p);
        const g = t.delegate.onClear((f)=>{
            if (f?.dontStealFocus === !0) {
                const _ = e.parseEditorState('{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}');
                e.setEditorState(_);
                return;
            }
            e.update(()=>{
                const _ = Xg(), b = _2();
                for (const y of _.getChildren())y.remove();
                _.append(b), _.selectEnd();
            });
        });
        On(g);
    }
    const h = ()=>{
        t.delegate?.notifyFocus();
    };
    return Xc(()=>{
        const p = e.getRootElement();
        o(p), p.addEventListener("focusin", h);
    }), Cn(()=>{
        const p = t.inputBoxDelegate, g = s();
        g && p !== a && (a?.detachTextAreaElement(g), a = p, p?.registerTextAreaElement(g, e));
    }), On(()=>{
        const p = s();
        p && p.removeEventListener("focusin", h), a?.detachTextAreaElement(p ?? void 0), a = void 0, l();
    }), null;
}, rMg = ()=>{
    const [t] = t1(), e = Gr(), n = t.registerRootListener((r, s)=>{
        s !== null && s.removeEventListener("contextmenu", i), r !== null && r.addEventListener("contextmenu", i);
    }), i = (r)=>{
        r.preventDefault(), r.stopPropagation();
        const s = e.contextMenuService, o = [
            new za("undo", "Undo", void 0, !0, ()=>{
                t.dispatchCommand(h0t, void 0);
            }),
            new za("redo", "Redo", void 0, !0, ()=>{
                t.dispatchCommand(p0t, void 0);
            }),
            new Kh,
            new za("cut", "Cut", void 0, !0, ()=>{
                e.window.document.execCommand("cut");
            }),
            new za("copy", "Copy", void 0, !0, ()=>{
                e.window.document.execCommand("copy");
            }),
            new za("paste", "Paste", void 0, !0, async ()=>{
                const a = await e.clipboardService.readText(), l = new ClipboardEvent("paste", {
                    clipboardData: new DataTransfer,
                    bubbles: !0,
                    cancelable: !0
                });
                l.clipboardData && a && l.clipboardData.setData("text/plain", a), t.dispatchCommand(u0t, l);
            }),
            new Kh,
            new za("selectAll", "Select All", void 0, !0, ()=>{
                t.update(()=>{
                    const a = ku();
                    if (Cc(a)) {
                        zCg(a);
                        const l = a.anchor.getNode();
                        if (Au(l) && l.isToken()) {
                            const c = Xg();
                            a.anchor.set(c.getKey(), 0, "element");
                        }
                    }
                });
            })
        ];
        s.showContextMenu({
            getAnchor: ()=>({
                    x: r.clientX,
                    y: r.clientY
                }),
            getActions: ()=>o,
            getKeyBinding: (a)=>{
                const c = {
                    undo: "undo",
                    redo: "redo",
                    cut: "editor.action.clipboardCutAction",
                    copy: "editor.action.clipboardCopyAction",
                    paste: "editor.action.clipboardPasteAction",
                    selectAll: "editor.action.selectAll"
                }[a.id];
                return c ? e.keybindingService.lookupKeybinding(c) : void 0;
            }
        });
    };
    return On(()=>{
        n();
    }), null;
};

}
