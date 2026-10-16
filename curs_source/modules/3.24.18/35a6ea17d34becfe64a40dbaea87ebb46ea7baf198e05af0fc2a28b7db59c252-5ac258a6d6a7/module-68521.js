require.d(exports, {
    B: ()=>r
});
const r = (e, t, n)=>{
    let r, o, a, s = !1;
    const i = async ()=>{
        o || (o = e());
        try {
            r = await o, a = !0, s = !1;
        } finally{
            o = void 0;
        }
        return r;
    };
    return void 0 === t ? async (e)=>(a && !e?.forceRefresh || (r = await i()), r) : async (e)=>(a && !e?.forceRefresh || (r = await i()), s ? r : n && !n(r) ? (s = !0, r) : t(r) ? (await i(), r) : r);
};
