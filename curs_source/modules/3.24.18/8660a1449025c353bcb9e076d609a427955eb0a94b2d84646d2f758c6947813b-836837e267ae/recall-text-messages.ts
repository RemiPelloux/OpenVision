import { Bse } from "./SZu.js";
import { jVe, lS, pYt, x2 } from "./Ycg.js";
import { OIt } from "./index_218.js";
import { LIt, Vlt } from "./session-tools.ts";
import { Lgs, Nie, Wle } from "./tool-names.ts";
import { JPn, QPn } from "./tool.ts";
import { E } from "./tslib.es6.js";
var xrf, Arf, Rrf;
export { Arf, Rrf, xrf };
var __wakaru_Prf_initialized = false;
export function Prf() {
if (__wakaru_Prf_initialized) return;
__wakaru_Prf_initialized = true;
"use strict";
E(), OIt(), LIt(), Nie(), JPn(), xrf = x2({}), Arf = x2({
    messages: jVe(x2({
        id: lS(),
        writer: pYt([
            "you",
            "them"
        ]),
        text: lS()
    })).check(Bse(Lgs))
}), Rrf = class hMb extends QPn {
    static definition = {
        name: Wle,
        descriptor: Vlt.descriptor(Wle),
        input: xrf,
        output: Arf,
        invalidInputError: `invalid arguments for ${Wle}`
    };
    read;
    constructor(e){
        super(hMb.definition), this.read = e;
    }
    async execute(e, { agentId: n }) {
        return {
            messages: (await this.read(n)).slice(-Lgs)
        };
    }
};

}
