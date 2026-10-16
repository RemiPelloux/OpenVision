import { Vo, lA } from "./actions.js";
import { dr } from "./arrays.js";
import { G0, _F } from "./marshallingIds.js";
import { lm } from "./menuEntryActionViewItem.js";
import { ew } from "./mouseEvent.js";
import { x } from "./tslib.es6.js";
var uzt, mir;
export { mir, uzt };
var __wakaru_L0t_initialized = false;
export function L0t() {
if (__wakaru_L0t_initialized) return;
__wakaru_L0t_initialized = true;
"use strict";
x(), ew(), Vo(), dr(), _F(), lm(), uzt = class {
    constructor(e){
        this.instanceId = e.instanceId;
    }
    toJSON() {
        return {
            $mid: G0.TerminalContext,
            instanceId: this.instanceId
        };
    }
}, mir = class extends lA {
    async runAction(e, t) {
        if (Array.isArray(t) && t.every((n)=>n instanceof uzt)) {
            await e.run(t?.[0], t);
            return;
        }
        return super.runAction(e, t);
    }
};

}
