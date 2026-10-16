import { $Ov, A5n, BMs, E40, FMs, FOv, HOv, ILv, Kic, LLv, MLv, NLv, OLv, Qic, R5n, S40, T40, UMs, Vic, Yic, Zic, b40, erc, g40, h40, i80, k40, m2t, m40, p2t, p40, r80, sdt, t4i, trc, v40, w40, x5n, zic } from "./BPv.js";
import { Di, Ec, Gt, Qe, Vn, _r, bM, st, tt, xa } from "./Iwo.js";
import { bn } from "./SZu.js";
import { QAn, ihl } from "./Ycg.js";
import { Qr, Ss } from "./aiMiscServices.js";
import { qn } from "./async.js";
import { w6d, xtt } from "./baseColors.js";
import { _b, ls } from "./color.js";
import { Ap } from "./colorRegistry.js";
import { GTe, MNi } from "./colorThemeData.js";
import { l4t } from "./configuration.js";
import { SJn, pa, spn } from "./constants_8.js";
import { $5n, OOv, RJt, g4i, j5n } from "./cursorDefaultColorSchemeStorageKeys.js";
import { Hn } from "./dom_2.js";
import { Wbt, ew, jAe } from "./editorColors.js";
import { EX, vle } from "./environmentService_3.js";
import { Cr, _s } from "./experimentService.js";
import { MA, aU, gG } from "./extensionManagement_2.js";
import { CVe, oIt } from "./extensionResourceLoader.js";
import { Rn } from "./extensions.js";
import { AJt, m4i } from "./extensionsScannerService.js";
import { AL, _N } from "./glass-configuration-service.js";
import { EJt, FLv } from "./glass-ide-theme-sync.js";
import { Zu, eu } from "./glass-log-service.js";
import { Nu, xc } from "./glass-storage-service.js";
import { Cee, E5n, OMs, aZ, e4i } from "./glass-theme-constants.js";
import { Rce, jOv } from "./glass-theme-service.contract.js";
import { J6i, Ny, SLv, kLv, qic, yLv } from "./glass-theme-service.types.js";
import { n4i, u8e } from "./glass-theme-utils.js";
import { LOv, NOv, XB0 } from "./glassThemePreferenceDefaults.js";
import { jws, xBl } from "./hostColorSchemeService.js";
import { Mt } from "./index_197.js";
import { $qt, LJa } from "./index_34.js";
import { JSp, L2e, e1p } from "./ipa.js";
import { GUo, KUo, VUo, WUo, YUo, qUo, z4d, zUo } from "./menuColors.js";
import { B9t, U9t, j9t, lri, tHe } from "./miscColors.js";
import { Eo, Fi } from "./platform_2.js";
import { Lr, Os } from "./resources.js";
import { LMa, Qne } from "./shared_3.js";
import { Mrc, oDs } from "./splash.js";
import { Wg, io } from "./storage_2.js";
import { LI, NI } from "./theme.js";
import { Dl, qwr } from "./themeService.js";
import { BOv } from "./themeSetupContract.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { F0, Lw } from "./userDataProfile_2.js";
import { $t, Bs } from "./window.js";
import { IBl, Uws, bUf } from "./windowThemePreferenceDefaults.js";
import { R6, T$, _h, lI, nTe, sxi } from "./workbenchThemeService.js";
import { Mgn, Rwr, li } from "./ze.js";
var f4i, Drc, Nrc, Lrc, Orc, Frc, Brc, Urc, jrc, $rc, Hrc, WOv, GOv, Wrc, Grc, aDs, qrc, zrc, Vrc, Krc, Yrc, Xrc, Zrc, Qrc, Jrc, lDs, esc, qOv, cDs, zOv, VOv, KOv, v2t;
export { $rc, Brc, Drc, Frc, GOv, Grc, Hrc, Jrc, KOv, Krc, Lrc, Nrc, Orc, Qrc, Urc, VOv, Vrc, WOv, Wrc, Xrc, Yrc, Zrc, aDs, cDs, esc, f4i, jrc, lDs, qOv, qrc, v2t, zOv, zrc };
var __wakaru_ZDe_initialized = false;
export function ZDe() {
if (__wakaru_ZDe_initialized) return;
__wakaru_ZDe_initialized = true;
"use strict";
E(), Mt(), LJa(), Hn(), Bs(), qn(), _b(), pa(), Gt(), Qe(), Di(), Lr(), m4i(), oIt(), Rn(), Eo(), Ap(), xtt(), Wbt(), z4d(), lri(), XB0(), LI(), Dl(), IBl(), OOv(), BOv(), Mrc(), Ss(), vle(), _s(), MA(), MNi(), xBl(), R6(), F0(), AL(), FLv(), e4i(), J6i(), n4i(), xc(), e4i(), jOv(), Zu(), jOv(), J6i(), f4i = Ny.Dark, Drc = "glass-cursor-theme-colors", Nrc = "glass-cursor-theme-variables", Lrc = "glass-floating-widget-colors", Orc = "glass-editor-registry-colors", Frc = "glass-editor-theming-rules", Brc = "cursor-glass-os-vibrancy-on", Urc = "cursor-glass-os-vibrancy-off", jrc = "cursor-glass-windows-mica", $rc = "cursor-glass-reduce-transparency", Hrc = "cursor-glass-font-smoothing-antialiased", WOv = [
    Brc,
    Urc,
    jrc,
    $rc,
    Hrc
], GOv = new Set([
    lI.COLOR_THEME_DARK_OLD,
    lI.COLOR_THEME_LIGHT_OLD,
    "Default Dark Modern",
    "Default Light Modern",
    lI.COLOR_THEME_HC_DARK,
    lI.COLOR_THEME_HC_LIGHT,
    "Visual Studio Dark",
    "Visual Studio Light"
]), Wrc = Fi.as(qwr.ThemingContribution), Grc = "glass.theme.settingsId", aDs = {
    light: "glass.theme.lightSettingsId",
    dark: "glass.theme.darkSettingsId",
    lightHighContrast: "glass.theme.lightHighContrastSettingsId",
    darkHighContrast: "glass.theme.darkHighContrastSettingsId"
}, qrc = "glass.theme.highContrastSettingsId", zrc = "glass.theme.detectColorScheme", Vrc = "glass.theme.detectHighContrast", Krc = "glass.theme.highContrastPinRepairRan", Yrc = "glass.theme.lightHighContrastSlotUpgradeRan", Xrc = "glass.theme.renderRuleMigrationRan", Zrc = "glass.theme.customTintHue", Qrc = "glass.theme.customTintIntensity", Jrc = "glass-custom-tint-tokens", lDs = "glass.theme.customThemesV1", esc = 30, qOv = [
    {
        token: "sidebar"
    },
    {
        token: "chrome",
        chromaScale: .5
    },
    {
        token: "editor",
        chromaScale: .5
    },
    {
        token: "accent",
        hueShift: !0
    },
    {
        token: "focus",
        hueShift: !0
    }
], cDs = {
    light: "#FCFCFC",
    dark: "#181818"
}, zOv = [
    _h.COLOR_THEME,
    _h.PREFERRED_DARK_THEME,
    _h.PREFERRED_LIGHT_THEME,
    _h.PREFERRED_HC_DARK_THEME,
    _h.PREFERRED_HC_LIGHT_THEME,
    _h.DETECT_COLOR_SCHEME,
    _h.DETECT_HC
], VOv = [
    ...new Set(E5n.flatMap((t)=>[
            t.bodyClass,
            t.vsCompat
        ]))
], KOv = [
    w6d,
    qUo,
    WUo,
    GUo,
    VUo,
    KUo,
    zUo,
    YUo,
    tHe,
    j9t,
    B9t,
    U9t,
    jAe
], v2t = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p){
        super(), this._extensionsScannerService = s, this._extensionManagementService = o, this._extensionEnablementService = a, this._userDataProfileService = l, this._logService = u, this._extensionResourceLoaderService = d, this._experimentService = h, this._analyticsService = p, this._onDidChangeThemeType = this._register(new tt), this.onDidChangeThemeType = this._onDidChangeThemeType.event, this._onDidChangeColorBucket = this._register(new tt), this.onDidChangeColorBucket = this._onDidChangeColorBucket.event, this._resolvedCustomThemeCache = new Map, this._cssCache = new Map, this._colorMapCache = new Map, this._currentSettingsId = "", this._styleEl = null, this._themeVariablesStyleEl = null, this._floatingWidgetStyleEl = null, this._registryStyleEl = null, this._themingRulesStyleEl = null, this._ideStateInitialized = !1, this._ideReconcileGeneration = 0, this._ideBucketCache = new Map, this._intentQueue = Promise.resolve(), this._isReassertingWorkbenchTheme = !1, this._themeApplyGeneration = 0, this._onDidChangeGlassThemePreference = this._register(new tt), this.onDidChangeGlassThemePreference = this._onDidChangeGlassThemePreference.event, this._onDidChangeActiveTheme = this._register(new tt), this.onDidChangeActiveTheme = this._onDidChangeActiveTheme.event, this._onDidChangeCustomThemes = this._register(new tt), this.onDidChangeCustomThemes = this._onDidChangeCustomThemes.event, this._tintPersistTimer = this._register(new Vn), this._tintStyleEl = null, this._cachedAllThemes = null, this._cachedThemeSummariesBySettingsId = null, this._configurationService = t, this._storageService = e, this._splashStorageService = n, this._hostColorSchemeService = i, this._workbenchThemeService = r, this._environmentService = c, this._osReducesTransparency = $t.matchMedia("(prefers-reduced-transparency: reduce)").matches, this._customThemes = this._loadCustomThemesFromStorage();
        for (const f of E5n)this._ensureCacheForDef(f);
        this._upgradeLightHighContrastSlotOnce(), this._preference = this._loadPreference(), this._preference.syncWithIde ? (this._reconcileFromIde("startup"), this._repairHighContrastPin()) : this._applyFromOwnPreference("startup"), this._migrateToRenderRuleOnce(), this._register(i.onDidChangeColorScheme(()=>this._handleHostColorSchemeChange())), e.onDidChangeValue(io.APPLICATION, void 0, this._store)(this._handleExternalPreferenceChange, this, this._store), this._register(t.onDidChangeConfiguration((f)=>{
            this._handleIdeThemeConfigurationChange(f);
        })), this._register(Wrc.onThemingParticipantAdded(()=>{
            this._currentSettingsId && this._stampEditorDynamicCss();
        })), this._register(r.onDidColorThemeChange((f)=>{
            if (!this._currentSettingsId || this._pendingThemeSettingsId !== void 0) return;
            const _ = this._findThemeDef(this._currentSettingsId);
            if (f.settingsId !== _.workbenchBaseSettingsId) {
                this._reassertWorkbenchTheme();
                return;
            }
            this._saveGlassSplash(_), this._stampEditorDynamicCss();
        })), this._register(this._extensionsScannerService.onDidChangeCache(()=>{
            this._invalidatePassiveWorkbenchThemes();
        })), this._register(this._extensionManagementService.onDidInstallExtensions(()=>{
            this._invalidatePassiveWorkbenchThemes();
        })), this._register(this._extensionManagementService.onDidUninstallExtension(()=>{
            this._invalidatePassiveWorkbenchThemes();
        })), this._register(this._extensionManagementService.onDidChangeProfile(()=>{
            this._invalidatePassiveWorkbenchThemes();
        })), this._register(this._extensionEnablementService.onEnablementChanged(()=>{
            this._invalidatePassiveWorkbenchThemes();
        })), this._register(t.onDidChangeConfiguration((f)=>{
            (f.affectsConfiguration(SJn) || f.affectsConfiguration(spn)) && (this.refreshBodyStyles(), this._onDidChangeGlassThemePreference.fire());
        }));
        const g = $t.matchMedia("(prefers-reduced-transparency: reduce)");
        this._register(li(g, "change", ()=>{
            this._osReducesTransparency = g.matches, this.refreshBodyStyles(), this._onDidChangeGlassThemePreference.fire();
        })), this._currentSettingsId && this._stampEditorDynamicCss(), this._register(this._experimentService.getFeatureGateProperty("cursor_new_colors").event(()=>this._restampActiveCursorTokenCss())), this._register(this._experimentService.getFeatureGateProperty(sxi).event(()=>this._onGatedThemesChanged()));
    }
    _onGatedThemesChanged() {
        this._cachedAllThemes = null, this._cachedThemeSummariesBySettingsId = null, this._onDidChangeCustomThemes.fire(), this._customThemeSupportEnabled() && (this._preference = this._loadSharedPreference(), this._migrateToRenderRuleOnce()), this._preference.syncWithIde ? this._reconcileFromIde("configuration") : this._applyFromOwnPreference("update");
    }
    _handleExternalPreferenceChange({ key: t, external: e }) {
        const n = t.startsWith("glass.theme.") || t === RJt;
        !e || !n || !this._customThemeSupportEnabled() || (t === lDs && (this._customThemes = this._loadCustomThemesFromStorage(), this._onCustomThemesMutated(this._currentSettingsId, !1)), this._preference = this._loadSharedPreference(), this._preference.syncWithIde ? this._reconcileFromIde("configuration") : (this._applyThemeWhenReady(this._resolveOwnThemeDef()), this._onDidChangeGlassThemePreference.fire()));
    }
    get themeType() {
        return this._themeType;
    }
    get colorBucket() {
        return this._colorBucket;
    }
    applyThemeBySettingsId(t) {
        const e = this._findThemeDef(t);
        if (!this._preference.syncWithIde) {
            this._preference = {
                ...this._preference,
                settingsId: e.settingsId,
                detectColorScheme: !1
            }, this._savePreference(), this._applyThemeWhenReady(this._customThemeSupportEnabled() ? this._resolveOwnThemeDef() : e);
            return;
        }
        if (this._preference = {
            ...this._preference,
            settingsId: e.settingsId
        }, this._savePreference(), this._rendersByRule()) {
            const n = this._linkedEverydayTarget();
            n.mode === "follow-system" && n.authority === "policy" ? this.setThemeSettingsIdForBucket(n.expectedBucket, e.settingsId) : this._writeSyncedPick("explicit");
            return;
        }
        this._enqueueIntent({
            kind: "set-explicit-theme",
            desiredBucket: e.bucket,
            sharedIdeSettingsId: this._sharedIdeSettingsIdFor(e)
        });
    }
    _sharedIdeSettingsIdFor(t) {
        if (t.builtInId !== null) return t.settingsId;
        const e = Yic(t.settingsId);
        return e === null ? void 0 : this._customThemes.get(e)?.vscodeThemeSettingsId;
    }
    _ideThemeFor(t) {
        return this._sharedIdeSettingsIdFor(t) ?? p2t(t.bucket).settingsId;
    }
    setThemeSettingsIdForBucket(t, e) {
        const n = this._findThemeDef(e).settingsId;
        if (!(this._preference.bucketSettingsIds[t] === n && !this._rendersByRule())) {
            if (this._preference = {
                ...this._preference,
                bucketSettingsIds: {
                    ...this._preference.bucketSettingsIds,
                    [t]: n
                }
            }, this._savePreference(), !this._preference.syncWithIde) {
                t === this._ownRenderedBucket() && this._applyThemeWhenReady(this._resolveOwnThemeDef());
                return;
            }
            if (this._rendersByRule()) {
                this._writeSyncedPick(t);
                return;
            }
            this._reconcileFromIde("glass-intent");
        }
    }
    get highContrastThemeSettingsId() {
        return this._ruleRows?.highContrast ?? this._preference.highContrastSettingsId ?? this._preference.bucketSettingsIds[this._hostColorSchemeService.dark ? "darkHighContrast" : "lightHighContrast"];
    }
    setHighContrastThemeSettingsId(t) {
        const e = this._findThemeDef(t).settingsId;
        if (!(this._preference.highContrastSettingsId === e && !this._rendersByRule())) {
            if (this._preference = {
                ...this._preference,
                highContrastSettingsId: e
            }, this._savePreference(), !this._preference.syncWithIde) {
                sdt(this._ownRenderedBucket()) && this._applyThemeWhenReady(this._resolveOwnThemeDef());
                return;
            }
            if (this._rendersByRule()) {
                this._writeSyncedPick("highContrast");
                return;
            }
            this._reconcileFromIde("glass-intent");
        }
    }
    _writeSyncedPick(t) {
        const e = this._rowDef(t, this._ideSnapshot.osDark);
        (t === OLv(this._ideTarget, this._usesSingleHighContrastRow(this._ideSnapshot)) || t === "explicit" && this._ideTarget.mode === "follow-system") && this._applyThemeWhenReady(e), this._enqueueIntent({
            kind: "set-row-theme",
            row: t,
            ideTheme: this._ideThemeFor(e)
        });
    }
    _singleHighContrastDef(t) {
        const e = this._preference.highContrastSettingsId;
        if (!(e === void 0 || t || !this._customThemeSupportEnabled())) return this._findThemeDefWithFallback(e, Ny.HighContrast);
    }
    get detectHighContrast() {
        return this._preference.syncWithIde && this._ideStateInitialized ? this._ideSnapshot.autoDetectHighContrast.effectiveValue : this._preference.detectHighContrast;
    }
    get detectHighContrastManaged() {
        return this._preference.syncWithIde && this._ideStateInitialized && this._ideSnapshot.autoDetectHighContrast.policyValue !== void 0;
    }
    get explicitSlotThemeSettingsId() {
        return !this._customThemeSupportEnabled() || this.activeHighContrastSlot === void 0 ? this._currentSettingsId : this._everydayDef().settingsId;
    }
    _everydayDef() {
        if (!this._preference.syncWithIde || !this._ideStateInitialized) return this._preference.detectColorScheme ? this._ownEverydayDef() : this._findThemeDef(this._preference.settingsId);
        const t = this._linkedEverydayTarget();
        return this._renderedGlassDefFor(t, trc({
            target: t,
            bucketOf: (e)=>this._bucketOfIdeSettingsId(e)
        }));
    }
    _linkedEverydayTarget() {
        return R5n(MLv(this._ideSnapshot));
    }
    get activeHighContrastSlot() {
        const t = erc({
            osDark: this._hostColorSchemeService.dark,
            osHighContrast: this._hostColorSchemeService.highContrast,
            followHighContrast: this.detectHighContrast
        });
        return sdt(t) ? t : void 0;
    }
    setDetectHighContrast(t) {
        if (!this._preference.syncWithIde) {
            this._preference = {
                ...this._preference,
                detectHighContrast: t
            }, this._savePreference(), this._applyThemeWhenReady(this._resolveOwnThemeDef());
            return;
        }
        this._enqueueIntent({
            kind: "set-follow-high-contrast",
            enabled: t
        });
    }
    setDetectColorScheme(t) {
        if (!this._preference.syncWithIde) {
            const i = !t && this._preference.detectColorScheme && this._customThemeSupportEnabled();
            this._preference = {
                ...this._preference,
                detectColorScheme: t,
                settingsId: i ? this._everydayDef().settingsId : this._preference.settingsId
            }, this._savePreference(), this._applyThemeWhenReady(this._resolveOwnThemeDef());
            return;
        }
        const e = this._customThemeSupportEnabled(), n = e ? this._linkedEverydayTarget().ideSettingsId : this._ideTarget.ideSettingsId;
        t || (this._preference = {
            ...this._preference,
            settingsId: e ? this._everydayDef().settingsId : this._currentSettingsId
        }, this._savePreference()), this._enqueueIntent({
            kind: "set-follow-system",
            enabled: t,
            pinIdeSettingsId: n
        });
    }
    get syncWithIde() {
        return this._preference.syncWithIde;
    }
    setSyncWithIde(t) {
        if (!this._rendersByRule()) return this._applySyncWithIde(t);
        this._enqueue(()=>this._applySyncWithIde(t));
    }
    _applySyncWithIde(t) {
        if (t !== this._preference.syncWithIde) {
            if (!t) {
                const e = this._customThemeSupportEnabled(), n = this._preference.highContrastSettingsId;
                this._preference = {
                    ...this._preference,
                    syncWithIde: !1,
                    settingsId: e ? this._everydayDef().settingsId : this._currentSettingsId || this._preference.settingsId,
                    detectColorScheme: (e ? this._linkedEverydayTarget() : this._ideTarget).mode !== "pinned",
                    detectHighContrast: this.detectHighContrast,
                    bucketSettingsIds: this._ruleRows?.buckets ?? this._preference.bucketSettingsIds,
                    highContrastSettingsId: n && (this._ruleRows?.highContrast ?? n)
                }, this._savePreference(), this._applyFromOwnPreference("update");
                return;
            }
            this._preference = {
                ...this._preference,
                syncWithIde: !0
            }, this._savePreference(), this._reconcileFromIde("glass-intent"), this._repairHighContrastPin();
        }
    }
    _unlinkForPreferredSlotDivergence(t) {
        return this._storageService.getBoolean(g4i, io.APPLICATION, !1) || (this._storageService.store(g4i, !0, io.APPLICATION, Wg.MACHINE), !this._preference.syncWithIde) ? !1 : (this._preference = {
            ...this._preference,
            syncWithIde: !1,
            settingsId: this._preference.settingsId,
            detectColorScheme: t.mode !== "pinned",
            detectHighContrast: this.detectHighContrast
        }, this._savePreference(), this._applyFromOwnPreference(this._ideStateInitialized ? "update" : "startup"), !0);
    }
    _repairHighContrastPin() {
        if (this._highContrastPinRepairInFlight !== void 0 || this._storageService.getBoolean(Krc, io.APPLICATION, !1)) return;
        const t = ()=>{
            this._storageService.store(Krc, !0, io.APPLICATION, Wg.MACHINE);
        }, e = this._captureIdeSnapshot(), n = this._findThemeDef(this._preference.settingsId), i = T40({
            target: R5n(e),
            snapshot: e,
            glassPinBucket: n.bucket,
            glassPinIdeSettingsId: this._sharedIdeSettingsIdFor(n),
            bucketOf: (r)=>this._bucketOfIdeSettingsId(r)
        });
        if (i === null) {
            t();
            return;
        }
        this._highContrastPinRepairInFlight = this._configurationService.updateValue(i.key, i.value, l4t.USER).then(()=>{
            t(), this._reconcileFromIde("glass-intent");
        }).catch((r)=>{
            this._logService.warn("[GlassThemeService] Failed to repair the high-contrast pin", r);
        }).finally(()=>{
            this._highContrastPinRepairInFlight = void 0;
        });
    }
    _enqueueIntent(t) {
        this._enqueue(()=>this._applyIntent(t));
    }
    _enqueue(t) {
        this._intentQueue = this._intentQueue.then(t).catch((e)=>{
            this._logService.warn("[GlassThemeService] Failed to apply glass theme intent", e), this._rendersByRule() && (this._currentSettingsId = "", this._reconcileFromIde("glass-intent"));
        });
    }
    async _applyIntent(t) {
        const e = this._captureIdeSnapshot(), n = NLv({
            intent: t,
            target: R5n(e),
            snapshot: e,
            bucketOf: (r)=>this._bucketOfIdeSettingsId(r),
            explicitPicksAreEveryday: this._customThemeSupportEnabled()
        }), i = t.kind === "set-follow-system" && e.autoDetectColorScheme.policyValue !== void 0 ? _h.DETECT_COLOR_SCHEME : t.kind === "set-follow-high-contrast" && e.autoDetectHighContrast.policyValue !== void 0 ? _h.DETECT_HC : void 0;
        if (n.length === 0 && i !== void 0) {
            this._logService.info(`[GlassThemeService] ${i} is policy-managed; ignoring the change`), this._onDidChangeGlassThemePreference.fire();
            return;
        }
        for (const r of n)await this._configurationService.updateValue(r.key, r.value, l4t.USER);
        this._reconcileFromIde("glass-intent");
    }
    get preferenceSettingsId() {
        return this._preference.settingsId;
    }
    get bucketThemeSettingsIds() {
        return this._ruleRows?.buckets ?? this._preference.bucketSettingsIds;
    }
    get activeThemeSettingsId() {
        return this._currentSettingsId;
    }
    get detectColorScheme() {
        return !this._preference.syncWithIde || !this._ideStateInitialized ? this._preference.detectColorScheme : this._ideTarget.authority === "seed-pending" ? this._ideTarget.mode !== "pinned" : this._ideSnapshot.autoDetectColorScheme.effectiveValue;
    }
    get detectColorSchemeManaged() {
        return this._preference.syncWithIde && this._ideStateInitialized && this._ideSnapshot.autoDetectColorScheme.policyValue !== void 0;
    }
    get reduceTransparencyManagedByOs() {
        return this._osReducesTransparency;
    }
    get reduceTransparency() {
        return this._osReducesTransparency || this._configurationService.getValue(SJn);
    }
    get customTint() {
        return this._preference.customTint;
    }
    setCustomTint(t) {
        t.hue === this._preference.customTint.hue && t.intensity === this._preference.customTint.intensity || (this._preference = {
            ...this._preference,
            customTint: t
        }, this._applyTintOverlay(), this._tintPersistTimer.value = Ec(()=>{
            this._savePreference();
        }, v2t._TINT_PERSIST_DELAY_MS));
    }
    refreshBodyStyles() {
        const t = this._findThemeDef(this._currentSettingsId || this._preference.settingsId);
        this._updateBodyClasses(t.bodyClass, t.vsCompat);
    }
    _upgradeLightHighContrastSlotOnce() {
        if (this._storageService.getBoolean(Yrc, io.APPLICATION, !1)) return;
        const t = aDs.lightHighContrast, e = this._storageService.get(t, io.APPLICATION);
        if (e !== void 0) {
            const n = ihl(e);
            n !== e && this._storageService.store(t, n, io.APPLICATION, Wg.MACHINE);
        }
        this._storageService.store(Yrc, !0, io.APPLICATION, Wg.MACHINE);
    }
    _loadPreference() {
        const t = {
            hue: 210,
            intensity: 0
        }, e = this._storageService.get(Grc, io.APPLICATION), n = this._findStoredThemeDef(e ?? aZ[f4i], f4i).settingsId, i = Object.fromEntries(EJt.map((a)=>{
            const l = p2t(a), c = this._storageService.get(aDs[a], io.APPLICATION, l.settingsId);
            return [
                a,
                this._findStoredThemeDef(c, l.builtInId).settingsId
            ];
        })), r = this._storageService.get(qrc, io.APPLICATION), s = r ? this._findStoredThemeDef(r, Ny.HighContrast).settingsId : void 0, o = {
            hue: this._storageService.getNumber(Zrc, io.APPLICATION, t.hue),
            intensity: this._storageService.getNumber(Qrc, io.APPLICATION, t.intensity)
        };
        return {
            settingsId: n,
            bucketSettingsIds: i,
            highContrastSettingsId: s,
            customTint: o,
            syncWithIde: this._storageService.getBoolean(RJt, io.APPLICATION, !0),
            detectColorScheme: this._storageService.getBoolean(zrc, io.APPLICATION, NOv),
            detectHighContrast: this._storageService.getBoolean(Vrc, io.APPLICATION, LOv)
        };
    }
    _userScopeConfigValue(t) {
        return this._userScopeExplicitValue(t) ?? this._configurationService.inspect(t).defaultValue;
    }
    _userScopeExplicitValue(t) {
        const e = this._configurationService.inspect(t);
        return e.userRemoteValue ?? e.userLocalValue ?? e.userValue ?? e.applicationValue;
    }
    _captureAutoDetect(t, e) {
        const n = this._configurationService.inspect(t);
        return {
            effectiveValue: n.policyValue ?? this._userScopeConfigValue(t) ?? e,
            policyValue: n.policyValue,
            hasExplicitGlobalValue: n.applicationValue !== void 0 || n.userValue !== void 0 || n.userLocalValue !== void 0 || n.userRemoteValue !== void 0
        };
    }
    _renderableIdeSettingsId(t) {
        return t === void 0 ? void 0 : QAn(t, this._customThemeSupportEnabled());
    }
    _captureIdeSnapshot() {
        const t = this._configurationService.inspect(_h.COLOR_THEME), e = FOv(this._storageService.get($5n, io.APPLICATION));
        return {
            autoDetectColorScheme: this._captureAutoDetect(_h.DETECT_COLOR_SCHEME, Uws),
            autoDetectHighContrast: this._captureAutoDetect(_h.DETECT_HC, bUf),
            colorTheme: this._renderableIdeSettingsId(this._userScopeConfigValue(_h.COLOR_THEME)),
            colorThemeIsPinned: t.applicationValue !== void 0 || t.userValue !== void 0 || t.userLocalValue !== void 0 || t.userRemoteValue !== void 0,
            preferred: Object.fromEntries(EJt.map((n)=>[
                    n,
                    this._renderableIdeSettingsId(this._userScopeExplicitValue(ILv(n)))
                ])),
            osDark: this._hostColorSchemeService.dark,
            osHighContrast: this._hostColorSchemeService.highContrast,
            isNewApplicationStorage: this._storageService.isNew(io.APPLICATION),
            seedPending: this._storageService.getBoolean(j5n, io.APPLICATION, !1) || e !== null,
            pendingPinnedPolarity: e === "adopt-pinned-dark" ? "dark" : e === "adopt-pinned-light" ? "light" : null
        };
    }
    _bucketOfIdeSettingsId(t) {
        const e = x5n(t);
        if (e !== null) return Cee[e].bucket;
        const n = GTe.fromStorageData(this._storageService.vscodeService);
        return n !== void 0 && n.settingsId === t ? FMs(n.type) : this._ideBucketCache.get(t) ?? null;
    }
    _refineIdeBucket(t, e, n) {
        this._getWorkbenchThemeBySettingsId(t).then((i)=>{
            if (i === null) return;
            const r = FMs(i.type);
            this._ideBucketCache.set(t, r), r !== e && n === this._ideReconcileGeneration && this._reconcileFromIde("resolution");
        }).catch((i)=>{
            this._logService.warn("[GlassThemeService] Failed to resolve IDE theme bucket", i);
        });
    }
    _handleHostColorSchemeChange() {
        if (this._preference.syncWithIde) {
            this._reconcileFromIde("host");
            return;
        }
        (this._preference.detectColorScheme || this._preference.detectHighContrast) && this._applyThemeWhenReady(this._resolveOwnThemeDef()), this._customThemeSupportEnabled() && this._onDidChangeGlassThemePreference.fire();
    }
    _handleIdeThemeConfigurationChange(t) {
        this._preference.syncWithIde && zOv.some((e)=>t.affectsConfiguration(e)) && this._reconcileFromIde("configuration");
    }
    _renderedGlassDefFor(t, e, n = this._ideSnapshot, i = this._rendersByRule()) {
        if (i) {
            const s = OLv(t, this._usesSingleHighContrastRow(n));
            return this._syncedRowDef(s, t.ideSettingsId, n.osDark);
        }
        if (t.mode === "high-contrast") {
            const s = t.authority === "seed-pending" ? !0 : n.autoDetectColorScheme.effectiveValue, o = this._singleHighContrastDef(s);
            if (o !== void 0) return o;
        }
        if (t.mode === "pinned") {
            const s = this._findThemeDef(this._preference.settingsId);
            if (s.bucket === e) return s;
        }
        const r = p2t(e);
        return this._findThemeDefWithFallback(this._preference.bucketSettingsIds[e], r.builtInId);
    }
    _reconcileFromIde(t) {
        if (!this._preference.syncWithIde) return;
        const e = ++this._ideReconcileGeneration, n = this._captureIdeSnapshot();
        this._ideSnapshot = n;
        const i = R5n(n), r = trc({
            target: i,
            bucketOf: (a)=>this._bucketOfIdeSettingsId(a)
        });
        if (this._rendersByRule()) {
            this._syncedRows = this._syncedRowsView(n);
            for (const a of this._unresolvedIdeThemes(n))this._refineIdeBucket(a, null, e);
        } else i.mode !== "high-contrast" && this._bucketOfIdeSettingsId(i.ideSettingsId) === null && this._refineIdeBucket(i.ideSettingsId, r, e);
        if (!this._rendersByRule() && i.mode === "follow-system" && this._bucketOfIdeSettingsId(i.ideSettingsId) !== null && m2t(r) !== m2t(i.expectedBucket) && this._unlinkForPreferredSlotDivergence(i)) return;
        const s = this._renderedGlassDefFor(i, r), o = E40({
            target: i,
            snapshot: n,
            bucketOf: (a)=>this._bucketOfIdeSettingsId(a)
        });
        if (t !== "startup" && this._ideStateInitialized && this._ideTarget.mode === i.mode && this._renderedBucket === r && this._currentSettingsId === s.settingsId && this._detectMirror === o) {
            this._ideTarget = i, this._onDidChangeGlassThemePreference.fire();
            return;
        }
        this._ideTarget = i, this._renderedBucket = r, this._detectMirror = o, this._ideStateInitialized = !0, this._customThemeSupportEnabled() ? this._saveDetectMirrors() : this._savePreference(), t === "startup" ? (this._themeType = s.type, this._colorBucket = s.bucket, this._applyThemeImmediately(s)) : this._applyThemeWhenReady(s);
    }
    _rendersByRule() {
        return this._preference.syncWithIde && this._customThemeSupportEnabled() && this._renderRuleMigrationRan();
    }
    get _ruleRows() {
        return this._rendersByRule() ? this._syncedRows : void 0;
    }
    _renderRuleMigrationRan() {
        return this._storageService.getBoolean(Xrc, io.APPLICATION, !1);
    }
    _usesSingleHighContrastRow(t) {
        return this._singleHighContrastDef(t.autoDetectColorScheme.effectiveValue) !== void 0;
    }
    _syncedRowDef(t, e, n) {
        const i = this._rowDef(t, n), r = this._ideThemeFor(i);
        return w40({
            row: t,
            rowTheme: i,
            rowIdeTheme: r,
            ideTheme: e,
            osDark: n,
            bucketOf: (o)=>this._bucketOfIdeSettingsId(o)
        });
    }
    _rowDef(t, e) {
        switch(t){
            case "explicit":
                return this._findThemeDef(this._preference.settingsId);
            case "highContrast":
                return this._findThemeDefWithFallback(this._preference.highContrastSettingsId ?? this._preference.bucketSettingsIds[e ? "darkHighContrast" : "lightHighContrast"], Ny.HighContrast);
            default:
                return this._ownBucketDef(t);
        }
    }
    _syncedRowsView(t) {
        const e = (n)=>this._syncedRowDef(n, LLv(t, n), t.osDark).settingsId;
        return {
            buckets: Object.fromEntries(EJt.map((n)=>[
                    n,
                    e(n)
                ])),
            highContrast: e("highContrast")
        };
    }
    _unresolvedIdeThemes(t) {
        return [
            t.colorTheme,
            ...Object.values(t.preferred)
        ].filter((e)=>e !== void 0 && this._bucketOfIdeSettingsId(e) === null);
    }
    _migrateToRenderRuleOnce() {
        this._renderRuleMigration !== void 0 || !this._customThemeSupportEnabled() || this._renderRuleMigrationRan() || (this._renderRuleMigration = Promise.all(this._unresolvedIdeThemes(this._captureIdeSnapshot()).map(async (t)=>{
            const e = await this._getWorkbenchThemeBySettingsId(t);
            e !== null && this._ideBucketCache.set(t, FMs(e.type));
        })).then(()=>{
            !this._customThemeSupportEnabled() || this._renderRuleMigrationRan() || (this._preference = this._loadSharedPreference(), this._preference.syncWithIde && this._renderRuleChangesRender() && this._applySyncWithIde(!1), this._storageService.store(Xrc, !0, io.APPLICATION, Wg.MACHINE), this._reconcileFromIde("configuration"));
        }).catch((t)=>{
            this._logService.warn("[GlassThemeService] Render rule migration failed", t);
        }));
    }
    _renderRuleChangesRender() {
        const t = this._captureIdeSnapshot(), e = (i)=>i.policyValue !== void 0 ? [
                i
            ] : [
                !1,
                !0
            ].map((r)=>({
                    ...i,
                    effectiveValue: r
                }));
        return [
            !1,
            !0
        ].flatMap((i)=>[
                !1,
                !0
            ].flatMap((r)=>e(t.autoDetectColorScheme).flatMap((s)=>e(t.autoDetectHighContrast).map((o)=>({
                            ...t,
                            osDark: i,
                            osHighContrast: r,
                            autoDetectColorScheme: s,
                            autoDetectHighContrast: o
                        }))))).some((i)=>{
            const r = R5n(i), s = trc({
                target: r,
                bucketOf: (a)=>this._bucketOfIdeSettingsId(a)
            }), o = (a)=>this._renderedGlassDefFor(r, s, i, a).settingsId;
            return o(!1) !== o(!0);
        });
    }
    _applyFromOwnPreference(t) {
        const e = this._resolveOwnThemeDef();
        this._savePreference(), t === "startup" ? (this._themeType = e.type, this._colorBucket = e.bucket, this._applyThemeImmediately(e)) : this._applyThemeWhenReady(e);
    }
    _ownRenderedBucket() {
        return erc({
            osDark: this._hostColorSchemeService.dark,
            osHighContrast: this._hostColorSchemeService.highContrast,
            followHighContrast: this._preference.detectHighContrast
        });
    }
    _resolveOwnThemeDef() {
        const t = this._ownRenderedBucket();
        if (sdt(t)) {
            const e = this._singleHighContrastDef(this._preference.detectColorScheme);
            if (e !== void 0) return e;
        }
        return this._preference.detectColorScheme || sdt(t) ? this._ownBucketDef(t) : this._findThemeDef(this._preference.settingsId);
    }
    _ownBucketDef(t) {
        return this._findThemeDefWithFallback(this._preference.bucketSettingsIds[t], p2t(t).builtInId);
    }
    _ownEverydayDef() {
        return this._ownBucketDef(this._hostColorSchemeService.dark ? "dark" : "light");
    }
    _savePreference() {
        this._storageService.store(Grc, this._preference.settingsId, io.APPLICATION, Wg.MACHINE);
        for (const t of EJt)this._storageService.store(aDs[t], this._preference.bucketSettingsIds[t], io.APPLICATION, Wg.MACHINE);
        this._storageService.store(qrc, this._preference.highContrastSettingsId ?? "", io.APPLICATION, Wg.MACHINE), this._storageService.store(RJt, this._preference.syncWithIde, io.APPLICATION, Wg.MACHINE), this._storageService.store(Zrc, this._preference.customTint.hue, io.APPLICATION, Wg.MACHINE), this._storageService.store(Qrc, this._preference.customTint.intensity, io.APPLICATION, Wg.MACHINE), this._saveDetectMirrors();
    }
    _saveDetectMirrors() {
        const t = [
            [
                zrc,
                this._detectColorSchemeForStorage
            ],
            [
                Vrc,
                this.detectHighContrast
            ]
        ];
        for (const [e, n] of t)this._storageService.store(e, n, io.APPLICATION, Wg.MACHINE);
        this._syncMainSplashForStartup(this._resolveThemeDef()), this._onDidChangeGlassThemePreference.fire();
    }
    _loadSharedPreference() {
        return {
            ...this._loadPreference(),
            customTint: this._preference.customTint
        };
    }
    _syncMainSplashForStartup(t) {
        let e, n;
        switch(t.bucket){
            case "light":
                e = NI.VS, n = cDs.light;
                break;
            case "lightHighContrast":
                e = NI.HC_LIGHT, n = "#FFFFFF";
                break;
            case "darkHighContrast":
                e = NI.HC_BLACK, n = "#0A0A0A";
                break;
            case "dark":
                e = NI.VS_DARK, n = cDs.dark;
                break;
            default:
                {
                    const i = t.bucket;
                    throw new Error(`Unexpected glass theme bucket: ${i}`);
                }
        }
        this._persistGlassSplash({
            baseTheme: e,
            background: n
        });
    }
    get _detectColorSchemeForStorage() {
        return this._preference.syncWithIde && this._ideStateInitialized ? this._detectMirror : this._preference.detectColorScheme;
    }
    _resolveThemeDef() {
        return !this._preference.syncWithIde || !this._ideStateInitialized ? this._resolveOwnThemeDef() : this._renderedGlassDefFor(this._ideTarget, this._renderedBucket);
    }
    _applyThemeWhenReady(t) {
        const e = ++this._themeApplyGeneration;
        (async ()=>{
            try {
                const n = await this._resolveSyntaxTheme(t);
                if (e !== this._themeApplyGeneration) return;
                this._pendingThemeSettingsId = t.settingsId, await this._applyWorkbenchTheme(t, n), e === this._themeApplyGeneration && this._commitTheme(t);
            } catch (n) {
                this._logService.warn("[GlassThemeService] Failed to apply prepared theme", n);
            } finally{
                e === this._themeApplyGeneration && (this._pendingThemeSettingsId = void 0);
            }
        })();
    }
    _applyThemeImmediately(t) {
        const e = ++this._themeApplyGeneration;
        this._commitTheme(t), (async ()=>{
            try {
                const n = await this._resolveSyntaxTheme(t);
                e === this._themeApplyGeneration && await this._applyWorkbenchTheme(t, n);
            } catch (n) {
                this._logService.warn("[GlassThemeService] Failed to apply initial workbench theme", n);
            }
        })();
    }
    async _resolveSyntaxTheme(t) {
        const e = this._syntaxThemeSettingsIdForGlassTheme(t.settingsId);
        return e === void 0 ? void 0 : await this._getWorkbenchThemeBySettingsId(e) ?? void 0;
    }
    _applyWorkbenchTheme(t, e) {
        const n = t.bucket, { colorMap: i } = this._ensureCacheForDef(t);
        return this._workbenchThemeService.applyGlassTheme({
            colors: t.resolvedColors,
            precomputedColors: i,
            colorScheme: p40(n),
            baseSettingsId: t.workbenchBaseSettingsId,
            syntaxTheme: e
        });
    }
    _commitTheme(t) {
        if (this._currentSettingsId === t.settingsId) return;
        this._currentSettingsId = t.settingsId;
        const e = this._themeType;
        this._themeType = t.type;
        const n = t.bucket;
        n !== this._colorBucket && (this._colorBucket = n, this._onDidChangeColorBucket.fire(n)), this._updateBodyClasses(t.bodyClass, t.vsCompat), this._stampCursorTokenCss(t);
        const { css: i } = this._ensureCacheForDef(t);
        this._stampCssRaw(i), this._saveGlassSplash(t), this._stampEditorDynamicCss(), this._applyTintOverlay(), e !== this._themeType && this._onDidChangeThemeType.fire(this._themeType), this._onDidChangeActiveTheme.fire();
    }
    _findThemeDef(t) {
        return this._findThemeDefWithFallback(t, f4i);
    }
    _findThemeDefWithFallback(t, e) {
        const n = this._findStoredThemeDef(t, e);
        return n.builtInId === null ? n : h40(n.builtInId, this._customThemeSupportEnabled());
    }
    _customThemeSupportEnabled() {
        return this._experimentService.checkFeatureGate(sxi, {
            disableExposureLog: !0
        });
    }
    _findStoredThemeDef(t, e) {
        const n = x5n(t);
        if (n !== null) return Cee[n];
        const i = Yic(t);
        if (i !== null) {
            const r = this._resolvedCustomThemeCache.get(t);
            if (r) return r;
            const s = this._customThemes.get(i);
            if (s) {
                const o = i80(s);
                return this._resolvedCustomThemeCache.set(t, o), o;
            }
        }
        return Cee[e];
    }
    _ensureCacheForDef(t) {
        const e = this._cssCache.get(t.settingsId), n = this._colorMapCache.get(t.settingsId);
        if (e !== void 0 && n !== void 0) return {
            css: e,
            colorMap: n
        };
        const i = this._generateCss(t.resolvedColors), r = new Map;
        for (const [s, o] of Object.entries(t.resolvedColors))r.set(s, ls.fromHex(o));
        return this._cssCache.set(t.settingsId, i), this._colorMapCache.set(t.settingsId, r), {
            css: i,
            colorMap: r
        };
    }
    _persistGlassSplash(t) {
        this._splashStorageService.saveGlassSplash({
            splash: t,
            glassPreference: {
                detectColorScheme: this._detectColorSchemeForStorage,
                settingsId: this._preference.settingsId
            }
        }).catch((e)=>{
            this._logService.warn("[GlassThemeService] Failed to persist splash", e);
        });
    }
    _saveGlassSplash(t) {
        this._persistGlassSplash(this._toGlassSplash(t));
    }
    _toGlassSplash(t) {
        const e = t.resolvedColors, n = this._workbenchThemeService.getColorTheme(), i = FMs(n.type), a = ((i === "dark" || i === "darkHighContrast") === (t.type === "dark") ? n.getColor(ew)?.toString() : void 0) ?? e[ew] ?? cDs[t.type];
        return {
            baseTheme: t.vsCompat,
            background: a
        };
    }
    _generateCss(t) {
        const e = [];
        for (const [n, i] of Object.entries(t))e.push(`${Mgn(n)}: ${i};`);
        return `:root { ${e.join(`
`)} }`;
    }
    _stampCssRaw(t) {
        this._styleEl || (this._styleEl = $t.document.getElementById(Drc), this._styleEl || (this._styleEl = $t.document.createElement("style"), this._styleEl.id = Drc, $t.document.head.appendChild(this._styleEl))), this._styleEl.textContent = t;
    }
    _stampCursorTokenCss(t) {
        this._stampGlassColorTokensCss(m40(t.coreTheme, this._usesNewColors(t, !0)));
    }
    _usesNewColors(t, e) {
        return v40(t) && this._experimentService.checkFeatureGate("cursor_new_colors", {
            disableExposureLog: !e
        });
    }
    _restampActiveCursorTokenCss() {
        this._currentSettingsId && this._stampCursorTokenCss(this._findThemeDef(this._currentSettingsId));
    }
    _stampGlassColorTokensCss(t) {
        this._themeVariablesStyleEl || (this._themeVariablesStyleEl = $t.document.getElementById(Nrc), this._themeVariablesStyleEl || (this._themeVariablesStyleEl = $t.document.createElement("style"), this._themeVariablesStyleEl.id = Nrc, $t.document.head.appendChild(this._themeVariablesStyleEl))), this._themeVariablesStyleEl.textContent = t;
    }
    _stampEditorDynamicCss() {
        const t = this._workbenchThemeService.getColorTheme();
        this._stampFloatingWidgetCss(this._generateFloatingWidgetVariables(t)), this._stampRegistryCss(this._generateRegistryVariables(t)), this._stampThemingRulesCss(this._generateEditorThemingRules(t));
    }
    _generateRegistryVariables(t) {
        const e = [];
        for (const n of Rwr().getColors()){
            const i = t.getColor(n.id, !0);
            i && e.push(`${Mgn(n.id)}: ${i.toString()};`);
        }
        return `.monaco-editor { ${e.join(`
`)} }`;
    }
    _generateFloatingWidgetVariables(t) {
        const e = [];
        for (const n of KOv){
            const i = t.getColor(n, !0);
            i && e.push(`${Mgn(n)}: ${i.toString()};`);
        }
        return `body[${OMs}="true"] { ${e.join(`
`)} }`;
    }
    _generateEditorThemingRules(t) {
        const e = new Set, n = {
            addRule: (r)=>{
                e.has(r) || e.add(r);
            }
        };
        for (const r of Wrc.getThemingParticipants())r(t, n, this._environmentService);
        const i = [];
        for (const r of e){
            if (r.includes(".monaco-editor")) {
                i.push(r);
                continue;
            }
            if (r.trimStart().startsWith(":root")) {
                i.push(r.replace(":root", ".monaco-editor"));
                continue;
            }
            r.trimStart().startsWith("@keyframes") && i.push(r);
        }
        return i.join(`
`);
    }
    _stampRegistryCss(t) {
        this._registryStyleEl || (this._registryStyleEl = $t.document.getElementById(Orc), this._registryStyleEl || (this._registryStyleEl = $t.document.createElement("style"), this._registryStyleEl.id = Orc, $t.document.head.appendChild(this._registryStyleEl))), this._registryStyleEl.textContent = t;
    }
    _stampFloatingWidgetCss(t) {
        this._floatingWidgetStyleEl || (this._floatingWidgetStyleEl = $t.document.getElementById(Lrc), this._floatingWidgetStyleEl || (this._floatingWidgetStyleEl = $t.document.createElement("style"), this._floatingWidgetStyleEl.id = Lrc, $t.document.head.appendChild(this._floatingWidgetStyleEl))), this._floatingWidgetStyleEl.textContent = t;
    }
    _stampThemingRulesCss(t) {
        this._themingRulesStyleEl || (this._themingRulesStyleEl = $t.document.getElementById(Frc), this._themingRulesStyleEl || (this._themingRulesStyleEl = $t.document.createElement("style"), this._themingRulesStyleEl.id = Frc, $t.document.head.appendChild(this._themingRulesStyleEl))), this._themingRulesStyleEl.textContent = t;
    }
    _updateBodyClasses(t, e) {
        const { body: n, documentElement: i } = $t.document;
        for (const r of VOv)n.classList.remove(r);
        n.classList.add(t), n.classList.add(e);
        for (const r of WOv)n.classList.remove(r);
        if (this._environmentService.isGlass) {
            const r = e === NI.HC_BLACK || e === NI.HC_LIGHT, s = this.reduceTransparency;
            _r && !r && !s ? n.classList.add(Brc) : (n.classList.add(Urc), xa && n.classList.add(jrc)), s && n.classList.add($rc), this._configurationService.getValue(spn) && n.classList.add(Hrc);
        }
        n.getAttribute(OMs) === "true" ? (i.style.backgroundColor = "transparent", n.style.backgroundColor = "transparent") : (i.style.getPropertyValue("background-color") === "transparent" && i.style.removeProperty("background-color"), n.style.getPropertyValue("background-color") === "transparent" && n.style.removeProperty("background-color"));
    }
    _applyTintOverlay() {
        if (this._preference.customTint.intensity <= 0) {
            this._tintStyleEl && (this._tintStyleEl.textContent = "");
            return;
        }
        this._tintStyleEl || (this._tintStyleEl = $t.document.getElementById(Jrc), this._tintStyleEl || (this._tintStyleEl = $t.document.createElement("style"), this._tintStyleEl.id = Jrc, $t.document.head.appendChild(this._tintStyleEl)));
        const t = this._findThemeDef(this._currentSettingsId || this._preference.settingsId), e = t.coreTheme, { hue: n, intensity: i } = this._preference.customTint, r = [];
        for (const { token: o, chromaScale: a, hueShift: l } of qOv){
            const c = L2e(e[o]), u = Math.min(i * (a ?? 1), 100), d = l ? e1p(c, n) : JSp({
                hex: c,
                targetHue: n,
                intensity: u
            });
            r.push(`	--cursor-${o}: ${d};`);
        }
        const s = `body.${t.bodyClass}[data-cursor-glass-mode="true"]`;
        this._tintStyleEl.textContent = `${s} {
${r.join(`
`)}
}`;
    }
    _syntaxThemeSettingsIdForGlassTheme(t) {
        const e = Yic(t);
        return e === null ? void 0 : this._customThemes.get(e)?.vscodeThemeSettingsId;
    }
    _reassertWorkbenchTheme() {
        if (this._isReassertingWorkbenchTheme || !this._currentSettingsId) return;
        const e = this._findThemeDef(this._currentSettingsId).workbenchBaseSettingsId;
        this._isReassertingWorkbenchTheme = !0, this._workbenchThemeService.getColorThemes().then((n)=>{
            const i = n.find((s)=>s.settingsId === e);
            if (!(!i || this._workbenchThemeService.getColorTheme().id === i.id)) return this._workbenchThemeService.setColorTheme(i, void 0).then(()=>{});
        }).catch((n)=>{
            this._logService.warn("[GlassThemeService] Failed to reassert workbench theme", n);
        }).finally(()=>{
            this._isReassertingWorkbenchTheme = !1;
        });
    }
    _buildCoreThemeFromPartial(t) {
        const n = {
            ...Kic(t.appearance, t.highContrast)
        };
        for (const i of Qne){
            const r = LMa[i], s = t.tokens[i] ?? (r === void 0 ? void 0 : t.tokens[r]);
            typeof s == "string" && s.length > 0 && (n[i] = s);
        }
        return {
            ...n,
            name: t.name,
            appearance: t.appearance,
            highContrast: t.highContrast
        };
    }
    _parseCursorCoreThemeYaml(t) {
        let e;
        try {
            e = $qt.load(t, {});
        } catch (a) {
            const l = a instanceof Error ? a.message : String(a);
            throw new u8e(`Failed to parse YAML: ${l}`);
        }
        const n = kLv.safeParse(e);
        if (!n.success) throw typeof e != "object" || e === null || Array.isArray(e) ? new u8e("YAML must be a mapping of theme fields to values.") : new u8e('YAML is missing required field "name".');
        const i = n.data, r = zic(i.appearance), s = Vic(i.highContrast, typeof i.appearance == "string" ? i.appearance : void 0), o = {};
        for (const a of Qne){
            const l = $Ov(i, a);
            if (typeof l == "string") {
                const c = Zic(l, `YAML field "${a}"`);
                c !== void 0 && (o[a] = c);
            }
        }
        return this._buildCoreThemeFromPartial({
            name: i.name,
            appearance: r,
            highContrast: s,
            tokens: o
        });
    }
    _serializeCursorCoreThemeAsYaml(t) {
        const e = {
            name: t.name,
            appearance: t.appearance,
            highContrast: t.highContrast
        };
        for (const n of Qne)e[n] = t[n];
        return $qt.dump(e, {
            indent: 2,
            lineWidth: -1,
            quotingType: '"',
            forceQuotes: !1
        });
    }
    _loadCustomThemesFromStorage() {
        const t = this._storageService.get(lDs, io.APPLICATION);
        if (t === void 0) return new Map;
        let e;
        try {
            e = JSON.parse(t);
        } catch  {
            return new Map;
        }
        const n = SLv.safeParse(e);
        if (!n.success) return new Map;
        const i = new Map;
        for (const [r, s] of Object.entries(n.data.themes)){
            const o = this._parsePersistedCustomThemeRecord(r, s);
            o && i.set(o.id, o);
        }
        return i;
    }
    _parsePersistedCustomThemeRecord(t, e) {
        const n = yLv.safeParse(e);
        if (!n.success) return null;
        const i = n.data, r = typeof i.definition.appearance == "string" ? i.definition.appearance : void 0, s = zic(i.definition.appearance), o = Vic(i.definition.highContrast, r), a = {};
        for (const d of Qne){
            const h = $Ov(i.definition, d);
            if (typeof h == "string") try {
                const p = Zic(h, `persisted theme field "${d}"`);
                p !== void 0 && (a[d] = p);
            } catch  {}
        }
        const l = this._buildCoreThemeFromPartial({
            name: i.name,
            appearance: s,
            highContrast: o,
            tokens: a
        }), c = i.createdAt ?? Date.now(), u = i.updatedAt ?? c;
        return {
            id: t,
            name: i.name,
            source: i.source,
            bucket: UMs(l),
            definition: l,
            ...i.vscodeThemeSettingsId !== void 0 ? {
                vscodeThemeSettingsId: i.vscodeThemeSettingsId
            } : {},
            createdAt: c,
            updatedAt: u
        };
    }
    _saveCustomThemesToStorage() {
        const t = {};
        for (const [n, i] of this._customThemes)t[n] = i;
        const e = {
            _v: qic,
            themes: t
        };
        this._storageService.store(lDs, JSON.stringify(e), io.APPLICATION, Wg.MACHINE);
    }
    listAllThemes() {
        if (this._cachedAllThemes === null) {
            const t = Array.from(this._customThemes.values()).map(Qic), e = [
                ...v2t._builtInSummaries,
                ...t
            ].sort((i, r)=>i.name.localeCompare(r.name)), n = this._customThemeSupportEnabled();
            this._cachedAllThemes = e.filter((i)=>QAn(i.settingsId, n) === i.settingsId), this._cachedThemeSummariesBySettingsId = new Map(e.map((i)=>[
                    i.settingsId,
                    i
                ]));
        }
        return this._cachedAllThemes;
    }
    getThemeSummary(t) {
        return this.listAllThemes(), this._cachedThemeSummariesBySettingsId?.get(t);
    }
    getThemeDefinition(t) {
        return {
            ...this._findThemeDef(t).coreTheme
        };
    }
    getThemeTokenStyle(t) {
        const e = this._findThemeDef(t);
        return g40(e.coreTheme, this._usesNewColors(e, !1));
    }
    getCustomThemeRecord(t) {
        return this._customThemes.get(t);
    }
    async listImportableWorkbenchThemes() {
        const t = new Set(E5n.map((n)=>n.settingsId));
        for (const n of this.listAllThemes())n.source === "built-in" && t.add(n.settingsId), n.vscodeThemeSettingsId !== void 0 && t.add(n.vscodeThemeSettingsId);
        return (await this._getPassiveWorkbenchThemes()).filter((n)=>!t.has(n.settingsId));
    }
    importThemeFromYaml(t) {
        return this._trackCustomThemeChange({
            action: "import",
            importFormat: "yaml"
        }, ()=>{
            const e = this._parseCursorCoreThemeYaml(t);
            return this._upsertCustomTheme({
                source: "imported",
                definition: e,
                displayName: e.name
            });
        });
    }
    importThemeFromVsCodeJson(t) {
        return this._trackCustomThemeChange({
            action: "import",
            importFormat: "vscode_json"
        }, ()=>{
            const e = b40(t);
            return this._upsertCustomTheme({
                source: "vscode",
                definition: e,
                displayName: e.name
            });
        });
    }
    async importThemeFromWorkbenchSettingsId(t) {
        const e = {
            action: "import",
            importFormat: "ide_theme"
        };
        let n;
        try {
            n = await this._importWorkbenchTheme(t);
        } catch (i) {
            throw this._logCustomThemeChange(e, void 0), i;
        }
        return this._logCustomThemeChange(e, n), n;
    }
    async _importWorkbenchTheme(t) {
        const e = await this._getWorkbenchThemeBySettingsId(t);
        if (!e) throw new u8e(`No installed VSCode theme found with id "${t}"`);
        return e instanceof GTe && await e.ensureLoaded(this._extensionResourceLoaderService), this._upsertCustomTheme({
            source: "vscode",
            definition: S40(e),
            displayName: e.label,
            vscodeThemeSettingsId: t
        });
    }
    async _getWorkbenchThemeBySettingsId(t) {
        const e = await this._workbenchThemeService.getColorThemeBySettingsId(t);
        return e !== null ? e : (await this._getPassiveWorkbenchThemes()).find((i)=>i.settingsId === t) ?? null;
    }
    _getPassiveWorkbenchThemes() {
        if (this._passiveWorkbenchThemesPromise === void 0) {
            const t = this._scanPassiveWorkbenchThemes();
            let e;
            e = t.catch((n)=>{
                throw this._passiveWorkbenchThemesPromise === e && (this._passiveWorkbenchThemesPromise = void 0), n;
            }), this._passiveWorkbenchThemesPromise = e;
        }
        return this._passiveWorkbenchThemesPromise;
    }
    _invalidatePassiveWorkbenchThemes() {
        this._passiveWorkbenchThemesPromise = void 0, this._ideBucketCache.clear(), this._currentSettingsId && this._applyThemeWhenReady(this._findThemeDef(this._currentSettingsId));
    }
    async _scanPassiveWorkbenchThemes() {
        const t = await this._extensionsScannerService.scanAllExtensions({
            language: bM,
            checkControlFile: !0
        }, {
            language: bM,
            profileLocation: this._userDataProfileService.currentProfile.extensionsResource,
            useCache: !0
        });
        let e = [];
        try {
            e = await this._extensionsScannerService.scanExtensionsUnderDevelopment(t, {
                language: bM
            });
        } catch (s) {
            this._logService.error("[GlassThemeService] Failed to scan extensions under development for theme imports", s);
        }
        const n = this._environmentService.remoteAuthority !== void 0 ? [] : await this._extensionManagementService.getInstalledWorkspaceExtensions(!1);
        return r80(t.map(HOv), n, e.map(HOv)).filter((s)=>this._extensionEnablementService.isEnabled(s)).flatMap((s)=>{
            const o = nTe.fromName(s.manifest.publisher, s.manifest.name, s.isBuiltin);
            return (s.manifest.contributes?.themes ?? []).map((l)=>GTe.fromExtensionTheme(l, Os(s.location, l.path), o));
        }).filter((s)=>!GOv.has(s.settingsId));
    }
    removeCustomTheme(t) {
        const e = this._customThemes.get(t);
        if (e === void 0) return;
        this._customThemes.delete(t);
        const n = t4i(t);
        this._onCustomThemesMutated(), this._logCustomThemeChange({
            action: "delete"
        }, e);
        const i = aZ[Ny.Dark];
        (this._preference.settingsId === n || this._preference.highContrastSettingsId === n || EJt.some((s)=>this._preference.bucketSettingsIds[s] === n)) && (this._preference = {
            ...this._preference,
            settingsId: this._preference.settingsId === n ? i : this._preference.settingsId,
            highContrastSettingsId: this._preference.highContrastSettingsId === n ? void 0 : this._preference.highContrastSettingsId,
            bucketSettingsIds: Object.fromEntries(EJt.map((s)=>[
                    s,
                    this._preference.bucketSettingsIds[s] === n ? p2t(s).settingsId : this._preference.bucketSettingsIds[s]
                ]))
        }, this._savePreference(), this._rendersByRule() ? this._reconcileFromIde("configuration") : this._applyThemeWhenReady(this._resolveThemeDef()));
    }
    duplicateThemeBySettingsId(t) {
        return this._trackCustomThemeChange({
            action: "duplicate"
        }, ()=>{
            const e = this._findThemeDef(t);
            return this._upsertCustomTheme({
                source: "user",
                definition: {
                    ...e.coreTheme,
                    name: `${e.coreTheme.name} (copy)`
                },
                displayName: `${e.label} (copy)`
            });
        });
    }
    createCustomTheme(t) {
        return this._trackCustomThemeChange({
            action: "create"
        }, ()=>this._upsertCustomTheme({
                source: "user",
                definition: t,
                displayName: t.name
            }));
    }
    updateCustomTheme(t, e) {
        return this._trackCustomThemeChange({
            action: "edit"
        }, ()=>this._updateCustomTheme(t, e));
    }
    _updateCustomTheme(t, e) {
        const n = this._customThemes.get(t);
        if (!n) throw new u8e(`No custom theme found with id "${t}"`);
        const i = A5n(e), r = {
            ...n,
            name: i.name,
            bucket: UMs(i),
            definition: i,
            updatedAt: Date.now()
        };
        this._customThemes.set(t, r);
        const s = t4i(t), o = this._currentSettingsId === s;
        return this._onCustomThemesMutated(s), o && this._applyThemeWhenReady(this._resolveThemeDef()), Qic(r);
    }
    exportThemeAsYaml(t) {
        const e = this._findThemeDef(t);
        return this._serializeCursorCoreThemeAsYaml(A5n(e.coreTheme));
    }
    _trackCustomThemeChange(t, e) {
        let n;
        try {
            n = e();
        } catch (i) {
            throw this._logCustomThemeChange(t, void 0), i;
        }
        return this._logCustomThemeChange(t, n), n;
    }
    _logCustomThemeChange(t, e) {
        this._analyticsService.trackEvent("glass.custom_theme.changed", {
            ...t,
            outcome: e === void 0 ? "failure" : "success",
            ...e === void 0 ? {} : {
                bucket: e.bucket
            },
            customThemeCount: this._customThemes.size
        });
    }
    _findCustomThemeRecordByVsCodeSettingsId(t) {
        for (const e of this._customThemes.values())if (e.vscodeThemeSettingsId === t) return e;
    }
    _upsertCustomTheme(t) {
        const e = {
            ...t,
            definition: A5n(t.definition)
        }, n = e.vscodeThemeSettingsId !== void 0 ? this._findCustomThemeRecordByVsCodeSettingsId(e.vscodeThemeSettingsId) : void 0;
        if (n === void 0 && this._customThemes.size >= esc) throw new u8e(`You can only save up to ${esc} custom themes. Delete one and try again.`);
        const i = n !== void 0 ? {
            ...n,
            name: e.displayName,
            source: e.source,
            bucket: UMs(e.definition),
            definition: e.definition,
            ...e.vscodeThemeSettingsId !== void 0 ? {
                vscodeThemeSettingsId: e.vscodeThemeSettingsId
            } : {},
            updatedAt: Date.now()
        } : k40(e);
        this._customThemes.set(i.id, i);
        const r = n !== void 0 ? t4i(i.id) : null, s = r !== null && this._currentSettingsId === r;
        return this._onCustomThemesMutated(r), s && r !== null && this._applyThemeWhenReady(this._findThemeDef(r)), Qic(i);
    }
    _onCustomThemesMutated(t = null, e = !0) {
        this._resolvedCustomThemeCache.clear();
        for (const n of this._cssCache.keys())BMs(n) && this._cssCache.delete(n);
        for (const n of this._colorMapCache.keys())BMs(n) && this._colorMapCache.delete(n);
        t !== null && this._currentSettingsId === t && (this._currentSettingsId = ""), e && this._saveCustomThemesToStorage(), this._cachedAllThemes = null, this._cachedThemeSummariesBySettingsId = null, this._onDidChangeCustomThemes.fire();
    }
}, v2t._TINT_PERSIST_DELAY_MS = 300, v2t._builtInSummaries = E5n.map((t)=>({
        id: t.builtInId,
        name: t.label,
        source: "built-in",
        bucket: t.bucket,
        settingsId: t.settingsId
    })), v2t = Re([
    F(0, _N),
    F(1, Nu),
    F(2, oDs),
    F(3, jws),
    F(4, T$),
    F(5, AJt),
    F(6, gG),
    F(7, aU),
    F(8, Lw),
    F(9, EX),
    F(10, eu),
    F(11, CVe),
    F(12, Cr),
    F(13, Qr)
], v2t), bn(Rce, v2t, 1, 1);

}
