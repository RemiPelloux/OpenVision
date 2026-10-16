import { D, Qe, st } from "./Iwo.js";
import { Hi, cn, mt } from "./contextkey.js";
import { xw } from "./editorBrowser.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr } from "./editorService.js";
import { ru } from "./keybinding.js";
import { Bt } from "./nls.js";
import { Gu } from "./quickInput.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { BOy } from "./ze.js";
var uel, NKm, NPe, LKm, del, PCi;
export { LKm, NKm, NPe, PCi, del, uel };
var __wakaru_Zqt_initialized = false;
export function Zqt() {
if (__wakaru_Zqt_initialized) return;
__wakaru_Zqt_initialized = true;
"use strict";
E(), Bt(), Hi(), ru(), Gu(), Qe(), xw(), Ld(), Wo(), uel = "inQuickOpen", NKm = new cn(uel, !1, D(4016, null)), NPe = mt.has(uel), LKm = "inFilesPicker", del = mt.and(NPe, mt.has(LKm)), PCi = class extends st {
    constructor(t, e){
        super(), this.editorService = t, this.editorGroupsService = e, this._editorViewState = void 0, this.openedTransientEditors = new Set;
    }
    set() {
        if (this._editorViewState) return;
        const t = this.editorService.activeEditorPane;
        t && (this._editorViewState = {
            group: t.group,
            editor: t.input,
            state: BOy(t.getControl())?.saveViewState() ?? void 0
        });
    }
    async openTransientEditor(t, e) {
        t.options = {
            ...t.options,
            transient: !0
        };
        const n = await this.editorService.openEditor(t, e);
        return n?.input && n.input !== this._editorViewState?.editor && n.group.isTransient(n.input) && this.openedTransientEditors.add(n.input), n;
    }
    async restore() {
        if (this._editorViewState) {
            for (const t of this.openedTransientEditors)if (!t.isDirty()) for (const e of this.editorGroupsService.groups)e.isTransient(t) && await e.closeEditor(t, {
                preserveFocus: !0
            });
            await this._editorViewState.group.openEditor(this._editorViewState.editor, {
                viewState: this._editorViewState.state,
                preserveFocus: !0
            }), this.reset();
        }
    }
    reset() {
        this._editorViewState = void 0, this.openedTransientEditors.clear();
    }
    dispose() {
        super.dispose(), this.reset();
    }
}, PCi = Re([
    F(0, gr),
    F(1, _a)
], PCi);

}
