import { cto, iyv, ryv, syv } from "./A3u.js";
import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { SX, ub } from "./async.cursor.js";
import { Za, na } from "./authenticationService.js";
import { B7i, Jh, VM } from "./dashboard_pb.js";
import { Pn } from "./extensions.js";
import { Fl, rc } from "./host.js";
import { Ze } from "./instantiation.js";
import { mn, pd } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
var pw, hHt, Mee;
export { Mee, hHt, pw };
var __wakaru_R1_initialized = false;
export function R1() {
if (__wakaru_R1_initialized) return;
__wakaru_R1_initialized = true;
"use strict";
x(), Jh(), lo(), bt(), Pn(), Ze(), Se(), Za(), Vn(), ub(), Fl(), pw = pd("adminSettingsService"), hHt = {
    allowedModels: [],
    blockedModels: [],
    sandGroupAccessMode: B7i.ALL,
    dotCursorProtection: !1,
    browserFeatures: !1,
    browserOriginAllowlist: [],
    allowedMcpConfiguration: void 0,
    byokDisabled: !1,
    marketplaceLeaderboardDisabled: !1,
    enforceHooksReadiness: !1,
    networkDenylist: [],
    networkAllowlist: [],
    cloudAgentEgressAllowlist: [],
    remotePermissionsFilePath: void 0,
    remotePermissionsFilePaths: [],
    localPermissionsFilePath: [],
    permissionsFileOverridesAutoRun: !1,
    autoReview: {
        allowInstructions: [],
        blockInstructions: []
    },
    sharedConversationSettings: {
        enabled: !1,
        allowedVisibilities: [],
        allowPublicIndexing: !1
    },
    sharedCanvasSettings: {
        enabled: !1
    },
    cursorBlameSettings: {
        enabled: !0
    },
    projectsSettings: {
        enabled: !0
    },
    attributionControls: {
        disableAttribution: !1
    },
    pullRequestPreferences: {
        prReviewOpenDestination: VM.UNSPECIFIED
    }
}, Mee = class extends we {
    constructor(e, t, n){
        super(), this.cursorAuthenticationService = e, this.storageService = t, this.hostService = n, this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this.cached = hHt, this.scopeEpoch = 0, this.refreshSequence = 0, this.loadFromStorage(), this.cursorAuthenticationService.addLoginChangedListener(()=>this.handleTeamScopeChange()), this._register(this.cursorAuthenticationService.onDidChangeTeamIds(()=>this.handleTeamScopeChange())), this._register(this.cursorAuthenticationService.onDidChangeActiveTeamId(()=>this.handleTeamScopeChange())), this._register(new SX(async (r)=>{
            await this.refresh(r);
        }, {
            focusedIntervalMs: 300 * 1e3,
            unfocusedIntervalMs: 1800 * 1e3,
            maxIntervalMs: 3600 * 1e3,
            focus: this.hostService,
            context: on
        })).start();
    }
    isCacheForCurrentIdentity() {
        const e = this.storageService.getNumber(Mee.CACHED_TEAM_ID_KEY, -1), t = this.storageService.get(Mee.CACHED_AUTH_ID_KEY, -1), n = this.cursorAuthenticationService.getTeamId(), i = this.cursorAuthenticationService.getCurrentAuthId();
        return e !== void 0 && e === n && t !== void 0 && t === i;
    }
    failClosedPreservingCurrentIdentityBrowser(e) {
        const t = ryv(e);
        return this.isCacheForCurrentIdentity() ? {
            ...t,
            browserFeatures: e.browserFeatures,
            allowSkillsCliInstalls: e.allowSkillsCliInstalls,
            projectsSettings: e.projectsSettings
        } : t;
    }
    handleTeamScopeChange() {
        this.scopeEpoch++;
        const e = JSON.stringify(this.cached);
        this.loadFromStorage(), JSON.stringify(this.cached) !== e && this._onDidChange.fire(this.cached), this.refresh();
    }
    loadFromStorage() {
        const e = syv(this.storageService.getObject(Mee.STORAGE_KEY, -1)) ?? hHt;
        this.cached = this.failClosedPreservingCurrentIdentityBrowser(e);
    }
    saveToStorage(e, t) {
        this.storageService.store(Mee.STORAGE_KEY, JSON.stringify(this.cached), -1, 0), e === void 0 ? this.storageService.remove(Mee.CACHED_TEAM_ID_KEY, -1) : this.storageService.store(Mee.CACHED_TEAM_ID_KEY, e, -1, 0), t === void 0 ? this.storageService.remove(Mee.CACHED_AUTH_ID_KEY, -1) : this.storageService.store(Mee.CACHED_AUTH_ID_KEY, t, -1, 0);
    }
    failClosedCachedTeamScopedSettingsAndNotify(e) {
        const t = JSON.stringify(this.cached);
        this.cached = this.failClosedPreservingCurrentIdentityBrowser(e), JSON.stringify(this.cached) !== t && this._onDidChange.fire(this.cached);
    }
    async refresh(e) {
        const t = JSON.stringify(this.cached), n = this.cursorAuthenticationService.getTeamId(), i = this.cursorAuthenticationService.getCurrentAuthId(), r = this.scopeEpoch, s = ++this.refreshSequence;
        if (!i) return this.cached = hHt, this.saveToStorage(void 0, i), JSON.stringify(this.cached) !== t && this._onDidChange.fire(this.cached), this.cached;
        try {
            const o = await this.cursorAuthenticationService.dashboardClient(), a = n === void 0 ? {
                ...hHt,
                remoteControlV2Policy: (await o.getTeamAdminSettingsOrEmptyIfNotInTeam({}, {
                    signal: e
                })).remoteControlV2Policy
            } : await o.getTeamAdminSettings({
                teamId: n
            }, {
                signal: e
            });
            if (this.scopeEpoch !== r || this.refreshSequence !== s || this.cursorAuthenticationService.getTeamId() !== n || this.cursorAuthenticationService.getCurrentAuthId() !== i) return this.cached;
            this.cached = a, this.saveToStorage(n, i);
        } catch (o) {
            return this.scopeEpoch !== r || this.refreshSequence !== s ? this.cached : (this.failClosedCachedTeamScopedSettingsAndNotify(n === void 0 ? hHt : this.cached), console.warn("[AdminSettingsService] Failed to refresh admin settings, keeping cached settings:", o), this.cached);
        }
        return JSON.stringify(this.cached) !== t && this._onDidChange.fire(this.cached), this.cached;
    }
    getCached() {
        return this.cached;
    }
    getBrowserFeaturesForCurrentIdentity() {
        return this.isCacheForCurrentIdentity() ? this.cached.browserFeatures : void 0;
    }
    getAllowSkillsCliInstallsForCurrentIdentity() {
        return this.isCacheForCurrentIdentity() ? this.cached.allowSkillsCliInstalls : void 0;
    }
    getAutoReviewRunModeResetIssuedAtMsForCurrentIdentity() {
        if (!this.isCacheForCurrentIdentity()) return;
        const e = this.cached.autoReviewRunModeReset;
        return e === void 0 ? void 0 : Number(e.issuedAtMs);
    }
    async getLatest() {
        return await this.refresh();
    }
    async forceRefresh() {
        return await this.refresh();
    }
    isModelBlocked(e) {
        return cto(this.getCached(), e);
    }
    isCursorBlameEnabledForTeam() {
        return this.getCached().cursorBlameSettings?.enabled ?? !1;
    }
    isProjectsEnabledForTeam() {
        return iyv({
            teamId: this.cursorAuthenticationService.getTeamId(),
            enabled: this.getCached().projectsSettings?.enabled,
            cacheMatchesIdentity: this.isCacheForCurrentIdentity()
        });
    }
    isAttributionDisabledByAdmin() {
        return this.getCached().attributionControls?.disableAttribution ?? !1;
    }
}, Mee.STORAGE_KEY = "adminSettings.cached", Mee.CACHED_TEAM_ID_KEY = "adminSettings.cachedTeamId", Mee.CACHED_AUTH_ID_KEY = "adminSettings.cachedAuthId", Mee = ie([
    C(0, na),
    C(1, yn),
    C(2, rc)
], Mee), mn(pw, Mee, 0, 1);

}
