import { yS } from "./externalTerminalService.js";
import { ee, oe, q } from "./platform.js";
import { ah } from "./processes_2.js";
import { ch, oh } from "./shellEnv.js";
import { h } from "./tslib.es6.js";
import * as No from "path";
import * as Tnt from "fs";
var Tve;
export { Tve };
var __wakaru_knt_initialized = false;
export function knt() {
if (__wakaru_knt_initialized) return;
__wakaru_knt_initialized = true;
"use strict";
h(), ch(), ah(), oe(), Tve = class {
    constructor(e, t, n){
        this.configurationService = e, this.logService = t, this.args = n;
    }
    async checkExecutableInPath(e, t, n) {
        try {
            const r = await this.getShellEnvironment(), s = this.getCwd(t, r), i = this.computeSearchPaths(r, n);
            return await yS(e, s, i, r);
        } catch (r) {
            this.logService.error("PathInspectionMainService: Failed to resolve executable", r);
            return;
        }
    }
    computeSearchPaths(e, t) {
        if (!t || t.length === 0) return;
        const r = (e.PATH || "").split(No.delimiter).filter((a)=>a.length > 0), s = new Set(r), i = t.filter((a)=>!s.has(a));
        if (i.length !== 0) return [
            ...i,
            ...r
        ];
    }
    async getShellEnvironment() {
        return this.shellEnvPromise || (this.shellEnvPromise = (async ()=>{
            try {
                const e = await oh(this.configurationService, this.logService, this.args, process.env);
                return {
                    ...process.env,
                    ...e
                };
            } catch (e) {
                return this.logService.error("PathInspectionMainService: Failed to resolve shell environment", e), {
                    ...process.env
                };
            }
        })()), this.shellEnvPromise;
    }
    getCwd(e, t) {
        return e && No.isAbsolute(e) ? e : t.PWD || process.cwd();
    }
    async checkApplicationExists(e) {
        try {
            const t = this.getApplicationPaths(e);
            for (const n of t)if (Tnt.existsSync(n)) return !0;
            return !1;
        } catch (t) {
            return this.logService.error("PathInspectionMainService: Failed to check application existence", t), !1;
        }
    }
    getApplicationPaths(e) {
        if (q) {
            const t = [
                `/Applications/${e}.app`
            ], n = process.env.HOME;
            return n && t.push(No.join(n, "Applications", `${e}.app`)), t;
        }
        if (ee) {
            const t = [], n = process.env.ProgramFiles, r = process.env["ProgramFiles(x86)"], s = process.env.LOCALAPPDATA;
            return n && t.push(No.join(n, e)), r && t.push(No.join(r, e)), s && (t.push(No.join(s, e)), t.push(No.join(s, "Programs", e))), t;
        }
        return [
            No.join("/opt", e)
        ];
    }
};

}
