require.d(exports, {
    Z: ()=>i
});
var r = require("./module-35666.js"), t = require(65600);
const i = {
    getFileRecord: ()=>t.Jj,
    interceptFile (e, n) {
        t.Jj[e] = Promise.resolve(n);
    },
    getTokenRecord: ()=>r.a,
    interceptToken (e, n) {
        r.a[e] = n;
    }
};
