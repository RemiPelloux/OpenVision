import { Se, bt, rn, ve, we } from "./HVr.js";
import { Dpg } from "./jsonSchema.js";
import { kn, rr } from "./platform_2.js";
import { Apg, hPc } from "./qIc.js";
import { x } from "./tslib.es6.js";
var r2, pPc, mPc;
export { mPc, pPc, r2 };
var __wakaru_v3_initialized = false;
export function v3() {
if (__wakaru_v3_initialized) return;
__wakaru_v3_initialized = true;
"use strict";
x(), bt(), Dpg(), Se(), rr(), r2 = {
    JSONContribution: "base.contributions.json"
}, pPc = class extends we {
    constructor(){
        super(...arguments), this.schemasById = {}, this.schemaAssociations = {}, this._onDidChangeSchema = this._register(new ve), this.onDidChangeSchema = this._onDidChangeSchema.event, this._onDidChangeSchemaAssociations = this._register(new ve), this.onDidChangeSchemaAssociations = this._onDidChangeSchemaAssociations.event;
    }
    registerSchema(e, t, n) {
        const i = hPc(e);
        this.schemasById[i] = t, this._onDidChangeSchema.fire(e), n && n.add(rn(()=>{
            delete this.schemasById[i], this._onDidChangeSchema.fire(e);
        }));
    }
    registerSchemaAssociation(e, t) {
        const n = hPc(e);
        return this.schemaAssociations[n] || (this.schemaAssociations[n] = []), this.schemaAssociations[n].includes(t) || (this.schemaAssociations[n].push(t), this._onDidChangeSchemaAssociations.fire()), rn(()=>{
            const i = this.schemaAssociations[n];
            if (i) {
                const r = i.indexOf(t);
                r !== -1 && (i.splice(r, 1), i.length === 0 && delete this.schemaAssociations[n], this._onDidChangeSchemaAssociations.fire());
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
        return t ? Apg(t) : void 0;
    }
    hasSchemaContent(e) {
        return !!this.schemasById[e];
    }
    getSchemaAssociations() {
        return this.schemaAssociations;
    }
}, mPc = new pPc, kn.add(r2.JSONContribution, mPc);

}
