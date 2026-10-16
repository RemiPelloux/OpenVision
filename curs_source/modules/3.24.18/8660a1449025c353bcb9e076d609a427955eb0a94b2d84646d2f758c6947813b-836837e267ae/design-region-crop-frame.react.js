import { Qe } from "./Iwo.js";
import { Pkv } from "./design-region-markup-layer.react.js";
import { Hn } from "./dom_2.js";
import { lZl } from "./editorHost.js";
import { yNl } from "./history-owner.js";
import { CQt } from "./region-markup.js";
import { iOn } from "./region-marquee.js";
import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
import { cZl } from "./use-stable-callback.react_2.js";
var yOn;
export { yOn };
var __wakaru_Lkv_initialized = false;
export function Lkv() {
if (__wakaru_Lkv_initialized) return;
__wakaru_Lkv_initialized = true;
"use strict";
E(), $b(), Hn(), Qe(), lZl(), cZl(), yNl(), Pkv(), CQt(), iOn(), yOn = {
    frame: {
        kVAEAm: "glass-10l6tqk",
        kB7OPa: "glass-9f619",
        kMzoRj: "glass-dh2fpr",
        ksu8eU: "glass-1y0btm7",
        kVAM5u: "glass-188w3m",
        kWkggS: "glass-jbqb8w",
        kGVxlE: "glass-a8fj2x",
        kfzvcC: "glass-47corl",
        $$css: !0
    },
    marquee: {
        ksu8eU: "glass-bsl7fq",
        kGVxlE: "glass-1gnnqk1",
        $$css: !0
    },
    interactive: {
        kfzvcC: "glass-67bb7w",
        kFalU9: "glass-5ve5x3",
        $$css: !0
    },
    geometry: (t, e, n, i)=>[
            {
                kbCHJM: t != null ? "glass-gq9j65" : t,
                k87sOh: e != null ? "glass-jbys53" : e,
                kzqmXN: n != null ? "glass-5lhr3w" : n,
                kZKoxP: i != null ? "glass-16ye13r" : i,
                $$css: !0
            },
            {
                "--x-left": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(t),
                "--x-top": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(e),
                "--x-width": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(n),
                "--x-height": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(i)
            }
        ],
    cursor: (t)=>[
            {
                kkrTdU: t != null ? "glass-1163a87" : t,
                $$css: !0
            },
            {
                "--x-cursor": t ?? void 0
            }
        ]
};

}
