import { bSt, y8t } from "./YAMLSeq.js";
import { lR, vSt } from "./identity.js";
import { E } from "./tslib.es6.js";
var S8t;
export { S8t };
var __wakaru_Oai_initialized = false;
export function Oai() {
if (__wakaru_Oai_initialized) return;
__wakaru_Oai_initialized = true;
E(), lR(), y8t(), S8t = {
    collection: "seq",
    default: !0,
    nodeClass: bSt,
    tag: "tag:yaml.org,2002:seq",
    resolve (t, e) {
        return vSt(t) || e("Expected a sequence for this tag"), t;
    },
    createNode: (t, e, n)=>bSt.from(t, e, n)
};

}
