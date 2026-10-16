"use strict";
function n(e, t, r) {
    const n = e.get(t);
    e.set(t, r), n?.();
}
function s(e, t) {
    const r = e.get(t);
    return void 0 !== r && e.delete(t), r;
}
function o(e, t, r) {
    let n = e.get(t);
    void 0 === n && (n = {
        value: r(),
        refs: 0
    }, e.set(t, n)), n.refs += 1;
    const s = n;
    let o = !1;
    return {
        get value () {
            return s.value;
        },
        release () {
            o || (o = !0, e.get(t) === s && (s.refs -= 1, s.refs <= 0 && (e.delete(t), s.value.dispose())));
        }
    };
}
require.d(exports, {
    B4: ()=>o,
    Dp: ()=>n,
    Qr: ()=>s
});
