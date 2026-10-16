import { bxn } from "./Aeg.js";
import { AOe, Qe, Vn, het } from "./Iwo.js";
import { Yh, vS } from "./composer.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { $Ce } from "./composerUriUtils.js";
import { mo, tf } from "./composer_pb.js";
import { Hn, Ix } from "./dom_2.js";
import { W4m } from "./editToolDiffFallback.js";
import { OT } from "./index_5.ts";
import { $v, ppe } from "./ipa.js";
import { zst } from "./serde.ts";
import { Zi, ki } from "./storage_2.js";
import { $de, Ct, Mve, N$e, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { $t, Bs } from "./window.js";
import { Sr, yr } from "./workspace.js";
import { XVa } from "./yBp.js";
var Wrg, Grg;
export { Grg, Wrg };
var __wakaru_Lmk_initialized = false;
export function Lmk() {
if (__wakaru_Lmk_initialized) return;
__wakaru_Lmk_initialized = true;
"use strict";
E(), OT(), Pu(), tf(), Sr(), Pl(), $Ce(), vS(), Zi(), W4m(), Qe(), Hn(), Bs(), Wrg = 250, Grg = class {
    constructor(t){
        this.context = t, this.bufferedStreamingContentByCallId = new Map, this.dirtyStreamingContentCallIds = new Set, this.streamingContentFlushFrame = new Vn, this.streamingContentMaxDelayTimeout = null, this._isDisposed = !1, het(this);
    }
    dispose() {
        this._isDisposed || (this._isDisposed = !0, AOe(this), this.streamingContentFlushFrame.dispose(), this.clearBufferedStreamingContentMaxDelayTimeout(), this.dirtyStreamingContentCallIds.clear(), this.bufferedStreamingContentByCallId.clear());
    }
    getToolFormer() {
        const e = this.context.composerDataHandle.data.capabilities.find((n)=>n.type === mo.TOOL_FORMER);
        if (!e) throw new Error("ToolFormer not found");
        return e;
    }
    async handlePartialToolCall(t, e) {
        await this.handleToolCallStarted(t, e);
    }
    async handleToolCallDelta(t, e, n) {
        if (this._isDisposed) return;
        const i = e.streamContentDelta;
        if (!i) return;
        const r = this.getToolFormer();
        let s = r.getBubbleIdByToolCallId(n);
        if (!s) {
            const o = !!this.context.composerDataHandle.data.createdFromBackgroundAgent?.bcId;
            s = r.getOrCreateBubbleId({
                toolCallId: n,
                toolIndex: 0,
                modelCallId: "",
                toolCallType: Ct.EDIT_FILE_V2,
                name: "edit_file_v2",
                params: {
                    case: "editFileV2Params",
                    value: new $de({
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
    getOrCreateBufferedStreamingContent(t) {
        let e = this.bufferedStreamingContentByCallId.get(t);
        return e || (e = {
            pendingContent: ""
        }, this.bufferedStreamingContentByCallId.set(t, e)), e;
    }
    bufferStreamingContentDelta(t, e) {
        const n = this.getOrCreateBufferedStreamingContent(t);
        n.pendingContent += e, this.dirtyStreamingContentCallIds.add(t), this.scheduleBufferedStreamingContentFlush();
    }
    scheduleBufferedStreamingContentFlush() {
        this.streamingContentFlushFrame.value || (this.streamingContentFlushFrame.value = Ix($t, ()=>{
            this.streamingContentFlushFrame.clear(), this.clearBufferedStreamingContentMaxDelayTimeout(), this.flushDirtyBufferedStreamingContent();
        })), this.streamingContentMaxDelayTimeout === null && (this.streamingContentMaxDelayTimeout = setTimeout(()=>{
            this.clearBufferedStreamingContentFlushFrame(), this.streamingContentMaxDelayTimeout = null, this.flushDirtyBufferedStreamingContent();
        }, Wrg));
    }
    flushDirtyBufferedStreamingContent() {
        if (this._isDisposed) return;
        const t = [
            ...this.dirtyStreamingContentCallIds
        ];
        this.dirtyStreamingContentCallIds.clear();
        for (const e of t)this.flushBufferedStreamingContent(e);
    }
    clearBufferedStreamingContentFlushFrame() {
        this.streamingContentFlushFrame.clear();
    }
    clearBufferedStreamingContentMaxDelayTimeout() {
        this.streamingContentMaxDelayTimeout !== null && (clearTimeout(this.streamingContentMaxDelayTimeout), this.streamingContentMaxDelayTimeout = null);
    }
    flushBufferedStreamingContent(t) {
        if (this._isDisposed) return;
        this.dirtyStreamingContentCallIds.delete(t);
        const e = this.bufferedStreamingContentByCallId.get(t);
        if (!e || e.pendingContent === "") return;
        const n = e.pendingContent;
        e.pendingContent = "";
        const i = this.getToolFormer(), r = i.getBubbleIdByToolCallId(t);
        if (!r) {
            e.pendingContent = n + e.pendingContent;
            return;
        }
        const s = i.getBubbleData(r);
        if (!s) {
            e.pendingContent = n + e.pendingContent;
            return;
        }
        if (s.status !== "loading") {
            this.cleanupBufferedStreamingContent(t);
            return;
        }
        const o = s?.params?.streamingContent ?? "";
        i.setBubbleData(r, {
            params: new $de({
                ...s?.params,
                streamingContent: o + n
            })
        });
    }
    cleanupBufferedStreamingContent(t) {
        this.dirtyStreamingContentCallIds.delete(t), this.bufferedStreamingContentByCallId.delete(t);
    }
    async handleToolCallStarted(t, e) {
        const n = t.tool.value, i = this.getToolFormer(), r = i.getBubbleIdByToolCallId(e), s = n.args?.path;
        if (r) {
            if (s) {
                const a = i.getBubbleData(r);
                i.setBubbleData(r, {
                    params: new $de({
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
            toolCallId: e,
            toolIndex: 0,
            modelCallId: "",
            toolCallType: Ct.EDIT_FILE_V2,
            name: "edit_file_v2",
            params: {
                case: "editFileV2Params",
                value: new $de({
                    relativeWorkspacePath: s,
                    noCodeblock: !0,
                    streamingContent: n.args?.streamContent,
                    cloudAgentEdit: o
                })
            },
            toolCall: t
        });
    }
    async handleToolCallCompleted(t, e) {
        const n = t.tool.value, i = this.context.instantiationService.invokeFunction((p)=>p.get(yr)), r = this.getToolFormer(), s = this.context.instantiationService.invokeFunction((p)=>p.get(no));
        let o = r.getBubbleIdByToolCallId(e);
        if (!o && (await this.handleToolCallStarted(t, e), o = r.getBubbleIdByToolCallId(e), !o)) {
            this.cleanupBufferedStreamingContent(e);
            return;
        }
        this.flushBufferedStreamingContent(e);
        const a = bxn(n.args?.path || "", i, this.context.composerDataHandle.data);
        let l, c;
        const u = n.result?.result?.case;
        if (u === "success") {
            const p = n.result.result.value, g = r.getBubbleData(o), { beforeContent: f, afterContent: _, precomputedDiff: b, usedDiffFallback: y } = XVa({
                beforeFullFileContent: p.beforeFullFileContent,
                afterFullFileContent: p.afterFullFileContent,
                diffString: p.diffString,
                streamingDiffString: g?.params?.streamingContent ?? n.args?.streamContent
            }), k = p.beforeFullFileContent === void 0 && _ !== void 0 || !y || b?.lines.every((N)=>N.type === "added") === !0, C = _ !== void 0 && p.beforeFullFileContent === void 0 && k, T = f ?? (C ? "" : void 0);
            l = f, c = _;
            const I = a?.toString(), A = this.context.instantiationService.invokeFunction((N)=>N.get(ki));
            let P;
            if (T !== void 0) {
                const N = zst.serialize(T);
                P = `composer.content.${$v(await ppe(N))}`, await A.cursorDiskKVGet(P) === void 0 && await A.cursorDiskKVSet(P, T);
            }
            let M;
            if (_ !== void 0) {
                const N = zst.serialize(_);
                M = `composer.content.${$v(await ppe(N))}`, await A.cursorDiskKVGet(M) === void 0 && await A.cursorDiskKVSet(M, _);
            }
            C && a && I && s.updateComposerDataSetStore(this.context.composerDataHandle, (N)=>N("newlyCreatedFiles", (U)=>[
                        ...U.filter((j)=>j.uri.toString() !== I),
                        {
                            uri: a
                        }
                    ])), r.setBubbleData(o, {
                status: "completed",
                params: new $de({
                    ...g?.params,
                    streamingContent: void 0
                }),
                result: new N$e({
                    beforeContentId: P,
                    afterContentId: M
                }),
                ...y && b ? {
                    additionalData: {
                        ...g?.additionalData,
                        precomputedDiff: b
                    }
                } : {}
            });
            const O = n.args?.path;
            O && this.context.onEditToolCallCompleted && this.context.onEditToolCallCompleted({
                relativePath: O
            });
        } else {
            let p, g = "error";
            switch(u){
                case "fileNotFound":
                    p = `File not found: ${n.result.result.value.path}`;
                    break;
                case "readPermissionDenied":
                    p = `Read permission denied: ${n.result.result.value.path}`;
                    break;
                case "writePermissionDenied":
                    p = `Write permission denied: ${n.result.result.value.path}`;
                    break;
                case "rejected":
                    p = `Edit rejected: ${n.result.result.value.reason}`, g = "cancelled";
                    break;
                case "error":
                    p = n.result.result.value.error || "Unknown error";
                    break;
            }
            if (p) {
                const f = r.getBubbleData(o);
                r.setBubbleData(o, {
                    status: g,
                    params: new $de({
                        ...f?.params,
                        streamingContent: void 0
                    }),
                    additionalData: f?.additionalData,
                    error: new Mve({
                        clientVisibleErrorMessage: p,
                        modelVisibleErrorMessage: p
                    })
                });
            }
        }
        this.cleanupBufferedStreamingContent(e);
        const d = this.context.instantiationService.invokeFunction((p)=>p.get(Yh)), h = s.getLastHumanBubbleId(this.context.composerDataHandle) ?? "";
        d.handleAiEditToolCallFinished({
            composerId: this.context.composerDataHandle.data.composerId,
            humanBubbleId: h,
            uri: a,
            beforeContent: l,
            afterContent: c
        });
    }
};

}
