import { dpo } from "./A3u.js";
import { Pse, zv } from "./De_3.js";
import { Se, cn, ewe, j3e } from "./HVr.js";
import { Xwt } from "./cgh.js";
import { Hh, Xy } from "./composer.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { hoe } from "./composerUriUtils.js";
import { Jm, ps } from "./composer_pb.js";
import { Gb, en } from "./dom_2.js";
import { OXd } from "./editToolDiffFallback.js";
import { A1 } from "./index_5.ts";
import { N4e } from "./serde.ts";
import { Vn, yn } from "./storage_2.js";
import { lMe, mse, nt, pee, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
import { Jn, ci } from "./workspace.js";
var xbh, Ibh;
export { Ibh, xbh };
var __wakaru_yqv_initialized = false;
export function yqv() {
if (__wakaru_yqv_initialized) return;
__wakaru_yqv_initialized = true;
"use strict";
x(), A1(), ql(), Jm(), ci(), nl(), hoe(), Xy(), Vn(), OXd(), Se(), en(), lo(), xbh = 250, Ibh = class {
    constructor(e){
        this.context = e, this.bufferedStreamingContentByCallId = new Map, this.dirtyStreamingContentCallIds = new Set, this.streamingContentFlushFrame = new cn, this.streamingContentMaxDelayTimeout = null, this._isDisposed = !1, j3e(this);
    }
    dispose() {
        this._isDisposed || (this._isDisposed = !0, ewe(this), this.streamingContentFlushFrame.dispose(), this.clearBufferedStreamingContentMaxDelayTimeout(), this.dirtyStreamingContentCallIds.clear(), this.bufferedStreamingContentByCallId.clear());
    }
    getToolFormer() {
        const t = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === ps.TOOL_FORMER);
        if (!t) throw new Error("ToolFormer not found");
        return t;
    }
    async handlePartialToolCall(e, t) {
        await this.handleToolCallStarted(e, t);
    }
    async handleToolCallDelta(e, t, n) {
        if (this._isDisposed) return;
        const i = t.streamContentDelta;
        if (!i) return;
        const r = this.getToolFormer();
        let s = r.getBubbleIdByToolCallId(n);
        if (!s) {
            const o = !!this.context.composerDataHandle.data.createdFromBackgroundAgent?.bcId;
            s = r.getOrCreateBubbleId({
                toolCallId: n,
                toolIndex: 0,
                modelCallId: "",
                toolCallType: nt.EDIT_FILE_V2,
                name: "edit_file_v2",
                params: {
                    case: "editFileV2Params",
                    value: new pee({
                        relativeWorkspacePath: void 0,
                        noCodeblock: !0,
                        streamingContent: i,
                        cloudAgentEdit: o
                    })
                }
            });
            return;
        }
        this.bufferStreamingContentDelta(n, i);
    }
    getOrCreateBufferedStreamingContent(e) {
        let t = this.bufferedStreamingContentByCallId.get(e);
        return t || (t = {
            pendingContent: ""
        }, this.bufferedStreamingContentByCallId.set(e, t)), t;
    }
    bufferStreamingContentDelta(e, t) {
        const n = this.getOrCreateBufferedStreamingContent(e);
        n.pendingContent += t, this.dirtyStreamingContentCallIds.add(e), this.scheduleBufferedStreamingContentFlush();
    }
    scheduleBufferedStreamingContentFlush() {
        this.streamingContentFlushFrame.value || (this.streamingContentFlushFrame.value = Gb(on, ()=>{
            this.streamingContentFlushFrame.clear(), this.clearBufferedStreamingContentMaxDelayTimeout(), this.flushDirtyBufferedStreamingContent();
        })), this.streamingContentMaxDelayTimeout === null && (this.streamingContentMaxDelayTimeout = setTimeout(()=>{
            this.clearBufferedStreamingContentFlushFrame(), this.streamingContentMaxDelayTimeout = null, this.flushDirtyBufferedStreamingContent();
        }, xbh));
    }
    flushDirtyBufferedStreamingContent() {
        if (this._isDisposed) return;
        const e = [
            ...this.dirtyStreamingContentCallIds
        ];
        this.dirtyStreamingContentCallIds.clear();
        for (const t of e)this.flushBufferedStreamingContent(t);
    }
    clearBufferedStreamingContentFlushFrame() {
        this.streamingContentFlushFrame.clear();
    }
    clearBufferedStreamingContentMaxDelayTimeout() {
        this.streamingContentMaxDelayTimeout !== null && (clearTimeout(this.streamingContentMaxDelayTimeout), this.streamingContentMaxDelayTimeout = null);
    }
    flushBufferedStreamingContent(e) {
        if (this._isDisposed) return;
        this.dirtyStreamingContentCallIds.delete(e);
        const t = this.bufferedStreamingContentByCallId.get(e);
        if (!t || t.pendingContent === "") return;
        const n = t.pendingContent;
        t.pendingContent = "";
        const i = this.getToolFormer(), r = i.getBubbleIdByToolCallId(e);
        if (!r) {
            t.pendingContent = n + t.pendingContent;
            return;
        }
        const s = i.getBubbleData(r);
        if (!s) {
            t.pendingContent = n + t.pendingContent;
            return;
        }
        if (s.status !== "loading") {
            this.cleanupBufferedStreamingContent(e);
            return;
        }
        const o = s?.params?.streamingContent ?? "";
        i.setBubbleData(r, {
            params: new pee({
                ...s?.params,
                streamingContent: o + n
            })
        });
    }
    cleanupBufferedStreamingContent(e) {
        this.dirtyStreamingContentCallIds.delete(e), this.bufferedStreamingContentByCallId.delete(e);
    }
    async handleToolCallStarted(e, t) {
        const n = e.tool.value, i = this.getToolFormer(), r = i.getBubbleIdByToolCallId(t), s = n.args?.path;
        if (r) {
            if (s) {
                const a = i.getBubbleData(r);
                i.setBubbleData(r, {
                    params: new pee({
                        ...a?.params,
                        relativeWorkspacePath: s
                    })
                });
            }
            return;
        }
        if (!s) return;
        const o = !!this.context.composerDataHandle.data.createdFromBackgroundAgent?.bcId;
        i.getOrCreateBubbleId({
            toolCallId: t,
            toolIndex: 0,
            modelCallId: "",
            toolCallType: nt.EDIT_FILE_V2,
            name: "edit_file_v2",
            params: {
                case: "editFileV2Params",
                value: new pee({
                    relativeWorkspacePath: s,
                    noCodeblock: !0,
                    streamingContent: n.args?.streamContent,
                    cloudAgentEdit: o
                })
            },
            toolCall: e
        });
    }
    async handleToolCallCompleted(e, t) {
        const n = e.tool.value, i = this.context.instantiationService.invokeFunction((g)=>g.get(Jn)), r = this.getToolFormer(), s = this.context.instantiationService.invokeFunction((g)=>g.get(Zs));
        let o = r.getBubbleIdByToolCallId(t);
        if (!o && (await this.handleToolCallStarted(e, t), o = r.getBubbleIdByToolCallId(t), !o)) {
            this.cleanupBufferedStreamingContent(t);
            return;
        }
        this.flushBufferedStreamingContent(t);
        const a = Xwt(n.args?.path || "", i, this.context.composerDataHandle.data);
        let c, l;
        const u = n.result?.result?.case;
        if (u === "success") {
            const g = n.result.result.value, f = r.getBubbleData(o), { beforeContent: v, afterContent: b, precomputedDiff: y, usedDiffFallback: T } = dpo({
                beforeFullFileContent: g.beforeFullFileContent,
                afterFullFileContent: g.afterFullFileContent,
                diffString: g.diffString,
                streamingDiffString: f?.params?.streamingContent ?? n.args?.streamContent
            }), A = g.beforeFullFileContent === void 0 && b !== void 0 || !T || y?.lines.every(($)=>$.type === "added") === !0, R = b !== void 0 && g.beforeFullFileContent === void 0 && A, D = v ?? (R ? "" : void 0);
            c = v, l = b;
            const P = a?.toString(), N = this.context.instantiationService.invokeFunction(($)=>$.get(yn));
            let O;
            if (D !== void 0) {
                const $ = N4e.serialize(D);
                O = `composer.content.${zv(await Pse($))}`, await N.cursorDiskKVGet(O) === void 0 && await N.cursorDiskKVSet(O, D);
            }
            let F;
            if (b !== void 0) {
                const $ = N4e.serialize(b);
                F = `composer.content.${zv(await Pse($))}`, await N.cursorDiskKVGet(F) === void 0 && await N.cursorDiskKVSet(F, b);
            }
            R && a && P && s.updateComposerDataSetStore(this.context.composerDataHandle, ($)=>$("newlyCreatedFiles", (W)=>[
                        ...W.filter((G)=>G.uri.toString() !== P),
                        {
                            uri: a
                        }
                    ])), r.setBubbleData(o, {
                status: "completed",
                params: new pee({
                    ...f?.params,
                    streamingContent: void 0
                }),
                result: new lMe({
                    beforeContentId: O,
                    afterContentId: F
                }),
                ...T && y ? {
                    additionalData: {
                        ...f?.additionalData,
                        precomputedDiff: y
                    }
                } : {}
            });
            const H = n.args?.path;
            H && this.context.onEditToolCallCompleted && this.context.onEditToolCallCompleted({
                relativePath: H
            });
        } else {
            let g, f = "error";
            switch(u){
                case "fileNotFound":
                    g = `File not found: ${n.result.result.value.path}`;
                    break;
                case "readPermissionDenied":
                    g = `Read permission denied: ${n.result.result.value.path}`;
                    break;
                case "writePermissionDenied":
                    g = `Write permission denied: ${n.result.result.value.path}`;
                    break;
                case "rejected":
                    g = `Edit rejected: ${n.result.result.value.reason}`, f = "cancelled";
                    break;
                case "error":
                    g = n.result.result.value.error || "Unknown error";
                    break;
            }
            if (g) {
                const v = r.getBubbleData(o);
                r.setBubbleData(o, {
                    status: f,
                    params: new pee({
                        ...v?.params,
                        streamingContent: void 0
                    }),
                    additionalData: v?.additionalData,
                    error: new mse({
                        clientVisibleErrorMessage: g,
                        modelVisibleErrorMessage: g
                    })
                });
            }
        }
        this.cleanupBufferedStreamingContent(t);
        const h = this.context.instantiationService.invokeFunction((g)=>g.get(Hh)), p = s.getLastHumanBubbleId(this.context.composerDataHandle) ?? "";
        h.handleAiEditToolCallFinished({
            composerId: this.context.composerDataHandle.data.composerId,
            humanBubbleId: p,
            uri: a,
            beforeContent: c,
            afterContent: l
        });
    }
};

}
