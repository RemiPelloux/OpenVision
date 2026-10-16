import { $Qi, W1o } from "./agentHostInteractionMirror.js";
import { Stt, bq, dCt, mCt, pCt, r3n } from "./agent_host_pb.js";
import { ACt, fjt } from "./composerDecisionsService.js";
import { hb } from "./errors.ts";
import { ZW } from "./index_12.ts";
import { eZ } from "./mcpService.js";
import { P1 } from "./mcpServiceTypes.js";
import { bi } from "./protobuf.js";
import { fd } from "./struct_pb.js";
import { x } from "./tslib.es6.js";
function cJv(e, t) {
    if (!e.approved) return new pCt({
        approved: !1,
        reason: e.reason
    });
    const n = (e.allowlistEntries ?? []).filter((i)=>t.includes(i));
    return new pCt({
        approved: !0,
        allowlistEntries: n
    });
}
function lJv(e) {
    const t = e.toolCallId, n = e.operation?.details;
    switch(n?.case){
        case "shell":
            {
                const i = n.value;
                return {
                    toolCallId: t,
                    operation: {
                        type: "shell",
                        details: {
                            command: i.command,
                            workingDirectory: i.workingDirectory,
                            timeout: i.timeout,
                            reason: i.reason,
                            hookSource: iEh(i.hookSource),
                            isSandboxAvailable: i.isSandboxAvailable,
                            isSandboxEnabled: i.isSandboxEnabled,
                            canAllowlist: i.canAllowlist,
                            notAllowedCommands: i.notAllowedCommands,
                            suggestedAllowlistEntries: i.suggestedAllowlistEntries,
                            smartModeApprovalReason: i.smartModeApprovalReason,
                            smartModeApprovalRequestId: i.smartModeApprovalRequestId
                        }
                    }
                };
            }
        case "write":
            {
                const i = n.value;
                return {
                    toolCallId: t,
                    operation: {
                        type: "write",
                        details: {
                            path: i.path,
                            reason: i.reason,
                            isNewFile: i.isNewFile,
                            diffString: i.diffString,
                            before: i.before,
                            after: i.after,
                            blockReason: uJv(i.blockReason)
                        }
                    }
                };
            }
        case "read":
            return {
                toolCallId: t,
                operation: {
                    type: "read",
                    details: {
                        path: n.value.path,
                        reason: n.value.reason
                    }
                }
            };
        case "delete":
            return {
                toolCallId: t,
                operation: {
                    type: "delete",
                    details: {
                        path: n.value.path
                    }
                }
            };
        case "mcp":
            {
                const i = n.value;
                return {
                    toolCallId: t,
                    operation: {
                        type: "mcp",
                        details: {
                            name: i.name,
                            toolName: i.toolName,
                            providerIdentifier: i.providerIdentifier,
                            source: i.source,
                            args: Object.fromEntries(Object.entries(i.args).map(([r, s])=>[
                                    r,
                                    s.toJson()
                                ])),
                            reason: i.reason,
                            hookSource: iEh(i.hookSource),
                            canAllowlist: i.canAllowlist,
                            smartModeApprovalReason: i.smartModeApprovalReason,
                            smartModeApprovalRequestId: i.smartModeApprovalRequestId
                        }
                    }
                };
            }
        case void 0:
            return;
    }
}
function iEh(e) {
    switch(e){
        case dCt.USER:
            return "user";
        case dCt.PROJECT:
            return "project";
        case dCt.ENTERPRISE:
            return "enterprise";
        case dCt.TEAM:
            return "team";
        default:
            return;
    }
}
function uJv(e) {
    switch(e){
        case r3n.OUT_OF_WORKSPACE:
            return "outOfWorkspace";
        case r3n.PROTECTED_CONFIG:
            return "protectedConfig";
        case r3n.WORKSPACE_WRITE:
            return "workspaceWrite";
        default:
            return;
    }
}
var rEh;
export { cJv, iEh, lJv, rEh, uJv };
var __wakaru_dJv_initialized = false;
export function dJv() {
if (__wakaru_dJv_initialized) return;
__wakaru_dJv_initialized = true;
"use strict";
x(), ZW(), bq(), bi(), fjt(), eZ(), $Qi(), rEh = class {
    constructor(e){
        this.context = e;
    }
    async handleExecApproval(e, t) {
        const n = lJv(t);
        if (n === void 0) return new pCt({
            approved: !1,
            reason: "The approval has no operation"
        });
        const i = this.context.instantiationService.invokeFunction((s)=>s.get(ACt)), r = ()=>{
            const s = e.signal.reason;
            if (s instanceof W1o && s.resolution.case === "execApproval") {
                const { approved: o, allowlistEntries: a } = s.resolution.value;
                i.settleApprovalRequest(this.context.composerDataHandle, n, {
                    approved: o,
                    allowlistEntries: a
                });
            }
        };
        if (e.signal.aborted) throw r(), new hb("The approval was withdrawn before its card was drawn.");
        e.signal.addEventListener("abort", r, {
            once: !0
        });
        try {
            const s = await i.handleApprovalRequest(this.context.composerDataHandle, n, e.signal);
            if (e.signal.aborted) throw new hb("The approval was withdrawn.");
            return cJv(s, t.offeredAllowlistEntries);
        } finally{
            e.signal.removeEventListener("abort", r);
        }
    }
    async handleMcpElicitation(e, t) {
        let n;
        try {
            n = JSON.parse(t.elicitation?.requestedSchemaJson ?? "");
        } catch  {
            return new Stt({
                action: mCt.CANCEL
            });
        }
        if (e.signal.aborted) throw new hb("The MCP form was withdrawn before it opened.");
        const i = this.context.instantiationService.invokeFunction((o)=>o.get(P1)), r = ()=>{
            t.toolCallId && i.clearElicitationRequestsForToolCall(t.toolCallId);
        };
        e.signal.addEventListener("abort", r, {
            once: !0
        });
        let s;
        try {
            s = await i.handleElicitationRequest(t.serverName, t.toolName, t.toolCallId || void 0, {
                message: t.elicitation?.message ?? "",
                requestedSchema: n
            });
        } finally{
            e.signal.removeEventListener("abort", r);
        }
        if (e.signal.aborted) throw new hb("The MCP form was closed without an answer.");
        switch(s.action){
            case "accept":
                return new Stt({
                    action: mCt.ACCEPT,
                    content: s.content === void 0 ? void 0 : fd.fromJson(s.content)
                });
            case "decline":
                return new Stt({
                    action: mCt.DECLINE
                });
            case "cancel":
                return new Stt({
                    action: mCt.CANCEL
                });
        }
    }
};

}
