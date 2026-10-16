require.d(exports, {
    Z: ()=>i
});
var o = require("./module-35666.js"), t = require("./module-65600.js");
const i = {
    getFileRecord: ()=>t.Jj,
    interceptFile (e, r) {
        t.Jj[e] = Promise.resolve(r);
    },
    getTokenRecord: ()=>o.a,
    interceptToken (e, r) {
        o.a[e] = r;
    }
};
