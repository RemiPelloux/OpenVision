import { init_esm2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
import { init_content_type_matcher } from "./content-type-matcher.js";
import { init_limit_io } from "./limit-io.js";
import { init_universal } from "./universal.js";
var __wakaru_init_universal_handler_initialized = false;
export function init_universal_handler() {
if (__wakaru_init_universal_handler_initialized) return;
__wakaru_init_universal_handler_initialized = true;
init_esm2();
init_universal();
init_content_type_matcher();
init_limit_io();
init_connect_error();
init_code();

}
