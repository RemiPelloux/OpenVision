"use strict";
require.d(exports, {
    zC: ()=>I.zC,
    wB: ()=>k,
    _9: ()=>T,
    qU: ()=>x,
    CG: ()=>b,
    JY: ()=>E,
    Z5: ()=>R,
    Z9: ()=>u.Z9,
    JM: ()=>I.JM,
    LQ: ()=>c.L,
    XJ: ()=>I.XJ,
    Tz: ()=>C.oF,
    AO: ()=>l.A,
    Gh: ()=>d
});
require("./module-27498.js"), require("./module-82103.js");
var n = require("./module-4113.js"), s = require("./module-60431.js"), o = require("./module-17714.js"), i = require("./module-95750.js");
var a = require("./module-87339.js"), c = (require("./module-51635.js"), require("./module-11247.js"));
require("./module-18951.js"), require("./module-77598.js");
var l = require("./module-829.js"), u = require("./module-60544.js");
function d(e) {
    const t = e.action;
    if (void 0 === t) throw new Error("Agent-host action request is missing an action");
    return {
        sessionId: e.sessionId,
        modelId: e.modelId,
        modelDetails: e.modelDetails,
        requestedModel: e.requestedModel,
        action: t,
        baseHistory: e.baseHistory,
        turnOptions: e.turnOptions,
        requestContextDecoration: e.requestContextDecoration,
        delivery: e.delivery,
        replaceQueuedTurnId: e.replaceQueuedTurnId
    };
}
var p = require("./module-33002.js"), m = require("./module-91105.js"), h = require("./module-60525.js"), f = require("./module-80227.js"), g = require("./module-36190.js"), y = require("./module-98934.js");
function w(e) {
    switch(e){
        case "user":
            return h.Ze.USER;
        case "project":
            return h.Ze.PROJECT;
        case "enterprise":
            return h.Ze.ENTERPRISE;
        case "team":
            return h.Ze.TEAM;
        default:
            return;
    }
}
function v(e) {
    const t = "outOfWorkspace" === (r = e.details.blockReason) ? h.kr.OUT_OF_WORKSPACE : "protectedConfig" === r ? h.kr.PROTECTED_CONFIG : "workspaceWrite" === r ? h.kr.WORKSPACE_WRITE : void 0;
    var r;
    return new h.G_({
        path: e.details.path,
        reason: e.details.reason,
        isNewFile: e.details.isNewFile,
        diffString: e.details.diffString,
        ...void 0 === e.details.before ? {} : {
            before: e.details.before
        },
        ...void 0 === e.details.after ? {} : {
            after: e.details.after
        },
        ...void 0 === t ? {} : {
            blockReason: t
        }
    });
}
function _(e) {
    const t = w(e.details.hookSource);
    return new h.J3({
        command: e.details.command,
        workingDirectory: e.details.workingDirectory,
        timeout: e.details.timeout,
        ...void 0 === e.details.reason ? {} : {
            reason: e.details.reason
        },
        ...void 0 === e.details.isSandboxAvailable ? {} : {
            isSandboxAvailable: e.details.isSandboxAvailable
        },
        ...void 0 === e.details.isSandboxEnabled ? {} : {
            isSandboxEnabled: e.details.isSandboxEnabled
        },
        ...void 0 === e.details.canAllowlist ? {} : {
            canAllowlist: e.details.canAllowlist
        },
        notAllowedCommands: e.details.notAllowedCommands ?? [],
        suggestedAllowlistEntries: e.details.suggestedAllowlistEntries ?? [],
        ...void 0 === e.details.smartModeApprovalReason ? {} : {
            smartModeApprovalReason: e.details.smartModeApprovalReason
        },
        ...void 0 === e.details.smartModeApprovalRequestId ? {} : {
            smartModeApprovalRequestId: e.details.smartModeApprovalRequestId
        },
        ...void 0 === t ? {} : {
            hookSource: t
        }
    });
}
function A(e) {
    const t = w(e.details.hookSource);
    return new h.$b({
        name: e.details.name,
        toolName: e.details.toolName,
        providerIdentifier: e.details.providerIdentifier,
        args: e.details.args,
        ...void 0 === e.details.source ? {} : {
            source: e.details.source
        },
        ...void 0 === e.details.reason ? {} : {
            reason: e.details.reason
        },
        ...void 0 === e.details.canAllowlist ? {} : {
            canAllowlist: e.details.canAllowlist
        },
        ...void 0 === e.details.smartModeApprovalReason ? {} : {
            smartModeApprovalReason: e.details.smartModeApprovalReason
        },
        ...void 0 === e.details.smartModeApprovalRequestId ? {} : {
            smartModeApprovalRequestId: e.details.smartModeApprovalRequestId
        },
        ...void 0 === t ? {} : {
            hookSource: t
        }
    });
}
function S(e) {
    switch(e.type){
        case m.S5n.Write:
            return new h.yu({
                type: h.cj.WRITE,
                details: {
                    case: "write",
                    value: v(e)
                }
            });
        case m.S5n.Shell:
            return new h.yu({
                type: h.cj.SHELL,
                details: {
                    case: "shell",
                    value: _(e)
                }
            });
        case m.S5n.Delete:
            return new h.yu({
                type: h.cj.DELETE,
                details: {
                    case: "delete",
                    value: new h.s({
                        path: e.details.path
                    })
                }
            });
        case m.S5n.Mcp:
            return new h.yu({
                type: h.cj.MCP,
                details: {
                    case: "mcp",
                    value: A(e)
                }
            });
        default:
            return e;
    }
}
function b(e) {
    return async (t)=>{
        const r = t.type === m.S5n.Read ? function(e) {
            return new h.oX({
                toolCallId: e.toolCallId ?? "",
                operation: new h.yu({
                    type: h.cj.READ,
                    details: {
                        case: "read",
                        value: new h.x5({
                            path: e.details.path,
                            ...void 0 === e.details.reason ? {} : {
                                reason: e.details.reason
                            }
                        })
                    }
                })
            });
        }(t) : function(e) {
            return new h.oX({
                toolCallId: e.toolCallId ?? "",
                operation: S(e)
            });
        }(t);
        r.offeredAllowlistEntries = function(e) {
            const t = e?.details;
            switch(t?.case){
                case "shell":
                    return !0 === t.value.canAllowlist ? t.value.notAllowedCommands.filter((e)=>!(0, f.hr)(e)) : [];
                case "mcp":
                    {
                        if (!0 !== t.value.canAllowlist) return [];
                        const e = t.value.providerIdentifier.trim().toLowerCase(), r = t.value.toolName.trim().toLowerCase(), n = (e)=>e.length > 0 && e.length <= 256 && !/[:*]/.test(e);
                        return n(e) && n(r) ? [
                            `${e}:${r}`
                        ] : [];
                    }
                default:
                    return [];
            }
        }(r.operation);
        const n = {
            case: "execApproval",
            value: r
        }, s = await e((0, p.q6)(), n).catch((e)=>(0, g.sJ)(n, `The approval ended without an answer: ${(0, y.E)(e)}`));
        return "execApproval" !== s.case ? {
            approved: !1,
            reason: "The approval was answered with a different kind of answer"
        } : s.value.approved ? {
            approved: !0
        } : void 0 === s.value.reason ? {
            approved: !1
        } : {
            approved: !1,
            reason: s.value.reason
        };
    };
}
function E(e) {
    return async (t, r, n, s, o)=>{
        const i = {
            case: "mcpElicitation",
            value: new h.Gb({
                serverName: t,
                toolName: r,
                ...void 0 === n ? {} : {
                    toolCallId: n
                },
                elicitation: new h.vb({
                    message: s.message,
                    requestedSchemaJson: JSON.stringify(s.requestedSchema)
                })
            })
        }, a = await e(void 0 === o ? (0, p.q6)() : function(e) {
            const [t, r] = (0, p.q6)().withCancel();
            e.aborted ? r(e.reason) : e.addEventListener("abort", ()=>r(e.reason), {
                once: !0
            });
            return t;
        }(o), i).catch((e)=>(0, g.sJ)(i, `The form ended without an answer: ${(0, y.E)(e)}`));
        if ("mcpElicitation" !== a.case) return {
            action: "cancel"
        };
        switch(a.value.action){
            case h.M.ACCEPT:
                {
                    const e = a.value.content?.toJson();
                    return "object" != typeof e || null === e || Array.isArray(e) ? {
                        action: "accept"
                    } : {
                        action: "accept",
                        content: e
                    };
                }
            case h.M.DECLINE:
                return {
                    action: "decline"
                };
            default:
                return {
                    action: "cancel"
                };
        }
    };
}
var I = require("./module-75405.js"), C = require("./module-80962.js");
require("./module-69457.js"), require("./module-91693.js"), require("./module-76183.js"), require("./module-16074.js"), require("./module-67360.js"), require("./module-46144.js");
require("./module-39024.js");
const k = n.wB, x = n.qU, T = function(e, t = {}) {
    const r = (t.createContextClient ?? ((e, t)=>(0, s.Zj)(e, t)))(o.AgentService, e);
    return (0, i.u)({
        run: (e, t, n)=>r.run(e, t, n)
    });
}, R = a.Z;
