import { Rl, si } from "./HVr.js";
import { J0e, ub } from "./async.cursor.js";
import { Hu, KQe, LMe, p$t } from "./chat_pb.js";
import { Rs } from "./code_3.js";
import { Qo } from "./connect-error.js";
import { hg } from "./connect.js";
import { Kue, ql } from "./tools_pb.js";
import { x } from "./tslib.es6.js";
import { hu, io, vk } from "./utils_pb.js";
import { Js, zn } from "./uuid.js";
var Z_h;
export { Z_h };
var __wakaru_Bjv_initialized = false;
export function Bjv() {
if (__wakaru_Bjv_initialized) return;
__wakaru_Bjv_initialized = true;
"use strict";
x(), ub(), si(), Js(), Hu(), ql(), hg(), hu(), Z_h = class {
    constructor(e){
        this.pendingMocks = new Map, this.activeStreams = new Map, this.logService = e;
    }
    createMock(e) {
        const t = zn(), n = {
            mockId: t,
            composerId: e,
            events: new J0e(void 0)
        };
        return this.pendingMocks.set(t, n), this.logService.info(`[mock composer] created mock ${t} (composer=${e})`), t;
    }
    pushEvent(e, t) {
        const n = this.pendingMocks.get(e);
        if (n === void 0) throw new Error(`Mock composer stream ${e} not found`);
        const i = this.createMockEvent(n, t);
        n.events.push(i), this.logService.info(`[mock composer] pushed event for mock ${e} (kind=${t.kind})`);
    }
    completeMock(e) {
        const t = this.pendingMocks.get(e);
        if (t === void 0) {
            this.logService.warn(`[mock composer] completeMock called for unknown mock ${e}`);
            return;
        }
        t.events.end(), this.logService.info(`[mock composer] completed mock ${e}`);
    }
    disposeMock(e) {
        const t = this.pendingMocks.get(e);
        if (t === void 0) {
            this.logService.warn(`[mock composer] disposeMock called for unknown mock ${e}`);
            return;
        }
        const n = t.generationUuid;
        n !== void 0 ? (this.logService.info(`[mock composer] disposing active mock ${e} (generation=${n})`), this.cleanupGeneration(n, new Rl)) : (this.logService.info(`[mock composer] disposing pending mock ${e}`), this.pendingMocks.delete(e), t.events.error(new Rl));
    }
    abortMock(e) {
        this.disposeMock(e);
    }
    getMockStream(e, t, n, i) {
        const r = this.pickPendingMock(e);
        if (r === void 0) return;
        r.generationUuid = t;
        const s = ()=>{
            this.logService.info(`[mock composer] abort signaled for mock ${r.mockId} (generation=${t})`), this.disposeMock(r.mockId);
        };
        i.signal.addEventListener("abort", s, {
            once: !0
        });
        const o = {
            mock: r,
            pushable: n,
            abortController: i,
            abortListener: s
        };
        return this.activeStreams.set(t, o), this.logService.info(`[mock composer] attached mock ${r.mockId} to generation ${t}`), {
            stream: this.createStreamFromEvents(r, t)
        };
    }
    getActiveStream(e) {
        const t = this.activeStreams.get(e);
        if (t !== void 0) return {
            mockId: t.mock.mockId
        };
    }
    pickPendingMock(e) {
        for (const t of this.pendingMocks.values())if (t.generationUuid === void 0 && t.composerId === e) return t;
        for (const t of this.pendingMocks.values())if (t.generationUuid === void 0) return t;
    }
    createStreamFromEvents(e, t) {
        const n = this;
        return (async function*() {
            try {
                for await (const i of e.events)yield n.createChunkForEvent(i, t);
                yield n.createFinalChunk(t);
            } catch (i) {
                const r = i instanceof Error ? i : new Error(String(i));
                throw n.logService.error(`[mock composer] stream error for generation ${t}`, r), n.cleanupGeneration(t, r), r;
            } finally{
                n.cleanupGeneration(t, void 0);
            }
        })();
    }
    createMockEvent(e, t) {
        if (t.kind !== "tool-call") return {
            step: t
        };
        try {
            const n = Kue.fromJsonString(JSON.stringify(t.toolCall));
            return {
                step: t,
                parsedToolCall: n
            };
        } catch (n) {
            throw new Error(`Failed to parse tool call event: ${n instanceof Error ? n.message : String(n)}`);
        }
    }
    createChunkForEvent(e, t) {
        if (e.step.kind === "tool-call") {
            const i = e.parsedToolCall ?? Kue.fromJsonString(JSON.stringify(e.step.toolCall));
            return new LMe({
                response: {
                    case: "clientSideToolV2Call",
                    value: i
                },
                eventId: t
            });
        }
        if (e.step.kind === "agent-tool") throw new Error("agent-tool steps should not be processed by MockComposerStreamController");
        if (e.step.kind === "error") throw this.createConnectErrorFromStep(e.step);
        const n = new p$t;
        return e.step.kind === "text" ? n.text = e.step.value : (e.step.kind === "thinking" || e.step.kind === "thinking-complete") && (n.thinking = new KQe({
            text: e.step.value,
            isLastThinkingChunk: e.step.kind === "thinking-complete"
        })), e.step.metadata?.serverBubbleId !== void 0 && (n.serverBubbleId = e.step.metadata.serverBubbleId), e.step.metadata?.usageUuid !== void 0 && (n.usageUuid = e.step.metadata.usageUuid), new LMe({
            response: {
                case: "streamUnifiedChatResponse",
                value: n
            },
            eventId: t
        });
    }
    mapErrorCode(e) {
        switch(e){
            case "RATE_LIMITED_CHANGEABLE":
                return io.RATE_LIMITED_CHANGEABLE;
            case "FREE_USER_RATE_LIMIT_EXCEEDED":
                return io.FREE_USER_RATE_LIMIT_EXCEEDED;
            case "PRO_USER_RATE_LIMIT_EXCEEDED":
                return io.PRO_USER_RATE_LIMIT_EXCEEDED;
            case "RESOURCE_EXHAUSTED":
                return io.RESOURCE_EXHAUSTED;
            case "TIMEOUT":
                return io.TIMEOUT;
            case "CUSTOM":
                return io.CUSTOM;
            default:
                {
                    const t = e;
                    throw new Error(`Unknown error code: ${t}`);
                }
        }
    }
    createConnectErrorFromStep(e) {
        const t = this.mapErrorCode(e.errorCode), n = new vk({
            error: t,
            details: {
                title: e.title ?? "Error",
                detail: e.detail ?? "An error occurred",
                isRetryable: e.isRetryable ?? !0
            }
        }), i = new Qo(e.detail ?? "Mock error", Rs.ResourceExhausted);
        return i.details.push({
            type: vk.typeName,
            value: n.toBinary(),
            debug: n.toJson()
        }), this.logService.info(`[mock composer] throwing mock error (code=${e.errorCode})`), i;
    }
    createFinalChunk(e) {
        return new LMe({
            response: {
                case: "streamUnifiedChatResponse",
                value: new p$t({
                    text: ""
                })
            },
            eventId: e
        });
    }
    cleanupGeneration(e, t) {
        const n = this.activeStreams.get(e);
        if (n === void 0) return;
        this.activeStreams.delete(e), n.abortController.signal.removeEventListener("abort", n.abortListener), t !== void 0 && !(t instanceof Rl) ? (n.pushable.error(t), n.mock.events.error(t)) : (n.pushable.end(), n.mock.events.end());
        const i = n.mock;
        i.generationUuid = void 0, this.pendingMocks.delete(i.mockId), this.logService.info(`[mock composer] cleaned up mock ${i.mockId} (generation=${e})`);
    }
};

}
