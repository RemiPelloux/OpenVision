import { D, Gt, Qe, st, tt } from "./Iwo.js";
import { YE } from "./assert.js";
import { Yu, qn } from "./async.js";
import { _b, ls } from "./color.js";
import { p7, sW } from "./jsonContributionRegistry.js";
import { Bt } from "./nls.js";
import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
import { WAy, _5e } from "./ze.js";
var sri, ori, k6d, Ngn, Lgn, wUo, CUo;
export { CUo, Lgn, Ngn, k6d, ori, sri, wUo };
var __wakaru_iB_initialized = false;
export function iB() {
if (__wakaru_iB_initialized) return;
__wakaru_iB_initialized = true;
"use strict";
E(), YE(), qn(), _b(), Gt(), sW(), Eo(), Bt(), Qe(), sri = {
    ColorContribution: "base.contributions.colors"
}, ori = "default", k6d = class extends st {
    constructor(){
        super(), this._onDidChangeSchema = this._register(new tt), this.onDidChangeSchema = this._onDidChangeSchema.event, this.colorSchema = {
            type: "object",
            properties: {}
        }, this.colorReferenceSchema = {
            type: "string",
            enum: [],
            enumDescriptions: []
        }, this.colorsById = {};
    }
    notifyThemeUpdate(t) {
        for (const e of Object.keys(this.colorsById)){
            const n = t.getColor(e);
            n && (this.colorSchema.properties[e].oneOf[0].defaultSnippets[0].body = `\${1:${ls.Format.CSS.formatHexA(n, !0)}}`);
        }
        this._onDidChangeSchema.fire();
    }
    registerColor(t, e, n, i = !1, r) {
        if (this.colorsById[t]) return t;
        const o = {
            id: t,
            description: n,
            defaults: e,
            needsTransparency: i,
            deprecationMessage: r
        };
        this.colorsById[t] = o;
        const a = {
            type: "string",
            format: "color-hex",
            defaultSnippets: [
                {
                    body: "${1:#ff0000}"
                }
            ]
        };
        return r && (a.deprecationMessage = r), i && (a.pattern = "^#(?:(?<rgba>[0-9a-fA-f]{3}[0-9a-eA-E])|(?:[0-9a-fA-F]{6}(?:(?![fF]{2})(?:[0-9a-fA-F]{2}))))?$", a.patternErrorMessage = D(2539, null)), this.colorSchema.properties[t] = {
            description: n,
            oneOf: [
                a,
                {
                    type: "string",
                    const: ori,
                    description: D(2540, null)
                }
            ]
        }, this.colorReferenceSchema.enum.push(t), this.colorReferenceSchema.enumDescriptions.push(n), this._onDidChangeSchema.fire(), t;
    }
    deregisterColor(t) {
        delete this.colorsById[t], delete this.colorSchema.properties[t];
        const e = this.colorReferenceSchema.enum.indexOf(t);
        e !== -1 && (this.colorReferenceSchema.enum.splice(e, 1), this.colorReferenceSchema.enumDescriptions.splice(e, 1)), this._onDidChangeSchema.fire();
    }
    getColors() {
        return Object.keys(this.colorsById).map((t)=>this.colorsById[t]);
    }
    resolveDefaultColor(t, e) {
        const n = this.colorsById[t];
        if (n?.defaults) {
            const i = WAy(n.defaults) ? n.defaults[e.type] : n.defaults;
            return _5e(i, e);
        }
    }
    getColorSchema() {
        return this.colorSchema;
    }
    getColorReferenceSchema() {
        return this.colorReferenceSchema;
    }
    toString() {
        const t = (e, n)=>{
            const i = e.indexOf(".") === -1 ? 0 : 1, r = n.indexOf(".") === -1 ? 0 : 1;
            return i !== r ? i - r : e.localeCompare(n);
        };
        return Object.keys(this.colorsById).sort(t).map((e)=>`- \`${e}\`: ${this.colorsById[e].description}`).join(`
`);
    }
}, Ngn = new k6d, Fi.add(sri.ColorContribution, Ngn), Lgn = "vscode://schemas/workbench-colors", wUo = Fi.as(p7.JSONContribution), wUo.registerSchema(Lgn, Ngn.getColorSchema()), CUo = new Yu(()=>wUo.notifySchemaChanged(Lgn), 200), Ngn.onDidChangeSchema(()=>{
    CUo.isScheduled() || CUo.schedule();
});

}
