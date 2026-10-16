import { QXm, XXm, eZm, nZm } from "./gYa.js";
import { dZm } from "./index_15.ts";
import { E } from "./tslib.es6.js";
var YXm;
export { YXm };
var __wakaru_eak_initialized = false;
export function eak() {
if (__wakaru_eak_initialized) return;
__wakaru_eak_initialized = true;
"use strict";
E(), dZm(), YXm = class {
    constructor(t, e){
        this.blobStore = t, this.stateReader = e;
    }
    async listRecentConversations(t, e = 100) {
        return (await this.stateReader.listConversations(t)).slice(0, e);
    }
    async getTranscript(t, e) {
        const n = await this.stateReader.getLatestCheckpoint(t, e);
        if (!n) return;
        const i = await QXm(t, this.blobStore, n), r = eZm(i), s = nZm(i), a = (await this.stateReader.listConversations(t)).find((l)=>l.conversationId === e);
        return {
            conversationId: e,
            transcript: r,
            transcriptJson: s,
            messages: i,
            lastUpdatedAt: a?.lastUpdatedAt ?? Date.now(),
            mode: XXm(n.mode)
        };
    }
    async getTranscripts(t, e) {
        const n = new Map;
        return await Promise.all(e.map(async (i)=>{
            const r = await this.getTranscript(t, i);
            r && n.set(i, r);
        })), n;
    }
    serializeForWire(t) {
        return {
            conversationId: t.conversationId,
            transcript: t.transcript,
            transcriptJson: t.transcriptJson,
            messageCount: t.messages.length,
            lastUpdatedAt: t.lastUpdatedAt,
            mode: t.mode
        };
    }
    batchSerializeForWire(t) {
        return Array.from(t.values()).map((e)=>this.serializeForWire(e));
    }
};

}
