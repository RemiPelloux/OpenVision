import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Hi, Rr, cn } from "./contextkey.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Bja, X7, pXr;
export { Bja, X7, pXr };
var __wakaru_dPe_initialized = false;
export function dPe() {
if (__wakaru_dPe_initialized) return;
__wakaru_dPe_initialized = true;
"use strict";
E(), Gt(), It(), Qe(), Rn(), Hi(), Bja = new cn("editcontextbarcursor", !1), X7 = jn("cmdKStateService"), pXr = class extends st {
    constructor(t){
        super(), this.contextKeyService = t, this._onDiffAttachmentChanged = this._register(new tt), this.onDiffAttachmentChanged = this._onDiffAttachmentChanged.event, this._onPromptBarAdded = this._register(new tt), this.onPromptBarAdded = this._onPromptBarAdded.event, this._onPromptBarRemoved = this._register(new tt), this.onPromptBarRemoved = this._onPromptBarRemoved.event, this._onPropertyChanged = this._register(new tt), this.onPropertyChanged = this._onPropertyChanged.event, this._onDataPropertyChanged = this._register(new tt), this.onDataPropertyChanged = this._onDataPropertyChanged.event, this._promptBars = [], this._editPromptBarContextKey = Bja.bindTo(this.contextKeyService);
    }
    getPromptBars() {
        return this._promptBars;
    }
    addPromptBar(t) {
        this._promptBars.push(t), this._onPromptBarAdded.fire(t), this._promptBars.length === 1 && this._editPromptBarContextKey.set(!0);
    }
    getPromptBar(t) {
        return this._promptBars.find((e)=>e.id === t);
    }
    getPromptBarByDiffId(t) {
        return this._promptBars.find((e)=>e.diffId === t);
    }
    updatePromptBar(t, e, n) {
        const i = this.getPromptBar(t);
        i && (i[e] = n, e === "diffId" && this._onDiffAttachmentChanged.fire(i), this._onPropertyChanged.fire({
            promptBar: i,
            key: e
        }));
    }
    updatePromptBarData(t, e) {
        const n = this.getPromptBar(t);
        if (n) {
            Object.assign(n.data, e);
            for (const i of Object.keys(e))this._onDataPropertyChanged.fire({
                promptBar: n,
                key: i
            });
            n.forceRerenderInputBox++, this._onPropertyChanged.fire({
                promptBar: n,
                key: "forceRerenderInputBox"
            });
        }
    }
    appendChatResponse(t, e) {
        const n = this.getPromptBar(t);
        n && (n.chatResponse = n.chatResponse ? n.chatResponse + e : e, this._onPropertyChanged.fire({
            promptBar: n,
            key: "chatResponse"
        }));
    }
    appendDataSelection(t, e) {
        const n = this.getPromptBar(t);
        n && (n.data.selections.push(e), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selections"
        }));
    }
    removeDataSelection(t, e) {
        const n = this.getPromptBar(t);
        n && (n.data.selections.splice(e, 1), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selections"
        }));
    }
    appendDataCommit(t, e) {
        const n = this.getPromptBar(t);
        n && (n.data.selectedCommits ??= [], n.data.selectedCommits?.push(e), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selectedCommits"
        }));
    }
    removeDataCommit(t, e) {
        const n = this.getPromptBar(t);
        n && (n.data.selectedCommits?.splice(e, 1), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selectedCommits"
        }));
    }
    appendDataDoc(t, e) {
        const n = this.getPromptBar(t);
        n && (n.data.selectedDocs ??= [], n.data.selectedDocs.push(e), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selectedDocs"
        }));
    }
    removeDataDoc(t, e) {
        const n = this.getPromptBar(t);
        n && (n.data.selectedDocs = n.data.selectedDocs?.filter((i)=>i.docId !== e), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selectedDocs"
        }));
    }
    appendDataLink(t, e) {
        const n = this.getPromptBar(t);
        n && (n.data.selectedLinks ??= [], n.data.selectedLinks.push(e), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selectedLinks"
        }));
    }
    removeDataLink(t, e) {
        const n = this.getPromptBar(t);
        n && (n.data.selectedLinks = n.data.selectedLinks?.filter((i)=>i.uuid !== e), this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "selectedLinks"
        }));
    }
    setDataImage(t, e) {
        const n = this.getPromptBar(t);
        n && (n.data.images = e ? [
            e
        ] : [], this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "images"
        }));
    }
    updateDataInitText(t, e) {
        const n = this.getPromptBar(t);
        n && (n.data.initText = e, this._onDataPropertyChanged.fire({
            promptBar: n,
            key: "initText"
        }));
    }
    prependPreviousStructuredTextsNewestFirst(t, e) {
        const n = this.getPromptBar(t);
        n && (n.previousStructuredTextsNewestFirst = [
            ...e,
            ...n.previousStructuredTextsNewestFirst
        ], this._onPropertyChanged.fire({
            promptBar: n,
            key: "previousStructuredTextsNewestFirst"
        }));
    }
    removePromptBar(t) {
        const e = this._promptBars.findIndex((n)=>n.id === t);
        if (e !== -1) {
            const n = this._promptBars[e];
            this._promptBars.splice(e, 1), this._promptBars.length === 0 && this._editPromptBarContextKey.set(!1), this._onPromptBarRemoved.fire(n);
        }
    }
    replacePromptBar(t) {
        const e = this._promptBars.findIndex((n)=>n.id === t.id);
        e !== -1 ? this._promptBars[e] = t : this._promptBars.push(t);
    }
}, pXr = Re([
    F(0, Rr)
], pXr), bn(X7, pXr, 0);

}
