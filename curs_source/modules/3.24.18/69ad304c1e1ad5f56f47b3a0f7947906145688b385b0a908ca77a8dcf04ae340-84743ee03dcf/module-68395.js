require.d(exports, {
    p: ()=>p
});
var s = require(16928), n = require(65835), o = require("./module-42757.js");
const i = (e)=>Object.entries(e).filter(([e])=>{
        const r = e.indexOf(o.Q);
        return -1 !== r && Object.values(n.I).includes(e.substring(0, r));
    }).reduce((e, [r, t])=>{
        const s = r.indexOf(o.Q);
        return e[r.substring(0, s) === n.I.PROFILE ? r.substring(s + 1) : r] = t, e;
    }, {
        ...e.default && {
            default: e.default
        }
    });
var c = require("./module-53835.js"), a = require("./module-43344.js");
const d = ()=>process.env.AWS_SHARED_CREDENTIALS_FILE || (0, s.join)((0, a.R)(), ".aws", "credentials");
var l = require("./module-8041.js"), f = require("./module-65600.js");
const u = ()=>({}), p = async (e = {})=>{
    const { filepath: r = d(), configFilepath: t = (0, c.g)() } = e, n = (0, a.R)();
    let o = r;
    r.startsWith("~/") && (o = (0, s.join)(n, r.slice(2)));
    let p = t;
    t.startsWith("~/") && (p = (0, s.join)(n, t.slice(2)));
    const g = await Promise.all([
        (0, f.TA)(p, {
            ignoreCache: e.ignoreCache
        }).then(l.A).then(i).catch(u),
        (0, f.TA)(o, {
            ignoreCache: e.ignoreCache
        }).then(l.A).catch(u)
    ]);
    return {
        configFile: g[0],
        credentialsFile: g[1]
    };
};
