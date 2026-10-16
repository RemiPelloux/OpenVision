import { J3n, mUf, pUf, uUf, wMw } from "./BA.js";
import { Yo, wf } from "./Iwo.js";
import { HMg, h_l } from "./Ycg.js";
import { Cw } from "./charCode.js";
import { _b, ls } from "./color.js";
import { Ap } from "./colorRegistry.js";
import { ori, sri } from "./colorUtils.js";
import { MD, ew } from "./editorColors.js";
import { aRi } from "./jsonErrorMessages.js";
import { $M } from "./json_2.js";
import { Bt } from "./nls.js";
import { Ku, Ul } from "./path_2.js";
import { Eo, Fi } from "./platform_2.js";
import { _Mw } from "./plistParser.js";
import { Lr } from "./resources.js";
import { yMw } from "./textMateScopeMatcher.js";
import { LI, NI, ov } from "./theme.js";
import { gMw } from "./themeCompatibility.js";
import { Dl } from "./themeService.js";
import { iRi, j9e, oRi } from "./tokenClassificationRegistry.js";
import { cUf } from "./tokenization.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { R6, SSg, kSg, nTe, rxi, ySg } from "./workbenchThemeService.js";
import { wri } from "./ze.js";
var fUf, PNi, CBl, TBl, GTe, vUf, EBl, _Uf;
export { CBl, EBl, GTe, PNi, TBl, _Uf, fUf, vUf };
var __wakaru_MNi_initialized = false;
export function MNi() {
if (__wakaru_MNi_initialized) return;
__wakaru_MNi_initialized = true;
"use strict";
E(), Ul(), $M(), _b(), R6(), gMw(), Bt(), To(), Lr(), Ap(), Dl(), Eo(), aRi(), _Mw(), oRi(), yMw(), Cw(), LI(), cUf(), fUf = Fi.as(sri.ColorContribution), PNi = HMg(), CBl = {
    comments: [
        "comment",
        "punctuation.definition.comment"
    ],
    strings: [
        "string",
        "meta.embedded.assembly"
    ],
    keywords: [
        "keyword - keyword.operator",
        "keyword.control",
        "storage",
        "storage.type"
    ],
    numbers: [
        "constant.numeric"
    ],
    types: [
        "entity.name.type",
        "entity.name.class",
        "support.type",
        "support.class"
    ],
    functions: [
        "entity.name.function",
        "support.function"
    ],
    variables: [
        "variable",
        "entity.name.variable"
    ]
}, TBl = class fmt {
    constructor(e, n, i){
        this.themeTokenColors = [], this.customTokenColors = [], this.colorMap = {}, this.customColorMap = {}, this.semanticTokenRules = [], this.customSemanticTokenRules = [], this.textMateThemingRules = void 0, this.tokenColorIndex = void 0, this.id = e, this.label = n, this.settingsId = i, this.isLoaded = !1;
    }
    get semanticHighlighting() {
        return this.customSemanticHighlighting !== void 0 ? this.customSemanticHighlighting : this.customSemanticHighlightingDeprecated !== void 0 ? this.customSemanticHighlightingDeprecated : !!this.themeSemanticHighlighting;
    }
    get tokenColors() {
        if (!this.textMateThemingRules) {
            let n = function(a) {
                a.scope && a.settings && (a.scope === "token.info-token" && (o = !0), i.push({
                    scope: a.scope,
                    settings: {
                        foreground: J3n(a.settings.foreground),
                        background: J3n(a.settings.background),
                        fontStyle: a.settings.fontStyle
                    }
                }));
            };
            var e = n;
            const i = [], r = this.getColor(MD) || this.getDefault(MD), s = this.getColor(ew) || this.getDefault(ew);
            i.push({
                settings: {
                    foreground: J3n(r),
                    background: J3n(s)
                }
            });
            let o = !1;
            this.themeTokenColors.forEach(n), this.customTokenColors.forEach(n), o || vUf[this.type].forEach(n), this.textMateThemingRules = i;
        }
        return this.textMateThemingRules;
    }
    getColor(e, n) {
        const i = this.customColorMap[e];
        if (i instanceof ls) return i;
        if (i === void 0) {
            const r = this.colorMap[e];
            if (r !== void 0) return r;
        }
        if (n !== !1) return this.getDefault(e);
    }
    getTokenStyle(e, n, i, r = !0, s = {}) {
        const o = {
            foreground: void 0,
            bold: void 0,
            underline: void 0,
            strikethrough: void 0,
            italic: void 0
        }, a = {
            foreground: -1,
            bold: -1,
            underline: -1,
            strikethrough: -1,
            italic: -1
        };
        function l(d, h, p) {
            h.foreground && a.foreground <= d && (a.foreground = d, o.foreground = h.foreground, s.foreground = p);
            for (const g of [
                "bold",
                "underline",
                "strikethrough",
                "italic"
            ]){
                const f = g, _ = h[f];
                _ !== void 0 && a[f] <= d && (a[f] = d, o[f] = _, s[f] = p);
            }
        }
        function c(d) {
            const h = d.selector.match(e, n, i);
            h >= 0 && l(h, d.style, d);
        }
        this.semanticTokenRules.forEach(c), this.customSemanticTokenRules.forEach(c);
        let u = !1;
        for(const d in a){
            const h = d;
            a[h] === -1 ? u = !0 : a[h] = Number.MAX_VALUE;
        }
        if (u) for (const d of PNi.getTokenStylingDefaultRules()){
            const h = d.selector.match(e, n, i);
            if (h >= 0) {
                let p;
                if (d.defaults.scopesToProbe && (p = this.resolveScopes(d.defaults.scopesToProbe), p && l(h, p, d.defaults.scopesToProbe)), !p && r !== !1) {
                    const g = d.defaults[this.type];
                    p = this.resolveTokenStyleValue(g), p && l(h, p, g);
                }
            }
        }
        return j9e.fromData(o);
    }
    resolveTokenStyleValue(e) {
        if (e !== void 0) {
            if (typeof e == "string") {
                const { type: n, modifiers: i, language: r } = h_l(e, "");
                return this.getTokenStyle(n, i, r);
            } else if (typeof e == "object") return e;
        }
    }
    getTokenColorIndex() {
        if (!this.tokenColorIndex) {
            const e = new _Uf;
            this.tokenColors.forEach((n)=>{
                e.add(n.settings.foreground), e.add(n.settings.background);
            }), this.semanticTokenRules.forEach((n)=>e.add(n.style.foreground)), PNi.getTokenStylingDefaultRules().forEach((n)=>{
                const i = n.defaults[this.type];
                i && typeof i == "object" && e.add(i.foreground);
            }), this.customSemanticTokenRules.forEach((n)=>e.add(n.style.foreground)), this.tokenColorIndex = e;
        }
        return this.tokenColorIndex;
    }
    get tokenColorMap() {
        return this.getTokenColorIndex().asArray();
    }
    getTokenStyleMetadata(e, n, i, r = !0, s = {}) {
        const { type: o, language: a } = h_l(e, i), l = this.getTokenStyle(o, n, a, r, s);
        if (l) return {
            foreground: this.getTokenColorIndex().get(l.foreground),
            bold: l.bold,
            underline: l.underline,
            strikethrough: l.strikethrough,
            italic: l.italic
        };
    }
    getTokenStylingRuleScope(e) {
        if (this.customSemanticTokenRules.indexOf(e) !== -1) return "setting";
        if (this.semanticTokenRules.indexOf(e) !== -1) return "theme";
    }
    getDefault(e) {
        return fUf.resolveDefaultColor(e, this);
    }
    resolveScopes(e, n) {
        this.themeTokenScopeMatchers || (this.themeTokenScopeMatchers = this.themeTokenColors.map(pUf)), this.customTokenScopeMatchers || (this.customTokenScopeMatchers = this.customTokenColors.map(pUf));
        for (const r of e){
            let s = function(h, p) {
                for(let g = 0; g < h.length; g++){
                    const f = h[g](r);
                    if (f >= 0) {
                        const _ = p[g], b = p[g].settings;
                        f >= l && b.foreground && (o = b.foreground, l = f, d = _), f >= c && Yo(b.fontStyle) && (a = b.fontStyle, c = f, u = _);
                    }
                }
            };
            var i = s;
            let o, a, l = -1, c = -1, u, d;
            if (s(this.themeTokenScopeMatchers, this.themeTokenColors), s(this.customTokenScopeMatchers, this.customTokenColors), o !== void 0 || a !== void 0) return n && (n.foreground = d, n.bold = n.italic = n.underline = n.strikethrough = u, n.scope = r), j9e.fromSettings(o, a);
        }
    }
    defines(e) {
        const n = this.customColorMap[e];
        return n instanceof ls ? !0 : n === void 0 && this.colorMap.hasOwnProperty(e);
    }
    setCustomizations(e) {
        this.setCustomColors(e.colorCustomizations), this.setCustomTokenColors(e.tokenColorCustomizations), this.setCustomSemanticTokenColors(e.semanticTokenColorCustomizations);
    }
    setCustomColors(e) {
        this.customColorMap = {}, this.overwriteCustomColors(e);
        const n = this.getThemeSpecificColors(e);
        wf(n) && this.overwriteCustomColors(n), this.tokenColorIndex = void 0, this.textMateThemingRules = void 0, this.customTokenScopeMatchers = void 0;
    }
    overwriteCustomColors(e) {
        for(const n in e){
            const i = e[n];
            i === ori ? this.customColorMap[n] = ori : typeof i == "string" && (this.customColorMap[n] = ls.fromHex(i));
        }
    }
    mergeGlassColorOverrides(e) {
        for (const [n, i] of e)this.customColorMap[n] = i;
    }
    syncGlassColorScheme(e) {
        this._colorSchemeOverride !== e && (this._colorSchemeOverride = e, this.clearCaches());
    }
    setCustomTokenColors(e) {
        this.customTokenColors = [], this.customSemanticHighlightingDeprecated = void 0, this.addCustomTokenColors(e);
        const n = this.getThemeSpecificColors(e);
        wf(n) && this.addCustomTokenColors(n), this.tokenColorIndex = void 0, this.textMateThemingRules = void 0, this.customTokenScopeMatchers = void 0;
    }
    setCustomSemanticTokenColors(e) {
        if (this.customSemanticTokenRules = [], this.customSemanticHighlighting = void 0, e) {
            this.customSemanticHighlighting = e.enabled, e.rules && this.readSemanticTokenRules(e.rules);
            const n = this.getThemeSpecificColors(e);
            wf(n) && (n.enabled !== void 0 && (this.customSemanticHighlighting = n.enabled), n.rules && this.readSemanticTokenRules(n.rules));
        }
        this.tokenColorIndex = void 0, this.textMateThemingRules = void 0;
    }
    isThemeScope(e) {
        return e.charAt(0) === ySg && e.charAt(e.length - 1) === SSg;
    }
    isThemeScopeMatch(e) {
        const n = e.charAt(0), i = e.charAt(e.length - 1), r = e.slice(0, -1), s = e.slice(1, -1), o = e.slice(1);
        return e === this.settingsId || this.settingsId.includes(s) && n === rxi && i === rxi || this.settingsId.startsWith(r) && i === rxi || this.settingsId.endsWith(o) && n === rxi;
    }
    getThemeSpecificColors(e) {
        let n;
        for(const i in e){
            const r = e[i];
            if (this.isThemeScope(i) && r instanceof Object && !Array.isArray(r)) {
                const s = i.match(kSg) || [];
                for (const o of s){
                    const a = o.substring(1, o.length - 1);
                    if (this.isThemeScopeMatch(a)) {
                        n || (n = {});
                        const l = r;
                        for(const c in l){
                            const u = n[c], d = l[c];
                            Array.isArray(u) && Array.isArray(d) ? n[c] = u.concat(d) : d && (n[c] = d);
                        }
                    }
                }
            }
        }
        return n;
    }
    readSemanticTokenRules(e) {
        for(const n in e)if (!this.isThemeScope(n)) try {
            const i = mUf(n, e[n]);
            i && this.customSemanticTokenRules.push(i);
        } catch  {}
    }
    addCustomTokenColors(e) {
        for(const n in CBl){
            const i = n, r = e[i];
            if (r) {
                const s = typeof r == "string" ? {
                    foreground: r
                } : r, o = CBl[i];
                for (const a of o)this.customTokenColors.push({
                    scope: a,
                    settings: s
                });
            }
        }
        if (Array.isArray(e.textMateRules)) for (const n of e.textMateRules)n.scope && n.settings && this.customTokenColors.push(n);
        e.semanticHighlighting !== void 0 && (this.customSemanticHighlightingDeprecated = e.semanticHighlighting);
    }
    ensureLoaded(e) {
        return this.isLoaded ? Promise.resolve(void 0) : this.load(e);
    }
    reload(e) {
        return this.load(e);
    }
    load(e) {
        if (!this.location) return Promise.resolve(void 0);
        this.themeTokenColors = [], this.clearCaches();
        const n = {
            colors: {},
            textMateRules: [],
            semanticTokenRules: [],
            semanticHighlighting: !1
        };
        return uUf(e, this.location, n).then((i)=>{
            this.isLoaded = !0, this.semanticTokenRules = n.semanticTokenRules, this.colorMap = n.colors, this.themeTokenColors = n.textMateRules, this.themeSemanticHighlighting = n.semanticHighlighting;
        });
    }
    clearCaches() {
        this.tokenColorIndex = void 0, this.textMateThemingRules = void 0, this.themeTokenScopeMatchers = void 0, this.customTokenScopeMatchers = void 0;
    }
    toStorage(e) {
        const n = {};
        for(const r in this.colorMap)n[r] = ls.Format.CSS.formatHexA(this.colorMap[r], !0);
        const i = JSON.stringify({
            id: this.id,
            label: this.label,
            settingsId: this.settingsId,
            themeTokenColors: this.themeTokenColors.map((r)=>({
                    settings: r.settings,
                    scope: r.scope
                })),
            semanticTokenRules: this.semanticTokenRules.map(iRi.toJSONObject),
            extensionData: nTe.toJSONObject(this.extensionData),
            themeSemanticHighlighting: this.themeSemanticHighlighting,
            colorMap: n,
            watch: this.watch
        });
        e.store(fmt.STORAGE_KEY, i, 0, 0);
    }
    get themeTypeSelector() {
        return this.classNames[0];
    }
    get classNames() {
        return this.id.split(" ");
    }
    get type() {
        if (this._colorSchemeOverride !== void 0) return this._colorSchemeOverride;
        switch(this.themeTypeSelector){
            case NI.VS:
                return ov.LIGHT;
            case NI.HC_BLACK:
                return ov.HIGH_CONTRAST_DARK;
            case NI.HC_LIGHT:
                return ov.HIGH_CONTRAST_LIGHT;
            default:
                return ov.DARK;
        }
    }
    static createUnloadedThemeForThemeType(e, n) {
        return fmt.createUnloadedTheme(wri(e), n);
    }
    static createUnloadedTheme(e, n) {
        const i = new fmt(e, "", "__" + e);
        if (i.isLoaded = !1, i.themeTokenColors = [], i.watch = !1, n) for(const r in n)i.colorMap[r] = ls.fromHex(n[r]);
        return i;
    }
    static createLoadedEmptyTheme(e, n) {
        const i = new fmt(e, "", n);
        return i.isLoaded = !0, i.themeTokenColors = [], i.watch = !1, i;
    }
    static createLoadedSyntaxComposite(e, n) {
        const i = n.id.replace(/\s+/g, "-"), r = new fmt(`${e.id} syntax-${i}`, e.label, e.settingsId);
        return r.description = e.description, r.isLoaded = !0, r.watch = !1, r.extensionData = e.extensionData, r.colorMap = {
            ...e.colorMap
        }, r.themeTokenColors = n.tokenColors.filter((s)=>s.scope !== void 0).map((s)=>({
                ...s,
                settings: {
                    ...s.settings
                }
            })), r.semanticTokenRules = [
            ...n.semanticTokenRules
        ], r.themeSemanticHighlighting = n.themeSemanticHighlighting, r._colorSchemeOverride = e._colorSchemeOverride, r.syntaxSourceSettingsId = n.settingsId, r;
    }
    static fromStorageData(e) {
        const n = e.get(fmt.STORAGE_KEY, 0);
        if (n) try {
            const i = JSON.parse(n), r = new fmt("", "", "");
            for(const s in i)switch(s){
                case "colorMap":
                    {
                        const o = i[s];
                        for(const a in o)r.colorMap[a] = ls.fromHex(o[a]);
                        break;
                    }
                case "themeTokenColors":
                case "id":
                case "label":
                case "settingsId":
                case "watch":
                case "themeSemanticHighlighting":
                    r[s] = i[s];
                    break;
                case "semanticTokenRules":
                    {
                        const o = i[s];
                        if (Array.isArray(o)) for (const a of o){
                            const l = iRi.fromJSONObject(PNi, a);
                            l && r.semanticTokenRules.push(l);
                        }
                        break;
                    }
                case "location":
                    break;
                case "extensionData":
                    r.extensionData = nTe.fromJSONObject(i.extensionData);
                    break;
            }
            return !r.id || !r.settingsId ? void 0 : r;
        } catch  {
            return;
        }
    }
    static fromExtensionTheme(e, n, i) {
        const r = e.uiTheme || "vs-dark", s = wMw(i.extensionId, e.path), o = `${r} ${s}`, a = e.label || Ku(e.path), l = e.id || a, c = new fmt(o, a, l);
        return c.description = e.description, c.watch = e._watch === !0, c.location = n, c.extensionData = i, c.isLoaded = !1, c;
    }
}, TBl.STORAGE_KEY = "colorThemeData", GTe = TBl, vUf = {
    light: [
        {
            scope: "token.info-token",
            settings: {
                foreground: "#316bcd"
            }
        },
        {
            scope: "token.warn-token",
            settings: {
                foreground: "#cd9731"
            }
        },
        {
            scope: "token.error-token",
            settings: {
                foreground: "#cd3131"
            }
        },
        {
            scope: "token.debug-token",
            settings: {
                foreground: "#800080"
            }
        }
    ],
    dark: [
        {
            scope: "token.info-token",
            settings: {
                foreground: "#6796e6"
            }
        },
        {
            scope: "token.warn-token",
            settings: {
                foreground: "#cd9731"
            }
        },
        {
            scope: "token.error-token",
            settings: {
                foreground: "#f44747"
            }
        },
        {
            scope: "token.debug-token",
            settings: {
                foreground: "#b267e6"
            }
        }
    ],
    hcLight: [
        {
            scope: "token.info-token",
            settings: {
                foreground: "#316bcd"
            }
        },
        {
            scope: "token.warn-token",
            settings: {
                foreground: "#cd9731"
            }
        },
        {
            scope: "token.error-token",
            settings: {
                foreground: "#cd3131"
            }
        },
        {
            scope: "token.debug-token",
            settings: {
                foreground: "#800080"
            }
        }
    ],
    hcDark: [
        {
            scope: "token.info-token",
            settings: {
                foreground: "#6796e6"
            }
        },
        {
            scope: "token.warn-token",
            settings: {
                foreground: "#008000"
            }
        },
        {
            scope: "token.error-token",
            settings: {
                foreground: "#FF0000"
            }
        },
        {
            scope: "token.debug-token",
            settings: {
                foreground: "#b267e6"
            }
        }
    ]
}, EBl = (t)=>-1, _Uf = class {
    constructor(){
        this._lastColorId = 0, this._id2color = [], this._color2id = Object.create(null);
    }
    add(t) {
        if (t = J3n(t), t === void 0) return 0;
        let e = this._color2id[t];
        return e || (e = ++this._lastColorId, this._color2id[t] = e, this._id2color[e] = t, e);
    }
    get(t) {
        if (t = J3n(t), t === void 0) return 0;
        const e = this._color2id[t];
        return e || (console.log(`Color ${t} not in index.`), 0);
    }
    asArray() {
        return this._id2color.slice(0);
    }
};

}
