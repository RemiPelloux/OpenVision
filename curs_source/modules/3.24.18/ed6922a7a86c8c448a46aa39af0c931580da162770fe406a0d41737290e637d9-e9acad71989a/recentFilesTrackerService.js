import { He, Se, bt, po, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Ja, md } from "./codeEditorService.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { li } from "./network.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Jn, ci } from "./workspace.js";
import { Jch } from "./xmo.js";
var LKi, NKi;
export { LKi, NKi };
var __wakaru_V_o_initialized = false;
export function V_o() {
if (__wakaru_V_o_initialized) return;
__wakaru_V_o_initialized = true;
"use strict";
x(), md(), Se(), bt(), li(), Ze(), Pn(), ci(), LKi = vn("recentFilesTrackerService"), NKi = class extends we {
    constructor(e, t){
        super(), this._codeEditorService = e, this._workspaceContextService = t, this.editorListeners = this._register(new po), this.recentlyViewedFiles = [], this._onDidChangeRecentFiles = this._register(new ve), this.onDidChangeRecentFiles = this._onDidChangeRecentFiles.event;
        for (let n of this._codeEditorService.listCodeEditors())this.registerEditorListenersToEditor(n), this.trackCurrentEditorModel(n);
        this._register(this._codeEditorService.onCodeEditorAdd((n)=>{
            this.registerEditorListenersToEditor(n), this.trackCurrentEditorModel(n);
        }));
    }
    trackCurrentEditorModel(e) {
        const t = e.getModel();
        !t || !Jch(t.uri) || this.registerFileView(t.uri);
    }
    registerEditorListenersToEditor(e) {
        const t = e.getId(), n = new He;
        n.add(e.onDidChangeModel((i)=>{
            const r = i.newModelUrl;
            r && Jch(r) && this.registerFileView(r);
        })), n.add(e.onDidDispose(()=>{
            this.editorListeners.deleteAndDispose(t);
        })), this.editorListeners.set(t, n);
    }
    getRecentlyViewedFiles(e = 10, t = []) {
        if (e > 100) throw new Error("topK must be less than 100");
        return this.recentlyViewedFiles.filter((n)=>!t.includes(n.relativePath)).slice(-e).reverse();
    }
    registerFileView(e) {
        const t = this._workspaceContextService.asRelativePath(e);
        if (!t || t === "") return;
        let n = this.recentlyViewedFiles;
        const i = n[n.length - 1]?.relativePath;
        n.find((r)=>r.relativePath === t) && (n = n.filter((r)=>r.relativePath !== t)), n.push({
            uri: e,
            relativePath: t,
            weight: 1
        }), n = n.slice(0, 100), this.recentlyViewedFiles = n, i !== t && this._onDidChangeRecentFiles.fire();
    }
}, NKi = ie([
    C(0, Ja),
    C(1, Jn)
], NKi), mn(LKi, NKi, 1);

}
