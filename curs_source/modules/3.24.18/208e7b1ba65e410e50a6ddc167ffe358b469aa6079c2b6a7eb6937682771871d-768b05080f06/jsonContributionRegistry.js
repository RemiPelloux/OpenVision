import { N, ge, se } from "./event.js";
import { _xe } from "./jsonSchema.js";
import { J, j } from "./lifecycle.js";
import { pr, ri } from "./platform_2.js";
import { h } from "./tslib.es6.js";
function gxe(e) {
    let t = !1;
    const n = new Map, r = new Map;
    if (fxe(e, (u)=>{
        if (e === u) return !0;
        const m = JSON.stringify(u);
        if (m.length < 30) return !0;
        const f = n.get(m);
        if (!f) {
            const v = {
                schemas: [
                    u
                ]
            };
            return n.set(m, v), r.set(u, v), !0;
        }
        return f.schemas.push(u), r.set(u, f), t = !0, !1;
    }), n.clear(), !t) return JSON.stringify(e);
    let i = "$defs";
    for(; e.hasOwnProperty(i);)i += "_";
    const a = [];
    function o(u) {
        return JSON.stringify(u, (m, f)=>{
            if (f !== u) {
                const v = r.get(f);
                if (v && v.schemas.length > 1) return v.id || (v.id = `_${a.length}`, a.push(v.schemas[0])), {
                    $ref: `#/${i}/${v.id}`
                };
            }
            return f;
        });
    }
    const l = o(e), d = [];
    for(let u = 0; u < a.length; u++)d.push(`"_${u}":${o(a[u])}`);
    return d.length ? `${l.substring(0, l.length - 1)},"${i}":{${d.join(",")}}}` : l;
}
function Ul(e) {
    return typeof e == "object" && e !== null;
}
function fxe(e, t) {
    if (!e || typeof e != "object") return;
    const n = (...l)=>{
        for (const d of l)Ul(d) && a.push(d);
    }, r = (...l)=>{
        for (const d of l)if (Ul(d)) for(const u in d){
            const m = d[u];
            Ul(m) && a.push(m);
        }
    }, s = (...l)=>{
        for (const d of l)if (Array.isArray(d)) for (const u of d)Ul(u) && a.push(u);
    }, i = (l)=>{
        if (Array.isArray(l)) for (const d of l)Ul(d) && a.push(d);
        else Ul(l) && a.push(l);
    }, a = [
        e
    ];
    let o = a.pop();
    for(; o;)t(o) && (n(o.additionalItems, o.additionalProperties, o.not, o.contains, o.propertyNames, o.if, o.then, o.else, o.unevaluatedItems, o.unevaluatedProperties), r(o.definitions, o.$defs, o.properties, o.patternProperties, o.dependencies, o.dependentSchemas), s(o.anyOf, o.allOf, o.oneOf, o.prefixItems), i(o.items)), o = a.pop();
}
function Y5(e) {
    return e.length > 0 && e.charAt(e.length - 1) === "#" ? e.substring(0, e.length - 1) : e;
}
var LR, J5, X5;
export { J5, LR, Ul, X5, Y5, fxe, gxe };
var __wakaru_vxe_initialized = false;
export function vxe() {
if (__wakaru_vxe_initialized) return;
__wakaru_vxe_initialized = true;
"use strict";
h(), se(), _xe(), j(), ri(), LR = {
    JSONContribution: "base.contributions.json"
}, J5 = class extends J {
    constructor(){
        super(...arguments), this.schemasById = {}, this.schemaAssociations = {}, this._onDidChangeSchema = this._register(new N), this.onDidChangeSchema = this._onDidChangeSchema.event, this._onDidChangeSchemaAssociations = this._register(new N), this.onDidChangeSchemaAssociations = this._onDidChangeSchemaAssociations.event;
    }
    registerSchema(e, t, n) {
        const r = Y5(e);
        this.schemasById[r] = t, this._onDidChangeSchema.fire(e), n && n.add(ge(()=>{
            delete this.schemasById[r], this._onDidChangeSchema.fire(e);
        }));
    }
    registerSchemaAssociation(e, t) {
        const n = Y5(e);
        return this.schemaAssociations[n] || (this.schemaAssociations[n] = []), this.schemaAssociations[n].includes(t) || (this.schemaAssociations[n].push(t), this._onDidChangeSchemaAssociations.fire()), ge(()=>{
            const r = this.schemaAssociations[n];
            if (r) {
                const s = r.indexOf(t);
                s !== -1 && (r.splice(s, 1), r.length === 0 && delete this.schemaAssociations[n], this._onDidChangeSchemaAssociations.fire());
            }
        });
    }
    notifySchemaChanged(e) {
        this._onDidChangeSchema.fire(e);
    }
    getSchemaContributions() {
        return {
            schemas: this.schemasById
        };
    }
    getSchemaContent(e) {
        const t = this.schemasById[e];
        return t ? gxe(t) : void 0;
    }
    hasSchemaContent(e) {
        return !!this.schemasById[e];
    }
    getSchemaAssociations() {
        return this.schemaAssociations;
    }
}, X5 = new J5, pr.add(LR.JSONContribution, X5);

}
