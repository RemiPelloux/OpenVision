import { Ga } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { It } from "./instantiation.js";
import { du, gd } from "./map.js";
import { Ki, Ot } from "./network.js";
import { E } from "./tslib.es6.js";
import { Aja, Rja } from "./yBp.js";
var oXr, aXr, hCm, Pja, pCm;
export { Pja, aXr, hCm, oXr, pCm };
var __wakaru_lXr_initialized = false;
export function lXr() {
if (__wakaru_lXr_initialized) return;
__wakaru_lXr_initialized = true;
"use strict";
E(), Ga(), du(), Ki(), Rn(), It(), oXr = jn("notebookDocumentService"), aXr = [
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
], hCm = new RegExp(`^[${aXr.join("")}]+`), Pja = 7, pCm = class {
    constructor(){
        this._documents = new gd;
    }
    getNotebook(t) {
        if (t.scheme === Ot.vscodeNotebookCell) {
            const e = Aja(t);
            if (e) {
                const n = this._documents.get(e.notebook);
                if (n) return n;
            }
        }
        if (t.scheme === Ot.vscodeNotebookCellOutput) {
            const e = Rja(t);
            if (e) {
                const n = this._documents.get(e.notebook);
                if (n) return n;
            }
        }
        return this._documents.get(t);
    }
    addNotebookDocument(t) {
        this._documents.set(t.uri, t);
    }
    removeNotebookDocument(t) {
        this._documents.delete(t.uri);
    }
}, bn(oXr, pCm, 1);

}
