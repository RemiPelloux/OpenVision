import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var kee, See, yee, wee, Eee, bee, Fg;
export { Eee, Fg, See, bee, kee, wee, yee };
var __wakaru_RN_initialized = false;
export function RN() {
if (__wakaru_RN_initialized) return;
__wakaru_RN_initialized = true;
"use strict";
h(), F(), kee = c.makeEnum("agent.v1.CursorRuleSource", [
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
]), See = c.makeMessageType("agent.v1.CursorRuleTypeGlobal", []), yee = c.makeMessageType("agent.v1.CursorRuleTypeFileGlobs", ()=>[
        {
            no: 1,
            name: "globs",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), wee = c.makeMessageType("agent.v1.CursorRuleTypeAgentFetched", ()=>[
        {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9
        }
    ]), Eee = c.makeMessageType("agent.v1.CursorRuleTypeManuallyAttached", []), bee = c.makeMessageType("agent.v1.CursorRuleType", ()=>[
        {
            no: 1,
            name: "global",
            kind: "message",
            T: See,
            oneof: "type"
        },
        {
            no: 2,
            name: "file_globbed",
            kind: "message",
            T: yee,
            oneof: "type"
        },
        {
            no: 3,
            name: "agent_fetched",
            kind: "message",
            T: wee,
            oneof: "type"
        },
        {
            no: 4,
            name: "manually_attached",
            kind: "message",
            T: Eee,
            oneof: "type"
        }
    ]), Fg = c.makeMessageType("agent.v1.CursorRule", ()=>[
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
            T: bee
        },
        {
            no: 4,
            name: "source",
            kind: "enum",
            T: c.getEnumType(kee)
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
