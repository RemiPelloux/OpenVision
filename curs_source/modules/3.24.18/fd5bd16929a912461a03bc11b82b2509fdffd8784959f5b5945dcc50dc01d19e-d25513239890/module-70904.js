"use strict";
require.d(exports, {
    N: ()=>n
});
const n = {
    setTimeout: (e, t)=>setTimeout(e, t),
    clearTimeout: (e)=>clearTimeout(e)
};
