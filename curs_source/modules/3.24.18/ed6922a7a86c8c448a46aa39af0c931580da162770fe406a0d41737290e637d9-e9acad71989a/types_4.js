import { Iki } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { S1g, Zzc } from "./types_3.js";
import { Js, zn } from "./uuid.js";
var Gr, Jzc, Z7, eKc, _k, tKc, Ubn, Aki, $bn, Umt, Hbn;
export { $bn, Aki, Gr, Hbn, Jzc, Ubn, Umt, Z7, _k, eKc, tKc };
var __wakaru_nj_initialized = false;
export function nj() {
if (__wakaru_nj_initialized) return;
__wakaru_nj_initialized = true;
"use strict";
x(), Js(), S1g(), Gr = ((e)=>(e.none = "none", e.doc = "doc", e.code = "code", e.file = "file", e.folder = "folder", e.git_commit = "commits", e.git_pr = "pr", e.git_diff = "diffs", e.git = "git", e.heading = "heading", e.staticheading = "staticheading", e.divider = "divider", e.link = "link", e.current_file = "current_file", e.toggle_commit_options = "toggle_commit_options", e.commit_notes = "commit_notes", e.image = "image", e.composer = "composer", e.reset = "reset", e.summarize = "summarize", e.bugbot = "bugbot", e.files_and_folders = "files_and_folders", e.more = "more", e.terminal = "terminal", e.terminal_selection = "terminal_selection", e.review_changes = "review_changes", e.playwright_mcp = "playwright_mcp", e.open_browser = "open_browser", e.ui_element = "ui-element", e.cursor_command = "cursor_command", e.pr_diff = "pr_diff", e.projects = "projects", e.current_pr = "current_pr", e.browser = "browser", e.mcp_attachment = "mcp-attachment", e.agent_store = "agent_store", e))(Gr || {}), Jzc = [
    "code",
    "file",
    "folder",
    "files_and_folders",
    "git",
    "composer",
    "reset",
    "summarize",
    "terminal",
    "playwright_mcp",
    "projects"
], Z7 = {
    code: "Code",
    file: "Files",
    folder: "Folders",
    git: "Commits",
    commit_notes: "Commit History",
    composer: "Past Chats",
    reset: "Reset",
    summarize: "Summarize",
    bugbot: "Agent Review",
    open_browser: "Open Browser",
    files_and_folders: "Files & Folders",
    terminal: "Terminals",
    playwright_mcp: "Browser",
    projects: "Projects"
}, eKc = [
    "reset",
    "summarize",
    "bugbot",
    "open_browser"
], _k = class awm extends Zzc {
    constructor(t, n, i, r, s, o, a, c, l, u, h){
        super(t), this.type = i, this.selectionPrecursor = s, this.docSelection = o, this.secondaryText = a, this.onSettingClick = c, this.payload = l, this.id = zn(), this.name = t, this.picture = n, this._score = r, this.sizeBytes = u, this.aliases = h, this.isSlash = Iki(i), l && (this.pr = l.pr, this.commit = l.commit, this.diff = l.diff, this.composerId = l.composerId, this.cursorRuleFilename = l.cursorRuleFilename, this.cursorCommand = l.cursorCommand, this.terminalFile = l.terminalFile, this.terminalSelection = l.terminalSelection, this.consoleLog = l.consoleLog, this.browserSelection = l.browserSelection, this.agentStore = l.agentStore, this.isLoadMore = l.isLoadMore, this.tooltip = l.tooltip);
    }
    overrideScore(t) {
        this._score = t;
    }
    set score(t) {
        this._score = t;
    }
    get score() {
        return this._score;
    }
    clone() {
        return new awm(this.name, this.picture, this.type, this._score, this.selectionPrecursor, this.docSelection, this.secondaryText, this.onSettingClick, this.payload, this.sizeBytes, this.aliases);
    }
}, tKc = {
    "cmd-k": [
        "cmdKDefinitions"
    ],
    generic: [],
    "terminal-cmd-k": []
}, Ubn = {
    insertTextSearch: ()=>{},
    selectedTextSearches: [],
    removeTextSearch: ()=>{},
    insertDocs: ()=>{},
    selectedDocs: [],
    removeDocs: ()=>{},
    insertSelection: ()=>{},
    selections: [],
    removeSelection: ()=>{},
    insertFileSelection: ()=>{},
    fileSelections: [],
    removeFileSelection: ()=>{},
    replaceFileSelections: ()=>{},
    insertImage: ()=>{},
    imageSelections: [],
    removeImage: ()=>{},
    insertBrowserSelection: ()=>{},
    browserSelections: [],
    removeBrowserSelection: ()=>{},
    insertCommit: ()=>{},
    commits: [],
    removeCommit: ()=>{},
    insertPullRequest: ()=>{},
    pullRequests: [],
    removePullRequest: ()=>{},
    insertGitDiff: ()=>{},
    removeGitDiff: ()=>{},
    gitDiffUuid: void 0,
    insertDiffToMain: ()=>{},
    removeDiffToMain: ()=>{},
    diffToMainUuid: void 0,
    addCurrentFile: ()=>{},
    removeCurrentFile: ()=>{},
    addPlaywrightMcp: ()=>{},
    removePlaywrightMcp: ()=>{},
    insertFolderSelection: ()=>{},
    folderSelections: [],
    removeFolderSelection: ()=>{},
    mentionIdToDelete: null,
    setMentionIdToDelete: ()=>{},
    insertLink: ()=>{},
    linksSelections: [],
    removeLink: ()=>{},
    removeMention: ()=>!1,
    insertComposer: ()=>{},
    composers: [],
    removeComposer: ()=>{},
    insertCursorRule: ()=>{},
    cursorRuleIds: [],
    removeCursorRule: ()=>{},
    insertCursorCommand: ()=>{},
    cursorCommandIds: [],
    removeCursorCommand: ()=>{},
    insertSubagent: ()=>{},
    subagentSelections: [],
    removeSubagent: ()=>{},
    addUiElement: ()=>{},
    removeUiElement: ()=>{},
    insertWorkflow: ()=>{},
    removeWorkflow: ()=>{}
}, Aki = "Commit (Diff of Working State)", $bn = "Branch (Diff with Main)", Umt = 32, Hbn = 3;

}
