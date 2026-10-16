import { init_esm2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_code } from "../code.js";
import { init_connect_error } from "../connect-error.js";
import { init_content_type3 } from "./content-type.js";
import { init_headers3 } from "./headers.js";
import { init_http_status } from "./http-status.js";
var __wakaru_init_validate_response_initialized = false;
export function init_validate_response() {
if (__wakaru_init_validate_response_initialized) return;
__wakaru_init_validate_response_initialized = true;
init_esm2();
init_code();
init_http_status();
init_connect_error();
init_content_type3();
init_headers3();

}
