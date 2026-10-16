import { Mzt, vig } from "./Aeg.js";
import { Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rs, ss } from "./authenticationService.js";
import { iI, w1 } from "./composerLogService.js";
import { Du, O9a, OVr } from "./dashboard_pb.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Bxn, RTt } from "./startupUiMarks.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Wt, pi } from "./ze.js";
var BJ, urs;
export { BJ, urs };
var __wakaru_Jpe_initialized = false;
export function Jpe() {
if (__wakaru_Jpe_initialized) return;
__wakaru_Jpe_initialized = true;
"use strict";
E(), Qe(), pi(), It(), Rn(), Du(), Rs(), el(), iI(), Bxn(), BJ = Il("usageDataService"), urs = class extends st {
    constructor(t, e, n){
        super(), this.cursorAuthenticationService = t, this.reactiveStorageService = e, this._composerLogService = n, this.refreshInterval = 300 * 1e3, this.retryInterval = 1800 * 1e3, this.CACHE_DURATION = 30 * 1e3, this.PLAN_INFO_CACHE_DURATION = 30 * 1e3, this.lastFetchTime = 0, this.lastPlanInfoFetchTime = 0, this.autoRefreshActive = !1, this.activeConsumers = 0, this.fetchInProgress = null, this.planInfoFetchInProgress = null, this._register(this.reactiveStorageService.createScoped(this));
        const [i, r] = Wt(null), [s, o] = Wt(null), [a, l] = Wt(null), [c, u] = Wt(null), [d, h] = Wt(!1), [p, g] = Wt(null), [f, _] = Wt(null), [b, y] = Wt(null), [S, k] = Wt(null), [C, T] = Wt([]), [I, A] = Wt(!0);
        this.displayMessageData = f, this.setDisplayMessageData = _, this.autoModelSelectedDisplayMessageData = b, this.setAutoModelSelectedDisplayMessageData = y, this.namedModelSelectedDisplayMessageData = S, this.setNamedModelSelectedDisplayMessageData = k, this.autoBucketModelsData = C, this.setAutoBucketModelsData = T, this.planUsageData = i, this.setPlanUsageData = r, this.spendLimitUsageData = s, this.setSpendLimitUsageData = o, this.planInfoData = a, this.setPlanInfoData = l, this.nextUpgradeData = c, this.setNextUpgradeData = u, this.isLoadingData = d, this.setIsLoading = h, this.errorData = p, this.setError = g, this.usageDisplayEnabledData = I, this.setUsageDisplayEnabled = A;
        const P = (M)=>{
            this.clearCachedData(), M ? this.activeConsumers > 0 && !this.autoRefreshActive && this.startAutoRefresh() : this.stopAutoRefresh();
        };
        this.cursorAuthenticationService.addLoginChangedListener(P), this._register({
            dispose: ()=>{
                this.cursorAuthenticationService.removeLoginChangedListener(P);
            }
        });
    }
    get displayMessage() {
        return this.displayMessageData;
    }
    get autoModelSelectedDisplayMessage() {
        return this.autoModelSelectedDisplayMessageData;
    }
    get namedModelSelectedDisplayMessage() {
        return this.namedModelSelectedDisplayMessageData;
    }
    get autoBucketModels() {
        return this.autoBucketModelsData;
    }
    get planUsage() {
        return this.planUsageData;
    }
    get spendLimitUsage() {
        return this.spendLimitUsageData;
    }
    get planInfo() {
        return this.planInfoData;
    }
    get nextUpgrade() {
        return this.nextUpgradeData;
    }
    get isLoading() {
        return this.isLoadingData;
    }
    get error() {
        return this.errorData;
    }
    get usageDisplayEnabled() {
        return this.usageDisplayEnabledData;
    }
    get hasCachedData() {
        return ()=>this.planUsageData() !== null || this.planInfoData() !== null;
    }
    async refetch(t = !1) {
        if (!this.cursorAuthenticationService.isAuthenticated()) return;
        const e = this.fetchPlanInfo(t).catch((r)=>{
            this._composerLogService.error("[UsageDataService] Plan info fetch failed:", r);
        });
        if (this.fetchInProgress) return await e, this.fetchInProgress;
        const n = Date.now();
        if (n - this.lastFetchTime < this.CACHE_DURATION && !this.errorData() && !t) {
            await e;
            return;
        }
        const i = this.performFetch(n);
        this.fetchInProgress = i;
        try {
            await Promise.all([
                i,
                e
            ]);
        } finally{
            this.fetchInProgress === i && (this.fetchInProgress = null);
        }
    }
    async prefetch() {
        if (!this.cursorAuthenticationService.isAuthenticated()) return;
        const t = Date.now();
        this.fetchPlanInfo(!1).catch((n)=>{
            this._composerLogService.error("[UsageDataService] Prefetch plan info failed:", n);
        });
        const e = this.performFetchSilent(t);
        this.fetchInProgress = e;
        try {
            await e;
        } finally{
            this.fetchInProgress === e && (this.fetchInProgress = null);
        }
    }
    async ensurePlanInfo() {
        try {
            await this.fetchPlanInfo(!1);
        } catch (t) {
            this._composerLogService.error("[UsageDataService] Plan info fetch failed:", t);
        }
        return this.planInfoData();
    }
    async performFetchSilent(t) {
        this.setError(null);
        const e = this.cursorAuthenticationService.getCurrentAuthId();
        try {
            const i = await (await this.cursorAuthenticationService.dashboardClient()).getCurrentPeriodUsage(new OVr);
            if (this.isStaleAuthIdentity(e)) return;
            this.applyCurrentPeriodUsageResponse(i), this.lastFetchTime = t;
        } catch (n) {
            if (this.isStaleAuthIdentity(e)) return;
            this._composerLogService.error("[UsageDataService] Failed to prefetch current period usage:", n), this.setError(n instanceof Error ? n.message : "Failed to fetch usage data");
        }
    }
    isStaleAuthIdentity(t) {
        return this.cursorAuthenticationService.getCurrentAuthId() !== t;
    }
    applyCurrentPeriodUsageResponse(t) {
        if (Mzt(RTt.didReceiveCurrentPeriodUsage), this.setUsageDisplayEnabled(t.enabled), this.setAutoBucketModelsData(t.autoBucketModels ?? []), t.enabled ? (this.setDisplayMessageData(t.displayMessage), this.setAutoModelSelectedDisplayMessageData(t.autoModelSelectedDisplayMessage ?? null), this.setNamedModelSelectedDisplayMessageData(t.namedModelSelectedDisplayMessage ?? null)) : (this.setDisplayMessageData(null), this.setAutoModelSelectedDisplayMessageData(null), this.setNamedModelSelectedDisplayMessageData(null)), t.planUsage) {
            const e = t.planUsage.totalSpend / 100, n = t.planUsage.includedSpend / 100, i = t.planUsage.bonusSpend / 100, r = t.planUsage.limit / 100, s = t.planUsage.autoSpend === void 0 ? void 0 : t.planUsage.autoSpend / 100, o = t.planUsage.apiSpend === void 0 ? void 0 : t.planUsage.apiSpend / 100, a = r > 0 ? Math.min(n / r * 100, 100) : t.planUsage.totalPercentUsed ?? 0, l = {
                total: e,
                used: n,
                bonus: i,
                limit: r,
                bonusRemaining: t.planUsage?.remainingBonus ?? !1,
                bonusTooltip: t.planUsage?.bonusTooltip,
                usedPercentage: a,
                displayThreshold: t.displayThreshold ?? 50,
                billingCycleEnd: Number(t.billingCycleEnd),
                autoUsed: s,
                apiUsed: o,
                autoPercentUsed: t.planUsage.autoPercentUsed,
                apiPercentUsed: t.planUsage.apiPercentUsed,
                totalPercentUsed: t.planUsage.totalPercentUsed
            };
            this.setPlanUsageData(l);
        } else this.setPlanUsageData(null);
        if (t.spendLimitUsage) {
            const e = t.spendLimitUsage.individualUsed / 100, n = (t.spendLimitUsage.individualLimit ?? 0) / 100, i = n > 0 ? Math.min(e / n * 100, 100) : 0;
            this.setSpendLimitUsageData({
                used: e,
                limit: n,
                percentage: i
            });
        } else this.setSpendLimitUsageData(null);
    }
    async fetchPlanInfo(t = !1) {
        if (!this.cursorAuthenticationService.isAuthenticated()) return;
        if (this.planInfoFetchInProgress) return this.planInfoFetchInProgress;
        const e = Date.now();
        if (!t && e - this.lastPlanInfoFetchTime < this.PLAN_INFO_CACHE_DURATION) return;
        const n = this.performPlanInfoFetch(e);
        this.planInfoFetchInProgress = n;
        try {
            await n;
        } finally{
            this.planInfoFetchInProgress === n && (this.planInfoFetchInProgress = null);
        }
    }
    async performPlanInfoFetch(t) {
        const e = this.cursorAuthenticationService.getCurrentAuthId(), i = await (await this.cursorAuthenticationService.dashboardClient()).getPlanInfo(new O9a);
        this.isStaleAuthIdentity(e) || (i.planInfo ? this.setPlanInfoData({
            planName: i.planInfo.planName,
            includedAmount: i.planInfo.includedAmountCents / 100,
            price: i.planInfo.price ?? void 0,
            billingCycleEnd: i.planInfo.billingCycleEnd !== void 0 ? Number(i.planInfo.billingCycleEnd) : void 0,
            includedUsagePeriod: vig(i.planInfo.includedUsagePeriod),
            includedUsageResetsAt: i.planInfo.includedUsageResetsAt !== void 0 ? Number(i.planInfo.includedUsageResetsAt) : void 0,
            isMerged: i.isMerged
        }) : this.setPlanInfoData(null), i.nextUpgrade && i.nextUpgrade.tier ? this.setNextUpgradeData({
            tier: i.nextUpgrade.tier,
            name: i.nextUpgrade.name,
            amount: i.nextUpgrade.includedAmountCents / 100,
            price: i.nextUpgrade.price,
            description: i.nextUpgrade.description,
            dashboardAction: i.nextUpgrade.dashboardAction,
            includedUsagePeriod: vig(i.nextUpgrade.includedUsagePeriod)
        }) : this.setNextUpgradeData(null), this.lastPlanInfoFetchTime = t);
    }
    async performFetch(t) {
        this.setIsLoading(!0), this.setError(null);
        const e = this.cursorAuthenticationService.getCurrentAuthId();
        try {
            const i = await (await this.cursorAuthenticationService.dashboardClient()).getCurrentPeriodUsage(new OVr);
            if (this.isStaleAuthIdentity(e)) return;
            this.applyCurrentPeriodUsageResponse(i), this.lastFetchTime = t;
        } catch (n) {
            if (this.isStaleAuthIdentity(e)) return;
            this._composerLogService.error("[UsageDataService] Failed to fetch current period usage:", n), this.setError(n instanceof Error ? n.message : "Failed to fetch usage data"), this.setPlanUsageData(null), this.setSpendLimitUsageData(null), this.setDisplayMessageData(null);
        } finally{
            this.isStaleAuthIdentity(e) || this.setIsLoading(!1);
        }
    }
    addConsumer() {
        this.activeConsumers++, this.activeConsumers === 1 && !this.autoRefreshActive && this.cursorAuthenticationService.isAuthenticated() && this.startAutoRefresh();
    }
    removeConsumer() {
        this.activeConsumers = Math.max(0, this.activeConsumers - 1), this.activeConsumers === 0 && this.autoRefreshActive && this.stopAutoRefresh();
    }
    startAutoRefresh() {
        if (this.autoRefreshActive || !this.cursorAuthenticationService.isAuthenticated()) return;
        this.stopAutoRefresh(), this.autoRefreshActive = !0;
        const t = ()=>{
            if (!this.autoRefreshActive || this.activeConsumers === 0 || !this.cursorAuthenticationService.isAuthenticated()) return;
            const e = this.errorData() ? this.retryInterval : this.refreshInterval;
            this.timeoutId = setTimeout(async ()=>{
                this.autoRefreshActive && this.activeConsumers > 0 && this.cursorAuthenticationService.isAuthenticated() && (await this.refetch(), t());
            }, e);
        };
        t();
    }
    stopAutoRefresh() {
        this.autoRefreshActive = !1, this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = void 0);
    }
    clearCachedData() {
        this.setPlanUsageData(null), this.setSpendLimitUsageData(null), this.setDisplayMessageData(null), this.setAutoModelSelectedDisplayMessageData(null), this.setNamedModelSelectedDisplayMessageData(null), this.setAutoBucketModelsData([]), this.setPlanInfoData(null), this.setNextUpgradeData(null), this.setError(null), this.setIsLoading(!1), this.setUsageDisplayEnabled(!0), this.lastFetchTime = 0, this.lastPlanInfoFetchTime = 0, this.fetchInProgress = null, this.planInfoFetchInProgress = null;
    }
    dispose() {
        this.stopAutoRefresh(), super.dispose();
    }
}, urs = Re([
    F(0, ss),
    F(1, sa),
    F(2, w1)
], urs), bn(BJ, urs, 1, 1);

}
