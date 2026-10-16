import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
function bdr(r, e) {
    return a;
    function a(s) {
        return r.enter("lineEnding"), r.consume(s), r.exit("lineEnding"), wc(r, e, "linePrefix");
    }
}
var iMe;
export { bdr, iMe };
var __wakaru_Y3i_initialized = false;
export function Y3i() {
if (__wakaru_Y3i_initialized) return;
__wakaru_Y3i_initialized = true;
ng(), iMe = {
    name: "lineEnding",
    tokenize: bdr
}, i(bdr, "tokenizeLineEnding");

}
