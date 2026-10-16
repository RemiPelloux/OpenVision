import { D, Di, Hg, Qe, st } from "./Iwo.js";
import { Gzd } from "./actionWidget.css";
import { El, yo } from "./cancellation.js";
import { gs, yt } from "./codicons.js";
import { Ap } from "./colorRegistry.js";
import { aL, pf } from "./contextView.js";
import { CM, MBt } from "./defaultStyles.js";
import { Hn, ws } from "./dom_2.js";
import { Al, ru } from "./keybinding.js";
import { OBt, Vyt } from "./keybindingLabel.js";
import { UD, UI } from "./layoutService.js";
import { F5, nRe } from "./listWidget.js";
import { Bt } from "./nls.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { L5d, WLy, Xa, qzd } from "./ze.js";
var Zqo, Qqo, zzd, hEr, Vzd, Jqo, pEr;
export { Jqo, Qqo, Vzd, Zqo, hEr, pEr, zzd };
var __wakaru_GLy_initialized = false;
export function GLy() {
if (__wakaru_GLy_initialized) return;
__wakaru_GLy_initialized = true;
"use strict";
E(), Hn(), OBt(), nRe(), yo(), gs(), Qe(), Di(), ta(), Gzd(), Bt(), pf(), ru(), CM(), Ap(), UD(), Zqo = "acceptSelectedCodeAction", Qqo = "previewSelectedCodeAction", zzd = class {
    get templateId() {
        return "header";
    }
    renderTemplate(t) {
        t.classList.add("group-header");
        const e = document.createElement("span");
        return t.append(e), {
            container: t,
            text: e
        };
    }
    renderElement(t, e, n) {
        n.text.textContent = t.group?.title ?? "";
    }
    disposeTemplate(t) {}
}, hEr = class {
    constructor(t, e){
        this._supportsPreview = t, this._keybindingService = e;
    }
    get templateId() {
        return "action";
    }
    renderTemplate(t) {
        t.classList.add(this.templateId);
        const e = document.createElement("div");
        e.className = "icon", t.append(e);
        const n = document.createElement("span");
        n.className = "title", t.append(n);
        const i = new Vyt(t, Hg);
        return {
            container: t,
            icon: e,
            text: n,
            keybinding: i
        };
    }
    renderElement(t, e, n) {
        if (t.group?.icon ? (n.icon.className = Gn.asClassName(t.group.icon), t.group.icon.color && (n.icon.style.color = Xa(t.group.icon.color.id))) : (n.icon.className = Gn.asClassName(yt.lightBulb), n.icon.style.color = "var(--vscode-editorLightBulb-foreground)"), !t.item || !t.label) return;
        L5d(!t.hideIcon, n.icon), n.text.textContent = qzd(t.label), n.keybinding.set(t.keybinding), L5d(!!t.keybinding, n.keybinding.element);
        const i = this._keybindingService.lookupKeybinding(Zqo)?.getLabel(), r = this._keybindingService.lookupKeybinding(Qqo)?.getLabel();
        n.container.classList.toggle("option-disabled", t.disabled), t.disabled ? n.container.title = t.label : i && r ? this._supportsPreview && t.canPreview ? n.container.title = D(1786, null, i, r) : n.container.title = D(1787, null, i) : n.container.title = "";
    }
    disposeTemplate(t) {
        t.keybinding.dispose();
    }
}, hEr = Re([
    F(1, Al)
], hEr), Vzd = class extends UIEvent {
    constructor(){
        super("acceptSelectedAction");
    }
}, Jqo = class extends UIEvent {
    constructor(){
        super("previewSelectedAction");
    }
}, pEr = class extends st {
    constructor(t, e, n, i, r, s, o){
        super(), this._delegate = i, this._contextViewService = r, this._keybindingService = s, this._layoutService = o, this._actionLineHeight = 24, this._headerLineHeight = 26, this.cts = this._register(new El), this.domNode = document.createElement("div"), this.domNode.classList.add("actionList");
        const a = {
            getHeight: (l)=>l.kind === "header" ? this._headerLineHeight : this._actionLineHeight,
            getTemplateId: (l)=>l.kind
        };
        this._list = this._register(new F5(t, this.domNode, a, [
            new hEr(e, this._keybindingService),
            new zzd
        ], {
            keyboardSupport: !1,
            typeNavigationEnabled: !0,
            keyboardNavigationLabelProvider: {
                getKeyboardNavigationLabel: WLy
            },
            accessibilityProvider: {
                getAriaLabel: (l)=>{
                    if (l.kind === "action") {
                        let c = l.label ? qzd(l?.label) : "";
                        return l.disabled && (c = D(1788, null, c, l.disabled)), c;
                    }
                    return null;
                },
                getWidgetAriaLabel: ()=>D(1789, null),
                getRole: (l)=>l.kind === "action" ? "option" : "separator",
                getWidgetRole: ()=>"listbox"
            }
        })), this._list.style(MBt), this._register(this._list.onMouseClick((l)=>this.onListClick(l))), this._register(this._list.onMouseOver((l)=>this.onListHover(l))), this._register(this._list.onDidChangeFocus(()=>this.onFocus())), this._register(this._list.onDidChangeSelection((l)=>this.onListSelection(l))), this._allMenuItems = n, this._list.splice(0, this._list.length, this._allMenuItems), this._list.length && this.focusNext();
    }
    focusCondition(t) {
        return !t.disabled && t.kind === "action";
    }
    hide(t) {
        this._delegate.onHide(t), this.cts.cancel(), this._contextViewService.hideContextView();
    }
    layout(t) {
        const e = this._allMenuItems.filter((a)=>a.kind === "header").length, i = this._allMenuItems.length * this._actionLineHeight + e * this._headerLineHeight - e * this._actionLineHeight;
        this._list.layout(i);
        let r = t;
        if (this._allMenuItems.length >= 50) r = 380;
        else {
            const a = [];
            for(let l = 0; l < this._allMenuItems.length; l++){
                const c = this.domNode.ownerDocument.getElementById(this._list.getElementID(l));
                c && (c.style.width = "auto", a.push(c));
            }
            try {
                const l = a.map((c)=>c.getBoundingClientRect().width);
                r = Math.max(...l, t);
            } finally{
                for (const l of a)l.style.width = "";
            }
        }
        const o = Math.min(i, this._layoutService.getContainer(ws(this.domNode)).clientHeight * .7);
        return this._list.layout(o, r), this.domNode.style.height = `${o}px`, this._list.domFocus(), r;
    }
    focusPrevious() {
        this._list.focusPrevious(1, !0, void 0, this.focusCondition);
        const t = this._list.getFocus();
        t.length > 0 && this._list.reveal(t[0]);
    }
    focusNext() {
        this._list.focusNext(1, !0, void 0, this.focusCondition);
        const t = this._list.getFocus();
        t.length > 0 && this._list.reveal(t[0]);
    }
    acceptSelected(t) {
        const e = this._list.getFocus();
        if (e.length === 0) return;
        const n = e[0], i = this._list.element(n);
        if (!this.focusCondition(i)) return;
        const r = t ? new Jqo : new Vzd;
        this._list.setSelection([
            n
        ], r);
    }
    onListSelection(t) {
        if (!t.elements.length) return;
        const e = t.elements[0];
        e.item && this.focusCondition(e) ? this._delegate.onSelect(e.item, t.browserEvent instanceof Jqo) : this._list.setSelection([]);
    }
    onFocus() {
        const t = this._list.getFocus();
        if (t.length === 0) return;
        const e = t[0], n = this._list.element(e);
        this._delegate.onFocus?.(n.item);
    }
    async onListHover(t) {
        const e = t.element;
        if (e && e.item && this.focusCondition(e)) {
            if (this._delegate.onHover && !e.disabled && e.kind === "action") {
                const n = await this._delegate.onHover(e.item, this.cts.token);
                e.canPreview = n ? n.canPreview : void 0;
            }
            t.index && this._list.splice(t.index, 1, [
                e
            ]);
        }
        this._list.setFocus(typeof t.index == "number" ? [
            t.index
        ] : []);
    }
    onListClick(t) {
        t.element && this.focusCondition(t.element) && this._list.setFocus([]);
    }
}, pEr = Re([
    F(4, aL),
    F(5, Al),
    F(6, UI)
], pEr);

}
