require.d(exports, {
    Qf: ()=>o,
    ic: ()=>i
});
const i = "sandbox_read_control_portal";
function o(e) {
    let s = !1, t = 0;
    const o = ()=>{
        const i = ++t;
        Promise.resolve(e.checkFeatureGate()).then((e)=>{
            i === t && (s = e);
        }, ()=>{
            i === t && (s = !1);
        });
    };
    o();
    const n = e.onDidChangeGates((e)=>{
        var s;
        (void 0 === (s = e.changedGates) || s.includes(i)) && o();
    });
    return {
        getEnabled: ()=>s,
        dispose: ()=>n.dispose()
    };
}
