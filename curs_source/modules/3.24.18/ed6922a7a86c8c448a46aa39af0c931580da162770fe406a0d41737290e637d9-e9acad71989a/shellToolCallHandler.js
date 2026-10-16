import { Ps, Se, U_, ele, ewe, j3e, po, rug } from "./HVr.js";
import { Cbh, vqv } from "./cgh.js";
import { Jm, ps } from "./composer_pb.js";
import { Cn, qt } from "./configuration.js";
import { Kr, qs } from "./experimentService.js";
import { Lh, qn } from "./qIc.js";
import { Wxc } from "./strings.cursor.js";
import { Gf, ng } from "./terminal.js";
import { C0e, Lj, nt, ql, vIn, xR } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
var Tbh, kwo, wwo, Ebh;
export { Ebh, Tbh, kwo, wwo };
var __wakaru__qv_initialized = false;
export function _qv() {
if (__wakaru__qv_initialized) return;
__wakaru__qv_initialized = true;
"use strict";
x(), qn(), ql(), Jm(), Se(), Ps(), Wxc(), ng(), Cn(), qs(), Tbh = 50, kwo = 1e3, wwo = 512 * 1024, Ebh = class {
    constructor(e){
        this.context = e, this.bufferedOutputByCallId = new Map, this.bubbleIdByCallId = new Map, this.backgroundTerminalListenersByCallId = new po, this._isDisposed = !1, this.disableTerminalOutputUiStreaming = this.readDisableTerminalOutputUiStreaming(), j3e(this);
    }
    dispose() {
        if (!this._isDisposed) {
            this._isDisposed = !0, ewe(this);
            for (const e of this.bufferedOutputByCallId.values())e.flushTimeout !== null && (clearTimeout(e.flushTimeout), e.flushTimeout = null);
            this.bufferedOutputByCallId.clear(), this.bubbleIdByCallId.clear(), this.backgroundTerminalListenersByCallId.dispose();
        }
    }
    getScrollbackLimit() {
        try {
            return this.context.instantiationService.invokeFunction((t)=>t.get(qt)).getValue("terminal.integrated.scrollback") || kwo;
        } catch  {
            return kwo;
        }
    }
    getToolFormer() {
        const t = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === ps.TOOL_FORMER);
        if (!t) throw new Error("ToolFormer not found");
        return t;
    }
    async getBubbleForCall(e, t) {
        const n = this.bubbleIdByCallId.get(t);
        if (n !== void 0) {
            const r = e.getBubbleData(n);
            if (r?.toolCallId === t) return {
                bubbleId: n,
                bubbleData: r
            };
            this.bubbleIdByCallId.delete(t);
        }
        const i = await e.getHydratedBubbleByToolCallId(t);
        return i !== void 0 && this.bubbleIdByCallId.set(t, i.bubbleId), i;
    }
    async handlePartialToolCall(e, t) {
        await this.upsertShellToolCallBubble(e, t, "loading");
    }
    async handleToolCallDelta(e, t, n) {
        const i = this.getToolFormer(), r = await this.getBubbleForCall(i, n);
        if (!r) return;
        const { bubbleId: s, bubbleData: o } = r;
        let a = "", c = "";
        t.delta.case === "stdout" ? a = t.delta.value.content : t.delta.case === "stderr" && (c = t.delta.value.content);
        const l = this.getRunningAdditionalData(o.additionalData);
        l && i.setBubbleData(s, {
            additionalData: l
        }), !(this.disableTerminalOutputUiStreaming && (a || c)) && this.bufferOutputDelta(n, a + c);
    }
    getOrCreateBufferedOutput(e, t = "") {
        let n = this.bufferedOutputByCallId.get(e);
        return n || (n = {
            output: t,
            pendingOutput: "",
            flushTimeout: null
        }, this.bufferedOutputByCallId.set(e, n)), n;
    }
    seedBufferedOutput(e, t) {
        const n = this.getOrCreateBufferedOutput(e);
        n.output = Cbh(t, this.getScrollbackLimit()), n.pendingOutput = "", n.flushTimeout !== null && (clearTimeout(n.flushTimeout), n.flushTimeout = null);
    }
    bufferOutputDelta(e, t) {
        if (t === "") return;
        const n = this.getOrCreateBufferedOutput(e);
        n.pendingOutput += t, n.flushTimeout === null && (n.flushTimeout = setTimeout(()=>{
            this.flushBufferedOutput(e);
        }, Tbh));
    }
    async flushBufferedOutput(e) {
        if (this._isDisposed) return;
        const t = this.bufferedOutputByCallId.get(e);
        t && (t.flushTimeout !== null && (clearTimeout(t.flushTimeout), t.flushTimeout = null), t.pendingOutput !== "" && (t.output += t.pendingOutput, t.pendingOutput = "", t.output = Cbh(t.output, this.getScrollbackLimit()), await this.updateToolResult(e, t.output)));
    }
    cleanupBufferedOutput(e) {
        const t = this.bufferedOutputByCallId.get(e);
        t && (t.flushTimeout !== null && clearTimeout(t.flushTimeout), this.bufferedOutputByCallId.delete(e)), this.bubbleIdByCallId.delete(e);
    }
    disposeBackgroundTerminalStreaming(e) {
        this.backgroundTerminalListenersByCallId.deleteAndDispose(e);
    }
    setBackgroundTerminalListeners(e, t) {
        const n = U_(...t);
        if (this._isDisposed) {
            n.dispose();
            return;
        }
        this.backgroundTerminalListenersByCallId.set(e, n);
    }
    mergeOverlappingOutput(e, t) {
        if (!e) return t;
        if (!t || e.includes(t)) return e;
        if (t.includes(e)) return t;
        const n = Math.min(e.length, t.length);
        for(let i = n; i > 0; i--)if (e.slice(-i) === t.slice(0, i)) return e + t.slice(i);
        return e + t;
    }
    getBackgroundStreamingSeed(e) {
        const t = e.stripFirstEchoedCommand ? this.stripLeadingEchoedCommand(e.terminalReplay, e.command) : e.terminalReplay, n = t.length > 0;
        return {
            seededOutput: this.mergeOverlappingOutput(e.initialOutput, t),
            shouldStripFirstLiveChunk: e.stripFirstEchoedCommand && !n
        };
    }
    startBackgroundTerminalStreaming(e) {
        if (this.disableTerminalOutputUiStreaming) return e.initialOutput;
        const t = this.context.composerDataHandle.data.composerId, n = this.context.instantiationService.invokeFunction((s)=>s.get(Gf)), i = (s)=>{
            if (!s) return e.initialOutput;
            const { seededOutput: o, shouldStripFirstLiveChunk: a } = this.getBackgroundStreamingSeed({
                initialOutput: e.initialOutput,
                terminalReplay: s.initialDataEvents?.join("") ?? "",
                command: e.command,
                stripFirstEchoedCommand: e.stripFirstEchoedCommand
            });
            this.seedBufferedOutput(e.callId, o);
            let c = a;
            const l = s.onData((h)=>{
                if (!h) return;
                let p = h;
                c && (c = !1, p = this.stripLeadingEchoedCommand(h, e.command)), p && this.bufferOutputDelta(e.callId, p);
            }), u = s.onExit(()=>{
                this.flushBufferedOutput(e.callId), this.cleanupBufferedOutput(e.callId), this.disposeBackgroundTerminalStreaming(e.callId);
            });
            return this.setBackgroundTerminalListeners(e.callId, [
                l,
                u
            ]), o;
        }, r = n.findTerminalByMetadata(t, (s)=>s?.backgroundShellId === e.backgroundShellId);
        if (!r) {
            const s = n.onDidChangeInstances(()=>{
                const o = n.findTerminalByMetadata(t, (c)=>c?.backgroundShellId === e.backgroundShellId);
                if (!o) return;
                s.dispose();
                const a = i(o);
                a !== e.initialOutput && this.updateToolResult(e.callId, a);
            });
            return this.setBackgroundTerminalListeners(e.callId, [
                s
            ]), e.initialOutput;
        }
        return i(r);
    }
    readDisableTerminalOutputUiStreaming() {
        try {
            return this.context.instantiationService.invokeFunction((t)=>t.get(Kr)).checkFeatureGate("disable_terminal_output_ui_streaming", {
                disableExposureLog: !1
            });
        } catch  {
            return !1;
        }
    }
    getRenderedBubbleOutput(e) {
        return e?.output || e?.outputRaw || "";
    }
    stripLeadingEchoedCommand(e, t) {
        if (!e || !t) return e;
        const n = rug(ele(e)).replace(/\r\n/g, `
`), [i = ""] = n.split(`
`), r = i.trim(), s = t.trim();
        if (!(r === s || r === `$ ${s}` || r.endsWith(`$ ${s}`))) return e;
        const a = e.indexOf(`
`);
        return a === -1 ? "" : e.slice(a + 1);
    }
    combineShellOutput(e) {
        if (e.interleavedOutput) return e.interleavedOutput;
        const t = e.stdout || "", n = e.stderr || "";
        return n ? t ? `${t}
${n}` : n : t;
    }
    async updateToolResult(e, t) {
        const n = this.getToolFormer(), r = (await this.getBubbleForCall(n, e))?.bubbleData.result;
        n.handleToolResult(new xR({
            tool: nt.RUN_TERMINAL_COMMAND_V2,
            toolCallId: e,
            result: {
                case: "runTerminalCommandV2Result",
                value: new Lj({
                    output: t,
                    exitCode: r?.exitCode ?? 0,
                    rejected: r?.rejected ?? !1,
                    backgroundShellId: r?.backgroundShellId
                })
            }
        }), e, !1);
    }
    isTerminalDoneStatus(e) {
        return e === "success" || e === "error" || e === "cancelled" || e === "rejected" || e === "skipped";
    }
    getLoadingAdditionalData(e) {
        const t = e?.status;
        if (!(t === "pending" || t === "running" || this.isTerminalDoneStatus(t))) return {
            status: "loading",
            startedAtMs: void 0
        };
    }
    getRunningAdditionalData(e) {
        const t = e?.status;
        if (!(t === "running" && e?.startedAtMs !== void 0 || this.isTerminalDoneStatus(t))) return {
            status: "running",
            startedAtMs: e?.startedAtMs ?? Date.now()
        };
    }
    async upsertShellToolCallBubble(e, t, n) {
        const i = e.tool.value, r = this.getToolFormer(), s = i.args, o = s?.isBackground ?? !1, a = s?.command ?? "", c = s !== void 0 ? new C0e({
            command: s.command,
            cwd: s.workingDirectory,
            isBackground: o,
            requireUserApproval: !1,
            options: s.timeout ? new vIn({
                timeout: s.timeout
            }) : void 0,
            parsingResult: s.parsingResult,
            requestedSandboxPolicy: s.requestedSandboxPolicy,
            commandDescription: s?.description ?? i?.description,
            classifierResult: s.classifierResult
        }) : void 0, l = await this.getBubbleForCall(r, t);
        Lh(()=>{
            let u = l?.bubbleId, h = l?.bubbleData;
            if (h !== void 0 && h.tool !== nt.RUN_TERMINAL_COMMAND_V2) return;
            u === void 0 && (u = r.getOrCreateBubbleId({
                toolCallId: t,
                toolIndex: 0,
                modelCallId: "",
                toolCallType: nt.RUN_TERMINAL_COMMAND_V2,
                name: "run_terminal_command_v2",
                params: c !== void 0 ? {
                    case: "runTerminalCommandV2Params",
                    value: c
                } : void 0,
                rawArgs: "",
                toolCall: e
            }), this.bubbleIdByCallId.set(t, u), h = r.getBubbleData(u));
            const p = h?.additionalData, g = n === "running" ? this.getRunningAdditionalData(p) : this.getLoadingAdditionalData(p);
            r.setBubbleData(u, {
                params: c,
                ...g ? {
                    additionalData: g
                } : {}
            });
        });
    }
    async handleToolCallStarted(e, t) {
        await this.upsertShellToolCallBubble(e, t, "running");
    }
    async handleToolCallCompleted(e, t) {
        const n = e.tool.value, i = this.getToolFormer();
        let r = await this.getBubbleForCall(i, t);
        if (!r && (await this.handleToolCallStarted(e, t), r = await this.getBubbleForCall(i, t), !r)) return;
        const { bubbleId: s, bubbleData: o } = r;
        await this.flushBufferedOutput(t);
        const a = i.getBubbleData(s) ?? o, c = this.getRenderedBubbleOutput(a.result);
        this.cleanupBufferedOutput(t);
        const l = n.args, u = n.result?.result?.case === "spawnError" || n.result?.result?.case === "timeout" || n.result?.result?.case === "rejected" || n.result?.result?.case === "permissionDenied" || n.result?.result?.case === "success" || n.result?.result?.case === "failure" ? n.result.result.value.command : void 0, h = (l?.command || u || "").trim();
        let p;
        if (n.result?.result?.case === "success" || n.result?.result?.case === "failure") {
            const g = n.result.result.value;
            g.stdout && g.stdout === g.interleavedOutput && (g.stdout = g.interleavedOutput);
            const f = this.combineShellOutput({
                stdout: g.stdout,
                stderr: g.stderr,
                interleavedOutput: g.interleavedOutput
            }) || c, v = n.result.result.case === "success" && g.exitCode === 0;
            p = g.exitCode;
            const b = n.result.result.case === "success" ? n.result.result.value.shellId : void 0, y = b !== void 0 && b !== 0 ? b : void 0;
            let T = f;
            y !== void 0 && (this.disposeBackgroundTerminalStreaming(t), T = this.startBackgroundTerminalStreaming({
                callId: t,
                backgroundShellId: y,
                initialOutput: f,
                command: h,
                stripFirstEchoedCommand: !0
            }));
            const E = new Lj({
                output: T,
                exitCode: g.exitCode,
                rejected: !1,
                backgroundShellId: y,
                poppedOutIntoBackground: y !== void 0,
                isRunningInBackground: y !== void 0,
                notInterrupted: !0
            });
            Lh(()=>{
                o.additionalData?.status !== "cancelled" && i.setBubbleData(s, {
                    additionalData: {
                        status: v ? "success" : "error"
                    }
                }), i.handleToolResult(new xR({
                    tool: nt.RUN_TERMINAL_COMMAND_V2,
                    toolCallId: t,
                    result: {
                        case: "runTerminalCommandV2Result",
                        value: E
                    }
                }), t, !0);
            });
        } else if (n.result?.result?.case === "spawnError") {
            const g = n.result.result.value, f = "The shell command returned no exit status, so its result is unknown \u2014 do not assume it ran or succeeded. If this repeats, the execution environment may need to be restarted.", v = (g.command || h).trim(), b = g.error || "Failed to spawn command", y = v.length > 0 ? `${b}: ${v}` : b, T = g.error.startsWith(f) ? g.error : y;
            Lh(()=>{
                const E = a.params, A = E instanceof C0e ? E.clone() : new C0e({
                    command: v,
                    cwd: g.workingDirectory || l?.workingDirectory || "",
                    requireUserApproval: !1
                });
                v.length > 0 && (A.command = v), g.workingDirectory && (A.cwd = g.workingDirectory), i.setBubbleData(s, {
                    params: A,
                    additionalData: {
                        status: "error"
                    }
                }), i.handleToolResult(new xR({
                    tool: nt.RUN_TERMINAL_COMMAND_V2,
                    toolCallId: t,
                    error: {
                        clientVisibleErrorMessage: y,
                        modelVisibleErrorMessage: T,
                        actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: g.error
                    }
                }), t, !0);
            });
        } else if (n.result?.result?.case === "timeout") {
            const g = n.result.result.value, f = g.timeoutMs, v = (g.command || h).trim(), b = typeof f == "number" && f > 0 ? vqv(f) : void 0, y = b ? `Timed out after ${b}` : "Command execution timed out", T = v.length > 0 ? `${y}: ${v}` : y, E = T;
            Lh(()=>{
                const A = a.params, R = A instanceof C0e ? A.clone() : new C0e({
                    command: v,
                    cwd: g.workingDirectory || l?.workingDirectory || "",
                    requireUserApproval: !1
                });
                v.length > 0 && (R.command = v), g.workingDirectory && (R.cwd = g.workingDirectory), i.setBubbleData(s, {
                    params: R,
                    additionalData: {
                        status: "error"
                    }
                }), i.handleToolResult(new xR({
                    tool: nt.RUN_TERMINAL_COMMAND_V2,
                    toolCallId: t,
                    error: {
                        clientVisibleErrorMessage: T,
                        modelVisibleErrorMessage: E,
                        actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: T
                    }
                }), t, !0);
            });
        } else if (n.result?.result?.case === "rejected") {
            const g = n.result.result.value;
            Lh(()=>{
                i.setBubbleData(s, {
                    additionalData: {
                        status: "rejected"
                    }
                }), i.handleToolResult(new xR({
                    tool: nt.RUN_TERMINAL_COMMAND_V2,
                    toolCallId: t,
                    result: {
                        case: "runTerminalCommandV2Result",
                        value: new Lj({
                            output: `Rejected: ${g.reason}`,
                            exitCode: 1,
                            rejected: !0
                        })
                    }
                }), t, !0);
            });
        } else if (n.result?.result?.case === "permissionDenied") {
            const f = n.result.result.value.error || "Permission denied", v = `Permission denied: ${f}`;
            Lh(()=>{
                i.setBubbleData(s, {
                    additionalData: {
                        status: "error"
                    }
                }), i.handleToolResult(new xR({
                    tool: nt.RUN_TERMINAL_COMMAND_V2,
                    toolCallId: t,
                    error: {
                        clientVisibleErrorMessage: v,
                        modelVisibleErrorMessage: v,
                        actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: f
                    }
                }), t, !0);
            });
        }
    }
};

}
