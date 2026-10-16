import { uv } from "./composerData.js";
import { v5a } from "./composerHeaderLog.js";
import { E } from "./tslib.es6.js";
var $Bp;
export { $Bp };
var __wakaru_XO1_initialized = false;
export function XO1() {
if (__wakaru_XO1_initialized) return;
__wakaru_XO1_initialized = true;
"use strict";
E(), v5a(), uv(), $Bp = class {
    constructor(){
        this._dirty = new Set;
    }
    record(t) {
        if (!(t === "none" || this._dirty === "all")) {
            if (t === "all") {
                this._dirty = "all";
                return;
            }
            this._dirty.add(t.index);
        }
    }
    freeze() {
        const t = this._uncommitted, e = this._dirty;
        return this._dirty = new Set, t === void 0 ? this._uncommitted = e : t === "all" || e === "all" ? this._uncommitted = "all" : this._uncommitted = new Set([
            ...t,
            ...e
        ]), this._uncommitted;
    }
    commit(t) {
        this._uncommitted === t && (this._uncommitted = void 0);
    }
};

}
