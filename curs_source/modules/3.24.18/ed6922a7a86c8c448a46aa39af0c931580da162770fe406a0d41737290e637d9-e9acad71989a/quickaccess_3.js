import { S, Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { At, dn, he } from "./contextkey.js";
import { Nv } from "./editorBrowser.js";
import { Nc, gs } from "./editorGroupsService.js";
import { Ni, hn } from "./editorService.js";
import { no } from "./keybinding.js";
import { rt } from "./nls.js";
import { ikg } from "./qIc.js";
import { Ya } from "./quickInput.js";
import { x } from "./tslib.es6.js";
var z_o, slh, ioe, K_o, Y_o, qGt;
export { K_o, Y_o, ioe, qGt, slh, z_o };
var __wakaru_A1e_initialized = false;
export function A1e() {
if (__wakaru_A1e_initialized) return;
__wakaru_A1e_initialized = true;
"use strict";
x(), rt(), dn(), no(), Ya(), Se(), Nv(), Nc(), Ni(), z_o = "inQuickOpen", slh = new At(z_o, !1, S(4016, null)), ioe = he.has(z_o), K_o = "inFilesPicker", Y_o = he.and(ioe, he.has(K_o)), qGt = class extends we {
    constructor(e, t){
        super(), this.editorService = e, this.editorGroupsService = t, this._editorViewState = void 0, this.openedTransientEditors = new Set;
    }
    set() {
        if (this._editorViewState) return;
        const e = this.editorService.activeEditorPane;
        e && (this._editorViewState = {
            group: e.group,
            editor: e.input,
            state: ikg(e.getControl())?.saveViewState() ?? void 0
        });
    }
    async openTransientEditor(e, t) {
        e.options = {
            ...e.options,
            transient: !0
        };
        const n = await this.editorService.openEditor(e, t);
        return n?.input && n.input !== this._editorViewState?.editor && n.group.isTransient(n.input) && this.openedTransientEditors.add(n.input), n;
    }
    async restore() {
        if (this._editorViewState) {
            for (const e of this.openedTransientEditors)if (!e.isDirty()) for (const t of this.editorGroupsService.groups)t.isTransient(e) && await t.closeEditor(e, {
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
}, qGt = ie([
    C(0, hn),
    C(1, gs)
], qGt);

}
