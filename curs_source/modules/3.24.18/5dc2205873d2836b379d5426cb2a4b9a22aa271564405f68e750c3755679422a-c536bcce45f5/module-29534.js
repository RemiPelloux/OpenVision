require.d(exports, {
    Qf: ()=>o,
    ic: ()=>i
});
const i = "sandbox_read_control_portal";
function o(e) {
    let t = !1, s = 0;
    const o = ()=>{
        const i = ++s;
        Promise.resolve(e.checkFeatureGate()).then((e)=>{
            i === s && (t = e);
        }, ()=>{
            i === s && (t = !1);
        });
    };
    o();
    const r = e.onDidChangeGates((e)=>{
        var t;
        (void 0 === (t = e.changedGates) || t.includes(i)) && o();
    });
    return {
        getEnabled: ()=>t,
        dispose: ()=>r.dispose()
    };
}
