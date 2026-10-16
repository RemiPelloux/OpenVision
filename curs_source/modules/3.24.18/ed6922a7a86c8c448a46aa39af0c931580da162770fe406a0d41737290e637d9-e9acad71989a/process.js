import { Ai, Oo, jn } from "./HVr.js";
import { x } from "./tslib.es6.js";
var rht, cmi, fNt, oR, Cqe, lmi;
export { Cqe, cmi, fNt, lmi, oR, rht };
var __wakaru_QH_initialized = false;
export function QH() {
if (__wakaru_QH_initialized) return;
__wakaru_QH_initialized = true;
"use strict";
if (x(), jn(), cmi = globalThis.vscode, typeof cmi < "u" && typeof cmi.process < "u") {
    const e = cmi.process;
    rht = {
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
} else typeof process < "u" && typeof process?.versions?.node == "string" ? rht = {
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
} : rht = {
    get platform () {
        return Oo ? "win32" : Ai ? "darwin" : "linux";
    },
    get arch () {},
    get env () {
        return {};
    },
    cwd () {
        return "/";
    }
};
fNt = rht.cwd, oR = rht.env, Cqe = rht.platform, lmi = rht.arch;

}
