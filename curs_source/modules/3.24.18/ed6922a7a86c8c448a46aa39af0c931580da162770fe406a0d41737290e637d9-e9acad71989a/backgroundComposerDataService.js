import { qWi } from "./A3u.js";
import { iNu, nNu, rNu, ugv } from "./De_3.js";
import { He, Se, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Eoo, Too } from "./backgroundComposerConstants.js";
import { R$t } from "./backgroundComposerData.js";
import { nb } from "./bcIdFromAuthority.js";
import { HHt } from "./composerDataHandle.js";
import { So, kmn, wmn } from "./constants_8.js";
import { Vr, Yi } from "./environmentService.js";
import { Pn } from "./extensions.js";
import { Fi, Ii } from "./files.js";
import { Ze } from "./instantiation.js";
import { QS, i0 } from "./modelConfigServiceTypes.js";
import { GV, RJ, mn, vn } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { Vn, yn } from "./storage_2.js";
import { jS } from "./store.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { Jn, ci } from "./workspace.js";
var iE, YWi;
export { YWi, iE };
var __wakaru_B5_initialized = false;
export function B5() {
if (__wakaru_B5_initialized) return;
__wakaru_B5_initialized = true;
"use strict";
x(), Ze(), Se(), Pn(), Vn(), ci(), R$t(), So(), jS(), HHt(), Ha(), nb(), Vr(), Fi(), Qt(), i0(), Eoo(), iE = vn("backgroundComposerDataService"), YWi = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this.storageService = e, this.workspaceContextService = t, this.reactiveStorageService = n, this.workbenchEnvironmentService = i, this.fileService = r, [this.data, this.setData] = ugv(s);
        const o = iNu(e, kmn), [a, c] = GV(o);
        this.persistentData = a, this.setPersistentData = c;
        const l = rNu(e, t, wmn), [u, h] = GV(l);
        this.workspacePersistentData = u, this.setWorkspacePersistentData = h, this._register(this.storageService.onDidChangeValue(-1, kmn, this._register(new He))((p)=>{
            if (!p.external) return;
            const g = iNu(e, kmn);
            this.setPersistentData(g);
        })), this._register(this.storageService.onDidChangeValue(1, wmn, this._register(new He))((p)=>{
            if (!p.external) return;
            const g = rNu(e, t, wmn);
            this.setWorkspacePersistentData(g);
        })), this.setupEnvironmentJsonWatcher();
    }
    bcIdForThisWindow() {
        const e = this.workbenchEnvironmentService.remoteAuthority;
        if (e) return RJ(e);
    }
    isBackgroundWindow() {
        return this.bcIdForThisWindow() !== void 0;
    }
    setupEnvironmentJsonWatcher() {
        const e = this.workspaceContextService.getWorkspace().folders.at(0)?.uri;
        if (!e) {
            this.setData("hasEnvironmentJsonOnDisk", !1);
            return;
        }
        const t = Ee.joinPath(e, ".cursor/environment.json");
        if (!t) {
            this.setData("hasEnvironmentJsonOnDisk", !1);
            return;
        }
        this.environmentJsonUri = t, this.checkEnvironmentJsonExists(), this._register(this.fileService.watch(t)), this._register(this.fileService.onDidFilesChange((n)=>{
            (n.contains(t, 1) || n.contains(t, 2)) && this.checkEnvironmentJsonExists();
        }));
    }
    async checkEnvironmentJsonExists() {
        if (!this.environmentJsonUri) {
            this.setData("hasEnvironmentJsonOnDisk", !1);
            return;
        }
        try {
            const e = await this.fileService.exists(this.environmentJsonUri);
            this.setData("hasEnvironmentJsonOnDisk", e);
        } catch (e) {
            console.error(`[Environment JSON] Error checking if environment.json exists: ${e}`), this.setData("hasEnvironmentJsonOnDisk", !1);
        }
    }
    getBackgroundComposerEnv() {
        return this.reactiveStorageService.applicationUserPersistentStorage.backgroundComposerEnv ?? "prod";
    }
    saveWorkspacePersistentData() {
        this.storageService.store(wmn, JSON.stringify(this.workspacePersistentData), 1, 1);
    }
    savePersistentData() {
        try {
            const e = nNu();
            this.storageService.store(kmn, JSON.stringify(this.persistentData), e, 1);
        } catch (e) {
            console.warn(`Error saving background composer data: ${e}`);
        }
    }
    getBackgroundComposerFollowUpInputDataHandle() {
        if (!this.data.backgroundComposerFollowUpInputData) throw new Error("No background composer follow up input data");
        return qWi(this.data.backgroundComposerFollowUpInputData);
    }
    focusBackgroundComposerFollowUp() {
        this.data.isBranchSelectorOpen || this.data.backgroundComposerFollowUpInputBoxDelegate.focus();
    }
    doesInWindowBCHaveDiffsReactive() {
        const e = this.data.inWindowBackgroundComposer?.detailedDiff;
        return (e && (e.diff && e.diff.diffs && e.diff.diffs.length > 0 || e.submoduleDiffs && e.submoduleDiffs.some((n)=>n.diff && n.diff.diffs && n.diff.diffs.length > 0))) ?? !1;
    }
    getInWindowBcData() {
        if (this.bcIdForThisWindow()) return this.data.inWindowBackgroundComposer;
    }
    getBcDataInMainWindow(e) {
        if (this.bcIdForThisWindow()) {
            console.error("getBcDataInMainWindow called in bc window. use getInWindowBcData instead");
            return;
        }
        return this.data.backgroundComposers.find((n)=>n.bcId === e);
    }
    setDisplayPreference(e, t) {
        this.setData("backgroundComposers", (n)=>n.bcId === e, {
            displayPreference: t
        });
    }
    getDisplayPreference(e) {
        const t = this.data.backgroundComposers.find((n)=>n.bcId === e)?.displayPreference ?? (this.reactiveStorageService.applicationUserPersistentStorage.backgroundComposerState.defaultDisplayPreference4 || Too);
        return t === "peek" ? "chat" : t;
    }
}, YWi = ie([
    C(0, yn),
    C(1, Jn),
    C(2, Do),
    C(3, Yi),
    C(4, Ii),
    C(5, QS)
], YWi), mn(iE, YWi, 2);

}
