import { D, Di, Gt, Nt, Qe, Zm, ddn, st, tY, tt } from "./Iwo.js";
import { YNk, sPn } from "./Ycg.js";
import { bo } from "./arrays.js";
import { ZE, qn } from "./async.js";
import { gs, yt } from "./codicons.js";
import { or, yi } from "./configuration.js";
import { Hi, cn, mt } from "./contextkey.js";
import { Hn, Pr } from "./dom_2.js";
import { av, dnt, gS } from "./hover.js";
import { Ma, Ze } from "./keyCodes.js";
import { nT, rv } from "./keyboardEvent.js";
import { Bt } from "./nls.js";
import { H1l } from "./quickInput.css";
import { Gu, Mqo, hvn, i0, kW, vz } from "./quickInput.js";
import { sKg } from "./quickInputUtils.js";
import { Ua, ob } from "./severity_2.js";
import { Gn, ta } from "./themables.js";
import { M5e, che } from "./toggle.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $u, Zte, hE, li } from "./ze.js";
var W1l, oKg, aKg, lKg, Qps, G1l, cKg, q1l, uKg, dKg, LKt, z1l, VRi, V1l, oPn, hKg, pKg, Jps;
export { G1l, Jps, LKt, Qps, V1l, VRi, W1l, aKg, cKg, dKg, hKg, lKg, oKg, oPn, pKg, q1l, uKg, z1l };
var __wakaru_KRi_initialized = false;
export function KRi() {
if (__wakaru_KRi_initialized) return;
__wakaru_KRi_initialized = true;
"use strict";
E(), Hn(), nT(), M5e(), bo(), qn(), gs(), Gt(), Ma(), Qe(), Di(), ob(), ta(), H1l(), Bt(), Gu(), sKg(), or(), gS(), Hi(), W1l = "inQuickInput", oKg = new cn(W1l, !1, D(2190, null)), aKg = mt.has(W1l), lKg = "quickInputAlignment", Qps = new cn(lKg, "top", D(2191, null)), G1l = "quickInputType", cKg = new cn(G1l, void 0, D(2192, null)), q1l = "cursorAtEndOfQuickInputBox", uKg = new cn(q1l, !1, D(2193, null)), dKg = mt.has(q1l), LKt = {
    iconClass: Gn.asClassName(yt.quickInputBack),
    tooltip: D(2194, null),
    handle: -1
}, z1l = class RPb extends st {
    constructor(e){
        super(), this.ui = e, this._widgetUpdated = !1, this.visible = !1, this._enabled = !0, this._busy = !1, this._ignoreFocusOut = !1, this._leftButtons = [], this._rightButtons = [], this._inlineButtons = [], this._inputButtons = [], this.buttonsUpdated = !1, this._toggles = [], this.togglesUpdated = !1, this.noValidationMessage = RPb.noPromptMessage, this._severity = Ua.Ignore, this.onDidTriggerButtonEmitter = this._register(new tt), this.onDidHideEmitter = this._register(new tt), this.onWillHideEmitter = this._register(new tt), this.onDisposeEmitter = this._register(new tt), this.visibleDisposables = this._register(new Nt), this.onDidTriggerButton = this.onDidTriggerButtonEmitter.event, this.onDidHide = this.onDidHideEmitter.event, this.onWillHide = this.onWillHideEmitter.event, this.onDispose = this.onDisposeEmitter.event;
    }
    get title() {
        return this._title;
    }
    set title(e) {
        this._title = e, this.update();
    }
    get description() {
        return this._description;
    }
    set description(e) {
        this._description = e, this.update();
    }
    get widget() {
        return this._widget;
    }
    set widget(e) {
        $u(e) && this._widget !== e && (this._widget = e, this._widgetUpdated = !0, this.update());
    }
    get step() {
        return this._steps;
    }
    set step(e) {
        this._steps = e, this.update();
    }
    get totalSteps() {
        return this._totalSteps;
    }
    set totalSteps(e) {
        this._totalSteps = e, this.update();
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(e) {
        this._enabled = e, this.update();
    }
    get contextKey() {
        return this._contextKey;
    }
    set contextKey(e) {
        this._contextKey = e, this.update();
    }
    get busy() {
        return this._busy;
    }
    set busy(e) {
        this._busy = e, this.update();
    }
    get ignoreFocusOut() {
        return this._ignoreFocusOut;
    }
    set ignoreFocusOut(e) {
        const n = this._ignoreFocusOut !== e && !tY;
        this._ignoreFocusOut = e && !tY, n && this.update();
    }
    get titleButtons() {
        return this._leftButtons.length ? [
            ...this._leftButtons,
            this._rightButtons
        ] : this._rightButtons;
    }
    get buttons() {
        return [
            ...this._leftButtons,
            ...this._rightButtons,
            ...this._inlineButtons,
            ...this._inputButtons
        ];
    }
    set buttons(e) {
        const n = [], i = [], r = [], s = [];
        for (const o of e)if (o === LKt) n.push(o);
        else switch(o.location){
            case hvn.Inline:
                r.push(o);
                break;
            case hvn.Input:
                s.push(o);
                break;
            default:
                i.push(o);
                break;
        }
        this._leftButtons = n, this._rightButtons = i, this._inlineButtons = r, this._inputButtons = s, this.buttonsUpdated = !0, this.update();
    }
    get toggles() {
        return this._toggles;
    }
    set toggles(e) {
        this._toggles = e ?? [], this.togglesUpdated = !0, this.update();
    }
    get validationMessage() {
        return this._validationMessage;
    }
    set validationMessage(e) {
        this._validationMessage = e, this.update();
    }
    get severity() {
        return this._severity;
    }
    set severity(e) {
        this._severity = e, this.update();
    }
    show() {
        this.visible || (this.visibleDisposables.add(this.ui.onDidTriggerButton((e)=>{
            this.buttons.indexOf(e) !== -1 && this.onDidTriggerButtonEmitter.fire(e);
        })), this.ui.show(this), this.visible = !0, this._lastValidationMessage = void 0, this._lastSeverity = void 0, this.buttons.length && (this.buttonsUpdated = !0), this.toggles.length && (this.togglesUpdated = !0), this.update());
    }
    hide() {
        this.visible && this.ui.hide();
    }
    didHide(e = vz.Other) {
        this.visible = !1, this.visibleDisposables.clear(), this.onDidHideEmitter.fire({
            reason: e
        });
    }
    willHide(e = vz.Other) {
        this.onWillHideEmitter.fire({
            reason: e
        });
    }
    update() {
        if (!this.visible) return;
        const e = this.getTitle();
        e && this.ui.title.textContent !== e ? this.ui.title.textContent = e : !e && this.ui.title.innerHTML !== "&nbsp;" && (this.ui.title.innerText = "\xA0");
        const n = this.getDescription();
        if (this.ui.description1.textContent !== n && (this.ui.description1.textContent = n), this.ui.description2.textContent !== n && (this.ui.description2.textContent = n), this._widgetUpdated && (this._widgetUpdated = !1, this._widget ? hE(this.ui.widget, this._widget) : hE(this.ui.widget)), this.busy && !this.busyDelay && (this.busyDelay = new ZE, this.busyDelay.setIfNotSet(()=>{
            this.visible && this.ui.progressBar.infinite();
        }, 800)), !this.busy && this.busyDelay && (this.ui.progressBar.stop(), this.busyDelay.cancel(), this.busyDelay = void 0), this.buttonsUpdated) {
            this.buttonsUpdated = !1, this.ui.leftActionBar.clear();
            const r = this._leftButtons.map((l, c)=>sPn(l, `id-${c}`, async ()=>this.onDidTriggerButtonEmitter.fire(l)));
            this.ui.leftActionBar.push(r, {
                icon: !0,
                label: !1
            }), this.ui.rightActionBar.clear();
            const s = this._rightButtons.map((l, c)=>sPn(l, `id-${c}`, async ()=>this.onDidTriggerButtonEmitter.fire(l)));
            this.ui.rightActionBar.push(s, {
                icon: !0,
                label: !1
            }), this.ui.inlineActionBar.clear();
            const o = this._inlineButtons.map((l, c)=>sPn(l, `id-${c}`, async ()=>this.onDidTriggerButtonEmitter.fire(l)));
            this.ui.inlineActionBar.push(o, {
                icon: !0,
                label: !1
            }), this.ui.inputLeftActionBar.clear();
            const a = this._inputButtons.map((l, c)=>sPn(l, `id-${c}`, async ()=>this.onDidTriggerButtonEmitter.fire(l)));
            this.ui.inputLeftActionBar.push(a, {
                icon: !0,
                label: !1
            });
        }
        if (this.togglesUpdated) {
            this.togglesUpdated = !1;
            const r = this.toggles?.filter((s)=>s instanceof che) ?? [];
            this.ui.inputBox.toggles = r;
        }
        this.ui.ignoreFocusOut = this.ignoreFocusOut, this.ui.setEnabled(this.enabled), this.ui.setContextKey(this.contextKey);
        const i = this.validationMessage || this.noValidationMessage;
        this._lastValidationMessage !== i && (this._lastValidationMessage = i, hE(this.ui.message), YNk(i, this.ui.message, {
            callback: (r)=>{
                this.ui.linkOpenerDelegate(r);
            },
            disposables: this.visibleDisposables
        })), this._lastSeverity !== this.severity && (this._lastSeverity = this.severity, this.showMessageDecoration(this.severity));
    }
    getTitle() {
        return this.title && this.step ? `${this.title} (${this.getSteps()})` : this.title ? this.title : this.step ? this.getSteps() : "";
    }
    getDescription() {
        return this.description || "";
    }
    getSteps() {
        return this.step && this.totalSteps ? D(2196, null, this.step, this.totalSteps) : this.step ? String(this.step) : "";
    }
    showMessageDecoration(e) {
        if (this.ui.inputBox.showDecoration(e), e !== Ua.Ignore) {
            const n = this.ui.inputBox.stylesForType(e);
            this.ui.message.style.color = n.foreground ? `${n.foreground}` : "", this.ui.message.style.backgroundColor = n.background ? `${n.background}` : "", this.ui.message.style.border = n.border ? `1px solid ${n.border}` : "", this.ui.message.style.marginBottom = "-2px";
        } else this.ui.message.style.color = "", this.ui.message.style.backgroundColor = "", this.ui.message.style.border = "", this.ui.message.style.marginBottom = "";
    }
    dispose() {
        this.hide(), this.onDisposeEmitter.fire(), super.dispose();
    }
}, z1l.noPromptMessage = D(2195, null), VRi = z1l, V1l = class PPb extends VRi {
    constructor(){
        super(...arguments), this._value = "", this.onDidChangeValueEmitter = this._register(new tt), this.onWillAcceptEmitter = this._register(new tt), this.onDidAcceptEmitter = this._register(new tt), this.onDidCustomEmitter = this._register(new tt), this._items = [], this.itemsUpdated = !1, this._canSelectMany = !1, this._canAcceptInBackground = !1, this._matchOnDescription = !1, this._matchOnDetail = !1, this._matchOnLabel = !0, this._matchOnLabelMode = "fuzzy", this._sortByLabel = !0, this._keepScrollPosition = !1, this._itemActivation = kW.FIRST, this._activeItems = [], this.activeItemsUpdated = !1, this.activeItemsToConfirm = [], this.onDidChangeActiveEmitter = this._register(new tt), this._selectedItems = [], this.selectedItemsUpdated = !1, this.selectedItemsToConfirm = [], this.onDidChangeSelectionEmitter = this._register(new tt), this.onDidTriggerItemButtonEmitter = this._register(new tt), this.onDidTriggerSeparatorButtonEmitter = this._register(new tt), this.valueSelectionUpdated = !0, this._ok = "default", this._customButton = !1, this._focusEventBufferer = new ddn, this.type = "quickPick", this.filterValue = (e)=>e, this.onDidChangeValue = this.onDidChangeValueEmitter.event, this.onWillAccept = this.onWillAcceptEmitter.event, this.onDidAccept = this.onDidAcceptEmitter.event, this.onDidCustom = this.onDidCustomEmitter.event, this.onDidChangeActive = this.onDidChangeActiveEmitter.event, this.onDidChangeSelection = this.onDidChangeSelectionEmitter.event, this.onDidTriggerItemButton = this.onDidTriggerItemButtonEmitter.event, this.onDidTriggerSeparatorButton = this.onDidTriggerSeparatorButtonEmitter.event;
    }
    onKeyDown(e) {
        return this.ui.inputBox.onKeyDown((n)=>{
            e(n.browserEvent);
        });
    }
    get quickNavigate() {
        return this._quickNavigate;
    }
    set quickNavigate(e) {
        this._quickNavigate = e, this.update();
    }
    get value() {
        return this._value;
    }
    set value(e) {
        this.doSetValue(e);
    }
    doSetValue(e, n) {
        this._value !== e && (this._value = e, n || this.update(), this.visible && this.ui.list.filter(this.filterValue(this._value)) && this.trySelectFirst(), this.onDidChangeValueEmitter.fire(this._value));
    }
    set ariaLabel(e) {
        this._ariaLabel = e, this.update();
    }
    get ariaLabel() {
        return this._ariaLabel;
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(e) {
        this._placeholder = e, this.update();
    }
    get items() {
        return this._items;
    }
    get scrollTop() {
        return this.ui.list.scrollTop;
    }
    set scrollTop(e) {
        this.ui.list.scrollTop = e;
    }
    set items(e) {
        this._items = e, this.itemsUpdated = !0, this.update();
    }
    get canSelectMany() {
        return this._canSelectMany;
    }
    set canSelectMany(e) {
        this._canSelectMany = e, this.update();
    }
    get canAcceptInBackground() {
        return this._canAcceptInBackground;
    }
    set canAcceptInBackground(e) {
        this._canAcceptInBackground = e;
    }
    get matchOnDescription() {
        return this._matchOnDescription;
    }
    set matchOnDescription(e) {
        this._matchOnDescription = e, this.update();
    }
    get matchOnDetail() {
        return this._matchOnDetail;
    }
    set matchOnDetail(e) {
        this._matchOnDetail = e, this.update();
    }
    get matchOnLabel() {
        return this._matchOnLabel;
    }
    set matchOnLabel(e) {
        this._matchOnLabel = e, this.update();
    }
    get matchOnLabelMode() {
        return this._matchOnLabelMode;
    }
    set matchOnLabelMode(e) {
        this._matchOnLabelMode = e, this.update();
    }
    get sortByLabel() {
        return this._sortByLabel;
    }
    set sortByLabel(e) {
        this._sortByLabel = e, this.update();
    }
    get keepScrollPosition() {
        return this._keepScrollPosition;
    }
    set keepScrollPosition(e) {
        this._keepScrollPosition = e;
    }
    get itemActivation() {
        return this._itemActivation;
    }
    set itemActivation(e) {
        this._itemActivation = e;
    }
    get activeItems() {
        return this._activeItems;
    }
    set activeItems(e) {
        this._activeItems = e, this.activeItemsUpdated = !0, this.update();
    }
    get selectedItems() {
        return this._selectedItems;
    }
    set selectedItems(e) {
        this._selectedItems = e, this.selectedItemsUpdated = !0, this.update();
    }
    get keyMods() {
        return this._quickNavigate ? Mqo : this.ui.keyMods;
    }
    get valueSelection() {
        const e = this.ui.inputBox.getSelection();
        if (e) return [
            e.start,
            e.end
        ];
    }
    set valueSelection(e) {
        this._valueSelection = e, this.valueSelectionUpdated = !0, this.update();
    }
    get customButton() {
        return this._customButton;
    }
    set customButton(e) {
        this._customButton = e, this.update();
    }
    get customLabel() {
        return this._customButtonLabel;
    }
    set customLabel(e) {
        this._customButtonLabel = e, this.update();
    }
    get customHover() {
        return this._customButtonHover;
    }
    set customHover(e) {
        this._customButtonHover = e, this.update();
    }
    get ok() {
        return this._ok;
    }
    set ok(e) {
        this._ok = e, this.update();
    }
    get okLabel() {
        return this._okLabel ?? D(2198, null);
    }
    set okLabel(e) {
        this._okLabel = e, this.update();
    }
    inputHasFocus() {
        return this.visible ? this.ui.inputBox.hasFocus() : !1;
    }
    focusOnInput() {
        this.ui.inputBox.setFocus();
    }
    get hideInput() {
        return !!this._hideInput;
    }
    set hideInput(e) {
        this._hideInput = e, this.update();
    }
    get hideCountBadge() {
        return !!this._hideCountBadge;
    }
    set hideCountBadge(e) {
        this._hideCountBadge = e, this.update();
    }
    get hideCheckAll() {
        return !!this._hideCheckAll;
    }
    set hideCheckAll(e) {
        this._hideCheckAll = e, this.update();
    }
    trySelectFirst() {
        this.canSelectMany || this.ui.list.focus(i0.First);
    }
    show() {
        this.visible || (this.visibleDisposables.add(this.ui.inputBox.onDidChange((e)=>{
            this.doSetValue(e, !0);
        })), this.visibleDisposables.add(this.ui.onDidAccept(()=>{
            this.canSelectMany ? this.ui.list.getCheckedElements().length || (this._selectedItems = [], this.onDidChangeSelectionEmitter.fire(this.selectedItems)) : this.activeItems[0] && (this._selectedItems = [
                this.activeItems[0]
            ], this.onDidChangeSelectionEmitter.fire(this.selectedItems)), this.handleAccept(!1);
        })), this.visibleDisposables.add(this.ui.onDidCustom(()=>{
            this.onDidCustomEmitter.fire();
        })), this.visibleDisposables.add(this._focusEventBufferer.wrapEvent(this.ui.list.onDidChangeFocus, (e, n)=>n)((e)=>{
            this.activeItemsUpdated || this.activeItemsToConfirm !== this._activeItems && Zm(e, this._activeItems, (n, i)=>n === i) || (this._activeItems = e, this.onDidChangeActiveEmitter.fire(e));
        })), this.visibleDisposables.add(this.ui.list.onDidChangeSelection(({ items: e, event: n })=>{
            if (this.canSelectMany && !e.some((i)=>i.pickable === !1)) {
                e.length && this.ui.list.setSelectedElements([]);
                return;
            }
            this.selectedItemsToConfirm !== this._selectedItems && Zm(e, this._selectedItems, (i, r)=>i === r) || (this._selectedItems = e, this.onDidChangeSelectionEmitter.fire(e), e.length && this.handleAccept(Zte(n) && n.button === 1));
        })), this.visibleDisposables.add(this.ui.list.onChangedCheckedElements((e)=>{
            !this.canSelectMany || !this.visible || this.selectedItemsToConfirm !== this._selectedItems && Zm(e, this._selectedItems, (n, i)=>n === i) || (this._selectedItems = e, this.onDidChangeSelectionEmitter.fire(e));
        })), this.visibleDisposables.add(this.ui.list.onButtonTriggered((e)=>this.onDidTriggerItemButtonEmitter.fire(e))), this.visibleDisposables.add(this.ui.list.onSeparatorButtonTriggered((e)=>this.onDidTriggerSeparatorButtonEmitter.fire(e))), this.visibleDisposables.add(this.registerQuickNavigation()), this.valueSelectionUpdated = !0), super.show();
    }
    handleAccept(e) {
        let n = !1;
        this.onWillAcceptEmitter.fire({
            veto: ()=>n = !0
        }), n || this.onDidAcceptEmitter.fire({
            inBackground: e
        });
    }
    registerQuickNavigation() {
        return li(this.ui.container, Pr.KEY_UP, (e)=>{
            if (this.canSelectMany || !this._quickNavigate) return;
            const n = new rv(e), i = n.keyCode;
            this._quickNavigate.keybindings.some((o)=>{
                const a = o.getChords();
                return a.length > 1 ? !1 : a[0].shiftKey && i === Ze.Shift ? !(n.ctrlKey || n.altKey || n.metaKey) : !!(a[0].altKey && i === Ze.Alt || a[0].ctrlKey && i === Ze.Ctrl || a[0].metaKey && i === Ze.Meta);
            }) && (this.activeItems[0] && (this._selectedItems = [
                this.activeItems[0]
            ], this.onDidChangeSelectionEmitter.fire(this.selectedItems), this.handleAccept(!1)), this._quickNavigate = void 0);
        });
    }
    update() {
        if (!this.visible) return;
        const e = this.keepScrollPosition ? this.scrollTop : 0, n = !!this.description, i = {
            title: !!this.title || !!this.step || !!this.titleButtons.length,
            description: n,
            checkAll: this.canSelectMany && !this._hideCheckAll,
            checkBox: this.canSelectMany,
            inputBox: !this._hideInput,
            progressBar: !this._hideInput || n,
            visibleCount: !0,
            count: this.canSelectMany && !this._hideCountBadge,
            ok: this.ok === "default" ? this.canSelectMany : this.ok,
            list: !0,
            message: !!this.validationMessage,
            customButton: this.customButton,
            inputLeftActionBar: this.buttons.some((s)=>s.location === hvn.Input)
        };
        this.ui.setVisibilities(i), super.update(), this.ui.inputBox.value !== this.value && (this.ui.inputBox.value = this.value), this.valueSelectionUpdated && (this.valueSelectionUpdated = !1, this.ui.inputBox.select(this._valueSelection && {
            start: this._valueSelection[0],
            end: this._valueSelection[1]
        })), this.ui.inputBox.placeholder !== (this.placeholder || "") && (this.ui.inputBox.placeholder = this.placeholder || "");
        let r = this.ariaLabel;
        !r && i.inputBox && (r = this.placeholder || PPb.DEFAULT_ARIA_LABEL, this.title && (r += ` - ${this.title}`)), this.ui.list.ariaLabel !== r && (this.ui.list.ariaLabel = r ?? null), this.ui.list.matchOnDescription = this.matchOnDescription, this.ui.list.matchOnDetail = this.matchOnDetail, this.ui.list.matchOnLabel = this.matchOnLabel, this.ui.list.matchOnLabelMode = this.matchOnLabelMode, this.ui.list.sortByLabel = this.sortByLabel, this.itemsUpdated && (this.itemsUpdated = !1, this._focusEventBufferer.bufferEvents(()=>{
            switch(this.ui.list.setElements(this.items), this.ui.list.shouldLoop = !this.canSelectMany, this.ui.list.filter(this.filterValue(this.ui.inputBox.value)), this._itemActivation){
                case kW.NONE:
                    this._itemActivation = kW.FIRST;
                    break;
                case kW.SECOND:
                    this.ui.list.focus(i0.Second), this._itemActivation = kW.FIRST;
                    break;
                case kW.LAST:
                    this.ui.list.focus(i0.Last), this._itemActivation = kW.FIRST;
                    break;
                default:
                    this.trySelectFirst();
                    break;
            }
        })), this.ui.container.classList.contains("show-checkboxes") !== !!this.canSelectMany && (this.canSelectMany ? this.ui.list.clearFocus() : this.trySelectFirst()), this.activeItemsUpdated && (this.activeItemsUpdated = !1, this.activeItemsToConfirm = this._activeItems, this.ui.list.setFocusedElements(this.activeItems), this.activeItemsToConfirm === this._activeItems && (this.activeItemsToConfirm = null)), this.selectedItemsUpdated && (this.selectedItemsUpdated = !1, this.selectedItemsToConfirm = this._selectedItems, this.canSelectMany ? this.ui.list.setCheckedElements(this.selectedItems) : this.ui.list.setSelectedElements(this.selectedItems), this.selectedItemsToConfirm === this._selectedItems && (this.selectedItemsToConfirm = null)), this.ui.ok.label = this.okLabel || "", this.ui.customButton.label = this.customLabel || "", this.ui.customButton.element.title = this.customHover || "", i.inputBox || (this.ui.list.domFocus(), this.canSelectMany && this.ui.list.focus(i0.First)), this.keepScrollPosition && (this.scrollTop = e);
    }
    focus(e) {
        this.ui.list.focus(e), this.canSelectMany && this.ui.list.domFocus();
    }
    accept(e) {
        e && !this._canAcceptInBackground || this.activeItems[0] && (this._selectedItems = [
            this.activeItems[0]
        ], this.onDidChangeSelectionEmitter.fire(this.selectedItems), this.handleAccept(e ?? !1));
    }
}, V1l.DEFAULT_ARIA_LABEL = D(2197, null), oPn = V1l, hKg = class extends VRi {
    constructor(){
        super(...arguments), this._value = "", this.valueSelectionUpdated = !0, this._password = !1, this.onDidValueChangeEmitter = this._register(new tt), this.onDidAcceptEmitter = this._register(new tt), this.type = "inputBox", this.onDidChangeValue = this.onDidValueChangeEmitter.event, this.onDidAccept = this.onDidAcceptEmitter.event;
    }
    get value() {
        return this._value;
    }
    set value(t) {
        this._value = t || "", this.update();
    }
    get valueSelection() {
        const t = this.ui.inputBox.getSelection();
        if (t) return [
            t.start,
            t.end
        ];
    }
    set valueSelection(t) {
        this._valueSelection = t, this.valueSelectionUpdated = !0, this.update();
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(t) {
        this._placeholder = t, this.update();
    }
    get password() {
        return this._password;
    }
    set password(t) {
        this._password = t, this.update();
    }
    get prompt() {
        return this._prompt;
    }
    set prompt(t) {
        this._prompt = t, this.noValidationMessage = t ? D(2199, null, t) : VRi.noPromptMessage, this.update();
    }
    show() {
        this.visible || (this.visibleDisposables.add(this.ui.inputBox.onDidChange((t)=>{
            t !== this.value && (this._value = t, this.onDidValueChangeEmitter.fire(t));
        })), this.visibleDisposables.add(this.ui.onDidAccept(()=>this.onDidAcceptEmitter.fire())), this.valueSelectionUpdated = !0), super.show();
    }
    update() {
        if (!this.visible) return;
        this.ui.container.classList.remove("hidden-input");
        const t = {
            title: !!this.title || !!this.step || !!this.titleButtons.length,
            description: !!this.description || !!this.step,
            inputBox: !0,
            message: !0,
            progressBar: !0
        };
        this.ui.setVisibilities(t), super.update(), this.ui.inputBox.value !== this.value && (this.ui.inputBox.value = this.value), this.valueSelectionUpdated && (this.valueSelectionUpdated = !1, this.ui.inputBox.select(this._valueSelection && {
            start: this._valueSelection[0],
            end: this._valueSelection[1]
        })), this.ui.inputBox.placeholder !== (this.placeholder || "") && (this.ui.inputBox.placeholder = this.placeholder || ""), this.ui.inputBox.password !== this.password && (this.ui.inputBox.password = this.password);
    }
}, pKg = class extends VRi {
    constructor(){
        super(...arguments), this.type = "quickWidget";
    }
    update() {
        if (!this.visible) return;
        const t = {
            title: !!this.title || !!this.step || !!this.titleButtons.length,
            description: !!this.description || !!this.step
        };
        this.ui.setVisibilities(t), super.update();
    }
}, Jps = class extends dnt {
    constructor(t, e){
        super("element", void 0, (n)=>this.getOverrideOptions(n), t, e);
    }
    getOverrideOptions(t) {
        const e = ($u(t.content) ? t.content.textContent ?? "" : typeof t.content == "string" ? t.content : t.content.value).includes(`
`);
        return {
            persistence: {
                hideOnKeyDown: !1
            },
            appearance: {
                showHoverHint: e,
                skipFadeInAnimation: !0
            }
        };
    }
}, Jps = Re([
    F(0, yi),
    F(1, av)
], Jps);

}
