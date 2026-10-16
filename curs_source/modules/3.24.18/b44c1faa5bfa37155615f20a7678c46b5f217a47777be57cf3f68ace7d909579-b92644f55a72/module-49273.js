"use strict";
require.d(exports, {
    H: ()=>o,
    l: ()=>s
});
var n = require("./module-33002.js");
const s = {
    schedule (e, t) {
        const [r, s] = (0, n.q6)().withTimeoutAndCancel(e);
        let o = !1;
        return r.signal.addEventListener("abort", ()=>{
            o || t();
        }, {
            once: !0
        }), {
            dispose () {
                o = !0, s();
            }
        };
    }
};
function o(e, t, r) {
    let n, s = !1;
    const o = ()=>{
        n = e.schedule(t, ()=>{
            r().then(()=>{
                s || o();
            }, ()=>{
                s = !0;
            });
        });
    };
    return o(), {
        dispose () {
            s = !0, n?.dispose();
        }
    };
}
