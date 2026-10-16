import { S, Se, Xr, bt, ve, we } from "./HVr.js";
import { ac, bn } from "./async.js";
import { Pe, _i } from "./codicons.js";
import { jgi } from "./codiconsUtil.js";
import { r2, v3 } from "./jsonContributionRegistry.js";
import { rt } from "./nls.js";
import { kn, rr } from "./platform_2.js";
import { $yg, Pi } from "./qIc.js";
import { Ft, Sr } from "./themables.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Ee, Qt } from "./uri.js";
var Cns, T8c, Gbi, TFt, Vbi, jbi, qbi, E8c, Tns, Cvn, x8c, aKe, zbi, Ens, xns, m5e, I8c, A8c, R8c, EFt;
export { A8c, Cns, Cvn, E8c, EFt, Ens, Gbi, I8c, R8c, T8c, TFt, Tns, Vbi, aKe, jbi, m5e, qbi, x8c, xns, zbi };
var __wakaru_dh_initialized = false;
export function dh() {
if (__wakaru_dh_initialized) return;
__wakaru_dh_initialized = true;
"use strict";
x(), bn(), _i(), jgi(), Sr(), bt(), gr(), Qt(), rt(), v3(), rr(), Se(), Cns = {
    IconContribution: "base.contributions.icons"
}, ((e)=>{
    function t(n, i) {
        let r = n.defaults;
        for(; Ft.isThemeIcon(r);){
            const s = aKe.getIcon(r.id);
            if (!s) return;
            r = s.defaults;
        }
        return r;
    }
    e.getDefinition = t;
})(T8c || (T8c = {})), ((e)=>{
    function t(i) {
        return {
            weight: i.weight,
            style: i.style,
            src: i.src.map((r)=>({
                    format: r.format,
                    location: r.location.toString()
                }))
        };
    }
    e.toJSONObject = t;
    function n(i) {
        const r = (s)=>Xr(s) ? s : void 0;
        if (i && Array.isArray(i.src) && i.src.every((s)=>Xr(s.format) && Xr(s.location))) return {
            weight: r(i.weight),
            style: r(i.style),
            src: i.src.map((s)=>({
                    format: s.format,
                    location: Ee.parse(s.location)
                }))
        };
    }
    e.fromJSONObject = n;
})(Gbi || (Gbi = {})), TFt = /^([\w_-]+)$/, Vbi = /^(normal|italic|(oblique[ \w\s-]+))$/, jbi = /^(normal|bold|lighter|bolder|(\d{0-1000}))$/, qbi = /^([\w_.%+-]+)$/, E8c = /^woff|woff2|truetype|opentype|embedded-opentype|svg$/, Tns = /^#[0-9a-fA-F]{0,6}$/, Cvn = S(2541, null), x8c = class extends we {
    constructor(){
        super(), this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this.iconSchema = {
            definitions: {
                icons: {
                    type: "object",
                    properties: {
                        fontId: {
                            type: "string",
                            description: S(2542, null),
                            pattern: TFt.source,
                            patternErrorMessage: Cvn
                        },
                        fontCharacter: {
                            type: "string",
                            description: S(2543, null)
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
            pattern: `^${Ft.iconNameExpression}$`,
            enum: [],
            enumDescriptions: []
        }, this.iconsById = {}, this.iconFontsById = {};
    }
    registerIcon(e, t, n, i) {
        const r = this.iconsById[e];
        if (r) {
            if (n && !r.description) {
                r.description = n, this.iconSchema.properties[e].markdownDescription = `${n} $(${e})`;
                const a = this.iconReferenceSchema.enum.indexOf(e);
                a !== -1 && (this.iconReferenceSchema.enumDescriptions[a] = n), this._onDidChange.fire();
            }
            return r;
        }
        const s = {
            id: e,
            description: n,
            defaults: t,
            deprecationMessage: i
        };
        this.iconsById[e] = s;
        const o = {
            $ref: "#/definitions/icons"
        };
        return i && (o.deprecationMessage = i), n && (o.markdownDescription = `${n}: $(${e})`), this.iconSchema.properties[e] = o, this.iconReferenceSchema.enum.push(e), this.iconReferenceSchema.enumDescriptions.push(n || ""), this._onDidChange.fire(), {
            id: e
        };
    }
    deregisterIcon(e) {
        delete this.iconsById[e], delete this.iconSchema.properties[e];
        const t = this.iconReferenceSchema.enum.indexOf(e);
        t !== -1 && (this.iconReferenceSchema.enum.splice(t, 1), this.iconReferenceSchema.enumDescriptions.splice(t, 1)), this._onDidChange.fire();
    }
    getIcons() {
        return Object.keys(this.iconsById).map((e)=>this.iconsById[e]);
    }
    getIcon(e) {
        return this.iconsById[e];
    }
    getIconSchema() {
        return this.iconSchema;
    }
    getIconReferenceSchema() {
        return this.iconReferenceSchema;
    }
    registerIconFont(e, t) {
        const n = this.iconFontsById[e];
        return n || (this.iconFontsById[e] = t, this._onDidChange.fire(), t);
    }
    deregisterIconFont(e) {
        delete this.iconFontsById[e];
    }
    getIconFont(e) {
        return this.iconFontsById[e];
    }
    toString() {
        const e = (r, s)=>r.id.localeCompare(s.id), t = (r)=>{
            for(; Ft.isThemeIcon(r.defaults);)r = this.iconsById[r.defaults.id];
            return `codicon codicon-${r ? r.id : ""}`;
        }, n = [];
        n.push("| preview     | identifier                        | default codicon ID                | description"), n.push("| ----------- | --------------------------------- | --------------------------------- | --------------------------------- |");
        const i = Object.keys(this.iconsById).map((r)=>this.iconsById[r]);
        for (const r of i.filter((s)=>!!s.description).sort(e))n.push(`|<i class="${t(r)}"></i>|${r.id}|${Ft.isThemeIcon(r.defaults) ? r.defaults.id : r.id}|${r.description || ""}|`);
        n.push("| preview     | identifier                        "), n.push("| ----------- | --------------------------------- |");
        for (const r of i.filter((s)=>!Ft.isThemeIcon(s.defaults)).sort(e))n.push(`|<i class="${t(r)}"></i>|${r.id}|`);
        return n.join(`
`);
    }
}, aKe = new x8c, kn.add(Cns.IconContribution, aKe), $yg(), zbi = "vscode://schemas/icons", Ens = kn.as(r2.JSONContribution), Ens.registerSchema(zbi, aKe.getIconSchema()), xns = new ac(()=>Ens.notifySchemaChanged(zbi), 200), aKe.onDidChange(()=>{
    xns.isScheduled() || xns.schedule();
}), m5e = Pi("widget-close", Pe.close, S(2544, null)), I8c = Pi("goto-previous-location", Pe.arrowUp, S(2545, null)), A8c = Pi("goto-next-location", Pe.arrowDown, S(2546, null)), R8c = Ft.modify(Pe.sync, "spin"), EFt = Ft.modify(Pe.loading, "spin");

}
