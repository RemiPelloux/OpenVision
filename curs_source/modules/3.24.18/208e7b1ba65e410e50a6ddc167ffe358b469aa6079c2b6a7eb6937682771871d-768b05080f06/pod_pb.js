import { SE } from "./common_pb.js";
import { TSe } from "./persisted_dev_container_pb.js";
import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var kSe, SSe, H9, ySe, wSe, ESe, bSe, RSe, CSe, ISe, ASe, MSe;
export { ASe, CSe, ESe, H9, ISe, MSe, RSe, SSe, bSe, kSe, wSe, ySe };
var __wakaru_mat_initialized = false;
export function mat() {
if (__wakaru_mat_initialized) return;
__wakaru_mat_initialized = true;
"use strict";
h(), F(), SE(), TSe(), kSe = c.makeEnum("anyrun.v1.PodCreatingPhase", [
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
]), SSe = c.makeEnum("anyrun.v1.ImagePullFailureCategory", [
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
]), H9 = c.makeMessageType("anyrun.v1.PodStatus", ()=>[
        {
            no: 1,
            name: "creating",
            kind: "message",
            T: ySe,
            oneof: "status"
        },
        {
            no: 2,
            name: "running",
            kind: "message",
            T: wSe,
            oneof: "status"
        },
        {
            no: 3,
            name: "failed",
            kind: "message",
            T: ESe,
            oneof: "status"
        },
        {
            no: 4,
            name: "terminated",
            kind: "message",
            T: bSe,
            oneof: "status"
        }
    ]), ySe = c.makeMessageType("anyrun.v1.PodCreatingStatus", ()=>[
        {
            no: 1,
            name: "phase",
            kind: "enum",
            T: c.getEnumType(kSe)
        }
    ]), wSe = c.makeMessageType("anyrun.v1.PodRunningStatus", ()=>[
        {
            no: 1,
            name: "missed_heartbeat_deadline",
            kind: "scalar",
            T: 4,
            opt: !0
        }
    ]), ESe = c.makeMessageType("anyrun.v1.PodFailedStatus", ()=>[
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
            T: RSe,
            opt: !0
        }
    ]), bSe = c.makeMessageType("anyrun.v1.PodTerminatedStatus", ()=>[
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
    ]), RSe = c.makeMessageType("anyrun.v1.PodFailureDetails", ()=>[
        {
            no: 1,
            name: "install_command_failure",
            kind: "message",
            T: ISe,
            oneof: "details"
        },
        {
            no: 2,
            name: "docker_build_failure",
            kind: "message",
            T: ASe,
            oneof: "details"
        },
        {
            no: 5,
            name: "container_wait_failure",
            kind: "message",
            T: CSe,
            oneof: "details"
        },
        {
            no: 6,
            name: "image_pull_failure",
            kind: "message",
            T: MSe,
            oneof: "details"
        }
    ]), CSe = c.makeMessageType("anyrun.v1.ContainerWaitFailure", ()=>[
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
    ]), ISe = c.makeMessageType("anyrun.v1.InstallCommandFailure", ()=>[
        {
            no: 1,
            name: "is_system",
            kind: "scalar",
            T: 8
        }
    ]), ASe = c.makeMessageType("anyrun.v1.DockerBuildFailure", ()=>[
        {
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 3
        }
    ]), MSe = c.makeMessageType("anyrun.v1.ImagePullFailure", ()=>[
        {
            no: 1,
            name: "category",
            kind: "enum",
            T: c.getEnumType(SSe)
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
