import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
var sgp, ogp, M2e;
export { M2e, ogp, sgp };
var __wakaru_Dr1_initialized = false;
export function Dr1() {
if (__wakaru_Dr1_initialized) return;
__wakaru_Dr1_initialized = true;
"use strict";
E(), Va(), sgp = {
    kVAEAm: "ui-10l6tqk",
    k1xSpc: "ui-78zum5",
    kXwgrk: "ui-dt5ytf",
    $$css: !0
}, ogp = {
    kzqmXN: "ui-5lhr3w",
    $$css: !0
}, M2e = {
    figmaFrame: (t, e, n, i)=>[
            sgp,
            {
                kbCHJM: t != null ? "ui-gq9j65" : t,
                k87sOh: e != null ? "ui-jbys53" : e,
                kzqmXN: n != null ? "ui-5lhr3w" : n,
                kZKoxP: i != null ? "ui-16ye13r" : i,
                $$css: !0
            },
            {
                "--x-left": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(t),
                "--x-top": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(e),
                "--x-width": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(n),
                "--x-height": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(i)
            }
        ],
    figmaBarMuted: {
        kZKoxP: "ui-uoj239",
        kaIpWk: "ui-1i4c3av",
        kWkggS: "ui-1qmjd7y",
        $$css: !0
    },
    figmaBarSoft: {
        kZKoxP: "ui-uoj239",
        kaIpWk: "ui-1i4c3av",
        kWkggS: "ui-1m4ooaa",
        $$css: !0
    },
    figmaBarWidth: (t)=>[
            ogp,
            {
                "--x-width": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(`${t}%`)
            }
        ]
};

}
