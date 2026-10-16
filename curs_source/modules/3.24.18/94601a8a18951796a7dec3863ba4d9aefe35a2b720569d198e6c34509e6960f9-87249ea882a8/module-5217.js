require.d(exports, {
    C: ()=>r
});
var t = require(76982), n = require(16928), i = require(43344);
const r = (e)=>{
    const s = (0, t.createHash)("sha1").update(e).digest("hex");
    return (0, n.join)((0, i.R)(), ".aws", "sso", "cache", `${s}.json`);
};
