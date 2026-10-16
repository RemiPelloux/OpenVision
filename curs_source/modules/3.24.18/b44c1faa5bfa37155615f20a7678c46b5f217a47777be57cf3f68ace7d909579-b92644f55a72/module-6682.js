"use strict";
require.d(exports, {
    S: ()=>n,
    u: ()=>s
});
require("./module-36038.js");
function n(e, t) {
    return t instanceof e ? t : new e(t);
}
function s(e, t) {
    function r(t) {
        return !0 === t.done ? t : {
            done: t.done,
            value: n(e, t.value)
        };
    }
    return {
        [Symbol.asyncIterator] () {
            const e = t[Symbol.asyncIterator](), n = {
                next: ()=>e.next().then(r)
            };
            return void 0 !== e.throw && (n.throw = (t)=>e.throw(t).then(r)), void 0 !== e.return && (n.return = (t)=>e.return(t).then(r)), n;
        }
    };
}
