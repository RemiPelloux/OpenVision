import { sp } from "./find-executable.ts";
import { h } from "./tslib.es6.js";
var Kt;
export { Kt };
var __wakaru_gb_initialized = false;
export function gb() {
if (__wakaru_gb_initialized) return;
__wakaru_gb_initialized = true;
"use strict";
h(), sp(), Kt = class o2 extends Error {
    constructor(t, r, n, s, i, o){
        super(t), this.name = "SpawnError", this.exitCode = r, this.code = r, this.stdout = i, this.stderr = o, this.command = n, this.args = s, Error.captureStackTrace && Error.captureStackTrace(this, o2);
    }
};

}
