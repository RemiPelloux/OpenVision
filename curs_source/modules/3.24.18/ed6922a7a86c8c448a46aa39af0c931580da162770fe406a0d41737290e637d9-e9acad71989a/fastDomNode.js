import { gre } from "./qIc.js";
import { x } from "./tslib.es6.js";
var pW;
export { pW };
var __wakaru_Tx_initialized = false;
export function Tx() {
if (__wakaru_Tx_initialized) return;
__wakaru_Tx_initialized = true;
"use strict";
x(), pW = class {
    constructor(e){
        this.domNode = e, this._maxWidth = "", this._width = "", this._height = "", this._top = "", this._left = "", this._bottom = "", this._right = "", this._paddingTop = "", this._paddingLeft = "", this._paddingBottom = "", this._paddingRight = "", this._fontFamily = "", this._fontWeight = "", this._fontSize = "", this._fontStyle = "", this._fontFeatureSettings = "", this._fontVariationSettings = "", this._textDecoration = "", this._lineHeight = "", this._letterSpacing = "", this._className = "", this._display = "", this._position = "", this._visibility = "", this._color = "", this._backgroundColor = "", this._layerHint = !1, this._contain = "none", this._boxShadow = "";
    }
    focus() {
        this.domNode.focus();
    }
    setMaxWidth(e) {
        const t = gre(e);
        this._maxWidth !== t && (this._maxWidth = t, this.domNode.style.maxWidth = this._maxWidth);
    }
    setWidth(e) {
        const t = gre(e);
        this._width !== t && (this._width = t, this.domNode.style.width = this._width);
    }
    setHeight(e) {
        const t = gre(e);
        this._height !== t && (this._height = t, this.domNode.style.height = this._height);
    }
    setTop(e) {
        const t = gre(e);
        this._top !== t && (this._top = t, this.domNode.style.top = this._top);
    }
    setLeft(e) {
        const t = gre(e);
        this._left !== t && (this._left = t, this.domNode.style.left = this._left);
    }
    setBottom(e) {
        const t = gre(e);
        this._bottom !== t && (this._bottom = t, this.domNode.style.bottom = this._bottom);
    }
    setRight(e) {
        const t = gre(e);
        this._right !== t && (this._right = t, this.domNode.style.right = this._right);
    }
    setPaddingTop(e) {
        const t = gre(e);
        this._paddingTop !== t && (this._paddingTop = t, this.domNode.style.paddingTop = this._paddingTop);
    }
    setPaddingLeft(e) {
        const t = gre(e);
        this._paddingLeft !== t && (this._paddingLeft = t, this.domNode.style.paddingLeft = this._paddingLeft);
    }
    setPaddingBottom(e) {
        const t = gre(e);
        this._paddingBottom !== t && (this._paddingBottom = t, this.domNode.style.paddingBottom = this._paddingBottom);
    }
    setPaddingRight(e) {
        const t = gre(e);
        this._paddingRight !== t && (this._paddingRight = t, this.domNode.style.paddingRight = this._paddingRight);
    }
    setFontFamily(e) {
        this._fontFamily !== e && (this._fontFamily = e, this.domNode.style.fontFamily = this._fontFamily);
    }
    setFontWeight(e) {
        this._fontWeight !== e && (this._fontWeight = e, this.domNode.style.fontWeight = this._fontWeight);
    }
    setFontSize(e) {
        const t = gre(e);
        this._fontSize !== t && (this._fontSize = t, this.domNode.style.fontSize = this._fontSize);
    }
    setFontStyle(e) {
        this._fontStyle !== e && (this._fontStyle = e, this.domNode.style.fontStyle = this._fontStyle);
    }
    setFontFeatureSettings(e) {
        this._fontFeatureSettings !== e && (this._fontFeatureSettings = e, this.domNode.style.fontFeatureSettings = this._fontFeatureSettings);
    }
    setFontVariationSettings(e) {
        this._fontVariationSettings !== e && (this._fontVariationSettings = e, this.domNode.style.fontVariationSettings = this._fontVariationSettings);
    }
    setTextDecoration(e) {
        this._textDecoration !== e && (this._textDecoration = e, this.domNode.style.textDecoration = this._textDecoration);
    }
    setLineHeight(e) {
        const t = gre(e);
        this._lineHeight !== t && (this._lineHeight = t, this.domNode.style.lineHeight = this._lineHeight);
    }
    setLetterSpacing(e) {
        const t = gre(e);
        this._letterSpacing !== t && (this._letterSpacing = t, this.domNode.style.letterSpacing = this._letterSpacing);
    }
    setClassName(e) {
        this._className !== e && (this._className = e, this.domNode.className = this._className);
    }
    toggleClassName(e, t) {
        this.domNode.classList.toggle(e, t), this._className = this.domNode.className;
    }
    setDisplay(e) {
        this._display !== e && (this._display = e, this.domNode.style.display = this._display);
    }
    setPosition(e) {
        this._position !== e && (this._position = e, this.domNode.style.position = this._position);
    }
    setVisibility(e) {
        this._visibility !== e && (this._visibility = e, this.domNode.style.visibility = this._visibility);
    }
    setColor(e) {
        this._color !== e && (this._color = e, this.domNode.style.color = this._color);
    }
    setBackgroundColor(e) {
        this._backgroundColor !== e && (this._backgroundColor = e, this.domNode.style.backgroundColor = this._backgroundColor);
    }
    setLayerHinting(e) {
        this._layerHint !== e && (this._layerHint = e, this.domNode.style.transform = this._layerHint ? "translate3d(0px, 0px, 0px)" : "");
    }
    setBoxShadow(e) {
        this._boxShadow !== e && (this._boxShadow = e, this.domNode.style.boxShadow = e);
    }
    setContain(e) {
        this._contain !== e && (this._contain = e, this.domNode.style.contain = this._contain);
    }
    setAttribute(e, t) {
        this.domNode.setAttribute(e, t);
    }
    removeAttribute(e) {
        this.domNode.removeAttribute(e);
    }
    appendChild(e) {
        this.domNode.appendChild(e.domNode);
    }
    removeChild(e) {
        this.domNode.removeChild(e.domNode);
    }
};

}
