require.d(exports, {
    R: ()=>i
});
var s = require(70857), n = require(16928);
const o = {}, i = ()=>{
    const { HOME: e, USERPROFILE: r, HOMEPATH: t, HOMEDRIVE: i = `C:${n.sep}` } = process.env;
    if (e) return e;
    if (r) return r;
    if (t) return `${i}${t}`;
    const c = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return o[c] || (o[c] = (0, s.homedir)()), o[c];
};
