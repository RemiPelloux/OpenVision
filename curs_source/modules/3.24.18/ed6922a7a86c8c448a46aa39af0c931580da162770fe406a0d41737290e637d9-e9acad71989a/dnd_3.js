import { jn } from "./HVr.js";
import { jK } from "./dnd.js";
import { oc } from "./map.js";
import { a2 } from "./marshalling.js";
import { ko } from "./opener.js";
import { ba } from "./path_2.js";
import { kn, rr } from "./platform_2.js";
import { x } from "./tslib.es6.js";
import { Qt } from "./uri.js";
var K7, r$c, UFt, Syi, gA;
export { K7, Syi, UFt, gA, r$c };
var __wakaru_sN_initialized = false;
export function sN() {
if (__wakaru_sN_initialized) return;
__wakaru_sN_initialized = true;
"use strict";
x(), jK(), oc(), a2(), ba(), jn(), Qt(), ko(), rr(), K7 = {
    EDITORS: "CodeEditors",
    FILES: "CodeFiles",
    SYMBOLS: "application/vnd.code.symbols",
    MARKERS: "application/vnd.code.diagnostics"
}, r$c = class {
    constructor(){
        this._contributions = new Map;
    }
    register(e) {
        if (this._contributions.has(e.dataFormatKey)) throw new Error(`A drag and drop contributiont with key '${e.dataFormatKey}' was already registered.`);
        this._contributions.set(e.dataFormatKey, e);
    }
    getAll() {
        return this._contributions.values();
    }
}, UFt = {
    DragAndDropContribution: "workbench.contributions.dragAndDrop"
}, kn.add(UFt.DragAndDropContribution, new r$c), Syi = class zkm {
    constructor(){}
    static getInstance() {
        return zkm.INSTANCE;
    }
    hasData(t) {
        return t && t === this.proto;
    }
    clearData(t) {
        this.hasData(t) && (this.proto = void 0, this.data = void 0);
    }
    getData(t) {
        if (this.hasData(t)) return this.data;
    }
    setData(t, n) {
        n && (this.data = t, this.proto = n);
    }
}, Syi.INSTANCE = new Syi, gA = Syi;

}
