import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Za, na } from "./authenticationService.js";
import { Vvh, jFn } from "./cgh.js";
import { lb, n0 } from "./composerLogService.js";
import { Jh, gJs, s$i } from "./dashboard_pb.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Ut, mn, pd, qn } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { $Vt, HVt } from "./startupUiMarks.js";
import { x } from "./tslib.es6.js";
var iLe, HXi;
export { HXi, iLe };
var __wakaru_rCt_initialized = false;
export function rCt() {
if (__wakaru_rCt_initialized) return;
__wakaru_rCt_initialized = true;
"use strict";
x(), Se(), qn(), Ze(), Pn(), Jh(), Za(), Ha(), n0(), HVt(), iLe = pd("usageDataService"), HXi = class extends we {
    constructor(e, t, n){
        super(), this.cursorAuthenticationService = e, this.reactiveStorageService = t, this._composerLogService = n, this.refreshInterval = 300 * 1e3, this.retryInterval = 1800 * 1e3, this.CACHE_DURATION = 30 * 1e3, this.PLAN_INFO_CACHE_DURATION = 30 * 1e3, this.lastFetchTime = 0, this.lastPlanInfoFetchTime = 0, this.autoRefreshActive = !1, this.activeConsumers = 0, this.fetchInProgress = null, this.planInfoFetchInProgress = null, this._register(this.reactiveStorageService.createScoped(this));
        const [i, r] = Ut(null), [s, o] = Ut(null), [a, c] = Ut(null), [l, u] = Ut(null), [h, p] = Ut(!1), [g, f] = Ut(null), [v, b] = Ut(null), [y, T] = Ut(null), [E, A] = Ut(null), [R, D] = Ut([]), [P, N] = Ut(!0);
        this.displayMessageData = v, this.setDisplayMessageData = b, this.autoModelSelectedDisplayMessageData = y, this.setAutoModelSelectedDisplayMessageData = T, this.namedModelSelectedDisplayMessageData = E, this.setNamedModelSelectedDisplayMessageData = A, this.autoBucketModelsData = R, this.setAutoBucketModelsData = D, this.planUsageData = i, this.setPlanUsageData = r, this.spendLimitUsageData = s, this.setSpendLimitUsageData = o, this.planInfoData = a, this.setPlanInfoData = c, this.nextUpgradeData = l, this.setNextUpgradeData = u, this.isLoadingData = h, this.setIsLoading = p, this.errorData = g, this.setError = f, this.usageDisplayEnabledData = P, this.setUsageDisplayEnabled = N;
        const O = (F)=>{
            this.clearCachedData(), F ? this.activeConsumers > 0 && !this.autoRefreshActive && this.startAutoRefresh() : this.stopAutoRefresh();
        };
        this.cursorAuthenticationService.addLoginChangedListener(O), this._register({
            dispose: ()=>{
                this.cursorAuthenticationService.removeLoginChangedListener(O);
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
    async refetch(e = !1) {
        if (!this.cursorAuthenticationService.isAuthenticated()) return;
        const t = this.fetchPlanInfo(e).catch((r)=>{
            this._composerLogService.error("[UsageDataService] Plan info fetch failed:", r);
        });
        if (this.fetchInProgress) return await t, this.fetchInProgress;
        const n = Date.now();
        if (n - this.lastFetchTime < this.CACHE_DURATION && !this.errorData() && !e) {
            await t;
            return;
        }
        const i = this.performFetch(n);
        this.fetchInProgress = i;
        try {
            await Promise.all([
                i,
                t
            ]);
        } finally{
            this.fetchInProgress === i && (this.fetchInProgress = null);
        }
    }
    async prefetch() {
        if (!this.cursorAuthenticationService.isAuthenticated()) return;
        const e = Date.now();
        this.fetchPlanInfo(!1).catch((n)=>{
            this._composerLogService.error("[UsageDataService] Prefetch plan info failed:", n);
        });
        const t = this.performFetchSilent(e);
        this.fetchInProgress = t;
        try {
            await t;
        } finally{
            this.fetchInProgress === t && (this.fetchInProgress = null);
        }
    }
    async ensurePlanInfo() {
        try {
            await this.fetchPlanInfo(!1);
        } catch (e) {
            this._composerLogService.error("[UsageDataService] Plan info fetch failed:", e);
        }
        return this.planInfoData();
    }
    async performFetchSilent(e) {
        this.setError(null);
        const t = this.cursorAuthenticationService.getCurrentAuthId();
        try {
            const i = await (await this.cursorAuthenticationService.dashboardClient()).getCurrentPeriodUsage(new s$i);
            if (this.isStaleAuthIdentity(t)) return;
            this.applyCurrentPeriodUsageResponse(i), this.lastFetchTime = e;
        } catch (n) {
            if (this.isStaleAuthIdentity(t)) return;
            this._composerLogService.error("[UsageDataService] Failed to prefetch current period usage:", n), this.setError(n instanceof Error ? n.message : "Failed to fetch usage data");
        }
    }
    isStaleAuthIdentity(e) {
        return this.cursorAuthenticationService.getCurrentAuthId() !== e;
    }
    applyCurrentPeriodUsageResponse(e) {
        if (jFn($Vt.didReceiveCurrentPeriodUsage), this.setUsageDisplayEnabled(e.enabled), this.setAutoBucketModelsData(e.autoBucketModels ?? []), e.enabled ? (this.setDisplayMessageData(e.displayMessage), this.setAutoModelSelectedDisplayMessageData(e.autoModelSelectedDisplayMessage ?? null), this.setNamedModelSelectedDisplayMessageData(e.namedModelSelectedDisplayMessage ?? null)) : (this.setDisplayMessageData(null), this.setAutoModelSelectedDisplayMessageData(null), this.setNamedModelSelectedDisplayMessageData(null)), e.planUsage) {
            const t = e.planUsage.totalSpend / 100, n = e.planUsage.includedSpend / 100, i = e.planUsage.bonusSpend / 100, r = e.planUsage.limit / 100, s = e.planUsage.autoSpend === void 0 ? void 0 : e.planUsage.autoSpend / 100, o = e.planUsage.apiSpend === void 0 ? void 0 : e.planUsage.apiSpend / 100, a = r > 0 ? Math.min(n / r * 100, 100) : e.planUsage.totalPercentUsed ?? 0, c = {
                total: t,
                used: n,
                bonus: i,
                limit: r,
                bonusRemaining: e.planUsage?.remainingBonus ?? !1,
                bonusTooltip: e.planUsage?.bonusTooltip,
                usedPercentage: a,
                displayThreshold: e.displayThreshold ?? 50,
                billingCycleEnd: Number(e.billingCycleEnd),
                autoUsed: s,
                apiUsed: o,
                autoPercentUsed: e.planUsage.autoPercentUsed,
                apiPercentUsed: e.planUsage.apiPercentUsed,
                totalPercentUsed: e.planUsage.totalPercentUsed
            };
            this.setPlanUsageData(c);
        } else this.setPlanUsageData(null);
        if (e.spendLimitUsage) {
            const t = e.spendLimitUsage.individualUsed / 100, n = (e.spendLimitUsage.individualLimit ?? 0) / 100, i = n > 0 ? Math.min(t / n * 100, 100) : 0;
            this.setSpendLimitUsageData({
                used: t,
                limit: n,
                percentage: i
            });
        } else this.setSpendLimitUsageData(null);
    }
    async fetchPlanInfo(e = !1) {
        if (!this.cursorAuthenticationService.isAuthenticated()) return;
        if (this.planInfoFetchInProgress) return this.planInfoFetchInProgress;
        const t = Date.now();
        if (!e && t - this.lastPlanInfoFetchTime < this.PLAN_INFO_CACHE_DURATION) return;
        const n = this.performPlanInfoFetch(t);
        this.planInfoFetchInProgress = n;
        try {
            await n;
        } finally{
            this.planInfoFetchInProgress === n && (this.planInfoFetchInProgress = null);
        }
    }
    async performPlanInfoFetch(e) {
        const t = this.cursorAuthenticationService.getCurrentAuthId(), i = await (await this.cursorAuthenticationService.dashboardClient()).getPlanInfo(new gJs);
        this.isStaleAuthIdentity(t) || (i.planInfo ? this.setPlanInfoData({
            planName: i.planInfo.planName,
            includedAmount: i.planInfo.includedAmountCents / 100,
            price: i.planInfo.price ?? void 0,
            billingCycleEnd: i.planInfo.billingCycleEnd !== void 0 ? Number(i.planInfo.billingCycleEnd) : void 0,
            includedUsagePeriod: Vvh(i.planInfo.includedUsagePeriod),
            includedUsageResetsAt: i.planInfo.includedUsageResetsAt !== void 0 ? Number(i.planInfo.includedUsageResetsAt) : void 0,
            isMerged: i.isMerged
        }) : this.setPlanInfoData(null), i.nextUpgrade && i.nextUpgrade.tier ? this.setNextUpgradeData({
            tier: i.nextUpgrade.tier,
            name: i.nextUpgrade.name,
            amount: i.nextUpgrade.includedAmountCents / 100,
            price: i.nextUpgrade.price,
            description: i.nextUpgrade.description,
            dashboardAction: i.nextUpgrade.dashboardAction,
            includedUsagePeriod: Vvh(i.nextUpgrade.includedUsagePeriod)
        }) : this.setNextUpgradeData(null), this.lastPlanInfoFetchTime = e);
    }
    async performFetch(e) {
        this.setIsLoading(!0), this.setError(null);
        const t = this.cursorAuthenticationService.getCurrentAuthId();
        try {
            const i = await (await this.cursorAuthenticationService.dashboardClient()).getCurrentPeriodUsage(new s$i);
            if (this.isStaleAuthIdentity(t)) return;
            this.applyCurrentPeriodUsageResponse(i), this.lastFetchTime = e;
        } catch (n) {
            if (this.isStaleAuthIdentity(t)) return;
            this._composerLogService.error("[UsageDataService] Failed to fetch current period usage:", n), this.setError(n instanceof Error ? n.message : "Failed to fetch usage data"), this.setPlanUsageData(null), this.setSpendLimitUsageData(null), this.setDisplayMessageData(null);
        } finally{
            this.isStaleAuthIdentity(t) || this.setIsLoading(!1);
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
        const e = ()=>{
            if (!this.autoRefreshActive || this.activeConsumers === 0 || !this.cursorAuthenticationService.isAuthenticated()) return;
            const t = this.errorData() ? this.retryInterval : this.refreshInterval;
            this.timeoutId = setTimeout(async ()=>{
                this.autoRefreshActive && this.activeConsumers > 0 && this.cursorAuthenticationService.isAuthenticated() && (await this.refetch(), e());
            }, t);
        };
        e();
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
}, HXi = ie([
    C(0, na),
    C(1, Do),
    C(2, lb)
], HXi), mn(iLe, HXi, 1, 1);

}
