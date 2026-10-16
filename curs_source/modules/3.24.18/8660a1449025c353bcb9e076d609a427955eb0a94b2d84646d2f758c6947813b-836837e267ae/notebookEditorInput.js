import { D, Ei, Ga, Nt, Qe, Tr, xr } from "./Iwo.js";
import { PY } from "./LYd.js";
import { OCe, OPe } from "./customEditorLabelService.js";
import { NS, bd } from "./dialogs.js";
import { Wo, gr } from "./editorService.js";
import { od } from "./editor_2.js";
import { id, ld } from "./extensions_4.js";
import { is, ms } from "./files.js";
import { YI, fT } from "./filesConfigurationService.js";
import { NB } from "./glob.js";
import { Yp, qg } from "./label.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { Y7, jM } from "./notebookCommon.js";
import { TTt, qPe } from "./notebookEditorModelResolverService.js";
import { Sqe, fot, qae } from "./notebookService.js";
import { GIi, oyg } from "./resourceEditorInput.js";
import { Lr, Os, gu } from "./resources.js";
import { FC, Mw } from "./textResourceConfiguration.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { wGt } from "./yBp.js";
var mG;
export { mG };
var __wakaru_oEt_initialized = false;
export function oEt() {
if (__wakaru_oEt_initialized) return;
__wakaru_oEt_initialized = true;
"use strict";
E(), NB(), od(), Sqe(), Lr(), bd(), TTt(), Qe(), Y7(), qg(), Ki(), ms(), oyg(), Ei(), Ga(), YI(), ld(), Bt(), Wo(), FC(), OPe(), mG = class extends GIi {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p){
        super(t, e, a, l, c, h, p), this.viewType = n, this.options = i, this._notebookService = r, this._notebookModelResolverService = s, this._fileDialogService = o, this.editorModelReference = null, this._modelListeners = this._register(new Nt), this._defaultDirtyState = !1, this._defaultDirtyState = !!i.startDirty, this._sideLoadedListener = r.onDidAddNotebookDocument((g)=>{
            g.viewType === this.viewType && g.uri.toString() === this.resource.toString() && this.resolve().catch(xr);
        }), this._register(u.onWillStop((g)=>{
            if (!g.auto && !this.isDirty()) return;
            const f = g.auto ? D(8377, null, this.getName()) : D(8378, null, this.getName());
            g.veto((async ()=>{
                const _ = d.findEditors(this);
                return g.auto ? !0 : !(_.length > 0 && (await d.save(_[0])).success);
            })(), f);
        }));
    }
    static getOrCreate(t, e, n, i, r = {}) {
        const s = t.createInstance(mG, e, n, i, r);
        return n && s.setPreferredResource(n), s;
    }
    dispose() {
        this._sideLoadedListener.dispose(), this.editorModelReference?.dispose(), this.editorModelReference = null, super.dispose();
    }
    get typeId() {
        return mG.ID;
    }
    get editorId() {
        return this.viewType;
    }
    get capabilities() {
        let t = 0;
        return this.resource.scheme === Ot.untitled && (t |= 4), this.editorModelReference ? this.editorModelReference.object.isReadonly() && (t |= 2) : this.filesConfigurationService.isReadonly(this.resource) && (t |= 2), t & 2 || (t |= 128), t;
    }
    getDescription(t = 1) {
        if (!this.hasCapability(4) || this.editorModelReference?.object.hasAssociatedFilePath()) return super.getDescription(t);
    }
    isReadonly() {
        return this.editorModelReference ? this.editorModelReference.object.isReadonly() : this.filesConfigurationService.isReadonly(this.resource);
    }
    isDirty() {
        return this.editorModelReference ? this.editorModelReference.object.isDirty() : this._defaultDirtyState;
    }
    isSaving() {
        const t = this.editorModelReference?.object;
        return !t || !t.isDirty() || t.hasErrorState || this.hasCapability(4) ? !1 : this.filesConfigurationService.hasShortAutoSaveDelay(this);
    }
    async save(t, e) {
        if (this.editorModelReference) return this.hasCapability(4) ? this.saveAs(t, e) : (await this.editorModelReference.object.save(e), this);
    }
    async saveAs(t, e) {
        if (!this.editorModelReference) return;
        const n = this._notebookService.getContributedNotebookType(this.viewType);
        if (!n) return;
        const i = this.hasCapability(4) ? await this._suggestName(n, this.labelService.getUriBasenameLabel(this.resource)) : this.editorModelReference.object.resource;
        let r;
        if (this.editorModelReference.object.hasAssociatedFilePath()) r = i;
        else if (r = await this._fileDialogService.pickFileToSave(i, e?.availableFileSystems), !r) return;
        if (!n.matches(r)) {
            const s = n.selectors.map((o)=>typeof o == "string" ? o : wGt(o) ? `${o} (base ${o.base})` : o.exclude ? `${o.include} (exclude: ${o.exclude})` : `${o.include}`).join(", ");
            throw new Error(`File name ${r} is not supported by ${n.providerDisplayName}.

Please make sure the file name matches following patterns:
${s}`);
        }
        return await this.editorModelReference.object.saveAs(r);
    }
    async _suggestName(t, e) {
        const n = t.selectors[0];
        let i = n && typeof n == "string" ? n : void 0;
        if (!i && n) {
            const r = n.include;
            typeof r == "string" && (i = r);
        }
        if (i) {
            const r = /^\*\.([A-Za-z_-]*)$/.exec(i);
            if (r && r.length > 1) {
                const s = r[1];
                if (!e.endsWith(s)) return Os(await this._fileDialogService.defaultFilePath(), e + "." + s);
            }
        }
        return Os(await this._fileDialogService.defaultFilePath(), e);
    }
    async rename(t, e) {
        if (this.editorModelReference) return {
            editor: {
                resource: e
            },
            options: {
                override: this.viewType
            }
        };
    }
    async revert(t, e) {
        this.editorModelReference && this.editorModelReference.object.isDirty() && await this.editorModelReference.object.revert(e);
    }
    async resolve(t, e) {
        if (!await this._notebookService.canResolve(this.viewType)) return null;
        if (e?.mark("extensionActivated"), this._sideLoadedListener.dispose(), this.editorModelReference) this.editorModelReference.object.load({
            limits: this.ensureLimits(t)
        });
        else {
            const n = !!(this.capabilities & 512), i = await this._notebookModelResolverService.resolve(this.resource, this.viewType, {
                limits: this.ensureLimits(t),
                scratchpad: n,
                viewType: this.editorId
            });
            if (this.editorModelReference) return i.dispose(), this.editorModelReference.object;
            if (this.editorModelReference = i, this.isDisposed()) return this.editorModelReference.dispose(), this.editorModelReference = null, null;
            this._modelListeners.clear(), this._modelListeners.add(this.editorModelReference.object.onDidChangeDirty(()=>this._onDidChangeDirty.fire())), this._modelListeners.add(this.editorModelReference.object.onDidChangeReadonly(()=>this._onDidChangeCapabilities.fire())), this._modelListeners.add(this.editorModelReference.object.onDidRevertUntitled(()=>this.dispose())), this.editorModelReference.object.isDirty() && this._onDidChangeDirty.fire();
        }
        if (this.options._backupId) {
            const n = await this._notebookService.withNotebookDataProvider(this.editorModelReference.object.notebook.viewType);
            if (!(n instanceof fot)) throw new Error("CANNOT open file notebook with this provider");
            const i = await n.serializer.dataToNotebook(Tr.fromString(JSON.stringify({
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
    matches(t) {
        return super.matches(t) ? !0 : t instanceof mG ? this.viewType === t.viewType && gu(this.resource, t.resource) : PY(t) && t.resource.scheme === jM.scheme ? gu(this.resource, jM.parse(t.resource)?.notebook) : !1;
    }
}, mG.ID = "workbench.input.notebook", mG = Re([
    F(4, qae),
    F(5, qPe),
    F(6, NS),
    F(7, Yp),
    F(8, is),
    F(9, fT),
    F(10, id),
    F(11, gr),
    F(12, Mw),
    F(13, OCe)
], mG);

}
