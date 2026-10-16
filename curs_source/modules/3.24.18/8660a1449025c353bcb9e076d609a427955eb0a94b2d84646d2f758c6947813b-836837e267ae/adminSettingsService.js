import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { c_, lie } from "./async.cursor.js";
import { Rs, ss } from "./authenticationService.js";
import { Du, oN, pVr } from "./dashboard_pb.js";
import { Rn } from "./extensions.js";
import { Od, Tc } from "./host.js";
import { It } from "./instantiation.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $t, Bs } from "./window.js";
import { W8a, _F1, bF1, yF1 } from "./yBp.js";
var lb, bTn, Spe;
export { Spe, bTn, lb };
var __wakaru_iS_initialized = false;
export function iS() {
if (__wakaru_iS_initialized) return;
__wakaru_iS_initialized = true;
"use strict";
E(), Du(), Bs(), Gt(), Rn(), It(), Qe(), Rs(), Zi(), c_(), Od(), lb = Il("adminSettingsService"), bTn = {
    allowedModels: [],
    blockedModels: [],
    sandGroupAccessMode: pVr.ALL,
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
        prReviewOpenDestination: oN.UNSPECIFIED
    }
}, Spe = class extends st {
    constructor(t, e, n){
        super(), this.cursorAuthenticationService = t, this.storageService = e, this.hostService = n, this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this.cached = bTn, this.scopeEpoch = 0, this.refreshSequence = 0, this.loadFromStorage(), this.cursorAuthenticationService.addLoginChangedListener(()=>this.handleTeamScopeChange()), this._register(this.cursorAuthenticationService.onDidChangeTeamIds(()=>this.handleTeamScopeChange())), this._register(this.cursorAuthenticationService.onDidChangeActiveTeamId(()=>this.handleTeamScopeChange())), this._register(new lie(async (r)=>{
            await this.refresh(r);
        }, {
            focusedIntervalMs: 300 * 1e3,
            unfocusedIntervalMs: 1800 * 1e3,
            maxIntervalMs: 3600 * 1e3,
            focus: this.hostService,
            context: $t
        })).start();
    }
    isCacheForCurrentIdentity() {
        const t = this.storageService.getNumber(Spe.CACHED_TEAM_ID_KEY, -1), e = this.storageService.get(Spe.CACHED_AUTH_ID_KEY, -1), n = this.cursorAuthenticationService.getTeamId(), i = this.cursorAuthenticationService.getCurrentAuthId();
        return t !== void 0 && t === n && e !== void 0 && e === i;
    }
    failClosedPreservingCurrentIdentityBrowser(t) {
        const e = bF1(t);
        return this.isCacheForCurrentIdentity() ? {
            ...e,
            browserFeatures: t.browserFeatures,
            allowSkillsCliInstalls: t.allowSkillsCliInstalls,
            projectsSettings: t.projectsSettings
        } : e;
    }
    handleTeamScopeChange() {
        this.scopeEpoch++;
        const t = JSON.stringify(this.cached);
        this.loadFromStorage(), JSON.stringify(this.cached) !== t && this._onDidChange.fire(this.cached), this.refresh();
    }
    loadFromStorage() {
        const t = yF1(this.storageService.getObject(Spe.STORAGE_KEY, -1)) ?? bTn;
        this.cached = this.failClosedPreservingCurrentIdentityBrowser(t);
    }
    saveToStorage(t, e) {
        this.storageService.store(Spe.STORAGE_KEY, JSON.stringify(this.cached), -1, 0), t === void 0 ? this.storageService.remove(Spe.CACHED_TEAM_ID_KEY, -1) : this.storageService.store(Spe.CACHED_TEAM_ID_KEY, t, -1, 0), e === void 0 ? this.storageService.remove(Spe.CACHED_AUTH_ID_KEY, -1) : this.storageService.store(Spe.CACHED_AUTH_ID_KEY, e, -1, 0);
    }
    failClosedCachedTeamScopedSettingsAndNotify(t) {
        const e = JSON.stringify(this.cached);
        this.cached = this.failClosedPreservingCurrentIdentityBrowser(t), JSON.stringify(this.cached) !== e && this._onDidChange.fire(this.cached);
    }
    async refresh(t) {
        const e = JSON.stringify(this.cached), n = this.cursorAuthenticationService.getTeamId(), i = this.cursorAuthenticationService.getCurrentAuthId(), r = this.scopeEpoch, s = ++this.refreshSequence;
        if (!i) return this.cached = bTn, this.saveToStorage(void 0, i), JSON.stringify(this.cached) !== e && this._onDidChange.fire(this.cached), this.cached;
        try {
            const o = await this.cursorAuthenticationService.dashboardClient(), a = n === void 0 ? {
                ...bTn,
                remoteControlV2Policy: (await o.getTeamAdminSettingsOrEmptyIfNotInTeam({}, {
                    signal: t
                })).remoteControlV2Policy
            } : await o.getTeamAdminSettings({
                teamId: n
            }, {
                signal: t
            });
            if (this.scopeEpoch !== r || this.refreshSequence !== s || this.cursorAuthenticationService.getTeamId() !== n || this.cursorAuthenticationService.getCurrentAuthId() !== i) return this.cached;
            this.cached = a, this.saveToStorage(n, i);
        } catch (o) {
            return this.scopeEpoch !== r || this.refreshSequence !== s ? this.cached : (this.failClosedCachedTeamScopedSettingsAndNotify(n === void 0 ? bTn : this.cached), console.warn("[AdminSettingsService] Failed to refresh admin settings, keeping cached settings:", o), this.cached);
        }
        return JSON.stringify(this.cached) !== e && this._onDidChange.fire(this.cached), this.cached;
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
        const t = this.cached.autoReviewRunModeReset;
        return t === void 0 ? void 0 : Number(t.issuedAtMs);
    }
    async getLatest() {
        return await this.refresh();
    }
    async forceRefresh() {
        return await this.refresh();
    }
    isModelBlocked(t) {
        return W8a(this.getCached(), t);
    }
    isCursorBlameEnabledForTeam() {
        return this.getCached().cursorBlameSettings?.enabled ?? !1;
    }
    isProjectsEnabledForTeam() {
        return _F1({
            teamId: this.cursorAuthenticationService.getTeamId(),
            enabled: this.getCached().projectsSettings?.enabled,
            cacheMatchesIdentity: this.isCacheForCurrentIdentity()
        });
    }
    isAttributionDisabledByAdmin() {
        return this.getCached().attributionControls?.disableAttribution ?? !1;
    }
}, Spe.STORAGE_KEY = "adminSettings.cached", Spe.CACHED_TEAM_ID_KEY = "adminSettings.cachedTeamId", Spe.CACHED_AUTH_ID_KEY = "adminSettings.cachedAuthId", Spe = Re([
    F(0, ss),
    F(1, ki),
    F(2, Tc)
], Spe), bn(lb, Spe, 0, 1);

}
