import { S3c, Sfg, n6 } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Pze, XBe, k3c;
export { Pze, XBe, k3c };
var __wakaru_w3c_initialized = false;
export function w3c() {
if (__wakaru_w3c_initialized) return;
__wakaru_w3c_initialized = true;
"use strict";
x(), Pze = class lkm {
    constructor(t){
        this.height = t, this._children = [], this._length = 0;
    }
    get children() {
        return this._children;
    }
    get length() {
        return this._length;
    }
    static create(t, n) {
        const i = new lkm(t.height + 1);
        return i.appendChild(t), i.appendChild(n), i;
    }
    canAppendChild() {
        return this._children.length < 3;
    }
    appendChild(t) {
        if (!this.canAppendChild()) throw new Error("Cannot insert more than 3 children in a ListNode");
        this._children.push(t), this._length += t.length, this._updateParentLength(t.length), n6(t) || (t.parent = this);
    }
    _updateParentLength(t) {
        let n = this.parent;
        for(; n;)n._length += t, n = n.parent;
    }
    unappendChild() {
        const t = this._children.pop();
        return this._length -= t.length, this._updateParentLength(-t.length), t;
    }
    prependChild(t) {
        if (this._children.length >= 3) throw new Error("Cannot prepend more than 3 children in a ListNode");
        this._children.unshift(t), this._length += t.length, this._updateParentLength(t.length), n6(t) || (t.parent = this);
    }
    unprependChild() {
        const t = this._children.shift();
        return this._length -= t.length, this._updateParentLength(-t.length), t;
    }
    lastChild() {
        return this._children[this._children.length - 1];
    }
    dispose() {
        this._children.splice(0, this._children.length);
    }
}, XBe = ((e)=>(e[e.None = 0] = "None", e[e.ViewportGuess = 1] = "ViewportGuess", e[e.EditGuess = 2] = "EditGuess", e[e.Accurate = 3] = "Accurate", e))(XBe || {}), k3c = class ukm {
    constructor(t){
        this._textModel = t, this._root = this.createEmptyRoot();
    }
    get root() {
        return this._root;
    }
    createEmptyRoot() {
        return {
            length: this._textModel.getValueLength(),
            token: 0,
            height: 0,
            tokenQuality: 0
        };
    }
    buildStore(t, n) {
        this._root = this.createFromUpdates(t, n);
    }
    createFromUpdates(t, n) {
        if (t.length === 0) return this.createEmptyRoot();
        let i = {
            length: t[0].length,
            token: t[0].token,
            height: 0,
            tokenQuality: n
        };
        for(let r = 1; r < t.length; r++)i = S3c(i, {
            length: t[r].length,
            token: t[r].token,
            height: 0,
            tokenQuality: n
        });
        return i;
    }
    update(t, n, i) {
        n.length !== 0 && this.replace(t, n[0].startOffsetInclusive, n, i);
    }
    delete(t, n) {
        this.replace(t, n, [], 2);
    }
    replace(t, n, i, r) {
        const s = n + t, o = [], a = [], c = [
            {
                node: this._root,
                offset: 0
            }
        ];
        for(; c.length > 0;){
            const h = c.pop(), p = h.offset;
            if (p < n && p + h.node.length <= n) {
                n6(h.node) || (h.node.parent = void 0), o.push(h.node);
                continue;
            } else n6(h.node) && p < n && o.push({
                length: n - p,
                token: h.node.token,
                height: 0,
                tokenQuality: h.node.tokenQuality
            });
            if (!(n <= p && p + h.node.length <= s)) {
                if (p >= s) {
                    n6(h.node) || (h.node.parent = void 0), a.push(h.node);
                    continue;
                } else if (n6(h.node) && p + h.node.length > s) {
                    a.push({
                        length: p + h.node.length - s,
                        token: h.node.token,
                        height: 0,
                        tokenQuality: h.node.tokenQuality
                    });
                    continue;
                }
                if (!n6(h.node)) {
                    let g = p + h.node.length;
                    for(let f = h.node.children.length - 1; f >= 0; f--)g -= h.node.children[f].length, c.push({
                        node: h.node.children[f],
                        offset: g
                    });
                }
            }
        }
        let l;
        i.length > 0 ? l = o.concat(this.createFromUpdates(i, r), a) : l = o.concat(a);
        let u = l[0];
        for(let h = 1; h < l.length; h++)u = Sfg(u, l[h]);
        this._root = u ?? this.createEmptyRoot();
    }
    traverseInOrderInRange(t, n, i) {
        const r = [
            {
                node: this._root,
                offset: 0
            }
        ];
        for(; r.length > 0;){
            const { node: s, offset: o } = r.pop();
            if (!(o + s.length <= t || o >= n)) {
                if (i(s, o)) return;
                if (!n6(s)) {
                    let c = o + s.length;
                    for(let l = s.children.length - 1; l >= 0; l--)c -= s.children[l].length, r.push({
                        node: s.children[l],
                        offset: c
                    });
                }
            }
        }
    }
    getTokenAt(t) {
        let n;
        return this.traverseInOrderInRange(t, this._root.length, (i, r)=>n6(i) ? (n = {
                token: i.token,
                startOffsetInclusive: r,
                length: i.length
            }, !0) : !1), n;
    }
    getTokensInRange(t, n) {
        const i = [];
        return this.traverseInOrderInRange(t, n, (r, s)=>{
            if (n6(r)) {
                let o = r.length, a = s;
                s < t && s + r.length > n ? (a = t, o = n - t) : s < t ? (o -= t - s, a = t) : s + r.length > n && (o -= s + r.length - n), i.push({
                    token: r.token,
                    startOffsetInclusive: a,
                    length: o
                });
            }
            return !1;
        }), i;
    }
    markForRefresh(t, n) {
        this.traverseInOrderInRange(t, n, (i)=>(n6(i) && (i.tokenQuality = 0), !1));
    }
    rangeHasTokens(t, n, i) {
        let r = !0;
        return this.traverseInOrderInRange(t, n, (s)=>(n6(s) && s.tokenQuality < i && (r = !1), !1)), r;
    }
    rangeNeedsRefresh(t, n) {
        let i = !1;
        return this.traverseInOrderInRange(t, n, (r)=>(n6(r) && r.tokenQuality !== 3 && (i = !0), !1)), i;
    }
    getNeedsRefresh() {
        const t = [];
        return this.traverseInOrderInRange(0, this._textModel.getValueLength(), (n, i)=>(n6(n) && n.tokenQuality !== 3 && (t.length > 0 && t[t.length - 1].endOffset === i ? t[t.length - 1].endOffset += n.length : t.push({
                startOffset: i,
                endOffset: i + n.length
            })), !1)), t;
    }
    deepCopy() {
        const t = new ukm(this._textModel);
        return t._root = this._copyNodeIterative(this._root), t;
    }
    _copyNodeIterative(t) {
        const n = n6(t) ? {
            length: t.length,
            token: t.token,
            tokenQuality: t.tokenQuality,
            height: t.height
        } : new Pze(t.height), i = [
            [
                t,
                n
            ]
        ];
        for(; i.length > 0;){
            const [r, s] = i.pop();
            if (!n6(r)) for (const o of r.children){
                const a = n6(o) ? {
                    length: o.length,
                    token: o.token,
                    tokenQuality: o.tokenQuality,
                    height: o.height
                } : new Pze(o.height);
                s.appendChild(a), i.push([
                    o,
                    a
                ]);
            }
        }
        return n;
    }
    printTree(t = this._root) {
        const n = [], i = [
            [
                t,
                0
            ]
        ];
        for(; i.length > 0;){
            const [r, s] = i.pop(), o = "  ".repeat(s);
            if (n6(r)) n.push(`${o}Leaf(length: ${r.length}, token: ${r.token}, refresh: ${r.tokenQuality})
`);
            else {
                n.push(`${o}List(length: ${r.length})
`);
                for(let a = r.children.length - 1; a >= 0; a--)i.push([
                    r.children[a],
                    s + 1
                ]);
            }
        }
        return n.join("");
    }
    dispose() {
        const t = [
            [
                this._root,
                !1
            ]
        ];
        for(; t.length > 0;){
            const [n, i] = t.pop();
            if (!n6(n)) if (i) n.dispose(), n.parent = void 0;
            else {
                t.push([
                    n,
                    !0
                ]);
                for(let r = n.children.length - 1; r >= 0; r--)t.push([
                    n.children[r],
                    !1
                ]);
            }
        }
        this._root = void 0;
    }
};

}
