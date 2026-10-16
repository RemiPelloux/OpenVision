"use strict";
const n = require("./module-5336.js");
module.exports = (e = "")=>{
    const t = e.match(n);
    if (!t) return null;
    const [r, s] = t[0].replace(/#! ?/, "").split(" "), o = r.split("/").pop();
    return "env" === o ? s : s ? `${o} ${s}` : o;
};
