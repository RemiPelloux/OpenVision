import { D, Gt, Qe, st, tt } from "./Iwo.js";
import { L3k, h_l, p_l } from "./Ycg.js";
import { Yu, qn } from "./async.js";
import { _b, ls } from "./color.js";
import { p7, sW } from "./jsonContributionRegistry.js";
import { Bt } from "./nls.js";
import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
var WMg, m_l, g_l, nRi, wlt, GMg, qMg, j9e, iRi, zMg, VMg, f_l, KMg, rRi, sRi, v_l, __l;
export { GMg, KMg, VMg, WMg, __l, f_l, g_l, iRi, j9e, m_l, nRi, qMg, rRi, sRi, v_l, wlt, zMg };
var __wakaru_oRi_initialized = false;
export function oRi() {
if (__wakaru_oRi_initialized) return;
__wakaru_oRi_initialized = true;
"use strict";
E(), qn(), _b(), Gt(), Qe(), Bt(), sW(), Eo(), WMg = "*", m_l = ":", g_l = ".", nRi = "\\w+[-_\\w+]*", wlt = `^${nRi}$`, GMg = `^(${nRi}|\\*)(\\${g_l}${nRi})*(${m_l}${nRi})?$`, qMg = "^(\\s*(italic|bold|underline|strikethrough))*\\s*$", j9e = class {
    constructor(t, e, n, i, r){
        this.foreground = t, this.bold = e, this.underline = n, this.strikethrough = i, this.italic = r;
    }
}, ((t)=>{
    function e(a) {
        return {
            _foreground: a.foreground === void 0 ? null : ls.Format.CSS.formatHexA(a.foreground, !0),
            _bold: a.bold === void 0 ? null : a.bold,
            _underline: a.underline === void 0 ? null : a.underline,
            _italic: a.italic === void 0 ? null : a.italic,
            _strikethrough: a.strikethrough === void 0 ? null : a.strikethrough
        };
    }
    t.toJSONObject = e;
    function n(a) {
        if (a) {
            const l = (u)=>typeof u == "boolean" ? u : void 0, c = (u)=>typeof u == "string" ? ls.fromHex(u) : void 0;
            return new t(c(a._foreground), l(a._bold), l(a._underline), l(a._strikethrough), l(a._italic));
        }
    }
    t.fromJSONObject = n;
    function i(a, l) {
        return a === l ? !0 : a !== void 0 && l !== void 0 && (a.foreground instanceof ls ? a.foreground.equals(l.foreground) : l.foreground === void 0) && a.bold === l.bold && a.underline === l.underline && a.strikethrough === l.strikethrough && a.italic === l.italic;
    }
    t.equals = i;
    function r(a) {
        return a instanceof t;
    }
    t.is = r;
    function s(a) {
        return new t(a.foreground, a.bold, a.underline, a.strikethrough, a.italic);
    }
    t.fromData = s;
    function o(a, l, c, u, d, h) {
        let p;
        if (a !== void 0 && (p = ls.fromHex(a)), l !== void 0) {
            c = h = u = d = !1;
            const g = /italic|bold|underline|strikethrough/g;
            let f;
            for(; f = g.exec(l);)switch(f[0]){
                case "bold":
                    c = !0;
                    break;
                case "italic":
                    h = !0;
                    break;
                case "underline":
                    u = !0;
                    break;
                case "strikethrough":
                    d = !0;
                    break;
            }
        }
        return new t(p, c, u, d, h);
    }
    t.fromSettings = o;
})(j9e || (j9e = {})), ((t)=>{
    function e(s, o) {
        if (o && typeof o._selector == "string" && o._style) {
            const a = j9e.fromJSONObject(o._style);
            if (a) try {
                return {
                    selector: s.parseTokenSelector(o._selector),
                    style: a
                };
            } catch  {}
        }
    }
    t.fromJSONObject = e;
    function n(s) {
        return {
            _selector: s.selector.id,
            _style: j9e.toJSONObject(s.style)
        };
    }
    t.toJSONObject = n;
    function i(s, o) {
        return s === o ? !0 : s !== void 0 && o !== void 0 && s.selector && o.selector && s.selector.id === o.selector.id && j9e.equals(s.style, o.style);
    }
    t.equals = i;
    function r(s) {
        return s && s.selector && typeof s.selector.id == "string" && j9e.is(s.style);
    }
    t.is = r;
})(iRi || (iRi = {})), zMg = {
    TokenClassificationContribution: "base.contributions.tokenClassification"
}, VMg = class extends st {
    constructor(){
        super(), this._onDidChangeSchema = this._register(new tt), this.onDidChangeSchema = this._onDidChangeSchema.event, this.currentTypeNumber = 0, this.currentModifierBit = 1, this.tokenStylingDefaultRules = [], this.tokenStylingSchema = {
            type: "object",
            properties: {},
            patternProperties: {
                [GMg]: p_l()
            },
            additionalProperties: !1,
            definitions: {
                style: {
                    type: "object",
                    description: D(2547, null),
                    properties: {
                        foreground: {
                            type: "string",
                            description: D(2548, null),
                            format: "color-hex",
                            default: "#ff0000"
                        },
                        background: {
                            type: "string",
                            deprecationMessage: D(2549, null)
                        },
                        fontStyle: {
                            type: "string",
                            description: D(2550, null),
                            pattern: qMg,
                            patternErrorMessage: D(2551, null),
                            defaultSnippets: [
                                {
                                    label: D(2552, null),
                                    bodyText: '""'
                                },
                                {
                                    body: "italic"
                                },
                                {
                                    body: "bold"
                                },
                                {
                                    body: "underline"
                                },
                                {
                                    body: "strikethrough"
                                },
                                {
                                    body: "italic bold"
                                },
                                {
                                    body: "italic underline"
                                },
                                {
                                    body: "italic strikethrough"
                                },
                                {
                                    body: "bold underline"
                                },
                                {
                                    body: "bold strikethrough"
                                },
                                {
                                    body: "underline strikethrough"
                                },
                                {
                                    body: "italic bold underline"
                                },
                                {
                                    body: "italic bold strikethrough"
                                },
                                {
                                    body: "italic underline strikethrough"
                                },
                                {
                                    body: "bold underline strikethrough"
                                },
                                {
                                    body: "italic bold underline strikethrough"
                                }
                            ]
                        },
                        bold: {
                            type: "boolean",
                            description: D(2553, null)
                        },
                        italic: {
                            type: "boolean",
                            description: D(2554, null)
                        },
                        underline: {
                            type: "boolean",
                            description: D(2555, null)
                        },
                        strikethrough: {
                            type: "boolean",
                            description: D(2556, null)
                        }
                    },
                    defaultSnippets: [
                        {
                            body: {
                                foreground: "${1:#FF0000}",
                                fontStyle: "${2:bold}"
                            }
                        }
                    ]
                }
            }
        }, this.tokenTypeById = Object.create(null), this.tokenModifierById = Object.create(null), this.typeHierarchy = Object.create(null);
    }
    registerTokenType(t, e, n, i) {
        if (!t.match(wlt)) throw new Error("Invalid token type id.");
        if (n && !n.match(wlt)) throw new Error("Invalid token super type id.");
        const s = {
            num: this.currentTypeNumber++,
            id: t,
            superType: n,
            description: e,
            deprecationMessage: i
        };
        this.tokenTypeById[t] = s;
        const o = p_l(e, i);
        this.tokenStylingSchema.properties[t] = o, this.typeHierarchy = Object.create(null);
    }
    registerTokenModifier(t, e, n) {
        if (!t.match(wlt)) throw new Error("Invalid token modifier id.");
        const i = this.currentModifierBit;
        this.currentModifierBit = this.currentModifierBit * 2;
        const r = {
            num: i,
            id: t,
            description: e,
            deprecationMessage: n
        };
        this.tokenModifierById[t] = r, this.tokenStylingSchema.properties[`*.${t}`] = p_l(e, n);
    }
    parseTokenSelector(t, e) {
        const n = h_l(t, e);
        return n.type ? {
            match: (i, r, s)=>{
                let o = 0;
                if (n.language !== void 0) {
                    if (n.language !== s) return -1;
                    o += 10;
                }
                if (n.type !== WMg) {
                    const l = this.getTypeHierarchy(i).indexOf(n.type);
                    if (l === -1) return -1;
                    o += 100 - l;
                }
                for (const a of n.modifiers)if (r.indexOf(a) === -1) return -1;
                return o + n.modifiers.length * 100;
            },
            id: `${[
                n.type,
                ...n.modifiers.sort()
            ].join(".")}${n.language !== void 0 ? ":" + n.language : ""}`
        } : {
            match: ()=>-1,
            id: "$invalid"
        };
    }
    registerTokenStyleDefault(t, e) {
        this.tokenStylingDefaultRules.push({
            selector: t,
            defaults: e
        });
    }
    deregisterTokenStyleDefault(t) {
        const e = t.id;
        this.tokenStylingDefaultRules = this.tokenStylingDefaultRules.filter((n)=>n.selector.id !== e);
    }
    deregisterTokenType(t) {
        delete this.tokenTypeById[t], delete this.tokenStylingSchema.properties[t], this.typeHierarchy = Object.create(null);
    }
    deregisterTokenModifier(t) {
        delete this.tokenModifierById[t], delete this.tokenStylingSchema.properties[`*.${t}`];
    }
    getTokenTypes() {
        return Object.keys(this.tokenTypeById).map((t)=>this.tokenTypeById[t]);
    }
    getTokenModifiers() {
        return Object.keys(this.tokenModifierById).map((t)=>this.tokenModifierById[t]);
    }
    getTokenStylingSchema() {
        return this.tokenStylingSchema;
    }
    getTokenStylingDefaultRules() {
        return this.tokenStylingDefaultRules;
    }
    getTypeHierarchy(t) {
        let e = this.typeHierarchy[t];
        if (!e) {
            this.typeHierarchy[t] = e = [
                t
            ];
            let n = this.tokenTypeById[t];
            for(; n && n.superType;)e.push(n.superType), n = this.tokenTypeById[n.superType];
        }
        return e;
    }
    toString() {
        const t = (e, n)=>{
            const i = e.indexOf(".") === -1 ? 0 : 1, r = n.indexOf(".") === -1 ? 0 : 1;
            return i !== r ? i - r : e.localeCompare(n);
        };
        return Object.keys(this.tokenTypeById).sort(t).map((e)=>`- \`${e}\`: ${this.tokenTypeById[e].description}`).join(`
`);
    }
}, f_l = m_l.charCodeAt(0), KMg = g_l.charCodeAt(0), rRi = L3k(), Fi.add(zMg.TokenClassificationContribution, rRi), sRi = "vscode://schemas/token-styling", v_l = Fi.as(p7.JSONContribution), v_l.registerSchema(sRi, rRi.getTokenStylingSchema()), __l = new Yu(()=>v_l.notifySchemaChanged(sRi), 200), rRi.onDidChangeSchema(()=>{
    __l.isScheduled() || __l.schedule();
});

}
