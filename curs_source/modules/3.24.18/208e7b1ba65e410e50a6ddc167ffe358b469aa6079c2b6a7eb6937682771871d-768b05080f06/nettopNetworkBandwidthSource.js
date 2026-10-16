import { h } from "./tslib.es6.js";
import { execFile as lit } from "child_process";
var KTe, zTe, YTe, JTe;
export { JTe, KTe, YTe, zTe };
var __wakaru_dit_initialized = false;
export function dit() {
if (__wakaru_dit_initialized) return;
__wakaru_dit_initialized = true;
"use strict";
h(), KTe = "/usr/bin/nettop", zTe = 12e3, YTe = 8 * 1024 * 1024, JTe = class {
    constructor(e){
        this.logService = e, this.warnedFailure = !1;
    }
    async sampleCumulativeBytes(e) {
        if (process.platform !== "darwin") return new Map;
        let t;
        try {
            t = await this.runNettop();
        } catch (n) {
            return this.warnedFailure || (this.warnedFailure = !0, this.logService.warn("[NettopNetworkBandwidthSource] nettop unavailable; network bandwidth will be omitted:", n)), new Map;
        }
        return this.parse(t);
    }
    dispose() {}
    runNettop() {
        return new Promise((e, t)=>{
            lit(KTe, [
                "-P",
                "-x",
                "-L",
                "1",
                "-J",
                "bytes_in,bytes_out,re-tx"
            ], {
                timeout: zTe,
                maxBuffer: YTe,
                encoding: "utf8"
            }, (n, r)=>{
                if (n) {
                    t(n);
                    return;
                }
                e(r);
            });
        });
    }
    parse(e) {
        const t = new Map, n = e.split(`
`).filter((o)=>o.trim().length > 0);
        if (n.length < 2) return t;
        const r = n[0].split(",").map((o)=>o.trim()), s = r.indexOf("bytes_in"), i = r.indexOf("bytes_out"), a = r.indexOf("re-tx");
        if (s === -1 || i === -1) return t;
        for(let o = 1; o < n.length; o++){
            const l = n[o].split(","), d = this.extractPid(l);
            if (d === void 0) continue;
            const u = this.parseNumber(l[s]), m = this.parseNumber(l[i]), f = a === -1 ? 0 : this.parseNumber(l[a]);
            if (u === void 0 || m === void 0) continue;
            const v = t.get(d);
            t.set(d, {
                rxBytes: (v?.rxBytes ?? 0) + u,
                txBytes: (v?.txBytes ?? 0) + m,
                reTxBytes: (v?.reTxBytes ?? 0) + (f ?? 0)
            });
        }
        return t;
    }
    extractPid(e) {
        for (const t of e){
            const n = /\.(\d+)$/.exec(t.trim());
            if (n) {
                const r = Number(n[1]);
                if (Number.isInteger(r) && r > 0) return r;
            }
        }
    }
    parseNumber(e) {
        if (e === void 0) return;
        const t = Number(e.trim());
        return Number.isFinite(t) ? t : void 0;
    }
};

}
