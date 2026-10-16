import { Czy, Lia, Tzy, kzy, yzy } from "./LYd.js";
import { Umh } from "./decode-codepoint.js";
import { Fmh } from "./decode-data-html.js";
import { bzy } from "./decode-data-xml.js";
import { E } from "./tslib.es6.js";
var XQ, jmh, JSt, ZQ, vit, $mh;
export { $mh, JSt, XQ, ZQ, jmh, vit };
var __wakaru_Ezy_initialized = false;
export function Ezy() {
if (__wakaru_Ezy_initialized) return;
__wakaru_Ezy_initialized = true;
E(), Fmh(), bzy(), Umh(), Umh(), (function(t) {
    t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.EQUALS = 61] = "EQUALS", t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.LOWER_Z = 122] = "LOWER_Z", t[t.UPPER_A = 65] = "UPPER_A", t[t.UPPER_F = 70] = "UPPER_F", t[t.UPPER_Z = 90] = "UPPER_Z";
})(XQ || (XQ = {})), jmh = 32, (function(t) {
    t[t.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t[t.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t[t.JUMP_TABLE = 127] = "JUMP_TABLE";
})(JSt || (JSt = {})), (function(t) {
    t[t.EntityStart = 0] = "EntityStart", t[t.NumericStart = 1] = "NumericStart", t[t.NumericDecimal = 2] = "NumericDecimal", t[t.NumericHex = 3] = "NumericHex", t[t.NamedEntity = 4] = "NamedEntity";
})(ZQ || (ZQ = {})), (function(t) {
    t[t.Legacy = 0] = "Legacy", t[t.Strict = 1] = "Strict", t[t.Attribute = 2] = "Attribute";
})(vit || (vit = {})), $mh = class {
    constructor(t, e, n){
        this.decodeTree = t, this.emitCodePoint = e, this.errors = n, this.state = ZQ.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = vit.Strict;
    }
    startEntity(t) {
        this.decodeMode = t, this.state = ZQ.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
    }
    write(t, e) {
        switch(this.state){
            case ZQ.EntityStart:
                return t.charCodeAt(e) === XQ.NUM ? (this.state = ZQ.NumericStart, this.consumed += 1, this.stateNumericStart(t, e + 1)) : (this.state = ZQ.NamedEntity, this.stateNamedEntity(t, e));
            case ZQ.NumericStart:
                return this.stateNumericStart(t, e);
            case ZQ.NumericDecimal:
                return this.stateNumericDecimal(t, e);
            case ZQ.NumericHex:
                return this.stateNumericHex(t, e);
            case ZQ.NamedEntity:
                return this.stateNamedEntity(t, e);
        }
    }
    stateNumericStart(t, e) {
        return e >= t.length ? -1 : (t.charCodeAt(e) | jmh) === XQ.LOWER_X ? (this.state = ZQ.NumericHex, this.consumed += 1, this.stateNumericHex(t, e + 1)) : (this.state = ZQ.NumericDecimal, this.stateNumericDecimal(t, e));
    }
    addToNumericResult(t, e, n, i) {
        if (e !== n) {
            const r = n - e;
            this.result = this.result * Math.pow(i, r) + Number.parseInt(t.substr(e, r), i), this.consumed += r;
        }
    }
    stateNumericHex(t, e) {
        const n = e;
        for(; e < t.length;){
            const i = t.charCodeAt(e);
            if (Lia(i) || kzy(i)) e += 1;
            else return this.addToNumericResult(t, n, e, 16), this.emitNumericEntity(i, 3);
        }
        return this.addToNumericResult(t, n, e, 16), -1;
    }
    stateNumericDecimal(t, e) {
        const n = e;
        for(; e < t.length;){
            const i = t.charCodeAt(e);
            if (Lia(i)) e += 1;
            else return this.addToNumericResult(t, n, e, 10), this.emitNumericEntity(i, 2);
        }
        return this.addToNumericResult(t, n, e, 10), -1;
    }
    emitNumericEntity(t, e) {
        var n;
        if (this.consumed <= e) return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (t === XQ.SEMI) this.consumed += 1;
        else if (this.decodeMode === vit.Strict) return 0;
        return this.emitCodePoint(yzy(this.result), this.consumed), this.errors && (t !== XQ.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
    }
    stateNamedEntity(t, e) {
        const { decodeTree: n } = this;
        let i = n[this.treeIndex], r = (i & JSt.VALUE_LENGTH) >> 14;
        for(; e < t.length; e++, this.excess++){
            const s = t.charCodeAt(e);
            if (this.treeIndex = Tzy(n, i, this.treeIndex + Math.max(1, r), s), this.treeIndex < 0) return this.result === 0 || this.decodeMode === vit.Attribute && (r === 0 || Czy(s)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (i = n[this.treeIndex], r = (i & JSt.VALUE_LENGTH) >> 14, r !== 0) {
                if (s === XQ.SEMI) return this.emitNamedEntityData(this.treeIndex, r, this.consumed + this.excess);
                this.decodeMode !== vit.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
            }
        }
        return -1;
    }
    emitNotTerminatedNamedEntity() {
        var t;
        const { result: e, decodeTree: n } = this, i = (n[e] & JSt.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(e, i, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
    }
    emitNamedEntityData(t, e, n) {
        const { decodeTree: i } = this;
        return this.emitCodePoint(e === 1 ? i[t] & ~JSt.VALUE_LENGTH : i[t + 1], n), e === 3 && this.emitCodePoint(i[t + 2], n), n;
    }
    end() {
        var t;
        switch(this.state){
            case ZQ.NamedEntity:
                return this.result !== 0 && (this.decodeMode !== vit.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            case ZQ.NumericDecimal:
                return this.emitNumericEntity(0, 2);
            case ZQ.NumericHex:
                return this.emitNumericEntity(0, 3);
            case ZQ.NumericStart:
                return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
            case ZQ.EntityStart:
                return 0;
        }
    }
};

}
