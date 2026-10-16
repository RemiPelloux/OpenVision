import { $R } from "./call-records.ts";
import { Zd } from "./f0s.js";
import { V0t } from "./index_214.js";
import { z4h } from "./schemas_9.js";
import { Ont, h7e } from "./session-tools.ts";
import { Fq, ghe } from "./tool-names.ts";
import { Dzt, Rzt } from "./tool.ts";
import { x } from "./tslib.es6.js";
function ITe(e, t) {
    return new z4h({
        type: "literal",
        values: Array.isArray(e) ? e : [
            e
        ],
        ...Zd(t)
    });
}
var FUh, BUh, kPo;
export { BUh, FUh, ITe, kPo };
var __wakaru_wPo_initialized = false;
export function wPo() {
if (__wakaru_wPo_initialized) return;
__wakaru_wPo_initialized = true;
"use strict";
x(), V0t(), Ont(), Fq(), Dzt(), FUh = $R({}), BUh = $R({
    hangUp: ITe(!0)
}), kPo = class zCm extends Rzt {
    static definition = {
        name: ghe,
        descriptor: h7e.descriptor(ghe),
        input: FUh,
        output: BUh,
        invalidInputError: `invalid arguments for ${ghe}`
    };
    constructor(){
        super(zCm.definition);
    }
    execute() {
        return Promise.resolve({
            hangUp: !0
        });
    }
};

}
