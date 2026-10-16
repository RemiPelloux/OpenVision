import { S, jn, vf } from "./HVr.js";
import { So, cgi, dmn, hKr, hmn, ngi, tgi } from "./constants_8.js";
import { Ze } from "./instantiation.js";
import { rt } from "./nls.js";
import { vn } from "./qIc.js";
import { C8e, LMh } from "./terminalContribExports.js";
import { x } from "./tslib.es6.js";
var F1, NMh, T8e, hxo, OMh, pxo, ler, uer, FMh, BMh, mxo, lte, X_e, UMh, gxo, $Mh;
export { $Mh, BMh, F1, FMh, NMh, OMh, T8e, UMh, X_e, gxo, hxo, ler, lte, mxo, pxo, uer };
var __wakaru_hT_initialized = false;
export function hT() {
if (__wakaru_hT_initialized) return;
__wakaru_hT_initialized = true;
"use strict";
x(), So(), jn(), rt(), Ze(), C8e(), F1 = "terminal", NMh = [
    "workbench.action.terminal.toggleTerminal",
    "workbench.action.terminal.new",
    "workbench.action.togglePanel",
    "workbench.action.terminal.focus"
], T8e = "terminal.integrated", hxo = 0, OMh = -5, pxo = vf ? 1.1 : 1, ler = 1, uer = 1e3, FMh = "normal", BMh = "bold", mxo = [
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
], lte = vn("terminalProfileResolverService"), X_e = vn("terminalProfileService"), UMh = (e)=>typeof e.write == "function", gxo = [
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
    dmn,
    hKr,
    hmn,
    tgi,
    ngi,
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
    cgi,
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
    ...LMh,
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
], $Mh = {
    extensionPoint: "terminal",
    defaultExtensionKind: [
        "workspace"
    ],
    activationEventsGenerator: (e, t)=>{
        for (const n of e)for (const i of n.profiles ?? [])t.push(`onTerminalProfile:${i.id}`);
    },
    jsonSchema: {
        description: S(10409, null),
        type: "object",
        properties: {
            profiles: {
                type: "array",
                description: S(10410, null),
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
                            description: S(10411, null),
                            type: "string"
                        },
                        title: {
                            description: S(10412, null),
                            type: "string"
                        },
                        icon: {
                            description: S(10413, null),
                            anyOf: [
                                {
                                    type: "string"
                                },
                                {
                                    type: "object",
                                    properties: {
                                        light: {
                                            description: S(10414, null),
                                            type: "string"
                                        },
                                        dark: {
                                            description: S(10415, null),
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
