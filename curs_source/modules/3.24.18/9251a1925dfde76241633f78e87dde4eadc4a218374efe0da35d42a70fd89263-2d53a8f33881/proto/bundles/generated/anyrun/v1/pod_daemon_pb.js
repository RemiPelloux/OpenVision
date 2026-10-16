import { enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { init_compact } from "../../../runtime/compact.js";
var __protoPackage138, RestartReason;
export { RestartReason, __protoPackage138 };
var __wakaru_init_pod_daemon_pb_initialized = false;
export function init_pod_daemon_pb() {
if (__wakaru_init_pod_daemon_pb_initialized) return;
__wakaru_init_pod_daemon_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage138 = "anyrun.v1.";
RestartReason = enumType2(proto3, __protoPackage138, "RestartReason", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "PROCESS_EXITED"
    ],
    [
        2,
        "HEALTH_CHECK_FAILED"
    ]
], 1);

}
