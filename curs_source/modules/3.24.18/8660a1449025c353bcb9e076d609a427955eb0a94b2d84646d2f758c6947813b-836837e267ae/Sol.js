import { TD, Tr, VR, Ya } from "./Iwo.js";
import { PIo, Pke, RIo, Und, hA, kky, t_t } from "./SZu.js";
import { N6e, NM, eqr } from "./ipa.js";
import { DEn, MEn, RCt, bPe, iw, y7a } from "./yBp.js";
import { Psk } from "./gYa.js";
import { Eag, Ggk, PE, Pgk, _gk, qgk, vol, xag, yag, zgk } from "./Aeg.js";
import { TD as TD$2, Tr as Tr$2 } from "./Iwo.js";
import { Xag } from "./admin-mcp-policy.ts";
import { Ecg, xal } from "./agentMigrationFailureClassifier.js";
import { Fcg, Lss, Ocg, Oss, uAn } from "./cloudProjects.js";
import { yt } from "./codicons.js";
import { mo } from "./composer_pb.js";
import { Us } from "./connect-error.js";
import { REi, Slg, Xol, _lg, blg, mlg, pss, vlg, ylg } from "./cursorBackendMcpToolDisplay.js";
import { $Wt, eGt, g1i, m1i } from "./dashboard_pb.js";
import { ilg } from "./default-auth.ts";
import { EGt, e$a } from "./extensionManagement.js";
import { Ose } from "./hash.js";
import { Jlg, Qlg, acg, ccg, dcg, ecg, fcg, gcg, hcg, icg, lcg, mcg, ncg, ocg, pcg, rcg, scg, tcg, ucg, vcg } from "./internals.mjs";
import { ycg } from "./knowledgeBaseService.js";
import { Ilg } from "./mcp-config-service.ts";
import { Qag } from "./mcp-tool-annotations_2.ts";
import { DIo } from "./mcp.ts";
import { vss } from "./mcpConfigService.js";
import { llg } from "./mcpEnvExpansion.js";
import { Hns } from "./mcpProcessServerIdentifier.js";
import { $lg, Cle, Wlg, bal, oAn, qlg, rAn, sAn, yal } from "./mcpService.js";
import { ED } from "./process.js";
import { elg } from "./resolved-oauth-client-id.ts";
import { Wol, nlg } from "./rest-mcp-provider-metadata.ts";
import { OO, kA, xB } from "./toolCallHumanReviewTypes.js";
import { GTt, Gcg, QM } from "./toolUtils.js";
import { Ct } from "./tools_pb.js";
import { Mde } from "./tracing_2.js";
import { Uol } from "./triggersNamingGate.js";
function Kgk(t) {
    switch(t){
        case $Wt.DISABLED:
            return "disabled";
        case $Wt.ENABLED:
        case $Wt.UNSPECIFIED:
        default:
            return "enabled";
    }
}
function Ygk(t) {
    switch(t){
        case m1i.ALWAYS_DISABLED:
            return "always_disabled";
        case m1i.USER_CONTROLLED:
        case m1i.UNSPECIFIED:
        default:
            return "user_controlled";
    }
}
function Xgk(t) {
    switch(t){
        case g1i.ALWAYS_DISABLED:
            return "always_disabled";
        case g1i.USER_CONTROLLED:
        case g1i.UNSPECIFIED:
        default:
            return "user_controlled";
    }
}
function kol(t) {
    const e = t.applicationUserPersistentStorage.composerState;
    return {
        isAdminControlled: !1,
        isDisabledByAdmin: !1,
        browserFeatures: !0,
        browserFeaturesVerdict: "allowed",
        allowedCommands: e.yoloCommandAllowlist ?? [],
        blockedCommands: e.yoloCommandDenylist ?? [],
        deleteFileProtection: e.yoloDeleteFileDisabled ?? !1,
        outsideWorkspaceProtection: e.yoloOutsideWorkspaceDisabled ?? !0,
        enableAllowlistMode: !0,
        enableRunEverything: e.yoloEnableRunEverything ?? !1,
        enableSmartAuto: e.enableSmartAuto ?? !1,
        mcpAllowedTools: e.mcpAllowedTools ?? [],
        mcpToolsProtection: e.yoloMcpToolsDisabled ?? !0,
        playwrightProtection: e.playwrightProtection ?? !0
    };
}
export function Mag(t) {
    const e = _gk({
        isLoading: !1,
        failClosed: t.hasTeam && t.cachedBrowserFeatures === void 0,
        liveAdminBrowserFeatures: t.cachedBrowserFeatures,
        clientBrowserFeatures: t.clientBrowserFeatures
    });
    return {
        browserFeatures: e.browserFeatures,
        browserFeaturesVerdict: e.verdict
    };
}
function wol(t, e, n) {
    return Mag({
        hasTeam: e.getTeamId() !== void 0,
        cachedBrowserFeatures: n.getBrowserFeaturesForCurrentIdentity(),
        clientBrowserFeatures: kol(t).browserFeatures
    });
}
export function Dag(t, e) {
    return Ggk({
        autoRunControls: t?.autoRunControls,
        allowedMcpServers: e ? t?.allowedMcpConfiguration?.allowedMcpServers : void 0
    });
}
export async function Col(t, e) {
    const n = await t.dashboardClient(), i = t.getTeamId();
    if (i) try {
        const r = await n.getTeamAdminSettings({
            teamId: i
        });
        if (r) try {
            const s = new eGt(r);
            e.store("autorun.cachedAdminSettings", s.toJsonString(), -1, 1);
        } catch (s) {
            console.error("Failed to cache admin settings:", s);
        }
        return r;
    } catch (r) {
        console.error("Failed to fetch team admin settings:", r);
        const s = e.get("autorun.cachedAdminSettings", -1);
        if (s) try {
            return eGt.fromJsonString(s, {
                ignoreUnknownFields: !0
            });
        } catch (o) {
            console.error("Failed to parse cached admin settings:", o);
        }
        throw r;
    }
}
function sss(t, e, n) {
    const i = e instanceof Error ? e : new Error(String(e));
    t === Mde ? t_t(i, n) : t.reportException(i, n);
}
function Tol(t, e, n) {
    if (e instanceof Error && TD.isErrorNoTelemetry(e)) {
        const i = e.constructor?.name || e.name || "Error", r = new Error("<redacted: ErrorNoTelemetry>");
        r.name = i, r.stack = "", sss(t, r, {
            ...n,
            "autorun.settings.error.no_telemetry": !0
        });
        return;
    }
    sss(t, e, n);
}
async function Zgk(t, e, n, i, r, s) {
    const o = hA("settings.autorun.refresh");
    try {
        let a;
        try {
            a = await Col(e, i);
        } catch (P) {
            if (console.error("[AutorunSettings] Failed to fetch admin settings (network error, no cache available):", {
                error: P instanceof Error ? {
                    name: P.name,
                    message: P.message,
                    stack: P.stack
                } : P
            }), sss(o, P, {
                "autorun.settings.error": "fetch_admin_settings_failed",
                "autorun.settings.cache_available": "false"
            }), xol()) {
                console.warn("[AutorunSettings] Admin settings temporarily unavailable but were previously enforced - keeping existing restrictions");
                const O = wol(t, e, s);
                Qxn({
                    ...Zxn(),
                    ...O
                });
                return;
            }
            a = void 0;
        }
        const l = a?.autoRunControls?.enabled ?? !1;
        Hag(l);
        const c = kol(t), u = wol(t, e, s), d = a === void 0 ? void 0 : qgk(a.autoRunControls?.sandboxingControls?.sandboxReadBoundary), h = a === void 0 ? void 0 : d === "workspace" ? zgk(a.autoRunControls?.sandboxingControls?.sandboxReadAllowlistPaths) : [], p = a?.autoRunControls?.sandboxingControls?.allowUserOverrideSandboxReadAllowlist !== !1;
        let g;
        if (l) {
            const P = a?.autoRunControls?.allowed ?? [], M = a?.autoRunControls?.blocked ?? [], O = a?.autoRunControls?.enableAllowlistMode ?? !0, N = a?.autoRunControls?.enableRunEverything ?? !1, U = a?.autoRunControls?.enableSmartAuto ?? N, j = r.checkFeatureGate(Uag, {
                disableExposureLog: !0
            }), $ = Dag(a, j), H = a?.autoRunControls?.sandboxingControls;
            g = {
                isAdminControlled: !0,
                isDisabledByAdmin: !1,
                browserFeatures: u.browserFeatures,
                browserFeaturesVerdict: u.browserFeaturesVerdict,
                allowedCommands: P,
                blockedCommands: M,
                deleteFileProtection: a?.autoRunControls?.deleteFileProtection ?? !1,
                enableAllowlistMode: O,
                enableRunEverything: N,
                enableSmartAuto: U,
                outsideWorkspaceProtection: !0,
                mcpAllowedTools: $,
                mcpToolsProtection: a?.autoRunControls?.disableMcpAutoRun ?? !1,
                playwrightProtection: a?.autoRunControls?.browserProtection || a?.autoRunControls?.disableMcpAutoRun || !1,
                sandboxingControls: H ? {
                    sandboxing: Kgk(H.sandboxing),
                    sandboxNetworking: Ygk(H.sandboxNetworking),
                    sandboxGit: Xgk(H.sandboxGit),
                    sandboxReadBoundary: d ?? "system",
                    sandboxReadAllowlistPaths: h ?? []
                } : void 0,
                adminSandboxReadBoundary: d,
                adminSandboxReadAllowlistPaths: h,
                adminSandboxAllowUserOverrideReadAllowlist: p
            };
        } else g = {
            ...c,
            browserFeatures: u.browserFeatures,
            browserFeaturesVerdict: u.browserFeaturesVerdict,
            adminSandboxReadBoundary: d,
            adminSandboxReadAllowlistPaths: h,
            adminSandboxAllowUserOverrideReadAllowlist: p
        };
        const f = a?.cursorIgnoreControls?.hierarchicalEnabled ?? !1, _ = a?.cursorIgnoreControls?.ignoreSymlinks ?? !1;
        if (t.applicationUserPersistentStorage.teamAdminSettings) {
            const P = t.applicationUserPersistentStorage.teamAdminSettings, M = {
                ...P,
                cursorIgnore: {
                    ...P.cursorIgnore,
                    hierarchicalEnabled: f,
                    ignoreSymlinks: _
                },
                extensionSigningSettings: {
                    verificationEnabled: a?.extensionSigningSettings?.verificationEnabled ?? !1
                },
                extensionInstallCooldownSettings: {
                    cooldownHours: a?.extensionInstallCooldownSettings?.cooldownHours ?? 0
                }
            };
            t.setApplicationUserPersistentStorage("teamAdminSettings", M);
        }
        Qxn(g), lss(!1);
        const b = a?.workspaceTrustControls?.enabled ?? !1;
        if (b !== Aol && b) {
            const P = "security.workspace.trust.enabled";
            if (n.inspect(P).policyValue === void 0) try {
                await n.updateValue(P, b, 2), Aol = b;
            } catch (O) {
                console.error("Failed to update workspace trust setting:", O), Tol(o, O, {
                    "autorun.settings.error": "update_workspace_trust_failed"
                });
            }
        }
        const y = a?.allowedExtensions, S = y && y.trim() !== "" ? y : void 0, k = EGt, C = n.inspect(k);
        if (S !== void 0 && S !== css) if (C.policyValue === void 0) try {
            const P = JSON.parse(S);
            if (typeof P != "object" || P === null || Array.isArray(P)) throw new Error(`Invalid allowedExtensions format: expected object, got ${Array.isArray(P) ? "array" : typeof P}`);
            const M = P;
            await n.updateValue(k, M, 2), css = S;
        } catch (P) {
            P instanceof SyntaxError || P instanceof Error && P.message.includes("Invalid allowedExtensions format") ? sss(o, P, {
                "autorun.settings.error": "parse_allowed_extensions_failed",
                "allowedExtensions.value": S ? S.substring(0, 100) : "undefined"
            }) : Tol(o, P, {
                "autorun.settings.error": "update_allowed_extensions_failed"
            });
        }
        else css = S;
        const I = a?.extensionInstallCooldownSettings?.cooldownHours, A = I !== void 0 && I > 0 ? I : void 0;
        if (A !== void 0) {
            const P = e$a, M = n.inspect(P), O = typeof M.userValue == "number" ? M.userValue : void 0;
            if (!(A === uss && O === A)) if (M.policyValue === void 0) try {
                await n.updateValue(P, A, 2), uss = A;
            } catch (U) {
                Tol(o, U, {
                    "autorun.settings.error": "update_install_cooldown_hours_failed"
                });
            }
            else uss = A;
        }
    } finally{
        o.end();
    }
}
export function Nag(t, e, n, i, r, s) {
    const o = ()=>Zgk(t, e, i, n, r, s), a = ()=>{
        const c = wol(t, e, s);
        Qxn({
            ...Zxn(),
            ...c
        });
    };
    Oag(o), a(), o(), e.addLoginChangedListener(async ()=>{
        Qxn({
            ...Zxn(),
            browserFeatures: !1,
            browserFeaturesVerdict: "loading"
        }), lss(!0), await new Promise((c)=>setTimeout(c, 500)), o();
    }), s.onDidChange(()=>{
        a(), o();
    }), t.createScoped({}).onChangeEffect({
        deps: [
            ()=>t.applicationUserPersistentStorage.composerState.yoloCommandAllowlist,
            ()=>t.applicationUserPersistentStorage.composerState.yoloCommandDenylist,
            ()=>t.applicationUserPersistentStorage.composerState.yoloDeleteFileDisabled,
            ()=>t.applicationUserPersistentStorage.composerState.yoloOutsideWorkspaceDisabled,
            ()=>t.applicationUserPersistentStorage.composerState.yoloEnableRunEverything,
            ()=>t.applicationUserPersistentStorage.composerState.mcpAllowedTools,
            ()=>t.applicationUserPersistentStorage.composerState.yoloMcpToolsDisabled,
            ()=>t.applicationUserPersistentStorage.composerState.playwrightProtection
        ],
        onChange: ()=>{
            xol() || (Qxn({
                ...kol(t),
                browserFeatures: !1,
                browserFeaturesVerdict: "loading"
            }), lss(!0)), o();
        }
    });
}
export function T2() {
    return Zxn();
}
export function Eol(t) {
    return !t.isAdminControlled;
}
export async function Lag() {
    Rol && await Rol();
}
export function Oag(t) {
    Rol = t;
}
export function Fag() {
    return {
        settings: Zxn(),
        isLoading: $ag()
    };
}
export function Iol(t) {
    return t ? Jxn.SANDBOX_MODE : Jxn.ALLOWLIST_MODE;
}
export function Bag(t) {
    return t ? Jxn.RUN_EVERYTHING_SANDBOX_AVAILABLE : Jxn.RUN_EVERYTHING_SANDBOX_UNAVAILABLE;
}
export async function oss(t) {
    const { prettyDialogService: e, reactiveStorageService: n, sandboxAvailable: i } = t;
    if (n.applicationUserPersistentStorage.composerState.doNotShowFullYoloModeWarningAgain === !0) return "confirmed";
    const s = await e.openDialog({
        title: "Enable Run Everything?",
        message: Bag(i),
        dialogIcon: yt.warning,
        dialogIconColor: "var(--vscode-notificationsWarningIcon-foreground)",
        primaryButton: {
            id: Pol,
            label: "Enable Run Everything"
        },
        cancelButton: {
            id: Dol,
            label: "Cancel"
        },
        extraButtons: [
            {
                id: Mol,
                label: i ? "Use Sandbox instead" : "Use Allowlist instead",
                type: "secondary"
            }
        ]
    });
    return s === Pol ? (n.setApplicationUserPersistentStorage("composerState", "doNotShowFullYoloModeWarningAgain", !0), "confirmed") : s === Mol ? "switch-to-safer" : "cancelled";
}
export async function ass(t) {
    return await t.prettyDialogService.openDialog({
        title: "Leave Ask Every Time?",
        message: Lol,
        dialogIcon: yt.info,
        dialogIconColor: "var(--cursor-text-secondary)",
        primaryButton: {
            id: Nol,
            label: "Continue"
        },
        cancelButton: {
            id: Dol,
            label: "Cancel"
        }
    }) === Nol ? "confirmed" : "cancelled";
}
var Rol;
export function X4(t) {
    return "type" in t && t.type === "folder";
}
export function Vag(t) {
    return t.checkFeatureGate(Uol, {
        disableExposureLog: !0
    });
}
function Qgk(t) {
    return t.url?.startsWith(Xag) === !0;
}
function Kag(t) {
    const e = t?.trim();
    return e === void 0 || e.length === 0 ? void 0 : e;
}
function Yag(t) {
    const e = t?.trim();
    return e === void 0 || e.length === 0 ? void 0 : e;
}
function Jgk(t, e, n) {
    const i = n?.matchesServerUrlPattern ?? Eag;
    return (e ?? []).some((r)=>{
        const s = Kag(r.command), o = Yag(r.serverUrl);
        if (!(s !== void 0) && !(o !== void 0)) return !1;
        const c = s === void 0 || t.command !== void 0 && vol(s, t.command), u = o === void 0 || t.url !== void 0 && i(o, t.url);
        return c && u;
    });
}
function efk(t, e, n) {
    return e.length > 0 && tfk(t, e, n);
}
function tfk(t, e, n) {
    const i = n?.matchesServerUrlPattern ?? Eag;
    return e.some((r)=>{
        const s = Kag(r.command), o = Yag(r.serverUrl);
        if (!(s !== void 0) && !(o !== void 0)) return !1;
        const c = s === void 0 || t.command !== void 0 && vol(s, t.command), u = o === void 0 || t.url !== void 0 && i(o, t.url);
        return c && u;
    });
}
function nfk(t, e, n) {
    if (e === void 0) return !0;
    if (e.disableAll === !0) return !1;
    if (Qgk(t)) return !0;
    const i = e.allowedMcpServers ?? [];
    return i.length === 0 && e.allowUserOverrideMcpServers !== !0 || efk(t, i, n) ? !0 : e.allowUserOverrideMcpServers === !0 ? !Jgk(t, e.deniedMcpServers, n) : !1;
}
function rfk(t) {
    return t?.[DIo] === !0;
}
export function Zag(t) {
    return t === void 0 || t.destructiveHint === !0 ? !1 : t.readOnlyHint === !0;
}
function sfk(t) {
    return Zag(t) ? "declared_read" : t?.readOnlyHint === !1 || t?.destructiveHint === !0 ? "write" : "unannotated";
}
export function ofk(t) {
    if (t === void 0) return {};
    const e = {};
    typeof t.title == "string" && t.title.length > 0 && (e.title = t.title.slice(0, Qag));
    for (const n of [
        "readOnlyHint",
        "destructiveHint",
        "idempotentHint",
        "openWorldHint"
    ])typeof t[n] == "boolean" && (e[n] = t[n]);
    return rfk(t) && (e[DIo] = !0), Object.keys(e).length === 0 ? {} : {
        annotationsJson: JSON.stringify(e)
    };
}
function Jag(t) {
    if (t === void 0) return;
    const e = t.trim();
    if (e.length !== 0) return elg.test(e) ? e : void 0;
}
export function Hol(t) {
    if (Jag(t) !== void 0) return;
    const e = t?.trim();
    return e && e.length > 0 ? e : void 0;
}
export function afk(t, e) {
    const n = Hol(e);
    return n !== void 0 ? n : Jag(t);
}
async function lfk(t, e = fetch) {
    if (Und(t) === void 0) return;
    const n = new URL(t), i = `${n.origin}/.well-known/oauth-protected-resource${n.pathname.replace(/\/+$/, "")}`, r = Wol.get(i);
    if (r !== void 0 && r.expiresAtMs > Date.now()) return r.metadata;
    let s;
    try {
        const o = await e(i);
        if (!o.ok) return;
        s = kky(await o.json());
    } catch  {
        return;
    }
    return Wol.set(i, {
        metadata: s,
        expiresAtMs: Date.now() + nlg
    }), s;
}
export async function ufk(t, e, n, i = fetch) {
    let r;
    try {
        r = new URL(t).hostname;
    } catch  {
        return e;
    }
    if (!ilg.has(r) && PIo(t) === void 0) return e;
    let s = await n.resolve(t);
    if (!s && PIo(t) !== void 0) {
        const o = (await lfk(t, i))?.clientId;
        o !== void 0 && (s = {
            CLIENT_ID: o
        });
    }
    return s ? e ? Hol(e.CLIENT_ID) === void 0 ? {
        ...s,
        ...e,
        CLIENT_ID: s.CLIENT_ID
    } : {
        ...s,
        ...e
    } : s : e;
}
function mfk(t) {
    return t.replace(llg, (e, n, i)=>{
        const r = ED[n];
        return typeof r == "string" ? r : i !== void 0 ? i : e;
    });
}
export function qol(t) {
    if (typeof t == "string") return mfk(t);
    if (Array.isArray(t)) return t.map((e)=>qol(e));
    if (t !== null && typeof t == "object") {
        const e = {};
        for (const [n, i] of Object.entries(t))e[n] = qol(i);
        return e;
    }
    return t;
}
export function ffk(t) {
    switch(t.status){
        case "connected":
            return {
                type: "connected"
            };
        case "degraded":
            return {
                type: "degraded",
                reason: t.statusDetail ?? "Unknown"
            };
        case "disconnected":
            return {
                type: "disconnected"
            };
        case "error":
            return {
                type: "error",
                error: t.statusDetail ?? "Unknown error",
                isRetryable: t.statusRetryable
            };
        case "initializing":
            return {
                type: "initializing"
            };
        case "needsAuth":
            return {
                type: "needsAuth",
                authorizationUrl: t.statusDetail ?? ""
            };
        default:
            return {
                type: "error",
                error: `Unknown status: ${t.status}`
            };
    }
}
export function clg(t) {
    return t.tools.map((e)=>({
            name: e.name,
            description: e.description ?? "",
            inputSchema: e.inputSchema ?? {},
            outputSchema: e.outputSchema ? e.outputSchema : void 0,
            title: e.title,
            annotations: e.annotations,
            meta: e._meta
        }));
}
export function vfk(t) {
    return t.resources.map((e)=>({
            uri: e.uri,
            name: e.name,
            description: e.description,
            mimeType: e.mimeType
        }));
}
export function ulg(t) {
    return t ? blg : _lg;
}
export function zol(t) {
    return t === mlg;
}
export function dlg(t, e, n, i) {
    if (!zol(e)) return;
    const r = t.toolDisplay.get(n);
    return r === void 0 || i === void 0 ? r : bfk(t, n, r, i);
}
function bfk(t, e, n, i) {
    switch(e){
        case "subscribe_slack_thread":
            {
                const r = hlg(i);
                return r === void 0 ? n : {
                    ...n,
                    success: `Subscribed to thread in ${r}`
                };
            }
        case "subscribe_slack_channel":
            {
                const r = hlg(i);
                return r === void 0 ? n : {
                    ...n,
                    success: `Subscribed to ${r}`
                };
            }
        case "subscribe_github_pr":
            {
                const r = Sfk(i);
                return r === void 0 ? n : {
                    ...n,
                    success: `Subscribed to ${r.markdown}`,
                    error: `Failed to subscribe to ${r.plain}`
                };
            }
        case "subscribe_github_ci":
            {
                const r = kfk(i);
                return r === void 0 ? n : {
                    ...n,
                    success: `Subscribed to CI ${r.markdown}`,
                    error: `Failed to subscribe to CI ${r.plain}`
                };
            }
        case "subscribe_origin_pr":
            {
                const r = Cfk(i);
                return r === void 0 ? n : {
                    ...n,
                    success: `Subscribed to ${r.markdown}`,
                    error: `Failed to subscribe to ${r.plain}`
                };
            }
        case "subscribe_origin_ci":
            {
                const r = Tfk(i);
                return r === void 0 ? n : {
                    ...n,
                    success: `Subscribed to CI ${r.markdown}`,
                    error: `Failed to subscribe to CI ${r.plain}`
                };
            }
        case "subscribe_timer":
            {
                const r = Efk(i);
                return r === void 0 ? n : {
                    ...n,
                    success: `Scheduled reminder ${r}`
                };
            }
        case "unsubscribe":
            return HTt(i.resultText)?.closed === !1 ? {
                ...n,
                success: t.noMatchingSubscription
            } : n;
        default:
            return n;
    }
}
function Vol(t) {
    return t.length <= Xol ? t : `${t.slice(0, Xol - 1)}\u2026`;
}
function eAn(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t);
}
function HTt(t) {
    if (t !== void 0) try {
        const e = JSON.parse(t);
        return eAn(e) ? e : void 0;
    } catch  {
        return;
    }
}
function fat(t) {
    return typeof t == "string" && t.length > 0 ? t : void 0;
}
function dss(t) {
    return t.replace(/[\\`*_[\]()<>]/g, "\\$&");
}
function vat(t, e) {
    const n = dss(t);
    return e === void 0 ? n : `[${n}](${e.replace(/\(/g, "%28").replace(/\)/g, "%29")})`;
}
function hlg(t) {
    const n = HTt(t.resultText)?.subscriptionMetadata;
    if (!eAn(n)) return;
    const i = fat(n.channelName)?.replace(/^#/, "");
    if (i === void 0 || i.length === 0) return;
    const r = fat(HTt(t.argsJson)?.channelId), s = r !== void 0 && ylg.test(r) ? `https://slack.com/app_redirect?channel=${encodeURIComponent(r)}` : void 0;
    return vat(`#${Vol(i)}`, s);
}
function hss(t) {
    const e = fat(t.repo);
    return e !== void 0 && pss.test(e) ? e : void 0;
}
function yfk(t) {
    let e;
    try {
        e = new URL(t);
    } catch  {
        return;
    }
    if (e.protocol !== "https:" && e.protocol !== "http:") return;
    const n = e.pathname.match(/^\/([^/]+\/[^/]+)\/pull\/(\d+)(?:\/|$)/);
    if (n === null || !pss.test(n[1])) return;
    const i = `${n[1]}#${n[2]}`, r = e.hostname.toLowerCase(), s = r === "github.com" || r.endsWith(".github.com") ? e.toString() : void 0;
    return {
        markdown: vat(i, s),
        plain: i
    };
}
function Sfk(t) {
    const e = HTt(t.argsJson)?.options;
    if (eAn(e)) switch(e.scope){
        case "pr":
            {
                const n = fat(e.prUrl);
                if (n !== void 0) return yfk(n);
                const i = hss(e), r = e.pullNumber;
                if (i === void 0 || typeof r != "number" || !Number.isInteger(r) || r <= 0) return;
                const s = `${i}#${r}`;
                return {
                    markdown: vat(s, `https://github.com/${i}/pull/${r}`),
                    plain: s
                };
            }
        case "repo":
            {
                const n = hss(e);
                return n === void 0 ? void 0 : {
                    markdown: `PRs in ${vat(n, `https://github.com/${n}`)}`,
                    plain: `PRs in ${n}`
                };
            }
        case "author":
            {
                const n = hss(e), i = fat(e.author);
                return n === void 0 || i === void 0 || !Slg.test(i) ? void 0 : {
                    markdown: `PRs by ${dss(i)} in ${vat(n, `https://github.com/${n}`)}`,
                    plain: `PRs by ${i} in ${n}`
                };
            }
        default:
            return;
    }
}
function kfk(t) {
    const e = HTt(t.argsJson)?.options;
    if (!eAn(e)) return;
    const n = hss(e), i = fat(e.branch);
    if (n === void 0 || i === void 0 || i.includes("[") || i.includes("]") || i.includes("(") || i.includes(")")) return;
    const r = Vol(i), s = vat(n, `https://github.com/${n}`);
    return {
        markdown: `on ${dss(r)} in ${s}`,
        plain: `on ${r} in ${n}`
    };
}
function Kol(t) {
    const e = fat(t.repo);
    return e !== void 0 && pss.test(e) ? e : void 0;
}
function plg(t) {
    const e = new URL(`/codebase/${t}/pulls`, REi);
    return vat(t, e.toString());
}
function wfk(t) {
    const e = iw(t);
    if (e?.provider !== "origin") return;
    const n = new URL(t), i = vlg.get(n.hostname.toLowerCase());
    if (n.protocol !== "https:" || n.port !== "" || n.username !== "" || n.password !== "" || i === void 0) return;
    const r = n.pathname.endsWith("/") ? n.pathname.slice(0, -1) : n.pathname, s = `/pr/${e.owner}/${e.repo}/${e.prNumber}`, o = `/codebase/${e.owner}/${e.repo}/pull/${e.prNumber}`;
    if (r !== s && r !== o) return;
    const a = `${e.owner}/${e.repo}#${e.prNumber}`, l = new URL(`${o}${n.search}${n.hash}`, i);
    return {
        markdown: vat(a, l.toString()),
        plain: a
    };
}
function Cfk(t) {
    const e = HTt(t.argsJson)?.options;
    if (eAn(e)) switch(e.scope){
        case "pr":
            {
                const n = fat(e.prUrl);
                if (n !== void 0) return wfk(n);
                const i = Kol(e), r = e.pullNumber;
                if (i === void 0 || typeof r != "number" || !Number.isInteger(r) || r <= 0) return;
                const s = `${i}#${r}`, o = new URL(`/codebase/${i}/pull/${r}`, REi);
                return {
                    markdown: vat(s, o.toString()),
                    plain: s
                };
            }
        case "repo":
            {
                const n = Kol(e);
                return n === void 0 ? void 0 : {
                    markdown: `PRs in ${plg(n)}`,
                    plain: `PRs in ${n}`
                };
            }
        default:
            return;
    }
}
function Tfk(t) {
    const e = HTt(t.argsJson)?.options;
    if (!eAn(e)) return;
    const n = Kol(e);
    if (n === void 0) return;
    const i = plg(n);
    switch(e.scope){
        case "repo":
            return {
                markdown: `in ${i}`,
                plain: `in ${n}`
            };
        case "branch":
            {
                const r = fat(e.branch);
                if (r === void 0 || r.includes("[") || r.includes("]") || r.includes("(") || r.includes(")")) return;
                const s = Vol(r);
                return {
                    markdown: `on ${dss(s)} in ${i}`,
                    plain: `on ${s} in ${n}`
                };
            }
        default:
            return;
    }
}
function Efk(t) {
    const e = HTt(t.argsJson);
    if (e === void 0) return;
    const n = e.delaySeconds;
    if (typeof n != "number" || !Number.isInteger(n) || n <= 0) return;
    const i = Ifk(n);
    return e.once === !0 ? `in ${i}` : `every ${i}`;
}
function Ifk(t) {
    const e = [
        [
            86400,
            "day"
        ],
        [
            3600,
            "hour"
        ],
        [
            60,
            "minute"
        ]
    ];
    for (const [n, i] of e)if (t % n === 0) {
        const r = t / n;
        return `${r} ${i}${r === 1 ? "" : "s"}`;
    }
    return `${t} second${t === 1 ? "" : "s"}`;
}
export function xfk(t, e) {
    return zol(e) ? t.serverName : void 0;
}
function Afk(t) {
    return VR(Tr.fromString(t, {
        dontUseNodeBuffer: !0
    }), !1, !0);
}
function Rfk(t, e) {
    return !t || e ? "default" : `id:${Afk(t)}`;
}
function Zol(t) {
    return VR(Tr.fromString(t, {
        dontUseNodeBuffer: !0
    }), !1, !0);
}
function wlg(t) {
    return (Pke(t, 0) >>> 0).toString(16);
}
export function Pfk(t) {
    return wlg(Qol(t));
}
export function mss(t, e) {
    return wlg(`${t}:${e}`);
}
function Qol(t) {
    return Array.isArray(t) ? `[${t.map(Qol).join(",")}]` : t && typeof t == "object" ? `{${Object.entries(t).filter(([, n])=>n !== void 0).sort(([n], [i])=>n.localeCompare(i)).map(([n, i])=>`${JSON.stringify(n)}:${Qol(i)}`).join(",")}}` : JSON.stringify(t);
}
function Jol(t, e) {
    const n = [
        `profile:${Zol(Rfk(t.profileId, t.isDefaultProfile))}`
    ];
    return t.projectScopeHash && n.push(`project:${Zol(t.projectScopeHash)}`), e && t.resolvedConfigHash && n.push(`cfg:${Zol(t.resolvedConfigHash)}`), `${Hns}${n.join(":")}`;
}
export function Mfk(t) {
    return `${t.serverId}${Jol(t, !0)}`;
}
export function Clg(t) {
    return `${t.serverId}${Jol(t, !1)}`;
}
export function Tlg(t) {
    const e = Jol({
        serverId: "",
        profileId: t.profileId,
        isDefaultProfile: t.isDefaultProfile,
        projectScopeHash: t.projectScopeHash
    }, !1), n = `${e}:`, i = t.scopedServerId.lastIndexOf(Hns);
    if (i === -1) return;
    const r = t.scopedServerId.slice(i);
    if (!(!t.projectScopeHash && r.includes(":project:")) && !(r !== e && !r.startsWith(n))) return t.scopedServerId.slice(0, i);
}
export function Nfk(t) {
    const e = new Map, n = [];
    for (const i of t){
        const r = Lfk(i), s = eal(i);
        if (r === void 0) {
            n.push({
                groupId: `singleton:${i.identifier}`,
                sourceKind: s,
                servers: [
                    i
                ],
                isGrouped: !1
            });
            continue;
        }
        const o = e.get(r);
        if (o) {
            o.servers = [
                ...o.servers,
                i
            ], o.isGrouped = o.servers.length > 1;
            continue;
        }
        const a = {
            groupId: r,
            sourceKind: s,
            normalizedUrl: r.slice(15),
            servers: [
                i
            ],
            isGrouped: !1
        };
        e.set(r, a), n.push(a);
    }
    return n;
}
function Lfk(t) {
    if (!(t.projectManaged || t.type !== "streamableHttp" || !t.url) && !t.url.startsWith("mcp-provider://")) return `streamableHttp:${Pgk(t.url)}`;
}
export function Ofk(t, e, n) {
    const i = n.getSelection(t.groupId);
    if (i) {
        const s = Elg(i).map((l)=>t.servers.find((c)=>c.identifier === l)).filter((l)=>l !== void 0), o = s.filter((l)=>!e.has(l.identifier));
        if (o.length > 0) return o;
        const a = s[0];
        if (a) return [
            a
        ];
    }
    const r = Ffk(t.servers) ?? t.servers[0];
    return r ? [
        r
    ] : [];
}
export function Elg(t) {
    const e = new Set, n = [];
    for (const i of t)e.has(i) || (e.add(i), n.push(i));
    return n;
}
function Ffk(t, e = ()=>!0) {
    for (const n of Ilg){
        const i = t.find((r)=>eal(r) === n && e(r));
        if (i) return i;
    }
}
export function eal(t) {
    return t.url?.startsWith("mcp-provider://") ? "provider" : t.userManaged ? "user" : t.projectManaged ? "project" : t.extensionId ? "extension" : t.dashboardManaged ? "team" : t.pluginManaged ? "plugin" : t.identifier.startsWith("user-") ? "user" : "default";
}
export function Bfk(t) {
    return t ? t instanceof Set ? t : new Set(t) : new Set;
}
export function jfk(t) {
    if (!t.startsWith(vss)) return t;
    const e = t.slice(vss.length), n = new Ose;
    return n.update(e), `${vss}${n.digest()}`;
}
export function $fk(t, e) {
    return t.length !== e.length ? !1 : t.every((n, i)=>n.identifier === e[i]?.identifier);
}
export function Hfk(t) {
    return t.type === "streamableHttp" && RIo({
        identifier: t.identifier,
        serverUrl: t.url
    });
}
export function tal(t) {
    return t === "authenticate" || t === "user_logout";
}
export function Rlg(t) {
    return t instanceof Error && (t instanceof yal || t[bal] === !0 || t.isMcpMetadataAbortError === !0);
}
export function Wfk(t) {
    const e = t.replace(/((?:access_token|refresh_token|id_token|client_secret|authorization|code|password|assertion|token|secret)[^:=\r\n]{0,32}[:=]\s*["']?)([^"',\s&}]+)/gi, "$1[REDACTED]").replace(/(\bBearer\s+)([A-Za-z0-9\-._~+/]+=*)/gi, "$1[REDACTED]");
    return e.length > 256 ? `${e.slice(0, 253)}...` : e;
}
export function nal(t, e) {
    return !Number.isFinite(t) || t <= 0 ? e : Math.trunc(t);
}
export async function Kzt(t, e, n, i) {
    let r;
    const s = new Promise((o, a)=>{
        r = setTimeout(()=>{
            const l = new $lg(n, e);
            a(l), i?.abort(l);
        }, e);
    });
    try {
        return await Promise.race([
            t(),
            s
        ]);
    } finally{
        r !== void 0 && clearTimeout(r);
    }
}
export async function ial(t, e, n, i) {
    const r = performance.now();
    try {
        const s = await i(), o = performance.now() - r;
        return t.setAttribute("mcp.ipc.duration_ms", String(o)), t.setAttribute("mcp.ipc.outcome", "success"), n.distribution({
            stat: "mcp.ipc.duration_ms",
            value: o,
            tags: {
                name: e,
                outcome: "success"
            }
        }), n.increment({
            stat: "mcp.ipc.count",
            tags: {
                name: e,
                outcome: "success"
            }
        }), s;
    } catch (s) {
        const o = performance.now() - r;
        throw t.setAttribute("mcp.ipc.duration_ms", String(o)), t.setAttribute("mcp.ipc.outcome", "error"), n.distribution({
            stat: "mcp.ipc.duration_ms",
            value: o,
            tags: {
                name: e,
                outcome: "error"
            }
        }), n.increment({
            stat: "mcp.ipc.count",
            tags: {
                name: e,
                outcome: "error"
            }
        }), s;
    }
}
export function ral(t) {
    if (!t) return {};
    try {
        return JSON.parse(t);
    } catch  {
        return {};
    }
}
export function Gfk(t) {
    const e = ral(t);
    if (!e || typeof e != "object") return [];
    const n = e, i = new Set(n.required ?? []);
    return Object.keys(n.properties ?? {}).sort().map((r)=>({
            name: r,
            description: n.properties?.[r]?.description,
            required: i.has(r)
        }));
}
export function bss(t) {
    return typeof t.ensureConnected == "function";
}
export function sal(t) {
    return t !== void 0 && Wlg.has(t);
}
export function Plg(t) {
    for (const [e, n] of Object.entries(oAn))if (n === t) return e;
}
export function qfk(t) {
    switch(t?.rowKind){
        case "team":
            return "team";
        case "plugin":
        case "custom":
            return "user";
        default:
            return "unknown";
    }
}
export function zfk(t) {
    if (t === void 0) return "none";
    if (t.type !== "error") return t.type;
    const e = Plg(t.error);
    return e !== void 0 ? e : t.error === rAn || t.error === sAn ? "admin_blocked" : "error";
}
export function Vfk(t) {
    return t !== void 0 && Object.values(oAn).includes(t);
}
export function Z4e(t) {
    return t.type === "streamableHttp" ? "http" : "stdio";
}
export function Bze(t) {
    return t.type === "streamableHttp" ? Psk(t.url) : "stdio";
}
function Mlg(t, e) {
    if (!t.includes("*")) return t === e;
    const i = t.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
    return new RegExp(`^${i}$`).test(e);
}
function Kfk(t, e) {
    return Mlg(t, e) || y7a(e, [
        t
    ]);
}
function Dlg(t) {
    if (t.command) return t.args && t.args.length > 0 ? `${t.command} ${t.args.join(" ")}` : t.command;
}
export function oal(t) {
    const e = t;
    return xag({
        mode: e.toolAllowlistMode,
        tools: e.toolAllowlist
    });
}
export function aal(t) {
    return typeof t == "string" && qlg.has(t) ? t : "all";
}
export function Nlg(t) {
    return sfk(t) === "declared_read" ? "reads" : "writes";
}
function Yfk(t, e) {
    const n = `${t}|`;
    return e.some((i)=>i.startsWith(n));
}
export function yss(t, e, n) {
    const i = e?.[t];
    return i != null && typeof i == "object" ? {
        reads: aal(i.reads),
        writes: aal(i.writes)
    } : Yfk(t, n) ? {
        reads: "custom",
        writes: "custom"
    } : {
        reads: "all",
        writes: "all"
    };
}
export function Llg(t, e, n) {
    try {
        const i = t, r = i._durableSnapshots?.get(e.identifier)?.tools?.find((s)=>s.name === n)?.annotations;
        if (r !== void 0) return r;
        if (typeof i.toolsCache == "function") return i.toolsCache()[e.identifier]?.find((s)=>s.name === n)?.annotations;
    } catch (i) {
        Cle("[MCPService] lookupToolAnnotations failed to read snapshot/cache accessors:", i);
    }
}
function lal(t) {
    const e = t?.trim();
    return e && e.length > 0 ? e : void 0;
}
export function MEi(t, e) {
    const n = Dlg(t), i = t.url;
    return e.find((r)=>{
        const s = lal(r.command), o = lal(r.serverUrl);
        if (!(s !== void 0) && !(o !== void 0)) return !1;
        const c = s === void 0 || n !== void 0 && Mlg(s, n), u = o === void 0 || i !== void 0 && Kfk(o, i);
        return c && u;
    });
}
export function Xfk(t, e, n) {
    if (n?.useCorePolicy === !0) return !nfk({
        command: Dlg(t),
        url: t.url
    }, e);
    if (e.disableAll === !0) return !0;
    const i = e.allowedMcpServers ?? [];
    return i.length === 0 || e.allowUserOverrideMcpServers === !0 ? !1 : MEi(t, i) === void 0;
}
export function Zfk(t, e) {
    return MEi(t, e);
}
export function Qfk(t, e) {
    if (t !== void 0) return [
        ...t.networkAllowlist ?? [],
        ...lal(t.serverUrl) !== void 0 && e.url !== void 0 ? [
            e.url
        ] : []
    ];
}
export function Jfk(t) {
    return t ? t.connected === !0 || t.statusType === "connected" || t.statusType === "degraded" ? !0 : t.success === !0 && t.connected === void 0 && t.statusType === void 0 : !1;
}
export function Klg(t) {
    return "init" in t;
}
export function wal(t) {
    return typeof t.write == "function";
}
export function evk(t) {
    return !!t.onMount;
}
export function Ylg(t) {
    return "v" in t || "e" in t;
}
export function Tss(t) {
    if ("e" in t) throw t.e;
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !("v" in t)) throw new Error("[Bug] atom state is not initialized");
    return t.v;
}
export function Ess(t) {
    return typeof t?.then == "function";
}
export function tvk(t) {
    if (!(t instanceof Error)) return !1;
    const e = t.name, n = t.message.toLowerCase();
    return (e === "RangeError" || e === "InternalError") && (n.includes("call stack") || n.includes("too much recursion") || n.includes("stack overflow"));
}
export function Xlg(t, e, n) {
    if (!n.p.has(t)) {
        n.p.add(t);
        const i = ()=>n.p.delete(t);
        e.then(i, i);
    }
}
export function Zlg(t, e, n) {
    const i = n.get(t), r = i?.t, s = e.p;
    if (!r?.size) return s;
    if (!s.size) return r;
    const o = new Set(r);
    for (const a of s)o.add(a);
    return o;
}
export function nvk(t) {
    return !!t.INTERNAL_onInit;
}
function ivk(...t) {
    const e = {
        get (o) {
            return i(n, e, o);
        },
        set (o, ...a) {
            return r(n, e, o, ...a);
        },
        sub (o, a) {
            return s(n, e, o, a);
        }
    }, n = [
        new WeakMap,
        new WeakMap,
        new WeakMap,
        new Set,
        new Set,
        new Set,
        {},
        Qlg,
        Jlg,
        ecg,
        tcg,
        ncg,
        icg,
        rcg,
        scg,
        ocg,
        acg,
        lcg,
        ccg,
        ucg,
        dcg,
        hcg,
        pcg,
        mcg,
        void 0,
        new WeakMap,
        gcg,
        fcg,
        [
            0
        ]
    ].map((o, a)=>t[a] || o);
    vcg.set(e, Object.freeze(n));
    const i = n[21], r = n[22], s = n[23];
    return e;
}
export function cs(t, e) {
    const n = `atom${++_cg}`, i = {
        toString () {
            return (import.meta.env ? import.meta.env.MODE : void 0) !== "production" && this.debugLabel ? n + ":" + this.debugLabel : n;
        }
    };
    return typeof t == "function" ? i.read = t : (i.init = t, i.read = svk, i.write = ovk), e && (i.write = e), i;
}
function svk(t) {
    return t(this);
}
function ovk(t, e, n) {
    return e(this, typeof n == "function" ? n(t(this)) : n);
}
export function jp() {
    return bcg ? bcg() : ivk();
}
var bcg;
export function avk(t) {
    return t instanceof Error && t.message.includes(ycg);
}
function Scg(t) {
    return t.includes("pathspec") && t.includes("did not match any file(s) known to git");
}
export function Tal(t) {
    return /couldn't find remote ref/i.test(t);
}
function kcg(t) {
    return t.includes("Remote branch not found on origin") || t.includes("no matching remote branch found");
}
export function Eal(t) {
    return /Not possible to fast-forward/i.test(t) || /Diverging branches can't be fast-forwarded/i.test(t) || t.includes("has diverged from remote branch");
}
function lvk(t) {
    return t.includes("[rejected]") && (t.includes("non-fast-forward") || t.includes("fetch first"));
}
export function Ial(t) {
    return /would be overwritten by (checkout|merge)/i.test(t) || /Your local changes( to the following files)? would be overwritten/i.test(t) || /commit your changes or stash them/i.test(t);
}
export function wcg(t) {
    const e = t.match(/(?:is already used by worktree at|is already checked out at)\s+'([^']+)'/i);
    return e ? e[1] : void 0;
}
function cvk(t) {
    return /spawn (?:.*[\\/ ])?git(?:\.exe)? ENOENT/i.test(t);
}
function uvk(t) {
    return t.includes("Authentication failed") || t.includes("could not read Username") || t.includes("could not read Password") || /Permission denied \(publickey/i.test(t) || t.includes("terminal prompts disabled") || /'credential[-a-z]*' is not a git command/i.test(t) || /cannot run [^,\n]*credential/i.test(t);
}
function Pss(t) {
    return t instanceof Error ? t.message : String(t);
}
export function Mss(t) {
    const e = Pss(t);
    return Scg(e) || Tal(e);
}
export function Ccg(t) {
    const e = Pss(t);
    return Mss(t) || kcg(e);
}
export function Tcg(t) {
    return Ial(Pss(t));
}
export function dvk(t) {
    return Eal(Pss(t));
}
export function lAn(t) {
    if (t instanceof Us) return Ecg[t.code] ?? "connect_unknown";
    const e = t instanceof Error ? t.message : String(t);
    return e.includes("Missing blob while creating migration handle") || e.includes(xal) ? "missing_blob" : e.includes("no conversation state available") ? "no_conversation_state" : cvk(e) ? "git_binary_missing" : e.includes("Cannot pull a multi-repo cloud agent") || e.includes("Cannot move a multi-repository local agent") || e.includes("Cannot import cloud agent PR branches") ? "workspace_shape_mismatch" : e.includes("Checkout timed out after") ? "checkout_timeout" : e.includes("Divergence recovery found no usable anchor commit") ? "divergence_recovery_no_anchor" : e.includes("Divergence recovery checkout could not be verified") ? "divergence_recovery_unverified" : wcg(e) !== void 0 ? "git_worktree_conflict" : Ial(e) ? "git_dirty_working_tree" : Eal(e) ? "git_diverged_no_ff" : lvk(e) ? "git_fetch_rejected_non_ff" : Tal(e) || kcg(e) || Scg(e) || e.includes("could not resolve remote tracking ref") ? "git_remote_branch_missing" : uvk(e) ? "git_auth_failed" : e.includes("failed to detach worktree HEAD") ? "worktree_detach_failed" : Ya(t) || t instanceof Error && t.name === "AbortError" || e.includes("The operation was aborted") || /\bCanceled\b/.test(e) ? "operation_aborted" : e.includes("Error executing git") || e.includes("Command failed: git") || /(^|\n)fatal: /.test(e) ? "git_other" : "unknown";
}
export function Xzt(t) {
    return t.type === "gitRepo" ? t.url : t.repoUrl;
}
export function Icg(t) {
    return t.trim();
}
export function yat(t) {
    if (t.length === 0) return "Untitled";
    const e = PE(t[0] ?? "");
    return t.length === 1 ? e : `${e} +${t.length - 1}`;
}
export function BEi(t) {
    const e = t.name?.trim();
    return e || yat(t.repoUrls);
}
export function xcg(t, e, n) {
    const i = new Map;
    for (const o of t){
        const a = e(o), l = i.get(a);
        (l === void 0 || Aal(n(o), n(l))) && i.set(a, o);
    }
    const r = new Set, s = [];
    for (const o of t){
        const a = e(o);
        if (r.has(a)) continue;
        r.add(a);
        const l = i.get(a);
        l !== void 0 && s.push(l);
    }
    return s;
}
function Aal(t, e) {
    const n = !(t > 0), i = !(e > 0);
    return n ? !1 : i ? !0 : t < e;
}
function hvk(t) {
    return t.type === "gitRepo" ? {
        createdAtMs: 0
    } : {
        createdAtMs: t.createdAtMs,
        id: t.id
    };
}
function pvk(t) {
    const { candidate: e, current: n } = t;
    return Aal(e.createdAtMs, n.createdAtMs) ? !0 : Aal(n.createdAtMs, e.createdAtMs) ? !1 : e.id !== void 0 && n.id !== void 0 ? e.id < n.id : !1;
}
export function Acg(t, e) {
    let n;
    for (const i of t)(n === void 0 || pvk({
        candidate: e(i),
        current: e(n)
    })) && (n = i);
    return n;
}
function Rcg(t) {
    const e = t.filter((n)=>n.type !== "gitRepo");
    return Acg(e.length > 0 ? e : t, hvk);
}
export function cAn(t) {
    switch(t.type){
        case "gitRepo":
            return t.name;
        case "personal":
        case "team":
            {
                const e = t.name?.trim();
                if (e) return e;
                const n = BEi({
                    name: t.name,
                    repoUrls: [
                        t.repoUrl
                    ]
                });
                return bPe(t) ? Icg(n) : n;
            }
        default:
            return t;
    }
}
function Ral(t) {
    return NM(Xzt(t));
}
function mvk(t) {
    return N6e(gvk(t));
}
function gvk(t) {
    switch(t.type){
        case "gitRepo":
            return t.scmRepoNodeId || t.mirrorGithubNodeId;
        case "team":
            return t.scmRepoNodeId;
        case "personal":
            return;
        default:
            return t;
    }
}
export function Pal(t) {
    return t.type === "gitRepo" ? t.name.trim().length > 0 && t.url.trim().length > 0 : t.repoUrl.trim().length > 0;
}
export function Mal(t, e, n = {}) {
    const i = n.preferredPublicId?.trim();
    if (RCt(i)) return e.find((a)=>bPe(a) === i);
    const r = n.preferredTargetKey?.trim();
    if (r) {
        const o = Lcg(e, r);
        if (o !== void 0) return o;
    }
    for (const o of t){
        const a = NM(o);
        if (a.length === 0) continue;
        const l = Rcg(Dcg(e, a));
        if (l !== void 0) return l;
    }
    const s = N6e(n.mirrorGithubNodeId);
    if (s !== void 0) return Rcg(yvk(e, s));
}
export function Nss(t, e, n = {}) {
    return Mal(eqr({
        primaryRepoUrl: t,
        githubMirrorRepoUrl: n.githubMirrorRepoUrl
    }), e, {
        mirrorGithubNodeId: n.mirrorGithubNodeId,
        preferredTargetKey: n.preferredTargetKey,
        preferredPublicId: n.preferredPublicId
    });
}
function Dal(t) {
    return t.type === "gitRepo" ? t.url : bPe(t) ?? t.id.toString();
}
function fvk(t, e) {
    const n = bPe(t);
    if (!n) return t;
    const i = e.find((o)=>o.publicId?.trim() === n);
    if (i === void 0) return t;
    const r = Number(i.createdAtMs), s = t.createdAtMs > 0 ? t.createdAtMs : r > 0 ? r : t.createdAtMs;
    return {
        ...t,
        name: i.name,
        createdAtMs: s
    };
}
function vvk(t) {
    return (t.repoConfig?.repos ?? []).map((e)=>e.repoUrl.trim()).filter((e)=>e.length > 0);
}
function _vk(t) {
    const e = vvk(t), n = e[0];
    if (n === void 0 || MEn(e)) return;
    const i = t.publicId?.trim(), r = Number(t.createdAtMs), s = Number(t.updatedAtMs);
    return {
        type: "personal",
        id: t.id,
        repoUrl: n,
        environmentJson: t.environmentJson ?? "",
        createdAtMs: r > 0 ? r : 0,
        updatedAtMs: s > 0 ? s : 0,
        ...i ? {
            publicId: i
        } : {},
        ...t.name !== void 0 ? {
            name: t.name
        } : {}
    };
}
function bvk(t) {
    return {
        template: t,
        repoKey: Ral(t),
        targetKey: DEn(t)
    };
}
function Pcg(t, e, n) {
    const i = t.get(e);
    i === void 0 ? t.set(e, [
        n
    ]) : i.push(n);
}
function Mcg(t) {
    const e = new Set, n = new Map, i = new Map, r = new Map;
    for (const [s, { template: o, repoKey: a, targetKey: l }] of t.entries()){
        a.length > 0 && (e.add(a), Pcg(n, a, s));
        const c = mvk(o);
        c !== void 0 && Pcg(i, c, s), r.has(l) || r.set(l, o);
    }
    return {
        repoKeys: e,
        positionsByRepoKey: n,
        positionsByGithubNodeId: i,
        templateByTargetKey: r
    };
}
function UEi(t) {
    const e = Lss.get(t);
    if (e !== void 0) return e;
    const n = Mcg(t.map(bvk));
    return Lss.set(t, n), n;
}
export function Nal(t) {
    return UEi(t).repoKeys;
}
export function Dcg(t, e) {
    const n = UEi(t).positionsByRepoKey.get(e);
    return n === void 0 ? Oss : n.map((i)=>t[i]);
}
function yvk(t, e) {
    const n = UEi(t).positionsByGithubNodeId.get(e);
    return n === void 0 ? Oss : n.map((i)=>t[i]);
}
export function Ncg(t, e) {
    const { positionsByRepoKey: n } = UEi(t), i = [];
    for (const r of e){
        const s = n.get(r);
        s !== void 0 && i.push(...s);
    }
    return i.length === 0 ? Oss : (i.sort((r, s)=>r - s), i.map((r)=>t[r]));
}
export function Lcg(t, e) {
    return UEi(t).templateByTargetKey.get(e);
}
function Svk(t, e) {
    for(let n = uAn.length - 1; n >= 0; n--){
        const i = uAn[n];
        if (i.personalEnvironments === t.personalEnvironments && i.teamEnvironments === t.teamEnvironments && i.logicalEnvironments === t.logicalEnvironments && i.githubRepos === (e ? t.githubRepos : void 0)) return i.result;
    }
}
function kvk(t, e, n) {
    uAn.push({
        personalEnvironments: t.personalEnvironments,
        teamEnvironments: t.teamEnvironments,
        logicalEnvironments: t.logicalEnvironments,
        githubRepos: e ? t.githubRepos : void 0,
        result: n
    }), uAn.length > Fcg && uAn.shift();
}
export function tMe(t, e = {}) {
    const n = e.includeGitRepoProjects ?? (t.gitRepoFetchedAuthEpoch !== null && t.gitRepoFetchedAuthEpoch === t.gitRepoAuthEpoch), i = Svk(t, n);
    if (i !== void 0) return i;
    const r = wvk(t, n);
    return kvk(t, n, r), r;
}
function wvk(t, e) {
    const n = new Set, i = [], r = [], s = (d)=>{
        if (!Pal(d)) return;
        const h = Ral(d);
        if (d.type === "gitRepo") {
            if (n.has(h)) return;
            n.add(h), r.push({
                template: d,
                displayName: cAn(d),
                repoKey: h,
                targetKey: DEn(d),
                sortKey: Dal(d)
            });
            return;
        }
        const p = fvk(d, t.logicalEnvironments);
        i.push({
            template: p,
            displayName: cAn(p),
            repoKey: h,
            targetKey: DEn(p),
            sortKey: Dal(p),
            pickerBaseLabel: BEi({
                name: p.name,
                repoUrls: [
                    p.repoUrl
                ]
            }),
            createdAtMs: p.createdAtMs
        });
    };
    for (const d of t.personalEnvironments)s(d);
    for (const d of t.teamEnvironments)s(d);
    for (const d of t.logicalEnvironments){
        const h = _vk(d);
        h === void 0 || !Pal(h) || i.push({
            template: h,
            displayName: cAn(h),
            repoKey: Ral(h),
            targetKey: DEn(h),
            sortKey: Dal(h),
            pickerBaseLabel: BEi({
                name: h.name,
                repoUrls: [
                    h.repoUrl
                ]
            }),
            createdAtMs: h.createdAtMs
        });
    }
    if (e) for (const d of t.githubRepos)s(d);
    const o = xcg(i, (d)=>d.pickerBaseLabel, (d)=>d.createdAtMs), a = new Set(o.map((d)=>d.repoKey).filter((d)=>d.length > 0)), l = r.filter((d)=>!a.has(d.repoKey)), c = [
        ...o,
        ...l
    ];
    c.sort((d, h)=>{
        const p = Ocg.value.compare(d.displayName, h.displayName);
        return p !== 0 ? p : d.repoKey < h.repoKey ? -1 : d.repoKey > h.repoKey ? 1 : d.sortKey < h.sortKey ? -1 : d.sortKey > h.sortKey ? 1 : 0;
    });
    const u = c.map((d)=>d.template);
    return Lss.set(u, Mcg(c)), u;
}
export function Cvk() {
    return {
        personalEnvironments: [],
        teamEnvironments: [],
        githubRepos: [],
        logicalEnvironments: [],
        hasFetchedInitial: !0,
        hasFetchedCoreEnvironments: !0,
        hasFetchedGitRepoEnvironmentTemplates: !0,
        githubConnected: !1,
        gitRepoAuthEpoch: 0,
        gitRepoFetchedAuthEpoch: 0,
        gitRepoFetchFailedAuthEpoch: null,
        gitRepoCatalogGeneration: 0,
        gitRepoCatalogIncomplete: !1,
        gitRepoLookupsInFlight: 0,
        hasFetchedLogicalEnvironments: !0,
        hasSettledLogicalEnvironments: !0,
        isFetching: !1,
        isFetchingLogicalEnvironments: !1,
        lastError: void 0
    };
}
function Tvk(t) {
    return t.replace(/[-_]+/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\b\w/g, (e)=>e.toUpperCase());
}
function Evk(t) {
    return t.params?.tools?.[0]?.serverId || t.params?.tools?.[0]?.serverName || t.params?.server?.name;
}
function Ivk(t) {
    return t.params?.tools?.[0]?.name;
}
function Ucg(t) {
    const e = t.toolName?.trim();
    if (!e) return;
    const n = t.serverName?.trim(), i = Tvk(e);
    return n ? `Run ${i} in ${n}` : `Run ${i}`;
}
export function Fss(t, e) {
    const n = t.trim();
    return n ? e?.find((r)=>r.identifier === n || r.name === n)?.name.trim() || n : "";
}
function xvk(t) {
    const e = t.serverIdentifier?.trim();
    return e ? `Authenticate ${Fss(e, t.servers)}` : "Authenticate MCP server";
}
function Zzt(t) {
    return t.trim().toLowerCase();
}
export function Avk(t) {
    const e = t.trim();
    if (!e) return null;
    const n = e.indexOf(GTt);
    if (n === -1) return Zzt(e);
    const i = e.substring(0, n), r = e.substring(n + 1);
    if (!i || !r) return null;
    const s = i === QM ? QM : Zzt(i), o = r === QM ? QM : Zzt(r);
    return `${s}${GTt}${o}`;
}
export function XCe(t, e) {
    if (t.length === 0) return {
        valid: !1,
        error: "Name cannot be empty"
    };
    if (t.length > 256) return e?.warn(`[MCP] Name too long (${t.length} chars): ${t.substring(0, 50)}...`), {
        valid: !1,
        error: `Name too long (${t.length} characters, maximum 256)`
    };
    if (t.trim().length === 0) return {
        valid: !1,
        error: "Name cannot be empty or only whitespace"
    };
    for (const n of Gcg)if (t.includes(n)) return {
        valid: !1,
        error: `Name cannot contain ${n} character`
    };
    return {
        valid: !0
    };
}
function $cg(t, e) {
    const n = t === QM ? QM : Zzt(t), i = e === QM ? QM : Zzt(e);
    if (n !== QM) {
        const r = XCe(n);
        if (!r.valid) throw new Error(`Invalid server ID: ${r.error}`);
    }
    if (i !== QM) {
        const r = XCe(i);
        if (!r.valid) throw new Error(`Invalid tool name: ${r.error}`);
    }
    return `${n}${GTt}${i}`;
}
export function Oal(t, e) {
    const n = t === QM ? QM : Zzt(t), i = e === QM ? QM : Zzt(e);
    return n !== QM && !XCe(n).valid || i !== QM && !XCe(i).valid ? null : `${n}${GTt}${i}`;
}
export function Hcg(t) {
    const e = t.indexOf(GTt);
    if (e === -1) return null;
    const n = t.substring(0, e), i = t.substring(e + 1);
    return !n || !i ? null : n === QM ? i === QM ? {
        serverId: QM,
        toolName: QM
    } : XCe(i).valid ? {
        serverId: QM,
        toolName: i
    } : null : XCe(n).valid ? i === QM ? {
        serverId: n,
        toolName: QM
    } : XCe(i).valid ? {
        serverId: n,
        toolName: i
    } : null : null;
}
function Rvk(t, e, n, i) {
    const r = Hcg(n);
    if (!r) return i?.warn(`Invalid MCP allowlist entry: ${n}`), !1;
    const s = e.toLowerCase(), o = r.toolName.toLowerCase();
    return r.serverId === QM ? r.toolName === QM ? !0 : o === s : t.toLowerCase() !== r.serverId.toLowerCase() ? !1 : r.toolName === QM ? !0 : o === s;
}
export function Fal(t) {
    const { serverId: e, toolName: n, allowlist: i } = t, r = XCe(n), s = XCe(e);
    return !r.valid || !s.valid ? !1 : i.some((o)=>Rvk(e, n, o));
}
export function Bal(t, e, n, i) {
    const r = XCe(t), s = XCe(e);
    if (!r.valid || !s.valid) return i?.error(`Cannot add MCP names with reserved characters to allowlist - serverId: '${e}', toolName: '${t}'`), n;
    const o = $cg(e, t);
    if (n.some((l)=>l.toLowerCase() === o)) return n;
    const a = $cg(e, QM);
    return n.some((l)=>l.toLowerCase() === a) ? n : [
        ...n,
        o
    ];
}
export function Wcg(t, e) {
    const n = [];
    for (const i of t)e.includes(i.name) && i.args.length > 0 && i.args[0].type === "word" ? n.push(i.name + " " + i.args[0].value) : n.push(i.name);
    return [
        ...new Set(n)
    ];
}
export function $J(t, e) {
    return e.getComposerData(t)?.capabilities.find((i)=>{
        const r = i;
        return r.type === mo.TOOL_FORMER && typeof r.pendingDecisions == "function" && typeof r.getBubbleData == "function" && typeof r.getBubbleIdByToolCallId == "function" && typeof r.getPendingUserDecisionGroup == "function";
    });
}
function qcg(t, e) {
    return t?.trim().toLowerCase() === e;
}
function Pvk(t, e) {
    const n = t?.params, i = n?.parsingResult;
    if (i !== void 0 && !i.parsingFailed) {
        const s = e.cachedServerConfig?.runTerminalServerConfig?.compositeShellCommands ?? [], o = Wcg(i.executableCommands, s);
        if (o.length > 0) return `Run ${o.join(", ")}`;
    }
    const r = n?.command?.trim();
    return r && r.length > 0 ? `Run ${r}` : "Run terminal command";
}
function zcg(t, e, n, i) {
    if (t === Ct.RUN_TERMINAL_COMMAND_V2 && e?.tool === Ct.RUN_TERMINAL_COMMAND_V2) return Pvk(e, n);
    if (t === Ct.MCP || t === Ct.CALL_MCP_TOOL) {
        if (e?.tool === Ct.MCP) {
            const r = Evk(e);
            return Ucg({
                toolName: Ivk(e),
                serverName: r ? Fss(r, i) : void 0
            }) ?? "Run MCP tool";
        }
        if (e?.tool === Ct.CALL_MCP_TOOL) {
            const r = e.params?.server;
            return Ucg({
                toolName: e.params?.toolName,
                serverName: r ? Fss(r, i) : void 0
            }) ?? "Run MCP tool";
        }
        return "Run MCP tool";
    }
    return t === Ct.MCP_AUTH && e?.tool === Ct.MCP_AUTH ? xvk({
        serverIdentifier: e.params?.serverIdentifier,
        servers: i
    }) : t === Ct.EDIT_FILE || t === Ct.EDIT_FILE_V2 ? "Edit file" : t === Ct.DELETE_FILE ? "Delete file" : t === Ct.ASK_QUESTION ? "Answer question" : "Waiting for approval";
}
function Vcg(t) {
    return t === Ct.RUN_TERMINAL_COMMAND_V2 ? "terminal" : t === Ct.MCP || t === Ct.CALL_MCP_TOOL ? "mcp" : t === Ct.MCP_AUTH ? "mcp-auth" : t === Ct.EDIT_FILE || t === Ct.EDIT_FILE_V2 || t === Ct.DELETE_FILE ? "edit" : t === Ct.ASK_QUESTION ? "question" : "other";
}
function Kcg(t) {
    return t === Ct.MCP_AUTH ? "Authenticate" : t === Ct.ASK_QUESTION ? "Answer" : "Allow";
}
function Mvk(t) {
    const e = t.toolFormer.getBubbleIdByToolCallId(t.decision.toolCallId);
    if (!e) return;
    const n = t.toolFormer.getBubbleData(e);
    return {
        kind: Vcg(t.decision.clientSideTool),
        summary: zcg(t.decision.clientSideTool, n, t.services.aiServerConfigService, t.services.mcpServers),
        bubbleId: e,
        canApprove: t.decision.clientSideTool !== Ct.ASK_QUESTION,
        actionLabel: Kcg(t.decision.clientSideTool)
    };
}
function Dvk(t) {
    const e = t.additionalData;
    return qcg(e?.reviewData?.status, "requested") ? t.tool === Ct.RUN_TERMINAL_COMMAND_V2 || t.tool === Ct.MCP || t.tool === Ct.CALL_MCP_TOOL ? qcg(e?.status, "pending") : t.tool === Ct.EDIT_FILE || t.tool === Ct.EDIT_FILE_V2 || t.tool === Ct.DELETE_FILE : !1;
}
function Ual(t) {
    for (const e of t.services.composerDataService.getLoadedConversation(t.handle)){
        const n = e.toolFormerData;
        if (!(!n || !Dvk(n))) return {
            kind: Vcg(n.tool),
            summary: zcg(n.tool, n, t.services.aiServerConfigService, t.services.mcpServers),
            bubbleId: e.bubbleId,
            canApprove: n.tool !== Ct.ASK_QUESTION,
            actionLabel: Kcg(n.tool)
        };
    }
}
export function Qzt(t, e) {
    if (!t) return;
    const n = $J(t, e.composerDataService);
    if (!n) return Ual({
        handle: t,
        services: e
    });
    const i = n.getPendingUserDecisionGroup()()[0];
    return i !== void 0 ? Mvk({
        toolFormer: n,
        decision: i,
        services: e
    }) ?? Ual({
        handle: t,
        services: e
    }) : Ual({
        handle: t,
        services: e
    });
}
function Nvk(t) {
    const e = t.composerDataService.getPendingUserDecisionGroup(t.handle);
    if (t.approval === void 0) return e[0];
    const n = t.composerDataService.getToolFormer(t.handle);
    return e.find((i)=>n?.getBubbleIdByToolCallId(i.toolCallId) === t.approval?.bubbleId);
}
function Lvk(t) {
    if (t.decision.clientSideTool === Ct.ASK_QUESTION) return !1;
    const n = t.services.composerDataService.getToolFormer(t.handle)?.getBubbleIdByToolCallId(t.decision.toolCallId);
    if (n && t.decision.clientSideTool === Ct.RUN_TERMINAL_COMMAND_V2) {
        const i = t.services.toolCallHumanReviewService.getTerminalReviewModelForBubble(t.handle, n);
        if (i) return i.setSelectedOption(kA.RUN), !0;
    }
    if (n && (t.decision.clientSideTool === Ct.MCP || t.decision.clientSideTool === Ct.CALL_MCP_TOOL)) {
        const i = t.services.toolCallHumanReviewService.getMCPReviewModelForBubble(t.handle, n);
        if (i) return i.setSelectedOption(OO.RUN), !0;
    }
    return t.decision.accept(), !0;
}
export function jal(t) {
    const e = Nvk({
        handle: t.handle,
        approval: t.approval,
        composerDataService: t.services.composerDataService
    });
    if (e !== void 0) return Lvk({
        handle: t.handle,
        decision: e,
        services: t.services
    });
    if (t.approval?.kind === "terminal") {
        const n = t.services.toolCallHumanReviewService.getTerminalReviewModelForBubble(t.handle, t.approval.bubbleId);
        return n ? (n.setSelectedOption(kA.RUN), !0) : !1;
    }
    if (t.approval?.kind === "edit") {
        const n = t.services.toolCallHumanReviewService.getEditReviewModelForBubble(t.handle, t.approval.bubbleId);
        return n ? (n.setSelectedOption(xB.ACCEPT), !0) : !1;
    }
    if (t.approval?.kind === "mcp") {
        const n = t.services.toolCallHumanReviewService.getMCPReviewModelForBubble(t.handle, t.approval.bubbleId);
        return n ? (n.setSelectedOption(OO.RUN), !0) : !1;
    }
    return !1;
}
export { yag };

export var Sol = {};
Object.defineProperty(Sol, "AUTORUN_DISCLAIMERS", {
    enumerable: true,
    get: ()=>Jxn
});
Object.defineProperty(Sol, "AUTO_RUN_MODE", {
    enumerable: true,
    get: ()=>Yf
});
Object.defineProperty(Sol, "LEAVE_ASK_EVERY_TIME_MESSAGE", {
    enumerable: true,
    get: ()=>Lol
});
Object.defineProperty(Sol, "_setRefreshFn", {
    enumerable: true,
    get: ()=>Oag
});
Object.defineProperty(Sol, "canUserChangeExternalFileProtection", {
    enumerable: true,
    get: ()=>Eol
});
Object.defineProperty(Sol, "confirmLeaveAskEveryTimeMode", {
    enumerable: true,
    get: ()=>ass
});
Object.defineProperty(Sol, "confirmRunEverythingMode", {
    enumerable: true,
    get: ()=>oss
});
Object.defineProperty(Sol, "fetchServerAdminSettings", {
    enumerable: true,
    get: ()=>Col
});
Object.defineProperty(Sol, "forceRefreshAutorunSettings", {
    enumerable: true,
    get: ()=>Lag
});
Object.defineProperty(Sol, "getAutorunModeDisclaimer", {
    enumerable: true,
    get: ()=>Iol
});
Object.defineProperty(Sol, "getAutorunSettingsValuesWithLoadingState_reactive", {
    enumerable: true,
    get: ()=>Fag
});
Object.defineProperty(Sol, "getAutorunSettingsValues_reactive", {
    enumerable: true,
    get: ()=>T2
});
Object.defineProperty(Sol, "getRunEverythingConfirmationMessage", {
    enumerable: true,
    get: ()=>Bag
});
Object.defineProperty(Sol, "getShellApprovalModeForAnalytics", {
    enumerable: true,
    get: ()=>yag
});
Object.defineProperty(Sol, "initializeAutorunSettings", {
    enumerable: true,
    get: ()=>Nag
});
Object.defineProperty(Sol, "resolveCachedBrowserFeaturesAcl", {
    enumerable: true,
    get: ()=>Mag
});
Object.defineProperty(Sol, "resolveServerMcpAllowedTools", {
    enumerable: true,
    get: ()=>Dag
});

import { Ei } from "./Iwo.js";
import { Aag } from "./admin-mcp-tool-allowlist.ts";
import { rss } from "./agentReadAccessPolicy.js";
import { bag } from "./browserFeaturesAcl.js";
import { gs } from "./codicons.js";
import { Du } from "./dashboard_pb.js";
import { jy } from "./extensionManagement.js";
import { rvk } from "./internals.mjs";
import { cp } from "./objects.js";
import { qzt } from "./shellApprovalMode.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { Rp, Wt, pi } from "./ze.js";
var Uag, Yf, jag, Zxn, Qxn, $ag, lss, xol, Hag, Aol, css, uss, Jxn, Pol, Mol, Dol, Nol, Lol;
var _cg;
export { $ag, Aol, Dol, Hag, Jxn, Lol, Mol, Nol, Pol, Qxn, Uag, Yf, Zxn, _cg, css, jag, lss, uss, xol };
var __wakaru_S$_initialized = false;
export function S$() {
if (__wakaru_S$_initialized) return;
__wakaru_S$_initialized = true;
"use strict";
E(), Du(), pi(), __(), Ei(), cp(), jy(), bag(), qzt(), gs(), Aag(), rss(), Uag = "mcp_settings_overhaul", Yf = {
    ASK_EVERY_TIME: "ask_every_time",
    YOLO: "yolo",
    YOLO_WITH_SANDBOX: "yolo_with_sandbox",
    SMART_AUTO: "smart_auto",
    SMART_AUTO_WITH_SANDBOX: "smart_auto_with_sandbox",
    FULL_YOLO: "full_yolo"
}, jag = {
    isAdminControlled: !1,
    isDisabledByAdmin: !0,
    browserFeatures: !1,
    browserFeaturesVerdict: "loading",
    allowedCommands: [],
    blockedCommands: [],
    deleteFileProtection: !0,
    outsideWorkspaceProtection: !0,
    enableAllowlistMode: !0,
    enableRunEverything: !1,
    enableSmartAuto: !0,
    mcpAllowedTools: [],
    mcpToolsProtection: !0,
    playwrightProtection: !1
}, [Zxn, Qxn] = Wt(jag, {
    equals: Rp
}), [$ag, lss] = Wt(!0), [xol, Hag] = Wt(!1), Aol = void 0, css = void 0, uss = void 0, Jxn = {
    SANDBOX_MODE: "Commands run in a protected sandbox that limits access to your files, network, and git. You can allowlist specific commands to run with full access when needed. Be cautious of potential prompt injection risks.",
    ALLOWLIST_MODE: "Only commands you've added to your allowlist will run automatically. Other commands will require user approval. Be cautious of potential prompt injection risks.",
    RUN_EVERYTHING_SANDBOX_AVAILABLE: "This allows the agent to execute any tool or shell command without approval. A prompt injection or a malicious tool could delete files or exfiltrate secrets from your machine. We recommend using Sandbox.",
    RUN_EVERYTHING_SANDBOX_UNAVAILABLE: "This allows the agent to execute any tool or shell command without approval. A prompt injection or a malicious tool could delete files or exfiltrate secrets from your machine. We recommend using Allowlist."
}, Pol = "enable-run-everything", Mol = "use-safer-mode", Dol = "cancel", Nol = "leave-ask-every-time", Lol = "Ask Every Time will disappear from this menu after you switch away from it. Allowlist auto-runs tools that are already in your allowlist, including MCP tools. If you want every shell command to keep asking for approval, keep your shell allowlist empty. With an empty shell allowlist, shell commands still ask every time and Cursor skips shell allowlist parsing.";

}
var __wakaru_Am_initialized = false;
export function Am() {
if (__wakaru_Am_initialized) return;
__wakaru_Am_initialized = true;
E(), rvk(), _cg = 0;

}
