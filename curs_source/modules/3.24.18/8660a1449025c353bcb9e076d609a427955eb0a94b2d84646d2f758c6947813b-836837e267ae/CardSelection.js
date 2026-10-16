import { tI1 } from "./ipa.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
import { createContext as zE1 } from "./react-runtime/react/esm-index-production.js";
var _2p, nDa, iDa, b2p;
export { _2p, b2p, iDa, nDa };
var __wakaru_uI1_initialized = false;
export function uI1() {
if (__wakaru_uI1_initialized) return;
__wakaru_uI1_initialized = true;
"use strict";
E(), Va(), _2p = 4, nDa = zE1(null), iDa = {
    overlay: {
        kVAEAm: "ui-ixxii4",
        kY2c9j: "ui-11uqc5h",
        kfzvcC: "ui-47corl",
        kEafiO: "ui-178xt8z",
        kWqL5O: "ui-s1s249",
        kt9PQ7: "ui-so031l",
        kZ1KPB: "ui-e0pwq",
        kPef9Z: "ui-13fuv20",
        kSWEuD: "ui-32b0ac",
        kfdmCh: "ui-1q0q8m5",
        k4WBpm: "ui-19ypqd9",
        kLZC3w: "ui-c7gpuc",
        k26BEO: "ui-lca7l4",
        kL6WhQ: "ui-vgqpvx",
        kaZRDh: "ui-12iwwwz",
        kWkggS: "ui-gsjhps",
        $$css: !0
    },
    rect: (t)=>[
            {
                kbCHJM: t.left != null ? "ui-gq9j65" : t.left,
                k87sOh: t.top != null ? "ui-jbys53" : t.top,
                kzqmXN: t.width != null ? "ui-5lhr3w" : t.width,
                kZKoxP: t.height != null ? "ui-16ye13r" : t.height,
                $$css: !0
            },
            {
                "--x-left": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t.left),
                "--x-top": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t.top),
                "--x-width": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t.width),
                "--x-height": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t.height)
            }
        ]
}, b2p = {
    Root: tI1
};

}
