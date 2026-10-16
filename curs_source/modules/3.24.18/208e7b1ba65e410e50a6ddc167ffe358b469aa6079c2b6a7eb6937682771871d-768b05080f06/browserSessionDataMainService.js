import { Vn } from "./arrays.js";
import { Lfe } from "./browserViewMainService.js";
import { Ufe, f2, xfe } from "./browserViewPartition.js";
import { gn, ie } from "./pfs.js";
import { wn } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
function Ofe(e) {
    return e.startsWith(f2) && e.endsWith(Ufe);
}
var pve, hve, gve;
export { Ofe, gve, hve, pve };
var __wakaru_ant_initialized = false;
export function ant() {
if (__wakaru_ant_initialized) return;
__wakaru_ant_initialized = true;
"use strict";
h(), Vn(), gn(), xfe(), pve = [
    "backgroundFetch",
    "cache",
    "cookies",
    "downloads",
    "fileSystems",
    "indexedDB",
    "localStorage",
    "serviceWorkers",
    "webSQL"
], hve = [
    "cachestorage",
    "shadercache"
], gve = class {
    constructor(e, t){
        this.sessionProvider = e, this.partitionsPath = t;
    }
    async clearAllPartitionsData() {
        let e;
        try {
            e = await ie.readdir(this.partitionsPath);
        } catch (n) {
            if (n.code !== "ENOENT") throw n;
            e = [];
        }
        let t;
        for (const n of wn(e.map(Lfe)))try {
            await this.clearAllData(n);
        } catch (r) {
            t ??= r;
        }
        if (t) throw t;
    }
    async clearAllData(e) {
        const t = this.getSession(e), r = (await Promise.allSettled([
            t.clearData({
                dataTypes: pve,
                originMatchingMode: "origin-in-all-contexts"
            }),
            t.clearStorageData({
                storages: hve
            }),
            t.clearAuthCache()
        ])).find((s)=>s.status === "rejected");
        if (r) throw r.reason;
    }
    async clearCache(e) {
        await this.getSession(e).clearData({
            dataTypes: [
                "cache"
            ]
        });
    }
    async clearCookies(e) {
        const t = this.getSession(e);
        await t.clearData({
            dataTypes: [
                "cookies"
            ],
            originMatchingMode: "origin-in-all-contexts"
        }), await t.clearAuthCache();
    }
    getSession(e) {
        if (!Ofe(e)) throw new Error("Browser session partition must be a persisted browser partition");
        return this.sessionProvider.fromPartition(e);
    }
};

}
