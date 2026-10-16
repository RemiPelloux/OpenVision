import { Fo, Se, bt, ve, we, wi } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ac, bn } from "./async.js";
import { Cfh, dXi, o8e, s8e } from "./cgh.js";
import { lb, n0 } from "./composerLogService.js";
import { Ni, hn } from "./editorService.js";
import { Vr, Yi } from "./environmentService.js";
import { Pn } from "./extensions.js";
import { Fi, Ii, h_ } from "./files.js";
import { Zah } from "./index_29.js";
import { gt, li } from "./network.js";
import { fu, zl } from "./pathService.js";
import { $So, wfh } from "./planStorageServiceTypes.js";
import { gze, mn } from "./qIc.js";
import { Nl, bc } from "./resolverService.js";
import { Li, jr, pl } from "./resources.js";
import { Vn, yn } from "./storage_2.js";
import { J9, gJ } from "./ternarySearchTree.js";
import { Ag, Xp } from "./textfiles.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Js, zn } from "./uuid.js";
import { Jn, ci } from "./workspace.js";
var TVt, Kde, HSo, EVt;
export { EVt, HSo, Kde, TVt };
var __wakaru_ott_initialized = false;
export function ott() {
if (__wakaru_ott_initialized) return;
__wakaru_ott_initialized = true;
"use strict";
x(), Pn(), wfh(), Qt(), Fi(), gJ(), Fo(), Vn(), ci(), fu(), Vr(), Ni(), Li(), bt(), Se(), bn(), li(), Js(), Zah(), Nl(), Ag(), n0(), TVt = $So, Kde = ((e)=>(e.PENDING = "pending", e.IN_PROGRESS = "in_progress", e.COMPLETE = "complete", e))(Kde || {}), HSo = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/, EVt = class extends we {
    constructor(e, t, n, i, r, s, o, a, c){
        super(), this.fileService = e, this.storageService = t, this.workspaceContextService = n, this.pathService = i, this.environmentService = r, this.editorService = s, this.textModelService = o, this.textFileService = a, this._composerLogService = c, this._onDidChangePlan = this._register(new ve), this.onDidChangePlan = this._onDidChangePlan.event, this.registryKey = "composer.planRegistry", this.registry = new Map, this.registryLoaded = !1, this.redirectsKey = "composer.planRedirects", this.redirects = new Map, this.migrationKey = "composer.planMigrationToHomeDirCompleted", this.composerToPlans = new Map, this.registrySaveScheduler = this._register(new ac(()=>this.doSaveRegistry(), EVt.REGISTRY_SAVE_DELAY_MS)), this._register(this.storageService.onWillSaveState(()=>this.registrySaveScheduler.flush())), this.loadRegistry().then(()=>{
            this.migrateFromUserDataDir(), this.initializeWatchers();
        });
    }
    async initializeWatchers() {
        const e = await this.getUserPlansDir();
        this._store.isDisposed || this.fileService.isDisposed || (this._register(this.fileService.watch(e)), this._register(this.fileService.onDidFilesChange((t)=>{
            for (const { planId: n, uri: i } of this.plansAffectedBy(t))this._onDidChangePlan.fire({
                planId: n,
                uri: i
            });
        })));
    }
    getPlanUriTree() {
        if (!this.planUriTree) {
            const e = J9.forUris((t)=>!this.fileService.hasCapability(t, 1024));
            for (const { uri: t, id: n } of this.registry.values())e.set(t, n);
            this.planUriTree = e;
        }
        return this.planUriTree;
    }
    plansAffectedBy(e) {
        if (this.registry.size === 0) return [];
        const t = this.getPlanUriTree(), n = new Set, i = (s)=>{
            for (const o of s){
                const a = t.get(o);
                a !== void 0 && n.add(a);
            }
        };
        i(e.rawAdded), i(e.rawUpdated), i(e.rawDeleted);
        for (const s of e.rawDeleted){
            const o = t.findSuperstr(s);
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
                const e = this.storageService.get(this.registryKey, 0, "{}"), t = JSON.parse(e);
                for (const [n, i] of Object.entries(t)){
                    let r = {};
                    if (i.builtBy) if (Array.isArray(i.builtBy)) for (const s of i.builtBy)r[s] = [];
                    else r = i.builtBy;
                    this.registry.set(n, {
                        ...i,
                        uri: Ee.revive(i.uri),
                        editedBy: i.editedBy || [],
                        referencedBy: i.referencedBy || [],
                        builtBy: r
                    });
                }
            } catch (e) {
                this._composerLogService.error("[PlanStorageService] Failed to load registry:", e);
            }
            try {
                const e = this.storageService.get(this.redirectsKey, 0, "{}"), t = JSON.parse(e);
                this.redirects = new Map(Object.entries(t));
            } catch (e) {
                this._composerLogService.error("[PlanStorageService] Failed to load redirects:", e);
            }
            this.registryLoaded = !0, this.planUriTree = void 0, this.rebuildInvertedIndex();
        }
    }
    saveRegistry() {
        this.planUriTree = void 0, this.registrySaveScheduler.isScheduled() || this.registrySaveScheduler.schedule();
    }
    doSaveRegistry() {
        const e = {};
        for (const [n, i] of this.registry.entries())e[n] = i;
        this.storageService.store(this.registryKey, JSON.stringify(e), 0, 0);
        const t = Object.fromEntries(this.redirects);
        this.storageService.store(this.redirectsKey, JSON.stringify(t), 0, 0);
    }
    dispose() {
        this.registrySaveScheduler.flush(), super.dispose();
    }
    async migrateFromUserDataDir() {
        if (!this.storageService.getBoolean(this.migrationKey, 0, !1)) try {
            const t = jr(this.environmentService.userRoamingDataHome, "plans"), n = await this.getUserPlansDir();
            if (!await this.fileService.exists(t)) {
                this.storageService.store(this.migrationKey, !0, 0, 0);
                return;
            }
            await this.fileService.createFolder(n);
            const r = await this.fileService.resolve(t);
            if (!r.children) {
                this.storageService.store(this.migrationKey, !0, 0, 0);
                return;
            }
            this._composerLogService.info(`[PlanStorageService] Migrating ${r.children.length} plan files from user data dir to ~/.cursor/plans`);
            const s = [];
            for (const o of r.children){
                if (!o.isFile || !o.name.endsWith(".plan.md")) continue;
                const a = o.resource, c = jr(n, o.name);
                try {
                    if (await this.fileService.exists(c)) {
                        this._composerLogService.info(`[PlanStorageService] Plan file already exists at new location, skipping: ${o.name}`), s.push({
                            oldUri: a,
                            newUri: c
                        }), await this.fileService.del(a);
                        continue;
                    }
                    const u = await this.fileService.readFile(a);
                    await this.fileService.writeFile(c, u.value);
                    for (const [h, p] of this.registry.entries())if (pl.isEqual(p.uri, a)) {
                        p.uri = c, this.planUriTree = void 0, this._composerLogService.info(`[PlanStorageService] Updated registry entry for plan: ${h}`);
                        break;
                    }
                    s.push({
                        oldUri: a,
                        newUri: c
                    }), await this.fileService.del(a), this._composerLogService.info(`[PlanStorageService] Migrated plan file: ${o.name}`);
                } catch (l) {
                    this._composerLogService.error(`[PlanStorageService] Failed to migrate plan file ${o.name}:`, l);
                }
            }
            this.saveRegistry(), await this.replaceEditorsForMigratedPlans(s);
            try {
                const o = await this.fileService.resolve(t);
                (!o.children || o.children.length === 0) && (await this.fileService.del(t), this._composerLogService.info("[PlanStorageService] Removed empty old plans directory"));
            } catch  {}
            this.registrySaveScheduler.flush(), this.storageService.store(this.migrationKey, !0, 0, 0), this._composerLogService.info("[PlanStorageService] Plan migration completed successfully");
        } catch (t) {
            this._composerLogService.error("[PlanStorageService] Failed to migrate plans:", t);
        }
    }
    async replaceEditorsForMigratedPlans(e) {
        if (e.length === 0) return;
        const t = new Map;
        for (const { oldUri: n, newUri: i } of e){
            const r = this.editorService.findEditors(n);
            if (r.length !== 0) for (const { groupId: s, editor: o } of r){
                const a = t.get(s) ?? [];
                a.push({
                    editor: o,
                    replacement: {
                        resource: i,
                        options: {
                            preserveFocus: !0
                        }
                    }
                }), t.set(s, a);
            }
        }
        for (const [n, i] of t)try {
            await this.editorService.replaceEditors(i.map((r)=>({
                    editor: r.editor,
                    replacement: r.replacement
                })), n), this._composerLogService.info(`[PlanStorageService] Replaced ${i.length} editor(s) in group ${n}`);
        } catch (r) {
            this._composerLogService.error(`[PlanStorageService] Failed to replace editors in group ${n}:`, r);
        }
    }
    recordRedirect(e, t) {
        if (e !== t) {
            this.redirects.set(e, t);
            for (const [n, i] of this.redirects.entries())i === e && this.redirects.set(n, t);
        }
    }
    resolveRedirects(e) {
        let t = e, n = 0;
        const i = 10;
        for(; this.redirects.has(t) && n < i;)t = this.redirects.get(t), n++;
        return t;
    }
    async getUserPlansDir() {
        const e = await this.pathService.userHome();
        return jr(e, ".cursor", "plans");
    }
    getWorkspacePlansDir() {
        const e = this.workspaceContextService.getWorkspace();
        if (e.folders.length) return jr(e.folders[0].uri, ".cursor", "plans");
    }
    async writePlanFileWithFallback(e, t) {
        const n = await this.getUserPlansDir();
        try {
            try {
                await this.fileService.createFolder(n);
            } catch (o) {
                if (this.isPermissionError(o)) throw o;
            }
            const s = jr(n, e);
            return await this.fileService.writeFile(s, wi.fromString(t)), s;
        } catch (s) {
            if (!this.isPermissionError(s)) throw s;
            this._composerLogService.warn("[PlanStorageService] Permission denied writing to user plans directory, falling back to workspace .cursor/plans:", s);
        }
        const i = this.getWorkspacePlansDir();
        if (!i) throw new Error("Cannot write plan file: permission denied for user home directory and no workspace folder is available");
        try {
            await this.fileService.createFolder(i);
        } catch  {}
        const r = jr(i, e);
        return await this.fileService.writeFile(r, wi.fromString(t)), r;
    }
    isPermissionError(e) {
        return e instanceof Error ? gze(e) === h_.NoPermissions : !1;
    }
    sanitizeFileName(e) {
        return e.toLowerCase().replace(/[<>:"/\\|?*]/g, "_").replace(/\s+/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, 100);
    }
    async createPlanForComposer(e) {
        await this.loadRegistry();
        const t = zn().slice(0, 8), i = `${this.sanitizeFileName(e.name)}_${t}`, r = `${i}.plan.md`, s = this.getVirtualUri(i), o = {
            name: e.name,
            overview: e.overview,
            todos: e.todos,
            isProject: e.isProject,
            phases: e.phases
        }, a = o8e(o) + `

` + e.body, c = await this.writePlanFileWithFallback(r, a), l = Date.now(), u = {
            id: i,
            name: e.name,
            uri: c,
            createdBy: e.composerId,
            editedBy: [
                e.composerId
            ],
            referencedBy: [
                e.composerId
            ],
            builtBy: {},
            lastUpdatedAt: l,
            createdAt: l
        };
        return this.registry.set(i, u), this.saveRegistry(), this._onDidChangePlan.fire({
            planId: i,
            uri: c
        }), {
            planId: i,
            fileUri: c,
            virtualUri: s
        };
    }
    async loadPlanByUri(e) {
        if (e.scheme === gt.cursorPlan) {
            const s = await this.resolveVirtualUri(e);
            if (!s) throw new Error(`Plan not found for virtual URI: ${e.toString()}`);
            e = s.uri;
        }
        let t = e;
        try {
            if (!await this.fileService.exists(e)) {
                const o = await this.getRegistryEntry(e);
                o && (t = o.uri);
            }
        } catch  {
            const s = await this.getRegistryEntry(e);
            s && (t = s.uri);
        }
        const i = (await this.fileService.readFile(t)).value.toString(), r = s8e(i, this._composerLogService);
        return r ? {
            metadata: r.frontmatter,
            body: r.body
        } : this.parseLegacyFormat(i);
    }
    parseLegacyFormat(e) {
        const t = dXi(e);
        return {
            metadata: t.frontmatter,
            body: t.body
        };
    }
    async loadPlanById(e) {
        await this.loadRegistry();
        const t = this.resolveRedirects(e), n = this.registry.get(t);
        if (n) return this.loadPlanByUri(n.uri);
    }
    async updatePlanContent(e, t, n) {
        await this.loadRegistry();
        const i = await this.getRegistryEntry(e);
        if (!i) throw new Error(`Plan not found: ${e}`);
        const r = await this.loadPlanByUri(i.uri), s = o8e(r.metadata) + `

` + t, o = await this.textModelService.createModelReference(i.uri);
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
    async updatePlanMetadata(e, t, n) {
        await this.loadRegistry();
        const i = await this.getRegistryEntry(e);
        if (!i) throw new Error(`Plan not found: ${e}`);
        const r = await this.loadPlanByUri(i.uri), s = {
            name: t.name ?? r.metadata.name,
            overview: t.overview ?? r.metadata.overview,
            todos: t.todos ?? r.metadata.todos,
            isProject: t.isProject ?? r.metadata.isProject ?? !1,
            phases: t.phases ?? r.metadata.phases
        }, o = o8e(s) + `

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
    async updatePlanMetadataWithBody(e, t, n, i) {
        await this.loadRegistry();
        const r = await this.getRegistryEntry(e);
        if (!r) throw new Error(`Plan not found: ${e}`);
        const s = await this.loadPlanByUri(r.uri), o = {
            name: t.name ?? s.metadata.name,
            overview: t.overview ?? s.metadata.overview,
            todos: t.todos ?? s.metadata.todos,
            isProject: t.isProject ?? s.metadata.isProject ?? !1,
            phases: t.phases ?? s.metadata.phases
        }, a = o8e(o) + `

` + n, c = await this.textModelService.createModelReference(r.uri);
        try {
            c.object.textEditorModel.setValue(a), await this.textFileService.save(r.uri, {
                force: !0
            });
        } finally{
            c.dispose();
        }
        o.name !== r.name && (r.name = o.name), r.lastUpdatedAt = Date.now(), i && !r.editedBy.includes(i) && r.editedBy.push(i), this.registry.set(r.id, r), this.saveRegistry(), this._onDidChangePlan.fire({
            planId: r.id,
            uri: r.uri
        });
    }
    async movePlanToWorkspace(e, t) {
        await this.loadRegistry();
        const n = await this.getRegistryEntry(e);
        if (!n) throw new Error(`Plan not found: ${e}`);
        const i = jr(t, ".cursor", "plans");
        try {
            await this.fileService.createFolder(i);
        } catch  {}
        const r = `${n.id}.plan.md`, s = jr(i, r);
        return await this.fileService.move(n.uri, s, !0), n.uri = s, this.planUriTree = void 0, n.lastUpdatedAt = Date.now(), this.registry.set(n.id, n), this.saveRegistry(), this._onDidChangePlan.fire({
            planId: n.id,
            uri: s
        }), s;
    }
    async getRegistryEntry(e) {
        if (await this.loadRegistry(), typeof e == "string") {
            const n = this.resolveRedirects(e);
            return this.registry.get(n);
        }
        if (e.scheme === gt.cursorPlan) return this.resolveVirtualUri(e);
        for (const n of this.registry.values())if (n.uri.fsPath === e.fsPath) return n;
        const t = this.extractPlanIdFromUri(e);
        if (t) {
            const n = this.resolveRedirects(t), i = this.registry.get(n);
            if (i) return i;
        }
    }
    extractPlanIdFromUri(e) {
        const n = e.path.match(/\/([^/]+)\.plan\.md$/);
        return n ? n[1] : void 0;
    }
    getVirtualUri(e) {
        return Ee.from({
            scheme: gt.cursorPlan,
            authority: "plan",
            path: `/${e}.plan.md`
        });
    }
    async resolveVirtualUri(e) {
        await this.loadRegistry();
        const t = e.path.match(/\/([^/]+)\.plan\.md$/);
        if (t) {
            const i = t[1], r = this.resolveRedirects(i);
            return this.registry.get(r);
        }
        const n = e.authority;
        if (n && n !== "plan") {
            for (const i of this.registry.values())if (i.createdBy === n) return i;
        }
    }
    async registerExistingPlan(e, t) {
        await this.loadRegistry();
        const n = await this.getRegistryEntry(e);
        if (n) {
            let c = !1;
            return t && n.createdBy.length === 0 && (n.createdBy = t, c = !0), t && !n.editedBy.includes(t) && (n.editedBy.push(t), c = !0), t && !n.referencedBy.includes(t) && (n.referencedBy.push(t), c = !0), c && (n.lastUpdatedAt = Date.now(), this.saveRegistry(), this._onDidChangePlan.fire({
                planId: n.id,
                uri: n.uri
            })), n;
        }
        const i = await this.loadPlanByUri(e), r = e.path.split("/").pop() || "";
        let s;
        if (r.endsWith(".plan.md")) s = r.slice(0, -8);
        else {
            const c = zn().slice(0, 8);
            s = `${this.sanitizeFileName(i.metadata.name || "plan")}_${c}`;
        }
        const o = Date.now(), a = {
            id: s,
            name: i.metadata.name || "Untitled Plan",
            uri: e,
            createdBy: t ?? "",
            editedBy: t ? [
                t
            ] : [],
            referencedBy: t ? [
                t
            ] : [],
            builtBy: {},
            lastUpdatedAt: o,
            createdAt: o
        };
        return this.registry.set(s, a), this.saveRegistry(), this._composerLogService.info("[PlanStorageService] Registered existing plan:", s, "for composer:", t ?? "(manual)"), a;
    }
    async importPlanFileForComposer(e, t, n) {
        const i = await this.writePlanFileWithFallback(t, n);
        return this.registerExistingPlan(i, e);
    }
    async getPlanForComposer(e) {
        await this.loadRegistry();
        let t;
        for (const n of this.registry.values())n.createdBy === e && n.referencedBy.includes(e) && (!t || n.lastUpdatedAt > t.lastUpdatedAt) && (t = n);
        if (!t) for (const n of this.registry.values())e in n.builtBy && n.referencedBy.includes(e) && (!t || n.lastUpdatedAt > t.lastUpdatedAt) && (t = n);
        return t;
    }
    async getPlanEntriesReferencedByComposer(e) {
        await this.loadRegistry();
        const t = [];
        for (const n of this.registry.values())n.referencedBy.includes(e) && t.push(n);
        return t;
    }
    async adoptPlan(e, t) {
        await this.loadRegistry();
        const n = await this.getRegistryEntry(e);
        if (n) return n.createdBy = t, n.lastUpdatedAt = Date.now(), n.editedBy.includes(t) || n.editedBy.push(t), n.referencedBy.includes(t) || n.referencedBy.push(t), this.registry.set(n.id, n), this.saveRegistry(), n;
    }
    async registerBuild(e, t, n) {
        await this.loadRegistry();
        const i = await this.getRegistryEntry(e);
        if (!i) throw new Error(`Plan not found: ${e}`);
        const r = i.builtBy[t];
        (!r || JSON.stringify(r) !== JSON.stringify(n)) && (i.builtBy[t] = n, i.lastUpdatedAt = Date.now(), this.registry.set(i.id, i), this.saveRegistry(), this._onDidChangePlan.fire({
            planId: i.id,
            uri: i.uri
        }));
    }
    async unregisterBuild(e, t) {
        await this.loadRegistry();
        const n = await this.getRegistryEntry(e);
        !n || !(t in n.builtBy) || (delete n.builtBy[t], n.lastUpdatedAt = Date.now(), this.registry.set(n.id, n), this.saveRegistry(), this._onDidChangePlan.fire({
            planId: n.id,
            uri: n.uri
        }));
    }
    getPlanStatus(e, t) {
        return Object.keys(e.builtBy).length === 0 ? "pending" : t.some((i)=>i.status === "pending" || i.status === "in_progress") ? "in_progress" : "complete";
    }
    getRegistryEntrySync(e) {
        if (!this.registryLoaded) return;
        if (typeof e == "string") {
            const n = this.resolveRedirects(e);
            return this.registry.get(n);
        }
        if (e.scheme === gt.cursorPlan) {
            const n = e.path.match(/\/([^/]+)\.plan\.md$/);
            if (n) {
                const i = n[1], r = this.resolveRedirects(i);
                return this.registry.get(r);
            }
        }
        for (const n of this.registry.values())if (n.uri.fsPath === e.fsPath) return n;
        const t = this.extractPlanIdFromUri(e);
        if (t) {
            const n = this.resolveRedirects(t), i = this.registry.get(n);
            if (i) return i;
        }
    }
    async getPlanEntriesBuiltBy(e) {
        await this.loadRegistry();
        const t = [];
        for (const n of this.registry.values())e in n.builtBy && t.push({
            planId: n.id,
            uri: n.uri
        });
        return t;
    }
    rebuildInvertedIndex() {
        this.composerToPlans.clear();
        for (const e of this.registry.values())for (const t of e.referencedBy)this.composerToPlans.has(t) || this.composerToPlans.set(t, new Set), this.composerToPlans.get(t).add(e.id);
    }
    async updateComposerReferences(e, t) {
        const n = new Set;
        for (const s of t){
            const o = Ee.parse(s), a = this.getRegistryEntrySync(o);
            a && n.add(a.id);
        }
        const i = this.composerToPlans.get(e) ?? new Set, r = [];
        for (const s of i)if (!n.has(s)) {
            const o = this.registry.get(s);
            o && (o.referencedBy = o.referencedBy.filter((a)=>a !== e), r.push(o));
        }
        for (const s of n){
            const o = this.registry.get(s);
            o && !o.referencedBy.includes(e) && (o.referencedBy.push(e), r.push(o));
        }
        if (n.size > 0 ? this.composerToPlans.set(e, n) : this.composerToPlans.delete(e), r.length > 0) {
            this.saveRegistry();
            for (const s of r)this._onDidChangePlan.fire({
                planId: s.id,
                uri: s.uri
            });
        }
    }
    async dereferencePlansCreatedByComposer(e, t) {
        if (await this.loadRegistry(), t.length === 0) return [];
        const n = new Set(t.map((a)=>a.fsPath)), i = [], r = new Set, s = this.composerToPlans.get(e);
        let o = !1;
        for (const a of this.registry.values())if (a.createdBy === e && n.has(a.uri.fsPath) && a.referencedBy.includes(e)) if (i.push({
            planId: a.id,
            uri: a.uri
        }), a.referencedBy = a.referencedBy.filter((c)=>c !== e), s?.delete(a.id), o = !0, a.referencedBy.length === 0) {
            this.registry.delete(a.id), r.add(a.id);
            for (const [c, l] of this.redirects.entries())(c === a.id || l === a.id) && r.add(c);
            for (const c of this.composerToPlans.values())c.delete(a.id);
        } else this.registry.set(a.id, a);
        s && s.size === 0 && this.composerToPlans.delete(e);
        for (const [a, c] of this.composerToPlans.entries())c.size === 0 && this.composerToPlans.delete(a);
        for (const a of r)this.redirects.delete(a);
        (o || r.size > 0) && this.saveRegistry();
        for (const a of i)this._onDidChangePlan.fire({
            planId: a.planId,
            uri: a.uri
        });
        return i;
    }
    async updatePlanFull(e, t, n) {
        await this.loadRegistry();
        const i = await this.getRegistryEntry(e);
        if (!i) throw new Error(`Plan not found: ${e}`);
        const r = await this.loadPlanByUri(i.uri), s = {
            name: r.metadata.name,
            overview: r.metadata.overview,
            todos: r.metadata.todos,
            body: r.body,
            isProject: r.metadata.isProject,
            phases: r.metadata.phases
        }, o = Cfh(s, t), a = o.name !== s.name, c = {
            name: o.name,
            overview: o.overview,
            todos: o.todos,
            isProject: o.isProject,
            phases: o.phases
        };
        let l = i.uri, u = i.id;
        if (a && t.name) {
            const g = i.id.lastIndexOf("_"), f = g !== -1 ? i.id.slice(g + 1) : zn().slice(0, 8);
            u = `${this.sanitizeFileName(t.name)}_${f}`;
            const b = `${u}.plan.md`, y = i.uri.path, T = y.lastIndexOf("/"), E = T !== -1 ? y.slice(0, T) : "";
            l = i.uri.with({
                path: `${E}/${b}`
            });
        }
        const h = o8e(c) + `

` + o.body, p = await this.textModelService.createModelReference(l);
        try {
            p.object.textEditorModel.setValue(h), await this.textFileService.save(l, {
                force: !0
            });
        } finally{
            p.dispose();
        }
        if (a && l.toString() !== i.uri.toString()) {
            const g = i.id;
            try {
                await this.fileService.del(i.uri);
            } catch (f) {
                this._composerLogService.warn("[PlanStorageService] Failed to delete old plan file:", f);
            }
            this.registry.delete(i.id), i.id = u, i.uri = l, this.planUriTree = void 0, this.recordRedirect(g, u);
        }
        i.name = c.name, i.lastUpdatedAt = Date.now(), i.editedBy.includes(n) || i.editedBy.push(n), this.registry.set(i.id, i), this.saveRegistry(), this._onDidChangePlan.fire({
            planId: i.id,
            uri: i.uri
        });
    }
    async updatePlanModelDirty(e, t, n) {
        await this.loadRegistry();
        const i = await this.textModelService.createModelReference(e), r = i.object.textEditorModel;
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
            const h = s8e(o, this._composerLogService);
            if (h) s = {
                name: h.frontmatter.name ?? "",
                overview: h.frontmatter.overview ?? "",
                todos: h.frontmatter.todos ?? [],
                body: h.body,
                isProject: h.frontmatter.isProject ?? !1,
                phases: h.frontmatter.phases
            };
            else {
                const p = dXi(o);
                s = {
                    name: p.frontmatter.name ?? "",
                    overview: p.frontmatter.overview ?? "",
                    todos: p.frontmatter.todos ?? [],
                    body: p.body,
                    isProject: !1,
                    phases: void 0
                };
            }
        }
        const a = Cfh(s, t), c = {
            name: a.name,
            overview: a.overview,
            todos: a.todos,
            isProject: a.isProject,
            phases: a.phases
        }, l = o8e(c) + `

` + a.body;
        r.setValue(l);
        const u = await this.getRegistryEntry(e);
        return u && (u.name = a.name, u.lastUpdatedAt = Date.now(), u.editedBy.includes(n) || u.editedBy.push(n), this.registry.set(u.id, u), this.saveRegistry()), i;
    }
    async savePlanModel(e) {
        await this.textFileService.save(e, {
            force: !0
        });
        const t = await this.getRegistryEntry(e);
        t && this._onDidChangePlan.fire({
            planId: t.id,
            uri: t.uri
        });
    }
    async resolveCurrentUri(e) {
        const t = await this.getRegistryEntry(e);
        return t ? t.uri : e;
    }
}, EVt.REGISTRY_SAVE_DELAY_MS = 1e3, EVt = ie([
    C(0, Ii),
    C(1, yn),
    C(2, Jn),
    C(3, zl),
    C(4, Yi),
    C(5, hn),
    C(6, bc),
    C(7, Xp),
    C(8, lb)
], EVt), mn(TVt, EVt, 1);

}
