import { V, X, xe } from "./platform.js";
import { w } from "./tslib.es6.js";
var Ve, Ht, rt, Kt, ei, ha;
export { Ht, Kt, Ve, ei, ha, rt };
var __wakaru_Hr_initialized = false;
export function Hr() {
if (__wakaru_Hr_initialized) return;
__wakaru_Hr_initialized = true;
"use strict";
if (w(), X(), Ht = globalThis.vscode, typeof Ht < "u" && typeof Ht.process < "u") {
    const e = Ht.process;
    Ve = {
        get platform () {
            return e.platform;
        },
        get arch () {
            return e.arch;
        },
        get env () {
            return e.env;
        },
        cwd () {
            return e.cwd();
        }
    };
} else typeof process < "u" && typeof process?.versions?.node == "string" ? Ve = {
    get platform () {
        return process.platform;
    },
    get arch () {
        return process.arch;
    },
    get env () {
        return process.env;
    },
    cwd () {
        return process.env.VSCODE_CWD || process.cwd();
    }
} : Ve = {
    get platform () {
        return V ? "win32" : xe ? "darwin" : "linux";
    },
    get arch () {},
    get env () {
        return {};
    },
    cwd () {
        return "/";
    }
};
rt = Ve.cwd, Kt = Ve.env, ei = Ve.platform, ha = Ve.arch;

}
