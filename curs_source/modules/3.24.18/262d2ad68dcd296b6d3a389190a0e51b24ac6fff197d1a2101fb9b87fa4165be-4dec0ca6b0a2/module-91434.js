"use strict";
require.d(exports, {
    Jt: ()=>o,
    W2: ()=>n
});
class n extends Error {
    constructor(e){
        super(e), this.name = "WriteIterableClosedError";
    }
}
function o() {
    const e = [], t = [];
    let r, o = !1, s = ()=>{}, i = ()=>{};
    const a = ()=>{
        const e = new Promise((e, t)=>{
            s = e, i = t;
        });
        return e.catch(()=>{}), e;
    };
    let l = a();
    function c(t, r) {
        for(; e.length > 0;){
            const n = e.shift();
            r ? n.reject(r) : n.resolve(t);
        }
    }
    function u(e) {
        t.length = 0, i(e), l = Promise.reject(e), l.catch(()=>{});
    }
    return {
        async write (s) {
            if (o) throw r ?? new n("WritableIterable is closed");
            const i = e.shift();
            if (i) {
                if (i.resolve({
                    done: !1,
                    value: s
                }), e.length > 0) return;
            } else t.push(s);
            const a = t.length + 1;
            for(let e = 0; e < a; e++)await l;
        },
        throw (e) {
            o || (o = !0, r = e, u(e), c({
                done: !0,
                value: void 0
            }, e));
        },
        close () {
            o || (o = !0, t.length = 0, s(), l = Promise.reject(new n("WritableIterable is closed")), l.catch(()=>{}), c({
                done: !0,
                value: void 0
            }));
        },
        [Symbol.asyncIterator]: ()=>({
                next () {
                    s(), l = a();
                    const n = t.shift();
                    return void 0 !== n ? Promise.resolve({
                        done: !1,
                        value: n
                    }) : o ? r ? Promise.reject(r) : Promise.resolve({
                        done: !0,
                        value: void 0
                    }) : new Promise((t, r)=>{
                        e.push({
                            resolve: t,
                            reject: r
                        });
                    });
                },
                throw: (e)=>(o = !0, r = e, t.length = 0, u(e), c({
                        done: !0,
                        value: void 0
                    }, e), Promise.resolve({
                        done: !0,
                        value: void 0
                    })),
                return: ()=>(o = !0, t.length = 0, s(), l = Promise.reject(new Error("Iterator was closed")), l.catch(()=>{}), c({
                        done: !0,
                        value: void 0
                    }), Promise.resolve({
                        done: !0,
                        value: void 0
                    }))
            })
    };
}
