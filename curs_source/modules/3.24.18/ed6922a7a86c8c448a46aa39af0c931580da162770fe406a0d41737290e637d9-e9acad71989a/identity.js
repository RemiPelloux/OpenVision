import { k5 } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Ewi, xwi, D5e, ocs, Jwe, Zmt, Kle, Qmt, nBt, Jmt, FO, AM, egt, acs;
export { AM, D5e, Ewi, FO, Jmt, Jwe, Kle, Qmt, Zmt, acs, egt, nBt, ocs, xwi };
var __wakaru_NE_initialized = false;
export function NE() {
if (__wakaru_NE_initialized) return;
__wakaru_NE_initialized = true;
x(), Ewi = Symbol.for("yaml.alias"), xwi = Symbol.for("yaml.document"), D5e = Symbol.for("yaml.map"), ocs = Symbol.for("yaml.pair"), Jwe = Symbol.for("yaml.scalar"), Zmt = Symbol.for("yaml.seq"), Kle = Symbol.for("yaml.node.type"), Qmt = (e)=>!!e && typeof e == "object" && e[Kle] === Ewi, nBt = (e)=>!!e && typeof e == "object" && e[Kle] === xwi, Jmt = (e)=>!!e && typeof e == "object" && e[Kle] === D5e, FO = (e)=>!!e && typeof e == "object" && e[Kle] === ocs, AM = (e)=>!!e && typeof e == "object" && e[Kle] === Jwe, egt = (e)=>!!e && typeof e == "object" && e[Kle] === Zmt, acs = (e)=>(AM(e) || k5(e)) && !!e.anchor;

}
