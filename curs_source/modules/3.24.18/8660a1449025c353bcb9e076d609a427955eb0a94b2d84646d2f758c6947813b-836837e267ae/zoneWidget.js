import { Nt, Qe } from "./Iwo.js";
import { _b, la, ls } from "./color.js";
import { Hn } from "./dom_2.js";
import { zCr, zfn } from "./idGenerator.js";
import { cp } from "./objects.js";
import { Qs, qt } from "./range.js";
import { Kg, PC } from "./textModel.js";
import { E } from "./tslib.es6.js";
import { EBt, I5e, P_, RC, U3, fp, kY, kwe, roe, wtt } from "./ze.js";
import { jOy } from "./zoneWidget.css";
var Pzo, lKd, cKd, uKd, dKd, Mzo, hKd, Dzo;
export { Dzo, Mzo, Pzo, cKd, dKd, hKd, lKd, uKd };
var __wakaru_pKd_initialized = false;
export function pKd() {
if (__wakaru_pKd_initialized) return;
__wakaru_pKd_initialized = true;
"use strict";
E(), Hn(), U3(), kwe(), _b(), zfn(), Qe(), cp(), jOy(), Qs(), PC(), Pzo = new ls(new la(0, 122, 204)), lKd = {
    showArrow: !0,
    showFrame: !0,
    className: "",
    frameColor: Pzo,
    arrowColor: Pzo,
    keepEditorSelection: !1,
    moveToLineWhenShown: !0
}, cKd = "vs.editor.contrib.zoneWidget", uKd = class {
    constructor(t, e, n, i, r, s, o, a){
        this.id = "", this.domNode = t, this.afterLineNumber = e, this.afterColumn = n, this.heightInLines = i, this.showInHiddenAreas = o, this.ordinal = a, this._onDomNodeTop = r, this._onComputedHeight = s;
    }
    onDomNodeTop(t) {
        this._onDomNodeTop(t);
    }
    onComputedHeight(t) {
        this._onComputedHeight(t);
    }
}, dKd = class {
    constructor(t, e){
        this._id = t, this._domNode = e;
    }
    getId() {
        return this._id;
    }
    getDomNode() {
        return this._domNode;
    }
    getPosition() {
        return null;
    }
}, Mzo = class DRb {
    constructor(e){
        this._editor = e, this._ruleName = DRb._IdGenerator.nextId(), this._color = null, this._height = -1, this._decorations = this._editor.createDecorationsCollection();
    }
    dispose() {
        this.hide(), wtt(this._ruleName);
    }
    set color(e) {
        this._color !== e && (this._color = e, this._updateStyle());
    }
    set height(e) {
        this._height !== e && (this._height = e, this._updateStyle());
    }
    _updateStyle() {
        wtt(this._ruleName), roe(`.monaco-editor ${this._ruleName}`, `border-style: solid; border-color: transparent; border-bottom-color: ${this._color}; border-width: ${this._height}px; bottom: -${this._height}px !important; margin-left: -${this._height}px; `);
    }
    show(e) {
        e.column === 1 && (e = {
            lineNumber: e.lineNumber,
            column: 2
        }), this._decorations.set([
            {
                range: qt.fromPositions(e),
                options: {
                    description: "zone-widget-arrow",
                    className: this._ruleName,
                    stickiness: 1
                }
            }
        ]);
    }
    hide() {
        this._decorations.clear();
    }
}, Mzo._IdGenerator = new zCr(".arrow-decoration-"), hKd = Mzo, Dzo = class {
    constructor(t, e = {}){
        this._arrow = null, this._overlayWidget = null, this._resizeSash = null, this._isSashResizeHeight = !1, this._viewZone = null, this._disposables = new Nt, this.container = null, this._isShowing = !1, this.editor = t, this._positionMarkerId = this.editor.createDecorationsCollection(), this.options = fp(e), kY(this.options, lKd, !1), this.domNode = document.createElement("div"), this.options.isAccessible || (this.domNode.setAttribute("aria-hidden", "true"), this.domNode.setAttribute("role", "presentation")), this._disposables.add(this.editor.onDidLayoutChange((n)=>{
            const i = this._getWidth(n);
            this.domNode.style.width = i + "px", this.domNode.style.left = this._getLeft(n) + "px", this._onWidth(i);
        }));
    }
    dispose() {
        this._overlayWidget && (this.editor.removeOverlayWidget(this._overlayWidget), this._overlayWidget = null), this._viewZone && this.editor.changeViewZones((t)=>{
            this._viewZone && t.removeZone(this._viewZone.id), this._viewZone = null;
        }), this._positionMarkerId.clear(), this._disposables.dispose();
    }
    create() {
        this.domNode.classList.add("zone-widget"), this.options.className && this.domNode.classList.add(this.options.className), this.container = document.createElement("div"), this.container.classList.add("zone-widget-container"), this.domNode.appendChild(this.container), this.options.showArrow && (this._arrow = new hKd(this.editor), this._disposables.add(this._arrow)), this._fillContainer(this.container), this._initSash(), this._applyStyles();
    }
    style(t) {
        t.frameColor && (this.options.frameColor = t.frameColor), t.arrowColor && (this.options.arrowColor = t.arrowColor), this._applyStyles();
    }
    _applyStyles() {
        if (this.container && this.options.frameColor) {
            const t = this.options.frameColor.toString();
            this.container.style.borderTopColor = t, this.container.style.borderBottomColor = t;
        }
        if (this._arrow && this.options.arrowColor) {
            const t = this.options.arrowColor.toString();
            this._arrow.color = t;
        }
    }
    _getWidth(t) {
        return t.width - t.minimap.minimapWidth - t.verticalScrollbarWidth;
    }
    _getLeft(t) {
        return t.minimap.minimapWidth > 0 && t.minimap.minimapLeft === 0 ? t.minimap.minimapWidth : 0;
    }
    _onViewZoneTop(t) {
        this.domNode.style.top = t + "px";
    }
    _onViewZoneHeight(t) {
        if (this.domNode.style.height = `${t}px`, this.container) {
            const e = t - this._decoratingElementsHeight();
            this.container.style.height = `${e}px`;
            const n = this.editor.getLayoutInfo();
            this._doLayout(e, this._getWidth(n));
        }
        this._resizeSash?.layout();
    }
    get position() {
        const t = this._positionMarkerId.getRange(0);
        if (t) return t.getStartPosition();
    }
    hasFocus() {
        return this.domNode.contains(RC());
    }
    show(t, e) {
        const n = qt.isIRange(t) ? qt.lift(t) : qt.fromPositions(t);
        this._isShowing = !0, this._showImpl(n, e), this._isShowing = !1, this._positionMarkerId.set([
            {
                range: n,
                options: Kg.EMPTY
            }
        ]);
    }
    updatePositionAndHeight(t, e) {
        this._viewZone && (t = qt.isIRange(t) ? qt.getStartPosition(t) : t, this._viewZone.afterLineNumber = t.lineNumber, this._viewZone.afterColumn = t.column, this._viewZone.heightInLines = e ?? this._viewZone.heightInLines, this.editor.changeViewZones((n)=>{
            n.layoutZone(this._viewZone.id);
        }), this._positionMarkerId.set([
            {
                range: qt.isIRange(t) ? t : qt.fromPositions(t),
                options: Kg.EMPTY
            }
        ]), this._updateSashEnablement());
    }
    hide() {
        this._viewZone && (this.editor.changeViewZones((t)=>{
            this._viewZone && t.removeZone(this._viewZone.id);
        }), this._viewZone = null), this._overlayWidget && (this.editor.removeOverlayWidget(this._overlayWidget), this._overlayWidget = null), this._arrow?.hide(), this._positionMarkerId.clear(), this._isSashResizeHeight = !1;
    }
    _decoratingElementsHeight() {
        const t = this.editor.getOption(68);
        let e = 0;
        if (this.options.showArrow) {
            const n = Math.round(t / 3);
            e += 2 * n;
        }
        if (this.options.showFrame) {
            const n = Math.round(t / 9);
            e += 2 * n;
        }
        return e;
    }
    _getMaximumHeightInLines() {
        return Math.max(12, this.editor.getLayoutInfo().height / this.editor.getOption(68) * .8);
    }
    _showImpl(t, e) {
        const n = t.getStartPosition(), i = this.editor.getLayoutInfo(), r = this._getWidth(i);
        this.domNode.style.width = `${r}px`, this.domNode.style.left = this._getLeft(i) + "px";
        const s = document.createElement("div");
        s.style.overflow = "hidden";
        const o = this.editor.getOption(68), a = this._getMaximumHeightInLines();
        a !== void 0 && (e = Math.min(e, a));
        let l = 0, c = 0;
        if (this._arrow && this.options.showArrow && (l = Math.round(o / 3), this._arrow.height = l, this._arrow.show(n)), this.options.showFrame && (c = Math.round(o / 9)), this.editor.changeViewZones((h)=>{
            this._viewZone && h.removeZone(this._viewZone.id), this._overlayWidget && (this.editor.removeOverlayWidget(this._overlayWidget), this._overlayWidget = null), this.domNode.style.top = "-1000px", this._viewZone = new uKd(s, n.lineNumber, n.column, e, (p)=>this._onViewZoneTop(p), (p)=>this._onViewZoneHeight(p), this.options.showInHiddenAreas, this.options.ordinal), this._viewZone.id = h.addZone(this._viewZone), this._overlayWidget = new dKd(cKd + this._viewZone.id, this.domNode), this.editor.addOverlayWidget(this._overlayWidget);
        }), this._updateSashEnablement(), this.container && this.options.showFrame) {
            const h = this.options.frameWidth ? this.options.frameWidth : c;
            this.container.style.borderTopWidth = h + "px", this.container.style.borderBottomWidth = h + "px";
        }
        const u = e * o - this._decoratingElementsHeight();
        this.container && (this.container.style.top = l + "px", this.container.style.height = u + "px", this.container.style.overflow = "hidden"), this._doLayout(u, r), this.options.keepEditorSelection || this.editor.setSelection(t);
        const d = this.editor.getModel();
        if (d && this.options.moveToLineWhenShown) {
            const h = d.validateRange(new qt(t.startLineNumber, 1, t.endLineNumber + 1, 1));
            this.revealRange(h, h.startLineNumber === d.getLineCount());
        }
    }
    revealRange(t, e) {
        e ? this.editor.revealLineNearTop(t.endLineNumber, 0) : this.editor.revealRange(t, 0);
    }
    setCssClass(t, e) {
        this.container && (e && this.container.classList.remove(e), this.container.classList.add(t));
    }
    _onWidth(t) {}
    _doLayout(t, e) {}
    _relayout(t, e) {
        const n = this._getMaximumHeightInLines(), i = e && n !== void 0 ? Math.min(n, t) : t;
        this._viewZone && this._viewZone.heightInLines !== i && (this.editor.changeViewZones((r)=>{
            this._viewZone && (this._viewZone.heightInLines = i, r.layoutZone(this._viewZone.id));
        }), this._updateSashEnablement());
    }
    _initSash() {
        if (this._resizeSash) return;
        this._resizeSash = this._disposables.add(new I5e(this.domNode, this, {
            orientation: P_.HORIZONTAL
        })), this.options.isResizeable || (this._resizeSash.state = EBt.Disabled);
        let t;
        this._disposables.add(this._resizeSash.onDidStart((e)=>{
            this._viewZone && (t = {
                startY: e.startY,
                heightInLines: this._viewZone.heightInLines,
                ...this._getResizeBounds()
            });
        })), this._disposables.add(this._resizeSash.onDidEnd(()=>{
            t = void 0;
        })), this._disposables.add(this._resizeSash.onDidChange((e)=>{
            if (t) {
                const n = (e.currentY - t.startY) / this.editor.getOption(68), i = n < 0 ? Math.ceil(n) : Math.floor(n), r = t.heightInLines + i;
                r > t.minLines && r < t.maxLines && (this._isSashResizeHeight = !0, this._relayout(r));
            }
        }));
    }
    _updateSashEnablement() {
        if (this._resizeSash) {
            const { minLines: t, maxLines: e } = this._getResizeBounds();
            this._resizeSash.state = t === e ? EBt.Disabled : EBt.Enabled;
        }
    }
    get _usesResizeHeight() {
        return this._isSashResizeHeight;
    }
    _getResizeBounds() {
        return {
            minLines: 5,
            maxLines: 35
        };
    }
    getHorizontalSashLeft() {
        return 0;
    }
    getHorizontalSashTop() {
        return (this.domNode.style.height === null ? 0 : parseInt(this.domNode.style.height)) - this._decoratingElementsHeight() / 2;
    }
    getHorizontalSashWidth() {
        const t = this.editor.getLayoutInfo();
        return t.width - t.minimap.minimapWidth;
    }
};

}
