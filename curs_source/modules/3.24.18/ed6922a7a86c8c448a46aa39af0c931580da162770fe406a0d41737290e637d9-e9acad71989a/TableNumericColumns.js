import { Dhu } from "./f0s.js";
import { $Oi } from "./index_175.js";
import { ZNs } from "./index_176.js";
import { M0 } from "./index_18.js";
import { iY } from "./index_28.js";
import { AW, A_, bS, cy, rb, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Mhu, I3s, A3s, Phu, Lhu, R3s, Nhu;
export { A3s, I3s, Lhu, Mhu, Nhu, Phu, R3s };
var __wakaru_srv_initialized = false;
export function srv() {
if (__wakaru_srv_initialized) return;
__wakaru_srv_initialized = true;
"use strict";
x(), A_(), M0(), ZNs(), iY(), $Oi(), AW(), zS(), Mhu = "data-rte-numeric", I3s = String.raw`[+\-\u2212\u00b1~\u2248<>\u2264\u2265]?[$\u20ac\u00a3\u00a5\u20b9]?\d(?:[\d,.\s]*\d)?\s?(?:%|pp|pts?|bps|[kmbt]|bn|x|\u00d7|ms|s|h|[kmgt]b)?`, A3s = String.raw`${I3s}(?:(?:\s/\s|\s?[\u2013\u2014]\s?|-|\sto\s)${I3s})?`, Phu = new RegExp(String.raw`^(?:${A3s}|\(${A3s}\))$`, "i"), Lhu = /^(?:|[-\u2013\u2014]|n\/?a)$/i, R3s = new cy("tableNumericColumns"), Nhu = bS.create({
    name: "tableNumericColumns",
    addProseMirrorPlugins () {
        return [
            new rb({
                key: R3s,
                state: {
                    init: (e, t)=>Dhu(t.doc),
                    apply: (e, t)=>e.docChanged ? Dhu(e.doc) : t
                },
                props: {
                    decorations: (e)=>R3s.getState(e)
                }
            })
        ];
    }
});

}
