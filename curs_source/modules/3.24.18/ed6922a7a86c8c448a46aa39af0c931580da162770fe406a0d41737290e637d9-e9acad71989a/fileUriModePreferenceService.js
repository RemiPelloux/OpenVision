import { Th } from "./De_3.js";
import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { aR, bn } from "./async.js";
import { Pn } from "./extensions.js";
import { Fi, Ii } from "./files.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Ku } from "./utilities_3.js";
var vF, eNh, kIo, tNh, vtr;
export { eNh, kIo, tNh, vF, vtr };
var __wakaru_nNh_initialized = false;
export function nNh() {
if (__wakaru_nNh_initialized) return;
__wakaru_nNh_initialized = true;
"use strict";
x(), bn(), bt(), Se(), Qt(), Fi(), Pn(), Ze(), Vn(), Ku(), vF = {
    MARKDOWN_EDITOR: "markdownEditorModePreferences",
    CSV_TABLE: "csvTableModePreferences"
}, eNh = {
    CSV_TABLE: "csvTableDefaultMode"
}, kIo = vn("fileUriModePreferenceService"), tNh = 8, vtr = class extends we {
    constructor(e, t){
        super(), this._fileService = e, this._storageService = t, this._onDidModeChange = this._register(new ve), this.onDidModeChange = this._onDidModeChange.event, this._markdownPreferences = this._register(Th(this._storageService, vF.MARKDOWN_EDITOR)), this._csvTablePreferences = this._register(Th(this._storageService, vF.CSV_TABLE)), this._csvTableDefaultMode = this._register(Th(this._storageService, eNh.CSV_TABLE)), this._onDidCsvTableDefaultModeChange = this._register(new ve), this.onDidCsvTableDefaultModeChange = this._onDidCsvTableDefaultModeChange.event, this._cleanupLimiter = this._register(new aR(tNh)), this._cleanupStalePreferences();
    }
    getMode(e, t, n) {
        const i = t.toString();
        switch(e){
            case vF.MARKDOWN_EDITOR:
                {
                    const r = this._getPreferences(e)[i];
                    if (r !== void 0) return r;
                    break;
                }
            case vF.CSV_TABLE:
                {
                    const r = this._getPreferences(e)[i];
                    if (r !== void 0) return r;
                    const s = this._csvTableDefaultMode.get();
                    if (s !== null) return s;
                    break;
                }
        }
        return n?.defaultWhenUnset;
    }
    getStoredMode(e, t) {
        const n = t.toString();
        switch(e){
            case vF.MARKDOWN_EDITOR:
                return this._getPreferences(vF.MARKDOWN_EDITOR)[n];
            case vF.CSV_TABLE:
                return this._getPreferences(vF.CSV_TABLE)[n];
        }
    }
    setMode(e, t, n) {
        const i = t.toString();
        switch(e){
            case vF.MARKDOWN_EDITOR:
                {
                    const r = this._getPreferences(e), s = n;
                    if (r[i] === s) return;
                    this._setPreferences(e, {
                        ...r,
                        [i]: s
                    });
                    break;
                }
            case vF.CSV_TABLE:
                {
                    const r = this._getPreferences(e), s = n, o = r[i] !== s;
                    o && this._setPreferences(e, {
                        ...r,
                        [i]: s
                    });
                    const a = this._csvTableDefaultMode.get();
                    if (a !== s && (this._csvTableDefaultMode.set(s, void 0), this._onDidCsvTableDefaultModeChange.fire(s)), !o && a === s) return;
                    break;
                }
        }
        this._onDidModeChange.fire({
            key: e,
            uri: t,
            mode: n
        });
    }
    _getPreferences(e) {
        switch(e){
            case vF.MARKDOWN_EDITOR:
                return this._markdownPreferences.get();
            case vF.CSV_TABLE:
                return this._csvTablePreferences.get();
        }
    }
    _setPreferences(e, t) {
        switch(e){
            case vF.MARKDOWN_EDITOR:
                this._markdownPreferences.set(t, void 0);
                break;
            case vF.CSV_TABLE:
                this._csvTablePreferences.set(t, void 0);
                break;
        }
    }
    async _cleanupStalePreferences() {
        await this._cleanupStalePreferencesForKey(vF.MARKDOWN_EDITOR), await this._cleanupStalePreferencesForKey(vF.CSV_TABLE);
    }
    async _cleanupStalePreferencesForKey(e) {
        const t = e === vF.MARKDOWN_EDITOR ? this._getPreferences(vF.MARKDOWN_EDITOR) : this._getPreferences(vF.CSV_TABLE), n = Object.keys(t);
        if (n.length === 0) return;
        const i = await Promise.all(n.map((o)=>this._cleanupLimiter.queue(async ()=>{
                try {
                    const a = Ee.parse(o);
                    if (await this._fileService.exists(a)) return {
                        uriStr: o,
                        mode: t[o]
                    };
                } catch  {}
            }))), r = {};
        let s = !1;
        for (const [o, a] of n.entries()){
            const c = i[o];
            c ? r[c.uriStr] = c.mode : s = !0;
        }
        s && (e === vF.MARKDOWN_EDITOR ? this._setPreferences(e, r) : this._setPreferences(e, r));
    }
}, vtr = ie([
    C(0, Ii),
    C(1, yn)
], vtr), mn(kIo, vtr, 1);

}
