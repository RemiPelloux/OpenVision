import { Ei, xh } from "./Iwo.js";
import { i6 } from "./fastDomNode.js";
import { Q$e, Z$e } from "./stringBuilder.js";
import { Ztt } from "./trustedTypes.js";
import { E } from "./tslib.es6.js";
import { Ew, Xtt } from "./ze.js";
var LHo, OHo, pCr, Ljd;
export { LHo, Ljd, OHo, pCr };
var __wakaru_FHo_initialized = false;
export function FHo() {
if (__wakaru_FHo_initialized) return;
__wakaru_FHo_initialized = true;
"use strict";
E(), i6(), Ztt(), Ei(), Q$e(), LHo = class {
    constructor(t){
        this._lineFactory = t, this._set(1, []);
    }
    flush() {
        this._set(1, []);
    }
    _set(t, e) {
        this._lines = e, this._rendLineNumberStart = t;
    }
    _get() {
        return {
            rendLineNumberStart: this._rendLineNumberStart,
            lines: this._lines
        };
    }
    getStartLineNumber() {
        return this._rendLineNumberStart;
    }
    getEndLineNumber() {
        return this._rendLineNumberStart + this._lines.length - 1;
    }
    getCount() {
        return this._lines.length;
    }
    getLine(t) {
        const e = t - this._rendLineNumberStart;
        if (e < 0 || e >= this._lines.length) throw new xh("Illegal value for lineNumber");
        return this._lines[e];
    }
    onLinesDeleted(t, e) {
        if (this.getCount() === 0) return null;
        const n = this.getStartLineNumber(), i = this.getEndLineNumber();
        if (e < n) {
            const a = e - t + 1;
            return this._rendLineNumberStart -= a, null;
        }
        if (t > i) return null;
        let r = 0, s = 0;
        for(let a = n; a <= i; a++){
            const l = a - this._rendLineNumberStart;
            t <= a && a <= e && (s === 0 ? (r = l, s = 1) : s++);
        }
        if (t < n) {
            let a = 0;
            e < n ? a = e - t + 1 : a = n - t, this._rendLineNumberStart -= a;
        }
        return this._lines.splice(r, s);
    }
    onLinesChanged(t, e) {
        const n = t + e - 1;
        if (this.getCount() === 0) return !1;
        const i = this.getStartLineNumber(), r = this.getEndLineNumber();
        let s = !1;
        for(let o = t; o <= n; o++)o >= i && o <= r && (this._lines[o - this._rendLineNumberStart].onContentChanged(), s = !0);
        return s;
    }
    onLinesInserted(t, e) {
        if (this.getCount() === 0) return null;
        const n = e - t + 1, i = this.getStartLineNumber(), r = this.getEndLineNumber();
        if (t <= i) return this._rendLineNumberStart += n, null;
        if (t > r) return null;
        if (n + t > r) return this._lines.splice(t - this._rendLineNumberStart, r - t + 1);
        const s = [];
        for(let u = 0; u < n; u++)s[u] = this._lineFactory.createLine();
        const o = t - this._rendLineNumberStart, a = this._lines.slice(0, o), l = this._lines.slice(o, this._lines.length - n), c = this._lines.slice(this._lines.length - n, this._lines.length);
        return this._lines = a.concat(s).concat(l), c;
    }
    onTokensChanged(t) {
        if (this.getCount() === 0) return !1;
        const e = this.getStartLineNumber(), n = this.getEndLineNumber();
        let i = !1;
        for(let r = 0, s = t.length; r < s; r++){
            const o = t[r];
            if (o.toLineNumber < e || o.fromLineNumber > n) continue;
            const a = Math.max(e, o.fromLineNumber), l = Math.min(n, o.toLineNumber);
            for(let c = a; c <= l; c++){
                const u = c - this._rendLineNumberStart;
                this._lines[u].onTokensChanged(), i = !0;
            }
        }
        return i;
    }
}, OHo = class {
    constructor(t){
        this._lineFactory = t, this.domNode = this._createDomNode(), this._linesCollection = new LHo(this._lineFactory);
    }
    _createDomNode() {
        const t = Ew(document.createElement("div"));
        return t.setClassName("view-layer"), t.setPosition("absolute"), t.domNode.setAttribute("role", "presentation"), t.domNode.setAttribute("aria-hidden", "true"), t;
    }
    onConfigurationChanged(t) {
        return !!t.hasChanged(151);
    }
    onFlushed(t, e) {
        if (e) {
            const n = this._linesCollection.getStartLineNumber(), i = this._linesCollection.getEndLineNumber();
            for(let r = n; r <= i; r++)this._linesCollection.getLine(r).getDomNode()?.remove();
        }
        return this._linesCollection.flush(), !0;
    }
    onLinesChanged(t) {
        return this._linesCollection.onLinesChanged(t.fromLineNumber, t.count);
    }
    onLinesDeleted(t) {
        const e = this._linesCollection.onLinesDeleted(t.fromLineNumber, t.toLineNumber);
        if (e) for(let n = 0, i = e.length; n < i; n++)e[n].getDomNode()?.remove();
        return !0;
    }
    onLinesInserted(t) {
        const e = this._linesCollection.onLinesInserted(t.fromLineNumber, t.toLineNumber);
        if (e) for(let n = 0, i = e.length; n < i; n++)e[n].getDomNode()?.remove();
        return !0;
    }
    onScrollChanged(t) {
        return t.scrollTopChanged;
    }
    onTokensChanged(t) {
        return this._linesCollection.onTokensChanged(t.ranges);
    }
    onZonesChanged(t) {
        return !0;
    }
    getStartLineNumber() {
        return this._linesCollection.getStartLineNumber();
    }
    getEndLineNumber() {
        return this._linesCollection.getEndLineNumber();
    }
    getVisibleLine(t) {
        return this._linesCollection.getLine(t);
    }
    renderLines(t) {
        const e = this._linesCollection._get(), n = new Ljd(this.domNode.domNode, this._lineFactory, t), i = {
            rendLineNumberStart: e.rendLineNumberStart,
            lines: e.lines,
            linesLength: e.lines.length
        }, r = n.render(i, t.startLineNumber, t.endLineNumber, t.relativeVerticalOffset);
        this._linesCollection._set(r.rendLineNumberStart, r.lines);
    }
}, pCr = class Xjn {
    constructor(e, n, i){
        this._domNode = e, this._lineFactory = n, this._viewportData = i;
    }
    render(e, n, i, r) {
        const s = {
            rendLineNumberStart: e.rendLineNumberStart,
            lines: e.lines.slice(0),
            linesLength: e.linesLength
        };
        if (s.rendLineNumberStart + s.linesLength - 1 < n || i < s.rendLineNumberStart) {
            s.rendLineNumberStart = n, s.linesLength = i - n + 1, s.lines = [];
            for(let o = n; o <= i; o++)s.lines[o - n] = this._lineFactory.createLine();
            return this._finishRendering(s, !0, r), s;
        }
        if (this._renderUntouchedLines(s, Math.max(n - s.rendLineNumberStart, 0), Math.min(i - s.rendLineNumberStart, s.linesLength - 1), r, n), s.rendLineNumberStart > n) {
            const o = n, a = Math.min(i, s.rendLineNumberStart - 1);
            o <= a && (this._insertLinesBefore(s, o, a, r, n), s.linesLength += a - o + 1);
        } else if (s.rendLineNumberStart < n) {
            const o = Math.min(s.linesLength, n - s.rendLineNumberStart);
            o > 0 && (this._removeLinesBefore(s, o), s.linesLength -= o);
        }
        if (s.rendLineNumberStart = n, s.rendLineNumberStart + s.linesLength - 1 < i) {
            const o = s.rendLineNumberStart + s.linesLength, a = i;
            o <= a && (this._insertLinesAfter(s, o, a, r, n), s.linesLength += a - o + 1);
        } else if (s.rendLineNumberStart + s.linesLength - 1 > i) {
            const o = Math.max(0, i - s.rendLineNumberStart + 1), l = s.linesLength - 1 - o + 1;
            l > 0 && (this._removeLinesAfter(s, l), s.linesLength -= l);
        }
        return this._finishRendering(s, !1, r), s;
    }
    _renderUntouchedLines(e, n, i, r, s) {
        const o = e.rendLineNumberStart, a = e.lines;
        for(let l = n; l <= i; l++){
            const c = o + l;
            a[l].layoutLine(c, r[c - s], this._viewportData.lineHeight);
        }
    }
    _insertLinesBefore(e, n, i, r, s) {
        const o = [];
        let a = 0;
        for(let l = n; l <= i; l++)o[a++] = this._lineFactory.createLine();
        e.lines = o.concat(e.lines);
    }
    _removeLinesBefore(e, n) {
        for(let i = 0; i < n; i++)e.lines[i].getDomNode()?.remove();
        e.lines.splice(0, n);
    }
    _insertLinesAfter(e, n, i, r, s) {
        const o = [];
        let a = 0;
        for(let l = n; l <= i; l++)o[a++] = this._lineFactory.createLine();
        e.lines = e.lines.concat(o);
    }
    _removeLinesAfter(e, n) {
        const i = e.linesLength - n;
        for(let r = 0; r < n; r++)e.lines[i + r].getDomNode()?.remove();
        e.lines.splice(i, n);
    }
    _finishRenderingNewLines(e, n, i, r) {
        Xjn._ttPolicy && (i = Xjn._ttPolicy.createHTML(i));
        const s = this._domNode.lastChild;
        n || !s ? this._domNode.innerHTML = i : s.insertAdjacentHTML("afterend", i);
        let o = this._domNode.lastChild;
        for(let a = e.linesLength - 1; a >= 0; a--){
            const l = e.lines[a];
            r[a] && (l.setDomNode(o), o = o.previousSibling);
        }
    }
    _finishRenderingInvalidLines(e, n, i) {
        const r = document.createElement("div");
        Xjn._ttPolicy && (n = Xjn._ttPolicy.createHTML(n)), r.innerHTML = n;
        for(let s = 0; s < e.linesLength; s++){
            const o = e.lines[s];
            if (i[s]) {
                const a = r.firstChild, l = o.getDomNode();
                l.parentNode.replaceChild(a, l), o.setDomNode(a);
            }
        }
    }
    _finishRendering(e, n, i) {
        const r = Xjn._sb, s = e.linesLength, o = e.lines, a = e.rendLineNumberStart, l = [];
        {
            r.reset();
            let c = !1;
            for(let u = 0; u < s; u++){
                const d = o[u];
                l[u] = !1, !(d.getDomNode() || !d.renderLine(u + a, i[u], this._viewportData.lineHeight, this._viewportData, r)) && (l[u] = !0, c = !0);
            }
            c && this._finishRenderingNewLines(e, n, r.build(), l);
        }
        {
            r.reset();
            let c = !1;
            const u = [];
            for(let d = 0; d < s; d++){
                const h = o[d];
                u[d] = !1, !(l[d] || !h.renderLine(d + a, i[d], this._viewportData.lineHeight, this._viewportData, r)) && (u[d] = !0, c = !0);
            }
            c && this._finishRenderingInvalidLines(e, r.build(), u);
        }
    }
}, pCr._ttPolicy = Xtt("editorViewLayer", {
    createHTML: (t)=>t
}), pCr._sb = new Z$e(1e5), Ljd = pCr;

}
