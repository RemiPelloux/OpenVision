import { init_esm2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_content_type3 } from "./content-type.js";
import { init_headers3 } from "./headers.js";
import { init_version2 } from "./version.js";
var __wakaru_init_request_header_initialized = false;
export function init_request_header() {
if (__wakaru_init_request_header_initialized) return;
__wakaru_init_request_header_initialized = true;
init_esm2();
init_headers3();
init_version2();
init_content_type3();

}
