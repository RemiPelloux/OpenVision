import { jn } from "./HVr.js";
import { Q9, tb } from "./mime.js";
import { x } from "./tslib.es6.js";
var N_i, XOt, O_i, ZOt;
export { N_i, O_i, XOt, ZOt };
var __wakaru_Xfn_initialized = false;
export function Xfn() {
if (__wakaru_Xfn_initialized) return;
__wakaru_Xfn_initialized = true;
"use strict";
x(), jn(), Q9(), N_i = class {
    constructor(){
        this._lastState = null;
    }
    set(t, n) {
        this._lastState = {
            lastCopiedValue: t,
            data: n
        };
    }
    get(t) {
        return this._lastState && this._lastState.lastCopiedValue === t ? this._lastState.data : (this._lastState = null, null);
    }
}, N_i.INSTANCE = new N_i, XOt = N_i, O_i = {
    forceCopyWithSyntaxHighlighting: !1
}, ZOt = {
    getTextData (e) {
        const t = e.getData(tb.text);
        let n = null;
        const i = e.getData("vscode-editor-data");
        if (typeof i == "string") try {
            n = JSON.parse(i), n.version !== 1 && (n = null);
        } catch  {}
        return t.length === 0 && n === null && e.files.length > 0 ? [
            Array.prototype.slice.call(e.files, 0).map((s)=>s.name).join(`
`),
            null
        ] : [
            t,
            n
        ];
    },
    setTextData (e, t, n, i) {
        e.setData(tb.text, t), typeof n == "string" && e.setData("text/html", n), e.setData("vscode-editor-data", JSON.stringify(i));
    }
};

}
