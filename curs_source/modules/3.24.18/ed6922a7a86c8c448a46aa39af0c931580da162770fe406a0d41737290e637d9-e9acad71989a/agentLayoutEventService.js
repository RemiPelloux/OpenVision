import { Se, bt, ve, we } from "./HVr.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var JCt, cIo, gLh;
export { JCt, cIo, gLh };
var __wakaru_cqt_initialized = false;
export function cqt() {
if (__wakaru_cqt_initialized) return;
__wakaru_cqt_initialized = true;
"use strict";
x(), bt(), Se(), Ze(), Pn(), JCt = vn("agentLayoutEventService"), cIo = class vAa extends we {
    constructor(){
        super(...arguments), this._onDidChangeActiveComposer = this._register(new ve), this.onDidChangeActiveComposer = this._onDidChangeActiveComposer.event, this._onDidNavigateAgents = this._register(new ve), this.onDidNavigateAgents = this._onDidNavigateAgents.event, this._onDidFinalizeNavigation = this._register(new ve), this.onDidFinalizeNavigation = this._onDidFinalizeNavigation.event, this._onDidRequestFocusSearchInput = this._register(new ve), this.onDidRequestFocusSearchInput = this._onDidRequestFocusSearchInput.event, this._onDidChangeMRU = this._register(new ve), this.onDidChangeMRU = this._onDidChangeMRU.event, this._isInNavigationMode = !1, this._mruList = [];
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
    fireDidChangeActiveComposer(t) {
        this.recordAgentVisit(t.currentComposerId, t.currentType), this._onDidChangeActiveComposer.fire(t);
    }
    fireDidNavigateAgents(t) {
        this._onDidNavigateAgents.fire(t);
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
    recordAgentVisit(t, n, i) {
        const r = i?.behindComposerId;
        if (r !== void 0 && !this._mruList.some((a)=>a.composerId === r)) return;
        const s = this._mruList.findIndex((a)=>a.composerId === t);
        s !== -1 && this._mruList.splice(s, 1);
        const o = r === void 0 ? -1 : this._mruList.findIndex((a)=>a.composerId === r);
        this._mruList.splice(o + 1, 0, {
            composerId: t,
            type: n,
            timestamp: Date.now()
        }), this._mruList.length > vAa.MAX_MRU_SIZE && (this._mruList.length = vAa.MAX_MRU_SIZE), this._onDidChangeMRU.fire({
            entries: [
                ...this._mruList
            ]
        });
    }
    removeFromMRU(t) {
        const n = this._mruList.findIndex((i)=>i.composerId === t);
        n !== -1 && (this._mruList.splice(n, 1), this._onDidChangeMRU.fire({
            entries: [
                ...this._mruList
            ]
        }));
    }
}, cIo.MAX_MRU_SIZE = 10, gLh = cIo, mn(JCt, gLh, 1);

}
