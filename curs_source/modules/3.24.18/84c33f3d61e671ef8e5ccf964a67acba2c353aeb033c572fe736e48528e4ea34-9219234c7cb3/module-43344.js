require.d(exports, {
    R: ()=>r
});
var t = require(70857), n = require(16928);
const i = {}, r = ()=>{
    const { HOME: e, USERPROFILE: s, HOMEPATH: o, HOMEDRIVE: r = `C:${n.sep}` } = process.env;
    if (e) return e;
    if (s) return s;
    if (o) return `${r}${o}`;
    const a = process && process.geteuid ? `${process.geteuid()}` : "DEFAULT";
    return i[a] || (i[a] = (0, t.homedir)()), i[a];
};
