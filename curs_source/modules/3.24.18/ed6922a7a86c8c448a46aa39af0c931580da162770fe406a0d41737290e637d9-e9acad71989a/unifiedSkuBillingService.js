import { He, Se, bt, rn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { fq } from "./aiErrorService.js";
import { bn, wE } from "./async.js";
import { Za, na } from "./authenticationService.js";
import { LBn, htr } from "./billingStatusBannerShared.js";
import { tP } from "./cgh.js";
import { Rs } from "./code_3.js";
import { N8e, dtr } from "./composerErrorActions.js";
import { Qo } from "./connect-error.js";
import { hg } from "./connect.js";
import { PR, ZM } from "./cursorCredsService.js";
import { Jh, aZs } from "./dashboard_pb.js";
import { Pn } from "./extensions.js";
import { Fl, rc } from "./host.js";
import { Ze } from "./instantiation.js";
import { Qn, Wn } from "./log.js";
import { di, ji, pi, wy } from "./notification.js";
import { eo, ko } from "./opener.js";
import { mn, pd } from "./qIc.js";
import { Us } from "./severity_2.js";
import { x } from "./tslib.es6.js";
import { TM, XT } from "./uiOverlayService.js";
import { Ukt, bet } from "./usageLimitPolicyStatusService.js";
import { hu, io } from "./utils_pb.js";
import { FLh, Po_, _Io } from "./xaiCommerceBearerSource.js";
function co_(e) {
    let t = e instanceof Error ? e.message : String(e);
    if (e instanceof Qo) {
        const n = tP(e);
        n?.details && (t = `${n.details.detail}`);
    }
    return t;
}
function utr(e, t = {}) {
    if (!(e === void 0 || e === "")) try {
        const n = new URL(e);
        return n.username !== "" || n.password !== "" ? void 0 : n.protocol === "https:" && n.port === "" || n.origin === uo_(t.trustedWebsiteUrl) ? n.toString() : void 0;
    } catch  {
        return;
    }
}
function uo_(e) {
    if (!(e === void 0 || e === "")) try {
        const t = new URL(e).origin;
        return t === "null" ? void 0 : t;
    } catch  {
        return;
    }
}
async function t0t(e, t, n) {
    if (!dtr.has(t)) {
        dtr.add(t);
        try {
            const r = await (await e.cursorAuthService.dashboardClient()).clientAction({
                action: t.action,
                args: t.args
            }), s = r.success ? void 0 : r.confirmation;
            if (s?.action !== void 0) {
                await e.uiOverlayService.showServerUpgradeConfirmationModal({
                    title: s.title,
                    message: s.message,
                    confirmLabel: s.confirmLabel
                }) && await t0t(e, s.action, n);
                return;
            }
            const o = r.success ? void 0 : utr(r.openUrl, {
                trustedWebsiteUrl: e.cursorCredsService.getWebsiteUrl()
            });
            if (r.success && n?.(), r.success) {
                const a = r.infoMessage ?? t.successMessage;
                a && e.notificationService.info(a);
            } else o !== void 0 ? (gIo(e, o), e.notificationService.notify({
                severity: Us.Info,
                message: r.errorMessage ?? "Continue in the browser.",
                priority: wy.URGENT
            })) : e.notificationService.notify({
                severity: Us.Warning,
                message: r.errorMessage ?? "Request failed",
                priority: wy.URGENT
            });
        } catch (i) {
            const r = co_(i);
            e.notificationService.error(`Something went wrong: ${r}`);
        } finally{
            dtr.delete(t);
        }
    }
}
function gIo(e, t) {
    e.openerService.open(t, {
        openExternal: !0
    });
}
function Lo_(e) {
    try {
        const t = new URL(e);
        return `${t.protocol}//${t.host}`;
    } catch  {
        return "unparsable";
    }
}
function No_(e) {
    const t = e.unitMicros / 1e6;
    try {
        return new Intl.NumberFormat(void 0, {
            style: "currency",
            currency: e.currencyCode
        }).format(t);
    } catch  {
        return `${t.toFixed(2)} ${e.currencyCode}`;
    }
}
function Oo_(e) {
    return e === void 0 ? HLh : Math.min(e * 2, WLh);
}
function Fo_(e, t) {
    const n = {
        ...e,
        async topUp (i) {
            const r = await e.topUp(i);
            return t({
                kind: "outcome",
                outcome: r
            }), r;
        }
    };
    if (e.startInlineTopUp !== void 0) {
        const i = e.startInlineTopUp.bind(e);
        n.startInlineTopUp = async (r)=>{
            const s = await i(r);
            return t({
                kind: "handoff",
                amount: r.amount,
                handoff: s
            }), s;
        };
    }
    return n;
}
function Bo_(e, t, n = ()=>{}) {
    const i = {
        ...e,
        async getWallet () {
            const r = await e.getWallet(), s = r.history.map((o)=>{
                if (o.invoiceUrl === void 0) return o;
                const a = t(o.invoiceUrl);
                if (a === void 0) {
                    n("invoice");
                    const { invoiceUrl: c, ...l } = o;
                    return l;
                }
                return {
                    ...o,
                    invoiceUrl: a
                };
            });
            return {
                ...r,
                history: s
            };
        },
        async topUp (r) {
            const s = await e.topUp(r);
            if (s.kind !== "invoice") return s;
            const o = t(s.invoiceUrl);
            return o === void 0 ? (n("invoice"), {
                kind: "processing",
                amount: s.amount,
                reference: "invoice"
            }) : {
                ...s,
                invoiceUrl: o
            };
        }
    };
    if (e.startInlineTopUp !== void 0) {
        const r = e.startInlineTopUp.bind(e);
        i.startInlineTopUp = async (s)=>{
            const o = await r(s);
            if (o.kind !== "redirect") return o;
            const a = t(o.url);
            if (a === void 0) throw n("checkout"), new Error("The hosted checkout URL is not a plain https URL");
            return {
                ...o,
                url: a
            };
        };
    }
    return i;
}
function Uo_(e) {
    if (!(e instanceof Qo)) return;
    const t = tP(e), n = t?.details?.additionalInfo ?? {}, i = t?.details?.detail.trim() || void 0, r = (s)=>i === void 0 ? {
            kind: "refused",
            code: s
        } : {
            kind: "refused",
            code: s,
            message: i
        };
    switch(e.code){
        case Rs.FailedPrecondition:
            return r(n[YLh] === "true" ? "PAYMENT_METHOD_REQUIRED" : "FAILED_PRECONDITION");
        case Rs.NotFound:
            return r("FAILED_PRECONDITION");
        case Rs.InvalidArgument:
            return r("INVALID_ARGUMENT");
        case Rs.PermissionDenied:
            return r("PERMISSION_DENIED");
        case Rs.Unauthenticated:
            return t?.error === io.UNAUTHORIZED ? r("PERMISSION_DENIED") : void 0;
        case Rs.Aborted:
            return n[XLh] === "true" ? r("UNAVAILABLE") : void 0;
        case Rs.Unavailable:
        case Rs.DeadlineExceeded:
        case Rs.Unknown:
            return r("UNAVAILABLE");
        default:
            return;
    }
}
async function BLh(e) {
    try {
        return {
            kind: "ok",
            value: await e()
        };
    } catch (t) {
        const n = Uo_(t);
        if (n === void 0) throw t;
        return n;
    }
}
function $o_(e, t) {
    return {
        async readSettings () {
            const n = await e(), [i, r] = await Promise.all([
                n.getUserPrepaidBilling({
                    limit: 1
                }),
                n.getHardLimit({
                    personalScope: !0
                })
            ]);
            return t.cursorSettingsFromReads(i, r);
        },
        async setAdditionalUsageLimit (n) {
            const i = t.hardLimitWriteFromLimitCents(n);
            return i.kind === "refused" ? i : BLh(async ()=>(await (await e()).setHardLimit({
                    personalScope: !0,
                    ...i.fields
                }), n));
        },
        setAutoTopUpRule (n) {
            return BLh(async ()=>{
                const i = await e(), { rule: r } = await i.setUserPrepaidAutoTopUp({
                    rule: n === null ? void 0 : {
                        enabled: n.enabled,
                        thresholdCents: BigInt(n.thresholdCents),
                        topUpAmountCents: BigInt(n.topUpAmountCents)
                    }
                });
                return r === void 0 ? null : {
                    enabled: r.enabled,
                    thresholdCents: Number(r.thresholdCents),
                    topUpAmountCents: Number(r.topUpAmountCents)
                };
            });
        }
    };
}
function ULh(e, t) {
    const n = new Set;
    for (const i of e.history)i.kind === "purchase" && (t === void 0 || i.createdAt < t) && n.add(i.id);
    return n;
}
function Ho_(e, t) {
    let n, i = !1;
    for (const r of e.history)if (!(r.kind !== "purchase" || r.amount.unitMicros !== t.amount.unitMicros || t.knownIds.has(r.id) || t.claimedIds?.has(r.id) === !0 || t.createdAfter !== void 0 && r.createdAt > 0 && r.createdAt < t.createdAfter)) {
        if (r.status === "succeeded") return {
            state: "succeeded",
            id: r.id
        };
        r.status === "pending" ? i = !0 : r.status === "failed" && (n ??= r.id);
    }
    return n !== void 0 && !i ? {
        state: "failed",
        id: n
    } : {
        state: "pending"
    };
}
var $Lh, HLh, WLh, GLh, VLh, jLh, qLh, zLh, KLh, bIo, O8e, YLh, XLh, ptr;
export { $Lh, $o_, BLh, Bo_, Fo_, GLh, HLh, Ho_, KLh, Lo_, No_, O8e, Oo_, ULh, Uo_, VLh, WLh, XLh, YLh, bIo, co_, gIo, jLh, ptr, qLh, t0t, uo_, utr, zLh };
var __wakaru_tnt_initialized = false;
export function tnt() {
if (__wakaru_tnt_initialized) return;
__wakaru_tnt_initialized = true;
"use strict";
x(), hg(), bn(), bt(), Se(), Pn(), Ze(), Qn(), ji(), ko(), Jh(), hu(), bet(), ZM(), fq(), N8e(), Za(), Fl(), TM(), htr(), Po_(), $Lh = "cursor.unifiedSkuBilling.openBuyCredits", HLh = 2e4, WLh = 5 * 6e4, GLh = 2500, VLh = 30 * 6e4, jLh = 24, qLh = 5, zLh = "unifiedSkuBilling.previousAccountTopUp", KLh = 15e3, bIo = 10 * 6e4, O8e = pd("unifiedSkuBillingService"), YLh = "prepaidAutoTopUpPaymentMethodRequired", XLh = "prepaidAutoTopUpCardCheckUnavailable", ptr = class extends we {
    constructor(e, t, n, i, r, s, o, a){
        super(), this.cursorAuthenticationService = e, this.usageLimitPolicyStatusService = t, this.cursorCredsService = n, this.openerService = i, this.hostService = r, this.logService = s, this.notificationService = o, this.uiOverlayService = a, this._onDidPurchaseCredits = this._register(new ve), this.onDidPurchaseCredits = this._onDidPurchaseCredits.event, this._onDidChangeWeeklyUsageLimitClearing = this._register(new ve), this.onDidChangeWeeklyUsageLimitClearing = this._onDidChangeWeeklyUsageLimitClearing.event, this.weeklyUsageLimitClears = 0, this.weeklyUsageLimitClearEpoch = 0, this.retiredPrepaidClients = new Set, this.loginEpoch = 0, this.bearerSource = new FLh(()=>this.cursorAuthenticationService.dashboardClient(), aZs.PREPAID_TOP_UP), this.buyCreditsOpeners = [], this.pendingTopUps = this._register(new He), this.claimedPurchaseIds = new Set;
        let c = this.cursorAuthenticationService.getCurrentAuthId();
        const l = ()=>{
            const u = this.cursorAuthenticationService.getCurrentAuthId();
            u !== c && (c = u, this.disposePrepaidClient());
        };
        this.cursorAuthenticationService.addLoginChangedListener(l), this._register({
            dispose: ()=>{
                this.cursorAuthenticationService.removeLoginChangedListener(l), this.disposePrepaidClient();
            }
        }), this._register(this.cursorAuthenticationService.onDidChangeActiveTeamId(()=>this.retirePrepaidClient()));
    }
    getPrepaidClient() {
        if (this.prepaidClient === void 0) {
            const e = {}, t = this.createPrepaidClient(this.loginEpoch, e);
            e.promise = t, this.prepaidClient = t, t.catch((n)=>{
                this.prepaidClient === t && (this.prepaidClient = void 0), n instanceof _Io || this.logService.warn(`[unifiedSkuBilling] the wallet client could not be set up: ${n instanceof Error ? n.message : String(n)}`);
            });
        }
        return this.prepaidClient;
    }
    async createPrepaidClient(e, t) {
        const [n, i] = await Promise.all([
            import("./workbench.xai-commerce-prepaid.js"),
            this.bearerSource.credential()
        ]), r = ()=>this.loginEpoch === e ? this.bearerSource.token() : Promise.reject(new Error("The account changed; this wallet client is stale")), s = $o_(()=>this.loginEpoch === e ? this.cursorAuthenticationService.dashboardClient() : Promise.reject(new Error("The account changed; this wallet client is stale")), n), o = Bo_(await this.createPrepaidEdge(i, r, s), (a)=>utr(a, {
                trustedWebsiteUrl: this.cursorCredsService.getWebsiteUrl()
            }), (a)=>this.logService.warn(`[unifiedSkuBilling] refused a ${a} URL from the billing edge that is not plain https`));
        return n.createPrepaidClient({
            edge: Fo_(o, (a)=>{
                this.loginEpoch === e && t.promise !== void 0 ? this.handleTopUpReport(a, t.promise) : this.reportPreviousAccountTopUp(a);
            })
        });
    }
    reportPreviousAccountTopUp(e) {
        if (this._store.isDisposed) return;
        const t = No_(e.kind === "handoff" ? e.amount : e.outcome.amount), n = e.kind === "outcome" ? e.outcome.kind : "processing", i = n === "succeeded" ? {
            severity: pi.Info,
            message: "Credits added to your previous account",
            toastDescription: `The ${t} purchase you started before the account changed went through on that account.`
        } : n === "failed" ? {
            severity: pi.Warning,
            message: "Purchase didn't go through",
            toastDescription: `The ${t} purchase you started before the account changed was declined. Nothing was charged.`
        } : {
            severity: pi.Info,
            message: "Purchase still processing",
            toastDescription: `The ${t} purchase you started before the account changed is still processing on that account. Its billing settings will show the result.`
        };
        this.logService.info(`[unifiedSkuBilling] a ${t} top-up settled as ${n} after the account changed`), this.notificationService.notify({
            id: zLh,
            ...i,
            toastDurationMs: KLh,
            closeNotificationOnToastDismiss: !0
        });
    }
    async createPrepaidEdge(e, t, n) {
        const { createXaiPrepaidEdge: i, withCursorOwnedSettings: r } = await import("./workbench.xai-commerce-prepaid.js");
        return r(i({
            baseUrl: e.edgeBaseUrl,
            getBearer: t
        }), n);
    }
    handleTopUpReport(e, t) {
        if (e.kind === "handoff") {
            this.followPendingPurchase(e.amount, t);
            return;
        }
        const { outcome: n } = e;
        switch(n.kind){
            case "succeeded":
                this.creditsPurchased(n.amount);
                return;
            case "processing":
            case "invoice":
                if (n.kind === "invoice") {
                    const i = utr(n.invoiceUrl, {
                        trustedWebsiteUrl: this.cursorCredsService.getWebsiteUrl()
                    });
                    i !== void 0 && this.openerService.open(i, {
                        openExternal: !0
                    });
                }
                this.followPendingPurchase(n.amount, t);
                return;
            case "failed":
                t.then((i)=>i.invalidateWallet().then(()=>i.fetchWallet())).catch(()=>{});
                return;
        }
    }
    creditsPurchased(e) {
        (this.purchaseSurface ?? this.buyCreditsOpeners.at(-1))?.creditsPurchased?.(e), this._onDidPurchaseCredits.fire({
            amount: e
        }), this.clearWeeklyUsageLimit();
    }
    followPendingPurchase(e, t) {
        const n = this.loginEpoch, i = new He, r = ()=>{
            this.pendingTopUps.delete(i);
        }, s = Date.now(), o = s + VLh;
        let a, c = !1, l = 0, u = 0;
        const h = async ()=>{
            if (this.loginEpoch !== n) {
                r();
                return;
            }
            if (!c) {
                if (Date.now() > o || l >= jLh) {
                    r();
                    return;
                }
                c = !0, l += 1;
                try {
                    const v = await t;
                    await v.invalidateWallet();
                    const b = await v.fetchWallet();
                    if (u = 0, this.loginEpoch !== n) {
                        r();
                        return;
                    }
                    a ??= ULh(b, s - bIo);
                    const y = Ho_(b, {
                        amount: e,
                        knownIds: a,
                        createdAfter: s - bIo,
                        claimedIds: this.claimedPurchaseIds
                    });
                    switch(y.state){
                        case "succeeded":
                            r(), this.claimedPurchaseIds.add(y.id), this.creditsPurchased(e);
                            return;
                        case "failed":
                            r(), this.claimedPurchaseIds.add(y.id);
                            return;
                        default:
                            return;
                    }
                } catch  {
                    u += 1, u >= qLh && r();
                } finally{
                    c = !1;
                }
            }
        };
        t.then((v)=>{
            const b = v.peekWallet();
            a === void 0 && b !== void 0 && (a = ULh(b));
        }, ()=>{}), i.add(this.hostService.onDidChangeFocus((v)=>{
            v && h();
        }));
        const p = i.add(new wE);
        let g;
        const f = ()=>{
            i.isDisposed || (g = Oo_(g), p.cancelAndSet(()=>{
                this.hostService.hasFocus && h(), f();
            }, g));
        };
        p.cancelAndSet(()=>{
            h(), f();
        }, GLh), this.pendingTopUps.add(i);
    }
    get isWeeklyUsageLimitClearing() {
        return this.weeklyUsageLimitClears > 0;
    }
    async clearWeeklyUsageLimit() {
        const e = this.weeklyUsageLimitClearEpoch;
        this.setWeeklyUsageLimitClears(this.weeklyUsageLimitClears + 1);
        try {
            await this.usageLimitPolicyStatusService.refetch(!0), await this.usageLimitPolicyStatusService.refetch(!0);
        } finally{
            this.weeklyUsageLimitClearEpoch === e && this.setWeeklyUsageLimitClears(this.weeklyUsageLimitClears - 1);
        }
    }
    setWeeklyUsageLimitClears(e) {
        const t = this.isWeeklyUsageLimitClearing;
        this.weeklyUsageLimitClears = e, t !== this.isWeeklyUsageLimitClearing && this._onDidChangeWeeklyUsageLimitClearing.fire(this.isWeeklyUsageLimitClearing);
    }
    openBuyCredits(e) {
        const t = this.buyCreditsOpeners.at(-1);
        if (t !== void 0) {
            t.open({
                entrypoint: e?.entrypoint
            }) !== !1 && (this.purchaseSurface = t);
            return;
        }
        this.openBillingDashboard();
    }
    billingDashboardUrl() {
        return `${this.cursorCredsService.getSettingsUrl()}${LBn}`;
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
    runUpgradeHandOff(e) {
        return t0t({
            cursorAuthService: this.cursorAuthenticationService,
            notificationService: this.notificationService,
            openerService: this.openerService,
            cursorCredsService: this.cursorCredsService,
            uiOverlayService: this.uiOverlayService
        }, e);
    }
    openBillingEdgeUrl(e) {
        const t = utr(e, {
            trustedWebsiteUrl: this.cursorCredsService.getWebsiteUrl()
        });
        if (t === void 0) {
            this.logService.warn(`[unifiedSkuBilling] refused to open a billing edge link that is not plain https (${Lo_(e)})`);
            return;
        }
        this.openerService.open(t, {
            openExternal: !0
        });
    }
    registerBuyCreditsOpener(e) {
        const t = ()=>{
            const r = this.buyCreditsOpeners.indexOf(e);
            r !== -1 && this.buyCreditsOpeners.splice(r, 1);
        };
        this.buyCreditsOpeners.push(e);
        let n = !1;
        const i = rn(()=>{
            n = !0, t(), this.purchaseSurface === e && (this.purchaseSurface = void 0);
        });
        return {
            dispose: ()=>i.dispose(),
            activate: ()=>{
                n || (t(), this.buyCreditsOpeners.push(e), this.purchaseSurface = e);
            }
        };
    }
    retirePrepaidClient() {
        const e = this.prepaidClient;
        e !== void 0 && (this.retiredPrepaidClients.add(e), this.prepaidClient = void 0), this.bearerSource.reset();
    }
    disposePrepaidClient() {
        const e = [
            ...this.retiredPrepaidClients
        ];
        this.prepaidClient !== void 0 && e.push(this.prepaidClient), this.retiredPrepaidClients.clear(), this.prepaidClient = void 0, this.loginEpoch += 1, this.bearerSource.reset(), this.pendingTopUps.clear(), this.claimedPurchaseIds.clear(), this.weeklyUsageLimitClearEpoch += 1, this.setWeeklyUsageLimitClears(0);
        for (const t of e)t.then((n)=>n.dispose(), ()=>{});
    }
}, ptr = ie([
    C(0, na),
    C(1, Ukt),
    C(2, PR),
    C(3, eo),
    C(4, rc),
    C(5, Wn),
    C(6, di),
    C(7, XT)
], ptr), mn(O8e, ptr, 1, 1);

}
