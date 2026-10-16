import { __toESM } from "../../../../../agent-host/dist/storage/sqlite-store.js";
import { CURSOR_COAUTHORED_BY_TRAILER } from "../../../../../constants/dist/commit-identity.js";
import { init_dist2 } from "../../../../../constants/dist/index.js";
import { findInsertPositionInBashBodyValue, hasCommitAttribution } from "../../../../../tree_chunk_napi_exports.js";
var import_tree_sitter2, import_tree_sitter_bash2, TRAILER_FLAG, PR_FOOTER, bashParser, bashGitCommitTrailerConfig, bashPrFooterConfig;
export { PR_FOOTER, TRAILER_FLAG, bashGitCommitTrailerConfig, bashParser, bashPrFooterConfig, import_tree_sitter2, import_tree_sitter_bash2 };
var __wakaru_init_command_modifiers_initialized = false;
export function init_command_modifiers() {
if (__wakaru_init_command_modifiers_initialized) return;
__wakaru_init_command_modifiers_initialized = true;
"use strict";
init_dist2();
import_tree_sitter2 = __toESM(require("tree-sitter"), 1);
import_tree_sitter_bash2 = __toESM(require("tree-sitter-bash"), 1);
TRAILER_FLAG = ` --trailer "${CURSOR_COAUTHORED_BY_TRAILER}"`;
PR_FOOTER = "\n\nMade with [Cursor](https://cursor.com)";
bashParser = new import_tree_sitter2.default();
bashParser.setLanguage(import_tree_sitter_bash2.default);
bashGitCommitTrailerConfig = {
    quickCheck: (command)=>command.includes("git"),
    alreadyModified: (command)=>hasCommitAttribution(command),
    isApplicable: (commandName, args)=>{
        if (commandName !== "git") {
            return false;
        }
        for (const arg of args){
            if (!arg.text.startsWith("-")) {
                return arg.text === "commit";
            }
        }
        return false;
    },
    findPosition: (commandNode)=>{
        const args = commandNode.childrenForFieldName("argument");
        for (const arg of args){
            if (arg.text === "commit") {
                return arg.endIndex;
            }
        }
        return null;
    },
    insertText: TRAILER_FLAG
};
bashPrFooterConfig = {
    quickCheck: (command)=>command.includes("gh"),
    alreadyModified: (command)=>command.includes("Made with [Cursor]"),
    isApplicable: (commandName, args)=>{
        if (commandName !== "gh") {
            return false;
        }
        let foundPr = false;
        for (const arg of args){
            if (arg.text.startsWith("-")) {
                continue;
            }
            if (!foundPr) {
                if (arg.text === "pr") {
                    foundPr = true;
                } else {
                    return false;
                }
            } else {
                return arg.text === "create";
            }
        }
        return false;
    },
    findPosition: (commandNode)=>{
        const args = commandNode.childrenForFieldName("argument");
        for(let i = 0; i < args.length; i++){
            const arg = args[i];
            const argText = arg.text;
            if (argText === "--body" || argText === "-b") {
                const nextArg = args[i + 1];
                if (!nextArg) {
                    return null;
                }
                return findInsertPositionInBashBodyValue(nextArg);
            }
            if (argText.startsWith("--body=") || argText.startsWith("-b=")) {
                const prefixLen = argText.startsWith("--body=") ? 7 : 3;
                const value = argText.slice(prefixLen);
                if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
                    return arg.endIndex - 1;
                }
                return arg.endIndex;
            }
        }
        return null;
    },
    insertText: PR_FOOTER
};

}
