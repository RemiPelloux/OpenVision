import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var dmn, hmn, OOo, jfd, FOo, Y_t, Wde;
export { FOo, OOo, Wde, Y_t, dmn, hmn, jfd };
var __wakaru_Xet_initialized = false;
export function Xet() {
if (__wakaru_Xet_initialized) return;
__wakaru_Xet_initialized = true;
"use strict";
E(), hr(), dmn = x.makeEnum("agent.v1.CursorRuleSource", [
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
]), hmn = x.makeMessageType("agent.v1.CursorRuleTypeGlobal", []), OOo = x.makeMessageType("agent.v1.CursorRuleTypeFileGlobs", ()=>[
        {
            no: 1,
            name: "globs",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), jfd = x.makeMessageType("agent.v1.CursorRuleTypeAgentFetched", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ]), FOo = x.makeMessageType("agent.v1.CursorRuleTypeManuallyAttached", []), Y_t = x.makeMessageType("agent.v1.CursorRuleType", ()=>[
        {
            no: 1,
            name: "global",
            kind: "message",
            T: hmn,
            oneof: "type"
        },
        {
            no: 2,
            name: "file_globbed",
            kind: "message",
            T: OOo,
            oneof: "type"
        },
        {
            no: 3,
            name: "agent_fetched",
            kind: "message",
            T: jfd,
            oneof: "type"
        },
        {
            no: 4,
            name: "manually_attached",
            kind: "message",
            T: FOo,
            oneof: "type"
        }
    ]), Wde = x.makeMessageType("agent.v1.CursorRule", ()=>[
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
            T: Y_t
        },
        {
            no: 4,
            name: "source",
            kind: "enum",
            T: x.getEnumType(dmn)
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
