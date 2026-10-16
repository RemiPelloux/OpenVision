import { init_parseDef } from "../parseDef.js";
import { init_record } from "./record.js";
var __wakaru_init_map_initialized = false;
export function init_map() {
if (__wakaru_init_map_initialized) return;
__wakaru_init_map_initialized = true;
init_parseDef();
init_record();

}
