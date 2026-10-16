import { E } from "./tslib.es6.js";
import { HY, yla } from "./utils_18.js";
var Sla, kla, O3r, gdi, F3r, dAh, wla;
export { F3r, O3r, Sla, dAh, gdi, kla, wla };
var __wakaru_maS_initialized = false;
export function maS() {
if (__wakaru_maS_initialized) return;
__wakaru_maS_initialized = true;
E(), yla(), Sla = HY`\[\^?`, kla = `c.? | C(?:-.?)?|${HY`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${HY`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${HY`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${HY`o\{[^\}]*\}?`}|${HY`\d{1,3}`}`, O3r = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/, gdi = new RegExp(HY`
  \\ (?:
    ${kla}
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
  | (?:${O3r.source})+
  | ${Sla}
  | .
`.replace(/\s+/g, ""), "gsu"), F3r = new RegExp(HY`
  \\ (?:
    ${kla}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${Sla}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu"), dAh = new Set([
    "COUNT",
    "CMP",
    "ERROR",
    "FAIL",
    "MAX",
    "MISMATCH",
    "SKIP",
    "TOTAL_COUNT"
]), wla = new Map([
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
