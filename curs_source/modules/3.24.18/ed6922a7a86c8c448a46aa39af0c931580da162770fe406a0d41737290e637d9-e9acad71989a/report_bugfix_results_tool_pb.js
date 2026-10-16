import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
var Zfu, x3i, Qfu, BBs, UBs, Jfu, evu;
export { BBs, Jfu, Qfu, UBs, Zfu, evu, x3i };
var __wakaru_tvu_initialized = false;
export function tvu() {
if (__wakaru_tvu_initialized) return;
__wakaru_tvu_initialized = true;
"use strict";
x(), bi(), Zfu = k.makeEnum("agent.v1.BugfixVerdict", [
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
]), x3i = k.makeMessageType("agent.v1.BugfixResultItem", ()=>[
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
            T: k.getEnumType(Zfu)
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
    ]), Qfu = k.makeMessageType("agent.v1.ReportBugfixResultsArgs", ()=>[
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
            T: x3i,
            repeated: !0
        }
    ]), BBs = k.makeMessageType("agent.v1.ReportBugfixResultsSuccess", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: x3i,
            repeated: !0
        }
    ]), UBs = k.makeMessageType("agent.v1.ReportBugfixResultsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), Jfu = k.makeMessageType("agent.v1.ReportBugfixResultsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: BBs,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: UBs,
            oneof: "result"
        }
    ]), evu = k.makeMessageType("agent.v1.ReportBugfixResultsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: Qfu
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: Jfu
        }
    ]);

}
