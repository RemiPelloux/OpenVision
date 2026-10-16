require.d(exports, {
    p: ()=>p
});
var r = require(16928), o = require(65835), a = require("./module-42757.js");
const s = (e)=>Object.entries(e).filter(([e])=>{
        const t = e.indexOf(a.Q);
        return -1 !== t && Object.values(o.I).includes(e.substring(0, t));
    }).reduce((e, [t, n])=>{
        const r = t.indexOf(a.Q);
        return e[t.substring(0, r) === o.I.PROFILE ? t.substring(r + 1) : t] = n, e;
    }, {
        ...e.default && {
            default: e.default
        }
    });
var i = require("./module-53835.js"), c = require("./module-43344.js");
const l = ()=>process.env.AWS_SHARED_CREDENTIALS_FILE || (0, r.join)((0, c.R)(), ".aws", "credentials");
var d = require("./module-8041.js"), u = require("./module-65600.js");
const f = ()=>({}), p = async (e = {})=>{
    const { filepath: t = l(), configFilepath: n = (0, i.g)() } = e, o = (0, c.R)();
    let a = t;
    t.startsWith("~/") && (a = (0, r.join)(o, t.slice(2)));
    let p = n;
    n.startsWith("~/") && (p = (0, r.join)(o, n.slice(2)));
    const g = await Promise.all([
        (0, u.TA)(p, {
            ignoreCache: e.ignoreCache
        }).then(d.A).then(s).catch(f),
        (0, u.TA)(a, {
            ignoreCache: e.ignoreCache
        }).then(d.A).catch(f)
    ]);
    return {
        configFile: g[0],
        credentialsFile: g[1]
    };
};
