import { D, Gt, Nt, Qe, tt } from "./Iwo.js";
import { gs, yt } from "./codicons.js";
import { Hn, nd } from "./dom_2.js";
import { Ek, zf } from "./htmlContent.js";
import { It, dn } from "./instantiation.js";
import { rNa } from "./ipa.js";
import { AY, Coe } from "./markdownRenderer_2.js";
import { Bt } from "./nls.js";
import { Ooi, wvn } from "./resizable.js";
import { E7, mwe } from "./scrollableElement.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { AS, Ii, R0, Yde, fr, uy, xii } from "./ze.js";
var LWr, vDp;
export { LWr, vDp };
var __wakaru__Dp_initialized = false;
export function _Dp() {
if (__wakaru__Dp_initialized) return;
__wakaru__Dp_initialized = true;
"use strict";
E(), Hn(), E7(), gs(), ta(), Gt(), Ek(), Qe(), Coe(), Ooi(), Bt(), It(), LWr = class {
    constructor(t, e){
        this._editor = t, this._onDidClose = new tt, this.onDidClose = this._onDidClose.event, this._onDidChangeContents = new tt, this.onDidChangeContents = this._onDidChangeContents.event, this._disposables = new Nt, this._renderDisposeable = new Nt, this._borderWidth = 1, this._size = new nd(330, 0), this.domNode = Ii(".suggest-details"), this.domNode.classList.add("no-docs"), this._markdownRenderer = e.createInstance(AY, {
            editor: t
        }), this._body = Ii(".body"), this._scrollbar = new mwe(this._body, {
            alwaysConsumeMouseWheel: !0
        }), fr(this.domNode, this._scrollbar.getDomNode()), this._disposables.add(this._scrollbar), this._header = fr(this._body, Ii(".header")), this._close = fr(this._header, Ii("span" + Gn.asCSSSelector(yt.close))), this._close.title = D(1624, null), this._close.role = "button", this._close.tabIndex = -1, this._type = fr(this._header, Ii("p.type")), this._docs = fr(this._body, Ii("p.docs")), this._configureFont(), this._disposables.add(this._editor.onDidChangeConfiguration((n)=>{
            n.hasChanged(52) && this._configureFont();
        }));
    }
    dispose() {
        this._disposables.dispose(), this._renderDisposeable.dispose(), this._onDidClose.dispose(), this._onDidChangeContents.dispose();
    }
    _configureFont() {
        const t = this._editor.getOptions(), e = t.get(52), n = e.getMassagedFontFamily(), i = t.get(124) || e.fontSize, r = t.get(125) || e.lineHeight, s = e.fontWeight, o = `${i}px`, a = `${r}px`;
        this.domNode.style.fontSize = o, this.domNode.style.lineHeight = `${r / i}`, this.domNode.style.fontWeight = s, this.domNode.style.fontFeatureSettings = e.fontFeatureSettings, this._type.style.fontFamily = n, this._close.style.height = a, this._close.style.width = a;
    }
    getLayoutInfo() {
        const t = this._editor.getOption(125) || this._editor.getOption(52).lineHeight, e = this._borderWidth, n = e * 2;
        return {
            lineHeight: t,
            borderWidth: e,
            borderHeight: n,
            verticalPadding: 22,
            horizontalPadding: 14
        };
    }
    renderLoading() {
        this._type.textContent = D(1625, null), this._docs.textContent = "", this.domNode.classList.remove("no-docs", "no-type"), this.layout(this.size.width, this.getLayoutInfo().lineHeight * 2), this._onDidChangeContents.fire(this);
    }
    renderItem(t, e) {
        this._renderDisposeable.clear();
        let { detail: n, documentation: i } = t.completion;
        if (e) {
            let r = "";
            r += `score: ${t.score[0]}
`, r += `prefix: ${t.word ?? "(no prefix)"}
`, r += `word: ${t.completion.filterText ? t.completion.filterText + " (filterText)" : t.textLabel}
`, r += `distance: ${t.distance} (localityBonus-setting)
`, r += `index: ${t.idx}, based on ${t.completion.sortText && `sortText: "${t.completion.sortText}"` || "label"}
`, r += `commit_chars: ${t.completion.commitCharacters?.join("")}
`, i = new zf().appendCodeblock("empty", r), n = `Provider: ${t.provider._debugDisplayName}`;
        }
        if (!e && !rNa(t)) {
            this.clearContents();
            return;
        }
        if (this.domNode.classList.remove("no-docs", "no-type"), n) {
            const r = n.length > 1e5 ? `${n.substr(0, 1e5)}\u2026` : n;
            this._type.textContent = r, this._type.title = r, R0(this._type), this._type.classList.toggle("auto-wrap", !/\r?\n^\s+/gmi.test(r));
        } else uy(this._type), this._type.title = "", AS(this._type), this.domNode.classList.add("no-type");
        if (uy(this._docs), typeof i == "string") this._docs.classList.remove("markdown-docs"), this._docs.textContent = i;
        else if (i) {
            this._docs.classList.add("markdown-docs"), uy(this._docs);
            const r = this._markdownRenderer.render(i, {
                asyncRenderCallback: ()=>{
                    this.layout(this._size.width, this._type.clientHeight + this._docs.clientHeight), this._onDidChangeContents.fire(this);
                }
            });
            this._docs.appendChild(r.element), this._renderDisposeable.add(r);
        }
        this.domNode.classList.toggle("detail-and-doc", !!n && !!i), this.domNode.style.userSelect = "text", this.domNode.tabIndex = -1, this._close.onmousedown = (r)=>{
            r.preventDefault(), r.stopPropagation();
        }, this._close.onclick = (r)=>{
            r.preventDefault(), r.stopPropagation(), this._onDidClose.fire();
        }, this._body.scrollTop = 0, this.layout(this._size.width, this._type.clientHeight + this._docs.clientHeight), this._onDidChangeContents.fire(this);
    }
    clearContents() {
        this.domNode.classList.add("no-docs"), this._type.textContent = "", this._docs.textContent = "";
    }
    get isEmpty() {
        return this.domNode.classList.contains("no-docs");
    }
    get size() {
        return this._size;
    }
    layout(t, e) {
        const n = new nd(t, e);
        nd.equals(n, this._size) || (this._size = n, xii(this.domNode, t, e)), this._scrollbar.scanDomNode();
    }
    scrollDown(t = 8) {
        this._body.scrollTop += t;
    }
    scrollUp(t = 8) {
        this._body.scrollTop -= t;
    }
    scrollTop() {
        this._body.scrollTop = 0;
    }
    scrollBottom() {
        this._body.scrollTop = this._body.scrollHeight;
    }
    pageDown() {
        this.scrollDown(80);
    }
    pageUp() {
        this.scrollUp(80);
    }
    set borderWidth(t) {
        this._borderWidth = t;
    }
    get borderWidth() {
        return this._borderWidth;
    }
    focus() {
        this.domNode.focus();
    }
}, LWr = Re([
    F(1, dn)
], LWr), vDp = class {
    constructor(t, e){
        this.widget = t, this._editor = e, this.allowEditorOverflow = !0, this._disposables = new Nt, this._added = !1, this._preferAlignAtTop = !0, this._resizable = new wvn, this._resizable.domNode.classList.add("suggest-details-container"), this._resizable.domNode.appendChild(t.domNode), this._resizable.enableSashes(!1, !0, !0, !1);
        let n, i, r = 0, s = 0;
        this._disposables.add(this._resizable.onDidWillResize(()=>{
            n = this._topLeft, i = this._resizable.size;
        })), this._disposables.add(this._resizable.onDidResize((o)=>{
            if (n && i) {
                this.widget.layout(o.dimension.width, o.dimension.height);
                let a = !1;
                o.west && (s = i.width - o.dimension.width, a = !0), o.north && (r = i.height - o.dimension.height, a = !0), a && this._applyTopLeft({
                    top: n.top + r,
                    left: n.left + s
                });
            }
            o.done && (n = void 0, i = void 0, r = 0, s = 0, this._userSize = o.dimension);
        })), this._disposables.add(this.widget.onDidChangeContents(()=>{
            this._anchorBox && this._placeAtAnchor(this._anchorBox, this._userSize ?? this.widget.size, this._preferAlignAtTop);
        }));
    }
    dispose() {
        this._resizable.dispose(), this._disposables.dispose(), this.hide();
    }
    getId() {
        return "suggest.details";
    }
    getDomNode() {
        return this._resizable.domNode;
    }
    getPosition() {
        return this._topLeft ? {
            preference: this._topLeft
        } : null;
    }
    show() {
        this._added || (this._editor.addOverlayWidget(this), this._added = !0);
    }
    hide(t = !1) {
        this._resizable.clearSashHoverState(), this._added && (this._editor.removeOverlayWidget(this), this._added = !1, this._anchorBox = void 0, this._topLeft = void 0), t && (this._userSize = void 0, this.widget.clearContents());
    }
    placeAtAnchor(t, e) {
        const n = t.getBoundingClientRect();
        this._anchorBox = n, this._preferAlignAtTop = e, this._placeAtAnchor(this._anchorBox, this._userSize ?? this.widget.size, e);
    }
    _placeAtAnchor(t, e, n) {
        const i = Yde(this.getDomNode().ownerDocument.body), r = this.widget.getLayoutInfo(), s = new nd(220, 2 * r.lineHeight), o = t.top, a = (function() {
            const k = i.width - (t.left + t.width + r.borderWidth + r.horizontalPadding), C = -r.borderWidth + t.left + t.width, T = new nd(k, i.height - t.top - r.borderHeight - r.verticalPadding), I = T.with(void 0, t.top + t.height - r.borderHeight - r.verticalPadding);
            return {
                top: o,
                left: C,
                fit: k - e.width,
                maxSizeTop: T,
                maxSizeBottom: I,
                minSize: s.with(Math.min(k, s.width))
            };
        })(), l = (function() {
            const k = t.left - r.borderWidth - r.horizontalPadding, C = Math.max(r.horizontalPadding, t.left - e.width - r.borderWidth), T = new nd(k, i.height - t.top - r.borderHeight - r.verticalPadding), I = T.with(void 0, t.top + t.height - r.borderHeight - r.verticalPadding);
            return {
                top: o,
                left: C,
                fit: k - e.width,
                maxSizeTop: T,
                maxSizeBottom: I,
                minSize: s.with(Math.min(k, s.width))
            };
        })(), c = (function() {
            const k = t.left, C = -r.borderWidth + t.top + t.height, T = new nd(t.width - r.borderHeight, i.height - t.top - t.height - r.verticalPadding);
            return {
                top: C,
                left: k,
                fit: T.height - e.height,
                maxSizeBottom: T,
                maxSizeTop: T,
                minSize: s.with(T.width)
            };
        })(), u = [
            a,
            l,
            c
        ], d = u.find((k)=>k.fit >= 0) ?? u.sort((k, C)=>C.fit - k.fit)[0], h = t.top + t.height - r.borderHeight;
        let p, g = e.height;
        const f = Math.max(d.maxSizeTop.height, d.maxSizeBottom.height);
        g > f && (g = f);
        let _;
        n ? g <= d.maxSizeTop.height ? (p = !0, _ = d.maxSizeTop) : (p = !1, _ = d.maxSizeBottom) : g <= d.maxSizeBottom.height ? (p = !1, _ = d.maxSizeBottom) : (p = !0, _ = d.maxSizeTop);
        let { top: b, left: y } = d;
        !p && g > t.height && (b = h - g);
        const S = this._editor.getDomNode();
        if (S) {
            const k = S.getBoundingClientRect();
            b -= k.top, y -= k.left;
        }
        this._applyTopLeft({
            left: y,
            top: b
        }), this._resizable.enableSashes(!p, d === a, p, d !== a), this._resizable.minSize = d.minSize, this._resizable.maxSize = _, this._resizable.layout(g, Math.min(_.width, e.width)), this.widget.layout(this._resizable.size.width, this._resizable.size.height);
    }
    _applyTopLeft(t) {
        this._topLeft = t, this._editor.layoutOverlayWidget(this);
    }
};

}
