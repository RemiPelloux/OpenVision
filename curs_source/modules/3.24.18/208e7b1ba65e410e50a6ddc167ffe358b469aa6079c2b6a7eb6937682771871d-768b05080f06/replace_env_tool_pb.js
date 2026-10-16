import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Lre, Ure, xre, BN, Fre, Wre, GN, Bre, Gre;
export { BN, Bre, Fre, GN, Gre, Lre, Ure, Wre, xre };
var __wakaru_tKe_initialized = false;
export function tKe() {
if (__wakaru_tKe_initialized) return;
__wakaru_tKe_initialized = true;
"use strict";
h(), F(), Lre = c.makeEnum("agent.v1.ReplaceEnvMode", [
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
]), Ure = c.makeMessageType("agent.v1.RepoCheckoutRefOverride", ()=>[
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
    ]), xre = c.makeMessageType("agent.v1.ReplaceEnvConfig", ()=>[
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
    ]), BN = c.makeMessageType("agent.v1.ReplaceEnvArgs", ()=>[
        {
            no: 1,
            name: "config",
            kind: "message",
            T: xre
        },
        {
            no: 2,
            name: "mode",
            kind: "enum",
            T: c.getEnumType(Lre)
        },
        {
            no: 3,
            name: "checkout_ref_overrides",
            kind: "message",
            T: Ure,
            repeated: !0
        }
    ]), Fre = c.makeMessageType("agent.v1.ReplaceEnvSuccess", ()=>[
        {
            no: 1,
            name: "setup_logs",
            kind: "scalar",
            T: 9
        }
    ]), Wre = c.makeMessageType("agent.v1.ReplaceEnvFailure", ()=>[
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
    ]), GN = c.makeMessageType("agent.v1.ReplaceEnvResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: Fre,
            oneof: "result"
        },
        {
            no: 2,
            name: "failure",
            kind: "message",
            T: Wre,
            oneof: "result"
        }
    ]), Bre = c.makeMessageType("agent.v1.ReplaceEnvToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: BN
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: GN
        },
        {
            no: 3,
            name: "associated_pod_key",
            kind: "scalar",
            T: 9
        }
    ]), Gre = c.makeMessageType("agent.v1.ReplaceEnvToolCallDelta", ()=>[
        {
            no: 1,
            name: "associated_pod_key",
            kind: "scalar",
            T: 9
        }
    ]);

}
