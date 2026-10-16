import { FZd, SRe } from "./button-layout.stylex.js";
import { TKo, ZIr } from "./button-root-base.stylex.js";
import { QIr, j5e } from "./control-radius.stylex.js";
import { _ai, kRe } from "./control-size.stylex.js";
import { E } from "./tslib.es6.js";
import { Ent, Gj, P7 } from "./typography.stylex.js";
var e_n, EKo, wRe;
export { EKo, e_n, wRe };
var __wakaru_GFy_initialized = false;
export function GFy() {
if (__wakaru_GFy_initialized) return;
__wakaru_GFy_initialized = true;
"use strict";
E(), FZd(), TKo(), QIr(), _ai(), P7(), e_n = {
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
}, EKo = {
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
}, wRe = {
    root: [
        ZIr.root,
        SRe.content,
        e_n.markdownHover,
        e_n.primaryWeight
    ],
    fontSmoothing: Ent.root,
    align: {
        center: null,
        left: e_n.alignLeft
    },
    fullWidth: e_n.fullWidth,
    frame: {
        container: null,
        content: e_n.frameContent
    },
    shape: {
        rounded: null,
        pill: SRe.pill
    },
    size: {
        sm: [
            kRe.sm,
            j5e.sm,
            SRe.size.sm
        ],
        md: [
            kRe.md,
            j5e.md,
            SRe.size.md
        ],
        lg: [
            kRe.lg,
            j5e.lg,
            SRe.size.lg
        ],
        xl: [
            kRe.xl,
            j5e.xl,
            SRe.size.xl
        ]
    },
    pillSize: SRe.pillSize,
    typography: SRe.typography,
    labelGroup: EKo.labelGroup,
    kbs: [
        Gj.root,
        EKo.kbs
    ]
};

}
