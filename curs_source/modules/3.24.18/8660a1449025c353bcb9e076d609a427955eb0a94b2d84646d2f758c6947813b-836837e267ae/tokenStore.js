import { E } from "./tslib.es6.js";
import { TPy, Y8d, _W } from "./ze.js";
var dyt, Gtt, X8d;
export { Gtt, X8d, dyt };
var __wakaru_Z8d_initialized = false;
export function Z8d() {
if (__wakaru_Z8d_initialized) return;
__wakaru_Z8d_initialized = true;
"use strict";
E(), dyt = class NAb {
    constructor(e){
        this.height = e, this._children = [], this._length = 0;
    }
    get children() {
        return this._children;
    }
    get length() {
        return this._length;
    }
    static create(e, n) {
        const i = new NAb(e.height + 1);
        return i.appendChild(e), i.appendChild(n), i;
    }
    canAppendChild() {
        return this._children.length < 3;
    }
    appendChild(e) {
        if (!this.canAppendChild()) throw new Error("Cannot insert more than 3 children in a ListNode");
        this._children.push(e), this._length += e.length, this._updateParentLength(e.length), _W(e) || (e.parent = this);
    }
    _updateParentLength(e) {
        let n = this.parent;
        for(; n;)n._length += e, n = n.parent;
    }
    unappendChild() {
        const e = this._children.pop();
        return this._length -= e.length, this._updateParentLength(-e.length), e;
    }
    prependChild(e) {
        if (this._children.length >= 3) throw new Error("Cannot prepend more than 3 children in a ListNode");
        this._children.unshift(e), this._length += e.length, this._updateParentLength(e.length), _W(e) || (e.parent = this);
    }
    unprependChild() {
        const e = this._children.shift();
        return this._length -= e.length, this._updateParentLength(-e.length), e;
    }
    lastChild() {
        return this._children[this._children.length - 1];
    }
    dispose() {
        this._children.splice(0, this._children.length);
    }
}, Gtt = ((t)=>(t[t.None = 0] = "None", t[t.ViewportGuess = 1] = "ViewportGuess", t[t.EditGuess = 2] = "EditGuess", t[t.Accurate = 3] = "Accurate", t))(Gtt || {}), X8d = class LAb {
    constructor(e){
        this._textModel = e, this._root = this.createEmptyRoot();
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
    buildStore(e, n) {
        this._root = this.createFromUpdates(e, n);
    }
    createFromUpdates(e, n) {
        if (e.length === 0) return this.createEmptyRoot();
        let i = {
            length: e[0].length,
            token: e[0].token,
            height: 0,
            tokenQuality: n
        };
        for(let r = 1; r < e.length; r++)i = Y8d(i, {
            length: e[r].length,
            token: e[r].token,
            height: 0,
            tokenQuality: n
        });
        return i;
    }
    update(e, n, i) {
        n.length !== 0 && this.replace(e, n[0].startOffsetInclusive, n, i);
    }
    delete(e, n) {
        this.replace(e, n, [], 2);
    }
    replace(e, n, i, r) {
        const s = n + e, o = [], a = [], l = [
            {
                node: this._root,
                offset: 0
            }
        ];
        for(; l.length > 0;){
            const d = l.pop(), h = d.offset;
            if (h < n && h + d.node.length <= n) {
                _W(d.node) || (d.node.parent = void 0), o.push(d.node);
                continue;
            } else _W(d.node) && h < n && o.push({
                length: n - h,
                token: d.node.token,
                height: 0,
                tokenQuality: d.node.tokenQuality
            });
            if (!(n <= h && h + d.node.length <= s)) {
                if (h >= s) {
                    _W(d.node) || (d.node.parent = void 0), a.push(d.node);
                    continue;
                } else if (_W(d.node) && h + d.node.length > s) {
                    a.push({
                        length: h + d.node.length - s,
                        token: d.node.token,
                        height: 0,
                        tokenQuality: d.node.tokenQuality
                    });
                    continue;
                }
                if (!_W(d.node)) {
                    let p = h + d.node.length;
                    for(let g = d.node.children.length - 1; g >= 0; g--)p -= d.node.children[g].length, l.push({
                        node: d.node.children[g],
                        offset: p
                    });
                }
            }
        }
        let c;
        i.length > 0 ? c = o.concat(this.createFromUpdates(i, r), a) : c = o.concat(a);
        let u = c[0];
        for(let d = 1; d < c.length; d++)u = TPy(u, c[d]);
        this._root = u ?? this.createEmptyRoot();
    }
    traverseInOrderInRange(e, n, i) {
        const r = [
            {
                node: this._root,
                offset: 0
            }
        ];
        for(; r.length > 0;){
            const { node: s, offset: o } = r.pop();
            if (!(o + s.length <= e || o >= n)) {
                if (i(s, o)) return;
                if (!_W(s)) {
                    let l = o + s.length;
                    for(let c = s.children.length - 1; c >= 0; c--)l -= s.children[c].length, r.push({
                        node: s.children[c],
                        offset: l
                    });
                }
            }
        }
    }
    getTokenAt(e) {
        let n;
        return this.traverseInOrderInRange(e, this._root.length, (i, r)=>_W(i) ? (n = {
                token: i.token,
                startOffsetInclusive: r,
                length: i.length
            }, !0) : !1), n;
    }
    getTokensInRange(e, n) {
        const i = [];
        return this.traverseInOrderInRange(e, n, (r, s)=>{
            if (_W(r)) {
                let o = r.length, a = s;
                s < e && s + r.length > n ? (a = e, o = n - e) : s < e ? (o -= e - s, a = e) : s + r.length > n && (o -= s + r.length - n), i.push({
                    token: r.token,
                    startOffsetInclusive: a,
                    length: o
                });
            }
            return !1;
        }), i;
    }
    markForRefresh(e, n) {
        this.traverseInOrderInRange(e, n, (i)=>(_W(i) && (i.tokenQuality = 0), !1));
    }
    rangeHasTokens(e, n, i) {
        let r = !0;
        return this.traverseInOrderInRange(e, n, (s)=>(_W(s) && s.tokenQuality < i && (r = !1), !1)), r;
    }
    rangeNeedsRefresh(e, n) {
        let i = !1;
        return this.traverseInOrderInRange(e, n, (r)=>(_W(r) && r.tokenQuality !== 3 && (i = !0), !1)), i;
    }
    getNeedsRefresh() {
        const e = [];
        return this.traverseInOrderInRange(0, this._textModel.getValueLength(), (n, i)=>(_W(n) && n.tokenQuality !== 3 && (e.length > 0 && e[e.length - 1].endOffset === i ? e[e.length - 1].endOffset += n.length : e.push({
                startOffset: i,
                endOffset: i + n.length
            })), !1)), e;
    }
    deepCopy() {
        const e = new LAb(this._textModel);
        return e._root = this._copyNodeIterative(this._root), e;
    }
    _copyNodeIterative(e) {
        const n = _W(e) ? {
            length: e.length,
            token: e.token,
            tokenQuality: e.tokenQuality,
            height: e.height
        } : new dyt(e.height), i = [
            [
                e,
                n
            ]
        ];
        for(; i.length > 0;){
            const [r, s] = i.pop();
            if (!_W(r)) for (const o of r.children){
                const a = _W(o) ? {
                    length: o.length,
                    token: o.token,
                    tokenQuality: o.tokenQuality,
                    height: o.height
                } : new dyt(o.height);
                s.appendChild(a), i.push([
                    o,
                    a
                ]);
            }
        }
        return n;
    }
    printTree(e = this._root) {
        const n = [], i = [
            [
                e,
                0
            ]
        ];
        for(; i.length > 0;){
            const [r, s] = i.pop(), o = "  ".repeat(s);
            if (_W(r)) n.push(`${o}Leaf(length: ${r.length}, token: ${r.token}, refresh: ${r.tokenQuality})
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
        const e = [
            [
                this._root,
                !1
            ]
        ];
        for(; e.length > 0;){
            const [n, i] = e.pop();
            if (!_W(n)) if (i) n.dispose(), n.parent = void 0;
            else {
                e.push([
                    n,
                    !0
                ]);
                for(let r = n.children.length - 1; r >= 0; r--)e.push([
                    n.children[r],
                    !1
                ]);
            }
        }
        this._root = void 0;
    }
};

}
