import { aQo, wli } from "./shared.js";
import { E } from "./tslib.es6.js";
var Gnt, cQo, U7y;
export { Gnt, U7y, cQo };
var __wakaru_H8t_initialized = false;
export function H8t() {
if (__wakaru_H8t_initialized) return;
__wakaru_H8t_initialized = true;
E(), aQo(), Gnt = typeof CSS < "u" && !!CSS.supports?.("-webkit-backdrop-filter:none"), cQo = !Gnt && wli.includes("firefox"), U7y = !Gnt && wli.includes("chrom");

}
