import { Ct, bt } from "./HVr.js";
import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { Kp, Us } from "./severity_2.js";
import { x } from "./tslib.es6.js";
var pi, di, wy, gle, Ok, Hfi, hLc;
export { Hfi, Ok, di, gle, hLc, pi, wy };
var __wakaru_ji_initialized = false;
export function ji() {
if (__wakaru_ji_initialized) return;
__wakaru_ji_initialized = true;
"use strict";
x(), bt(), Kp(), Ze(), pi = Us, di = vn("notificationService"), wy = ((e)=>(e[e.DEFAULT = 0] = "DEFAULT", e[e.OPTIONAL = 1] = "OPTIONAL", e[e.SILENT = 2] = "SILENT", e[e.URGENT = 3] = "URGENT", e))(wy || {}), gle = ((e)=>(e[e.WORKSPACE = 0] = "WORKSPACE", e[e.PROFILE = 1] = "PROFILE", e[e.APPLICATION = 2] = "APPLICATION", e))(gle || {}), Ok = ((e)=>(e[e.OFF = 0] = "OFF", e[e.ERROR = 1] = "ERROR", e))(Ok || {}), Hfi = class {
    constructor(){
        this.progress = new hLc, this.onDidClose = Ct.None, this.onDidChangeVisibility = Ct.None;
    }
    updateSeverity(e) {}
    updateMessage(e) {}
    updateActions(e) {}
    close() {}
}, hLc = class {
    infinite() {}
    done() {}
    total(e) {}
    worked(e) {}
};

}
