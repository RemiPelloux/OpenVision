import { Tw, pCi } from "./bin-trie-flags.js";
import { P7r } from "./decode-codepoint_2.js";
import { D7r } from "./decode-data-html_2.js";
import { F7r, O7r } from "./decode-data-xml_2.js";
import { B7r, G7r, N7r, U7r, W7r, q7r, xje, z7r } from "./f6r.js";
import { i } from "./plugin-brand-icon.js";
var Mf, Cqt, A1, qP, Sqt, H7r, Z7r;
export { A1, Cqt, H7r, Mf, Sqt, Z7r, qP };
var __wakaru_V7r_initialized = false;
export function V7r() {
if (__wakaru_V7r_initialized) return;
__wakaru_V7r_initialized = true;
P7r(), D7r(), O7r(), pCi(), P7r(), D7r(), O7r(), (function(r) {
    r[r.NUM = 35] = "NUM", r[r.SEMI = 59] = "SEMI", r[r.EQUALS = 61] = "EQUALS", r[r.ZERO = 48] = "ZERO", r[r.NINE = 57] = "NINE", r[r.LOWER_A = 97] = "LOWER_A", r[r.LOWER_F = 102] = "LOWER_F", r[r.LOWER_X = 120] = "LOWER_X", r[r.LOWER_Z = 122] = "LOWER_Z", r[r.UPPER_A = 65] = "UPPER_A", r[r.UPPER_F = 70] = "UPPER_F", r[r.UPPER_Z = 90] = "UPPER_Z";
})(Mf || (Mf = {})), Cqt = 32, i(xje, "isNumber"), i(z7r, "isHexadecimalCharacter"), i(B7r, "isAsciiAlphaNumeric"), i(q7r, "isEntityInAttributeInvalidEnd"), (function(r) {
    r[r.EntityStart = 0] = "EntityStart", r[r.NumericStart = 1] = "NumericStart", r[r.NumericDecimal = 2] = "NumericDecimal", r[r.NumericHex = 3] = "NumericHex", r[r.NamedEntity = 4] = "NamedEntity";
})(A1 || (A1 = {})), (function(r) {
    r[r.Legacy = 0] = "Legacy", r[r.Strict = 1] = "Strict", r[r.Attribute = 2] = "Attribute";
})(qP || (qP = {})), Sqt = class {
    constructor(e, a, s){
        this.decodeTree = e, this.emitCodePoint = a, this.errors = s, this.state = A1.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = qP.Strict, this.runConsumed = 0;
    }
    startEntity(e) {
        this.decodeMode = e, this.state = A1.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1, this.runConsumed = 0;
    }
    write(e, a) {
        switch(this.state){
            case A1.EntityStart:
                return e.charCodeAt(a) === Mf.NUM ? (this.state = A1.NumericStart, this.consumed += 1, this.stateNumericStart(e, a + 1)) : (this.state = A1.NamedEntity, this.stateNamedEntity(e, a));
            case A1.NumericStart:
                return this.stateNumericStart(e, a);
            case A1.NumericDecimal:
                return this.stateNumericDecimal(e, a);
            case A1.NumericHex:
                return this.stateNumericHex(e, a);
            case A1.NamedEntity:
                return this.stateNamedEntity(e, a);
        }
    }
    stateNumericStart(e, a) {
        return a >= e.length ? -1 : (e.charCodeAt(a) | Cqt) === Mf.LOWER_X ? (this.state = A1.NumericHex, this.consumed += 1, this.stateNumericHex(e, a + 1)) : (this.state = A1.NumericDecimal, this.stateNumericDecimal(e, a));
    }
    stateNumericHex(e, a) {
        for(; a < e.length;){
            const s = e.charCodeAt(a);
            if (xje(s) || z7r(s)) {
                const l = s <= Mf.NINE ? s - Mf.ZERO : (s | Cqt) - Mf.LOWER_A + 10;
                this.result = this.result * 16 + l, this.consumed++, a++;
            } else return this.emitNumericEntity(s, 3);
        }
        return -1;
    }
    stateNumericDecimal(e, a) {
        for(; a < e.length;){
            const s = e.charCodeAt(a);
            if (xje(s)) this.result = this.result * 10 + (s - Mf.ZERO), this.consumed++, a++;
            else return this.emitNumericEntity(s, 2);
        }
        return -1;
    }
    emitNumericEntity(e, a) {
        var s;
        if (this.consumed <= a) return (s = this.errors) === null || s === void 0 || s.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (e === Mf.SEMI) this.consumed += 1;
        else if (this.decodeMode === qP.Strict) return 0;
        return this.emitCodePoint(N7r(this.result), this.consumed), this.errors && (e !== Mf.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
    }
    stateNamedEntity(e, a) {
        const { decodeTree: s } = this;
        let l = s[this.treeIndex], u = (l & Tw.VALUE_LENGTH) >> 14;
        for(; a < e.length;){
            if (u === 0 && (l & Tw.FLAG13) !== 0) {
                const m = (l & Tw.BRANCH_LENGTH) >> 7;
                if (this.runConsumed === 0) {
                    const b = l & Tw.JUMP_TABLE;
                    if (e.charCodeAt(a) !== b) return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
                    a++, this.excess++, this.runConsumed++;
                }
                for(; this.runConsumed < m;){
                    if (a >= e.length) return -1;
                    const b = this.runConsumed - 1, g = s[this.treeIndex + 1 + (b >> 1)], _ = b % 2 === 0 ? g & 255 : g >> 8 & 255;
                    if (e.charCodeAt(a) !== _) return this.runConsumed = 0, this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
                    a++, this.excess++, this.runConsumed++;
                }
                this.runConsumed = 0, this.treeIndex += 1 + (m >> 1), l = s[this.treeIndex], u = (l & Tw.VALUE_LENGTH) >> 14;
            }
            if (a >= e.length) break;
            const p = e.charCodeAt(a);
            if (p === Mf.SEMI && u !== 0 && (l & Tw.FLAG13) !== 0) return this.emitNamedEntityData(this.treeIndex, u, this.consumed + this.excess);
            if (this.treeIndex = G7r(s, l, this.treeIndex + Math.max(1, u), p), this.treeIndex < 0) return this.result === 0 || this.decodeMode === qP.Attribute && (u === 0 || q7r(p)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (l = s[this.treeIndex], u = (l & Tw.VALUE_LENGTH) >> 14, u !== 0) {
                if (p === Mf.SEMI) return this.emitNamedEntityData(this.treeIndex, u, this.consumed + this.excess);
                this.decodeMode !== qP.Strict && (l & Tw.FLAG13) === 0 && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
            }
            a++, this.excess++;
        }
        return -1;
    }
    emitNotTerminatedNamedEntity() {
        var e;
        const { result: a, decodeTree: s } = this, l = (s[a] & Tw.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(a, l, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
    }
    emitNamedEntityData(e, a, s) {
        const { decodeTree: l } = this;
        return this.emitCodePoint(a === 1 ? l[e] & ~(Tw.VALUE_LENGTH | Tw.FLAG13) : l[e + 1], s), a === 3 && this.emitCodePoint(l[e + 2], s), s;
    }
    end() {
        var e;
        switch(this.state){
            case A1.NamedEntity:
                return this.result !== 0 && (this.decodeMode !== qP.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            case A1.NumericDecimal:
                return this.emitNumericEntity(0, 2);
            case A1.NumericHex:
                return this.emitNumericEntity(0, 3);
            case A1.NumericStart:
                return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
            case A1.EntityStart:
                return 0;
        }
    }
}, i(Sqt, "EntityDecoder"), H7r = Sqt, i(U7r, "getDecoder"), i(G7r, "determineBranch"), Z7r = U7r(F7r), i(W7r, "decodeXML");

}
