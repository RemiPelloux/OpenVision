import { Obt, S7 } from "./encodedTokenAttributes.js";
import { Kp, Ph } from "./language.js";
import { Ji, Li, sg } from "./log.js";
import { hxk } from "./sparseMultilineTokens.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var Wxi, sus, CCg, xml, TCg;
export { CCg, TCg, Wxi, sus, xml };
var __wakaru_Aml_initialized = false;
export function Aml() {
if (__wakaru_Aml_initialized) return;
__wakaru_Aml_initialized = true;
"use strict";
E(), Obt(), Dl(), Ji(), hxk(), Kp(), Wxi = !1, sus = class {
    constructor(t, e, n, i){
        this._legend = t, this._themeService = e, this._languageService = n, this._logService = i, this._hasWarnedOverlappingTokens = !1, this._hasWarnedInvalidLengthTokens = !1, this._hasWarnedInvalidEditStart = !1, this._hashTable = new TCg;
    }
    getMetadata(t, e, n) {
        const i = this._languageService.languageIdCodec.encodeLanguageId(n), r = this._hashTable.get(t, e, i);
        let s;
        if (r) s = r.metadata, Wxi && this._logService.getLevel() === sg.Trace && this._logService.trace(`SemanticTokensProviderStyling [CACHED] ${t} / ${e}: foreground ${S7.getForeground(s)}, fontStyle ${S7.getFontStyle(s).toString(2)}`);
        else {
            let o = this._legend.tokenTypes[t];
            const a = [];
            if (o) {
                let l = e;
                for(let u = 0; l > 0 && u < this._legend.tokenModifiers.length; u++)l & 1 && a.push(this._legend.tokenModifiers[u]), l = l >> 1;
                Wxi && l > 0 && this._logService.getLevel() === sg.Trace && (this._logService.trace(`SemanticTokensProviderStyling: unknown token modifier index: ${e.toString(2)} for legend: ${JSON.stringify(this._legend.tokenModifiers)}`), a.push("not-in-legend"));
                const c = this._themeService.getColorTheme().getTokenStyleMetadata(o, a, n);
                if (typeof c > "u") s = 2147483647;
                else {
                    if (s = 0, typeof c.italic < "u") {
                        const u = (c.italic ? 1 : 0) << 11;
                        s |= u | 1;
                    }
                    if (typeof c.bold < "u") {
                        const u = (c.bold ? 2 : 0) << 11;
                        s |= u | 2;
                    }
                    if (typeof c.underline < "u") {
                        const u = (c.underline ? 4 : 0) << 11;
                        s |= u | 4;
                    }
                    if (typeof c.strikethrough < "u") {
                        const u = (c.strikethrough ? 8 : 0) << 11;
                        s |= u | 8;
                    }
                    if (c.foreground) {
                        const u = c.foreground << 15;
                        s |= u | 16;
                    }
                    s === 0 && (s = 2147483647);
                }
            } else Wxi && this._logService.getLevel() === sg.Trace && this._logService.trace(`SemanticTokensProviderStyling: unknown token type index: ${t} for legend: ${JSON.stringify(this._legend.tokenTypes)}`), s = 2147483647, o = "not-in-legend";
            this._hashTable.add(t, e, i, s), Wxi && this._logService.getLevel() === sg.Trace && this._logService.trace(`SemanticTokensProviderStyling ${t} (${o}) / ${e} (${a.join(" ")}): foreground ${S7.getForeground(s)}, fontStyle ${S7.getFontStyle(s).toString(2)}`);
        }
        return s;
    }
    warnOverlappingSemanticTokens(t, e) {
        this._hasWarnedOverlappingTokens || (this._hasWarnedOverlappingTokens = !0, this._logService.warn(`Overlapping semantic tokens detected at lineNumber ${t}, column ${e}`));
    }
    warnInvalidLengthSemanticTokens(t, e) {
        this._hasWarnedInvalidLengthTokens || (this._hasWarnedInvalidLengthTokens = !0, this._logService.warn(`Semantic token with invalid length detected at lineNumber ${t}, column ${e}`));
    }
    warnInvalidEditStart(t, e, n, i, r) {
        this._hasWarnedInvalidEditStart || (this._hasWarnedInvalidEditStart = !0, this._logService.warn(`Invalid semantic tokens edit detected (previousResultId: ${t}, resultId: ${e}) at edit #${n}: The provided start offset ${i} is outside the previous data (length ${r}).`));
    }
}, sus = Re([
    F(1, Ml),
    F(2, Ph),
    F(3, Li)
], sus), CCg = class {
    constructor(t, e, n, i){
        this.tokenTypeIndex = t, this.tokenModifierSet = e, this.languageId = n, this.metadata = i, this.next = null;
    }
}, xml = class qsn {
    constructor(){
        this._elementsCount = 0, this._currentLengthIndex = 0, this._currentLength = qsn._SIZES[this._currentLengthIndex], this._growCount = Math.round(this._currentLengthIndex + 1 < qsn._SIZES.length ? 2 / 3 * this._currentLength : 0), this._elements = [], qsn._nullOutEntries(this._elements, this._currentLength);
    }
    static _nullOutEntries(e, n) {
        for(let i = 0; i < n; i++)e[i] = null;
    }
    _hash2(e, n) {
        return (e << 5) - e + n | 0;
    }
    _hashFunc(e, n, i) {
        return this._hash2(this._hash2(e, n), i) % this._currentLength;
    }
    get(e, n, i) {
        const r = this._hashFunc(e, n, i);
        let s = this._elements[r];
        for(; s;){
            if (s.tokenTypeIndex === e && s.tokenModifierSet === n && s.languageId === i) return s;
            s = s.next;
        }
        return null;
    }
    add(e, n, i, r) {
        if (this._elementsCount++, this._growCount !== 0 && this._elementsCount >= this._growCount) {
            const s = this._elements;
            this._currentLengthIndex++, this._currentLength = qsn._SIZES[this._currentLengthIndex], this._growCount = Math.round(this._currentLengthIndex + 1 < qsn._SIZES.length ? 2 / 3 * this._currentLength : 0), this._elements = [], qsn._nullOutEntries(this._elements, this._currentLength);
            for (const o of s){
                let a = o;
                for(; a;){
                    const l = a.next;
                    a.next = null, this._add(a), a = l;
                }
            }
        }
        this._add(new CCg(e, n, i, r));
    }
    _add(e) {
        const n = this._hashFunc(e.tokenTypeIndex, e.tokenModifierSet, e.languageId);
        e.next = this._elements[n], this._elements[n] = e;
    }
}, xml._SIZES = [
    3,
    7,
    13,
    31,
    61,
    127,
    251,
    509,
    1021,
    2039,
    4093,
    8191,
    16381,
    32749,
    65521,
    131071,
    262139,
    524287,
    1048573,
    2097143
], TCg = xml;

}
