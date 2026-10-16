import { Bvs, Cme, zhf } from "./Ycg.js";
import { dpf, hpf } from "./mutation.js";
import { L$, qIt } from "./notifyManager.js";
import { NMn, wYt } from "./subscribable.js";
import { E } from "./tslib.es6.js";
import { ZMe } from "./utils_33.js";
var ppf;
export { ppf };
var __wakaru_bqk_initialized = false;
export function bqk() {
if (__wakaru_bqk_initialized) return;
__wakaru_bqk_initialized = true;
E(), qIt(), hpf(), ZMe(), NMn(), ppf = class extends wYt {
    constructor(t = {}){
        super(), this.config = t, this.#e = new Set, this.#t = new Map, this.#i = 0;
    }
    #e;
    #t;
    #i;
    build(t, e, n) {
        const i = new dpf({
            mutationCache: this,
            mutationId: ++this.#i,
            options: t.defaultMutationOptions(e),
            state: n
        });
        return this.add(i), i;
    }
    add(t) {
        this.#e.add(t);
        const e = Bvs(t);
        if (typeof e == "string") {
            const n = this.#t.get(e);
            n ? n.push(t) : this.#t.set(e, [
                t
            ]);
        }
        this.notify({
            type: "added",
            mutation: t
        });
    }
    remove(t) {
        if (this.#e.delete(t)) {
            const e = Bvs(t);
            if (typeof e == "string") {
                const n = this.#t.get(e);
                if (n) if (n.length > 1) {
                    const i = n.indexOf(t);
                    i !== -1 && n.splice(i, 1);
                } else n[0] === t && this.#t.delete(e);
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        });
    }
    canRun(t) {
        const e = Bvs(t);
        if (typeof e == "string") {
            const i = this.#t.get(e)?.find((r)=>r.state.status === "pending");
            return !i || i === t;
        } else return !0;
    }
    runNext(t) {
        const e = Bvs(t);
        return typeof e == "string" ? this.#t.get(e)?.find((i)=>i !== t && i.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve();
    }
    clear() {
        L$.batch(()=>{
            this.#e.forEach((t)=>{
                this.notify({
                    type: "removed",
                    mutation: t
                });
            }), this.#e.clear(), this.#t.clear();
        });
    }
    getAll() {
        return Array.from(this.#e);
    }
    find(t) {
        const e = {
            exact: !0,
            ...t
        };
        return this.getAll().find((n)=>zhf(e, n));
    }
    findAll(t = {}) {
        return this.getAll().filter((e)=>zhf(t, e));
    }
    notify(t) {
        L$.batch(()=>{
            this.listeners.forEach((e)=>{
                e(t);
            });
        });
    }
    resumePausedMutations() {
        const t = this.getAll().filter((e)=>e.state.isPaused);
        return L$.batch(()=>Promise.all(t.map((e)=>e.continue().catch(Cme))));
    }
};

}
