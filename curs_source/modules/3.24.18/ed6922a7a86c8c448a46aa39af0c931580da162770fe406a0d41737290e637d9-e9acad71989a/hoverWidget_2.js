import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { k2, la } from "./aiMiscServices.js";
import { $n, vi } from "./commands.js";
import { So, oBe } from "./constants_8.js";
import { bBe, en } from "./dom_2.js";
import { Al_ } from "./hoverWidget_2.css";
import { no, qr } from "./keybinding.js";
import { Ve, Xt, Ye } from "./qIc.js";
import { Do, Ha } from "./reactiveStorageServiceTypes.js";
import { BFh, sRo } from "./selectionHoverActions.js";
import { Ex, zT } from "./touch.js";
import { x } from "./tslib.es6.js";
function Rl_(e) {
    const t = Dl_(e) - 80;
    let i = e.getOption(52).spaceWidth;
    return Math.floor(t / i);
}
function Dl_(e) {
    let t = e.getLayoutInfo(), n = t.width - 50, i = t.decorationsWidth + t.verticalScrollbarWidth;
    return n - i;
}
var UFh, f0t, Snr;
export { Dl_, Rl_, Snr, UFh, f0t };
var __wakaru_Ml__initialized = false;
export function Ml_() {
if (__wakaru_Ml__initialized) return;
__wakaru_Ml__initialized = true;
"use strict";
x(), en(), Ex(), bt(), Se(), Al_(), So(), vi(), no(), Ha(), la(), BFh(), UFh = 3, ((e)=>{
    let t;
    ((i)=>{
        i[i.Hidden = 0] = "Hidden", i[i.Showing = 1] = "Showing";
    })(t = e.Type || (e.Type = {})), e.Hidden = {
        type: 0
    };
    class n {
        constructor(r, s){
            this.editorPosition = r, this.widgetPosition = s, this.type = 1;
        }
    }
    e.Showing = n;
})(f0t || (f0t = {})), Snr = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this._editor = e, this.keybindingService = t, this.reactiveStorageService = i, this.cppService = r, this.hoverActions = s, this._onClick = this._register(new ve), this.onClick = this._onClick.event, this._state = f0t.Hidden, this.isWordWrap = !1, this._domNode = Ve("div.cursorHoverWidget"), this._buttonContainer = Ye(this._domNode, Ve("div.buttonContainer"));
        const { addToChat: o, secondary: a } = this.hoverActions;
        this._addToChatButton = this._createButton(this._buttonContainer, o.commandId, o.label, void 0, o.keybindingLabel), a && (this._secondaryDivider = Ye(this._buttonContainer, Ve("span.cursorHoverWidgetDivider")), this._secondaryButton = this._createButton(this._buttonContainer, a.commandId, a.label, void 0, a.keybindingLabel)), this.hoverActions.showsQuickEdit && !e.getIsMultiDiffEditor?.() && (this._quickEditButton = this._createButton(this._buttonContainer, oBe, "Quick Edit")), this._register(zT.ignoreTarget(this._domNode)), this._editor.addContentWidget(this), this.reactiveStorageRoot = this._register(this.reactiveStorageService.createScoped(this)), this._register(this.cppService.suggestion.event(()=>{
            this.update();
        })), this.update(), this._register(this._editor.onDidChangeModelContent((l)=>{
            const u = this._editor.getModel();
            (this.state.type !== 1 || !u || this.state.editorPosition.lineNumber >= u.getLineCount()) && this.hide();
        })), this._quickEditButton && this._register(bBe(this._quickEditButton, (l)=>{
            if (this.state.type !== 1) return;
            l.stopPropagation(), this._editor.focus();
            const u = this._editor.getSelection();
            n.executeCommand(oBe, u ? {
                overrideRange: u
            } : void 0).then(()=>{});
        }));
        const c = (l, u)=>{
            this._register(bBe(l, (h)=>{
                if (this.state.type !== 1) return;
                h.preventDefault(), h.stopPropagation(), this._editor.focus();
                const p = this._editor.getSelection();
                n.executeCommand(u.commandId, u.acceptsSelectionRange && p ? {
                    overrideRange: p
                } : void 0);
            }));
        };
        c(this._addToChatButton, o), this._secondaryButton && a && c(this._secondaryButton, a), this._register(Xt(this._domNode, "mouseenter", (l)=>{
            (l.buttons & 1) === 1 && this.hide();
        })), this._register(this._editor.onDidBlurEditorText(()=>this.hide()));
    }
    _createButton(e, t, n, i, r) {
        const s = Ye(e, Ve("button.hoverButton")), o = Ye(s, Ve("span.text"));
        o.textContent = n;
        const a = Ye(s, Ve("span.commandHelpText"));
        i = i ?? this.keybindingService.lookupKeybinding(t);
        const c = r ?? i?.getLabel() ?? "";
        return a.textContent = c, s;
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
        const e = this._editor.getModel();
        if (!e) return;
        const t = this.cppService.suggestion.value, n = t !== void 0 && t.uri.toString() === e.uri.toString();
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
        const e = this._editor.getModel();
        if (!e) return this.hide();
        let t = Number.MAX_VALUE;
        const n = this._editor.getSelection();
        if (n === null || n.isEmpty()) return this.hide();
        if (!this._editor.hasTextFocus() && !this._editor.hasWidgetFocus()) return this.hide();
        this.updateShowingElements();
        const i = this._editor.getPosition();
        if (!i) return this.hide();
        if (this.hoverActions.anchorsToSelectionEnd) {
            const f = Math.max(1, Math.min(e.getLineCount(), n.positionLineNumber)), v = Math.max(1, n.positionColumn), b = f > UFh;
            this.state = new f0t.Showing(n.getPosition(), {
                position: {
                    lineNumber: f,
                    column: v
                },
                preference: [
                    b ? 1 : 2
                ]
            }), this._editor.layoutContentWidget(this);
            return;
        }
        let r = Math.max(1, Math.min(e.getLineCount(), i.lineNumber < 4 ? n.endLineNumber + 3 : i.lineNumber - 2)), s = i.column;
        const o = 25, a = Math.max(i.lineNumber - 2, Math.floor(n.endLineNumber + n.startLineNumber) / 2 - 1), c = this.isWordWrap ? 3 : 2, l = Math.max(1, i.lineNumber - c), u = Math.min(e.getLineCount() - 1, i.lineNumber + c);
        let h = 1;
        const p = Rl_(this._editor) - 10, g = (f, v, b, y)=>{
            if (b !== f || e.getLineLength(Math.max(1, b)) >= p) return;
            const T = Math.abs(v - 5) + Math.abs(f - a) * o;
            T < t && (t = T, r = b, s = v, h = y);
        };
        for(let f = l; f <= u; f++){
            let v = 0, b = 0;
            for(let y = f - 2; y <= f; y++){
                const T = e.getLineLength(Math.max(1, y));
                T > v && (v = T, b = y);
            }
            g(f, v, b, 1), v = 0, b = 0;
            for(let y = f; y <= f + 2; y++){
                const T = e.getLineLength(Math.min(e.getLineCount(), y));
                T > v && (v = T, b = y);
            }
            g(f, v, b, 2), v = 0, b = 0;
            for(let y = f - 1; y <= f + 1; y++){
                const T = e.getLineLength(Math.max(1, Math.min(e.getLineCount(), y)));
                T > v && (v = T, b = y);
            }
            g(f, v, b, 0);
        }
        this.state = new f0t.Showing(i, {
            position: {
                lineNumber: r,
                column: s + 2
            },
            preference: [
                h
            ]
        }), this._editor.layoutContentWidget(this);
    }
    hide() {
        this.state !== f0t.Hidden && (this.state = f0t.Hidden, this._editor.layoutContentWidget(this));
    }
    get state() {
        return this._state;
    }
    set state(e) {
        this._state = e, this._updateHoverTitleAndIcon();
    }
    _updateHoverTitleAndIcon() {}
    set title(e) {
        this._domNode.title = e;
    }
}, Snr = ie([
    C(1, qr),
    C(2, $n),
    C(3, Do),
    C(4, k2),
    C(5, sRo)
], Snr);

}
