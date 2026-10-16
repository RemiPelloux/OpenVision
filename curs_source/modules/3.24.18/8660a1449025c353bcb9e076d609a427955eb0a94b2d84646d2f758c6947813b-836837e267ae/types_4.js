import { gIr } from "./LYd.js";
import { E } from "./tslib.es6.js";
import { O5y, iXd } from "./types_3.js";
import { Ai, Xo } from "./uuid_2.js";
var to, sXd, RY, oXd, eC, aXd, Cnt, fIr, aai, JBt, lai;
export { Cnt, JBt, RY, aXd, aai, eC, fIr, lai, oXd, sXd, to };
var __wakaru_Sz_initialized = false;
export function Sz() {
if (__wakaru_Sz_initialized) return;
__wakaru_Sz_initialized = true;
"use strict";
E(), Xo(), O5y(), to = ((t)=>(t.none = "none", t.doc = "doc", t.code = "code", t.file = "file", t.folder = "folder", t.git_commit = "commits", t.git_pr = "pr", t.git_diff = "diffs", t.git = "git", t.heading = "heading", t.staticheading = "staticheading", t.divider = "divider", t.link = "link", t.current_file = "current_file", t.toggle_commit_options = "toggle_commit_options", t.commit_notes = "commit_notes", t.image = "image", t.composer = "composer", t.reset = "reset", t.summarize = "summarize", t.bugbot = "bugbot", t.files_and_folders = "files_and_folders", t.more = "more", t.terminal = "terminal", t.terminal_selection = "terminal_selection", t.review_changes = "review_changes", t.playwright_mcp = "playwright_mcp", t.open_browser = "open_browser", t.ui_element = "ui-element", t.cursor_command = "cursor_command", t.pr_diff = "pr_diff", t.projects = "projects", t.current_pr = "current_pr", t.browser = "browser", t.mcp_attachment = "mcp-attachment", t.agent_store = "agent_store", t))(to || {}), sXd = [
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
], RY = {
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
}, oXd = [
    "reset",
    "summarize",
    "bugbot",
    "open_browser"
], eC = class HRb extends iXd {
    constructor(e, n, i, r, s, o, a, l, c, u, d){
        super(e), this.type = i, this.selectionPrecursor = s, this.docSelection = o, this.secondaryText = a, this.onSettingClick = l, this.payload = c, this.id = Ai(), this.name = e, this.picture = n, this._score = r, this.sizeBytes = u, this.aliases = d, this.isSlash = gIr(i), c && (this.pr = c.pr, this.commit = c.commit, this.diff = c.diff, this.composerId = c.composerId, this.cursorRuleFilename = c.cursorRuleFilename, this.cursorCommand = c.cursorCommand, this.terminalFile = c.terminalFile, this.terminalSelection = c.terminalSelection, this.consoleLog = c.consoleLog, this.browserSelection = c.browserSelection, this.agentStore = c.agentStore, this.isLoadMore = c.isLoadMore, this.tooltip = c.tooltip);
    }
    overrideScore(e) {
        this._score = e;
    }
    set score(e) {
        this._score = e;
    }
    get score() {
        return this._score;
    }
    clone() {
        return new HRb(this.name, this.picture, this.type, this._score, this.selectionPrecursor, this.docSelection, this.secondaryText, this.onSettingClick, this.payload, this.sizeBytes, this.aliases);
    }
}, aXd = {
    "cmd-k": [
        "cmdKDefinitions"
    ],
    generic: [],
    "terminal-cmd-k": []
}, Cnt = {
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
}, fIr = "Commit (Diff of Working State)", aai = "Branch (Diff with Main)", JBt = 32, lai = 3;

}
