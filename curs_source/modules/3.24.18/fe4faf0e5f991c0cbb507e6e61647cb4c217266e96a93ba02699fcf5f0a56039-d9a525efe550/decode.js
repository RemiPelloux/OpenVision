import { car, oar } from "./decode-codepoint.js";
import { iar } from "./decode-data-html.js";
import { aar } from "./decode-data-xml.js";
import { i } from "./plugin-brand-icon.js";
function MNe(r) {
    return r >= C1.ZERO && r <= C1.NINE;
}
function lar(r) {
    return r >= C1.UPPER_A && r <= C1.UPPER_F || r >= C1.LOWER_A && r <= C1.LOWER_F;
}
function uar(r) {
    return r >= C1.UPPER_A && r <= C1.UPPER_Z || r >= C1.LOWER_A && r <= C1.LOWER_Z || MNe(r);
}
function dar(r) {
    return r === C1.EQUALS || uar(r);
}
function par(r, e, a, s) {
    const l = (e & gP.BRANCH_LENGTH) >> 7, u = e & gP.JUMP_TABLE;
    if (l === 0) return u !== 0 && s === u ? a : -1;
    if (u) {
        const b = s - u;
        return b < 0 || b >= l ? -1 : r[a + b] - 1;
    }
    let p = a, m = p + l - 1;
    for(; p <= m;){
        const b = p + m >>> 1, g = r[b];
        if (g < s) p = b + 1;
        else if (g > s) m = b - 1;
        else return r[b + l];
    }
    return -1;
}
var C1, mar, gP, S1, XT, PNt, far;
export { C1, MNe, PNt, S1, XT, dar, far, gP, lar, mar, par, uar };
var __wakaru_wvi_initialized = false;
export function wvi() {
if (__wakaru_wvi_initialized) return;
__wakaru_wvi_initialized = true;
iar(), aar(), car(), iar(), aar(), car(), (function(r) {
    r[r.NUM = 35] = "NUM", r[r.SEMI = 59] = "SEMI", r[r.EQUALS = 61] = "EQUALS", r[r.ZERO = 48] = "ZERO", r[r.NINE = 57] = "NINE", r[r.LOWER_A = 97] = "LOWER_A", r[r.LOWER_F = 102] = "LOWER_F", r[r.LOWER_X = 120] = "LOWER_X", r[r.LOWER_Z = 122] = "LOWER_Z", r[r.UPPER_A = 65] = "UPPER_A", r[r.UPPER_F = 70] = "UPPER_F", r[r.UPPER_Z = 90] = "UPPER_Z";
})(C1 || (C1 = {})), mar = 32, (function(r) {
    r[r.VALUE_LENGTH = 49152] = "VALUE_LENGTH", r[r.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", r[r.JUMP_TABLE = 127] = "JUMP_TABLE";
})(gP || (gP = {})), i(MNe, "isNumber"), i(lar, "isHexadecimalCharacter"), i(uar, "isAsciiAlphaNumeric"), i(dar, "isEntityInAttributeInvalidEnd"), (function(r) {
    r[r.EntityStart = 0] = "EntityStart", r[r.NumericStart = 1] = "NumericStart", r[r.NumericDecimal = 2] = "NumericDecimal", r[r.NumericHex = 3] = "NumericHex", r[r.NamedEntity = 4] = "NamedEntity";
})(S1 || (S1 = {})), (function(r) {
    r[r.Legacy = 0] = "Legacy", r[r.Strict = 1] = "Strict", r[r.Attribute = 2] = "Attribute";
})(XT || (XT = {})), PNt = class {
    constructor(e, a, s){
        this.decodeTree = e, this.emitCodePoint = a, this.errors = s, this.state = S1.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = XT.Strict;
    }
    startEntity(e) {
        this.decodeMode = e, this.state = S1.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
    }
    write(e, a) {
        switch(this.state){
            case S1.EntityStart:
                return e.charCodeAt(a) === C1.NUM ? (this.state = S1.NumericStart, this.consumed += 1, this.stateNumericStart(e, a + 1)) : (this.state = S1.NamedEntity, this.stateNamedEntity(e, a));
            case S1.NumericStart:
                return this.stateNumericStart(e, a);
            case S1.NumericDecimal:
                return this.stateNumericDecimal(e, a);
            case S1.NumericHex:
                return this.stateNumericHex(e, a);
            case S1.NamedEntity:
                return this.stateNamedEntity(e, a);
        }
    }
    stateNumericStart(e, a) {
        return a >= e.length ? -1 : (e.charCodeAt(a) | mar) === C1.LOWER_X ? (this.state = S1.NumericHex, this.consumed += 1, this.stateNumericHex(e, a + 1)) : (this.state = S1.NumericDecimal, this.stateNumericDecimal(e, a));
    }
    addToNumericResult(e, a, s, l) {
        if (a !== s) {
            const u = s - a;
            this.result = this.result * Math.pow(l, u) + Number.parseInt(e.substr(a, u), l), this.consumed += u;
        }
    }
    stateNumericHex(e, a) {
        const s = a;
        for(; a < e.length;){
            const l = e.charCodeAt(a);
            if (MNe(l) || lar(l)) a += 1;
            else return this.addToNumericResult(e, s, a, 16), this.emitNumericEntity(l, 3);
        }
        return this.addToNumericResult(e, s, a, 16), -1;
    }
    stateNumericDecimal(e, a) {
        const s = a;
        for(; a < e.length;){
            const l = e.charCodeAt(a);
            if (MNe(l)) a += 1;
            else return this.addToNumericResult(e, s, a, 10), this.emitNumericEntity(l, 2);
        }
        return this.addToNumericResult(e, s, a, 10), -1;
    }
    emitNumericEntity(e, a) {
        var s;
        if (this.consumed <= a) return (s = this.errors) === null || s === void 0 || s.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (e === C1.SEMI) this.consumed += 1;
        else if (this.decodeMode === XT.Strict) return 0;
        return this.emitCodePoint(oar(this.result), this.consumed), this.errors && (e !== C1.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
    }
    stateNamedEntity(e, a) {
        const { decodeTree: s } = this;
        let l = s[this.treeIndex], u = (l & gP.VALUE_LENGTH) >> 14;
        for(; a < e.length; a++, this.excess++){
            const p = e.charCodeAt(a);
            if (this.treeIndex = par(s, l, this.treeIndex + Math.max(1, u), p), this.treeIndex < 0) return this.result === 0 || this.decodeMode === XT.Attribute && (u === 0 || dar(p)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (l = s[this.treeIndex], u = (l & gP.VALUE_LENGTH) >> 14, u !== 0) {
                if (p === C1.SEMI) return this.emitNamedEntityData(this.treeIndex, u, this.consumed + this.excess);
                this.decodeMode !== XT.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
            }
        }
        return -1;
    }
    emitNotTerminatedNamedEntity() {
        var e;
        const { result: a, decodeTree: s } = this, l = (s[a] & gP.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(a, l, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
    }
    emitNamedEntityData(e, a, s) {
        const { decodeTree: l } = this;
        return this.emitCodePoint(a === 1 ? l[e] & ~gP.VALUE_LENGTH : l[e + 1], s), a === 3 && this.emitCodePoint(l[e + 2], s), s;
    }
    end() {
        var e;
        switch(this.state){
            case S1.NamedEntity:
                return this.result !== 0 && (this.decodeMode !== XT.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            case S1.NumericDecimal:
                return this.emitNumericEntity(0, 2);
            case S1.NumericHex:
                return this.emitNumericEntity(0, 3);
            case S1.NumericStart:
                return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
            case S1.EntityStart:
                return 0;
        }
    }
}, i(PNt, "EntityDecoder"), far = PNt, i(par, "determineBranch");

}
