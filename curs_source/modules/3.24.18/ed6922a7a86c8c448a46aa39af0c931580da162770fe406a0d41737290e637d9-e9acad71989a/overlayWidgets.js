import { en } from "./dom_2.js";
import { Tx } from "./fastDomNode.js";
import { d_g } from "./overlayWidgets.css";
import { Nk, x_ } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { aU, jge, mW } from "./viewPart.js";
var s6c;
export { s6c };
var __wakaru_h_g_initialized = false;
export function h_g() {
if (__wakaru_h_g_initialized) return;
__wakaru_h_g_initialized = true;
"use strict";
x(), d_g(), Tx(), aU(), en(), s6c = class extends mW {
    constructor(e, t){
        super(e), this._viewDomNode = t;
        const i = this._context.configuration.options.get(151);
        this._widgets = {}, this._verticalScrollbarWidth = i.verticalScrollbarWidth, this._minimapWidth = i.minimap.minimapWidth, this._horizontalScrollbarHeight = i.horizontalScrollbarHeight, this._editorHeight = i.height, this._editorWidth = i.width, this._viewDomNodeRect = {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        }, this._domNode = x_(document.createElement("div")), jge.write(this._domNode, 4), this._domNode.setClassName("overlayWidgets"), this.overflowingOverlayWidgetsDomNode = x_(document.createElement("div")), jge.write(this.overflowingOverlayWidgetsDomNode, 5), this.overflowingOverlayWidgetsDomNode.setClassName("overflowingOverlayWidgets");
    }
    dispose() {
        super.dispose();
        for (const e of Object.values(this._widgets)){
            const t = e.domNode.domNode;
            (t.parentElement === this._domNode.domNode || t.parentElement === this.overflowingOverlayWidgetsDomNode.domNode) && t.remove();
        }
        this._widgets = {};
    }
    getDomNode() {
        return this._domNode;
    }
    onConfigurationChanged(e) {
        const n = this._context.configuration.options.get(151);
        return this._verticalScrollbarWidth = n.verticalScrollbarWidth, this._minimapWidth = n.minimap.minimapWidth, this._horizontalScrollbarHeight = n.horizontalScrollbarHeight, this._editorHeight = n.height, this._editorWidth = n.width, !0;
    }
    addWidget(e) {
        const t = x_(e.getDomNode());
        this._widgets[e.getId()] = {
            widget: e,
            preference: null,
            domNode: t
        }, t.setPosition("absolute"), t.setAttribute("widgetId", e.getId()), e.allowEditorOverflow ? this.overflowingOverlayWidgetsDomNode.appendChild(t) : this._domNode.appendChild(t), this.setShouldRender(), this._updateMaxMinWidth();
    }
    setWidgetPosition(e, t) {
        const n = this._widgets[e.getId()], i = t ? t.preference : null, r = t?.stackOridinal;
        return n.preference === i && n.stack === r ? (this._updateMaxMinWidth(), !1) : (n.preference = i, n.stack = r, this.setShouldRender(), this._updateMaxMinWidth(), !0);
    }
    removeWidget(e) {
        const t = e.getId();
        if (this._widgets.hasOwnProperty(t)) {
            const i = this._widgets[t].domNode.domNode;
            delete this._widgets[t], i.remove(), this.setShouldRender(), this._updateMaxMinWidth();
        }
    }
    _updateMaxMinWidth() {
        let e = 0;
        const t = Object.keys(this._widgets);
        for(let n = 0, i = t.length; n < i; n++){
            const r = t[n], o = this._widgets[r].widget.getMinContentWidthInPx?.();
            typeof o < "u" && (e = Math.max(e, o));
        }
        this._context.viewLayout.setOverlayWidgetsMinWidth(e);
    }
    _renderWidget(e, t) {
        const n = e.domNode;
        if (e.preference === null) {
            n.setTop("");
            return;
        }
        const i = 2 * this._verticalScrollbarWidth + this._minimapWidth;
        if (e.preference === 0 || e.preference === 1) {
            if (e.preference === 1) {
                const r = n.domNode.clientHeight;
                n.setTop(this._editorHeight - r - 2 * this._horizontalScrollbarHeight);
            } else n.setTop(0);
            e.stack !== void 0 ? (n.setTop(t[e.preference]), t[e.preference] += n.domNode.clientWidth) : n.setRight(i);
        } else if (e.preference === 2) n.domNode.style.right = "50%", e.stack !== void 0 ? (n.setTop(t[2]), t[2] += n.domNode.clientHeight) : n.setTop(0);
        else if (e.preference === 3) n.setTop(""), n.setBottom(this._horizontalScrollbarHeight), n.setWidth("100%");
        else {
            const { top: r, left: s } = e.preference;
            if (this._context.configuration.options.get(44) && e.widget.allowEditorOverflow) {
                const a = this._viewDomNodeRect;
                n.setTop(r + a.top), n.setLeft(s + a.left), n.setPosition("fixed");
            } else n.setTop(r), n.setLeft(s), n.setPosition("absolute");
        }
    }
    prepareRender(e) {
        this._viewDomNodeRect = Nk(this._viewDomNode.domNode);
    }
    render(e) {
        this._domNode.setWidth(this._editorWidth);
        const t = Object.keys(this._widgets), n = Array.from({
            length: 3
        }, ()=>0);
        t.sort((i, r)=>(this._widgets[i].stack || 0) - (this._widgets[r].stack || 0));
        for(let i = 0, r = t.length; i < r; i++){
            const s = t[i];
            this._renderWidget(this._widgets[s], n);
        }
    }
};

}
