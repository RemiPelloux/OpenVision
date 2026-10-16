require.d(exports, {
    Y: ()=>n
});
var t = require("./module-68395.js");
const n = async (e)=>{
    const s = await (0, t.p)(e);
    return ((...e)=>{
        const s = {};
        for (const o of e)for (const [e, t] of Object.entries(o))void 0 !== s[e] ? Object.assign(s[e], t) : s[e] = t;
        return s;
    })(s.configFile, s.credentialsFile);
};
