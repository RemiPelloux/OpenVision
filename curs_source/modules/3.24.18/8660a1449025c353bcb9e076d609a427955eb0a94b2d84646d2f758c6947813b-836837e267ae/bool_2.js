import { GJd } from "./LYd.js";
import { DY, tC } from "./Scalar_2.js";
import { E } from "./tslib.es6.js";
var PYo, MYo;
export { MYo, PYo };
var __wakaru_u4y_initialized = false;
export function u4y() {
if (__wakaru_u4y_initialized) return;
__wakaru_u4y_initialized = true;
E(), DY(), PYo = {
    identify: (t)=>t === !0,
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
    resolve: ()=>new tC(!0),
    stringify: GJd
}, MYo = {
    identify: (t)=>t === !1,
    default: !0,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
    resolve: ()=>new tC(!1),
    stringify: GJd
};

}
