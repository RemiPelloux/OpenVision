import { D, Gt, Ov, Qe, Yw, st, tt, wf, xOe } from "./Iwo.js";
import { bo } from "./arrays.js";
import { or } from "./configuration.js";
import { p7, sW } from "./jsonContributionRegistry.js";
import { Bt } from "./nls.js";
import { Eo, Fi } from "./platform_2.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { _ud, aEy, upn, xMo } from "./ze.js";
var gp, Ute, dpn, hpn, c4t, S$e, k$e, _Ae, Fet, AMo, RJn, Sud, RMo, PMo, w$e, ez, MMo, ppn;
export { AMo, Fet, MMo, PMo, RJn, RMo, S$e, Sud, Ute, _Ae, c4t, dpn, ez, gp, hpn, k$e, ppn, w$e };
var __wakaru_Vg_initialized = false;
export function Vg() {
if (__wakaru_Vg_initialized) return;
__wakaru_Vg_initialized = true;
"use strict";
E(), bo(), Gt(), To(), Bt(), or(), sW(), Eo(), Qe(), gp = {
    Configuration: "base.contributions.configuration"
}, Ute = {
    properties: {},
    patternProperties: {}
}, dpn = {
    properties: {},
    patternProperties: {}
}, hpn = {
    properties: {},
    patternProperties: {}
}, c4t = {
    properties: {},
    patternProperties: {}
}, S$e = {
    properties: {},
    patternProperties: {}
}, k$e = {
    properties: {},
    patternProperties: {}
}, _Ae = {
    properties: {},
    patternProperties: {}
}, Fet = "vscode://schemas/settings/resourceLanguage", AMo = "vscode://schemas/settings/configurationDefaults", RJn = Fi.as(p7.JSONContribution), Sud = class extends st {
    constructor(){
        super(), this.registeredConfigurationDefaults = [], this.overrideIdentifiers = new Set, this._onDidSchemaChange = this._register(new tt), this.onDidSchemaChange = this._onDidSchemaChange.event, this._onDidUpdateConfiguration = this._register(new tt), this.onDidUpdateConfiguration = this._onDidUpdateConfiguration.event, this.configurationDefaultsOverrides = new Map, this.defaultLanguageConfigurationOverridesNode = {
            id: "defaultOverrides",
            title: D(1807, null),
            properties: {}
        }, this.configurationContributors = [
            this.defaultLanguageConfigurationOverridesNode
        ], this.resourceLanguageSettingsSchema = {
            properties: {},
            patternProperties: {},
            additionalProperties: !0,
            allowTrailingCommas: !0,
            allowComments: !0
        }, this.configurationProperties = {}, this.policyConfigurations = new Map, this.excludedConfigurationProperties = {}, RJn.registerSchema(Fet, this.resourceLanguageSettingsSchema), this.registerOverridePropertyPatternKey();
    }
    registerConfiguration(t, e = !0) {
        return this.registerConfigurations([
            t
        ], e), t;
    }
    registerConfigurations(t, e = !0) {
        const n = new Set;
        this.doRegisterConfigurations(t, e, n), RJn.registerSchema(Fet, this.resourceLanguageSettingsSchema), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
            properties: n
        });
    }
    deregisterConfigurations(t) {
        const e = new Set;
        this.doDeregisterConfigurations(t, e), RJn.registerSchema(Fet, this.resourceLanguageSettingsSchema), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
            properties: e
        });
    }
    updateConfigurations({ add: t, remove: e }) {
        const n = new Set;
        this.doDeregisterConfigurations(e, n), this.doRegisterConfigurations(t, !1, n), RJn.registerSchema(Fet, this.resourceLanguageSettingsSchema), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
            properties: n
        });
    }
    registerDefaultConfigurations(t) {
        const e = new Set;
        this.doRegisterDefaultConfigurations(t, e), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
            properties: e,
            defaultsOverrides: !0
        });
    }
    doRegisterDefaultConfigurations(t, e) {
        this.registeredConfigurationDefaults.push(...t);
        const n = [];
        for (const { overrides: i, source: r } of t)for(const s in i){
            e.add(s);
            const o = this.configurationDefaultsOverrides.get(s) ?? this.configurationDefaultsOverrides.set(s, {
                configurationDefaultOverrides: []
            }).get(s), a = i[s];
            if (o.configurationDefaultOverrides.push({
                value: a,
                source: r
            }), ez.test(s)) {
                const l = this.mergeDefaultConfigurationsForOverrideIdentifier(s, a, r, o.configurationDefaultOverrideValue);
                if (!l) continue;
                o.configurationDefaultOverrideValue = l, this.updateDefaultOverrideProperty(s, l, r), n.push(...upn(s));
            } else {
                const l = this.mergeDefaultConfigurationsForConfigurationProperty(s, a, r, o.configurationDefaultOverrideValue);
                if (!l) continue;
                o.configurationDefaultOverrideValue = l;
                const c = this.configurationProperties[s];
                c && (this.updatePropertyDefaultValue(s, c), this.updateSchema(s, c));
            }
        }
        this.doRegisterOverrideIdentifiers(n);
    }
    deregisterDefaultConfigurations(t) {
        const e = new Set;
        this.doDeregisterDefaultConfigurations(t, e), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
            properties: e,
            defaultsOverrides: !0
        });
    }
    doDeregisterDefaultConfigurations(t, e) {
        for (const n of t){
            const i = this.registeredConfigurationDefaults.indexOf(n);
            i !== -1 && this.registeredConfigurationDefaults.splice(i, 1);
        }
        for (const { overrides: n, source: i } of t)for(const r in n){
            const s = this.configurationDefaultsOverrides.get(r);
            if (!s) continue;
            const o = s.configurationDefaultOverrides.findIndex((a)=>i ? a.source?.id === i.id : a.value === n[r]);
            if (o !== -1) {
                if (s.configurationDefaultOverrides.splice(o, 1), s.configurationDefaultOverrides.length === 0 && this.configurationDefaultsOverrides.delete(r), ez.test(r)) {
                    let a;
                    for (const l of s.configurationDefaultOverrides)a = this.mergeDefaultConfigurationsForOverrideIdentifier(r, l.value, l.source, a);
                    a && !xOe(a.value) ? (s.configurationDefaultOverrideValue = a, this.updateDefaultOverrideProperty(r, a, i)) : (this.configurationDefaultsOverrides.delete(r), delete this.configurationProperties[r], delete this.defaultLanguageConfigurationOverridesNode.properties[r]);
                } else {
                    let a;
                    for (const c of s.configurationDefaultOverrides)a = this.mergeDefaultConfigurationsForConfigurationProperty(r, c.value, c.source, a);
                    s.configurationDefaultOverrideValue = a;
                    const l = this.configurationProperties[r];
                    l && (this.updatePropertyDefaultValue(r, l), this.updateSchema(r, l));
                }
                e.add(r);
            }
        }
        this.updateOverridePropertyPatternKey();
    }
    updateDefaultOverrideProperty(t, e, n) {
        const i = {
            type: "object",
            default: e.value,
            description: D(1808, null, aEy(t)),
            $ref: Fet,
            defaultDefaultValue: e.value,
            source: n,
            defaultValueSource: n
        };
        this.configurationProperties[t] = i, this.defaultLanguageConfigurationOverridesNode.properties[t] = i;
    }
    mergeDefaultConfigurationsForOverrideIdentifier(t, e, n, i) {
        const r = i?.value || {}, s = i?.source ?? new Map;
        if (!(s instanceof Map)) {
            console.error("objectConfigurationSources is not a Map");
            return;
        }
        for (const o of Object.keys(e)){
            const a = e[o];
            if (wf(a) && (Ov(r[o]) || wf(r[o]))) {
                if (r[o] = {
                    ...r[o] ?? {},
                    ...a
                }, n) for(const c in a)s.set(`${o}.${c}`, n);
            } else r[o] = a, n ? s.set(o, n) : s.delete(o);
        }
        return {
            value: r,
            source: s
        };
    }
    mergeDefaultConfigurationsForConfigurationProperty(t, e, n, i) {
        const r = this.configurationProperties[t], s = i?.value ?? r?.defaultDefaultValue;
        let o = n;
        if (wf(e) && (r !== void 0 && r.type === "object" || r === void 0 && (Ov(s) || wf(s)))) {
            if (o = i?.source ?? new Map, !(o instanceof Map)) {
                console.error("defaultValueSource is not a Map");
                return;
            }
            for(const l in e)n && o.set(`${t}.${l}`, n);
            e = {
                ...wf(s) ? s : {},
                ...e
            };
        }
        return {
            value: e,
            source: o
        };
    }
    deltaConfiguration(t) {
        let e = !1;
        const n = new Set;
        t.removedDefaults && (this.doDeregisterDefaultConfigurations(t.removedDefaults, n), e = !0), t.addedDefaults && (this.doRegisterDefaultConfigurations(t.addedDefaults, n), e = !0), t.removedConfigurations && this.doDeregisterConfigurations(t.removedConfigurations, n), t.addedConfigurations && this.doRegisterConfigurations(t.addedConfigurations, !1, n), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
            properties: n,
            defaultsOverrides: e
        });
    }
    notifyConfigurationSchemaUpdated(...t) {
        this._onDidSchemaChange.fire();
    }
    registerOverrideIdentifiers(t) {
        this.doRegisterOverrideIdentifiers(t), this._onDidSchemaChange.fire();
    }
    doRegisterOverrideIdentifiers(t) {
        for (const e of t)this.overrideIdentifiers.add(e);
        this.updateOverridePropertyPatternKey();
    }
    doRegisterConfigurations(t, e, n) {
        t.forEach((i)=>{
            this.validateAndRegisterProperties(i, e, i.extensionInfo, i.restrictedProperties, void 0, n), this.configurationContributors.push(i), this.registerJSONConfiguration(i);
        });
    }
    doDeregisterConfigurations(t, e) {
        const n = (i)=>{
            if (i.properties) for(const r in i.properties){
                e.add(r);
                const s = this.configurationProperties[r];
                s?.policy?.name && this.policyConfigurations.delete(s.policy.name), delete this.configurationProperties[r], this.removeFromSchema(r, i.properties[r]);
            }
            i.allOf?.forEach((r)=>n(r));
        };
        for (const i of t){
            n(i);
            const r = this.configurationContributors.indexOf(i);
            r !== -1 && this.configurationContributors.splice(r, 1);
        }
    }
    validateAndRegisterProperties(t, e = !0, n, i, r = 4, s) {
        r = Yw(t.scope) ? r : t.scope;
        const o = t.properties;
        if (o) for(const l in o){
            const c = o[l];
            if (e && _ud(l, c)) {
                delete o[l];
                continue;
            }
            c.source = n, c.defaultDefaultValue = o[l].default, this.updatePropertyDefaultValue(l, c), ez.test(l) ? c.scope = void 0 : (c.scope = Yw(c.scope) ? r : c.scope, c.restricted = Yw(c.restricted) ? !!i?.includes(l) : c.restricted);
            const u = o[l].hasOwnProperty("included") && !o[l].included, d = o[l].policy?.name;
            u ? (this.excludedConfigurationProperties[l] = o[l], d && (this.policyConfigurations.set(d, l), s.add(l)), delete o[l]) : (s.add(l), d && this.policyConfigurations.set(d, l), this.configurationProperties[l] = o[l], !o[l].deprecationMessage && o[l].markdownDeprecationMessage && (o[l].deprecationMessage = o[l].markdownDeprecationMessage));
        }
        const a = t.allOf;
        if (a) for (const l of a)this.validateAndRegisterProperties(l, e, n, i, r, s);
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
        const t = new Map;
        for (const [e, n] of this.configurationDefaultsOverrides)n.configurationDefaultOverrideValue && t.set(e, n.configurationDefaultOverrideValue);
        return t;
    }
    registerJSONConfiguration(t) {
        const e = (n)=>{
            const i = n.properties;
            if (i) for(const s in i)this.updateSchema(s, i[s]);
            n.allOf?.forEach(e);
        };
        e(t);
    }
    updateSchema(t, e) {
        switch(Ute.properties[t] = e, e.scope){
            case 1:
                dpn.properties[t] = e;
                break;
            case 2:
                c4t.properties[t] = e;
                break;
            case 3:
                hpn.properties[t] = e;
                break;
            case 7:
                S$e.properties[t] = e;
                break;
            case 4:
                k$e.properties[t] = e;
                break;
            case 5:
                _Ae.properties[t] = e;
                break;
            case 6:
                _Ae.properties[t] = e, this.resourceLanguageSettingsSchema.properties[t] = e;
                break;
        }
    }
    removeFromSchema(t, e) {
        switch(delete Ute.properties[t], e.scope){
            case 1:
                delete dpn.properties[t];
                break;
            case 2:
                delete c4t.properties[t];
                break;
            case 3:
                delete hpn.properties[t];
                break;
            case 7:
                delete S$e.properties[t];
                break;
            case 4:
                delete k$e.properties[t];
                break;
            case 5:
            case 6:
                delete _Ae.properties[t], delete this.resourceLanguageSettingsSchema.properties[t];
                break;
        }
    }
    updateOverridePropertyPatternKey() {
        for (const t of this.overrideIdentifiers.values()){
            const e = `[${t}]`, n = {
                type: "object",
                description: D(1809, null),
                errorMessage: D(1810, null),
                $ref: Fet
            };
            this.updatePropertyDefaultValue(e, n), Ute.properties[e] = n, dpn.properties[e] = n, hpn.properties[e] = n, c4t.properties[e] = n, S$e.properties[e] = n, k$e.properties[e] = n, _Ae.properties[e] = n;
        }
    }
    registerOverridePropertyPatternKey() {
        const t = {
            type: "object",
            description: D(1811, null),
            errorMessage: D(1812, null),
            $ref: Fet
        };
        Ute.patternProperties[w$e] = t, dpn.patternProperties[w$e] = t, hpn.patternProperties[w$e] = t, c4t.patternProperties[w$e] = t, S$e.patternProperties[w$e] = t, k$e.patternProperties[w$e] = t, _Ae.patternProperties[w$e] = t, this._onDidSchemaChange.fire();
    }
    updatePropertyDefaultValue(t, e) {
        const n = this.configurationDefaultsOverrides.get(t)?.configurationDefaultOverrideValue;
        let i, r;
        n && (!e.disallowConfigurationDefault || !n.source) && (i = n.value, r = n.source), Ov(i) && (i = e.defaultDefaultValue, r = void 0), Ov(i) && (i = xMo(e.type)), e.default = i, e.defaultValueSource = r;
    }
}, RMo = "\\[([^\\]]+)\\]", PMo = new RegExp(RMo, "g"), w$e = `^(${RMo})+$`, ez = new RegExp(w$e), MMo = "glob:", ppn = new Sud, Fi.add(gp.Configuration, ppn);

}
