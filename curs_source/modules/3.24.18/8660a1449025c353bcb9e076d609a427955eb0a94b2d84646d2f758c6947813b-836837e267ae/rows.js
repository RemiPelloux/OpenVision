import { B0e, H_i, IP, Xne, o$ } from "./shared_2.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
var FEp, Y_i, BEp, UEp;
export { BEp, FEp, UEp, Y_i };
var __wakaru_sw1_initialized = false;
export function sw1() {
if (__wakaru_sw1_initialized) return;
__wakaru_sw1_initialized = true;
"use strict";
E(), Va(), H_i(), FEp = {
    k1xSpc: "ui-rvj5dj",
    $$css: !0
}, Y_i = {
    grid: (t)=>[
            FEp,
            {
                kumcoG: t != null ? "ui-qketvx" : t,
                $$css: !0
            },
            {
                "--x-gridTemplateColumns": t ?? void 0
            }
        ],
    hairlineRow: {
        k1C7PZ: "ui-tqikln",
        kEafiO: "ui-t8cgyo",
        kPef9Z: "ui-13fuv20",
        kLZC3w: "ui-nhgcku",
        k8WAf4: "ui-p59q4u",
        $$css: !0
    },
    rowMeta: {
        kLKAdn: "ui-1nn3v0j",
        kHjlTd: "ui-j0a0fe",
        $$css: !0
    },
    rowDetail: {
        keoZOQ: "ui-r9ek0c",
        $$css: !0
    }
}, BEp = (t)=>o$(t) && IP(t.title) && Xne(t.lead, IP) && Xne(t.detail, IP) && Xne(t.meta, IP) && (t.status === void 0 || o$(t.status) && IP(t.status.label)), UEp = (t)=>o$(t) && B0e(t.rows, BEp);

}
