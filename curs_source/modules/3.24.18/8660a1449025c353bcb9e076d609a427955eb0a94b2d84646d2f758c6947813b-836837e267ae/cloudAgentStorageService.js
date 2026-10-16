import { Qe, st } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { G6e, c_ } from "./async.cursor.js";
import { BGa, Lqe, pd } from "./background_composer_pb.js";
import { kl } from "./browser.ts";
import { sOm } from "./cloudAgentNameBlob.js";
import { iqa, lOm } from "./cloudAgentPersistedMetadata.js";
import { KD, zW } from "./composerBlobStore.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Fqe } from "./constants_19.js";
import { Rn } from "./extensions.js";
import { Ng } from "./index_3.ts";
import { OT } from "./index_5.ts";
import { It } from "./instantiation.js";
import { $v, Xp } from "./ipa.js";
import { uFp } from "./promise-extras.ts";
import { N_t, V_r } from "./proto-base64.js";
import { sk, vb } from "./solidEventsWrapper.js";
import { Zi, ki } from "./storage_2.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { aOm, rOm, rqa } from "./yBp.js";
var cOm, KGt, uOm, qZr;
export { KGt, cOm, qZr, uOm };
var __wakaru_IEn_initialized = false;
export function IEn() {
if (__wakaru_IEn_initialized) return;
__wakaru_IEn_initialized = true;
"use strict";
E(), OT(), V_r(), Ng(), kl(), c_(), Qe(), pd(), Zi(), Fqe(), It(), Rn(), sk(), zW(), Cm(), Pl(), sOm(), lOm(), cOm = class {
    constructor(){
        this.isMetadataLoaded = !1;
    }
    hasLoadedMetadata() {
        return this.isMetadataLoaded;
    }
    getMetadata() {
        return this.metadata;
    }
    setMetadata(t) {
        this.isMetadataLoaded = !0, this.metadata = t;
    }
    setMetadataMissing() {
        this.isMetadataLoaded = !0, this.metadata = void 0;
    }
    setState(t, e) {
        this.currentStateBlobIdHex = t, this.currentState = e;
    }
    getState(t) {
        if (this.currentStateBlobIdHex === t) return this.currentState;
    }
    clear() {
        this.isMetadataLoaded = !1, this.metadata = void 0, this.currentStateBlobIdHex = void 0, this.currentState = void 0;
    }
}, KGt = jn("cloudAgentStorageService"), uOm = 50, qZr = class extends st {
    constructor(t, e, n){
        super(), this.storageService = t, this.structuredLogService = e, this.composerDataService = n, this.composerBlobStores = new Map, this.stateCachesByBcId = new Map, this.metadataProperties = new Map, this.cloudAgentStateProperties = new Map, this.metadataLoadPromises = new Map, this.bcIdToComposerId = new Map, this.blobWriteQueuesByComposerId = new Map, this.pendingWritesByComposerId = new Map, this.releaseGuard = new G6e, this.deletedAgentChats = new Map;
    }
    getComposerBlobStore(t, e) {
        if (this.deletedAgentChats.get(t) !== e) if (!this.bcIdToComposerId.has(t)) this.bcIdToComposerId.set(t, e);
        else {
            const i = this.bcIdToComposerId.get(t);
            i !== e && this.structuredLogService.debug("background_composer", "bcId has multiple composerIds", {
                bcId: t,
                existingComposerId: i,
                composerId: e
            });
        }
        let n = this.composerBlobStores.get(e);
        return n === void 0 && (n = new KD(this.storageService, e), this.composerBlobStores.set(e, n)), n;
    }
    getStateCache(t) {
        let e = this.stateCachesByBcId.get(t);
        return e === void 0 && (e = new cOm, this.stateCachesByBcId.set(t, e)), e;
    }
    async getMetadataIfExists(t) {
        const e = this.getStateCache(t);
        if (e.hasLoadedMetadata()) return e.getMetadata();
        const n = this.metadataLoadPromises.get(t);
        if (n) return n;
        const i = this.loadMetadataFromDisk(t).finally(()=>{
            this.metadataLoadPromises.delete(t);
        });
        return this.metadataLoadPromises.set(t, i), i;
    }
    async loadMetadataFromDisk(t) {
        const e = this.releaseGuard.capture(t), n = rqa(t), i = await this.storageService.cursorDiskKVGet(n), r = aOm(i);
        if (e.isCurrent()) {
            const s = this.getStateCache(t);
            r === void 0 ? s.setMetadataMissing() : s.setMetadata(r);
        }
        return r;
    }
    async getMetadata(t) {
        const e = await this.getMetadataIfExists(t);
        if (e === void 0) throw new Error(`Metadata not found for bcId: ${t}`);
        return e;
    }
    async setMetadata(t, e) {
        const n = this.releaseGuard.capture(t), i = rqa(t);
        await this.storageService.cursorDiskKVSet(i, N_t.enc(e.toBinary())), n.isCurrent() && this.getStateCache(t).setMetadata(e);
    }
    async getMetadataAsync(t) {
        return this.getMetadata(t);
    }
    getMetadataProperty(t) {
        let e = this.metadataProperties.get(t);
        if (!e) {
            e = new vb("not_loaded"), this.metadataProperties.set(t, e);
            const n = e, i = this.releaseGuard.capture(t);
            this.getMetadataIfExists(t).then((r)=>{
                r && i.isCurrent() && n.change(r);
            });
        }
        return e;
    }
    async getBlob(t) {
        const { bcId: e, composerId: n, blobId: i } = t;
        return await this.getComposerBlobStore(e, n).getBlob(Xp(), i);
    }
    async storePreFetchedBlobs(t) {
        const { bcId: e, composerId: n, blobs: i } = t;
        if (i.length === 0) return;
        const r = this.getComposerBlobStore(e, n), s = this.getBlobWriteQueue(n), o = Xp();
        await s.enqueueList(i, async (a)=>{
            await r.setBlob(o, a.id, a.value);
        });
    }
    getBlobWriteQueue(t) {
        let e = this.blobWriteQueuesByComposerId.get(t);
        return e || (e = new uFp({
            max: uOm
        }), this.blobWriteQueuesByComposerId.set(t, e)), e;
    }
    getPendingWrites(t) {
        let e = this.pendingWritesByComposerId.get(t);
        return e || (e = new Set, this.pendingWritesByComposerId.set(t, e)), e;
    }
    enqueueSetBlobs(t) {
        const { bcId: e, composerId: n, blobs: i } = t;
        if (i.length === 0) return;
        const r = this.getComposerBlobStore(e, n), s = this.getBlobWriteQueue(n), o = this.getPendingWrites(n), a = Xp();
        for (const l of i){
            const c = s.enqueue(async ()=>{
                await r.setBlob(a, l.id, l.value);
            }).catch((u)=>{
                this.structuredLogService.error("background_composer", "Error in enqueueSetBlobs", u, {
                    bcId: e,
                    composerId: n
                });
            }).finally(()=>{
                o.delete(c);
            });
            o.add(c);
        }
    }
    async waitForPendingWrites(t) {
        const { composerId: e } = t, n = this.pendingWritesByComposerId.get(e);
        !n || n.size === 0 || await Promise.all(n);
    }
    async getCloudAgentStateFromDiskOrCache(t, e) {
        const { bcId: n, composerId: i } = t, r = this.releaseGuard.capture(n), s = $v(e), o = this.getStateCache(n).getState(s);
        if (o !== void 0) return o;
        const a = await this.getBlob({
            bcId: n,
            composerId: i,
            blobId: e
        });
        if (a === void 0) throw new Error(`Cloud agent state blob not found for bcId: ${n}, composerId: ${i}`);
        const l = Lqe.fromBinary(a);
        return r.isCurrent() && this.getStateCache(n).setState(s, l), l;
    }
    async getPRUrlFromState(t, e) {
        const { bcId: n, composerId: i } = t;
        if (!e.prUrl) return;
        const r = e.prUrl;
        if (!r) return;
        const s = await this.getBlob({
            bcId: n,
            composerId: i,
            blobId: r
        });
        if (s) return new TextDecoder().decode(s);
    }
    async getAgentNameFromState(t, e) {
        const { bcId: n, composerId: i } = t;
        return rOm(e.agentName, (r)=>this.getBlob({
                bcId: n,
                composerId: i,
                blobId: r
            }));
    }
    async getBranchNameFromState(t, e) {
        const { bcId: n, composerId: i } = t;
        if (!e.branchName || e.branchName.length === 0) return;
        const r = await this.getBlob({
            bcId: n,
            composerId: i,
            blobId: e.branchName
        });
        if (r) return new TextDecoder().decode(r);
    }
    getNumTurnsFromState(t) {
        return t.conversationState ? t.conversationState.turns.length : 0;
    }
    async getDerivedPropertiesFromState(t, e) {
        const [n, i, r] = await Promise.all([
            this.getPRUrlFromState(t, e),
            this.getAgentNameFromState(t, e),
            this.getBranchNameFromState(t, e)
        ]), s = this.getNumTurnsFromState(e), o = e.baseBranch, a = e.originalRequestStartUnixMs ? new Date(Number(e.originalRequestStartUnixMs)) : void 0, l = e.initialSource;
        return {
            prUrl: n,
            numTurns: s,
            agentName: i,
            branchName: r,
            baseBranch: o,
            originalRequestStartTime: a,
            initialSource: l
        };
    }
    getCloudAgentStateProperty(t) {
        const { bcId: e, composerId: n } = t;
        let i = this.cloudAgentStateProperties.get(e);
        if (!i) {
            i = new vb("not_loaded"), this.cloudAgentStateProperties.set(e, i);
            const r = i, s = this.releaseGuard.capture(e);
            this.getMetadataIfExists(e).then(async (o)=>{
                if (!o?.cloudAgentStateBlobId || !s.isCurrent()) return;
                const a = await this.getCloudAgentStateFromDiskOrCache({
                    bcId: e,
                    composerId: n
                }, o.cloudAgentStateBlobId), l = await this.getDerivedPropertiesFromState({
                    bcId: e,
                    composerId: n
                }, a);
                s.isCurrent() && r.change(l);
            });
        }
        return i;
    }
    async getCloudAgentState(t) {
        const { bcId: e, composerId: n } = t, i = await this.getMetadata(e);
        return {
            value: await this.getCloudAgentStateFromDiskOrCache({
                bcId: e,
                composerId: n
            }, i.cloudAgentStateBlobId),
            metadata: i
        };
    }
    async getConversationStateWithLastInteraction(t) {
        const { bcId: e, composerId: n } = t, i = await this.getCloudAgentState({
            bcId: e,
            composerId: n
        });
        return {
            value: {
                conversationState: i.value.conversationState,
                lastInteractionUpdateOffsetKey: i.value.lastInteractionUpdateOffsetKey
            },
            metadata: i.metadata
        };
    }
    async updateMetadata(t, e) {
        if (this.deletedAgentChats.has(t)) return;
        const n = await this.getMetadataIfExists(t);
        if (this.deletedAgentChats.has(t)) return;
        const i = new BGa({
            cloudAgentStateBlobId: n?.cloudAgentStateBlobId,
            offsetKey: n?.offsetKey,
            workflowStatus: n?.workflowStatus,
            ...e,
            version: iqa,
            timestampMs: Date.now()
        });
        await this.setMetadata(t, i), this.metadataProperties.get(t)?.change(i);
    }
    async saveNewCloudAgentState(t) {
        const { bcId: e, composerId: n, blobId: i, state: r, offsetKey: s } = t;
        if (this.deletedAgentChats.get(e) === n) return;
        this.deletedAgentChats.delete(e);
        const o = this.releaseGuard.capture(e), a = this.getComposerBlobStore(e, n), l = Xp(), c = await this.composerDataService.getComposerHandleById(n);
        if (!c) throw new Error(`Composer handle not found for composerId: ${n}`);
        const u = r.toBinary();
        if (await a.setBlob(l, i, u), r.conversationState && c.setData("conversationState", r.conversationState), await this.updateMetadata(e, {
            cloudAgentStateBlobId: i,
            offsetKey: s
        }), o.isCurrent() && this.getStateCache(e).setState($v(i), r), this.cloudAgentStateProperties.has(e)) {
            const d = await this.getDerivedPropertiesFromState({
                bcId: e,
                composerId: n
            }, r);
            this.cloudAgentStateProperties.get(e).change(d);
        }
    }
    async saveNewWorkflowStatus(t, e, n) {
        await this.updateMetadata(t, {
            workflowStatus: e,
            offsetKey: n
        });
    }
    async releaseCloudAgent(t) {
        this.releaseGuard.delete(t), this.stateCachesByBcId.get(t)?.clear(), this.stateCachesByBcId.delete(t), this.metadataLoadPromises.delete(t), this.metadataProperties.get(t)?.dispose(), this.metadataProperties.delete(t), this.cloudAgentStateProperties.get(t)?.dispose(), this.cloudAgentStateProperties.delete(t);
        const e = this.bcIdToComposerId.get(t);
        this.bcIdToComposerId.delete(t), e !== void 0 && await this.releaseComposer(e);
    }
    async deleteCloudAgentMetadata({ bcId: t, composerId: e }) {
        this.deletedAgentChats.set(t, e);
        const n = this.releaseCloudAgent(t);
        await this.storageService.cursorDiskKVSet(rqa(t), void 0), await n;
    }
    async releaseComposer(t) {
        const e = this.composerBlobStores.get(t), n = this.pendingWritesByComposerId.get(t);
        n !== void 0 && n.size > 0 && await Promise.all(n), e !== void 0 && await e.flush(Xp()), !this.isComposerMapped(t) && (this.composerBlobStores.delete(t), this.blobWriteQueuesByComposerId.delete(t), this.pendingWritesByComposerId.delete(t));
    }
    isComposerMapped(t) {
        for (const e of this.bcIdToComposerId.values())if (e === t) return !0;
        return !1;
    }
    retainedEntryCountsForTests() {
        return {
            composerBlobStores: this.composerBlobStores.size,
            stateCachesByBcId: this.stateCachesByBcId.size,
            metadataProperties: this.metadataProperties.size,
            cloudAgentStateProperties: this.cloudAgentStateProperties.size,
            metadataLoadPromises: this.metadataLoadPromises.size,
            bcIdToComposerId: this.bcIdToComposerId.size,
            blobWriteQueuesByComposerId: this.blobWriteQueuesByComposerId.size,
            pendingWritesByComposerId: this.pendingWritesByComposerId.size,
            releaseGuard: this.releaseGuard.size,
            deletedAgentChats: this.deletedAgentChats.size
        };
    }
    dispose() {
        for (const t of this.metadataProperties.values())t.dispose();
        for (const t of this.cloudAgentStateProperties.values())t.dispose();
        for (const t of this.stateCachesByBcId.values())t.clear();
        this.composerBlobStores.clear(), this.stateCachesByBcId.clear(), this.metadataProperties.clear(), this.cloudAgentStateProperties.clear(), this.metadataLoadPromises.clear(), this.bcIdToComposerId.clear(), this.blobWriteQueuesByComposerId.clear(), this.pendingWritesByComposerId.clear(), this.releaseGuard.clear(), this.deletedAgentChats.clear(), super.dispose();
    }
}, qZr = Re([
    F(0, ki),
    F(1, wh),
    F(2, no)
], qZr), bn(KGt, qZr, 1);

}
