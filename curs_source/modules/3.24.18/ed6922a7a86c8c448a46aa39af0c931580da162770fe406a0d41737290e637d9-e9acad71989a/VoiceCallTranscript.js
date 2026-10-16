import { Vzl } from "./AgentTranscriptRow.js";
import { jO } from "./IconButton.js";
import { FW } from "./Menu.js";
import { fC } from "./Text.js";
import { qou } from "./VoiceCallCard.js";
import { $Zf, BZf, D_t, FZf, NZf, OZf, UZf } from "./f0s.js";
import { sp } from "./icon.js";
import { Oc } from "./stylex.js";
import { x } from "./tslib.es6.js";
import { bau } from "./voice-call-palette.js";
import { memo as LZf } from "./react-runtime/react/esm-index-production.js";
import { jsx as dee } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as xUt } from "./react-runtime/react/esm-compiler-runtime-production.js";
var pFi, ncu, icu, PZe;
export { PZe, icu, ncu, pFi };
var __wakaru_HZf_initialized = false;
export function HZf() {
if (__wakaru_HZf_initialized) return;
__wakaru_HZf_initialized = true;
"use strict";
x(), Oc(), Vzl(), qou(), bau(), fC(), FW(), jO(), sp(), pFi = {
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
    pending: (e)=>[
            {
                kZKoxP: e != null ? "ui-16ye13r" : e,
                $$css: !0
            },
            {
                "--x-height": ((t)=>typeof t == "number" ? t + "px" : t ?? void 0)(e)
            }
        ]
}, ncu = LZf(function(t) {
    const n = xUt(11), { turn: i } = t, r = i.speaker;
    let s;
    n[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
        0: {},
        1: {
            className: "ui-1qt0s3j"
        }
    }, n[0] = s) : s = n[0];
    const o = s[(i.speaker !== "user") << 0];
    let a;
    n[1] !== i ? (a = UZf(i), n[1] = i, n[2] = a) : a = n[2];
    let c;
    n[3] !== a ? (c = dee(D_t, {
        row: a
    }), n[3] = a, n[4] = c) : c = n[4];
    let l;
    n[5] !== o || n[6] !== c ? (l = dee("div", {
        ...o,
        children: c
    }), n[5] = o, n[6] = c, n[7] = l) : l = n[7];
    let u;
    return n[8] !== l || n[9] !== i.speaker ? (u = dee("div", {
        className: "ui-9f619 ui-1g424wj ui-vueqy4 ui-10zawnr ui-1l6g0p1 ui-1hzamyx",
        "data-speaker": r,
        children: l
    }), n[8] = l, n[9] = i.speaker, n[10] = u) : u = n[10], u;
}), icu = {
    className: "ui-1iyjqo2 ui-s83m0k ui-1r8uery ui-2lwn1j"
}, PZe = {
    Panel: NZf,
    NothingSaid: OZf,
    Turns: FZf,
    Empty: BZf,
    Turn: ncu,
    PendingTurn: $Zf,
    scrollerProps: icu
};

}
