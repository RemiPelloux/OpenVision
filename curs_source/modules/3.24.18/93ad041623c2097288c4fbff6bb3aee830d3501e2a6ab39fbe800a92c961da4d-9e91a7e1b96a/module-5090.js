"use strict";
require.d(exports, {
    F: ()=>a
});
var n = require("./module-12046.js"), s = require("./module-19497.js"), i = require("./module-93451.js"), o = require("./module-15235.js");
const a = (e, t)=>{
    const { assign: r } = e;
    if (r && r in t.referenceRecord) throw new i.c(`'${r}' is already defined in Reference Record.`);
    const a = (0, o.Tx)(e, t);
    t.logger?.debug?.(`${n.z} evaluateCondition: ${(0, s.m)(e)} = ${(0, s.m)(a)}`);
    const c = "" === a || !!a;
    return null != r ? {
        result: c,
        toAssign: {
            name: r,
            value: a
        }
    } : {
        result: c
    };
};
