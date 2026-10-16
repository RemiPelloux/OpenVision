import { bk, n$ } from "./Scalar_2.js";
import { AM, NE } from "./identity.js";
import { ZXc } from "./qIc.js";
import { x } from "./tslib.es6.js";
var _yn, MRe, JXc;
export { JXc, MRe, _yn };
var __wakaru_ycs_initialized = false;
export function ycs() {
if (__wakaru_ycs_initialized) return;
__wakaru_ycs_initialized = true;
x(), NE(), n$(), _yn = "<<", MRe = {
    identify: (e)=>e === _yn || typeof e == "symbol" && e.description === _yn,
    default: "key",
    tag: "tag:yaml.org,2002:merge",
    test: /^<<$/,
    resolve: ()=>Object.assign(new bk(Symbol(_yn)), {
            addToJSMap: ZXc
        }),
    stringify: ()=>_yn
}, JXc = (e, t)=>(MRe.identify(t) || AM(t) && (!t.type || t.type === bk.PLAIN) && MRe.identify(t.value)) && e?.doc.schema.tags.some((n)=>n.tag === MRe.tag && n.default);

}
