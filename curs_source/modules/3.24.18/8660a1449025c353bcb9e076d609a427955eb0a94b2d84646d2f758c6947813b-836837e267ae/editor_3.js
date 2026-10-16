import { Gt, Pn, Qe, tt } from "./Iwo.js";
import { qn } from "./async.js";
import { Wo } from "./editorService.js";
import { Zv, od } from "./editor_2.js";
import { IT, np } from "./iterator.js";
import { Ki } from "./network.js";
import { Bt } from "./nls.js";
import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
import { Vp } from "./uriIdentity.js";
import { V4 } from "./workingCopyService.js";
var gRn, r3, J1g;
export { J1g, gRn, r3 };
var __wakaru_e9_initialized = false;
export function e9() {
if (__wakaru_e9_initialized) return;
__wakaru_e9_initialized = true;
"use strict";
E(), Bt(), od(), Eo(), Qe(), qn(), Wo(), Vp(), V4(), Ki(), IT(), Gt(), gRn = class VZi {
    constructor(e, n, i){
        this.ctor = e, this.typeId = n, this.name = i;
    }
    static didInstantiateEditorPane(e) {
        return VZi.instantiatedEditorPanes.has(e);
    }
    static create(e, n, i) {
        return new VZi(e, n, i);
    }
    instantiate(e, n) {
        VZi._onWillInstantiateEditorPane.fire({
            typeId: this.typeId
        });
        const i = e.createInstance(this.ctor, n);
        return VZi.instantiatedEditorPanes.add(this.typeId), i;
    }
    describes(e) {
        return e.getId() === this.typeId;
    }
}, gRn.instantiatedEditorPanes = new Set, gRn._onWillInstantiateEditorPane = new tt, gRn.onWillInstantiateEditorPane = gRn._onWillInstantiateEditorPane.event, r3 = gRn, J1g = class {
    constructor(){
        this.mapEditorPanesToEditors = new Map;
    }
    registerEditorPane(t, e) {
        return this.mapEditorPanesToEditors.set(t, e), Pn(()=>{
            this.mapEditorPanesToEditors.delete(t);
        });
    }
    getEditorPane(t) {
        const e = this.findEditorPaneDescriptors(t);
        if (e.length !== 0) return e.length === 1 ? e[0] : t.prefersEditorPane(e);
    }
    findEditorPaneDescriptors(t, e) {
        const n = [];
        for (const i of this.mapEditorPanesToEditors.keys()){
            const r = this.mapEditorPanesToEditors.get(i) || [];
            for (const s of r){
                const o = s.ctor;
                if (!e && t.constructor === o) {
                    n.push(i);
                    break;
                } else if (e && t instanceof o) {
                    n.push(i);
                    break;
                }
            }
        }
        return !e && n.length === 0 ? this.findEditorPaneDescriptors(t, !0) : n;
    }
    getEditorPaneByType(t) {
        return np.find(this.mapEditorPanesToEditors.keys(), (e)=>e.typeId === t);
    }
    getEditorPanes() {
        return Array.from(this.mapEditorPanesToEditors.keys());
    }
    getEditors() {
        const t = [];
        for (const e of this.mapEditorPanesToEditors.keys()){
            const n = this.mapEditorPanesToEditors.get(e);
            n && t.push(...n.map((i)=>i.ctor));
        }
        return t;
    }
}, Fi.add(Zv.EditorPane, new J1g);

}
