import { ns, pge, si } from "./HVr.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var gqt, Q5, wtr;
export { Q5, gqt, wtr };
var __wakaru_xq_initialized = false;
export function xq() {
if (__wakaru_xq_initialized) return;
__wakaru_xq_initialized = true;
"use strict";
x(), gr(), si(), gqt = class wz {
    constructor(t, n){
        this.storageService = n, this.id = wz.COMMON_PREFIX + t;
    }
    getMemento(t, n) {
        switch(t){
            case 1:
                {
                    let i = wz.workspaceMementos.get(this.storageService);
                    i || (i = new Map, wz.workspaceMementos.set(this.storageService, i));
                    let r = i.get(this.id);
                    return r || (r = new wtr(this.id, t, n, this.storageService), i.set(this.id, r)), r.getMemento();
                }
            case 0:
                {
                    let i = wz.profileMementos.get(this.id);
                    return i || (i = new wtr(this.id, t, n, this.storageService), wz.profileMementos.set(this.id, i)), i.getMemento();
                }
            case -1:
                {
                    let i = wz.applicationMementos.get(this.id);
                    return i || (i = new wtr(this.id, t, n, this.storageService), wz.applicationMementos.set(this.id, i)), i.getMemento();
                }
        }
    }
    onDidChangeValue(t, n) {
        return this.storageService.onDidChangeValue(t, this.id, n);
    }
    saveMemento() {
        wz.workspaceMementos.get(this.storageService)?.get(this.id)?.save(), wz.profileMementos.get(this.id)?.save(), wz.applicationMementos.get(this.id)?.save();
    }
    reloadMemento(t) {
        let n;
        switch(t){
            case -1:
                n = wz.applicationMementos.get(this.id);
                break;
            case 0:
                n = wz.profileMementos.get(this.id);
                break;
            case 1:
                n = wz.workspaceMementos.get(this.storageService)?.get(this.id);
                break;
        }
        n?.reload();
    }
    static clear(t) {
        switch(t){
            case 1:
                wz.workspaceMementos = new WeakMap;
                break;
            case 0:
                wz.profileMementos.clear();
                break;
            case -1:
                wz.applicationMementos.clear();
                break;
        }
    }
}, gqt.applicationMementos = new Map, gqt.profileMementos = new Map, gqt.workspaceMementos = new WeakMap, gqt.COMMON_PREFIX = "memento/", Q5 = gqt, wtr = class {
    constructor(e, t, n, i){
        this.id = e, this.scope = t, this.target = n, this.storageService = i, this.mementoObj = this.doLoad();
    }
    doLoad() {
        try {
            return this.storageService.getObject(this.id, this.scope, {});
        } catch (e) {
            ns(`[memento]: failed to parse contents: ${e} (id: ${this.id}, scope: ${this.scope}, contents: ${this.storageService.get(this.id, this.scope)})`);
        }
        return {};
    }
    getMemento() {
        return this.mementoObj;
    }
    reload() {
        for (const e of Object.getOwnPropertyNames(this.mementoObj))delete this.mementoObj[e];
        Object.assign(this.mementoObj, this.doLoad());
    }
    save() {
        pge(this.mementoObj) ? this.storageService.remove(this.id, this.scope) : this.storageService.store(this.id, this.mementoObj, this.scope, this.target);
    }
};

}
