import { bk, n$ } from "./Scalar_2.js";
import { x } from "./tslib.es6.js";
var kyn;
export { kyn };
var __wakaru_kcs_initialized = false;
export function kcs() {
if (__wakaru_kcs_initialized) return;
__wakaru_kcs_initialized = true;
x(), n$(), kyn = {
    identify: (e)=>e == null,
    createNode: ()=>new bk(null),
    default: !0,
    tag: "tag:yaml.org,2002:null",
    test: /^(?:~|[Nn]ull|NULL)?$/,
    resolve: ()=>new bk(null),
    stringify: ({ source: e }, t)=>typeof e == "string" && kyn.test.test(e) ? e : t.options.nullStr
};

}
