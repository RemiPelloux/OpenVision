import { vhl } from "./decode-codepoint.js";
import { ghl } from "./decode-data-html.js";
import { B3g } from "./decode-data-xml.js";
import { G3g, H3g, Sfs, U3g, V3g } from "./qIc.js";
import { x } from "./tslib.es6.js";
var MW, _hl, AYe, PW, c9e, bhl;
export { AYe, MW, PW, _hl, bhl, c9e };
var __wakaru_j3g_initialized = false;
export function j3g() {
if (__wakaru_j3g_initialized) return;
__wakaru_j3g_initialized = true;
x(), ghl(), B3g(), vhl(), vhl(), (function(e) {
    e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(MW || (MW = {})), _hl = 32, (function(e) {
    e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(AYe || (AYe = {})), (function(e) {
    e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(PW || (PW = {})), (function(e) {
    e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(c9e || (c9e = {})), bhl = class {
    constructor(e, t, n){
        this.decodeTree = e, this.emitCodePoint = t, this.errors = n, this.state = PW.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = c9e.Strict;
    }
    startEntity(e) {
        this.decodeMode = e, this.state = PW.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
    }
    write(e, t) {
        switch(this.state){
            case PW.EntityStart:
                return e.charCodeAt(t) === MW.NUM ? (this.state = PW.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = PW.NamedEntity, this.stateNamedEntity(e, t));
            case PW.NumericStart:
                return this.stateNumericStart(e, t);
            case PW.NumericDecimal:
                return this.stateNumericDecimal(e, t);
            case PW.NumericHex:
                return this.stateNumericHex(e, t);
            case PW.NamedEntity:
                return this.stateNamedEntity(e, t);
        }
    }
    stateNumericStart(e, t) {
        return t >= e.length ? -1 : (e.charCodeAt(t) | _hl) === MW.LOWER_X ? (this.state = PW.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = PW.NumericDecimal, this.stateNumericDecimal(e, t));
    }
    addToNumericResult(e, t, n, i) {
        if (t !== n) {
            const r = n - t;
            this.result = this.result * Math.pow(i, r) + Number.parseInt(e.substr(t, r), i), this.consumed += r;
        }
    }
    stateNumericHex(e, t) {
        const n = t;
        for(; t < e.length;){
            const i = e.charCodeAt(t);
            if (Sfs(i) || H3g(i)) t += 1;
            else return this.addToNumericResult(e, n, t, 16), this.emitNumericEntity(i, 3);
        }
        return this.addToNumericResult(e, n, t, 16), -1;
    }
    stateNumericDecimal(e, t) {
        const n = t;
        for(; t < e.length;){
            const i = e.charCodeAt(t);
            if (Sfs(i)) t += 1;
            else return this.addToNumericResult(e, n, t, 10), this.emitNumericEntity(i, 2);
        }
        return this.addToNumericResult(e, n, t, 10), -1;
    }
    emitNumericEntity(e, t) {
        var n;
        if (this.consumed <= t) return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if (e === MW.SEMI) this.consumed += 1;
        else if (this.decodeMode === c9e.Strict) return 0;
        return this.emitCodePoint(U3g(this.result), this.consumed), this.errors && (e !== MW.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
    }
    stateNamedEntity(e, t) {
        const { decodeTree: n } = this;
        let i = n[this.treeIndex], r = (i & AYe.VALUE_LENGTH) >> 14;
        for(; t < e.length; t++, this.excess++){
            const s = e.charCodeAt(t);
            if (this.treeIndex = V3g(n, i, this.treeIndex + Math.max(1, r), s), this.treeIndex < 0) return this.result === 0 || this.decodeMode === c9e.Attribute && (r === 0 || G3g(s)) ? 0 : this.emitNotTerminatedNamedEntity();
            if (i = n[this.treeIndex], r = (i & AYe.VALUE_LENGTH) >> 14, r !== 0) {
                if (s === MW.SEMI) return this.emitNamedEntityData(this.treeIndex, r, this.consumed + this.excess);
                this.decodeMode !== c9e.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
            }
        }
        return -1;
    }
    emitNotTerminatedNamedEntity() {
        var e;
        const { result: t, decodeTree: n } = this, i = (n[t] & AYe.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(t, i, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
    }
    emitNamedEntityData(e, t, n) {
        const { decodeTree: i } = this;
        return this.emitCodePoint(t === 1 ? i[e] & ~AYe.VALUE_LENGTH : i[e + 1], n), t === 3 && this.emitCodePoint(i[e + 2], n), n;
    }
    end() {
        var e;
        switch(this.state){
            case PW.NamedEntity:
                return this.result !== 0 && (this.decodeMode !== c9e.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            case PW.NumericDecimal:
                return this.emitNumericEntity(0, 2);
            case PW.NumericHex:
                return this.emitNumericEntity(0, 3);
            case PW.NumericStart:
                return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
            case PW.EntityStart:
                return 0;
        }
    }
};

}
