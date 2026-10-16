require.d(exports, {
    p: ()=>u
});
var n = require(16928), o = require(65835), s = require("./module-42757.js");
const i = (e)=>Object.entries(e).filter(([e])=>{
        const t = e.indexOf(s.Q);
        return -1 !== t && Object.values(o.I).includes(e.substring(0, t));
    }).reduce((e, [t, r])=>{
        const n = t.indexOf(s.Q);
        return e[t.substring(0, n) === o.I.PROFILE ? t.substring(n + 1) : t] = r, e;
    }, {
        ...e.default && {
            default: e.default
        }
    });
var a = require("./module-53835.js"), c = require("./module-43344.js");
const l = ()=>process.env.AWS_SHARED_CREDENTIALS_FILE || (0, n.join)((0, c.R)(), ".aws", "credentials");
var d = require("./module-8041.js"), g = require("./module-65600.js");
const f = ()=>({}), u = async (e = {})=>{
    const { filepath: t = l(), configFilepath: r = (0, a.g)() } = e, o = (0, c.R)();
    let s = t;
    t.startsWith("~/") && (s = (0, n.join)(o, t.slice(2)));
    let u = r;
    r.startsWith("~/") && (u = (0, n.join)(o, r.slice(2)));
    const p = await Promise.all([
        (0, g.TA)(u, {
            ignoreCache: e.ignoreCache
        }).then(d.A).then(i).catch(f),
        (0, g.TA)(s, {
            ignoreCache: e.ignoreCache
        }).then(d.A).catch(f)
    ]);
    return {
        configFile: p[0],
        credentialsFile: p[1]
    };
};
