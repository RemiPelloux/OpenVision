import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
var Su_, ku_, wu_, Cu_, H5s, S8i, Bvc, k8i, Tu_, O8e, Eu_;
export { Bvc, Cu_, Eu_, H5s, O8e, S8i, Su_, Tu_, k8i, ku_, wu_ };
var __wakaru_Uvc_initialized = false;
export function Uvc() {
if (__wakaru_Uvc_initialized) return;
__wakaru_Uvc_initialized = true;
"use strict";
E(), $b(), Su_ = {
    kzqmXN: "glass-5lhr3w",
    $$css: !0
}, ku_ = {
    kVAEAm: "glass-10l6tqk",
    k87sOh: "glass-13vifvy",
    krVfgx: "glass-1ey2m1c",
    kbCHJM: "glass-gq9j65",
    kzqmXN: "glass-1i1rx1s",
    kWkggS: "glass-icyfsf",
    $$css: !0
}, wu_ = {
    kVAEAm: "glass-10l6tqk",
    k87sOh: "glass-13vifvy",
    krVfgx: "glass-1ey2m1c",
    kbCHJM: "glass-gq9j65",
    kzqmXN: "glass-ek66a6",
    $$css: !0
}, Cu_ = {
    kVAEAm: "glass-10l6tqk",
    k1xSpc: "glass-1lliihq",
    k87sOh: "glass-1vugdwk",
    kbCHJM: "glass-gq9j65",
    kzqmXN: "glass-1gnmlj9",
    kZKoxP: "glass-dk7pt",
    kVQacm: "glass-b3r6kr",
    kMwMTN: "glass-1jpjxkv",
    $$css: !0
}, H5s = "var(--cursor-spacing-3-5)", S8i = "var(--glass-stack-rail-indent, var(--cursor-spacing-3-5))", Bvc = "1px", k8i = 7, Tu_ = `M0.5 ${k8i + .5}A${k8i} ${k8i} 0 0 1 ${k8i + .5} 0.5H1000`, O8e = {
    rail: {
        "--glass-stack-rail-stroke": "glass-s2i2lw",
        kVAEAm: "glass-10l6tqk",
        k87sOh: "glass-10q98hb",
        krVfgx: "glass-dlgqs9",
        kbCHJM: "glass-5qqswx",
        k1xSpc: "glass-1lliihq",
        kmuXW: "glass-2lah0s",
        kfzvcC: "glass-47corl",
        $$css: !0
    },
    railJoin: {
        kY2c9j: "glass-1vjfegm",
        $$css: !0
    },
    iconMark: {
        "--glass-stack-rail-mark-height": "glass-4ue2y1",
        $$css: !0
    },
    dotMark: {
        "--glass-stack-rail-mark-height": "glass-nf24ph",
        $$css: !0
    },
    joinsIconMark: {
        "--glass-stack-rail-join-mark-height": "glass-ph9s1w",
        $$css: !0
    },
    joinsDotMark: {
        "--glass-stack-rail-join-mark-height": "glass-1gprtwl",
        $$css: !0
    },
    width: (t)=>[
            Su_,
            {
                "--x-width": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(`calc(${H5s} + ${t - 1} * ${S8i})`)
            }
        ],
    through: (t)=>[
            ku_,
            {
                "--x-left": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(`calc(${t} * ${S8i} + (${H5s} - ${Bvc}) / 2)`)
            }
        ],
    column: (t)=>[
            wu_,
            {
                "--x-left": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(`calc(${t} * ${S8i})`)
            }
        ],
    peel: (t)=>[
            Cu_,
            {
                "--x-left": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(`calc(${t} * ${S8i} + (${H5s} - ${Bvc}) / 2)`)
            }
        ]
}, Eu_ = "M1 16V12.4721C1 10.957 1.85601 9.572 3.21115 8.89443L6.78886 7.10557C8.14399 6.428 9 5.04295 9 0";

}
