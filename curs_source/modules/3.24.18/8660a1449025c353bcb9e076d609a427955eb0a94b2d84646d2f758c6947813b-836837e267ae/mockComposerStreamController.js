import { Ei, Hc } from "./Iwo.js";
import { c_, nPe } from "./async.cursor.js";
import { Bmn, W$e, sd, ubt } from "./chat_pb.js";
import { pr } from "./code_3.js";
import { Us } from "./connect-error.js";
import { dp } from "./connect.js";
import { Gke, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
import { Hu, pS, wo } from "./utils_pb.js";
import { Ai, Xo } from "./uuid_2.js";
var drg;
export { drg };
var __wakaru_nmk_initialized = false;
export function nmk() {
if (__wakaru_nmk_initialized) return;
__wakaru_nmk_initialized = true;
"use strict";
E(), c_(), Ei(), Xo(), sd(), Pu(), dp(), Hu(), drg = class {
    constructor(t){
        this.pendingMocks = new Map, this.activeStreams = new Map, this.logService = t;
    }
    createMock(t) {
        const e = Ai(), n = {
            mockId: e,
            composerId: t,
            events: new nPe(void 0)
        };
        return this.pendingMocks.set(e, n), this.logService.info(`[mock composer] created mock ${e} (composer=${t})`), e;
    }
    pushEvent(t, e) {
        const n = this.pendingMocks.get(t);
        if (n === void 0) throw new Error(`Mock composer stream ${t} not found`);
        const i = this.createMockEvent(n, e);
        n.events.push(i), this.logService.info(`[mock composer] pushed event for mock ${t} (kind=${e.kind})`);
    }
    completeMock(t) {
        const e = this.pendingMocks.get(t);
        if (e === void 0) {
            this.logService.warn(`[mock composer] completeMock called for unknown mock ${t}`);
            return;
        }
        e.events.end(), this.logService.info(`[mock composer] completed mock ${t}`);
    }
    disposeMock(t) {
        const e = this.pendingMocks.get(t);
        if (e === void 0) {
            this.logService.warn(`[mock composer] disposeMock called for unknown mock ${t}`);
            return;
        }
        const n = e.generationUuid;
        n !== void 0 ? (this.logService.info(`[mock composer] disposing active mock ${t} (generation=${n})`), this.cleanupGeneration(n, new Hc)) : (this.logService.info(`[mock composer] disposing pending mock ${t}`), this.pendingMocks.delete(t), e.events.error(new Hc));
    }
    abortMock(t) {
        this.disposeMock(t);
    }
    getMockStream(t, e, n, i) {
        const r = this.pickPendingMock(t);
        if (r === void 0) return;
        r.generationUuid = e;
        const s = ()=>{
            this.logService.info(`[mock composer] abort signaled for mock ${r.mockId} (generation=${e})`), this.disposeMock(r.mockId);
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
        return this.activeStreams.set(e, o), this.logService.info(`[mock composer] attached mock ${r.mockId} to generation ${e}`), {
            stream: this.createStreamFromEvents(r, e)
        };
    }
    getActiveStream(t) {
        const e = this.activeStreams.get(t);
        if (e !== void 0) return {
            mockId: e.mock.mockId
        };
    }
    pickPendingMock(t) {
        for (const e of this.pendingMocks.values())if (e.generationUuid === void 0 && e.composerId === t) return e;
        for (const e of this.pendingMocks.values())if (e.generationUuid === void 0) return e;
    }
    createStreamFromEvents(t, e) {
        const n = this;
        return (async function*() {
            try {
                for await (const i of t.events)yield n.createChunkForEvent(i, e);
                yield n.createFinalChunk(e);
            } catch (i) {
                const r = i instanceof Error ? i : new Error(String(i));
                throw n.logService.error(`[mock composer] stream error for generation ${e}`, r), n.cleanupGeneration(e, r), r;
            } finally{
                n.cleanupGeneration(e, void 0);
            }
        })();
    }
    createMockEvent(t, e) {
        if (e.kind !== "tool-call") return {
            step: e
        };
        try {
            const n = Gke.fromJsonString(JSON.stringify(e.toolCall));
            return {
                step: e,
                parsedToolCall: n
            };
        } catch (n) {
            throw new Error(`Failed to parse tool call event: ${n instanceof Error ? n.message : String(n)}`);
        }
    }
    createChunkForEvent(t, e) {
        if (t.step.kind === "tool-call") {
            const i = t.parsedToolCall ?? Gke.fromJsonString(JSON.stringify(t.step.toolCall));
            return new W$e({
                response: {
                    case: "clientSideToolV2Call",
                    value: i
                },
                eventId: e
            });
        }
        if (t.step.kind === "agent-tool") throw new Error("agent-tool steps should not be processed by MockComposerStreamController");
        if (t.step.kind === "error") throw this.createConnectErrorFromStep(t.step);
        const n = new Bmn;
        return t.step.kind === "text" ? n.text = t.step.value : (t.step.kind === "thinking" || t.step.kind === "thinking-complete") && (n.thinking = new ubt({
            text: t.step.value,
            isLastThinkingChunk: t.step.kind === "thinking-complete"
        })), t.step.metadata?.serverBubbleId !== void 0 && (n.serverBubbleId = t.step.metadata.serverBubbleId), t.step.metadata?.usageUuid !== void 0 && (n.usageUuid = t.step.metadata.usageUuid), new W$e({
            response: {
                case: "streamUnifiedChatResponse",
                value: n
            },
            eventId: e
        });
    }
    mapErrorCode(t) {
        switch(t){
            case "RATE_LIMITED_CHANGEABLE":
                return wo.RATE_LIMITED_CHANGEABLE;
            case "FREE_USER_RATE_LIMIT_EXCEEDED":
                return wo.FREE_USER_RATE_LIMIT_EXCEEDED;
            case "PRO_USER_RATE_LIMIT_EXCEEDED":
                return wo.PRO_USER_RATE_LIMIT_EXCEEDED;
            case "RESOURCE_EXHAUSTED":
                return wo.RESOURCE_EXHAUSTED;
            case "TIMEOUT":
                return wo.TIMEOUT;
            case "CUSTOM":
                return wo.CUSTOM;
            default:
                {
                    const e = t;
                    throw new Error(`Unknown error code: ${e}`);
                }
        }
    }
    createConnectErrorFromStep(t) {
        const e = this.mapErrorCode(t.errorCode), n = new pS({
            error: e,
            details: {
                title: t.title ?? "Error",
                detail: t.detail ?? "An error occurred",
                isRetryable: t.isRetryable ?? !0
            }
        }), i = new Us(t.detail ?? "Mock error", pr.ResourceExhausted);
        return i.details.push({
            type: pS.typeName,
            value: n.toBinary(),
            debug: n.toJson()
        }), this.logService.info(`[mock composer] throwing mock error (code=${t.errorCode})`), i;
    }
    createFinalChunk(t) {
        return new W$e({
            response: {
                case: "streamUnifiedChatResponse",
                value: new Bmn({
                    text: ""
                })
            },
            eventId: t
        });
    }
    cleanupGeneration(t, e) {
        const n = this.activeStreams.get(t);
        if (n === void 0) return;
        this.activeStreams.delete(t), n.abortController.signal.removeEventListener("abort", n.abortListener), e !== void 0 && !(e instanceof Hc) ? (n.pushable.error(e), n.mock.events.error(e)) : (n.pushable.end(), n.mock.events.end());
        const i = n.mock;
        i.generationUuid = void 0, this.pendingMocks.delete(i.mockId), this.logService.info(`[mock composer] cleaned up mock ${i.mockId} (generation=${t})`);
    }
};

}
