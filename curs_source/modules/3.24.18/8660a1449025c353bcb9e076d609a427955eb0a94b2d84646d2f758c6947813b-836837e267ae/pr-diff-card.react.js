import { Ccv, rD } from "./Asv.js";
import { y2t } from "./BPv.js";
import { ao } from "./LYd.js";
import { Kie, mce } from "./PullRequestRepositoryService.js";
import { YPs } from "./XRv.js";
import { $i, et, xye } from "./Ycg.js";
import { Dn_ } from "./codeowners-facepile.react.js";
import { D6n, cmc } from "./diff-card-utils.js";
import { AOs, Wen } from "./diff-card.react.js";
import { FBi } from "./diff-line-navigation.react.js";
import { pn_ } from "./diff-list-row-phase.js";
import { ARt } from "./diff-render-limits.js";
import { A6n } from "./diff-row-height-predict.js";
import { mv } from "./editor-panel-context.react.js";
import { qRs, xRt } from "./glass-editor-constants.js";
import { Dme, ice } from "./glass-editor-service.types.js";
import { hv, t_ } from "./glass-file-service.js";
import { qtc } from "./glass-image-preview.react.js";
import { Jye, ege } from "./glass-language-service.js";
import { $d } from "./glass-tab-persistence-service.contract.js";
import { cD } from "./glass-tab-persistence-service.js";
import { F_, xd } from "./glass-workspace-context-service.js";
import { $vC, En_, GvC, HvC, JvC, LBi, Lpc, P6n, POs, ROs, Sn_, Wn_, WvC, bn_, cn_, dn_, fn_, g_C, h_C, hn_, jvC, ln_, mn_, o_C, tmc, un_, vOs } from "./gpc.js";
import { Mt } from "./index_197.js";
import { G5, e$, gkt, m2a } from "./ipa.js";
import { F1t, O1t, n2e, qOh } from "./nca.js";
import { PFi, zRs } from "./ofv.js";
import { qvC } from "./pr-diff-card-media.js";
import { WYe } from "./pr-diff-render-utils.js";
import { Vd, dv } from "./storage-keys.js";
import { xs } from "./tooltip.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { yn_ } from "./use-diff-card-controller.react.js";
import { kn_ } from "./use-diff-card-match-reveal.react.js";
import { In_ } from "./use-diff-selection-add-to-chat.react.js";
import { IOs } from "./use-glass-path-file-card-icon.react.js";
import { z6 } from "./use-glass-persistent-state.react.js";
import { S2t } from "./use-glass-typography.react.js";
import { e_C } from "./use-pr-diff-file-context.react.js";
import { a_C } from "./use-pr-diff-image-preview.react.js";
import { In } from "./use-service.react_2.js";
import { OBi } from "./use-vscode-line-tokenizer.react.js";
import { jsx as GYe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useMemo as L6n } from "./react-runtime/react/esm-index-production.js";
import { useEffect as Un_ } from "./react-runtime/react/esm-index-production.js";
import { Fragment as c_C } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useCallback as fge } from "./react-runtime/react/esm-index-production.js";
import { useState as fmc } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as jn_ } from "./react-runtime/react/esm-index-production.js";
import { memo as l_C } from "./react-runtime/react/esm-index-production.js";
import { jsxs as u_C } from "./react-runtime/react/esm-jsx-runtime-production.js";
var vmc, Gn_, _mc, bmc;
export { Gn_, _mc, bmc, vmc };
var __wakaru_qn__initialized = false;
export function qn_() {
if (__wakaru_qn__initialized) return;
__wakaru_qn__initialized = true;
"use strict";
E(), Jye(), Mt(), fn(), hv(), xd(), mce(), dv(), OBi(), IOs(), z6(), S2t(), In(), ARt(), A6n(), qRs(), Dme(), cD(), AOs(), D6n(), pn_(), yn_(), kn_(), FBi(), mv(), qtc(), In_(), Dn_(), qvC(), WYe(), e_C(), a_C(), vmc = {
    lines: [],
    hasChanges: !1
}, Gn_ = ()=>{}, _mc = new Map, bmc = l_C(function({ codeowners: e, diff: n, diffKey: i, diffListModel: r, diffSearch: s, interactionMode: o = "interactive", intersectionObserver: a, onAddSelectionToChat: l, onCollectSelectionMentions: c, onCopyPath: u, onSelectionActivated: d, onSelectionCleared: h, onToggleAllFilesOpen: p, onToggleViewed: g, ownerAgentId: f, prUrl: _, repoRootUri: b, baseSha: y, headSha: S, serviceWorkspace: k, viewStatus: C = "unviewed" }) {
    const T = Ccv(), I = o === "readOnly", A = I ? k : T?.workspace, P = I ? f : T?.resolvedAgentReference.header.id;
    if (!A || !P) throw new Error("PrDiffCard requires an editor panel context or a read-only service workspace");
    const M = $i(A, F_), O = $i(A, ege), N = $i(A, t_), U = et(Kie), j = $i(A, $d), $ = LBi(O), { code: H } = y2t(), [G] = rD({
        key: Vd.EDITOR_PREFERENCES,
        defaultValue: ice,
        decode: xye
    }), q = bn_({
        host: r,
        rowId: i,
        onToggleAllFilesOpen: p
    }), { isOpen: K } = q, V = ROs(n.status), Y = V ? "unified" : G.diffViewMode ?? "unified", J = V ? !1 : G.diffIgnoreWhitespace ?? !1, Q = G.diffWordWrap ?? !1, [te, ee] = fmc(!n.isGenerated), [re, ie] = fmc(!1), oe = L6n(()=>tmc({
            baseSha: y,
            headSha: S
        }), [
        y,
        S
    ]), se = JvC({
        diff: n,
        prUrl: _,
        baseSha: y,
        headSha: S
    }), le = L6n(()=>se.contents ? {
            ...n,
            originalContent: se.contents.originalContent,
            modifiedContent: se.contents.modifiedContent,
            precomputedDiff: void 0
        } : n, [
        n,
        se.contents
    ]);
    Un_(()=>{
        se.contents && r.setHydratedFileContext({
            sourceDiff: n,
            originalContent: se.contents.originalContent,
            modifiedContent: se.contents.modifiedContent,
            contentRevisionKey: oe.key
        });
    }, [
        oe.key,
        n,
        r,
        se.contents
    ]);
    const ce = cn_({
        isRenamed: n.status === "renamed",
        toPath: n.fullPath,
        fromPath: n.renamedFromPath ?? (n.path !== n.fullPath ? n.path : void 0)
    }), ae = ce?.toPath ?? n.fullPath ?? n.path, de = ce?.toPath ?? n.path, he = P6n(de), ge = L6n(()=>gkt(de), [
        de
    ]), pe = $vC(de) === "image", ve = le.originalContent.length > 0 || le.modifiedContent.length > 0, fe = K && te, Te = pe && K && te && n.status !== "deleted", _e = L6n(()=>b ? rt.joinPath(b, ae) : M.resolveRelativePath(ae), [
        ae,
        b,
        M
    ]), Ce = o_C({
        enabled: Te,
        status: n.status,
        fileUri: _e,
        path: ae,
        prUrl: _,
        headSha: S,
        fileService: N,
        pullRequestRepositoryService: U,
        localMaxBytes: xRt
    }), Se = Ce.status === "ready" ? Ce.objectUrl : void 0, Pe = Ce.status === "ready" || Ce.status === "empty", { diffResult: we, additions: Ie, deletions: Me, skippedDueToLineLimit: De, hasComputedDiff: Ne } = g_C(le, {
        allowLineLimitDiffComputation: re,
        enabled: fe && ve,
        ignoreWhitespace: J
    }), be = Ne ? O1t(we) : !1, je = n.status === "added" ? 999 : 3, $e = le.precomputedDiff ? qOh(le.precomputedDiff, je) : void 0, Je = n.status === "renamed" && Ie === 0 && Me === 0 && (!ve || le.originalContent === le.modifiedContent), Ge = Ne && J && ve && !Je && !De && Ie === 0 && Me === 0 && le.originalContent !== le.modifiedContent, { lineTokens: xe, shouldUse: Oe } = h_C(we, ge, $, fe && ve && Ne && !Je && !De), ct = fge(()=>{
        ee(!0);
    }, []), Ye = fge(()=>{
        ie(!0);
    }, []), Ve = fge((Sn)=>{
        r.setCardOpen({
            filePath: i,
            open: Sn,
            revealHeaderIfOutsideViewport: !Sn
        });
    }, [
        i,
        r
    ]), Xe = fge(()=>{
        g?.(i);
    }, [
        i,
        g
    ]), lt = fge((Sn)=>{
        Sn.stopPropagation();
    }, []), He = fge((Sn, $n)=>{
        l(n, Sn, $n);
    }, [
        n,
        l
    ]), gt = fge((Sn, $n)=>c(n, Sn, $n), [
        n,
        c
    ]), ht = fge((Sn, $n)=>{
        if (!T) return;
        const Mn = c(n, Sn, $n);
        T.createSideChatFromSelectionMentions(Mn);
    }, [
        n,
        T,
        c
    ]), { onDiffLineSelectionChange: Ae, renderDiffSelectionActions: ot, renderNativeDiffSelectionActions: Be, onDiffSelectionEnd: Ue } = En_({
        workspace: A,
        selectionOwnerKey: i,
        onAddToChatFromSelection: He,
        onAskInSideChatFromSelection: !I && T?.selectionMenuSideChatAvailable ? ht : void 0,
        onCollectMentionsFromSelection: gt,
        onSelectionActivated: d,
        onSelectionCleared: h
    }), it = fge((Sn, $n)=>{
        r?.reportHunkShape(i, Sn.length, $n.separators);
    }, [
        i,
        r
    ]), qe = fge(()=>{
        if (le.precomputedDiff) return F1t(le.precomputedDiff);
        if (!re && PFi({
            precomputedDiff: le.precomputedDiff,
            originalContent: le.originalContent,
            modifiedContent: le.modifiedContent
        })) return;
        const { originalContent: Sn, modifiedContent: $n } = Wn_(le.originalContent, le.modifiedContent);
        return F1t(n2e(Sn, $n, {
            computeInlineChanges: !1
        }));
    }, [
        le.modifiedContent,
        le.originalContent,
        le.precomputedDiff,
        re
    ]), pt = _e.toString(), dt = fge((Sn)=>{
        j.activateFileTab({
            uriString: pt,
            ownerAgentId: P,
            selection: mn_(Sn ?? qe())
        });
    }, [
        pt,
        P,
        qe,
        j
    ]), ft = fge((Sn)=>{
        dt(void 0);
    }, [
        dt
    ]), bt = fge(()=>{
        dt(q.contextMenuState?.lineNumber);
    }, [
        q.contextMenuState?.lineNumber,
        dt
    ]), St = fge(()=>{
        u({
            kind: ce ? "renamed" : "simple",
            path: ae,
            ...ce ? {
                oldPath: ce.fromPath,
                newPath: ce.toPath
            } : {}
        });
    }, [
        u,
        ae,
        ce
    ]), Et = fn_(dt), kt = fge((Sn)=>{
        const $n = q.rootRef.current;
        if ($n) return m2a({
            cardRoot: $n,
            diffScrollRoot: q.diffScrollRootRef.current,
            lineOneBased: Sn.lineIndex + 1,
            side: Sn.side,
            viewMode: Y,
            lineHeightPx: H.lineHeightPx,
            original: le.originalContent,
            modified: le.modifiedContent,
            precomputedDiff: le.precomputedDiff,
            contextLines: je,
            expandableUnchanged: le.precomputedDiff ? O1t(le.precomputedDiff) : !0,
            revealedRanges: r.getPinnedRevealsForFile(i)
        });
    }, [
        H.lineHeightPx,
        je,
        le.modifiedContent,
        le.originalContent,
        le.precomputedDiff,
        i,
        r,
        Y
    ]);
    Sn_({
        model: r,
        rowId: i,
        isOpen: K,
        diffScrollRootRef: q.diffScrollRootRef,
        computeContentOffsetFromCardTopPx: kt
    });
    const xt = POs(n.status), Pt = C === "viewed", Dt = L6n(()=>GYe(G5, {
            "aria-label": Pt ? "Mark file as not viewed" : "Mark file as viewed",
            checked: Pt,
            onCheckedChange: Xe,
            size: "lg"
        }), [
        Xe,
        Pt
    ]), Vt = g !== void 0 ? u_C(c_C, {
        children: [
            C === "changed" ? GYe(e$, {
                pill: !0,
                size: "sm",
                variant: "warn",
                children: "Recently changed"
            }) : null,
            GYe(xs, {
                content: GYe(ao, {
                    title: Pt ? "Mark file as not viewed" : "Mark as viewed"
                }),
                openDelay: 400,
                placement: "bottom",
                sameAxisOnly: !0,
                children: GYe("span", {
                    onClick: lt,
                    className: "glass-3nfvp2 glass-6s0dn4 glass-2lah0s",
                    children: Dt
                })
            })
        ]
    }) : void 0, tn = De ? "skippedDueToLineLimit" : void 0, un = Lpc({
        additions: Ie,
        deletions: Me,
        status: n.status,
        isBinary: pe,
        isSubmodule: !1,
        byteSize: void 0,
        predictedPlaceholderReason: tn,
        classification: De ? "deferred:lineLimit" : "renderable",
        ignoreWhitespace: J,
        wordWrap: Q
    });
    jn_(()=>{
        r.registerFacts(i, {
            isOpen: K,
            additions: Ie,
            deletions: Me,
            status: n.status,
            isBinary: pe,
            byteSize: void 0,
            predictedPlaceholderReason: tn,
            lineHeightPx: H.lineHeightPx,
            widthBand: vOs(q.rootRef.current?.clientWidth ?? 0),
            comparisonMode: "scoped",
            viewMode: Y,
            wordWrap: Q,
            contentVersion: un
        });
    }, [
        Ie,
        H.lineHeightPx,
        Me,
        n.status,
        i,
        r,
        Y,
        Q,
        pe,
        K,
        tn,
        un
    ]);
    const kn = L6n(()=>pe ? HvC({
            isOpen: K,
            hasPreview: Se !== void 0
        }) : hn_({
            isOpen: K,
            currentHeightPx: r.getRowHeightForId(i),
            showDiff: fe,
            isGeneratedPlaceholderVisible: K && !te,
            skippedDueToLineLimit: De,
            hasDiffContent: ve,
            isRenameWithoutChanges: Je,
            isWhitespaceOnlyChange: Ge
        }), [
        i,
        r,
        te,
        ve,
        pe,
        K,
        Je,
        Ge,
        Se,
        fe,
        De
    ]);
    jn_(()=>{
        r.reportPhase(i, kn);
    }, [
        i,
        r,
        kn
    ]);
    const oi = !ve && !re && zRs(n.additions, n.deletions), Fn = un_({
        generated: {
            visible: K && !te && !pe,
            handleLoad: ct
        },
        shouldRenderText: !pe && fe && ve && !Je && !Ge && !De,
        textDiff: {
            coloredLineNumbers: !0,
            contextLines: je,
            expandableUnchanged: be,
            fontSizePx: H.fontSizePx,
            initialRevealedRanges: r?.getPinnedRevealsForFile(i),
            gutterFontSizePx: H.gutterFontSizePx,
            intersectionObserver: a,
            language: ge,
            lineTokenizer: $,
            lineHeightPx: H.lineHeightPx,
            modified: le.modifiedContent,
            onRequestExpandUnchanged: se.onRequestExpandUnchanged,
            onLineRows: it,
            onRevealedRangesChange: (Sn)=>{
                r?.reportPinnedReveals(i, Sn);
            },
            onSelectionChange: I ? void 0 : Ae,
            onSelectionEnd: I ? void 0 : Ue,
            original: le.originalContent,
            precomputedDiff: we,
            precomputedLineTokens: Oe ? xe : void 0,
            renderSelectionActions: I ? void 0 : ot,
            showLineNumbers: "partial",
            showPlusMinus: !1,
            sync: !1,
            unloadedUnchangedEdges: $e,
            unloadedUnchangedFetchState: se.fetchState,
            viewMode: Y,
            initialVirtualizedLineCount: 0,
            virtualizationGroupSize: cmc,
            wordWrap: Q
        },
        largeDiff: {
            visible: !pe && fe && (De || oi),
            hint: dn_(s.matchSummary),
            handleLoad: Ye
        },
        renameWithoutChangesVisible: !pe && fe && Je,
        whitespaceOnlyVisible: !pe && fe && Ge,
        unavailableVisible: WvC({
            showDiff: fe,
            hasDiffContent: ve,
            isRenameWithoutChanges: Je,
            withheldLargeDiff: oi,
            isImage: pe
        })
    });
    pe && K && te && Se && Fn.push({
        key: "image-preview",
        kind: "content",
        children: GYe("div", {
            className: "glass-78zum5 glass-dt5ytf glass-1ficeh5 glass-z9ne9l glass-1ht9rhz",
            children: GYe(YPs, {
                alt: ae,
                imageSrc: Se,
                inlinePreview: !0,
                path: ae
            })
        })
    }), pe && K && te && !Se && Pe && Fn.push({
        key: "image-empty",
        kind: "empty",
        children: GvC(n.status)
    });
    const Qt = {
        filePath: ae,
        className: "pr-diff-card",
        open: K,
        stickyHeader: !0,
        icon: he,
        path: ce ? {
            kind: "renamed",
            oldPath: ce.fromPath,
            newPath: ce.toPath
        } : {
            kind: "simple",
            path: n.path
        },
        additions: n.additions,
        deletions: n.deletions,
        status: xt,
        trailing: Vt,
        rightMeta: e && e.length > 0 ? GYe(jvC, {
            owners: e,
            prUrl: _
        }) : void 0,
        afterHeader: I ? void 0 : GYe(ln_, {
            ariaLabel: "PR Diff File Actions",
            onCopyPath: St,
            onOpenChange: q.handleContextMenuOpenChange,
            onOpenFile: bt,
            open: q.contextMenuState?.anchor ?? null
        }),
        body: Fn
    };
    return GYe(Wen, {
        model: Qt,
        onCopyPath: u,
        onDiffScrollRootChange: q.handleDiffScrollRootChange,
        onNativeSelectionChange: I ? Gn_ : Ae,
        onOpenChange: Ve,
        onOpenPath: I ? void 0 : ft,
        renderNativeSelectionActions: I ? void 0 : Be,
        onRootClick: I ? void 0 : Et,
        onRootContextMenu: I ? void 0 : q.handleDiffContextMenu,
        onRootElementChange: q.handleRootElementChange,
        onTitleClick: q.titleClickHandler,
        onTitleContextMenu: I ? void 0 : q.handleTitleContextMenu
    });
});

}
