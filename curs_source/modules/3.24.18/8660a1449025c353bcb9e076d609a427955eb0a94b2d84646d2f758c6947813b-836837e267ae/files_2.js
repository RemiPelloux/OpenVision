import { D, Gt, Nt, Qe, Vn, en, st } from "./Iwo.js";
import { Hi, cn, mt } from "./contextkey.js";
import { tJn, x_ } from "./contextkeys.js";
import { Nm, Wm, od } from "./editor_2.js";
import { is, ms } from "./files.js";
import { Kp, Ph } from "./language.js";
import { dd, xp } from "./model.js";
import { Bt } from "./nls.js";
import { Vf, u_ } from "./textfiles.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var CMe, rKt, Vfl, sKt, VB, oRg, vVe, HPk, aRg, fme, lRg, yAi, cRg, WPk, uRg, GPk, qPk, zPk, VPk, KPk, TMe, dRg, SAi, oKt, Kfl, gds, _Ve, Yfl, c2n;
export { CMe, GPk, HPk, KPk, Kfl, SAi, TMe, VB, VPk, Vfl, WPk, Yfl, _Ve, aRg, c2n, cRg, dRg, fme, gds, lRg, oKt, oRg, qPk, rKt, sKt, uRg, vVe, yAi, zPk };
var __wakaru_lU_initialized = false;
export function lU() {
if (__wakaru_lU_initialized) return;
__wakaru_lU_initialized = true;
"use strict";
E(), od(), ms(), Hi(), Qe(), xp(), Kp(), u_(), x_(), Gt(), Bt(), CMe = "workbench.view.explorer", rKt = "workbench.explorer.fileView", Vfl = new cn("explorerViewletVisible", !0, {
    type: "boolean",
    description: D(7324, null)
}), sKt = new cn("foldersViewVisible", !0, {
    type: "boolean",
    description: D(7325, null)
}), VB = new cn("explorerResourceIsFolder", !1, {
    type: "boolean",
    description: D(7326, null)
}), oRg = new cn("explorerResourceReadonly", !1, {
    type: "boolean",
    description: D(7327, null)
}), vVe = oRg.toNegated(), HPk = new cn("explorerResourceParentReadonly", !1, {
    type: "boolean",
    description: D(7328, null)
}), aRg = new cn("explorerResourceAvailableEditorIds", ""), fme = new cn("explorerResourceIsRoot", !1, {
    type: "boolean",
    description: D(7329, null)
}), lRg = new cn("explorerResourceCut", !1, {
    type: "boolean",
    description: D(7330, null)
}), yAi = new cn("explorerResourceMoveableToTrash", !1, {
    type: "boolean",
    description: D(7331, null)
}), cRg = new cn("filesExplorerFocus", !0, {
    type: "boolean",
    description: D(7332, null)
}), WPk = new cn("openEditorsFocus", !0, {
    type: "boolean",
    description: D(7333, null)
}), uRg = new cn("explorerViewletFocus", !0, {
    type: "boolean",
    description: D(7334, null)
}), GPk = new cn("explorerFindProviderActive", !1, {
    type: "boolean",
    description: D(7335, null)
}), qPk = new cn("explorerViewletCompressedFocus", !0, {
    type: "boolean",
    description: D(7336, null)
}), zPk = new cn("explorerViewletCompressedFirstFocus", !0, {
    type: "boolean",
    description: D(7337, null)
}), VPk = new cn("explorerViewletCompressedLastFocus", !0, {
    type: "boolean",
    description: D(7338, null)
}), KPk = new cn("viewHasSomeCollapsibleItem", !1, {
    type: "boolean",
    description: D(7339, null)
}), TMe = mt.and(sKt, cRg, mt.not(tJn)), dRg = mt.and(sKt, uRg, mt.not(tJn)), SAi = "workbench.editors.files.textFileEditor", oKt = "workbench.editors.files.fileEditorInput", Kfl = "workbench.editors.files.binaryFileEditor", gds = "code-text-binary", _Ve = class extends st {
    constructor(t, e, n, i){
        super(), this.textFileService = t, this.fileService = e, this.languageService = n, this.modelService = i, this.fileWatcherDisposable = this._register(new Vn);
    }
    static async open(t, e, n, i, r) {
        await i.openEditor({
            original: {
                resource: _Ve.resourceToTextFile(e, t)
            },
            modified: {
                resource: t
            },
            label: n,
            options: r
        });
    }
    static resourceToTextFile(t, e) {
        return e.with({
            scheme: t,
            query: JSON.stringify({
                scheme: e.scheme,
                query: e.query
            })
        });
    }
    static textFileToResource(t) {
        const { scheme: e, query: n } = JSON.parse(t.query);
        return t.with({
            scheme: e,
            query: n
        });
    }
    async provideTextContent(t) {
        if (!t.query) return null;
        const e = _Ve.textFileToResource(t), n = await this.resolveEditorModel(t);
        if (!this.fileWatcherDisposable.value) {
            const i = new Nt;
            this.fileWatcherDisposable.value = i, i.add(this.fileService.onDidFilesChange((r)=>{
                r.contains(e, 0) && this.resolveEditorModel(t, !1);
            })), n && i.add(en.once(n.onWillDispose)(()=>this.fileWatcherDisposable.clear()));
        }
        return n;
    }
    async resolveEditorModel(t, e = !0) {
        const n = _Ve.textFileToResource(t), i = await this.textFileService.readStream(n);
        let r = this.modelService.getModel(t);
        if (r) this.modelService.updateModel(r, i.value);
        else if (e) {
            const s = this.modelService.getModel(n);
            let o;
            s ? o = this.languageService.createById(s.getLanguageId()) : o = this.languageService.createByFilepathOrFirstLine(n), r = this.modelService.createModel(i.value, o, t);
        }
        return r;
    }
}, _Ve = Re([
    F(0, Vf),
    F(1, is),
    F(2, Ph),
    F(3, dd)
], _Ve), Yfl = class TPb {
    constructor(e, n){
        this._editor = e, this._group = n, this.id = TPb.COUNTER++;
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
        return Wm.getOriginalUri(this.editor, {
            supportSideBySide: Nm.PRIMARY
        });
    }
}, Yfl.COUNTER = 0, c2n = Yfl;

}
