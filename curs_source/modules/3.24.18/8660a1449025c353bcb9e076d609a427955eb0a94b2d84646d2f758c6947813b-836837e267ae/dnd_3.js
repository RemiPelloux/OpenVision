import { Di } from "./Iwo.js";
import { fwe } from "./dnd.js";
import { du } from "./map.js";
import { Yq } from "./marshalling.js";
import { qc } from "./opener.js";
import { Ul } from "./path_2.js";
import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
var woe, Azd, gvn, iEr, BD;
export { Azd, BD, gvn, iEr, woe };
var __wakaru_bO_initialized = false;
export function bO() {
if (__wakaru_bO_initialized) return;
__wakaru_bO_initialized = true;
"use strict";
E(), fwe(), du(), Yq(), Ul(), Di(), fn(), qc(), Eo(), woe = {
    EDITORS: "CodeEditors",
    FILES: "CodeFiles",
    SYMBOLS: "application/vnd.code.symbols",
    MARKERS: "application/vnd.code.diagnostics"
}, Azd = class {
    constructor(){
        this._contributions = new Map;
    }
    register(t) {
        if (this._contributions.has(t.dataFormatKey)) throw new Error(`A drag and drop contributiont with key '${t.dataFormatKey}' was already registered.`);
        this._contributions.set(t.dataFormatKey, t);
    }
    getAll() {
        return this._contributions.values();
    }
}, gvn = {
    DragAndDropContribution: "workbench.contributions.dragAndDrop"
}, Fi.add(gvn.DragAndDropContribution, new Azd), iEr = class _Rb {
    constructor(){}
    static getInstance() {
        return _Rb.INSTANCE;
    }
    hasData(e) {
        return e && e === this.proto;
    }
    clearData(e) {
        this.hasData(e) && (this.proto = void 0, this.data = void 0);
    }
    getData(e) {
        if (this.hasData(e)) return this.data;
    }
    setData(e, n) {
        n && (this.data = e, this.proto = n);
    }
}, iEr.INSTANCE = new iEr, BD = iEr;

}
