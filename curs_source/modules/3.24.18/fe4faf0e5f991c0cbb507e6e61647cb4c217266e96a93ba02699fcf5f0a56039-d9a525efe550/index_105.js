import { Mxi } from "./parse.js";
import { Rxi } from "./postprocess.js";
import { Pxi } from "./preprocess.js";
var __wakaru_jxi_initialized = false;
export function jxi() {
if (__wakaru_jxi_initialized) return;
__wakaru_jxi_initialized = true;
Mxi(), Rxi(), Pxi();

}
