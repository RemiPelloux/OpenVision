import { Wd } from "./Iwo.js";
import { fpg, gpg } from "./Ycg.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { qn } from "./async.js";
import { Rs, ss } from "./authenticationService.js";
import { Kqe, g4e } from "./cloudMcpOAuthLoopbackService.js";
import { mo, tf } from "./composer_pb.js";
import { EXm, R4e, TXm, bns, iXm, izt, nTi } from "./gYa.js";
import { ZCi, txn } from "./hostedMcpLogin.js";
import { UPe, dle } from "./hostedMcpPlacementService.js";
import { iTi } from "./mcpConnectFlow.js";
import { gV } from "./mcpService.js";
import { N0 } from "./mcpServiceTypes.js";
import { VCi } from "./mcpUtils.js";
import { Cmn, Lve, pY, q4t } from "./mcp_auth_tool_pb.js";
import { Uh, ip } from "./metricsService.js";
import { kc, qc } from "./opener.js";
import { fc, hu } from "./productService.js";
import { Cm, wh } from "./structuredLog.js";
import { Ct, Dve, Mve, Pu, q_t } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
var vpg, _pg;
export { _pg, vpg };
var __wakaru_Qyk_initialized = false;
export function Qyk() {
if (__wakaru_Qyk_initialized) return;
__wakaru_Qyk_initialized = true;
"use strict";
E(), Cmn(), tf(), Pu(), qn(), Ss(), ZCi(), dle(), iTi(), ip(), gV(), VCi(), Rs(), Kqe(), qc(), hu(), Cm(), vpg = 5e3, _pg = class {
    constructor(t){
        this.context = t, this.handledToolCalls = new Set, this.activeAuthFlowsByServerKey = new Set;
    }
    getAuthFlowKey(t, e) {
        const n = fpg(t, e);
        return n ? `url:${R4e(n)}` : `identifier:${e}`;
    }
    getToolFormer() {
        const e = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === mo.TOOL_FORMER);
        if (!e) throw new Error("ToolFormer not found");
        return e;
    }
    getMcpService() {
        return this.context.instantiationService.invokeFunction((t)=>t.get(N0));
    }
    getOpenerService() {
        return this.context.instantiationService.invokeFunction((t)=>t.get(kc));
    }
    getMetricsService() {
        return this.context.instantiationService.invokeFunction((t)=>t.get(Uh));
    }
    getHostedMcpPlacementService() {
        return this.context.instantiationService.invokeFunction((t)=>t.get(UPe));
    }
    resolveHostedRow(t, e) {
        const n = this.getHostedMcpPlacementService();
        if (!n.isRoutingEnabled()) return;
        const i = t.allServers().find((r)=>r.identifier === e || r.name === e);
        return i !== void 0 ? n.serverPlacedRowFor(bns(i)) : iXm(n.snapshot, {
            identifier: e
        });
    }
    async hostedRowIsFreshlyConnected(t, e, n) {
        if (n.aborted) return !1;
        const i = this.getHostedMcpPlacementService(), r = i.snapshot.fetchedAtMs, s = Wd(this.context.hostedMcpAuthRelistTimeoutMs ?? vpg);
        let o;
        const a = new Promise((c)=>{
            o = ()=>c(), n.addEventListener("abort", o, {
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
        const l = i.snapshot.fetchedAtMs;
        return l === void 0 || l === r ? !1 : this.resolveHostedRow(t, e)?.status === "connected";
    }
    async handleMcpAuthRequest(t) {
        const e = this.getMcpService(), n = t.args?.serverIdentifier, i = t.args?.toolCallId;
        if (!n || !i) return new pY({
            result: {
                case: "rejected",
                value: new Lve({
                    reason: "Missing serverIdentifier or toolCallId"
                })
            }
        });
        const r = this.getToolFormer(), o = e.statusCache()[n], a = this.resolveHostedRow(e, n);
        if (!o && a === void 0) return new pY({
            result: {
                case: "rejected",
                value: new Lve({
                    reason: `MCP server '${n}' not found`
                })
            }
        });
        if (this.handledToolCalls.has(i)) return new pY({
            result: {
                case: "rejected",
                value: new Lve({
                    reason: "MCP auth already handled"
                })
            }
        });
        const l = this.getAuthFlowKey(e, n);
        if (this.activeAuthFlowsByServerKey.has(l)) return new pY({
            result: {
                case: "rejected",
                value: new Lve({
                    reason: "MCP auth already in progress for this server"
                })
            }
        });
        this.handledToolCalls.add(i), this.activeAuthFlowsByServerKey.add(l);
        const c = this.context.conversationActionManager.signal, u = a !== void 0 ? a.status === "connected" && await this.hostedRowIsFreshlyConnected(e, n, c) : o?.type === "connected";
        if (c.aborted) return this.handledToolCalls.delete(i), this.activeAuthFlowsByServerKey.delete(l), new pY({
            result: {
                case: "rejected",
                value: new Lve({
                    reason: "MCP authentication was canceled"
                })
            }
        });
        const d = new q_t({
            serverIdentifier: n
        }), h = JSON.stringify({
            serverIdentifier: n
        }), p = r.getOrCreateBubbleId({
            toolCallId: i,
            toolIndex: 0,
            modelCallId: i,
            toolCallType: Ct.MCP_AUTH,
            params: {
                case: "mcpAuthParams",
                value: d
            },
            rawArgs: h,
            name: "mcp_auth"
        });
        if (r.setBubbleData(p, {
            tool: Ct.MCP_AUTH,
            toolCallId: i,
            name: "mcp_auth",
            rawArgs: h,
            params: d,
            additionalData: {
                alreadyAuthenticated: !1
            }
        }), u) return r.setBubbleData(p, {
            userDecision: "accepted",
            status: "completed",
            additionalData: {
                alreadyAuthenticated: !0
            }
        }), this.handledToolCalls.delete(i), this.activeAuthFlowsByServerKey.delete(l), new pY({
            result: {
                case: "approved",
                value: new q4t
            }
        });
        const g = r.getBubbleData(p);
        if (g?.userDecision !== void 0) if (this.handledToolCalls.delete(i), g.userDecision === "accepted") try {
            return await this.performAuth(n, p, r);
        } finally{
            this.activeAuthFlowsByServerKey.delete(l);
        }
        else return this.activeAuthFlowsByServerKey.delete(l), new pY({
            result: {
                case: "rejected",
                value: new Lve({
                    reason: "User rejected MCP authentication"
                })
            }
        });
        const f = this.context.composerDataHandle.data.composerId;
        return this.context.trackTrajectoryStopped?.({
            composerId: f,
            invocationID: this.context.generationUUID,
            toolCallId: i,
            stop_category: "needs_user_approval",
            stop_source: "other",
            reason_code: "mcp.needs_approval"
        }), new Promise((_, b)=>{
            let y = !1, S = ()=>{};
            const k = this.context.conversationActionManager.signal, C = ()=>{
                S(), k.removeEventListener("abort", A);
            }, T = (P)=>{
                y || (y = !0, C(), this.handledToolCalls.delete(i), _(P));
            }, I = (P)=>{
                this.activeAuthFlowsByServerKey.delete(l), r.setBubbleData(p, {
                    status: "cancelled",
                    result: new Dve({
                        success: !1,
                        message: `Rejected: ${P}`
                    })
                }), T(new pY({
                    result: {
                        case: "rejected",
                        value: new Lve({
                            reason: P
                        })
                    }
                }));
            }, A = ()=>I("MCP authentication was canceled");
            if (S = r.addPendingDecision(p, Ct.MCP_AUTH, i, (P)=>{
                if (!y) if (P) y = !0, C(), this.handledToolCalls.delete(i), this.performAuth(n, p, r).then(_, b).finally(()=>{
                    this.activeAuthFlowsByServerKey.delete(l);
                });
                else {
                    const N = r.getBubbleData(p)?.additionalData?.skipReason === "timeout" ? "MCP authentication timed out" : "User skipped MCP authentication";
                    this.activeAuthFlowsByServerKey.delete(l), T(new pY({
                        result: {
                            case: "rejected",
                            value: new Lve({
                                reason: N
                            })
                        }
                    }));
                }
            }, !0), k.aborted) {
                A();
                return;
            }
            k.addEventListener("abort", A, {
                once: !0
            });
        });
    }
    async performAuth(t, e, n) {
        const i = this.getMcpService(), r = this.resolveHostedRow(i, t);
        if (r !== void 0) return this.performHostedAuth({
            hostedRow: r,
            serverIdentifier: t,
            bubbleId: e,
            toolFormer: n
        });
        const s = this.getOpenerService(), o = this.context.instantiationService.invokeFunction((g)=>g.get(Qr)), a = this.getMetricsService(), l = this.context.instantiationService.invokeFunction((g)=>g.get(wh)), c = this.context.composerDataHandle.data.composerId, u = fpg(i, t), d = await nTi({
            serverIdentifier: t,
            mcpService: i,
            openerService: s,
            metricsService: a,
            analyticsService: o,
            structuredLogService: l,
            metricsSource: "auth_tool",
            analyticsLocation: "composer",
            logSource: "auth_tool",
            isRejected: ()=>n.getBubbleData(e)?.userDecision === "rejected",
            abortSignal: this.context.conversationActionManager.signal,
            onStateUpdate: (g)=>{
                g.phase === "connected" && o.trackEvent("mcp.oauth.connected", {
                    serverName: gpg(u),
                    composerId: c,
                    source: "composer"
                });
            }
        });
        if (d.success) return n.setBubbleData(e, {
            status: "completed",
            result: new Dve({
                success: !0,
                message: `Successfully authenticated MCP server: ${t}`
            })
        }), new pY({
            result: {
                case: "approved",
                value: new q4t
            }
        });
        const h = d.error ?? "MCP authentication failed";
        return d.failureKind === "cancelled" || d.failureKind === "timeout" || d.failureKind === "authTimeout" ? n.setBubbleData(e, {
            status: "cancelled",
            result: new Dve({
                success: !1,
                message: `Rejected: ${h}`
            })
        }) : n.setBubbleData(e, {
            status: "error",
            result: new Dve({
                success: !1,
                message: `Error: ${h}`
            }),
            error: new Mve({
                clientVisibleErrorMessage: h,
                modelVisibleErrorMessage: h
            })
        }), new pY({
            result: {
                case: "rejected",
                value: new Lve({
                    reason: h
                })
            }
        });
    }
    async performHostedAuth(t) {
        const { hostedRow: e, serverIdentifier: n, bubbleId: i, toolFormer: r } = t, s = this.context.composerDataHandle.data.composerId, o = this.context.conversationActionManager.signal, a = ()=>r.getBubbleData(i)?.userDecision === "rejected", l = (f)=>new pY({
                result: {
                    case: "rejected",
                    value: new Lve({
                        reason: f
                    })
                }
            }), c = (f)=>(r.setBubbleData(i, {
                status: "cancelled",
                result: new Dve({
                    success: !1,
                    message: `Rejected: ${f}`
                })
            }), l(f)), u = (f)=>(r.setBubbleData(i, {
                status: "error",
                result: new Dve({
                    success: !1,
                    message: `Error: ${f}`
                }),
                error: new Mve({
                    clientVisibleErrorMessage: f,
                    modelVisibleErrorMessage: f
                })
            }), l(f));
        if (!izt(e)) return u(`${txn} to keep using this connector.`);
        const { analyticsService: d, placementService: h, loginServices: p } = this.context.instantiationService.invokeFunction((f)=>({
                analyticsService: f.get(Qr),
                placementService: f.get(UPe),
                loginServices: {
                    cursorAuthenticationService: f.get(ss),
                    cloudMcpOAuthLoopbackService: f.get(g4e),
                    openerService: f.get(kc),
                    productService: f.get(fc)
                }
            }));
        this.getMetricsService().increment({
            stat: "mcp.login_click",
            tags: {
                source: "auth_tool",
                placement: "server"
            }
        });
        const g = await EXm({
            row: e,
            services: p,
            abortSignal: o,
            isRejected: a,
            onOpened: ({ authUrl: f })=>{
                r.setBubbleData(i, {
                    additionalData: {
                        hostedAuthUrl: f
                    }
                });
            }
        });
        switch(g.kind){
            case "completed":
                return await TXm(h, "mcp_auth_completed", this.context.hostedMcpAuthRelistTimeoutMs), d.trackEvent("mcp.oauth.connected", {
                    serverName: gpg(e.url),
                    composerId: s,
                    source: "composer"
                }), r.setBubbleData(i, {
                    status: "completed",
                    result: new Dve({
                        success: !0,
                        message: `Successfully authenticated MCP server: ${n}`
                    })
                }), new pY({
                    result: {
                        case: "approved",
                        value: new q4t
                    }
                });
            case "openFailed":
                return u(`Failed to open authorization URL: ${g.error}`);
            case "failed":
                return u(g.error);
            case "rejected":
                return c("User skipped MCP authentication");
            case "aborted":
                return c("MCP authentication was canceled");
            case "timeout":
                return c("MCP authentication timed out");
        }
    }
};

}
