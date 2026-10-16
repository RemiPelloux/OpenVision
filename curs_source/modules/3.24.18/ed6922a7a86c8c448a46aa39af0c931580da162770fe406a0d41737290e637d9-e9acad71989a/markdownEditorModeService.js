import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Nc, gs } from "./editorGroupsService.js";
import { Ni, hn } from "./editorService.js";
import { _S, xc } from "./editor_2.js";
import { Pn } from "./extensions.js";
import { kIo, nNh, vF } from "./fileUriModePreferenceService.js";
import { Ze } from "./instantiation.js";
import { ftr } from "./markdownEditorEligibility.js";
import { NBn, u8 } from "./markdownEditorInput.js";
import { ILe, mtr } from "./mermaidEditorInput.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
function OBn(e) {
    const t = e.path.toLowerCase();
    return t.endsWith(".mmd") || t.endsWith(".mermaid");
}
function iNh(e) {
    return OBn(e) ? Eq.RICH : Eq.RAW;
}
var nnt, Eq, _tr;
export { Eq, OBn, _tr, iNh, nnt };
var __wakaru_n0t_initialized = false;
export function n0t() {
if (__wakaru_n0t_initialized) return;
__wakaru_n0t_initialized = true;
"use strict";
x(), Se(), Ze(), Pn(), Ni(), Nc(), xc(), NBn(), mtr(), ftr(), bt(), nNh(), nnt = vn("markdownEditorModeService"), Eq = {
    RICH: "rich",
    RAW: "raw"
}, _tr = class extends we {
    constructor(e, t, n){
        super(), this._preferenceService = e, this._editorService = t, this._editorGroupsService = n, this._onDidModeChange = this._register(new ve), this.onDidModeChange = this._onDidModeChange.event, this._register(this._preferenceService.onDidModeChange((i)=>{
            i.key === vF.MARKDOWN_EDITOR && this._onDidModeChange.fire({
                uri: i.uri,
                mode: i.mode
            });
        }));
    }
    getMode(e, t) {
        return this._preferenceService.getMode(vF.MARKDOWN_EDITOR, e, {
            defaultWhenUnset: t?.defaultWhenUnset ?? iNh(e)
        });
    }
    setMode(e, t) {
        this._preferenceService.setMode(vF.MARKDOWN_EDITOR, e, t);
    }
    async switchEditorMode(e, t) {
        this.setMode(e, t);
        const n = this._editorGroupsService.activeGroup, i = this._editorService.activeEditor;
        if (!i) return;
        const r = t === Eq.RAW ? _S.id : OBn(e) ? ILe.EditorID : u8.EditorID;
        await this._editorService.replaceEditors([
            {
                editor: i,
                forceReplaceDirty: !0,
                replacement: {
                    resource: e,
                    options: {
                        override: r
                    }
                }
            }
        ], n);
    }
}, _tr = ie([
    C(0, kIo),
    C(1, hn),
    C(2, gs)
], _tr), mn(nnt, _tr, 1);

}
