import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var fEt, Ehl, e1g;
export { Ehl, e1g, fEt };
var __wakaru_xVt_initialized = false;
export function xVt() {
if (__wakaru_xVt_initialized) return;
__wakaru_xVt_initialized = true;
"use strict";
E(), Gt(), Qe(), It(), Rn(), fEt = jn("agentLayoutEventService"), Ehl = class neu extends st {
    constructor(){
        super(...arguments), this._onDidChangeActiveComposer = this._register(new tt), this.onDidChangeActiveComposer = this._onDidChangeActiveComposer.event, this._onDidNavigateAgents = this._register(new tt), this.onDidNavigateAgents = this._onDidNavigateAgents.event, this._onDidFinalizeNavigation = this._register(new tt), this.onDidFinalizeNavigation = this._onDidFinalizeNavigation.event, this._onDidRequestFocusSearchInput = this._register(new tt), this.onDidRequestFocusSearchInput = this._onDidRequestFocusSearchInput.event, this._onDidChangeMRU = this._register(new tt), this.onDidChangeMRU = this._onDidChangeMRU.event, this._isInNavigationMode = !1, this._mruList = [];
    }
    isInNavigationMode() {
        return this._isInNavigationMode;
    }
    enterNavigationMode() {
        this._isInNavigationMode = !0;
    }
    exitNavigationMode() {
        this._isInNavigationMode = !1;
    }
    fireDidChangeActiveComposer(e) {
        this.recordAgentVisit(e.currentComposerId, e.currentType), this._onDidChangeActiveComposer.fire(e);
    }
    fireDidNavigateAgents(e) {
        this._onDidNavigateAgents.fire(e);
    }
    fireDidFinalizeNavigation() {
        this._onDidFinalizeNavigation.fire({});
    }
    fireDidRequestFocusSearchInput() {
        this._onDidRequestFocusSearchInput.fire({});
    }
    getMRUList() {
        return this._mruList;
    }
    recordAgentVisit(e, n, i) {
        const r = i?.behindComposerId;
        if (r !== void 0 && !this._mruList.some((a)=>a.composerId === r)) return;
        const s = this._mruList.findIndex((a)=>a.composerId === e);
        s !== -1 && this._mruList.splice(s, 1);
        const o = r === void 0 ? -1 : this._mruList.findIndex((a)=>a.composerId === r);
        this._mruList.splice(o + 1, 0, {
            composerId: e,
            type: n,
            timestamp: Date.now()
        }), this._mruList.length > neu.MAX_MRU_SIZE && (this._mruList.length = neu.MAX_MRU_SIZE), this._onDidChangeMRU.fire({
            entries: [
                ...this._mruList
            ]
        });
    }
    removeFromMRU(e) {
        const n = this._mruList.findIndex((i)=>i.composerId === e);
        n !== -1 && (this._mruList.splice(n, 1), this._onDidChangeMRU.fire({
            entries: [
                ...this._mruList
            ]
        }));
    }
}, Ehl.MAX_MRU_SIZE = 10, e1g = Ehl, bn(fEt, e1g, 1);

}
