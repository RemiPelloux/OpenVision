import { Gt, Nt, Pn, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { BTk, FTk, HTk, N1g, OTk, RVt, UTk, WTk, jTk, zls } from "./Ycg.js";
import { FJ } from "./aiErrorService.js";
import { ZE, qn } from "./async.js";
import { Rs, ss } from "./authenticationService.js";
import { gxi, mxi } from "./billingStatusBannerShared.js";
import { cTe } from "./composerErrorActions.js";
import { dp } from "./connect.js";
import { Ub, py } from "./cursorCredsService.js";
import { Du, f6a } from "./dashboard_pb.js";
import { Rn } from "./extensions.js";
import { Od, Tc } from "./host.js";
import { It } from "./instantiation.js";
import { Ji, Li } from "./log.js";
import { Ks, Wr, Yn } from "./notification.js";
import { kc, qc } from "./opener.js";
import { E } from "./tslib.es6.js";
import { Z_, fS } from "./uiOverlayService.js";
import { QW, ZW } from "./usageLimitPolicyStatusService.js";
import { F, Re } from "./userDataProfile.js";
import { Hu } from "./utils_pb.js";
import { M1g, P1g, Xls } from "./xaiCommerceBearerSource.js";
var $hl, L1g, O1g, F1g, B1g, U1g, j1g, $1g, H1g, Hhl, _V, W1g, G1g, Zls;
export { $1g, $hl, B1g, F1g, G1g, H1g, Hhl, L1g, O1g, U1g, W1g, Zls, _V, j1g };
var __wakaru_MX_initialized = false;
export function MX() {
if (__wakaru_MX_initialized) return;
__wakaru_MX_initialized = true;
"use strict";
E(), dp(), qn(), Gt(), Qe(), Rn(), It(), Ji(), Ks(), qc(), Du(), Hu(), QW(), py(), FJ(), cTe(), Rs(), Od(), fS(), gxi(), M1g(), $hl = "cursor.unifiedSkuBilling.openBuyCredits", L1g = 2e4, O1g = 5 * 6e4, F1g = 2500, B1g = 30 * 6e4, U1g = 24, j1g = 5, $1g = "unifiedSkuBilling.previousAccountTopUp", H1g = 15e3, Hhl = 10 * 6e4, _V = Il("unifiedSkuBillingService"), W1g = "prepaidAutoTopUpPaymentMethodRequired", G1g = "prepaidAutoTopUpCardCheckUnavailable", Zls = class extends st {
    constructor(t, e, n, i, r, s, o, a){
        super(), this.cursorAuthenticationService = t, this.usageLimitPolicyStatusService = e, this.cursorCredsService = n, this.openerService = i, this.hostService = r, this.logService = s, this.notificationService = o, this.uiOverlayService = a, this._onDidPurchaseCredits = this._register(new tt), this.onDidPurchaseCredits = this._onDidPurchaseCredits.event, this._onDidChangeWeeklyUsageLimitClearing = this._register(new tt), this.onDidChangeWeeklyUsageLimitClearing = this._onDidChangeWeeklyUsageLimitClearing.event, this.weeklyUsageLimitClears = 0, this.weeklyUsageLimitClearEpoch = 0, this.retiredPrepaidClients = new Set, this.loginEpoch = 0, this.bearerSource = new P1g(()=>this.cursorAuthenticationService.dashboardClient(), f6a.PREPAID_TOP_UP), this.buyCreditsOpeners = [], this.pendingTopUps = this._register(new Nt), this.claimedPurchaseIds = new Set;
        let l = this.cursorAuthenticationService.getCurrentAuthId();
        const c = ()=>{
            const u = this.cursorAuthenticationService.getCurrentAuthId();
            u !== l && (l = u, this.disposePrepaidClient());
        };
        this.cursorAuthenticationService.addLoginChangedListener(c), this._register({
            dispose: ()=>{
                this.cursorAuthenticationService.removeLoginChangedListener(c), this.disposePrepaidClient();
            }
        }), this._register(this.cursorAuthenticationService.onDidChangeActiveTeamId(()=>this.retirePrepaidClient()));
    }
    getPrepaidClient() {
        if (this.prepaidClient === void 0) {
            const t = {}, e = this.createPrepaidClient(this.loginEpoch, t);
            t.promise = e, this.prepaidClient = e, e.catch((n)=>{
                this.prepaidClient === e && (this.prepaidClient = void 0), n instanceof Xls || this.logService.warn(`[unifiedSkuBilling] the wallet client could not be set up: ${n instanceof Error ? n.message : String(n)}`);
            });
        }
        return this.prepaidClient;
    }
    async createPrepaidClient(t, e) {
        const [n, i] = await Promise.all([
            import("./workbench.xai-commerce-prepaid.js"),
            this.bearerSource.credential()
        ]), r = ()=>this.loginEpoch === t ? this.bearerSource.token() : Promise.reject(new Error("The account changed; this wallet client is stale")), s = HTk(()=>this.loginEpoch === t ? this.cursorAuthenticationService.dashboardClient() : Promise.reject(new Error("The account changed; this wallet client is stale")), n), o = jTk(await this.createPrepaidEdge(i, r, s), (a)=>zls(a, {
                trustedWebsiteUrl: this.cursorCredsService.getWebsiteUrl()
            }), (a)=>this.logService.warn(`[unifiedSkuBilling] refused a ${a} URL from the billing edge that is not plain https`));
        return n.createPrepaidClient({
            edge: UTk(o, (a)=>{
                this.loginEpoch === t && e.promise !== void 0 ? this.handleTopUpReport(a, e.promise) : this.reportPreviousAccountTopUp(a);
            })
        });
    }
    reportPreviousAccountTopUp(t) {
        if (this._store.isDisposed) return;
        const e = FTk(t.kind === "handoff" ? t.amount : t.outcome.amount), n = t.kind === "outcome" ? t.outcome.kind : "processing", i = n === "succeeded" ? {
            severity: Yn.Info,
            message: "Credits added to your previous account",
            toastDescription: `The ${e} purchase you started before the account changed went through on that account.`
        } : n === "failed" ? {
            severity: Yn.Warning,
            message: "Purchase didn't go through",
            toastDescription: `The ${e} purchase you started before the account changed was declined. Nothing was charged.`
        } : {
            severity: Yn.Info,
            message: "Purchase still processing",
            toastDescription: `The ${e} purchase you started before the account changed is still processing on that account. Its billing settings will show the result.`
        };
        this.logService.info(`[unifiedSkuBilling] a ${e} top-up settled as ${n} after the account changed`), this.notificationService.notify({
            id: $1g,
            ...i,
            toastDurationMs: H1g,
            closeNotificationOnToastDismiss: !0
        });
    }
    async createPrepaidEdge(t, e, n) {
        const { createXaiPrepaidEdge: i, withCursorOwnedSettings: r } = await import("./workbench.xai-commerce-prepaid.js");
        return r(i({
            baseUrl: t.edgeBaseUrl,
            getBearer: e
        }), n);
    }
    handleTopUpReport(t, e) {
        if (t.kind === "handoff") {
            this.followPendingPurchase(t.amount, e);
            return;
        }
        const { outcome: n } = t;
        switch(n.kind){
            case "succeeded":
                this.creditsPurchased(n.amount);
                return;
            case "processing":
            case "invoice":
                if (n.kind === "invoice") {
                    const i = zls(n.invoiceUrl, {
                        trustedWebsiteUrl: this.cursorCredsService.getWebsiteUrl()
                    });
                    i !== void 0 && this.openerService.open(i, {
                        openExternal: !0
                    });
                }
                this.followPendingPurchase(n.amount, e);
                return;
            case "failed":
                e.then((i)=>i.invalidateWallet().then(()=>i.fetchWallet())).catch(()=>{});
                return;
        }
    }
    creditsPurchased(t) {
        (this.purchaseSurface ?? this.buyCreditsOpeners.at(-1))?.creditsPurchased?.(t), this._onDidPurchaseCredits.fire({
            amount: t
        }), this.clearWeeklyUsageLimit();
    }
    followPendingPurchase(t, e) {
        const n = this.loginEpoch, i = new Nt, r = ()=>{
            this.pendingTopUps.delete(i);
        }, s = Date.now(), o = s + B1g;
        let a, l = !1, c = 0, u = 0;
        const d = async ()=>{
            if (this.loginEpoch !== n) {
                r();
                return;
            }
            if (!l) {
                if (Date.now() > o || c >= U1g) {
                    r();
                    return;
                }
                l = !0, c += 1;
                try {
                    const f = await e;
                    await f.invalidateWallet();
                    const _ = await f.fetchWallet();
                    if (u = 0, this.loginEpoch !== n) {
                        r();
                        return;
                    }
                    a ??= N1g(_, s - Hhl);
                    const b = WTk(_, {
                        amount: t,
                        knownIds: a,
                        createdAfter: s - Hhl,
                        claimedIds: this.claimedPurchaseIds
                    });
                    switch(b.state){
                        case "succeeded":
                            r(), this.claimedPurchaseIds.add(b.id), this.creditsPurchased(t);
                            return;
                        case "failed":
                            r(), this.claimedPurchaseIds.add(b.id);
                            return;
                        default:
                            return;
                    }
                } catch  {
                    u += 1, u >= j1g && r();
                } finally{
                    l = !1;
                }
            }
        };
        e.then((f)=>{
            const _ = f.peekWallet();
            a === void 0 && _ !== void 0 && (a = N1g(_));
        }, ()=>{}), i.add(this.hostService.onDidChangeFocus((f)=>{
            f && d();
        }));
        const h = i.add(new ZE);
        let p;
        const g = ()=>{
            i.isDisposed || (p = BTk(p), h.cancelAndSet(()=>{
                this.hostService.hasFocus && d(), g();
            }, p));
        };
        h.cancelAndSet(()=>{
            d(), g();
        }, F1g), this.pendingTopUps.add(i);
    }
    get isWeeklyUsageLimitClearing() {
        return this.weeklyUsageLimitClears > 0;
    }
    async clearWeeklyUsageLimit() {
        const t = this.weeklyUsageLimitClearEpoch;
        this.setWeeklyUsageLimitClears(this.weeklyUsageLimitClears + 1);
        try {
            await this.usageLimitPolicyStatusService.refetch(!0), await this.usageLimitPolicyStatusService.refetch(!0);
        } finally{
            this.weeklyUsageLimitClearEpoch === t && this.setWeeklyUsageLimitClears(this.weeklyUsageLimitClears - 1);
        }
    }
    setWeeklyUsageLimitClears(t) {
        const e = this.isWeeklyUsageLimitClearing;
        this.weeklyUsageLimitClears = t, e !== this.isWeeklyUsageLimitClearing && this._onDidChangeWeeklyUsageLimitClearing.fire(this.isWeeklyUsageLimitClearing);
    }
    openBuyCredits(t) {
        const e = this.buyCreditsOpeners.at(-1);
        if (e !== void 0) {
            e.open({
                entrypoint: t?.entrypoint
            }) !== !1 && (this.purchaseSurface = e);
            return;
        }
        this.openBillingDashboard();
    }
    billingDashboardUrl() {
        return `${this.cursorCredsService.getSettingsUrl()}${mxi}`;
    }
    openBillingDashboard() {
        this.openerService.open(this.billingDashboardUrl(), {
            openExternal: !0
        });
    }
    openUnifiedDashboard() {
        this.openerService.open(`${this.cursorCredsService.getWebsiteUrl()}/v2`, {
            openExternal: !0
        });
    }
    openUnifiedPlanPicker() {
        this.openerService.open(`${this.cursorCredsService.getWebsiteUrl()}/v2/billing?openUpgrade=true`, {
            openExternal: !0
        });
    }
    runUpgradeHandOff(t) {
        return RVt({
            cursorAuthService: this.cursorAuthenticationService,
            notificationService: this.notificationService,
            openerService: this.openerService,
            cursorCredsService: this.cursorCredsService,
            uiOverlayService: this.uiOverlayService
        }, t);
    }
    openBillingEdgeUrl(t) {
        const e = zls(t, {
            trustedWebsiteUrl: this.cursorCredsService.getWebsiteUrl()
        });
        if (e === void 0) {
            this.logService.warn(`[unifiedSkuBilling] refused to open a billing edge link that is not plain https (${OTk(t)})`);
            return;
        }
        this.openerService.open(e, {
            openExternal: !0
        });
    }
    registerBuyCreditsOpener(t) {
        const e = ()=>{
            const r = this.buyCreditsOpeners.indexOf(t);
            r !== -1 && this.buyCreditsOpeners.splice(r, 1);
        };
        this.buyCreditsOpeners.push(t);
        let n = !1;
        const i = Pn(()=>{
            n = !0, e(), this.purchaseSurface === t && (this.purchaseSurface = void 0);
        });
        return {
            dispose: ()=>i.dispose(),
            activate: ()=>{
                n || (e(), this.buyCreditsOpeners.push(t), this.purchaseSurface = t);
            }
        };
    }
    retirePrepaidClient() {
        const t = this.prepaidClient;
        t !== void 0 && (this.retiredPrepaidClients.add(t), this.prepaidClient = void 0), this.bearerSource.reset();
    }
    disposePrepaidClient() {
        const t = [
            ...this.retiredPrepaidClients
        ];
        this.prepaidClient !== void 0 && t.push(this.prepaidClient), this.retiredPrepaidClients.clear(), this.prepaidClient = void 0, this.loginEpoch += 1, this.bearerSource.reset(), this.pendingTopUps.clear(), this.claimedPurchaseIds.clear(), this.weeklyUsageLimitClearEpoch += 1, this.setWeeklyUsageLimitClears(0);
        for (const e of t)e.then((n)=>n.dispose(), ()=>{});
    }
}, Zls = Re([
    F(0, ss),
    F(1, ZW),
    F(2, Ub),
    F(3, kc),
    F(4, Tc),
    F(5, Li),
    F(6, Wr),
    F(7, Z_)
], Zls), bn(_V, Zls, 1, 1);

}
