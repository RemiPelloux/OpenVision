import { igt } from "./Pair.js";
import { sgt } from "./YAMLMap.js";
import { agt } from "./YAMLSeq.js";
import { NE } from "./identity.js";
import { Dyn } from "./resolve-end.js";
import { Jwi } from "./resolve-props.js";
import { x } from "./tslib.es6.js";
import { Gcs } from "./util-contains-newline.js";
import { NZc } from "./util-map-includes.js";
var eCi, tCi;
export { eCi, tCi };
var __wakaru_nxg_initialized = false;
export function nxg() {
if (__wakaru_nxg_initialized) return;
__wakaru_nxg_initialized = true;
x(), NE(), igt(), sgt(), agt(), Dyn(), Jwi(), Gcs(), NZc(), eCi = "Block collections are not allowed within flow collections", tCi = (e)=>e && (e.type === "block-map" || e.type === "block-seq");

}
