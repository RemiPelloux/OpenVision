"use strict";
require.d(exports, {
    n: ()=>i
});
var n = require(73931), s = require("./module-88141.js");
const i = (e)=>{
    e = n.HttpRequest.clone(e);
    for (const t of Object.keys(e.headers))s.pj.indexOf(t.toLowerCase()) > -1 && delete e.headers[t];
    return e;
};
