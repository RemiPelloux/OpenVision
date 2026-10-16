import { Bse, m$e, xve } from "./SZu.js";
import { Qnf, ZPn, j6, jVe, lS, pYt, x2 } from "./Ycg.js";
import { OIt } from "./index_218.js";
import { LIt, Vlt } from "./session-tools.ts";
import { GCl, Gle, Nie, Ogs, WCl, qCl, sPi, zCl } from "./tool-names.ts";
import { JPn, QPn } from "./tool.ts";
import { E } from "./tslib.es6.js";
var trf, nrf, irf, rrf;
export { irf, nrf, rrf, trf };
var __wakaru_srf_initialized = false;
export function srf() {
if (__wakaru_srf_initialized) return;
__wakaru_srf_initialized = true;
"use strict";
E(), OIt(), LIt(), Nie(), JPn(), trf = `${Gle} needs a query: a few words naming the fact you want`, nrf = x2({
    query: lS().check(m$e(), Qnf((t)=>t.length > 0, {
        message: trf
    })),
    scope: j6(pYt(qCl)),
    id: j6(lS().check(m$e())),
    from: j6(lS().check(m$e())),
    to: j6(lS().check(m$e())),
    if_missing: pYt(zCl)
}), irf = x2({
    hits: jVe(x2({
        id: lS().check(xve(1)),
        where: lS(),
        when: lS(),
        writer: pYt([
            "you",
            "them"
        ]),
        quote: lS().check(Bse(WCl)),
        text: j6(lS().check(Bse(GCl))),
        before: j6(lS().check(Bse(Ogs))),
        after: j6(lS().check(Bse(Ogs)))
    })).check(Bse(sPi)),
    more: ZPn()
}), rrf = class deu extends QPn {
    static definition = {
        name: Gle,
        descriptor: Vlt.descriptor(Gle),
        input: nrf,
        output: irf,
        invalidInputError: `invalid arguments for ${Gle}`
    };
    static defaultScope = "everything";
    search;
    constructor(e){
        super(deu.definition), this.search = e;
    }
    async execute(e, n) {
        const i = (a)=>a !== void 0 && a.length > 0 ? a : void 0, r = i(e.id), s = i(e.from), o = i(e.to);
        return await this.search({
            query: e.query,
            scope: e.scope ?? deu.defaultScope,
            ...r === void 0 ? {} : {
                id: r
            },
            ...s === void 0 ? {} : {
                from: s
            },
            ...o === void 0 ? {} : {
                to: o
            }
        }, n);
    }
};

}
