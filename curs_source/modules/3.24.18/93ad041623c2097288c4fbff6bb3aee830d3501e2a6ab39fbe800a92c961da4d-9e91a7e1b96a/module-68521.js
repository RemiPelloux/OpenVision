"use strict";
require.d(exports, {
    B: ()=>n
});
const n = (e, t, r)=>{
    let n, s, i, o = !1;
    const a = async ()=>{
        s || (s = e());
        try {
            n = await s, i = !0, o = !1;
        } finally{
            s = void 0;
        }
        return n;
    };
    return void 0 === t ? async (e)=>(i && !e?.forceRefresh || (n = await a()), n) : async (e)=>(i && !e?.forceRefresh || (n = await a()), o ? n : r && !r(n) ? (o = !0, n) : t(n) ? (await a(), n) : n);
};
