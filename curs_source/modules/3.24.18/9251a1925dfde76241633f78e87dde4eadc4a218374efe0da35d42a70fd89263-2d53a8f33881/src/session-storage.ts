import { init_runtime } from "../agent-host/dist/runtime.js";
import { init_storage } from "../agent-host/dist/storage.js";
import { decodeSessionExecConfig, encodeSessionExecConfig, isOrphanReclaimMarker, parseSubagentInvocationKey, sessionCreateOwnerBlocksReconciliation, sessionCreateOwnerKey, sessionCreateOwnerKeyPrefix, sessionDeletePendingKey, sessionExecConfigsEqual, subagentChildKey, subagentInvocationKey } from "../private_inference_loop_exports.js";
import { AgentHostDurableSubagentInvocationRecord, init_agent_host_surface_pb } from "../proto/dist/generated/agent/v1/agent_host_surface_pb.js";
import { init_listen } from "./listen.ts";
import { init_session_storage_reconciliation } from "./session-storage-reconciliation.ts";
var import_node_crypto54, import_node_fs42, import_node_path96, AGENT_HOST_DAEMON_BLOBS_DIR_ENV, stderrHostStorageLogger, realClock, EXEC_CONFIG_KEY_PREFIX, SUBAGENT_CHILD_KEY_PREFIX, SESSION_DELETE_PENDING_KEY_PREFIX, SESSION_CREATE_OWNER_KEY_PREFIX, SUBAGENT_INVOCATION_KEY_PREFIX, DaemonSessionRecords;
export { AGENT_HOST_DAEMON_BLOBS_DIR_ENV, DaemonSessionRecords, EXEC_CONFIG_KEY_PREFIX, SESSION_CREATE_OWNER_KEY_PREFIX, SESSION_DELETE_PENDING_KEY_PREFIX, SUBAGENT_CHILD_KEY_PREFIX, SUBAGENT_INVOCATION_KEY_PREFIX, import_node_crypto54, import_node_fs42, import_node_path96, realClock, stderrHostStorageLogger };
var __wakaru_init_session_storage_initialized = false;
export function init_session_storage() {
if (__wakaru_init_session_storage_initialized) return;
__wakaru_init_session_storage_initialized = true;
"use strict";
import_node_crypto54 = require("node:crypto");
import_node_fs42 = require("node:fs");
import_node_path96 = require("node:path");
init_runtime();
init_storage();
init_agent_host_surface_pb();
init_listen();
init_session_storage_reconciliation();
AGENT_HOST_DAEMON_BLOBS_DIR_ENV = "AGENT_HOST_DAEMON_BLOBS_DIR";
stderrHostStorageLogger = {
    info: (message)=>{
        console.error(message);
    },
    warn: (message)=>{
        console.error(message);
    },
    error: (message, error3)=>{
        console.error(message, error3);
    }
};
realClock = {
    now: ()=>Date.now(),
    schedule: (delayMs, fn)=>{
        const timer2 = setTimeout(fn, delayMs);
        return {
            dispose: ()=>{
                clearTimeout(timer2);
            }
        };
    }
};
EXEC_CONFIG_KEY_PREFIX = "agentHostDaemon:execConfig:";
SUBAGENT_CHILD_KEY_PREFIX = "agentHostDaemon:subagentChild:";
SESSION_DELETE_PENDING_KEY_PREFIX = "agentHostDaemon:sessionDeletePending:";
SESSION_CREATE_OWNER_KEY_PREFIX = "agentHostDaemon:sessionCreateOwner:";
SUBAGENT_INVOCATION_KEY_PREFIX = "agentHostDaemon:subagentInvocation:";
DaemonSessionRecords = class {
    constructor(store, sessions, log5){
        this.store = store;
        this.sessions = sessions;
        this.log = log5;
    }
    hasSession(sessionId) {
        return this.sessions.hasNativeSession(sessionId);
    }
    readSessionExecConfig(sessionId) {
        const raw = this.store.items.get(`${EXEC_CONFIG_KEY_PREFIX}${sessionId}`);
        return raw === void 0 ? void 0 : decodeSessionExecConfig(raw);
    }
    readSessionExecConfigLenient(sessionId) {
        try {
            return this.readSessionExecConfig(sessionId);
        } catch (error3) {
            this.log.warn(`[hostStorage] exec config for session ${sessionId} is unreadable (${error3 instanceof Error ? error3.name : typeof error3}); treating it as absent`);
            return void 0;
        }
    }
    writeSessionExecConfig(sessionId, config2) {
        this.store.items.set(`${EXEC_CONFIG_KEY_PREFIX}${sessionId}`, encodeSessionExecConfig(config2));
    }
    writeSessionExecConfigUnlessDeleting(sessionId, config2) {
        this.store.transaction(()=>{
            if (this.sessionDeletePendingValue(sessionId) !== void 0) {
                throw new Error(`session ${sessionId} has a pending delete; retry after startup reconciliation`);
            }
            this.writeSessionExecConfig(sessionId, config2);
        });
    }
    restoreSessionExecConfigIfCurrent(args) {
        return this.store.transaction(()=>{
            const current = this.readSessionExecConfig(args.sessionId);
            if (current === void 0 || !sessionExecConfigsEqual(current, args.expected)) {
                return false;
            }
            if (args.replacement === void 0) {
                this.deleteSessionExecConfig(args.sessionId);
            } else {
                this.writeSessionExecConfig(args.sessionId, args.replacement);
            }
            return true;
        });
    }
    deleteSessionExecConfig(sessionId) {
        this.store.items.delete(`${EXEC_CONFIG_KEY_PREFIX}${sessionId}`);
    }
    listSessionExecConfigSessionIds() {
        return this.store.items.keys(EXEC_CONFIG_KEY_PREFIX).map((key)=>key.slice(EXEC_CONFIG_KEY_PREFIX.length));
    }
    tryAcquireSessionCreate(sessionId, pid) {
        return this.store.transaction(()=>{
            if (this.sessionDeletePendingValue(sessionId) !== void 0) {
                return false;
            }
            this.store.items.set(sessionCreateOwnerKey(sessionId, pid), pid);
            return true;
        });
    }
    releaseSessionCreate(sessionId, pid) {
        this.store.items.delete(sessionCreateOwnerKey(sessionId, pid));
    }
    readSubagentChildSessionId(args) {
        const value = this.store.items.get(subagentChildKey(args));
        return typeof value === "string" && value.length > 0 ? value : void 0;
    }
    writeSubagentChildSessionId(args) {
        this.store.items.set(subagentChildKey(args), args.childSessionId);
    }
    deleteSubagentChildSessionId(args) {
        const key = subagentChildKey(args);
        this.store.transaction(()=>{
            if (this.store.items.get(key) === args.childSessionId) {
                this.store.items.delete(key);
            }
        });
    }
    listSubagentChildSessionIds(parentSessionId) {
        return this.store.items.entries(`${SUBAGENT_CHILD_KEY_PREFIX}${parentSessionId}:`).flatMap(({ value })=>typeof value === "string" && value.length > 0 ? [
                value
            ] : []);
    }
    deleteSubagentChildIndexForParent(parentSessionId) {
        for (const key of this.store.items.keys(`${SUBAGENT_CHILD_KEY_PREFIX}${parentSessionId}:`)){
            this.store.items.delete(key);
        }
    }
    markSessionDeletePending(sessionId) {
        this.store.items.set(sessionDeletePendingKey(sessionId), true);
    }
    hasSessionDeletePending(sessionId) {
        return this.sessionDeletePendingValue(sessionId) !== void 0;
    }
    listSessionDeletePendingSessionIds() {
        return this.store.items.keys(SESSION_DELETE_PENDING_KEY_PREFIX).map((key)=>key.slice(SESSION_DELETE_PENDING_KEY_PREFIX.length));
    }
    claimStartupReconciliation(sessionId, allowOrphanReclaim) {
        return this.store.transaction(()=>{
            const owners = this.store.items.entries(sessionCreateOwnerKeyPrefix(sessionId));
            if (owners.some(({ value })=>sessionCreateOwnerBlocksReconciliation(value))) {
                return void 0;
            }
            for (const { key } of owners){
                this.store.items.delete(key);
            }
            if (this.sessionDeletePendingValue(sessionId) !== void 0) {
                return {
                    kind: "delete-pending"
                };
            }
            if (!allowOrphanReclaim || this.store.items.get(`${EXEC_CONFIG_KEY_PREFIX}${sessionId}`) !== void 0) {
                return void 0;
            }
            const marker17 = {
                kind: "orphan-reclaim",
                token: (0, import_node_crypto54.randomUUID)()
            };
            this.store.items.set(sessionDeletePendingKey(sessionId), marker17);
            return {
                kind: marker17.kind,
                token: marker17.token
            };
        });
    }
    cancelOrphanReclaim(sessionId, token) {
        this.store.transaction(()=>{
            const marker17 = this.sessionDeletePendingValue(sessionId);
            if (isOrphanReclaimMarker(marker17) && marker17.token === token) {
                this.store.items.delete(sessionDeletePendingKey(sessionId));
            }
        });
    }
    deleteSessionDeletePending(sessionId) {
        this.store.items.delete(sessionDeletePendingKey(sessionId));
    }
    finishSessionDeleteRecords(sessionId) {
        this.store.transaction(()=>{
            this.deleteDurableSubagentInvocationsForSession(sessionId);
            this.deleteSessionExecConfig(sessionId);
            this.deleteSubagentChildIndexForParent(sessionId);
            for (const key of this.store.items.keys(sessionCreateOwnerKeyPrefix(sessionId))){
                this.store.items.delete(key);
            }
            this.deleteSessionDeletePending(sessionId);
        });
    }
    reportDeletePending(outcome) {
        let count2;
        try {
            count2 = this.store.items.keys(SESSION_DELETE_PENDING_KEY_PREFIX).length;
        } catch (error3) {
            void (error3 instanceof Error ? error3.name : typeof error3);
            return;
        }
        if (count2 === 0) {
            return;
        }
        this.warnSafely(`[hostStorage] daemon native delete pending outcome=${outcome} count=${count2}`);
    }
    reportPostKernelMetadataPersistenceFailure() {
        this.warnSafely("[hostStorage] daemon native post-kernel metadata persistence failed");
    }
    warnSafely(message) {
        try {
            this.log.warn(message);
        } catch (error3) {
            void (error3 instanceof Error ? error3.name : typeof error3);
        }
    }
    insertDurableSubagentInvocation(args) {
        const key = subagentInvocationKey(args);
        const existing = this.store.blobs.get(key);
        if (existing !== void 0) {
            return {
                inserted: false,
                record: existing
            };
        }
        this.store.blobs.set(key, args.record);
        return {
            inserted: true,
            record: args.record
        };
    }
    readDurableSubagentInvocation(args) {
        return this.store.blobs.get(subagentInvocationKey(args));
    }
    writeDurableSubagentInvocation(args) {
        this.store.blobs.set(subagentInvocationKey(args), args.record);
    }
    listDurableSubagentInvocationsByParentTool(args) {
        return this.listDurableSubagentInvocationsUnder(`${SUBAGENT_INVOCATION_KEY_PREFIX}${args.parentSessionId}:`).filter((row)=>row.parentToolCallId === args.parentToolCallId);
    }
    listDurableSubagentInvocations() {
        return this.listDurableSubagentInvocationsUnder(SUBAGENT_INVOCATION_KEY_PREFIX);
    }
    listDurableSubagentInvocationsUnder(keyPrefix) {
        return this.store.blobs.entries(keyPrefix).flatMap(({ key, value })=>{
            const parsed = parseSubagentInvocationKey(key, value);
            return parsed === void 0 ? [] : [
                parsed
            ];
        });
    }
    deleteDurableSubagentInvocation(args) {
        this.store.blobs.delete(subagentInvocationKey(args));
    }
    deleteDurableSubagentInvocationsForSession(sessionId) {
        const covered = new Set([
            sessionId
        ]);
        let grew = true;
        while(grew){
            grew = false;
            for (const row of this.listDurableSubagentInvocations()){
                if (!covered.has(row.parentSessionId) && !covered.has(row.rootSessionId)) {
                    continue;
                }
                const childSessionId = AgentHostDurableSubagentInvocationRecord.fromBinary(row.record).childSessionId;
                if (childSessionId.length > 0 && !covered.has(childSessionId)) {
                    covered.add(childSessionId);
                    grew = true;
                }
            }
        }
        for (const row of this.listDurableSubagentInvocations()){
            const childSessionId = AgentHostDurableSubagentInvocationRecord.fromBinary(row.record).childSessionId;
            if (covered.has(row.parentSessionId) || covered.has(row.rootSessionId) || covered.has(childSessionId)) {
                this.deleteDurableSubagentInvocation(row);
            }
        }
    }
    withDurableSubagentInvocationTransaction(fn) {
        return this.store.transaction(fn);
    }
    sessionDeletePendingValue(sessionId) {
        return this.store.items.get(sessionDeletePendingKey(sessionId));
    }
};

}
