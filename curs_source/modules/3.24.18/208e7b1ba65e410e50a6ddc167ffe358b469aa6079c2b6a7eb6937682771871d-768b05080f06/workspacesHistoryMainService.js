import { Vn } from "./arrays.js";
import { bw } from "./bcIdFromAuthority.js";
import { E } from "./configurationRegistry.js";
import { Ta, ci } from "./dialogMainService.js";
import { N, se } from "./event.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { WR, ha } from "./labels.js";
import { J, j } from "./lifecycle.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { Yn, mr } from "./map.js";
import { $, $e } from "./network.js";
import { Ne } from "./nls.js";
import { De, Yt } from "./path.js";
import { ee, oe } from "./platform.js";
import { Ia } from "./processMainService.js";
import { Ft, Mi, St } from "./resources.js";
import { Cn, or } from "./storageMainService.js";
import { w, wn } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { Tp, bn } from "./workspace.js";
import { Pc, lo } from "./workspacesManagementMainService.js";
import { eS } from "./workspaces_2.js";
import { app as Uw } from "electron";
function a3(e, t = ee) {
    return t ? WR(e.charCodeAt(0)) && e.charCodeAt(1) === 58 : !1;
}
function e0(e, t = ee) {
    return a3(e, t) ? e.charAt(0).toUpperCase() + e.slice(1) : e;
}
function Hxe(e) {
    if (e.endsWith("]")) {
        const t = e.lastIndexOf(" [", e.length - 2);
        if (t !== -1) {
            const n = N3(e.substring(0, t)), r = e.substring(t);
            return {
                name: n.name + r,
                parentPath: n.parentPath
            };
        }
    }
    return N3(e);
}
function N3(e) {
    const t = e.indexOf("/") !== -1 ? De : Yt, n = t.basename(e), r = t.dirname(e);
    return n.length ? {
        name: n,
        parentPath: r
    } : {
        name: r,
        parentPath: ""
    };
}
function Qk(e) {
    return e.hasOwnProperty("workspace");
}
function Zk(e) {
    return e.hasOwnProperty("folderUri");
}
function $We(e) {
    return e.hasOwnProperty("fileUri");
}
function KWe(e) {
    return e.workspace && typeof e.workspace == "object" && typeof e.workspace.id == "string" && typeof e.workspace.configPath == "string";
}
function zWe(e) {
    return typeof e.folderUri == "string";
}
function YWe(e) {
    return typeof e.fileUri == "string";
}
function JWe(e, t) {
    const n = {
        workspaces: [],
        files: []
    };
    if (e) {
        const r = function(i, a) {
            for(let o = 0; o < i.length; o++)try {
                a(i[o], o);
            } catch (l) {
                t.warn(`Error restoring recent entry ${JSON.stringify(i[o])}: ${l.toString()}. Skip entry.`);
            }
        }, s = e;
        Array.isArray(s.entries) && r(s.entries, (i)=>{
            const a = i.label, o = i.remoteAuthority;
            KWe(i) ? n.workspaces.push({
                label: a,
                remoteAuthority: o,
                workspace: {
                    id: i.workspace.id,
                    configPath: x.parse(i.workspace.configPath)
                }
            }) : zWe(i) ? n.workspaces.push({
                label: a,
                remoteAuthority: o,
                folderUri: x.parse(i.folderUri)
            }) : YWe(i) && n.files.push({
                label: a,
                remoteAuthority: o,
                fileUri: x.parse(i.fileUri)
            });
        });
    }
    return n;
}
function XWe(e) {
    const t = {
        entries: []
    }, n = (r, s)=>r && r !== s.fsPath && r !== s.path;
    for (const r of e.workspaces)Zk(r) ? t.entries.push({
        folderUri: r.folderUri.toString(),
        label: n(r.label, r.folderUri) ? r.label : void 0,
        remoteAuthority: r.remoteAuthority
    }) : t.entries.push({
        workspace: {
            id: r.workspace.id,
            configPath: r.workspace.configPath.toString()
        },
        label: n(r.label, r.workspace.configPath) ? r.label : void 0,
        remoteAuthority: r.remoteAuthority
    });
    for (const r of e.files)t.entries.push({
        fileUri: r.fileUri.toString(),
        label: n(r.label, r.fileUri) ? r.label : void 0,
        remoteAuthority: r.remoteAuthority
    });
    return t;
}
var wu, QD, Ir;
export { $We, Hxe, Ir, JWe, KWe, N3, QD, Qk, XWe, YWe, Zk, a3, e0, wu, zWe };
var __wakaru_Eu_initialized = false;
export function Eu() {
if (__wakaru_Eu_initialized) return;
__wakaru_Eu_initialized = true;
"use strict";
h(), Vn(), se(), ha(), j(), $e(), oe(), Ft(), ye(), Ne(), ne(), Vt(), te(), or(), eS(), bn(), Pc(), mr(), Ta(), bw(), wu = Q("workspacesHistoryMainService"), QD = [
    "COMMIT_EDITMSG",
    "MERGE_MSG",
    "git-rebase-todo"
], Ir = class extends J {
    constructor(e, t, n, r, s){
        super(), this.logService = e, this.workspacesManagementMainService = t, this.lifecycleMainService = n, this.applicationStorageMainService = r, this.dialogMainService = s, this._onDidChangeRecentlyOpened = this._register(new N), this.onDidChangeRecentlyOpened = this._onDidChangeRecentlyOpened.event, this.registerListeners();
    }
    registerListeners() {
        this.lifecycleMainService.when(4).then(()=>this.handleWindowsJumpList()), this._register(this.workspacesManagementMainService.onDidEnterWorkspace((e)=>this.addRecentlyOpened([
                {
                    workspace: e.workspace,
                    remoteAuthority: e.window.remoteAuthority
                }
            ])));
    }
    async addRecentlyOpened(e) {
        let t = [], n = [];
        for (const s of e)if (Ia(s.remoteAuthority) === void 0) if (Qk(s)) !this.workspacesManagementMainService.isUntitledWorkspace(s.workspace) && !this.containsWorkspace(t, s.workspace) && t.push(s);
        else if (Zk(s)) this.containsFolder(t, s.folderUri) || t.push(s);
        else {
            const i = this.containsFile(n, s.fileUri), a = s.fileUri.scheme === $.file && Ir.COMMON_FILES_FILTER.indexOf(Mi(s.fileUri)) >= 0;
            !i && !a && (n.push(s), ee && s.fileUri.scheme === $.file && Uw.addRecentDocument(s.fileUri.fsPath));
        }
        const r = await this.mergeEntriesFromStorage({
            workspaces: t,
            files: n
        });
        t = r.workspaces, n = r.files, t.length > Ir.MAX_TOTAL_RECENT_ENTRIES && (t.length = Ir.MAX_TOTAL_RECENT_ENTRIES), n.length > Ir.MAX_TOTAL_RECENT_ENTRIES && (n.length = Ir.MAX_TOTAL_RECENT_ENTRIES), await this.saveRecentlyOpened({
            workspaces: t,
            files: n
        }), this._onDidChangeRecentlyOpened.fire();
    }
    async removeRecentlyOpened(e) {
        const t = (i)=>{
            const a = this.location(i);
            for (const o of e)if (St.isEqual(o, a)) return !1;
            return !0;
        }, n = await this.getRecentlyOpened(), r = n.workspaces.filter(t), s = n.files.filter(t);
        (r.length !== n.workspaces.length || s.length !== n.files.length) && (await this.saveRecentlyOpened({
            files: s,
            workspaces: r
        }), this._onDidChangeRecentlyOpened.fire());
    }
    async clearRecentlyOpened(e) {
        if (e?.confirm) {
            const { response: t } = await this.dialogMainService.showMessageBox({
                type: "warning",
                buttons: [
                    E(2693, null),
                    E(2694, null)
                ],
                message: E(2695, null),
                detail: E(2696, null),
                cancelId: 1
            });
            if (t !== 0) return;
        }
        await this.saveRecentlyOpened({
            workspaces: [],
            files: []
        }), Uw.clearRecentDocuments(), this._onDidChangeRecentlyOpened.fire();
    }
    async getRecentlyOpened() {
        return this.mergeEntriesFromStorage();
    }
    async mergeEntriesFromStorage(e) {
        const t = new Yn((s)=>St.getComparisonKey(s));
        if (e?.workspaces) for (const s of e.workspaces)t.set(this.location(s), s);
        const n = new Yn((s)=>St.getComparisonKey(s));
        if (e?.files) for (const s of e.files)n.set(this.location(s), s);
        const r = await this.getRecentlyOpenedFromStorage();
        for (const s of r.workspaces){
            if (Ia(s.remoteAuthority) !== void 0) continue;
            const i = t.get(this.location(s));
            i ? i.label = i.label ?? s.label : t.set(this.location(s), s);
        }
        for (const s of r.files){
            const i = n.get(this.location(s));
            i ? i.label = i.label ?? s.label : n.set(this.location(s), s);
        }
        return {
            workspaces: [
                ...t.values()
            ],
            files: [
                ...n.values()
            ]
        };
    }
    async getRecentlyOpenedFromStorage() {
        await this.applicationStorageMainService.whenReady;
        let e;
        const t = this.applicationStorageMainService.get(Ir.RECENTLY_OPENED_STORAGE_KEY, -1);
        if (typeof t == "string") try {
            e = JSON.parse(t);
        } catch (n) {
            this.logService.error("Unexpected error parsing opened paths list", n);
        }
        return JWe(e, this.logService);
    }
    async saveRecentlyOpened(e) {
        await this.applicationStorageMainService.whenReady, this.applicationStorageMainService.store(Ir.RECENTLY_OPENED_STORAGE_KEY, JSON.stringify(XWe(e)), -1, 1);
    }
    location(e) {
        return Zk(e) ? e.folderUri : $We(e) ? e.fileUri : e.workspace.configPath;
    }
    containsWorkspace(e, t) {
        return !!e.find((n)=>Qk(n) && n.workspace.id === t.id);
    }
    containsFolder(e, t) {
        return !!e.find((n)=>Zk(n) && St.isEqual(n.folderUri, t));
    }
    containsFile(e, t) {
        return !!e.find((n)=>St.isEqual(n.fileUri, t));
    }
    async handleWindowsJumpList() {
        ee && (await this.updateWindowsJumpList(), this._register(this.onDidChangeRecentlyOpened(()=>this.updateWindowsJumpList())));
    }
    async updateWindowsJumpList() {
        if (!ee) return;
        const e = [];
        if (e.push({
            type: "tasks",
            items: [
                {
                    type: "task",
                    title: E(2697, null),
                    description: E(2698, null),
                    program: process.execPath,
                    args: "-n",
                    iconPath: process.execPath,
                    iconIndex: 0
                }
            ]
        }), (await this.getRecentlyOpened()).workspaces.length > 0) {
            const t = [];
            for (const s of Uw.getJumpListSettings().removedItems){
                const i = s.args;
                if (i) {
                    const a = /^--(folder|file)-uri\s+"([^"]+)"$/.exec(i);
                    a && t.push(x.parse(a[2]));
                }
            }
            await this.removeRecentlyOpened(t);
            let n = !1;
            const r = wn((await this.getRecentlyOpened()).workspaces.slice(0, Ir.MAX_WINDOWS_JUMP_LIST_ENTRIES).map((s)=>{
                const i = Qk(s) ? s.workspace : s.folderUri, { title: a, description: o } = this.getWindowsJumpListLabel(i, s.label);
                let l;
                return x.isUri(i) ? l = `--folder-uri "${i.toString()}"` : (n = !0, l = `--file-uri "${i.configPath.toString()}"`), {
                    type: "task",
                    title: a.substr(0, 255),
                    description: o.substr(0, 255),
                    program: process.execPath,
                    args: l,
                    iconPath: "explorer.exe",
                    iconIndex: 0
                };
            }));
            r.length > 0 && e.push({
                type: "custom",
                name: E(n ? 2699 : 2700, null),
                items: r
            });
        }
        e.push({
            type: "recent"
        });
        try {
            const t = Uw.setJumpList(e);
            t && t !== "ok" && this.logService.warn(`updateWindowsJumpList#setJumpList unexpected result: ${t}`);
        } catch (t) {
            this.logService.warn("updateWindowsJumpList#setJumpList", t);
        }
    }
    getWindowsJumpListLabel(e, t) {
        if (t) return {
            title: Hxe(t).name,
            description: t
        };
        if (x.isUri(e)) return {
            title: Mi(e),
            description: this.renderJumpListPathDescription(e)
        };
        if (this.workspacesManagementMainService.isUntitledWorkspace(e)) return {
            title: E(2701, null),
            description: ""
        };
        let n = Mi(e.configPath);
        return n.endsWith(Tp) && (n = n.substr(0, n.length - Tp.length - 1)), {
            title: E(2702, null, n),
            description: this.renderJumpListPathDescription(e.configPath)
        };
    }
    renderJumpListPathDescription(e) {
        return e.scheme === "file" ? e0(e.fsPath) : e.toString();
    }
}, Ir.MAX_TOTAL_RECENT_ENTRIES = 500, Ir.RECENTLY_OPENED_STORAGE_KEY = "history.recentlyOpenedPathsList", Ir.MAX_WINDOWS_JUMP_LIST_ENTRIES = 7, Ir.COMMON_FILES_FILTER = QD, Ir = B([
    w(0, Z),
    w(1, lo),
    w(2, ht),
    w(3, Cn),
    w(4, ci)
], Ir);

}
