import { Dl, S, Se, bt, jn, rn, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Ypn, bn } from "./async.js";
import { Cn, qt } from "./configuration.js";
import { At, dn, xn } from "./contextkey.js";
import { H0, MA } from "./editorInput.js";
import { jd, vd, xc } from "./editor_2.js";
import { nf, sv } from "./environment.js";
import { Pn } from "./extensions.js";
import { BZr, Fi, Ii, N7, UZr, b3 } from "./files.js";
import { Ze } from "./instantiation.js";
import { Mc, ag, oc } from "./map.js";
import { $_, eT, nc } from "./markers.js";
import { rt } from "./nls.js";
import { bu } from "./objects.js";
import { agg, mn, vn, yh } from "./qIc.js";
import { BKi, UX } from "./resources_2.js";
import { $v, M_ } from "./textResourceConfiguration.js";
import { x } from "./tslib.es6.js";
import { Ea, rl } from "./uriIdentity.js";
import { Jn, ci } from "./workspace.js";
var FOn, $w, $X;
export { $X, $w, FOn };
var __wakaru_aE_initialized = false;
export function aE() {
if (__wakaru_aE_initialized) return;
__wakaru_aE_initialized = true;
"use strict";
x(), rt(), Ze(), Pn(), bt(), Se(), dn(), Cn(), Fi(), bu(), jn(), ci(), BKi(), bn(), rl(), nf(), oc(), MA(), xc(), $_(), M_(), FOn = new At("autoSaveAfterShortDelayContext", !1, !0), $w = vn("filesConfigurationService"), $X = class extends we {
    constructor(e, t, n, i, r, s, o, a){
        super(), this.configurationService = t, this.contextService = n, this.environmentService = i, this.uriIdentityService = r, this.fileService = s, this.markerService = o, this.textResourceConfigurationService = a, this._onDidChangeAutoSaveConfiguration = this._register(new ve), this.onDidChangeAutoSaveConfiguration = this._onDidChangeAutoSaveConfiguration.event, this._onDidChangeAutoSaveDisabled = this._register(new ve), this.onDidChangeAutoSaveDisabled = this._onDidChangeAutoSaveDisabled.event, this._onDidChangeFilesAssociation = this._register(new ve), this.onDidChangeFilesAssociation = this._onDidChangeFilesAssociation.event, this._onDidChangeReadonly = this._register(new ve), this.onDidChangeReadonly = this._onDidChangeReadonly.event, this.autoSaveConfigurationCache = new ag(1e3), this.autoSaveAfterShortDelayOverrides = new Mc, this.autoSaveDisabledOverrides = new Mc, this.readonlyIncludeMatcher = this._register(new Ypn(()=>this.createReadonlyMatcher(BZr))), this.readonlyExcludeMatcher = this._register(new Ypn(()=>this.createReadonlyMatcher(UZr))), this.sessionReadonlyOverrides = new Mc((l)=>this.uriIdentityService.extUri.getComparisonKey(l)), this.autoSaveAfterShortDelayContext = FOn.bindTo(e);
        const c = t.getValue();
        this.currentGlobalAutoSaveConfiguration = this.computeAutoSaveConfiguration(void 0, c.files), this.currentFilesAssociationConfiguration = c?.files?.associations, this.currentHotExitConfiguration = c?.files?.hotExit || N7.ON_EXIT, this.onFilesConfigurationChange(c, !1), this.registerListeners();
    }
    createReadonlyMatcher(e) {
        const t = this._register(new UX((n)=>this.configurationService.getValue(e, {
                resource: n
            }), (n)=>n.affectsConfiguration(e), this.contextService, this.configurationService));
        return this._register(t.onExpressionChange(()=>this._onDidChangeReadonly.fire())), t;
    }
    isReadonly(e, t) {
        const n = this.fileService.getProvider(e.scheme);
        if (n && agg(n)) return n.readOnlyMessage ?? $X.READONLY_MESSAGES.providerReadonly;
        const i = this.sessionReadonlyOverrides.get(e);
        return typeof i == "boolean" ? i === !0 ? $X.READONLY_MESSAGES.sessionReadonly : !1 : this.uriIdentityService.extUri.isEqualOrParent(e, this.environmentService.userRoamingDataHome) || this.uriIdentityService.extUri.isEqual(e, this.contextService.getWorkspace().configuration ?? void 0) ? !1 : this.readonlyIncludeMatcher.value.matches(e) ? this.readonlyExcludeMatcher.value.matches(e) ? !1 : $X.READONLY_MESSAGES.configuredReadonly : this.configuredReadonlyFromPermissions && t?.locked ? $X.READONLY_MESSAGES.fileLocked : t?.readonly ? $X.READONLY_MESSAGES.fileReadonly : !1;
    }
    async updateReadonly(e, t) {
        if (t === "toggle") {
            let n;
            try {
                n = await this.fileService.resolve(e, {
                    resolveMetadata: !0
                });
            } catch  {}
            t = !this.isReadonly(e, n);
        }
        t === "reset" ? this.sessionReadonlyOverrides.delete(e) : this.sessionReadonlyOverrides.set(e, t), this._onDidChangeReadonly.fire();
    }
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration((e)=>{
            e.affectsConfiguration("files") && this.onFilesConfigurationChange(this.configurationService.getValue(), !0);
        }));
    }
    onFilesConfigurationChange(e, t) {
        this.currentGlobalAutoSaveConfiguration = this.computeAutoSaveConfiguration(void 0, e.files), this.autoSaveConfigurationCache.clear(), this.autoSaveAfterShortDelayContext.set(this.getAutoSaveMode(void 0).mode === 1), t && this._onDidChangeAutoSaveConfiguration.fire();
        const n = e?.files?.associations;
        yh(this.currentFilesAssociationConfiguration, n) || (this.currentFilesAssociationConfiguration = n, t && this._onDidChangeFilesAssociation.fire());
        const i = e?.files?.hotExit;
        i === N7.OFF || i === N7.ON_EXIT_AND_WINDOW_CLOSE ? this.currentHotExitConfiguration = i : this.currentHotExitConfiguration = N7.ON_EXIT;
        const r = !!e?.files?.readonlyFromPermissions;
        r !== !!this.configuredReadonlyFromPermissions && (this.configuredReadonlyFromPermissions = r, t && this._onDidChangeReadonly.fire());
    }
    getAutoSaveConfiguration(e) {
        const t = this.toResource(e);
        if (t) {
            let n = this.autoSaveConfigurationCache.get(t);
            return n || (n = this.computeAutoSaveConfiguration(t, this.textResourceConfigurationService.getValue(t, "files")), this.autoSaveConfigurationCache.set(t, n)), n;
        }
        return this.currentGlobalAutoSaveConfiguration;
    }
    computeAutoSaveConfiguration(e, t) {
        let n, i, r, s, o, a;
        switch(t?.autoSave ?? $X.DEFAULT_AUTO_SAVE_MODE){
            case b3.AFTER_DELAY:
                {
                    n = "afterDelay", i = typeof t?.autoSaveDelay == "number" && t.autoSaveDelay >= 0 ? t.autoSaveDelay : $X.DEFAULT_AUTO_SAVE_DELAY, a = i <= $X.DEFAULT_AUTO_SAVE_DELAY;
                    break;
                }
            case b3.ON_FOCUS_CHANGE:
                n = "onFocusChange";
                break;
            case b3.ON_WINDOW_CHANGE:
                n = "onWindowChange";
                break;
        }
        return t?.autoSaveWorkspaceFilesOnly === !0 && (r = !0, e && !this.contextService.isInsideWorkspace(e) && (o = !0, a = void 0)), t?.autoSaveWhenNoErrors === !0 && (s = !0, a = void 0), {
            autoSave: n,
            autoSaveDelay: i,
            autoSaveWorkspaceFilesOnly: r,
            autoSaveWhenNoErrors: s,
            isOutOfWorkspace: o,
            isShortAutoSaveDelay: a
        };
    }
    toResource(e) {
        return e instanceof H0 ? vd.getOriginalUri(e, {
            supportSideBySide: jd.PRIMARY
        }) : e;
    }
    hasShortAutoSaveDelay(e) {
        const t = this.toResource(e);
        return t && this.autoSaveAfterShortDelayOverrides.has(t) ? !0 : this.getAutoSaveConfiguration(t).isShortAutoSaveDelay ? !t || !this.autoSaveDisabledOverrides.has(t) : !1;
    }
    getAutoSaveMode(e, t) {
        const n = this.toResource(e);
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
        if (typeof t == "number" && (i.autoSave === "afterDelay" && t !== 2 || i.autoSave === "onFocusChange" && t !== 3 && t !== 4 || i.autoSave === "onWindowChange" && t !== 4)) return {
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
                severities: nc.Error
            }).length > 0) return {
                mode: 0,
                reason: 3
            };
        }
        switch(i.autoSave){
            case "afterDelay":
                return typeof i.autoSaveDelay == "number" && i.autoSaveDelay <= $X.DEFAULT_AUTO_SAVE_DELAY ? {
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
        const e = this.configurationService.getValue("files.autoSave");
        let t;
        return [
            b3.AFTER_DELAY,
            b3.ON_FOCUS_CHANGE,
            b3.ON_WINDOW_CHANGE
        ].some((n)=>n === e) ? t = b3.OFF : t = b3.AFTER_DELAY, this.configurationService.updateValue("files.autoSave", t);
    }
    enableAutoSaveAfterShortDelay(e) {
        const t = this.toResource(e);
        if (!t) return we.None;
        const n = this.autoSaveAfterShortDelayOverrides.get(t) ?? 0;
        return this.autoSaveAfterShortDelayOverrides.set(t, n + 1), rn(()=>{
            const i = this.autoSaveAfterShortDelayOverrides.get(t) ?? 0;
            i <= 1 ? this.autoSaveAfterShortDelayOverrides.delete(t) : this.autoSaveAfterShortDelayOverrides.set(t, i - 1);
        });
    }
    disableAutoSave(e) {
        const t = this.toResource(e);
        if (!t) return we.None;
        const n = this.autoSaveDisabledOverrides.get(t) ?? 0;
        return this.autoSaveDisabledOverrides.set(t, n + 1), n === 0 && this._onDidChangeAutoSaveDisabled.fire(t), rn(()=>{
            const i = this.autoSaveDisabledOverrides.get(t) ?? 0;
            i <= 1 ? (this.autoSaveDisabledOverrides.delete(t), this._onDidChangeAutoSaveDisabled.fire(t)) : this.autoSaveDisabledOverrides.set(t, i - 1);
        });
    }
    get isHotExitEnabled() {
        return this.contextService.getWorkspace().transient ? !1 : this.currentHotExitConfiguration !== N7.OFF;
    }
    get hotExitConfiguration() {
        return this.currentHotExitConfiguration;
    }
    preventSaveConflicts(e, t) {
        return this.configurationService.getValue("files.saveConflictResolution", {
            resource: e,
            overrideIdentifier: t
        }) !== "overwriteFileOnDisk";
    }
}, $X.DEFAULT_AUTO_SAVE_MODE = Dl ? b3.AFTER_DELAY : b3.OFF, $X.DEFAULT_AUTO_SAVE_DELAY = 1e3, $X.READONLY_MESSAGES = {
    providerReadonly: {
        value: S(12823, null),
        isTrusted: !0
    },
    sessionReadonly: {
        value: S(12824, null, "workbench.action.files.setActiveEditorWriteableInSession"),
        isTrusted: !0
    },
    configuredReadonly: {
        value: S(12825, null, `workbench.action.openSettings?${encodeURIComponent('["files.readonly"]')}`, "workbench.action.files.toggleActiveEditorReadonlyInSession"),
        isTrusted: !0
    },
    fileLocked: {
        value: S(12826, null, "workbench.action.files.setActiveEditorWriteableInSession"),
        isTrusted: !0
    },
    fileReadonly: {
        value: S(12827, null),
        isTrusted: !0
    }
}, $X = ie([
    C(0, xn),
    C(1, qt),
    C(2, Jn),
    C(3, sv),
    C(4, Ea),
    C(5, Ii),
    C(6, eT),
    C(7, $v)
], $X), mn($w, $X, 0);

}
