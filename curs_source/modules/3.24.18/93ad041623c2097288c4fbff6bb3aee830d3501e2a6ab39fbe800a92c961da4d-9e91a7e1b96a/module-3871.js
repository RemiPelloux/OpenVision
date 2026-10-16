"use strict";
require.d(exports, {
    o: ()=>s
});
const n = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"), s = (e)=>n.test(e) || e.startsWith("[") && e.endsWith("]");
