import { Qe, Vn, st } from "./Iwo.js";
import { gcs } from "./Ycg.js";
import { Hn } from "./dom_2.js";
import { Mt } from "./index_197.js";
import { gkt } from "./ipa.js";
import { M0, rSn } from "./nca.js";
import { E } from "./tslib.es6.js";
import { SRn } from "./vscodeCodeLineTokenizer.js";
import { $t, Bs } from "./window.js";
import { y7 } from "./ze.js";
var eQl, S0v;
export { S0v, eQl };
var __wakaru_n10_initialized = false;
export function n10() {
if (__wakaru_n10_initialized) return;
__wakaru_n10_initialized = true;
"use strict";
E(), Mt(), Hn(), Bs(), Qe(), SRn(), eQl = class GXs extends st {
    constructor(e, n){
        super(), this.logService = n, this.tail = Promise.resolve(), this.pendingIdle = this._register(new Vn), this.lineTokenizer = gcs(e);
    }
    tokenize(e, n) {
        const i = this.tail.then(()=>this.tokenizeNow(e, n));
        return this.tail = i.then(()=>this.yieldToIdle(), ()=>this.yieldToIdle()), i;
    }
    dispose() {
        this.pendingIdle.clear(), this.pendingIdleResolve?.(), this.pendingIdleResolve = void 0, super.dispose();
    }
    yieldToIdle() {
        return new Promise((e)=>{
            this.pendingIdleResolve = e, this.pendingIdle.value = y7($t, ()=>{
                this.pendingIdle.clear(), this.pendingIdleResolve = void 0, e();
            });
        });
    }
    async tokenizeNow(e, n) {
        const i = GXs.collectTokenLineNumbers(e), r = gkt(n);
        try {
            const [s, o] = await Promise.all([
                this.tokenizeLines({
                    language: r,
                    text: e.contents.original,
                    lineNumbers: i.original
                }),
                this.tokenizeLines({
                    language: r,
                    text: e.contents.modified,
                    lineNumbers: i.modified
                })
            ]), a = new Map;
            for (const [l, c] of s)a.set(`orig:${l}`, c);
            for (const [l, c] of o)a.set(`mod:${l}`, c);
            return {
                ...e,
                lineTokens: a
            };
        } catch (s) {
            return this.logService.warn(`[DiffMaterialTokenizer] failed to tokenize ${n}`, s), e;
        }
    }
    async tokenizeLines(e) {
        const n = new Map;
        for(let i = 0; i < e.lineNumbers.length; i += GXs.MAX_LINES_PER_REQUEST){
            const r = await this.lineTokenizer({
                ...e,
                lineNumbers: e.lineNumbers.slice(i, i + GXs.MAX_LINES_PER_REQUEST)
            });
            for (const [s, o] of r)n.set(s, o);
        }
        return n;
    }
    static collectTokenLineNumbers(e) {
        const n = new Set, i = new Set;
        for (const r of rSn(e.diff.lines, 3)){
            if (M0(r)) continue;
            const s = r.originalTokenLineNumber ?? r.originalLineNumber, o = r.modifiedTokenLineNumber ?? r.modifiedLineNumber;
            r.type !== "added" && s !== void 0 && n.add(s), r.type !== "removed" && o !== void 0 && i.add(o);
        }
        return {
            original: [
                ...n
            ].sort((r, s)=>r - s),
            modified: [
                ...i
            ].sort((r, s)=>r - s)
        };
    }
}, eQl.MAX_LINES_PER_REQUEST = 512, S0v = eQl;

}
