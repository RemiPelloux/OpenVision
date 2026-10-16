import { Wpi } from "./checks_3.js";
import { qpi } from "./registries_2.js";
import { DSn } from "./schemas_3.js";
import { E } from "./tslib.es6.js";
import { yb } from "./util_2.js";
var __wakaru_pkt_initialized = false;
export function pkt() {
if (__wakaru_pkt_initialized) return;
__wakaru_pkt_initialized = true;
E(), Wpi(), qpi(), DSn(), yb();

}
