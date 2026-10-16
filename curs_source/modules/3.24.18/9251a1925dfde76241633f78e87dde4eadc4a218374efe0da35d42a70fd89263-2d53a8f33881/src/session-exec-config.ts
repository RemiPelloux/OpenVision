import { cloneInheritedExecConfig, execRootFromParent, resolveSessionExecConfig, uniqueNonEmpty } from "../daemon_metrics_exports.js";
import { init_catalog_root_mcp_lease } from "./catalog-root-mcp-lease.ts";
import { init_project_dir } from "./project-dir.ts";
var import_node_path101, SessionExecRegistry;
export { SessionExecRegistry, import_node_path101 };
var __wakaru_init_session_exec_config_initialized = false;
export function init_session_exec_config() {
if (__wakaru_init_session_exec_config_initialized) return;
__wakaru_init_session_exec_config_initialized = true;
"use strict";
import_node_path101 = require("node:path");
init_catalog_root_mcp_lease();
init_project_dir();
SessionExecRegistry = class {
    constructor(options2){
        this.bySessionId = new Map();
        this.stageGenerationBySessionId = new Map();
        this.execRootBySessionId = new Map();
        this.nextStageGeneration = 1;
        this.agentsDir = options2.agentsDir;
        this.projectDirOverride = options2.projectDirOverride === void 0 ? void 0 : (0, import_node_path101.resolve)(options2.projectDirOverride);
        this.records = options2.records;
    }
    registerForCreateSession(request3, options2) {
        const persisted = this.records?.readSessionExecConfigLenient(request3.sessionId);
        if (persisted !== void 0) {
            const parent2 = options2?.parent ?? persisted.parent;
            this.remember(request3.sessionId, {
                ...persisted,
                ...parent2 === void 0 ? {} : {
                    parent: parent2
                }
            }, options2?.persist !== false);
            return;
        }
        const config2 = resolveSessionExecConfig({
            sessionId: request3.sessionId,
            sessionOptions: request3.sessionOptions,
            agentsDir: this.agentsDir,
            projectDirOverride: this.projectDirOverride
        });
        const requestOwner = request3.owningClientInstanceId?.trim() || request3.clientInstanceId?.trim() || void 0;
        const parent = options2?.parent;
        this.remember(request3.sessionId, {
            ...config2,
            ...requestOwner !== void 0 ? {
                owningClientInstanceId: requestOwner
            } : {},
            ...parent === void 0 ? {} : {
                parent
            }
        }, options2?.persist !== false);
    }
    rememberExecRoot(args) {
        const sessionId = args.sessionId.trim();
        const root = args.execRootSessionId.trim();
        if (sessionId.length === 0 || root.length === 0) {
            return;
        }
        this.execRootBySessionId.set(sessionId, root);
    }
    resolveExecRoot(sessionId) {
        const mapped = this.execRootBySessionId.get(sessionId);
        if (mapped !== void 0) {
            return mapped;
        }
        const config2 = this.bySessionId.get(sessionId) ?? this.records?.readSessionExecConfig(sessionId);
        const root = execRootFromParent(config2?.parent);
        if (root === void 0) {
            return sessionId;
        }
        this.rememberExecRoot({
            sessionId,
            execRootSessionId: root
        });
        return root;
    }
    forget(sessionId) {
        this.bySessionId.delete(sessionId);
        this.stageGenerationBySessionId.delete(sessionId);
        this.execRootBySessionId.delete(sessionId);
    }
    readPersistedExecConfig(sessionId) {
        return this.records?.readSessionExecConfig(sessionId);
    }
    readPersistedExecConfigLenient(sessionId) {
        return this.records?.readSessionExecConfigLenient(sessionId);
    }
    stageForCreateSession(request3) {
        this.registerForCreateSession(request3, {
            persist: false
        });
        return this.markStage(request3.sessionId);
    }
    stageFromPersistence(sessionId) {
        this.ensureRegisteredFromPersistence(sessionId);
        return this.markStage(sessionId);
    }
    ownsStagedCreate(sessionId, generation) {
        return this.stageGenerationBySessionId.get(sessionId) === generation;
    }
    persistIfOwned(sessionId, generation) {
        if (!this.ownsStagedCreate(sessionId, generation)) {
            return false;
        }
        this.persist(sessionId);
        return true;
    }
    rollbackPersistedCreate(sessionId, persistedBefore, generation) {
        if (!this.ownsStagedCreate(sessionId, generation)) {
            return;
        }
        const staged = this.bySessionId.get(sessionId);
        try {
            if (staged !== void 0) {
                this.records?.restoreSessionExecConfigIfCurrent({
                    sessionId,
                    expected: staged,
                    ...persistedBefore === void 0 ? {} : {
                        replacement: persistedBefore
                    }
                });
            }
        } finally{
            this.dropStagedCreate(sessionId);
        }
    }
    claimStagedCreate(sessionId) {
        return this.markStage(sessionId);
    }
    abandonStagedCreate(sessionId, persistedBefore, generation) {
        if (generation !== void 0 && !this.ownsStagedCreate(sessionId, generation)) {
            return;
        }
        this.dropStagedCreate(sessionId);
        if (persistedBefore === void 0) {
            return;
        }
        const records2 = this.records;
        if (records2 === void 0) {
            return;
        }
        if (records2.readSessionExecConfig(sessionId) === void 0) {
            return;
        }
        records2.writeSessionExecConfig(sessionId, persistedBefore);
    }
    markStage(sessionId) {
        const generation = this.nextStageGeneration;
        this.nextStageGeneration += 1;
        this.stageGenerationBySessionId.set(sessionId, generation);
        return generation;
    }
    dropStagedCreate(sessionId) {
        this.bySessionId.delete(sessionId);
        this.stageGenerationBySessionId.delete(sessionId);
        this.execRootBySessionId.delete(sessionId);
    }
    hasExecConfig(sessionId) {
        return this.bySessionId.has(sessionId) || this.hasPersistedExecConfig(sessionId);
    }
    hasPersistedExecConfig(sessionId) {
        return this.readPersistedExecConfigLenient(sessionId) !== void 0;
    }
    peekExecConfig(sessionId) {
        return this.bySessionId.get(sessionId);
    }
    peekOrPersistedExecConfig(sessionId) {
        return this.peekExecConfig(sessionId) ?? this.readPersistedExecConfigLenient(sessionId);
    }
    collectWorkspacePaths() {
        const roots = [];
        const seenSessionIds = new Set();
        for (const [sessionId, config2] of this.bySessionId){
            seenSessionIds.add(sessionId);
            for (const path64 of config2.workspacePaths){
                roots.push(path64);
            }
        }
        const records2 = this.records;
        if (records2 === void 0) {
            return uniqueNonEmpty(roots);
        }
        let sessionIds = [];
        try {
            sessionIds = records2.listSessionExecConfigSessionIds();
        } catch (error3) {
            void (error3 instanceof Error ? error3.name : "non-error");
            return uniqueNonEmpty(roots);
        }
        for (const sessionId of sessionIds){
            if (seenSessionIds.has(sessionId) || !records2.hasSession(sessionId)) {
                continue;
            }
            for (const path64 of this.readPersistedExecConfigLenient(sessionId)?.workspacePaths ?? []){
                roots.push(path64);
            }
        }
        return uniqueNonEmpty(roots);
    }
    listKnownExecConfigs() {
        const known = [];
        const seen = new Set();
        for (const [sessionId, config2] of this.bySessionId){
            seen.add(sessionId);
            known.push({
                sessionId,
                config: config2
            });
        }
        const records2 = this.records;
        if (records2 === void 0) {
            return known;
        }
        let sessionIds = [];
        try {
            sessionIds = records2.listSessionExecConfigSessionIds();
        } catch (error3) {
            void (error3 instanceof Error ? error3.name : "non-error");
            return known;
        }
        for (const sessionId of sessionIds){
            if (seen.has(sessionId) || !records2.hasSession(sessionId)) {
                continue;
            }
            const config2 = this.readPersistedExecConfigLenient(sessionId);
            if (config2 !== void 0) {
                known.push({
                    sessionId,
                    config: config2
                });
            }
        }
        return known;
    }
    listDescendantSessionIds(rootSessionId, options2) {
        const childrenByParent = new Map();
        const consider = (sessionId, exec2)=>{
            const parentId = exec2?.parent?.parentSessionId;
            if (parentId === void 0 || parentId.length === 0) {
                return;
            }
            const siblings = childrenByParent.get(parentId) ?? [];
            siblings.push(sessionId);
            childrenByParent.set(parentId, siblings);
        };
        const seen = new Set();
        for (const [sessionId, config2] of this.bySessionId){
            seen.add(sessionId);
            consider(sessionId, config2);
        }
        const records2 = options2?.inMemoryOnly === true ? void 0 : this.records;
        if (records2 !== void 0) {
            let persistedIds = [];
            try {
                persistedIds = records2.listSessionExecConfigSessionIds();
            } catch (error3) {
                void (error3 instanceof Error ? error3.name : "non-error");
            }
            for (const sessionId of persistedIds){
                if (seen.has(sessionId)) {
                    continue;
                }
                consider(sessionId, this.readPersistedExecConfigLenient(sessionId));
            }
        }
        const descendants = [];
        const visited = new Set([
            rootSessionId
        ]);
        const walk2 = (sessionId)=>{
            for (const childId of [
                ...childrenByParent.get(sessionId) ?? [],
                ...records2?.listSubagentChildSessionIds(sessionId) ?? []
            ]){
                if (visited.has(childId)) {
                    continue;
                }
                visited.add(childId);
                descendants.push(childId);
                walk2(childId);
            }
        };
        walk2(rootSessionId);
        return descendants;
    }
    persist(sessionId) {
        const config2 = this.bySessionId.get(sessionId);
        if (config2 === void 0) {
            return;
        }
        this.records?.writeSessionExecConfigUnlessDeleting(sessionId, config2);
    }
    stampParent(sessionId, parent) {
        const existing = this.bySessionId.get(sessionId) ?? this.records?.readSessionExecConfig(sessionId);
        if (existing === void 0) {
            return;
        }
        if (existing.parent?.parentSessionId === parent.parentSessionId && existing.parent.parentToolCallId === parent.parentToolCallId && existing.parent.rootSessionId === parent.rootSessionId) {
            return;
        }
        this.remember(sessionId, {
            ...existing,
            parent
        }, true);
    }
    inheritOwnerFromSession(args) {
        this.rememberExecRoot({
            sessionId: args.destinationSessionId,
            execRootSessionId: this.resolveExecRoot(args.sourceSessionId)
        });
        const destination = this.bySessionId.get(args.destinationSessionId);
        if (destination === void 0) {
            return;
        }
        const source = this.bySessionId.get(args.sourceSessionId) ?? this.records?.readSessionExecConfig(args.sourceSessionId);
        const owner = source?.owningClientInstanceId;
        if (owner === void 0 || destination.owningClientInstanceId !== void 0) {
            return;
        }
        this.remember(args.destinationSessionId, {
            ...destination,
            owningClientInstanceId: owner
        }, false);
    }
    resolveForExec(args) {
        const direct = this.bySessionId.get(args.sessionId);
        if (direct !== void 0) {
            return direct;
        }
        const parentSessionId = args.parentSessionId?.trim();
        if (parentSessionId !== void 0 && parentSessionId.length > 0 && this.hasExecConfig(parentSessionId)) {
            this.inheritFromSession({
                destinationSessionId: args.sessionId,
                sourceSessionId: parentSessionId
            });
            const inherited = this.bySessionId.get(args.sessionId);
            if (inherited !== void 0) {
                return inherited;
            }
        }
        return this.ensureRegisteredFromPersistence(args.sessionId);
    }
    isRegistered(sessionId) {
        return this.bySessionId.has(sessionId);
    }
    inheritFromSession(args) {
        const destination = this.bySessionId.get(args.destinationSessionId);
        if (destination !== void 0) {
            if (args.parent !== void 0) {
                this.remember(args.destinationSessionId, {
                    ...destination,
                    parent: args.parent
                }, args.persist !== false);
            } else if (args.persist !== false) {
                this.persist(args.destinationSessionId);
            }
        } else {
            const source = this.bySessionId.get(args.sourceSessionId) ?? this.records?.readSessionExecConfig(args.sourceSessionId);
            if (source === void 0) {
                throw new Error(`session ${args.sourceSessionId} has no exec config to inherit on fork`);
            }
            this.remember(args.destinationSessionId, cloneInheritedExecConfig({
                source,
                destinationSessionId: args.destinationSessionId,
                agentsDir: this.agentsDir,
                parent: args.parent
            }), args.persist !== false);
        }
        if (args.parent !== void 0 && args.persist !== false) {
            this.records?.writeSubagentChildSessionId({
                parentSessionId: args.parent.parentSessionId,
                parentToolCallId: args.parent.parentToolCallId,
                childSessionId: args.destinationSessionId
            });
        }
    }
    ensureRegisteredFromPersistence(sessionId) {
        const existing = this.bySessionId.get(sessionId);
        if (existing !== void 0) {
            return existing;
        }
        const persisted = this.records?.readSessionExecConfig(sessionId);
        if (persisted === void 0) {
            throw new Error(`session ${sessionId} has no workspace paths; supply session_options.workspace_paths on CreateSession`);
        }
        if (persisted.workspacePaths.length === 0 && persisted.isGlassRoot !== true) {
            throw new Error(`session ${sessionId} has empty workspace paths; recreate with is_glass_root or non-empty workspace_paths`);
        }
        this.bySessionId.set(sessionId, persisted);
        this.bindExecRootFromConfig(sessionId, persisted);
        return persisted;
    }
    remember(sessionId, config2, persist = true) {
        this.bySessionId.set(sessionId, config2);
        this.bindExecRootFromConfig(sessionId, config2);
        if (persist) {
            this.records?.writeSessionExecConfigUnlessDeleting(sessionId, config2);
        }
    }
    bindExecRootFromConfig(sessionId, config2) {
        const root = execRootFromParent(config2.parent);
        if (root !== void 0) {
            this.rememberExecRoot({
                sessionId,
                execRootSessionId: root
            });
            return;
        }
        if (this.execRootBySessionId.has(sessionId)) {
            return;
        }
        this.rememberExecRoot({
            sessionId,
            execRootSessionId: sessionId
        });
    }
};

}
