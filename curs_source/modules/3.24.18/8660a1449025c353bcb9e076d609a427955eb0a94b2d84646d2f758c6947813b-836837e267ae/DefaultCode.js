import { Qla } from "./CodeTokenizerProvider.js";
import { KlS } from "./KTh.js";
import { ar, gn } from "./LYd.js";
import { qu } from "./attach.js";
import { Eit } from "./code-token.js";
import { jlS } from "./default-code-tokenization.js";
import { GRh } from "./line-window.js";
import { JRh, QRh, XRh, ZRh, ccS } from "./nca.js";
import { Va } from "./stylex.js";
import { B5e } from "./tokens.stylex.js";
import { E } from "./tslib.es6.js";
import { ecS } from "./use-line-window.js";
import { c as VRh } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsxs as ica } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsx as mUt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as tcS } from "./react-runtime/react/esm-index-production.js";
var n2h, oca, aca, lca, cca, i2h, uca, r2h, s2h, o2h, a2h, l2h;
export { a2h, aca, cca, i2h, l2h, lca, n2h, o2h, oca, r2h, s2h, uca };
var __wakaru_dca_initialized = false;
export function dca() {
if (__wakaru_dca_initialized) return;
__wakaru_dca_initialized = true;
"use strict";
E(), Va(), B5e(), Qla(), Eit(), jlS(), GRh(), KlS(), ecS(), qu(), n2h = {
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
}, oca = {
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
}, aca = {
    base: {
        k1xSpc: "ui-78zum5",
        kAzted: "ui-10fesj9",
        $$css: !0
    },
    highlighted: {
        kWkggS: "ui-ri19xs",
        $$css: !0
    }
}, lca = {
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
}, cca = {
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
}, i2h = {
    base: {
        kVAEAm: "ui-10l6tqk",
        k87sOh: "ui-13vifvy",
        krVfgx: "ui-1ey2m1c",
        kzqmXN: "ui-1i1rx1s",
        kWkggS: "ui-1m4ooaa",
        kfzvcC: "ui-47corl",
        $$css: !0
    }
}, uca = [], r2h = {
    kind: "unsupported",
    reason: "worker-unavailable"
}, s2h = ()=>{}, o2h = 8, a2h = 1e3, l2h = tcS(function(e) {
    const n = VRh(28), { tokens: i, lineNumber: r, showLineNumbers: s, isHighlighted: o, guides: a, tabSize: l, wordWrap: c } = e;
    let u;
    n[0] !== o ? (u = gn(XRh(o)), n[0] = o, n[1] = u) : u = n[1];
    const d = u;
    let h;
    n[2] !== o ? (h = gn(ZRh(o)), n[2] = o, n[3] = h) : h = n[3];
    const p = h;
    let g;
    n[4] !== c ? (g = ar({
        rootClass: "ui-default-code__line-content",
        stylexStyles: QRh(c)
    }), n[4] = c, n[5] = g) : g = n[5];
    const f = g;
    let _;
    n[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = gn(JRh()), n[6] = _) : _ = n[6];
    const b = _, y = d.className, S = d.style;
    let k;
    n[7] !== r || n[8] !== p || n[9] !== s ? (k = s && mUt("span", {
        className: p.className,
        style: p.style,
        children: r
    }), n[7] = r, n[8] = p, n[9] = s, n[10] = k) : k = n[10];
    const C = f.className, T = f.style;
    let I;
    if (n[11] !== a || n[12] !== l) {
        let O;
        n[14] !== l ? (O = (N)=>mUt("span", {
                className: b.className,
                style: {
                    ...b.style,
                    left: `${N * l}ch`
                },
                "aria-hidden": "true"
            }, N), n[14] = l, n[15] = O) : O = n[15], I = a.map(O), n[11] = a, n[12] = l, n[13] = I;
    } else I = n[13];
    let A;
    n[16] !== i ? (A = i.map(ccS), n[16] = i, n[17] = A) : A = n[17];
    let P;
    n[18] !== f.className || n[19] !== f.style || n[20] !== I || n[21] !== A ? (P = ica("div", {
        className: C,
        style: T,
        children: [
            I,
            A
        ]
    }), n[18] = f.className, n[19] = f.style, n[20] = I, n[21] = A, n[22] = P) : P = n[22];
    let M;
    return n[23] !== d.className || n[24] !== d.style || n[25] !== P || n[26] !== k ? (M = ica("div", {
        className: y,
        style: S,
        children: [
            k,
            P
        ]
    }), n[23] = d.className, n[24] = d.style, n[25] = P, n[26] = k, n[27] = M) : M = n[27], M;
});

}
