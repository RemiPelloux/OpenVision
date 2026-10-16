import { ee, oe, q } from "./platform.js";
import { h } from "./tslib.es6.js";
var Jo, $v, Ei, Is, gR, n5;
export { $v, Ei, Is, Jo, gR, n5 };
var __wakaru_bi_initialized = false;
export function bi() {
if (__wakaru_bi_initialized) return;
__wakaru_bi_initialized = true;
"use strict";
if (h(), oe(), $v = globalThis.vscode, typeof $v < "u" && typeof $v.process < "u") {
    const e = $v.process;
    Jo = {
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
} else typeof process < "u" && typeof process?.versions?.node == "string" ? Jo = {
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
} : Jo = {
    get platform () {
        return ee ? "win32" : q ? "darwin" : "linux";
    },
    get arch () {},
    get env () {
        return {};
    },
    cwd () {
        return "/";
    }
};
Ei = Jo.cwd, Is = Jo.env, gR = Jo.platform, n5 = Jo.arch;

}
