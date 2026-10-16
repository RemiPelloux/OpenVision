import { Aw, VQd } from "./LYd.js";
import { gSt } from "./index_21.js";
import { E } from "./tslib.es6.js";
var IJh;
export { IJh };
var __wakaru_f9S_initialized = false;
export function f9S() {
if (__wakaru_f9S_initialized) return;
__wakaru_f9S_initialized = true;
E(), Aw(), gSt(), IJh = class {
    constructor(t, e){
        var n;
        this.editorView = t, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (n = e.width) !== null && n !== void 0 ? n : 1, this.color = e.color === !1 ? void 0 : e.color || "black", this.class = e.class, this.handlers = [
            "dragover",
            "dragend",
            "drop",
            "dragleave"
        ].map((i)=>{
            let r = (s)=>{
                this[i](s);
            };
            return t.dom.addEventListener(i, r), {
                name: i,
                handler: r
            };
        });
    }
    destroy() {
        this.handlers.forEach(({ name: t, handler: e })=>this.editorView.dom.removeEventListener(t, e));
    }
    update(t, e) {
        this.cursorPos != null && e.doc != t.state.doc && (this.cursorPos > t.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
    }
    setCursor(t) {
        t != this.cursorPos && (this.cursorPos = t, t == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
    }
    updateOverlay() {
        let t = this.editorView.state.doc.resolve(this.cursorPos), e = !t.parent.inlineContent, n, i = this.editorView.dom, r = i.getBoundingClientRect(), s = r.width / i.offsetWidth, o = r.height / i.offsetHeight;
        if (e) {
            let u = t.nodeBefore, d = t.nodeAfter;
            if (u || d) {
                let h = this.editorView.nodeDOM(this.cursorPos - (u ? u.nodeSize : 0));
                if (h) {
                    let p = h.getBoundingClientRect(), g = u ? p.bottom : p.top;
                    u && d && (g = (g + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
                    let f = this.width / 2 * o;
                    n = {
                        left: p.left,
                        right: p.right,
                        top: g - f,
                        bottom: g + f
                    };
                }
            }
        }
        if (!n) {
            let u = this.editorView.coordsAtPos(this.cursorPos), d = this.width / 2 * s;
            n = {
                left: u.left - d,
                right: u.left + d,
                top: u.top,
                bottom: u.bottom
            };
        }
        let a = this.editorView.dom.offsetParent;
        this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", e), this.element.classList.toggle("prosemirror-dropcursor-inline", !e);
        let l, c;
        if (!a || a == document.body && getComputedStyle(a).position == "static") l = -pageXOffset, c = -pageYOffset;
        else {
            let u = a.getBoundingClientRect(), d = u.width / a.offsetWidth, h = u.height / a.offsetHeight;
            l = u.left - a.scrollLeft * d, c = u.top - a.scrollTop * h;
        }
        this.element.style.left = (n.left - l) / s + "px", this.element.style.top = (n.top - c) / o + "px", this.element.style.width = (n.right - n.left) / s + "px", this.element.style.height = (n.bottom - n.top) / o + "px";
    }
    scheduleRemoval(t) {
        clearTimeout(this.timeout), this.timeout = setTimeout(()=>this.setCursor(null), t);
    }
    dragover(t) {
        if (!this.editorView.editable) return;
        let e = this.editorView.posAtCoords({
            left: t.clientX,
            top: t.clientY
        }), n = e && e.inside >= 0 && this.editorView.state.doc.nodeAt(e.inside), i = n && n.type.spec.disableDropCursor, r = typeof i == "function" ? i(this.editorView, e, t) : i;
        if (e && !r) {
            let s = e.pos;
            if (this.editorView.dragging && this.editorView.dragging.slice) {
                let o = VQd(this.editorView.state.doc, s, this.editorView.dragging.slice);
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
    dragleave(t) {
        this.editorView.dom.contains(t.relatedTarget) || this.setCursor(null);
    }
};

}
