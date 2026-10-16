import { S, Se, bt, ve, we } from "./HVr.js";
import { C0 } from "./assert.js";
import { ac, bn } from "./async.js";
import { Ci, Sm } from "./color.js";
import { r2, v3 } from "./jsonContributionRegistry.js";
import { rt } from "./nls.js";
import { kn, rr } from "./platform_2.js";
import { Gpg, Pge } from "./qIc.js";
import { x } from "./tslib.es6.js";
var _gn, bgn, mLc, F2t, B2t, HXr, WXr;
export { B2t, F2t, HXr, WXr, _gn, bgn, mLc };
var __wakaru_NP_initialized = false;
export function NP() {
if (__wakaru_NP_initialized) return;
__wakaru_NP_initialized = true;
"use strict";
x(), C0(), bn(), Sm(), bt(), v3(), rr(), rt(), Se(), _gn = {
    ColorContribution: "base.contributions.colors"
}, bgn = "default", mLc = class extends we {
    constructor(){
        super(), this._onDidChangeSchema = this._register(new ve), this.onDidChangeSchema = this._onDidChangeSchema.event, this.colorSchema = {
            type: "object",
            properties: {}
        }, this.colorReferenceSchema = {
            type: "string",
            enum: [],
            enumDescriptions: []
        }, this.colorsById = {};
    }
    notifyThemeUpdate(e) {
        for (const t of Object.keys(this.colorsById)){
            const n = e.getColor(t);
            n && (this.colorSchema.properties[t].oneOf[0].defaultSnippets[0].body = `\${1:${Ci.Format.CSS.formatHexA(n, !0)}}`);
        }
        this._onDidChangeSchema.fire();
    }
    registerColor(e, t, n, i = !1, r) {
        if (this.colorsById[e]) return e;
        const o = {
            id: e,
            description: n,
            defaults: t,
            needsTransparency: i,
            deprecationMessage: r
        };
        this.colorsById[e] = o;
        const a = {
            type: "string",
            format: "color-hex",
            defaultSnippets: [
                {
                    body: "${1:#ff0000}"
                }
            ]
        };
        return r && (a.deprecationMessage = r), i && (a.pattern = "^#(?:(?<rgba>[0-9a-fA-f]{3}[0-9a-eA-E])|(?:[0-9a-fA-F]{6}(?:(?![fF]{2})(?:[0-9a-fA-F]{2}))))?$", a.patternErrorMessage = S(2539, null)), this.colorSchema.properties[e] = {
            description: n,
            oneOf: [
                a,
                {
                    type: "string",
                    const: bgn,
                    description: S(2540, null)
                }
            ]
        }, this.colorReferenceSchema.enum.push(e), this.colorReferenceSchema.enumDescriptions.push(n), this._onDidChangeSchema.fire(), e;
    }
    deregisterColor(e) {
        delete this.colorsById[e], delete this.colorSchema.properties[e];
        const t = this.colorReferenceSchema.enum.indexOf(e);
        t !== -1 && (this.colorReferenceSchema.enum.splice(t, 1), this.colorReferenceSchema.enumDescriptions.splice(t, 1)), this._onDidChangeSchema.fire();
    }
    getColors() {
        return Object.keys(this.colorsById).map((e)=>this.colorsById[e]);
    }
    resolveDefaultColor(e, t) {
        const n = this.colorsById[e];
        if (n?.defaults) {
            const i = Gpg(n.defaults) ? n.defaults[t.type] : n.defaults;
            return Pge(i, t);
        }
    }
    getColorSchema() {
        return this.colorSchema;
    }
    getColorReferenceSchema() {
        return this.colorReferenceSchema;
    }
    toString() {
        const e = (t, n)=>{
            const i = t.indexOf(".") === -1 ? 0 : 1, r = n.indexOf(".") === -1 ? 0 : 1;
            return i !== r ? i - r : t.localeCompare(n);
        };
        return Object.keys(this.colorsById).sort(e).map((t)=>`- \`${t}\`: ${this.colorsById[t].description}`).join(`
`);
    }
}, F2t = new mLc, kn.add(_gn.ColorContribution, F2t), B2t = "vscode://schemas/workbench-colors", HXr = kn.as(r2.JSONContribution), HXr.registerSchema(B2t, F2t.getColorSchema()), WXr = new ac(()=>HXr.notifySchemaChanged(B2t), 200), F2t.onDidChangeSchema(()=>{
    WXr.isScheduled() || WXr.schedule();
});

}
