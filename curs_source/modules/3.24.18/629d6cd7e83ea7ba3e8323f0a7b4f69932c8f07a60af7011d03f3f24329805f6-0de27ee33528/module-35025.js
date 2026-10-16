"use strict";
const r = require("./module-72005.js");
module.exports = (A)=>{
    const e = A?.maxRedirections;
    return (A)=>function(t, s) {
            const { maxRedirections: o = e, ...n } = t;
            if (!o) return A(t, s);
            const i = new r(A, o, t, s);
            return A(n, i);
        };
};
