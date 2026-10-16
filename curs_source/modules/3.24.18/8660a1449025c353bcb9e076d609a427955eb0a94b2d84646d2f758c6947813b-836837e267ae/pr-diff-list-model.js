import { Qe } from "./Iwo.js";
import { wOs, zt_ } from "./diff-list-model.contract.js";
import { Xt_, emc } from "./diff-list-model.js";
import { Kt_, Qpc } from "./glass-diff-find.js";
import { c3e } from "./gpc.js";
import { $pc, Ht_ } from "./monaco-list-virtualizer.js";
import { WYe } from "./pr-diff-render-utils.js";
import { E } from "./tslib.es6.js";
var Zt_;
export { Zt_ };
var __wakaru_imc_initialized = false;
export function imc() {
if (__wakaru_imc_initialized) return;
__wakaru_imc_initialized = true;
"use strict";
E(), Qe(), Kt_(), Ht_(), zt_(), Xt_(), WYe(), Zt_ = class extends emc {
    constructor(){
        const t = new $pc;
        super(t), this._findDocuments = [], this._findDocumentModel = new Qpc, this._findSourcesByDiffKey = new Map, this._hydratedFindDocumentOverrides = new Map, this._seededDiffKeys = new Set, this._lastDefaultCollapsedDiffKeys = new Set, this._lifetimeAttached = !1, this._register(t);
    }
    attach() {
        this._lifetimeAttached || (this.bindVirtualizerLifetime(), this._lifetimeAttached = !0);
    }
    detach() {
        this.unbindVirtualizerLifetime(), this._lifetimeAttached = !1;
    }
    setDiffs(t, e, n) {
        const i = wOs.orderByFileTree(t, (u)=>u.path), r = i.map((u)=>this._createFindSource(u)), s = new Map(r.map((u)=>[
                u.document.diffKey,
                u
            ]));
        for (const [u, d] of this._hydratedFindDocumentOverrides){
            const h = s.get(u);
            (!h || d.contentRevisionKey !== n || !this._findDocumentModel.areDocumentsEqual([
                d.sourceDocument
            ], [
                h.document
            ])) && this._hydratedFindDocumentOverrides.delete(u);
        }
        this._contentRevisionKey = n, this._findSourcesByDiffKey = s;
        const o = r.map((u)=>this._hydratedFindDocumentOverrides.get(u.document.diffKey)?.hydratedDocument ?? u.document), a = new Set(e ?? []);
        if (this._findDocumentModel.areDocumentsEqual(this._findDocuments, o)) {
            this._lastDefaultCollapsedDiffKeys = a;
            return;
        }
        this._findDocuments = o;
        const l = o.map((u)=>({
                id: u.diffKey,
                key: u.diffKey
            }));
        this.activeVirtualizer.setFilePaths(l.map((u)=>u.id)), this._seedCardOpenDefaults(i, a), this._reexpandViewedFilesAfterContentChange(new Set(l.map((u)=>u.id)), a), this._lastDefaultCollapsedDiffKeys = a;
        const c = new Map(i.map((u)=>[
                c3e(u),
                u.status === "added" ? 999 : 3
            ]));
        this._findEngine.setDocuments(o, c), this.setRows(l);
    }
    setHydratedFileContext(t) {
        const e = this._createFindSource(t.sourceDiff), n = e.document.diffKey, i = this._findDocumentModel.createDocument({
            ...e.input,
            originalContent: t.originalContent,
            modifiedContent: t.modifiedContent,
            byteSize: t.originalContent.length + t.modifiedContent.length,
            precomputedDiff: void 0,
            contentsLineSpace: "file"
        }), r = {
            contentRevisionKey: t.contentRevisionKey,
            sourceDocument: e.document,
            hydratedDocument: i
        };
        if (t.contentRevisionKey !== this._contentRevisionKey) {
            this._hydratedFindDocumentOverrides.set(n, r);
            return;
        }
        const s = this._findSourcesByDiffKey.get(n);
        if (!s || !this._findDocumentModel.areDocumentsEqual([
            e.document
        ], [
            s.document
        ])) return;
        const o = this._findDocuments.findIndex((c)=>c.diffKey === n), a = this._findDocuments[o];
        if (!a || this._findDocumentModel.areDocumentsEqual([
            a
        ], [
            i
        ])) return;
        this._hydratedFindDocumentOverrides.set(n, r);
        const l = [
            ...this._findDocuments
        ];
        l[o] = i, this._findDocuments = l, this._findEngine.updateDocument(i);
    }
    _seedCardOpenDefaults(t, e) {
        const n = new Set(t.map((i)=>c3e(i)));
        for (const i of [
            ...this._seededDiffKeys
        ])n.has(i) || this._seededDiffKeys.delete(i);
        for (const i of t){
            const r = c3e(i);
            this._seededDiffKeys.has(r) || (this._seededDiffKeys.add(r), (i.status === "deleted" || e.has(r)) && this.setCardOpen({
                filePath: r,
                open: !1
            }));
        }
    }
    _reexpandViewedFilesAfterContentChange(t, e) {
        for (const n of this._lastDefaultCollapsedDiffKeys)t.has(n) && !e.has(n) && this.setCardOpen({
            filePath: n,
            open: !0
        });
    }
    _getSearchFilePath(t) {
        return t.status === "renamed" ? t.fullPath ?? t.path : t.fullPath || t.path;
    }
    _createFindSource(t) {
        const e = {
            diffKey: c3e(t),
            filePath: this._getSearchFilePath(t),
            originalContent: t.originalContent,
            modifiedContent: t.modifiedContent,
            additions: t.additions,
            deletions: t.deletions,
            byteSize: t.originalContent.length + t.modifiedContent.length,
            precomputedDiff: t.precomputedDiff,
            contentsLineSpace: t.precomputedDiff ? "diffRows" : "file"
        };
        return {
            input: e,
            document: this._findDocumentModel.createDocument(e)
        };
    }
};

}
