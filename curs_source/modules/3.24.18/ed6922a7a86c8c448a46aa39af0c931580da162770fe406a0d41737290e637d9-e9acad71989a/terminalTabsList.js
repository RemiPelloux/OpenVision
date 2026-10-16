import { Cl, EV, G9, He, Lo, S, Se, bt, cn, rn, ve, we } from "./HVr.js";
import { Zm, cm } from "./actionbar.js";
import { Vo, er } from "./actions.js";
import { C, ei, ie, rv } from "./actions_2.js";
import { bn } from "./async.js";
import { Pe, _i } from "./codicons.js";
import { $n, vi } from "./commands.js";
import { Cn, qt } from "./configuration.js";
import { Lv, ka } from "./contextView.js";
import { dn, xn } from "./contextkey.js";
import { oTe, woe } from "./decorations_2.js";
import { nN, sf } from "./defaultStyles.js";
import { jK, yD } from "./dnd.js";
import { K7, sN } from "./dnd_3.js";
import { Fn, en, zp } from "./dom_2.js";
import { E7 } from "./functional.js";
import { du, va } from "./hover.js";
import { Tb, wl } from "./hoverWidget.js";
import { Ec } from "./htmlContent.js";
import { CW, VP, f5 } from "./inputBox.js";
import { Ze, _t } from "./instantiation.js";
import { Pr, fe } from "./keyCodes.js";
import { no, qr } from "./keybinding.js";
import { N0t, X$, Z$ } from "./labels_2.js";
import { $d, Id } from "./lifecycle_2.js";
import { Rle, h5e, oRe } from "./list.js";
import { Mgn, PBe } from "./listColors.js";
import { JV, km, ru } from "./listService.js";
import { Kge, kFt, nKe } from "./listView.js";
import { T3, lm } from "./menuEntryActionViewItem.js";
import { gt, li } from "./network.js";
import { rt } from "./nls.js";
import { Xl } from "./path_2.js";
import { Nwe, Ole, Ve, Xt, Ye, cC, pKe } from "./qIc.js";
import { Kp, Us } from "./severity_2.js";
import { Vn, yn } from "./storage_2.js";
import { Gf, eP, ng, r8 } from "./terminal.js";
import { Er, Gx } from "./terminalContextKey.js";
import { L0t, mir } from "./terminalContextMenu.js";
import { c7e } from "./terminalIcon.js";
import { VDo } from "./terminalStatusList.js";
import { Lm, mhe } from "./terminalStrings_2.js";
import { yir } from "./terminalTooltip.js";
import { O0t } from "./terminalUri.js";
import { Mf, fw } from "./terminal_2.js";
import { lte } from "./terminal_3.js";
import { Ft, Sr } from "./themables.js";
import { Ef } from "./theme.js";
import { $r, as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
function dbe(e) {
    let t;
    if (typeof e == "string" ? t = e : e.color ? t = e.color.replace(/\./g, "_") : Ft.isThemeIcon(e.icon) && e.icon.color && (t = e.icon.color.id.replace(/\./g, "_")), t) return `terminal-icon-${t.replace(/\./g, "_")}`;
}
function Int(e, t, n) {
    const i = e.icon;
    if (!i) return;
    const r = [];
    let s;
    if (n) {
        if (typeof i == "string" && (i.startsWith("$(") || Nwe().getIcon(i))) return r;
        typeof i == "string" && (s = Ee.parse(i));
    }
    if (i instanceof Ee ? s = i : i instanceof Object && "light" in i && "dark" in i && (s = t === Ef.LIGHT ? i.light : i.dark), s instanceof Ee) {
        const a = `terminal-uri-icon-${cC(s.path).toString(36)}`;
        r.push(a), r.push("terminal-uri-icon");
    }
    return r;
}
function HDo(e, t) {
    return !t.icon || t.icon instanceof Object && !("id" in t.icon) ? e.get(lte).getDefaultIcon().id : typeof t.icon == "string" ? t.icon : t.icon.id;
}
function L5h(e) {
    switch(e){
        case Us.Error:
            return PBe;
        case Us.Warning:
            return Mgn;
        default:
            return "";
    }
}
function bir(e, t) {
    const n = parseInt(t.get("terminal.integrated.tabs.showDetailed", -1) ?? "0");
    let i = "";
    const r = e.statusList.statuses, s = [];
    for (const c of r)n ? (c.detailedTooltip ?? c.tooltip) && (i += `

---

${c.icon ? `$(${c.icon?.id}) ` : ""}` + (c.detailedTooltip ?? c.tooltip ?? "")) : c.tooltip && (i += `

---

${c.icon ? `$(${c.icon?.id}) ` : ""}` + (c.tooltip ?? "")), c.hoverActions && s.push(...c.hoverActions);
    s.push({
        commandId: "toggleDetailedInfo",
        label: S(n ? 10370 : 10371, null),
        run () {
            t.store("terminal.integrated.tabs.showDetailed", (n + 1) % 2, -1, 0);
        }
    });
    const o = Ad_(e, !!n);
    return {
        content: new Ec(e.title + o + i, {
            supportThemeIcons: !0
        }),
        actions: s
    };
}
function Ad_(e, t) {
    const n = [];
    if (e.processId && e.processId > 0 && n.push(S(10372, null, "PID", e.processId) + `
`), e.shellLaunchConfig.executable) {
        let i = "";
        if (!t && e.shellLaunchConfig.executable.length > 32) {
            const s = Xl(e.shellLaunchConfig.executable), o = e.shellLaunchConfig.executable.length - s.length - 1, a = e.shellLaunchConfig.executable.substring(o, o + 1);
            i += `\u2026${a}${s}`;
        } else i += e.shellLaunchConfig.executable;
        const r = EV(e.injectedArgs || e.shellLaunchConfig.args || []).map((s)=>s.match(/\s/) ? `'${s}'` : s).join(" ");
        r && (i += ` ${r}`), n.push(S(10373, null, i));
    }
    return n.length ? `

---

${n.join(`
`)}` : "";
}
function A5n(e) {
    const [, t, n] = e.path.split("/");
    if (!t || !Number.parseInt(n)) throw new Error(`Could not parse terminal uri for resource ${e}`);
    return {
        workspaceId: t,
        instanceId: Number.parseInt(n)
    };
}
function O5h(e) {
    const t = e.dataTransfer?.getData("Terminals");
    if (t) {
        const n = JSON.parse(t), i = [];
        for (const r of n)i.push(Ee.parse(r));
        return i.length === 0 ? void 0 : i;
    }
}
var qDo, R5n, D5n, Sir, kir, wir, Cir;
export { A5n, Ad_, Cir, D5n, HDo, Int, L5h, O5h, R5n, Sir, bir, dbe, kir, qDo, wir };
var __wakaru_F5h_initialized = false;
export function F5h() {
if (__wakaru_F5h_initialized) return;
__wakaru_F5h_initialized = true;
"use strict";
x(), jK(), en(), Zm(), Tb(), CW(), h5e(), nKe(), Vo(), bn(), _i(), bt(), E7(), Pr(), Se(), li(), Kp(), Sr(), Qt(), rt(), lm(), ei(), vi(), Cn(), dn(), ka(), sN(), du(), Ze(), no(), km(), Vn(), fw(), sf(), as(), Z$(), oTe(), $d(), Gx(), mhe(), ng(), L0t(), c7e(), VDo(), yir(), O0t(), qDo = Ve, R5n = ((e)=>(e[e.TabHeight = 22] = "TabHeight", e[e.NarrowViewWidth = 46] = "NarrowViewWidth", e[e.WideViewMinimumWidth = 80] = "WideViewMinimumWidth", e[e.DefaultWidth = 120] = "DefaultWidth", e[e.MidpointViewWidth = 63] = "MidpointViewWidth", e[e.ActionbarMinimumWidth = 105] = "ActionbarMinimumWidth", e[e.MaximumWidth = 500] = "MaximumWidth", e))(R5n || {}), D5n = class extends JV {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h){
        super("TerminalTabsList", e, {
            getHeight: ()=>22,
            getTemplateId: ()=>"terminal.tabs"
        }, [
            o.createInstance(Sir, e, o.createInstance(X$, N0t), ()=>this.getSelectedElements(), ()=>this.hasText, ()=>this.hasActionBar)
        ], {
            horizontalScrolling: !1,
            supportDynamicHeights: !1,
            selectionNavigation: !0,
            identityProvider: {
                getId: (g)=>g?.instanceId
            },
            accessibilityProvider: o.createInstance(kir),
            smoothScrolling: i.getValue("workbench.list.smoothScrolling"),
            multipleSelectionSupport: !0,
            paddingBottom: 22,
            dnd: o.createInstance(wir),
            openOnSingleClick: !0
        }, t, n, i, o), this._configurationService = i, this._terminalService = r, this._terminalGroupService = s, this._themeService = c, this._storageService = l, this._hoverService = h, this._hasText = !0, this._hasActionBar = !0;
        const p = [
            this._terminalGroupService.onDidChangeInstances(()=>this.refresh()),
            this._terminalGroupService.onDidChangeGroups(()=>this.refresh()),
            this._terminalGroupService.onDidShow(()=>this.refresh()),
            this._terminalGroupService.onDidChangeInstanceCapability(()=>this.refresh()),
            this._terminalService.onAnyInstanceTitleChange(()=>this.refresh()),
            this._terminalService.onAnyInstanceIconChange(()=>this.refresh()),
            this._terminalService.onAnyInstancePrimaryStatusChange(()=>this.refresh()),
            this._terminalService.onDidChangeConnectionState(()=>this.refresh()),
            this._themeService.onDidColorThemeChange(()=>this.refresh()),
            this._terminalGroupService.onDidChangeActiveInstance((g)=>{
                if (g) {
                    const f = this._terminalGroupService.instances.indexOf(g);
                    this.setSelection([
                        f
                    ]), this.reveal(f);
                }
                this.refresh();
            }),
            this._storageService.onDidChangeValue(-1, "terminal.integrated.tabs.showDetailed", this.disposables)(()=>this.refresh())
        ];
        this.disposables.add(u.onWillShutdown((g)=>{
            Lo(p), p.length = 0;
        })), this.disposables.add(rn(()=>{
            Lo(p), p.length = 0;
        })), this.disposables.add(this.onMouseDblClick(async (g)=>{
            if (this.getFocus().length === 0) {
                const v = await this._terminalService.createTerminal({
                    location: Mf.Panel
                });
                this._terminalGroupService.setActiveInstance(v), await v.focusWhenReady();
            }
            this._terminalService.getEditingTerminal()?.instanceId !== g.element?.instanceId && this._getFocusMode() === "doubleClick" && this.getFocus().length === 1 && g.element?.focus(!0);
        })), this.disposables.add(this.onMouseClick(async (g)=>{
            this._terminalService.getEditingTerminal()?.instanceId !== g.element?.instanceId && (g.browserEvent.altKey && g.element ? await this._terminalService.createTerminal({
                location: {
                    parentTerminal: g.element
                }
            }) : this._getFocusMode() === "singleClick" && this.getSelection().length <= 1 && g.element?.focus(!0));
        })), this.disposables.add(this.onContextMenu((g)=>{
            if (!g.element) {
                this.setSelection([]);
                return;
            }
            const f = this.getSelectedElements();
            (!f || !f.find((v)=>g.element === v)) && this.setFocus(g.index !== void 0 ? [
                g.index
            ] : []);
        })), this._terminalTabsSingleSelectedContextKey = Er.tabsSingularSelection.bindTo(t), this._isSplitContextKey = Er.splitTerminalTabFocused.bindTo(t), this.disposables.add(this.onDidChangeSelection((g)=>this._updateContextKey())), this.disposables.add(this.onDidChangeFocus(()=>this._updateContextKey())), this.disposables.add(this.onDidOpen(async (g)=>{
            const f = g.element;
            f && (this._terminalGroupService.setActiveInstance(f), g.editorOptions.preserveFocus || await f.focusWhenReady());
        })), this._decorationsProvider || (this._decorationsProvider = this.disposables.add(o.createInstance(Cir)), this.disposables.add(a.registerDecorationsProvider(this._decorationsProvider))), this.refresh();
    }
    get hasText() {
        return this._hasText;
    }
    get hasActionBar() {
        return this._hasActionBar;
    }
    _getFocusMode() {
        return this._configurationService.getValue("terminal.integrated.tabs.focusMode");
    }
    refresh(e = !0) {
        e && this._terminalService.isEditable(void 0) && this.domFocus(), this.splice(0, this.length, this._terminalGroupService.instances.slice());
    }
    focusHover() {
        const e = this.getSelectedElements()[0];
        e && this._hoverService.showInstantHover({
            ...bir(e, this._storageService),
            target: this.getHTMLElement(),
            trapFocus: !0
        }, !0);
    }
    _updateContextKey() {
        this._terminalTabsSingleSelectedContextKey.set(this.getSelectedElements().length === 1);
        const e = this.getFocusedElements();
        this._isSplitContextKey.set(e.length > 0 && this._terminalGroupService.instanceIsSplit(e[0]));
    }
    layout(e, t) {
        super.layout(e, t);
        const n = t ?? this.getHTMLElement().clientWidth, i = n >= 63, r = n > 105;
        (this._hasText !== i || this._hasActionBar !== r) && (this._hasText = i, this._hasActionBar = r, this.refresh());
    }
}, D5n = ie([
    C(1, xn),
    C(2, ru),
    C(3, qt),
    C(4, Gf),
    C(5, eP),
    C(6, _t),
    C(7, woe),
    C(8, $r),
    C(9, yn),
    C(10, Id),
    C(11, va)
], D5n), Sir = class {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p, g, f, v){
        this._labels = t, this._getSelection = n, this._getHasText = i, this._getHasActionBar = r, this._instantiationService = s, this._terminalConfigurationService = o, this._terminalService = a, this._terminalGroupService = c, this._hoverService = l, this._keybindingService = u, this._listService = h, this._storageService = p, this._themeService = g, this._contextViewService = f, this._commandService = v, this.templateId = "terminal.tabs";
    }
    renderTemplate(e) {
        const t = Ye(e, qDo(".terminal-tabs-entry")), n = {}, i = new He, r = i.add(this._labels.create(t, {
            supportHighlights: !0,
            supportDescriptionHighlights: !0,
            supportIcons: !0,
            hoverDelegate: {
                delay: 0,
                showHover: (a)=>this._hoverService.showDelayedHover({
                        ...a,
                        actions: n.hoverActions,
                        target: t,
                        appearance: {
                            showPointer: !0
                        },
                        position: {
                            hoverPosition: this._terminalConfigurationService.config.tabs.location === "left" ? wl.RIGHT : wl.LEFT
                        }
                    }, {
                        groupId: "terminal-tabs-list"
                    })
            }
        })), s = Ye(r.element, qDo(".actions")), o = i.add(new cm(s, {
            actionRunner: i.add(new mir),
            actionViewItemProvider: (a, c)=>a instanceof rv ? i.add(this._instantiationService.createInstance(T3, a, {
                    hoverDelegate: c.hoverDelegate
                })) : void 0
        }));
        return {
            element: t,
            label: r,
            actionBar: o,
            context: n,
            elementDisposables: new He,
            templateDisposables: i
        };
    }
    renderElement(e, t, n) {
        const i = this._getHasText(), r = this._getHasActionBar(), s = this._terminalGroupService.getGroupForInstance(e);
        if (!s) throw new Error(`Could not find group for instance "${e.instanceId}"`);
        n.element.classList.toggle("has-text", i), n.element.classList.toggle("is-active", this._terminalGroupService.activeInstance === e), n.element.classList.toggle("terminal-contribution-needs-attention", e.hasContributedAttention);
        let o = "";
        if (s.terminalInstances.length > 1) {
            const f = s.terminalInstances.indexOf(e);
            f === 0 ? o = "\u250C " : f === s.terminalInstances.length - 1 ? o = "\u2514 " : o = "\u251C ";
        }
        const a = bir(e, this._storageService);
        n.context.hoverActions = a.actions;
        const c = Int(e, this._themeService.getColorTheme().type), l = this._instantiationService.invokeFunction(HDo, e);
        let u = "";
        if (i) this.fillActionBar(e, n), u = o, e.icon && (u += `$(${l}) ${e.title}`);
        else {
            const f = e.statusList.primary;
            f && f.severity > Us.Ignore ? u = `${o}$(${f.icon?.id || l})` : u = `${o}$(${l})`;
        }
        r || n.actionBar.clear(), n.elementDisposables.add(Xt(n.element, Fn.AUXCLICK, (f)=>{
            f.stopImmediatePropagation(), f.button === 1 && this._terminalService.safeDisposeTerminal(e);
        }));
        const h = [], p = dbe(e);
        p && h.push(p), c && h.push(...c), (e.hasContributedActions || e.hasContributedAttention) && h.push("terminal-contribution-icon"), n.label.setResource({
            resource: e.resource,
            name: u,
            description: i ? e.description : void 0
        }, {
            fileDecorations: {
                colors: !0,
                badges: i
            },
            title: {
                markdown: a.content,
                markdownNotSupportedFallback: void 0
            },
            extraClasses: h
        });
        const g = this._terminalService.getEditableData(e);
        n.label.element.classList.toggle("editable-tab", !!g), g && (n.elementDisposables.add(this._renderInputBox(n.label.element.querySelector(".monaco-icon-label-container"), e, g)), n.actionBar.clear());
    }
    _renderInputBox(e, t, n) {
        const i = t.title || "", r = new f5(e, this._contextViewService, {
            validationOptions: {
                validation: (c)=>{
                    const l = n.validationMessage(c);
                    return !l || l.severity !== Us.Error ? null : {
                        content: l.content,
                        formatContent: !0,
                        type: VP.ERROR
                    };
                }
            },
            ariaLabel: S(10365, null),
            inputBoxStyles: nN
        });
        r.element.style.height = "22px", r.value = i, r.focus(), r.select({
            start: 0,
            end: i.length
        });
        const s = G9((c, l)=>{
            r.element.style.display = "none";
            const u = r.value;
            Lo(a), r.element.remove(), l && n.onFinish(u, c);
        }), o = ()=>{
            if (r.isInputValid()) {
                const c = n.validationMessage(r.value);
                c ? r.showMessage({
                    content: c.content,
                    formatContent: !0,
                    type: c.severity === Us.Info ? VP.INFO : c.severity === Us.Warning ? VP.WARNING : VP.ERROR
                }) : r.hideMessage();
            }
        };
        o();
        const a = [
            r,
            zp(r.inputElement, Fn.KEY_DOWN, (c)=>{
                c.stopPropagation(), c.equals(fe.Enter) ? s(r.isInputValid(), !0) : c.equals(fe.Escape) && s(!1, !0);
            }),
            zp(r.inputElement, Fn.KEY_UP, (c)=>{
                o();
            }),
            Xt(r.inputElement, Fn.BLUR, ()=>{
                s(r.isInputValid(), !0);
            })
        ];
        return rn(()=>{
            s(!1, !1);
        });
    }
    disposeElement(e, t, n) {
        n.elementDisposables.clear(), n.actionBar.clear();
    }
    disposeTemplate(e) {
        e.elementDisposables.dispose(), e.templateDisposables.dispose();
    }
    fillActionBar(e, t) {
        const n = [
            t.elementDisposables.add(new er("workbench.action.terminal.splitActiveTab", Lm.split.short, Ft.asClassName(Pe.splitHorizontal), !0, async ()=>{
                this._runForSelectionOrInstance(e, async (i)=>{
                    this._terminalService.createTerminal({
                        location: {
                            parentTerminal: i
                        }
                    });
                });
            }))
        ];
        if (e.shellLaunchConfig.tabActions) for (const i of e.shellLaunchConfig.tabActions)n.push(t.elementDisposables.add(new er(i.id, i.label, i.icon ? Ft.asClassName(i.icon) : void 0, !0, async ()=>{
            this._runForSelectionOrInstance(e, (r)=>this._commandService.executeCommand(i.id, e));
        })));
        n.push(t.elementDisposables.add(new er("workbench.action.terminal.killActiveTab", Lm.kill.short, Ft.asClassName(Pe.trashcan), !0, async ()=>{
            this._runForSelectionOrInstance(e, (i)=>this._terminalService.safeDisposeTerminal(i));
        }))), t.actionBar.clear();
        for (const i of n)t.actionBar.push(i, {
            icon: !0,
            label: !1,
            keybinding: this._keybindingService.lookupKeybinding(i.id)?.getLabel()
        });
    }
    _runForSelectionOrInstance(e, t) {
        const n = this._getSelection();
        if (n.includes(e)) for (const i of n)i && t(i);
        else t(e);
        this._terminalGroupService.focusTabs(), this._listService.lastFocusedList?.focusNext();
    }
}, Sir = ie([
    C(5, _t),
    C(6, r8),
    C(7, Gf),
    C(8, eP),
    C(9, va),
    C(10, qr),
    C(11, ru),
    C(12, yn),
    C(13, $r),
    C(14, Lv),
    C(15, $n)
], Sir), kir = class {
    constructor(e){
        this._terminalGroupService = e;
    }
    getWidgetAriaLabel() {
        return S(10366, null);
    }
    getAriaLabel(e) {
        let t = "";
        const n = this._terminalGroupService.getGroupForInstance(e);
        if (n && n.terminalInstances?.length > 1) {
            const i = n.terminalInstances.indexOf(e);
            t = S(10367, null, e.instanceId, e.title, i + 1, n.terminalInstances.length);
        } else t = S(10368, null, e.instanceId, e.title);
        return t;
    }
}, kir = ie([
    C(0, eP)
], kir), wir = class extends we {
    constructor(e, t, n){
        super(), this._terminalService = e, this._terminalGroupService = t, this._listService = n, this._autoFocusDisposable = this._register(new cn), this._primaryBackend = this._terminalService.getPrimaryBackend();
    }
    getDragURI(e) {
        return this._terminalService.getEditingTerminal()?.instanceId === e.instanceId ? null : e.resource.toString();
    }
    getDragLabel(e, t) {
        return e.length === 1 ? e[0].title : void 0;
    }
    onDragLeave() {
        this._autoFocusInstance = void 0, this._autoFocusDisposable.clear();
    }
    onDragStart(e, t) {
        if (!t.dataTransfer) return;
        const n = e.getData();
        if (!Array.isArray(n)) return;
        const i = n.filter((r)=>"instanceId" in r);
        i.length > 0 && t.dataTransfer.setData("Terminals", JSON.stringify(i.map((r)=>r.resource.toString())));
    }
    onDragOver(e, t, n, i, r) {
        if (e instanceof kFt && !pKe(r, yD.FILES, yD.RESOURCES, "Terminals", K7.FILES)) return !1;
        const s = this._autoFocusInstance !== t;
        return s && (this._autoFocusDisposable.clear(), this._autoFocusInstance = t), !t && !pKe(r, "Terminals") ? e instanceof Kge : (s && t && (this._autoFocusDisposable.value = Cl(()=>{
            this._terminalService.setActiveInstance(t), this._autoFocusInstance = void 0;
        }, 500)), {
            feedback: n ? [
                n
            ] : void 0,
            accept: !0,
            effect: {
                type: oRe.Move,
                position: Rle.Over
            }
        });
    }
    async drop(e, t, n, i, r) {
        this._autoFocusDisposable.clear(), this._autoFocusInstance = void 0;
        let s;
        const o = [], a = O5h(r);
        if (a) for (const l of a){
            const u = this._terminalService.getInstanceFromResource(l);
            if (u) Array.isArray(s) ? s.push(u) : s = [
                u
            ], this._terminalService.moveToTerminalView(u);
            else if (this._primaryBackend) {
                const h = A5n(l);
                h.instanceId && o.push(this._primaryBackend.requestDetachInstance(h.workspaceId, h.instanceId));
            }
        }
        if (o.length) {
            let l = await Promise.all(o);
            l = l.filter((h)=>h !== void 0);
            let u;
            for (const h of l)u = await this._terminalService.createTerminal({
                config: {
                    attachPersistentProcess: h
                }
            });
            u && this._terminalService.setActiveInstance(u);
            return;
        }
        if (s === void 0) {
            if (!(e instanceof Kge)) {
                this._handleExternalDrop(t, r);
                return;
            }
            const l = e.getData();
            if (!l || !Array.isArray(l)) return;
            s = [];
            for (const u of l)"instanceId" in u && s.push(u);
        }
        if (!t) {
            this._terminalGroupService.moveGroupToEnd(s), this._terminalService.setActiveInstance(s[0]);
            const l = this._terminalGroupService.getGroupForInstance(s[0]);
            if (l) {
                const u = this._terminalGroupService.groups.indexOf(l);
                this._listService.lastFocusedList?.setSelection([
                    u
                ]);
            }
            return;
        }
        this._terminalGroupService.moveGroup(s, t), this._terminalService.setActiveInstance(s[0]);
        const c = this._terminalGroupService.getGroupForInstance(s[0]);
        if (c) {
            const l = this._terminalGroupService.groups.indexOf(c);
            this._listService.lastFocusedList?.setSelection([
                l
            ]);
        }
    }
    async _handleExternalDrop(e, t) {
        if (!e || !t.dataTransfer) return;
        let n;
        const i = t.dataTransfer.getData(yD.RESOURCES);
        i && (n = Ee.parse(JSON.parse(i)[0]));
        const r = t.dataTransfer.getData(K7.FILES);
        !n && r && (n = Ee.file(JSON.parse(r)[0])), !n && t.dataTransfer.files.length > 0 && Ole(t.dataTransfer.files[0]) && (n = Ee.file(Ole(t.dataTransfer.files[0]))), n && (this._terminalService.setActiveInstance(e), e.focus(), await e.sendPath(n, !1));
    }
}, wir = ie([
    C(0, Gf),
    C(1, eP),
    C(2, ru)
], wir), Cir = class extends we {
    constructor(e){
        super(), this._terminalService = e, this.label = S(10369, null), this._onDidChange = this._register(new ve), this.onDidChange = this._onDidChange.event, this._register(this._terminalService.onAnyInstancePrimaryStatusChange((t)=>this._onDidChange.fire([
                t.resource
            ])));
    }
    provideDecorations(e) {
        if (e.scheme !== gt.vscodeTerminal) return;
        const t = this._terminalService.getInstanceFromResource(e);
        if (!t) return;
        const n = t?.statusList?.primary;
        if (n?.icon) return {
            color: L5h(n.severity),
            letter: n.icon,
            tooltip: n.tooltip
        };
    }
}, Cir = ie([
    C(0, Gf)
], Cir);

}
