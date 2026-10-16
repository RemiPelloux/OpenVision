import { iSt } from "./De_3.js";
import { Se, rn, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { ca, la } from "./aiMiscServices.js";
import { am, kc } from "./buildFlags.js";
import { HVv, Hvh, JVv, Pko, QVv, Wvh, YVv, ZVv, _Gv, htt, mGv, xfh } from "./cgh.js";
import { Wf } from "./composerData.js";
import { Kr, qs } from "./experimentService.js";
import { VSo } from "./experimentalModelConfig.js";
import { Pn } from "./extensions.js";
import { FLs, ICf, N1n, O1n, P1n, k$l, t0e } from "./f0s.js";
import { Mko } from "./index_17.ts";
import { mi } from "./index_188.js";
import { Ze, _t } from "./instantiation.js";
import { W$t } from "./localProviderModelEnrichment.js";
import { QS, i0 } from "./modelConfigServiceTypes.js";
import { Bvh, Lko, UXi } from "./modelPickerDisplayConfiguration.js";
import { CJr, Oe, Ut, bM, lr, mn, qn } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { Vp, pSt } from "./reactiveStorageTypes_2.js";
import { Vn, yn } from "./storage_2.js";
import { jS } from "./store.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
var Gvh, V_e, $Xi;
export { $Xi, Gvh, V_e };
var __wakaru_ptt_initialized = false;
export function ptt() {
if (__wakaru_ptt_initialized) return;
__wakaru_ptt_initialized = true;
"use strict";
x(), mi(), Mko(), Se(), Pn(), Ze(), am(), Ha(), Vp(), Vn(), im(), Wf(), W$t(), la(), qs(), VSo(), UXi(), jS(), qn(), i0(), Gvh = 3600 * 1e3, V_e = [
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
], $Xi = class extends we {
    constructor(e, t, n, i, r){
        super(), this.reactiveStorageService = e, this.structuredLogService = t, this.experimentService = n, this.instantiationService = i, this.storageService = r, this._isMigrating = !1, this._modelConfigMigrationPending = !0, this._privateInferenceCatalog = Ut({
            kind: "off"
        }), this._availableDefaultModels = bM((s)=>(this._register(rn(s)), Oe(()=>this.computeAvailableDefaultModels())));
    }
    getAnalyticsService() {
        return this.instantiationService.invokeFunction((e)=>e.get(ca));
    }
    isPrivateInferenceMode() {
        return this.getPrivateInferenceCatalog().kind !== "off";
    }
    getPrivateInferenceCatalog() {
        return this._privateInferenceCatalog[0]();
    }
    setPrivateInferenceCatalog(e) {
        this._privateInferenceCatalog[1](e);
    }
    getDefaultModelForFeature(e) {
        const t = this.reactiveStorageService.applicationUserPersistentStorage.featureModelConfigs;
        let n;
        switch(e){
            case "composer":
                n = t?.composer;
                break;
            case "cmd-k":
                n = t?.cmdK;
                break;
            case "background-composer":
                n = t?.backgroundComposer;
                break;
            case "plan-execution":
                n = t?.planExecution;
                break;
            case "spec":
                n = t?.spec;
                break;
            case "deep-search":
                n = t?.deepSearch;
                break;
            case "quick-agent":
                n = t?.quickAgent;
                break;
            default:
                n = void 0;
        }
        return n?.defaultModel ? n.defaultModel : "default";
    }
    shouldAllowMultiModel(e, t, n) {
        if (e === "background-composer" || e === "composer-ensemble" || (t.selectedModels?.length ?? 0) > 1 || (t.modelName?.includes(",") ?? !1)) return !0;
        const s = !!(n.modelName?.includes(",") || n.selectedModels && n.selectedModels.length > 1), o = t.modelName === void 0 && t.selectedModels === void 0;
        return !!(s && o);
    }
    resolveToCatalogName(e, t) {
        return lr(()=>{
            for (const n of t)if (n.name === e) return n.name;
            for (const n of t)if (n.legacySlugs?.includes(e)) return n.name;
            return e;
        });
    }
    migrateVisibilityArrayToCatalog(e, t) {
        const n = new Set, i = [];
        for (const r of e){
            const s = this.resolveToCatalogName(r, t);
            n.has(s) || (n.add(s), i.push(s));
        }
        return i;
    }
    migrateModelSettingsToCurrentCatalog() {
        const t = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings, n = this.getAvailableDefaultModels();
        if (n.length === 0) return;
        const i = t.modelOverrideEnabled ?? [], r = t.modelOverrideDisabled ?? [], s = this.migrateVisibilityArrayToCatalog(i, n), o = this.migrateVisibilityArrayToCatalog(r, n), a = i.length !== s.length || !i.every((l, u)=>l === s[u]), c = r.length !== o.length || !r.every((l, u)=>l === o[u]);
        a && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", s), c && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", o), (a || c) && (this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelVisibilityMigrated", !0), this.structuredLogService.info("composer", "Migrated model visibility to current catalog", {
            subkey: "model_visibility_catalog_migration",
            enabledBeforeCount: String(i.length),
            enabledAfterCount: String(s.length),
            disabledBeforeCount: String(r.length),
            disabledAfterCount: String(o.length)
        }));
        for (const l of pSt){
            const u = t.modelConfig[l];
            if (!u) continue;
            let h = !1;
            if (u.modelName) {
                const f = u.modelName.split(",").map((v)=>v.trim()).filter((v)=>v.length > 0).map((v)=>this.resolveToCatalogName(v, n)).join(",");
                f !== u.modelName && (this.structuredLogService.info("composer", "Migrated modelConfig modelName to current catalog", {
                    subkey: "model_config_modelname_catalog_migration",
                    surface: l,
                    before: u.modelName,
                    after: f
                }), this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelConfig", l, {
                    ...u,
                    modelName: f
                }), h = !0);
            }
            if (u.selectedModels && u.selectedModels.length > 0 && !h) {
                let p = !1;
                const g = u.selectedModels.map((f)=>{
                    const v = this.resolveToCatalogName(f.modelId, n);
                    return v !== f.modelId ? (p = !0, {
                        ...f,
                        modelId: v
                    }) : f;
                });
                p && (this.structuredLogService.info("composer", "Migrated modelConfig selectedModels to current catalog", {
                    subkey: "model_config_selectedmodels_catalog_migration",
                    surface: l,
                    before: u.selectedModels.map((f)=>f.modelId).join(","),
                    after: g.map((f)=>f.modelId).join(",")
                }), this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelConfig", l, {
                    ...u,
                    selectedModels: g
                }));
            }
        }
    }
    migrateParameterizedModelConfigIfNecessary() {
        const e = this.reactiveStorageService.applicationUserPersistentStorage;
        if (!(!this._modelConfigMigrationPending && e.availableDefaultModels2 === this._lastMigratedCatalog) && (e.availableDefaultModels2?.length ?? 0) !== 0) {
            this._isMigrating = !0;
            try {
                const t = [];
                for (const i of pSt){
                    const r = e.aiSettings.modelConfig[i];
                    r?.modelName && (r.selectedModels?.length ?? 0) === 0 && t.push(i);
                }
                const n = this.getAvailableDefaultModels();
                for (const i of t){
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
                this.migrateModelSettingsToCurrentCatalog(), this._lastMigratedCatalog = e.availableDefaultModels2, this._modelConfigMigrationPending = !1;
            } finally{
                this._isMigrating = !1;
            }
        }
    }
    triggerParameterizedModelConfigMigration() {
        this._modelConfigMigrationPending = !0, this.migrateParameterizedModelConfigIfNecessary();
    }
    resolveSelectedModelsFromModelName(e, t = this.getAvailableDefaultModels()) {
        const n = this.normalizeModelList(e);
        return n.length === 0 ? [] : n.map((i)=>({
                modelId: t.length > 0 ? this.resolveToCatalogName(i, t) : i,
                parameters: []
            }));
    }
    logSetModelConfigInputs(e, t, n, i) {
        this.structuredLogService.info("composer", "ModelConfigService received model config update", {
            subkey: "model_config_set_inputs",
            surface: e,
            currentModelNameDefined: t.modelName !== void 0,
            currentModelNameValue: t.modelName ?? "",
            currentModelNameHasKey: Object.prototype.hasOwnProperty.call(t, "modelName"),
            currentSelectedModelsDefined: t.selectedModels !== void 0,
            currentSelectedModelsHasKey: Object.prototype.hasOwnProperty.call(t, "selectedModels"),
            currentSelectedModelsLength: String(t.selectedModels?.length ?? 0),
            newModelNameDefined: n.modelName !== void 0,
            newModelNameValue: n.modelName ?? "",
            newModelNameHasKey: Object.prototype.hasOwnProperty.call(n, "modelName"),
            newSelectedModelsDefined: n.selectedModels !== void 0,
            newSelectedModelsHasKey: Object.prototype.hasOwnProperty.call(n, "selectedModels"),
            newSelectedModelsLength: String(n.selectedModels?.length ?? 0),
            ...i
        });
    }
    getModelConfig(e) {
        const t = this.getStoredModelConfig(e);
        if (e === "composer") {
            const n = this.modelInPlaceOfTurnedOff(t);
            n !== void 0 && (t.modelName = n, t.selectedModels = [
                {
                    modelId: n,
                    parameters: []
                }
            ]);
        }
        return t;
    }
    getStoredModelConfig(e) {
        this._isMigrating || lr(()=>this.migrateParameterizedModelConfigIfNecessary());
        let t = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelConfig[e];
        t || (t = {
            modelName: this.getDefaultModelForFeature(e),
            maxMode: !1
        }, e === "background-composer" && (t.maxMode = this.resolveCloudMaxMode(t)));
        const n = xfh({
            ...t
        });
        if (n.modelName) {
            const i = lr(()=>{
                const r = this.getAvailableDefaultModels();
                return r.length === 0 ? n.modelName : n.modelName.split(",").map((a)=>a.trim()).filter((a)=>a.length > 0).map((a)=>this.resolvePersistedModelIdForRead(a, r).modelId).join(",");
            });
            n.modelName = i;
        }
        if (n.selectedModels && n.selectedModels.length > 0) {
            const i = lr(()=>{
                const r = this.getAvailableDefaultModels();
                return r.length === 0 ? n.selectedModels : this.resolveSelectedModelsForRead(n.selectedModels, r);
            });
            n.selectedModels = i;
        }
        return e === "plan-execution" && (n.maxMode = this.getStoredModelConfig("composer").maxMode), n;
    }
    isModelTurnedOff(e) {
        const t = this.getAvailableDefaultModels().find((n)=>n.name === e);
        return t !== void 0 && this.isRowTurnedOff(t, this.readUserModelOverrides());
    }
    readUserModelOverrides() {
        const e = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings, t = new Set(e.modelOverrideEnabled ?? []), n = new Set(e.modelOverrideDisabled ?? []);
        return (i)=>t.has(i) ? !0 : n.has(i) ? !1 : void 0;
    }
    isRowShownOn(e, t) {
        return t(e.name) ?? e.defaultOn;
    }
    isRowTurnedOff(e, t) {
        const n = t(e.name);
        return n !== void 0 ? !n : this.isPrivateInferenceMode() && !e.defaultOn;
    }
    modelInPlaceOfTurnedOff(e) {
        const t = this.getPrivateInferenceCatalog();
        if (t.kind === "loading") return;
        const n = lr(()=>this.getAvailableDefaultModels()), i = e.selectedModels?.[0]?.modelId ?? e.modelName, r = n.find((l)=>l.name === i);
        if (r === void 0) return;
        const s = this.readUserModelOverrides();
        if (!this.isRowTurnedOff(r, s)) return;
        const o = t.kind === "off" && !kc.localMode, a = n.filter((l)=>(o || l.name !== "default") && this.isRowShownOn(l, s)), c = t.kind === "ready" ? t.defaultModelId : o ? "default" : void 0;
        return Pko(a, c);
    }
    getExperimentalModelCatalog() {
        return this.isPrivateInferenceMode() ? {
            modelId: void 0,
            displayName: void 0
        } : mGv(this.reactiveStorageService.applicationUserPersistentStorage);
    }
    applySubmitModelOverrides(e) {
        const t = this.experimentService.checkFeatureGate("opt_devs_into_experimental_model_toggle", {
            disableExposureLog: !0
        });
        return _Gv(e, {
            gateEnabled: t,
            catalog: this.getExperimentalModelCatalog()
        });
    }
    resolveCloudMaxMode(e) {
        const t = this.reactiveStorageService.applicationUserPersistentStorage.hasTokenBasedPricing, n = this.getAvailableDefaultModels();
        return (e.selectedModels && e.selectedModels.length > 0 ? e.selectedModels : [
            {
                modelId: e.modelName,
                parameters: void 0
            }
        ]).some((r)=>HVv({
                modelId: r.modelId,
                parameters: r.parameters,
                hasTokenBasedPricing: t,
                parameterizedModels: n
            }));
    }
    applyInvariants(e, t, n, i) {
        const r = {
            ...e,
            ...t
        }, s = ()=>{
            !r.selectedModels || r.selectedModels.length === 0 || (r.selectedModels = r.selectedModels.map((c)=>{
                const l = this.getAvailableDefaultModels().find((p)=>p.name === c.modelId), u = c.parameters ?? [];
                if (!l || l.parameterDefinitions.length === 0 || u.length === 0) return u === c.parameters ? c : {
                    ...c,
                    parameters: u
                };
                const h = O1n(l, u, r.maxMode);
                return h ? {
                    modelId: c.modelId,
                    parameters: h.parameterValues.map((p)=>({
                            id: p.id,
                            value: p.value
                        }))
                } : c;
            }));
        }, o = ()=>{
            const c = this.resolveSelectedModelsFromModelName(r.modelName);
            if (c.length === 0) {
                r.selectedModels = null, this.structuredLogService.warn("composer", "Model config write with modelName produced no selectedModels", {
                    subkey: "model_config_modelname_write_empty_selectedmodels",
                    surface: n,
                    sourceModelName: t.modelName ?? "",
                    finalModelName: r.modelName ?? "",
                    previousSelectedModels: JSON.stringify(e.selectedModels ?? null)
                });
                return;
            }
            const l = e.selectedModels ?? [];
            if (l.length === c.length && l.every((h, p)=>h.modelId === c[p]?.modelId) && l.length > 0) {
                r.selectedModels = l, this.structuredLogService.info("composer", "Preserved selectedModels during modelName-only write", {
                    subkey: "model_config_modelname_write_preserved_selectedmodels",
                    surface: n,
                    sourceModelName: t.modelName ?? "",
                    finalModelName: r.modelName ?? "",
                    preservedSelectedModelIds: l.map((h)=>h.modelId).join(",")
                });
                return;
            }
            r.selectedModels = c, this.structuredLogService.info("composer", "Synchronized selectedModels from modelName-only write", {
                subkey: "model_config_modelname_write_synced_selectedmodels",
                surface: n,
                sourceModelName: t.modelName ?? "",
                finalModelName: r.modelName ?? "",
                derivedSelectedModelIds: c.map((h)=>h.modelId).join(","),
                derivedSelectedModelsCount: String(c.length)
            });
        };
        if (t.selectedModels != null) {
            const c = t.selectedModels;
            c.length > 0 ? r.modelName = c.map((l)=>l.modelId).join(",") : (this.structuredLogService.warn("composer", "Model config reset to default due to empty selectedModels", {
                subkey: "model_config_empty_selected_models_reset",
                surface: n,
                previousModelName: e.modelName,
                hasIncomingModelName: String(t.modelName !== void 0),
                fallbackMode: "complete_fallback"
            }), r.modelName = "default", r.selectedModels = null);
        }
        if (t.modelName !== void 0 && !Object.prototype.hasOwnProperty.call(t, "selectedModels") && o(), !i.allowMultiModel) {
            if (r.modelName && r.modelName.includes(",")) {
                const c = r.modelName.split(",")[0]?.trim();
                c || this.structuredLogService.warn("composer", "Model config fell back to default while truncating multi-model string", {
                    subkey: "model_config_multi_model_truncate_empty_first_model",
                    surface: n,
                    originalModelName: r.modelName,
                    fallbackMode: "complete_fallback"
                }), r.modelName = c || "default";
            }
            r.selectedModels && r.selectedModels.length > 1 && (r.selectedModels = [
                r.selectedModels[0]
            ]);
        }
        if (n === "background-composer") return r.maxMode = this.resolveCloudMaxMode(r), s(), r;
        if (r.modelName && r.modelName.includes(",")) return s(), r;
        if (t.maxMode === !0 && !this.doesModelSupportMaxMode(r.modelName) && (r.modelName = this.firstAvailableMaxModel() ?? r.modelName), t.maxMode === !1 && !this.doesModelSupportNonMaxMode(r.modelName) && (r.modelName = this.firstAvailableNonMaxModel() ?? r.modelName), t.modelName !== void 0 && (this.doesModelSupportMaxMode(r.modelName) || (r.maxMode = !1), this.doesModelSupportNonMaxMode(r.modelName) || (r.maxMode = !0)), t.maxMode === !1 && r.selectedModels) {
            const c = r.selectedModels.map((l)=>{
                const u = this.getAvailableDefaultModels().find((p)=>p.name === l.modelId);
                if (!u || !u.variants || u.variants.length === 0) return l;
                const h = k$l(u, l.parameters ?? [], !1);
                return h && !h.maxMode ? {
                    modelId: l.modelId,
                    parameters: h.parameters.map((p)=>({
                            id: p.id,
                            value: p.value
                        }))
                } : l;
            });
            r.selectedModels = c;
        }
        return s(), r;
    }
    autoEnableSelectedModels(e) {
        const t = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings, n = t.modelOverrideDisabled ?? [], i = t.modelOverrideEnabled ?? [], r = this.getAvailableDefaultModels();
        for (const s of e){
            const o = s.modelId;
            if (o === "default") continue;
            const a = n.includes(o), u = !(r.find((h)=>h.name === o)?.defaultOn ?? !0) && !i.includes(o);
            (a || u) && (a && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter((h)=>h !== o)), i.includes(o) || this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", [
                ...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled ?? [],
                o
            ]));
        }
    }
    setModelConfig(e, t) {
        const n = this.getStoredModelConfig(e), i = this.writeSurfaceModelConfig(e, t);
        i !== void 0 && this.clearMaxModeRequiredPreferencesIfMaxTurnedOff(e, n, i);
    }
    clearMaxModeRequiredPreferencesIfMaxTurnedOff(e, t, n) {
        e !== "background-composer" && t.maxMode === !0 && n.maxMode === !1 && this.clearAllMaxModeRequiredPreferences();
    }
    writeSurfaceModelConfig(e, t) {
        if (e === "plan-execution" && t.maxMode !== void 0) {
            this.writeSurfaceModelConfig("composer", {
                maxMode: t.maxMode
            });
            const { maxMode: s, ...o } = t;
            t = o;
        }
        const n = this.getStoredModelConfig(e);
        if (e === "composer" && (t.modelName?.includes(",") || (t.selectedModels?.length ?? 0) > 1)) {
            this.structuredLogService.warn("composer", "Dropped global composer model config write with multi-model name", {
                subkey: "model_config_drop_composer_multi_model_write",
                modelName: t.modelName,
                selectedModelsCount: String(t.selectedModels?.length ?? 0)
            });
            return;
        }
        const i = this.shouldAllowMultiModel(e, t, n);
        this.logSetModelConfigInputs(e, n, t, {
            allowMultiModel: i
        });
        const r = this.applyInvariants(n, t, e, {
            allowMultiModel: i
        });
        if (t.modelName !== void 0) {
            if (t.modelName === "default" && n.modelName !== "default") {
                const s = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.previousModelBeforeDefault || {};
                this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "previousModelBeforeDefault", {
                    ...s,
                    [e]: n.modelName
                });
            } else if (n.modelName === "default" && t.modelName !== "default") {
                const o = {
                    ...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.previousModelBeforeDefault || {}
                };
                delete o[e], this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "previousModelBeforeDefault", o);
            }
        }
        return t.selectedModels && t.selectedModels.length > 0 && !this._isMigrating && this.autoEnableSelectedModels(t.selectedModels), this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelConfig", e, {
            ...xfh(r),
            useExperimentalModelOptOut: void 0
        }), this._modelConfigMigrationPending = !0, r;
    }
    setModelConfigForComposer(e, t, n, i) {
        const r = e.data.modelConfig, s = n ?? (e.data.unifiedMode === "background" ? "background-composer" : "composer"), o = r ?? this.getModelConfig(s), a = {
            ...o,
            ...t
        };
        let c;
        if (n) c = n;
        else {
            const h = e.data.unifiedMode, p = (a.selectedModels?.length ?? 0) > 1 || (a.modelName?.includes(",") ?? !1);
            c = h === "background" ? "background-composer" : p ? "composer-ensemble" : "composer";
        }
        this.logSetModelConfigInputs(c, o, t, {
            allowMultiModel: !0
        });
        const l = this.applyInvariants(o, t, c, {
            allowMultiModel: !0
        }), u = c === "background-composer" && !l.selectedModels ? {
            ...l,
            selectedModels: this.deriveSelectedModels(l)
        } : l;
        e.setData({
            modelConfig: iSt(u)
        }), i?.updateGlobalConfig === !0 && (this.clearMaxModeRequiredPreferencesIfMaxTurnedOff(c, o, u), this.writeSurfaceModelConfig(c, c === "background-composer" && !t.selectedModels && u.selectedModels ? {
            ...t,
            selectedModels: u.selectedModels
        } : t));
    }
    setMaxMode(e, t) {
        if (t === "plan-execution") {
            this.setModelConfig("composer", {
                maxMode: e
            });
            return;
        }
        this.setModelConfig(t, {
            maxMode: e
        });
    }
    setSpecificModel(e, t) {
        this.setModelConfig(e, {
            modelName: t
        });
    }
    getSpecificModel(e) {
        return this.getModelConfig(e).modelName;
    }
    getPreviousNonDefaultModel(e) {
        return this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.previousModelBeforeDefault?.[e];
    }
    getMaxMode(e) {
        return this.getModelConfig(e).maxMode;
    }
    normalizeModelList(e) {
        return e ? e.split(",").map((t)=>t.trim()).filter((t)=>t.length > 0) : [];
    }
    doesModelSupportMaxMode(e) {
        const t = this.normalizeModelList(e);
        if (t.length === 0) return !1;
        if (t.length > 1) return t.every((a)=>this.doesModelSupportMaxMode(a));
        const n = t[0], i = this.getAvailableDefaultModels(), r = [
            ...V_e
        ], s = i.find((a)=>a.name === n), o = r.find((a)=>a.name === n);
        return s !== void 0 && s.supportsMaxMode !== void 0 ? s.supportsMaxMode : o?.supportsMaxMode ?? !1;
    }
    doesModelSupportNonMaxMode(e) {
        const t = this.normalizeModelList(e);
        if (t.length === 0) return !0;
        if (t.length > 1) return t.every((a)=>this.doesModelSupportNonMaxMode(a));
        const n = t[0];
        if (n === "default") return !0;
        const i = this.getAvailableDefaultModels(), r = [
            ...V_e
        ], s = i.find((a)=>a.name === n), o = r.find((a)=>a.name === n);
        return s !== void 0 && s.supportsNonMaxMode !== void 0 ? s.supportsNonMaxMode : o?.supportsNonMaxMode ?? !0;
    }
    computeAvailableDefaultModels() {
        const e = this.getPrivateInferenceCatalog();
        if (e.kind !== "off") return e.kind === "ready" ? e.models.map(Wvh) : [];
        this.reactiveStorageService.availableModelsCatalogRevision();
        const t = lr(()=>(this.reactiveStorageService.applicationUserPersistentStorage.availableDefaultModels2 ?? []).map(Wvh)), n = t.length === 0 ? [
            ...V_e
        ] : t.some((r)=>r.name === "default") ? t : [
            ...t,
            ...V_e
        ], i = this.reactiveStorageService.applicationUserPersistentStorage.localProviderModelIds ?? [];
        return QVv(n, i, kc.localMode);
    }
    getAvailableDefaultModels() {
        return [
            ...this._availableDefaultModels()
        ];
    }
    getModelPickerDisplayConfiguration() {
        const e = this.getPrivateInferenceCatalog();
        if (e.kind !== "off") return YVv(this.getAvailableDefaultModels().length === 0, e.kind === "loading" ? e.message ?? Bvh : e.configError);
        const t = this.reactiveStorageService.applicationUserPersistentStorage.modelPickerDisplayConfiguration ?? Lko;
        return ZVv(t);
    }
    resolveModelNameToCatalog(e, t = this.getAvailableDefaultModels()) {
        return t.length === 0 ? e : this.resolveToCatalogName(e, t);
    }
    resolvePersistedModelIdForRead(e, t) {
        const n = this.resolveToCatalogName(e, t);
        if (t.some((s)=>s.name === n)) return {
            modelId: n,
            isFallback: !1
        };
        const i = t.find((s)=>s.idAliases?.includes(n));
        if (i) return {
            modelId: i.name,
            isFallback: !1
        };
        const r = this.getPrivateInferenceCatalog();
        if (r.kind !== "off") {
            const s = Pko(t, r.kind === "ready" ? r.defaultModelId : void 0);
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
        } : Hvh(t) ? {
            modelId: "default",
            isFallback: !0
        } : {
            modelId: n,
            isFallback: !1
        };
    }
    resolveSelectedModelsForRead(e, t) {
        let n = !1;
        const i = e.map((r)=>{
            const { modelId: s, isFallback: o } = this.resolvePersistedModelIdForRead(r.modelId, t);
            return s === r.modelId ? r : (n = !0, {
                ...r,
                modelId: s,
                parameters: o ? [] : r.parameters
            });
        });
        return n ? i : e;
    }
    fixupModelConfigForCurrentFlag(e) {
        if (!(this.isPrivateInferenceMode() ? this.getAvailableDefaultModels().length > 0 : (this.reactiveStorageService.applicationUserPersistentStorage.availableDefaultModels2?.length ?? 0) > 0)) return e;
        const n = this.getAvailableDefaultModels();
        if (e.modelName && (!e.selectedModels || e.selectedModels.length === 0)) {
            const i = this.resolveSelectedModelsForRead(this.resolveSelectedModelsFromModelName(e.modelName, n), n);
            return this.structuredLogService.info("composer", "fixupModelConfig: populating selectedModels from modelName", {
                subkey: "model_config_fixup_populate_selected",
                sourceModelName: e.modelName,
                resolvedSelectedModelIds: i.map((r)=>r.modelId).join(",")
            }), {
                ...e,
                selectedModels: i
            };
        }
        if (e.selectedModels && e.selectedModels.length > 0) {
            const i = this.resolveSelectedModelsForRead(e.selectedModels, n);
            if (i !== e.selectedModels) return {
                ...e,
                selectedModels: i
            };
        }
        return e;
    }
    firstAvailableMaxModel() {
        return this.getAvailableDefaultModels().find((t)=>t.supportsMaxMode)?.name;
    }
    firstAvailableNonMaxModel() {
        return this.getAvailableDefaultModels().find((t)=>t.supportsNonMaxMode && t.namedModelSectionIndex !== void 0)?.name;
    }
    hasSmartModeClassifierModel() {
        return this.getAvailableDefaultModels().some((e)=>e.supportsSmartModeClassifier === !0);
    }
    doesModelSupportAgent(e) {
        if (e === "default") return !0;
        const t = e.toLowerCase().includes("claude-3"), n = e.toLowerCase().includes("gpt-4o") && !e.toLowerCase().includes("mini"), i = e.toLowerCase().includes("o3-mini"), r = e.toLowerCase().includes("grok-3");
        if (t || n || i || r) return !0;
        const s = this.getAvailableDefaultModels(), o = [
            ...V_e
        ], a = s.find((l)=>l.name === e), c = o.find((l)=>l.name === e);
        return a !== void 0 && a.supportsAgent !== void 0 ? a.supportsAgent : c?.supportsAgent ?? !0;
    }
    doesModelSupportThinking(e) {
        if (e === "default") return !1;
        const t = this.getAvailableDefaultModels(), n = [
            ...V_e
        ], i = t.find((s)=>s.name === e), r = n.find((s)=>s.name === e);
        return i !== void 0 && i.supportsThinking !== void 0 ? i.supportsThinking : r?.supportsThinking ?? !1;
    }
    doesModelSupportImages(e) {
        if (e === "default") return !0;
        const t = this.getAvailableDefaultModels(), n = [
            ...V_e
        ], i = t.find((s)=>s.name === e), r = n.find((s)=>s.name === e);
        return i !== void 0 && i.supportsImages !== void 0 ? i.supportsImages : r?.supportsImages ?? !0;
    }
    getServerModelName(e) {
        if (e === "default") return e;
        const t = this.resolveModelNameToCatalog(e), n = this.getAvailableDefaultModels(), i = [
            ...V_e
        ], r = n.find((o)=>o.name === t), s = i.find((o)=>o.name === t);
        return r !== void 0 && r.serverModelName !== void 0 ? r.serverModelName : s?.serverModelName ?? t;
    }
    getSelectedModels(e) {
        const t = this.getModelConfig(e);
        return this.deriveSelectedModels(t);
    }
    getSelectedModelsForComposer(e) {
        const t = this.getEffectiveModelConfigForComposer(e);
        return this.deriveSelectedModels(t);
    }
    getEffectiveModelConfigForComposer(e) {
        const t = e.data.unifiedMode === "background" ? "background-composer" : "composer";
        return e.data.modelConfig ?? this.getModelConfig(t);
    }
    deriveSelectedModels(e) {
        return e.selectedModels && e.selectedModels.length > 0 ? e.selectedModels : this.resolveSelectedModelsFromModelName(e.modelName);
    }
    getModelParameterPreferences(e) {
        return this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences?.[e];
    }
    setModelParameterPreferences(e, t) {
        const n = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences ?? {}, i = this.getAvailableDefaultModels().find((o)=>o.name === e), r = i && i.parameterDefinitions.length > 0 && t.length > 0 ? O1n(i, t, this.getMaxMode("composer"))?.parameterValues.map((o)=>({
                id: o.id,
                value: o.value
            })) ?? t : t, s = {
            modelId: e,
            parameters: r,
            updatedAt: new Date().toISOString()
        };
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelParameterPreferences", {
            ...n,
            [e]: s
        });
    }
    clearModelParameterPreferences(e) {
        const t = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences;
        if (!t || !t[e]) return;
        const n = {};
        for (const i of Object.keys(t))i !== e && (n[i] = t[i]);
        this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelParameterPreferences", CJr(n));
    }
    getAllModelParameterPreferences() {
        return this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelParameterPreferences ?? {};
    }
    resolveModelParametersForSubmission(e, t, n) {
        const i = this.getAvailableDefaultModels().find((o)=>o.name === e);
        if (!i || !i.parameterDefinitions || i.parameterDefinitions.length === 0) return [];
        const r = t && t.length > 0 ? t : this.getModelParameterPreferences(e)?.parameters ?? [];
        return O1n(i, r, n)?.parameterValues ?? [];
    }
    doesModelPreferencesRequireMaxMode(e) {
        const t = this.getModelParameterPreferences(e);
        if (!t || t.parameters.length === 0) return !1;
        const n = this.getAvailableDefaultModels().find((r)=>r.name === e);
        if (!n || !n.variants || n.variants.length === 0) return !1;
        const i = N1n(n, t.parameters);
        return i ? P1n(n, i) : !1;
    }
    cycleHotkeyParameter(e, t) {
        const n = t ? this.getSelectedModelsForComposer(t) : this.getSelectedModels(e);
        if (n.length === 0) return;
        const i = this.getAvailableDefaultModels();
        let r;
        const s = n.map((o)=>{
            const a = i.find((g)=>g.name === o.modelId);
            if (!a || !a.parameterDefinitions) return o;
            const c = a.parameterDefinitions.find((g)=>g.isCycleableByHotkey === !0 && FLs(g) > 1);
            if (!c) return o;
            const l = o.parameters?.find((g)=>g.id === c.id)?.value ?? "", u = ICf(c, l);
            let h = u;
            c.parameterType?.booleanParameter ? h = u === "true" ? "On" : "Off" : c.parameterType?.enumParameter && (h = c.parameterType.enumParameter.values.find((f)=>f.value === u)?.displayName ?? u), r = {
                paramName: c.name,
                newValue: u,
                newDisplayValue: h
            };
            const p = (o.parameters ?? []).filter((g)=>g.id !== c.id);
            return p.push({
                id: c.id,
                value: u
            }), this.setModelParameterPreferences(o.modelId, p), {
                modelId: o.modelId,
                parameters: p
            };
        });
        if (r) return t ? this.setModelConfigForComposer(t, {
            selectedModels: s
        }, e, {
            updateGlobalConfig: !0
        }) : this.setModelConfig(e, {
            selectedModels: s
        }), r;
    }
    clearAllMaxModeRequiredPreferences() {
        const e = this.getAllModelParameterPreferences(), t = [];
        for (const n of Object.keys(e))this.doesModelPreferencesRequireMaxMode(n) && (this.clearModelParameterPreferences(n), t.push(n));
        return t;
    }
    getHookModelString(e) {
        return JVv(e, this.getAvailableDefaultModels(), (t)=>{
            this.structuredLogService.error("composer", "Failed to resolve hook model legacy slug", void 0, {
                subkey: "hook_model_missing_legacy_slug",
                modelId: t.modelId,
                parameters: JSON.stringify(t.parameters ?? []),
                maxMode: String(e?.maxMode === !0)
            });
        });
    }
    getHookModelFields(e) {
        if (!e) return {};
        const t = this.deriveSelectedModels(e)[0];
        if (!t) return {};
        if (!this.getAvailableDefaultModels().find((r)=>r.name === t.modelId)) return {};
        const i = this.resolveModelParametersForSubmission(t.modelId, t.parameters, e.maxMode);
        return {
            model_id: t.modelId,
            ...i.length > 0 && {
                model_params: i
            }
        };
    }
    healStaleParameters() {
        const e = this.getAvailableDefaultModels();
        if (e.length === 0) return;
        const t = this.getAllModelParameterPreferences();
        for (const [n, i] of Object.entries(t)){
            const r = e.find((a)=>a.name === n);
            if (!r || r.parameterDefinitions.length === 0 || i.parameters.length === 0) continue;
            const s = this.getMaxMode("composer"), o = t0e(r, i.parameters, s);
            htt(o, i.parameters) || (this.structuredLogService.info("composer", "Healed stale parameter preferences", {
                subkey: "heal_stale_preferences",
                modelId: n,
                beforeCount: String(i.parameters.length),
                afterCount: String(o.length)
            }), this.setModelParameterPreferences(n, o));
        }
        for (const n of pSt){
            const i = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelConfig[n];
            if (!i?.selectedModels || i.selectedModels.length === 0) continue;
            let r = !1;
            const s = i.selectedModels.map((o)=>{
                const a = e.find((h)=>h.name === o.modelId), c = o.parameters ?? [];
                if (!a || a.parameterDefinitions.length === 0 || c.length === 0) return c === o.parameters ? o : {
                    ...o,
                    parameters: c
                };
                const l = this.getMaxMode(n), u = t0e(a, c, l);
                return htt(u, c) ? o : (r = !0, this.structuredLogService.info("composer", "Healed stale selected model parameters", {
                    subkey: "heal_stale_selected_model",
                    surface: n,
                    modelId: o.modelId,
                    beforeCount: String(c.length),
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
    updateModelUsageOnCatalogRefresh(e) {
        if ((this.reactiveStorageService.applicationUserPersistentStorage.availableDefaultModels2 ?? []).length === 0) return;
        const n = this.getAvailableDefaultModels(), i = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings, r = i.modelOverrideEnabled ?? [], s = i.modelOverrideDisabled ?? [], o = this.readUserModelOverrides(), a = new Set;
        for (const b of pSt)for (const y of this.deriveSelectedModels(this.getStoredModelConfig(b)))y.modelId !== "default" && a.add(y.modelId);
        const c = Date.now(), l = new Date(c).toISOString(), u = i.modelLastUsedAt ?? {}, h = {};
        let p = 0;
        for (const b of n){
            if (b.name === "default") continue;
            if (a.has(b.name)) {
                const T = u[b.name];
                h[b.name] = T !== void 0 && c - Date.parse(T) < Gvh ? T : l;
                continue;
            }
            if (!this.isRowShownOn(b, o)) continue;
            const y = u[b.name];
            y !== void 0 && !isNaN(Date.parse(y)) ? h[b.name] = y : (h[b.name] = l, p++);
        }
        if (p > 0 && this.structuredLogService.info("composer", "Seeded model usage timestamps for newly tracked models", {
            subkey: "model_usage_timestamps_seeded",
            seededCount: String(p)
        }), e !== void 0 && e > 0) {
            const b = c - e * 60 * 60 * 1e3, y = [];
            for (const T of n){
                if (T.name === "default" || a.has(T.name) || !this.isRowShownOn(T, o)) continue;
                const E = Date.parse(h[T.name]);
                !isNaN(E) && E < b && y.push(T.name);
            }
            if (y.length > 0) {
                const T = this.experimentService.checkFeatureGate("auto_disable_unused_models", {
                    disableExposureLog: !1
                });
                if (this.getAnalyticsService().trackEvent("client.models_auto_disabled", {
                    dryRun: !T,
                    disabledModelCount: y.length,
                    disabledModelIds: y.join(","),
                    disableUnusedModelsAfterNHours: e
                }), T) {
                    this.structuredLogService.info("composer", "Auto-disabled models unused past backend threshold", {
                        subkey: "model_auto_disabled_unused",
                        disabledModelIds: y.join(","),
                        disableUnusedModelsAfterNHours: String(e)
                    });
                    for (const A of y)delete h[A];
                    this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", [
                        ...s,
                        ...y.filter((A)=>!s.includes(A))
                    ]);
                    const E = r.filter((A)=>!y.includes(A));
                    E.length !== r.length && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", E);
                } else this.structuredLogService.info("composer", "Would auto-disable models unused past backend threshold (skipped: flag off)", {
                    subkey: "model_auto_disable_dry_run",
                    skippedReason: "auto_disable_unused_models_flag_off",
                    disabledModelIds: y.join(","),
                    disableUnusedModelsAfterNHours: String(e)
                });
            }
        }
        const g = Object.keys(u), f = Object.keys(h);
        (g.length !== f.length || f.some((b)=>u[b] !== h[b])) && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelLastUsedAt", i.modelLastUsedAt ? CJr(h) : h);
    }
}, $Xi = ie([
    C(0, Do),
    C(1, Xh),
    C(2, Kr),
    C(3, _t),
    C(4, yn)
], $Xi), mn(QS, $Xi, 1);

}
