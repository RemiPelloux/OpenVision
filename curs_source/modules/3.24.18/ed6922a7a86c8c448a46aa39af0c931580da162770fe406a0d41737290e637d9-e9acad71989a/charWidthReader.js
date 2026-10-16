import { WK } from "./domFontInfo.js";
import { c2 } from "./qIc.js";
import { x } from "./tslib.es6.js";
var y5c, S5c;
export { S5c, y5c };
var __wakaru_cvg_initialized = false;
export function cvg() {
if (__wakaru_cvg_initialized) return;
__wakaru_cvg_initialized = true;
"use strict";
x(), WK(), y5c = class {
    constructor(e, t){
        this.chr = e, this.type = t, this.width = 0;
    }
    fulfill(e) {
        this.width = e;
    }
}, S5c = class Ckm {
    constructor(t, n){
        this._bareFontInfo = t, this._requests = n, this._container = null, this._testElements = null;
    }
    read(t) {
        this._createDomElements(), t.document.body.appendChild(this._container), this._readFromDomElements(), this._container?.remove(), this._container = null, this._testElements = null;
    }
    _createDomElements() {
        const t = document.createElement("div");
        t.style.position = "absolute", t.style.top = "-50000px", t.style.width = "50000px";
        const n = document.createElement("div");
        c2(n, this._bareFontInfo), t.appendChild(n);
        const i = document.createElement("div");
        c2(i, this._bareFontInfo), i.style.fontWeight = "bold", t.appendChild(i);
        const r = document.createElement("div");
        c2(r, this._bareFontInfo), r.style.fontStyle = "italic", t.appendChild(r);
        const s = [];
        for (const o of this._requests){
            let a;
            o.type === 0 && (a = n), o.type === 2 && (a = i), o.type === 1 && (a = r), a.appendChild(document.createElement("br"));
            const c = document.createElement("span");
            Ckm._render(c, o), a.appendChild(c), s.push(c);
        }
        this._container = t, this._testElements = s;
    }
    static _render(t, n) {
        if (n.chr === " ") {
            let i = "\xA0";
            for(let r = 0; r < 8; r++)i += i;
            t.innerText = i;
        } else {
            let i = n.chr;
            for(let r = 0; r < 8; r++)i += i;
            t.textContent = i;
        }
    }
    _readFromDomElements() {
        for(let t = 0, n = this._requests.length; t < n; t++){
            const i = this._requests[t], r = this._testElements[t];
            i.fulfill(r.offsetWidth / 256);
        }
    }
};

}
