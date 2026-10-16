import { init_parseDef } from "../parseDef.js";
import { init_branded } from "./branded.js";
import { init_string } from "./string.js";
import { init_zod } from "../../../../../../zod@3.25.76/node_modules/zod/index.js";
var __wakaru_init_record_initialized = false;
export function init_record() {
if (__wakaru_init_record_initialized) return;
__wakaru_init_record_initialized = true;
init_zod();
init_parseDef();
init_string();
init_branded();

}
