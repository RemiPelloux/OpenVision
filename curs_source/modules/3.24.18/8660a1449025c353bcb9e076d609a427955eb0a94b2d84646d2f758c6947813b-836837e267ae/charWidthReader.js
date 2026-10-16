import { she } from "./domFontInfo.js";
import { E } from "./tslib.es6.js";
import { oB } from "./ze.js";
var LUd, OUd;
export { LUd, OUd };
var __wakaru_eMy_initialized = false;
export function eMy() {
if (__wakaru_eMy_initialized) return;
__wakaru_eMy_initialized = true;
"use strict";
E(), she(), LUd = class {
    constructor(t, e){
        this.chr = t, this.type = e, this.width = 0;
    }
    fulfill(t) {
        this.width = t;
    }
}, OUd = class YAb {
    constructor(e, n){
        this._bareFontInfo = e, this._requests = n, this._container = null, this._testElements = null;
    }
    read(e) {
        this._createDomElements(), e.document.body.appendChild(this._container), this._readFromDomElements(), this._container?.remove(), this._container = null, this._testElements = null;
    }
    _createDomElements() {
        const e = document.createElement("div");
        e.style.position = "absolute", e.style.top = "-50000px", e.style.width = "50000px";
        const n = document.createElement("div");
        oB(n, this._bareFontInfo), e.appendChild(n);
        const i = document.createElement("div");
        oB(i, this._bareFontInfo), i.style.fontWeight = "bold", e.appendChild(i);
        const r = document.createElement("div");
        oB(r, this._bareFontInfo), r.style.fontStyle = "italic", e.appendChild(r);
        const s = [];
        for (const o of this._requests){
            let a;
            o.type === 0 && (a = n), o.type === 2 && (a = i), o.type === 1 && (a = r), a.appendChild(document.createElement("br"));
            const l = document.createElement("span");
            YAb._render(l, o), a.appendChild(l), s.push(l);
        }
        this._container = e, this._testElements = s;
    }
    static _render(e, n) {
        if (n.chr === " ") {
            let i = "\xA0";
            for(let r = 0; r < 8; r++)i += i;
            e.innerText = i;
        } else {
            let i = n.chr;
            for(let r = 0; r < 8; r++)i += i;
            e.textContent = i;
        }
    }
    _readFromDomElements() {
        for(let e = 0, n = this._requests.length; e < n; e++){
            const i = this._requests[e], r = this._testElements[e];
            i.fulfill(r.offsetWidth / 256);
        }
    }
};

}
