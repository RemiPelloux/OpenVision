import { E } from "./tslib.es6.js";
import { GIv } from "./wTv.js";
var qIv;
export { qIv };
var __wakaru_TI0_initialized = false;
export function TI0() {
if (__wakaru_TI0_initialized) return;
__wakaru_TI0_initialized = true;
"use strict";
E(), qIv = class {
    constructor(){
        this.snapshot = new Map, this.report = [], this.scale = 1, this.listeners = new Set, this.subscribe = (t)=>(this.listeners.add(t), ()=>{
                this.listeners.delete(t);
            }), this.getSnapshot = ()=>this.snapshot;
    }
    clear() {
        this.apply([], 1);
    }
    apply(t, e) {
        this.report = t, this.scale = e;
        const n = new Map;
        for (const i of t){
            const r = i.rects.map((o)=>o ? GIv(o, e) : null), s = r.find((o)=>o !== null) ?? null;
            n.set(i.id, {
                rects: r,
                badgeRect: s ?? (i.lastKnownRect ? GIv(i.lastKnownRect, e) : null),
                detached: s === null
            });
        }
        this.snapshot = n;
        for (const i of this.listeners)i();
    }
    rescale(t) {
        t !== this.scale && this.apply(this.report, t);
    }
};

}
