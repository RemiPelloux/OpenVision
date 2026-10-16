require.r(exports);
require.d(exports, {
    CursorRule: ()=>CursorRule,
    CursorRuleSource: ()=>CursorRuleSource,
    CursorRuleType: ()=>CursorRuleType,
    CursorRuleTypeAgentFetched: ()=>CursorRuleTypeAgentFetched,
    CursorRuleTypeFileGlobs: ()=>CursorRuleTypeFileGlobs,
    CursorRuleTypeGlobal: ()=>CursorRuleTypeGlobal,
    CursorRuleTypeManuallyAttached: ()=>CursorRuleTypeManuallyAttached
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const CursorRuleSource = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("agent.v1.CursorRuleSource", [
    {
        no: 0,
        name: "CURSOR_RULE_SOURCE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CURSOR_RULE_SOURCE_TEAM",
        localName: "TEAM"
    },
    {
        no: 2,
        name: "CURSOR_RULE_SOURCE_USER",
        localName: "USER"
    }
]);
const CursorRuleTypeGlobal = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CursorRuleTypeGlobal", []);
const CursorRuleTypeFileGlobs = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CursorRuleTypeFileGlobs", ()=>[
        {
            no: 1,
            name: "globs",
            kind: "scalar",
            T: 9,
            repeated: true
        }
    ]);
const CursorRuleTypeAgentFetched = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CursorRuleTypeAgentFetched", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ]);
const CursorRuleTypeManuallyAttached = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CursorRuleTypeManuallyAttached", []);
const CursorRuleType = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CursorRuleType", ()=>[
        {
            no: 1,
            name: "global",
            kind: "message",
            T: CursorRuleTypeGlobal,
            oneof: "type"
        },
        {
            no: 2,
            name: "file_globbed",
            kind: "message",
            T: CursorRuleTypeFileGlobs,
            oneof: "type"
        },
        {
            no: 3,
            name: "agent_fetched",
            kind: "message",
            T: CursorRuleTypeAgentFetched,
            oneof: "type"
        },
        {
            no: 4,
            name: "manually_attached",
            kind: "message",
            T: CursorRuleTypeManuallyAttached,
            oneof: "type"
        }
    ]);
const CursorRule = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeMessageType("agent.v1.CursorRule", ()=>[
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
            name: "type",
            kind: "message",
            T: CursorRuleType
        },
        {
            no: 4,
            name: "source",
            kind: "enum",
            T: _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.getEnumType(CursorRuleSource)
        },
        {
            no: 5,
            name: "git_remote_origin",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 6,
            name: "parse_error",
            kind: "scalar",
            T: 9,
            opt: true
        },
        {
            no: 7,
            name: "environments",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 8,
            name: "disabled_environments",
            kind: "scalar",
            T: 9,
            repeated: true
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
            name: "scoped_to",
            kind: "scalar",
            T: 9,
            repeated: true
        },
        {
            no: 14,
            name: "frontmatter",
            kind: "scalar",
            T: 9
        },
        {
            no: 15,
            name: "is_required",
            kind: "scalar",
            T: 8,
            opt: true
        }
    ]);
