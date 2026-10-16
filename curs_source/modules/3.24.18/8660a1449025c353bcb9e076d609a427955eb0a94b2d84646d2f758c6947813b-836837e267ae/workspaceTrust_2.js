import { Di, Gt, LOe, Pn, Qe, en, st, th, tt } from "./Iwo.js";
import { $l, HZn, bn, p_t, x0 } from "./SZu.js";
import { qn } from "./async.js";
import { or, yi } from "./configuration.js";
import { fo, ps } from "./environmentService.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { Q0n } from "./ipa.js";
import { a7, tL } from "./linkedList.js";
import { p9e, ume } from "./memento.js";
import { Ki, Ot } from "./network.js";
import { UM, w6 } from "./remoteAuthorityResolver.js";
import { epe } from "./remoteHosts.js";
import { Lr, Zvt } from "./resources.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, Re } from "./userDataProfile.js";
import { bqe } from "./virtualWorkspace.js";
import { Sr, yr } from "./workspace.js";
import { NCe, VM, Yqt, jx } from "./workspaceTrust.js";
import { oja } from "./yBp.js";
var uRi, w_l, nDg, dRi, $hs, C_l, iDg, T_l, rDg, Hhs, Whs, Ghs, sDg, oDg;
export { $hs, C_l, Ghs, Hhs, T_l, Whs, dRi, iDg, nDg, oDg, rDg, sDg, uRi, w_l };
var __wakaru_hRi_initialized = false;
export function hRi() {
if (__wakaru_hRi_initialized) return;
__wakaru_hRi_initialized = true;
"use strict";
E(), Gt(), Qe(), a7(), Ki(), fn(), or(), Rn(), UM(), epe(), bqe(), Zi(), Sr(), jx(), p9e(), fo(), Vp(), Lr(), Di(), ms(), qn(), uRi = "security.workspace.trust.enabled", w_l = "security.workspace.trust.startupPrompt", nDg = "security.workspace.trust.banner", dRi = "security.workspace.trust.untrustedFiles", $hs = "security.workspace.trust.emptyWindow", C_l = "extensions.supportUntrustedWorkspaces", iDg = "content.trust.model.key", T_l = "workspace.trust.startupPrompt.shown", rDg = class {
    constructor(t, e, n){
        this.originalWorkspace = t, this.canonicalFolderUris = e, this.canonicalConfiguration = n;
    }
    get folders() {
        return this.originalWorkspace.folders.map((t, e)=>({
                index: t.index,
                name: t.name,
                toResource: t.toResource,
                uri: this.canonicalFolderUris[e]
            }));
    }
    get transient() {
        return this.originalWorkspace.transient;
    }
    get configuration() {
        return this.canonicalConfiguration ?? this.originalWorkspace.configuration;
    }
    get id() {
        return this.originalWorkspace.id;
    }
}, Hhs = class extends st {
    constructor(t, e){
        super(), this.configurationService = t, this.environmentService = e;
    }
    isWorkspaceTrustEnabled() {
        return this.environmentService.disableWorkspaceTrust ? !1 : !!this.configurationService.getValue(uRi);
    }
}, Hhs = Re([
    F(0, yi),
    F(1, ps)
], Hhs), Whs = class extends st {
    constructor(t, e, n, i, r, s, o, a){
        super(), this.configurationService = t, this.remoteAuthorityResolverService = e, this.storageService = n, this.uriIdentityService = i, this.environmentService = r, this.workspaceService = s, this.workspaceTrustEnablementService = o, this.fileService = a, this.storageKey = iDg, this._onDidChangeTrust = this._register(new tt), this.onDidChangeTrust = this._onDidChangeTrust.event, this._onDidChangeTrustedFolders = this._register(new tt), this.onDidChangeTrustedFolders = this._onDidChangeTrustedFolders.event, this._canonicalStartupFiles = [], this._canonicalUrisResolved = !1, this._canonicalWorkspace = this.workspaceService.getWorkspace(), { promise: this._workspaceResolvedPromise, resolve: this._workspaceResolvedPromiseResolve } = LOe(), { promise: this._workspaceTrustInitializedPromise, resolve: this._workspaceTrustInitializedPromiseResolve } = LOe(), this._storedTrustState = new oDg(th && this.isEmptyWorkspace() ? void 0 : this.storageService), this._trustTransitionManager = this._register(new sDg), this._trustStateInfo = this.loadTrustInfo(), this._isTrusted = this.calculateWorkspaceTrust(), this.initializeWorkspaceTrust(), this.registerListeners();
    }
    initializeWorkspaceTrust() {
        this.resolveCanonicalUris().then(async ()=>{
            this._canonicalUrisResolved = !0, await this.updateWorkspaceTrust();
        }).finally(()=>{
            this._workspaceResolvedPromiseResolve(), this.environmentService.remoteAuthority || this._workspaceTrustInitializedPromiseResolve();
        }), this.environmentService.remoteAuthority && this.remoteAuthorityResolverService.resolveAuthority(this.environmentService.remoteAuthority).then(async (t)=>{
            this._remoteAuthority = t, await this.fileService.activateProvider(Ot.vscodeRemote), await this.updateWorkspaceTrust();
        }).finally(()=>{
            this._workspaceTrustInitializedPromiseResolve();
        }), this.isEmptyWorkspace() && this._workspaceTrustInitializedPromise.then(()=>{
            this._storedTrustState.isEmptyWorkspaceTrusted === void 0 && (this._storedTrustState.isEmptyWorkspaceTrusted = this.isWorkspaceTrusted());
        });
    }
    registerListeners() {
        this._register(this.workspaceService.onDidChangeWorkspaceFolders(async ()=>await this.updateWorkspaceTrust())), this._register(this.storageService.onDidChangeValue(-1, this.storageKey, this._store)(async ()=>{
            JSON.stringify(this._trustStateInfo) !== JSON.stringify(this.loadTrustInfo()) && (this._trustStateInfo = this.loadTrustInfo(), this._onDidChangeTrustedFolders.fire(), await this.updateWorkspaceTrust());
        }));
    }
    async getCanonicalUri(t) {
        let e = t;
        if (this.environmentService.remoteAuthority && t.scheme === Ot.vscodeRemote) e = await this.remoteAuthorityResolverService.getCanonicalURI(t);
        else if (t.scheme === "vscode-vfs") {
            const n = t.authority.indexOf("+");
            n !== -1 && (e = t.with({
                authority: t.authority.substr(0, n)
            }));
        }
        return e.with({
            query: null,
            fragment: null
        });
    }
    async resolveCanonicalUris() {
        const t = [];
        if (this.environmentService.filesToOpenOrCreate && t.push(...this.environmentService.filesToOpenOrCreate), this.environmentService.filesToDiff && t.push(...this.environmentService.filesToDiff), this.environmentService.filesToMerge && t.push(...this.environmentService.filesToMerge), t.length) {
            const r = t.filter((o)=>!!o.fileUri).map((o)=>o.fileUri), s = await Promise.all(r.map((o)=>this.getCanonicalUri(o)));
            this._canonicalStartupFiles.push(...s.filter((o)=>this._canonicalStartupFiles.every((a)=>!this.uriIdentityService.extUri.isEqual(o, a))));
        }
        const e = this.workspaceService.getWorkspace().folders.map((r)=>r.uri), n = await Promise.all(e.map((r)=>this.getCanonicalUri(r)));
        let i = this.workspaceService.getWorkspace().configuration;
        i && HZn(i, this.environmentService) && (i = await this.getCanonicalUri(i)), this._canonicalWorkspace = new rDg(this.workspaceService.getWorkspace(), n, i);
    }
    loadTrustInfo() {
        const t = this.storageService.get(this.storageKey, -1);
        let e;
        try {
            t && (e = JSON.parse(t));
        } catch  {}
        return e || (e = {
            uriTrustInfo: []
        }), e.uriTrustInfo || (e.uriTrustInfo = []), e.uriTrustInfo = e.uriTrustInfo.map((n)=>({
                uri: rt.revive(n.uri),
                trusted: n.trusted
            })), e.uriTrustInfo = e.uriTrustInfo.filter((n)=>n.trusted), e;
    }
    async saveTrustInfo() {
        this.storageService.store(this.storageKey, JSON.stringify(this._trustStateInfo), -1, 1), this._onDidChangeTrustedFolders.fire(), await this.updateWorkspaceTrust();
    }
    getWorkspaceUris() {
        const t = this._canonicalWorkspace.folders.map((n)=>n.uri), e = this._canonicalWorkspace.configuration;
        return e && HZn(e, this.environmentService) && t.push(e), t;
    }
    calculateWorkspaceTrust() {
        return this.workspaceTrustEnablementService.isWorkspaceTrustEnabled() ? this._canonicalUrisResolved ? this.environmentService.remoteAuthority && this._remoteAuthority?.options?.isTrusted ? this._remoteAuthority.options.isTrusted : this.isEmptyWorkspace() ? this._storedTrustState.isEmptyWorkspaceTrusted !== void 0 ? this._storedTrustState.isEmptyWorkspaceTrusted : this._canonicalStartupFiles.length ? this.getUrisTrust(this._canonicalStartupFiles) : !!this.configurationService.getValue($hs) : this.getUrisTrust(this.getWorkspaceUris()) : !1 : !0;
    }
    async updateWorkspaceTrust(t) {
        this.workspaceTrustEnablementService.isWorkspaceTrustEnabled() && (t === void 0 && (await this.resolveCanonicalUris(), t = this.calculateWorkspaceTrust()), this.isWorkspaceTrusted() !== t && (this.isTrusted = t, await this._trustTransitionManager.participate(t), this._onDidChangeTrust.fire(t)));
    }
    getUrisTrust(t) {
        let e = !0;
        for (const n of t){
            const { trusted: i } = this.doGetUriTrustInfo(n);
            if (!i) return e = i, e;
        }
        return e;
    }
    doGetUriTrustInfo(t) {
        if (!this.workspaceTrustEnablementService.isWorkspaceTrustEnabled()) return {
            trusted: !0,
            uri: t
        };
        if (this.isTrustedVirtualResource(t)) return {
            trusted: !0,
            uri: t
        };
        if (this.isTrustedByRemote(t)) return {
            trusted: !0,
            uri: t
        };
        let e = !1, n = -1, i = t;
        for (const r of this._trustStateInfo.uriTrustInfo)if (this.uriIdentityService.extUri.isEqualOrParent(t, r.uri)) {
            const s = r.uri.fsPath;
            s.length > n && (n = s.length, e = r.trusted, i = r.uri);
        }
        return {
            trusted: e,
            uri: i
        };
    }
    async doSetUrisTrust(t, e) {
        let n = !1;
        for (const i of t)if (e) {
            if (this.isTrustedVirtualResource(i) || this.isTrustedByRemote(i)) continue;
            this._trustStateInfo.uriTrustInfo.find((s)=>this.uriIdentityService.extUri.isEqual(s.uri, i)) || (this._trustStateInfo.uriTrustInfo.push({
                uri: i,
                trusted: !0
            }), n = !0);
        } else {
            const r = this._trustStateInfo.uriTrustInfo.length;
            this._trustStateInfo.uriTrustInfo = this._trustStateInfo.uriTrustInfo.filter((s)=>!this.uriIdentityService.extUri.isEqual(s.uri, i)), r !== this._trustStateInfo.uriTrustInfo.length && (n = !0);
        }
        n && await this.saveTrustInfo();
    }
    isEmptyWorkspace() {
        if (this.workspaceService.getWorkbenchState() === 1) return !0;
        const t = this.workspaceService.getWorkspace();
        return t ? p_t(this.workspaceService.getWorkspace()) && t.folders.length === 0 : !1;
    }
    isTrustedVirtualResource(t) {
        return oja(t) && t.scheme !== "vscode-vfs";
    }
    isTrustedByRemote(t) {
        return !this.environmentService.remoteAuthority || !this._remoteAuthority ? !1 : Zvt(Q0n(t), this._remoteAuthority.authority.authority) && !!this._remoteAuthority.options?.isTrusted;
    }
    set isTrusted(t) {
        this._isTrusted = t, t || (this._storedTrustState.acceptsOutOfWorkspaceFiles = !1), this.isEmptyWorkspace() && (this._storedTrustState.isEmptyWorkspaceTrusted = t);
    }
    get workspaceResolved() {
        return this._workspaceResolvedPromise;
    }
    get workspaceTrustInitialized() {
        return this._workspaceTrustInitializedPromise;
    }
    get acceptsOutOfWorkspaceFiles() {
        return this._storedTrustState.acceptsOutOfWorkspaceFiles;
    }
    set acceptsOutOfWorkspaceFiles(t) {
        this._storedTrustState.acceptsOutOfWorkspaceFiles = t;
    }
    isWorkspaceTrusted() {
        return this._isTrusted;
    }
    isWorkspaceTrustForced() {
        return !!(this.environmentService.remoteAuthority && this._remoteAuthority && this._remoteAuthority.options?.isTrusted !== void 0 || this.getWorkspaceUris().filter((e)=>!this.isTrustedVirtualResource(e)).length === 0);
    }
    canSetParentFolderTrust() {
        const t = x0(this._canonicalWorkspace);
        if (!$l(t) || t.uri.scheme !== Ot.file && t.uri.scheme !== Ot.vscodeRemote) return !1;
        const e = this.uriIdentityService.extUri.dirname(t.uri);
        return !this.uriIdentityService.extUri.isEqual(t.uri, e);
    }
    async setParentFolderTrust(t) {
        if (this.canSetParentFolderTrust()) {
            const e = x0(this._canonicalWorkspace).uri, n = this.uriIdentityService.extUri.dirname(e);
            await this.setUrisTrust([
                n
            ], t);
        }
    }
    canSetWorkspaceTrust() {
        if (this.environmentService.remoteAuthority && (!this._remoteAuthority || this._remoteAuthority.options?.isTrusted !== void 0)) return !1;
        if (this.isEmptyWorkspace()) return !0;
        if (this.getWorkspaceUris().filter((i)=>!this.isTrustedVirtualResource(i)).length === 0) return !1;
        if (!this.isWorkspaceTrusted()) return !0;
        const e = x0(this._canonicalWorkspace);
        if (!$l(e) || e.uri.scheme !== Ot.file && e.uri.scheme !== "vscode-vfs") return !1;
        const n = this.doGetUriTrustInfo(e.uri);
        if (!n.trusted || !this.uriIdentityService.extUri.isEqual(e.uri, n.uri)) return !1;
        if (this.canSetParentFolderTrust()) {
            const i = this.uriIdentityService.extUri.dirname(e.uri);
            if (this.doGetUriTrustInfo(i).trusted) return !1;
        }
        return !0;
    }
    async setWorkspaceTrust(t) {
        if (this.isEmptyWorkspace()) {
            await this.updateWorkspaceTrust(t);
            return;
        }
        const e = this.getWorkspaceUris();
        await this.setUrisTrust(e, t);
    }
    async getUriTrustInfo(t) {
        return this.workspaceTrustEnablementService.isWorkspaceTrustEnabled() ? this.isTrustedByRemote(t) ? {
            trusted: !0,
            uri: t
        } : this.doGetUriTrustInfo(await this.getCanonicalUri(t)) : {
            trusted: !0,
            uri: t
        };
    }
    async setUrisTrust(t, e) {
        this.doSetUrisTrust(await Promise.all(t.map((n)=>this.getCanonicalUri(n))), e);
    }
    getTrustedUris() {
        return this._trustStateInfo.uriTrustInfo.map((t)=>t.uri);
    }
    async setTrustedUris(t) {
        this._trustStateInfo.uriTrustInfo = [];
        for (const e of t){
            const n = await this.getCanonicalUri(e), i = this.uriIdentityService.extUri.removeTrailingPathSeparator(n);
            let r = !1;
            for (const s of this._trustStateInfo.uriTrustInfo)if (this.uriIdentityService.extUri.isEqual(s.uri, i)) {
                r = !0;
                break;
            }
            r || this._trustStateInfo.uriTrustInfo.push({
                trusted: !0,
                uri: i
            });
        }
        await this.saveTrustInfo();
    }
    addWorkspaceTrustTransitionParticipant(t) {
        return this._trustTransitionManager.addWorkspaceTrustTransitionParticipant(t);
    }
}, Whs = Re([
    F(0, yi),
    F(1, w6),
    F(2, ki),
    F(3, nh),
    F(4, ps),
    F(5, yr),
    F(6, Yqt),
    F(7, is)
], Whs), Ghs = class extends st {
    constructor(t, e){
        super(), this.configurationService = t, this.workspaceTrustManagementService = e, this._onDidInitiateOpenFilesTrustRequest = this._register(new tt), this.onDidInitiateOpenFilesTrustRequest = this._onDidInitiateOpenFilesTrustRequest.event, this._onDidInitiateWorkspaceTrustRequest = this._register(new tt), this.onDidInitiateWorkspaceTrustRequest = this._onDidInitiateWorkspaceTrustRequest.event, this._onDidInitiateWorkspaceTrustRequestOnStartup = this._register(new tt), this.onDidInitiateWorkspaceTrustRequestOnStartup = this._onDidInitiateWorkspaceTrustRequestOnStartup.event;
    }
    get untrustedFilesSetting() {
        return this.configurationService.getValue(dRi);
    }
    set untrustedFilesSetting(t) {
        this.configurationService.updateValue(dRi, t);
    }
    async completeOpenFilesTrustRequest(t, e) {
        this._openFilesTrustRequestResolver && (t === 1 && (this.workspaceTrustManagementService.acceptsOutOfWorkspaceFiles = !0), e && (t === 1 && (this.untrustedFilesSetting = "open"), t === 2 && (this.untrustedFilesSetting = "newWindow")), this._openFilesTrustRequestResolver(t), this._openFilesTrustRequestResolver = void 0, this._openFilesTrustRequestPromise = void 0);
    }
    async requestOpenFilesTrust(t) {
        if (!this.workspaceTrustManagementService.isWorkspaceTrusted() || (await Promise.all(t.map((n)=>this.workspaceTrustManagementService.getUriTrustInfo(n)))).map((n)=>n.trusted).every((n)=>n)) return 1;
        if (this.untrustedFilesSetting !== "prompt") {
            if (this.untrustedFilesSetting === "newWindow") return 2;
            if (this.untrustedFilesSetting === "open") return 1;
        }
        if (this.workspaceTrustManagementService.acceptsOutOfWorkspaceFiles) return 1;
        if (!this._openFilesTrustRequestPromise) this._openFilesTrustRequestPromise = new Promise((n)=>{
            this._openFilesTrustRequestResolver = n;
        });
        else return this._openFilesTrustRequestPromise;
        return this._onDidInitiateOpenFilesTrustRequest.fire(), this._openFilesTrustRequestPromise;
    }
    resolveWorkspaceTrustRequest(t) {
        this._workspaceTrustRequestResolver && (this._workspaceTrustRequestResolver(t ?? this.workspaceTrustManagementService.isWorkspaceTrusted()), this._workspaceTrustRequestResolver = void 0, this._workspaceTrustRequestPromise = void 0);
    }
    cancelWorkspaceTrustRequest() {
        this._workspaceTrustRequestResolver && (this._workspaceTrustRequestResolver(void 0), this._workspaceTrustRequestResolver = void 0, this._workspaceTrustRequestPromise = void 0);
    }
    async completeWorkspaceTrustRequest(t) {
        if (t === void 0 || t === this.workspaceTrustManagementService.isWorkspaceTrusted()) {
            this.resolveWorkspaceTrustRequest(t);
            return;
        }
        en.once(this.workspaceTrustManagementService.onDidChangeTrust)((e)=>this.resolveWorkspaceTrustRequest(e)), await this.workspaceTrustManagementService.setWorkspaceTrust(t);
    }
    async requestWorkspaceTrust(t) {
        if (this.workspaceTrustManagementService.isWorkspaceTrusted()) return this.workspaceTrustManagementService.isWorkspaceTrusted();
        if (!this._workspaceTrustRequestPromise) this._workspaceTrustRequestPromise = new Promise((e)=>{
            this._workspaceTrustRequestResolver = e;
        });
        else return this._workspaceTrustRequestPromise;
        return this._onDidInitiateWorkspaceTrustRequest.fire(t), this._workspaceTrustRequestPromise;
    }
    requestWorkspaceTrustOnStartup() {
        this._workspaceTrustRequestPromise || (this._workspaceTrustRequestPromise = new Promise((t)=>{
            this._workspaceTrustRequestResolver = t;
        })), this._onDidInitiateWorkspaceTrustRequestOnStartup.fire();
    }
}, Ghs = Re([
    F(0, yi),
    F(1, VM)
], Ghs), sDg = class extends st {
    constructor(){
        super(...arguments), this.participants = new tL;
    }
    addWorkspaceTrustTransitionParticipant(t) {
        const e = this.participants.push(t);
        return Pn(()=>e());
    }
    async participate(t) {
        for (const e of this.participants)await e.participate(t);
    }
    dispose() {
        this.participants.clear(), super.dispose();
    }
}, oDg = class {
    constructor(t){
        this._acceptsOutOfWorkspaceFilesKey = "acceptsOutOfWorkspaceFiles", this._isEmptyWorkspaceTrustedKey = "isEmptyWorkspaceTrusted", t ? (this._memento = new ume("workspaceTrust", t), this._mementoObject = this._memento.getMemento(1, 1)) : this._mementoObject = {};
    }
    get acceptsOutOfWorkspaceFiles() {
        return this._mementoObject[this._acceptsOutOfWorkspaceFilesKey] ?? !1;
    }
    set acceptsOutOfWorkspaceFiles(t) {
        this._mementoObject[this._acceptsOutOfWorkspaceFilesKey] = t, this._memento?.saveMemento();
    }
    get isEmptyWorkspaceTrusted() {
        return this._mementoObject[this._isEmptyWorkspaceTrustedKey];
    }
    set isEmptyWorkspaceTrusted(t) {
        this._mementoObject[this._isEmptyWorkspaceTrustedKey] = t, this._memento?.saveMemento();
    }
}, bn(NCe, Ghs, 1);

}
