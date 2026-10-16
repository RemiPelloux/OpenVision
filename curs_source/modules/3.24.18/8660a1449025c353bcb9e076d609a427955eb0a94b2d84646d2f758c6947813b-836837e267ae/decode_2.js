import { Phe, XpS } from "./bin-trie-flags.js";
import { gNh } from "./decode-codepoint_2.js";
import { KpS } from "./decode-data-html_2.js";
import { YpS, vNh } from "./decode-data-xml_2.js";
import { Jda, JpS, ZpS, emS, tmS, zpS } from "./nca.js";
import { E } from "./tslib.es6.js";
var B7, eha, JQ, I1t, _Nh, bNh;
export { B7, I1t, JQ, _Nh, bNh, eha };
var __wakaru_tha_initialized = false;
export function tha() {
if (__wakaru_tha_initialized) return;
__wakaru_tha_initialized = true;
E(), gNh(), gNh(), KpS(), YpS(), XpS(), (function(t) {
    t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.EQUALS = 61] = "EQUALS", t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.LOWER_Z = 122] = "LOWER_Z", t[t.UPPER_A = 65] = "UPPER_A", t[t.UPPER_F = 70] = "UPPER_F", t[t.UPPER_Z = 90] = "UPPER_Z";
})(B7 || (B7 = {})), eha = 32, (function(t) {
    t[t.EntityStart = 0] = "EntityStart", t[t.NumericStart = 1] = "NumericStart", t[t.NumericDecimal = 2] = "NumericDecimal", t[t.NumericHex = 3] = "NumericHex", t[t.NamedEntity = 4] = "NamedEntity";
})(JQ || (JQ = {})), (function(t) {
    t[t.Legacy = 0] = "Legacy", t[t.Strict = 1] = "Strict", t[t.Attribute = 2] = "Attribute";
})(I1t || (I1t = {})), _Nh = class {
    constructor(t, e, n){
        this.decodeTree = t, this.emitCodePoint = e, this.errors = n, this.state = JQ.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = I1t.Strict, this.runConsumed = 0;
    }
    startEntity(t) {
        this.decodeMode = t, this.state = JQ.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1, this.runConsumed = 0;
    }
    write(t, e) {
        switch(this.state){
            case JQ.EntityStart:
                return t.charCodeAt(e) === B7.NUM ? (this.state = JQ.NumericStart, this.consumed += 1, this.stateNumericStart(t, e + 1)) : (this.state = JQ.NamedEntity, this.stateNamedEntity(t, e));
            case JQ.NumericStart:
                return this.stateNumericStart(t, e);
            case JQ.NumericDecimal:
                return this.stateNumericDecimal(t, e);
            case JQ.NumericHex:
                return this.stateNumericHex(t, e);
            case JQ.NamedEntity:
                return this.stateNamedEntity(t, e);
        }
    }
    stateNumericStart(t, e) {
        return e >= t.length ? -1 : (t.charCodeAt(e) | eha) === B7.LOWER_X ? (this.state = JQ.NumericHex, this.consumed += 1, this.stateNumericHex(t, e + 1)) : (this.state = JQ.NumericDecimal, this.stateNumericDecimal(t, e));
    }
    stateNumericHex(t, e) {
        for(; e < t.length;){
            const n = t.charCodeAt(e);
            if (Jda(n) || ZpS(n)) {
                const i = n <= B7.NINE ? n - B7.ZERO : (n | eha) - B7.LOWER_A + 10;
                this.result = this.result * 16 + i, this.consumed++, e++;
            } else return this.emitNumericEntity(n, 3);
        }
        return -1;
    }
    stateNumericDecimal(t, e) {
        for(; e < t.length;){
            const n = t.charCodeAt(e);
            if (Jda(n)) this.result = this.result * 10 + (n - B7.ZERO), this.consumed++, e++;
            else return this.emitNumericEntity(n, 2);
        }
        return -1;
    }
    emitNumericEntity(t, e) {
        var n;
        if (this.consumed <= e) return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (t === B7.SEMI) this.consumed += 1;
        else if (this.decodeMode === I1t.Strict) return 0;
        return this.emitCodePoint(zpS(this.result), this.consumed), this.errors && (t !== B7.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
    }
    stateNamedEntity(t, e) {
        const { decodeTree: n } = this;
        let i = n[this.treeIndex], r = (i & Phe.VALUE_LENGTH) >> 14;
        for(; e < t.length;){
            if (r === 0 && (i & Phe.FLAG13) !== 0) {
                const o = (i & Phe.BRANCH_LENGTH) >> 7;
                if (this.runConsumed === 0) {
                    const a = i & Phe.JUMP_TABLE;
                    if (t.charCodeAt(e) !== a) return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
                    e++, this.excess++, this.runConsumed++;
                }
                for(; this.runConsumed < o;){
                    if (e >= t.length) return -1;
                    const a = this.runConsumed - 1, l = n[this.treeIndex + 1 + (a >> 1)], c = a % 2 === 0 ? l & 255 : l >> 8 & 255;
                    if (t.charCodeAt(e) !== c) return this.runConsumed = 0, this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
                    e++, this.excess++, this.runConsumed++;
                }
                this.runConsumed = 0, this.treeIndex += 1 + (o >> 1), i = n[this.treeIndex], r = (i & Phe.VALUE_LENGTH) >> 14;
            }
            if (e >= t.length) break;
            const s = t.charCodeAt(e);
            if (s === B7.SEMI && r !== 0 && (i & Phe.FLAG13) !== 0) return this.emitNamedEntityData(this.treeIndex, r, this.consumed + this.excess);
            if (this.treeIndex = tmS(n, i, this.treeIndex + Math.max(1, r), s), this.treeIndex < 0) return this.result === 0 || this.decodeMode === I1t.Attribute && (r === 0 || JpS(s)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (i = n[this.treeIndex], r = (i & Phe.VALUE_LENGTH) >> 14, r !== 0) {
                if (s === B7.SEMI) return this.emitNamedEntityData(this.treeIndex, r, this.consumed + this.excess);
                this.decodeMode !== I1t.Strict && (i & Phe.FLAG13) === 0 && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
            }
            e++, this.excess++;
        }
        return -1;
    }
    emitNotTerminatedNamedEntity() {
        var t;
        const { result: e, decodeTree: n } = this, i = (n[e] & Phe.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(e, i, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
    }
    emitNamedEntityData(t, e, n) {
        const { decodeTree: i } = this;
        return this.emitCodePoint(e === 1 ? i[t] & ~(Phe.VALUE_LENGTH | Phe.FLAG13) : i[t + 1], n), e === 3 && this.emitCodePoint(i[t + 2], n), n;
    }
    end() {
        var t;
        switch(this.state){
            case JQ.NamedEntity:
                return this.result !== 0 && (this.decodeMode !== I1t.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            case JQ.NumericDecimal:
                return this.emitNumericEntity(0, 2);
            case JQ.NumericHex:
                return this.emitNumericEntity(0, 3);
            case JQ.NumericStart:
                return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
            case JQ.EntityStart:
                return 0;
        }
    }
}, bNh = emS(vNh);

}
