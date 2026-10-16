import { findLatestConversationStateIndex, historyOfSessionEvent, scanHistoryThroughTurnColumns, tagOfSessionEvent, turnIdOfSessionEvent } from "../../../tree_chunk_napi_exports.js";
var SESSION_EVENT_TAG, SessionEventColumns;
export { SESSION_EVENT_TAG, SessionEventColumns };
var __wakaru_init_session_event_soa_initialized = false;
export function init_session_event_soa() {
if (__wakaru_init_session_event_soa_initialized) return;
__wakaru_init_session_event_soa_initialized = true;
"use strict";
SESSION_EVENT_TAG = {
    OTHER: 0,
    CONVERSATION_STATE: 1,
    TURN_INTERACTIONS_SUPERSEDED: 2,
    TURN_STARTED: 3,
    TURN_SETTLED: 4,
    BACKGROUND_TASK_COMPLETED: 5
};
SessionEventColumns = class {
    constructor(){
        this.start = 0;
        this.end = 0;
        this.tags = new Uint8Array(0);
        this.turnIds = [];
        this.histories = [];
    }
    get length() {
        return this.end - this.start;
    }
    append(event) {
        this.ensureTagCapacity(this.end + 1);
        const index = this.end;
        this.tags[index] = tagOfSessionEvent(event);
        if (index === this.turnIds.length) {
            this.turnIds.push(turnIdOfSessionEvent(event));
            this.histories.push(historyOfSessionEvent(event));
        } else {
            this.turnIds[index] = turnIdOfSessionEvent(event);
            this.histories[index] = historyOfSessionEvent(event);
        }
        this.end = index + 1;
    }
    evictOldest(count2) {
        if (count2 <= 0) {
            return;
        }
        if (count2 > this.length) {
            throw new Error(`SessionEventColumns.evictOldest count ${count2} exceeds length ${this.length}`);
        }
        const evictFrom = this.start;
        for(let i = 0; i < count2; i++){
            const index = evictFrom + i;
            this.tags[index] = SESSION_EVENT_TAG.OTHER;
            this.turnIds[index] = void 0;
            this.histories[index] = void 0;
        }
        this.start = evictFrom + count2;
    }
    maybeCompact(threshold) {
        if (threshold <= 0 || this.start < threshold) {
            return;
        }
        const nextLength = this.end - this.start;
        this.tags = this.tags.slice(this.start, this.end);
        this.turnIds.splice(0, this.start);
        this.histories.splice(0, this.start);
        this.start = 0;
        this.end = nextLength;
    }
    scanHistoryThroughTurn(turnId) {
        return scanHistoryThroughTurnColumns(this.tags, this.turnIds, this.histories, this.start, this.end, turnId);
    }
    findLatestConversationStateLogicalIndex() {
        return findLatestConversationStateIndex(this.tags, this.start, this.end);
    }
    ensureTagCapacity(needed) {
        if (needed <= this.tags.length) {
            return;
        }
        let capacity = this.tags.length === 0 ? 16 : this.tags.length;
        while(capacity < needed){
            capacity *= 2;
        }
        const next = new Uint8Array(capacity);
        next.set(this.tags);
        this.tags = next;
    }
};

}
