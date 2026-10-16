import { Kl } from "./HVr.js";
import { ca, la } from "./aiMiscServices.js";
import { bn } from "./async.js";
import { Za, na } from "./authenticationService.js";
import { DUe, MUe } from "./cloudMcpOAuthLoopbackService.js";
import { Jm, ps } from "./composer_pb.js";
import { oVt, tFn } from "./hostedMcpLogin.js";
import { B_e, GX } from "./hostedMcpPlacementService.js";
import { dyo } from "./mcpConnectFlow.js";
import { eZ } from "./mcpService.js";
import { P1 } from "./mcpServiceTypes.js";
import { ZOn } from "./mcpUtils.js";
import { Ase, E$, Oyt, X7t } from "./mcp_auth_tool_pb.js";
import { Cp, vp } from "./metricsService.js";
import { eo, ko } from "./opener.js";
import { Ka, jo } from "./productService.js";
import { Xh, im } from "./structuredLog.js";
import { ZZe, gse, mse, nt, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { Euh, Owt, Quh, Zuh, oYi, uyo, zUe } from "./xmo.js";
function zTh(e) {
    if (!e) return "unknown";
    try {
        return new URL(e).hostname;
    } catch  {
        return "unknown";
    }
}
function KTh(e, t) {
    return e.allServers().find((n)=>n.identifier === t || n.name === t)?.url;
}
var YTh, XTh;
export { KTh, XTh, YTh, zTh };
var __wakaru_JQv_initialized = false;
export function JQv() {
if (__wakaru_JQv_initialized) return;
__wakaru_JQv_initialized = true;
"use strict";
x(), X7t(), Jm(), ql(), bn(), la(), tFn(), GX(), dyo(), Cp(), eZ(), ZOn(), Za(), MUe(), ko(), Ka(), im(), YTh = 5e3, XTh = class {
    constructor(e){
        this.context = e, this.handledToolCalls = new Set, this.activeAuthFlowsByServerKey = new Set;
    }
    getAuthFlowKey(e, t) {
        const n = KTh(e, t);
        return n ? `url:${zUe(n)}` : `identifier:${t}`;
    }
    getToolFormer() {
        const t = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === ps.TOOL_FORMER);
        if (!t) throw new Error("ToolFormer not found");
        return t;
    }
    getMcpService() {
        return this.context.instantiationService.invokeFunction((e)=>e.get(P1));
    }
    getOpenerService() {
        return this.context.instantiationService.invokeFunction((e)=>e.get(eo));
    }
    getMetricsService() {
        return this.context.instantiationService.invokeFunction((e)=>e.get(vp));
    }
    getHostedMcpPlacementService() {
        return this.context.instantiationService.invokeFunction((e)=>e.get(B_e));
    }
    resolveHostedRow(e, t) {
        const n = this.getHostedMcpPlacementService();
        if (!n.isRoutingEnabled()) return;
        const i = e.allServers().find((r)=>r.identifier === t || r.name === t);
        return i !== void 0 ? n.serverPlacedRowFor(oYi(i)) : Euh(n.snapshot, {
            identifier: t
        });
    }
    async hostedRowIsFreshlyConnected(e, t, n) {
        if (n.aborted) return !1;
        const i = this.getHostedMcpPlacementService(), r = i.snapshot.fetchedAtMs, s = Kl(this.context.hostedMcpAuthRelistTimeoutMs ?? YTh);
        let o;
        const a = new Promise((l)=>{
            o = ()=>l(), n.addEventListener("abort", o, {
                once: !0
            });
        });
        try {
            await Promise.race([
                i.refresh("mcp_auth_request", {
                    force: !0
                }),
                s,
                a
            ]);
        } finally{
            s.cancel(), o !== void 0 && n.removeEventListener("abort", o);
        }
        if (n.aborted) return !1;
        const c = i.snapshot.fetchedAtMs;
        return c === void 0 || c === r ? !1 : this.resolveHostedRow(e, t)?.status === "connected";
    }
    async handleMcpAuthRequest(e) {
        const t = this.getMcpService(), n = e.args?.serverIdentifier, i = e.args?.toolCallId;
        if (!n || !i) return new E$({
            result: {
                case: "rejected",
                value: new Ase({
                    reason: "Missing serverIdentifier or toolCallId"
                })
            }
        });
        const r = this.getToolFormer(), o = t.statusCache()[n], a = this.resolveHostedRow(t, n);
        if (!o && a === void 0) return new E$({
            result: {
                case: "rejected",
                value: new Ase({
                    reason: `MCP server '${n}' not found`
                })
            }
        });
        if (this.handledToolCalls.has(i)) return new E$({
            result: {
                case: "rejected",
                value: new Ase({
                    reason: "MCP auth already handled"
                })
            }
        });
        const c = this.getAuthFlowKey(t, n);
        if (this.activeAuthFlowsByServerKey.has(c)) return new E$({
            result: {
                case: "rejected",
                value: new Ase({
                    reason: "MCP auth already in progress for this server"
                })
            }
        });
        this.handledToolCalls.add(i), this.activeAuthFlowsByServerKey.add(c);
        const l = this.context.conversationActionManager.signal, u = a !== void 0 ? a.status === "connected" && await this.hostedRowIsFreshlyConnected(t, n, l) : o?.type === "connected";
        if (l.aborted) return this.handledToolCalls.delete(i), this.activeAuthFlowsByServerKey.delete(c), new E$({
            result: {
                case: "rejected",
                value: new Ase({
                    reason: "MCP authentication was canceled"
                })
            }
        });
        const h = new ZZe({
            serverIdentifier: n
        }), p = JSON.stringify({
            serverIdentifier: n
        }), g = r.getOrCreateBubbleId({
            toolCallId: i,
            toolIndex: 0,
            modelCallId: i,
            toolCallType: nt.MCP_AUTH,
            params: {
                case: "mcpAuthParams",
                value: h
            },
            rawArgs: p,
            name: "mcp_auth"
        });
        if (r.setBubbleData(g, {
            tool: nt.MCP_AUTH,
            toolCallId: i,
            name: "mcp_auth",
            rawArgs: p,
            params: h,
            additionalData: {
                alreadyAuthenticated: !1
            }
        }), u) return r.setBubbleData(g, {
            userDecision: "accepted",
            status: "completed",
            additionalData: {
                alreadyAuthenticated: !0
            }
        }), this.handledToolCalls.delete(i), this.activeAuthFlowsByServerKey.delete(c), new E$({
            result: {
                case: "approved",
                value: new Oyt
            }
        });
        const f = r.getBubbleData(g);
        if (f?.userDecision !== void 0) if (this.handledToolCalls.delete(i), f.userDecision === "accepted") try {
            return await this.performAuth(n, g, r);
        } finally{
            this.activeAuthFlowsByServerKey.delete(c);
        }
        else return this.activeAuthFlowsByServerKey.delete(c), new E$({
            result: {
                case: "rejected",
                value: new Ase({
                    reason: "User rejected MCP authentication"
                })
            }
        });
        const v = this.context.composerDataHandle.data.composerId;
        return this.context.trackTrajectoryStopped?.({
            composerId: v,
            invocationID: this.context.generationUUID,
            toolCallId: i,
            stop_category: "needs_user_approval",
            stop_source: "other",
            reason_code: "mcp.needs_approval"
        }), new Promise((b, y)=>{
            let T = !1, E = ()=>{};
            const A = this.context.conversationActionManager.signal, R = ()=>{
                E(), A.removeEventListener("abort", N);
            }, D = (O)=>{
                T || (T = !0, R(), this.handledToolCalls.delete(i), b(O));
            }, P = (O)=>{
                this.activeAuthFlowsByServerKey.delete(c), r.setBubbleData(g, {
                    status: "cancelled",
                    result: new gse({
                        success: !1,
                        message: `Rejected: ${O}`
                    })
                }), D(new E$({
                    result: {
                        case: "rejected",
                        value: new Ase({
                            reason: O
                        })
                    }
                }));
            }, N = ()=>P("MCP authentication was canceled");
            if (E = r.addPendingDecision(g, nt.MCP_AUTH, i, (O)=>{
                if (!T) if (O) T = !0, R(), this.handledToolCalls.delete(i), this.performAuth(n, g, r).then(b, y).finally(()=>{
                    this.activeAuthFlowsByServerKey.delete(c);
                });
                else {
                    const $ = r.getBubbleData(g)?.additionalData?.skipReason === "timeout" ? "MCP authentication timed out" : "User skipped MCP authentication";
                    this.activeAuthFlowsByServerKey.delete(c), D(new E$({
                        result: {
                            case: "rejected",
                            value: new Ase({
                                reason: $
                            })
                        }
                    }));
                }
            }, !0), A.aborted) {
                N();
                return;
            }
            A.addEventListener("abort", N, {
                once: !0
            });
        });
    }
    async performAuth(e, t, n) {
        const i = this.getMcpService(), r = this.resolveHostedRow(i, e);
        if (r !== void 0) return this.performHostedAuth({
            hostedRow: r,
            serverIdentifier: e,
            bubbleId: t,
            toolFormer: n
        });
        const s = this.getOpenerService(), o = this.context.instantiationService.invokeFunction((f)=>f.get(ca)), a = this.getMetricsService(), c = this.context.instantiationService.invokeFunction((f)=>f.get(Xh)), l = this.context.composerDataHandle.data.composerId, u = KTh(i, e), h = await uyo({
            serverIdentifier: e,
            mcpService: i,
            openerService: s,
            metricsService: a,
            analyticsService: o,
            structuredLogService: c,
            metricsSource: "auth_tool",
            analyticsLocation: "composer",
            logSource: "auth_tool",
            isRejected: ()=>n.getBubbleData(t)?.userDecision === "rejected",
            abortSignal: this.context.conversationActionManager.signal,
            onStateUpdate: (f)=>{
                f.phase === "connected" && o.trackEvent("mcp.oauth.connected", {
                    serverName: zTh(u),
                    composerId: l,
                    source: "composer"
                });
            }
        });
        if (h.success) return n.setBubbleData(t, {
            status: "completed",
            result: new gse({
                success: !0,
                message: `Successfully authenticated MCP server: ${e}`
            })
        }), new E$({
            result: {
                case: "approved",
                value: new Oyt
            }
        });
        const p = h.error ?? "MCP authentication failed";
        return h.failureKind === "cancelled" || h.failureKind === "timeout" || h.failureKind === "authTimeout" ? n.setBubbleData(t, {
            status: "cancelled",
            result: new gse({
                success: !1,
                message: `Rejected: ${p}`
            })
        }) : n.setBubbleData(t, {
            status: "error",
            result: new gse({
                success: !1,
                message: `Error: ${p}`
            }),
            error: new mse({
                clientVisibleErrorMessage: p,
                modelVisibleErrorMessage: p
            })
        }), new E$({
            result: {
                case: "rejected",
                value: new Ase({
                    reason: p
                })
            }
        });
    }
    async performHostedAuth(e) {
        const { hostedRow: t, serverIdentifier: n, bubbleId: i, toolFormer: r } = e, s = this.context.composerDataHandle.data.composerId, o = this.context.conversationActionManager.signal, a = ()=>r.getBubbleData(i)?.userDecision === "rejected", c = (v)=>new E$({
                result: {
                    case: "rejected",
                    value: new Ase({
                        reason: v
                    })
                }
            }), l = (v)=>(r.setBubbleData(i, {
                status: "cancelled",
                result: new gse({
                    success: !1,
                    message: `Rejected: ${v}`
                })
            }), c(v)), u = (v)=>(r.setBubbleData(i, {
                status: "error",
                result: new gse({
                    success: !1,
                    message: `Error: ${v}`
                }),
                error: new mse({
                    clientVisibleErrorMessage: v,
                    modelVisibleErrorMessage: v
                })
            }), c(v));
        if (!Owt(t)) return u(`${oVt} to keep using this connector.`);
        const { analyticsService: h, placementService: p, loginServices: g } = this.context.instantiationService.invokeFunction((v)=>({
                analyticsService: v.get(ca),
                placementService: v.get(B_e),
                loginServices: {
                    cursorAuthenticationService: v.get(na),
                    cloudMcpOAuthLoopbackService: v.get(DUe),
                    openerService: v.get(eo),
                    productService: v.get(jo)
                }
            }));
        this.getMetricsService().increment({
            stat: "mcp.login_click",
            tags: {
                source: "auth_tool",
                placement: "server"
            }
        });
        const f = await Quh({
            row: t,
            services: g,
            abortSignal: o,
            isRejected: a,
            onOpened: ({ authUrl: v })=>{
                r.setBubbleData(i, {
                    additionalData: {
                        hostedAuthUrl: v
                    }
                });
            }
        });
        switch(f.kind){
            case "completed":
                return await Zuh(p, "mcp_auth_completed", this.context.hostedMcpAuthRelistTimeoutMs), h.trackEvent("mcp.oauth.connected", {
                    serverName: zTh(t.url),
                    composerId: s,
                    source: "composer"
                }), r.setBubbleData(i, {
                    status: "completed",
                    result: new gse({
                        success: !0,
                        message: `Successfully authenticated MCP server: ${n}`
                    })
                }), new E$({
                    result: {
                        case: "approved",
                        value: new Oyt
                    }
                });
            case "openFailed":
                return u(`Failed to open authorization URL: ${f.error}`);
            case "failed":
                return u(f.error);
            case "rejected":
                return l("User skipped MCP authentication");
            case "aborted":
                return l("MCP authentication was canceled");
            case "timeout":
                return l("MCP authentication timed out");
        }
    }
};

}
