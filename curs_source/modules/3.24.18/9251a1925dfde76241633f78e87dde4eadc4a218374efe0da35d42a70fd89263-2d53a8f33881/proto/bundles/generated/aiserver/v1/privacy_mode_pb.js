import { enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { init_compact } from "../../../runtime/compact.js";
var __protoPackage106, PrivacyMode;
export { PrivacyMode, __protoPackage106 };
var __wakaru_init_privacy_mode_pb_initialized = false;
export function init_privacy_mode_pb() {
if (__wakaru_init_privacy_mode_pb_initialized) return;
__wakaru_init_privacy_mode_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage106 = "aiserver.v1.";
PrivacyMode = enumType2(proto3, __protoPackage106, "PrivacyMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NO_STORAGE"
    ],
    [
        2,
        "NO_TRAINING"
    ],
    [
        3,
        "USAGE_DATA_TRAINING_ALLOWED"
    ],
    [
        4,
        "USAGE_CODEBASE_TRAINING_ALLOWED"
    ]
], 1);

}
