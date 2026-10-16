import { Ct, Se, Xqr, bt, pge, ve, we } from "./HVr.js";
import { EIo, lNh } from "./composite_3.js";
import { en, ere } from "./dom_2.js";
import { xc } from "./editor_2.js";
import { r0t, tbe, uTe } from "./editor_4.js";
import { vI } from "./extpath.js";
import { Jke, ag, oc } from "./map.js";
import { ay } from "./qIc.js";
import { Ac, Li, jr } from "./resources.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Ee, Qt } from "./uri.js";
var IIo, LA, AIo, mNh;
export { AIo, IIo, LA, mNh };
var __wakaru_BR_initialized = false;
export function BR() {
if (__wakaru_BR_initialized) return;
__wakaru_BR_initialized = true;
"use strict";
x(), lNh(), xc(), oc(), Qt(), bt(), gr(), uTe(), Li(), vI(), Se(), en(), IIo = class O1r extends EIo {
    constructor(t, n, i, r){
        super(t, i, r), this.group = n, this.onDidChangeSizeConstraints = Ct.None, this._onDidChangeControl = this._register(new ve), this.onDidChangeControl = this._onDidChangeControl.event;
    }
    get minimumWidth() {
        return tbe.width;
    }
    get maximumWidth() {
        return r0t.width;
    }
    get minimumHeight() {
        return tbe.height;
    }
    get maximumHeight() {
        return r0t.height;
    }
    get input() {
        return this._input;
    }
    get options() {
        return this._options;
    }
    get window() {
        return ere(this.group.windowId, !0).window;
    }
    get scopedContextKeyService() {}
    create(t) {
        super.create(t), this.createEditor(t);
    }
    async setInput(t, n, i, r) {
        this._input = t, this._options = n;
    }
    clearInput() {
        this._input = void 0, this._options = void 0;
    }
    setOptions(t) {
        this._options = t;
    }
    setVisible(t) {
        super.setVisible(t), this.setEditorVisible(t);
    }
    setEditorVisible(t) {}
    setBoundarySashes(t) {}
    getEditorMemento(t, n, i, r = 10) {
        const s = `${this.getId()}${i}`;
        let o = O1r.EDITOR_MEMENTOS.get(s);
        return o || (o = this._register(new mNh(this.getId(), i, this.getMemento(1, 1), r, t, n)), O1r.EDITOR_MEMENTOS.set(s, o)), o;
    }
    getViewState() {}
    saveState() {
        for (const [, t] of O1r.EDITOR_MEMENTOS)t.id === this.getId() && t.saveState();
        super.saveState();
    }
    dispose() {
        this._input = void 0, this._options = void 0, super.dispose();
    }
}, IIo.EDITOR_MEMENTOS = new Map, LA = IIo, AIo = class F1r extends we {
    constructor(t, n, i, r, s, o){
        super(), this.id = t, this.key = n, this.memento = i, this.limit = r, this.editorGroupService = s, this.configurationService = o, this.cleanedUp = !1, this.shareEditorState = !1, this.updateConfiguration(void 0), this.registerListeners();
    }
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration((t)=>this.updateConfiguration(t)));
    }
    updateConfiguration(t) {
        (!t || t.affectsConfiguration(void 0, "workbench.editor.sharedViewState")) && (this.shareEditorState = this.configurationService.getValue(void 0, "workbench.editor.sharedViewState") === !0);
    }
    saveEditorState(t, n, i) {
        const r = this.doGetResource(n);
        if (!r || !t) return;
        const s = this.doLoad();
        let o = s.get(r.toString());
        o || (o = Object.create(null), s.set(r.toString(), o)), o[t.id] = i, this.shareEditorState && (o[F1r.SHARED_EDITOR_STATE] = i), ay(n) && this.clearEditorStateOnDispose(r, n);
    }
    loadEditorState(t, n) {
        const i = this.doGetResource(n);
        if (!i || !t) return;
        const s = this.doLoad().get(i.toString());
        if (s) {
            const o = s[t.id];
            if (o) return o;
            if (this.shareEditorState) return s[F1r.SHARED_EDITOR_STATE];
        }
    }
    clearEditorState(t, n) {
        ay(t) && this.editorDisposables?.delete(t);
        const i = this.doGetResource(t);
        if (i) {
            const r = this.doLoad();
            if (n) {
                const s = r.get(i.toString());
                s && (delete s[n.id], pge(s) && r.delete(i.toString()));
            } else r.delete(i.toString());
        }
    }
    clearEditorStateOnDispose(t, n) {
        this.editorDisposables || (this.editorDisposables = new Map), this.editorDisposables.has(n) || this.editorDisposables.set(n, Ct.once(n.onWillDispose)(()=>{
            this.clearEditorState(t), this.editorDisposables?.delete(n);
        }));
    }
    moveEditorState(t, n, i) {
        const r = this.doLoad(), s = [
            ...r.keys()
        ];
        for (const o of s){
            const a = Ee.parse(o);
            if (!i.isEqualOrParent(a, t)) continue;
            let c;
            if (Ac(t, a)) c = n;
            else {
                const u = Xqr(a.path, t.path);
                c = jr(n, a.path.substr(u + t.path.length + 1));
            }
            const l = r.get(o, Jke.None);
            l && (r.delete(o), r.set(c.toString(), l));
        }
    }
    doGetResource(t) {
        return ay(t) ? t.resource : t;
    }
    doLoad() {
        if (!this.cache) {
            this.cache = new ag(this.limit);
            const t = this.memento[this.key];
            Array.isArray(t) && this.cache.fromJSON(t);
        }
        return this.cache;
    }
    saveState() {
        const t = this.doLoad();
        this.cleanedUp || (this.cleanUp(), this.cleanedUp = !0), this.memento[this.key] = t.toJSON();
    }
    cleanUp() {
        const t = this.doLoad(), n = [
            ...t.entries()
        ];
        for (const [i, r] of n)for (const s of Object.keys(r)){
            const o = Number(s);
            o === F1r.SHARED_EDITOR_STATE && this.shareEditorState || this.editorGroupService.getGroup(o) || (delete r[o], pge(r) && t.delete(i));
        }
    }
}, AIo.SHARED_EDITOR_STATE = -1, mNh = AIo;

}
