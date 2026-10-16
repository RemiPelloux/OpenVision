import { _wi } from "./common_pb.js";
import { JTm } from "./persisted_dev_container_pb.js";
import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var eEm, tEm, x$a, nEm, iEm, rEm, sEm, oEm, aEm, lEm, cEm, uEm;
export { aEm, cEm, eEm, iEm, lEm, nEm, oEm, rEm, sEm, tEm, uEm, x$a };
var __wakaru_GU1_initialized = false;
export function GU1() {
if (__wakaru_GU1_initialized) return;
__wakaru_GU1_initialized = true;
"use strict";
E(), hr(), _wi(), JTm(), eEm = x.makeEnum("anyrun.v1.PodCreatingPhase", [
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
]), tEm = x.makeEnum("anyrun.v1.ImagePullFailureCategory", [
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
]), x$a = x.makeMessageType("anyrun.v1.PodStatus", ()=>[
        {
            no: 1,
            name: "creating",
            kind: "message",
            T: nEm,
            oneof: "status"
        },
        {
            no: 2,
            name: "running",
            kind: "message",
            T: iEm,
            oneof: "status"
        },
        {
            no: 3,
            name: "failed",
            kind: "message",
            T: rEm,
            oneof: "status"
        },
        {
            no: 4,
            name: "terminated",
            kind: "message",
            T: sEm,
            oneof: "status"
        }
    ]), nEm = x.makeMessageType("anyrun.v1.PodCreatingStatus", ()=>[
        {
            no: 1,
            name: "phase",
            kind: "enum",
            T: x.getEnumType(eEm)
        }
    ]), iEm = x.makeMessageType("anyrun.v1.PodRunningStatus", ()=>[
        {
            no: 1,
            name: "missed_heartbeat_deadline",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), rEm = x.makeMessageType("anyrun.v1.PodFailedStatus", ()=>[
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
            T: oEm,
            opt: !0
        }
    ]), sEm = x.makeMessageType("anyrun.v1.PodTerminatedStatus", ()=>[
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
    ]), oEm = x.makeMessageType("anyrun.v1.PodFailureDetails", ()=>[
        {
            no: 1,
            name: "install_command_failure",
            kind: "message",
            T: lEm,
            oneof: "details"
        },
        {
            no: 2,
            name: "docker_build_failure",
            kind: "message",
            T: cEm,
            oneof: "details"
        },
        {
            no: 5,
            name: "container_wait_failure",
            kind: "message",
            T: aEm,
            oneof: "details"
        },
        {
            no: 6,
            name: "image_pull_failure",
            kind: "message",
            T: uEm,
            oneof: "details"
        }
    ]), aEm = x.makeMessageType("anyrun.v1.ContainerWaitFailure", ()=>[
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
    ]), lEm = x.makeMessageType("anyrun.v1.InstallCommandFailure", ()=>[
        {
            no: 1,
            name: "is_system",
            kind: "scalar",
            T: 8
        }
    ]), cEm = x.makeMessageType("anyrun.v1.DockerBuildFailure", ()=>[
        {
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 3
        }
    ]), uEm = x.makeMessageType("anyrun.v1.ImagePullFailure", ()=>[
        {
            no: 1,
            name: "category",
            kind: "enum",
            T: x.getEnumType(tEm)
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
