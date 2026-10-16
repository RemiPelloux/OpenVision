import { Mmk, jrg } from "./Aeg.js";
import { AOe, Fa, N1, Qe, W_y, da, het, iZn } from "./Iwo.js";
import { mo, tf } from "./composer_pb.js";
import { or, yi } from "./configuration.js";
import { Cr, _s } from "./experimentService.js";
import { vXu } from "./strings.cursor.js";
import { Mv, Py } from "./terminal.js";
import { B3, Ct, Hte, Pu, hti, r5e } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { Qm, pi } from "./ze.js";
var $rg, Tsl, Esl, Hrg;
export { $rg, Esl, Hrg, Tsl };
var __wakaru_Dmk_initialized = false;
export function Dmk() {
if (__wakaru_Dmk_initialized) return;
__wakaru_Dmk_initialized = true;
"use strict";
E(), pi(), Pu(), tf(), Qe(), Fa(), vXu(), Mv(), or(), _s(), $rg = 50, Tsl = 1e3, Esl = 512 * 1024, Hrg = class {
    constructor(t){
        this.context = t, this.bufferedOutputByCallId = new Map, this.bubbleIdByCallId = new Map, this.backgroundTerminalListenersByCallId = new da, this._isDisposed = !1, this.disableTerminalOutputUiStreaming = this.readDisableTerminalOutputUiStreaming(), het(this);
    }
    dispose() {
        if (!this._isDisposed) {
            this._isDisposed = !0, AOe(this);
            for (const t of this.bufferedOutputByCallId.values())t.flushTimeout !== null && (clearTimeout(t.flushTimeout), t.flushTimeout = null);
            this.bufferedOutputByCallId.clear(), this.bubbleIdByCallId.clear(), this.backgroundTerminalListenersByCallId.dispose();
        }
    }
    getScrollbackLimit() {
        try {
            return this.context.instantiationService.invokeFunction((e)=>e.get(yi)).getValue("terminal.integrated.scrollback") || Tsl;
        } catch  {
            return Tsl;
        }
    }
    getToolFormer() {
        const e = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === mo.TOOL_FORMER);
        if (!e) throw new Error("ToolFormer not found");
        return e;
    }
    async getBubbleForCall(t, e) {
        const n = this.bubbleIdByCallId.get(e);
        if (n !== void 0) {
            const r = t.getBubbleData(n);
            if (r?.toolCallId === e) return {
                bubbleId: n,
                bubbleData: r
            };
            this.bubbleIdByCallId.delete(e);
        }
        const i = await t.getHydratedBubbleByToolCallId(e);
        return i !== void 0 && this.bubbleIdByCallId.set(e, i.bubbleId), i;
    }
    async handlePartialToolCall(t, e) {
        await this.upsertShellToolCallBubble(t, e, "loading");
    }
    async handleToolCallDelta(t, e, n) {
        const i = this.getToolFormer(), r = await this.getBubbleForCall(i, n);
        if (!r) return;
        const { bubbleId: s, bubbleData: o } = r;
        let a = "", l = "";
        e.delta.case === "stdout" ? a = e.delta.value.content : e.delta.case === "stderr" && (l = e.delta.value.content);
        const c = this.getRunningAdditionalData(o.additionalData);
        c && i.setBubbleData(s, {
            additionalData: c
        }), !(this.disableTerminalOutputUiStreaming && (a || l)) && this.bufferOutputDelta(n, a + l);
    }
    getOrCreateBufferedOutput(t, e = "") {
        let n = this.bufferedOutputByCallId.get(t);
        return n || (n = {
            output: e,
            pendingOutput: "",
            flushTimeout: null
        }, this.bufferedOutputByCallId.set(t, n)), n;
    }
    seedBufferedOutput(t, e) {
        const n = this.getOrCreateBufferedOutput(t);
        n.output = jrg(e, this.getScrollbackLimit()), n.pendingOutput = "", n.flushTimeout !== null && (clearTimeout(n.flushTimeout), n.flushTimeout = null);
    }
    bufferOutputDelta(t, e) {
        if (e === "") return;
        const n = this.getOrCreateBufferedOutput(t);
        n.pendingOutput += e, n.flushTimeout === null && (n.flushTimeout = setTimeout(()=>{
            this.flushBufferedOutput(t);
        }, $rg));
    }
    async flushBufferedOutput(t) {
        if (this._isDisposed) return;
        const e = this.bufferedOutputByCallId.get(t);
        e && (e.flushTimeout !== null && (clearTimeout(e.flushTimeout), e.flushTimeout = null), e.pendingOutput !== "" && (e.output += e.pendingOutput, e.pendingOutput = "", e.output = jrg(e.output, this.getScrollbackLimit()), await this.updateToolResult(t, e.output)));
    }
    cleanupBufferedOutput(t) {
        const e = this.bufferedOutputByCallId.get(t);
        e && (e.flushTimeout !== null && clearTimeout(e.flushTimeout), this.bufferedOutputByCallId.delete(t)), this.bubbleIdByCallId.delete(t);
    }
    disposeBackgroundTerminalStreaming(t) {
        this.backgroundTerminalListenersByCallId.deleteAndDispose(t);
    }
    setBackgroundTerminalListeners(t, e) {
        const n = N1(...e);
        if (this._isDisposed) {
            n.dispose();
            return;
        }
        this.backgroundTerminalListenersByCallId.set(t, n);
    }
    mergeOverlappingOutput(t, e) {
        if (!t) return e;
        if (!e || t.includes(e)) return t;
        if (e.includes(t)) return e;
        const n = Math.min(t.length, e.length);
        for(let i = n; i > 0; i--)if (t.slice(-i) === e.slice(0, i)) return t + e.slice(i);
        return t + e;
    }
    getBackgroundStreamingSeed(t) {
        const e = t.stripFirstEchoedCommand ? this.stripLeadingEchoedCommand(t.terminalReplay, t.command) : t.terminalReplay, n = e.length > 0;
        return {
            seededOutput: this.mergeOverlappingOutput(t.initialOutput, e),
            shouldStripFirstLiveChunk: t.stripFirstEchoedCommand && !n
        };
    }
    startBackgroundTerminalStreaming(t) {
        if (this.disableTerminalOutputUiStreaming) return t.initialOutput;
        const e = this.context.composerDataHandle.data.composerId, n = this.context.instantiationService.invokeFunction((s)=>s.get(Py)), i = (s)=>{
            if (!s) return t.initialOutput;
            const { seededOutput: o, shouldStripFirstLiveChunk: a } = this.getBackgroundStreamingSeed({
                initialOutput: t.initialOutput,
                terminalReplay: s.initialDataEvents?.join("") ?? "",
                command: t.command,
                stripFirstEchoedCommand: t.stripFirstEchoedCommand
            });
            this.seedBufferedOutput(t.callId, o);
            let l = a;
            const c = s.onData((d)=>{
                if (!d) return;
                let h = d;
                l && (l = !1, h = this.stripLeadingEchoedCommand(d, t.command)), h && this.bufferOutputDelta(t.callId, h);
            }), u = s.onExit(()=>{
                this.flushBufferedOutput(t.callId), this.cleanupBufferedOutput(t.callId), this.disposeBackgroundTerminalStreaming(t.callId);
            });
            return this.setBackgroundTerminalListeners(t.callId, [
                c,
                u
            ]), o;
        }, r = n.findTerminalByMetadata(e, (s)=>s?.backgroundShellId === t.backgroundShellId);
        if (!r) {
            const s = n.onDidChangeInstances(()=>{
                const o = n.findTerminalByMetadata(e, (l)=>l?.backgroundShellId === t.backgroundShellId);
                if (!o) return;
                s.dispose();
                const a = i(o);
                a !== t.initialOutput && this.updateToolResult(t.callId, a);
            });
            return this.setBackgroundTerminalListeners(t.callId, [
                s
            ]), t.initialOutput;
        }
        return i(r);
    }
    readDisableTerminalOutputUiStreaming() {
        try {
            return this.context.instantiationService.invokeFunction((e)=>e.get(Cr)).checkFeatureGate("disable_terminal_output_ui_streaming", {
                disableExposureLog: !1
            });
        } catch  {
            return !1;
        }
    }
    getRenderedBubbleOutput(t) {
        return t?.output || t?.outputRaw || "";
    }
    stripLeadingEchoedCommand(t, e) {
        if (!t || !e) return t;
        const n = W_y(iZn(t)).replace(/\r\n/g, `
`), [i = ""] = n.split(`
`), r = i.trim(), s = e.trim();
        if (!(r === s || r === `$ ${s}` || r.endsWith(`$ ${s}`))) return t;
        const a = t.indexOf(`
`);
        return a === -1 ? "" : t.slice(a + 1);
    }
    combineShellOutput(t) {
        if (t.interleavedOutput) return t.interleavedOutput;
        const e = t.stdout || "", n = t.stderr || "";
        return n ? e ? `${e}
${n}` : n : e;
    }
    async updateToolResult(t, e) {
        const n = this.getToolFormer(), r = (await this.getBubbleForCall(n, t))?.bubbleData.result;
        n.handleToolResult(new B3({
            tool: Ct.RUN_TERMINAL_COMMAND_V2,
            toolCallId: t,
            result: {
                case: "runTerminalCommandV2Result",
                value: new Hte({
                    output: e,
                    exitCode: r?.exitCode ?? 0,
                    rejected: r?.rejected ?? !1,
                    backgroundShellId: r?.backgroundShellId
                })
            }
        }), t, !1);
    }
    isTerminalDoneStatus(t) {
        return t === "success" || t === "error" || t === "cancelled" || t === "rejected" || t === "skipped";
    }
    getLoadingAdditionalData(t) {
        const e = t?.status;
        if (!(e === "pending" || e === "running" || this.isTerminalDoneStatus(e))) return {
            status: "loading",
            startedAtMs: void 0
        };
    }
    getRunningAdditionalData(t) {
        const e = t?.status;
        if (!(e === "running" && t?.startedAtMs !== void 0 || this.isTerminalDoneStatus(e))) return {
            status: "running",
            startedAtMs: t?.startedAtMs ?? Date.now()
        };
    }
    async upsertShellToolCallBubble(t, e, n) {
        const i = t.tool.value, r = this.getToolFormer(), s = i.args, o = s?.isBackground ?? !1, a = s?.command ?? "", l = s !== void 0 ? new r5e({
            command: s.command,
            cwd: s.workingDirectory,
            isBackground: o,
            requireUserApproval: !1,
            options: s.timeout ? new hti({
                timeout: s.timeout
            }) : void 0,
            parsingResult: s.parsingResult,
            requestedSandboxPolicy: s.requestedSandboxPolicy,
            commandDescription: s?.description ?? i?.description,
            classifierResult: s.classifierResult
        }) : void 0, c = await this.getBubbleForCall(r, e);
        Qm(()=>{
            let u = c?.bubbleId, d = c?.bubbleData;
            if (d !== void 0 && d.tool !== Ct.RUN_TERMINAL_COMMAND_V2) return;
            u === void 0 && (u = r.getOrCreateBubbleId({
                toolCallId: e,
                toolIndex: 0,
                modelCallId: "",
                toolCallType: Ct.RUN_TERMINAL_COMMAND_V2,
                name: "run_terminal_command_v2",
                params: l !== void 0 ? {
                    case: "runTerminalCommandV2Params",
                    value: l
                } : void 0,
                rawArgs: "",
                toolCall: t
            }), this.bubbleIdByCallId.set(e, u), d = r.getBubbleData(u));
            const h = d?.additionalData, p = n === "running" ? this.getRunningAdditionalData(h) : this.getLoadingAdditionalData(h);
            r.setBubbleData(u, {
                params: l,
                ...p ? {
                    additionalData: p
                } : {}
            });
        });
    }
    async handleToolCallStarted(t, e) {
        await this.upsertShellToolCallBubble(t, e, "running");
    }
    async handleToolCallCompleted(t, e) {
        const n = t.tool.value, i = this.getToolFormer();
        let r = await this.getBubbleForCall(i, e);
        if (!r && (await this.handleToolCallStarted(t, e), r = await this.getBubbleForCall(i, e), !r)) return;
        const { bubbleId: s, bubbleData: o } = r;
        await this.flushBufferedOutput(e);
        const a = i.getBubbleData(s) ?? o, l = this.getRenderedBubbleOutput(a.result);
        this.cleanupBufferedOutput(e);
        const c = n.args, u = n.result?.result?.case === "spawnError" || n.result?.result?.case === "timeout" || n.result?.result?.case === "rejected" || n.result?.result?.case === "permissionDenied" || n.result?.result?.case === "success" || n.result?.result?.case === "failure" ? n.result.result.value.command : void 0, d = (c?.command || u || "").trim();
        let h;
        if (n.result?.result?.case === "success" || n.result?.result?.case === "failure") {
            const p = n.result.result.value;
            p.stdout && p.stdout === p.interleavedOutput && (p.stdout = p.interleavedOutput);
            const g = this.combineShellOutput({
                stdout: p.stdout,
                stderr: p.stderr,
                interleavedOutput: p.interleavedOutput
            }) || l, f = n.result.result.case === "success" && p.exitCode === 0;
            h = p.exitCode;
            const _ = n.result.result.case === "success" ? n.result.result.value.shellId : void 0, b = _ !== void 0 && _ !== 0 ? _ : void 0;
            let y = g;
            b !== void 0 && (this.disposeBackgroundTerminalStreaming(e), y = this.startBackgroundTerminalStreaming({
                callId: e,
                backgroundShellId: b,
                initialOutput: g,
                command: d,
                stripFirstEchoedCommand: !0
            }));
            const S = new Hte({
                output: y,
                exitCode: p.exitCode,
                rejected: !1,
                backgroundShellId: b,
                poppedOutIntoBackground: b !== void 0,
                isRunningInBackground: b !== void 0,
                notInterrupted: !0
            });
            Qm(()=>{
                o.additionalData?.status !== "cancelled" && i.setBubbleData(s, {
                    additionalData: {
                        status: f ? "success" : "error"
                    }
                }), i.handleToolResult(new B3({
                    tool: Ct.RUN_TERMINAL_COMMAND_V2,
                    toolCallId: e,
                    result: {
                        case: "runTerminalCommandV2Result",
                        value: S
                    }
                }), e, !0);
            });
        } else if (n.result?.result?.case === "spawnError") {
            const p = n.result.result.value, g = "The shell command returned no exit status, so its result is unknown \u2014 do not assume it ran or succeeded. If this repeats, the execution environment may need to be restarted.", f = (p.command || d).trim(), _ = p.error || "Failed to spawn command", b = f.length > 0 ? `${_}: ${f}` : _, y = p.error.startsWith(g) ? p.error : b;
            Qm(()=>{
                const S = a.params, k = S instanceof r5e ? S.clone() : new r5e({
                    command: f,
                    cwd: p.workingDirectory || c?.workingDirectory || "",
                    requireUserApproval: !1
                });
                f.length > 0 && (k.command = f), p.workingDirectory && (k.cwd = p.workingDirectory), i.setBubbleData(s, {
                    params: k,
                    additionalData: {
                        status: "error"
                    }
                }), i.handleToolResult(new B3({
                    tool: Ct.RUN_TERMINAL_COMMAND_V2,
                    toolCallId: e,
                    error: {
                        clientVisibleErrorMessage: b,
                        modelVisibleErrorMessage: y,
                        actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: p.error
                    }
                }), e, !0);
            });
        } else if (n.result?.result?.case === "timeout") {
            const p = n.result.result.value, g = p.timeoutMs, f = (p.command || d).trim(), _ = typeof g == "number" && g > 0 ? Mmk(g) : void 0, b = _ ? `Timed out after ${_}` : "Command execution timed out", y = f.length > 0 ? `${b}: ${f}` : b, S = y;
            Qm(()=>{
                const k = a.params, C = k instanceof r5e ? k.clone() : new r5e({
                    command: f,
                    cwd: p.workingDirectory || c?.workingDirectory || "",
                    requireUserApproval: !1
                });
                f.length > 0 && (C.command = f), p.workingDirectory && (C.cwd = p.workingDirectory), i.setBubbleData(s, {
                    params: C,
                    additionalData: {
                        status: "error"
                    }
                }), i.handleToolResult(new B3({
                    tool: Ct.RUN_TERMINAL_COMMAND_V2,
                    toolCallId: e,
                    error: {
                        clientVisibleErrorMessage: y,
                        modelVisibleErrorMessage: S,
                        actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: y
                    }
                }), e, !0);
            });
        } else if (n.result?.result?.case === "rejected") {
            const p = n.result.result.value;
            Qm(()=>{
                i.setBubbleData(s, {
                    additionalData: {
                        status: "rejected"
                    }
                }), i.handleToolResult(new B3({
                    tool: Ct.RUN_TERMINAL_COMMAND_V2,
                    toolCallId: e,
                    result: {
                        case: "runTerminalCommandV2Result",
                        value: new Hte({
                            output: `Rejected: ${p.reason}`,
                            exitCode: 1,
                            rejected: !0
                        })
                    }
                }), e, !0);
            });
        } else if (n.result?.result?.case === "permissionDenied") {
            const g = n.result.result.value.error || "Permission denied", f = `Permission denied: ${g}`;
            Qm(()=>{
                i.setBubbleData(s, {
                    additionalData: {
                        status: "error"
                    }
                }), i.handleToolResult(new B3({
                    tool: Ct.RUN_TERMINAL_COMMAND_V2,
                    toolCallId: e,
                    error: {
                        clientVisibleErrorMessage: f,
                        modelVisibleErrorMessage: f,
                        actualErrorMessageOnlySendFromClientToServerNeverTheOtherWayAroundBecauseThatMayBeASecurityRisk: g
                    }
                }), e, !0);
            });
        }
    }
};

}
