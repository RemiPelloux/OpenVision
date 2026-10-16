import { Di, _r, xa } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var n6t, omr, fdn, ED, Bvt, amr;
export { Bvt, ED, amr, fdn, n6t, omr };
var __wakaru_nY_initialized = false;
export function nY() {
if (__wakaru_nY_initialized) return;
__wakaru_nY_initialized = true;
"use strict";
if (E(), Di(), omr = globalThis.vscode, typeof omr < "u" && typeof omr.process < "u") {
    const t = omr.process;
    n6t = {
        get platform () {
            return t.platform;
        },
        get arch () {
            return t.arch;
        },
        get env () {
            return t.env;
        },
        cwd () {
            return t.cwd();
        }
    };
} else typeof process < "u" && typeof process?.versions?.node == "string" ? n6t = {
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
} : n6t = {
    get platform () {
        return xa ? "win32" : _r ? "darwin" : "linux";
    },
    get arch () {},
    get env () {
        return {};
    },
    cwd () {
        return "/";
    }
};
fdn = n6t.cwd, ED = n6t.env, Bvt = n6t.platform, amr = n6t.arch;

}
