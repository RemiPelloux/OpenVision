import { Rlv } from "./Asv.js";
import { Qe, Vn, st } from "./Iwo.js";
import { vut } from "./design-mode-picker-ipc.js";
import { Hn, Ix } from "./dom_2.js";
import { E } from "./tslib.es6.js";
var OIv;
export { OIv };
var __wakaru_bI0_initialized = false;
export function bI0() {
if (__wakaru_bI0_initialized) return;
__wakaru_bI0_initialized = true;
"use strict";
E(), Hn(), Qe(), vut(), OIv = class extends st {
    constructor(t){
        super(), this.getManager = t, this.pendingHover = null, this.pendingScrolls = [], this.scheduled = this._register(new Vn);
    }
    scheduleHover(t, e, n) {
        this.pendingHover = {
            x: e,
            y: n
        }, this.ensureScheduled(t);
    }
    scheduleScroll(t, e, n, i, r) {
        this.pendingScrolls.push({
            x: e,
            y: n,
            deltaX: i,
            deltaY: r
        }), this.ensureScheduled(t);
    }
    cancelPendingHover() {
        this.pendingHover = null;
    }
    cancelPendingScrolls() {
        this.pendingScrolls = [];
    }
    flushPendingScroll() {
        const t = this.takePendingScrollMessages();
        t.length > 0 && this.send(t);
    }
    takePendingScrollMessages() {
        const t = this.pendingScrolls;
        return this.pendingScrolls = [], t.map((e)=>({
                type: "scroll-by-at",
                ...e
            }));
    }
    ensureScheduled(t) {
        this.scheduled.value || (this.scheduled.value = Ix(t, ()=>{
            this.scheduled.clear(), this.flushAll();
        }));
    }
    flushAll() {
        const t = this.takePendingScrollMessages();
        this.pendingHover && (t.push({
            type: "hover-at",
            ...this.pendingHover
        }), this.pendingHover = null), t.length > 0 && this.send(t);
    }
    send(t) {
        const e = this.getManager();
        e && Rlv(e, t).catch(()=>{});
    }
    dispose() {
        this.pendingHover = null, this.pendingScrolls = [], super.dispose();
    }
};

}
