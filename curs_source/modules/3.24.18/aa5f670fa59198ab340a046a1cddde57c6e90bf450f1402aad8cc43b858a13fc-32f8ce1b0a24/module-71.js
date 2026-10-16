require.r(exports);
require.d(exports, {
    NetworkPolicy: ()=>NetworkPolicy,
    NetworkPolicyLoggingConfig: ()=>NetworkPolicyLoggingConfig,
    NetworkPolicy_DefaultAction: ()=>NetworkPolicy_DefaultAction,
    SandboxPolicy: ()=>SandboxPolicy,
    SandboxPolicyMergeSources: ()=>SandboxPolicyMergeSources,
    SandboxPolicy_ReadBoundaryMode: ()=>SandboxPolicy_ReadBoundaryMode,
    SandboxPolicy_Type: ()=>SandboxPolicy_Type
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const NetworkPolicyLoggingConfig = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.NetworkPolicyLoggingConfig", ()=>[
        {
            no: 1,
            name: "decision_log_path",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 2,
            name: "log_format",
            kind: "scalar",
            T: 9,
            opt: true
        }
    ]);
const NetworkPolicy = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.NetworkPolicy", ()=>[
        {
            no: 1,
            name: "version",
            kind: "scalar",
            T: 13,
            opt: true
        },
        {
            no: 2,
            name: "default_action",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(NetworkPolicy_DefaultAction),
            opt: true
        },
        {
            no: 3,
            name: "deny",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "allow",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "logging",
            kind: "message",
            T: NetworkPolicyLoggingConfig,
            opt: true
        }
    ]);
const NetworkPolicy_DefaultAction = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.NetworkPolicy.DefaultAction", [
    {
        no: 0,
        name: "DEFAULT_ACTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "DEFAULT_ACTION_ALLOW",
        localName: "ALLOW"
    },
    {
        no: 2,
        name: "DEFAULT_ACTION_DENY",
        localName: "DENY"
    }
]);
const SandboxPolicy = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SandboxPolicy", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SandboxPolicy_Type)
        },
        {
            no: 2,
            name: "network_access",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 3,
            name: "additional_readwrite_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 4,
            name: "additional_readonly_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "debug_output_dir",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "disable_tmp_write",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 8,
            name: "allowlist_escalated",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 9,
            name: "enable_shared_build_cache",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 10,
            name: "network_policy",
            kind: "message",
            T: NetworkPolicy,
            opt: true
        },
        {
            no: 11,
            name: "network_policy_strict",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 12,
            name: "capture_denies",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 13,
            name: "skip_statsig_defaults",
            kind: "scalar",
            T: 8,
            opt: true
        },
        {
            no: 14,
            name: "read_boundary",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(SandboxPolicy_ReadBoundaryMode)
        },
        {
            no: 15,
            name: "additional_read_paths",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const SandboxPolicy_Type = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.SandboxPolicy.Type", [
    {
        no: 0,
        name: "TYPE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "TYPE_INSECURE_NONE",
        localName: "INSECURE_NONE"
    },
    {
        no: 2,
        name: "TYPE_WORKSPACE_READWRITE",
        localName: "WORKSPACE_READWRITE"
    },
    {
        no: 3,
        name: "TYPE_WORKSPACE_READONLY",
        localName: "WORKSPACE_READONLY"
    }
]);
const SandboxPolicy_ReadBoundaryMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.SandboxPolicy.ReadBoundaryMode", [
    {
        no: 0,
        name: "READ_BOUNDARY_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "READ_BOUNDARY_MODE_SYSTEM",
        localName: "SYSTEM"
    },
    {
        no: 2,
        name: "READ_BOUNDARY_MODE_WORKSPACE",
        localName: "WORKSPACE"
    }
]);
const SandboxPolicyMergeSources = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.SandboxPolicyMergeSources", ()=>[
        {
            no: 1,
            name: "per_user",
            kind: "message",
            T: SandboxPolicy,
            opt: true
        },
        {
            no: 2,
            name: "per_repo",
            kind: "message",
            T: SandboxPolicy,
            opt: true
        },
        {
            no: 3,
            name: "team_admin",
            kind: "message",
            T: SandboxPolicy,
            opt: true
        }
    ]);
