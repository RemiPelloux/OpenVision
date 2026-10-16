"use strict";
require.d(exports, {
    Fc: ()=>n,
    GG: ()=>i,
    OR: ()=>s,
    zH: ()=>o
});
const n = "AWS_REGION", s = "region", i = {
    environmentVariableSelector: (e)=>e[n],
    configFileSelector: (e)=>e[s],
    default: ()=>{
        throw new Error("Region is missing");
    }
}, o = {
    preferredFile: "credentials"
};
