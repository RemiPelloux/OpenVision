require.r(exports);
require.d(exports, {
    AttachProcessRequest: ()=>AttachProcessRequest,
    CreateProcessRequest: ()=>CreateProcessRequest,
    CreateProcessResponse: ()=>CreateProcessResponse,
    DirectoryEntry: ()=>DirectoryEntry,
    EntryType: ()=>EntryType,
    GetProcessStatusRequest: ()=>GetProcessStatusRequest,
    GetProcessStatusResponse: ()=>GetProcessStatusResponse,
    GetProcessStatusResponse_Completed: ()=>GetProcessStatusResponse_Completed,
    GetProcessStatusResponse_Running: ()=>GetProcessStatusResponse_Running,
    GuestBlockDeviceCounters: ()=>GuestBlockDeviceCounters,
    HttpHealthCheck: ()=>HttpHealthCheck,
    IoPressureSample: ()=>IoPressureSample,
    IoTelemetryAvailability: ()=>IoTelemetryAvailability,
    ListDirectoryRequest: ()=>ListDirectoryRequest,
    ListDirectoryResponse: ()=>ListDirectoryResponse,
    ListProcessesRequest: ()=>ListProcessesRequest,
    ListProcessesResponse: ()=>ListProcessesResponse,
    ListedProcess: ()=>ListedProcess,
    PodDiskUsage: ()=>PodDiskUsage,
    PodIoExperience: ()=>PodIoExperience,
    PodMemoryBreakdown: ()=>PodMemoryBreakdown,
    PodMetricsSample: ()=>PodMetricsSample,
    PressureStallLine: ()=>PressureStallLine,
    ProcessEvent: ()=>ProcessEvent,
    ProcessExited: ()=>ProcessExited,
    ProcessRestarted: ()=>ProcessRestarted,
    ProcessSupervision: ()=>ProcessSupervision,
    ReadBinaryFileRequest: ()=>ReadBinaryFileRequest,
    ReadBinaryFileResponse: ()=>ReadBinaryFileResponse,
    ReadTextFileRequest: ()=>ReadTextFileRequest,
    ReadTextFileResponse: ()=>ReadTextFileResponse,
    RestartBackoff: ()=>RestartBackoff,
    RestartPolicy: ()=>RestartPolicy,
    RestartReason: ()=>RestartReason,
    SetClockRequest: ()=>SetClockRequest,
    SetClockResponse: ()=>SetClockResponse,
    StderrData: ()=>StderrData,
    StdoutData: ()=>StdoutData,
    StreamMetricsRequest: ()=>StreamMetricsRequest,
    TopProcess: ()=>TopProcess,
    WriteBinaryFileRequest: ()=>WriteBinaryFileRequest,
    WriteBinaryFileResponse: ()=>WriteBinaryFileResponse,
    WriteTextFileRequest: ()=>WriteTextFileRequest,
    WriteTextFileResponse: ()=>WriteTextFileResponse
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const IoTelemetryAvailability = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.IoTelemetryAvailability", [
    {
        no: 0,
        name: "IO_TELEMETRY_AVAILABILITY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "IO_TELEMETRY_AVAILABILITY_AVAILABLE",
        localName: "AVAILABLE"
    },
    {
        no: 2,
        name: "IO_TELEMETRY_AVAILABILITY_UNSUPPORTED",
        localName: "UNSUPPORTED"
    },
    {
        no: 3,
        name: "IO_TELEMETRY_AVAILABILITY_READ_ERROR",
        localName: "READ_ERROR"
    }
]);
const RestartPolicy = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.RestartPolicy", [
    {
        no: 0,
        name: "RESTART_POLICY_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESTART_POLICY_NEVER",
        localName: "NEVER"
    },
    {
        no: 2,
        name: "RESTART_POLICY_ON_FAILURE",
        localName: "ON_FAILURE"
    },
    {
        no: 3,
        name: "RESTART_POLICY_ALWAYS",
        localName: "ALWAYS"
    }
]);
const RestartReason = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.RestartReason", [
    {
        no: 0,
        name: "RESTART_REASON_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESTART_REASON_PROCESS_EXITED",
        localName: "PROCESS_EXITED"
    },
    {
        no: 2,
        name: "RESTART_REASON_HEALTH_CHECK_FAILED",
        localName: "HEALTH_CHECK_FAILED"
    }
]);
const EntryType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("anyrun.v1.EntryType", [
    {
        no: 0,
        name: "ENTRY_TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ENTRY_TYPE_FILE",
        localName: "FILE"
    },
    {
        no: 2,
        name: "ENTRY_TYPE_DIRECTORY",
        localName: "DIRECTORY"
    },
    {
        no: 3,
        name: "ENTRY_TYPE_SYMLINK",
        localName: "SYMLINK"
    }
]);
const CreateProcessRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.CreateProcessRequest", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 2,
            name: "user",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "working_directory",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "env",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 5,
            name: "idempotency_key",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "durable_supervision",
            kind: "message",
            T: ProcessSupervision,
            opt: true
        },
        {
            no: 8,
            name: "complete_on_child_exit",
            kind: "scalar",
            T: 8
        }
    ]);
const CreateProcessResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.CreateProcessResponse", ()=>[
        {
            no: 1,
            name: "pid",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "reused_existing_pid",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "process_pid",
            kind: "scalar",
            T: 3,
            opt: true
        }
    ]);
const AttachProcessRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.AttachProcessRequest", ()=>[
        {
            no: 1,
            name: "pid",
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
const StreamMetricsRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.StreamMetricsRequest", []);
const PodMetricsSample = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodMetricsSample", ()=>[
        {
            no: 1,
            name: "cpu_usage_mcores",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "cpu_limit_mcores",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "memory_usage_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "memory_limit_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "cgroup_memory_current_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "cgroup_memory_max_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 7,
            name: "oom_kill_count",
            kind: "scalar",
            T: 4
        },
        {
            no: 8,
            name: "pids_current",
            kind: "scalar",
            T: 4
        },
        {
            no: 9,
            name: "pids_max",
            kind: "scalar",
            T: 4
        },
        {
            no: 10,
            name: "process_count",
            kind: "scalar",
            T: 4
        },
        {
            no: 12,
            name: "new_procs_this_interval",
            kind: "scalar",
            T: 4
        },
        {
            no: 13,
            name: "procs_seen_total",
            kind: "scalar",
            T: 4
        },
        {
            no: 14,
            name: "process_state_counts",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 4
            }
        },
        {
            no: 15,
            name: "top_procs_by_name",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 4
            }
        },
        {
            no: 16,
            name: "top_procs",
            kind: "message",
            T: TopProcess,
            repeated: true
        },
        {
            no: 17,
            name: "memory_psi_full_avg10",
            kind: "scalar",
            T: 1
        },
        {
            no: 18,
            name: "oom_victim_pid",
            kind: "scalar",
            T: 3
        },
        {
            no: 19,
            name: "oom_victim_comm",
            kind: "scalar",
            T: 9
        },
        {
            no: 20,
            name: "oom_victim_rss_kb",
            kind: "scalar",
            T: 4
        },
        {
            no: 21,
            name: "disk_usage_by_device",
            kind: "message",
            T: PodDiskUsage,
            repeated: true
        },
        {
            no: 22,
            name: "event_stream_subscribers_fell_behind_total",
            kind: "scalar",
            T: 4
        },
        {
            no: 23,
            name: "cpu_psi_some_avg10",
            kind: "scalar",
            T: 1
        },
        {
            no: 24,
            name: "memory_breakdown",
            kind: "message",
            T: PodMemoryBreakdown
        },
        {
            no: 25,
            name: "io_experience",
            kind: "message",
            T: PodIoExperience
        }
    ]);
const PodMemoryBreakdown = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodMemoryBreakdown", ()=>[
        {
            no: 1,
            name: "all_process_rss_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "process_rss_count",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "cgroup_anon_bytes",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 4,
            name: "cgroup_file_bytes",
            kind: "scalar",
            T: 4,
            opt: true
        },
        {
            no: 5,
            name: "cgroup_kernel_bytes",
            kind: "scalar",
            T: 4,
            opt: true
        }
    ]);
const PressureStallLine = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PressureStallLine", ()=>[
        {
            no: 1,
            name: "avg10",
            kind: "scalar",
            T: 1
        },
        {
            no: 2,
            name: "avg60",
            kind: "scalar",
            T: 1
        },
        {
            no: 3,
            name: "avg300",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "total_stall_microseconds",
            kind: "scalar",
            T: 4
        }
    ]);
const IoPressureSample = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.IoPressureSample", ()=>[
        {
            no: 1,
            name: "availability",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(IoTelemetryAvailability)
        },
        {
            no: 2,
            name: "some",
            kind: "message",
            T: PressureStallLine
        },
        {
            no: 3,
            name: "full",
            kind: "message",
            T: PressureStallLine
        }
    ]);
const GuestBlockDeviceCounters = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.GuestBlockDeviceCounters", ()=>[
        {
            no: 1,
            name: "device",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "major",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "minor",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "reads_completed",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "reads_merged",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "sectors_read",
            kind: "scalar",
            T: 4
        },
        {
            no: 7,
            name: "read_time_milliseconds",
            kind: "scalar",
            T: 4
        },
        {
            no: 8,
            name: "writes_completed",
            kind: "scalar",
            T: 4
        },
        {
            no: 9,
            name: "writes_merged",
            kind: "scalar",
            T: 4
        },
        {
            no: 10,
            name: "sectors_written",
            kind: "scalar",
            T: 4
        },
        {
            no: 11,
            name: "write_time_milliseconds",
            kind: "scalar",
            T: 4
        },
        {
            no: 12,
            name: "io_in_progress",
            kind: "scalar",
            T: 4
        },
        {
            no: 13,
            name: "io_time_milliseconds",
            kind: "scalar",
            T: 4
        },
        {
            no: 14,
            name: "weighted_io_time_milliseconds",
            kind: "scalar",
            T: 4
        },
        {
            no: 15,
            name: "discards_completed",
            kind: "scalar",
            T: 4
        },
        {
            no: 16,
            name: "discards_merged",
            kind: "scalar",
            T: 4
        },
        {
            no: 17,
            name: "sectors_discarded",
            kind: "scalar",
            T: 4
        },
        {
            no: 18,
            name: "discard_time_milliseconds",
            kind: "scalar",
            T: 4
        },
        {
            no: 19,
            name: "flushes_completed",
            kind: "scalar",
            T: 4
        },
        {
            no: 20,
            name: "flush_time_milliseconds",
            kind: "scalar",
            T: 4
        }
    ]);
const PodIoExperience = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodIoExperience", ()=>[
        {
            no: 1,
            name: "sampled_at_monotonic_nanoseconds",
            kind: "scalar",
            T: 4
        },
        {
            no: 2,
            name: "vm_io_pressure",
            kind: "message",
            T: IoPressureSample
        },
        {
            no: 3,
            name: "cgroup_io_pressure",
            kind: "message",
            T: IoPressureSample
        },
        {
            no: 4,
            name: "block_stats_availability",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(IoTelemetryAvailability)
        },
        {
            no: 5,
            name: "block_devices",
            kind: "message",
            T: GuestBlockDeviceCounters,
            repeated: true
        }
    ]);
const PodDiskUsage = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.PodDiskUsage", ()=>[
        {
            no: 1,
            name: "device",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "usage_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "limit_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const TopProcess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.TopProcess", ()=>[
        {
            no: 1,
            name: "pid",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "ppid",
            kind: "scalar",
            T: 3
        },
        {
            no: 3,
            name: "comm",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "state",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "rss_kb",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "threads",
            kind: "scalar",
            T: 4
        },
        {
            no: 7,
            name: "num_fds",
            kind: "scalar",
            T: 4
        },
        {
            no: 8,
            name: "cpu_ticks_delta",
            kind: "scalar",
            T: 4
        }
    ]);
const GetProcessStatusRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.GetProcessStatusRequest", ()=>[
        {
            no: 1,
            name: "pid",
            kind: "scalar",
            T: 3
        }
    ]);
const GetProcessStatusResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.GetProcessStatusResponse", ()=>[
        {
            no: 1,
            name: "running",
            kind: "message",
            T: GetProcessStatusResponse_Running,
            oneof: "status"
        },
        {
            no: 2,
            name: "completed",
            kind: "message",
            T: GetProcessStatusResponse_Completed,
            oneof: "status"
        }
    ]);
const GetProcessStatusResponse_Running = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.GetProcessStatusResponse.Running", [], {
    localName: "GetProcessStatusResponse_Running"
});
const GetProcessStatusResponse_Completed = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.GetProcessStatusResponse.Completed", ()=>[
        {
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 5
        }
    ], {
    localName: "GetProcessStatusResponse_Completed"
});
const ListProcessesRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ListProcessesRequest", []);
const ListedProcess = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ListedProcess", ()=>[
        {
            no: 1,
            name: "pid",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "status",
            kind: "message",
            T: GetProcessStatusResponse
        }
    ]);
const ListProcessesResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ListProcessesResponse", ()=>[
        {
            no: 1,
            name: "processes",
            kind: "message",
            T: ListedProcess,
            repeated: true
        }
    ]);
const ProcessEvent = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ProcessEvent", ()=>[
        {
            no: 1,
            name: "event_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "stdout",
            kind: "message",
            T: StdoutData,
            oneof: "data"
        },
        {
            no: 3,
            name: "stderr",
            kind: "message",
            T: StderrData,
            oneof: "data"
        },
        {
            no: 4,
            name: "exited",
            kind: "message",
            T: ProcessExited,
            oneof: "data"
        },
        {
            no: 5,
            name: "restarted",
            kind: "message",
            T: ProcessRestarted,
            oneof: "data"
        }
    ]);
const ProcessSupervision = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ProcessSupervision", ()=>[
        {
            no: 1,
            name: "restart_policy",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RestartPolicy)
        },
        {
            no: 2,
            name: "backoff",
            kind: "message",
            T: RestartBackoff,
            opt: true
        },
        {
            no: 3,
            name: "health_check",
            kind: "message",
            T: HttpHealthCheck,
            opt: true
        },
        {
            no: 4,
            name: "exclusive_group",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const RestartBackoff = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.RestartBackoff", ()=>[
        {
            no: 1,
            name: "initial_ms",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "max_ms",
            kind: "scalar",
            T: 13
        },
        {
            no: 3,
            name: "multiplier",
            kind: "scalar",
            T: 1
        },
        {
            no: 4,
            name: "reset_after_healthy_ms",
            kind: "scalar",
            T: 13
        }
    ]);
const HttpHealthCheck = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.HttpHealthCheck", ()=>[
        {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "method",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 4,
            name: "body",
            kind: "scalar",
            T: 12
        },
        {
            no: 5,
            name: "interval_ms",
            kind: "scalar",
            T: 13
        },
        {
            no: 6,
            name: "timeout_ms",
            kind: "scalar",
            T: 13
        },
        {
            no: 7,
            name: "start_period_ms",
            kind: "scalar",
            T: 13
        },
        {
            no: 8,
            name: "unhealthy_threshold",
            kind: "scalar",
            T: 13
        }
    ]);
const StdoutData = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.StdoutData", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ]);
const StderrData = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.StderrData", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 12
        }
    ]);
const ProcessExited = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ProcessExited", ()=>[
        {
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 5
        }
    ]);
const ProcessRestarted = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ProcessRestarted", ()=>[
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
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(RestartReason)
        }
    ]);
const ListDirectoryRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ListDirectoryRequest", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "include_hidden",
            kind: "scalar",
            T: 8
        }
    ]);
const ListDirectoryResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ListDirectoryResponse", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: DirectoryEntry,
            repeated: true
        }
    ]);
const DirectoryEntry = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.DirectoryEntry", ()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(EntryType)
        },
        {
            no: 4,
            name: "size_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "modified_at_unix_ms",
            kind: "scalar",
            T: 3
        }
    ]);
const ReadTextFileRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ReadTextFileRequest", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const ReadTextFileResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ReadTextFileResponse", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
const WriteTextFileRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.WriteTextFileRequest", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]);
const WriteTextFileResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.WriteTextFileResponse", []);
const ReadBinaryFileRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ReadBinaryFileRequest", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]);
const ReadBinaryFileResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.ReadBinaryFileResponse", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 12
        }
    ]);
const WriteBinaryFileRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.WriteBinaryFileRequest", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 12
        }
    ]);
const WriteBinaryFileResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.WriteBinaryFileResponse", []);
const SetClockRequest = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SetClockRequest", ()=>[
        {
            no: 1,
            name: "unix_time_nanos",
            kind: "scalar",
            T: 3
        }
    ]);
const SetClockResponse = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("anyrun.v1.SetClockResponse", []);
