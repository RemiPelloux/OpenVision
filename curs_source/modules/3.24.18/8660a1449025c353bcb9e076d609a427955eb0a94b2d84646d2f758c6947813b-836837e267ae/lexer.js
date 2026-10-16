import { z5e } from "./LYd.js";
import { JYo, QYo, XYo, ZYo, tAr } from "./cst.js";
import { E } from "./tslib.es6.js";
var eXo, Seh, Yai, keh, nAr, weh;
export { Seh, Yai, eXo, keh, nAr, weh };
var __wakaru_Ceh_initialized = false;
export function Ceh() {
if (__wakaru_Ceh_initialized) return;
__wakaru_Ceh_initialized = true;
E(), JYo(), eXo = new Set("0123456789ABCDEFabcdef"), Seh = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"), Yai = new Set(",[]{}"), keh = new Set(` ,[]{}
\r	`), nAr = (t)=>!t || keh.has(t), weh = class {
    constructor(){
        this.atEnd = !1, this.blockScalarIndent = -1, this.blockScalarKeep = !1, this.buffer = "", this.flowKey = !1, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0;
    }
    *lex(t, e = !1) {
        if (t) {
            if (typeof t != "string") throw TypeError("source is not a string");
            this.buffer = this.buffer ? this.buffer + t : t, this.lineEndPos = null;
        }
        this.atEnd = !e;
        let n = this.next ?? "stream";
        for(; n && (e || this.hasChars(1));)n = yield* this.parseNext(n);
    }
    atLineEnd() {
        let t = this.pos, e = this.buffer[t];
        for(; e === " " || e === "	";)e = this.buffer[++t];
        return !e || e === "#" || e === `
` ? !0 : e === "\r" ? this.buffer[t + 1] === `
` : !1;
    }
    charAt(t) {
        return this.buffer[this.pos + t];
    }
    continueScalar(t) {
        let e = this.buffer[t];
        if (this.indentNext > 0) {
            let n = 0;
            for(; e === " ";)e = this.buffer[++n + t];
            if (e === "\r") {
                const i = this.buffer[n + t + 1];
                if (i === `
` || !i && !this.atEnd) return t + n + 1;
            }
            return e === `
` || n >= this.indentNext || !e && !this.atEnd ? t + n : -1;
        }
        if (e === "-" || e === ".") {
            const n = this.buffer.substr(t, 3);
            if ((n === "---" || n === "...") && z5e(this.buffer[t + 3])) return -1;
        }
        return t;
    }
    getLine() {
        let t = this.lineEndPos;
        return (typeof t != "number" || t !== -1 && t < this.pos) && (t = this.buffer.indexOf(`
`, this.pos), this.lineEndPos = t), t === -1 ? this.atEnd ? this.buffer.substring(this.pos) : null : (this.buffer[t - 1] === "\r" && (t -= 1), this.buffer.substring(this.pos, t));
    }
    hasChars(t) {
        return this.pos + t <= this.buffer.length;
    }
    setNext(t) {
        return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.lineEndPos = null, this.next = t, null;
    }
    peek(t) {
        return this.buffer.substr(this.pos, t);
    }
    *parseNext(t) {
        switch(t){
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
        let t = this.getLine();
        if (t === null) return this.setNext("stream");
        if (t[0] === XYo && (yield* this.pushCount(1), t = t.substring(1)), t[0] === "%") {
            let e = t.length, n = t.indexOf("#");
            for(; n !== -1;){
                const r = t[n - 1];
                if (r === " " || r === "	") {
                    e = n - 1;
                    break;
                } else n = t.indexOf("#", n + 1);
            }
            for(;;){
                const r = t[e - 1];
                if (r === " " || r === "	") e -= 1;
                else break;
            }
            const i = (yield* this.pushCount(e)) + (yield* this.pushSpaces(!0));
            return yield* this.pushCount(t.length - i), this.pushNewline(), "stream";
        }
        if (this.atLineEnd()) {
            const e = yield* this.pushSpaces(!0);
            return yield* this.pushCount(t.length - e), yield* this.pushNewline(), "stream";
        }
        return yield ZYo, yield* this.parseLineStart();
    }
    *parseLineStart() {
        const t = this.charAt(0);
        if (!t && !this.atEnd) return this.setNext("line-start");
        if (t === "-" || t === ".") {
            if (!this.atEnd && !this.hasChars(4)) return this.setNext("line-start");
            const e = this.peek(3);
            if ((e === "---" || e === "...") && z5e(this.charAt(3))) return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, e === "---" ? "doc" : "stream";
        }
        return this.indentValue = yield* this.pushSpaces(!1), this.indentNext > this.indentValue && !z5e(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart();
    }
    *parseBlockStart() {
        const [t, e] = this.peek(2);
        if (!e && !this.atEnd) return this.setNext("block-start");
        if ((t === "-" || t === "?" || t === ":") && z5e(e)) {
            const n = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
            return this.indentNext = this.indentValue + 1, this.indentValue += n, "block-start";
        }
        return "doc";
    }
    *parseDocument() {
        yield* this.pushSpaces(!0);
        const t = this.getLine();
        if (t === null) return this.setNext("doc");
        let e = yield* this.pushIndicators();
        switch(t[e]){
            case "#":
                yield* this.pushCount(t.length - e);
            case void 0:
                return yield* this.pushNewline(), yield* this.parseLineStart();
            case "{":
            case "[":
                return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel = 1, "flow";
            case "}":
            case "]":
                return yield* this.pushCount(1), "doc";
            case "*":
                return yield* this.pushUntil(nAr), "doc";
            case '"':
            case "'":
                return yield* this.parseQuotedScalar();
            case "|":
            case ">":
                return e += yield* this.parseBlockScalarHeader(), e += yield* this.pushSpaces(!0), yield* this.pushCount(t.length - e), yield* this.pushNewline(), yield* this.parseBlockScalar();
            default:
                return yield* this.parsePlainScalar();
        }
    }
    *parseFlowCollection() {
        let t, e, n = -1;
        do t = yield* this.pushNewline(), t > 0 ? (e = yield* this.pushSpaces(!1), this.indentValue = n = e) : e = 0, e += yield* this.pushSpaces(!0);
        while (t + e > 0)
        const i = this.getLine();
        if (i === null) return this.setNext("flow");
        if ((n !== -1 && n < this.indentNext && i[0] !== "#" || n === 0 && (i.startsWith("---") || i.startsWith("...")) && z5e(i[3])) && !(n === this.indentNext - 1 && this.flowLevel === 1 && (i[0] === "]" || i[0] === "}"))) return this.flowLevel = 0, yield QYo, yield* this.parseLineStart();
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
                return yield* this.pushUntil(nAr), "flow";
            case '"':
            case "'":
                return this.flowKey = !0, yield* this.parseQuotedScalar();
            case ":":
                {
                    const s = this.charAt(1);
                    if (this.flowKey || z5e(s) || s === ",") return this.flowKey = !1, yield* this.pushCount(1), yield* this.pushSpaces(!0), "flow";
                }
            default:
                return this.flowKey = !1, yield* this.parsePlainScalar();
        }
    }
    *parseQuotedScalar() {
        const t = this.charAt(0);
        let e = this.buffer.indexOf(t, this.pos + 1);
        if (t === "'") for(; e !== -1 && this.buffer[e + 1] === "'";)e = this.buffer.indexOf("'", e + 2);
        else for(; e !== -1;){
            let r = 0;
            for(; this.buffer[e - 1 - r] === "\\";)r += 1;
            if (r % 2 === 0) break;
            e = this.buffer.indexOf('"', e + 1);
        }
        const n = this.buffer.substring(0, e);
        let i = n.indexOf(`
`, this.pos);
        if (i !== -1) {
            for(; i !== -1;){
                const r = this.continueScalar(i + 1);
                if (r === -1) break;
                i = n.indexOf(`
`, r);
            }
            i !== -1 && (e = i - (n[i - 1] === "\r" ? 2 : 1));
        }
        if (e === -1) {
            if (!this.atEnd) return this.setNext("quoted-scalar");
            e = this.buffer.length;
        }
        return yield* this.pushToIndex(e + 1, !1), this.flowLevel ? "flow" : "doc";
    }
    *parseBlockScalarHeader() {
        this.blockScalarIndent = -1, this.blockScalarKeep = !1;
        let t = this.pos;
        for(;;){
            const e = this.buffer[++t];
            if (e === "+") this.blockScalarKeep = !0;
            else if (e > "0" && e <= "9") this.blockScalarIndent = Number(e) - 1;
            else if (e !== "-") break;
        }
        return yield* this.pushUntil((e)=>z5e(e) || e === "#");
    }
    *parseBlockScalar() {
        let t = this.pos - 1, e = 0, n;
        e: for(let r = this.pos; n = this.buffer[r]; ++r)switch(n){
            case " ":
                e += 1;
                break;
            case `
`:
                t = r, e = 0;
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
        if (e >= this.indentNext) {
            this.blockScalarIndent === -1 ? this.indentNext = e : this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
            do {
                const r = this.continueScalar(t + 1);
                if (r === -1) break;
                t = this.buffer.indexOf(`
`, r);
            }while (t !== -1)
            if (t === -1) {
                if (!this.atEnd) return this.setNext("block-scalar");
                t = this.buffer.length;
            }
        }
        let i = t + 1;
        for(n = this.buffer[i]; n === " ";)n = this.buffer[++i];
        if (n === "	") {
            for(; n === "	" || n === " " || n === "\r" || n === `
`;)n = this.buffer[++i];
            t = i - 1;
        } else if (!this.blockScalarKeep) do {
            let r = t - 1, s = this.buffer[r];
            s === "\r" && (s = this.buffer[--r]);
            const o = r;
            for(; s === " ";)s = this.buffer[--r];
            if (s === `
` && r >= this.pos && r + 1 + e > o) t = r;
            else break;
        }while (!0)
        return yield tAr, yield* this.pushToIndex(t + 1, !0), yield* this.parseLineStart();
    }
    *parsePlainScalar() {
        const t = this.flowLevel > 0;
        let e = this.pos - 1, n = this.pos - 1, i;
        for(; i = this.buffer[++n];)if (i === ":") {
            const r = this.buffer[n + 1];
            if (z5e(r) || t && Yai.has(r)) break;
            e = n;
        } else if (z5e(i)) {
            let r = this.buffer[n + 1];
            if (i === "\r" && (r === `
` ? (n += 1, i = `
`, r = this.buffer[n + 1]) : e = n), r === "#" || t && Yai.has(r)) break;
            if (i === `
`) {
                const s = this.continueScalar(n + 1);
                if (s === -1) break;
                n = Math.max(n, s - 2);
            }
        } else {
            if (t && Yai.has(i)) break;
            e = n;
        }
        return !i && !this.atEnd ? this.setNext("plain-scalar") : (yield tAr, yield* this.pushToIndex(e + 1, !0), t ? "flow" : "doc");
    }
    *pushCount(t) {
        return t > 0 ? (yield this.buffer.substr(this.pos, t), this.pos += t, t) : 0;
    }
    *pushToIndex(t, e) {
        const n = this.buffer.slice(this.pos, t);
        return n ? (yield n, this.pos += n.length, n.length) : (e && (yield ""), 0);
    }
    *pushIndicators() {
        let t = 0;
        e: for(;;){
            switch(this.charAt(0)){
                case "!":
                    t += yield* this.pushTag(), t += yield* this.pushSpaces(!0);
                    continue e;
                case "&":
                    t += yield* this.pushUntil(nAr), t += yield* this.pushSpaces(!0);
                    continue e;
                case "-":
                case "?":
                case ":":
                    {
                        const e = this.flowLevel > 0, n = this.charAt(1);
                        if (z5e(n) || e && Yai.has(n)) {
                            e ? this.flowKey && (this.flowKey = !1) : this.indentNext = this.indentValue + 1, t += yield* this.pushCount(1), t += yield* this.pushSpaces(!0);
                            continue e;
                        }
                    }
            }
            break e;
        }
        return t;
    }
    *pushTag() {
        if (this.charAt(1) === "<") {
            let t = this.pos + 2, e = this.buffer[t];
            for(; !z5e(e) && e !== ">";)e = this.buffer[++t];
            return yield* this.pushToIndex(e === ">" ? t + 1 : t, !1);
        } else {
            let t = this.pos + 1, e = this.buffer[t];
            for(; e;)if (Seh.has(e)) e = this.buffer[++t];
            else if (e === "%" && eXo.has(this.buffer[t + 1]) && eXo.has(this.buffer[t + 2])) e = this.buffer[t += 3];
            else break;
            return yield* this.pushToIndex(t, !1);
        }
    }
    *pushNewline() {
        const t = this.buffer[this.pos];
        return t === `
` ? yield* this.pushCount(1) : t === "\r" && this.charAt(1) === `
` ? yield* this.pushCount(2) : 0;
    }
    *pushSpaces(t) {
        let e = this.pos - 1, n;
        do n = this.buffer[++e];
        while (n === " " || t && n === "	")
        const i = e - this.pos;
        return i > 0 && (yield this.buffer.substr(this.pos, i), this.pos = e), i;
    }
    *pushUntil(t) {
        let e = this.pos, n = this.buffer[e];
        for(; !t(n);)n = this.buffer[++e];
        return yield* this.pushToIndex(e, !1);
    }
};

}
