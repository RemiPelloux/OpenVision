import { AIh, DIh, IIh, MIh, QrS, SIh, TIh, YrS, ZrS, c3r, esS, h3r, osS, wIh, xIh, yIh } from "./KTh.js";
import { E } from "./tslib.es6.js";
var NIh, LIh, jh, kyn, Ait, p3r, cdi, Zaa, udi, m3r, Qaa, OIh, Rne, FIh, BIh, g3r, UIh, nUt, wyn, jIh, $Ih, HIh, WIh, GIh, qIh, zIh, VIh, KIh, Jaa, lsS, YIh, ela, Cyn, XIh, ZIh, tla, f3r, ddi, nla, Tyn, Eyn, ila, v3r, QIh, JIh, csS, rla, sla, exh, txh, Iyn, _3r, nxh, ixh, rxh, sxh, b3r;
export { $Ih, Ait, BIh, Cyn, Eyn, FIh, GIh, HIh, Iyn, JIh, Jaa, KIh, LIh, NIh, OIh, QIh, Qaa, Rne, Tyn, UIh, VIh, WIh, XIh, YIh, ZIh, Zaa, _3r, b3r, cdi, csS, ddi, ela, exh, f3r, g3r, ila, ixh, jIh, jh, kyn, lsS, m3r, nUt, nla, nxh, p3r, qIh, rla, rxh, sla, sxh, tla, txh, udi, v3r, wyn, zIh };
var __wakaru_oxh_initialized = false;
export function oxh() {
if (__wakaru_oxh_initialized) return;
__wakaru_oxh_initialized = true;
E(), NIh = Object.defineProperty, LIh = (t, e, n)=>e in t ? NIh(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : t[e] = n, jh = (t, e, n)=>LIh(t, typeof e != "symbol" ? e + "" : e, n), p3r = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g, cdi = class {
    static hasCaptures(t) {
        return t === null ? !1 : (p3r.lastIndex = 0, p3r.test(t));
    }
    static replaceCaptures(t, e, n) {
        return t.replace(p3r, (i, r, s, o)=>{
            let a = n[parseInt(r || s, 10)];
            if (a) {
                let l = e.substring(a.start, a.end);
                for(; l[0] === ".";)l = l.substring(1);
                switch(o){
                    case "downcase":
                        return l.toLowerCase();
                    case "upcase":
                        return l.toUpperCase();
                    default:
                        return l;
                }
            } else return i;
        });
    }
}, Zaa = class {
    constructor(t){
        jh(this, "cache", new Map), this.fn = t;
    }
    get(t) {
        if (this.cache.has(t)) return this.cache.get(t);
        const e = this.fn(t);
        return this.cache.set(t, e), e;
    }
}, udi = class {
    constructor(t, e, n){
        jh(this, "_cachedMatchRoot", new Zaa((i)=>this._root.match(i))), this._colorMap = t, this._defaults = e, this._root = n;
    }
    static createFromRawTheme(t, e) {
        return this.createFromParsedTheme(ZrS(t), e);
    }
    static createFromParsedTheme(t, e) {
        return QrS(t, e);
    }
    getColorMap() {
        return this._colorMap.getColorMap();
    }
    getDefaults() {
        return this._defaults;
    }
    match(t) {
        if (t === null) return this._defaults;
        const e = t.scopeName, i = this._cachedMatchRoot.get(e).find((r)=>YrS(t.parent, r.parentScopes));
        return i ? new Qaa(i.fontStyle, i.foreground, i.background) : null;
    }
}, m3r = class vXs {
    constructor(e, n){
        this.parent = e, this.scopeName = n;
    }
    static push(e, n) {
        for (const i of n)e = new vXs(e, i);
        return e;
    }
    static from(...e) {
        let n = null;
        for(let i = 0; i < e.length; i++)n = new vXs(n, e[i]);
        return n;
    }
    push(e) {
        return new vXs(this, e);
    }
    getSegments() {
        let e = this;
        const n = [];
        for(; e;)n.push(e.scopeName), e = e.parent;
        return n.reverse(), n;
    }
    toString() {
        return this.getSegments().join(" ");
    }
    extends(e) {
        return this === e ? !0 : this.parent === null ? !1 : this.parent.extends(e);
    }
    getExtensionIfDefined(e) {
        const n = [];
        let i = this;
        for(; i && i !== e;)n.push(i.scopeName), i = i.parent;
        return i === e ? n.reverse() : void 0;
    }
}, Qaa = class {
    constructor(t, e, n){
        this.fontStyle = t, this.foregroundId = e, this.backgroundId = n;
    }
}, OIh = class {
    constructor(t, e, n, i, r, s){
        this.scope = t, this.parentScopes = e, this.index = n, this.fontStyle = i, this.foreground = r, this.background = s;
    }
}, Rne = ((t)=>(t[t.NotSet = -1] = "NotSet", t[t.None = 0] = "None", t[t.Italic = 1] = "Italic", t[t.Bold = 2] = "Bold", t[t.Underline = 4] = "Underline", t[t.Strikethrough = 8] = "Strikethrough", t))(Rne || {}), FIh = class {
    constructor(t){
        if (jh(this, "_isFrozen"), jh(this, "_lastColorId"), jh(this, "_id2color"), jh(this, "_color2id"), this._lastColorId = 0, this._id2color = [], this._color2id = Object.create(null), Array.isArray(t)) {
            this._isFrozen = !0;
            for(let e = 0, n = t.length; e < n; e++)this._color2id[t[e]] = e, this._id2color[e] = t[e];
        } else this._isFrozen = !1;
    }
    getId(t) {
        if (t === null) return 0;
        t = t.toUpperCase();
        let e = this._color2id[t];
        if (e) return e;
        if (this._isFrozen) throw new Error(`Missing color in color map - ${t}`);
        return e = ++this._lastColorId, this._color2id[t] = e, this._id2color[e] = t, e;
    }
    getColorMap() {
        return this._id2color.slice(0);
    }
}, BIh = Object.freeze([]), g3r = class g2b {
    constructor(e, n, i, r, s){
        jh(this, "scopeDepth"), jh(this, "parentScopes"), jh(this, "fontStyle"), jh(this, "foreground"), jh(this, "background"), this.scopeDepth = e, this.parentScopes = n || BIh, this.fontStyle = i, this.foreground = r, this.background = s;
    }
    clone() {
        return new g2b(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
    }
    static cloneArr(e) {
        let n = [];
        for(let i = 0, r = e.length; i < r; i++)n[i] = e[i].clone();
        return n;
    }
    acceptOverwrite(e, n, i, r) {
        this.scopeDepth > e ? console.log("how did this happen?") : this.scopeDepth = e, n !== -1 && (this.fontStyle = n), i !== 0 && (this.foreground = i), r !== 0 && (this.background = r);
    }
}, UIh = class zJc {
    constructor(e, n = [], i = {}){
        jh(this, "_rulesWithParentScopes"), this._mainRule = e, this._children = i, this._rulesWithParentScopes = n;
    }
    static _cmpBySpecificity(e, n) {
        if (e.scopeDepth !== n.scopeDepth) return n.scopeDepth - e.scopeDepth;
        let i = 0, r = 0;
        for(; e.parentScopes[i] === ">" && i++, n.parentScopes[r] === ">" && r++, !(i >= e.parentScopes.length || r >= n.parentScopes.length);){
            const s = n.parentScopes[r].length - e.parentScopes[i].length;
            if (s !== 0) return s;
            i++, r++;
        }
        return n.parentScopes.length - e.parentScopes.length;
    }
    match(e) {
        if (e !== "") {
            let i = e.indexOf("."), r, s;
            if (i === -1 ? (r = e, s = "") : (r = e.substring(0, i), s = e.substring(i + 1)), this._children.hasOwnProperty(r)) return this._children[r].match(s);
        }
        const n = this._rulesWithParentScopes.concat(this._mainRule);
        return n.sort(zJc._cmpBySpecificity), n;
    }
    insert(e, n, i, r, s, o) {
        if (n === "") {
            this._doInsertHere(e, i, r, s, o);
            return;
        }
        let a = n.indexOf("."), l, c;
        a === -1 ? (l = n, c = "") : (l = n.substring(0, a), c = n.substring(a + 1));
        let u;
        this._children.hasOwnProperty(l) ? u = this._children[l] : (u = new zJc(this._mainRule.clone(), g3r.cloneArr(this._rulesWithParentScopes)), this._children[l] = u), u.insert(e + 1, c, i, r, s, o);
    }
    _doInsertHere(e, n, i, r, s) {
        if (n === null) {
            this._mainRule.acceptOverwrite(e, i, r, s);
            return;
        }
        for(let o = 0, a = this._rulesWithParentScopes.length; o < a; o++){
            let l = this._rulesWithParentScopes[o];
            if (wIh(l.parentScopes, n) === 0) {
                l.acceptOverwrite(e, i, r, s);
                return;
            }
        }
        i === -1 && (i = this._mainRule.fontStyle), r === 0 && (r = this._mainRule.foreground), s === 0 && (s = this._mainRule.background), this._rulesWithParentScopes.push(new g3r(e, n, i, r, s));
    }
}, nUt = class vNe {
    static toBinaryStr(e) {
        return e.toString(2).padStart(32, "0");
    }
    static print(e) {
        const n = vNe.getLanguageId(e), i = vNe.getTokenType(e), r = vNe.getFontStyle(e), s = vNe.getForeground(e), o = vNe.getBackground(e);
        console.log({
            languageId: n,
            tokenType: i,
            fontStyle: r,
            foreground: s,
            background: o
        });
    }
    static getLanguageId(e) {
        return (e & 255) >>> 0;
    }
    static getTokenType(e) {
        return (e & 768) >>> 8;
    }
    static containsBalancedBrackets(e) {
        return (e & 1024) !== 0;
    }
    static getFontStyle(e) {
        return (e & 30720) >>> 11;
    }
    static getForeground(e) {
        return (e & 16744448) >>> 15;
    }
    static getBackground(e) {
        return (e & 4278190080) >>> 24;
    }
    static set(e, n, i, r, s, o, a) {
        let l = vNe.getLanguageId(e), c = vNe.getTokenType(e), u = vNe.containsBalancedBrackets(e) ? 1 : 0, d = vNe.getFontStyle(e), h = vNe.getForeground(e), p = vNe.getBackground(e);
        return n !== 0 && (l = n), i !== 8 && (c = i), r !== null && (u = r ? 1 : 0), s !== -1 && (d = s), o !== 0 && (h = o), a !== 0 && (p = a), (l << 0 | c << 8 | u << 10 | d << 11 | h << 15 | p << 24) >>> 0;
    }
}, wyn = class {
    constructor(t){
        this.scopeName = t;
    }
    toKey() {
        return this.scopeName;
    }
}, jIh = class {
    constructor(t, e){
        this.scopeName = t, this.ruleName = e;
    }
    toKey() {
        return `${this.scopeName}#${this.ruleName}`;
    }
}, $Ih = class {
    constructor(){
        jh(this, "_references", []), jh(this, "_seenReferenceKeys", new Set), jh(this, "visitedRule", new Set);
    }
    get references() {
        return this._references;
    }
    add(t) {
        const e = t.toKey();
        this._seenReferenceKeys.has(e) || (this._seenReferenceKeys.add(e), this._references.push(t));
    }
}, HIh = class {
    constructor(t, e){
        jh(this, "seenFullScopeRequests", new Set), jh(this, "seenPartialScopeRequests", new Set), jh(this, "Q"), this.repo = t, this.initialScopeName = e, this.seenFullScopeRequests.add(this.initialScopeName), this.Q = [
            new wyn(this.initialScopeName)
        ];
    }
    processQueue() {
        const t = this.Q;
        this.Q = [];
        const e = new $Ih;
        for (const n of t)esS(n, this.initialScopeName, this.repo, e);
        for (const n of e.references)if (n instanceof wyn) {
            if (this.seenFullScopeRequests.has(n.scopeName)) continue;
            this.seenFullScopeRequests.add(n.scopeName), this.Q.push(n);
        } else {
            if (this.seenFullScopeRequests.has(n.scopeName) || this.seenPartialScopeRequests.has(n.toKey())) continue;
            this.seenPartialScopeRequests.add(n.toKey()), this.Q.push(n);
        }
    }
}, WIh = class {
    constructor(){
        jh(this, "kind", 0);
    }
}, GIh = class {
    constructor(){
        jh(this, "kind", 1);
    }
}, qIh = class {
    constructor(t){
        jh(this, "kind", 2), this.ruleName = t;
    }
}, zIh = class {
    constructor(t){
        jh(this, "kind", 3), this.scopeName = t;
    }
}, VIh = class {
    constructor(t, e){
        jh(this, "kind", 4), this.scopeName = t, this.ruleName = e;
    }
}, KIh = /\\(\d+)/, Jaa = /\\(\d+)/g, lsS = Symbol("RuleId"), YIh = -1, ela = -2, Cyn = class {
    constructor(t, e, n, i){
        jh(this, "$location"), jh(this, "id"), jh(this, "_nameIsCapturing"), jh(this, "_name"), jh(this, "_contentNameIsCapturing"), jh(this, "_contentName"), this.$location = t, this.id = e, this._name = n || null, this._nameIsCapturing = cdi.hasCaptures(this._name), this._contentName = i || null, this._contentNameIsCapturing = cdi.hasCaptures(this._contentName);
    }
    get debugName() {
        const t = this.$location ? `${SIh(this.$location.filename)}:${this.$location.line}` : "unknown";
        return `${this.constructor.name}#${this.id} @ ${t}`;
    }
    getName(t, e) {
        return !this._nameIsCapturing || this._name === null || t === null || e === null ? this._name : cdi.replaceCaptures(this._name, t, e);
    }
    getContentName(t, e) {
        return !this._contentNameIsCapturing || this._contentName === null ? this._contentName : cdi.replaceCaptures(this._contentName, t, e);
    }
}, XIh = class extends Cyn {
    constructor(t, e, n, i, r){
        super(t, e, n, i), jh(this, "retokenizeCapturedWithRuleId"), this.retokenizeCapturedWithRuleId = r;
    }
    dispose() {}
    collectPatterns(t, e) {
        throw new Error("Not supported!");
    }
    compile(t, e) {
        throw new Error("Not supported!");
    }
    compileAG(t, e, n, i) {
        throw new Error("Not supported!");
    }
}, ZIh = class extends Cyn {
    constructor(t, e, n, i, r){
        super(t, e, n, null), jh(this, "_match"), jh(this, "captures"), jh(this, "_cachedCompiledPatterns"), this._match = new Tyn(i, this.id), this.captures = r, this._cachedCompiledPatterns = null;
    }
    dispose() {
        this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
    }
    get debugMatchRegExp() {
        return `${this._match.source}`;
    }
    collectPatterns(t, e) {
        e.push(this._match);
    }
    compile(t, e) {
        return this._getCachedCompiledPatterns(t).compile(t);
    }
    compileAG(t, e, n, i) {
        return this._getCachedCompiledPatterns(t).compileAG(t, n, i);
    }
    _getCachedCompiledPatterns(t) {
        return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new Eyn, this.collectPatterns(t, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
    }
}, tla = class extends Cyn {
    constructor(t, e, n, i, r){
        super(t, e, n, i), jh(this, "hasMissingPatterns"), jh(this, "patterns"), jh(this, "_cachedCompiledPatterns"), this.patterns = r.patterns, this.hasMissingPatterns = r.hasMissingPatterns, this._cachedCompiledPatterns = null;
    }
    dispose() {
        this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
    }
    collectPatterns(t, e) {
        for (const n of this.patterns)t.getRule(n).collectPatterns(t, e);
    }
    compile(t, e) {
        return this._getCachedCompiledPatterns(t).compile(t);
    }
    compileAG(t, e, n, i) {
        return this._getCachedCompiledPatterns(t).compileAG(t, n, i);
    }
    _getCachedCompiledPatterns(t) {
        return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new Eyn, this.collectPatterns(t, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
    }
}, f3r = class extends Cyn {
    constructor(t, e, n, i, r, s, o, a, l, c){
        super(t, e, n, i), jh(this, "_begin"), jh(this, "beginCaptures"), jh(this, "_end"), jh(this, "endHasBackReferences"), jh(this, "endCaptures"), jh(this, "applyEndPatternLast"), jh(this, "hasMissingPatterns"), jh(this, "patterns"), jh(this, "_cachedCompiledPatterns"), this._begin = new Tyn(r, this.id), this.beginCaptures = s, this._end = new Tyn(o || "\uFFFF", -1), this.endHasBackReferences = this._end.hasBackReferences, this.endCaptures = a, this.applyEndPatternLast = l || !1, this.patterns = c.patterns, this.hasMissingPatterns = c.hasMissingPatterns, this._cachedCompiledPatterns = null;
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
    getEndWithResolvedBackReferences(t, e) {
        return this._end.resolveBackReferences(t, e);
    }
    collectPatterns(t, e) {
        e.push(this._begin);
    }
    compile(t, e) {
        return this._getCachedCompiledPatterns(t, e).compile(t);
    }
    compileAG(t, e, n, i) {
        return this._getCachedCompiledPatterns(t, e).compileAG(t, n, i);
    }
    _getCachedCompiledPatterns(t, e) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new Eyn;
            for (const n of this.patterns)t.getRule(n).collectPatterns(t, this._cachedCompiledPatterns);
            this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
        }
        return this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, e) : this._cachedCompiledPatterns.setSource(0, e)), this._cachedCompiledPatterns;
    }
}, ddi = class extends Cyn {
    constructor(t, e, n, i, r, s, o, a, l){
        super(t, e, n, i), jh(this, "_begin"), jh(this, "beginCaptures"), jh(this, "whileCaptures"), jh(this, "_while"), jh(this, "whileHasBackReferences"), jh(this, "hasMissingPatterns"), jh(this, "patterns"), jh(this, "_cachedCompiledPatterns"), jh(this, "_cachedCompiledWhilePatterns"), this._begin = new Tyn(r, this.id), this.beginCaptures = s, this.whileCaptures = a, this._while = new Tyn(o, ela), this.whileHasBackReferences = this._while.hasBackReferences, this.patterns = l.patterns, this.hasMissingPatterns = l.hasMissingPatterns, this._cachedCompiledPatterns = null, this._cachedCompiledWhilePatterns = null;
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
    getWhileWithResolvedBackReferences(t, e) {
        return this._while.resolveBackReferences(t, e);
    }
    collectPatterns(t, e) {
        e.push(this._begin);
    }
    compile(t, e) {
        return this._getCachedCompiledPatterns(t).compile(t);
    }
    compileAG(t, e, n, i) {
        return this._getCachedCompiledPatterns(t).compileAG(t, n, i);
    }
    _getCachedCompiledPatterns(t) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new Eyn;
            for (const e of this.patterns)t.getRule(e).collectPatterns(t, this._cachedCompiledPatterns);
        }
        return this._cachedCompiledPatterns;
    }
    compileWhile(t, e) {
        return this._getCachedCompiledWhilePatterns(t, e).compile(t);
    }
    compileWhileAG(t, e, n, i) {
        return this._getCachedCompiledWhilePatterns(t, e).compileAG(t, n, i);
    }
    _getCachedCompiledWhilePatterns(t, e) {
        return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new Eyn, this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, e || "\uFFFF"), this._cachedCompiledWhilePatterns;
    }
}, nla = class _ue {
    static createCaptureRule(e, n, i, r, s) {
        return e.registerRule((o)=>new XIh(n, o, i, r, s));
    }
    static getCompiledRuleId(e, n, i) {
        return e.id || n.registerRule((r)=>{
            if (e.id = r, e.match) return new ZIh(e.$vscodeTextmateLocation, e.id, e.name, e.match, _ue._compileCaptures(e.captures, n, i));
            if (typeof e.begin > "u") {
                e.repository && (i = yIh({}, i, e.repository));
                let s = e.patterns;
                return typeof s > "u" && e.include && (s = [
                    {
                        include: e.include
                    }
                ]), new tla(e.$vscodeTextmateLocation, e.id, e.name, e.contentName, _ue._compilePatterns(s, n, i));
            }
            return e.while ? new ddi(e.$vscodeTextmateLocation, e.id, e.name, e.contentName, e.begin, _ue._compileCaptures(e.beginCaptures || e.captures, n, i), e.while, _ue._compileCaptures(e.whileCaptures || e.captures, n, i), _ue._compilePatterns(e.patterns, n, i)) : new f3r(e.$vscodeTextmateLocation, e.id, e.name, e.contentName, e.begin, _ue._compileCaptures(e.beginCaptures || e.captures, n, i), e.end, _ue._compileCaptures(e.endCaptures || e.captures, n, i), e.applyEndPatternLast, _ue._compilePatterns(e.patterns, n, i));
        }), e.id;
    }
    static _compileCaptures(e, n, i) {
        let r = [];
        if (e) {
            let s = 0;
            for(const o in e){
                if (o === "$vscodeTextmateLocation") continue;
                const a = parseInt(o, 10);
                a > s && (s = a);
            }
            for(let o = 0; o <= s; o++)r[o] = null;
            for(const o in e){
                if (o === "$vscodeTextmateLocation") continue;
                const a = parseInt(o, 10);
                let l = 0;
                e[o].patterns && (l = _ue.getCompiledRuleId(e[o], n, i)), r[a] = _ue.createCaptureRule(n, e[o].$vscodeTextmateLocation, e[o].name, e[o].contentName, l);
            }
        }
        return r;
    }
    static _compilePatterns(e, n, i) {
        let r = [];
        if (e) for(let s = 0, o = e.length; s < o; s++){
            const a = e[s];
            let l = -1;
            if (a.include) {
                const c = xIh(a.include);
                switch(c.kind){
                    case 0:
                    case 1:
                        l = _ue.getCompiledRuleId(i[a.include], n, i);
                        break;
                    case 2:
                        let u = i[c.ruleName];
                        u && (l = _ue.getCompiledRuleId(u, n, i));
                        break;
                    case 3:
                    case 4:
                        const d = c.scopeName, h = c.kind === 4 ? c.ruleName : null, p = n.getExternalGrammar(d, i);
                        if (p) if (h) {
                            let g = p.repository[h];
                            g && (l = _ue.getCompiledRuleId(g, n, p.repository));
                        } else l = _ue.getCompiledRuleId(p.repository.$self, n, p.repository);
                        break;
                }
            } else l = _ue.getCompiledRuleId(a, n, i);
            if (l !== -1) {
                const c = n.getRule(l);
                let u = !1;
                if ((c instanceof tla || c instanceof f3r || c instanceof ddi) && c.hasMissingPatterns && c.patterns.length === 0 && (u = !0), u) continue;
                r.push(l);
            }
        }
        return {
            patterns: r,
            hasMissingPatterns: (e ? e.length : 0) !== r.length
        };
    }
}, Tyn = class f2b {
    constructor(e, n){
        if (jh(this, "source"), jh(this, "ruleId"), jh(this, "hasAnchor"), jh(this, "hasBackReferences"), jh(this, "_anchorCache"), e && typeof e == "string") {
            const i = e.length;
            let r = 0, s = [], o = !1;
            for(let a = 0; a < i; a++)if (e.charAt(a) === "\\" && a + 1 < i) {
                const c = e.charAt(a + 1);
                c === "z" ? (s.push(e.substring(r, a)), s.push("$(?!\\n)(?<!\\n)"), r = a + 2) : (c === "A" || c === "G") && (o = !0), a++;
            }
            this.hasAnchor = o, r === 0 ? this.source = e : (s.push(e.substring(r, i)), this.source = s.join(""));
        } else this.hasAnchor = !1, this.source = e;
        this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = n, typeof this.source == "string" ? this.hasBackReferences = KIh.test(this.source) : this.hasBackReferences = !1;
    }
    clone() {
        return new f2b(this.source, this.ruleId);
    }
    setSource(e) {
        this.source !== e && (this.source = e, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
    }
    resolveBackReferences(e, n) {
        if (typeof this.source != "string") throw new Error("This method should only be called if the source is a string");
        let i = n.map((r)=>e.substring(r.start, r.end));
        return Jaa.lastIndex = 0, this.source.replace(Jaa, (r, s)=>TIh(i[parseInt(s, 10)] || ""));
    }
    _buildAnchorCache() {
        if (typeof this.source != "string") throw new Error("This method should only be called if the source is a string");
        let e = [], n = [], i = [], r = [], s, o, a, l;
        for(s = 0, o = this.source.length; s < o; s++)a = this.source.charAt(s), e[s] = a, n[s] = a, i[s] = a, r[s] = a, a === "\\" && s + 1 < o && (l = this.source.charAt(s + 1), l === "A" ? (e[s + 1] = "\uFFFF", n[s + 1] = "\uFFFF", i[s + 1] = "A", r[s + 1] = "A") : l === "G" ? (e[s + 1] = "\uFFFF", n[s + 1] = "G", i[s + 1] = "\uFFFF", r[s + 1] = "G") : (e[s + 1] = l, n[s + 1] = l, i[s + 1] = l, r[s + 1] = l), s++);
        return {
            A0_G0: e.join(""),
            A0_G1: n.join(""),
            A1_G0: i.join(""),
            A1_G1: r.join("")
        };
    }
    resolveAnchors(e, n) {
        return !this.hasAnchor || !this._anchorCache || typeof this.source != "string" ? this.source : e ? n ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : n ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0;
    }
}, Eyn = class {
    constructor(){
        jh(this, "_items"), jh(this, "_hasAnchors"), jh(this, "_cached"), jh(this, "_anchorCache"), this._items = [], this._hasAnchors = !1, this._cached = null, this._anchorCache = {
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
    push(t) {
        this._items.push(t), this._hasAnchors = this._hasAnchors || t.hasAnchor;
    }
    unshift(t) {
        this._items.unshift(t), this._hasAnchors = this._hasAnchors || t.hasAnchor;
    }
    length() {
        return this._items.length;
    }
    setSource(t, e) {
        this._items[t].source !== e && (this._disposeCaches(), this._items[t].setSource(e));
    }
    compile(t) {
        if (!this._cached) {
            let e = this._items.map((n)=>n.source);
            this._cached = new ila(t, e, this._items.map((n)=>n.ruleId));
        }
        return this._cached;
    }
    compileAG(t, e, n) {
        return this._hasAnchors ? e ? n ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(t, e, n)), this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(t, e, n)), this._anchorCache.A1_G0) : n ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(t, e, n)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(t, e, n)), this._anchorCache.A0_G0) : this.compile(t);
    }
    _resolveAnchors(t, e, n) {
        let i = this._items.map((r)=>r.resolveAnchors(e, n));
        return new ila(t, i, this._items.map((r)=>r.ruleId));
    }
}, ila = class {
    constructor(t, e, n){
        jh(this, "scanner"), this.regExps = e, this.rules = n, this.scanner = t.createOnigScanner(e);
    }
    dispose() {
        typeof this.scanner.dispose == "function" && this.scanner.dispose();
    }
    toString() {
        const t = [];
        for(let e = 0, n = this.rules.length; e < n; e++)t.push("   - " + this.rules[e] + ": " + this.regExps[e]);
        return t.join(`
`);
    }
    findNextMatchSync(t, e, n) {
        const i = this.scanner.findNextMatchSync(t, e, n);
        return i ? {
            ruleId: this.rules[i.index],
            captureIndices: i.captureIndices
        } : null;
    }
}, v3r = class {
    constructor(t, e){
        this.languageId = t, this.tokenType = e;
    }
}, QIh = (kyn = class {
    constructor(t, e){
        jh(this, "_defaultAttributes"), jh(this, "_embeddedLanguagesMatcher"), jh(this, "_getBasicScopeAttributes", new Zaa((n)=>{
            const i = this._scopeToLanguage(n), r = this._toStandardTokenType(n);
            return new v3r(i, r);
        })), this._defaultAttributes = new v3r(t, 8), this._embeddedLanguagesMatcher = new JIh(Object.entries(e || {}));
    }
    getDefaultAttributes() {
        return this._defaultAttributes;
    }
    getBasicScopeAttributes(t) {
        return t === null ? kyn._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(t);
    }
    _scopeToLanguage(t) {
        return this._embeddedLanguagesMatcher.match(t) || 0;
    }
    _toStandardTokenType(t) {
        const e = t.match(kyn.STANDARD_TOKEN_TYPE_REGEXP);
        if (!e) return 8;
        switch(e[1]){
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
}, jh(kyn, "_NULL_SCOPE_METADATA", new v3r(0, 0)), jh(kyn, "STANDARD_TOKEN_TYPE_REGEXP", /\b(comment|string|regex|meta\.embedded)\b/), kyn), JIh = class {
    constructor(t){
        if (jh(this, "values"), jh(this, "scopesRegExp"), t.length === 0) this.values = null, this.scopesRegExp = null;
        else {
            this.values = new Map(t);
            const e = t.map(([n, i])=>TIh(n));
            e.sort(), e.reverse(), this.scopesRegExp = new RegExp(`^((${e.join(")|(")}))($|\\.)`, "");
        }
    }
    match(t) {
        if (!this.scopesRegExp) return;
        const e = t.match(this.scopesRegExp);
        if (e) return this.values.get(e[1]);
    }
}, csS = {
    InDebugMode: typeof process < "u" && !!process.env.VSCODE_TEXTMATE_DEBUG
}, rla = !1, sla = class {
    constructor(t, e){
        this.stack = t, this.stoppedEarly = e;
    }
}, exh = class {
    constructor(t, e){
        jh(this, "scopes"), jh(this, "endPos"), this.scopes = t, this.endPos = e;
    }
}, txh = class {
    constructor(t, e, n, i, r, s, o, a){
        if (jh(this, "_rootId"), jh(this, "_lastRuleId"), jh(this, "_ruleId2desc"), jh(this, "_includedGrammars"), jh(this, "_grammarRepository"), jh(this, "_grammar"), jh(this, "_injections"), jh(this, "_basicScopeAttributesProvider"), jh(this, "_tokenTypeMatchers"), this._rootScopeName = t, this.balancedBracketSelectors = s, this._onigLib = a, this._basicScopeAttributesProvider = new QIh(n, i), this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [
            null
        ], this._includedGrammars = {}, this._grammarRepository = o, this._grammar = DIh(e, null), this._injections = null, this._tokenTypeMatchers = [], r) for (const l of Object.keys(r)){
            const c = c3r(l, h3r);
            for (const u of c)this._tokenTypeMatchers.push({
                matcher: u.matcher,
                type: r[l]
            });
        }
    }
    get themeProvider() {
        return this._grammarRepository;
    }
    dispose() {
        for (const t of this._ruleId2desc)t && t.dispose();
    }
    createOnigScanner(t) {
        return this._onigLib.createOnigScanner(t);
    }
    createOnigString(t) {
        return this._onigLib.createOnigString(t);
    }
    getMetadataForScope(t) {
        return this._basicScopeAttributesProvider.getBasicScopeAttributes(t);
    }
    _collectInjections() {
        const t = {
            lookup: (r)=>r === this._rootScopeName ? this._grammar : this.getExternalGrammar(r),
            injections: (r)=>this._grammarRepository.injections(r)
        }, e = [], n = this._rootScopeName, i = t.lookup(n);
        if (i) {
            const r = i.injections;
            if (r) for(let o in r)MIh(e, o, r[o], this, i);
            const s = this._grammarRepository.injections(n);
            s && s.forEach((o)=>{
                const a = this.getExternalGrammar(o);
                if (a) {
                    const l = a.injectionSelector;
                    l && MIh(e, l, a, this, a);
                }
            });
        }
        return e.sort((r, s)=>r.priority - s.priority), e;
    }
    getInjections() {
        return this._injections === null && (this._injections = this._collectInjections()), this._injections;
    }
    registerRule(t) {
        const e = ++this._lastRuleId, n = t(e);
        return this._ruleId2desc[e] = n, n;
    }
    getRule(t) {
        return this._ruleId2desc[t];
    }
    getExternalGrammar(t, e) {
        if (this._includedGrammars[t]) return this._includedGrammars[t];
        if (this._grammarRepository) {
            const n = this._grammarRepository.lookup(t);
            if (n) return this._includedGrammars[t] = DIh(n, e && e.$base), this._includedGrammars[t];
        }
    }
    tokenizeLine(t, e, n = 0) {
        const i = this._tokenize(t, e, !1, n);
        return {
            tokens: i.lineTokens.getResult(i.ruleStack, i.lineLength),
            ruleStack: i.ruleStack,
            stoppedEarly: i.stoppedEarly
        };
    }
    tokenizeLine2(t, e, n = 0) {
        const i = this._tokenize(t, e, !0, n);
        return {
            tokens: i.lineTokens.getBinaryResult(i.ruleStack, i.lineLength),
            ruleStack: i.ruleStack,
            stoppedEarly: i.stoppedEarly
        };
    }
    _tokenize(t, e, n, i) {
        this._rootId === -1 && (this._rootId = nla.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository), this.getInjections());
        let r;
        if (!e || e === _3r.NULL) {
            r = !0;
            const c = this._basicScopeAttributesProvider.getDefaultAttributes(), u = this.themeProvider.getDefaults(), d = nUt.set(0, c.languageId, c.tokenType, null, u.fontStyle, u.foregroundId, u.backgroundId), h = this.getRule(this._rootId).getName(null, null);
            let p;
            h ? p = Iyn.createRootAndLookUpScopeName(h, d, this) : p = Iyn.createRoot("unknown", d), e = new _3r(null, this._rootId, -1, -1, !1, null, p, p);
        } else r = !1, e.reset();
        t = t + `
`;
        const s = this.createOnigString(t), o = s.content.length, a = new ixh(n, t, this._tokenTypeMatchers, this.balancedBracketSelectors), l = AIh(this, s, r, 0, e, a, !0, i);
        return IIh(s), {
            lineLength: o,
            lineTokens: a,
            ruleStack: l.stack,
            stoppedEarly: l.stoppedEarly
        };
    }
}, Iyn = class KZe {
    constructor(e, n, i){
        this.parent = e, this.scopePath = n, this.tokenAttributes = i;
    }
    static fromExtension(e, n) {
        let i = e, r = e?.scopePath ?? null;
        for (const s of n)r = m3r.push(r, s.scopeNames), i = new KZe(i, r, s.encodedTokenAttributes);
        return i;
    }
    static createRoot(e, n) {
        return new KZe(null, new m3r(null, e), n);
    }
    static createRootAndLookUpScopeName(e, n, i) {
        const r = i.getMetadataForScope(e), s = new m3r(null, e), o = i.themeProvider.themeMatch(s), a = KZe.mergeAttributes(n, r, o);
        return new KZe(null, s, a);
    }
    get scopeName() {
        return this.scopePath.scopeName;
    }
    toString() {
        return this.getScopeNames().join(" ");
    }
    equals(e) {
        return KZe.equals(this, e);
    }
    static equals(e, n) {
        do {
            if (e === n || !e && !n) return !0;
            if (!e || !n || e.scopeName !== n.scopeName || e.tokenAttributes !== n.tokenAttributes) return !1;
            e = e.parent, n = n.parent;
        }while (!0)
    }
    static mergeAttributes(e, n, i) {
        let r = -1, s = 0, o = 0;
        return i !== null && (r = i.fontStyle, s = i.foregroundId, o = i.backgroundId), nUt.set(e, n.languageId, n.tokenType, null, r, s, o);
    }
    pushAttributed(e, n) {
        if (e === null) return this;
        if (e.indexOf(" ") === -1) return KZe._pushAttributed(this, e, n);
        const i = e.split(/ /g);
        let r = this;
        for (const s of i)r = KZe._pushAttributed(r, s, n);
        return r;
    }
    static _pushAttributed(e, n, i) {
        const r = i.getMetadataForScope(n), s = e.scopePath.push(n), o = i.themeProvider.themeMatch(s), a = KZe.mergeAttributes(e.tokenAttributes, r, o);
        return new KZe(e, s, a);
    }
    getScopeNames() {
        return this.scopePath.getSegments();
    }
    getExtensionIfDefined(e) {
        const n = [];
        let i = this;
        for(; i && i !== e;)n.push({
            encodedTokenAttributes: i.tokenAttributes,
            scopeNames: i.scopePath.getExtensionIfDefined(i.parent?.scopePath ?? null)
        }), i = i.parent;
        return i === e ? n.reverse() : void 0;
    }
}, _3r = (Ait = class {
    constructor(t, e, n, i, r, s, o, a){
        jh(this, "_stackElementBrand"), jh(this, "_enterPos"), jh(this, "_anchorPos"), jh(this, "depth"), this.parent = t, this.ruleId = e, this.beginRuleCapturedEOL = r, this.endRule = s, this.nameScopesList = o, this.contentNameScopesList = a, this.depth = this.parent ? this.parent.depth + 1 : 1, this._enterPos = n, this._anchorPos = i;
    }
    equals(t) {
        return t === null ? !1 : Ait._equals(this, t);
    }
    static _equals(t, e) {
        return t === e ? !0 : this._structuralEquals(t, e) ? Iyn.equals(t.contentNameScopesList, e.contentNameScopesList) : !1;
    }
    static _structuralEquals(t, e) {
        do {
            if (t === e || !t && !e) return !0;
            if (!t || !e || t.depth !== e.depth || t.ruleId !== e.ruleId || t.endRule !== e.endRule) return !1;
            t = t.parent, e = e.parent;
        }while (!0)
    }
    clone() {
        return this;
    }
    static _reset(t) {
        for(; t;)t._enterPos = -1, t._anchorPos = -1, t = t.parent;
    }
    reset() {
        Ait._reset(this);
    }
    pop() {
        return this.parent;
    }
    safePop() {
        return this.parent ? this.parent : this;
    }
    push(t, e, n, i, r, s, o) {
        return new Ait(this, t, e, n, i, r, s, o);
    }
    getEnterPos() {
        return this._enterPos;
    }
    getAnchorPos() {
        return this._anchorPos;
    }
    getRule(t) {
        return t.getRule(this.ruleId);
    }
    toString() {
        const t = [];
        return this._writeString(t, 0), "[" + t.join(",") + "]";
    }
    _writeString(t, e) {
        return this.parent && (e = this.parent._writeString(t, e)), t[e++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`, e;
    }
    withContentNameScopesList(t) {
        return this.contentNameScopesList === t ? this : this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, t);
    }
    withEndRule(t) {
        return this.endRule === t ? this : new Ait(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, t, this.nameScopesList, this.contentNameScopesList);
    }
    hasSameRuleAs(t) {
        let e = this;
        for(; e && e._enterPos === t._enterPos;){
            if (e.ruleId === t.ruleId) return !0;
            e = e.parent;
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
    static pushFrame(t, e) {
        const n = Iyn.fromExtension(t?.nameScopesList ?? null, e.nameScopesList);
        return new Ait(t, e.ruleId, e.enterPos ?? -1, e.anchorPos ?? -1, e.beginRuleCapturedEOL, e.endRule, n, Iyn.fromExtension(n, e.contentNameScopesList));
    }
}, jh(Ait, "NULL", new Ait(null, 0, 0, 0, !1, null, null, null)), Ait), nxh = class {
    constructor(t, e){
        jh(this, "balancedBracketScopes"), jh(this, "unbalancedBracketScopes"), jh(this, "allowAny", !1), this.balancedBracketScopes = t.flatMap((n)=>n === "*" ? (this.allowAny = !0, []) : c3r(n, h3r).map((i)=>i.matcher)), this.unbalancedBracketScopes = e.flatMap((n)=>c3r(n, h3r).map((i)=>i.matcher));
    }
    get matchesAlways() {
        return this.allowAny && this.unbalancedBracketScopes.length === 0;
    }
    get matchesNever() {
        return this.balancedBracketScopes.length === 0 && !this.allowAny;
    }
    match(t) {
        for (const e of this.unbalancedBracketScopes)if (e(t)) return !1;
        for (const e of this.balancedBracketScopes)if (e(t)) return !0;
        return this.allowAny;
    }
}, ixh = class {
    constructor(t, e, n, i){
        jh(this, "_emitBinaryTokens"), jh(this, "_lineText"), jh(this, "_tokens"), jh(this, "_binaryTokens"), jh(this, "_lastTokenEndIndex"), jh(this, "_tokenTypeOverrides"), this.balancedBracketSelectors = i, this._emitBinaryTokens = t, this._tokenTypeOverrides = n, this._lineText = null, this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0;
    }
    produce(t, e) {
        this.produceFromScopes(t.contentNameScopesList, e);
    }
    produceFromScopes(t, e) {
        if (this._lastTokenEndIndex >= e) return;
        if (this._emitBinaryTokens) {
            let i = t?.tokenAttributes ?? 0, r = !1;
            if (this.balancedBracketSelectors?.matchesAlways && (r = !0), this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
                const s = t?.getScopeNames() ?? [];
                for (const o of this._tokenTypeOverrides)o.matcher(s) && (i = nUt.set(i, 0, o.type, null, -1, 0, 0));
                this.balancedBracketSelectors && (r = this.balancedBracketSelectors.match(s));
            }
            if (r && (i = nUt.set(i, 0, 8, r, -1, 0, 0)), this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === i) {
                this._lastTokenEndIndex = e;
                return;
            }
            this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(i), this._lastTokenEndIndex = e;
            return;
        }
        const n = t?.getScopeNames() ?? [];
        this._tokens.push({
            startIndex: this._lastTokenEndIndex,
            endIndex: e,
            scopes: n
        }), this._lastTokenEndIndex = e;
    }
    getResult(t, e) {
        return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === e - 1 && this._tokens.pop(), this._tokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(t, e), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens;
    }
    getBinaryResult(t, e) {
        this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === e - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), this._binaryTokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(t, e), this._binaryTokens[this._binaryTokens.length - 2] = 0);
        const n = new Uint32Array(this._binaryTokens.length);
        for(let i = 0, r = this._binaryTokens.length; i < r; i++)n[i] = this._binaryTokens[i];
        return n;
    }
}, rxh = class {
    constructor(t, e){
        jh(this, "_grammars", new Map), jh(this, "_rawGrammars", new Map), jh(this, "_injectionGrammars", new Map), jh(this, "_theme"), this._onigLib = e, this._theme = t;
    }
    dispose() {
        for (const t of this._grammars.values())t.dispose();
    }
    setTheme(t) {
        this._theme = t;
    }
    getColorMap() {
        return this._theme.getColorMap();
    }
    addGrammar(t, e) {
        this._rawGrammars.set(t.scopeName, t), e && this._injectionGrammars.set(t.scopeName, e);
    }
    lookup(t) {
        return this._rawGrammars.get(t);
    }
    injections(t) {
        return this._injectionGrammars.get(t);
    }
    getDefaults() {
        return this._theme.getDefaults();
    }
    themeMatch(t) {
        return this._theme.match(t);
    }
    grammarForScopeName(t, e, n, i, r) {
        if (!this._grammars.has(t)) {
            let s = this._rawGrammars.get(t);
            if (!s) return null;
            this._grammars.set(t, osS(t, s, e, n, i, r, this, this._onigLib));
        }
        return this._grammars.get(t);
    }
}, sxh = class {
    constructor(e){
        jh(this, "_options"), jh(this, "_syncRegistry"), jh(this, "_ensureGrammarCache"), this._options = e, this._syncRegistry = new rxh(udi.createFromRawTheme(e.theme, e.colorMap), e.onigLib), this._ensureGrammarCache = new Map;
    }
    dispose() {
        this._syncRegistry.dispose();
    }
    setTheme(e, n) {
        this._syncRegistry.setTheme(udi.createFromRawTheme(e, n));
    }
    getColorMap() {
        return this._syncRegistry.getColorMap();
    }
    loadGrammarWithEmbeddedLanguages(e, n, i) {
        return this.loadGrammarWithConfiguration(e, n, {
            embeddedLanguages: i
        });
    }
    loadGrammarWithConfiguration(e, n, i) {
        return this._loadGrammar(e, n, i.embeddedLanguages, i.tokenTypes, new nxh(i.balancedBracketSelectors || [], i.unbalancedBracketSelectors || []));
    }
    loadGrammar(e) {
        return this._loadGrammar(e, 0, null, null, null);
    }
    _loadGrammar(e, n, i, r, s) {
        const o = new HIh(this._syncRegistry, e);
        for(; o.Q.length > 0;)o.Q.map((a)=>this._loadSingleGrammar(a.scopeName)), o.processQueue();
        return this._grammarForScopeName(e, n, i, r, s);
    }
    _loadSingleGrammar(e) {
        this._ensureGrammarCache.has(e) || (this._doLoadSingleGrammar(e), this._ensureGrammarCache.set(e, !0));
    }
    _doLoadSingleGrammar(e) {
        const n = this._options.loadGrammar(e);
        if (n) {
            const i = typeof this._options.getInjections == "function" ? this._options.getInjections(e) : void 0;
            this._syncRegistry.addGrammar(n, i);
        }
    }
    addGrammar(e, n = [], i = 0, r = null) {
        return this._syncRegistry.addGrammar(e, n), this._grammarForScopeName(e.scopeName, i, r);
    }
    _grammarForScopeName(e, n = 0, i = null, r = null, s = null) {
        return this._syncRegistry.grammarForScopeName(e, n, i, r, s);
    }
}, b3r = _3r.NULL;

}
