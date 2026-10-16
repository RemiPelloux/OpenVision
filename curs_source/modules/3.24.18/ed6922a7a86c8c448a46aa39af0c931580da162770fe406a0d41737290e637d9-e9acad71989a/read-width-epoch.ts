import { cLo } from "./environment.ts";
import { x } from "./tslib.es6.js";
function A7h(e) {
    return JSON.stringify([
        e.schemaVersion,
        e.contentWidthPx,
        e.typography,
        e.zoomFactor,
        e.dprBucket
    ]);
}
function Xg_(e) {
    let t = 3735928559, n = 1103547991;
    for(let i = 0; i < e.length; i++){
        const r = e.charCodeAt(i);
        t = Math.imul(t ^ r, 2654435761), n = Math.imul(n ^ r, 1597334677);
    }
    return t = Math.imul(t ^ t >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(t ^ t >>> 13, 3266489909), (n >>> 0).toString(36) + "-" + (t >>> 0).toString(36);
}
function Zg_(e) {
    return `${e.schemaVersion}:${e.contentWidthPx}:${e.zoomFactor}:${e.dprBucket}:${Xg_(A7h(e))}`;
}
function Brr(e) {
    return {
        ...e,
        id: Zg_(e)
    };
}
function Qg_(e, t) {
    return Brr({
        contentWidthPx: t,
        typography: e.typography,
        zoomFactor: e.zoomFactor,
        dprBucket: e.dprBucket,
        schemaVersion: e.schemaVersion
    });
}
var M$h;
export { A7h, Brr, M$h, Qg_, Xg_, Zg_ };
var __wakaru_wv__initialized = false;
export function wv_() {
if (__wakaru_wv__initialized) return;
__wakaru_wv__initialized = true;
"use strict";
x(), cLo(), M$h = class {
    constructor(e){
        this.host = e, this.retained = [];
    }
    forHost(e, t) {
        return this.host = e.epoch, e.readContentWidthPx === void 0 && (this.readWidthPx = void 0), this.readWidthPx === void 0 ? e : {
            ...e,
            epoch: this.at(t.contentWidthPx)
        };
    }
    observe(e) {
        this.readWidthPx = e;
    }
    current() {
        return this.readWidthPx === void 0 ? void 0 : this.at(this.readWidthPx);
    }
    retain(e) {
        this.retained = e;
    }
    keepOutsideBand(e) {
        const { firstIndex: t, lastIndex: n } = e.window;
        return this.retained = this.retained.filter((i)=>{
            const r = e.geometry.indexOf(i);
            return r !== void 0 && (r < t || r > n);
        }), this.retained;
    }
    release() {
        const e = this.retained.length > 0;
        return this.retained = [], e;
    }
    withRetainedRows(e) {
        return this.retained.length === 0 ? e : {
            ...e,
            forcedRowIds: [
                ...e.forcedRowIds,
                ...this.retained
            ]
        };
    }
    at(e) {
        const t = this.composed;
        if (t !== void 0 && t.host.id === this.host.id && t.epoch.contentWidthPx === e) return t.epoch;
        const n = Qg_(this.host, e);
        return this.composed = {
            host: this.host,
            epoch: n
        }, n;
    }
};

}
