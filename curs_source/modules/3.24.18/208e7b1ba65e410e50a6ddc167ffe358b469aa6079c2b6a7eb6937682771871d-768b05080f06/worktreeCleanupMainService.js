import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { Fn, L, on } from "./path.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { nct } from "./worktreeSizeWalk.js";
import { promises as yU } from "fs";
function Xot(e, t) {
    const n = on(e), r = on(t);
    if (n === r) return !0;
    const s = r.endsWith(Fn) ? r : `${r}${Fn}`;
    return n.startsWith(s);
}
async function Zot(e, t, n) {
    let r;
    try {
        r = on(await t.realpath(e));
    } catch (i) {
        if (tct(i)) return 0;
        r = on(e);
    }
    try {
        const i = await t.stat(r);
        if (!i.isDirectory) return i.size;
    } catch (i) {
        return n(r, i), 0;
    }
    return SU(r, new Set([
        r
    ]), r, t, n);
}
async function SU(e, t, n, r, s) {
    let i = 0, a;
    try {
        a = await r.readDirectory(e);
    } catch (o) {
        return s(e, o), 0;
    }
    for (const o of a){
        if (o.name === ".git") continue;
        const l = L(e, o.name);
        if (o.isSymbolicLink) {
            i += await ect(l, t, n, r, s);
            continue;
        }
        if (!t.has(l)) if (t.add(l), o.isDirectory) i += await SU(l, t, n, r, s);
        else try {
            i += (await r.stat(l)).size;
        } catch (d) {
            s(l, d);
        }
    }
    return i;
}
async function ect(e, t, n, r, s) {
    let i;
    try {
        i = on(await r.realpath(e));
    } catch (a) {
        return s(e, a), 0;
    }
    if (!Xot(i, n) || t.has(i)) return 0;
    t.add(i);
    try {
        const a = await r.stat(i);
        return a.isDirectory ? SU(i, t, n, r, s) : a.size;
    } catch (a) {
        return s(i, a), 0;
    }
}
function tct(e) {
    return typeof e == "object" && e !== null && "code" in e && e.code === "ENOENT";
}
var n2e, ZE;
export { SU, Xot, ZE, Zot, ect, n2e, tct };
var __wakaru_rct_initialized = false;
export function rct() {
if (__wakaru_rct_initialized) return;
__wakaru_rct_initialized = true;
"use strict";
h(), te(), nct(), n2e = {
    realpath: async (e)=>yU.realpath(e),
    stat: async (e)=>{
        const t = await yU.stat(e);
        return {
            isDirectory: t.isDirectory(),
            size: t.size
        };
    },
    readDirectory: async (e)=>(await yU.readdir(e, {
            withFileTypes: !0
        })).map((n)=>({
                name: n.name,
                isSymbolicLink: n.isSymbolicLink(),
                isDirectory: n.isDirectory()
            }))
}, ZE = class {
    constructor(e){
        this.logService = e, this.nextLeaseId = 1;
    }
    async getWorktreeSizeBytes(e) {
        let t = !1;
        return Zot(e, n2e, (r, s)=>{
            t || this.isFileNotFoundError(s) || (t = !0, this.logService.warn(`[WorktreeCleanupMainService] Unexpected error calculating size for ${r}:`, s));
        });
    }
    async tryAcquireCleanupLeaseForOwner(e, t) {
        if (this.activeLease) {
            this.logService.info(`[WorktreeCleanupMainService] Rejecting cleanup lease for owner=${e} reason="${t}" because owner=${this.activeLease.owner} leaseId=${this.activeLease.leaseId} is active`);
            return;
        }
        const n = this.nextLeaseId++;
        return this.activeLease = {
            leaseId: n,
            owner: e,
            reason: t,
            startTime: Date.now()
        }, this.logService.info(`[WorktreeCleanupMainService] Granted cleanup lease id=${n} owner=${e} reason="${t}"`), n;
    }
    async releaseCleanupLease(e) {
        if (!this.activeLease) {
            this.logService.warn(`[WorktreeCleanupMainService] Attempted to release unknown cleanup lease id=${e}`);
            return;
        }
        if (this.activeLease.leaseId !== e) {
            this.logService.warn(`[WorktreeCleanupMainService] Attempted to release cleanup lease id=${e} but active lease id=${this.activeLease.leaseId} belongs to owner=${this.activeLease.owner}`);
            return;
        }
        this.logRelease(this.activeLease, "released"), this.activeLease = void 0;
    }
    async releaseCleanupLeasesForOwner(e, t) {
        !this.activeLease || this.activeLease.owner !== e || (this.logRelease(this.activeLease, t), this.activeLease = void 0);
    }
    logRelease(e, t) {
        const n = Date.now() - e.startTime;
        this.logService.info(`[WorktreeCleanupMainService] Releasing cleanup lease id=${e.leaseId} owner=${e.owner} reason="${e.reason}" releaseReason="${t}" heldForMs=${n}`);
    }
    isFileNotFoundError(e) {
        return typeof e == "object" && e !== null && "code" in e && e.code === "ENOENT";
    }
}, ZE = B([
    w(0, Z)
], ZE);

}
