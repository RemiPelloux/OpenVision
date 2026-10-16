import { LVd, PVd, axv, gxv, oxv, pxv, sxv } from "./A3u.js";
import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Za, na } from "./authenticationService.js";
import { Jh, a$i, c$i, hw } from "./dashboard_pb.js";
import { Hee, KU } from "./debugNamespaceService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { EUe, _et } from "./limitHitExperimentUtils.js";
import { Ut, mn, pd, qn } from "./qIc.js";
import { Gs, Ya } from "./quickInput.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { x } from "./tslib.es6.js";
var OVd, Ukt, s2n, o2n, cji, FVd, a2n, BVd, UVd, lji;
export { BVd, FVd, OVd, UVd, Ukt, a2n, cji, lji, o2n, s2n };
var __wakaru_bet_initialized = false;
export function bet() {
if (__wakaru_bet_initialized) return;
__wakaru_bet_initialized = true;
"use strict";
x(), Se(), qn(), Ze(), Pn(), Jh(), _et(), Za(), Ha(), qs(), Hee(), Ya(), OVd = [
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
], Ukt = pd("usageLimitPolicyStatusService"), s2n = 5000n, o2n = 50000n, cji = 30000n, FVd = "You're paused until your usage resets.", a2n = {
    canAdjustOnDemand: !0,
    onDemandMinCents: s2n,
    onDemandMaxCents: o2n,
    recommendedOnDemandLimitCents: cji
}, BVd = "You are out of usage. Switch to Auto or add usage to continue.", UVd = new Set([
    "auto",
    "default"
]), lji = class extends we {
    constructor(e, t, n, i, r){
        super(), this.cursorAuthenticationService = e, this.reactiveStorageService = t, this.experimentService = n, this.quickInputService = r, this.CACHE_DURATION = 10 * 1e3, this.lastFetchTime = 0, this.fetchInProgress = null, this._register(this.reactiveStorageService.createScoped(this));
        const [s, o] = Ut(null), [a, c] = Ut([]), [l, u] = Ut(null), [h, p] = Ut(!1), [g, f] = Ut(null), [v, b] = Ut(null), [y, T] = Ut(null), [E, A] = Ut(void 0), [R, D] = Ut(null);
        this.statusData = s, this.setStatusData = o, this.activeGrantsData = a, this.setActiveGrantsData = c, this.thirdPartyUsageNudgeData = l, this.setThirdPartyUsageNudgeData = u, this.isLoadingData = h, this.setIsLoading = p, this.errorData = g, this.setError = f, this.devOverrideData = v, this.setDevOverrideData = b, this.autoSwitchNoticeData = y, this.setAutoSwitchNoticeData = T, this.autoSwitchNoticeComposerIdData = E, this.setAutoSwitchNoticeComposerIdData = A, this.dismissedAutoSwitchStatusFingerprintData = R, this.setDismissedAutoSwitchStatusFingerprintData = D, this.statusAccessor = ()=>{
            const N = this.devOverrideData();
            if (N !== null) return N;
            const O = this.statusData();
            return O !== null && (O.isInSlowPool || (O.stage ?? hw.UNSPECIFIED) !== hw.UNSPECIFIED) ? O : this.autoSwitchNoticeData() ?? O;
        }, this.autoSwitchNoticeComposerIdAccessor = ()=>{
            if (this.devOverrideData() !== null) return;
            const N = this.statusData();
            if (!(N !== null && (N.isInSlowPool || (N.stage ?? hw.UNSPECIFIED) !== hw.UNSPECIFIED))) return this.autoSwitchNoticeData() !== null ? this.autoSwitchNoticeComposerIdData() : void 0;
        }, this.isCurrentAutoSwitchStatusDismissedAccessor = ()=>{
            const N = LVd({
                status: this.statusAccessor(),
                composerId: this.autoSwitchNoticeComposerIdAccessor()
            });
            return pxv(N, this.dismissedAutoSwitchStatusFingerprintData());
        }, this._register(i.register("simulateLimitHitStage", async (N)=>{
            const O = N ?? await this.pickDebugLimitHitStage();
            if (O === void 0) return "limit_hit_ui: simulation cancelled";
            if (O === null) return this.setDevStageOverride(null), "limit_hit_ui: simulation cleared";
            const F = oxv(O);
            return this.setDevStageOverride(F), `limit_hit_ui: simulating ${O} (treatment forced on)`;
        })), this._register(i.register("clearLimitHitSimulation", ()=>(this.setDevStageOverride(null), "limit_hit_ui: simulation cleared")));
        const P = (N)=>{
            this.clearCachedData();
        };
        this.cursorAuthenticationService.addLoginChangedListener(P), this._register({
            dispose: ()=>{
                this.cursorAuthenticationService.removeLoginChangedListener(P);
            }
        });
    }
    async pickDebugLimitHitStage() {
        const e = axv(this.devOverrideData()?.stage), t = this.devOverrideData() !== null, n = OVd.map((r)=>({
                ...r,
                description: r.stage === null && !t || r.stage === e ? "Current" : void 0
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
    async refetch(e = !1) {
        if (!this.cursorAuthenticationService.isAuthenticated()) return;
        if (this.fetchInProgress) return this.fetchInProgress;
        const t = Date.now();
        if (t - this.lastFetchTime < this.CACHE_DURATION && !this.errorData() && !e) return;
        const n = this.performFetch(t, new a$i({
            midConversationModelRecommendationContext: new c$i({
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
    async refetchForModelRecommendation(e) {
        if (!this.cursorAuthenticationService.isAuthenticated()) return;
        for(; this.fetchInProgress !== null;)await this.fetchInProgress;
        const t = Date.now(), n = this.performFetch(t, new a$i({
            midConversationModelRecommendationContext: e
        })), i = n.then(()=>{});
        this.fetchInProgress = i;
        try {
            return (await n).modelRecommendationNudge;
        } finally{
            this.fetchInProgress === i && (this.fetchInProgress = null);
        }
    }
    async performFetch(e, t) {
        this.setIsLoading(!0), this.setError(null);
        const n = this.cursorAuthenticationService.getCurrentAuthId();
        try {
            const r = await (await this.cursorAuthenticationService.dashboardClient()).getUsageLimitStatusAndActiveGrants(t);
            if (this.isStaleAuthIdentity(n)) return {
                success: !1
            };
            const s = r.usageLimitPolicyStatus, o = s?.features && Object.keys(s.features).length > 0 ? Object.fromEntries(Object.entries(s.features).map(([g, f])=>{
                try {
                    return [
                        g,
                        JSON.parse(f)
                    ];
                } catch (v) {
                    return console.warn("[USAGE_LIMIT_POLICY] Failed to parse feature value", {
                        key: g,
                        value: f,
                        error: v
                    }), [
                        g,
                        f
                    ];
                }
            })) : void 0, a = s?.primaryButton, c = s?.secondaryButton, l = {
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
                secondaryButton: c,
                stage: s?.stage ?? hw.UNSPECIFIED,
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
            this.setStatusData(l), PVd(l) || this.setDismissedAutoSwitchStatusFingerprintData(null);
            const u = r.activeGrants.map((g)=>({
                    grantId: g.grantId,
                    totalCents: g.totalCents,
                    remainingCents: g.remainingCents,
                    expiresAtMs: g.expiresAtMs,
                    allowedModelIds: g.allowedModelIds,
                    allowedModelTags: g.allowedModelTags,
                    allowedModelSelections: g.allowedModelSelections,
                    grantType: g.grantType,
                    slownessMs: g.slownessMs,
                    source: g.source,
                    campaignName: g.campaignName,
                    showInClient: g.showInClient,
                    allowedClientTypes: g.allowedClientTypes ?? []
                }));
            this.setActiveGrantsData(u);
            const h = r.thirdPartyUsageNudge;
            h !== void 0 && this.setThirdPartyUsageNudgeData({
                experimentName: h.experimentName,
                group: h.group,
                threshold: h.threshold,
                cycleId: h.cycleId,
                targetModel: h.targetModel,
                label: h.label,
                description: h.description.length > 0 ? h.description : void 0,
                ctaLabel: h.ctaLabel,
                nudgeId: h.nudgeId
            }), this.lastFetchTime = e;
            const p = r.modelRecommendationNudge;
            return {
                success: !0,
                modelRecommendationNudge: sxv(p) ? p : void 0
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
    isStaleAuthIdentity(e) {
        return this.cursorAuthenticationService.getCurrentAuthId() !== e;
    }
    addConsumer() {
        this.cursorAuthenticationService.isAuthenticated() && this.refetch();
    }
    removeConsumer() {}
    clearCachedData() {
        this.setStatusData(null), this.setActiveGrantsData([]), this.setThirdPartyUsageNudgeData(null), this.setError(null), this.setIsLoading(!1), this.setAutoSwitchNoticeData(null), this.setAutoSwitchNoticeComposerIdData(void 0), this.setDismissedAutoSwitchStatusFingerprintData(null), this.lastFetchTime = 0, this.fetchInProgress = null;
    }
    setDevStageOverride(e) {
        if (this.setDismissedAutoSwitchStatusFingerprintData(null), e === null) {
            this.setDevOverrideData(null), this.experimentService.clearExperimentOverride(EUe), this.experimentService.clearFeatureFlagOverride("limit_hit_ui_kill_switch");
            return;
        }
        this.experimentService.setExperimentOverride(EUe, {
            group: "treatment"
        }), this.experimentService.setFeatureFlagOverride("limit_hit_ui_kill_switch", !1), this.setDevOverrideData({
            ...gxv(e),
            isDevOverride: !0
        });
    }
    setAutoSwitchNotice(e, t) {
        if (e === null) {
            this.setAutoSwitchNoticeData(null), this.setAutoSwitchNoticeComposerIdData(void 0);
            return;
        }
        this.setDismissedAutoSwitchStatusFingerprintData(null), this.setAutoSwitchNoticeComposerIdData(t);
        const n = this.statusData();
        this.setAutoSwitchNoticeData({
            isInSlowPool: !1,
            stage: hw.AUTO_SWITCH,
            trayLabel: e,
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
        const e = LVd({
            status: this.statusAccessor(),
            composerId: this.autoSwitchNoticeComposerIdAccessor()
        });
        e !== null && this.setDismissedAutoSwitchStatusFingerprintData(e);
    }
    dispose() {
        super.dispose();
    }
}, lji = ie([
    C(0, na),
    C(1, Do),
    C(2, Kr),
    C(3, KU),
    C(4, Gs)
], lji), mn(Ukt, lji, 1, 1);

}
