require.d(exports, {
    Y: ()=>o
});
var n = require("./module-68395.js");
const o = async (e)=>{
    const t = await (0, n.p)(e);
    return ((...e)=>{
        const t = {};
        for (const r of e)for (const [e, n] of Object.entries(r))void 0 !== t[e] ? Object.assign(t[e], n) : t[e] = n;
        return t;
    })(t.configFile, t.credentialsFile);
};
