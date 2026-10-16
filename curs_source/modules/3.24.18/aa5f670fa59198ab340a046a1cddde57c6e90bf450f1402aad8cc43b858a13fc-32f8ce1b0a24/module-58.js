require.r(exports);
require.d(exports, {
    AllowedDomain: ()=>AllowedDomain,
    AllowedTcpDestination: ()=>AllowedTcpDestination,
    AntiAffinityTags: ()=>AntiAffinityTags,
    AnygressLocalPodDenyRules: ()=>AnygressLocalPodDenyRules,
    AnygressPerPodDenyRules: ()=>AnygressPerPodDenyRules,
    AnygressPodDenyRule: ()=>AnygressPodDenyRule,
    AnygressPodDenyRuleList: ()=>AnygressPodDenyRuleList,
    BasicEgressProxyAuth: ()=>BasicEgressProxyAuth,
    BearerEgressProxyAuth: ()=>BearerEgressProxyAuth,
    BlobStorageFormat: ()=>BlobStorageFormat,
    BlockCaptureStats: ()=>BlockCaptureStats,
    BlockChunkId: ()=>BlockChunkId,
    BlockManifestId: ()=>BlockManifestId,
    BlockManifestReference: ()=>BlockManifestReference,
    BlockManifestSummary: ()=>BlockManifestSummary,
    BlockV1Options: ()=>BlockV1Options,
    Build: ()=>Build,
    CaptureErrorTag: ()=>CaptureErrorTag,
    CaptureErrorType: ()=>CaptureErrorType,
    CaptureFailureDetails: ()=>CaptureFailureDetails,
    ContainerRuntime: ()=>ContainerRuntime,
    DefaultPortConfig: ()=>DefaultPortConfig,
    DevContainerConfig: ()=>DevContainerConfig,
    DevContainerConfig_RegistryReferenceAlias: ()=>DevContainerConfig_RegistryReferenceAlias,
    DevContainerEnv: ()=>DevContainerEnv,
    DevContainerExecCommand: ()=>DevContainerExecCommand,
    DevContainerSpec: ()=>DevContainerSpec,
    DiskUsage: ()=>DiskUsage,
    DockerArchiveImage: ()=>DockerArchiveImage,
    DockerBuildConfig: ()=>DockerBuildConfig,
    DockerBuildResult: ()=>DockerBuildResult,
    DockerBuildSecretEntry: ()=>DockerBuildSecretEntry,
    DockerImageBuildEvent: ()=>DockerImageBuildEvent,
    DockerImageRef: ()=>DockerImageRef,
    DrainingReason: ()=>DrainingReason,
    DriveIdentity: ()=>DriveIdentity,
    EgressPolicy: ()=>EgressPolicy,
    EgressProxyAuth: ()=>EgressProxyAuth,
    EgressProxyRule: ()=>EgressProxyRule,
    EgressRestricted: ()=>EgressRestricted,
    EmptyExtraDrive: ()=>EmptyExtraDrive,
    EnvironmentBuildBootInfo: ()=>EnvironmentBuildBootInfo,
    EnvironmentBuildResolution: ()=>EnvironmentBuildResolution,
    ExternalSnapshot: ()=>ExternalSnapshot,
    ExtraDrive: ()=>ExtraDrive,
    ExtraDriveAccessMode: ()=>ExtraDriveAccessMode,
    ExtraDriveFilesystem: ()=>ExtraDriveFilesystem,
    ExtraDriveImageSource: ()=>ExtraDriveImageSource,
    FirecrackerVersion: ()=>FirecrackerVersion,
    ImageMetadata: ()=>ImageMetadata,
    InlineBuild: ()=>InlineBuild,
    InvalidImageUserFailure: ()=>InvalidImageUserFailure,
    MemoryUsage: ()=>MemoryUsage,
    MultiSourceEntry: ()=>MultiSourceEntry,
    MultiSourceReference: ()=>MultiSourceReference,
    NoopSourceReference: ()=>NoopSourceReference,
    OidcEgressProxyAuth: ()=>OidcEgressProxyAuth,
    PortDefinition: ()=>PortDefinition,
    RawEgressProxyAuth: ()=>RawEgressProxyAuth,
    RegistryCredentials: ()=>RegistryCredentials,
    ResourceLimits: ()=>ResourceLimits,
    ResourceRequests: ()=>ResourceRequests,
    RootArchiveCompressionAlgorithm: ()=>RootArchiveCompressionAlgorithm,
    RootArchiveDigestAlgorithm: ()=>RootArchiveDigestAlgorithm,
    RootArchiveFormat: ()=>RootArchiveFormat,
    RootArchivePayloadSummary: ()=>RootArchivePayloadSummary,
    S3ObjectSource: ()=>S3ObjectSource,
    ScmConfig: ()=>ScmConfig,
    ScmConfig_AuthMethod: ()=>ScmConfig_AuthMethod,
    SnapshotStartupProfileCommand: ()=>SnapshotStartupProfileCommand,
    SnapshotUsageStats: ()=>SnapshotUsageStats,
    StaticSnapshot: ()=>StaticSnapshot,
    StorageEncryption: ()=>StorageEncryption,
    TarGzipUrlSourceReference: ()=>TarGzipUrlSourceReference,
    UploadPriority: ()=>UploadPriority,
    V4RootArchiveOptions: ()=>V4RootArchiveOptions,
    WarmForkMode: ()=>WarmForkMode,
    WindowsDiskImage: ()=>WindowsDiskImage,
    WorkspaceGitSetupMode: ()=>WorkspaceGitSetupMode
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _pod_daemon_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-59.js");
var _pod_event_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-60.js");
const CaptureErrorType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.CaptureErrorType", [
    {
        no: 0,
        name: "CAPTURE_ERROR_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CAPTURE_ERROR_TYPE_SYSTEM",
        localName: "SYSTEM"
    },
    {
        no: 2,
        name: "CAPTURE_ERROR_TYPE_USER",
        localName: "USER"
    }
]);
const CaptureErrorTag = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.CaptureErrorTag", [
    {
        no: 0,
        name: "CAPTURE_ERROR_TAG_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CAPTURE_ERROR_TAG_INVALID_IMAGE_USER",
        localName: "INVALID_IMAGE_USER"
    }
]);
const DrainingReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.DrainingReason", [
    {
        no: 0,
        name: "DRAINING_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DRAINING_REASON_CAPACITY",
        localName: "CAPACITY"
    },
    {
        no: 2,
        name: "DRAINING_REASON_UPGRADE",
        localName: "UPGRADE"
    },
    {
        no: 3,
        name: "DRAINING_REASON_MANUAL",
        localName: "MANUAL"
    },
    {
        no: 4,
        name: "DRAINING_REASON_HEALTH",
        localName: "HEALTH"
    },
    {
        no: 5,
        name: "DRAINING_REASON_RETIREMENT",
        localName: "RETIREMENT"
    },
    {
        no: 6,
        name: "DRAINING_REASON_COMPACTION",
        localName: "COMPACTION"
    },
    {
        no: 7,
        name: "DRAINING_REASON_CORDON",
        localName: "CORDON"
    }
]);
const UploadPriority = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.UploadPriority", [
    {
        no: 0,
        name: "UPLOAD_PRIORITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "UPLOAD_PRIORITY_P0",
        localName: "P0"
    },
    {
        no: 2,
        name: "UPLOAD_PRIORITY_P1",
        localName: "P1"
    },
    {
        no: 3,
        name: "UPLOAD_PRIORITY_P2",
        localName: "P2"
    }
]);
const ExtraDriveAccessMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.ExtraDriveAccessMode", [
    {
        no: 0,
        name: "EXTRA_DRIVE_ACCESS_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "EXTRA_DRIVE_ACCESS_MODE_READ_ONLY",
        localName: "READ_ONLY"
    },
    {
        no: 2,
        name: "EXTRA_DRIVE_ACCESS_MODE_READ_WRITE",
        localName: "READ_WRITE"
    }
]);
const ExtraDriveFilesystem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.ExtraDriveFilesystem", [
    {
        no: 0,
        name: "EXTRA_DRIVE_FILESYSTEM_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "EXTRA_DRIVE_FILESYSTEM_EXT4",
        localName: "EXT4"
    }
]);
const WorkspaceGitSetupMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.WorkspaceGitSetupMode", [
    {
        no: 0,
        name: "WORKSPACE_GIT_SETUP_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "WORKSPACE_GIT_SETUP_MODE_REUSE",
        localName: "REUSE"
    },
    {
        no: 2,
        name: "WORKSPACE_GIT_SETUP_MODE_REUSE_THEN_CHECKOUT",
        localName: "REUSE_THEN_CHECKOUT"
    },
    {
        no: 3,
        name: "WORKSPACE_GIT_SETUP_MODE_NO_REPO",
        localName: "NO_REPO"
    }
]);
const WarmForkMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.WarmForkMode", [
    {
        no: 0,
        name: "WARM_FORK_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "WARM_FORK_MODE_NONE",
        localName: "NONE"
    },
    {
        no: 2,
        name: "WARM_FORK_MODE_FORKED",
        localName: "FORKED"
    },
    {
        no: 3,
        name: "WARM_FORK_MODE_COLD_FALLBACK",
        localName: "COLD_FALLBACK"
    },
    {
        no: 4,
        name: "WARM_FORK_MODE_LAZY_LOAD",
        localName: "LAZY_LOAD"
    },
    {
        no: 5,
        name: "WARM_FORK_MODE_COLD_FALLBACK_LAZY_LOAD",
        localName: "COLD_FALLBACK_LAZY_LOAD"
    }
]);
const EnvironmentBuildResolution = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.EnvironmentBuildResolution", [
    {
        no: 0,
        name: "ENVIRONMENT_BUILD_RESOLUTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENVIRONMENT_BUILD_RESOLUTION_RESOLVED",
        localName: "RESOLVED"
    },
    {
        no: 2,
        name: "ENVIRONMENT_BUILD_RESOLUTION_NO_FINISHED_BUILDS",
        localName: "NO_FINISHED_BUILDS"
    },
    {
        no: 3,
        name: "ENVIRONMENT_BUILD_RESOLUTION_NO_HEALTHY_BUILDS",
        localName: "NO_HEALTHY_BUILDS"
    }
]);
const ContainerRuntime = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.ContainerRuntime", [
    {
        no: 0,
        name: "CONTAINER_RUNTIME_DOCKERD_UNSPECIFIED",
        localName: "DOCKERD_UNSPECIFIED"
    },
    {
        no: 1,
        name: "CONTAINER_RUNTIME_ISOD_RUNC",
        localName: "ISOD_RUNC"
    },
    {
        no: 2,
        name: "CONTAINER_RUNTIME_WINDOWS_GUEST",
        localName: "WINDOWS_GUEST"
    }
]);
const FirecrackerVersion = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.FirecrackerVersion", [
    {
        no: 0,
        name: "FIRECRACKER_VERSION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "FIRECRACKER_VERSION_V1_12_1",
        localName: "V1_12_1"
    },
    {
        no: 2,
        name: "FIRECRACKER_VERSION_V1_16_1",
        localName: "V1_16_1"
    }
]);
const BlobStorageFormat = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.BlobStorageFormat", [
    {
        no: 0,
        name: "BLOB_STORAGE_FORMAT_LEGACY_UNSPECIFIED",
        localName: "LEGACY_UNSPECIFIED"
    },
    {
        no: 1,
        name: "BLOB_STORAGE_FORMAT_V1",
        localName: "V1"
    },
    {
        no: 2,
        name: "BLOB_STORAGE_FORMAT_VM_SNAPSHOT_V1",
        localName: "VM_SNAPSHOT_V1"
    },
    {
        no: 3,
        name: "BLOB_STORAGE_FORMAT_V2",
        localName: "V2"
    },
    {
        no: 4,
        name: "BLOB_STORAGE_FORMAT_V2_LAYERED",
        localName: "V2_LAYERED"
    },
    {
        no: 5,
        name: "BLOB_STORAGE_FORMAT_V3",
        localName: "V3"
    },
    {
        no: 6,
        name: "BLOB_STORAGE_FORMAT_VM_SNAPSHOT_V2",
        localName: "VM_SNAPSHOT_V2"
    },
    {
        no: 7,
        name: "BLOB_STORAGE_FORMAT_V4",
        localName: "V4"
    },
    {
        no: 8,
        name: "BLOB_STORAGE_FORMAT_V5",
        localName: "V5"
    },
    {
        no: 9,
        name: "BLOB_STORAGE_FORMAT_BLOCK_V1",
        localName: "BLOCK_V1"
    },
    {
        no: 10,
        name: "BLOB_STORAGE_FORMAT_VM_SNAPSHOT_V3",
        localName: "VM_SNAPSHOT_V3"
    }
]);
const RootArchiveFormat = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.RootArchiveFormat", [
    {
        no: 0,
        name: "ROOT_ARCHIVE_FORMAT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ROOT_ARCHIVE_FORMAT_EXT4",
        localName: "EXT4"
    },
    {
        no: 2,
        name: "ROOT_ARCHIVE_FORMAT_SQUASHFS",
        localName: "SQUASHFS"
    },
    {
        no: 3,
        name: "ROOT_ARCHIVE_FORMAT_EROFS",
        localName: "EROFS"
    }
]);
const RootArchiveCompressionAlgorithm = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.RootArchiveCompressionAlgorithm", [
    {
        no: 0,
        name: "ROOT_ARCHIVE_COMPRESSION_ALGORITHM_NONE",
        localName: "NONE"
    },
    {
        no: 1,
        name: "ROOT_ARCHIVE_COMPRESSION_ALGORITHM_ZSTD",
        localName: "ZSTD"
    }
]);
const RootArchiveDigestAlgorithm = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.RootArchiveDigestAlgorithm", [
    {
        no: 0,
        name: "ROOT_ARCHIVE_DIGEST_ALGORITHM_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ROOT_ARCHIVE_DIGEST_ALGORITHM_BLAKE3",
        localName: "BLAKE3"
    },
    {
        no: 2,
        name: "ROOT_ARCHIVE_DIGEST_ALGORITHM_SHA256",
        localName: "SHA256"
    }
]);
const DriveIdentity = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DriveIdentity", ()=>[
        {
            no: 1,
            name: "root",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "identity"
        },
        {
            no: 2,
            name: "drive_id",
            kind: "scalar",
            T: 9,
            oneof: "identity"
        }
    ]);
const ImageMetadata = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ImageMetadata", ()=>[
        {
            no: 1,
            name: "user",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "env",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 3,
            name: "working_dir",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 4,
            name: "arch",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const CaptureFailureDetails = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.CaptureFailureDetails", ()=>[
        {
            no: 1,
            name: "error_type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CaptureErrorType)
        },
        {
            no: 2,
            name: "error_tag",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CaptureErrorTag)
        },
        {
            no: 3,
            name: "invalid_image_user",
            kind: "message",
            T: InvalidImageUserFailure,
            oneof: "details"
        },
        {
            no: 4,
            name: "is_client_error",
            kind: "scalar",
            T: 8
        }
    ]);
const InvalidImageUserFailure = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.InvalidImageUserFailure", ()=>[
        {
            no: 1,
            name: "user",
            kind: "scalar",
            T: 9
        }
    ]);
const PortDefinition = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PortDefinition", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "port",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "public",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "visibility"
        },
        {
            no: 4,
            name: "private",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "visibility"
        },
        {
            no: 5,
            name: "open",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "authentication"
        },
        {
            no: 6,
            name: "token",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "authentication"
        }
    ]);
const DefaultPortConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DefaultPortConfig", ()=>[
        {
            no: 1,
            name: "public",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "visibility"
        },
        {
            no: 2,
            name: "private",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "visibility"
        },
        {
            no: 3,
            name: "open",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "authentication"
        },
        {
            no: 4,
            name: "token",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "authentication"
        }
    ]);
const DevContainerExecCommand = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DevContainerExecCommand", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "user",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "is_system",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "cache_key",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "failure_tolerant",
            kind: "scalar",
            T: 8
        },
        {
            no: 7,
            name: "depends_on",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 10,
            name: "ignore_failure_for_install_health",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "durable_supervision",
            kind: "message",
            T: _pod_daemon_pb_js__WEBPACK_IMPORTED_MODULE_1__.ProcessSupervision,
            opt: true
        }
    ]);
const ResourceRequests = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ResourceRequests", ()=>[
        {
            no: 1,
            name: "cpu_mcores",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "memory_mb",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "disk_mb",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "gpu_count",
            kind: "scalar",
            T: 4
        }
    ]);
const ResourceLimits = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ResourceLimits", ()=>[
        {
            no: 1,
            name: "cpu_mcores",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 2,
            name: "memory_mb",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 3,
            name: "disk_mb",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 4,
            name: "swap_mb",
            kind: "scalar",
            T: 4,
            opt: true
        }
    ]);
const SnapshotUsageStats = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SnapshotUsageStats", ()=>[
        {
            no: 1,
            name: "max_memory_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "avg_cpu_mcores",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "sample_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "last_updated_timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "max_cache_adjusted_memory_bytes",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 6,
            name: "cache_adjusted_sample_count",
            kind: "scalar",
            T: 13
        }
    ]);
const DiskUsage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DiskUsage", ()=>[
        {
            no: 1,
            name: "bytes_used",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "bytes_total",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "busy_percentage",
            kind: "scalar",
            T: 1,
            opt: true
        }
    ]);
const MemoryUsage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.MemoryUsage", ()=>[
        {
            no: 1,
            name: "bytes_used",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "bytes_total",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "collected_at_timestamp",
            kind: "scalar",
            T: 4
        }
    ]);
const EmptyExtraDrive = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.EmptyExtraDrive", ()=>[
        {
            no: 1,
            name: "filesystem",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ExtraDriveFilesystem)
        }
    ]);
const ExtraDriveImageSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ExtraDriveImageSource", ()=>[
        {
            no: 1,
            name: "drive_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "image_config_path",
            kind: "scalar",
            T: 9
        }
    ]);
const ExtraDrive = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ExtraDrive", ()=>[
        {
            no: 1,
            name: "drive_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "mount_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "size_mib",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 4,
            name: "access_mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ExtraDriveAccessMode)
        },
        {
            no: 5,
            name: "snapshot_id",
            kind: "scalar",
            T: 9,
            oneof: "source"
        },
        {
            no: 6,
            name: "empty",
            kind: "message",
            T: EmptyExtraDrive,
            oneof: "source"
        },
        {
            no: 7,
            name: "static_snapshot",
            kind: "message",
            T: StaticSnapshot,
            oneof: "source"
        }
    ]);
const EnvironmentBuildBootInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.EnvironmentBuildBootInfo", ()=>[
        {
            no: 1,
            name: "build_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "workspace_git_setup_mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(WorkspaceGitSetupMode)
        },
        {
            no: 4,
            name: "warm_fork_mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(WarmForkMode)
        },
        {
            no: 5,
            name: "fast_forward_default_branch",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "resolution",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(EnvironmentBuildResolution)
        },
        {
            no: 7,
            name: "default_image_fallback",
            kind: "scalar",
            T: 8
        }
    ]);
const TarGzipUrlSourceReference = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.TarGzipUrlSourceReference", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9
        }
    ]);
const NoopSourceReference = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.NoopSourceReference", []);
const MultiSourceEntry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.MultiSourceEntry", ()=>[
        {
            no: 1,
            name: "relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "tar_gzip_url",
            kind: "message",
            T: TarGzipUrlSourceReference,
            oneof: "source"
        },
        {
            no: 6,
            name: "noop",
            kind: "message",
            T: NoopSourceReference,
            oneof: "source"
        }
    ]);
const MultiSourceReference = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.MultiSourceReference", ()=>[
        {
            no: 1,
            name: "sources",
            kind: "message",
            T: MultiSourceEntry,
            repeated: true
        }
    ]);
const AnygressPodDenyRule = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.AnygressPodDenyRule", ()=>[
        {
            no: 1,
            name: "verb",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const AnygressPodDenyRuleList = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.AnygressPodDenyRuleList", ()=>[
        {
            no: 1,
            name: "rules",
            kind: "message",
            T: AnygressPodDenyRule,
            repeated: true
        }
    ]);
const AnygressPerPodDenyRules = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.AnygressPerPodDenyRules", ()=>[
        {
            no: 1,
            name: "denies",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: AnygressPodDenyRuleList
            }
        }
    ]);
const AnygressLocalPodDenyRules = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.AnygressLocalPodDenyRules", ()=>[
        {
            no: 1,
            name: "version",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "pod_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "deny_rules",
            kind: "message",
            T: AnygressPerPodDenyRules
        }
    ]);
const DevContainerSpec = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DevContainerSpec", ()=>[
        {
            no: 5,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 23,
            name: "platform",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
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
            no: 7,
            name: "pod_labels",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 8,
            name: "node_labels",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 27,
            name: "low_cardinality_pod_labels",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 9,
            name: "requests",
            kind: "message",
            T: ResourceRequests
        },
        {
            no: 16,
            name: "hibernated_requests",
            kind: "message",
            T: ResourceRequests
        },
        {
            no: 10,
            name: "limits",
            kind: "message",
            T: ResourceLimits
        },
        {
            no: 13,
            name: "cache",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 20,
            name: "enable_base_container_cache",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 18,
            name: "enable_checkpoint_read",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 19,
            name: "enable_checkpoint_write",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 17,
            name: "blob_storage_format",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BlobStorageFormat)
        },
        {
            no: 15,
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
            no: 12,
            name: "config",
            kind: "message",
            T: DevContainerConfig
        },
        {
            no: 22,
            name: "persist_config",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 24,
            name: "expected_fork_count",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 26,
            name: "egress_policy",
            kind: "message",
            T: EgressPolicy,
            opt: true
        },
        {
            no: 28,
            name: "anygress_per_pod_deny_rules",
            kind: "message",
            T: AnygressPerPodDenyRules,
            opt: true
        },
        {
            no: 32,
            name: "anti_affinity_tags",
            kind: "message",
            T: AntiAffinityTags,
            opt: true
        },
        {
            no: 35,
            name: "v4_root_archive_options",
            kind: "message",
            T: V4RootArchiveOptions,
            opt: true
        },
        {
            no: 38,
            name: "enable_writable_ublk_eager_hydrate",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 40,
            name: "cold_after_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 41,
            name: "extra_drives",
            kind: "message",
            T: ExtraDrive,
            repeated: true
        },
        {
            no: 42,
            name: "block_v1_options",
            kind: "message",
            T: BlockV1Options,
            opt: true
        }
    ]);
const AntiAffinityTags = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.AntiAffinityTags", ()=>[
        {
            no: 1,
            name: "tags",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const DevContainerEnv = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DevContainerEnv", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "inline",
            kind: "scalar",
            T: 9,
            oneof: "value"
        },
        {
            no: 3,
            name: "encrypted",
            kind: "scalar",
            T: 9,
            oneof: "value"
        },
        {
            no: 4,
            name: "value_hash",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const ExternalSnapshot = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ExternalSnapshot", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "presigned_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "image_metadata",
            kind: "message",
            T: ImageMetadata
        },
        {
            no: 4,
            name: "blob_storage_format",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(BlobStorageFormat)
        },
        {
            no: 5,
            name: "node_machine_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "cpu_baseline_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "usage_stats",
            kind: "message",
            T: SnapshotUsageStats,
            opt: true
        },
        {
            no: 8,
            name: "v4_root_archive_options",
            kind: "message",
            T: V4RootArchiveOptions,
            opt: true
        }
    ]);
const DockerArchiveImage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DockerArchiveImage", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "registry_reference",
            kind: "scalar",
            T: 9
        }
    ]);
const WindowsDiskImage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.WindowsDiskImage", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sha256",
            kind: "scalar",
            T: 9
        }
    ]);
const S3ObjectSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.S3ObjectSource", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sha256",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const StaticSnapshot = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.StaticSnapshot", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const DevContainerConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DevContainerConfig", ()=>[
        {
            no: 16,
            name: "tar_gzip_url",
            kind: "message",
            T: TarGzipUrlSourceReference,
            oneof: "source"
        },
        {
            no: 22,
            name: "noop",
            kind: "message",
            T: NoopSourceReference,
            oneof: "source"
        },
        {
            no: 31,
            name: "multi",
            kind: "message",
            T: MultiSourceReference,
            oneof: "source"
        },
        {
            no: 4,
            name: "registry_reference",
            kind: "scalar",
            T: 9,
            oneof: "image"
        },
        {
            no: 5,
            name: "snapshot_id",
            kind: "scalar",
            T: 9,
            oneof: "image"
        },
        {
            no: 6,
            name: "build",
            kind: "message",
            T: Build,
            oneof: "image"
        },
        {
            no: 27,
            name: "external_snapshot",
            kind: "message",
            T: ExternalSnapshot,
            oneof: "image"
        },
        {
            no: 28,
            name: "checkpoint_group_id",
            kind: "scalar",
            T: 9,
            oneof: "image"
        },
        {
            no: 32,
            name: "registry_reference_alias",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(DevContainerConfig_RegistryReferenceAlias),
            oneof: "image"
        },
        {
            no: 33,
            name: "inline_build",
            kind: "message",
            T: InlineBuild,
            oneof: "image"
        },
        {
            no: 38,
            name: "docker_archive",
            kind: "message",
            T: DockerArchiveImage,
            oneof: "image"
        },
        {
            no: 42,
            name: "windows_disk_url",
            kind: "scalar",
            T: 9,
            oneof: "image"
        },
        {
            no: 41,
            name: "windows_disk",
            kind: "message",
            T: WindowsDiskImage,
            oneof: "image"
        },
        {
            no: 43,
            name: "static_snapshot",
            kind: "message",
            T: StaticSnapshot,
            oneof: "image"
        },
        {
            no: 7,
            name: "workspace_path",
            kind: "scalar",
            T: 9,
            oneof: "workspace"
        },
        {
            no: 18,
            name: "workdir_relative_path",
            kind: "scalar",
            T: 9,
            oneof: "workspace"
        },
        {
            no: 19,
            name: "prepare_commands_tag",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 8,
            name: "prepare_commands",
            kind: "message",
            T: DevContainerExecCommand,
            repeated: true
        },
        {
            no: 20,
            name: "install_commands_tag",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 9,
            name: "install_commands",
            kind: "message",
            T: DevContainerExecCommand,
            repeated: true
        },
        {
            no: 24,
            name: "verify_commands_tag",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 25,
            name: "verify_commands",
            kind: "message",
            T: DevContainerExecCommand,
            repeated: true
        },
        {
            no: 21,
            name: "start_commands_tag",
            kind: "scalar",
            T: 12,
            opt: true
        },
        {
            no: 10,
            name: "start_commands",
            kind: "message",
            T: DevContainerExecCommand,
            repeated: true
        },
        {
            no: 11,
            name: "ports",
            kind: "message",
            T: PortDefinition,
            repeated: true
        },
        {
            no: 26,
            name: "default_port_config",
            kind: "message",
            T: DefaultPortConfig,
            opt: true
        },
        {
            no: 12,
            name: "user",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "env",
            kind: "message",
            T: DevContainerEnv,
            repeated: true
        },
        {
            no: 14,
            name: "shell",
            kind: "scalar",
            T: 9
        },
        {
            no: 17,
            name: "privileged",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 29,
            name: "build_container",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 23,
            name: "checkpoint_threshold_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 30,
            name: "enable_cgroup_subtree_control",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 34,
            name: "enable_checkpoint_scratch_drive",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 35,
            name: "blob_client_resilience_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 36,
            name: "skip_workspace_source_checkout",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 37,
            name: "container_runtime",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ContainerRuntime)
        },
        {
            no: 39,
            name: "firecracker_version",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(FirecrackerVersion)
        },
        {
            no: 40,
            name: "hostname",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const DevContainerConfig_RegistryReferenceAlias = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.DevContainerConfig.RegistryReferenceAlias", [
    {
        no: 0,
        name: "REGISTRY_REFERENCE_ALIAS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REGISTRY_REFERENCE_ALIAS_BUILDER",
        localName: "BUILDER"
    }
]);
const Build = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.Build", ()=>[
        {
            no: 1,
            name: "dockerfile",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "context",
            kind: "scalar",
            T: 9
        }
    ]);
const InlineBuild = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.InlineBuild", ()=>[
        {
            no: 1,
            name: "dockerfile_contents",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "context",
            kind: "scalar",
            T: 9
        }
    ]);
const DockerBuildSecretEntry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DockerBuildSecretEntry", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "inline",
            kind: "scalar",
            T: 9,
            oneof: "value"
        },
        {
            no: 3,
            name: "encrypted",
            kind: "scalar",
            T: 9,
            oneof: "value"
        },
        {
            no: 4,
            name: "value_hash",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const DockerBuildConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DockerBuildConfig", ()=>[
        {
            no: 1,
            name: "dockerfile",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "context",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "user",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "registry_cache_ref",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "cache_registry_credentials",
            kind: "message",
            T: RegistryCredentials
        },
        {
            no: 6,
            name: "build_secrets",
            kind: "message",
            T: DockerBuildSecretEntry,
            repeated: true
        },
        {
            no: 7,
            name: "cache_from_refs",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const RegistryCredentials = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.RegistryCredentials", ()=>[
        {
            no: 1,
            name: "registry_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "username",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "password",
            kind: "scalar",
            T: 9
        }
    ]);
const DockerImageRef = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DockerImageRef", ()=>[
        {
            no: 1,
            name: "registry_reference",
            kind: "scalar",
            T: 9
        }
    ]);
const DockerBuildResult = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DockerBuildResult", ()=>[
        {
            no: 1,
            name: "image",
            kind: "message",
            T: DockerImageRef
        }
    ]);
const DockerImageBuildEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DockerImageBuildEvent", ()=>[
        {
            no: 1,
            name: "creation_timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "queued",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "payload"
        },
        {
            no: 3,
            name: "started",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "payload"
        },
        {
            no: 4,
            name: "build_status_message",
            kind: "scalar",
            T: 9,
            oneof: "payload"
        },
        {
            no: 5,
            name: "build_step_started",
            kind: "message",
            T: _pod_event_pb_js__WEBPACK_IMPORTED_MODULE_2__.BuildStepStarted,
            oneof: "payload"
        },
        {
            no: 6,
            name: "build_status_line",
            kind: "message",
            T: _pod_event_pb_js__WEBPACK_IMPORTED_MODULE_2__.BuildStatusLine,
            oneof: "payload"
        },
        {
            no: 7,
            name: "internal_build_message",
            kind: "message",
            T: _pod_event_pb_js__WEBPACK_IMPORTED_MODULE_2__.InternalBuildMessage,
            oneof: "payload"
        },
        {
            no: 8,
            name: "error",
            kind: "message",
            T: _pod_event_pb_js__WEBPACK_IMPORTED_MODULE_2__.PodErrorEvent,
            oneof: "payload"
        },
        {
            no: 9,
            name: "completed",
            kind: "message",
            T: DockerBuildResult,
            oneof: "payload"
        },
        {
            no: 10,
            name: "build_exit_code",
            kind: "scalar",
            T: 5,
            oneof: "payload"
        }
    ]);
const EgressPolicy = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.EgressPolicy", ()=>[
        {
            no: 1,
            name: "allow_all",
            kind: "message",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.Empty,
            oneof: "policy"
        },
        {
            no: 2,
            name: "restricted",
            kind: "message",
            T: EgressRestricted,
            oneof: "policy"
        },
        {
            no: 3,
            name: "scm",
            kind: "message",
            T: ScmConfig,
            repeated: true
        },
        {
            no: 4,
            name: "use_scm_egress_config",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "http_proxy",
            kind: "message",
            T: EgressProxyRule,
            repeated: true
        }
    ]);
const EgressProxyRule = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.EgressProxyRule", ()=>[
        {
            no: 1,
            name: "hosts",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "proxy_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "auth",
            kind: "message",
            T: EgressProxyAuth,
            opt: true
        },
        {
            no: 4,
            name: "connect_headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]);
const EgressProxyAuth = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.EgressProxyAuth", ()=>[
        {
            no: 1,
            name: "oidc",
            kind: "message",
            T: OidcEgressProxyAuth,
            oneof: "source"
        },
        {
            no: 2,
            name: "basic",
            kind: "message",
            T: BasicEgressProxyAuth,
            oneof: "source"
        },
        {
            no: 3,
            name: "bearer",
            kind: "message",
            T: BearerEgressProxyAuth,
            oneof: "source"
        },
        {
            no: 4,
            name: "raw",
            kind: "message",
            T: RawEgressProxyAuth,
            oneof: "source"
        }
    ]);
const BasicEgressProxyAuth = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.BasicEgressProxyAuth", ()=>[
        {
            no: 1,
            name: "username",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "password",
            kind: "scalar",
            T: 9
        }
    ]);
const BearerEgressProxyAuth = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.BearerEgressProxyAuth", ()=>[
        {
            no: 1,
            name: "token",
            kind: "scalar",
            T: 9
        }
    ]);
const RawEgressProxyAuth = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.RawEgressProxyAuth", ()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]);
const OidcEgressProxyAuth = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.OidcEgressProxyAuth", ()=>[
        {
            no: 1,
            name: "audience",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "sub_claim",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const EgressRestricted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.EgressRestricted", ()=>[
        {
            no: 1,
            name: "allowed_domains",
            kind: "message",
            T: AllowedDomain,
            repeated: true
        },
        {
            no: 2,
            name: "allowed_tcp_destinations",
            kind: "message",
            T: AllowedTcpDestination,
            repeated: true
        }
    ]);
const AllowedDomain = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.AllowedDomain", ()=>[
        {
            no: 1,
            name: "domain",
            kind: "scalar",
            T: 9
        }
    ]);
const AllowedTcpDestination = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.AllowedTcpDestination", ()=>[
        {
            no: 1,
            name: "cidr",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "port",
            kind: "scalar",
            T: 13
        }
    ]);
const ScmConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ScmConfig", ()=>[
        {
            no: 1,
            name: "domain",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "auth_value",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "proxy_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "auth_method",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(ScmConfig_AuthMethod)
        }
    ]);
const ScmConfig_AuthMethod = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.ScmConfig.AuthMethod", [
    {
        no: 0,
        name: "AUTH_METHOD_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "AUTH_METHOD_BASIC",
        localName: "BASIC"
    },
    {
        no: 2,
        name: "AUTH_METHOD_BEARER",
        localName: "BEARER"
    }
]);
const BlockChunkId = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.BlockChunkId", ()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]);
const BlockManifestId = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.BlockManifestId", ()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]);
const BlockV1Options = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.BlockV1Options", ()=>[
        {
            no: 1,
            name: "filesystem_format",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RootArchiveFormat)
        },
        {
            no: 2,
            name: "logical_block_size_bytes",
            kind: "scalar",
            T: 4
        }
    ]);
const BlockCaptureStats = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.BlockCaptureStats", ()=>[
        {
            no: 1,
            name: "logical_blocks",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "inherited_blocks",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "read_blocks",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "sparse_blocks",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "unique_changed_chunks",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "head_requests",
            kind: "scalar",
            T: 4
        },
        {
            no: 7,
            name: "existing_chunks",
            kind: "scalar",
            T: 4
        },
        {
            no: 8,
            name: "put_chunks",
            kind: "scalar",
            T: 4
        },
        {
            no: 9,
            name: "uploaded_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 10,
            name: "static_chunk_blocks",
            kind: "scalar",
            T: 4
        }
    ]);
const BlockManifestSummary = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.BlockManifestSummary", ()=>[
        {
            no: 1,
            name: "filesystem_format",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RootArchiveFormat)
        },
        {
            no: 2,
            name: "logical_size_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "logical_block_size_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "chunk_count",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "capture_stats",
            kind: "message",
            T: BlockCaptureStats,
            opt: true
        }
    ]);
const BlockManifestReference = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.BlockManifestReference", ()=>[
        {
            no: 1,
            name: "manifest_id",
            kind: "message",
            T: BlockManifestId
        },
        {
            no: 2,
            name: "summary",
            kind: "message",
            T: BlockManifestSummary
        },
        {
            no: 3,
            name: "encryption",
            kind: "message",
            T: StorageEncryption
        }
    ]);
const StorageEncryption = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.StorageEncryption", ()=>[
        {
            no: 1,
            name: "aws_kms_key_arn",
            kind: "scalar",
            T: 9,
            oneof: "scheme"
        }
    ]);
const RootArchivePayloadSummary = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.RootArchivePayloadSummary", ()=>[
        {
            no: 1,
            name: "logical_payload_length",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "compression_algorithm",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RootArchiveCompressionAlgorithm)
        },
        {
            no: 3,
            name: "compression_block_size",
            kind: "scalar",
            T: 4
        }
    ]);
const V4RootArchiveOptions = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.V4RootArchiveOptions", ()=>[
        {
            no: 1,
            name: "format",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RootArchiveFormat)
        },
        {
            no: 2,
            name: "payload_summary",
            kind: "message",
            T: RootArchivePayloadSummary,
            opt: true
        }
    ]);
const SnapshotStartupProfileCommand = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SnapshotStartupProfileCommand", ()=>[
        {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "command",
            kind: "scalar",
            T: 9,
            repeated: true
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
            name: "working_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "env",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]);
