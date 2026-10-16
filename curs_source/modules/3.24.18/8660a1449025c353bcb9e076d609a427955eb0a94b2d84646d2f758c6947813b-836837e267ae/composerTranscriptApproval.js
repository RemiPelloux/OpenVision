import { oqe } from "./toolCallHumanReviewTypes.js";
import { dAn } from "./toolUtils.js";
import { Ct, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
var V4f, K4f, Y4f, tZt;
export { K4f, V4f, Y4f, tZt };
var __wakaru_Uks_initialized = false;
export function Uks() {
if (__wakaru_Uks_initialized) return;
__wakaru_Uks_initialized = true;
"use strict";
E(), Pu(), oqe(), dAn(), V4f = "web-search", K4f = {
    [Ct.RUN_TERMINAL_COMMAND_V2]: {
        kind: "shell",
        usesAdditionalStatus: !0,
        usesReviewModel: !0
    },
    [Ct.MCP]: {
        kind: "mcp",
        usesAdditionalStatus: !0,
        usesReviewModel: !0
    },
    [Ct.WEB_FETCH]: {
        kind: "webFetch",
        usesAdditionalStatus: !1,
        usesReviewModel: !0
    },
    [Ct.WEB_SEARCH]: {
        kind: "webSearch",
        usesAdditionalStatus: !1,
        usesReviewModel: !1
    },
    [Ct.EDIT_FILE_V2]: {
        kind: "edit",
        usesAdditionalStatus: !1,
        usesReviewModel: !0
    },
    [Ct.READ_FILE]: {
        kind: "read",
        usesAdditionalStatus: !1,
        usesReviewModel: !1
    },
    [Ct.READ_FILE_V2]: {
        kind: "read",
        usesAdditionalStatus: !1,
        usesReviewModel: !1
    },
    [Ct.DELETE_FILE]: {
        kind: "delete",
        usesAdditionalStatus: !1,
        usesReviewModel: !1
    }
}, Y4f = {
    isRunningCapabilities: !1,
    pendingDecisionToolCallIds: new Set,
    isSubagentProxy: !1
}, tZt = {
    state: "none"
};

}
