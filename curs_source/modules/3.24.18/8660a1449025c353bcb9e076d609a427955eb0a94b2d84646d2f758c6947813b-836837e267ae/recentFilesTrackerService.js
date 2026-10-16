import { Gt, Nt, Qe, da, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Ju, og } from "./codeEditorService.js";
import { Rn } from "./extensions.js";
import { IKm } from "./gYa.js";
import { It } from "./instantiation.js";
import { Ki } from "./network.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
var Zts, Qts;
export { Qts, Zts };
var __wakaru_lel_initialized = false;
export function lel() {
if (__wakaru_lel_initialized) return;
__wakaru_lel_initialized = true;
"use strict";
E(), og(), Qe(), Gt(), Ki(), It(), Rn(), Sr(), Zts = jn("recentFilesTrackerService"), Qts = class extends st {
    constructor(t, e){
        super(), this._codeEditorService = t, this._workspaceContextService = e, this.editorListeners = this._register(new da), this.recentlyViewedFiles = [], this._onDidChangeRecentFiles = this._register(new tt), this.onDidChangeRecentFiles = this._onDidChangeRecentFiles.event;
        for (let n of this._codeEditorService.listCodeEditors())this.registerEditorListenersToEditor(n), this.trackCurrentEditorModel(n);
        this._register(this._codeEditorService.onCodeEditorAdd((n)=>{
            this.registerEditorListenersToEditor(n), this.trackCurrentEditorModel(n);
        }));
    }
    trackCurrentEditorModel(t) {
        const e = t.getModel();
        !e || !IKm(e.uri) || this.registerFileView(e.uri);
    }
    registerEditorListenersToEditor(t) {
        const e = t.getId(), n = new Nt;
        n.add(t.onDidChangeModel((i)=>{
            const r = i.newModelUrl;
            r && IKm(r) && this.registerFileView(r);
        })), n.add(t.onDidDispose(()=>{
            this.editorListeners.deleteAndDispose(e);
        })), this.editorListeners.set(e, n);
    }
    getRecentlyViewedFiles(t = 10, e = []) {
        if (t > 100) throw new Error("topK must be less than 100");
        return this.recentlyViewedFiles.filter((n)=>!e.includes(n.relativePath)).slice(-t).reverse();
    }
    registerFileView(t) {
        const e = this._workspaceContextService.asRelativePath(t);
        if (!e || e === "") return;
        let n = this.recentlyViewedFiles;
        const i = n[n.length - 1]?.relativePath;
        n.find((r)=>r.relativePath === e) && (n = n.filter((r)=>r.relativePath !== e)), n.push({
            uri: t,
            relativePath: e,
            weight: 1
        }), n = n.slice(0, 100), this.recentlyViewedFiles = n, i !== e && this._onDidChangeRecentFiles.fire();
    }
}, Qts = Re([
    F(0, Ju),
    F(1, yr)
], Qts), bn(Zts, Qts, 1);

}
