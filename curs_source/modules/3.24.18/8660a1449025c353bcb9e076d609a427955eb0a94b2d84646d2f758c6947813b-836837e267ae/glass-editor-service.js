import { Ec, Ei, Nt, Pn, Qe, Vn, da, st, xr } from "./Iwo.js";
import { bn } from "./SZu.js";
import { xye } from "./Ycg.js";
import { qn } from "./async.js";
import { Ju, og } from "./codeEditorService.js";
import { Hn, Ix } from "./dom_2.js";
import { xw } from "./editorBrowser.js";
import { Rn } from "./extensions.js";
import { id, ld } from "./extensions_4.js";
import { Vc, yp } from "./glass-command-service.js";
import { aw, vN } from "./glass-context-key-service.js";
import { D2v, ige } from "./glass-editor-handle.js";
import { N2v, o8e } from "./glass-editor-service.contract.js";
import { Dme } from "./glass-editor-service.types.js";
import { WDe, aEe } from "./glass-lifecycle-service.js";
import { Nu, xc } from "./glass-storage-service.js";
import { It, dn } from "./instantiation.js";
import { Vd, dv } from "./storage-keys.js";
import { io } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { qS, rl } from "./ze.js";
var n5n, zRt, mJt;
export { mJt, n5n, zRt };
var __wakaru_VRt_initialized = false;
export function VRt() {
if (__wakaru_VRt_initialized) return;
__wakaru_VRt_initialized = true;
"use strict";
E(), WDe(), Hn(), qn(), Ei(), Qe(), xw(), og(), aw(), Rn(), It(), ld(), dv(), yp(), xc(), D2v(), N2v(), Dme(), D2v(), N2v(), n5n = {
    extensionId: "vscodevim.vim",
    activeContextKey: "vim.active",
    toggleCommand: "toggleVim"
}, zRt = {
    extensionId: "asvetliakov.vscode-neovim",
    initContextKey: "neovim.init",
    modeContextKey: "neovim.mode",
    restartCommand: "vscode-neovim.restart",
    stopCommand: "vscode-neovim.stop"
}, mJt = class extends st {
    constructor(t, e, n, i, r, s, o){
        super(), this._instantiationService = t, this._storageService = e, this._commandService = n, this._extensionService = i, this._contextKeyService = r, this._codeEditorService = s, this._lifecycleService = o, this._handles = new Map, this._pendingFileWaitersByTabId = new Map, this._tabIdByEditor = new Map, this._editorFocusListeners = this._register(new da), this._pendingEditorHandleWaits = this._register(new Nt), this._currentKeybindingStyle = "default", this._pendingVimModeSync = Promise.resolve(), this._currentKeybindingStyle = this._readKeybindingStyle(), this._reconcileInitialKeybindingStyle(), this._register(this._storageService.onDidChangeValue(io.APPLICATION, Vd.EDITOR_PREFERENCES, this._store)(async ()=>{
            const l = this._readKeybindingStyle();
            this._currentKeybindingStyle !== l && (this._currentKeybindingStyle = l, await this._enqueueVimModeSync(l));
        }));
        const a = this._codeEditorService.listCodeEditors();
        for (const l of a)this._trackCodeEditor(l);
        a.length > 0 && this._enqueueVimModeSync(this._currentKeybindingStyle), this._register(this._codeEditorService.onCodeEditorAdd((l)=>{
            this._trackCodeEditor(l), this._enqueueVimModeSync(this._currentKeybindingStyle);
        })), this._register(this._contextKeyService.onDidChangeContext((l)=>{
            l.affectsSome(mJt._VIM_CONTEXT_KEYS) && this._currentKeybindingStyle !== "vim" && (this._refreshEditorCursorStyles(), this._enqueueVimModeSync(this._currentKeybindingStyle));
        })), this._register(this._codeEditorService.onCodeEditorRemove((l)=>{
            this._editorFocusListeners.deleteAndDispose(l), this._tabIdByEditor.delete(l);
        })), this._register(this._lifecycleService.onBeforeShutdown(()=>{
            this._flushAllOverlayPendingContent();
        }));
    }
    _readKeybindingStyle() {
        const t = this._storageService.get(Vd.EDITOR_PREFERENCES, io.APPLICATION);
        if (t) try {
            const e = xye(JSON.parse(t));
            if (e) return e.keybindings;
        } catch  {}
        return "default";
    }
    _trackCodeEditor(t) {
        this._editorFocusListeners.has(t) || this._editorFocusListeners.set(t, t.onDidFocusEditorText(()=>{
            this._enqueueVimModeSync(this._currentKeybindingStyle);
        }));
    }
    _flushAllOverlayPendingContent() {
        for (const t of this._handles.values())t.flushOverlayPendingContent();
    }
    async _enqueueVimModeSync(t) {
        const e = this._pendingVimModeSync.then(()=>this._syncVimModeForKeybindingStyle(t));
        return this._pendingVimModeSync = e.catch(()=>{}), e;
    }
    async _reconcileInitialKeybindingStyle() {
        await this._extensionService.whenInstalledExtensionsRegistered(), await this._enqueueVimModeSync(this._currentKeybindingStyle);
    }
    async _syncVimModeForKeybindingStyle(t) {
        const e = t === "vim";
        e || this._refreshEditorCursorStyles();
        const [n, i] = await Promise.all([
            this._extensionService.getExtension(n5n.extensionId),
            this._extensionService.getExtension(zRt.extensionId)
        ]), r = e ? n ? "vscodevim" : i ? "neovim" : void 0 : void 0, s = r === "vscodevim", o = r === "neovim";
        if (n && s) {
            const c = {
                startup: !1,
                extensionId: n.identifier,
                activationEvent: `onCommand:${n5n.toggleCommand}`
            };
            try {
                await this._extensionService.activateById(n.identifier, c);
            } catch (u) {
                xr(u);
            }
        }
        const a = this._contextKeyService.getContext(null), l = (a.getValue(zRt.initContextKey) ?? !1) || a.getValue(zRt.modeContextKey) !== void 0;
        if (n && await this._ensureVscodeVimActiveState(s), i && l !== o) try {
            await this._commandService.executeCommand(o ? zRt.restartCommand : zRt.stopCommand);
        } catch (c) {
            xr(c);
        }
        e || this._refreshEditorCursorStyles();
    }
    _readVscodeVimActive() {
        return this._contextKeyService.getContext(null).getValue(n5n.activeContextKey) ?? !1;
    }
    async _ensureVscodeVimActiveState(t) {
        for(let n = 0; n < 5; n++){
            if (this._readVscodeVimActive() === t) return;
            const i = this._waitForVimContextChange(1e3);
            try {
                await this._commandService.executeCommand(n5n.toggleCommand);
            } catch (r) {
                xr(r);
                return;
            }
            await i;
        }
    }
    _waitForVimContextChange(t) {
        return new Promise((e)=>{
            const n = new Nt, i = ()=>{
                n.dispose(), e();
            };
            n.add(this._contextKeyService.onDidChangeContext((r)=>{
                r.affectsSome(mJt._VIM_CONTEXT_KEYS) && i();
            })), n.add(Ec(i, t));
        });
    }
    _refreshEditorCursorStyles() {
        for (const t of this._handles.values())t.refreshEditorOptions();
    }
    getHandle(t) {
        return this._handles.get(t);
    }
    getTabIdForEditor(t) {
        return this._resolveTabIdForEditor(t);
    }
    _waitForEditorHandle(t, e = 5e3) {
        const n = this._handles.get(t);
        return n ? Promise.resolve(n) : this._store.isDisposed || this._pendingEditorHandleWaits.isDisposed ? Promise.resolve(void 0) : new Promise((i)=>{
            const r = Date.now() + e, s = rl(), o = new Nt, a = o.add(new Vn);
            if (this._store.isDisposed || this._pendingEditorHandleWaits.isDisposed) {
                o.dispose(), i(void 0);
                return;
            }
            this._pendingEditorHandleWaits.add(o);
            let l = !1;
            const c = (d)=>{
                l || (l = !0, this._pendingEditorHandleWaits.delete(o), i(d));
            }, u = ()=>{
                const d = this._handles.get(t);
                if (d) {
                    c(d);
                    return;
                }
                if (Date.now() >= r) {
                    c(void 0);
                    return;
                }
                a.value = Ix(s, u);
            };
            o.add(Pn(()=>{
                l || (l = !0, this._pendingEditorHandleWaits.deleteAndLeak(o), i(void 0));
            })), a.value = Ix(s, u);
        });
    }
    async waitForFileEditor(t, e) {
        const n = await this._waitForEditorHandle(t);
        if (!n) return;
        const i = ()=>{
            const s = n.getSnapshot(), o = n.getEditorControl();
            if (!(s.currentFilePath !== e || s.isLoading || s.error !== void 0 || s.largeFileGate !== void 0 || !o || !qS(o))) return o;
        }, r = i();
        return r || new Promise((s)=>{
            const o = n.getSnapshot().currentFilePath, a = (c)=>{
                l(), this._removePendingFileWaiter(t, a), s(c);
            };
            this._addPendingFileWaiter(t, a);
            const l = n.subscribe("snapshotChanged", ()=>{
                const c = i();
                if (c) {
                    a(c);
                    return;
                }
                const u = n.getSnapshot();
                if (u.currentFilePath === e && !u.isLoading && (u.error !== void 0 || u.largeFileGate !== void 0)) {
                    a(void 0);
                    return;
                }
                u.currentFilePath !== void 0 && u.currentFilePath !== e && u.currentFilePath !== o && a(void 0);
            });
        });
    }
    _addPendingFileWaiter(t, e) {
        const n = this._pendingFileWaitersByTabId.get(t) ?? new Set;
        n.add(e), this._pendingFileWaitersByTabId.set(t, n);
    }
    _removePendingFileWaiter(t, e) {
        const n = this._pendingFileWaitersByTabId.get(t);
        n && (n.delete(e), n.size === 0 && this._pendingFileWaitersByTabId.delete(t));
    }
    _settlePendingFileWaiters(t, e) {
        const n = this._pendingFileWaitersByTabId.get(t);
        if (n) {
            this._pendingFileWaitersByTabId.delete(t);
            for (const i of n)i(e);
        }
    }
    _resolveTabIdForEditor(t) {
        const e = this._tabIdByEditor.get(t);
        if (e) return e;
        for (const [n, i] of this._handles)if (i.getEditorControl() === t) return this._tabIdByEditor.set(t, n), n;
    }
    createHandle(t, e = {}) {
        const n = this._handles.get(t);
        if (n) return n;
        const i = this._instantiationService.createInstance(ige, {
            ...e,
            tabId: t
        });
        return this._handles.set(t, i), i;
    }
    releaseHandle(t) {
        const e = this._handles.get(t);
        e && (this._settlePendingFileWaiters(t, void 0), e.dispose(), this._handles.delete(t));
    }
    dispose() {
        this._pendingEditorHandleWaits.dispose();
        for (const [t, e] of this._handles.entries())this._settlePendingFileWaiters(t, void 0), e.dispose();
        this._handles.clear(), super.dispose();
    }
}, mJt._VIM_CONTEXT_KEYS = new Set([
    n5n.activeContextKey,
    zRt.initContextKey,
    zRt.modeContextKey
]), mJt = Re([
    F(0, dn),
    F(1, Nu),
    F(2, Vc),
    F(3, id),
    F(4, vN),
    F(5, Ju),
    F(6, aEe)
], mJt), bn(o8e, mJt, 1);

}
