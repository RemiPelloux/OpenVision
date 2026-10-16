import { Bji, h_e } from "./A3u.js";
import { De, Pse, _mv, uJe, zv } from "./De_3.js";
import { CCh, K5, KE, L0o, N0o, P0o } from "./ECo.js";
import { Oo, Rl, Se, jn, kAe, si, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ca, la } from "./aiMiscServices.js";
import { Sg, jp } from "./aiService.js";
import { e8e, rtt } from "./asyncOperationRegistry.js";
import { Za, na } from "./authenticationService.js";
import { Yu } from "./browser.ts";
import { lGv, okh } from "./cgh.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Att, uLe } from "./composerEffectiveAllowlistService.js";
import { lb, n0 } from "./composerLogService.js";
import { AA, xC } from "./composerModesServiceTypes.js";
import { GCh } from "./composerToolLookup.js";
import { Hv, rE } from "./composerViews.js";
import { ps } from "./composer_pb.js";
import { i8e } from "./debugLogFileUtils.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { vI } from "./extpath.js";
import { HM } from "./index_191.js";
import { A1 } from "./index_5.ts";
import { Ze } from "./instantiation.js";
import { VMe } from "./internalAgentToolsFileUtils.js";
import { kXd, v1e } from "./mcpConstants.js";
import { l8e, rLe } from "./mcpProviderService.js";
import { eZ } from "./mcpService.js";
import { P1 } from "./mcpServiceTypes.js";
import { K3 } from "./pathUtils.js";
import { ba, kO } from "./path_2.js";
import { uCt, zVt } from "./pendingApprovalRegistry.js";
import { IR, xl } from "./privacy_mode_pb.js";
import { mn, vn } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { N4e } from "./serde.ts";
import { _Ct } from "./shellApprovalMode.js";
import { VCh } from "./smartModeApprovalCardTracking.js";
import { Vn, yn } from "./storage_2.js";
import { dG, kq, ote, pjt, tZ, wq } from "./toolCallHumanReviewService.js";
import { GM, JO, dg, oT } from "./toolCallHumanReviewTypes.js";
import { hjt } from "./toolUtils.js";
import { lMe, nt, pee, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { Jn, ci } from "./workspace.js";
function lQi(e, t, n) {
    const i = new Set, r = t.composerId;
    return uQi(e, t, r, n, i, void 0, !0);
}
function uQi(e, t, n, i, r, s, o) {
    if (r.has(n)) return;
    r.add(n);
    const a = e.getComposerData(t);
    if (!a) return;
    const c = e.getToolFormer(t);
    if (!c) return;
    const l = c.getBubbleIdByToolCallId(i) ?? c.getBubbleByShortToolCallReferenceId(i)?.bubbleId;
    if (l) return {
        composerHandle: t,
        bubbleId: l,
        rootBubbleId: s
    };
    const u = e.getLoadedConversation(t) ?? [], h = rXv(e, t, u, i, r, s, o);
    return h || sXv(e, t, c, a, u, i, r, s, o);
}
function rXv(e, t, n, i, r, s, o) {
    if (n.length === 0) return;
    const a = [];
    for(let c = n.length - 1; c >= 0; c--){
        const l = n[c];
        if (!(l.capabilityType === void 0 && l.text === "")) if (l.capabilityType === ps.TOOL_FORMER) a.push(l);
        else break;
    }
    for (const c of a){
        const l = c.toolFormerData;
        if (!l || l.tool !== nt.TASK_V2) continue;
        const u = l.additionalData?.status;
        if (!cXv(u)) continue;
        const h = o ? c.bubbleId : s, p = l.additionalData?.subagentComposerId, g = p ? e.getHandleIfLoaded(p) : void 0;
        if (p && g) {
            const T = uQi(e, g, p, i, r, h, !1);
            if (T) return T;
        }
        const f = l.additionalData?.composerData;
        if (!f?.composerId) continue;
        const v = l.params?.model, b = Bji(e, t, c.bubbleId, f.composerId, v), y = uQi(e, b, f.composerId, i, r, h, !1);
        if (y) return y;
    }
}
function sXv(e, t, n, i, r, s, o, a, c) {
    let l;
    for (const u of i.subagentComposerIds ?? []){
        if (o.has(u)) continue;
        const h = e.getHandleIfLoaded(u);
        if (!h) {
            o.add(u);
            continue;
        }
        let p = a;
        c && (p = oXv(e, n, h), p === void 0 && (l ??= aXv(r), p = l.get(u)));
        const g = uQi(e, h, u, s, o, p, !1);
        if (g) return g;
    }
}
function oXv(e, t, n) {
    const i = e.getComposerData(n)?.subagentInfo;
    if (!i) return;
    const r = [
        i.toolCallId,
        ...[
            ...i.toolCallIdHistory ?? []
        ].reverse()
    ];
    for (const s of r){
        if (!s) continue;
        const o = t.getBubbleIdByToolCallId(s);
        if (o) return o;
    }
}
function aXv(e) {
    const t = new Map;
    for (const n of e){
        const i = n.toolFormerData;
        if (!i || i.tool !== nt.TASK_V2) continue;
        const r = i.additionalData;
        r?.subagentComposerId && t.set(r.subagentComposerId, n.bubbleId), r?.composerData?.composerId && t.set(r.composerData.composerId, n.bubbleId);
        for (const s of r?.supersededSubagentComposerIds ?? [])t.set(s, n.bubbleId);
    }
    return t;
}
function cXv(e) {
    return e === "pending" || e === "loading" || e === "running";
}
function W0o({ existingReviewStatus: e, smartModeApprovalRequestId: t }) {
    return t !== void 0 && e !== dg.REQUESTED && e !== dg.DONE;
}
function lXv(e) {
    return e.reason === "smartMode" ? e.smartModeApprovalReason : void 0;
}
function uXv(e) {
    return e.reason !== "smartMode";
}
function jCh(e, t) {
    return e?.shouldAutoApproveTool ? e.shouldAutoApproveTool(t) : e?.autoApprove === !0;
}
function dXv({ isPlaywrightTool: e, playwrightProtection: t, blockedByInternalProviderPolicy: n }) {
    return !(e && t) && !n;
}
function hXv({ canAllowlist: e, canAddToAllowlistFromIde: t, toolName: n, serverName: i }) {
    if (!(e !== !0 || !t)) return [
        {
            tool: n,
            server: i
        }
    ];
}
function qCh(e, t) {
    if (e === !0) return t?.filter((n)=>!_mv(n));
}
function zCh({ canAllowlist: e, canAddToAllowlistFromIde: t, candidates: n }) {
    return t ? qCh(e, n) ?? [] : [];
}
function KCh(e) {
    if (e?.status === dg.DONE) {
        if (e.selectedOption === JO.ACCEPT) return {
            type: tZ.ACCEPT
        };
        if (e.selectedOption === JO.SKIP) return {
            type: tZ.SKIP
        };
        if (e.selectedOption === JO.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY) return {
            type: tZ.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
            feedback: e.finalFeedbackText || "",
            bubbleId: e.finalFeedbackBubbleId || ""
        };
        if (e.selectedOption === JO.ACCEPT_AND_ALLOW_FOLDER) return {
            type: tZ.ACCEPT_AND_ALLOW_FOLDER
        };
    }
}
function YCh(e) {
    if (e?.status === dg.DONE) {
        if (e.selectedOption === oT.RUN) return {
            type: wq.RUN
        };
        if (e.selectedOption === oT.SKIP) return {
            type: wq.SKIP
        };
        if (e.selectedOption === oT.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY) return {
            type: wq.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
            feedback: e.finalFeedbackText || "",
            bubbleId: e.finalFeedbackBubbleId || ""
        };
        if (e.selectedOption === oT.ALLOWLIST_COMMANDS) {
            const t = e.appliedAllowlistOptionIds ?? e.selectedAllowlistOptionIds ?? e.defaultAllowlistOptionIds ?? e.candidatesForAllowlist ?? [], n = e.allowlistOptions && e.allowlistOptions.length > 0 ? e.allowlistOptions.filter((i)=>t.includes(i.id)).map((i)=>i.value) : t;
            return {
                type: wq.ALLOWLIST_COMMANDS,
                commands: n
            };
        }
    }
}
function XCh(e) {
    if (e?.status === dg.DONE) {
        if (e.selectedOption === GM.RUN) return {
            type: dG.RUN
        };
        if (e.selectedOption === GM.SKIP) return {
            type: dG.SKIP
        };
        if (e.selectedOption === GM.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY) return {
            type: dG.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY,
            feedback: e.finalFeedbackText || "",
            bubbleId: e.finalFeedbackBubbleId || ""
        };
        if (e.selectedOption === GM.ALLOWLIST_TOOL) return {
            type: dG.ALLOWLIST_TOOL,
            toolName: e.toolName || ""
        };
    }
}
var ZCh, QCh, JCh, e0h, t0h, ACt, dQi;
export { ACt, JCh, KCh, QCh, W0o, XCh, YCh, ZCh, aXv, cXv, dQi, dXv, e0h, hXv, jCh, lQi, lXv, oXv, qCh, rXv, sXv, t0h, uQi, uXv, zCh };
var __wakaru_fjt_initialized = false;
export function fjt() {
if (__wakaru_fjt_initialized) return;
__wakaru_fjt_initialized = true;
"use strict";
x(), A1(), Yu(), si(), Se(), Ze(), Pn(), ote(), Ha(), rE(), ql(), Vn(), HM(), nl(), Sg(), la(), K5(), _Ct(), ci(), vI(), ba(), jn(), hjt(), v1e(), Att(), eZ(), l8e(), GCh(), K3(), i8e(), VMe(), AA(), zVt(), rtt(), Za(), VCh(), IR(), qs(), n0(), ZCh = De.object({
    path: De.string(),
    reason: De.string(),
    isNewFile: De.boolean(),
    diffString: De.string(),
    before: De.string().optional(),
    after: De.string().optional(),
    blockReason: De.enum([
        "outOfWorkspace",
        "protectedConfig",
        "workspaceWrite"
    ]).optional()
}), QCh = De.object({
    path: De.string(),
    reason: De.string().optional()
}), JCh = De.object({
    command: De.string(),
    workingDirectory: De.string().optional(),
    timeout: De.number().optional(),
    reason: De.string().optional(),
    hookSource: De.enum([
        "user",
        "project",
        "enterprise",
        "team"
    ]).optional(),
    isSandboxAvailable: De.boolean().optional(),
    isSandboxEnabled: De.boolean().optional(),
    canAllowlist: De.boolean().optional(),
    notAllowedCommands: De.array(De.string()).optional(),
    suggestedAllowlistEntries: De.array(De.string()).optional(),
    smartModeApprovalReason: De.string().optional(),
    smartModeApprovalRequestId: De.string().optional()
}), e0h = De.object({
    path: De.string()
}), t0h = De.object({
    name: De.string(),
    toolName: De.string(),
    providerIdentifier: De.string(),
    source: De.enum([
        "internal"
    ]).optional(),
    args: De.record(De.string(), De.any()),
    reason: De.string().optional(),
    hookSource: De.enum([
        "user",
        "project",
        "enterprise",
        "team"
    ]).optional(),
    canAllowlist: De.boolean().optional(),
    smartModeApprovalReason: De.string().optional(),
    smartModeApprovalRequestId: De.string().optional()
}), ACt = vn("composerDecisionsService"), dQi = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b){
        super(), this._toolCallHumanReviewService = e, this._reactiveStorageService = t, this._composerViewsService = n, this._composerDataService = i, this._aiService = r, this._analyticsService = s, this._cursorAuthenticationService = o, this._workspaceContextService = a, this._composerModesService = c, this._storageService = l, this._pendingApprovalRegistry = u, this._asyncOperationRegistry = h, this._experimentService = p, this._effectiveAllowlistService = g, this._mcpService = f, this._mcpProviderService = v, this._composerLogService = b, this._editsApprovedElsewhere = new Set;
    }
    getEffectiveMcpAllowlist() {
        return this._effectiveAllowlistService.getEffectiveMcpAllowlist();
    }
    getEffectiveTerminalAllowlist() {
        return this._effectiveAllowlistService.getEffectiveTerminalAllowlist();
    }
    isPrivacyModeEnabled() {
        const e = this._cursorAuthenticationService.granularPrivacyModeRawEnum();
        switch(e){
            case xl.NO_STORAGE:
            case xl.NO_TRAINING:
                return !0;
            case xl.USAGE_DATA_TRAINING_ALLOWED:
            case xl.USAGE_CODEBASE_TRAINING_ALLOWED:
                return !1;
            case xl.UNSPECIFIED:
                return !0;
            default:
                return e;
        }
    }
    getFullPathForAnalytics(e) {
        try {
            return this._workspaceContextService.resolveRelativePath(e).fsPath;
        } catch  {
            return e;
        }
    }
    asMcpBlockReason(e) {
        switch(e){
            case "notInAllowlist":
            case "playwrightProtection":
            case "mcpToolsProtection":
            case "readonlyMode":
            case "hookBlocked":
            case "smartMode":
                return e;
            default:
                return;
        }
    }
    toShellReasonCodeForAnalytics(e, t) {
        const n = e.reason;
        if (typeof n == "string") {
            if (n.includes("team blocklist") || n.includes("In team blocklist")) return "shell.team_blocklisted";
            if (n.includes("Not in team allowlist")) return "shell.not_in_team_allowlist";
            if (n.includes("Not in allowlist")) return "shell.not_allowlisted";
        }
        switch(n){
            case "notInAllowlist":
                return "shell.not_allowlisted";
            case "inBlocklist":
                return "shell.in_blocklist";
            case "notInTeamAllowlist":
                return "shell.not_in_team_allowlist";
            case "deleteProtection":
                return "shell.delete_protection";
            case "readonlyMode":
                return "shell.readonly_mode";
            case "hookBlocked":
                return "shell.blocked_by_hook";
            default:
                break;
        }
        return t && t.length > 0 ? "shell.not_allowlisted" : "shell.needs_approval";
    }
    toMcpReasonCodeForAnalytics(e) {
        switch(e){
            case "notInAllowlist":
                return "mcp.tool_not_allowlisted";
            case "playwrightProtection":
                return "mcp.browser_protection";
            case "mcpToolsProtection":
                return "mcp.tools_protection";
            case "readonlyMode":
                return "mcp.readonly_mode";
            case "hookBlocked":
                return "mcp.blocked_by_hook";
            case "smartMode":
                return "mcp.needs_approval";
            default:
                return e;
        }
    }
    getInvocationId(e) {
        const t = this._composerDataService.getComposerData(e);
        return t?.latestChatGenerationUUID ?? t?.chatGenerationUUID ?? void 0;
    }
    toEditReasonForAnalytics(e) {
        if (e) switch(e.type){
            case "outOfWorkspace":
                return "outOfWorkspace";
            case "cursorIgnore":
                return e.source === "globalIgnore" ? "cursorIgnore_global" : "cursorIgnore_workspace";
            case "otherThreadEdit":
                return "otherThreadEdit";
            case "restrictedFile":
                return "restrictedFile";
            case "adminBlock":
                return "adminBlock";
            default:
                return e;
        }
    }
    toWriteReasonCodeForAnalytics(e) {
        if (!e) return "write.needs_approval";
        switch(e.type){
            case "outOfWorkspace":
                return "write.out_of_workspace";
            case "restrictedFile":
                return "write.restricted_file";
            case "cursorIgnore":
                return "write.cursor_ignore";
            case "adminBlock":
                return "write.admin_block";
            case "otherThreadEdit":
                return "write.needs_approval";
            default:
                return e;
        }
    }
    trackTrajectoryStopped(e) {
        try {
            this._analyticsService.trackEvent("composer.agent_trajectory_stopped", e);
        } catch  {}
    }
    trackSmartModeApprovalCardShown(e, t, n, i) {
        try {
            this._analyticsService.trackEvent("smart_mode.approval_card_shown", {
                composerId: t.composerId,
                invocationID: this.getInvocationId(t),
                toolCallId: n,
                source: e,
                smartModeApprovalRequestId: i
            });
        } catch  {}
    }
    getTerminalBubbleStats(e) {
        try {
            const t = this._composerDataService.getLoadedConversation(e);
            let n = 0, i = 0;
            for (const r of t)if (r.toolFormerData?.tool === nt.RUN_TERMINAL_COMMAND_V2) {
                n++;
                const s = r.toolFormerData.result, o = s?.output ?? s?.outputRaw;
                o && (i += o.length);
            }
            return {
                terminal_bubble_count: n,
                terminal_total_output_chars: i,
                composer_bubble_count: t.length
            };
        } catch  {
            return {
                terminal_bubble_count: 0,
                terminal_total_output_chars: 0,
                composer_bubble_count: 0
            };
        }
    }
    getUserApprovedWriteFiles(e) {
        const t = this._composerDataService.getComposerData(e), n = new Set(t?.userApprovedWriteFiles ?? []);
        if (t?.subagentInfo?.parentComposerId) {
            const i = this._composerDataService.getHandleIfLoaded(t.subagentInfo.parentComposerId);
            if (i) {
                const r = this._composerDataService.getComposerData(i);
                for (const s of r?.userApprovedWriteFiles ?? [])n.add(s);
            }
        }
        return n;
    }
    getUserApprovedWriteDirectories(e) {
        const t = this._composerDataService.getComposerData(e), n = new Set(t?.userApprovedWriteDirectories ?? []);
        if (t?.subagentInfo?.parentComposerId) {
            const i = this._composerDataService.getHandleIfLoaded(t.subagentInfo.parentComposerId);
            if (i) {
                const r = this._composerDataService.getComposerData(i);
                for (const s of r?.userApprovedWriteDirectories ?? [])n.add(s);
            }
        }
        return n;
    }
    normalizeFilePath(e) {
        try {
            return this._workspaceContextService.resolveRelativePath(e).fsPath;
        } catch  {
            return e;
        }
    }
    async getToolContextOrWait(e, t, n) {
        const i = e.composerId;
        let r = lQi(this._composerDataService, e, t);
        if (r || (await this._pendingApprovalRegistry.waitForBubbleCreation(i, t), r = lQi(this._composerDataService, e, t)), !r) throw new Error(`[ComposerDecisionsService] Could not find bubble for toolCallId: ${t} after waiting`);
        if (n?.aborted) throw new Rl;
        return r;
    }
    async handleApprovalRequest(e, t, n) {
        if (t.operation.type === "write" || t.operation.type === "delete") {
            const i = t.operation.details;
            if (i?.path && uJe(i.path)) return {
                approved: !0
            };
        }
        switch(t.operation.type){
            case "shell":
                {
                    const i = JCh.parse(t.operation.details);
                    return this.handleShellOperation(e, t.toolCallId, i, n);
                }
            case "write":
                {
                    const i = ZCh.parse(t.operation.details);
                    return this.handleWriteOperation(e, t.toolCallId, i, n);
                }
            case "read":
                {
                    const i = QCh.parse(t.operation.details);
                    return this.handleReadOperation(e, t.toolCallId, i, n);
                }
            case "delete":
                {
                    const i = e0h.parse(t.operation.details);
                    return this.handleDeleteOperation(e, t.toolCallId, i, n);
                }
            case "mcp":
                {
                    const i = t0h.parse(t.operation.details);
                    return this.handleMcpOperation(e, t.toolCallId, i, n);
                }
            default:
                return {
                    approved: !1,
                    reason: "Unknown operation type"
                };
        }
    }
    settleApprovalRequest(e, t, n) {
        n.approved && n.allowlistEntries !== void 0 && n.allowlistEntries.length > 0 && this.addAllowlistEntries(t.operation.type, n.allowlistEntries);
        const i = t.toolCallId, r = n.approved, s = lQi(this._composerDataService, e, i);
        if (s === void 0) return;
        const o = this._toolCallHumanReviewService.getReviewModelForBubble(s.composerHandle, s.bubbleId);
        if (o !== void 0) {
            if (o.getHumanReviewData()?.status !== dg.REQUESTED) return;
            r ? (o instanceof pjt && this._editsApprovedElsewhere.add(i), o.completeWithRunAction()) : o.reset();
            return;
        }
        const a = this._composerDataService.getToolFormer(s.composerHandle);
        a?.getPendingDecisionBubbleIdForToolCall(i) !== void 0 && (r ? a.acceptToolCall(i) : a.rejectToolCall(i));
    }
    addAllowlistEntries(e, t) {
        e === "shell" && this._effectiveAllowlistService.canAddToAllowlistFromIde("terminal") ? this._reactiveStorageService.setApplicationUserPersistentStorage("composerState", "yoloCommandAllowlist", (n)=>[
                ...new Set([
                    ...n ?? [],
                    ...t
                ])
            ]) : e === "mcp" && this._effectiveAllowlistService.canAddToAllowlistFromIde("mcp") && this._reactiveStorageService.setApplicationUserPersistentStorage("composerState", "mcpAllowedTools", (n)=>t.reduce((i, r)=>{
                const s = CCh(r);
                return s === null ? i : N0o(s.toolName, s.serverId, i);
            }, n ?? []));
    }
    getMcpToolApprovalForAppCall({ toolName: e, serverIdentifier: t, composerId: n }) {
        const i = KE();
        if (this._composerModesService.getComposerFullAutoRun(n)) return {
            approved: !0
        };
        const s = this._composerModesService.getComposerAutoRun(n), o = this.getEffectiveMcpAllowlist();
        return s && L0o({
            serverId: t,
            toolName: e,
            allowlist: o
        }) ? {
            approved: !0
        } : {
            approved: !1,
            reason: "notInAllowlist"
        };
    }
    async handleShellOperation(e, t, n, i) {
        let r;
        try {
            r = await this.getToolContextOrWait(e, t, i);
        } catch (y) {
            return {
                approved: !1,
                reason: `Failed to find tool call context: ${y instanceof Error ? y.message : String(y)}`
            };
        }
        const s = this._composerDataService.getToolFormer(r.composerHandle);
        if (!s) throw new Error("[ComposerDecisionsService] ToolFormer not found for composerHandle");
        const o = this._composerDataService.getComposerData(r.composerHandle);
        if (!o) throw new Error("[ComposerDecisionsService] Composer not found for composerHandle");
        let a;
        o.chatGenerationUUID ? a = this._aiService.streamingAbortControllers.get(o.chatGenerationUUID) ?? new AbortController : a = new AbortController;
        const c = this._effectiveAllowlistService.canAddToAllowlistFromIde("terminal"), l = zCh({
            canAllowlist: n.canAllowlist,
            canAddToAllowlistFromIde: c,
            candidates: n.notAllowedCommands
        }), u = zCh({
            canAllowlist: n.canAllowlist,
            canAddToAllowlistFromIde: c,
            candidates: n.suggestedAllowlistEntries
        }), h = qCh(n.canAllowlist, n.notAllowedCommands), p = this.toShellReasonCodeForAnalytics(n, h), g = p === "shell.blocked_by_hook" || p === "shell.readonly_mode" || p === "shell.in_blocklist" || p === "shell.team_blocklisted" ? "blocked_by_policy" : "needs_user_approval", f = KE(), v = this.getTerminalBubbleStats(r.composerHandle);
        this.trackTrajectoryStopped({
            composerId: r.composerHandle.composerId,
            invocationID: this.getInvocationId(r.composerHandle),
            toolCallId: t,
            stop_category: g,
            stop_source: "shell",
            reason_code: p,
            hook_source: n.hookSource,
            shell_approval_mode: okh(f, n.isSandboxEnabled, this._composerModesService.getComposerSmartModeAutoRun(r.composerHandle.composerId)),
            shell_is_admin_controlled: f.isAdminControlled,
            shell_can_allowlist: n.canAllowlist,
            shell_not_allowed_commands_count: h?.length,
            shell_is_sandbox_available: n.isSandboxAvailable,
            shell_is_sandbox_enabled: n.isSandboxEnabled,
            ...v
        }), s.setBubbleData(r.bubbleId, {
            additionalData: {
                status: "pending",
                startedAtMs: void 0,
                blockReason: n.reason,
                smartModeApprovalReason: n.smartModeApprovalReason,
                smartModeApprovalRequestId: n.smartModeApprovalRequestId
            }
        });
        const b = await this.runTerminalReviewMode(s, r.bubbleId, r.composerHandle, a, t, {
            candidates: l,
            suggestedEntries: u
        }, n.smartModeApprovalRequestId);
        switch(b.type){
            case wq.RUN:
                return s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        startedAtMs: void 0,
                        status: "loading"
                    }
                }), {
                    approved: !0
                };
            case wq.SKIP:
                return s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        status: "skipped"
                    }
                }), {
                    approved: !1,
                    reason: "User chose to skip"
                };
            case wq.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY:
                return s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        status: "rejected"
                    }
                }), {
                    approved: !1,
                    reason: b.feedback
                };
            case wq.ALLOWLIST_COMMANDS:
                return this.addAllowlistEntries("shell", b.commands), s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        startedAtMs: void 0,
                        status: "loading"
                    }
                }), {
                    approved: !0,
                    allowlistEntries: b.commands
                };
            case wq.NONE:
            default:
                return s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        status: "cancelled"
                    }
                }), {
                    approved: !1,
                    reason: "Review cancelled or failed"
                };
        }
    }
    async handleReadOperation(e, t, n, i) {
        let r;
        try {
            r = await this.getToolContextOrWait(e, t, i);
        } catch (u) {
            return {
                approved: !1,
                reason: `Failed to find tool call context: ${u instanceof Error ? u.message : String(u)}`
            };
        }
        const s = this._composerDataService.getToolFormer(r.composerHandle);
        if (!s) throw new Error("[ComposerDecisionsService] ToolFormer not found for composerHandle");
        const o = s.getBubbleData(r.bubbleId), a = o?.tool, c = {
            approved: !1,
            reason: `Expected a content-read tool call for ${n.path}`
        };
        let l;
        switch(a){
            case nt.READ_FILE:
            case nt.READ_FILE_V2:
                l = a;
                break;
            case nt.UNSPECIFIED:
                if (o?.toolCall?.tool.case === "piReadToolCall") {
                    l = nt.READ_FILE_V2;
                    break;
                }
                return c;
            default:
                return c;
        }
        return n.reason !== void 0 && s.setBubbleData(r.bubbleId, {
            additionalData: {
                blockReason: n.reason
            }
        }), this.awaitPendingDecision(s, {
            bubbleId: r.bubbleId,
            tool: l,
            toolCallId: t,
            rejectionReason: "User rejected the read operation"
        });
    }
    awaitPendingDecision(e, t) {
        return new Promise((n)=>{
            e.addPendingDecision(t.bubbleId, t.tool, t.toolCallId, (i)=>{
                n(i ? {
                    approved: !0
                } : {
                    approved: !1,
                    reason: t.rejectionReason
                });
            }, !0);
        });
    }
    async handleDeleteOperation(e, t, n, i) {
        const r = KE();
        let s;
        try {
            s = await this.getToolContextOrWait(e, t, i);
        } catch (c) {
            return {
                approved: !1,
                reason: `Failed to find tool call context: ${c instanceof Error ? c.message : String(c)}`
            };
        }
        const o = this._composerDataService.getToolFormer(s.composerHandle);
        if (!o) throw new Error("[ComposerDecisionsService] ToolFormer not found for composerHandle");
        const a = h_e(this._workspaceContextService, n.path);
        return lGv(a) ? (o.setBubbleData(s.bubbleId, {
            userDecision: "accepted"
        }), {
            approved: !0
        }) : o.shouldAutoRun_runEverythingMode() ? (o.setBubbleData(s.bubbleId, {
            userDecision: "accepted"
        }), {
            approved: !0
        }) : r.deleteFileProtection ? (this.trackTrajectoryStopped({
            composerId: s.composerHandle.composerId,
            invocationID: this.getInvocationId(s.composerHandle),
            toolCallId: t,
            stop_category: "needs_user_approval",
            stop_source: "delete",
            reason_code: "delete.needs_approval",
            delete_file_protection_enabled: r.deleteFileProtection
        }), this.awaitPendingDecision(o, {
            bubbleId: s.bubbleId,
            tool: nt.DELETE_FILE,
            toolCallId: t,
            rejectionReason: "User rejected the delete operation"
        })) : (o.setBubbleData(s.bubbleId, {
            userDecision: "accepted"
        }), {
            approved: !0
        });
    }
    async handleWriteOperation(e, t, n, i) {
        let r;
        try {
            r = await this.getToolContextOrWait(e, t, i);
        } catch (E) {
            return {
                approved: !1,
                reason: `Failed to find tool call context: ${E instanceof Error ? E.message : String(E)}`
            };
        }
        const s = this._composerDataService.getToolFormer(r.composerHandle);
        if (!s) throw new Error("[ComposerDecisionsService] ToolFormer not found for composerHandle");
        const o = this._composerDataService.getComposerData(r.composerHandle);
        if (!o) throw new Error("[ComposerDecisionsService] Composer not found for composerHandle");
        let a;
        o.chatGenerationUUID ? a = this._aiService.streamingAbortControllers.get(o.chatGenerationUUID) ?? new AbortController : a = new AbortController;
        const c = KE(), l = n.blockReason;
        if (l === "outOfWorkspace" && !c.outsideWorkspaceProtection) return s.setBubbleData(r.bubbleId, {
            userDecision: "accepted"
        }), {
            approved: !0
        };
        if (l) {
            const E = this.normalizeFilePath(n.path);
            if (this.getUserApprovedWriteFiles(r.composerHandle).has(E)) return s.setBubbleData(r.bubbleId, {
                userDecision: "accepted"
            }), {
                approved: !0
            };
            if (l === "outOfWorkspace" && [
                ...this.getUserApprovedWriteDirectories(r.composerHandle)
            ].some((P)=>kAe(E, P, Oo))) return s.setBubbleData(r.bubbleId, {
                userDecision: "accepted"
            }), {
                approved: !0
            };
        }
        const u = this._workspaceContextService.resolveRelativePath(n.path), h = n.before, p = n.after;
        let g;
        if (h !== void 0) {
            const E = N4e.serialize(h);
            g = `composer.content.${zv(await Pse(E))}`, await this._storageService.cursorDiskKVGet(g) === void 0 && await this._storageService.cursorDiskKVSet(g, h);
        }
        let f;
        if (p !== void 0) {
            const E = N4e.serialize(p);
            f = `composer.content.${zv(await Pse(E))}`, await this._storageService.cursorDiskKVGet(f) === void 0 && await this._storageService.cursorDiskKVSet(f, p);
        }
        const v = (()=>{
            if (l) switch(l){
                case "outOfWorkspace":
                    return {
                        type: "outOfWorkspace"
                    };
                case "protectedConfig":
                    return {
                        type: "restrictedFile"
                    };
                case "workspaceWrite":
                    return;
                default:
                    {
                        const E = l;
                        return;
                    }
            }
        })();
        if (s.setBubbleData(r.bubbleId, {
            params: new pee({
                relativeWorkspacePath: n.path,
                noCodeblock: !0,
                streamingContent: p
            }),
            result: new lMe({
                beforeContentId: g,
                afterContentId: f ?? ""
            }),
            additionalData: {
                reasonForAcceptReject: v,
                blockReason: l,
                isNewFile: n.isNewFile
            }
        }), i?.aborted) return {
            approved: !1,
            reason: "Canceled"
        };
        const b = (()=>{
            switch(l){
                case "outOfWorkspace":
                    return "write.out_of_workspace";
                case "protectedConfig":
                    return "write.protected_config";
                default:
                    return this.toWriteReasonCodeForAnalytics(v);
            }
        })(), y = b === "write.cursor_ignore" || b === "write.admin_block" ? "blocked_by_policy" : "needs_user_approval";
        this.trackTrajectoryStopped({
            composerId: r.composerHandle.composerId,
            invocationID: this.getInvocationId(r.composerHandle),
            toolCallId: t,
            blocked_file_path: this.isPrivacyModeEnabled() || !l ? void 0 : this.getFullPathForAnalytics(n.path),
            stop_category: y,
            stop_source: "write",
            reason_code: b,
            edit_reason: this.toEditReasonForAnalytics(v) ?? (l ? "unknown" : void 0)
        });
        const T = await this.runEditReviewMode(s, r.bubbleId, r.composerHandle, u, a, t);
        if (T.type === tZ.ACCEPT) {
            const E = this._editsApprovedElsewhere.delete(t);
            if (l && !E) {
                const A = this.normalizeFilePath(n.path);
                this._composerDataService.updateComposerDataSetStore(r.composerHandle, (R)=>{
                    R("userApprovedWriteFiles", (D = [])=>D.includes(A) ? D : [
                            ...D,
                            A
                        ]);
                });
            }
            return {
                approved: !0
            };
        } else {
            if (T.type === tZ.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY) return {
                approved: !1,
                reason: T.feedback
            };
            if (T.type === tZ.SKIP) return {
                approved: !1,
                reason: "User chose to skip"
            };
            if (T.type === tZ.ACCEPT_AND_ALLOW_FOLDER) {
                const E = this.normalizeFilePath(n.path), A = kO(E);
                return this._composerDataService.updateComposerDataSetStore(r.composerHandle, (R)=>{
                    R("userApprovedWriteDirectories", (D = [])=>D.includes(A) ? D : [
                            ...D,
                            A
                        ]);
                }), {
                    approved: !0
                };
            }
        }
        return {
            approved: !1,
            reason: "Review cancelled or rejected"
        };
    }
    async runEditReviewMode(e, t, n, i, r, s) {
        let o = this._toolCallHumanReviewService.getEditReviewModelForBubble(n, t);
        if (!o) {
            const h = e.getBubbleData(t);
            if (h) {
                const p = h.tool === nt.EDIT_FILE || h.tool === nt.EDIT_FILE_V2;
                (!h.tool || p) && (h.tool || e.setBubbleData(t, {
                    tool: nt.EDIT_FILE_V2
                }), o = this._toolCallHumanReviewService.getEditReviewModelForBubble(n, t));
            }
        }
        if (!o) return Promise.resolve({
            type: tZ.NONE
        });
        const a = n.composerId;
        this._composerViewsService.focus(a), r.signal.addEventListener("abort", ()=>{
            o.reset();
        }, {
            once: !0
        });
        const c = KCh(o.getHumanReviewData());
        if (c) return c;
        o.setStatus(dg.REQUESTED);
        const l = e.addPendingDecision(t, nt.EDIT_FILE_V2, s, ()=>{}, !0), u = (h, p, g)=>{
            if (h === void 0 || h.status === dg.NONE) {
                p.dispose(), l(), g({
                    type: tZ.NONE
                });
                return;
            }
            h.status === dg.DONE && (p.dispose(), l(), g(KCh(h) ?? {
                type: tZ.NONE
            }));
        };
        return new Promise((h)=>{
            const p = this._reactiveStorageService.onChangeEffectManuallyDisposed({
                deps: [
                    ()=>o.getHumanReviewData()
                ],
                onChange: ({ deps: g })=>{
                    try {
                        u(g[0], p, h);
                    } catch (f) {
                        this._composerLogService.error("Error during processing review mode", f), p.dispose(), h({
                            type: tZ.NONE
                        });
                    }
                }
            });
            r.signal.addEventListener("abort", ()=>{
                h({
                    type: tZ.NONE
                });
            }, {
                once: !0
            });
        });
    }
    async handleMcpOperation(e, t, n, i) {
        let r;
        try {
            r = await this.getToolContextOrWait(e, t, i);
        } catch (H) {
            return {
                approved: !1,
                reason: `Failed to find tool call context: ${H instanceof Error ? H.message : String(H)}`
            };
        }
        const s = this._composerDataService.getToolFormer(r.composerHandle);
        if (!s) throw new Error("[ComposerDecisionsService] ToolFormer not found for composerHandle");
        const o = this._composerDataService.getComposerData(r.composerHandle);
        if (!o) throw new Error("[ComposerDecisionsService] Composer not found for composerHandle");
        const a = n.providerIdentifier, c = this._mcpService.mcpAllowlistLogger;
        c.info(`[handleMcpOperation] Tool="${n.toolName}", server="${a}", canAllowlist=${n.canAllowlist}, reason="${n.reason ?? "none"}"`);
        const l = uXv(n), u = KE(), h = kXd.includes(a), p = this._mcpProviderService.getMcpProvider(a);
        if (n.source === "internal" && jCh(p, n.toolName)) return s.setBubbleData(r.bubbleId, {
            userDecision: "accepted",
            additionalData: {
                status: "running"
            }
        }), {
            approved: !0
        };
        const g = this._composerModesService.getComposerFullAutoRun(r.composerHandle.composerId), f = n.source === "internal" && !jCh(p, n.toolName), v = dXv({
            isPlaywrightTool: h,
            playwrightProtection: u.playwrightProtection,
            blockedByInternalProviderPolicy: f
        });
        if (l && g && !h && !f) return s.setBubbleData(r.bubbleId, {
            userDecision: "accepted",
            additionalData: {
                status: "running"
            }
        }), {
            approved: !0
        };
        if (l && h && !u.playwrightProtection) return s.setBubbleData(r.bubbleId, {
            userDecision: "accepted",
            additionalData: {
                status: "running"
            }
        }), {
            approved: !0
        };
        const b = this._composerModesService.getComposerAutoRun(r.composerHandle.composerId), y = this.getEffectiveMcpAllowlist(), T = b && L0o({
            serverId: a,
            toolName: n.toolName,
            allowlist: y
        }), E = this.asMcpBlockReason(n.reason);
        if (T && !f && (l && (!E || E === "notInAllowlist") || E === "smartMode")) return s.setBubbleData(r.bubbleId, {
            userDecision: "accepted",
            additionalData: {
                status: "running"
            }
        }), {
            approved: !0
        };
        let D;
        o.chatGenerationUUID ? D = this._aiService.streamingAbortControllers.get(o.chatGenerationUUID) ?? new AbortController : D = new AbortController;
        const P = hXv({
            canAllowlist: n.canAllowlist,
            canAddToAllowlistFromIde: this._effectiveAllowlistService.canAddToAllowlistFromIde("mcp"),
            toolName: n.toolName,
            serverName: a
        });
        let N;
        E ? N = E : h && u.playwrightProtection ? N = "playwrightProtection" : n.canAllowlist ? N = "notInAllowlist" : N = "mcpToolsProtection", s.setBubbleData(r.bubbleId, {
            additionalData: {
                status: "pending",
                blockReason: N,
                smartModeApprovalReason: lXv(n),
                smartModeApprovalRequestId: n.smartModeApprovalRequestId,
                canAutoApproveInRunEverything: v
            }
        });
        const O = N === "hookBlocked" || N === "readonlyMode" ? "blocked_by_policy" : "needs_user_approval";
        this.trackTrajectoryStopped({
            composerId: r.composerHandle.composerId,
            invocationID: this.getInvocationId(r.composerHandle),
            toolCallId: t,
            stop_category: O,
            stop_source: "mcp",
            reason_code: N ? this.toMcpReasonCodeForAnalytics(N) : "mcp.needs_approval",
            hook_source: n.hookSource,
            mcp_can_allowlist: n.canAllowlist,
            mcp_is_playwright_tool: h,
            mcp_playwright_protection_enabled: u.playwrightProtection
        });
        const F = await this.runMCPReviewMode(s, r.bubbleId, r.composerHandle, D, P, t, n.toolName, a, n.smartModeApprovalRequestId);
        switch(F.type){
            case dG.RUN:
                return s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        status: "running"
                    }
                }), {
                    approved: !0
                };
            case dG.SKIP:
                return s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        status: "skipped"
                    }
                }), {
                    approved: !1,
                    reason: "User chose to skip"
                };
            case dG.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY:
                return s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        status: "rejected"
                    }
                }), {
                    approved: !1,
                    reason: F.feedback
                };
            case dG.ALLOWLIST_TOOL:
                {
                    c.info(`[handleMcpOperation] User chose ALLOWLIST_TOOL. Adding "${a}:${n.toolName}" to allowlist. Current allowlist: ${JSON.stringify(this._reactiveStorageService.applicationUserPersistentStorage.composerState.mcpAllowedTools ?? [])}`), this._reactiveStorageService.setApplicationUserPersistentStorage("composerState", "mcpAllowedTools", ($)=>N0o(n.toolName, a, $ ?? [])), s.setBubbleData(r.bubbleId, {
                        additionalData: {
                            status: "running"
                        }
                    });
                    const H = P0o(a, n.toolName);
                    return H === null ? {
                        approved: !0
                    } : {
                        approved: !0,
                        allowlistEntries: [
                            H
                        ]
                    };
                }
            case dG.NONE:
            default:
                return s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        status: "cancelled"
                    }
                }), {
                    approved: !1,
                    reason: "Review cancelled or failed"
                };
        }
    }
    async runTerminalReviewMode(e, t, n, i, r, s, o) {
        const a = this._toolCallHumanReviewService.getTerminalReviewModelForBubble(n, t);
        if (!a) return {
            type: wq.NONE
        };
        a.setAllowlistCandidates({
            candidates: s.candidates,
            suggestedEntries: s.suggestedEntries
        }), this._composerViewsService.triggerScrollToBottom(n), i.signal.addEventListener("abort", ()=>{
            a.reset();
        }, {
            once: !0
        });
        const c = a.getHumanReviewData(), l = YCh(c);
        if (l) return l;
        const u = n.composerId;
        this._asyncOperationRegistry.enter(u, "terminal_user_approval"), W0o({
            existingReviewStatus: c?.status,
            smartModeApprovalRequestId: o
        }) && this.trackSmartModeApprovalCardShown("shell", n, r, o), a.setStatus(dg.REQUESTED);
        const h = e.addPendingDecision(t, nt.RUN_TERMINAL_COMMAND_V2, r, ()=>{}, !0), p = (g, f, v)=>{
            g === void 0 ? (f.dispose(), h()) : g.status === dg.NONE ? (f.dispose(), h(), v({
                type: wq.NONE
            })) : g.status === dg.DONE && (f.dispose(), v(YCh(g) ?? {
                type: wq.NONE
            }), h());
        };
        try {
            return await new Promise((g)=>{
                const f = this._reactiveStorageService.onChangeEffectManuallyDisposed({
                    deps: [
                        ()=>a.getHumanReviewData()
                    ],
                    onChange: ({ deps: v })=>{
                        try {
                            p(v[0], f, g);
                        } catch (b) {
                            this._composerLogService.error("Error during processing of terminal review mode", b), f.dispose(), g({
                                type: wq.NONE
                            });
                        }
                    }
                });
                i.signal.addEventListener("abort", ()=>{
                    g({
                        type: wq.NONE
                    });
                }, {
                    once: !0
                });
            });
        } finally{
            this._asyncOperationRegistry.exit(u, "terminal_user_approval");
        }
    }
    async runMCPReviewMode(e, t, n, i, r, s, o, a, c) {
        const l = this._toolCallHumanReviewService.getMCPReviewModelForBubble(n, t);
        if (!l) return {
            type: dG.NONE
        };
        l.updateReviewData({
            candidatesForAllowlist: r ?? [],
            toolName: o,
            serverId: a
        }), this._composerViewsService.triggerScrollToBottom(n), i.signal.addEventListener("abort", ()=>{
            l.reset();
        }, {
            once: !0
        });
        const u = l.getHumanReviewData(), h = XCh(u);
        if (h) return h;
        const p = n.composerId;
        this._asyncOperationRegistry.enter(p, "mcp_user_approval"), W0o({
            existingReviewStatus: u?.status,
            smartModeApprovalRequestId: c
        }) && this.trackSmartModeApprovalCardShown("mcp", n, s, c), l.setStatus(dg.REQUESTED);
        const g = e.addPendingDecision(t, e.getBubbleData(t)?.tool ?? nt.MCP, s, ()=>{}, !0), f = (v, b, y, T)=>{
            v === void 0 ? (y.dispose(), g()) : v.status === dg.NONE ? (y.dispose(), g(), T({
                type: dG.NONE
            })) : v.status === dg.DONE ? (y.dispose(), T(XCh(v) ?? {
                type: dG.NONE
            }), g()) : v.status === dg.REQUESTED && L0o({
                serverId: a,
                toolName: o,
                allowlist: b
            }) && (y.dispose(), g(), l.setSelectedOption(GM.RUN), l.setStatus(dg.DONE), T({
                type: dG.RUN
            }));
        };
        try {
            return await new Promise((v)=>{
                const b = this._reactiveStorageService.onChangeEffectManuallyDisposed({
                    deps: [
                        ()=>l.getHumanReviewData(),
                        ()=>this._reactiveStorageService.applicationUserPersistentStorage.composerState.mcpAllowedTools ?? []
                    ],
                    onChange: ({ deps: y })=>{
                        try {
                            const T = this.getEffectiveMcpAllowlist();
                            f(y[0], T, b, v);
                        } catch (T) {
                            this._composerLogService.error("Error during processing of MCP review mode", T), b.dispose(), v({
                                type: dG.NONE
                            });
                        }
                    }
                });
                i.signal.addEventListener("abort", ()=>{
                    v({
                        type: dG.NONE
                    });
                }, {
                    once: !0
                });
            });
        } finally{
            this._asyncOperationRegistry.exit(p, "mcp_user_approval");
        }
    }
}, dQi = ie([
    C(0, kq),
    C(1, Do),
    C(2, Hv),
    C(3, Zs),
    C(4, jp),
    C(5, ca),
    C(6, na),
    C(7, Jn),
    C(8, xC),
    C(9, yn),
    C(10, uCt),
    C(11, e8e),
    C(12, Kr),
    C(13, uLe),
    C(14, P1),
    C(15, rLe),
    C(16, lb)
], dQi), mn(ACt, dQi, 1);

}
