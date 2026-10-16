import { Dig, Gng, Mig, Nig, Rig, Tig, arl, hat, qrl } from "./Aeg.js";
import { Gt, Qe, st, tt } from "./Iwo.js";
import { bn, jn } from "./SZu.js";
import { es, sn } from "./actions_2.js";
import { iS, lb } from "./adminSettingsService.js";
import { eme, y$ } from "./agentLayoutService.js";
import { fbt, n2 } from "./aiserver_pb.js";
import { Rs, ss } from "./authenticationService.js";
import { iFa, nFa } from "./autoSmartModelMigration.js";
import { vl, wm } from "./buildFlags.js";
import { ZPe } from "./byokModelUtils.js";
import { nr, rs } from "./commands.js";
import { Yh, vS } from "./composer.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { Fb, LS } from "./composerEventService.js";
import { Bb, Ux } from "./composerViews.js";
import { pa, uJn } from "./constants_8.js";
import { Ub, py } from "./cursorCredsService.js";
import { KPe } from "./customizeCommandRouting.js";
import { CJ, UB } from "./debugNamespaceService.js";
import { fo, ps } from "./environmentService.js";
import { Cr, _s } from "./experimentService.js";
import { Rn } from "./extensions.js";
import { QTi, RA } from "./glassModeConstants.js";
import { Mt } from "./index_197.js";
import { It, dn } from "./instantiation.js";
import { $9p, Dh, EWt, GCn, L9p, N9p, Xh, _zr, gf, j9p, m0e, tFa, vzr } from "./ipa.js";
import { UD, UI } from "./layoutService.js";
import { Id, Pv } from "./layoutService_2.js";
import { qCn } from "./localProviderModelEnrichment.js";
import { $4e, YPe } from "./modelConfigService.js";
import { eg, of } from "./modelConfigServiceTypes.js";
import { Ks, Wr } from "./notification.js";
import { kc, qc } from "./opener.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { Fr, RWt, Um } from "./reactiveStorageTypes_2.js";
import { lrl } from "./slackConnect.js";
import { Zi, ki } from "./storage_2.js";
import { v1 } from "./store.js";
import { Cm, wh } from "./structuredLog.js";
import { E } from "./tslib.es6.js";
import { Z_, fS } from "./uiOverlayService.js";
import { BJ, Jpe } from "./usageDataService.js";
import { F, Re } from "./userDataProfile.js";
import { wu } from "./utilities_3.js";
import { Ht, Wu, ks, pi } from "./ze.js";
var vR, Lig, zrl, Oig, Fig, prs, mrs;
export { Fig, Lig, Oig, mrs, prs, vR, zrl };
var __wakaru_ZM_initialized = false;
export function ZM() {
if (__wakaru_ZM_initialized) return;
__wakaru_ZM_initialized = true;
"use strict";
E(), pa(), Qe(), es(), rs(), Rn(), It(), UD(), Ks(), el(), Um(), Zi(), Rs(), qc(), py(), lrl(), Gt(), n2(), KPe(), iS(), pi(), v1(), Mt(), $4e(), of(), fS(), wu(), CJ(), Cm(), Pl(), Jpe(), eme(), RA(), _s(), fo(), Pv(), vS(), Ux(), LS(), ZPe(), iFa(), wm(), qCn(), vR = jn("AISettingsService"), Lig = "glass.cursorai.action.switchToModelSlugInGlass", zrl = async (t, e, n, i, r)=>{
    e.setModelConfig("composer", t), r.isVisible("workbench.parts.auxiliarybar") || r.setPartHidden(!1, "workbench.parts.auxiliarybar");
    let s = n.selectedComposerId;
    if (s ? await i.openComposer({
        type: "local",
        id: s
    }) : (await i.createNewComposer(), s = n.selectedComposerId), s) {
        const o = await n.getComposerHandleById(s);
        o && e.setModelConfigForComposer(o, t);
    }
}, Oig = (t, e, n)=>e.includes(t) ? t : n?.get(t) ?? t, Fig = (t)=>{
    const { modelConfigService: e, availableModels: n, catalogModels: i, specificModelField: r, legacySlugMap: s, structuredLogService: o, localProviderModelIds: a = [], isModelBlocked: l = ()=>!1, isAutoSmartCostMigrationEnabled: c = ()=>!1 } = t, u = e.getStoredModelConfig(r);
    if (u === null) return {
        modelName: "default",
        maxMode: !1
    };
    const d = u.modelName, h = tFa({
        modelConfig: u,
        catalogModels: i,
        availableModelIds: n,
        isModelBlocked: l,
        isMigrationEnabled: c
    });
    if (h !== u) return e.setModelConfig(r, $9p({
        currentModelConfig: u,
        migratedModelConfig: h
    })), h;
    if (d === "default") return u;
    const p = d.split(",").map((_)=>_.trim()).filter((_)=>_.length > 0), g = p.map((_)=>Oig(_, n, s));
    if (!(g.length > 0 && g.every((_)=>n.includes(_)))) {
        if (n.length === 0 || r === "background-composer") return u;
        if (vl.localMode && r === "composer") {
            const A = e.getAvailableDefaultModels().filter((U)=>!EWt(U, l)), P = a.length > 0 ? GCn(A, a) : n.filter((U)=>!l(U)), M = vzr(A, a), O = _zr(d, P, M), N = p.every((U)=>U === "default" || L9p(U));
            if (O !== void 0 && N && !l(O)) {
                const U = {
                    ...u,
                    modelName: O,
                    maxMode: u.maxMode ?? !1,
                    selectedModels: [
                        {
                            modelId: O,
                            parameters: u.selectedModels?.[0]?.parameters ?? []
                        }
                    ]
                };
                return e.setModelConfig(r, U), U;
            }
        }
        const _ = g.filter((A)=>n.includes(A) && !l(A)), b = n.find((A)=>!l(A)), y = _.length > 0 ? _.join(",") : b ?? "default", S = _.length > 0 ? "partial_filter" : "complete_fallback", k = p.filter((A)=>n.includes(A)).length, C = g.filter((A)=>n.includes(A)).length, T = p.reduce((A, P, M)=>g[M] !== P ? A + 1 : A, 0);
        o.warn("composer", "Model reset by fixUnavailable", {
            subkey: "fix_unavailable_model_reset",
            surface: r,
            previousModel: d,
            newModel: y,
            availableModelCount: String(n.length),
            availableModels: n.join(","),
            fallbackMode: S,
            previousModelTokenCount: String(p.length),
            directlyAvailableCount: String(k),
            resolvedAvailableCount: String(C),
            legacySlugMapHits: String(T)
        });
        const I = {
            modelName: y,
            maxMode: !1
        };
        return e.setModelConfig(r, I), I;
    }
    if (g.some((_, b)=>_ !== p[b])) {
        const _ = {
            ...u,
            modelName: g.join(",")
        };
        return e.setModelConfig(r, _), _;
    }
    return u;
}, prs = class extends st {
    constructor(t, e, n, i, r, s, o, a, l){
        super(), this.storageService = t, this.reactiveStorageService = e, this.cursorAuthenticationService = n, this.adminSettingsService = i, this.experimentService = r, this.modelConfigService = s, this.uiOverlayService = o, this.devConsoleService = a, this.structuredLogService = l, this.storageId = "aisettings.service", this._onDidChangeUseOpenAIKey = this._register(new tt), this.getLastSingleModelPreference = (c)=>this.getLastSingleModelPreferenceState()[c], this.setLastSingleModelPreference = (c, u)=>{
            const d = this.getLastSingleModelPreferenceState();
            if (!u || u === "") {
                d[c] !== void 0 && (delete d[c], this.lastSingleModelPreference.set(JSON.stringify(d), void 0));
                return;
            }
            d[c] !== u && (d[c] = u, this.lastSingleModelPreference.set(JSON.stringify(d), void 0));
        }, this.saveData = ()=>{}, this.loadData = ()=>{
            if (this.reactiveStorageService.applicationUserPersistentStorage.havePerformedSettingsServiceMigration !== !0) {
                this.reactiveStorageService.setApplicationUserPersistentStorage("havePerformedSettingsServiceMigration", !0);
                const c = this.storageService.get(this.storageId, -1);
                if (c) {
                    const u = JSON.parse(c);
                    u.useOpenAIKey !== void 0 && this.reactiveStorageService.setApplicationUserPersistentStorage("useOpenAIKey", u.useOpenAIKey), u.availableModels !== void 0 && this.reactiveStorageService.setApplicationUserPersistentStorage("availableAPIKeyModels", u.availableModels), u.noStorageMode !== void 0 && this.reactiveStorageService.setApplicationUserPersistentStorage("noStorageMode", u.noStorageMode || this.cursorAuthenticationService.membershipType() === Fr.ENTERPRISE && this.cursorAuthenticationService.shouldHaveGhostModeFromEnterprise().privacyModeForced);
                }
            }
        }, this.getUseOpenAIKey = ()=>this.reactiveStorageService.applicationUserPersistentStorage.useOpenAIKey ?? !1, this.enableModel = (c)=>{
            this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(c) && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter((u)=>u !== c)), this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(c) || this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", [
                ...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled ?? [],
                c
            ]), this._didChangeAvailableModels();
        }, this.addUserAddedModel = (c)=>{
            this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.includes(c) || (this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "userAddedModels", [
                ...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels ?? [],
                c
            ]), this._didChangeAvailableModels());
        }, this.removeUserAddedModel = (c)=>{
            !this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.includes(c) && this.isDefaultModel(c) || (this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "userAddedModels", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.filter((u)=>u !== c) ?? []), this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.filter((u)=>u !== c) ?? []), this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.filter((u)=>u !== c) ?? []), this._didChangeAvailableModels());
        }, this.isDefaultModel = (c)=>this.modelConfigService.getAvailableDefaultModels().filter((d)=>!d.isLongContextOnly).map((d)=>d.name).includes(c), this.isUserAddedModel = (c)=>this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.includes(c) ?? !1, this.removeModel = (c)=>{
            this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(c) && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled.filter((u)=>u !== c)), this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(c) && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter((u)=>u !== c)), this._didChangeAvailableModels();
        }, this.disableModel = (c)=>{
            this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(c) && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled.filter((u)=>u !== c)), this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(c) || this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", [
                ...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled ?? [],
                c
            ]), this._didChangeAvailableModels();
        }, this.getAllPotentialModelsReactiveWithStatus = ()=>{
            const c = (d)=>({
                    name: d.name,
                    clientDisplayName: d.clientDisplayName ?? d.name,
                    serverModelName: d.serverModelName ?? d.name,
                    status: d.degradationStatus ?? fbt.UNSPECIFIED,
                    price: d.price,
                    tooltipData: d.tooltipData,
                    supportsMaxMode: d.supportsMaxMode,
                    tooltipDataForMaxMode: d.tooltipDataForMaxMode,
                    isRecommendedForBackgroundComposer: d.isRecommendedForBackgroundComposer,
                    supportsSandboxing: d.supportsSandboxing,
                    inputboxShortModelName: d.inputboxShortModelName,
                    backgroundComposerSortOrder: d.backgroundComposerSortOrder,
                    variants: d.variants,
                    namedModelSectionIndex: d.namedModelSectionIndex,
                    tagline: d.tagline,
                    visibleInRoutedModelView: d.visibleInRoutedModelView
                });
            return this.modelConfigService.getAvailableDefaultModels().filter((d)=>!d.isLongContextOnly && !this.getHardcodedLongContextOnlyModelNames().includes(d.name)).map((d)=>c(d));
        }, this.isModelDisabled = (c)=>this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(c) === !0, this.useOpenAIKeyListeners = [], this.availableModelsListeners = [], this.popupListeners = [], this.closePopupListeners = [], this.addOpenAIKeyListener = (c)=>{
            this.useOpenAIKeyListeners.push(c);
        }, this.removeOpenAIKeyListener = (c)=>{
            this.useOpenAIKeyListeners = this.useOpenAIKeyListeners.filter((u)=>u !== c);
        }, this.addAvailableModelsListener = (c)=>{
            this.availableModelsListeners.push(c);
        }, this.removeAvailableModelsListener = (c)=>{
            this.availableModelsListeners = this.availableModelsListeners.filter((u)=>u !== c);
        }, this.onDidChangeUseOpenAIKey = this._onDidChangeUseOpenAIKey.event, this.addPopupListener = (c)=>{
            this.popupListeners.push(c);
        }, this.addClosePopupListener = (c)=>{
            this.closePopupListeners.push(c);
        }, this.removeClosePopupListener = (c)=>{
            this.closePopupListeners = this.closePopupListeners.filter((u)=>u !== c);
        }, this.settingsDismissedOpenAIKeyWarning = this._register(Xh(this.storageService, "settingsDismissedOpenAIKeyWarning")), this.settingsDismissedClaudeKeyWarning = this._register(Xh(this.storageService, "settingsDismissedClaudeKeyWarning")), this.settingsDismissedGoogleKeyWarning = this._register(Xh(this.storageService, "settingsDismissedGoogleKeyWarning")), this.settingsDismissedBedrockKeyWarning = this._register(Xh(this.storageService, "settingsDismissedBedrockKeyWarning")), this.dismissedGeneralCustomizeBanner = this._register(Xh(this.storageService, "dismissedGeneralCustomizeBanner")), this.dismissedP2PReferralCta = this._register(Xh(this.storageService, "dismissedP2PReferralCta")), this.lastSingleModelPreference = this._register(Xh(this.storageService, "lastSingleModelPreference")), this.loadData(), this._register(this.storageService.onWillSaveState(()=>this.saveData())), this._register(this.devConsoleService.register("getApplicationProperty", (c)=>Dh(this.storageService, c))), this._register(this.devConsoleService.register("setApplicationProperty", (c, u)=>{
            gf(this.storageService, c, u);
        }));
    }
    getLastSingleModelPreferenceState() {
        const t = this.lastSingleModelPreference.get();
        if (!t) return {};
        try {
            return JSON.parse(t);
        } catch  {
            return {};
        }
    }
    getUseApiKeyForModel(t) {
        return qrl(t, this.reactiveStorageService.applicationUserPersistentStorage);
    }
    getHardcodedLongContextOnlyModelNames() {
        return YPe.filter((t)=>t.isLongContextOnly).map((t)=>t.name);
    }
    getAvailableModelsReactive(t) {
        return [
            ...this.getAvailableModelsReactiveWithStatus(t).map((e)=>e.name)
        ];
    }
    getAvailableModelsWithStatus(t) {
        return ks(()=>this.getAvailableModelsReactiveWithStatus(t));
    }
    getAllPotentialModelsWithStatus() {
        return ks(()=>this.getAllPotentialModelsReactiveWithStatus());
    }
    getAvailableModelsReactiveWithStatus(t) {
        let e = [];
        const n = (a)=>({
                name: a.name,
                clientDisplayName: a.clientDisplayName ?? a.name,
                serverModelName: a.serverModelName ?? a.name,
                status: a.degradationStatus ?? fbt.UNSPECIFIED,
                price: a.price,
                tooltipData: a.tooltipData,
                supportsMaxMode: a.supportsMaxMode,
                tooltipDataForMaxMode: a.tooltipDataForMaxMode,
                isRecommendedForBackgroundComposer: a.isRecommendedForBackgroundComposer,
                supportsSandboxing: a.supportsSandboxing,
                inputboxShortModelName: a.inputboxShortModelName,
                backgroundComposerSortOrder: a.backgroundComposerSortOrder,
                variants: a.variants,
                namedModelSectionIndex: a.namedModelSectionIndex,
                tagline: a.tagline,
                visibleInRoutedModelView: a.visibleInRoutedModelView
            }), i = Wu(this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled), r = [], s = this.modelConfigService.getAvailableDefaultModels();
        if (e = ks(()=>s.filter((a)=>{
                if (!a.defaultOn && !i?.includes(a.name)) return !1;
                const l = t?.specificModelField === "cmd-k";
                return l && a.supportsNonMaxMode === !1 || l && a.supportsThinking === !0 || l && a.supportsCmdK === !1 || !l && a.onlySupportsCmdK === !0 ? (r.push(a.name), !1) : !0;
            }).map((a)=>n(a))), i !== void 0) for (const a of i)r.includes(a) || e.some((l)=>l.name === a) || e.push({
            name: a,
            clientDisplayName: a,
            status: fbt.UNSPECIFIED
        });
        const o = Wu(this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled);
        if (o !== void 0 && (e = e.filter((a)=>!o.includes(a.name))), e = e.filter((a)=>!this.getHardcodedLongContextOnlyModelNames().includes(a.name)), t?.specificModelField === "background-composer") {
            const a = vl.localMode ? Wu(this.reactiveStorageService.applicationUserPersistentStorage.localProviderModelIds) ?? [] : [];
            for (const l of this.modelConfigService.getAvailableDefaultModels())l.isRecommendedForBackgroundComposer && (a.length > 0 && !N9p(l, a) || e.some((c)=>c.name === l.name) || e.push(n(l)));
        }
        if (t?.filterBlockedModels !== !1) {
            const a = (c)=>this.adminSettingsService.isModelBlocked(c), l = new Map(s.map((c)=>[
                    c.name,
                    c
                ]));
            e = e.filter((c)=>{
                const u = l.get(c.name);
                return u !== void 0 ? !EWt(u, a) : !a(c.name) && !a(c.clientDisplayName);
            });
        }
        return e;
    }
    _setUseOpenAIKey(t) {
        this.reactiveStorageService.setApplicationUserPersistentStorage("useOpenAIKey", t);
        for (let e of this.useOpenAIKeyListeners)e(t);
        this._onDidChangeUseOpenAIKey.fire(t);
    }
    _setAvailableModels(t) {
        this.reactiveStorageService.setApplicationUserPersistentStorage("availableAPIKeyModels", t), this._didChangeAvailableModels();
    }
    handleAvailableModelsChange() {
        this.modelConfigService.triggerParameterizedModelConfigMigration();
        const t = this.modelConfigService.getAvailableDefaultModels(), e = vl.localMode ? this.reactiveStorageService.applicationUserPersistentStorage.localProviderModelIds ?? [] : [], n = j9p(t, e), i = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels ?? [];
        for (const a of i)n.includes(a) || n.push(a);
        const r = new Map;
        for (const a of t)if (a.name !== "default" && a.legacySlugs) for (const l of a.legacySlugs)r.set(l, a.name);
        const s = ()=>this.experimentService.checkFeatureGate(nFa, {
                disableExposureLog: !1
            });
        this.migrateLoadedComposerModelConfigs(n, s);
        const o = (a)=>this.adminSettingsService.isModelBlocked(a);
        for (const a of RWt)Fig({
            modelConfigService: this.modelConfigService,
            availableModels: n,
            catalogModels: t,
            specificModelField: a,
            legacySlugMap: r,
            structuredLogService: this.structuredLogService,
            localProviderModelIds: e,
            isModelBlocked: o,
            isAutoSmartCostMigrationEnabled: s
        });
        this.modelConfigService.healStaleParameters(), this._didChangeAvailableModels();
    }
    _didChangeAvailableModels() {
        const t = this.getAvailableModelsReactive();
        for (let e of this.availableModelsListeners)e(t);
    }
    migrateLoadedComposerModelConfigs(t, e) {}
}, prs = Re([
    F(0, ki),
    F(1, sa),
    F(2, ss),
    F(3, lb),
    F(4, Cr),
    F(5, eg),
    F(6, Z_),
    F(7, UB),
    F(8, wh)
], prs), mrs = class extends prs {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super(i, r, n, s, o, a, l, c, u), this.layoutService = t, this.instantiationService = e, this.usageDataService = d, this.openPopup = (h, p)=>{
            if (!(h !== void 0 && this.instantiationService.invokeFunction((f)=>Gng(f, h, {
                    idToScrollTo: p
                })))) {
                if (this.usageDataService.prefetch().catch((g)=>{
                    console.error("[AISettingsService] Failed to prefetch usage data:", g);
                }), h !== void 0 || p !== void 0) {
                    const g = this.uiOverlayService.settingsOpenData.value, f = {
                        ...g ?? {},
                        openTab: h ?? g?.openTab
                    };
                    p === void 0 ? (delete f.idToScrollTo, delete f.skipScrollToId, delete f.highlightStyle) : f.idToScrollTo = p, this.uiOverlayService.setSettingsOpenData(f);
                }
                for (let g of this.popupListeners)g(this.layoutService, this.instantiationService, h, p);
            }
        }, this.closePopup = ()=>{
            for (let h of this.closePopupListeners)h();
        }, this.subscriptionChangedListener = (h, p)=>{
            Tig({
                isLocalMode: vl.localMode
            }) && p === Fr.FREE && h !== Fr.FREE && this.setUseOpenAIKey(!1);
        }, this.cursorAuthenticationService.addSubscriptionChangedListener(this.subscriptionChangedListener);
    }
    migrateLoadedComposerModelConfigs(t, e) {
        const n = this.instantiationService.invokeFunction((s)=>s.get(no)), i = ks(()=>n.getLoadedComposers()), r = this.modelConfigService.getAvailableDefaultModels();
        if (r.length !== 0) for (const s of i){
            const o = n.getHandleIfLoaded(s);
            if (!o) continue;
            const a = n.getComposerData(o);
            if (!a?.modelConfig) continue;
            const l = a.modelConfig, c = this.modelConfigService.fixupModelConfigForCurrentFlag(l);
            c !== l && l.modelName && (!l.selectedModels || l.selectedModels.length === 0) && this.structuredLogService.info("composer", "Per-composer migration: forward-migrating modelName \u2192 selectedModels", {
                subkey: "composer_model_config_forward_migration",
                composerId: s,
                sourceModelName: l.modelName,
                resolvedSelectedModelIds: c.selectedModels?.map((f)=>f.modelId).join(",") ?? ""
            });
            const u = tFa({
                modelConfig: c,
                catalogModels: r,
                availableModelIds: t,
                isModelBlocked: (f)=>this.adminSettingsService.isModelBlocked(f),
                isMigrationEnabled: e
            });
            u !== c && this.structuredLogService.info("composer", "Migrated classic Auto composer to Auto Smart Cost", {
                subkey: "composer_model_config_auto_smart_cost_migration",
                composerId: s
            });
            const d = u.selectedModels;
            let h = !1;
            const p = d?.map((f)=>{
                const _ = r.find((S)=>S.name === f.modelId);
                if (!_ || _.parameterDefinitions.length === 0) return f;
                const b = f.parameters ?? [], y = m0e(_, b, u.maxMode);
                return hat(y, b) ? f : (h = !0, this.structuredLogService.info("composer", "Healed stale per-composer parameters", {
                    subkey: "heal_stale_composer_params",
                    composerId: s,
                    modelId: f.modelId,
                    beforeCount: String(b.length),
                    afterCount: String(y.length)
                }), {
                    ...f,
                    parameters: y
                });
            }), g = h ? {
                ...u,
                selectedModels: p
            } : u;
            g !== l && this.modelConfigService.setModelConfigForComposer(o, $9p({
                currentModelConfig: l,
                migratedModelConfig: g
            }));
        }
    }
    getModelConfig(t) {
        return this.modelConfigService.getModelConfig(t);
    }
    async getApiKey() {
        return await this.cursorAuthenticationService.openAIKey();
    }
    async refreshAPIKeyModels() {
        try {
            if (!this.getUseOpenAIKey()) return;
            const t = await this.cursorAuthenticationService.openAIKey();
            if (!t) return;
            const { models: e } = await this.getModels(t);
            this._setAvailableModels(e);
        } catch (t) {
            console.error("Error refreshing API key models:", t);
        }
    }
    async setUseOpenAIKey(t) {
        if (t === !1) return this._setUseOpenAIKey(!1), this._didChangeAvailableModels(), !1;
        {
            this._setUseOpenAIKey(!0);
            const e = await this.cursorAuthenticationService.openAIKey();
            if (e) {
                const { models: n } = await this.getModels(e);
                return this._setAvailableModels(n), !0;
            } else return this._setUseOpenAIKey(!1), this._didChangeAvailableModels(), !1;
        }
    }
    async setOpenAIKey(t) {
        const e = await this.tryChallenge(t);
        if (e !== !0) return e;
        const { models: n } = await this.getModels(t);
        return this._setAvailableModels(n), this._setUseOpenAIKey(!0), this.cursorAuthenticationService.storeOpenAIKey(t), !0;
    }
    async getModels(t) {
        return {
            models: []
        };
    }
    getProviderFromUrl(t) {
        try {
            const n = new URL(t).hostname.toLowerCase();
            return n === "api.openai.com" || n.endsWith(".api.openai.com") ? "openai" : n === "api.x.ai" || n.endsWith(".api.x.ai") ? "xai" : "unknown";
        } catch  {
            return "unknown";
        }
    }
    getModelForChallenge() {
        const t = this.reactiveStorageService.applicationUserPersistentStorage.openAIBaseUrl ?? "https://api.openai.com/v1", e = this.getProviderFromUrl(t), n = this.getAvailableModelsReactive().filter((r)=>r !== "default"), i = {
            openai: [
                "gpt-4o-mini",
                "4o",
                "gpt",
                "o1",
                "o3"
            ],
            xai: [
                "grok-4",
                "grok-3"
            ]
        };
        if (i[e]) return i[e][0];
        for (const r of [
            "gpt-4o-mini",
            "4o",
            "gpt",
            "o1",
            "o3"
        ]){
            const s = n.find((o)=>o.includes(r));
            if (s) return s;
        }
        return n.at(0) ?? "please-enable-some-models";
    }
    async tryChallenge(t) {
        const e = this.reactiveStorageService.applicationUserPersistentStorage.openAIBaseUrl ?? "https://api.openai.com/v1";
        try {
            const n = await fetch(`${e}/chat/completions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${t}`
                },
                body: JSON.stringify({
                    model: this.getModelForChallenge(),
                    messages: [
                        {
                            role: "system",
                            content: "You are a helpful assistant."
                        },
                        {
                            role: "user",
                            content: "Test prompt using gpt-3.5-turbo"
                        }
                    ],
                    temperature: 1,
                    max_tokens: 10,
                    stream: !1
                })
            });
            if (n.status === 200) return !0;
            {
                const i = await Promise.race([
                    n.text(),
                    new Promise((r, s)=>setTimeout(()=>r("Request timed out after 10 seconds"), 1e4))
                ]);
                return {
                    code: n.status,
                    error: i
                };
            }
        } catch (n) {
            return {
                code: 0,
                error: n.toString()
            };
        }
    }
    doesModelSupportAgent(t) {
        if (t === "default") return !0;
        const e = t.toLowerCase().includes("claude-3"), n = t.toLowerCase().includes("gpt-4o") && !t.toLowerCase().includes("mini"), i = t.toLowerCase().includes("o3-mini"), r = t.toLowerCase().includes("grok-3");
        if (e || n || i || r) return !0;
        const s = this.modelConfigService.getAvailableDefaultModels(), o = [
            ...YPe
        ], a = s.find((c)=>c.name === t), l = o.find((c)=>c.name === t);
        return (a?.supportsAgent || l?.supportsAgent) ?? !1;
    }
    doesModelSupportImages(t) {
        const e = t.split(",").map((r)=>r.trim()), n = this.modelConfigService.getAvailableDefaultModels(), i = [
            ...YPe
        ];
        return e.every((r)=>{
            if (r === "default") return !0;
            const s = n.find((a)=>a.name === r), o = i.find((a)=>a.name === r);
            return (s?.supportsImages || o?.supportsImages) ?? !1;
        });
    }
    getServerModelName(t) {
        return this.modelConfigService.getServerModelName(t);
    }
    dispose() {
        this.cursorAuthenticationService.removeSubscriptionChangedListener(this.subscriptionChangedListener), super.dispose();
    }
}, mrs = Re([
    F(0, UI),
    F(1, dn),
    F(2, ss),
    F(3, ki),
    F(4, sa),
    F(5, lb),
    F(6, Cr),
    F(7, eg),
    F(8, Z_),
    F(9, UB),
    F(10, wh),
    F(11, BJ)
], mrs), bn(vR, mrs, 1), Ht(class extends sn {
    constructor(){
        super({
            id: uJn,
            title: {
                value: "Switch to model",
                original: "Switch to model"
            },
            f1: !1
        });
    }
    async run(t, e, n) {
        const i = t.get(eg);
        if (!n) {
            console.error("No specific model field provided");
            return;
        }
        const s = {
            ...i.getStoredModelConfig(n),
            modelName: e
        };
        i.setModelConfig(n, s);
    }
}), Ht(class extends sn {
    constructor(){
        super({
            id: "cursorai.action.switchToModelSlug",
            title: {
                value: "Switch to Model Slug",
                original: "Switch to Model Slug"
            },
            f1: !1
        });
    }
    async run(t, e) {
        const n = t.get(eg), i = t.get(no), r = t.get(y$), s = t.get(Id), o = t.get(sa), a = t.get(wh), l = t.get(Wr), c = t.get(ps), u = t.get(nr);
        if (c.isGlass) {
            await u.executeCommand(Lig, e);
            return;
        }
        if (e?.clientType === "glass" && !c.isGlass) {
            await u.executeCommand(QTi, e);
            return;
        }
        const d = Dig(e);
        if (!d) {
            Nig(a, e);
            return;
        }
        await zrl(d, n, i, r, s);
    }
}), Ht(class extends sn {
    constructor(){
        super({
            id: "cursorai.action.switchToDynamicModelSlug",
            title: {
                value: "Switch to Dynamic Model Slug",
                original: "Switch to Dynamic Model Slug"
            },
            f1: !1
        });
    }
    async run(t) {
        const e = t.get(eg), n = t.get(no), i = t.get(y$), r = t.get(Id), s = t.get(Cr), o = t.get(sa), a = t.get(wh), l = s.getDynamicConfigParam("switch_to_model_slug_config", "modelSlug", {
            disableExposureLog: !1
        }), c = s.getDynamicConfigParam("switch_to_model_slug_config", "modelIdWithParams", {
            disableExposureLog: !1
        }), u = Rig(c) ? c : void 0, d = Mig(u);
        if (!d) {
            a.warn("composer", "Skipping switchToDynamicModelSlug: no valid model config", {
                subkey: "switch_to_dynamic_model_slug_invalid_config",
                hasModelSlug: String(typeof l == "string" && l.length > 0),
                hasRawModelIdWithParams: String(c !== void 0),
                hasParsedModelIdWithParams: String(u !== void 0)
            });
            return;
        }
        await zrl(d, e, n, i, r);
    }
}), Ht(class extends sn {
    constructor(){
        super({
            id: "cursorai.action.createNewAgentWithImagePrompt",
            title: {
                value: "Generate an Image",
                original: "Generate an Image"
            },
            f1: !1
        });
    }
    async run(t) {
        const e = t.get(Yh), n = t.get(Bb), i = t.get(Fb), r = await e.createComposer({
            partialState: {
                unifiedMode: "agent",
                text: "Generate an image of ",
                richText: "Generate an image of "
            },
            openInNewTab: !0
        });
        if (!r) {
            console.error("[composer] Failed to create composer for image generation prompt");
            return;
        }
        const s = r.composerId;
        i.fireShouldForceText({
            composerId: s
        }), await n.showAndFocus(s);
    }
}), Ht(class extends sn {
    constructor(){
        super({
            id: "cursor.connectSlack",
            title: {
                value: "Connect Slack",
                original: "Connect Slack"
            },
            f1: !1
        });
    }
    async run(t) {
        const e = t.get(ss), n = t.get(kc), i = t.get(Ub), r = t.get(ki), s = t.get(wh), o = t.get(Wr);
        let a = null;
        try {
            a = await e.getSlackInstallUrl();
        } catch (l) {
            s.error("slack", "Failed to get Slack install URL", l instanceof Error ? l : void 0, {
                subkey: "connect_slack_get_url_failed"
            });
        }
        try {
            await arl({
                storageService: r,
                openerService: n,
                credsService: i
            }, a);
        } catch (l) {
            s.error("slack", "Failed to open Slack connection URL", l instanceof Error ? l : void 0, {
                subkey: "connect_slack_open_url_failed"
            }), o.error(`Failed to connect Slack: ${l instanceof Error ? l.message : String(l)}`);
        }
    }
});

}
