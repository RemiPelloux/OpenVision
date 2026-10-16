import { Bv, H$t, J8i, Q8i, Th, VFu, XFu, ZFu, jFu, lSt, rh, zYs } from "./De_3.js";
import { Se, bt, ve, we } from "./HVr.js";
import { C, ei, ie, pt } from "./actions_2.js";
import { R1, pw } from "./adminSettingsService.js";
import { L2, vq } from "./agentLayoutService.js";
import { EA, LJe } from "./aiserver_pb.js";
import { Za, na } from "./authenticationService.js";
import { KYs, YYs } from "./autoSmartModelMigration.js";
import { am, kc } from "./buildFlags.js";
import { j_e } from "./byokModelUtils.js";
import { Hko, c_h, g_h, htt, p_h, rjv, sjv, uvh, wvh } from "./cgh.js";
import { $n, vi } from "./commands.js";
import { Hh, Xy } from "./composer.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Zy, yC } from "./composerEventService.js";
import { Hv, rE } from "./composerViews.js";
import { So, umn } from "./constants_8.js";
import { PR, ZM } from "./cursorCredsService.js";
import { c8e } from "./customizeCommandRouting.js";
import { Hee, KU } from "./debugNamespaceService.js";
import { Vr, Yi } from "./environmentService.js";
import { Kr, qs } from "./experimentService.js";
import { Pn } from "./extensions.js";
import { t0e } from "./f0s.js";
import { KFn, W$ } from "./glassModeConstants.js";
import { mi } from "./index_188.js";
import { Ze, _t } from "./instantiation.js";
import { Rx, hC } from "./layoutService.js";
import { Bc, Zh } from "./layoutService_2.js";
import { W$t } from "./localProviderModelEnrichment.js";
import { V_e, ptt } from "./modelConfigService.js";
import { QS, i0 } from "./modelConfigServiceTypes.js";
import { di, ji } from "./notification.js";
import { eo, ko } from "./opener.js";
import { lr, mn, qe, qn, uu, vn } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { Vi, Vp, pSt } from "./reactiveStorageTypes_2.js";
import { dvh } from "./slackConnect.js";
import { Vn, yn } from "./storage_2.js";
import { jS } from "./store.js";
import { Xh, im } from "./structuredLog.js";
import { x } from "./tslib.es6.js";
import { TM, XT } from "./uiOverlayService.js";
import { iLe, rCt } from "./usageDataService.js";
import { Ku } from "./utilities_3.js";
var J3, f_h, Wko, v_h, __h, VXi, jXi;
export { J3, VXi, Wko, __h, f_h, jXi, v_h };
var __wakaru_G$_initialized = false;
export function G$() {
if (__wakaru_G$_initialized) return;
__wakaru_G$_initialized = true;
"use strict";
x(), So(), Se(), ei(), vi(), Pn(), Ze(), Rx(), ji(), Ha(), Vp(), Vn(), Za(), ko(), ZM(), dvh(), bt(), EA(), c8e(), R1(), qn(), jS(), mi(), ptt(), i0(), TM(), Ku(), Hee(), im(), nl(), rCt(), vq(), W$(), qs(), Vr(), Zh(), Xy(), rE(), yC(), j_e(), YYs(), am(), W$t(), J3 = vn("AISettingsService"), f_h = "glass.cursorai.action.switchToModelSlugInGlass", Wko = async (e, t, n, i, r)=>{
    t.setModelConfig("composer", e), r.isVisible("workbench.parts.auxiliarybar") || r.setPartHidden(!1, "workbench.parts.auxiliarybar");
    let s = n.selectedComposerId;
    if (s ? await i.openComposer({
        type: "local",
        id: s
    }) : (await i.createNewComposer(), s = n.selectedComposerId), s) {
        const o = await n.getComposerHandleById(s);
        o && t.setModelConfigForComposer(o, e);
    }
}, v_h = (e, t, n)=>t.includes(e) ? e : n?.get(e) ?? e, __h = (e)=>{
    const { modelConfigService: t, availableModels: n, catalogModels: i, specificModelField: r, legacySlugMap: s, structuredLogService: o, localProviderModelIds: a = [], isModelBlocked: c = ()=>!1, isAutoSmartCostMigrationEnabled: l = ()=>!1 } = e, u = t.getStoredModelConfig(r);
    if (u === null) return {
        modelName: "default",
        maxMode: !1
    };
    const h = u.modelName, p = zYs({
        modelConfig: u,
        catalogModels: i,
        availableModelIds: n,
        isModelBlocked: c,
        isMigrationEnabled: l
    });
    if (p !== u) return t.setModelConfig(r, ZFu({
        currentModelConfig: u,
        migratedModelConfig: p
    })), p;
    if (h === "default") return u;
    const g = h.split(",").map((b)=>b.trim()).filter((b)=>b.length > 0), f = g.map((b)=>v_h(b, n, s));
    if (!(f.length > 0 && f.every((b)=>n.includes(b)))) {
        if (n.length === 0 || r === "background-composer") return u;
        if (kc.localMode && r === "composer") {
            const N = t.getAvailableDefaultModels().filter((W)=>!lSt(W, c)), O = a.length > 0 ? H$t(N, a) : n.filter((W)=>!c(W)), F = Q8i(N, a), H = J8i(h, O, F), $ = g.every((W)=>W === "default" || jFu(W));
            if (H !== void 0 && $ && !c(H)) {
                const W = {
                    ...u,
                    modelName: H,
                    maxMode: u.maxMode ?? !1,
                    selectedModels: [
                        {
                            modelId: H,
                            parameters: u.selectedModels?.[0]?.parameters ?? []
                        }
                    ]
                };
                return t.setModelConfig(r, W), W;
            }
        }
        const b = f.filter((N)=>n.includes(N) && !c(N)), y = n.find((N)=>!c(N)), T = b.length > 0 ? b.join(",") : y ?? "default", E = b.length > 0 ? "partial_filter" : "complete_fallback", A = g.filter((N)=>n.includes(N)).length, R = f.filter((N)=>n.includes(N)).length, D = g.reduce((N, O, F)=>f[F] !== O ? N + 1 : N, 0);
        o.warn("composer", "Model reset by fixUnavailable", {
            subkey: "fix_unavailable_model_reset",
            surface: r,
            previousModel: h,
            newModel: T,
            availableModelCount: String(n.length),
            availableModels: n.join(","),
            fallbackMode: E,
            previousModelTokenCount: String(g.length),
            directlyAvailableCount: String(A),
            resolvedAvailableCount: String(R),
            legacySlugMapHits: String(D)
        });
        const P = {
            modelName: T,
            maxMode: !1
        };
        return t.setModelConfig(r, P), P;
    }
    if (f.some((b, y)=>b !== g[y])) {
        const b = {
            ...u,
            modelName: f.join(",")
        };
        return t.setModelConfig(r, b), b;
    }
    return u;
}, VXi = class extends we {
    constructor(e, t, n, i, r, s, o, a, c){
        super(), this.storageService = e, this.reactiveStorageService = t, this.cursorAuthenticationService = n, this.adminSettingsService = i, this.experimentService = r, this.modelConfigService = s, this.uiOverlayService = o, this.devConsoleService = a, this.structuredLogService = c, this.storageId = "aisettings.service", this._onDidChangeUseOpenAIKey = this._register(new ve), this.getLastSingleModelPreference = (l)=>this.getLastSingleModelPreferenceState()[l], this.setLastSingleModelPreference = (l, u)=>{
            const h = this.getLastSingleModelPreferenceState();
            if (!u || u === "") {
                h[l] !== void 0 && (delete h[l], this.lastSingleModelPreference.set(JSON.stringify(h), void 0));
                return;
            }
            h[l] !== u && (h[l] = u, this.lastSingleModelPreference.set(JSON.stringify(h), void 0));
        }, this.saveData = ()=>{}, this.loadData = ()=>{
            if (this.reactiveStorageService.applicationUserPersistentStorage.havePerformedSettingsServiceMigration !== !0) {
                this.reactiveStorageService.setApplicationUserPersistentStorage("havePerformedSettingsServiceMigration", !0);
                const l = this.storageService.get(this.storageId, -1);
                if (l) {
                    const u = JSON.parse(l);
                    u.useOpenAIKey !== void 0 && this.reactiveStorageService.setApplicationUserPersistentStorage("useOpenAIKey", u.useOpenAIKey), u.availableModels !== void 0 && this.reactiveStorageService.setApplicationUserPersistentStorage("availableAPIKeyModels", u.availableModels), u.noStorageMode !== void 0 && this.reactiveStorageService.setApplicationUserPersistentStorage("noStorageMode", u.noStorageMode || this.cursorAuthenticationService.membershipType() === Vi.ENTERPRISE && this.cursorAuthenticationService.shouldHaveGhostModeFromEnterprise().privacyModeForced);
                }
            }
        }, this.getUseOpenAIKey = ()=>this.reactiveStorageService.applicationUserPersistentStorage.useOpenAIKey ?? !1, this.enableModel = (l)=>{
            this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(l) && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter((u)=>u !== l)), this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(l) || this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", [
                ...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled ?? [],
                l
            ]), this._didChangeAvailableModels();
        }, this.addUserAddedModel = (l)=>{
            this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.includes(l) || (this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "userAddedModels", [
                ...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels ?? [],
                l
            ]), this._didChangeAvailableModels());
        }, this.removeUserAddedModel = (l)=>{
            !this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.includes(l) && this.isDefaultModel(l) || (this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "userAddedModels", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.filter((u)=>u !== l) ?? []), this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.filter((u)=>u !== l) ?? []), this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.filter((u)=>u !== l) ?? []), this._didChangeAvailableModels());
        }, this.isDefaultModel = (l)=>this.modelConfigService.getAvailableDefaultModels().filter((h)=>!h.isLongContextOnly).map((h)=>h.name).includes(l), this.isUserAddedModel = (l)=>this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels?.includes(l) ?? !1, this.removeModel = (l)=>{
            this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(l) && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled.filter((u)=>u !== l)), this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(l) && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled.filter((u)=>u !== l)), this._didChangeAvailableModels();
        }, this.disableModel = (l)=>{
            this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled?.includes(l) && this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideEnabled", this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled.filter((u)=>u !== l)), this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(l) || this.reactiveStorageService.setApplicationUserPersistentStorage("aiSettings", "modelOverrideDisabled", [
                ...this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled ?? [],
                l
            ]), this._didChangeAvailableModels();
        }, this.getAllPotentialModelsReactiveWithStatus = ()=>{
            const l = (h)=>({
                    name: h.name,
                    clientDisplayName: h.clientDisplayName ?? h.name,
                    serverModelName: h.serverModelName ?? h.name,
                    status: h.degradationStatus ?? LJe.UNSPECIFIED,
                    price: h.price,
                    tooltipData: h.tooltipData,
                    supportsMaxMode: h.supportsMaxMode,
                    tooltipDataForMaxMode: h.tooltipDataForMaxMode,
                    isRecommendedForBackgroundComposer: h.isRecommendedForBackgroundComposer,
                    supportsSandboxing: h.supportsSandboxing,
                    inputboxShortModelName: h.inputboxShortModelName,
                    backgroundComposerSortOrder: h.backgroundComposerSortOrder,
                    variants: h.variants,
                    namedModelSectionIndex: h.namedModelSectionIndex,
                    tagline: h.tagline,
                    visibleInRoutedModelView: h.visibleInRoutedModelView
                });
            return this.modelConfigService.getAvailableDefaultModels().filter((h)=>!h.isLongContextOnly && !this.getHardcodedLongContextOnlyModelNames().includes(h.name)).map((h)=>l(h));
        }, this.isModelDisabled = (l)=>this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled?.includes(l) === !0, this.useOpenAIKeyListeners = [], this.availableModelsListeners = [], this.popupListeners = [], this.closePopupListeners = [], this.addOpenAIKeyListener = (l)=>{
            this.useOpenAIKeyListeners.push(l);
        }, this.removeOpenAIKeyListener = (l)=>{
            this.useOpenAIKeyListeners = this.useOpenAIKeyListeners.filter((u)=>u !== l);
        }, this.addAvailableModelsListener = (l)=>{
            this.availableModelsListeners.push(l);
        }, this.removeAvailableModelsListener = (l)=>{
            this.availableModelsListeners = this.availableModelsListeners.filter((u)=>u !== l);
        }, this.onDidChangeUseOpenAIKey = this._onDidChangeUseOpenAIKey.event, this.addPopupListener = (l)=>{
            this.popupListeners.push(l);
        }, this.addClosePopupListener = (l)=>{
            this.closePopupListeners.push(l);
        }, this.removeClosePopupListener = (l)=>{
            this.closePopupListeners = this.closePopupListeners.filter((u)=>u !== l);
        }, this.settingsDismissedOpenAIKeyWarning = this._register(Th(this.storageService, "settingsDismissedOpenAIKeyWarning")), this.settingsDismissedClaudeKeyWarning = this._register(Th(this.storageService, "settingsDismissedClaudeKeyWarning")), this.settingsDismissedGoogleKeyWarning = this._register(Th(this.storageService, "settingsDismissedGoogleKeyWarning")), this.settingsDismissedBedrockKeyWarning = this._register(Th(this.storageService, "settingsDismissedBedrockKeyWarning")), this.dismissedGeneralCustomizeBanner = this._register(Th(this.storageService, "dismissedGeneralCustomizeBanner")), this.dismissedP2PReferralCta = this._register(Th(this.storageService, "dismissedP2PReferralCta")), this.lastSingleModelPreference = this._register(Th(this.storageService, "lastSingleModelPreference")), this.loadData(), this._register(this.storageService.onWillSaveState(()=>this.saveData())), this._register(this.devConsoleService.register("getApplicationProperty", (l)=>rh(this.storageService, l))), this._register(this.devConsoleService.register("setApplicationProperty", (l, u)=>{
            Bv(this.storageService, l, u);
        }));
    }
    getLastSingleModelPreferenceState() {
        const e = this.lastSingleModelPreference.get();
        if (!e) return {};
        try {
            return JSON.parse(e);
        } catch  {
            return {};
        }
    }
    getUseApiKeyForModel(e) {
        return Hko(e, this.reactiveStorageService.applicationUserPersistentStorage);
    }
    getHardcodedLongContextOnlyModelNames() {
        return V_e.filter((e)=>e.isLongContextOnly).map((e)=>e.name);
    }
    getAvailableModelsReactive(e) {
        return [
            ...this.getAvailableModelsReactiveWithStatus(e).map((t)=>t.name)
        ];
    }
    getAvailableModelsWithStatus(e) {
        return lr(()=>this.getAvailableModelsReactiveWithStatus(e));
    }
    getAllPotentialModelsWithStatus() {
        return lr(()=>this.getAllPotentialModelsReactiveWithStatus());
    }
    getAvailableModelsReactiveWithStatus(e) {
        let t = [];
        const n = (a)=>({
                name: a.name,
                clientDisplayName: a.clientDisplayName ?? a.name,
                serverModelName: a.serverModelName ?? a.name,
                status: a.degradationStatus ?? LJe.UNSPECIFIED,
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
            }), i = uu(this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideEnabled), r = [], s = this.modelConfigService.getAvailableDefaultModels();
        if (t = lr(()=>s.filter((a)=>{
                if (!a.defaultOn && !i?.includes(a.name)) return !1;
                const c = e?.specificModelField === "cmd-k";
                return c && a.supportsNonMaxMode === !1 || c && a.supportsThinking === !0 || c && a.supportsCmdK === !1 || !c && a.onlySupportsCmdK === !0 ? (r.push(a.name), !1) : !0;
            }).map((a)=>n(a))), i !== void 0) for (const a of i)r.includes(a) || t.some((c)=>c.name === a) || t.push({
            name: a,
            clientDisplayName: a,
            status: LJe.UNSPECIFIED
        });
        const o = uu(this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.modelOverrideDisabled);
        if (o !== void 0 && (t = t.filter((a)=>!o.includes(a.name))), t = t.filter((a)=>!this.getHardcodedLongContextOnlyModelNames().includes(a.name)), e?.specificModelField === "background-composer") {
            const a = kc.localMode ? uu(this.reactiveStorageService.applicationUserPersistentStorage.localProviderModelIds) ?? [] : [];
            for (const c of this.modelConfigService.getAvailableDefaultModels())c.isRecommendedForBackgroundComposer && (a.length > 0 && !VFu(c, a) || t.some((l)=>l.name === c.name) || t.push(n(c)));
        }
        if (e?.filterBlockedModels !== !1) {
            const a = (l)=>this.adminSettingsService.isModelBlocked(l), c = new Map(s.map((l)=>[
                    l.name,
                    l
                ]));
            t = t.filter((l)=>{
                const u = c.get(l.name);
                return u !== void 0 ? !lSt(u, a) : !a(l.name) && !a(l.clientDisplayName);
            });
        }
        return t;
    }
    _setUseOpenAIKey(e) {
        this.reactiveStorageService.setApplicationUserPersistentStorage("useOpenAIKey", e);
        for (let t of this.useOpenAIKeyListeners)t(e);
        this._onDidChangeUseOpenAIKey.fire(e);
    }
    _setAvailableModels(e) {
        this.reactiveStorageService.setApplicationUserPersistentStorage("availableAPIKeyModels", e), this._didChangeAvailableModels();
    }
    handleAvailableModelsChange() {
        this.modelConfigService.triggerParameterizedModelConfigMigration();
        const e = this.modelConfigService.getAvailableDefaultModels(), t = kc.localMode ? this.reactiveStorageService.applicationUserPersistentStorage.localProviderModelIds ?? [] : [], n = XFu(e, t), i = this.reactiveStorageService.applicationUserPersistentStorage.aiSettings.userAddedModels ?? [];
        for (const a of i)n.includes(a) || n.push(a);
        const r = new Map;
        for (const a of e)if (a.name !== "default" && a.legacySlugs) for (const c of a.legacySlugs)r.set(c, a.name);
        const s = ()=>this.experimentService.checkFeatureGate(KYs, {
                disableExposureLog: !1
            });
        this.migrateLoadedComposerModelConfigs(n, s);
        const o = (a)=>this.adminSettingsService.isModelBlocked(a);
        for (const a of pSt)__h({
            modelConfigService: this.modelConfigService,
            availableModels: n,
            catalogModels: e,
            specificModelField: a,
            legacySlugMap: r,
            structuredLogService: this.structuredLogService,
            localProviderModelIds: t,
            isModelBlocked: o,
            isAutoSmartCostMigrationEnabled: s
        });
        this.modelConfigService.healStaleParameters(), this._didChangeAvailableModels();
    }
    _didChangeAvailableModels() {
        const e = this.getAvailableModelsReactive();
        for (let t of this.availableModelsListeners)t(e);
    }
    migrateLoadedComposerModelConfigs(e, t) {}
}, VXi = ie([
    C(0, yn),
    C(1, Do),
    C(2, na),
    C(3, pw),
    C(4, Kr),
    C(5, QS),
    C(6, XT),
    C(7, KU),
    C(8, Xh)
], VXi), jXi = class extends VXi {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h){
        super(i, r, n, s, o, a, c, l, u), this.layoutService = e, this.instantiationService = t, this.usageDataService = h, this.openPopup = (p, g)=>{
            if (!(p !== void 0 && this.instantiationService.invokeFunction((v)=>wvh(v, p, {
                    idToScrollTo: g
                })))) {
                if (this.usageDataService.prefetch().catch((f)=>{
                    console.error("[AISettingsService] Failed to prefetch usage data:", f);
                }), p !== void 0 || g !== void 0) {
                    const f = this.uiOverlayService.settingsOpenData.value, v = {
                        ...f ?? {},
                        openTab: p ?? f?.openTab
                    };
                    g === void 0 ? (delete v.idToScrollTo, delete v.skipScrollToId, delete v.highlightStyle) : v.idToScrollTo = g, this.uiOverlayService.setSettingsOpenData(v);
                }
                for (let f of this.popupListeners)f(this.layoutService, this.instantiationService, p, g);
            }
        }, this.closePopup = ()=>{
            for (let p of this.closePopupListeners)p();
        }, this.subscriptionChangedListener = (p, g)=>{
            c_h({
                isLocalMode: kc.localMode
            }) && g === Vi.FREE && p !== Vi.FREE && this.setUseOpenAIKey(!1);
        }, this.cursorAuthenticationService.addSubscriptionChangedListener(this.subscriptionChangedListener);
    }
    migrateLoadedComposerModelConfigs(e, t) {
        const n = this.instantiationService.invokeFunction((s)=>s.get(Zs)), i = lr(()=>n.getLoadedComposers()), r = this.modelConfigService.getAvailableDefaultModels();
        if (r.length !== 0) for (const s of i){
            const o = n.getHandleIfLoaded(s);
            if (!o) continue;
            const a = n.getComposerData(o);
            if (!a?.modelConfig) continue;
            const c = a.modelConfig, l = this.modelConfigService.fixupModelConfigForCurrentFlag(c);
            l !== c && c.modelName && (!c.selectedModels || c.selectedModels.length === 0) && this.structuredLogService.info("composer", "Per-composer migration: forward-migrating modelName \u2192 selectedModels", {
                subkey: "composer_model_config_forward_migration",
                composerId: s,
                sourceModelName: c.modelName,
                resolvedSelectedModelIds: l.selectedModels?.map((v)=>v.modelId).join(",") ?? ""
            });
            const u = zYs({
                modelConfig: l,
                catalogModels: r,
                availableModelIds: e,
                isModelBlocked: (v)=>this.adminSettingsService.isModelBlocked(v),
                isMigrationEnabled: t
            });
            u !== l && this.structuredLogService.info("composer", "Migrated classic Auto composer to Auto Smart Cost", {
                subkey: "composer_model_config_auto_smart_cost_migration",
                composerId: s
            });
            const h = u.selectedModels;
            let p = !1;
            const g = h?.map((v)=>{
                const b = r.find((E)=>E.name === v.modelId);
                if (!b || b.parameterDefinitions.length === 0) return v;
                const y = v.parameters ?? [], T = t0e(b, y, u.maxMode);
                return htt(T, y) ? v : (p = !0, this.structuredLogService.info("composer", "Healed stale per-composer parameters", {
                    subkey: "heal_stale_composer_params",
                    composerId: s,
                    modelId: v.modelId,
                    beforeCount: String(y.length),
                    afterCount: String(T.length)
                }), {
                    ...v,
                    parameters: T
                });
            }), f = p ? {
                ...u,
                selectedModels: g
            } : u;
            f !== c && this.modelConfigService.setModelConfigForComposer(o, ZFu({
                currentModelConfig: c,
                migratedModelConfig: f
            }));
        }
    }
    getModelConfig(e) {
        return this.modelConfigService.getModelConfig(e);
    }
    async getApiKey() {
        return await this.cursorAuthenticationService.openAIKey();
    }
    async refreshAPIKeyModels() {
        try {
            if (!this.getUseOpenAIKey()) return;
            const e = await this.cursorAuthenticationService.openAIKey();
            if (!e) return;
            const { models: t } = await this.getModels(e);
            this._setAvailableModels(t);
        } catch (e) {
            console.error("Error refreshing API key models:", e);
        }
    }
    async setUseOpenAIKey(e) {
        if (e === !1) return this._setUseOpenAIKey(!1), this._didChangeAvailableModels(), !1;
        {
            this._setUseOpenAIKey(!0);
            const t = await this.cursorAuthenticationService.openAIKey();
            if (t) {
                const { models: n } = await this.getModels(t);
                return this._setAvailableModels(n), !0;
            } else return this._setUseOpenAIKey(!1), this._didChangeAvailableModels(), !1;
        }
    }
    async setOpenAIKey(e) {
        const t = await this.tryChallenge(e);
        if (t !== !0) return t;
        const { models: n } = await this.getModels(e);
        return this._setAvailableModels(n), this._setUseOpenAIKey(!0), this.cursorAuthenticationService.storeOpenAIKey(e), !0;
    }
    async getModels(e) {
        return {
            models: []
        };
    }
    getProviderFromUrl(e) {
        try {
            const n = new URL(e).hostname.toLowerCase();
            return n === "api.openai.com" || n.endsWith(".api.openai.com") ? "openai" : n === "api.x.ai" || n.endsWith(".api.x.ai") ? "xai" : "unknown";
        } catch  {
            return "unknown";
        }
    }
    getModelForChallenge() {
        const e = this.reactiveStorageService.applicationUserPersistentStorage.openAIBaseUrl ?? "https://api.openai.com/v1", t = this.getProviderFromUrl(e), n = this.getAvailableModelsReactive().filter((r)=>r !== "default"), i = {
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
        if (i[t]) return i[t][0];
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
    async tryChallenge(e) {
        const t = this.reactiveStorageService.applicationUserPersistentStorage.openAIBaseUrl ?? "https://api.openai.com/v1";
        try {
            const n = await fetch(`${t}/chat/completions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${e}`
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
    doesModelSupportAgent(e) {
        if (e === "default") return !0;
        const t = e.toLowerCase().includes("claude-3"), n = e.toLowerCase().includes("gpt-4o") && !e.toLowerCase().includes("mini"), i = e.toLowerCase().includes("o3-mini"), r = e.toLowerCase().includes("grok-3");
        if (t || n || i || r) return !0;
        const s = this.modelConfigService.getAvailableDefaultModels(), o = [
            ...V_e
        ], a = s.find((l)=>l.name === e), c = o.find((l)=>l.name === e);
        return (a?.supportsAgent || c?.supportsAgent) ?? !1;
    }
    doesModelSupportImages(e) {
        const t = e.split(",").map((r)=>r.trim()), n = this.modelConfigService.getAvailableDefaultModels(), i = [
            ...V_e
        ];
        return t.every((r)=>{
            if (r === "default") return !0;
            const s = n.find((a)=>a.name === r), o = i.find((a)=>a.name === r);
            return (s?.supportsImages || o?.supportsImages) ?? !1;
        });
    }
    getServerModelName(e) {
        return this.modelConfigService.getServerModelName(e);
    }
    dispose() {
        this.cursorAuthenticationService.removeSubscriptionChangedListener(this.subscriptionChangedListener), super.dispose();
    }
}, jXi = ie([
    C(0, hC),
    C(1, _t),
    C(2, na),
    C(3, yn),
    C(4, Do),
    C(5, pw),
    C(6, Kr),
    C(7, QS),
    C(8, XT),
    C(9, KU),
    C(10, Xh),
    C(11, iLe)
], jXi), mn(J3, jXi, 1), qe(class extends pt {
    constructor(){
        super({
            id: umn,
            title: {
                value: "Switch to model",
                original: "Switch to model"
            },
            f1: !1
        });
    }
    async run(e, t, n) {
        const i = e.get(QS);
        if (!n) {
            console.error("No specific model field provided");
            return;
        }
        const s = {
            ...i.getStoredModelConfig(n),
            modelName: t
        };
        i.setModelConfig(n, s);
    }
}), qe(class extends pt {
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
    async run(e, t) {
        const n = e.get(QS), i = e.get(Zs), r = e.get(L2), s = e.get(Bc), o = e.get(Do), a = e.get(Xh), c = e.get(di), l = e.get(Yi), u = e.get($n);
        if (l.isGlass) {
            await u.executeCommand(f_h, t);
            return;
        }
        if (t?.clientType === "glass" && !l.isGlass) {
            await u.executeCommand(KFn, t);
            return;
        }
        const h = rjv(t);
        if (!h) {
            sjv(a, t);
            return;
        }
        await Wko(h, n, i, r, s);
    }
}), qe(class extends pt {
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
    async run(e) {
        const t = e.get(QS), n = e.get(Zs), i = e.get(L2), r = e.get(Bc), s = e.get(Kr), o = e.get(Do), a = e.get(Xh), c = s.getDynamicConfigParam("switch_to_model_slug_config", "modelSlug", {
            disableExposureLog: !1
        }), l = s.getDynamicConfigParam("switch_to_model_slug_config", "modelIdWithParams", {
            disableExposureLog: !1
        }), u = p_h(l) ? l : void 0, h = g_h(u);
        if (!h) {
            a.warn("composer", "Skipping switchToDynamicModelSlug: no valid model config", {
                subkey: "switch_to_dynamic_model_slug_invalid_config",
                hasModelSlug: String(typeof c == "string" && c.length > 0),
                hasRawModelIdWithParams: String(l !== void 0),
                hasParsedModelIdWithParams: String(u !== void 0)
            });
            return;
        }
        await Wko(h, t, n, i, r);
    }
}), qe(class extends pt {
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
    async run(e) {
        const t = e.get(Hh), n = e.get(Hv), i = e.get(Zy), r = await t.createComposer({
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
}), qe(class extends pt {
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
    async run(e) {
        const t = e.get(na), n = e.get(eo), i = e.get(PR), r = e.get(yn), s = e.get(Xh), o = e.get(di);
        let a = null;
        try {
            a = await t.getSlackInstallUrl();
        } catch (c) {
            s.error("slack", "Failed to get Slack install URL", c instanceof Error ? c : void 0, {
                subkey: "connect_slack_get_url_failed"
            });
        }
        try {
            await uvh({
                storageService: r,
                openerService: n,
                credsService: i
            }, a);
        } catch (c) {
            s.error("slack", "Failed to open Slack connection URL", c instanceof Error ? c : void 0, {
                subkey: "connect_slack_open_url_failed"
            }), o.error(`Failed to connect Slack: ${c instanceof Error ? c.message : String(c)}`);
        }
    }
});

}
