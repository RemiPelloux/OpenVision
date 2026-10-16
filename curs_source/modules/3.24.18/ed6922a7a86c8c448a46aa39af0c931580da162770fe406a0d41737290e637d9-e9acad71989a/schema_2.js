import { bk, n$ } from "./Scalar_2.js";
import { byn, ogt } from "./map_2.js";
import { lZc } from "./qIc.js";
import { cgt, yyn } from "./seq.js";
import { x } from "./tslib.es6.js";
var Tyn, uZc, dZc, hZc;
export { Tyn, dZc, hZc, uZc };
var __wakaru_GEg_initialized = false;
export function GEg() {
if (__wakaru_GEg_initialized) return;
__wakaru_GEg_initialized = true;
x(), n$(), byn(), yyn(), Tyn = ({ value: e })=>JSON.stringify(e), uZc = [
    {
        identify: (e)=>typeof e == "string",
        default: !0,
        tag: "tag:yaml.org,2002:str",
        resolve: (e)=>e,
        stringify: Tyn
    },
    {
        identify: (e)=>e == null,
        createNode: ()=>new bk(null),
        default: !0,
        tag: "tag:yaml.org,2002:null",
        test: /^null$/,
        resolve: ()=>null,
        stringify: Tyn
    },
    {
        identify: (e)=>typeof e == "boolean",
        default: !0,
        tag: "tag:yaml.org,2002:bool",
        test: /^true$|^false$/,
        resolve: (e)=>e === "true",
        stringify: Tyn
    },
    {
        identify: lZc,
        default: !0,
        tag: "tag:yaml.org,2002:int",
        test: /^-?(?:0|[1-9][0-9]*)$/,
        resolve: (e, t, { intAsBigInt: n })=>n ? BigInt(e) : parseInt(e, 10),
        stringify: ({ value: e })=>lZc(e) ? e.toString() : JSON.stringify(e)
    },
    {
        identify: (e)=>typeof e == "number",
        default: !0,
        tag: "tag:yaml.org,2002:float",
        test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
        resolve: (e)=>parseFloat(e),
        stringify: Tyn
    }
], dZc = {
    default: !0,
    tag: "",
    test: /^/,
    resolve (e, t) {
        return t(`Unresolved plain scalar ${JSON.stringify(e)}`), e;
    }
}, hZc = [
    ogt,
    cgt
].concat(uZc, dZc);

}
