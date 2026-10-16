import { etv } from "./f0s.js";
import { x } from "./tslib.es6.js";
var euu, tuu, y$, nuu, iuu, Mj, rMe;
export { Mj, euu, iuu, nuu, rMe, tuu, y$ };
var __wakaru_ruu_initialized = false;
export function ruu() {
if (__wakaru_ruu_initialized) return;
__wakaru_ruu_initialized = true;
"use strict";
x(), euu = Object.defineProperty, tuu = (e, t, n)=>t in e ? euu(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, y$ = (e, t, n)=>tuu(e, typeof t != "symbol" ? t + "" : t, n), nuu = class {
    constructor(e){
        this.limit = e, y$(this, "entries", new Map);
    }
    get size() {
        return this.entries.size;
    }
    normalize(e) {
        const t = this.entries.get(e);
        if (t !== void 0) return t;
        const n = etv(e);
        return this.entries.size >= this.limit && this.entries.clear(), this.entries.set(e, n), n;
    }
}, iuu = new nuu(2e4), Mj = class gy {
    constructor(t){
        y$(this, "docsByValue"), y$(this, "stats");
        const n = t.map((i)=>this._processDocument(i));
        this.docsByValue = new Map;
        for (const i of n)this.docsByValue.set(i.id, i);
        this.stats = this._computeCorpusStats(n);
    }
    static scoreSingle(t, n, i) {
        return gy._basicCommandScore(t, n, i);
    }
    hasValue(t) {
        return this.docsByValue.has(t);
    }
    score(t, n, i) {
        const r = gy._preprocessQuery(n);
        if (r.tokens.length === 0) return 1;
        const o = this.docsByValue.get(t) ?? this._processDocument({
            value: t,
            keywords: i
        });
        return this._scoreDocument(o, r, this.stats);
    }
    static _preprocessQuery(t) {
        if (t !== gy._lastQuerySearch) {
            const n = gy._normalizeText(t);
            gy._lastQuerySearch = t, gy._lastQuery = {
                normalized: n,
                tokens: gy._tokenize(n)
            };
        }
        return gy._lastQuery;
    }
    _processDocument(t) {
        const n = t.keywords?.[0] ?? "", i = t.keywords && t.keywords.length > 1 ? t.keywords.slice(1) : [], r = gy._normalizeText(t.value), s = gy._normalizeText(n), o = i.map((g)=>gy._normalizeText(g)).filter(Boolean), a = gy._tokenize(r), c = gy._tokenize(s), l = o.flatMap((g)=>gy._tokenize(g)), u = new Map;
        this._addWeightedTokens(u, a, gy.VALUE_WEIGHT), this._addWeightedTokens(u, c, gy.TITLE_WEIGHT), this._addWeightedTokens(u, l, gy.KEYWORD_WEIGHT);
        const h = new Set(u.keys()), p = a.length * gy.VALUE_WEIGHT + c.length * gy.TITLE_WEIGHT + l.length * gy.KEYWORD_WEIGHT;
        return {
            id: t.id ?? t.value,
            value: t.value,
            valueNormalized: r,
            titleNormalized: s,
            keywordsNormalized: o,
            valueTokens: a,
            titleTokens: c,
            keywordTokens: l,
            tokenSet: h,
            tf: u,
            docLength: Math.max(1, p),
            acronym: c.map((g)=>g[0]).join(""),
            joinedTitle: c.join("")
        };
    }
    _addWeightedTokens(t, n, i) {
        for (const r of n)t.set(r, (t.get(r) ?? 0) + i);
    }
    _computeCorpusStats(t) {
        const n = new Map;
        let i = 0;
        for (const s of t){
            i += s.docLength;
            for (const o of s.tokenSet)n.set(o, (n.get(o) ?? 0) + 1);
        }
        const r = Math.max(1, t.length);
        return {
            docCount: r,
            avgDocLength: Math.max(1, i / r),
            docFreq: n
        };
    }
    _scoreDocument(t, n, i) {
        let r = 0, s = 0, o = 0, a = 0;
        for (const h of n.tokens){
            const p = this._getTokenEvidence(t, h);
            p.tf > 0 && (r += this._bm25TermScore(p.tf, h, t, i)), s += p.boundaryBonus, o += p.shortInfixPenalty;
            const g = this._fuzzyTokenAlignmentScore(t, h);
            a += g;
            const f = h.length <= gy.SHORT_QUERY_LENGTH ? gy.MIN_FUZZY_TOKEN_SCORE_SHORT : gy.MIN_FUZZY_TOKEN_SCORE;
            if (p.tf <= 0 && g < f) return 0;
        }
        n.normalized && this._hasWholeTokenPhrase(t.titleNormalized, n.normalized) ? s += .12 : n.normalized && this._hasWholeTokenPhrase(t.valueNormalized, n.normalized) && (s += .08);
        const c = this._clamp01(this._normalizeLexical(r) + s - o), l = this._clamp01(a / Math.max(1, n.tokens.length));
        if (c <= 0 && l < gy.MIN_FUZZY_ONLY_SCORE) return 0;
        const u = this._clamp01(c * gy.LEXICAL_WEIGHT + l * gy.FUZZY_WEIGHT);
        return u >= gy.MIN_VISIBLE_SCORE ? u : 0;
    }
    _getTokenEvidence(t, n) {
        const i = t.tf.get(n) ?? 0, r = t.titleTokens.includes(n), s = t.titleTokens.some((p)=>p.startsWith(n)), o = t.keywordTokens.includes(n), a = t.keywordTokens.some((p)=>p.startsWith(n)), c = t.valueTokens.includes(n), l = t.valueTokens.some((p)=>p.startsWith(n));
        let u = 0;
        r ? u += .15 : s ? u += .1 : o || c ? u += .08 : (a || l) && (u += .05);
        let h = 0;
        return n.length <= gy.SHORT_QUERY_LENGTH && (this._hasInteriorInfixMatch(t.titleTokens, n) || this._hasInteriorInfixMatch(t.keywordTokens, n) || this._hasInteriorInfixMatch(t.valueTokens, n)) && !s && !a && !l && !r && !o && !c && (h += .2), {
            tf: i,
            boundaryBonus: u,
            shortInfixPenalty: h
        };
    }
    _hasInteriorInfixMatch(t, n) {
        for (const i of t){
            const r = i.indexOf(n);
            if (r > 0 && r + n.length < i.length) return !0;
        }
        return !1;
    }
    _fuzzyTokenAlignmentScore(t, n) {
        let i = 0, r = !1;
        for (const s of t.titleTokens)this._isStrongShortEditMatch(n, s) && (r = !0), i = Math.max(i, this._tokenSimilarity(n, s) * 1);
        for (const s of t.keywordTokens)this._isStrongShortEditMatch(n, s) && (r = !0), i = Math.max(i, this._tokenSimilarity(n, s) * .82);
        for (const s of t.valueTokens)this._isStrongShortEditMatch(n, s) && (r = !0), i = Math.max(i, this._tokenSimilarity(n, s) * .74);
        return t.joinedTitle.length > 0 && (i = Math.max(i, this._sequenceSimilarity(n, t.joinedTitle) * .84)), t.acronym.length > 0 && (i = Math.max(i, this._sequenceSimilarity(n, t.acronym) * 1.12)), n.length <= gy.SHORT_QUERY_LENGTH && i > 0 && !this._hasPrefixishMatch(t, n) && !r && (i *= .2), this._clamp01(i);
    }
    _isStrongShortEditMatch(t, n) {
        return t.length > gy.SHORT_QUERY_LENGTH ? !1 : this._damerauSimilarity(t, n) >= .72;
    }
    _hasPrefixishMatch(t, n) {
        return !!(t.titleTokens.some((i)=>i.startsWith(n)) || t.keywordTokens.some((i)=>i.startsWith(n)) || t.valueTokens.some((i)=>i.startsWith(n)) || t.acronym.startsWith(n));
    }
    _tokenSimilarity(t, n) {
        if (t === n) return 1;
        if (n.startsWith(t)) return .92;
        const i = this._damerauSimilarity(t, n), r = this._sequenceSimilarity(t, n);
        let s = Math.max(i * .95, r * .88);
        return t.length <= gy.SHORT_QUERY_LENGTH && n.includes(t) && !n.startsWith(t) && (s *= .25), s;
    }
    _sequenceSimilarity(t, n) {
        const i = this._subsequenceQuality(n, t);
        if (!i) return 0;
        const r = i.maxConsecutive / Math.max(1, t.length), s = t.length / Math.max(t.length, n.length), o = i.lastIndex - i.firstIndex + 1, a = 1 - (o - t.length) / Math.max(1, o);
        return this._clamp01(r * .5 + this._clamp01(a) * .3 + this._clamp01(s) * .2);
    }
    _subsequenceQuality(t, n) {
        let i = 0, r = -1, s = -1, o = 0, a = 0, c = -1;
        for(let l = 0; l < t.length && i < n.length; l++){
            if (t[l] !== n[i]) {
                a = 0;
                continue;
            }
            r === -1 && (r = l), s = l, c + 1 === l ? a += 1 : a = 1, o = Math.max(o, a), c = l, i += 1;
        }
        return i !== n.length || r === -1 || s === -1 ? null : {
            firstIndex: r,
            lastIndex: s,
            maxConsecutive: o
        };
    }
    _damerauSimilarity(t, n) {
        const i = this._maxAllowedDistance(t.length), r = this._damerauLevenshtein(t, n, i + 1);
        if (r > i) return 0;
        const s = Math.max(t.length, n.length);
        return s > 0 ? 1 - r / s : 0;
    }
    _maxAllowedDistance(t) {
        return t <= 4 ? 1 : Math.max(1, Math.floor(t * .34));
    }
    _damerauLevenshtein(t, n, i) {
        if (t === n) return 0;
        if (t.length === 0) return n.length;
        if (n.length === 0) return t.length;
        if (Math.abs(t.length - n.length) >= i) return i;
        const r = n.length + 1;
        gy._damerauRows.length < r * 3 && (gy._damerauRows = new Int32Array(r * 3));
        const s = gy._damerauRows;
        let o = 0, a = r, c = r * 2;
        for(let l = 0; l < r; l++)s[a + l] = l;
        for(let l = 1; l <= t.length; l++){
            s[c] = l;
            let u = Number.POSITIVE_INFINITY;
            for(let p = 1; p < r; p++){
                const g = t[l - 1] === n[p - 1] ? 0 : 1;
                let f = Math.min(s[a + p] + 1, s[c + p - 1] + 1, s[a + p - 1] + g);
                l > 1 && p > 1 && t[l - 1] === n[p - 2] && t[l - 2] === n[p - 1] && (f = Math.min(f, s[o + p - 2] + g)), s[c + p] = f, u = Math.min(u, f);
            }
            if (u >= i) return i;
            const h = o;
            o = a, a = c, c = h;
        }
        return s[a + r - 1];
    }
    _bm25TermScore(t, n, i, r) {
        const s = r.docFreq.get(n) ?? 0, o = Math.min(3, Math.log(1 + (r.docCount - s + .5) / (s + .5))), a = i.docLength / r.avgDocLength, c = t + gy.BM25_K1 * (1 - gy.BM25_B + gy.BM25_B * a);
        return c <= 0 ? 0 : o * (t * (gy.BM25_K1 + 1) / c);
    }
    _normalizeLexical(t) {
        return t <= 0 ? 0 : t / (t + 2.4);
    }
    _hasWholeTokenPhrase(t, n) {
        if (!t || !n) return !1;
        if (t === n) return !0;
        const i = this._escapeRegex(n);
        return new RegExp(`(?:^|\\s)${i}(?:$|\\s)`).test(t);
    }
    _escapeRegex(t) {
        return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    _clamp01(t) {
        return Number.isNaN(t) || t <= 0 ? 0 : t >= 1 ? 1 : t;
    }
    static _normalizeText(t) {
        return iuu.normalize(t);
    }
    static _tokenize(t) {
        return t.match(/[a-z0-9]+/g) ?? [];
    }
    static _basicCommandScore(t, n, i) {
        const { normalized: r, tokens: s } = gy._preprocessQuery(n);
        if (!r) return 1;
        const o = gy._normalizeText(t), a = i?.map((c)=>gy._normalizeText(c));
        if (s.length > 1) {
            let c = 1;
            for (const l of s){
                const u = gy._scoreValueAndKeywords(o, a, l);
                if (u <= 0) return 0;
                c = Math.min(c, u);
            }
            return Math.max(gy._scoreValueAndKeywords(o, a, r), c);
        }
        return gy._scoreValueAndKeywords(o, a, r);
    }
    static _scoreValueAndKeywords(t, n, i) {
        let r = gy._scoreString(t, i);
        if (!n) return r;
        for (const s of n){
            const o = gy._scoreString(s, i);
            o > r && (r = o);
        }
        return r;
    }
    static _scoreString(t, n) {
        return t === n ? 1 : t.startsWith(n) ? .9 : t.includes(n) ? .7 : gy._fuzzyMatch(t, n) ? .5 * gy._calculateFuzzyQuality(t, n) : 0;
    }
    static _fuzzyMatch(t, n) {
        let i = 0;
        for(let r = 0; r < t.length; r++)if (t[r] === n[i] && (i += 1, i === n.length)) return !0;
        return i === n.length;
    }
    static _calculateFuzzyQuality(t, n) {
        let i = 0, r = 0, s = 0;
        for(let o = 0; o < t.length; o++)if (t[o] === n[i]) {
            if (r += 1, s = Math.max(s, r), i += 1, i === n.length) break;
        } else r = 0;
        return Math.min(1, s / Math.max(1, n.length));
    }
}, y$(Mj, "TITLE_WEIGHT", 3), y$(Mj, "KEYWORD_WEIGHT", 1.4), y$(Mj, "VALUE_WEIGHT", .8), y$(Mj, "BM25_K1", 1.2), y$(Mj, "BM25_B", .75), y$(Mj, "SHORT_QUERY_LENGTH", 3), y$(Mj, "MIN_FUZZY_TOKEN_SCORE", .45), y$(Mj, "MIN_FUZZY_TOKEN_SCORE_SHORT", .6), y$(Mj, "MIN_FUZZY_ONLY_SCORE", .65), y$(Mj, "MIN_VISIBLE_SCORE", .15), y$(Mj, "LEXICAL_WEIGHT", .78), y$(Mj, "FUZZY_WEIGHT", .32), y$(Mj, "_lastQuerySearch"), y$(Mj, "_lastQuery", {
    normalized: "",
    tokens: []
}), y$(Mj, "_damerauRows", new Int32Array(0)), rMe = Mj;

}
