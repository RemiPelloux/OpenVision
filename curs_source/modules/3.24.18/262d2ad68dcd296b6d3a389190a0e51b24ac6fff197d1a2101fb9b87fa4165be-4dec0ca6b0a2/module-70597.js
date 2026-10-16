"use strict";
const n = require("./module-5336.js");
module.exports = (e = "")=>{
    const t = e.match(n);
    if (!t) return null;
    const [r, o] = t[0].replace(/#! ?/, "").split(" "), s = r.split("/").pop();
    return "env" === s ? o : o ? `${s} ${o}` : s;
};
