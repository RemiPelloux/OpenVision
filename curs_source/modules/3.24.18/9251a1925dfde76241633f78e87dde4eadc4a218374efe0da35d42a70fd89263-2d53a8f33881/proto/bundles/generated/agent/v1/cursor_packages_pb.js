import { enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { init_compact } from "../../../runtime/compact.js";
var __protoPackage78, PackageType;
export { PackageType, __protoPackage78 };
var __wakaru_init_cursor_packages_pb_initialized = false;
export function init_cursor_packages_pb() {
if (__wakaru_init_cursor_packages_pb_initialized) return;
__wakaru_init_cursor_packages_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage78 = "agent.v1.";
PackageType = enumType2(proto3, __protoPackage78, "PackageType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CURSOR_PROJECT"
    ],
    [
        2,
        "CURSOR_PERSONAL"
    ],
    [
        3,
        "CLAUDE_SKILL"
    ],
    [
        4,
        "CLAUDE_PLUGIN"
    ]
], 1);

}
