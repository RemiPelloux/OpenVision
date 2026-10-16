import { CYc, Sfe } from "./button-layout.stylex.js";
import { Eas, swi } from "./button-root-base.stylex.js";
import { Xwe, owi } from "./control-radius.stylex.js";
import { Jbn, kfe } from "./control-size.stylex.js";
import { x } from "./tslib.es6.js";
import { JK, MJ, j3t } from "./typography.stylex.js";
var z3t, xas, wfe;
export { wfe, xas, z3t };
var __wakaru_PTg_initialized = false;
export function PTg() {
if (__wakaru_PTg_initialized) return;
__wakaru_PTg_initialized = true;
"use strict";
x(), CYc(), Eas(), owi(), Jbn(), MJ(), z3t = {
    markdownHover: {
        "--ui-md-state-color": "ui-1w18epr",
        $$css: !0
    },
    primaryWeight: {
        k63SB2: "ui-20ajya ui-1uv0z76",
        $$css: !0
    },
    alignLeft: {
        kjj79g: "ui-1nhvcw1",
        $$css: !0
    },
    fullWidth: {
        kzqmXN: "ui-h8yej3",
        $$css: !0
    },
    frameContent: {
        kZCmMZ: "ui-1c1uobl",
        kwRFfy: "ui-yri2b",
        $$css: !0
    }
}, xas = {
    labelGroup: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kOIVth: "ui-pkkfsy",
        k7Eaqz: "ui-euugli",
        ks0D6T: "ui-193iq5w",
        $$css: !0
    },
    kbs: {
        kmuXW: "ui-2lah0s",
        kMv6JI: "ui-y1aii3",
        k63SB2: "ui-20ajya",
        kSiTet: "ui-byyjgo ui-s6mkfk",
        k33iCy: "ui-1go34h7",
        $$css: !0
    }
}, wfe = {
    root: [
        swi.root,
        Sfe.content,
        z3t.markdownHover,
        z3t.primaryWeight
    ],
    fontSmoothing: j3t.root,
    align: {
        center: null,
        left: z3t.alignLeft
    },
    fullWidth: z3t.fullWidth,
    frame: {
        container: null,
        content: z3t.frameContent
    },
    shape: {
        rounded: null,
        pill: Sfe.pill
    },
    size: {
        sm: [
            kfe.sm,
            Xwe.sm,
            Sfe.size.sm
        ],
        md: [
            kfe.md,
            Xwe.md,
            Sfe.size.md
        ],
        lg: [
            kfe.lg,
            Xwe.lg,
            Sfe.size.lg
        ],
        xl: [
            kfe.xl,
            Xwe.xl,
            Sfe.size.xl
        ]
    },
    pillSize: Sfe.pillSize,
    typography: Sfe.typography,
    labelGroup: xas.labelGroup,
    kbs: [
        JK.root,
        xas.kbs
    ]
};

}
