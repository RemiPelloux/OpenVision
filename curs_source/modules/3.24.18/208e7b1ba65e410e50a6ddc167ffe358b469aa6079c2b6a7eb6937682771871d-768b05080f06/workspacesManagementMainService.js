import { Hp, Rd } from "./backup.js";
import { bv } from "./configurationModels.js";
import { E } from "./configurationRegistry.js";
import { Ta, ci } from "./dialogMainService.js";
import { Ye, qe } from "./environmentMainService.js";
import { N, se } from "./event.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { Ys, _m } from "./json.js";
import { J, j } from "./lifecycle.js";
import { Z, te } from "./log.js";
import { $, $e } from "./network.js";
import { Ne } from "./nls.js";
import { Ce, De, Hv, L, st } from "./path.js";
import { gn, ie } from "./pfs.js";
import { Fe, ee, q } from "./platform.js";
import { Ae, Fl, Ft, Mi, St, cs, m3 } from "./resources.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x } from "./uri.js";
import { Zr, rr } from "./userDataProfile.js";
import { Rc, Wi } from "./userDataProfile_3.js";
import { _7 } from "./windowsFinder.js";
import { K6, bn, gC, z6 } from "./workspace.js";
import { BI } from "./workspaces.js";
import { e0 } from "./workspacesHistoryMainService.js";
import { eS } from "./workspaces_2.js";
import { createHash as FI } from "crypto";
import * as JI from "fs";
import QWe from "electron";
function ia(e, t = [], n = _m.DEFAULT) {
    let r = null, s = [];
    const i = [];
    function a(l) {
        Array.isArray(s) ? s.push(l) : r !== null && (s[r] = l);
    }
    return bv(e, {
        onObjectBegin: ()=>{
            const l = {};
            a(l), i.push(s), s = l, r = null;
        },
        onObjectProperty: (l)=>{
            r = l;
        },
        onObjectEnd: ()=>{
            s = i.pop();
        },
        onArrayBegin: ()=>{
            const l = [];
            a(l), i.push(s), s = l, r = null;
        },
        onArrayEnd: ()=>{
            s = i.pop();
        },
        onLiteralValue: a,
        onError: (l, d, u)=>{
            t.push({
                error: l,
                offset: d,
                length: u
            });
        }
    }, n), s[0];
}
function Mxe(e) {
    if (!ee || !e || e.length < 5) return !1;
    let t = e.charCodeAt(0);
    if (t !== 92 || (t = e.charCodeAt(1), t !== 92)) return !1;
    let n = 2;
    const r = n;
    for(; n < e.length && (t = e.charCodeAt(n), t !== 92); n++);
    return !(r === n || (t = e.charCodeAt(n + 1), isNaN(t) || t === 92));
}
function H6(e, t) {
    return St.isEqualOrParent(e, t.untitledWorkspacesHome);
}
function io(e) {
    return (typeof e == "string" ? Hv(e) : m3(e)) === z6;
}
function Ic(e) {
    function t() {
        let n = e.scheme === $.file ? cs(e) : e.toString();
        return Fe || (n = n.toLowerCase()), FI("md5").update(n).digest("hex");
    }
    return {
        id: t(),
        configPath: e
    };
}
function qp(e, t) {
    function n() {
        if (e.scheme !== $.file) return FI("md5").update(e.toString()).digest("hex");
        if (!t) return;
        let s;
        return Fe ? s = t.ino : q ? s = t.birthtime.getTime() : ee && (typeof t.birthtimeMs == "number" ? s = Math.floor(t.birthtimeMs) : s = t.birthtime.getTime()), FI("md5").update(e.fsPath).update(s ? String(s) : "").digest("hex");
    }
    const r = n();
    if (typeof r == "string") return {
        id: r,
        uri: e
    };
}
function Cd(e, t) {
    for (const n of e)if (rr(n.openedWorkspace) && St.isEqual(n.openedWorkspace.configPath, t) || Zr(n.openedWorkspace) && St.isEqual(n.openedWorkspace.uri, t)) return n;
}
function jWe(e) {
    return T7(e) || k7(e);
}
function T7(e) {
    const t = e;
    return typeof t?.path == "string" && (!t.name || typeof t.name == "string");
}
function k7(e) {
    const t = e;
    return typeof t?.uri == "string" && (!t.name || typeof t.name == "string");
}
function HWe(e, t, n, r, s) {
    if (e.scheme !== r.scheme) return {
        name: n,
        uri: e.toString(!0)
    };
    let i = t ? void 0 : s.relativePath(r, e);
    if (i !== void 0) i.length === 0 ? i = "." : ee && (i = S7(i));
    else if (e.scheme === $.file) i = e.fsPath, ee && (i = S7(i));
    else if (s.isEqualAuthority(e.authority, r.authority)) i = e.path;
    else return {
        name: n,
        uri: e.toString(!0)
    };
    return {
        name: n,
        path: i
    };
}
function S7(e) {
    return e = e0(e), Mxe(e) || (e = Fl(e)), e;
}
function qWe(e, t, n) {
    const r = [], s = new Set, i = n.dirname(t);
    for (const a of e){
        let o;
        if (T7(a)) a.path && (o = n.resolvePath(i, a.path));
        else if (k7(a)) try {
            o = x.parse(a.uri), o.path[0] !== De.sep && (o = o.with({
                path: De.sep + o.path
            }));
        } catch (l) {
            console.warn(l);
        }
        if (o) {
            const l = n.getComparisonKey(o);
            if (!s.has(l)) {
                s.add(l);
                const d = a.name || n.basenameOrAuthority(o);
                r.push(new K6({
                    uri: o,
                    name: d,
                    index: r.length
                }, a));
            }
        }
    }
    return r;
}
var lo, tS;
export { Cd, H6, HWe, Ic, Mxe, S7, T7, ia, io, jWe, k7, lo, qWe, qp, tS };
var __wakaru_Pc_initialized = false;
export function Pc() {
if (__wakaru_Pc_initialized) return;
__wakaru_Pc_initialized = true;
"use strict";
h(), se(), Ys(), j(), $e(), Ce(), Ft(), gn(), Ne(), Hp(), Ta(), Ye(), ne(), te(), Rc(), _7(), bn(), eS(), BI(), lo = Q("workspacesManagementMainService"), tS = class extends J {
    constructor(e, t, n, r, s){
        super(), this.environmentMainService = e, this.logService = t, this.userDataProfilesMainService = n, this.backupMainService = r, this.dialogMainService = s, this._onDidDeleteUntitledWorkspace = this._register(new N), this.onDidDeleteUntitledWorkspace = this._onDidDeleteUntitledWorkspace.event, this._onDidEnterWorkspace = this._register(new N), this.onDidEnterWorkspace = this._onDidEnterWorkspace.event, this.untitledWorkspaces = [], this.untitledWorkspacesHome = this.environmentMainService.untitledWorkspacesHome;
    }
    async initialize() {
        this.untitledWorkspaces = [];
        try {
            const e = (await ie.readdir(this.untitledWorkspacesHome.with({
                scheme: $.file
            }).fsPath)).map((t)=>Ae(this.untitledWorkspacesHome, t, gC));
            for (const t of e){
                const n = Ic(t), r = await this.resolveLocalWorkspace(t);
                r ? this.untitledWorkspaces.push({
                    workspace: n,
                    remoteAuthority: r.remoteAuthority
                }) : await this.deleteUntitledWorkspace(n);
            }
        } catch (e) {
            e.code !== "ENOENT" && this.logService.warn(`Unable to read folders in ${this.untitledWorkspacesHome} (${e}).`);
        }
    }
    resolveLocalWorkspace(e) {
        return this.doResolveLocalWorkspace(e, (t)=>JI.promises.readFile(t, "utf8"));
    }
    doResolveLocalWorkspace(e, t) {
        if (this.isWorkspacePath(e) && e.scheme === $.file) try {
            const n = t(e.fsPath);
            return n instanceof Promise ? n.then((r)=>this.doResolveWorkspace(e, r), (r)=>{}) : this.doResolveWorkspace(e, n);
        } catch  {
            return;
        }
    }
    isWorkspacePath(e) {
        return H6(e, this.environmentMainService) || io(e);
    }
    doResolveWorkspace(e, t) {
        try {
            const n = this.doParseStoredWorkspace(e, t), r = Ic(e);
            return {
                id: r.id,
                configPath: r.configPath,
                folders: qWe(n.folders, r.configPath, St),
                remoteAuthority: n.remoteAuthority,
                transient: n.transient
            };
        } catch (n) {
            this.logService.warn(n.toString());
        }
    }
    doParseStoredWorkspace(e, t) {
        const n = ia(t);
        if (n && Array.isArray(n.folders)) n.folders = n.folders.filter((r)=>jWe(r));
        else throw new Error(`${e.toString(!0)} looks like an invalid workspace file.`);
        return n;
    }
    async createUntitledWorkspace(e, t) {
        const { workspace: n, storedWorkspace: r } = this.newUntitledWorkspace(e, t), s = n.configPath.fsPath;
        return await JI.promises.mkdir(st(s), {
            recursive: !0
        }), await ie.writeFile(s, JSON.stringify(r, null, "	")), this.untitledWorkspaces.push({
            workspace: n,
            remoteAuthority: t
        }), n;
    }
    newUntitledWorkspace(e = [], t) {
        const n = (Date.now() + Math.round(Math.random() * 1e3)).toString(), r = Ae(this.untitledWorkspacesHome, n), s = Ae(r, gC), i = [];
        for (const a of e)i.push(HWe(a.uri, !0, a.name, r, St));
        return {
            workspace: Ic(s),
            storedWorkspace: {
                folders: i,
                remoteAuthority: t
            }
        };
    }
    async getWorkspaceIdentifier(e) {
        return Ic(e);
    }
    async getSingleFolderWorkspaceIdentifier(e) {
        if (e.scheme !== $.file) return qp(e);
        try {
            const t = await JI.promises.stat(e.fsPath);
            return qp(e, t);
        } catch  {
            return;
        }
    }
    isUntitledWorkspace(e) {
        return H6(e.configPath, this.environmentMainService);
    }
    async deleteUntitledWorkspace(e) {
        this.isUntitledWorkspace(e) && (await this.doDeleteUntitledWorkspace(e), this.userDataProfilesMainService.unsetWorkspace(e), this._onDidDeleteUntitledWorkspace.fire(e));
    }
    async doDeleteUntitledWorkspace(e) {
        const t = cs(e.configPath);
        try {
            await ie.rm(st(t));
            const n = L(this.environmentMainService.workspaceStorageHome.with({
                scheme: $.file
            }).fsPath, e.id);
            await ie.exists(n) && await ie.writeFile(L(n, "obsolete"), ""), this.untitledWorkspaces = this.untitledWorkspaces.filter((r)=>r.workspace.id !== e.id);
        } catch (n) {
            this.logService.warn(`Unable to delete untitled workspace ${t} (${n}).`);
        }
    }
    getUntitledWorkspaces() {
        return this.untitledWorkspaces;
    }
    async enterWorkspace(e, t, n) {
        if (!e || !e.win || !e.isReady || !await this.isValidTargetWorkspacePath(e, t, n)) return;
        const s = await this.doEnterWorkspace(e, Ic(n));
        if (s) return this._onDidEnterWorkspace.fire({
            window: e,
            workspace: s.workspace
        }), s;
    }
    async isValidTargetWorkspacePath(e, t, n) {
        return n ? rr(e.openedWorkspace) && St.isEqual(e.openedWorkspace.configPath, n) ? !1 : Cd(t, n) ? (await this.dialogMainService.showMessageBox({
            type: "info",
            buttons: [
                E(2703, null)
            ],
            message: E(2704, null, Mi(n)),
            detail: E(2705, null)
        }, QWe.BrowserWindow.getFocusedWindow() ?? void 0), !1) : !0 : !0;
    }
    async doEnterWorkspace(e, t) {
        if (!e.config) return;
        e.focus();
        let n;
        return e.config.extensionDevelopmentPath || (e.config.backupPath ? n = await this.backupMainService.registerWorkspaceBackup({
            workspace: t,
            remoteAuthority: e.remoteAuthority
        }, e.config.backupPath) : n = this.backupMainService.registerWorkspaceBackup({
            workspace: t,
            remoteAuthority: e.remoteAuthority
        })), rr(e.openedWorkspace) && this.isUntitledWorkspace(e.openedWorkspace) && await this.deleteUntitledWorkspace(e.openedWorkspace), e.config.workspace = t, e.config.backupPath = n, {
            workspace: t,
            backupPath: n
        };
    }
}, tS = B([
    w(0, qe),
    w(1, Z),
    w(2, Wi),
    w(3, Rd),
    w(4, ci)
], tS);

}
