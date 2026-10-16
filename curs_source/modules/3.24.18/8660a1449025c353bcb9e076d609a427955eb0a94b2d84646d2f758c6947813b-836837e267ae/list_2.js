import { kXy } from "./check-bullet-ordered.js";
import { yXy } from "./check-bullet-other.js";
import { gra } from "./check-bullet.js";
import { Tfh } from "./check-rule.js";
import { E } from "./tslib.es6.js";
var __wakaru_CXy_initialized = false;
export function CXy() {
if (__wakaru_CXy_initialized) return;
__wakaru_CXy_initialized = true;
E(), gra(), yXy(), kXy(), Tfh();

}
