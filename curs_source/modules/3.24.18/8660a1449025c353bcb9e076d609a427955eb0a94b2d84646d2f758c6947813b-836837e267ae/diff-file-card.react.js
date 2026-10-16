import { LLn, fg, rD } from "./Asv.js";
import { y2t } from "./BPv.js";
import { ao } from "./LYd.js";
import { OPv, YPs } from "./XRv.js";
import { $i, Xtw, cSf, et, oKe, xye } from "./Ycg.js";
import { AE, S2 } from "./cursorIgnoreService.js";
import { D6n, cmc } from "./diff-card-utils.js";
import { AOs, Wen } from "./diff-card.react.js";
import { u0C } from "./diff-file-open-utils.js";
import { FBi } from "./diff-line-navigation.react.js";
import { pn_ } from "./diff-list-row-phase.js";
import { ARt } from "./diff-render-limits.js";
import { A6n } from "./diff-row-height-predict.js";
import { sn_ } from "./diff-selection-utils.js";
import { mv } from "./editor-panel-context.react.js";
import { cS, db } from "./glass-clipboard-service.js";
import { qV } from "./glass-diff-hooks.js";
import { $G, bU } from "./glass-diff-service.js";
import { MRt } from "./glass-diff-types.js";
import { PRt } from "./glass-diff-utils.js";
import { Dme, ice } from "./glass-editor-service.types.js";
import { qtc } from "./glass-image-preview.react.js";
import { Jye, ege } from "./glass-language-service.js";
import { ul, zc } from "./glass-notification-service.js";
import { $Ps, E6i } from "./glass-permalink-service.js";
import { $d } from "./glass-tab-persistence-service.contract.js";
import { cD } from "./glass-tab-persistence-service.js";
import { BS, tg } from "./glass-toast.js";
import { FPv } from "./glass-video-preview.react.js";
import { sRt } from "./glass-viewable-media.js";
import { F_, xd } from "./glass-workspace-context-service.js";
import { Gie } from "./glassAddToChat.js";
import { En_, JyC, LBi, Lpc, P6n, POs, QOs, ROs, Sn_, XyC, b0C, bn_, c0C, cn_, dn_, fn_, ln_, m0C, mn_, rn_, un_, vOs, y0C } from "./gpc.js";
import { Mt } from "./index_197.js";
import { G5, gkt } from "./ipa.js";
import { JOs } from "./local-diff-list-model.js";
import { tB } from "./mime.js";
import { F1t, HLr, O1t, ho, n2e } from "./nca.js";
import { Yn } from "./notification.js";
import { PFi, dQl, l0v, tge } from "./ofv.js";
import { Ku, Ul } from "./path_2.js";
import { ur_ } from "./provided-diff-file-change.js";
import { Vd, dv } from "./storage-keys.js";
import { xs } from "./tooltip.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { yn_ } from "./use-diff-card-controller.react.js";
import { kn_ } from "./use-diff-card-match-reveal.react.js";
import { g0C } from "./use-diff-file-contents-loader.react.js";
import { In_ } from "./use-diff-selection-add-to-chat.react.js";
import { IOs } from "./use-glass-path-file-card-icon.react.js";
import { z6 } from "./use-glass-persistent-state.react.js";
import { S2t } from "./use-glass-typography.react.js";
import { In } from "./use-service.react_2.js";
import { OBi } from "./use-vscode-line-tokenizer.react.js";
import { v5e } from "./ze.js";
import { useMemo as A8e } from "./react-runtime/react/esm-index-production.js";
import { useCallback as J$ } from "./react-runtime/react/esm-index-production.js";
import { jsx as MU } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useState as _0C } from "./react-runtime/react/esm-index-production.js";
import { jsxs as c5s } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as f0C } from "./react-runtime/react/esm-index-production.js";
import { Fragment as l5s } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useSyncExternalStore as oo_ } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as so_ } from "./react-runtime/react/esm-index-production.js";
import { useEffect as v0C } from "./react-runtime/react/esm-index-production.js";
var Pgc;
export { Pgc };
var __wakaru_S0C_initialized = false;
export function S0C() {
if (__wakaru_S0C_initialized) return;
__wakaru_S0C_initialized = true;
"use strict";
E(), Jye(), Mt(), tB(), Ul(), fn(), xd(), Gie(), S2(), dv(), OBi(), IOs(), z6(), S2t(), In(), cS(), ARt(), A6n(), qV(), $G(), MRt(), PRt(), Dme(), sRt(), zc(), BS(), $Ps(), cD(), AOs(), D6n(), pn_(), yn_(), kn_(), FBi(), sn_(), mv(), qtc(), FPv(), In_(), u0C(), JOs(), ur_(), g0C(), Pgc = f0C(function({ filePath: e, scope: n, mediaScope: i, comparisonMode: r = "scoped", allChangesStats: s, virtualizer: o, intersectionObserver: a, minHeight: l, isActive: c, isIndeterminate: u, isSelected: d, onCopyPath: h, onDiscard: p, onFileSelectedChange: g, onToggleAllFilesOpen: f, onEnterSubmodule: _, onSelectionActivated: b, onSelectionCleared: y, subPath: S, commitRange: k, hideStageControls: C, providedFileChange: T, diffSearchMatchSummary: I }) {
    const { workspace: A, inputComposer: P, resolvedAgentReference: M, selectionMenuSideChatAvailable: O, createSideChatFromSelectionMentions: N } = fg(), { code: U } = y2t(), j = et(db), $ = $i(A, ul), H = $i(A, AE), G = $i(A, bU), q = $i(A, F_), K = QOs(), V = $i(A, ege), Y = $i(A, E6i), J = $i(A, $d), Q = LBi(V), [te] = rD({
        key: Vd.EDITOR_PREFERENCES,
        defaultValue: ice,
        decode: xye
    }), ee = dQl({
        service: G,
        scope: n,
        filePath: e,
        subPath: S
    }), re = T?.entry ?? ee, oe = dQl({
        service: G,
        scope: n === "staged" ? "unstaged" : "staged",
        filePath: e,
        subPath: S
    }), se = dQl({
        service: G,
        scope: "committed",
        filePath: e,
        subPath: S
    }), le = n === "unstaged" ? re : n === "staged" ? oe : void 0, ce = n === "staged" ? re : n === "unstaged" ? oe : void 0, ae = r === "allChangesAgainstMergeBase" ? se : void 0, de = T?.entry ?? (tge(r) ? b0C({
        scopedEntry: ee,
        unstagedEntry: le,
        stagedEntry: ce,
        committedEntry: ae,
        comparisonMode: r,
        isIndeterminate: u
    }) : ee), he = A8e(()=>cn_({
            isRenamed: de?.status === "renamed",
            toPath: e,
            fromPath: de?.renamedFromPath
        }), [
        de,
        e
    ]), ge = !S && de?.isSubmodule === !0, pe = P6n(e), ve = A8e(()=>c0C({
            diffService: G,
            scope: n,
            comparisonMode: r,
            filePath: e,
            subPath: S
        }), [
        r,
        G,
        e,
        n,
        S
    ]), fe = A8e(()=>l0v({
            filePath: e,
            subPath: S
        }), [
        e,
        S
    ]), Te = Ku(e), { viewableMediaKind: _e, isBinary: Ce } = A8e(()=>{
        const Ur = v5e(e);
        return {
            viewableMediaKind: LLn(Ur),
            isBinary: de?.isBinary === !0 || Ur !== void 0
        };
    }, [
        e,
        de
    ]), Se = _e === "image", Pe = _e === "video", we = A8e(()=>gkt(e), [
        e
    ]), Ie = !Ce, Me = J$(()=>{
        _?.(e);
    }, [
        e,
        _
    ]), De = bn_({
        host: o,
        rowId: e,
        isSubmodule: ge,
        onSubmoduleTitleClick: Me,
        onToggleAllFilesOpen: f
    }), { isOpen: Ne } = De, be = tge(r) ? s?.additions ?? (le?.additions ?? 0) + (ce?.additions ?? 0) : re?.additions ?? 0, je = tge(r) ? s?.deletions ?? (le?.deletions ?? 0) + (ce?.deletions ?? 0) : re?.deletions ?? 0, [$e, Je] = _0C(()=>({
            filePath: e,
            hasLoadedProvidedLargeDiff: !1
        }));
    let Ge = $e;
    $e.filePath !== e && (Ge = {
        filePath: e,
        hasLoadedProvidedLargeDiff: !1
    }, Je(Ge));
    const xe = Ge.hasLoadedProvidedLargeDiff, Oe = J$((Ur)=>{
        if (T !== void 0) return ()=>{};
        const Ws = G.onDidChangeLargeDiffLoadOptIns(Ur);
        return ()=>Ws.dispose();
    }, [
        G,
        T
    ]), ct = A8e(()=>({
            scope: n,
            filePath: e,
            subPath: S,
            comparisonMode: r,
            allChangesStats: tge(r) ? s : void 0
        }), [
        s,
        r,
        e,
        n,
        S
    ]), Ye = J$(()=>T !== void 0 ? JyC({
            providedFileChange: T,
            userOptedIn: xe
        }) : G.classifyDiffRenderability(ct), [
        ct,
        G,
        xe,
        T
    ]), Ve = oo_(Oe, Ye), Xe = Ve.kind === "deferred" ? Ve.reason : void 0, lt = Xe !== void 0, He = Ve.kind === "unavailable", { mediaDataUrl: gt, fileContents: ht, precomputedDiffContents: Ae, precomputedDiff: ot, precomputedLineTokens: Be, loadingStatus: Ue } = m0C({
        filePath: e,
        scope: n,
        mediaScope: i,
        comparisonMode: r,
        subPath: S,
        shouldLoadText: Ie && Ne && !ge && !lt && !He,
        shouldLoadMedia: _e !== void 0 && Ce && de?.status !== "deleted",
        diffService: G,
        providedFileChange: T
    }), it = J$(()=>{
        if (T !== void 0) {
            Je((Ur)=>Ur.hasLoadedProvidedLargeDiff ? Ur : {
                    ...Ur,
                    hasLoadedProvidedLargeDiff: !0
                });
            return;
        }
        G.reportLargeDiffLoaded(ct);
    }, [
        ct,
        G,
        T
    ]), qe = J$((Ur)=>{
        Ur || K.clearPinnedRevealsForFile(e), o.setCardOpen({
            filePath: e,
            open: Ur,
            revealHeaderIfOutsideViewport: Ur ? void 0 : !0
        });
    }, [
        K,
        e,
        o
    ]), pt = Ve.kind === "renderable", dt = J$(async ()=>{
        if (ot) return F1t(ot);
        if (ht !== void 0 && !PFi({
            precomputedDiff: void 0,
            originalContent: ht.original,
            modifiedContent: ht.modified
        })) return F1t(n2e(ht.original, ht.modified, {
            computeInlineChanges: !1
        }));
        if (T !== void 0) return XyC(T);
        const Ur = await G.getDiffMaterial({
            scope: n,
            filePath: e,
            subPath: S,
            comparisonMode: r
        });
        return Ur?.diff ? F1t(Ur.diff) : void 0;
    }, [
        r,
        G,
        ht,
        e,
        ot,
        T,
        n,
        S
    ]), ft = A8e(()=>{
        if (!(T === void 0 || S)) return q.resolveRelativePath(T.absolutePath)?.toString();
    }, [
        T,
        S,
        q
    ]), bt = J$(async (Ur)=>{
        const Ws = ft ?? ve;
        if (!Ws) return;
        const jo = Ur ?? await dt();
        J.activateFileTab({
            uriString: Ws,
            ownerAgentId: M.header.id,
            selection: mn_(jo)
        });
    }, [
        ve,
        ft,
        dt,
        M.header.id,
        J
    ]), St = J$(()=>{
        bt(void 0);
    }, [
        bt
    ]), Et = J$(()=>{
        bt(De.contextMenuState?.lineNumber);
    }, [
        De.contextMenuState?.lineNumber,
        bt
    ]), kt = fn_(bt), xt = J$((Ur)=>{
        const Ws = Y.onDidChange(Ur);
        return ()=>Ws.dispose();
    }, [
        Y
    ]), Pt = J$(()=>{
        if (!(!De.contextMenuState || !ve || ge)) return Y.resolveRemoteFileUrl(ve);
    }, [
        De.contextMenuState,
        ve,
        ge,
        Y
    ]), Dt = oo_(xt, Pt), Vt = J$(()=>{
        Dt && j.writeText(Dt).then(()=>{
            $.notify({
                severity: Yn.Info,
                message: "Copied remote URL to clipboard",
                id: tg.copyRemoteUrl
            });
        });
    }, [
        j,
        $,
        Dt
    ]), tn = J$(()=>{
        if (he) {
            h({
                kind: "renamed",
                path: he.toPath,
                oldPath: he.fromPath,
                newPath: he.toPath
            });
            return;
        }
        h({
            kind: "simple",
            path: e
        });
    }, [
        he,
        e,
        h
    ]), un = J$((Ur)=>{
        if (u) {
            g?.(e, !0);
            return;
        }
        g?.(e, Ur);
    }, [
        e,
        u,
        g
    ]), kn = J$(()=>{
        p(e);
    }, [
        e,
        p
    ]), oi = J$((Ur, Ws)=>{
        const jo = Math.min(Ur.patch.range.start, Ur.patch.range.end), Ia = Math.max(Ur.patch.range.start, Ur.patch.range.end), ga = ve ? rt.parse(ve) : void 0, zs = rn_(Ur.patch.unifiedPatchText, fe);
        return cSf({
            cursorIgnoreService: H,
            fileUri: ga,
            filePath: fe,
            labelName: Te,
            startLine: jo,
            endLine: Ia,
            diffText: zs,
            payload: ga ? {
                case: "codeSelection",
                uri: Xtw(ga.toJSON()),
                range: {
                    selectionStartLineNumber: jo,
                    positionLineNumber: Ia
                },
                filePath: fe,
                fileName: Te
            } : {
                case: "gitPRDiffSelection",
                prUrl: "",
                filePath: fe,
                startLine: jo,
                endLine: Ia,
                diffContent: zs
            },
            clearSelection: Ws
        });
    }, [
        H,
        Te,
        ve,
        fe
    ]), Fn = J$((Ur, Ws)=>{
        const jo = oi(Ur, Ws);
        oKe({
            composerEventService: P.composerEventService,
            cursorIgnoreService: H,
            composerHandle: P.composerHandle
        }, jo, {
            focusOptions: {
                focusMode: "instant"
            }
        });
    }, [
        oi,
        H,
        P
    ]), Qt = J$((Ur, Ws)=>oi(Ur, Ws), [
        oi
    ]), Sn = J$((Ur, Ws)=>{
        const jo = oi(Ur, Ws);
        N(jo);
    }, [
        oi,
        N
    ]), { onDiffLineSelectionChange: $n, renderDiffSelectionActions: Mn, renderNativeDiffSelectionActions: Un, onDiffSelectionEnd: Xn } = En_({
        workspace: A,
        selectionOwnerKey: e,
        onAddToChatFromSelection: Fn,
        onAskInSideChatFromSelection: O ? Sn : void 0,
        onCollectMentionsFromSelection: Qt,
        onSelectionActivated: b,
        onSelectionCleared: y
    }), Ti = J$((Ur, Ws)=>{
        o.reportHunkShape(e, Ur.length, Ws.separators);
    }, [
        e,
        o
    ]), bi = J$((Ur)=>{
        Ur.stopPropagation();
    }, []), Qn = POs(de?.status), ni = ROs(de?.status), pn = ni ? "unified" : te.diffViewMode ?? "unified", yn = ni ? !1 : te.diffIgnoreWhitespace ?? !1, Ln = te.diffWordWrap ?? !1, xi = Ie && Ne && !ge, Ci = Ae ?? ht, En = ht !== void 0, Dn = A8e(()=>{
        if (!(!yn || He)) {
            if (ot) return HLr(ot.lines);
            if (!(!En || !Ci) && pt) return n2e(Ci.original, Ci.modified, {
                ignoreWhitespace: !0
            });
        }
    }, [
        yn,
        En,
        Ci,
        He,
        pt,
        ot
    ]), Si = A8e(()=>{
        if (!Dn) return;
        let Ur = 0, Ws = 0;
        for (const jo of Dn.lines)jo.type === "added" ? Ur++ : jo.type === "removed" && Ws++;
        return {
            additions: Ur,
            deletions: Ws
        };
    }, [
        Dn
    ]), Ui = Si?.additions ?? be, Nn = Si?.deletions ?? je, ci = Ve.kind === "renderable" ? void 0 : Ve.reason, Pi = Lpc({
        additions: be,
        deletions: je,
        status: de?.status,
        isBinary: Ce,
        isSubmodule: ge,
        byteSize: de?.byteSize,
        predictedPlaceholderReason: ci,
        classification: Ve.kind === "deferred" ? `${Ve.kind}:${Ve.reason}` : Ve.kind,
        ignoreWhitespace: yn,
        wordWrap: Ln
    });
    so_(()=>{
        o.registerFacts({
            filePath: e,
            isOpen: Ne,
            additions: Ui,
            deletions: Nn,
            status: de?.status,
            isBinary: Ce,
            byteSize: de?.byteSize,
            predictedPlaceholderReason: ci,
            lineHeightPx: U.lineHeightPx,
            widthBand: vOs(De.rootRef.current?.clientWidth ?? 0),
            comparisonMode: r,
            viewMode: pn,
            wordWrap: Ln,
            contentVersion: Pi
        });
    }, [
        Ui,
        U.lineHeightPx,
        r,
        Nn,
        de,
        de?.byteSize,
        de?.status,
        pn,
        Ln,
        e,
        Ce,
        Ne,
        ci,
        Pi,
        o
    ]);
    const vi = Dn ?? ot, Yi = !!(Ci && (Ci.original.length > 0 || Ci.modified.length > 0)), Bn = !!(yn && Dn !== void 0 && !Dn.hasChanges && Yi && Ci?.original !== Ci?.modified && !lt && !He), Tn = J$((Ur)=>{
        const Ws = De.rootRef.current;
        if (Ws) {
            if (lt) {
                const jo = Ws.querySelector(".ui-diff-card__large-diff");
                if (!jo) return;
                const Ia = Ws.getBoundingClientRect(), ga = jo.getBoundingClientRect();
                return ga.top - Ia.top + ga.height / 2;
            }
            if (Ci) return K.listRevealOffsetPxForMatch({
                filePath: e,
                cardRoot: Ws,
                diffScrollRoot: De.diffScrollRootRef.current,
                lineOneBased: Ur.lineIndex + 1,
                side: Ur.side,
                viewMode: pn,
                lineHeightPx: U.lineHeightPx,
                original: Ci.original,
                modified: Ci.modified,
                precomputedDiff: ot,
                displayEntry: de
            });
        }
    }, [
        U.lineHeightPx,
        Ci,
        K,
        pn,
        de,
        e,
        ot,
        lt
    ]);
    Sn_({
        model: K,
        rowId: e,
        isOpen: Ne,
        diffScrollRootRef: De.diffScrollRootRef,
        computeContentOffsetFromCardTopPx: Tn
    });
    const Zn = de?.status === "renamed" && En && Ci !== void 0 && Ci.original === Ci.modified, hi = Ne && !(xi && Ue === "loading" && !lt || ge && k === void 0);
    v0C(()=>(o.setCardContentReady(e, hi), ()=>o.setCardContentReady(e, !1)), [
        o,
        e,
        hi
    ]);
    const ui = A8e(()=>y0C({
            isOpen: Ne,
            currentHeightPx: o.getRowHeight(e),
            showDiff: xi,
            loadingStatus: Ue,
            deferredReason: Xe,
            cannotRenderDueToByteSize: He,
            isSubmodule: ge,
            isBinary: Ce,
            viewableMediaKind: _e,
            mediaDataUrl: gt,
            hasLoadedDiffContents: En,
            hasDiffContent: Yi,
            isRenameWithoutChanges: Zn,
            isWhitespaceOnlyChange: Bn,
            commitRange: k
        }), [
        He,
        k,
        e,
        Yi,
        En,
        gt,
        Ce,
        Se,
        Pe,
        _e,
        Ne,
        Zn,
        ge,
        Bn,
        Ue,
        xi,
        Xe,
        o
    ]);
    so_(()=>{
        o.reportPhase(e, ui);
    }, [
        e,
        ui,
        o
    ]);
    const Ni = "Discard Changes", cr = u ? "Stage Remaining Changes" : d ? "Unstage File" : "Stage File", fs = A8e(()=>MU(G5, {
            "aria-label": `Select ${Te}`,
            checked: d,
            indeterminate: u,
            onCheckedChange: un,
            size: "lg"
        }), [
        Te,
        un,
        u,
        d
    ]), mi = ge || !C ? c5s(l5s, {
        children: [
            ge ? MU("span", {
                className: "glass-3nfvp2 glass-6s0dn4 glass-1k6wstc glass-1d3mw78 glass-4p5aij glass-17v7654 glass-1j85h84 glass-1lfpczk glass-1i4c3av glass-19aaqeu glass-i07v4r glass-uxw1ft glass-2lah0s",
                children: "Submodule"
            }) : null,
            !C && n === "unstaged" && !ge && MU(xs, {
                content: MU(ao, {
                    title: Ni
                }),
                openDelay: 400,
                placement: "bottom",
                sameAxisOnly: !0,
                children: MU(ho, {
                    "aria-label": Ni,
                    icon: "arrow-u-up-left",
                    onClick: kn,
                    size: "md",
                    iconSize: "base"
                })
            }),
            !C && MU(xs, {
                content: MU(ao, {
                    title: cr
                }),
                openDelay: 400,
                placement: "bottom",
                sameAxisOnly: !0,
                children: MU("span", {
                    onClick: bi,
                    className: "glass-3nfvp2 glass-6s0dn4 glass-2lah0s",
                    children: fs
                })
            })
        ]
    }) : void 0, di = [];
    ge && di.push({
        key: "submodule",
        kind: "empty",
        children: k ? k.oldSha || k.newSha ? MU("span", {
            className: "glass-3nfvp2 glass-6s0dn4 glass-pkkfsy glass-1fk3f8j glass-fifm61 glass-1hx0egp",
            children: k.oldSha && k.newSha ? c5s(l5s, {
                children: [
                    MU("span", {
                        className: "glass-vrbanz",
                        children: k.oldSha.slice(0, 7)
                    }),
                    MU("span", {
                        children: "\u2192"
                    }),
                    MU("span", {
                        className: "glass-vrbanz",
                        children: k.newSha.slice(0, 7)
                    })
                ]
            }) : k.newSha ? c5s(l5s, {
                children: [
                    MU("span", {
                        children: "New at "
                    }),
                    MU("span", {
                        className: "glass-vrbanz",
                        children: k.newSha.slice(0, 7)
                    })
                ]
            }) : k.oldSha ? c5s(l5s, {
                children: [
                    MU("span", {
                        children: "Removed from "
                    }),
                    MU("span", {
                        className: "glass-vrbanz",
                        children: k.oldSha.slice(0, 7)
                    })
                ]
            }) : null
        }) : null : MU("span", {
            className: "glass-3nfvp2 glass-6s0dn4 glass-pkkfsy glass-1fk3f8j glass-fifm61 glass-1hx0egp",
            children: "Loading..."
        })
    }), xi && Ue === "loading" && !Yi && !lt && di.push({
        key: "loading",
        kind: "empty",
        children: "Loading diff..."
    }), xi && Ue !== "loading" && !En && !lt && !He && di.push({
        key: "load-failed",
        kind: "empty",
        children: "Failed to load diff"
    }), di.push(...un_({
        shouldRenderText: xi && Yi && !Zn && !Bn && !lt && !He,
        textDiff: Ci ? {
            coloredLineNumbers: !0,
            contextLines: K.contextLinesForEntry(de),
            expandableUnchanged: vi ? O1t(vi) : !0,
            fontSizePx: U.fontSizePx,
            gutterFontSizePx: U.gutterFontSizePx,
            ignoreWhitespace: vi ? !1 : yn,
            initialRevealedRanges: K.getPinnedRevealsForFile(e),
            initialVirtualizedLineCount: 0,
            intersectionObserver: a,
            language: we,
            lineHeightPx: U.lineHeightPx,
            lineTokenizer: Q,
            modified: Ci.modified,
            onLineRows: Ti,
            onRevealedRangesChange: (Ur)=>{
                K.reportPinnedReveals(e, Ur);
            },
            onSelectionChange: $n,
            onSelectionEnd: Xn,
            original: Ci.original,
            precomputedDiff: vi,
            precomputedLineTokens: Be,
            renderSelectionActions: Mn,
            showLineNumbers: "partial",
            showPlusMinus: !1,
            sync: !1,
            viewMode: pn,
            virtualizationGroupSize: cmc,
            wordWrap: Ln
        } : void 0,
        largeDiff: {
            visible: xi && lt && !He,
            hint: dn_(I),
            handleLoad: it
        },
        renameWithoutChangesVisible: xi && Zn,
        whitespaceOnlyVisible: xi && !Zn && Bn,
        unavailableVisible: xi && !Zn && (He || En && !Yi)
    })), !Ie && Ne && Se && gt && di.push({
        key: "image-preview",
        kind: "content",
        children: MU("div", {
            className: "glass-78zum5 glass-dt5ytf glass-1ficeh5 glass-z9ne9l glass-1ht9rhz",
            children: MU(YPs, {
                alt: e,
                imageSrc: gt,
                inlinePreview: !0,
                path: e
            })
        })
    }), !Ie && Ne && Pe && gt && di.push({
        key: "video-preview",
        kind: "content",
        children: MU("div", {
            className: "glass-78zum5 glass-dt5ytf glass-1ficeh5 glass-102oo0g",
            children: MU(OPv, {
                compactInset: !0,
                isActive: c,
                videoSrc: gt
            })
        })
    }), !Ie && Ne && Ce && (!_e || !gt) && di.push({
        key: "binary-empty",
        kind: "empty",
        children: Se && de?.status === "deleted" ? "Image deleted" : Pe && de?.status === "deleted" ? "Video deleted" : "Binary file not shown"
    });
    const jr = {
        filePath: e,
        style: l !== void 0 ? {
            minHeight: l
        } : void 0,
        dataSubmodule: ge,
        open: Ne,
        contentReady: Ne && xi && Yi && !lt && !He && !Zn && !Bn,
        collapsible: !ge,
        stickyHeader: !0,
        icon: ge ? "package" : pe,
        path: he ? {
            kind: "renamed",
            oldPath: he.fromPath,
            newPath: he.toPath
        } : {
            kind: "simple",
            path: e
        },
        additions: Ui,
        deletions: Nn,
        status: Qn,
        trailing: mi,
        afterHeader: MU(ln_, {
            ariaLabel: "Diff File Actions",
            onCopyPath: tn,
            onOpenChange: De.handleContextMenuOpenChange,
            onOpenFile: Et,
            open: De.contextMenuState?.anchor ?? null,
            secondaryCopyAction: Dt ? {
                label: "Copy Remote URL",
                handleCopy: Vt
            } : void 0
        }),
        body: di
    };
    return MU(Wen, {
        model: jr,
        onCopyPath: h,
        onDiffScrollRootChange: De.handleDiffScrollRootChange,
        onNativeSelectionChange: $n,
        onOpenChange: qe,
        onOpenPath: St,
        renderNativeSelectionActions: Un,
        onRootClick: kt,
        onRootContextMenu: De.handleDiffContextMenu,
        onRootElementChange: De.handleRootElementChange,
        onTitleClick: De.titleClickHandler,
        onTitleContextMenu: De.handleTitleContextMenu
    });
});

}
