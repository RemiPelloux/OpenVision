import { He, Se, bt, mqr, rn, u3 } from "./HVr.js";
import { JL, Vo } from "./actions.js";
import { $n, vi } from "./commands.js";
import { dn, xn } from "./contextkey.js";
import { Ze } from "./instantiation.js";
import { eb } from "./keybindingsRegistry.js";
import { JN, oA } from "./linkedList.js";
import { cwe, vn } from "./qIc.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
function ie(e, t, n, i) {
    var r = arguments.length, s = r < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, n) : i, o;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(e, t, n, i);
    else for(var a = e.length - 1; a >= 0; a--)(o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, n, s) : o(t, n)) || s);
    return r > 3 && s && Object.defineProperty(t, n, s), s;
}
function C(e, t) {
    return function(n, i) {
        t(n, i, e);
    };
}
var oi, Re, Zl, KYr, Zqe, Bn, n2, rv, pt;
export { Bn, C, KYr, Re, Zl, Zqe, ie, n2, oi, pt, rv };
var __wakaru_ei_initialized = false;
export function ei() {
if (__wakaru_ei_initialized) return;
__wakaru_ei_initialized = true;
"use strict";
x(), Vo(), bt(), Se(), JN(), Sr(), vi(), dn(), Ze(), eb(), oi = class LXn {
    static for(t) {
        return LXn._instances.get(t) ?? new LXn(t);
    }
    constructor(t){
        if (LXn._instances.has(t)) throw new TypeError(`MenuId with identifier '${t}' already exists. Use MenuId.for(ident) or a unique identifier`);
        LXn._instances.set(t, this), this.id = t;
    }
}, oi._instances = new Map, oi.CommandPalette = new oi("CommandPalette"), oi.DebugBreakpointsContext = new oi("DebugBreakpointsContext"), oi.DebugCallStackContext = new oi("DebugCallStackContext"), oi.DebugConsoleContext = new oi("DebugConsoleContext"), oi.DebugVariablesContext = new oi("DebugVariablesContext"), oi.NotebookVariablesContext = new oi("NotebookVariablesContext"), oi.DebugHoverContext = new oi("DebugHoverContext"), oi.DebugWatchContext = new oi("DebugWatchContext"), oi.DebugToolBar = new oi("DebugToolBar"), oi.DebugToolBarStop = new oi("DebugToolBarStop"), oi.DebugCallStackToolbar = new oi("DebugCallStackToolbar"), oi.DebugCreateConfiguration = new oi("DebugCreateConfiguration"), oi.EditorContext = new oi("EditorContext"), oi.SimpleEditorContext = new oi("SimpleEditorContext"), oi.EditorContent = new oi("EditorContent"), oi.EditorLineNumberContext = new oi("EditorLineNumberContext"), oi.EditorContextCopy = new oi("EditorContextCopy"), oi.EditorContextPeek = new oi("EditorContextPeek"), oi.EditorContextShare = new oi("EditorContextShare"), oi.EditorContextCursorBlame = new oi("EditorContextCursorBlame"), oi.EditorTitle = new oi("EditorTitle"), oi.EditorTitleRun = new oi("EditorTitleRun"), oi.EditorTitleContext = new oi("EditorTitleContext"), oi.EditorTitleContextShare = new oi("EditorTitleContextShare"), oi.EmptyEditorGroup = new oi("EmptyEditorGroup"), oi.EmptyEditorGroupContext = new oi("EmptyEditorGroupContext"), oi.EditorTabsBarContext = new oi("EditorTabsBarContext"), oi.EditorTabsBarShowTabsSubmenu = new oi("EditorTabsBarShowTabsSubmenu"), oi.EditorTabsBarShowTabsZenModeSubmenu = new oi("EditorTabsBarShowTabsZenModeSubmenu"), oi.EditorActionsPositionSubmenu = new oi("EditorActionsPositionSubmenu"), oi.ExplorerContext = new oi("ExplorerContext"), oi.ExplorerContextShare = new oi("ExplorerContextShare"), oi.ExtensionContext = new oi("ExtensionContext"), oi.ExtensionEditorContextMenu = new oi("ExtensionEditorContextMenu"), oi.GlobalActivity = new oi("GlobalActivity"), oi.CommandCenter = new oi("CommandCenter"), oi.CommandCenterCenter = new oi("CommandCenterCenter"), oi.LayoutControlMenuSubmenu = new oi("LayoutControlMenuSubmenu"), oi.LayoutControlMenu = new oi("LayoutControlMenu"), oi.MenubarMainMenu = new oi("MenubarMainMenu"), oi.MenubarAppearanceMenu = new oi("MenubarAppearanceMenu"), oi.MenubarDebugMenu = new oi("MenubarDebugMenu"), oi.MenubarEditMenu = new oi("MenubarEditMenu"), oi.MenubarCopy = new oi("MenubarCopy"), oi.MenubarFileMenu = new oi("MenubarFileMenu"), oi.MenubarGoMenu = new oi("MenubarGoMenu"), oi.MenubarHelpMenu = new oi("MenubarHelpMenu"), oi.MenubarLayoutMenu = new oi("MenubarLayoutMenu"), oi.MenubarNewBreakpointMenu = new oi("MenubarNewBreakpointMenu"), oi.PanelAlignmentMenu = new oi("PanelAlignmentMenu"), oi.PanelPositionMenu = new oi("PanelPositionMenu"), oi.MenubarPreferencesMenu = new oi("MenubarPreferencesMenu"), oi.MenubarRecentMenu = new oi("MenubarRecentMenu"), oi.MenubarSelectionMenu = new oi("MenubarSelectionMenu"), oi.MenubarShare = new oi("MenubarShare"), oi.MenubarSwitchEditorMenu = new oi("MenubarSwitchEditorMenu"), oi.MenubarSwitchGroupMenu = new oi("MenubarSwitchGroupMenu"), oi.MenubarTerminalMenu = new oi("MenubarTerminalMenu"), oi.MenubarTerminalSuggestStatusMenu = new oi("MenubarTerminalSuggestStatusMenu"), oi.MenubarViewMenu = new oi("MenubarViewMenu"), oi.MenubarHomeMenu = new oi("MenubarHomeMenu"), oi.OpenEditorsContext = new oi("OpenEditorsContext"), oi.OpenEditorsContextShare = new oi("OpenEditorsContextShare"), oi.ProblemsPanelContext = new oi("ProblemsPanelContext"), oi.SCMInputBox = new oi("SCMInputBox"), oi.SCMChangeContext = new oi("SCMChangeContext"), oi.SCMResourceContext = new oi("SCMResourceContext"), oi.SCMResourceContextShare = new oi("SCMResourceContextShare"), oi.SCMResourceFolderContext = new oi("SCMResourceFolderContext"), oi.SCMResourceGroupContext = new oi("SCMResourceGroupContext"), oi.SCMSourceControl = new oi("SCMSourceControl"), oi.SCMSourceControlInline = new oi("SCMSourceControlInline"), oi.SCMSourceControlTitle = new oi("SCMSourceControlTitle"), oi.SCMHistoryTitle = new oi("SCMHistoryTitle"), oi.SCMHistoryItemContext = new oi("SCMHistoryItemContext"), oi.SCMHistoryItemHover = new oi("SCMHistoryItemHover"), oi.SCMHistoryItemRefContext = new oi("SCMHistoryItemRefContext"), oi.SCMTitle = new oi("SCMTitle"), oi.SearchContext = new oi("SearchContext"), oi.SearchActionMenu = new oi("SearchActionContext"), oi.StatusBarWindowIndicatorMenu = new oi("StatusBarWindowIndicatorMenu"), oi.StatusBarRemoteIndicatorMenu = new oi("StatusBarRemoteIndicatorMenu"), oi.StickyScrollContext = new oi("StickyScrollContext"), oi.TestItem = new oi("TestItem"), oi.TestItemGutter = new oi("TestItemGutter"), oi.TestProfilesContext = new oi("TestProfilesContext"), oi.TestMessageContext = new oi("TestMessageContext"), oi.TestMessageContent = new oi("TestMessageContent"), oi.TestPeekElement = new oi("TestPeekElement"), oi.TestPeekTitle = new oi("TestPeekTitle"), oi.TestCallStack = new oi("TestCallStack"), oi.TestCoverageFilterItem = new oi("TestCoverageFilterItem"), oi.TouchBarContext = new oi("TouchBarContext"), oi.TitleBar = new oi("TitleBar"), oi.TitleBarContext = new oi("TitleBarContext"), oi.TitleBarTitleContext = new oi("TitleBarTitleContext"), oi.TunnelContext = new oi("TunnelContext"), oi.TunnelPrivacy = new oi("TunnelPrivacy"), oi.TunnelProtocol = new oi("TunnelProtocol"), oi.TunnelPortInline = new oi("TunnelInline"), oi.TunnelTitle = new oi("TunnelTitle"), oi.TunnelLocalAddressInline = new oi("TunnelLocalAddressInline"), oi.TunnelOriginInline = new oi("TunnelOriginInline"), oi.ViewItemContext = new oi("ViewItemContext"), oi.ViewContainerTitle = new oi("ViewContainerTitle"), oi.ViewContainerTitleContext = new oi("ViewContainerTitleContext"), oi.ViewTitle = new oi("ViewTitle"), oi.ViewTitleContext = new oi("ViewTitleContext"), oi.CommentEditorActions = new oi("CommentEditorActions"), oi.CommentThreadTitle = new oi("CommentThreadTitle"), oi.CommentThreadActions = new oi("CommentThreadActions"), oi.CommentThreadAdditionalActions = new oi("CommentThreadAdditionalActions"), oi.CommentThreadTitleContext = new oi("CommentThreadTitleContext"), oi.CommentThreadCommentContext = new oi("CommentThreadCommentContext"), oi.CommentTitle = new oi("CommentTitle"), oi.CommentActions = new oi("CommentActions"), oi.CommentsViewThreadActions = new oi("CommentsViewThreadActions"), oi.InteractiveToolbar = new oi("InteractiveToolbar"), oi.InteractiveCellTitle = new oi("InteractiveCellTitle"), oi.InteractiveCellDelete = new oi("InteractiveCellDelete"), oi.InteractiveCellExecute = new oi("InteractiveCellExecute"), oi.InteractiveInputExecute = new oi("InteractiveInputExecute"), oi.InteractiveInputConfig = new oi("InteractiveInputConfig"), oi.ReplInputExecute = new oi("ReplInputExecute"), oi.NotebookToolbar = new oi("NotebookToolbar"), oi.NotebookToolbarContext = new oi("NotebookToolbarContext"), oi.NotebookStickyScrollContext = new oi("NotebookStickyScrollContext"), oi.NotebookCellTitle = new oi("NotebookCellTitle"), oi.NotebookCellDelete = new oi("NotebookCellDelete"), oi.NotebookCellInsert = new oi("NotebookCellInsert"), oi.NotebookCellBetween = new oi("NotebookCellBetween"), oi.NotebookCellListTop = new oi("NotebookCellTop"), oi.NotebookCellExecute = new oi("NotebookCellExecute"), oi.NotebookCellExecuteGoTo = new oi("NotebookCellExecuteGoTo"), oi.NotebookCellExecutePrimary = new oi("NotebookCellExecutePrimary"), oi.NotebookDiffCellInputTitle = new oi("NotebookDiffCellInputTitle"), oi.NotebookDiffDocumentMetadata = new oi("NotebookDiffDocumentMetadata"), oi.NotebookDiffCellMetadataTitle = new oi("NotebookDiffCellMetadataTitle"), oi.NotebookDiffCellOutputsTitle = new oi("NotebookDiffCellOutputsTitle"), oi.NotebookOutputToolbar = new oi("NotebookOutputToolbar"), oi.NotebookOutlineFilter = new oi("NotebookOutlineFilter"), oi.NotebookOutlineActionMenu = new oi("NotebookOutlineActionMenu"), oi.NotebookEditorLayoutConfigure = new oi("NotebookEditorLayoutConfigure"), oi.NotebookKernelSource = new oi("NotebookKernelSource"), oi.BulkEditTitle = new oi("BulkEditTitle"), oi.BulkEditContext = new oi("BulkEditContext"), oi.TimelineItemContext = new oi("TimelineItemContext"), oi.TimelineTitle = new oi("TimelineTitle"), oi.TimelineTitleContext = new oi("TimelineTitleContext"), oi.TimelineFilterSubMenu = new oi("TimelineFilterSubMenu"), oi.AccountsContext = new oi("AccountsContext"), oi.SidebarTitle = new oi("SidebarTitle"), oi.PanelTitle = new oi("PanelTitle"), oi.AuxiliaryBarTitle = new oi("AuxiliaryBarTitle"), oi.AuxiliaryBarHeader = new oi("AuxiliaryBarHeader"), oi.TerminalInstanceContext = new oi("TerminalInstanceContext"), oi.TerminalEditorInstanceContext = new oi("TerminalEditorInstanceContext"), oi.TerminalNewDropdownContext = new oi("TerminalNewDropdownContext"), oi.TerminalTabContext = new oi("TerminalTabContext"), oi.TerminalTabEmptyAreaContext = new oi("TerminalTabEmptyAreaContext"), oi.TerminalStickyScrollContext = new oi("TerminalStickyScrollContext"), oi.WebviewContext = new oi("WebviewContext"), oi.InlineCompletionsActions = new oi("InlineCompletionsActions"), oi.InlineEditsActions = new oi("InlineEditsActions"), oi.NewFile = new oi("NewFile"), oi.MergeInput1Toolbar = new oi("MergeToolbar1Toolbar"), oi.MergeInput2Toolbar = new oi("MergeToolbar2Toolbar"), oi.MergeBaseToolbar = new oi("MergeBaseToolbar"), oi.MergeInputResultToolbar = new oi("MergeToolbarResultToolbar"), oi.InlineSuggestionToolbar = new oi("InlineSuggestionToolbar"), oi.InlineEditToolbar = new oi("InlineEditToolbar"), oi.ChatContext = new oi("ChatContext"), oi.ChatCodeBlock = new oi("ChatCodeblock"), oi.ChatCompareBlock = new oi("ChatCompareBlock"), oi.ChatMessageTitle = new oi("ChatMessageTitle"), oi.ChatMessageFooter = new oi("ChatMessageFooter"), oi.ChatExecute = new oi("ChatExecute"), oi.ChatExecuteSecondary = new oi("ChatExecuteSecondary"), oi.ChatInput = new oi("ChatInput"), oi.ChatInputSide = new oi("ChatInputSide"), oi.ChatModelPicker = new oi("ChatModelPicker"), oi.ChatEditingWidgetToolbar = new oi("ChatEditingWidgetToolbar"), oi.ChatEditingEditorContent = new oi("ChatEditingEditorContent"), oi.ChatEditingEditorHunk = new oi("ChatEditingEditorHunk"), oi.ChatEditingDeletedNotebookCell = new oi("ChatEditingDeletedNotebookCell"), oi.ChatInputAttachmentToolbar = new oi("ChatInputAttachmentToolbar"), oi.ChatEditingWidgetModifiedFilesToolbar = new oi("ChatEditingWidgetModifiedFilesToolbar"), oi.ChatInputResourceAttachmentContext = new oi("ChatInputResourceAttachmentContext"), oi.ChatInputSymbolAttachmentContext = new oi("ChatInputSymbolAttachmentContext"), oi.ChatInlineResourceAnchorContext = new oi("ChatInlineResourceAnchorContext"), oi.ChatInlineSymbolAnchorContext = new oi("ChatInlineSymbolAnchorContext"), oi.ChatEditingCodeBlockContext = new oi("ChatEditingCodeBlockContext"), oi.ChatTitleBarMenu = new oi("ChatTitleBarMenu"), oi.ChatAttachmentsContext = new oi("ChatAttachmentsContext"), oi.AccessibleView = new oi("AccessibleView"), oi.MultiDiffEditorFileToolbar = new oi("MultiDiffEditorFileToolbar"), oi.DiffEditorHunkToolbar = new oi("DiffEditorHunkToolbar"), oi.DiffEditorSelectionToolbar = new oi("DiffEditorSelectionToolbar"), Re = oi, Zl = vn("menuService"), KYr = class mIa {
    constructor(t){
        this.id = t, this.has = (n)=>n === t;
    }
    static for(t) {
        let n = this._all.get(t);
        return n || (n = new mIa(t), this._all.set(t, n)), n;
    }
    static merge(t) {
        const n = new Set;
        for (const i of t)i instanceof mIa && n.add(i.id);
        return n;
    }
}, KYr._all = new Map, Zqe = KYr, Bn = new class {
    constructor(){
        this._commands = new Map, this._menuItems = new Map, this._onDidChangeMenu = new mqr({
            merge: Zqe.merge
        }), this.onDidChangeMenu = this._onDidChangeMenu.event;
    }
    addCommand(e) {
        return this._commands.set(e.id, e), this._onDidChangeMenu.fire(Zqe.for(Re.CommandPalette)), u3(rn(()=>{
            this._commands.delete(e.id) && this._onDidChangeMenu.fire(Zqe.for(Re.CommandPalette));
        }));
    }
    getCommand(e) {
        return this._commands.get(e);
    }
    getCommands() {
        const e = new Map;
        return this._commands.forEach((t, n)=>e.set(n, t)), e;
    }
    appendMenuItem(e, t) {
        let n = this._menuItems.get(e);
        n || (n = new oA, this._menuItems.set(e, n));
        const i = n.push(t);
        return this._onDidChangeMenu.fire(Zqe.for(e)), u3(rn(()=>{
            i(), this._onDidChangeMenu.fire(Zqe.for(e));
        }));
    }
    appendMenuItems(e) {
        const t = new He;
        for (const { id: n, item: i } of e)t.add(this.appendMenuItem(n, i));
        return t;
    }
    removeMenuItem(e, t) {
        let n = this._menuItems.get(e);
        if (n) {
            let i = n.first;
            for(; i.element != null && i.element._id !== t._id;)i = i.next;
            i.element != null ? (n.remove(i), this._onDidChangeMenu.fire(Zqe.for(e))) : console.error("Could not find element in list");
        }
        return rn(()=>{
            this._onDidChangeMenu.fire(Zqe.for(e));
        });
    }
    getMenuItems(e) {
        let t;
        return this._menuItems.has(e) ? t = [
            ...this._menuItems.get(e)
        ] : t = [], e === Re.CommandPalette && this._appendImplicitItems(t), t;
    }
    _appendImplicitItems(e) {
        const t = new Set;
        for (const n of e)cwe(n) && (t.add(n.command.id), n.alt && t.add(n.alt.id));
        this._commands.forEach((n, i)=>{
            t.has(i) || e.push({
                command: n
            });
        });
    }
}, n2 = class extends JL {
    constructor(e, t, n){
        super(`submenuitem.${e.submenu.id}`, typeof e.title == "string" ? e.title : e.title.value, n, "submenu"), this.item = e, this.hideActions = t;
    }
}, rv = class {
    constructor(e, t, n, i, r, s, o){
        this.hideActions = i, this.menuKeybinding = r, this._commandService = o, this.id = e.id, this.label = rv.label(e, n), this.tooltip = (typeof e.tooltip == "string" ? e.tooltip : e.tooltip?.value) ?? "", this.enabled = !e.precondition || s.contextMatchesRules(e.precondition), this.checked = void 0;
        let a;
        if (e.toggled) {
            const c = e.toggled.condition ? e.toggled : {
                condition: e.toggled
            };
            this.checked = s.contextMatchesRules(c.condition), this.checked && c.tooltip && (this.tooltip = typeof c.tooltip == "string" ? c.tooltip : c.tooltip.value), this.checked && Ft.isThemeIcon(c.icon) && (a = c.icon), this.checked && c.title && (this.label = typeof c.title == "string" ? c.title : c.title.value);
        }
        a || (a = Ft.isThemeIcon(e.icon) ? e.icon : void 0), this.item = e, this.alt = t ? new rv(t, void 0, n, i, void 0, s, o) : void 0, this._options = n, this.class = a && Ft.asClassName(a);
    }
    static label(e, t) {
        return t?.renderShortTitle && e.shortTitle ? typeof e.shortTitle == "string" ? e.shortTitle : e.shortTitle.value : typeof e.title == "string" ? e.title : e.title.value;
    }
    run(...e) {
        let t = [];
        return this._options?.arg && (t = [
            ...t,
            this._options.arg
        ]), this._options?.shouldForwardArgs && (t = [
            ...t,
            ...e
        ]), this._commandService.executeCommand(this.id, ...t);
    }
}, rv = ie([
    C(5, xn),
    C(6, $n)
], rv), pt = class {
    constructor(e){
        this.desc = e;
    }
};

}
