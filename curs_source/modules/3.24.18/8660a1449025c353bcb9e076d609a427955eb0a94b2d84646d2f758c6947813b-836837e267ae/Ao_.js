import { ro, zt } from "./LYd.js";
import { WW } from "./ipa.js";
import { c$ } from "./yBp.js";
import { $ts, WJa, sw } from "./gYa.js";
import { wzt } from "./Aeg.js";
import { $i, F_s, KDi, O$, O_, bl, dRl, et, gYt, td } from "./Ycg.js";
import { ML, mu, zUl } from "./BA.js";
import { B0, NVl, Tut, fg, q6, rD } from "./Asv.js";
import { GS0, JQt, L0v, O0v, R0v, WFi, a10, eJt, jS0, k0v, l10, mQl, o10, q0v, sQl, tge, xOn, zy0 } from "./ofv.js";
import { y2t } from "./BPv.js";
import { $fC, ACC, AkC, Bgc, Ci_, CkC, Cs_, ECC, FbC, Fgc, Gt_, H0C, HOs, MCC, Ms_, Ngc, NkC, Nr_, OCC, Or_, PSC, PfC, Ps_, Sgc, U0C, UyC, VSC, VkC, WwC, XSC, _wC, a0C, aD, agc, akC, as_, bwC, c1C, dgc, e0C, fi_, gs_, hr_, i0C, kr_, n0C, n1C, nmc, pgc, qpc, ubC, v1C, vwC, wkC, wr_, xi_, xpc, xt_, yCC, ygc, ywC, zpc } from "./gpc.js";
import { en } from "./Iwo.js";
import { hc } from "./agent_pb.js";
import { Qr } from "./aiMiscServices.js";
import { no } from "./composerDataServiceTypes.js";
import { F3n } from "./composerDiffScopeService.js";
import { Fb } from "./composerEventService.js";
import { kCn } from "./composerGitActionStatusService.js";
import { wOs } from "./diff-list-model.contract.js";
import { GZl, qZl } from "./diff-render-limits.js";
import { Do_, Lo_, Mo_, No_, h5s, nfc } from "./diff-tab-content.react.js";
import { _p } from "./empty-state.js";
import { Jv } from "./gitContextService.js";
import { db } from "./glass-clipboard-service.js";
import { _N } from "./glass-configuration-service.js";
import { vN } from "./glass-context-key-service.js";
import { bU, tQl } from "./glass-diff-service.js";
import { _Os } from "./glass-diff-virtualization-service.js";
import { Cpc } from "./glass-github-connect-nudge.js";
import { LDe, iQt } from "./glass-github-connect-service.js";
import { Odt } from "./glass-keybinding-consumer-service.js";
import { eu } from "./glass-log-service.js";
import { ul } from "./glass-notification-service.js";
import { xf } from "./glass-opener-service.js";
import { Nu } from "./glass-storage-service.js";
import { $d } from "./glass-tab-persistence-service.contract.js";
import { tg } from "./glass-toast.js";
import { F_ } from "./glass-workspace-context-service.js";
import { Axt } from "./glassContextKeys.js";
import { igc } from "./local-diff-list-model.js";
import { mo_ } from "./local-diff-list-view.react.js";
import { eg } from "./modelConfigServiceTypes.js";
import { Yn } from "./notification.js";
import { Qh } from "./reactive.js";
import { Vd } from "./storage-keys.js";
import { fie } from "./workspaceConnectionService.js";
import { Qg } from "./workspaceMetadataService.js";
import { useCallback as yC, useEffect as xPt, useMemo as lD, useRef as BCC, useState as Hdt, useSyncExternalStore as Jgc } from "./react-runtime/react/esm-index-production.js";
import { jsx as jE, Fragment as Ro_, jsxs as efc } from "./react-runtime/react/esm-jsx-runtime-production.js";
function UCC(t, e, n) {
    switch(t){
        case "lastTurn":
            return n.isLastTurnGenerating ? "No changes in this turn yet" : "No changes in the last turn";
        case "uncommitted":
            return n.isCloudAgent ? n.hasRemoteBranchOrPr ? "All changes have been pushed to the remote branch" : "No changes on this cloud agent's branch yet" : "No uncommitted changes on your local branch";
        case "allChanges":
            return e ? `No changes against ${e}` : "No changes on this branch";
        case "unstaged":
            return "No unstaged changes";
        case "staged":
            return "No staged changes";
        case "branch":
            return n.isAllCommitsSelection ? e ? `No committed changes against ${e}` : "No branch changes" : "No changes in selected commits";
        default:
            return t;
    }
}
export function tfc(t) {
    return t.prUrl ? t.isMerged ? {
        icon: "git-merge",
        label: "Merged",
        variant: "merged"
    } : t.isClosed ? {
        icon: "git-pull-request-closed",
        label: "Closed",
        variant: "closed"
    } : t.isDraft ? {
        icon: "git-pull-request-draft",
        label: "Draft",
        variant: "draft"
    } : {
        icon: "git-pull-request",
        label: "Open",
        variant: "open"
    } : t.branchName?.trim() ? {
        icon: "git-branch",
        label: "Branch",
        variant: "draft"
    } : null;
}
export function Po_({ initialFilterScope: t, initialFilterScopeRequestId: e, presentationRequest: n }) {
    const i = n?.filterScope ?? t, { workspace: r, resolvedAgentReference: s, showPrTabForPrUrl: o } = fg(), { code: a } = y2t(), l = td(s.pullRequestState), c = td(s.pullRequestStates), u = KDi(c), { repoUrls: d } = O$(s.header), h = Mo_ * a.lineHeightPx, { groupId: p, isActive: g, tabId: f } = WW(), _ = et(LDe), b = bl(iQt), y = d[0], S = yC(()=>{
        _.startGithubConnectFlow({
            source: "diff",
            githubRepo: y
        });
    }, [
        _,
        y
    ]), k = B0(), C = q6(k, (wa)=>wa.editorPanelVisible);
    PfC(r, g, {
        toastDurationMs: Cpc,
        onConnect: b ? S : void 0
    });
    const T = $i(r, bU), I = eJt(T), A = lD(()=>xOn(I), [
        I
    ]), P = I.selectedRepositoryId ?? I.activeRepositoryId, M = $i(r, eg), O = et(Qg), N = et(db), U = et(_N), j = et(vN), $ = et(eu), H = et(ul), G = et(xf), q = et(Fb), K = et(no), V = $i(r, F3n), Y = $i(r, Jv), J = $i(r, F_), Q = $i(r, $d), te = $i(r, Odt), ee = $i(r, fie), re = s.header.source === "cloud", ie = WFi({
        agentReference: s,
        statusReactive: s.header.status
    }), oe = re && ie, se = Tut(r, re ? s.header.id : void 0), le = td(ee.connectionState), ce = Or_({
        isCloudAgent: re,
        connectionState: le,
        machineReachabilityStatus: se.status
    }), ae = s.header.source === "draft", de = s.header.trackedGitRepos, he = O_("glass_all_changes_diff_scope", g), ge = O_(tQl, g), pe = Jgc(yC((wa)=>{
        const cd = de.onChange(wa);
        return ()=>cd.dispose();
    }, [
        de
    ]), yC(()=>de.value.length, [
        de
    ]), yC(()=>de.value.length, [
        de
    ])), ve = xpc({
        agentSource: s.header.source,
        trackedRepoCount: pe,
        workspaceIdentifier: s.workspaceIdentifier
    }), fe = xt_(s.header), Te = sw(O, s.header.environment.value), _e = o10({
        agentSource: s.header.source,
        remoteAuthority: Te
    }), Ce = re && !_e, { ref: Se, onPointerEnter: Pe, onPointerLeave: we, onPointerMove: Ie } = Nr_(), Me = s.composerDataHandle.composerId, De = BCC(!1), Ne = $i(r, _Os), be = $i(r, Nu), je = et(Qr), { editorPreferences: $e, setEditorPreferences: Je, sidebarExpanded: Ge, setSidebarExpanded: xe } = NVl(p, "diff"), [Oe, ct] = rD(re ? {
        key: Vd.DIFF_PANEL_FILTER_SCOPE_CLOUD,
        defaultValue: void 0,
        decode: k0v
    } : {
        key: Vd.DIFF_PANEL_FILTER_SCOPE,
        defaultValue: void 0,
        workspace: r,
        decode: k0v
    }), Ye = wkC(T), Ve = CkC({
        service: T,
        scopeSnapshots: Ye,
        modelConfigService: M,
        storageService: be,
        isActive: g,
        selectedRepositoryPath: A
    }), { unstagedSnapshot: Xe, stagedSnapshot: lt, committedSnapshot: He } = Ye, [gt, ht] = Hdt(!1), [Ae, ot] = Hdt(!1), Be = et(kCn), Ue = mQl(Me), it = Ue === void 0 ? null : Lo_.get(Ue) ?? null, qe = yC(()=>{
        Be.clearOngoingGitAction(Me);
    }, [
        Me,
        Be
    ]), pt = yC((wa)=>{
        je.trackEvent("glass.git_action.submitted", {
            action: wa,
            source: "diff_tab_header"
        });
    }, [
        je
    ]), [dt, ft] = Hdt(!1), [bt, St] = Hdt(!1), [Et, kt] = Hdt(!1), xt = Sgc({
        initialFilterScope: i,
        preferredFilterScope: Oe,
        isCloudAgent: re,
        allowAllChangesScope: he,
        hasUncommittedChanges: Ve.uncommittedCount > 0
    }), [Pt, Dt] = Hdt(xt), Vt = !!Ve.activeSubmodulePath, tn = Pt === "allChanges" && (!he || Vt) ? "uncommitted" : Pt, un = Pt === "allChanges" && he || tn === "branch" || tn === "lastTurn", kn = q0v({
        service: T,
        enabled: he && Pt === "allChanges" && !Vt
    }), oi = yC(()=>{
        Dt("branch"), ct("branch"), T.setCommittedDiffSelection({
            kind: "allCommits"
        });
    }, [
        T,
        ct
    ]), Fn = yC((wa)=>J.asRelativePath(J.resolveRelativePath(wa), !1), [
        J
    ]), Qt = hr_({
        composerDataHandle: s.composerDataHandle,
        composerDataService: K,
        composerDiffScopeService: V,
        composerEventService: q,
        logService: $,
        toWorkspaceRelativePath: Fn
    }), [Sn, $n] = Hdt(()=>ae ? !0 : c$(s.composerDataHandle)?.glassDiffPreferViewCurrentGitState ?? !1), Mn = yC(()=>{
        $n(!0), Dt("uncommitted"), ct("uncommitted"), s.composerDataHandle.setData("glassDiffPreferViewCurrentGitState", !0);
    }, [
        s.composerDataHandle,
        ct
    ]), { width: Un, isResizing: Xn, panelRef: Ti, handleProps: { onMouseDown: bi } } = ACC({
        editorPreferences: $e,
        setEditorPreferences: Je,
        direction: "left"
    }), Qn = Jgc(yC((wa)=>{
        const cd = de.onChange(wa), Og = wzt(de, wa);
        return ()=>{
            cd.dispose(), Og.dispose();
        };
    }, [
        de
    ]), yC(()=>$ts(de.value, A), [
        de,
        A
    ]), yC(()=>$ts(de.value, A), [
        de,
        A
    ])), { committedTargetBranch: ni, displayedBranchName: pn, isDisplayingCheckedOutState: yn, handleViewBranch: Ln } = v1C({
        composerId: Me,
        repositoryIdentityKey: P,
        isBranchScopeActive: Pt === "branch",
        isDraftAgent: ae,
        isViewingCurrentGitState: Sn,
        isBranchStatusPickerEligible: ve,
        isWorktreeAgentWorkspace: fe,
        associatedBranchName: Qn,
        currentWorkspaceBranchName: Ve.currentBranch,
        setIsViewingCurrentGitState: $n,
        onSelectAllCommits: oi,
        onSelectCurrentWorkspaceBranch: Mn
    });
    xPt(()=>{
        T.setCommittedTargetRefName(ni);
    }, [
        ni,
        T
    ]), xPt(()=>()=>{
            T.setCommittedTargetRefName(void 0);
        }, [
        T
    ]), xPt(()=>{
        if (ae) {
            qe(), $n(!0);
            return;
        }
        c$(s.composerDataHandle) !== void 0 && $n(!!s.composerDataHandle.data.glassDiffPreferViewCurrentGitState);
    }, [
        qe,
        ae,
        s
    ]);
    const { fileScopeMap: xi } = Ve, Ci = F_s(l?.value), En = lD(()=>R0v({
            associatedBranchName: ae ? void 0 : Qn,
            currentWorkspaceBranchName: Ve.currentBranch,
            isViewingCurrentGitState: ae || Sn
        }), [
        Qn,
        Ve.currentBranch,
        ae,
        Sn
    ]), Dn = !fe && !re && !ae && En.shouldShowCurrentGitStateCta, Si = zy0({
        agentSource: s.header.source,
        associatedBranchName: Qn,
        currentWorkspaceBranchName: Ve.currentBranch,
        isViewingCurrentGitState: Sn,
        isBranchStatusPickerEligible: ve,
        isWorktreeAgentWorkspace: fe
    }), Ui = lD(()=>WJa(de.value, A) ?? d[0], [
        de,
        A,
        d
    ]), Nn = sQl({
        associatedBranchName: Qn,
        currentBranch: Ve.currentBranch,
        preferLiveCheckout: fe || Ce || Dn || Sn
    }), ci = a10({
        contextBranch: Nn,
        associatedBranchName: Qn,
        preferAssociatedBranch: Ce
    }), Pi = zUl({
        primaryState: l,
        pullRequestStatesSnapshot: u,
        branchName: Nn,
        repoPath: A
    }), { committedBranchModel: vi, isAllCommitsSelection: Yi } = U0C({
        service: T,
        composerId: Me,
        committedTargetBranch: ni,
        filterScope: Pt,
        shouldShowGithubView: !1,
        activeSubmodulePath: Ve.activeSubmodulePath ?? void 0
    }), Bn = Ve.uncommittedCount, Tn = Ve.committedCount, Zn = Ve.effectiveFilePaths, tr = Ve.allChangesStatsByPath, hi = lD(()=>{
        const wa = JQt({
            filePaths: Zn,
            allChangesStatsByPath: tr
        });
        return {
            added: wa.additions,
            removed: wa.deletions
        };
    }, [
        Zn,
        tr
    ]), { pullRequestState: ui, isResolving: Ni, showPrChangesTab: cr, isPrChangesTabDisabled: fs, ciChecks: mi, hasPullRequest: di, showCreatePr: Mr, createPrFallbackUrl: jr, pullRequestBaseBranch: Ur, isCommittedPullRequestBasePending: Ws } = yCC({
        repoUrl: Ui,
        contextBranch: Nn,
        repoUrls: d,
        baseBranch: Ve.baseBranch,
        localUncommittedCount: Bn,
        localCommittedCount: Tn,
        isActive: g,
        isEditorPanelVisible: C,
        authoritativePullRequestSource: re ? {
            state: Pi
        } : void 0,
        loadCommittedPullRequestBase: ge
    }), jo = lD(()=>{
        const wa = "local";
        return {
            surface: "local_diff_tab",
            service: je,
            getContext: ()=>({
                    isCloudAgent: re,
                    isMultiPrEnabled: !0,
                    diffView: wa,
                    prStatus: kr_(Ci),
                    fileCount: Ci?.diffs?.length,
                    visibleUncommittedCount: Bn,
                    visibleCommittedCount: Tn,
                    isOnDefaultBranch: Ve.isOnDefaultBranch,
                    filterScope: Pt,
                    checkStatus: wr_(mi.checkStatus),
                    reviewDecision: Ci?.reviewDecision,
                    commitCount: Ci?.commitCount,
                    reviewCount: Ci?.reviewCount
                })
        };
    }, [
        je,
        mi.checkStatus,
        Ve.isOnDefaultBranch,
        Pt,
        re,
        Ci,
        Tn,
        Bn
    ]), Ia = lD(()=>{
        switch(tn){
            case "lastTurn":
                return Xe;
            case "branch":
                return He;
            case "staged":
                return lt;
            case "unstaged":
            case "uncommitted":
            case "allChanges":
                return Xe;
            default:
                return tn;
        }
    }, [
        He,
        lt,
        Xe,
        tn
    ]), ga = tn === "branch" ? "committed" : tn === "staged" ? "staged" : "unstaged", zs = lD(()=>{
        if (tn !== "lastTurn" && Vt) return Zn;
        switch(tn){
            case "lastTurn":
                return Qt.filePaths;
            case "uncommitted":
                return Zn;
            case "allChanges":
                return kn.filePaths;
            case "unstaged":
                return Xe.filePaths;
            case "staged":
                return lt.filePaths;
            case "branch":
                return He.filePaths;
            default:
                return tn;
        }
    }, [
        kn.filePaths,
        Vt,
        Qt.filePaths,
        Zn,
        Xe,
        lt,
        He,
        tn
    ]), Vs = lD(()=>wOs.orderByFileTree(zs, (wa)=>wa), [
        zs
    ]), { scope: Ra, comparisonMode: ur } = GS0(tn), wr = lD(()=>{
        if (tn === "lastTurn") return Qt.statsByPath;
        if (tn === "uncommitted") return tr;
        if (tn === "allChanges") return kn.statsByPath;
        const wa = Ra, cd = new Map;
        for (const Og of Vs){
            const Of = T.getFileEntry({
                scope: wa,
                filePath: Og
            });
            Of && cd.set(Og, {
                additions: Of.additions,
                deletions: Of.deletions
            });
        }
        return cd;
    }, [
        tn,
        kn.statsByPath,
        Ra,
        Vs,
        Qt.statsByPath,
        T,
        tr,
        Xe,
        lt,
        He
    ]), Es = lD(()=>{
        if (un) return new Map;
        if (tn === "uncommitted") return xi;
        if (tn === "staged") {
            const wa = new Map;
            for (const cd of Vs)wa.set(cd, "staged");
            return wa;
        }
        if (tn === "unstaged") {
            const wa = new Map;
            for (const cd of Vs)wa.set(cd, "unstaged");
            return wa;
        }
        return new Map;
    }, [
        un,
        tn,
        Vs,
        xi
    ]), eo = lD(()=>({
            filePaths: Vs,
            fileCount: Vs.length,
            scopeMap: Es,
            allChangesStatsByPath: tn === "uncommitted" ? tr : wr,
            scope: Ra,
            comparisonMode: ur,
            providedFileChangesByPath: tn === "lastTurn" ? Qt.providedFileChangesByPath : void 0
        }), [
        Vs,
        Es,
        tn,
        tr,
        wr,
        Ra,
        ur,
        Qt.providedFileChangesByPath
    ]), ts = lD(()=>eo.fileCount > 0 ? h5s : NkC({
            activeScope: tn,
            visibleLocalFilePaths: Zn,
            visibleLocalStatsByPath: tr,
            lastTurnFilePaths: Qt.filePaths,
            lastTurnStatsByPath: Qt.statsByPath,
            stagedFilePaths: lt.filePaths,
            getStagedStats: (wa)=>T.getFileEntry({
                    scope: "staged",
                    filePath: wa
                }),
            unstagedFilePaths: Xe.filePaths,
            getUnstagedStats: (wa)=>T.getFileEntry({
                    scope: "unstaged",
                    filePath: wa
                }),
            committedFilePaths: He.filePaths,
            getCommittedStats: (wa)=>T.getFileEntry({
                    scope: "committed",
                    filePath: wa
                })
        }), [
        He,
        eo.fileCount,
        Qt.filePaths,
        Qt.statsByPath,
        T,
        lt,
        Xe,
        tn,
        Zn,
        tr
    ]), rr = yC((wa)=>{
        if (tn === "branch") return "committed";
        if (tn === "staged") return "staged";
        if (tn === "unstaged") return "unstaged";
        const cd = xi.get(wa);
        return tn === "allChanges" && cd === void 0 ? "committed" : cd === "staged" ? "staged" : Do_;
    }, [
        tn,
        xi
    ]), Gs = Ve.localChangesStatsEpoch, Vr = lD(()=>Gs < 0 ? [] : eo.filePaths.map((wa)=>{
            const Og = eo.providedFileChangesByPath?.get(wa)?.entry ?? T.getFileEntry({
                scope: rr(wa),
                filePath: wa,
                subPath: Ve.activeSubmodulePath ?? void 0
            });
            return ubC({
                path: wa,
                status: Og?.status,
                renamedFromPath: Og?.renamedFromPath
            });
        }), [
        Ve.activeSubmodulePath,
        eo.filePaths,
        eo.providedFileChangesByPath,
        rr,
        Gs,
        T
    ]), So = MCC({
        files: Vr
    }), na = So.visiblePaths, ll = lD(()=>JQt({
            filePaths: eo.filePaths,
            allChangesStatsByPath: eo.allChangesStatsByPath
        }), [
        eo.allChangesStatsByPath,
        eo.filePaths
    ]), Ol = eo.fileCount > qZl, ia = lD(()=>{
        if (Ol) return 0;
        const wa = ll.additions + ll.deletions;
        if (wa > 0) return wa;
        const cd = Ve.activeSubmodulePath ?? void 0, Og = (Ev, Q1)=>{
            const $_ = T.getFileEntry({
                scope: Ev,
                filePath: Q1,
                subPath: cd
            });
            return ($_?.additions ?? 0) + ($_?.deletions ?? 0);
        };
        let Of = 0;
        for (const Ev of eo.filePaths)if (Of += tn === "uncommitted" ? Og("staged", Ev) + Og("unstaged", Ev) : tn === "allChanges" ? Og("committed", Ev) + Og("staged", Ev) + Og("unstaged", Ev) : Og(rr(Ev), Ev), Of > GZl) return Of;
        return Of;
    }, [
        Ve.activeSubmodulePath,
        Ol,
        tn,
        eo.filePaths,
        rr,
        ll,
        T
    ]), co = vi.selection, Mi = co.kind === "commitRange" ? `${co.oldestCommitSha}..${co.newestCommitSha}` : co.kind, vn = `${Pt}
${eo.scope}
${Ve.activeSubmodulePath ?? ""}
${A ?? ""}
${Pt === "branch" ? Mi : ""}`, [zn, _i] = Hdt(null), sr = jS0({
        fileCount: eo.fileCount,
        additions: ia,
        deletions: 0
    }), Gi = zn !== vn && sr, ko = yC(()=>{
        _i(vn);
    }, [
        vn
    ]), As = eo.fileCount === 0 || Gi, Fs = eo.scope, Qo = lD(()=>Ne.getVirtualizer({
            scope: Fs,
            subPath: Ve.activeSubmodulePath ?? void 0
        }), [
        Ve.activeSubmodulePath,
        Fs,
        Ne
    ]), hl = yC((wa)=>{
        const cd = Qo.onDidChange(wa);
        return ()=>cd.dispose();
    }, [
        Qo
    ]), lr = ro(rr), mr = lD(()=>({
            active: !0,
            scope: eo.scope,
            comparisonMode: eo.comparisonMode,
            subPath: Ve.activeSubmodulePath ?? void 0,
            filePaths: Gi ? nfc : na,
            source: Pt === "lastTurn" ? {
                kind: "provided",
                fileChangesByPath: eo.providedFileChangesByPath
            } : {
                kind: "git",
                resolveFileScope: (wa)=>lr.current(wa)
            },
            allChangesStatsByPath: eo.allChangesStatsByPath
        }), [
        Ve.activeSubmodulePath,
        na,
        eo.allChangesStatsByPath,
        eo.comparisonMode,
        eo.providedFileChangesByPath,
        eo.scope,
        Pt,
        lr,
        Gi
    ]), Bi = akC(T, Ne, mr), { snapshot: Hr, open: Ns, close: Io } = VkC(Bi), fa = yC(()=>{
        Hr.isOpen ? Io() : Ns();
    }, [
        Io,
        Hr.isOpen,
        Ns
    ]), Ls = lD(()=>Gi ? nfc : na.filter((wa)=>T.getFileEntry({
                scope: rr(wa),
                filePath: wa,
                subPath: Ve.activeSubmodulePath ?? void 0
            })?.isSubmodule !== !0), [
        Ve.activeSubmodulePath,
        na,
        rr,
        Gi,
        T
    ]), po = yC(()=>Ls.length > 0 && Ls.every((wa)=>!Qo.getCardOpenState(wa)), [
        Ls,
        Qo
    ]), ka = Jgc(hl, po), Ms = lD(()=>un ? [] : tn === "staged" ? [
            ...eo.filePaths
        ] : eo.filePaths.filter((wa)=>{
            const cd = Es.get(wa);
            return cd === "staged" || cd === "partial";
        }), [
        un,
        tn,
        eo.filePaths,
        Es
    ]), Go = lD(()=>un || tn === "staged" || tn === "unstaged" ? [] : eo.filePaths.filter((wa)=>Es.get(wa) === "partial"), [
        un,
        tn,
        eo.filePaths,
        Es
    ]), Fl = yC((wa)=>{
        const cd = fi_({
            hiddenCount: So.hiddenCount,
            visiblePaths: na
        });
        if (cd === void 0) {
            if (wa) {
                Ve.stageAll();
                return;
            }
            Ve.unstageAll();
            return;
        }
        if (wa) {
            Ve.stagePaths(cd);
            return;
        }
        Ve.unstagePaths(cd);
    }, [
        Ve,
        na,
        So.hiddenCount
    ]), Gc = tn === "uncommitted" ? "uncommitted" : eo.scope, cu = yC((wa)=>{
        T.setCommittedDiffSelection(wa);
    }, [
        T
    ]), La = n1C({
        service: T,
        filterScope: Pt,
        setFilterScope: Dt,
        onPersistFilterScope: ct,
        committedSelection: vi.selection,
        setCommittedSelection: cu,
        allowAllChangesScope: he
    }), [yl, rh] = Hdt(), Bl = yl !== void 0 && yl.repositoryIdentityKey === P ? yl.options : No_, ai = yC(()=>{
        const wa = P;
        T.getCommittedBaseBranchOptions().then((cd)=>{
            rh({
                repositoryIdentityKey: wa,
                options: cd
            });
        }).catch((cd)=>{
            $.warn("[DiffTabContent] Failed to load base branch options:", cd);
        });
    }, [
        P,
        $,
        T
    ]), Jr = lD(()=>T.getManualCommittedBaseSelections(), [
        T
    ]), Br = yC((wa, cd)=>{
        T.setManualCommittedBaseBranch(wa, cd);
    }, [
        T
    ]), { committedBaseRefOverride: oa, effectiveBaseBranchName: pl, baseBranchOptions: Tl, selectBaseBranch: Gl } = c1C({
        enabled: ge,
        repositoryIdentityKey: P,
        defaultBaseBranch: Ve.baseBranch,
        pullRequestBaseBranch: Ur,
        branchOptions: Bl,
        initialManualSelections: Jr,
        onManualSelectionChange: Br
    }), { pinnedBaseCommit: dc, isResolving: Qd } = Ngc(r, s.header), Sp = lD(()=>oa !== void 0 ? {
            kind: "branch",
            branchName: oa
        } : dc !== void 0 ? {
            kind: "pinnedCommit",
            sha: dc
        } : void 0, [
        dc,
        oa
    ]);
    xPt(()=>{
        T.setCommittedBaseRefName(Sp, {
            pending: Ws || Qd
        });
    }, [
        Sp,
        P,
        Qd,
        Ws,
        T
    ]), xPt(()=>(te.setContext(Axt.key, Fs), ()=>te.deleteContext(Axt.key)), [
        te,
        Fs
    ]);
    const Rg = lD(()=>({
            header: g,
            cta: g
        }), [
        g
    ]), bf = yC(()=>{
        Rg.cta && St((wa)=>!wa);
    }, [
        Rg.cta
    ]);
    mu("editorPanelCtaMenuRequested", bf);
    const Qp = yC(({ direction: wa })=>{
        g && na.length !== 0 && (kt(!0), Ne.getVirtualizer({
            scope: Fs,
            subPath: Ve.activeSubmodulePath ?? void 0
        }).scrollViewportBy(wa * h));
    }, [
        Ve.activeSubmodulePath,
        h,
        na,
        g,
        Fs,
        kt,
        Ne
    ]);
    mu("diffTabLineScrollRequested", Qp);
    const um = yC(({ direction: wa })=>{
        if (!g) return;
        const cd = na;
        if (cd.length === 0) return;
        kt(!0);
        const Of = Ne.getVirtualizer({
            scope: Fs,
            subPath: Ve.activeSubmodulePath ?? void 0
        }).getTopVisibleFilePath(), Ev = Of ? cd.indexOf(Of) : -1, Q1 = Math.max(0, Math.min(cd.length - 1, Ev + wa)), $_ = cd[Q1];
        $_ !== void 0 && Bi.scrollToFile($_);
    }, [
        Ve.activeSubmodulePath,
        na,
        g,
        Bi,
        Fs,
        kt,
        Ne
    ]);
    mu("diffTabScrollRequested", um), ECC({
        tabId: f,
        request: n,
        filterScope: Pt,
        currentFilePaths: na,
        isCurrentFileListSettled: tn === "lastTurn" ? Qt.isFileListSettled : tn === "allChanges" ? kn.isLoaded : tn === "uncommitted" ? !Xe.isLoading && !lt.isLoading : !Ia.isLoading,
        lastTurnFilePaths: Qt.filePaths,
        isLastTurnFileListSettled: Qt.isFileListSettled,
        allChangesDiffScopeEnabled: he,
        model: Bi,
        service: Q,
        setFilterScope: Dt,
        toWorkspaceRelativePath: Fn,
        resetFileTreeFilters: So.resetFilters,
        areFileTreeFiltersHidingFiles: So.hiddenCount > 0
    });
    const Hh = yC(()=>{
        kt(!1);
    }, []), Bg = yC(()=>{
        ht(!0);
    }, []), Qf = yC(()=>{
        ht(!1);
    }, []), af = yC(()=>{
        if (g) {
            if (Ve.manualRefresh(), A) {
                const wa = Y.getCachedCurrentBranch({
                    cwd: A
                })?.trim();
                wa && s.refreshPullRequestStateNow(A, wa);
            }
            mi.refresh();
        }
    }, [
        Ve,
        g,
        Y,
        s,
        A,
        mi.refresh
    ]), lf = yC(()=>{
        if (!g || fs) return;
        const wa = ui?.prUrl?.trim();
        wa && o(wa);
    }, [
        g,
        fs,
        ui?.prUrl,
        o
    ]);
    mu("diffTabToggleViewRequested", lf);
    const $p = yC((wa, cd)=>{
        un || (cd ? (Ve.stagePath(wa), Ne.getVirtualizer({
            scope: eo.scope,
            subPath: Ve.activeSubmodulePath ?? void 0
        }).setCardOpen({
            filePath: wa,
            open: !1,
            revealHeaderIfOutsideViewport: !0
        })) : Ve.unstagePath(wa));
    }, [
        Ve.stagePath,
        Ve.unstagePath,
        Ve.activeSubmodulePath,
        un,
        eo.scope,
        Ne
    ]), hb = yC(()=>{
        if (!g || un || na.length === 0) return;
        const Og = Ne.getVirtualizer({
            scope: Fs,
            subPath: Ve.activeSubmodulePath ?? void 0
        }).getTopVisibleFilePath();
        if (!Og) return;
        const Ev = Es.get(Og) === "staged";
        $p(Og, !Ev);
    }, [
        Ve,
        un,
        Es,
        na,
        $p,
        g,
        Fs,
        Ne
    ]);
    mu("editorPanelToggleItemSelectionRequested", hb);
    const kg = yC(()=>{
        const wa = Ne.getVirtualizer({
            scope: Fs,
            subPath: Ve.activeSubmodulePath ?? void 0
        });
        l10({
            fileCount: na.length,
            isActive: g,
            isGithubView: !1,
            topVisibleFilePath: wa.getTopVisibleFilePath(),
            getCardOpenState: (cd)=>wa.getCardOpenState(cd),
            setCardOpen: (cd)=>wa.setCardOpen(cd)
        });
    }, [
        Ve.activeSubmodulePath,
        na.length,
        g,
        Fs,
        Ne
    ]);
    mu("editorPanelToggleItemFoldRequested", kg);
    const vv = lD(()=>{
        if (!Ve.activeSubmodulePath || !Ve.submoduleCommitInfo) return;
        const { commitCount: wa } = Ve.submoduleCommitInfo;
        if (wa > 0) return `No uncommitted changes \xB7 ${wa} ${wa === 1 ? "commit" : "commits"} ahead`;
    }, [
        Ve.activeSubmodulePath,
        Ve.submoduleCommitInfo
    ]), C_ = yC((wa)=>Ve.requestDiscard(wa, !1, agc({
            fileStageState: eo.scopeMap.get(wa),
            fallbackScope: Gc
        })), [
        Ve.requestDiscard,
        Gc,
        eo.scopeMap
    ]), Eb = yC(()=>Ve.exitSubmodule(), [
        Ve
    ]), Ib = yC((wa)=>Ve.enterSubmodule(wa), [
        Ve.enterSubmodule
    ]), iy = yC((wa)=>{
        wa === "allChanges" && !he || (Dt(wa), ct(wa));
    }, [
        he,
        ct
    ]), Kc = yC(async (wa)=>(await N.writeText(wa.path), H.notify({
            severity: Yn.Info,
            message: "Copied path to clipboard",
            id: tg.copyDiffPath
        }), !0), [
        N,
        H
    ]);
    OCC({
        composerId: Me,
        initialFilterScope: t,
        initialFilterScopeRequestId: e,
        isCloudAgent: re,
        allChangesDiffScopeEnabled: he,
        workspaceFilterScopePreference: Oe,
        setFilterScope: Dt,
        hasUncommittedChanges: Ve.uncommittedCount > 0
    }), gYt(Q.onDidRequestDefaultDiffScope, ()=>{
        re && Dt(Sgc({
            initialFilterScope: t,
            preferredFilterScope: Oe,
            isCloudAgent: re,
            allowAllChangesScope: he,
            hasUncommittedChanges: Ve.uncommittedCount > 0
        }));
    }), H0C(Rg, ft, St), xPt(()=>{
        const wa = Ia.error;
        if (!wa || re && I.repositories.length === 0 && de.value.length > 0) return;
        const Og = ygc(wa) ?? "unknown", Of = A ?? "<no repo>", Ev = bwC({
            gitEnabledConfig: U.getValue("git.enabled"),
            gitMissingContextKey: j.getContextKeyValue("git.missing"),
            hasGitContextProvider: Y.hasGitContextProvider()
        }), Q1 = `[DiffTabContent] snapshot error (kind=${Og}, scope=${ga}, agentSource=${s.header.source}, repo=${Of}, ${Ev}): ${wa}`;
        Og === "notGitRepository" ? $.warn(Q1) : $.error(Q1);
    }, [
        U,
        j,
        Y,
        $,
        ga,
        Ia.error,
        s.header.source,
        A,
        re,
        de,
        I.repositories.length
    ]);
    const Fh = Pt !== "lastTurn" && vwC({
        snapshotError: Ia.error,
        visibleFileCount: eo.fileCount
    }), Cd = lD(()=>ygc(Ia.error), [
        Ia.error
    ]), Ug = lD(()=>{
        if (!(!Fh || !Cd)) return _wC(Cd);
    }, [
        Fh,
        Cd
    ]), ep = Ps_({
        isCloudAgent: re,
        repositoryCount: I.repositories.length,
        hasSnapshotError: Fh,
        snapshotErrorKind: Cd,
        workspaceConnectionState: le
    }), dg = ep && de.value.length > 0, cf = Ms_({
        isCloudAgent: re,
        repositoryCount: I.repositories.length,
        hasSnapshotError: Fh,
        snapshotErrorKind: Cd,
        machineReachabilityStatus: se.status,
        workspaceConnectionState: le
    }), wg = eo.fileCount > 0, Wh = lD(()=>{
        if (ep) switch(se.status){
            case "forbidden":
                return "You are not authorized to access this agent's changes.";
            case "private-worker":
                return "Changes are not available for self-hosted workers from this workspace.";
            default:
                return;
        }
    }, [
        ep,
        se.status
    ]), Cg = ci !== Nn ? !!Ci?.prUrl?.trim() : di, kp = Gt_({
        isCloudAgent: re,
        hasLocalCommittedChanges: Tn > 0,
        hasPullRequest: Cg
    }), Gh = Bgc(r, re ? s.header.id : null, {
        target: Fgc({
            pinnedBaseCommit: dc,
            branchName: ci,
            repoUrl: Ui || void 0
        }),
        enabled: (cf || kp) && !Qd
    }), ng = lD(()=>Gh.status === "loaded" && Gh.diffs.length > 0 ? Qh.resolved({
            branchName: ci ?? "",
            baseBranch: "",
            diffs: Gh.diffs,
            fileContentsOmitted: Gh.fileContentsOmitted
        }) : void 0, [
        Gh,
        ci
    ]), bm = xi_({
        diffs: Gh.diffs,
        prUrl: Ci?.prUrl,
        enabled: Gh.diffs.length > 0
    }), Jf = nmc(bm.visibleDiffs), ql = i0C({
        shouldUseCloudCachedDiff: cf,
        cachedDiffStatus: Gh.status,
        hasLocalDiffFiles: wg
    }), Eh = ql.showCachedBody, U_ = ywC({
        shouldUseCloudCachedDiff: Eh
    }), zy = tn === "allChanges" ? !kn.isLoaded : tn !== "lastTurn" && Ia.isLoading && !ep && eo.fileCount === 0, Bw = !re && Cd === "notGitRepository";
    gt && wg && ht(!1);
    const Uw = yC((wa, cd)=>{
        if (Ae) return;
        ot(!0);
        const Og = Ci?.prUrl ?? "<no pr>", Of = A ?? "<no repo>";
        cd().catch((Ev)=>{
            $.error(`[DiffTabContent] Pull request action failed (action=${wa}, repo=${Of}, prUrl=${Og}):`, Ev), dRl(H, wa, Ev);
        }).finally(()=>{
            ot(!1);
        });
    }, [
        Ae,
        $,
        H,
        Ci?.prUrl,
        A,
        ot
    ]), b0 = yC((wa)=>O0v({
            pullRequestActions: s.pullRequestActions,
            isCloudAgent: re,
            createPrFallbackUrl: jr,
            openerService: G,
            options: wa,
            selectedRepositoryPath: A,
            submitAgentCreatePr: Ve.pushAndCreatePrWithAgent
        }), [
        Ve.pushAndCreatePrWithAgent,
        jr,
        re,
        G,
        s.pullRequestActions,
        A
    ]), y0 = yC((wa)=>{
        De.current = !0, pt("createPr"), Uw(wa?.draft === !0 ? "create_draft_pr" : "create_pr", async ()=>{
            let cd = !1;
            try {
                cd = (await b0(wa)).waitsForAgentCompletion;
            } finally{
                cd || qe();
            }
        });
    }, [
        qe,
        b0,
        pt,
        Uw
    ]);
    xPt(()=>{
        if (!De.current || Ni || fs) return;
        const wa = ui?.prUrl?.trim();
        wa && (De.current = !1, o(wa));
    }, [
        fs,
        Ni,
        ui?.prUrl,
        o
    ]), xPt(()=>{
        const wa = en.filter(q.onDidFinishStreamChatForWorkspace, (cd)=>cd.workspaceIdentifier.id === J.getWorkspace().id)((cd)=>{
            if (cd.composerId !== Me || !cd.humanBubbleId) return;
            const Of = K.getComposerBubble(s.composerDataHandle, cd.humanBubbleId)?.simulatedMsgReason;
            if (UyC(Of) && !(!cd.isCompleted || cd.isAborted || cd.isErrored)) {
                if ((Of === hc.DIFF_TAB_PUSH || Of === hc.DIFF_TAB_COMMIT_AND_PUSH || Of === hc.DIFF_TAB_CREATE_PR || Of === hc.DIFF_TAB_FIX_MERGE_CONFLICTS) && (De.current = !0, A)) {
                    const Ev = Y.getCachedCurrentBranch({
                        cwd: A
                    })?.trim();
                    Ev && (s.startPullRequestStateBurst(A, Ev), s.refreshPullRequestStateNow(A, Ev));
                }
                (Of === hc.DIFF_TAB_CREATE_BRANCH || Of === hc.DIFF_TAB_PUSH || Of === hc.DIFF_TAB_COMMIT_AND_PUSH || Of === hc.DIFF_TAB_CREATE_PR || Of === hc.DIFF_TAB_FIX_MERGE_CONFLICTS) && T.refreshAllQuiet();
            }
        });
        return ()=>wa.dispose();
    }, [
        K,
        q,
        Me,
        Y,
        s,
        A,
        T,
        J
    ]);
    const GE = yC(()=>{
        const wa = ka;
        for (const cd of Ls)Qo.setCardOpen({
            filePath: cd,
            open: wa
        });
    }, [
        ka,
        Ls,
        Qo
    ]), _u = yC(()=>{
        !g || Ls.length === 0 || (aD(jo, {
            controlGroup: "secondary_action",
            actionSource: "keybinding",
            action: ka ? "expand_all_files" : "collapse_all_files"
        }), GE());
    }, [
        ka,
        jo,
        GE,
        g,
        Ls.length
    ]);
    mu("collapseOrExpandAllDiffsRequested", _u);
    const Rm = yC((wa)=>{
        if (Ls.length !== 0) for (const cd of Ls)Qo.setCardOpen({
            filePath: cd,
            open: wa
        });
    }, [
        Ls,
        Qo
    ]), ym = lD(()=>{
        if (Ls.length !== 0) return ka ? "Expand All" : "Collapse All";
    }, [
        ka,
        Ls.length
    ]), j_ = GE, Nv = yC(()=>{
        xe((wa)=>!wa);
    }, [
        xe
    ]), _v = lD(()=>jE(dgc, {
            disabled: As,
            disabledReason: eo.fileCount === 0 ? "No changed files to show" : void 0,
            isSidebarExpanded: Ge && !As,
            onToggleSidebar: Nv,
            side: "right"
        }), [
        eo.fileCount,
        Nv,
        Ge,
        As
    ]), Or = lD(()=>jE(dgc, {
            disabled: Gh.diffs.length === 0,
            disabledReason: Gh.diffs.length === 0 ? "No changed files to show" : void 0,
            isSidebarExpanded: Ge && Gh.diffs.length > 0,
            onToggleSidebar: Nv,
            side: "right"
        }), [
        Gh.diffs.length,
        Nv,
        Ge
    ]), qo = lD(()=>vv || UCC(tn, pl || Ve.baseBranch, {
            isCloudAgent: _e,
            hasRemoteBranchOrPr: cr,
            isAllCommitsSelection: Yi,
            isLastTurnGenerating: Qt.isDisplayingCurrentTurn
        }), [
        Ve.baseBranch,
        pl,
        _e,
        Yi,
        Qt.isDisplayingCurrentTurn,
        cr,
        vv,
        tn
    ]), Xi = Fh && Cd === "gitProviderUnavailable", ua = Pt === "lastTurn" && Qt.isInitialLoading, uu = n0C({
        hasCloudScmUnavailableMessage: !!Wh,
        isLastTurnScope: Pt === "lastTurn",
        hasLocalDiffFiles: wg,
        isInitialLoad: zy,
        isCloudAgentScmDiscoveryPending: dg,
        isDiffProviderWarmingUp: Xi,
        isWorkspaceConnected: le === "connected"
    }) || ua, im = ce === "preparing" && !cf, gi = im || ql.showLoadingPlaceholder, Zr = (cf || kp) && Gh.diffs.length > 0, vs = Zr && !!ci?.trim() && !!Ve.currentBranch?.trim() && ci !== Ve.currentBranch, Jo = ci !== Nn && Ci?.prUrl?.trim() ? Ci : ui, ac = Eh && Gh.diffs.length > 0, Pc = qpc({
        isCloudAgent: re,
        createPrTargetBranch: ci,
        pullRequestState: Jo ?? Ci,
        fallbackBaseBranch: pl || Ve.baseBranch
    }), Ed = zpc({
        showCreatePr: Mr && !Cg,
        externalCommittedChanges: Zr,
        isResolving: Ni,
        hasPullRequest: Cg,
        createPrTargetsBaseBranch: Pc
    }), wp = $fC({
        isResolving: Ni,
        localUncommittedCount: Bn,
        localCommittedCount: Tn,
        externalCommittedChanges: Zr,
        pullRequestState: Jo,
        createPrTargetsBaseBranch: Pc
    }), zm = ac ? Gh.diffs.length : Tn;
    return jE(igc.Provider, {
        value: Bi,
        children: efc("div", {
            "data-component": "diff-tab-content",
            "data-loading": gi || void 0,
            onPointerEnter: Pe,
            onPointerLeave: we,
            onPointerMove: Ie,
            ref: Se,
            ...{
                0: {
                    className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-5yr21d glass-b3r6kr glass-jbqb8w"
                },
                1: {
                    className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-5yr21d glass-b3r6kr glass-jbqb8w glass-9f619 glass-178xt8z glass-13fuv20 glass-1aeic0j"
                }
            }[!!gi << 0],
            children: [
                !gi && jE("div", {
                    className: "glass-78zum5 glass-dt5ytf glass-2lah0s glass-9f619 glass-exx8yu glass-16b7oty glass-18d9i69 glass-yab65l glass-178xt8z glass-13fuv20 glass-1aeic0j glass-so031l glass-1q0q8m5 glass-17fyfba",
                    children: jE(PSC, {
                        baseBranchControl: ge && La.selection.kind === "all-commits" ? jE(FbC, {
                            baseBranchName: pl,
                            baseBranchOptions: Tl,
                            defaultBaseBranch: Ve.baseBranch,
                            isInert: cf,
                            onRequestOptions: ai,
                            onSelectBaseBranch: Gl
                        }) : void 0,
                        displayedBranchName: pn,
                        isBranchPickerInert: Eh,
                        isScopeMenuInert: Eh,
                        isDisplayingCheckedOutState: yn,
                        onCommitCheckedChange: La.onCommitCheckedChange,
                        onSelect: La.onSelect,
                        onViewBranch: Ln,
                        renderedFilesChangedCount: Eh ? Gh.diffs.length : Zn.length,
                        renderedFilesChangedTotals: Eh ? void 0 : hi,
                        selection: La.selection,
                        stagingRowsUseRenderedStats: !!Ve.activeSubmodulePath,
                        shouldSuppressLocalLiveScopeStats: U_,
                        shouldSuppressLocalScopeStats: Eh,
                        trailing: jE(WwC, {
                            allowAgentPromptCommitActions: !ae && !Si,
                            commitActionInFlight: it,
                            commitCreatePrHasDraftSupport: L0v(s.pullRequestActions),
                            controller: Ve,
                            ctaMenuOpen: bt,
                            diffBodyExternallySourced: ac,
                            disableGitMutations: oe,
                            editorPanelAnalytics: jo,
                            headerMenuOpen: dt,
                            isCreatePrResolving: wp,
                            isPrActionLoading: Ae,
                            onAbortCommitActionLoading: qe,
                            onCommitActionStarted: pt,
                            onCommitCreatePr: y0,
                            onCtaMenuOpenChange: St,
                            onHeaderMenuOpenChange: ft,
                            onRefreshDiffs: af,
                            isFindOpen: Hr.isOpen,
                            onSearchToggle: fa,
                            onToggleAllDiffs: j_,
                            preferCreatePr: re,
                            secondaryAction: jE(XSC, {
                                authoritativePullRequestState: VSC({
                                    agentPullRequestState: Pi,
                                    contextBranchPrState: ui,
                                    isCloudAgent: re
                                }),
                                contextBranchName: Nn,
                                contextBranchPrState: ui,
                                currentBranchName: Ve.currentBranch,
                                displayedBranchName: pn,
                                editorPanelAnalytics: jo,
                                onSelect: o,
                                pullRequestEntries: s.pullRequestStates,
                                repositorySelection: I,
                                repoUrls: d,
                                trackedGitRepos: de.value
                            }),
                            externalWorkTargetsDifferentBranch: vs,
                            hasExternalCommittedWork: Zr,
                            showCreatePr: Ed,
                            areAllDiffsCollapsed: ka,
                            toggleAllDiffsLabel: ym,
                            visibleCommittedCount: zm,
                            visibleUncommittedCount: Bn
                        }),
                        trailingControl: Eh ? Or : _v
                    })
                }),
                jE("div", {
                    className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-b3r6kr",
                    children: gi ? jE(ML, {
                        label: im ? "Preparing workspace" : "Loading changes"
                    }) : Eh ? ng ? jE(Ro_, {
                        children: jE(pgc, {
                            isSidebarResizing: Xn,
                            onSidebarResizeMouseDown: bi,
                            side: "right",
                            sidebar: Ge && Gh.diffs.length > 0 ? jE(as_, {
                                diffs: bm.visibleDiffs,
                                filters: bm.chrome,
                                model: Jf
                            }) : void 0,
                            sidebarRef: Ti,
                            sidebarWidth: Un,
                            children: jE(Ci_, {
                                branchName: Qn ?? "",
                                diffModel: Jf,
                                displayedDiffs: bm.visibleDiffs,
                                disableBranchFallback: !0,
                                fallbackRepoPath: A,
                                hiddenFileCount: bm.hiddenCount,
                                onResetFileFilters: bm.resetFilters,
                                pullRequestState: ng
                            })
                        })
                    }) : Gh.status === "error" ? jE("div", {
                        className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr",
                        children: jE(_p, {
                            body: "Couldn't load this agent's changes."
                        })
                    }) : jE("div", {
                        className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-b3r6kr",
                        children: jE(gs_, {
                            activeScopeEmptyLabel: "No changes",
                            contextBranch: Nn ?? "",
                            contextBranchPrState: di ? ui : void 0,
                            onSelectPullRequest: o,
                            onSelectScope: iy,
                            pullRequestEntries: s.pullRequestStates,
                            repoUrl: Ui,
                            scopeSuggestions: h5s
                        })
                    }) : (zy || dg) && Wh ? jE(_p, {
                        body: Wh
                    }) : jE(Ro_, {
                        children: efc(pgc, {
                            isSidebarResizing: Xn,
                            onSidebarResizeMouseDown: bi,
                            side: "right",
                            sidebar: Ge && !As ? jE(AkC, {
                                controller: Ve,
                                discardScope: Gc,
                                filters: So.chrome,
                                readOnly: un,
                                diffStatsByPath: tge(eo.comparisonMode) ? eo.allChangesStatsByPath : void 0,
                                filePaths: na,
                                fallbackScope: tn === "allChanges" ? "committed" : void 0,
                                fileScopeMap: tn === "allChanges" ? xi : eo.scopeMap,
                                providedFileChangesByPath: eo.providedFileChangesByPath,
                                onFileStageChange: un ? void 0 : $p,
                                onStageAllToggle: un ? void 0 : Fl,
                                scope: eo.scope
                            }) : void 0,
                            sidebarRef: Ti,
                            sidebarWidth: Un,
                            children: [
                                Ve.activeSubmodulePath && efc("div", {
                                    className: "glass-78zum5 glass-6s0dn4 glass-pkkfsy glass-10w6t97 glass-2lah0s glass-9f619 glass-exx8yu glass-16b7oty glass-18d9i69 glass-o7x2bt glass-so031l glass-1q0q8m5 glass-17fyfba glass-fifm61 glass-19aaqeu",
                                    children: [
                                        jE("button", {
                                            onClick: Eb,
                                            type: "button",
                                            className: "glass-3nfvp2 glass-6s0dn4 glass-l56j7k glass-w4jnvo glass-1qx5ct2 glass-c342km glass-ng3xce glass-1r7ld26 glass-k4zqy5 glass-jbqb8w glass-1iuyybk glass-19aaqeu glass-7gh5u8 glass-1ypdohk glass-2lah0s glass-1717udv",
                                            children: jE(zt, {
                                                "aria-hidden": !0,
                                                name: "arrow-left",
                                                size: 12
                                            })
                                        }),
                                        jE(zt, {
                                            "aria-hidden": !0,
                                            name: "package",
                                            size: 12
                                        }),
                                        jE("span", {
                                            className: "glass-1yl5bsf glass-1wd3ewq glass-euugli glass-b3r6kr glass-lyipyv glass-uxw1ft",
                                            children: Ve.activeSubmodulePath
                                        }),
                                        jE("span", {
                                            className: "glass-3nfvp2 glass-6s0dn4 glass-1k6wstc glass-1d3mw78 glass-exx8yu glass-17v7654 glass-18d9i69 glass-1lfpczk glass-1i4c3av glass-19aaqeu glass-i07v4r glass-uxw1ft glass-2lah0s",
                                            children: "Submodule"
                                        })
                                    ]
                                }),
                                uu ? jE(ML, {
                                    label: "Loading changes"
                                }) : Ve.submoduleIsLoading ? jE(ML, {}) : Ve.submoduleError ? jE(_p, {
                                    body: Ve.submoduleError
                                }) : Pt === "lastTurn" && Qt.hasError ? jE(_p, {
                                    body: "Couldn't load last turn changes."
                                }) : Fh ? Wh ? jE(_p, {
                                    body: Wh
                                }) : Bw ? jE(a0C, {
                                    onInitCompleted: Qf,
                                    onInitStarted: Bg,
                                    service: T
                                }) : jE(_p, {
                                    body: Cd === "notGitRepository" ? "Failed to load changes" : Ug ?? "Failed to load changes"
                                }) : gt ? jE(ML, {}) : eo.fileCount === 0 ? jE(gs_, {
                                    activeScopeEmptyLabel: qo,
                                    contextBranch: Nn ?? "",
                                    contextBranchPrState: di ? ui : void 0,
                                    onSelectPullRequest: o,
                                    onSelectScope: iy,
                                    pullRequestEntries: s.pullRequestStates,
                                    repoUrl: Ui,
                                    scopeSuggestions: Ve.activeSubmodulePath ? h5s : ts
                                }) : Gi ? jE(e0C, {
                                    onLoad: ko
                                }) : na.length === 0 ? jE(HOs, {
                                    hiddenCount: So.hiddenCount,
                                    onReset: So.resetFilters
                                }) : jE("div", {
                                    className: "glass-78zum5 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-dt5ytf glass-2lwn1j glass-euugli glass-b3r6kr glass-h8yej3",
                                    children: jE(mo_, {
                                        allChangesStatsByPath: eo.allChangesStatsByPath,
                                        comparisonMode: eo.comparisonMode,
                                        diffSearchMatchSummaryByPath: Hr.matchSummaryByPath,
                                        filePaths: na,
                                        fileScopeMap: un ? void 0 : eo.scopeMap,
                                        findCommandBridgeEnabled: g,
                                        hideStageControls: un,
                                        indeterminateFilePaths: Go,
                                        isActive: g,
                                        onCopyPath: Kc,
                                        onDiscard: C_,
                                        onEnterSubmodule: Ve.activeSubmodulePath ? void 0 : Ib,
                                        onFileSelectedChange: $p,
                                        onMouseMove: Hh,
                                        onToggleAllFilesOpen: Rm,
                                        providedFileChangesByPath: eo.providedFileChangesByPath,
                                        rowHeightFactsSeedByPath: Ve.rowHeightFactsSeedByPath,
                                        scope: eo.scope,
                                        selectedFilePaths: Ms,
                                        shouldApplyKeyboardNavMinHeight: Et,
                                        subPath: Ve.activeSubmodulePath ?? void 0,
                                        submoduleCommitRanges: Ve.submoduleCommitRanges
                                    })
                                })
                            ]
                        })
                    })
                }),
                jE(Cs_, {})
            ]
        })
    });
}
export function jCC(t) {
    if (!t.hasAgentReference) return {
        kind: "loading"
    };
    if (t.hasAgentWorkspace) return {
        kind: "live"
    };
    switch(t.machineReachabilityStatus){
        case "unreachable":
            return {
                kind: "cached"
            };
        case "forbidden":
        case "private-worker":
            return {
                kind: "unavailable",
                reason: t.machineReachabilityStatus
            };
        case "loading":
        case "reachable":
        case "preparing":
            return {
                kind: "loading"
            };
        default:
            return t.machineReachabilityStatus;
    }
}

export var Ao_ = {};
Object.defineProperty(Ao_, "DiffTabContent", {
    enumerable: true,
    get: ()=>Po_
});
Object.defineProperty(Ao_, "getPrStatusMeta", {
    enumerable: true,
    get: ()=>tfc
});
