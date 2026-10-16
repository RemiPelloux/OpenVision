import { Gt, Nt, Pn, Qe, m4, nCo } from "./Iwo.js";
import { jn } from "./SZu.js";
import { az, vu } from "./actions.js";
import { nr, rs } from "./commands.js";
import { Hi, Rr } from "./contextkey.js";
import { It } from "./instantiation.js";
import { xT } from "./keybindingsRegistry.js";
import { a7, tL } from "./linkedList.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ttt } from "./ze.js";
var zi, Ft, Db, q7o, Pbt, ji, kQ, n6, sn;
export { Db, Ft, Pbt, ji, kQ, n6, q7o, sn, zi };
var __wakaru_es_initialized = false;
export function es() {
if (__wakaru_es_initialized) return;
__wakaru_es_initialized = true;
"use strict";
E(), vu(), Gt(), Qe(), a7(), ta(), rs(), Hi(), It(), xT(), zi = class _Zi {
    static for(e) {
        return _Zi._instances.get(e) ?? new _Zi(e);
    }
    constructor(e){
        if (_Zi._instances.has(e)) throw new TypeError(`MenuId with identifier '${e}' already exists. Use MenuId.for(ident) or a unique identifier`);
        _Zi._instances.set(e, this), this.id = e;
    }
}, zi._instances = new Map, zi.CommandPalette = new zi("CommandPalette"), zi.DebugBreakpointsContext = new zi("DebugBreakpointsContext"), zi.DebugCallStackContext = new zi("DebugCallStackContext"), zi.DebugConsoleContext = new zi("DebugConsoleContext"), zi.DebugVariablesContext = new zi("DebugVariablesContext"), zi.NotebookVariablesContext = new zi("NotebookVariablesContext"), zi.DebugHoverContext = new zi("DebugHoverContext"), zi.DebugWatchContext = new zi("DebugWatchContext"), zi.DebugToolBar = new zi("DebugToolBar"), zi.DebugToolBarStop = new zi("DebugToolBarStop"), zi.DebugCallStackToolbar = new zi("DebugCallStackToolbar"), zi.DebugCreateConfiguration = new zi("DebugCreateConfiguration"), zi.EditorContext = new zi("EditorContext"), zi.SimpleEditorContext = new zi("SimpleEditorContext"), zi.EditorContent = new zi("EditorContent"), zi.EditorLineNumberContext = new zi("EditorLineNumberContext"), zi.EditorContextCopy = new zi("EditorContextCopy"), zi.EditorContextPeek = new zi("EditorContextPeek"), zi.EditorContextShare = new zi("EditorContextShare"), zi.EditorContextCursorBlame = new zi("EditorContextCursorBlame"), zi.EditorTitle = new zi("EditorTitle"), zi.EditorTitleRun = new zi("EditorTitleRun"), zi.EditorTitleContext = new zi("EditorTitleContext"), zi.EditorTitleContextShare = new zi("EditorTitleContextShare"), zi.EmptyEditorGroup = new zi("EmptyEditorGroup"), zi.EmptyEditorGroupContext = new zi("EmptyEditorGroupContext"), zi.EditorTabsBarContext = new zi("EditorTabsBarContext"), zi.EditorTabsBarShowTabsSubmenu = new zi("EditorTabsBarShowTabsSubmenu"), zi.EditorTabsBarShowTabsZenModeSubmenu = new zi("EditorTabsBarShowTabsZenModeSubmenu"), zi.EditorActionsPositionSubmenu = new zi("EditorActionsPositionSubmenu"), zi.ExplorerContext = new zi("ExplorerContext"), zi.ExplorerContextShare = new zi("ExplorerContextShare"), zi.ExtensionContext = new zi("ExtensionContext"), zi.ExtensionEditorContextMenu = new zi("ExtensionEditorContextMenu"), zi.GlobalActivity = new zi("GlobalActivity"), zi.CommandCenter = new zi("CommandCenter"), zi.CommandCenterCenter = new zi("CommandCenterCenter"), zi.LayoutControlMenuSubmenu = new zi("LayoutControlMenuSubmenu"), zi.LayoutControlMenu = new zi("LayoutControlMenu"), zi.MenubarMainMenu = new zi("MenubarMainMenu"), zi.MenubarAppearanceMenu = new zi("MenubarAppearanceMenu"), zi.MenubarDebugMenu = new zi("MenubarDebugMenu"), zi.MenubarEditMenu = new zi("MenubarEditMenu"), zi.MenubarCopy = new zi("MenubarCopy"), zi.MenubarFileMenu = new zi("MenubarFileMenu"), zi.MenubarGoMenu = new zi("MenubarGoMenu"), zi.MenubarHelpMenu = new zi("MenubarHelpMenu"), zi.MenubarLayoutMenu = new zi("MenubarLayoutMenu"), zi.MenubarNewBreakpointMenu = new zi("MenubarNewBreakpointMenu"), zi.PanelAlignmentMenu = new zi("PanelAlignmentMenu"), zi.PanelPositionMenu = new zi("PanelPositionMenu"), zi.MenubarPreferencesMenu = new zi("MenubarPreferencesMenu"), zi.MenubarRecentMenu = new zi("MenubarRecentMenu"), zi.MenubarSelectionMenu = new zi("MenubarSelectionMenu"), zi.MenubarShare = new zi("MenubarShare"), zi.MenubarSwitchEditorMenu = new zi("MenubarSwitchEditorMenu"), zi.MenubarSwitchGroupMenu = new zi("MenubarSwitchGroupMenu"), zi.MenubarTerminalMenu = new zi("MenubarTerminalMenu"), zi.MenubarTerminalSuggestStatusMenu = new zi("MenubarTerminalSuggestStatusMenu"), zi.MenubarViewMenu = new zi("MenubarViewMenu"), zi.MenubarHomeMenu = new zi("MenubarHomeMenu"), zi.OpenEditorsContext = new zi("OpenEditorsContext"), zi.OpenEditorsContextShare = new zi("OpenEditorsContextShare"), zi.ProblemsPanelContext = new zi("ProblemsPanelContext"), zi.SCMInputBox = new zi("SCMInputBox"), zi.SCMChangeContext = new zi("SCMChangeContext"), zi.SCMResourceContext = new zi("SCMResourceContext"), zi.SCMResourceContextShare = new zi("SCMResourceContextShare"), zi.SCMResourceFolderContext = new zi("SCMResourceFolderContext"), zi.SCMResourceGroupContext = new zi("SCMResourceGroupContext"), zi.SCMSourceControl = new zi("SCMSourceControl"), zi.SCMSourceControlInline = new zi("SCMSourceControlInline"), zi.SCMSourceControlTitle = new zi("SCMSourceControlTitle"), zi.SCMHistoryTitle = new zi("SCMHistoryTitle"), zi.SCMHistoryItemContext = new zi("SCMHistoryItemContext"), zi.SCMHistoryItemHover = new zi("SCMHistoryItemHover"), zi.SCMHistoryItemRefContext = new zi("SCMHistoryItemRefContext"), zi.SCMTitle = new zi("SCMTitle"), zi.SearchContext = new zi("SearchContext"), zi.SearchActionMenu = new zi("SearchActionContext"), zi.StatusBarWindowIndicatorMenu = new zi("StatusBarWindowIndicatorMenu"), zi.StatusBarRemoteIndicatorMenu = new zi("StatusBarRemoteIndicatorMenu"), zi.StickyScrollContext = new zi("StickyScrollContext"), zi.TestItem = new zi("TestItem"), zi.TestItemGutter = new zi("TestItemGutter"), zi.TestProfilesContext = new zi("TestProfilesContext"), zi.TestMessageContext = new zi("TestMessageContext"), zi.TestMessageContent = new zi("TestMessageContent"), zi.TestPeekElement = new zi("TestPeekElement"), zi.TestPeekTitle = new zi("TestPeekTitle"), zi.TestCallStack = new zi("TestCallStack"), zi.TestCoverageFilterItem = new zi("TestCoverageFilterItem"), zi.TouchBarContext = new zi("TouchBarContext"), zi.TitleBar = new zi("TitleBar"), zi.TitleBarContext = new zi("TitleBarContext"), zi.TitleBarTitleContext = new zi("TitleBarTitleContext"), zi.TunnelContext = new zi("TunnelContext"), zi.TunnelPrivacy = new zi("TunnelPrivacy"), zi.TunnelProtocol = new zi("TunnelProtocol"), zi.TunnelPortInline = new zi("TunnelInline"), zi.TunnelTitle = new zi("TunnelTitle"), zi.TunnelLocalAddressInline = new zi("TunnelLocalAddressInline"), zi.TunnelOriginInline = new zi("TunnelOriginInline"), zi.ViewItemContext = new zi("ViewItemContext"), zi.ViewContainerTitle = new zi("ViewContainerTitle"), zi.ViewContainerTitleContext = new zi("ViewContainerTitleContext"), zi.ViewTitle = new zi("ViewTitle"), zi.ViewTitleContext = new zi("ViewTitleContext"), zi.CommentEditorActions = new zi("CommentEditorActions"), zi.CommentThreadTitle = new zi("CommentThreadTitle"), zi.CommentThreadActions = new zi("CommentThreadActions"), zi.CommentThreadAdditionalActions = new zi("CommentThreadAdditionalActions"), zi.CommentThreadTitleContext = new zi("CommentThreadTitleContext"), zi.CommentThreadCommentContext = new zi("CommentThreadCommentContext"), zi.CommentTitle = new zi("CommentTitle"), zi.CommentActions = new zi("CommentActions"), zi.CommentsViewThreadActions = new zi("CommentsViewThreadActions"), zi.InteractiveToolbar = new zi("InteractiveToolbar"), zi.InteractiveCellTitle = new zi("InteractiveCellTitle"), zi.InteractiveCellDelete = new zi("InteractiveCellDelete"), zi.InteractiveCellExecute = new zi("InteractiveCellExecute"), zi.InteractiveInputExecute = new zi("InteractiveInputExecute"), zi.InteractiveInputConfig = new zi("InteractiveInputConfig"), zi.ReplInputExecute = new zi("ReplInputExecute"), zi.NotebookToolbar = new zi("NotebookToolbar"), zi.NotebookToolbarContext = new zi("NotebookToolbarContext"), zi.NotebookStickyScrollContext = new zi("NotebookStickyScrollContext"), zi.NotebookCellTitle = new zi("NotebookCellTitle"), zi.NotebookCellDelete = new zi("NotebookCellDelete"), zi.NotebookCellInsert = new zi("NotebookCellInsert"), zi.NotebookCellBetween = new zi("NotebookCellBetween"), zi.NotebookCellListTop = new zi("NotebookCellTop"), zi.NotebookCellExecute = new zi("NotebookCellExecute"), zi.NotebookCellExecuteGoTo = new zi("NotebookCellExecuteGoTo"), zi.NotebookCellExecutePrimary = new zi("NotebookCellExecutePrimary"), zi.NotebookDiffCellInputTitle = new zi("NotebookDiffCellInputTitle"), zi.NotebookDiffDocumentMetadata = new zi("NotebookDiffDocumentMetadata"), zi.NotebookDiffCellMetadataTitle = new zi("NotebookDiffCellMetadataTitle"), zi.NotebookDiffCellOutputsTitle = new zi("NotebookDiffCellOutputsTitle"), zi.NotebookOutputToolbar = new zi("NotebookOutputToolbar"), zi.NotebookOutlineFilter = new zi("NotebookOutlineFilter"), zi.NotebookOutlineActionMenu = new zi("NotebookOutlineActionMenu"), zi.NotebookEditorLayoutConfigure = new zi("NotebookEditorLayoutConfigure"), zi.NotebookKernelSource = new zi("NotebookKernelSource"), zi.BulkEditTitle = new zi("BulkEditTitle"), zi.BulkEditContext = new zi("BulkEditContext"), zi.TimelineItemContext = new zi("TimelineItemContext"), zi.TimelineTitle = new zi("TimelineTitle"), zi.TimelineTitleContext = new zi("TimelineTitleContext"), zi.TimelineFilterSubMenu = new zi("TimelineFilterSubMenu"), zi.AccountsContext = new zi("AccountsContext"), zi.SidebarTitle = new zi("SidebarTitle"), zi.PanelTitle = new zi("PanelTitle"), zi.AuxiliaryBarTitle = new zi("AuxiliaryBarTitle"), zi.AuxiliaryBarHeader = new zi("AuxiliaryBarHeader"), zi.TerminalInstanceContext = new zi("TerminalInstanceContext"), zi.TerminalEditorInstanceContext = new zi("TerminalEditorInstanceContext"), zi.TerminalNewDropdownContext = new zi("TerminalNewDropdownContext"), zi.TerminalTabContext = new zi("TerminalTabContext"), zi.TerminalTabEmptyAreaContext = new zi("TerminalTabEmptyAreaContext"), zi.TerminalStickyScrollContext = new zi("TerminalStickyScrollContext"), zi.WebviewContext = new zi("WebviewContext"), zi.InlineCompletionsActions = new zi("InlineCompletionsActions"), zi.InlineEditsActions = new zi("InlineEditsActions"), zi.NewFile = new zi("NewFile"), zi.MergeInput1Toolbar = new zi("MergeToolbar1Toolbar"), zi.MergeInput2Toolbar = new zi("MergeToolbar2Toolbar"), zi.MergeBaseToolbar = new zi("MergeBaseToolbar"), zi.MergeInputResultToolbar = new zi("MergeToolbarResultToolbar"), zi.InlineSuggestionToolbar = new zi("InlineSuggestionToolbar"), zi.InlineEditToolbar = new zi("InlineEditToolbar"), zi.ChatContext = new zi("ChatContext"), zi.ChatCodeBlock = new zi("ChatCodeblock"), zi.ChatCompareBlock = new zi("ChatCompareBlock"), zi.ChatMessageTitle = new zi("ChatMessageTitle"), zi.ChatMessageFooter = new zi("ChatMessageFooter"), zi.ChatExecute = new zi("ChatExecute"), zi.ChatExecuteSecondary = new zi("ChatExecuteSecondary"), zi.ChatInput = new zi("ChatInput"), zi.ChatInputSide = new zi("ChatInputSide"), zi.ChatModelPicker = new zi("ChatModelPicker"), zi.ChatEditingWidgetToolbar = new zi("ChatEditingWidgetToolbar"), zi.ChatEditingEditorContent = new zi("ChatEditingEditorContent"), zi.ChatEditingEditorHunk = new zi("ChatEditingEditorHunk"), zi.ChatEditingDeletedNotebookCell = new zi("ChatEditingDeletedNotebookCell"), zi.ChatInputAttachmentToolbar = new zi("ChatInputAttachmentToolbar"), zi.ChatEditingWidgetModifiedFilesToolbar = new zi("ChatEditingWidgetModifiedFilesToolbar"), zi.ChatInputResourceAttachmentContext = new zi("ChatInputResourceAttachmentContext"), zi.ChatInputSymbolAttachmentContext = new zi("ChatInputSymbolAttachmentContext"), zi.ChatInlineResourceAnchorContext = new zi("ChatInlineResourceAnchorContext"), zi.ChatInlineSymbolAnchorContext = new zi("ChatInlineSymbolAnchorContext"), zi.ChatEditingCodeBlockContext = new zi("ChatEditingCodeBlockContext"), zi.ChatTitleBarMenu = new zi("ChatTitleBarMenu"), zi.ChatAttachmentsContext = new zi("ChatAttachmentsContext"), zi.AccessibleView = new zi("AccessibleView"), zi.MultiDiffEditorFileToolbar = new zi("MultiDiffEditorFileToolbar"), zi.DiffEditorHunkToolbar = new zi("DiffEditorHunkToolbar"), zi.DiffEditorSelectionToolbar = new zi("DiffEditorSelectionToolbar"), Ft = zi, Db = jn("menuService"), q7o = class QQc {
    constructor(e){
        this.id = e, this.has = (n)=>n === e;
    }
    static for(e) {
        let n = this._all.get(e);
        return n || (n = new QQc(e), this._all.set(e, n)), n;
    }
    static merge(e) {
        const n = new Set;
        for (const i of e)i instanceof QQc && n.add(i.id);
        return n;
    }
}, q7o._all = new Map, Pbt = q7o, ji = new class {
    constructor(){
        this._commands = new Map, this._menuItems = new Map, this._onDidChangeMenu = new nCo({
            merge: Pbt.merge
        }), this.onDidChangeMenu = this._onDidChangeMenu.event;
    }
    addCommand(t) {
        return this._commands.set(t.id, t), this._onDidChangeMenu.fire(Pbt.for(Ft.CommandPalette)), m4(Pn(()=>{
            this._commands.delete(t.id) && this._onDidChangeMenu.fire(Pbt.for(Ft.CommandPalette));
        }));
    }
    getCommand(t) {
        return this._commands.get(t);
    }
    getCommands() {
        const t = new Map;
        return this._commands.forEach((e, n)=>t.set(n, e)), t;
    }
    appendMenuItem(t, e) {
        let n = this._menuItems.get(t);
        n || (n = new tL, this._menuItems.set(t, n));
        const i = n.push(e);
        return this._onDidChangeMenu.fire(Pbt.for(t)), m4(Pn(()=>{
            i(), this._onDidChangeMenu.fire(Pbt.for(t));
        }));
    }
    appendMenuItems(t) {
        const e = new Nt;
        for (const { id: n, item: i } of t)e.add(this.appendMenuItem(n, i));
        return e;
    }
    removeMenuItem(t, e) {
        let n = this._menuItems.get(t);
        if (n) {
            let i = n.first;
            for(; i.element != null && i.element._id !== e._id;)i = i.next;
            i.element != null ? (n.remove(i), this._onDidChangeMenu.fire(Pbt.for(t))) : console.error("Could not find element in list");
        }
        return Pn(()=>{
            this._onDidChangeMenu.fire(Pbt.for(t));
        });
    }
    getMenuItems(t) {
        let e;
        return this._menuItems.has(t) ? e = [
            ...this._menuItems.get(t)
        ] : e = [], t === Ft.CommandPalette && this._appendImplicitItems(e), e;
    }
    _appendImplicitItems(t) {
        const e = new Set;
        for (const n of t)Ttt(n) && (e.add(n.command.id), n.alt && e.add(n.alt.id));
        this._commands.forEach((n, i)=>{
            e.has(i) || t.push({
                command: n
            });
        });
    }
}, kQ = class extends az {
    constructor(t, e, n){
        super(`submenuitem.${t.submenu.id}`, typeof t.title == "string" ? t.title : t.title.value, n, "submenu"), this.item = t, this.hideActions = e;
    }
}, n6 = class {
    constructor(t, e, n, i, r, s, o){
        this.hideActions = i, this.menuKeybinding = r, this._commandService = o, this.id = t.id, this.label = n6.label(t, n), this.tooltip = (typeof t.tooltip == "string" ? t.tooltip : t.tooltip?.value) ?? "", this.enabled = !t.precondition || s.contextMatchesRules(t.precondition), this.checked = void 0;
        let a;
        if (t.toggled) {
            const l = t.toggled.condition ? t.toggled : {
                condition: t.toggled
            };
            this.checked = s.contextMatchesRules(l.condition), this.checked && l.tooltip && (this.tooltip = typeof l.tooltip == "string" ? l.tooltip : l.tooltip.value), this.checked && Gn.isThemeIcon(l.icon) && (a = l.icon), this.checked && l.title && (this.label = typeof l.title == "string" ? l.title : l.title.value);
        }
        a || (a = Gn.isThemeIcon(t.icon) ? t.icon : void 0), this.item = t, this.alt = e ? new n6(e, void 0, n, i, void 0, s, o) : void 0, this._options = n, this.class = a && Gn.asClassName(a);
    }
    static label(t, e) {
        return e?.renderShortTitle && t.shortTitle ? typeof t.shortTitle == "string" ? t.shortTitle : t.shortTitle.value : typeof t.title == "string" ? t.title : t.title.value;
    }
    run(...t) {
        let e = [];
        return this._options?.arg && (e = [
            ...e,
            this._options.arg
        ]), this._options?.shouldForwardArgs && (e = [
            ...e,
            ...t
        ]), this._commandService.executeCommand(this.id, ...e);
    }
}, n6 = Re([
    F(5, Rr),
    F(6, nr)
], n6), sn = class {
    constructor(t){
        this.desc = t;
    }
};

}
