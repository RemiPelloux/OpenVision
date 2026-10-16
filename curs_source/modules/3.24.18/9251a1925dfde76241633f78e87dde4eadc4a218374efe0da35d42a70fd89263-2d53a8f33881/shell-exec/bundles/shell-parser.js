import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
var import_tree_sitter, import_tree_sitter_bash, TREE_SITTER_STUBBED_ERROR_CODE, redirectNodeTypes, fileRedirectOperatorTypes;
export { TREE_SITTER_STUBBED_ERROR_CODE, fileRedirectOperatorTypes, import_tree_sitter, import_tree_sitter_bash, redirectNodeTypes };
var __wakaru_init_shell_parser_initialized = false;
export function init_shell_parser() {
if (__wakaru_init_shell_parser_initialized) return;
__wakaru_init_shell_parser_initialized = true;
"use strict";
import_tree_sitter = __toESM(require("tree-sitter"), 1);
import_tree_sitter_bash = __toESM(require("tree-sitter-bash"), 1);
TREE_SITTER_STUBBED_ERROR_CODE = "CURSOR_TREE_SITTER_STUBBED";
redirectNodeTypes = new Set([
    "file_redirect",
    "heredoc_redirect",
    "herestring_redirect",
    "heredoc",
    "here_string",
    "redirect",
    "redirection"
]);
fileRedirectOperatorTypes = new Set([
    "<",
    ">",
    ">>",
    ">|",
    "<>",
    "<&",
    ">&",
    "&>",
    "&>>"
]);

}
