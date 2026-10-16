import { Eze, FTi, Htg, Tze } from "./Aeg.js";
import { Ga, Gt, Qe, Tr, st, tt } from "./Iwo.js";
import { bn, lAe } from "./SZu.js";
import { Yu, qn } from "./async.js";
import { iI, w1 } from "./composerLogService.js";
import { Wo, gr } from "./editorService.js";
import { fo, ps } from "./environmentService.js";
import { Rn } from "./extensions.js";
import { IS, is, ms } from "./files.js";
import { LJa } from "./index_34.js";
import { Ki, Ot } from "./network.js";
import { Rd, ih } from "./pathService.js";
import { Mil, OTi } from "./planStorageServiceTypes.js";
import { Em, Rh } from "./resolverService.js";
import { Iu, Lr, Os } from "./resources.js";
import { Zi, ki } from "./storage_2.js";
import { Xq, wve } from "./ternarySearchTree.js";
import { Vf, u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
import { Sr, yr } from "./workspace.js";
var Szt, mle, Dil, yxn;
export { Dil, Szt, mle, yxn };
var __wakaru_VPe_initialized = false;
export function VPe() {
if (__wakaru_VPe_initialized) return;
__wakaru_VPe_initialized = true;
"use strict";
E(), Rn(), Mil(), fn(), ms(), wve(), Ga(), Zi(), Sr(), ih(), fo(), Wo(), Lr(), Gt(), Qe(), qn(), Ki(), Xo(), LJa(), Em(), u_(), iI(), Szt = OTi, mle = ((t)=>(t.PENDING = "pending", t.IN_PROGRESS = "in_progress", t.COMPLETE = "complete", t))(mle || {}), Dil = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/, yxn = class extends st {
    constructor(t, e, n, i, r, s, o, a, l){
        super(), this.fileService = t, this.storageService = e, this.workspaceContextService = n, this.pathService = i, this.environmentService = r, this.editorService = s, this.textModelService = o, this.textFileService = a, this._composerLogService = l, this._onDidChangePlan = this._register(new tt), this.onDidChangePlan = this._onDidChangePlan.event, this.registryKey = "composer.planRegistry", this.registry = new Map, this.registryLoaded = !1, this.redirectsKey = "composer.planRedirects", this.redirects = new Map, this.migrationKey = "composer.planMigrationToHomeDirCompleted", this.composerToPlans = new Map, this.registrySaveScheduler = this._register(new Yu(()=>this.doSaveRegistry(), yxn.REGISTRY_SAVE_DELAY_MS)), this._register(this.storageService.onWillSaveState(()=>this.registrySaveScheduler.flush())), this.loadRegistry().then(()=>{
            this.migrateFromUserDataDir(), this.initializeWatchers();
        });
    }
    async initializeWatchers() {
        const t = await this.getUserPlansDir();
        this._store.isDisposed || this.fileService.isDisposed || (this._register(this.fileService.watch(t)), this._register(this.fileService.onDidFilesChange((e)=>{
            for (const { planId: n, uri: i } of this.plansAffectedBy(e))this._onDidChangePlan.fire({
                planId: n,
                uri: i
            });
        })));
    }
    getPlanUriTree() {
        if (!this.planUriTree) {
            const t = Xq.forUris((e)=>!this.fileService.hasCapability(e, 1024));
            for (const { uri: e, id: n } of this.registry.values())t.set(e, n);
            this.planUriTree = t;
        }
        return this.planUriTree;
    }
    plansAffectedBy(t) {
        if (this.registry.size === 0) return [];
        const e = this.getPlanUriTree(), n = new Set, i = (s)=>{
            for (const o of s){
                const a = e.get(o);
                a !== void 0 && n.add(a);
            }
        };
        i(t.rawAdded), i(t.rawUpdated), i(t.rawDeleted);
        for (const s of t.rawDeleted){
            const o = e.findSuperstr(s);
            if (o) for (const [, a] of o)n.add(a);
        }
        const r = [];
        for (const s of n){
            const o = this.registry.get(s);
            o && r.push({
                planId: s,
                uri: o.uri
            });
        }
        return r;
    }
    async loadRegistry() {
        if (!this.registryLoaded) {
            try {
                const t = this.storageService.get(this.registryKey, 0, "{}"), e = JSON.parse(t);
                for (const [n, i] of Object.entries(e)){
                    let r = {};
                    if (i.builtBy) if (Array.isArray(i.builtBy)) for (const s of i.builtBy)r[s] = [];
                    else r = i.builtBy;
                    this.registry.set(n, {
                        ...i,
                        uri: rt.revive(i.uri),
                        editedBy: i.editedBy || [],
                        referencedBy: i.referencedBy || [],
                        builtBy: r
                    });
                }
            } catch (t) {
                this._composerLogService.error("[PlanStorageService] Failed to load registry:", t);
            }
            try {
                const t = this.storageService.get(this.redirectsKey, 0, "{}"), e = JSON.parse(t);
                this.redirects = new Map(Object.entries(e));
            } catch (t) {
                this._composerLogService.error("[PlanStorageService] Failed to load redirects:", t);
            }
            this.registryLoaded = !0, this.planUriTree = void 0, this.rebuildInvertedIndex();
        }
    }
    saveRegistry() {
        this.planUriTree = void 0, this.registrySaveScheduler.isScheduled() || this.registrySaveScheduler.schedule();
    }
    doSaveRegistry() {
        const t = {};
        for (const [n, i] of this.registry.entries())t[n] = i;
        this.storageService.store(this.registryKey, JSON.stringify(t), 0, 0);
        const e = Object.fromEntries(this.redirects);
        this.storageService.store(this.redirectsKey, JSON.stringify(e), 0, 0);
    }
    dispose() {
        this.registrySaveScheduler.flush(), super.dispose();
    }
    async migrateFromUserDataDir() {
        if (!this.storageService.getBoolean(this.migrationKey, 0, !1)) try {
            const e = Os(this.environmentService.userRoamingDataHome, "plans"), n = await this.getUserPlansDir();
            if (!await this.fileService.exists(e)) {
                this.storageService.store(this.migrationKey, !0, 0, 0);
                return;
            }
            await this.fileService.createFolder(n);
            const r = await this.fileService.resolve(e);
            if (!r.children) {
                this.storageService.store(this.migrationKey, !0, 0, 0);
                return;
            }
            this._composerLogService.info(`[PlanStorageService] Migrating ${r.children.length} plan files from user data dir to ~/.cursor/plans`);
            const s = [];
            for (const o of r.children){
                if (!o.isFile || !o.name.endsWith(".plan.md")) continue;
                const a = o.resource, l = Os(n, o.name);
                try {
                    if (await this.fileService.exists(l)) {
                        this._composerLogService.info(`[PlanStorageService] Plan file already exists at new location, skipping: ${o.name}`), s.push({
                            oldUri: a,
                            newUri: l
                        }), await this.fileService.del(a);
                        continue;
                    }
                    const u = await this.fileService.readFile(a);
                    await this.fileService.writeFile(l, u.value);
                    for (const [d, h] of this.registry.entries())if (Iu.isEqual(h.uri, a)) {
                        h.uri = l, this.planUriTree = void 0, this._composerLogService.info(`[PlanStorageService] Updated registry entry for plan: ${d}`);
                        break;
                    }
                    s.push({
                        oldUri: a,
                        newUri: l
                    }), await this.fileService.del(a), this._composerLogService.info(`[PlanStorageService] Migrated plan file: ${o.name}`);
                } catch (c) {
                    this._composerLogService.error(`[PlanStorageService] Failed to migrate plan file ${o.name}:`, c);
                }
            }
            this.saveRegistry(), await this.replaceEditorsForMigratedPlans(s);
            try {
                const o = await this.fileService.resolve(e);
                (!o.children || o.children.length === 0) && (await this.fileService.del(e), this._composerLogService.info("[PlanStorageService] Removed empty old plans directory"));
            } catch  {}
            this.registrySaveScheduler.flush(), this.storageService.store(this.migrationKey, !0, 0, 0), this._composerLogService.info("[PlanStorageService] Plan migration completed successfully");
        } catch (e) {
            this._composerLogService.error("[PlanStorageService] Failed to migrate plans:", e);
        }
    }
    async replaceEditorsForMigratedPlans(t) {
        if (t.length === 0) return;
        const e = new Map;
        for (const { oldUri: n, newUri: i } of t){
            const r = this.editorService.findEditors(n);
            if (r.length !== 0) for (const { groupId: s, editor: o } of r){
                const a = e.get(s) ?? [];
                a.push({
                    editor: o,
                    replacement: {
                        resource: i,
                        options: {
                            preserveFocus: !0
                        }
                    }
                }), e.set(s, a);
            }
        }
        for (const [n, i] of e)try {
            await this.editorService.replaceEditors(i.map((r)=>({
                    editor: r.editor,
                    replacement: r.replacement
                })), n), this._composerLogService.info(`[PlanStorageService] Replaced ${i.length} editor(s) in group ${n}`);
        } catch (r) {
            this._composerLogService.error(`[PlanStorageService] Failed to replace editors in group ${n}:`, r);
        }
    }
    recordRedirect(t, e) {
        if (t !== e) {
            this.redirects.set(t, e);
            for (const [n, i] of this.redirects.entries())i === t && this.redirects.set(n, e);
        }
    }
    resolveRedirects(t) {
        let e = t, n = 0;
        const i = 10;
        for(; this.redirects.has(e) && n < i;)e = this.redirects.get(e), n++;
        return e;
    }
    async getUserPlansDir() {
        const t = await this.pathService.userHome();
        return Os(t, ".cursor", "plans");
    }
    getWorkspacePlansDir() {
        const t = this.workspaceContextService.getWorkspace();
        if (t.folders.length) return Os(t.folders[0].uri, ".cursor", "plans");
    }
    async writePlanFileWithFallback(t, e) {
        const n = await this.getUserPlansDir();
        try {
            try {
                await this.fileService.createFolder(n);
            } catch (o) {
                if (this.isPermissionError(o)) throw o;
            }
            const s = Os(n, t);
            return await this.fileService.writeFile(s, Tr.fromString(e)), s;
        } catch (s) {
            if (!this.isPermissionError(s)) throw s;
            this._composerLogService.warn("[PlanStorageService] Permission denied writing to user plans directory, falling back to workspace .cursor/plans:", s);
        }
        const i = this.getWorkspacePlansDir();
        if (!i) throw new Error("Cannot write plan file: permission denied for user home directory and no workspace folder is available");
        try {
            await this.fileService.createFolder(i);
        } catch  {}
        const r = Os(i, t);
        return await this.fileService.writeFile(r, Tr.fromString(e)), r;
    }
    isPermissionError(t) {
        return t instanceof Error ? lAe(t) === IS.NoPermissions : !1;
    }
    sanitizeFileName(t) {
        return t.toLowerCase().replace(/[<>:"/\\|?*]/g, "_").replace(/\s+/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, 100);
    }
    async createPlanForComposer(t) {
        await this.loadRegistry();
        const e = Ai().slice(0, 8), i = `${this.sanitizeFileName(t.name)}_${e}`, r = `${i}.plan.md`, s = this.getVirtualUri(i), o = {
            name: t.name,
            overview: t.overview,
            todos: t.todos,
            isProject: t.isProject,
            phases: t.phases
        }, a = Eze(o) + `

` + t.body, l = await this.writePlanFileWithFallback(r, a), c = Date.now(), u = {
            id: i,
            name: t.name,
            uri: l,
            createdBy: t.composerId,
            editedBy: [
                t.composerId
            ],
            referencedBy: [
                t.composerId
            ],
            builtBy: {},
            lastUpdatedAt: c,
            createdAt: c
        };
        return this.registry.set(i, u), this.saveRegistry(), this._onDidChangePlan.fire({
            planId: i,
            uri: l
        }), {
            planId: i,
            fileUri: l,
            virtualUri: s
        };
    }
    async loadPlanByUri(t) {
        if (t.scheme === Ot.cursorPlan) {
            const s = await this.resolveVirtualUri(t);
            if (!s) throw new Error(`Plan not found for virtual URI: ${t.toString()}`);
            t = s.uri;
        }
        let e = t;
        try {
            if (!await this.fileService.exists(t)) {
                const o = await this.getRegistryEntry(t);
                o && (e = o.uri);
            }
        } catch  {
            const s = await this.getRegistryEntry(t);
            s && (e = s.uri);
        }
        const i = (await this.fileService.readFile(e)).value.toString(), r = Tze(i, this._composerLogService);
        return r ? {
            metadata: r.frontmatter,
            body: r.body
        } : this.parseLegacyFormat(i);
    }
    parseLegacyFormat(t) {
        const e = FTi(t);
        return {
            metadata: e.frontmatter,
            body: e.body
        };
    }
    async loadPlanById(t) {
        await this.loadRegistry();
        const e = this.resolveRedirects(t), n = this.registry.get(e);
        if (n) return this.loadPlanByUri(n.uri);
    }
    async updatePlanContent(t, e, n) {
        await this.loadRegistry();
        const i = await this.getRegistryEntry(t);
        if (!i) throw new Error(`Plan not found: ${t}`);
        const r = await this.loadPlanByUri(i.uri), s = Eze(r.metadata) + `

` + e, o = await this.textModelService.createModelReference(i.uri);
        try {
            o.object.textEditorModel.setValue(s), await this.textFileService.save(i.uri, {
                force: !0
            });
        } finally{
            o.dispose();
        }
        i.lastUpdatedAt = Date.now(), n && !i.editedBy.includes(n) && i.editedBy.push(n), this.registry.set(i.id, i), this.saveRegistry(), this._onDidChangePlan.fire({
            planId: i.id,
            uri: i.uri
        });
    }
    async updatePlanMetadata(t, e, n) {
        await this.loadRegistry();
        const i = await this.getRegistryEntry(t);
        if (!i) throw new Error(`Plan not found: ${t}`);
        const r = await this.loadPlanByUri(i.uri), s = {
            name: e.name ?? r.metadata.name,
            overview: e.overview ?? r.metadata.overview,
            todos: e.todos ?? r.metadata.todos,
            isProject: e.isProject ?? r.metadata.isProject ?? !1,
            phases: e.phases ?? r.metadata.phases
        }, o = Eze(s) + `

` + r.body, a = await this.textModelService.createModelReference(i.uri);
        try {
            a.object.textEditorModel.setValue(o), await this.textFileService.save(i.uri, {
                force: !0
            });
        } finally{
            a.dispose();
        }
        s.name !== i.name && (i.name = s.name), i.lastUpdatedAt = Date.now(), n && !i.editedBy.includes(n) && i.editedBy.push(n), this.registry.set(i.id, i), this.saveRegistry(), this._onDidChangePlan.fire({
            planId: i.id,
            uri: i.uri
        });
    }
    async updatePlanMetadataWithBody(t, e, n, i) {
        await this.loadRegistry();
        const r = await this.getRegistryEntry(t);
        if (!r) throw new Error(`Plan not found: ${t}`);
        const s = await this.loadPlanByUri(r.uri), o = {
            name: e.name ?? s.metadata.name,
            overview: e.overview ?? s.metadata.overview,
            todos: e.todos ?? s.metadata.todos,
            isProject: e.isProject ?? s.metadata.isProject ?? !1,
            phases: e.phases ?? s.metadata.phases
        }, a = Eze(o) + `

` + n, l = await this.textModelService.createModelReference(r.uri);
        try {
            l.object.textEditorModel.setValue(a), await this.textFileService.save(r.uri, {
                force: !0
            });
        } finally{
            l.dispose();
        }
        o.name !== r.name && (r.name = o.name), r.lastUpdatedAt = Date.now(), i && !r.editedBy.includes(i) && r.editedBy.push(i), this.registry.set(r.id, r), this.saveRegistry(), this._onDidChangePlan.fire({
            planId: r.id,
            uri: r.uri
        });
    }
    async movePlanToWorkspace(t, e) {
        await this.loadRegistry();
        const n = await this.getRegistryEntry(t);
        if (!n) throw new Error(`Plan not found: ${t}`);
        const i = Os(e, ".cursor", "plans");
        try {
            await this.fileService.createFolder(i);
        } catch  {}
        const r = `${n.id}.plan.md`, s = Os(i, r);
        return await this.fileService.move(n.uri, s, !0), n.uri = s, this.planUriTree = void 0, n.lastUpdatedAt = Date.now(), this.registry.set(n.id, n), this.saveRegistry(), this._onDidChangePlan.fire({
            planId: n.id,
            uri: s
        }), s;
    }
    async getRegistryEntry(t) {
        if (await this.loadRegistry(), typeof t == "string") {
            const n = this.resolveRedirects(t);
            return this.registry.get(n);
        }
        if (t.scheme === Ot.cursorPlan) return this.resolveVirtualUri(t);
        for (const n of this.registry.values())if (n.uri.fsPath === t.fsPath) return n;
        const e = this.extractPlanIdFromUri(t);
        if (e) {
            const n = this.resolveRedirects(e), i = this.registry.get(n);
            if (i) return i;
        }
    }
    extractPlanIdFromUri(t) {
        const n = t.path.match(/\/([^/]+)\.plan\.md$/);
        return n ? n[1] : void 0;
    }
    getVirtualUri(t) {
        return rt.from({
            scheme: Ot.cursorPlan,
            authority: "plan",
            path: `/${t}.plan.md`
        });
    }
    async resolveVirtualUri(t) {
        await this.loadRegistry();
        const e = t.path.match(/\/([^/]+)\.plan\.md$/);
        if (e) {
            const i = e[1], r = this.resolveRedirects(i);
            return this.registry.get(r);
        }
        const n = t.authority;
        if (n && n !== "plan") {
            for (const i of this.registry.values())if (i.createdBy === n) return i;
        }
    }
    async registerExistingPlan(t, e) {
        await this.loadRegistry();
        const n = await this.getRegistryEntry(t);
        if (n) {
            let l = !1;
            return e && n.createdBy.length === 0 && (n.createdBy = e, l = !0), e && !n.editedBy.includes(e) && (n.editedBy.push(e), l = !0), e && !n.referencedBy.includes(e) && (n.referencedBy.push(e), l = !0), l && (n.lastUpdatedAt = Date.now(), this.saveRegistry(), this._onDidChangePlan.fire({
                planId: n.id,
                uri: n.uri
            })), n;
        }
        const i = await this.loadPlanByUri(t), r = t.path.split("/").pop() || "";
        let s;
        if (r.endsWith(".plan.md")) s = r.slice(0, -8);
        else {
            const l = Ai().slice(0, 8);
            s = `${this.sanitizeFileName(i.metadata.name || "plan")}_${l}`;
        }
        const o = Date.now(), a = {
            id: s,
            name: i.metadata.name || "Untitled Plan",
            uri: t,
            createdBy: e ?? "",
            editedBy: e ? [
                e
            ] : [],
            referencedBy: e ? [
                e
            ] : [],
            builtBy: {},
            lastUpdatedAt: o,
            createdAt: o
        };
        return this.registry.set(s, a), this.saveRegistry(), this._composerLogService.info("[PlanStorageService] Registered existing plan:", s, "for composer:", e ?? "(manual)"), a;
    }
    async importPlanFileForComposer(t, e, n) {
        const i = await this.writePlanFileWithFallback(e, n);
        return this.registerExistingPlan(i, t);
    }
    async getPlanForComposer(t) {
        await this.loadRegistry();
        let e;
        for (const n of this.registry.values())n.createdBy === t && n.referencedBy.includes(t) && (!e || n.lastUpdatedAt > e.lastUpdatedAt) && (e = n);
        if (!e) for (const n of this.registry.values())t in n.builtBy && n.referencedBy.includes(t) && (!e || n.lastUpdatedAt > e.lastUpdatedAt) && (e = n);
        return e;
    }
    async getPlanEntriesReferencedByComposer(t) {
        await this.loadRegistry();
        const e = [];
        for (const n of this.registry.values())n.referencedBy.includes(t) && e.push(n);
        return e;
    }
    async adoptPlan(t, e) {
        await this.loadRegistry();
        const n = await this.getRegistryEntry(t);
        if (n) return n.createdBy = e, n.lastUpdatedAt = Date.now(), n.editedBy.includes(e) || n.editedBy.push(e), n.referencedBy.includes(e) || n.referencedBy.push(e), this.registry.set(n.id, n), this.saveRegistry(), n;
    }
    async registerBuild(t, e, n) {
        await this.loadRegistry();
        const i = await this.getRegistryEntry(t);
        if (!i) throw new Error(`Plan not found: ${t}`);
        const r = i.builtBy[e];
        (!r || JSON.stringify(r) !== JSON.stringify(n)) && (i.builtBy[e] = n, i.lastUpdatedAt = Date.now(), this.registry.set(i.id, i), this.saveRegistry(), this._onDidChangePlan.fire({
            planId: i.id,
            uri: i.uri
        }));
    }
    async unregisterBuild(t, e) {
        await this.loadRegistry();
        const n = await this.getRegistryEntry(t);
        !n || !(e in n.builtBy) || (delete n.builtBy[e], n.lastUpdatedAt = Date.now(), this.registry.set(n.id, n), this.saveRegistry(), this._onDidChangePlan.fire({
            planId: n.id,
            uri: n.uri
        }));
    }
    getPlanStatus(t, e) {
        return Object.keys(t.builtBy).length === 0 ? "pending" : e.some((i)=>i.status === "pending" || i.status === "in_progress") ? "in_progress" : "complete";
    }
    getRegistryEntrySync(t) {
        if (!this.registryLoaded) return;
        if (typeof t == "string") {
            const n = this.resolveRedirects(t);
            return this.registry.get(n);
        }
        if (t.scheme === Ot.cursorPlan) {
            const n = t.path.match(/\/([^/]+)\.plan\.md$/);
            if (n) {
                const i = n[1], r = this.resolveRedirects(i);
                return this.registry.get(r);
            }
        }
        for (const n of this.registry.values())if (n.uri.fsPath === t.fsPath) return n;
        const e = this.extractPlanIdFromUri(t);
        if (e) {
            const n = this.resolveRedirects(e), i = this.registry.get(n);
            if (i) return i;
        }
    }
    async getPlanEntriesBuiltBy(t) {
        await this.loadRegistry();
        const e = [];
        for (const n of this.registry.values())t in n.builtBy && e.push({
            planId: n.id,
            uri: n.uri
        });
        return e;
    }
    rebuildInvertedIndex() {
        this.composerToPlans.clear();
        for (const t of this.registry.values())for (const e of t.referencedBy)this.composerToPlans.has(e) || this.composerToPlans.set(e, new Set), this.composerToPlans.get(e).add(t.id);
    }
    async updateComposerReferences(t, e) {
        const n = new Set;
        for (const s of e){
            const o = rt.parse(s), a = this.getRegistryEntrySync(o);
            a && n.add(a.id);
        }
        const i = this.composerToPlans.get(t) ?? new Set, r = [];
        for (const s of i)if (!n.has(s)) {
            const o = this.registry.get(s);
            o && (o.referencedBy = o.referencedBy.filter((a)=>a !== t), r.push(o));
        }
        for (const s of n){
            const o = this.registry.get(s);
            o && !o.referencedBy.includes(t) && (o.referencedBy.push(t), r.push(o));
        }
        if (n.size > 0 ? this.composerToPlans.set(t, n) : this.composerToPlans.delete(t), r.length > 0) {
            this.saveRegistry();
            for (const s of r)this._onDidChangePlan.fire({
                planId: s.id,
                uri: s.uri
            });
        }
    }
    async dereferencePlansCreatedByComposer(t, e) {
        if (await this.loadRegistry(), e.length === 0) return [];
        const n = new Set(e.map((a)=>a.fsPath)), i = [], r = new Set, s = this.composerToPlans.get(t);
        let o = !1;
        for (const a of this.registry.values())if (a.createdBy === t && n.has(a.uri.fsPath) && a.referencedBy.includes(t)) if (i.push({
            planId: a.id,
            uri: a.uri
        }), a.referencedBy = a.referencedBy.filter((l)=>l !== t), s?.delete(a.id), o = !0, a.referencedBy.length === 0) {
            this.registry.delete(a.id), r.add(a.id);
            for (const [l, c] of this.redirects.entries())(l === a.id || c === a.id) && r.add(l);
            for (const l of this.composerToPlans.values())l.delete(a.id);
        } else this.registry.set(a.id, a);
        s && s.size === 0 && this.composerToPlans.delete(t);
        for (const [a, l] of this.composerToPlans.entries())l.size === 0 && this.composerToPlans.delete(a);
        for (const a of r)this.redirects.delete(a);
        (o || r.size > 0) && this.saveRegistry();
        for (const a of i)this._onDidChangePlan.fire({
            planId: a.planId,
            uri: a.uri
        });
        return i;
    }
    async updatePlanFull(t, e, n) {
        await this.loadRegistry();
        const i = await this.getRegistryEntry(t);
        if (!i) throw new Error(`Plan not found: ${t}`);
        const r = await this.loadPlanByUri(i.uri), s = {
            name: r.metadata.name,
            overview: r.metadata.overview,
            todos: r.metadata.todos,
            body: r.body,
            isProject: r.metadata.isProject,
            phases: r.metadata.phases
        }, o = Htg(s, e), a = o.name !== s.name, l = {
            name: o.name,
            overview: o.overview,
            todos: o.todos,
            isProject: o.isProject,
            phases: o.phases
        };
        let c = i.uri, u = i.id;
        if (a && e.name) {
            const p = i.id.lastIndexOf("_"), g = p !== -1 ? i.id.slice(p + 1) : Ai().slice(0, 8);
            u = `${this.sanitizeFileName(e.name)}_${g}`;
            const _ = `${u}.plan.md`, b = i.uri.path, y = b.lastIndexOf("/"), S = y !== -1 ? b.slice(0, y) : "";
            c = i.uri.with({
                path: `${S}/${_}`
            });
        }
        const d = Eze(l) + `

` + o.body, h = await this.textModelService.createModelReference(c);
        try {
            h.object.textEditorModel.setValue(d), await this.textFileService.save(c, {
                force: !0
            });
        } finally{
            h.dispose();
        }
        if (a && c.toString() !== i.uri.toString()) {
            const p = i.id;
            try {
                await this.fileService.del(i.uri);
            } catch (g) {
                this._composerLogService.warn("[PlanStorageService] Failed to delete old plan file:", g);
            }
            this.registry.delete(i.id), i.id = u, i.uri = c, this.planUriTree = void 0, this.recordRedirect(p, u);
        }
        i.name = l.name, i.lastUpdatedAt = Date.now(), i.editedBy.includes(n) || i.editedBy.push(n), this.registry.set(i.id, i), this.saveRegistry(), this._onDidChangePlan.fire({
            planId: i.id,
            uri: i.uri
        });
    }
    async updatePlanModelDirty(t, e, n) {
        await this.loadRegistry();
        const i = await this.textModelService.createModelReference(t), r = i.object.textEditorModel;
        let s;
        const o = r.getValue();
        if (o.trim() === "") s = {
            name: "",
            overview: "",
            todos: [],
            body: "",
            isProject: !1,
            phases: void 0
        };
        else {
            const d = Tze(o, this._composerLogService);
            if (d) s = {
                name: d.frontmatter.name ?? "",
                overview: d.frontmatter.overview ?? "",
                todos: d.frontmatter.todos ?? [],
                body: d.body,
                isProject: d.frontmatter.isProject ?? !1,
                phases: d.frontmatter.phases
            };
            else {
                const h = FTi(o);
                s = {
                    name: h.frontmatter.name ?? "",
                    overview: h.frontmatter.overview ?? "",
                    todos: h.frontmatter.todos ?? [],
                    body: h.body,
                    isProject: !1,
                    phases: void 0
                };
            }
        }
        const a = Htg(s, e), l = {
            name: a.name,
            overview: a.overview,
            todos: a.todos,
            isProject: a.isProject,
            phases: a.phases
        }, c = Eze(l) + `

` + a.body;
        r.setValue(c);
        const u = await this.getRegistryEntry(t);
        return u && (u.name = a.name, u.lastUpdatedAt = Date.now(), u.editedBy.includes(n) || u.editedBy.push(n), this.registry.set(u.id, u), this.saveRegistry()), i;
    }
    async savePlanModel(t) {
        await this.textFileService.save(t, {
            force: !0
        });
        const e = await this.getRegistryEntry(t);
        e && this._onDidChangePlan.fire({
            planId: e.id,
            uri: e.uri
        });
    }
    async resolveCurrentUri(t) {
        const e = await this.getRegistryEntry(t);
        return e ? e.uri : t;
    }
}, yxn.REGISTRY_SAVE_DELAY_MS = 1e3, yxn = Re([
    F(0, is),
    F(1, ki),
    F(2, yr),
    F(3, Rd),
    F(4, ps),
    F(5, gr),
    F(6, Rh),
    F(7, Vf),
    F(8, w1)
], yxn), bn(Szt, yxn, 1);

}
