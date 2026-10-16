import { He, Se } from "./HVr.js";
import { $s, Ci, Sm } from "./color.js";
import { en } from "./dom_2.js";
import { gFt, vbi } from "./idGenerator.js";
import { bu } from "./objects.js";
import { WS, Xge, _Be, lu, nw, qK, smt, tW, xp, y3 } from "./qIc.js";
import { dt, qi } from "./range.js";
import { Mv, Vd } from "./textModel.js";
import { x } from "./tslib.es6.js";
import { skg } from "./zoneWidget.css";
var rrs, fHc, vHc, _Hc, bHc, srs, yHc, ZFt;
export { ZFt, _Hc, bHc, fHc, rrs, srs, vHc, yHc };
var __wakaru_r_n_initialized = false;
export function r_n() {
if (__wakaru_r_n_initialized) return;
__wakaru_r_n_initialized = true;
"use strict";
x(), en(), nw(), qK(), Sm(), gFt(), Se(), bu(), skg(), qi(), Mv(), rrs = new Ci(new $s(0, 122, 204)), fHc = {
    showArrow: !0,
    showFrame: !0,
    className: "",
    frameColor: rrs,
    arrowColor: rrs,
    keepEditorSelection: !1,
    moveToLineWhenShown: !0
}, vHc = "vs.editor.contrib.zoneWidget", _Hc = class {
    constructor(e, t, n, i, r, s, o, a){
        this.id = "", this.domNode = e, this.afterLineNumber = t, this.afterColumn = n, this.heightInLines = i, this.showInHiddenAreas = o, this.ordinal = a, this._onDomNodeTop = r, this._onComputedHeight = s;
    }
    onDomNodeTop(e) {
        this._onDomNodeTop(e);
    }
    onComputedHeight(e) {
        this._onComputedHeight(e);
    }
}, bHc = class {
    constructor(e, t){
        this._id = e, this._domNode = t;
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
}, srs = class Qkm {
    constructor(t){
        this._editor = t, this._ruleName = Qkm._IdGenerator.nextId(), this._color = null, this._height = -1, this._decorations = this._editor.createDecorationsCollection();
    }
    dispose() {
        this.hide(), _Be(this._ruleName);
    }
    set color(t) {
        this._color !== t && (this._color = t, this._updateStyle());
    }
    set height(t) {
        this._height !== t && (this._height = t, this._updateStyle());
    }
    _updateStyle() {
        _Be(this._ruleName), tW(`.monaco-editor ${this._ruleName}`, `border-style: solid; border-color: transparent; border-bottom-color: ${this._color}; border-width: ${this._height}px; bottom: -${this._height}px !important; margin-left: -${this._height}px; `);
    }
    show(t) {
        t.column === 1 && (t = {
            lineNumber: t.lineNumber,
            column: 2
        }), this._decorations.set([
            {
                range: dt.fromPositions(t),
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
}, srs._IdGenerator = new vbi(".arrow-decoration-"), yHc = srs, ZFt = class {
    constructor(e, t = {}){
        this._arrow = null, this._overlayWidget = null, this._resizeSash = null, this._isSashResizeHeight = !1, this._viewZone = null, this._disposables = new He, this.container = null, this._isShowing = !1, this.editor = e, this._positionMarkerId = this.editor.createDecorationsCollection(), this.options = lu(t), y3(this.options, fHc, !1), this.domNode = document.createElement("div"), this.options.isAccessible || (this.domNode.setAttribute("aria-hidden", "true"), this.domNode.setAttribute("role", "presentation")), this._disposables.add(this.editor.onDidLayoutChange((n)=>{
            const i = this._getWidth(n);
            this.domNode.style.width = i + "px", this.domNode.style.left = this._getLeft(n) + "px", this._onWidth(i);
        }));
    }
    dispose() {
        this._overlayWidget && (this.editor.removeOverlayWidget(this._overlayWidget), this._overlayWidget = null), this._viewZone && this.editor.changeViewZones((e)=>{
            this._viewZone && e.removeZone(this._viewZone.id), this._viewZone = null;
        }), this._positionMarkerId.clear(), this._disposables.dispose();
    }
    create() {
        this.domNode.classList.add("zone-widget"), this.options.className && this.domNode.classList.add(this.options.className), this.container = document.createElement("div"), this.container.classList.add("zone-widget-container"), this.domNode.appendChild(this.container), this.options.showArrow && (this._arrow = new yHc(this.editor), this._disposables.add(this._arrow)), this._fillContainer(this.container), this._initSash(), this._applyStyles();
    }
    style(e) {
        e.frameColor && (this.options.frameColor = e.frameColor), e.arrowColor && (this.options.arrowColor = e.arrowColor), this._applyStyles();
    }
    _applyStyles() {
        if (this.container && this.options.frameColor) {
            const e = this.options.frameColor.toString();
            this.container.style.borderTopColor = e, this.container.style.borderBottomColor = e;
        }
        if (this._arrow && this.options.arrowColor) {
            const e = this.options.arrowColor.toString();
            this._arrow.color = e;
        }
    }
    _getWidth(e) {
        return e.width - e.minimap.minimapWidth - e.verticalScrollbarWidth;
    }
    _getLeft(e) {
        return e.minimap.minimapWidth > 0 && e.minimap.minimapLeft === 0 ? e.minimap.minimapWidth : 0;
    }
    _onViewZoneTop(e) {
        this.domNode.style.top = e + "px";
    }
    _onViewZoneHeight(e) {
        if (this.domNode.style.height = `${e}px`, this.container) {
            const t = e - this._decoratingElementsHeight();
            this.container.style.height = `${t}px`;
            const n = this.editor.getLayoutInfo();
            this._doLayout(t, this._getWidth(n));
        }
        this._resizeSash?.layout();
    }
    get position() {
        const e = this._positionMarkerId.getRange(0);
        if (e) return e.getStartPosition();
    }
    hasFocus() {
        return this.domNode.contains(WS());
    }
    show(e, t) {
        const n = dt.isIRange(e) ? dt.lift(e) : dt.fromPositions(e);
        this._isShowing = !0, this._showImpl(n, t), this._isShowing = !1, this._positionMarkerId.set([
            {
                range: n,
                options: Vd.EMPTY
            }
        ]);
    }
    updatePositionAndHeight(e, t) {
        this._viewZone && (e = dt.isIRange(e) ? dt.getStartPosition(e) : e, this._viewZone.afterLineNumber = e.lineNumber, this._viewZone.afterColumn = e.column, this._viewZone.heightInLines = t ?? this._viewZone.heightInLines, this.editor.changeViewZones((n)=>{
            n.layoutZone(this._viewZone.id);
        }), this._positionMarkerId.set([
            {
                range: dt.isIRange(e) ? e : dt.fromPositions(e),
                options: Vd.EMPTY
            }
        ]), this._updateSashEnablement());
    }
    hide() {
        this._viewZone && (this.editor.changeViewZones((e)=>{
            this._viewZone && e.removeZone(this._viewZone.id);
        }), this._viewZone = null), this._overlayWidget && (this.editor.removeOverlayWidget(this._overlayWidget), this._overlayWidget = null), this._arrow?.hide(), this._positionMarkerId.clear(), this._isSashResizeHeight = !1;
    }
    _decoratingElementsHeight() {
        const e = this.editor.getOption(68);
        let t = 0;
        if (this.options.showArrow) {
            const n = Math.round(e / 3);
            t += 2 * n;
        }
        if (this.options.showFrame) {
            const n = Math.round(e / 9);
            t += 2 * n;
        }
        return t;
    }
    _getMaximumHeightInLines() {
        return Math.max(12, this.editor.getLayoutInfo().height / this.editor.getOption(68) * .8);
    }
    _showImpl(e, t) {
        const n = e.getStartPosition(), i = this.editor.getLayoutInfo(), r = this._getWidth(i);
        this.domNode.style.width = `${r}px`, this.domNode.style.left = this._getLeft(i) + "px";
        const s = document.createElement("div");
        s.style.overflow = "hidden";
        const o = this.editor.getOption(68), a = this._getMaximumHeightInLines();
        a !== void 0 && (t = Math.min(t, a));
        let c = 0, l = 0;
        if (this._arrow && this.options.showArrow && (c = Math.round(o / 3), this._arrow.height = c, this._arrow.show(n)), this.options.showFrame && (l = Math.round(o / 9)), this.editor.changeViewZones((p)=>{
            this._viewZone && p.removeZone(this._viewZone.id), this._overlayWidget && (this.editor.removeOverlayWidget(this._overlayWidget), this._overlayWidget = null), this.domNode.style.top = "-1000px", this._viewZone = new _Hc(s, n.lineNumber, n.column, t, (g)=>this._onViewZoneTop(g), (g)=>this._onViewZoneHeight(g), this.options.showInHiddenAreas, this.options.ordinal), this._viewZone.id = p.addZone(this._viewZone), this._overlayWidget = new bHc(vHc + this._viewZone.id, this.domNode), this.editor.addOverlayWidget(this._overlayWidget);
        }), this._updateSashEnablement(), this.container && this.options.showFrame) {
            const p = this.options.frameWidth ? this.options.frameWidth : l;
            this.container.style.borderTopWidth = p + "px", this.container.style.borderBottomWidth = p + "px";
        }
        const u = t * o - this._decoratingElementsHeight();
        this.container && (this.container.style.top = c + "px", this.container.style.height = u + "px", this.container.style.overflow = "hidden"), this._doLayout(u, r), this.options.keepEditorSelection || this.editor.setSelection(e);
        const h = this.editor.getModel();
        if (h && this.options.moveToLineWhenShown) {
            const p = h.validateRange(new dt(e.startLineNumber, 1, e.endLineNumber + 1, 1));
            this.revealRange(p, p.startLineNumber === h.getLineCount());
        }
    }
    revealRange(e, t) {
        t ? this.editor.revealLineNearTop(e.endLineNumber, 0) : this.editor.revealRange(e, 0);
    }
    setCssClass(e, t) {
        this.container && (t && this.container.classList.remove(t), this.container.classList.add(e));
    }
    _onWidth(e) {}
    _doLayout(e, t) {}
    _relayout(e, t) {
        const n = this._getMaximumHeightInLines(), i = t && n !== void 0 ? Math.min(n, e) : e;
        this._viewZone && this._viewZone.heightInLines !== i && (this.editor.changeViewZones((r)=>{
            this._viewZone && (this._viewZone.heightInLines = i, r.layoutZone(this._viewZone.id));
        }), this._updateSashEnablement());
    }
    _initSash() {
        if (this._resizeSash) return;
        this._resizeSash = this._disposables.add(new Xge(this.domNode, this, {
            orientation: xp.HORIZONTAL
        })), this.options.isResizeable || (this._resizeSash.state = smt.Disabled);
        let e;
        this._disposables.add(this._resizeSash.onDidStart((t)=>{
            this._viewZone && (e = {
                startY: t.startY,
                heightInLines: this._viewZone.heightInLines,
                ...this._getResizeBounds()
            });
        })), this._disposables.add(this._resizeSash.onDidEnd(()=>{
            e = void 0;
        })), this._disposables.add(this._resizeSash.onDidChange((t)=>{
            if (e) {
                const n = (t.currentY - e.startY) / this.editor.getOption(68), i = n < 0 ? Math.ceil(n) : Math.floor(n), r = e.heightInLines + i;
                r > e.minLines && r < e.maxLines && (this._isSashResizeHeight = !0, this._relayout(r));
            }
        }));
    }
    _updateSashEnablement() {
        if (this._resizeSash) {
            const { minLines: e, maxLines: t } = this._getResizeBounds();
            this._resizeSash.state = e === t ? smt.Disabled : smt.Enabled;
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
        const e = this.editor.getLayoutInfo();
        return e.width - e.minimap.minimapWidth;
    }
};

}
