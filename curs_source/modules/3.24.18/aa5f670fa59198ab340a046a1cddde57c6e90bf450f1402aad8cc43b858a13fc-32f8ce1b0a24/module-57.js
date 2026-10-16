require.r(exports);
require.d(exports, {
    ContainerWaitFailure: ()=>ContainerWaitFailure,
    DaemonPod: ()=>DaemonPod,
    DockerBuildFailure: ()=>DockerBuildFailure,
    ImagePullFailure: ()=>ImagePullFailure,
    ImagePullFailureCategory: ()=>ImagePullFailureCategory,
    InstallCommandFailure: ()=>InstallCommandFailure,
    Pod: ()=>Pod,
    PodCollection: ()=>PodCollection,
    PodCreatingPhase: ()=>PodCreatingPhase,
    PodCreatingStatus: ()=>PodCreatingStatus,
    PodDrainHibernation: ()=>PodDrainHibernation,
    PodFailedStatus: ()=>PodFailedStatus,
    PodFailureDetails: ()=>PodFailureDetails,
    PodFilter: ()=>PodFilter,
    PodHibernationReport: ()=>PodHibernationReport,
    PodMeshLink: ()=>PodMeshLink,
    PodPorts: ()=>PodPorts,
    PodRunningStatus: ()=>PodRunningStatus,
    PodStartCacheSource: ()=>PodStartCacheSource,
    PodStatus: ()=>PodStatus,
    PodTerminatedStatus: ()=>PodTerminatedStatus,
    PodUpdate: ()=>PodUpdate,
    PortState: ()=>PortState
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _common_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-58.js");
var _persisted_dev_container_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-61.js");
const PodStartCacheSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.PodStartCacheSource", [
    {
        no: 0,
        name: "POD_START_CACHE_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "POD_START_CACHE_SOURCE_NODE_LOCAL_FIRECRACKER_SNAPSHOT",
        localName: "NODE_LOCAL_FIRECRACKER_SNAPSHOT"
    },
    {
        no: 2,
        name: "POD_START_CACHE_SOURCE_REMOTE_ROOTAR_CHECKPOINT",
        localName: "REMOTE_ROOTAR_CHECKPOINT"
    },
    {
        no: 3,
        name: "POD_START_CACHE_SOURCE_NODE_LOCAL_CLOUD_HYPERVISOR_SNAPSHOT",
        localName: "NODE_LOCAL_CLOUD_HYPERVISOR_SNAPSHOT"
    }
]);
const PodCreatingPhase = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.PodCreatingPhase", [
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
]);
const ImagePullFailureCategory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.ImagePullFailureCategory", [
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
]);
const PodPorts = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodPorts", ()=>[
        {
            no: 1,
            name: "ports",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.PortDefinition,
            repeated: true
        },
        {
            no: 2,
            name: "default_port_config",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.DefaultPortConfig,
            opt: true
        }
    ]);
const PortState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PortState", ()=>[
        {
            no: 1,
            name: "port_name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "container_port",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "host_port",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "public",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "visibility"
        },
        {
            no: 5,
            name: "private",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "visibility"
        },
        {
            no: 6,
            name: "open",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "authentication"
        },
        {
            no: 7,
            name: "token",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "authentication"
        }
    ]);
const PodStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodStatus", ()=>[
        {
            no: 1,
            name: "creating",
            kind: "message",
            T: PodCreatingStatus,
            oneof: "status"
        },
        {
            no: 2,
            name: "running",
            kind: "message",
            T: PodRunningStatus,
            oneof: "status"
        },
        {
            no: 3,
            name: "failed",
            kind: "message",
            T: PodFailedStatus,
            oneof: "status"
        },
        {
            no: 4,
            name: "terminated",
            kind: "message",
            T: PodTerminatedStatus,
            oneof: "status"
        }
    ]);
const PodMeshLink = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodMeshLink", ()=>[
        {
            no: 1,
            name: "target_pod_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "virtual_ip",
            kind: "scalar",
            T: 9
        }
    ]);
const PodDrainHibernation = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodDrainHibernation", ()=>[
        {
            no: 1,
            name: "draining_since_timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "forced",
            kind: "scalar",
            T: 8
        }
    ]);
const Pod = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.Pod", ()=>[
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
        },
        {
            no: 9,
            name: "resource_version",
            kind: "scalar",
            T: 13
        },
        {
            no: 10,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "labels",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 12,
            name: "creation_timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 13,
            name: "deletion_timestamp",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 14,
            name: "hibernation_timestamp",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 4,
            name: "resource_requests",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.ResourceRequests
        },
        {
            no: 17,
            name: "resource_limits",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLimits,
            opt: true
        },
        {
            no: 18,
            name: "cache",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 19,
            name: "cache_tag",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 21,
            name: "workload",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "hibernated",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 7,
            name: "network_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "status",
            kind: "message",
            T: PodStatus
        },
        {
            no: 6,
            name: "ports",
            kind: "message",
            T: PodPorts
        },
        {
            no: 22,
            name: "internal_proxy_port",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 16,
            name: "config",
            kind: "message",
            T: _persisted_dev_container_pb_js__WEBPACK_IMPORTED_MODULE_2__.PersistedDevContainerConfig,
            opt: true
        },
        {
            no: 23,
            name: "modified_timestamp",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 24,
            name: "pod_awake_since",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 25,
            name: "low_cardinality_labels",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 26,
            name: "checkpoint_group_ids",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 27,
            name: "started_from_checkpoint_group_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 30,
            name: "started_from_checkpoint_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 28,
            name: "started_from_cache_source",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PodStartCacheSource),
            opt: true
        },
        {
            no: 29,
            name: "started_from_checkpoint_creation_timestamp",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 31,
            name: "anti_affinity_tags",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.AntiAffinityTags,
            opt: true
        },
        {
            no: 32,
            name: "collect_metrics",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 34,
            name: "mesh_links",
            kind: "message",
            T: PodMeshLink,
            repeated: true
        },
        {
            no: 35,
            name: "container_runtime",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_common_pb_js__WEBPACK_IMPORTED_MODULE_1__.ContainerRuntime)
        },
        {
            no: 40,
            name: "cold",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 41,
            name: "cold_after_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 42,
            name: "pod_hibernated_since",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 43,
            name: "extra_drives",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.ExtraDrive,
            repeated: true
        },
        {
            no: 44,
            name: "drain_hibernation",
            kind: "message",
            T: PodDrainHibernation,
            opt: true
        },
        {
            no: 45,
            name: "resume_rejected_migrating_since",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 46,
            name: "migration_cutover_pending_resume",
            kind: "scalar",
            T: 8
        },
        {
            no: 47,
            name: "completed_migration_count",
            kind: "scalar",
            T: 4
        }
    ]);
const PodCollection = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodCollection", ()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: Pod,
            repeated: true
        },
        {
            no: 2,
            name: "next_cursor",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const PodUpdate = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodUpdate", ()=>[
        {
            no: 1,
            name: "event_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "initial",
            kind: "message",
            T: PodCollection,
            oneof: "update"
        },
        {
            no: 3,
            name: "added",
            kind: "message",
            T: Pod,
            oneof: "update"
        },
        {
            no: 4,
            name: "updated",
            kind: "message",
            T: Pod,
            oneof: "update"
        },
        {
            no: 5,
            name: "removed",
            kind: "message",
            T: Pod,
            oneof: "update"
        }
    ]);
const PodFilter = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodFilter", ()=>[
        {
            no: 1,
            name: "pod_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "labels",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]);
const PodCreatingStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodCreatingStatus", ()=>[
        {
            no: 1,
            name: "phase",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PodCreatingPhase)
        }
    ]);
const PodRunningStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodRunningStatus", ()=>[
        {
            no: 1,
            name: "missed_heartbeat_deadline",
            kind: "scalar",
            T: 4,
            opt: true
        }
    ]);
const PodFailedStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodFailedStatus", ()=>[
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
            T: PodFailureDetails,
            opt: true
        }
    ]);
const PodTerminatedStatus = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodTerminatedStatus", ()=>[
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
            opt: true
        }
    ]);
const PodFailureDetails = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodFailureDetails", ()=>[
        {
            no: 1,
            name: "install_command_failure",
            kind: "message",
            T: InstallCommandFailure,
            oneof: "details"
        },
        {
            no: 2,
            name: "docker_build_failure",
            kind: "message",
            T: DockerBuildFailure,
            oneof: "details"
        },
        {
            no: 5,
            name: "container_wait_failure",
            kind: "message",
            T: ContainerWaitFailure,
            oneof: "details"
        },
        {
            no: 6,
            name: "image_pull_failure",
            kind: "message",
            T: ImagePullFailure,
            oneof: "details"
        }
    ]);
const ContainerWaitFailure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ContainerWaitFailure", ()=>[
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
    ]);
const InstallCommandFailure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.InstallCommandFailure", ()=>[
        {
            no: 1,
            name: "is_system",
            kind: "scalar",
            T: 8
        }
    ]);
const DockerBuildFailure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DockerBuildFailure", ()=>[
        {
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 3
        }
    ]);
const ImagePullFailure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ImagePullFailure", ()=>[
        {
            no: 1,
            name: "category",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ImagePullFailureCategory)
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
            opt: true
        },
        {
            no: 4,
            name: "repository",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const DaemonPod = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DaemonPod", ()=>[
        {
            no: 2,
            name: "status",
            kind: "message",
            T: PodStatus
        },
        {
            no: 3,
            name: "internal_proxy_port",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 4,
            name: "default_port_config",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.DefaultPortConfig,
            opt: true
        },
        {
            no: 5,
            name: "started_from_checkpoint_group_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "started_from_checkpoint_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "started_from_cache_source",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PodStartCacheSource),
            opt: true
        },
        {
            no: 7,
            name: "started_from_checkpoint_creation_timestamp",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 9,
            name: "cold",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 10,
            name: "extra_drives",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.ExtraDrive,
            repeated: true
        },
        {
            no: 11,
            name: "hibernation",
            kind: "message",
            T: PodHibernationReport
        }
    ]);
const PodHibernationReport = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodHibernationReport", ()=>[
        {
            no: 1,
            name: "hibernated",
            kind: "scalar",
            T: 8
        },
        {
            no: 2,
            name: "clock",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "transitioned_at",
            kind: "scalar",
            T: 4
        }
    ]);
