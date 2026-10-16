import { Gt, Pn, Qe, st, tt } from "./Iwo.js";
import { uEy } from "./jsonSchema.js";
import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
import { lEy, pud } from "./ze.js";
var p7, mud, gud;
export { gud, mud, p7 };
var __wakaru_sW_initialized = false;
export function sW() {
if (__wakaru_sW_initialized) return;
__wakaru_sW_initialized = true;
"use strict";
E(), Gt(), uEy(), Qe(), Eo(), p7 = {
    JSONContribution: "base.contributions.json"
}, mud = class extends st {
    constructor(){
        super(...arguments), this.schemasById = {}, this.schemaAssociations = {}, this._onDidChangeSchema = this._register(new tt), this.onDidChangeSchema = this._onDidChangeSchema.event, this._onDidChangeSchemaAssociations = this._register(new tt), this.onDidChangeSchemaAssociations = this._onDidChangeSchemaAssociations.event;
    }
    registerSchema(t, e, n) {
        const i = pud(t);
        this.schemasById[i] = e, this._onDidChangeSchema.fire(t), n && n.add(Pn(()=>{
            delete this.schemasById[i], this._onDidChangeSchema.fire(t);
        }));
    }
    registerSchemaAssociation(t, e) {
        const n = pud(t);
        return this.schemaAssociations[n] || (this.schemaAssociations[n] = []), this.schemaAssociations[n].includes(e) || (this.schemaAssociations[n].push(e), this._onDidChangeSchemaAssociations.fire()), Pn(()=>{
            const i = this.schemaAssociations[n];
            if (i) {
                const r = i.indexOf(e);
                r !== -1 && (i.splice(r, 1), i.length === 0 && delete this.schemaAssociations[n], this._onDidChangeSchemaAssociations.fire());
            }
        });
    }
    notifySchemaChanged(t) {
        this._onDidChangeSchema.fire(t);
    }
    getSchemaContributions() {
        return {
            schemas: this.schemasById
        };
    }
    getSchemaContent(t) {
        const e = this.schemasById[t];
        return e ? lEy(e) : void 0;
    }
    hasSchemaContent(t) {
        return !!this.schemasById[t];
    }
    getSchemaAssociations() {
        return this.schemaAssociations;
    }
}, gud = new mud, Fi.add(p7.JSONContribution, gud);

}
