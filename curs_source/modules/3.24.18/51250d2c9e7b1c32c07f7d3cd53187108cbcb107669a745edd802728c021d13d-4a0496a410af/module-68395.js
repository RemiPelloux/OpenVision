require.d(exports, {
    p: ()=>p
});
var o = require(16928), r = require(65835), n = require("./module-42757.js");
const i = (t)=>Object.entries(t).filter(([t])=>{
        const e = t.indexOf(n.Q);
        return -1 !== e && Object.values(r.I).includes(t.substring(0, e));
    }).reduce((t, [e, s])=>{
        const o = e.indexOf(n.Q);
        return t[e.substring(0, o) === r.I.PROFILE ? e.substring(o + 1) : e] = s, t;
    }, {
        ...t.default && {
            default: t.default
        }
    });
var c = require("./module-53835.js"), a = require(43344);
const h = ()=>process.env.AWS_SHARED_CREDENTIALS_FILE || (0, o.join)((0, a.R)(), ".aws", "credentials");
var l = require("./module-8041.js"), d = require(65600);
const u = ()=>({}), p = async (t = {})=>{
    const { filepath: e = h(), configFilepath: s = (0, c.g)() } = t, r = (0, a.R)();
    let n = e;
    e.startsWith("~/") && (n = (0, o.join)(r, e.slice(2)));
    let p = s;
    s.startsWith("~/") && (p = (0, o.join)(r, s.slice(2)));
    const f = await Promise.all([
        (0, d.TA)(p, {
            ignoreCache: t.ignoreCache
        }).then(l.A).then(i).catch(u),
        (0, d.TA)(n, {
            ignoreCache: t.ignoreCache
        }).then(l.A).catch(u)
    ]);
    return {
        configFile: f[0],
        credentialsFile: f[1]
    };
};
