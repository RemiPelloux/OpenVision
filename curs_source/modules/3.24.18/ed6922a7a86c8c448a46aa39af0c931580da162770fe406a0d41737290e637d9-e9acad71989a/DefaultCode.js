import { xSs } from "./CodeTokenizerProvider.js";
import { AIl, DIl, HKg, MIl, RIl } from "./DSs.js";
import { TKg } from "./I0l.js";
import { hh } from "./attach.js";
import { Pft } from "./code-token.js";
import { vKg } from "./default-code-tokenization.js";
import { wIl } from "./line-window.js";
import { Nn, Or } from "./qIc.js";
import { Oc } from "./stylex.js";
import { G3t } from "./tokens.stylex.js";
import { x } from "./tslib.es6.js";
import { DKg } from "./use-line-window.js";
import { c as EIl } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { memo as MKg } from "./react-runtime/react/esm-index-production.js";
import { jsxs as MSs } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as qft } from "./react-runtime/react/esm-jsx-runtime-production.js";
var NIl, LSs, NSs, OSs, FSs, OIl, BSs, FIl, BIl, UIl, $Il, HIl;
export { $Il, BIl, BSs, FIl, FSs, HIl, LSs, NIl, NSs, OIl, OSs, UIl };
var __wakaru_WIl_initialized = false;
export function WIl() {
if (__wakaru_WIl_initialized) return;
__wakaru_WIl_initialized = true;
"use strict";
x(), Oc(), G3t(), xSs(), Pft(), vKg(), wIl(), TKg(), DKg(), hh(), NIl = {
    base: {
        kGuDYH: "ui-1wm8ruf",
        k63SB2: "ui-1lfj9qp",
        kLWn49: "ui-1ja60sm",
        kWkggS: "ui-1ua6jya",
        ktR8K2: "ui-1m21r4p",
        kKi2Bq: "ui-cj37ws",
        kMv6JI: "ui-13r5tfd",
        kLKAdn: "ui-uve7l6",
        kwRFfy: "ui-yri2b",
        kGO01o: "ui-1rgtt3y",
        kZCmMZ: "ui-1c1uobl",
        "--shiki-foreground": "ui-o9w7m5",
        "--shiki-background": "ui-17ewauw",
        "--shiki-token-constant": "ui-1vakzcb",
        "--shiki-token-string": "ui-105xmc4",
        "--shiki-token-comment": "ui-1nsav61",
        "--shiki-token-keyword": "ui-1jxofbz",
        "--shiki-token-parameter": "ui-947h55",
        "--shiki-token-function": "ui-ta7kcf",
        "--shiki-token-string-expression": "ui-1iagb1a",
        "--shiki-token-punctuation": "ui-ez8t0j",
        "--shiki-token-link": "ui-i2wo5x",
        "--shiki-token-tag": "ui-1iq2d2k",
        "--shiki-token-attribute": "ui-1qoclnz",
        "--shiki-token-property": "ui-k609h7",
        "--shiki-token-type": "ui-1rqnq8e",
        "--shiki-token-variable": "ui-19gwdp1",
        "--shiki-token-class": "ui-1yfyyyg",
        "--shiki-token-language-variable": "ui-1apie5d",
        "--shiki-token-constant-variable": "ui-dcvkk1",
        $$css: !0
    }
}, LSs = {
    base: {
        k7Eaqz: "ui-1pshirs",
        ktR8K2: "ui-awy1a7",
        $$css: !0
    },
    wordWrap: {
        kzqmXN: "ui-h8yej3",
        k7Eaqz: "ui-euugli",
        ks0D6T: "ui-193iq5w",
        $$css: !0
    }
}, NSs = {
    base: {
        k1xSpc: "ui-78zum5",
        kAzted: "ui-10fesj9",
        $$css: !0
    },
    highlighted: {
        kWkggS: "ui-ri19xs",
        $$css: !0
    }
}, OSs = {
    base: {
        k7Eaqz: "ui-1264ykn",
        k9WMMc: "ui-p4054r",
        kwRFfy: "ui-t1q3vd",
        kMwMTN: "ui-4b2ntj",
        kcqcaj: "ui-ss6m8b",
        kGuDYH: "ui-y5h43f",
        kfSwDN: "ui-87ps6o",
        kmuXW: "ui-2lah0s",
        $$css: !0
    },
    highlighted: {
        kMwMTN: "ui-1wd3ewq",
        $$css: !0
    }
}, FSs = {
    base: {
        kUk6DE: "ui-98rzlu",
        khDVqt: "ui-1sdyfia",
        kVQacm: "ui-b3r6kr",
        kg5iWk: "ui-lyipyv",
        kZCmMZ: "ui-1iw6539",
        kMwMTN: "ui-lgbajd",
        kwRFfy: "ui-1fg0g13",
        kVAEAm: "ui-1n2onr6",
        $$css: !0
    },
    wordWrap: {
        k7Eaqz: "ui-euugli",
        khDVqt: "ui-126k92a",
        kVQacm: "ui-1rea2x4",
        kHjlTd: "ui-j0a0fe",
        kg5iWk: "ui-brixnn",
        $$css: !0
    }
}, OIl = {
    base: {
        kVAEAm: "ui-10l6tqk",
        k87sOh: "ui-13vifvy",
        krVfgx: "ui-1ey2m1c",
        kzqmXN: "ui-1i1rx1s",
        kWkggS: "ui-1m4ooaa",
        kfzvcC: "ui-47corl",
        $$css: !0
    }
}, BSs = [], FIl = {
    kind: "unsupported",
    reason: "worker-unavailable"
}, BIl = ()=>{}, UIl = 8, $Il = 1e3, HIl = MKg(function(t) {
    const n = EIl(28), { tokens: i, lineNumber: r, showLineNumbers: s, isHighlighted: o, guides: a, tabSize: c, wordWrap: l } = t;
    let u;
    n[0] !== o ? (u = Nn(AIl(o)), n[0] = o, n[1] = u) : u = n[1];
    const h = u;
    let p;
    n[2] !== o ? (p = Nn(RIl(o)), n[2] = o, n[3] = p) : p = n[3];
    const g = p;
    let f;
    n[4] !== l ? (f = Or({
        rootClass: "ui-default-code__line-content",
        stylexStyles: DIl(l)
    }), n[4] = l, n[5] = f) : f = n[5];
    const v = f;
    let b;
    n[6] === Symbol.for("react.memo_cache_sentinel") ? (b = Nn(MIl()), n[6] = b) : b = n[6];
    const y = b, T = h.className, E = h.style;
    let A;
    n[7] !== r || n[8] !== g || n[9] !== s ? (A = s && qft("span", {
        className: g.className,
        style: g.style,
        children: r
    }), n[7] = r, n[8] = g, n[9] = s, n[10] = A) : A = n[10];
    const R = v.className, D = v.style;
    let P;
    if (n[11] !== a || n[12] !== c) {
        let H;
        n[14] !== c ? (H = ($)=>qft("span", {
                className: y.className,
                style: {
                    ...y.style,
                    left: `${$ * c}ch`
                },
                "aria-hidden": "true"
            }, $), n[14] = c, n[15] = H) : H = n[15], P = a.map(H), n[11] = a, n[12] = c, n[13] = P;
    } else P = n[13];
    let N;
    n[16] !== i ? (N = i.map(HKg), n[16] = i, n[17] = N) : N = n[17];
    let O;
    n[18] !== v.className || n[19] !== v.style || n[20] !== P || n[21] !== N ? (O = MSs("div", {
        className: R,
        style: D,
        children: [
            P,
            N
        ]
    }), n[18] = v.className, n[19] = v.style, n[20] = P, n[21] = N, n[22] = O) : O = n[22];
    let F;
    return n[23] !== h.className || n[24] !== h.style || n[25] !== O || n[26] !== A ? (F = MSs("div", {
        className: T,
        style: E,
        children: [
            A,
            O
        ]
    }), n[23] = h.className, n[24] = h.style, n[25] = O, n[26] = A, n[27] = F) : F = n[27], F;
});

}
