import { He, Lo, S, Se, bt, cn, po, rn, ve, we } from "./HVr.js";
import { A0, KT, Uf } from "./accessibilitySignalService.js";
import { Vc, Vo } from "./actions.js";
import { C, ie } from "./actions_2.js";
import { Yp, zu } from "./clipboardService.js";
import { $n, vi } from "./commands.js";
import { Hh, Xy } from "./composer.js";
import { Zs, nl } from "./composerDataServiceTypes.js";
import { Cn, qt } from "./configuration.js";
import { Yo, ka } from "./contextView.js";
import { WCt } from "./cursorDebugHint.js";
import { L9h } from "./decorationStyles.js";
import { Fn, M7, en } from "./dom_2.js";
import { Vr, Yi } from "./environmentService.js";
import { UYi, jX } from "./glassCommandIds.js";
import { du, va } from "./hover.js";
import { Ec, _g } from "./htmlContent.js";
import { rt } from "./nls.js";
import { di, ji, pi } from "./notification.js";
import { eo, ko } from "./opener.js";
import { Xt, cpg, nu, o5 } from "./qIc.js";
import { Gs, Ya } from "./quickInput.js";
import { a7e, h5h, m5h, p5h } from "./terminalColorRegistry.js";
import { C8e } from "./terminalContribExports.js";
import { C5h, E5h, T5h, hzt, x5h } from "./terminalIcons.js";
import { Ft, Sr } from "./themables.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
function fh_(e, t) {
    let n = `${S(10401, null)}`;
    if (n += `

---

`, e) if (e.markProperties || t) if (e.markProperties?.hoverMessage || t) n = e.markProperties?.hoverMessage || t || "";
    else return "";
    else if (e.duration) {
        const i = cpg(e.duration);
        e.exitCode ? e.exitCode === -1 ? n += S(10402, null, o5(e.timestamp, !0), i) : n += S(10403, null, o5(e.timestamp, !0), i, e.exitCode) : n += S(10404, null, o5(e.timestamp, !0), i);
    } else e.exitCode ? e.exitCode === -1 ? n += S(10405, null, o5(e.timestamp, !0)) : n += S(10406, null, o5(e.timestamp, !0), e.exitCode) : n += S(10407, null, o5(e.timestamp, !0));
    else if (t) n = t;
    else return "";
    return n;
}
function Uir(e, t) {
    if (!t) return;
    const n = e.inspect("terminal.integrated.fontSize").value, i = e.inspect("terminal.integrated.fontSize").defaultValue, r = e.inspect("terminal.integrated.lineHeight").value;
    if (typeof n == "number" && typeof i == "number" && typeof r == "number") {
        const s = n / i <= 1 ? n / i : 1;
        t.style.width = `${s * 16}px`, t.style.height = `${s * 16 * r}px`, t.style.fontSize = `${s * 16}px`, t.style.marginLeft = `${s * -17}px`;
    }
}
var $ir;
export { $ir, Uir, fh_ };
var __wakaru_vh__initialized = false;
export function vh_() {
if (__wakaru_vh__initialized) return;
__wakaru_vh__initialized = true;
"use strict";
x(), en(), Vo(), bt(), Se(), Sr(), rt(), KT(), Yp(), vi(), Cn(), ka(), ji(), ko(), Ya(), as(), hzt(), L9h(), a7e(), du(), _g(), jX(), Xy(), nl(), Vr(), C8e(), $ir = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f){
        super(), this._capabilities = e, this._terminalInstanceGetter = t, this._clipboardService = n, this._contextMenuService = i, this._configurationService = r, this._themeService = s, this._openerService = o, this._quickInputService = a, this._commandService = c, this._accessibilitySignalService = l, this._notificationService = u, this._hoverService = h, this._workbenchEnvironmentService = p, this._composerService = g, this._composerDataService = f, this._capabilityDisposables = this._register(new po), this._decorations = new Map, this._attachDecorationsVisible = !0, this._attachHiddenDisplayValues = new WeakMap, this._attachDecorationDisplayObserver = this._register(new cn), this._toggleVisibilityQuickPick = this._register(new cn), this._registeredMenuItems = new Map, this._onDidRequestRunCommand = this._register(new ve), this.onDidRequestRunCommand = this._onDidRequestRunCommand.event, this._onDidRequestCopyAsHtml = this._register(new ve), this.onDidRequestCopyAsHtml = this._onDidRequestCopyAsHtml.event, this._register(rn(()=>this._dispose())), this._register(this._configurationService.onDidChangeConfiguration((v)=>{
            v.affectsConfiguration("terminal.integrated.fontSize") || v.affectsConfiguration("terminal.integrated.lineHeight") ? this.refreshLayouts() : v.affectsConfiguration("workbench.colorCustomizations") ? this._refreshStyles(!0) : v.affectsConfiguration("terminal.integrated.shellIntegration.decorationsEnabled") && (this._removeCapabilityDisposables(2), this._updateDecorationVisibility());
        })), this._register(this._themeService.onDidColorThemeChange(()=>this._refreshStyles(!0))), this._updateDecorationVisibility(), this._register(this._capabilities.onDidAddCapabilityType((v)=>this._createCapabilityDisposables(v))), this._register(this._capabilities.onDidRemoveCapabilityType((v)=>this._removeCapabilityDisposables(v)));
    }
    _createCapabilityDisposables(e) {
        const t = this._capabilities.get(e);
        if (!t || this._capabilityDisposables.has(e)) return;
        const n = new He;
        switch(t.type){
            case 4:
                n.add(t.onMarkAdded((i)=>this.registerMarkDecoration(i)));
                break;
            case 2:
                {
                    const i = this._getCommandDetectionListeners(t);
                    for (const r of i)n.add(r);
                    break;
                }
        }
        this._capabilityDisposables.set(e, n);
    }
    _removeCapabilityDisposables(e) {
        this._capabilityDisposables.deleteAndDispose(e);
    }
    registerMarkDecoration(e) {
        if (!(!this._terminal || !this._showGutterDecorations && !this._showOverviewRulerDecorations) && !e.hidden) return this.registerCommandDecoration(void 0, void 0, e);
    }
    _updateDecorationVisibility() {
        const e = this._configurationService.getValue("terminal.integrated.shellIntegration.decorationsEnabled");
        this._showGutterDecorations = e === "both" || e === "gutter", this._showOverviewRulerDecorations = e === "both" || e === "overviewRuler", this._disposeAllDecorations(), (this._showGutterDecorations || this._showOverviewRulerDecorations) && (this._attachToCommandCapability(), this._updateGutterDecorationVisibility());
        const t = this._capabilities.get(2)?.executingCommandObject;
        t && this.registerCommandDecoration(t, !0);
    }
    _disposeAllDecorations() {
        this._placeholderDecoration?.dispose();
        for (const e of this._decorations.values())e.decoration.dispose(), Lo(e.disposables);
    }
    _updateGutterDecorationVisibility() {
        const e = new Set(this._terminal?.element?.querySelectorAll("terminal-command-decoration") ?? []);
        this._placeholderDecoration?.element && e.add(this._placeholderDecoration.element);
        for (const { decoration: t } of this._decorations.values())t.element && e.add(t.element);
        for (const t of e)this._updateCommandDecorationVisibility(t);
    }
    _ensureAttachDecorationDisplayObserver(e) {
        if (this._attachDecorationsVisible || this._attachDecorationDisplayObserver.value) return;
        const t = e.closest(".xterm-decoration-container") ?? e.parentElement ?? e, n = new He;
        n.add(M7.observe(t, n, {
            attributes: !0,
            attributeFilter: [
                "style"
            ],
            subtree: !0
        })((i)=>{
            for (const r of i){
                const s = r.target;
                nu(s) && s.classList.contains("terminal-command-decoration") && s.style.display !== "none" && this._updateCommandDecorationVisibility(s);
            }
        })), this._attachDecorationDisplayObserver.value = n;
    }
    setAttachDecorationsVisible(e) {
        this._attachDecorationsVisible !== e && (this._attachDecorationsVisible = e, e && this._attachDecorationDisplayObserver.clear(), this._updateGutterDecorationVisibility());
    }
    _updateCommandDecorationVisibility(e) {
        if (nu(e)) {
            if (!this._attachDecorationsVisible) this._ensureAttachDecorationDisplayObserver(e), this._attachHiddenDisplayValues.has(e) || this._attachHiddenDisplayValues.set(e, e.style.display), e.style.display = "none";
            else if (this._attachHiddenDisplayValues.has(e)) {
                const t = this._attachHiddenDisplayValues.get(e);
                t ? e.style.display = t : e.style.removeProperty("display"), this._attachHiddenDisplayValues.delete(e);
            }
        }
        this._showGutterDecorations ? e.classList.remove("hide") : e.classList.add("hide");
    }
    refreshLayouts() {
        Uir(this._configurationService, this._placeholderDecoration?.element);
        for (const e of this._decorations)Uir(this._configurationService, e[1].decoration.element);
    }
    _refreshStyles(e) {
        if (e) for (const t of this._decorations.values()){
            const n = this._getDecorationCssColor(t)?.toString() ?? "";
            t.decoration.options?.overviewRulerOptions ? t.decoration.options.overviewRulerOptions.color = n : t.decoration.options && (t.decoration.options.overviewRulerOptions = {
                color: n
            });
        }
        this._updateClasses(this._placeholderDecoration?.element);
        for (const t of this._decorations.values())this._updateClasses(t.decoration.element, t.exitCode, t.markProperties);
    }
    _dispose() {
        for (const e of this._capabilityDisposables.values())Lo(e);
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
            const e = this._capabilities.get(2), t = this._getCommandDetectionListeners(e), n = new He;
            for (const i of t)n.add(i);
            this._capabilityDisposables.set(2, n);
        }
    }
    _getCommandDetectionListeners(e) {
        this._removeCapabilityDisposables(2);
        const t = [];
        e.executingCommandObject?.marker && this.registerCommandDecoration(e.executingCommandObject, !0), t.push(e.onCommandStarted((n)=>this.registerCommandDecoration(n, !0)));
        for (const n of e.commands)this.registerCommandDecoration(n);
        return t.push(e.onCommandFinished((n)=>{
            const i = this._terminal?.buffer?.active, r = n.promptStartMarker;
            (n.exitCode === void 0 || i && r && i.baseY + i.cursorY >= r.line) && this.registerCommandDecoration(n), n.exitCode ? this._accessibilitySignalService.playSignal(Uf.terminalCommandFailed) : this._accessibilitySignalService.playSignal(Uf.terminalCommandSucceeded);
        })), t.push(e.onCommandInvalidated((n)=>{
            for (const i of n){
                const r = i.marker?.id;
                if (r) {
                    const s = this._decorations.get(r);
                    s && (s.decoration.dispose(), Lo(s.disposables));
                }
            }
        })), t.push(e.onCurrentCommandInvalidated((n)=>{
            n.reason === "noProblemsReported" ? Array.from(this._decorations.entries())[this._decorations.size - 1]?.[1].decoration.dispose() : n.reason === "windows" && this._clearPlaceholder();
        })), t;
    }
    activate(e) {
        this._terminal = e, this._attachToCommandCapability();
    }
    registerCommandDecoration(e, t, n) {
        if (!this._terminal || t && !e || !this._showGutterDecorations && !this._showOverviewRulerDecorations) return;
        const i = e?.marker || n?.marker;
        if (!i) throw new Error(`cannot add a decoration for a command ${JSON.stringify(e)} with no marker`);
        this._clearPlaceholder();
        const r = this._getDecorationCssColor(e)?.toString() ?? "", s = this._terminal.registerDecoration({
            marker: i,
            overviewRulerOptions: this._showOverviewRulerDecorations ? t ? {
                color: r,
                position: "left"
            } : {
                color: r,
                position: e?.exitCode ? "right" : "left"
            } : void 0
        });
        if (s) return t && (this._placeholderDecoration = s), s.onRender((o)=>{
            o.classList.contains(".xterm-decoration-overview-ruler") || (this._decorations.get(s.marker.id) || (s.onDispose(()=>{
                const a = this._decorations.get(s.marker.id);
                a && (Lo(a.disposables), this._decorations.delete(s.marker.id));
            }), this._decorations.set(s.marker.id, {
                decoration: s,
                disposables: this._createDisposables(o, e, n),
                exitCode: e?.exitCode,
                markProperties: e?.markProperties
            })), (!o.classList.contains("codicon") || e?.marker?.line === 0) && (Uir(this._configurationService, o), this._updateClasses(o, e?.exitCode, e?.markProperties || n)));
        }), s;
    }
    registerMenuItems(e, t) {
        const n = this._registeredMenuItems.get(e);
        return n ? n.push(...t) : this._registeredMenuItems.set(e, [
            ...t
        ]), rn(()=>{
            const i = this._registeredMenuItems.get(e);
            if (i) for (const r of t.values()){
                const s = i.indexOf(r);
                s !== -1 && i.splice(s, 1);
            }
        });
    }
    _createDisposables(e, t, n) {
        return t?.exitCode === void 0 && !t?.markProperties ? [] : t?.markProperties || n ? [
            this._createHover(e, t || n, n?.hoverMessage)
        ] : [
            ...this._createContextMenu(e, t),
            this._createHover(e, t)
        ];
    }
    _createHover(e, t, n) {
        return this._hoverService.setupDelayedHover(e, ()=>({
                content: new Ec(fh_(t, n))
            }));
    }
    _updateClasses(e, t, n) {
        if (e) {
            for (const i of e.classList)e.classList.remove(i);
            e.classList.add("terminal-command-decoration", "codicon", "xterm-decoration"), n ? (e.classList.add("default-color", ...Ft.asClassNameArray(C5h)), n.hoverMessage || e.classList.add("default")) : t === void 0 ? (e.classList.add("default-color", "default"), e.classList.add(...Ft.asClassNameArray(T5h))) : t ? (e.classList.add("error"), e.classList.add(...Ft.asClassNameArray(E5h))) : e.classList.add(...Ft.asClassNameArray(x5h)), this._updateCommandDecorationVisibility(e);
        }
    }
    _createContextMenu(e, t) {
        return [
            Xt(e, Fn.MOUSE_DOWN, async (n)=>{
                n.stopImmediatePropagation();
            }),
            Xt(e, Fn.CLICK, async (n)=>{
                n.stopImmediatePropagation();
                const i = await this._getCommandActions(t);
                this._contextMenuService.showContextMenu({
                    getAnchor: ()=>e,
                    getActions: ()=>i
                });
            }),
            Xt(e, Fn.CONTEXT_MENU, async (n)=>{
                n.stopImmediatePropagation();
                const i = this._getContextMenuActions();
                this._contextMenuService.showContextMenu({
                    getAnchor: ()=>e,
                    getActions: ()=>i
                });
            })
        ];
    }
    _getContextMenuActions() {
        const e = S(10385, null);
        return [
            {
                class: void 0,
                tooltip: e,
                id: "terminal.toggleVisibility",
                label: e,
                enabled: !0,
                run: async ()=>{
                    this._showToggleVisibilityQuickPick();
                }
            }
        ];
    }
    async _getCommandActions(e) {
        const t = [], n = S(10386, null);
        t.push({
            class: void 0,
            tooltip: n,
            id: "terminal.addToCurrentChat",
            label: n,
            enabled: !0,
            run: async ()=>{
                const a = this._terminalInstanceGetter();
                if (!a) return;
                const c = e.marker?.id;
                c !== void 0 && a.getContribution(WCt)?.setSelectedBlock(c);
                try {
                    if (this._workbenchEnvironmentService.isGlass) await this._commandService.executeCommand(UYi, {
                        terminalInstanceId: a.instanceId
                    });
                    else {
                        const l = this._composerDataService.selectedComposerId;
                        await this._composerService.insertSelectionIntoComposer(l, {
                            origin: "terminal"
                        });
                    }
                } finally{
                    c !== void 0 && a.getContribution(WCt)?.clearSelectedBlock();
                }
            }
        }), t.push(new Vc);
        const i = this._registeredMenuItems.get(e);
        if (i?.length && t.push(...i, new Vc), e.command !== "") {
            const a = S(10387, null);
            t.push({
                class: void 0,
                tooltip: a,
                id: "terminal.rerunCommand",
                label: a,
                enabled: !0,
                run: async ()=>{
                    e.command !== "" && (!e.isTrusted && !await new Promise((u)=>{
                        this._notificationService.prompt(pi.Info, S(10388, null, e.command), [
                            {
                                label: S(10389, null),
                                run: ()=>u(!0)
                            },
                            {
                                label: S(10390, null),
                                run: ()=>u(!1)
                            }
                        ]);
                    }) || this._onDidRequestRunCommand.fire({
                        command: e
                    }));
                }
            }), t.push(new Vc);
            const c = S(10391, null);
            t.push({
                class: void 0,
                tooltip: c,
                id: "terminal.copyCommand",
                label: c,
                enabled: !0,
                run: ()=>this._clipboardService.writeText(e.command)
            });
        }
        if (e.hasOutput()) {
            const a = S(10392, null);
            t.push({
                class: void 0,
                tooltip: a,
                id: "terminal.copyCommandAndOutput",
                label: a,
                enabled: !0,
                run: ()=>{
                    const u = e.getOutput();
                    typeof u == "string" && this._clipboardService.writeText(`${e.command !== "" ? e.command + `
` : ""}${u}`);
                }
            });
            const c = S(10393, null);
            t.push({
                class: void 0,
                tooltip: c,
                id: "terminal.copyOutput",
                label: c,
                enabled: !0,
                run: ()=>{
                    const u = e.getOutput();
                    typeof u == "string" && this._clipboardService.writeText(u);
                }
            });
            const l = S(10394, null);
            t.push({
                class: void 0,
                tooltip: l,
                id: "terminal.copyOutputAsHtml",
                label: l,
                enabled: !0,
                run: ()=>this._onDidRequestCopyAsHtml.fire({
                        command: e
                    })
            });
        }
        t.length > 0 && t.push(new Vc);
        const r = S(10395, null);
        t.push({
            class: void 0,
            tooltip: r,
            id: "workbench.action.terminal.runRecentCommand",
            label: r,
            enabled: !0,
            run: ()=>this._commandService.executeCommand("workbench.action.terminal.runRecentCommand")
        });
        const s = S(10396, null);
        t.push({
            class: void 0,
            tooltip: r,
            id: "workbench.action.terminal.goToRecentDirectory",
            label: s,
            enabled: !0,
            run: ()=>this._commandService.executeCommand("workbench.action.terminal.goToRecentDirectory")
        }), t.push(new Vc);
        const o = S(10397, null);
        return t.push({
            class: void 0,
            tooltip: o,
            id: "terminal.learnShellIntegration",
            label: o,
            enabled: !0,
            run: ()=>this._openerService.open("https://code.visualstudio.com/docs/terminal/shell-integration")
        }), t;
    }
    _showToggleVisibilityQuickPick() {
        const e = new He;
        this._toggleVisibilityQuickPick.value = e;
        const t = e.add(this._quickInputService.createQuickPick());
        t.hideInput = !0, t.hideCheckAll = !0, t.canSelectMany = !0, t.title = S(10398, null);
        const n = this._configurationService.getValue("terminal.integrated.shellIntegration.decorationsEnabled"), i = {
            label: S(10399, null),
            picked: n !== "never" && n !== "overviewRuler"
        }, r = {
            label: S(10400, null),
            picked: n !== "never" && n !== "gutter"
        };
        t.items = [
            i,
            r
        ];
        const s = [];
        n !== "never" && (n !== "gutter" && s.push(i), n !== "overviewRuler" && s.push(r)), t.selectedItems = s, e.add(t.onDidChangeSelection(async (o)=>{
            let a = "never";
            o.includes(i) ? o.includes(r) ? a = "both" : a = "gutter" : o.includes(r) && (a = "overviewRuler"), await this._configurationService.updateValue("terminal.integrated.shellIntegration.decorationsEnabled", a);
        })), e.add(t.onDidHide(()=>this._toggleVisibilityQuickPick.clear())), t.ok = !1, t.show();
    }
    _getDecorationCssColor(e) {
        let t;
        return e?.exitCode === void 0 ? t = h5h : t = e.exitCode ? m5h : p5h, this._themeService.getColorTheme().getColor(t)?.toString();
    }
}, $ir = ie([
    C(2, zu),
    C(3, Yo),
    C(4, qt),
    C(5, $r),
    C(6, eo),
    C(7, Gs),
    C(8, $n),
    C(9, A0),
    C(10, di),
    C(11, va),
    C(12, Yi),
    C(13, Hh),
    C(14, Zs)
], $ir);

}
