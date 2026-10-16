import { E } from "./configurationRegistry.js";
import { Ta, ci } from "./dialogMainService.js";
import { Fr, si } from "./environment.js";
import { N, O, se } from "./event.js";
import { Wt, cn } from "./files.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { J, ei, j, ve } from "./lifecycle.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { $, $e } from "./network.js";
import { Ne } from "./nls.js";
import { _We, l7 } from "./storageAutoVacuum.js";
import { fWe, xI } from "./storageBackup.js";
import { NI, e7, lWe, n7, t7 } from "./storageMain.js";
import { J6, _C, tk } from "./storage_2.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { Br, Oi } from "./uriIdentity.js";
import { Ls, Us } from "./userDataProfile.js";
import { Rc, Wi } from "./userDataProfile_3.js";
var Gs, qk, Cn, Kk;
export { Cn, Gs, Kk, qk };
var __wakaru_or_initialized = false;
export function or() {
if (__wakaru_or_initialized) return;
__wakaru_or_initialized = true;
"use strict";
h(), ye(), se(), j(), Fr(), Wt(), ne(), Vt(), te(), tk(), lWe(), Us(), Rc(), Oi(), $e(), Ta(), Ne(), fWe(), _We(), Gs = Q("storageMainService"), qk = class extends J {
    constructor(e, t, n, r, s, i, a){
        super(), this.logService = e, this.environmentService = t, this.userDataProfilesService = n, this.lifecycleMainService = r, this.fileService = s, this.uriIdentityService = i, this.dialogMainService = a, this.shutdownReason = void 0, this.disableSqliteStorageBackupShutdownSnapshot = void 0, this.incrementalAutoVacuumShutdownSnapshot = !1, this.storageErrorDialogShown = !1, this._onDidChangeProfileStorage = this._register(new N), this.onDidChangeProfileStorage = this._onDidChangeProfileStorage.event, this.mapProfileToStorage = new Map, this.profileStorageListeners = this._register(new ei), this.mapWorkspaceToStorage = new Map, this.workspaceStorageListeners = this._register(new ei), this.applicationStorage = this._register(this.createApplicationStorage()), this.registerListeners();
    }
    getStorageOptions() {
        return {
            useInMemoryStorage: !!this.environmentService.extensionTestsLocationURI,
            disableBackup: ()=>this.shouldDisableSqliteStorageBackup(),
            incrementalAutoVacuumOnClose: ()=>this.incrementalAutoVacuumShutdownSnapshot
        };
    }
    registerListeners() {
        (async ()=>{
            await this.lifecycleMainService.when(3);
            try {
                await this.applicationStorage.init();
            } catch (e) {
                await this.showStorageError(e, this.applicationStorage, "application");
            }
        })(), this._register(this.lifecycleMainService.onWillLoadWindow(async (e)=>{
            if (e.window.profile) {
                const t = this.profileStorage(e.window.profile);
                try {
                    await t.init();
                } catch (n) {
                    await this.showStorageError(n, t, "profile");
                }
            }
            if (e.workspace) {
                const t = this.workspaceStorage(e.workspace);
                try {
                    await t.init();
                } catch (n) {
                    await this.showStorageError(n, t, "workspace");
                }
            }
        })), this._register(this.lifecycleMainService.onWillShutdown((e)=>{
            this.logService.trace("storageMainService#onWillShutdown()"), this.shutdownReason = e.reason, this.shouldDisableSqliteStorageBackup({
                snapshotForShutdown: !0
            }), this.incrementalAutoVacuumShutdownSnapshot = e.reason !== 2 && this.applicationStorage.get(l7) === "true", e.join("applicationStorage", this.applicationStorage.close());
            for (const [, t] of this.mapProfileToStorage)e.join("profileStorage", t.close());
            for (const [, t] of this.mapWorkspaceToStorage)e.join("workspaceStorage", t.close());
        })), this._register(this.userDataProfilesService.onWillCreateProfile((e)=>{
            e.join((async ()=>{
                await this.fileService.exists(e.profile.globalStorageHome) || await this.fileService.createFolder(e.profile.globalStorageHome);
            })());
        })), this._register(this.userDataProfilesService.onWillRemoveProfile((e)=>{
            const t = this.mapProfileToStorage.get(e.profile.id);
            t && e.join(t.close());
        }));
    }
    shouldDisableSqliteStorageBackup(e) {
        return e?.snapshotForShutdown === !0 && this.disableSqliteStorageBackupShutdownSnapshot === void 0 && (this.disableSqliteStorageBackupShutdownSnapshot = this.applicationStorage.get(xI) === "true"), this.disableSqliteStorageBackupShutdownSnapshot ?? this.applicationStorage.get(xI) === "true";
    }
    async showStorageError(e, t, n) {
        const r = e instanceof Error ? e.message : String(e);
        if (this.logService.error(`[storage ${n}] Storage initialization failed: ${r}`), this.storageErrorDialogShown) return;
        this.storageErrorDialogShown = !0;
        const { response: s } = await this.dialogMainService.showMessageBox({
            type: "error",
            title: E(2242, null),
            message: E(2243, null),
            detail: E(2244, null, t.path ?? "unknown"),
            buttons: [
                E(2245, null),
                E(2246, null)
            ],
            noLink: !0
        });
        s === 0 ? await this.lifecycleMainService.relaunch() : await this.lifecycleMainService.quit();
    }
    createApplicationStorage() {
        this.logService.trace("StorageMainService: creating application storage");
        const e = new t7(this.getStorageOptions(), this.userDataProfilesService, this.logService, this.fileService);
        return this._register(O.once(e.onDidCloseStorage)(()=>{
            this.logService.trace("StorageMainService: closed application storage");
        })), e;
    }
    profileStorage(e) {
        if (_C(e)) return this.applicationStorage;
        let t = this.mapProfileToStorage.get(e.id);
        if (!t) {
            this.logService.trace(`StorageMainService: creating profile storage (${e.name})`), t = this._register(this.createProfileStorage(e)), this.mapProfileToStorage.set(e.id, t);
            const n = new ve;
            n.add(t.onDidChangeStorage((r)=>this._onDidChangeProfileStorage.fire({
                    ...r,
                    storage: t,
                    profile: e
                }))), n.add(O.once(t.onDidCloseStorage)(()=>{
                this.logService.trace(`StorageMainService: closed profile storage (${e.name})`), this.mapProfileToStorage.delete(e.id), this.profileStorageListeners.deleteAndDispose(e.id);
            })), this.profileStorageListeners.set(e.id, n);
        }
        return t;
    }
    createProfileStorage(e) {
        return this.shutdownReason === 2 ? new NI(this.logService, this.fileService) : new e7(e, this.getStorageOptions(), this.logService, this.fileService);
    }
    workspaceStorage(e) {
        let t = this.mapWorkspaceToStorage.get(e.id);
        if (!t) {
            this.logService.trace(`StorageMainService: creating workspace storage (${e.id})`), t = this._register(this.createWorkspaceStorage(e)), this.mapWorkspaceToStorage.set(e.id, t);
            const n = new ve;
            n.add(O.once(t.onDidCloseStorage)(()=>{
                this.logService.trace(`StorageMainService: closed workspace storage (${e.id})`), this.mapWorkspaceToStorage.delete(e.id), this.workspaceStorageListeners.deleteAndDispose(e.id);
            })), this.workspaceStorageListeners.set(e.id, n);
        }
        return t;
    }
    createWorkspaceStorage(e) {
        return this.shutdownReason === 2 ? new NI(this.logService, this.fileService) : new n7(e, this.getStorageOptions(), this.logService, this.environmentService, this.fileService);
    }
    isUsed(e) {
        const t = x.file(e);
        for (const n of [
            this.applicationStorage,
            ...this.mapProfileToStorage.values(),
            ...this.mapWorkspaceToStorage.values()
        ])if (n.path && this.uriIdentityService.extUri.isEqualOrParent(x.file(n.path), t)) return !0;
        return !1;
    }
}, qk = B([
    w(0, Z),
    w(1, si),
    w(2, Wi),
    w(3, ht),
    w(4, cn),
    w(5, Br),
    w(6, ci)
], qk), Cn = Q("applicationStorageMainService"), Kk = class extends J6 {
    constructor(e, t){
        super(), this.userDataProfilesService = e, this.storageMainService = t, this.whenReady = this.storageMainService.applicationStorage.whenInit;
    }
    doInitialize() {
        return this.storageMainService.applicationStorage.whenInit;
    }
    getStorage(e) {
        if (e === -1) return this.storageMainService.applicationStorage.storage;
    }
    getLogDetails(e) {
        if (e === -1) return this.userDataProfilesService.defaultProfile.globalStorageHome.with({
            scheme: $.file
        }).fsPath;
    }
    shouldFlushWhenIdle() {
        return !1;
    }
    switch() {
        throw new Error("Migrating storage is unsupported from main process");
    }
    switchToProfile() {
        throw new Error("Switching storage profile is unsupported from main process");
    }
    switchToWorkspace() {
        throw new Error("Switching storage workspace is unsupported from main process");
    }
    hasScope() {
        throw new Error("Main process is never profile or workspace scoped");
    }
}, Kk = B([
    w(0, Ls),
    w(1, Gs)
], Kk);

}
