import { init_errors } from "../../../../../../external_exports.js";
import { init_ZodError } from "./ZodError.js";
import { init_parseUtil } from "./helpers/parseUtil.js";
import { init_typeAliases } from "./helpers/typeAliases.js";
import { init_util } from "./helpers/util.js";
import { init_types2 } from "./types.js";
var __wakaru_init_external_initialized = false;
export function init_external() {
if (__wakaru_init_external_initialized) return;
__wakaru_init_external_initialized = true;
init_errors();
init_parseUtil();
init_typeAliases();
init_util();
init_types2();
init_ZodError();

}
