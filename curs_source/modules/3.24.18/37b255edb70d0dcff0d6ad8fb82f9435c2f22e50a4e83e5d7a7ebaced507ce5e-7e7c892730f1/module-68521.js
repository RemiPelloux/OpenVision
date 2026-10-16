require.d(exports, {
    B: ()=>n
});
const n = (e, t, r)=>{
    let n, a, o, i = !1;
    const s = async ()=>{
        a || (a = e());
        try {
            n = await a, o = !0, i = !1;
        } finally{
            a = void 0;
        }
        return n;
    };
    return void 0 === t ? async (e)=>(o && !e?.forceRefresh || (n = await s()), n) : async (e)=>(o && !e?.forceRefresh || (n = await s()), i ? n : r && !r(n) ? (i = !0, n) : t(n) ? (await s(), n) : n);
};
