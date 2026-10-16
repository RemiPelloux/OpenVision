require.d(exports, {
    a: ()=>i,
    v: ()=>s
});
var r = require(91943), t = require("./module-5217.js");
const i = {}, s = async (e)=>{
    if (i[e]) return i[e];
    const n = (0, t.C)(e), o = await (0, r.readFile)(n, "utf8");
    return JSON.parse(o);
};
