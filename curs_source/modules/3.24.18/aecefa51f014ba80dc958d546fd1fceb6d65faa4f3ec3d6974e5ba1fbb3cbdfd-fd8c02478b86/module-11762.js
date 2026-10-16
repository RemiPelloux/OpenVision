require.d(exports, {
    I_: ()=>u,
    t6: ()=>l
});
var r = require(51455), n = require(91105), o = require(76760);
const s = "canvas", a = [
    "EEXIST",
    "ENOTEMPTY",
    "ENOENT"
];
function l(e) {
    const t = e?.code;
    if ("string" == typeof t && a.includes(t)) return !0;
    const i = e instanceof Error ? e.message : "string" == typeof e ? e : "";
    return a.some((e)=>i.includes(e));
}
const c = new Map;
async function u(e) {
    const t = e.skillsDir ?? (0, n.T2h)(), i = function(e = (0, n.T2h)()) {
        return (0, o.join)(e, s, "sdk");
    }(t), a = c.get(i);
    if (void 0 !== a) return a;
    const l = async function(e, t, i) {
        const n = function(e) {
            return (0, o.join)(e, "dist", "agent-sdk", "cursor", "canvas");
        }(e), a = (0, o.join)(t, s);
        try {
            await (0, r.access)(n);
        } catch (e) {
            if ("ENOENT" === e.code) return !1;
            throw e;
        }
        try {
            await (0, r.access)(a);
        } catch (e) {
            if ("ENOENT" === e.code) return !1;
            throw e;
        }
        return await (0, r.mkdir)(a, {
            recursive: !0
        }), await (0, r.rm)(i, {
            recursive: !0,
            force: !0
        }), await (0, r.cp)(n, i, {
            force: !0,
            recursive: !0
        }), !0;
    }(e.extensionPath, t, i);
    c.set(i, l);
    try {
        return await l;
    } finally{
        c.delete(i);
    }
}
