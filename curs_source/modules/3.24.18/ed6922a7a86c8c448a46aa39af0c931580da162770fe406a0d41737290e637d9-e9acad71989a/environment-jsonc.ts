import { x } from "./tslib.es6.js";
var Izs, Azs, Dse, FMu;
export { Azs, Dse, FMu, Izs };
var __wakaru_ohv_initialized = false;
export function ohv() {
if (__wakaru_ohv_initialized) return;
__wakaru_ohv_initialized = true;
"use strict";
x(), Izs = 256, Azs = /-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:[eE][+-]?[0-9]+)?/y, Dse = class extends Error {
    constructor(e, t){
        super(e), this.kind = e, this.offset = t;
    }
}, FMu = class {
    constructor(e){
        this.text = e, this.position = 0, e.charCodeAt(0) === 65279 && (this.position = 1);
    }
    parseDocument() {
        const e = this.parseValue(0);
        if (this.skipTrivia(), this.position < this.text.length) throw new Dse("syntax", this.position);
        return e;
    }
    skipTrivia() {
        const e = this.text;
        for(; this.position < e.length;){
            const t = e[this.position];
            if (t === " " || t === "	" || t === `
` || t === "\r") this.position++;
            else if (t === "/" && e[this.position + 1] === "/") for(this.position += 2; this.position < e.length && e[this.position] !== `
` && e[this.position] !== "\r";)this.position++;
            else if (t === "/" && e[this.position + 1] === "*") {
                const n = e.indexOf("*/", this.position + 2);
                if (n === -1) throw new Dse("syntax", this.position);
                this.position = n + 2;
            } else return;
        }
    }
    parseValue(e) {
        switch(this.skipTrivia(), this.text[this.position]){
            case "{":
                return this.parseObject(e + 1);
            case "[":
                return this.parseArray(e + 1);
            case '"':
                return this.parseString();
            case "t":
                return this.parseKeyword("true", !0);
            case "f":
                return this.parseKeyword("false", !1);
            case "n":
                return this.parseKeyword("null", null);
            default:
                return this.parseNumber();
        }
    }
    parseObject(e) {
        if (e > Izs) throw new Dse("too-deep", this.position);
        this.position++;
        const t = {};
        for(;;){
            if (this.skipTrivia(), this.text[this.position] === "}") return this.position++, t;
            if (this.text[this.position] !== '"') throw new Dse("syntax", this.position);
            const n = this.parseString();
            if (this.skipTrivia(), this.text[this.position] !== ":") throw new Dse("syntax", this.position);
            this.position++;
            const i = this.parseValue(e);
            Object.defineProperty(t, n, {
                value: i,
                writable: !0,
                enumerable: !0,
                configurable: !0
            }), this.skipTrivia();
            const r = this.text[this.position];
            if (r === ",") this.position++;
            else if (r !== "}") throw new Dse("syntax", this.position);
        }
    }
    parseArray(e) {
        if (e > Izs) throw new Dse("too-deep", this.position);
        this.position++;
        const t = [];
        for(;;){
            if (this.skipTrivia(), this.text[this.position] === "]") return this.position++, t;
            t.push(this.parseValue(e)), this.skipTrivia();
            const n = this.text[this.position];
            if (n === ",") this.position++;
            else if (n !== "]") throw new Dse("syntax", this.position);
        }
    }
    parseString() {
        const e = this.position;
        let t = e + 1;
        for(; t < this.text.length;){
            const n = this.text[t];
            if (n === "\\") t += 2;
            else {
                if (n === '"') break;
                t++;
            }
        }
        if (t >= this.text.length) throw new Dse("syntax", e);
        this.position = t + 1;
        try {
            return JSON.parse(this.text.slice(e, this.position));
        } catch  {
            throw new Dse("syntax", e);
        }
    }
    parseKeyword(e, t) {
        if (!this.text.startsWith(e, this.position)) throw new Dse("syntax", this.position);
        return this.position += e.length, t;
    }
    parseNumber() {
        Azs.lastIndex = this.position;
        const e = Azs.exec(this.text);
        if (e === null) throw new Dse("syntax", this.position);
        return this.position += e[0].length, Number(e[0]);
    }
};

}
