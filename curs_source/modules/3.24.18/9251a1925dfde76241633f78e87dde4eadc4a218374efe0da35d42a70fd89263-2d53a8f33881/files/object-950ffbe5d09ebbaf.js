import { init_parseDef } from "../parseDef.js";
import { init_zod } from "../../../../../../zod@3.25.76/node_modules/zod/index.js";
var __wakaru_init_object_initialized = false;
export function init_object() {
if (__wakaru_init_object_initialized) return;
__wakaru_init_object_initialized = true;
init_zod();
init_parseDef();

}
