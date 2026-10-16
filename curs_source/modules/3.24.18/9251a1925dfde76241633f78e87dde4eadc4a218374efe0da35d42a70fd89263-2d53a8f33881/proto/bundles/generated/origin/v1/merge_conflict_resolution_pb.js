import { defineOwn, enumType2 } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { protoInt64 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { ActorWithDisplay, init_actor_with_display_pb } from "./actor_with_display_pb.js";
import { ChangeIdentifier, init_change_pb } from "./change_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage178, __protoMessage3171, MergeConflictResolutionState, MergeConflictResolutionStaleCause, MergeConflictResolutionHunkKind, MergeConflictResolutionLineSource, MergeConflictResolutionStepState, MergeConflictResolutionPin, MergeConflictResolutionPinnedChange, MergeConflictResolutionFile, MergeConflictResolutionPreviewLine, MergeConflictResolutionPreviewHunk, MergeConflictResolutionStackStep, MergeConflictResolutionStackPlan, MergeConflictResolution, GetMergeConflictResolutionRequest, GetMergeConflictResolutionResponse, ApplyMergeConflictResolutionRequest, ApplyMergeConflictResolutionResponse, UndoMergeConflictResolutionRequest, UndoMergeConflictResolutionResponse;
export { ApplyMergeConflictResolutionRequest, ApplyMergeConflictResolutionResponse, GetMergeConflictResolutionRequest, GetMergeConflictResolutionResponse, MergeConflictResolution, MergeConflictResolutionFile, MergeConflictResolutionHunkKind, MergeConflictResolutionLineSource, MergeConflictResolutionPin, MergeConflictResolutionPinnedChange, MergeConflictResolutionPreviewHunk, MergeConflictResolutionPreviewLine, MergeConflictResolutionStackPlan, MergeConflictResolutionStackStep, MergeConflictResolutionStaleCause, MergeConflictResolutionState, MergeConflictResolutionStepState, UndoMergeConflictResolutionRequest, UndoMergeConflictResolutionResponse, __protoMessage3171, __protoPackage178 };
var __wakaru_init_merge_conflict_resolution_pb_initialized = false;
export function init_merge_conflict_resolution_pb() {
if (__wakaru_init_merge_conflict_resolution_pb_initialized) return;
__wakaru_init_merge_conflict_resolution_pb_initialized = true;
"use strict";
init_esm2();
init_actor_with_display_pb();
init_change_pb();
init_compact();
__protoPackage178 = "origin.v1.";
__protoMessage3171 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage178;
    }
};
MergeConflictResolutionState = enumType2(proto3, __protoPackage178, "MergeConflictResolutionState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "UNAVAILABLE"
    ],
    [
        2,
        "GENERATING"
    ],
    [
        3,
        "READY"
    ],
    [
        4,
        "NOT_CONFIDENT"
    ],
    [
        5,
        "APPLIED"
    ]
], 1);
MergeConflictResolutionStaleCause = enumType2(proto3, __protoPackage178, "MergeConflictResolutionStaleCause", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "BASE_MOVED"
    ],
    [
        2,
        "HEAD_MOVED"
    ]
], 1);
MergeConflictResolutionHunkKind = enumType2(proto3, __protoPackage178, "MergeConflictResolutionHunkKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "OURS"
    ],
    [
        2,
        "THEIRS"
    ],
    [
        3,
        "BASE"
    ],
    [
        4,
        "UNION"
    ],
    [
        5,
        "UNION_REVERSED"
    ],
    [
        6,
        "DROP"
    ],
    [
        7,
        "MERGED_LINES"
    ],
    [
        8,
        "MERGED_TOKENS"
    ],
    [
        9,
        "COMBINATION"
    ],
    [
        10,
        "FORMATTER_MERGE"
    ],
    [
        11,
        "STRUCTURAL"
    ],
    [
        12,
        "CONTENT_SIDE"
    ],
    [
        13,
        "KEEP_EDIT"
    ],
    [
        14,
        "KEEP_DELETION"
    ]
], 1);
MergeConflictResolutionLineSource = enumType2(proto3, __protoPackage178, "MergeConflictResolutionLineSource", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CONTEXT"
    ],
    [
        2,
        "OURS"
    ],
    [
        3,
        "THEIRS"
    ],
    [
        4,
        "BOTH"
    ],
    [
        5,
        "RESOLVED"
    ]
], 1);
MergeConflictResolutionStepState = enumType2(proto3, __protoPackage178, "MergeConflictResolutionStepState", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CLEAN"
    ],
    [
        2,
        "RESOLVED"
    ],
    [
        3,
        "UNRESOLVED"
    ]
], 1);
MergeConflictResolutionPin = class _MergeConflictResolutionPin extends __protoMessage3171 {
    constructor(data){
        super();
        this.landingRef = "";
        this.landingSha = "";
        this.changes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeConflictResolutionPin().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeConflictResolutionPin().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeConflictResolutionPin().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeConflictResolutionPin, a, b2);
    }
    static $() {
        return [
            "MergeConflictResolutionPin|1 landing_ref 9|2 landing_sha 9|3 changes #0*",
            MergeConflictResolutionPinnedChange
        ];
    }
};
MergeConflictResolutionPinnedChange = class _MergeConflictResolutionPinnedChange extends __protoMessage3171 {
    constructor(data){
        super();
        this.changeNumber = protoInt64.zero;
        this.headSha = "";
        this.baseRef = "";
        this.recordedBaseSha = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeConflictResolutionPinnedChange().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeConflictResolutionPinnedChange().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeConflictResolutionPinnedChange().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeConflictResolutionPinnedChange, a, b2);
    }
    static $() {
        return [
            "MergeConflictResolutionPinnedChange|1 change_number 4|2 head_sha 9|3 base_ref 9|4 recorded_base_sha 9"
        ];
    }
};
MergeConflictResolutionFile = class _MergeConflictResolutionFile extends __protoMessage3171 {
    constructor(data){
        super();
        this.path = "";
        this.hunkCount = 0;
        this.resolutionDigest = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeConflictResolutionFile().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeConflictResolutionFile().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeConflictResolutionFile().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeConflictResolutionFile, a, b2);
    }
    static $() {
        return [
            "MergeConflictResolutionFile|1 path 9|2 hunk_count 13|3 resolution_digest 9"
        ];
    }
};
MergeConflictResolutionPreviewLine = class _MergeConflictResolutionPreviewLine extends __protoMessage3171 {
    constructor(data){
        super();
        this.text = "";
        this.source = MergeConflictResolutionLineSource.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeConflictResolutionPreviewLine().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeConflictResolutionPreviewLine().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeConflictResolutionPreviewLine().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeConflictResolutionPreviewLine, a, b2);
    }
    static $() {
        return [
            "MergeConflictResolutionPreviewLine|1 text 9|2 source #0",
            MergeConflictResolutionLineSource
        ];
    }
};
MergeConflictResolutionPreviewHunk = class _MergeConflictResolutionPreviewHunk extends __protoMessage3171 {
    constructor(data){
        super();
        this.path = "";
        this.startLine = 0;
        this.endLine = 0;
        this.kind = MergeConflictResolutionHunkKind.UNSPECIFIED;
        this.needsPerson = false;
        this.lines = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeConflictResolutionPreviewHunk().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeConflictResolutionPreviewHunk().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeConflictResolutionPreviewHunk().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeConflictResolutionPreviewHunk, a, b2);
    }
    static $() {
        return [
            "MergeConflictResolutionPreviewHunk|1 path 9|2 start_line 13|3 end_line 13|4 kind #0|5 needs_person 8|6 lines #1*",
            MergeConflictResolutionHunkKind,
            MergeConflictResolutionPreviewLine
        ];
    }
};
MergeConflictResolutionStackStep = class _MergeConflictResolutionStackStep extends __protoMessage3171 {
    constructor(data){
        super();
        this.changeNumber = protoInt64.zero;
        this.title = "";
        this.state = MergeConflictResolutionStepState.UNSPECIFIED;
        this.merged = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeConflictResolutionStackStep().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeConflictResolutionStackStep().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeConflictResolutionStackStep().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeConflictResolutionStackStep, a, b2);
    }
    static $() {
        return [
            "MergeConflictResolutionStackStep|1 change_number 4|2 title 9|3 author #0|4 state #1|5 merged 8",
            ActorWithDisplay,
            MergeConflictResolutionStepState
        ];
    }
};
MergeConflictResolutionStackPlan = class _MergeConflictResolutionStackPlan extends __protoMessage3171 {
    constructor(data){
        super();
        this.owningChangeNumber = protoInt64.zero;
        this.steps = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeConflictResolutionStackPlan().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeConflictResolutionStackPlan().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeConflictResolutionStackPlan().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeConflictResolutionStackPlan, a, b2);
    }
    static $() {
        return [
            "MergeConflictResolutionStackPlan|1 owning_change_number 4|2 steps #0*",
            MergeConflictResolutionStackStep
        ];
    }
};
MergeConflictResolution = class _MergeConflictResolution extends __protoMessage3171 {
    constructor(data){
        super();
        this.state = MergeConflictResolutionState.UNSPECIFIED;
        this.resolutionId = "";
        this.fileCount = 0;
        this.hunkCount = 0;
        this.reasonCode = "";
        this.reason = "";
        this.staleCause = MergeConflictResolutionStaleCause.UNSPECIFIED;
        this.files = [];
        this.previewHunks = [];
        this.appliedCommitSha = "";
        this.undoAvailable = false;
        this.appliedByViewer = false;
        this.appliedOnChangeNumber = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _MergeConflictResolution().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _MergeConflictResolution().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _MergeConflictResolution().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_MergeConflictResolution, a, b2);
    }
    static $() {
        return [
            "MergeConflictResolution|1 state #0|2 resolution_id 9|3 pin #1|4 file_count 13|5 hunk_count 13|6 reason_code 9|7 reason 9|8 stale_cause #2|9 files #3*|10 preview_hunks #4*|11 stack_plan #5?|12 applied_commit_sha 9|13 undo_available 8|14 applied_by_viewer 8|15 applied_by #6|16 applied_on_change_number 4",
            MergeConflictResolutionState,
            MergeConflictResolutionPin,
            MergeConflictResolutionStaleCause,
            MergeConflictResolutionFile,
            MergeConflictResolutionPreviewHunk,
            MergeConflictResolutionStackPlan,
            ActorWithDisplay
        ];
    }
};
GetMergeConflictResolutionRequest = class _GetMergeConflictResolutionRequest extends __protoMessage3171 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetMergeConflictResolutionRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetMergeConflictResolutionRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetMergeConflictResolutionRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetMergeConflictResolutionRequest, a, b2);
    }
    static $() {
        return [
            "GetMergeConflictResolutionRequest|1 change #0",
            ChangeIdentifier
        ];
    }
};
GetMergeConflictResolutionResponse = class _GetMergeConflictResolutionResponse extends __protoMessage3171 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetMergeConflictResolutionResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetMergeConflictResolutionResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetMergeConflictResolutionResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetMergeConflictResolutionResponse, a, b2);
    }
    static $() {
        return [
            "GetMergeConflictResolutionResponse|1 resolution #0",
            MergeConflictResolution
        ];
    }
};
ApplyMergeConflictResolutionRequest = class _ApplyMergeConflictResolutionRequest extends __protoMessage3171 {
    constructor(data){
        super();
        this.resolutionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ApplyMergeConflictResolutionRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ApplyMergeConflictResolutionRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ApplyMergeConflictResolutionRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ApplyMergeConflictResolutionRequest, a, b2);
    }
    static $() {
        return [
            "ApplyMergeConflictResolutionRequest|1 change #0|2 resolution_id 9|3 expected #1",
            ChangeIdentifier,
            MergeConflictResolutionPin
        ];
    }
};
ApplyMergeConflictResolutionResponse = class _ApplyMergeConflictResolutionResponse extends __protoMessage3171 {
    constructor(data){
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _ApplyMergeConflictResolutionResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _ApplyMergeConflictResolutionResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _ApplyMergeConflictResolutionResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_ApplyMergeConflictResolutionResponse, a, b2);
    }
    static $() {
        return [
            "ApplyMergeConflictResolutionResponse|1 resolution #0",
            MergeConflictResolution
        ];
    }
};
UndoMergeConflictResolutionRequest = class _UndoMergeConflictResolutionRequest extends __protoMessage3171 {
    constructor(data){
        super();
        this.resolutionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UndoMergeConflictResolutionRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UndoMergeConflictResolutionRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UndoMergeConflictResolutionRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UndoMergeConflictResolutionRequest, a, b2);
    }
    static $() {
        return [
            "UndoMergeConflictResolutionRequest|1 change #0|2 resolution_id 9",
            ChangeIdentifier
        ];
    }
};
UndoMergeConflictResolutionResponse = class _UndoMergeConflictResolutionResponse extends __protoMessage3171 {
    constructor(data){
        super();
        this.restoredHeadSha = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _UndoMergeConflictResolutionResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _UndoMergeConflictResolutionResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _UndoMergeConflictResolutionResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_UndoMergeConflictResolutionResponse, a, b2);
    }
    static $() {
        return [
            "UndoMergeConflictResolutionResponse|1 resolution #0|2 restored_head_sha 9",
            MergeConflictResolution
        ];
    }
};

}
