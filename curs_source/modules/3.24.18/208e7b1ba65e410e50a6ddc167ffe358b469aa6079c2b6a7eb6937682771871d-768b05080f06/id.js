import { UBe } from "./macAddress.js";
import { oe } from "./platform.js";
import { fa, lc } from "./ternarySearchTree.js";
import { h } from "./tslib.es6.js";
import { Wn } from "./uuid.js";
import { platform as tA } from "process";
import { networkInterfaces as xBe } from "os";
function BBe() {
    return tA !== "win32" ? "notdefined" : process.arch === "ia32" && process.env.hasOwnProperty("PROCESSOR_ARCHITEW6432") ? "mixed" : "native";
}
var aS, Q7, Z7, eG;
export { BBe, Q7, Z7, aS, eG };
var __wakaru_Jp_initialized = false;
export function Jp() {
if (__wakaru_Jp_initialized) return;
__wakaru_Jp_initialized = true;
"use strict";
h(), lc(), Wn(), UBe(), oe(), aS = new class {
    _isVirtualMachineMacAddress(e) {
        return this._virtualMachineOUIs || (this._virtualMachineOUIs = fa.forStrings(), this._virtualMachineOUIs.set("00-50-56", !0), this._virtualMachineOUIs.set("00-0C-29", !0), this._virtualMachineOUIs.set("00-05-69", !0), this._virtualMachineOUIs.set("00-03-FF", !0), this._virtualMachineOUIs.set("00-1C-42", !0), this._virtualMachineOUIs.set("00-16-3E", !0), this._virtualMachineOUIs.set("08-00-27", !0), this._virtualMachineOUIs.set("00:50:56", !0), this._virtualMachineOUIs.set("00:0C:29", !0), this._virtualMachineOUIs.set("00:05:69", !0), this._virtualMachineOUIs.set("00:03:FF", !0), this._virtualMachineOUIs.set("00:1C:42", !0), this._virtualMachineOUIs.set("00:16:3E", !0), this._virtualMachineOUIs.set("08:00:27", !0)), !!this._virtualMachineOUIs.findSubstr(e);
    }
    value() {
        if (this._value === void 0) {
            let e = 0, t = 0;
            const n = xBe();
            for(const r in n){
                const s = n[r];
                if (s) for (const { mac: i, internal: a } of s)a || (t += 1, this._isVirtualMachineMacAddress(i.toUpperCase()) && (e += 1));
            }
            this._value = t > 0 ? e / t : 0;
        }
        return this._value;
    }
}, Q7 = {
    native: "%windir%\\System32",
    mixed: "%windir%\\sysnative\\cmd.exe /c %windir%\\System32",
    notdefined: ""
}, Z7 = {
    darwin: "ioreg -rd1 -c IOPlatformExpertDevice",
    win32: `${Q7[BBe()]}\\REG.exe QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid`,
    linux: "( cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null || hostname ) | head -n 1 || :",
    freebsd: "kenv -q smbios.system.uuid || sysctl -n kern.hostuuid"
}, eG = "Software\\Microsoft\\SQMClient";

}
