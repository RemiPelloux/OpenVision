import { KJe } from "./A3u.js";
import { Fo, He, S, Se, ns, si, wi } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Gde, ooe } from "./customEditorLabelService.js";
import { Fc, lv } from "./dialogs.js";
import { Ni, hn } from "./editorService.js";
import { xc } from "./editor_2.js";
import { Ma, hc } from "./extensions_4.js";
import { Fi, Ii } from "./files.js";
import { $w, aE } from "./filesConfigurationService.js";
import { qM } from "./glob.js";
import { dc, yu } from "./label.js";
import { gt, li } from "./network.js";
import { rt } from "./nls.js";
import { dm, ed } from "./notebookCommon.js";
import { doe, oG } from "./notebookEditorModelResolverService.js";
import { D_, Ow, dUe } from "./notebookService.js";
import { Q7 } from "./qIc.js";
import { hBn, mMh } from "./resourceEditorInput.js";
import { Ac, Li, jr } from "./resources.js";
import { $v, M_ } from "./textResourceConfiguration.js";
import { x } from "./tslib.es6.js";
var MC;
export { MC };
var __wakaru_oZ_initialized = false;
export function oZ() {
if (__wakaru_oZ_initialized) return;
__wakaru_oZ_initialized = true;
"use strict";
x(), qM(), xc(), Ow(), Li(), Fc(), doe(), Se(), ed(), yu(), li(), Fi(), mMh(), si(), Fo(), aE(), hc(), rt(), Ni(), M_(), Gde(), MC = class extends hBn {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g){
        super(e, t, a, c, l, p, g), this.viewType = n, this.options = i, this._notebookService = r, this._notebookModelResolverService = s, this._fileDialogService = o, this.editorModelReference = null, this._modelListeners = this._register(new He), this._defaultDirtyState = !1, this._defaultDirtyState = !!i.startDirty, this._sideLoadedListener = r.onDidAddNotebookDocument((f)=>{
            f.viewType === this.viewType && f.uri.toString() === this.resource.toString() && this.resolve().catch(ns);
        }), this._register(u.onWillStop((f)=>{
            if (!f.auto && !this.isDirty()) return;
            const v = f.auto ? S(8377, null, this.getName()) : S(8378, null, this.getName());
            f.veto((async ()=>{
                const b = h.findEditors(this);
                return f.auto ? !0 : !(b.length > 0 && (await h.save(b[0])).success);
            })(), v);
        }));
    }
    static getOrCreate(e, t, n, i, r = {}) {
        const s = e.createInstance(MC, t, n, i, r);
        return n && s.setPreferredResource(n), s;
    }
    dispose() {
        this._sideLoadedListener.dispose(), this.editorModelReference?.dispose(), this.editorModelReference = null, super.dispose();
    }
    get typeId() {
        return MC.ID;
    }
    get editorId() {
        return this.viewType;
    }
    get capabilities() {
        let e = 0;
        return this.resource.scheme === gt.untitled && (e |= 4), this.editorModelReference ? this.editorModelReference.object.isReadonly() && (e |= 2) : this.filesConfigurationService.isReadonly(this.resource) && (e |= 2), e & 2 || (e |= 128), e;
    }
    getDescription(e = 1) {
        if (!this.hasCapability(4) || this.editorModelReference?.object.hasAssociatedFilePath()) return super.getDescription(e);
    }
    isReadonly() {
        return this.editorModelReference ? this.editorModelReference.object.isReadonly() : this.filesConfigurationService.isReadonly(this.resource);
    }
    isDirty() {
        return this.editorModelReference ? this.editorModelReference.object.isDirty() : this._defaultDirtyState;
    }
    isSaving() {
        const e = this.editorModelReference?.object;
        return !e || !e.isDirty() || e.hasErrorState || this.hasCapability(4) ? !1 : this.filesConfigurationService.hasShortAutoSaveDelay(this);
    }
    async save(e, t) {
        if (this.editorModelReference) return this.hasCapability(4) ? this.saveAs(e, t) : (await this.editorModelReference.object.save(t), this);
    }
    async saveAs(e, t) {
        if (!this.editorModelReference) return;
        const n = this._notebookService.getContributedNotebookType(this.viewType);
        if (!n) return;
        const i = this.hasCapability(4) ? await this._suggestName(n, this.labelService.getUriBasenameLabel(this.resource)) : this.editorModelReference.object.resource;
        let r;
        if (this.editorModelReference.object.hasAssociatedFilePath()) r = i;
        else if (r = await this._fileDialogService.pickFileToSave(i, t?.availableFileSystems), !r) return;
        if (!n.matches(r)) {
            const s = n.selectors.map((o)=>typeof o == "string" ? o : KJe(o) ? `${o} (base ${o.base})` : o.exclude ? `${o.include} (exclude: ${o.exclude})` : `${o.include}`).join(", ");
            throw new Error(`File name ${r} is not supported by ${n.providerDisplayName}.

Please make sure the file name matches following patterns:
${s}`);
        }
        return await this.editorModelReference.object.saveAs(r);
    }
    async _suggestName(e, t) {
        const n = e.selectors[0];
        let i = n && typeof n == "string" ? n : void 0;
        if (!i && n) {
            const r = n.include;
            typeof r == "string" && (i = r);
        }
        if (i) {
            const r = /^\*\.([A-Za-z_-]*)$/.exec(i);
            if (r && r.length > 1) {
                const s = r[1];
                if (!t.endsWith(s)) return jr(await this._fileDialogService.defaultFilePath(), t + "." + s);
            }
        }
        return jr(await this._fileDialogService.defaultFilePath(), t);
    }
    async rename(e, t) {
        if (this.editorModelReference) return {
            editor: {
                resource: t
            },
            options: {
                override: this.viewType
            }
        };
    }
    async revert(e, t) {
        this.editorModelReference && this.editorModelReference.object.isDirty() && await this.editorModelReference.object.revert(t);
    }
    async resolve(e, t) {
        if (!await this._notebookService.canResolve(this.viewType)) return null;
        if (t?.mark("extensionActivated"), this._sideLoadedListener.dispose(), this.editorModelReference) this.editorModelReference.object.load({
            limits: this.ensureLimits(e)
        });
        else {
            const n = !!(this.capabilities & 512), i = await this._notebookModelResolverService.resolve(this.resource, this.viewType, {
                limits: this.ensureLimits(e),
                scratchpad: n,
                viewType: this.editorId
            });
            if (this.editorModelReference) return i.dispose(), this.editorModelReference.object;
            if (this.editorModelReference = i, this.isDisposed()) return this.editorModelReference.dispose(), this.editorModelReference = null, null;
            this._modelListeners.clear(), this._modelListeners.add(this.editorModelReference.object.onDidChangeDirty(()=>this._onDidChangeDirty.fire())), this._modelListeners.add(this.editorModelReference.object.onDidChangeReadonly(()=>this._onDidChangeCapabilities.fire())), this._modelListeners.add(this.editorModelReference.object.onDidRevertUntitled(()=>this.dispose())), this.editorModelReference.object.isDirty() && this._onDidChangeDirty.fire();
        }
        if (this.options._backupId) {
            const n = await this._notebookService.withNotebookDataProvider(this.editorModelReference.object.notebook.viewType);
            if (!(n instanceof dUe)) throw new Error("CANNOT open file notebook with this provider");
            const i = await n.serializer.dataToNotebook(wi.fromString(JSON.stringify({
                __webview_backup: this.options._backupId
            })));
            this.editorModelReference.object.notebook.applyEdits([
                {
                    editType: 1,
                    index: 0,
                    count: this.editorModelReference.object.notebook.length,
                    cells: i.cells
                }
            ], !0, void 0, ()=>{}, void 0, !1), this.options._workingCopy && (this.options._backupId = void 0, this.options._workingCopy = void 0, this.options.startDirty = void 0);
        }
        return this.editorModelReference.object;
    }
    toUntyped() {
        return {
            resource: this.resource,
            options: {
                override: this.viewType
            }
        };
    }
    matches(e) {
        return super.matches(e) ? !0 : e instanceof MC ? this.viewType === e.viewType && Ac(this.resource, e.resource) : Q7(e) && e.resource.scheme === dm.scheme ? Ac(this.resource, dm.parse(e.resource)?.notebook) : !1;
    }
}, MC.ID = "workbench.input.notebook", MC = ie([
    C(4, D_),
    C(5, oG),
    C(6, lv),
    C(7, dc),
    C(8, Ii),
    C(9, $w),
    C(10, Ma),
    C(11, hn),
    C(12, $v),
    C(13, ooe)
], MC);

}
