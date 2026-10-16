import { Ec, Fa, Qe, Vn, mmr, st } from "./Iwo.js";
import { qn } from "./async.js";
import { gs, yt } from "./codicons.js";
import { Hn, Pr } from "./dom_2.js";
import { OLy } from "./inlineProgressWidget.css";
import { It, dn } from "./instantiation.js";
import { Qs, qt } from "./range.js";
import { Kg, PC } from "./textModel.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ii, li } from "./ze.js";
var $zd, qqo, Hzd, Poi;
export { $zd, Hzd, Poi, qqo };
var __wakaru_zqo_initialized = false;
export function zqo() {
if (__wakaru_zqo_initialized) return;
__wakaru_zqo_initialized = true;
"use strict";
E(), Hn(), qn(), gs(), Qe(), Fa(), ta(), OLy(), Qs(), PC(), It(), $zd = Kg.register({
    description: "inline-progress-widget",
    stickiness: 1,
    showIfCollapsed: !0,
    after: {
        content: mmr,
        inlineClassName: "inline-editor-progress-decoration",
        inlineClassNameAffectsLetterSpacing: !0
    }
}), qqo = class xRb extends st {
    constructor(e, n, i, r, s){
        super(), this.typeId = e, this.editor = n, this.range = i, this.delegate = s, this.allowEditorOverflow = !1, this.suppressMouseDown = !0, this.create(r), this.editor.addContentWidget(this), this.editor.layoutContentWidget(this);
    }
    create(e) {
        this.domNode = Ii(".inline-progress-widget"), this.domNode.role = "button", this.domNode.title = e;
        const n = Ii("span.icon");
        this.domNode.append(n), n.classList.add(...Gn.asClassNameArray(yt.loading), "codicon-modifier-spin");
        const i = ()=>{
            const r = this.editor.getOption(68);
            this.domNode.style.height = `${r}px`, this.domNode.style.width = `${Math.ceil(.8 * r)}px`;
        };
        i(), this._register(this.editor.onDidChangeConfiguration((r)=>{
            (r.hasChanged(54) || r.hasChanged(68)) && i();
        })), this._register(li(this.domNode, Pr.CLICK, (r)=>{
            this.delegate.cancel();
        }));
    }
    getId() {
        return xRb.baseId + "." + this.typeId;
    }
    getDomNode() {
        return this.domNode;
    }
    getPosition() {
        return {
            position: {
                lineNumber: this.range.startLineNumber,
                column: this.range.startColumn
            },
            preference: [
                0
            ]
        };
    }
    dispose() {
        super.dispose(), this.editor.removeContentWidget(this);
    }
}, qqo.baseId = "editor.widget.inlineProgressWidget", Hzd = qqo, Poi = class extends st {
    constructor(t, e, n){
        super(), this.id = t, this._editor = e, this._instantiationService = n, this._showDelay = 500, this._showPromise = this._register(new Vn), this._currentWidget = this._register(new Vn), this._operationIdPool = 0, this._currentDecorations = e.createDecorationsCollection();
    }
    dispose() {
        super.dispose(), this._currentDecorations.clear();
    }
    async showWhile(t, e, n, i, r) {
        const s = this._operationIdPool++;
        this._currentOperation = s, this.clear(), this._showPromise.value = Ec(()=>{
            const o = qt.fromPositions(t);
            this._currentDecorations.set([
                {
                    range: o,
                    options: $zd
                }
            ]).length > 0 && (this._currentWidget.value = this._instantiationService.createInstance(Hzd, this.id, this._editor, o, e, i));
        }, r ?? this._showDelay);
        try {
            return await n;
        } finally{
            this._currentOperation === s && (this.clear(), this._currentOperation = void 0);
        }
    }
    clear() {
        this._showPromise.clear(), this._currentDecorations.clear(), this._currentWidget.clear();
    }
}, Poi = Re([
    F(2, dn)
], Poi);

}
