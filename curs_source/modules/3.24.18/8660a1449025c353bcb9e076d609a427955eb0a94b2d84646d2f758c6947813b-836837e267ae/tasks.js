import { At, D, Yo } from "./Iwo.js";
import { gs, yt } from "./codicons.js";
import { Hi, cn } from "./contextkey.js";
import { b_ } from "./iconRegistry.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { Aa, Lr } from "./resources.js";
import { H9e, fRi } from "./taskDefinitionRegistry.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fp, qa } from "./ze.js";
var TVe, vRi, nps, Ble, Elt, Ilt, _Ri, RMe, xlt, bTe, ips, uF, EVe, YO, d0, j2n, lIt, rps, bRi, ex, UX, R$, yTe, P$, mye, kDg, Wx, OA, yRi, Alt, U_l, j_l;
export { Alt, Ble, EVe, Elt, Ilt, OA, P$, R$, RMe, TVe, UX, U_l, Wx, YO, _Ri, bRi, bTe, d0, ex, ips, j2n, j_l, kDg, lIt, mye, nps, rps, uF, vRi, xlt, yRi, yTe };
var __wakaru_W9e_initialized = false;
export function W9e() {
if (__wakaru_W9e_initialized) return;
__wakaru_W9e_initialized = true;
"use strict";
E(), Bt(), To(), Lr(), cp(), Hi(), fRi(), gs(), b_(), TVe = "settings", vRi = new cn("taskRunning", !1, D(10174, null)), nps = new cn("taskTerminalActive", !1, D(10175, null)), Ble = At(10178, "Tasks"), Elt = ((t)=>(t[t.Escape = 1] = "Escape", t[t.Strong = 2] = "Strong", t[t.Weak = 3] = "Weak", t))(Elt || {}), Ilt = "$customized", ((t)=>{
    function e(n) {
        if (!n) return 2;
        switch(n.toLowerCase()){
            case "escape":
                return 1;
            case "strong":
                return 2;
            case "weak":
                return 3;
            default:
                return 2;
        }
    }
    t.from = e;
})(Elt || (Elt = {})), ((t)=>{
    t.defaults = {
        cwd: "${workspaceFolder}"
    };
})(_Ri || (_Ri = {})), RMe = ((t)=>(t[t.Always = 1] = "Always", t[t.Silent = 2] = "Silent", t[t.Never = 3] = "Never", t))(RMe || {}), ((t)=>{
    function e(n) {
        switch(n.toLowerCase()){
            case "always":
                return 1;
            case "silent":
                return 2;
            case "never":
                return 3;
            default:
                return 1;
        }
    }
    t.fromString = e;
})(RMe || (RMe = {})), xlt = ((t)=>(t[t.Never = 1] = "Never", t[t.OnProblem = 2] = "OnProblem", t[t.Always = 3] = "Always", t))(xlt || {}), ((t)=>{
    function e(n) {
        switch(n.toLowerCase()){
            case "always":
                return 3;
            case "never":
                return 1;
            case "onproblem":
                return 2;
            default:
                return 2;
        }
    }
    t.fromString = e;
})(xlt || (xlt = {})), bTe = ((t)=>(t[t.Shared = 1] = "Shared", t[t.Dedicated = 2] = "Dedicated", t[t.New = 3] = "New", t))(bTe || {}), ((t)=>{
    function e(n) {
        switch(n.toLowerCase()){
            case "shared":
                return 1;
            case "dedicated":
                return 2;
            case "new":
                return 3;
            default:
                return 1;
        }
    }
    t.fromString = e;
})(bTe || (bTe = {})), ((t)=>{
    t.defaults = {
        echo: !0,
        reveal: 1,
        revealProblems: 1,
        focus: !1,
        panel: 1,
        showReuseMessage: !0,
        clear: !1
    };
})(ips || (ips = {})), uF = ((t)=>(t[t.Shell = 1] = "Shell", t[t.Process = 2] = "Process", t[t.CustomExecution = 3] = "CustomExecution", t))(uF || {}), ((t)=>{
    function e(i) {
        switch(i.toLowerCase()){
            case "shell":
                return 1;
            case "process":
                return 2;
            case "customExecution":
                return 3;
            default:
                return 2;
        }
    }
    t.fromString = e;
    function n(i) {
        switch(i){
            case 1:
                return "shell";
            case 2:
                return "process";
            case 3:
                return "customExecution";
            default:
                return "process";
        }
    }
    t.toString = n;
})(uF || (uF = {})), ((t)=>{
    function e(n) {
        return Yo(n) ? n : n.value;
    }
    t.value = e;
})(EVe || (EVe = {})), ((t)=>{
    t.Clean = {
        _id: "clean",
        isDefault: !1
    }, t.Build = {
        _id: "build",
        isDefault: !1
    }, t.Rebuild = {
        _id: "rebuild",
        isDefault: !1
    }, t.Test = {
        _id: "test",
        isDefault: !1
    };
    function e(i) {
        return i === t.Clean._id || i === t.Build._id || i === t.Rebuild._id || i === t.Test._id;
    }
    t.is = e;
    function n(i) {
        if (i !== void 0) return Yo(i) ? e(i) ? {
            _id: i,
            isDefault: !1
        } : void 0 : i;
    }
    t.from = n;
})(YO || (YO = {})), ((t)=>{
    t.Workspace = "workspace", t.Extension = "extension", t.InMemory = "inMemory", t.WorkspaceFile = "workspaceFile", t.User = "user";
    function e(n) {
        switch(n){
            case t.User:
                return 2;
            case t.WorkspaceFile:
                return 5;
            default:
                return 6;
        }
    }
    t.toConfigurationTarget = e;
})(d0 || (d0 = {})), j2n = ((t)=>(t.parallel = "parallel", t.sequence = "sequence", t))(j2n || {}), lIt = ((t)=>(t[t.default = 1] = "default", t[t.folderOpen = 2] = "folderOpen", t))(lIt || {}), ((t)=>{
    t.defaults = {
        reevaluateOnRerun: !0,
        runOn: 1,
        instanceLimit: 1
    };
})(rps || (rps = {})), bRi = class {
    constructor(t, e, n, i, r, s){
        this._label = "", this._id = t, e && (this._label = e), n && (this.type = n), this.runOptions = i, this.configurationProperties = r, this._source = s;
    }
    getDefinition(t) {}
    getMapKey() {
        return this._id;
    }
    getKey() {}
    getCommonTaskId() {
        const t = {
            folder: this.getFolderId(),
            id: this._id
        };
        return JSON.stringify(t);
    }
    clone() {
        return this.fromObject(Object.assign({}, this));
    }
    getWorkspaceFolder() {}
    getWorkspaceFileName() {}
    getTelemetryKind() {
        return "unknown";
    }
    matches(t, e = !1) {
        if (t === void 0) return !1;
        if (Yo(t)) return t === this._label || t === this.configurationProperties.identifier || e && t === this._id;
        const n = this.getDefinition(!0);
        return n !== void 0 && n._key === t._key;
    }
    getQualifiedLabel() {
        const t = this.getWorkspaceFolder();
        return t ? `${this._label} (${t.name})` : this._label;
    }
    getTaskExecution() {
        return {
            id: this._id,
            task: this
        };
    }
    addTaskLoadMessages(t) {
        this._taskLoadMessages === void 0 && (this._taskLoadMessages = []), t && (this._taskLoadMessages = this._taskLoadMessages.concat(t));
    }
    get taskLoadMessages() {
        return this._taskLoadMessages;
    }
}, ex = class DXs extends bRi {
    constructor(e, n, i, r, s, o, a, l){
        super(e, i, void 0, a, l, n), this.command = {}, this._source = n, this.hasDefinedMatchers = o, s && (this.command = s);
    }
    clone() {
        return new DXs(this._id, this._source, this._label, this.type, this.command, this.hasDefinedMatchers, this.runOptions, this.configurationProperties);
    }
    customizes() {
        if (this._source && this._source.customizes) return this._source.customizes;
    }
    getDefinition(e = !1) {
        if (e && this._source.customizes !== void 0) return this._source.customizes;
        {
            let n;
            switch(this.command ? this.command.runtime : void 0){
                case 1:
                    n = "shell";
                    break;
                case 2:
                    n = "process";
                    break;
                case 3:
                    n = "customExecution";
                    break;
                case void 0:
                    n = "$composite";
                    break;
                default:
                    throw new Error("Unexpected task runtime");
            }
            return {
                type: n,
                _key: this._id,
                id: this._id
            };
        }
    }
    static is(e) {
        return e instanceof DXs;
    }
    getMapKey() {
        const e = this._source.config.workspaceFolder;
        return e ? `${e.uri.toString()}|${this._id}|${this.instance}` : `${this._id}|${this.instance}`;
    }
    getFolderId() {
        return this._source.kind === d0.User ? TVe : this._source.config.workspaceFolder?.uri.toString();
    }
    getCommonTaskId() {
        return this._source.customizes ? super.getCommonTaskId() : this.getKey() ?? super.getCommonTaskId();
    }
    getKey() {
        const e = this.getFolderId();
        if (!e) return;
        let n = this.configurationProperties.identifier;
        return this._source.kind !== d0.Workspace && (n += this._source.kind), JSON.stringify({
            type: Ilt,
            folder: e,
            id: n
        });
    }
    getWorkspaceFolder() {
        return this._source.config.workspaceFolder;
    }
    getWorkspaceFileName() {
        return this._source.config.workspace && this._source.config.workspace.configuration ? Aa(this._source.config.workspace.configuration) : void 0;
    }
    getTelemetryKind() {
        return this._source.customizes ? "workspace>extension" : "workspace";
    }
    fromObject(e) {
        return new DXs(e._id, e._source, e._label, e.type, e.command, e.hasDefinedMatchers, e.runOptions, e.configurationProperties);
    }
}, UX = class APb extends bRi {
    constructor(e, n, i, r, s, o, a){
        super(e, i, r, o, a, n), this._source = n, this.configures = s;
    }
    static is(e) {
        return e instanceof APb;
    }
    fromObject(e) {
        return e;
    }
    getDefinition() {
        return this.configures;
    }
    getWorkspaceFileName() {
        return this._source.config.workspace && this._source.config.workspace.configuration ? Aa(this._source.config.workspace.configuration) : void 0;
    }
    getWorkspaceFolder() {
        return this._source.config.workspaceFolder;
    }
    getFolderId() {
        return this._source.kind === d0.User ? TVe : this._source.config.workspaceFolder?.uri.toString();
    }
    getKey() {
        const e = this.getFolderId();
        if (!e) return;
        let n = this.configurationProperties.identifier;
        return this._source.kind !== d0.Workspace && (n += this._source.kind), JSON.stringify({
            type: Ilt,
            folder: e,
            id: n
        });
    }
}, R$ = class NXs extends bRi {
    constructor(e, n, i, r, s, o, a, l, c){
        super(e, i, r, l, c, n), this.defines = s, this.hasDefinedMatchers = a, this.command = o, this.icon = c.icon, this.hide = c.hide;
    }
    clone() {
        return new NXs(this._id, this._source, this._label, this.type, this.defines, this.command, this.hasDefinedMatchers, this.runOptions, this.configurationProperties);
    }
    getDefinition() {
        return this.defines;
    }
    static is(e) {
        return e instanceof NXs;
    }
    getMapKey() {
        const e = this._source.workspaceFolder;
        return e ? `${this._source.scope.toString()}|${e.uri.toString()}|${this._id}|${this.instance}` : `${this._source.scope.toString()}|${this._id}|${this.instance}`;
    }
    getFolderId() {
        if (this._source.scope === 3 && this._source.workspaceFolder) return this._source.workspaceFolder.uri.toString();
    }
    getKey() {
        const e = {
            type: "contributed",
            scope: this._source.scope,
            id: this._id
        };
        return e.folder = this.getFolderId(), JSON.stringify(e);
    }
    getWorkspaceFolder() {
        return this._source.workspaceFolder;
    }
    getTelemetryKind() {
        return "extension";
    }
    fromObject(e) {
        return new NXs(e._id, e._source, e._label, e.type, e.defines, e.command, e.hasDefinedMatchers, e.runOptions, e.configurationProperties);
    }
}, yTe = class LXs extends bRi {
    constructor(e, n, i, r, s, o){
        super(e, i, r, s, o, n), this._source = n;
    }
    clone() {
        return new LXs(this._id, this._source, this._label, this.type, this.runOptions, this.configurationProperties);
    }
    static is(e) {
        return e instanceof LXs;
    }
    getTelemetryKind() {
        return "composite";
    }
    getMapKey() {
        return `${this._id}|${this.instance}`;
    }
    getFolderId() {}
    fromObject(e) {
        return new LXs(e._id, e._source, e._label, e.type, e.runOptions, e.configurationProperties);
    }
}, P$ = ((t)=>(t[t.Process = 1] = "Process", t[t.Terminal = 2] = "Terminal", t))(P$ || {}), ((t)=>{
    t._default = 2;
})(P$ || (P$ = {})), mye = ((t)=>(t[t.V0_1_0 = 1] = "V0_1_0", t[t.V2_0_0 = 2] = "V2_0_0", t))(mye || {}), kDg = class {
    constructor(t){
        this._order = new Map;
        for(let e = 0; e < t.length; e++)this._order.set(t[e].uri.toString(), e);
    }
    compare(t, e) {
        const n = t.getWorkspaceFolder(), i = e.getWorkspaceFolder();
        if (n && i) {
            let r = this._order.get(n.uri.toString());
            r = r === void 0 ? 0 : r + 1;
            let s = this._order.get(i.uri.toString());
            return s = s === void 0 ? 0 : s + 1, r === s ? t._label.localeCompare(e._label) : r - s;
        } else return !n && i ? -1 : n && !i ? 1 : 0;
    }
}, Wx = ((t)=>(t.Changed = "changed", t.ProcessStarted = "processStarted", t.ProcessEnded = "processEnded", t.Terminated = "terminated", t.Start = "start", t.AcquiredInput = "acquiredInput", t.DependsOnStarted = "dependsOnStarted", t.Active = "active", t.Inactive = "inactive", t.End = "end", t.ProblemMatcherStarted = "problemMatcherStarted", t.ProblemMatcherEnded = "problemMatcherEnded", t.ProblemMatcherFoundErrors = "problemMatcherFoundErrors", t))(Wx || {}), ((t)=>{
    function e(l) {
        return {
            taskId: l._id,
            taskName: l.configurationProperties.name,
            runType: l.configurationProperties.isBackground ? "background" : "singleRun",
            group: l.configurationProperties.group,
            __task: l
        };
    }
    function n(l, c, u) {
        return {
            ...e(l),
            kind: "start",
            terminalId: c,
            resolvedVariables: u
        };
    }
    t.start = n;
    function i(l, c, u) {
        return {
            ...e(l),
            kind: "processStarted",
            terminalId: c,
            processId: u
        };
    }
    t.processStarted = i;
    function r(l, c, u) {
        return {
            ...e(l),
            kind: "processEnded",
            terminalId: c,
            exitCode: u
        };
    }
    t.processEnded = r;
    function s(l, c, u) {
        return {
            ...e(l),
            kind: "terminated",
            exitReason: u,
            terminalId: c
        };
    }
    t.terminated = s;
    function o(l, c, u) {
        return {
            ...e(c),
            kind: l,
            terminalId: u
        };
    }
    t.general = o;
    function a() {
        return {
            kind: "changed"
        };
    }
    t.changed = a;
})(OA || (OA = {})), ((t)=>{
    function e(i) {
        const r = Object.keys(i).sort();
        let s = "";
        for (const o of r){
            let a = i[o];
            a instanceof Object ? a = e(a) : typeof a == "string" && (a = a.replace(/,/g, ",,")), s += o + "," + a + ",";
        }
        return s;
    }
    function n(i) {
        const s = {
            _key: e(i),
            type: i.taskType
        };
        return Object.assign(s, i), s;
    }
    t.create = n;
})(yRi || (yRi = {})), ((t)=>{
    function e(n, i) {
        const r = H9e.get(n.type);
        if (r === void 0) {
            const l = fp(n);
            return delete l._key, yRi.create(l);
        }
        const s = Object.create(null);
        s.type = r.taskType;
        const o = new Set;
        r.required.forEach((l)=>o.add(l));
        const a = r.properties;
        for (const l of Object.keys(a)){
            const c = n[l];
            if (c != null) s[l] = c;
            else if (o.has(l)) {
                const u = a[l];
                if (u.default !== void 0) s[l] = fp(u.default);
                else switch(u.type){
                    case "boolean":
                        s[l] = !1;
                        break;
                    case "number":
                    case "integer":
                        s[l] = 0;
                        break;
                    case "string":
                        s[l] = "";
                        break;
                    default:
                        i.error(D(10176, null, JSON.stringify(n, void 0, 0), l));
                        return;
                }
            }
        }
        return yRi.create(s);
    }
    t.createTaskIdentifier = e;
})(Alt || (Alt = {})), U_l = qa("rerun-task", yt.refresh, D(10177, null)), j_l = "workbench.action.tasks.rerunForActiveTerminal";

}
