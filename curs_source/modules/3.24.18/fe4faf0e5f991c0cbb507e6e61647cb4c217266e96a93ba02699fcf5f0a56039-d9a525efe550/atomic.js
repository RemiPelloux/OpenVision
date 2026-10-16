import { Lxr, jxr } from "./Iwr.js";
import { Pxr } from "./index_133.js";
import { i } from "./plugin-brand-icon.js";
import { Nxr, R5i } from "./utils-internals.js";
var rOt, iOt, rPe;
export { iOt, rOt, rPe };
var __wakaru_P5i_initialized = false;
export function P5i() {
if (__wakaru_P5i_initialized) return;
__wakaru_P5i_initialized = true;
R5i(), Pxr(), rOt = new RegExp(String.raw`(?<noncapturingStart>${Nxr})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`, "gsu"), i(jxr, "atomic"), iOt = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`, rPe = new RegExp(String.raw`
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${iOt})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ""), "gsu"), i(Lxr, "possessive");

}
