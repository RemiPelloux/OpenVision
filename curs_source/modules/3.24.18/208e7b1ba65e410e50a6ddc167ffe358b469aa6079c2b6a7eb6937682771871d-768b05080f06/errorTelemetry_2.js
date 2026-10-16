import { Kst, WTe } from "./errorTelemetry.js";
import { Ve, wm } from "./errors.js";
import { yn } from "./event.js";
import { B } from "./ipc.js";
import { Fi, ts } from "./telemetry.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
function v4(e) {
    wm.setUnexpectedErrorHandler(e);
}
function nUe(e) {
    if (!e || typeof e != "object") return !1;
    const t = e;
    return t.code === "EPIPE" && t.syscall?.toUpperCase() === "WRITE";
}
var lE;
export { lE, nUe, v4 };
var __wakaru_zst_initialized = false;
export function zst() {
if (__wakaru_zst_initialized) return;
__wakaru_zst_initialized = true;
"use strict";
h(), Ve(), Kst(), ts(), lE = class extends WTe {
    constructor(e, t){
        super(t), this.logService = e;
    }
    installErrorListeners() {
        v4((e)=>this.onUnexpectedError(e)), process.on("uncaughtException", (e)=>{
            nUe(e) || yn(e);
        }), process.on("unhandledRejection", (e)=>yn(e));
    }
    onUnexpectedError(e) {
        this.logService.error(`[uncaught exception in main]: ${e}`, e);
    }
}, lE = B([
    w(1, Fi)
], lE);

}
