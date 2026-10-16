import { B0e, D$r, H_i, IP, Qhe, Xne, o$ } from "./shared_2.js";
import { Va } from "./stylex.js";
import { B5e } from "./tokens.stylex.js";
import { E } from "./tslib.es6.js";
var bEp, yEp, SEp, kEp, wEp, CEp, TEp, EEp, IEp, Aae, xEp, AEp, L$r, O$r, F$r, REp, V_i, wPa;
export { AEp, Aae, CEp, EEp, F$r, IEp, L$r, O$r, REp, SEp, TEp, V_i, bEp, kEp, wEp, wPa, xEp, yEp };
var __wakaru_Kk1_initialized = false;
export function Kk1() {
if (__wakaru_Kk1_initialized) return;
__wakaru_Kk1_initialized = true;
"use strict";
E(), Va(), B5e(), H_i(), bEp = {
    kVAEAm: "ui-1n2onr6",
    $$css: !0
}, yEp = {
    kVAEAm: "ui-10l6tqk",
    kbCHJM: "ui-u96u03",
    kCIrl2: "ui-3m8u43",
    k1xSpc: "ui-78zum5",
    kGNEyG: "ui-6s0dn4",
    $$css: !0
}, SEp = {
    kmuXW: "ui-2lah0s",
    k9WMMc: "ui-1hr2gdg",
    khDVqt: "ui-uxw1ft",
    $$css: !0
}, kEp = {
    kZKoxP: "ui-jm9jq1",
    kUk6DE: "ui-98rzlu",
    $$css: !0
}, wEp = {
    kVAEAm: "ui-10l6tqk",
    k87sOh: "ui-13vifvy",
    krVfgx: "ui-1ey2m1c",
    $$css: !0
}, CEp = {
    kVAEAm: "ui-10l6tqk",
    k1xSpc: "ui-78zum5",
    kOIVth: "ui-167g77z",
    kVQacm: "ui-b3r6kr",
    kaIpWk: "ui-1kogg8i",
    kmVPX3: "ui-fawy5m",
    $$css: !0
}, TEp = {
    kzqmXN: "ui-fo62xy",
    kmuXW: "ui-2lah0s",
    kSGwAc: "ui-kh2ocl",
    kaIpWk: "ui-1cum3z5",
    $$css: !0
}, EEp = {
    kVAEAm: "ui-10l6tqk",
    kCIrl2: "ui-3m8u43",
    k1xSpc: "ui-78zum5",
    kGNEyG: "ui-6s0dn4",
    k3aq6I: "ui-1cb1t30",
    $$css: !0
}, IEp = {
    kmuXW: "ui-2lah0s",
    kE3dHu: "ui-163pfp",
    $$css: !0
}, Aae = {
    dayCanvas: (t)=>[
            bEp,
            {
                kZKoxP: t != null ? "ui-16ye13r" : t,
                $$css: !0
            },
            {
                "--x-height": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t)
            }
        ],
    hourLine: (t, e)=>[
            yEp,
            {
                k87sOh: t != null ? "ui-jbys53" : t,
                kZKoxP: e != null ? "ui-16ye13r" : e,
                $$css: !0
            },
            {
                "--x-top": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(t),
                "--x-height": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(e)
            }
        ],
    hourLabel: (t, e)=>[
            SEp,
            {
                kzqmXN: t != null ? "ui-5lhr3w" : t,
                km5ZXQ: e != null ? "ui-vcn832" : e,
                $$css: !0
            },
            {
                "--x-width": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(t),
                "--x-marginRight": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(e)
            }
        ],
    rule: (t)=>[
            kEp,
            {
                kWkggS: t != null ? "ui-l8spv7" : t,
                $$css: !0
            },
            {
                "--x-backgroundColor": t ?? void 0
            }
        ],
    eventsLayer: (t, e)=>[
            wEp,
            {
                kbCHJM: t != null ? "ui-gq9j65" : t,
                kCIrl2: e != null ? "ui-7ok3n0" : e,
                $$css: !0
            },
            {
                "--x-left": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(t),
                "--x-right": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(e)
            }
        ],
    event: (t, e, n, i)=>[
            CEp,
            {
                k87sOh: t != null ? "ui-jbys53" : t,
                kZKoxP: e != null ? "ui-16ye13r" : e,
                kbCHJM: n != null ? "ui-gq9j65" : n,
                kzqmXN: i != null ? "ui-5lhr3w" : i,
                $$css: !0
            },
            {
                "--x-top": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(t),
                "--x-height": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(e),
                "--x-left": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(n),
                "--x-width": ((r)=>typeof r == "number" ? r + "px" : r ?? void 0)(i)
            }
        ],
    eventPlain: {
        kWkggS: "ui-96iioy",
        kMwMTN: "ui-1g4d90q",
        $$css: !0
    },
    eventFlag: {
        kWkggS: "ui-1fpwj60",
        kMwMTN: "ui-kbann2",
        $$css: !0
    },
    eventFree: {
        kMzoRj: "ui-mkeg23",
        ksu8eU: "ui-bsl7fq",
        kVAM5u: "ui-3a4ul3",
        kMwMTN: "ui-1rrbmv7",
        $$css: !0
    },
    eventRule: (t)=>[
            TEp,
            {
                kWkggS: t != null ? "ui-l8spv7" : t,
                $$css: !0
            },
            {
                "--x-backgroundColor": t ?? void 0
            }
        ],
    eventTitle: {
        kLKAdn: "ui-4p5aij",
        $$css: !0
    },
    eventTitleFree: {
        kE3dHu: "ui-11iknt3",
        $$css: !0
    },
    mark: (t, e)=>[
            EEp,
            {
                k87sOh: t != null ? "ui-jbys53" : t,
                kbCHJM: e != null ? "ui-gq9j65" : e,
                $$css: !0
            },
            {
                "--x-top": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(t),
                "--x-left": ((n)=>typeof n == "number" ? n + "px" : n ?? void 0)(e)
            }
        ],
    markLabel: (t)=>[
            IEp,
            {
                kzqmXN: t != null ? "ui-5lhr3w" : t,
                $$css: !0
            },
            {
                "--x-width": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t)
            }
        ]
}, xEp = (t)=>o$(t) && Qhe(t.start) && Qhe(t.end) && IP(t.title) && Xne(t.flag, D$r) && Xne(t.free, D$r), AEp = (t)=>o$(t) && Qhe(t.start) && Qhe(t.end) && t.end > t.start && B0e(t.events, xEp) && (t.mark === void 0 || o$(t.mark) && Qhe(t.mark.at) && IP(t.mark.label)), L$r = 44, O$r = 53, F$r = O$r + 8, REp = 12, V_i = 9, wPa = 132;

}
