import { init_esm2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_headers3 } from "./headers.js";
import { init_version2 } from "./version.js";
var contentTypePrefix;
export { contentTypePrefix };
var __wakaru_init_get_request_initialized = false;
export function init_get_request() {
if (__wakaru_init_get_request_initialized) return;
__wakaru_init_get_request_initialized = true;
init_esm2();
init_headers3();
init_version2();
contentTypePrefix = "application/";

}
