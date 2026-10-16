import { bk, n$ } from "./Scalar_2.js";
import { x } from "./tslib.es6.js";
var Vwi;
export { Vwi };
var __wakaru_rZc_initialized = false;
export function rZc() {
if (__wakaru_rZc_initialized) return;
__wakaru_rZc_initialized = true;
x(), n$(), Vwi = {
    identify: (e)=>typeof e == "boolean",
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
    resolve: (e)=>new bk(e[0] === "t" || e[0] === "T"),
    stringify ({ source: e, value: t }, n) {
        if (e && Vwi.test.test(e)) {
            const i = e[0] === "t" || e[0] === "T";
            if (t === i) return e;
        }
        return t ? n.options.trueStr : n.options.falseStr;
    }
};

}
