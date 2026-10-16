import { $R, LC } from "./call-records.ts";
import { ITe } from "./end-the-call.ts";
import { V0t } from "./index_214.js";
import { lPo } from "./send-task.ts";
import { Ont, h7e } from "./session-tools.ts";
import { crr, fhe } from "./speak-policy.ts";
import { Fq, Oq } from "./tool-names.ts";
import { Dzt, Rzt } from "./tool.ts";
import { x } from "./tslib.es6.js";
var qUh, zUh, yrr;
export { qUh, yrr, zUh };
var __wakaru_CPo_initialized = false;
export function CPo() {
if (__wakaru_CPo_initialized) return;
__wakaru_CPo_initialized = true;
"use strict";
x(), V0t(), Ont(), crr(), Fq(), Dzt(), qUh = $R({}), zUh = lPo("plan", [
    $R({
        plan: ITe("silent")
    }),
    $R({
        plan: ITe("spoken"),
        error: LC()
    })
]), yrr = class KCm extends Rzt {
    static definition = {
        name: Oq,
        descriptor: h7e.descriptor(Oq),
        input: qUh,
        output: zUh,
        invalidInputError: `invalid arguments for ${Oq}`
    };
    constructor(){
        super(KCm.definition);
    }
    execute(t, { line: n }) {
        const i = fhe.staySilentPlan({
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
