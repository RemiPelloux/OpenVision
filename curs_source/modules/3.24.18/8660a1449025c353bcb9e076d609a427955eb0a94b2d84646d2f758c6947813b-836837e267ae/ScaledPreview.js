import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
var lgp, cgp, ugp, dgp;
export { cgp, dgp, lgp, ugp };
var __wakaru_XEa_initialized = false;
export function XEa() {
if (__wakaru_XEa_initialized) return;
__wakaru_XEa_initialized = true;
"use strict";
E(), Va(), lgp = {
    kzqmXN: "ui-1m258z3",
    k3aq6I: "ui-sqj5wx",
    k3nNDw: "ui-1al4vs7",
    kfzvcC: "ui-47corl",
    kMwMTN: "ui-1wd3ewq",
    k9WMMc: "ui-dpxx8g",
    $$css: !0
}, cgp = 320, ugp = {
    block: 12,
    inline: 24
}, dgp = {
    page: (t, e)=>[
            lgp,
            {
                kLKAdn: e.block != null ? "ui-1jm3axb" : e.block,
                kpe85a: e.inline != null ? "ui-wsd3xy" : e.inline,
                kGO01o: e.block != null ? "ui-jqpyvm" : e.block,
                kE3dHu: e.inline != null ? "ui-13e46o5" : e.inline,
                $$css: !0
            },
            {
                "--x-transform": `scale(${t})` != null ? `scale(${t})` : void 0,
                "--x-paddingTop": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(e.block),
                "--x-paddingRight": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(e.inline),
                "--x-paddingBottom": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(e.block),
                "--x-paddingLeft": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(e.inline)
            }
        ]
};

}
