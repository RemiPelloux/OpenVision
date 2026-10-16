import { D, Ei, Gt, Pn, Qe, Vn, Ya, aO, en, st } from "./Iwo.js";
import { nv } from "./SZu.js";
import { IHe, ezo } from "./actionWidget.js";
import { qn } from "./async.js";
import { Uj, x5e } from "./bulkEditService.js";
import { lRe, pnt } from "./button.js";
import { gs, yt } from "./codicons.js";
import { Hi, Rr } from "./contextkey.js";
import { Hn, Pr } from "./dom_2.js";
import { Wqo } from "./edit.js";
import { EHe, R5e } from "./editorState.js";
import { tT } from "./errorMessage.js";
import { It, dn } from "./instantiation.js";
import { Al, ru } from "./keybinding.js";
import { Bt } from "./nls.js";
import { Ks, Wr } from "./notification.js";
import { qLy } from "./postEditWidget.css";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ex, Fzd, Ii, li } from "./ze.js";
var _vn, Noi;
export { Noi, _vn };
var __wakaru_Kzd_initialized = false;
export function Kzd() {
if (__wakaru_Kzd_initialized) return;
__wakaru_Kzd_initialized = true;
"use strict";
E(), Hn(), pnt(), qn(), gs(), tT(), Ei(), Gt(), Qe(), ta(), Bt(), ezo(), Hi(), It(), ru(), Ks(), Uj(), R5e(), Wqo(), qLy(), _vn = class extends st {
    constructor(t, e, n, i, r, s, o, a, l, c, u, d){
        super(), this.typeId = t, this.editor = e, this.showCommand = i, this.range = r, this.edits = s, this.onSelectNewEdit = o, this.additionalActions = a, this._keybindingService = u, this._actionWidgetService = d, this.allowEditorOverflow = !0, this.suppressMouseDown = !0, this._editSession = l ? this._register(l.take()) : void 0, this.create(), this.visibleContext = n.bindTo(c), this.visibleContext.set(!0), this._register(Pn(()=>this.visibleContext.reset())), this.editor.addContentWidget(this), this.editor.layoutContentWidget(this), this._register(Pn((()=>this.editor.removeContentWidget(this)))), this._register(this.editor.onDidChangeCursorPosition((h)=>{
            this.dispose();
        })), this._register(en.runAndSubscribe(u.onDidUpdateKeybindings, ()=>{
            this._updateButtonTitle();
        }));
    }
    _updateButtonTitle() {
        const t = this._keybindingService.lookupKeybinding(this.showCommand.id)?.getLabel();
        this.button.element.title = this.showCommand.label + (t ? ` (${t})` : "");
    }
    create() {
        this.domNode = Ii(".post-edit-widget"), this.button = this._register(new lRe(this.domNode, {
            supportIcons: !0
        })), this.button.label = "$(insert)", this._register(li(this.domNode, Pr.CLICK, ()=>this.showSelector()));
    }
    getId() {
        return _vn.baseId + "." + this.typeId;
    }
    getDomNode() {
        return this.domNode;
    }
    getPosition() {
        return {
            position: this.range.getEndPosition(),
            preference: [
                2
            ]
        };
    }
    showSelector() {
        const t = Ex(this.button.element), e = {
            x: t.left + t.width,
            y: t.top + t.height
        };
        this._actionWidgetService.show("postEditWidget", !1, this.edits.allEdits.map((n, i)=>({
                kind: "action",
                item: n,
                label: n.title,
                disabled: !1,
                canPreview: !1,
                group: {
                    title: "",
                    icon: Gn.fromId(i === this.edits.activeEditIndex ? yt.check.id : yt.blank.id)
                }
            })), {
            onHide: ()=>{
                this.editor.focus();
            },
            onSelect: (n)=>{
                this._actionWidgetService.hide(!1);
                const i = this.edits.allEdits.findIndex((r)=>r === n);
                if (i !== this.edits.activeEditIndex) return this.onSelectNewEdit(i, this._editSession?.take());
            }
        }, e, this.editor.getDomNode() ?? void 0, this.additionalActions);
    }
}, _vn.baseId = "editor.widget.postEditWidget", _vn = Re([
    F(9, Rr),
    F(10, Al),
    F(11, IHe)
], _vn), Noi = class extends st {
    constructor(t, e, n, i, r, s, o, a){
        super(), this._id = t, this._editor = e, this._visibleContext = n, this._showCommand = i, this._getAdditionalActions = r, this._instantiationService = s, this._bulkEditService = o, this._notificationService = a, this._currentWidget = this._register(new Vn), this._register(en.any(e.onDidChangeModel, e.onDidChangeModelContent)(()=>this.clear()));
    }
    async applyEditAndShowIfNeeded(t, e, n, i, r, s) {
        if (!t.length || !this._editor.hasModel()) return;
        const o = this._editor.getModel(), a = e.allEdits.at(e.activeEditIndex);
        if (!a) return;
        const l = async (b, y)=>{
            try {
                this.clear();
                const S = this._editor.getModel();
                if (!S) return;
                await S.undo(), await this.applyEditAndShowIfNeeded(t, {
                    activeEditIndex: b,
                    allEdits: e.allEdits
                }, n, i, r, y);
            } finally{
                y?.dispose();
            }
        }, c = (b, y)=>{
            Ya(b) || (this._notificationService.error(y), n && this.show(t[0], e, l, s));
        }, u = new EHe(this._editor, 3, void 0, r);
        let d;
        try {
            d = await aO(i(a, u.token), u.token);
        } catch (b) {
            return c(b, D(1073, null, a.title, nv(b)));
        } finally{
            u.dispose();
        }
        if (r.isCancellationRequested) return;
        const h = Fzd(o.uri, t, d), p = t[0], g = o.deltaDecorations([], [
            {
                range: p,
                options: {
                    description: "paste-line-suffix",
                    stickiness: 0
                }
            }
        ]);
        this._editor.focus();
        let f, _;
        try {
            f = await this._bulkEditService.apply(h, {
                editor: this._editor,
                token: r
            }), _ = o.getDecorationRange(g[0]);
        } catch (b) {
            return c(b, D(1074, null, a.title, nv(b)));
        } finally{
            o.deltaDecorations(g, []);
        }
        r.isCancellationRequested || n && f.isApplied && e.allEdits.length > 1 && this.show(_ ?? p, e, l, s);
    }
    show(t, e, n, i) {
        this.clear(), this._editor.hasModel() && (this._currentWidget.value = this._instantiationService.createInstance(_vn, this._id, this._editor, this._visibleContext, this._showCommand, t, e, n, this._getAdditionalActions(), i));
    }
    clear() {
        this._currentWidget.clear();
    }
    tryShowSelector() {
        this._currentWidget.value?.showSelector();
    }
}, Noi = Re([
    F(5, dn),
    F(6, x5e),
    F(7, Wr)
], Noi);

}
