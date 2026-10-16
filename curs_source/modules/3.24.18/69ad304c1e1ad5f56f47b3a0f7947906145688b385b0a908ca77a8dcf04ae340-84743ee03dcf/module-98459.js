require.d(exports, {
    Y: ()=>n
});
var s = require("./module-68395.js");
const n = async (e)=>{
    const r = await (0, s.p)(e);
    return ((...e)=>{
        const r = {};
        for (const t of e)for (const [e, s] of Object.entries(t))void 0 !== r[e] ? Object.assign(r[e], s) : r[e] = s;
        return r;
    })(r.configFile, r.credentialsFile);
};
