import { Yle, sgt } from "./YAMLMap.js";
import { Jmt, NE } from "./identity.js";
import { x } from "./tslib.es6.js";
var ogt;
export { ogt };
var __wakaru_byn_initialized = false;
export function byn() {
if (__wakaru_byn_initialized) return;
__wakaru_byn_initialized = true;
x(), NE(), sgt(), ogt = {
    collection: "map",
    default: !0,
    nodeClass: Yle,
    tag: "tag:yaml.org,2002:map",
    resolve (e, t) {
        return Jmt(e) || t("Expected a mapping for this tag"), e;
    },
    createNode: (e, t, n)=>Yle.from(e, t, n)
};

}
