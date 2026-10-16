require.d(exports, {
    R: ()=>s
});
var r = require(70857), o = require(16928);
const a = {}, s = ()=>{
    const { HOME: e, USERPROFILE: t, HOMEPATH: n, HOMEDRIVE: s = `C:${o.sep}` } = process.env;
    if (e) return e;
    if (t) return t;
    if (n) return `${s}${n}`;
    const i = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return a[i] || (a[i] = (0, r.homedir)()), a[i];
};
