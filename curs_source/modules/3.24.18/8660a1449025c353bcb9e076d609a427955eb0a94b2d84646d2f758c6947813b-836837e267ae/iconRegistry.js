import { D, Gt, Qe, Yo, st, tt } from "./Iwo.js";
import { Yu, qn } from "./async.js";
import { gs, yt } from "./codicons.js";
import { zkr } from "./codiconsUtil.js";
import { p7, sW } from "./jsonContributionRegistry.js";
import { Bt } from "./nls.js";
import { Eo, Fi } from "./platform_2.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
import { DNy, qa } from "./ze.js";
var xGo, JGd, gTr, tvn, fTr, vTr, _Tr, eqd, AGo, toi, tqd, Uyt, bTr, RGo, PGo, yTr, nqd, iqd, NNy, MGo;
export { AGo, JGd, MGo, NNy, PGo, RGo, Uyt, _Tr, bTr, eqd, fTr, gTr, iqd, nqd, toi, tqd, tvn, vTr, xGo, yTr };
var __wakaru_b__initialized = false;
export function b_() {
if (__wakaru_b__initialized) return;
__wakaru_b__initialized = true;
"use strict";
E(), qn(), gs(), zkr(), ta(), Gt(), To(), fn(), Bt(), sW(), Eo(), Qe(), xGo = {
    IconContribution: "base.contributions.icons"
}, ((t)=>{
    function e(n, i) {
        let r = n.defaults;
        for(; Gn.isThemeIcon(r);){
            const s = Uyt.getIcon(r.id);
            if (!s) return;
            r = s.defaults;
        }
        return r;
    }
    t.getDefinition = e;
})(JGd || (JGd = {})), ((t)=>{
    function e(i) {
        return {
            weight: i.weight,
            style: i.style,
            src: i.src.map((r)=>({
                    format: r.format,
                    location: r.location.toString()
                }))
        };
    }
    t.toJSONObject = e;
    function n(i) {
        const r = (s)=>Yo(s) ? s : void 0;
        if (i && Array.isArray(i.src) && i.src.every((s)=>Yo(s.format) && Yo(s.location))) return {
            weight: r(i.weight),
            style: r(i.style),
            src: i.src.map((s)=>({
                    format: s.format,
                    location: rt.parse(s.location)
                }))
        };
    }
    t.fromJSONObject = n;
})(gTr || (gTr = {})), tvn = /^([\w_-]+)$/, fTr = /^(normal|italic|(oblique[ \w\s-]+))$/, vTr = /^(normal|bold|lighter|bolder|(\d{0-1000}))$/, _Tr = /^([\w_.%+-]+)$/, eqd = /^woff|woff2|truetype|opentype|embedded-opentype|svg$/, AGo = /^#[0-9a-fA-F]{0,6}$/, toi = D(2541, null), tqd = class extends st {
    constructor(){
        super(), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this.iconSchema = {
            definitions: {
                icons: {
                    type: "object",
                    properties: {
                        fontId: {
                            type: "string",
                            description: D(2542, null),
                            pattern: tvn.source,
                            patternErrorMessage: toi
                        },
                        fontCharacter: {
                            type: "string",
                            description: D(2543, null)
                        }
                    },
                    additionalProperties: !1,
                    defaultSnippets: [
                        {
                            body: {
                                fontCharacter: "\\\\e030"
                            }
                        }
                    ]
                }
            },
            type: "object",
            properties: {}
        }, this.iconReferenceSchema = {
            type: "string",
            pattern: `^${Gn.iconNameExpression}$`,
            enum: [],
            enumDescriptions: []
        }, this.iconsById = {}, this.iconFontsById = {};
    }
    registerIcon(t, e, n, i) {
        const r = this.iconsById[t];
        if (r) {
            if (n && !r.description) {
                r.description = n, this.iconSchema.properties[t].markdownDescription = `${n} $(${t})`;
                const a = this.iconReferenceSchema.enum.indexOf(t);
                a !== -1 && (this.iconReferenceSchema.enumDescriptions[a] = n), this._onDidChange.fire();
            }
            return r;
        }
        const s = {
            id: t,
            description: n,
            defaults: e,
            deprecationMessage: i
        };
        this.iconsById[t] = s;
        const o = {
            $ref: "#/definitions/icons"
        };
        return i && (o.deprecationMessage = i), n && (o.markdownDescription = `${n}: $(${t})`), this.iconSchema.properties[t] = o, this.iconReferenceSchema.enum.push(t), this.iconReferenceSchema.enumDescriptions.push(n || ""), this._onDidChange.fire(), {
            id: t
        };
    }
    deregisterIcon(t) {
        delete this.iconsById[t], delete this.iconSchema.properties[t];
        const e = this.iconReferenceSchema.enum.indexOf(t);
        e !== -1 && (this.iconReferenceSchema.enum.splice(e, 1), this.iconReferenceSchema.enumDescriptions.splice(e, 1)), this._onDidChange.fire();
    }
    getIcons() {
        return Object.keys(this.iconsById).map((t)=>this.iconsById[t]);
    }
    getIcon(t) {
        return this.iconsById[t];
    }
    getIconSchema() {
        return this.iconSchema;
    }
    getIconReferenceSchema() {
        return this.iconReferenceSchema;
    }
    registerIconFont(t, e) {
        const n = this.iconFontsById[t];
        return n || (this.iconFontsById[t] = e, this._onDidChange.fire(), e);
    }
    deregisterIconFont(t) {
        delete this.iconFontsById[t];
    }
    getIconFont(t) {
        return this.iconFontsById[t];
    }
    toString() {
        const t = (r, s)=>r.id.localeCompare(s.id), e = (r)=>{
            for(; Gn.isThemeIcon(r.defaults);)r = this.iconsById[r.defaults.id];
            return `codicon codicon-${r ? r.id : ""}`;
        }, n = [];
        n.push("| preview     | identifier                        | default codicon ID                | description"), n.push("| ----------- | --------------------------------- | --------------------------------- | --------------------------------- |");
        const i = Object.keys(this.iconsById).map((r)=>this.iconsById[r]);
        for (const r of i.filter((s)=>!!s.description).sort(t))n.push(`|<i class="${e(r)}"></i>|${r.id}|${Gn.isThemeIcon(r.defaults) ? r.defaults.id : r.id}|${r.description || ""}|`);
        n.push("| preview     | identifier                        "), n.push("| ----------- | --------------------------------- |");
        for (const r of i.filter((s)=>!Gn.isThemeIcon(s.defaults)).sort(t))n.push(`|<i class="${e(r)}"></i>|${r.id}|`);
        return n.join(`
`);
    }
}, Uyt = new tqd, Fi.add(xGo.IconContribution, Uyt), DNy(), bTr = "vscode://schemas/icons", RGo = Fi.as(p7.JSONContribution), RGo.registerSchema(bTr, Uyt.getIconSchema()), PGo = new Yu(()=>RGo.notifySchemaChanged(bTr), 200), Uyt.onDidChange(()=>{
    PGo.isScheduled() || PGo.schedule();
}), yTr = qa("widget-close", yt.close, D(2544, null)), nqd = qa("goto-previous-location", yt.arrowUp, D(2545, null)), iqd = qa("goto-next-location", yt.arrowDown, D(2546, null)), NNy = Gn.modify(yt.sync, "spin"), MGo = Gn.modify(yt.loading, "spin");

}
