import { OT, si } from "./HVr.js";
import { Ze } from "./instantiation.js";
import { vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var yq, O1, Mkh, Y5;
export { Mkh, O1, Y5, yq };
var __wakaru_lG_initialized = false;
export function lG() {
if (__wakaru_lG_initialized) return;
__wakaru_lG_initialized = true;
"use strict";
x(), si(), Ze(), yq = vn("configurationResolverService"), O1 = ((e)=>(e.Unknown = "unknown", e.Env = "env", e.Config = "config", e.Command = "command", e.Input = "input", e.ExtensionInstallFolder = "extensionInstallFolder", e.WorkspaceFolder = "workspaceFolder", e.Cwd = "cwd", e.WorkspaceFolderBasename = "workspaceFolderBasename", e.UserHome = "userHome", e.LineNumber = "lineNumber", e.ColumnNumber = "columnNumber", e.SelectedText = "selectedText", e.File = "file", e.FileWorkspaceFolder = "fileWorkspaceFolder", e.FileWorkspaceFolderBasename = "fileWorkspaceFolderBasename", e.RelativeFile = "relativeFile", e.RelativeFileDirname = "relativeFileDirname", e.FileDirname = "fileDirname", e.FileExtname = "fileExtname", e.FileBasename = "fileBasename", e.FileBasenameNoExtension = "fileBasenameNoExtension", e.FileDirnameBasename = "fileDirnameBasename", e.ExecPath = "execPath", e.ExecInstallFolder = "execInstallFolder", e.PathSeparator = "pathSeparator", e.PathSeparatorAlias = "/", e))(O1 || {}), Mkh = Object.values(O1).filter((e)=>typeof e == "string"), Y5 = class extends OT {
    constructor(e, t){
        super(t), this.variable = e;
    }
};

}
