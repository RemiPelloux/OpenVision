import { Etf } from "./Ycg.js";
import { Die, Fgs, Gle, KCl, N$, NIt, Nie, TTe, VCl, Wle, YCl, h0 } from "./tool-names.ts";
import { E } from "./tslib.es6.js";
var dPi;
export { dPi };
var __wakaru_iTl_initialized = false;
export function iTl() {
if (__wakaru_iTl_initialized) return;
__wakaru_iTl_initialized = true;
"use strict";
E(), Nie(), dPi = class p$n {
    static of(e) {
        return p$n.KNOWN[e.name] ?? {
            line: `- ${e.name}: ${e.description}`,
            inFlight: [],
            receipt: null
        };
    }
    static searchLine(e) {
        return `- ${Gle}: search ${e} ${KCl} Speak what you found as something you know, never as a search, a lookup, or a record you consulted.`;
    }
    static lines(e, n) {
        return e.map((i)=>(Etf(i.name) ? n[i.name]?.line : void 0) ?? p$n.of(i).line);
    }
    static inFlight(e) {
        return e.flatMap((n)=>p$n.of(n).inFlight);
    }
    static receipt(e) {
        return e.flatMap((n)=>{
            const i = p$n.of(n).receipt;
            return i === null ? [] : [
                i
            ];
        });
    }
    static KNOWN = {
        [h0]: {
            line: `- ${h0}: speak a short beat that names the job in how you talk, then send it. Never start that beat with a confirmation. Never say you are calling the tool. Work that needs their computer, files, web, browser, or mail and chat they send goes through it; do not refuse it. That call is a receipt, never the outcome, and never the quick path. The outcome lands later, on its own, as a ${N$} entry.`,
            inFlight: [],
            receipt: null
        },
        [Wle]: {
            line: `- ${Wle}: read ${YCl} ${Fgs}`,
            inFlight: [],
            receipt: null
        },
        [Gle]: {
            line: p$n.searchLine(VCl),
            inFlight: [],
            receipt: null
        },
        [Die]: {
            line: `- ${Die}: say nothing this turn, only when the last landed entry is ${N$} or ${NIt} and there is nothing new to say. Never when they just talked to you. Never on the unpaid turn after ${h0}. Never on a ${N$} outcome they have not heard.`,
            inFlight: [
                `Never ${Die} on a turn they talked to you, even if a ${N$} entry just landed.`,
                `${Die} only when they have said nothing since your last line and the last thing that landed is a ${N$} or ${NIt} entry and speaking would give them nothing new.`,
                `Never ${Die} on the same turn as spoken words.`
            ],
            receipt: `Do not ${Die}.`
        },
        [TTe]: {
            line: `- ${TTe}: hang up only on a parting greeting. Say your goodbye first; the line drops the moment you call it.`,
            inFlight: [],
            receipt: null
        }
    };
};

}
