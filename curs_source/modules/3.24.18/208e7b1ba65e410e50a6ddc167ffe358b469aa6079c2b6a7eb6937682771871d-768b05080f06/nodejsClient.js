import { KVe, m$ } from "./nodejsWatcher.js";
import { h } from "./tslib.es6.js";
import { $d, e$ } from "./watcher.js";
var p$;
export { p$ };
var __wakaru_zVe_initialized = false;
export function zVe() {
if (__wakaru_zVe_initialized) return;
__wakaru_zVe_initialized = true;
"use strict";
h(), $d(), KVe(), p$ = class extends e$ {
    constructor(e, t, n){
        super(e, t, n), this.init();
    }
    createWatcher(e) {
        return e.add(new m$(void 0));
    }
};

}
