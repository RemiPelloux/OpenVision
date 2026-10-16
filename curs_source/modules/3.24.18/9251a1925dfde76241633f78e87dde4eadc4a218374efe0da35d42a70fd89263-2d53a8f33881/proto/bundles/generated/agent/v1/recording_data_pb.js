import { enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { init_compact } from "../../../runtime/compact.js";
var __protoPackage197, CursorType;
export { CursorType, __protoPackage197 };
var __wakaru_init_recording_data_pb_initialized = false;
export function init_recording_data_pb() {
if (__wakaru_init_recording_data_pb_initialized) return;
__wakaru_init_recording_data_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage197 = "agent.v1.";
CursorType = enumType2(proto3, __protoPackage197, "CursorType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "ARROW"
    ],
    [
        2,
        "POINTER"
    ],
    [
        3,
        "TEXT"
    ],
    [
        4,
        "WAIT"
    ],
    [
        5,
        "CROSSHAIR"
    ],
    [
        6,
        "MOVE"
    ],
    [
        7,
        "RESIZE_NS"
    ],
    [
        8,
        "RESIZE_EW"
    ],
    [
        9,
        "RESIZE_NWSE"
    ],
    [
        10,
        "RESIZE_NESW"
    ],
    [
        11,
        "NOT_ALLOWED"
    ],
    [
        12,
        "GRAB"
    ],
    [
        13,
        "GRABBING"
    ]
], 1);

}
