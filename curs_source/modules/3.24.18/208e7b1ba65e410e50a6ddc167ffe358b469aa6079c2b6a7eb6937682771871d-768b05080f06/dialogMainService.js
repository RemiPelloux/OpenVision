import { Gl, le } from "./async.js";
import { E } from "./configurationRegistry.js";
import { o7 } from "./dialogs.js";
import { O, ge, se } from "./event.js";
import { Qa } from "./hash.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { ha } from "./labels.js";
import { J, j, yr } from "./lifecycle.js";
import { Xa, Z, te } from "./log.js";
import { Ne } from "./nls.js";
import { D3, O3, dT } from "./normalization.js";
import { Ce, L, _t, st } from "./path.js";
import { gn, ie } from "./pfs.js";
import { Fe, ee, oe, q } from "./platform.js";
import { Tt, et } from "./productService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ws } from "./utilityProcess.js";
import { Y6, bn } from "./workspace.js";
import Cc from "electron";
function P3(e, t) {
    const n = e.replace(/\(&&\w\)|&&/g, "");
    if (t) return n;
    if (q) return {
        withMnemonic: n,
        withoutMnemonic: n
    };
    let r;
    return ee ? r = e.replace(/&&|&/g, (s)=>s === "&" ? "&&" : "&") : r = e.replace(/&&/g, "_"), {
        withMnemonic: r,
        withoutMnemonic: n
    };
}
function jl(e) {
    return qxe(e, "NFC", D3);
}
function qxe(e, t, n) {
    if (!e) return e;
    const r = n.get(e);
    if (r) return r;
    let s;
    return O3.test(e) ? s = e.normalize(t) : s = e, n.set(e, s), s;
}
function a7(e, t) {
    const n = Ws(e);
    let r = (n.buttons ?? []).map((o)=>P3(o).withMnemonic), s = (e.buttons || []).map((o, l)=>l), i = 0, a = n.cancelId ?? r.length - 1;
    if (r.length > 1) {
        const o = typeof a == "number" ? r[a] : void 0;
        if (Fe || q) {
            if (typeof o == "string" && r.length > 1 && a !== 1) {
                r.splice(a, 1), r.splice(1, 0, o);
                const l = s[a];
                s.splice(a, 1), s.splice(1, 0, l), a = 1;
            }
            Fe && r.length > 1 && (r = r.reverse(), s = s.reverse(), i = r.length - 1, typeof o == "string" && (a = i - 1));
        } else if (ee && typeof o == "string" && r.length > 1 && a !== r.length - 1) {
            r.splice(a, 1), r.push(o);
            const l = s[a];
            s.splice(a, 1), s.push(l), a = r.length - 1;
        }
    }
    return n.buttons = r, n.defaultId = i, n.cancelId = a, n.noLink = !0, n.title = n.title || t.nameLong, {
        options: n,
        buttonIndeces: s
    };
}
async function c7(e, t) {
    let n = e;
    for(; !await t(n);){
        const r = st(n);
        if (r === n) return;
        n = r;
    }
    return n;
}
var ci, Hk;
export { Hk, P3, a7, c7, ci, jl, qxe };
var __wakaru_Ta_initialized = false;
export function Ta() {
if (__wakaru_Ta_initialized) return;
__wakaru_Ta_initialized = true;
"use strict";
h(), le(), se(), Qa(), ha(), j(), dT(), Ce(), oe(), gn(), Ne(), o7(), ne(), te(), Tt(), bn(), ci = Q("dialogMainService"), Hk = class {
    constructor(e, t){
        this.logService = e, this.productService = t, this.windowFileDialogLocks = new Map, this.windowDialogQueues = new Map, this.noWindowDialogueQueue = new Gl;
    }
    pickFileFolder(e, t) {
        return this.doPick({
            ...e,
            pickFolders: !0,
            pickFiles: !0,
            title: E(1855, null)
        }, t);
    }
    pickFolder(e, t) {
        return this.doPick({
            ...e,
            pickFolders: !0,
            title: E(1856, null)
        }, t);
    }
    pickFile(e, t) {
        return this.doPick({
            ...e,
            pickFiles: !0,
            title: E(1857, null)
        }, t);
    }
    pickWorkspace(e, t) {
        const n = E(1858, null), r = P3(E(1859, null)).withMnemonic, s = Y6;
        return this.doPick({
            ...e,
            pickFiles: !0,
            title: n,
            filters: s,
            buttonLabel: r
        }, t);
    }
    async doPick(e, t) {
        const n = {
            title: e.title,
            buttonLabel: e.buttonLabel,
            filters: e.filters,
            defaultPath: e.defaultPath
        };
        (typeof e.pickFiles == "boolean" || typeof e.pickFolders == "boolean") && (n.properties = void 0, e.pickFiles && e.pickFolders && (n.properties = [
            "multiSelections",
            "openDirectory",
            "openFile",
            "createDirectory"
        ])), n.properties || (n.properties = [
            "multiSelections",
            e.pickFolders ? "openDirectory" : "openFile",
            "createDirectory"
        ]), q && n.properties.push("treatPackageAsDirectory");
        const r = await this.showOpenDialog(n, (t || Cc.BrowserWindow.getFocusedWindow()) ?? void 0);
        if (r && r.filePaths && r.filePaths.length > 0) return r.filePaths;
    }
    getWindowDialogQueue(e) {
        if (e) {
            const t = e.id;
            let n = this.windowDialogQueues.get(t);
            return n || (n = new Gl, this.windowDialogQueues.set(t, n), O.once(n.onDrained)(()=>this.windowDialogQueues.delete(t))), n;
        } else return this.noWindowDialogueQueue;
    }
    showMessageBox(e, t) {
        return this.getWindowDialogQueue(t).queue(async ()=>{
            const { options: n, buttonIndeces: r } = a7(e, this.productService);
            let s;
            return t ? s = await Cc.dialog.showMessageBox(t, n) : s = await Cc.dialog.showMessageBox(n), {
                response: r[s.response],
                checkboxChecked: s.checkboxChecked
            };
        });
    }
    async showSaveDialog(e, t) {
        if (e.defaultPath) {
            const r = await c7(st(e.defaultPath), (s)=>ie.exists(s));
            e.defaultPath = r ? L(r, _t(e.defaultPath)) : void 0;
        }
        const n = this.acquireFileDialogLock(e, t);
        if (!n) return this.logService.error("[DialogMainService]: file save dialog is already or will be showing for the window with the same configuration"), {
            canceled: !0,
            filePath: ""
        };
        try {
            return await this.getWindowDialogQueue(t).queue(async ()=>{
                let r;
                return t ? r = await Cc.dialog.showSaveDialog(t, e) : r = await Cc.dialog.showSaveDialog(e), r.filePath = this.normalizePath(r.filePath), r;
            });
        } finally{
            yr(n);
        }
    }
    normalizePath(e) {
        return e && q && (e = jl(e)), e;
    }
    normalizePaths(e) {
        return e.map((t)=>this.normalizePath(t));
    }
    async showOpenDialog(e, t) {
        e.defaultPath && (e.defaultPath = await c7(e.defaultPath, (r)=>ie.exists(r)));
        const n = this.acquireFileDialogLock(e, t);
        if (!n) return this.logService.error("[DialogMainService]: file open dialog is already or will be showing for the window with the same configuration"), {
            canceled: !0,
            filePaths: []
        };
        try {
            return await this.getWindowDialogQueue(t).queue(async ()=>{
                let r;
                return t ? r = await Cc.dialog.showOpenDialog(t, e) : r = await Cc.dialog.showOpenDialog(e), r.filePaths = this.normalizePaths(r.filePaths), r;
            });
        } finally{
            yr(n);
        }
    }
    acquireFileDialogLock(e, t) {
        if (!t) return J.None;
        this.logService.trace("[DialogMainService]: request to acquire file dialog lock", e);
        let n = this.windowFileDialogLocks.get(t.id);
        n || (n = new Set, this.windowFileDialogLocks.set(t.id, n));
        const r = Xa(e);
        if (!n.has(r)) return this.logService.trace("[DialogMainService]: new file dialog lock created", e), n.add(r), ge(()=>{
            this.logService.trace("[DialogMainService]: file dialog lock disposed", e), n?.delete(r), n?.size === 0 && this.windowFileDialogLocks.delete(t.id);
        });
    }
}, Hk = B([
    w(0, Z),
    w(1, et)
], Hk);

}
