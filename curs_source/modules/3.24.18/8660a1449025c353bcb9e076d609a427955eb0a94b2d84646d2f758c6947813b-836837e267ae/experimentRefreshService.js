import { Di, Gt, Hg, Qe, Vn, rd, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { C1, Qb } from "./aiServerConfigService.js";
import { cki, yTn } from "./analytics_connectweb.js";
import { lki, sGt } from "./analytics_pb.js";
import { c_, lie } from "./async.cursor.js";
import { Rs, ss } from "./authenticationService.js";
import { cb, sC } from "./backendClient.js";
import { Hi, Rr } from "./contextkey.js";
import { Tm, x_ } from "./contextkeys.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { Od, Tc } from "./host.js";
import { It, dn } from "./instantiation.js";
import { Fp, zp } from "./lifecycle_2.js";
import { Uh, ip } from "./metricsService.js";
import { fc, hu } from "./productService.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $t, Bs } from "./window.js";
var J5, uCe;
export { J5, uCe };
var __wakaru_$4_initialized = false;
export function $4() {
if (__wakaru_$4_initialized) return;
__wakaru_$4_initialized = true;
"use strict";
E(), It(), Rn(), Qe(), c_(), Gt(), zp(), sC(), cki(), lki(), Bs(), fo(), Rs(), C1(), ip(), _s(), Di(), Hi(), x_(), hu(), Cm(), Od(), J5 = Il("experimentRefreshService"), uCe = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u){
        if (super(), this.environmentService = n, this.authService = i, this.aiServerConfigService = r, this.metricsService = s, this.experimentService = o, this.productService = l, this.structuredLogService = c, this.hostService = u, this._onDidRefreshStatsigIdentity = this._register(new tt), this.onDidRefreshStatsigIdentity = this._onDidRefreshStatsigIdentity.event, this._refreshing = !1, this._currentRefresh = Promise.resolve(), this._startupRefreshComplete = Promise.resolve(), this._pollLoop = this._register(new Vn), this._disposed = !1, this._basePollIntervalMs = uCe.BASE_POLL_INTERVAL_MS, this._cachedAuthId = void 0, this._authIdentityRevision = 0, this._lastInitializedAuthId = void 0, this._ignoreDevStatus = !1, this._authChangeRefreshComplete = Promise.resolve(), this._isDevUserContext = Tm.bindTo(a), this._updateDevUserContext(), n.enableSmokeTestDriver) {
            console.log("[ExperimentRefreshService] Test mode detected (enableSmokeTestDriver) - skipping Statsig network initialization");
            return;
        }
        this.productService.simulateProdOnDev && (!this._isProduction() || this.aiServerConfigService.cachedServerConfig.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers === !0) && (this._ignoreDevStatus = !0), this._basePollIntervalMs = this._calculatePollInterval(n);
        const d = performance.now();
        this._backendClient = t.createInstance(cb, {
            service: yTn
        }), this._backendClient.createServer(), this._startupRefreshComplete = (async ()=>{
            for(await this._updateCachedAuthId(); !this._disposed && this._refreshing;)await this._currentRefresh.catch(()=>{});
            this._disposed || await this._refreshBootstrapFromServer("startup");
        })();
        const h = (g)=>{
            this._authChangeRefreshComplete = (async ()=>{
                for(await this._updateCachedAuthId(); !this._disposed && this._refreshing;)await this._currentRefresh.catch(()=>{});
                this._disposed || await this._refreshBootstrapFromServer("auth_change");
            })(), this._authChangeRefreshComplete.catch(()=>{});
        };
        this.authService.addLoginChangedListener(h), this._register({
            dispose: ()=>this.authService.removeLoginChangedListener(h)
        }), this._register(this.aiServerConfigService.onDidRefreshServerConfig(()=>{
            this._updateDevUserContext(), this._basePollIntervalMs = this._calculatePollInterval(n), this._pollLoop.value !== void 0 && this._startPolling();
        })), this._register({
            dispose: ()=>{
                this._disposed = !0;
            }
        }), e.when(2).then(()=>{
            this._startPolling();
        });
        const p = performance.now();
        this.metricsService.distribution({
            stat: "experimentRefreshService.blocking_time",
            value: p - d
        });
    }
    async _refreshBootstrapFromServer(t = "poll") {
        if (this._refreshing) return;
        this._refreshing = !0;
        const e = this._doRefreshBootstrapFromServer(t);
        return this._currentRefresh = e, e;
    }
    async _doRefreshBootstrapFromServer(t) {
        const e = performance.now();
        this._lastStatsigRefreshStartMs !== void 0 && this.metricsService.distribution({
            stat: "experimentRefreshService.statsig_refresh_period_ms",
            value: e - this._lastStatsigRefreshStartMs,
            tags: {
                trigger: t
            }
        }), this._lastStatsigRefreshStartMs = e;
        try {
            const n = await this._backendClient?.get();
            if (!n) return;
            const i = this.aiServerConfigService.cachedServerConfig.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers ?? !1, r = this._isProduction() && !i ? void 0 : this._ignoreDevStatus ? !0 : void 0, s = AbortSignal.timeout(300 * 1e3), o = this._cachedAuthId, a = this._authIdentityRevision, l = await n.bootstrapStatsig({
                ignoreDevStatus: r,
                operatingSystem: this._getClientOS()
            }, {
                signal: s
            });
            if (o !== this._cachedAuthId || a !== this._authIdentityRevision) return;
            const c = l.config, u = JSON.parse(c);
            let d = u && u.user ? u.user : {};
            o && (d = {
                ...d,
                userID: o
            }), this.experimentService.refreshStatsigConfig(c, d, t), this._lastInitializedAuthId = o, this._onDidRefreshStatsigIdentity.fire();
            const h = performance.now();
            this.metricsService.distribution({
                stat: "experimentRefreshService.server_refresh_time",
                value: h - e,
                tags: {
                    trigger: t
                }
            }), this.metricsService.increment({
                stat: "experimentRefreshService.server_refresh_success",
                tags: {
                    trigger: t
                }
            });
        } catch (n) {
            const i = this.experimentService.isInitialized();
            this.metricsService.increment({
                stat: "experimentRefreshService.server_refresh_failure",
                tags: {
                    was_initialized: String(i),
                    trigger: t
                }
            }), this.structuredLogService.error("experiment_refresh_service", "ExperimentRefreshService: Statsig bootstrap from server failed", n instanceof Error ? n : new Error(String(n)), {
                trigger: t,
                was_initialized: i
            });
        } finally{
            this._refreshing = !1;
        }
    }
    _calculatePollInterval(t) {
        if (!t.isBuilt || t.isExtensionDevelopment) return uCe.MIN_POLL_INTERVAL_MS;
        const e = this.aiServerConfigService.cachedServerConfig.chatConfig?.clientStatsigPollIntervalMs, i = typeof e == "number" && Number.isFinite(e) && e > 0 ? e : uCe.BASE_POLL_INTERVAL_MS;
        return Math.max(i, uCe.MIN_POLL_INTERVAL_MS);
    }
    _startPolling() {
        if (this._disposed) return;
        const t = Math.max(this._basePollIntervalMs, uCe.MIN_POLL_INTERVAL_MS), e = Math.max(uCe.UNFOCUSED_POLL_INTERVAL_MS, t), n = new lie(()=>this._refreshBootstrapFromServer("poll"), {
            focusedIntervalMs: t,
            unfocusedIntervalMs: e,
            maxIntervalMs: e,
            focus: this.hostService,
            context: $t
        });
        this._pollLoop.value = n, n.start();
    }
    async _updateCachedAuthId() {
        try {
            const t = await this.authService.getAccessToken();
            this._setCachedAuthId(t ? this.authService.getAuthIdFromToken(t) : void 0);
        } catch  {
            this._setCachedAuthId(void 0);
        }
    }
    _setCachedAuthId(t) {
        this._cachedAuthId !== t && (this._cachedAuthId = t, this._authIdentityRevision += 1, this._lastInitializedAuthId = void 0, this._onDidRefreshStatsigIdentity.fire());
    }
    setIgnoreDevStatus(t) {
        const e = this.aiServerConfigService.cachedServerConfig.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers ?? !1;
        if (this._isProduction() && !e) {
            console.warn("[ExperimentService] Cannot set ignoreDevStatus in production builds");
            return;
        }
        const n = this._ignoreDevStatus;
        this._ignoreDevStatus = !!t, n !== this._ignoreDevStatus && this._refreshBootstrapFromServer("auth_change");
    }
    getIgnoreDevStatus() {
        const t = this.aiServerConfigService.cachedServerConfig.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers ?? !1;
        return this._isProduction() && !t ? !1 : this._ignoreDevStatus;
    }
    async refreshStatsigConfig() {
        const t = this.aiServerConfigService.cachedServerConfig.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers ?? !1;
        if (this._isProduction() && !t) {
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
    isInitializedForIdentity(t) {
        return this.environmentService.enableSmokeTestDriver ? t.length > 0 : t.length > 0 && this.experimentService.isInitialized() && this._lastInitializedAuthId === t;
    }
    _isProduction() {
        return this.environmentService.isBuilt && !this.environmentService.isExtensionDevelopment;
    }
    _getClientOS() {
        switch(Hg){
            case rd.Windows:
                return sGt.CLIENT_OS_WINDOWS;
            case rd.Macintosh:
                return sGt.CLIENT_OS_MACOS;
            case rd.Linux:
                return sGt.CLIENT_OS_LINUX;
            default:
                return sGt.CLIENT_OS_UNSPECIFIED;
        }
    }
    _updateDevUserContext() {
        const t = this.aiServerConfigService.cachedServerConfig.isDevDoNotUseForSecretThingsBecauseCanBeSpoofedByUsers ?? !1;
        this._isDevUserContext.set(t);
    }
}, uCe.MIN_POLL_INTERVAL_MS = 30 * 1e3, uCe.BASE_POLL_INTERVAL_MS = 300 * 1e3, uCe.UNFOCUSED_POLL_INTERVAL_MS = 1800 * 1e3, uCe = Re([
    F(0, dn),
    F(1, Fp),
    F(2, ps),
    F(3, ss),
    F(4, Qb),
    F(5, Uh),
    F(6, Cr),
    F(7, Rr),
    F(8, fc),
    F(9, wh),
    F(10, Tc)
], uCe), bn(J5, uCe, 0, 1);

}
