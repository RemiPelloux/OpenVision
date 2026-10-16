import { D, Gt, Nc, Nt, Pn, Qe, Vn, da, st, tt } from "./Iwo.js";
import { CDk, rhs } from "./Ycg.js";
import { Nb, l2, xx } from "./accessibilitySignalService.js";
import { Kh, vu } from "./actions.js";
import { bb, hf } from "./clipboardService.js";
import { nr, rs } from "./commands.js";
import { Yh, vS } from "./composer.js";
import { Pl, no } from "./composerDataServiceTypes.js";
import { or, yi } from "./configuration.js";
import { Mf, pf } from "./contextView.js";
import { _Vt } from "./cursorDebugHint.js";
import { dPg } from "./decorationStyles.js";
import { Hn, Pr, Xde } from "./dom_2.js";
import { fo, ps } from "./environmentService.js";
import { Kpe, hle } from "./glassCommandIds.js";
import { av, gS } from "./hover.js";
import { Ek, zf } from "./htmlContent.js";
import { Bt } from "./nls.js";
import { Ks, Wr, Yn } from "./notification.js";
import { kc, qc } from "./opener.js";
import { Cl, Gu } from "./quickInput.js";
import { $Rg, HRg, WRg, XEt } from "./terminalColorRegistry.js";
import { Nat } from "./terminalContribExports.js";
import { JRg, NAi, e2g, n2g, t2g } from "./terminalIcons.js";
import { Gn, ta } from "./themables.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $u, li } from "./ze.js";
var shs;
export { shs };
var __wakaru_TDk_initialized = false;
export function TDk() {
if (__wakaru_TDk_initialized) return;
__wakaru_TDk_initialized = true;
"use strict";
E(), Hn(), vu(), Gt(), Qe(), ta(), Bt(), l2(), bb(), rs(), or(), pf(), Ks(), qc(), Gu(), Dl(), NAi(), dPg(), XEt(), gS(), Ek(), hle(), vS(), Pl(), fo(), Nat(), shs = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g){
        super(), this._capabilities = t, this._terminalInstanceGetter = e, this._clipboardService = n, this._contextMenuService = i, this._configurationService = r, this._themeService = s, this._openerService = o, this._quickInputService = a, this._commandService = l, this._accessibilitySignalService = c, this._notificationService = u, this._hoverService = d, this._workbenchEnvironmentService = h, this._composerService = p, this._composerDataService = g, this._capabilityDisposables = this._register(new da), this._decorations = new Map, this._attachDecorationsVisible = !0, this._attachHiddenDisplayValues = new WeakMap, this._attachDecorationDisplayObserver = this._register(new Vn), this._toggleVisibilityQuickPick = this._register(new Vn), this._registeredMenuItems = new Map, this._onDidRequestRunCommand = this._register(new tt), this.onDidRequestRunCommand = this._onDidRequestRunCommand.event, this._onDidRequestCopyAsHtml = this._register(new tt), this.onDidRequestCopyAsHtml = this._onDidRequestCopyAsHtml.event, this._register(Pn(()=>this._dispose())), this._register(this._configurationService.onDidChangeConfiguration((f)=>{
            f.affectsConfiguration("terminal.integrated.fontSize") || f.affectsConfiguration("terminal.integrated.lineHeight") ? this.refreshLayouts() : f.affectsConfiguration("workbench.colorCustomizations") ? this._refreshStyles(!0) : f.affectsConfiguration("terminal.integrated.shellIntegration.decorationsEnabled") && (this._removeCapabilityDisposables(2), this._updateDecorationVisibility());
        })), this._register(this._themeService.onDidColorThemeChange(()=>this._refreshStyles(!0))), this._updateDecorationVisibility(), this._register(this._capabilities.onDidAddCapabilityType((f)=>this._createCapabilityDisposables(f))), this._register(this._capabilities.onDidRemoveCapabilityType((f)=>this._removeCapabilityDisposables(f)));
    }
    _createCapabilityDisposables(t) {
        const e = this._capabilities.get(t);
        if (!e || this._capabilityDisposables.has(t)) return;
        const n = new Nt;
        switch(e.type){
            case 4:
                n.add(e.onMarkAdded((i)=>this.registerMarkDecoration(i)));
                break;
            case 2:
                {
                    const i = this._getCommandDetectionListeners(e);
                    for (const r of i)n.add(r);
                    break;
                }
        }
        this._capabilityDisposables.set(t, n);
    }
    _removeCapabilityDisposables(t) {
        this._capabilityDisposables.deleteAndDispose(t);
    }
    registerMarkDecoration(t) {
        if (!(!this._terminal || !this._showGutterDecorations && !this._showOverviewRulerDecorations) && !t.hidden) return this.registerCommandDecoration(void 0, void 0, t);
    }
    _updateDecorationVisibility() {
        const t = this._configurationService.getValue("terminal.integrated.shellIntegration.decorationsEnabled");
        this._showGutterDecorations = t === "both" || t === "gutter", this._showOverviewRulerDecorations = t === "both" || t === "overviewRuler", this._disposeAllDecorations(), (this._showGutterDecorations || this._showOverviewRulerDecorations) && (this._attachToCommandCapability(), this._updateGutterDecorationVisibility());
        const e = this._capabilities.get(2)?.executingCommandObject;
        e && this.registerCommandDecoration(e, !0);
    }
    _disposeAllDecorations() {
        this._placeholderDecoration?.dispose();
        for (const t of this._decorations.values())t.decoration.dispose(), Nc(t.disposables);
    }
    _updateGutterDecorationVisibility() {
        const t = new Set(this._terminal?.element?.querySelectorAll("terminal-command-decoration") ?? []);
        this._placeholderDecoration?.element && t.add(this._placeholderDecoration.element);
        for (const { decoration: e } of this._decorations.values())e.element && t.add(e.element);
        for (const e of t)this._updateCommandDecorationVisibility(e);
    }
    _ensureAttachDecorationDisplayObserver(t) {
        if (this._attachDecorationsVisible || this._attachDecorationDisplayObserver.value) return;
        const e = t.closest(".xterm-decoration-container") ?? t.parentElement ?? t, n = new Nt;
        n.add(Xde.observe(e, n, {
            attributes: !0,
            attributeFilter: [
                "style"
            ],
            subtree: !0
        })((i)=>{
            for (const r of i){
                const s = r.target;
                $u(s) && s.classList.contains("terminal-command-decoration") && s.style.display !== "none" && this._updateCommandDecorationVisibility(s);
            }
        })), this._attachDecorationDisplayObserver.value = n;
    }
    setAttachDecorationsVisible(t) {
        this._attachDecorationsVisible !== t && (this._attachDecorationsVisible = t, t && this._attachDecorationDisplayObserver.clear(), this._updateGutterDecorationVisibility());
    }
    _updateCommandDecorationVisibility(t) {
        if ($u(t)) {
            if (!this._attachDecorationsVisible) this._ensureAttachDecorationDisplayObserver(t), this._attachHiddenDisplayValues.has(t) || this._attachHiddenDisplayValues.set(t, t.style.display), t.style.display = "none";
            else if (this._attachHiddenDisplayValues.has(t)) {
                const e = this._attachHiddenDisplayValues.get(t);
                e ? t.style.display = e : t.style.removeProperty("display"), this._attachHiddenDisplayValues.delete(t);
            }
        }
        this._showGutterDecorations ? t.classList.remove("hide") : t.classList.add("hide");
    }
    refreshLayouts() {
        rhs(this._configurationService, this._placeholderDecoration?.element);
        for (const t of this._decorations)rhs(this._configurationService, t[1].decoration.element);
    }
    _refreshStyles(t) {
        if (t) for (const e of this._decorations.values()){
            const n = this._getDecorationCssColor(e)?.toString() ?? "";
            e.decoration.options?.overviewRulerOptions ? e.decoration.options.overviewRulerOptions.color = n : e.decoration.options && (e.decoration.options.overviewRulerOptions = {
                color: n
            });
        }
        this._updateClasses(this._placeholderDecoration?.element);
        for (const e of this._decorations.values())this._updateClasses(e.decoration.element, e.exitCode, e.markProperties);
    }
    _dispose() {
        for (const t of this._capabilityDisposables.values())Nc(t);
        this.clearDecorations();
    }
    _clearPlaceholder() {
        this._placeholderDecoration?.dispose(), this._placeholderDecoration = void 0;
    }
    clearDecorations() {
        this._placeholderDecoration?.marker.dispose(), this._clearPlaceholder(), this._disposeAllDecorations(), this._decorations.clear();
    }
    _attachToCommandCapability() {
        if (this._capabilities.has(2)) {
            const t = this._capabilities.get(2), e = this._getCommandDetectionListeners(t), n = new Nt;
            for (const i of e)n.add(i);
            this._capabilityDisposables.set(2, n);
        }
    }
    _getCommandDetectionListeners(t) {
        this._removeCapabilityDisposables(2);
        const e = [];
        t.executingCommandObject?.marker && this.registerCommandDecoration(t.executingCommandObject, !0), e.push(t.onCommandStarted((n)=>this.registerCommandDecoration(n, !0)));
        for (const n of t.commands)this.registerCommandDecoration(n);
        return e.push(t.onCommandFinished((n)=>{
            const i = this._terminal?.buffer?.active, r = n.promptStartMarker;
            (n.exitCode === void 0 || i && r && i.baseY + i.cursorY >= r.line) && this.registerCommandDecoration(n), n.exitCode ? this._accessibilitySignalService.playSignal(Nb.terminalCommandFailed) : this._accessibilitySignalService.playSignal(Nb.terminalCommandSucceeded);
        })), e.push(t.onCommandInvalidated((n)=>{
            for (const i of n){
                const r = i.marker?.id;
                if (r) {
                    const s = this._decorations.get(r);
                    s && (s.decoration.dispose(), Nc(s.disposables));
                }
            }
        })), e.push(t.onCurrentCommandInvalidated((n)=>{
            n.reason === "noProblemsReported" ? Array.from(this._decorations.entries())[this._decorations.size - 1]?.[1].decoration.dispose() : n.reason === "windows" && this._clearPlaceholder();
        })), e;
    }
    activate(t) {
        this._terminal = t, this._attachToCommandCapability();
    }
    registerCommandDecoration(t, e, n) {
        if (!this._terminal || e && !t || !this._showGutterDecorations && !this._showOverviewRulerDecorations) return;
        const i = t?.marker || n?.marker;
        if (!i) throw new Error(`cannot add a decoration for a command ${JSON.stringify(t)} with no marker`);
        this._clearPlaceholder();
        const r = this._getDecorationCssColor(t)?.toString() ?? "", s = this._terminal.registerDecoration({
            marker: i,
            overviewRulerOptions: this._showOverviewRulerDecorations ? e ? {
                color: r,
                position: "left"
            } : {
                color: r,
                position: t?.exitCode ? "right" : "left"
            } : void 0
        });
        if (s) return e && (this._placeholderDecoration = s), s.onRender((o)=>{
            o.classList.contains(".xterm-decoration-overview-ruler") || (this._decorations.get(s.marker.id) || (s.onDispose(()=>{
                const a = this._decorations.get(s.marker.id);
                a && (Nc(a.disposables), this._decorations.delete(s.marker.id));
            }), this._decorations.set(s.marker.id, {
                decoration: s,
                disposables: this._createDisposables(o, t, n),
                exitCode: t?.exitCode,
                markProperties: t?.markProperties
            })), (!o.classList.contains("codicon") || t?.marker?.line === 0) && (rhs(this._configurationService, o), this._updateClasses(o, t?.exitCode, t?.markProperties || n)));
        }), s;
    }
    registerMenuItems(t, e) {
        const n = this._registeredMenuItems.get(t);
        return n ? n.push(...e) : this._registeredMenuItems.set(t, [
            ...e
        ]), Pn(()=>{
            const i = this._registeredMenuItems.get(t);
            if (i) for (const r of e.values()){
                const s = i.indexOf(r);
                s !== -1 && i.splice(s, 1);
            }
        });
    }
    _createDisposables(t, e, n) {
        return e?.exitCode === void 0 && !e?.markProperties ? [] : e?.markProperties || n ? [
            this._createHover(t, e || n, n?.hoverMessage)
        ] : [
            ...this._createContextMenu(t, e),
            this._createHover(t, e)
        ];
    }
    _createHover(t, e, n) {
        return this._hoverService.setupDelayedHover(t, ()=>({
                content: new zf(CDk(e, n))
            }));
    }
    _updateClasses(t, e, n) {
        if (t) {
            for (const i of t.classList)t.classList.remove(i);
            t.classList.add("terminal-command-decoration", "codicon", "xterm-decoration"), n ? (t.classList.add("default-color", ...Gn.asClassNameArray(JRg)), n.hoverMessage || t.classList.add("default")) : e === void 0 ? (t.classList.add("default-color", "default"), t.classList.add(...Gn.asClassNameArray(e2g))) : e ? (t.classList.add("error"), t.classList.add(...Gn.asClassNameArray(t2g))) : t.classList.add(...Gn.asClassNameArray(n2g)), this._updateCommandDecorationVisibility(t);
        }
    }
    _createContextMenu(t, e) {
        return [
            li(t, Pr.MOUSE_DOWN, async (n)=>{
                n.stopImmediatePropagation();
            }),
            li(t, Pr.CLICK, async (n)=>{
                n.stopImmediatePropagation();
                const i = await this._getCommandActions(e);
                this._contextMenuService.showContextMenu({
                    getAnchor: ()=>t,
                    getActions: ()=>i
                });
            }),
            li(t, Pr.CONTEXT_MENU, async (n)=>{
                n.stopImmediatePropagation();
                const i = this._getContextMenuActions();
                this._contextMenuService.showContextMenu({
                    getAnchor: ()=>t,
                    getActions: ()=>i
                });
            })
        ];
    }
    _getContextMenuActions() {
        const t = D(10385, null);
        return [
            {
                class: void 0,
                tooltip: t,
                id: "terminal.toggleVisibility",
                label: t,
                enabled: !0,
                run: async ()=>{
                    this._showToggleVisibilityQuickPick();
                }
            }
        ];
    }
    async _getCommandActions(t) {
        const e = [], n = D(10386, null);
        e.push({
            class: void 0,
            tooltip: n,
            id: "terminal.addToCurrentChat",
            label: n,
            enabled: !0,
            run: async ()=>{
                const a = this._terminalInstanceGetter();
                if (!a) return;
                const l = t.marker?.id;
                l !== void 0 && a.getContribution(_Vt)?.setSelectedBlock(l);
                try {
                    if (this._workbenchEnvironmentService.isGlass) await this._commandService.executeCommand(Kpe, {
                        terminalInstanceId: a.instanceId
                    });
                    else {
                        const c = this._composerDataService.selectedComposerId;
                        await this._composerService.insertSelectionIntoComposer(c, {
                            origin: "terminal"
                        });
                    }
                } finally{
                    l !== void 0 && a.getContribution(_Vt)?.clearSelectedBlock();
                }
            }
        }), e.push(new Kh);
        const i = this._registeredMenuItems.get(t);
        if (i?.length && e.push(...i, new Kh), t.command !== "") {
            const a = D(10387, null);
            e.push({
                class: void 0,
                tooltip: a,
                id: "terminal.rerunCommand",
                label: a,
                enabled: !0,
                run: async ()=>{
                    t.command !== "" && (!t.isTrusted && !await new Promise((u)=>{
                        this._notificationService.prompt(Yn.Info, D(10388, null, t.command), [
                            {
                                label: D(10389, null),
                                run: ()=>u(!0)
                            },
                            {
                                label: D(10390, null),
                                run: ()=>u(!1)
                            }
                        ]);
                    }) || this._onDidRequestRunCommand.fire({
                        command: t
                    }));
                }
            }), e.push(new Kh);
            const l = D(10391, null);
            e.push({
                class: void 0,
                tooltip: l,
                id: "terminal.copyCommand",
                label: l,
                enabled: !0,
                run: ()=>this._clipboardService.writeText(t.command)
            });
        }
        if (t.hasOutput()) {
            const a = D(10392, null);
            e.push({
                class: void 0,
                tooltip: a,
                id: "terminal.copyCommandAndOutput",
                label: a,
                enabled: !0,
                run: ()=>{
                    const u = t.getOutput();
                    typeof u == "string" && this._clipboardService.writeText(`${t.command !== "" ? t.command + `
` : ""}${u}`);
                }
            });
            const l = D(10393, null);
            e.push({
                class: void 0,
                tooltip: l,
                id: "terminal.copyOutput",
                label: l,
                enabled: !0,
                run: ()=>{
                    const u = t.getOutput();
                    typeof u == "string" && this._clipboardService.writeText(u);
                }
            });
            const c = D(10394, null);
            e.push({
                class: void 0,
                tooltip: c,
                id: "terminal.copyOutputAsHtml",
                label: c,
                enabled: !0,
                run: ()=>this._onDidRequestCopyAsHtml.fire({
                        command: t
                    })
            });
        }
        e.length > 0 && e.push(new Kh);
        const r = D(10395, null);
        e.push({
            class: void 0,
            tooltip: r,
            id: "workbench.action.terminal.runRecentCommand",
            label: r,
            enabled: !0,
            run: ()=>this._commandService.executeCommand("workbench.action.terminal.runRecentCommand")
        });
        const s = D(10396, null);
        e.push({
            class: void 0,
            tooltip: r,
            id: "workbench.action.terminal.goToRecentDirectory",
            label: s,
            enabled: !0,
            run: ()=>this._commandService.executeCommand("workbench.action.terminal.goToRecentDirectory")
        }), e.push(new Kh);
        const o = D(10397, null);
        return e.push({
            class: void 0,
            tooltip: o,
            id: "terminal.learnShellIntegration",
            label: o,
            enabled: !0,
            run: ()=>this._openerService.open("https://code.visualstudio.com/docs/terminal/shell-integration")
        }), e;
    }
    _showToggleVisibilityQuickPick() {
        const t = new Nt;
        this._toggleVisibilityQuickPick.value = t;
        const e = t.add(this._quickInputService.createQuickPick());
        e.hideInput = !0, e.hideCheckAll = !0, e.canSelectMany = !0, e.title = D(10398, null);
        const n = this._configurationService.getValue("terminal.integrated.shellIntegration.decorationsEnabled"), i = {
            label: D(10399, null),
            picked: n !== "never" && n !== "overviewRuler"
        }, r = {
            label: D(10400, null),
            picked: n !== "never" && n !== "gutter"
        };
        e.items = [
            i,
            r
        ];
        const s = [];
        n !== "never" && (n !== "gutter" && s.push(i), n !== "overviewRuler" && s.push(r)), e.selectedItems = s, t.add(e.onDidChangeSelection(async (o)=>{
            let a = "never";
            o.includes(i) ? o.includes(r) ? a = "both" : a = "gutter" : o.includes(r) && (a = "overviewRuler"), await this._configurationService.updateValue("terminal.integrated.shellIntegration.decorationsEnabled", a);
        })), t.add(e.onDidHide(()=>this._toggleVisibilityQuickPick.clear())), e.ok = !1, e.show();
    }
    _getDecorationCssColor(t) {
        let e;
        return t?.exitCode === void 0 ? e = $Rg : e = t.exitCode ? WRg : HRg, this._themeService.getColorTheme().getColor(e)?.toString();
    }
}, shs = Re([
    F(2, hf),
    F(3, Mf),
    F(4, yi),
    F(5, Ml),
    F(6, kc),
    F(7, Cl),
    F(8, nr),
    F(9, xx),
    F(10, Wr),
    F(11, av),
    F(12, ps),
    F(13, Yh),
    F(14, no)
], shs);

}
