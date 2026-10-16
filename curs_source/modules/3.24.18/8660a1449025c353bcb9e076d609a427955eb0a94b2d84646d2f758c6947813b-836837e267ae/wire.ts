import { Bse, m$e, xve } from "./SZu.js";
import { BMe, CTl, J9k, Kgs, Ygs, ZPn, Znf, j6, jVe, lS, x2 } from "./Ycg.js";
import { OIt } from "./index_218.js";
import { E } from "./tslib.es6.js";
var ifs, vPi, Drf, tMn, YBk, Nrf, XBk, Lrf, ZBk, jTl, QBk;
export { Drf, Lrf, Nrf, QBk, XBk, YBk, ZBk, ifs, jTl, tMn, vPi };
var __wakaru_Orf_initialized = false;
export function Orf() {
if (__wakaru_Orf_initialized) return;
__wakaru_Orf_initialized = true;
"use strict";
E(), OIt(), ifs = 128, vPi = 200, Drf = 2e4, tMn = (t)=>lS().check(m$e(), xve(1), Bse(t)), YBk = x2({
    agentId: tMn(ifs),
    agentName: tMn(vPi),
    userName: J9k(lS().check(Bse(vPi))),
    description: j6(lS().check(Bse(Drf))),
    spokenLanguage: j6(lS().check(Bse(vPi)))
}), Nrf = x2({
    theyJustTalked: ZPn(),
    newsOwed: ZPn(),
    receiptOwed: ZPn(),
    alreadySpokeThisTurn: ZPn()
}), XBk = x2({
    agentId: tMn(ifs),
    callId: tMn(ifs),
    name: tMn(vPi),
    input: Kgs(),
    line: Nrf
}), Lrf = x2({
    type: BMe("function"),
    name: lS(),
    description: lS(),
    parameters: Znf({
        type: BMe("object"),
        properties: Ygs(lS(), Znf({
            type: lS(),
            description: lS()
        })),
        required: j6(jVe(lS()))
    })
}), ZBk = x2({
    instructions: lS(),
    tools: jVe(Lrf),
    hasOverheard: ZPn(),
    greeting: x2({
        direction: lS(),
        withLandedWork: lS()
    }),
    receipt: x2({
        output: x2({
            receipt: lS()
        }),
        instructions: lS()
    })
}), jTl = x2({
    error: lS()
}), QBk = CTl("kind", [
    x2({
        kind: BMe("served"),
        output: Kgs()
    }),
    x2({
        kind: BMe("unknown_tool"),
        output: jTl
    }),
    x2({
        kind: BMe("invalid_input"),
        output: jTl
    })
]);

}
