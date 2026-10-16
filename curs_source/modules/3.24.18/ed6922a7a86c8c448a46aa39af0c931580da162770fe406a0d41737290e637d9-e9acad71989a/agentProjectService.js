import { Se, we } from "./HVr.js";
import { De_, Exh, xxh } from "./agentProjectReactive.js";
import { Q3 } from "./displayHelpers.js";
import { Ze } from "./instantiation.js";
import { dwe, fJ, gk, rp, vn } from "./qIc.js";
import { N1, UGt, gh } from "./reactive.js";
import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
import { cW, ci } from "./workspace.js";
function Ae_(e) {
    const t = new Exh(e.allAgents, e.id, e.source);
    return {
        id: e.id,
        name: e.name,
        createdAt: e.createdAt,
        lastUpdatedAt: e.lastUpdatedAt,
        workspaceIdentifier: e.workspaceIdentifier,
        source: e.source,
        isArchived: e.isArchived,
        agents: t,
        branchNames: new xxh(t)
    };
}
function Re_(e, t) {
    return new UGt([
        t
    ], (n)=>n.map((i)=>Ae_({
                id: i.id,
                name: i.name,
                createdAt: i.createdAt,
                lastUpdatedAt: i.lastUpdatedAt,
                workspaceIdentifier: i.workspaceIdentifier,
                source: i.source,
                isArchived: i.isArchived,
                allAgents: e
            })));
}
function LCt(e) {
    return rp(e) ? `folder:${e.uri.toString()}` : gk(e) ? `config:${e.configPath.toString()}` : null;
}
var Me_, Ixh, Axh, ITo, Rxh;
export { Ae_, Axh, ITo, Ixh, LCt, Me_, Re_, Rxh };
var __wakaru_Pe__initialized = false;
export function Pe_() {
if (__wakaru_Pe__initialized) return;
__wakaru_Pe__initialized = true;
"use strict";
x(), Js(), Se(), ci(), Ze(), N1(), De_(), Q3(), Me_ = vn("agentProjectServiceFacade"), Ixh = "glass.cloudAgentProjects.v1", Axh = "glass.cloudAgentProjectMembership.v1", ITo = class {
    get workspaceIdentifier() {
        return this._workspaceIdentifier;
    }
    constructor(e){
        this.id = e.id, this.name = new gh(e.name), this.createdAt = e.createdAt, this.lastUpdatedAt = new gh(e.lastUpdatedAt), this._workspaceIdentifier = e.workspaceIdentifier, this.source = e.source, this.isArchived = new gh(e.isArchived);
    }
    updateWorkspaceIdentifier(e) {
        this._workspaceIdentifier = e;
    }
}, Rxh = class extends we {
    constructor(e){
        super(), this._projectRows = new gh([]), this._projectRowsById = new Map, this._projectRowIdByCanonicalKey = new Map, this._membership = new Map, this._projectsDirty = !1, this._membershipDirty = !1, this._storageService = e.storageService, this._storageKeys = e.storageKeys, this._source = e.source, this._allAgents = e.allAgents, this._readOnly = e.readOnly ?? !1, this._repairWorkspaceIdentifier = e.repairWorkspaceIdentifier, this._derivedAgentProjects = Re_(this._allAgents, this._projectRows), this.agentProjects = this._derivedAgentProjects, this._register({
            dispose: ()=>this._derivedAgentProjects.dispose()
        }), this._loadFromStorage();
    }
    _loadFromStorage() {
        this._loadProjectsFromStorage(), this._loadMembershipFromStorage();
    }
    _loadProjectsFromStorage() {
        this._projectRowsById.clear(), this._projectRowIdByCanonicalKey.clear();
        const e = this._storageService.get(this._storageKeys.projects, -1);
        if (!e) {
            this._projectRows.set([]);
            return;
        }
        try {
            const n = JSON.parse(e).map((s)=>new ITo({
                    id: s.id,
                    name: s.name,
                    workspaceIdentifier: dwe(s.workspace) ?? cW,
                    createdAt: s.createdAt,
                    lastUpdatedAt: s.lastUpdatedAt,
                    isArchived: s.isArchived ?? !1,
                    source: this._source
                }));
            if (this._repairWorkspaceIdentifier) {
                const s = this._repairWorkspaceIdentifier;
                for (const o of n){
                    if (!fJ(o.workspaceIdentifier)) continue;
                    const a = s(o.workspaceIdentifier);
                    a !== o.workspaceIdentifier && (o.updateWorkspaceIdentifier(a), this._projectsDirty = !0);
                }
            }
            const { kept: i, droppedToCanonical: r } = this._dedupeRowsByCanonicalKey(n);
            for (const s of i){
                this._projectRowsById.set(s.id, s);
                const o = LCt(s.workspaceIdentifier);
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
    _dedupeRowsByCanonicalKey(e) {
        const t = new Map, n = new Map, i = [];
        for (const r of e){
            const s = LCt(r.workspaceIdentifier);
            if (s === null) {
                i.push(r);
                continue;
            }
            const o = t.get(s);
            if (!o) {
                t.set(s, r), i.push(r);
                continue;
            }
            const a = r.createdAt < o.createdAt ? r : r.createdAt > o.createdAt ? o : r.id < o.id ? r : o, c = a === r ? o : r;
            if (a !== o) {
                t.set(s, a);
                const l = i.indexOf(o);
                l >= 0 && i.splice(l, 1, a);
            }
            n.set(c.id, a.id);
        }
        return {
            kept: i,
            droppedToCanonical: n
        };
    }
    _rewriteMembershipStorageForDroppedRows(e) {
        const t = this._storageService.get(this._storageKeys.membership, -1);
        if (!t) return;
        let n;
        try {
            n = JSON.parse(t);
        } catch  {
            return;
        }
        let i = !1;
        for (const [r, s] of Object.entries(n)){
            const o = e.get(s);
            o && (n[r] = o, i = !0);
        }
        i && this._storageService.store(this._storageKeys.membership, JSON.stringify(n), -1, 0);
    }
    _loadMembershipFromStorage() {
        this._membership.clear();
        const e = this._storageService.get(this._storageKeys.membership, -1);
        if (e) try {
            const t = JSON.parse(e);
            for (const [n, i] of Object.entries(t))this._membership.set(n, i);
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
        const e = this._projectRows.value.map((t)=>({
                id: t.id,
                name: t.name.value,
                workspace: t.workspaceIdentifier,
                createdAt: t.createdAt,
                lastUpdatedAt: t.lastUpdatedAt.value,
                isArchived: t.isArchived.value
            }));
        this._storageService.store(this._storageKeys.projects, JSON.stringify(e), -1, 0), this._projectsDirty = !1;
    }
    findProjectRow(e) {
        return this._projectRowsById.get(e);
    }
    getProject(e) {
        return this._derivedAgentProjects.value.find((t)=>t.id === e);
    }
    createProject(e, t) {
        const n = LCt(e);
        if (n !== null) {
            const o = this._projectRowIdByCanonicalKey.get(n);
            if (o !== void 0) return o;
        }
        const i = zn(), r = Date.now(), s = new ITo({
            id: i,
            name: t,
            workspaceIdentifier: e,
            createdAt: r,
            lastUpdatedAt: r,
            isArchived: !1,
            source: this._source
        });
        return this._insertRow(s), i;
    }
    _insertRow(e) {
        this._projectsDirty = !0, this._projectRowsById.set(e.id, e);
        const t = LCt(e.workspaceIdentifier);
        if (t !== null && this._projectRowIdByCanonicalKey.set(t, e.id), this._pendingRowInserts) {
            this._pendingRowInserts.push(e);
            return;
        }
        this._projectRows.set([
            ...this._projectRows.value,
            e
        ]);
    }
    beginBatchInsert() {
        this._pendingRowInserts = [];
    }
    flushBatchInsert() {
        const e = this._pendingRowInserts;
        this._pendingRowInserts = void 0, e && e.length > 0 && (this._projectRows.set([
            ...this._projectRows.value,
            ...e
        ]), this._projectsDirty = !0);
    }
    resolveOrCreate(e, t, n) {
        const i = t.projectId;
        if (i) {
            const r = this.findProjectRow(i);
            if (r && r.workspaceIdentifier.id === e.id) return i;
        }
        return this.createProject(e, n);
    }
    setMembership(e, t) {
        this._membership.get(e) !== t && (this._membership.set(e, t), this._membershipDirty = !0);
    }
    removeMembership(e) {
        this._membership.delete(e) && (this._membershipDirty = !0);
    }
    removeProjectIfEmpty(e) {
        for (const i of this._membership.values())if (i === e) return;
        const t = this._projectRowsById.get(e);
        if (!t) return;
        this._projectRowsById.delete(e);
        const n = LCt(t.workspaceIdentifier);
        n !== null && this._projectRowIdByCanonicalKey.get(n) === e && this._projectRowIdByCanonicalKey.delete(n), this._projectRows.set(this._projectRows.value.filter((i)=>i.id !== e)), this._projectsDirty = !0;
    }
    getMembership(e) {
        return this._membership.get(e);
    }
    rekeyMembership(e, t, n) {
        const i = this._membership.get(e);
        if (!i) return;
        this._membership.delete(e), this._membership.set(t, i), this._membershipDirty = !0;
        const r = this.findProjectRow(i);
        r && (r.updateWorkspaceIdentifier(n), r.lastUpdatedAt.set(Date.now()), this._projectsDirty = !0);
    }
    repairLocalWorkspaceIdentifier(e) {
        const t = e.projectId ?? this.getMembership(e.composerId);
        if (!t) return;
        const n = this.findProjectRow(t);
        n && this._alignAgentIdentifierToRow(e, n);
    }
    _alignAgentIdentifierToRow(e, t) {
        if (fJ(e.workspaceIdentifier) && !fJ(t.workspaceIdentifier)) {
            e.workspaceIdentifier = t.workspaceIdentifier;
            return;
        }
        const n = LCt(e.workspaceIdentifier), i = LCt(t.workspaceIdentifier);
        n !== null && n === i && e.workspaceIdentifier.id !== t.workspaceIdentifier.id && (e.workspaceIdentifier = t.workspaceIdentifier);
    }
    ensureCloudAssignment(e, t, n) {
        const i = this.getMembership(e), r = i ? this.findProjectRow(i) : void 0;
        if (i && r) return;
        const s = this.createProject(t, n);
        this.setMembership(e, s);
    }
    renameProject(e, t) {
        const n = this.findProjectRow(e);
        if (!n) throw new Error(`Unknown ${this._source} agent project: ${e}`);
        n.name.set(t), n.lastUpdatedAt.set(Date.now()), this._projectsDirty = !0, this.persistAll();
    }
    archiveProject(e) {
        const t = this.findProjectRow(e);
        if (!t) throw new Error(`Unknown ${this._source} agent project: ${e}`);
        t.isArchived.set(!0), t.lastUpdatedAt.set(Date.now()), this._projectsDirty = !0, this.persistAll();
    }
};

}
