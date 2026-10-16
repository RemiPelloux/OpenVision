import { Vn } from "./arrays.js";
import { F2e, Sn, bv } from "./configurationModels.js";
import { F4, Jr, ua } from "./configurationRegistry.js";
import { Ve } from "./errors.js";
import { N, O, se } from "./event.js";
import { Bs } from "./extensionsScannerService.js";
import { B } from "./ipc.js";
import { Ys } from "./json.js";
import { J, j } from "./lifecycle.js";
import { Z, i6, te } from "./log.js";
import { ns } from "./objects.js";
import { Ln, pr, ri } from "./platform_2.js";
import { bo, fi } from "./policy.js";
import { We } from "./request_2.js";
import { w, wn } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
import { Ws } from "./utilityProcess.js";
var W2e, B2e, db;
export { B2e, W2e, db };
var __wakaru_Oct_initialized = false;
export function Oct() {
if (__wakaru_Oct_initialized) return;
__wakaru_Oct_initialized = true;
"use strict";
h(), Vn(), se(), j(), ns(), Ze(), F2e(), ua(), te(), fi(), ri(), Ve(), Ys(), W2e = class extends J {
    constructor(e){
        super(), this.logService = e, this._onDidChangeConfiguration = this._register(new N), this.onDidChangeConfiguration = this._onDidChangeConfiguration.event, this._configurationModel = Sn.createEmptyModel(this.logService);
    }
    get configurationModel() {
        return this._configurationModel;
    }
    async initialize() {
        return this.resetConfigurationModel(), this._register(pr.as(Jr.Configuration).onDidUpdateConfiguration(({ properties: e, defaultsOverrides: t })=>this.onDidUpdateConfiguration(Array.from(e), t))), this.configurationModel;
    }
    reload() {
        return this.resetConfigurationModel(), this.configurationModel;
    }
    onDidUpdateConfiguration(e, t) {
        this.updateConfigurationModel(e, pr.as(Jr.Configuration).getConfigurationProperties()), this._onDidChangeConfiguration.fire({
            defaults: this.configurationModel,
            properties: e
        });
    }
    getConfigurationDefaultOverrides() {
        return {};
    }
    resetConfigurationModel() {
        this._configurationModel = Sn.createEmptyModel(this.logService);
        const e = pr.as(Jr.Configuration).getConfigurationProperties();
        this.updateConfigurationModel(Object.keys(e), e);
    }
    updateConfigurationModel(e, t) {
        const n = this.getConfigurationDefaultOverrides();
        for (const r of e){
            const s = n[r], i = t[r];
            s !== void 0 ? this._configurationModel.setValue(r, s) : i ? this._configurationModel.setValue(r, Ws(i.default)) : this._configurationModel.removeValue(r);
        }
    }
}, B2e = class {
    constructor(){
        this.onDidChangeConfiguration = O.None, this.configurationModel = Sn.createEmptyModel(new i6);
    }
    async initialize() {
        return this.configurationModel;
    }
}, db = class extends J {
    constructor(e, t, n){
        super(), this.defaultConfiguration = e, this.policyService = t, this.logService = n, this._onDidChangeConfiguration = this._register(new N), this.onDidChangeConfiguration = this._onDidChangeConfiguration.event, this._configurationModel = Sn.createEmptyModel(this.logService), this.configurationRegistry = pr.as(Jr.Configuration);
    }
    get configurationModel() {
        return this._configurationModel;
    }
    async initialize() {
        return this.logService.trace("PolicyConfiguration#initialize"), this.update(await this.updatePolicyDefinitions(this.defaultConfiguration.configurationModel.keys), !1), this.update(await this.updatePolicyDefinitions(Object.keys(this.configurationRegistry.getExcludedConfigurationProperties())), !1), this._register(this.policyService.onDidChange((e)=>this.onDidChangePolicies(e))), this._register(this.defaultConfiguration.onDidChangeConfiguration(async ({ properties: e })=>this.update(await this.updatePolicyDefinitions(e), !0))), this._configurationModel;
    }
    async updatePolicyDefinitions(e) {
        this.logService.trace("PolicyConfiguration#updatePolicyDefinitions", e);
        const t = {}, n = [], r = this.configurationRegistry.getConfigurationProperties(), s = this.configurationRegistry.getExcludedConfigurationProperties();
        for (const i of e){
            const a = r[i] ?? s[i];
            if (!a) {
                n.push(i);
                continue;
            }
            if (a.policy) {
                if (a.type !== "string" && a.type !== "number" && a.type !== "array" && a.type !== "object" && a.type !== "boolean") {
                    this.logService.warn(`Policy ${a.policy.name} has unsupported type ${a.type}`);
                    continue;
                }
                const { defaultValue: o, previewFeature: l } = a.policy;
                n.push(i), t[a.policy.name] = {
                    type: a.type === "number" ? "number" : a.type === "boolean" ? "boolean" : "string",
                    previewFeature: l,
                    defaultValue: o
                };
            }
        }
        return F4(t) || await this.policyService.updatePolicyDefinitions(t), n;
    }
    onDidChangePolicies(e) {
        this.logService.trace("PolicyConfiguration#onDidChangePolicies", e);
        const t = this.configurationRegistry.getPolicyConfigurations(), n = wn(e.map((r)=>t.get(r)));
        this.update(n, !0);
    }
    update(e, t) {
        this.logService.trace("PolicyConfiguration#update", e);
        const n = this.configurationRegistry.getConfigurationProperties(), r = this.configurationRegistry.getExcludedConfigurationProperties(), s = [], i = this._configurationModel.isEmpty();
        for (const a of e){
            const o = n[a] ?? r[a], l = o?.policy?.name;
            if (l) {
                let d = this.policyService.getPolicyValue(l);
                if (Ln(d) && o.type !== "string") try {
                    d = this.parse(d);
                } catch (u) {
                    this.logService.error(`Error parsing policy value ${l}:`, We(u));
                    continue;
                }
                (i ? d !== void 0 : !Bs(this._configurationModel.getValue(a), d)) && s.push([
                    a,
                    d
                ]);
            } else this._configurationModel.getValue(a) !== void 0 && s.push([
                a,
                void 0
            ]);
        }
        if (s.length) {
            this.logService.trace("PolicyConfiguration#changed", s);
            const a = this._configurationModel;
            this._configurationModel = Sn.createEmptyModel(this.logService);
            for (const o of a.keys)this._configurationModel.setValue(o, a.getValue(o));
            for (const [o, l] of s)l === void 0 ? this._configurationModel.removeValue(o) : this._configurationModel.setValue(o, l);
            t && this._onDidChangeConfiguration.fire(this._configurationModel);
        }
    }
    parse(e) {
        let t = {}, n = null, r = [];
        const s = [], i = [];
        function a(l) {
            if (Array.isArray(r)) r.push(l);
            else if (n !== null) {
                if (r[n] !== void 0) throw new Error(`Duplicate property found: ${n}`);
                r[n] = l;
            }
        }
        if (e && (bv(e, {
            onObjectBegin: ()=>{
                const l = {};
                a(l), s.push(r), r = l, n = null;
            },
            onObjectProperty: (l)=>{
                n = l;
            },
            onObjectEnd: ()=>{
                r = s.pop();
            },
            onArrayBegin: ()=>{
                const l = [];
                a(l), s.push(r), r = l, n = null;
            },
            onArrayEnd: ()=>{
                r = s.pop();
            },
            onLiteralValue: a,
            onError: (l, d, u)=>{
                i.push({
                    error: l,
                    offset: d,
                    length: u
                });
            }
        }), t = r[0] || {}), i.length > 0) throw new Error(i.map((l)=>We(l.error)).join(`
`));
        return t;
    }
}, db = B([
    w(1, bo),
    w(2, Z)
], db);

}
