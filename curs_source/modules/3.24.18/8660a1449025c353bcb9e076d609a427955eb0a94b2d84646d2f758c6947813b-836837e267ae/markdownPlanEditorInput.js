import { Eze, Tze } from "./Aeg.js";
import { Ga, Gt, Nt, Qe, Tr, st, tt } from "./Iwo.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { Yu, qn } from "./async.js";
import { gs, yt } from "./codicons.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Ais, Sxn } from "./composerPlanServiceTypes.js";
import { AA, qO } from "./editorInput.js";
import { is, ms } from "./files.js";
import { dd, xp } from "./model.js";
import { Ki, Ot } from "./network.js";
import { Ku, Ul } from "./path_2.js";
import { Szt, VPe } from "./planStorageService.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
import { V4, rF } from "./workingCopyService.js";
var E$, Z1g;
export { E$, Z1g };
var __wakaru__xi_initialized = false;
export function _xi() {
if (__wakaru__xi_initialized) return;
__wakaru__xi_initialized = true;
"use strict";
E(), qO(), gs(), Qe(), fn(), Ul(), V4(), ms(), Ga(), Gt(), Ss(), Ki(), qn(), Pl(), Ais(), VPe(), Xo(), xp(), E$ = class extends AA {
    constructor(t, e, n, i, r, s, o, a){
        super(), this._resource = t, this._fileService = e, this._workingCopyService = n, this._analyticsService = i, this._composerDataService = r, this._composerPlanService = s, this._planStorageService = o, this._modelService = a, this._onDidChangeDirty = this._register(new tt), this._onDidChangeContent = this._register(new tt), this._onDidSave = this._register(new tt), this._onWillSave = this._register(new tt), this._disposables = this._register(new Nt), this._bodyModelDisposables = this._register(new Nt), this._lastReportedDirty = !1, this._bodyModel = null, this._savedBodyVersionId = 0, this._ignoreBodyModelDirtyEvents = !1, this._frontmatterIsDirty = !1, this._cachedFrontmatter = null, this._inConflictMode = !1, this.onWillSave = this._onWillSave.event, this.onDidChangeDirty = this._onDidChangeDirty.event, this.onDidChangeContent = this._onDidChangeContent.event, this.onDidSave = this._onDidSave.event, this._registerWorkingCopy(), this._loadContent(), this._autoSaveScheduler = new Yu(()=>{
            if (this.isDirty()) {
                if (this._inConflictMode || this._composerPlanService.isPlanBeingStreamed(this._resource)) return;
                this.save(0, {
                    reason: 2
                }).catch((l)=>{});
            }
        }, 500), this._disposables.add(this._autoSaveScheduler);
    }
    get typeId() {
        return E$.TypeID;
    }
    get editorId() {
        return E$.EditorID;
    }
    get resource() {
        return this._resource;
    }
    getName() {
        return Ku(this._resource.path);
    }
    getIcon() {
        return yt.library;
    }
    isDirty() {
        return this._isBodyDirty() || this._frontmatterIsDirty;
    }
    _isBodyDirty() {
        return this._bodyModel ? this._bodyModel.getAlternativeVersionId() !== this._savedBodyVersionId : !1;
    }
    isModified() {
        return this.isDirty();
    }
    isReadonly() {
        return !1;
    }
    isSaving() {
        return !1;
    }
    hasCapability(t) {
        return !1;
    }
    getResource() {
        return this._resource;
    }
    setContent(t) {
        if (!this._bodyModel) {
            console.warn("[MarkdownPlanEditorInput] setContent called before model created");
            return;
        }
        this._bodyModel.getValue() !== t && this._bodyModel.setValue(t);
    }
    applyExternalBodyUpdate(t) {
        if (this._bodyModel) {
            this._ignoreBodyModelDirtyEvents = !0;
            try {
                this._bodyModel.getValue() !== t && this._bodyModel.setValue(t), this._savedBodyVersionId = this._bodyModel.getAlternativeVersionId();
            } finally{
                this._ignoreBodyModelDirtyEvents = !1;
            }
            this._composerPlanService.isPlanBeingStreamed(this._resource) || this._updateDirtyState();
        }
    }
    getContent() {
        return this._bodyModel ? this._bodyModel.getValue() : "";
    }
    getBodyModel() {
        return this._bodyModel;
    }
    setFrontmatterDirty(t) {
        this._frontmatterIsDirty = t, this._updateDirtyState(), t && (this._composerPlanService.isPlanBeingStreamed(this._resource) || this._autoSaveScheduler.schedule());
    }
    isFrontmatterDirty() {
        return this._frontmatterIsDirty;
    }
    setConflictMode(t) {
        this._inConflictMode = t;
    }
    getCachedFrontmatter() {
        return this._cachedFrontmatter;
    }
    setCachedFrontmatter(t) {
        this._cachedFrontmatter = t;
    }
    _updateDirtyState() {
        const t = this.isDirty();
        t || (this._inConflictMode = !1), this._lastReportedDirty !== t && (this._lastReportedDirty = t, this._onDidChangeDirty.fire());
    }
    _setupModelListeners() {
        this.isDisposed() || !this._bodyModel || (this._bodyModelDisposables.clear(), this._bodyModelDisposables.add(this._bodyModel.onDidChangeContent(()=>{
            this._onDidChangeContent.fire(), !this._ignoreBodyModelDirtyEvents && !this._composerPlanService.isPlanBeingStreamed(this._resource) && (this._updateDirtyState(), this._autoSaveScheduler.schedule());
        })));
    }
    async _loadContent() {
        try {
            const t = await this._fileService.readFile(this._resource);
            if (this.isDisposed()) return;
            let e = t.value.toString();
            const n = await this._migrateOldFormatIfNeeded(e);
            if (this.isDisposed()) return;
            n && (e = n);
            const i = Tze(e);
            let r, s;
            i ? (r = i.body, s = {
                name: i.frontmatter.name || "Untitled Plan",
                overview: i.frontmatter.overview || "",
                todos: i.frontmatter.todos || [],
                isProject: i.frontmatter.isProject,
                phases: i.frontmatter.phases
            }) : (r = e, s = {
                name: "Untitled Plan",
                overview: "",
                todos: []
            });
            const o = this._normalizeMarkdownBody(r);
            this._cachedFrontmatter = s, this._createOrUpdateBodyModel(o);
        } catch  {
            if (this.isDisposed()) return;
            this._cachedFrontmatter = {
                name: "Untitled Plan",
                overview: "",
                todos: []
            }, this._createOrUpdateBodyModel("");
        }
    }
    _normalizeMarkdownBody(t) {
        return t.replace(/\r\n/g, `
`);
    }
    _createOrUpdateBodyModel(t) {
        if (this.isDisposed()) return;
        const e = this._resource.with({
            scheme: "plan-body",
            query: this._resource.toString()
        });
        let n = this._modelService.getModel(e);
        if (n) {
            this._ignoreBodyModelDirtyEvents = !0;
            try {
                n.getValue() !== t && n.setValue(t);
            } finally{
                this._ignoreBodyModelDirtyEvents = !1;
            }
        } else n = this._modelService.createModel(t, null, e, !1);
        this._bodyModel = n, this._savedBodyVersionId = n.getAlternativeVersionId(), this._frontmatterIsDirty = !1, this._setupModelListeners(), this._updateDirtyState();
    }
    async _migrateOldFormatIfNeeded(t) {
        if (t.trimStart().startsWith("---") && Tze(t)) return;
        const e = t.split(`
`);
        let n, i = -1;
        for(let h = 0; h < Math.min(5, e.length); h++){
            const p = e[h].match(/<!-- ([^\s]+)(?: [^\s]+)?(?: \d+)? -->/);
            if (p) {
                n = p[1], i = h;
                break;
            }
        }
        if (!n || i === -1) return;
        console.log("[MarkdownPlanEditorInput] Migrating old plan format for composer:", n);
        let s = e.slice(i + 1).join(`
`).trim(), o = "Untitled Plan";
        const a = s.match(/^#\s+(.+)$/m);
        a && (o = a[1].trim());
        const l = [], c = s.match(/### To-dos\s*([\s\S]*?)(?=\n##|\n$|$)/);
        if (c) {
            const p = c[1].split(`
`);
            for (const g of p){
                const f = g.match(/^- \[([ x])\] (.+)$/);
                f && l.push({
                    id: Ai(),
                    content: f[2].trim(),
                    status: f[1] === "x" ? "completed" : "pending",
                    dependencies: []
                });
            }
            s = s.replace(/### To-dos\s*([\s\S]*?)(?=\n##|\n$|$)/, "").trim();
        }
        const d = Eze({
            name: o,
            overview: "",
            todos: l
        }) + `

` + s;
        try {
            await this._fileService.writeFile(this._resource, Tr.fromString(d)), console.log("[MarkdownPlanEditorInput] Migration complete, wrote new format to:", this._resource.toString()), await this._planStorageService.registerExistingPlan(this._resource, n), console.log("[MarkdownPlanEditorInput] Registered migrated plan in registry");
        } catch (h) {
            console.error("[MarkdownPlanEditorInput] Failed to migrate plan:", h);
            return;
        }
        return d;
    }
    _registerWorkingCopy() {
        const t = this, e = new class {
            constructor(){
                this.typeId = "markdownPlan", this.resource = t._resource, this.capabilities = 0, this.onDidChangeDirty = t._onDidChangeDirty.event, this.onDidChangeContent = t._onDidChangeContent.event, this.onDidSave = t._onDidSave.event;
            }
            get name() {
                return Ku(t._resource.path);
            }
            isDirty() {
                return t.isDirty();
            }
            isModified() {
                return t.isDirty();
            }
            backup(n) {
                return Promise.resolve({
                    resource: t._resource,
                    meta: {
                        content: t.getContent()
                    }
                });
            }
            save(n) {
                return t.save(0, n).then((i)=>!!i);
            }
            revert(n) {
                return t.revert(0, n);
            }
        };
        this._disposables.add(this._workingCopyService.registerWorkingCopy(e));
    }
    async save(t, e) {
        if (this._autoSaveScheduler.cancel?.(), this._composerPlanService.isPlanBeingStreamed(this._resource)) return this;
        try {
            this._onWillSave.fire();
            let n = await this._composerPlanService.getRegistryEntry(this._resource);
            n || (n = await this._planStorageService.registerExistingPlan(this._resource));
            const i = await this.getComposerId(), r = this.getContent();
            if (await this._composerPlanService.updatePlanFileContent(this._resource, r, i ?? void 0), this._bodyModel && (this._savedBodyVersionId = this._bodyModel.getAlternativeVersionId()), this._frontmatterIsDirty = !1, this._inConflictMode = !1, this._updateDirtyState(), this._onDidSave.fire({
                reason: e?.reason
            }), i) {
                const s = this._composerDataService.getComposerDataIfLoaded(i);
                this._analyticsService.trackEvent("composer.plan_mode.plan_manually_edited", {
                    mode: "rich",
                    composerId: i,
                    invocationID: s?.latestChatGenerationUUID
                });
            }
            return this;
        } catch (n) {
            throw console.error("Error saving markdown plan:", n), n;
        }
    }
    async getComposerId() {
        try {
            const t = await this._composerPlanService.getRegistryEntry(this._resource);
            if (t) return t.editedBy[t.editedBy.length - 1] || t.createdBy;
        } catch  {}
        return null;
    }
    async revert(t, e) {
        try {
            await this._loadContent(), this._inConflictMode = !1, this._updateDirtyState();
        } catch (n) {
            throw console.error("Error reverting markdown plan:", n), n;
        }
    }
    static create(t) {
        throw new Error("Use instantiationService.createInstance(MarkdownPlanEditorInput, resource) instead");
    }
    async resolve() {
        return null;
    }
    toJSON() {
        return {
            resource: this._resource.toString()
        };
    }
    toUntyped() {
        return {
            resource: this.resource,
            options: {
                override: E$.EditorID
            }
        };
    }
    matches(t) {
        return super.matches(t) ? !0 : t instanceof E$ ? t.resource.toString() === this.resource.toString() : !1;
    }
    dispose() {
        if (this._bodyModel) {
            const t = this._bodyModel.uri;
            this._bodyModel = null, this._modelService.destroyModel(t);
        }
        this._disposables.dispose(), super.dispose();
    }
}, E$.TypeID = "workbench.input.markdownPlan", E$.EditorID = "workbench.editor.markdownPlan", E$ = Re([
    F(1, is),
    F(2, rF),
    F(3, Qr),
    F(4, no),
    F(5, Sxn),
    F(6, Szt),
    F(7, dd)
], E$), Z1g = class extends st {
    constructor(){
        super();
    }
    canSerialize(t) {
        return t instanceof E$ ? t.resource.scheme !== Ot.cursorPlan : !1;
    }
    serialize(t) {
        if (t instanceof E$ && t.resource.scheme !== Ot.cursorPlan) return JSON.stringify(t.toJSON());
    }
    deserialize(t, e) {
        try {
            const n = JSON.parse(e);
            if (n.resource) {
                const i = rt.parse(n.resource);
                return t.createInstance(E$, i);
            }
        } catch (n) {
            console.error("Error deserializing MarkdownPlanEditorInput:", n);
        }
    }
};

}
