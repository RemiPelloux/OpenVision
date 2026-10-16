import { h } from "./tslib.es6.js";
var x6, F6, dC, W6, uC, O5e, L5e, B6, gp, ad, G6, V6, U5e, x5e, $6, mC;
export { $6, B6, F6, G6, L5e, O5e, U5e, V6, W6, ad, dC, gp, mC, uC, x5e, x6 };
var __wakaru_fp_initialized = false;
export function fp() {
if (__wakaru_fp_initialized) return;
__wakaru_fp_initialized = true;
"use strict";
h(), x6 = "composerConversationState:", F6 = "composerConvHeaders:", dC = [
    {
        id: "agentBlobs",
        prefixes: [
            "agentKv:blob:"
        ]
    },
    {
        id: "agentCheckpoints",
        prefixes: [
            "agentKv:checkpoint:",
            "agentKv:bubbleCheckpoint:"
        ]
    },
    {
        id: "agentArtifacts",
        prefixes: [
            "agentKv:artifact:"
        ]
    },
    {
        id: "chats",
        prefixes: [
            "composerData:",
            x6,
            F6
        ]
    },
    {
        id: "messages",
        prefixes: [
            "bubbleId:"
        ]
    },
    {
        id: "checkpoints",
        prefixes: [
            "checkpointId:"
        ]
    },
    {
        id: "diffs",
        prefixes: [
            "codeBlockPartialInlineDiffFates:",
            "codeBlockDiff:",
            "inlineDiffUndoRedo",
            "inlineDiff"
        ]
    },
    {
        id: "cloudAgents",
        prefixes: [
            "bcCachedDetails:",
            "cloudAgent:"
        ]
    }
], W6 = {
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
}, uC = [
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
], O5e = new Map(uC.map((e, t)=>[
        e,
        t
    ])), L5e = uC.filter((e)=>e !== "wal" && e !== "sqliteFree" && e !== "sqliteOverhead"), B6 = [
    "cloudAgents",
    "diffs",
    "checkpoints",
    "agentArtifacts",
    "agentCheckpoints"
], gp = [
    "chats",
    "messages",
    "agentBlobs",
    "otherKv"
], ad = "kv", G6 = [
    "settings",
    "composerIndex",
    ...B6
], V6 = [
    ...G6,
    ...gp
], U5e = 3600 * 1e3, x5e = 1024 * 1024, $6 = 512 * 1024 * 1024, mC = 900 * 1e3;

}
