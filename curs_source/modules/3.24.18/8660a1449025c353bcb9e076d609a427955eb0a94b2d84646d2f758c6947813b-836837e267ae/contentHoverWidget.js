import { Gt, tt } from "./Iwo.js";
import { GS, Ty } from "./accessibility.js";
import { or, yi } from "./configuration.js";
import { Hi, Rr } from "./contextkey.js";
import { Hn, nd } from "./dom_2.js";
import { cg, si } from "./editorContextKeys.js";
import { Iw, jTr } from "./hoverWidget.js";
import { Al, ru } from "./keybinding.js";
import { RVd, wOy } from "./resizableContentWidget.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ex, FAe, Mj, PVd, Qqd, Yde, fr, j3 } from "./ze.js";
var mzo, Toe;
export { Toe, mzo };
var __wakaru_COy_initialized = false;
export function COy() {
if (__wakaru_COy_initialized) return;
__wakaru_COy_initialized = true;
"use strict";
E(), Hn(), ru(), wOy(), Hi(), or(), Ty(), cg(), Iw(), Gt(), mzo = 30, Toe = class extends RVd {
    constructor(t, e, n, i, r){
        const s = t.getOption(68) + 8, o = 150, a = new nd(o, s);
        super(t, a), this._configurationService = n, this._accessibilityService = i, this._keybindingService = r, this._hover = this._register(new jTr(!0)), this._onDidResize = this._register(new tt), this.onDidResize = this._onDidResize.event, this._onDidScroll = this._register(new tt), this.onDidScroll = this._onDidScroll.event, this._minimumSize = a, this._hoverVisibleKey = si.hoverVisible.bindTo(e), this._hoverFocusedKey = si.hoverFocused.bindTo(e), fr(this._resizableNode.domNode, this._hover.containerDomNode), this._resizableNode.domNode.style.zIndex = "50", this._resizableNode.domNode.className = "monaco-resizable-hover", this._register(this._editor.onDidLayoutChange(()=>{
            this.isVisible && this._updateMaxDimensions();
        })), this._register(this._editor.onDidChangeConfiguration((c)=>{
            c.hasChanged(52) && this._updateFont();
        }));
        const l = this._register(j3(this._resizableNode.domNode));
        this._register(l.onDidFocus(()=>{
            this._hoverFocusedKey.set(!0);
        })), this._register(l.onDidBlur(()=>{
            this._hoverFocusedKey.set(!1);
        })), this._register(this._hover.scrollbar.onScroll((c)=>{
            this._onDidScroll.fire(c);
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
        return Toe.ID;
    }
    static _applyDimensions(t, e, n) {
        const i = typeof e == "number" ? `${e}px` : e, r = typeof n == "number" ? `${n}px` : n;
        t.style.width = i, t.style.height = r;
    }
    _setContentsDomNodeDimensions(t, e) {
        const n = this._hover.contentsDomNode;
        return Toe._applyDimensions(n, t, e);
    }
    _setContainerDomNodeDimensions(t, e) {
        const n = this._hover.containerDomNode;
        return Toe._applyDimensions(n, t, e);
    }
    _setScrollableElementDimensions(t, e) {
        const n = this._hover.scrollbar.getDomNode();
        return Toe._applyDimensions(n, t, e);
    }
    _setHoverWidgetDimensions(t, e) {
        this._setContainerDomNodeDimensions(t, e), this._setScrollableElementDimensions(t, e), this._setContentsDomNodeDimensions(t, e), this._layoutContentWidget();
    }
    static _applyMaxDimensions(t, e, n) {
        const i = typeof e == "number" ? `${e}px` : e, r = typeof n == "number" ? `${n}px` : n;
        t.style.maxWidth = i, t.style.maxHeight = r;
    }
    _setHoverWidgetMaxDimensions(t, e) {
        Toe._applyMaxDimensions(this._hover.contentsDomNode, t, e), Toe._applyMaxDimensions(this._hover.scrollbar.getDomNode(), t, e), Toe._applyMaxDimensions(this._hover.containerDomNode, t, e), this._hover.containerDomNode.style.setProperty("--vscode-hover-maxWidth", typeof t == "number" ? `${t}px` : t), this._layoutContentWidget();
    }
    _setAdjustedHoverWidgetDimensions(t) {
        this._setHoverWidgetMaxDimensions("none", "none"), this._setHoverWidgetDimensions(t.width, t.height);
    }
    _updateResizableNodeMaxDimensions() {
        const t = this._findMaximumRenderingWidth() ?? 1 / 0, e = this._findMaximumRenderingHeight() ?? 1 / 0;
        this._resizableNode.maxSize = new nd(t, e), this._setHoverWidgetMaxDimensions(t, e);
    }
    _resize(t) {
        Toe._lastDimensions = new nd(t.width, t.height), this._setAdjustedHoverWidgetDimensions(t), this._resizableNode.layout(t.height, t.width), this._updateResizableNodeMaxDimensions(), this._hover.scrollbar.scanDomNode(), this._editor.layoutContentWidget(this), this._onDidResize.fire();
    }
    _findAvailableSpaceVertically() {
        const t = this._renderedHover?.showAtPosition;
        if (t) return this._positionPreference === 1 ? this._availableVerticalSpaceAbove(t) : this._availableVerticalSpaceBelow(t);
    }
    _findMaximumRenderingHeight() {
        const t = this._findAvailableSpaceVertically();
        if (!t) return;
        let n = this._hover.contentsDomNode.children.length - 1;
        return Array.from(this._hover.contentsDomNode.children).forEach((i)=>{
            n += i.clientHeight;
        }), Math.min(t, n);
    }
    _isHoverTextOverflowing() {
        this._hover.containerDomNode.style.setProperty("--vscode-hover-whiteSpace", "nowrap"), this._hover.containerDomNode.style.setProperty("--vscode-hover-sourceWhiteSpace", "nowrap");
        const t = Array.from(this._hover.contentsDomNode.children).some((e)=>e.scrollWidth > e.clientWidth);
        return this._hover.containerDomNode.style.removeProperty("--vscode-hover-whiteSpace"), this._hover.containerDomNode.style.removeProperty("--vscode-hover-sourceWhiteSpace"), t;
    }
    _findMaximumRenderingWidth() {
        if (!this._editor || !this._editor.hasModel()) return;
        const t = this._isHoverTextOverflowing(), e = typeof this._contentWidth > "u" ? 0 : this._contentWidth;
        return t || this._hover.containerDomNode.clientWidth < e ? Yde(this._hover.containerDomNode.ownerDocument.body).width - 14 : this._hover.containerDomNode.clientWidth;
    }
    isMouseGettingCloser(t, e) {
        if (!this._renderedHover) return !1;
        if (this._renderedHover.initialMousePosX === void 0 || this._renderedHover.initialMousePosY === void 0) return this._renderedHover.initialMousePosX = t, this._renderedHover.initialMousePosY = e, !1;
        const n = Ex(this.getDomNode());
        this._renderedHover.closestMouseDistance === void 0 && (this._renderedHover.closestMouseDistance = PVd(this._renderedHover.initialMousePosX, this._renderedHover.initialMousePosY, n.left, n.top, n.width, n.height));
        const i = PVd(t, e, n.left, n.top, n.width, n.height);
        return i > this._renderedHover.closestMouseDistance + 4 ? !1 : (this._renderedHover.closestMouseDistance = Math.min(this._renderedHover.closestMouseDistance, i), !0);
    }
    _setRenderedHover(t) {
        this._renderedHover?.dispose(), this._renderedHover = t, this._hoverVisibleKey.set(!!t), this._hover.containerDomNode.classList.toggle("hidden", !t);
    }
    _updateFont() {
        const { fontSize: t, lineHeight: e } = this._editor.getOption(52), n = this._hover.contentsDomNode;
        n.style.fontSize = `${t}px`, n.style.lineHeight = `${e / t}`, Array.prototype.slice.call(this._hover.contentsDomNode.getElementsByClassName("code")).forEach((r)=>this._editor.applyFontInfo(r));
    }
    _updateContent(t) {
        const e = this._hover.contentsDomNode;
        e.style.paddingBottom = "", e.textContent = "", e.appendChild(t);
    }
    _layoutContentWidget() {
        this._editor.layoutContentWidget(this), this._hover.onContentsChanged();
    }
    _updateMaxDimensions() {
        const t = Math.max(this._editor.getLayoutInfo().height / 4, 250, Toe._lastDimensions.height), e = Math.max(this._editor.getLayoutInfo().width * .66, 750, Toe._lastDimensions.width);
        this._resizableNode.maxSize = new nd(e, t), this._setHoverWidgetMaxDimensions(e, t);
    }
    _render(t) {
        this._setRenderedHover(t), this._updateFont(), this._updateContent(t.domNode), this.onContentsChanged(), this._editor.render();
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
    show(t) {
        if (!this._editor || !this._editor.hasModel()) return;
        this._render(t);
        const e = FAe(this._hover.containerDomNode), n = t.showAtPosition;
        this._positionPreference = this._findPositionPreference(e, n) ?? 1, this.onContentsChanged(), t.shouldFocus && this._hover.containerDomNode.focus(), this._onDidResize.fire();
        const r = this._hover.containerDomNode.ownerDocument.activeElement === this._hover.containerDomNode && Qqd(this._configurationService.getValue("accessibility.verbosity.hover") === !0 && this._accessibilityService.isScreenReaderOptimized(), this._keybindingService.lookupKeybinding("editor.action.accessibleView")?.getAriaLabel() ?? "");
        r && (this._hover.contentsDomNode.ariaLabel = this._hover.contentsDomNode.textContent + ", " + r);
    }
    hide() {
        if (!this._renderedHover) return;
        const t = this._renderedHover.shouldFocus || this._hoverFocusedKey.get();
        this._setRenderedHover(void 0), this._resizableNode.maxSize = new nd(1 / 0, 1 / 0), this._resizableNode.clearSashHoverState(), this._hoverFocusedKey.set(!1), this._editor.layoutContentWidget(this), t && this._editor.focus();
    }
    _removeConstraintsRenderNormally() {
        const t = this._editor.getLayoutInfo();
        this._resizableNode.layout(t.height, t.width), this._setHoverWidgetDimensions("auto", "auto"), this._updateMaxDimensions();
    }
    setMinimumDimensions(t) {
        this._minimumSize = new nd(Math.max(this._minimumSize.width, t.width), Math.max(this._minimumSize.height, t.height)), this._updateMinimumWidth();
    }
    _updateMinimumWidth() {
        const t = typeof this._contentWidth > "u" ? this._minimumSize.width : Math.min(this._contentWidth, this._minimumSize.width);
        this._resizableNode.minSize = new nd(t, this._minimumSize.height);
    }
    onContentsChanged() {
        this._removeConstraintsRenderNormally();
        const t = this._hover.contentsDomNode;
        let e = FAe(t), n = Mj(t) + 2;
        if (this._resizableNode.layout(e, n), this._setHoverWidgetDimensions(n, e), e = FAe(t), n = Mj(t), this._contentWidth = n, this._updateMinimumWidth(), this._resizableNode.layout(e, n), this._renderedHover?.showAtPosition) {
            const i = FAe(this._hover.containerDomNode);
            this._positionPreference = this._findPositionPreference(i, this._renderedHover.showAtPosition);
        }
        this._layoutContentWidget();
    }
    focus() {
        this._hover.containerDomNode.focus();
    }
    scrollUp() {
        const t = this._hover.scrollbar.getScrollPosition().scrollTop, e = this._editor.getOption(52);
        this._hover.scrollbar.setScrollPosition({
            scrollTop: t - e.lineHeight
        });
    }
    scrollDown() {
        const t = this._hover.scrollbar.getScrollPosition().scrollTop, e = this._editor.getOption(52);
        this._hover.scrollbar.setScrollPosition({
            scrollTop: t + e.lineHeight
        });
    }
    scrollLeft() {
        const t = this._hover.scrollbar.getScrollPosition().scrollLeft;
        this._hover.scrollbar.setScrollPosition({
            scrollLeft: t - mzo
        });
    }
    scrollRight() {
        const t = this._hover.scrollbar.getScrollPosition().scrollLeft;
        this._hover.scrollbar.setScrollPosition({
            scrollLeft: t + mzo
        });
    }
    pageUp() {
        const t = this._hover.scrollbar.getScrollPosition().scrollTop, e = this._hover.scrollbar.getScrollDimensions().height;
        this._hover.scrollbar.setScrollPosition({
            scrollTop: t - e
        });
    }
    pageDown() {
        const t = this._hover.scrollbar.getScrollPosition().scrollTop, e = this._hover.scrollbar.getScrollDimensions().height;
        this._hover.scrollbar.setScrollPosition({
            scrollTop: t + e
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
}, Toe.ID = "editor.contrib.resizableContentHoverWidget", Toe._lastDimensions = new nd(0, 0), Toe = Re([
    F(1, Rr),
    F(2, yi),
    F(3, GS),
    F(4, Al)
], Toe);

}
