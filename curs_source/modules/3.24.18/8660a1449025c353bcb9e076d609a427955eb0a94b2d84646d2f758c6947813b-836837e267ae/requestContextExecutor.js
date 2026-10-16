import { fdg, ibk, pdg, rbk, ull } from "./Ycg.js";
import { aIo } from "./agent-store-commands.ts";
import { eos, kat } from "./agentStreamMetadataKey.js";
import { nr, rs } from "./commands.js";
import { ros } from "./composerSmartModeClassifierAutoMode.js";
import { Wde, Xet, Y_t, hmn } from "./cursor_rules_pb.js";
import { $Wt, Du } from "./dashboard_pb.js";
import { all, gdg, lll } from "./devSmartModeBlock.js";
import { YEi, nos } from "./glassWorkspaceLspConstants.js";
import { nl } from "./index.ts";
import { Dh } from "./ipa.js";
import { _dg, dll } from "./localPrCreationForgeRequestContext.js";
import { Gte, Sni, c5e, itt, kni, mY, wni } from "./request_context_exec_pb.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { Sr, yr } from "./workspace.js";
var hll, sos;
export { hll, sos };
var __wakaru_bdg_initialized = false;
export function bdg() {
if (__wakaru_bdg_initialized) return;
__wakaru_bdg_initialized = true;
"use strict";
E(), Xet(), nl(), Gte(), rs(), wu(), Sr(), nos(), ros(), Du(), gdg(), eos(), _dg(), hll = new Wde({
    fullPath: "Glass confetti cannon guidance",
    content: "Celebrate a verified, hard-won milestone in substantial multi-turn work by calling `show_confetti` on `cursor-app-control`. Examples include opening a PR after extensive iteration, getting CI green after repeated fixes, or landing a difficult fix. Use it at most once per milestone, never for routine work; if unavailable, skip it silently.",
    type: new Y_t({
        type: {
            case: "global",
            value: new hmn
        }
    })
}), sos = class {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p){
        this.remoteRequestContextExecutor = t, this.storageService = e, this.reactiveStorageService = n, this.adminSettingsService = i, this.composerModesService = r, this.composerEffectiveAllowlistService = s, this._workspaceContextService = o, this.fileService = a, this.pathService = l, this.environmentService = c, this.commandService = u, this.isWorktree = d, this.cursorAuthenticationService = h, this.runtimeChecks = p, this.localPrCreationForgeCache = new dll;
    }
    getPermissionsAutoRunInstructionsProto(t) {
        if (!(t.allowInstructions.length === 0 && t.blockInstructions.length === 0)) return new c5e({
            allowInstructions: t.allowInstructions,
            blockInstructions: t.blockInstructions
        });
    }
    getAdminAutoRunInstructionsProto() {
        const t = this.adminSettingsService.getCached(), e = t.autoReview, n = t.autoRunControls?.enabled === !0 && (t.autoRunControls.enableSmartAuto ?? t.autoRunControls.enableRunEverything) === !0;
        if (!(e === void 0 || !n)) return new c5e({
            allowInstructions: e.allowInstructions,
            blockInstructions: e.blockInstructions
        });
    }
    async isGlassWorkspaceLspEnabled() {
        if (!this.environmentService.isGlass) return !1;
        try {
            return await this.commandService.executeCommand(YEi) ?? !1;
        } catch  {
            return !1;
        }
    }
    resolveAgentStoreConversationId(t, e) {
        try {
            const i = t.get(kat)?.conversationId?.trim();
            if (i !== void 0 && i.length > 0) return i;
        } catch  {}
        const n = e.notesSessionId?.trim();
        if (n !== void 0 && n.length > 0) return n;
    }
    shouldResumeAgentStore(t) {
        try {
            return t.get(kat)?.resumeAgentStore === !0;
        } catch  {
            return !1;
        }
    }
    async fetchMountedAgentStores(t, e) {
        const n = this.resolveAgentStoreConversationId(t, e);
        if (n === void 0) return [];
        try {
            return ((await this.commandService.executeCommand(aIo, {
                conversationId: n,
                ...this.shouldResumeAgentStore(t) ? {
                    resume: !0
                } : {}
            }))?.stores ?? []).map((r)=>new wni({
                    path: r.path,
                    kind: rbk(r.kind),
                    alias: r.alias,
                    readOnly: r.readOnly === !0
                }));
        } catch  {
            return [];
        }
    }
    applyMountedAgentStoresToEnv(t, e) {
        return new itt({
            ...t,
            mountedAgentStores: [
                ...e
            ]
        });
    }
    async resolveLocalPrCreationForgeRule(t) {
        const e = this.cursorAuthenticationService.isAuthenticated(), n = (t?.gitRepos ?? []).map((i)=>({
                remoteUrl: i.remoteUrl,
                isOriginBacked: i.isOriginBacked
            }));
        if (!this.runtimeChecks.isPrCreationForgeGuidanceEnabled()) {
            this.localPrCreationForgeCache.clear();
            return;
        }
        try {
            return await fdg({
                repos: n,
                isAuthenticated: e,
                teamId: this.cursorAuthenticationService.getTeamId(),
                getDashboardClient: ()=>this.cursorAuthenticationService.dashboardClient(),
                cache: this.localPrCreationForgeCache
            });
        } catch  {
            return e ? ull(n) : void 0;
        }
    }
    consumeDevSmartModeClassifierToken(t) {
        if (this.environmentService.isBuilt) return;
        const e = this.storageService.get(t, -1);
        return e !== void 0 && e.length > 0 && this.storageService.remove(t, -1), e;
    }
    async execute(t, e, n) {
        const i = this.remoteRequestContextExecutor.execute(t, e, n), r = this.fetchMountedAgentStores(t, e), s = this.isGlassWorkspaceLspEnabled();
        r.then(void 0, ()=>{}), s.then(void 0, ()=>{});
        const o = await i;
        if (o.result.case !== "success") return o;
        const a = o.result.value.requestContext, l = this.resolveLocalPrCreationForgeRule(a);
        let c = a?.env ?? new itt, u;
        if (c !== void 0) {
            const U = this.consumeDevSmartModeClassifierToken(all), j = this.consumeDevSmartModeClassifierToken(lll), $ = this.composerEffectiveAllowlistService.shouldPermissionsFileConstrainUnrestrictedMode(), H = this.resolveAgentStoreConversationId(t, e), G = this.composerModesService.getComposerAutoRun(H), K = this.composerModesService.getComposerFullAutoRun(H) && !$;
            let V;
            G ? K ? V = "unrestricted" : V = "allowlist" : V = "manual";
            const Y = this.reactiveStorageService.applicationUserPersistentStorage.composerState.useLegacyTerminalTool ?? !1, J = Dh(this.storageService, "sandboxSupported") && !Y, Q = Dh(this.storageService, "sandboxAutoRunSettingEnabled") ?? !0, te = V === "allowlist", ee = this.adminSettingsService.getCached().autoRunControls?.sandboxingControls?.sandboxing === $Wt.DISABLED, re = J && te && Q && this._workspaceContextService.getWorkspace().folders.length >= 1 && !ee;
            u = pdg(new itt({
                ...c,
                sandboxEnabled: re,
                sandboxSupported: J
            }), this.composerModesService, H), U !== void 0 && U.length > 0 && (u.devForceNextSmartModeClassifierBlockToken = U), j !== void 0 && j.length > 0 && (u.devDelayNextSmartModeClassifierToken = j);
        }
        const h = this.reactiveStorageService.applicationUserPersistentStorage.composerState.isWebSearchToolEnabled3 ?? !0, g = this.reactiveStorageService.applicationUserPersistentStorage.composerState.isWebFetchToolEnabled ?? !0, f = this.adminSettingsService.isAttributionDisabledByAdmin(), _ = !f && (Dh(this.storageService, "attributeCommitsToAgent") ?? !0), b = !f && (Dh(this.storageService, "attributePRsToAgent") ?? !0), [y, S, k] = await Promise.all([
            r,
            s,
            l
        ]);
        u !== void 0 && (c = this.applyMountedAgentStoresToEnv(u, y));
        const C = !this.isWorktree && (!this.environmentService.isGlass || S), T = this.getAdminAutoRunInstructionsProto(), A = this.runtimeChecks.isAdminCommandDenylistEnforcementKilled() ? [] : [
            ...this.adminSettingsService.getCached().autoRunControls?.adminCommandDenylist?.rules ?? []
        ], P = (T?.allowInstructions.length ?? 0) > 0 || (T?.blockInstructions.length ?? 0) > 0, M = ibk(a?.rules ?? [], k);
        let O = M;
        this.environmentService.isGlass && this.runtimeChecks.isConfettiCannonFeatureEnabled() && !this.runtimeChecks.isMotionReduced() && Dh(this.storageService, "agentConfettiCannonEnabled") && (O = [
            ...M,
            hll
        ]);
        const N = new mY({
            ...a,
            env: c,
            rules: O,
            webSearchEnabled: h,
            webFetchEnabled: g,
            readLintsEnabled: C,
            commitAttributionMessage: _ ? "enabled" : void 0,
            prAttributionMessage: b ? "enabled" : void 0,
            userPermissionsAutoRun: P ? void 0 : this.getPermissionsAutoRunInstructionsProto(this.composerEffectiveAllowlistService.getPermissionsFileAutoRunInstructions()),
            projectPermissionsAutoRun: P ? void 0 : this.getPermissionsAutoRunInstructionsProto(this.composerEffectiveAllowlistService.getProjectPermissionsFileAutoRunInstructions()),
            adminPermissionsAutoRun: T,
            adminCommandDenylist: A
        });
        return new Sni({
            result: {
                case: "success",
                value: new kni({
                    requestContext: N
                })
            }
        });
    }
}, sos = Re([
    F(6, yr),
    F(10, nr)
], sos);

}
