import { h6h } from "./session-tools.ts";
import { ES, Fq, LMo, MMo, Nnt, Oq, PMo, ghe, irr, mZ, pZ, t9 } from "./tool-names.ts";
import { x } from "./tslib.es6.js";
var n9n;
export { n9n };
var __wakaru_WMo_initialized = false;
export function WMo() {
if (__wakaru_WMo_initialized) return;
__wakaru_WMo_initialized = true;
"use strict";
x(), Fq(), n9n = class Hin {
    static of(t) {
        return Hin.KNOWN[t.name] ?? {
            line: `- ${t.name}: ${t.description}`,
            inFlight: [],
            receipt: null
        };
    }
    static searchLine(t) {
        return `- ${mZ}: search ${t} ${PMo} Speak what you found as something you know, never as a search, a lookup, or a record you consulted.`;
    }
    static lines(t, n) {
        return t.map((i)=>(h6h(i.name) ? n[i.name]?.line : void 0) ?? Hin.of(i).line);
    }
    static inFlight(t) {
        return t.flatMap((n)=>Hin.of(n).inFlight);
    }
    static receipt(t) {
        return t.flatMap((n)=>{
            const i = Hin.of(n).receipt;
            return i === null ? [] : [
                i
            ];
        });
    }
    static KNOWN = {
        [ES]: {
            line: `- ${ES}: speak a short beat that names the job in how you talk, then send it. Never start that beat with a confirmation. Never say you are calling the tool. Work that needs their computer, files, web, browser, or mail and chat they send goes through it; do not refuse it. That call is a receipt, never the outcome, and never the quick path. The outcome lands later, on its own, as a ${t9} entry.`,
            inFlight: [],
            receipt: null
        },
        [pZ]: {
            line: `- ${pZ}: read ${LMo} ${irr}`,
            inFlight: [],
            receipt: null
        },
        [mZ]: {
            line: Hin.searchLine(MMo),
            inFlight: [],
            receipt: null
        },
        [Oq]: {
            line: `- ${Oq}: say nothing this turn, only when the last landed entry is ${t9} or ${Nnt} and there is nothing new to say. Never when they just talked to you. Never on the unpaid turn after ${ES}. Never on a ${t9} outcome they have not heard.`,
            inFlight: [
                `Never ${Oq} on a turn they talked to you, even if a ${t9} entry just landed.`,
                `${Oq} only when they have said nothing since your last line and the last thing that landed is a ${t9} or ${Nnt} entry and speaking would give them nothing new.`,
                `Never ${Oq} on the same turn as spoken words.`
            ],
            receipt: `Do not ${Oq}.`
        },
        [ghe]: {
            line: `- ${ghe}: hang up only on a parting greeting. Say your goodbye first; the line drops the moment you call it.`,
            inFlight: [],
            receipt: null
        }
    };
};

}
