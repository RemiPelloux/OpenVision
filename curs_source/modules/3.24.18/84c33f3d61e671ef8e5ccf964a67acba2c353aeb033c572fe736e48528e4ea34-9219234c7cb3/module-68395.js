require.d(exports, {
    p: ()=>p
});
var t = require(16928), n = require(65835), i = require("./module-42757.js");
const r = (e)=>Object.entries(e).filter(([e])=>{
        const s = e.indexOf(i.Q);
        return -1 !== s && Object.values(n.I).includes(e.substring(0, s));
    }).reduce((e, [s, o])=>{
        const t = s.indexOf(i.Q);
        return e[s.substring(0, t) === n.I.PROFILE ? s.substring(t + 1) : s] = o, e;
    }, {
        ...e.default && {
            default: e.default
        }
    });
var a = require("./module-53835.js"), c = require("./module-43344.js");
const l = ()=>process.env.AWS_SHARED_CREDENTIALS_FILE || (0, t.join)((0, c.R)(), ".aws", "credentials");
var g = require("./module-8041.js"), f = require("./module-65600.js");
const d = ()=>({}), p = async (e = {})=>{
    const { filepath: s = l(), configFilepath: o = (0, a.g)() } = e, n = (0, c.R)();
    let i = s;
    s.startsWith("~/") && (i = (0, t.join)(n, s.slice(2)));
    let p = o;
    o.startsWith("~/") && (p = (0, t.join)(n, o.slice(2)));
    const u = await Promise.all([
        (0, f.TA)(p, {
            ignoreCache: e.ignoreCache
        }).then(g.A).then(r).catch(d),
        (0, f.TA)(i, {
            ignoreCache: e.ignoreCache
        }).then(g.A).catch(d)
    ]);
    return {
        configFile: u[0],
        credentialsFile: u[1]
    };
};
