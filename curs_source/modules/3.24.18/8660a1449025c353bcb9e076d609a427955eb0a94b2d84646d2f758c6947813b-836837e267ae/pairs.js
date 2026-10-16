import { $Jd, HJd } from "./LYd.js";
import { f8t } from "./Pair.js";
import { DY } from "./Scalar_2.js";
import { y8t } from "./YAMLSeq.js";
import { lR } from "./identity.js";
import { E } from "./tslib.es6.js";
var qxr;
export { qxr };
var __wakaru_RYo_initialized = false;
export function RYo() {
if (__wakaru_RYo_initialized) return;
__wakaru_RYo_initialized = true;
E(), lR(), f8t(), DY(), y8t(), qxr = {
    collection: "seq",
    default: !1,
    tag: "tag:yaml.org,2002:pairs",
    resolve: $Jd,
    createNode: HJd
};

}
