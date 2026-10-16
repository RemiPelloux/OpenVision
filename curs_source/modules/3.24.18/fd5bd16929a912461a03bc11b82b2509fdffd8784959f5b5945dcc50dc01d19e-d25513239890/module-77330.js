"use strict";
require.d(exports, {
    Fb: ()=>i
});
var n = require("./module-93451.js"), s = require("./module-26713.js");
const i = (e, t)=>Object.entries(e).reduce((e, [r, n])=>(e[r] = a.getEndpointProperty(n, t), e), {}), o = (e, t)=>{
    if (Array.isArray(e)) return e.map((e)=>o(e, t));
    switch(typeof e){
        case "string":
            return (0, s.M)(e, t);
        case "object":
            if (null === e) throw new n.c(`Unexpected endpoint property: ${e}`);
            return a.getEndpointProperties(e, t);
        case "boolean":
            return e;
        default:
            throw new n.c("Unexpected endpoint property type: " + typeof e);
    }
}, a = {
    getEndpointProperty: o,
    getEndpointProperties: i
};
