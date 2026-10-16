import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage140, __protoMessage3135, WorkspaceGitSetupMode, WarmForkMode, EnvironmentBuildResolution, EnvironmentBuildBootInfo;
export { EnvironmentBuildBootInfo, EnvironmentBuildResolution, WarmForkMode, WorkspaceGitSetupMode, __protoMessage3135, __protoPackage140 };
var __wakaru_init_common_pb_initialized = false;
export function init_common_pb() {
if (__wakaru_init_common_pb_initialized) return;
__wakaru_init_common_pb_initialized = true;
"use strict";
init_esm2();
init_compact();
__protoPackage140 = "anyrun.v1.";
__protoMessage3135 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage140;
    }
};
WorkspaceGitSetupMode = enumType2(proto3, __protoPackage140, "WorkspaceGitSetupMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "REUSE"
    ],
    [
        2,
        "REUSE_THEN_CHECKOUT"
    ],
    [
        3,
        "NO_REPO"
    ]
], 1);
WarmForkMode = enumType2(proto3, __protoPackage140, "WarmForkMode", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "NONE"
    ],
    [
        2,
        "FORKED"
    ],
    [
        3,
        "COLD_FALLBACK"
    ],
    [
        4,
        "LAZY_LOAD"
    ],
    [
        5,
        "COLD_FALLBACK_LAZY_LOAD"
    ]
], 1);
EnvironmentBuildResolution = enumType2(proto3, __protoPackage140, "EnvironmentBuildResolution", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "RESOLVED"
    ],
    [
        2,
        "NO_FINISHED_BUILDS"
    ],
    [
        3,
        "NO_HEALTHY_BUILDS"
    ]
], 1);
EnvironmentBuildBootInfo = class _EnvironmentBuildBootInfo extends __protoMessage3135 {
    constructor(data){
        super();
        this.snapshotId = "";
        this.workspaceGitSetupMode = WorkspaceGitSetupMode.UNSPECIFIED;
        this.warmForkMode = WarmForkMode.UNSPECIFIED;
        this.fastForwardDefaultBranch = false;
        this.resolution = EnvironmentBuildResolution.UNSPECIFIED;
        this.defaultImageFallback = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _EnvironmentBuildBootInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _EnvironmentBuildBootInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _EnvironmentBuildBootInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_EnvironmentBuildBootInfo, a, b2);
    }
    static $() {
        return [
            "EnvironmentBuildBootInfo|1 build_id 9?|2 snapshot_id 9|3 workspace_git_setup_mode #0|4 warm_fork_mode #1|5 fast_forward_default_branch 8|6 resolution #2|7 default_image_fallback 8",
            WorkspaceGitSetupMode,
            WarmForkMode,
            EnvironmentBuildResolution
        ];
    }
};

}
