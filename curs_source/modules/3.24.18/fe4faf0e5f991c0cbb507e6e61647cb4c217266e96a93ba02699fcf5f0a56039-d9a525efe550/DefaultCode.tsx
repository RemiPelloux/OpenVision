import { e6r } from "./CodeTokenizerProvider.tsx";
import { V5i } from "./Iwr.js";
import { $e } from "./attach.ts";
import { DB } from "./code-token.ts";
import { Z5i } from "./default-code-tokenization.ts";
import { HOt, JOt, KOt, VOt, WOt, XOt, YOt, ZOt, _6r, b6r, g6r, h6r, k6r, v6r, w6r, wPe, x6r, y6r } from "./f6r.js";
import { ji } from "./index_2.ts";
import { s6r } from "./line-window.ts";
import { i } from "./plugin-brand-icon.js";
import { Ho, wn } from "./stylex.mjs";
import { yme } from "./tokens.stylex.ts";
import { K5i } from "./use-line-window.ts";
import { memo as Bdi } from "./react-runtime/react/esm-index-production.js";
import { jsx as Cz } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as m8t } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as uHn } from "./react-runtime/react/esm-compiler-runtime-production.js";
var C6r, QOt, ezt, tzt, nzt, S6r, rzt, E6r, A6r, T6r, $6r, I6r;
export { $6r, A6r, C6r, E6r, I6r, QOt, S6r, T6r, ezt, nzt, rzt, tzt };
var __wakaru_X5i_initialized = false;
export function X5i() {
if (__wakaru_X5i_initialized) return;
__wakaru_X5i_initialized = true;
"use strict";
Ho(), ji(), yme(), e6r(), DB(), Z5i(), s6r(), V5i(), K5i(), C6r = {
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
}, QOt = {
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
}, ezt = {
    base: {
        k1xSpc: "ui-78zum5",
        kAzted: "ui-10fesj9",
        $$css: !0
    },
    highlighted: {
        kWkggS: "ui-ri19xs",
        $$css: !0
    }
}, tzt = {
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
}, nzt = {
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
}, S6r = {
    base: {
        kVAEAm: "ui-10l6tqk",
        k87sOh: "ui-13vifvy",
        krVfgx: "ui-1ey2m1c",
        kzqmXN: "ui-1i1rx1s",
        kWkggS: "ui-1m4ooaa",
        kfzvcC: "ui-47corl",
        $$css: !0
    }
}, i(WOt, "defaultCodeRootStyleForProps"), i(HOt, "defaultCodeContentStyleForProps"), i(ZOt, "defaultCodeLineStyleForProps"), i(VOt, "defaultCodeLineNumberStyleForProps"), i(KOt, "defaultCodeLineContentStyleForProps"), i(XOt, "defaultCodeIndentGuideStyleForProps"), rzt = [], E6r = {
    kind: "unsupported",
    reason: "worker-unavailable"
}, A6r = i(()=>{}, "NOTHING_TO_RELEASE"), i(h6r, "offThreadSupport"), i(g6r, "getIndentLevel"), i(b6r, "isBlankLine"), i(wPe, "lineNumbersBetween"), T6r = 8, $6r = 1e3, i(YOt, "advanceWindowPrefix"), i(JOt, "readWindowTokens"), I6r = Bdi(i(function(e) {
    const a = uHn(28), { tokens: s, lineNumber: l, showLineNumbers: u, isHighlighted: p, guides: m, tabSize: b, wordWrap: g } = e;
    let _;
    a[0] !== p ? (_ = wn(ZOt(p)), a[0] = p, a[1] = _) : _ = a[1];
    const v = _;
    let x;
    a[2] !== p ? (x = wn(VOt(p)), a[2] = p, a[3] = x) : x = a[3];
    const C = x;
    let E;
    a[4] !== g ? (E = $e({
        rootClass: "ui-default-code__line-content",
        stylexStyles: KOt(g)
    }), a[4] = g, a[5] = E) : E = a[5];
    const A = E;
    let $;
    a[6] === Symbol.for("react.memo_cache_sentinel") ? ($ = wn(XOt()), a[6] = $) : $ = a[6];
    const I = $, N = v.className, R = v.style;
    let P;
    a[7] !== l || a[8] !== C || a[9] !== u ? (P = u && Cz("span", {
        className: C.className,
        style: C.style,
        children: l
    }), a[7] = l, a[8] = C, a[9] = u, a[10] = P) : P = a[10];
    const L = A.className, j = A.style;
    let z;
    if (a[11] !== m || a[12] !== b) {
        let V;
        a[14] !== b ? (V = i((H)=>Cz("span", {
                className: I.className,
                style: {
                    ...I.style,
                    left: `${H * b}ch`
                },
                "aria-hidden": "true"
            }, H), "t11"), a[14] = b, a[15] = V) : V = a[15], z = m.map(V), a[11] = m, a[12] = b, a[13] = z;
    } else z = a[13];
    let q;
    a[16] !== s ? (q = s.map(x6r), a[16] = s, a[17] = q) : q = a[17];
    let O;
    a[18] !== A.className || a[19] !== A.style || a[20] !== z || a[21] !== q ? (O = m8t("div", {
        className: L,
        style: j,
        children: [
            z,
            q
        ]
    }), a[18] = A.className, a[19] = A.style, a[20] = z, a[21] = q, a[22] = O) : O = a[22];
    let B;
    return a[23] !== v.className || a[24] !== v.style || a[25] !== O || a[26] !== P ? (B = m8t("div", {
        className: N,
        style: R,
        children: [
            P,
            O
        ]
    }), a[23] = v.className, a[24] = v.style, a[25] = O, a[26] = P, a[27] = B) : B = a[27], B;
}, "CodeLine")), i(y6r, "DefaultCode"), i(w6r, "_temp5"), i(_6r, "_temp4"), i(k6r, "_temp3"), i(v6r, "_temp2"), i(x6r, "_temp");

}
