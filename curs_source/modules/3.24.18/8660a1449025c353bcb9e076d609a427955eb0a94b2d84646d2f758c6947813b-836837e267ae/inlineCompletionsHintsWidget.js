import { D, Di, Hg, Pn, Qe, Zm, st } from "./Iwo.js";
import { fz, r_e } from "./actionViewItems.js";
import { Kh, vu, za } from "./actions.js";
import { Db, Ft, es, n6 } from "./actions_2.js";
import { bo } from "./arrays.js";
import { Yu, qn } from "./async.js";
import { Jd } from "./autorun.js";
import { gs, yt } from "./codicons.js";
import { TEr, czo, uzo } from "./commandIds.js";
import { nr, rs } from "./commands.js";
import { Mf, pf } from "./contextView.js";
import { Hi, Rr } from "./contextkey.js";
import { Hn } from "./dom_2.js";
import { ent } from "./hotReloadHelpers.js";
import { b_ } from "./iconRegistry.js";
import { kOy } from "./inlineCompletionsHintsWidget.css";
import { It, dn } from "./instantiation.js";
import { Al, ru } from "./keybinding.js";
import { OBt, Vyt, Xqo } from "./keybindingLabel.js";
import { Iy, qAe } from "./languages.js";
import { kBt } from "./markdownRenderer.js";
import { MC, kHe } from "./menuEntryActionViewItem.js";
import { R_ } from "./n.js";
import { Bt } from "./nls.js";
import { Jc } from "./observable.js";
import { er, jc } from "./position.js";
import { Uv, Xv } from "./telemetry.js";
import { Gn, ta } from "./themables.js";
import { Soe, wwe } from "./toolbar_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Yv } from "./utils_10.js";
import { DI, Kde, Nsi, Stt, Zo, cnt, qa, qsi, xv } from "./ze.js";
var EEr, kVd, wVd, Ewe, CVd, TVd, IEr;
export { CVd, EEr, Ewe, IEr, TVd, kVd, wVd };
var __wakaru_xEr_initialized = false;
export function xEr() {
if (__wakaru_xEr_initialized) return;
__wakaru_xEr_initialized = true;
"use strict";
E(), Hn(), kBt(), fz(), OBt(), vu(), bo(), qn(), gs(), ent(), Qe(), Jc(), Di(), ta(), Bt(), MC(), wwe(), es(), rs(), Hi(), pf(), It(), ru(), Xv(), b_(), jc(), Iy(), TEr(), kOy(), EEr = class extends st {
    constructor(t, e, n){
        super(), this.editor = t, this.model = e, this.instantiationService = n, this.alwaysShowToolbar = Yv(this, this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(64).showToolbar === "always"), this.sessionPosition = void 0, this.position = Zo(this, (i)=>{
            const r = this.model.read(i)?.primaryGhostText.read(i);
            if (!this.alwaysShowToolbar.read(i) || !r || r.parts.length === 0) return this.sessionPosition = void 0, null;
            const s = r.parts[0].column;
            this.sessionPosition && this.sessionPosition.lineNumber !== r.lineNumber && (this.sessionPosition = void 0);
            const o = new er(r.lineNumber, Math.min(s, this.sessionPosition?.column ?? Number.MAX_SAFE_INTEGER));
            return this.sessionPosition = o, o;
        }), this._register(DI((i, r)=>{
            const s = this.model.read(i);
            if (!s || !this.alwaysShowToolbar.read(i)) return;
            const o = Kde((l, c)=>{
                const u = c.add(this.instantiationService.createInstance(Ewe.hot.read(l), this.editor, !0, this.position, s.selectedInlineCompletionIndex, s.inlineCompletionsCount, s.activeCommands, s.warning, ()=>{}));
                return t.addContentWidget(u), c.add(Pn(()=>t.removeContentWidget(u))), c.add(Jd((d)=>{
                    this.position.read(d) && s.lastTriggerKind.read(d) !== qAe.Explicit && s.triggerExplicitly();
                })), u;
            }), a = Stt(this, (l, c)=>!!this.position.read(l) || !!c);
            r.add(Jd((l)=>{
                a.read(l) && o.read(l);
            }));
        }));
    }
}, EEr = Re([
    F(2, dn)
], EEr), kVd = qa("inline-suggestion-hints-next", yt.chevronRight, D(1348, null)), wVd = qa("inline-suggestion-hints-previous", yt.chevronLeft, D(1349, null)), Ewe = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d, h){
        super(), this.editor = t, this.withBorder = e, this._position = n, this._currentSuggestionIdx = i, this._suggestionCount = r, this._extraCommands = s, this._warning = o, this._relayout = a, this._commandService = l, this.keybindingService = u, this._contextKeyService = d, this._menuService = h, this.id = `InlineSuggestionHintsContentWidget${Ewe.id++}`, this.allowEditorOverflow = !0, this.suppressMouseDown = !1, this._warningMessageContentNode = Kde((p, g)=>{
            const f = this._warning.read(p);
            return f ? typeof f.message == "string" ? f.message : g.add(qsi(f.message)).element : void 0;
        }), this._warningMessageNode = R_.div({
            class: "warningMessage",
            style: {
                maxWidth: 400,
                margin: 4,
                marginBottom: 4,
                display: Zo((p)=>this._warning.read(p) ? "block" : "none")
            }
        }, [
            this._warningMessageContentNode
        ]).keepUpdated(this._store), this.nodes = xv("div.inlineSuggestionsHints", {
            className: this.withBorder ? "monaco-hover monaco-hover-content" : ""
        }, [
            this._warningMessageNode.element,
            xv("div@toolBar")
        ]), this.previousAction = this._register(this.createCommandAction(czo, D(1351, null), Gn.asClassName(wVd))), this.availableSuggestionCountAction = this._register(new za("inlineSuggestionHints.availableSuggestionCount", "", void 0, !1)), this.nextAction = this._register(this.createCommandAction(uzo, D(1352, null), Gn.asClassName(kVd))), this.inlineCompletionsActionsMenus = this._register(this._menuService.createMenu(Ft.InlineCompletionsActions, this._contextKeyService)), this.clearAvailableSuggestionCountLabelDebounced = this._register(new Yu(()=>{
            this.availableSuggestionCountAction.label = "";
        }, 100)), this.disableButtonsDebounced = this._register(new Yu(()=>{
            this.previousAction.enabled = this.nextAction.enabled = !1;
        }, 100)), this._register(Jd((p)=>{
            this._warningMessageContentNode.read(p), this._warningMessageNode.readEffect(p), this._relayout();
        })), this.toolBar = this._register(c.createInstance(IEr, this.nodes.toolBar, Ft.InlineSuggestionToolbar, {
            menuOptions: {
                renderShortTitle: !0
            },
            toolbarOptions: {
                primaryGroup: (p)=>p.startsWith("primary")
            },
            actionViewItemProvider: (p, g)=>{
                if (p instanceof n6) return c.createInstance(TVd, p, void 0);
                if (p === this.availableSuggestionCountAction) {
                    const f = new CVd(void 0, p, {
                        label: !0,
                        icon: !1
                    });
                    return f.setClass("availableSuggestionCount"), f;
                }
            },
            telemetrySource: "InlineSuggestionToolbar"
        })), this.toolBar.setPrependedPrimaryActions([
            this.previousAction,
            this.availableSuggestionCountAction,
            this.nextAction
        ]), this._register(this.toolBar.onDidChangeDropdownVisibility((p)=>{
            Ewe._dropDownVisible = p;
        })), this._register(Jd((p)=>{
            this._position.read(p), this.editor.layoutContentWidget(this);
        })), this._register(Jd((p)=>{
            const g = this._suggestionCount.read(p), f = this._currentSuggestionIdx.read(p);
            g !== void 0 ? (this.clearAvailableSuggestionCountLabelDebounced.cancel(), this.availableSuggestionCountAction.label = `${f + 1}/${g}`) : this.clearAvailableSuggestionCountLabelDebounced.schedule(), g !== void 0 && g > 1 ? (this.disableButtonsDebounced.cancel(), this.previousAction.enabled = this.nextAction.enabled = !0) : this.disableButtonsDebounced.schedule();
        })), this._register(Jd((p)=>{
            const f = this._extraCommands.read(p).map((_)=>({
                    class: void 0,
                    id: _.id,
                    enabled: !0,
                    tooltip: _.tooltip || "",
                    label: _.title,
                    run: (b)=>this._commandService.executeCommand(_.id)
                }));
            for (const [_, b] of this.inlineCompletionsActionsMenus.getActions())for (const y of b)y instanceof n6 && f.push(y);
            f.length > 0 && f.unshift(new Kh), this.toolBar.setAdditionalSecondaryActions(f);
        }));
    }
    static get dropDownVisible() {
        return this._dropDownVisible;
    }
    createCommandAction(t, e, n) {
        const i = new za(t, e, n, !0, ()=>this._commandService.executeCommand(t)), r = this.keybindingService.lookupKeybinding(t, this._contextKeyService);
        let s = e;
        return r && (s = D(1350, null, e, r.getLabel())), i.tooltip = s, i;
    }
    getId() {
        return this.id;
    }
    getDomNode() {
        return this.nodes.root;
    }
    getPosition() {
        return {
            position: this._position.get(),
            preference: [
                1,
                2
            ],
            positionAffinity: 3
        };
    }
}, Ewe.hot = Nsi(Ewe), Ewe._dropDownVisible = !1, Ewe.id = 0, Ewe = Re([
    F(8, nr),
    F(9, dn),
    F(10, Al),
    F(11, Rr),
    F(12, Db)
], Ewe), CVd = class extends r_e {
    constructor(){
        super(...arguments), this._className = void 0;
    }
    setClass(t) {
        this._className = t;
    }
    render(t) {
        super.render(t), this._className && t.classList.add(this._className);
    }
    updateTooltip() {}
}, TVd = class extends kHe {
    updateLabel() {
        const t = this._keybindingService.lookupKeybinding(this._action.id, this._contextKeyService, !0);
        if (!t) return super.updateLabel();
        if (this.label) {
            const e = xv("div.keybinding").root;
            this._register(new Vyt(e, Hg, {
                disableTitle: !0,
                ...Xqo
            })).set(t), this.label.textContent = this._action.label, this.label.appendChild(e), this.label.classList.add("inlineSuggestionStatusBarItemLabel");
        }
    }
    updateTooltip() {}
}, IEr = class extends Soe {
    constructor(t, e, n, i, r, s, o, a, l){
        super(t, {
            resetMenu: e,
            ...n
        }, i, r, s, o, a, l), this.menuId = e, this.options2 = n, this.menuService = i, this.contextKeyService = r, this.menu = this._store.add(this.menuService.createMenu(this.menuId, this.contextKeyService, {
            emitEventsForSubmenuChanges: !0
        })), this.additionalActions = [], this.prependedPrimaryActions = [], this.additionalPrimaryActions = [], this._store.add(this.menu.onDidChange(()=>this.updateToolbar())), this.updateToolbar();
    }
    updateToolbar() {
        const { primary: t, secondary: e } = cnt(this.menu.getActions(this.options2?.menuOptions), this.options2?.toolbarOptions?.primaryGroup, this.options2?.toolbarOptions?.shouldInlineSubmenu, this.options2?.toolbarOptions?.useSeparatorsInPrimaryActions);
        e.push(...this.additionalActions), t.unshift(...this.prependedPrimaryActions), t.push(...this.additionalPrimaryActions), this.setActions(t, e);
    }
    setPrependedPrimaryActions(t) {
        Zm(this.prependedPrimaryActions, t, (e, n)=>e === n) || (this.prependedPrimaryActions = t, this.updateToolbar());
    }
    setAdditionalPrimaryActions(t) {
        Zm(this.additionalPrimaryActions, t, (e, n)=>e === n) || (this.additionalPrimaryActions = t, this.updateToolbar());
    }
    setAdditionalSecondaryActions(t) {
        Zm(this.additionalActions, t, (e, n)=>e === n) || (this.additionalActions = t, this.updateToolbar());
    }
}, IEr = Re([
    F(3, Db),
    F(4, Rr),
    F(5, Mf),
    F(6, Al),
    F(7, nr),
    F(8, Uv)
], IEr);

}
