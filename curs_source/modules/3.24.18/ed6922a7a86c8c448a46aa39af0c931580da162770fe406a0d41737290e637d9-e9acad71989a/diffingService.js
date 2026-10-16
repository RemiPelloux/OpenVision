import { Se, we } from "./HVr.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, pd } from "./qIc.js";
import { x } from "./tslib.es6.js";
var vBn, GMh;
export { GMh, vBn };
var __wakaru_per_initialized = false;
export function per() {
if (__wakaru_per_initialized) return;
__wakaru_per_initialized = true;
"use strict";
x(), Se(), Pn(), Ze(), vBn = pd("diffingService"), GMh = class extends we {
    constructor(){
        super(), this._diffingProvider = void 0;
    }
    async wordDiff(e, t) {
        return this._diffingProvider ? this._diffingProvider.wordDiff(e, t) : (console.error("No diffing provider registered"), {
            changes: [
                {
                    value: t,
                    added: !0
                },
                {
                    value: e,
                    removed: !0
                }
            ]
        });
    }
    registerDiffingProvider(e) {
        this._diffingProvider = e;
    }
    unregisterDiffingProvider() {
        this._diffingProvider = void 0;
    }
}, mn(vBn, GMh, 1, 1);

}
