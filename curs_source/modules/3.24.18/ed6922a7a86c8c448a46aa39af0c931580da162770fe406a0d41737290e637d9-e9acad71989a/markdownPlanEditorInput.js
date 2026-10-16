import { Fo, He, Se, bt, ve, we, wi } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ca, la } from "./aiMiscServices.js";
import { ac, bn } from "./async.js";
import { o8e, s8e } from "./cgh.js";
import { Pe, _i } from "./codicons.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { WSo, hXi } from "./composerPlanServiceTypes.js";
import { H0, MA } from "./editorInput.js";
import { Fi, Ii } from "./files.js";
import { Ll, fc } from "./model.js";
import { gt, li } from "./network.js";
import { Xl, ba } from "./path_2.js";
import { TVt, ott } from "./planStorageService.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Js, zn } from "./uuid.js";
import { $D, dL } from "./workingCopyService.js";
var Z5, rNh;
export { Z5, rNh };
var __wakaru_FBn_initialized = false;
export function FBn() {
if (__wakaru_FBn_initialized) return;
__wakaru_FBn_initialized = true;
"use strict";
x(), MA(), _i(), Se(), Qt(), ba(), dL(), Fi(), Fo(), bt(), la(), li(), bn(), nl(), WSo(), ott(), Js(), Ll(), Z5 = class extends H0 {
    constructor(e, t, n, i, r, s, o, a){
        super(), this._resource = e, this._fileService = t, this._workingCopyService = n, this._analyticsService = i, this._composerDataService = r, this._composerPlanService = s, this._planStorageService = o, this._modelService = a, this._onDidChangeDirty = this._register(new ve), this._onDidChangeContent = this._register(new ve), this._onDidSave = this._register(new ve), this._onWillSave = this._register(new ve), this._disposables = this._register(new He), this._bodyModelDisposables = this._register(new He), this._lastReportedDirty = !1, this._bodyModel = null, this._savedBodyVersionId = 0, this._ignoreBodyModelDirtyEvents = !1, this._frontmatterIsDirty = !1, this._cachedFrontmatter = null, this._inConflictMode = !1, this.onWillSave = this._onWillSave.event, this.onDidChangeDirty = this._onDidChangeDirty.event, this.onDidChangeContent = this._onDidChangeContent.event, this.onDidSave = this._onDidSave.event, this._registerWorkingCopy(), this._loadContent(), this._autoSaveScheduler = new ac(()=>{
            if (this.isDirty()) {
                if (this._inConflictMode || this._composerPlanService.isPlanBeingStreamed(this._resource)) return;
                this.save(0, {
                    reason: 2
                }).catch((c)=>{});
            }
        }, 500), this._disposables.add(this._autoSaveScheduler);
    }
    get typeId() {
        return Z5.TypeID;
    }
    get editorId() {
        return Z5.EditorID;
    }
    get resource() {
        return this._resource;
    }
    getName() {
        return Xl(this._resource.path);
    }
    getIcon() {
        return Pe.library;
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
    hasCapability(e) {
        return !1;
    }
    getResource() {
        return this._resource;
    }
    setContent(e) {
        if (!this._bodyModel) {
            console.warn("[MarkdownPlanEditorInput] setContent called before model created");
            return;
        }
        this._bodyModel.getValue() !== e && this._bodyModel.setValue(e);
    }
    applyExternalBodyUpdate(e) {
        if (this._bodyModel) {
            this._ignoreBodyModelDirtyEvents = !0;
            try {
                this._bodyModel.getValue() !== e && this._bodyModel.setValue(e), this._savedBodyVersionId = this._bodyModel.getAlternativeVersionId();
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
    setFrontmatterDirty(e) {
        this._frontmatterIsDirty = e, this._updateDirtyState(), e && (this._composerPlanService.isPlanBeingStreamed(this._resource) || this._autoSaveScheduler.schedule());
    }
    isFrontmatterDirty() {
        return this._frontmatterIsDirty;
    }
    setConflictMode(e) {
        this._inConflictMode = e;
    }
    getCachedFrontmatter() {
        return this._cachedFrontmatter;
    }
    setCachedFrontmatter(e) {
        this._cachedFrontmatter = e;
    }
    _updateDirtyState() {
        const e = this.isDirty();
        e || (this._inConflictMode = !1), this._lastReportedDirty !== e && (this._lastReportedDirty = e, this._onDidChangeDirty.fire());
    }
    _setupModelListeners() {
        this.isDisposed() || !this._bodyModel || (this._bodyModelDisposables.clear(), this._bodyModelDisposables.add(this._bodyModel.onDidChangeContent(()=>{
            this._onDidChangeContent.fire(), !this._ignoreBodyModelDirtyEvents && !this._composerPlanService.isPlanBeingStreamed(this._resource) && (this._updateDirtyState(), this._autoSaveScheduler.schedule());
        })));
    }
    async _loadContent() {
        try {
            const e = await this._fileService.readFile(this._resource);
            if (this.isDisposed()) return;
            let t = e.value.toString();
            const n = await this._migrateOldFormatIfNeeded(t);
            if (this.isDisposed()) return;
            n && (t = n);
            const i = s8e(t);
            let r, s;
            i ? (r = i.body, s = {
                name: i.frontmatter.name || "Untitled Plan",
                overview: i.frontmatter.overview || "",
                todos: i.frontmatter.todos || [],
                isProject: i.frontmatter.isProject,
                phases: i.frontmatter.phases
            }) : (r = t, s = {
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
    _normalizeMarkdownBody(e) {
        return e.replace(/\r\n/g, `
`);
    }
    _createOrUpdateBodyModel(e) {
        if (this.isDisposed()) return;
        const t = this._resource.with({
            scheme: "plan-body",
            query: this._resource.toString()
        });
        let n = this._modelService.getModel(t);
        if (n) {
            this._ignoreBodyModelDirtyEvents = !0;
            try {
                n.getValue() !== e && n.setValue(e);
            } finally{
                this._ignoreBodyModelDirtyEvents = !1;
            }
        } else n = this._modelService.createModel(e, null, t, !1);
        this._bodyModel = n, this._savedBodyVersionId = n.getAlternativeVersionId(), this._frontmatterIsDirty = !1, this._setupModelListeners(), this._updateDirtyState();
    }
    async _migrateOldFormatIfNeeded(e) {
        if (e.trimStart().startsWith("---") && s8e(e)) return;
        const t = e.split(`
`);
        let n, i = -1;
        for(let p = 0; p < Math.min(5, t.length); p++){
            const g = t[p].match(/<!-- ([^\s]+)(?: [^\s]+)?(?: \d+)? -->/);
            if (g) {
                n = g[1], i = p;
                break;
            }
        }
        if (!n || i === -1) return;
        console.log("[MarkdownPlanEditorInput] Migrating old plan format for composer:", n);
        let s = t.slice(i + 1).join(`
`).trim(), o = "Untitled Plan";
        const a = s.match(/^#\s+(.+)$/m);
        a && (o = a[1].trim());
        const c = [], l = s.match(/### To-dos\s*([\s\S]*?)(?=\n##|\n$|$)/);
        if (l) {
            const g = l[1].split(`
`);
            for (const f of g){
                const v = f.match(/^- \[([ x])\] (.+)$/);
                v && c.push({
                    id: zn(),
                    content: v[2].trim(),
                    status: v[1] === "x" ? "completed" : "pending",
                    dependencies: []
                });
            }
            s = s.replace(/### To-dos\s*([\s\S]*?)(?=\n##|\n$|$)/, "").trim();
        }
        const h = o8e({
            name: o,
            overview: "",
            todos: c
        }) + `

` + s;
        try {
            await this._fileService.writeFile(this._resource, wi.fromString(h)), console.log("[MarkdownPlanEditorInput] Migration complete, wrote new format to:", this._resource.toString()), await this._planStorageService.registerExistingPlan(this._resource, n), console.log("[MarkdownPlanEditorInput] Registered migrated plan in registry");
        } catch (p) {
            console.error("[MarkdownPlanEditorInput] Failed to migrate plan:", p);
            return;
        }
        return h;
    }
    _registerWorkingCopy() {
        const e = this, t = new class {
            constructor(){
                this.typeId = "markdownPlan", this.resource = e._resource, this.capabilities = 0, this.onDidChangeDirty = e._onDidChangeDirty.event, this.onDidChangeContent = e._onDidChangeContent.event, this.onDidSave = e._onDidSave.event;
            }
            get name() {
                return Xl(e._resource.path);
            }
            isDirty() {
                return e.isDirty();
            }
            isModified() {
                return e.isDirty();
            }
            backup(n) {
                return Promise.resolve({
                    resource: e._resource,
                    meta: {
                        content: e.getContent()
                    }
                });
            }
            save(n) {
                return e.save(0, n).then((i)=>!!i);
            }
            revert(n) {
                return e.revert(0, n);
            }
        };
        this._disposables.add(this._workingCopyService.registerWorkingCopy(t));
    }
    async save(e, t) {
        if (this._autoSaveScheduler.cancel?.(), this._composerPlanService.isPlanBeingStreamed(this._resource)) return this;
        try {
            this._onWillSave.fire();
            let n = await this._composerPlanService.getRegistryEntry(this._resource);
            n || (n = await this._planStorageService.registerExistingPlan(this._resource));
            const i = await this.getComposerId(), r = this.getContent();
            if (await this._composerPlanService.updatePlanFileContent(this._resource, r, i ?? void 0), this._bodyModel && (this._savedBodyVersionId = this._bodyModel.getAlternativeVersionId()), this._frontmatterIsDirty = !1, this._inConflictMode = !1, this._updateDirtyState(), this._onDidSave.fire({
                reason: t?.reason
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
            const e = await this._composerPlanService.getRegistryEntry(this._resource);
            if (e) return e.editedBy[e.editedBy.length - 1] || e.createdBy;
        } catch  {}
        return null;
    }
    async revert(e, t) {
        try {
            await this._loadContent(), this._inConflictMode = !1, this._updateDirtyState();
        } catch (n) {
            throw console.error("Error reverting markdown plan:", n), n;
        }
    }
    static create(e) {
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
                override: Z5.EditorID
            }
        };
    }
    matches(e) {
        return super.matches(e) ? !0 : e instanceof Z5 ? e.resource.toString() === this.resource.toString() : !1;
    }
    dispose() {
        if (this._bodyModel) {
            const e = this._bodyModel.uri;
            this._bodyModel = null, this._modelService.destroyModel(e);
        }
        this._disposables.dispose(), super.dispose();
    }
}, Z5.TypeID = "workbench.input.markdownPlan", Z5.EditorID = "workbench.editor.markdownPlan", Z5 = ie([
    C(1, Ii),
    C(2, $D),
    C(3, ca),
    C(4, Zs),
    C(5, hXi),
    C(6, TVt),
    C(7, fc)
], Z5), rNh = class extends we {
    constructor(){
        super();
    }
    canSerialize(e) {
        return e instanceof Z5 ? e.resource.scheme !== gt.cursorPlan : !1;
    }
    serialize(e) {
        if (e instanceof Z5 && e.resource.scheme !== gt.cursorPlan) return JSON.stringify(e.toJSON());
    }
    deserialize(e, t) {
        try {
            const n = JSON.parse(t);
            if (n.resource) {
                const i = Ee.parse(n.resource);
                return e.createInstance(Z5, i);
            }
        } catch (n) {
            console.error("Error deserializing MarkdownPlanEditorInput:", n);
        }
    }
};

}
