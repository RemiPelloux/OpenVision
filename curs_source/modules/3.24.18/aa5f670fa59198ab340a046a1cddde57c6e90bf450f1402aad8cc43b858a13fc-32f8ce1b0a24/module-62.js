require.r(exports);
require.d(exports, {
    ColdStatePodRecord: ()=>ColdStatePodRecord,
    ExtraDriveSnapshotMetadata: ()=>ExtraDriveSnapshotMetadata,
    Snapshot: ()=>Snapshot,
    SnapshotCategory: ()=>SnapshotCategory,
    SnapshotCollection: ()=>SnapshotCollection,
    SnapshotDiskEnvelope: ()=>SnapshotDiskEnvelope,
    SnapshotDriveArtifactFile: ()=>SnapshotDriveArtifactFile,
    SnapshotExtraDriveFile: ()=>SnapshotExtraDriveFile,
    SnapshotFileChunk: ()=>SnapshotFileChunk,
    SnapshotMemoryCell: ()=>SnapshotMemoryCell,
    SnapshotMemoryCellAttributes: ()=>SnapshotMemoryCellAttributes,
    SnapshotMemoryHashAlgorithm: ()=>SnapshotMemoryHashAlgorithm,
    SnapshotMemoryPrefetchHint: ()=>SnapshotMemoryPrefetchHint,
    SnapshotState: ()=>SnapshotState,
    SnapshotVmBackend: ()=>SnapshotVmBackend,
    SnapshotVmSnapshotV1Metadata: ()=>SnapshotVmSnapshotV1Metadata,
    SnapshotVmSnapshotV2Metadata: ()=>SnapshotVmSnapshotV2Metadata,
    SnapshotVmSnapshotV3Metadata: ()=>SnapshotVmSnapshotV3Metadata
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _persisted_dev_container_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-61.js");
var _common_pb_js__WEBPACK_IMPORTED_MODULE_2__ = require("./module-58.js");
const SnapshotState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.SnapshotState", [
    {
        no: 0,
        name: "SNAPSHOT_STATE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SNAPSHOT_STATE_CREATING",
        localName: "CREATING"
    },
    {
        no: 2,
        name: "SNAPSHOT_STATE_READY",
        localName: "READY"
    },
    {
        no: 3,
        name: "SNAPSHOT_STATE_FAILED",
        localName: "FAILED"
    },
    {
        no: 4,
        name: "SNAPSHOT_STATE_FINALIZING",
        localName: "FINALIZING"
    }
]);
const SnapshotCategory = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.SnapshotCategory", [
    {
        no: 0,
        name: "SNAPSHOT_CATEGORY_EXPLICIT_FORMAT",
        localName: "EXPLICIT_FORMAT"
    },
    {
        no: 1,
        name: "SNAPSHOT_CATEGORY_FULL_VM",
        localName: "FULL_VM"
    }
]);
const SnapshotVmBackend = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.SnapshotVmBackend", [
    {
        no: 0,
        name: "SNAPSHOT_VM_BACKEND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SNAPSHOT_VM_BACKEND_FIRECRACKER",
        localName: "FIRECRACKER"
    },
    {
        no: 2,
        name: "SNAPSHOT_VM_BACKEND_CLOUD_HYPERVISOR",
        localName: "CLOUD_HYPERVISOR"
    }
]);
const SnapshotMemoryHashAlgorithm = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.SnapshotMemoryHashAlgorithm", [
    {
        no: 0,
        name: "SNAPSHOT_MEMORY_HASH_ALGORITHM_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "SNAPSHOT_MEMORY_HASH_ALGORITHM_SHA256",
        localName: "SHA256"
    },
    {
        no: 2,
        name: "SNAPSHOT_MEMORY_HASH_ALGORITHM_BLAKE3",
        localName: "BLAKE3"
    }
]);
const ExtraDriveSnapshotMetadata = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ExtraDriveSnapshotMetadata", ()=>[
        {
            no: 1,
            name: "source_pod_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "source_drive_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 3,
            name: "capture_completed_timestamp",
            kind: "scalar",
            T: 4
        }
    ]);
const Snapshot = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.Snapshot", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "resource_version",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "labels",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 5,
            name: "creation_timestamp",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "deletion_timestamp",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 12,
            name: "deletion_duration_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 14,
            name: "archive_timestamp",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 15,
            name: "archive_duration_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 7,
            name: "tenant_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "pod_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "pod_config",
            kind: "message",
            T: _persisted_dev_container_pb_js__WEBPACK_IMPORTED_MODULE_1__.PersistedDevContainerConfig,
            opt: true
        },
        {
            no: 9,
            name: "state",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SnapshotState)
        },
        {
            no: 10,
            name: "image_metadata",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_2__.ImageMetadata
        },
        {
            no: 11,
            name: "blob_storage_format",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_common_pb_js__WEBPACK_IMPORTED_MODULE_2__.BlobStorageFormat)
        },
        {
            no: 16,
            name: "node_machine_type",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "resource_requests",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_2__.ResourceRequests,
            opt: true
        },
        {
            no: 18,
            name: "resource_limits",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_2__.ResourceLimits,
            opt: true
        },
        {
            no: 19,
            name: "cpu_baseline_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 20,
            name: "usage_stats",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_2__.SnapshotUsageStats,
            opt: true
        },
        {
            no: 21,
            name: "object_size_bytes",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 22,
            name: "v4_root_archive_options",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_2__.V4RootArchiveOptions,
            opt: true
        },
        {
            no: 23,
            name: "failure_reason",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 24,
            name: "failure_details",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_2__.CaptureFailureDetails,
            opt: true
        },
        {
            no: 25,
            name: "last_accessed_timestamp",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 26,
            name: "extra_drive",
            kind: "message",
            T: ExtraDriveSnapshotMetadata,
            opt: true
        },
        {
            no: 27,
            name: "block_manifest",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_2__.BlockManifestReference,
            opt: true
        }
    ]);
const SnapshotCollection = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SnapshotCollection", ()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: Snapshot,
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
const SnapshotFileChunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SnapshotFileChunk", ()=>[
        {
            no: 1,
            name: "blob_begin",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "blob_end",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "file_begin",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "file_end",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "hash",
            kind: "scalar",
            T: 9
        }
    ]);
const SnapshotExtraDriveFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SnapshotExtraDriveFile", ()=>[
        {
            no: 1,
            name: "drive_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_chunks",
            kind: "message",
            T: SnapshotFileChunk,
            repeated: true
        },
        {
            no: 3,
            name: "file_size",
            kind: "scalar",
            T: 4
        }
    ]);
const SnapshotDriveArtifactFile = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SnapshotDriveArtifactFile", ()=>[
        {
            no: 1,
            name: "artifact_reference",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file_chunks",
            kind: "message",
            T: SnapshotFileChunk,
            repeated: true
        },
        {
            no: 3,
            name: "file_size",
            kind: "scalar",
            T: 4
        }
    ]);
const SnapshotVmSnapshotV1Metadata = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SnapshotVmSnapshotV1Metadata", ()=>[
        {
            no: 1,
            name: "rootfs_file_chunks",
            kind: "message",
            T: SnapshotFileChunk,
            repeated: true
        },
        {
            no: 2,
            name: "rootfs_file_size",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "memory_file_chunk",
            kind: "message",
            T: SnapshotFileChunk
        },
        {
            no: 4,
            name: "state_file_chunk",
            kind: "message",
            T: SnapshotFileChunk
        },
        {
            no: 5,
            name: "kernel_file_chunk",
            kind: "message",
            T: SnapshotFileChunk
        },
        {
            no: 6,
            name: "dev_container_metadata",
            kind: "message",
            T: _persisted_dev_container_pb_js__WEBPACK_IMPORTED_MODULE_1__.IsoDevContainerMetadata
        },
        {
            no: 7,
            name: "extra_drive_files",
            kind: "message",
            T: SnapshotExtraDriveFile,
            repeated: true
        },
        {
            no: 8,
            name: "drive_artifact_files",
            kind: "message",
            T: SnapshotDriveArtifactFile,
            repeated: true
        },
        {
            no: 9,
            name: "vm_backend",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SnapshotVmBackend)
        },
        {
            no: 10,
            name: "config_file_chunk",
            kind: "message",
            T: SnapshotFileChunk
        }
    ]);
const SnapshotMemoryCell = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SnapshotMemoryCell", ()=>[
        {
            no: 1,
            name: "blob_begin",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "blob_end",
            kind: "scalar",
            T: 4
        }
    ]);
const SnapshotMemoryCellAttributes = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SnapshotMemoryCellAttributes", ()=>[
        {
            no: 1,
            name: "chunk_index",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "hash",
            kind: "scalar",
            T: 12,
            opt: true
        }
    ]);
const SnapshotMemoryPrefetchHint = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SnapshotMemoryPrefetchHint", ()=>[
        {
            no: 1,
            name: "version",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "payload",
            kind: "scalar",
            T: 12
        }
    ]);
const SnapshotVmSnapshotV2Metadata = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SnapshotVmSnapshotV2Metadata", ()=>[
        {
            no: 1,
            name: "rootfs_file_chunks",
            kind: "message",
            T: SnapshotFileChunk,
            repeated: true
        },
        {
            no: 2,
            name: "rootfs_file_size",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "memory_cells",
            kind: "message",
            T: SnapshotMemoryCell,
            repeated: true
        },
        {
            no: 4,
            name: "memory_file_size",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "memory_cell_size",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "state_file_chunk",
            kind: "message",
            T: SnapshotFileChunk
        },
        {
            no: 7,
            name: "kernel_file_chunk",
            kind: "message",
            T: SnapshotFileChunk
        },
        {
            no: 8,
            name: "dev_container_metadata",
            kind: "message",
            T: _persisted_dev_container_pb_js__WEBPACK_IMPORTED_MODULE_1__.IsoDevContainerMetadata
        },
        {
            no: 9,
            name: "extra_drive_files",
            kind: "message",
            T: SnapshotExtraDriveFile,
            repeated: true
        },
        {
            no: 10,
            name: "memory_prefetch_hint",
            kind: "message",
            T: SnapshotMemoryPrefetchHint,
            opt: true
        },
        {
            no: 11,
            name: "memory_hash_algorithm",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SnapshotMemoryHashAlgorithm)
        },
        {
            no: 12,
            name: "memory_cell_attrs",
            kind: "message",
            T: SnapshotMemoryCellAttributes,
            repeated: true
        },
        {
            no: 13,
            name: "drive_artifact_files",
            kind: "message",
            T: SnapshotDriveArtifactFile,
            repeated: true
        },
        {
            no: 14,
            name: "cold_pod",
            kind: "message",
            T: ColdStatePodRecord,
            opt: true
        },
        {
            no: 15,
            name: "vm_backend",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SnapshotVmBackend)
        },
        {
            no: 16,
            name: "config_file_chunk",
            kind: "message",
            T: SnapshotFileChunk
        }
    ]);
const ColdStatePodRecord = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ColdStatePodRecord", ()=>[
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
            no: 3,
            name: "pod_cycle",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "resource_requests",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_2__.ResourceRequests,
            opt: true
        },
        {
            no: 5,
            name: "container_runtime",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_common_pb_js__WEBPACK_IMPORTED_MODULE_2__.ContainerRuntime)
        },
        {
            no: 6,
            name: "startup_cpu_claim_mcores",
            kind: "scalar",
            T: 4
        },
        {
            no: 7,
            name: "base_checkpoint_index_json",
            kind: "scalar",
            T: 12
        },
        {
            no: 8,
            name: "written_at_ms",
            kind: "scalar",
            T: 4
        },
        {
            no: 9,
            name: "clock",
            kind: "scalar",
            T: 13
        }
    ]);
const SnapshotDiskEnvelope = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SnapshotDiskEnvelope", ()=>[
        {
            no: 1,
            name: "drive_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "blob_begin",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "blob_end",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "file_size",
            kind: "scalar",
            T: 4
        }
    ]);
const SnapshotVmSnapshotV3Metadata = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SnapshotVmSnapshotV3Metadata", ()=>[
        {
            no: 1,
            name: "memory_cells",
            kind: "message",
            T: SnapshotMemoryCell,
            repeated: true
        },
        {
            no: 2,
            name: "memory_file_size",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "memory_cell_size",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "state_file_chunk",
            kind: "message",
            T: SnapshotFileChunk
        },
        {
            no: 5,
            name: "kernel_file_chunk",
            kind: "message",
            T: SnapshotFileChunk
        },
        {
            no: 6,
            name: "dev_container_metadata",
            kind: "message",
            T: _persisted_dev_container_pb_js__WEBPACK_IMPORTED_MODULE_1__.IsoDevContainerMetadata
        },
        {
            no: 7,
            name: "memory_prefetch_hint",
            kind: "message",
            T: SnapshotMemoryPrefetchHint,
            opt: true
        },
        {
            no: 8,
            name: "memory_hash_algorithm",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SnapshotMemoryHashAlgorithm)
        },
        {
            no: 9,
            name: "memory_cell_attrs",
            kind: "message",
            T: SnapshotMemoryCellAttributes,
            repeated: true
        },
        {
            no: 10,
            name: "drive_artifact_files",
            kind: "message",
            T: SnapshotDriveArtifactFile,
            repeated: true
        },
        {
            no: 11,
            name: "disk_envelopes",
            kind: "message",
            T: SnapshotDiskEnvelope,
            repeated: true
        }
    ]);
