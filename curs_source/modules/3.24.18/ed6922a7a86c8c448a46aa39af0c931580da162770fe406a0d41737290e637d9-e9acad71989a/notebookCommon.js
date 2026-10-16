import { DTv, MTv, PTv, Vse, lao, uao } from "./A3u.js";
import { Fo, Oo, jn } from "./HVr.js";
import { At, dn } from "./contextkey.js";
import { qM } from "./glob.js";
import { Eg, _a } from "./iterator.js";
import { Q9, tb } from "./mime.js";
import { gt, li } from "./network.js";
import { hNn } from "./notebookDocumentService.js";
import { x } from "./tslib.es6.js";
var XJe, U5, rF, iWt, RGi, Hl, pao, zOd, KOd, kkt, M1, rWt, Rf, s_, DGi, MGi, dm, pNn, YOd, sWt, XOd, mNn, Oee, Wr, PGi, mao, oWt, ZOd, gNn, LGi, QOd, JOd, eFd;
export { DGi, Hl, JOd, KOd, LGi, M1, MGi, Oee, PGi, QOd, RGi, Rf, U5, Wr, XJe, XOd, YOd, ZOd, dm, eFd, gNn, iWt, kkt, mNn, mao, oWt, pNn, pao, rF, rWt, sWt, s_, zOd };
var __wakaru_ed_initialized = false;
export function ed() {
if (__wakaru_ed_initialized) return;
__wakaru_ed_initialized = true;
"use strict";
x(), Fo(), qM(), Eg(), Q9(), li(), jn(), dn(), hNn(), XJe = "workbench.editor.notebook", U5 = "workbench.editor.notebookTextDiffEditor", rF = "workbench.editor.notebookMultiTextDiffEditor", iWt = "workbench.editor.interactive", RGi = "workbench.editor.repl", Hl = ((e)=>(e[e.Markup = 1] = "Markup", e[e.Code = 2] = "Code", e))(Hl || {}), pao = [
    "application/json",
    "application/javascript",
    "text/html",
    "image/svg+xml",
    tb.latex,
    tb.markdown,
    "image/png",
    "image/jpeg",
    tb.text
], zOd = [
    tb.latex,
    tb.markdown,
    "application/json",
    "text/html",
    "image/svg+xml",
    "image/png",
    "image/jpeg",
    tb.text
], KOd = new Map([
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
]), kkt = "_notAvailable", M1 = ((e)=>(e[e.Unconfirmed = 1] = "Unconfirmed", e[e.Pending = 2] = "Pending", e[e.Executing = 3] = "Executing", e))(M1 || {}), rWt = ((e)=>(e[e.Unconfirmed = 1] = "Unconfirmed", e[e.Pending = 2] = "Pending", e[e.Executing = 3] = "Executing", e))(rWt || {}), Rf = ((e)=>(e[e.ModelChange = 1] = "ModelChange", e[e.Move = 2] = "Move", e[e.ChangeCellLanguage = 5] = "ChangeCellLanguage", e[e.Initialize = 6] = "Initialize", e[e.ChangeCellMetadata = 7] = "ChangeCellMetadata", e[e.Output = 8] = "Output", e[e.OutputItem = 9] = "OutputItem", e[e.ChangeCellContent = 10] = "ChangeCellContent", e[e.ChangeDocumentMetadata = 11] = "ChangeDocumentMetadata", e[e.ChangeCellInternalMetadata = 12] = "ChangeCellInternalMetadata", e[e.ChangeCellMime = 13] = "ChangeCellMime", e[e.Unknown = 100] = "Unknown", e))(Rf || {}), s_ = ((e)=>(e[e.Handle = 0] = "Handle", e[e.Index = 1] = "Index", e))(s_ || {}), DGi = ((e)=>(e[e.Replace = 1] = "Replace", e[e.Output = 2] = "Output", e[e.Metadata = 3] = "Metadata", e[e.CellLanguage = 4] = "CellLanguage", e[e.DocumentMetadata = 5] = "DocumentMetadata", e[e.Move = 6] = "Move", e[e.OutputItems = 7] = "OutputItems", e[e.PartialMetadata = 8] = "PartialMetadata", e[e.PartialInternalMetadata = 9] = "PartialInternalMetadata", e))(DGi || {}), ((e)=>{
    e.scheme = gt.vscodeNotebookMetadata;
    function t(i) {
        return PTv(i);
    }
    e.generate = t;
    function n(i) {
        return MTv(i);
    }
    e.parse = n;
})(MGi || (MGi = {})), ((e)=>{
    e.scheme = gt.vscodeNotebookCell;
    function t(c, l) {
        return DTv(c, l);
    }
    e.generate = t;
    function n(c) {
        return lao(c);
    }
    e.parse = n;
    function i(c, l) {
        return c.with({
            scheme: gt.vscodeNotebookCellOutput,
            query: new URLSearchParams({
                openIn: "editor",
                outputId: l ?? "",
                notebookScheme: c.scheme !== gt.file ? c.scheme : ""
            }).toString()
        });
    }
    e.generateCellOutputUriWithId = i;
    function r(c, l, u) {
        return c.with({
            scheme: gt.vscodeNotebookCellOutput,
            fragment: l.fragment,
            query: new URLSearchParams({
                openIn: "notebook",
                outputIndex: String(u)
            }).toString()
        });
    }
    e.generateCellOutputUriWithIndex = r;
    function s(c) {
        return uao(c);
    }
    e.parseCellOutputUri = s;
    function o(c, l, u) {
        return e.generate(c, l).with({
            scheme: u
        });
    }
    e.generateCellPropertyUri = o;
    function a(c, l) {
        if (c.scheme === l) return e.parse(c.with({
            scheme: e.scheme
        }));
    }
    e.parseCellPropertyUri = a;
})(dm || (dm = {})), pNn = (e)=>Oo ? e.replace(/\//g, "\\") : e, YOd = class {
    constructor(e = [], t = pao){
        this.defaultOrder = t, this.order = [
            ...new Set(e)
        ].map((n)=>({
                pattern: n,
                matches: Vse(pNn(n))
            }));
    }
    sort(e) {
        const t = new Map(_a.map(e, (i)=>[
                i,
                pNn(i)
            ]));
        let n = [];
        for (const { matches: i } of this.order)for (const [r, s] of t)if (i(s)) {
            n.push(r), t.delete(r);
            break;
        }
        return t.size && (n = n.concat([
            ...t.keys()
        ].sort((i, r)=>this.defaultOrder.indexOf(i) - this.defaultOrder.indexOf(r)))), n;
    }
    prioritize(e, t) {
        const n = this.findIndex(e);
        if (n === -1) {
            this.order.unshift({
                pattern: e,
                matches: Vse(pNn(e))
            });
            return;
        }
        const i = new Set(t.map((s)=>this.findIndex(s, n)));
        i.delete(-1);
        const r = Array.from(i).sort();
        this.order.splice(n + 1, 0, ...r.map((s)=>this.order[s]));
        for(let s = r.length - 1; s >= 0; s--)this.order.splice(r[s], 1);
    }
    toArray() {
        return this.order.map((e)=>e.pattern);
    }
    findIndex(e, t = this.order.length) {
        const n = pNn(e);
        for(let i = 0; i < t; i++)if (this.order[i].matches(n)) return i;
        return -1;
    }
}, sWt = new At("notebookEditorCursorAtBoundary", "none"), XOd = new At("notebookEditorCursorAtLineBoundary", "none"), mNn = ((e)=>(e.default = "default", e.option = "option", e))(mNn || {}), Oee = ((e)=>(e.Cells = "cells", e.Text = "text", e.None = "none", e))(Oee || {}), Wr = {
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
}, PGi = ((e)=>(e[e.Left = 1] = "Left", e[e.Right = 2] = "Right", e))(PGi || {}), mao = class M1r {
    static create(t, n) {
        return `${M1r._prefix}${t}/${n ?? t}`;
    }
    static parse(t) {
        if (t.startsWith(M1r._prefix)) {
            const n = t.substring(M1r._prefix.length).split("/");
            if (n.length === 2) return {
                notebookType: n[0],
                viewType: n[1]
            };
        }
    }
}, mao._prefix = "notebook/", oWt = mao, ZOd = new TextDecoder, gNn = "\x1B[A", LGi = gNn.split("").map((e)=>e.charCodeAt(0)), QOd = 10, JOd = 8, eFd = 13;

}
