import { Wf } from "./composerData.js";
import { jKs } from "./composerHeaderLog.js";
import { x } from "./tslib.es6.js";
var z3u;
export { z3u };
var __wakaru_O_v_initialized = false;
export function O_v() {
if (__wakaru_O_v_initialized) return;
__wakaru_O_v_initialized = true;
"use strict";
x(), jKs(), Wf(), z3u = class {
    constructor(){
        this._dirty = new Set;
    }
    record(e) {
        if (!(e === "none" || this._dirty === "all")) {
            if (e === "all") {
                this._dirty = "all";
                return;
            }
            this._dirty.add(e.index);
        }
    }
    freeze() {
        const e = this._uncommitted, t = this._dirty;
        return this._dirty = new Set, e === void 0 ? this._uncommitted = t : e === "all" || t === "all" ? this._uncommitted = "all" : this._uncommitted = new Set([
            ...e,
            ...t
        ]), this._uncommitted;
    }
    commit(e) {
        this._uncommitted === e && (this._uncommitted = void 0);
    }
};

}
