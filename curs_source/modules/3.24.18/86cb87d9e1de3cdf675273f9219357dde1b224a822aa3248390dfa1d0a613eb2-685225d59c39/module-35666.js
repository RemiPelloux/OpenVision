require.d(exports, {
    a: ()=>i,
    v: ()=>r
});
var t = require(91943), n = require("./module-5217.js");
const i = {}, r = async (e)=>{
    if (i[e]) return i[e];
    const s = (0, n.C)(e), o = await (0, t.readFile)(s, "utf8");
    return JSON.parse(o);
};
