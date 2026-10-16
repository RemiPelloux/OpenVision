import { x } from "./tslib.es6.js";
import { Qys, a$ } from "./utils_18.js";
var Jys, eSs, SIi, iCn, kIi, VEl, tSs;
export { Jys, SIi, VEl, eSs, iCn, kIi, tSs };
var __wakaru_$qg_initialized = false;
export function $qg() {
if (__wakaru_$qg_initialized) return;
__wakaru_$qg_initialized = true;
x(), Qys(), Jys = a$`\[\^?`, eSs = `c.? | C(?:-.?)?|${a$`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${a$`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${a$`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${a$`o\{[^\}]*\}?`}|${a$`\d{1,3}`}`, SIi = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/, iCn = new RegExp(a$`
  \\ (?:
    ${eSs}
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
  | (?:${SIi.source})+
  | ${Jys}
  | .
`.replace(/\s+/g, ""), "gsu"), kIi = new RegExp(a$`
  \\ (?:
    ${eSs}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${Jys}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu"), VEl = new Set([
    "COUNT",
    "CMP",
    "ERROR",
    "FAIL",
    "MAX",
    "MISMATCH",
    "SKIP",
    "TOTAL_COUNT"
]), tSs = new Map([
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
]);

}
