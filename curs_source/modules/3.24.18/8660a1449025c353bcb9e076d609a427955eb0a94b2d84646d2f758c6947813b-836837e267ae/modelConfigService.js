import { Arl, BTi, Ddk, Ldk, _pk, fpk, hat, mig, mpk, opk, pig, vpk } from "./Aeg.js";
import { Pn, Qe, st } from "./Iwo.js";
import { bn } from "./SZu.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { vl, wm } from "./buildFlags.js";
import { uv } from "./composerData.js";
import { Cr, _s } from "./experimentService.js";
import { kxn } from "./experimentalModelConfig.js";
import { Rn } from "./extensions.js";
import { lrs } from "./index_17.ts";
import { Mt } from "./index_197.js";
import { It, dn } from "./instantiation.js";
import { FVh, Qba, Sbe, d1n, h1n, m0e, tvi, u1n } from "./ipa.js";
import { qCn } from "./localProviderModelEnrichment.js";
import { eg, of } from "./modelConfigServiceTypes.js";
import { Fxn, XTi, uig } from "./modelPickerDisplayConfiguration.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { RWt, Um } from "./reactiveStorageTypes_2.js";
import { Zi, ki } from "./storage_2.js";
import { v1 } from "./store.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Wt, gA, ks, pi, vt, w$o } from "./ze.js";
var gig, YPe, fig, crs;
export { YPe, crs, fig, gig };
var __wakaru_$4e_initialized = false;
export function $4e() {
if (__wakaru_$4e_initialized) return;
__wakaru_$4e_initialized = true;
"use strict";
E(), Mt(), lrs(), Qe(), Rn(), It(), wm(), el(), Um(), Zi(), Cm(), uv(), qCn(), Ss(), _s(), kxn(), Fxn(), v1(), pi(), of(), gig = 3600 * 1e3, YPe = [
    {
        name: "default",
        clientDisplayName: "Auto",
        inputboxShortModelName: "Auto",
        defaultOn: !0,
        supportsAgent: !0,
        supportsMaxMode: !0,
        supportsNonMaxMode: !0,
        supportsThinking: !1,
        supportsImages: !0,
        isRecommendedForBackgroundComposer: !0,
        parameterDefinitions: [],
        variants: [],
        legacySlugs: [],
        idAliases: [],
        cloudAgentEffortModes: [],
        modelPickerBadges: []
    }
], fig = {
    kind: "loading"
}, crs = class extends st {
    constructor(t, e, n, i, r){
        super(), this.reactiveStorageService = t, this.structuredLogService = e, this.experimentService = n, this.instantiationService = i, this.storageService = r, this._isMigrating = !1, this._modelConfigMigrationPending = !0, this._privateInferenceCatalog = Wt({
            kind: "off"
        }), this._availableDefaultModels = gA((s)=>(this._register(Pn(s)), vt(()=>this.computeAvailableDefaultModels())));
    }
    getAnalyticsService() {
        return this.instantiationService.invokeFunction((t)=>t.get(Qr));
    }
    isPrivateInferenceMode() {
        return this.getPrivateInferenceCatalog().kind !== "off";
    }
    getPrivateInferenceCatalog() {
        return this._privateInferenceCatalog[0]();
    }
    setPrivateInferenceCatalog(t) {
        this._privateInferenceCatalog[1](t);
    }
    getDefaultModelForFeature(t) {
        const e = this.reactiveStorageService.applicationUserPersistentStorage.featureModelConfigs;
        let n;
        switch(t){
            case "composer":
                n = e?.composer;
                break;
            case "cmd-k":
                n = e?.cmdK;
                break;
            case "background-composer":
                n = e?.backgroundComposer;
                break;
            case "plan-execution":
                n = e?.planExecution;
                break;
            case "spec":
                n = e?.spec;
                break;
            case "deep-search":
                n = e?.deepSearch;
                break;
            case "quick-agent":
                n = e?.quickAgent;
                break;
            default:
                n = void 0;
        }
        return n?.defaultModel ? n.defaultModel : "default";
    }
    shouldAllowMultiModel(t, e, n) {
        if (t === "background-composer" || t === "composer-ensemble" || (e.selectedModels?.length ?? 0) > 1 || (e.modelName?.includes(",") ?? !1)) return !0;
        const s = !!(n.modelName?.includes(",") || n.selectedModels && n.selectedModels.length > 1), o = e.modelName === void 0 && e.selectedModels === void 0;
        return !!(s && o);
    }
    resolveToCatalogName(t, e) {
        return ks(()=>{
            for (const n of e)if (n.name === t) return n.name;
            for (const n of e)if (n.legacySlugs?.includes(t)) return n.name;
            return t;
        });
    }
    migrateVisibilityArrayToCatalog(t, e) {
        const n = new Set, i = [];
        for (const r of t){
            const s = this.resolveToCatalogName(r, e);
            n.has(s) || (n.add(s), i.push(s));
        }
        return i;
    }
    migrateModelSettingsToCurrentCatalog() {
        const e = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings, n = this.getAvailableDefaultModels();
        if (n.length === 0) return;
        const i = e.modelOverrideEnabled ?? [], r = e.modelOverrideDisabled ?? [], s = this.migrateVisibilityArrayToCatalog(i, n), o = this.migrateVisibilityArrayToCatalog(r, n), a = i.length !== s.length || !i.every((c, u)=>c === s[u]), l = r.length !== o.length || !r.every((c, u)=>c === o[u]);
        a && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", s), l && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", o), (a || l) && (this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelVisibilityMigrated", !0), this.structuredLogService.info("composer", "Migrated model visibility to current catalog", {
            subkey: "model_visibility_catalog_migration",
            enabledBeforeCount: String(i.length),
            enabledAfterCount: String(s.length),
            disabledBeforeCount: String(r.length),
            disabledAfterCount: String(o.length)
        }));
        for (const c of RWt){
            const u = e.modelConfig[c];
            if (!u) continue;
            let d = !1;
            if (u.modelName) {
                const g = u.modelName.split(",").map((f)=>f.trim()).filter((f)=>f.length > 0).map((f)=>this.resolveToCatalogName(f, n)).join(",");
                g !== u.modelName && (this.structuredLogService.info("composer", "Migrated modelConfig modelName to current catalog", {
                    subkey: "model_config_modelname_catalog_migration",
                    surface: c,
                    before: u.modelName,
                    after: g
                }), this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelConfig", c, {
                    ...u,
                    modelName: g
                }), d = !0);
            }
            if (u.selectedModels && u.selectedModels.length > 0 && !d) {
                let h = !1;
                const p = u.selectedModels.map((g)=>{
                    const f = this.resolveToCatalogName(g.modelId, n);
                    return f !== g.modelId ? (h = !0, {
                        ...g,
                        modelId: f
                    }) : g;
                });
                h && (this.structuredLogService.info("composer", "Migrated modelConfig selectedModels to current catalog", {
                    subkey: "model_config_selectedmodels_catalog_migration",
                    surface: c,
                    before: u.selectedModels.map((g)=>g.modelId).join(","),
                    after: p.map((g)=>g.modelId).join(",")
                }), this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelConfig", c, {
                    ...u,
                    selectedModels: p
                }));
            }
        }
    }
    migrateParameterizedModelConfigIfNecessary() {
        const t = this.reactiveStorageService.applicationUserPersistentStorage;
        if (!(!this._modelConfigMigrationPending && t.availableDefaultModels2 === this._lastMigratedCatalog) && (t.availableDefaultModels2?.length ?? 0) !== 0) {
            this._isMigrating = !0;
            try {
                const e = [];
                for (const i of RWt){
                    const r = t.aiSettings.modelConfig[i];
                    r?.modelName && (r.selectedModels?.length ?? 0) === 0 && e.push(i);
                }
                const n = this.getAvailableDefaultModels();
                for (const i of e){
                    const r = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelConfig[i];
                    if (!r?.modelName || (r.selectedModels?.length ?? 0) > 0) continue;
                    const s = this.resolveSelectedModelsFromModelName(r.modelName, n);
                    r.modelName && s.length > 0 && this.structuredLogService.info("composer", "Migrated modelName to selectedModels", {
                        subkey: "model_config_parameterized_migration",
                        surface: i,
                        sourceModelName: r.modelName,
                        selectedModelIds: s.map((o)=>o.modelId).join(",")
                    }), this.setModelConfig(i, {
                        selectedModels: s
                    });
                }
                this.migrateModelSettingsToCurrentCatalog(), this._lastMigratedCatalog = t.availableDefaultModels2, this._modelConfigMigrationPending = !1;
            } finally{
                this._isMigrating = !1;
            }
        }
    }
    triggerParameterizedModelConfigMigration() {
        this._modelConfigMigrationPending = !0, this.migrateParameterizedModelConfigIfNecessary();
    }
    resolveSelectedModelsFromModelName(t, e = this.getAvailableDefaultModels()) {
        const n = this.normalizeModelList(t);
        return n.length === 0 ? [] : n.map((i)=>({
                modelId: e.length > 0 ? this.resolveToCatalogName(i, e) : i,
                parameters: []
            }));
    }
    logSetModelConfigInputs(t, e, n, i) {
        this.structuredLogService.info("composer", "ModelConfigService received model config update", {
            subkey: "model_config_set_inputs",
            surface: t,
            currentModelNameDefined: e.modelName !== void 0,
            currentModelNameValue: e.modelName ?? "",
            currentModelNameHasKey: Object.prototype.hasOwnProperty.call(e, "modelName"),
            currentSelectedModelsDefined: e.selectedModels !== void 0,
            currentSelectedModelsHasKey: Object.prototype.hasOwnProperty.call(e, "selectedModels"),
            currentSelectedModelsLength: String(e.selectedModels?.length ?? 0),
            newModelNameDefined: n.modelName !== void 0,
            newModelNameValue: n.modelName ?? "",
            newModelNameHasKey: Object.prototype.hasOwnProperty.call(n, "modelName"),
            newSelectedModelsDefined: n.selectedModels !== void 0,
            newSelectedModelsHasKey: Object.prototype.hasOwnProperty.call(n, "selectedModels"),
            newSelectedModelsLength: String(n.selectedModels?.length ?? 0),
            ...i
        });
    }
    getModelConfig(t) {
        const e = this.getStoredModelConfig(t);
        if (t === "composer") {
            const n = this.modelInPlaceOfTurnedOff(e);
            n !== void 0 && (e.modelName = n, e.selectedModels = [
                {
                    modelId: n,
                    parameters: []
                }
            ]);
        }
        return e;
    }
    getStoredModelConfig(t) {
        this._isMigrating || ks(()=>this.migrateParameterizedModelConfigIfNecessary());
        let e = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelConfig[t];
        e || (e = {
            modelName: this.getDefaultModelForFeature(t),
            maxMode: !1
        }, t === "background-composer" && (e.maxMode = this.resolveCloudMaxMode(e)));
        const n = BTi({
            ...e
        });
        if (n.modelName) {
            const i = ks(()=>{
                const r = this.getAvailableDefaultModels();
                return r.length === 0 ? n.modelName : n.modelName.split(",").map((a)=>a.trim()).filter((a)=>a.length > 0).map((a)=>this.resolvePersistedModelIdForRead(a, r).modelId).join(",");
            });
            n.modelName = i;
        }
        if (n.selectedModels && n.selectedModels.length > 0) {
            const i = ks(()=>{
                const r = this.getAvailableDefaultModels();
                return r.length === 0 ? n.selectedModels : this.resolveSelectedModelsForRead(n.selectedModels, r);
            });
            n.selectedModels = i;
        }
        return t === "plan-execution" && (n.maxMode = this.getStoredModelConfig("composer").maxMode), n;
    }
    isModelTurnedOff(t) {
        const e = this.getAvailableDefaultModels().find((n)=>n.name === t);
        return e !== void 0 && this.isRowTurnedOff(e, this.readUserModelOverrides());
    }
    readUserModelOverrides() {
        const t = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings, e = new Set(t.modelOverrideEnabled ?? []), n = new Set(t.modelOverrideDisabled ?? []);
        return (i)=>e.has(i) ? !0 : n.has(i) ? !1 : void 0;
    }
    isRowShownOn(t, e) {
        return e(t.name) ?? t.defaultOn;
    }
    isRowTurnedOff(t, e) {
        const n = e(t.name);
        return n !== void 0 ? !n : this.isPrivateInferenceMode() && !t.defaultOn;
    }
    modelInPlaceOfTurnedOff(t) {
        const e = this.getPrivateInferenceCatalog();
        if (e.kind === "loading") return;
        const n = ks(()=>this.getAvailableDefaultModels()), i = t.selectedModels?.[0]?.modelId ?? t.modelName, r = n.find((c)=>c.name === i);
        if (r === void 0) return;
        const s = this.readUserModelOverrides();
        if (!this.isRowTurnedOff(r, s)) return;
        const o = e.kind === "off" && !vl.localMode, a = n.filter((c)=>(o || c.name !== "default") && this.isRowShownOn(c, s)), l = e.kind === "ready" ? e.defaultModelId : o ? "default" : void 0;
        return Arl(a, l);
    }
    getExperimentalModelCatalog() {
        return this.isPrivateInferenceMode() ? {
            modelId: void 0,
            displayName: void 0
        } : Ddk(this.reactiveStorageService.applicationUserPersistentStorage);
    }
    applySubmitModelOverrides(t) {
        const e = this.experimentService.checkFeatureGate("opt_devs_into_experimental_model_toggle", {
            disableExposureLog: !0
        });
        return Ldk(t, {
            gateEnabled: e,
            catalog: this.getExperimentalModelCatalog()
        });
    }
    resolveCloudMaxMode(t) {
        const e = this.reactiveStorageService.applicationUserPersistentStorage.hasTokenBasedPricing, n = this.getAvailableDefaultModels();
        return (t.selectedModels && t.selectedModels.length > 0 ? t.selectedModels : [
            {
                modelId: t.modelName,
                parameters: void 0
            }
        ]).some((r)=>opk({
                modelId: r.modelId,
                parameters: r.parameters,
                hasTokenBasedPricing: e,
                parameterizedModels: n
            }));
    }
    applyInvariants(t, e, n, i) {
        const r = {
            ...t,
            ...e
        }, s = ()=>{
            !r.selectedModels || r.selectedModels.length === 0 || (r.selectedModels = r.selectedModels.map((l)=>{
                const c = this.getAvailableDefaultModels().find((h)=>h.name === l.modelId), u = l.parameters ?? [];
                if (!c || c.parameterDefinitions.length === 0 || u.length === 0) return u === l.parameters ? l : {
                    ...l,
                    parameters: u
                };
                const d = h1n(c, u, r.maxMode);
                return d ? {
                    modelId: l.modelId,
                    parameters: d.parameterValues.map((h)=>({
                            id: h.id,
                            value: h.value
                        }))
                } : l;
            }));
        }, o = ()=>{
            const l = this.resolveSelectedModelsFromModelName(r.modelName);
            if (l.length === 0) {
                r.selectedModels = null, this.structuredLogService.warn("composer", "Model config write with modelName produced no selectedModels", {
                    subkey: "model_config_modelname_write_empty_selectedmodels",
                    surface: n,
                    sourceModelName: e.modelName ?? "",
                    finalModelName: r.modelName ?? "",
                    previousSelectedModels: JSON.stringify(t.selectedModels ?? null)
                });
                return;
            }
            const c = t.selectedModels ?? [];
            if (c.length === l.length && c.every((d, h)=>d.modelId === l[h]?.modelId) && c.length > 0) {
                r.selectedModels = c, this.structuredLogService.info("composer", "Preserved selectedModels during modelName-only write", {
                    subkey: "model_config_modelname_write_preserved_selectedmodels",
                    surface: n,
                    sourceModelName: e.modelName ?? "",
                    finalModelName: r.modelName ?? "",
                    preservedSelectedModelIds: c.map((d)=>d.modelId).join(",")
                });
                return;
            }
            r.selectedModels = l, this.structuredLogService.info("composer", "Synchronized selectedModels from modelName-only write", {
                subkey: "model_config_modelname_write_synced_selectedmodels",
                surface: n,
                sourceModelName: e.modelName ?? "",
                finalModelName: r.modelName ?? "",
                derivedSelectedModelIds: l.map((d)=>d.modelId).join(","),
                derivedSelectedModelsCount: String(l.length)
            });
        };
        if (e.selectedModels != null) {
            const l = e.selectedModels;
            l.length > 0 ? r.modelName = l.map((c)=>c.modelId).join(",") : (this.structuredLogService.warn("composer", "Model config reset to default due to empty selectedModels", {
                subkey: "model_config_empty_selected_models_reset",
                surface: n,
                previousModelName: t.modelName,
                hasIncomingModelName: String(e.modelName !== void 0),
                fallbackMode: "complete_fallback"
            }), r.modelName = "default", r.selectedModels = null);
        }
        if (e.modelName !== void 0 && !Object.prototype.hasOwnProperty.call(e, "selectedModels") && o(), !i.allowMultiModel) {
            if (r.modelName && r.modelName.includes(",")) {
                const l = r.modelName.split(",")[0]?.trim();
                l || this.structuredLogService.warn("composer", "Model config fell back to default while truncating multi-model string", {
                    subkey: "model_config_multi_model_truncate_empty_first_model",
                    surface: n,
                    originalModelName: r.modelName,
                    fallbackMode: "complete_fallback"
                }), r.modelName = l || "default";
            }
            r.selectedModels && r.selectedModels.length > 1 && (r.selectedModels = [
                r.selectedModels[0]
            ]);
        }
        if (n === "background-composer") return r.maxMode = this.resolveCloudMaxMode(r), s(), r;
        if (r.modelName && r.modelName.includes(",")) return s(), r;
        if (e.maxMode === !0 && !this.doesModelSupportMaxMode(r.modelName) && (r.modelName = this.firstAvailableMaxModel() ?? r.modelName), e.maxMode === !1 && !this.doesModelSupportNonMaxMode(r.modelName) && (r.modelName = this.firstAvailableNonMaxModel() ?? r.modelName), e.modelName !== void 0 && (this.doesModelSupportMaxMode(r.modelName) || (r.maxMode = !1), this.doesModelSupportNonMaxMode(r.modelName) || (r.maxMode = !0)), e.maxMode === !1 && r.selectedModels) {
            const l = r.selectedModels.map((c)=>{
                const u = this.getAvailableDefaultModels().find((h)=>h.name === c.modelId);
                if (!u || !u.variants || u.variants.length === 0) return c;
                const d = Qba(u, c.parameters ?? [], !1);
                return d && !d.maxMode ? {
                    modelId: c.modelId,
                    parameters: d.parameters.map((h)=>({
                            id: h.id,
                            value: h.value
                        }))
                } : c;
            });
            r.selectedModels = l;
        }
        return s(), r;
    }
    autoEnableSelectedModels(t) {
        const e = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings, n = e.modelOverrideDisabled ?? [], i = e.modelOverrideEnabled ?? [], r = this.getAvailableDefaultModels();
        for (const s of t){
            const o = s.modelId;
            if (o === "default") continue;
            const a = n.includes(o), u = !(r.find((d)=>d.name === o)?.defaultOn ?? !0) && !i.includes(o);
            (a || u) && (a && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter((d)=>d !== o)), i.includes(o) || this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", [
                ...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled ?? [],
                o
            ]));
        }
    }
    setModelConfig(t, e) {
        const n = this.getStoredModelConfig(t), i = this.writeSurfaceModelConfig(t, e);
        i !== void 0 && this.clearMaxModeRequiredPreferencesIfMaxTurnedOff(t, n, i);
    }
    clearMaxModeRequiredPreferencesIfMaxTurnedOff(t, e, n) {
        t !== "background-composer" && e.maxMode === !0 && n.maxMode === !1 && this.clearAllMaxModeRequiredPreferences();
    }
    writeSurfaceModelConfig(t, e) {
        if (t === "plan-execution" && e.maxMode !== void 0) {
            this.writeSurfaceModelConfig("composer", {
                maxMode: e.maxMode
            });
            const { maxMode: s, ...o } = e;
            e = o;
        }
        const n = this.getStoredModelConfig(t);
        if (t === "composer" && (e.modelName?.includes(",") || (e.selectedModels?.length ?? 0) > 1)) {
            this.structuredLogService.warn("composer", "Dropped global composer model config write with multi-model name", {
                subkey: "model_config_drop_composer_multi_model_write",
                modelName: e.modelName,
                selectedModelsCount: String(e.selectedModels?.length ?? 0)
            });
            return;
        }
        const i = this.shouldAllowMultiModel(t, e, n);
        this.logSetModelConfigInputs(t, n, e, {
            allowMultiModel: i
        });
        const r = this.applyInvariants(n, e, t, {
            allowMultiModel: i
        });
        if (e.modelName !== void 0) {
            if (e.modelName === "default" && n.modelName !== "default") {
                const s = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.previousModelBeforeDefault || {};
                this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "previousModelBeforeDefault", {
                    ...s,
                    [t]: n.modelName
                });
            } else if (n.modelName === "default" && e.modelName !== "default") {
                const o = {
                    ...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.previousModelBeforeDefault || {}
                };
                delete o[t], this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "previousModelBeforeDefault", o);
            }
        }
        return e.selectedModels && e.selectedModels.length > 0 && !this._isMigrating && this.autoEnableSelectedModels(e.selectedModels), this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelConfig", t, {
            ...BTi(r),
            useExperimentalModelOptOut: void 0
        }), this._modelConfigMigrationPending = !0, r;
    }
    setModelConfigForComposer(t, e, n, i) {
        const r = t.data.modelConfig, s = n ?? (t.data.unifiedMode === "background" ? "background-composer" : "composer"), o = r ?? this.getModelConfig(s), a = {
            ...o,
            ...e
        };
        let l;
        if (n) l = n;
        else {
            const d = t.data.unifiedMode, h = (a.selectedModels?.length ?? 0) > 1 || (a.modelName?.includes(",") ?? !1);
            l = d === "background" ? "background-composer" : h ? "composer-ensemble" : "composer";
        }
        this.logSetModelConfigInputs(l, o, e, {
            allowMultiModel: !0
        });
        const c = this.applyInvariants(o, e, l, {
            allowMultiModel: !0
        }), u = l === "background-composer" && !c.selectedModels ? {
            ...c,
            selectedModels: this.deriveSelectedModels(c)
        } : c;
        t.setData({
            modelConfig: Sbe(u)
        }), i?.updateGlobalConfig === !0 && (this.clearMaxModeRequiredPreferencesIfMaxTurnedOff(l, o, u), this.writeSurfaceModelConfig(l, l === "background-composer" && !e.selectedModels && u.selectedModels ? {
            ...e,
            selectedModels: u.selectedModels
        } : e));
    }
    setMaxMode(t, e) {
        if (e === "plan-execution") {
            this.setModelConfig("composer", {
                maxMode: t
            });
            return;
        }
        this.setModelConfig(e, {
            maxMode: t
        });
    }
    setSpecificModel(t, e) {
        this.setModelConfig(t, {
            modelName: e
        });
    }
    getSpecificModel(t) {
        return this.getModelConfig(t).modelName;
    }
    getPreviousNonDefaultModel(t) {
        return this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.previousModelBeforeDefault?.[t];
    }
    getMaxMode(t) {
        return this.getModelConfig(t).maxMode;
    }
    normalizeModelList(t) {
        return t ? t.split(",").map((e)=>e.trim()).filter((e)=>e.length > 0) : [];
    }
    doesModelSupportMaxMode(t) {
        const e = this.normalizeModelList(t);
        if (e.length === 0) return !1;
        if (e.length > 1) return e.every((a)=>this.doesModelSupportMaxMode(a));
        const n = e[0], i = this.getAvailableDefaultModels(), r = [
            ...YPe
        ], s = i.find((a)=>a.name === n), o = r.find((a)=>a.name === n);
        return s !== void 0 && s.supportsMaxMode !== void 0 ? s.supportsMaxMode : o?.supportsMaxMode ?? !1;
    }
    doesModelSupportNonMaxMode(t) {
        const e = this.normalizeModelList(t);
        if (e.length === 0) return !0;
        if (e.length > 1) return e.every((a)=>this.doesModelSupportNonMaxMode(a));
        const n = e[0];
        if (n === "default") return !0;
        const i = this.getAvailableDefaultModels(), r = [
            ...YPe
        ], s = i.find((a)=>a.name === n), o = r.find((a)=>a.name === n);
        return s !== void 0 && s.supportsNonMaxMode !== void 0 ? s.supportsNonMaxMode : o?.supportsNonMaxMode ?? !0;
    }
    computeAvailableDefaultModels() {
        const t = this.getPrivateInferenceCatalog();
        if (t.kind !== "off") return t.kind === "ready" ? t.models.map(mig) : [];
        this.reactiveStorageService.availableModelsCatalogRevision();
        const e = ks(()=>(this.reactiveStorageService.applicationUserPersistentStorage.availableDefaultModels2 ?? []).map(mig)), n = e.length === 0 ? [
            ...YPe
        ] : e.some((r)=>r.name === "default") ? e : [
            ...e,
            ...YPe
        ], i = this.reactiveStorageService.applicationUserPersistentStorage.localProviderModelIds ?? [];
        return vpk(n, i, vl.localMode);
    }
    getAvailableDefaultModels() {
        return [
            ...this._availableDefaultModels()
        ];
    }
    getModelPickerDisplayConfiguration() {
        const t = this.getPrivateInferenceCatalog();
        if (t.kind !== "off") return mpk(this.getAvailableDefaultModels().length === 0, t.kind === "loading" ? t.message ?? uig : t.configError);
        const e = this.reactiveStorageService.applicationUserPersistentStorage.modelPickerDisplayConfiguration ?? XTi;
        return fpk(e);
    }
    resolveModelNameToCatalog(t, e = this.getAvailableDefaultModels()) {
        return e.length === 0 ? t : this.resolveToCatalogName(t, e);
    }
    resolvePersistedModelIdForRead(t, e) {
        const n = this.resolveToCatalogName(t, e);
        if (e.some((s)=>s.name === n)) return {
            modelId: n,
            isFallback: !1
        };
        const i = e.find((s)=>s.idAliases?.includes(n));
        if (i) return {
            modelId: i.name,
            isFallback: !1
        };
        const r = this.getPrivateInferenceCatalog();
        if (r.kind !== "off") {
            const s = Arl(e, r.kind === "ready" ? r.defaultModelId : void 0);
            return s === void 0 ? {
                modelId: n,
                isFallback: !1
            } : {
                modelId: s,
                isFallback: !0
            };
        }
        return n === "default" ? {
            modelId: n,
            isFallback: !1
        } : pig(e) ? {
            modelId: "default",
            isFallback: !0
        } : {
            modelId: n,
            isFallback: !1
        };
    }
    resolveSelectedModelsForRead(t, e) {
        let n = !1;
        const i = t.map((r)=>{
            const { modelId: s, isFallback: o } = this.resolvePersistedModelIdForRead(r.modelId, e);
            return s === r.modelId ? r : (n = !0, {
                ...r,
                modelId: s,
                parameters: o ? [] : r.parameters
            });
        });
        return n ? i : t;
    }
    fixupModelConfigForCurrentFlag(t) {
        if (!(this.isPrivateInferenceMode() ? this.getAvailableDefaultModels().length > 0 : (this.reactiveStorageService.applicationUserPersistentStorage.availableDefaultModels2?.length ?? 0) > 0)) return t;
        const n = this.getAvailableDefaultModels();
        if (t.modelName && (!t.selectedModels || t.selectedModels.length === 0)) {
            const i = this.resolveSelectedModelsForRead(this.resolveSelectedModelsFromModelName(t.modelName, n), n);
            return this.structuredLogService.info("composer", "fixupModelConfig: populating selectedModels from modelName", {
                subkey: "model_config_fixup_populate_selected",
                sourceModelName: t.modelName,
                resolvedSelectedModelIds: i.map((r)=>r.modelId).join(",")
            }), {
                ...t,
                selectedModels: i
            };
        }
        if (t.selectedModels && t.selectedModels.length > 0) {
            const i = this.resolveSelectedModelsForRead(t.selectedModels, n);
            if (i !== t.selectedModels) return {
                ...t,
                selectedModels: i
            };
        }
        return t;
    }
    firstAvailableMaxModel() {
        return this.getAvailableDefaultModels().find((e)=>e.supportsMaxMode)?.name;
    }
    firstAvailableNonMaxModel() {
        return this.getAvailableDefaultModels().find((e)=>e.supportsNonMaxMode && e.namedModelSectionIndex !== void 0)?.name;
    }
    hasSmartModeClassifierModel() {
        return this.getAvailableDefaultModels().some((t)=>t.supportsSmartModeClassifier === !0);
    }
    doesModelSupportAgent(t) {
        if (t === "default") return !0;
        const e = t.toLowerCase().includes("claude-3"), n = t.toLowerCase().includes("gpt-4o") && !t.toLowerCase().includes("mini"), i = t.toLowerCase().includes("o3-mini"), r = t.toLowerCase().includes("grok-3");
        if (e || n || i || r) return !0;
        const s = this.getAvailableDefaultModels(), o = [
            ...YPe
        ], a = s.find((c)=>c.name === t), l = o.find((c)=>c.name === t);
        return a !== void 0 && a.supportsAgent !== void 0 ? a.supportsAgent : l?.supportsAgent ?? !0;
    }
    doesModelSupportThinking(t) {
        if (t === "default") return !1;
        const e = this.getAvailableDefaultModels(), n = [
            ...YPe
        ], i = e.find((s)=>s.name === t), r = n.find((s)=>s.name === t);
        return i !== void 0 && i.supportsThinking !== void 0 ? i.supportsThinking : r?.supportsThinking ?? !1;
    }
    doesModelSupportImages(t) {
        if (t === "default") return !0;
        const e = this.getAvailableDefaultModels(), n = [
            ...YPe
        ], i = e.find((s)=>s.name === t), r = n.find((s)=>s.name === t);
        return i !== void 0 && i.supportsImages !== void 0 ? i.supportsImages : r?.supportsImages ?? !0;
    }
    getServerModelName(t) {
        if (t === "default") return t;
        const e = this.resolveModelNameToCatalog(t), n = this.getAvailableDefaultModels(), i = [
            ...YPe
        ], r = n.find((o)=>o.name === e), s = i.find((o)=>o.name === e);
        return r !== void 0 && r.serverModelName !== void 0 ? r.serverModelName : s?.serverModelName ?? e;
    }
    getSelectedModels(t) {
        const e = this.getModelConfig(t);
        return this.deriveSelectedModels(e);
    }
    getSelectedModelsForComposer(t) {
        const e = this.getEffectiveModelConfigForComposer(t);
        return this.deriveSelectedModels(e);
    }
    getEffectiveModelConfigForComposer(t) {
        const e = t.data.unifiedMode === "background" ? "background-composer" : "composer";
        return t.data.modelConfig ?? this.getModelConfig(e);
    }
    deriveSelectedModels(t) {
        return t.selectedModels && t.selectedModels.length > 0 ? t.selectedModels : this.resolveSelectedModelsFromModelName(t.modelName);
    }
    getModelParameterPreferences(t) {
        return this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences?.[t];
    }
    setModelParameterPreferences(t, e) {
        const n = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences ?? {}, i = this.getAvailableDefaultModels().find((o)=>o.name === t), r = i && i.parameterDefinitions.length > 0 && e.length > 0 ? h1n(i, e, this.getMaxMode("composer"))?.parameterValues.map((o)=>({
                id: o.id,
                value: o.value
            })) ?? e : e, s = {
            modelId: t,
            parameters: r,
            updatedAt: new Date().toISOString()
        };
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelParameterPreferences", {
            ...n,
            [t]: s
        });
    }
    clearModelParameterPreferences(t) {
        const e = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences;
        if (!e || !e[t]) return;
        const n = {};
        for (const i of Object.keys(e))i !== t && (n[i] = e[i]);
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelParameterPreferences", w$o(n));
    }
    getAllModelParameterPreferences() {
        return this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences ?? {};
    }
    resolveModelParametersForSubmission(t, e, n) {
        const i = this.getAvailableDefaultModels().find((o)=>o.name === t);
        if (!i || !i.parameterDefinitions || i.parameterDefinitions.length === 0) return [];
        const r = e && e.length > 0 ? e : this.getModelParameterPreferences(t)?.parameters ?? [];
        return h1n(i, r, n)?.parameterValues ?? [];
    }
    doesModelPreferencesRequireMaxMode(t) {
        const e = this.getModelParameterPreferences(t);
        if (!e || e.parameters.length === 0) return !1;
        const n = this.getAvailableDefaultModels().find((r)=>r.name === t);
        if (!n || !n.variants || n.variants.length === 0) return !1;
        const i = d1n(n, e.parameters);
        return i ? u1n(n, i) : !1;
    }
    cycleHotkeyParameter(t, e) {
        const n = e ? this.getSelectedModelsForComposer(e) : this.getSelectedModels(t);
        if (n.length === 0) return;
        const i = this.getAvailableDefaultModels();
        let r;
        const s = n.map((o)=>{
            const a = i.find((p)=>p.name === o.modelId);
            if (!a || !a.parameterDefinitions) return o;
            const l = a.parameterDefinitions.find((p)=>p.isCycleableByHotkey === !0 && tvi(p) > 1);
            if (!l) return o;
            const c = o.parameters?.find((p)=>p.id === l.id)?.value ?? "", u = FVh(l, c);
            let d = u;
            l.parameterType?.booleanParameter ? d = u === "true" ? "On" : "Off" : l.parameterType?.enumParameter && (d = l.parameterType.enumParameter.values.find((g)=>g.value === u)?.displayName ?? u), r = {
                paramName: l.name,
                newValue: u,
                newDisplayValue: d
            };
            const h = (o.parameters ?? []).filter((p)=>p.id !== l.id);
            return h.push({
                id: l.id,
                value: u
            }), this.setModelParameterPreferences(o.modelId, h), {
                modelId: o.modelId,
                parameters: h
            };
        });
        if (r) return e ? this.setModelConfigForComposer(e, {
            selectedModels: s
        }, t, {
            updateGlobalConfig: !0
        }) : this.setModelConfig(t, {
            selectedModels: s
        }), r;
    }
    clearAllMaxModeRequiredPreferences() {
        const t = this.getAllModelParameterPreferences(), e = [];
        for (const n of Object.keys(t))this.doesModelPreferencesRequireMaxMode(n) && (this.clearModelParameterPreferences(n), e.push(n));
        return e;
    }
    getHookModelString(t) {
        return _pk(t, this.getAvailableDefaultModels(), (e)=>{
            this.structuredLogService.error("composer", "Failed to resolve hook model legacy slug", void 0, {
                subkey: "hook_model_missing_legacy_slug",
                modelId: e.modelId,
                parameters: JSON.stringify(e.parameters ?? []),
                maxMode: String(t?.maxMode === !0)
            });
        });
    }
    getHookModelFields(t) {
        if (!t) return {};
        const e = this.deriveSelectedModels(t)[0];
        if (!e) return {};
        if (!this.getAvailableDefaultModels().find((r)=>r.name === e.modelId)) return {};
        const i = this.resolveModelParametersForSubmission(e.modelId, e.parameters, t.maxMode);
        return {
            model_id: e.modelId,
            ...i.length > 0 && {
                model_params: i
            }
        };
    }
    healStaleParameters() {
        const t = this.getAvailableDefaultModels();
        if (t.length === 0) return;
        const e = this.getAllModelParameterPreferences();
        for (const [n, i] of Object.entries(e)){
            const r = t.find((a)=>a.name === n);
            if (!r || r.parameterDefinitions.length === 0 || i.parameters.length === 0) continue;
            const s = this.getMaxMode("composer"), o = m0e(r, i.parameters, s);
            hat(o, i.parameters) || (this.structuredLogService.info("composer", "Healed stale parameter preferences", {
                subkey: "heal_stale_preferences",
                modelId: n,
                beforeCount: String(i.parameters.length),
                afterCount: String(o.length)
            }), this.setModelParameterPreferences(n, o));
        }
        for (const n of RWt){
            const i = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelConfig[n];
            if (!i?.selectedModels || i.selectedModels.length === 0) continue;
            let r = !1;
            const s = i.selectedModels.map((o)=>{
                const a = t.find((d)=>d.name === o.modelId), l = o.parameters ?? [];
                if (!a || a.parameterDefinitions.length === 0 || l.length === 0) return l === o.parameters ? o : {
                    ...o,
                    parameters: l
                };
                const c = this.getMaxMode(n), u = m0e(a, l, c);
                return hat(u, l) ? o : (r = !0, this.structuredLogService.info("composer", "Healed stale selected model parameters", {
                    subkey: "heal_stale_selected_model",
                    surface: n,
                    modelId: o.modelId,
                    beforeCount: String(l.length),
                    afterCount: String(u.length)
                }), {
                    ...o,
                    parameters: u
                });
            });
            r && this.setModelConfig(n, {
                selectedModels: s
            });
        }
    }
    updateModelUsageOnCatalogRefresh(t) {
        if ((this.reactiveStorageService.applicationUserPersistentStorage.availableDefaultModels2 ?? []).length === 0) return;
        const n = this.getAvailableDefaultModels(), i = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings, r = i.modelOverrideEnabled ?? [], s = i.modelOverrideDisabled ?? [], o = this.readUserModelOverrides(), a = new Set;
        for (const _ of RWt)for (const b of this.deriveSelectedModels(this.getStoredModelConfig(_)))b.modelId !== "default" && a.add(b.modelId);
        const l = Date.now(), c = new Date(l).toISOString(), u = i.modelLastUsedAt ?? {}, d = {};
        let h = 0;
        for (const _ of n){
            if (_.name === "default") continue;
            if (a.has(_.name)) {
                const y = u[_.name];
                d[_.name] = y !== void 0 && l - Date.parse(y) < gig ? y : c;
                continue;
            }
            if (!this.isRowShownOn(_, o)) continue;
            const b = u[_.name];
            b !== void 0 && !isNaN(Date.parse(b)) ? d[_.name] = b : (d[_.name] = c, h++);
        }
        if (h > 0 && this.structuredLogService.info("composer", "Seeded model usage timestamps for newly tracked models", {
            subkey: "model_usage_timestamps_seeded",
            seededCount: String(h)
        }), t !== void 0 && t > 0) {
            const _ = l - t * 60 * 60 * 1e3, b = [];
            for (const y of n){
                if (y.name === "default" || a.has(y.name) || !this.isRowShownOn(y, o)) continue;
                const S = Date.parse(d[y.name]);
                !isNaN(S) && S < _ && b.push(y.name);
            }
            if (b.length > 0) {
                const y = this.experimentService.checkFeatureGate("auto_disable_unused_models", {
                    disableExposureLog: !1
                });
                if (this.getAnalyticsService().trackEvent("client.models_auto_disabled", {
                    dryRun: !y,
                    disabledModelCount: b.length,
                    disabledModelIds: b.join(","),
                    disableUnusedModelsAfterNHours: t
                }), y) {
                    this.structuredLogService.info("composer", "Auto-disabled models unused past backend threshold", {
                        subkey: "model_auto_disabled_unused",
                        disabledModelIds: b.join(","),
                        disableUnusedModelsAfterNHours: String(t)
                    });
                    for (const k of b)delete d[k];
                    this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", [
                        ...s,
                        ...b.filter((k)=>!s.includes(k))
                    ]);
                    const S = r.filter((k)=>!b.includes(k));
                    S.length !== r.length && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", S);
                } else this.structuredLogService.info("composer", "Would auto-disable models unused past backend threshold (skipped: flag off)", {
                    subkey: "model_auto_disable_dry_run",
                    skippedReason: "auto_disable_unused_models_flag_off",
                    disabledModelIds: b.join(","),
                    disableUnusedModelsAfterNHours: String(t)
                });
            }
        }
        const p = Object.keys(u), g = Object.keys(d);
        (p.length !== g.length || g.some((_)=>u[_] !== d[_])) && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelLastUsedAt", i.modelLastUsedAt ? w$o(d) : d);
    }
}, crs = Re([
    F(0, sa),
    F(1, wh),
    F(2, Cr),
    F(3, dn),
    F(4, ki)
], crs), bn(eg, crs, 1);

}
