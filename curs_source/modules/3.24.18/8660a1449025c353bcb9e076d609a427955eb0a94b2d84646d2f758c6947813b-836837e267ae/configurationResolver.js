import { Ei, TD } from "./Iwo.js";
import { jn } from "./SZu.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
var ime, $x, zag, k$;
export { $x, ime, k$, zag };
var __wakaru_wle_initialized = false;
export function wle() {
if (__wakaru_wle_initialized) return;
__wakaru_wle_initialized = true;
"use strict";
E(), Ei(), It(), ime = jn("configurationResolverService"), $x = ((t)=>(t.Unknown = "unknown", t.Env = "env", t.Config = "config", t.Command = "command", t.Input = "input", t.ExtensionInstallFolder = "extensionInstallFolder", t.WorkspaceFolder = "workspaceFolder", t.Cwd = "cwd", t.WorkspaceFolderBasename = "workspaceFolderBasename", t.UserHome = "userHome", t.LineNumber = "lineNumber", t.ColumnNumber = "columnNumber", t.SelectedText = "selectedText", t.File = "file", t.FileWorkspaceFolder = "fileWorkspaceFolder", t.FileWorkspaceFolderBasename = "fileWorkspaceFolderBasename", t.RelativeFile = "relativeFile", t.RelativeFileDirname = "relativeFileDirname", t.FileDirname = "fileDirname", t.FileExtname = "fileExtname", t.FileBasename = "fileBasename", t.FileBasenameNoExtension = "fileBasenameNoExtension", t.FileDirnameBasename = "fileDirnameBasename", t.ExecPath = "execPath", t.ExecInstallFolder = "execInstallFolder", t.PathSeparator = "pathSeparator", t.PathSeparatorAlias = "/", t))($x || {}), zag = Object.values($x).filter((t)=>typeof t == "string"), k$ = class extends TD {
    constructor(t, e){
        super(e), this.variable = t;
    }
};

}
