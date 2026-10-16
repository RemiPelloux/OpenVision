import { ae0, ce0, ilv, le0, oe0, rlv, slv } from "./Asv.js";
import { Ec, Ei, Ga, Gt, Qe, Vn, Ya, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { Dc, jl } from "./aiService.js";
import { c_, ype } from "./async.cursor.js";
import { qn } from "./async.js";
import { Lk, Nw } from "./cloudEnvironmentTemplateService.js";
import { hs } from "./commands.js";
import { Du, W6a, fVr, j6a, vVr } from "./dashboard_pb.js";
import { Rn } from "./extensions.js";
import { Wme, gce } from "./glass-alert-dialog-service.js";
import { yp } from "./glass-command-service.js";
import { Zu, eu } from "./glass-log-service.js";
import { ul, zc } from "./glass-notification-service.js";
import { Xf, xf } from "./glass-opener-service.js";
import { Nu, xc } from "./glass-storage-service.js";
import { It } from "./instantiation.js";
import { Yn } from "./notification.js";
import { Kf, ca } from "./reactive.js";
import { Wg, io } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var iQt, olv, cIs, mql, LDe, alv, uIs;
export { LDe, alv, cIs, iQt, mql, olv, uIs };
var __wakaru_zKe_initialized = false;
export function zKe() {
if (__wakaru_zKe_initialized) return;
__wakaru_zKe_initialized = true;
"use strict";
E(), Du(), c_(), qn(), Ga(), Ei(), Gt(), Qe(), Rn(), It(), Nw(), Kf(), Ss(), Dc(), yp(), Wme(), Zu(), zc(), Xf(), xc(), iQt = "glass_direct_github_connect", olv = "cursor.githubConnect.completeCallback", cIs = "cursor/glass.githubConnect.pendingFlow", mql = 32, LDe = Il("glassGithubConnectService"), alv = class {
    constructor(t){
        this._storageService = t;
    }
    get() {
        return ae0(this._storageService.get(cIs, io.APPLICATION));
    }
    set(t) {
        this._storageService.store(cIs, JSON.stringify(t), io.APPLICATION, Wg.USER);
    }
    clear() {
        this._storageService.remove(cIs, io.APPLICATION);
    }
}, hs.registerCommand(olv, (t, e)=>t.get(LDe).completeGithubConnectFlow(e)), uIs = class extends st {
    constructor(t, e, n, i, r, s, o, a){
        super(), this._aiService = t, this._analyticsService = e, this._cloudEnvironmentTemplateService = n, this._alertDialogService = i, this._logService = r, this._notificationService = s, this._openerService = o, this._onDidConnect = this._register(new tt), this.onDidConnect = this._onDidConnect.event, this._pendingFlowExpiryTimeout = this._register(new Vn), this._startFlight = this._register(new ype), this.busy = new ca(!1), this.completingConnect = new ca(!1), this._pendingFlowStore = new alv(a);
    }
    _setBusy(t) {
        this.busy.set(t);
    }
    _setCompletingConnect(t) {
        this.completingConnect.set(t);
    }
    resetHandoffBusy() {
        this.completingConnect.value || this._setBusy(!1);
    }
    _clearPendingFlow() {
        this._pendingFlowStore.clear(), this._pendingFlowExpiryTimeout.clear();
    }
    _schedulePendingFlowExpiry(t) {
        this._pendingFlowExpiryTimeout.value = Ec(()=>{
            const e = this._pendingFlowStore.get();
            e?.state !== t.state || e.expiresAtMs > Date.now() || (this._clearPendingFlow(), this._setBusy(!1));
        }, Math.max(t.expiresAtMs - Date.now(), 0));
    }
    async startGithubConnectFlow(t) {
        this._startFlight.invalidate(), this._setBusy(!0);
        try {
            await this._startFlight.run((e)=>this._startFlow(t, e));
        } catch (e) {
            if (Ya(e)) return;
            throw e;
        }
    }
    async _startFlow(t, e) {
        try {
            this._analyticsService.trackEvent("glass.github_connect_direct.started", {
                source: t.source
            });
            const n = ilv(mql), i = await this._aiService.dashboardClient();
            e.throwIfStale();
            const r = await i.prepareGithubConnectFlow(new fVr({
                githubRepo: t.githubRepo ?? "",
                gheApplication: t.gheApplication,
                source: slv(t.source),
                connectSource: oe0(t.source),
                verifierHash: await rlv(n),
                forceOauth: t.forceOauth === !0
            }));
            e.throwIfStale();
            const s = {
                flowId: r.flowId,
                state: r.state,
                verifier: n,
                source: t.source,
                githubRepo: t.githubRepo,
                shouldInstall: r.shouldInstall,
                expiresAtMs: Number(r.expiresAtMs)
            };
            this._pendingFlowStore.set(s), this._schedulePendingFlowExpiry(s), this._analyticsService.trackEvent("glass.github_connect_direct.github_opened", {
                source: t.source
            }), await this._openerService.open(r.githubUrl, {
                openExternal: !0,
                fromUserGesture: !0
            });
        } catch (n) {
            if (!e.isCurrent()) return;
            throw this._clearPendingFlow(), this._setBusy(!1), n;
        }
    }
    async completeGithubConnectFlow(t) {
        const e = this.busy.value;
        this._setBusy(!0), this._setCompletingConnect(!0);
        let n = "done";
        try {
            n = await this._completeGithubConnectFlow(t);
        } finally{
            this._setCompletingConnect(!1), n === "ignored" ? this._setBusy(e) : n === "done" && this._setBusy(!1);
        }
    }
    async _refreshCloudGithubState() {
        await this._cloudEnvironmentTemplateService.refreshGitRepoEnvironmentTemplates();
    }
    _readPendingFlowForCallback(t) {
        const e = this._pendingFlowStore.get();
        return e === void 0 || e.expiresAtMs < Date.now() ? (this._notificationService.notify({
            severity: Yn.Error,
            message: "Your GitHub connection session expired. Please try connecting again."
        }), this._clearPendingFlow(), {
            kind: "failed"
        }) : e.state !== t.state ? (this._logService.info("[GlassGithubConnectService] ignoring a GitHub callback for a superseded flow"), {
            kind: "superseded"
        }) : t.error !== void 0 ? (this._notificationService.notify({
            severity: Yn.Error,
            message: "GitHub did not complete the connection. Please try again."
        }), this._clearPendingFlow(), {
            kind: "failed"
        }) : {
            kind: "ready",
            flow: e
        };
    }
    async _completeGithubConnectFlow(t) {
        this._analyticsService.trackEvent("glass.github_connect_direct.callback_received");
        const e = this._readPendingFlowForCallback(t);
        if (e.kind === "superseded") return "ignored";
        if (e.kind === "failed") return "done";
        const n = e.flow;
        try {
            const i = await this._aiService.dashboardClient(), r = await i.completeGithubConnectFlow(new j6a({
                state: t.state,
                verifier: n.verifier,
                code: t.code ?? "",
                installationId: t.installationId ?? "",
                setupAction: t.setupAction ?? "",
                gheApplication: t.gheApplication
            }));
            this._clearPendingFlow();
            const s = await this._handleCompletedFlow({
                dashboardClient: i,
                payload: t,
                pendingFlow: n,
                response: r
            });
            if (s === "not-connected") return "done";
            if (this._analyticsService.trackEvent("glass.github_connect_direct.complete_success", {
                source: n.source
            }), this._onDidConnect.fire(), s === "pending-approval") return this._trackRepoAccessResolved(n, "pending_admin_approval"), "done";
            try {
                const o = await this._maybeContinueGithubAppInstall({
                    pendingFlow: n,
                    payload: t,
                    source: n.source,
                    githubRepo: n.githubRepo,
                    gheApplication: t.gheApplication
                });
                return this._trackRepoAccessResolved(n, o), o === "install_browser_opened" ? "waiting-for-callback" : "done";
            } catch (o) {
                return this._logService.error("[GlassGithubConnectService] failed to continue GitHub app install", o), this._clearPendingFlow(), this._notificationService.notify({
                    severity: Yn.Warning,
                    message: "GitHub connected, but Cursor could not open repository access setup. Please try granting repo access again."
                }), this._trackRepoAccessResolved(n, "install_failed"), "done";
            }
        } catch (i) {
            return this._logService.error("[GlassGithubConnectService] failed to complete GitHub connect flow", i), this._analyticsService.trackEvent("glass.github_connect_direct.complete_error", {
                source: n.source
            }), this._notificationService.notify({
                severity: Yn.Error,
                message: "Failed to connect GitHub. Please try again."
            }), "done";
        }
    }
    async _handleCompletedFlow(t) {
        const { dashboardClient: e, payload: n, pendingFlow: i, response: r } = t;
        if (r.outcome === vVr.PENDING_APPROVAL) return this._notificationService.notify({
            severity: Yn.Info,
            message: "GitHub installation request sent to your admin."
        }), "pending-approval";
        if (r.outcome === vVr.NEEDS_CONFIRMATION) {
            if (this._analyticsService.trackEvent("glass.github_connect_direct.confirmation_shown", {
                source: i.source
            }), !await this._alertDialogService.confirm({
                title: "Link GitHub account",
                description: r.githubLogin ? `Link GitHub account ${r.githubLogin} to your current Cursor account?` : "Link this GitHub account to your current Cursor account?",
                primaryLabel: "Link Account"
            })) return this._notificationService.notify({
                severity: Yn.Warning,
                message: "GitHub connection was not confirmed."
            }), "not-connected";
            await e.confirmGithubInstallation(new W6a({
                confirmationCode: r.confirmationCode
            })), this._analyticsService.trackEvent("glass.github_connect_direct.confirmation_success", {
                source: i.source
            });
        }
        return await this._refreshCloudGithubState(), this._notificationService.notify({
            severity: Yn.Info,
            message: ce0({
                pendingFlow: i,
                payload: n,
                targetRepoAccessible: le0(this._cloudEnvironmentTemplateService, i.githubRepo)
            })
        }), "connected";
    }
    async _maybeContinueGithubAppInstall(t) {
        if (t.payload.installationId !== void 0 && t.payload.installationId !== "") return "granted_in_callback";
        const e = await this._aiService.dashboardClient(), n = ilv(mql), i = await e.prepareGithubConnectFlow(new fVr({
            githubRepo: t.githubRepo ?? "",
            gheApplication: t.gheApplication,
            source: slv(t.source),
            verifierHash: await rlv(n)
        }));
        if (!i.shouldInstall) return t.githubRepo !== void 0 && t.githubRepo !== "" && this._cloudEnvironmentTemplateService.markGithubRepoAccessible(t.githubRepo), "install_not_required";
        const r = {
            flowId: i.flowId,
            state: i.state,
            verifier: n,
            source: t.source,
            githubRepo: t.githubRepo,
            shouldInstall: i.shouldInstall,
            expiresAtMs: Number(i.expiresAtMs)
        };
        return this._pendingFlowStore.set(r), this._schedulePendingFlowExpiry(r), await this._openerService.open(i.githubUrl, {
            openExternal: !0,
            fromUserGesture: !0
        }), this._notificationService.notify({
            severity: Yn.Info,
            message: "Cursor still needs GitHub app access to this repository. Finish setup in your browser."
        }), "install_browser_opened";
    }
    _trackRepoAccessResolved(t, e) {
        this._analyticsService.trackEvent("glass.github_connect_direct.repo_access_resolved", {
            outcome: e,
            source: t.source,
            installHandoffReturn: t.shouldInstall
        });
    }
}, uIs = Re([
    F(0, jl),
    F(1, Qr),
    F(2, Lk),
    F(3, gce),
    F(4, eu),
    F(5, ul),
    F(6, xf),
    F(7, Nu)
], uIs), bn(LDe, uIs, 1, 1);

}
