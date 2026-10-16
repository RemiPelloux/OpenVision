import { qP } from "./empty_pb.js";
import { d3d, u3d } from "./pod_daemon_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var _Ue, BNn, h3d, kVi, p3d, m3d, g3d, f3d, v3d, _3d, b3d, UNn, ico, y3d, S3d, k3d, w3d, C3d, rco, T3d, E3d, x3d, I3d, A3d;
export { A3d, BNn, C3d, E3d, I3d, S3d, T3d, UNn, _3d, _Ue, b3d, f3d, g3d, h3d, ico, k3d, kVi, m3d, p3d, rco, v3d, w3d, x3d, y3d };
var __wakaru_wVi_initialized = false;
export function wVi() {
if (__wakaru_wVi_initialized) return;
__wakaru_wVi_initialized = true;
"use strict";
x(), bi(), d3d(), _Ue = k.makeEnum("anyrun.v1.PrivateWorkerWaitReason", [
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
]), BNn = k.makeEnum("anyrun.v1.ClonePurpose", [
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
]), h3d = k.makeMessageType("anyrun.v1.PodIdentity", ()=>[
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
    ]), kVi = k.makeMessageType("anyrun.v1.PodEvent", ()=>[
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
            T: b3d,
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
            T: qP,
            oneof: "payload"
        },
        {
            no: 44,
            name: "hydration_progress",
            kind: "message",
            T: _3d,
            oneof: "payload"
        },
        {
            no: 45,
            name: "hydration_completed",
            kind: "message",
            T: qP,
            oneof: "payload"
        },
        {
            no: 51,
            name: "clone_started_v2",
            kind: "message",
            T: I3d,
            oneof: "payload"
        },
        {
            no: 52,
            name: "clone_completed_v2",
            kind: "message",
            T: A3d,
            oneof: "payload"
        },
        {
            no: 33,
            name: "checkout_started",
            kind: "message",
            T: qP,
            oneof: "payload"
        },
        {
            no: 34,
            name: "checkout_completed",
            kind: "message",
            T: qP,
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
            T: y3d,
            oneof: "payload"
        },
        {
            no: 28,
            name: "build_status_line",
            kind: "message",
            T: S3d,
            oneof: "payload"
        },
        {
            no: 29,
            name: "internal_build_message",
            kind: "message",
            T: k3d,
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
            T: x3d,
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
            T: UNn,
            oneof: "payload"
        },
        {
            no: 21,
            name: "extension_install_stderr",
            kind: "message",
            T: UNn,
            oneof: "payload"
        },
        {
            no: 22,
            name: "extension_install_exit_code",
            kind: "message",
            T: ico,
            oneof: "payload"
        },
        {
            no: 35,
            name: "snapshot_started",
            kind: "message",
            T: qP,
            oneof: "payload"
        },
        {
            no: 36,
            name: "snapshot_completed",
            kind: "message",
            T: qP,
            oneof: "payload"
        },
        {
            no: 9,
            name: "creation_completed",
            kind: "message",
            T: qP,
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
            T: UNn,
            oneof: "payload"
        },
        {
            no: 24,
            name: "extension_start_stderr",
            kind: "message",
            T: UNn,
            oneof: "payload"
        },
        {
            no: 25,
            name: "extension_start_exit_code",
            kind: "message",
            T: ico,
            oneof: "payload"
        },
        {
            no: 13,
            name: "startup_completed",
            kind: "message",
            T: qP,
            oneof: "payload"
        },
        {
            no: 37,
            name: "image_pull_started",
            kind: "message",
            T: w3d,
            oneof: "payload"
        },
        {
            no: 38,
            name: "image_pull_layer_update",
            kind: "message",
            T: C3d,
            oneof: "payload"
        },
        {
            no: 39,
            name: "image_pull_status_update",
            kind: "message",
            T: T3d,
            oneof: "payload"
        },
        {
            no: 40,
            name: "image_pull_completed",
            kind: "message",
            T: E3d,
            oneof: "payload"
        },
        {
            no: 41,
            name: "blocked_repo_state",
            kind: "message",
            T: h3d,
            oneof: "payload"
        },
        {
            no: 42,
            name: "acquired_repo_state",
            kind: "message",
            T: qP,
            oneof: "payload"
        },
        {
            no: 53,
            name: "private_worker_ready",
            kind: "message",
            T: qP,
            oneof: "payload"
        },
        {
            no: 54,
            name: "waiting_for_worker",
            kind: "message",
            T: v3d,
            oneof: "payload"
        },
        {
            no: 55,
            name: "span_started",
            kind: "message",
            T: g3d,
            oneof: "payload"
        },
        {
            no: 56,
            name: "span_ended",
            kind: "message",
            T: f3d,
            oneof: "payload"
        },
        {
            no: 57,
            name: "lifecycle_process_restarted",
            kind: "message",
            T: p3d,
            oneof: "payload"
        },
        {
            no: 58,
            name: "lifecycle_process_exited",
            kind: "message",
            T: m3d,
            oneof: "payload"
        }
    ]), p3d = k.makeMessageType("anyrun.v1.LifecycleProcessRestarted", ()=>[
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
            T: k.getEnumType(u3d)
        },
        {
            no: 4,
            name: "command_name",
            kind: "scalar",
            T: 9
        }
    ]), m3d = k.makeMessageType("anyrun.v1.LifecycleProcessExited", ()=>[
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
    ]), g3d = k.makeMessageType("anyrun.v1.SpanStarted", ()=>[
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
            opt: !0
        },
        {
            no: 5,
            name: "href",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), f3d = k.makeMessageType("anyrun.v1.SpanEnded", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        }
    ]), v3d = k.makeMessageType("anyrun.v1.WaitingForWorkerStatus", ()=>[
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
            T: k.getEnumType(_Ue)
        }
    ]), _3d = k.makeMessageType("anyrun.v1.HydrationProgress", ()=>[
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
    ]), b3d = k.makeMessageType("anyrun.v1.PodErrorEvent", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), UNn = k.makeMessageType("anyrun.v1.FeatureOutput", ()=>[
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
    ]), ico = k.makeMessageType("anyrun.v1.FeatureExitCode", ()=>[
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
    ]), y3d = k.makeMessageType("anyrun.v1.BuildStepStarted", ()=>[
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
    ]), S3d = k.makeMessageType("anyrun.v1.BuildStatusLine", ()=>[
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
    ]), k3d = k.makeMessageType("anyrun.v1.InternalBuildMessage", ()=>[
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
    ]), w3d = k.makeMessageType("anyrun.v1.ImagePullStarted", ()=>[
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
    ]), C3d = k.makeMessageType("anyrun.v1.ImagePullLayerUpdate", ()=>[
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
            T: rco,
            oneof: "status"
        },
        {
            no: 10,
            name: "extracting",
            kind: "message",
            T: rco,
            oneof: "status"
        },
        {
            no: 11,
            name: "other",
            kind: "scalar",
            T: 9,
            oneof: "status"
        }
    ]), rco = k.makeMessageType("anyrun.v1.ProgressDetail", ()=>[
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
    ]), T3d = k.makeMessageType("anyrun.v1.ImagePullStatusUpdate", ()=>[
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
    ]), E3d = k.makeMessageType("anyrun.v1.ImagePullCompleted", ()=>[
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
    ]), x3d = k.makeMessageType("anyrun.v1.InstallCommand", ()=>[
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
            opt: !0
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
    ]), I3d = k.makeMessageType("anyrun.v1.CloneStarted", ()=>[
        {
            no: 1,
            name: "purpose",
            kind: "enum",
            T: k.getEnumType(BNn)
        }
    ]), A3d = k.makeMessageType("anyrun.v1.CloneCompleted", ()=>[
        {
            no: 1,
            name: "purpose",
            kind: "enum",
            T: k.getEnumType(BNn)
        }
    ]);

}
