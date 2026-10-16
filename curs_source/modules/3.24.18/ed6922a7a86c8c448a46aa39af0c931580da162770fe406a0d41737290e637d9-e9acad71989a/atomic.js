import { sxl } from "./index_127.js";
import { x } from "./tslib.es6.js";
import { ixl, uzg } from "./utils-internals.js";
var oSs, aSs, IIi;
export { IIi, aSs, oSs };
var __wakaru_oxl_initialized = false;
export function oxl() {
if (__wakaru_oxl_initialized) return;
__wakaru_oxl_initialized = true;
x(), uzg(), sxl(), oSs = new RegExp(String.raw`(?<noncapturingStart>${ixl})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`, "gsu"), aSs = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`, IIi = new RegExp(String.raw`
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
| (?<qBase>${aSs})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ""), "gsu");

}
