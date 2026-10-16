import { E } from "./tslib.es6.js";
import { Jve } from "./ze.js";
var msi;
export { msi };
var __wakaru_i6_initialized = false;
export function i6() {
if (__wakaru_i6_initialized) return;
__wakaru_i6_initialized = true;
"use strict";
E(), msi = class {
    constructor(t){
        this.domNode = t, this._maxWidth = "", this._width = "", this._height = "", this._top = "", this._left = "", this._bottom = "", this._right = "", this._paddingTop = "", this._paddingLeft = "", this._paddingBottom = "", this._paddingRight = "", this._fontFamily = "", this._fontWeight = "", this._fontSize = "", this._fontStyle = "", this._fontFeatureSettings = "", this._fontVariationSettings = "", this._textDecoration = "", this._lineHeight = "", this._letterSpacing = "", this._className = "", this._display = "", this._position = "", this._visibility = "", this._color = "", this._backgroundColor = "", this._layerHint = !1, this._contain = "none", this._boxShadow = "";
    }
    focus() {
        this.domNode.focus();
    }
    setMaxWidth(t) {
        const e = Jve(t);
        this._maxWidth !== e && (this._maxWidth = e, this.domNode.style.maxWidth = this._maxWidth);
    }
    setWidth(t) {
        const e = Jve(t);
        this._width !== e && (this._width = e, this.domNode.style.width = this._width);
    }
    setHeight(t) {
        const e = Jve(t);
        this._height !== e && (this._height = e, this.domNode.style.height = this._height);
    }
    setTop(t) {
        const e = Jve(t);
        this._top !== e && (this._top = e, this.domNode.style.top = this._top);
    }
    setLeft(t) {
        const e = Jve(t);
        this._left !== e && (this._left = e, this.domNode.style.left = this._left);
    }
    setBottom(t) {
        const e = Jve(t);
        this._bottom !== e && (this._bottom = e, this.domNode.style.bottom = this._bottom);
    }
    setRight(t) {
        const e = Jve(t);
        this._right !== e && (this._right = e, this.domNode.style.right = this._right);
    }
    setPaddingTop(t) {
        const e = Jve(t);
        this._paddingTop !== e && (this._paddingTop = e, this.domNode.style.paddingTop = this._paddingTop);
    }
    setPaddingLeft(t) {
        const e = Jve(t);
        this._paddingLeft !== e && (this._paddingLeft = e, this.domNode.style.paddingLeft = this._paddingLeft);
    }
    setPaddingBottom(t) {
        const e = Jve(t);
        this._paddingBottom !== e && (this._paddingBottom = e, this.domNode.style.paddingBottom = this._paddingBottom);
    }
    setPaddingRight(t) {
        const e = Jve(t);
        this._paddingRight !== e && (this._paddingRight = e, this.domNode.style.paddingRight = this._paddingRight);
    }
    setFontFamily(t) {
        this._fontFamily !== t && (this._fontFamily = t, this.domNode.style.fontFamily = this._fontFamily);
    }
    setFontWeight(t) {
        this._fontWeight !== t && (this._fontWeight = t, this.domNode.style.fontWeight = this._fontWeight);
    }
    setFontSize(t) {
        const e = Jve(t);
        this._fontSize !== e && (this._fontSize = e, this.domNode.style.fontSize = this._fontSize);
    }
    setFontStyle(t) {
        this._fontStyle !== t && (this._fontStyle = t, this.domNode.style.fontStyle = this._fontStyle);
    }
    setFontFeatureSettings(t) {
        this._fontFeatureSettings !== t && (this._fontFeatureSettings = t, this.domNode.style.fontFeatureSettings = this._fontFeatureSettings);
    }
    setFontVariationSettings(t) {
        this._fontVariationSettings !== t && (this._fontVariationSettings = t, this.domNode.style.fontVariationSettings = this._fontVariationSettings);
    }
    setTextDecoration(t) {
        this._textDecoration !== t && (this._textDecoration = t, this.domNode.style.textDecoration = this._textDecoration);
    }
    setLineHeight(t) {
        const e = Jve(t);
        this._lineHeight !== e && (this._lineHeight = e, this.domNode.style.lineHeight = this._lineHeight);
    }
    setLetterSpacing(t) {
        const e = Jve(t);
        this._letterSpacing !== e && (this._letterSpacing = e, this.domNode.style.letterSpacing = this._letterSpacing);
    }
    setClassName(t) {
        this._className !== t && (this._className = t, this.domNode.className = this._className);
    }
    toggleClassName(t, e) {
        this.domNode.classList.toggle(t, e), this._className = this.domNode.className;
    }
    setDisplay(t) {
        this._display !== t && (this._display = t, this.domNode.style.display = this._display);
    }
    setPosition(t) {
        this._position !== t && (this._position = t, this.domNode.style.position = this._position);
    }
    setVisibility(t) {
        this._visibility !== t && (this._visibility = t, this.domNode.style.visibility = this._visibility);
    }
    setColor(t) {
        this._color !== t && (this._color = t, this.domNode.style.color = this._color);
    }
    setBackgroundColor(t) {
        this._backgroundColor !== t && (this._backgroundColor = t, this.domNode.style.backgroundColor = this._backgroundColor);
    }
    setLayerHinting(t) {
        this._layerHint !== t && (this._layerHint = t, this.domNode.style.transform = this._layerHint ? "translate3d(0px, 0px, 0px)" : "");
    }
    setBoxShadow(t) {
        this._boxShadow !== t && (this._boxShadow = t, this.domNode.style.boxShadow = t);
    }
    setContain(t) {
        this._contain !== t && (this._contain = t, this.domNode.style.contain = this._contain);
    }
    setAttribute(t, e) {
        this.domNode.setAttribute(t, e);
    }
    removeAttribute(t) {
        this.domNode.removeAttribute(t);
    }
    appendChild(t) {
        this.domNode.appendChild(t.domNode);
    }
    removeChild(t) {
        this.domNode.removeChild(t.domNode);
    }
};

}
