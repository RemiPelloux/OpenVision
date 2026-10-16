import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var Hy;
export { Hy };
var __wakaru_qy_initialized = false;
export function qy() {
if (__wakaru_qy_initialized) return;
__wakaru_qy_initialized = true;
"use strict";
h(), F(), Hy = c.makeMessageType("agent.v1.AgentSkill", ()=>[
        {
            no: 1,
            name: "full_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "parse_error",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 5,
            name: "environments",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "disabled_environments",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 7,
            name: "git_remote_origin",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 8,
            name: "disable_model_invocation",
            kind: "scalar",
            T: 8
        },
        {
            no: 9,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "marketplace_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 13,
            name: "globs",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 14,
            name: "scoped_to",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 15,
            name: "argument_hint",
            kind: "scalar",
            T: 9
        },
        {
            no: 16,
            name: "disable_user_invocation",
            kind: "scalar",
            T: 8
        }
    ]);

}
