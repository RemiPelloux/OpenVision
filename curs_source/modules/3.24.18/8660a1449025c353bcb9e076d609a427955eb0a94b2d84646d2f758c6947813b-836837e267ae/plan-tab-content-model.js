import { Gt, Nt, Qe, st, tt } from "./Iwo.js";
import { YQv, ZhC } from "./_Hv.js";
import { Zq } from "./files.js";
import { hv } from "./glass-file-service.js";
import { VPe } from "./planStorageService.js";
import { E } from "./tslib.es6.js";
var XQv, $Ls, ZQv;
export { $Ls, XQv, ZQv };
var __wakaru_QhC_initialized = false;
export function QhC() {
if (__wakaru_QhC_initialized) return;
__wakaru_QhC_initialized = true;
"use strict";
E(), Gt(), Qe(), hv(), VPe(), XQv = {
    name: "Plan",
    overview: "",
    todos: []
}, $Ls = {
    serializedMarkdown: "",
    plan: XQv,
    body: "",
    bodySourceVersion: 0,
    isDirty: !1,
    isReadonly: !0,
    isLoading: !1,
    error: void 0
}, ZQv = class extends st {
    constructor(t){
        super(), this._options = t, this._onDidChangeSnapshot = this._register(new tt), this.onDidChangeSnapshot = this._onDidChangeSnapshot.event, this._onDidChangeDirty = this._register(new tt), this.onDidChangeDirty = this._onDidChangeDirty.event, this._contentDisposables = this._register(new Nt), this._modelDisposables = this._register(new Nt), this._hasStarted = !1, this._loadGeneration = 0, this._bodySourceVersion = 0, this._lastBody = "", this._isLoading = !0, this._isApplyingLocalEdit = !1, this._fallbackSerializedMarkdown = "", this._snapshot = {
            ...$Ls,
            plan: {
                name: "Loading...",
                overview: "",
                todos: []
            },
            isReadonly: t.isReadonly,
            isLoading: !0
        };
    }
    get planId() {
        return this._options.planId;
    }
    get isReadonly() {
        return this._snapshot.isReadonly;
    }
    get isDirty() {
        return this._snapshot.isDirty;
    }
    get snapshot() {
        return this._snapshot;
    }
    subscribeSnapshot(t) {
        return this.onDidChangeSnapshot(()=>t());
    }
    start() {
        this._hasStarted || (this._hasStarted = !0, this._contentDisposables.add(this._options.agentReference.onDidPlanChange(({ planId: t })=>{
            t === this._options.planId && this._reloadIfModelUriChanged();
        })), this._contentDisposables.add(this._options.textFileService.files.onDidChangeDirty((t)=>{
            this._modelReference?.uri.toString() === t.resource.toString() && this._emitSnapshot();
        })), this._contentDisposables.add(this._options.fileService.onDidFilesChange((t)=>{
            const e = this._modelReference?.uri;
            e && t.contains(e, Zq.UPDATED, Zq.ADDED) && this._reloadFromDiskIfClean();
        })), this.load());
    }
    stop() {
        this._hasStarted = !1, this._loadGeneration++, this._contentDisposables.clear(), this._clearModelReference();
    }
    async load() {
        const t = ++this._loadGeneration;
        this._isLoading = !0, this._error = void 0, this._emitSnapshot();
        try {
            const e = await this._options.agentReference.createPlanContentModelReference(this._options.planId);
            if (t !== this._loadGeneration || !this._hasStarted) {
                e?.modelRef.dispose();
                return;
            }
            if (!e) {
                this._clearModelReference(), await this._loadFallbackContent(t, !0);
                return;
            }
            this._setModelReference(e), this._isLoading = !1, this._fallbackSerializedMarkdown = "", this._error = void 0, this._emitSnapshot("external", !0);
        } catch (e) {
            if (t !== this._loadGeneration || !this._hasStarted) return;
            this._clearModelReference(), await this._loadFallbackContent(t, !0, e);
        }
    }
    updateRichPlan(t, e) {
        if (this._snapshot.isReadonly) return;
        const n = this._modelReference?.modelRef.object.textEditorModel;
        if (!n) return;
        let i;
        try {
            i = YQv(n.getValue()).frontmatter;
        } catch (s) {
            this._error = s, this._emitSnapshot();
            return;
        }
        const r = ZhC(t, e, i);
        if (r !== n.getValue()) {
            this._isApplyingLocalEdit = !0;
            try {
                n.setValue(r);
            } finally{
                this._isApplyingLocalEdit = !1;
            }
        }
    }
    async save() {
        if (!this._snapshot.isReadonly) try {
            await this._options.agentReference.savePlanContent(this._options.planId), this._error = void 0, this._emitSnapshot();
        } catch (t) {
            throw this._error = t, this._emitSnapshot(), t;
        }
    }
    async revert() {
        const t = this._modelReference?.uri;
        if (t) try {
            await this._options.textFileService.revert(t, {
                force: !0
            }), this._error = void 0, this._emitSnapshot();
        } catch (e) {
            throw this._error = e, this._emitSnapshot(), e;
        }
    }
    async _reloadIfModelUriChanged() {
        const t = ++this._loadGeneration;
        try {
            const e = await this._options.agentReference.createPlanContentModelReference(this._options.planId);
            if (t !== this._loadGeneration || !this._hasStarted) {
                e?.modelRef.dispose();
                return;
            }
            if (!e) {
                this._clearModelReference(), await this._loadFallbackContent(t, !1);
                return;
            }
            if (this._modelReference?.uri.toString() === e.uri.toString()) {
                if (e.modelRef.dispose(), await this._reloadFromDiskIfClean(), t !== this._loadGeneration || !this._hasStarted) return;
                this._isLoading = !1, this._emitSnapshot();
                return;
            }
            this._setModelReference(e), this._isLoading = !1, this._fallbackSerializedMarkdown = "", this._error = void 0, this._emitSnapshot("external", !1);
        } catch (e) {
            if (t !== this._loadGeneration || !this._hasStarted) return;
            this._clearModelReference(), await this._loadFallbackContent(t, !1, e);
        }
    }
    async _reloadFromDiskIfClean() {
        const t = this._modelReference?.uri;
        if (!(!t || this._options.textFileService.isDirty(t))) try {
            await this._options.textFileService.revert(t, {
                force: !0
            });
        } catch  {}
    }
    async _loadFallbackContent(t, e, n) {
        try {
            const i = await this._options.agentReference.getPlanContent(this._options.planId);
            if (t !== this._loadGeneration || !this._hasStarted) return;
            if (i === void 0 && n !== void 0) {
                this._fallbackSerializedMarkdown = "", this._isLoading = !1, this._error = n, this._emitSnapshot();
                return;
            }
            this._fallbackSerializedMarkdown = i ?? "", this._isLoading = !1, this._error = void 0, this._emitSnapshot("external", e);
        } catch (i) {
            if (t !== this._loadGeneration || !this._hasStarted) return;
            this._fallbackSerializedMarkdown = "", this._isLoading = !1, this._error = n ?? i, this._emitSnapshot();
        }
    }
    _setModelReference(t) {
        this._clearModelReference(), this._modelReference = t, this._modelDisposables.add(t.modelRef), this._modelDisposables.add(t.modelRef.object.textEditorModel.onDidChangeContent(()=>{
            this._emitSnapshot(this._isApplyingLocalEdit ? "local" : "external", !1);
        }));
    }
    _clearModelReference() {
        this._modelReference = void 0, this._modelDisposables.clear();
    }
    _getDirtyState() {
        const t = this._modelReference?.uri;
        return t ? this._options.textFileService.isDirty(t) : !1;
    }
    _getReadonlyState() {
        const t = this._modelReference?.modelRef.object.isReadonly();
        return this._options.isReadonly || t !== !1;
    }
    _getSerializedMarkdown() {
        return this._modelReference?.modelRef.object.textEditorModel.getValue() ?? this._fallbackSerializedMarkdown;
    }
    _computeSnapshot(t, e) {
        const n = this._getSerializedMarkdown();
        try {
            const { plan: i, body: r } = YQv(n);
            return t !== void 0 && ((e || t === "external" && r !== this._lastBody) && this._bodySourceVersion++, this._lastBody = r), {
                serializedMarkdown: n,
                plan: i,
                body: r,
                bodySourceVersion: this._bodySourceVersion,
                isDirty: this._getDirtyState(),
                isReadonly: this._getReadonlyState(),
                isLoading: this._isLoading,
                error: this._error
            };
        } catch (i) {
            return {
                ...$Ls,
                serializedMarkdown: n,
                bodySourceVersion: this._bodySourceVersion,
                isDirty: this._getDirtyState(),
                isReadonly: this._getReadonlyState(),
                isLoading: this._isLoading,
                error: i
            };
        }
    }
    _emitSnapshot(t, e = !1) {
        const n = this._snapshot.isDirty;
        this._snapshot = this._computeSnapshot(t, e);
        const i = n !== this._snapshot.isDirty;
        this._onDidChangeSnapshot.fire(this._snapshot), i && this._onDidChangeDirty.fire(this._snapshot.isDirty);
    }
};

}
