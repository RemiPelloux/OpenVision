import { D, Gt, Yo, tt } from "./Iwo.js";
import { Hi, mt } from "./contextkey.js";
import { cF, uI } from "./extensionsRegistry.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fp } from "./ze.js";
var bDg, B_l, yDg, SDg, H9e;
export { B_l, H9e, SDg, bDg, yDg };
var __wakaru_fRi_initialized = false;
export function fRi() {
if (__wakaru_fRi_initialized) return;
__wakaru_fRi_initialized = true;
"use strict";
E(), Bt(), To(), cp(), cF(), Hi(), Gt(), bDg = {
    type: "object",
    additionalProperties: !1,
    properties: {
        type: {
            type: "string",
            description: D(10169, null)
        },
        required: {
            type: "array",
            items: {
                type: "string"
            }
        },
        properties: {
            type: "object",
            description: D(10170, null),
            additionalProperties: {
                $ref: "http://json-schema.org/draft-07/schema#"
            }
        },
        when: {
            type: "string",
            markdownDescription: D(10171, null),
            default: ""
        }
    }
}, ((t)=>{
    function e(n, i, r) {
        if (!n) return;
        const s = Yo(n.type) ? n.type : void 0;
        if (!s || s.length === 0) {
            r.error(D(10172, null));
            return;
        }
        const o = [];
        if (Array.isArray(n.required)) for (const a of n.required)Yo(a) && o.push(a);
        return {
            extensionId: i.value,
            taskType: s,
            required: o,
            properties: n.properties ? fp(n.properties) : {},
            when: n.when ? mt.deserialize(n.when) : void 0
        };
    }
    t.from = e;
})(B_l || (B_l = {})), yDg = uI.registerExtensionPoint({
    extensionPoint: "taskDefinitions",
    activationEventsGenerator: (t, e)=>{
        for (const n of t)n.type && e.push(`onTaskType:${n.type}`);
    },
    jsonSchema: {
        description: D(10173, null),
        type: "array",
        items: bDg
    }
}), SDg = class {
    constructor(){
        this._onDefinitionsChanged = new tt, this.onDefinitionsChanged = this._onDefinitionsChanged.event, this.taskTypes = Object.create(null), this.readyPromise = new Promise((t, e)=>{
            yDg.setHandler((n, i)=>{
                this._schema = void 0;
                try {
                    for (const r of i.removed){
                        const s = r.value;
                        for (const o of s)this.taskTypes && o.type && this.taskTypes[o.type] && delete this.taskTypes[o.type];
                    }
                    for (const r of i.added){
                        const s = r.value;
                        for (const o of s){
                            const a = B_l.from(o, r.description.identifier, r.collector);
                            a && (this.taskTypes[a.taskType] = a);
                        }
                    }
                    (i.removed.length > 0 || i.added.length > 0) && this._onDefinitionsChanged.fire();
                } catch  {}
                t(void 0);
            });
        });
    }
    onReady() {
        return this.readyPromise;
    }
    get(t) {
        return this.taskTypes[t];
    }
    all() {
        return Object.keys(this.taskTypes).map((t)=>this.taskTypes[t]);
    }
    getJsonSchema() {
        if (this._schema === void 0) {
            const t = [];
            for (const e of this.all()){
                const n = {
                    type: "object",
                    additionalProperties: !1
                };
                e.required.length > 0 && (n.required = e.required.slice(0)), e.properties !== void 0 ? n.properties = fp(e.properties) : n.properties = Object.create(null), n.properties.type = {
                    type: "string",
                    enum: [
                        e.taskType
                    ]
                }, t.push(n);
            }
            this._schema = {
                oneOf: t
            };
        }
        return this._schema;
    }
}, H9e = new SDg;

}
