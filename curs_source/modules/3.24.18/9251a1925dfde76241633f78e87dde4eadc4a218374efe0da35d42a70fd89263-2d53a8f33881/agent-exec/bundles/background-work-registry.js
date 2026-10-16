import { init_wakeup } from "./wakeup/index.js";
import { matchesFilter, mergeWakeup } from "../../dist_exports.js";
import { init_subagents_pb } from "../../proto/dist/generated/agent/v1/subagents_pb.js";
var InMemoryLocalWakeupQueue, LEGACY_LOCAL_WAKEUP_CONVERSATION_ID, InMemoryBackgroundWorkRegistry;
export { InMemoryBackgroundWorkRegistry, InMemoryLocalWakeupQueue, LEGACY_LOCAL_WAKEUP_CONVERSATION_ID };
var __wakaru_init_background_work_registry_initialized = false;
export function init_background_work_registry() {
if (__wakaru_init_background_work_registry_initialized) return;
__wakaru_init_background_work_registry_initialized = true;
"use strict";
init_subagents_pb();
init_wakeup();
InMemoryLocalWakeupQueue = class {
    constructor(){
        this.pending = [];
        this.inFlightById = new Map();
        this.acceptedKeys = new Set();
        this.suppressedIdsByConversation = new Map();
        this.revision = 0;
    }
    acceptedKey(conversationId, id) {
        return `${conversationId}\0${id}`;
    }
    enqueue(wakeup) {
        const id = wakeup.id.trim();
        const key = this.acceptedKey(wakeup.conversationId, id);
        if (id.length === 0 || this.acceptedKeys.has(key)) {
            return;
        }
        if (this.suppressedIdsByConversation.get(wakeup.conversationId)?.has(id)) {
            return;
        }
        this.acceptedKeys.add(key);
        const { queue, replaced } = mergeWakeup(this.pending, {
            ...wakeup,
            id
        });
        this.pending = queue;
        if (replaced) {
            this.acceptedKeys.delete(this.acceptedKey(replaced.conversationId, replaced.id));
        }
        this.revision++;
    }
    pull(conversationId) {
        const suppressed = this.suppressedIdsByConversation.get(conversationId);
        const pulled = [];
        const rest = [];
        let dropped = 0;
        for (const wakeup of this.pending){
            if (wakeup.conversationId !== conversationId) {
                rest.push(wakeup);
                continue;
            }
            if (suppressed?.has(wakeup.id)) {
                this.acceptedKeys.delete(this.acceptedKey(conversationId, wakeup.id));
                dropped++;
                continue;
            }
            pulled.push(wakeup);
            this.inFlightById.set(wakeup.id, wakeup);
        }
        if (pulled.length > 0 || dropped > 0) {
            this.pending = rest;
            this.revision++;
        }
        return pulled.map((wakeup)=>({
                ...wakeup
            }));
    }
    pullAll() {
        const conversationIds = [
            ...new Set(this.pending.map((wakeup)=>wakeup.conversationId))
        ];
        return conversationIds.flatMap((conversationId)=>this.pull(conversationId));
    }
    ack(ids) {
        const acked = [];
        for (const id of ids){
            const normalizedId = id.trim();
            const wakeup = this.inFlightById.get(normalizedId);
            if (wakeup) {
                this.acceptedKeys.delete(this.acceptedKey(wakeup.conversationId, normalizedId));
                acked.push(wakeup);
            }
            this.inFlightById.delete(normalizedId);
        }
        return acked;
    }
    nack(ids, opts) {
        const requestedIds = new Set(ids.map((id)=>id.trim()));
        const selected = [];
        for (const [id, wakeup] of this.inFlightById){
            if (!requestedIds.has(id)) {
                continue;
            }
            selected.push(wakeup);
            this.inFlightById.delete(id);
        }
        if (!opts.requeue) {
            for (const wakeup of selected){
                this.acceptedKeys.delete(this.acceptedKey(wakeup.conversationId, wakeup.id));
            }
            return;
        }
        if (selected.length === 0) {
            return;
        }
        let requeued = selected;
        for (const pendingWakeup of this.pending){
            const { queue, replaced } = mergeWakeup(requeued, pendingWakeup);
            requeued = queue;
            if (replaced) {
                this.acceptedKeys.delete(this.acceptedKey(replaced.conversationId, replaced.id));
            }
        }
        this.pending = requeued;
        this.revision++;
    }
    suppress(conversationId, id) {
        const normalizedId = id.trim();
        if (normalizedId.length === 0) {
            return;
        }
        const suppressed = this.suppressedIdsByConversation.get(conversationId) ?? new Set();
        suppressed.add(normalizedId);
        this.suppressedIdsByConversation.set(conversationId, suppressed);
        let changed = false;
        const previousLength = this.pending.length;
        this.pending = this.pending.filter((wakeup)=>wakeup.conversationId !== conversationId || wakeup.id !== normalizedId);
        if (this.pending.length !== previousLength) {
            this.acceptedKeys.delete(this.acceptedKey(conversationId, normalizedId));
            changed = true;
        }
        const inFlight = this.inFlightById.get(normalizedId);
        if (inFlight && inFlight.conversationId === conversationId) {
            this.inFlightById.delete(normalizedId);
            this.acceptedKeys.delete(this.acceptedKey(conversationId, normalizedId));
            changed = true;
        }
        if (changed) {
            this.revision++;
        }
    }
    unsuppress(conversationId, id) {
        const suppressed = this.suppressedIdsByConversation.get(conversationId);
        if (!suppressed?.delete(id.trim())) {
            return;
        }
        if (suppressed.size === 0) {
            this.suppressedIdsByConversation.delete(conversationId);
        }
    }
    unsuppressId(id) {
        const normalizedId = id.trim();
        for (const conversationId of this.suppressedIdsByConversation.keys()){
            this.unsuppress(conversationId, normalizedId);
        }
    }
    clear(conversationId) {
        let changed = false;
        const previousPendingLength = this.pending.length;
        this.pending = this.pending.filter((wakeup)=>wakeup.conversationId !== conversationId);
        if (this.pending.length !== previousPendingLength) {
            changed = true;
        }
        for (const [id, wakeup] of this.inFlightById){
            if (wakeup.conversationId === conversationId) {
                this.inFlightById.delete(id);
                changed = true;
            }
        }
        const keyPrefix = this.acceptedKey(conversationId, "");
        for (const key of this.acceptedKeys){
            if (key.startsWith(keyPrefix)) {
                this.acceptedKeys.delete(key);
                changed = true;
            }
        }
        const hadSuppressed = this.suppressedIdsByConversation.delete(conversationId);
        if (changed || hadSuppressed) {
            this.revision++;
        }
    }
    hasPending(conversationId) {
        return conversationId === void 0 ? this.pending.length > 0 : this.pending.some((wakeup)=>wakeup.conversationId === conversationId);
    }
    hasPendingMatching(conversationId, predicate) {
        return this.pending.some((wakeup)=>wakeup.conversationId === conversationId && predicate(wakeup.payload));
    }
    getPendingCount() {
        return this.pending.length;
    }
    getUnsettledCount() {
        return this.acceptedKeys.size;
    }
    getRevision() {
        return this.revision;
    }
};
LEGACY_LOCAL_WAKEUP_CONVERSATION_ID = "local";
InMemoryBackgroundWorkRegistry = class {
    constructor(){
        this.records = new Map();
        this.wakeups = new InMemoryLocalWakeupQueue();
    }
    upsertWork(record3) {
        this.records.set(record3.id, record3);
    }
    clearWork(id) {
        const deleted = this.records.delete(id);
        this.wakeups.unsuppressId(id);
        return deleted;
    }
    abortWork(id) {
        const record3 = this.records.get(id);
        if (!record3) {
            return false;
        }
        if (record3.abort) {
            record3.abort();
        }
        this.records.delete(id);
        this.wakeups.unsuppressId(id);
        return true;
    }
    hasRunningWork(filter3) {
        for (const record3 of this.records.values()){
            if (record3.state !== "running") {
                continue;
            }
            if (matchesFilter(record3, filter3)) {
                return true;
            }
        }
        return false;
    }
    abortAllWork(filter3) {
        let aborted2 = 0;
        for (const record3 of [
            ...this.records.values()
        ]){
            if (!matchesFilter(record3, filter3)) {
                continue;
            }
            if (record3.abort) {
                record3.abort();
            }
            aborted2++;
            this.records.delete(record3.id);
            this.wakeups.unsuppressId(record3.id);
        }
        return aborted2;
    }
    listWork(filter3) {
        const snapshots = [];
        for (const record3 of this.records.values()){
            if (!matchesFilter(record3, filter3)) {
                continue;
            }
            snapshots.push({
                id: record3.id,
                kind: record3.kind,
                state: record3.state,
                ownerId: record3.ownerId,
                hasAbort: Boolean(record3.abort),
                metadata: record3.metadata
            });
        }
        return snapshots;
    }
    enqueue(wakeup) {
        this.wakeups.enqueue(wakeup);
    }
    pull(conversationId) {
        return this.wakeups.pull(conversationId);
    }
    ack(ids) {
        return this.wakeups.ack(ids);
    }
    nack(ids, opts) {
        this.wakeups.nack(ids, opts);
    }
    suppress(conversationId, id) {
        this.wakeups.suppress(conversationId, id);
    }
    enqueueCompletion(item) {
        this.enqueue({
            conversationId: LEGACY_LOCAL_WAKEUP_CONVERSATION_ID,
            id: item.taskId,
            payload: item,
            source: item.kind
        });
    }
    drainCompletions() {
        const wakeups = this.wakeups.pullAll();
        this.ack(wakeups.map((wakeup)=>wakeup.id));
        return wakeups.map((wakeup)=>wakeup.payload);
    }
    hasPendingCompletions(conversationId) {
        return this.wakeups.hasPending(conversationId);
    }
    markAwaitedCompletion(taskId) {
        this.suppress(LEGACY_LOCAL_WAKEUP_CONVERSATION_ID, taskId);
    }
    getWakeupRevision() {
        return this.wakeups.getRevision();
    }
};

}
