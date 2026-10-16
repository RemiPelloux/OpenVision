import { jTi } from "./Aeg.js";
import { Bav, Fav, Gav, Hav, JJw, WJw, Xav, Zav, cql, ee0, lql, n5i, nQt, oIs, oql, tlv, zJw } from "./Asv.js";
import { D, Ei, Hc, Qe, st } from "./Iwo.js";
import { $l, Il, bn } from "./SZu.js";
import { tMe } from "./Sol.js";
import { eDe, gg, iRl, uYk, zX } from "./Ycg.js";
import { OJw } from "./agent-migration-analytics.js";
import { Qav } from "./agent-migration-kind-classifier.js";
import { aIs, elv } from "./agent-migration-pipeline.js";
import { A_s, Yle } from "./agent-migration-targets.js";
import { nlv, se0 } from "./agent-migration-telemetry.js";
import { FEi } from "./agentMigrationFailureClassifier.js";
import { ma, wl } from "./agentRepositoryServiceTypes.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { LP, uC } from "./backgroundComposer.js";
import { vl, wm } from "./buildFlags.js";
import { Dxn, Rze } from "./checkoutProviderService.js";
import { ZAt } from "./cloud-entrypoint-github-setup.js";
import { Hx, ZI } from "./cloudAgentRepositoryService.js";
import { Lk, Nw } from "./cloudEnvironmentTemplateService.js";
import { rU } from "./cloudProjects.js";
import { uv } from "./composerData.js";
import { dp } from "./connect.js";
import { fcl, zpg } from "./cursorDevTools.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { KJa } from "./gYa.js";
import { QAt } from "./github-connect-reason.js";
import { dql } from "./github-connect-refresh.js";
import { Wme, gce } from "./glass-alert-dialog-service.js";
import { cS, db } from "./glass-clipboard-service.js";
import { mC, tl } from "./glass-command-bridge-service.js";
import { LDe, iQt, zKe } from "./glass-github-connect-service.js";
import { N2, pI } from "./glass-host-service.js";
import { Zu, eu } from "./glass-log-service.js";
import { U0 } from "./glass-modal-service.contract.js";
import { Cce } from "./glass-modal-service.js";
import { ul, zc } from "./glass-notification-service.js";
import { F$, s9 } from "./glass-path-service.js";
import { hIs, i5i } from "./glass-private-worker-gating-service.js";
import { FA } from "./glass-side-chat-utils.js";
import { Nu, xc } from "./glass-storage-service.js";
import { cD, zP } from "./glass-tab-persistence-service.js";
import { ge0, vql } from "./glass-team-pool-list-service.js";
import { xd } from "./glass-workspace-context-service.js";
import { te0 } from "./index_227.js";
import { It, dn } from "./instantiation.js";
import { A2p, Bqr } from "./ipa.js";
import { duT, huT, puT } from "./mE_.js";
import { Uh, ip } from "./metricsService.js";
import { Yav } from "./migration-prompt-draft.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { hql } from "./open-workspace-in-cursor.js";
import { Ul, eW } from "./path_2.js";
import { E6e } from "./pinnedAgentsStorage.js";
import { Jbe, L_ } from "./projectService.js";
import { Kf, ca } from "./reactive.js";
import { Ua, ob } from "./severity_2.js";
import { Cm, wh } from "./structuredLog.js";
import { Qpe } from "./trackedGitRepoHeader.js";
import { E } from "./tslib.es6.js";
import { Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
import { WYt, cm } from "./workspace-helpers.js";
import { l3 } from "./workspace-services_2.js";
import { Cu, Lc, ey } from "./workspaceCollectionService.js";
import { Lh, Qg } from "./workspaceMetadataService.js";
import { WO, qM } from "./worktree.js";
import { kS } from "./yBp.js";
var dwc, hwc, JG, cUi, v9s, Kce, _9s;
export { JG, Kce, _9s, cUi, dwc, hwc, v9s };
var __wakaru_wSe_initialized = false;
export function wSe() {
if (__wakaru_wSe_initialized) return;
__wakaru_wSe_initialized = true;
"use strict";
E(), dp(), Ei(), Qe(), Ki(), Ul(), ob(), Xo(), Bt(), wm(), Rn(), It(), Cm(), LP(), Nw(), uv(), zpg(), Dxn(), FEi(), wl(), Hx(), rU(), E6e(), L_(), Qpe(), Kf(), Ss(), ip(), _s(), Cu(), Lh(), qM(), OJw(), Yle(), ZAt(), QAt(), dql(), FA(), Yav(), hql(), cm(), l3(), Qav(), aIs(), te0(), se0(), cS(), mC(), zKe(), Wme(), Cce(), hIs(), ge0(), N2(), Zu(), zc(), F$(), xc(), cD(), xd(), dwc = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), hwc = (t)=>{
    throw TypeError(t);
}, JG = (t, e)=>(n, i)=>e(n, i, t), cUi = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && hwc("Object expected");
        var i, r;
        n && (i = e[dwc("asyncDispose")]), i === void 0 && (i = e[dwc("dispose")], n && (r = i)), typeof i != "function" && hwc("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, v9s = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
}, Kce = Il("glassAgentMigrationService"), _9s = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S){
        super(), this._agentRepositoryService = t, this._cloudAgentRepositoryService = e, this._storageService = n, this._logService = i, this._structuredLogService = r, this._alertDialogService = s, this._workspaceCollectionService = o, this._commandBridgeService = a, this._analyticsService = l, this._metricsService = c, this._clipboardService = u, this._instantiationService = d, this._pathService = h, this._workspaceMetadataService = p, this._worktreeManagerService = g, this._experimentService = f, this._privateWorkerGatingService = _, this._teamPoolListService = b, this._cloudEnvironmentTemplateService = y, this._notificationService = S, this._inflightCountsBySourceAgentId = new Map, this._activeMigrationBySourceAgentId = new Map, this._pendingConfirmationSignatureBySourceAgentId = new Map, this._stagedTabHandoffTargetBySourceAgentId = new Map, this._pendingPinnedAgentIdsBySourceAgentId = new Map, this._inflightMigrationSourceAgentIds = new ca(new Set), this._migrationTargetInputsVersion = new ca(0), this._register(this._workspaceMetadataService.onDidChangeMetadata(()=>this._publishMigrationTargetInputsVersion())), this._register(this._cloudEnvironmentTemplateService.data.onChange(()=>this._publishMigrationTargetInputsVersion())), this._register(this._teamPoolListService.onDidChange(()=>this._publishMigrationTargetInputsVersion())), this._register(this._privateWorkerGatingService.onDidChange(()=>this._publishMigrationTargetInputsVersion())), this._teamPoolListService.refreshIfStale(), this._register(this._worktreeManagerService.onDidCreateWorktree(()=>this._publishMigrationTargetInputsVersion())), this._register(this._worktreeManagerService.onDidRemoveWorktree(()=>this._publishMigrationTargetInputsVersion())), this._register(this._worktreeManagerService.onDidUpdateWorktreeMetadata(()=>this._publishMigrationTargetInputsVersion()));
        const k = {
            beginMigration: (I, A)=>this._agentRepositoryService.beginMigration(I, A),
            createAgentFromMigration: (I, A, P)=>this._agentRepositoryService.createAgentFromMigration(I, A, {
                    ...P,
                    simulateMigrationError: this._shouldSimulateCloudMigrationError(),
                    confirmGitTransferFailure: (M)=>this._confirmGitTransferFailure(M),
                    onRollback: (M)=>{
                        this._requestMigrationRollbackHandoff({
                            failedAgentId: M.failedAgentId,
                            restoredAgentId: M.restoredAgentId
                        }), P?.onRollback?.(M);
                    },
                    onCloudProjectAttachFailed: (M)=>this._notifyCloudProjectAttachFailed(M)
                })
        }, C = async (I)=>{
            if (iRl(I.targetEnvironment) || await this._ensureCloudTargetAvailable(I.targetEnvironment), I.skipSourceUncommittedChangesPrompt === !0) return {
                includeUncommittedChanges: !1
            };
            const { includeUncommittedChanges: A } = await this.preflightLocalToCloud(I.sourceAgentId);
            return {
                includeUncommittedChanges: A
            };
        }, T = async (I)=>({
                targetConflictResolution: await this._preflightWorktreeToLocal(I.targetEnvironment)
            });
        this._pipeline = new elv(ee0({
            repo: k,
            preflightLocalToCloud: C,
            preflightWorktreeToLocal: T
        }));
    }
    get inflightMigrationSourceAgentIds() {
        return this._inflightMigrationSourceAgentIds;
    }
    get migrationTargetInputsVersion() {
        return this._migrationTargetInputsVersion;
    }
    dispose() {
        for (const t of [
            ...this._stagedTabHandoffTargetBySourceAgentId.keys()
        ])try {
            this._discardMigrationTabHandoff(t);
        } catch (e) {
            this._logService.error("[GlassAgentMigrationService] Failed to discard staged tab handoff during disposal.", e);
        }
        this._stagedTabHandoffTargetBySourceAgentId.clear();
        for (const t of [
            ...this._pendingPinnedAgentIdsBySourceAgentId.keys()
        ])this._restorePinnedStateForFailedMigration(t);
        super.dispose();
    }
    _publishInflightSet() {
        this._inflightMigrationSourceAgentIds.set(new Set(this._inflightCountsBySourceAgentId.keys()));
    }
    _publishMigrationTargetInputsVersion() {
        this._migrationTargetInputsVersion.set(this._migrationTargetInputsVersion.value + 1);
    }
    getMigrationTargetsForAgent(t) {
        const e = this._agentRepositoryService.agents.value, n = this._experimentService.checkFeatureGate(A_s, {
            disableExposureLog: !0
        });
        return t.source === "local" && this._teamPoolListService.refreshIfStale(), uYk({
            header: t,
            allAgentHeaders: e,
            associationCatalog: tMe(this._cloudEnvironmentTemplateService.data.value, {
                includeGitRepoProjects: !0
            }),
            pathService: this._pathService,
            includeCloudWorktreeTargets: n,
            getCandidateForEnvironment: (i)=>Xav(i, this._pathService, this._workspaceMetadataService),
            getWorkspaceMetadataRepoUrl: (i)=>{
                const r = this._workspaceMetadataService.getMetadata(i);
                return KJa(r) ?? r?.worktreeInfo?.spawnedFromRepo;
            },
            workspaceMetadataService: this._workspaceMetadataService,
            getWorktreeSourceRepoPath: (i)=>this._worktreeManagerService.getWorktreeMetadataSnapshot().find((r)=>r.path === i)?.sourceRepoRootPath,
            getCloudWorktreeSiblings: (i)=>this._getCloudWorktreeSiblingsForMainline(i),
            privateWorkerPools: this._teamPoolListService.getSnapshot().destinations,
            requirePrivateWorkers: this._privateWorkerGatingService.getSnapshot().requirePrivateWorkers
        });
    }
    whenMigrationTargetInputsReady() {
        return this._teamPoolListService.waitForInitialLoad();
    }
    _getCloudWorktreeSiblingsForMainline(t) {
        return this._worktreeManagerService.getWorktreeMetadataSnapshot().filter((e)=>e.sourceRepoRootPath === t && e.ownership === "cursor-managed" && e.status !== "missing" && e.status !== "moved" && e.status !== "archived" && e.status !== "deleted").sort((e, n)=>(n.lastAccessedAt ?? n.createdAt) - (e.lastAccessedAt ?? e.createdAt)).map((e)=>({
                path: e.path,
                branchName: e.branchName
            }));
    }
    async _ensureCloudTargetAvailable(t) {
        const { backgroundComposerService: e, projectService: n } = this._instantiationService.invokeFunction((l)=>({
                backgroundComposerService: l.get(uC),
                projectService: l.get(Jbe)
            })), i = zX(t, WYt, this._workspaceMetadataService), r = eDe(i);
        let s = n.getProjectSiblingSections({
            selectedTarget: r
        }).cloudAvailability;
        if (s.status === "available") {
            this._cloudEnvironmentTemplateService.refreshGitRepoEnvironmentTemplates().catch(()=>{});
            return;
        }
        try {
            await this._cloudEnvironmentTemplateService.refreshGitRepoEnvironmentTemplates();
        } catch  {}
        const o = ()=>n.getProjectSiblingSections({
                selectedTarget: r
            }).cloudAvailability;
        if (s = await Hav({
            cloudAvailability: o(),
            cloudEnvironmentTemplateService: this._cloudEnvironmentTemplateService,
            readCloudAvailability: o
        }), s = await lql({
            backgroundComposerService: e,
            cloudAvailability: s,
            onAccessGranted: (l)=>this._cloudEnvironmentTemplateService.markGithubRepoAccessible(l)
        }), s.status === "available") return;
        const a = nQt(s);
        throw a && this._openGithubConnectModal(a, i), new Hc;
    }
    _openGithubConnectModal(t, e) {
        const { backgroundComposerService: n, experimentService: i, githubConnectService: r, hostService: s, modalService: o, projectService: a } = this._instantiationService.invokeFunction((h)=>({
                backgroundComposerService: h.get(uC),
                experimentService: h.get(Cr),
                githubConnectService: h.get(LDe),
                hostService: h.get(pI),
                modalService: h.get(U0),
                projectService: h.get(Jbe)
            })), l = oIs(t), c = n5i(t) || e.repoUrls?.[0] || "";
        let u;
        const d = ()=>{
            u?.dispose(), u = void 0;
        };
        u = cql({
            cloudEnvironmentTemplateService: this._cloudEnvironmentTemplateService,
            hostService: s,
            selectedTargetRepoUrl: c,
            onRefresh: async ()=>(await lql({
                    backgroundComposerService: n,
                    cloudAvailability: a.getProjectSiblingSections({
                        selectedTarget: eDe(e)
                    }).cloudAvailability,
                    onAccessGranted: (p)=>this._cloudEnvironmentTemplateService.markGithubRepoAccessible(p)
                })).status !== "available" ? !1 : (o.closeModal("github-connect"), d(), !0),
            onTimeout: ()=>{
                o.closeModal("github-connect"), d();
            }
        }), o.openModal("github-connect", {
            ...l,
            onClose: d,
            onConnectGithub: async ()=>{
                if (u?.begin(), i.checkFeatureGate(iQt, {
                    disableExposureLog: !0
                })) {
                    await r.startGithubConnectFlow(Gav(t, "cloud-agent"));
                    return;
                }
                await n.openGithubConnectUrl(oql(n, n5i(t)));
            }
        });
    }
    migrateAgent(t) {
        const e = this._agentRepositoryService.agents.value.find((c)=>c.id === t.sourceAgentId);
        if (e && kS(e)) return new ca({
            phase: "error",
            message: "Side chats cannot be moved to another location"
        });
        const n = zJw(e, t.targetEnvironment), i = {
            sourceAgentId: t.sourceAgentId,
            sourceKind: n.sourceKind,
            targetKind: n.targetKind,
            targetEnvironment: t.targetEnvironment,
            targetLabel: t.targetLabel,
            message: t.message,
            submitOptions: t.submitOptions,
            planBuild: t.planBuild,
            ignoreWorktreeDetachFailure: t.ignoreWorktreeDetachFailure,
            skipSourceUncommittedChangesPrompt: t.skipSourceUncommittedChangesPrompt,
            entrypoint: t.entrypoint,
            promoteMirrorBcId: t.promoteMirrorBcId,
            cloudProjectAgentId: t.cloudProjectAgentId
        }, r = this._createTelemetryContextFromHeaderLookup(e, i, t.entrypoint ?? "unknown");
        if (e?.status?.value !== "in_progress") return this._runPipelineWithTelemetry(i, r);
        const s = JSON.stringify({
            env: t.targetEnvironment,
            message: t.message ?? null
        }), o = this._activeMigrationBySourceAgentId.get(t.sourceAgentId);
        if (o && o.value.phase === "migrating") {
            const c = this._pendingConfirmationSignatureBySourceAgentId.get(t.sourceAgentId);
            return c !== void 0 && c !== s ? new ca({
                phase: "error",
                message: "Another move for this agent is awaiting confirmation"
            }) : (this._logService.warn(`[GlassAgentMigrationService] Reusing in-flight migration for source agent ${t.sourceAgentId}.`), o);
        }
        const a = new ca({
            phase: "migrating"
        });
        this._activeMigrationBySourceAgentId.set(t.sourceAgentId, a), this._pendingConfirmationSignatureBySourceAgentId.set(t.sourceAgentId, s);
        const l = ()=>{
            this._pendingConfirmationSignatureBySourceAgentId.delete(t.sourceAgentId), this._activeMigrationBySourceAgentId.get(t.sourceAgentId) === a && this._activeMigrationBySourceAgentId.delete(t.sourceAgentId);
        };
        return (async ()=>{
            const c = await this._confirmMidTurnMigration(t.targetLabel);
            if (l(), !c) {
                a.set({
                    phase: "idle"
                });
                return;
            }
            const u = this._runPipelineWithTelemetry(i, r), d = (p)=>{
                a.set(p);
            }, h = u.onChange((p)=>{
                d(p), p.phase !== "migrating" && h.dispose();
            });
            d(u.value), u.value.phase !== "migrating" && h.dispose();
        })().catch((c)=>{
            l(), a.set({
                phase: "error",
                message: c instanceof Error ? c.message : String(c)
            });
        }), a;
    }
    async _confirmMidTurnMigration(t) {
        const e = t?.trim() || D("glass.migration.midTurn.defaultTarget", "the new location");
        return await this._alertDialogService.prompt({
            title: D("glass.migration.midTurn.title", "Move agent while it\u2019s working?"),
            description: D("glass.migration.midTurn.description", "Moving will stop the current turn and continue in {0}. Queued messages move with the agent.", e),
            suggestedAction: {
                label: D("glass.migration.midTurn.move", "Stop and Move"),
                result: "move"
            },
            regretAction: {
                label: D("glass.migration.midTurn.cancel", "Cancel"),
                result: "cancel"
            },
            onDismissResult: "cancel"
        }) === "move";
    }
    _requestMigrationHandoff({ sourceAgentId: t, createdAgentId: e }, n, i) {
        this._commandBridgeService.emit({
            type: "migrationHandoffRequested",
            payload: {
                oldAgentId: t,
                newAgentId: e,
                ...i ? {
                    sourceFinalizedBeforeHandoff: !0
                } : {},
                ...n ? {
                    hasStagedTabHandoff: !0,
                    onStagedTabHandoffReplayArmed: ()=>{
                        this._stagedTabHandoffTargetBySourceAgentId.get(t) === e && this._stagedTabHandoffTargetBySourceAgentId.delete(t);
                    }
                } : {}
            }
        });
    }
    _prepareMigrationTabHandoff({ sourceAgentId: t, createdAgentId: e }) {
        this._commandBridgeService.emit({
            type: "migrationTabHandoffPrepareRequested",
            payload: {
                oldAgentId: t,
                newAgentId: e,
                onPrepared: ()=>{
                    this._stagedTabHandoffTargetBySourceAgentId.set(t, e);
                }
            }
        });
    }
    _discardMigrationTabHandoff(t) {
        const e = this._stagedTabHandoffTargetBySourceAgentId.get(t);
        e !== void 0 && (zP.discardPendingMigratedTabsReplayForAgent(e), this._commandBridgeService.emit({
            type: "migrationTabHandoffDiscardRequested",
            payload: {
                oldAgentId: t,
                newAgentId: e,
                onDiscarded: ()=>{
                    this._stagedTabHandoffTargetBySourceAgentId.get(t) === e && this._stagedTabHandoffTargetBySourceAgentId.delete(t);
                }
            }
        }));
    }
    _hasStagedMigrationTabHandoff(t, e) {
        return this._stagedTabHandoffTargetBySourceAgentId.get(t) === e;
    }
    _requestMigrationRollbackHandoff({ failedAgentId: t, restoredAgentId: e }) {
        this._commandBridgeService.emit({
            type: "migrationRollbackRequested",
            payload: {
                failedAgentId: t,
                restoredAgentId: e
            }
        });
    }
    _notifyCloudProjectAttachFailed(t) {
        const e = this._agentRepositoryService.getAgentHeader(t.agentId)?.name.value.trim(), n = this._agentRepositoryService.getAgentHeader(t.cloudProjectAgentId)?.name.value.trim(), i = e && n ? D("glass.agentMigrationService.projectAttachFailed.named", `"{0}" couldn't be added to {1}`, e, n) : D("glass.agentMigrationService.projectAttachFailed", "The agent couldn't be added to the Project");
        this._notificationService.prompt(Ua.Error, i, [
            {
                label: D("glass.agentMigrationService.projectAttachFailed.retry", "Retry"),
                run: ()=>{
                    this._agentRepositoryService.reparentAgentIntoProject(t.agentId, t.cloudProjectAgentId).catch((r)=>{
                        this._logService.error("[GlassAgentMigrationService] Retrying Project adoption failed.", r), this._notifyCloudProjectAttachFailed({
                            ...t,
                            error: r
                        });
                    });
                }
            }
        ]);
    }
    runMigrationPipeline(t, e) {
        const n = this._createTelemetryContextFromPipelineRequest(t);
        return this._runPipelineWithTelemetry(t, n, e);
    }
    _runPipelineWithTelemetry(t, e, n) {
        const i = t.sourceAgentId, r = this._activeMigrationBySourceAgentId.get(i);
        if (r && r.value.phase === "migrating") return this._logService.warn(`[GlassAgentMigrationService] Reusing in-flight migration for source agent ${i}.`), r;
        const s = Zav(t), o = new nlv(e, this._analyticsService, this._metricsService, this._logService);
        o.start();
        let a;
        const l = {
            onAsyncMigrationStarted: (b)=>{
                o.recordAsyncMigrationStarted(b);
            },
            onAsyncMigrationCompleted: (b)=>{
                o.recordAsyncMigrationCompleted(b);
            },
            onAsyncMigrationFailed: (b)=>{
                o.recordAsyncMigrationFailed(b);
            },
            onPipelineMigrationFailed: (b)=>{
                a = b;
            },
            onMigrationStageStarted: (b)=>{
                o.recordMigrationStageStarted(b);
            },
            onMigrationStageCompleted: (b)=>{
                o.recordMigrationStageCompleted(b);
            },
            onMigrationStageFailed: (b)=>{
                o.recordMigrationStageFailed(b);
            }
        }, c = this._pipeline.run(t, {
            onMigrationStarted: ()=>{
                try {
                    this._logService.debug(`[GlassAgentMigrationService] Pipeline migration started: ${t.sourceKind} \u2192 ${t.targetKind}`);
                } finally{
                    n?.onMigrationStarted?.();
                }
            },
            onHandoffRequested: (b)=>{
                const y = this._hasStagedMigrationTabHandoff(b.sourceAgentId, b.createdAgentId);
                try {
                    this._requestMigrationHandoff(b, y, s);
                } finally{
                    n?.onHandoffRequested?.(b);
                }
            },
            onTargetAgentCreatedBeforeSourceFinalize: (b)=>{
                try {
                    this._transferPinnedStateForMigration({
                        sourceAgentId: b.sourceAgentId,
                        createdAgentId: b.createdAgentId
                    }), s && this._prepareMigrationTabHandoff(b), t.message === void 0 && this._transferDraftForMigration({
                        sourceAgentId: b.sourceAgentId,
                        createdAgentId: b.createdAgentId
                    });
                } finally{
                    n?.onTargetAgentCreatedBeforeSourceFinalize?.(b);
                }
            },
            onTargetAgentCreated: (b)=>{
                n?.onTargetAgentCreated?.(b);
            },
            onMigrationCompleted: (b)=>{
                try {
                    this._pendingPinnedAgentIdsBySourceAgentId.delete(i), this._logService.debug(`[GlassAgentMigrationService] Pipeline migration completed: ${b}`), o.finishPipeline({
                        outcome: "success",
                        completionKind: t.targetKind === "cloud" ? "optimistic_handoff" : "complete"
                    });
                } finally{
                    n?.onMigrationCompleted?.(b);
                }
            },
            onMigrationFailed: (b)=>{
                try {
                    this._discardMigrationTabHandoff(i), this._restorePinnedStateForFailedMigration(i);
                    const y = puT(b, t, a);
                    this._logService.error("[GlassAgentMigrationService] Pipeline migration failed.", b), this._structuredLogService.error("cloud_agents", "Glass agent migration failed", b, y), o.finishPipeline({
                        outcome: "error",
                        error: b
                    }), this._alertDialogService.alert({
                        title: D("glass.agentMigrationService.failed.title", "Failed to migrate agent"),
                        description: huT(b, t),
                        normalAction: {
                            label: D("glass.agentMigrationService.failed.copyError", "Copy Error"),
                            action: async ()=>{
                                await this._clipboardService.writeText(b.message);
                            }
                        }
                    });
                } finally{
                    n?.onMigrationFailed?.(b);
                }
            },
            onMigrationCancelled: ()=>{
                try {
                    this._discardMigrationTabHandoff(i), this._restorePinnedStateForFailedMigration(i), this._logService.debug("[GlassAgentMigrationService] Pipeline migration cancelled by user."), o.finishPipeline({
                        outcome: "cancelled"
                    });
                } finally{
                    n?.onMigrationCancelled?.();
                }
            },
            onPostCompletionCleanupFailed: (b)=>{
                try {
                    this._logService.warn("[GlassAgentMigrationService] Migration succeeded but post-completion cleanup failed.", b), o.recordFinalizeFailed(b);
                } finally{
                    n?.onPostCompletionCleanupFailed?.(b);
                }
            }
        }, l);
        o.recordPipelineStatus(c.value);
        const u = JJw(c), d = (b)=>b === "complete" || b === "error" || b === "idle";
        let h = !1;
        this._activeMigrationBySourceAgentId.set(i, u);
        const p = ()=>{
            if (h) return;
            h = !0;
            const b = this._inflightCountsBySourceAgentId.get(i) ?? 0;
            this._inflightCountsBySourceAgentId.set(i, b + 1), b === 0 && this._publishInflightSet();
        }, g = ()=>{
            if (this._activeMigrationBySourceAgentId.get(i) === u && this._activeMigrationBySourceAgentId.delete(i), !h) return;
            h = !1;
            const b = this._inflightCountsBySourceAgentId.get(i) ?? 0;
            b <= 1 ? (this._inflightCountsBySourceAgentId.delete(i), this._publishInflightSet()) : this._inflightCountsBySourceAgentId.set(i, b - 1);
        }, f = ()=>{
            queueMicrotask(()=>{
                _?.dispose(), u.dispose();
            });
        }, _ = c.onChange((b)=>{
            o.recordPipelineStatus(b), d(b.phase) ? (g(), f()) : p();
        });
        return d(c.value.phase) ? (g(), f()) : p(), u;
    }
    _resolveDirtyCheckRepoPath(t) {
        if (!$l(t) || t.uri.scheme !== Ot.file) return;
        const e = Bqr(t)?.trim();
        if (!(!e || !eW(e))) return e;
    }
    async _tryHasUncommittedChangesByPath(t) {
        const e = this._resolveDirtyCheckRepoPath(t);
        if (e) try {
            return await this._worktreeManagerService.hasDirtyWorkingTree(e);
        } catch  {
            return;
        }
    }
    async preflightLocalToCloud(t) {
        const e = this._agentRepositoryService.agents.value.find((u)=>u.id === t);
        if (!e || e.source !== "local") return {
            includeUncommittedChanges: !1
        };
        let n;
        const i = await this._tryHasUncommittedChangesByPath(e.environment.value);
        if (i !== void 0) n = i;
        else try {
            var r = [];
            try {
                const d = cUi(r, await this._workspaceCollectionService.createWorkspaceReference(e.environment.value, Lc.Git)).object;
                n = await gg(d, Rze).hasDirtyWorkingTree();
            } catch (u) {
                var s = u, o = !0;
            } finally{
                v9s(r, s, o);
            }
        } catch  {
            return {
                includeUncommittedChanges: !1
            };
        }
        if (!n) return {
            includeUncommittedChanges: !1
        };
        const a = jTi(e.trackedGitRepos.value), l = a ? ` on "${a}"` : "", c = await this._alertDialogService.prompt({
            title: D("glass.migration.uncommitted.title", "Include uncommitted changes?"),
            description: D("glass.migration.uncommitted.description", "You have uncommitted changes{0}. Would you like to include them in the cloud agent?", l),
            suggestedAction: {
                label: D("glass.migration.uncommitted.include", "Include Changes"),
                result: "include"
            },
            normalAction: {
                label: D("glass.migration.uncommitted.exclude", "Exclude Changes"),
                result: "exclude"
            },
            regretAction: {
                label: D("glass.migration.uncommitted.cancel", "Cancel"),
                result: "cancel"
            },
            onDismissResult: "cancel"
        });
        switch(c){
            case "include":
                return {
                    includeUncommittedChanges: !0
                };
            case "exclude":
                return {
                    includeUncommittedChanges: !1
                };
            case "cancel":
                throw new Hc;
            default:
                {
                    const u = c;
                    throw new Error(`Unexpected choice: ${u}`);
                }
        }
    }
    async _confirmGitTransferFailure(t) {
        const e = t.branchName ? ` for \u201C${t.branchName}\u201D` : "";
        if (await this._alertDialogService.prompt({
            title: D("glass.migration.gitTransferFailure.title", "Move Conversation Without Local Git State?"),
            description: D("glass.migration.gitTransferFailure.description", `Cursor couldn\u2019t transfer local Git state{0}.

{1}

Local branches, commits, and uncommitted changes will remain on this machine and may not be available to the cloud agent.`, e, t.reason),
            normalAction: {
                label: D("glass.migration.gitTransferFailure.continue", "Continue anyway"),
                result: "continue"
            },
            regretAction: {
                label: D("glass.migration.gitTransferFailure.cancel", "Cancel"),
                result: "cancel"
            },
            onDismissResult: "cancel"
        }) === "cancel") throw new Hc;
    }
    async _preflightWorktreeToLocal(t) {
        if (t.type !== "existing") return;
        let e;
        const n = await this._tryHasUncommittedChangesByPath(t.environment);
        if (n !== void 0) e = n;
        else try {
            var i = [];
            try {
                const l = cUi(i, await this._workspaceCollectionService.createWorkspaceReference(t.environment, Lc.Git)).object;
                e = await gg(l, Rze).hasDirtyWorkingTree();
            } catch (a) {
                var r = a, s = !0;
            } finally{
                v9s(i, r, s);
            }
        } catch  {
            return;
        }
        if (!e) return;
        const o = await this._alertDialogService.prompt({
            title: D("glass.migration.worktreeToLocal.uncommitted.title", "Local changes detected"),
            description: D("glass.migration.worktreeToLocal.uncommitted.description", "Your local workspace has uncommitted changes. How would you like to handle them before switching branches?"),
            suggestedAction: {
                label: D("glass.migration.worktreeToLocal.stash", "Stash Changes"),
                result: "stash"
            },
            normalAction: {
                label: D("glass.migration.worktreeToLocal.commit", "Commit Changes"),
                result: "commit"
            },
            regretAction: {
                label: D("glass.migration.worktreeToLocal.cancel", "Cancel"),
                result: "cancel"
            },
            onDismissResult: "cancel"
        });
        if (o === "cancel") throw new Hc;
        return o;
    }
    _createTelemetryContextFromHeaderLookup(t, e, n) {
        const i = t ? Fav(t) : "unknown", r = Bav(e.targetEnvironment);
        return {
            migrationRunId: Ai(),
            entrypoint: n,
            sourceEnv: i,
            destEnv: r,
            sourceKind: e.sourceKind,
            targetKind: e.targetKind,
            direction: tlv({
                sourceKind: e.sourceKind,
                targetKind: e.targetKind
            })
        };
    }
    _createTelemetryContextFromPipelineRequest(t) {
        const e = this._resolveSourceEnvKindForAgent(t.sourceAgentId) ?? duT(t.sourceKind), n = Bav(t.targetEnvironment);
        return {
            migrationRunId: Ai(),
            entrypoint: t.entrypoint ?? "pipeline",
            sourceEnv: e,
            destEnv: n,
            sourceKind: t.sourceKind,
            targetKind: t.targetKind,
            direction: tlv({
                sourceKind: t.sourceKind,
                targetKind: t.targetKind
            })
        };
    }
    _resolveSourceEnvKindForAgent(t) {
        const e = this._agentRepositoryService.agents.value.find((n)=>n.id === t);
        if (e) return Fav(e);
    }
    _transferPinnedStateForMigration({ sourceAgentId: t, createdAgentId: e }) {
        try {
            const n = this._cloudAgentRepositoryService.pinnedAgentIds.value, i = A2p({
                ids: n,
                oldAgentId: t,
                newAgentId: e
            });
            if (i === n) return;
            this._pendingPinnedAgentIdsBySourceAgentId.set(t, [
                ...n
            ]), this._cloudAgentRepositoryService.commitMigratedPinnedAgentIds(i);
        } catch (n) {
            this._pendingPinnedAgentIdsBySourceAgentId.delete(t), this._logService.error("[GlassAgentMigrationService] Failed to transfer pinned state during migration.", n);
        }
    }
    _restorePinnedStateForFailedMigration(t) {
        const e = this._pendingPinnedAgentIdsBySourceAgentId.get(t);
        if (e !== void 0) {
            this._pendingPinnedAgentIdsBySourceAgentId.delete(t);
            try {
                this._cloudAgentRepositoryService.commitMigratedPinnedAgentIds(e);
            } catch (n) {
                this._logService.error("[GlassAgentMigrationService] Failed to restore pinned state after migration abort.", n);
            }
        }
    }
    _transferDraftForMigration({ sourceAgentId: t, createdAgentId: e }) {
        var n = [];
        try {
            if (t === e) return;
            const s = cUi(n, this._agentRepositoryService.getAgent(t)), o = cUi(n, this._agentRepositoryService.getAgent(e));
            try {
                if (!o) return;
                const a = WJw(t), l = this._resolveDraftForMigration(a, s);
                if (!l) return;
                const c = o.composerDataHandle, u = c.data;
                if ((u.text ?? "").trim().length > 0) return;
                l.text.trim().length > 0 && (c.setData("text", l.text), c.setData("richText", l.richText)), u.hasChangedContext !== !0 && l.hasUserContext && l.context !== void 0 && (c.setData("context", {
                    ...l.context
                }), c.setData("hasChangedContext", !0));
            } catch (a) {
                this._logService.error("[GlassAgentMigrationService] Failed to transfer prompt draft during migration.", a);
            }
        } catch (s) {
            var i = s, r = !0;
        } finally{
            v9s(n, i, r);
        }
    }
    _resolveDraftForMigration(t, e) {
        if (t && (t.text.trim().length > 0 || t.hasUserContext)) return t;
        if (!e) return;
        const n = e.composerDataHandle.data, i = n.text ?? "", r = n.richText ?? "", s = n.hasChangedContext === !0 && !!n.context;
        if (!(i.trim().length === 0 && !s)) return {
            text: i,
            richText: r,
            hasUserContext: s,
            context: s ? n.context : void 0
        };
    }
    _shouldSimulateCloudMigrationError() {
        return vl.developmentTooling ? this._instantiationService.invokeFunction((t)=>t.get(fcl).getShouldSimulateCloudMigrationError()) : !1;
    }
}, _9s = Re([
    JG(0, ma),
    JG(1, ZI),
    JG(2, Nu),
    JG(3, eu),
    JG(4, wh),
    JG(5, gce),
    JG(6, ey),
    JG(7, tl),
    JG(8, Qr),
    JG(9, Uh),
    JG(10, db),
    JG(11, dn),
    JG(12, s9),
    JG(13, Qg),
    JG(14, WO),
    JG(15, Cr),
    JG(16, i5i),
    JG(17, vql),
    JG(18, Lk),
    JG(19, ul)
], _9s), bn(Kce, _9s, 1, 1);

}
