import { VS1 } from "./ipa.js";
import { E } from "./tslib.es6.js";
var JCp, eTp, sX, tTp, nTp, Yne, NO;
export { JCp, NO, Yne, eTp, nTp, sX, tTp };
var __wakaru_iPa_initialized = false;
export function iPa() {
if (__wakaru_iPa_initialized) return;
__wakaru_iPa_initialized = true;
"use strict";
E(), JCp = Object.defineProperty, eTp = (t, e, n)=>e in t ? JCp(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, sX = (t, e, n)=>eTp(t, typeof e != "symbol" ? e + "" : e, n), tTp = class {
    constructor(t){
        this.limit = t, sX(this, "entries", new Map);
    }
    get size() {
        return this.entries.size;
    }
    normalize(t) {
        const e = this.entries.get(t);
        if (e !== void 0) return e;
        const n = VS1(t);
        return this.entries.size >= this.limit && this.entries.clear(), this.entries.set(t, n), n;
    }
}, nTp = new tTp(2e4), Yne = class Wk {
    constructor(e){
        sX(this, "docsByValue"), sX(this, "stats");
        const n = e.map((i)=>this._processDocument(i));
        this.docsByValue = new Map;
        for (const i of n)this.docsByValue.set(i.id, i);
        this.stats = this._computeCorpusStats(n);
    }
    static scoreSingle(e, n, i) {
        return Wk._basicCommandScore(e, n, i);
    }
    hasValue(e) {
        return this.docsByValue.has(e);
    }
    score(e, n, i) {
        const r = Wk._preprocessQuery(n);
        if (r.tokens.length === 0) return 1;
        const o = this.docsByValue.get(e) ?? this._processDocument({
            value: e,
            keywords: i
        });
        return this._scoreDocument(o, r, this.stats);
    }
    static _preprocessQuery(e) {
        if (e !== Wk._lastQuerySearch) {
            const n = Wk._normalizeText(e);
            Wk._lastQuerySearch = e, Wk._lastQuery = {
                normalized: n,
                tokens: Wk._tokenize(n)
            };
        }
        return Wk._lastQuery;
    }
    _processDocument(e) {
        const n = e.keywords?.[0] ?? "", i = e.keywords && e.keywords.length > 1 ? e.keywords.slice(1) : [], r = Wk._normalizeText(e.value), s = Wk._normalizeText(n), o = i.map((p)=>Wk._normalizeText(p)).filter(Boolean), a = Wk._tokenize(r), l = Wk._tokenize(s), c = o.flatMap((p)=>Wk._tokenize(p)), u = new Map;
        this._addWeightedTokens(u, a, Wk.VALUE_WEIGHT), this._addWeightedTokens(u, l, Wk.TITLE_WEIGHT), this._addWeightedTokens(u, c, Wk.KEYWORD_WEIGHT);
        const d = new Set(u.keys()), h = a.length * Wk.VALUE_WEIGHT + l.length * Wk.TITLE_WEIGHT + c.length * Wk.KEYWORD_WEIGHT;
        return {
            id: e.id ?? e.value,
            value: e.value,
            valueNormalized: r,
            titleNormalized: s,
            keywordsNormalized: o,
            valueTokens: a,
            titleTokens: l,
            keywordTokens: c,
            tokenSet: d,
            tf: u,
            docLength: Math.max(1, h),
            acronym: l.map((p)=>p[0]).join(""),
            joinedTitle: l.join("")
        };
    }
    _addWeightedTokens(e, n, i) {
        for (const r of n)e.set(r, (e.get(r) ?? 0) + i);
    }
    _computeCorpusStats(e) {
        const n = new Map;
        let i = 0;
        for (const s of e){
            i += s.docLength;
            for (const o of s.tokenSet)n.set(o, (n.get(o) ?? 0) + 1);
        }
        const r = Math.max(1, e.length);
        return {
            docCount: r,
            avgDocLength: Math.max(1, i / r),
            docFreq: n
        };
    }
    _scoreDocument(e, n, i) {
        let r = 0, s = 0, o = 0, a = 0;
        for (const d of n.tokens){
            const h = this._getTokenEvidence(e, d);
            h.tf > 0 && (r += this._bm25TermScore(h.tf, d, e, i)), s += h.boundaryBonus, o += h.shortInfixPenalty;
            const p = this._fuzzyTokenAlignmentScore(e, d);
            a += p;
            const g = d.length <= Wk.SHORT_QUERY_LENGTH ? Wk.MIN_FUZZY_TOKEN_SCORE_SHORT : Wk.MIN_FUZZY_TOKEN_SCORE;
            if (h.tf <= 0 && p < g) return 0;
        }
        n.normalized && this._hasWholeTokenPhrase(e.titleNormalized, n.normalized) ? s += .12 : n.normalized && this._hasWholeTokenPhrase(e.valueNormalized, n.normalized) && (s += .08);
        const l = this._clamp01(this._normalizeLexical(r) + s - o), c = this._clamp01(a / Math.max(1, n.tokens.length));
        if (l <= 0 && c < Wk.MIN_FUZZY_ONLY_SCORE) return 0;
        const u = this._clamp01(l * Wk.LEXICAL_WEIGHT + c * Wk.FUZZY_WEIGHT);
        return u >= Wk.MIN_VISIBLE_SCORE ? u : 0;
    }
    _getTokenEvidence(e, n) {
        const i = e.tf.get(n) ?? 0, r = e.titleTokens.includes(n), s = e.titleTokens.some((h)=>h.startsWith(n)), o = e.keywordTokens.includes(n), a = e.keywordTokens.some((h)=>h.startsWith(n)), l = e.valueTokens.includes(n), c = e.valueTokens.some((h)=>h.startsWith(n));
        let u = 0;
        r ? u += .15 : s ? u += .1 : o || l ? u += .08 : (a || c) && (u += .05);
        let d = 0;
        return n.length <= Wk.SHORT_QUERY_LENGTH && (this._hasInteriorInfixMatch(e.titleTokens, n) || this._hasInteriorInfixMatch(e.keywordTokens, n) || this._hasInteriorInfixMatch(e.valueTokens, n)) && !s && !a && !c && !r && !o && !l && (d += .2), {
            tf: i,
            boundaryBonus: u,
            shortInfixPenalty: d
        };
    }
    _hasInteriorInfixMatch(e, n) {
        for (const i of e){
            const r = i.indexOf(n);
            if (r > 0 && r + n.length < i.length) return !0;
        }
        return !1;
    }
    _fuzzyTokenAlignmentScore(e, n) {
        let i = 0, r = !1;
        for (const s of e.titleTokens)this._isStrongShortEditMatch(n, s) && (r = !0), i = Math.max(i, this._tokenSimilarity(n, s) * 1);
        for (const s of e.keywordTokens)this._isStrongShortEditMatch(n, s) && (r = !0), i = Math.max(i, this._tokenSimilarity(n, s) * .82);
        for (const s of e.valueTokens)this._isStrongShortEditMatch(n, s) && (r = !0), i = Math.max(i, this._tokenSimilarity(n, s) * .74);
        return e.joinedTitle.length > 0 && (i = Math.max(i, this._sequenceSimilarity(n, e.joinedTitle) * .84)), e.acronym.length > 0 && (i = Math.max(i, this._sequenceSimilarity(n, e.acronym) * 1.12)), n.length <= Wk.SHORT_QUERY_LENGTH && i > 0 && !this._hasPrefixishMatch(e, n) && !r && (i *= .2), this._clamp01(i);
    }
    _isStrongShortEditMatch(e, n) {
        return e.length > Wk.SHORT_QUERY_LENGTH ? !1 : this._damerauSimilarity(e, n) >= .72;
    }
    _hasPrefixishMatch(e, n) {
        return !!(e.titleTokens.some((i)=>i.startsWith(n)) || e.keywordTokens.some((i)=>i.startsWith(n)) || e.valueTokens.some((i)=>i.startsWith(n)) || e.acronym.startsWith(n));
    }
    _tokenSimilarity(e, n) {
        if (e === n) return 1;
        if (n.startsWith(e)) return .92;
        const i = this._damerauSimilarity(e, n), r = this._sequenceSimilarity(e, n);
        let s = Math.max(i * .95, r * .88);
        return e.length <= Wk.SHORT_QUERY_LENGTH && n.includes(e) && !n.startsWith(e) && (s *= .25), s;
    }
    _sequenceSimilarity(e, n) {
        const i = this._subsequenceQuality(n, e);
        if (!i) return 0;
        const r = i.maxConsecutive / Math.max(1, e.length), s = e.length / Math.max(e.length, n.length), o = i.lastIndex - i.firstIndex + 1, a = 1 - (o - e.length) / Math.max(1, o);
        return this._clamp01(r * .5 + this._clamp01(a) * .3 + this._clamp01(s) * .2);
    }
    _subsequenceQuality(e, n) {
        let i = 0, r = -1, s = -1, o = 0, a = 0, l = -1;
        for(let c = 0; c < e.length && i < n.length; c++){
            if (e[c] !== n[i]) {
                a = 0;
                continue;
            }
            r === -1 && (r = c), s = c, l + 1 === c ? a += 1 : a = 1, o = Math.max(o, a), l = c, i += 1;
        }
        return i !== n.length || r === -1 || s === -1 ? null : {
            firstIndex: r,
            lastIndex: s,
            maxConsecutive: o
        };
    }
    _damerauSimilarity(e, n) {
        const i = this._maxAllowedDistance(e.length), r = this._damerauLevenshtein(e, n, i + 1);
        if (r > i) return 0;
        const s = Math.max(e.length, n.length);
        return s > 0 ? 1 - r / s : 0;
    }
    _maxAllowedDistance(e) {
        return e <= 4 ? 1 : Math.max(1, Math.floor(e * .34));
    }
    _damerauLevenshtein(e, n, i) {
        if (e === n) return 0;
        if (e.length === 0) return n.length;
        if (n.length === 0) return e.length;
        if (Math.abs(e.length - n.length) >= i) return i;
        const r = n.length + 1;
        Wk._damerauRows.length < r * 3 && (Wk._damerauRows = new Int32Array(r * 3));
        const s = Wk._damerauRows;
        let o = 0, a = r, l = r * 2;
        for(let c = 0; c < r; c++)s[a + c] = c;
        for(let c = 1; c <= e.length; c++){
            s[l] = c;
            let u = Number.POSITIVE_INFINITY;
            for(let h = 1; h < r; h++){
                const p = e[c - 1] === n[h - 1] ? 0 : 1;
                let g = Math.min(s[a + h] + 1, s[l + h - 1] + 1, s[a + h - 1] + p);
                c > 1 && h > 1 && e[c - 1] === n[h - 2] && e[c - 2] === n[h - 1] && (g = Math.min(g, s[o + h - 2] + p)), s[l + h] = g, u = Math.min(u, g);
            }
            if (u >= i) return i;
            const d = o;
            o = a, a = l, l = d;
        }
        return s[a + r - 1];
    }
    _bm25TermScore(e, n, i, r) {
        const s = r.docFreq.get(n) ?? 0, o = Math.min(3, Math.log(1 + (r.docCount - s + .5) / (s + .5))), a = i.docLength / r.avgDocLength, l = e + Wk.BM25_K1 * (1 - Wk.BM25_B + Wk.BM25_B * a);
        return l <= 0 ? 0 : o * (e * (Wk.BM25_K1 + 1) / l);
    }
    _normalizeLexical(e) {
        return e <= 0 ? 0 : e / (e + 2.4);
    }
    _hasWholeTokenPhrase(e, n) {
        if (!e || !n) return !1;
        if (e === n) return !0;
        const i = this._escapeRegex(n);
        return new RegExp(`(?:^|\\s)${i}(?:$|\\s)`).test(e);
    }
    _escapeRegex(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    _clamp01(e) {
        return Number.isNaN(e) || e <= 0 ? 0 : e >= 1 ? 1 : e;
    }
    static _normalizeText(e) {
        return nTp.normalize(e);
    }
    static _tokenize(e) {
        return e.match(/[a-z0-9]+/g) ?? [];
    }
    static _basicCommandScore(e, n, i) {
        const { normalized: r, tokens: s } = Wk._preprocessQuery(n);
        if (!r) return 1;
        const o = Wk._normalizeText(e), a = i?.map((l)=>Wk._normalizeText(l));
        if (s.length > 1) {
            let l = 1;
            for (const c of s){
                const u = Wk._scoreValueAndKeywords(o, a, c);
                if (u <= 0) return 0;
                l = Math.min(l, u);
            }
            return Math.max(Wk._scoreValueAndKeywords(o, a, r), l);
        }
        return Wk._scoreValueAndKeywords(o, a, r);
    }
    static _scoreValueAndKeywords(e, n, i) {
        let r = Wk._scoreString(e, i);
        if (!n) return r;
        for (const s of n){
            const o = Wk._scoreString(s, i);
            o > r && (r = o);
        }
        return r;
    }
    static _scoreString(e, n) {
        return e === n ? 1 : e.startsWith(n) ? .9 : e.includes(n) ? .7 : Wk._fuzzyMatch(e, n) ? .5 * Wk._calculateFuzzyQuality(e, n) : 0;
    }
    static _fuzzyMatch(e, n) {
        let i = 0;
        for(let r = 0; r < e.length; r++)if (e[r] === n[i] && (i += 1, i === n.length)) return !0;
        return i === n.length;
    }
    static _calculateFuzzyQuality(e, n) {
        let i = 0, r = 0, s = 0;
        for(let o = 0; o < e.length; o++)if (e[o] === n[i]) {
            if (r += 1, s = Math.max(s, r), i += 1, i === n.length) break;
        } else r = 0;
        return Math.min(1, s / Math.max(1, n.length));
    }
}, sX(Yne, "TITLE_WEIGHT", 3), sX(Yne, "KEYWORD_WEIGHT", 1.4), sX(Yne, "VALUE_WEIGHT", .8), sX(Yne, "BM25_K1", 1.2), sX(Yne, "BM25_B", .75), sX(Yne, "SHORT_QUERY_LENGTH", 3), sX(Yne, "MIN_FUZZY_TOKEN_SCORE", .45), sX(Yne, "MIN_FUZZY_TOKEN_SCORE_SHORT", .6), sX(Yne, "MIN_FUZZY_ONLY_SCORE", .65), sX(Yne, "MIN_VISIBLE_SCORE", .15), sX(Yne, "LEXICAL_WEIGHT", .78), sX(Yne, "FUZZY_WEIGHT", .32), sX(Yne, "_lastQuerySearch"), sX(Yne, "_lastQuery", {
    normalized: "",
    tokens: []
}), sX(Yne, "_damerauRows", new Int32Array(0)), NO = Yne;

}
