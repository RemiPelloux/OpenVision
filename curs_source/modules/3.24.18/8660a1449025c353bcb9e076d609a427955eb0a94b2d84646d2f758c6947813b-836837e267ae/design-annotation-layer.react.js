import { fm0 } from "./design-annotation-badge-editor.react.js";
import { Em0 } from "./design-annotation-pin-badge.react.js";
import { _ee } from "./design-annotation-service.js";
import { Rut } from "./design-note-pill-styles.js";
import { Wb0 } from "./design-offscreen-indicators.react.js";
import { Lkv } from "./design-region-crop-frame.react.js";
import { Pkv } from "./design-region-markup-layer.react.js";
import { Ckv } from "./offscreen-indicators.js";
import { aYl } from "./pin-placement.js";
import { iOn } from "./region-marquee.js";
import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
import { oy0 } from "./use-open-region-editor.react.js";
import { In } from "./use-service.react_2.js";
var CFi;
export { CFi };
var __wakaru_fy0_initialized = false;
export function fy0() {
if (__wakaru_fy0_initialized) return;
__wakaru_fy0_initialized = true;
"use strict";
E(), $b(), In(), _ee(), Rut(), fm0(), Em0(), Wb0(), Lkv(), Pkv(), Ckv(), aYl(), iOn(), oy0(), CFi = {
    box: {
        kVAEAm: "glass-10l6tqk",
        kB7OPa: "glass-9f619",
        kMzoRj: "glass-mkeg23",
        ksu8eU: "glass-1y0btm7",
        kVAM5u: "glass-68ugyx",
        kaIpWk: "glass-1cum3z5",
        kWkggS: "glass-mtaig3",
        kSiTet: "glass-1ks1olk",
        kfzvcC: "glass-47corl",
        kKVMdj: "glass-1mk7uy6 glass-1aquc0h",
        k44tkh: "glass-12l1aco",
        kyAemX: "glass-a3vuyk",
        $$css: !0
    },
    regionBox: {
        ksu8eU: "glass-bsl7fq",
        kVAM5u: "glass-188w3m",
        $$css: !0
    },
    boxMarkup: {
        kVAEAm: "glass-10l6tqk",
        kVQacm: "glass-b3r6kr",
        kfzvcC: "glass-47corl",
        kKVMdj: "glass-kmt7h5 glass-1aquc0h",
        k44tkh: "glass-12l1aco",
        kyAemX: "glass-a3vuyk",
        $$css: !0
    },
    boxRect: (t, e, n, i)=>[
            {
                k87sOh: t != null ? "glass-jbys53" : t,
                kbCHJM: e != null ? "glass-gq9j65" : e,
                kzqmXN: n != null ? "glass-5lhr3w" : n,
                kZKoxP: i != null ? "glass-16ye13r" : i,
                $$css: !0
            },
            {
                "--x-top": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(t),
                "--x-left": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(e),
                "--x-width": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(n),
                "--x-height": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(i)
            }
        ]
};

}
