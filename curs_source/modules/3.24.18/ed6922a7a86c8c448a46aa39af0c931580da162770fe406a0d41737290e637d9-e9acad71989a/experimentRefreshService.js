import { Se, Ul, bt, cn, hp, jn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { dw, tE } from "./aiServerConfigService.js";
import { DHt, LLn } from "./analytics_connectweb.js";
import { PLn, ekt } from "./analytics_pb.js";
import { SX, ub } from "./async.cursor.js";
import { Za, na } from "./authenticationService.js";
import { db, nE } from "./backendClient.js";
import { dn, xn } from "./contextkey.js";
import { of, oy } from "./contextkeys.js";
import { Vr, Yi } from "./environmentService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Fl, rc } from "./host.js";
import { Ze, _t } from "./instantiation.js";
import { $d, Id } from "./lifecycle_2.js";
import { Cp, vp } from "./metricsService.js";
import { Ka, jo } from "./productService.js";
import { mn, pd } from "./qIc.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
var GU, Cde;
export { Cde, GU };
var __wakaru_A$_initialized = false;
export function A$() {
if (__wakaru_A$_initialized) return;
__wakaru_A$_initialized = true;
"use strict";
x(), Ze(), Pn(), Se(), ub(), bt(), $d(), nE(), LLn(), PLn(), lo(), Vr(), Za(), tE(), Cp(), qs(), jn(), dn(), of(), Ka(), im(), Fl(), GU = pd("experimentRefreshService"), Cde = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u){
        if (super(), this.environmentService = n, this.authService = i, this.aiServerConfigService = r, this.metricsService = s, this.experimentService = o, this.productService = c, this.structuredLogService = l, this.hostService = u, this._onDidRefreshStatsigIdentity = this._register(new ve), this.onDidRefreshStatsigIdentity = this._onDidRefreshStatsigIdentity.event, this._refreshing = !1, this._currentRefresh = Promise.resolve(), this._startupRefreshComplete = Promise.resolve(), this._pollLoop = this._register(new cn), this._disposed = !1, this._basePollIntervalMs = Cde.BASE_POLL_INTERVAL_MS, this._cachedAuthId = void 0, this._authIdentityRevision = 0, this._lastInitializedAuthId = void 0, this._ignoreDevStatus = !1, this._authChangeRefreshComplete = Promise.resolve(), this._isDevUserContext = oy.bindTo(a), this._updateDevUserContext(), n.enableSmokeTestDriver) {
            console.log("[ExperimentRefreshService] Test mode detected (enableSmokeTestDriver) - skipping Statsig network initialization");
            return;
        }
        this.productService.simulateProdOnDev && (!this._isProduction() || this.aiServerConfigService.cachedServerConfig.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers === !0) && (this._ignoreDevStatus = !0), this._basePollIntervalMs = this._calculatePollInterval(n);
        const h = performance.now();
        this._backendClient = e.createInstance(db, {
            service: DHt
        }), this._backendClient.createServer(), this._startupRefreshComplete = (async ()=>{
            for(await this._updateCachedAuthId(); !this._disposed && this._refreshing;)await this._currentRefresh.catch(()=>{});
            this._disposed || await this._refreshBootstrapFromServer("startup");
        })();
        const p = (f)=>{
            this._authChangeRefreshComplete = (async ()=>{
                for(await this._updateCachedAuthId(); !this._disposed && this._refreshing;)await this._currentRefresh.catch(()=>{});
                this._disposed || await this._refreshBootstrapFromServer("auth_change");
            })(), this._authChangeRefreshComplete.catch(()=>{});
        };
        this.authService.addLoginChangedListener(p), this._register({
            dispose: ()=>this.authService.removeLoginChangedListener(p)
        }), this._register(this.aiServerConfigService.onDidRefreshServerConfig(()=>{
            this._updateDevUserContext(), this._basePollIntervalMs = this._calculatePollInterval(n), this._pollLoop.value !== void 0 && this._startPolling();
        })), this._register({
            dispose: ()=>{
                this._disposed = !0;
            }
        }), t.when(2).then(()=>{
            this._startPolling();
        });
        const g = performance.now();
        this.metricsService.distribution({
            stat: "experimentRefreshService.blocking_time",
            value: g - h
        });
    }
    async _refreshBootstrapFromServer(e = "poll") {
        if (this._refreshing) return;
        this._refreshing = !0;
        const t = this._doRefreshBootstrapFromServer(e);
        return this._currentRefresh = t, t;
    }
    async _doRefreshBootstrapFromServer(e) {
        const t = performance.now();
        this._lastStatsigRefreshStartMs !== void 0 && this.metricsService.distribution({
            stat: "experimentRefreshService.statsig_refresh_period_ms",
            value: t - this._lastStatsigRefreshStartMs,
            tags: {
                trigger: e
            }
        }), this._lastStatsigRefreshStartMs = t;
        try {
            const n = await this._backendClient?.get();
            if (!n) return;
            const i = this.aiServerConfigService.cachedServerConfig.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers ?? !1, r = this._isProduction() && !i ? void 0 : this._ignoreDevStatus ? !0 : void 0, s = AbortSignal.timeout(300 * 1e3), o = this._cachedAuthId, a = this._authIdentityRevision, c = await n.bootstrapStatsig({
                ignoreDevStatus: r,
                operatingSystem: this._getClientOS()
            }, {
                signal: s
            });
            if (o !== this._cachedAuthId || a !== this._authIdentityRevision) return;
            const l = c.config, u = JSON.parse(l);
            let h = u && u.user ? u.user : {};
            o && (h = {
                ...h,
                userID: o
            }), this.experimentService.refreshStatsigConfig(l, h, e), this._lastInitializedAuthId = o, this._onDidRefreshStatsigIdentity.fire();
            const p = performance.now();
            this.metricsService.distribution({
                stat: "experimentRefreshService.server_refresh_time",
                value: p - t,
                tags: {
                    trigger: e
                }
            }), this.metricsService.increment({
                stat: "experimentRefreshService.server_refresh_success",
                tags: {
                    trigger: e
                }
            });
        } catch (n) {
            const i = this.experimentService.isInitialized();
            this.metricsService.increment({
                stat: "experimentRefreshService.server_refresh_failure",
                tags: {
                    was_initialized: String(i),
                    trigger: e
                }
            }), this.structuredLogService.error("experiment_refresh_service", "ExperimentRefreshService: Statsig bootstrap from server failed", n instanceof Error ? n : new Error(String(n)), {
                trigger: e,
                was_initialized: i
            });
        } finally{
            this._refreshing = !1;
        }
    }
    _calculatePollInterval(e) {
        if (!e.isBuilt || e.isExtensionDevelopment) return Cde.MIN_POLL_INTERVAL_MS;
        const t = this.aiServerConfigService.cachedServerConfig.chatConfig?.clientStatsigPollIntervalMs, i = typeof t == "number" && Number.isFinite(t) && t > 0 ? t : Cde.BASE_POLL_INTERVAL_MS;
        return Math.max(i, Cde.MIN_POLL_INTERVAL_MS);
    }
    _startPolling() {
        if (this._disposed) return;
        const e = Math.max(this._basePollIntervalMs, Cde.MIN_POLL_INTERVAL_MS), t = Math.max(Cde.UNFOCUSED_POLL_INTERVAL_MS, e), n = new SX(()=>this._refreshBootstrapFromServer("poll"), {
            focusedIntervalMs: e,
            unfocusedIntervalMs: t,
            maxIntervalMs: t,
            focus: this.hostService,
            context: on
        });
        this._pollLoop.value = n, n.start();
    }
    async _updateCachedAuthId() {
        try {
            const e = await this.authService.getAccessToken();
            this._setCachedAuthId(e ? this.authService.getAuthIdFromToken(e) : void 0);
        } catch  {
            this._setCachedAuthId(void 0);
        }
    }
    _setCachedAuthId(e) {
        this._cachedAuthId !== e && (this._cachedAuthId = e, this._authIdentityRevision += 1, this._lastInitializedAuthId = void 0, this._onDidRefreshStatsigIdentity.fire());
    }
    setIgnoreDevStatus(e) {
        const t = this.aiServerConfigService.cachedServerConfig.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers ?? !1;
        if (this._isProduction() && !t) {
            console.warn("[ExperimentService] Cannot set ignoreDevStatus in production builds");
            return;
        }
        const n = this._ignoreDevStatus;
        this._ignoreDevStatus = !!e, n !== this._ignoreDevStatus && this._refreshBootstrapFromServer("auth_change");
    }
    getIgnoreDevStatus() {
        const e = this.aiServerConfigService.cachedServerConfig.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers ?? !1;
        return this._isProduction() && !e ? !1 : this._ignoreDevStatus;
    }
    async refreshStatsigConfig() {
        const e = this.aiServerConfigService.cachedServerConfig.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers ?? !1;
        if (this._isProduction() && !e) {
            console.warn("[ExperimentService] Cannot manually refresh Statsig config in production builds");
            return;
        }
        await this._refreshBootstrapFromServer("poll");
    }
    whenStartupRefreshComplete() {
        return this._startupRefreshComplete.catch(()=>{});
    }
    whenAuthChangeRefreshComplete() {
        return this._authChangeRefreshComplete.catch(()=>{});
    }
    isInitializedForIdentity(e) {
        return this.environmentService.enableSmokeTestDriver ? e.length > 0 : e.length > 0 && this.experimentService.isInitialized() && this._lastInitializedAuthId === e;
    }
    _isProduction() {
        return this.environmentService.isBuilt && !this.environmentService.isExtensionDevelopment;
    }
    _getClientOS() {
        switch(hp){
            case Ul.Windows:
                return ekt.CLIENT_OS_WINDOWS;
            case Ul.Macintosh:
                return ekt.CLIENT_OS_MACOS;
            case Ul.Linux:
                return ekt.CLIENT_OS_LINUX;
            default:
                return ekt.CLIENT_OS_UNSPECIFIED;
        }
    }
    _updateDevUserContext() {
        const e = this.aiServerConfigService.cachedServerConfig.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers ?? !1;
        this._isDevUserContext.set(e);
    }
}, Cde.MIN_POLL_INTERVAL_MS = 30 * 1e3, Cde.BASE_POLL_INTERVAL_MS = 300 * 1e3, Cde.UNFOCUSED_POLL_INTERVAL_MS = 1800 * 1e3, Cde = ie([
    C(0, _t),
    C(1, Id),
    C(2, Yi),
    C(3, na),
    C(4, dw),
    C(5, vp),
    C(6, Kr),
    C(7, xn),
    C(8, jo),
    C(9, Xh),
    C(10, rc)
], Cde), mn(GU, Cde, 0, 1);

}
