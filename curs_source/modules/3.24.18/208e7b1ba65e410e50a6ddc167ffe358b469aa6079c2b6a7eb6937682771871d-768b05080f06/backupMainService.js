import { yWe } from "./backup_2.js";
import { EWe } from "./backup_3.js";
import { at, ot } from "./configuration.js";
import { Ye, qe } from "./environmentMainService.js";
import { Lr } from "./extpath.js";
import { $T, Wt } from "./files.js";
import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { $, $e } from "./network.js";
import { Ce, L } from "./path.js";
import { gn, ie, mT } from "./pfs.js";
import { Fe, oe } from "./platform.js";
import { Tt, et } from "./productService.js";
import { Ft, Ii, St } from "./resources.js";
import { br, fr } from "./state.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x } from "./uri.js";
import { rr } from "./userDataProfile.js";
import { bn } from "./workspace.js";
import { BI } from "./workspaces.js";
import { createHash as RWe } from "crypto";
function Xm(e, t, n) {
    const r = e === t;
    return !n || r ? r : !e || !t ? !1 : Ii(e, t);
}
function g5e(e, t) {
    return x.joinPath(e.userHome, t.dataFolderName, "shadow-workspaces");
}
function TWe(e) {
    return typeof e?.backupFolder == "string";
}
function kWe(e) {
    let t = [];
    try {
        Array.isArray(e.workspaces) && (t = e.workspaces.map((n)=>({
                workspace: {
                    id: n.id,
                    configPath: x.parse(n.configURIPath)
                },
                remoteAuthority: n.remoteAuthority
            })));
    } catch  {}
    return t;
}
function SWe(e) {
    let t = [];
    try {
        Array.isArray(e.folders) && (t = e.folders.map((n)=>({
                folderUri: x.parse(n.folderUri),
                remoteAuthority: n.remoteAuthority
            })));
    } catch  {}
    return t;
}
function wWe(e) {
    return e && e.hasOwnProperty("folderUri");
}
function WI() {
    return {
        id: (Date.now() + Math.round(Math.random() * 1e3)).toString()
    };
}
var Ac;
export { Ac, SWe, TWe, WI, Xm, g5e, kWe, wWe };
var __wakaru_CWe_initialized = false;
export function CWe() {
if (__wakaru_CWe_initialized) return;
__wakaru_CWe_initialized = true;
"use strict";
h(), Lr(), $e(), Ce(), oe(), Ft(), gn(), yWe(), at(), Ye(), br(), Wt(), te(), EWe(), bn(), BI(), Tt(), Ac = class {
    constructor(e, t, n, r, s){
        this.environmentMainService = e, this.configurationService = t, this.productService = n, this.logService = r, this.stateService = s, this.workspaces = [], this.folders = [], this.emptyWindows = [], this.backupUriComparer = St, this.backupPathComparer = {
            isEqual: (i, a)=>Xm(i, a, !Fe)
        }, this.backupHome = e.backupHome;
    }
    async initialize() {
        const e = this.stateService.getItem(Ac.backupWorkspacesMetadataStorageKey) ?? {
            workspaces: [],
            folders: [],
            emptyWindows: []
        };
        this.emptyWindows = await this.validateEmptyWorkspaces(e.emptyWindows), this.workspaces = await this.validateWorkspaces(kWe(e)), this.folders = await this.validateFolders(SWe(e)), this.storeWorkspacesMetadata();
    }
    getWorkspaceBackups() {
        return this.isHotExitOnExitAndWindowClose() ? [] : this.workspaces.slice(0);
    }
    getFolderBackups() {
        return this.isHotExitOnExitAndWindowClose() ? [] : this.folders.slice(0);
    }
    isHotExitEnabled() {
        return this.getHotExitConfig() !== $T.OFF;
    }
    isHotExitOnExitAndWindowClose() {
        return this.getHotExitConfig() === $T.ON_EXIT_AND_WINDOW_CLOSE;
    }
    getHotExitConfig() {
        return this.configurationService.getValue()?.files?.hotExit || $T.ON_EXIT;
    }
    getEmptyWindowBackups() {
        return this.emptyWindows.slice(0);
    }
    registerWorkspaceBackup(e, t) {
        this.workspaces.some((r)=>e.workspace.id === r.workspace.id) || (this.workspaces.push(e), this.storeWorkspacesMetadata());
        const n = L(this.backupHome, e.workspace.id);
        return t ? this.moveBackupFolder(n, t).then(()=>n) : n;
    }
    async moveBackupFolder(e, t) {
        if (await ie.exists(e) && await this.convertToEmptyWindowBackup(e), await ie.exists(t)) try {
            await ie.rename(t, e, !1);
        } catch (n) {
            this.logService.error(`Backup: Could not move backup folder to new location: ${n.toString()}`);
        }
    }
    registerFolderBackup(e) {
        return this.folders.some((t)=>this.backupUriComparer.isEqual(e.folderUri, t.folderUri)) || (this.folders.push(e), this.storeWorkspacesMetadata()), L(this.backupHome, this.getFolderHash(e));
    }
    registerEmptyWindowBackup(e) {
        return this.emptyWindows.some((t)=>!!t.backupFolder && this.backupPathComparer.isEqual(t.backupFolder, e.backupFolder)) || (this.emptyWindows.push(e), this.storeWorkspacesMetadata()), L(this.backupHome, e.backupFolder);
    }
    async validateWorkspaces(e) {
        if (!Array.isArray(e)) return [];
        const t = new Set, n = [];
        for (const r of e){
            const s = r.workspace;
            if (!rr(s)) return [];
            const i = g5e(this.environmentMainService, this.productService);
            if (!s.configPath.fsPath.startsWith(i.fsPath) && !t.has(s.id)) {
                t.add(s.id);
                const a = L(this.backupHome, s.id);
                await this.doHasBackups(a) ? s.configPath.scheme !== $.file || await ie.exists(s.configPath.fsPath) ? n.push(r) : await this.convertToEmptyWindowBackup(a) : await this.deleteStaleBackup(a);
            }
        }
        return n;
    }
    async validateFolders(e) {
        if (!Array.isArray(e)) return [];
        const t = [], n = new Set;
        for (const r of e){
            const s = r.folderUri, i = this.backupUriComparer.getComparisonKey(s);
            if (!n.has(i)) {
                n.add(i);
                const a = L(this.backupHome, this.getFolderHash(r));
                await this.doHasBackups(a) ? s.scheme !== $.file || await ie.exists(s.fsPath) ? t.push(r) : await this.convertToEmptyWindowBackup(a) : await this.deleteStaleBackup(a);
            }
        }
        return t;
    }
    async validateEmptyWorkspaces(e) {
        if (!Array.isArray(e)) return [];
        const t = [], n = new Set;
        for (const r of e){
            const s = r.backupFolder;
            if (typeof s != "string") return [];
            if (!n.has(s)) {
                n.add(s);
                const i = L(this.backupHome, s);
                await this.doHasBackups(i) ? t.push(r) : await this.deleteStaleBackup(i);
            }
        }
        return t;
    }
    async deleteStaleBackup(e) {
        try {
            await ie.rm(e, mT.MOVE);
        } catch (t) {
            this.logService.error(`Backup: Could not delete stale backup: ${t.toString()}`);
        }
    }
    prepareNewEmptyWindowBackup() {
        let e = WI();
        for(; this.emptyWindows.some((t)=>!!t.backupFolder && this.backupPathComparer.isEqual(t.backupFolder, e.id));)e = WI();
        return {
            backupFolder: e.id
        };
    }
    async convertToEmptyWindowBackup(e) {
        const t = this.prepareNewEmptyWindowBackup(), n = L(this.backupHome, t.backupFolder);
        try {
            await ie.rename(e, n, !1);
        } catch (r) {
            return this.logService.error(`Backup: Could not rename backup folder: ${r.toString()}`), !1;
        }
        return this.emptyWindows.push(t), !0;
    }
    async getDirtyWorkspaces() {
        const e = [];
        for (const t of this.workspaces)await this.hasBackups(t) && e.push(t);
        for (const t of this.folders)await this.hasBackups(t) && e.push(t);
        return e;
    }
    hasBackups(e) {
        let t;
        return TWe(e) ? t = L(this.backupHome, e.backupFolder) : wWe(e) ? t = L(this.backupHome, this.getFolderHash(e)) : t = L(this.backupHome, e.workspace.id), this.doHasBackups(t);
    }
    async doHasBackups(e) {
        try {
            const t = await ie.readdir(e);
            for (const n of t)try {
                if ((await ie.readdir(L(e, n))).length > 0) return !0;
            } catch  {}
        } catch  {}
        return !1;
    }
    storeWorkspacesMetadata() {
        const e = {
            workspaces: this.workspaces.map(({ workspace: t, remoteAuthority: n })=>{
                const r = {
                    id: t.id,
                    configURIPath: t.configPath.toString()
                };
                return n && (r.remoteAuthority = n), r;
            }),
            folders: this.folders.map(({ folderUri: t, remoteAuthority: n })=>{
                const r = {
                    folderUri: t.toString()
                };
                return n && (r.remoteAuthority = n), r;
            }),
            emptyWindows: this.emptyWindows.map(({ backupFolder: t, remoteAuthority: n })=>{
                const r = {
                    backupFolder: t
                };
                return n && (r.remoteAuthority = n), r;
            })
        };
        this.stateService.setItem(Ac.backupWorkspacesMetadataStorageKey, e);
    }
    getFolderHash(e) {
        const t = e.folderUri;
        let n;
        return t.scheme === $.file ? n = Fe ? t.fsPath : t.fsPath.toLowerCase() : n = t.toString().toLowerCase(), RWe("md5").update(n).digest("hex");
    }
}, Ac.backupWorkspacesMetadataStorageKey = "backupWorkspaces", Ac = B([
    w(0, qe),
    w(1, ot),
    w(2, et),
    w(3, Z),
    w(4, fr)
], Ac);

}
