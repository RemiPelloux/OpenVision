import { BMe, x2 } from "./Ycg.js";
import { OIt } from "./index_218.js";
import { LIt, Vlt } from "./session-tools.ts";
import { Nie, TTe } from "./tool-names.ts";
import { JPn, QPn } from "./tool.ts";
import { E } from "./tslib.es6.js";
var Jif, erf, OTl;
export { Jif, OTl, erf };
var __wakaru_FTl_initialized = false;
export function FTl() {
if (__wakaru_FTl_initialized) return;
__wakaru_FTl_initialized = true;
"use strict";
E(), OIt(), LIt(), Nie(), JPn(), Jif = x2({}), erf = x2({
    hangUp: BMe(!0)
}), OTl = class uMb extends QPn {
    static definition = {
        name: TTe,
        descriptor: Vlt.descriptor(TTe),
        input: Jif,
        output: erf,
        invalidInputError: `invalid arguments for ${TTe}`
    };
    constructor(){
        super(uMb.definition);
    }
    execute() {
        return Promise.resolve({
            hangUp: !0
        });
    }
};

}
