import { N, O, se } from "./event.js";
import { J, Ut, j, ve } from "./lifecycle.js";
import { ds, fC, tk } from "./storage_2.js";
import { h } from "./tslib.es6.js";
var d_e;
export { d_e };
var __wakaru_qZe_initialized = false;
export function qZe() {
if (__wakaru_qZe_initialized) return;
__wakaru_qZe_initialized = true;
"use strict";
h(), se(), j(), tk(), d_e = class extends J {
    constructor(e, t, n){
        super(), this.storageMainService = e, this.userDataProfilesService = t, this.logService = n;
        const r = this._register(new Ut);
        this._onDidChange = this._register(new N({
            onWillAddFirstListener: ()=>r.value = this.registerStorageChangeListeners(),
            onDidRemoveLastListener: ()=>r.value = void 0
        }));
    }
    registerStorageChangeListeners() {
        this.logService.debug("ProfileStorageChangesListenerChannel#registerStorageChangeListeners");
        const e = new ve;
        return e.add(O.debounce(this.storageMainService.applicationStorage.onDidChangeStorage, (t, n)=>(t ? t.push(n.key) : t = [
                n.key
            ], t), 100)((t)=>this.onDidChangeApplicationStorage(t))), e.add(O.debounce(this.storageMainService.onDidChangeProfileStorage, (t, n)=>{
            t || (t = new Map);
            let r = t.get(n.profile.id);
            return r || t.set(n.profile.id, r = {
                profile: n.profile,
                keys: [],
                storage: n.storage
            }), r.keys.push(n.key), t;
        }, 100)((t)=>this.onDidChangeProfileStorage(t))), e;
    }
    onDidChangeApplicationStorage(e) {
        const t = e.includes(ds) ? [
            this.userDataProfilesService.defaultProfile
        ] : [], n = [];
        if (e = e.filter((r)=>r !== ds), e.length) {
            const r = fC(this.storageMainService.applicationStorage.storage);
            n.push({
                profile: this.userDataProfilesService.defaultProfile,
                changes: e.map((s)=>({
                        key: s,
                        scope: 0,
                        target: r[s]
                    }))
            });
        }
        this.triggerEvents(t, n);
    }
    onDidChangeProfileStorage(e) {
        const t = [], n = new Map;
        for (const [r, s] of e.entries()){
            s.keys.includes(ds) && t.push(s.profile);
            const i = s.keys.filter((a)=>a !== ds);
            if (i.length) {
                const a = fC(s.storage.storage);
                n.set(r, {
                    profile: s.profile,
                    changes: i.map((o)=>({
                            key: o,
                            scope: 0,
                            target: a[o]
                        }))
                });
            }
        }
        this.triggerEvents(t, [
            ...n.values()
        ]);
    }
    triggerEvents(e, t) {
        (e.length || t.length) && this._onDidChange.fire({
            valueChanges: t,
            targetChanges: e
        });
    }
    listen(e, t, n) {
        switch(t){
            case "onDidChange":
                return this._onDidChange.event;
        }
        throw new Error(`[ProfileStorageChangesListenerChannel] Event not found: ${t}`);
    }
    async call(e, t) {
        throw new Error(`Call not found: ${t}`);
    }
};

}
