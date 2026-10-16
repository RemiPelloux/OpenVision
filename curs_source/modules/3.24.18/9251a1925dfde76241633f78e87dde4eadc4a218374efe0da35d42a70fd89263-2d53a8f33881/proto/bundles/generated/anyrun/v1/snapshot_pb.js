import { enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { init_compact } from "../../../runtime/compact.js";
var __protoPackage142, SnapshotState;
export { SnapshotState, __protoPackage142 };
var __wakaru_init_snapshot_pb_initialized = false;
export function init_snapshot_pb() {
if (__wakaru_init_snapshot_pb_initialized) return;
__wakaru_init_snapshot_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage142 = "anyrun.v1.";
SnapshotState = enumType2(proto3, __protoPackage142, "SnapshotState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CREATING"
    ],
    [
        2,
        "READY"
    ],
    [
        3,
        "FAILED"
    ],
    [
        4,
        "FINALIZING"
    ]
], 1);

}
