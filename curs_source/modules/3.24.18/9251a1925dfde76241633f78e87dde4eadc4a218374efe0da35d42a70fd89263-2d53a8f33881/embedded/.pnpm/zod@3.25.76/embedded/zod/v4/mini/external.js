import { init_core4 } from "../core/index.js";
import { init_locales } from "../locales/index.js";
import { init_checks3 } from "./checks.js";
import { init_coerce2 } from "./coerce.js";
import { init_iso2 } from "./iso.js";
import { init_parse4 } from "./parse.js";
import { init_schemas3 } from "./schemas.js";
var __wakaru_init_external3_initialized = false;
export function init_external3() {
if (__wakaru_init_external3_initialized) return;
__wakaru_init_external3_initialized = true;
init_core4();
init_parse4();
init_schemas3();
init_checks3();
init_locales();
init_iso2();
init_coerce2();

}
