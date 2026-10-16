import { qs1 } from "./OrchestrationCard.js";
import { Xs1 } from "./OrchestrationPhaseNode.js";
import { git } from "./ProjectTone.js";
import { dy } from "./Text.js";
import { Bs1 } from "./agentsForCard.js";
import { fd } from "./icon.js";
import { jgp } from "./orchestrationAccents.js";
import { eo1 } from "./orchestrationLayout.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
var ofp, afp, lfp, xvi;
export { afp, lfp, ofp, xvi };
var __wakaru_ho1_initialized = false;
export function ho1() {
if (__wakaru_ho1_initialized) return;
__wakaru_ho1_initialized = true;
"use strict";
E(), Va(), git(), Bs1(), qs1(), Xs1(), jgp(), eo1(), dy(), fd(), ofp = {
    kVAEAm: "ui-1n2onr6",
    km5ZXQ: "ui-ack27t",
    koQZXg: "ui-8x9d4c",
    $$css: !0
}, afp = {
    kVAEAm: "ui-10l6tqk",
    kB7OPa: "ui-9f619",
    kXHlph: "ui-1plvlek",
    kORKVm: "ui-ryxfnj",
    kY2c9j: "ui-1vjfegm",
    $$css: !0
}, lfp = {
    kVAEAm: "ui-10l6tqk",
    kB7OPa: "ui-9f619",
    kXHlph: "ui-1plvlek",
    kORKVm: "ui-ryxfnj",
    kY2c9j: "ui-1vjfegm",
    $$css: !0
}, xvi = {
    world: (t, e)=>[
            ofp,
            {
                kzqmXN: t != null ? "ui-5lhr3w" : t,
                kZKoxP: e != null ? "ui-16ye13r" : e,
                kAzted: e != null ? "ui-82snj4" : e,
                $$css: !0
            },
            {
                "--x-width": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(t),
                "--x-height": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(e),
                "--x-minHeight": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(e)
            }
        ],
    box: (t)=>[
            afp,
            {
                kbCHJM: t.x != null ? "ui-gq9j65" : t.x,
                k87sOh: t.y != null ? "ui-jbys53" : t.y,
                kzqmXN: t.w != null ? "ui-5lhr3w" : t.w,
                kZKoxP: t.h != null ? "ui-16ye13r" : t.h,
                $$css: !0
            },
            {
                "--x-left": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t.x),
                "--x-top": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t.y),
                "--x-width": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t.w),
                "--x-height": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t.h)
            }
        ],
    cardBox: (t)=>[
            lfp,
            {
                kbCHJM: t.x != null ? "ui-gq9j65" : t.x,
                k87sOh: t.y != null ? "ui-jbys53" : t.y,
                kzqmXN: t.w != null ? "ui-5lhr3w" : t.w,
                $$css: !0
            },
            {
                "--x-left": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t.x),
                "--x-top": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t.y),
                "--x-width": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t.w)
            }
        ]
};

}
