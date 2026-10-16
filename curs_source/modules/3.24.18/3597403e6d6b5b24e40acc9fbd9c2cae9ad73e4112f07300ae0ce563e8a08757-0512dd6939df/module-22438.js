require.d(exports, {
    E: ()=>s
});
var a = require(48161);
function r(t, e) {
    const n = [
        [
            e.canvasesDir,
            "<canvasesDir>"
        ],
        [
            e.sdkSourceDir,
            "<sdkSourceDir>"
        ],
        [
            (0, a.homedir)(),
            "~"
        ]
    ];
    n.sort((t, e)=>e[0].length - t[0].length);
    let r = t;
    for (const [t, e] of n)0 !== t.length && r.includes(t) && (r = r.split(t).join(e));
    return r;
}
function s(t, e) {
    return {
        errorName: t instanceof Error && t.name.length > 0 ? t.name : "UnknownError",
        errorMessage: r(t instanceof Error ? t.message : String(t), e)
    };
}
