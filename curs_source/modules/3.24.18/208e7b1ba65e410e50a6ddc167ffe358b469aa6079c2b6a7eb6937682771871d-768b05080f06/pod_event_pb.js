import { Hr } from "./empty_pb.js";
import { Yke, zke } from "./pod_daemon_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Jke, G9, Xke, kE, Qke, Zke, eSe, tSe, nSe, rSe, sSe, Pf, V9, iSe, aSe, oSe, cSe, lSe, $9, dSe, uSe, mSe, pSe, hSe;
export { $9, G9, Jke, Pf, Qke, V9, Xke, Zke, aSe, cSe, dSe, eSe, hSe, iSe, kE, lSe, mSe, nSe, oSe, pSe, rSe, sSe, tSe, uSe };
var __wakaru_gSe_initialized = false;
export function gSe() {
if (__wakaru_gSe_initialized) return;
__wakaru_gSe_initialized = true;
"use strict";
h(), F(), Yke(), Jke = c.makeEnum("anyrun.v1.PrivateWorkerWaitReason", [
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
]), G9 = c.makeEnum("anyrun.v1.ClonePurpose", [
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
]), Xke = c.makeMessageType("anyrun.v1.PodIdentity", ()=>[
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
    ]), kE = c.makeMessageType("anyrun.v1.PodEvent", ()=>[
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
            T: sSe,
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
            T: Hr,
            oneof: "payload"
        },
        {
            no: 44,
            name: "hydration_progress",
            kind: "message",
            T: rSe,
            oneof: "payload"
        },
        {
            no: 45,
            name: "hydration_completed",
            kind: "message",
            T: Hr,
            oneof: "payload"
        },
        {
            no: 51,
            name: "clone_started_v2",
            kind: "message",
            T: pSe,
            oneof: "payload"
        },
        {
            no: 52,
            name: "clone_completed_v2",
            kind: "message",
            T: hSe,
            oneof: "payload"
        },
        {
            no: 33,
            name: "checkout_started",
            kind: "message",
            T: Hr,
            oneof: "payload"
        },
        {
            no: 34,
            name: "checkout_completed",
            kind: "message",
            T: Hr,
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
            T: iSe,
            oneof: "payload"
        },
        {
            no: 28,
            name: "build_status_line",
            kind: "message",
            T: aSe,
            oneof: "payload"
        },
        {
            no: 29,
            name: "internal_build_message",
            kind: "message",
            T: oSe,
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
            T: mSe,
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
            T: Pf,
            oneof: "payload"
        },
        {
            no: 21,
            name: "extension_install_stderr",
            kind: "message",
            T: Pf,
            oneof: "payload"
        },
        {
            no: 22,
            name: "extension_install_exit_code",
            kind: "message",
            T: V9,
            oneof: "payload"
        },
        {
            no: 35,
            name: "snapshot_started",
            kind: "message",
            T: Hr,
            oneof: "payload"
        },
        {
            no: 36,
            name: "snapshot_completed",
            kind: "message",
            T: Hr,
            oneof: "payload"
        },
        {
            no: 9,
            name: "creation_completed",
            kind: "message",
            T: Hr,
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
            T: Pf,
            oneof: "payload"
        },
        {
            no: 24,
            name: "extension_start_stderr",
            kind: "message",
            T: Pf,
            oneof: "payload"
        },
        {
            no: 25,
            name: "extension_start_exit_code",
            kind: "message",
            T: V9,
            oneof: "payload"
        },
        {
            no: 13,
            name: "startup_completed",
            kind: "message",
            T: Hr,
            oneof: "payload"
        },
        {
            no: 37,
            name: "image_pull_started",
            kind: "message",
            T: cSe,
            oneof: "payload"
        },
        {
            no: 38,
            name: "image_pull_layer_update",
            kind: "message",
            T: lSe,
            oneof: "payload"
        },
        {
            no: 39,
            name: "image_pull_status_update",
            kind: "message",
            T: dSe,
            oneof: "payload"
        },
        {
            no: 40,
            name: "image_pull_completed",
            kind: "message",
            T: uSe,
            oneof: "payload"
        },
        {
            no: 41,
            name: "blocked_repo_state",
            kind: "message",
            T: Xke,
            oneof: "payload"
        },
        {
            no: 42,
            name: "acquired_repo_state",
            kind: "message",
            T: Hr,
            oneof: "payload"
        },
        {
            no: 53,
            name: "private_worker_ready",
            kind: "message",
            T: Hr,
            oneof: "payload"
        },
        {
            no: 54,
            name: "waiting_for_worker",
            kind: "message",
            T: nSe,
            oneof: "payload"
        },
        {
            no: 55,
            name: "span_started",
            kind: "message",
            T: eSe,
            oneof: "payload"
        },
        {
            no: 56,
            name: "span_ended",
            kind: "message",
            T: tSe,
            oneof: "payload"
        },
        {
            no: 57,
            name: "lifecycle_process_restarted",
            kind: "message",
            T: Qke,
            oneof: "payload"
        },
        {
            no: 58,
            name: "lifecycle_process_exited",
            kind: "message",
            T: Zke,
            oneof: "payload"
        }
    ]), Qke = c.makeMessageType("anyrun.v1.LifecycleProcessRestarted", ()=>[
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
            T: c.getEnumType(zke)
        },
        {
            no: 4,
            name: "command_name",
            kind: "scalar",
            T: 9
        }
    ]), Zke = c.makeMessageType("anyrun.v1.LifecycleProcessExited", ()=>[
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
    ]), eSe = c.makeMessageType("anyrun.v1.SpanStarted", ()=>[
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
    ]), tSe = c.makeMessageType("anyrun.v1.SpanEnded", ()=>[
        {
            no: 1,
            name: "span_id",
            kind: "scalar",
            T: 9
        }
    ]), nSe = c.makeMessageType("anyrun.v1.WaitingForWorkerStatus", ()=>[
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
            T: c.getEnumType(Jke)
        }
    ]), rSe = c.makeMessageType("anyrun.v1.HydrationProgress", ()=>[
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
    ]), sSe = c.makeMessageType("anyrun.v1.PodErrorEvent", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), Pf = c.makeMessageType("anyrun.v1.FeatureOutput", ()=>[
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
    ]), V9 = c.makeMessageType("anyrun.v1.FeatureExitCode", ()=>[
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
    ]), iSe = c.makeMessageType("anyrun.v1.BuildStepStarted", ()=>[
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
    ]), aSe = c.makeMessageType("anyrun.v1.BuildStatusLine", ()=>[
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
    ]), oSe = c.makeMessageType("anyrun.v1.InternalBuildMessage", ()=>[
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
    ]), cSe = c.makeMessageType("anyrun.v1.ImagePullStarted", ()=>[
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
    ]), lSe = c.makeMessageType("anyrun.v1.ImagePullLayerUpdate", ()=>[
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
            T: $9,
            oneof: "status"
        },
        {
            no: 10,
            name: "extracting",
            kind: "message",
            T: $9,
            oneof: "status"
        },
        {
            no: 11,
            name: "other",
            kind: "scalar",
            T: 9,
            oneof: "status"
        }
    ]), $9 = c.makeMessageType("anyrun.v1.ProgressDetail", ()=>[
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
    ]), dSe = c.makeMessageType("anyrun.v1.ImagePullStatusUpdate", ()=>[
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
    ]), uSe = c.makeMessageType("anyrun.v1.ImagePullCompleted", ()=>[
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
    ]), mSe = c.makeMessageType("anyrun.v1.InstallCommand", ()=>[
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
    ]), pSe = c.makeMessageType("anyrun.v1.CloneStarted", ()=>[
        {
            no: 1,
            name: "purpose",
            kind: "enum",
            T: c.getEnumType(G9)
        }
    ]), hSe = c.makeMessageType("anyrun.v1.CloneCompleted", ()=>[
        {
            no: 1,
            name: "purpose",
            kind: "enum",
            T: c.getEnumType(G9)
        }
    ]);

}
