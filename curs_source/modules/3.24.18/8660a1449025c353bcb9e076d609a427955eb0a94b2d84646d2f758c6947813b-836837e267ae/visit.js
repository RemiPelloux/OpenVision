import { cYo, p_n } from "./LYd.js";
import { lR } from "./identity.js";
import { E } from "./tslib.es6.js";
var mhe, uYo, G5e;
export { G5e, mhe, uYo };
var __wakaru_Exr_initialized = false;
export function Exr() {
if (__wakaru_Exr_initialized) return;
__wakaru_Exr_initialized = true;
E(), lR(), mhe = Symbol("break visit"), uYo = Symbol("skip children"), G5e = Symbol("remove node"), p_n.BREAK = mhe, p_n.SKIP = uYo, p_n.REMOVE = G5e, cYo.BREAK = mhe, cYo.SKIP = uYo, cYo.REMOVE = G5e;

}
