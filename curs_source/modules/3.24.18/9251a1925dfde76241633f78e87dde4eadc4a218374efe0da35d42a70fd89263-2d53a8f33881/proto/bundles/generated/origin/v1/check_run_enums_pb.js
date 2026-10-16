import { enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { init_compact } from "../../../runtime/compact.js";
var __protoPackage184, CheckRunLifecycleStatus, CheckRunConclusion;
export { CheckRunConclusion, CheckRunLifecycleStatus, __protoPackage184 };
var __wakaru_init_check_run_enums_pb_initialized = false;
export function init_check_run_enums_pb() {
if (__wakaru_init_check_run_enums_pb_initialized) return;
__wakaru_init_check_run_enums_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage184 = "origin.v1.";
CheckRunLifecycleStatus = enumType2(proto3, __protoPackage184, "CheckRunLifecycleStatus", [
    [
        0,
        "CHECK_RUN_LIFECYCLE_STATUS_UNSPECIFIED"
    ],
    [
        1,
        "queued"
    ],
    [
        2,
        "in_progress"
    ],
    [
        3,
        "completed"
    ],
    [
        4,
        "rerequested"
    ],
    [
        5,
        "failing"
    ]
]);
CheckRunConclusion = enumType2(proto3, __protoPackage184, "CheckRunConclusion", [
    [
        0,
        "CHECK_RUN_CONCLUSION_UNSPECIFIED"
    ],
    [
        1,
        "success"
    ],
    [
        2,
        "failure"
    ],
    [
        3,
        "neutral"
    ],
    [
        4,
        "cancelled"
    ],
    [
        5,
        "skipped"
    ],
    [
        6,
        "timed_out"
    ],
    [
        7,
        "action_required"
    ],
    [
        8,
        "stale"
    ]
]);

}
