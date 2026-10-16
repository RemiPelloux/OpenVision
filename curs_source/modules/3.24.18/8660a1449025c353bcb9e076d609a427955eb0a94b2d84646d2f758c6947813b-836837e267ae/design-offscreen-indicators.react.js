import { rAs } from "./design-annotation-tokens.stylex.js";
import { _On } from "./glass-motion.react.js";
import { Mt } from "./index_197.js";
import { Ckv } from "./offscreen-indicators.js";
import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
var aZl, Ekv, Ikv, xkv, bOn, Akv;
export { Akv, Ekv, Ikv, aZl, bOn, xkv };
var __wakaru_Wb0_initialized = false;
export function Wb0() {
if (__wakaru_Wb0_initialized) return;
__wakaru_Wb0_initialized = true;
"use strict";
E(), Mt(), $b(), _On(), rAs(), Ckv(), aZl = {
    opacity: 0,
    scale: .9
}, Ekv = {
    opacity: 1,
    scale: 1
}, Ikv = {
    scale: .95
}, xkv = {
    duration: .12,
    ease: "easeOut"
}, bOn = {
    anchor: {
        kVAEAm: "glass-10l6tqk",
        k1xSpc: "glass-78zum5",
        kfzvcC: "glass-47corl",
        $$css: !0
    },
    top: {
        k3aq6I: "glass-1nc5ocm",
        $$css: !0
    },
    bottom: {
        k3aq6I: "glass-o88s9q",
        $$css: !0
    },
    left: {
        k3aq6I: "glass-1cdci3v",
        $$css: !0
    },
    right: {
        k3aq6I: "glass-5c49eg",
        $$css: !0
    },
    at: (t, e)=>[
            {
                k87sOh: t != null ? "glass-jbys53" : t,
                kbCHJM: e != null ? "glass-gq9j65" : e,
                $$css: !0
            },
            {
                "--x-top": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(t),
                "--x-left": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(e)
            }
        ],
    pill: {
        kOIVth: "glass-195vfkc",
        kZKoxP: "glass-1qx5ct2",
        k7Eaqz: "glass-1fns5xo",
        kB7OPa: "glass-9f619",
        kLKAdn: "glass-exx8yu",
        kpe85a: "glass-1ug7bdz",
        kGO01o: "glass-18d9i69",
        kE3dHu: "glass-6wrskw",
        kaIpWk: "glass-1e6avla",
        kGuDYH: "glass-1j6dyjg",
        kkrTdU: "glass-1ypdohk",
        $$css: !0
    },
    leaving: {
        kfzvcC: "glass-47corl",
        $$css: !0
    }
}, Akv = {
    top: "chevron-up-small",
    bottom: "chevron-down-small",
    left: "chevron-left-small",
    right: "chevron-right-small"
};

}
