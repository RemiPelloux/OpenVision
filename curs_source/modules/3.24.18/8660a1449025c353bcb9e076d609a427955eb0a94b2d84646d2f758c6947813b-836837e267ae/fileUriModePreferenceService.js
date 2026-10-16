import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { qn, xI } from "./async.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { It } from "./instantiation.js";
import { Xh } from "./ipa.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
var i3, K1g, fxi, Y1g, ecs;
export { K1g, Y1g, ecs, fxi, i3 };
var __wakaru_vxi_initialized = false;
export function vxi() {
if (__wakaru_vxi_initialized) return;
__wakaru_vxi_initialized = true;
"use strict";
E(), qn(), Gt(), Qe(), fn(), ms(), Rn(), It(), Zi(), wu(), i3 = {
    MARKDOWN_EDITOR: "markdownEditorModePreferences",
    CSV_TABLE: "csvTableModePreferences"
}, K1g = {
    CSV_TABLE: "csvTableDefaultMode"
}, fxi = jn("fileUriModePreferenceService"), Y1g = 8, ecs = class extends st {
    constructor(t, e){
        super(), this._fileService = t, this._storageService = e, this._onDidModeChange = this._register(new tt), this.onDidModeChange = this._onDidModeChange.event, this._markdownPreferences = this._register(Xh(this._storageService, i3.MARKDOWN_EDITOR)), this._csvTablePreferences = this._register(Xh(this._storageService, i3.CSV_TABLE)), this._csvTableDefaultMode = this._register(Xh(this._storageService, K1g.CSV_TABLE)), this._onDidCsvTableDefaultModeChange = this._register(new tt), this.onDidCsvTableDefaultModeChange = this._onDidCsvTableDefaultModeChange.event, this._cleanupLimiter = this._register(new xI(Y1g)), this._cleanupStalePreferences();
    }
    getMode(t, e, n) {
        const i = e.toString();
        switch(t){
            case i3.MARKDOWN_EDITOR:
                {
                    const r = this._getPreferences(t)[i];
                    if (r !== void 0) return r;
                    break;
                }
            case i3.CSV_TABLE:
                {
                    const r = this._getPreferences(t)[i];
                    if (r !== void 0) return r;
                    const s = this._csvTableDefaultMode.get();
                    if (s !== null) return s;
                    break;
                }
        }
        return n?.defaultWhenUnset;
    }
    getStoredMode(t, e) {
        const n = e.toString();
        switch(t){
            case i3.MARKDOWN_EDITOR:
                return this._getPreferences(i3.MARKDOWN_EDITOR)[n];
            case i3.CSV_TABLE:
                return this._getPreferences(i3.CSV_TABLE)[n];
        }
    }
    setMode(t, e, n) {
        const i = e.toString();
        switch(t){
            case i3.MARKDOWN_EDITOR:
                {
                    const r = this._getPreferences(t), s = n;
                    if (r[i] === s) return;
                    this._setPreferences(t, {
                        ...r,
                        [i]: s
                    });
                    break;
                }
            case i3.CSV_TABLE:
                {
                    const r = this._getPreferences(t), s = n, o = r[i] !== s;
                    o && this._setPreferences(t, {
                        ...r,
                        [i]: s
                    });
                    const a = this._csvTableDefaultMode.get();
                    if (a !== s && (this._csvTableDefaultMode.set(s, void 0), this._onDidCsvTableDefaultModeChange.fire(s)), !o && a === s) return;
                    break;
                }
        }
        this._onDidModeChange.fire({
            key: t,
            uri: e,
            mode: n
        });
    }
    _getPreferences(t) {
        switch(t){
            case i3.MARKDOWN_EDITOR:
                return this._markdownPreferences.get();
            case i3.CSV_TABLE:
                return this._csvTablePreferences.get();
        }
    }
    _setPreferences(t, e) {
        switch(t){
            case i3.MARKDOWN_EDITOR:
                this._markdownPreferences.set(e, void 0);
                break;
            case i3.CSV_TABLE:
                this._csvTablePreferences.set(e, void 0);
                break;
        }
    }
    async _cleanupStalePreferences() {
        await this._cleanupStalePreferencesForKey(i3.MARKDOWN_EDITOR), await this._cleanupStalePreferencesForKey(i3.CSV_TABLE);
    }
    async _cleanupStalePreferencesForKey(t) {
        const e = t === i3.MARKDOWN_EDITOR ? this._getPreferences(i3.MARKDOWN_EDITOR) : this._getPreferences(i3.CSV_TABLE), n = Object.keys(e);
        if (n.length === 0) return;
        const i = await Promise.all(n.map((o)=>this._cleanupLimiter.queue(async ()=>{
                try {
                    const a = rt.parse(o);
                    if (await this._fileService.exists(a)) return {
                        uriStr: o,
                        mode: e[o]
                    };
                } catch  {}
            }))), r = {};
        let s = !1;
        for (const [o, a] of n.entries()){
            const l = i[o];
            l ? r[l.uriStr] = l.mode : s = !0;
        }
        s && (t === i3.MARKDOWN_EDITOR ? this._setPreferences(t, r) : this._setPreferences(t, r));
    }
}, ecs = Re([
    F(0, is),
    F(1, ki)
], ecs), bn(fxi, ecs, 1);

}
