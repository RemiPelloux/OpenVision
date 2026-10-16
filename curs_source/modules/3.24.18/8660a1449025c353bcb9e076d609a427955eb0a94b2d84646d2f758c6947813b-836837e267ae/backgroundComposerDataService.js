import { Nt, Qe, st } from "./Iwo.js";
import { Hj } from "./LYd.js";
import { bn, jn } from "./SZu.js";
import { jUa, wYr } from "./backgroundComposerConstants.js";
import { OCn } from "./backgroundComposerData.js";
import { rp } from "./bcIdFromAuthority.js";
import { iCt } from "./composerDataHandle.js";
import { _Jn, bJn, pa } from "./constants_8.js";
import { fo, ps } from "./environmentService.js";
import { Rn } from "./extensions.js";
import { is, ms } from "./files.js";
import { It } from "./instantiation.js";
import { E6p, I6p, R31, x6p } from "./ipa.js";
import { eg, of } from "./modelConfigServiceTypes.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Zi, ki } from "./storage_2.js";
import { v1 } from "./store.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { RTn } from "./yBp.js";
import { pwe } from "./ze.js";
var EA, CYr;
export { CYr, EA };
var __wakaru_RB_initialized = false;
export function RB() {
if (__wakaru_RB_initialized) return;
__wakaru_RB_initialized = true;
"use strict";
E(), It(), Qe(), Rn(), Zi(), Sr(), OCn(), pa(), v1(), iCt(), el(), rp(), fo(), ms(), fn(), of(), wYr(), EA = jn("backgroundComposerDataService"), CYr = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this.storageService = t, this.workspaceContextService = e, this.reactiveStorageService = n, this.workbenchEnvironmentService = i, this.fileService = r, [this.data, this.setData] = R31(s);
        const o = I6p(t, _Jn), [a, l] = pwe(o);
        this.persistentData = a, this.setPersistentData = l;
        const c = x6p(t, e, bJn), [u, d] = pwe(c);
        this.workspacePersistentData = u, this.setWorkspacePersistentData = d, this._register(this.storageService.onDidChangeValue(-1, _Jn, this._register(new Nt))((h)=>{
            if (!h.external) return;
            const p = I6p(t, _Jn);
            this.setPersistentData(p);
        })), this._register(this.storageService.onDidChangeValue(1, bJn, this._register(new Nt))((h)=>{
            if (!h.external) return;
            const p = x6p(t, e, bJn);
            this.setWorkspacePersistentData(p);
        })), this.setupEnvironmentJsonWatcher();
    }
    bcIdForThisWindow() {
        const t = this.workbenchEnvironmentService.remoteAuthority;
        if (t) return Hj(t);
    }
    isBackgroundWindow() {
        return this.bcIdForThisWindow() !== void 0;
    }
    setupEnvironmentJsonWatcher() {
        const t = this.workspaceContextService.getWorkspace().folders.at(0)?.uri;
        if (!t) {
            this.setData("hasEnvironmentJsonOnDisk", !1);
            return;
        }
        const e = rt.joinPath(t, ".cursor/environment.json");
        if (!e) {
            this.setData("hasEnvironmentJsonOnDisk", !1);
            return;
        }
        this.environmentJsonUri = e, this.checkEnvironmentJsonExists(), this._register(this.fileService.watch(e)), this._register(this.fileService.onDidFilesChange((n)=>{
            (n.contains(e, 1) || n.contains(e, 2)) && this.checkEnvironmentJsonExists();
        }));
    }
    async checkEnvironmentJsonExists() {
        if (!this.environmentJsonUri) {
            this.setData("hasEnvironmentJsonOnDisk", !1);
            return;
        }
        try {
            const t = await this.fileService.exists(this.environmentJsonUri);
            this.setData("hasEnvironmentJsonOnDisk", t);
        } catch (t) {
            console.error(`[Environment JSON] Error checking if environment.json exists: ${t}`), this.setData("hasEnvironmentJsonOnDisk", !1);
        }
    }
    getBackgroundComposerEnv() {
        return this.reactiveStorageService.applicationUserPersistentStorage.backgroundComposerEnv ?? "prod";
    }
    saveWorkspacePersistentData() {
        this.storageService.store(bJn, JSON.stringify(this.workspacePersistentData), 1, 1);
    }
    savePersistentData() {
        try {
            const t = E6p();
            this.storageService.store(_Jn, JSON.stringify(this.persistentData), t, 1);
        } catch (t) {
            console.warn(`Error saving background composer data: ${t}`);
        }
    }
    getBackgroundComposerFollowUpInputDataHandle() {
        if (!this.data.backgroundComposerFollowUpInputData) throw new Error("No background composer follow up input data");
        return RTn(this.data.backgroundComposerFollowUpInputData);
    }
    focusBackgroundComposerFollowUp() {
        this.data.isBranchSelectorOpen || this.data.backgroundComposerFollowUpInputBoxDelegate.focus();
    }
    doesInWindowBCHaveDiffsReactive() {
        const t = this.data.inWindowBackgroundComposer?.detailedDiff;
        return (t && (t.diff && t.diff.diffs && t.diff.diffs.length > 0 || t.submoduleDiffs && t.submoduleDiffs.some((n)=>n.diff && n.diff.diffs && n.diff.diffs.length > 0))) ?? !1;
    }
    getInWindowBcData() {
        if (this.bcIdForThisWindow()) return this.data.inWindowBackgroundComposer;
    }
    getBcDataInMainWindow(t) {
        if (this.bcIdForThisWindow()) {
            console.error("getBcDataInMainWindow called in bc window. use getInWindowBcData instead");
            return;
        }
        return this.data.backgroundComposers.find((n)=>n.bcId === t);
    }
    setDisplayPreference(t, e) {
        this.setData("backgroundComposers", (n)=>n.bcId === t, {
            displayPreference: e
        });
    }
    getDisplayPreference(t) {
        const e = this.data.backgroundComposers.find((n)=>n.bcId === t)?.displayPreference ?? (this.reactiveStorageService.applicationUserPersistentStorage.backgroundComposerState.defaultDisplayPreference4 || jUa);
        return e === "peek" ? "chat" : e;
    }
}, CYr = Re([
    F(0, ki),
    F(1, yr),
    F(2, sa),
    F(3, ps),
    F(4, is),
    F(5, eg)
], CYr), bn(EA, CYr, 2);

}
