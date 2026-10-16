import { EAh } from "./index_132.js";
import { E } from "./tslib.es6.js";
import { BaS, CAh } from "./utils-internals.js";
var xla, Ala, W3r;
export { Ala, W3r, xla };
var __wakaru_IAh_initialized = false;
export function IAh() {
if (__wakaru_IAh_initialized) return;
__wakaru_IAh_initialized = true;
E(), BaS(), EAh(), xla = new RegExp(String.raw`(?<noncapturingStart>${CAh})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`, "gsu"), Ala = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`, W3r = new RegExp(String.raw`
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
| (?<qBase>${Ala})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ""), "gsu");

}
