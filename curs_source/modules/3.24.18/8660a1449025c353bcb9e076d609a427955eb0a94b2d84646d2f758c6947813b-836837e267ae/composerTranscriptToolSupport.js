import { Ct, Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
var g9f, r9l;
export { g9f, r9l };
var __wakaru_kRw_initialized = false;
export function kRw() {
if (__wakaru_kRw_initialized) return;
__wakaru_kRw_initialized = true;
"use strict";
E(), Pu(), g9f = {
    label: "Tool call",
    support: "placeholder"
}, r9l = {
    [Ct.UNSPECIFIED]: {
        label: "UNSPECIFIED",
        support: "placeholder"
    },
    [Ct.AWAIT]: {
        label: "Await",
        support: "rendered",
        lane: "waiting"
    },
    [Ct.AWAIT_TASK]: {
        label: "Await task",
        support: "rendered",
        lane: "waiting"
    },
    [Ct.DELETE_FILE]: {
        label: "Delete file",
        support: "rendered",
        lane: "fileChange"
    },
    [Ct.EDIT_FILE_V2]: {
        label: "Edit file",
        support: "rendered",
        lane: "fileChange"
    },
    [Ct.GET_MCP_TOOLS]: {
        label: "Get MCP tools",
        support: "rendered"
    },
    [Ct.GLOB_FILE_SEARCH]: {
        label: "Find files",
        support: "rendered"
    },
    [Ct.LIST_DIR_V2]: {
        label: "List directory",
        support: "rendered"
    },
    [Ct.MCP]: {
        label: "MCP",
        support: "rendered"
    },
    [Ct.READ_FILE_V2]: {
        label: "Read file",
        support: "rendered"
    },
    [Ct.READ_LINTS]: {
        label: "Read lints",
        support: "rendered"
    },
    [Ct.RIPGREP_RAW_SEARCH]: {
        label: "Search",
        support: "rendered"
    },
    [Ct.RUN_TERMINAL_COMMAND_V2]: {
        label: "Run command",
        support: "rendered",
        lane: "shell"
    },
    [Ct.SEMANTIC_SEARCH_FULL]: {
        label: "Semantic search",
        support: "rendered"
    },
    [Ct.TASK_V2]: {
        label: "Task",
        support: "rendered",
        standalone: !0
    },
    [Ct.TODO_WRITE]: {
        label: "Update todos",
        support: "rendered"
    },
    [Ct.WEB_FETCH]: {
        label: "Fetch webpage",
        support: "rendered"
    },
    [Ct.WEB_SEARCH]: {
        label: "Search web",
        support: "rendered"
    },
    [Ct.ASK_QUESTION]: {
        label: "Ask question",
        support: "rendered",
        standalone: !0
    },
    [Ct.COMPUTER_USE]: {
        label: "Computer use",
        support: "rendered",
        standalone: !0
    },
    [Ct.CREATE_PLAN]: {
        label: "Create plan",
        support: "rendered",
        standalone: !0
    },
    [Ct.GENERATE_IMAGE]: {
        label: "Generate image",
        support: "rendered"
    },
    [Ct.MCP_AUTH]: {
        label: "Authenticate MCP",
        support: "rendered",
        standalone: !0
    },
    [Ct.CONNECT_SCM]: {
        label: "Connect GitHub",
        support: "rendered",
        standalone: !0
    },
    [Ct.READ_MCP_RESOURCE]: {
        label: "Read MCP resource",
        support: "rendered"
    },
    [Ct.RECORD_SCREEN]: {
        label: "Screen recording",
        support: "rendered"
    },
    [Ct.SWITCH_MODE]: {
        label: "Switch mode",
        support: "rendered",
        standalone: !0
    }
};

}
