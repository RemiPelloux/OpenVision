import { D, Di, a_ } from "./Iwo.js";
import { jn } from "./SZu.js";
import { Ccd, Ecd, I_r, Icd, Tcd, pa, xcd } from "./constants_8.js";
import { It } from "./instantiation.js";
import { Bt } from "./nls.js";
import { Cyg, Nat } from "./terminalContribExports.js";
import { E } from "./tslib.es6.js";
var PA, Tyg, Lat, Mdl, Eyg, Ddl, zas, Vas, Iyg, xyg, Ndl, JCe, Zze, Ayg, Ldl, Ryg;
export { Ayg, Ddl, Eyg, Iyg, JCe, Lat, Ldl, Mdl, Ndl, PA, Ryg, Tyg, Vas, Zze, xyg, zas };
var __wakaru_bR_initialized = false;
export function bR() {
if (__wakaru_bR_initialized) return;
__wakaru_bR_initialized = true;
"use strict";
E(), pa(), Di(), Bt(), It(), Nat(), PA = "terminal", Tyg = [
    "workbench.action.terminal.toggleTerminal",
    "workbench.action.terminal.new",
    "workbench.action.togglePanel",
    "workbench.action.terminal.focus"
], Lat = "terminal.integrated", Mdl = 0, Eyg = -5, Ddl = a_ ? 1.1 : 1, zas = 1, Vas = 1e3, Iyg = "normal", xyg = "bold", Ndl = [
    "normal",
    "bold",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
], JCe = jn("terminalProfileResolverService"), Zze = jn("terminalProfileService"), Ayg = (t)=>typeof t.write == "function", Ldl = [
    "workbench.action.terminal.clearSelection",
    "workbench.action.terminal.clear",
    "workbench.action.terminal.copyAndClearSelection",
    "workbench.action.terminal.copySelection",
    "workbench.action.terminal.copySelectionAsHtml",
    "workbench.action.terminal.copyLastCommand",
    "workbench.action.terminal.copyLastCommandOutput",
    "workbench.action.terminal.copyLastCommandAndLastCommandOutput",
    "workbench.action.terminal.deleteToLineStart",
    "workbench.action.terminal.deleteWordLeft",
    "workbench.action.terminal.deleteWordRight",
    "workbench.action.terminal.focusNextPane",
    "workbench.action.terminal.focusNext",
    "workbench.action.terminal.focusPreviousPane",
    "workbench.action.terminal.focusPrevious",
    "workbench.action.terminal.focus",
    "workbench.action.terminal.sizeToContentWidth",
    "workbench.action.terminal.kill",
    "workbench.action.terminal.killEditor",
    "workbench.action.terminal.moveToEditor",
    "workbench.action.terminal.moveToLineEnd",
    "workbench.action.terminal.moveToLineStart",
    "workbench.action.terminal.moveToTerminalPanel",
    "workbench.action.terminal.newInActiveWorkspace",
    "workbench.action.terminal.new",
    "workbench.action.terminal.paste",
    "workbench.action.terminal.pasteSelection",
    "workbench.action.terminal.resizePaneDown",
    "workbench.action.terminal.resizePaneLeft",
    "workbench.action.terminal.resizePaneRight",
    "workbench.action.terminal.resizePaneUp",
    "workbench.action.terminal.runActiveFile",
    "workbench.action.terminal.runSelectedText",
    "workbench.action.terminal.scrollDown",
    "workbench.action.terminal.scrollDownPage",
    "workbench.action.terminal.scrollToBottom",
    "workbench.action.terminal.scrollToNextCommand",
    "workbench.action.terminal.scrollToPreviousCommand",
    "workbench.action.terminal.scrollToTop",
    "workbench.action.terminal.scrollUp",
    "workbench.action.terminal.scrollUpPage",
    "workbench.action.terminal.sendSequence",
    "workbench.action.terminal.sendSignal",
    "workbench.action.terminal.externalAgentActions",
    "workbench.action.terminal.externalAgentSecondOpinion",
    "workbench.action.terminal.externalAgentAsk",
    "workbench.action.terminal.selectAll",
    "workbench.action.terminal.selectToNextCommand",
    "workbench.action.terminal.selectToNextLine",
    "workbench.action.terminal.selectToPreviousCommand",
    "workbench.action.terminal.selectToPreviousLine",
    "workbench.action.terminal.splitInActiveWorkspace",
    "workbench.action.terminal.split",
    "workbench.action.terminal.toggleTerminal",
    "workbench.action.terminal.focusHover",
    Ccd,
    Tcd,
    Ecd,
    Icd,
    xcd,
    "editor.action.accessibilityHelp",
    "workbench.action.tasks.rerunForActiveTerminal",
    "editor.action.toggleTabFocusMode",
    "notifications.hideList",
    "notifications.hideToasts",
    "workbench.action.closeQuickOpen",
    "workbench.action.quickOpen",
    "workbench.action.quickOpenPreviousEditor",
    "workbench.action.showCommands",
    "workbench.action.tasks.build",
    "workbench.action.tasks.restartTask",
    "workbench.action.tasks.runTask",
    "workbench.action.tasks.reRunTask",
    "workbench.action.tasks.showLog",
    "workbench.action.tasks.showTasks",
    "workbench.action.tasks.terminate",
    "workbench.action.tasks.test",
    "workbench.action.toggleFullScreen",
    "workbench.action.terminal.focusAtIndex1",
    "workbench.action.terminal.focusAtIndex2",
    "workbench.action.terminal.focusAtIndex3",
    "workbench.action.terminal.focusAtIndex4",
    "workbench.action.terminal.focusAtIndex5",
    "workbench.action.terminal.focusAtIndex6",
    "workbench.action.terminal.focusAtIndex7",
    "workbench.action.terminal.focusAtIndex8",
    "workbench.action.terminal.focusAtIndex9",
    "workbench.action.focusSecondEditorGroup",
    "workbench.action.focusThirdEditorGroup",
    "workbench.action.focusFourthEditorGroup",
    "workbench.action.focusFifthEditorGroup",
    "workbench.action.focusSixthEditorGroup",
    "workbench.action.focusSeventhEditorGroup",
    "workbench.action.focusEighthEditorGroup",
    "workbench.action.focusNextPart",
    "workbench.action.focusPreviousPart",
    "workbench.action.nextPanelView",
    "workbench.action.previousPanelView",
    "workbench.action.nextSideBarView",
    "workbench.action.previousSideBarView",
    "workbench.action.debug.disconnect",
    "workbench.action.debug.start",
    "workbench.action.debug.stop",
    "workbench.action.debug.run",
    "workbench.action.debug.restart",
    "workbench.action.debug.continue",
    "workbench.action.debug.pause",
    "workbench.action.debug.stepInto",
    "workbench.action.debug.stepOut",
    "workbench.action.debug.stepOver",
    "workbench.action.nextEditor",
    "workbench.action.previousEditor",
    "workbench.action.nextEditorInGroup",
    "workbench.action.previousEditorInGroup",
    "workbench.action.openNextRecentlyUsedEditor",
    "workbench.action.openPreviousRecentlyUsedEditor",
    "workbench.action.openNextRecentlyUsedEditorInGroup",
    "workbench.action.openPreviousRecentlyUsedEditorInGroup",
    "workbench.action.quickOpenPreviousRecentlyUsedEditor",
    "workbench.action.quickOpenLeastRecentlyUsedEditor",
    "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
    "workbench.action.quickOpenLeastRecentlyUsedEditorInGroup",
    "workbench.action.focusActiveEditorGroup",
    "workbench.action.focusFirstEditorGroup",
    "workbench.action.focusLastEditorGroup",
    "workbench.action.firstEditorInGroup",
    "workbench.action.lastEditorInGroup",
    "workbench.action.navigateUp",
    "workbench.action.navigateDown",
    "workbench.action.navigateRight",
    "workbench.action.navigateLeft",
    "workbench.action.togglePanel",
    "workbench.action.quickOpenView",
    "workbench.action.toggleMaximizedPanel",
    "notification.acceptPrimaryAction",
    "runCommands",
    I_r,
    "workbench.action.terminal.chat.start",
    "workbench.action.terminal.chat.close",
    "workbench.action.terminal.chat.discard",
    "workbench.action.terminal.chat.makeRequest",
    "workbench.action.terminal.chat.cancel",
    "workbench.action.terminal.chat.feedbackHelpful",
    "workbench.action.terminal.chat.feedbackUnhelpful",
    "workbench.action.terminal.chat.feedbackReportIssue",
    "workbench.action.terminal.chat.runCommand",
    "workbench.action.terminal.chat.insertCommand",
    "workbench.action.terminal.chat.viewInChat",
    "workbench.action.backgroundComposer.escapeToClose",
    ...Cyg,
    "glass.nextTab",
    "glass.previousTab",
    "glass.openChangesTab",
    "glass.openBrowserTab",
    "glass.openFilesTab",
    "glass.togglePanel",
    "glass.toggleTerminal",
    "glass.newAgentFromKeyboard",
    "glass.newAgentKeepPaneFromKeyboard",
    "glass.newTab",
    "glass.newTabFromAgentWorkspace",
    "glass.focusInput",
    "glass.toggleSidebarFromKeyboard",
    "glass.goToTab1",
    "glass.goToTab2",
    "glass.goToTab3",
    "glass.goToTab4",
    "glass.goToTab5",
    "glass.goToTab6",
    "glass.goToTab7",
    "glass.goToTab8",
    "glass.goToTab9",
    "glass.nextAgent",
    "glass.previousAgent"
], Ryg = {
    extensionPoint: "terminal",
    defaultExtensionKind: [
        "workspace"
    ],
    activationEventsGenerator: (t, e)=>{
        for (const n of t)for (const i of n.profiles ?? [])e.push(`onTerminalProfile:${i.id}`);
    },
    jsonSchema: {
        description: D(10409, null),
        type: "object",
        properties: {
            profiles: {
                type: "array",
                description: D(10410, null),
                items: {
                    type: "object",
                    required: [
                        "id",
                        "title"
                    ],
                    defaultSnippets: [
                        {
                            body: {
                                id: "$1",
                                title: "$2"
                            }
                        }
                    ],
                    properties: {
                        id: {
                            description: D(10411, null),
                            type: "string"
                        },
                        title: {
                            description: D(10412, null),
                            type: "string"
                        },
                        icon: {
                            description: D(10413, null),
                            anyOf: [
                                {
                                    type: "string"
                                },
                                {
                                    type: "object",
                                    properties: {
                                        light: {
                                            description: D(10414, null),
                                            type: "string"
                                        },
                                        dark: {
                                            description: D(10415, null),
                                            type: "string"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        }
    }
};

}
