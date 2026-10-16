import { wut } from "./Asv.js";
import { QMv } from "./BPv.js";
import { OrC, grC, mrC, zrC } from "./Ejv.js";
import { ri } from "./LYd.js";
import { bl } from "./Ycg.js";
import { Ss } from "./aiMiscServices.js";
import { og } from "./codeEditorService.js";
import { mv } from "./editor-panel-context.react.js";
import { frC } from "./file-tab-agent-store-tree.react.js";
import { QN0 } from "./file-tab-sidebar-auto-collapse.js";
import { eDv } from "./file-tree-panel.react.js";
import { XTe } from "./glass-active-workspace-service.js";
import { a5 } from "./glass-dialog-service.js";
import { Dme } from "./glass-editor-service.types.js";
import { hv } from "./glass-file-service.js";
import { gJt } from "./glass-file-tree-service.js";
import { hre } from "./glass-modal-provider.react.js";
import { zc } from "./glass-notification-service.js";
import { DLi } from "./glass-open-resource.js";
import { jDi } from "./glass-references-service.js";
import { cD } from "./glass-tab-persistence-service.js";
import { mDv } from "./glass-tab-persistence-service.types.js";
import { iEe } from "./glass-terminal-service-proxy.js";
import { xd } from "./glass-workspace-context-service.js";
import { Lxt } from "./glass-workspace-search-service.js";
import { OG } from "./glass-workspaces-management-service.js";
import { X2v } from "./home-file-tree-workspace.js";
import { Mt } from "./index_197.js";
import { Ki } from "./network.js";
import { b4 } from "./numbers.js";
import { gCs } from "./openFileInStableTabRouting.js";
import { Cut } from "./resize-handle.react.js";
import { dv } from "./storage-keys.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { r1 } from "./use-command-bridge.react.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { KMv } from "./use-file-tree-load-state.react.js";
import { z6 } from "./use-glass-persistent-state.react.js";
import { kut } from "./use-horizontal-resize.react.js";
import { pRt } from "./use-machine-reachability.react.js";
import { hDv } from "./use-open-file-in-stable-tab-services.react.js";
import { In } from "./use-service.react_2.js";
import { nL0 } from "./use-workspace-search.react.js";
import { cm } from "./workspace-helpers.js";
import { VrC } from "./workspace-references-panel.react.js";
import { iHv } from "./workspace-search-panel.react.js";
import { Y$v } from "./workspace-search-replace-utils.js";
import { oHv } from "./workspace-search-seed.js";
import { memo as QrC } from "./react-runtime/react/esm-index-production.js";
import { jsx as _8e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { jsxs as pNs } from "./react-runtime/react/esm-jsx-runtime-production.js";
var mNs, gNs, Klc, Ylc;
export { Klc, Ylc, gNs, mNs };
var __wakaru_dHv_initialized = false;
export function dHv() {
if (__wakaru_dHv_initialized) return;
__wakaru_dHv_initialized = true;
"use strict";
E(), iEe(), a5(), OG(), Mt(), QN0(), Ki(), b4(), fn(), og(), hv(), xd(), Ss(), dv(), gCs(), hDv(), r1(), Ru(), z6(), kut(), In(), nL0(), XTe(), Dme(), gJt(), zc(), jDi(), cD(), mDv(), Lxt(), DLi(), cm(), hre(), Cut(), mv(), pRt(), frC(), eDv(), X2v(), KMv(), VrC(), iHv(), Y$v(), oHv(), mNs = new WeakMap, gNs = new Set, Klc = QrC(function({ state: e }) {
    const n = bl("project_agent_team_store"), i = e.currentFilePath === void 0 ? void 0 : mrC({
        filePath: e.currentFilePath,
        includeTeam: n,
        panelAgentId: e.editorPanelAgentId
    });
    return pNs("div", {
        "data-component": "file-tab-sidebar",
        "data-side": "right",
        "data-resizing": e.isSidebarResizing || void 0,
        ref: e.sidebarPanelRef,
        className: "glass-78zum5 glass-dt5ytf glass-16grhtn glass-s83m0k glass-euugli glass-1n2onr6 glass-e0pwq glass-19ypqd9 glass-1arpupx glass-jbqb8w glass-b3r6kr glass-7kn1wf glass-1iy912z",
        style: {
            width: e.resizedSidebarWidth
        },
        children: [
            _8e("div", {
                className: ri("file-tab-tree-scroll", {
                    0: {
                        className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-euugli"
                    },
                    1: {
                        className: "glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-euugli glass-1s85apg"
                    }
                }[(e.sidebarMode !== "search") << 0].className),
                "data-hidden": e.sidebarMode !== "search" || void 0,
                ref: e.sidebarScrollRef,
                children: _8e(OrC, {
                    activeFilePath: e.currentFilePath,
                    commandBridgeAgentId: e.editorPanelAgentId,
                    collapsedFiles: e.collapsedFiles,
                    dismissedFiles: e.dismissedFiles,
                    dismissedMatches: e.dismissedMatches,
                    excludePattern: e.excludePattern,
                    fileTreeLoadState: e.fileTreeLoadState,
                    focusVersion: e.searchFocusVersion,
                    includePattern: e.includePattern,
                    isReplaceExpanded: e.isReplaceExpanded,
                    isActive: e.sidebarMode === "search",
                    onClearResults: e.handleClearSearchResults,
                    onCollapsedFilesChange: e.handleCollapsedFilesChange,
                    onDismissedFilesChange: e.handleDismissedFilesChange,
                    onDismissedMatchesChange: e.handleDismissedMatchesChange,
                    onExcludePatternChange: e.handleExcludePatternChange,
                    onIncludePatternChange: e.handleIncludePatternChange,
                    onInputElementChange: e.handleSearchInputElementChange,
                    onOptionsChange: e.handleSearchOptionsChange,
                    onQueryChange: e.handleSearchQueryChange,
                    onSearchSubmit: e.handleSearchSubmit,
                    onShowNextSearchQuery: e.handleShowNextSearchQuery,
                    onShowPreviousSearchQuery: e.handleShowPreviousSearchQuery,
                    onReplace: e.handleReplace,
                    onReplaceExpandedChange: e.handleReplaceExpandedChange,
                    onReplaceValueChange: e.handleReplaceValueChange,
                    onPreserveCaseChange: e.handlePreserveCaseChange,
                    onSearchAllFiles: e.handleSearchAllFiles,
                    onSelectMatch: e.handleSearchMatchSelect,
                    options: e.searchOptions,
                    preserveCase: e.preserveCase,
                    query: e.searchQuery,
                    replaceValue: e.replaceValue,
                    snapshot: e.searchSnapshot
                })
            }),
            _8e("div", {
                className: ri("file-tab-tree-scroll", {
                    0: {
                        className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-euugli"
                    },
                    1: {
                        className: "glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-euugli glass-1s85apg"
                    }
                }[(e.sidebarMode !== "files") << 0].className),
                "data-hidden": e.sidebarMode !== "files" || void 0,
                children: _8e("div", {
                    className: "glass-78zum5 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j",
                    children: i !== void 0 ? _8e(grC, {
                        active: e.sidebarMode === "files",
                        revealPath: i
                    }) : _8e(QMv, {
                        acceptPaste: e.sidebarMode === "files",
                        controllerKey: e.fileTreeControllerKey,
                        currentFilePath: e.currentFilePath,
                        onOpenFile: e.handleOpenFile,
                        onSelectFile: e.handlePreviewFile,
                        ref: e.sidebarFileTreeRef
                    })
                })
            }),
            _8e("div", {
                className: ri("file-tab-tree-scroll", {
                    0: {
                        className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-euugli"
                    },
                    1: {
                        className: "glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-euugli glass-1s85apg"
                    }
                }[(e.sidebarMode !== "references") << 0].className),
                "data-hidden": e.sidebarMode !== "references" || void 0,
                children: _8e(zrC, {
                    activeFilePath: e.currentFilePath,
                    onClear: e.handleClearReferences,
                    onOpenReference: e.handleOpenSymbolReference
                })
            }),
            _8e(wut, {
                hoverTint: !1,
                isResizing: e.isSidebarResizing,
                label: "Resize sidebar",
                onMouseDown: e.handleSidebarResizeMouseDown,
                position: "left",
                width: e.resizedSidebarWidth
            })
        ]
    });
}), Ylc = {};

}
