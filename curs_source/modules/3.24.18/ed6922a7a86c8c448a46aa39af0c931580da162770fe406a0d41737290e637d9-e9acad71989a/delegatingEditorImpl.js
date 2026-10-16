import { Se, bt, ve, we } from "./HVr.js";
import { x } from "./tslib.es6.js";
var eis, y7c;
export { eis, y7c };
var __wakaru_vSg_initialized = false;
export function vSg() {
if (__wakaru_vSg_initialized) return;
__wakaru_vSg_initialized = true;
"use strict";
x(), bt(), Se(), eis = class Wkm extends we {
    constructor(){
        super(...arguments), this._id = ++Wkm.idCounter, this._onDidDispose = this._register(new ve), this.onDidDispose = this._onDidDispose.event;
    }
    getId() {
        return this.getEditorType() + ":v2:" + this._id;
    }
    getVisibleColumnFromPosition(t) {
        return this._targetEditor.getVisibleColumnFromPosition(t);
    }
    getStatusbarColumn(t) {
        return this._targetEditor.getStatusbarColumn(t);
    }
    getPosition() {
        return this._targetEditor.getPosition();
    }
    setPosition(t, n = "api") {
        this._targetEditor.setPosition(t, n);
    }
    revealLine(t, n = 0) {
        this._targetEditor.revealLine(t, n);
    }
    revealLineInCenter(t, n = 0) {
        this._targetEditor.revealLineInCenter(t, n);
    }
    revealLineInCenterIfOutsideViewport(t, n = 0) {
        this._targetEditor.revealLineInCenterIfOutsideViewport(t, n);
    }
    revealLineNearTop(t, n = 0) {
        this._targetEditor.revealLineNearTop(t, n);
    }
    revealPosition(t, n = 0) {
        this._targetEditor.revealPosition(t, n);
    }
    revealPositionInCenter(t, n = 0) {
        this._targetEditor.revealPositionInCenter(t, n);
    }
    revealPositionInCenterIfOutsideViewport(t, n = 0) {
        this._targetEditor.revealPositionInCenterIfOutsideViewport(t, n);
    }
    revealPositionNearTop(t, n = 0) {
        this._targetEditor.revealPositionNearTop(t, n);
    }
    getSelection() {
        return this._targetEditor.getSelection();
    }
    getSelections() {
        return this._targetEditor.getSelections();
    }
    setSelection(t, n = "api") {
        this._targetEditor.setSelection(t, n);
    }
    setSelections(t, n = "api") {
        this._targetEditor.setSelections(t, n);
    }
    revealLines(t, n, i = 0) {
        this._targetEditor.revealLines(t, n, i);
    }
    revealLinesInCenter(t, n, i = 0) {
        this._targetEditor.revealLinesInCenter(t, n, i);
    }
    revealLinesInCenterIfOutsideViewport(t, n, i = 0) {
        this._targetEditor.revealLinesInCenterIfOutsideViewport(t, n, i);
    }
    revealLinesNearTop(t, n, i = 0) {
        this._targetEditor.revealLinesNearTop(t, n, i);
    }
    revealRange(t, n = 0, i = !1, r = !0) {
        this._targetEditor.revealRange(t, n, i, r);
    }
    revealRangeInCenter(t, n = 0) {
        this._targetEditor.revealRangeInCenter(t, n);
    }
    revealRangeInCenterIfOutsideViewport(t, n = 0) {
        this._targetEditor.revealRangeInCenterIfOutsideViewport(t, n);
    }
    revealRangeNearTop(t, n = 0) {
        this._targetEditor.revealRangeNearTop(t, n);
    }
    revealRangeNearTopIfOutsideViewport(t, n = 0) {
        this._targetEditor.revealRangeNearTopIfOutsideViewport(t, n);
    }
    revealRangeAtTop(t, n = 0) {
        this._targetEditor.revealRangeAtTop(t, n);
    }
    getSupportedActions() {
        return this._targetEditor.getSupportedActions();
    }
    focus() {
        this._targetEditor.focus();
    }
    trigger(t, n, i) {
        this._targetEditor.trigger(t, n, i);
    }
    createDecorationsCollection(t) {
        return this._targetEditor.createDecorationsCollection(t);
    }
    changeDecorations(t) {
        return this._targetEditor.changeDecorations(t);
    }
}, eis.idCounter = 0, y7c = eis;

}
