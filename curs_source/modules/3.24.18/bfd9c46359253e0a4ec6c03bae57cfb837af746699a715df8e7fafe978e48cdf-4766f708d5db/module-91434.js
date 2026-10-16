"use strict";
require.d(exports, {
    Jt: ()=>s,
    W2: ()=>n
});
class n extends Error {
    constructor(e){
        super(e), this.name = "WriteIterableClosedError";
    }
}
function s() {
    const e = [], t = [];
    let r, s = !1, o = ()=>{}, i = ()=>{};
    const a = ()=>{
        const e = new Promise((e, t)=>{
            o = e, i = t;
        });
        return e.catch(()=>{}), e;
    };
    let c = a();
    function l(t, r) {
        for(; e.length > 0;){
            const n = e.shift();
            r ? n.reject(r) : n.resolve(t);
        }
    }
    function u(e) {
        t.length = 0, i(e), c = Promise.reject(e), c.catch(()=>{});
    }
    return {
        async write (o) {
            if (s) throw r ?? new n("WritableIterable is closed");
            const i = e.shift();
            if (i) {
                if (i.resolve({
                    done: !1,
                    value: o
                }), e.length > 0) return;
            } else t.push(o);
            const a = t.length + 1;
            for(let e = 0; e < a; e++)await c;
        },
        throw (e) {
            s || (s = !0, r = e, u(e), l({
                done: !0,
                value: void 0
            }, e));
        },
        close () {
            s || (s = !0, t.length = 0, o(), c = Promise.reject(new n("WritableIterable is closed")), c.catch(()=>{}), l({
                done: !0,
                value: void 0
            }));
        },
        [Symbol.asyncIterator]: ()=>({
                next () {
                    o(), c = a();
                    const n = t.shift();
                    return void 0 !== n ? Promise.resolve({
                        done: !1,
                        value: n
                    }) : s ? r ? Promise.reject(r) : Promise.resolve({
                        done: !0,
                        value: void 0
                    }) : new Promise((t, r)=>{
                        e.push({
                            resolve: t,
                            reject: r
                        });
                    });
                },
                throw: (e)=>(s = !0, r = e, t.length = 0, u(e), l({
                        done: !0,
                        value: void 0
                    }, e), Promise.resolve({
                        done: !0,
                        value: void 0
                    })),
                return: ()=>(s = !0, t.length = 0, o(), c = Promise.reject(new Error("Iterator was closed")), c.catch(()=>{}), l({
                        done: !0,
                        value: void 0
                    }), Promise.resolve({
                        done: !0,
                        value: void 0
                    }))
            })
    };
}
