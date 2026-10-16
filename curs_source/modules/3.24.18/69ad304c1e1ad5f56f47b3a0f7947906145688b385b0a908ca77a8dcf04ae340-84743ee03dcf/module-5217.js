require.d(exports, {
    C: ()=>i
});
var s = require(76982), n = require(16928), o = require("./module-43344.js");
const i = (e)=>{
    const r = (0, s.createHash)("sha1").update(e).digest("hex");
    return (0, n.join)((0, o.R)(), ".aws", "sso", "cache", `${r}.json`);
};
