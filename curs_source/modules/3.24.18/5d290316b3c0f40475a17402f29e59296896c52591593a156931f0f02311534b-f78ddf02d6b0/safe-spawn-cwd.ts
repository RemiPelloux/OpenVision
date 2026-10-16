import { h } from "./tslib.es6.js";
import { readFileSync as $5 } from "node:fs";
function ac(e) {
    return Buffer.from(Buffer.concat(e));
}
function B5() {
    try {
        return $5(fp, "utf8");
    } catch  {
        return;
    }
}
var lc, fp, pp, uc, Xn, Wr, dc, Ri, Ti, hc, gp, mp, fc;
export { B5, Ri, Ti, Wr, Xn, ac, dc, fc, fp, gp, hc, lc, mp, pp, uc };
var __wakaru_vp_initialized = false;
export function vp() {
if (__wakaru_vp_initialized) return;
__wakaru_vp_initialized = true;
"use strict";
h(), lc = "/cursor/stores", fp = "/proc/self/mountinfo", pp = "CURSOR_SPAWN_CWD_HOP", uc = "cursor-fuse-cwd", Xn = 79, Wr = "cursor-fuse-cwd:cd", dc = Buffer.from(Wr), Ri = 32, Ti = class {
    constructor(){
        this.held = Buffer.alloc(0), this.released = !1, this.seen = 0, this.prefix = Buffer.alloc(0);
    }
    get bytes() {
        return this.seen;
    }
    get stdoutPrefix() {
        return this.prefix;
    }
    get diverged() {
        return this.released;
    }
    note(e) {
        const t = Buffer.from(e);
        if (this.seen += t.length, this.prefix.length < Ri) {
            const n = Math.min(t.length, Ri - this.prefix.length);
            this.prefix = ac([
                this.prefix,
                t.subarray(0, n)
            ]);
        }
        if (this.released) return t;
        const r = ac([
            this.held,
            t
        ]);
        if (r.length <= dc.length && dc.subarray(0, r.length).equals(r)) {
            this.held = r;
            return;
        }
        return this.released = !0, this.held = Buffer.alloc(0), r;
    }
    takeHeld() {
        if (this.held.length === 0) {
            this.released = !0;
            return;
        }
        const e = this.held;
        return this.held = Buffer.alloc(0), this.released = !0, e;
    }
}, hc = `cd "$1" || { printf %s '${Wr}'; exit ${Xn}; }; shift; exec "$@"`, gp = B5, mp = "exec_daemon.spawn.cwd_hop", fc = "exec_daemon.spawn.cwd_hop_cd_failed";

}
