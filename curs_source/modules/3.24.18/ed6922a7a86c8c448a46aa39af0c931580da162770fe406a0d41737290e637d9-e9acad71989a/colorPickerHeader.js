import { S, Se, we } from "./HVr.js";
import { Ci, Sm } from "./color.js";
import { _Ke } from "./colorPicker.css";
import { JSg, rHc } from "./colorPickerCloseButton.js";
import { tc } from "./colorRegistry.js";
import { Fn, en } from "./dom_2.js";
import { uze } from "./editorColors.js";
import { rt } from "./nls.js";
import { Ve, Xt, Ye } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Jvn, sHc;
export { Jvn, sHc };
var __wakaru_ekg_initialized = false;
export function ekg() {
if (__wakaru_ekg_initialized) return;
__wakaru_ekg_initialized = true;
"use strict";
x(), _Ke(), en(), Sm(), Se(), rt(), tc(), JSg(), Jvn = Ve, sHc = class extends we {
    constructor(e, t, n, i){
        super(), this.model = t, this.type = i, this._closeButton = null, this._domNode = Jvn(".colorpicker-header"), Ye(e, this._domNode), this._pickedColorNode = Ye(this._domNode, Jvn(".picked-color")), Ye(this._pickedColorNode, Jvn("span.codicon.codicon-color-mode")), this._pickedColorPresentation = Ye(this._pickedColorNode, document.createElement("span")), this._pickedColorPresentation.classList.add("picked-color-presentation");
        const r = S(1022, null);
        this._pickedColorNode.setAttribute("title", r), this._originalColorNode = Ye(this._domNode, Jvn(".original-color")), this._originalColorNode.style.backgroundColor = Ci.Format.CSS.format(this.model.originalColor) || "", this.backgroundColor = n.getColorTheme().getColor(uze) || Ci.white, this._register(n.onDidColorThemeChange((s)=>{
            this.backgroundColor = s.getColor(uze) || Ci.white;
        })), this._register(Xt(this._pickedColorNode, Fn.CLICK, ()=>this.model.selectNextColorPresentation())), this._register(Xt(this._originalColorNode, Fn.CLICK, ()=>{
            this.model.color = this.model.originalColor, this.model.flushColor();
        })), this._register(t.onDidChangeColor(this.onDidChangeColor, this)), this._register(t.onDidChangePresentation(this.onDidChangePresentation, this)), this._pickedColorNode.style.backgroundColor = Ci.Format.CSS.format(t.color) || "", this._pickedColorNode.classList.toggle("light", t.color.rgba.a < .5 ? this.backgroundColor.isLighter() : t.color.isLighter()), this.onDidChangeColor(this.model.color), this.type === "standalone" && (this._domNode.classList.add("standalone-colorpicker"), this._closeButton = this._register(new rHc(this._domNode)));
    }
    get domNode() {
        return this._domNode;
    }
    get closeButton() {
        return this._closeButton;
    }
    get pickedColorNode() {
        return this._pickedColorNode;
    }
    get originalColorNode() {
        return this._originalColorNode;
    }
    onDidChangeColor(e) {
        this._pickedColorNode.style.backgroundColor = Ci.Format.CSS.format(e) || "", this._pickedColorNode.classList.toggle("light", e.rgba.a < .5 ? this.backgroundColor.isLighter() : e.isLighter()), this.onDidChangePresentation();
    }
    onDidChangePresentation() {
        this._pickedColorPresentation.textContent = this.model.presentation ? this.model.presentation.label : "";
    }
};

}
