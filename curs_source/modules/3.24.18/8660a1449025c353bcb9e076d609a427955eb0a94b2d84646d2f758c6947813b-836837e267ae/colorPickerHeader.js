import { D, Qe, st } from "./Iwo.js";
import { _b, ls } from "./color.js";
import { Qyt } from "./colorPicker.css";
import { NOy, XVd } from "./colorPickerCloseButton.js";
import { Ap } from "./colorRegistry.js";
import { Hn, Pr } from "./dom_2.js";
import { uri } from "./editorColors.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
import { Ii, fr, li } from "./ze.js";
var Uoi, ZVd;
export { Uoi, ZVd };
var __wakaru_LOy_initialized = false;
export function LOy() {
if (__wakaru_LOy_initialized) return;
__wakaru_LOy_initialized = true;
"use strict";
E(), Qyt(), Hn(), _b(), Qe(), Bt(), Ap(), NOy(), Uoi = Ii, ZVd = class extends st {
    constructor(t, e, n, i){
        super(), this.model = e, this.type = i, this._closeButton = null, this._domNode = Uoi(".colorpicker-header"), fr(t, this._domNode), this._pickedColorNode = fr(this._domNode, Uoi(".picked-color")), fr(this._pickedColorNode, Uoi("span.codicon.codicon-color-mode")), this._pickedColorPresentation = fr(this._pickedColorNode, document.createElement("span")), this._pickedColorPresentation.classList.add("picked-color-presentation");
        const r = D(1022, null);
        this._pickedColorNode.setAttribute("title", r), this._originalColorNode = fr(this._domNode, Uoi(".original-color")), this._originalColorNode.style.backgroundColor = ls.Format.CSS.format(this.model.originalColor) || "", this.backgroundColor = n.getColorTheme().getColor(uri) || ls.white, this._register(n.onDidColorThemeChange((s)=>{
            this.backgroundColor = s.getColor(uri) || ls.white;
        })), this._register(li(this._pickedColorNode, Pr.CLICK, ()=>this.model.selectNextColorPresentation())), this._register(li(this._originalColorNode, Pr.CLICK, ()=>{
            this.model.color = this.model.originalColor, this.model.flushColor();
        })), this._register(e.onDidChangeColor(this.onDidChangeColor, this)), this._register(e.onDidChangePresentation(this.onDidChangePresentation, this)), this._pickedColorNode.style.backgroundColor = ls.Format.CSS.format(e.color) || "", this._pickedColorNode.classList.toggle("light", e.color.rgba.a < .5 ? this.backgroundColor.isLighter() : e.color.isLighter()), this.onDidChangeColor(this.model.color), this.type === "standalone" && (this._domNode.classList.add("standalone-colorpicker"), this._closeButton = this._register(new XVd(this._domNode)));
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
    onDidChangeColor(t) {
        this._pickedColorNode.style.backgroundColor = ls.Format.CSS.format(t) || "", this._pickedColorNode.classList.toggle("light", t.rgba.a < .5 ? this.backgroundColor.isLighter() : t.isLighter()), this.onDidChangePresentation();
    }
    onDidChangePresentation() {
        this._pickedColorPresentation.textContent = this.model.presentation ? this.model.presentation.label : "";
    }
};

}
