import { $xv } from "./browser-device-frame-handles.react.js";
import { Jx0 } from "./browser-device-toolbar.react.js";
import { m6i } from "./browser-responsive-design-mode.js";
import { dPs } from "./glass-floating-toolbar.react.js";
import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
import { lAv } from "./use-browser-responsive-design-mode.react.js";
import { CG } from "./use-observable.react.js";
var dAv, hAv, hPs;
export { dAv, hAv, hPs };
var __wakaru_hA0_initialized = false;
export function hA0() {
if (__wakaru_hA0_initialized) return;
__wakaru_hA0_initialized = true;
"use strict";
E(), $b(), CG(), $xv(), Jx0(), m6i(), dPs(), lAv(), dAv = {
    kmuXW: "glass-2lah0s",
    $$css: !0
}, hAv = {
    kVAEAm: "glass-1n2onr6",
    kmuXW: "glass-2lah0s",
    kWkggS: "glass-12peec7",
    kGVxlE: "glass-19r4qoi",
    $$css: !0
}, hPs = {
    stage: {
        kVAEAm: "glass-1n2onr6",
        k1xSpc: "glass-78zum5",
        kzQI83: "glass-1iyjqo2",
        kmuXW: "glass-s83m0k",
        kCS8Yb: "glass-1t1x2f9",
        k7Eaqz: "glass-euugli",
        kAzted: "glass-2lwn1j",
        kGNEyG: "glass-6s0dn4",
        kjj79g: "glass-l56j7k",
        kXHlph: "glass-6ikm8r",
        kORKVm: "glass-10wlt62",
        $$css: !0
    },
    devtoolsDockSpacer: (t)=>[
            dAv,
            {
                kzqmXN: t != null ? "glass-5lhr3w" : t,
                $$css: !0
            },
            {
                "--x-width": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t)
            }
        ],
    deviceFrame: (t)=>[
            hAv,
            {
                kzqmXN: t.width != null ? "glass-5lhr3w" : t.width,
                kZKoxP: t.height != null ? "glass-16ye13r" : t.height,
                $$css: !0
            },
            {
                "--x-width": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t.width),
                "--x-height": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t.height)
            }
        ]
};

}
