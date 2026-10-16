import { Ei, xOe, xr } from "./Iwo.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
var fRn, ume, acs;
export { acs, fRn, ume };
var __wakaru_p9e_initialized = false;
export function p9e() {
if (__wakaru_p9e_initialized) return;
__wakaru_p9e_initialized = true;
"use strict";
E(), To(), Ei(), fRn = class Mre {
    constructor(e, n){
        this.storageService = n, this.id = Mre.COMMON_PREFIX + e;
    }
    getMemento(e, n) {
        switch(e){
            case 1:
                {
                    let i = Mre.workspaceMementos.get(this.storageService);
                    i || (i = new Map, Mre.workspaceMementos.set(this.storageService, i));
                    let r = i.get(this.id);
                    return r || (r = new acs(this.id, e, n, this.storageService), i.set(this.id, r)), r.getMemento();
                }
            case 0:
                {
                    let i = Mre.profileMementos.get(this.id);
                    return i || (i = new acs(this.id, e, n, this.storageService), Mre.profileMementos.set(this.id, i)), i.getMemento();
                }
            case -1:
                {
                    let i = Mre.applicationMementos.get(this.id);
                    return i || (i = new acs(this.id, e, n, this.storageService), Mre.applicationMementos.set(this.id, i)), i.getMemento();
                }
        }
    }
    onDidChangeValue(e, n) {
        return this.storageService.onDidChangeValue(e, this.id, n);
    }
    saveMemento() {
        Mre.workspaceMementos.get(this.storageService)?.get(this.id)?.save(), Mre.profileMementos.get(this.id)?.save(), Mre.applicationMementos.get(this.id)?.save();
    }
    reloadMemento(e) {
        let n;
        switch(e){
            case -1:
                n = Mre.applicationMementos.get(this.id);
                break;
            case 0:
                n = Mre.profileMementos.get(this.id);
                break;
            case 1:
                n = Mre.workspaceMementos.get(this.storageService)?.get(this.id);
                break;
        }
        n?.reload();
    }
    static clear(e) {
        switch(e){
            case 1:
                Mre.workspaceMementos = new WeakMap;
                break;
            case 0:
                Mre.profileMementos.clear();
                break;
            case -1:
                Mre.applicationMementos.clear();
                break;
        }
    }
}, fRn.applicationMementos = new Map, fRn.profileMementos = new Map, fRn.workspaceMementos = new WeakMap, fRn.COMMON_PREFIX = "memento/", ume = fRn, acs = class {
    constructor(t, e, n, i){
        this.id = t, this.scope = e, this.target = n, this.storageService = i, this.mementoObj = this.doLoad();
    }
    doLoad() {
        try {
            return this.storageService.getObject(this.id, this.scope, {});
        } catch (t) {
            xr(`[memento]: failed to parse contents: ${t} (id: ${this.id}, scope: ${this.scope}, contents: ${this.storageService.get(this.id, this.scope)})`);
        }
        return {};
    }
    getMemento() {
        return this.mementoObj;
    }
    reload() {
        for (const t of Object.getOwnPropertyNames(this.mementoObj))delete this.mementoObj[t];
        Object.assign(this.mementoObj, this.doLoad());
    }
    save() {
        xOe(this.mementoObj) ? this.storageService.remove(this.id, this.scope) : this.storageService.store(this.id, this.mementoObj, this.scope, this.target);
    }
};

}
