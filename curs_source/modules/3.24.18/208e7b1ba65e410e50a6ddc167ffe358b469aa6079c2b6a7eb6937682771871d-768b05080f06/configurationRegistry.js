import { Vn } from "./arrays.js";
import { at } from "./configuration.js";
import { N, se } from "./event.js";
import { LR, vxe } from "./jsonContributionRegistry.js";
import { Zs } from "./labels.js";
import { J, j } from "./lifecycle.js";
import { Ne, t4 } from "./nls.js";
import { Un, pr, ri } from "./platform_2.js";
import { Iv } from "./processMainService.js";
import { h } from "./tslib.es6.js";
import { W4, Ze } from "./types.js";
function Av(e, t) {
    let n;
    return t.length === 0 ? n = e : n = e.replace(/\{(\d+)\}/g, (r, s)=>{
        const i = parseInt(s, 10), a = t[i];
        let o = r;
        return typeof a == "string" ? o = a : (typeof a == "number" || typeof a == "boolean" || a === void 0 || a === null) && (o = String(a)), o;
    }), t4 && (n = "\uFF3B" + n.replace(/[aouei]/g, "$&$&") + "\uFF3D"), n;
}
function E(e, t, ...n) {
    return Av(typeof e == "number" ? Zx(e, t) : t, n);
}
function Zx(e, t) {
    const n = Iv()?.[e];
    if (typeof n != "string") {
        if (typeof t == "string") return t;
        throw new Error(`!!! NLS MISSING: ${e} !!!`);
    }
    return n;
}
function aa(e) {
    return typeof e > "u";
}
function Sr(e) {
    return aa(e) || e === null;
}
function F4(e) {
    if (!Un(e)) return !1;
    for(const t in e)if (W4.call(e, t)) return !1;
    return !0;
}
function hxe(e) {
    return e.replace(/[\[\]]/g, "");
}
function Bm(e) {
    const t = [];
    if (Ai.test(e)) {
        let n = xR.exec(e);
        for(; n?.length;){
            const r = n[1].trim();
            r && t.push(r), n = xR.exec(e);
        }
    }
    return Zs(t);
}
function Sxe(e) {
    switch(Array.isArray(e) ? e[0] : e){
        case "boolean":
            return !1;
        case "integer":
        case "number":
            return 0;
        case "string":
            return "";
        case "array":
            return [];
        case "object":
            return {};
        default:
            return null;
    }
}
function yxe(e, t) {
    return e.trim() ? Ai.test(e) ? E(1814, null, e) : zm.getConfigurationProperties()[e] !== void 0 ? E(1815, null, e) : t.policy?.name && zm.getPolicyConfigurations().get(t.policy?.name) !== void 0 ? E(1816, null, e, t.policy?.name, zm.getPolicyConfigurations().get(t.policy?.name)) : null : E(1813, null);
}
var Jr, Gm, Vm, $m, jm, Hm, qm, xl, ja, Km, Z5, UR, xR, da, Ai, FR, zm;
export { $m, Ai, Av, Bm, E, F4, FR, Gm, Hm, Jr, Km, Sr, Sxe, UR, Vm, Z5, Zx, aa, da, hxe, ja, jm, qm, xR, xl, yxe, zm };
var __wakaru_ua_initialized = false;
export function ua() {
if (__wakaru_ua_initialized) return;
__wakaru_ua_initialized = true;
"use strict";
h(), Vn(), se(), Ze(), Ne(), at(), vxe(), ri(), j(), Jr = {
    Configuration: "base.contributions.configuration"
}, Gm = {
    properties: {},
    patternProperties: {}
}, Vm = {
    properties: {},
    patternProperties: {}
}, $m = {
    properties: {},
    patternProperties: {}
}, jm = {
    properties: {},
    patternProperties: {}
}, Hm = {
    properties: {},
    patternProperties: {}
}, qm = {
    properties: {},
    patternProperties: {}
}, xl = {
    properties: {},
    patternProperties: {}
}, ja = "vscode://schemas/settings/resourceLanguage", Km = pr.as(LR.JSONContribution), Z5 = class extends J {
    constructor(){
        super(), this.registeredConfigurationDefaults = [], this.overrideIdentifiers = new Set, this._onDidSchemaChange = this._register(new N), this.onDidSchemaChange = this._onDidSchemaChange.event, this._onDidUpdateConfiguration = this._register(new N), this.onDidUpdateConfiguration = this._onDidUpdateConfiguration.event, this.configurationDefaultsOverrides = new Map, this.defaultLanguageConfigurationOverridesNode = {
            id: "defaultOverrides",
            title: E(1807, null),
            properties: {}
        }, this.configurationContributors = [
            this.defaultLanguageConfigurationOverridesNode
        ], this.resourceLanguageSettingsSchema = {
            properties: {},
            patternProperties: {},
            additionalProperties: !0,
            allowTrailingCommas: !0,
            allowComments: !0
        }, this.configurationProperties = {}, this.policyConfigurations = new Map, this.excludedConfigurationProperties = {}, Km.registerSchema(ja, this.resourceLanguageSettingsSchema), this.registerOverridePropertyPatternKey();
    }
    registerConfiguration(e, t = !0) {
        return this.registerConfigurations([
            e
        ], t), e;
    }
    registerConfigurations(e, t = !0) {
        const n = new Set;
        this.doRegisterConfigurations(e, t, n), Km.registerSchema(ja, this.resourceLanguageSettingsSchema), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
            properties: n
        });
    }
    deregisterConfigurations(e) {
        const t = new Set;
        this.doDeregisterConfigurations(e, t), Km.registerSchema(ja, this.resourceLanguageSettingsSchema), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
            properties: t
        });
    }
    updateConfigurations({ add: e, remove: t }) {
        const n = new Set;
        this.doDeregisterConfigurations(t, n), this.doRegisterConfigurations(e, !1, n), Km.registerSchema(ja, this.resourceLanguageSettingsSchema), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire({
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
        for (const { overrides: r, source: s } of e)for(const i in r){
            t.add(i);
            const a = this.configurationDefaultsOverrides.get(i) ?? this.configurationDefaultsOverrides.set(i, {
                configurationDefaultOverrides: []
            }).get(i), o = r[i];
            if (a.configurationDefaultOverrides.push({
                value: o,
                source: s
            }), Ai.test(i)) {
                const l = this.mergeDefaultConfigurationsForOverrideIdentifier(i, o, s, a.configurationDefaultOverrideValue);
                if (!l) continue;
                a.configurationDefaultOverrideValue = l, this.updateDefaultOverrideProperty(i, l, s), n.push(...Bm(i));
            } else {
                const l = this.mergeDefaultConfigurationsForConfigurationProperty(i, o, s, a.configurationDefaultOverrideValue);
                if (!l) continue;
                a.configurationDefaultOverrideValue = l;
                const d = this.configurationProperties[i];
                d && (this.updatePropertyDefaultValue(i, d), this.updateSchema(i, d));
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
            const r = this.registeredConfigurationDefaults.indexOf(n);
            r !== -1 && this.registeredConfigurationDefaults.splice(r, 1);
        }
        for (const { overrides: n, source: r } of e)for(const s in n){
            const i = this.configurationDefaultsOverrides.get(s);
            if (!i) continue;
            const a = i.configurationDefaultOverrides.findIndex((o)=>r ? o.source?.id === r.id : o.value === n[s]);
            if (a !== -1) {
                if (i.configurationDefaultOverrides.splice(a, 1), i.configurationDefaultOverrides.length === 0 && this.configurationDefaultsOverrides.delete(s), Ai.test(s)) {
                    let o;
                    for (const l of i.configurationDefaultOverrides)o = this.mergeDefaultConfigurationsForOverrideIdentifier(s, l.value, l.source, o);
                    o && !F4(o.value) ? (i.configurationDefaultOverrideValue = o, this.updateDefaultOverrideProperty(s, o, r)) : (this.configurationDefaultsOverrides.delete(s), delete this.configurationProperties[s], delete this.defaultLanguageConfigurationOverridesNode.properties[s]);
                } else {
                    let o;
                    for (const d of i.configurationDefaultOverrides)o = this.mergeDefaultConfigurationsForConfigurationProperty(s, d.value, d.source, o);
                    i.configurationDefaultOverrideValue = o;
                    const l = this.configurationProperties[s];
                    l && (this.updatePropertyDefaultValue(s, l), this.updateSchema(s, l));
                }
                t.add(s);
            }
        }
        this.updateOverridePropertyPatternKey();
    }
    updateDefaultOverrideProperty(e, t, n) {
        const r = {
            type: "object",
            default: t.value,
            description: E(1808, null, hxe(e)),
            $ref: ja,
            defaultDefaultValue: t.value,
            source: n,
            defaultValueSource: n
        };
        this.configurationProperties[e] = r, this.defaultLanguageConfigurationOverridesNode.properties[e] = r;
    }
    mergeDefaultConfigurationsForOverrideIdentifier(e, t, n, r) {
        const s = r?.value || {}, i = r?.source ?? new Map;
        if (!(i instanceof Map)) {
            console.error("objectConfigurationSources is not a Map");
            return;
        }
        for (const a of Object.keys(t)){
            const o = t[a];
            if (Un(o) && (aa(s[a]) || Un(s[a]))) {
                if (s[a] = {
                    ...s[a] ?? {},
                    ...o
                }, n) for(const d in o)i.set(`${a}.${d}`, n);
            } else s[a] = o, n ? i.set(a, n) : i.delete(a);
        }
        return {
            value: s,
            source: i
        };
    }
    mergeDefaultConfigurationsForConfigurationProperty(e, t, n, r) {
        const s = this.configurationProperties[e], i = r?.value ?? s?.defaultDefaultValue;
        let a = n;
        if (Un(t) && (s !== void 0 && s.type === "object" || s === void 0 && (aa(i) || Un(i)))) {
            if (a = r?.source ?? new Map, !(a instanceof Map)) {
                console.error("defaultValueSource is not a Map");
                return;
            }
            for(const l in t)n && a.set(`${e}.${l}`, n);
            t = {
                ...Un(i) ? i : {},
                ...t
            };
        }
        return {
            value: t,
            source: a
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
        e.forEach((r)=>{
            this.validateAndRegisterProperties(r, t, r.extensionInfo, r.restrictedProperties, void 0, n), this.configurationContributors.push(r), this.registerJSONConfiguration(r);
        });
    }
    doDeregisterConfigurations(e, t) {
        const n = (r)=>{
            if (r.properties) for(const s in r.properties){
                t.add(s);
                const i = this.configurationProperties[s];
                i?.policy?.name && this.policyConfigurations.delete(i.policy.name), delete this.configurationProperties[s], this.removeFromSchema(s, r.properties[s]);
            }
            r.allOf?.forEach((s)=>n(s));
        };
        for (const r of e){
            n(r);
            const s = this.configurationContributors.indexOf(r);
            s !== -1 && this.configurationContributors.splice(s, 1);
        }
    }
    validateAndRegisterProperties(e, t = !0, n, r, s = 4, i) {
        s = Sr(e.scope) ? s : e.scope;
        const a = e.properties;
        if (a) for(const l in a){
            const d = a[l];
            if (t && yxe(l, d)) {
                delete a[l];
                continue;
            }
            d.source = n, d.defaultDefaultValue = a[l].default, this.updatePropertyDefaultValue(l, d), Ai.test(l) ? d.scope = void 0 : (d.scope = Sr(d.scope) ? s : d.scope, d.restricted = Sr(d.restricted) ? !!r?.includes(l) : d.restricted);
            const u = a[l].hasOwnProperty("included") && !a[l].included, m = a[l].policy?.name;
            u ? (this.excludedConfigurationProperties[l] = a[l], m && (this.policyConfigurations.set(m, l), i.add(l)), delete a[l]) : (i.add(l), m && this.policyConfigurations.set(m, l), this.configurationProperties[l] = a[l], !a[l].deprecationMessage && a[l].markdownDeprecationMessage && (a[l].deprecationMessage = a[l].markdownDeprecationMessage));
        }
        const o = e.allOf;
        if (o) for (const l of o)this.validateAndRegisterProperties(l, t, n, r, s, i);
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
            const r = n.properties;
            if (r) for(const i in r)this.updateSchema(i, r[i]);
            n.allOf?.forEach(t);
        };
        t(e);
    }
    updateSchema(e, t) {
        switch(Gm.properties[e] = t, t.scope){
            case 1:
                Vm.properties[e] = t;
                break;
            case 2:
                jm.properties[e] = t;
                break;
            case 3:
                $m.properties[e] = t;
                break;
            case 7:
                Hm.properties[e] = t;
                break;
            case 4:
                qm.properties[e] = t;
                break;
            case 5:
                xl.properties[e] = t;
                break;
            case 6:
                xl.properties[e] = t, this.resourceLanguageSettingsSchema.properties[e] = t;
                break;
        }
    }
    removeFromSchema(e, t) {
        switch(delete Gm.properties[e], t.scope){
            case 1:
                delete Vm.properties[e];
                break;
            case 2:
                delete jm.properties[e];
                break;
            case 3:
                delete $m.properties[e];
                break;
            case 7:
                delete Hm.properties[e];
                break;
            case 4:
                delete qm.properties[e];
                break;
            case 5:
            case 6:
                delete xl.properties[e], delete this.resourceLanguageSettingsSchema.properties[e];
                break;
        }
    }
    updateOverridePropertyPatternKey() {
        for (const e of this.overrideIdentifiers.values()){
            const t = `[${e}]`, n = {
                type: "object",
                description: E(1809, null),
                errorMessage: E(1810, null),
                $ref: ja
            };
            this.updatePropertyDefaultValue(t, n), Gm.properties[t] = n, Vm.properties[t] = n, $m.properties[t] = n, jm.properties[t] = n, Hm.properties[t] = n, qm.properties[t] = n, xl.properties[t] = n;
        }
    }
    registerOverridePropertyPatternKey() {
        const e = {
            type: "object",
            description: E(1811, null),
            errorMessage: E(1812, null),
            $ref: ja
        };
        Gm.patternProperties[da] = e, Vm.patternProperties[da] = e, $m.patternProperties[da] = e, jm.patternProperties[da] = e, Hm.patternProperties[da] = e, qm.patternProperties[da] = e, xl.patternProperties[da] = e, this._onDidSchemaChange.fire();
    }
    updatePropertyDefaultValue(e, t) {
        const n = this.configurationDefaultsOverrides.get(e)?.configurationDefaultOverrideValue;
        let r, s;
        n && (!t.disallowConfigurationDefault || !n.source) && (r = n.value, s = n.source), aa(r) && (r = t.defaultDefaultValue, s = void 0), aa(r) && (r = Sxe(t.type)), t.default = r, t.defaultValueSource = s;
    }
}, UR = "\\[([^\\]]+)\\]", xR = new RegExp(UR, "g"), da = `^(${UR})+$`, Ai = new RegExp(da), FR = "glob:", zm = new Z5, pr.add(Jr.Configuration, zm);

}
