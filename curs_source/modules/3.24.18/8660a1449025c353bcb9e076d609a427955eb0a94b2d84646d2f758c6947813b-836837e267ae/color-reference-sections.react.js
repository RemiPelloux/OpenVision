import { _dC, uQv, yBi } from "./color-reference-data.js";
import { kJt } from "./file-tree-row-density.js";
import { Mt } from "./index_197.js";
import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
var fQv, vQv, _Qv, bQv, yQv, SQv, w8e, Zdc, kQv;
export { SQv, Zdc, _Qv, bQv, fQv, kQv, vQv, w8e, yQv };
var __wakaru_ehC_initialized = false;
export function ehC() {
if (__wakaru_ehC_initialized) return;
__wakaru_ehC_initialized = true;
"use strict";
E(), Mt(), $b(), kJt(), _dC(), fQv = {
    k1xSpc: "glass-rvj5dj",
    kumcoG: "glass-qketvx",
    kOIVth: "glass-1jlwbde",
    kGNEyG: "glass-6s0dn4",
    $$css: !0
}, vQv = {
    kGuDYH: "glass-11wthnw",
    kLWn49: "glass-1ja60sm",
    k7Eaqz: "glass-euugli",
    $$css: !0
}, _Qv = {
    kaIpWk: "glass-1043rbw",
    k8WAf4: "glass-12ffz05",
    kg3NbH: "glass-1m31zm8",
    kGuDYH: "glass-1wm8ruf",
    kLWn49: "glass-spwq11",
    k7Eaqz: "glass-euugli",
    $$css: !0
}, bQv = {
    kaIpWk: "glass-1043rbw",
    kZKoxP: "glass-1vqgdyp",
    k7Eaqz: "glass-euugli",
    $$css: !0
}, yQv = {
    kWkggS: "glass-1ua6jya",
    kaIpWk: "glass-1043rbw",
    ksu8eU: "glass-1y0btm7",
    kMzoRj: "glass-dh2fpr",
    kZKoxP: "glass-1vqgdyp",
    k7Eaqz: "glass-euugli",
    $$css: !0
}, SQv = {
    kVAM5u: "glass-qz0629",
    kaIpWk: "glass-1e1y6u3",
    ksu8eU: "glass-1y0btm7",
    kMzoRj: "glass-mkeg23",
    kZKoxP: "glass-1qx5ct2",
    kzqmXN: "glass-w4jnvo",
    $$css: !0
}, w8e = {
    hueGrid: (t)=>[
            fQv,
            {
                "--x-gridTemplateColumns": `80px repeat(${t}, minmax(0, 1fr))` != null ? `80px repeat(${t}, minmax(0, 1fr))` : void 0
            }
        ],
    sample: (t)=>[
            vQv,
            {
                kMwMTN: t != null ? "glass-14rh7hd" : t,
                $$css: !0
            },
            {
                "--x-color": t ?? void 0
            }
        ],
    onFill: (t, e)=>[
            _Qv,
            {
                kWkggS: t != null ? "glass-l8spv7" : t,
                kMwMTN: e != null ? "glass-14rh7hd" : e,
                $$css: !0
            },
            {
                "--x-backgroundColor": t ?? void 0,
                "--x-color": e ?? void 0
            }
        ],
    ansi: (t)=>[
            {
                kMwMTN: t != null ? "glass-14rh7hd" : t,
                $$css: !0
            },
            {
                "--x-color": t ?? void 0
            }
        ],
    fill: (t)=>[
            bQv,
            {
                kWkggS: t != null ? "glass-l8spv7" : t,
                $$css: !0
            },
            {
                "--x-backgroundColor": t ?? void 0
            }
        ],
    stroke: (t)=>[
            yQv,
            {
                kVAM5u: t != null ? "glass-6w5c0t" : t,
                $$css: !0
            },
            {
                "--x-borderColor": t ?? void 0
            }
        ],
    swatch: (t)=>[
            SQv,
            {
                kWkggS: t != null ? "glass-l8spv7" : t,
                $$css: !0
            },
            {
                "--x-backgroundColor": t ?? void 0
            }
        ]
}, Zdc = [
    uQv,
    ...yBi
], kQv = {
    added: "added",
    modified: "modified",
    removed: "deleted",
    untracked: "untracked"
};

}
