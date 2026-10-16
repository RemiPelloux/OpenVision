import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var Z7t, gxu, fxu, YGs, vxu, L4i, CDn, _xu, bxu;
export { CDn, L4i, YGs, Z7t, _xu, bxu, fxu, gxu, vxu };
var __wakaru_N4i_initialized = false;
export function N4i() {
if (__wakaru_N4i_initialized) return;
__wakaru_N4i_initialized = true;
"use strict";
x(), bi(), Z7t = k.makeEnum("agent.v1.ReplaceEnvMode", [
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
]), gxu = k.makeMessageType("agent.v1.RepoCheckoutRefOverride", ()=>[
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
    ]), fxu = k.makeMessageType("agent.v1.ReplaceEnvConfig", ()=>[
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
    ]), YGs = k.makeMessageType("agent.v1.ReplaceEnvArgs", ()=>[
        {
            no: 1,
            name: "config",
            kind: "message",
            T: fxu
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: k.getEnumType(Z7t)
        },
        {
            no: 3,
            name: "checkout_ref_overrides",
            kind: "message",
            T: gxu,
            repeated: !0
        }
    ]), vxu = k.makeMessageType("agent.v1.ReplaceEnvSuccess", ()=>[
        {
            no: 1,
            name: "setup_logs",
            kind: "scalar",
            T: 9
        }
    ]), L4i = k.makeMessageType("agent.v1.ReplaceEnvFailure", ()=>[
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
    ]), CDn = k.makeMessageType("agent.v1.ReplaceEnvResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: vxu,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: L4i,
            oneof: "result"
        }
    ]), _xu = k.makeMessageType("agent.v1.ReplaceEnvToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: YGs
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: CDn
        },
        {
            no: 3,
            name: "associated_pod_key",
            kind: "scalar",
            T: 9
        }
    ]), bxu = k.makeMessageType("agent.v1.ReplaceEnvToolCallDelta", ()=>[
        {
            no: 1,
            name: "associated_pod_key",
            kind: "scalar",
            T: 9
        }
    ]);

}
