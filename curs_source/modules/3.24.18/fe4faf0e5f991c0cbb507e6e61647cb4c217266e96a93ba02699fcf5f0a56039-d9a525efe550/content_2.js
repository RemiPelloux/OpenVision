import { Ka, Zl } from "./index_41.js";
import { ng, wc } from "./index_74.js";
import { i } from "./plugin-brand-icon.js";
function kfr(r) {
    const e = r.attempt(this.parser.constructs.contentInitial, s, l);
    let a;
    return e;
    function s(m) {
        if (m === null) {
            r.consume(m);
            return;
        }
        return r.enter("lineEnding"), r.consume(m), r.exit("lineEnding"), wc(r, e, "linePrefix");
    }
    function l(m) {
        return r.enter("paragraph"), u(m);
    }
    function u(m) {
        const b = r.enter("chunkText", {
            contentType: "text",
            previous: a
        });
        return a && (a.next = b), a = b, p(m);
    }
    function p(m) {
        if (m === null) {
            r.exit("chunkText"), r.exit("paragraph"), r.consume(m);
            return;
        }
        return Ka(m) ? (r.consume(m), r.exit("chunkText"), u) : (r.consume(m), p);
    }
}
var vfr;
export { kfr, vfr };
var __wakaru_Axi_initialized = false;
export function Axi() {
if (__wakaru_Axi_initialized) return;
__wakaru_Axi_initialized = true;
ng(), Zl(), vfr = {
    tokenize: kfr
}, i(kfr, "initializeContent");

}
