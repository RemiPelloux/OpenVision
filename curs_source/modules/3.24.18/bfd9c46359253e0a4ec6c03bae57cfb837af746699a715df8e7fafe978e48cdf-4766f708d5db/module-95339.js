"use strict";
require.d(exports, {
    Fh: ()=>a,
    ix: ()=>i
});
const n = /https?:\/\/\S+/gi, s = /[)"'<>,.;:\]}]$/;
function o(e) {
    const { url: t, wrappers: r } = function(e) {
        let t = e.length;
        for(; t > 0 && s.test(e.slice(t - 1, t));)t -= 1;
        return {
            url: e.slice(0, t),
            wrappers: e.slice(t)
        };
    }(e), n = t.search(/[?#]/), o = -1 === n ? t : t.slice(0, n), i = o.indexOf("//") + 2, a = o.slice(i).search(/[/?#]/), c = -1 === a ? o.length : i + a, l = o.lastIndexOf("@", c - 1);
    return l < i ? o + r : o.slice(0, i) + o.slice(l + 1) + r;
}
function i(e) {
    return e.replace(n, o);
}
function a(e) {
    return `git ${e.map(i).join(" ")}`;
}
