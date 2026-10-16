import { D, Dse, Ec, Ei, Fa, Gt, Nt, Qe, Vn, XE, rY, st, tt, xr } from "./Iwo.js";
import { $3 } from "./aria.js";
import { ZE, qn } from "./async.js";
import { Ck } from "./baseColors.js";
import { nzo } from "./codiconStyles.js";
import { Ap } from "./colorRegistry.js";
import { Hi, Rr } from "./contextkey.js";
import { CM } from "./defaultStyles.js";
import { C9t, Hn, n0, nd, ws } from "./dom_2.js";
import { EQ, MD, cri } from "./editorColors.js";
import { l_e, xwe } from "./embeddedCodeEditorWidget.js";
import { It, dn } from "./instantiation.js";
import { rNa } from "./ipa.js";
import { Iy, afn } from "./languages.js";
import { F4d, z9t } from "./listColors.js";
import { F5, nRe } from "./listWidget.js";
import { Bt } from "./nls.js";
import { b4 } from "./numbers.js";
import { Vgn, Wwr, zgn } from "./quickpickColors.js";
import { Ooi, wvn } from "./resizable.js";
import { Zi, ki } from "./storage_2.js";
import { Cx1 } from "./suggest.css";
import { Cst, Qv, Tst } from "./suggest.js";
import { LWr, _Dp, vDp } from "./suggestWidgetDetails.js";
import { Ix1, OWr } from "./suggestWidgetRenderer.js";
import { fDp, sCn } from "./suggestWidgetStatus.js";
import { vEr } from "./symbolIcons.js";
import { LI } from "./theme.js";
import { Dl, Ml } from "./themeService.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { $Ae, AS, Ex, Hyt, Ii, R0, Yde, f1, fr, iu, mn, qve } from "./ze.js";
var kDp, aNa, wDp, zGe, CDp;
export { CDp, aNa, kDp, wDp, zGe };
var __wakaru_TDp_initialized = false;
export function TDp() {
if (__wakaru_TDp_initialized) return;
__wakaru_TDp_initialized = true;
"use strict";
E(), Hn(), nzo(), nRe(), qn(), Ei(), Gt(), Qe(), b4(), Fa(), Cx1(), xwe(), fDp(), vEr(), Bt(), Hi(), It(), Zi(), Ap(), LI(), Dl(), Ooi(), Tst(), _Dp(), Ix1(), CM(), $3(), Iy(), mn("editorSuggestWidget.background", EQ, D(1607, null)), mn("editorSuggestWidget.border", cri, D(1608, null)), kDp = mn("editorSuggestWidget.foreground", MD, D(1609, null)), mn("editorSuggestWidget.selectedForeground", zgn, D(1610, null)), mn("editorSuggestWidget.selectedIconForeground", Wwr, D(1611, null)), aNa = mn("editorSuggestWidget.selectedBackground", Vgn, D(1612, null)), mn("editorSuggestWidget.highlightForeground", z9t, D(1613, null)), mn("editorSuggestWidget.focusHighlightForeground", F4d, D(1614, null)), mn("editorSuggestWidgetStatus.foreground", iu(kDp, .5), D(1615, null)), wDp = class {
    constructor(t, e){
        this._service = t, this._key = `suggestWidget.size/${e.getEditorType()}/${e instanceof l_e}`;
    }
    restore() {
        const t = this._service.get(this._key, 0) ?? "";
        try {
            const e = JSON.parse(t);
            if (nd.is(e)) return nd.lift(e);
        } catch  {}
    }
    store(t) {
        this._service.store(this._key, JSON.stringify(t), 0, 1);
    }
    reset() {
        this._service.remove(this._key, 0);
    }
}, zGe = class extends st {
    constructor(t, e, n, i, r){
        super(), this.editor = t, this._storageService = e, this._state = 0, this._isAuto = !1, this._loadingTimeout = this._register(new Vn), this._pendingLayout = new Vn, this._pendingShowDetails = new Vn, this._ignoreFocusEvents = !1, this._forceRenderingAbove = !1, this._explainMode = !1, this._showTimeout = new ZE, this._disposables = new Nt, this._onDidSelect = new Dse, this._onDidFocus = new Dse, this._onDidHide = new tt, this._onDidShow = new tt, this.onDidSelect = this._onDidSelect.event, this.onDidFocus = this._onDidFocus.event, this.onDidHide = this._onDidHide.event, this.onDidShow = this._onDidShow.event, this._onDetailsKeydown = new tt, this.onDetailsKeyDown = this._onDetailsKeydown.event, this.element = new wvn, this.element.domNode.classList.add("editor-widget", "suggest-widget"), this._contentWidget = new CDp(this, t), this._persistedSize = new wDp(e, t);
        class s {
            constructor(h, p, g = !1, f = !1){
                this.persistedSize = h, this.currentSize = p, this.persistHeight = g, this.persistWidth = f;
            }
        }
        let o;
        this._disposables.add(this.element.onDidWillResize(()=>{
            this._contentWidget.lockPreference(), o = new s(this._persistedSize.restore(), this.element.size);
        })), this._disposables.add(this.element.onDidResize((d)=>{
            if (this._resize(d.dimension.width, d.dimension.height), o && (o.persistHeight = o.persistHeight || !!d.north || !!d.south, o.persistWidth = o.persistWidth || !!d.east || !!d.west), !!d.done) {
                if (o) {
                    const { itemHeight: h, defaultSize: p } = this.getLayoutInfo(), g = Math.round(h / 2);
                    let { width: f, height: _ } = this.element.size;
                    (!o.persistHeight || Math.abs(o.currentSize.height - _) <= g) && (_ = o.persistedSize?.height ?? p.height), (!o.persistWidth || Math.abs(o.currentSize.width - f) <= g) && (f = o.persistedSize?.width ?? p.width), this._persistedSize.store(new nd(f, _));
                }
                this._contentWidget.unlockPreference(), o = void 0;
            }
        })), this._messageElement = fr(this.element.domNode, Ii(".message")), this._listElement = fr(this.element.domNode, Ii(".tree"));
        const a = this._disposables.add(r.createInstance(LWr, this.editor));
        a.onDidClose(()=>this.toggleDetails(), this, this._disposables), this._details = new vDp(a, this.editor);
        const l = ()=>this.element.domNode.classList.toggle("no-icons", !this.editor.getOption(123).showIcons);
        l();
        const c = r.createInstance(OWr, this.editor);
        this._disposables.add(c), this._disposables.add(c.onDidToggleDetails(()=>this.toggleDetails())), this._list = new F5("SuggestWidget", this._listElement, {
            getHeight: (d)=>this.getLayoutInfo().itemHeight,
            getTemplateId: (d)=>"suggestion"
        }, [
            c
        ], {
            alwaysConsumeMouseWheel: !0,
            useShadows: !1,
            mouseSupport: !1,
            multipleSelectionSupport: !1,
            accessibilityProvider: {
                getRole: ()=>"listitem",
                getWidgetAriaLabel: ()=>D(1618, null),
                getWidgetRole: ()=>"listbox",
                getAriaLabel: (d)=>{
                    let h = d.textLabel;
                    const p = afn.toLabel(d.completion.kind);
                    if (typeof d.completion.label != "string") {
                        const { detail: b, description: y } = d.completion.label;
                        b && y ? h = D(1619, null, h, b, y, p) : b ? h = D(1620, null, h, b, p) : y && (h = D(1621, null, h, y, p));
                    } else h = D(1622, null, h, p);
                    if (!d.isResolved || !this._isDetailsVisible()) return h;
                    const { documentation: g, detail: f } = d.completion, _ = rY("{0}{1}", f || "", g ? typeof g == "string" ? g : g.value : "");
                    return D(1623, null, h, _);
                }
            }
        }), this._list.style(Hyt({
            listInactiveFocusBackground: aNa,
            listInactiveFocusOutline: Ck
        })), this._status = r.createInstance(sCn, this.element.domNode, Cst);
        const u = ()=>this.element.domNode.classList.toggle("with-status-bar", this.editor.getOption(123).showStatusBar);
        u(), this._disposables.add(i.onDidColorThemeChange((d)=>this._onThemeChange(d))), this._onThemeChange(i.getColorTheme()), this._disposables.add(this._list.onMouseDown((d)=>this._onListMouseDownOrTap(d))), this._disposables.add(this._list.onTap((d)=>this._onListMouseDownOrTap(d))), this._disposables.add(this._list.onDidChangeSelection((d)=>this._onListSelection(d))), this._disposables.add(this._list.onDidChangeFocus((d)=>this._onListFocus(d))), this._disposables.add(this.editor.onDidChangeCursorSelection(()=>this._onCursorSelectionChanged())), this._disposables.add(this.editor.onDidChangeConfiguration((d)=>{
            d.hasChanged(123) && (u(), l()), this._completionModel && (d.hasChanged(52) || d.hasChanged(124) || d.hasChanged(125)) && this._list.splice(0, this._list.length, this._completionModel.items);
        })), this._ctxSuggestWidgetVisible = Qv.Visible.bindTo(n), this._ctxSuggestWidgetDetailsVisible = Qv.DetailsVisible.bindTo(n), this._ctxSuggestWidgetMultipleSuggestions = Qv.MultipleSuggestions.bindTo(n), this._ctxSuggestWidgetHasFocusedSuggestion = Qv.HasFocusedSuggestion.bindTo(n), this._disposables.add(n0(this._details.widget.domNode, "keydown", (d)=>{
            this._onDetailsKeydown.fire(d);
        })), this._disposables.add(this.editor.onMouseDown((d)=>this._onEditorMouseDown(d)));
    }
    get isShown() {
        return this._ctxSuggestWidgetVisible.get();
    }
    dispose() {
        this._details.widget.dispose(), this._details.dispose(), this._list.dispose(), this._status.dispose(), this._disposables.dispose(), this._pendingLayout.dispose(), this._pendingShowDetails.dispose(), this._showTimeout.dispose(), this._contentWidget.dispose(), this.element.dispose(), this._onDidSelect.dispose(), this._onDidFocus.dispose(), this._onDidHide.dispose(), this._onDidShow.dispose(), this._onDetailsKeydown.dispose(), super.dispose();
    }
    _onEditorMouseDown(t) {
        this._details.widget.domNode.contains(t.target.element) ? this._details.widget.domNode.focus() : this.element.domNode.contains(t.target.element) && this.editor.focus();
    }
    _onCursorSelectionChanged() {
        this._state !== 0 && this._contentWidget.layout();
    }
    _onListMouseDownOrTap(t) {
        typeof t.element > "u" || typeof t.index > "u" || (t.browserEvent.preventDefault(), t.browserEvent.stopPropagation(), this._select(t.element, t.index));
    }
    _onListSelection(t) {
        t.elements.length && this._select(t.elements[0], t.indexes[0]);
    }
    _select(t, e) {
        const n = this._completionModel;
        n && (this._onDidSelect.fire({
            item: t,
            index: e,
            model: n
        }), this.editor.focus());
    }
    _onThemeChange(t) {
        this._details.widget.borderWidth = $Ae(t.type) ? 2 : 1;
    }
    _onListFocus(t) {
        if (this._ignoreFocusEvents) return;
        if (this._state === 5 && this._setState(3), !t.elements.length) {
            this._currentSuggestionDetails && (this._currentSuggestionDetails.cancel(), this._currentSuggestionDetails = void 0, this._focusedItem = void 0), this.editor.setAriaOptions({
                activeDescendant: void 0
            }), this._ctxSuggestWidgetHasFocusedSuggestion.set(!1);
            return;
        }
        if (!this._completionModel) return;
        this._ctxSuggestWidgetHasFocusedSuggestion.set(!0);
        const e = t.elements[0], n = t.indexes[0];
        e !== this._focusedItem && (this._currentSuggestionDetails?.cancel(), this._currentSuggestionDetails = void 0, this._focusedItem = e, this._list.reveal(n), this._currentSuggestionDetails = XE(async (i)=>{
            const r = Ec(()=>{
                this._isDetailsVisible() && this._showDetails(!0, !1);
            }, 250), s = i.onCancellationRequested(()=>r.dispose());
            try {
                return await e.resolve(i);
            } finally{
                r.dispose(), s.dispose();
            }
        }), this._currentSuggestionDetails.then(()=>{
            n >= this._list.length || e !== this._list.element(n) || (this._ignoreFocusEvents = !0, this._list.splice(n, 1, [
                e
            ]), this._list.setFocus([
                n
            ]), this._ignoreFocusEvents = !1, this._isDetailsVisible() ? this._showDetails(!1, !1) : this.element.domNode.classList.remove("docs-side"), this.editor.setAriaOptions({
                activeDescendant: this._list.getElementID(n)
            }));
        }).catch(xr)), this._onDidFocus.fire({
            item: e,
            index: n,
            model: this._completionModel
        });
    }
    _setState(t) {
        if (this._state !== t) switch(this._state = t, this.element.domNode.classList.toggle("frozen", t === 4), this.element.domNode.classList.remove("message"), t){
            case 0:
                AS(this._messageElement, this._listElement, this._status.element), this._details.hide(!0), this._status.hide(), this._contentWidget.hide(), this._ctxSuggestWidgetVisible.reset(), this._ctxSuggestWidgetMultipleSuggestions.reset(), this._ctxSuggestWidgetHasFocusedSuggestion.reset(), this._showTimeout.cancel(), this.element.domNode.classList.remove("visible"), this._list.splice(0, this._list.length), this._focusedItem = void 0, this._cappedHeight = void 0, this._explainMode = !1;
                break;
            case 1:
                this.element.domNode.classList.add("message"), this._messageElement.textContent = zGe.LOADING_MESSAGE, AS(this._listElement, this._status.element), R0(this._messageElement), this._details.hide(), this._show(), this._focusedItem = void 0, qve(zGe.LOADING_MESSAGE);
                break;
            case 2:
                this.element.domNode.classList.add("message"), this._messageElement.textContent = zGe.NO_SUGGESTIONS_MESSAGE, AS(this._listElement, this._status.element), R0(this._messageElement), this._details.hide(), this._show(), this._focusedItem = void 0, qve(zGe.NO_SUGGESTIONS_MESSAGE);
                break;
            case 3:
                AS(this._messageElement), R0(this._listElement, this._status.element), this._show();
                break;
            case 4:
                AS(this._messageElement), R0(this._listElement, this._status.element), this._show();
                break;
            case 5:
                AS(this._messageElement), R0(this._listElement, this._status.element), this._details.show(), this._show(), this._details.widget.focus();
                break;
        }
    }
    _show() {
        this._status.show(), this._contentWidget.show(), this._layout(this._persistedSize.restore()), this._ctxSuggestWidgetVisible.set(!0), this._showTimeout.cancelAndSet(()=>{
            this.element.domNode.classList.add("visible"), this._onDidShow.fire(this);
        }, 100);
    }
    showTriggered(t, e) {
        this._state === 0 && (this._contentWidget.setPosition(this.editor.getPosition()), this._isAuto = !!t, this._isAuto || (this._loadingTimeout.value = Ec(()=>this._setState(1), e)));
    }
    showSuggestions(t, e, n, i, r) {
        if (this._contentWidget.setPosition(this.editor.getPosition()), this._loadingTimeout.clear(), this._currentSuggestionDetails?.cancel(), this._currentSuggestionDetails = void 0, this._completionModel !== t && (this._completionModel = t), n && this._state !== 2 && this._state !== 0) {
            this._setState(4);
            return;
        }
        const s = this._completionModel.items.length, o = s === 0;
        if (this._ctxSuggestWidgetMultipleSuggestions.set(s > 1), o) {
            this._setState(i ? 0 : 2), this._completionModel = void 0;
            return;
        }
        this._focusedItem = void 0, this._onDidFocus.pause(), this._onDidSelect.pause();
        try {
            this._list.splice(0, this._list.length, this._completionModel.items), this._setState(n ? 4 : 3), this._list.reveal(e, 0, e === 0 ? 0 : this.getLayoutInfo().itemHeight * .33), this._list.setFocus(r ? [] : [
                e
            ]);
        } finally{
            this._onDidFocus.resume(), this._onDidSelect.resume();
        }
        this._pendingLayout.value = C9t(ws(this.element.domNode), ()=>{
            this._pendingLayout.clear(), this._layout(this.element.size), this._details.widget.domNode.classList.remove("focused");
        });
    }
    focusSelected() {
        this._list.length > 0 && this._list.setFocus([
            0
        ]);
    }
    selectNextPage() {
        switch(this._state){
            case 0:
                return !1;
            case 5:
                return this._details.widget.pageDown(), !0;
            case 1:
                return !this._isAuto;
            default:
                return this._list.focusNextPage(), !0;
        }
    }
    selectNext() {
        switch(this._state){
            case 0:
                return !1;
            case 1:
                return !this._isAuto;
            default:
                return this._list.focusNext(1, !0), !0;
        }
    }
    selectLast() {
        switch(this._state){
            case 0:
                return !1;
            case 5:
                return this._details.widget.scrollBottom(), !0;
            case 1:
                return !this._isAuto;
            default:
                return this._list.focusLast(), !0;
        }
    }
    selectPreviousPage() {
        switch(this._state){
            case 0:
                return !1;
            case 5:
                return this._details.widget.pageUp(), !0;
            case 1:
                return !this._isAuto;
            default:
                return this._list.focusPreviousPage(), !0;
        }
    }
    selectPrevious() {
        switch(this._state){
            case 0:
                return !1;
            case 1:
                return !this._isAuto;
            default:
                return this._list.focusPrevious(1, !0), !1;
        }
    }
    selectFirst() {
        switch(this._state){
            case 0:
                return !1;
            case 5:
                return this._details.widget.scrollTop(), !0;
            case 1:
                return !this._isAuto;
            default:
                return this._list.focusFirst(), !0;
        }
    }
    getFocusedItem() {
        if (this._state !== 0 && this._state !== 2 && this._state !== 1 && this._completionModel && this._list.getFocus().length > 0) return {
            item: this._list.getFocusedElements()[0],
            index: this._list.getFocus()[0],
            model: this._completionModel
        };
    }
    getAllSuggestions() {
        if (this._state !== 0 && this._state !== 2 && this._state !== 1 && this._completionModel) return this._completionModel.items;
    }
    toggleDetailsFocus() {
        this._state === 5 ? (this._list.setFocus(this._list.getFocus()), this._setState(3)) : this._state === 3 && (this._setState(5), this._isDetailsVisible() ? this._details.widget.focus() : this.toggleDetails(!0));
    }
    toggleDetails(t = !1) {
        this._isDetailsVisible() ? (this._pendingShowDetails.clear(), this._ctxSuggestWidgetDetailsVisible.set(!1), this._setDetailsVisible(!1), this._details.hide(), this.element.domNode.classList.remove("shows-details")) : (rNa(this._list.getFocusedElements()[0]) || this._explainMode) && (this._state === 3 || this._state === 5 || this._state === 4) && (this._ctxSuggestWidgetDetailsVisible.set(!0), this._setDetailsVisible(!0), this._showDetails(!1, t));
    }
    _showDetails(t, e) {
        this._pendingShowDetails.value = C9t(ws(this.element.domNode), ()=>{
            this._pendingShowDetails.clear(), this._details.show();
            let n = !1;
            t ? this._details.widget.renderLoading() : this._details.widget.renderItem(this._list.getFocusedElements()[0], this._explainMode), this._details.widget.isEmpty ? this._details.hide() : (this._positionDetails(), this.element.domNode.classList.add("shows-details"), e && (this._details.widget.focus(), n = !0)), n || this.editor.focus();
        });
    }
    toggleExplainMode() {
        this._list.getFocusedElements()[0] && (this._explainMode = !this._explainMode, this._isDetailsVisible() ? this._showDetails(!1, !1) : this.toggleDetails());
    }
    resetPersistedSize() {
        this._persistedSize.reset();
    }
    hideWidget() {
        this._pendingLayout.clear(), this._pendingShowDetails.clear(), this._loadingTimeout.clear(), this._setState(0), this._onDidHide.fire(this), this.element.clearSashHoverState();
        const t = this._persistedSize.restore(), e = Math.ceil(this.getLayoutInfo().itemHeight * 4.3);
        t && t.height < e && this._persistedSize.store(t.with(void 0, e));
    }
    isFrozen() {
        return this._state === 4;
    }
    _afterRender(t) {
        if (t === null) {
            this._isDetailsVisible() && this._details.hide();
            return;
        }
        this._state === 2 || this._state === 1 || (this._isDetailsVisible() && !this._details.widget.isEmpty && this._details.show(), this._positionDetails());
    }
    _layout(t) {
        if (!this.editor.hasModel() || !this.editor.getDomNode()) return;
        const e = Yde(this.element.domNode.ownerDocument.body), n = this.getLayoutInfo();
        t || (t = n.defaultSize);
        let i = t.height, r = t.width;
        if (this._status.element.style.height = `${n.itemHeight}px`, this._state === 2 || this._state === 1) i = n.itemHeight + n.borderHeight, r = n.defaultSize.width / 2, this.element.enableSashes(!1, !1, !1, !1), this.element.minSize = this.element.maxSize = new nd(r, i), this._contentWidget.setPreference(2);
        else {
            const s = e.width - n.borderHeight - 2 * n.horizontalPadding;
            r > s && (r = s);
            const o = this._completionModel ? this._completionModel.stats.pLabelLen * n.typicalHalfwidthCharacterWidth : r, a = n.statusBarHeight + this._list.contentHeight + n.borderHeight, l = n.itemHeight + n.statusBarHeight, c = Ex(this.editor.getDomNode()), u = this.editor.getScrolledVisiblePosition(this.editor.getPosition()), d = c.top + u.top + u.height, h = Math.min(e.height - d - n.verticalPadding, a), p = c.top + u.top - n.verticalPadding, g = Math.min(p, a);
            let f = Math.min(Math.max(g, h) + n.borderHeight, a);
            i === this._cappedHeight?.capped && (i = this._cappedHeight.wanted), i < l && (i = l), i > f && (i = f), i > h || this._forceRenderingAbove && p > 150 ? (this._contentWidget.setPreference(1), this.element.enableSashes(!0, !0, !1, !1), f = g) : (this._contentWidget.setPreference(2), this.element.enableSashes(!1, !0, !0, !1), f = h), this.element.preferredSize = new nd(o, n.defaultSize.height), this.element.maxSize = new nd(s, f), this.element.minSize = new nd(220, l), this._cappedHeight = i === a ? {
                wanted: this._cappedHeight?.wanted ?? t.height,
                capped: i
            } : void 0;
        }
        this._resize(r, i);
    }
    _resize(t, e) {
        const { width: n, height: i } = this.element.maxSize;
        t = Math.min(n, t), e = Math.min(i, e);
        const { statusBarHeight: r } = this.getLayoutInfo();
        this._list.layout(e - r, t), this._listElement.style.height = `${e - r}px`, this.element.layout(e, t), this._contentWidget.layout(), this._positionDetails();
    }
    _positionDetails() {
        this._isDetailsVisible() && this._details.placeAtAnchor(this.element.domNode, this._contentWidget.getPosition()?.preference[0] === 2);
    }
    getLayoutInfo() {
        const t = this.editor.getOption(52), e = f1(this.editor.getOption(125) || t.lineHeight, 8, 1e3), n = !this.editor.getOption(123).showStatusBar || this._state === 2 || this._state === 1 ? 0 : e, i = this._details.widget.borderWidth, r = 2 * i;
        return {
            itemHeight: e,
            statusBarHeight: n,
            borderWidth: i,
            borderHeight: r,
            typicalHalfwidthCharacterWidth: t.typicalHalfwidthCharacterWidth,
            verticalPadding: 22,
            horizontalPadding: 14,
            defaultSize: new nd(430, n + 12 * e)
        };
    }
    _isDetailsVisible() {
        return this._storageService.getBoolean("expandSuggestionDocs", 0, !1);
    }
    _setDetailsVisible(t) {
        this._storageService.store("expandSuggestionDocs", t, 0, 0);
    }
    forceRenderingAbove() {
        this._forceRenderingAbove || (this._forceRenderingAbove = !0, this._layout(this._persistedSize.restore()));
    }
    stopForceRenderingAbove() {
        this._forceRenderingAbove = !1;
    }
}, zGe.LOADING_MESSAGE = D(1616, null), zGe.NO_SUGGESTIONS_MESSAGE = D(1617, null), zGe = Re([
    F(1, ki),
    F(2, Rr),
    F(3, Ml),
    F(4, dn)
], zGe), CDp = class {
    constructor(t, e){
        this._widget = t, this._editor = e, this.allowEditorOverflow = !0, this.suppressMouseDown = !1, this._preferenceLocked = !1, this._added = !1, this._hidden = !1;
    }
    dispose() {
        this._added && (this._added = !1, this._editor.removeContentWidget(this));
    }
    getId() {
        return "editor.widget.suggestWidget";
    }
    getDomNode() {
        return this._widget.element.domNode;
    }
    show() {
        this._hidden = !1, this._added || (this._added = !0, this._editor.addContentWidget(this));
    }
    hide() {
        this._hidden || (this._hidden = !0, this.layout());
    }
    layout() {
        this._editor.layoutContentWidget(this);
    }
    getPosition() {
        return this._hidden || !this._position || !this._preference ? null : {
            position: this._position,
            preference: [
                this._preference
            ]
        };
    }
    beforeRender() {
        const { height: t, width: e } = this._widget.element.size, { borderWidth: n, horizontalPadding: i } = this._widget.getLayoutInfo();
        return new nd(e + 2 * n + i, t + 2 * n);
    }
    afterRender(t) {
        this._widget._afterRender(t);
    }
    setPreference(t) {
        this._preferenceLocked || (this._preference = t);
    }
    lockPreference() {
        this._preferenceLocked = !0;
    }
    unlockPreference() {
        this._preferenceLocked = !1;
    }
    setPosition(t) {
        this._position = t;
    }
};

}
