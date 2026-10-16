import { Gt, NCo, Qe, en, st, tt, xOe } from "./Iwo.js";
import { Ik } from "./LYd.js";
import { Zhl, nkg } from "./composite_3.js";
import { Hn, Wve } from "./dom_2.js";
import { od } from "./editor_2.js";
import { NVt, hMe, m9e } from "./editor_4.js";
import { pP } from "./extpath.js";
import { du, kv, n$e } from "./map.js";
import { Lr, Os, gu } from "./resources.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
var Jhl, DX, epl, akg;
export { DX, Jhl, akg, epl };
var __wakaru_KJ_initialized = false;
export function KJ() {
if (__wakaru_KJ_initialized) return;
__wakaru_KJ_initialized = true;
"use strict";
E(), nkg(), od(), du(), fn(), Gt(), To(), m9e(), Lr(), pP(), Qe(), Hn(), Jhl = class xXs extends Zhl {
    constructor(e, n, i, r){
        super(e, i, r), this.group = n, this.onDidChangeSizeConstraints = en.None, this._onDidChangeControl = this._register(new tt), this.onDidChangeControl = this._onDidChangeControl.event;
    }
    get minimumWidth() {
        return hMe.width;
    }
    get maximumWidth() {
        return NVt.width;
    }
    get minimumHeight() {
        return hMe.height;
    }
    get maximumHeight() {
        return NVt.height;
    }
    get input() {
        return this._input;
    }
    get options() {
        return this._options;
    }
    get window() {
        return Wve(this.group.windowId, !0).window;
    }
    get scopedContextKeyService() {}
    create(e) {
        super.create(e), this.createEditor(e);
    }
    async setInput(e, n, i, r) {
        this._input = e, this._options = n;
    }
    clearInput() {
        this._input = void 0, this._options = void 0;
    }
    setOptions(e) {
        this._options = e;
    }
    setVisible(e) {
        super.setVisible(e), this.setEditorVisible(e);
    }
    setEditorVisible(e) {}
    setBoundarySashes(e) {}
    getEditorMemento(e, n, i, r = 10) {
        const s = `${this.getId()}${i}`;
        let o = xXs.EDITOR_MEMENTOS.get(s);
        return o || (o = this._register(new akg(this.getId(), i, this.getMemento(1, 1), r, e, n)), xXs.EDITOR_MEMENTOS.set(s, o)), o;
    }
    getViewState() {}
    saveState() {
        for (const [, e] of xXs.EDITOR_MEMENTOS)e.id === this.getId() && e.saveState();
        super.saveState();
    }
    dispose() {
        this._input = void 0, this._options = void 0, super.dispose();
    }
}, Jhl.EDITOR_MEMENTOS = new Map, DX = Jhl, epl = class AXs extends st {
    constructor(e, n, i, r, s, o){
        super(), this.id = e, this.key = n, this.memento = i, this.limit = r, this.editorGroupService = s, this.configurationService = o, this.cleanedUp = !1, this.shareEditorState = !1, this.updateConfiguration(void 0), this.registerListeners();
    }
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration((e)=>this.updateConfiguration(e)));
    }
    updateConfiguration(e) {
        (!e || e.affectsConfiguration(void 0, "workbench.editor.sharedViewState")) && (this.shareEditorState = this.configurationService.getValue(void 0, "workbench.editor.sharedViewState") === !0);
    }
    saveEditorState(e, n, i) {
        const r = this.doGetResource(n);
        if (!r || !e) return;
        const s = this.doLoad();
        let o = s.get(r.toString());
        o || (o = Object.create(null), s.set(r.toString(), o)), o[e.id] = i, this.shareEditorState && (o[AXs.SHARED_EDITOR_STATE] = i), Ik(n) && this.clearEditorStateOnDispose(r, n);
    }
    loadEditorState(e, n) {
        const i = this.doGetResource(n);
        if (!i || !e) return;
        const s = this.doLoad().get(i.toString());
        if (s) {
            const o = s[e.id];
            if (o) return o;
            if (this.shareEditorState) return s[AXs.SHARED_EDITOR_STATE];
        }
    }
    clearEditorState(e, n) {
        Ik(e) && this.editorDisposables?.delete(e);
        const i = this.doGetResource(e);
        if (i) {
            const r = this.doLoad();
            if (n) {
                const s = r.get(i.toString());
                s && (delete s[n.id], xOe(s) && r.delete(i.toString()));
            } else r.delete(i.toString());
        }
    }
    clearEditorStateOnDispose(e, n) {
        this.editorDisposables || (this.editorDisposables = new Map), this.editorDisposables.has(n) || this.editorDisposables.set(n, en.once(n.onWillDispose)(()=>{
            this.clearEditorState(e), this.editorDisposables?.delete(n);
        }));
    }
    moveEditorState(e, n, i) {
        const r = this.doLoad(), s = [
            ...r.keys()
        ];
        for (const o of s){
            const a = rt.parse(o);
            if (!i.isEqualOrParent(a, e)) continue;
            let l;
            if (gu(e, a)) l = n;
            else {
                const u = NCo(a.path, e.path);
                l = Os(n, a.path.substr(u + e.path.length + 1));
            }
            const c = r.get(o, n$e.None);
            c && (r.delete(o), r.set(l.toString(), c));
        }
    }
    doGetResource(e) {
        return Ik(e) ? e.resource : e;
    }
    doLoad() {
        if (!this.cache) {
            this.cache = new kv(this.limit);
            const e = this.memento[this.key];
            Array.isArray(e) && this.cache.fromJSON(e);
        }
        return this.cache;
    }
    saveState() {
        const e = this.doLoad();
        this.cleanedUp || (this.cleanUp(), this.cleanedUp = !0), this.memento[this.key] = e.toJSON();
    }
    cleanUp() {
        const e = this.doLoad(), n = [
            ...e.entries()
        ];
        for (const [i, r] of n)for (const s of Object.keys(r)){
            const o = Number(s);
            o === AXs.SHARED_EDITOR_STATE && this.shareEditorState || this.editorGroupService.getGroup(o) || (delete r[o], xOe(r) && e.delete(i));
        }
    }
}, epl.SHARED_EDITOR_STATE = -1, akg = epl;

}
