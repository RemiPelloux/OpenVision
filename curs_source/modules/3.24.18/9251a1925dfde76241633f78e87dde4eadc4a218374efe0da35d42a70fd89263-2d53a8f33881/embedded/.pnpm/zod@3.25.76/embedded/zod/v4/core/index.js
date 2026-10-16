import { init_api } from "./api.js";
import { init_checks } from "./checks.js";
import { init_core3 } from "./core.js";
import { init_doc } from "./doc.js";
import { init_errors4 } from "./errors.js";
import { init_function } from "./function.js";
import { init_json_schema } from "./json-schema.js";
import { init_parse2 } from "./parse.js";
import { init_regexes } from "./regexes.js";
import { init_registries } from "./registries.js";
import { init_schemas } from "./schemas.js";
import { init_to_json_schema } from "./to-json-schema.js";
import { init_util4 } from "./util.js";
import { init_versions } from "./versions.js";
import { init_locales } from "../locales/index.js";
var __wakaru_init_core4_initialized = false;
export function init_core4() {
if (__wakaru_init_core4_initialized) return;
__wakaru_init_core4_initialized = true;
init_core3();
init_parse2();
init_errors4();
init_schemas();
init_checks();
init_versions();
init_util4();
init_regexes();
init_locales();
init_registries();
init_doc();
init_function();
init_api();
init_to_json_schema();
init_json_schema();

}
