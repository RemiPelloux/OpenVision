import { S, Se, Tf, bt, dp, om, pge, ve, we } from "./HVr.js";
import { dr } from "./arrays.js";
import { Cn } from "./configuration.js";
import { r2, v3 } from "./jsonContributionRegistry.js";
import { rt } from "./nls.js";
import { kn, rr } from "./platform_2.js";
import { E2t, bXr, oPc, vPc } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var yXr, iu, UV, x2t, I2t, Yht, OAe, FAe, Mge, TBe, SXr, sgn, yPc, kXr, wXr, BAe, Q4, CXr, A2t;
export { A2t, BAe, CXr, FAe, I2t, Mge, OAe, Q4, SXr, TBe, UV, Yht, iu, kXr, sgn, wXr, x2t, yPc, yXr };
var __wakaru_uh_initialized = false;
export function uh() {
if (__wakaru_uh_initialized) return;
__wakaru_uh_initialized = true;
"use strict";
x(), dr(), bt(), gr(), rt(), Cn(), v3(), rr(), Se(), yXr = ((e)=>(e.Multiline = "multilineText", e.Singleline = "singlelineText", e))(yXr || {}), iu = {
    Configuration: "base.contributions.configuration"
}, UV = {
    properties: {},
    patternProperties: {}
}, x2t = {
    properties: {},
    patternProperties: {}
}, I2t = {
    properties: {},
    patternProperties: {}
}, Yht = {
    properties: {},
    patternProperties: {}
}, OAe = {
    properties: {},
    patternProperties: {}
}, FAe = {
    properties: {},
    patternProperties: {}
}, Mge = {
    properties: {},
    patternProperties: {}
}, TBe = "vscode://schemas/settings/resourceLanguage", SXr = "vscode://schemas/settings/configurationDefaults", sgn = kn.as(r2.JSONContribution), yPc = class extends we {
    constructor(){
        super(), this.registeredConfigurationDefaults = [], this.overrideIdentifiers = new Set, this._onDidSchemaChange = this._register(new ve), this.onDidSchemaChange = this._onDidSchemaChange.event, this._onDidUpdateConfiguration = this._register(new ve), this.onDidUpdateConfiguration = this._onDidUpdateConfiguration.event, this.configurationDefaultsOverrides = new Map, this.defaultLanguageConfigurationOverridesNode = {
            id: "defaultOverrides",
            title: S(1807, null),
            properties: {}
        }, this.configurationContributors = [
            this.defaultLanguageConfigurationOverridesNode
        ], this.resourceLanguageSettingsSchema = {
            properties: {},
            patternProperties: {},
            additionalProperties: !0,
            allowTrailingCommas: !0,
            allowComments: !0
        }, this.configurationProperties = {}, this.policyConfigurations = new Map, this.excludedConfigurationProperties = {}, sgn.registerSchema(TBe, this.resourceLanguageSettingsSchema), this.registerOverridePropertyPatternKey();
    }
    registerConfiguration(e, t = !0) {
        return this.registerConfigurations([
            e
        ], t), e;
    }
    registerConfigurations(e, t = !0) {
        const n = new Set;
        this.doRegisterConfigurations(e, t, n), sgn.registerSchema(TBe, this.resourceLanguageSettingsSchema), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
            properties: n
        });
    }
    deregisterConfigurations(e) {
        const t = new Set;
        this.doDeregisterConfigurations(e, t), sgn.registerSchema(TBe, this.resourceLanguageSettingsSchema), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
            properties: t
        });
    }
    updateConfigurations({ add: e, remove: t }) {
        const n = new Set;
        this.doDeregisterConfigurations(t, n), this.doRegisterConfigurations(e, !1, n), sgn.registerSchema(TBe, this.resourceLanguageSettingsSchema), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
            properties: n
        });
    }
    registerDefaultConfigurations(e) {
        const t = new Set;
        this.doRegisterDefaultConfigurations(e, t), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
            properties: t,
            defaultsOverrides: !0
        });
    }
    doRegisterDefaultConfigurations(e, t) {
        this.registeredConfigurationDefaults.push(...e);
        const n = [];
        for (const { overrides: i, source: r } of e)for(const s in i){
            t.add(s);
            const o = this.configurationDefaultsOverrides.get(s) ?? this.configurationDefaultsOverrides.set(s, {
                configurationDefaultOverrides: []
            }).get(s), a = i[s];
            if (o.configurationDefaultOverrides.push({
                value: a,
                source: r
            }), Q4.test(s)) {
                const c = this.mergeDefaultConfigurationsForOverrideIdentifier(s, a, r, o.configurationDefaultOverrideValue);
                if (!c) continue;
                o.configurationDefaultOverrideValue = c, this.updateDefaultOverrideProperty(s, c, r), n.push(...E2t(s));
            } else {
                const c = this.mergeDefaultConfigurationsForConfigurationProperty(s, a, r, o.configurationDefaultOverrideValue);
                if (!c) continue;
                o.configurationDefaultOverrideValue = c;
                const l = this.configurationProperties[s];
                l && (this.updatePropertyDefaultValue(s, l), this.updateSchema(s, l));
            }
        }
        this.doRegisterOverrideIdentifiers(n);
    }
    deregisterDefaultConfigurations(e) {
        const t = new Set;
        this.doDeregisterDefaultConfigurations(e, t), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
            properties: t,
            defaultsOverrides: !0
        });
    }
    doDeregisterDefaultConfigurations(e, t) {
        for (const n of e){
            const i = this.registeredConfigurationDefaults.indexOf(n);
            i !== -1 && this.registeredConfigurationDefaults.splice(i, 1);
        }
        for (const { overrides: n, source: i } of e)for(const r in n){
            const s = this.configurationDefaultsOverrides.get(r);
            if (!s) continue;
            const o = s.configurationDefaultOverrides.findIndex((a)=>i ? a.source?.id === i.id : a.value === n[r]);
            if (o !== -1) {
                if (s.configurationDefaultOverrides.splice(o, 1), s.configurationDefaultOverrides.length === 0 && this.configurationDefaultsOverrides.delete(r), Q4.test(r)) {
                    let a;
                    for (const c of s.configurationDefaultOverrides)a = this.mergeDefaultConfigurationsForOverrideIdentifier(r, c.value, c.source, a);
                    a && !pge(a.value) ? (s.configurationDefaultOverrideValue = a, this.updateDefaultOverrideProperty(r, a, i)) : (this.configurationDefaultsOverrides.delete(r), delete this.configurationProperties[r], delete this.defaultLanguageConfigurationOverridesNode.properties[r]);
                } else {
                    let a;
                    for (const l of s.configurationDefaultOverrides)a = this.mergeDefaultConfigurationsForConfigurationProperty(r, l.value, l.source, a);
                    s.configurationDefaultOverrideValue = a;
                    const c = this.configurationProperties[r];
                    c && (this.updatePropertyDefaultValue(r, c), this.updateSchema(r, c));
                }
                t.add(r);
            }
        }
        this.updateOverridePropertyPatternKey();
    }
    updateDefaultOverrideProperty(e, t, n) {
        const i = {
            type: "object",
            default: t.value,
            description: S(1808, null, oPc(e)),
            $ref: TBe,
            defaultDefaultValue: t.value,
            source: n,
            defaultValueSource: n
        };
        this.configurationProperties[e] = i, this.defaultLanguageConfigurationOverridesNode.properties[e] = i;
    }
    mergeDefaultConfigurationsForOverrideIdentifier(e, t, n, i) {
        const r = i?.value || {}, s = i?.source ?? new Map;
        if (!(s instanceof Map)) {
            console.error("objectConfigurationSources is not a Map");
            return;
        }
        for (const o of Object.keys(t)){
            const a = t[o];
            if (dp(a) && (om(r[o]) || dp(r[o]))) {
                if (r[o] = {
                    ...r[o] ?? {},
                    ...a
                }, n) for(const l in a)s.set(`${o}.${l}`, n);
            } else r[o] = a, n ? s.set(o, n) : s.delete(o);
        }
        return {
            value: r,
            source: s
        };
    }
    mergeDefaultConfigurationsForConfigurationProperty(e, t, n, i) {
        const r = this.configurationProperties[e], s = i?.value ?? r?.defaultDefaultValue;
        let o = n;
        if (dp(t) && (r !== void 0 && r.type === "object" || r === void 0 && (om(s) || dp(s)))) {
            if (o = i?.source ?? new Map, !(o instanceof Map)) {
                console.error("defaultValueSource is not a Map");
                return;
            }
            for(const c in t)n && o.set(`${e}.${c}`, n);
            t = {
                ...dp(s) ? s : {},
                ...t
            };
        }
        return {
            value: t,
            source: o
        };
    }
    deltaConfiguration(e) {
        let t = !1;
        const n = new Set;
        e.removedDefaults && (this.doDeregisterDefaultConfigurations(e.removedDefaults, n), t = !0), e.addedDefaults && (this.doRegisterDefaultConfigurations(e.addedDefaults, n), t = !0), e.removedConfigurations && this.doDeregisterConfigurations(e.removedConfigurations, n), e.addedConfigurations && this.doRegisterConfigurations(e.addedConfigurations, !1, n), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
            properties: n,
            defaultsOverrides: t
        });
    }
    notifyConfigurationSchemaUpdated(...e) {
        this._onDidSchemaChange.fire();
    }
    registerOverrideIdentifiers(e) {
        this.doRegisterOverrideIdentifiers(e), this._onDidSchemaChange.fire();
    }
    doRegisterOverrideIdentifiers(e) {
        for (const t of e)this.overrideIdentifiers.add(t);
        this.updateOverridePropertyPatternKey();
    }
    doRegisterConfigurations(e, t, n) {
        e.forEach((i)=>{
            this.validateAndRegisterProperties(i, t, i.extensionInfo, i.restrictedProperties, void 0, n), this.configurationContributors.push(i), this.registerJSONConfiguration(i);
        });
    }
    doDeregisterConfigurations(e, t) {
        const n = (i)=>{
            if (i.properties) for(const r in i.properties){
                t.add(r);
                const s = this.configurationProperties[r];
                s?.policy?.name && this.policyConfigurations.delete(s.policy.name), delete this.configurationProperties[r], this.removeFromSchema(r, i.properties[r]);
            }
            i.allOf?.forEach((r)=>n(r));
        };
        for (const i of e){
            n(i);
            const r = this.configurationContributors.indexOf(i);
            r !== -1 && this.configurationContributors.splice(r, 1);
        }
    }
    validateAndRegisterProperties(e, t = !0, n, i, r = 4, s) {
        r = Tf(e.scope) ? r : e.scope;
        const o = e.properties;
        if (o) for(const c in o){
            const l = o[c];
            if (t && vPc(c, l)) {
                delete o[c];
                continue;
            }
            l.source = n, l.defaultDefaultValue = o[c].default, this.updatePropertyDefaultValue(c, l), Q4.test(c) ? l.scope = void 0 : (l.scope = Tf(l.scope) ? r : l.scope, l.restricted = Tf(l.restricted) ? !!i?.includes(c) : l.restricted);
            const u = o[c].hasOwnProperty("included") && !o[c].included, h = o[c].policy?.name;
            u ? (this.excludedConfigurationProperties[c] = o[c], h && (this.policyConfigurations.set(h, c), s.add(c)), delete o[c]) : (s.add(c), h && this.policyConfigurations.set(h, c), this.configurationProperties[c] = o[c], !o[c].deprecationMessage && o[c].markdownDeprecationMessage && (o[c].deprecationMessage = o[c].markdownDeprecationMessage));
        }
        const a = e.allOf;
        if (a) for (const c of a)this.validateAndRegisterProperties(c, t, n, i, r, s);
    }
    getConfigurations() {
        return this.configurationContributors;
    }
    getConfigurationProperties() {
        return this.configurationProperties;
    }
    getPolicyConfigurations() {
        return this.policyConfigurations;
    }
    getExcludedConfigurationProperties() {
        return this.excludedConfigurationProperties;
    }
    getRegisteredDefaultConfigurations() {
        return [
            ...this.registeredConfigurationDefaults
        ];
    }
    getConfigurationDefaultsOverrides() {
        const e = new Map;
        for (const [t, n] of this.configurationDefaultsOverrides)n.configurationDefaultOverrideValue && e.set(t, n.configurationDefaultOverrideValue);
        return e;
    }
    registerJSONConfiguration(e) {
        const t = (n)=>{
            const i = n.properties;
            if (i) for(const s in i)this.updateSchema(s, i[s]);
            n.allOf?.forEach(t);
        };
        t(e);
    }
    updateSchema(e, t) {
        switch(UV.properties[e] = t, t.scope){
            case 1:
                x2t.properties[e] = t;
                break;
            case 2:
                Yht.properties[e] = t;
                break;
            case 3:
                I2t.properties[e] = t;
                break;
            case 7:
                OAe.properties[e] = t;
                break;
            case 4:
                FAe.properties[e] = t;
                break;
            case 5:
                Mge.properties[e] = t;
                break;
            case 6:
                Mge.properties[e] = t, this.resourceLanguageSettingsSchema.properties[e] = t;
                break;
        }
    }
    removeFromSchema(e, t) {
        switch(delete UV.properties[e], t.scope){
            case 1:
                delete x2t.properties[e];
                break;
            case 2:
                delete Yht.properties[e];
                break;
            case 3:
                delete I2t.properties[e];
                break;
            case 7:
                delete OAe.properties[e];
                break;
            case 4:
                delete FAe.properties[e];
                break;
            case 5:
            case 6:
                delete Mge.properties[e], delete this.resourceLanguageSettingsSchema.properties[e];
                break;
        }
    }
    updateOverridePropertyPatternKey() {
        for (const e of this.overrideIdentifiers.values()){
            const t = `[${e}]`, n = {
                type: "object",
                description: S(1809, null),
                errorMessage: S(1810, null),
                $ref: TBe
            };
            this.updatePropertyDefaultValue(t, n), UV.properties[t] = n, x2t.properties[t] = n, I2t.properties[t] = n, Yht.properties[t] = n, OAe.properties[t] = n, FAe.properties[t] = n, Mge.properties[t] = n;
        }
    }
    registerOverridePropertyPatternKey() {
        const e = {
            type: "object",
            description: S(1811, null),
            errorMessage: S(1812, null),
            $ref: TBe
        };
        UV.patternProperties[BAe] = e, x2t.patternProperties[BAe] = e, I2t.patternProperties[BAe] = e, Yht.patternProperties[BAe] = e, OAe.patternProperties[BAe] = e, FAe.patternProperties[BAe] = e, Mge.patternProperties[BAe] = e, this._onDidSchemaChange.fire();
    }
    updatePropertyDefaultValue(e, t) {
        const n = this.configurationDefaultsOverrides.get(e)?.configurationDefaultOverrideValue;
        let i, r;
        n && (!t.disallowConfigurationDefault || !n.source) && (i = n.value, r = n.source), om(i) && (i = t.defaultDefaultValue, r = void 0), om(i) && (i = bXr(t.type)), t.default = i, t.defaultValueSource = r;
    }
}, kXr = "\\[([^\\]]+)\\]", wXr = new RegExp(kXr, "g"), BAe = `^(${kXr})+$`, Q4 = new RegExp(BAe), CXr = "glob:", A2t = new yPc, kn.add(iu.Configuration, A2t);

}
