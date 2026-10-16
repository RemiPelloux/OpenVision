import { aSk, lSk } from "./Ycg.js";
import { Wll, fos } from "./agentHostInteractionMirror.js";
import { V4e, hG, jzt, z4e } from "./agent_host_pb.js";
import { fAn, tVt } from "./composerDecisionsService.js";
import { T1 } from "./errors.ts";
import { hX } from "./index_12.ts";
import { gV } from "./mcpService.js";
import { N0 } from "./mcpServiceTypes.js";
import { hr } from "./protobuf.js";
import { qd } from "./struct_pb.js";
import { E } from "./tslib.es6.js";
var Epg;
export { Epg };
var __wakaru_uSk_initialized = false;
export function uSk() {
if (__wakaru_uSk_initialized) return;
__wakaru_uSk_initialized = true;
"use strict";
E(), hX(), hG(), hr(), fAn(), gV(), fos(), Epg = class {
    constructor(t){
        this.context = t;
    }
    async handleExecApproval(t, e) {
        const n = lSk(e);
        if (n === void 0) return new jzt({
            approved: !1,
            reason: "The approval has no operation"
        });
        const i = this.context.instantiationService.invokeFunction((s)=>s.get(tVt)), r = ()=>{
            const s = t.signal.reason;
            if (s instanceof Wll && s.resolution.case === "execApproval") {
                const { approved: o, allowlistEntries: a } = s.resolution.value;
                i.settleApprovalRequest(this.context.composerDataHandle, n, {
                    approved: o,
                    allowlistEntries: a
                });
            }
        };
        if (t.signal.aborted) throw r(), new T1("The approval was withdrawn before its card was drawn.");
        t.signal.addEventListener("abort", r, {
            once: !0
        });
        try {
            const s = await i.handleApprovalRequest(this.context.composerDataHandle, n, t.signal);
            if (t.signal.aborted) throw new T1("The approval was withdrawn.");
            return aSk(s, e.offeredAllowlistEntries);
        } finally{
            t.signal.removeEventListener("abort", r);
        }
    }
    async handleMcpElicitation(t, e) {
        let n;
        try {
            n = JSON.parse(e.elicitation?.requestedSchemaJson ?? "");
        } catch  {
            return new z4e({
                action: V4e.CANCEL
            });
        }
        if (t.signal.aborted) throw new T1("The MCP form was withdrawn before it opened.");
        const i = this.context.instantiationService.invokeFunction((o)=>o.get(N0)), r = ()=>{
            e.toolCallId && i.clearElicitationRequestsForToolCall(e.toolCallId);
        };
        t.signal.addEventListener("abort", r, {
            once: !0
        });
        let s;
        try {
            s = await i.handleElicitationRequest(e.serverName, e.toolName, e.toolCallId || void 0, {
                message: e.elicitation?.message ?? "",
                requestedSchema: n
            });
        } finally{
            t.signal.removeEventListener("abort", r);
        }
        if (t.signal.aborted) throw new T1("The MCP form was closed without an answer.");
        switch(s.action){
            case "accept":
                return new z4e({
                    action: V4e.ACCEPT,
                    content: s.content === void 0 ? void 0 : qd.fromJson(s.content)
                });
            case "decline":
                return new z4e({
                    action: V4e.DECLINE
                });
            case "cancel":
                return new z4e({
                    action: V4e.CANCEL
                });
        }
    }
};

}
