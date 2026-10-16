import { bt, ve } from "./HVr.js";
import { Op, ym } from "./accessibility.js";
import { C, ie } from "./actions_2.js";
import { Cn, qt } from "./configuration.js";
import { dn, xn } from "./contextkey.js";
import { Tc, en } from "./dom_2.js";
import { gd, gn } from "./editorContextKeys.js";
import { Tb, lyi } from "./hoverWidget.js";
import { no, qr } from "./keybinding.js";
import { C7c, LP, LV, Nk, U$c, Ye, dJ, rw } from "./qIc.js";
import { B$c, WSg } from "./resizableContentWidget.js";
import { x } from "./tslib.es6.js";
var His, YK;
export { His, YK };
var __wakaru_GSg_initialized = false;
export function GSg() {
if (__wakaru_GSg_initialized) return;
__wakaru_GSg_initialized = true;
"use strict";
x(), en(), no(), WSg(), dn(), Cn(), Op(), gd(), Tb(), bt(), His = 30, YK = class extends B$c {
    constructor(e, t, n, i, r){
        const s = e.getOption(68) + 8, o = 150, a = new Tc(o, s);
        super(e, a), this._configurationService = n, this._accessibilityService = i, this._keybindingService = r, this._hover = this._register(new lyi(!0)), this._onDidResize = this._register(new ve), this.onDidResize = this._onDidResize.event, this._onDidScroll = this._register(new ve), this.onDidScroll = this._onDidScroll.event, this._minimumSize = a, this._hoverVisibleKey = gn.hoverVisible.bindTo(t), this._hoverFocusedKey = gn.hoverFocused.bindTo(t), Ye(this._resizableNode.domNode, this._hover.containerDomNode), this._resizableNode.domNode.style.zIndex = "50", this._resizableNode.domNode.className = "monaco-resizable-hover", this._register(this._editor.onDidLayoutChange(()=>{
            this.isVisible && this._updateMaxDimensions();
        })), this._register(this._editor.onDidChangeConfiguration((l)=>{
            l.hasChanged(52) && this._updateFont();
        }));
        const c = this._register(rw(this._resizableNode.domNode));
        this._register(c.onDidFocus(()=>{
            this._hoverFocusedKey.set(!0);
        })), this._register(c.onDidBlur(()=>{
            this._hoverFocusedKey.set(!1);
        })), this._register(this._hover.scrollbar.onScroll((l)=>{
            this._onDidScroll.fire(l);
        })), this._setRenderedHover(void 0), this._editor.addContentWidget(this);
    }
    get isVisibleFromKeyboard() {
        return this._renderedHover?.source === 2;
    }
    get isVisible() {
        return this._hoverVisibleKey.get() ?? !1;
    }
    get isFocused() {
        return this._hoverFocusedKey.get() ?? !1;
    }
    dispose() {
        super.dispose(), this._renderedHover?.dispose(), this._editor.removeContentWidget(this);
    }
    getId() {
        return YK.ID;
    }
    static _applyDimensions(e, t, n) {
        const i = typeof t == "number" ? `${t}px` : t, r = typeof n == "number" ? `${n}px` : n;
        e.style.width = i, e.style.height = r;
    }
    _setContentsDomNodeDimensions(e, t) {
        const n = this._hover.contentsDomNode;
        return YK._applyDimensions(n, e, t);
    }
    _setContainerDomNodeDimensions(e, t) {
        const n = this._hover.containerDomNode;
        return YK._applyDimensions(n, e, t);
    }
    _setScrollableElementDimensions(e, t) {
        const n = this._hover.scrollbar.getDomNode();
        return YK._applyDimensions(n, e, t);
    }
    _setHoverWidgetDimensions(e, t) {
        this._setContainerDomNodeDimensions(e, t), this._setScrollableElementDimensions(e, t), this._setContentsDomNodeDimensions(e, t), this._layoutContentWidget();
    }
    static _applyMaxDimensions(e, t, n) {
        const i = typeof t == "number" ? `${t}px` : t, r = typeof n == "number" ? `${n}px` : n;
        e.style.maxWidth = i, e.style.maxHeight = r;
    }
    _setHoverWidgetMaxDimensions(e, t) {
        YK._applyMaxDimensions(this._hover.contentsDomNode, e, t), YK._applyMaxDimensions(this._hover.scrollbar.getDomNode(), e, t), YK._applyMaxDimensions(this._hover.containerDomNode, e, t), this._hover.containerDomNode.style.setProperty("--vscode-hover-maxWidth", typeof e == "number" ? `${e}px` : e), this._layoutContentWidget();
    }
    _setAdjustedHoverWidgetDimensions(e) {
        this._setHoverWidgetMaxDimensions("none", "none"), this._setHoverWidgetDimensions(e.width, e.height);
    }
    _updateResizableNodeMaxDimensions() {
        const e = this._findMaximumRenderingWidth() ?? 1 / 0, t = this._findMaximumRenderingHeight() ?? 1 / 0;
        this._resizableNode.maxSize = new Tc(e, t), this._setHoverWidgetMaxDimensions(e, t);
    }
    _resize(e) {
        YK._lastDimensions = new Tc(e.width, e.height), this._setAdjustedHoverWidgetDimensions(e), this._resizableNode.layout(e.height, e.width), this._updateResizableNodeMaxDimensions(), this._hover.scrollbar.scanDomNode(), this._editor.layoutContentWidget(this), this._onDidResize.fire();
    }
    _findAvailableSpaceVertically() {
        const e = this._renderedHover?.showAtPosition;
        if (e) return this._positionPreference === 1 ? this._availableVerticalSpaceAbove(e) : this._availableVerticalSpaceBelow(e);
    }
    _findMaximumRenderingHeight() {
        const e = this._findAvailableSpaceVertically();
        if (!e) return;
        let n = this._hover.contentsDomNode.children.length - 1;
        return Array.from(this._hover.contentsDomNode.children).forEach((i)=>{
            n += i.clientHeight;
        }), Math.min(e, n);
    }
    _isHoverTextOverflowing() {
        this._hover.containerDomNode.style.setProperty("--vscode-hover-whiteSpace", "nowrap"), this._hover.containerDomNode.style.setProperty("--vscode-hover-sourceWhiteSpace", "nowrap");
        const e = Array.from(this._hover.contentsDomNode.children).some((t)=>t.scrollWidth > t.clientWidth);
        return this._hover.containerDomNode.style.removeProperty("--vscode-hover-whiteSpace"), this._hover.containerDomNode.style.removeProperty("--vscode-hover-sourceWhiteSpace"), e;
    }
    _findMaximumRenderingWidth() {
        if (!this._editor || !this._editor.hasModel()) return;
        const e = this._isHoverTextOverflowing(), t = typeof this._contentWidth > "u" ? 0 : this._contentWidth;
        return e || this._hover.containerDomNode.clientWidth < t ? LV(this._hover.containerDomNode.ownerDocument.body).width - 14 : this._hover.containerDomNode.clientWidth;
    }
    isMouseGettingCloser(e, t) {
        if (!this._renderedHover) return !1;
        if (this._renderedHover.initialMousePosX === void 0 || this._renderedHover.initialMousePosY === void 0) return this._renderedHover.initialMousePosX = e, this._renderedHover.initialMousePosY = t, !1;
        const n = Nk(this.getDomNode());
        this._renderedHover.closestMouseDistance === void 0 && (this._renderedHover.closestMouseDistance = U$c(this._renderedHover.initialMousePosX, this._renderedHover.initialMousePosY, n.left, n.top, n.width, n.height));
        const i = U$c(e, t, n.left, n.top, n.width, n.height);
        return i > this._renderedHover.closestMouseDistance + 4 ? !1 : (this._renderedHover.closestMouseDistance = Math.min(this._renderedHover.closestMouseDistance, i), !0);
    }
    _setRenderedHover(e) {
        this._renderedHover?.dispose(), this._renderedHover = e, this._hoverVisibleKey.set(!!e), this._hover.containerDomNode.classList.toggle("hidden", !e);
    }
    _updateFont() {
        const { fontSize: e, lineHeight: t } = this._editor.getOption(52), n = this._hover.contentsDomNode;
        n.style.fontSize = `${e}px`, n.style.lineHeight = `${t / e}`, Array.prototype.slice.call(this._hover.contentsDomNode.getElementsByClassName("code")).forEach((r)=>this._editor.applyFontInfo(r));
    }
    _updateContent(e) {
        const t = this._hover.contentsDomNode;
        t.style.paddingBottom = "", t.textContent = "", t.appendChild(e);
    }
    _layoutContentWidget() {
        this._editor.layoutContentWidget(this), this._hover.onContentsChanged();
    }
    _updateMaxDimensions() {
        const e = Math.max(this._editor.getLayoutInfo().height / 4, 250, YK._lastDimensions.height), t = Math.max(this._editor.getLayoutInfo().width * .66, 750, YK._lastDimensions.width);
        this._resizableNode.maxSize = new Tc(t, e), this._setHoverWidgetMaxDimensions(t, e);
    }
    _render(e) {
        this._setRenderedHover(e), this._updateFont(), this._updateContent(e.domNode), this.onContentsChanged(), this._editor.render();
    }
    getPosition() {
        return this._renderedHover ? {
            position: this._renderedHover.showAtPosition,
            secondaryPosition: this._renderedHover.showAtSecondaryPosition,
            positionAffinity: this._renderedHover.shouldAppearBeforeContent ? 3 : void 0,
            preference: [
                this._positionPreference ?? 1
            ]
        } : null;
    }
    show(e) {
        if (!this._editor || !this._editor.hasModel()) return;
        this._render(e);
        const t = dJ(this._hover.containerDomNode), n = e.showAtPosition;
        this._positionPreference = this._findPositionPreference(t, n) ?? 1, this.onContentsChanged(), e.shouldFocus && this._hover.containerDomNode.focus(), this._onDidResize.fire();
        const r = this._hover.containerDomNode.ownerDocument.activeElement === this._hover.containerDomNode && C7c(this._configurationService.getValue("accessibility.verbosity.hover") === !0 && this._accessibilityService.isScreenReaderOptimized(), this._keybindingService.lookupKeybinding("editor.action.accessibleView")?.getAriaLabel() ?? "");
        r && (this._hover.contentsDomNode.ariaLabel = this._hover.contentsDomNode.textContent + ", " + r);
    }
    hide() {
        if (!this._renderedHover) return;
        const e = this._renderedHover.shouldFocus || this._hoverFocusedKey.get();
        this._setRenderedHover(void 0), this._resizableNode.maxSize = new Tc(1 / 0, 1 / 0), this._resizableNode.clearSashHoverState(), this._hoverFocusedKey.set(!1), this._editor.layoutContentWidget(this), e && this._editor.focus();
    }
    _removeConstraintsRenderNormally() {
        const e = this._editor.getLayoutInfo();
        this._resizableNode.layout(e.height, e.width), this._setHoverWidgetDimensions("auto", "auto"), this._updateMaxDimensions();
    }
    setMinimumDimensions(e) {
        this._minimumSize = new Tc(Math.max(this._minimumSize.width, e.width), Math.max(this._minimumSize.height, e.height)), this._updateMinimumWidth();
    }
    _updateMinimumWidth() {
        const e = typeof this._contentWidth > "u" ? this._minimumSize.width : Math.min(this._contentWidth, this._minimumSize.width);
        this._resizableNode.minSize = new Tc(e, this._minimumSize.height);
    }
    onContentsChanged() {
        this._removeConstraintsRenderNormally();
        const e = this._hover.contentsDomNode;
        let t = dJ(e), n = LP(e) + 2;
        if (this._resizableNode.layout(t, n), this._setHoverWidgetDimensions(n, t), t = dJ(e), n = LP(e), this._contentWidth = n, this._updateMinimumWidth(), this._resizableNode.layout(t, n), this._renderedHover?.showAtPosition) {
            const i = dJ(this._hover.containerDomNode);
            this._positionPreference = this._findPositionPreference(i, this._renderedHover.showAtPosition);
        }
        this._layoutContentWidget();
    }
    focus() {
        this._hover.containerDomNode.focus();
    }
    scrollUp() {
        const e = this._hover.scrollbar.getScrollPosition().scrollTop, t = this._editor.getOption(52);
        this._hover.scrollbar.setScrollPosition({
            scrollTop: e - t.lineHeight
        });
    }
    scrollDown() {
        const e = this._hover.scrollbar.getScrollPosition().scrollTop, t = this._editor.getOption(52);
        this._hover.scrollbar.setScrollPosition({
            scrollTop: e + t.lineHeight
        });
    }
    scrollLeft() {
        const e = this._hover.scrollbar.getScrollPosition().scrollLeft;
        this._hover.scrollbar.setScrollPosition({
            scrollLeft: e - His
        });
    }
    scrollRight() {
        const e = this._hover.scrollbar.getScrollPosition().scrollLeft;
        this._hover.scrollbar.setScrollPosition({
            scrollLeft: e + His
        });
    }
    pageUp() {
        const e = this._hover.scrollbar.getScrollPosition().scrollTop, t = this._hover.scrollbar.getScrollDimensions().height;
        this._hover.scrollbar.setScrollPosition({
            scrollTop: e - t
        });
    }
    pageDown() {
        const e = this._hover.scrollbar.getScrollPosition().scrollTop, t = this._hover.scrollbar.getScrollDimensions().height;
        this._hover.scrollbar.setScrollPosition({
            scrollTop: e + t
        });
    }
    goToTop() {
        this._hover.scrollbar.setScrollPosition({
            scrollTop: 0
        });
    }
    goToBottom() {
        this._hover.scrollbar.setScrollPosition({
            scrollTop: this._hover.scrollbar.getScrollDimensions().scrollHeight
        });
    }
}, YK.ID = "editor.contrib.resizableContentHoverWidget", YK._lastDimensions = new Tc(0, 0), YK = ie([
    C(1, xn),
    C(2, qt),
    C(3, ym),
    C(4, qr)
], YK);

}
