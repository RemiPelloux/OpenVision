import { BMe, CTl, lS, x2 } from "./Ycg.js";
import { OIt } from "./index_218.js";
import { LIt, Vlt } from "./session-tools.ts";
import { ETe, Hgs } from "./speak-policy.ts";
import { Die, Nie } from "./tool-names.ts";
import { JPn, QPn } from "./tool.ts";
import { E } from "./tslib.es6.js";
var lrf, crf, nfs;
export { crf, lrf, nfs };
var __wakaru_BTl_initialized = false;
export function BTl() {
if (__wakaru_BTl_initialized) return;
__wakaru_BTl_initialized = true;
"use strict";
E(), OIt(), LIt(), Hgs(), Nie(), JPn(), lrf = x2({}), crf = CTl("plan", [
    x2({
        plan: BMe("silent")
    }),
    x2({
        plan: BMe("spoken"),
        error: lS()
    })
]), nfs = class dMb extends QPn {
    static definition = {
        name: Die,
        descriptor: Vlt.descriptor(Die),
        input: lrf,
        output: crf,
        invalidInputError: `invalid arguments for ${Die}`
    };
    constructor(){
        super(dMb.definition);
    }
    execute(e, { line: n }) {
        const i = ETe.staySilentPlan({
            theyJustTalked: n.theyJustTalked,
            newsOwed: n.newsOwed,
            receiptOwed: n.receiptOwed,
            alreadySpokeThisTurn: n.alreadySpokeThisTurn
        });
        return Promise.resolve(i.kind === "silent" ? {
            plan: "silent"
        } : {
            plan: "spoken",
            error: i.error
        });
    }
};

}
