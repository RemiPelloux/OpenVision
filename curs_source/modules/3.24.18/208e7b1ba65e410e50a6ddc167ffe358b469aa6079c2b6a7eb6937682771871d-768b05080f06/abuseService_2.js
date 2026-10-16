import { Jp, Z7 } from "./id.js";
import { B } from "./ipc.js";
import { z7 } from "./macAddress.js";
import { Fi, ts } from "./telemetry.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { vt } from "./uuid.js";
import { networkInterfaces as DBe } from "os";
import { execSync as FBe } from "child_process";
import { platform as tA } from "process";
function OBe(e) {
    const t = e.replace(/\-/g, ":").toLowerCase();
    return !z7.has(t);
}
function LBe() {
    const e = DBe();
    for(const t in e){
        const n = e[t];
        if (n) {
            for (const { mac: r } of n)if (OBe(r)) return r;
        }
    }
    throw new Error("Unable to retrieve mac address (unexpected format)");
}
async function Y7(e) {
    try {
        const t = await import("crypto"), n = LBe();
        return t.createHash("sha256").update(n, "utf8").digest("hex");
    } catch (t) {
        e(t);
        return;
    }
}
function GBe(e) {
    switch(tA){
        case "darwin":
            return e.split("IOPlatformUUID")[1].split(`
`)[0].replace(/\=|\s+|\"/ig, "").toLowerCase();
        case "win32":
            return e.toString().split("REG_SZ")[1].replace(/\r+|\n+|\s+/ig, "").toLowerCase();
        case "linux":
            return e.toString().replace(/\r+|\n+|\s+/ig, "").toLowerCase();
        case "freebsd":
            return e.toString().replace(/\r+|\n+|\s+/ig, "").toLowerCase();
        default:
            throw new Error(`Unsupported platform: ${process.platform}`);
    }
}
async function J7(e) {
    let t = GBe(FBe(Z7[tA], {
        timeout: 5e3
    }).toString()), n;
    try {
        n = (await import("crypto")).createHash("sha256").update(t, "utf8").digest("hex");
    } catch  {
        n = vt();
    }
    return e ? t : n;
}
var Y1;
export { GBe, J7, LBe, OBe, Y1, Y7 };
var __wakaru_snt_initialized = false;
export function snt() {
if (__wakaru_snt_initialized) return;
__wakaru_snt_initialized = true;
"use strict";
h(), Jp(), ts(), Y1 = class {
    constructor(e){
        this._telemetryService = e, this._getTrueMachineId().then((t)=>this._machineId = t).catch(()=>{}), this._getTrueMacMachineId().then((t)=>this._macMachineId = t).catch(()=>{});
    }
    async getMachineId() {
        return this._machineId ?? this._telemetryService.machineId;
    }
    async getMacMachineId() {
        return this._macMachineId ?? this._telemetryService.macMachineId;
    }
    async _getTrueMachineId() {
        let e;
        try {
            e = await J7(!0);
        } catch  {
            return;
        }
        try {
            return (await import("crypto")).createHash("sha256").update(e, "utf8").digest("hex");
        } catch  {
            return;
        }
    }
    async _getTrueMacMachineId() {
        return Y7(()=>{});
    }
}, Y1 = B([
    w(0, Fi)
], Y1);

}
