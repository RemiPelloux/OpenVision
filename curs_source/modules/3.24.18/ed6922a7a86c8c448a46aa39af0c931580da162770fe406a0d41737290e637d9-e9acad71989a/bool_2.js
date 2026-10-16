import { bk, n$ } from "./Scalar_2.js";
import { vZc } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Rcs, Dcs;
export { Dcs, Rcs };
var __wakaru_VEg_initialized = false;
export function VEg() {
if (__wakaru_VEg_initialized) return;
__wakaru_VEg_initialized = true;
x(), n$(), Rcs = {
    identify: (e)=>e === !0,
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
    resolve: ()=>new bk(!0),
    stringify: vZc
}, Dcs = {
    identify: (e)=>e === !1,
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
    resolve: ()=>new bk(!1),
    stringify: vZc
};

}
