import { sc } from "./decorators.js";
import { Fr, si } from "./environment.js";
import { C0, UF } from "./environmentService_2.js";
import { ne } from "./instantiation.js";
import { B, Ue } from "./ipc.js";
import { ST, f0, zl } from "./ipc.net_2.js";
import { Ce, L } from "./path.js";
import { Fe, Ko, oe } from "./platform.js";
import { h } from "./tslib.es6.js";
import { createHash as g4e } from "crypto";
function k4e(e, t, n) {
    const s = g4e("sha256").update(e).digest("hex").substr(0, 8);
    if (process.platform === "win32") return `\\\\.\\pipe\\${s}-${n}-${t}-sock`;
    const i = n.substr(0, 4), a = t.substr(0, 6);
    let o;
    return process.platform !== "darwin" && zl && !process.env.VSCODE_PORTABLE ? o = L(zl, `vscode-${s}-${i}-${a}.sock`) : o = L(e, `${i}-${a}.sock`), S4e(o), o;
}
function S4e(e) {
    const t = f0[Ko];
    typeof t == "number" && e.length >= t && console.warn(`WARNING: IPC handle "${e}" is longer than ${t} chars, try a shorter --user-data-dir`);
}
var qe, Pi;
export { Pi, S4e, k4e, qe };
var __wakaru_Ye_initialized = false;
export function Ye() {
if (__wakaru_Ye_initialized) return;
__wakaru_Ye_initialized = true;
"use strict";
h(), sc(), Ce(), oe(), ST(), Fr(), C0(), ne(), qe = si, Pi = class extends UF {
    constructor(){
        super(...arguments), this._snapEnv = {}, this._snapEnvUnsetDepth = 0;
    }
    get backupHome() {
        return L(this.userDataPath, "Backups");
    }
    get mainIPCHandle() {
        return k4e(this.userDataPath, "main", this.productService.version);
    }
    get mainLockfile() {
        return L(this.userDataPath, "code.lock");
    }
    get disableUpdates() {
        return !!this.args["disable-updates"];
    }
    get isGlass() {
        return !!this.args.glass;
    }
    get crossOriginIsolated() {
        return !!this.args["enable-coi"];
    }
    get codeCachePath() {
        return process.env.VSCODE_CODE_CACHE_PATH || void 0;
    }
    get useCodeCache() {
        return !!this.codeCachePath;
    }
    unsetSnapExportedVariables() {
        if (Fe && !(++this._snapEnvUnsetDepth > 1)) {
            for(const e in process.env)if (e.endsWith("_VSCODE_SNAP_ORIG")) {
                const t = e.slice(0, -17);
                if (this._snapEnv[t]) continue;
                process.env[t] && (this._snapEnv[t] = process.env[t]), process.env[e] ? process.env[t] = process.env[e] : delete process.env[t];
            }
        }
    }
    restoreSnapExportedVariables() {
        if (Fe && !(this._snapEnvUnsetDepth === 0 || --this._snapEnvUnsetDepth > 0)) for(const e in this._snapEnv)process.env[e] = this._snapEnv[e], delete this._snapEnv[e];
    }
}, B([
    Ue
], Pi.prototype, "backupHome", null), B([
    Ue
], Pi.prototype, "mainIPCHandle", null), B([
    Ue
], Pi.prototype, "mainLockfile", null), B([
    Ue
], Pi.prototype, "disableUpdates", null), B([
    Ue
], Pi.prototype, "isGlass", null), B([
    Ue
], Pi.prototype, "crossOriginIsolated", null), B([
    Ue
], Pi.prototype, "codeCachePath", null), B([
    Ue
], Pi.prototype, "useCodeCache", null);

}
