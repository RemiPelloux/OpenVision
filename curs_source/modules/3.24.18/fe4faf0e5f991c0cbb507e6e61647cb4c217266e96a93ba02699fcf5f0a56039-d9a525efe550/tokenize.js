import { B3r, BFt, DFt, FFt, G3r, GB, H3r, J3r, K3r, LFt, MP, O3r, OFt, Q3r, U3r, V3r, W3r, X3r, Y3r, Z3r, axr, exr, ixr, nxr, oxr, q3r, qFt, rxr, txr, z3r, zFt, zS } from "./Iwr.js";
import { i } from "./plugin-brand-icon.js";
import { Ob, jFt } from "./utils.js";
var UFt, GFt, XRe, jhe, YRe, sxr, WFt;
export { GFt, UFt, WFt, XRe, YRe, jhe, sxr };
var __wakaru_N5i_initialized = false;
export function N5i() {
if (__wakaru_N5i_initialized) return;
__wakaru_N5i_initialized = true;
"use strict";
jFt(), UFt = Ob`\[\^?`, GFt = `c.? | C(?:-.?)?|${Ob`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${Ob`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${Ob`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${Ob`o\{[^\}]*\}?`}|${Ob`\d{1,3}`}`, XRe = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/, jhe = new RegExp(Ob`
  \\ (?:
    ${GFt}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*[^\)]*\)?
  )?
  | (?:${XRe.source})+
  | ${UFt}
  | .
`.replace(/\s+/g, ""), "gsu"), YRe = new RegExp(Ob`
  \\ (?:
    ${GFt}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${UFt}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu"), i(O3r, "M"), i(z3r, "F"), i(B3r, "K"), i(q3r, "X"), i(LFt, "x"), i(U3r, "P"), i(DFt, "w"), i(FFt, "A"), i(zS, "d"), i(G3r, "z"), i(W3r, "U"), i(H3r, "H"), i(OFt, "E"), i(MP, "k"), i(zFt, "I"), i(Z3r, "W"), i(V3r, "Q"), i(GB, "f"), i(K3r, "D"), i(X3r, "_"), i(Y3r, "R"), sxr = new Set([
    "COUNT",
    "CMP",
    "ERROR",
    "FAIL",
    "MAX",
    "MISMATCH",
    "SKIP",
    "TOTAL_COUNT"
]), WFt = new Map([
    [
        "a",
        7
    ],
    [
        "b",
        8
    ],
    [
        "e",
        27
    ],
    [
        "f",
        12
    ],
    [
        "n",
        10
    ],
    [
        "r",
        13
    ],
    [
        "t",
        9
    ],
    [
        "v",
        11
    ]
]), i(J3r, "Z"), i(Q3r, "L"), i(exr, "j"), i(BFt, "O"), i(txr, "q"), i(nxr, "V"), i(qFt, "v"), i(rxr, "Y"), i(ixr, "J"), i(axr, "ee"), i(oxr, "te");

}
