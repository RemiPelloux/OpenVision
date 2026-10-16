import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { PVt, X1g } from "./Ycg.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr } from "./editorService.js";
import { od, sT } from "./editor_2.js";
import { Rn } from "./extensions.js";
import { fxi, i3, vxi } from "./fileUriModePreferenceService.js";
import { It } from "./instantiation.js";
import { MVt } from "./markdownEditorEligibility.js";
import { fG, pRn } from "./markdownEditorInput.js";
import { Qls, iVe } from "./mermaidEditorInput.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Vat, OP, tcs;
export { OP, Vat, tcs };
var __wakaru_Kat_initialized = false;
export function Kat() {
if (__wakaru_Kat_initialized) return;
__wakaru_Kat_initialized = true;
"use strict";
E(), Qe(), It(), Rn(), Wo(), Ld(), od(), pRn(), Qls(), MVt(), Gt(), vxi(), Vat = jn("markdownEditorModeService"), OP = {
    RICH: "rich",
    RAW: "raw"
}, tcs = class extends st {
    constructor(t, e, n){
        super(), this._preferenceService = t, this._editorService = e, this._editorGroupsService = n, this._onDidModeChange = this._register(new tt), this.onDidModeChange = this._onDidModeChange.event, this._register(this._preferenceService.onDidModeChange((i)=>{
            i.key === i3.MARKDOWN_EDITOR && this._onDidModeChange.fire({
                uri: i.uri,
                mode: i.mode
            });
        }));
    }
    getMode(t, e) {
        return this._preferenceService.getMode(i3.MARKDOWN_EDITOR, t, {
            defaultWhenUnset: e?.defaultWhenUnset ?? X1g(t)
        });
    }
    setMode(t, e) {
        this._preferenceService.setMode(i3.MARKDOWN_EDITOR, t, e);
    }
    async switchEditorMode(t, e) {
        this.setMode(t, e);
        const n = this._editorGroupsService.activeGroup, i = this._editorService.activeEditor;
        if (!i) return;
        const r = e === OP.RAW ? sT.id : PVt(t) ? iVe.EditorID : fG.EditorID;
        await this._editorService.replaceEditors([
            {
                editor: i,
                forceReplaceDirty: !0,
                replacement: {
                    resource: t,
                    options: {
                        override: r
                    }
                }
            }
        ], n);
    }
}, tcs = Re([
    F(0, fxi),
    F(1, gr),
    F(2, _a)
], tcs), bn(Vat, tcs, 1);

}
