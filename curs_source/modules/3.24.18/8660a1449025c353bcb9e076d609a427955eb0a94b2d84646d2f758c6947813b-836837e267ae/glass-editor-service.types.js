import { iv } from "./index_16.js";
import { E } from "./tslib.es6.js";
import { ze } from "./ze.js";
var DEf, NEf, LEf, OEf, QDn, ice, FEf;
export { DEf, FEf, LEf, NEf, OEf, QDn, ice };
var __wakaru_Dme_initialized = false;
export function Dme() {
if (__wakaru_Dme_initialized) return;
__wakaru_Dme_initialized = true;
"use strict";
E(), iv(), DEf = [
    "default",
    "vim",
    "emacs"
], NEf = Object.freeze({
    vim: Object.freeze([
        "vscodevim.vim",
        "asvetliakov.vscode-neovim"
    ]),
    emacs: Object.freeze([
        "tuttieee.emacs-mcx"
    ])
}), LEf = [
    "unified",
    "split"
], OEf = [
    "lastTurn",
    "uncommitted",
    "unstaged",
    "staged",
    "branch"
], QDn = ze.object({
    lineNumbersVisible: ze.boolean().default(!0),
    wordWrapEnabled: ze.boolean().default(!1),
    autoSaveEnabled: ze.boolean().optional(),
    keybindings: ze.enum(DEf).default("default"),
    cursorTabEnabled: ze.boolean().default(!0),
    fileTreeSidebarExpanded: ze.boolean().default(!0),
    fileTreeSidebarExpandedExplicitlySet: ze.boolean().default(!1),
    fileTreeSidebarWidth: ze.number().min(180).max(460).default(220),
    diffTreeSidebarExpanded: ze.boolean().default(!1),
    prTreeSidebarExpanded: ze.boolean().default(!1),
    diffTreeSidebarWidth: ze.number().min(180).max(460).default(220),
    diffViewMode: ze.enum(LEf).default("unified"),
    diffPanelFilterScope: ze.enum(OEf).optional(),
    diffIgnoreWhitespace: ze.boolean().default(!1),
    diffWordWrap: ze.boolean().default(!1),
    terminalTreeExpanded: ze.boolean().default(!1),
    terminalTreeWidth: ze.number().min(180).max(460).default(220),
    browserSidebarExpanded: ze.boolean().default(!1),
    browserSidebarWidth: ze.number().min(180).max(460).default(220),
    canvasSidebarExpanded: ze.boolean().default(!1)
}), ice = Object.freeze(QDn.parse({})), FEf = Object.freeze({
    currentFilePath: void 0,
    isLoading: !1,
    isDirty: !1,
    error: void 0,
    contentType: "text",
    imageDataUrl: void 0,
    videoDataUrl: void 0,
    pdfBytesGeneration: void 0,
    largeFileGate: void 0
});

}
