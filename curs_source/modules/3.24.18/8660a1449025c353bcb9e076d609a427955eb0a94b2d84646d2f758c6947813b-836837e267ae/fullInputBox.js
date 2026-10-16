import { sMg } from "./FullInputBox.css";
import { C5k, jZg } from "./ImagePillsRow.js";
import { E5k, GZg, Gr, J9e, Jvl, M5k, Ucs, YB, _ye, e_l, fus, gus, m0l, x5k } from "./Ycg.js";
import { nIt, tIt } from "./aiInput2.js";
import { _us } from "./api_10.js";
import { BGr } from "./composerConversationMetrics.js";
import { jKt } from "./composerDnd.js";
import { Ef, hPp } from "./constants_18.js";
import { Hn } from "./dom_2.js";
import { I5k } from "./editorStateContentEquals.js";
import { A5k } from "./fullInputBoxMentionsMount.js";
import { aMg, n_l, oMg } from "./fullInputBoxPlugins.js";
import { vot, zki } from "./genericUndoRedoElement.js";
import { Ak, FGr, Lst, Ost, Xg, bCn, g0t, lLa, m0t, mR } from "./ipa.js";
import { Lae, Y0e } from "./reactiveStorageTypes.js";
import { L2i, tYt } from "./scrollableInputBox.js";
import { Ole } from "./solidApplicationSetting.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { Cnt, Sz } from "./types_4.js";
import { g0l } from "./useInputBoxBorder.js";
import { MRn } from "./utils_26.js";
import { at, zr } from "./web.js";
import { Ea, Er, Le, wt, zu } from "./yBp.js";
import { Cn, Ee, On, Ut, V_, Wt, Xc, Zy, pi, rl, vt, xn } from "./ze.js";
var qZg, v0l, zZg, VZg, KZg;
export { KZg, VZg, qZg, v0l, zZg };
var __wakaru_D5k_initialized = false;
export function D5k() {
if (__wakaru_D5k_initialized) return;
__wakaru_D5k_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), _us(), Ak(), Hn(), zki(), Lae(), Ole(), BGr(), Ef(), jKt(), C5k(), vo(), MRn(), nIt(), sMg(), I5k(), A5k(), aMg(), Sz(), L2i(), g0l(), qZg = wt("<div><div>"), v0l = wt("<div>"), zZg = wt("<div class=ai-input-full-input-box-bottom-container>"), VZg = wt("<div><div><div>"), KZg = (t)=>{
    const e = Gr(), n = e.undoRedoService, [i] = YB(e.storageService, "composerAutocompleteHeuristicsEnabled"), s = i() === !0;
    let o;
    const [a, l] = Wt(!1), [c, u] = Wt(null), [d, h] = Wt(null);
    let p;
    On(()=>{
        p?.(), p = void 0;
    });
    const [g, f] = Wt(!1), _ = m0l(g);
    Cn(()=>{
        const te = t.undoRedoUri;
        On(()=>{
            te && n.removeElements(te);
        });
    });
    const b = vt(()=>t.isMentionsMenuOpen?.() ?? a()), y = vt(()=>{
        const te = t.setIsMentionsMenuOpen ?? l;
        return (ee)=>{
            te(ee);
        };
    }), S = vt(()=>t.inputBoxDelegate ?? new Y0e), k = {
        ...tIt(),
        namespace: "chat-input" + t.id,
        onError: (te)=>{
            console.error(te);
        },
        nodes: [
            ...tIt().nodes || []
        ]
    }, C = (te)=>(G(!1), t.triggerScrollToBottom && t.triggerScrollToBottom(), t.onSubmit?.(te)), T = vt(()=>t.images() ?? []), I = vt(()=>t.videos?.() ?? []), A = vt(()=>t.documents?.() ?? []), P = vt(()=>T().length > 0 || I().length > 0 || A().length > 0), M = ()=>b() || !d()?.getRootElement() || !Ucs(d()) ? !1 : t.onFurtherArrowUp?.() ?? !1, O = vt(()=>[
            {
                command: m0t,
                callback: (te)=>{
                    if (te.key !== "End" || te.shiftKey || te.altKey || te.ctrlKey || te.metaKey || b()) return !1;
                    const ee = d();
                    return !ee || !M5k(ee) ? !1 : (te.preventDefault(), te.stopPropagation(), !0);
                },
                priority: mR
            },
            {
                command: Lst,
                callback: (te)=>{
                    const ee = d()?.getRootElement();
                    if (!ee) return !1;
                    if (!Jvl(ee)) return !te.shiftKey && ee.querySelectorAll(".mention").length > 0 && GZg(ee, "up") ? (te.preventDefault(), te.stopPropagation(), !0) : !1;
                    if (te.shiftKey) return !1;
                    if (t.overrideArrowUp) {
                        const ie = t.overrideArrowUp(te);
                        if (ie) return ie;
                    }
                    return Ucs(d()) ? M() : (te.preventDefault(), te.stopPropagation(), d()?.update(()=>{
                        Xg().selectStart();
                    }), !0);
                },
                priority: mR
            },
            {
                command: Ost,
                callback: (te)=>{
                    const ee = d()?.getRootElement();
                    if (!ee) return !1;
                    if (!e_l(ee)) return !te.shiftKey && ee.querySelectorAll(".mention").length > 0 && GZg(ee, "down") ? (te.preventDefault(), te.stopPropagation(), !0) : !1;
                    if (te.shiftKey) return !1;
                    if (t.overrideArrowDown) {
                        const ie = t.overrideArrowDown(te);
                        if (ie) return ie;
                    }
                    return t.onFurtherArrowDown ? t.onFurtherArrowDown() : !1;
                },
                priority: mR
            },
            ...t.extraCommandListeners?.find((te)=>te.command === g0t) ? [] : [
                {
                    command: g0t,
                    callback: (te)=>!!C(te)
                }
            ],
            {
                command: lLa,
                callback: (te)=>te.shiftKey ? !1 : (t.onReset?.(), !0)
            },
            ...t.extraCommandListeners ?? []
        ]);
    Xc(()=>{
        if (o) {
            t.setContainerWidth?.(o.offsetWidth);
            const te = rl(), ee = new te.ResizeObserver((re)=>{
                for (const ie of re)t.setContainerWidth?.(ie.contentRect.width);
            });
            ee.observe(o), On(()=>ee.disconnect());
        }
    });
    const N = ()=>{
        if (t.readonly) return;
        let te = 3;
        const ee = (re = 0)=>{
            re >= te || setTimeout(()=>{
                S().focus(), S().isFocused() || ee(re + 1);
            }, 10);
        };
        ee();
    };
    Xc(()=>{
        t.autofocus && N();
    });
    let U = !1;
    const j = [];
    function $() {
        const te = j.shift();
        te && u(te);
    }
    Cn(()=>{
        const te = t.mentionIdsToDelete?.();
        if (te && te.length > 0) {
            for (const ee of te)j.push(ee);
            U || (U = !0, $());
        }
    }), Cn(V_(()=>c(), (te)=>{
        te === null && j.length > 0 ? $() : U = !1;
    }));
    const [H, G] = Wt(!1);
    let q;
    const K = vt(()=>({
            position: "relative",
            "padding-top": "0px",
            "align-items": t.isCompactMode ? "center" : "",
            cursor: t.readonly ? "default" : "text",
            gap: t.isCompactMode ? "2px" : "0px",
            display: t.isCompactMode ? "flex" : "",
            flex: t.isCompactMode ? 1 : "unset",
            "pointer-events": t.readonly ? "none" : "auto",
            "user-select": t.readonly ? "none" : "auto"
        })), V = t.bottomContent, Y = t.bottomLeftContent, J = t.bottomRightContent, Q = V || Y || J;
    return (()=>{
        var te = VZg(), ee = te.firstChild, re = ee.firstChild;
        return te.addEventListener("mouseup", ()=>{
            G(!1);
        }), te.addEventListener("mousedown", (ie)=>{
            t.onMouseDownWithinInput?.(ie), ie.target === ie.currentTarget && t.onStartDrag?.(ie);
        }), te.addEventListener("click", (ie)=>{
            t.readonly || ie.target === ie.currentTarget && !e.window.getSelection()?.toString() && S().focus();
        }), te.addEventListener("drop", (ie)=>{
            if (clearTimeout(q), G(!1), ie.defaultPrevented || ie.hardCodedStopper || _ye() || J9e()) return;
            ie.preventDefault();
            const oe = o?.querySelector(".aislash-editor-input");
            if (oe) {
                const se = new DragEvent(ie.type, ie);
                se.hardCodedStopper = !0, oe.dispatchEvent(se);
            }
        }), te.addEventListener("mouseleave", ()=>{
            G(!1);
        }), te.addEventListener("dragleave", (ie)=>{
            ie.preventDefault(), q = setTimeout(()=>{
                G(!1);
            }, 50);
        }), te.addEventListener("dragover", (ie)=>{
            _ye() || J9e() || (ie.preventDefault(), clearTimeout(q), G(!0));
        }), te.addEventListener("dragenter", (ie)=>{
            _ye() || J9e() || (ie.preventDefault(), clearTimeout(q), G(!0));
        }), zu((ie)=>{
            o = ie, t.setContainerRef?.(ie);
        }, te), Le(te, ()=>t.children, ee), Le(te, Ee(Ut, {
            get when () {
                return zr(()=>!t.isCompactMode)() && P();
            },
            get children () {
                var ie = qZg(), oe = ie.firstChild;
                return ie.style.setProperty("border-bottom", "none"), ie.style.setProperty("display", "flex"), ie.style.setProperty("flex-direction", "column"), ie.style.setProperty("gap", "2px"), oe.style.setProperty("display", "flex"), oe.style.setProperty("flex-direction", "column"), oe.style.setProperty("gap", "4px"), oe.style.setProperty("outline", "none"), oe.style.setProperty("overflow", "hidden"), Le(oe, Ee(jZg, {
                    get images () {
                        return T();
                    },
                    get videos () {
                        return I();
                    },
                    get documents () {
                        return A();
                    },
                    get onVideoClick () {
                        return t.onVideoClick;
                    },
                    get onVideoRemove () {
                        return t.onVideoRemove;
                    },
                    get onDocumentRemove () {
                        return t.onDocumentRemove;
                    },
                    get bubbleId () {
                        return t.bubbleId;
                    },
                    isModifiable: !0,
                    getSelectedImages: ()=>t.getContext().selectedImages ?? [],
                    setSelectedImages: (se)=>t.setContext("selectedImages", se)
                })), ie;
            }
        }), ee), Le(te, Ee(Ut, {
            get when () {
                return H() || t.isPaneDragging?.();
            },
            get children () {
                var ie = v0l();
                return ie.style.setProperty("position", "absolute"), ie.style.setProperty("top", "0"), ie.style.setProperty("left", "0"), ie.style.setProperty("right", "0"), ie.style.setProperty("bottom", "0"), ie.style.setProperty("background-color", "var(--vscode-editor-background)"), ie.style.setProperty("opacity", "0.5"), ie.style.setProperty("border-radius", "var(--ai-input-full-input-box-border-radius, 0.5rem)"), ie.style.setProperty("z-index", "1"), ie;
            }
        }), ee), ee.style.setProperty("display", "flex"), re.addEventListener("click", (ie)=>{
            t.readonly || ie.target === ie.currentTarget && S().focus();
        }), Le(re, Ee(tYt, Zy(t, {
            get composerDataHandle () {
                return t.composerDataHandle;
            },
            get placeholder () {
                return t.placeholder;
            },
            animateHeight: !1,
            get reactiveScrollableOptions () {
                return {
                    verticalScrollbarSize: t.shouldNarrowScrollbar ? 6 : 10
                };
            },
            ignoreTextForLastSelectionRemoval: !0,
            get minHeight () {
                return t.minHeight ?? FGr();
            },
            get maxHeight () {
                return t.maxHeight ?? hPp;
            }
        }, Cnt, ()=>t.sideEffects(), ()=>t.supports(), {
            get atMentionsDisabled () {
                return x5k(t.atMentionsDisabled);
            },
            get inputOnBottom () {
                return t.role === "bottom";
            },
            onMentionsMenuOpen: ()=>y()(!0),
            onMentionsMenuClose: ()=>y()(!1),
            get onEscape () {
                return t.onEscape;
            },
            shouldFilterGhostText: s,
            get extraPlugins () {
                return [
                    Ee(oMg, {}),
                    Ee(n_l, {
                        get text () {
                            return t.text;
                        },
                        get richText () {
                            return t.richText;
                        },
                        get force () {
                            return t.forceText;
                        },
                        get setForce () {
                            return t.setForceText;
                        },
                        onDidSetContent: ()=>{
                            t.undoRedoUri && e.undoRedoService.removeElements(t.undoRedoUri);
                        }
                    }),
                    ...t.extraPlugins ?? []
                ];
            },
            source: "chat",
            editorConfig: ()=>k,
            useArrowsForHistory: !1,
            get extraCommandListeners () {
                return O();
            },
            onFocus: ()=>{
                t.onFocus?.(), f(!0);
            },
            onBlur: ()=>{
                t.onBlur?.(), f(!1);
            },
            get initText () {
                return t.richText;
            },
            get setText () {
                return t.setText;
            },
            get setRichText () {
                return t.setRichText;
            },
            get inputBoxDelegate () {
                return S();
            },
            style: {
                padding: "0px"
            },
            get placeholderStyle () {
                return {
                    padding: "0px",
                    ...t.placeholderStyle ?? {}
                };
            },
            setEditor: (ie)=>{
                t.setEditor?.(ie), h(ie), p?.(), p = ie.registerCommand(bCn, ()=>(G(!1), !1), mR);
            },
            get mentionIdToDelete () {
                return c();
            },
            setMentionIdToDelete: u,
            get onTryDeleteContext () {
                return t.onTryDeleteContext;
            },
            externalHistoryBundle: {
                runExternalUndo: ()=>{
                    t.undoRedoUri && e.undoRedoService.undo(t.undoRedoUri);
                },
                runExternalRedo: ()=>{
                    t.undoRedoUri && e.undoRedoService.redo(t.undoRedoUri);
                },
                addToExternalUndoStack: (ie)=>{
                    const oe = d();
                    if (!oe || E5k(oe, ie)) return;
                    const se = t.undoRedoUri;
                    se && e.undoRedoService.pushElement(new vot("Lexical Operation", "lexical-op", se, ()=>{
                        const le = d();
                        le && fus(le, ie.historyState);
                    }, ()=>{
                        const le = d();
                        le && gus(le, ie.historyState);
                    }));
                }
            },
            onSubmit: (ie)=>{
                C?.(ie);
            }
        })), null), Le(re, Ee(Ut, {
            when: Q,
            get children () {
                var ie = zZg();
                return ie.style.setProperty("--ai-input-full-input-box-bottom-container-transition", "none"), Le(ie, V ?? [
                    Y,
                    (()=>{
                        var oe = v0l();
                        return xn((se)=>(se = t.isCompactMode ? 0 : 1) != null ? oe.style.setProperty("flex", se) : oe.style.removeProperty("flex")), oe;
                    })(),
                    J
                ]), xn((oe)=>{
                    var se = t.isCompactMode ? "fit-content" : "", le = t.isCompactMode ? "auto" : "";
                    return se !== oe.e && ((oe.e = se) != null ? ie.style.setProperty("--ai-input-full-input-box-bottom-container-width", se) : ie.style.removeProperty("--ai-input-full-input-box-bottom-container-width")), le !== oe.t && ((oe.t = le) != null ? ie.style.setProperty("--ai-input-full-input-box-bottom-container-margin-top", le) : ie.style.removeProperty("--ai-input-full-input-box-bottom-container-margin-top")), oe;
                }, {
                    e: void 0,
                    t: void 0
                }), ie;
            }
        }), null), xn((ie)=>{
            var oe = !!t.isCompactMode, se = {
                "--ai-input-full-input-box-border": _(),
                "--ai-input-full-input-box-margin": "10px",
                ...t.style
            }, le = `ai-input-full-input-box full-input-box ${t.class ?? ""}`, ce = t.isCompactMode ? "row" : "column", ae = t.isCompactMode ? "center" : "stretch", de = t.isCompactMode ? "0.5rem" : "0px", he = t.isCompactMode ? 1 : "unset", ge = t.isCompactMode ? "100%" : "unset", pe = K();
            return oe !== ie.e && te.classList.toggle("compact", ie.e = oe), ie.t = Ea(te, se, ie.t), le !== ie.a && Er(te, ie.a = le), ce !== ie.o && ((ie.o = ce) != null ? ee.style.setProperty("flex-direction", ce) : ee.style.removeProperty("flex-direction")), ae !== ie.i && ((ie.i = ae) != null ? ee.style.setProperty("align-items", ae) : ee.style.removeProperty("align-items")), de !== ie.n && ((ie.n = de) != null ? ee.style.setProperty("gap", de) : ee.style.removeProperty("gap")), he !== ie.s && ((ie.s = he) != null ? ee.style.setProperty("flex", he) : ee.style.removeProperty("flex")), ge !== ie.h && ((ie.h = ge) != null ? ee.style.setProperty("width", ge) : ee.style.removeProperty("width")), ie.r = Ea(re, pe, ie.r), ie;
        }, {
            e: void 0,
            t: void 0,
            a: void 0,
            o: void 0,
            i: void 0,
            n: void 0,
            s: void 0,
            h: void 0,
            r: void 0
        }), te;
    })();
};

}
