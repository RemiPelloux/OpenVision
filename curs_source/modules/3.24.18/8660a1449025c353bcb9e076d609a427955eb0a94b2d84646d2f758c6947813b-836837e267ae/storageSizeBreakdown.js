import { E } from "./tslib.es6.js";
var FZn, M6t, D6t, DEo, LSy, ued, Rgr, Pgr, OSy, ded, hed, FSy, BSy, BZn, Mgr;
export { BSy, BZn, D6t, DEo, FSy, FZn, LSy, M6t, Mgr, OSy, Pgr, Rgr, ded, hed, ued };
var __wakaru_UZn_initialized = false;
export function UZn() {
if (__wakaru_UZn_initialized) return;
__wakaru_UZn_initialized = true;
"use strict";
E(), FZn = "composerConvHeaders:", M6t = {
    chats: {
        label: "Chat conversations",
        description: "Per-chat composerData payloads and optional composerConversationState sidecars"
    },
    messages: {
        label: "Chat messages",
        description: "Per-bubble message bodies (bubbleId:*)"
    },
    agentBlobs: {
        label: "Agent blobs",
        description: "Conversation-state blobs (agentKv:blob:*)"
    },
    agentCheckpoints: {
        label: "Agent checkpoints",
        description: "Turn and bubble checkpoints (agentKv:checkpoint:* / bubbleCheckpoint:*)"
    },
    agentArtifacts: {
        label: "Agent artifacts",
        description: "Persisted agent artifacts (agentKv:artifact:*)"
    },
    checkpoints: {
        label: "File checkpoints",
        description: "Composer file checkpoints (checkpointId:*)"
    },
    diffs: {
        label: "Code diffs",
        description: "Inline diffs, code-block diffs, and undo/redo snapshots"
    },
    cloudAgents: {
        label: "Cloud agents",
        description: "Cached cloud-agent details and metadata"
    },
    composerIndex: {
        label: "Chat index",
        description: "Composer header collection and composer.* ItemTable keys"
    },
    settings: {
        label: "Settings & state",
        description: "VS Code / Cursor ItemTable keys (window state, auth, UI)"
    },
    otherKv: {
        label: "Other KV data",
        description: "cursorDiskKV keys that do not match a known prefix"
    },
    wal: {
        label: "Write-ahead log",
        description: "SQLite WAL sidecar; checkpointed on close or vacuum"
    },
    sqliteOverhead: {
        label: "SQLite overhead",
        description: "B-tree, indexes, and page rounding not counted in value lengths"
    },
    sqliteFree: {
        label: "Reclaimable free space",
        description: "Freelist pages incremental vacuum can return to the OS"
    }
}, D6t = [
    "chats",
    "messages",
    "agentBlobs",
    "agentCheckpoints",
    "agentArtifacts",
    "checkpoints",
    "diffs",
    "cloudAgents",
    "composerIndex",
    "settings",
    "otherKv",
    "sqliteOverhead",
    "wal",
    "sqliteFree"
], DEo = new Map(D6t.map((t, e)=>[
        t,
        e
    ])), LSy = D6t.filter((t)=>t !== "wal" && t !== "sqliteFree" && t !== "sqliteOverhead"), ued = [
    "cloudAgents",
    "diffs",
    "checkpoints",
    "agentArtifacts",
    "agentCheckpoints"
], Rgr = [
    "chats",
    "messages",
    "agentBlobs",
    "otherKv"
], Pgr = [
    "settings",
    "composerIndex",
    ...ued
], OSy = [
    ...Pgr,
    ...Rgr
], ded = 3600 * 1e3, hed = 1024 * 1024, FSy = 512 * 1024 * 1024, BSy = 900 * 1e3, BZn = "other", Mgr = 5;

}
