import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var z4t, V5o;
export { V5o, z4t };
var __wakaru_rbt_initialized = false;
export function rbt() {
if (__wakaru_rbt_initialized) return;
__wakaru_rbt_initialized = true;
"use strict";
E(), hr(), z4t = x.makeMessageType("agent.v1.AgentSkill", ()=>[
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
    ]), V5o = x.makeMessageType("agent.v1.AgentSkillMetadata", ()=>[
        {
            no: 1,
            name: "full_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "parse_error",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 4,
            name: "environments",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 5,
            name: "disabled_environments",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 6,
            name: "git_remote_origin",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "disable_model_invocation",
            kind: "scalar",
            T: 8
        },
        {
            no: 8,
            name: "plugin",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 9,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 10,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 11,
            name: "marketplace_id",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 12,
            name: "globs",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 13,
            name: "scoped_to",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 14,
            name: "argument_hint",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "disable_user_invocation",
            kind: "scalar",
            T: 8
        }
    ]);

}
