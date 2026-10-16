import { le } from "./async.js";
import { ge } from "./event.js";
import { B } from "./ipc.js";
import { j } from "./lifecycle.js";
import { En } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
function lS(e, t) {
    const n = Qp.get(e);
    if (n) throw new dS(e, n, t);
    return Qp.set(e, t), ge(()=>{
        Qp.get(e) === t && Qp.delete(e);
    });
}
var Qp, dS, uS;
export { Qp, dS, lS, uS };
var __wakaru_dG_initialized = false;
export function dG() {
if (__wakaru_dG_initialized) return;
__wakaru_dG_initialized = true;
"use strict";
h(), le(), j(), te(), Qp = new Map, dS = class extends Error {
    constructor(e, t, n){
        super(`[perf] Renderer ${e} is already being profiled by session '${t}', rejecting overlapping profiling request '${n}'`), this.webContentsId = e, this.activeSessionId = t, this.requestedSessionId = n, this.name = "RendererProfilingConflictError";
    }
}, uS = class {
    constructor(e, t, n){
        this._window = e, this._sessionId = t, this._logService = n;
    }
    async inspect(e) {
        const t = this._window.webContents.debugger, n = lS(this._window.webContents.id, this._sessionId);
        let r = !1, s = !1;
        try {
            t.attach(), r = !0, await t.sendCommand("Profiler.enable"), s = !0, await t.sendCommand("Profiler.start"), this._logService.warn("[perf] profiling STARTED", this._sessionId), await En(e);
            const i = await t.sendCommand("Profiler.stop");
            return this._logService.warn("[perf] profiling DONE", this._sessionId), i.profile;
        } finally{
            if (s) try {
                await t.sendCommand("Profiler.disable");
            } catch (i) {
                this._logService.debug("[perf] failed to disable renderer profiler during cleanup", i);
            }
            if (r && t.isAttached()) try {
                t.detach();
            } catch (i) {
                this._logService.debug("[perf] failed to detach renderer profiler during cleanup", i);
            }
            n.dispose();
        }
    }
}, uS = B([
    w(2, Z)
], uS);

}
