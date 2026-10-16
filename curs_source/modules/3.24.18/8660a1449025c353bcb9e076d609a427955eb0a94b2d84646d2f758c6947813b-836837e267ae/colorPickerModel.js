import { Gt, tt } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var eKd;
export { eKd };
var __wakaru_OOy_initialized = false;
export function OOy() {
if (__wakaru_OOy_initialized) return;
__wakaru_OOy_initialized = true;
"use strict";
E(), Gt(), eKd = class {
    constructor(t, e, n){
        this.presentationIndex = n, this._onColorFlushed = new tt, this.onColorFlushed = this._onColorFlushed.event, this._onDidChangeColor = new tt, this.onDidChangeColor = this._onDidChangeColor.event, this._onDidChangePresentation = new tt, this.onDidChangePresentation = this._onDidChangePresentation.event, this.originalColor = t, this._color = t, this._colorPresentations = e;
    }
    get color() {
        return this._color;
    }
    set color(t) {
        this._color.equals(t) || (this._color = t, this._onDidChangeColor.fire(t));
    }
    get presentation() {
        return this.colorPresentations[this.presentationIndex];
    }
    get colorPresentations() {
        return this._colorPresentations;
    }
    set colorPresentations(t) {
        this._colorPresentations = t, this.presentationIndex > t.length - 1 && (this.presentationIndex = 0), this._onDidChangePresentation.fire(this.presentation);
    }
    selectNextColorPresentation() {
        this.presentationIndex = (this.presentationIndex + 1) % this.colorPresentations.length, this.flushColor(), this._onDidChangePresentation.fire(this.presentation);
    }
    guessColorPresentation(t, e) {
        let n = -1;
        for(let i = 0; i < this.colorPresentations.length; i++)if (e.toLowerCase() === this.colorPresentations[i].label) {
            n = i;
            break;
        }
        if (n === -1) {
            const i = e.split("(")[0].toLowerCase();
            for(let r = 0; r < this.colorPresentations.length; r++)if (this.colorPresentations[r].label.toLowerCase().startsWith(i)) {
                n = r;
                break;
            }
        }
        n !== -1 && n !== this.presentationIndex && (this.presentationIndex = n, this._onDidChangePresentation.fire(this.presentation));
    }
    flushColor() {
        this._onColorFlushed.fire(this._color);
    }
};

}
