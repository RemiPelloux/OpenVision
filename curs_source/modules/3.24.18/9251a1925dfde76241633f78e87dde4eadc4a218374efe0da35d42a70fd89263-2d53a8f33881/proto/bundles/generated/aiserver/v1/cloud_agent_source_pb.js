import { enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { init_compact } from "../../../runtime/compact.js";
var __protoPackage143, CloudAgentSourceCategory;
export { CloudAgentSourceCategory, __protoPackage143 };
var __wakaru_init_cloud_agent_source_pb_initialized = false;
export function init_cloud_agent_source_pb() {
if (__wakaru_init_cloud_agent_source_pb_initialized) return;
__wakaru_init_cloud_agent_source_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage143 = "aiserver.v1.";
CloudAgentSourceCategory = enumType2(proto3, __protoPackage143, "CloudAgentSourceCategory", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "DESKTOP"
    ],
    [
        2,
        "WEB"
    ],
    [
        3,
        "MOBILE"
    ],
    [
        4,
        "SLACK"
    ],
    [
        5,
        "LINEAR"
    ],
    [
        6,
        "SCM"
    ],
    [
        7,
        "CLI"
    ],
    [
        8,
        "SETUP"
    ],
    [
        9,
        "SDK"
    ],
    [
        10,
        "AUTOMATIONS"
    ],
    [
        11,
        "API"
    ],
    [
        12,
        "BUGBOT_AUTOFIX"
    ],
    [
        13,
        "QABOT_FRONTEND"
    ],
    [
        14,
        "LOCAL"
    ],
    [
        15,
        "INTERNAL"
    ],
    [
        16,
        "SAND"
    ]
], 1);

}
