import { Aw, Fy, HQ, MS, Rw, j1 } from "./LYd.js";
import { EUr } from "./index_181.js";
import { LIa } from "./index_182.js";
import { gE } from "./index_23.js";
import { Doe } from "./index_33.js";
import { tAp } from "./ipa.js";
import { E } from "./tslib.es6.js";
var nAp, bMa, yMa, iAp, rAp, SMa, sAp;
export { SMa, bMa, iAp, nAp, rAp, sAp, yMa };
var __wakaru_NC1_initialized = false;
export function NC1() {
if (__wakaru_NC1_initialized) return;
__wakaru_NC1_initialized = true;
"use strict";
E(), Fy(), gE(), LIa(), Doe(), EUr(), HQ(), Aw(), nAp = "data-rte-numeric", bMa = String.raw`[+\-\u2212\u00b1~\u2248<>\u2264\u2265]?[$\u20ac\u00a3\u00a5\u20b9]?\d(?:[\d,.\s]*\d)?\s?(?:%|pp|pts?|bps|[kmbt]|bn|x|\u00d7|ms|s|h|[kmgt]b)?`, yMa = String.raw`${bMa}(?:(?:\s/\s|\s?[\u2013\u2014]\s?|-|\sto\s)${bMa})?`, iAp = new RegExp(String.raw`^(?:${yMa}|\(${yMa}\))$`, "i"), rAp = /^(?:|[-\u2013\u2014]|n\/?a)$/i, SMa = new j1("tableNumericColumns"), sAp = Rw.create({
    name: "tableNumericColumns",
    addProseMirrorPlugins () {
        return [
            new MS({
                key: SMa,
                state: {
                    init: (t, e)=>tAp(e.doc),
                    apply: (t, e)=>t.docChanged ? tAp(t.doc) : e
                },
                props: {
                    decorations: (t)=>SMa.getState(t)
                }
            })
        ];
    }
});

}
