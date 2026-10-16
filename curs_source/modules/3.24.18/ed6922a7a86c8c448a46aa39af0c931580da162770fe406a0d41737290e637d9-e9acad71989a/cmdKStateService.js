import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { At, dn, xn } from "./contextkey.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var gao, Y3, NGi;
export { NGi, Y3, gao };
var __wakaru_f_e_initialized = false;
export function f_e() {
if (__wakaru_f_e_initialized) return;
__wakaru_f_e_initialized = true;
"use strict";
x(), bt(), Ze(), Se(), Pn(), dn(), gao = new At("editcontextbarcursor", !1), Y3 = vn("cmdKStateService"), NGi = class extends we {
    constructor(e){
        super(), this.contextKeyService = e, this._onDiffAttachmentChanged = this._register(new ve), this.onDiffAttachmentChanged = this._onDiffAttachmentChanged.event, this._onPromptBarAdded = this._register(new ve), this.onPromptBarAdded = this._onPromptBarAdded.event, this._onPromptBarRemoved = this._register(new ve), this.onPromptBarRemoved = this._onPromptBarRemoved.event, this._onPropertyChanged = this._register(new ve), this.onPropertyChanged = this._onPropertyChanged.event, this._onDataPropertyChanged = this._register(new ve), this.onDataPropertyChanged = this._onDataPropertyChanged.event, this._promptBars = [], this._editPromptBarContextKey = gao.bindTo(this.contextKeyService);
    }
    getPromptBars() {
        return this._promptBars;
    }
    addPromptBar(e) {
        this._promptBars.push(e), this._onPromptBarAdded.fire(e), this._promptBars.length === 1 && this._editPromptBarContextKey.set(!0);
    }
    getPromptBar(e) {
        return this._promptBars.find((t)=>t.id === e);
    }
    getPromptBarByDiffId(e) {
        return this._promptBars.find((t)=>t.diffId === e);
    }
    updatePromptBar(e, t, n) {
        const i = this.getPromptBar(e);
        i && (i[t] = n, t === "diffId" && this._onDiffAttachmentChanged.fire(i), this._onPropertyChanged.fire({
            promptBar: i,
            key: t
        }));
    }
    updatePromptBarData(e, t) {
        const n = this.getPromptBar(e);
        if (n) {
            Object.assign(n.data, t);
            for (const i of Object.keys(t))this._onDataPropertyChanged.fire({
                promptBar: n,
                key: i
            });
            n.forceRerenderInputBox++, this._onPropertyChanged.fire({
                promptBar: n,
                key: "forceRerenderInputBox"
            });
        }
    }
    appendChatResponse(e, t) {
        const n = this.getPromptBar(e);
        n && (n.chatResponse = n.chatResponse ? n.chatResponse + t : t, this._onPropertyChanged.fire({
            promptBar: n,
            key: "chatResponse"
        }));
    }
    appendDataSelection(e, t) {
        const n = this.getPromptBar(e);
        n && (n.data.selections.push(t), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selections"
        }));
    }
    removeDataSelection(e, t) {
        const n = this.getPromptBar(e);
        n && (n.data.selections.splice(t, 1), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selections"
        }));
    }
    appendDataCommit(e, t) {
        const n = this.getPromptBar(e);
        n && (n.data.selectedCommits ??= [], n.data.selectedCommits?.push(t), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selectedCommits"
        }));
    }
    removeDataCommit(e, t) {
        const n = this.getPromptBar(e);
        n && (n.data.selectedCommits?.splice(t, 1), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selectedCommits"
        }));
    }
    appendDataDoc(e, t) {
        const n = this.getPromptBar(e);
        n && (n.data.selectedDocs ??= [], n.data.selectedDocs.push(t), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selectedDocs"
        }));
    }
    removeDataDoc(e, t) {
        const n = this.getPromptBar(e);
        n && (n.data.selectedDocs = n.data.selectedDocs?.filter((i)=>i.docId !== t), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selectedDocs"
        }));
    }
    appendDataLink(e, t) {
        const n = this.getPromptBar(e);
        n && (n.data.selectedLinks ??= [], n.data.selectedLinks.push(t), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selectedLinks"
        }));
    }
    removeDataLink(e, t) {
        const n = this.getPromptBar(e);
        n && (n.data.selectedLinks = n.data.selectedLinks?.filter((i)=>i.uuid !== t), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selectedLinks"
        }));
    }
    setDataImage(e, t) {
        const n = this.getPromptBar(e);
        n && (n.data.images = t ? [
            t
        ] : [], this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "images"
        }));
    }
    updateDataInitText(e, t) {
        const n = this.getPromptBar(e);
        n && (n.data.initText = t, this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "initText"
        }));
    }
    prependPreviousStructuredTextsNewestFirst(e, t) {
        const n = this.getPromptBar(e);
        n && (n.previousStructuredTextsNewestFirst = [
            ...t,
            ...n.previousStructuredTextsNewestFirst
        ], this._onPropertyChanged.fire({
            promptBar: n,
            key: "previousStructuredTextsNewestFirst"
        }));
    }
    removePromptBar(e) {
        const t = this._promptBars.findIndex((n)=>n.id === e);
        if (t !== -1) {
            const n = this._promptBars[t];
            this._promptBars.splice(t, 1), this._promptBars.length === 0 && this._editPromptBarContextKey.set(!1), this._onPromptBarRemoved.fire(n);
        }
    }
    replacePromptBar(e) {
        const t = this._promptBars.findIndex((n)=>n.id === e.id);
        t !== -1 ? this._promptBars[t] = e : this._promptBars.push(e);
    }
}, NGi = ie([
    C(0, xn)
], NGi), mn(Y3, NGi, 0);

}
