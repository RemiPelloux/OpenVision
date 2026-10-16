import { Di } from "./Iwo.js";
import { Jk, tB } from "./mime.js";
import { E } from "./tslib.es6.js";
var lCr, xfn, cCr, Afn;
export { Afn, cCr, lCr, xfn };
var __wakaru_Esi_initialized = false;
export function Esi() {
if (__wakaru_Esi_initialized) return;
__wakaru_Esi_initialized = true;
"use strict";
E(), Di(), tB(), lCr = class {
    constructor(){
        this._lastState = null;
    }
    set(e, n) {
        this._lastState = {
            lastCopiedValue: e,
            data: n
        };
    }
    get(e) {
        return this._lastState && this._lastState.lastCopiedValue === e ? this._lastState.data : (this._lastState = null, null);
    }
}, lCr.INSTANCE = new lCr, xfn = lCr, cCr = {
    forceCopyWithSyntaxHighlighting: !1
}, Afn = {
    getTextData (t) {
        const e = t.getData(Jk.text);
        let n = null;
        const i = t.getData("vscode-editor-data");
        if (typeof i == "string") try {
            n = JSON.parse(i), n.version !== 1 && (n = null);
        } catch  {}
        return e.length === 0 && n === null && t.files.length > 0 ? [
            Array.prototype.slice.call(t.files, 0).map((s)=>s.name).join(`
`),
            null
        ] : [
            e,
            n
        ];
    },
    setTextData (t, e, n, i) {
        t.setData(Jk.text, e), typeof n == "string" && t.setData("text/html", n), t.setData("vscode-editor-data", JSON.stringify(i));
    }
};

}
