import { Rdk, yag } from "./Aeg.js";
import { Di, Ei, Hc, Qe, c$e, st, xa } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Bal, Fal, Hcg, Oal, S$, T2 } from "./Sol.js";
import { Uss, __k, cug, dug, f_k, g_k, hug, lug, pug, uug, v_k, zal } from "./Ycg.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { Dc, jl } from "./aiService.js";
import { fTt, sat } from "./asyncOperationRegistry.js";
import { Rs, ss } from "./authenticationService.js";
import { kl } from "./browser.ts";
import { Pl, no } from "./composerDataServiceTypes.js";
import { jze, qTt } from "./composerEffectiveAllowlistService.js";
import { iI, w1 } from "./composerLogService.js";
import { uk, xE } from "./composerModesServiceTypes.js";
import { oug } from "./composerToolLookup.js";
import { Bb, Ux } from "./composerViews.js";
import { Cze } from "./debugLogFileUtils.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { pP } from "./extpath.js";
import { iv } from "./index_16.js";
import { OT } from "./index_5.ts";
import { It } from "./instantiation.js";
import { uqe } from "./internalAgentToolsFileUtils.js";
import { $v, Kst, ppe } from "./ipa.js";
import { A4m, CCe } from "./mcpConstants.js";
import { QPe, zCe } from "./mcpProviderService.js";
import { gV } from "./mcpService.js";
import { N0 } from "./mcpServiceTypes.js";
import { MB } from "./pathUtils.js";
import { Ul, g4 } from "./path_2.js";
import { G4e, Nze } from "./pendingApprovalRegistry.js";
import { au, bE } from "./privacy_mode_pb.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { zst } from "./serde.ts";
import { qzt } from "./shellApprovalMode.js";
import { aug } from "./smartModeApprovalCardTracking.js";
import { Zi, ki } from "./storage_2.js";
import { Eie, HJ, Tle, WJ, fV, pAn } from "./toolCallHumanReviewService.js";
import { Cv, OO } from "./toolCallHumanReviewTypes.js";
import { dAn } from "./toolUtils.js";
import { $de, Ct, N$e, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { Y6e } from "./yBp.js";
import { ze } from "./ze.js";
var mug, gug, fug, vug, _ug, tVt, $ss;
export { $ss, _ug, fug, gug, mug, tVt, vug };
var __wakaru_fAn_initialized = false;
export function fAn() {
if (__wakaru_fAn_initialized) return;
__wakaru_fAn_initialized = true;
"use strict";
E(), OT(), kl(), Ei(), Qe(), It(), Rn(), WJ(), el(), Ux(), Pu(), Zi(), iv(), Pl(), Dc(), Ss(), S$(), qzt(), Sr(), pP(), Ul(), Di(), dAn(), CCe(), qTt(), gV(), QPe(), oug(), MB(), Cze(), uqe(), xE(), Nze(), fTt(), Rs(), aug(), bE(), _s(), iI(), mug = ze.object({
    path: ze.string(),
    reason: ze.string(),
    isNewFile: ze.boolean(),
    diffString: ze.string(),
    before: ze.string().optional(),
    after: ze.string().optional(),
    blockReason: ze.enum([
        "outOfWorkspace",
        "protectedConfig",
        "workspaceWrite"
    ]).optional()
}), gug = ze.object({
    path: ze.string(),
    reason: ze.string().optional()
}), fug = ze.object({
    command: ze.string(),
    workingDirectory: ze.string().optional(),
    timeout: ze.number().optional(),
    reason: ze.string().optional(),
    hookSource: ze.enum([
        "user",
        "project",
        "enterprise",
        "team"
    ]).optional(),
    isSandboxAvailable: ze.boolean().optional(),
    isSandboxEnabled: ze.boolean().optional(),
    canAllowlist: ze.boolean().optional(),
    notAllowedCommands: ze.array(ze.string()).optional(),
    suggestedAllowlistEntries: ze.array(ze.string()).optional(),
    smartModeApprovalReason: ze.string().optional(),
    smartModeApprovalRequestId: ze.string().optional()
}), vug = ze.object({
    path: ze.string()
}), _ug = ze.object({
    name: ze.string(),
    toolName: ze.string(),
    providerIdentifier: ze.string(),
    source: ze.enum([
        "internal"
    ]).optional(),
    args: ze.record(ze.string(), ze.any()),
    reason: ze.string().optional(),
    hookSource: ze.enum([
        "user",
        "project",
        "enterprise",
        "team"
    ]).optional(),
    canAllowlist: ze.boolean().optional(),
    smartModeApprovalReason: ze.string().optional(),
    smartModeApprovalRequestId: ze.string().optional()
}), tVt = jn("composerDecisionsService"), $ss = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f, _){
        super(), this._toolCallHumanReviewService = t, this._reactiveStorageService = e, this._composerViewsService = n, this._composerDataService = i, this._aiService = r, this._analyticsService = s, this._cursorAuthenticationService = o, this._workspaceContextService = a, this._composerModesService = l, this._storageService = c, this._pendingApprovalRegistry = u, this._asyncOperationRegistry = d, this._experimentService = h, this._effectiveAllowlistService = p, this._mcpService = g, this._mcpProviderService = f, this._composerLogService = _, this._editsApprovedElsewhere = new Set;
    }
    getEffectiveMcpAllowlist() {
        return this._effectiveAllowlistService.getEffectiveMcpAllowlist();
    }
    getEffectiveTerminalAllowlist() {
        return this._effectiveAllowlistService.getEffectiveTerminalAllowlist();
    }
    isPrivacyModeEnabled() {
        const t = this._cursorAuthenticationService.granularPrivacyModeRawEnum();
        switch(t){
            case au.NO_STORAGE:
            case au.NO_TRAINING:
                return !0;
            case au.USAGE_DATA_TRAINING_ALLOWED:
            case au.USAGE_CODEBASE_TRAINING_ALLOWED:
                return !1;
            case au.UNSPECIFIED:
                return !0;
            default:
                return t;
        }
    }
    getFullPathForAnalytics(t) {
        try {
            return this._workspaceContextService.resolveRelativePath(t).fsPath;
        } catch  {
            return t;
        }
    }
    asMcpBlockReason(t) {
        switch(t){
            case "notInAllowlist":
            case "playwrightProtection":
            case "mcpToolsProtection":
            case "readonlyMode":
            case "hookBlocked":
            case "smartMode":
                return t;
            default:
                return;
        }
    }
    toShellReasonCodeForAnalytics(t, e) {
        const n = t.reason;
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
        return e && e.length > 0 ? "shell.not_allowlisted" : "shell.needs_approval";
    }
    toMcpReasonCodeForAnalytics(t) {
        switch(t){
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
                return t;
        }
    }
    getInvocationId(t) {
        const e = this._composerDataService.getComposerData(t);
        return e?.latestChatGenerationUUID ?? e?.chatGenerationUUID ?? void 0;
    }
    toEditReasonForAnalytics(t) {
        if (t) switch(t.type){
            case "outOfWorkspace":
                return "outOfWorkspace";
            case "cursorIgnore":
                return t.source === "globalIgnore" ? "cursorIgnore_global" : "cursorIgnore_workspace";
            case "otherThreadEdit":
                return "otherThreadEdit";
            case "restrictedFile":
                return "restrictedFile";
            case "adminBlock":
                return "adminBlock";
            default:
                return t;
        }
    }
    toWriteReasonCodeForAnalytics(t) {
        if (!t) return "write.needs_approval";
        switch(t.type){
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
                return t;
        }
    }
    trackTrajectoryStopped(t) {
        try {
            this._analyticsService.trackEvent("composer.agent_trajectory_stopped", t);
        } catch  {}
    }
    trackSmartModeApprovalCardShown(t, e, n, i) {
        try {
            this._analyticsService.trackEvent("smart_mode.approval_card_shown", {
                composerId: e.composerId,
                invocationID: this.getInvocationId(e),
                toolCallId: n,
                source: t,
                smartModeApprovalRequestId: i
            });
        } catch  {}
    }
    getTerminalBubbleStats(t) {
        try {
            const e = this._composerDataService.getLoadedConversation(t);
            let n = 0, i = 0;
            for (const r of e)if (r.toolFormerData?.tool === Ct.RUN_TERMINAL_COMMAND_V2) {
                n++;
                const s = r.toolFormerData.result, o = s?.output ?? s?.outputRaw;
                o && (i += o.length);
            }
            return {
                terminal_bubble_count: n,
                terminal_total_output_chars: i,
                composer_bubble_count: e.length
            };
        } catch  {
            return {
                terminal_bubble_count: 0,
                terminal_total_output_chars: 0,
                composer_bubble_count: 0
            };
        }
    }
    getUserApprovedWriteFiles(t) {
        const e = this._composerDataService.getComposerData(t), n = new Set(e?.userApprovedWriteFiles ?? []);
        if (e?.subagentInfo?.parentComposerId) {
            const i = this._composerDataService.getHandleIfLoaded(e.subagentInfo.parentComposerId);
            if (i) {
                const r = this._composerDataService.getComposerData(i);
                for (const s of r?.userApprovedWriteFiles ?? [])n.add(s);
            }
        }
        return n;
    }
    getUserApprovedWriteDirectories(t) {
        const e = this._composerDataService.getComposerData(t), n = new Set(e?.userApprovedWriteDirectories ?? []);
        if (e?.subagentInfo?.parentComposerId) {
            const i = this._composerDataService.getHandleIfLoaded(e.subagentInfo.parentComposerId);
            if (i) {
                const r = this._composerDataService.getComposerData(i);
                for (const s of r?.userApprovedWriteDirectories ?? [])n.add(s);
            }
        }
        return n;
    }
    normalizeFilePath(t) {
        try {
            return this._workspaceContextService.resolveRelativePath(t).fsPath;
        } catch  {
            return t;
        }
    }
    async getToolContextOrWait(t, e, n) {
        const i = t.composerId;
        let r = Uss(this._composerDataService, t, e);
        if (r || (await this._pendingApprovalRegistry.waitForBubbleCreation(i, e), r = Uss(this._composerDataService, t, e)), !r) throw new Error(`[ComposerDecisionsService] Could not find bubble for toolCallId: ${e} after waiting`);
        if (n?.aborted) throw new Hc;
        return r;
    }
    async handleApprovalRequest(t, e, n) {
        if (e.operation.type === "write" || e.operation.type === "delete") {
            const i = e.operation.details;
            if (i?.path && Kst(i.path)) return {
                approved: !0
            };
        }
        switch(e.operation.type){
            case "shell":
                {
                    const i = fug.parse(e.operation.details);
                    return this.handleShellOperation(t, e.toolCallId, i, n);
                }
            case "write":
                {
                    const i = mug.parse(e.operation.details);
                    return this.handleWriteOperation(t, e.toolCallId, i, n);
                }
            case "read":
                {
                    const i = gug.parse(e.operation.details);
                    return this.handleReadOperation(t, e.toolCallId, i, n);
                }
            case "delete":
                {
                    const i = vug.parse(e.operation.details);
                    return this.handleDeleteOperation(t, e.toolCallId, i, n);
                }
            case "mcp":
                {
                    const i = _ug.parse(e.operation.details);
                    return this.handleMcpOperation(t, e.toolCallId, i, n);
                }
            default:
                return {
                    approved: !1,
                    reason: "Unknown operation type"
                };
        }
    }
    settleApprovalRequest(t, e, n) {
        n.approved && n.allowlistEntries !== void 0 && n.allowlistEntries.length > 0 && this.addAllowlistEntries(e.operation.type, n.allowlistEntries);
        const i = e.toolCallId, r = n.approved, s = Uss(this._composerDataService, t, i);
        if (s === void 0) return;
        const o = this._toolCallHumanReviewService.getReviewModelForBubble(s.composerHandle, s.bubbleId);
        if (o !== void 0) {
            if (o.getHumanReviewData()?.status !== Cv.REQUESTED) return;
            r ? (o instanceof pAn && this._editsApprovedElsewhere.add(i), o.completeWithRunAction()) : o.reset();
            return;
        }
        const a = this._composerDataService.getToolFormer(s.composerHandle);
        a?.getPendingDecisionBubbleIdForToolCall(i) !== void 0 && (r ? a.acceptToolCall(i) : a.rejectToolCall(i));
    }
    addAllowlistEntries(t, e) {
        t === "shell" && this._effectiveAllowlistService.canAddToAllowlistFromIde("terminal") ? this._reactiveStorageService.setApplicationUserPersistentStorage("composerState", "yoloCommandAllowlist", (n)=>[
                ...new Set([
                    ...n ?? [],
                    ...e
                ])
            ]) : t === "mcp" && this._effectiveAllowlistService.canAddToAllowlistFromIde("mcp") && this._reactiveStorageService.setApplicationUserPersistentStorage("composerState", "mcpAllowedTools", (n)=>e.reduce((i, r)=>{
                const s = Hcg(r);
                return s === null ? i : Bal(s.toolName, s.serverId, i);
            }, n ?? []));
    }
    getMcpToolApprovalForAppCall({ toolName: t, serverIdentifier: e, composerId: n }) {
        const i = T2();
        if (this._composerModesService.getComposerFullAutoRun(n)) return {
            approved: !0
        };
        const s = this._composerModesService.getComposerAutoRun(n), o = this.getEffectiveMcpAllowlist();
        return s && Fal({
            serverId: e,
            toolName: t,
            allowlist: o
        }) ? {
            approved: !0
        } : {
            approved: !1,
            reason: "notInAllowlist"
        };
    }
    async handleShellOperation(t, e, n, i) {
        let r;
        try {
            r = await this.getToolContextOrWait(t, e, i);
        } catch (b) {
            return {
                approved: !1,
                reason: `Failed to find tool call context: ${b instanceof Error ? b.message : String(b)}`
            };
        }
        const s = this._composerDataService.getToolFormer(r.composerHandle);
        if (!s) throw new Error("[ComposerDecisionsService] ToolFormer not found for composerHandle");
        const o = this._composerDataService.getComposerData(r.composerHandle);
        if (!o) throw new Error("[ComposerDecisionsService] Composer not found for composerHandle");
        let a;
        o.chatGenerationUUID ? a = this._aiService.streamingAbortControllers.get(o.chatGenerationUUID) ?? new AbortController : a = new AbortController;
        const l = this._effectiveAllowlistService.canAddToAllowlistFromIde("terminal"), c = uug({
            canAllowlist: n.canAllowlist,
            canAddToAllowlistFromIde: l,
            candidates: n.notAllowedCommands
        }), u = uug({
            canAllowlist: n.canAllowlist,
            canAddToAllowlistFromIde: l,
            candidates: n.suggestedAllowlistEntries
        }), d = cug(n.canAllowlist, n.notAllowedCommands), h = this.toShellReasonCodeForAnalytics(n, d), p = h === "shell.blocked_by_hook" || h === "shell.readonly_mode" || h === "shell.in_blocklist" || h === "shell.team_blocklisted" ? "blocked_by_policy" : "needs_user_approval", g = T2(), f = this.getTerminalBubbleStats(r.composerHandle);
        this.trackTrajectoryStopped({
            composerId: r.composerHandle.composerId,
            invocationID: this.getInvocationId(r.composerHandle),
            toolCallId: e,
            stop_category: p,
            stop_source: "shell",
            reason_code: h,
            hook_source: n.hookSource,
            shell_approval_mode: yag(g, n.isSandboxEnabled, this._composerModesService.getComposerSmartModeAutoRun(r.composerHandle.composerId)),
            shell_is_admin_controlled: g.isAdminControlled,
            shell_can_allowlist: n.canAllowlist,
            shell_not_allowed_commands_count: d?.length,
            shell_is_sandbox_available: n.isSandboxAvailable,
            shell_is_sandbox_enabled: n.isSandboxEnabled,
            ...f
        }), s.setBubbleData(r.bubbleId, {
            additionalData: {
                status: "pending",
                startedAtMs: void 0,
                blockReason: n.reason,
                smartModeApprovalReason: n.smartModeApprovalReason,
                smartModeApprovalRequestId: n.smartModeApprovalRequestId
            }
        });
        const _ = await this.runTerminalReviewMode(s, r.bubbleId, r.composerHandle, a, e, {
            candidates: c,
            suggestedEntries: u
        }, n.smartModeApprovalRequestId);
        switch(_.type){
            case Eie.RUN:
                return s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        startedAtMs: void 0,
                        status: "loading"
                    }
                }), {
                    approved: !0
                };
            case Eie.SKIP:
                return s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        status: "skipped"
                    }
                }), {
                    approved: !1,
                    reason: "User chose to skip"
                };
            case Eie.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY:
                return s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        status: "rejected"
                    }
                }), {
                    approved: !1,
                    reason: _.feedback
                };
            case Eie.ALLOWLIST_COMMANDS:
                return this.addAllowlistEntries("shell", _.commands), s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        startedAtMs: void 0,
                        status: "loading"
                    }
                }), {
                    approved: !0,
                    allowlistEntries: _.commands
                };
            case Eie.NONE:
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
    async handleReadOperation(t, e, n, i) {
        let r;
        try {
            r = await this.getToolContextOrWait(t, e, i);
        } catch (u) {
            return {
                approved: !1,
                reason: `Failed to find tool call context: ${u instanceof Error ? u.message : String(u)}`
            };
        }
        const s = this._composerDataService.getToolFormer(r.composerHandle);
        if (!s) throw new Error("[ComposerDecisionsService] ToolFormer not found for composerHandle");
        const o = s.getBubbleData(r.bubbleId), a = o?.tool, l = {
            approved: !1,
            reason: `Expected a content-read tool call for ${n.path}`
        };
        let c;
        switch(a){
            case Ct.READ_FILE:
            case Ct.READ_FILE_V2:
                c = a;
                break;
            case Ct.UNSPECIFIED:
                if (o?.toolCall?.tool.case === "piReadToolCall") {
                    c = Ct.READ_FILE_V2;
                    break;
                }
                return l;
            default:
                return l;
        }
        return n.reason !== void 0 && s.setBubbleData(r.bubbleId, {
            additionalData: {
                blockReason: n.reason
            }
        }), this.awaitPendingDecision(s, {
            bubbleId: r.bubbleId,
            tool: c,
            toolCallId: e,
            rejectionReason: "User rejected the read operation"
        });
    }
    awaitPendingDecision(t, e) {
        return new Promise((n)=>{
            t.addPendingDecision(e.bubbleId, e.tool, e.toolCallId, (i)=>{
                n(i ? {
                    approved: !0
                } : {
                    approved: !1,
                    reason: e.rejectionReason
                });
            }, !0);
        });
    }
    async handleDeleteOperation(t, e, n, i) {
        const r = T2();
        let s;
        try {
            s = await this.getToolContextOrWait(t, e, i);
        } catch (l) {
            return {
                approved: !1,
                reason: `Failed to find tool call context: ${l instanceof Error ? l.message : String(l)}`
            };
        }
        const o = this._composerDataService.getToolFormer(s.composerHandle);
        if (!o) throw new Error("[ComposerDecisionsService] ToolFormer not found for composerHandle");
        const a = Y6e(this._workspaceContextService, n.path);
        return Rdk(a) ? (o.setBubbleData(s.bubbleId, {
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
            toolCallId: e,
            stop_category: "needs_user_approval",
            stop_source: "delete",
            reason_code: "delete.needs_approval",
            delete_file_protection_enabled: r.deleteFileProtection
        }), this.awaitPendingDecision(o, {
            bubbleId: s.bubbleId,
            tool: Ct.DELETE_FILE,
            toolCallId: e,
            rejectionReason: "User rejected the delete operation"
        })) : (o.setBubbleData(s.bubbleId, {
            userDecision: "accepted"
        }), {
            approved: !0
        });
    }
    async handleWriteOperation(t, e, n, i) {
        let r;
        try {
            r = await this.getToolContextOrWait(t, e, i);
        } catch (S) {
            return {
                approved: !1,
                reason: `Failed to find tool call context: ${S instanceof Error ? S.message : String(S)}`
            };
        }
        const s = this._composerDataService.getToolFormer(r.composerHandle);
        if (!s) throw new Error("[ComposerDecisionsService] ToolFormer not found for composerHandle");
        const o = this._composerDataService.getComposerData(r.composerHandle);
        if (!o) throw new Error("[ComposerDecisionsService] Composer not found for composerHandle");
        let a;
        o.chatGenerationUUID ? a = this._aiService.streamingAbortControllers.get(o.chatGenerationUUID) ?? new AbortController : a = new AbortController;
        const l = T2(), c = n.blockReason;
        if (c === "outOfWorkspace" && !l.outsideWorkspaceProtection) return s.setBubbleData(r.bubbleId, {
            userDecision: "accepted"
        }), {
            approved: !0
        };
        if (c) {
            const S = this.normalizeFilePath(n.path);
            if (this.getUserApprovedWriteFiles(r.composerHandle).has(S)) return s.setBubbleData(r.bubbleId, {
                userDecision: "accepted"
            }), {
                approved: !0
            };
            if (c === "outOfWorkspace" && [
                ...this.getUserApprovedWriteDirectories(r.composerHandle)
            ].some((I)=>c$e(S, I, xa))) return s.setBubbleData(r.bubbleId, {
                userDecision: "accepted"
            }), {
                approved: !0
            };
        }
        const u = this._workspaceContextService.resolveRelativePath(n.path), d = n.before, h = n.after;
        let p;
        if (d !== void 0) {
            const S = zst.serialize(d);
            p = `composer.content.${$v(await ppe(S))}`, await this._storageService.cursorDiskKVGet(p) === void 0 && await this._storageService.cursorDiskKVSet(p, d);
        }
        let g;
        if (h !== void 0) {
            const S = zst.serialize(h);
            g = `composer.content.${$v(await ppe(S))}`, await this._storageService.cursorDiskKVGet(g) === void 0 && await this._storageService.cursorDiskKVSet(g, h);
        }
        const f = (()=>{
            if (c) switch(c){
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
                        const S = c;
                        return;
                    }
            }
        })();
        if (s.setBubbleData(r.bubbleId, {
            params: new $de({
                relativeWorkspacePath: n.path,
                noCodeblock: !0,
                streamingContent: h
            }),
            result: new N$e({
                beforeContentId: p,
                afterContentId: g ?? ""
            }),
            additionalData: {
                reasonForAcceptReject: f,
                blockReason: c,
                isNewFile: n.isNewFile
            }
        }), i?.aborted) return {
            approved: !1,
            reason: "Canceled"
        };
        const _ = (()=>{
            switch(c){
                case "outOfWorkspace":
                    return "write.out_of_workspace";
                case "protectedConfig":
                    return "write.protected_config";
                default:
                    return this.toWriteReasonCodeForAnalytics(f);
            }
        })(), b = _ === "write.cursor_ignore" || _ === "write.admin_block" ? "blocked_by_policy" : "needs_user_approval";
        this.trackTrajectoryStopped({
            composerId: r.composerHandle.composerId,
            invocationID: this.getInvocationId(r.composerHandle),
            toolCallId: e,
            blocked_file_path: this.isPrivacyModeEnabled() || !c ? void 0 : this.getFullPathForAnalytics(n.path),
            stop_category: b,
            stop_source: "write",
            reason_code: _,
            edit_reason: this.toEditReasonForAnalytics(f) ?? (c ? "unknown" : void 0)
        });
        const y = await this.runEditReviewMode(s, r.bubbleId, r.composerHandle, u, a, e);
        if (y.type === Tle.ACCEPT) {
            const S = this._editsApprovedElsewhere.delete(e);
            if (c && !S) {
                const k = this.normalizeFilePath(n.path);
                this._composerDataService.updateComposerDataSetStore(r.composerHandle, (C)=>{
                    C("userApprovedWriteFiles", (T = [])=>T.includes(k) ? T : [
                            ...T,
                            k
                        ]);
                });
            }
            return {
                approved: !0
            };
        } else {
            if (y.type === Tle.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY) return {
                approved: !1,
                reason: y.feedback
            };
            if (y.type === Tle.SKIP) return {
                approved: !1,
                reason: "User chose to skip"
            };
            if (y.type === Tle.ACCEPT_AND_ALLOW_FOLDER) {
                const S = this.normalizeFilePath(n.path), k = g4(S);
                return this._composerDataService.updateComposerDataSetStore(r.composerHandle, (C)=>{
                    C("userApprovedWriteDirectories", (T = [])=>T.includes(k) ? T : [
                            ...T,
                            k
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
    async runEditReviewMode(t, e, n, i, r, s) {
        let o = this._toolCallHumanReviewService.getEditReviewModelForBubble(n, e);
        if (!o) {
            const d = t.getBubbleData(e);
            if (d) {
                const h = d.tool === Ct.EDIT_FILE || d.tool === Ct.EDIT_FILE_V2;
                (!d.tool || h) && (d.tool || t.setBubbleData(e, {
                    tool: Ct.EDIT_FILE_V2
                }), o = this._toolCallHumanReviewService.getEditReviewModelForBubble(n, e));
            }
        }
        if (!o) return Promise.resolve({
            type: Tle.NONE
        });
        const a = n.composerId;
        this._composerViewsService.focus(a), r.signal.addEventListener("abort", ()=>{
            o.reset();
        }, {
            once: !0
        });
        const l = dug(o.getHumanReviewData());
        if (l) return l;
        o.setStatus(Cv.REQUESTED);
        const c = t.addPendingDecision(e, Ct.EDIT_FILE_V2, s, ()=>{}, !0), u = (d, h, p)=>{
            if (d === void 0 || d.status === Cv.NONE) {
                h.dispose(), c(), p({
                    type: Tle.NONE
                });
                return;
            }
            d.status === Cv.DONE && (h.dispose(), c(), p(dug(d) ?? {
                type: Tle.NONE
            }));
        };
        return new Promise((d)=>{
            const h = this._reactiveStorageService.onChangeEffectManuallyDisposed({
                deps: [
                    ()=>o.getHumanReviewData()
                ],
                onChange: ({ deps: p })=>{
                    try {
                        u(p[0], h, d);
                    } catch (g) {
                        this._composerLogService.error("Error during processing review mode", g), h.dispose(), d({
                            type: Tle.NONE
                        });
                    }
                }
            });
            r.signal.addEventListener("abort", ()=>{
                d({
                    type: Tle.NONE
                });
            }, {
                once: !0
            });
        });
    }
    async handleMcpOperation(t, e, n, i) {
        let r;
        try {
            r = await this.getToolContextOrWait(t, e, i);
        } catch (O) {
            return {
                approved: !1,
                reason: `Failed to find tool call context: ${O instanceof Error ? O.message : String(O)}`
            };
        }
        const s = this._composerDataService.getToolFormer(r.composerHandle);
        if (!s) throw new Error("[ComposerDecisionsService] ToolFormer not found for composerHandle");
        const o = this._composerDataService.getComposerData(r.composerHandle);
        if (!o) throw new Error("[ComposerDecisionsService] Composer not found for composerHandle");
        const a = n.providerIdentifier, l = this._mcpService.mcpAllowlistLogger;
        l.info(`[handleMcpOperation] Tool="${n.toolName}", server="${a}", canAllowlist=${n.canAllowlist}, reason="${n.reason ?? "none"}"`);
        const c = f_k(n), u = T2(), d = A4m.includes(a), h = this._mcpProviderService.getMcpProvider(a);
        if (n.source === "internal" && lug(h, n.toolName)) return s.setBubbleData(r.bubbleId, {
            userDecision: "accepted",
            additionalData: {
                status: "running"
            }
        }), {
            approved: !0
        };
        const p = this._composerModesService.getComposerFullAutoRun(r.composerHandle.composerId), g = n.source === "internal" && !lug(h, n.toolName), f = v_k({
            isPlaywrightTool: d,
            playwrightProtection: u.playwrightProtection,
            blockedByInternalProviderPolicy: g
        });
        if (c && p && !d && !g) return s.setBubbleData(r.bubbleId, {
            userDecision: "accepted",
            additionalData: {
                status: "running"
            }
        }), {
            approved: !0
        };
        if (c && d && !u.playwrightProtection) return s.setBubbleData(r.bubbleId, {
            userDecision: "accepted",
            additionalData: {
                status: "running"
            }
        }), {
            approved: !0
        };
        const _ = this._composerModesService.getComposerAutoRun(r.composerHandle.composerId), b = this.getEffectiveMcpAllowlist(), y = _ && Fal({
            serverId: a,
            toolName: n.toolName,
            allowlist: b
        }), S = this.asMcpBlockReason(n.reason);
        if (y && !g && (c && (!S || S === "notInAllowlist") || S === "smartMode")) return s.setBubbleData(r.bubbleId, {
            userDecision: "accepted",
            additionalData: {
                status: "running"
            }
        }), {
            approved: !0
        };
        let T;
        o.chatGenerationUUID ? T = this._aiService.streamingAbortControllers.get(o.chatGenerationUUID) ?? new AbortController : T = new AbortController;
        const I = __k({
            canAllowlist: n.canAllowlist,
            canAddToAllowlistFromIde: this._effectiveAllowlistService.canAddToAllowlistFromIde("mcp"),
            toolName: n.toolName,
            serverName: a
        });
        let A;
        S ? A = S : d && u.playwrightProtection ? A = "playwrightProtection" : n.canAllowlist ? A = "notInAllowlist" : A = "mcpToolsProtection", s.setBubbleData(r.bubbleId, {
            additionalData: {
                status: "pending",
                blockReason: A,
                smartModeApprovalReason: g_k(n),
                smartModeApprovalRequestId: n.smartModeApprovalRequestId,
                canAutoApproveInRunEverything: f
            }
        });
        const P = A === "hookBlocked" || A === "readonlyMode" ? "blocked_by_policy" : "needs_user_approval";
        this.trackTrajectoryStopped({
            composerId: r.composerHandle.composerId,
            invocationID: this.getInvocationId(r.composerHandle),
            toolCallId: e,
            stop_category: P,
            stop_source: "mcp",
            reason_code: A ? this.toMcpReasonCodeForAnalytics(A) : "mcp.needs_approval",
            hook_source: n.hookSource,
            mcp_can_allowlist: n.canAllowlist,
            mcp_is_playwright_tool: d,
            mcp_playwright_protection_enabled: u.playwrightProtection
        });
        const M = await this.runMCPReviewMode(s, r.bubbleId, r.composerHandle, T, I, e, n.toolName, a, n.smartModeApprovalRequestId);
        switch(M.type){
            case HJ.RUN:
                return s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        status: "running"
                    }
                }), {
                    approved: !0
                };
            case HJ.SKIP:
                return s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        status: "skipped"
                    }
                }), {
                    approved: !1,
                    reason: "User chose to skip"
                };
            case HJ.REJECT_AND_TELL_WHAT_TO_DO_DIFFERENTLY:
                return s.setBubbleData(r.bubbleId, {
                    additionalData: {
                        status: "rejected"
                    }
                }), {
                    approved: !1,
                    reason: M.feedback
                };
            case HJ.ALLOWLIST_TOOL:
                {
                    l.info(`[handleMcpOperation] User chose ALLOWLIST_TOOL. Adding "${a}:${n.toolName}" to allowlist. Current allowlist: ${JSON.stringify(this._reactiveStorageService.applicationUserPersistentStorage.composerState.mcpAllowedTools ?? [])}`), this._reactiveStorageService.setApplicationUserPersistentStorage("composerState", "mcpAllowedTools", (N)=>Bal(n.toolName, a, N ?? [])), s.setBubbleData(r.bubbleId, {
                        additionalData: {
                            status: "running"
                        }
                    });
                    const O = Oal(a, n.toolName);
                    return O === null ? {
                        approved: !0
                    } : {
                        approved: !0,
                        allowlistEntries: [
                            O
                        ]
                    };
                }
            case HJ.NONE:
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
    async runTerminalReviewMode(t, e, n, i, r, s, o) {
        const a = this._toolCallHumanReviewService.getTerminalReviewModelForBubble(n, e);
        if (!a) return {
            type: Eie.NONE
        };
        a.setAllowlistCandidates({
            candidates: s.candidates,
            suggestedEntries: s.suggestedEntries
        }), this._composerViewsService.triggerScrollToBottom(n), i.signal.addEventListener("abort", ()=>{
            a.reset();
        }, {
            once: !0
        });
        const l = a.getHumanReviewData(), c = hug(l);
        if (c) return c;
        const u = n.composerId;
        this._asyncOperationRegistry.enter(u, "terminal_user_approval"), zal({
            existingReviewStatus: l?.status,
            smartModeApprovalRequestId: o
        }) && this.trackSmartModeApprovalCardShown("shell", n, r, o), a.setStatus(Cv.REQUESTED);
        const d = t.addPendingDecision(e, Ct.RUN_TERMINAL_COMMAND_V2, r, ()=>{}, !0), h = (p, g, f)=>{
            p === void 0 ? (g.dispose(), d()) : p.status === Cv.NONE ? (g.dispose(), d(), f({
                type: Eie.NONE
            })) : p.status === Cv.DONE && (g.dispose(), f(hug(p) ?? {
                type: Eie.NONE
            }), d());
        };
        try {
            return await new Promise((p)=>{
                const g = this._reactiveStorageService.onChangeEffectManuallyDisposed({
                    deps: [
                        ()=>a.getHumanReviewData()
                    ],
                    onChange: ({ deps: f })=>{
                        try {
                            h(f[0], g, p);
                        } catch (_) {
                            this._composerLogService.error("Error during processing of terminal review mode", _), g.dispose(), p({
                                type: Eie.NONE
                            });
                        }
                    }
                });
                i.signal.addEventListener("abort", ()=>{
                    p({
                        type: Eie.NONE
                    });
                }, {
                    once: !0
                });
            });
        } finally{
            this._asyncOperationRegistry.exit(u, "terminal_user_approval");
        }
    }
    async runMCPReviewMode(t, e, n, i, r, s, o, a, l) {
        const c = this._toolCallHumanReviewService.getMCPReviewModelForBubble(n, e);
        if (!c) return {
            type: HJ.NONE
        };
        c.updateReviewData({
            candidatesForAllowlist: r ?? [],
            toolName: o,
            serverId: a
        }), this._composerViewsService.triggerScrollToBottom(n), i.signal.addEventListener("abort", ()=>{
            c.reset();
        }, {
            once: !0
        });
        const u = c.getHumanReviewData(), d = pug(u);
        if (d) return d;
        const h = n.composerId;
        this._asyncOperationRegistry.enter(h, "mcp_user_approval"), zal({
            existingReviewStatus: u?.status,
            smartModeApprovalRequestId: l
        }) && this.trackSmartModeApprovalCardShown("mcp", n, s, l), c.setStatus(Cv.REQUESTED);
        const p = t.addPendingDecision(e, t.getBubbleData(e)?.tool ?? Ct.MCP, s, ()=>{}, !0), g = (f, _, b, y)=>{
            f === void 0 ? (b.dispose(), p()) : f.status === Cv.NONE ? (b.dispose(), p(), y({
                type: HJ.NONE
            })) : f.status === Cv.DONE ? (b.dispose(), y(pug(f) ?? {
                type: HJ.NONE
            }), p()) : f.status === Cv.REQUESTED && Fal({
                serverId: a,
                toolName: o,
                allowlist: _
            }) && (b.dispose(), p(), c.setSelectedOption(OO.RUN), c.setStatus(Cv.DONE), y({
                type: HJ.RUN
            }));
        };
        try {
            return await new Promise((f)=>{
                const _ = this._reactiveStorageService.onChangeEffectManuallyDisposed({
                    deps: [
                        ()=>c.getHumanReviewData(),
                        ()=>this._reactiveStorageService.applicationUserPersistentStorage.composerState.mcpAllowedTools ?? []
                    ],
                    onChange: ({ deps: b })=>{
                        try {
                            const y = this.getEffectiveMcpAllowlist();
                            g(b[0], y, _, f);
                        } catch (y) {
                            this._composerLogService.error("Error during processing of MCP review mode", y), _.dispose(), f({
                                type: HJ.NONE
                            });
                        }
                    }
                });
                i.signal.addEventListener("abort", ()=>{
                    f({
                        type: HJ.NONE
                    });
                }, {
                    once: !0
                });
            });
        } finally{
            this._asyncOperationRegistry.exit(h, "mcp_user_approval");
        }
    }
}, $ss = Re([
    F(0, fV),
    F(1, sa),
    F(2, Bb),
    F(3, no),
    F(4, jl),
    F(5, Qr),
    F(6, ss),
    F(7, yr),
    F(8, uk),
    F(9, ki),
    F(10, G4e),
    F(11, sat),
    F(12, Cr),
    F(13, jze),
    F(14, N0),
    F(15, zCe),
    F(16, w1)
], $ss), bn(tVt, $ss, 1);

}
