import { _Y, vu } from "./actions.js";
import { bo } from "./arrays.js";
import { DAi, xMe } from "./marshallingIds.js";
import { MC } from "./menuEntryActionViewItem.js";
import { i2 } from "./mouseEvent.js";
import { E } from "./tslib.es6.js";
var g2n, Nds;
export { Nds, g2n };
var __wakaru_f2n_initialized = false;
export function f2n() {
if (__wakaru_f2n_initialized) return;
__wakaru_f2n_initialized = true;
"use strict";
E(), i2(), vu(), bo(), DAi(), MC(), g2n = class {
    constructor(t){
        this.instanceId = t.instanceId;
    }
    toJSON() {
        return {
            $mid: xMe.TerminalContext,
            instanceId: this.instanceId
        };
    }
}, Nds = class extends _Y {
    async runAction(t, e) {
        if (Array.isArray(e) && e.every((n)=>n instanceof g2n)) {
            await t.run(e?.[0], e);
            return;
        }
        return super.runAction(t, e);
    }
};

}
