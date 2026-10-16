import { DKs } from "./De_3.js";
import { KKv, XKv, YKv, zKv } from "./ECo.js";
import { Se, cn } from "./HVr.js";
import { koe } from "./ImageUtil.js";
import { DFn } from "./agentBranchAffinity.js";
import { bq } from "./agent_host_pb.js";
import { ca, la } from "./aiMiscServices.js";
import { DC, a8e } from "./cgh.js";
import { HFn, TXi } from "./checkoutProviderService.js";
import { Xy } from "./composer.js";
import { loe } from "./composerChatServiceInterface.js";
import { Wf } from "./composerData.js";
import { nl } from "./composerDataServiceTypes.js";
import { Jm } from "./composer_pb.js";
import { nf } from "./environment.js";
import { Fi } from "./files.js";
import { kk, r0 } from "./gitContextService.js";
import { lCh } from "./gitFailurePatterns.js";
import { Fl } from "./host.js";
import { i0 } from "./modelConfigServiceTypes.js";
import { li } from "./network.js";
import { di, ji } from "./notification.js";
import { fu } from "./pathService.js";
import { K3 } from "./pathUtils.js";
import { Xl, ba } from "./path_2.js";
import { rp } from "./qIc.js";
import { Ya } from "./quickInput.js";
import { N1, gh } from "./reactive.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { dT, l0 } from "./scm.js";
import { iL } from "./selectedContextData.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
import { b1 } from "./utils_16.js";
import { ci } from "./workspace.js";
import { U0, Yv } from "./workspaceCollectionService.js";
import { XPe } from "./workspaceRefHelpers.js";
function VTo(e) {
    switch(e.kind){
        case "ineligible":
            return !1;
        case "eligible":
            return e.offered;
        default:
            return e;
    }
}
function SIh(e) {
    return {
        phase: e.phase,
        agentBranchExistsLocally: e.agentBranchExistsLocally,
        hasRepoLabel: e.copy?.repoLabel !== void 0,
        hasCustomTitle: e.copy?.title !== void 0,
        hasCustomDescription: e.copy?.description !== void 0,
        respectDontAskAgain: e.respectDontAskAgain,
        allowAncestorShortCircuit: e.allowAncestorShortCircuit,
        explicitTarget: e.explicitTarget,
        offeredMoveToCloud: VTo(e.moveToCloud)
    };
}
function kIh(e, t) {
    e.trackEvent("glass.branch_mismatch_tray.shown", SIh(t));
}
function NCt(e, t, n, i) {
    e.trackEvent("glass.branch_mismatch_tray.action", {
        ...SIh(n),
        action: t,
        ...i !== void 0 ? {
            conflictResolution: i
        } : {}
    });
}
async function vt_({ branchAncestryCache: e, gitContextService: t, normalizedAgentBranch: n, repoPath: i }) {
    const r = e.value?.agentBranchExistsLocally;
    return r !== void 0 ? r : i !== void 0 ? await wIh({
        gitContextService: t,
        normalizedBranch: n,
        repoPath: i
    }) ?? !0 : !0;
}
function _t_(e) {
    const t = e instanceof Error ? e.message : String(e);
    return t.includes("Needed a single revision") || t.includes("not a valid object name") || t.includes("unknown revision or path not in the working tree") || t.includes("ambiguous argument");
}
async function wIh({ gitContextService: e, normalizedBranch: t, repoPath: n }) {
    if (n === void 0 || t === "") return !1;
    try {
        return await e.resolveGitRevision({
            cwd: n,
            revision: `refs/heads/${t}`,
            verify: !0
        }), !0;
    } catch (i) {
        return _t_(i) ? !1 : void 0;
    }
}
async function CIh(e) {
    const t = e.workspace.value;
    if (t !== void 0) return t;
    try {
        return await a8e(e, U0.Git, xIh);
    } catch  {
        return;
    }
}
function TIh(e, t) {
    return DC(DKs({
        repoPath: t,
        trackedGitRepos: e.data.trackedGitRepos
    })?.branchName);
}
async function EIh({ loadedAgent: e, branchMismatchReactive: t, workspace: n, copy: i, explicitTarget: r, moveToCloud: s }) {
    const o = e.composerDataHandle.data.workspaceIdentifier, a = n.instantiationService.invokeFunction((T)=>T.get(l0)), c = r?.repoPath.trim() || (o && rp(o) ? a.getRepository(o.uri)?.provider.rootUri?.fsPath : void 0), l = DC(r?.branchName) ?? TIh(e.composerDataHandle, c);
    if (!l || !c) throw new Error("This agent is not associated with a branch yet.");
    const { analyticsService: u, checkoutProviderService: h, gitContextService: p } = n.instantiationService.invokeFunction((T)=>({
            analyticsService: T.get(ca),
            checkoutProviderService: T.get(HFn),
            gitContextService: T.get(kk)
        })), g = DC(c ? p.getCachedCurrentBranch({
        cwd: c
    }) : p.getCachedCurrentBranch()) ?? "", f = jTo(i, r?.repoPath), v = (T)=>{
        t.set({
            currentBranch: g,
            agentBranch: l,
            agentBranchExistsLocally: !0,
            phase: "checking-out",
            checkingOutOperation: T,
            copy: f,
            moveToCloud: s,
            dismiss: ()=>{},
            resolve: ()=>{}
        });
    };
    v("checkout");
    const b = await wIh({
        gitContextService: p,
        normalizedBranch: l,
        repoPath: c
    }) ?? !1;
    let y = !1;
    try {
        await h.checkout({
            resolveConflict: ()=>new Promise((T)=>{
                    const E = {
                        agentBranchExistsLocally: b,
                        allowAncestorShortCircuit: !1,
                        copy: f,
                        explicitTarget: r !== void 0,
                        moveToCloud: s,
                        phase: "conflict",
                        respectDontAskAgain: !1
                    };
                    kIh(u, E);
                    const A = ()=>{
                        NCt(u, "conflict_cancel", E, "abort"), t.set(null), T("abort");
                    };
                    t.set({
                        currentBranch: g,
                        agentBranch: l,
                        agentBranchExistsLocally: b,
                        phase: "conflict",
                        copy: f,
                        moveToCloud: s,
                        dismiss: A,
                        resolve: ()=>{},
                        conflictResolve: (R)=>{
                            if (!(R === "cloud" && !VTo(s))) {
                                if (NCt(u, R === "abort" ? "conflict_cancel" : R === "cloud" ? "move_to_cloud" : "conflict_continue", E, R), R === "cloud") {
                                    y = !0, t.set(null), T("abort");
                                    return;
                                }
                                R === "abort" ? t.set(null) : v(R), T(R);
                            }
                        }
                    });
                })
        }, l, b ? {
            localOnly: !0
        } : void 0);
    } catch (T) {
        if (y) return {
            status: "movedToCloud"
        };
        const E = T instanceof Error ? T.message : String(T), A = bt_(E), { notificationService: R, structuredLogService: D } = n.instantiationService.invokeFunction((N)=>({
                notificationService: N.get(di),
                structuredLogService: N.get(Xh)
            })), P = yt_(A, l);
        throw P !== void 0 && R.error(P), A.category !== "user_aborted" && D.error("git", `checkoutAssociatedBranch: ${A.category}`, void 0, {
            category: A.category,
            localOnly: b,
            branchExistsLocally: b,
            hasRepoPath: c !== void 0,
            source: "checkoutAssociatedBranchWithTrayConflictResolution"
        }), T;
    } finally{
        t.set(null);
    }
    return y ? {
        status: "movedToCloud"
    } : {
        status: "checkedOut"
    };
}
function bt_(e) {
    if (e === "Aborting checkout") return {
        category: "user_aborted"
    };
    const t = XKv(e);
    return t !== void 0 ? {
        category: "worktree_conflict",
        worktreePath: t
    } : zKv(e) ? {
        category: "remote_not_found"
    } : KKv(e) ? {
        category: "diverged_no_ff"
    } : YKv(e) ? {
        category: "dirty_working_tree"
    } : {
        category: "unknown"
    };
}
function yt_(e, t) {
    switch(e.category){
        case "user_aborted":
            return;
        case "worktree_conflict":
            return `Branch "${t}" is already checked out in another worktree at ${e.worktreePath}.`;
        case "remote_not_found":
            return `Branch "${t}" does not exist on the origin remote.`;
        case "diverged_no_ff":
            return `Branch "${t}" has diverged from origin and cannot be fast-forwarded.`;
        case "dirty_working_tree":
        case "unknown":
            return `Failed to checkout branch "${t}".`;
    }
}
function St_(e) {
    const t = e?.trim();
    if (!t) return;
    const n = Xl(t);
    return n.length > 0 ? n : t;
}
function jTo(e, t) {
    const n = St_(t);
    return n ? {
        ...e,
        repoLabel: e?.repoLabel ?? n
    } : e;
}
function kt_(e) {
    switch(e.status){
        case "checkedOut":
            return {
                success: !0,
                status: "checked-out"
            };
        case "movedToCloud":
            return {
                success: !0,
                status: "move-to-cloud"
            };
        default:
            return e;
    }
}
function wt_(e) {
    switch(e.kind){
        case "ineligible":
            return e;
        case "eligible":
            return {
                kind: "eligible",
                offered: !1
            };
        default:
            return e;
    }
}
async function Ct_(e, t, n, i, r, s) {
    const o = e.composerDataHandle.data.workspaceIdentifier, { scmService: a } = n.instantiationService.invokeFunction((y)=>({
            scmService: y.get(l0)
        })), c = s?.repoPath.trim() || (o && rp(o) ? a.getRepository(o.uri)?.provider.rootUri?.fsPath : void 0), l = DC(s?.agentBranch) ?? TIh(e.composerDataHandle, c);
    if (!l) return {
        kind: "no-mismatch"
    };
    const { analyticsService: u, gitContextService: h, reactiveStorageService: p } = n.instantiationService.invokeFunction((y)=>({
            analyticsService: y.get(ca),
            gitContextService: y.get(kk),
            reactiveStorageService: y.get(Do)
        })), g = DC(c ? await h.getCurrentBranch({
        cwd: c
    }).catch(()=>{}) : await h.getCurrentBranch().catch(()=>{}));
    if (!g || g === l) return {
        kind: "no-mismatch"
    };
    if (r.allowAncestorShortCircuit && !s) {
        const y = i.value;
        if (y == null) return {
            kind: "no-mismatch"
        };
        if (y.isAncestor === !0) return {
            kind: "no-mismatch"
        };
    }
    if (r.respectDontAskAgain && p.applicationUserPersistentStorage.dialogDontAskAgainPreferences?.[IIh]) return {
        kind: "no-mismatch"
    };
    const f = await vt_({
        branchAncestryCache: i,
        gitContextService: h,
        normalizedAgentBranch: l,
        repoPath: c
    }), v = r.moveToCloud, b = r.onDismiss === "cancel" ? {
        kind: "cancel"
    } : {
        kind: "continue"
    };
    return new Promise((y)=>{
        const T = jTo(r.copy, s?.repoPath), E = {
            agentBranchExistsLocally: f,
            allowAncestorShortCircuit: r.allowAncestorShortCircuit,
            copy: T,
            explicitTarget: s !== void 0,
            moveToCloud: v,
            phase: "decision",
            respectDontAskAgain: r.respectDontAskAgain
        }, A = ()=>{
            const R = t.value;
            if (R) {
                if (R.conflictResolve?.("abort"), R.phase === "decision") {
                    NCt(u, "dismiss", E, void 0), t.set(null), y(b);
                    return;
                }
                t.set(null), y(b);
            }
        };
        kIh(u, E), t.set({
            currentBranch: g,
            agentBranch: l,
            agentBranchExistsLocally: f,
            phase: "decision",
            copy: T,
            respectDontAskAgain: r.respectDontAskAgain,
            moveToCloud: v,
            dismiss: A,
            resolve: (R)=>{
                R.kind === "move-to-cloud" && !VTo(v) || (R.kind === "checkout" ? (NCt(u, "checkout", E, void 0), t.set({
                    currentBranch: g,
                    agentBranch: l,
                    agentBranchExistsLocally: f,
                    phase: "checking-out",
                    checkingOutOperation: "checkout",
                    copy: T,
                    respectDontAskAgain: r.respectDontAskAgain,
                    moveToCloud: v,
                    dismiss: A,
                    resolve: ()=>{}
                }), y(R)) : (R.kind === "continue" ? NCt(u, "stay_current", E, void 0) : R.kind === "dont-ask-again" ? NCt(u, "dont_ask_again", E, void 0) : R.kind === "move-to-cloud" && NCt(u, "move_to_cloud", E, void 0), t.set(null), y(R)));
            }
        });
    });
}
async function Tt_(e, t, n, i) {
    if (n === i) return {
        repoPath: t,
        currentBranch: i,
        isAncestor: !0,
        agentBranchExistsLocally: !0
    };
    if (await e.executeGitCommand(t, [
        "merge-base",
        "--is-ancestor",
        n,
        "HEAD"
    ]).then(()=>!0, ()=>!1)) return {
        repoPath: t,
        currentBranch: i,
        isAncestor: !0,
        agentBranchExistsLocally: !0
    };
    const s = await e.resolveGitRevision({
        cwd: t,
        revision: `refs/heads/${n}`,
        verify: !0
    }).then(()=>!0, ()=>!1);
    return {
        repoPath: t,
        currentBranch: i,
        isAncestor: !1,
        agentBranchExistsLocally: s
    };
}
var CJi, xIh, IIh, AIh;
export { AIh, CIh, CJi, Ct_, EIh, IIh, NCt, SIh, St_, TIh, Tt_, VTo, _t_, bt_, jTo, kIh, kt_, vt_, wIh, wt_, xIh, yt_ };
var __wakaru_Et__initialized = false;
export function Et_() {
if (__wakaru_Et__initialized) return;
__wakaru_Et__initialized = true;
"use strict";
x(), bq(), Jm(), li(), ba(), Qt(), nf(), Fi(), ji(), Ya(), fu(), ci(), loe(), Wf(), nl(), Xy(), dT(), koe(), Fl(), TXi(), r0(), la(), im(), i0(), iL(), b1(), XPe(), lCh(), DFn(), K3(), Se(), N1(), Ha(), Yv(), CJi = {
    kind: "ineligible"
}, xIh = 3e4, IIh = "branch-mismatch", AIh = class {
    constructor(e){
        this.branchMismatchRequest = new gh(null), this.branchAncestryCache = new gh(null), this._branchTrackingDisposable = new cn, this._recomputeGeneration = 0, this._disposed = !1, this._host = {
            agentId: "private-worker-branch-gate",
            isDisposed: !1,
            composerDataHandle: e.composerDataHandle,
            workspaceFactory: e.workspaceFactory
        };
    }
    dispose() {
        this._disposed || (this._disposed = !0, this.branchMismatchRequest.value?.dismiss(), this._branchTrackingDisposable.dispose());
    }
    initBranchAncestryTracking(e, t, n) {
        this._branchTrackingDisposable.clear();
        const i = async ()=>{
            const c = ++this._recomputeGeneration, l = DC(t.value), u = DC(await e.getCurrentBranch({
                cwd: n
            }).catch(()=>{}));
            if (!l || !u) {
                this.branchAncestryCache.set(null);
                return;
            }
            l !== u && this.branchAncestryCache.set(null);
            const h = await Tt_(e, n, l, u);
            c === this._recomputeGeneration && this.branchAncestryCache.set(h);
        };
        i();
        const r = e.onDidChangeCachedBranch((c)=>{
            c.cwd === n && i();
        }), s = e.onDidRunGitStatus((c)=>{
            c === n && i();
        }), o = t.onChange(()=>i()), a = {
            dispose: ()=>{
                r.dispose(), s.dispose(), o.dispose();
            }
        };
        return this._branchTrackingDisposable.value = a, a;
    }
    async runBranchMismatchGate(e) {
        return this._runBranchMismatchGate(e);
    }
    async runBranchMismatchGateForRepo(e, t) {
        return this._runBranchMismatchGate(t, e);
    }
    async directCheckout(e) {
        const t = await CIh(this._host.workspaceFactory);
        if (!t) return {
            status: "failed"
        };
        try {
            return await EIh({
                loadedAgent: this._host,
                branchMismatchReactive: this.branchMismatchRequest,
                workspace: t,
                moveToCloud: e?.moveToCloud ?? CJi
            });
        } catch  {
            return {
                status: "handledFailure"
            };
        }
    }
    async confirmInitialSubmitBranches(e) {
        let t = e.moveToCloud ?? CJi;
        for (const n of e.targets){
            const i = await this.runBranchMismatchGateForRepo(n, {
                allowAncestorShortCircuit: !1,
                respectDontAskAgain: !1,
                onDismiss: "cancel",
                moveToCloud: t,
                copy: e.copy
            });
            if (i.status === "move-to-cloud") return "move-to-cloud";
            if (!i.success) return "cancelled";
            i.status === "checked-out" && (t = wt_(t));
        }
        return "confirmed";
    }
    async _runBranchMismatchGate(e, t) {
        const n = await CIh(this._host.workspaceFactory);
        if (!n || this._disposed) return {
            success: !1,
            status: "cancelled"
        };
        const i = {
            allowAncestorShortCircuit: e?.allowAncestorShortCircuit ?? !0,
            respectDontAskAgain: e?.respectDontAskAgain ?? !0,
            onDismiss: e?.onDismiss ?? "cancel",
            moveToCloud: e?.moveToCloud ?? CJi,
            copy: e?.copy
        }, r = await Ct_(this._host, this.branchMismatchRequest, n, this.branchAncestryCache, i, t);
        return this._finishBranchMismatchGateAfterDecision(n, r, i, t);
    }
    async _finishBranchMismatchGateAfterDecision(e, t, n, i) {
        switch(t.kind){
            case "no-mismatch":
                return {
                    success: !0,
                    status: "no-mismatch"
                };
            case "continue":
            case "dont-ask-again":
                return {
                    success: !0,
                    status: "continued"
                };
            case "cancel":
                return {
                    success: !1,
                    status: "cancelled"
                };
            case "move-to-cloud":
                return {
                    success: !0,
                    status: "move-to-cloud"
                };
            case "checkout":
                break;
        }
        try {
            const r = await EIh({
                loadedAgent: this._host,
                branchMismatchReactive: this.branchMismatchRequest,
                workspace: e,
                copy: jTo(n.copy, i?.repoPath),
                explicitTarget: i ? {
                    repoPath: i.repoPath,
                    branchName: i.agentBranch
                } : void 0,
                moveToCloud: n.moveToCloud
            });
            return kt_(r);
        } catch  {
            return {
                success: !1,
                status: "checkout-failed"
            };
        }
    }
};

}
