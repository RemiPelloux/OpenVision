import { Igt, cSn, lds, oil } from "./shared.js";
import { x } from "./tslib.es6.js";
var Agt, uds, OBt, s0i, DDg, MDg, ail;
export { Agt, DDg, MDg, OBt, ail, s0i, uds };
var __wakaru_W5e_initialized = false;
export function W5e() {
if (__wakaru_W5e_initialized) return;
__wakaru_W5e_initialized = true;
x(), lds(), Agt = /^i(os$|p)/.test(Igt) || Igt === "macintel" && oil > 1, uds = "android", OBt = Igt === uds || cSn.includes(uds), s0i = !Agt && Igt.startsWith("mac"), DDg = Igt.startsWith("win"), MDg = !OBt && /^(linux|chrome os)/.test(Igt), ail = s0i || Agt;

}
