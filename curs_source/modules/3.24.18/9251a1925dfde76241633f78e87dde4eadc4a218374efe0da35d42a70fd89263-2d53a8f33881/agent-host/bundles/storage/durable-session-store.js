import { AgentHostStorageInstruments, init_instruments } from "./instruments.js";
import { init_session_blob_store } from "./session-blob-store.js";
import { init_session_listing_projection } from "./session-listing-projection.js";
import { init_session_manifest } from "./session-manifest.js";
import { init_dist5 } from "../../../agent-kv/dist/index.js";
import { ProtoSerde } from "../../../agent-kv/dist/serde.js";
import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../context/dist/index.js";
import { commitRoot, getBlobId, mergeListingProjection, readListingProjection, readManifest, sessionBlobKey, toHex } from "../../../dist_exports.js";
import { ConversationStateStructure, init_agent_pb } from "../../../proto/dist/generated/agent/v1/agent_pb.js";
var conversationStateStructureSerde, logger15, HostSessionAdvancedError, DurableHostSessionStore;
export { DurableHostSessionStore, HostSessionAdvancedError, conversationStateStructureSerde, logger15 };
var __wakaru_init_durable_session_store_initialized = false;
export function init_durable_session_store() {
if (__wakaru_init_durable_session_store_initialized) return;
__wakaru_init_durable_session_store_initialized = true;
"use strict";
init_dist5();
init_dist();
init_agent_pb();
init_instruments();
init_session_blob_store();
init_session_listing_projection();
init_session_manifest();
conversationStateStructureSerde = new ProtoSerde(ConversationStateStructure);
logger15 = createLogger("agent-host:storage");
HostSessionAdvancedError = class extends Error {
    constructor(args){
        super(`Session ${args.sessionId} advanced under this host: root ${args.expectedRootBlobIdHex.slice(0, 12)}\u2026 is now ${args.actualRootBlobIdHex?.slice(0, 12) ?? "gone"}\u2026; reopen the session to continue`);
        this.name = "HostSessionAdvancedError";
        this.expectedRootBlobIdHex = args.expectedRootBlobIdHex;
        this.actualRootBlobIdHex = args.actualRootBlobIdHex;
    }
};
DurableHostSessionStore = class _DurableHostSessionStore {
    constructor(db, blobStore, forkStore, manifest, initialState, onRootAdvanced, instruments, now2){
        this.db = db;
        this.blobStore = blobStore;
        this.forkStore = forkStore;
        this.onRootAdvanced = onRootAdvanced;
        this.instruments = instruments;
        this.now = now2;
        this.persisting = Promise.resolve();
        this.manifest = manifest;
        this.latestState = initialState;
        this.committedState = initialState;
    }
    static hydrate(args) {
        const { manifest } = args;
        if (manifest.sessionId !== args.expectedSessionId) {
            throw new Error(`Host session DB for session ${args.expectedSessionId} belongs to session ${manifest.sessionId}`);
        }
        const rootBytes = args.db.blobs.get(sessionBlobKey(manifest.latestRootBlobIdHex));
        if (rootBytes === void 0) {
            throw new Error(`Host session root blob ${manifest.latestRootBlobIdHex} is missing from the local DB for session ${manifest.sessionId}`);
        }
        return new _DurableHostSessionStore(args.db, args.blobStore, args.forkStore, manifest, conversationStateStructureSerde.deserialize(rootBytes), args.onRootAdvanced, args.instruments ?? AgentHostStorageInstruments.none, args.now ?? Date.now);
    }
    readListingProjection() {
        return readListingProjection(this.db);
    }
    writeListingProjection(patch) {
        this.db.transaction(()=>{
            mergeListingProjection(this.db, patch);
        });
    }
    getConversationState() {
        return this.latestState;
    }
    getBlobStore() {
        return this.blobStore;
    }
    getManifest() {
        return this.manifest;
    }
    readCommittedRoot() {
        return readManifest(this.db)?.latestRootBlobIdHex;
    }
    async handleCheckpoint(ctx, checkpoint) {
        this.latestState = checkpoint;
        const persisted = this.persisting.then(()=>this.persistCheckpoint(ctx, checkpoint), ()=>this.persistCheckpoint(ctx, checkpoint));
        this.persisting = persisted;
        try {
            await persisted;
        } catch (error3) {
            if (this.latestState === checkpoint) {
                this.latestState = this.committedState;
            }
            throw error3;
        }
    }
    async persistCheckpoint(ctx, checkpoint) {
        const expectedRootBlobIdHex = this.manifest.latestRootBlobIdHex;
        const { manifest: nextManifest } = await this.instruments.timeAsync("checkpoint", ctx, (spanCtx)=>this.writeCheckpoint(spanCtx, checkpoint, expectedRootBlobIdHex), ({ bytes })=>({
                bytes
            }));
        this.manifest = nextManifest;
        this.committedState = checkpoint;
        try {
            this.onRootAdvanced?.(nextManifest.latestRootBlobIdHex);
        } catch (error3) {
            logger15.error(ctx, "Agent host session root-advanced listener failed", void 0, {
                component: "storage",
                errorName: error3 instanceof Error ? error3.name : typeof error3
            });
        }
    }
    async writeCheckpoint(ctx, checkpoint, expectedRootBlobIdHex) {
        const rootBytes = conversationStateStructureSerde.serialize(checkpoint);
        const rootBlobId = await getBlobId(rootBytes);
        await this.blobStore.setBlob(ctx, rootBlobId, rootBytes);
        await this.blobStore.flush(ctx);
        const manifest = {
            ...this.manifest,
            latestRootBlobIdHex: toHex(rootBlobId)
        };
        const outcome = commitRoot(this.db, {
            expectRoot: expectedRootBlobIdHex,
            pieces: new Map(),
            manifest,
            listingUpdatedAtMs: this.now()
        });
        if (!outcome.committed) {
            this.instruments.runtimeFault("root_commit_conflict");
            throw new HostSessionAdvancedError({
                sessionId: this.manifest.sessionId,
                expectedRootBlobIdHex,
                actualRootBlobIdHex: outcome.onDisk?.latestRootBlobIdHex
            });
        }
        return {
            manifest,
            bytes: rootBytes.byteLength
        };
    }
    async createFork(ctx, args) {
        return this.forkStore({
            sessionId: args.sessionId,
            history: conversationStateStructureSerde.serialize(args.initialHistory ?? this.latestState),
            readParentBlob: (blobId)=>this.blobStore.getBlob(ctx, blobId)
        });
    }
    dispose() {
        this.db.close();
    }
};

}
