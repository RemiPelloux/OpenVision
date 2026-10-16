import { init_proto_int64 } from "../proto-int64.js";
import { init_scalar } from "../scalar.js";
var __wakaru_init_scalars_initialized = false;
export function init_scalars() {
if (__wakaru_init_scalars_initialized) return;
__wakaru_init_scalars_initialized = true;
init_proto_int64();
init_scalar();

}
