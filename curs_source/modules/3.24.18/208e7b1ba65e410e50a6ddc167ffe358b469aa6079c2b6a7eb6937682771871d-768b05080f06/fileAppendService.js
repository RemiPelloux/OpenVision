import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import * as kve from "fs";
import * as wnt from "path";
var X1;
export { X1 };
var __wakaru_Ent_initialized = false;
export function Ent() {
if (__wakaru_Ent_initialized) return;
__wakaru_Ent_initialized = true;
"use strict";
h(), te(), X1 = class {
    constructor(e){
        this.logService = e;
    }
    async appendFile(e, t) {
        try {
            await kve.promises.appendFile(e, t, {
                encoding: "utf8"
            });
        } catch (n) {
            throw this.logService.error("[FileAppendMainService] Failed to append to file:", e, n), n;
        }
    }
    async ensureDir(e) {
        const t = wnt.dirname(e);
        try {
            await kve.promises.mkdir(t, {
                recursive: !0
            });
        } catch (n) {
            if (n.code !== "EEXIST") throw this.logService.error("[FileAppendMainService] Failed to create directory:", t, n), n;
        }
    }
}, X1 = B([
    w(0, Z)
], X1);

}
