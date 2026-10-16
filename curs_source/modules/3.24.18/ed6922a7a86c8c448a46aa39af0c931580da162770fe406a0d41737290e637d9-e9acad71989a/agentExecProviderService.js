import { SPd, lf } from "./A3u.js";
import { S_, qh } from "./De_3.js";
import { Ae, Fo, Pk, S, Se, bt, ve, we, wi } from "./HVr.js";
import { Op, ym } from "./accessibility.js";
import { Iu, Kn } from "./actionCommonCategories.js";
import { ei, ie, pt } from "./actions_2.js";
import { R1, pw } from "./adminSettingsService.js";
import { G0o, h0h } from "./agentExecProviderServiceId.js";
import { K1e, N3n, y1o, yjt } from "./agentProviderWaitTimeout.js";
import { L3n, _jt } from "./agentSkills.js";
import { Ptt, wQi } from "./agentStreamMetadataKey.js";
import { Za, na } from "./authenticationService.js";
import { KDd, wWi } from "./background-shell.ts";
import { B0h, zXv } from "./bidiStreamHandlerRegistry.js";
import { JDd } from "./canvas-diagnostics.ts";
import { H1h, OQi } from "./cloudSubagentRunner.js";
import { Rs } from "./code_3.js";
import { _1h, v1o } from "./codebaseReference.js";
import { $n, vi } from "./commands.js";
import { Att, uLe } from "./composerEffectiveAllowlistService.js";
import { AA, xC } from "./composerModesServiceTypes.js";
import { Qo } from "./connect-error.js";
import { hg } from "./connect.js";
import { of, oy } from "./contextkeys.js";
import { eMd } from "./conversation-search.ts";
import { DCt, bjt } from "./conversationSearch.js";
import { H0h, YXv } from "./conversationSearchExecutor.js";
import { EDn, TDn } from "./conversation_search_exec_pb.js";
import { yZv } from "./counterObservable.js";
import { QM, R2 } from "./cursorIgnoreService.js";
import { Bw, LR } from "./cursorRules.js";
import { tMd } from "./delete.ts";
import { W0h, n1o } from "./diagnosticsExecutor.js";
import { iMd } from "./diagnostics_2.ts";
import { Vr, Yi } from "./environmentService.js";
import { Lse, W0e, _X } from "./exec_pb.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { Fi, Ii } from "./files.js";
import { rMd } from "./git-diff_2.ts";
import { kk, r0 } from "./gitContextService.js";
import { G0h, XXv } from "./gitDiffExecutor.js";
import { RGt, bOn } from "./globalCommandsService.js";
import { sMd } from "./grep.ts";
import { GMd } from "./hook-executor.ts";
import { CX } from "./index_11.ts";
import { Gp } from "./index_3.ts";
import { Ze, _t } from "./instantiation.js";
import { h8e, xtt } from "./knowledgeBaseService.js";
import { Qn, Wn } from "./log.js";
import { IWi } from "./ls.ts";
import { V0h, ZXv } from "./lsExecutor.js";
import { $_, eT } from "./markers.js";
import { QMd } from "./mcp-allowlist-precheck.ts";
import { MR, P1 } from "./mcpServiceTypes.js";
import { KMd, XMd, YMd, zMd } from "./mcp_2.ts";
import { Cp, vp } from "./metricsService.js";
import { Ll, fc } from "./model.js";
import { QS, i0 } from "./modelConfigServiceTypes.js";
import { rt } from "./nls.js";
import { D_, Ow } from "./notebookService.js";
import { di, ji, pi } from "./notification.js";
import { HU, wde } from "./observableValue.js";
import { fu, zl } from "./pathService.js";
import { Bwt, ttt } from "./pushRequestContextService.js";
import { Bg, mn, qe } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { AWi } from "./read.ts";
import { q0h, tZv } from "./readExecutor.js";
import { a_e } from "./request-context.ts";
import { IQi, e1h } from "./requestContextExecutor.js";
import { Yro, qDd } from "./resource-provider.ts";
import { iPd } from "./shell-allowlist-precheck.ts";
import { aso } from "./shell-control.ts";
import { rkt } from "./shell-stream.ts";
import { PHt } from "./shell.ts";
import { a1h, c1h, fZv, o1h } from "./shellExecutor.js";
import { Vn, yn } from "./storage_2.js";
import { Xh, im } from "./structuredLog.js";
import { TPd } from "./subagent-await.ts";
import { vso } from "./subagent-control.ts";
import { CPd } from "./subagent.ts";
import { jQi } from "./subagentComposerService.js";
import { wtt } from "./subagentComposerServiceInterface.js";
import { bZv, f1o, g1o, l1h } from "./subagentExecutor.js";
import { $Me, N$t, N8i, NMn, O8i, aJe, fYs, gYs, mYs, oJe, pYs, sJe, sSt } from "./subagent_exec_pb.js";
import { U_e, jPe } from "./subagentsService.js";
import { $h, np } from "./telemetry.js";
import { Gf, ng } from "./terminal.js";
import { $v, M_ } from "./textResourceConfiguration.js";
import { Ag, Xp } from "./textfiles.js";
import { RQi, _1o } from "./trackedStateSnapshotService.js";
import { x } from "./tslib.es6.js";
import { Ebn, hu, io, vk } from "./utils_pb.js";
import { RPd } from "./web-fetch-allowlist-precheck.ts";
import { mZv, r1h } from "./workbenchRequestContextExecutor.js";
import { Jn, ci } from "./workspace.js";
import { LHt } from "./write.ts";
import { rZv, t1h } from "./writeExecutor.js";
function u1h(e) {
    return {
        execute: async (t, n)=>e.forceBackgroundByToolCallId(n.toolCallId)
    };
}
function d1h(e) {
    return {
        execute: async (t, n)=>{
            try {
                const i = await e.awaitBackgroundSubagentBounded({
                    composerId: n.agentId,
                    timeoutMs: n.timeoutMs,
                    abortSignal: t.signal
                });
                switch(i.status){
                    case "completed":
                        return i.result.success ? new aJe({
                            result: {
                                case: "complete",
                                value: new mYs({
                                    agentId: i.result.composerId || n.agentId,
                                    transcriptPath: i.transcriptPath,
                                    finalMessage: i.result.finalMessage,
                                    toolCallCount: i.result.toolCallCount ?? 0
                                })
                            }
                        }) : new aJe({
                            result: {
                                case: "error",
                                value: new NMn({
                                    agentId: i.result.composerId || n.agentId,
                                    error: i.result.error ?? "Unknown subagent error"
                                })
                            }
                        });
                    case "stillRunning":
                        return new aJe({
                            result: {
                                case: "stillRunning",
                                value: new gYs({
                                    agentId: i.agentId,
                                    transcriptPath: i.transcriptPath
                                })
                            }
                        });
                    case "notFound":
                        return new aJe({
                            result: {
                                case: "notFound",
                                value: new fYs({
                                    agentId: i.agentId
                                })
                            }
                        });
                }
            } catch (i) {
                return new aJe({
                    result: {
                        case: "error",
                        value: new NMn({
                            agentId: n.agentId,
                            error: Bg(i)
                        })
                    }
                });
            }
        }
    };
}
function b1o(e) {
    return e < 0 ? "never" : e < 6e4 ? "lt_60s" : e < 9e5 ? "lt_15m" : e < 72e5 ? "lt_2h" : "gte_2h";
}
function SZv(e) {
    DQi = e;
}
function kZv() {
    return DQi;
}
function wZv() {
    return new Error(T1h);
}
function CZv(e) {
    return e?.aborted ? Promise.reject(e.reason ?? new Error("Aborted")) : new Promise((t, n)=>{
        let i;
        const r = ()=>{
            clearTimeout(i), e?.removeEventListener("abort", r), n(e?.reason ?? new Error("Aborted"));
        };
        i = setTimeout(()=>{
            e?.removeEventListener("abort", r), t();
        }, C1h), e?.addEventListener("abort", r, {
            once: !0
        });
    });
}
function y1h() {
    const e = S(12209, null), t = S(12210, null), n = new vk({
        error: io.EXTENSION_HOST_TIMEOUT,
        details: {
            title: e,
            detail: t,
            isRetryable: !1,
            shouldShowImmediateError: !0,
            buttons: [
                {
                    label: S(12211, null),
                    action: {
                        case: "reloadWindow",
                        value: new Ebn
                    }
                }
            ]
        }
    });
    return new Qo(e, Rs.DeadlineExceeded, void 0, [
        n
    ]);
}
function S1h() {
    const e = S(12212, null), t = S(12213, null), n = new vk({
        error: io.EXTENSION_HOST_TIMEOUT,
        details: {
            title: e,
            detail: t,
            isRetryable: !1,
            shouldShowImmediateError: !0,
            buttons: [
                {
                    label: S(12214, null),
                    action: {
                        case: "reloadWindow",
                        value: new Ebn
                    }
                }
            ]
        }
    });
    return new Qo(e, Rs.DeadlineExceeded, void 0, [
        n
    ]);
}
function TZv(e) {
    const t = e.message;
    if (t.value !== void 0 && "toolCallId" in t.value) return t.value.toolCallId;
}
var k1o, w1o, u0, k1h, w1h, boe, C1h, T1h, C1o, DQi, E1h, MQi, x1h;
export { C1h, C1o, CZv, DQi, E1h, MQi, S1h, SZv, T1h, TZv, b1o, boe, d1h, k1h, k1o, kZv, u0, u1h, w1h, w1o, wZv, x1h, y1h };
var __wakaru_Xde_initialized = false;
export function Xde() {
if (__wakaru_Xde_initialized) return;
__wakaru_Xde_initialized = true;
"use strict";
x(), CX(), Gp(), wQi(), wQi(), _X(), EDn(), $Me(), $Me(), hg(), hu(), Fo(), bt(), Se(), wde(), Ll(), M_(), Ag(), rt(), Iu(), ei(), of(), Fi(), vi(), Pn(), Ze(), Qn(), Op(), $_(), Ha(), Vn(), np(), ji(), ci(), Att(), AA(), Ow(), ng(), Vr(), R2(), fu(), R1(), Za(), zXv(), YXv(), W0h(), XXv(), ZXv(), tZv(), e1h(), rZv(), mZv(), fZv(), jQi(), H1h(), bZv(), Bw(), RGt(), i0(), Bwt(), jPe(), r0(), MR(), Cp(), _1h(), qs(), L3n(), _1o(), im(), bjt(), xtt(), y1o(), h0h(), yZv(), k1o = (e, t)=>(t = Symbol[e]) ? t : Symbol.for("Symbol." + e), w1o = (e)=>{
    throw TypeError(e);
}, u0 = (e, t)=>(n, i)=>t(n, i, e), k1h = (e, t, n)=>{
    if (t != null) {
        typeof t != "object" && typeof t != "function" && w1o("Object expected");
        var i, r;
        n && (i = t[k1o("asyncDispose")]), i === void 0 && (i = t[k1o("dispose")], n && (r = i)), typeof i != "function" && w1o("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), e.push([
            n,
            i,
            t
        ]);
    } else n && e.push([
        n
    ]);
    return t;
}, w1h = (e, t, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, c, l) {
        return l = Error(c), l.name = "SuppressedError", l.error = o, l.suppressed = a, l;
    }, r = (o)=>t = n ? new i(o, t, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = e.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (c)=>(r(c), s()));
        } catch (c) {
            r(c);
        }
        if (n) throw t;
    };
    return s();
}, boe = G0o, C1h = 2e4, T1h = "Command failed to spawn: Service temporarily unavailable. This may be temporary; try again.", C1o = !1, DQi = !1, E1h = class {
    constructor(e){
        this.session = e, this.nextId = 0, this.toolCallIdToCancel = new Map, this._drainCallbacks = [];
    }
    async *createExecInstance(e, t) {
        const n = this.nextId++, i = t(n), r = TZv(i), [s, o] = e.withCancel();
        r && this.toolCallIdToCancel.set(r, o);
        try {
            const a = wi.wrap(i.toBinary()), c = e.get(Ptt);
            for await (const l of this.session.createStream(c ?? {
                conversationId: "",
                composerId: "",
                requestId: "",
                modelName: ""
            }, a, s.signal)){
                const u = l.buffer, h = String.fromCharCode(u[0]), p = new Uint8Array(u.subarray(1));
                if (h === "M") {
                    yield W0e.fromBinary(p);
                    continue;
                }
                if (h !== "C") throw new Error(`Invalid message prefix ${h}`);
                const g = Lse.fromBinary(p);
                if (g.message.case === "streamClose") break;
                if (g.message.case === "throw") {
                    const f = new Error(g.message.value.error);
                    throw g.message.value.stackTrace && (f.stack = g.message.value.stackTrace), g.message.value.errorCode === "AGENT_EXEC_STREAM_START_TIMEOUT" && (f.name = "AgentExecStreamStartTimeoutError"), f;
                }
            }
        } finally{
            if (r && this.toolCallIdToCancel.delete(r), r && this._drainCallbacks.length > 0) {
                const a = this._drainCallbacks.splice(0);
                for (const c of a)c();
            }
        }
    }
    async cancelByToolCallId(e) {
        const t = this.toolCallIdToCancel.get(e);
        t && t();
    }
    _waitForInFlightToolCalls(e) {
        return e() === 0 ? Promise.resolve() : new Promise((n)=>{
            const i = ()=>{
                if (e() === 0) {
                    n();
                    return;
                }
                this._drainCallbacks.push(i);
            };
            this._drainCallbacks.push(i);
        });
    }
    waitForInFlightToolCalls() {
        return this._waitForInFlightToolCalls(()=>this.toolCallIdToCancel.size);
    }
    waitForOtherInFlightToolCalls(e) {
        return this._waitForInFlightToolCalls(()=>this.toolCallIdToCancel.has(e) ? this.toolCallIdToCancel.size - 1 : this.toolCallIdToCancel.size);
    }
    dispose() {
        this.session.dispose();
    }
}, MQi = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v, b, y, T, E, A, R, D, P, N, O, F, H, $, W, G, q, z, X, Y, Z, K, J){
        super(), this.markerService = e, this.workspaceService = t, this.pathService = n, this.fileService = i, this.terminalService = r, this.modelService = s, this.storageService = o, this.reactiveStorageService = a, this.adminSettingsService = c, this.composerModesService = l, this.composerEffectiveAllowlistService = u, this.logService = h, this.cursorIgnoreService = p, this.notebookService = g, this.subagentComposerService = f, this.environmentService = v, this.commandService = b, this.textResourceConfigurationService = y, this.textFileService = T, this.cursorRulesService = E, this.pushRequestContextService = A, this.subagentsService = R, this.gitContextService = D, this.mcpService = P, this.codebaseReferenceService = N, this.experimentService = O, this.agentSkillsService = F, this.trackedStateSnapshotService = H, this.structuredLogService = $, this.telemetryService = W, this.instantiationService = G, this.metricsService = q, this.conversationSearchService = z, this.knowledgeBaseService = X, this.cursorAuthenticationService = Y, this.accessibilityService = Z, this.modelConfigService = K, this.globalCommandsService = J, this._onDidFileChange = this._register(new ve), this.onDidFileChange = this._onDidFileChange.event, this._handlerRegistry = new B0h, this._localAgentRuntimeHandler = new HU;
    }
    registerHandler(e) {
        return this._handlerRegistry.register(e, e.remoteAuthority);
    }
    registerLocalAgentRuntimeHandler(e) {
        return this._localAgentRuntimeHandler.set(e);
    }
    async waitForProviderRegistration(e, t) {
        var n = [];
        try {
            const s = k1h(n, t ? S_(t.withName("agentExec.waitForProviderRegistration")) : void 0);
            for(let o = 1; o <= K1e; o++){
                const c = o > 1 ? N3n : yjt, l = AbortSignal.timeout(c), u = e ? AbortSignal.any([
                    e,
                    l
                ]) : l;
                try {
                    await lf(this._handlerRegistry.legacyHandlerObservable, u);
                    return;
                } catch (h) {
                    if (e?.aborted) throw h;
                    if (l.aborted && o < K1e) {
                        this.logService.warn(`[agent-exec] Provider registration timed out (attempt ${o}/${K1e}, timeout=${c}ms), retrying`);
                        continue;
                    }
                    throw l.aborted ? (this._emitProviderWaitTimeoutDiagnostics(s), S1h()) : h;
                }
            }
        } catch (s) {
            var i = s, r = !0;
        } finally{
            w1h(n, i, r);
        }
    }
    getProviderWaitDiagnostics() {
        const e = this._handlerRegistry.getDiagnostics(), t = e.recentMutations[e.recentMutations.length - 1]?.atMs, n = t !== void 0 ? Date.now() - t : -1;
        return {
            legacyState: e.legacy.state,
            hadPerauthFulfilled: e.perAuthority.some((i)=>i.state === "fulfilled"),
            msSinceLastMutationBucket: b1o(n),
            legacyGeneration: e.legacy.generation,
            perAuthorityCount: e.perAuthority.length,
            perAuthoritySummary: e.perAuthority.map((i)=>`${i.authorityKind}:${i.state[0]}${i.generation}`).join(","),
            msSinceLastMutation: n,
            recentMutationsJson: JSON.stringify(e.recentMutations)
        };
    }
    _emitProviderWaitTimeoutDiagnostics(e) {
        const t = this._handlerRegistry.getDiagnostics(), n = t.recentMutations[t.recentMutations.length - 1]?.atMs, i = n !== void 0 ? Date.now() - n : -1, r = t.perAuthority.some((o)=>o.state === "fulfilled"), s = b1o(i);
        e && (e.span.setAttribute("error.type", "EXTENSION_HOST_TIMEOUT"), e.span.setAttribute("agent_exec.registry.legacy_state", t.legacy.state), e.span.setAttribute("agent_exec.registry.legacy_generation", String(t.legacy.generation)), e.span.setAttribute("agent_exec.registry.had_perauth_handler", String(r)), e.span.setAttribute("agent_exec.registry.perauth_summary", t.perAuthority.map((o)=>`${o.authorityKind}:${o.state[0]}${o.generation}`).join(",")), e.span.setAttribute("agent_exec.registry.ms_since_last_mutation", String(i)), e.span.setAttribute("agent_exec.registry.recent_mutations_json", JSON.stringify(t.recentMutations))), this.metricsService.increment({
            stat: "cursor.agent_exec.provider_wait_timeout",
            tags: {
                legacy_state: t.legacy.state,
                had_perauth_handler: String(r),
                ms_since_last_register_bucket: s
            }
        });
    }
    async spawn(e, t) {
        if (C1o) throw wZv();
        let n;
        const i = this._handlerRegistry.legacyHandlerObservable.getState();
        if (i.state === "fulfilled") n = i.value;
        else if (i.state === "rejected") throw i.error;
        if (!n) throw new Error("Handler not found");
        return n.spawn(e, t);
    }
    createRemoteAccessor(e, t, n, i, r, s, o, a) {
        const c = a === void 0 ? this._handlerRegistry.legacyHandlerObservable : this._handlerRegistry.resolveObservable(a);
        let l;
        const u = new HU, h = (K)=>{
            l && l.dispose();
            const J = K.createSession(e, t, n, i, r, s);
            l = J, u.set(J);
        }, p = c.onChange((K)=>{
            switch(K.state){
                case "pending":
                    u.clear();
                    break;
                case "fulfilled":
                    h(K.value);
                    break;
                case "rejected":
                    u.error(K.error);
                    break;
                default:
                    {
                        const J = K;
                        throw new Error(`Unhandled state: ${J}`);
                    }
            }
        }), g = c.getState();
        g.state === "fulfilled" ? h(g.value) : g.state === "rejected" && u.error(g.error);
        const f = u, v = this.logService, b = this._handlerRegistry, y = new E1h({
            createStream: (K, J, ne)=>(async function*() {
                    for(let se = 1; se <= K1e; se++){
                        const re = se > 1, ue = re ? N3n : yjt, ce = re ? void 0 : o.createDelayedLease(2e3), de = AbortSignal.timeout(ue), le = ne ? AbortSignal.any([
                            ne,
                            de
                        ]) : de;
                        let ye = !1, _e = !1;
                        try {
                            let me;
                            try {
                                me = await lf(f, le);
                            } catch (Ce) {
                                if (ne?.aborted) throw Ce;
                                if (de.aborted) {
                                    const xe = a === void 0 ? "any" : a ?? "local", Le = b.getDiagnostics().perAuthority, Be = Le.map((Ge)=>`${Ge.unscrubbedKey}:${Ge.state}`).join(", "), je = a !== void 0 && b.hasNeverRegistered(a) && Le.some((Ge)=>Ge.state === "fulfilled");
                                    if (se < K1e && !je) {
                                        v.warn(`[agent-exec] Session acquisition timed out (attempt ${se}/${K1e}, timeout=${ue}ms), retrying`);
                                        continue;
                                    }
                                    throw v.warn(`[agent-exec] Session acquisition gave up after ${se} attempt(s)${je ? "; pinned slot never registered while another handler is live" : ""} (pinned=${xe}, slots=[${Be}])`), _e = !0, S1h();
                                }
                                throw Ce;
                            }
                            if (ne?.aborted) return;
                            if (C1o) throw y1h();
                            if (DQi) {
                                await CZv(ne);
                                const Ce = y1h();
                                throw Ce.name = "AgentExecStreamStartTimeoutError", Ce;
                            }
                            try {
                                for await (const Ce of me.createStream(K, J, ne))ye = !0, yield Ce;
                            } catch (Ce) {
                                throw Ce instanceof Qo && Ce.code === Rs.DeadlineExceeded && (Ce.name = "AgentExecStreamStartTimeoutError"), Ce;
                            }
                            return;
                        } catch (me) {
                            if (ne?.aborted) throw me;
                            if (!_e && !ye && se < K1e && me instanceof Qo && me.code === Rs.DeadlineExceeded) {
                                v.warn(`[agent-exec] Stream creation failed with DeadlineExceeded (attempt ${se}/${K1e}), retrying`);
                                continue;
                            }
                            throw me;
                        } finally{
                            ce?.dispose();
                        }
                    }
                })(),
            dispose: ()=>{
                l && l.dispose(), p.dispose();
            }
        }), T = new qDd(y, [
            JDd,
            tMd,
            sMd,
            IWi,
            zMd,
            QMd,
            iPd,
            RPd,
            XMd,
            KMd,
            YMd,
            AWi,
            a_e,
            PHt,
            rkt,
            aso,
            wWi,
            KDd,
            LHt,
            GMd
        ]), E = new n1o(this.markerService, this.workspaceService, this.fileService, this.modelService, this.logService), A = new G0h(this.gitContextService), R = new V0h(T.get(IWi), this.terminalService, this.fileService, this.workspaceService, this.pathService, this.cursorIgnoreService), D = new q0h(T.get(AWi), this.modelService, this.workspaceService, this.cursorIgnoreService, this.notebookService, this.storageService, this.textResourceConfigurationService, this.textFileService), P = new t1h(T.get(LHt), this.workspaceService, this.textResourceConfigurationService, this.textFileService), N = new r1h(T.get(a_e), this.cursorRulesService, this.subagentsService, this.pushRequestContextService.getPushRequestContextEnabled(), this.codebaseReferenceService, this.mcpService, this.experimentService.checkFeatureGate("meta_mcp_tool", {
            disableExposureLog: !1
        }), this.experimentService.checkFeatureGate("mcp_input_schema_json", {
            disableExposureLog: !1
        }), this.experimentService.checkFeatureGate("mcp_meta_tool_slim_descriptors", {
            disableExposureLog: !1
        }), this.agentSkillsService, this.adminSettingsService, this.experimentService, this.pushRequestContextService, this.workspaceService, i.workspacePaths, this.trackedStateSnapshotService, this.structuredLogService, this.telemetryService, this.knowledgeBaseService), O = new IQi(N, this.storageService, this.reactiveStorageService, this.adminSettingsService, this.composerModesService, this.composerEffectiveAllowlistService, this.workspaceService, this.fileService, this.pathService, this.environmentService, this.commandService, !!i.worktreeMainPath, this.cursorAuthenticationService, {
            isPrCreationForgeGuidanceEnabled: ()=>this.experimentService.checkFeatureGate("enable_forge_source_pr_creation_setting", {
                    disableExposureLog: !1
                }),
            isAdminCommandDenylistEnforcementKilled: ()=>this.experimentService.checkFeatureGate("admin_command_denylist_enforcement_killswitch", {
                    disableExposureLog: !0
                }),
            isConfettiCannonFeatureEnabled: ()=>this.experimentService.checkFeatureGate("glass_agent_confetti_cannon", {
                    disableExposureLog: !0
                }),
            isMotionReduced: ()=>this.accessibilityService.isMotionReduced()
        }), F = new o1h(T.get(PHt), this.workspaceService, this.cursorIgnoreService), H = new a1h(T.get(rkt), this.workspaceService, this.cursorIgnoreService), $ = new c1h(T.get(wWi), this.workspaceService, this.cursorIgnoreService), W = this.instantiationService.createInstance(OQi), G = new f1o(this.subagentComposerService, ()=>this.experimentService.checkFeatureGate("subagent_support_interrupt", {
                disableExposureLog: !1
            }), W, this.experimentService), q = SPd(G), z = u1h(G), X = d1h(this.subagentComposerService), Y = new H0h(this.conversationSearchService, this.logService), Z = new Yro(T, [
            [
                iMd,
                E
            ],
            [
                IWi,
                R
            ],
            [
                AWi,
                D
            ],
            [
                LHt,
                P
            ],
            [
                a_e,
                O
            ],
            [
                rMd,
                A
            ],
            [
                PHt,
                F
            ],
            [
                rkt,
                H
            ],
            [
                wWi,
                $
            ],
            [
                CPd,
                q
            ],
            [
                vso,
                z
            ],
            [
                TPd,
                X
            ],
            [
                eMd,
                Y
            ]
        ]);
        return {
            dispose: ()=>{
                Pk(W, y);
            },
            get (K) {
                return Z.get(K);
            },
            entries: ()=>Z.entries(),
            cancelByToolCallId: async (K)=>{
                await y.cancelByToolCallId(K);
            },
            waitForInFlightToolCalls: ()=>y.waitForInFlightToolCalls(),
            waitForOtherInFlightToolCalls: (K)=>y.waitForOtherInFlightToolCalls(K),
            waitingForMachine: o.value,
            agentHostSessionOptionsBase: {
                workspacePaths: i.workspacePaths,
                worktreeMainPath: i.worktreeMainPath,
                isGlassRoot: i.isGlassRoot,
                approvalHandler: e,
                mcpElicitationHandler: t,
                fileChangeHandler: n,
                getPermissions: r,
                getSavedModelParameters: async (K, J)=>{
                    const ne = this.modelConfigService.fixupModelConfigForCurrentFlag(this.modelConfigService.getModelConfig("composer")), ee = ne.selectedModels?.find((se)=>se.modelId === K);
                    if (ee !== void 0) return this.modelConfigService.resolveModelParametersForSubmission(K, ee.parameters, J ?? ne.maxMode).map((se)=>({
                            id: se.id,
                            value: se.value
                        }));
                },
                getRequiredGlobalCommands: async (K)=>{
                    if (K !== "best-of-n-runner") return;
                    const ne = (await this.globalCommandsService.getGlobalCommands()).find((ee)=>ee.name === "worktree");
                    if (ne?.content) return [
                        {
                            name: ne.name,
                            content: ne.content
                        }
                    ];
                },
                onDidChangePermissions: s,
                conversationSearchHandler: async (K)=>(await Y.execute(qh(), TDn.fromBinary(K))).toBinary(),
                cloudSubagentBridge: {
                    createOrResumeCloudSubagent: (K, J)=>this.handleAgentHostCloudSubagentCreateOrResume(W, K, J),
                    runCloudSubagent: (K, J, ne)=>this.handleAgentHostCloudSubagentRun(W, K, J, ne)
                }
            }
        };
    }
    registerFileChangeCallback(e) {
        return this.onDidFileChange(e);
    }
    notifyFileChange(e) {
        this._onDidFileChange.fire(e);
    }
    invalidateTeamSettingsCache() {
        lf(this._handlerRegistry.legacyHandlerObservable).then((e)=>{
            e && typeof e.invalidateTeamSettingsCache == "function" && e.invalidateTeamSettingsCache();
        });
    }
    async runLocalAgent(e, t, n) {
        const i = await lf(this._handlerRegistry.legacyHandlerObservable, n);
        if (i.runLocalAgent === void 0) throw new Error("Registered agent exec provider does not support local agent runtime");
        return i.runLocalAgent(e, t, void 0, n);
    }
    async runLocalAgentInDedicatedExtensionHost(e, t, n, i) {
        const r = await lf(this._localAgentRuntimeHandler, i);
        if (r.runLocalAgent === void 0) throw new Error("Registered local agent runtime provider does not support local agent runtime");
        return r.runLocalAgent(e, t, n, i);
    }
    async runLocalInference(e) {
        const t = await lf(this._handlerRegistry.legacyHandlerObservable);
        if (t.runLocalInference === void 0) throw new Error("Registered agent exec provider does not support local inference");
        return t.runLocalInference(e);
    }
    async fetchLocalProviderModels(e) {
        const t = await lf(this._handlerRegistry.legacyHandlerObservable);
        if (t.fetchLocalProviderModels === void 0) throw new Error("Registered agent exec provider does not support local provider model discovery");
        return t.fetchLocalProviderModels(e);
    }
    getLocalSubagentHostAdapter() {
        return this._localSubagentHostAdapter === void 0 && (this._localSubagentHostAdapter = new f1o(this.subagentComposerService, ()=>this.experimentService.checkFeatureGate("subagent_support_interrupt", {
                disableExposureLog: !1
            }), void 0, this.experimentService)), this._localSubagentHostAdapter;
    }
    getLocalSubagentExecutor() {
        return this._localSubagentExecutor === void 0 && (this._localSubagentExecutor = SPd(this.getLocalSubagentHostAdapter())), this._localSubagentExecutor;
    }
    getLocalForceBackgroundSubagentExecutor() {
        return this._localForceBackgroundSubagentExecutor === void 0 && (this._localForceBackgroundSubagentExecutor = u1h(this.getLocalSubagentHostAdapter())), this._localForceBackgroundSubagentExecutor;
    }
    getLocalSubagentAwaitExecutor() {
        return this._localSubagentAwaitExecutor === void 0 && (this._localSubagentAwaitExecutor = d1h(this.subagentComposerService)), this._localSubagentAwaitExecutor;
    }
    createTokenLinkedContext(e) {
        const [t, n] = qh().withCancel();
        if (e === void 0) return {
            ctx: t,
            dispose: ()=>{}
        };
        if (e.isCancellationRequested) return n(), {
            ctx: t,
            dispose: ()=>{}
        };
        const i = e.onCancellationRequested(()=>n());
        return {
            ctx: t,
            dispose: ()=>i.dispose()
        };
    }
    async handleAgentHostCloudSubagentCreateOrResume(e, t, n) {
        const { ctx: i, dispose: r } = this.createTokenLinkedContext(n);
        try {
            const s = sJe.fromBinary(t), o = await e.createOrResumeCloudSubagent(g1o(s, i));
            return this.subagentComposerService.linkParentToSubagent(s.toolCallId, o, s.parentConversationId), o;
        } finally{
            r();
        }
    }
    async handleAgentHostCloudSubagentRun(e, t, n, i) {
        const { ctx: r, dispose: s } = this.createTokenLinkedContext(i);
        try {
            const o = sJe.fromBinary(n), a = await e.runCloudSubagent(t, g1o(o, r)), c = l1h(a);
            return wi.fromString(JSON.stringify(c)).buffer;
        } finally{
            s();
        }
    }
    async executeLocalSubagent(e, t) {
        let n, i;
        const { ctx: r, dispose: s } = this.createTokenLinkedContext(t);
        try {
            const o = sJe.fromBinary(e);
            n = o.subagentType, i = o.toolCallId, this.logService.info("[AgentExecProvider] executeLocalSubagent: starting renderer-side subagent", {
                subagentType: n,
                toolCallId: i,
                hasParentConversationId: !!o.parentConversationId,
                runInBackground: o.runInBackground === !0,
                hasCancellationToken: t !== void 0
            });
            const c = await this.getLocalSubagentExecutor().execute(r, o);
            return this.logService.info("[AgentExecProvider] executeLocalSubagent: subagent settled", {
                subagentType: n,
                toolCallId: i,
                resultCase: c.result.case
            }), c.toBinary();
        } catch (o) {
            const a = o instanceof Error ? o.message : String(o);
            return this.logService.error("[AgentExecProvider] executeLocalSubagent failed", {
                subagentType: n,
                toolCallId: i,
                errorType: o instanceof Error ? o.name : "unknown"
            }), new oJe({
                result: {
                    case: "error",
                    value: new N$t({
                        error: a
                    })
                }
            }).toBinary();
        } finally{
            s();
        }
    }
    async executeLocalForceBackgroundSubagent(e) {
        let t;
        try {
            const n = N8i.fromBinary(e);
            t = n.toolCallId, this.logService.info("[AgentExecProvider] executeLocalForceBackgroundSubagent: force-background request", {
                toolCallId: t
            });
            const i = await this.getLocalForceBackgroundSubagentExecutor().execute(qh(), n);
            return this.logService.info("[AgentExecProvider] executeLocalForceBackgroundSubagent: settled", {
                toolCallId: t,
                status: i.status
            }), i.toBinary();
        } catch (n) {
            return this.logService.error("[AgentExecProvider] executeLocalForceBackgroundSubagent failed", {
                toolCallId: t,
                errorType: n instanceof Error ? n.name : "unknown"
            }), new O8i({
                status: sSt.NOT_FOUND
            }).toBinary();
        }
    }
    async executeLocalSubagentAwait(e, t) {
        let n;
        const { ctx: i, dispose: r } = this.createTokenLinkedContext(t);
        try {
            const s = pYs.fromBinary(e);
            n = s.agentId, this.logService.info("[AgentExecProvider] executeLocalSubagentAwait: await request", {
                agentId: n,
                timeoutMs: s.timeoutMs,
                hasCancellationToken: t !== void 0
            });
            const o = await this.getLocalSubagentAwaitExecutor().execute(i, s);
            return this.logService.info("[AgentExecProvider] executeLocalSubagentAwait: settled", {
                agentId: n,
                resultCase: o.result.case
            }), o.toBinary();
        } catch (s) {
            const o = s instanceof Error ? s.message : String(s);
            return this.logService.error("[AgentExecProvider] executeLocalSubagentAwait failed", {
                agentId: n,
                errorType: s instanceof Error ? s.name : "unknown"
            }), new aJe({
                result: {
                    case: "error",
                    value: new NMn({
                        agentId: n ?? "",
                        error: o
                    })
                }
            }).toBinary();
        } finally{
            r();
        }
    }
}, MQi = ie([
    u0(0, eT),
    u0(1, Jn),
    u0(2, zl),
    u0(3, Ii),
    u0(4, Gf),
    u0(5, fc),
    u0(6, yn),
    u0(7, Do),
    u0(8, pw),
    u0(9, xC),
    u0(10, uLe),
    u0(11, Wn),
    u0(12, QM),
    u0(13, D_),
    u0(14, wtt),
    u0(15, Yi),
    u0(16, $n),
    u0(17, $v),
    u0(18, Xp),
    u0(19, LR),
    u0(20, ttt),
    u0(21, U_e),
    u0(22, kk),
    u0(23, P1),
    u0(24, v1o),
    u0(25, Kr),
    u0(26, _jt),
    u0(27, RQi),
    u0(28, Xh),
    u0(29, $h),
    u0(30, _t),
    u0(31, vp),
    u0(32, DCt),
    u0(33, h8e),
    u0(34, na),
    u0(35, ym),
    u0(36, QS),
    u0(37, bOn)
], MQi), mn(boe, MQi, 1), x1h = class extends pt {
    constructor(){
        super({
            id: "workbench.action.agentExec.toggleSimulatedStreamStartTimeout",
            title: Ae(12215, "Developer: Toggle Agent Exec Stream Start Timeout Simulation (Dev-only)"),
            category: Kn.Developer,
            f1: !0,
            precondition: oy
        });
    }
    run(e) {
        const t = e.get(di), n = !kZv();
        SZv(n), t.notify({
            severity: pi.Info,
            message: n ? "Agent exec stream-start timeout simulation enabled. Local agent tool calls will wait for the full stream-start timeout before failing until you run this command again." : "Agent exec stream-start timeout simulation disabled."
        });
    }
}, qe(x1h);

}
