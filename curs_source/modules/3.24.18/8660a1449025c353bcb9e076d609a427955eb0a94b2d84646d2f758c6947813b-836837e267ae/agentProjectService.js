import { kb } from "./Aeg.js";
import { Qe, st } from "./Iwo.js";
import { Y9, jn, nR } from "./SZu.js";
import { S1k, lVt } from "./Ycg.js";
import { k1k } from "./agentProjectReactive.js";
import { wS } from "./displayHelpers.js";
import { It } from "./instantiation.js";
import { Kf, ca, qJa } from "./reactive.js";
import { E } from "./tslib.es6.js";
import { Ai, Xo } from "./uuid_2.js";
import { RI, Sr } from "./workspace.js";
var w1k, Qmg, Jmg, egg, tgg, Ocl, Fcl, ngg;
export { Fcl, Jmg, Ocl, Qmg, egg, ngg, tgg, w1k };
var __wakaru_Bcl_initialized = false;
export function Bcl() {
if (__wakaru_Bcl_initialized) return;
__wakaru_Bcl_initialized = true;
"use strict";
E(), Xo(), Qe(), Sr(), It(), Kf(), k1k(), wS(), w1k = jn("agentProjectServiceFacade"), Qmg = "glass.localAgentProjects.v1", Jmg = "glass.localAgentProjectMembership.v1", egg = "glass.cloudAgentProjects.v1", tgg = "glass.cloudAgentProjectMembership.v1", Ocl = class {
    get workspaceIdentifier() {
        return this._workspaceIdentifier;
    }
    constructor(t){
        this.id = t.id, this.name = new ca(t.name), this.createdAt = t.createdAt, this.lastUpdatedAt = new ca(t.lastUpdatedAt), this._workspaceIdentifier = t.workspaceIdentifier, this.source = t.source, this.isArchived = new ca(t.isArchived);
    }
    updateWorkspaceIdentifier(t) {
        this._workspaceIdentifier = t;
    }
}, Fcl = class extends st {
    constructor(t){
        super(), this._projectRows = new ca([]), this._projectRowsById = new Map, this._projectRowIdByCanonicalKey = new Map, this._membership = new Map, this._projectsDirty = !1, this._membershipDirty = !1, this._storageService = t.storageService, this._storageKeys = t.storageKeys, this._source = t.source, this._allAgents = t.allAgents, this._readOnly = t.readOnly ?? !1, this._repairWorkspaceIdentifier = t.repairWorkspaceIdentifier, this._derivedAgentProjects = S1k(this._allAgents, this._projectRows), this.agentProjects = this._derivedAgentProjects, this._register({
            dispose: ()=>this._derivedAgentProjects.dispose()
        }), this._loadFromStorage();
    }
    _loadFromStorage() {
        this._loadProjectsFromStorage(), this._loadMembershipFromStorage();
    }
    _loadProjectsFromStorage() {
        this._projectRowsById.clear(), this._projectRowIdByCanonicalKey.clear();
        const t = this._storageService.get(this._storageKeys.projects, -1);
        if (!t) {
            this._projectRows.set([]);
            return;
        }
        try {
            const n = JSON.parse(t).map((s)=>new Ocl({
                    id: s.id,
                    name: s.name,
                    workspaceIdentifier: Y9(s.workspace) ?? RI,
                    createdAt: s.createdAt,
                    lastUpdatedAt: s.lastUpdatedAt,
                    isArchived: s.isArchived ?? !1,
                    source: this._source
                }));
            if (this._repairWorkspaceIdentifier) {
                const s = this._repairWorkspaceIdentifier;
                for (const o of n){
                    if (!nR(o.workspaceIdentifier)) continue;
                    const a = s(o.workspaceIdentifier);
                    a !== o.workspaceIdentifier && (o.updateWorkspaceIdentifier(a), this._projectsDirty = !0);
                }
            }
            const { kept: i, droppedToCanonical: r } = this._dedupeRowsByCanonicalKey(n);
            for (const s of i){
                this._projectRowsById.set(s.id, s);
                const o = lVt(s.workspaceIdentifier);
                o !== null && this._projectRowIdByCanonicalKey.set(o, s.id);
            }
            if (this._projectRows.set(i), r.size > 0 && this._readOnly) for (const [s, o] of r){
                const a = this._projectRowsById.get(o);
                a && this._projectRowsById.set(s, a);
            }
            else r.size > 0 && (this._rewriteMembershipStorageForDroppedRows(r), this._persistProjectsOnly());
        } catch  {
            this._projectRows.set([]), this._projectsDirty = !0;
        }
    }
    _dedupeRowsByCanonicalKey(t) {
        const e = new Map, n = new Map, i = [];
        for (const r of t){
            const s = lVt(r.workspaceIdentifier);
            if (s === null) {
                i.push(r);
                continue;
            }
            const o = e.get(s);
            if (!o) {
                e.set(s, r), i.push(r);
                continue;
            }
            const a = r.createdAt < o.createdAt ? r : r.createdAt > o.createdAt ? o : r.id < o.id ? r : o, l = a === r ? o : r;
            if (a !== o) {
                e.set(s, a);
                const c = i.indexOf(o);
                c >= 0 && i.splice(c, 1, a);
            }
            n.set(l.id, a.id);
        }
        return {
            kept: i,
            droppedToCanonical: n
        };
    }
    _rewriteMembershipStorageForDroppedRows(t) {
        const e = this._storageService.get(this._storageKeys.membership, -1);
        if (!e) return;
        let n;
        try {
            n = JSON.parse(e);
        } catch  {
            return;
        }
        let i = !1;
        for (const [r, s] of Object.entries(n)){
            const o = t.get(s);
            o && (n[r] = o, i = !0);
        }
        i && this._storageService.store(this._storageKeys.membership, JSON.stringify(n), -1, 0);
    }
    _loadMembershipFromStorage() {
        this._membership.clear();
        const t = this._storageService.get(this._storageKeys.membership, -1);
        if (t) try {
            const e = JSON.parse(t);
            for (const [n, i] of Object.entries(e))this._membership.set(n, i);
        } catch  {
            this._membershipDirty = !0;
        }
    }
    persistAll() {
        this._readOnly || (this._projectsDirty && this._persistProjectsOnly(), this._membershipDirty && (this._storageService.store(this._storageKeys.membership, JSON.stringify(Object.fromEntries(this._membership.entries())), -1, 0), this._membershipDirty = !1));
    }
    clearAll() {
        this._projectRowsById.clear(), this._projectRowIdByCanonicalKey.clear(), this._membership.clear(), this._projectRows.set([]), this._storageService.remove(this._storageKeys.projects, -1), this._storageService.remove(this._storageKeys.membership, -1), this._projectsDirty = !1, this._membershipDirty = !1;
    }
    _persistProjectsOnly() {
        const t = this._projectRows.value.map((e)=>({
                id: e.id,
                name: e.name.value,
                workspace: e.workspaceIdentifier,
                createdAt: e.createdAt,
                lastUpdatedAt: e.lastUpdatedAt.value,
                isArchived: e.isArchived.value
            }));
        this._storageService.store(this._storageKeys.projects, JSON.stringify(t), -1, 0), this._projectsDirty = !1;
    }
    findProjectRow(t) {
        return this._projectRowsById.get(t);
    }
    getProject(t) {
        return this._derivedAgentProjects.value.find((e)=>e.id === t);
    }
    createProject(t, e) {
        const n = lVt(t);
        if (n !== null) {
            const o = this._projectRowIdByCanonicalKey.get(n);
            if (o !== void 0) return o;
        }
        const i = Ai(), r = Date.now(), s = new Ocl({
            id: i,
            name: e,
            workspaceIdentifier: t,
            createdAt: r,
            lastUpdatedAt: r,
            isArchived: !1,
            source: this._source
        });
        return this._insertRow(s), i;
    }
    _insertRow(t) {
        this._projectsDirty = !0, this._projectRowsById.set(t.id, t);
        const e = lVt(t.workspaceIdentifier);
        if (e !== null && this._projectRowIdByCanonicalKey.set(e, t.id), this._pendingRowInserts) {
            this._pendingRowInserts.push(t);
            return;
        }
        this._projectRows.set([
            ...this._projectRows.value,
            t
        ]);
    }
    beginBatchInsert() {
        this._pendingRowInserts = [];
    }
    flushBatchInsert() {
        const t = this._pendingRowInserts;
        this._pendingRowInserts = void 0, t && t.length > 0 && (this._projectRows.set([
            ...this._projectRows.value,
            ...t
        ]), this._projectsDirty = !0);
    }
    resolveOrCreate(t, e, n) {
        const i = e.projectId;
        if (i) {
            const r = this.findProjectRow(i);
            if (r && r.workspaceIdentifier.id === t.id) return i;
        }
        return this.createProject(t, n);
    }
    setMembership(t, e) {
        this._membership.get(t) !== e && (this._membership.set(t, e), this._membershipDirty = !0);
    }
    removeMembership(t) {
        this._membership.delete(t) && (this._membershipDirty = !0);
    }
    removeProjectIfEmpty(t) {
        for (const i of this._membership.values())if (i === t) return;
        const e = this._projectRowsById.get(t);
        if (!e) return;
        this._projectRowsById.delete(t);
        const n = lVt(e.workspaceIdentifier);
        n !== null && this._projectRowIdByCanonicalKey.get(n) === t && this._projectRowIdByCanonicalKey.delete(n), this._projectRows.set(this._projectRows.value.filter((i)=>i.id !== t)), this._projectsDirty = !0;
    }
    getMembership(t) {
        return this._membership.get(t);
    }
    rekeyMembership(t, e, n) {
        const i = this._membership.get(t);
        if (!i) return;
        this._membership.delete(t), this._membership.set(e, i), this._membershipDirty = !0;
        const r = this.findProjectRow(i);
        r && (r.updateWorkspaceIdentifier(n), r.lastUpdatedAt.set(Date.now()), this._projectsDirty = !0);
    }
    repairLocalWorkspaceIdentifier(t) {
        const e = t.projectId ?? this.getMembership(t.composerId);
        if (!e) return;
        const n = this.findProjectRow(e);
        n && this._alignAgentIdentifierToRow(t, n);
    }
    _alignAgentIdentifierToRow(t, e) {
        if (nR(t.workspaceIdentifier) && !nR(e.workspaceIdentifier)) {
            t.workspaceIdentifier = e.workspaceIdentifier;
            return;
        }
        const n = lVt(t.workspaceIdentifier), i = lVt(e.workspaceIdentifier);
        n !== null && n === i && t.workspaceIdentifier.id !== e.workspaceIdentifier.id && (t.workspaceIdentifier = e.workspaceIdentifier);
    }
    ensureCloudAssignment(t, e, n) {
        const i = this.getMembership(t), r = i ? this.findProjectRow(i) : void 0;
        if (i && r) return;
        const s = this.createProject(e, n);
        this.setMembership(t, s);
    }
    renameProject(t, e) {
        const n = this.findProjectRow(t);
        if (!n) throw new Error(`Unknown ${this._source} agent project: ${t}`);
        n.name.set(e), n.lastUpdatedAt.set(Date.now()), this._projectsDirty = !0, this.persistAll();
    }
    archiveProject(t) {
        const e = this.findProjectRow(t);
        if (!e) throw new Error(`Unknown ${this._source} agent project: ${t}`);
        e.isArchived.set(!0), e.lastUpdatedAt.set(Date.now()), this._projectsDirty = !0, this.persistAll();
    }
}, ngg = class extends st {
    constructor(t, e){
        super(), this._local = t, this._cloud = e;
        const n = new qJa([
            t.agentProjects,
            e.agentProjects
        ]);
        this._register({
            dispose: ()=>n.dispose()
        }), this.agentProjects = n;
    }
    async create(t) {
        const e = kb(t.workspaceIdentifier) ? this._cloud : this._local, n = e.createProject(t.workspaceIdentifier, t.name ?? "New Project");
        e.persistAll();
        const i = e.getProject(n);
        if (!i) throw new Error("Failed to create agent project");
        return i;
    }
    get(t) {
        return this._local.getProject(t) ?? this._cloud.getProject(t);
    }
    async rename(t, e) {
        this._serviceOwningProject(t).renameProject(t, e);
    }
    async archive(t) {
        this._serviceOwningProject(t).archiveProject(t);
    }
    _serviceOwningProject(t) {
        if (this._local.getProject(t)) return this._local;
        if (this._cloud.getProject(t)) return this._cloud;
        throw new Error(`Unknown agent project: ${t}`);
    }
};

}
