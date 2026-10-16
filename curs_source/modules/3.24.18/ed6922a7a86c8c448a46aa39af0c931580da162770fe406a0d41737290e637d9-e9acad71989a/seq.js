import { agt, zKe } from "./YAMLSeq.js";
import { NE, egt } from "./identity.js";
import { x } from "./tslib.es6.js";
var cgt;
export { cgt };
var __wakaru_yyn_initialized = false;
export function yyn() {
if (__wakaru_yyn_initialized) return;
__wakaru_yyn_initialized = true;
x(), NE(), agt(), cgt = {
    collection: "seq",
    default: !0,
    nodeClass: zKe,
    tag: "tag:yaml.org,2002:seq",
    resolve (e, t) {
        return egt(e) || t("Expected a sequence for this tag"), e;
    },
    createNode: (e, t, n)=>zKe.from(e, t, n)
};

}
