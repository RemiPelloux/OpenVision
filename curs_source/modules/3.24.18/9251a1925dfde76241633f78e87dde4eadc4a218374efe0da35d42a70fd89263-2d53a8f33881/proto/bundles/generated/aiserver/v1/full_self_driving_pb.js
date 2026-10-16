import { enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { init_compact } from "../../../runtime/compact.js";
var __protoPackage110, FullSelfDrivingMode;
export { FullSelfDrivingMode, __protoPackage110 };
var __wakaru_init_full_self_driving_pb_initialized = false;
export function init_full_self_driving_pb() {
if (__wakaru_init_full_self_driving_pb_initialized) return;
__wakaru_init_full_self_driving_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage110 = "aiserver.v1.";
FullSelfDrivingMode = enumType2(proto3, __protoPackage110, "FullSelfDrivingMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SUGGEST"
    ],
    [
        2,
        "APPLY"
    ]
], 1);

}
