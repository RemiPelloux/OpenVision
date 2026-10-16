require.r(exports);
require.d(exports, {
    BuildStatusLine: ()=>BuildStatusLine,
    BuildStepStarted: ()=>BuildStepStarted,
    CloneCompleted: ()=>CloneCompleted,
    ClonePurpose: ()=>ClonePurpose,
    CloneStarted: ()=>CloneStarted,
    FeatureExitCode: ()=>FeatureExitCode,
    FeatureOutput: ()=>FeatureOutput,
    HydrationProgress: ()=>HydrationProgress,
    ImagePullCompleted: ()=>ImagePullCompleted,
    ImagePullLayerUpdate: ()=>ImagePullLayerUpdate,
    ImagePullStarted: ()=>ImagePullStarted,
    ImagePullStatusUpdate: ()=>ImagePullStatusUpdate,
    InstallCommand: ()=>InstallCommand,
    InternalBuildMessage: ()=>InternalBuildMessage,
    LifecycleProcessExited: ()=>LifecycleProcessExited,
    LifecycleProcessRestarted: ()=>LifecycleProcessRestarted,
    PodErrorEvent: ()=>PodErrorEvent,
    PodEvent: ()=>PodEvent,
    PodIdentity: ()=>PodIdentity,
    PrivateWorkerWaitReason: ()=>PrivateWorkerWaitReason,
    ProgressDetail: ()=>ProgressDetail,
    SpanEnded: ()=>SpanEnded,
    SpanStarted: ()=>SpanStarted,
    WaitingForWorkerStatus: ()=>WaitingForWorkerStatus
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _pod_daemon_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-59.js");
const PrivateWorkerWaitReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.PrivateWorkerWaitReason", [
    {
        no: 0,
        name: "PRIVATE_WORKER_WAIT_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PRIVATE_WORKER_WAIT_REASON_NO_CONNECTED_WORKERS",
        localName: "NO_CONNECTED_WORKERS"
    },
    {
        no: 2,
        name: "PRIVATE_WORKER_WAIT_REASON_LABEL_MISMATCH",
        localName: "LABEL_MISMATCH"
    },
    {
        no: 3,
        name: "PRIVATE_WORKER_WAIT_REASON_OWNER_FILTERED",
        localName: "OWNER_FILTERED"
    },
    {
        no: 4,
        name: "PRIVATE_WORKER_WAIT_REASON_SHARED_ASSIGNMENT_FILTERED",
        localName: "SHARED_ASSIGNMENT_FILTERED"
    },
    {
        no: 5,
        name: "PRIVATE_WORKER_WAIT_REASON_ALL_BUSY",
        localName: "ALL_BUSY"
    }
]);
const ClonePurpose = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.ClonePurpose", [
    {
        no: 0,
        name: "CLONE_PURPOSE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CLONE_PURPOSE_DOCKER_BUILD",
        localName: "DOCKER_BUILD"
    },
    {
        no: 2,
        name: "CLONE_PURPOSE_WORKSPACE_SETUP",
        localName: "WORKSPACE_SETUP"
    }
]);
const PodIdentity = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodIdentity", ()=>[
        {
            no: 1,
            name: "tenant_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pod_id",
            kind: "scalar",
            T: 9
        }
    ]);
const PodEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodEvent", ()=>[
        {
            no: 49,
            name: "creation_timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 26,
            name: "error",
            kind: "message",
            T: PodErrorEvent,
            oneof: "payload"
        },
        {
            no: 1,
            name: "debug_event",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        },
        {
            no: 43,
            name: "hydration_started",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "payload"
        },
        {
            no: 44,
            name: "hydration_progress",
            kind: "message",
            T: HydrationProgress,
            oneof: "payload"
        },
        {
            no: 45,
            name: "hydration_completed",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "payload"
        },
        {
            no: 51,
            name: "clone_started_v2",
            kind: "message",
            T: CloneStarted,
            oneof: "payload"
        },
        {
            no: 52,
            name: "clone_completed_v2",
            kind: "message",
            T: CloneCompleted,
            oneof: "payload"
        },
        {
            no: 33,
            name: "checkout_started",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "payload"
        },
        {
            no: 34,
            name: "checkout_completed",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "payload"
        },
        {
            no: 2,
            name: "build_started",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        },
        {
            no: 3,
            name: "build_status_message",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        },
        {
            no: 27,
            name: "build_step_started",
            kind: "message",
            T: BuildStepStarted,
            oneof: "payload"
        },
        {
            no: 28,
            name: "build_status_line",
            kind: "message",
            T: BuildStatusLine,
            oneof: "payload"
        },
        {
            no: 29,
            name: "internal_build_message",
            kind: "message",
            T: InternalBuildMessage,
            oneof: "payload"
        },
        {
            no: 30,
            name: "build_exit_code",
            kind: "scalar",
            T: 5,
            oneof: "payload"
        },
        {
            no: 14,
            name: "prepare_stdout",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        },
        {
            no: 15,
            name: "prepare_stderr",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        },
        {
            no: 16,
            name: "prepare_exit_code",
            kind: "scalar",
            T: 3,
            oneof: "payload"
        },
        {
            no: 50,
            name: "install_command",
            kind: "message",
            T: InstallCommand,
            oneof: "payload"
        },
        {
            no: 17,
            name: "install_stdout",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        },
        {
            no: 18,
            name: "install_stderr",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        },
        {
            no: 19,
            name: "install_exit_code",
            kind: "scalar",
            T: 3,
            oneof: "payload"
        },
        {
            no: 46,
            name: "verify_stdout",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        },
        {
            no: 47,
            name: "verify_stderr",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        },
        {
            no: 48,
            name: "verify_exit_code",
            kind: "scalar",
            T: 3,
            oneof: "payload"
        },
        {
            no: 6,
            name: "start_stdout",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        },
        {
            no: 7,
            name: "start_stderr",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        },
        {
            no: 8,
            name: "start_exit_code",
            kind: "scalar",
            T: 3,
            oneof: "payload"
        },
        {
            no: 20,
            name: "extension_install_stdout",
            kind: "message",
            T: FeatureOutput,
            oneof: "payload"
        },
        {
            no: 21,
            name: "extension_install_stderr",
            kind: "message",
            T: FeatureOutput,
            oneof: "payload"
        },
        {
            no: 22,
            name: "extension_install_exit_code",
            kind: "message",
            T: FeatureExitCode,
            oneof: "payload"
        },
        {
            no: 35,
            name: "snapshot_started",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "payload"
        },
        {
            no: 36,
            name: "snapshot_completed",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "payload"
        },
        {
            no: 9,
            name: "creation_completed",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "payload"
        },
        {
            no: 10,
            name: "post_start_stdout",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        },
        {
            no: 11,
            name: "post_start_stderr",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        },
        {
            no: 12,
            name: "post_start_exit_code",
            kind: "scalar",
            T: 3,
            oneof: "payload"
        },
        {
            no: 23,
            name: "extension_start_stdout",
            kind: "message",
            T: FeatureOutput,
            oneof: "payload"
        },
        {
            no: 24,
            name: "extension_start_stderr",
            kind: "message",
            T: FeatureOutput,
            oneof: "payload"
        },
        {
            no: 25,
            name: "extension_start_exit_code",
            kind: "message",
            T: FeatureExitCode,
            oneof: "payload"
        },
        {
            no: 13,
            name: "startup_completed",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "payload"
        },
        {
            no: 37,
            name: "image_pull_started",
            kind: "message",
            T: ImagePullStarted,
            oneof: "payload"
        },
        {
            no: 38,
            name: "image_pull_layer_update",
            kind: "message",
            T: ImagePullLayerUpdate,
            oneof: "payload"
        },
        {
            no: 39,
            name: "image_pull_status_update",
            kind: "message",
            T: ImagePullStatusUpdate,
            oneof: "payload"
        },
        {
            no: 40,
            name: "image_pull_completed",
            kind: "message",
            T: ImagePullCompleted,
            oneof: "payload"
        },
        {
            no: 41,
            name: "blocked_repo_state",
            kind: "message",
            T: PodIdentity,
            oneof: "payload"
        },
        {
            no: 42,
            name: "acquired_repo_state",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "payload"
        },
        {
            no: 53,
            name: "private_worker_ready",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "payload"
        },
        {
            no: 54,
            name: "waiting_for_worker",
            kind: "message",
            T: WaitingForWorkerStatus,
            oneof: "payload"
        },
        {
            no: 55,
            name: "span_started",
            kind: "message",
            T: SpanStarted,
            oneof: "payload"
        },
        {
            no: 56,
            name: "span_ended",
            kind: "message",
            T: SpanEnded,
            oneof: "payload"
        },
        {
            no: 57,
            name: "lifecycle_process_restarted",
            kind: "message",
            T: LifecycleProcessRestarted,
            oneof: "payload"
        },
        {
            no: 58,
            name: "lifecycle_process_exited",
            kind: "message",
            T: LifecycleProcessExited,
            oneof: "payload"
        }
    ]);
const LifecycleProcessRestarted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.LifecycleProcessRestarted", ()=>[
        {
            no: 1,
            name: "attempt",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "previous_exit_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_pod_daemon_pb_js__WEBPACK_IMPORTED_MODULE_1__.RestartReason)
        },
        {
            no: 4,
            name: "command_name",
            kind: "scalar",
            T: 9
        }
    ]);
const LifecycleProcessExited = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.LifecycleProcessExited", ()=>[
        {
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "command_name",
            kind: "scalar",
            T: 9
        }
    ]);
const SpanStarted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SpanStarted", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "parent_span_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 5,
            name: "href",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const SpanEnded = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SpanEnded", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        }
    ]);
const WaitingForWorkerStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.WaitingForWorkerStatus", ()=>[
        {
            no: 1,
            name: "retry_count",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "max_retries",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "wait_reason",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PrivateWorkerWaitReason)
        }
    ]);
const HydrationProgress = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.HydrationProgress", ()=>[
        {
            no: 1,
            name: "transferred",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "total",
            kind: "scalar",
            T: 4
        }
    ]);
const PodErrorEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodErrorEvent", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]);
const FeatureOutput = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.FeatureOutput", ()=>[
        {
            no: 1,
            name: "feature_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "output",
            kind: "scalar",
            T: 9
        }
    ]);
const FeatureExitCode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.FeatureExitCode", ()=>[
        {
            no: 1,
            name: "feature_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "exit_code",
            kind: "scalar",
            T: 3
        }
    ]);
const BuildStepStarted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.BuildStepStarted", ()=>[
        {
            no: 1,
            name: "stream_id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "step",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "total_steps",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "command",
            kind: "scalar",
            T: 9
        }
    ]);
const BuildStatusLine = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.BuildStatusLine", ()=>[
        {
            no: 1,
            name: "stream_id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "timestamp",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
const InternalBuildMessage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.InternalBuildMessage", ()=>[
        {
            no: 1,
            name: "stream_id",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
const ImagePullStarted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ImagePullStarted", ()=>[
        {
            no: 1,
            name: "image_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pull_id",
            kind: "scalar",
            T: 9
        }
    ]);
const ImagePullLayerUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ImagePullLayerUpdate", ()=>[
        {
            no: 1,
            name: "image_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pull_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "layer_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "pulling_fs_layer",
            kind: "scalar",
            T: 8,
            oneof: "status"
        },
        {
            no: 5,
            name: "waiting",
            kind: "scalar",
            T: 8,
            oneof: "status"
        },
        {
            no: 6,
            name: "verifying_checksum",
            kind: "scalar",
            T: 8,
            oneof: "status"
        },
        {
            no: 7,
            name: "download_complete",
            kind: "scalar",
            T: 8,
            oneof: "status"
        },
        {
            no: 8,
            name: "pull_complete",
            kind: "scalar",
            T: 8,
            oneof: "status"
        },
        {
            no: 9,
            name: "downloading",
            kind: "message",
            T: ProgressDetail,
            oneof: "status"
        },
        {
            no: 10,
            name: "extracting",
            kind: "message",
            T: ProgressDetail,
            oneof: "status"
        },
        {
            no: 11,
            name: "other",
            kind: "scalar",
            T: 9,
            oneof: "status"
        }
    ]);
const ProgressDetail = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ProgressDetail", ()=>[
        {
            no: 1,
            name: "current",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "total",
            kind: "scalar",
            T: 4
        }
    ]);
const ImagePullStatusUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ImagePullStatusUpdate", ()=>[
        {
            no: 1,
            name: "image_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pull_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "status",
            kind: "scalar",
            T: 9
        }
    ]);
const ImagePullCompleted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ImagePullCompleted", ()=>[
        {
            no: 1,
            name: "image_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "pull_id",
            kind: "scalar",
            T: 9
        }
    ]);
const InstallCommand = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.InstallCommand", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "user",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "is_system",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "failure_tolerant",
            kind: "scalar",
            T: 8
        }
    ]);
const CloneStarted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.CloneStarted", ()=>[
        {
            no: 1,
            name: "purpose",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ClonePurpose)
        }
    ]);
const CloneCompleted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.CloneCompleted", ()=>[
        {
            no: 1,
            name: "purpose",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ClonePurpose)
        }
    ]);
