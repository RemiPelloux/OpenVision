"use strict";
require.d(exports, {
    t: ()=>n
});
const n = (e)=>{
    if ("function" == typeof e) return e;
    const t = Promise.resolve(e);
    return ()=>t;
};
