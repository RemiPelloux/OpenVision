require.d(exports, {
    a: ()=>n,
    v: ()=>c
});
var t = require(91943), s = require("./module-5217.js");
const n = {}, c = async (e)=>{
    if (n[e]) return n[e];
    const r = (0, s.C)(e), o = await (0, t.readFile)(r, "utf8");
    return JSON.parse(o);
};
