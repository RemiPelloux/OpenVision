import { QJg, aef, ief, mCs, oef, sef } from "./DSs.js";
import { JJ, nef } from "./bin-trie-flags.js";
import { NPl } from "./decode-codepoint_2.js";
import { eef } from "./decode-data-html_2.js";
import { FPl, tef } from "./decode-data-xml_2.js";
import { x } from "./tslib.es6.js";
var P3, gCs, LW, tXe, BPl, UPl;
export { BPl, LW, P3, UPl, gCs, tXe };
var __wakaru_fCs_initialized = false;
export function fCs() {
if (__wakaru_fCs_initialized) return;
__wakaru_fCs_initialized = true;
x(), NPl(), NPl(), eef(), tef(), nef(), (function(e) {
    e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(P3 || (P3 = {})), gCs = 32, (function(e) {
    e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(LW || (LW = {})), (function(e) {
    e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(tXe || (tXe = {})), BPl = class {
    constructor(e, t, n){
        this.decodeTree = e, this.emitCodePoint = t, this.errors = n, this.state = LW.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = tXe.Strict, this.runConsumed = 0;
    }
    startEntity(e) {
        this.decodeMode = e, this.state = LW.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1, this.runConsumed = 0;
    }
    write(e, t) {
        switch(this.state){
            case LW.EntityStart:
                return e.charCodeAt(t) === P3.NUM ? (this.state = LW.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = LW.NamedEntity, this.stateNamedEntity(e, t));
            case LW.NumericStart:
                return this.stateNumericStart(e, t);
            case LW.NumericDecimal:
                return this.stateNumericDecimal(e, t);
            case LW.NumericHex:
                return this.stateNumericHex(e, t);
            case LW.NamedEntity:
                return this.stateNamedEntity(e, t);
        }
    }
    stateNumericStart(e, t) {
        return t >= e.length ? -1 : (e.charCodeAt(t) | gCs) === P3.LOWER_X ? (this.state = LW.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = LW.NumericDecimal, this.stateNumericDecimal(e, t));
    }
    stateNumericHex(e, t) {
        for(; t < e.length;){
            const n = e.charCodeAt(t);
            if (mCs(n) || ief(n)) {
                const i = n <= P3.NINE ? n - P3.ZERO : (n | gCs) - P3.LOWER_A + 10;
                this.result = this.result * 16 + i, this.consumed++, t++;
            } else return this.emitNumericEntity(n, 3);
        }
        return -1;
    }
    stateNumericDecimal(e, t) {
        for(; t < e.length;){
            const n = e.charCodeAt(t);
            if (mCs(n)) this.result = this.result * 10 + (n - P3.ZERO), this.consumed++, t++;
            else return this.emitNumericEntity(n, 2);
        }
        return -1;
    }
    emitNumericEntity(e, t) {
        var n;
        if (this.consumed <= t) return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (e === P3.SEMI) this.consumed += 1;
        else if (this.decodeMode === tXe.Strict) return 0;
        return this.emitCodePoint(QJg(this.result), this.consumed), this.errors && (e !== P3.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
    }
    stateNamedEntity(e, t) {
        const { decodeTree: n } = this;
        let i = n[this.treeIndex], r = (i & JJ.VALUE_LENGTH) >> 14;
        for(; t < e.length;){
            if (r === 0 && (i & JJ.FLAG13) !== 0) {
                const o = (i & JJ.BRANCH_LENGTH) >> 7;
                if (this.runConsumed === 0) {
                    const a = i & JJ.JUMP_TABLE;
                    if (e.charCodeAt(t) !== a) return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
                    t++, this.excess++, this.runConsumed++;
                }
                for(; this.runConsumed < o;){
                    if (t >= e.length) return -1;
                    const a = this.runConsumed - 1, c = n[this.treeIndex + 1 + (a >> 1)], l = a % 2 === 0 ? c & 255 : c >> 8 & 255;
                    if (e.charCodeAt(t) !== l) return this.runConsumed = 0, this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
                    t++, this.excess++, this.runConsumed++;
                }
                this.runConsumed = 0, this.treeIndex += 1 + (o >> 1), i = n[this.treeIndex], r = (i & JJ.VALUE_LENGTH) >> 14;
            }
            if (t >= e.length) break;
            const s = e.charCodeAt(t);
            if (s === P3.SEMI && r !== 0 && (i & JJ.FLAG13) !== 0) return this.emitNamedEntityData(this.treeIndex, r, this.consumed + this.excess);
            if (this.treeIndex = aef(n, i, this.treeIndex + Math.max(1, r), s), this.treeIndex < 0) return this.result === 0 || this.decodeMode === tXe.Attribute && (r === 0 || sef(s)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (i = n[this.treeIndex], r = (i & JJ.VALUE_LENGTH) >> 14, r !== 0) {
                if (s === P3.SEMI) return this.emitNamedEntityData(this.treeIndex, r, this.consumed + this.excess);
                this.decodeMode !== tXe.Strict && (i & JJ.FLAG13) === 0 && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
            }
            t++, this.excess++;
        }
        return -1;
    }
    emitNotTerminatedNamedEntity() {
        var e;
        const { result: t, decodeTree: n } = this, i = (n[t] & JJ.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(t, i, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
    }
    emitNamedEntityData(e, t, n) {
        const { decodeTree: i } = this;
        return this.emitCodePoint(t === 1 ? i[e] & ~(JJ.VALUE_LENGTH | JJ.FLAG13) : i[e + 1], n), t === 3 && this.emitCodePoint(i[e + 2], n), n;
    }
    end() {
        var e;
        switch(this.state){
            case LW.NamedEntity:
                return this.result !== 0 && (this.decodeMode !== tXe.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            case LW.NumericDecimal:
                return this.emitNumericEntity(0, 2);
            case LW.NumericHex:
                return this.emitNumericEntity(0, 3);
            case LW.NumericStart:
                return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
            case LW.EntityStart:
                return 0;
        }
    }
}, UPl = oef(FPl);

}
