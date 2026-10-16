import { $Nn } from "./common_pb.js";
import { M3d } from "./persisted_dev_container_pb.js";
import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var P3d, L3d, oco, N3d, O3d, F3d, B3d, U3d, $3d, H3d, W3d, G3d;
export { $3d, B3d, F3d, G3d, H3d, L3d, N3d, O3d, P3d, U3d, W3d, oco };
var __wakaru_KEv_initialized = false;
export function KEv() {
if (__wakaru_KEv_initialized) return;
__wakaru_KEv_initialized = true;
"use strict";
x(), bi(), $Nn(), M3d(), P3d = k.makeEnum("anyrun.v1.PodCreatingPhase", [
    {
        no: 0,
        name: "POD_CREATING_PHASE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "POD_CREATING_PHASE_CLONE",
        localName: "CLONE"
    },
    {
        no: 2,
        name: "POD_CREATING_PHASE_BUILD",
        localName: "BUILD"
    },
    {
        no: 3,
        name: "POD_CREATING_PHASE_POST_CREATE",
        localName: "POST_CREATE"
    },
    {
        no: 4,
        name: "POD_CREATING_PHASE_UPDATE_CONTENT",
        localName: "UPDATE_CONTENT"
    },
    {
        no: 5,
        name: "POD_CREATING_PHASE_POST_START",
        localName: "POST_START"
    },
    {
        no: 6,
        name: "POD_CREATING_PHASE_QUEUED",
        localName: "QUEUED"
    }
]), L3d = k.makeEnum("anyrun.v1.ImagePullFailureCategory", [
    {
        no: 0,
        name: "IMAGE_PULL_FAILURE_CATEGORY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "IMAGE_PULL_FAILURE_CATEGORY_DENIED",
        localName: "DENIED"
    },
    {
        no: 2,
        name: "IMAGE_PULL_FAILURE_CATEGORY_UNAUTHORIZED",
        localName: "UNAUTHORIZED"
    },
    {
        no: 3,
        name: "IMAGE_PULL_FAILURE_CATEGORY_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 4,
        name: "IMAGE_PULL_FAILURE_CATEGORY_RATE_LIMITED",
        localName: "RATE_LIMITED"
    },
    {
        no: 5,
        name: "IMAGE_PULL_FAILURE_CATEGORY_UPSTREAM",
        localName: "UPSTREAM"
    }
]), oco = k.makeMessageType("anyrun.v1.PodStatus", ()=>[
        {
            no: 1,
            name: "creating",
            kind: "message",
            T: N3d,
            oneof: "status"
        },
        {
            no: 2,
            name: "running",
            kind: "message",
            T: O3d,
            oneof: "status"
        },
        {
            no: 3,
            name: "failed",
            kind: "message",
            T: F3d,
            oneof: "status"
        },
        {
            no: 4,
            name: "terminated",
            kind: "message",
            T: B3d,
            oneof: "status"
        }
    ]), N3d = k.makeMessageType("anyrun.v1.PodCreatingStatus", ()=>[
        {
            no: 1,
            name: "phase",
            kind: "enum",
            T: k.getEnumType(P3d)
        }
    ]), O3d = k.makeMessageType("anyrun.v1.PodRunningStatus", ()=>[
        {
            no: 1,
            name: "missed_heartbeat_deadline",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), F3d = k.makeMessageType("anyrun.v1.PodFailedStatus", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "failure_details",
            kind: "message",
            T: U3d,
            opt: !0
        }
    ]), B3d = k.makeMessageType("anyrun.v1.PodTerminatedStatus", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "exit_code",
            kind: "scalar",
            T: 13,
            opt: !0
        }
    ]), U3d = k.makeMessageType("anyrun.v1.PodFailureDetails", ()=>[
        {
            no: 1,
            name: "install_command_failure",
            kind: "message",
            T: H3d,
            oneof: "details"
        },
        {
            no: 2,
            name: "docker_build_failure",
            kind: "message",
            T: W3d,
            oneof: "details"
        },
        {
            no: 5,
            name: "container_wait_failure",
            kind: "message",
            T: $3d,
            oneof: "details"
        },
        {
            no: 6,
            name: "image_pull_failure",
            kind: "message",
            T: G3d,
            oneof: "details"
        }
    ]), $3d = k.makeMessageType("anyrun.v1.ContainerWaitFailure", ()=>[
        {
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), H3d = k.makeMessageType("anyrun.v1.InstallCommandFailure", ()=>[
        {
            no: 1,
            name: "is_system",
            kind: "scalar",
            T: 8
        }
    ]), W3d = k.makeMessageType("anyrun.v1.DockerBuildFailure", ()=>[
        {
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 3
        }
    ]), G3d = k.makeMessageType("anyrun.v1.ImagePullFailure", ()=>[
        {
            no: 1,
            name: "category",
            kind: "enum",
            T: k.getEnumType(L3d)
        },
        {
            no: 2,
            name: "retryable",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "http_status",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "repository",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]);

}
