import { S, Se, hp, jn, nh, rn, we } from "./HVr.js";
import { ME, SD } from "./actionViewItems.js";
import { Vc, Vo, er } from "./actions.js";
import { C, Re, Zl, ei, ie, rv } from "./actions_2.js";
import { dr } from "./arrays.js";
import { ac, bn } from "./async.js";
import { Hc } from "./autorun.js";
import { Pe, _i } from "./codicons.js";
import { Fis, Ois, Ryi } from "./commandIds.js";
import { $n, vi } from "./commands.js";
import { Yo, ka } from "./contextView.js";
import { dn, xn } from "./contextkey.js";
import { en } from "./dom_2.js";
import { s5e } from "./hotReloadHelpers.js";
import { dh } from "./iconRegistry.js";
import { HSg } from "./inlineCompletionsHintsWidget.css";
import { Ze, _t } from "./instantiation.js";
import { no, qr } from "./keybinding.js";
import { $we, Dis, tfe } from "./keybindingLabel.js";
import { Hge, Wp } from "./languages.js";
import { G7 } from "./markdownRenderer.js";
import { T3, lm } from "./menuEntryActionViewItem.js";
import { ef } from "./n.js";
import { rt } from "./nls.js";
import { qa } from "./observable.js";
import { Yn, ya } from "./position.js";
import { Ds, Mwe, Pi, cu, fBe, iN, ivn, tw, uJ } from "./qIc.js";
import { $h, np } from "./telemetry.js";
import { Ft, Sr } from "./themables.js";
import { Ax, CM } from "./toolbar_2.js";
import { x } from "./tslib.es6.js";
import { qp } from "./utils_10.js";
var Dyi, R$c, D$c, Fle, M$c, P$c, Myi;
export { D$c, Dyi, Fle, M$c, Myi, P$c, R$c };
var __wakaru_Pyi_initialized = false;
export function Pyi() {
if (__wakaru_Pyi_initialized) return;
__wakaru_Pyi_initialized = true;
"use strict";
x(), en(), G7(), ME(), $we(), Vo(), dr(), bn(), _i(), s5e(), Se(), qa(), jn(), Sr(), rt(), lm(), CM(), ei(), vi(), dn(), ka(), Ze(), no(), np(), dh(), ya(), Wp(), Ryi(), HSg(), Dyi = class extends we {
    constructor(e, t, n){
        super(), this.editor = e, this.model = t, this.instantiationService = n, this.alwaysShowToolbar = qp(this, this.editor.onDidChangeConfiguration, ()=>this.editor.getOption(64).showToolbar === "always"), this.sessionPosition = void 0, this.position = Ds(this, (i)=>{
            const r = this.model.read(i)?.primaryGhostText.read(i);
            if (!this.alwaysShowToolbar.read(i) || !r || r.parts.length === 0) return this.sessionPosition = void 0, null;
            const s = r.parts[0].column;
            this.sessionPosition && this.sessionPosition.lineNumber !== r.lineNumber && (this.sessionPosition = void 0);
            const o = new Yn(r.lineNumber, Math.min(s, this.sessionPosition?.column ?? Number.MAX_SAFE_INTEGER));
            return this.sessionPosition = o, o;
        }), this._register(tw((i, r)=>{
            const s = this.model.read(i);
            if (!s || !this.alwaysShowToolbar.read(i)) return;
            const o = uJ((c, l)=>{
                const u = l.add(this.instantiationService.createInstance(Fle.hot.read(c), this.editor, !0, this.position, s.selectedInlineCompletionIndex, s.inlineCompletionsCount, s.activeCommands, s.warning, ()=>{}));
                return e.addContentWidget(u), l.add(rn(()=>e.removeContentWidget(u))), l.add(Hc((h)=>{
                    this.position.read(h) && s.lastTriggerKind.read(h) !== Hge.Explicit && s.triggerExplicitly();
                })), u;
            }), a = fBe(this, (c, l)=>!!this.position.read(c) || !!l);
            r.add(Hc((c)=>{
                a.read(c) && o.read(c);
            }));
        }));
    }
}, Dyi = ie([
    C(2, _t)
], Dyi), R$c = Pi("inline-suggestion-hints-next", Pe.chevronRight, S(1348, null)), D$c = Pi("inline-suggestion-hints-previous", Pe.chevronLeft, S(1349, null)), Fle = class extends we {
    constructor(e, t, n, i, r, s, o, a, c, l, u, h, p){
        super(), this.editor = e, this.withBorder = t, this._position = n, this._currentSuggestionIdx = i, this._suggestionCount = r, this._extraCommands = s, this._warning = o, this._relayout = a, this._commandService = c, this.keybindingService = u, this._contextKeyService = h, this._menuService = p, this.id = `InlineSuggestionHintsContentWidget${Fle.id++}`, this.allowEditorOverflow = !0, this.suppressMouseDown = !1, this._warningMessageContentNode = uJ((g, f)=>{
            const v = this._warning.read(g);
            return v ? typeof v.message == "string" ? v.message : f.add(Mwe(v.message)).element : void 0;
        }), this._warningMessageNode = ef.div({
            class: "warningMessage",
            style: {
                maxWidth: 400,
                margin: 4,
                marginBottom: 4,
                display: Ds((g)=>this._warning.read(g) ? "block" : "none")
            }
        }, [
            this._warningMessageContentNode
        ]).keepUpdated(this._store), this.nodes = cu("div.inlineSuggestionsHints", {
            className: this.withBorder ? "monaco-hover monaco-hover-content" : ""
        }, [
            this._warningMessageNode.element,
            cu("div@toolBar")
        ]), this.previousAction = this._register(this.createCommandAction(Ois, S(1351, null), Ft.asClassName(D$c))), this.availableSuggestionCountAction = this._register(new er("inlineSuggestionHints.availableSuggestionCount", "", void 0, !1)), this.nextAction = this._register(this.createCommandAction(Fis, S(1352, null), Ft.asClassName(R$c))), this.inlineCompletionsActionsMenus = this._register(this._menuService.createMenu(Re.InlineCompletionsActions, this._contextKeyService)), this.clearAvailableSuggestionCountLabelDebounced = this._register(new ac(()=>{
            this.availableSuggestionCountAction.label = "";
        }, 100)), this.disableButtonsDebounced = this._register(new ac(()=>{
            this.previousAction.enabled = this.nextAction.enabled = !1;
        }, 100)), this._register(Hc((g)=>{
            this._warningMessageContentNode.read(g), this._warningMessageNode.readEffect(g), this._relayout();
        })), this.toolBar = this._register(l.createInstance(Myi, this.nodes.toolBar, Re.InlineSuggestionToolbar, {
            menuOptions: {
                renderShortTitle: !0
            },
            toolbarOptions: {
                primaryGroup: (g)=>g.startsWith("primary")
            },
            actionViewItemProvider: (g, f)=>{
                if (g instanceof rv) return l.createInstance(P$c, g, void 0);
                if (g === this.availableSuggestionCountAction) {
                    const v = new M$c(void 0, g, {
                        label: !0,
                        icon: !1
                    });
                    return v.setClass("availableSuggestionCount"), v;
                }
            },
            telemetrySource: "InlineSuggestionToolbar"
        })), this.toolBar.setPrependedPrimaryActions([
            this.previousAction,
            this.availableSuggestionCountAction,
            this.nextAction
        ]), this._register(this.toolBar.onDidChangeDropdownVisibility((g)=>{
            Fle._dropDownVisible = g;
        })), this._register(Hc((g)=>{
            this._position.read(g), this.editor.layoutContentWidget(this);
        })), this._register(Hc((g)=>{
            const f = this._suggestionCount.read(g), v = this._currentSuggestionIdx.read(g);
            f !== void 0 ? (this.clearAvailableSuggestionCountLabelDebounced.cancel(), this.availableSuggestionCountAction.label = `${v + 1}/${f}`) : this.clearAvailableSuggestionCountLabelDebounced.schedule(), f !== void 0 && f > 1 ? (this.disableButtonsDebounced.cancel(), this.previousAction.enabled = this.nextAction.enabled = !0) : this.disableButtonsDebounced.schedule();
        })), this._register(Hc((g)=>{
            const v = this._extraCommands.read(g).map((b)=>({
                    class: void 0,
                    id: b.id,
                    enabled: !0,
                    tooltip: b.tooltip || "",
                    label: b.title,
                    run: (y)=>this._commandService.executeCommand(b.id)
                }));
            for (const [b, y] of this.inlineCompletionsActionsMenus.getActions())for (const T of y)T instanceof rv && v.push(T);
            v.length > 0 && v.unshift(new Vc), this.toolBar.setAdditionalSecondaryActions(v);
        }));
    }
    static get dropDownVisible() {
        return this._dropDownVisible;
    }
    createCommandAction(e, t, n) {
        const i = new er(e, t, n, !0, ()=>this._commandService.executeCommand(e)), r = this.keybindingService.lookupKeybinding(e, this._contextKeyService);
        let s = t;
        return r && (s = S(1350, null, t, r.getLabel())), i.tooltip = s, i;
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
}, Fle.hot = ivn(Fle), Fle._dropDownVisible = !1, Fle.id = 0, Fle = ie([
    C(8, $n),
    C(9, _t),
    C(10, qr),
    C(11, xn),
    C(12, Zl)
], Fle), M$c = class extends SD {
    constructor(){
        super(...arguments), this._className = void 0;
    }
    setClass(e) {
        this._className = e;
    }
    render(e) {
        super.render(e), this._className && e.classList.add(this._className);
    }
    updateTooltip() {}
}, P$c = class extends T3 {
    updateLabel() {
        const e = this._keybindingService.lookupKeybinding(this._action.id, this._contextKeyService, !0);
        if (!e) return super.updateLabel();
        if (this.label) {
            const t = cu("div.keybinding").root;
            this._register(new tfe(t, hp, {
                disableTitle: !0,
                ...Dis
            })).set(e), this.label.textContent = this._action.label, this.label.appendChild(t), this.label.classList.add("inlineSuggestionStatusBarItemLabel");
        }
    }
    updateTooltip() {}
}, Myi = class extends Ax {
    constructor(e, t, n, i, r, s, o, a, c){
        super(e, {
            resetMenu: t,
            ...n
        }, i, r, s, o, a, c), this.menuId = t, this.options2 = n, this.menuService = i, this.contextKeyService = r, this.menu = this._store.add(this.menuService.createMenu(this.menuId, this.contextKeyService, {
            emitEventsForSubmenuChanges: !0
        })), this.additionalActions = [], this.prependedPrimaryActions = [], this.additionalPrimaryActions = [], this._store.add(this.menu.onDidChange(()=>this.updateToolbar())), this.updateToolbar();
    }
    updateToolbar() {
        const { primary: e, secondary: t } = iN(this.menu.getActions(this.options2?.menuOptions), this.options2?.toolbarOptions?.primaryGroup, this.options2?.toolbarOptions?.shouldInlineSubmenu, this.options2?.toolbarOptions?.useSeparatorsInPrimaryActions);
        t.push(...this.additionalActions), e.unshift(...this.prependedPrimaryActions), e.push(...this.additionalPrimaryActions), this.setActions(e, t);
    }
    setPrependedPrimaryActions(e) {
        nh(this.prependedPrimaryActions, e, (t, n)=>t === n) || (this.prependedPrimaryActions = e, this.updateToolbar());
    }
    setAdditionalPrimaryActions(e) {
        nh(this.additionalPrimaryActions, e, (t, n)=>t === n) || (this.additionalPrimaryActions = e, this.updateToolbar());
    }
    setAdditionalSecondaryActions(e) {
        nh(this.additionalActions, e, (t, n)=>t === n) || (this.additionalActions = e, this.updateToolbar());
    }
}, Myi = ie([
    C(3, Zl),
    C(4, xn),
    C(5, Yo),
    C(6, qr),
    C(7, $n),
    C(8, $h)
], Myi);

}
