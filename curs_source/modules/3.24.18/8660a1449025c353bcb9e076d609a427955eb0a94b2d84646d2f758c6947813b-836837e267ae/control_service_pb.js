import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { A$e, Hu, jke } from "./utils_pb.js";
var RDg, PDg, MDg, DDg, NDg, LDg, ODg, FDg, BDg, UDg, H2n, Y_l, jDg, $Dg, HDg, WDg, GDg, qDg, zDg, VDg, KDg, YDg, XDg, ZDg, QDg, JDg, e3g, t3g, n3g, i3g, r3g, s3g, o3g, a3g, l3g, c3g, u3g, d3g, h3g, p3g, m3g, g3g, f3g, v3g, _3g, b3g, y3g, S3g, k3g, w3g, C3g, T3g, E3g, I3g, x3g, A3g, R3g, P3g, M3g, X_l, D3g, Z_l, N3g, L3g, O3g, F3g, B3g, U3g, j3g, $3g, H3g, W3g, G3g, q3g, z3g, V3g, K3g, Y3g, X3g, Z3g, Q3g, J3g, eNg, tNg, nNg, iNg, rNg, sNg, oNg, aNg, Q_l, lNg, J_l;
export { $3g, $Dg, A3g, B3g, BDg, C3g, D3g, DDg, E3g, F3g, FDg, G3g, GDg, H2n, H3g, HDg, I3g, J3g, JDg, J_l, K3g, KDg, L3g, LDg, M3g, MDg, N3g, NDg, O3g, ODg, P3g, PDg, Q3g, QDg, Q_l, R3g, RDg, S3g, T3g, U3g, UDg, V3g, VDg, W3g, WDg, X3g, XDg, X_l, Y3g, YDg, Y_l, Z3g, ZDg, Z_l, _3g, a3g, aNg, b3g, c3g, d3g, e3g, eNg, f3g, g3g, h3g, i3g, iNg, j3g, jDg, k3g, l3g, lNg, m3g, n3g, nNg, o3g, oNg, p3g, q3g, qDg, r3g, rNg, s3g, sNg, t3g, tNg, u3g, v3g, w3g, x3g, y3g, z3g, zDg };
var __wakaru_ebl_initialized = false;
export function ebl() {
if (__wakaru_ebl_initialized) return;
__wakaru_ebl_initialized = true;
"use strict";
E(), hr(), Hu(), RDg = x.makeEnum("agent.v1.EntryType", [
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
]), PDg = x.makeEnum("agent.v1.BatchGetDiffErrorKind", [
    {
        no: 0,
        name: "BATCH_GET_DIFF_ERROR_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BATCH_GET_DIFF_ERROR_KIND_FETCH_FAILED",
        localName: "FETCH_FAILED"
    },
    {
        no: 2,
        name: "BATCH_GET_DIFF_ERROR_KIND_DIFF_FAILED",
        localName: "DIFF_FAILED"
    },
    {
        no: 3,
        name: "BATCH_GET_DIFF_ERROR_KIND_UNAUTHENTICATED",
        localName: "UNAUTHENTICATED"
    },
    {
        no: 4,
        name: "BATCH_GET_DIFF_ERROR_KIND_NOT_FOUND",
        localName: "NOT_FOUND"
    },
    {
        no: 5,
        name: "BATCH_GET_DIFF_ERROR_KIND_INTERNAL",
        localName: "INTERNAL"
    }
]), MDg = x.makeEnum("agent.v1.ArtifactUploadStatus", [
    {
        no: 0,
        name: "ARTIFACT_UPLOAD_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ARTIFACT_UPLOAD_STATUS_NOT_STARTED",
        localName: "NOT_STARTED"
    },
    {
        no: 2,
        name: "ARTIFACT_UPLOAD_STATUS_IN_PROGRESS",
        localName: "IN_PROGRESS"
    },
    {
        no: 3,
        name: "ARTIFACT_UPLOAD_STATUS_COMPLETED",
        localName: "COMPLETED"
    },
    {
        no: 4,
        name: "ARTIFACT_UPLOAD_STATUS_FAILED",
        localName: "FAILED"
    }
]), DDg = x.makeEnum("agent.v1.ArtifactPathErrorKind", [
    {
        no: 0,
        name: "ARTIFACT_PATH_ERROR_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ARTIFACT_PATH_ERROR_KIND_MISSING",
        localName: "MISSING"
    },
    {
        no: 2,
        name: "ARTIFACT_PATH_ERROR_KIND_PERMISSION",
        localName: "PERMISSION"
    },
    {
        no: 3,
        name: "ARTIFACT_PATH_ERROR_KIND_NOT_A_FILE",
        localName: "NOT_A_FILE"
    },
    {
        no: 4,
        name: "ARTIFACT_PATH_ERROR_KIND_INVALID_PATH",
        localName: "INVALID_PATH"
    },
    {
        no: 5,
        name: "ARTIFACT_PATH_ERROR_KIND_UNKNOWN",
        localName: "UNKNOWN"
    }
]), NDg = x.makeEnum("agent.v1.ArtifactRootKind", [
    {
        no: 0,
        name: "ARTIFACT_ROOT_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ARTIFACT_ROOT_KIND_LOCAL",
        localName: "LOCAL"
    },
    {
        no: 2,
        name: "ARTIFACT_ROOT_KIND_AGENT_STORE_BACKED",
        localName: "AGENT_STORE_BACKED"
    }
]), LDg = x.makeEnum("agent.v1.ArtifactUploadDispatchStatus", [
    {
        no: 0,
        name: "ARTIFACT_UPLOAD_DISPATCH_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ARTIFACT_UPLOAD_DISPATCH_STATUS_ACCEPTED",
        localName: "ACCEPTED"
    },
    {
        no: 2,
        name: "ARTIFACT_UPLOAD_DISPATCH_STATUS_REJECTED",
        localName: "REJECTED"
    },
    {
        no: 3,
        name: "ARTIFACT_UPLOAD_DISPATCH_STATUS_SKIPPED_ALREADY_IN_PROGRESS",
        localName: "SKIPPED_ALREADY_IN_PROGRESS"
    }
]), ODg = x.makeEnum("agent.v1.PersistArtifactToAgentStoreStatus", [
    {
        no: 0,
        name: "PERSIST_ARTIFACT_TO_AGENT_STORE_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PERSIST_ARTIFACT_TO_AGENT_STORE_STATUS_PERSISTED",
        localName: "PERSISTED"
    },
    {
        no: 2,
        name: "PERSIST_ARTIFACT_TO_AGENT_STORE_STATUS_REJECTED",
        localName: "REJECTED"
    }
]), FDg = x.makeEnum("agent.v1.ArtifactRestoreStatus", [
    {
        no: 0,
        name: "ARTIFACT_RESTORE_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "ARTIFACT_RESTORE_STATUS_RESTORED",
        localName: "RESTORED"
    },
    {
        no: 2,
        name: "ARTIFACT_RESTORE_STATUS_SKIPPED_ALREADY_EXISTS",
        localName: "SKIPPED_ALREADY_EXISTS"
    },
    {
        no: 3,
        name: "ARTIFACT_RESTORE_STATUS_REJECTED",
        localName: "REJECTED"
    }
]), BDg = x.makeEnum("agent.v1.DesktopLeaseActorKind", [
    {
        no: 0,
        name: "DESKTOP_LEASE_ACTOR_KIND_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DESKTOP_LEASE_ACTOR_KIND_HUMAN",
        localName: "HUMAN"
    },
    {
        no: 2,
        name: "DESKTOP_LEASE_ACTOR_KIND_AGENT",
        localName: "AGENT"
    }
]), UDg = x.makeEnum("agent.v1.DesktopLeaseStatus", [
    {
        no: 0,
        name: "DESKTOP_LEASE_STATUS_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DESKTOP_LEASE_STATUS_OK",
        localName: "OK"
    },
    {
        no: 2,
        name: "DESKTOP_LEASE_STATUS_BUSY",
        localName: "BUSY"
    },
    {
        no: 3,
        name: "DESKTOP_LEASE_STATUS_INVALID_REQUEST",
        localName: "INVALID_REQUEST"
    }
]), H2n = x.makeEnum("agent.v1.ResourceScope", [
    {
        no: 0,
        name: "RESOURCE_SCOPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESOURCE_SCOPE_POD_VM",
        localName: "POD_VM"
    },
    {
        no: 2,
        name: "RESOURCE_SCOPE_CONTAINER",
        localName: "CONTAINER"
    },
    {
        no: 3,
        name: "RESOURCE_SCOPE_HOST",
        localName: "HOST"
    }
]), Y_l = x.makeEnum("agent.v1.ResourcePressure", [
    {
        no: 0,
        name: "RESOURCE_PRESSURE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "RESOURCE_PRESSURE_NONE",
        localName: "NONE"
    },
    {
        no: 2,
        name: "RESOURCE_PRESSURE_HIGH",
        localName: "HIGH"
    }
]), jDg = x.makeMessageType("agent.v1.PingRequest", []), $Dg = x.makeMessageType("agent.v1.PingResponse", []), HDg = x.makeMessageType("agent.v1.GetCapabilitiesRequest", []), WDg = x.makeMessageType("agent.v1.GetCapabilitiesResponse", ()=>[
        {
            no: 1,
            name: "computer_use_supported",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 2,
            name: "install_plugin_artifact_supported",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "computer_use_key_stroke_supported",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), GDg = x.makeMessageType("agent.v1.ReloadAgentSkillsRequest", []), qDg = x.makeMessageType("agent.v1.ReloadAgentSkillsResponse", []), zDg = x.makeMessageType("agent.v1.ReloadPluginsRequest", ()=>[
        {
            no: 1,
            name: "reload_targets",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), VDg = x.makeMessageType("agent.v1.ReloadPluginsResponse", []), KDg = x.makeMessageType("agent.v1.ExecRequest", ()=>[
        {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "cwd",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 3,
            name: "args",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "environment",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), YDg = x.makeMessageType("agent.v1.ExecResponse", ()=>[
        {
            no: 1,
            name: "stdout_event",
            kind: "message",
            T: XDg,
            oneof: "event"
        },
        {
            no: 2,
            name: "stderr_event",
            kind: "message",
            T: ZDg,
            oneof: "event"
        },
        {
            no: 3,
            name: "exit_event",
            kind: "message",
            T: QDg,
            oneof: "event"
        }
    ]), XDg = x.makeMessageType("agent.v1.StdoutEvent", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]), ZDg = x.makeMessageType("agent.v1.StderrEvent", ()=>[
        {
            no: 1,
            name: "data",
            kind: "scalar",
            T: 9
        }
    ]), QDg = x.makeMessageType("agent.v1.ExitEvent", ()=>[
        {
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 5
        }
    ]), JDg = x.makeMessageType("agent.v1.ListDirectoryRequest", ()=>[
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
    ]), e3g = x.makeMessageType("agent.v1.ListDirectoryResponse", ()=>[
        {
            no: 1,
            name: "entries",
            kind: "message",
            T: t3g,
            repeated: !0
        }
    ]), t3g = x.makeMessageType("agent.v1.DirectoryEntry", ()=>[
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
            T: x.getEnumType(RDg)
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
    ]), n3g = x.makeMessageType("agent.v1.ReadTextFileRequest", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), i3g = x.makeMessageType("agent.v1.ReadTextFileResponse", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9
        }
    ]), r3g = x.makeMessageType("agent.v1.WriteTextFileRequest", ()=>[
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
    ]), s3g = x.makeMessageType("agent.v1.WriteTextFileResponse", []), o3g = x.makeMessageType("agent.v1.ReadBinaryFileRequest", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        }
    ]), a3g = x.makeMessageType("agent.v1.ReadBinaryFileResponse", ()=>[
        {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 12
        }
    ]), l3g = x.makeMessageType("agent.v1.ExportFileRequest", ()=>[
        {
            no: 1,
            name: "path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_root_path",
            kind: "scalar",
            T: 9
        }
    ]), c3g = x.makeMessageType("agent.v1.ExportFileMetadata", ()=>[
        {
            no: 1,
            name: "total_bytes",
            kind: "scalar",
            T: 4
        }
    ]), u3g = x.makeMessageType("agent.v1.ExportFileResponse", ()=>[
        {
            no: 1,
            name: "content_chunk",
            kind: "scalar",
            T: 12,
            oneof: "payload"
        },
        {
            no: 2,
            name: "metadata",
            kind: "message",
            T: c3g,
            oneof: "payload"
        }
    ]), d3g = x.makeMessageType("agent.v1.WriteBinaryFileRequest", ()=>[
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
    ]), h3g = x.makeMessageType("agent.v1.WriteBinaryFileResponse", []), p3g = x.makeMessageType("agent.v1.GetWorkspaceChangesHashRequest", ()=>[
        {
            no: 1,
            name: "root_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "base_ref",
            kind: "scalar",
            T: 9
        }
    ]), m3g = x.makeMessageType("agent.v1.GetWorkspaceChangesHashResponse", ()=>[
        {
            no: 1,
            name: "hash",
            kind: "scalar",
            T: 9
        }
    ]), g3g = x.makeMessageType("agent.v1.BatchGetDiffRequest", ()=>[
        {
            no: 1,
            name: "items",
            kind: "message",
            T: f3g,
            repeated: !0
        }
    ]), f3g = x.makeMessageType("agent.v1.BatchGetDiffItem", ()=>[
        {
            no: 1,
            name: "diff_request",
            kind: "message",
            T: A$e
        },
        {
            no: 2,
            name: "fetch_branches",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 3,
            name: "known_base_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "known_head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "known_workspace_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "use_cat_file_batch",
            kind: "scalar",
            T: 8,
            opt: !0
        }
    ]), v3g = x.makeMessageType("agent.v1.BatchGetDiffResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: _3g,
            repeated: !0
        }
    ]), _3g = x.makeMessageType("agent.v1.BatchGetDiffResult", ()=>[
        {
            no: 1,
            name: "item_index",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "fetched_branches",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "failed_branches",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "diff",
            kind: "message",
            T: jke,
            oneof: "result"
        },
        {
            no: 3,
            name: "error",
            kind: "message",
            T: y3g,
            oneof: "result"
        },
        {
            no: 6,
            name: "unchanged",
            kind: "message",
            T: b3g,
            oneof: "result"
        },
        {
            no: 7,
            name: "resolved_base_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "resolved_head_sha",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "resolved_workspace_hash",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), b3g = x.makeMessageType("agent.v1.BatchGetDiffUnchanged", []), y3g = x.makeMessageType("agent.v1.BatchGetDiffError", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(PDg)
        },
        {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), S3g = x.makeMessageType("agent.v1.RefreshGithubAccessTokenRequest", ()=>[
        {
            no: 1,
            name: "github_access_token",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "hostname",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repo_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "clone_username",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "exact_repo_path",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 6,
            name: "rewrite_from_url",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), k3g = x.makeMessageType("agent.v1.RefreshGithubAccessTokenResponse", ()=>[
        {
            no: 1,
            name: "exact_repo_path_applied",
            kind: "scalar",
            T: 8
        }
    ]), w3g = x.makeMessageType("agent.v1.WarmRemoteAccessServerRequest", ()=>[
        {
            no: 1,
            name: "commit",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "port",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "connection_token",
            kind: "scalar",
            T: 9
        }
    ]), C3g = x.makeMessageType("agent.v1.WarmRemoteAccessServerResponse", []), T3g = x.makeMessageType("agent.v1.ListArtifactsRequest", ()=>[
        {
            no: 1,
            name: "extra_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), E3g = x.makeMessageType("agent.v1.ArtifactUploadMetadata", ()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "size_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "updated_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "status",
            kind: "enum",
            T: x.getEnumType(MDg)
        },
        {
            no: 5,
            name: "bytes_uploaded",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "last_error",
            kind: "scalar",
            T: 9
        },
        {
            no: 7,
            name: "upload_attempts",
            kind: "scalar",
            T: 13
        },
        {
            no: 8,
            name: "last_started_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 9,
            name: "last_finished_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 10,
            name: "upload_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 11,
            name: "artifact_relative_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), I3g = x.makeMessageType("agent.v1.ArtifactPathError", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(DDg)
        },
        {
            no: 2,
            name: "code",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), x3g = x.makeMessageType("agent.v1.ListArtifactsResponse", ()=>[
        {
            no: 1,
            name: "artifacts",
            kind: "message",
            T: E3g,
            repeated: !0
        },
        {
            no: 2,
            name: "path_errors",
            kind: "map",
            K: 9,
            V: {
                kind: "message",
                T: I3g
            }
        },
        {
            no: 3,
            name: "root_kind",
            kind: "enum",
            T: x.getEnumType(NDg)
        }
    ]), A3g = x.makeMessageType("agent.v1.UploadArtifactsRequest", ()=>[
        {
            no: 1,
            name: "uploads",
            kind: "message",
            T: R3g,
            repeated: !0
        },
        {
            no: 2,
            name: "wait_for_completion",
            kind: "scalar",
            T: 8
        }
    ]), R3g = x.makeMessageType("agent.v1.ArtifactUploadInstruction", ()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "upload_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "method",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "headers",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 5,
            name: "content_type",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "slack_upload_url",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "slack_file_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "artifact_relative_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), P3g = x.makeMessageType("agent.v1.ArtifactUploadDispatchResult", ()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: x.getEnumType(LDg)
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "slack_file_id",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), M3g = x.makeMessageType("agent.v1.UploadArtifactsResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: P3g,
            repeated: !0
        }
    ]), X_l = x.makeMessageType("agent.v1.PersistArtifactToAgentStoreInstruction", ()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "artifact_relative_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), D3g = x.makeMessageType("agent.v1.PersistArtifactsToAgentStoreRequest", ()=>[
        {
            no: 1,
            name: "artifacts",
            kind: "message",
            T: X_l,
            repeated: !0
        }
    ]), Z_l = x.makeMessageType("agent.v1.PersistArtifactToAgentStoreResult", ()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: x.getEnumType(ODg)
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), N3g = x.makeMessageType("agent.v1.PersistArtifactsToAgentStoreResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: Z_l,
            repeated: !0
        }
    ]), L3g = x.makeMessageType("agent.v1.PersistArtifactsToParentStoreRequest", ()=>[
        {
            no: 1,
            name: "artifacts",
            kind: "message",
            T: X_l,
            repeated: !0
        }
    ]), O3g = x.makeMessageType("agent.v1.PersistArtifactsToParentStoreResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: Z_l,
            repeated: !0
        }
    ]), F3g = x.makeMessageType("agent.v1.RestoreArtifactInstruction", ()=>[
        {
            no: 1,
            name: "absolute_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "download_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "updated_at_unix_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 4,
            name: "artifact_relative_path",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), B3g = x.makeMessageType("agent.v1.RestoreArtifactResult", ()=>[
        {
            no: 2,
            name: "status",
            kind: "enum",
            T: x.getEnumType(FDg)
        },
        {
            no: 3,
            name: "error_message",
            kind: "scalar",
            T: 9
        }
    ]), U3g = x.makeMessageType("agent.v1.RestoreArtifactsRequest", ()=>[
        {
            no: 1,
            name: "artifacts",
            kind: "message",
            T: F3g,
            repeated: !0
        }
    ]), j3g = x.makeMessageType("agent.v1.RestoreArtifactsResponse", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: B3g,
            repeated: !0
        }
    ]), $3g = x.makeMessageType("agent.v1.GetMcpRefreshTokensRequest", []), H3g = x.makeMessageType("agent.v1.GetMcpRefreshTokensResponse", ()=>[
        {
            no: 1,
            name: "refresh_tokens",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), W3g = x.makeMessageType("agent.v1.UpdateEnvironmentVariablesRequest", ()=>[
        {
            no: 1,
            name: "env",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        },
        {
            no: 2,
            name: "replace",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "restore_previous_values",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "run_scoped_overlay",
            kind: "message",
            T: G3g
        }
    ]), G3g = x.makeMessageType("agent.v1.RunScopedOverlay", ()=>[
        {
            no: 1,
            name: "run_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "release",
            kind: "scalar",
            T: 8
        },
        {
            no: 3,
            name: "holder",
            kind: "scalar",
            T: 9
        }
    ]), q3g = x.makeMessageType("agent.v1.UpdateEnvironmentVariablesResponse", ()=>[
        {
            no: 1,
            name: "applied",
            kind: "scalar",
            T: 13
        },
        {
            no: 2,
            name: "removed",
            kind: "scalar",
            T: 13
        }
    ]), z3g = x.makeMessageType("agent.v1.ScopedSecretValues", ()=>[
        {
            no: 1,
            name: "values",
            kind: "map",
            K: 9,
            V: {
                kind: "scalar",
                T: 9
            }
        }
    ]), V3g = x.makeMessageType("agent.v1.SyncScopedSecretsRequest", ()=>[
        {
            no: 1,
            name: "scope_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "revision",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "secrets",
            kind: "message",
            T: z3g,
            opt: !0
        }
    ]), K3g = x.makeMessageType("agent.v1.SyncScopedSecretsResponse", ()=>[
        {
            no: 1,
            name: "revision",
            kind: "scalar",
            T: 5,
            opt: !0
        }
    ]), Y3g = x.makeMessageType("agent.v1.DownloadCursorServerRequest", ()=>[
        {
            no: 1,
            name: "commit",
            kind: "scalar",
            T: 9
        }
    ]), X3g = x.makeMessageType("agent.v1.DownloadCursorServerResponse", ()=>[
        {
            no: 1,
            name: "already_downloaded",
            kind: "scalar",
            T: 8
        }
    ]), Z3g = x.makeMessageType("agent.v1.InstallPluginArtifactRequest", ()=>[
        {
            no: 1,
            name: "download_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "target_root",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "artifact_digest",
            kind: "scalar",
            T: 9
        }
    ]), Q3g = x.makeMessageType("agent.v1.InstallPluginArtifactResponse", []), J3g = x.makeMessageType("agent.v1.LoadMcpServersRequest", ()=>[
        {
            no: 1,
            name: "mcp_config_json",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "remove_missing",
            kind: "scalar",
            T: 8
        }
    ]), eNg = x.makeMessageType("agent.v1.LoadMcpServersResponse", ()=>[
        {
            no: 1,
            name: "loaded_server_names",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), tNg = x.makeMessageType("agent.v1.DesktopLeaseAcquire", ()=>[
        {
            no: 1,
            name: "actor_id",
            kind: "scalar",
            T: 9
        }
    ]), nNg = x.makeMessageType("agent.v1.DesktopLeaseRelease", ()=>[
        {
            no: 1,
            name: "actor_id",
            kind: "scalar",
            T: 9
        }
    ]), iNg = x.makeMessageType("agent.v1.DesktopLeaseGetState", []), rNg = x.makeMessageType("agent.v1.DesktopLeaseRequest", ()=>[
        {
            no: 1,
            name: "acquire",
            kind: "message",
            T: tNg,
            oneof: "action"
        },
        {
            no: 2,
            name: "release",
            kind: "message",
            T: nNg,
            oneof: "action"
        },
        {
            no: 3,
            name: "get_state",
            kind: "message",
            T: iNg,
            oneof: "action"
        }
    ]), sNg = x.makeMessageType("agent.v1.DesktopLeaseOwner", ()=>[
        {
            no: 1,
            name: "kind",
            kind: "enum",
            T: x.getEnumType(BDg)
        },
        {
            no: 2,
            name: "actor_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "expires_at_unix_ms",
            kind: "scalar",
            T: 3
        }
    ]), oNg = x.makeMessageType("agent.v1.DesktopLeaseResponse", ()=>[
        {
            no: 1,
            name: "status",
            kind: "enum",
            T: x.getEnumType(UDg)
        },
        {
            no: 2,
            name: "owner",
            kind: "message",
            T: sNg,
            opt: !0
        },
        {
            no: 3,
            name: "message",
            kind: "scalar",
            T: 9
        }
    ]), aNg = x.makeMessageType("agent.v1.ResourceLimits", ()=>[
        {
            no: 1,
            name: "scope",
            kind: "enum",
            T: x.getEnumType(H2n)
        },
        {
            no: 2,
            name: "memory_limit_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "cpu_limit_mcores",
            kind: "scalar",
            T: 13
        },
        {
            no: 4,
            name: "disk_limit_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 5,
            name: "workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 6,
            name: "display_label",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Q_l = x.makeMessageType("agent.v1.ResourceSample", ()=>[
        {
            no: 1,
            name: "sampled_at_ms",
            kind: "scalar",
            T: 3
        },
        {
            no: 2,
            name: "memory_used_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 3,
            name: "memory_available_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 4,
            name: "cpu_used_mcores",
            kind: "scalar",
            T: 13
        },
        {
            no: 5,
            name: "disk_used_bytes",
            kind: "scalar",
            T: 4
        },
        {
            no: 6,
            name: "pressure",
            kind: "enum",
            T: x.getEnumType(Y_l)
        }
    ]), lNg = x.makeMessageType("agent.v1.GetResourceUsageRequest", ()=>[
        {
            no: 1,
            name: "cursor",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "omit_history",
            kind: "scalar",
            T: 8
        }
    ]), J_l = x.makeMessageType("agent.v1.GetResourceUsageResponse", ()=>[
        {
            no: 1,
            name: "limits",
            kind: "message",
            T: aNg
        },
        {
            no: 2,
            name: "current",
            kind: "message",
            T: Q_l
        },
        {
            no: 3,
            name: "history",
            kind: "message",
            T: Q_l,
            repeated: !0
        },
        {
            no: 4,
            name: "next_cursor",
            kind: "scalar",
            T: 9
        }
    ]);

}
