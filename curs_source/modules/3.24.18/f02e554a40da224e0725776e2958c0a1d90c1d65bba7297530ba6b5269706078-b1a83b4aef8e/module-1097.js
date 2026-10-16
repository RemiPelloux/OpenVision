"use strict";
require.d(exports, {
    S: ()=>n,
    u: ()=>s
});
require("./module-6038.js");
function n(t, e) {
    return e instanceof t ? e : new t(e);
}
function s(t, e) {
    function r(e) {
        return !0 === e.done ? e : {
            done: e.done,
            value: n(t, e.value)
        };
    }
    return {
        [Symbol.asyncIterator] () {
            const t = e[Symbol.asyncIterator](), n = {
                next: ()=>t.next().then(r)
            };
            return void 0 !== t.throw && (n.throw = (e)=>t.throw(e).then(r)), void 0 !== t.return && (n.return = (e)=>t.return(e).then(r)), n;
        }
    };
}
