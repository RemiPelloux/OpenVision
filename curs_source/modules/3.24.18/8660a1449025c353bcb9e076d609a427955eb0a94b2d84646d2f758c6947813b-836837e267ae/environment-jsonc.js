import { E } from "./tslib.es6.js";
var yQa, SQa, Hbe, MGm;
export { Hbe, MGm, SQa, yQa };
var __wakaru_Wek_initialized = false;
export function Wek() {
if (__wakaru_Wek_initialized) return;
__wakaru_Wek_initialized = true;
"use strict";
E(), yQa = 256, SQa = /-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:[eE][+-]?[0-9]+)?/y, Hbe = class extends Error {
    constructor(t, e){
        super(t), this.kind = t, this.offset = e;
    }
}, MGm = class {
    constructor(t){
        this.text = t, this.position = 0, t.charCodeAt(0) === 65279 && (this.position = 1);
    }
    parseDocument() {
        const t = this.parseValue(0);
        if (this.skipTrivia(), this.position < this.text.length) throw new Hbe("syntax", this.position);
        return t;
    }
    skipTrivia() {
        const t = this.text;
        for(; this.position < t.length;){
            const e = t[this.position];
            if (e === " " || e === "	" || e === `
` || e === "\r") this.position++;
            else if (e === "/" && t[this.position + 1] === "/") for(this.position += 2; this.position < t.length && t[this.position] !== `
` && t[this.position] !== "\r";)this.position++;
            else if (e === "/" && t[this.position + 1] === "*") {
                const n = t.indexOf("*/", this.position + 2);
                if (n === -1) throw new Hbe("syntax", this.position);
                this.position = n + 2;
            } else return;
        }
    }
    parseValue(t) {
        switch(this.skipTrivia(), this.text[this.position]){
            case "{":
                return this.parseObject(t + 1);
            case "[":
                return this.parseArray(t + 1);
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
    parseObject(t) {
        if (t > yQa) throw new Hbe("too-deep", this.position);
        this.position++;
        const e = {};
        for(;;){
            if (this.skipTrivia(), this.text[this.position] === "}") return this.position++, e;
            if (this.text[this.position] !== '"') throw new Hbe("syntax", this.position);
            const n = this.parseString();
            if (this.skipTrivia(), this.text[this.position] !== ":") throw new Hbe("syntax", this.position);
            this.position++;
            const i = this.parseValue(t);
            Object.defineProperty(e, n, {
                value: i,
                writable: !0,
                enumerable: !0,
                configurable: !0
            }), this.skipTrivia();
            const r = this.text[this.position];
            if (r === ",") this.position++;
            else if (r !== "}") throw new Hbe("syntax", this.position);
        }
    }
    parseArray(t) {
        if (t > yQa) throw new Hbe("too-deep", this.position);
        this.position++;
        const e = [];
        for(;;){
            if (this.skipTrivia(), this.text[this.position] === "]") return this.position++, e;
            e.push(this.parseValue(t)), this.skipTrivia();
            const n = this.text[this.position];
            if (n === ",") this.position++;
            else if (n !== "]") throw new Hbe("syntax", this.position);
        }
    }
    parseString() {
        const t = this.position;
        let e = t + 1;
        for(; e < this.text.length;){
            const n = this.text[e];
            if (n === "\\") e += 2;
            else {
                if (n === '"') break;
                e++;
            }
        }
        if (e >= this.text.length) throw new Hbe("syntax", t);
        this.position = e + 1;
        try {
            return JSON.parse(this.text.slice(t, this.position));
        } catch  {
            throw new Hbe("syntax", t);
        }
    }
    parseKeyword(t, e) {
        if (!this.text.startsWith(t, this.position)) throw new Hbe("syntax", this.position);
        return this.position += t.length, e;
    }
    parseNumber() {
        SQa.lastIndex = this.position;
        const t = SQa.exec(this.text);
        if (t === null) throw new Hbe("syntax", this.position);
        return this.position += t[0].length, Number(t[0]);
    }
};

}
