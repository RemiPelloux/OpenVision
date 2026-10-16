import { bt, ve } from "./HVr.js";
import { x } from "./tslib.es6.js";
var cHc;
export { cHc };
var __wakaru_tkg_initialized = false;
export function tkg() {
if (__wakaru_tkg_initialized) return;
__wakaru_tkg_initialized = true;
"use strict";
x(), bt(), cHc = class {
    constructor(e, t, n){
        this.presentationIndex = n, this._onColorFlushed = new ve, this.onColorFlushed = this._onColorFlushed.event, this._onDidChangeColor = new ve, this.onDidChangeColor = this._onDidChangeColor.event, this._onDidChangePresentation = new ve, this.onDidChangePresentation = this._onDidChangePresentation.event, this.originalColor = e, this._color = e, this._colorPresentations = t;
    }
    get color() {
        return this._color;
    }
    set color(e) {
        this._color.equals(e) || (this._color = e, this._onDidChangeColor.fire(e));
    }
    get presentation() {
        return this.colorPresentations[this.presentationIndex];
    }
    get colorPresentations() {
        return this._colorPresentations;
    }
    set colorPresentations(e) {
        this._colorPresentations = e, this.presentationIndex > e.length - 1 && (this.presentationIndex = 0), this._onDidChangePresentation.fire(this.presentation);
    }
    selectNextColorPresentation() {
        this.presentationIndex = (this.presentationIndex + 1) % this.colorPresentations.length, this.flushColor(), this._onDidChangePresentation.fire(this.presentation);
    }
    guessColorPresentation(e, t) {
        let n = -1;
        for(let i = 0; i < this.colorPresentations.length; i++)if (t.toLowerCase() === this.colorPresentations[i].label) {
            n = i;
            break;
        }
        if (n === -1) {
            const i = t.split("(")[0].toLowerCase();
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
