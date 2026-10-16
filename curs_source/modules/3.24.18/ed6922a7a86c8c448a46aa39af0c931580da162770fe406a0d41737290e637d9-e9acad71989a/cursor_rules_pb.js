import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var U7t, $7t, YWs, nTu, XWs, LQe, Cee;
export { $7t, Cee, LQe, U7t, XWs, YWs, nTu };
var __wakaru__4e_initialized = false;
export function _4e() {
if (__wakaru__4e_initialized) return;
__wakaru__4e_initialized = true;
"use strict";
x(), bi(), U7t = k.makeEnum("agent.v1.CursorRuleSource", [
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
]), $7t = k.makeMessageType("agent.v1.CursorRuleTypeGlobal", []), YWs = k.makeMessageType("agent.v1.CursorRuleTypeFileGlobs", ()=>[
        {
            no: 1,
            name: "globs",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), nTu = k.makeMessageType("agent.v1.CursorRuleTypeAgentFetched", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ]), XWs = k.makeMessageType("agent.v1.CursorRuleTypeManuallyAttached", []), LQe = k.makeMessageType("agent.v1.CursorRuleType", ()=>[
        {
            no: 1,
            name: "global",
            kind: "message",
            T: $7t,
            oneof: "type"
        },
        {
            no: 2,
            name: "file_globbed",
            kind: "message",
            T: YWs,
            oneof: "type"
        },
        {
            no: 3,
            name: "agent_fetched",
            kind: "message",
            T: nTu,
            oneof: "type"
        },
        {
            no: 4,
            name: "manually_attached",
            kind: "message",
            T: XWs,
            oneof: "type"
        }
    ]), Cee = k.makeMessageType("agent.v1.CursorRule", ()=>[
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
            T: LQe
        },
        {
            no: 4,
            name: "source",
            kind: "enum",
            T: k.getEnumType(U7t)
        },
        {
            no: 5,
            name: "git_remote_origin",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 6,
            name: "parse_error",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 7,
            name: "environments",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 8,
            name: "disabled_environments",
            kind: "scalar",
            T: 9,
            repeated: !0
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
            name: "scoped_to",
            kind: "scalar",
            T: 9,
            repeated: !0
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
            opt: !0
        }
    ]);

}
