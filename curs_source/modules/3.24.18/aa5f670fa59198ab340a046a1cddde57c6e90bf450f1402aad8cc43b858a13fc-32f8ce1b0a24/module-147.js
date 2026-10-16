require.r(exports);
require.d(exports, {
    AgentSkill: ()=>AgentSkill,
    AgentSkillMetadata: ()=>AgentSkillMetadata
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const AgentSkill = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AgentSkill", ()=>[
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
            opt: true
        },
        {
            no: 5,
            name: "environments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "disabled_environments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 7,
            name: "git_remote_origin",
            kind: "scalar",
            T: 9,
            opt: true
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
            opt: true
        },
        {
            no: 10,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "marketplace_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 13,
            name: "globs",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 14,
            name: "scoped_to",
            kind: "scalar",
            T: 9,
            repeated: true
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
const AgentSkillMetadata = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.AgentSkillMetadata", ()=>[
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
            opt: true
        },
        {
            no: 4,
            name: "environments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 5,
            name: "disabled_environments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 6,
            name: "git_remote_origin",
            kind: "scalar",
            T: 9,
            opt: true
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
            opt: true
        },
        {
            no: 9,
            name: "marketplace",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 10,
            name: "plugin_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 11,
            name: "marketplace_id",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 12,
            name: "globs",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 13,
            name: "scoped_to",
            kind: "scalar",
            T: 9,
            repeated: true
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
