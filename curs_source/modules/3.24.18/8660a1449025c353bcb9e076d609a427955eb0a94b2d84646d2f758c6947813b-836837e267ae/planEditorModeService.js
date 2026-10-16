import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Ld, _a } from "./editorGroupsService.js";
import { Wo, gr } from "./editorService.js";
import { od, sT } from "./editor_2.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { It } from "./instantiation.js";
import { E$, _xi } from "./markdownPlanEditorInput.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
var bxi, uTe, ncs;
export { bxi, ncs, uTe };
var __wakaru_yxi_initialized = false;
export function yxi() {
if (__wakaru_yxi_initialized) return;
__wakaru_yxi_initialized = true;
"use strict";
E(), Qe(), fn(), It(), Rn(), ms(), el(), Wo(), Ld(), od(), _xi(), Gt(), bxi = jn("planEditorModeService"), uTe = {
    RICH: "rich",
    RAW: "raw"
}, ncs = class extends st {
    constructor(t, e, n, i){
        super(), this._fileService = t, this._reactiveStorageService = e, this._editorService = n, this._editorGroupsService = i, this._onDidModeChange = this._register(new tt), this.onDidModeChange = this._onDidModeChange.event, this._cleanupStalePreferences();
    }
    get _preferences() {
        return this._reactiveStorageService.applicationUserPersistentStorage.planEditorModePreferences || {};
    }
    _setPreferences(t) {
        this._reactiveStorageService.setApplicationUserPersistentStorage("planEditorModePreferences", t);
    }
    getMode(t) {
        return this._preferences[t.toString()] ?? uTe.RICH;
    }
    setMode(t, e) {
        const n = t.toString();
        this._preferences[n] !== e && (this._setPreferences({
            ...this._preferences,
            [n]: e
        }), this._onDidModeChange.fire({
            uri: t,
            mode: e
        }));
    }
    async switchEditorMode(t, e) {
        this.setMode(t, e);
        const n = this._editorGroupsService.activeGroup, i = this._editorService.activeEditor;
        if (!i) return;
        const r = e === uTe.RAW ? sT.id : E$.EditorID;
        await this._editorService.replaceEditors([
            {
                editor: i,
                replacement: {
                    resource: t,
                    options: {
                        override: r
                    }
                }
            }
        ], n);
    }
    async _cleanupStalePreferences() {
        const t = this._preferences;
        if (Object.keys(t).length === 0) return;
        const e = {};
        let n = !1;
        await Promise.all(Object.entries(t).map(async ([i, r])=>{
            try {
                const s = rt.parse(i);
                await this._fileService.exists(s) ? e[i] = r : n = !0;
            } catch  {
                n = !0;
            }
        })), n && this._setPreferences(e);
    }
}, ncs = Re([
    F(0, is),
    F(1, sa),
    F(2, gr),
    F(3, _a)
], ncs), bn(bxi, ncs, 1);

}
