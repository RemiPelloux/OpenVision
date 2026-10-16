"use strict";
const t = (e = {})=>{
    const t = e.env || process.env;
    return "win32" !== (e.platform || process.platform) ? "PATH" : Object.keys(t).reverse().find((e)=>"PATH" === e.toUpperCase()) || "Path";
};
module.exports = t, module.exports.default = t;
