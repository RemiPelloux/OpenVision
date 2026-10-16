import { Hn } from "./dom_2.js";
import { i6 } from "./fastDomNode.js";
import { rDy } from "./overlayWidgets.css";
import { E } from "./tslib.es6.js";
import { AQ, YAe, pz } from "./viewPart.js";
import { Ew, Ex } from "./ze.js";
var _$d;
export { _$d };
var __wakaru_sDy_initialized = false;
export function sDy() {
if (__wakaru_sDy_initialized) return;
__wakaru_sDy_initialized = true;
"use strict";
E(), rDy(), i6(), pz(), Hn(), _$d = class extends AQ {
    constructor(t, e){
        super(t), this._viewDomNode = e;
        const i = this._context.configuration.options.get(151);
        this._widgets = {}, this._verticalScrollbarWidth = i.verticalScrollbarWidth, this._minimapWidth = i.minimap.minimapWidth, this._horizontalScrollbarHeight = i.horizontalScrollbarHeight, this._editorHeight = i.height, this._editorWidth = i.width, this._viewDomNodeRect = {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        }, this._domNode = Ew(document.createElement("div")), YAe.write(this._domNode, 4), this._domNode.setClassName("overlayWidgets"), this.overflowingOverlayWidgetsDomNode = Ew(document.createElement("div")), YAe.write(this.overflowingOverlayWidgetsDomNode, 5), this.overflowingOverlayWidgetsDomNode.setClassName("overflowingOverlayWidgets");
    }
    dispose() {
        super.dispose();
        for (const t of Object.values(this._widgets)){
            const e = t.domNode.domNode;
            (e.parentElement === this._domNode.domNode || e.parentElement === this.overflowingOverlayWidgetsDomNode.domNode) && e.remove();
        }
        this._widgets = {};
    }
    getDomNode() {
        return this._domNode;
    }
    onConfigurationChanged(t) {
        const n = this._context.configuration.options.get(151);
        return this._verticalScrollbarWidth = n.verticalScrollbarWidth, this._minimapWidth = n.minimap.minimapWidth, this._horizontalScrollbarHeight = n.horizontalScrollbarHeight, this._editorHeight = n.height, this._editorWidth = n.width, !0;
    }
    addWidget(t) {
        const e = Ew(t.getDomNode());
        this._widgets[t.getId()] = {
            widget: t,
            preference: null,
            domNode: e
        }, e.setPosition("absolute"), e.setAttribute("widgetId", t.getId()), t.allowEditorOverflow ? this.overflowingOverlayWidgetsDomNode.appendChild(e) : this._domNode.appendChild(e), this.setShouldRender(), this._updateMaxMinWidth();
    }
    setWidgetPosition(t, e) {
        const n = this._widgets[t.getId()], i = e ? e.preference : null, r = e?.stackOridinal;
        return n.preference === i && n.stack === r ? (this._updateMaxMinWidth(), !1) : (n.preference = i, n.stack = r, this.setShouldRender(), this._updateMaxMinWidth(), !0);
    }
    removeWidget(t) {
        const e = t.getId();
        if (this._widgets.hasOwnProperty(e)) {
            const i = this._widgets[e].domNode.domNode;
            delete this._widgets[e], i.remove(), this.setShouldRender(), this._updateMaxMinWidth();
        }
    }
    _updateMaxMinWidth() {
        let t = 0;
        const e = Object.keys(this._widgets);
        for(let n = 0, i = e.length; n < i; n++){
            const r = e[n], o = this._widgets[r].widget.getMinContentWidthInPx?.();
            typeof o < "u" && (t = Math.max(t, o));
        }
        this._context.viewLayout.setOverlayWidgetsMinWidth(t);
    }
    _renderWidget(t, e) {
        const n = t.domNode;
        if (t.preference === null) {
            n.setTop("");
            return;
        }
        const i = 2 * this._verticalScrollbarWidth + this._minimapWidth;
        if (t.preference === 0 || t.preference === 1) {
            if (t.preference === 1) {
                const r = n.domNode.clientHeight;
                n.setTop(this._editorHeight - r - 2 * this._horizontalScrollbarHeight);
            } else n.setTop(0);
            t.stack !== void 0 ? (n.setTop(e[t.preference]), e[t.preference] += n.domNode.clientWidth) : n.setRight(i);
        } else if (t.preference === 2) n.domNode.style.right = "50%", t.stack !== void 0 ? (n.setTop(e[2]), e[2] += n.domNode.clientHeight) : n.setTop(0);
        else if (t.preference === 3) n.setTop(""), n.setBottom(this._horizontalScrollbarHeight), n.setWidth("100%");
        else {
            const { top: r, left: s } = t.preference;
            if (this._context.configuration.options.get(44) && t.widget.allowEditorOverflow) {
                const a = this._viewDomNodeRect;
                n.setTop(r + a.top), n.setLeft(s + a.left), n.setPosition("fixed");
            } else n.setTop(r), n.setLeft(s), n.setPosition("absolute");
        }
    }
    prepareRender(t) {
        this._viewDomNodeRect = Ex(this._viewDomNode.domNode);
    }
    render(t) {
        this._domNode.setWidth(this._editorWidth);
        const e = Object.keys(this._widgets), n = Array.from({
            length: 3
        }, ()=>0);
        e.sort((i, r)=>(this._widgets[i].stack || 0) - (this._widgets[r].stack || 0));
        for(let i = 0, r = e.length; i < r; i++){
            const s = e[i];
            this._renderWidget(this._widgets[s], n);
        }
    }
};

}
