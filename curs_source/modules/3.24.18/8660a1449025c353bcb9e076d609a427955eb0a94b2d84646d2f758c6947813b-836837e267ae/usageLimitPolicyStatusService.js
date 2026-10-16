import { Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rs, ss } from "./authenticationService.js";
import { Du, Pk, UVr, jVr } from "./dashboard_pb.js";
import { CJ, UB } from "./debugNamespaceService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { Ape, Dbe } from "./limitHitExperimentUtils.js";
import { Cl, Gu } from "./quickInput.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { QU1, XU1, ZU1, bOm, nj1, tj1, yOm } from "./yBp.js";
import { Wt, pi } from "./ze.js";
var wOm, ZW, jwi, $wi, YZr, COm, Hwi, TOm, EOm, XZr;
export { $wi, COm, EOm, Hwi, TOm, XZr, YZr, ZW, jwi, wOm };
var __wakaru_QW_initialized = false;
export function QW() {
if (__wakaru_QW_initialized) return;
__wakaru_QW_initialized = true;
"use strict";
E(), Qe(), pi(), It(), Rn(), Du(), Dbe(), Rs(), el(), _s(), CJ(), Gu(), wOm = [
    {
        label: "clear",
        detail: "Clear limit-hit simulation and restore normal status.",
        stage: null
    },
    {
        label: "slow_pool",
        detail: "Simulate slower responses with the new limit-hit tray.",
        stage: "slow_pool"
    },
    {
        label: "auto_switch",
        detail: "Simulate the model auto-switch notice.",
        stage: "auto_switch"
    },
    {
        label: "hard_block",
        detail: "Simulate the out-of-usage hard block.",
        stage: "hard_block"
    }
], ZW = Il("usageLimitPolicyStatusService"), jwi = 5000n, $wi = 50000n, YZr = 30000n, COm = "You're paused until your usage resets.", Hwi = {
    canAdjustOnDemand: !0,
    onDemandMinCents: jwi,
    onDemandMaxCents: $wi,
    recommendedOnDemandLimitCents: YZr
}, TOm = "You are out of usage. Switch to Auto or add usage to continue.", EOm = new Set([
    "auto",
    "default"
]), XZr = class extends st {
    constructor(t, e, n, i, r){
        super(), this.cursorAuthenticationService = t, this.reactiveStorageService = e, this.experimentService = n, this.quickInputService = r, this.CACHE_DURATION = 10 * 1e3, this.lastFetchTime = 0, this.fetchInProgress = null, this._register(this.reactiveStorageService.createScoped(this));
        const [s, o] = Wt(null), [a, l] = Wt([]), [c, u] = Wt(null), [d, h] = Wt(!1), [p, g] = Wt(null), [f, _] = Wt(null), [b, y] = Wt(null), [S, k] = Wt(void 0), [C, T] = Wt(null);
        this.statusData = s, this.setStatusData = o, this.activeGrantsData = a, this.setActiveGrantsData = l, this.thirdPartyUsageNudgeData = c, this.setThirdPartyUsageNudgeData = u, this.isLoadingData = d, this.setIsLoading = h, this.errorData = p, this.setError = g, this.devOverrideData = f, this.setDevOverrideData = _, this.autoSwitchNoticeData = b, this.setAutoSwitchNoticeData = y, this.autoSwitchNoticeComposerIdData = S, this.setAutoSwitchNoticeComposerIdData = k, this.dismissedAutoSwitchStatusFingerprintData = C, this.setDismissedAutoSwitchStatusFingerprintData = T, this.statusAccessor = ()=>{
            const A = this.devOverrideData();
            if (A !== null) return A;
            const P = this.statusData();
            return P !== null && (P.isInSlowPool || (P.stage ?? Pk.UNSPECIFIED) !== Pk.UNSPECIFIED) ? P : this.autoSwitchNoticeData() ?? P;
        }, this.autoSwitchNoticeComposerIdAccessor = ()=>{
            if (this.devOverrideData() !== null) return;
            const A = this.statusData();
            if (!(A !== null && (A.isInSlowPool || (A.stage ?? Pk.UNSPECIFIED) !== Pk.UNSPECIFIED))) return this.autoSwitchNoticeData() !== null ? this.autoSwitchNoticeComposerIdData() : void 0;
        }, this.isCurrentAutoSwitchStatusDismissedAccessor = ()=>{
            const A = yOm({
                status: this.statusAccessor(),
                composerId: this.autoSwitchNoticeComposerIdAccessor()
            });
            return tj1(A, this.dismissedAutoSwitchStatusFingerprintData());
        }, this._register(i.register("simulateLimitHitStage", async (A)=>{
            const P = A ?? await this.pickDebugLimitHitStage();
            if (P === void 0) return "limit_hit_ui: simulation cancelled";
            if (P === null) return this.setDevStageOverride(null), "limit_hit_ui: simulation cleared";
            const M = ZU1(P);
            return this.setDevStageOverride(M), `limit_hit_ui: simulating ${P} (treatment forced on)`;
        })), this._register(i.register("clearLimitHitSimulation", ()=>(this.setDevStageOverride(null), "limit_hit_ui: simulation cleared")));
        const I = (A)=>{
            this.clearCachedData();
        };
        this.cursorAuthenticationService.addLoginChangedListener(I), this._register({
            dispose: ()=>{
                this.cursorAuthenticationService.removeLoginChangedListener(I);
            }
        });
    }
    async pickDebugLimitHitStage() {
        const t = QU1(this.devOverrideData()?.stage), e = this.devOverrideData() !== null, n = wOm.map((r)=>({
                ...r,
                description: r.stage === null && !e || r.stage === t ? "Current" : void 0
            }));
        return (await this.quickInputService.pick(n, {
            placeHolder: "Select limit-hit stage to simulate",
            matchOnDescription: !0,
            matchOnDetail: !0,
            canPickMany: !1
        }))?.stage;
    }
    get status() {
        return this.statusAccessor;
    }
    get autoSwitchNoticeComposerId() {
        return this.autoSwitchNoticeComposerIdAccessor;
    }
    get isCurrentAutoSwitchStatusDismissed() {
        return this.isCurrentAutoSwitchStatusDismissedAccessor;
    }
    get activeGrants() {
        return this.activeGrantsData;
    }
    get thirdPartyUsageNudge() {
        return this.thirdPartyUsageNudgeData;
    }
    get isLoading() {
        return this.isLoadingData;
    }
    get error() {
        return this.errorData;
    }
    clearThirdPartyUsageNudge() {
        this.setThirdPartyUsageNudgeData(null);
    }
    async refetch(t = !1) {
        if (!this.cursorAuthenticationService.isAuthenticated()) return;
        if (this.fetchInProgress) return this.fetchInProgress;
        const e = Date.now();
        if (e - this.lastFetchTime < this.CACHE_DURATION && !this.errorData() && !t) return;
        const n = this.performFetch(e, new UVr({
            midConversationModelRecommendationContext: new jVr({
                supportsThirdPartyUsageNudge: !0
            })
        })).then(()=>{});
        this.fetchInProgress = n;
        try {
            await n;
        } finally{
            this.fetchInProgress === n && (this.fetchInProgress = null);
        }
    }
    async refetchForModelRecommendation(t) {
        if (!this.cursorAuthenticationService.isAuthenticated()) return;
        for(; this.fetchInProgress !== null;)await this.fetchInProgress;
        const e = Date.now(), n = this.performFetch(e, new UVr({
            midConversationModelRecommendationContext: t
        })), i = n.then(()=>{});
        this.fetchInProgress = i;
        try {
            return (await n).modelRecommendationNudge;
        } finally{
            this.fetchInProgress === i && (this.fetchInProgress = null);
        }
    }
    async performFetch(t, e) {
        this.setIsLoading(!0), this.setError(null);
        const n = this.cursorAuthenticationService.getCurrentAuthId();
        try {
            const r = await (await this.cursorAuthenticationService.dashboardClient()).getUsageLimitStatusAndActiveGrants(e);
            if (this.isStaleAuthIdentity(n)) return {
                success: !1
            };
            const s = r.usageLimitPolicyStatus, o = s?.features && Object.keys(s.features).length > 0 ? Object.fromEntries(Object.entries(s.features).map(([p, g])=>{
                try {
                    return [
                        p,
                        JSON.parse(g)
                    ];
                } catch (f) {
                    return console.warn("[USAGE_LIMIT_POLICY] Failed to parse feature value", {
                        key: p,
                        value: g,
                        error: f
                    }), [
                        p,
                        g
                    ];
                }
            })) : void 0, a = s?.primaryButton, l = s?.secondaryButton, c = {
                isInSlowPool: s?.isInSlowPool ?? !1,
                errorTitle: s?.errorTitle,
                errorDetail: s?.errorDetail,
                slownessMs: s?.slownessMs,
                features: o,
                canConfigureSpendLimit: s?.canConfigureSpendLimit,
                limitType: s?.limitType,
                hasPendingRequest: s?.hasPendingRequest,
                creditRequestButtonHidden: s?.creditRequestButtonHidden === !0,
                allowedModelIds: s?.allowedModelIds && s.allowedModelIds.length > 0 ? s.allowedModelIds : void 0,
                allowedModelTags: s?.allowedModelTags && s.allowedModelTags.length > 0 ? s.allowedModelTags : void 0,
                primaryButton: a,
                secondaryButton: l,
                stage: s?.stage ?? Pk.UNSPECIFIED,
                trayLabel: s?.trayLabel,
                trayDescription: s?.trayDescription,
                ctaLabel: s?.ctaLabel,
                dismissible: s?.dismissible,
                resetAtMs: s?.resetAtMs,
                resetDaysRemaining: s?.resetDaysRemaining,
                canAdjustOnDemand: s?.canAdjustOnDemand,
                recommendedOnDemandLimitCents: s?.recommendedOnDemandLimitCents,
                onDemandMinCents: s?.onDemandMinCents,
                onDemandMaxCents: s?.onDemandMaxCents,
                currentOnDemandLimitCents: s?.currentOnDemandLimitCents
            };
            this.setStatusData(c), bOm(c) || this.setDismissedAutoSwitchStatusFingerprintData(null);
            const u = r.activeGrants.map((p)=>({
                    grantId: p.grantId,
                    totalCents: p.totalCents,
                    remainingCents: p.remainingCents,
                    expiresAtMs: p.expiresAtMs,
                    allowedModelIds: p.allowedModelIds,
                    allowedModelTags: p.allowedModelTags,
                    allowedModelSelections: p.allowedModelSelections,
                    grantType: p.grantType,
                    slownessMs: p.slownessMs,
                    source: p.source,
                    campaignName: p.campaignName,
                    showInClient: p.showInClient,
                    allowedClientTypes: p.allowedClientTypes ?? []
                }));
            this.setActiveGrantsData(u);
            const d = r.thirdPartyUsageNudge;
            d !== void 0 && this.setThirdPartyUsageNudgeData({
                experimentName: d.experimentName,
                group: d.group,
                threshold: d.threshold,
                cycleId: d.cycleId,
                targetModel: d.targetModel,
                label: d.label,
                description: d.description.length > 0 ? d.description : void 0,
                ctaLabel: d.ctaLabel,
                nudgeId: d.nudgeId
            }), this.lastFetchTime = t;
            const h = r.modelRecommendationNudge;
            return {
                success: !0,
                modelRecommendationNudge: XU1(h) ? h : void 0
            };
        } catch (i) {
            return this.isStaleAuthIdentity(n) ? {
                success: !1
            } : (console.error("Failed to fetch usage limit status and active grants:", i), this.setError(i instanceof Error ? i.message : "Failed to fetch usage limit status and active grants"), this.setStatusData(null), this.setActiveGrantsData([]), {
                success: !1
            });
        } finally{
            this.isStaleAuthIdentity(n) || this.setIsLoading(!1);
        }
    }
    isStaleAuthIdentity(t) {
        return this.cursorAuthenticationService.getCurrentAuthId() !== t;
    }
    addConsumer() {
        this.cursorAuthenticationService.isAuthenticated() && this.refetch();
    }
    removeConsumer() {}
    clearCachedData() {
        this.setStatusData(null), this.setActiveGrantsData([]), this.setThirdPartyUsageNudgeData(null), this.setError(null), this.setIsLoading(!1), this.setAutoSwitchNoticeData(null), this.setAutoSwitchNoticeComposerIdData(void 0), this.setDismissedAutoSwitchStatusFingerprintData(null), this.lastFetchTime = 0, this.fetchInProgress = null;
    }
    setDevStageOverride(t) {
        if (this.setDismissedAutoSwitchStatusFingerprintData(null), t === null) {
            this.setDevOverrideData(null), this.experimentService.clearExperimentOverride(Ape), this.experimentService.clearFeatureFlagOverride("limit_hit_ui_kill_switch");
            return;
        }
        this.experimentService.setExperimentOverride(Ape, {
            group: "treatment"
        }), this.experimentService.setFeatureFlagOverride("limit_hit_ui_kill_switch", !1), this.setDevOverrideData({
            ...nj1(t),
            isDevOverride: !0
        });
    }
    setAutoSwitchNotice(t, e) {
        if (t === null) {
            this.setAutoSwitchNoticeData(null), this.setAutoSwitchNoticeComposerIdData(void 0);
            return;
        }
        this.setDismissedAutoSwitchStatusFingerprintData(null), this.setAutoSwitchNoticeComposerIdData(e);
        const n = this.statusData();
        this.setAutoSwitchNoticeData({
            isInSlowPool: !1,
            stage: Pk.AUTO_SWITCH,
            trayLabel: t,
            ctaLabel: "Get More Usage",
            dismissible: !0,
            limitType: n?.limitType,
            canAdjustOnDemand: n?.canAdjustOnDemand,
            recommendedOnDemandLimitCents: n?.recommendedOnDemandLimitCents,
            onDemandMinCents: n?.onDemandMinCents,
            onDemandMaxCents: n?.onDemandMaxCents,
            currentOnDemandLimitCents: n?.currentOnDemandLimitCents
        });
    }
    dismissCurrentAutoSwitchStatus() {
        const t = yOm({
            status: this.statusAccessor(),
            composerId: this.autoSwitchNoticeComposerIdAccessor()
        });
        t !== null && this.setDismissedAutoSwitchStatusFingerprintData(t);
    }
    dispose() {
        super.dispose();
    }
}, XZr = Re([
    F(0, ss),
    F(1, sa),
    F(2, Cr),
    F(3, UB),
    F(4, Cl)
], XZr), bn(ZW, XZr, 1, 1);

}
