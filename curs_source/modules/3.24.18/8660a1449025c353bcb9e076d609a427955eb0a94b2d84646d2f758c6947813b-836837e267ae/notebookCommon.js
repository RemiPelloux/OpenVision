import { Di, Ga, xa } from "./Iwo.js";
import { Hi, cn } from "./contextkey.js";
import { NB } from "./glob.js";
import { IT, np } from "./iterator.js";
import { Jk, tB } from "./mime.js";
import { Ki, Ot } from "./network.js";
import { lXr } from "./notebookDocumentService.js";
import { E } from "./tslib.es6.js";
import { A71, Aja, I71, Rja, gCe, x71 } from "./yBp.js";
var Dja, mCm, gCm, fCm, Cpe, Nja, vCm, _Cm, cXr, yqe, VTn, MP, Lja, uXr, Oja, jM, Wki, bCm, F71, B71, Gki, Jb, dXr, Fja, yCm, SCm, qki, hXr, kCm, wCm, CCm;
export { B71, CCm, Cpe, Dja, F71, Fja, Gki, Jb, Lja, MP, Nja, Oja, SCm, VTn, Wki, _Cm, bCm, cXr, dXr, fCm, gCm, hXr, jM, kCm, mCm, qki, uXr, vCm, wCm, yCm, yqe };
var __wakaru_Y7_initialized = false;
export function Y7() {
if (__wakaru_Y7_initialized) return;
__wakaru_Y7_initialized = true;
"use strict";
E(), Ga(), NB(), IT(), tB(), Ki(), Di(), Hi(), lXr(), Dja = "workbench.editor.notebook", mCm = "workbench.editor.notebookTextDiffEditor", gCm = "workbench.editor.interactive", fCm = "workbench.editor.repl", Cpe = ((t)=>(t[t.Markup = 1] = "Markup", t[t.Code = 2] = "Code", t))(Cpe || {}), Nja = [
    "application/json",
    "application/javascript",
    "text/html",
    "image/svg+xml",
    Jk.latex,
    Jk.markdown,
    "image/png",
    "image/jpeg",
    Jk.text
], vCm = [
    Jk.latex,
    Jk.markdown,
    "application/json",
    "text/html",
    "image/svg+xml",
    "image/png",
    "image/jpeg",
    Jk.text
], _Cm = new Map([
    [
        "ms-toolsai.jupyter",
        new Set([
            "jupyter-notebook",
            "interactive"
        ])
    ],
    [
        "ms-toolsai.jupyter-renderers",
        new Set([
            "jupyter-notebook",
            "interactive"
        ])
    ]
]), cXr = "_notAvailable", yqe = ((t)=>(t[t.Unconfirmed = 1] = "Unconfirmed", t[t.Pending = 2] = "Pending", t[t.Executing = 3] = "Executing", t))(yqe || {}), VTn = ((t)=>(t[t.Unconfirmed = 1] = "Unconfirmed", t[t.Pending = 2] = "Pending", t[t.Executing = 3] = "Executing", t))(VTn || {}), MP = ((t)=>(t[t.ModelChange = 1] = "ModelChange", t[t.Move = 2] = "Move", t[t.ChangeCellLanguage = 5] = "ChangeCellLanguage", t[t.Initialize = 6] = "Initialize", t[t.ChangeCellMetadata = 7] = "ChangeCellMetadata", t[t.Output = 8] = "Output", t[t.OutputItem = 9] = "OutputItem", t[t.ChangeCellContent = 10] = "ChangeCellContent", t[t.ChangeDocumentMetadata = 11] = "ChangeDocumentMetadata", t[t.ChangeCellInternalMetadata = 12] = "ChangeCellInternalMetadata", t[t.ChangeCellMime = 13] = "ChangeCellMime", t[t.Unknown = 100] = "Unknown", t))(MP || {}), Lja = ((t)=>(t[t.Handle = 0] = "Handle", t[t.Index = 1] = "Index", t))(Lja || {}), uXr = ((t)=>(t[t.Replace = 1] = "Replace", t[t.Output = 2] = "Output", t[t.Metadata = 3] = "Metadata", t[t.CellLanguage = 4] = "CellLanguage", t[t.DocumentMetadata = 5] = "DocumentMetadata", t[t.Move = 6] = "Move", t[t.OutputItems = 7] = "OutputItems", t[t.PartialMetadata = 8] = "PartialMetadata", t[t.PartialInternalMetadata = 9] = "PartialInternalMetadata", t))(uXr || {}), ((t)=>{
    t.scheme = Ot.vscodeNotebookMetadata;
    function e(i) {
        return A71(i);
    }
    t.generate = e;
    function n(i) {
        return x71(i);
    }
    t.parse = n;
})(Oja || (Oja = {})), ((t)=>{
    t.scheme = Ot.vscodeNotebookCell;
    function e(l, c) {
        return I71(l, c);
    }
    t.generate = e;
    function n(l) {
        return Aja(l);
    }
    t.parse = n;
    function i(l, c) {
        return l.with({
            scheme: Ot.vscodeNotebookCellOutput,
            query: new URLSearchParams({
                openIn: "editor",
                outputId: c ?? "",
                notebookScheme: l.scheme !== Ot.file ? l.scheme : ""
            }).toString()
        });
    }
    t.generateCellOutputUriWithId = i;
    function r(l, c, u) {
        return l.with({
            scheme: Ot.vscodeNotebookCellOutput,
            fragment: c.fragment,
            query: new URLSearchParams({
                openIn: "notebook",
                outputIndex: String(u)
            }).toString()
        });
    }
    t.generateCellOutputUriWithIndex = r;
    function s(l) {
        return Rja(l);
    }
    t.parseCellOutputUri = s;
    function o(l, c, u) {
        return t.generate(l, c).with({
            scheme: u
        });
    }
    t.generateCellPropertyUri = o;
    function a(l, c) {
        if (l.scheme === c) return t.parse(l.with({
            scheme: t.scheme
        }));
    }
    t.parseCellPropertyUri = a;
})(jM || (jM = {})), Wki = (t)=>xa ? t.replace(/\//g, "\\") : t, bCm = class {
    constructor(t = [], e = Nja){
        this.defaultOrder = e, this.order = [
            ...new Set(t)
        ].map((n)=>({
                pattern: n,
                matches: gCe(Wki(n))
            }));
    }
    sort(t) {
        const e = new Map(np.map(t, (i)=>[
                i,
                Wki(i)
            ]));
        let n = [];
        for (const { matches: i } of this.order)for (const [r, s] of e)if (i(s)) {
            n.push(r), e.delete(r);
            break;
        }
        return e.size && (n = n.concat([
            ...e.keys()
        ].sort((i, r)=>this.defaultOrder.indexOf(i) - this.defaultOrder.indexOf(r)))), n;
    }
    prioritize(t, e) {
        const n = this.findIndex(t);
        if (n === -1) {
            this.order.unshift({
                pattern: t,
                matches: gCe(Wki(t))
            });
            return;
        }
        const i = new Set(e.map((s)=>this.findIndex(s, n)));
        i.delete(-1);
        const r = Array.from(i).sort();
        this.order.splice(n + 1, 0, ...r.map((s)=>this.order[s]));
        for(let s = r.length - 1; s >= 0; s--)this.order.splice(r[s], 1);
    }
    toArray() {
        return this.order.map((t)=>t.pattern);
    }
    findIndex(t, e = this.order.length) {
        const n = Wki(t);
        for(let i = 0; i < e; i++)if (this.order[i].matches(n)) return i;
        return -1;
    }
}, F71 = new cn("notebookEditorCursorAtBoundary", "none"), B71 = new cn("notebookEditorCursorAtLineBoundary", "none"), Gki = ((t)=>(t.default = "default", t.option = "option", t))(Gki || {}), Jb = {
    displayOrder: "notebook.displayOrder",
    cellToolbarLocation: "notebook.cellToolbarLocation",
    cellToolbarVisibility: "notebook.cellToolbarVisibility",
    showCellStatusBar: "notebook.showCellStatusBar",
    cellExecutionTimeVerbosity: "notebook.cellExecutionTimeVerbosity",
    textDiffEditorPreview: "notebook.diff.enablePreview",
    diffOverviewRuler: "notebook.diff.overviewRuler",
    experimentalInsertToolbarAlignment: "notebook.experimental.insertToolbarAlignment",
    compactView: "notebook.compactView",
    focusIndicator: "notebook.cellFocusIndicator",
    insertToolbarLocation: "notebook.insertToolbarLocation",
    globalToolbar: "notebook.globalToolbar",
    stickyScrollEnabled: "notebook.stickyScroll.enabled",
    stickyScrollMode: "notebook.stickyScroll.mode",
    undoRedoPerCell: "notebook.undoRedoPerCell",
    consolidatedOutputButton: "notebook.consolidatedOutputButton",
    showFoldingControls: "notebook.showFoldingControls",
    dragAndDropEnabled: "notebook.dragAndDropEnabled",
    cellEditorOptionsCustomizations: "notebook.editorOptionsCustomizations",
    consolidatedRunButton: "notebook.consolidatedRunButton",
    globalToolbarShowLabel: "notebook.globalToolbarShowLabel",
    markupFontSize: "notebook.markup.fontSize",
    markdownLineHeight: "notebook.markdown.lineHeight",
    interactiveWindowCollapseCodeCells: "interactiveWindow.collapseCellInputCode",
    outputScrollingDeprecated: "notebook.experimental.outputScrolling",
    outputScrolling: "notebook.output.scrolling",
    textOutputLineLimit: "notebook.output.textLineLimit",
    LinkifyOutputFilePaths: "notebook.output.linkifyFilePaths",
    minimalErrorRendering: "notebook.output.minimalErrorRendering",
    formatOnSave: "notebook.formatOnSave.enabled",
    insertFinalNewline: "notebook.insertFinalNewline",
    defaultFormatter: "notebook.defaultFormatter",
    formatOnCellExecution: "notebook.formatOnCellExecution",
    codeActionsOnSave: "notebook.codeActionsOnSave",
    outputWordWrap: "notebook.output.wordWrap",
    outputLineHeightDeprecated: "notebook.outputLineHeight",
    outputLineHeight: "notebook.output.lineHeight",
    outputFontSizeDeprecated: "notebook.outputFontSize",
    outputFontSize: "notebook.output.fontSize",
    outputFontFamilyDeprecated: "notebook.outputFontFamily",
    outputFontFamily: "notebook.output.fontFamily",
    findFilters: "notebook.find.filters",
    logging: "notebook.logging",
    confirmDeleteRunningCell: "notebook.confirmDeleteRunningCell",
    remoteSaving: "notebook.experimental.remoteSave",
    gotoSymbolsAllSymbols: "notebook.gotoSymbols.showAllSymbols",
    outlineShowMarkdownHeadersOnly: "notebook.outline.showMarkdownHeadersOnly",
    outlineShowCodeCells: "notebook.outline.showCodeCells",
    outlineShowCodeCellSymbols: "notebook.outline.showCodeCellSymbols",
    breadcrumbsShowCodeCells: "notebook.breadcrumbs.showCodeCells",
    scrollToRevealCell: "notebook.scrolling.revealNextCellOnExecute",
    cellChat: "notebook.experimental.cellChat",
    cellGenerate: "notebook.experimental.generate",
    notebookVariablesView: "notebook.variablesView",
    notebookInlineValues: "notebook.inlineValues",
    InteractiveWindowPromptToSave: "interactiveWindow.promptToSaveOnClose",
    cellFailureDiagnostics: "notebook.cellFailureDiagnostics",
    outputBackupSizeLimit: "notebook.backup.sizeLimit",
    multiCursor: "notebook.multiCursor.enabled",
    markupFontFamily: "notebook.markup.fontFamily"
}, dXr = ((t)=>(t[t.Left = 1] = "Left", t[t.Right = 2] = "Right", t))(dXr || {}), Fja = class CXs {
    static create(e, n) {
        return `${CXs._prefix}${e}/${n ?? e}`;
    }
    static parse(e) {
        if (e.startsWith(CXs._prefix)) {
            const n = e.substring(CXs._prefix.length).split("/");
            if (n.length === 2) return {
                notebookType: n[0],
                viewType: n[1]
            };
        }
    }
}, Fja._prefix = "notebook/", yCm = Fja, SCm = new TextDecoder, qki = "\x1B[A", hXr = qki.split("").map((t)=>t.charCodeAt(0)), kCm = 10, wCm = 8, CCm = 13;

}
