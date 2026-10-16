require.d(exports, {
    C: ()=>c
});
var t = require(76982), s = require(16928), n = require(43344);
const c = (e)=>{
    const r = (0, t.createHash)("sha1").update(e).digest("hex");
    return (0, s.join)((0, n.R)(), ".aws", "sso", "cache", `${r}.json`);
};
