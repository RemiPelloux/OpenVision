import { Qe, st } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var KIi, Myg;
export { KIi, Myg };
var __wakaru_Kas_initialized = false;
export function Kas() {
if (__wakaru_Kas_initialized) return;
__wakaru_Kas_initialized = true;
"use strict";
E(), Qe(), Rn(), It(), KIi = Il("diffingService"), Myg = class extends st {
    constructor(){
        super(), this._diffingProvider = void 0;
    }
    async wordDiff(t, e) {
        return this._diffingProvider ? this._diffingProvider.wordDiff(t, e) : (console.error("No diffing provider registered"), {
            changes: [
                {
                    value: e,
                    added: !0
                },
                {
                    value: t,
                    removed: !0
                }
            ]
        });
    }
    registerDiffingProvider(t) {
        this._diffingProvider = t;
    }
    unregisterDiffingProvider() {
        this._diffingProvider = void 0;
    }
}, bn(KIi, Myg, 1, 1);

}
