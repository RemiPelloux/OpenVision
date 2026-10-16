import { config } from "../../../../../../../esm_exports8.js";
import { init_checks2 } from "./checks.js";
import { init_coerce } from "./coerce.js";
import { init_compat } from "./compat.js";
import { init_errors5 } from "./errors.js";
import { init_iso } from "./iso.js";
import { init_parse3 } from "./parse.js";
import { init_schemas2 } from "./schemas.js";
import { init_core4 } from "../core/index.js";
import { init_en2 } from "../locales/en.js";
import { init_locales } from "../locales/index.js";
import { en_default2 } from "../../../../../../../util_exports.js";
var __wakaru_init_external2_initialized = false;
export function init_external2() {
if (__wakaru_init_external2_initialized) return;
__wakaru_init_external2_initialized = true;
init_core4();
init_schemas2();
init_checks2();
init_errors5();
init_parse3();
init_compat();
init_core4();
init_en2();
init_core4();
init_locales();
init_iso();
init_coerce();
config(en_default2());

}
