"use strict";
const { wellknownHeaderNames: r, headerNameLowerCasedRecord: s } = require("./module-71648.js");
class o {
    value = null;
    left = null;
    middle = null;
    right = null;
    code;
    constructor(A, e, t){
        if (void 0 === t || t >= A.length) throw new TypeError("Unreachable");
        if ((this.code = A.charCodeAt(t)) > 127) throw new TypeError("key must be ascii string");
        A.length !== ++t ? this.middle = new o(A, e, t) : this.value = e;
    }
    add(A, e) {
        const t = A.length;
        if (0 === t) throw new TypeError("Unreachable");
        let r = 0, s = this;
        for(;;){
            const n = A.charCodeAt(r);
            if (n > 127) throw new TypeError("key must be ascii string");
            if (s.code === n) {
                if (t === ++r) {
                    s.value = e;
                    break;
                }
                if (null === s.middle) {
                    s.middle = new o(A, e, r);
                    break;
                }
                s = s.middle;
            } else if (s.code < n) {
                if (null === s.left) {
                    s.left = new o(A, e, r);
                    break;
                }
                s = s.left;
            } else {
                if (null === s.right) {
                    s.right = new o(A, e, r);
                    break;
                }
                s = s.right;
            }
        }
    }
    search(A) {
        const e = A.length;
        let t = 0, r = this;
        for(; null !== r && t < e;){
            let s = A[t];
            for(s <= 90 && s >= 65 && (s |= 32); null !== r;){
                if (s === r.code) {
                    if (e === ++t) return r;
                    r = r.middle;
                    break;
                }
                r = r.code < s ? r.left : r.right;
            }
        }
        return null;
    }
}
class n {
    node = null;
    insert(A, e) {
        null === this.node ? this.node = new o(A, e, 0) : this.node.add(A, e);
    }
    lookup(A) {
        return this.node?.search(A)?.value ?? null;
    }
}
const i = new n;
for(let A = 0; A < r.length; ++A){
    const e = s[r[A]];
    i.insert(e, e);
}
module.exports = {
    TernarySearchTree: n,
    tree: i
};
