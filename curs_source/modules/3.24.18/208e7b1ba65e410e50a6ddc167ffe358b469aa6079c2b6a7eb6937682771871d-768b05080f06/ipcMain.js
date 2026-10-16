import { Ve } from "./errors.js";
import { yn } from "./event.js";
import { $e, Um } from "./network.js";
import { h } from "./tslib.es6.js";
import sp from "electron";
var sF, Te;
export { Te, sF };
var __wakaru_hr_initialized = false;
export function hr() {
if (__wakaru_hr_initialized) return;
__wakaru_hr_initialized = true;
"use strict";
h(), Ve(), $e(), sF = class {
    constructor(){
        this.mapListenerToWrapper = new WeakMap;
    }
    on(e, t) {
        const n = (r, ...s)=>{
            this.validateEvent(e, r) && t(r, ...s);
        };
        return this.mapListenerToWrapper.set(t, n), sp.ipcMain.on(e, n), this;
    }
    once(e, t) {
        return sp.ipcMain.once(e, (n, ...r)=>{
            this.validateEvent(e, n) && t(n, ...r);
        }), this;
    }
    handle(e, t) {
        return sp.ipcMain.handle(e, (n, ...r)=>this.validateEvent(e, n) ? t(n, ...r) : Promise.reject(`Invalid channel '${e}' or sender for ipcMain.handle() usage.`)), this;
    }
    removeHandler(e) {
        return sp.ipcMain.removeHandler(e), this;
    }
    removeListener(e, t) {
        const n = this.mapListenerToWrapper.get(t);
        return n && (sp.ipcMain.removeListener(e, n), this.mapListenerToWrapper.delete(t)), this;
    }
    validateEvent(e, t) {
        if (!e || !e.startsWith("vscode:") && !e.startsWith("cursor:")) return yn(`Refused to handle ipcMain event for channel '${e}' because the channel is unknown.`), !1;
        const n = t.senderFrame, r = n?.url;
        if (!r || r === "about:blank") return !0;
        let s = "unknown";
        try {
            s = new URL(r).host;
        } catch  {
            return yn(`Refused to handle ipcMain event for channel '${e}' because of a malformed URL '${r}'.`), !1;
        }
        return s !== Um ? (yn(`Refused to handle ipcMain event for channel '${e}' because of a bad origin of '${s}'.`), !1) : n?.parent !== null ? (yn(`Refused to handle ipcMain event for channel '${e}' because sender of origin '${s}' is not a main frame.`), !1) : !0;
    }
}, Te = new sF;

}
