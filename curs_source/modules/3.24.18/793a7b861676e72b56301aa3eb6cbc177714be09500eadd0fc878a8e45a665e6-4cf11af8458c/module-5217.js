require.d(exports, {
    C: ()=>s
});
var r = require(76982), t = require(16928), i = require(43344);
const s = (e)=>{
    const n = (0, r.createHash)("sha1").update(e).digest("hex");
    return (0, t.join)((0, i.R)(), ".aws", "sso", "cache", `${n}.json`);
};
