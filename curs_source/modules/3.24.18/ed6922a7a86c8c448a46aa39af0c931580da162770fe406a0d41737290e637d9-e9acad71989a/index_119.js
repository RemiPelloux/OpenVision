import { CVg, EVg, J1l, Kxi, MVg, SVg, Zxi, aTl, cTl, dTl, eTl, hTl, nTl, oTl, rTl, wVg } from "./I0l.js";
import { x } from "./tslib.es6.js";
var pTl, mTl, rd, d9t, b9e, Qxi, Zwn, Ays, Qwn, Jxi, Rys, gTl, yj, fTl, vTl, eIi, _Tl, Bft, h9t, bTl, yTl, STl, kTl, wTl, CTl, TTl, ETl, xTl, Dys, LVg, ITl, Mys, p9t, ATl, RTl, Pys, tIi, Jwn, Lys, m9t, g9t, Nys, nIi, DTl, MTl, NVg, Oys, Fys, PTl, LTl, f9t, iIi, NTl, OTl, FTl, BTl, rIi;
export { ATl, Ays, BTl, Bft, CTl, DTl, Dys, ETl, FTl, Fys, ITl, Jwn, Jxi, LTl, LVg, Lys, MTl, Mys, NTl, NVg, Nys, OTl, Oys, PTl, Pys, Qwn, Qxi, RTl, Rys, STl, TTl, Zwn, _Tl, b9e, bTl, d9t, eIi, f9t, fTl, g9t, gTl, h9t, iIi, kTl, m9t, mTl, nIi, p9t, pTl, rIi, rd, tIi, vTl, wTl, xTl, yTl, yj };
var __wakaru_UTl_initialized = false;
export function UTl() {
if (__wakaru_UTl_initialized) return;
__wakaru_UTl_initialized = true;
x(), pTl = Object.defineProperty, mTl = (e, t, n)=>t in e ? pTl(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n, rd = (e, t, n)=>mTl(e, typeof t != "symbol" ? t + "" : t, n), Qxi = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g, Zwn = class {
    static hasCaptures(e) {
        return e === null ? !1 : (Qxi.lastIndex = 0, Qxi.test(e));
    }
    static replaceCaptures(e, t, n) {
        return e.replace(Qxi, (i, r, s, o)=>{
            let a = n[parseInt(r || s, 10)];
            if (a) {
                let c = t.substring(a.start, a.end);
                for(; c[0] === ".";)c = c.substring(1);
                switch(o){
                    case "downcase":
                        return c.toLowerCase();
                    case "upcase":
                        return c.toUpperCase();
                    default:
                        return c;
                }
            } else return i;
        });
    }
}, Ays = class {
    constructor(e){
        rd(this, "cache", new Map), this.fn = e;
    }
    get(e) {
        if (this.cache.has(e)) return this.cache.get(e);
        const t = this.fn(e);
        return this.cache.set(e, t), t;
    }
}, Qwn = class {
    constructor(e, t, n){
        rd(this, "_cachedMatchRoot", new Ays((i)=>this._root.match(i))), this._colorMap = e, this._defaults = t, this._root = n;
    }
    static createFromRawTheme(e, t) {
        return this.createFromParsedTheme(wVg(e), t);
    }
    static createFromParsedTheme(e, t) {
        return CVg(e, t);
    }
    getColorMap() {
        return this._colorMap.getColorMap();
    }
    getDefaults() {
        return this._defaults;
    }
    match(e) {
        if (e === null) return this._defaults;
        const t = e.scopeName, i = this._cachedMatchRoot.get(t).find((r)=>SVg(e.parent, r.parentScopes));
        return i ? new Rys(i.fontStyle, i.foreground, i.background) : null;
    }
}, Jxi = class x1r {
    constructor(t, n){
        this.parent = t, this.scopeName = n;
    }
    static push(t, n) {
        for (const i of n)t = new x1r(t, i);
        return t;
    }
    static from(...t) {
        let n = null;
        for(let i = 0; i < t.length; i++)n = new x1r(n, t[i]);
        return n;
    }
    push(t) {
        return new x1r(this, t);
    }
    getSegments() {
        let t = this;
        const n = [];
        for(; t;)n.push(t.scopeName), t = t.parent;
        return n.reverse(), n;
    }
    toString() {
        return this.getSegments().join(" ");
    }
    extends(t) {
        return this === t ? !0 : this.parent === null ? !1 : this.parent.extends(t);
    }
    getExtensionIfDefined(t) {
        const n = [];
        let i = this;
        for(; i && i !== t;)n.push(i.scopeName), i = i.parent;
        return i === t ? n.reverse() : void 0;
    }
}, Rys = class {
    constructor(e, t, n){
        this.fontStyle = e, this.foregroundId = t, this.backgroundId = n;
    }
}, gTl = class {
    constructor(e, t, n, i, r, s){
        this.scope = e, this.parentScopes = t, this.index = n, this.fontStyle = i, this.foreground = r, this.background = s;
    }
}, yj = ((e)=>(e[e.NotSet = -1] = "NotSet", e[e.None = 0] = "None", e[e.Italic = 1] = "Italic", e[e.Bold = 2] = "Bold", e[e.Underline = 4] = "Underline", e[e.Strikethrough = 8] = "Strikethrough", e))(yj || {}), fTl = class {
    constructor(e){
        if (rd(this, "_isFrozen"), rd(this, "_lastColorId"), rd(this, "_id2color"), rd(this, "_color2id"), this._lastColorId = 0, this._id2color = [], this._color2id = Object.create(null), Array.isArray(e)) {
            this._isFrozen = !0;
            for(let t = 0, n = e.length; t < n; t++)this._color2id[e[t]] = t, this._id2color[t] = e[t];
        } else this._isFrozen = !1;
    }
    getId(e) {
        if (e === null) return 0;
        e = e.toUpperCase();
        let t = this._color2id[e];
        if (t) return t;
        if (this._isFrozen) throw new Error(`Missing color in color map - ${e}`);
        return t = ++this._lastColorId, this._color2id[e] = t, this._id2color[t] = e, t;
    }
    getColorMap() {
        return this._id2color.slice(0);
    }
}, vTl = Object.freeze([]), eIi = class Lwm {
    constructor(t, n, i, r, s){
        rd(this, "scopeDepth"), rd(this, "parentScopes"), rd(this, "fontStyle"), rd(this, "foreground"), rd(this, "background"), this.scopeDepth = t, this.parentScopes = n || vTl, this.fontStyle = i, this.foreground = r, this.background = s;
    }
    clone() {
        return new Lwm(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
    }
    static cloneArr(t) {
        let n = [];
        for(let i = 0, r = t.length; i < r; i++)n[i] = t[i].clone();
        return n;
    }
    acceptOverwrite(t, n, i, r) {
        this.scopeDepth > t ? console.log("how did this happen?") : this.scopeDepth = t, n !== -1 && (this.fontStyle = n), i !== 0 && (this.foreground = i), r !== 0 && (this.background = r);
    }
}, _Tl = class cAa {
    constructor(t, n = [], i = {}){
        rd(this, "_rulesWithParentScopes"), this._mainRule = t, this._children = i, this._rulesWithParentScopes = n;
    }
    static _cmpBySpecificity(t, n) {
        if (t.scopeDepth !== n.scopeDepth) return n.scopeDepth - t.scopeDepth;
        let i = 0, r = 0;
        for(; t.parentScopes[i] === ">" && i++, n.parentScopes[r] === ">" && r++, !(i >= t.parentScopes.length || r >= n.parentScopes.length);){
            const s = n.parentScopes[r].length - t.parentScopes[i].length;
            if (s !== 0) return s;
            i++, r++;
        }
        return n.parentScopes.length - t.parentScopes.length;
    }
    match(t) {
        if (t !== "") {
            let i = t.indexOf("."), r, s;
            if (i === -1 ? (r = t, s = "") : (r = t.substring(0, i), s = t.substring(i + 1)), this._children.hasOwnProperty(r)) return this._children[r].match(s);
        }
        const n = this._rulesWithParentScopes.concat(this._mainRule);
        return n.sort(cAa._cmpBySpecificity), n;
    }
    insert(t, n, i, r, s, o) {
        if (n === "") {
            this._doInsertHere(t, i, r, s, o);
            return;
        }
        let a = n.indexOf("."), c, l;
        a === -1 ? (c = n, l = "") : (c = n.substring(0, a), l = n.substring(a + 1));
        let u;
        this._children.hasOwnProperty(c) ? u = this._children[c] : (u = new cAa(this._mainRule.clone(), eIi.cloneArr(this._rulesWithParentScopes)), this._children[c] = u), u.insert(t + 1, l, i, r, s, o);
    }
    _doInsertHere(t, n, i, r, s) {
        if (n === null) {
            this._mainRule.acceptOverwrite(t, i, r, s);
            return;
        }
        for(let o = 0, a = this._rulesWithParentScopes.length; o < a; o++){
            let c = this._rulesWithParentScopes[o];
            if (nTl(c.parentScopes, n) === 0) {
                c.acceptOverwrite(t, i, r, s);
                return;
            }
        }
        i === -1 && (i = this._mainRule.fontStyle), r === 0 && (r = this._mainRule.foreground), s === 0 && (s = this._mainRule.background), this._rulesWithParentScopes.push(new eIi(t, n, i, r, s));
    }
}, Bft = class Uye {
    static toBinaryStr(t) {
        return t.toString(2).padStart(32, "0");
    }
    static print(t) {
        const n = Uye.getLanguageId(t), i = Uye.getTokenType(t), r = Uye.getFontStyle(t), s = Uye.getForeground(t), o = Uye.getBackground(t);
        console.log({
            languageId: n,
            tokenType: i,
            fontStyle: r,
            foreground: s,
            background: o
        });
    }
    static getLanguageId(t) {
        return (t & 255) >>> 0;
    }
    static getTokenType(t) {
        return (t & 768) >>> 8;
    }
    static containsBalancedBrackets(t) {
        return (t & 1024) !== 0;
    }
    static getFontStyle(t) {
        return (t & 30720) >>> 11;
    }
    static getForeground(t) {
        return (t & 16744448) >>> 15;
    }
    static getBackground(t) {
        return (t & 4278190080) >>> 24;
    }
    static set(t, n, i, r, s, o, a) {
        let c = Uye.getLanguageId(t), l = Uye.getTokenType(t), u = Uye.containsBalancedBrackets(t) ? 1 : 0, h = Uye.getFontStyle(t), p = Uye.getForeground(t), g = Uye.getBackground(t);
        return n !== 0 && (c = n), i !== 8 && (l = i), r !== null && (u = r ? 1 : 0), s !== -1 && (h = s), o !== 0 && (p = o), a !== 0 && (g = a), (c << 0 | l << 8 | u << 10 | h << 11 | p << 15 | g << 24) >>> 0;
    }
}, h9t = class {
    constructor(e){
        this.scopeName = e;
    }
    toKey() {
        return this.scopeName;
    }
}, bTl = class {
    constructor(e, t){
        this.scopeName = e, this.ruleName = t;
    }
    toKey() {
        return `${this.scopeName}#${this.ruleName}`;
    }
}, yTl = class {
    constructor(){
        rd(this, "_references", []), rd(this, "_seenReferenceKeys", new Set), rd(this, "visitedRule", new Set);
    }
    get references() {
        return this._references;
    }
    add(e) {
        const t = e.toKey();
        this._seenReferenceKeys.has(t) || (this._seenReferenceKeys.add(t), this._references.push(e));
    }
}, STl = class {
    constructor(e, t){
        rd(this, "seenFullScopeRequests", new Set), rd(this, "seenPartialScopeRequests", new Set), rd(this, "Q"), this.repo = e, this.initialScopeName = t, this.seenFullScopeRequests.add(this.initialScopeName), this.Q = [
            new h9t(this.initialScopeName)
        ];
    }
    processQueue() {
        const e = this.Q;
        this.Q = [];
        const t = new yTl;
        for (const n of e)EVg(n, this.initialScopeName, this.repo, t);
        for (const n of t.references)if (n instanceof h9t) {
            if (this.seenFullScopeRequests.has(n.scopeName)) continue;
            this.seenFullScopeRequests.add(n.scopeName), this.Q.push(n);
        } else {
            if (this.seenFullScopeRequests.has(n.scopeName) || this.seenPartialScopeRequests.has(n.toKey())) continue;
            this.seenPartialScopeRequests.add(n.toKey()), this.Q.push(n);
        }
    }
}, kTl = class {
    constructor(){
        rd(this, "kind", 0);
    }
}, wTl = class {
    constructor(){
        rd(this, "kind", 1);
    }
}, CTl = class {
    constructor(e){
        rd(this, "kind", 2), this.ruleName = e;
    }
}, TTl = class {
    constructor(e){
        rd(this, "kind", 3), this.scopeName = e;
    }
}, ETl = class {
    constructor(e, t){
        rd(this, "kind", 4), this.scopeName = e, this.ruleName = t;
    }
}, xTl = /\\(\d+)/, Dys = /\\(\d+)/g, LVg = Symbol("RuleId"), ITl = -1, Mys = -2, p9t = class {
    constructor(e, t, n, i){
        rd(this, "$location"), rd(this, "id"), rd(this, "_nameIsCapturing"), rd(this, "_name"), rd(this, "_contentNameIsCapturing"), rd(this, "_contentName"), this.$location = e, this.id = t, this._name = n || null, this._nameIsCapturing = Zwn.hasCaptures(this._name), this._contentName = i || null, this._contentNameIsCapturing = Zwn.hasCaptures(this._contentName);
    }
    get debugName() {
        const e = this.$location ? `${eTl(this.$location.filename)}:${this.$location.line}` : "unknown";
        return `${this.constructor.name}#${this.id} @ ${e}`;
    }
    getName(e, t) {
        return !this._nameIsCapturing || this._name === null || e === null || t === null ? this._name : Zwn.replaceCaptures(this._name, e, t);
    }
    getContentName(e, t) {
        return !this._contentNameIsCapturing || this._contentName === null ? this._contentName : Zwn.replaceCaptures(this._contentName, e, t);
    }
}, ATl = class extends p9t {
    constructor(e, t, n, i, r){
        super(e, t, n, i), rd(this, "retokenizeCapturedWithRuleId"), this.retokenizeCapturedWithRuleId = r;
    }
    dispose() {}
    collectPatterns(e, t) {
        throw new Error("Not supported!");
    }
    compile(e, t) {
        throw new Error("Not supported!");
    }
    compileAG(e, t, n, i) {
        throw new Error("Not supported!");
    }
}, RTl = class extends p9t {
    constructor(e, t, n, i, r){
        super(e, t, n, null), rd(this, "_match"), rd(this, "captures"), rd(this, "_cachedCompiledPatterns"), this._match = new m9t(i, this.id), this.captures = r, this._cachedCompiledPatterns = null;
    }
    dispose() {
        this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
    }
    get debugMatchRegExp() {
        return `${this._match.source}`;
    }
    collectPatterns(e, t) {
        t.push(this._match);
    }
    compile(e, t) {
        return this._getCachedCompiledPatterns(e).compile(e);
    }
    compileAG(e, t, n, i) {
        return this._getCachedCompiledPatterns(e).compileAG(e, n, i);
    }
    _getCachedCompiledPatterns(e) {
        return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new g9t, this.collectPatterns(e, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
    }
}, Pys = class extends p9t {
    constructor(e, t, n, i, r){
        super(e, t, n, i), rd(this, "hasMissingPatterns"), rd(this, "patterns"), rd(this, "_cachedCompiledPatterns"), this.patterns = r.patterns, this.hasMissingPatterns = r.hasMissingPatterns, this._cachedCompiledPatterns = null;
    }
    dispose() {
        this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
    }
    collectPatterns(e, t) {
        for (const n of this.patterns)e.getRule(n).collectPatterns(e, t);
    }
    compile(e, t) {
        return this._getCachedCompiledPatterns(e).compile(e);
    }
    compileAG(e, t, n, i) {
        return this._getCachedCompiledPatterns(e).compileAG(e, n, i);
    }
    _getCachedCompiledPatterns(e) {
        return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new g9t, this.collectPatterns(e, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
    }
}, tIi = class extends p9t {
    constructor(e, t, n, i, r, s, o, a, c, l){
        super(e, t, n, i), rd(this, "_begin"), rd(this, "beginCaptures"), rd(this, "_end"), rd(this, "endHasBackReferences"), rd(this, "endCaptures"), rd(this, "applyEndPatternLast"), rd(this, "hasMissingPatterns"), rd(this, "patterns"), rd(this, "_cachedCompiledPatterns"), this._begin = new m9t(r, this.id), this.beginCaptures = s, this._end = new m9t(o || "\uFFFF", -1), this.endHasBackReferences = this._end.hasBackReferences, this.endCaptures = a, this.applyEndPatternLast = c || !1, this.patterns = l.patterns, this.hasMissingPatterns = l.hasMissingPatterns, this._cachedCompiledPatterns = null;
    }
    dispose() {
        this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
    }
    get debugBeginRegExp() {
        return `${this._begin.source}`;
    }
    get debugEndRegExp() {
        return `${this._end.source}`;
    }
    getEndWithResolvedBackReferences(e, t) {
        return this._end.resolveBackReferences(e, t);
    }
    collectPatterns(e, t) {
        t.push(this._begin);
    }
    compile(e, t) {
        return this._getCachedCompiledPatterns(e, t).compile(e);
    }
    compileAG(e, t, n, i) {
        return this._getCachedCompiledPatterns(e, t).compileAG(e, n, i);
    }
    _getCachedCompiledPatterns(e, t) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new g9t;
            for (const n of this.patterns)e.getRule(n).collectPatterns(e, this._cachedCompiledPatterns);
            this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
        }
        return this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, t) : this._cachedCompiledPatterns.setSource(0, t)), this._cachedCompiledPatterns;
    }
}, Jwn = class extends p9t {
    constructor(e, t, n, i, r, s, o, a, c){
        super(e, t, n, i), rd(this, "_begin"), rd(this, "beginCaptures"), rd(this, "whileCaptures"), rd(this, "_while"), rd(this, "whileHasBackReferences"), rd(this, "hasMissingPatterns"), rd(this, "patterns"), rd(this, "_cachedCompiledPatterns"), rd(this, "_cachedCompiledWhilePatterns"), this._begin = new m9t(r, this.id), this.beginCaptures = s, this.whileCaptures = a, this._while = new m9t(o, Mys), this.whileHasBackReferences = this._while.hasBackReferences, this.patterns = c.patterns, this.hasMissingPatterns = c.hasMissingPatterns, this._cachedCompiledPatterns = null, this._cachedCompiledWhilePatterns = null;
    }
    dispose() {
        this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null), this._cachedCompiledWhilePatterns && (this._cachedCompiledWhilePatterns.dispose(), this._cachedCompiledWhilePatterns = null);
    }
    get debugBeginRegExp() {
        return `${this._begin.source}`;
    }
    get debugWhileRegExp() {
        return `${this._while.source}`;
    }
    getWhileWithResolvedBackReferences(e, t) {
        return this._while.resolveBackReferences(e, t);
    }
    collectPatterns(e, t) {
        t.push(this._begin);
    }
    compile(e, t) {
        return this._getCachedCompiledPatterns(e).compile(e);
    }
    compileAG(e, t, n, i) {
        return this._getCachedCompiledPatterns(e).compileAG(e, n, i);
    }
    _getCachedCompiledPatterns(e) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new g9t;
            for (const t of this.patterns)e.getRule(t).collectPatterns(e, this._cachedCompiledPatterns);
        }
        return this._cachedCompiledPatterns;
    }
    compileWhile(e, t) {
        return this._getCachedCompiledWhilePatterns(e, t).compile(e);
    }
    compileWhileAG(e, t, n, i) {
        return this._getCachedCompiledWhilePatterns(e, t).compileAG(e, n, i);
    }
    _getCachedCompiledWhilePatterns(e, t) {
        return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new g9t, this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, t || "\uFFFF"), this._cachedCompiledWhilePatterns;
    }
}, Lys = class sQ {
    static createCaptureRule(t, n, i, r, s) {
        return t.registerRule((o)=>new ATl(n, o, i, r, s));
    }
    static getCompiledRuleId(t, n, i) {
        return t.id || n.registerRule((r)=>{
            if (t.id = r, t.match) return new RTl(t.$vscodeTextmateLocation, t.id, t.name, t.match, sQ._compileCaptures(t.captures, n, i));
            if (typeof t.begin > "u") {
                t.repository && (i = J1l({}, i, t.repository));
                let s = t.patterns;
                return typeof s > "u" && t.include && (s = [
                    {
                        include: t.include
                    }
                ]), new Pys(t.$vscodeTextmateLocation, t.id, t.name, t.contentName, sQ._compilePatterns(s, n, i));
            }
            return t.while ? new Jwn(t.$vscodeTextmateLocation, t.id, t.name, t.contentName, t.begin, sQ._compileCaptures(t.beginCaptures || t.captures, n, i), t.while, sQ._compileCaptures(t.whileCaptures || t.captures, n, i), sQ._compilePatterns(t.patterns, n, i)) : new tIi(t.$vscodeTextmateLocation, t.id, t.name, t.contentName, t.begin, sQ._compileCaptures(t.beginCaptures || t.captures, n, i), t.end, sQ._compileCaptures(t.endCaptures || t.captures, n, i), t.applyEndPatternLast, sQ._compilePatterns(t.patterns, n, i));
        }), t.id;
    }
    static _compileCaptures(t, n, i) {
        let r = [];
        if (t) {
            let s = 0;
            for(const o in t){
                if (o === "$vscodeTextmateLocation") continue;
                const a = parseInt(o, 10);
                a > s && (s = a);
            }
            for(let o = 0; o <= s; o++)r[o] = null;
            for(const o in t){
                if (o === "$vscodeTextmateLocation") continue;
                const a = parseInt(o, 10);
                let c = 0;
                t[o].patterns && (c = sQ.getCompiledRuleId(t[o], n, i)), r[a] = sQ.createCaptureRule(n, t[o].$vscodeTextmateLocation, t[o].name, t[o].contentName, c);
            }
        }
        return r;
    }
    static _compilePatterns(t, n, i) {
        let r = [];
        if (t) for(let s = 0, o = t.length; s < o; s++){
            const a = t[s];
            let c = -1;
            if (a.include) {
                const l = aTl(a.include);
                switch(l.kind){
                    case 0:
                    case 1:
                        c = sQ.getCompiledRuleId(i[a.include], n, i);
                        break;
                    case 2:
                        let u = i[l.ruleName];
                        u && (c = sQ.getCompiledRuleId(u, n, i));
                        break;
                    case 3:
                    case 4:
                        const h = l.scopeName, p = l.kind === 4 ? l.ruleName : null, g = n.getExternalGrammar(h, i);
                        if (g) if (p) {
                            let f = g.repository[p];
                            f && (c = sQ.getCompiledRuleId(f, n, g.repository));
                        } else c = sQ.getCompiledRuleId(g.repository.$self, n, g.repository);
                        break;
                }
            } else c = sQ.getCompiledRuleId(a, n, i);
            if (c !== -1) {
                const l = n.getRule(c);
                let u = !1;
                if ((l instanceof Pys || l instanceof tIi || l instanceof Jwn) && l.hasMissingPatterns && l.patterns.length === 0 && (u = !0), u) continue;
                r.push(c);
            }
        }
        return {
            patterns: r,
            hasMissingPatterns: (t ? t.length : 0) !== r.length
        };
    }
}, m9t = class Nwm {
    constructor(t, n){
        if (rd(this, "source"), rd(this, "ruleId"), rd(this, "hasAnchor"), rd(this, "hasBackReferences"), rd(this, "_anchorCache"), t && typeof t == "string") {
            const i = t.length;
            let r = 0, s = [], o = !1;
            for(let a = 0; a < i; a++)if (t.charAt(a) === "\\" && a + 1 < i) {
                const l = t.charAt(a + 1);
                l === "z" ? (s.push(t.substring(r, a)), s.push("$(?!\\n)(?<!\\n)"), r = a + 2) : (l === "A" || l === "G") && (o = !0), a++;
            }
            this.hasAnchor = o, r === 0 ? this.source = t : (s.push(t.substring(r, i)), this.source = s.join(""));
        } else this.hasAnchor = !1, this.source = t;
        this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = n, typeof this.source == "string" ? this.hasBackReferences = xTl.test(this.source) : this.hasBackReferences = !1;
    }
    clone() {
        return new Nwm(this.source, this.ruleId);
    }
    setSource(t) {
        this.source !== t && (this.source = t, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
    }
    resolveBackReferences(t, n) {
        if (typeof this.source != "string") throw new Error("This method should only be called if the source is a string");
        let i = n.map((r)=>t.substring(r.start, r.end));
        return Dys.lastIndex = 0, this.source.replace(Dys, (r, s)=>rTl(i[parseInt(s, 10)] || ""));
    }
    _buildAnchorCache() {
        if (typeof this.source != "string") throw new Error("This method should only be called if the source is a string");
        let t = [], n = [], i = [], r = [], s, o, a, c;
        for(s = 0, o = this.source.length; s < o; s++)a = this.source.charAt(s), t[s] = a, n[s] = a, i[s] = a, r[s] = a, a === "\\" && s + 1 < o && (c = this.source.charAt(s + 1), c === "A" ? (t[s + 1] = "\uFFFF", n[s + 1] = "\uFFFF", i[s + 1] = "A", r[s + 1] = "A") : c === "G" ? (t[s + 1] = "\uFFFF", n[s + 1] = "G", i[s + 1] = "\uFFFF", r[s + 1] = "G") : (t[s + 1] = c, n[s + 1] = c, i[s + 1] = c, r[s + 1] = c), s++);
        return {
            A0_G0: t.join(""),
            A0_G1: n.join(""),
            A1_G0: i.join(""),
            A1_G1: r.join("")
        };
    }
    resolveAnchors(t, n) {
        return !this.hasAnchor || !this._anchorCache || typeof this.source != "string" ? this.source : t ? n ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : n ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0;
    }
}, g9t = class {
    constructor(){
        rd(this, "_items"), rd(this, "_hasAnchors"), rd(this, "_cached"), rd(this, "_anchorCache"), this._items = [], this._hasAnchors = !1, this._cached = null, this._anchorCache = {
            A0_G0: null,
            A0_G1: null,
            A1_G0: null,
            A1_G1: null
        };
    }
    dispose() {
        this._disposeCaches();
    }
    _disposeCaches() {
        this._cached && (this._cached.dispose(), this._cached = null), this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(), this._anchorCache.A0_G0 = null), this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(), this._anchorCache.A0_G1 = null), this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(), this._anchorCache.A1_G0 = null), this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(), this._anchorCache.A1_G1 = null);
    }
    push(e) {
        this._items.push(e), this._hasAnchors = this._hasAnchors || e.hasAnchor;
    }
    unshift(e) {
        this._items.unshift(e), this._hasAnchors = this._hasAnchors || e.hasAnchor;
    }
    length() {
        return this._items.length;
    }
    setSource(e, t) {
        this._items[e].source !== t && (this._disposeCaches(), this._items[e].setSource(t));
    }
    compile(e) {
        if (!this._cached) {
            let t = this._items.map((n)=>n.source);
            this._cached = new Nys(e, t, this._items.map((n)=>n.ruleId));
        }
        return this._cached;
    }
    compileAG(e, t, n) {
        return this._hasAnchors ? t ? n ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(e, t, n)), this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(e, t, n)), this._anchorCache.A1_G0) : n ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(e, t, n)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(e, t, n)), this._anchorCache.A0_G0) : this.compile(e);
    }
    _resolveAnchors(e, t, n) {
        let i = this._items.map((r)=>r.resolveAnchors(t, n));
        return new Nys(e, i, this._items.map((r)=>r.ruleId));
    }
}, Nys = class {
    constructor(e, t, n){
        rd(this, "scanner"), this.regExps = t, this.rules = n, this.scanner = e.createOnigScanner(t);
    }
    dispose() {
        typeof this.scanner.dispose == "function" && this.scanner.dispose();
    }
    toString() {
        const e = [];
        for(let t = 0, n = this.rules.length; t < n; t++)e.push("   - " + this.rules[t] + ": " + this.regExps[t]);
        return e.join(`
`);
    }
    findNextMatchSync(e, t, n) {
        const i = this.scanner.findNextMatchSync(e, t, n);
        return i ? {
            ruleId: this.rules[i.index],
            captureIndices: i.captureIndices
        } : null;
    }
}, nIi = class {
    constructor(e, t){
        this.languageId = e, this.tokenType = t;
    }
}, DTl = (d9t = class {
    constructor(e, t){
        rd(this, "_defaultAttributes"), rd(this, "_embeddedLanguagesMatcher"), rd(this, "_getBasicScopeAttributes", new Ays((n)=>{
            const i = this._scopeToLanguage(n), r = this._toStandardTokenType(n);
            return new nIi(i, r);
        })), this._defaultAttributes = new nIi(e, 8), this._embeddedLanguagesMatcher = new MTl(Object.entries(t || {}));
    }
    getDefaultAttributes() {
        return this._defaultAttributes;
    }
    getBasicScopeAttributes(e) {
        return e === null ? d9t._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(e);
    }
    _scopeToLanguage(e) {
        return this._embeddedLanguagesMatcher.match(e) || 0;
    }
    _toStandardTokenType(e) {
        const t = e.match(d9t.STANDARD_TOKEN_TYPE_REGEXP);
        if (!t) return 8;
        switch(t[1]){
            case "comment":
                return 1;
            case "string":
                return 2;
            case "regex":
                return 3;
            case "meta.embedded":
                return 0;
        }
        throw new Error("Unexpected match for standard token type!");
    }
}, rd(d9t, "_NULL_SCOPE_METADATA", new nIi(0, 0)), rd(d9t, "STANDARD_TOKEN_TYPE_REGEXP", /\b(comment|string|regex|meta\.embedded)\b/), d9t), MTl = class {
    constructor(e){
        if (rd(this, "values"), rd(this, "scopesRegExp"), e.length === 0) this.values = null, this.scopesRegExp = null;
        else {
            this.values = new Map(e);
            const t = e.map(([n, i])=>rTl(n));
            t.sort(), t.reverse(), this.scopesRegExp = new RegExp(`^((${t.join(")|(")}))($|\\.)`, "");
        }
    }
    match(e) {
        if (!this.scopesRegExp) return;
        const t = e.match(this.scopesRegExp);
        if (t) return this.values.get(t[1]);
    }
}, NVg = {
    InDebugMode: typeof process < "u" && !!process.env.VSCODE_TEXTMATE_DEBUG
}, Oys = !1, Fys = class {
    constructor(e, t){
        this.stack = e, this.stoppedEarly = t;
    }
}, PTl = class {
    constructor(e, t){
        rd(this, "scopes"), rd(this, "endPos"), this.scopes = e, this.endPos = t;
    }
}, LTl = class {
    constructor(e, t, n, i, r, s, o, a){
        if (rd(this, "_rootId"), rd(this, "_lastRuleId"), rd(this, "_ruleId2desc"), rd(this, "_includedGrammars"), rd(this, "_grammarRepository"), rd(this, "_grammar"), rd(this, "_injections"), rd(this, "_basicScopeAttributesProvider"), rd(this, "_tokenTypeMatchers"), this._rootScopeName = e, this.balancedBracketSelectors = s, this._onigLib = a, this._basicScopeAttributesProvider = new DTl(n, i), this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [
            null
        ], this._includedGrammars = {}, this._grammarRepository = o, this._grammar = hTl(t, null), this._injections = null, this._tokenTypeMatchers = [], r) for (const c of Object.keys(r)){
            const l = Kxi(c, Zxi);
            for (const u of l)this._tokenTypeMatchers.push({
                matcher: u.matcher,
                type: r[c]
            });
        }
    }
    get themeProvider() {
        return this._grammarRepository;
    }
    dispose() {
        for (const e of this._ruleId2desc)e && e.dispose();
    }
    createOnigScanner(e) {
        return this._onigLib.createOnigScanner(e);
    }
    createOnigString(e) {
        return this._onigLib.createOnigString(e);
    }
    getMetadataForScope(e) {
        return this._basicScopeAttributesProvider.getBasicScopeAttributes(e);
    }
    _collectInjections() {
        const e = {
            lookup: (r)=>r === this._rootScopeName ? this._grammar : this.getExternalGrammar(r),
            injections: (r)=>this._grammarRepository.injections(r)
        }, t = [], n = this._rootScopeName, i = e.lookup(n);
        if (i) {
            const r = i.injections;
            if (r) for(let o in r)dTl(t, o, r[o], this, i);
            const s = this._grammarRepository.injections(n);
            s && s.forEach((o)=>{
                const a = this.getExternalGrammar(o);
                if (a) {
                    const c = a.injectionSelector;
                    c && dTl(t, c, a, this, a);
                }
            });
        }
        return t.sort((r, s)=>r.priority - s.priority), t;
    }
    getInjections() {
        return this._injections === null && (this._injections = this._collectInjections()), this._injections;
    }
    registerRule(e) {
        const t = ++this._lastRuleId, n = e(t);
        return this._ruleId2desc[t] = n, n;
    }
    getRule(e) {
        return this._ruleId2desc[e];
    }
    getExternalGrammar(e, t) {
        if (this._includedGrammars[e]) return this._includedGrammars[e];
        if (this._grammarRepository) {
            const n = this._grammarRepository.lookup(e);
            if (n) return this._includedGrammars[e] = hTl(n, t && t.$base), this._includedGrammars[e];
        }
    }
    tokenizeLine(e, t, n = 0) {
        const i = this._tokenize(e, t, !1, n);
        return {
            tokens: i.lineTokens.getResult(i.ruleStack, i.lineLength),
            ruleStack: i.ruleStack,
            stoppedEarly: i.stoppedEarly
        };
    }
    tokenizeLine2(e, t, n = 0) {
        const i = this._tokenize(e, t, !0, n);
        return {
            tokens: i.lineTokens.getBinaryResult(i.ruleStack, i.lineLength),
            ruleStack: i.ruleStack,
            stoppedEarly: i.stoppedEarly
        };
    }
    _tokenize(e, t, n, i) {
        this._rootId === -1 && (this._rootId = Lys.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository), this.getInjections());
        let r;
        if (!t || t === iIi.NULL) {
            r = !0;
            const l = this._basicScopeAttributesProvider.getDefaultAttributes(), u = this.themeProvider.getDefaults(), h = Bft.set(0, l.languageId, l.tokenType, null, u.fontStyle, u.foregroundId, u.backgroundId), p = this.getRule(this._rootId).getName(null, null);
            let g;
            p ? g = f9t.createRootAndLookUpScopeName(p, h, this) : g = f9t.createRoot("unknown", h), t = new iIi(null, this._rootId, -1, -1, !1, null, g, g);
        } else r = !1, t.reset();
        e = e + `
`;
        const s = this.createOnigString(e), o = s.content.length, a = new OTl(n, e, this._tokenTypeMatchers, this.balancedBracketSelectors), c = cTl(this, s, r, 0, t, a, !0, i);
        return oTl(s), {
            lineLength: o,
            lineTokens: a,
            ruleStack: c.stack,
            stoppedEarly: c.stoppedEarly
        };
    }
}, f9t = class vOe {
    constructor(t, n, i){
        this.parent = t, this.scopePath = n, this.tokenAttributes = i;
    }
    static fromExtension(t, n) {
        let i = t, r = t?.scopePath ?? null;
        for (const s of n)r = Jxi.push(r, s.scopeNames), i = new vOe(i, r, s.encodedTokenAttributes);
        return i;
    }
    static createRoot(t, n) {
        return new vOe(null, new Jxi(null, t), n);
    }
    static createRootAndLookUpScopeName(t, n, i) {
        const r = i.getMetadataForScope(t), s = new Jxi(null, t), o = i.themeProvider.themeMatch(s), a = vOe.mergeAttributes(n, r, o);
        return new vOe(null, s, a);
    }
    get scopeName() {
        return this.scopePath.scopeName;
    }
    toString() {
        return this.getScopeNames().join(" ");
    }
    equals(t) {
        return vOe.equals(this, t);
    }
    static equals(t, n) {
        do {
            if (t === n || !t && !n) return !0;
            if (!t || !n || t.scopeName !== n.scopeName || t.tokenAttributes !== n.tokenAttributes) return !1;
            t = t.parent, n = n.parent;
        }while (!0)
    }
    static mergeAttributes(t, n, i) {
        let r = -1, s = 0, o = 0;
        return i !== null && (r = i.fontStyle, s = i.foregroundId, o = i.backgroundId), Bft.set(t, n.languageId, n.tokenType, null, r, s, o);
    }
    pushAttributed(t, n) {
        if (t === null) return this;
        if (t.indexOf(" ") === -1) return vOe._pushAttributed(this, t, n);
        const i = t.split(/ /g);
        let r = this;
        for (const s of i)r = vOe._pushAttributed(r, s, n);
        return r;
    }
    static _pushAttributed(t, n, i) {
        const r = i.getMetadataForScope(n), s = t.scopePath.push(n), o = i.themeProvider.themeMatch(s), a = vOe.mergeAttributes(t.tokenAttributes, r, o);
        return new vOe(t, s, a);
    }
    getScopeNames() {
        return this.scopePath.getSegments();
    }
    getExtensionIfDefined(t) {
        const n = [];
        let i = this;
        for(; i && i !== t;)n.push({
            encodedTokenAttributes: i.tokenAttributes,
            scopeNames: i.scopePath.getExtensionIfDefined(i.parent?.scopePath ?? null)
        }), i = i.parent;
        return i === t ? n.reverse() : void 0;
    }
}, iIi = (b9e = class {
    constructor(e, t, n, i, r, s, o, a){
        rd(this, "_stackElementBrand"), rd(this, "_enterPos"), rd(this, "_anchorPos"), rd(this, "depth"), this.parent = e, this.ruleId = t, this.beginRuleCapturedEOL = r, this.endRule = s, this.nameScopesList = o, this.contentNameScopesList = a, this.depth = this.parent ? this.parent.depth + 1 : 1, this._enterPos = n, this._anchorPos = i;
    }
    equals(e) {
        return e === null ? !1 : b9e._equals(this, e);
    }
    static _equals(e, t) {
        return e === t ? !0 : this._structuralEquals(e, t) ? f9t.equals(e.contentNameScopesList, t.contentNameScopesList) : !1;
    }
    static _structuralEquals(e, t) {
        do {
            if (e === t || !e && !t) return !0;
            if (!e || !t || e.depth !== t.depth || e.ruleId !== t.ruleId || e.endRule !== t.endRule) return !1;
            e = e.parent, t = t.parent;
        }while (!0)
    }
    clone() {
        return this;
    }
    static _reset(e) {
        for(; e;)e._enterPos = -1, e._anchorPos = -1, e = e.parent;
    }
    reset() {
        b9e._reset(this);
    }
    pop() {
        return this.parent;
    }
    safePop() {
        return this.parent ? this.parent : this;
    }
    push(e, t, n, i, r, s, o) {
        return new b9e(this, e, t, n, i, r, s, o);
    }
    getEnterPos() {
        return this._enterPos;
    }
    getAnchorPos() {
        return this._anchorPos;
    }
    getRule(e) {
        return e.getRule(this.ruleId);
    }
    toString() {
        const e = [];
        return this._writeString(e, 0), "[" + e.join(",") + "]";
    }
    _writeString(e, t) {
        return this.parent && (t = this.parent._writeString(e, t)), e[t++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`, t;
    }
    withContentNameScopesList(e) {
        return this.contentNameScopesList === e ? this : this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, e);
    }
    withEndRule(e) {
        return this.endRule === e ? this : new b9e(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, e, this.nameScopesList, this.contentNameScopesList);
    }
    hasSameRuleAs(e) {
        let t = this;
        for(; t && t._enterPos === e._enterPos;){
            if (t.ruleId === e.ruleId) return !0;
            t = t.parent;
        }
        return !1;
    }
    toStateStackFrame() {
        return {
            ruleId: this.ruleId,
            beginRuleCapturedEOL: this.beginRuleCapturedEOL,
            endRule: this.endRule,
            nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [],
            contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? []
        };
    }
    static pushFrame(e, t) {
        const n = f9t.fromExtension(e?.nameScopesList ?? null, t.nameScopesList);
        return new b9e(e, t.ruleId, t.enterPos ?? -1, t.anchorPos ?? -1, t.beginRuleCapturedEOL, t.endRule, n, f9t.fromExtension(n, t.contentNameScopesList));
    }
}, rd(b9e, "NULL", new b9e(null, 0, 0, 0, !1, null, null, null)), b9e), NTl = class {
    constructor(e, t){
        rd(this, "balancedBracketScopes"), rd(this, "unbalancedBracketScopes"), rd(this, "allowAny", !1), this.balancedBracketScopes = e.flatMap((n)=>n === "*" ? (this.allowAny = !0, []) : Kxi(n, Zxi).map((i)=>i.matcher)), this.unbalancedBracketScopes = t.flatMap((n)=>Kxi(n, Zxi).map((i)=>i.matcher));
    }
    get matchesAlways() {
        return this.allowAny && this.unbalancedBracketScopes.length === 0;
    }
    get matchesNever() {
        return this.balancedBracketScopes.length === 0 && !this.allowAny;
    }
    match(e) {
        for (const t of this.unbalancedBracketScopes)if (t(e)) return !1;
        for (const t of this.balancedBracketScopes)if (t(e)) return !0;
        return this.allowAny;
    }
}, OTl = class {
    constructor(e, t, n, i){
        rd(this, "_emitBinaryTokens"), rd(this, "_lineText"), rd(this, "_tokens"), rd(this, "_binaryTokens"), rd(this, "_lastTokenEndIndex"), rd(this, "_tokenTypeOverrides"), this.balancedBracketSelectors = i, this._emitBinaryTokens = e, this._tokenTypeOverrides = n, this._lineText = null, this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0;
    }
    produce(e, t) {
        this.produceFromScopes(e.contentNameScopesList, t);
    }
    produceFromScopes(e, t) {
        if (this._lastTokenEndIndex >= t) return;
        if (this._emitBinaryTokens) {
            let i = e?.tokenAttributes ?? 0, r = !1;
            if (this.balancedBracketSelectors?.matchesAlways && (r = !0), this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
                const s = e?.getScopeNames() ?? [];
                for (const o of this._tokenTypeOverrides)o.matcher(s) && (i = Bft.set(i, 0, o.type, null, -1, 0, 0));
                this.balancedBracketSelectors && (r = this.balancedBracketSelectors.match(s));
            }
            if (r && (i = Bft.set(i, 0, 8, r, -1, 0, 0)), this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === i) {
                this._lastTokenEndIndex = t;
                return;
            }
            this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(i), this._lastTokenEndIndex = t;
            return;
        }
        const n = e?.getScopeNames() ?? [];
        this._tokens.push({
            startIndex: this._lastTokenEndIndex,
            endIndex: t,
            scopes: n
        }), this._lastTokenEndIndex = t;
    }
    getResult(e, t) {
        return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === t - 1 && this._tokens.pop(), this._tokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(e, t), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens;
    }
    getBinaryResult(e, t) {
        this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === t - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), this._binaryTokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(e, t), this._binaryTokens[this._binaryTokens.length - 2] = 0);
        const n = new Uint32Array(this._binaryTokens.length);
        for(let i = 0, r = this._binaryTokens.length; i < r; i++)n[i] = this._binaryTokens[i];
        return n;
    }
}, FTl = class {
    constructor(e, t){
        rd(this, "_grammars", new Map), rd(this, "_rawGrammars", new Map), rd(this, "_injectionGrammars", new Map), rd(this, "_theme"), this._onigLib = t, this._theme = e;
    }
    dispose() {
        for (const e of this._grammars.values())e.dispose();
    }
    setTheme(e) {
        this._theme = e;
    }
    getColorMap() {
        return this._theme.getColorMap();
    }
    addGrammar(e, t) {
        this._rawGrammars.set(e.scopeName, e), t && this._injectionGrammars.set(e.scopeName, t);
    }
    lookup(e) {
        return this._rawGrammars.get(e);
    }
    injections(e) {
        return this._injectionGrammars.get(e);
    }
    getDefaults() {
        return this._theme.getDefaults();
    }
    themeMatch(e) {
        return this._theme.match(e);
    }
    grammarForScopeName(e, t, n, i, r) {
        if (!this._grammars.has(e)) {
            let s = this._rawGrammars.get(e);
            if (!s) return null;
            this._grammars.set(e, MVg(e, s, t, n, i, r, this, this._onigLib));
        }
        return this._grammars.get(e);
    }
}, BTl = class {
    constructor(t){
        rd(this, "_options"), rd(this, "_syncRegistry"), rd(this, "_ensureGrammarCache"), this._options = t, this._syncRegistry = new FTl(Qwn.createFromRawTheme(t.theme, t.colorMap), t.onigLib), this._ensureGrammarCache = new Map;
    }
    dispose() {
        this._syncRegistry.dispose();
    }
    setTheme(t, n) {
        this._syncRegistry.setTheme(Qwn.createFromRawTheme(t, n));
    }
    getColorMap() {
        return this._syncRegistry.getColorMap();
    }
    loadGrammarWithEmbeddedLanguages(t, n, i) {
        return this.loadGrammarWithConfiguration(t, n, {
            embeddedLanguages: i
        });
    }
    loadGrammarWithConfiguration(t, n, i) {
        return this._loadGrammar(t, n, i.embeddedLanguages, i.tokenTypes, new NTl(i.balancedBracketSelectors || [], i.unbalancedBracketSelectors || []));
    }
    loadGrammar(t) {
        return this._loadGrammar(t, 0, null, null, null);
    }
    _loadGrammar(t, n, i, r, s) {
        const o = new STl(this._syncRegistry, t);
        for(; o.Q.length > 0;)o.Q.map((a)=>this._loadSingleGrammar(a.scopeName)), o.processQueue();
        return this._grammarForScopeName(t, n, i, r, s);
    }
    _loadSingleGrammar(t) {
        this._ensureGrammarCache.has(t) || (this._doLoadSingleGrammar(t), this._ensureGrammarCache.set(t, !0));
    }
    _doLoadSingleGrammar(t) {
        const n = this._options.loadGrammar(t);
        if (n) {
            const i = typeof this._options.getInjections == "function" ? this._options.getInjections(t) : void 0;
            this._syncRegistry.addGrammar(n, i);
        }
    }
    addGrammar(t, n = [], i = 0, r = null) {
        return this._syncRegistry.addGrammar(t, n), this._grammarForScopeName(t.scopeName, i, r);
    }
    _grammarForScopeName(t, n = 0, i = null, r = null, s = null) {
        return this._syncRegistry.grammarForScopeName(t, n, i, r, s);
    }
}, rIi = iIi.NULL;

}
