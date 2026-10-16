import { Mse, aPu, rh, xhv } from "./De_3.js";
import { C, ie } from "./actions_2.js";
import { zss } from "./agent-store-commands.ts";
import { Ptt, wQi } from "./agentStreamMetadataKey.js";
import { $n, vi } from "./commands.js";
import { xQi } from "./composerSmartModeClassifierAutoMode.js";
import { $7t, Cee, LQe, U7t, _4e } from "./cursor_rules_pb.js";
import { Jh, t$i, wSt } from "./dashboard_pb.js";
import { X0h, r1o, s1o } from "./devSmartModeBlock.js";
import { TQi, i1o } from "./glassWorkspaceLspConstants.js";
import { Ml } from "./index.ts";
import { Hzs } from "./local-pr-creation-forge.ts";
import { J0h, c1o } from "./localPrCreationForgeRequestContext.js";
import { ADn, Bj, DMe, IDn, O0e, RDn, k4e, x$ } from "./request_context_exec_pb.js";
import { x } from "./tslib.es6.js";
import { Ku } from "./utilities_3.js";
import { Jn, ci } from "./workspace.js";
function EQi(e, t) {
    return e.getComposerSmartModeAutoRun(t);
}
function K0h(e, t, n) {
    return e.smartModeClassifierAutoModeEnabled = EQi(t, n), e;
}
function o1o(e) {
    return new Cee({
        fullPath: Hzs,
        content: xhv(e),
        type: new LQe({
            type: {
                case: "global",
                value: new $7t
            }
        }),
        source: U7t.USER,
        environments: [
            "local"
        ]
    });
}
function a1o(e) {
    return aPu(e) === "origin" ? o1o([
        {
            forge: "origin"
        }
    ]) : o1o([]);
}
async function Z0h(e) {
    if (!e.isAuthenticated) {
        e.cache.clear();
        return;
    }
    const t = [
        ...new Set(e.repos.map((r)=>Mse(r.remoteUrl?.trim() ?? "")).filter((r)=>r.length > 0))
    ];
    let n;
    try {
        n = await e.getDashboardClient();
        const r = await n.getRepoSourcePreference?.(e.teamId !== void 0 ? {
            teamId: e.teamId
        } : {});
        r !== void 0 && e.cache.syncRepoSourcePreference(r.effectivePreference);
    } catch  {}
    if (t.length === 0) return a1o(e.repos);
    const i = [];
    for (const r of t){
        const s = e.cache.get(e.teamId, r);
        if (s !== void 0) {
            i.push(s);
            continue;
        }
        n ??= await e.getDashboardClient();
        let o;
        try {
            const a = await n.resolvePrCreationForge({
                repoUrl: r,
                teamId: e.teamId
            });
            o = {
                forge: a.forge === t$i.ORIGIN ? "origin" : "github",
                repoUrl: a.repoUrl || r,
                switchedFromRepoUrl: a.switched ? r : void 0
            }, e.cache.set(e.teamId, r, o);
        } catch  {
            o = {
                forge: aPu([
                    {
                        remoteUrl: r
                    }
                ]),
                repoUrl: r
            };
        }
        i.push(o);
    }
    return o1o(i);
}
function nZv(e, t) {
    const n = (e ?? []).filter((i)=>i.fullPath !== Hzs);
    return t === void 0 ? n : [
        ...n,
        t
    ];
}
function iZv(e) {
    switch(e){
        case "self":
            return DMe.SELF;
        case "peer":
            return DMe.PEER;
        case "share":
            return DMe.SHARE;
        case "principal":
            return DMe.PRINCIPAL;
        default:
            return e;
    }
}
var l1o, IQi;
export { EQi, IQi, K0h, Z0h, a1o, iZv, l1o, nZv, o1o };
var __wakaru_e1h_initialized = false;
export function e1h() {
if (__wakaru_e1h_initialized) return;
__wakaru_e1h_initialized = true;
"use strict";
x(), _4e(), Ml(), Bj(), vi(), Ku(), ci(), i1o(), xQi(), Jh(), X0h(), wQi(), J0h(), l1o = new Cee({
    fullPath: "Glass confetti cannon guidance",
    content: "Celebrate a verified, hard-won milestone in substantial multi-turn work by calling `show_confetti` on `cursor-app-control`. Examples include opening a PR after extensive iteration, getting CI green after repeated fixes, or landing a difficult fix. Use it at most once per milestone, never for routine work; if unavailable, skip it silently.",
    type: new LQe({
        type: {
            case: "global",
            value: new $7t
        }
    })
}), IQi = class {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g){
        this.remoteRequestContextExecutor = e, this.storageService = t, this.reactiveStorageService = n, this.adminSettingsService = i, this.composerModesService = r, this.composerEffectiveAllowlistService = s, this._workspaceContextService = o, this.fileService = a, this.pathService = c, this.environmentService = l, this.commandService = u, this.isWorktree = h, this.cursorAuthenticationService = p, this.runtimeChecks = g, this.localPrCreationForgeCache = new c1o;
    }
    getPermissionsAutoRunInstructionsProto(e) {
        if (!(e.allowInstructions.length === 0 && e.blockInstructions.length === 0)) return new O0e({
            allowInstructions: e.allowInstructions,
            blockInstructions: e.blockInstructions
        });
    }
    getAdminAutoRunInstructionsProto() {
        const e = this.adminSettingsService.getCached(), t = e.autoReview, n = e.autoRunControls?.enabled === !0 && (e.autoRunControls.enableSmartAuto ?? e.autoRunControls.enableRunEverything) === !0;
        if (!(t === void 0 || !n)) return new O0e({
            allowInstructions: t.allowInstructions,
            blockInstructions: t.blockInstructions
        });
    }
    async isGlassWorkspaceLspEnabled() {
        if (!this.environmentService.isGlass) return !1;
        try {
            return await this.commandService.executeCommand(TQi) ?? !1;
        } catch  {
            return !1;
        }
    }
    resolveAgentStoreConversationId(e, t) {
        try {
            const i = e.get(Ptt)?.conversationId?.trim();
            if (i !== void 0 && i.length > 0) return i;
        } catch  {}
        const n = t.notesSessionId?.trim();
        if (n !== void 0 && n.length > 0) return n;
    }
    shouldResumeAgentStore(e) {
        try {
            return e.get(Ptt)?.resumeAgentStore === !0;
        } catch  {
            return !1;
        }
    }
    async fetchMountedAgentStores(e, t) {
        const n = this.resolveAgentStoreConversationId(e, t);
        if (n === void 0) return [];
        try {
            return ((await this.commandService.executeCommand(zss, {
                conversationId: n,
                ...this.shouldResumeAgentStore(e) ? {
                    resume: !0
                } : {}
            }))?.stores ?? []).map((r)=>new RDn({
                    path: r.path,
                    kind: iZv(r.kind),
                    alias: r.alias,
                    readOnly: r.readOnly === !0
                }));
        } catch  {
            return [];
        }
    }
    applyMountedAgentStoresToEnv(e, t) {
        return new k4e({
            ...e,
            mountedAgentStores: [
                ...t
            ]
        });
    }
    async resolveLocalPrCreationForgeRule(e) {
        const t = this.cursorAuthenticationService.isAuthenticated(), n = (e?.gitRepos ?? []).map((i)=>({
                remoteUrl: i.remoteUrl,
                isOriginBacked: i.isOriginBacked
            }));
        if (!this.runtimeChecks.isPrCreationForgeGuidanceEnabled()) {
            this.localPrCreationForgeCache.clear();
            return;
        }
        try {
            return await Z0h({
                repos: n,
                isAuthenticated: t,
                teamId: this.cursorAuthenticationService.getTeamId(),
                getDashboardClient: ()=>this.cursorAuthenticationService.dashboardClient(),
                cache: this.localPrCreationForgeCache
            });
        } catch  {
            return t ? a1o(n) : void 0;
        }
    }
    consumeDevSmartModeClassifierToken(e) {
        if (this.environmentService.isBuilt) return;
        const t = this.storageService.get(e, -1);
        return t !== void 0 && t.length > 0 && this.storageService.remove(e, -1), t;
    }
    async execute(e, t, n) {
        const i = this.remoteRequestContextExecutor.execute(e, t, n), r = this.fetchMountedAgentStores(e, t), s = this.isGlassWorkspaceLspEnabled();
        r.then(void 0, ()=>{}), s.then(void 0, ()=>{});
        const o = await i;
        if (o.result.case !== "success") return o;
        const a = o.result.value.requestContext, c = this.resolveLocalPrCreationForgeRule(a);
        let l = a?.env ?? new k4e, u;
        if (l !== void 0) {
            const W = this.consumeDevSmartModeClassifierToken(r1o), G = this.consumeDevSmartModeClassifierToken(s1o), q = this.composerEffectiveAllowlistService.shouldPermissionsFileConstrainUnrestrictedMode(), z = this.resolveAgentStoreConversationId(e, t), X = this.composerModesService.getComposerAutoRun(z), Z = this.composerModesService.getComposerFullAutoRun(z) && !q;
            let K;
            X ? Z ? K = "unrestricted" : K = "allowlist" : K = "manual";
            const J = this.reactiveStorageService.applicationUserPersistentStorage.composerState.useLegacyTerminalTool ?? !1, ne = rh(this.storageService, "sandboxSupported") && !J, ee = rh(this.storageService, "sandboxAutoRunSettingEnabled") ?? !0, se = K === "allowlist", re = this.adminSettingsService.getCached().autoRunControls?.sandboxingControls?.sandboxing === wSt.DISABLED, ue = ne && se && ee && this._workspaceContextService.getWorkspace().folders.length >= 1 && !re;
            u = K0h(new k4e({
                ...l,
                sandboxEnabled: ue,
                sandboxSupported: ne
            }), this.composerModesService, z), W !== void 0 && W.length > 0 && (u.devForceNextSmartModeClassifierBlockToken = W), G !== void 0 && G.length > 0 && (u.devDelayNextSmartModeClassifierToken = G);
        }
        const p = this.reactiveStorageService.applicationUserPersistentStorage.composerState.isWebSearchToolEnabled3 ?? !0, f = this.reactiveStorageService.applicationUserPersistentStorage.composerState.isWebFetchToolEnabled ?? !0, v = this.adminSettingsService.isAttributionDisabledByAdmin(), b = !v && (rh(this.storageService, "attributeCommitsToAgent") ?? !0), y = !v && (rh(this.storageService, "attributePRsToAgent") ?? !0), [T, E, A] = await Promise.all([
            r,
            s,
            c
        ]);
        u !== void 0 && (l = this.applyMountedAgentStoresToEnv(u, T));
        const R = !this.isWorktree && (!this.environmentService.isGlass || E), D = this.getAdminAutoRunInstructionsProto(), N = this.runtimeChecks.isAdminCommandDenylistEnforcementKilled() ? [] : [
            ...this.adminSettingsService.getCached().autoRunControls?.adminCommandDenylist?.rules ?? []
        ], O = (D?.allowInstructions.length ?? 0) > 0 || (D?.blockInstructions.length ?? 0) > 0, F = nZv(a?.rules ?? [], A);
        let H = F;
        this.environmentService.isGlass && this.runtimeChecks.isConfettiCannonFeatureEnabled() && !this.runtimeChecks.isMotionReduced() && rh(this.storageService, "agentConfettiCannonEnabled") && (H = [
            ...F,
            l1o
        ]);
        const $ = new x$({
            ...a,
            env: l,
            rules: H,
            webSearchEnabled: p,
            webFetchEnabled: f,
            readLintsEnabled: R,
            commitAttributionMessage: b ? "enabled" : void 0,
            prAttributionMessage: y ? "enabled" : void 0,
            userPermissionsAutoRun: O ? void 0 : this.getPermissionsAutoRunInstructionsProto(this.composerEffectiveAllowlistService.getPermissionsFileAutoRunInstructions()),
            projectPermissionsAutoRun: O ? void 0 : this.getPermissionsAutoRunInstructionsProto(this.composerEffectiveAllowlistService.getProjectPermissionsFileAutoRunInstructions()),
            adminPermissionsAutoRun: D,
            adminCommandDenylist: N
        });
        return new IDn({
            result: {
                case: "success",
                value: new ADn({
                    requestContext: $
                })
            }
        });
    }
}, IQi = ie([
    C(6, Jn),
    C(10, $n)
], IQi);

}
