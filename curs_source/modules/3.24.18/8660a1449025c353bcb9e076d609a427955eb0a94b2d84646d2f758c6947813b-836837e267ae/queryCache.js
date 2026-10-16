import { qhf, xxl } from "./Ycg.js";
import { L$, qIt } from "./notifyManager.js";
import { apf, lpf } from "./query.js";
import { NMn, wYt } from "./subscribable.js";
import { E } from "./tslib.es6.js";
import { ZMe } from "./utils_33.js";
var cpf;
export { cpf };
var __wakaru__qk_initialized = false;
export function _qk() {
if (__wakaru__qk_initialized) return;
__wakaru__qk_initialized = true;
E(), ZMe(), lpf(), qIt(), NMn(), cpf = class extends wYt {
    constructor(t = {}){
        super(), this.config = t, this.#e = new Map;
    }
    #e;
    build(t, e, n) {
        const i = e.queryKey, r = e.queryHash ?? xxl(i, e);
        let s = this.get(r);
        return s || (s = new apf({
            client: t,
            queryKey: i,
            queryHash: r,
            options: t.defaultQueryOptions(e),
            state: n,
            defaultOptions: t.getQueryDefaults(i)
        }), this.add(s)), s;
    }
    add(t) {
        this.#e.has(t.queryHash) || (this.#e.set(t.queryHash, t), this.notify({
            type: "added",
            query: t
        }));
    }
    remove(t) {
        const e = this.#e.get(t.queryHash);
        e && (t.destroy(), e === t && this.#e.delete(t.queryHash), this.notify({
            type: "removed",
            query: t
        }));
    }
    clear() {
        L$.batch(()=>{
            this.getAll().forEach((t)=>{
                this.remove(t);
            });
        });
    }
    get(t) {
        return this.#e.get(t);
    }
    getAll() {
        return [
            ...this.#e.values()
        ];
    }
    find(t) {
        const e = {
            exact: !0,
            ...t
        };
        return this.getAll().find((n)=>qhf(e, n));
    }
    findAll(t = {}) {
        const e = this.getAll();
        return Object.keys(t).length > 0 ? e.filter((n)=>qhf(t, n)) : e;
    }
    notify(t) {
        L$.batch(()=>{
            this.listeners.forEach((e)=>{
                e(t);
            });
        });
    }
    onFocus() {
        L$.batch(()=>{
            this.getAll().forEach((t)=>{
                t.onFocus();
            });
        });
    }
    onOnline() {
        L$.batch(()=>{
            this.getAll().forEach((t)=>{
                t.onOnline();
            });
        });
    }
};

}
