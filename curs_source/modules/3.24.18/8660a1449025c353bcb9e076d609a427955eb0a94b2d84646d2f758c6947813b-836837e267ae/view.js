import { Ei, Gt, Qe, Vn, st, tt, xh } from "./Iwo.js";
import { DMy, jjd } from "./blockDecorations.js";
import { $jd, NMy } from "./contentWidgets.js";
import { Gjd, OMy, Wjd } from "./currentLineHighlight.js";
import { BMy, qjd } from "./decorations.js";
import { oDy, y$d } from "./decorationsOverviewRuler.js";
import { C9t, Hn, ws } from "./dom_2.js";
import { UMy, zjd } from "./editorScrollbar.js";
import { i6 } from "./fastDomNode.js";
import { GHo, Yjd } from "./glyphMargin.js";
import { e3y, mHd } from "./gpuMark.js";
import { HMy, Jjd } from "./indentGuides.js";
import { It, dn } from "./instantiation.js";
import { e$d, zHo } from "./lineNumbers.js";
import { YMy, s$d } from "./linesDecorations.js";
import { XHo, o$d } from "./margin.js";
import { QMy, a$d } from "./marginDecorations.js";
import { f$d, iDy } from "./minimap.js";
import { J0, ihe } from "./model_2.js";
import { ojd, ujd } from "./mouseTarget.js";
import { Msi, ZDy } from "./nativeEditContext.js";
import { _$d, sDy } from "./overlayWidgets.js";
import { aDy, w$d } from "./overviewRuler.js";
import { uHo, w5e } from "./performance_2.js";
import { AMy, Djd } from "./pointerHandler.js";
import { er, jc } from "./position.js";
import { Qs, qt } from "./range.js";
import { QUd, Tfn } from "./renderingContext.js";
import { C$d, cDy } from "./rulers.js";
import { QDy, pHd } from "./rulersGpu.js";
import { T$d, dDy } from "./scrollDecoration.js";
import { Cy, bu } from "./selection.js";
import { gDy, x$d } from "./selections.js";
import { TCr, zDy } from "./textAreaEditContext.js";
import { Dl } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { N$d, TDy } from "./viewContext.js";
import { Njd, RMy } from "./viewController.js";
import { A$d, _Dy } from "./viewCursors.js";
import { _yt, cBt } from "./viewEventHandler.js";
import { LD, yCr } from "./viewGpuContext.js";
import { VMy, r$d } from "./viewLines.js";
import { WDy, wCr } from "./viewLinesGpu.js";
import { M$d, wDy } from "./viewLinesViewportData.js";
import { Bjd, Fjd, PMy } from "./viewOverlays.js";
import { YAe, pz } from "./viewPart.js";
import { UHo, Ujd } from "./viewUserInputEvents.js";
import { R$d, yDy } from "./viewZones.js";
import { P$d, kDy } from "./whitespace.js";
import { Ew, Tyt, j3, wri } from "./ze.js";
var ICr, xCr, gHd, fHd;
export { ICr, fHd, gHd, xCr };
var __wakaru_t3y_initialized = false;
export function t3y() {
if (__wakaru_t3y_initialized) return;
__wakaru_t3y_initialized = true;
"use strict";
E(), Hn(), i6(), uHo(), Ei(), Qe(), ujd(), AMy(), Tfn(), RMy(), PMy(), pz(), Ujd(), DMy(), NMy(), OMy(), BMy(), UMy(), GHo(), HMy(), e$d(), VMy(), YMy(), o$d(), QMy(), iDy(), sDy(), oDy(), aDy(), cDy(), dDy(), gDy(), _Dy(), yDy(), kDy(), jc(), Qs(), Cy(), J0(), cBt(), wDy(), TDy(), It(), Dl(), yCr(), WDy(), zDy(), ZDy(), QDy(), e3y(), Gt(), ICr = class extends _yt {
    constructor(t, e, n, i, r, s, o, a, l){
        super(), this._instantiationService = l, this._shouldRecomputeGlyphMarginLanes = !1, this._renderAnimationFrame = this._register(new Vn), this._ownerID = e, this._widgetFocusTracker = this._register(new fHd(t, a)), this._register(this._widgetFocusTracker.onChange(()=>{
            this._context.viewModel.setHasWidgetFocus(this._widgetFocusTracker.hasFocus());
        })), this._selections = [
            new bu(1, 1, 1, 1)
        ], this._overflowGuardContainer = Ew(document.createElement("div")), YAe.write(this._overflowGuardContainer, 3), this._overflowGuardContainer.setClassName("overflow-guard"), this._viewController = new Njd(i, s, o, n), this._context = new N$d(i, r, s), this._context.addEventHandler(this), this._viewParts = [], this._experimentalEditContextEnabled = this._context.configuration.options.get(157), this._accessibilitySupport = this._context.configuration.options.get(2), this._editContext = this._instantiateEditContext(), this._viewParts.push(this._editContext), this._linesContent = Ew(document.createElement("div")), this._linesContent.setClassName("lines-content monaco-editor-background"), this._linesContent.setPosition("absolute"), this.domNode = Ew(document.createElement("div")), this.domNode.setClassName(this._getEditorClassName()), this.domNode.setAttribute("role", "code"), this._context.configuration.options.get(39) === "on" && (this._viewGpuContext = this._instantiationService.createInstance(LD, this._context)), this._scrollbar = new zjd(this._context, this._linesContent, this.domNode, this._overflowGuardContainer), this._viewParts.push(this._scrollbar), this._viewLines = new r$d(this._context, this._viewGpuContext, this._linesContent), this._viewGpuContext && (this._viewLinesGpu = this._instantiationService.createInstance(wCr, this._context, this._viewGpuContext)), this._viewZones = new R$d(this._context), this._viewParts.push(this._viewZones);
        const c = new y$d(this._context);
        this._viewParts.push(c);
        const u = new T$d(this._context);
        this._viewParts.push(u);
        const d = new Fjd(this._context);
        this._viewParts.push(d), d.addDynamicOverlay(new Wjd(this._context)), d.addDynamicOverlay(new x$d(this._context)), d.addDynamicOverlay(new Jjd(this._context)), d.addDynamicOverlay(new qjd(this._context)), d.addDynamicOverlay(new P$d(this._context));
        const h = new Bjd(this._context);
        this._viewParts.push(h), h.addDynamicOverlay(new Gjd(this._context)), h.addDynamicOverlay(new a$d(this._context)), h.addDynamicOverlay(new s$d(this._context)), h.addDynamicOverlay(new zHo(this._context)), this._viewGpuContext && h.addDynamicOverlay(new mHd(this._context, this._viewGpuContext)), this._glyphMarginWidgets = new Yjd(this._context), this._viewParts.push(this._glyphMarginWidgets);
        const p = new XHo(this._context);
        p.getDomNode().appendChild(this._viewZones.marginDomNode), p.getDomNode().appendChild(h.getDomNode()), p.getDomNode().appendChild(this._glyphMarginWidgets.domNode), this._viewParts.push(p), this._contentWidgets = new $jd(this._context, this.domNode), this._viewParts.push(this._contentWidgets), this._viewCursors = new A$d(this._context), this._viewParts.push(this._viewCursors), this._overlayWidgets = new _$d(this._context, this.domNode), this._viewParts.push(this._overlayWidgets);
        const g = this._viewGpuContext ? new pHd(this._context, this._viewGpuContext) : new C$d(this._context);
        this._viewParts.push(g);
        const f = new jjd(this._context);
        this._viewParts.push(f);
        const _ = new f$d(this._context);
        if (this._viewParts.push(_), c) {
            const b = this._scrollbar.getOverviewRulerLayoutInfo();
            b.parent.insertBefore(c.getDomNode(), b.insertBefore);
        }
        this._linesContent.appendChild(d.getDomNode()), "domNode" in g && this._linesContent.appendChild(g.domNode), this._linesContent.appendChild(this._viewZones.domNode), this._linesContent.appendChild(this._viewLines.getDomNode()), this._linesContent.appendChild(this._contentWidgets.domNode), this._linesContent.appendChild(this._viewCursors.getDomNode()), this._overflowGuardContainer.appendChild(p.getDomNode()), this._overflowGuardContainer.appendChild(this._scrollbar.getDomNode()), this._viewGpuContext && this._overflowGuardContainer.appendChild(this._viewGpuContext.canvas), this._overflowGuardContainer.appendChild(u.getDomNode()), this._overflowGuardContainer.appendChild(this._overlayWidgets.getDomNode()), this._overflowGuardContainer.appendChild(_.getDomNode()), this._overflowGuardContainer.appendChild(f.domNode), this.domNode.appendChild(this._overflowGuardContainer), a ? (a.appendChild(this._contentWidgets.overflowingContentWidgetsDomNode.domNode), a.appendChild(this._overlayWidgets.overflowingOverlayWidgetsDomNode.domNode)) : (this.domNode.appendChild(this._contentWidgets.overflowingContentWidgetsDomNode), this.domNode.appendChild(this._overlayWidgets.overflowingOverlayWidgetsDomNode)), this._applyLayout(), this._pointerHandler = this._register(new Djd(this._context, this._viewController, this._createPointerHandlerHelper()));
    }
    _instantiateEditContext() {
        return this._context.configuration.options.get(157) ? this._instantiationService.createInstance(Msi, this._ownerID, this._context, this._overflowGuardContainer, this._viewController, this._createTextAreaHandlerHelper()) : this._instantiationService.createInstance(TCr, this._context, this._overflowGuardContainer, this._viewController, this._createTextAreaHandlerHelper());
    }
    _updateEditContext() {
        const t = this._context.configuration.options.get(157), e = this._context.configuration.options.get(2);
        if (this._experimentalEditContextEnabled === t && this._accessibilitySupport === e) return;
        this._experimentalEditContextEnabled = t, this._accessibilitySupport = e;
        const n = this._editContext.isFocused(), i = this._viewParts.indexOf(this._editContext);
        this._editContext.dispose(), this._editContext = this._instantiateEditContext(), n && this._editContext.focus(), i !== -1 && this._viewParts.splice(i, 1, this._editContext);
    }
    _computeGlyphMarginLanes() {
        const t = this._context.viewModel.model, e = this._context.viewModel.glyphLanes;
        let n = [], i = 0;
        n = n.concat(t.getAllMarginDecorations().map((r)=>{
            const s = r.options.glyphMargin?.position ?? ihe.Center;
            return i = Math.max(i, r.range.endLineNumber), {
                range: r.range,
                lane: s,
                persist: r.options.glyphMargin?.persistLane
            };
        })), n = n.concat(this._glyphMarginWidgets.getWidgets().map((r)=>{
            const s = t.validateRange(r.preference.range);
            return i = Math.max(i, s.endLineNumber), {
                range: s,
                lane: r.preference.lane
            };
        })), n.sort((r, s)=>qt.compareRangesUsingStarts(r.range, s.range)), e.reset(i);
        for (const r of n)e.push(r.lane, r.range, r.persist);
        return e;
    }
    _createPointerHandlerHelper() {
        return {
            viewDomNode: this.domNode.domNode,
            linesContentDomNode: this._linesContent.domNode,
            viewLinesDomNode: this._viewLines.getDomNode().domNode,
            viewLinesGpu: this._viewLinesGpu,
            focusTextArea: ()=>{
                this.focus();
            },
            dispatchTextAreaEvent: (t)=>{
                this._editContext.domNode.domNode.dispatchEvent(t);
            },
            getLastRenderData: ()=>{
                const t = this._viewCursors.getLastRenderData() || [], e = this._editContext.getLastRenderData();
                return new ojd(t, e);
            },
            renderNow: ()=>{
                this.render(!0, !1);
            },
            shouldSuppressMouseDownOnViewZone: (t)=>this._viewZones.shouldSuppressMouseDownOnViewZone(t),
            shouldSuppressMouseDownOnWidget: (t)=>this._contentWidgets.shouldSuppressMouseDownOnWidget(t),
            getPositionFromDOMInfo: (t, e)=>(this._flushAccumulatedAndRenderNow(), this._viewLines.getPositionFromDOMInfo(t, e)),
            visibleRangeForPosition: (t, e)=>{
                this._flushAccumulatedAndRenderNow();
                const n = new er(t, e);
                return this._viewLines.visibleRangeForPosition(n) ?? this._viewLinesGpu?.visibleRangeForPosition(n) ?? null;
            },
            getLineWidth: (t)=>{
                if (this._flushAccumulatedAndRenderNow(), this._viewLinesGpu) {
                    const e = this._viewLinesGpu.getLineWidth(t);
                    if (e !== void 0) return e;
                }
                return this._viewLines.getLineWidth(t);
            }
        };
    }
    _createTextAreaHandlerHelper() {
        return {
            visibleRangeForPosition: (t)=>(this._flushAccumulatedAndRenderNow(), this._viewLines.visibleRangeForPosition(t)),
            linesVisibleRangesForRange: (t, e)=>(this._flushAccumulatedAndRenderNow(), this._viewLines.linesVisibleRangesForRange(t, e))
        };
    }
    _applyLayout() {
        const e = this._context.configuration.options.get(151);
        this.domNode.setWidth(e.width), this.domNode.setHeight(e.height), this._overflowGuardContainer.setWidth(e.width), this._overflowGuardContainer.setHeight(e.height), this._linesContent.setWidth(16777216), this._linesContent.setHeight(16777216);
    }
    _getEditorClassName() {
        const t = this._editContext.isFocused() ? " focused" : "";
        return this._context.configuration.options.get(148) + " " + wri(this._context.theme.type) + t;
    }
    handleEvents(t) {
        super.handleEvents(t), this._scheduleRender();
    }
    onConfigurationChanged(t) {
        return this.domNode.setClassName(this._getEditorClassName()), this._updateEditContext(), this._applyLayout(), !1;
    }
    onCursorStateChanged(t) {
        return this._selections = t.selections, !1;
    }
    onDecorationsChanged(t) {
        return t.affectsGlyphMargin && (this._shouldRecomputeGlyphMarginLanes = !0), !1;
    }
    onFocusChanged(t) {
        return this.domNode.setClassName(this._getEditorClassName()), !1;
    }
    onThemeChanged(t) {
        return this._context.theme.update(t.theme), this.domNode.setClassName(this._getEditorClassName()), !1;
    }
    dispose() {
        this._renderAnimationFrame.clear(), this._contentWidgets.overflowingContentWidgetsDomNode.domNode.remove(), this._overlayWidgets.overflowingOverlayWidgetsDomNode.domNode.remove(), this._context.removeEventHandler(this), this._viewGpuContext?.dispose(), this._viewLines.dispose(), this._viewLinesGpu?.dispose();
        for (const t of this._viewParts)t.dispose();
        super.dispose();
    }
    _scheduleRender() {
        if (this._store.isDisposed) throw new xh;
        if (!this._renderAnimationFrame.value) {
            this._editContext instanceof Msi && this._editContext.setEditContextOnDomNode();
            const t = this._createCoordinatedRendering();
            this._renderAnimationFrame.value = gHd.INSTANCE.scheduleCoordinatedRendering({
                window: ws(this.domNode?.domNode),
                prepareRenderText: ()=>{
                    if (this._store.isDisposed) throw new xh;
                    try {
                        return t.prepareRenderText();
                    } finally{
                        this._renderAnimationFrame.clear();
                    }
                },
                renderText: ()=>{
                    if (this._store.isDisposed) throw new xh;
                    return t.renderText();
                },
                prepareRender: (e, n)=>{
                    if (this._store.isDisposed) throw new xh;
                    return t.prepareRender(e, n);
                },
                render: (e, n)=>{
                    if (this._store.isDisposed) throw new xh;
                    return t.render(e, n);
                }
            });
        }
    }
    _flushAccumulatedAndRenderNow() {
        const t = this._createCoordinatedRendering();
        Tyt(()=>t.prepareRenderText());
        const e = Tyt(()=>t.renderText());
        if (e) {
            const [n, i] = e;
            Tyt(()=>t.prepareRender(n, i)), Tyt(()=>t.render(n, i));
        }
    }
    _getViewPartsToRender() {
        const t = [];
        let e = 0;
        for (const n of this._viewParts)n.shouldRender() && (t[e++] = n);
        return t;
    }
    _createCoordinatedRendering() {
        return {
            prepareRenderText: ()=>{
                if (this._shouldRecomputeGlyphMarginLanes) {
                    this._shouldRecomputeGlyphMarginLanes = !1;
                    const t = this._computeGlyphMarginLanes();
                    this._context.configuration.setGlyphMarginDecorationLaneCount(t.requiredLanes);
                }
                w5e.onRenderStart();
            },
            renderText: ()=>{
                if (!this.domNode?.domNode.isConnected) return null;
                let t = this._getViewPartsToRender();
                if (!this._viewLines.shouldRender() && t.length === 0) return null;
                const e = this._context.viewLayout.getLinesViewportData();
                this._context.viewModel.setViewport(e.startLineNumber, e.endLineNumber, e.centeredLineNumber);
                const n = new M$d(this._selections, e, this._context.viewLayout.getWhitespaceViewportData(), this._context.viewModel);
                return this._contentWidgets.shouldRender() && this._contentWidgets.onBeforeRender(n), this._viewLines.shouldRender() && (this._viewLines.renderText(n), this._viewLines.onDidRender(), t = this._getViewPartsToRender()), this._viewLinesGpu?.shouldRender() && (this._viewLinesGpu.renderText(n), this._viewLinesGpu.onDidRender()), [
                    t,
                    new QUd(this._context.viewLayout, n, this._viewLines, this._viewLinesGpu)
                ];
            },
            prepareRender: (t, e)=>{
                for (const n of t)n.prepareRender(e);
            },
            render: (t, e)=>{
                for (const n of t)n.render(e), n.onDidRender();
            }
        };
    }
    delegateVerticalScrollbarPointerDown(t) {
        this._scrollbar.delegateVerticalScrollbarPointerDown(t);
    }
    delegateScrollFromMouseWheelEvent(t) {
        this._scrollbar.delegateScrollFromMouseWheelEvent(t);
    }
    restoreState(t) {
        this._context.viewModel.viewLayout.setScrollPosition({
            scrollTop: t.scrollTop,
            scrollLeft: t.scrollLeft
        }, 1), this._context.viewModel.visibleLinesStabilized();
    }
    getOffsetForColumn(t, e) {
        const n = this._context.viewModel.model.validatePosition({
            lineNumber: t,
            column: e
        }), i = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(n);
        this._flushAccumulatedAndRenderNow();
        const r = this._viewLines.visibleRangeForPosition(new er(i.lineNumber, i.column));
        return r ? r.left : -1;
    }
    getTargetAtClientPoint(t, e) {
        const n = this._pointerHandler.getTargetAtClientPoint(t, e);
        return n ? UHo.convertViewToModelMouseTarget(n, this._context.viewModel.coordinatesConverter) : null;
    }
    createOverviewRuler(t) {
        return new w$d(this._context, t);
    }
    change(t) {
        this._viewZones.changeViewZones(t), this._scheduleRender();
    }
    render(t, e) {
        if (e) {
            this._viewLines.forceShouldRender();
            for (const n of this._viewParts)n.forceShouldRender();
        }
        t ? this._flushAccumulatedAndRenderNow() : this._scheduleRender();
    }
    writeScreenReaderContent(t) {
        this._editContext.writeScreenReaderContent(t);
    }
    focus() {
        this._editContext.focus();
    }
    isFocused() {
        return this._editContext.isFocused();
    }
    isWidgetFocused() {
        return this._widgetFocusTracker.hasFocus();
    }
    refreshFocusState() {
        this._editContext.refreshFocusState(), this._widgetFocusTracker.refreshState();
    }
    setAriaOptions(t) {
        this._editContext.setAriaOptions(t);
    }
    addContentWidget(t) {
        this._contentWidgets.addWidget(t.widget), this.layoutContentWidget(t), this._scheduleRender();
    }
    layoutContentWidget(t) {
        this._contentWidgets.setWidgetPosition(t.widget, t.position?.position ?? null, t.position?.secondaryPosition ?? null, t.position?.preference ?? null, t.position?.positionAffinity ?? null), this._scheduleRender();
    }
    removeContentWidget(t) {
        this._contentWidgets.removeWidget(t.widget), this._scheduleRender();
    }
    addOverlayWidget(t) {
        this._overlayWidgets.addWidget(t.widget), this.layoutOverlayWidget(t), this._scheduleRender();
    }
    layoutOverlayWidget(t) {
        this._overlayWidgets.setWidgetPosition(t.widget, t.position) && this._scheduleRender();
    }
    removeOverlayWidget(t) {
        this._overlayWidgets.removeWidget(t.widget), this._scheduleRender();
    }
    addGlyphMarginWidget(t) {
        this._glyphMarginWidgets.addWidget(t.widget), this._shouldRecomputeGlyphMarginLanes = !0, this._scheduleRender();
    }
    layoutGlyphMarginWidget(t) {
        const e = t.position;
        this._glyphMarginWidgets.setWidgetPosition(t.widget, e) && (this._shouldRecomputeGlyphMarginLanes = !0, this._scheduleRender());
    }
    removeGlyphMarginWidget(t) {
        this._glyphMarginWidgets.removeWidget(t.widget), this._shouldRecomputeGlyphMarginLanes = !0, this._scheduleRender();
    }
}, ICr = Re([
    F(8, dn)
], ICr), xCr = class {
    constructor(){
        this._coordinatedRenderings = [], this._animationFrameRunners = new Map;
    }
    scheduleCoordinatedRendering(e) {
        return this._coordinatedRenderings.push(e), this._scheduleRender(e.window), {
            dispose: ()=>{
                const n = this._coordinatedRenderings.indexOf(e);
                if (n !== -1 && (this._coordinatedRenderings.splice(n, 1), this._coordinatedRenderings.length === 0)) {
                    for (const [i, r] of this._animationFrameRunners)r.dispose();
                    this._animationFrameRunners.clear();
                }
            }
        };
    }
    _scheduleRender(e) {
        if (!this._animationFrameRunners.has(e)) {
            const n = ()=>{
                this._animationFrameRunners.delete(e), this._onRenderScheduled();
            };
            this._animationFrameRunners.set(e, C9t(e, n, 100));
        }
    }
    _onRenderScheduled() {
        const e = this._coordinatedRenderings.slice(0);
        this._coordinatedRenderings = [];
        for (const i of e)Tyt(()=>i.prepareRenderText());
        const n = [];
        for(let i = 0, r = e.length; i < r; i++){
            const s = e[i];
            n[i] = Tyt(()=>s.renderText());
        }
        for(let i = 0, r = e.length; i < r; i++){
            const s = e[i], o = n[i];
            if (!o) continue;
            const [a, l] = o;
            Tyt(()=>s.prepareRender(a, l));
        }
        for(let i = 0, r = e.length; i < r; i++){
            const s = e[i], o = n[i];
            if (!o) continue;
            const [a, l] = o;
            Tyt(()=>s.render(a, l));
        }
    }
}, xCr.INSTANCE = new xCr, gHd = xCr, fHd = class extends st {
    constructor(t, e){
        super(), this._onChange = this._register(new tt), this.onChange = this._onChange.event, this._hadFocus = void 0, this._hasDomElementFocus = !1, this._domFocusTracker = this._register(j3(t)), this._overflowWidgetsDomNodeHasFocus = !1, this._register(this._domFocusTracker.onDidFocus(()=>{
            this._hasDomElementFocus = !0, this._update();
        })), this._register(this._domFocusTracker.onDidBlur(()=>{
            this._hasDomElementFocus = !1, this._update();
        })), e && (this._overflowWidgetsDomNode = this._register(j3(e)), this._register(this._overflowWidgetsDomNode.onDidFocus(()=>{
            this._overflowWidgetsDomNodeHasFocus = !0, this._update();
        })), this._register(this._overflowWidgetsDomNode.onDidBlur(()=>{
            this._overflowWidgetsDomNodeHasFocus = !1, this._update();
        })));
    }
    _update() {
        const t = this._hasDomElementFocus || this._overflowWidgetsDomNodeHasFocus;
        this._hadFocus !== t && (this._hadFocus = t, this._onChange.fire(void 0));
    }
    hasFocus() {
        return this._hadFocus ?? !1;
    }
    refreshState() {
        this._domFocusTracker.refreshState(), this._overflowWidgetsDomNode?.refreshState?.();
    }
};

}
