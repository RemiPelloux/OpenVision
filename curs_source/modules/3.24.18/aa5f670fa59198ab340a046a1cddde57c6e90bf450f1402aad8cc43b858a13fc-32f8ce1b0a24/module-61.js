require.r(exports);
require.d(exports, {
    DaemonCommandHandlerPersistentState: ()=>DaemonCommandHandlerPersistentState,
    DockerContainerPersistentState: ()=>DockerContainerPersistentState,
    DockerDevContainerPersistentState: ()=>DockerDevContainerPersistentState,
    IsoDevContainerMetadata: ()=>IsoDevContainerMetadata,
    IsoEnvBalloonConfig: ()=>IsoEnvBalloonConfig,
    IsoEnvConfig: ()=>IsoEnvConfig,
    IsoEnvExtraDriveConfig: ()=>IsoEnvExtraDriveConfig,
    IsoEnvExtraDrivePurpose: ()=>IsoEnvExtraDrivePurpose,
    LazyBackingSource: ()=>LazyBackingSource,
    NetworkInfo: ()=>NetworkInfo,
    PersistedCdcFileChunk: ()=>PersistedCdcFileChunk,
    PersistedCdcVmSnapshotSource: ()=>PersistedCdcVmSnapshotSource,
    PersistedDevContainerConfig: ()=>PersistedDevContainerConfig,
    PersistedDriveDescriptor: ()=>PersistedDriveDescriptor,
    PersistedEnvVar: ()=>PersistedEnvVar,
    PersistedExternalSnapshot: ()=>PersistedExternalSnapshot,
    PersistedFileDriveDescriptor: ()=>PersistedFileDriveDescriptor,
    PersistedLazyCheckpointSource: ()=>PersistedLazyCheckpointSource,
    PersistedLazyColdStateSource: ()=>PersistedLazyColdStateSource,
    PersistedLazySnapshotSource: ()=>PersistedLazySnapshotSource,
    PersistedLazySquashfsDriveDescriptor: ()=>PersistedLazySquashfsDriveDescriptor,
    PersistedMultiSource: ()=>PersistedMultiSource,
    PersistedMultiSourceEntry: ()=>PersistedMultiSourceEntry,
    PersistedNoopSource: ()=>PersistedNoopSource,
    PersistedQcow2BackingFormat: ()=>PersistedQcow2BackingFormat,
    PersistedQcow2DriveDescriptor: ()=>PersistedQcow2DriveDescriptor,
    PersistedRegionalRuntimeArtifactSource: ()=>PersistedRegionalRuntimeArtifactSource,
    PersistedRuntimeArtifactSource: ()=>PersistedRuntimeArtifactSource,
    PersistedTarGzipUrlSource: ()=>PersistedTarGzipUrlSource,
    PersistedVmSnapshotDiskSource: ()=>PersistedVmSnapshotDiskSource,
    PersistedWritableUblkDriveDescriptor: ()=>PersistedWritableUblkDriveDescriptor,
    PersistedZeroBlockSource: ()=>PersistedZeroBlockSource,
    RuntimeStatePersistentState: ()=>RuntimeStatePersistentState,
    WorkspaceConfig: ()=>WorkspaceConfig,
    WritableDisk: ()=>WritableDisk,
    WritableFilesystem: ()=>WritableFilesystem
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
var _common_pb_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-58.js");
const PersistedQcow2BackingFormat = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.PersistedQcow2BackingFormat", [
    {
        no: 0,
        name: "PERSISTED_QCOW2_BACKING_FORMAT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PERSISTED_QCOW2_BACKING_FORMAT_RAW",
        localName: "RAW"
    },
    {
        no: 2,
        name: "PERSISTED_QCOW2_BACKING_FORMAT_QCOW2",
        localName: "QCOW2"
    }
]);
const WritableFilesystem = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.WritableFilesystem", [
    {
        no: 0,
        name: "WRITABLE_FILESYSTEM_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "WRITABLE_FILESYSTEM_EXT4",
        localName: "EXT4"
    }
]);
const WritableDisk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.WritableDisk", [
    {
        no: 0,
        name: "WRITABLE_DISK_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "WRITABLE_DISK_WHOLE",
        localName: "WHOLE"
    }
]);
const IsoEnvExtraDrivePurpose = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.IsoEnvExtraDrivePurpose", [
    {
        no: 0,
        name: "ISO_ENV_EXTRA_DRIVE_PURPOSE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ISO_ENV_EXTRA_DRIVE_PURPOSE_CHECKPOINT_SCRATCH",
        localName: "CHECKPOINT_SCRATCH"
    },
    {
        no: 2,
        name: "ISO_ENV_EXTRA_DRIVE_PURPOSE_USER_EXTRA_DRIVE",
        localName: "USER_EXTRA_DRIVE"
    }
]);
const PersistedTarGzipUrlSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedTarGzipUrlSource", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        }
    ]);
const PersistedNoopSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedNoopSource", []);
const PersistedMultiSourceEntry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedMultiSourceEntry", ()=>[
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
            T: PersistedTarGzipUrlSource,
            oneof: "source"
        },
        {
            no: 6,
            name: "noop",
            kind: "message",
            T: PersistedNoopSource,
            oneof: "source"
        }
    ]);
const PersistedMultiSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedMultiSource", ()=>[
        {
            no: 1,
            name: "sources",
            kind: "message",
            T: PersistedMultiSourceEntry,
            repeated: true
        }
    ]);
const PersistedExternalSnapshot = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedExternalSnapshot", ()=>[
        {
            no: 1,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cpu_baseline_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const PersistedEnvVar = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedEnvVar", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]);
const PersistedDevContainerConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedDevContainerConfig", ()=>[
        {
            no: 4,
            name: "tar_gzip_url",
            kind: "message",
            T: PersistedTarGzipUrlSource,
            oneof: "source"
        },
        {
            no: 18,
            name: "noop",
            kind: "message",
            T: PersistedNoopSource,
            oneof: "source"
        },
        {
            no: 23,
            name: "multi",
            kind: "message",
            T: PersistedMultiSource,
            oneof: "source"
        },
        {
            no: 5,
            name: "registry_reference",
            kind: "scalar",
            T: 9,
            oneof: "image"
        },
        {
            no: 6,
            name: "build",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.Build,
            oneof: "image"
        },
        {
            no: 7,
            name: "snapshot_id",
            kind: "scalar",
            T: 9,
            oneof: "image"
        },
        {
            no: 20,
            name: "external_snapshot",
            kind: "message",
            T: PersistedExternalSnapshot,
            oneof: "image"
        },
        {
            no: 21,
            name: "checkpoint_group_id",
            kind: "scalar",
            T: 9,
            oneof: "image"
        },
        {
            no: 24,
            name: "registry_reference_alias",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_common_pb_js__WEBPACK_IMPORTED_MODULE_1__.DevContainerConfig_RegistryReferenceAlias),
            oneof: "image"
        },
        {
            no: 34,
            name: "windows_disk_sha256",
            kind: "scalar",
            T: 9,
            oneof: "image"
        },
        {
            no: 35,
            name: "static_snapshot_path",
            kind: "scalar",
            T: 9,
            oneof: "image"
        },
        {
            no: 8,
            name: "workspace_path",
            kind: "scalar",
            T: 9,
            oneof: "workspace"
        },
        {
            no: 9,
            name: "workdir_relative_path",
            kind: "scalar",
            T: 9,
            oneof: "workspace"
        },
        {
            no: 10,
            name: "prepare_commands",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.DevContainerExecCommand,
            repeated: true
        },
        {
            no: 11,
            name: "install_commands",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.DevContainerExecCommand,
            repeated: true
        },
        {
            no: 19,
            name: "verify_commands",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.DevContainerExecCommand,
            repeated: true
        },
        {
            no: 12,
            name: "start_commands",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.DevContainerExecCommand,
            repeated: true
        },
        {
            no: 13,
            name: "env",
            kind: "message",
            T: PersistedEnvVar,
            repeated: true
        },
        {
            no: 14,
            name: "ports",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.PortDefinition,
            repeated: true
        },
        {
            no: 15,
            name: "shell",
            kind: "scalar",
            T: 9
        },
        {
            no: 16,
            name: "user",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 17,
            name: "privileged",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 22,
            name: "build_container",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 25,
            name: "enable_checkpoint_scratch_drive",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 26,
            name: "blob_client_resilience_enabled",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 27,
            name: "container_runtime",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_common_pb_js__WEBPACK_IMPORTED_MODULE_1__.ContainerRuntime)
        },
        {
            no: 28,
            name: "firecracker_version",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_common_pb_js__WEBPACK_IMPORTED_MODULE_1__.FirecrackerVersion)
        },
        {
            no: 32,
            name: "enable_writable_ublk_eager_hydrate",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 33,
            name: "hostname",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const IsoDevContainerMetadata = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.IsoDevContainerMetadata", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "persistent_state",
            kind: "message",
            T: DockerDevContainerPersistentState
        },
        {
            no: 3,
            name: "env_config",
            kind: "message",
            T: IsoEnvConfig
        },
        {
            no: 4,
            name: "drive_descriptors",
            kind: "message",
            T: PersistedDriveDescriptor,
            repeated: true
        }
    ]);
const PersistedDriveDescriptor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedDriveDescriptor", ()=>[
        {
            no: 1,
            name: "file_v1",
            kind: "message",
            T: PersistedFileDriveDescriptor,
            oneof: "descriptor"
        },
        {
            no: 2,
            name: "lazy_squashfs_v1",
            kind: "message",
            T: PersistedLazySquashfsDriveDescriptor,
            oneof: "descriptor"
        },
        {
            no: 3,
            name: "writable_ublk_v1",
            kind: "message",
            T: PersistedWritableUblkDriveDescriptor,
            oneof: "descriptor"
        },
        {
            no: 4,
            name: "qcow2_v1",
            kind: "message",
            T: PersistedQcow2DriveDescriptor,
            oneof: "descriptor"
        }
    ]);
const PersistedFileDriveDescriptor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedFileDriveDescriptor", ()=>[
        {
            no: 1,
            name: "artifact_reference",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "drive_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "guest_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "is_root_device",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "size_mib",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const PersistedQcow2DriveDescriptor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedQcow2DriveDescriptor", ()=>[
        {
            no: 1,
            name: "artifact_reference",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "drive_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "guest_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "is_root_device",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "size_mib",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 6,
            name: "backing_format",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(PersistedQcow2BackingFormat)
        }
    ]);
const PersistedLazySquashfsDriveDescriptor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedLazySquashfsDriveDescriptor", ()=>[
        {
            no: 1,
            name: "drive_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "guest_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "snapshot",
            kind: "message",
            T: PersistedLazySnapshotSource,
            oneof: "source"
        },
        {
            no: 5,
            name: "checkpoint",
            kind: "message",
            T: PersistedLazyCheckpointSource,
            oneof: "source"
        },
        {
            no: 4,
            name: "chunk_size",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "blob_storage_format",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_common_pb_js__WEBPACK_IMPORTED_MODULE_1__.BlobStorageFormat),
            opt: true
        },
        {
            no: 7,
            name: "v4_root_archive_options",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.V4RootArchiveOptions,
            opt: true
        },
        {
            no: 8,
            name: "block_manifest",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.BlockManifestReference,
            opt: true
        }
    ]);
const PersistedLazySnapshotSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedLazySnapshotSource", ()=>[
        {
            no: 1,
            name: "tenant_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        }
    ]);
const PersistedLazyCheckpointSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedLazyCheckpointSource", ()=>[
        {
            no: 1,
            name: "tenant_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "checkpoint_id",
            kind: "scalar",
            T: 9
        }
    ]);
const PersistedRuntimeArtifactSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedRuntimeArtifactSource", ()=>[
        {
            no: 1,
            name: "object_url",
            kind: "scalar",
            T: 9
        }
    ]);
const PersistedRegionalRuntimeArtifactSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedRegionalRuntimeArtifactSource", ()=>[
        {
            no: 1,
            name: "object_key",
            kind: "scalar",
            T: 9
        }
    ]);
const LazyBackingSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.LazyBackingSource", ()=>[
        {
            no: 1,
            name: "snapshot",
            kind: "message",
            T: PersistedLazySnapshotSource,
            oneof: "source"
        },
        {
            no: 2,
            name: "checkpoint",
            kind: "message",
            T: PersistedLazyCheckpointSource,
            oneof: "source"
        }
    ]);
const PersistedZeroBlockSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedZeroBlockSource", []);
const PersistedCdcFileChunk = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedCdcFileChunk", ()=>[
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
            name: "sha256",
            kind: "scalar",
            T: 12
        }
    ]);
const PersistedCdcVmSnapshotSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedCdcVmSnapshotSource", ()=>[
        {
            no: 1,
            name: "tenant_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "file_chunks",
            kind: "message",
            T: PersistedCdcFileChunk,
            repeated: true
        },
        {
            no: 4,
            name: "file_size",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "cold_state",
            kind: "message",
            T: PersistedLazyColdStateSource
        }
    ]);
const PersistedLazyColdStateSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedLazyColdStateSource", ()=>[
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
            name: "key",
            kind: "scalar",
            T: 9
        }
    ]);
const PersistedVmSnapshotDiskSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedVmSnapshotDiskSource", ()=>[
        {
            no: 1,
            name: "tenant_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "snapshot_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "blob_begin",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "blob_end",
            kind: "scalar",
            T: 4
        }
    ]);
const PersistedWritableUblkDriveDescriptor = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PersistedWritableUblkDriveDescriptor", ()=>[
        {
            no: 1,
            name: "drive_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "guest_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "snapshot",
            kind: "message",
            T: PersistedLazySnapshotSource,
            oneof: "source"
        },
        {
            no: 4,
            name: "checkpoint",
            kind: "message",
            T: PersistedLazyCheckpointSource,
            oneof: "source"
        },
        {
            no: 8,
            name: "zero",
            kind: "message",
            T: PersistedZeroBlockSource,
            oneof: "source"
        },
        {
            no: 9,
            name: "cdc_vm_snapshot",
            kind: "message",
            T: PersistedCdcVmSnapshotSource,
            oneof: "source"
        },
        {
            no: 12,
            name: "runtime_artifact",
            kind: "message",
            T: PersistedRuntimeArtifactSource,
            oneof: "source"
        },
        {
            no: 15,
            name: "vm_snapshot_disk",
            kind: "message",
            T: PersistedVmSnapshotDiskSource,
            oneof: "source"
        },
        {
            no: 16,
            name: "regional_runtime_artifact",
            kind: "message",
            T: PersistedRegionalRuntimeArtifactSource,
            oneof: "source"
        },
        {
            no: 5,
            name: "filesystem",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(WritableFilesystem)
        },
        {
            no: 17,
            name: "disk",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(WritableDisk)
        },
        {
            no: 6,
            name: "overlay_artifact_reference",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "device_size_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 10,
            name: "is_root_device",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "jail_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 13,
            name: "preserve_inode_geometry",
            kind: "scalar",
            T: 8
        },
        {
            no: 14,
            name: "block_manifest",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.BlockManifestReference,
            opt: true
        }
    ]);
const IsoEnvExtraDriveConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.IsoEnvExtraDriveConfig", ()=>[
        {
            no: 1,
            name: "purpose",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(IsoEnvExtraDrivePurpose)
        },
        {
            no: 3,
            name: "size_mib",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "drive_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "guest_device",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "guest_mount_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "workload_mount_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 8,
            name: "access_mode",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_common_pb_js__WEBPACK_IMPORTED_MODULE_1__.ExtraDriveAccessMode)
        },
        {
            no: 9,
            name: "snapshot_id",
            kind: "scalar",
            T: 9,
            oneof: "user_source"
        },
        {
            no: 10,
            name: "empty",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.EmptyExtraDrive,
            oneof: "user_source"
        },
        {
            no: 11,
            name: "static_snapshot_path",
            kind: "scalar",
            T: 9,
            oneof: "user_source"
        }
    ]);
const IsoEnvBalloonConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.IsoEnvBalloonConfig", ()=>[
        {
            no: 1,
            name: "amount_mib",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "deflate_on_oom",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "stats_polling_interval_s",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const IsoEnvConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.IsoEnvConfig", ()=>[
        {
            no: 1,
            name: "vcpu_count",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "mem_size_mib",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "swap_size_mib",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 4,
            name: "rootfs_size_mib",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 5,
            name: "extra_drives",
            kind: "message",
            T: IsoEnvExtraDriveConfig,
            repeated: true
        },
        {
            no: 6,
            name: "balloon",
            kind: "message",
            T: IsoEnvBalloonConfig,
            opt: true
        },
        {
            no: 7,
            name: "firecracker_version",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(_common_pb_js__WEBPACK_IMPORTED_MODULE_1__.FirecrackerVersion)
        },
        {
            no: 8,
            name: "gpu_count",
            kind: "scalar",
            T: 13
        }
    ]);
const DockerDevContainerPersistentState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DockerDevContainerPersistentState", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "container",
            kind: "message",
            T: DockerContainerPersistentState
        },
        {
            no: 3,
            name: "runtime_state",
            kind: "message",
            T: RuntimeStatePersistentState
        },
        {
            no: 4,
            name: "image_metadata",
            kind: "message",
            T: _common_pb_js__WEBPACK_IMPORTED_MODULE_1__.ImageMetadata
        },
        {
            no: 5,
            name: "network_info",
            kind: "message",
            T: NetworkInfo
        },
        {
            no: 6,
            name: "user",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "shell",
            kind: "scalar",
            T: 9
        },
        {
            no: 8,
            name: "daemon_port",
            kind: "scalar",
            T: 13
        },
        {
            no: 9,
            name: "workspace",
            kind: "message",
            T: WorkspaceConfig
        },
        {
            no: 10,
            name: "v2_hydrated",
            kind: "scalar",
            T: 8
        },
        {
            no: 11,
            name: "pod_daemon_auth_token",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "primary_docker_builder",
            kind: "scalar",
            T: 8
        },
        {
            no: 13,
            name: "pod_api_port",
            kind: "scalar",
            T: 13,
            opt: true
        }
    ]);
const DockerContainerPersistentState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DockerContainerPersistentState", ()=>[
        {
            no: 1,
            name: "id",
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
            name: "stopped",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "removed",
            kind: "scalar",
            T: 8
        },
        {
            no: 5,
            name: "leaked",
            kind: "scalar",
            T: 8
        },
        {
            no: 6,
            name: "post_pause_unpause_delay_ms",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 8,
            name: "isod_container_name",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RuntimeStatePersistentState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.RuntimeStatePersistentState", ()=>[
        {
            no: 1,
            name: "command_handlers",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: DaemonCommandHandlerPersistentState
            }
        }
    ]);
const DaemonCommandHandlerPersistentState = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DaemonCommandHandlerPersistentState", ()=>[
        {
            no: 1,
            name: "vpid",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "last_event_id",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const NetworkInfo = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.NetworkInfo", ()=>[
        {
            no: 1,
            name: "ip_address",
            kind: "scalar",
            T: 9
        }
    ]);
const WorkspaceConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.WorkspaceConfig", ()=>[
        {
            no: 1,
            name: "absolute",
            kind: "scalar",
            T: 9,
            oneof: "config"
        },
        {
            no: 2,
            name: "workdir_relative",
            kind: "scalar",
            T: 9,
            oneof: "config"
        }
    ]);
