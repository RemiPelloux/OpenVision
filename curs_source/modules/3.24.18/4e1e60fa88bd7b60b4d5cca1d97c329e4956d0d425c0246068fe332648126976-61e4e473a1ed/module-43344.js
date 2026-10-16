require.d(exports, {
    R: ()=>i
});
var n = require(70857), o = require(16928);
const s = {}, i = ()=>{
    const { HOME: e, USERPROFILE: t, HOMEPATH: r, HOMEDRIVE: i = `C:${o.sep}` } = process.env;
    if (e) return e;
    if (t) return t;
    if (r) return `${i}${r}`;
    const a = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return s[a] || (s[a] = (0, n.homedir)()), s[a];
};
