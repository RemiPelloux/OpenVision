import { Fdh } from "./index_15.ts";
import { x } from "./tslib.es6.js";
import { Sdh, Tdh, wdh, xdh } from "./xmo.js";
var ydh;
export { ydh };
var __wakaru_N8v_initialized = false;
export function N8v() {
if (__wakaru_N8v_initialized) return;
__wakaru_N8v_initialized = true;
"use strict";
x(), Fdh(), ydh = class {
    constructor(e, t){
        this.blobStore = e, this.stateReader = t;
    }
    async listRecentConversations(e, t = 100) {
        return (await this.stateReader.listConversations(e)).slice(0, t);
    }
    async getTranscript(e, t) {
        const n = await this.stateReader.getLatestCheckpoint(e, t);
        if (!n) return;
        const i = await wdh(e, this.blobStore, n), r = Tdh(i), s = xdh(i), a = (await this.stateReader.listConversations(e)).find((c)=>c.conversationId === t);
        return {
            conversationId: t,
            transcript: r,
            transcriptJson: s,
            messages: i,
            lastUpdatedAt: a?.lastUpdatedAt ?? Date.now(),
            mode: Sdh(n.mode)
        };
    }
    async getTranscripts(e, t) {
        const n = new Map;
        return await Promise.all(t.map(async (i)=>{
            const r = await this.getTranscript(e, i);
            r && n.set(i, r);
        })), n;
    }
    serializeForWire(e) {
        return {
            conversationId: e.conversationId,
            transcript: e.transcript,
            transcriptJson: e.transcriptJson,
            messageCount: e.messages.length,
            lastUpdatedAt: e.lastUpdatedAt,
            mode: e.mode
        };
    }
    batchSerializeForWire(e) {
        return Array.from(e.values()).map((t)=>this.serializeForWire(t));
    }
};

}
