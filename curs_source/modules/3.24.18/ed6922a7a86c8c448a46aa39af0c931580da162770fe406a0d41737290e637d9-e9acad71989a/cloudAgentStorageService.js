import { EVd, wVd, ydo } from "./A3u.js";
import { qh, zv } from "./De_3.js";
import { Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { XMe, ub } from "./async.cursor.js";
import { gPe, hm, rdo } from "./background_composer_pb.js";
import { Yu } from "./browser.ts";
import { CVd } from "./cloudAgentNameBlob.js";
import { bdo, xVd } from "./cloudAgentPersistedMetadata.js";
import { BU, SN } from "./composerBlobStore.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { vPe } from "./constants_19.js";
import { Pn } from "./extensions.js";
import { Gp } from "./index_3.ts";
import { A1 } from "./index_5.ts";
import { Ze } from "./instantiation.js";
import { WPu } from "./promise-extras.ts";
import { PKe, hSi } from "./proto-base64.js";
import { mn, vn } from "./qIc.js";
import { av, sy } from "./solidEventsWrapper.js";
import { Vn, yn } from "./storage_2.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
var IVd, Bkt, AVd, sji;
export { AVd, Bkt, IVd, sji };
var __wakaru_OWt_initialized = false;
export function OWt() {
if (__wakaru_OWt_initialized) return;
__wakaru_OWt_initialized = true;
"use strict";
x(), A1(), hSi(), Gp(), Yu(), ub(), Se(), hm(), Vn(), vPe(), Ze(), Pn(), sy(), BU(), im(), nl(), CVd(), xVd(), IVd = class {
    constructor(){
        this.isMetadataLoaded = !1;
    }
    hasLoadedMetadata() {
        return this.isMetadataLoaded;
    }
    getMetadata() {
        return this.metadata;
    }
    setMetadata(e) {
        this.isMetadataLoaded = !0, this.metadata = e;
    }
    setMetadataMissing() {
        this.isMetadataLoaded = !0, this.metadata = void 0;
    }
    setState(e, t) {
        this.currentStateBlobIdHex = e, this.currentState = t;
    }
    getState(e) {
        if (this.currentStateBlobIdHex === e) return this.currentState;
    }
    clear() {
        this.isMetadataLoaded = !1, this.metadata = void 0, this.currentStateBlobIdHex = void 0, this.currentState = void 0;
    }
}, Bkt = vn("cloudAgentStorageService"), AVd = 50, sji = class extends we {
    constructor(e, t, n){
        super(), this.storageService = e, this.structuredLogService = t, this.composerDataService = n, this.composerBlobStores = new Map, this.stateCachesByBcId = new Map, this.metadataProperties = new Map, this.cloudAgentStateProperties = new Map, this.metadataLoadPromises = new Map, this.bcIdToComposerId = new Map, this.blobWriteQueuesByComposerId = new Map, this.pendingWritesByComposerId = new Map, this.releaseGuard = new XMe, this.deletedAgentChats = new Map;
    }
    getComposerBlobStore(e, t) {
        if (this.deletedAgentChats.get(e) !== t) if (!this.bcIdToComposerId.has(e)) this.bcIdToComposerId.set(e, t);
        else {
            const i = this.bcIdToComposerId.get(e);
            i !== t && this.structuredLogService.debug("background_composer", "bcId has multiple composerIds", {
                bcId: e,
                existingComposerId: i,
                composerId: t
            });
        }
        let n = this.composerBlobStores.get(t);
        return n === void 0 && (n = new SN(this.storageService, t), this.composerBlobStores.set(t, n)), n;
    }
    getStateCache(e) {
        let t = this.stateCachesByBcId.get(e);
        return t === void 0 && (t = new IVd, this.stateCachesByBcId.set(e, t)), t;
    }
    async getMetadataIfExists(e) {
        const t = this.getStateCache(e);
        if (t.hasLoadedMetadata()) return t.getMetadata();
        const n = this.metadataLoadPromises.get(e);
        if (n) return n;
        const i = this.loadMetadataFromDisk(e).finally(()=>{
            this.metadataLoadPromises.delete(e);
        });
        return this.metadataLoadPromises.set(e, i), i;
    }
    async loadMetadataFromDisk(e) {
        const t = this.releaseGuard.capture(e), n = ydo(e), i = await this.storageService.cursorDiskKVGet(n), r = EVd(i);
        if (t.isCurrent()) {
            const s = this.getStateCache(e);
            r === void 0 ? s.setMetadataMissing() : s.setMetadata(r);
        }
        return r;
    }
    async getMetadata(e) {
        const t = await this.getMetadataIfExists(e);
        if (t === void 0) throw new Error(`Metadata not found for bcId: ${e}`);
        return t;
    }
    async setMetadata(e, t) {
        const n = this.releaseGuard.capture(e), i = ydo(e);
        await this.storageService.cursorDiskKVSet(i, PKe.enc(t.toBinary())), n.isCurrent() && this.getStateCache(e).setMetadata(t);
    }
    async getMetadataAsync(e) {
        return this.getMetadata(e);
    }
    getMetadataProperty(e) {
        let t = this.metadataProperties.get(e);
        if (!t) {
            t = new av("not_loaded"), this.metadataProperties.set(e, t);
            const n = t, i = this.releaseGuard.capture(e);
            this.getMetadataIfExists(e).then((r)=>{
                r && i.isCurrent() && n.change(r);
            });
        }
        return t;
    }
    async getBlob(e) {
        const { bcId: t, composerId: n, blobId: i } = e;
        return await this.getComposerBlobStore(t, n).getBlob(qh(), i);
    }
    async storePreFetchedBlobs(e) {
        const { bcId: t, composerId: n, blobs: i } = e;
        if (i.length === 0) return;
        const r = this.getComposerBlobStore(t, n), s = this.getBlobWriteQueue(n), o = qh();
        await s.enqueueList(i, async (a)=>{
            await r.setBlob(o, a.id, a.value);
        });
    }
    getBlobWriteQueue(e) {
        let t = this.blobWriteQueuesByComposerId.get(e);
        return t || (t = new WPu({
            max: AVd
        }), this.blobWriteQueuesByComposerId.set(e, t)), t;
    }
    getPendingWrites(e) {
        let t = this.pendingWritesByComposerId.get(e);
        return t || (t = new Set, this.pendingWritesByComposerId.set(e, t)), t;
    }
    enqueueSetBlobs(e) {
        const { bcId: t, composerId: n, blobs: i } = e;
        if (i.length === 0) return;
        const r = this.getComposerBlobStore(t, n), s = this.getBlobWriteQueue(n), o = this.getPendingWrites(n), a = qh();
        for (const c of i){
            const l = s.enqueue(async ()=>{
                await r.setBlob(a, c.id, c.value);
            }).catch((u)=>{
                this.structuredLogService.error("background_composer", "Error in enqueueSetBlobs", u, {
                    bcId: t,
                    composerId: n
                });
            }).finally(()=>{
                o.delete(l);
            });
            o.add(l);
        }
    }
    async waitForPendingWrites(e) {
        const { composerId: t } = e, n = this.pendingWritesByComposerId.get(t);
        !n || n.size === 0 || await Promise.all(n);
    }
    async getCloudAgentStateFromDiskOrCache(e, t) {
        const { bcId: n, composerId: i } = e, r = this.releaseGuard.capture(n), s = zv(t), o = this.getStateCache(n).getState(s);
        if (o !== void 0) return o;
        const a = await this.getBlob({
            bcId: n,
            composerId: i,
            blobId: t
        });
        if (a === void 0) throw new Error(`Cloud agent state blob not found for bcId: ${n}, composerId: ${i}`);
        const c = gPe.fromBinary(a);
        return r.isCurrent() && this.getStateCache(n).setState(s, c), c;
    }
    async getPRUrlFromState(e, t) {
        const { bcId: n, composerId: i } = e;
        if (!t.prUrl) return;
        const r = t.prUrl;
        if (!r) return;
        const s = await this.getBlob({
            bcId: n,
            composerId: i,
            blobId: r
        });
        if (s) return new TextDecoder().decode(s);
    }
    async getAgentNameFromState(e, t) {
        const { bcId: n, composerId: i } = e;
        return wVd(t.agentName, (r)=>this.getBlob({
                bcId: n,
                composerId: i,
                blobId: r
            }));
    }
    async getBranchNameFromState(e, t) {
        const { bcId: n, composerId: i } = e;
        if (!t.branchName || t.branchName.length === 0) return;
        const r = await this.getBlob({
            bcId: n,
            composerId: i,
            blobId: t.branchName
        });
        if (r) return new TextDecoder().decode(r);
    }
    getNumTurnsFromState(e) {
        return e.conversationState ? e.conversationState.turns.length : 0;
    }
    async getDerivedPropertiesFromState(e, t) {
        const [n, i, r] = await Promise.all([
            this.getPRUrlFromState(e, t),
            this.getAgentNameFromState(e, t),
            this.getBranchNameFromState(e, t)
        ]), s = this.getNumTurnsFromState(t), o = t.baseBranch, a = t.originalRequestStartUnixMs ? new Date(Number(t.originalRequestStartUnixMs)) : void 0, c = t.initialSource;
        return {
            prUrl: n,
            numTurns: s,
            agentName: i,
            branchName: r,
            baseBranch: o,
            originalRequestStartTime: a,
            initialSource: c
        };
    }
    getCloudAgentStateProperty(e) {
        const { bcId: t, composerId: n } = e;
        let i = this.cloudAgentStateProperties.get(t);
        if (!i) {
            i = new av("not_loaded"), this.cloudAgentStateProperties.set(t, i);
            const r = i, s = this.releaseGuard.capture(t);
            this.getMetadataIfExists(t).then(async (o)=>{
                if (!o?.cloudAgentStateBlobId || !s.isCurrent()) return;
                const a = await this.getCloudAgentStateFromDiskOrCache({
                    bcId: t,
                    composerId: n
                }, o.cloudAgentStateBlobId), c = await this.getDerivedPropertiesFromState({
                    bcId: t,
                    composerId: n
                }, a);
                s.isCurrent() && r.change(c);
            });
        }
        return i;
    }
    async getCloudAgentState(e) {
        const { bcId: t, composerId: n } = e, i = await this.getMetadata(t);
        return {
            value: await this.getCloudAgentStateFromDiskOrCache({
                bcId: t,
                composerId: n
            }, i.cloudAgentStateBlobId),
            metadata: i
        };
    }
    async getConversationStateWithLastInteraction(e) {
        const { bcId: t, composerId: n } = e, i = await this.getCloudAgentState({
            bcId: t,
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
    async updateMetadata(e, t) {
        if (this.deletedAgentChats.has(e)) return;
        const n = await this.getMetadataIfExists(e);
        if (this.deletedAgentChats.has(e)) return;
        const i = new rdo({
            cloudAgentStateBlobId: n?.cloudAgentStateBlobId,
            offsetKey: n?.offsetKey,
            workflowStatus: n?.workflowStatus,
            ...t,
            version: bdo,
            timestampMs: Date.now()
        });
        await this.setMetadata(e, i), this.metadataProperties.get(e)?.change(i);
    }
    async saveNewCloudAgentState(e) {
        const { bcId: t, composerId: n, blobId: i, state: r, offsetKey: s } = e;
        if (this.deletedAgentChats.get(t) === n) return;
        this.deletedAgentChats.delete(t);
        const o = this.releaseGuard.capture(t), a = this.getComposerBlobStore(t, n), c = qh(), l = await this.composerDataService.getComposerHandleById(n);
        if (!l) throw new Error(`Composer handle not found for composerId: ${n}`);
        const u = r.toBinary();
        if (await a.setBlob(c, i, u), r.conversationState && l.setData("conversationState", r.conversationState), await this.updateMetadata(t, {
            cloudAgentStateBlobId: i,
            offsetKey: s
        }), o.isCurrent() && this.getStateCache(t).setState(zv(i), r), this.cloudAgentStateProperties.has(t)) {
            const h = await this.getDerivedPropertiesFromState({
                bcId: t,
                composerId: n
            }, r);
            this.cloudAgentStateProperties.get(t).change(h);
        }
    }
    async saveNewWorkflowStatus(e, t, n) {
        await this.updateMetadata(e, {
            workflowStatus: t,
            offsetKey: n
        });
    }
    async releaseCloudAgent(e) {
        this.releaseGuard.delete(e), this.stateCachesByBcId.get(e)?.clear(), this.stateCachesByBcId.delete(e), this.metadataLoadPromises.delete(e), this.metadataProperties.get(e)?.dispose(), this.metadataProperties.delete(e), this.cloudAgentStateProperties.get(e)?.dispose(), this.cloudAgentStateProperties.delete(e);
        const t = this.bcIdToComposerId.get(e);
        this.bcIdToComposerId.delete(e), t !== void 0 && await this.releaseComposer(t);
    }
    async deleteCloudAgentMetadata({ bcId: e, composerId: t }) {
        this.deletedAgentChats.set(e, t);
        const n = this.releaseCloudAgent(e);
        await this.storageService.cursorDiskKVSet(ydo(e), void 0), await n;
    }
    async releaseComposer(e) {
        const t = this.composerBlobStores.get(e), n = this.pendingWritesByComposerId.get(e);
        n !== void 0 && n.size > 0 && await Promise.all(n), t !== void 0 && await t.flush(qh()), !this.isComposerMapped(e) && (this.composerBlobStores.delete(e), this.blobWriteQueuesByComposerId.delete(e), this.pendingWritesByComposerId.delete(e));
    }
    isComposerMapped(e) {
        for (const t of this.bcIdToComposerId.values())if (t === e) return !0;
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
        for (const e of this.metadataProperties.values())e.dispose();
        for (const e of this.cloudAgentStateProperties.values())e.dispose();
        for (const e of this.stateCachesByBcId.values())e.clear();
        this.composerBlobStores.clear(), this.stateCachesByBcId.clear(), this.metadataProperties.clear(), this.cloudAgentStateProperties.clear(), this.metadataLoadPromises.clear(), this.bcIdToComposerId.clear(), this.blobWriteQueuesByComposerId.clear(), this.pendingWritesByComposerId.clear(), this.releaseGuard.clear(), this.deletedAgentChats.clear(), super.dispose();
    }
}, sji = ie([
    C(0, yn),
    C(1, Xh),
    C(2, Zs)
], sji), mn(Bkt, sji, 1);

}
