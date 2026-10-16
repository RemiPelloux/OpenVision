import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Nc, gs } from "./editorGroupsService.js";
import { Ni, hn } from "./editorService.js";
import { _S, xc } from "./editor_2.js";
import { Pn } from "./extensions.js";
import { Fi, Ii } from "./files.js";
import { Ze } from "./instantiation.js";
import { FBn, Z5 } from "./markdownPlanEditorInput.js";
import { mn, vn } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
var BBn, ohe, btr;
export { BBn, btr, ohe };
var __wakaru_UBn_initialized = false;
export function UBn() {
if (__wakaru_UBn_initialized) return;
__wakaru_UBn_initialized = true;
"use strict";
x(), Se(), Qt(), Ze(), Pn(), Fi(), Ha(), Ni(), Nc(), xc(), FBn(), bt(), BBn = vn("planEditorModeService"), ohe = {
    RICH: "rich",
    RAW: "raw"
}, btr = class extends we {
    constructor(e, t, n, i){
        super(), this._fileService = e, this._reactiveStorageService = t, this._editorService = n, this._editorGroupsService = i, this._onDidModeChange = this._register(new ve), this.onDidModeChange = this._onDidModeChange.event, this._cleanupStalePreferences();
    }
    get _preferences() {
        return this._reactiveStorageService.applicationUserPersistentStorage.planEditorModePreferences || {};
    }
    _setPreferences(e) {
        this._reactiveStorageService.setApplicationUserPersistentStorage("planEditorModePreferences", e);
    }
    getMode(e) {
        return this._preferences[e.toString()] ?? ohe.RICH;
    }
    setMode(e, t) {
        const n = e.toString();
        this._preferences[n] !== t && (this._setPreferences({
            ...this._preferences,
            [n]: t
        }), this._onDidModeChange.fire({
            uri: e,
            mode: t
        }));
    }
    async switchEditorMode(e, t) {
        this.setMode(e, t);
        const n = this._editorGroupsService.activeGroup, i = this._editorService.activeEditor;
        if (!i) return;
        const r = t === ohe.RAW ? _S.id : Z5.EditorID;
        await this._editorService.replaceEditors([
            {
                editor: i,
                replacement: {
                    resource: e,
                    options: {
                        override: r
                    }
                }
            }
        ], n);
    }
    async _cleanupStalePreferences() {
        const e = this._preferences;
        if (Object.keys(e).length === 0) return;
        const t = {};
        let n = !1;
        await Promise.all(Object.entries(e).map(async ([i, r])=>{
            try {
                const s = Ee.parse(i);
                await this._fileService.exists(s) ? t[i] = r : n = !0;
            } catch  {
                n = !0;
            }
        })), n && this._setPreferences(t);
    }
}, btr = ie([
    C(0, Ii),
    C(1, Do),
    C(2, hn),
    C(3, gs)
], btr), mn(BBn, btr, 1);

}
