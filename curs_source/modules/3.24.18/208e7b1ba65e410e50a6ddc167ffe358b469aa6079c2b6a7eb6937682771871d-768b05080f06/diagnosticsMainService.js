import { Ie, Mt } from "./cancellation.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { Te, hr } from "./ipcMain.js";
import { Nl } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { so, w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { Zr, rr } from "./userDataProfile.js";
import { Bi, cr } from "./utilityProcess.js";
import { ct, pt } from "./windows.js";
import { bn } from "./workspace.js";
import { Pc, lo } from "./workspacesManagementMainService.js";
import { app as E7 } from "electron";
var b7, rS, sS;
export { b7, rS, sS };
var __wakaru_R7_initialized = false;
export function R7() {
if (__wakaru_R7_initialized) return;
__wakaru_R7_initialized = true;
"use strict";
h(), hr(), Mt(), ne(), pt(), bn(), Pc(), Ze(), te(), Bi(), b7 = "diagnosticsMainService", rS = Q(b7), sS = class {
    constructor(e, t, n){
        this.windowsMainService = e, this.workspacesManagementMainService = t, this.logService = n;
    }
    async getRemoteDiagnostics(e) {
        const t = this.windowsMainService.getWindows();
        return (await Promise.all(t.map(async (r)=>{
            const s = r.remoteAuthority;
            if (!s) return;
            const i = `vscode:getDiagnosticInfoResponse${r.id}`, a = {
                includeProcesses: e.includeProcesses,
                folders: e.includeWorkspaceMetadata ? await this.getFolderURIs(r) : void 0
            };
            return new Promise((o)=>{
                r.sendWhenReady("vscode:getDiagnosticInfo", Ie.None, {
                    replyChannel: i,
                    args: a
                }), Te.once(i, (l, d)=>{
                    d || o({
                        hostName: s,
                        errorMessage: `Unable to resolve connection to '${s}'.`
                    }), o(d);
                }), setTimeout(()=>{
                    o({
                        hostName: s,
                        errorMessage: `Connection to '${s}' could not be established`
                    });
                }, 5e3);
            });
        }))).filter((r)=>!!r);
    }
    async getMainDiagnostics() {
        this.logService.trace("Received request for main process info from other instance.");
        const e = [];
        for (const n of so()){
            const r = this.windowsMainService.getWindowById(n.id);
            r ? e.push(await this.codeWindowToInfo(r)) : e.push(this.browserWindowToInfo(n));
        }
        const t = [];
        for (const { pid: n, name: r } of cr.getAll())t.push({
            pid: n,
            name: r
        });
        return {
            mainPID: process.pid,
            mainArguments: process.argv.slice(1),
            windows: e,
            pidToNames: t,
            screenReader: !!E7.accessibilitySupportEnabled,
            gpuFeatureStatus: E7.getGPUFeatureStatus()
        };
    }
    async codeWindowToInfo(e) {
        const t = await this.getFolderURIs(e), n = Nl(e.win);
        return this.browserWindowToInfo(n, t, e.remoteAuthority);
    }
    browserWindowToInfo(e, t = [], n) {
        return {
            id: e.id,
            pid: e.webContents.getOSProcessId(),
            title: e.getTitle(),
            folderURIs: t,
            remoteAuthority: n
        };
    }
    async getFolderURIs(e) {
        const t = [], n = e.openedWorkspace;
        if (Zr(n)) t.push(n.uri);
        else if (rr(n)) {
            const r = await this.workspacesManagementMainService.resolveLocalWorkspace(n.configPath);
            r && r.folders.forEach((i)=>{
                t.push(i.uri);
            });
        }
        return t;
    }
}, sS = B([
    w(0, ct),
    w(1, lo),
    w(2, Z)
], sS);

}
