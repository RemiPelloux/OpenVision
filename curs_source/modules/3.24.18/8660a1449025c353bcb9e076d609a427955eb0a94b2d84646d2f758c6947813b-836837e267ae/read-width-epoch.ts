import { KHk } from "./Ycg.js";
import { ZIl } from "./environment.ts";
import { E } from "./tslib.es6.js";
var shf;
export { shf };
var __wakaru_vGk_initialized = false;
export function vGk() {
if (__wakaru_vGk_initialized) return;
__wakaru_vGk_initialized = true;
"use strict";
E(), ZIl(), shf = class {
    constructor(t){
        this.host = t, this.retained = [];
    }
    forHost(t, e) {
        return this.host = t.epoch, t.readContentWidthPx === void 0 && (this.readWidthPx = void 0), this.readWidthPx === void 0 ? t : {
            ...t,
            epoch: this.at(e.contentWidthPx)
        };
    }
    observe(t) {
        this.readWidthPx = t;
    }
    current() {
        return this.readWidthPx === void 0 ? void 0 : this.at(this.readWidthPx);
    }
    retain(t) {
        this.retained = t;
    }
    keepOutsideBand(t) {
        const { firstIndex: e, lastIndex: n } = t.window;
        return this.retained = this.retained.filter((i)=>{
            const r = t.geometry.indexOf(i);
            return r !== void 0 && (r < e || r > n);
        }), this.retained;
    }
    release() {
        const t = this.retained.length > 0;
        return this.retained = [], t;
    }
    withRetainedRows(t) {
        return this.retained.length === 0 ? t : {
            ...t,
            forcedRowIds: [
                ...t.forcedRowIds,
                ...this.retained
            ]
        };
    }
    at(t) {
        const e = this.composed;
        if (e !== void 0 && e.host.id === this.host.id && e.epoch.contentWidthPx === t) return e.epoch;
        const n = KHk(this.host, t);
        return this.composed = {
            host: this.host,
            epoch: n
        }, n;
    }
};

}
