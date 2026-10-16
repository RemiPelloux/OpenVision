import { Ctp } from "./AgentTranscriptRow.js";
import { Q3 } from "./IconButton.js";
import { BW } from "./Menu.js";
import { dy } from "./Text.js";
import { USp } from "./VoiceCallCard.js";
import { fd } from "./icon.js";
import { Bg1, Dg1, Fg1, Lg1, Ng1, Og1, Trt } from "./ipa.js";
import { Va } from "./stylex.js";
import { E } from "./tslib.es6.js";
import { WAa } from "./voice-call-palette.js";
import { memo as Mg1 } from "./react-runtime/react/esm-index-production.js";
import { jsx as Yhe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Zwn } from "./react-runtime/react/esm-compiler-runtime-production.js";
var Ajr, lkp, ckp, nst;
export { Ajr, ckp, lkp, nst };
var __wakaru_ukp_initialized = false;
export function ukp() {
if (__wakaru_ukp_initialized) return;
__wakaru_ukp_initialized = true;
"use strict";
E(), Va(), Ctp(), USp(), WAa(), dy(), BW(), Q3(), fd(), Ajr = {
    panel: {
        kB7OPa: "ui-9f619",
        k1xSpc: "ui-78zum5",
        kXwgrk: "ui-dt5ytf",
        kZKoxP: "ui-5yr21d",
        kAzted: "ui-2lwn1j",
        k7Eaqz: "ui-euugli",
        $$css: !0
    },
    empty: {
        kSGwAc: "ui-amitd3",
        $$css: !0
    },
    pending: (t)=>[
            {
                kZKoxP: t != null ? "ui-16ye13r" : t,
                $$css: !0
            },
            {
                "--x-height": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t)
            }
        ]
}, lkp = Mg1(function(e) {
    const n = Zwn(11), { turn: i } = e, r = i.speaker;
    let s;
    n[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
        0: {},
        1: {
            className: "ui-1qt0s3j"
        }
    }, n[0] = s) : s = n[0];
    const o = s[(i.speaker !== "user") << 0];
    let a;
    n[1] !== i ? (a = Fg1(i), n[1] = i, n[2] = a) : a = n[2];
    let l;
    n[3] !== a ? (l = Yhe(Trt, {
        row: a
    }), n[3] = a, n[4] = l) : l = n[4];
    let c;
    n[5] !== o || n[6] !== l ? (c = Yhe("div", {
        ...o,
        children: l
    }), n[5] = o, n[6] = l, n[7] = c) : c = n[7];
    let u;
    return n[8] !== c || n[9] !== i.speaker ? (u = Yhe("div", {
        className: "ui-9f619 ui-1g424wj ui-vueqy4 ui-10zawnr ui-1l6g0p1 ui-1hzamyx",
        "data-speaker": r,
        children: c
    }), n[8] = c, n[9] = i.speaker, n[10] = u) : u = n[10], u;
}), ckp = {
    className: "ui-1iyjqo2 ui-s83m0k ui-1r8uery ui-2lwn1j"
}, nst = {
    Panel: Dg1,
    NothingSaid: Ng1,
    Turns: Lg1,
    Empty: Og1,
    Turn: lkp,
    PendingTurn: Bg1,
    scrollerProps: ckp
};

}
