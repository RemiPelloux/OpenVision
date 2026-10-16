import { Qcs, Xcs, Ycs, Zcs, iCi } from "./cst.js";
import { nCe } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Jcs, KZc, Pyn, YZc, rCi, XZc;
export { Jcs, KZc, Pyn, XZc, YZc, rCi };
var __wakaru_ZZc_initialized = false;
export function ZZc() {
if (__wakaru_ZZc_initialized) return;
__wakaru_ZZc_initialized = true;
x(), Qcs(), Jcs = new Set("0123456789ABCDEFabcdef"), KZc = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"), Pyn = new Set(",[]{}"), YZc = new Set(` ,[]{}
\r	`), rCi = (e)=>!e || YZc.has(e), XZc = class {
    constructor(){
        this.atEnd = !1, this.blockScalarIndent = -1, this.blockScalarKeep = !1, this.buffer = "", this.flowKey = !1, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0;
    }
    *lex(e, t = !1) {
        if (e) {
            if (typeof e != "string") throw TypeError("source is not a string");
            this.buffer = this.buffer ? this.buffer + e : e, this.lineEndPos = null;
        }
        this.atEnd = !t;
        let n = this.next ?? "stream";
        for(; n && (t || this.hasChars(1));)n = yield* this.parseNext(n);
    }
    atLineEnd() {
        let e = this.pos, t = this.buffer[e];
        for(; t === " " || t === "	";)t = this.buffer[++e];
        return !t || t === "#" || t === `
` ? !0 : t === "\r" ? this.buffer[e + 1] === `
` : !1;
    }
    charAt(e) {
        return this.buffer[this.pos + e];
    }
    continueScalar(e) {
        let t = this.buffer[e];
        if (this.indentNext > 0) {
            let n = 0;
            for(; t === " ";)t = this.buffer[++n + e];
            if (t === "\r") {
                const i = this.buffer[n + e + 1];
                if (i === `
` || !i && !this.atEnd) return e + n + 1;
            }
            return t === `
` || n >= this.indentNext || !t && !this.atEnd ? e + n : -1;
        }
        if (t === "-" || t === ".") {
            const n = this.buffer.substr(e, 3);
            if ((n === "---" || n === "...") && nCe(this.buffer[e + 3])) return -1;
        }
        return e;
    }
    getLine() {
        let e = this.lineEndPos;
        return (typeof e != "number" || e !== -1 && e < this.pos) && (e = this.buffer.indexOf(`
`, this.pos), this.lineEndPos = e), e === -1 ? this.atEnd ? this.buffer.substring(this.pos) : null : (this.buffer[e - 1] === "\r" && (e -= 1), this.buffer.substring(this.pos, e));
    }
    hasChars(e) {
        return this.pos + e <= this.buffer.length;
    }
    setNext(e) {
        return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.lineEndPos = null, this.next = e, null;
    }
    peek(e) {
        return this.buffer.substr(this.pos, e);
    }
    *parseNext(e) {
        switch(e){
            case "stream":
                return yield* this.parseStream();
            case "line-start":
                return yield* this.parseLineStart();
            case "block-start":
                return yield* this.parseBlockStart();
            case "doc":
                return yield* this.parseDocument();
            case "flow":
                return yield* this.parseFlowCollection();
            case "quoted-scalar":
                return yield* this.parseQuotedScalar();
            case "block-scalar":
                return yield* this.parseBlockScalar();
            case "plain-scalar":
                return yield* this.parsePlainScalar();
        }
    }
    *parseStream() {
        let e = this.getLine();
        if (e === null) return this.setNext("stream");
        if (e[0] === Ycs && (yield* this.pushCount(1), e = e.substring(1)), e[0] === "%") {
            let t = e.length, n = e.indexOf("#");
            for(; n !== -1;){
                const r = e[n - 1];
                if (r === " " || r === "	") {
                    t = n - 1;
                    break;
                } else n = e.indexOf("#", n + 1);
            }
            for(;;){
                const r = e[t - 1];
                if (r === " " || r === "	") t -= 1;
                else break;
            }
            const i = (yield* this.pushCount(t)) + (yield* this.pushSpaces(!0));
            return yield* this.pushCount(e.length - i), this.pushNewline(), "stream";
        }
        if (this.atLineEnd()) {
            const t = yield* this.pushSpaces(!0);
            return yield* this.pushCount(e.length - t), yield* this.pushNewline(), "stream";
        }
        return yield Xcs, yield* this.parseLineStart();
    }
    *parseLineStart() {
        const e = this.charAt(0);
        if (!e && !this.atEnd) return this.setNext("line-start");
        if (e === "-" || e === ".") {
            if (!this.atEnd && !this.hasChars(4)) return this.setNext("line-start");
            const t = this.peek(3);
            if ((t === "---" || t === "...") && nCe(this.charAt(3))) return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, t === "---" ? "doc" : "stream";
        }
        return this.indentValue = yield* this.pushSpaces(!1), this.indentNext > this.indentValue && !nCe(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart();
    }
    *parseBlockStart() {
        const [e, t] = this.peek(2);
        if (!t && !this.atEnd) return this.setNext("block-start");
        if ((e === "-" || e === "?" || e === ":") && nCe(t)) {
            const n = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
            return this.indentNext = this.indentValue + 1, this.indentValue += n, "block-start";
        }
        return "doc";
    }
    *parseDocument() {
        yield* this.pushSpaces(!0);
        const e = this.getLine();
        if (e === null) return this.setNext("doc");
        let t = yield* this.pushIndicators();
        switch(e[t]){
            case "#":
                yield* this.pushCount(e.length - t);
            case void 0:
                return yield* this.pushNewline(), yield* this.parseLineStart();
            case "{":
            case "[":
                return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel = 1, "flow";
            case "}":
            case "]":
                return yield* this.pushCount(1), "doc";
            case "*":
                return yield* this.pushUntil(rCi), "doc";
            case '"':
            case "'":
                return yield* this.parseQuotedScalar();
            case "|":
            case ">":
                return t += yield* this.parseBlockScalarHeader(), t += yield* this.pushSpaces(!0), yield* this.pushCount(e.length - t), yield* this.pushNewline(), yield* this.parseBlockScalar();
            default:
                return yield* this.parsePlainScalar();
        }
    }
    *parseFlowCollection() {
        let e, t, n = -1;
        do e = yield* this.pushNewline(), e > 0 ? (t = yield* this.pushSpaces(!1), this.indentValue = n = t) : t = 0, t += yield* this.pushSpaces(!0);
        while (e + t > 0)
        const i = this.getLine();
        if (i === null) return this.setNext("flow");
        if ((n !== -1 && n < this.indentNext && i[0] !== "#" || n === 0 && (i.startsWith("---") || i.startsWith("...")) && nCe(i[3])) && !(n === this.indentNext - 1 && this.flowLevel === 1 && (i[0] === "]" || i[0] === "}"))) return this.flowLevel = 0, yield Zcs, yield* this.parseLineStart();
        let r = 0;
        for(; i[r] === ",";)r += yield* this.pushCount(1), r += yield* this.pushSpaces(!0), this.flowKey = !1;
        switch(r += yield* this.pushIndicators(), i[r]){
            case void 0:
                return "flow";
            case "#":
                return yield* this.pushCount(i.length - r), "flow";
            case "{":
            case "[":
                return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel += 1, "flow";
            case "}":
            case "]":
                return yield* this.pushCount(1), this.flowKey = !0, this.flowLevel -= 1, this.flowLevel ? "flow" : "doc";
            case "*":
                return yield* this.pushUntil(rCi), "flow";
            case '"':
            case "'":
                return this.flowKey = !0, yield* this.parseQuotedScalar();
            case ":":
                {
                    const s = this.charAt(1);
                    if (this.flowKey || nCe(s) || s === ",") return this.flowKey = !1, yield* this.pushCount(1), yield* this.pushSpaces(!0), "flow";
                }
            default:
                return this.flowKey = !1, yield* this.parsePlainScalar();
        }
    }
    *parseQuotedScalar() {
        const e = this.charAt(0);
        let t = this.buffer.indexOf(e, this.pos + 1);
        if (e === "'") for(; t !== -1 && this.buffer[t + 1] === "'";)t = this.buffer.indexOf("'", t + 2);
        else for(; t !== -1;){
            let r = 0;
            for(; this.buffer[t - 1 - r] === "\\";)r += 1;
            if (r % 2 === 0) break;
            t = this.buffer.indexOf('"', t + 1);
        }
        const n = this.buffer.substring(0, t);
        let i = n.indexOf(`
`, this.pos);
        if (i !== -1) {
            for(; i !== -1;){
                const r = this.continueScalar(i + 1);
                if (r === -1) break;
                i = n.indexOf(`
`, r);
            }
            i !== -1 && (t = i - (n[i - 1] === "\r" ? 2 : 1));
        }
        if (t === -1) {
            if (!this.atEnd) return this.setNext("quoted-scalar");
            t = this.buffer.length;
        }
        return yield* this.pushToIndex(t + 1, !1), this.flowLevel ? "flow" : "doc";
    }
    *parseBlockScalarHeader() {
        this.blockScalarIndent = -1, this.blockScalarKeep = !1;
        let e = this.pos;
        for(;;){
            const t = this.buffer[++e];
            if (t === "+") this.blockScalarKeep = !0;
            else if (t > "0" && t <= "9") this.blockScalarIndent = Number(t) - 1;
            else if (t !== "-") break;
        }
        return yield* this.pushUntil((t)=>nCe(t) || t === "#");
    }
    *parseBlockScalar() {
        let e = this.pos - 1, t = 0, n;
        e: for(let r = this.pos; n = this.buffer[r]; ++r)switch(n){
            case " ":
                t += 1;
                break;
            case `
`:
                e = r, t = 0;
                break;
            case "\r":
                {
                    const s = this.buffer[r + 1];
                    if (!s && !this.atEnd) return this.setNext("block-scalar");
                    if (s === `
`) break;
                }
            default:
                break e;
        }
        if (!n && !this.atEnd) return this.setNext("block-scalar");
        if (t >= this.indentNext) {
            this.blockScalarIndent === -1 ? this.indentNext = t : this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
            do {
                const r = this.continueScalar(e + 1);
                if (r === -1) break;
                e = this.buffer.indexOf(`
`, r);
            }while (e !== -1)
            if (e === -1) {
                if (!this.atEnd) return this.setNext("block-scalar");
                e = this.buffer.length;
            }
        }
        let i = e + 1;
        for(n = this.buffer[i]; n === " ";)n = this.buffer[++i];
        if (n === "	") {
            for(; n === "	" || n === " " || n === "\r" || n === `
`;)n = this.buffer[++i];
            e = i - 1;
        } else if (!this.blockScalarKeep) do {
            let r = e - 1, s = this.buffer[r];
            s === "\r" && (s = this.buffer[--r]);
            const o = r;
            for(; s === " ";)s = this.buffer[--r];
            if (s === `
` && r >= this.pos && r + 1 + t > o) e = r;
            else break;
        }while (!0)
        return yield iCi, yield* this.pushToIndex(e + 1, !0), yield* this.parseLineStart();
    }
    *parsePlainScalar() {
        const e = this.flowLevel > 0;
        let t = this.pos - 1, n = this.pos - 1, i;
        for(; i = this.buffer[++n];)if (i === ":") {
            const r = this.buffer[n + 1];
            if (nCe(r) || e && Pyn.has(r)) break;
            t = n;
        } else if (nCe(i)) {
            let r = this.buffer[n + 1];
            if (i === "\r" && (r === `
` ? (n += 1, i = `
`, r = this.buffer[n + 1]) : t = n), r === "#" || e && Pyn.has(r)) break;
            if (i === `
`) {
                const s = this.continueScalar(n + 1);
                if (s === -1) break;
                n = Math.max(n, s - 2);
            }
        } else {
            if (e && Pyn.has(i)) break;
            t = n;
        }
        return !i && !this.atEnd ? this.setNext("plain-scalar") : (yield iCi, yield* this.pushToIndex(t + 1, !0), e ? "flow" : "doc");
    }
    *pushCount(e) {
        return e > 0 ? (yield this.buffer.substr(this.pos, e), this.pos += e, e) : 0;
    }
    *pushToIndex(e, t) {
        const n = this.buffer.slice(this.pos, e);
        return n ? (yield n, this.pos += n.length, n.length) : (t && (yield ""), 0);
    }
    *pushIndicators() {
        let e = 0;
        e: for(;;){
            switch(this.charAt(0)){
                case "!":
                    e += yield* this.pushTag(), e += yield* this.pushSpaces(!0);
                    continue e;
                case "&":
                    e += yield* this.pushUntil(rCi), e += yield* this.pushSpaces(!0);
                    continue e;
                case "-":
                case "?":
                case ":":
                    {
                        const t = this.flowLevel > 0, n = this.charAt(1);
                        if (nCe(n) || t && Pyn.has(n)) {
                            t ? this.flowKey && (this.flowKey = !1) : this.indentNext = this.indentValue + 1, e += yield* this.pushCount(1), e += yield* this.pushSpaces(!0);
                            continue e;
                        }
                    }
            }
            break e;
        }
        return e;
    }
    *pushTag() {
        if (this.charAt(1) === "<") {
            let e = this.pos + 2, t = this.buffer[e];
            for(; !nCe(t) && t !== ">";)t = this.buffer[++e];
            return yield* this.pushToIndex(t === ">" ? e + 1 : e, !1);
        } else {
            let e = this.pos + 1, t = this.buffer[e];
            for(; t;)if (KZc.has(t)) t = this.buffer[++e];
            else if (t === "%" && Jcs.has(this.buffer[e + 1]) && Jcs.has(this.buffer[e + 2])) t = this.buffer[e += 3];
            else break;
            return yield* this.pushToIndex(e, !1);
        }
    }
    *pushNewline() {
        const e = this.buffer[this.pos];
        return e === `
` ? yield* this.pushCount(1) : e === "\r" && this.charAt(1) === `
` ? yield* this.pushCount(2) : 0;
    }
    *pushSpaces(e) {
        let t = this.pos - 1, n;
        do n = this.buffer[++t];
        while (n === " " || e && n === "	")
        const i = t - this.pos;
        return i > 0 && (yield this.buffer.substr(this.pos, i), this.pos = t), i;
    }
    *pushUntil(e) {
        let t = this.pos, n = this.buffer[t];
        for(; !e(n);)n = this.buffer[++t];
        return yield* this.pushToIndex(t, !1);
    }
};

}
