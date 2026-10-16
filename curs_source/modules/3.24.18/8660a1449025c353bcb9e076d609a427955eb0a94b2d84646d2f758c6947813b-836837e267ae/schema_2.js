import { OJd } from "./LYd.js";
import { DY, tC } from "./Scalar_2.js";
import { Lai, b8t } from "./map_2.js";
import { Oai, S8t } from "./seq.js";
import { E } from "./tslib.es6.js";
var $ai, FJd, BJd, UJd;
export { $ai, BJd, FJd, UJd };
var __wakaru_c4y_initialized = false;
export function c4y() {
if (__wakaru_c4y_initialized) return;
__wakaru_c4y_initialized = true;
E(), DY(), Lai(), Oai(), $ai = ({ value: t })=>JSON.stringify(t), FJd = [
    {
        identify: (t)=>typeof t == "string",
        default: !0,
        tag: "tag:yaml.org,2002:str",
        resolve: (t)=>t,
        stringify: $ai
    },
    {
        identify: (t)=>t == null,
        createNode: ()=>new tC(null),
        default: !0,
        tag: "tag:yaml.org,2002:null",
        test: /^null$/,
        resolve: ()=>null,
        stringify: $ai
    },
    {
        identify: (t)=>typeof t == "boolean",
        default: !0,
        tag: "tag:yaml.org,2002:bool",
        test: /^true$|^false$/,
        resolve: (t)=>t === "true",
        stringify: $ai
    },
    {
        identify: OJd,
        default: !0,
        tag: "tag:yaml.org,2002:int",
        test: /^-?(?:0|[1-9][0-9]*)$/,
        resolve: (t, e, { intAsBigInt: n })=>n ? BigInt(t) : parseInt(t, 10),
        stringify: ({ value: t })=>OJd(t) ? t.toString() : JSON.stringify(t)
    },
    {
        identify: (t)=>typeof t == "number",
        default: !0,
        tag: "tag:yaml.org,2002:float",
        test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
        resolve: (t)=>parseFloat(t),
        stringify: $ai
    }
], BJd = {
    default: !0,
    tag: "",
    test: /^/,
    resolve (t, e) {
        return e(`Unresolved plain scalar ${JSON.stringify(t)}`), t;
    }
}, UJd = [
    b8t,
    S8t
].concat(FJd, BJd);

}
