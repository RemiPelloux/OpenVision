require.d(exports, {
    a: ()=>o,
    v: ()=>i
});
var s = require(91943), n = require("./module-5217.js");
const o = {}, i = async (e)=>{
    if (o[e]) return o[e];
    const r = (0, n.C)(e), t = await (0, s.readFile)(r, "utf8");
    return JSON.parse(t);
};
