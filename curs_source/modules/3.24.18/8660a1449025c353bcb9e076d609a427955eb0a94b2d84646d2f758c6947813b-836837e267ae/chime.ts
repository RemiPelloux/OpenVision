import { gnf } from "./Ycg.js";
import { E } from "./tslib.es6.js";
var fnf, vnf, _nf, bnf;
export { _nf, bnf, fnf, vnf };
var __wakaru_ynf_initialized = false;
export function ynf() {
if (__wakaru_ynf_initialized) return;
__wakaru_ynf_initialized = true;
"use strict";
E(), fnf = .16, vnf = 6, _nf = class aMb {
    static NOTES = [
        {
            frequencyHz: 659.25,
            durationMs: 90
        },
        {
            frequencyHz: 987.77,
            durationMs: 150
        }
    ];
    static render(e) {
        return gnf(aMb.NOTES, e);
    }
}, bnf = class lMb {
    static NOTES = [
        {
            frequencyHz: 987.77,
            durationMs: 90
        },
        {
            frequencyHz: 659.25,
            durationMs: 150
        }
    ];
    static render(e) {
        return gnf(lMb.NOTES, e);
    }
};

}
