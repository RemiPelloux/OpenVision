import { Gt, Qe, st, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var sqo, Kqd;
export { Kqd, sqo };
var __wakaru_dLy_initialized = false;
export function dLy() {
if (__wakaru_dLy_initialized) return;
__wakaru_dLy_initialized = true;
"use strict";
E(), Gt(), Qe(), sqo = class pRb extends st {
    constructor(){
        super(...arguments), this._id = ++pRb.idCounter, this._onDidDispose = this._register(new tt), this.onDidDispose = this._onDidDispose.event;
    }
    getId() {
        return this.getEditorType() + ":v2:" + this._id;
    }
    getVisibleColumnFromPosition(e) {
        return this._targetEditor.getVisibleColumnFromPosition(e);
    }
    getStatusbarColumn(e) {
        return this._targetEditor.getStatusbarColumn(e);
    }
    getPosition() {
        return this._targetEditor.getPosition();
    }
    setPosition(e, n = "api") {
        this._targetEditor.setPosition(e, n);
    }
    revealLine(e, n = 0) {
        this._targetEditor.revealLine(e, n);
    }
    revealLineInCenter(e, n = 0) {
        this._targetEditor.revealLineInCenter(e, n);
    }
    revealLineInCenterIfOutsideViewport(e, n = 0) {
        this._targetEditor.revealLineInCenterIfOutsideViewport(e, n);
    }
    revealLineNearTop(e, n = 0) {
        this._targetEditor.revealLineNearTop(e, n);
    }
    revealPosition(e, n = 0) {
        this._targetEditor.revealPosition(e, n);
    }
    revealPositionInCenter(e, n = 0) {
        this._targetEditor.revealPositionInCenter(e, n);
    }
    revealPositionInCenterIfOutsideViewport(e, n = 0) {
        this._targetEditor.revealPositionInCenterIfOutsideViewport(e, n);
    }
    revealPositionNearTop(e, n = 0) {
        this._targetEditor.revealPositionNearTop(e, n);
    }
    getSelection() {
        return this._targetEditor.getSelection();
    }
    getSelections() {
        return this._targetEditor.getSelections();
    }
    setSelection(e, n = "api") {
        this._targetEditor.setSelection(e, n);
    }
    setSelections(e, n = "api") {
        this._targetEditor.setSelections(e, n);
    }
    revealLines(e, n, i = 0) {
        this._targetEditor.revealLines(e, n, i);
    }
    revealLinesInCenter(e, n, i = 0) {
        this._targetEditor.revealLinesInCenter(e, n, i);
    }
    revealLinesInCenterIfOutsideViewport(e, n, i = 0) {
        this._targetEditor.revealLinesInCenterIfOutsideViewport(e, n, i);
    }
    revealLinesNearTop(e, n, i = 0) {
        this._targetEditor.revealLinesNearTop(e, n, i);
    }
    revealRange(e, n = 0, i = !1, r = !0) {
        this._targetEditor.revealRange(e, n, i, r);
    }
    revealRangeInCenter(e, n = 0) {
        this._targetEditor.revealRangeInCenter(e, n);
    }
    revealRangeInCenterIfOutsideViewport(e, n = 0) {
        this._targetEditor.revealRangeInCenterIfOutsideViewport(e, n);
    }
    revealRangeNearTop(e, n = 0) {
        this._targetEditor.revealRangeNearTop(e, n);
    }
    revealRangeNearTopIfOutsideViewport(e, n = 0) {
        this._targetEditor.revealRangeNearTopIfOutsideViewport(e, n);
    }
    revealRangeAtTop(e, n = 0) {
        this._targetEditor.revealRangeAtTop(e, n);
    }
    getSupportedActions() {
        return this._targetEditor.getSupportedActions();
    }
    focus() {
        this._targetEditor.focus();
    }
    trigger(e, n, i) {
        this._targetEditor.trigger(e, n, i);
    }
    createDecorationsCollection(e) {
        return this._targetEditor.createDecorationsCollection(e);
    }
    changeDecorations(e) {
        return this._targetEditor.changeDecorations(e);
    }
}, sqo.idCounter = 0, Kqd = sqo;

}
