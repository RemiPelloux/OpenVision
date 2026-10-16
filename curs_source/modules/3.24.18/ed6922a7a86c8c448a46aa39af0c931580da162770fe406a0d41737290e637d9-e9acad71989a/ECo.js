import { OT, _I, wi } from "./HVr.js";
import { $qe, JCg, Lqc, UT, ale, ios, ros } from "./qIc.js";
import { iMn, y$t } from "./De_3.js";
import { Hdo, Sji, Tjd, YU, dso, kji } from "./A3u.js";
import { gUv } from "./xmo.js";
import { Azv, Dzv, Jwt, Rzv, fzv, hkh, izv, kCo, mkh, okh } from "./cgh.js";
import { OT as OT$2, wi as wi$2 } from "./HVr.js";
import { Bkh } from "./admin-mcp-policy.ts";
import { _Ch, djt, iQi, nQi, vCh } from "./cloudProjects.js";
import { Pe } from "./codicons.js";
import { ps } from "./composer_pb.js";
import { FZi, JCo, _3n, awh, cwh, lwh, nwh, owh, swh } from "./cursorBackendMcpToolDisplay.js";
import { FSt, cPn, lPn, wSt } from "./dashboard_pb.js";
import { jkh } from "./default-auth.ts";
import { Ckt, Mao } from "./extensionManagement.js";
import { Qie } from "./hash.js";
import { $wh, Gwh, Hwh, Jwh, Kwh, Qwh, Vwh, Wwh, Xwh, Ywh, Zwh, eCh, iCh, jwh, nCh, qwh, rCh, sCh, tCh, zwh } from "./internals.mjs";
import { cCh } from "./knowledgeBaseService.js";
import { gwh } from "./mcp-config-service.ts";
import { $kh } from "./mcp-tool-annotations_2.ts";
import { oos } from "./mcp.ts";
import { HZi } from "./mcpConfigService.js";
import { Xkh } from "./mcpEnvExpansion.js";
import { TYi } from "./mcpProcessServerIdentifier.js";
import { Awh, Dwh, JX, Pwh, ajt, cjt, k0o, ljt, w0o } from "./mcpService.js";
import { oR } from "./process.js";
import { Wkh } from "./resolved-oauth-client-id.ts";
import { Vkh, qCo } from "./rest-mcp-provider-metadata.ts";
import { GM, JO, oT } from "./toolCallHumanReviewTypes.js";
import { ECh, Itt, UI } from "./toolUtils.js";
import { nt } from "./tools_pb.js";
import { cJ } from "./tracing_2.js";
import { Lkh } from "./triggersNamingGate.js";
function Pzv(e) {
    switch(e){
        case wSt.DISABLED:
            return "disabled";
        case wSt.ENABLED:
        case wSt.UNSPECIFIED:
        default:
            return "enabled";
    }
}
function Lzv(e) {
    switch(e){
        case cPn.ALWAYS_DISABLED:
            return "always_disabled";
        case cPn.USER_CONTROLLED:
        case cPn.UNSPECIFIED:
        default:
            return "user_controlled";
    }
}
function Nzv(e) {
    switch(e){
        case lPn.ALWAYS_DISABLED:
            return "always_disabled";
        case lPn.USER_CONTROLLED:
        case lPn.UNSPECIFIED:
        default:
            return "user_controlled";
    }
}
function xCo(e) {
    const t = e.applicationUserPersistentStorage.composerState;
    return {
        isAdminControlled: !1,
        isDisabledByAdmin: !1,
        browserFeatures: !0,
        browserFeaturesVerdict: "allowed",
        allowedCommands: t.yoloCommandAllowlist ?? [],
        blockedCommands: t.yoloCommandDenylist ?? [],
        deleteFileProtection: t.yoloDeleteFileDisabled ?? !1,
        outsideWorkspaceProtection: t.yoloOutsideWorkspaceDisabled ?? !0,
        enableAllowlistMode: !0,
        enableRunEverything: t.yoloEnableRunEverything ?? !1,
        enableSmartAuto: t.enableSmartAuto ?? !1,
        mcpAllowedTools: t.mcpAllowedTools ?? [],
        mcpToolsProtection: t.yoloMcpToolsDisabled ?? !0,
        playwrightProtection: t.playwrightProtection ?? !0
    };
}
export function _kh(e) {
    const t = izv({
        isLoading: !1,
        failClosed: e.hasTeam && e.cachedBrowserFeatures === void 0,
        liveAdminBrowserFeatures: e.cachedBrowserFeatures,
        clientBrowserFeatures: e.clientBrowserFeatures
    });
    return {
        browserFeatures: t.browserFeatures,
        browserFeaturesVerdict: t.verdict
    };
}
function ICo(e, t, n) {
    return _kh({
        hasTeam: t.getTeamId() !== void 0,
        cachedBrowserFeatures: n.getBrowserFeaturesForCurrentIdentity(),
        clientBrowserFeatures: xCo(e).browserFeatures
    });
}
export function bkh(e, t) {
    return Azv({
        autoRunControls: e?.autoRunControls,
        allowedMcpServers: t ? e?.allowedMcpConfiguration?.allowedMcpServers : void 0
    });
}
export async function ACo(e, t) {
    const n = await e.dashboardClient(), i = e.getTeamId();
    if (i) try {
        const r = await n.getTeamAdminSettings({
            teamId: i
        });
        if (r) try {
            const s = new FSt(r);
            t.store("autorun.cachedAdminSettings", s.toJsonString(), -1, 1);
        } catch (s) {
            console.error("Failed to cache admin settings:", s);
        }
        return r;
    } catch (r) {
        console.error("Failed to fetch team admin settings:", r);
        const s = t.get("autorun.cachedAdminSettings", -1);
        if (s) try {
            return FSt.fromJsonString(s, {
                ignoreUnknownFields: !0
            });
        } catch (o) {
            console.error("Failed to parse cached admin settings:", o);
        }
        throw r;
    }
}
function AZi(e, t, n) {
    const i = t instanceof Error ? t : new Error(String(t));
    e === cJ ? $qe(i, n) : e.reportException(i, n);
}
function RCo(e, t, n) {
    if (t instanceof Error && OT.isErrorNoTelemetry(t)) {
        const i = t.constructor?.name || t.name || "Error", r = new Error("<redacted: ErrorNoTelemetry>");
        r.name = i, r.stack = "", AZi(e, r, {
            ...n,
            "autorun.settings.error.no_telemetry": !0
        });
        return;
    }
    AZi(e, t, n);
}
async function Ozv(e, t, n, i, r, s) {
    const o = UT("settings.autorun.refresh");
    try {
        let a;
        try {
            a = await ACo(t, i);
        } catch (O) {
            if (console.error("[AutorunSettings] Failed to fetch admin settings (network error, no cache available):", {
                error: O instanceof Error ? {
                    name: O.name,
                    message: O.message,
                    stack: O.stack
                } : O
            }), AZi(o, O, {
                "autorun.settings.error": "fetch_admin_settings_failed",
                "autorun.settings.cache_available": "false"
            }), PCo()) {
                console.warn("[AutorunSettings] Admin settings temporarily unavailable but were previously enforced - keeping existing restrictions");
                const H = ICo(e, t, s);
                ejt({
                    ...JVt(),
                    ...H
                });
                return;
            }
            a = void 0;
        }
        const c = a?.autoRunControls?.enabled ?? !1;
        Ikh(c);
        const l = xCo(e), u = ICo(e, t, s), h = a === void 0 ? void 0 : Rzv(a.autoRunControls?.sandboxingControls?.sandboxReadBoundary), p = a === void 0 ? void 0 : h === "workspace" ? Dzv(a.autoRunControls?.sandboxingControls?.sandboxReadAllowlistPaths) : [], g = a?.autoRunControls?.sandboxingControls?.allowUserOverrideSandboxReadAllowlist !== !1;
        let f;
        if (c) {
            const O = a?.autoRunControls?.allowed ?? [], F = a?.autoRunControls?.blocked ?? [], H = a?.autoRunControls?.enableAllowlistMode ?? !0, $ = a?.autoRunControls?.enableRunEverything ?? !1, W = a?.autoRunControls?.enableSmartAuto ?? $, G = r.checkFeatureGate(Tkh, {
                disableExposureLog: !0
            }), q = bkh(a, G), z = a?.autoRunControls?.sandboxingControls;
            f = {
                isAdminControlled: !0,
                isDisabledByAdmin: !1,
                browserFeatures: u.browserFeatures,
                browserFeaturesVerdict: u.browserFeaturesVerdict,
                allowedCommands: O,
                blockedCommands: F,
                deleteFileProtection: a?.autoRunControls?.deleteFileProtection ?? !1,
                enableAllowlistMode: H,
                enableRunEverything: $,
                enableSmartAuto: W,
                outsideWorkspaceProtection: !0,
                mcpAllowedTools: q,
                mcpToolsProtection: a?.autoRunControls?.disableMcpAutoRun ?? !1,
                playwrightProtection: a?.autoRunControls?.browserProtection || a?.autoRunControls?.disableMcpAutoRun || !1,
                sandboxingControls: z ? {
                    sandboxing: Pzv(z.sandboxing),
                    sandboxNetworking: Lzv(z.sandboxNetworking),
                    sandboxGit: Nzv(z.sandboxGit),
                    sandboxReadBoundary: h ?? "system",
                    sandboxReadAllowlistPaths: p ?? []
                } : void 0,
                adminSandboxReadBoundary: h,
                adminSandboxReadAllowlistPaths: p,
                adminSandboxAllowUserOverrideReadAllowlist: g
            };
        } else f = {
            ...l,
            browserFeatures: u.browserFeatures,
            browserFeaturesVerdict: u.browserFeaturesVerdict,
            adminSandboxReadBoundary: h,
            adminSandboxReadAllowlistPaths: p,
            adminSandboxAllowUserOverrideReadAllowlist: g
        };
        const v = a?.cursorIgnoreControls?.hierarchicalEnabled ?? !1, b = a?.cursorIgnoreControls?.ignoreSymlinks ?? !1;
        if (e.applicationUserPersistentStorage.teamAdminSettings) {
            const O = e.applicationUserPersistentStorage.teamAdminSettings, F = {
                ...O,
                cursorIgnore: {
                    ...O.cursorIgnore,
                    hierarchicalEnabled: v,
                    ignoreSymlinks: b
                },
                extensionSigningSettings: {
                    verificationEnabled: a?.extensionSigningSettings?.verificationEnabled ?? !1
                },
                extensionInstallCooldownSettings: {
                    cooldownHours: a?.extensionInstallCooldownSettings?.cooldownHours ?? 0
                }
            };
            e.setApplicationUserPersistentStorage("teamAdminSettings", F);
        }
        ejt(f), MZi(!1);
        const y = a?.workspaceTrustControls?.enabled ?? !1;
        if (y !== LCo && y) {
            const O = "security.workspace.trust.enabled";
            if (n.inspect(O).policyValue === void 0) try {
                await n.updateValue(O, y, 2), LCo = y;
            } catch (H) {
                console.error("Failed to update workspace trust setting:", H), RCo(o, H, {
                    "autorun.settings.error": "update_workspace_trust_failed"
                });
            }
        }
        const T = a?.allowedExtensions, E = T && T.trim() !== "" ? T : void 0, A = Ckt, R = n.inspect(A);
        if (E !== void 0 && E !== PZi) if (R.policyValue === void 0) try {
            const O = JSON.parse(E);
            if (typeof O != "object" || O === null || Array.isArray(O)) throw new Error(`Invalid allowedExtensions format: expected object, got ${Array.isArray(O) ? "array" : typeof O}`);
            const F = O;
            await n.updateValue(A, F, 2), PZi = E;
        } catch (O) {
            O instanceof SyntaxError || O instanceof Error && O.message.includes("Invalid allowedExtensions format") ? AZi(o, O, {
                "autorun.settings.error": "parse_allowed_extensions_failed",
                "allowedExtensions.value": E ? E.substring(0, 100) : "undefined"
            }) : RCo(o, O, {
                "autorun.settings.error": "update_allowed_extensions_failed"
            });
        }
        else PZi = E;
        const P = a?.extensionInstallCooldownSettings?.cooldownHours, N = P !== void 0 && P > 0 ? P : void 0;
        if (N !== void 0) {
            const O = Mao, F = n.inspect(O), H = typeof F.userValue == "number" ? F.userValue : void 0;
            if (!(N === LZi && H === N)) if (F.policyValue === void 0) try {
                await n.updateValue(O, N, 2), LZi = N;
            } catch (W) {
                RCo(o, W, {
                    "autorun.settings.error": "update_install_cooldown_hours_failed"
                });
            }
            else LZi = N;
        }
    } finally{
        o.end();
    }
}
export function ykh(e, t, n, i, r, s) {
    const o = ()=>Ozv(e, t, i, n, r, s), a = ()=>{
        const l = ICo(e, t, s);
        ejt({
            ...JVt(),
            ...l
        });
    };
    kkh(o), a(), o(), t.addLoginChangedListener(async ()=>{
        ejt({
            ...JVt(),
            browserFeatures: !1,
            browserFeaturesVerdict: "loading"
        }), MZi(!0), await new Promise((l)=>setTimeout(l, 500)), o();
    }), s.onDidChange(()=>{
        a(), o();
    }), e.createScoped({}).onChangeEffect({
        deps: [
            ()=>e.applicationUserPersistentStorage.composerState.yoloCommandAllowlist,
            ()=>e.applicationUserPersistentStorage.composerState.yoloCommandDenylist,
            ()=>e.applicationUserPersistentStorage.composerState.yoloDeleteFileDisabled,
            ()=>e.applicationUserPersistentStorage.composerState.yoloOutsideWorkspaceDisabled,
            ()=>e.applicationUserPersistentStorage.composerState.yoloEnableRunEverything,
            ()=>e.applicationUserPersistentStorage.composerState.mcpAllowedTools,
            ()=>e.applicationUserPersistentStorage.composerState.yoloMcpToolsDisabled,
            ()=>e.applicationUserPersistentStorage.composerState.playwrightProtection
        ],
        onChange: ()=>{
            PCo() || (ejt({
                ...xCo(e),
                browserFeatures: !1,
                browserFeaturesVerdict: "loading"
            }), MZi(!0)), o();
        }
    });
}
export function KE() {
    return JVt();
}
export function DCo(e) {
    return !e.isAdminControlled;
}
export async function Skh() {
    NCo && await NCo();
}
export function kkh(e) {
    NCo = e;
}
export function wkh() {
    return {
        settings: JVt(),
        isLoading: xkh()
    };
}
export function MCo(e) {
    return e ? tjt.SANDBOX_MODE : tjt.ALLOWLIST_MODE;
}
export function Ckh(e) {
    return e ? tjt.RUN_EVERYTHING_SANDBOX_AVAILABLE : tjt.RUN_EVERYTHING_SANDBOX_UNAVAILABLE;
}
export async function RZi(e) {
    const { prettyDialogService: t, reactiveStorageService: n, sandboxAvailable: i } = e;
    if (n.applicationUserPersistentStorage.composerState.doNotShowFullYoloModeWarningAgain === !0) return "confirmed";
    const s = await t.openDialog({
        title: "Enable Run Everything?",
        message: Ckh(i),
        dialogIcon: Pe.warning,
        dialogIconColor: "var(--vscode-notificationsWarningIcon-foreground)",
        primaryButton: {
            id: OCo,
            label: "Enable Run Everything"
        },
        cancelButton: {
            id: BCo,
            label: "Cancel"
        },
        extraButtons: [
            {
                id: FCo,
                label: i ? "Use Sandbox instead" : "Use Allowlist instead",
                type: "secondary"
            }
        ]
    });
    return s === OCo ? (n.setApplicationUserPersistentStorage("composerState", "doNotShowFullYoloModeWarningAgain", !0), "confirmed") : s === FCo ? "switch-to-safer" : "cancelled";
}
export async function DZi(e) {
    return await e.prettyDialogService.openDialog({
        title: "Leave Ask Every Time?",
        message: $Co,
        dialogIcon: Pe.info,
        dialogIconColor: "var(--cursor-text-secondary)",
        primaryButton: {
            id: UCo,
            label: "Continue"
        },
        cancelButton: {
            id: BCo,
            label: "Cancel"
        }
    }) === UCo ? "confirmed" : "cancelled";
}
var NCo;
export function q_e(e) {
    return "type" in e && e.type === "folder";
}
export function Pkh(e) {
    return e.checkFeatureGate(Lkh, {
        disableExposureLog: !0
    });
}
function Fzv(e) {
    return e.url?.startsWith(Bkh) === !0;
}
function Okh(e) {
    const t = e?.trim();
    return t === void 0 || t.length === 0 ? void 0 : t;
}
function Fkh(e) {
    const t = e?.trim();
    return t === void 0 || t.length === 0 ? void 0 : t;
}
function Bzv(e, t, n) {
    const i = n?.matchesServerUrlPattern ?? hkh;
    return (t ?? []).some((r)=>{
        const s = Okh(r.command), o = Fkh(r.serverUrl);
        if (!(s !== void 0) && !(o !== void 0)) return !1;
        const l = s === void 0 || e.command !== void 0 && kCo(s, e.command), u = o === void 0 || e.url !== void 0 && i(o, e.url);
        return l && u;
    });
}
function Uzv(e, t, n) {
    return t.length > 0 && $zv(e, t, n);
}
function $zv(e, t, n) {
    const i = n?.matchesServerUrlPattern ?? hkh;
    return t.some((r)=>{
        const s = Okh(r.command), o = Fkh(r.serverUrl);
        if (!(s !== void 0) && !(o !== void 0)) return !1;
        const l = s === void 0 || e.command !== void 0 && kCo(s, e.command), u = o === void 0 || e.url !== void 0 && i(o, e.url);
        return l && u;
    });
}
function Hzv(e, t, n) {
    if (t === void 0) return !0;
    if (t.disableAll === !0) return !1;
    if (Fzv(e)) return !0;
    const i = t.allowedMcpServers ?? [];
    return i.length === 0 && t.allowUserOverrideMcpServers !== !0 || Uzv(e, i, n) ? !0 : t.allowUserOverrideMcpServers === !0 ? !Bzv(e, t.deniedMcpServers, n) : !1;
}
function Gzv(e) {
    return e?.[oos] === !0;
}
export function Ukh(e) {
    return e === void 0 || e.destructiveHint === !0 ? !1 : e.readOnlyHint === !0;
}
function Vzv(e) {
    return Ukh(e) ? "declared_read" : e?.readOnlyHint === !1 || e?.destructiveHint === !0 ? "write" : "unannotated";
}
export function jzv(e) {
    if (e === void 0) return {};
    const t = {};
    typeof e.title == "string" && e.title.length > 0 && (t.title = e.title.slice(0, $kh));
    for (const n of [
        "readOnlyHint",
        "destructiveHint",
        "idempotentHint",
        "openWorldHint"
    ])typeof e[n] == "boolean" && (t[n] = e[n]);
    return Gzv(e) && (t[oos] = !0), Object.keys(t).length === 0 ? {} : {
        annotationsJson: JSON.stringify(t)
    };
}
function Hkh(e) {
    if (e === void 0) return;
    const t = e.trim();
    if (t.length !== 0) return Wkh.test(t) ? t : void 0;
}
export function jCo(e) {
    if (Hkh(e) !== void 0) return;
    const t = e?.trim();
    return t && t.length > 0 ? t : void 0;
}
export function qzv(e, t) {
    const n = jCo(t);
    return n !== void 0 ? n : Hkh(e);
}
async function zzv(e, t = fetch) {
    if (Lqc(e) === void 0) return;
    const n = new URL(e), i = `${n.origin}/.well-known/oauth-protected-resource${n.pathname.replace(/\/+$/, "")}`, r = qCo.get(i);
    if (r !== void 0 && r.expiresAtMs > Date.now()) return r.metadata;
    let s;
    try {
        const o = await t(i);
        if (!o.ok) return;
        s = JCg(await o.json());
    } catch  {
        return;
    }
    return qCo.set(i, {
        metadata: s,
        expiresAtMs: Date.now() + Vkh
    }), s;
}
export async function Yzv(e, t, n, i = fetch) {
    let r;
    try {
        r = new URL(e).hostname;
    } catch  {
        return t;
    }
    if (!jkh.has(r) && ros(e) === void 0) return t;
    let s = await n.resolve(e);
    if (!s && ros(e) !== void 0) {
        const o = (await zzv(e, i))?.clientId;
        o !== void 0 && (s = {
            CLIENT_ID: o
        });
    }
    return s ? t ? jCo(t.CLIENT_ID) === void 0 ? {
        ...s,
        ...t,
        CLIENT_ID: s.CLIENT_ID
    } : {
        ...s,
        ...t
    } : s : t;
}
function Jzv(e) {
    return e.replace(Xkh, (t, n, i)=>{
        const r = oR[n];
        return typeof r == "string" ? r : i !== void 0 ? i : t;
    });
}
export function KCo(e) {
    if (typeof e == "string") return Jzv(e);
    if (Array.isArray(e)) return e.map((t)=>KCo(t));
    if (e !== null && typeof e == "object") {
        const t = {};
        for (const [n, i] of Object.entries(e))t[n] = KCo(i);
        return t;
    }
    return e;
}
export function tKv(e) {
    switch(e.status){
        case "connected":
            return {
                type: "connected"
            };
        case "degraded":
            return {
                type: "degraded",
                reason: e.statusDetail ?? "Unknown"
            };
        case "disconnected":
            return {
                type: "disconnected"
            };
        case "error":
            return {
                type: "error",
                error: e.statusDetail ?? "Unknown error",
                isRetryable: e.statusRetryable
            };
        case "initializing":
            return {
                type: "initializing"
            };
        case "needsAuth":
            return {
                type: "needsAuth",
                authorizationUrl: e.statusDetail ?? ""
            };
        default:
            return {
                type: "error",
                error: `Unknown status: ${e.status}`
            };
    }
}
export function Zkh(e) {
    return e.tools.map((t)=>({
            name: t.name,
            description: t.description ?? "",
            inputSchema: t.inputSchema ?? {},
            outputSchema: t.outputSchema ? t.outputSchema : void 0,
            title: t.title,
            annotations: t.annotations,
            meta: t._meta
        }));
}
export function nKv(e) {
    return e.resources.map((t)=>({
            uri: t.uri,
            name: t.name,
            description: t.description,
            mimeType: t.mimeType
        }));
}
export function Qkh(e) {
    return e ? awh : owh;
}
export function YCo(e) {
    return e === nwh;
}
export function Jkh(e, t, n, i) {
    if (!YCo(t)) return;
    const r = e.toolDisplay.get(n);
    return r === void 0 || i === void 0 ? r : rKv(e, n, r, i);
}
function rKv(e, t, n, i) {
    switch(t){
        case "subscribe_slack_thread":
            {
                const r = ewh(i);
                return r === void 0 ? n : {
                    ...n,
                    success: `Subscribed to thread in ${r}`
                };
            }
        case "subscribe_slack_channel":
            {
                const r = ewh(i);
                return r === void 0 ? n : {
                    ...n,
                    success: `Subscribed to ${r}`
                };
            }
        case "subscribe_github_pr":
            {
                const r = oKv(i);
                return r === void 0 ? n : {
                    ...n,
                    success: `Subscribed to ${r.markdown}`,
                    error: `Failed to subscribe to ${r.plain}`
                };
            }
        case "subscribe_github_ci":
            {
                const r = aKv(i);
                return r === void 0 ? n : {
                    ...n,
                    success: `Subscribed to CI ${r.markdown}`,
                    error: `Failed to subscribe to CI ${r.plain}`
                };
            }
        case "subscribe_origin_pr":
            {
                const r = lKv(i);
                return r === void 0 ? n : {
                    ...n,
                    success: `Subscribed to ${r.markdown}`,
                    error: `Failed to subscribe to ${r.plain}`
                };
            }
        case "subscribe_origin_ci":
            {
                const r = uKv(i);
                return r === void 0 ? n : {
                    ...n,
                    success: `Subscribed to CI ${r.markdown}`,
                    error: `Failed to subscribe to CI ${r.plain}`
                };
            }
        case "subscribe_timer":
            {
                const r = dKv(i);
                return r === void 0 ? n : {
                    ...n,
                    success: `Scheduled reminder ${r}`
                };
            }
        case "unsubscribe":
            return Ttt(i.resultText)?.closed === !1 ? {
                ...n,
                success: e.noMatchingSubscription
            } : n;
        default:
            return n;
    }
}
function XCo(e) {
    return e.length <= JCo ? e : `${e.slice(0, JCo - 1)}\u2026`;
}
function ijt(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Ttt(e) {
    if (e !== void 0) try {
        const t = JSON.parse(e);
        return ijt(t) ? t : void 0;
    } catch  {
        return;
    }
}
function u8e(e) {
    return typeof e == "string" && e.length > 0 ? e : void 0;
}
function NZi(e) {
    return e.replace(/[\\`*_[\]()<>]/g, "\\$&");
}
function d8e(e, t) {
    const n = NZi(e);
    return t === void 0 ? n : `[${n}](${t.replace(/\(/g, "%28").replace(/\)/g, "%29")})`;
}
function ewh(e) {
    const n = Ttt(e.resultText)?.subscriptionMetadata;
    if (!ijt(n)) return;
    const i = u8e(n.channelName)?.replace(/^#/, "");
    if (i === void 0 || i.length === 0) return;
    const r = u8e(Ttt(e.argsJson)?.channelId), s = r !== void 0 && cwh.test(r) ? `https://slack.com/app_redirect?channel=${encodeURIComponent(r)}` : void 0;
    return d8e(`#${XCo(i)}`, s);
}
function OZi(e) {
    const t = u8e(e.repo);
    return t !== void 0 && FZi.test(t) ? t : void 0;
}
function sKv(e) {
    let t;
    try {
        t = new URL(e);
    } catch  {
        return;
    }
    if (t.protocol !== "https:" && t.protocol !== "http:") return;
    const n = t.pathname.match(/^\/([^/]+\/[^/]+)\/pull\/(\d+)(?:\/|$)/);
    if (n === null || !FZi.test(n[1])) return;
    const i = `${n[1]}#${n[2]}`, r = t.hostname.toLowerCase(), s = r === "github.com" || r.endsWith(".github.com") ? t.toString() : void 0;
    return {
        markdown: d8e(i, s),
        plain: i
    };
}
function oKv(e) {
    const t = Ttt(e.argsJson)?.options;
    if (ijt(t)) switch(t.scope){
        case "pr":
            {
                const n = u8e(t.prUrl);
                if (n !== void 0) return sKv(n);
                const i = OZi(t), r = t.pullNumber;
                if (i === void 0 || typeof r != "number" || !Number.isInteger(r) || r <= 0) return;
                const s = `${i}#${r}`;
                return {
                    markdown: d8e(s, `https://github.com/${i}/pull/${r}`),
                    plain: s
                };
            }
        case "repo":
            {
                const n = OZi(t);
                return n === void 0 ? void 0 : {
                    markdown: `PRs in ${d8e(n, `https://github.com/${n}`)}`,
                    plain: `PRs in ${n}`
                };
            }
        case "author":
            {
                const n = OZi(t), i = u8e(t.author);
                return n === void 0 || i === void 0 || !lwh.test(i) ? void 0 : {
                    markdown: `PRs by ${NZi(i)} in ${d8e(n, `https://github.com/${n}`)}`,
                    plain: `PRs by ${i} in ${n}`
                };
            }
        default:
            return;
    }
}
function aKv(e) {
    const t = Ttt(e.argsJson)?.options;
    if (!ijt(t)) return;
    const n = OZi(t), i = u8e(t.branch);
    if (n === void 0 || i === void 0 || i.includes("[") || i.includes("]") || i.includes("(") || i.includes(")")) return;
    const r = XCo(i), s = d8e(n, `https://github.com/${n}`);
    return {
        markdown: `on ${NZi(r)} in ${s}`,
        plain: `on ${r} in ${n}`
    };
}
function ZCo(e) {
    const t = u8e(e.repo);
    return t !== void 0 && FZi.test(t) ? t : void 0;
}
function twh(e) {
    const t = new URL(`/codebase/${e}/pulls`, _3n);
    return d8e(e, t.toString());
}
function cKv(e) {
    const t = YU(e);
    if (t?.provider !== "origin") return;
    const n = new URL(e), i = swh.get(n.hostname.toLowerCase());
    if (n.protocol !== "https:" || n.port !== "" || n.username !== "" || n.password !== "" || i === void 0) return;
    const r = n.pathname.endsWith("/") ? n.pathname.slice(0, -1) : n.pathname, s = `/pr/${t.owner}/${t.repo}/${t.prNumber}`, o = `/codebase/${t.owner}/${t.repo}/pull/${t.prNumber}`;
    if (r !== s && r !== o) return;
    const a = `${t.owner}/${t.repo}#${t.prNumber}`, c = new URL(`${o}${n.search}${n.hash}`, i);
    return {
        markdown: d8e(a, c.toString()),
        plain: a
    };
}
function lKv(e) {
    const t = Ttt(e.argsJson)?.options;
    if (ijt(t)) switch(t.scope){
        case "pr":
            {
                const n = u8e(t.prUrl);
                if (n !== void 0) return cKv(n);
                const i = ZCo(t), r = t.pullNumber;
                if (i === void 0 || typeof r != "number" || !Number.isInteger(r) || r <= 0) return;
                const s = `${i}#${r}`, o = new URL(`/codebase/${i}/pull/${r}`, _3n);
                return {
                    markdown: d8e(s, o.toString()),
                    plain: s
                };
            }
        case "repo":
            {
                const n = ZCo(t);
                return n === void 0 ? void 0 : {
                    markdown: `PRs in ${twh(n)}`,
                    plain: `PRs in ${n}`
                };
            }
        default:
            return;
    }
}
function uKv(e) {
    const t = Ttt(e.argsJson)?.options;
    if (!ijt(t)) return;
    const n = ZCo(t);
    if (n === void 0) return;
    const i = twh(n);
    switch(t.scope){
        case "repo":
            return {
                markdown: `in ${i}`,
                plain: `in ${n}`
            };
        case "branch":
            {
                const r = u8e(t.branch);
                if (r === void 0 || r.includes("[") || r.includes("]") || r.includes("(") || r.includes(")")) return;
                const s = XCo(r);
                return {
                    markdown: `on ${NZi(s)} in ${i}`,
                    plain: `on ${s} in ${n}`
                };
            }
        default:
            return;
    }
}
function dKv(e) {
    const t = Ttt(e.argsJson);
    if (t === void 0) return;
    const n = t.delaySeconds;
    if (typeof n != "number" || !Number.isInteger(n) || n <= 0) return;
    const i = hKv(n);
    return t.once === !0 ? `in ${i}` : `every ${i}`;
}
function hKv(e) {
    const t = [
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
    for (const [n, i] of t)if (e % n === 0) {
        const r = e / n;
        return `${r} ${i}${r === 1 ? "" : "s"}`;
    }
    return `${e} second${e === 1 ? "" : "s"}`;
}
export function pKv(e, t) {
    return YCo(t) ? e.serverName : void 0;
}
function mKv(e) {
    return _I(wi.fromString(e, {
        dontUseNodeBuffer: !0
    }), !1, !0);
}
function gKv(e, t) {
    return !e || t ? "default" : `id:${mKv(e)}`;
}
function e0o(e) {
    return _I(wi.fromString(e, {
        dontUseNodeBuffer: !0
    }), !1, !0);
}
function dwh(e) {
    return (ale(e, 0) >>> 0).toString(16);
}
export function fKv(e) {
    return dwh(t0o(e));
}
export function BZi(e, t) {
    return dwh(`${e}:${t}`);
}
function t0o(e) {
    return Array.isArray(e) ? `[${e.map(t0o).join(",")}]` : e && typeof e == "object" ? `{${Object.entries(e).filter(([, n])=>n !== void 0).sort(([n], [i])=>n.localeCompare(i)).map(([n, i])=>`${JSON.stringify(n)}:${t0o(i)}`).join(",")}}` : JSON.stringify(e);
}
function n0o(e, t) {
    const n = [
        `profile:${e0o(gKv(e.profileId, e.isDefaultProfile))}`
    ];
    return e.projectScopeHash && n.push(`project:${e0o(e.projectScopeHash)}`), t && e.resolvedConfigHash && n.push(`cfg:${e0o(e.resolvedConfigHash)}`), `${TYi}${n.join(":")}`;
}
export function vKv(e) {
    return `${e.serverId}${n0o(e, !0)}`;
}
export function hwh(e) {
    return `${e.serverId}${n0o(e, !1)}`;
}
export function pwh(e) {
    const t = n0o({
        serverId: "",
        profileId: e.profileId,
        isDefaultProfile: e.isDefaultProfile,
        projectScopeHash: e.projectScopeHash
    }, !1), n = `${t}:`, i = e.scopedServerId.lastIndexOf(TYi);
    if (i === -1) return;
    const r = e.scopedServerId.slice(i);
    if (!(!e.projectScopeHash && r.includes(":project:")) && !(r !== t && !r.startsWith(n))) return e.scopedServerId.slice(0, i);
}
export function bKv(e) {
    const t = new Map, n = [];
    for (const i of e){
        const r = yKv(i), s = i0o(i);
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
        const o = t.get(r);
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
        t.set(r, a), n.push(a);
    }
    return n;
}
function yKv(e) {
    if (!(e.projectManaged || e.type !== "streamableHttp" || !e.url) && !e.url.startsWith("mcp-provider://")) return `streamableHttp:${fzv(e.url)}`;
}
export function SKv(e, t, n) {
    const i = n.getSelection(e.groupId);
    if (i) {
        const s = mwh(i).map((c)=>e.servers.find((l)=>l.identifier === c)).filter((c)=>c !== void 0), o = s.filter((c)=>!t.has(c.identifier));
        if (o.length > 0) return o;
        const a = s[0];
        if (a) return [
            a
        ];
    }
    const r = kKv(e.servers) ?? e.servers[0];
    return r ? [
        r
    ] : [];
}
export function mwh(e) {
    const t = new Set, n = [];
    for (const i of e)t.has(i) || (t.add(i), n.push(i));
    return n;
}
function kKv(e, t = ()=>!0) {
    for (const n of gwh){
        const i = e.find((r)=>i0o(r) === n && t(r));
        if (i) return i;
    }
}
export function i0o(e) {
    return e.url?.startsWith("mcp-provider://") ? "provider" : e.userManaged ? "user" : e.projectManaged ? "project" : e.extensionId ? "extension" : e.dashboardManaged ? "team" : e.pluginManaged ? "plugin" : e.identifier.startsWith("user-") ? "user" : "default";
}
export function wKv(e) {
    return e ? e instanceof Set ? e : new Set(e) : new Set;
}
export function TKv(e) {
    if (!e.startsWith(HZi)) return e;
    const t = e.slice(HZi.length), n = new Qie;
    return n.update(t), `${HZi}${n.digest()}`;
}
export function EKv(e, t) {
    return e.length !== t.length ? !1 : e.every((n, i)=>n.identifier === t[i]?.identifier);
}
export function xKv(e) {
    return e.type === "streamableHttp" && ios({
        identifier: e.identifier,
        serverUrl: e.url
    });
}
export function r0o(e) {
    return e === "authenticate" || e === "user_logout";
}
export function _wh(e) {
    return e instanceof Error && (e instanceof w0o || e[k0o] === !0 || e.isMcpMetadataAbortError === !0);
}
export function IKv(e) {
    const t = e.replace(/((?:access_token|refresh_token|id_token|client_secret|authorization|code|password|assertion|token|secret)[^:=\r\n]{0,32}[:=]\s*["']?)([^"',\s&}]+)/gi, "$1[REDACTED]").replace(/(\bBearer\s+)([A-Za-z0-9\-._~+/]+=*)/gi, "$1[REDACTED]");
    return t.length > 256 ? `${t.slice(0, 253)}...` : t;
}
export function s0o(e, t) {
    return !Number.isFinite(e) || e <= 0 ? t : Math.trunc(e);
}
export async function wCt(e, t, n, i) {
    let r;
    const s = new Promise((o, a)=>{
        r = setTimeout(()=>{
            const c = new Awh(n, t);
            a(c), i?.abort(c);
        }, t);
    });
    try {
        return await Promise.race([
            e(),
            s
        ]);
    } finally{
        r !== void 0 && clearTimeout(r);
    }
}
export async function o0o(e, t, n, i) {
    const r = performance.now();
    try {
        const s = await i(), o = performance.now() - r;
        return e.setAttribute("mcp.ipc.duration_ms", String(o)), e.setAttribute("mcp.ipc.outcome", "success"), n.distribution({
            stat: "mcp.ipc.duration_ms",
            value: o,
            tags: {
                name: t,
                outcome: "success"
            }
        }), n.increment({
            stat: "mcp.ipc.count",
            tags: {
                name: t,
                outcome: "success"
            }
        }), s;
    } catch (s) {
        const o = performance.now() - r;
        throw e.setAttribute("mcp.ipc.duration_ms", String(o)), e.setAttribute("mcp.ipc.outcome", "error"), n.distribution({
            stat: "mcp.ipc.duration_ms",
            value: o,
            tags: {
                name: t,
                outcome: "error"
            }
        }), n.increment({
            stat: "mcp.ipc.count",
            tags: {
                name: t,
                outcome: "error"
            }
        }), s;
    }
}
export function a0o(e) {
    if (!e) return {};
    try {
        return JSON.parse(e);
    } catch  {
        return {};
    }
}
export function AKv(e) {
    const t = a0o(e);
    if (!t || typeof t != "object") return [];
    const n = t, i = new Set(n.required ?? []);
    return Object.keys(n.properties ?? {}).sort().map((r)=>({
            name: r,
            description: n.properties?.[r]?.description,
            required: i.has(r)
        }));
}
export function GZi(e) {
    return typeof e.ensureConnected == "function";
}
export function c0o(e) {
    return e !== void 0 && Dwh.has(e);
}
export function bwh(e) {
    for (const [t, n] of Object.entries(ljt))if (n === e) return t;
}
export function RKv(e) {
    switch(e?.rowKind){
        case "team":
            return "team";
        case "plugin":
        case "custom":
            return "user";
        default:
            return "unknown";
    }
}
export function DKv(e) {
    if (e === void 0) return "none";
    if (e.type !== "error") return e.type;
    const t = bwh(e.error);
    return t !== void 0 ? t : e.error === ajt || e.error === cjt ? "admin_blocked" : "error";
}
export function MKv(e) {
    return e !== void 0 && Object.values(ljt).includes(e);
}
export function q1e(e) {
    return e.type === "streamableHttp" ? "http" : "stdio";
}
export function cLe(e) {
    return e.type === "streamableHttp" ? gUv(e.url) : "stdio";
}
function ywh(e, t) {
    if (!e.includes("*")) return e === t;
    const i = e.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
    return new RegExp(`^${i}$`).test(t);
}
function PKv(e, t) {
    return ywh(e, t) || dso(t, [
        e
    ]);
}
function Swh(e) {
    if (e.command) return e.args && e.args.length > 0 ? `${e.command} ${e.args.join(" ")}` : e.command;
}
export function l0o(e) {
    const t = e;
    return mkh({
        mode: t.toolAllowlistMode,
        tools: t.toolAllowlist
    });
}
export function u0o(e) {
    return typeof e == "string" && Pwh.has(e) ? e : "all";
}
export function kwh(e) {
    return Vzv(e) === "declared_read" ? "reads" : "writes";
}
function LKv(e, t) {
    const n = `${e}|`;
    return t.some((i)=>i.startsWith(n));
}
export function VZi(e, t, n) {
    const i = t?.[e];
    return i != null && typeof i == "object" ? {
        reads: u0o(i.reads),
        writes: u0o(i.writes)
    } : LKv(e, n) ? {
        reads: "custom",
        writes: "custom"
    } : {
        reads: "all",
        writes: "all"
    };
}
export function wwh(e, t, n) {
    try {
        const i = e, r = i._durableSnapshots?.get(t.identifier)?.tools?.find((s)=>s.name === n)?.annotations;
        if (r !== void 0) return r;
        if (typeof i.toolsCache == "function") return i.toolsCache()[t.identifier]?.find((s)=>s.name === n)?.annotations;
    } catch (i) {
        JX("[MCPService] lookupToolAnnotations failed to read snapshot/cache accessors:", i);
    }
}
function d0o(e) {
    const t = e?.trim();
    return t && t.length > 0 ? t : void 0;
}
export function y3n(e, t) {
    const n = Swh(e), i = e.url;
    return t.find((r)=>{
        const s = d0o(r.command), o = d0o(r.serverUrl);
        if (!(s !== void 0) && !(o !== void 0)) return !1;
        const l = s === void 0 || n !== void 0 && ywh(s, n), u = o === void 0 || i !== void 0 && PKv(o, i);
        return l && u;
    });
}
export function NKv(e, t, n) {
    if (n?.useCorePolicy === !0) return !Hzv({
        command: Swh(e),
        url: e.url
    }, t);
    if (t.disableAll === !0) return !0;
    const i = t.allowedMcpServers ?? [];
    return i.length === 0 || t.allowUserOverrideMcpServers === !0 ? !1 : y3n(e, i) === void 0;
}
export function OKv(e, t) {
    return y3n(e, t);
}
export function FKv(e, t) {
    if (e !== void 0) return [
        ...e.networkAllowlist ?? [],
        ...d0o(e.serverUrl) !== void 0 && t.url !== void 0 ? [
            t.url
        ] : []
    ];
}
export function BKv(e) {
    return e ? e.connected === !0 || e.statusType === "connected" || e.statusType === "degraded" ? !0 : e.success === !0 && e.connected === void 0 && e.statusType === void 0 : !1;
}
export function Owh(e) {
    return "init" in e;
}
export function E0o(e) {
    return typeof e.write == "function";
}
export function UKv(e) {
    return !!e.onMount;
}
export function Fwh(e) {
    return "v" in e || "e" in e;
}
export function YZi(e) {
    if ("e" in e) throw e.e;
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !("v" in e)) throw new Error("[Bug] atom state is not initialized");
    return e.v;
}
export function XZi(e) {
    return typeof e?.then == "function";
}
export function $Kv(e) {
    if (!(e instanceof Error)) return !1;
    const t = e.name, n = e.message.toLowerCase();
    return (t === "RangeError" || t === "InternalError") && (n.includes("call stack") || n.includes("too much recursion") || n.includes("stack overflow"));
}
export function Bwh(e, t, n) {
    if (!n.p.has(e)) {
        n.p.add(e);
        const i = ()=>n.p.delete(e);
        t.then(i, i);
    }
}
export function Uwh(e, t, n) {
    const i = n.get(e), r = i?.t, s = t.p;
    if (!r?.size) return s;
    if (!s.size) return r;
    const o = new Set(r);
    for (const a of s)o.add(a);
    return o;
}
export function HKv(e) {
    return !!e.INTERNAL_onInit;
}
function WKv(...e) {
    const t = {
        get (o) {
            return i(n, t, o);
        },
        set (o, ...a) {
            return r(n, t, o, ...a);
        },
        sub (o, a) {
            return s(n, t, o, a);
        }
    }, n = [
        new WeakMap,
        new WeakMap,
        new WeakMap,
        new Set,
        new Set,
        new Set,
        {},
        $wh,
        Hwh,
        Wwh,
        Gwh,
        Vwh,
        jwh,
        qwh,
        zwh,
        Kwh,
        Ywh,
        Xwh,
        Zwh,
        Qwh,
        Jwh,
        eCh,
        tCh,
        nCh,
        void 0,
        new WeakMap,
        iCh,
        rCh,
        [
            0
        ]
    ].map((o, a)=>e[a] || o);
    sCh.set(t, Object.freeze(n));
    const i = n[21], r = n[22], s = n[23];
    return t;
}
export function so(e, t) {
    const n = `atom${++oCh}`, i = {
        toString () {
            return (import.meta.env ? import.meta.env.MODE : void 0) !== "production" && this.debugLabel ? n + ":" + this.debugLabel : n;
        }
    };
    return typeof e == "function" ? i.read = e : (i.init = e, i.read = VKv, i.write = jKv), t && (i.write = t), i;
}
function VKv(e) {
    return e(this);
}
function jKv(e, t, n) {
    return t(this, typeof n == "function" ? n(e(this)) : n);
}
export function Rg() {
    return aCh ? aCh() : WKv();
}
var aCh;
export function qKv(e) {
    return e instanceof Error && e.message.includes(cCh);
}
export function zKv(e) {
    return /couldn't find remote ref/i.test(e);
}
export function KKv(e) {
    return /Not possible to fast-forward/i.test(e) || /Diverging branches can't be fast-forwarded/i.test(e) || e.includes("has diverged from remote branch");
}
export function YKv(e) {
    return /would be overwritten by (checkout|merge)/i.test(e) || /Your local changes( to the following files)? would be overwritten/i.test(e) || /commit your changes or stash them/i.test(e);
}
export function XKv(e) {
    const t = e.match(/(?:is already used by worktree at|is already checked out at)\s+'([^']+)'/i);
    return t ? t[1] : void 0;
}
export function T3n(e) {
    return e.type === "gitRepo" ? e.url : e.repoUrl;
}
function JKv(e) {
    return e.trim();
}
function eYv(e) {
    if (e.length === 0) return "Untitled";
    const t = Jwt(e[0] ?? "");
    return e.length === 1 ? t : `${t} +${e.length - 1}`;
}
function I0o(e) {
    const t = e.name?.trim();
    return t || eYv(e.repoUrls);
}
function tYv(e, t, n) {
    const i = new Map;
    for (const o of e){
        const a = t(o), c = i.get(a);
        (c === void 0 || A0o(n(o), n(c))) && i.set(a, o);
    }
    const r = new Set, s = [];
    for (const o of e){
        const a = t(o);
        if (r.has(a)) continue;
        r.add(a);
        const c = i.get(a);
        c !== void 0 && s.push(c);
    }
    return s;
}
function A0o(e, t) {
    const n = !(e > 0), i = !(t > 0);
    return n ? !1 : i ? !0 : e < t;
}
function nYv(e) {
    return e.type === "gitRepo" ? {
        createdAtMs: 0
    } : {
        createdAtMs: e.createdAtMs,
        id: e.id
    };
}
function iYv(e) {
    const { candidate: t, current: n } = e;
    return A0o(t.createdAtMs, n.createdAtMs) ? !0 : A0o(n.createdAtMs, t.createdAtMs) ? !1 : t.id !== void 0 && n.id !== void 0 ? t.id < n.id : !1;
}
function rYv(e, t) {
    let n;
    for (const i of e)(n === void 0 || iYv({
        candidate: t(i),
        current: t(n)
    })) && (n = i);
    return n;
}
function dCh(e) {
    const t = e.filter((n)=>n.type !== "gitRepo");
    return rYv(t.length > 0 ? t : e, nYv);
}
function R0o(e) {
    switch(e.type){
        case "gitRepo":
            return e.name;
        case "personal":
        case "team":
            {
                const t = e.name?.trim();
                if (t) return t;
                const n = I0o({
                    name: e.name,
                    repoUrls: [
                        e.repoUrl
                    ]
                });
                return kji(e) ? JKv(n) : n;
            }
        default:
            return e;
    }
}
function D0o(e) {
    return y$t(T3n(e));
}
function sYv(e) {
    return iMn(oYv(e));
}
function oYv(e) {
    switch(e.type){
        case "gitRepo":
            return e.scmRepoNodeId || e.mirrorGithubNodeId;
        case "team":
            return e.scmRepoNodeId;
        case "personal":
            return;
        default:
            return e;
    }
}
function hCh(e) {
    return e.type === "gitRepo" ? e.name.trim().length > 0 && e.url.trim().length > 0 : e.repoUrl.trim().length > 0;
}
export function aYv(e, t, n = {}) {
    const i = n.preferredPublicId?.trim();
    if (Tjd(i)) return t.find((a)=>kji(a) === i);
    const r = n.preferredTargetKey?.trim();
    if (r) {
        const o = mYv(t, r);
        if (o !== void 0) return o;
    }
    for (const o of e){
        const a = y$t(o);
        if (a.length === 0) continue;
        const c = dCh(fCh(t, a));
        if (c !== void 0) return c;
    }
    const s = iMn(n.mirrorGithubNodeId);
    if (s !== void 0) return dCh(hYv(t, s));
}
function M0o(e) {
    return e.type === "gitRepo" ? e.url : kji(e) ?? e.id.toString();
}
function cYv(e, t) {
    const n = kji(e);
    if (!n) return e;
    const i = t.find((o)=>o.publicId?.trim() === n);
    if (i === void 0) return e;
    const r = Number(i.createdAtMs), s = e.createdAtMs > 0 ? e.createdAtMs : r > 0 ? r : e.createdAtMs;
    return {
        ...e,
        name: i.name,
        createdAtMs: s
    };
}
function lYv(e) {
    return (e.repoConfig?.repos ?? []).map((t)=>t.repoUrl.trim()).filter((t)=>t.length > 0);
}
function uYv(e) {
    const t = lYv(e), n = t[0];
    if (n === void 0 || Hdo(t)) return;
    const i = e.publicId?.trim(), r = Number(e.createdAtMs), s = Number(e.updatedAtMs);
    return {
        type: "personal",
        id: e.id,
        repoUrl: n,
        environmentJson: e.environmentJson ?? "",
        createdAtMs: r > 0 ? r : 0,
        updatedAtMs: s > 0 ? s : 0,
        ...i ? {
            publicId: i
        } : {},
        ...e.name !== void 0 ? {
            name: e.name
        } : {}
    };
}
function dYv(e) {
    return {
        template: e,
        repoKey: D0o(e),
        targetKey: Sji(e)
    };
}
function pCh(e, t, n) {
    const i = e.get(t);
    i === void 0 ? e.set(t, [
        n
    ]) : i.push(n);
}
function mCh(e) {
    const t = new Set, n = new Map, i = new Map, r = new Map;
    for (const [s, { template: o, repoKey: a, targetKey: c }] of e.entries()){
        a.length > 0 && (t.add(a), pCh(n, a, s));
        const l = sYv(o);
        l !== void 0 && pCh(i, l, s), r.has(c) || r.set(c, o);
    }
    return {
        repoKeys: t,
        positionsByRepoKey: n,
        positionsByGithubNodeId: i,
        templateByTargetKey: r
    };
}
function E3n(e) {
    const t = nQi.get(e);
    if (t !== void 0) return t;
    const n = mCh(e.map(dYv));
    return nQi.set(e, n), n;
}
export function gCh(e) {
    return E3n(e).repoKeys;
}
export function fCh(e, t) {
    const n = E3n(e).positionsByRepoKey.get(t);
    return n === void 0 ? iQi : n.map((i)=>e[i]);
}
function hYv(e, t) {
    const n = E3n(e).positionsByGithubNodeId.get(t);
    return n === void 0 ? iQi : n.map((i)=>e[i]);
}
export function pYv(e, t) {
    const { positionsByRepoKey: n } = E3n(e), i = [];
    for (const r of t){
        const s = n.get(r);
        s !== void 0 && i.push(...s);
    }
    return i.length === 0 ? iQi : (i.sort((r, s)=>r - s), i.map((r)=>e[r]));
}
function mYv(e, t) {
    return E3n(e).templateByTargetKey.get(t);
}
function gYv(e, t) {
    for(let n = djt.length - 1; n >= 0; n--){
        const i = djt[n];
        if (i.personalEnvironments === e.personalEnvironments && i.teamEnvironments === e.teamEnvironments && i.logicalEnvironments === e.logicalEnvironments && i.githubRepos === (t ? e.githubRepos : void 0)) return i.result;
    }
}
function fYv(e, t, n) {
    djt.push({
        personalEnvironments: e.personalEnvironments,
        teamEnvironments: e.teamEnvironments,
        logicalEnvironments: e.logicalEnvironments,
        githubRepos: t ? e.githubRepos : void 0,
        result: n
    }), djt.length > _Ch && djt.shift();
}
export function tQi(e, t = {}) {
    const n = t.includeGitRepoProjects ?? (e.gitRepoFetchedAuthEpoch !== null && e.gitRepoFetchedAuthEpoch === e.gitRepoAuthEpoch), i = gYv(e, n);
    if (i !== void 0) return i;
    const r = vYv(e, n);
    return fYv(e, n, r), r;
}
function vYv(e, t) {
    const n = new Set, i = [], r = [], s = (h)=>{
        if (!hCh(h)) return;
        const p = D0o(h);
        if (h.type === "gitRepo") {
            if (n.has(p)) return;
            n.add(p), r.push({
                template: h,
                displayName: R0o(h),
                repoKey: p,
                targetKey: Sji(h),
                sortKey: M0o(h)
            });
            return;
        }
        const g = cYv(h, e.logicalEnvironments);
        i.push({
            template: g,
            displayName: R0o(g),
            repoKey: p,
            targetKey: Sji(g),
            sortKey: M0o(g),
            pickerBaseLabel: I0o({
                name: g.name,
                repoUrls: [
                    g.repoUrl
                ]
            }),
            createdAtMs: g.createdAtMs
        });
    };
    for (const h of e.personalEnvironments)s(h);
    for (const h of e.teamEnvironments)s(h);
    for (const h of e.logicalEnvironments){
        const p = uYv(h);
        p === void 0 || !hCh(p) || i.push({
            template: p,
            displayName: R0o(p),
            repoKey: D0o(p),
            targetKey: Sji(p),
            sortKey: M0o(p),
            pickerBaseLabel: I0o({
                name: p.name,
                repoUrls: [
                    p.repoUrl
                ]
            }),
            createdAtMs: p.createdAtMs
        });
    }
    if (t) for (const h of e.githubRepos)s(h);
    const o = tYv(i, (h)=>h.pickerBaseLabel, (h)=>h.createdAtMs), a = new Set(o.map((h)=>h.repoKey).filter((h)=>h.length > 0)), c = r.filter((h)=>!a.has(h.repoKey)), l = [
        ...o,
        ...c
    ];
    l.sort((h, p)=>{
        const g = vCh.value.compare(h.displayName, p.displayName);
        return g !== 0 ? g : h.repoKey < p.repoKey ? -1 : h.repoKey > p.repoKey ? 1 : h.sortKey < p.sortKey ? -1 : h.sortKey > p.sortKey ? 1 : 0;
    });
    const u = l.map((h)=>h.template);
    return nQi.set(u, mCh(l)), u;
}
export function _Yv() {
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
function bYv(e) {
    return e.replace(/[-_]+/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\b\w/g, (t)=>t.toUpperCase());
}
function yYv(e) {
    return e.params?.tools?.[0]?.serverId || e.params?.tools?.[0]?.serverName || e.params?.server?.name;
}
function SYv(e) {
    return e.params?.tools?.[0]?.name;
}
function SCh(e) {
    const t = e.toolName?.trim();
    if (!t) return;
    const n = e.serverName?.trim(), i = bYv(t);
    return n ? `Run ${i} in ${n}` : `Run ${i}`;
}
export function sQi(e, t) {
    const n = e.trim();
    return n ? t?.find((r)=>r.identifier === n || r.name === n)?.name.trim() || n : "";
}
function kYv(e) {
    const t = e.serverIdentifier?.trim();
    return t ? `Authenticate ${sQi(t, e.servers)}` : "Authenticate MCP server";
}
function ECt(e) {
    return e.trim().toLowerCase();
}
export function wYv(e) {
    const t = e.trim();
    if (!t) return null;
    const n = t.indexOf(Itt);
    if (n === -1) return ECt(t);
    const i = t.substring(0, n), r = t.substring(n + 1);
    if (!i || !r) return null;
    const s = i === UI ? UI : ECt(i), o = r === UI ? UI : ECt(r);
    return `${s}${Itt}${o}`;
}
export function Yde(e, t) {
    if (e.length === 0) return {
        valid: !1,
        error: "Name cannot be empty"
    };
    if (e.length > 256) return t?.warn(`[MCP] Name too long (${e.length} chars): ${e.substring(0, 50)}...`), {
        valid: !1,
        error: `Name too long (${e.length} characters, maximum 256)`
    };
    if (e.trim().length === 0) return {
        valid: !1,
        error: "Name cannot be empty or only whitespace"
    };
    for (const n of ECh)if (e.includes(n)) return {
        valid: !1,
        error: `Name cannot contain ${n} character`
    };
    return {
        valid: !0
    };
}
function wCh(e, t) {
    const n = e === UI ? UI : ECt(e), i = t === UI ? UI : ECt(t);
    if (n !== UI) {
        const r = Yde(n);
        if (!r.valid) throw new Error(`Invalid server ID: ${r.error}`);
    }
    if (i !== UI) {
        const r = Yde(i);
        if (!r.valid) throw new Error(`Invalid tool name: ${r.error}`);
    }
    return `${n}${Itt}${i}`;
}
export function P0o(e, t) {
    const n = e === UI ? UI : ECt(e), i = t === UI ? UI : ECt(t);
    return n !== UI && !Yde(n).valid || i !== UI && !Yde(i).valid ? null : `${n}${Itt}${i}`;
}
export function CCh(e) {
    const t = e.indexOf(Itt);
    if (t === -1) return null;
    const n = e.substring(0, t), i = e.substring(t + 1);
    return !n || !i ? null : n === UI ? i === UI ? {
        serverId: UI,
        toolName: UI
    } : Yde(i).valid ? {
        serverId: UI,
        toolName: i
    } : null : Yde(n).valid ? i === UI ? {
        serverId: n,
        toolName: UI
    } : Yde(i).valid ? {
        serverId: n,
        toolName: i
    } : null : null;
}
function CYv(e, t, n, i) {
    const r = CCh(n);
    if (!r) return i?.warn(`Invalid MCP allowlist entry: ${n}`), !1;
    const s = t.toLowerCase(), o = r.toolName.toLowerCase();
    return r.serverId === UI ? r.toolName === UI ? !0 : o === s : e.toLowerCase() !== r.serverId.toLowerCase() ? !1 : r.toolName === UI ? !0 : o === s;
}
export function L0o(e) {
    const { serverId: t, toolName: n, allowlist: i } = e, r = Yde(n), s = Yde(t);
    return !r.valid || !s.valid ? !1 : i.some((o)=>CYv(t, n, o));
}
export function N0o(e, t, n, i) {
    const r = Yde(e), s = Yde(t);
    if (!r.valid || !s.valid) return i?.error(`Cannot add MCP names with reserved characters to allowlist - serverId: '${t}', toolName: '${e}'`), n;
    const o = wCh(t, e);
    if (n.some((c)=>c.toLowerCase() === o)) return n;
    const a = wCh(t, UI);
    return n.some((c)=>c.toLowerCase() === a) ? n : [
        ...n,
        o
    ];
}
export function TCh(e, t) {
    const n = [];
    for (const i of e)t.includes(i.name) && i.args.length > 0 && i.args[0].type === "word" ? n.push(i.name + " " + i.args[0].value) : n.push(i.name);
    return [
        ...new Set(n)
    ];
}
export function uG(e, t) {
    return t.getComposerData(e)?.capabilities.find((i)=>{
        const r = i;
        return r.type === ps.TOOL_FORMER && typeof r.pendingDecisions == "function" && typeof r.getBubbleData == "function" && typeof r.getBubbleIdByToolCallId == "function" && typeof r.getPendingUserDecisionGroup == "function";
    });
}
function xCh(e, t) {
    return e?.trim().toLowerCase() === t;
}
function TYv(e, t) {
    const n = e?.params, i = n?.parsingResult;
    if (i !== void 0 && !i.parsingFailed) {
        const s = t.cachedServerConfig?.runTerminalServerConfig?.compositeShellCommands ?? [], o = TCh(i.executableCommands, s);
        if (o.length > 0) return `Run ${o.join(", ")}`;
    }
    const r = n?.command?.trim();
    return r && r.length > 0 ? `Run ${r}` : "Run terminal command";
}
function ICh(e, t, n, i) {
    if (e === nt.RUN_TERMINAL_COMMAND_V2 && t?.tool === nt.RUN_TERMINAL_COMMAND_V2) return TYv(t, n);
    if (e === nt.MCP || e === nt.CALL_MCP_TOOL) {
        if (t?.tool === nt.MCP) {
            const r = yYv(t);
            return SCh({
                toolName: SYv(t),
                serverName: r ? sQi(r, i) : void 0
            }) ?? "Run MCP tool";
        }
        if (t?.tool === nt.CALL_MCP_TOOL) {
            const r = t.params?.server;
            return SCh({
                toolName: t.params?.toolName,
                serverName: r ? sQi(r, i) : void 0
            }) ?? "Run MCP tool";
        }
        return "Run MCP tool";
    }
    return e === nt.MCP_AUTH && t?.tool === nt.MCP_AUTH ? kYv({
        serverIdentifier: t.params?.serverIdentifier,
        servers: i
    }) : e === nt.EDIT_FILE || e === nt.EDIT_FILE_V2 ? "Edit file" : e === nt.DELETE_FILE ? "Delete file" : e === nt.ASK_QUESTION ? "Answer question" : "Waiting for approval";
}
function ACh(e) {
    return e === nt.RUN_TERMINAL_COMMAND_V2 ? "terminal" : e === nt.MCP || e === nt.CALL_MCP_TOOL ? "mcp" : e === nt.MCP_AUTH ? "mcp-auth" : e === nt.EDIT_FILE || e === nt.EDIT_FILE_V2 || e === nt.DELETE_FILE ? "edit" : e === nt.ASK_QUESTION ? "question" : "other";
}
function RCh(e) {
    return e === nt.MCP_AUTH ? "Authenticate" : e === nt.ASK_QUESTION ? "Answer" : "Allow";
}
function EYv(e) {
    const t = e.toolFormer.getBubbleIdByToolCallId(e.decision.toolCallId);
    if (!t) return;
    const n = e.toolFormer.getBubbleData(t);
    return {
        kind: ACh(e.decision.clientSideTool),
        summary: ICh(e.decision.clientSideTool, n, e.services.aiServerConfigService, e.services.mcpServers),
        bubbleId: t,
        canApprove: e.decision.clientSideTool !== nt.ASK_QUESTION,
        actionLabel: RCh(e.decision.clientSideTool)
    };
}
function xYv(e) {
    const t = e.additionalData;
    return xCh(t?.reviewData?.status, "requested") ? e.tool === nt.RUN_TERMINAL_COMMAND_V2 || e.tool === nt.MCP || e.tool === nt.CALL_MCP_TOOL ? xCh(t?.status, "pending") : e.tool === nt.EDIT_FILE || e.tool === nt.EDIT_FILE_V2 || e.tool === nt.DELETE_FILE : !1;
}
function O0o(e) {
    for (const t of e.services.composerDataService.getLoadedConversation(e.handle)){
        const n = t.toolFormerData;
        if (!(!n || !xYv(n))) return {
            kind: ACh(n.tool),
            summary: ICh(n.tool, n, e.services.aiServerConfigService, e.services.mcpServers),
            bubbleId: t.bubbleId,
            canApprove: n.tool !== nt.ASK_QUESTION,
            actionLabel: RCh(n.tool)
        };
    }
}
export function oQi(e, t) {
    if (!e) return;
    const n = uG(e, t.composerDataService);
    if (!n) return O0o({
        handle: e,
        services: t
    });
    const i = n.getPendingUserDecisionGroup()()[0];
    return i !== void 0 ? EYv({
        toolFormer: n,
        decision: i,
        services: t
    }) ?? O0o({
        handle: e,
        services: t
    }) : O0o({
        handle: e,
        services: t
    });
}
function IYv(e) {
    const t = e.composerDataService.getPendingUserDecisionGroup(e.handle);
    if (e.approval === void 0) return t[0];
    const n = e.composerDataService.getToolFormer(e.handle);
    return t.find((i)=>n?.getBubbleIdByToolCallId(i.toolCallId) === e.approval?.bubbleId);
}
function AYv(e) {
    if (e.decision.clientSideTool === nt.ASK_QUESTION) return !1;
    const n = e.services.composerDataService.getToolFormer(e.handle)?.getBubbleIdByToolCallId(e.decision.toolCallId);
    if (n && e.decision.clientSideTool === nt.RUN_TERMINAL_COMMAND_V2) {
        const i = e.services.toolCallHumanReviewService.getTerminalReviewModelForBubble(e.handle, n);
        if (i) return i.setSelectedOption(oT.RUN), !0;
    }
    if (n && (e.decision.clientSideTool === nt.MCP || e.decision.clientSideTool === nt.CALL_MCP_TOOL)) {
        const i = e.services.toolCallHumanReviewService.getMCPReviewModelForBubble(e.handle, n);
        if (i) return i.setSelectedOption(GM.RUN), !0;
    }
    return e.decision.accept(), !0;
}
export function DCh(e) {
    const t = IYv({
        handle: e.handle,
        approval: e.approval,
        composerDataService: e.services.composerDataService
    });
    if (t !== void 0) return AYv({
        handle: e.handle,
        decision: t,
        services: e.services
    });
    if (e.approval?.kind === "terminal") {
        const n = e.services.toolCallHumanReviewService.getTerminalReviewModelForBubble(e.handle, e.approval.bubbleId);
        return n ? (n.setSelectedOption(oT.RUN), !0) : !1;
    }
    if (e.approval?.kind === "edit") {
        const n = e.services.toolCallHumanReviewService.getEditReviewModelForBubble(e.handle, e.approval.bubbleId);
        return n ? (n.setSelectedOption(JO.ACCEPT), !0) : !1;
    }
    if (e.approval?.kind === "mcp") {
        const n = e.services.toolCallHumanReviewService.getMCPReviewModelForBubble(e.handle, e.approval.bubbleId);
        return n ? (n.setSelectedOption(GM.RUN), !0) : !1;
    }
    return !1;
}
export { okh };

export var ECo = {};
Object.defineProperty(ECo, "AUTORUN_DISCLAIMERS", {
    enumerable: true,
    get: ()=>tjt
});
Object.defineProperty(ECo, "AUTO_RUN_MODE", {
    enumerable: true,
    get: ()=>Pm
});
Object.defineProperty(ECo, "LEAVE_ASK_EVERY_TIME_MESSAGE", {
    enumerable: true,
    get: ()=>$Co
});
Object.defineProperty(ECo, "_setRefreshFn", {
    enumerable: true,
    get: ()=>kkh
});
Object.defineProperty(ECo, "canUserChangeExternalFileProtection", {
    enumerable: true,
    get: ()=>DCo
});
Object.defineProperty(ECo, "confirmLeaveAskEveryTimeMode", {
    enumerable: true,
    get: ()=>DZi
});
Object.defineProperty(ECo, "confirmRunEverythingMode", {
    enumerable: true,
    get: ()=>RZi
});
Object.defineProperty(ECo, "fetchServerAdminSettings", {
    enumerable: true,
    get: ()=>ACo
});
Object.defineProperty(ECo, "forceRefreshAutorunSettings", {
    enumerable: true,
    get: ()=>Skh
});
Object.defineProperty(ECo, "getAutorunModeDisclaimer", {
    enumerable: true,
    get: ()=>MCo
});
Object.defineProperty(ECo, "getAutorunSettingsValuesWithLoadingState_reactive", {
    enumerable: true,
    get: ()=>wkh
});
Object.defineProperty(ECo, "getAutorunSettingsValues_reactive", {
    enumerable: true,
    get: ()=>KE
});
Object.defineProperty(ECo, "getRunEverythingConfirmationMessage", {
    enumerable: true,
    get: ()=>Ckh
});
Object.defineProperty(ECo, "getShellApprovalModeForAnalytics", {
    enumerable: true,
    get: ()=>okh
});
Object.defineProperty(ECo, "initializeAutorunSettings", {
    enumerable: true,
    get: ()=>ykh
});
Object.defineProperty(ECo, "resolveCachedBrowserFeaturesAcl", {
    enumerable: true,
    get: ()=>_kh
});
Object.defineProperty(ECo, "resolveServerMcpAllowedTools", {
    enumerable: true,
    get: ()=>bkh
});

import { si } from "./HVr.js";
import { gkh } from "./admin-mcp-tool-allowlist.ts";
import { IZi } from "./agentReadAccessPolicy.js";
import { skh } from "./browserFeaturesAcl.js";
import { _i } from "./codicons.js";
import { Jh } from "./dashboard_pb.js";
import { Ug } from "./extensionManagement.js";
import { GKv } from "./internals.mjs";
import { bu } from "./objects.js";
import { Ut, qn, yh } from "./qIc.js";
import { _Ct } from "./shellApprovalMode.js";
import { yv } from "./tracing_2.js";
import { x } from "./tslib.es6.js";
var Tkh, Pm, Ekh, JVt, ejt, xkh, MZi, PCo, Ikh, LCo, PZi, LZi, tjt, OCo, FCo, BCo, UCo, $Co;
var oCh;
export { $Co, BCo, Ekh, FCo, Ikh, JVt, LCo, LZi, MZi, OCo, PCo, PZi, Pm, Tkh, UCo, ejt, oCh, tjt, xkh };
var __wakaru_K5_initialized = false;
export function K5() {
if (__wakaru_K5_initialized) return;
__wakaru_K5_initialized = true;
"use strict";
x(), Jh(), qn(), yv(), si(), bu(), Ug(), skh(), _Ct(), _i(), gkh(), IZi(), Tkh = "mcp_settings_overhaul", Pm = {
    ASK_EVERY_TIME: "ask_every_time",
    YOLO: "yolo",
    YOLO_WITH_SANDBOX: "yolo_with_sandbox",
    SMART_AUTO: "smart_auto",
    SMART_AUTO_WITH_SANDBOX: "smart_auto_with_sandbox",
    FULL_YOLO: "full_yolo"
}, Ekh = {
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
}, [JVt, ejt] = Ut(Ekh, {
    equals: yh
}), [xkh, MZi] = Ut(!0), [PCo, Ikh] = Ut(!1), LCo = void 0, PZi = void 0, LZi = void 0, tjt = {
    SANDBOX_MODE: "Commands run in a protected sandbox that limits access to your files, network, and git. You can allowlist specific commands to run with full access when needed. Be cautious of potential prompt injection risks.",
    ALLOWLIST_MODE: "Only commands you've added to your allowlist will run automatically. Other commands will require user approval. Be cautious of potential prompt injection risks.",
    RUN_EVERYTHING_SANDBOX_AVAILABLE: "This allows the agent to execute any tool or shell command without approval. A prompt injection or a malicious tool could delete files or exfiltrate secrets from your machine. We recommend using Sandbox.",
    RUN_EVERYTHING_SANDBOX_UNAVAILABLE: "This allows the agent to execute any tool or shell command without approval. A prompt injection or a malicious tool could delete files or exfiltrate secrets from your machine. We recommend using Allowlist."
}, OCo = "enable-run-everything", FCo = "use-safer-mode", BCo = "cancel", UCo = "leave-ask-every-time", $Co = "Ask Every Time will disappear from this menu after you switch away from it. Allowlist auto-runs tools that are already in your allowlist, including MCP tools. If you want every shell command to keep asking for approval, keep your shell allowlist empty. With an empty shell allowlist, shell commands still ask every time and Cursor skips shell allowlist parsing.";

}
var __wakaru_Df_initialized = false;
export function Df() {
if (__wakaru_Df_initialized) return;
__wakaru_Df_initialized = true;
x(), GKv(), oCh = 0;

}
