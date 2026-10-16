require.d(exports, {
    C: ()=>s
});
var o = require(76982), t = require(16928), i = require("./module-43344.js");
const s = (e)=>{
    const r = (0, o.createHash)("sha1").update(e).digest("hex");
    return (0, t.join)((0, i.R)(), ".aws", "sso", "cache", `${r}.json`);
};
