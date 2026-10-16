require.d(exports, {
    a: ()=>i,
    v: ()=>s
});
var o = require(91943), t = require("./module-5217.js");
const i = {}, s = async (e)=>{
    if (i[e]) return i[e];
    const r = (0, t.C)(e), n = await (0, o.readFile)(r, "utf8");
    return JSON.parse(n);
};
