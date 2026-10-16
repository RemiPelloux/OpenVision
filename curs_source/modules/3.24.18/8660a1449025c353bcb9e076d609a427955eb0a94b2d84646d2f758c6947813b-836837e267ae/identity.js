import { qj } from "./LYd.js";
import { E } from "./tslib.es6.js";
var Cxr, Txr, Ant, aYo, W5e, h8t, Mwe, p8t, h_n, fSt, dB, cL, vSt, lYo;
export { Ant, Cxr, Mwe, Txr, W5e, aYo, cL, dB, fSt, h8t, h_n, lYo, p8t, vSt };
var __wakaru_lR_initialized = false;
export function lR() {
if (__wakaru_lR_initialized) return;
__wakaru_lR_initialized = true;
E(), Cxr = Symbol.for("yaml.alias"), Txr = Symbol.for("yaml.document"), Ant = Symbol.for("yaml.map"), aYo = Symbol.for("yaml.pair"), W5e = Symbol.for("yaml.scalar"), h8t = Symbol.for("yaml.seq"), Mwe = Symbol.for("yaml.node.type"), p8t = (t)=>!!t && typeof t == "object" && t[Mwe] === Cxr, h_n = (t)=>!!t && typeof t == "object" && t[Mwe] === Txr, fSt = (t)=>!!t && typeof t == "object" && t[Mwe] === Ant, dB = (t)=>!!t && typeof t == "object" && t[Mwe] === aYo, cL = (t)=>!!t && typeof t == "object" && t[Mwe] === W5e, vSt = (t)=>!!t && typeof t == "object" && t[Mwe] === h8t, lYo = (t)=>(cL(t) || qj(t)) && !!t.anchor;

}
