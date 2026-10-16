import { IA } from "./agentHarnessErrno.js";
import { le, oT } from "./async.js";
import { Ve } from "./errors.js";
import { We } from "./request_2.js";
import { h } from "./tslib.es6.js";
import sn from "fs";
function iV(e) {
    return e instanceof Error && "code" in e && typeof e.code == "string" ? e.code : void 0;
}
function _n(e, t) {
    return iV(e) === t;
}
var Jve, Wu, Xve, Qve, wf, Zve;
export { Jve, Qve, Wu, Xve, Zve, _n, iV, wf };
var __wakaru_jrt_initialized = false;
export function jrt() {
if (__wakaru_jrt_initialized) return;
__wakaru_jrt_initialized = true;
"use strict";
h(), le(), Ve(), IA(), Jve = ".lock", Wu = 30 * 6e4, Xve = 6e4, Qve = /^([1-9]\d*)-[0-9a-f]{16}$/, wf = class extends Error {
    constructor(e, t = "was taken over by another agent host updater while this poll held it"){
        super(`the lock at ${e} ${t}`), this.name = "LockLost";
    }
}, Zve = class {
    constructor(e, t){
        this.entry = e, this.log = t, this.heartbeat = new oT, this.heartbeat.cancelAndSet(()=>this.beat(), Xve);
    }
    beat() {
        try {
            if (this.ageMs() > Wu || !this.stillHeld()) {
                this.heartbeat.cancel();
                return;
            }
            this.refresh();
        } catch (e) {
            this.log.warn(`could not refresh the lock at ${this.entry.lockDir}: ${We(e)}`);
        }
    }
    assertHeld() {
        let e;
        try {
            e = this.ageMs(), e <= Wu && this.refresh();
        } catch (t) {
            throw new wf(this.entry.lockDir, `could not be refreshed (${We(t)}), and another agent host updater may take it over`);
        }
        if (e > Wu) throw this.heartbeat.cancel(), new wf(this.entry.lockDir, `was not refreshed for ${Math.round(e / 6e4)} minutes while this poll held it, long enough for another agent host updater to take it over`);
        if (!this.stillHeld()) throw this.heartbeat.cancel(), new wf(this.entry.lockDir);
    }
    ageMs() {
        return Date.now() - sn.fstatSync(this.entry.fd).mtimeMs;
    }
    stillHeld() {
        return sn.existsSync(this.entry.entryPath);
    }
    refresh() {
        const e = new Date;
        sn.futimesSync(this.entry.fd, e, e);
    }
    release() {
        this.heartbeat.dispose(), sn.closeSync(this.entry.fd);
        try {
            sn.unlinkSync(this.entry.entryPath);
        } catch (e) {
            _n(e, "ENOENT") || this.log.warn(`could not release the lock at ${this.entry.lockDir}: ${We(e)}`);
        }
    }
};

}
