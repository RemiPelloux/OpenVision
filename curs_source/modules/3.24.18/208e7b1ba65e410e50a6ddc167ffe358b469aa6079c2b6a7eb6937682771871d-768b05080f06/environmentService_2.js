import { X4e, yt } from "./environmentService.js";
import { h } from "./tslib.es6.js";
import { Ob, Ux } from "./userDataPath.js";
import * as Ga from "path";
import * as Lx from "os";
import { homedir as Q4e } from "os";
import { tmpdir as Z4e } from "os";
function Db(e, t) {
    const n = ULe(e, t), r = [
        n
    ];
    return Ga.isAbsolute(n) || r.unshift(Ux), Ga.resolve(...r);
}
function ULe(e, t) {
    process.env.VSCODE_DEV && (t = "code-oss-dev");
    const n = process.env.VSCODE_PORTABLE;
    if (n) return Ga.join(n, "user-data");
    let r = process.env.VSCODE_APPDATA;
    if (r) return Ga.join(r, t);
    const s = e["user-data-dir"];
    if (s) return s;
    switch(process.platform){
        case "win32":
            if (r = process.env.APPDATA, !r) {
                const i = process.env.USERPROFILE;
                if (typeof i != "string") throw new Error("Windows: Unexpected undefined %USERPROFILE% environment variable");
                r = Ga.join(i, "AppData", "Roaming");
            }
            break;
        case "darwin":
            r = Ga.join(Lx.homedir(), "Library", "Application Support");
            break;
        case "linux":
            r = process.env.XDG_CONFIG_HOME || Ga.join(Lx.homedir(), ".config");
            break;
        default:
            throw new Error("Platform not supported");
    }
    return Ga.join(r, t);
}
var UF;
export { Db, UF, ULe };
var __wakaru_C0_initialized = false;
export function C0() {
if (__wakaru_C0_initialized) return;
__wakaru_C0_initialized = true;
"use strict";
h(), X4e(), Ob(), UF = class extends yt {
    constructor(e, t){
        super(e, {
            homeDir: Q4e(),
            tmpDir: Z4e(),
            userDataDir: Db(e, t.nameShort)
        }, t);
    }
};

}
