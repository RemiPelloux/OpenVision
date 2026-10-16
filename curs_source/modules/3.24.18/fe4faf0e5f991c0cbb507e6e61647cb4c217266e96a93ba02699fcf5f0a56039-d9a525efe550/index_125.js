import { ARe, ERe, HJ, _Dt, a5i, akr, bDt, bhe, bkr, cDt, ckr, dDt, dkr, fDt, fkr, gDt, ghe, gkr, hDt, hkr, i5i, ikr, kDt, lDt, lkr, mDt, mkr, o5i, okr, pDt, pkr, r5i, rkr, skr, uDt, ukr, wDt, whe, yDt, yhe, ykr } from "./Iwr.js";
import { Ye } from "./marked.esm.js";
import { i } from "./plugin-brand-icon.js";
var TRe, vDt, _he, xDt, CDt, SDt, khe, ZJ, $Re, EDt, ADt, TDt, wkr, M0, $Dt, _kr, kkr, IRe, NRe, vhe, vkr, ok, OB, IDt, VJ, NDt, xkr, MDt, Ckr, RDt, Skr, PDt, Ekr, jDt, Akr, LDt, Tkr, DDt, $kr, FDt, Ikr, Nkr, ODt, s5i, Mkr, zDt, BDt, KJ, qDt, Rkr, UDt, Pkr, GDt, WDt, HDt, MRe, ZDt, xhe, E1, VDt, RRe, XJ, KDt, YJ, XDt, YDt, JDt, PRe, zB, jkr, QDt, Lkr, c5i, eFt, tFt, nFt, rFt, Dkr, iFt, Fkr, z4, JJ, OS, jRe, aFt, Okr, oFt, zkr, sFt, Bkr, cFt, qkr, LRe;
export { $Dt, $Re, $kr, ADt, Akr, BDt, Bkr, CDt, Ckr, DDt, Dkr, E1, EDt, Ekr, FDt, Fkr, GDt, HDt, IDt, IRe, Ikr, JDt, JJ, KDt, KJ, LDt, LRe, Lkr, M0, MDt, MRe, Mkr, NDt, NRe, Nkr, OB, ODt, OS, Okr, PDt, PRe, Pkr, QDt, RDt, RRe, Rkr, SDt, Skr, TDt, TRe, Tkr, UDt, VDt, VJ, WDt, XDt, XJ, YDt, YJ, ZDt, ZJ, _he, _kr, aFt, c5i, cFt, eFt, iFt, jDt, jRe, jkr, khe, kkr, nFt, oFt, ok, qDt, qkr, rFt, s5i, sFt, tFt, vDt, vhe, vkr, wkr, xDt, xhe, xkr, z4, zB, zDt, zkr };
var __wakaru_Ukr_initialized = false;
export function Ukr() {
if (__wakaru_Ukr_initialized) return;
__wakaru_Ukr_initialized = true;
i(rkr, "clone"), i(ERe, "doClone"), i(ikr, "cloneArray"), i(akr, "cloneObj"), i(cDt, "mergeObjects"), i(lDt, "basename"), TRe = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g, _he = (vDt = class {
    static hasCaptures(r) {
        return r === null ? !1 : (TRe.lastIndex = 0, TRe.test(r));
    }
    static replaceCaptures(r, e, a) {
        return r.replace(TRe, (s, l, u, p)=>{
            let m = a[parseInt(l || u, 10)];
            if (m) {
                let b = e.substring(m.start, m.end);
                for(; b[0] === ".";)b = b.substring(1);
                switch(p){
                    case "downcase":
                        return b.toLowerCase();
                    case "upcase":
                        return b.toUpperCase();
                    default:
                        return b;
                }
            } else return s;
        });
    }
}, i(vDt, "RegexSource"), vDt), i(uDt, "strcmp"), i(dDt, "strArrCmp"), i(pDt, "isValidHexColor"), i(mDt, "escapeRegExpCharacters"), CDt = (xDt = class {
    constructor(r){
        Ye(this, "cache", new Map), this.fn = r;
    }
    get(r) {
        if (this.cache.has(r)) return this.cache.get(r);
        const e = this.fn(r);
        return this.cache.set(r, e), e;
    }
}, i(xDt, "CachedFn"), xDt), khe = (SDt = class {
    constructor(r, e, a){
        Ye(this, "_cachedMatchRoot", new CDt((s)=>this._root.match(s))), this._colorMap = r, this._defaults = e, this._root = a;
    }
    static createFromRawTheme(r, e) {
        return this.createFromParsedTheme(ckr(r), e);
    }
    static createFromParsedTheme(r, e) {
        return lkr(r, e);
    }
    getColorMap() {
        return this._colorMap.getColorMap();
    }
    getDefaults() {
        return this._defaults;
    }
    match(r) {
        if (r === null) return this._defaults;
        const e = r.scopeName, s = this._cachedMatchRoot.get(e).find((l)=>okr(r.parent, l.parentScopes));
        return s ? new ADt(s.fontStyle, s.foreground, s.background) : null;
    }
}, i(SDt, "Theme"), SDt), $Re = (ZJ = class {
    constructor(r, e){
        this.parent = r, this.scopeName = e;
    }
    static push(r, e) {
        for (const a of e)r = new ZJ(r, a);
        return r;
    }
    static from(...r) {
        let e = null;
        for(let a = 0; a < r.length; a++)e = new ZJ(e, r[a]);
        return e;
    }
    push(r) {
        return new ZJ(this, r);
    }
    getSegments() {
        let r = this;
        const e = [];
        for(; r;)e.push(r.scopeName), r = r.parent;
        return e.reverse(), e;
    }
    toString() {
        return this.getSegments().join(" ");
    }
    extends(r) {
        return this === r ? !0 : this.parent === null ? !1 : this.parent.extends(r);
    }
    getExtensionIfDefined(r) {
        const e = [];
        let a = this;
        for(; a && a !== r;)e.push(a.scopeName), a = a.parent;
        return a === r ? e.reverse() : void 0;
    }
}, i(ZJ, "_ScopeStack"), ZJ), i(okr, "_scopePathMatchesParentScopes"), i(skr, "_matchesScope"), ADt = (EDt = class {
    constructor(r, e, a){
        this.fontStyle = r, this.foregroundId = e, this.backgroundId = a;
    }
}, i(EDt, "StyleAttributes"), EDt), i(ckr, "parseTheme"), wkr = (TDt = class {
    constructor(r, e, a, s, l, u){
        this.scope = r, this.parentScopes = e, this.index = a, this.fontStyle = s, this.foreground = l, this.background = u;
    }
}, i(TDt, "ParsedThemeRule"), TDt), M0 = ((r)=>(r[r.NotSet = -1] = "NotSet", r[r.None = 0] = "None", r[r.Italic = 1] = "Italic", r[r.Bold = 2] = "Bold", r[r.Underline = 4] = "Underline", r[r.Strikethrough = 8] = "Strikethrough", r))(M0 || {}), i(lkr, "resolveParsedThemeRules"), _kr = ($Dt = class {
    constructor(r){
        if (Ye(this, "_isFrozen"), Ye(this, "_lastColorId"), Ye(this, "_id2color"), Ye(this, "_color2id"), this._lastColorId = 0, this._id2color = [], this._color2id = Object.create(null), Array.isArray(r)) {
            this._isFrozen = !0;
            for(let e = 0, a = r.length; e < a; e++)this._color2id[r[e]] = e, this._id2color[e] = r[e];
        } else this._isFrozen = !1;
    }
    getId(r) {
        if (r === null) return 0;
        r = r.toUpperCase();
        let e = this._color2id[r];
        if (e) return e;
        if (this._isFrozen) throw new Error(`Missing color in color map - ${r}`);
        return e = ++this._lastColorId, this._color2id[r] = e, this._id2color[e] = r, e;
    }
    getColorMap() {
        return this._id2color.slice(0);
    }
}, i($Dt, "ColorMap"), $Dt), kkr = Object.freeze([]), NRe = (IRe = class {
    constructor(r, e, a, s, l){
        Ye(this, "scopeDepth"), Ye(this, "parentScopes"), Ye(this, "fontStyle"), Ye(this, "foreground"), Ye(this, "background"), this.scopeDepth = r, this.parentScopes = e || kkr, this.fontStyle = a, this.foreground = s, this.background = l;
    }
    clone() {
        return new IRe(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
    }
    static cloneArr(r) {
        let e = [];
        for(let a = 0, s = r.length; a < s; a++)e[a] = r[a].clone();
        return e;
    }
    acceptOverwrite(r, e, a, s) {
        this.scopeDepth > r ? console.log("how did this happen?") : this.scopeDepth = r, e !== -1 && (this.fontStyle = e), a !== 0 && (this.foreground = a), s !== 0 && (this.background = s);
    }
}, i(IRe, "_ThemeTrieElementRule"), IRe), vkr = (vhe = class {
    constructor(r, e = [], a = {}){
        Ye(this, "_rulesWithParentScopes"), this._mainRule = r, this._children = a, this._rulesWithParentScopes = e;
    }
    static _cmpBySpecificity(r, e) {
        if (r.scopeDepth !== e.scopeDepth) return e.scopeDepth - r.scopeDepth;
        let a = 0, s = 0;
        for(; r.parentScopes[a] === ">" && a++, e.parentScopes[s] === ">" && s++, !(a >= r.parentScopes.length || s >= e.parentScopes.length);){
            const l = e.parentScopes[s].length - r.parentScopes[a].length;
            if (l !== 0) return l;
            a++, s++;
        }
        return e.parentScopes.length - r.parentScopes.length;
    }
    match(r) {
        if (r !== "") {
            let a = r.indexOf("."), s, l;
            if (a === -1 ? (s = r, l = "") : (s = r.substring(0, a), l = r.substring(a + 1)), this._children.hasOwnProperty(s)) return this._children[s].match(l);
        }
        const e = this._rulesWithParentScopes.concat(this._mainRule);
        return e.sort(vhe._cmpBySpecificity), e;
    }
    insert(r, e, a, s, l, u) {
        if (e === "") {
            this._doInsertHere(r, a, s, l, u);
            return;
        }
        let p = e.indexOf("."), m, b;
        p === -1 ? (m = e, b = "") : (m = e.substring(0, p), b = e.substring(p + 1));
        let g;
        this._children.hasOwnProperty(m) ? g = this._children[m] : (g = new vhe(this._mainRule.clone(), NRe.cloneArr(this._rulesWithParentScopes)), this._children[m] = g), g.insert(r + 1, b, a, s, l, u);
    }
    _doInsertHere(r, e, a, s, l) {
        if (e === null) {
            this._mainRule.acceptOverwrite(r, a, s, l);
            return;
        }
        for(let u = 0, p = this._rulesWithParentScopes.length; u < p; u++){
            let m = this._rulesWithParentScopes[u];
            if (dDt(m.parentScopes, e) === 0) {
                m.acceptOverwrite(r, a, s, l);
                return;
            }
        }
        a === -1 && (a = this._mainRule.fontStyle), s === 0 && (s = this._mainRule.foreground), l === 0 && (l = this._mainRule.background), this._rulesWithParentScopes.push(new NRe(r, e, a, s, l));
    }
}, i(vhe, "_ThemeTrieElement"), vhe), OB = (ok = class {
    static toBinaryStr(r) {
        return r.toString(2).padStart(32, "0");
    }
    static print(r) {
        const e = ok.getLanguageId(r), a = ok.getTokenType(r), s = ok.getFontStyle(r), l = ok.getForeground(r), u = ok.getBackground(r);
        console.log({
            languageId: e,
            tokenType: a,
            fontStyle: s,
            foreground: l,
            background: u
        });
    }
    static getLanguageId(r) {
        return (r & 255) >>> 0;
    }
    static getTokenType(r) {
        return (r & 768) >>> 8;
    }
    static containsBalancedBrackets(r) {
        return (r & 1024) !== 0;
    }
    static getFontStyle(r) {
        return (r & 30720) >>> 11;
    }
    static getForeground(r) {
        return (r & 16744448) >>> 15;
    }
    static getBackground(r) {
        return (r & 4278190080) >>> 24;
    }
    static set(r, e, a, s, l, u, p) {
        let m = ok.getLanguageId(r), b = ok.getTokenType(r), g = ok.containsBalancedBrackets(r) ? 1 : 0, _ = ok.getFontStyle(r), v = ok.getForeground(r), x = ok.getBackground(r);
        return e !== 0 && (m = e), a !== 8 && (b = a), s !== null && (g = s ? 1 : 0), l !== -1 && (_ = l), u !== 0 && (v = u), p !== 0 && (x = p), (m << 0 | b << 8 | g << 10 | _ << 11 | v << 15 | x << 24) >>> 0;
    }
}, i(ok, "_EncodedTokenMetadata"), ok), i(r5i, "toOptionalTokenType"), i(i5i, "fromOptionalTokenType"), i(ghe, "createMatchers"), i(fDt, "isIdentifier"), i(ukr, "newTokenizer"), i(hDt, "disposeOnigString"), VJ = (IDt = class {
    constructor(r){
        this.scopeName = r;
    }
    toKey() {
        return this.scopeName;
    }
}, i(IDt, "TopLevelRuleReference"), IDt), xkr = (NDt = class {
    constructor(r, e){
        this.scopeName = r, this.ruleName = e;
    }
    toKey() {
        return `${this.scopeName}#${this.ruleName}`;
    }
}, i(NDt, "TopLevelRepositoryRuleReference"), NDt), Ckr = (MDt = class {
    constructor(){
        Ye(this, "_references", []), Ye(this, "_seenReferenceKeys", new Set), Ye(this, "visitedRule", new Set);
    }
    get references() {
        return this._references;
    }
    add(r) {
        const e = r.toKey();
        this._seenReferenceKeys.has(e) || (this._seenReferenceKeys.add(e), this._references.push(r));
    }
}, i(MDt, "ExternalReferenceCollector"), MDt), Skr = (RDt = class {
    constructor(r, e){
        Ye(this, "seenFullScopeRequests", new Set), Ye(this, "seenPartialScopeRequests", new Set), Ye(this, "Q"), this.repo = r, this.initialScopeName = e, this.seenFullScopeRequests.add(this.initialScopeName), this.Q = [
            new VJ(this.initialScopeName)
        ];
    }
    processQueue() {
        const r = this.Q;
        this.Q = [];
        const e = new Ckr;
        for (const a of r)dkr(a, this.initialScopeName, this.repo, e);
        for (const a of e.references)if (a instanceof VJ) {
            if (this.seenFullScopeRequests.has(a.scopeName)) continue;
            this.seenFullScopeRequests.add(a.scopeName), this.Q.push(a);
        } else {
            if (this.seenFullScopeRequests.has(a.scopeName) || this.seenPartialScopeRequests.has(a.toKey())) continue;
            this.seenPartialScopeRequests.add(a.toKey()), this.Q.push(a);
        }
    }
}, i(RDt, "ScopeDependencyProcessor"), RDt), i(dkr, "collectReferencesOfReference"), i(ARe, "collectExternalReferencesInTopLevelRepositoryRule"), i(bhe, "collectExternalReferencesInTopLevelRule"), i(yhe, "collectExternalReferencesInRules"), Ekr = (PDt = class {
    constructor(){
        Ye(this, "kind", 0);
    }
}, i(PDt, "BaseReference"), PDt), Akr = (jDt = class {
    constructor(){
        Ye(this, "kind", 1);
    }
}, i(jDt, "SelfReference"), jDt), Tkr = (LDt = class {
    constructor(r){
        Ye(this, "kind", 2), this.ruleName = r;
    }
}, i(LDt, "RelativeReference"), LDt), $kr = (DDt = class {
    constructor(r){
        Ye(this, "kind", 3), this.scopeName = r;
    }
}, i(DDt, "TopLevelReference"), DDt), Ikr = (FDt = class {
    constructor(r, e){
        Ye(this, "kind", 4), this.scopeName = r, this.ruleName = e;
    }
}, i(FDt, "TopLevelRepositoryReference"), FDt), i(gDt, "parseInclude"), Nkr = /\\(\d+)/, ODt = /\\(\d+)/g, s5i = Symbol("RuleId"), Mkr = -1, zDt = -2, i(a5i, "ruleIdFromNumber"), i(o5i, "ruleIdToNumber"), KJ = (BDt = class {
    constructor(r, e, a, s){
        Ye(this, "$location"), Ye(this, "id"), Ye(this, "_nameIsCapturing"), Ye(this, "_name"), Ye(this, "_contentNameIsCapturing"), Ye(this, "_contentName"), this.$location = r, this.id = e, this._name = a || null, this._nameIsCapturing = _he.hasCaptures(this._name), this._contentName = s || null, this._contentNameIsCapturing = _he.hasCaptures(this._contentName);
    }
    get debugName() {
        const r = this.$location ? `${lDt(this.$location.filename)}:${this.$location.line}` : "unknown";
        return `${this.constructor.name}#${this.id} @ ${r}`;
    }
    getName(r, e) {
        return !this._nameIsCapturing || this._name === null || r === null || e === null ? this._name : _he.replaceCaptures(this._name, r, e);
    }
    getContentName(r, e) {
        return !this._contentNameIsCapturing || this._contentName === null ? this._contentName : _he.replaceCaptures(this._contentName, r, e);
    }
}, i(BDt, "Rule"), BDt), Rkr = (qDt = class extends KJ {
    constructor(r, e, a, s, l){
        super(r, e, a, s), Ye(this, "retokenizeCapturedWithRuleId"), this.retokenizeCapturedWithRuleId = l;
    }
    dispose() {}
    collectPatterns(r, e) {
        throw new Error("Not supported!");
    }
    compile(r, e) {
        throw new Error("Not supported!");
    }
    compileAG(r, e, a, s) {
        throw new Error("Not supported!");
    }
}, i(qDt, "CaptureRule"), qDt), Pkr = (UDt = class extends KJ {
    constructor(r, e, a, s, l){
        super(r, e, a, null), Ye(this, "_match"), Ye(this, "captures"), Ye(this, "_cachedCompiledPatterns"), this._match = new XJ(s, this.id), this.captures = l, this._cachedCompiledPatterns = null;
    }
    dispose() {
        this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
    }
    get debugMatchRegExp() {
        return `${this._match.source}`;
    }
    collectPatterns(r, e) {
        e.push(this._match);
    }
    compile(r, e) {
        return this._getCachedCompiledPatterns(r).compile(r);
    }
    compileAG(r, e, a, s) {
        return this._getCachedCompiledPatterns(r).compileAG(r, a, s);
    }
    _getCachedCompiledPatterns(r) {
        return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new YJ, this.collectPatterns(r, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
    }
}, i(UDt, "MatchRule"), UDt), WDt = (GDt = class extends KJ {
    constructor(r, e, a, s, l){
        super(r, e, a, s), Ye(this, "hasMissingPatterns"), Ye(this, "patterns"), Ye(this, "_cachedCompiledPatterns"), this.patterns = l.patterns, this.hasMissingPatterns = l.hasMissingPatterns, this._cachedCompiledPatterns = null;
    }
    dispose() {
        this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
    }
    collectPatterns(r, e) {
        for (const a of this.patterns)r.getRule(a).collectPatterns(r, e);
    }
    compile(r, e) {
        return this._getCachedCompiledPatterns(r).compile(r);
    }
    compileAG(r, e, a, s) {
        return this._getCachedCompiledPatterns(r).compileAG(r, a, s);
    }
    _getCachedCompiledPatterns(r) {
        return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new YJ, this.collectPatterns(r, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
    }
}, i(GDt, "IncludeOnlyRule"), GDt), MRe = (HDt = class extends KJ {
    constructor(r, e, a, s, l, u, p, m, b, g){
        super(r, e, a, s), Ye(this, "_begin"), Ye(this, "beginCaptures"), Ye(this, "_end"), Ye(this, "endHasBackReferences"), Ye(this, "endCaptures"), Ye(this, "applyEndPatternLast"), Ye(this, "hasMissingPatterns"), Ye(this, "patterns"), Ye(this, "_cachedCompiledPatterns"), this._begin = new XJ(l, this.id), this.beginCaptures = u, this._end = new XJ(p || "\uFFFF", -1), this.endHasBackReferences = this._end.hasBackReferences, this.endCaptures = m, this.applyEndPatternLast = b || !1, this.patterns = g.patterns, this.hasMissingPatterns = g.hasMissingPatterns, this._cachedCompiledPatterns = null;
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
    getEndWithResolvedBackReferences(r, e) {
        return this._end.resolveBackReferences(r, e);
    }
    collectPatterns(r, e) {
        e.push(this._begin);
    }
    compile(r, e) {
        return this._getCachedCompiledPatterns(r, e).compile(r);
    }
    compileAG(r, e, a, s) {
        return this._getCachedCompiledPatterns(r, e).compileAG(r, a, s);
    }
    _getCachedCompiledPatterns(r, e) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new YJ;
            for (const a of this.patterns)r.getRule(a).collectPatterns(r, this._cachedCompiledPatterns);
            this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
        }
        return this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, e) : this._cachedCompiledPatterns.setSource(0, e)), this._cachedCompiledPatterns;
    }
}, i(HDt, "BeginEndRule"), HDt), xhe = (ZDt = class extends KJ {
    constructor(r, e, a, s, l, u, p, m, b){
        super(r, e, a, s), Ye(this, "_begin"), Ye(this, "beginCaptures"), Ye(this, "whileCaptures"), Ye(this, "_while"), Ye(this, "whileHasBackReferences"), Ye(this, "hasMissingPatterns"), Ye(this, "patterns"), Ye(this, "_cachedCompiledPatterns"), Ye(this, "_cachedCompiledWhilePatterns"), this._begin = new XJ(l, this.id), this.beginCaptures = u, this.whileCaptures = m, this._while = new XJ(p, zDt), this.whileHasBackReferences = this._while.hasBackReferences, this.patterns = b.patterns, this.hasMissingPatterns = b.hasMissingPatterns, this._cachedCompiledPatterns = null, this._cachedCompiledWhilePatterns = null;
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
    getWhileWithResolvedBackReferences(r, e) {
        return this._while.resolveBackReferences(r, e);
    }
    collectPatterns(r, e) {
        e.push(this._begin);
    }
    compile(r, e) {
        return this._getCachedCompiledPatterns(r).compile(r);
    }
    compileAG(r, e, a, s) {
        return this._getCachedCompiledPatterns(r).compileAG(r, a, s);
    }
    _getCachedCompiledPatterns(r) {
        if (!this._cachedCompiledPatterns) {
            this._cachedCompiledPatterns = new YJ;
            for (const e of this.patterns)r.getRule(e).collectPatterns(r, this._cachedCompiledPatterns);
        }
        return this._cachedCompiledPatterns;
    }
    compileWhile(r, e) {
        return this._getCachedCompiledWhilePatterns(r, e).compile(r);
    }
    compileWhileAG(r, e, a, s) {
        return this._getCachedCompiledWhilePatterns(r, e).compileAG(r, a, s);
    }
    _getCachedCompiledWhilePatterns(r, e) {
        return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new YJ, this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, e || "\uFFFF"), this._cachedCompiledWhilePatterns;
    }
}, i(ZDt, "BeginWhileRule"), ZDt), VDt = (E1 = class {
    static createCaptureRule(r, e, a, s, l) {
        return r.registerRule((u)=>new Rkr(e, u, a, s, l));
    }
    static getCompiledRuleId(r, e, a) {
        return r.id || e.registerRule((s)=>{
            if (r.id = s, r.match) return new Pkr(r.$vscodeTextmateLocation, r.id, r.name, r.match, E1._compileCaptures(r.captures, e, a));
            if (typeof r.begin > "u") {
                r.repository && (a = cDt({}, a, r.repository));
                let l = r.patterns;
                return typeof l > "u" && r.include && (l = [
                    {
                        include: r.include
                    }
                ]), new WDt(r.$vscodeTextmateLocation, r.id, r.name, r.contentName, E1._compilePatterns(l, e, a));
            }
            return r.while ? new xhe(r.$vscodeTextmateLocation, r.id, r.name, r.contentName, r.begin, E1._compileCaptures(r.beginCaptures || r.captures, e, a), r.while, E1._compileCaptures(r.whileCaptures || r.captures, e, a), E1._compilePatterns(r.patterns, e, a)) : new MRe(r.$vscodeTextmateLocation, r.id, r.name, r.contentName, r.begin, E1._compileCaptures(r.beginCaptures || r.captures, e, a), r.end, E1._compileCaptures(r.endCaptures || r.captures, e, a), r.applyEndPatternLast, E1._compilePatterns(r.patterns, e, a));
        }), r.id;
    }
    static _compileCaptures(r, e, a) {
        let s = [];
        if (r) {
            let l = 0;
            for(const u in r){
                if (u === "$vscodeTextmateLocation") continue;
                const p = parseInt(u, 10);
                p > l && (l = p);
            }
            for(let u = 0; u <= l; u++)s[u] = null;
            for(const u in r){
                if (u === "$vscodeTextmateLocation") continue;
                const p = parseInt(u, 10);
                let m = 0;
                r[u].patterns && (m = E1.getCompiledRuleId(r[u], e, a)), s[p] = E1.createCaptureRule(e, r[u].$vscodeTextmateLocation, r[u].name, r[u].contentName, m);
            }
        }
        return s;
    }
    static _compilePatterns(r, e, a) {
        let s = [];
        if (r) for(let l = 0, u = r.length; l < u; l++){
            const p = r[l];
            let m = -1;
            if (p.include) {
                const b = gDt(p.include);
                switch(b.kind){
                    case 0:
                    case 1:
                        m = E1.getCompiledRuleId(a[p.include], e, a);
                        break;
                    case 2:
                        let g = a[b.ruleName];
                        g && (m = E1.getCompiledRuleId(g, e, a));
                        break;
                    case 3:
                    case 4:
                        const _ = b.scopeName, v = b.kind === 4 ? b.ruleName : null, x = e.getExternalGrammar(_, a);
                        if (x) if (v) {
                            let C = x.repository[v];
                            C && (m = E1.getCompiledRuleId(C, e, x.repository));
                        } else m = E1.getCompiledRuleId(x.repository.$self, e, x.repository);
                        break;
                }
            } else m = E1.getCompiledRuleId(p, e, a);
            if (m !== -1) {
                const b = e.getRule(m);
                let g = !1;
                if ((b instanceof WDt || b instanceof MRe || b instanceof xhe) && b.hasMissingPatterns && b.patterns.length === 0 && (g = !0), g) continue;
                s.push(m);
            }
        }
        return {
            patterns: s,
            hasMissingPatterns: (r ? r.length : 0) !== s.length
        };
    }
}, i(E1, "_RuleFactory"), E1), XJ = (RRe = class {
    constructor(r, e){
        if (Ye(this, "source"), Ye(this, "ruleId"), Ye(this, "hasAnchor"), Ye(this, "hasBackReferences"), Ye(this, "_anchorCache"), r && typeof r == "string") {
            const a = r.length;
            let s = 0, l = [], u = !1;
            for(let p = 0; p < a; p++)if (r.charAt(p) === "\\" && p + 1 < a) {
                const b = r.charAt(p + 1);
                b === "z" ? (l.push(r.substring(s, p)), l.push("$(?!\\n)(?<!\\n)"), s = p + 2) : (b === "A" || b === "G") && (u = !0), p++;
            }
            this.hasAnchor = u, s === 0 ? this.source = r : (l.push(r.substring(s, a)), this.source = l.join(""));
        } else this.hasAnchor = !1, this.source = r;
        this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = e, typeof this.source == "string" ? this.hasBackReferences = Nkr.test(this.source) : this.hasBackReferences = !1;
    }
    clone() {
        return new RRe(this.source, this.ruleId);
    }
    setSource(r) {
        this.source !== r && (this.source = r, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
    }
    resolveBackReferences(r, e) {
        if (typeof this.source != "string") throw new Error("This method should only be called if the source is a string");
        let a = e.map((s)=>r.substring(s.start, s.end));
        return ODt.lastIndex = 0, this.source.replace(ODt, (s, l)=>mDt(a[parseInt(l, 10)] || ""));
    }
    _buildAnchorCache() {
        if (typeof this.source != "string") throw new Error("This method should only be called if the source is a string");
        let r = [], e = [], a = [], s = [], l, u, p, m;
        for(l = 0, u = this.source.length; l < u; l++)p = this.source.charAt(l), r[l] = p, e[l] = p, a[l] = p, s[l] = p, p === "\\" && l + 1 < u && (m = this.source.charAt(l + 1), m === "A" ? (r[l + 1] = "\uFFFF", e[l + 1] = "\uFFFF", a[l + 1] = "A", s[l + 1] = "A") : m === "G" ? (r[l + 1] = "\uFFFF", e[l + 1] = "G", a[l + 1] = "\uFFFF", s[l + 1] = "G") : (r[l + 1] = m, e[l + 1] = m, a[l + 1] = m, s[l + 1] = m), l++);
        return {
            A0_G0: r.join(""),
            A0_G1: e.join(""),
            A1_G0: a.join(""),
            A1_G1: s.join("")
        };
    }
    resolveAnchors(r, e) {
        return !this.hasAnchor || !this._anchorCache || typeof this.source != "string" ? this.source : r ? e ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : e ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0;
    }
}, i(RRe, "_RegExpSource"), RRe), YJ = (KDt = class {
    constructor(){
        Ye(this, "_items"), Ye(this, "_hasAnchors"), Ye(this, "_cached"), Ye(this, "_anchorCache"), this._items = [], this._hasAnchors = !1, this._cached = null, this._anchorCache = {
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
    push(r) {
        this._items.push(r), this._hasAnchors = this._hasAnchors || r.hasAnchor;
    }
    unshift(r) {
        this._items.unshift(r), this._hasAnchors = this._hasAnchors || r.hasAnchor;
    }
    length() {
        return this._items.length;
    }
    setSource(r, e) {
        this._items[r].source !== e && (this._disposeCaches(), this._items[r].setSource(e));
    }
    compile(r) {
        if (!this._cached) {
            let e = this._items.map((a)=>a.source);
            this._cached = new YDt(r, e, this._items.map((a)=>a.ruleId));
        }
        return this._cached;
    }
    compileAG(r, e, a) {
        return this._hasAnchors ? e ? a ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(r, e, a)), this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(r, e, a)), this._anchorCache.A1_G0) : a ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(r, e, a)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(r, e, a)), this._anchorCache.A0_G0) : this.compile(r);
    }
    _resolveAnchors(r, e, a) {
        let s = this._items.map((l)=>l.resolveAnchors(e, a));
        return new YDt(r, s, this._items.map((l)=>l.ruleId));
    }
}, i(KDt, "RegExpSourceList"), KDt), YDt = (XDt = class {
    constructor(r, e, a){
        Ye(this, "scanner"), this.regExps = e, this.rules = a, this.scanner = r.createOnigScanner(e);
    }
    dispose() {
        typeof this.scanner.dispose == "function" && this.scanner.dispose();
    }
    toString() {
        const r = [];
        for(let e = 0, a = this.rules.length; e < a; e++)r.push("   - " + this.rules[e] + ": " + this.regExps[e]);
        return r.join(`
`);
    }
    findNextMatchSync(r, e, a) {
        const s = this.scanner.findNextMatchSync(r, e, a);
        return s ? {
            ruleId: this.rules[s.index],
            captureIndices: s.captureIndices
        } : null;
    }
}, i(XDt, "CompiledRule"), XDt), PRe = (JDt = class {
    constructor(r, e){
        this.languageId = r, this.tokenType = e;
    }
}, i(JDt, "BasicScopeAttributes"), JDt), jkr = (zB = class {
    constructor(r, e){
        Ye(this, "_defaultAttributes"), Ye(this, "_embeddedLanguagesMatcher"), Ye(this, "_getBasicScopeAttributes", new CDt((a)=>{
            const s = this._scopeToLanguage(a), l = this._toStandardTokenType(a);
            return new PRe(s, l);
        })), this._defaultAttributes = new PRe(r, 8), this._embeddedLanguagesMatcher = new Lkr(Object.entries(e || {}));
    }
    getDefaultAttributes() {
        return this._defaultAttributes;
    }
    getBasicScopeAttributes(r) {
        return r === null ? zB._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(r);
    }
    _scopeToLanguage(r) {
        return this._embeddedLanguagesMatcher.match(r) || 0;
    }
    _toStandardTokenType(r) {
        const e = r.match(zB.STANDARD_TOKEN_TYPE_REGEXP);
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
}, i(zB, "_BasicScopeAttributesProvider"), Ye(zB, "_NULL_SCOPE_METADATA", new PRe(0, 0)), Ye(zB, "STANDARD_TOKEN_TYPE_REGEXP", /\b(comment|string|regex|meta\.embedded)\b/), zB), Lkr = (QDt = class {
    constructor(r){
        if (Ye(this, "values"), Ye(this, "scopesRegExp"), r.length === 0) this.values = null, this.scopesRegExp = null;
        else {
            this.values = new Map(r);
            const e = r.map(([a, s])=>mDt(a));
            e.sort(), e.reverse(), this.scopesRegExp = new RegExp(`^((${e.join(")|(")}))($|\\.)`, "");
        }
    }
    match(r) {
        if (!this.scopesRegExp) return;
        const e = r.match(this.scopesRegExp);
        if (e) return this.values.get(e[1]);
    }
}, i(QDt, "ScopeMatcher"), QDt), c5i = {
    InDebugMode: typeof process < "u" && !!process.env.VSCODE_TEXTMATE_DEBUG
}, eFt = !1, nFt = (tFt = class {
    constructor(r, e){
        this.stack = r, this.stoppedEarly = e;
    }
}, i(tFt, "TokenizeStringResult"), tFt), i(bDt, "_tokenizeString"), i(pkr, "_checkWhileConditions"), i(mkr, "matchRuleOrInjections"), i(fkr, "matchRule"), i(hkr, "matchInjections"), i(yDt, "prepareRuleSearch"), i(gkr, "prepareRuleWhileSearch"), i(wDt, "getFindOptions"), i(HJ, "handleCaptures"), Dkr = (rFt = class {
    constructor(r, e){
        Ye(this, "scopes"), Ye(this, "endPos"), this.scopes = r, this.endPos = e;
    }
}, i(rFt, "LocalStackElement"), rFt), i(bkr, "createGrammar"), i(_Dt, "collectInjections"), i(whe, "nameMatcher"), i(ykr, "scopesAreMatching"), Fkr = (iFt = class {
    constructor(r, e, a, s, l, u, p, m){
        if (Ye(this, "_rootId"), Ye(this, "_lastRuleId"), Ye(this, "_ruleId2desc"), Ye(this, "_includedGrammars"), Ye(this, "_grammarRepository"), Ye(this, "_grammar"), Ye(this, "_injections"), Ye(this, "_basicScopeAttributesProvider"), Ye(this, "_tokenTypeMatchers"), this._rootScopeName = r, this.balancedBracketSelectors = u, this._onigLib = m, this._basicScopeAttributesProvider = new jkr(a, s), this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [
            null
        ], this._includedGrammars = {}, this._grammarRepository = p, this._grammar = kDt(e, null), this._injections = null, this._tokenTypeMatchers = [], l) for (const b of Object.keys(l)){
            const g = ghe(b, whe);
            for (const _ of g)this._tokenTypeMatchers.push({
                matcher: _.matcher,
                type: l[b]
            });
        }
    }
    get themeProvider() {
        return this._grammarRepository;
    }
    dispose() {
        for (const r of this._ruleId2desc)r && r.dispose();
    }
    createOnigScanner(r) {
        return this._onigLib.createOnigScanner(r);
    }
    createOnigString(r) {
        return this._onigLib.createOnigString(r);
    }
    getMetadataForScope(r) {
        return this._basicScopeAttributesProvider.getBasicScopeAttributes(r);
    }
    _collectInjections() {
        const r = {
            lookup: i((l)=>l === this._rootScopeName ? this._grammar : this.getExternalGrammar(l), "lookup"),
            injections: i((l)=>this._grammarRepository.injections(l), "injections")
        }, e = [], a = this._rootScopeName, s = r.lookup(a);
        if (s) {
            const l = s.injections;
            if (l) for(let p in l)_Dt(e, p, l[p], this, s);
            const u = this._grammarRepository.injections(a);
            u && u.forEach((p)=>{
                const m = this.getExternalGrammar(p);
                if (m) {
                    const b = m.injectionSelector;
                    b && _Dt(e, b, m, this, m);
                }
            });
        }
        return e.sort((l, u)=>l.priority - u.priority), e;
    }
    getInjections() {
        return this._injections === null && (this._injections = this._collectInjections()), this._injections;
    }
    registerRule(r) {
        const e = ++this._lastRuleId, a = r(e);
        return this._ruleId2desc[e] = a, a;
    }
    getRule(r) {
        return this._ruleId2desc[r];
    }
    getExternalGrammar(r, e) {
        if (this._includedGrammars[r]) return this._includedGrammars[r];
        if (this._grammarRepository) {
            const a = this._grammarRepository.lookup(r);
            if (a) return this._includedGrammars[r] = kDt(a, e && e.$base), this._includedGrammars[r];
        }
    }
    tokenizeLine(r, e, a = 0) {
        const s = this._tokenize(r, e, !1, a);
        return {
            tokens: s.lineTokens.getResult(s.ruleStack, s.lineLength),
            ruleStack: s.ruleStack,
            stoppedEarly: s.stoppedEarly
        };
    }
    tokenizeLine2(r, e, a = 0) {
        const s = this._tokenize(r, e, !0, a);
        return {
            tokens: s.lineTokens.getBinaryResult(s.ruleStack, s.lineLength),
            ruleStack: s.ruleStack,
            stoppedEarly: s.stoppedEarly
        };
    }
    _tokenize(r, e, a, s) {
        this._rootId === -1 && (this._rootId = VDt.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository), this.getInjections());
        let l;
        if (!e || e === jRe.NULL) {
            l = !0;
            const g = this._basicScopeAttributesProvider.getDefaultAttributes(), _ = this.themeProvider.getDefaults(), v = OB.set(0, g.languageId, g.tokenType, null, _.fontStyle, _.foregroundId, _.backgroundId), x = this.getRule(this._rootId).getName(null, null);
            let C;
            x ? C = JJ.createRootAndLookUpScopeName(x, v, this) : C = JJ.createRoot("unknown", v), e = new jRe(null, this._rootId, -1, -1, !1, null, C, C);
        } else l = !1, e.reset();
        r = r + `
`;
        const u = this.createOnigString(r), p = u.content.length, m = new zkr(a, r, this._tokenTypeMatchers, this.balancedBracketSelectors), b = bDt(this, u, l, 0, e, m, !0, s);
        return hDt(u), {
            lineLength: p,
            lineTokens: m,
            ruleStack: b.stack,
            stoppedEarly: b.stoppedEarly
        };
    }
}, i(iFt, "Grammar"), iFt), i(kDt, "initGrammar"), JJ = (z4 = class {
    constructor(r, e, a){
        this.parent = r, this.scopePath = e, this.tokenAttributes = a;
    }
    static fromExtension(r, e) {
        let a = r, s = r?.scopePath ?? null;
        for (const l of e)s = $Re.push(s, l.scopeNames), a = new z4(a, s, l.encodedTokenAttributes);
        return a;
    }
    static createRoot(r, e) {
        return new z4(null, new $Re(null, r), e);
    }
    static createRootAndLookUpScopeName(r, e, a) {
        const s = a.getMetadataForScope(r), l = new $Re(null, r), u = a.themeProvider.themeMatch(l), p = z4.mergeAttributes(e, s, u);
        return new z4(null, l, p);
    }
    get scopeName() {
        return this.scopePath.scopeName;
    }
    toString() {
        return this.getScopeNames().join(" ");
    }
    equals(r) {
        return z4.equals(this, r);
    }
    static equals(r, e) {
        do {
            if (r === e || !r && !e) return !0;
            if (!r || !e || r.scopeName !== e.scopeName || r.tokenAttributes !== e.tokenAttributes) return !1;
            r = r.parent, e = e.parent;
        }while (!0)
    }
    static mergeAttributes(r, e, a) {
        let s = -1, l = 0, u = 0;
        return a !== null && (s = a.fontStyle, l = a.foregroundId, u = a.backgroundId), OB.set(r, e.languageId, e.tokenType, null, s, l, u);
    }
    pushAttributed(r, e) {
        if (r === null) return this;
        if (r.indexOf(" ") === -1) return z4._pushAttributed(this, r, e);
        const a = r.split(/ /g);
        let s = this;
        for (const l of a)s = z4._pushAttributed(s, l, e);
        return s;
    }
    static _pushAttributed(r, e, a) {
        const s = a.getMetadataForScope(e), l = r.scopePath.push(e), u = a.themeProvider.themeMatch(l), p = z4.mergeAttributes(r.tokenAttributes, s, u);
        return new z4(r, l, p);
    }
    getScopeNames() {
        return this.scopePath.getSegments();
    }
    getExtensionIfDefined(r) {
        const e = [];
        let a = this;
        for(; a && a !== r;)e.push({
            encodedTokenAttributes: a.tokenAttributes,
            scopeNames: a.scopePath.getExtensionIfDefined(a.parent?.scopePath ?? null)
        }), a = a.parent;
        return a === r ? e.reverse() : void 0;
    }
}, i(z4, "_AttributedScopeStack"), z4), jRe = (OS = class {
    constructor(r, e, a, s, l, u, p, m){
        Ye(this, "_stackElementBrand"), Ye(this, "_enterPos"), Ye(this, "_anchorPos"), Ye(this, "depth"), this.parent = r, this.ruleId = e, this.beginRuleCapturedEOL = l, this.endRule = u, this.nameScopesList = p, this.contentNameScopesList = m, this.depth = this.parent ? this.parent.depth + 1 : 1, this._enterPos = a, this._anchorPos = s;
    }
    equals(r) {
        return r === null ? !1 : OS._equals(this, r);
    }
    static _equals(r, e) {
        return r === e ? !0 : this._structuralEquals(r, e) ? JJ.equals(r.contentNameScopesList, e.contentNameScopesList) : !1;
    }
    static _structuralEquals(r, e) {
        do {
            if (r === e || !r && !e) return !0;
            if (!r || !e || r.depth !== e.depth || r.ruleId !== e.ruleId || r.endRule !== e.endRule) return !1;
            r = r.parent, e = e.parent;
        }while (!0)
    }
    clone() {
        return this;
    }
    static _reset(r) {
        for(; r;)r._enterPos = -1, r._anchorPos = -1, r = r.parent;
    }
    reset() {
        OS._reset(this);
    }
    pop() {
        return this.parent;
    }
    safePop() {
        return this.parent ? this.parent : this;
    }
    push(r, e, a, s, l, u, p) {
        return new OS(this, r, e, a, s, l, u, p);
    }
    getEnterPos() {
        return this._enterPos;
    }
    getAnchorPos() {
        return this._anchorPos;
    }
    getRule(r) {
        return r.getRule(this.ruleId);
    }
    toString() {
        const r = [];
        return this._writeString(r, 0), "[" + r.join(",") + "]";
    }
    _writeString(r, e) {
        return this.parent && (e = this.parent._writeString(r, e)), r[e++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`, e;
    }
    withContentNameScopesList(r) {
        return this.contentNameScopesList === r ? this : this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, r);
    }
    withEndRule(r) {
        return this.endRule === r ? this : new OS(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, r, this.nameScopesList, this.contentNameScopesList);
    }
    hasSameRuleAs(r) {
        let e = this;
        for(; e && e._enterPos === r._enterPos;){
            if (e.ruleId === r.ruleId) return !0;
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
    static pushFrame(r, e) {
        const a = JJ.fromExtension(r?.nameScopesList ?? null, e.nameScopesList);
        return new OS(r, e.ruleId, e.enterPos ?? -1, e.anchorPos ?? -1, e.beginRuleCapturedEOL, e.endRule, a, JJ.fromExtension(a, e.contentNameScopesList));
    }
}, i(OS, "_StateStackImpl"), Ye(OS, "NULL", new OS(null, 0, 0, 0, !1, null, null, null)), OS), Okr = (aFt = class {
    constructor(r, e){
        Ye(this, "balancedBracketScopes"), Ye(this, "unbalancedBracketScopes"), Ye(this, "allowAny", !1), this.balancedBracketScopes = r.flatMap((a)=>a === "*" ? (this.allowAny = !0, []) : ghe(a, whe).map((s)=>s.matcher)), this.unbalancedBracketScopes = e.flatMap((a)=>ghe(a, whe).map((s)=>s.matcher));
    }
    get matchesAlways() {
        return this.allowAny && this.unbalancedBracketScopes.length === 0;
    }
    get matchesNever() {
        return this.balancedBracketScopes.length === 0 && !this.allowAny;
    }
    match(r) {
        for (const e of this.unbalancedBracketScopes)if (e(r)) return !1;
        for (const e of this.balancedBracketScopes)if (e(r)) return !0;
        return this.allowAny;
    }
}, i(aFt, "BalancedBracketSelectors"), aFt), zkr = (oFt = class {
    constructor(r, e, a, s){
        Ye(this, "_emitBinaryTokens"), Ye(this, "_lineText"), Ye(this, "_tokens"), Ye(this, "_binaryTokens"), Ye(this, "_lastTokenEndIndex"), Ye(this, "_tokenTypeOverrides"), this.balancedBracketSelectors = s, this._emitBinaryTokens = r, this._tokenTypeOverrides = a, this._lineText = null, this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0;
    }
    produce(r, e) {
        this.produceFromScopes(r.contentNameScopesList, e);
    }
    produceFromScopes(r, e) {
        if (this._lastTokenEndIndex >= e) return;
        if (this._emitBinaryTokens) {
            let s = r?.tokenAttributes ?? 0, l = !1;
            if (this.balancedBracketSelectors?.matchesAlways && (l = !0), this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
                const u = r?.getScopeNames() ?? [];
                for (const p of this._tokenTypeOverrides)p.matcher(u) && (s = OB.set(s, 0, p.type, null, -1, 0, 0));
                this.balancedBracketSelectors && (l = this.balancedBracketSelectors.match(u));
            }
            if (l && (s = OB.set(s, 0, 8, l, -1, 0, 0)), this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === s) {
                this._lastTokenEndIndex = e;
                return;
            }
            this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(s), this._lastTokenEndIndex = e;
            return;
        }
        const a = r?.getScopeNames() ?? [];
        this._tokens.push({
            startIndex: this._lastTokenEndIndex,
            endIndex: e,
            scopes: a
        }), this._lastTokenEndIndex = e;
    }
    getResult(r, e) {
        return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === e - 1 && this._tokens.pop(), this._tokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(r, e), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens;
    }
    getBinaryResult(r, e) {
        this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === e - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), this._binaryTokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(r, e), this._binaryTokens[this._binaryTokens.length - 2] = 0);
        const a = new Uint32Array(this._binaryTokens.length);
        for(let s = 0, l = this._binaryTokens.length; s < l; s++)a[s] = this._binaryTokens[s];
        return a;
    }
}, i(oFt, "LineTokens"), oFt), Bkr = (sFt = class {
    constructor(r, e){
        Ye(this, "_grammars", new Map), Ye(this, "_rawGrammars", new Map), Ye(this, "_injectionGrammars", new Map), Ye(this, "_theme"), this._onigLib = e, this._theme = r;
    }
    dispose() {
        for (const r of this._grammars.values())r.dispose();
    }
    setTheme(r) {
        this._theme = r;
    }
    getColorMap() {
        return this._theme.getColorMap();
    }
    addGrammar(r, e) {
        this._rawGrammars.set(r.scopeName, r), e && this._injectionGrammars.set(r.scopeName, e);
    }
    lookup(r) {
        return this._rawGrammars.get(r);
    }
    injections(r) {
        return this._injectionGrammars.get(r);
    }
    getDefaults() {
        return this._theme.getDefaults();
    }
    themeMatch(r) {
        return this._theme.match(r);
    }
    grammarForScopeName(r, e, a, s, l) {
        if (!this._grammars.has(r)) {
            let u = this._rawGrammars.get(r);
            if (!u) return null;
            this._grammars.set(r, bkr(r, u, e, a, s, l, this, this._onigLib));
        }
        return this._grammars.get(r);
    }
}, i(sFt, "SyncRegistry"), sFt), qkr = (cFt = class {
    constructor(r){
        Ye(this, "_options"), Ye(this, "_syncRegistry"), Ye(this, "_ensureGrammarCache"), this._options = r, this._syncRegistry = new Bkr(khe.createFromRawTheme(r.theme, r.colorMap), r.onigLib), this._ensureGrammarCache = new Map;
    }
    dispose() {
        this._syncRegistry.dispose();
    }
    setTheme(r, e) {
        this._syncRegistry.setTheme(khe.createFromRawTheme(r, e));
    }
    getColorMap() {
        return this._syncRegistry.getColorMap();
    }
    loadGrammarWithEmbeddedLanguages(r, e, a) {
        return this.loadGrammarWithConfiguration(r, e, {
            embeddedLanguages: a
        });
    }
    loadGrammarWithConfiguration(r, e, a) {
        return this._loadGrammar(r, e, a.embeddedLanguages, a.tokenTypes, new Okr(a.balancedBracketSelectors || [], a.unbalancedBracketSelectors || []));
    }
    loadGrammar(r) {
        return this._loadGrammar(r, 0, null, null, null);
    }
    _loadGrammar(r, e, a, s, l) {
        const u = new Skr(this._syncRegistry, r);
        for(; u.Q.length > 0;)u.Q.map((p)=>this._loadSingleGrammar(p.scopeName)), u.processQueue();
        return this._grammarForScopeName(r, e, a, s, l);
    }
    _loadSingleGrammar(r) {
        this._ensureGrammarCache.has(r) || (this._doLoadSingleGrammar(r), this._ensureGrammarCache.set(r, !0));
    }
    _doLoadSingleGrammar(r) {
        const e = this._options.loadGrammar(r);
        if (e) {
            const a = typeof this._options.getInjections == "function" ? this._options.getInjections(r) : void 0;
            this._syncRegistry.addGrammar(e, a);
        }
    }
    addGrammar(r, e = [], a = 0, s = null) {
        return this._syncRegistry.addGrammar(r, e), this._grammarForScopeName(r.scopeName, a, s);
    }
    _grammarForScopeName(r, e = 0, a = null, s = null, l = null) {
        return this._syncRegistry.grammarForScopeName(r, e, a, s, l);
    }
}, i(cFt, "Registry"), cFt), LRe = jRe.NULL;

}
