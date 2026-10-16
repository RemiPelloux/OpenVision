import { enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { init_compact } from "../../../runtime/compact.js";
var __protoPackage131, FastApplySource;
export { FastApplySource, __protoPackage131 };
var __wakaru_init_fastapply_pb_initialized = false;
export function init_fastapply_pb() {
if (__wakaru_init_fastapply_pb_initialized) return;
__wakaru_init_fastapply_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage131 = "aiserver.v1.";
FastApplySource = enumType2(proto3, __protoPackage131, "FastApplySource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "COMPOSER"
    ],
    [
        2,
        "CLICKED_APPLY"
    ],
    [
        3,
        "CACHED_APPLY"
    ],
    [
        4,
        "COMPOSER_AGENT"
    ]
], 1);

}
