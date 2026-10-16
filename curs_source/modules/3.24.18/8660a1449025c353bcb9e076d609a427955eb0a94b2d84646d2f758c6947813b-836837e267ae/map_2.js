import { Dwe, _8t } from "./YAMLMap.js";
import { fSt, lR } from "./identity.js";
import { E } from "./tslib.es6.js";
var b8t;
export { b8t };
var __wakaru_Lai_initialized = false;
export function Lai() {
if (__wakaru_Lai_initialized) return;
__wakaru_Lai_initialized = true;
E(), lR(), _8t(), b8t = {
    collection: "map",
    default: !0,
    nodeClass: Dwe,
    tag: "tag:yaml.org,2002:map",
    resolve (t, e) {
        return fSt(t) || e("Expected a mapping for this tag"), t;
    },
    createNode: (t, e, n)=>Dwe.from(t, e, n)
};

}
