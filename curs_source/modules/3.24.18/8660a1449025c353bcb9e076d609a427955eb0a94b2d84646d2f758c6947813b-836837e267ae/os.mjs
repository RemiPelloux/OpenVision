import { LXt, i3i, kxf, oLl } from "./shared.mjs";
import { E } from "./tslib.es6.js";
var _Ss, aLl, lLl, cLl, Cxf, Txf, uLl;
export { Cxf, Txf, _Ss, aLl, cLl, lLl, uLl };
var __wakaru_Exf_initialized = false;
export function Exf() {
if (__wakaru_Exf_initialized) return;
__wakaru_Exf_initialized = true;
E(), oLl(), _Ss = /^i(os$|p)/.test(LXt) || LXt === "macintel" && kxf > 1, aLl = "android", lLl = LXt === aLl || i3i.includes(aLl), cLl = !_Ss && LXt.startsWith("mac"), Cxf = LXt.startsWith("win"), Txf = !lLl && /^(linux|chrome os)/.test(LXt), uLl = cLl || _Ss;

}
