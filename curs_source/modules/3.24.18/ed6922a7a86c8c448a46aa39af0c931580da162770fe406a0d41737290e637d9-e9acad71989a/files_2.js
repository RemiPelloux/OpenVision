import { Ct, He, S, Se, bt, cn, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { At, dn, he } from "./contextkey.js";
import { jP, of } from "./contextkeys.js";
import { jd, vd, xc } from "./editor_2.js";
import { Fi, Ii } from "./files.js";
import { kl, pc } from "./language.js";
import { Ll, fc } from "./model.js";
import { rt } from "./nls.js";
import { Ag, Xp } from "./textfiles.js";
import { x } from "./tslib.es6.js";
var _G, K$, jnr, vnt, rP, cDo, STe, lDo, uDo, uZ, dDo, nzt, hDo, LBh, qnr, pDo, izt, znr, Knr, NBh, dZ, OBh, x0t, I0t, mDo, Ynr, OLe, gDo, MN;
export { I0t, K$, Knr, LBh, MN, NBh, OBh, OLe, STe, Ynr, _G, cDo, dDo, dZ, gDo, hDo, izt, jnr, lDo, mDo, nzt, pDo, qnr, rP, uDo, uZ, vnt, x0t, znr };
var __wakaru_NA_initialized = false;
export function NA() {
if (__wakaru_NA_initialized) return;
__wakaru_NA_initialized = true;
"use strict";
x(), xc(), Fi(), dn(), Se(), Ll(), kl(), Ag(), of(), bt(), rt(), _G = "workbench.view.explorer", K$ = "workbench.explorer.fileView", jnr = new At("explorerViewletVisible", !0, {
    type: "boolean",
    description: S(7324, null)
}), vnt = new At("foldersViewVisible", !0, {
    type: "boolean",
    description: S(7325, null)
}), rP = new At("explorerResourceIsFolder", !1, {
    type: "boolean",
    description: S(7326, null)
}), cDo = new At("explorerResourceReadonly", !1, {
    type: "boolean",
    description: S(7327, null)
}), STe = cDo.toNegated(), lDo = new At("explorerResourceParentReadonly", !1, {
    type: "boolean",
    description: S(7328, null)
}), uDo = new At("explorerResourceAvailableEditorIds", ""), uZ = new At("explorerResourceIsRoot", !1, {
    type: "boolean",
    description: S(7329, null)
}), dDo = new At("explorerResourceCut", !1, {
    type: "boolean",
    description: S(7330, null)
}), nzt = new At("explorerResourceMoveableToTrash", !1, {
    type: "boolean",
    description: S(7331, null)
}), hDo = new At("filesExplorerFocus", !0, {
    type: "boolean",
    description: S(7332, null)
}), LBh = new At("openEditorsFocus", !0, {
    type: "boolean",
    description: S(7333, null)
}), qnr = new At("explorerViewletFocus", !0, {
    type: "boolean",
    description: S(7334, null)
}), pDo = new At("explorerFindProviderActive", !1, {
    type: "boolean",
    description: S(7335, null)
}), izt = new At("explorerViewletCompressedFocus", !0, {
    type: "boolean",
    description: S(7336, null)
}), znr = new At("explorerViewletCompressedFirstFocus", !0, {
    type: "boolean",
    description: S(7337, null)
}), Knr = new At("explorerViewletCompressedLastFocus", !0, {
    type: "boolean",
    description: S(7338, null)
}), NBh = new At("viewHasSomeCollapsibleItem", !1, {
    type: "boolean",
    description: S(7339, null)
}), dZ = he.and(vnt, hDo, he.not(jP)), OBh = he.and(vnt, qnr, he.not(jP)), x0t = "workbench.editors.files.textFileEditor", I0t = "workbench.editors.files.fileEditorInput", mDo = "workbench.editors.files.binaryFileEditor", Ynr = "code-text-binary", OLe = class extends we {
    constructor(e, t, n, i){
        super(), this.textFileService = e, this.fileService = t, this.languageService = n, this.modelService = i, this.fileWatcherDisposable = this._register(new cn);
    }
    static async open(e, t, n, i, r) {
        await i.openEditor({
            original: {
                resource: OLe.resourceToTextFile(t, e)
            },
            modified: {
                resource: e
            },
            label: n,
            options: r
        });
    }
    static resourceToTextFile(e, t) {
        return t.with({
            scheme: e,
            query: JSON.stringify({
                scheme: t.scheme,
                query: t.query
            })
        });
    }
    static textFileToResource(e) {
        const { scheme: t, query: n } = JSON.parse(e.query);
        return e.with({
            scheme: t,
            query: n
        });
    }
    async provideTextContent(e) {
        if (!e.query) return null;
        const t = OLe.textFileToResource(e), n = await this.resolveEditorModel(e);
        if (!this.fileWatcherDisposable.value) {
            const i = new He;
            this.fileWatcherDisposable.value = i, i.add(this.fileService.onDidFilesChange((r)=>{
                r.contains(t, 0) && this.resolveEditorModel(e, !1);
            })), n && i.add(Ct.once(n.onWillDispose)(()=>this.fileWatcherDisposable.clear()));
        }
        return n;
    }
    async resolveEditorModel(e, t = !0) {
        const n = OLe.textFileToResource(e), i = await this.textFileService.readStream(n);
        let r = this.modelService.getModel(e);
        if (r) this.modelService.updateModel(r, i.value);
        else if (t) {
            const s = this.modelService.getModel(n);
            let o;
            s ? o = this.languageService.createById(s.getLanguageId()) : o = this.languageService.createByFilepathOrFirstLine(n), r = this.modelService.createModel(i.value, o, e);
        }
        return r;
    }
}, OLe = ie([
    C(0, Xp),
    C(1, Ii),
    C(2, pc),
    C(3, fc)
], OLe), gDo = class FCm {
    constructor(t, n){
        this._editor = t, this._group = n, this.id = FCm.COUNTER++;
    }
    get editor() {
        return this._editor;
    }
    get group() {
        return this._group;
    }
    get groupId() {
        return this._group.id;
    }
    getId() {
        return `openeditor:${this.groupId}:${this.id}`;
    }
    isPreview() {
        return !this._group.isPinned(this.editor);
    }
    isSticky() {
        return this._group.isSticky(this.editor);
    }
    getResource() {
        return vd.getOriginalUri(this.editor, {
            supportSideBySide: jd.PRIMARY
        });
    }
}, gDo.COUNTER = 0, MN = gDo;

}
