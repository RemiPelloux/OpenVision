import { Ak, nqe } from "./ipa.js";
import { E } from "./tslib.es6.js";
var Vvl, gKt, BPg, U9e;
export { BPg, U9e, Vvl, gKt };
var __wakaru_vhs_initialized = false;
export function vhs() {
if (__wakaru_vhs_initialized) return;
__wakaru_vhs_initialized = true;
"use strict";
E(), Ak(), Vvl = class PXs extends nqe {
    static getType() {
        return "composer-ghost-text";
    }
    static clone(e) {
        const n = new PXs(e.getTextContent(), e.getKey());
        return n.__pendingMention = e.__pendingMention, n.__canonicalSuggestion = e.__canonicalSuggestion, n;
    }
    constructor(e, n){
        super(e, n);
    }
    createDOM(e) {
        const n = super.createDOM(e);
        return n.classList.add("composer-ghost-text"), n.setAttribute("data-ghost", "true"), n;
    }
    static importJSON(e) {
        const n = new PXs(e.text ?? "");
        return e.format !== void 0 && n.setFormat(e.format), e.detail !== void 0 && n.setDetail(e.detail), e.mode !== void 0 && n.setMode(e.mode), e.style !== void 0 && n.setStyle(e.style), n;
    }
    exportJSON() {
        return {
            ...super.exportJSON(),
            type: "composer-ghost-text",
            version: 1
        };
    }
    setPendingFileMention(e) {
        this.__pendingMention = {
            kind: "file",
            name: e.name,
            relativePath: e.relativePath,
            uri: e.uri,
            typedFragmentLength: e.typedFragmentLength
        };
    }
    getPendingFileMention() {
        return this.__pendingMention;
    }
    setCanonicalSuggestion(e) {
        this.__canonicalSuggestion = e;
    }
    getCanonicalSuggestion() {
        return this.__canonicalSuggestion;
    }
    getTextContent() {
        return PXs.forceEmptyText ? "" : super.getTextContent();
    }
}, Vvl.forceEmptyText = !1, gKt = Vvl, BPg = (t)=>new gKt(t), U9e = (t)=>t instanceof gKt;

}
