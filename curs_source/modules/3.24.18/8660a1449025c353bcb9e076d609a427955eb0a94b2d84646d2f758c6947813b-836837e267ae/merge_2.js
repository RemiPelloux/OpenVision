import { CJd } from "./LYd.js";
import { DY, tC } from "./Scalar_2.js";
import { cL, lR } from "./identity.js";
import { E } from "./tslib.es6.js";
var Nai, jHe, EJd;
export { EJd, Nai, jHe };
var __wakaru_SYo_initialized = false;
export function SYo() {
if (__wakaru_SYo_initialized) return;
__wakaru_SYo_initialized = true;
E(), lR(), DY(), Nai = "<<", jHe = {
    identify: (t)=>t === Nai || typeof t == "symbol" && t.description === Nai,
    default: "key",
    tag: "tag:yaml.org,2002:merge",
    test: /^<<$/,
    resolve: ()=>Object.assign(new tC(Symbol(Nai)), {
            addToJSMap: CJd
        }),
    stringify: ()=>Nai
}, EJd = (t, e)=>(jHe.identify(e) || cL(e) && (!e.type || e.type === tC.PLAIN) && jHe.identify(e.value)) && t?.doc.schema.tags.some((n)=>n.tag === jHe.tag && n.default);

}
