import { Se, Zu, bt, cn, si, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { $vg, E9c } from "./blockDecorations.js";
import { Hvg, x9c } from "./contentWidgets.js";
import { A9c, Gvg, R9c } from "./currentLineHighlight.js";
import { D9c, jvg } from "./decorations.js";
import { a6c, p_g } from "./decorationsOverviewRuler.js";
import { SBe, en, xi } from "./dom_2.js";
import { M9c, qvg } from "./editorScrollbar.js";
import { Tx } from "./fastDomNode.js";
import { Hes, N9c } from "./glyphMargin.js";
import { abg, e4c } from "./gpuMark.js";
import { U9c, Yvg } from "./indentGuides.js";
import { Ze, _t } from "./instantiation.js";
import { $9c, Ges } from "./lineNumbers.js";
import { j9c, n_g } from "./linesDecorations.js";
import { q9c, qes } from "./margin.js";
import { s_g, z9c } from "./marginDecorations.js";
import { i6c, u_g } from "./minimap.js";
import { Cb, nU } from "./model_2.js";
import { X5c, q5c } from "./mouseTarget.js";
import { rbg, tvn } from "./nativeEditContext.js";
import { h_g, s6c } from "./overlayWidgets.js";
import { m_g, u6c } from "./overviewRuler.js";
import { aes, xwe } from "./performance_2.js";
import { Ovg, b9c } from "./pointerHandler.js";
import { Yn, ya } from "./position.js";
import { Lgn, rw, x_, zze } from "./qIc.js";
import { dt, qi } from "./range.js";
import { B5c, qOt } from "./renderingContext.js";
import { d6c, f_g } from "./rulers.js";
import { J6c, sbg } from "./rulersGpu.js";
import { __g, h6c } from "./scrollDecoration.js";
import { _f, za } from "./selection.js";
import { g6c, k_g } from "./selections.js";
import { J_g, Z_i } from "./textAreaEditContext.js";
import { as } from "./themeService.js";
import { x } from "./tslib.es6.js";
import { M_g, S6c } from "./viewContext.js";
import { Fvg, y9c } from "./viewController.js";
import { T_g, f6c } from "./viewCursors.js";
import { $pt, Hze } from "./viewEventHandler.js";
import { J1, Jfn } from "./viewGpuContext.js";
import { V9c, e_g } from "./viewLines.js";
import { X_g, Y_i } from "./viewLinesGpu.js";
import { R_g, b6c } from "./viewLinesViewportData.js";
import { Bvg, C9c, w9c } from "./viewOverlays.js";
import { aU, jge } from "./viewPart.js";
import { Oes, T9c } from "./viewUserInputEvents.js";
import { v6c, x_g } from "./viewZones.js";
import { A_g, _6c } from "./whitespace.js";
var J_i, ebi, t4c, n4c;
export { J_i, ebi, n4c, t4c };
var __wakaru_cbg_initialized = false;
export function cbg() {
if (__wakaru_cbg_initialized) return;
__wakaru_cbg_initialized = true;
"use strict";
x(), en(), Tx(), aes(), si(), Se(), X5c(), Ovg(), qOt(), Fvg(), Bvg(), aU(), T9c(), $vg(), Hvg(), Gvg(), jvg(), qvg(), Hes(), Yvg(), $9c(), e_g(), n_g(), q9c(), s_g(), u_g(), h_g(), p_g(), m_g(), f_g(), __g(), k_g(), T_g(), x_g(), A_g(), ya(), qi(), _f(), Cb(), $pt(), R_g(), M_g(), Ze(), as(), Jfn(), X_g(), J_g(), rbg(), sbg(), abg(), bt(), J_i = class extends Hze {
    constructor(e, t, n, i, r, s, o, a, c){
        super(), this._instantiationService = c, this._shouldRecomputeGlyphMarginLanes = !1, this._renderAnimationFrame = this._register(new cn), this._ownerID = t, this._widgetFocusTracker = this._register(new n4c(e, a)), this._register(this._widgetFocusTracker.onChange(()=>{
            this._context.viewModel.setHasWidgetFocus(this._widgetFocusTracker.hasFocus());
        })), this._selections = [
            new za(1, 1, 1, 1)
        ], this._overflowGuardContainer = x_(document.createElement("div")), jge.write(this._overflowGuardContainer, 3), this._overflowGuardContainer.setClassName("overflow-guard"), this._viewController = new y9c(i, s, o, n), this._context = new S6c(i, r, s), this._context.addEventHandler(this), this._viewParts = [], this._experimentalEditContextEnabled = this._context.configuration.options.get(157), this._accessibilitySupport = this._context.configuration.options.get(2), this._editContext = this._instantiateEditContext(), this._viewParts.push(this._editContext), this._linesContent = x_(document.createElement("div")), this._linesContent.setClassName("lines-content monaco-editor-background"), this._linesContent.setPosition("absolute"), this.domNode = x_(document.createElement("div")), this.domNode.setClassName(this._getEditorClassName()), this.domNode.setAttribute("role", "code"), this._context.configuration.options.get(39) === "on" && (this._viewGpuContext = this._instantiationService.createInstance(J1, this._context)), this._scrollbar = new M9c(this._context, this._linesContent, this.domNode, this._overflowGuardContainer), this._viewParts.push(this._scrollbar), this._viewLines = new V9c(this._context, this._viewGpuContext, this._linesContent), this._viewGpuContext && (this._viewLinesGpu = this._instantiationService.createInstance(Y_i, this._context, this._viewGpuContext)), this._viewZones = new v6c(this._context), this._viewParts.push(this._viewZones);
        const l = new a6c(this._context);
        this._viewParts.push(l);
        const u = new h6c(this._context);
        this._viewParts.push(u);
        const h = new w9c(this._context);
        this._viewParts.push(h), h.addDynamicOverlay(new A9c(this._context)), h.addDynamicOverlay(new g6c(this._context)), h.addDynamicOverlay(new U9c(this._context)), h.addDynamicOverlay(new D9c(this._context)), h.addDynamicOverlay(new _6c(this._context));
        const p = new C9c(this._context);
        this._viewParts.push(p), p.addDynamicOverlay(new R9c(this._context)), p.addDynamicOverlay(new z9c(this._context)), p.addDynamicOverlay(new j9c(this._context)), p.addDynamicOverlay(new Ges(this._context)), this._viewGpuContext && p.addDynamicOverlay(new e4c(this._context, this._viewGpuContext)), this._glyphMarginWidgets = new N9c(this._context), this._viewParts.push(this._glyphMarginWidgets);
        const g = new qes(this._context);
        g.getDomNode().appendChild(this._viewZones.marginDomNode), g.getDomNode().appendChild(p.getDomNode()), g.getDomNode().appendChild(this._glyphMarginWidgets.domNode), this._viewParts.push(g), this._contentWidgets = new x9c(this._context, this.domNode), this._viewParts.push(this._contentWidgets), this._viewCursors = new f6c(this._context), this._viewParts.push(this._viewCursors), this._overlayWidgets = new s6c(this._context, this.domNode), this._viewParts.push(this._overlayWidgets);
        const f = this._viewGpuContext ? new J6c(this._context, this._viewGpuContext) : new d6c(this._context);
        this._viewParts.push(f);
        const v = new E9c(this._context);
        this._viewParts.push(v);
        const b = new i6c(this._context);
        if (this._viewParts.push(b), l) {
            const y = this._scrollbar.getOverviewRulerLayoutInfo();
            y.parent.insertBefore(l.getDomNode(), y.insertBefore);
        }
        this._linesContent.appendChild(h.getDomNode()), "domNode" in f && this._linesContent.appendChild(f.domNode), this._linesContent.appendChild(this._viewZones.domNode), this._linesContent.appendChild(this._viewLines.getDomNode()), this._linesContent.appendChild(this._contentWidgets.domNode), this._linesContent.appendChild(this._viewCursors.getDomNode()), this._overflowGuardContainer.appendChild(g.getDomNode()), this._overflowGuardContainer.appendChild(this._scrollbar.getDomNode()), this._viewGpuContext && this._overflowGuardContainer.appendChild(this._viewGpuContext.canvas), this._overflowGuardContainer.appendChild(u.getDomNode()), this._overflowGuardContainer.appendChild(this._overlayWidgets.getDomNode()), this._overflowGuardContainer.appendChild(b.getDomNode()), this._overflowGuardContainer.appendChild(v.domNode), this.domNode.appendChild(this._overflowGuardContainer), a ? (a.appendChild(this._contentWidgets.overflowingContentWidgetsDomNode.domNode), a.appendChild(this._overlayWidgets.overflowingOverlayWidgetsDomNode.domNode)) : (this.domNode.appendChild(this._contentWidgets.overflowingContentWidgetsDomNode), this.domNode.appendChild(this._overlayWidgets.overflowingOverlayWidgetsDomNode)), this._applyLayout(), this._pointerHandler = this._register(new b9c(this._context, this._viewController, this._createPointerHandlerHelper()));
    }
    _instantiateEditContext() {
        return this._context.configuration.options.get(157) ? this._instantiationService.createInstance(tvn, this._ownerID, this._context, this._overflowGuardContainer, this._viewController, this._createTextAreaHandlerHelper()) : this._instantiationService.createInstance(Z_i, this._context, this._overflowGuardContainer, this._viewController, this._createTextAreaHandlerHelper());
    }
    _updateEditContext() {
        const e = this._context.configuration.options.get(157), t = this._context.configuration.options.get(2);
        if (this._experimentalEditContextEnabled === e && this._accessibilitySupport === t) return;
        this._experimentalEditContextEnabled = e, this._accessibilitySupport = t;
        const n = this._editContext.isFocused(), i = this._viewParts.indexOf(this._editContext);
        this._editContext.dispose(), this._editContext = this._instantiateEditContext(), n && this._editContext.focus(), i !== -1 && this._viewParts.splice(i, 1, this._editContext);
    }
    _computeGlyphMarginLanes() {
        const e = this._context.viewModel.model, t = this._context.viewModel.glyphLanes;
        let n = [], i = 0;
        n = n.concat(e.getAllMarginDecorations().map((r)=>{
            const s = r.options.glyphMargin?.position ?? nU.Center;
            return i = Math.max(i, r.range.endLineNumber), {
                range: r.range,
                lane: s,
                persist: r.options.glyphMargin?.persistLane
            };
        })), n = n.concat(this._glyphMarginWidgets.getWidgets().map((r)=>{
            const s = e.validateRange(r.preference.range);
            return i = Math.max(i, s.endLineNumber), {
                range: s,
                lane: r.preference.lane
            };
        })), n.sort((r, s)=>dt.compareRangesUsingStarts(r.range, s.range)), t.reset(i);
        for (const r of n)t.push(r.lane, r.range, r.persist);
        return t;
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
            dispatchTextAreaEvent: (e)=>{
                this._editContext.domNode.domNode.dispatchEvent(e);
            },
            getLastRenderData: ()=>{
                const e = this._viewCursors.getLastRenderData() || [], t = this._editContext.getLastRenderData();
                return new q5c(e, t);
            },
            renderNow: ()=>{
                this.render(!0, !1);
            },
            shouldSuppressMouseDownOnViewZone: (e)=>this._viewZones.shouldSuppressMouseDownOnViewZone(e),
            shouldSuppressMouseDownOnWidget: (e)=>this._contentWidgets.shouldSuppressMouseDownOnWidget(e),
            getPositionFromDOMInfo: (e, t)=>(this._flushAccumulatedAndRenderNow(), this._viewLines.getPositionFromDOMInfo(e, t)),
            visibleRangeForPosition: (e, t)=>{
                this._flushAccumulatedAndRenderNow();
                const n = new Yn(e, t);
                return this._viewLines.visibleRangeForPosition(n) ?? this._viewLinesGpu?.visibleRangeForPosition(n) ?? null;
            },
            getLineWidth: (e)=>{
                if (this._flushAccumulatedAndRenderNow(), this._viewLinesGpu) {
                    const t = this._viewLinesGpu.getLineWidth(e);
                    if (t !== void 0) return t;
                }
                return this._viewLines.getLineWidth(e);
            }
        };
    }
    _createTextAreaHandlerHelper() {
        return {
            visibleRangeForPosition: (e)=>(this._flushAccumulatedAndRenderNow(), this._viewLines.visibleRangeForPosition(e)),
            linesVisibleRangesForRange: (e, t)=>(this._flushAccumulatedAndRenderNow(), this._viewLines.linesVisibleRangesForRange(e, t))
        };
    }
    _applyLayout() {
        const t = this._context.configuration.options.get(151);
        this.domNode.setWidth(t.width), this.domNode.setHeight(t.height), this._overflowGuardContainer.setWidth(t.width), this._overflowGuardContainer.setHeight(t.height), this._linesContent.setWidth(16777216), this._linesContent.setHeight(16777216);
    }
    _getEditorClassName() {
        const e = this._editContext.isFocused() ? " focused" : "";
        return this._context.configuration.options.get(148) + " " + Lgn(this._context.theme.type) + e;
    }
    handleEvents(e) {
        super.handleEvents(e), this._scheduleRender();
    }
    onConfigurationChanged(e) {
        return this.domNode.setClassName(this._getEditorClassName()), this._updateEditContext(), this._applyLayout(), !1;
    }
    onCursorStateChanged(e) {
        return this._selections = e.selections, !1;
    }
    onDecorationsChanged(e) {
        return e.affectsGlyphMargin && (this._shouldRecomputeGlyphMarginLanes = !0), !1;
    }
    onFocusChanged(e) {
        return this.domNode.setClassName(this._getEditorClassName()), !1;
    }
    onThemeChanged(e) {
        return this._context.theme.update(e.theme), this.domNode.setClassName(this._getEditorClassName()), !1;
    }
    dispose() {
        this._renderAnimationFrame.clear(), this._contentWidgets.overflowingContentWidgetsDomNode.domNode.remove(), this._overlayWidgets.overflowingOverlayWidgetsDomNode.domNode.remove(), this._context.removeEventHandler(this), this._viewGpuContext?.dispose(), this._viewLines.dispose(), this._viewLinesGpu?.dispose();
        for (const e of this._viewParts)e.dispose();
        super.dispose();
    }
    _scheduleRender() {
        if (this._store.isDisposed) throw new Zu;
        if (!this._renderAnimationFrame.value) {
            this._editContext instanceof tvn && this._editContext.setEditContextOnDomNode();
            const e = this._createCoordinatedRendering();
            this._renderAnimationFrame.value = t4c.INSTANCE.scheduleCoordinatedRendering({
                window: xi(this.domNode?.domNode),
                prepareRenderText: ()=>{
                    if (this._store.isDisposed) throw new Zu;
                    try {
                        return e.prepareRenderText();
                    } finally{
                        this._renderAnimationFrame.clear();
                    }
                },
                renderText: ()=>{
                    if (this._store.isDisposed) throw new Zu;
                    return e.renderText();
                },
                prepareRender: (t, n)=>{
                    if (this._store.isDisposed) throw new Zu;
                    return e.prepareRender(t, n);
                },
                render: (t, n)=>{
                    if (this._store.isDisposed) throw new Zu;
                    return e.render(t, n);
                }
            });
        }
    }
    _flushAccumulatedAndRenderNow() {
        const e = this._createCoordinatedRendering();
        zze(()=>e.prepareRenderText());
        const t = zze(()=>e.renderText());
        if (t) {
            const [n, i] = t;
            zze(()=>e.prepareRender(n, i)), zze(()=>e.render(n, i));
        }
    }
    _getViewPartsToRender() {
        const e = [];
        let t = 0;
        for (const n of this._viewParts)n.shouldRender() && (e[t++] = n);
        return e;
    }
    _createCoordinatedRendering() {
        return {
            prepareRenderText: ()=>{
                if (this._shouldRecomputeGlyphMarginLanes) {
                    this._shouldRecomputeGlyphMarginLanes = !1;
                    const e = this._computeGlyphMarginLanes();
                    this._context.configuration.setGlyphMarginDecorationLaneCount(e.requiredLanes);
                }
                xwe.onRenderStart();
            },
            renderText: ()=>{
                if (!this.domNode?.domNode.isConnected) return null;
                let e = this._getViewPartsToRender();
                if (!this._viewLines.shouldRender() && e.length === 0) return null;
                const t = this._context.viewLayout.getLinesViewportData();
                this._context.viewModel.setViewport(t.startLineNumber, t.endLineNumber, t.centeredLineNumber);
                const n = new b6c(this._selections, t, this._context.viewLayout.getWhitespaceViewportData(), this._context.viewModel);
                return this._contentWidgets.shouldRender() && this._contentWidgets.onBeforeRender(n), this._viewLines.shouldRender() && (this._viewLines.renderText(n), this._viewLines.onDidRender(), e = this._getViewPartsToRender()), this._viewLinesGpu?.shouldRender() && (this._viewLinesGpu.renderText(n), this._viewLinesGpu.onDidRender()), [
                    e,
                    new B5c(this._context.viewLayout, n, this._viewLines, this._viewLinesGpu)
                ];
            },
            prepareRender: (e, t)=>{
                for (const n of e)n.prepareRender(t);
            },
            render: (e, t)=>{
                for (const n of e)n.render(t), n.onDidRender();
            }
        };
    }
    delegateVerticalScrollbarPointerDown(e) {
        this._scrollbar.delegateVerticalScrollbarPointerDown(e);
    }
    delegateScrollFromMouseWheelEvent(e) {
        this._scrollbar.delegateScrollFromMouseWheelEvent(e);
    }
    restoreState(e) {
        this._context.viewModel.viewLayout.setScrollPosition({
            scrollTop: e.scrollTop,
            scrollLeft: e.scrollLeft
        }, 1), this._context.viewModel.visibleLinesStabilized();
    }
    getOffsetForColumn(e, t) {
        const n = this._context.viewModel.model.validatePosition({
            lineNumber: e,
            column: t
        }), i = this._context.viewModel.coordinatesConverter.convertModelPositionToViewPosition(n);
        this._flushAccumulatedAndRenderNow();
        const r = this._viewLines.visibleRangeForPosition(new Yn(i.lineNumber, i.column));
        return r ? r.left : -1;
    }
    getTargetAtClientPoint(e, t) {
        const n = this._pointerHandler.getTargetAtClientPoint(e, t);
        return n ? Oes.convertViewToModelMouseTarget(n, this._context.viewModel.coordinatesConverter) : null;
    }
    createOverviewRuler(e) {
        return new u6c(this._context, e);
    }
    change(e) {
        this._viewZones.changeViewZones(e), this._scheduleRender();
    }
    render(e, t) {
        if (t) {
            this._viewLines.forceShouldRender();
            for (const n of this._viewParts)n.forceShouldRender();
        }
        e ? this._flushAccumulatedAndRenderNow() : this._scheduleRender();
    }
    writeScreenReaderContent(e) {
        this._editContext.writeScreenReaderContent(e);
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
    setAriaOptions(e) {
        this._editContext.setAriaOptions(e);
    }
    addContentWidget(e) {
        this._contentWidgets.addWidget(e.widget), this.layoutContentWidget(e), this._scheduleRender();
    }
    layoutContentWidget(e) {
        this._contentWidgets.setWidgetPosition(e.widget, e.position?.position ?? null, e.position?.secondaryPosition ?? null, e.position?.preference ?? null, e.position?.positionAffinity ?? null), this._scheduleRender();
    }
    removeContentWidget(e) {
        this._contentWidgets.removeWidget(e.widget), this._scheduleRender();
    }
    addOverlayWidget(e) {
        this._overlayWidgets.addWidget(e.widget), this.layoutOverlayWidget(e), this._scheduleRender();
    }
    layoutOverlayWidget(e) {
        this._overlayWidgets.setWidgetPosition(e.widget, e.position) && this._scheduleRender();
    }
    removeOverlayWidget(e) {
        this._overlayWidgets.removeWidget(e.widget), this._scheduleRender();
    }
    addGlyphMarginWidget(e) {
        this._glyphMarginWidgets.addWidget(e.widget), this._shouldRecomputeGlyphMarginLanes = !0, this._scheduleRender();
    }
    layoutGlyphMarginWidget(e) {
        const t = e.position;
        this._glyphMarginWidgets.setWidgetPosition(e.widget, t) && (this._shouldRecomputeGlyphMarginLanes = !0, this._scheduleRender());
    }
    removeGlyphMarginWidget(e) {
        this._glyphMarginWidgets.removeWidget(e.widget), this._shouldRecomputeGlyphMarginLanes = !0, this._scheduleRender();
    }
}, J_i = ie([
    C(8, _t)
], J_i), ebi = class {
    constructor(){
        this._coordinatedRenderings = [], this._animationFrameRunners = new Map;
    }
    scheduleCoordinatedRendering(t) {
        return this._coordinatedRenderings.push(t), this._scheduleRender(t.window), {
            dispose: ()=>{
                const n = this._coordinatedRenderings.indexOf(t);
                if (n !== -1 && (this._coordinatedRenderings.splice(n, 1), this._coordinatedRenderings.length === 0)) {
                    for (const [i, r] of this._animationFrameRunners)r.dispose();
                    this._animationFrameRunners.clear();
                }
            }
        };
    }
    _scheduleRender(t) {
        if (!this._animationFrameRunners.has(t)) {
            const n = ()=>{
                this._animationFrameRunners.delete(t), this._onRenderScheduled();
            };
            this._animationFrameRunners.set(t, SBe(t, n, 100));
        }
    }
    _onRenderScheduled() {
        const t = this._coordinatedRenderings.slice(0);
        this._coordinatedRenderings = [];
        for (const i of t)zze(()=>i.prepareRenderText());
        const n = [];
        for(let i = 0, r = t.length; i < r; i++){
            const s = t[i];
            n[i] = zze(()=>s.renderText());
        }
        for(let i = 0, r = t.length; i < r; i++){
            const s = t[i], o = n[i];
            if (!o) continue;
            const [a, c] = o;
            zze(()=>s.prepareRender(a, c));
        }
        for(let i = 0, r = t.length; i < r; i++){
            const s = t[i], o = n[i];
            if (!o) continue;
            const [a, c] = o;
            zze(()=>s.render(a, c));
        }
    }
}, ebi.INSTANCE = new ebi, t4c = ebi, n4c = class extends we {
    constructor(e, t){
        super(), this._onChange = this._register(new ve), this.onChange = this._onChange.event, this._hadFocus = void 0, this._hasDomElementFocus = !1, this._domFocusTracker = this._register(rw(e)), this._overflowWidgetsDomNodeHasFocus = !1, this._register(this._domFocusTracker.onDidFocus(()=>{
            this._hasDomElementFocus = !0, this._update();
        })), this._register(this._domFocusTracker.onDidBlur(()=>{
            this._hasDomElementFocus = !1, this._update();
        })), t && (this._overflowWidgetsDomNode = this._register(rw(t)), this._register(this._overflowWidgetsDomNode.onDidFocus(()=>{
            this._overflowWidgetsDomNodeHasFocus = !0, this._update();
        })), this._register(this._overflowWidgetsDomNode.onDidBlur(()=>{
            this._overflowWidgetsDomNodeHasFocus = !1, this._update();
        })));
    }
    _update() {
        const e = this._hasDomElementFocus || this._overflowWidgetsDomNodeHasFocus;
        this._hadFocus !== e && (this._hadFocus = e, this._onChange.fire(void 0));
    }
    hasFocus() {
        return this._hadFocus ?? !1;
    }
    refreshState() {
        this._domFocusTracker.refreshState(), this._overflowWidgetsDomNode?.refreshState?.();
    }
};

}
