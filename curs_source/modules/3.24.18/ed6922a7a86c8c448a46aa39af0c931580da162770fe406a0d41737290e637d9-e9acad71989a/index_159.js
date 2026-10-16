import { jKe } from "./index_16.js";
import { yXc, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
var iql;
export { iql };
var __wakaru_nDf_initialized = false;
export function nDf() {
if (__wakaru_nDf_initialized) return;
__wakaru_nDf_initialized = true;
x(), zS(), jKe(), iql = class {
    constructor(e, t){
        var n;
        this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (n = t.width) !== null && n !== void 0 ? n : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = [
            "dragover",
            "dragend",
            "drop",
            "dragleave"
        ].map((i)=>{
            let r = (s)=>{
                this[i](s);
            };
            return e.dom.addEventListener(i, r), {
                name: i,
                handler: r
            };
        });
    }
    destroy() {
        this.handlers.forEach(({ name: e, handler: t })=>this.editorView.dom.removeEventListener(e, t));
    }
    update(e, t) {
        this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
    }
    setCursor(e) {
        e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
    }
    updateOverlay() {
        let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, n, i = this.editorView.dom, r = i.getBoundingClientRect(), s = r.width / i.offsetWidth, o = r.height / i.offsetHeight;
        if (t) {
            let u = e.nodeBefore, h = e.nodeAfter;
            if (u || h) {
                let p = this.editorView.nodeDOM(this.cursorPos - (u ? u.nodeSize : 0));
                if (p) {
                    let g = p.getBoundingClientRect(), f = u ? g.bottom : g.top;
                    u && h && (f = (f + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
                    let v = this.width / 2 * o;
                    n = {
                        left: g.left,
                        right: g.right,
                        top: f - v,
                        bottom: f + v
                    };
                }
            }
        }
        if (!n) {
            let u = this.editorView.coordsAtPos(this.cursorPos), h = this.width / 2 * s;
            n = {
                left: u.left - h,
                right: u.left + h,
                top: u.top,
                bottom: u.bottom
            };
        }
        let a = this.editorView.dom.offsetParent;
        this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
        let c, l;
        if (!a || a == document.body && getComputedStyle(a).position == "static") c = -pageXOffset, l = -pageYOffset;
        else {
            let u = a.getBoundingClientRect(), h = u.width / a.offsetWidth, p = u.height / a.offsetHeight;
            c = u.left - a.scrollLeft * h, l = u.top - a.scrollTop * p;
        }
        this.element.style.left = (n.left - c) / s + "px", this.element.style.top = (n.top - l) / o + "px", this.element.style.width = (n.right - n.left) / s + "px", this.element.style.height = (n.bottom - n.top) / o + "px";
    }
    scheduleRemoval(e) {
        clearTimeout(this.timeout), this.timeout = setTimeout(()=>this.setCursor(null), e);
    }
    dragover(e) {
        if (!this.editorView.editable) return;
        let t = this.editorView.posAtCoords({
            left: e.clientX,
            top: e.clientY
        }), n = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = n && n.type.spec.disableDropCursor, r = typeof i == "function" ? i(this.editorView, t, e) : i;
        if (t && !r) {
            let s = t.pos;
            if (this.editorView.dragging && this.editorView.dragging.slice) {
                let o = yXc(this.editorView.state.doc, s, this.editorView.dragging.slice);
                o != null && (s = o);
            }
            this.setCursor(s), this.scheduleRemoval(5e3);
        }
    }
    dragend() {
        this.scheduleRemoval(20);
    }
    drop() {
        this.scheduleRemoval(20);
    }
    dragleave(e) {
        this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
    }
};

}
