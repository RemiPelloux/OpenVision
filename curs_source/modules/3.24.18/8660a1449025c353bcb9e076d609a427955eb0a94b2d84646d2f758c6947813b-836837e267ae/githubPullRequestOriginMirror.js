import { Wew } from "./Ycg.js";
import { G6e, c_ } from "./async.cursor.js";
import { dp } from "./connect.js";
import { _me, r1l } from "./repo_pb_2.js";
import { E } from "./tslib.es6.js";
import { aie } from "./yBp.js";
var Kbf, Sbs, Ybf, Xbf, kDn;
export { Kbf, Sbs, Xbf, Ybf, kDn };
var __wakaru_Zbf_initialized = false;
export function Zbf() {
if (__wakaru_Zbf_initialized) return;
__wakaru_Zbf_initialized = true;
"use strict";
E(), dp(), _me(), c_(), Kbf = 1e4, Sbs = 300 * 1e3, Ybf = "viewer", Xbf = class {
    constructor(){
        this.completed = new Map, this.lastReadStartedAtMs = new Map, this.inflight = new Map, this.generations = new G6e;
    }
    invalidate() {
        this.completed.clear(), this.lastReadStartedAtMs.clear(), this.inflight.clear(), this.generations.clear();
    }
    getFresh(t) {
        const e = this.completed.get(t);
        return e !== void 0 && Date.now() - e.readAtMs < Sbs ? e : void 0;
    }
    nextRefreshAtMs(t) {
        const e = this.completed.get(t)?.readAtMs, n = this.lastReadStartedAtMs.get(t);
        if (!(e === void 0 && n === void 0)) return Math.max(e ?? 0, n ?? 0) + Sbs;
    }
    refreshIfStale(t, e) {
        const n = this.nextRefreshAtMs(t);
        (n === void 0 || Date.now() >= n) && this.readShared(t, e);
    }
    readShared(t, e) {
        const n = this.inflight.get(t);
        if (n !== void 0) return n;
        this.lastReadStartedAtMs.set(t, Date.now());
        const i = this.generations.capture(Ybf), r = this.fetch(t, e, i);
        return this.inflight.set(t, r), r.then(()=>{
            this.inflight.get(t) === r && this.inflight.delete(t);
        }), r;
    }
    async fetch(t, e, n) {
        try {
            const i = await aie(async (r)=>(await e.originClient()).getRepoByGithubMirror(new r1l({
                    githubNodeId: t
                }), {
                    signal: r
                }), {
                timeoutMs: Kbf
            });
            return n.isCurrent() ? (this.completed.set(t, {
                read: i,
                readAtMs: Date.now()
            }), i) : void 0;
        } catch (i) {
            n.isCurrent() && Wew(i) && this.completed.set(t, {
                read: void 0,
                readAtMs: Date.now()
            });
            return;
        }
    }
}, kDn = new Xbf;

}
