import { DY, tC } from "./Scalar_2.js";
import { E } from "./tslib.es6.js";
var Hxr;
export { Hxr };
var __wakaru_PJd_initialized = false;
export function PJd() {
if (__wakaru_PJd_initialized) return;
__wakaru_PJd_initialized = true;
E(), DY(), Hxr = {
    identify: (t)=>typeof t == "boolean",
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
    resolve: (t)=>new tC(t[0] === "t" || t[0] === "T"),
    stringify ({ source: t, value: e }, n) {
        if (t && Hxr.test.test(t)) {
            const i = t[0] === "t" || t[0] === "T";
            if (e === i) return t;
        }
        return e ? n.options.trueStr : n.options.falseStr;
    }
};

}
