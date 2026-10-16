import { Zu, si } from "./HVr.js";
import { Tx } from "./fastDomNode.js";
import { Iwe, x_ } from "./qIc.js";
import { Dge, lwe } from "./stringBuilder.js";
import { Awe } from "./trustedTypes.js";
import { x } from "./tslib.es6.js";
var Mes, Pes, $_i, S9c;
export { $_i, Mes, Pes, S9c };
var __wakaru_Les_initialized = false;
export function Les() {
if (__wakaru_Les_initialized) return;
__wakaru_Les_initialized = true;
"use strict";
x(), Tx(), Awe(), si(), lwe(), Mes = class {
    constructor(e){
        this._lineFactory = e, this._set(1, []);
    }
    flush() {
        this._set(1, []);
    }
    _set(e, t) {
        this._lines = t, this._rendLineNumberStart = e;
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
    getLine(e) {
        const t = e - this._rendLineNumberStart;
        if (t < 0 || t >= this._lines.length) throw new Zu("Illegal value for lineNumber");
        return this._lines[t];
    }
    onLinesDeleted(e, t) {
        if (this.getCount() === 0) return null;
        const n = this.getStartLineNumber(), i = this.getEndLineNumber();
        if (t < n) {
            const a = t - e + 1;
            return this._rendLineNumberStart -= a, null;
        }
        if (e > i) return null;
        let r = 0, s = 0;
        for(let a = n; a <= i; a++){
            const c = a - this._rendLineNumberStart;
            e <= a && a <= t && (s === 0 ? (r = c, s = 1) : s++);
        }
        if (e < n) {
            let a = 0;
            t < n ? a = t - e + 1 : a = n - e, this._rendLineNumberStart -= a;
        }
        return this._lines.splice(r, s);
    }
    onLinesChanged(e, t) {
        const n = e + t - 1;
        if (this.getCount() === 0) return !1;
        const i = this.getStartLineNumber(), r = this.getEndLineNumber();
        let s = !1;
        for(let o = e; o <= n; o++)o >= i && o <= r && (this._lines[o - this._rendLineNumberStart].onContentChanged(), s = !0);
        return s;
    }
    onLinesInserted(e, t) {
        if (this.getCount() === 0) return null;
        const n = t - e + 1, i = this.getStartLineNumber(), r = this.getEndLineNumber();
        if (e <= i) return this._rendLineNumberStart += n, null;
        if (e > r) return null;
        if (n + e > r) return this._lines.splice(e - this._rendLineNumberStart, r - e + 1);
        const s = [];
        for(let u = 0; u < n; u++)s[u] = this._lineFactory.createLine();
        const o = e - this._rendLineNumberStart, a = this._lines.slice(0, o), c = this._lines.slice(o, this._lines.length - n), l = this._lines.slice(this._lines.length - n, this._lines.length);
        return this._lines = a.concat(s).concat(c), l;
    }
    onTokensChanged(e) {
        if (this.getCount() === 0) return !1;
        const t = this.getStartLineNumber(), n = this.getEndLineNumber();
        let i = !1;
        for(let r = 0, s = e.length; r < s; r++){
            const o = e[r];
            if (o.toLineNumber < t || o.fromLineNumber > n) continue;
            const a = Math.max(t, o.fromLineNumber), c = Math.min(n, o.toLineNumber);
            for(let l = a; l <= c; l++){
                const u = l - this._rendLineNumberStart;
                this._lines[u].onTokensChanged(), i = !0;
            }
        }
        return i;
    }
}, Pes = class {
    constructor(e){
        this._lineFactory = e, this.domNode = this._createDomNode(), this._linesCollection = new Mes(this._lineFactory);
    }
    _createDomNode() {
        const e = x_(document.createElement("div"));
        return e.setClassName("view-layer"), e.setPosition("absolute"), e.domNode.setAttribute("role", "presentation"), e.domNode.setAttribute("aria-hidden", "true"), e;
    }
    onConfigurationChanged(e) {
        return !!e.hasChanged(151);
    }
    onFlushed(e, t) {
        if (t) {
            const n = this._linesCollection.getStartLineNumber(), i = this._linesCollection.getEndLineNumber();
            for(let r = n; r <= i; r++)this._linesCollection.getLine(r).getDomNode()?.remove();
        }
        return this._linesCollection.flush(), !0;
    }
    onLinesChanged(e) {
        return this._linesCollection.onLinesChanged(e.fromLineNumber, e.count);
    }
    onLinesDeleted(e) {
        const t = this._linesCollection.onLinesDeleted(e.fromLineNumber, e.toLineNumber);
        if (t) for(let n = 0, i = t.length; n < i; n++)t[n].getDomNode()?.remove();
        return !0;
    }
    onLinesInserted(e) {
        const t = this._linesCollection.onLinesInserted(e.fromLineNumber, e.toLineNumber);
        if (t) for(let n = 0, i = t.length; n < i; n++)t[n].getDomNode()?.remove();
        return !0;
    }
    onScrollChanged(e) {
        return e.scrollTopChanged;
    }
    onTokensChanged(e) {
        return this._linesCollection.onTokensChanged(e.ranges);
    }
    onZonesChanged(e) {
        return !0;
    }
    getStartLineNumber() {
        return this._linesCollection.getStartLineNumber();
    }
    getEndLineNumber() {
        return this._linesCollection.getEndLineNumber();
    }
    getVisibleLine(e) {
        return this._linesCollection.getLine(e);
    }
    renderLines(e) {
        const t = this._linesCollection._get(), n = new S9c(this.domNode.domNode, this._lineFactory, e), i = {
            rendLineNumberStart: t.rendLineNumberStart,
            lines: t.lines,
            linesLength: t.lines.length
        }, r = n.render(i, e.startLineNumber, e.endLineNumber, e.relativeVerticalOffset);
        this._linesCollection._set(r.rendLineNumberStart, r.lines);
    }
}, $_i = class Tin {
    constructor(t, n, i){
        this._domNode = t, this._lineFactory = n, this._viewportData = i;
    }
    render(t, n, i, r) {
        const s = {
            rendLineNumberStart: t.rendLineNumberStart,
            lines: t.lines.slice(0),
            linesLength: t.linesLength
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
            const o = Math.max(0, i - s.rendLineNumberStart + 1), c = s.linesLength - 1 - o + 1;
            c > 0 && (this._removeLinesAfter(s, c), s.linesLength -= c);
        }
        return this._finishRendering(s, !1, r), s;
    }
    _renderUntouchedLines(t, n, i, r, s) {
        const o = t.rendLineNumberStart, a = t.lines;
        for(let c = n; c <= i; c++){
            const l = o + c;
            a[c].layoutLine(l, r[l - s], this._viewportData.lineHeight);
        }
    }
    _insertLinesBefore(t, n, i, r, s) {
        const o = [];
        let a = 0;
        for(let c = n; c <= i; c++)o[a++] = this._lineFactory.createLine();
        t.lines = o.concat(t.lines);
    }
    _removeLinesBefore(t, n) {
        for(let i = 0; i < n; i++)t.lines[i].getDomNode()?.remove();
        t.lines.splice(0, n);
    }
    _insertLinesAfter(t, n, i, r, s) {
        const o = [];
        let a = 0;
        for(let c = n; c <= i; c++)o[a++] = this._lineFactory.createLine();
        t.lines = t.lines.concat(o);
    }
    _removeLinesAfter(t, n) {
        const i = t.linesLength - n;
        for(let r = 0; r < n; r++)t.lines[i + r].getDomNode()?.remove();
        t.lines.splice(i, n);
    }
    _finishRenderingNewLines(t, n, i, r) {
        Tin._ttPolicy && (i = Tin._ttPolicy.createHTML(i));
        const s = this._domNode.lastChild;
        n || !s ? this._domNode.innerHTML = i : s.insertAdjacentHTML("afterend", i);
        let o = this._domNode.lastChild;
        for(let a = t.linesLength - 1; a >= 0; a--){
            const c = t.lines[a];
            r[a] && (c.setDomNode(o), o = o.previousSibling);
        }
    }
    _finishRenderingInvalidLines(t, n, i) {
        const r = document.createElement("div");
        Tin._ttPolicy && (n = Tin._ttPolicy.createHTML(n)), r.innerHTML = n;
        for(let s = 0; s < t.linesLength; s++){
            const o = t.lines[s];
            if (i[s]) {
                const a = r.firstChild, c = o.getDomNode();
                c.parentNode.replaceChild(a, c), o.setDomNode(a);
            }
        }
    }
    _finishRendering(t, n, i) {
        const r = Tin._sb, s = t.linesLength, o = t.lines, a = t.rendLineNumberStart, c = [];
        {
            r.reset();
            let l = !1;
            for(let u = 0; u < s; u++){
                const h = o[u];
                c[u] = !1, !(h.getDomNode() || !h.renderLine(u + a, i[u], this._viewportData.lineHeight, this._viewportData, r)) && (c[u] = !0, l = !0);
            }
            l && this._finishRenderingNewLines(t, n, r.build(), c);
        }
        {
            r.reset();
            let l = !1;
            const u = [];
            for(let h = 0; h < s; h++){
                const p = o[h];
                u[h] = !1, !(c[h] || !p.renderLine(h + a, i[h], this._viewportData.lineHeight, this._viewportData, r)) && (u[h] = !0, l = !0);
            }
            l && this._finishRenderingInvalidLines(t, r.build(), u);
        }
    }
}, $_i._ttPolicy = Iwe("editorViewLayer", {
    createHTML: (e)=>e
}), $_i._sb = new Dge(1e5), S9c = $_i;

}
