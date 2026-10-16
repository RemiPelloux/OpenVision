import { canon, find_context, peek_next_section } from "../../../../../mcp_sandbox_policy_exports.js";
var CodexError, ActionType, HUNK_ADD_LINE_PREFIX, PATCH_PREFIX, PATCH_SUFFIX, END_OF_FILE_PREFIX, EOF_MARKER, PUNCT_EQUIV, PUNCT_EQUIV_RE, Parser3;
export { ActionType, CodexError, END_OF_FILE_PREFIX, EOF_MARKER, HUNK_ADD_LINE_PREFIX, PATCH_PREFIX, PATCH_SUFFIX, PUNCT_EQUIV, PUNCT_EQUIV_RE, Parser3 };
var __wakaru_init_codex_parser_initialized = false;
export function init_codex_parser() {
if (__wakaru_init_codex_parser_initialized) return;
__wakaru_init_codex_parser_initialized = true;
"use strict";
CodexError = class _CodexError extends Error {
    constructor(message){
        super(message);
        this.name = "CodexError";
        Object.setPrototypeOf(this, _CodexError.prototype);
    }
};
(function(ActionType2) {
    ActionType2["ADD"] = "add";
    ActionType2["DELETE"] = "delete";
    ActionType2["UPDATE"] = "update";
})(ActionType || (ActionType = {}));
HUNK_ADD_LINE_PREFIX = "+";
PATCH_PREFIX = "*** Begin Patch";
PATCH_SUFFIX = "*** End Patch";
END_OF_FILE_PREFIX = "*** End of File";
EOF_MARKER = "PATCH";
PUNCT_EQUIV = {
    "\u2010": "-",
    "\u2011": "-",
    "\u2012": "-",
    "\u2013": "-",
    "\u2014": "-",
    "\u2212": "-",
    "\u201C": '"',
    "\u201D": '"',
    "\u201E": '"',
    "\xAB": '"',
    "\xBB": '"',
    "\u2018": "'",
    "\u2019": "'",
    "\u201B": "'",
    "\xA0": " ",
    "\u202F": " "
};
PUNCT_EQUIV_RE = /[\u2010\u2011\u2012\u2013\u2014\u2212\u201C\u201D\u201E\u00AB\u00BB\u2018\u2019\u201B\u00A0\u202F]/g;
Parser3 = class {
    constructor(lines2){
        this.index = 0;
        this.fuzz = 0;
        this.lines = lines2;
    }
    is_done(prefixes) {
        if (this.index >= this.lines.length) {
            return true;
        }
        if (prefixes?.some((p2)=>this.lines[this.index].startsWith(p2.trim()))) {
            return true;
        }
        return false;
    }
    startswith(prefix) {
        const prefixes = Array.isArray(prefix) ? prefix : [
            prefix
        ];
        return prefixes.some((p2)=>this.lines[this.index].startsWith(p2));
    }
    read_str(prefix = "", returnEverything = false) {
        if (this.index >= this.lines.length) {
            throw new CodexError(`Index: ${this.index} >= ${this.lines.length}`);
        }
        if (this.lines[this.index].startsWith(prefix)) {
            const text4 = returnEverything ? this.lines[this.index] : this.lines[this.index].slice(prefix.length);
            this.index += 1;
            return text4 ?? "";
        }
        return "";
    }
    parse(text4) {
        return this.parse_update_file(text4);
    }
    parse_update_file(text4) {
        const action = {
            type: ActionType.UPDATE,
            chunks: []
        };
        const fileLines = text4.split("\n");
        let index = 0;
        while(!this.is_done([
            PATCH_SUFFIX,
            END_OF_FILE_PREFIX
        ])){
            const defStr = this.read_str("@@ ");
            let sectionStr = "";
            if (!defStr && this.lines[this.index] === "@@") {
                sectionStr = this.lines[this.index];
                this.index += 1;
            }
            if (!(defStr || sectionStr || index === 0)) {
                throw new CodexError(`Expected update hunk to start with a @@ context marker, got: '${this.lines[this.index]}'`);
            }
            if (defStr.trim()) {
                let found = false;
                const canonLocal = (s3)=>canon(s3);
                if (!fileLines.slice(0, index).some((s3)=>canonLocal(s3) === canonLocal(defStr))) {
                    for(let i = index; i < fileLines.length; i++){
                        if (canonLocal(fileLines[i]) === canonLocal(defStr)) {
                            index = i + 1;
                            found = true;
                            break;
                        }
                    }
                }
                if (!found && !fileLines.slice(0, index).some((s3)=>canonLocal(s3.trim()) === canonLocal(defStr.trim()))) {
                    for(let i = index; i < fileLines.length; i++){
                        if (canonLocal(fileLines[i].trim()) === canonLocal(defStr.trim())) {
                            index = i + 1;
                            this.fuzz += 1;
                            found = true;
                            break;
                        }
                    }
                }
            }
            const [nextChunkContext, chunks, endPatchIndex, eof] = peek_next_section(this.lines, this.index);
            const [newIndex, fuzz] = find_context(fileLines, nextChunkContext, index, eof);
            if (newIndex === -1) {
                const ctxText = nextChunkContext.join("\n");
                throw new CodexError(`Failed to find context:
${ctxText}`);
            }
            this.fuzz += fuzz;
            for (const ch of chunks){
                ch.orig_index += newIndex;
                action.chunks.push(ch);
            }
            index = newIndex + nextChunkContext.length;
            this.index = endPatchIndex;
        }
        return action;
    }
    apply_patch(text4, action) {
        const chunks = action.chunks.sort((a, b2)=>a.orig_index - b2.orig_index);
        const lines2 = text4.split("\n");
        const newLines = [];
        const citations = [];
        let index = 0;
        let citationIndex = 0;
        let currentCitation = null;
        for (const chunk of chunks){
            const linesSinceLastDiff = chunk.orig_index - index;
            citationIndex += linesSinceLastDiff;
            if (linesSinceLastDiff <= 5 * 2 && currentCitation !== null) {
                const _lineAdded = linesSinceLastDiff + chunk.ins_lines.length;
                currentCitation.lines.push(...lines2.slice(index, index + linesSinceLastDiff));
                currentCitation.end_line_number = citationIndex + chunk.ins_lines.length + 5 + 1;
            } else {
                if (currentCitation !== null) {
                    currentCitation.lines.push(...lines2.slice(index, index + 5));
                    citations.push(currentCitation);
                }
                currentCitation = {
                    start_line_number: citationIndex - 5 + 1,
                    end_line_number: citationIndex + chunk.ins_lines.length + 5 + 1,
                    lines: lines2.slice(chunk.orig_index - 5, chunk.orig_index)
                };
            }
            currentCitation.lines.push(...chunk.ins_lines);
            citationIndex += chunk.ins_lines.length;
            newLines.push(...lines2.slice(index, chunk.orig_index));
            newLines.push(...chunk.ins_lines);
            index = chunk.orig_index + chunk.del_lines.length;
        }
        if (currentCitation !== null) {
            currentCitation.lines.push(...lines2.slice(index, index + 5));
            citations.push(currentCitation);
        }
        newLines.push(...lines2.slice(index));
        return {
            newLines,
            citations
        };
    }
};

}
