import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Khd, Yhd, Xhd, Wke, $et, Uei;
export { $et, Khd, Uei, Wke, Xhd, Yhd };
var __wakaru_Het_initialized = false;
export function Het() {
if (__wakaru_Het_initialized) return;
__wakaru_Het_initialized = true;
"use strict";
E(), hr(), Khd = x.makeMessageType("agent.v1.NetworkPolicyLoggingConfig", ()=>[
        {
            no: 1,
            name: "decision_log_path",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "log_format",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Yhd = x.makeMessageType("agent.v1.NetworkPolicy", ()=>[
        {
            no: 1,
            name: "version",
            kind: "scalar",
            T: 13,
            opt: !0
        },
        {
            no: 2,
            name: "default_action",
            kind: "enum",
            T: x.getEnumType(Xhd),
            opt: !0
        },
        {
            no: 3,
            name: "deny",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "allow",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "logging",
            kind: "message",
            T: Khd,
            opt: !0
        }
    ]), Xhd = x.makeEnum("agent.v1.NetworkPolicy.DefaultAction", [
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
]), Wke = x.makeMessageType("agent.v1.SandboxPolicy", ()=>[
        {
            no: 1,
            name: "type",
            kind: "enum",
            T: x.getEnumType($et)
        },
        {
            no: 2,
            name: "network_access",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 3,
            name: "additional_readwrite_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 4,
            name: "additional_readonly_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "debug_output_dir",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "disable_tmp_write",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 8,
            name: "allowlist_escalated",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 9,
            name: "enable_shared_build_cache",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 10,
            name: "network_policy",
            kind: "message",
            T: Yhd,
            opt: !0
        },
        {
            no: 11,
            name: "network_policy_strict",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 12,
            name: "capture_denies",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 13,
            name: "skip_statsig_defaults",
            kind: "scalar",
            T: 8,
            opt: !0
        },
        {
            no: 14,
            name: "read_boundary",
            kind: "enum",
            T: x.getEnumType(Uei)
        },
        {
            no: 15,
            name: "additional_read_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), $et = x.makeEnum("agent.v1.SandboxPolicy.Type", [
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
]), Uei = x.makeEnum("agent.v1.SandboxPolicy.ReadBoundaryMode", [
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

}
