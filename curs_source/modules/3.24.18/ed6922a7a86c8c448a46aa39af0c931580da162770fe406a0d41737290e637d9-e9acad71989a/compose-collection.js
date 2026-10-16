import { n$ } from "./Scalar_2.js";
import { sgt } from "./YAMLMap.js";
import { agt } from "./YAMLSeq.js";
import { NE } from "./identity.js";
import { QEg } from "./resolve-block-map.js";
import { exg } from "./resolve-block-seq.js";
import { nxg } from "./resolve-flow-collection.js";
import { x } from "./tslib.es6.js";
var __wakaru_rxg_initialized = false;
export function rxg() {
if (__wakaru_rxg_initialized) return;
__wakaru_rxg_initialized = true;
x(), NE(), n$(), sgt(), agt(), QEg(), exg(), nxg();

}
