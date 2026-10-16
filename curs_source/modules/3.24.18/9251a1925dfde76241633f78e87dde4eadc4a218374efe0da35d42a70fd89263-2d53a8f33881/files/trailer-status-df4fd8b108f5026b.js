import { init_esm2 } from "../../../../../../../_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { init_http_headers } from "../http-headers.js";
import { init_status_pb } from "./gen/status_pb.js";
import { init_headers } from "./headers.js";
var grpcStatusOk;
export { grpcStatusOk };
var __wakaru_init_trailer_status_initialized = false;
export function init_trailer_status() {
if (__wakaru_init_trailer_status_initialized) return;
__wakaru_init_trailer_status_initialized = true;
init_esm2();
init_status_pb();
init_http_headers();
init_headers();
grpcStatusOk = "0";

}
