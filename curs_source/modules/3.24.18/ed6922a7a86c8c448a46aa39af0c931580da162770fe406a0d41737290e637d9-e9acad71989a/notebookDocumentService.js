import { lao, uao } from "./A3u.js";
import { Fo } from "./HVr.js";
import { Pn } from "./extensions.js";
import { Ze } from "./instantiation.js";
import { Mc, oc } from "./map.js";
import { gt, li } from "./network.js";
import { mn, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
var dNn, AGi, VOd, dao, jOd;
export { AGi, VOd, dNn, dao, jOd };
var __wakaru_hNn_initialized = false;
export function hNn() {
if (__wakaru_hNn_initialized) return;
__wakaru_hNn_initialized = true;
"use strict";
x(), Fo(), oc(), li(), Pn(), Ze(), dNn = vn("notebookDocumentService"), AGi = [
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
], VOd = new RegExp(`^[${AGi.join("")}]+`), dao = 7, jOd = class {
    constructor(){
        this._documents = new Mc;
    }
    getNotebook(e) {
        if (e.scheme === gt.vscodeNotebookCell) {
            const t = lao(e);
            if (t) {
                const n = this._documents.get(t.notebook);
                if (n) return n;
            }
        }
        if (e.scheme === gt.vscodeNotebookCellOutput) {
            const t = uao(e);
            if (t) {
                const n = this._documents.get(t.notebook);
                if (n) return n;
            }
        }
        return this._documents.get(e);
    }
    addNotebookDocument(e) {
        this._documents.set(e.uri, e);
    }
    removeNotebookDocument(e) {
        this._documents.delete(e.uri);
    }
}, mn(dNn, jOd, 1);

}
