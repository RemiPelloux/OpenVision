import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
var Zgd, tyr, Qgd, _3o, b3o, Jgd, efd;
export { Jgd, Qgd, Zgd, _3o, b3o, efd, tyr };
var __wakaru_tfd_initialized = false;
export function tfd() {
if (__wakaru_tfd_initialized) return;
__wakaru_tfd_initialized = true;
"use strict";
E(), hr(), Zgd = x.makeEnum("agent.v1.BugfixVerdict", [
    {
        no: 0,
        name: "BUGFIX_VERDICT_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "BUGFIX_VERDICT_FIXED",
        localName: "FIXED"
    },
    {
        no: 2,
        name: "BUGFIX_VERDICT_FALSE_POSITIVE",
        localName: "FALSE_POSITIVE"
    },
    {
        no: 3,
        name: "BUGFIX_VERDICT_COULD_NOT_FIX",
        localName: "COULD_NOT_FIX"
    },
    {
        no: 4,
        name: "BUGFIX_VERDICT_RESOLVED_BY_OTHER_FIX",
        localName: "RESOLVED_BY_OTHER_FIX"
    }
]), tyr = x.makeMessageType("agent.v1.BugfixResultItem", ()=>[
        {
            no: 1,
            name: "bug_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "bug_title",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "verdict",
            kind: "enum",
            T: x.getEnumType(Zgd)
        },
        {
            no: 4,
            name: "explanation",
            kind: "scalar",
            T: 9
        },
        {
            no: 5,
            name: "severity",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), Qgd = x.makeMessageType("agent.v1.ReportBugfixResultsArgs", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "results",
            kind: "message",
            T: tyr,
            repeated: !0
        }
    ]), _3o = x.makeMessageType("agent.v1.ReportBugfixResultsSuccess", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: tyr,
            repeated: !0
        }
    ]), b3o = x.makeMessageType("agent.v1.ReportBugfixResultsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Jgd = x.makeMessageType("agent.v1.ReportBugfixResultsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: _3o,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: b3o,
            oneof: "result"
        }
    ]), efd = x.makeMessageType("agent.v1.ReportBugfixResultsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Qgd
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Jgd
        }
    ]);

}
