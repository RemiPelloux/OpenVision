import { D, Di, Gt, Pn, Qe, st, th, tt } from "./Iwo.js";
import { bn, jSy, jn } from "./SZu.js";
import { mZn, qn } from "./async.js";
import { or, yi } from "./configuration.js";
import { Hi, Rr, cn } from "./contextkey.js";
import { AA, qO } from "./editorInput.js";
import { Nm, Wm, od } from "./editor_2.js";
import { cy, fb } from "./environment.js";
import { Rn } from "./extensions.js";
import { GEo, d7, is, lY, ms, qEo } from "./files.js";
import { It } from "./instantiation.js";
import { du, gd, kv } from "./map.js";
import { V3, ed, rT } from "./markers.js";
import { Bt } from "./nls.js";
import { cp } from "./objects.js";
import { ole, tns } from "./resources_2.js";
import { FC, Mw } from "./textResourceConfiguration.js";
import { E } from "./tslib.es6.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { Rp } from "./ze.js";
var RCi, fT, ale;
export { RCi, ale, fT };
var __wakaru_YI_initialized = false;
export function YI() {
if (__wakaru_YI_initialized) return;
__wakaru_YI_initialized = true;
"use strict";
E(), Bt(), It(), Rn(), Gt(), Qe(), Hi(), or(), ms(), cp(), Di(), Sr(), tns(), qn(), Vp(), fb(), du(), qO(), od(), rT(), FC(), RCi = new cn("autoSaveAfterShortDelayContext", !1, !0), fT = jn("filesConfigurationService"), ale = class extends st {
    constructor(t, e, n, i, r, s, o, a){
        super(), this.configurationService = e, this.contextService = n, this.environmentService = i, this.uriIdentityService = r, this.fileService = s, this.markerService = o, this.textResourceConfigurationService = a, this._onDidChangeAutoSaveConfiguration = this._register(new tt), this.onDidChangeAutoSaveConfiguration = this._onDidChangeAutoSaveConfiguration.event, this._onDidChangeAutoSaveDisabled = this._register(new tt), this.onDidChangeAutoSaveDisabled = this._onDidChangeAutoSaveDisabled.event, this._onDidChangeFilesAssociation = this._register(new tt), this.onDidChangeFilesAssociation = this._onDidChangeFilesAssociation.event, this._onDidChangeReadonly = this._register(new tt), this.onDidChangeReadonly = this._onDidChangeReadonly.event, this.autoSaveConfigurationCache = new kv(1e3), this.autoSaveAfterShortDelayOverrides = new gd, this.autoSaveDisabledOverrides = new gd, this.readonlyIncludeMatcher = this._register(new mZn(()=>this.createReadonlyMatcher(GEo))), this.readonlyExcludeMatcher = this._register(new mZn(()=>this.createReadonlyMatcher(qEo))), this.sessionReadonlyOverrides = new gd((c)=>this.uriIdentityService.extUri.getComparisonKey(c)), this.autoSaveAfterShortDelayContext = RCi.bindTo(t);
        const l = e.getValue();
        this.currentGlobalAutoSaveConfiguration = this.computeAutoSaveConfiguration(void 0, l.files), this.currentFilesAssociationConfiguration = l?.files?.associations, this.currentHotExitConfiguration = l?.files?.hotExit || lY.ON_EXIT, this.onFilesConfigurationChange(l, !1), this.registerListeners();
    }
    createReadonlyMatcher(t) {
        const e = this._register(new ole((n)=>this.configurationService.getValue(t, {
                resource: n
            }), (n)=>n.affectsConfiguration(t), this.contextService, this.configurationService));
        return this._register(e.onExpressionChange(()=>this._onDidChangeReadonly.fire())), e;
    }
    isReadonly(t, e) {
        const n = this.fileService.getProvider(t.scheme);
        if (n && jSy(n)) return n.readOnlyMessage ?? ale.READONLY_MESSAGES.providerReadonly;
        const i = this.sessionReadonlyOverrides.get(t);
        return typeof i == "boolean" ? i === !0 ? ale.READONLY_MESSAGES.sessionReadonly : !1 : this.uriIdentityService.extUri.isEqualOrParent(t, this.environmentService.userRoamingDataHome) || this.uriIdentityService.extUri.isEqual(t, this.contextService.getWorkspace().configuration ?? void 0) ? !1 : this.readonlyIncludeMatcher.value.matches(t) ? this.readonlyExcludeMatcher.value.matches(t) ? !1 : ale.READONLY_MESSAGES.configuredReadonly : this.configuredReadonlyFromPermissions && e?.locked ? ale.READONLY_MESSAGES.fileLocked : e?.readonly ? ale.READONLY_MESSAGES.fileReadonly : !1;
    }
    async updateReadonly(t, e) {
        if (e === "toggle") {
            let n;
            try {
                n = await this.fileService.resolve(t, {
                    resolveMetadata: !0
                });
            } catch  {}
            e = !this.isReadonly(t, n);
        }
        e === "reset" ? this.sessionReadonlyOverrides.delete(t) : this.sessionReadonlyOverrides.set(t, e), this._onDidChangeReadonly.fire();
    }
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration((t)=>{
            t.affectsConfiguration("files") && this.onFilesConfigurationChange(this.configurationService.getValue(), !0);
        }));
    }
    onFilesConfigurationChange(t, e) {
        this.currentGlobalAutoSaveConfiguration = this.computeAutoSaveConfiguration(void 0, t.files), this.autoSaveConfigurationCache.clear(), this.autoSaveAfterShortDelayContext.set(this.getAutoSaveMode(void 0).mode === 1), e && this._onDidChangeAutoSaveConfiguration.fire();
        const n = t?.files?.associations;
        Rp(this.currentFilesAssociationConfiguration, n) || (this.currentFilesAssociationConfiguration = n, e && this._onDidChangeFilesAssociation.fire());
        const i = t?.files?.hotExit;
        i === lY.OFF || i === lY.ON_EXIT_AND_WINDOW_CLOSE ? this.currentHotExitConfiguration = i : this.currentHotExitConfiguration = lY.ON_EXIT;
        const r = !!t?.files?.readonlyFromPermissions;
        r !== !!this.configuredReadonlyFromPermissions && (this.configuredReadonlyFromPermissions = r, e && this._onDidChangeReadonly.fire());
    }
    getAutoSaveConfiguration(t) {
        const e = this.toResource(t);
        if (e) {
            let n = this.autoSaveConfigurationCache.get(e);
            return n || (n = this.computeAutoSaveConfiguration(e, this.textResourceConfigurationService.getValue(e, "files")), this.autoSaveConfigurationCache.set(e, n)), n;
        }
        return this.currentGlobalAutoSaveConfiguration;
    }
    computeAutoSaveConfiguration(t, e) {
        let n, i, r, s, o, a;
        switch(e?.autoSave ?? ale.DEFAULT_AUTO_SAVE_MODE){
            case d7.AFTER_DELAY:
                {
                    n = "afterDelay", i = typeof e?.autoSaveDelay == "number" && e.autoSaveDelay >= 0 ? e.autoSaveDelay : ale.DEFAULT_AUTO_SAVE_DELAY, a = i <= ale.DEFAULT_AUTO_SAVE_DELAY;
                    break;
                }
            case d7.ON_FOCUS_CHANGE:
                n = "onFocusChange";
                break;
            case d7.ON_WINDOW_CHANGE:
                n = "onWindowChange";
                break;
        }
        return e?.autoSaveWorkspaceFilesOnly === !0 && (r = !0, t && !this.contextService.isInsideWorkspace(t) && (o = !0, a = void 0)), e?.autoSaveWhenNoErrors === !0 && (s = !0, a = void 0), {
            autoSave: n,
            autoSaveDelay: i,
            autoSaveWorkspaceFilesOnly: r,
            autoSaveWhenNoErrors: s,
            isOutOfWorkspace: o,
            isShortAutoSaveDelay: a
        };
    }
    toResource(t) {
        return t instanceof AA ? Wm.getOriginalUri(t, {
            supportSideBySide: Nm.PRIMARY
        }) : t;
    }
    hasShortAutoSaveDelay(t) {
        const e = this.toResource(t);
        return e && this.autoSaveAfterShortDelayOverrides.has(e) ? !0 : this.getAutoSaveConfiguration(e).isShortAutoSaveDelay ? !e || !this.autoSaveDisabledOverrides.has(e) : !1;
    }
    getAutoSaveMode(t, e) {
        const n = this.toResource(t);
        if (n && this.autoSaveAfterShortDelayOverrides.has(n)) return {
            mode: 1
        };
        if (n && this.autoSaveDisabledOverrides.has(n)) return {
            mode: 0,
            reason: 4
        };
        const i = this.getAutoSaveConfiguration(n);
        if (typeof i.autoSave > "u") return {
            mode: 0,
            reason: 1
        };
        if (typeof e == "number" && (i.autoSave === "afterDelay" && e !== 2 || i.autoSave === "onFocusChange" && e !== 3 && e !== 4 || i.autoSave === "onWindowChange" && e !== 4)) return {
            mode: 0,
            reason: 1
        };
        if (n) {
            if (i.autoSaveWorkspaceFilesOnly && i.isOutOfWorkspace) return {
                mode: 0,
                reason: 2
            };
            if (i.autoSaveWhenNoErrors && this.markerService.read({
                resource: n,
                take: 1,
                severities: ed.Error
            }).length > 0) return {
                mode: 0,
                reason: 3
            };
        }
        switch(i.autoSave){
            case "afterDelay":
                return typeof i.autoSaveDelay == "number" && i.autoSaveDelay <= ale.DEFAULT_AUTO_SAVE_DELAY ? {
                    mode: i.autoSaveWhenNoErrors ? 2 : 1
                } : {
                    mode: 2
                };
            case "onFocusChange":
                return {
                    mode: 3
                };
            case "onWindowChange":
                return {
                    mode: 4
                };
        }
    }
    async toggleAutoSave() {
        const t = this.configurationService.getValue("files.autoSave");
        let e;
        return [
            d7.AFTER_DELAY,
            d7.ON_FOCUS_CHANGE,
            d7.ON_WINDOW_CHANGE
        ].some((n)=>n === t) ? e = d7.OFF : e = d7.AFTER_DELAY, this.configurationService.updateValue("files.autoSave", e);
    }
    enableAutoSaveAfterShortDelay(t) {
        const e = this.toResource(t);
        if (!e) return st.None;
        const n = this.autoSaveAfterShortDelayOverrides.get(e) ?? 0;
        return this.autoSaveAfterShortDelayOverrides.set(e, n + 1), Pn(()=>{
            const i = this.autoSaveAfterShortDelayOverrides.get(e) ?? 0;
            i <= 1 ? this.autoSaveAfterShortDelayOverrides.delete(e) : this.autoSaveAfterShortDelayOverrides.set(e, i - 1);
        });
    }
    disableAutoSave(t) {
        const e = this.toResource(t);
        if (!e) return st.None;
        const n = this.autoSaveDisabledOverrides.get(e) ?? 0;
        return this.autoSaveDisabledOverrides.set(e, n + 1), n === 0 && this._onDidChangeAutoSaveDisabled.fire(e), Pn(()=>{
            const i = this.autoSaveDisabledOverrides.get(e) ?? 0;
            i <= 1 ? (this.autoSaveDisabledOverrides.delete(e), this._onDidChangeAutoSaveDisabled.fire(e)) : this.autoSaveDisabledOverrides.set(e, i - 1);
        });
    }
    get isHotExitEnabled() {
        return this.contextService.getWorkspace().transient ? !1 : this.currentHotExitConfiguration !== lY.OFF;
    }
    get hotExitConfiguration() {
        return this.currentHotExitConfiguration;
    }
    preventSaveConflicts(t, e) {
        return this.configurationService.getValue("files.saveConflictResolution", {
            resource: t,
            overrideIdentifier: e
        }) !== "overwriteFileOnDisk";
    }
}, ale.DEFAULT_AUTO_SAVE_MODE = th ? d7.AFTER_DELAY : d7.OFF, ale.DEFAULT_AUTO_SAVE_DELAY = 1e3, ale.READONLY_MESSAGES = {
    providerReadonly: {
        value: D(12823, null),
        isTrusted: !0
    },
    sessionReadonly: {
        value: D(12824, null, "workbench.action.files.setActiveEditorWriteableInSession"),
        isTrusted: !0
    },
    configuredReadonly: {
        value: D(12825, null, `workbench.action.openSettings?${encodeURIComponent('["files.readonly"]')}`, "workbench.action.files.toggleActiveEditorReadonlyInSession"),
        isTrusted: !0
    },
    fileLocked: {
        value: D(12826, null, "workbench.action.files.setActiveEditorWriteableInSession"),
        isTrusted: !0
    },
    fileReadonly: {
        value: D(12827, null),
        isTrusted: !0
    }
}, ale = Re([
    F(0, Rr),
    F(1, yi),
    F(2, yr),
    F(3, cy),
    F(4, nh),
    F(5, is),
    F(6, V3),
    F(7, Mw)
], ale), bn(fT, ale, 0);

}
