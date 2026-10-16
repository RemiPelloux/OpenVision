import { Gr } from "./Ycg.js";
import { kl } from "./browser.ts";
import { x0t } from "./ipa.js";
import { Ki, em } from "./network.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { Cnt, Sz } from "./types_4.js";
import { fn, rt } from "./uri.js";
import { Ai, Xo } from "./uuid_2.js";
import { pi, vt } from "./ze.js";
var JQg, eJg;
export { JQg, eJg };
var __wakaru_OFk_initialized = false;
export function OFk() {
if (__wakaru_OFk_initialized) return;
__wakaru_OFk_initialized = true;
"use strict";
E(), pi(), kl(), Ki(), fn(), Xo(), vo(), Sz(), JQg = {
    ...Cnt,
    addImage: ()=>{},
    addDocumentAttachment: ()=>{},
    addVideoAttachment: ()=>{},
    removeDocumentAttachment: ()=>{},
    removeVideoAttachment: ()=>{},
    insertConsoleLog: ()=>{},
    removeConsoleLog: ()=>{},
    insertGitPRDiffSelection: ()=>{},
    removeGitPRDiffSelection: ()=>{}
}, eJg = (t, e, n, i, r, s, o)=>{
    const a = Gr();
    return vt(()=>({
            ...JQg,
            ...i().supportsGit ? {
                insertCommit: (c, u)=>{
                    t("selectedCommits", c, c.uuid, c.uuid ? !1 : u);
                },
                commits: r().selectedCommits ?? [],
                removeCommit: (c, u)=>{
                    e("selectedCommits", c, u ?? !1);
                },
                insertPullRequest: (c, u)=>{
                    t("selectedPullRequests", c, c.uuid, c.uuid ? !1 : u);
                },
                pullRequests: r().selectedPullRequests ?? [],
                removePullRequest: (c, u)=>{
                    e("selectedPullRequests", c, u ?? !1);
                },
                insertGitDiff: (c, u)=>{
                    t("gitDiff", !0, c, c ? !1 : u);
                },
                removeGitDiff: (c)=>{
                    e("gitDiff", void 0, c ?? !1);
                },
                insertDiffToMain: (c, u)=>{
                    t("gitDiffFromBranchToMain", !0, c, c ? !1 : u);
                },
                removeDiffToMain: (c)=>{
                    e("gitDiffFromBranchToMain", void 0, c ?? !1);
                },
                gitPRDiffSelections: r().gitPRDiffSelections ?? [],
                insertGitPRDiffSelection: (c, u)=>{
                    t("gitPRDiffSelections", c, c.uuid, c.uuid ? !1 : u);
                },
                removeGitPRDiffSelection: (c, u)=>{
                    e("gitPRDiffSelections", c, u ?? !1);
                }
            } : {},
            ...i().supportsFilesAndFolders ? {
                folderSelections: r().folderSelections ?? [],
                insertFolderSelection: (c, u)=>{
                    t("folderSelections", c, c.uuid, c.uuid ? !1 : u);
                },
                removeFolderSelection: (c, u)=>{
                    e("folderSelections", c, u ?? !1);
                }
            } : {},
            selections: r().selections ?? [],
            insertSelection (c, u) {
                t("selections", c, c.uuid, c.uuid ? !1 : u);
            },
            removeSelection: (c, u)=>{
                e("selections", c, u ?? !1);
            },
            replaceSelections: (c, u)=>{
                s("selections", c, u ?? !1);
            },
            selectedDocs: r().selectedDocs ?? [],
            insertDocs (c, u) {
                t("selectedDocs", c, c.uuid, c.uuid ? !1 : u);
            },
            removeDocs: (c, u)=>{
                const d = r().selectedDocs?.findIndex((h)=>h.docId === c) ?? -1;
                d !== -1 && e("selectedDocs", d, u ?? !1);
            },
            ...i().supportsPlaywrightMcp ? {
                setBrowserConnection: (c, u, d)=>{
                    a.composerDataService.updateComposerData(o(), {
                        browserConnection: "editor",
                        browserChipManuallyDisabled: !1,
                        browserChipManuallyEnabled: !0
                    }), a.reactiveStorageService.setApplicationUserPersistentStorage("lastBrowserConnectionMode", "editor"), a.reactiveStorageService.setApplicationUserPersistentStorage("browserChipManuallyDisabled", !1);
                },
                removeBrowserConnection: (c)=>{
                    a.composerDataService.updateComposerData(o(), {
                        browserConnection: void 0
                    }), a.reactiveStorageService.setApplicationUserPersistentStorage("browserChipManuallyDisabled", !0);
                },
                addPlaywrightMcp: (c, u)=>{
                    a.composerDataService.updateComposerData(o(), {
                        browserConnection: "editor",
                        browserChipManuallyDisabled: !1,
                        browserChipManuallyEnabled: !0
                    }), a.reactiveStorageService.setApplicationUserPersistentStorage("browserChipManuallyDisabled", !1);
                },
                removePlaywrightMcp: (c)=>{
                    a.composerDataService.updateComposerData(o(), {
                        browserConnection: void 0,
                        browserChipManuallyDisabled: !0,
                        browserChipManuallyEnabled: !1
                    }), a.reactiveStorageService.setApplicationUserPersistentStorage("browserChipManuallyDisabled", !0);
                }
            } : {},
            ...i().supportsUiElement ? {
                addUiElement: (c, u)=>{
                    t("uiElementSelections", !0, c, c ? !1 : u);
                },
                removeUiElement: (c)=>{
                    e("uiElementSelections", void 0, c ?? !1);
                }
            } : {},
            insertConsoleLog: (c, u)=>{
                t("consoleLogs", c, c.uuid, c.uuid ? !1 : u);
            },
            removeConsoleLog: (c, u)=>{
                const d = r().consoleLogs?.findIndex((h)=>h.uuid && c.uuid && h.uuid === c.uuid) ?? -1;
                d !== -1 && e("consoleLogs", d, u ?? !1);
            },
            ...i().supportsLink ? {
                insertLink: (c, u)=>{
                    t("externalLinks", c, c.uuid, c.uuid ? !1 : u);
                },
                linksSelections: r().externalLinks ?? [],
                removeLink: (c, u)=>{
                    const d = r().externalLinks?.findIndex((h)=>h.uuid === c) ?? -1;
                    d !== -1 && e("externalLinks", d, u ?? !1);
                }
            } : {},
            insertBrowserSelection: (c, u)=>{
                t("browserSelections", {
                    browserId: c.browserId,
                    url: c.url,
                    pageTitle: c.pageTitle,
                    uuid: c.uuid
                }, c.uuid, c.uuid ? !1 : u);
            },
            browserSelections: r().browserSelections ?? [],
            removeBrowserSelection: (c, u)=>{
                e("browserSelections", c, u ?? !1);
            },
            addImage: (c)=>{
                t("selectedImages", c);
            },
            addDocumentAttachment: (c)=>{
                t("selectedDocuments", c);
            },
            addVideoAttachment: (c)=>{
                t("selectedVideos", c);
            },
            insertImage: (c, u)=>{
                const d = new Image;
                d.src = em.uriToBrowserUri(rt.from(c.uri)).toString(), d.onload = ()=>{
                    t("selectedImages", {
                        uuid: c.uuid ?? Ai(),
                        path: rt.from(c.uri).fsPath,
                        dimension: {
                            width: d.naturalWidth,
                            height: d.naturalHeight
                        },
                        loadedAt: Date.now()
                    }, c.uuid, c.uuid ? !1 : u);
                };
            },
            imageSelections: r().selectedImages ?? [],
            removeImage: (c, u)=>{
                e("selectedImages", c, u ?? !1);
            },
            removeDocumentAttachment: (c, u)=>{
                e("selectedDocuments", c, u ?? !1);
            },
            removeVideoAttachment: (c, u)=>{
                e("selectedVideos", c, u ?? !1);
            },
            insertFileSelection: (c, u)=>{
                t("fileSelections", c, c.uuid, c.uuid ? !1 : u);
            },
            fileSelections: r().fileSelections ?? [],
            removeFileSelection: (c, u)=>{
                e("fileSelections", c, u ?? !1);
            },
            replaceFileSelections: (c, u)=>{
                s("fileSelections", c, u ?? !1);
            },
            terminalSelections: r().terminalSelections ?? [],
            insertTerminalSelection (c, u) {
                t("terminalSelections", c, c.uuid, c.uuid ? !1 : u);
            },
            removeTerminalSelection (c, u) {
                e("terminalSelections", c, u ?? !1);
            },
            terminalFiles: r().terminalFiles ?? [],
            insertTerminalFile (c, u) {
                t("terminalFiles", c, c.uuid, c.uuid ? !1 : u);
            },
            removeTerminalFile (c, u) {
                e("terminalFiles", c, u ?? !1);
            },
            removeMention: (c)=>(n(c), !0),
            ...i().supportsComposers ? {
                insertComposer: (c, u)=>{
                    t("composers", {
                        composerId: c.composerId
                    }, c.uuid, c.uuid ? !1 : u);
                },
                composers: r().composers ?? [],
                removeComposer: (c, u)=>{
                    const d = r().composers?.findIndex((h)=>h.composerId === c) ?? -1;
                    d !== -1 && e("composers", d, u ?? !1);
                }
            } : {},
            ...i().supportsCursorRules ? {
                insertCursorRule: (c, u)=>{
                    t("cursorRules", {
                        filename: c.filename,
                        slashSubject: x0t(c.slashSubject)
                    }, c.uuid, c.uuid ? !1 : u);
                },
                cursorRules: r().cursorRules ?? [],
                removeCursorRule: (c, u)=>{
                    const d = r().cursorRules?.findIndex((h)=>h.filename === c) ?? -1;
                    d !== -1 && e("cursorRules", d, u ?? !1);
                }
            } : {},
            ...i().supportsCursorCommands ? {
                insertCursorCommand: (c, u)=>{
                    t("cursorCommands", {
                        filename: c.filename,
                        uuid: c.uuid,
                        content: c.content,
                        parameters: c.parameters,
                        slashSubject: x0t(c.slashSubject)
                    }, c.uuid, c.uuid ? !1 : u);
                },
                cursorCommandIds: r().cursorCommands?.map((c)=>c.uuid || c.filename) ?? [],
                removeCursorCommand: (c, u)=>{
                    const d = r().cursorCommands?.findIndex((h)=>h.uuid === c || h.filename === c) ?? -1;
                    d !== -1 && e("cursorCommands", d, u ?? !1);
                }
            } : {},
            ...i().supportsSubagents ? {
                insertSubagent: (c, u)=>{
                    t("subagentSelections", {
                        name: c.name,
                        uuid: c.uuid ?? "",
                        slashSubject: x0t(c.slashSubject)
                    }, c.uuid, c.uuid ? !1 : u);
                },
                subagentSelections: r().subagentSelections?.map((c)=>({
                        name: c.name,
                        uuid: c.uuid,
                        description: "",
                        prompt: ""
                    })) ?? [],
                removeSubagent: (c, u)=>{
                    const d = r().subagentSelections?.findIndex((h)=>h.name === c) ?? -1;
                    d !== -1 && e("subagentSelections", d, u ?? !1);
                }
            } : {}
        }));
};

}
