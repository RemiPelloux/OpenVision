import { c } from "./proto3.js";
import { F } from "./protobuf.js";
import { h } from "./tslib.es6.js";
var pY, Jy, hY, ZP, eN, gY, fY;
export { Jy, ZP, eN, fY, gY, hY, pY };
var __wakaru__Y_initialized = false;
export function _Y() {
if (__wakaru__Y_initialized) return;
__wakaru__Y_initialized = true;
"use strict";
h(), F(), pY = c.makeEnum("agent.v1.BugfixVerdict", [
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
]), Jy = c.makeMessageType("agent.v1.BugfixResultItem", ()=>[
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
            T: c.getEnumType(pY)
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
    ]), hY = c.makeMessageType("agent.v1.ReportBugfixResultsArgs", ()=>[
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
            T: Jy,
            repeated: !0
        }
    ]), ZP = c.makeMessageType("agent.v1.ReportBugfixResultsSuccess", ()=>[
        {
            no: 1,
            name: "results",
            kind: "message",
            T: Jy,
            repeated: !0
        }
    ]), eN = c.makeMessageType("agent.v1.ReportBugfixResultsError", ()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9
        }
    ]), gY = c.makeMessageType("agent.v1.ReportBugfixResultsResult", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: ZP,
            oneof: "result"
        },
        {
            no: 2,
            name: "error",
            kind: "message",
            T: eN,
            oneof: "result"
        }
    ]), fY = c.makeMessageType("agent.v1.ReportBugfixResultsToolCall", ()=>[
        {
            no: 1,
            name: "args",
            kind: "message",
            T: hY
        },
        {
            no: 2,
            name: "result",
            kind: "message",
            T: gY
        }
    ]);

}
