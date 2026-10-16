import { D, Ec, Gt, Nc, Nt, Pn, Qe, Vn, mQ, st, tt } from "./Iwo.js";
import { NMk, _2n, kVe, kvl, p2g, u2g, y2n } from "./Ycg.js";
import { PT, oR } from "./actionbar.js";
import { vu, za } from "./actions.js";
import { es, n6 } from "./actions_2.js";
import { qn } from "./async.js";
import { gs, yt } from "./codicons.js";
import { nr, rs } from "./commands.js";
import { or, yi } from "./configuration.js";
import { aL, pf } from "./contextView.js";
import { Hi, Rr } from "./contextkey.js";
import { eye, l9e } from "./decorations_2.js";
import { CM, rRe } from "./defaultStyles.js";
import { fwe, r6 } from "./dnd.js";
import { bO, woe } from "./dnd_3.js";
import { Hn, Pr, n0 } from "./dom_2.js";
import { Mse } from "./functional.js";
import { av, gS } from "./hover.js";
import { Bu, Iw } from "./hoverWidget.js";
import { Eoe, Pvn, fnt } from "./inputBox.js";
import { It, dn } from "./instantiation.js";
import { Ma, Ze } from "./keyCodes.js";
import { Al, ru } from "./keybinding.js";
import { b2n, dKt, ylt } from "./labels_2.js";
import { Fp, zp } from "./lifecycle_2.js";
import { bGd, gGo, mGo } from "./list.js";
import { bnt, d2, up } from "./listService.js";
import { Lyt, oTr, vGo } from "./listView.js";
import { MC, kHe } from "./menuEntryActionViewItem.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { Ua, ob } from "./severity_2.js";
import { Zi, ki } from "./storage_2.js";
import { Mv, NJ, Py, pV } from "./terminal.js";
import { QI, ns } from "./terminalContextKey.js";
import { Nds, f2n } from "./terminalContextMenu.js";
import { ZEt } from "./terminalIcon.js";
import { c2g } from "./terminalStatusList.js";
import { $f, dye } from "./terminalStrings_2.js";
import { d2g } from "./terminalTooltip.js";
import { QEt } from "./terminalUri.js";
import { UC, ny } from "./terminal_2.js";
import { Gn, ta } from "./themables.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Ii, fr, koe, li, mvn } from "./ze.js";
var Tvl, Uds, jds, $ds, Hds, Wds;
export { $ds, Hds, Tvl, Uds, Wds, jds };
var __wakaru_FMk_initialized = false;
export function FMk() {
if (__wakaru_FMk_initialized) return;
__wakaru_FMk_initialized = true;
"use strict";
E(), fwe(), Hn(), PT(), Iw(), fnt(), bGd(), oTr(), vu(), qn(), gs(), Gt(), Mse(), Ma(), Qe(), Ki(), ob(), ta(), fn(), Bt(), MC(), es(), rs(), or(), Hi(), pf(), bO(), gS(), It(), ru(), d2(), Zi(), UC(), CM(), Dl(), dKt(), l9e(), zp(), QI(), dye(), Mv(), f2n(), ZEt(), c2g(), d2g(), QEt(), Tvl = Ii, Uds = class extends bnt {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super("TerminalTabsList", t, {
            getHeight: ()=>22,
            getTemplateId: ()=>"terminal.tabs"
        }, [
            o.createInstance(jds, t, o.createInstance(ylt, b2n), ()=>this.getSelectedElements(), ()=>this.hasText, ()=>this.hasActionBar)
        ], {
            horizontalScrolling: !1,
            supportDynamicHeights: !1,
            selectionNavigation: !0,
            identityProvider: {
                getId: (p)=>p?.instanceId
            },
            accessibilityProvider: o.createInstance($ds),
            smoothScrolling: i.getValue("workbench.list.smoothScrolling"),
            multipleSelectionSupport: !0,
            paddingBottom: 22,
            dnd: o.createInstance(Hds),
            openOnSingleClick: !0
        }, e, n, i, o), this._configurationService = i, this._terminalService = r, this._terminalGroupService = s, this._themeService = l, this._storageService = c, this._hoverService = d, this._hasText = !0, this._hasActionBar = !0;
        const h = [
            this._terminalGroupService.onDidChangeInstances(()=>this.refresh()),
            this._terminalGroupService.onDidChangeGroups(()=>this.refresh()),
            this._terminalGroupService.onDidShow(()=>this.refresh()),
            this._terminalGroupService.onDidChangeInstanceCapability(()=>this.refresh()),
            this._terminalService.onAnyInstanceTitleChange(()=>this.refresh()),
            this._terminalService.onAnyInstanceIconChange(()=>this.refresh()),
            this._terminalService.onAnyInstancePrimaryStatusChange(()=>this.refresh()),
            this._terminalService.onDidChangeConnectionState(()=>this.refresh()),
            this._themeService.onDidColorThemeChange(()=>this.refresh()),
            this._terminalGroupService.onDidChangeActiveInstance((p)=>{
                if (p) {
                    const g = this._terminalGroupService.instances.indexOf(p);
                    this.setSelection([
                        g
                    ]), this.reveal(g);
                }
                this.refresh();
            }),
            this._storageService.onDidChangeValue(-1, "terminal.integrated.tabs.showDetailed", this.disposables)(()=>this.refresh())
        ];
        this.disposables.add(u.onWillShutdown((p)=>{
            Nc(h), h.length = 0;
        })), this.disposables.add(Pn(()=>{
            Nc(h), h.length = 0;
        })), this.disposables.add(this.onMouseDblClick(async (p)=>{
            if (this.getFocus().length === 0) {
                const f = await this._terminalService.createTerminal({
                    location: ny.Panel
                });
                this._terminalGroupService.setActiveInstance(f), await f.focusWhenReady();
            }
            this._terminalService.getEditingTerminal()?.instanceId !== p.element?.instanceId && this._getFocusMode() === "doubleClick" && this.getFocus().length === 1 && p.element?.focus(!0);
        })), this.disposables.add(this.onMouseClick(async (p)=>{
            this._terminalService.getEditingTerminal()?.instanceId !== p.element?.instanceId && (p.browserEvent.altKey && p.element ? await this._terminalService.createTerminal({
                location: {
                    parentTerminal: p.element
                }
            }) : this._getFocusMode() === "singleClick" && this.getSelection().length <= 1 && p.element?.focus(!0));
        })), this.disposables.add(this.onContextMenu((p)=>{
            if (!p.element) {
                this.setSelection([]);
                return;
            }
            const g = this.getSelectedElements();
            (!g || !g.find((f)=>p.element === f)) && this.setFocus(p.index !== void 0 ? [
                p.index
            ] : []);
        })), this._terminalTabsSingleSelectedContextKey = ns.tabsSingularSelection.bindTo(e), this._isSplitContextKey = ns.splitTerminalTabFocused.bindTo(e), this.disposables.add(this.onDidChangeSelection((p)=>this._updateContextKey())), this.disposables.add(this.onDidChangeFocus(()=>this._updateContextKey())), this.disposables.add(this.onDidOpen(async (p)=>{
            const g = p.element;
            g && (this._terminalGroupService.setActiveInstance(g), p.editorOptions.preserveFocus || await g.focusWhenReady());
        })), this._decorationsProvider || (this._decorationsProvider = this.disposables.add(o.createInstance(Wds)), this.disposables.add(a.registerDecorationsProvider(this._decorationsProvider))), this.refresh();
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
    refresh(t = !0) {
        t && this._terminalService.isEditable(void 0) && this.domFocus(), this.splice(0, this.length, this._terminalGroupService.instances.slice());
    }
    focusHover() {
        const t = this.getSelectedElements()[0];
        t && this._hoverService.showInstantHover({
            ...u2g(t, this._storageService),
            target: this.getHTMLElement(),
            trapFocus: !0
        }, !0);
    }
    _updateContextKey() {
        this._terminalTabsSingleSelectedContextKey.set(this.getSelectedElements().length === 1);
        const t = this.getFocusedElements();
        this._isSplitContextKey.set(t.length > 0 && this._terminalGroupService.instanceIsSplit(t[0]));
    }
    layout(t, e) {
        super.layout(t, e);
        const n = e ?? this.getHTMLElement().clientWidth, i = n >= 63, r = n > 105;
        (this._hasText !== i || this._hasActionBar !== r) && (this._hasText = i, this._hasActionBar = r, this.refresh());
    }
}, Uds = Re([
    F(1, Rr),
    F(2, up),
    F(3, yi),
    F(4, Py),
    F(5, pV),
    F(6, dn),
    F(7, eye),
    F(8, Ml),
    F(9, ki),
    F(10, Fp),
    F(11, av)
], Uds), jds = class {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h, p, g, f){
        this._labels = e, this._getSelection = n, this._getHasText = i, this._getHasActionBar = r, this._instantiationService = s, this._terminalConfigurationService = o, this._terminalService = a, this._terminalGroupService = l, this._hoverService = c, this._keybindingService = u, this._listService = d, this._storageService = h, this._themeService = p, this._contextViewService = g, this._commandService = f, this.templateId = "terminal.tabs";
    }
    renderTemplate(t) {
        const e = fr(t, Tvl(".terminal-tabs-entry")), n = {}, i = new Nt, r = i.add(this._labels.create(e, {
            supportHighlights: !0,
            supportDescriptionHighlights: !0,
            supportIcons: !0,
            hoverDelegate: {
                delay: 0,
                showHover: (a)=>this._hoverService.showDelayedHover({
                        ...a,
                        actions: n.hoverActions,
                        target: e,
                        appearance: {
                            showPointer: !0
                        },
                        position: {
                            hoverPosition: this._terminalConfigurationService.config.tabs.location === "left" ? Bu.RIGHT : Bu.LEFT
                        }
                    }, {
                        groupId: "terminal-tabs-list"
                    })
            }
        })), s = fr(r.element, Tvl(".actions")), o = i.add(new oR(s, {
            actionRunner: i.add(new Nds),
            actionViewItemProvider: (a, l)=>a instanceof n6 ? i.add(this._instantiationService.createInstance(kHe, a, {
                    hoverDelegate: l.hoverDelegate
                })) : void 0
        }));
        return {
            element: e,
            label: r,
            actionBar: o,
            context: n,
            elementDisposables: new Nt,
            templateDisposables: i
        };
    }
    renderElement(t, e, n) {
        const i = this._getHasText(), r = this._getHasActionBar(), s = this._terminalGroupService.getGroupForInstance(t);
        if (!s) throw new Error(`Could not find group for instance "${t.instanceId}"`);
        n.element.classList.toggle("has-text", i), n.element.classList.toggle("is-active", this._terminalGroupService.activeInstance === t), n.element.classList.toggle("terminal-contribution-needs-attention", t.hasContributedAttention);
        let o = "";
        if (s.terminalInstances.length > 1) {
            const g = s.terminalInstances.indexOf(t);
            g === 0 ? o = "\u250C " : g === s.terminalInstances.length - 1 ? o = "\u2514 " : o = "\u251C ";
        }
        const a = u2g(t, this._storageService);
        n.context.hoverActions = a.actions;
        const l = _2n(t, this._themeService.getColorTheme().type), c = this._instantiationService.invokeFunction(kvl, t);
        let u = "";
        if (i) this.fillActionBar(t, n), u = o, t.icon && (u += `$(${c}) ${t.title}`);
        else {
            const g = t.statusList.primary;
            g && g.severity > Ua.Ignore ? u = `${o}$(${g.icon?.id || c})` : u = `${o}$(${c})`;
        }
        r || n.actionBar.clear(), n.elementDisposables.add(li(n.element, Pr.AUXCLICK, (g)=>{
            g.stopImmediatePropagation(), g.button === 1 && this._terminalService.safeDisposeTerminal(t);
        }));
        const d = [], h = kVe(t);
        h && d.push(h), l && d.push(...l), (t.hasContributedActions || t.hasContributedAttention) && d.push("terminal-contribution-icon"), n.label.setResource({
            resource: t.resource,
            name: u,
            description: i ? t.description : void 0
        }, {
            fileDecorations: {
                colors: !0,
                badges: i
            },
            title: {
                markdown: a.content,
                markdownNotSupportedFallback: void 0
            },
            extraClasses: d
        });
        const p = this._terminalService.getEditableData(t);
        n.label.element.classList.toggle("editable-tab", !!p), p && (n.elementDisposables.add(this._renderInputBox(n.label.element.querySelector(".monaco-icon-label-container"), t, p)), n.actionBar.clear());
    }
    _renderInputBox(t, e, n) {
        const i = e.title || "", r = new Pvn(t, this._contextViewService, {
            validationOptions: {
                validation: (l)=>{
                    const c = n.validationMessage(l);
                    return !c || c.severity !== Ua.Error ? null : {
                        content: c.content,
                        formatContent: !0,
                        type: Eoe.ERROR
                    };
                }
            },
            ariaLabel: D(10365, null),
            inputBoxStyles: rRe
        });
        r.element.style.height = "22px", r.value = i, r.focus(), r.select({
            start: 0,
            end: i.length
        });
        const s = mQ((l, c)=>{
            r.element.style.display = "none";
            const u = r.value;
            Nc(a), r.element.remove(), c && n.onFinish(u, l);
        }), o = ()=>{
            if (r.isInputValid()) {
                const l = n.validationMessage(r.value);
                l ? r.showMessage({
                    content: l.content,
                    formatContent: !0,
                    type: l.severity === Ua.Info ? Eoe.INFO : l.severity === Ua.Warning ? Eoe.WARNING : Eoe.ERROR
                }) : r.hideMessage();
            }
        };
        o();
        const a = [
            r,
            n0(r.inputElement, Pr.KEY_DOWN, (l)=>{
                l.stopPropagation(), l.equals(Ze.Enter) ? s(r.isInputValid(), !0) : l.equals(Ze.Escape) && s(!1, !0);
            }),
            n0(r.inputElement, Pr.KEY_UP, (l)=>{
                o();
            }),
            li(r.inputElement, Pr.BLUR, ()=>{
                s(r.isInputValid(), !0);
            })
        ];
        return Pn(()=>{
            s(!1, !1);
        });
    }
    disposeElement(t, e, n) {
        n.elementDisposables.clear(), n.actionBar.clear();
    }
    disposeTemplate(t) {
        t.elementDisposables.dispose(), t.templateDisposables.dispose();
    }
    fillActionBar(t, e) {
        const n = [
            e.elementDisposables.add(new za("workbench.action.terminal.splitActiveTab", $f.split.short, Gn.asClassName(yt.splitHorizontal), !0, async ()=>{
                this._runForSelectionOrInstance(t, async (i)=>{
                    this._terminalService.createTerminal({
                        location: {
                            parentTerminal: i
                        }
                    });
                });
            }))
        ];
        if (t.shellLaunchConfig.tabActions) for (const i of t.shellLaunchConfig.tabActions)n.push(e.elementDisposables.add(new za(i.id, i.label, i.icon ? Gn.asClassName(i.icon) : void 0, !0, async ()=>{
            this._runForSelectionOrInstance(t, (r)=>this._commandService.executeCommand(i.id, t));
        })));
        n.push(e.elementDisposables.add(new za("workbench.action.terminal.killActiveTab", $f.kill.short, Gn.asClassName(yt.trashcan), !0, async ()=>{
            this._runForSelectionOrInstance(t, (i)=>this._terminalService.safeDisposeTerminal(i));
        }))), e.actionBar.clear();
        for (const i of n)e.actionBar.push(i, {
            icon: !0,
            label: !1,
            keybinding: this._keybindingService.lookupKeybinding(i.id)?.getLabel()
        });
    }
    _runForSelectionOrInstance(t, e) {
        const n = this._getSelection();
        if (n.includes(t)) for (const i of n)i && e(i);
        else e(t);
        this._terminalGroupService.focusTabs(), this._listService.lastFocusedList?.focusNext();
    }
}, jds = Re([
    F(5, dn),
    F(6, NJ),
    F(7, Py),
    F(8, pV),
    F(9, av),
    F(10, Al),
    F(11, up),
    F(12, ki),
    F(13, Ml),
    F(14, aL),
    F(15, nr)
], jds), $ds = class {
    constructor(t){
        this._terminalGroupService = t;
    }
    getWidgetAriaLabel() {
        return D(10366, null);
    }
    getAriaLabel(t) {
        let e = "";
        const n = this._terminalGroupService.getGroupForInstance(t);
        if (n && n.terminalInstances?.length > 1) {
            const i = n.terminalInstances.indexOf(t);
            e = D(10367, null, t.instanceId, t.title, i + 1, n.terminalInstances.length);
        } else e = D(10368, null, t.instanceId, t.title);
        return e;
    }
}, $ds = Re([
    F(0, pV)
], $ds), Hds = class extends st {
    constructor(t, e, n){
        super(), this._terminalService = t, this._terminalGroupService = e, this._listService = n, this._autoFocusDisposable = this._register(new Vn), this._primaryBackend = this._terminalService.getPrimaryBackend();
    }
    getDragURI(t) {
        return this._terminalService.getEditingTerminal()?.instanceId === t.instanceId ? null : t.resource.toString();
    }
    getDragLabel(t, e) {
        return t.length === 1 ? t[0].title : void 0;
    }
    onDragLeave() {
        this._autoFocusInstance = void 0, this._autoFocusDisposable.clear();
    }
    onDragStart(t, e) {
        if (!e.dataTransfer) return;
        const n = t.getData();
        if (!Array.isArray(n)) return;
        const i = n.filter((r)=>"instanceId" in r);
        i.length > 0 && e.dataTransfer.setData("Terminals", JSON.stringify(i.map((r)=>r.resource.toString())));
    }
    onDragOver(t, e, n, i, r) {
        if (t instanceof vGo && !mvn(r, r6.FILES, r6.RESOURCES, "Terminals", woe.FILES)) return !1;
        const s = this._autoFocusInstance !== e;
        return s && (this._autoFocusDisposable.clear(), this._autoFocusInstance = e), !e && !mvn(r, "Terminals") ? t instanceof Lyt : (s && e && (this._autoFocusDisposable.value = Ec(()=>{
            this._terminalService.setActiveInstance(e), this._autoFocusInstance = void 0;
        }, 500)), {
            feedback: n ? [
                n
            ] : void 0,
            accept: !0,
            effect: {
                type: mGo.Move,
                position: gGo.Over
            }
        });
    }
    async drop(t, e, n, i, r) {
        this._autoFocusDisposable.clear(), this._autoFocusInstance = void 0;
        let s;
        const o = [], a = p2g(r);
        if (a) for (const c of a){
            const u = this._terminalService.getInstanceFromResource(c);
            if (u) Array.isArray(s) ? s.push(u) : s = [
                u
            ], this._terminalService.moveToTerminalView(u);
            else if (this._primaryBackend) {
                const d = y2n(c);
                d.instanceId && o.push(this._primaryBackend.requestDetachInstance(d.workspaceId, d.instanceId));
            }
        }
        if (o.length) {
            let c = await Promise.all(o);
            c = c.filter((d)=>d !== void 0);
            let u;
            for (const d of c)u = await this._terminalService.createTerminal({
                config: {
                    attachPersistentProcess: d
                }
            });
            u && this._terminalService.setActiveInstance(u);
            return;
        }
        if (s === void 0) {
            if (!(t instanceof Lyt)) {
                this._handleExternalDrop(e, r);
                return;
            }
            const c = t.getData();
            if (!c || !Array.isArray(c)) return;
            s = [];
            for (const u of c)"instanceId" in u && s.push(u);
        }
        if (!e) {
            this._terminalGroupService.moveGroupToEnd(s), this._terminalService.setActiveInstance(s[0]);
            const c = this._terminalGroupService.getGroupForInstance(s[0]);
            if (c) {
                const u = this._terminalGroupService.groups.indexOf(c);
                this._listService.lastFocusedList?.setSelection([
                    u
                ]);
            }
            return;
        }
        this._terminalGroupService.moveGroup(s, e), this._terminalService.setActiveInstance(s[0]);
        const l = this._terminalGroupService.getGroupForInstance(s[0]);
        if (l) {
            const c = this._terminalGroupService.groups.indexOf(l);
            this._listService.lastFocusedList?.setSelection([
                c
            ]);
        }
    }
    async _handleExternalDrop(t, e) {
        if (!t || !e.dataTransfer) return;
        let n;
        const i = e.dataTransfer.getData(r6.RESOURCES);
        i && (n = rt.parse(JSON.parse(i)[0]));
        const r = e.dataTransfer.getData(woe.FILES);
        !n && r && (n = rt.file(JSON.parse(r)[0])), !n && e.dataTransfer.files.length > 0 && koe(e.dataTransfer.files[0]) && (n = rt.file(koe(e.dataTransfer.files[0]))), n && (this._terminalService.setActiveInstance(t), t.focus(), await t.sendPath(n, !1));
    }
}, Hds = Re([
    F(0, Py),
    F(1, pV),
    F(2, up)
], Hds), Wds = class extends st {
    constructor(t){
        super(), this._terminalService = t, this.label = D(10369, null), this._onDidChange = this._register(new tt), this.onDidChange = this._onDidChange.event, this._register(this._terminalService.onAnyInstancePrimaryStatusChange((e)=>this._onDidChange.fire([
                e.resource
            ])));
    }
    provideDecorations(t) {
        if (t.scheme !== Ot.vscodeTerminal) return;
        const e = this._terminalService.getInstanceFromResource(t);
        if (!e) return;
        const n = e?.statusList?.primary;
        if (n?.icon) return {
            color: NMk(n.severity),
            letter: n.icon,
            tooltip: n.tooltip
        };
    }
}, Wds = Re([
    F(0, Py)
], Wds);

}
