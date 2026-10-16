require.d(exports, {
    n: ()=>s
});
var r = require(90443), n = require(6846);
const s = (e)=>{
    let t;
    if (t = "string" == typeof e ? (0, n.a)(e) : e, "object" != typeof t || "number" != typeof t.byteOffset || "number" != typeof t.byteLength) throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    return (0, r.Q)(t.buffer, t.byteOffset, t.byteLength).toString("base64");
};
