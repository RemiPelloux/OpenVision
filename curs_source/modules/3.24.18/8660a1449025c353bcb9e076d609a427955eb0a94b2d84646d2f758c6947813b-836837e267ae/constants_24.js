import { Hi, cn } from "./contextkey.js";
import { E } from "./tslib.es6.js";
var Xie, hI;
export { Xie, hI };
var __wakaru_GNn_initialized = false;
export function GNn() {
if (__wakaru_GNn_initialized) return;
__wakaru_GNn_initialized = true;
"use strict";
E(), Hi(), Xie = ((t)=>(t.FindInFilesActionId = "workbench.action.findInFiles", t.FocusActiveEditorCommandId = "search.action.focusActiveEditor", t.FocusSearchFromResults = "search.action.focusSearchFromResults", t.OpenMatch = "search.action.openResult", t.OpenMatchToSide = "search.action.openResultToSide", t.RemoveActionId = "search.action.remove", t.CopyPathCommandId = "search.action.copyPath", t.CopyMatchCommandId = "search.action.copyMatch", t.CopyAllCommandId = "search.action.copyAll", t.OpenInEditorCommandId = "search.action.openInEditor", t.ClearSearchHistoryCommandId = "search.action.clearHistory", t.FocusSearchListCommandID = "search.action.focusSearchList", t.ReplaceActionId = "search.action.replace", t.ReplaceAllInFileActionId = "search.action.replaceAllInFile", t.ReplaceAllInFolderActionId = "search.action.replaceAllInFolder", t.CloseReplaceWidgetActionId = "closeReplaceInFilesWidget", t.ToggleCaseSensitiveCommandId = "toggleSearchCaseSensitive", t.ToggleWholeWordCommandId = "toggleSearchWholeWord", t.ToggleRegexCommandId = "toggleSearchRegex", t.TogglePreserveCaseId = "toggleSearchPreserveCase", t.AddCursorsAtSearchResults = "addCursorsAtSearchResults", t.RevealInSideBarForSearchResults = "search.action.revealInSideBar", t.ReplaceInFilesActionId = "workbench.action.replaceInFiles", t.ShowAllSymbolsActionId = "workbench.action.showAllSymbols", t.QuickTextSearchActionId = "workbench.action.quickTextSearch", t.CancelSearchActionId = "search.action.cancel", t.RefreshSearchResultsActionId = "search.action.refreshSearchResults", t.FocusNextSearchResultActionId = "search.action.focusNextSearchResult", t.FocusPreviousSearchResultActionId = "search.action.focusPreviousSearchResult", t.ToggleSearchOnTypeActionId = "workbench.action.toggleSearchOnType", t.CollapseSearchResultsActionId = "search.action.collapseSearchResults", t.ExpandSearchResultsActionId = "search.action.expandSearchResults", t.ExpandRecursivelyCommandId = "search.action.expandRecursively", t.ClearSearchResultsActionId = "search.action.clearSearchResults", t.GetSearchResultsActionId = "search.action.getSearchResults", t.ViewAsTreeActionId = "search.action.viewAsTree", t.ViewAsListActionId = "search.action.viewAsList", t.ToggleQueryDetailsActionId = "workbench.action.search.toggleQueryDetails", t.ExcludeFolderFromSearchId = "search.action.excludeFromSearch", t.FocusNextInputActionId = "search.focus.nextInputBox", t.FocusPreviousInputActionId = "search.focus.previousInputBox", t.RestrictSearchToFolderId = "search.action.restrictSearchToFolder", t.FindInFolderId = "filesExplorer.findInFolder", t.FindInWorkspaceId = "filesExplorer.findInWorkspace", t))(Xie || {}), hI = {
    SearchViewVisibleKey: new cn("searchViewletVisible", !0),
    SearchViewFocusedKey: new cn("searchViewletFocus", !1),
    SearchResultListFocusedKey: new cn("searchResultListFocused", !0),
    InputBoxFocusedKey: new cn("inputBoxFocus", !1),
    SearchInputBoxFocusedKey: new cn("searchInputBoxFocus", !1),
    ReplaceInputBoxFocusedKey: new cn("replaceInputBoxFocus", !1),
    PatternIncludesFocusedKey: new cn("patternIncludesInputBoxFocus", !1),
    PatternExcludesFocusedKey: new cn("patternExcludesInputBoxFocus", !1),
    ReplaceActiveKey: new cn("replaceActive", !1),
    HasSearchResults: new cn("hasSearchResult", !1),
    FirstMatchFocusKey: new cn("firstMatchFocus", !1),
    FileMatchOrMatchFocusKey: new cn("fileMatchOrMatchFocus", !1),
    FileMatchOrFolderMatchFocusKey: new cn("fileMatchOrFolderMatchFocus", !1),
    FileMatchOrFolderMatchWithResourceFocusKey: new cn("fileMatchOrFolderMatchWithResourceFocus", !1),
    FileFocusKey: new cn("fileMatchFocus", !1),
    FolderFocusKey: new cn("folderMatchFocus", !1),
    ResourceFolderFocusKey: new cn("folderMatchWithResourceFocus", !1),
    IsEditableItemKey: new cn("isEditableItem", !0),
    MatchFocusKey: new cn("matchFocus", !1),
    SearchResultHeaderFocused: new cn("searchResultHeaderFocused", !1),
    ViewHasSearchPatternKey: new cn("viewHasSearchPattern", !1),
    ViewHasReplacePatternKey: new cn("viewHasReplacePattern", !1),
    ViewHasFilePatternKey: new cn("viewHasFilePattern", !1),
    ViewHasSomeCollapsibleKey: new cn("viewHasSomeCollapsibleResult", !1),
    InTreeViewKey: new cn("inTreeView", !1)
};

}
