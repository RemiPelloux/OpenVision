import { Se, bt, rn, ve } from "./HVr.js";
import { bn } from "./async.js";
import { Ni } from "./editorService.js";
import { Wh, xc } from "./editor_2.js";
import { Eg, _a } from "./iterator.js";
import { li } from "./network.js";
import { rt } from "./nls.js";
import { kn, rr } from "./platform_2.js";
import { x } from "./tslib.es6.js";
import { rl } from "./uriIdentity.js";
import { dL } from "./workingCopyService.js";
var mqt, Ck, oNh;
export { Ck, mqt, oNh };
var __wakaru_B1_initialized = false;
export function B1() {
if (__wakaru_B1_initialized) return;
__wakaru_B1_initialized = true;
"use strict";
x(), rt(), xc(), rr(), Se(), bn(), Ni(), rl(), dL(), li(), Eg(), bt(), mqt = class fQn {
    constructor(t, n, i){
        this.ctor = t, this.typeId = n, this.name = i;
    }
    static didInstantiateEditorPane(t) {
        return fQn.instantiatedEditorPanes.has(t);
    }
    static create(t, n, i) {
        return new fQn(t, n, i);
    }
    instantiate(t, n) {
        fQn._onWillInstantiateEditorPane.fire({
            typeId: this.typeId
        });
        const i = t.createInstance(this.ctor, n);
        return fQn.instantiatedEditorPanes.add(this.typeId), i;
    }
    describes(t) {
        return t.getId() === this.typeId;
    }
}, mqt.instantiatedEditorPanes = new Set, mqt._onWillInstantiateEditorPane = new ve, mqt.onWillInstantiateEditorPane = mqt._onWillInstantiateEditorPane.event, Ck = mqt, oNh = class {
    constructor(){
        this.mapEditorPanesToEditors = new Map;
    }
    registerEditorPane(e, t) {
        return this.mapEditorPanesToEditors.set(e, t), rn(()=>{
            this.mapEditorPanesToEditors.delete(e);
        });
    }
    getEditorPane(e) {
        const t = this.findEditorPaneDescriptors(e);
        if (t.length !== 0) return t.length === 1 ? t[0] : e.prefersEditorPane(t);
    }
    findEditorPaneDescriptors(e, t) {
        const n = [];
        for (const i of this.mapEditorPanesToEditors.keys()){
            const r = this.mapEditorPanesToEditors.get(i) || [];
            for (const s of r){
                const o = s.ctor;
                if (!t && e.constructor === o) {
                    n.push(i);
                    break;
                } else if (t && e instanceof o) {
                    n.push(i);
                    break;
                }
            }
        }
        return !t && n.length === 0 ? this.findEditorPaneDescriptors(e, !0) : n;
    }
    getEditorPaneByType(e) {
        return _a.find(this.mapEditorPanesToEditors.keys(), (t)=>t.typeId === e);
    }
    getEditorPanes() {
        return Array.from(this.mapEditorPanesToEditors.keys());
    }
    getEditors() {
        const e = [];
        for (const t of this.mapEditorPanesToEditors.keys()){
            const n = this.mapEditorPanesToEditors.get(t);
            n && e.push(...n.map((i)=>i.ctor));
        }
        return e;
    }
}, kn.add(Wh.EditorPane, new oNh);

}
