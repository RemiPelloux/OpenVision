import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Tmn, X_d, Z_d, D5o, Q_d, fSr, vni, J_d, ebd;
export { D5o, J_d, Q_d, Tmn, X_d, Z_d, ebd, fSr, vni };
var __wakaru_vSr_initialized = false;
export function vSr() {
if (__wakaru_vSr_initialized) return;
__wakaru_vSr_initialized = true;
"use strict";
E(), hr(), Tmn = x.makeEnum("agent.v1.ReplaceEnvMode", [
    {
        no: 0,
        name: "REPLACE_ENV_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "REPLACE_ENV_MODE_CUSTOM",
        localName: "CUSTOM"
    },
    {
        no: 2,
        name: "REPLACE_ENV_MODE_CLEAN_SLATE",
        localName: "CLEAN_SLATE"
    },
    {
        no: 3,
        name: "REPLACE_ENV_MODE_DEFAULT",
        localName: "DEFAULT"
    }
]), X_d = x.makeMessageType("agent.v1.RepoCheckoutRefOverride", ()=>[
        {
            no: 1,
            name: "repo_url",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ref",
            kind: "scalar",
            T: 9
        }
    ]), Z_d = x.makeMessageType("agent.v1.ReplaceEnvConfig", ()=>[
        {
            no: 1,
            name: "install_script",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "dockerfile_contents",
            kind: "scalar",
            T: 9
        }
    ]), D5o = x.makeMessageType("agent.v1.ReplaceEnvArgs", ()=>[
        {
            no: 1,
            name: "config",
            kind: "message",
            T: Z_d
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: x.getEnumType(Tmn)
        },
        {
            no: 3,
            name: "checkout_ref_overrides",
            kind: "message",
            T: X_d,
            repeated: !0
        }
    ]), Q_d = x.makeMessageType("agent.v1.ReplaceEnvSuccess", ()=>[
        {
            no: 1,
            name: "setup_logs",
            kind: "scalar",
            T: 9
        }
    ]), fSr = x.makeMessageType("agent.v1.ReplaceEnvFailure", ()=>[
        {
            no: 1,
            name: "error_message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "setup_logs",
            kind: "scalar",
            T: 9
        }
    ]), vni = x.makeMessageType("agent.v1.ReplaceEnvResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Q_d,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: fSr,
            oneof: "result"
        }
    ]), J_d = x.makeMessageType("agent.v1.ReplaceEnvToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: D5o
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: vni
        },
        {
            no: 3,
            name: "associated_pod_key",
            kind: "scalar",
            T: 9
        }
    ]), ebd = x.makeMessageType("agent.v1.ReplaceEnvToolCallDelta", ()=>[
        {
            no: 1,
            name: "associated_pod_key",
            kind: "scalar",
            T: 9
        }
    ]);

}
