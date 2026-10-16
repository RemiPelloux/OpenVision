import { DY, tC } from "./Scalar_2.js";
import { E } from "./tslib.es6.js";
var Bai;
export { Bai };
var __wakaru_wYo_initialized = false;
export function wYo() {
if (__wakaru_wYo_initialized) return;
__wakaru_wYo_initialized = true;
E(), DY(), Bai = {
    identify: (t)=>t == null,
    createNode: ()=>new tC(null),
    default: !0,
    tag: "tag:yaml.org,2002:null",
    test: /^(?:~|[Nn]ull|NULL)?$/,
    resolve: ()=>new tC(null),
    stringify: ({ source: t }, e)=>typeof t == "string" && Bai.test.test(t) ? t : e.options.nullStr
};

}
