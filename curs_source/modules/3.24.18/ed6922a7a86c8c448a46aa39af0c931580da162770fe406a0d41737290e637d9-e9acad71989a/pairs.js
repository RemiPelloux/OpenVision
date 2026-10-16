import { igt } from "./Pair.js";
import { n$ } from "./Scalar_2.js";
import { agt } from "./YAMLSeq.js";
import { NE } from "./identity.js";
import { gZc, mZc } from "./qIc.js";
import { x } from "./tslib.es6.js";
var zwi;
export { zwi };
var __wakaru_Acs_initialized = false;
export function Acs() {
if (__wakaru_Acs_initialized) return;
__wakaru_Acs_initialized = true;
x(), NE(), igt(), n$(), agt(), zwi = {
    collection: "seq",
    default: !1,
    tag: "tag:yaml.org,2002:pairs",
    resolve: mZc,
    createNode: gZc
};

}
