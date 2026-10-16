import { Gt, Qe, st, tt } from "./Iwo.js";
import { yxk } from "./Ycg.js";
import { Ss, l$ } from "./aiMiscServices.js";
import { nr, rs } from "./commands.js";
import { Let, pa } from "./constants_8.js";
import { Hn, _gn } from "./dom_2.js";
import { bxk } from "./hoverWidget_2.css";
import { Al, ru } from "./keybinding.js";
import { el, sa } from "./reactiveStorageServiceTypes.js";
import { cus, lus } from "./selectionHoverActions.js";
import { fO, kM } from "./touch.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ii, fr, li } from "./ze.js";
var UCg, HVt, uus;
export { HVt, UCg, uus };
var __wakaru_kxk_initialized = false;
export function kxk() {
if (__wakaru_kxk_initialized) return;
__wakaru_kxk_initialized = true;
"use strict";
E(), Hn(), fO(), Gt(), Qe(), bxk(), pa(), rs(), ru(), el(), Ss(), cus(), UCg = 3, ((t)=>{
    let e;
    ((i)=>{
        i[i.Hidden = 0] = "Hidden", i[i.Showing = 1] = "Showing";
    })(e = t.Type || (t.Type = {})), t.Hidden = {
        type: 0
    };
    class n {
        constructor(r, s){
            this.editorPosition = r, this.widgetPosition = s, this.type = 1;
        }
    }
    t.Showing = n;
})(HVt || (HVt = {})), uus = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this._editor = t, this.keybindingService = e, this.reactiveStorageService = i, this.cppService = r, this.hoverActions = s, this._onClick = this._register(new tt), this.onClick = this._onClick.event, this._state = HVt.Hidden, this.isWordWrap = !1, this._domNode = Ii("div.cursorHoverWidget"), this._buttonContainer = fr(this._domNode, Ii("div.buttonContainer"));
        const { addToChat: o, secondary: a } = this.hoverActions;
        this._addToChatButton = this._createButton(this._buttonContainer, o.commandId, o.label, void 0, o.keybindingLabel), a && (this._secondaryDivider = fr(this._buttonContainer, Ii("span.cursorHoverWidgetDivider")), this._secondaryButton = this._createButton(this._buttonContainer, a.commandId, a.label, void 0, a.keybindingLabel)), this.hoverActions.showsQuickEdit && !t.getIsMultiDiffEditor?.() && (this._quickEditButton = this._createButton(this._buttonContainer, Let, "Quick Edit")), this._register(kM.ignoreTarget(this._domNode)), this._editor.addContentWidget(this), this.reactiveStorageRoot = this._register(this.reactiveStorageService.createScoped(this)), this._register(this.cppService.suggestion.event(()=>{
            this.update();
        })), this.update(), this._register(this._editor.onDidChangeModelContent((c)=>{
            const u = this._editor.getModel();
            (this.state.type !== 1 || !u || this.state.editorPosition.lineNumber >= u.getLineCount()) && this.hide();
        })), this._quickEditButton && this._register(_gn(this._quickEditButton, (c)=>{
            if (this.state.type !== 1) return;
            c.stopPropagation(), this._editor.focus();
            const u = this._editor.getSelection();
            n.executeCommand(Let, u ? {
                overrideRange: u
            } : void 0).then(()=>{});
        }));
        const l = (c, u)=>{
            this._register(_gn(c, (d)=>{
                if (this.state.type !== 1) return;
                d.preventDefault(), d.stopPropagation(), this._editor.focus();
                const h = this._editor.getSelection();
                n.executeCommand(u.commandId, u.acceptsSelectionRange && h ? {
                    overrideRange: h
                } : void 0);
            }));
        };
        l(this._addToChatButton, o), this._secondaryButton && a && l(this._secondaryButton, a), this._register(li(this._domNode, "mouseenter", (c)=>{
            (c.buttons & 1) === 1 && this.hide();
        })), this._register(this._editor.onDidBlurEditorText(()=>this.hide()));
    }
    _createButton(t, e, n, i, r) {
        const s = fr(t, Ii("button.hoverButton")), o = fr(s, Ii("span.text"));
        o.textContent = n;
        const a = fr(s, Ii("span.commandHelpText"));
        i = i ?? this.keybindingService.lookupKeybinding(e);
        const l = r ?? i?.getLabel() ?? "";
        return a.textContent = l, s;
    }
    dispose() {
        super.dispose(), this._editor.removeContentWidget(this);
    }
    getId() {
        return "HoverWidget";
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return this._state.type === 1 ? this._state.widgetPosition : null;
    }
    updateShowingElements() {
        const t = this._editor.getModel();
        if (!t) return;
        const e = this.cppService.suggestion.value, n = e !== void 0 && e.uri.toString() === t.uri.toString();
        if (n && this.hoverActions.hidesWhileCppSuggests ? this._buttonContainer.style.display = "none" : this._buttonContainer.style.display = "flex", this._quickEditButton) {
            const i = this._editor.getOption(96);
            this._quickEditButton.style.display = i || n ? "none" : "";
        }
        if (this._secondaryButton) {
            const i = this.hoverActions.secondary?.isAvailable?.() ?? !0;
            this._secondaryDivider && (this._secondaryDivider.style.display = i ? "" : "none"), this._secondaryButton.style.display = i ? "" : "none";
        }
    }
    update() {
        const t = this._editor.getModel();
        if (!t) return this.hide();
        let e = Number.MAX_VALUE;
        const n = this._editor.getSelection();
        if (n === null || n.isEmpty()) return this.hide();
        if (!this._editor.hasTextFocus() && !this._editor.hasWidgetFocus()) return this.hide();
        this.updateShowingElements();
        const i = this._editor.getPosition();
        if (!i) return this.hide();
        if (this.hoverActions.anchorsToSelectionEnd) {
            const g = Math.max(1, Math.min(t.getLineCount(), n.positionLineNumber)), f = Math.max(1, n.positionColumn), _ = g > UCg;
            this.state = new HVt.Showing(n.getPosition(), {
                position: {
                    lineNumber: g,
                    column: f
                },
                preference: [
                    _ ? 1 : 2
                ]
            }), this._editor.layoutContentWidget(this);
            return;
        }
        let r = Math.max(1, Math.min(t.getLineCount(), i.lineNumber < 4 ? n.endLineNumber + 3 : i.lineNumber - 2)), s = i.column;
        const o = 25, a = Math.max(i.lineNumber - 2, Math.floor(n.endLineNumber + n.startLineNumber) / 2 - 1), l = this.isWordWrap ? 3 : 2, c = Math.max(1, i.lineNumber - l), u = Math.min(t.getLineCount() - 1, i.lineNumber + l);
        let d = 1;
        const h = yxk(this._editor) - 10, p = (g, f, _, b)=>{
            if (_ !== g || t.getLineLength(Math.max(1, _)) >= h) return;
            const y = Math.abs(f - 5) + Math.abs(g - a) * o;
            y < e && (e = y, r = _, s = f, d = b);
        };
        for(let g = c; g <= u; g++){
            let f = 0, _ = 0;
            for(let b = g - 2; b <= g; b++){
                const y = t.getLineLength(Math.max(1, b));
                y > f && (f = y, _ = b);
            }
            p(g, f, _, 1), f = 0, _ = 0;
            for(let b = g; b <= g + 2; b++){
                const y = t.getLineLength(Math.min(t.getLineCount(), b));
                y > f && (f = y, _ = b);
            }
            p(g, f, _, 2), f = 0, _ = 0;
            for(let b = g - 1; b <= g + 1; b++){
                const y = t.getLineLength(Math.max(1, Math.min(t.getLineCount(), b)));
                y > f && (f = y, _ = b);
            }
            p(g, f, _, 0);
        }
        this.state = new HVt.Showing(i, {
            position: {
                lineNumber: r,
                column: s + 2
            },
            preference: [
                d
            ]
        }), this._editor.layoutContentWidget(this);
    }
    hide() {
        this.state !== HVt.Hidden && (this.state = HVt.Hidden, this._editor.layoutContentWidget(this));
    }
    get state() {
        return this._state;
    }
    set state(t) {
        this._state = t, this._updateHoverTitleAndIcon();
    }
    _updateHoverTitleAndIcon() {}
    set title(t) {
        this._domNode.title = t;
    }
}, uus = Re([
    F(1, Al),
    F(2, nr),
    F(3, sa),
    F(4, l$),
    F(5, lus)
], uus);

}
